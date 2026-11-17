export default {
  "number": 224,
  "title": "Graphs with absolute values",
  "section": 16,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "523-529"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the least value of $|2x + 8| + |2x + 12| + |3x + 15|$.",
    "form": "Answer as an integer.",
    "answer": "4",
    "solution": [
      "Find the least value of $|2x + 8| + |2x + 12| + |3x + 15|$.",
      "The breakpoints are $x = -6$, $x = -5$ and $x = -4$.",
      "For $x < -6$ the graph of the sum has slope $-2 - 2 - 3 = -7$.",
      "For $-6 \\le x < -5$ the slope is $-7 + 4 = -3$.",
      "For $-5 \\le x < -4$ the slope is $-3 + 6 = 3$.",
      "For $x \\ge -4$ the slope is $3 + 4 = 7$.",
      "The value falls for $x < -5$ and rises for $x > -5$.",
      "At $x = -5$: $|2 \\cdot (-5) + 8| + |2 \\cdot (-5) + 12| + |3 \\cdot (-5) + 15| = 2 + 2 + 0 = 4$",
      "The least value is $4$."
    ]
  },
  "ideas": [],
  "kinds": [
    {
      "id": "t224-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the least value of $|2x + 2| + |2x - 12| + |x + 3|$.",
            "lines": [
              {
                "step": "Find the least value of $|2x + 2| + |2x - 12| + |x + 3|$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The breakpoints are $x = -3$, $x = -1$ and $x = 6$.",
                "reason": "Breakpoints: $x + 3 = 0$ at $x = -3$, $2x + 2 = 0$ at $x = -1$ and $2x - 12 = 0$ at $x = 6$, which split the number line into four pieces."
              },
              {
                "step": "For $x < -3$ the graph of the sum has slope $-2 - 2 - 1 = -5$.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: every inside is negative here, so each absolute value is the negative of its inside, and the coefficients of $x$ are $-2$, $-2$ and $-1$."
              },
              {
                "step": "For $-3 \\le x < -1$ the slope is $-5 + 2 = -3$.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -3$ on the inside $x + 3$ is no longer negative, so its term changes from $-(x + 3)$ to $x + 3$ and the slope rises by $2$."
              },
              {
                "step": "For $-1 \\le x < 6$ the slope is $-3 + 4 = 1$.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -1$ on the inside $2x + 2$ is no longer negative, so its term changes from $-(2x + 2)$ to $2x + 2$ and the slope rises by $4$."
              },
              {
                "step": "For $x \\ge 6$ the slope is $1 + 4 = 5$.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 6$ on the inside $2x - 12$ is no longer negative, so its term changes from $-(2x - 12)$ to $2x - 12$ and the slope rises by $4$."
              },
              {
                "step": "The value falls for $x < -1$ and rises for $x > -1$.",
                "reason": "Positive, negative, zero and undefined slope: a line with negative slope goes down from left to right, and one with positive slope goes up."
              },
              {
                "step": "At $x = -1$: $|2 \\cdot (-1) + 2| + |2 \\cdot (-1) - 12| + |-1 + 3| = 0 + 14 + 2 = 16$",
                "reason": "Substituting a value: the number $-1$ takes the place of $x$."
              },
              {
                "step": "The least value is $16$.",
                "reason": "Greatest and least value: the sum takes the value $16$ at $x = -1$, and every other $x$ gives more."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $|3x - 18| + |x + 2| + |x + 3|$.",
              "form": "Answer as an integer.",
              "answer": "17",
              "lines": [
                {
                  "step": "Find the least value of $|3x - 18| + |x + 2| + |x + 3|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -3$, $x = -2$ and $x = 6$.",
                  "reason": "Breakpoints: $x + 3 = 0$ at $x = -3$, $x + 2 = 0$ at $x = -2$ and $3x - 18 = 0$ at $x = 6$, which split the number line into four pieces."
                },
                {
                  "step": "For $x < -3$ the graph of the sum has slope $-3 - 1 - 1 = -5$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: every inside is negative here, so each absolute value is the negative of its inside, and the coefficients of $x$ are $-3$, $-1$ and $-1$."
                },
                {
                  "step": "For $-3 \\le x < -2$ the slope is $-5 + 2 = -3$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -3$ on the inside $x + 3$ is no longer negative, so its term changes from $-(x + 3)$ to $x + 3$ and the slope rises by $2$."
                },
                {
                  "step": "For $-2 \\le x < 6$ the slope is $-3 + 2 = -1$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -2$ on the inside $x + 2$ is no longer negative, so its term changes from $-(x + 2)$ to $x + 2$ and the slope rises by $2$."
                },
                {
                  "step": "For $x \\ge 6$ the slope is $-1 + 6 = 5$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 6$ on the inside $3x - 18$ is no longer negative, so its term changes from $-(3x - 18)$ to $3x - 18$ and the slope rises by $6$."
                },
                {
                  "step": "The value falls for $x < 6$ and rises for $x > 6$.",
                  "reason": "Positive, negative, zero and undefined slope: a line with negative slope goes down from left to right, and one with positive slope goes up."
                },
                {
                  "step": "At $x = 6$: $|3 \\cdot 6 - 18| + |6 + 2| + |6 + 3| = 0 + 8 + 9 = 17$",
                  "reason": "Substituting a value: the number $6$ takes the place of $x$."
                },
                {
                  "step": "The least value is $17$.",
                  "reason": "Greatest and least value: the sum takes the value $17$ at $x = 6$, and every other $x$ gives more."
                }
              ]
            },
            {
              "prompt": "Find the least value of $|x - 4| + |x + 3| + |3x + 18|$.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find the least value of $|x - 4| + |x + 3| + |3x + 18|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -6$, $x = -3$ and $x = 4$.",
                  "reason": "Breakpoints: $3x + 18 = 0$ at $x = -6$, $x + 3 = 0$ at $x = -3$ and $x - 4 = 0$ at $x = 4$, which split the number line into four pieces."
                },
                {
                  "step": "For $x < -6$ the graph of the sum has slope $-1 - 1 - 3 = -5$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: every inside is negative here, so each absolute value is the negative of its inside, and the coefficients of $x$ are $-1$, $-1$ and $-3$."
                },
                {
                  "step": "For $-6 \\le x < -3$ the slope is $-5 + 6 = 1$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -6$ on the inside $3x + 18$ is no longer negative, so its term changes from $-(3x + 18)$ to $3x + 18$ and the slope rises by $6$."
                },
                {
                  "step": "For $-3 \\le x < 4$ the slope is $1 + 2 = 3$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -3$ on the inside $x + 3$ is no longer negative, so its term changes from $-(x + 3)$ to $x + 3$ and the slope rises by $2$."
                },
                {
                  "step": "For $x \\ge 4$ the slope is $3 + 2 = 5$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 4$ on the inside $x - 4$ is no longer negative, so its term changes from $-(x - 4)$ to $x - 4$ and the slope rises by $2$."
                },
                {
                  "step": "The value falls for $x < -6$ and rises for $x > -6$.",
                  "reason": "Positive, negative, zero and undefined slope: a line with negative slope goes down from left to right, and one with positive slope goes up."
                },
                {
                  "step": "At $x = -6$: $|-6 - 4| + |-6 + 3| + |3 \\cdot (-6) + 18| = 10 + 3 + 0 = 13$",
                  "reason": "Substituting a value: the number $-6$ takes the place of $x$."
                },
                {
                  "step": "The least value is $13$.",
                  "reason": "Greatest and least value: the sum takes the value $13$ at $x = -6$, and every other $x$ gives more."
                }
              ]
            },
            {
              "prompt": "Find the least value of $|2x - 8| + |3x + 12| + |2x - 6|$.",
              "form": "Answer as an integer.",
              "answer": "23",
              "lines": [
                {
                  "step": "Find the least value of $|2x - 8| + |3x + 12| + |2x - 6|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -4$, $x = 3$ and $x = 4$.",
                  "reason": "Breakpoints: $3x + 12 = 0$ at $x = -4$, $2x - 6 = 0$ at $x = 3$ and $2x - 8 = 0$ at $x = 4$, which split the number line into four pieces."
                },
                {
                  "step": "For $x < -4$ the graph of the sum has slope $-2 - 3 - 2 = -7$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: every inside is negative here, so each absolute value is the negative of its inside, and the coefficients of $x$ are $-2$, $-3$ and $-2$."
                },
                {
                  "step": "For $-4 \\le x < 3$ the slope is $-7 + 6 = -1$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -4$ on the inside $3x + 12$ is no longer negative, so its term changes from $-(3x + 12)$ to $3x + 12$ and the slope rises by $6$."
                },
                {
                  "step": "For $3 \\le x < 4$ the slope is $-1 + 4 = 3$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 3$ on the inside $2x - 6$ is no longer negative, so its term changes from $-(2x - 6)$ to $2x - 6$ and the slope rises by $4$."
                },
                {
                  "step": "For $x \\ge 4$ the slope is $3 + 4 = 7$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 4$ on the inside $2x - 8$ is no longer negative, so its term changes from $-(2x - 8)$ to $2x - 8$ and the slope rises by $4$."
                },
                {
                  "step": "The value falls for $x < 3$ and rises for $x > 3$.",
                  "reason": "Positive, negative, zero and undefined slope: a line with negative slope goes down from left to right, and one with positive slope goes up."
                },
                {
                  "step": "At $x = 3$: $|2 \\cdot 3 - 8| + |3 \\cdot 3 + 12| + |2 \\cdot 3 - 6| = 2 + 21 + 0 = 23$",
                  "reason": "Substituting a value: the number $3$ takes the place of $x$."
                },
                {
                  "step": "The least value is $23$.",
                  "reason": "Greatest and least value: the sum takes the value $23$ at $x = 3$, and every other $x$ gives more."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value of $|x - 7| + |3x - 12| + |x + 7|$ for $0 \\le x \\le 7$.",
            "lines": [
              {
                "step": "Find the greatest value of $|x - 7| + |3x - 12| + |x + 7|$ for $0 \\le x \\le 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The breakpoints are $x = -7$, $x = 4$ and $x = 7$.",
                "reason": "Breakpoints: $x + 7 = 0$ at $x = -7$, $3x - 12 = 0$ at $x = 4$ and $x - 7 = 0$ at $x = 7$, which split the number line into four pieces."
              },
              {
                "step": "For $x < -7$ the graph of the sum has slope $-1 - 3 - 1 = -5$.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: every inside is negative here, so each absolute value is the negative of its inside, and the coefficients of $x$ are $-1$, $-3$ and $-1$."
              },
              {
                "step": "For $-7 \\le x < 4$ the slope is $-5 + 2 = -3$.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -7$ on the inside $x + 7$ is no longer negative, so its term changes from $-(x + 7)$ to $x + 7$ and the slope rises by $2$."
              },
              {
                "step": "For $4 \\le x < 7$ the slope is $-3 + 6 = 3$.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 4$ on the inside $3x - 12$ is no longer negative, so its term changes from $-(3x - 12)$ to $3x - 12$ and the slope rises by $6$."
              },
              {
                "step": "For $x \\ge 7$ the slope is $3 + 2 = 5$.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 7$ on the inside $x - 7$ is no longer negative, so its term changes from $-(x - 7)$ to $x - 7$ and the slope rises by $2$."
              },
              {
                "step": "The value falls for $x < 4$ and rises for $x > 4$.",
                "reason": "Positive, negative, zero and undefined slope: a line with negative slope goes down from left to right, and one with positive slope goes up."
              },
              {
                "step": "On $0 \\le x \\le 7$ the greatest value is at $x = 0$ or at $x = 7$.",
                "reason": "Greatest and least value: the value falls up to $x = 4$ and rises after it, so on the interval it is greatest at one of the two ends."
              },
              {
                "step": "At $x = 0$: $|0 - 7| + |3 \\cdot 0 - 12| + |0 + 7| = 7 + 12 + 7 = 26$",
                "reason": "Substituting a value: the number $0$ takes the place of $x$."
              },
              {
                "step": "At $x = 7$: $|7 - 7| + |3 \\cdot 7 - 12| + |7 + 7| = 0 + 9 + 14 = 23$",
                "reason": "Substituting a value: the number $7$ takes the place of $x$."
              },
              {
                "step": "The greatest value is $26$.",
                "reason": "Greatest and least value: the larger of the two end values is the greatest value on the interval."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $|2x + 4| + |x + 7| + |2x - 10|$ for $-5 \\le x \\le 7$.",
              "form": "Answer as an integer.",
              "answer": "36",
              "lines": [
                {
                  "step": "Find the greatest value of $|2x + 4| + |x + 7| + |2x - 10|$ for $-5 \\le x \\le 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -7$, $x = -2$ and $x = 5$.",
                  "reason": "Breakpoints: $x + 7 = 0$ at $x = -7$, $2x + 4 = 0$ at $x = -2$ and $2x - 10 = 0$ at $x = 5$, which split the number line into four pieces."
                },
                {
                  "step": "For $x < -7$ the graph of the sum has slope $-2 - 1 - 2 = -5$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: every inside is negative here, so each absolute value is the negative of its inside, and the coefficients of $x$ are $-2$, $-1$ and $-2$."
                },
                {
                  "step": "For $-7 \\le x < -2$ the slope is $-5 + 2 = -3$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -7$ on the inside $x + 7$ is no longer negative, so its term changes from $-(x + 7)$ to $x + 7$ and the slope rises by $2$."
                },
                {
                  "step": "For $-2 \\le x < 5$ the slope is $-3 + 4 = 1$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -2$ on the inside $2x + 4$ is no longer negative, so its term changes from $-(2x + 4)$ to $2x + 4$ and the slope rises by $4$."
                },
                {
                  "step": "For $x \\ge 5$ the slope is $1 + 4 = 5$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 5$ on the inside $2x - 10$ is no longer negative, so its term changes from $-(2x - 10)$ to $2x - 10$ and the slope rises by $4$."
                },
                {
                  "step": "The value falls for $x < -2$ and rises for $x > -2$.",
                  "reason": "Positive, negative, zero and undefined slope: a line with negative slope goes down from left to right, and one with positive slope goes up."
                },
                {
                  "step": "On $-5 \\le x \\le 7$ the greatest value is at $x = -5$ or at $x = 7$.",
                  "reason": "Greatest and least value: the value falls up to $x = -2$ and rises after it, so on the interval it is greatest at one of the two ends."
                },
                {
                  "step": "At $x = -5$: $|2 \\cdot (-5) + 4| + |-5 + 7| + |2 \\cdot (-5) - 10| = 6 + 2 + 20 = 28$",
                  "reason": "Substituting a value: the number $-5$ takes the place of $x$."
                },
                {
                  "step": "At $x = 7$: $|2 \\cdot 7 + 4| + |7 + 7| + |2 \\cdot 7 - 10| = 18 + 14 + 4 = 36$",
                  "reason": "Substituting a value: the number $7$ takes the place of $x$."
                },
                {
                  "step": "The greatest value is $36$.",
                  "reason": "Greatest and least value: the larger of the two end values is the greatest value on the interval."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $|2x - 8| + |2x + 12| + |x + 1|$ for $-5 \\le x \\le 2$.",
              "form": "Answer as an integer.",
              "answer": "24",
              "lines": [
                {
                  "step": "Find the greatest value of $|2x - 8| + |2x + 12| + |x + 1|$ for $-5 \\le x \\le 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -6$, $x = -1$ and $x = 4$.",
                  "reason": "Breakpoints: $2x + 12 = 0$ at $x = -6$, $x + 1 = 0$ at $x = -1$ and $2x - 8 = 0$ at $x = 4$, which split the number line into four pieces."
                },
                {
                  "step": "For $x < -6$ the graph of the sum has slope $-2 - 2 - 1 = -5$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: every inside is negative here, so each absolute value is the negative of its inside, and the coefficients of $x$ are $-2$, $-2$ and $-1$."
                },
                {
                  "step": "For $-6 \\le x < -1$ the slope is $-5 + 4 = -1$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -6$ on the inside $2x + 12$ is no longer negative, so its term changes from $-(2x + 12)$ to $2x + 12$ and the slope rises by $4$."
                },
                {
                  "step": "For $-1 \\le x < 4$ the slope is $-1 + 2 = 1$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -1$ on the inside $x + 1$ is no longer negative, so its term changes from $-(x + 1)$ to $x + 1$ and the slope rises by $2$."
                },
                {
                  "step": "For $x \\ge 4$ the slope is $1 + 4 = 5$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 4$ on the inside $2x - 8$ is no longer negative, so its term changes from $-(2x - 8)$ to $2x - 8$ and the slope rises by $4$."
                },
                {
                  "step": "The value falls for $x < -1$ and rises for $x > -1$.",
                  "reason": "Positive, negative, zero and undefined slope: a line with negative slope goes down from left to right, and one with positive slope goes up."
                },
                {
                  "step": "On $-5 \\le x \\le 2$ the greatest value is at $x = -5$ or at $x = 2$.",
                  "reason": "Greatest and least value: the value falls up to $x = -1$ and rises after it, so on the interval it is greatest at one of the two ends."
                },
                {
                  "step": "At $x = -5$: $|2 \\cdot (-5) - 8| + |2 \\cdot (-5) + 12| + |-5 + 1| = 18 + 2 + 4 = 24$",
                  "reason": "Substituting a value: the number $-5$ takes the place of $x$."
                },
                {
                  "step": "At $x = 2$: $|2 \\cdot 2 - 8| + |2 \\cdot 2 + 12| + |2 + 1| = 4 + 16 + 3 = 23$",
                  "reason": "Substituting a value: the number $2$ takes the place of $x$."
                },
                {
                  "step": "The greatest value is $24$.",
                  "reason": "Greatest and least value: the larger of the two end values is the greatest value on the interval."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $|3x - 9| + |2x + 2| + |x - 6|$ for $-1 \\le x \\le 9$.",
              "form": "Answer as an integer.",
              "answer": "41",
              "lines": [
                {
                  "step": "Find the greatest value of $|3x - 9| + |2x + 2| + |x - 6|$ for $-1 \\le x \\le 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -1$, $x = 3$ and $x = 6$.",
                  "reason": "Breakpoints: $2x + 2 = 0$ at $x = -1$, $3x - 9 = 0$ at $x = 3$ and $x - 6 = 0$ at $x = 6$, which split the number line into four pieces."
                },
                {
                  "step": "For $x < -1$ the graph of the sum has slope $-3 - 2 - 1 = -6$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: every inside is negative here, so each absolute value is the negative of its inside, and the coefficients of $x$ are $-3$, $-2$ and $-1$."
                },
                {
                  "step": "For $-1 \\le x < 3$ the slope is $-6 + 4 = -2$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = -1$ on the inside $2x + 2$ is no longer negative, so its term changes from $-(2x + 2)$ to $2x + 2$ and the slope rises by $4$."
                },
                {
                  "step": "For $3 \\le x < 6$ the slope is $-2 + 6 = 4$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 3$ on the inside $3x - 9$ is no longer negative, so its term changes from $-(3x - 9)$ to $3x - 9$ and the slope rises by $6$."
                },
                {
                  "step": "For $x \\ge 6$ the slope is $4 + 2 = 6$.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: from $x = 6$ on the inside $x - 6$ is no longer negative, so its term changes from $-(x - 6)$ to $x - 6$ and the slope rises by $2$."
                },
                {
                  "step": "The value falls for $x < 3$ and rises for $x > 3$.",
                  "reason": "Positive, negative, zero and undefined slope: a line with negative slope goes down from left to right, and one with positive slope goes up."
                },
                {
                  "step": "On $-1 \\le x \\le 9$ the greatest value is at $x = -1$ or at $x = 9$.",
                  "reason": "Greatest and least value: the value falls up to $x = 3$ and rises after it, so on the interval it is greatest at one of the two ends."
                },
                {
                  "step": "At $x = -1$: $|3 \\cdot (-1) - 9| + |2 \\cdot (-1) + 2| + |-1 - 6| = 12 + 0 + 7 = 19$",
                  "reason": "Substituting a value: the number $-1$ takes the place of $x$."
                },
                {
                  "step": "At $x = 9$: $|3 \\cdot 9 - 9| + |2 \\cdot 9 + 2| + |9 - 6| = 18 + 20 + 3 = 41$",
                  "reason": "Substituting a value: the number $9$ takes the place of $x$."
                },
                {
                  "step": "The greatest value is $41$.",
                  "reason": "Greatest and least value: the larger of the two end values is the greatest value on the interval."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t224-k2",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = |2x + 2| + |x - 3| + |2x - 10|$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = |2x + 2| + |x - 3| + |2x - 10|$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The breakpoints are $x = -1$, $x = 3$ and $x = 5$.",
                "reason": "Breakpoints: $2x + 2 = 0$ at $x = -1$, $x - 3 = 0$ at $x = 3$ and $2x - 10 = 0$ at $x = 5$."
              },
              {
                "step": "For $x < -1$: $y = -5x + 11$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: all three insides are negative here; like terms are collected."
              },
              {
                "step": "For $-1 \\le x < 3$: $y = -x + 15$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $2x + 2$ is not negative and the other two insides are negative; like terms are collected."
              },
              {
                "step": "For $3 \\le x < 5$: $y = x + 9$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $2x - 10$ is negative and the other two insides are not; like terms are collected."
              },
              {
                "step": "For $x \\ge 5$: $y = 5x - 11$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: no inside is negative here; like terms are collected."
              },
              {
                "step": "The corners are $(-1, 16)$, $(3, 12)$ and $(5, 14)$.",
                "reason": "Substituting a value: each breakpoint goes into the formula."
              },
              {
                "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here the lowest corner has $y = 12$, so $y$ is never $0$."
              },
              {
                "step": "The graph crosses the $y$-axis at $(0, 15)$.",
                "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "Two half-lines and the two segments between the corners make the graph.",
                "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                "figure": {
                  "file": "graphs-with-absolute-values-1.svg",
                  "alt": "A broken line with corners at (−1, 16), (3, 12) and (5, 14), crossing the y-axis at (0, 15), above the x-axis."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = |2x + 6| + |3x - 3| + |2x + 8|$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 17)$"
                ],
                "turning": [
                  "$(-4, 17)$",
                  "$(-3, 14)$",
                  "$(1, 18)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = |2x + 6| + |3x - 3| + |2x + 8|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -4$, $x = -3$ and $x = 1$.",
                  "reason": "Breakpoints: $2x + 8 = 0$ at $x = -4$, $2x + 6 = 0$ at $x = -3$ and $3x - 3 = 0$ at $x = 1$."
                },
                {
                  "step": "For $x < -4$: $y = -7x - 11$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: all three insides are negative here; like terms are collected."
                },
                {
                  "step": "For $-4 \\le x < -3$: $y = -3x + 5$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $2x + 8$ is not negative and the other two insides are negative; like terms are collected."
                },
                {
                  "step": "For $-3 \\le x < 1$: $y = x + 17$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $3x - 3$ is negative and the other two insides are not; like terms are collected."
                },
                {
                  "step": "For $x \\ge 1$: $y = 7x + 11$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: no inside is negative here; like terms are collected."
                },
                {
                  "step": "The corners are $(-4, 17)$, $(-3, 14)$ and $(1, 18)$.",
                  "reason": "Substituting a value: each breakpoint goes into the formula."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here the lowest corner has $y = 14$, so $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, 17)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Two half-lines and the two segments between the corners make the graph.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "graphs-with-absolute-values-2.svg",
                    "alt": "A broken line with corners at (−4, 17), (−3, 14) and (1, 18), crossing the y-axis at (0, 17), above the x-axis."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = |2x - 2| + |x - 5| + |2x - 6|$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 13)$"
                ],
                "turning": [
                  "$(1, 8)$",
                  "$(3, 6)$",
                  "$(5, 12)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = |2x - 2| + |x - 5| + |2x - 6|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = 1$, $x = 3$ and $x = 5$.",
                  "reason": "Breakpoints: $2x - 2 = 0$ at $x = 1$, $2x - 6 = 0$ at $x = 3$ and $x - 5 = 0$ at $x = 5$."
                },
                {
                  "step": "For $x < 1$: $y = -5x + 13$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: all three insides are negative here; like terms are collected."
                },
                {
                  "step": "For $1 \\le x < 3$: $y = -x + 9$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $2x - 2$ is not negative and the other two insides are negative; like terms are collected."
                },
                {
                  "step": "For $3 \\le x < 5$: $y = 3x - 3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 5$ is negative and the other two insides are not; like terms are collected."
                },
                {
                  "step": "For $x \\ge 5$: $y = 5x - 13$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: no inside is negative here; like terms are collected."
                },
                {
                  "step": "The corners are $(1, 8)$, $(3, 6)$ and $(5, 12)$.",
                  "reason": "Substituting a value: each breakpoint goes into the formula."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here the lowest corner has $y = 6$, so $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, 13)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Two half-lines and the two segments between the corners make the graph.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "graphs-with-absolute-values-3.svg",
                    "alt": "A broken line with corners at (1, 8), (3, 6) and (5, 12), crossing the y-axis at (0, 13), above the x-axis."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = |2x - 10| + |3x - 18| + |2x - 6|$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 34)$"
                ],
                "turning": [
                  "$(3, 13)$",
                  "$(5, 7)$",
                  "$(6, 8)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = |2x - 10| + |3x - 18| + |2x - 6|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = 3$, $x = 5$ and $x = 6$.",
                  "reason": "Breakpoints: $2x - 6 = 0$ at $x = 3$, $2x - 10 = 0$ at $x = 5$ and $3x - 18 = 0$ at $x = 6$."
                },
                {
                  "step": "For $x < 3$: $y = -7x + 34$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: all three insides are negative here; like terms are collected."
                },
                {
                  "step": "For $3 \\le x < 5$: $y = -3x + 22$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $2x - 6$ is not negative and the other two insides are negative; like terms are collected."
                },
                {
                  "step": "For $5 \\le x < 6$: $y = x + 2$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $3x - 18$ is negative and the other two insides are not; like terms are collected."
                },
                {
                  "step": "For $x \\ge 6$: $y = 7x - 34$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: no inside is negative here; like terms are collected."
                },
                {
                  "step": "The corners are $(3, 13)$, $(5, 7)$ and $(6, 8)$.",
                  "reason": "Substituting a value: each breakpoint goes into the formula."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here the lowest corner has $y = 7$, so $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, 34)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Two half-lines and the two segments between the corners make the graph.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "graphs-with-absolute-values-4.svg",
                    "alt": "A broken line with corners at (3, 13), (5, 7) and (6, 8), crossing the y-axis at (0, 34), above the x-axis."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t224-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the area of the region of points $(x, y)$ with $|x| + |6y| \\le 24$.",
            "lines": [
              {
                "step": "Find the area of the region of points $(x, y)$ with $|x| + |6y| \\le 24$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x \\ge 0$ and $y \\ge 0$: $x + 6y \\le 24$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here."
              },
              {
                "step": "For $x < 0$ and $y \\ge 0$: $-x + 6y \\le 24$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x$ is negative, so $|x| = -x$."
              },
              {
                "step": "For $x < 0$ and $y < 0$: $-x - 6y \\le 24$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here."
              },
              {
                "step": "For $x \\ge 0$ and $y < 0$: $x - 6y \\le 24$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $6y$ is negative, so $|6y| = -6y$."
              },
              {
                "step": "The boundary meets the axes at $(24, 0)$, $(0, 4)$, $(-24, 0)$ and $(0, -4)$.",
                "reason": "Substituting a value: at $y = 0$ the boundary is $|x| = 24$, and at $x = 0$ it is $|6y| = 24$."
              },
              {
                "step": "The region is the four-sided figure with these corners, and the axes cut it into four right triangles with legs $24$ and $4$.",
                "reason": "Region of a system of inequalities: in each quarter of the plane the region is the part between the axes and the boundary line of that quarter."
              },
              {
                "step": "Each triangle has area $\\dfrac{1}{2} \\cdot 24 \\cdot 4 = 48$.",
                "reason": "Area of a right triangle is half the product of its legs."
              },
              {
                "step": "The area is $4 \\cdot 48 = 192$.",
                "reason": "Area of a whole is the sum of the areas of its pieces: the four triangles have equal areas."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the area of the region of points $(x, y)$ with $|5x| + |4y| \\le 60$.",
              "form": "Answer as an integer.",
              "answer": "360",
              "lines": [
                {
                  "step": "Find the area of the region of points $(x, y)$ with $|5x| + |4y| \\le 60$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 0$ and $y \\ge 0$: $5x + 4y \\le 60$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here."
                },
                {
                  "step": "For $x < 0$ and $y \\ge 0$: $-5x + 4y \\le 60$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $5x$ is negative, so $|5x| = -5x$."
                },
                {
                  "step": "For $x < 0$ and $y < 0$: $-5x - 4y \\le 60$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here."
                },
                {
                  "step": "For $x \\ge 0$ and $y < 0$: $5x - 4y \\le 60$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $4y$ is negative, so $|4y| = -4y$."
                },
                {
                  "step": "The boundary meets the axes at $(12, 0)$, $(0, 15)$, $(-12, 0)$ and $(0, -15)$.",
                  "reason": "Substituting a value: at $y = 0$ the boundary is $|5x| = 60$, and at $x = 0$ it is $|4y| = 60$."
                },
                {
                  "step": "The region is the four-sided figure with these corners, and the axes cut it into four right triangles with legs $12$ and $15$.",
                  "reason": "Region of a system of inequalities: in each quarter of the plane the region is the part between the axes and the boundary line of that quarter."
                },
                {
                  "step": "Each triangle has area $\\dfrac{1}{2} \\cdot 12 \\cdot 15 = 90$.",
                  "reason": "Area of a right triangle is half the product of its legs."
                },
                {
                  "step": "The area is $4 \\cdot 90 = 360$.",
                  "reason": "Area of a whole is the sum of the areas of its pieces: the four triangles have equal areas."
                }
              ]
            },
            {
              "prompt": "Find the area of the region of points $(x, y)$ with $|9x| + |2y| \\le 36$.",
              "form": "Answer as an integer.",
              "answer": "144",
              "lines": [
                {
                  "step": "Find the area of the region of points $(x, y)$ with $|9x| + |2y| \\le 36$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 0$ and $y \\ge 0$: $9x + 2y \\le 36$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here."
                },
                {
                  "step": "For $x < 0$ and $y \\ge 0$: $-9x + 2y \\le 36$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $9x$ is negative, so $|9x| = -9x$."
                },
                {
                  "step": "For $x < 0$ and $y < 0$: $-9x - 2y \\le 36$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here."
                },
                {
                  "step": "For $x \\ge 0$ and $y < 0$: $9x - 2y \\le 36$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $2y$ is negative, so $|2y| = -2y$."
                },
                {
                  "step": "The boundary meets the axes at $(4, 0)$, $(0, 18)$, $(-4, 0)$ and $(0, -18)$.",
                  "reason": "Substituting a value: at $y = 0$ the boundary is $|9x| = 36$, and at $x = 0$ it is $|2y| = 36$."
                },
                {
                  "step": "The region is the four-sided figure with these corners, and the axes cut it into four right triangles with legs $4$ and $18$.",
                  "reason": "Region of a system of inequalities: in each quarter of the plane the region is the part between the axes and the boundary line of that quarter."
                },
                {
                  "step": "Each triangle has area $\\dfrac{1}{2} \\cdot 4 \\cdot 18 = 36$.",
                  "reason": "Area of a right triangle is half the product of its legs."
                },
                {
                  "step": "The area is $4 \\cdot 36 = 144$.",
                  "reason": "Area of a whole is the sum of the areas of its pieces: the four triangles have equal areas."
                }
              ]
            },
            {
              "prompt": "Find the area of the region of points $(x, y)$ with $|x| + |3y| \\le 12$.",
              "form": "Answer as an integer.",
              "answer": "96",
              "lines": [
                {
                  "step": "Find the area of the region of points $(x, y)$ with $|x| + |3y| \\le 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 0$ and $y \\ge 0$: $x + 3y \\le 12$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here."
                },
                {
                  "step": "For $x < 0$ and $y \\ge 0$: $-x + 3y \\le 12$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x$ is negative, so $|x| = -x$."
                },
                {
                  "step": "For $x < 0$ and $y < 0$: $-x - 3y \\le 12$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here."
                },
                {
                  "step": "For $x \\ge 0$ and $y < 0$: $x - 3y \\le 12$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $3y$ is negative, so $|3y| = -3y$."
                },
                {
                  "step": "The boundary meets the axes at $(12, 0)$, $(0, 4)$, $(-12, 0)$ and $(0, -4)$.",
                  "reason": "Substituting a value: at $y = 0$ the boundary is $|x| = 12$, and at $x = 0$ it is $|3y| = 12$."
                },
                {
                  "step": "The region is the four-sided figure with these corners, and the axes cut it into four right triangles with legs $12$ and $4$.",
                  "reason": "Region of a system of inequalities: in each quarter of the plane the region is the part between the axes and the boundary line of that quarter."
                },
                {
                  "step": "Each triangle has area $\\dfrac{1}{2} \\cdot 12 \\cdot 4 = 24$.",
                  "reason": "Area of a right triangle is half the product of its legs."
                },
                {
                  "step": "The area is $4 \\cdot 24 = 96$.",
                  "reason": "Area of a whole is the sum of the areas of its pieces: the four triangles have equal areas."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the area of the region of points $(x, y)$ with $|5x + 2y| + |5x - 2y| \\le 20$.",
            "lines": [
              {
                "step": "Find the area of the region of points $(x, y)$ with $|5x + 2y| + |5x - 2y| \\le 20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $5x + 2y \\ge 0$ and $5x - 2y \\ge 0$: $10x \\le 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here, so the left side is $(5x + 2y) + (5x - 2y)$, and like terms are collected."
              },
              {
                "step": "$x \\le 2$",
                "reason": "Multiplying by a positive number: dividing both sides by $10$ is multiplying by $\\dfrac{1}{10}$, which is positive, so the sign stays as it is."
              },
              {
                "step": "For $5x + 2y \\ge 0$ and $5x - 2y < 0$: $4y \\le 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $5x - 2y$ is negative, so the left side is $(5x + 2y) - (5x - 2y)$, and like terms are collected."
              },
              {
                "step": "$y \\le 5$",
                "reason": "Multiplying by a positive number: dividing both sides by $4$ is multiplying by $\\dfrac{1}{4}$, which is positive, so the sign stays as it is."
              },
              {
                "step": "For $5x + 2y < 0$ and $5x - 2y < 0$: $-10x \\le 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here, so the left side is $-(5x + 2y) - (5x - 2y)$, and like terms are collected."
              },
              {
                "step": "$x \\ge -2$",
                "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-10$ is multiplying by $-\\dfrac{1}{10}$, which is negative."
              },
              {
                "step": "For $5x + 2y < 0$ and $5x - 2y \\ge 0$: $-4y \\le 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $5x + 2y$ is negative, so the left side is $-(5x + 2y) + (5x - 2y)$, and like terms are collected."
              },
              {
                "step": "$y \\ge -5$",
                "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-4$ is multiplying by $-\\dfrac{1}{4}$, which is negative."
              },
              {
                "step": "The region is the rectangle with $-2 \\le x \\le 2$ and $-5 \\le y \\le 5$.",
                "reason": "Region of a system of inequalities: the lines $5x + 2y = 0$ and $5x - 2y = 0$ cut the plane into four parts, and in each part the region is bounded by one side of the rectangle."
              },
              {
                "step": "The sides are $2 - (-2) = 4$ and $5 - (-5) = 10$.",
                "reason": "Distance on the number line: each side runs between two numbers on one axis."
              },
              {
                "step": "The area is $4 \\cdot 10 = 40$.",
                "reason": "Area of a rectangle is the product of its sides, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the area of the region of points $(x, y)$ with $|4x + 3y| + |4x - 3y| \\le 24$.",
              "form": "Answer as an integer.",
              "answer": "48",
              "lines": [
                {
                  "step": "Find the area of the region of points $(x, y)$ with $|4x + 3y| + |4x - 3y| \\le 24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $4x + 3y \\ge 0$ and $4x - 3y \\ge 0$: $8x \\le 24$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here, so the left side is $(4x + 3y) + (4x - 3y)$, and like terms are collected."
                },
                {
                  "step": "$x \\le 3$",
                  "reason": "Multiplying by a positive number: dividing both sides by $8$ is multiplying by $\\dfrac{1}{8}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For $4x + 3y \\ge 0$ and $4x - 3y < 0$: $6y \\le 24$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $4x - 3y$ is negative, so the left side is $(4x + 3y) - (4x - 3y)$, and like terms are collected."
                },
                {
                  "step": "$y \\le 4$",
                  "reason": "Multiplying by a positive number: dividing both sides by $6$ is multiplying by $\\dfrac{1}{6}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For $4x + 3y < 0$ and $4x - 3y < 0$: $-8x \\le 24$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here, so the left side is $-(4x + 3y) - (4x - 3y)$, and like terms are collected."
                },
                {
                  "step": "$x \\ge -3$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-8$ is multiplying by $-\\dfrac{1}{8}$, which is negative."
                },
                {
                  "step": "For $4x + 3y < 0$ and $4x - 3y \\ge 0$: $-6y \\le 24$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $4x + 3y$ is negative, so the left side is $-(4x + 3y) + (4x - 3y)$, and like terms are collected."
                },
                {
                  "step": "$y \\ge -4$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-6$ is multiplying by $-\\dfrac{1}{6}$, which is negative."
                },
                {
                  "step": "The region is the rectangle with $-3 \\le x \\le 3$ and $-4 \\le y \\le 4$.",
                  "reason": "Region of a system of inequalities: the lines $4x + 3y = 0$ and $4x - 3y = 0$ cut the plane into four parts, and in each part the region is bounded by one side of the rectangle."
                },
                {
                  "step": "The sides are $3 - (-3) = 6$ and $4 - (-4) = 8$.",
                  "reason": "Distance on the number line: each side runs between two numbers on one axis."
                },
                {
                  "step": "The area is $6 \\cdot 8 = 48$.",
                  "reason": "Area of a rectangle is the product of its sides, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the area of the region of points $(x, y)$ with $|2x + y| + |2x - y| \\le 4$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the area of the region of points $(x, y)$ with $|2x + y| + |2x - y| \\le 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $2x + y \\ge 0$ and $2x - y \\ge 0$: $4x \\le 4$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here, so the left side is $(2x + y) + (2x - y)$, and like terms are collected."
                },
                {
                  "step": "$x \\le 1$",
                  "reason": "Multiplying by a positive number: dividing both sides by $4$ is multiplying by $\\dfrac{1}{4}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For $2x + y \\ge 0$ and $2x - y < 0$: $2y \\le 4$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $2x - y$ is negative, so the left side is $(2x + y) - (2x - y)$, and like terms are collected."
                },
                {
                  "step": "$y \\le 2$",
                  "reason": "Multiplying by a positive number: dividing both sides by $2$ is multiplying by $\\dfrac{1}{2}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For $2x + y < 0$ and $2x - y < 0$: $-4x \\le 4$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here, so the left side is $-(2x + y) - (2x - y)$, and like terms are collected."
                },
                {
                  "step": "$x \\ge -1$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-4$ is multiplying by $-\\dfrac{1}{4}$, which is negative."
                },
                {
                  "step": "For $2x + y < 0$ and $2x - y \\ge 0$: $-2y \\le 4$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $2x + y$ is negative, so the left side is $-(2x + y) + (2x - y)$, and like terms are collected."
                },
                {
                  "step": "$y \\ge -2$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-2$ is multiplying by $-\\dfrac{1}{2}$, which is negative."
                },
                {
                  "step": "The region is the rectangle with $-1 \\le x \\le 1$ and $-2 \\le y \\le 2$.",
                  "reason": "Region of a system of inequalities: the lines $2x + y = 0$ and $2x - y = 0$ cut the plane into four parts, and in each part the region is bounded by one side of the rectangle."
                },
                {
                  "step": "The sides are $1 - (-1) = 2$ and $2 - (-2) = 4$.",
                  "reason": "Distance on the number line: each side runs between two numbers on one axis."
                },
                {
                  "step": "The area is $2 \\cdot 4 = 8$.",
                  "reason": "Area of a rectangle is the product of its sides, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the area of the region of points $(x, y)$ with $|7x + y| + |7x - y| \\le 42$.",
              "form": "Answer as an integer.",
              "answer": "252",
              "lines": [
                {
                  "step": "Find the area of the region of points $(x, y)$ with $|7x + y| + |7x - y| \\le 42$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $7x + y \\ge 0$ and $7x - y \\ge 0$: $14x \\le 42$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here, so the left side is $(7x + y) + (7x - y)$, and like terms are collected."
                },
                {
                  "step": "$x \\le 3$",
                  "reason": "Multiplying by a positive number: dividing both sides by $14$ is multiplying by $\\dfrac{1}{14}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For $7x + y \\ge 0$ and $7x - y < 0$: $2y \\le 42$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $7x - y$ is negative, so the left side is $(7x + y) - (7x - y)$, and like terms are collected."
                },
                {
                  "step": "$y \\le 21$",
                  "reason": "Multiplying by a positive number: dividing both sides by $2$ is multiplying by $\\dfrac{1}{2}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For $7x + y < 0$ and $7x - y < 0$: $-14x \\le 42$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here, so the left side is $-(7x + y) - (7x - y)$, and like terms are collected."
                },
                {
                  "step": "$x \\ge -3$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-14$ is multiplying by $-\\dfrac{1}{14}$, which is negative."
                },
                {
                  "step": "For $7x + y < 0$ and $7x - y \\ge 0$: $-2y \\le 42$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $7x + y$ is negative, so the left side is $-(7x + y) + (7x - y)$, and like terms are collected."
                },
                {
                  "step": "$y \\ge -21$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-2$ is multiplying by $-\\dfrac{1}{2}$, which is negative."
                },
                {
                  "step": "The region is the rectangle with $-3 \\le x \\le 3$ and $-21 \\le y \\le 21$.",
                  "reason": "Region of a system of inequalities: the lines $7x + y = 0$ and $7x - y = 0$ cut the plane into four parts, and in each part the region is bounded by one side of the rectangle."
                },
                {
                  "step": "The sides are $3 - (-3) = 6$ and $21 - (-21) = 42$.",
                  "reason": "Distance on the number line: each side runs between two numbers on one axis."
                },
                {
                  "step": "The area is $6 \\cdot 42 = 252$.",
                  "reason": "Area of a rectangle is the product of its sides, from arithmetic."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t224-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x + 4| + |3x + 3| + |x - 1|$, and write that line right.",
            "given": [
              "$y = |x + 4| + |3x + 3| + |x - 1|$",
              "The breakpoints are $x = -4$, $x = -1$ and $x = 1$.",
              "For $x < -4$: $y = -(x + 4) - (3x + 3) - (x - 1)$",
              "$y = -5x - 6$",
              "For $-4 \\le x < -1$: $y = (x + 4) - (3x + 3) + (x - 1)$",
              "$y = -x$",
              "For $-1 \\le x < 1$: $y = (x + 4) + (3x + 3) - (x - 1)$",
              "$y = 3x + 8$",
              "For $x \\ge 1$: $y = (x + 4) + (3x + 3) + (x - 1)$",
              "$y = 5x + 6$",
              "The corners are $(-4, 14)$, $(-1, 1)$ and $(1, 11)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x + 4| + |3x + 3| + |x - 1|$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 writes $|x - 1|$ as $x - 1$ for $-4 \\le x < -1$, where $x - 1$ is negative.",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the absolute value of a negative inside is the negative of the inside, so the bracket takes a minus sign."
              },
              {
                "step": "Line 5 written right is $y = (x + 4) - (3x + 3) - (x - 1)$.",
                "reason": "The later lines follow from the wrong line, so they change with it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x - 4| + |3x - 6| + |3x - 18|$, and write that line right.",
              "given": [
                "$y = |x - 4| + |3x - 6| + |3x - 18|$",
                "The breakpoints are $x = 2$, $x = 4$ and $x = 6$.",
                "For $x < 2$: $y = (x - 4) - (3x - 6) - (3x - 18)$",
                "$y = -5x + 20$",
                "For $2 \\le x < 4$: $y = -(x - 4) + (3x - 6) - (3x - 18)$",
                "$y = -x + 16$",
                "For $4 \\le x < 6$: $y = (x - 4) + (3x - 6) - (3x - 18)$",
                "$y = x + 8$",
                "For $x \\ge 6$: $y = (x - 4) + (3x - 6) + (3x - 18)$",
                "$y = 7x - 28$",
                "The corners are $(2, 10)$, $(4, 12)$ and $(6, 14)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y = -(x-4)-(3*x-6)-(3*x-18)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x - 4| + |3x - 6| + |3x - 18|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $|x - 4|$ as $x - 4$ for $x < 2$, where $x - 4$ is negative.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the absolute value of a negative inside is the negative of the inside, so the bracket takes a minus sign."
                },
                {
                  "step": "Line 3 written right is $y = -(x - 4) - (3x - 6) - (3x - 18)$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x - 4| + |2x - 12| + |2x + 6|$, and write that line right.",
              "given": [
                "$y = |x - 4| + |2x - 12| + |2x + 6|$",
                "The breakpoints are $x = -3$, $x = 4$ and $x = 6$.",
                "For $x < -3$: $y = -(x - 4) - (2x - 12) - (2x + 6)$",
                "$y = -5x + 10$",
                "For $-3 \\le x < 4$: $y = -(x - 4) + (2x - 12) + (2x + 6)$",
                "$y = 3x - 2$",
                "For $4 \\le x < 6$: $y = (x - 4) - (2x - 12) + (2x + 6)$",
                "$y = x + 14$",
                "For $x \\ge 6$: $y = (x - 4) + (2x - 12) + (2x + 6)$",
                "$y = 5x - 10$",
                "The corners are $(-3, 25)$, $(4, 10)$ and $(6, 20)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: y = -(x-4)-(2*x-12)+(2*x+6)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x - 4| + |2x - 12| + |2x + 6|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes $|2x - 12|$ as $2x - 12$ for $-3 \\le x < 4$, where $2x - 12$ is negative.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the absolute value of a negative inside is the negative of the inside, so the bracket takes a minus sign."
                },
                {
                  "step": "Line 5 written right is $y = -(x - 4) - (2x - 12) + (2x + 6)$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |2x - 8| + |x - 5| + |2x + 8|$, and write that line right.",
              "given": [
                "$y = |2x - 8| + |x - 5| + |2x + 8|$",
                "The breakpoints are $x = -4$, $x = 4$ and $x = 5$.",
                "For $x < -4$: $y = -(2x - 8) - (x - 5) - (2x + 8)$",
                "$y = -5x + 5$",
                "For $-4 \\le x < 4$: $y = -(2x - 8) + (x - 5) + (2x + 8)$",
                "$y = x + 11$",
                "For $4 \\le x < 5$: $y = (2x - 8) - (x - 5) + (2x + 8)$",
                "$y = 3x + 5$",
                "For $x \\ge 5$: $y = (2x - 8) + (x - 5) + (2x + 8)$",
                "$y = 5x - 5$",
                "The corners are $(-4, 25)$, $(4, 15)$ and $(5, 20)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: y = -(2*x-8)-(x-5)+(2*x+8)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |2x - 8| + |x - 5| + |2x + 8|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes $|x - 5|$ as $x - 5$ for $-4 \\le x < 4$, where $x - 5$ is negative.",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the absolute value of a negative inside is the negative of the inside, so the bracket takes a minus sign."
                },
                {
                  "step": "Line 5 written right is $y = -(2x - 8) - (x - 5) + (2x + 8)$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |2x - 6| + |2x + 6| + |x + 4|$, and write that line right.",
            "given": [
              "$y = |2x - 6| + |2x + 6| + |x + 4|$",
              "The breakpoints are $x = -4$, $x = -3$ and $x = 3$.",
              "For $x < -4$: $y = -(2x - 6) - (2x + 6) - (x + 4)$",
              "$y = -5x - 4$",
              "For $-4 \\le x < -3$: $y = -(2x - 6) - (2x + 6) + (x + 4)$",
              "$y = -3x + 4$",
              "For $-3 \\le x < 3$: $y = -(2x - 6) + (2x + 6) + (x + 4)$",
              "$y = x + 4$",
              "For $x \\ge 3$: $y = (2x - 6) + (2x + 6) + (x + 4)$",
              "$y = 5x + 4$",
              "The corners are $(-4, 16)$, $(-3, 13)$ and $(3, 7)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |2x - 6| + |2x + 6| + |x + 4|$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 8 takes $-(2x - 6)$ as $-2x - 6$.",
                "reason": "Subtracting a bracket changes every sign in it: $-(2x - 6) = -2x + 6$, so the numbers add to $16$."
              },
              {
                "step": "Line 8 written right is $y = x + 16$.",
                "reason": "The later lines follow from the wrong line, so they change with it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x + 5| + |3x + 6| + |3x + 18|$, and write that line right.",
              "given": [
                "$y = |x + 5| + |3x + 6| + |3x + 18|$",
                "The breakpoints are $x = -6$, $x = -5$ and $x = -2$.",
                "For $x < -6$: $y = -(x + 5) - (3x + 6) - (3x + 18)$",
                "$y = -7x - 29$",
                "For $-6 \\le x < -5$: $y = -(x + 5) - (3x + 6) + (3x + 18)$",
                "$y = -x + 19$",
                "For $-5 \\le x < -2$: $y = (x + 5) - (3x + 6) + (3x + 18)$",
                "$y = x + 17$",
                "For $x \\ge -2$: $y = (x + 5) + (3x + 6) + (3x + 18)$",
                "$y = 7x + 29$",
                "The corners are $(-6, 13)$, $(-5, 24)$ and $(-2, 15)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: y = -x+7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x + 5| + |3x + 6| + |3x + 18|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 takes $-(3x + 6)$ as $-3x + 6$.",
                  "reason": "Subtracting a bracket changes every sign in it: $-(3x + 6) = -3x - 6$, so the numbers add to $7$."
                },
                {
                  "step": "Line 6 written right is $y = -x + 7$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |3x + 15| + |x + 4| + |x - 5|$, and write that line right.",
              "given": [
                "$y = |3x + 15| + |x + 4| + |x - 5|$",
                "The breakpoints are $x = -5$, $x = -4$ and $x = 5$.",
                "For $x < -5$: $y = -(3x + 15) - (x + 4) - (x - 5)$",
                "$y = -5x - 14$",
                "For $-5 \\le x < -4$: $y = (3x + 15) - (x + 4) - (x - 5)$",
                "$y = x + 16$",
                "For $-4 \\le x < 5$: $y = (3x + 15) + (x + 4) - (x - 5)$",
                "$y = 3x + 14$",
                "For $x \\ge 5$: $y = (3x + 15) + (x + 4) + (x - 5)$",
                "$y = 5x + 14$",
                "The corners are $(-5, 11)$, $(-4, 12)$ and $(5, 29)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: y = 3*x+24",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |3x + 15| + |x + 4| + |x - 5|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 8 takes $-(x - 5)$ as $-x - 5$.",
                  "reason": "Subtracting a bracket changes every sign in it: $-(x - 5) = -x + 5$, so the numbers add to $24$."
                },
                {
                  "step": "Line 8 written right is $y = 3x + 24$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x + 7| + |3x + 6| + |3x - 6|$, and write that line right.",
              "given": [
                "$y = |x + 7| + |3x + 6| + |3x - 6|$",
                "The breakpoints are $x = -7$, $x = -2$ and $x = 2$.",
                "For $x < -7$: $y = -(x + 7) - (3x + 6) - (3x - 6)$",
                "$y = -7x + 7$",
                "For $-7 \\le x < -2$: $y = (x + 7) - (3x + 6) - (3x - 6)$",
                "$y = -5x + 7$",
                "For $-2 \\le x < 2$: $y = (x + 7) + (3x + 6) - (3x - 6)$",
                "$y = x + 19$",
                "For $x \\ge 2$: $y = (x + 7) + (3x + 6) + (3x - 6)$",
                "$y = 7x + 7$",
                "The corners are $(-7, 56)$, $(-2, 17)$ and $(2, 21)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y = -7*x-7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the pieces and corners of the graph of $y = |x + 7| + |3x + 6| + |3x - 6|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes $-(x + 7)$ as $-x + 7$.",
                  "reason": "Subtracting a bracket changes every sign in it: $-(x + 7) = -x - 7$, so the numbers add to $-7$."
                },
                {
                  "step": "Line 4 written right is $y = -7x - 7$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t224-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation of the graph in the figure with $y$ alone on the left, as a sum of three absolute values with no number in front of $x$ inside the bars. The marked points are $A(-4, 39)$, $B(-2, 25)$, $C(-1, 24)$, $D(2, 21)$, $E(5, 24)$ and $F(7, 38)$.",
            "figure": {
              "file": "graphs-with-absolute-values-19.svg",
              "alt": "A graph through A(−4, 39), B(−2, 25), C(−1, 24), D(2, 21), E(5, 24) and F(7, 38)."
            },
            "lines": [
              {
                "step": "Write the equation of the graph in the figure with $y$ alone on the left, as a sum of three absolute values with no number in front of $x$ inside the bars. The marked points are $A(-4, 39)$, $B(-2, 25)$, $C(-1, 24)$, $D(2, 21)$, $E(5, 24)$ and $F(7, 38)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The corners are $B(-2, 25)$, $D(2, 21)$ and $E(5, 24)$.",
                "reason": "Breakpoints: the graph of a sum of absolute values bends only where an inside is $0$, and the graph in the figure bends at these three points."
              },
              {
                "step": "The slopes of the four pieces are $\\dfrac{25 - 39}{-2 - (-4)} = -7$, $\\dfrac{24 - 25}{-1 - (-2)} = -1$, $\\dfrac{24 - 21}{5 - 2} = 1$ and $\\dfrac{38 - 24}{7 - 5} = 7$.",
                "reason": "Slope: each piece is measured between two marked points on it."
              },
              {
                "step": "Here $y = a|x + 2| + b|x - 2| + c|x - 5|$ for positive numbers $a$, $b$ and $c$",
                "reason": "Breakpoints: each corner is where one inside is $0$."
              },
              {
                "step": "$2a = -1 - (-7)$, $2b = 1 - (-1)$ and $2c = 7 - 1$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: at its corner a term changes from the negative of its inside to its inside, so the slope rises there by twice the number in front of the term."
              },
              {
                "step": "$a = 3$, $b = 1$ and $c = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $2$."
              },
              {
                "step": "At $x = -4$ these give $3 \\cdot |-4 + 2| + |-4 - 2| + 3 \\cdot |-4 - 5| = 39$, the height of $A$.",
                "reason": "Checking a solution: the slopes fix $a$, $b$ and $c$, and the height at $A$ shows that no constant is added."
              },
              {
                "step": "$y = 3|x + 2| + |x - 2| + 3|x - 5|$",
                "reason": "Substituting a value: the values of line 6 go into line 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the graph in the figure with $y$ alone on the left, as a sum of three absolute values with no number in front of $x$ inside the bars. The marked points are $A(-5, 24)$, $B(-4, 19)$, $C(-3, 14)$, $D(-2, 11)$, $E(3, 16)$ and $F(4, 21)$.",
              "figure": {
                "file": "graphs-with-absolute-values-20.svg",
                "alt": "A graph through A(−5, 24), B(−4, 19), C(−3, 14), D(−2, 11), E(3, 16) and F(4, 21)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = |x+3|+2*|x+2|+2*|x-3|",
              "lines": [
                {
                  "step": "Write the equation of the graph in the figure with $y$ alone on the left, as a sum of three absolute values with no number in front of $x$ inside the bars. The marked points are $A(-5, 24)$, $B(-4, 19)$, $C(-3, 14)$, $D(-2, 11)$, $E(3, 16)$ and $F(4, 21)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The corners are $C(-3, 14)$, $D(-2, 11)$ and $E(3, 16)$.",
                  "reason": "Breakpoints: the graph of a sum of absolute values bends only where an inside is $0$, and the graph in the figure bends at these three points."
                },
                {
                  "step": "The slopes of the four pieces are $\\dfrac{19 - 24}{-4 - (-5)} = -5$, $\\dfrac{11 - 14}{-2 - (-3)} = -3$, $\\dfrac{16 - 11}{3 - (-2)} = 1$ and $\\dfrac{21 - 16}{4 - 3} = 5$.",
                  "reason": "Slope: each piece is measured between two marked points on it."
                },
                {
                  "step": "Here $y = a|x + 3| + b|x + 2| + c|x - 3|$ for positive numbers $a$, $b$ and $c$",
                  "reason": "Breakpoints: each corner is where one inside is $0$."
                },
                {
                  "step": "$2a = -3 - (-5)$, $2b = 1 - (-3)$ and $2c = 5 - 1$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: at its corner a term changes from the negative of its inside to its inside, so the slope rises there by twice the number in front of the term."
                },
                {
                  "step": "$a = 1$, $b = 2$ and $c = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $2$."
                },
                {
                  "step": "At $x = -5$ these give $|-5 + 3| + 2 \\cdot |-5 + 2| + 2 \\cdot |-5 - 3| = 24$, the height of $A$.",
                  "reason": "Checking a solution: the slopes fix $a$, $b$ and $c$, and the height at $A$ shows that no constant is added."
                },
                {
                  "step": "$y = |x + 3| + 2|x + 2| + 2|x - 3|$",
                  "reason": "Substituting a value: the values of line 6 go into line 4."
                }
              ]
            },
            {
              "prompt": "Write an equation for the graph in the figure, which passes through $A(-6, 33)$, $B(-4, 23)$, $C(1, 8)$, $D(2, 11)$, $E(4, 17)$ and $F(6, 27)$, as a sum of three absolute values with no number in front of $x$ inside the bars, with $y$ alone on the left.",
              "figure": {
                "file": "graphs-with-absolute-values-21.svg",
                "alt": "A graph through A(−6, 33), B(−4, 23), C(1, 8), D(2, 11), E(4, 17) and F(6, 27)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = |x+4|+3*|x-1|+|x-4|",
              "lines": [
                {
                  "step": "Write an equation for the graph in the figure, which passes through $A(-6, 33)$, $B(-4, 23)$, $C(1, 8)$, $D(2, 11)$, $E(4, 17)$ and $F(6, 27)$, as a sum of three absolute values with no number in front of $x$ inside the bars, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The corners are $B(-4, 23)$, $C(1, 8)$ and $E(4, 17)$.",
                  "reason": "Breakpoints: the graph of a sum of absolute values bends only where an inside is $0$, and the graph in the figure bends at these three points."
                },
                {
                  "step": "The slopes of the four pieces are $\\dfrac{23 - 33}{-4 - (-6)} = -5$, $\\dfrac{8 - 23}{1 - (-4)} = -3$, $\\dfrac{11 - 8}{2 - 1} = 3$ and $\\dfrac{27 - 17}{6 - 4} = 5$.",
                  "reason": "Slope: each piece is measured between two marked points on it."
                },
                {
                  "step": "Here $y = a|x + 4| + b|x - 1| + c|x - 4|$ for positive numbers $a$, $b$ and $c$",
                  "reason": "Breakpoints: each corner is where one inside is $0$."
                },
                {
                  "step": "$2a = -3 - (-5)$, $2b = 3 - (-3)$ and $2c = 5 - 3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: at its corner a term changes from the negative of its inside to its inside, so the slope rises there by twice the number in front of the term."
                },
                {
                  "step": "$a = 1$, $b = 3$ and $c = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $2$."
                },
                {
                  "step": "At $x = -6$ these give $|-6 + 4| + 3 \\cdot |-6 - 1| + |-6 - 4| = 33$, the height of $A$.",
                  "reason": "Checking a solution: the slopes fix $a$, $b$ and $c$, and the height at $A$ shows that no constant is added."
                },
                {
                  "step": "$y = |x + 4| + 3|x - 1| + |x - 4|$",
                  "reason": "Substituting a value: the values of line 6 go into line 4."
                }
              ]
            },
            {
              "prompt": "Write the equation of the graph in the figure with $y$ alone on the left, as a sum of three absolute values with no number in front of $x$ inside the bars. The marked points are $A(-7, 33)$, $B(-5, 21)$, $C(-4, 15)$, $D(-1, 9)$, $E(2, 21)$ and $F(3, 27)$.",
              "figure": {
                "file": "graphs-with-absolute-values-22.svg",
                "alt": "A graph through A(−7, 33), B(−5, 21), C(−4, 15), D(−1, 9), E(2, 21) and F(3, 27)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*|x+4|+3*|x+1|+|x-2|",
              "lines": [
                {
                  "step": "Write the equation of the graph in the figure with $y$ alone on the left, as a sum of three absolute values with no number in front of $x$ inside the bars. The marked points are $A(-7, 33)$, $B(-5, 21)$, $C(-4, 15)$, $D(-1, 9)$, $E(2, 21)$ and $F(3, 27)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The corners are $C(-4, 15)$, $D(-1, 9)$ and $E(2, 21)$.",
                  "reason": "Breakpoints: the graph of a sum of absolute values bends only where an inside is $0$, and the graph in the figure bends at these three points."
                },
                {
                  "step": "The slopes of the four pieces are $\\dfrac{21 - 33}{-5 - (-7)} = -6$, $\\dfrac{9 - 15}{-1 - (-4)} = -2$, $\\dfrac{21 - 9}{2 - (-1)} = 4$ and $\\dfrac{27 - 21}{3 - 2} = 6$.",
                  "reason": "Slope: each piece is measured between two marked points on it."
                },
                {
                  "step": "Here $y = a|x + 4| + b|x + 1| + c|x - 2|$ for positive numbers $a$, $b$ and $c$",
                  "reason": "Breakpoints: each corner is where one inside is $0$."
                },
                {
                  "step": "$2a = -2 - (-6)$, $2b = 4 - (-2)$ and $2c = 6 - 4$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: at its corner a term changes from the negative of its inside to its inside, so the slope rises there by twice the number in front of the term."
                },
                {
                  "step": "$a = 2$, $b = 3$ and $c = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $2$."
                },
                {
                  "step": "At $x = -7$ these give $2 \\cdot |-7 + 4| + 3 \\cdot |-7 + 1| + |-7 - 2| = 33$, the height of $A$.",
                  "reason": "Checking a solution: the slopes fix $a$, $b$ and $c$, and the height at $A$ shows that no constant is added."
                },
                {
                  "step": "$y = 2|x + 4| + 3|x + 1| + |x - 2|$",
                  "reason": "Substituting a value: the values of line 6 go into line 4."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": [
    {
      "id": "t224-s1",
      "method": "proof by cases",
      "statement": "Prove that, for real numbers $x$ and $y$, $|x + y| \\le |x| + |y|$. Facts it may use: $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$, $|x| \\ge 0$, strict and nonstrict inequality, the transitive property, multiplying by a negative number reverses the sign, adding two inequalities, subtracting a bracket changes every sign in it, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Suppose first that $x \\ge 0$.",
            "reason": "Proof by cases: every real number $x$ has $x \\ge 0$ or $x < 0$."
          },
          {
            "line": "Then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $x \\le |x|$ when $x \\ge 0$.",
            "reason": "Strict and nonstrict inequality: by line 2 the two numbers are equal, and equal numbers satisfy $\\le$."
          },
          {
            "line": "Suppose now that $x < 0$.",
            "reason": "Proof by cases: this is the second case."
          },
          {
            "line": "Then $0 \\le |x|$.",
            "reason": "The rule $|x| \\ge 0$."
          },
          {
            "line": "So $x \\le |x|$ when $x < 0$.",
            "reason": "Transitive property: lines 4 and 5."
          },
          {
            "line": "So $x \\le |x|$ for every real number $x$.",
            "reason": "Proof by cases: lines 3 and 6 cover every real number."
          },
          {
            "line": "If $x \\ge 0$, then $-x \\le 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of $x \\ge 0$ are multiplied by $-1$."
          },
          {
            "line": "And $0 \\le |x|$.",
            "reason": "The rule $|x| \\ge 0$."
          },
          {
            "line": "So $-x \\le |x|$ when $x \\ge 0$.",
            "reason": "Transitive property: lines 8 and 9."
          },
          {
            "line": "If $x < 0$, then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "So $-x \\le |x|$ when $x < 0$.",
            "reason": "Strict and nonstrict inequality: by line 11 the two numbers are equal, and equal numbers satisfy $\\le$."
          },
          {
            "line": "So $-x \\le |x|$ for every real number $x$.",
            "reason": "Proof by cases: lines 10 and 12 cover every real number."
          },
          {
            "line": "In the same way $y \\le |y|$.",
            "reason": "Lines 1 to 7, with $y$ in place of $x$."
          },
          {
            "line": "And $-y \\le |y|$.",
            "reason": "Lines 8 to 13, with $y$ in place of $x$."
          },
          {
            "line": "So $x + y \\le |x| + |y|$.",
            "reason": "Adding two inequalities: lines 7 and 14."
          },
          {
            "line": "And $-x - y \\le |x| + |y|$.",
            "reason": "Adding two inequalities: lines 13 and 15."
          },
          {
            "line": "If $x + y \\ge 0$, then $|x + y| = x + y$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here the number inside is $x + y$."
          },
          {
            "line": "So $|x + y| \\le |x| + |y|$ when $x + y \\ge 0$.",
            "reason": "Substituting a value: in line 16, $x + y$ is replaced by $|x + y|$, equal to it by line 18."
          },
          {
            "line": "If $x + y < 0$, then $|x + y| = -(x + y)$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here the number inside is $x + y$."
          },
          {
            "line": "Here $-(x + y) = -x - y$.",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "So $|x + y| \\le |x| + |y|$ when $x + y < 0$.",
            "reason": "Transitive property: lines 20 and 21 give $|x + y| = -x - y$, and line 17 bounds $-x - y$."
          },
          {
            "line": "Therefore $|x + y| \\le |x| + |y|$ for all real numbers $x$ and $y$.",
            "reason": "Proof by cases: lines 19 and 22 cover $x + y \\ge 0$ and $x + y < 0$."
          }
        ]
      }
    }
  ]
}
