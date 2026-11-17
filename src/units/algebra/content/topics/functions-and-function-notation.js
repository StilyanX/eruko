export default {
  "number": 157,
  "title": "Functions and function notation",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "451-459"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $f(2k)$, where $f(x) = x^2 - 3x$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "4*k^2-6*k",
    "solution": [
      "Find $f(2k)$, where $f(x) = x^2 - 3x$.",
      "$f(2k) = (2k)^2 - 3(2k)$",
      "$f(2k) = 4k^2 - 6k$"
    ]
  },
  "ideas": [
    {
      "name": "Function",
      "concrete": "The rule that multiplies a number by 4 and then takes away 1 gives the one output $27$ for the input $7$, and one output for every other input, so it is a function. The two pairs $(5, 1)$ and $(5, 9)$ together are not a function: the input $5$ has two outputs.",
      "general": "A **function** is a rule that gives exactly one output for each input it accepts. A rule that gives two different outputs for one input is not a function."
    },
    {
      "name": "Function notation",
      "concrete": "The rule above is written $f(x) = 4x - 1$. Then $f(7) = 4(7) - 1 = 27$, and with the expression $k + 2$ as the input, $f(k + 2) = 4(k + 2) - 1 = 4k + 7$.",
      "general": "For a function $f$, the symbol $f(x)$, read \"f of x\", is the output of $f$ for the input $x$; it is never $f$ times $x$. To find $f$ of a number or of an expression, that input goes, in brackets, in each place where $x$ stands in the rule."
    },
    {
      "name": "Dummy variable",
      "concrete": "The rules $f(x) = 4x - 1$ and $f(t) = 4t - 1$ give the same output for each input, so they describe one function.",
      "general": "The letter in a rule such as $f(x) = 4x - 1$ is a **dummy variable**: it only marks where the input goes, and another letter in its place gives the same function."
    },
    {
      "name": "Function of several variables",
      "concrete": "With $h(x, y) = x^2 - 4y$, the inputs $5$ and $2$ give $h(5, 2) = (5)^2 - 4(2) = 17$, while $h(2, 5) = (2)^2 - 4(5) = -16$: the order of the inputs matters.",
      "general": "A **function of several variables** takes several inputs in a fixed order and gives one output. The inputs are matched to the dummy variables by place: the first input goes in place of the first dummy variable, the second in place of the second, and so on, whatever letters the inputs hold."
    }
  ],
  "kinds": [
    {
      "id": "t157-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $f(-6)$, where $f(x) = 6x^2 - 5x - 10$.",
            "lines": [
              {
                "step": "Find $f(-6)$, where $f(x) = 6x^2 - 5x - 10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(-6) = 6(-6)^2 - 5(-6) - 10$",
                "reason": "Function notation: $f(-6)$ is the output for the input $-6$, so $-6$ goes, in brackets, in each place where the dummy variable $x$ stands."
              },
              {
                "step": "$f(-6) = 6(36) - 5(-6) - 10$",
                "reason": "The power binds before the coefficient, so the square is worked out first and its coefficient is left as it is."
              },
              {
                "step": "$f(-6) = 216 + 30 - 10$",
                "reason": "The order of operations puts products before sums and differences."
              },
              {
                "step": "$f(-6) = 236$",
                "reason": "The order of operations leaves sums and differences for last, worked from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-4)$, where $f(x) = -9x^2 - 5x - 5$.",
              "form": "Answer as an integer.",
              "answer": "-129",
              "lines": [
                {
                  "step": "Find $f(-4)$, where $f(x) = -9x^2 - 5x - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-4) = -9(-4)^2 - 5(-4) - 5$",
                  "reason": "Function notation: $f(-4)$ is the output for the input $-4$, so $-4$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(-4) = -9(16) - 5(-4) - 5$",
                  "reason": "The power binds before the coefficient, so the square is worked out first and its coefficient is left as it is."
                },
                {
                  "step": "$f(-4) = -144 + 20 - 5$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$f(-4) = -129$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Find $f(2)$, where $f(x) = -7x^2 + 5x - 13$.",
              "form": "Answer as an integer.",
              "answer": "-31",
              "lines": [
                {
                  "step": "Find $f(2)$, where $f(x) = -7x^2 + 5x - 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) = -7(2)^2 + 5(2) - 13$",
                  "reason": "Function notation: $f(2)$ is the output for the input $2$, so $2$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(2) = -7(4) + 5(2) - 13$",
                  "reason": "The power binds before the coefficient, so the square is worked out first and its coefficient is left as it is."
                },
                {
                  "step": "$f(2) = -28 + 10 - 13$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$f(2) = -31$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Find $f(4)$, where $f(x) = -9x^2 + 9x - 11$.",
              "form": "Answer as an integer.",
              "answer": "-119",
              "lines": [
                {
                  "step": "Find $f(4)$, where $f(x) = -9x^2 + 9x - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(4) = -9(4)^2 + 9(4) - 11$",
                  "reason": "Function notation: $f(4)$ is the output for the input $4$, so $4$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(4) = -9(16) + 9(4) - 11$",
                  "reason": "The power binds before the coefficient, so the square is worked out first and its coefficient is left as it is."
                },
                {
                  "step": "$f(4) = -144 + 36 - 11$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$f(4) = -119$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(4x - 3)$, where $f(x) = 4x^2 + 7x - 5$.",
            "lines": [
              {
                "step": "Find $f(4x - 3)$, where $f(x) = 4x^2 + 7x - 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(4x - 3) = 4(4x - 3)^2 + 7(4x - 3) - 5$",
                "reason": "Function notation: the whole expression $4x - 3$ is the input, so it goes, in brackets, in each place where the dummy variable $x$ stands."
              },
              {
                "step": "$f(4x - 3) = 4(16x^2 - 24x + 9) + 28x - 21 - 5$",
                "reason": "Square of a binomial: $(4x - 3)^2 = 16x^2 - 24x + 9$; the second bracket is multiplied out by the distributive law (arithmetic's)."
              },
              {
                "step": "$f(4x - 3) = 64x^2 - 96x + 36 + 28x - 21 - 5$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$f(4x - 3) = 64x^2 - 68x + 10$",
                "reason": "Collecting like terms: the terms in $x$ are added, and so are the numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-3x + 2)$, where $f(x) = 5x^2 + 7x + 1$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "45*x^2-81*x+35",
              "lines": [
                {
                  "step": "Find $f(-3x + 2)$, where $f(x) = 5x^2 + 7x + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-3x + 2) = 5(-3x + 2)^2 + 7(-3x + 2) + 1$",
                  "reason": "Function notation: the whole expression $-3x + 2$ is the input, so it goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(-3x + 2) = 5(9x^2 - 12x + 4) - 21x + 14 + 1$",
                  "reason": "Square of a binomial: $(-3x + 2)^2 = 9x^2 - 12x + 4$; the second bracket is multiplied out by the distributive law (arithmetic's)."
                },
                {
                  "step": "$f(-3x + 2) = 45x^2 - 60x + 20 - 21x + 14 + 1$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$f(-3x + 2) = 45x^2 - 81x + 35$",
                  "reason": "Collecting like terms: the terms in $x$ are added, and so are the numbers."
                }
              ]
            },
            {
              "prompt": "Find $f(4x + 7)$, where $f(x) = -3x^2 - 9x - 11$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-48*x^2-204*x-221",
              "lines": [
                {
                  "step": "Find $f(4x + 7)$, where $f(x) = -3x^2 - 9x - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(4x + 7) = -3(4x + 7)^2 - 9(4x + 7) - 11$",
                  "reason": "Function notation: the whole expression $4x + 7$ is the input, so it goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(4x + 7) = -3(16x^2 + 56x + 49) - 36x - 63 - 11$",
                  "reason": "Square of a binomial: $(4x + 7)^2 = 16x^2 + 56x + 49$; the second bracket is multiplied out by the distributive law (arithmetic's)."
                },
                {
                  "step": "$f(4x + 7) = -48x^2 - 168x - 147 - 36x - 63 - 11$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$f(4x + 7) = -48x^2 - 204x - 221$",
                  "reason": "Collecting like terms: the terms in $x$ are added, and so are the numbers."
                }
              ]
            },
            {
              "prompt": "Find $f(-5x - 4)$, where $f(x) = 3x^2 + 2x + 12$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "75*x^2+110*x+52",
              "lines": [
                {
                  "step": "Find $f(-5x - 4)$, where $f(x) = 3x^2 + 2x + 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-5x - 4) = 3(-5x - 4)^2 + 2(-5x - 4) + 12$",
                  "reason": "Function notation: the whole expression $-5x - 4$ is the input, so it goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(-5x - 4) = 3(25x^2 + 40x + 16) - 10x - 8 + 12$",
                  "reason": "Square of a binomial: $(-5x - 4)^2 = 25x^2 + 40x + 16$; the second bracket is multiplied out by the distributive law (arithmetic's)."
                },
                {
                  "step": "$f(-5x - 4) = 75x^2 + 120x + 48 - 10x - 8 + 12$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$f(-5x - 4) = 75x^2 + 110x + 52$",
                  "reason": "Collecting like terms: the terms in $x$ are added, and so are the numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $g(-2, -4, -2)$, where $g(x, y, z) = -4x + 3yz - 8z$.",
            "lines": [
              {
                "step": "Find $g(-2, -4, -2)$, where $g(x, y, z) = -4x + 3yz - 8z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first input $-2$ goes in place of $x$, the second input $-4$ goes in place of $y$, and the third input $-2$ goes in place of $z$.",
                "reason": "Function of several variables: the inputs are matched to the dummy variables by place, in order."
              },
              {
                "step": "$g(-2, -4, -2) = -4(-2) + 3(-4)(-2) - 8(-2)$",
                "reason": "Substituting a value: each dummy variable is replaced by its input, in brackets."
              },
              {
                "step": "$g(-2, -4, -2) = 8 + 24 + 16$",
                "reason": "The order of operations puts products before sums and differences."
              },
              {
                "step": "$g(-2, -4, -2) = 48$",
                "reason": "The order of operations leaves sums and differences for last, worked from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $g(-2, -2, 5)$, where $g(x, y, z) = -7x + 7yz - 5z$.",
              "form": "Answer as an integer.",
              "answer": "-81",
              "lines": [
                {
                  "step": "Find $g(-2, -2, 5)$, where $g(x, y, z) = -7x + 7yz - 5z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first input $-2$ goes in place of $x$, the second input $-2$ goes in place of $y$, and the third input $5$ goes in place of $z$.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, in order."
                },
                {
                  "step": "$g(-2, -2, 5) = -7(-2) + 7(-2)(5) - 5(5)$",
                  "reason": "Substituting a value: each dummy variable is replaced by its input, in brackets."
                },
                {
                  "step": "$g(-2, -2, 5) = 14 - 70 - 25$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$g(-2, -2, 5) = -81$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Find $f(5, -5)$, where $f(x, y) = 7xy - 5x^2 + 4y$.",
              "form": "Answer as an integer.",
              "answer": "-320",
              "lines": [
                {
                  "step": "Find $f(5, -5)$, where $f(x, y) = 7xy - 5x^2 + 4y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first input $5$ goes in place of $x$ and the second input $-5$ goes in place of $y$.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, in order."
                },
                {
                  "step": "$f(5, -5) = 7(5)(-5) - 5(5)^2 + 4(-5)$",
                  "reason": "Substituting a value: each dummy variable is replaced by its input, in brackets."
                },
                {
                  "step": "$f(5, -5) = -175 - 125 - 20$",
                  "reason": "The power binds before the coefficient, and the order of operations puts products before sums."
                },
                {
                  "step": "$f(5, -5) = -320$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Find $f(5, -5)$, where $f(x, y) = -5x^2 - 6xy + 9y^2$.",
              "form": "Answer as an integer.",
              "answer": "250",
              "lines": [
                {
                  "step": "Find $f(5, -5)$, where $f(x, y) = -5x^2 - 6xy + 9y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first input $5$ goes in place of $x$ and the second input $-5$ goes in place of $y$.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, in order."
                },
                {
                  "step": "$f(5, -5) = -5(5)^2 - 6(5)(-5) + 9(-5)^2$",
                  "reason": "Substituting a value: each dummy variable is replaced by its input, in brackets."
                },
                {
                  "step": "$f(5, -5) = -125 + 150 + 225$",
                  "reason": "The power binds before the coefficient, and the order of operations puts products before sums."
                },
                {
                  "step": "$f(5, -5) = 250$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $3f(4) + 4f(2)$, where $f(x) = -3x^2 - 9x + 20$.",
            "lines": [
              {
                "step": "Find $3f(4) + 4f(2)$, where $f(x) = -3x^2 - 9x + 20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(4) = -3(4)^2 - 9(4) + 20 = -64$",
                "reason": "Function notation: $4$ goes, in brackets, in each place where the dummy variable $x$ stands."
              },
              {
                "step": "$f(2) = -3(2)^2 - 9(2) + 20 = -10$",
                "reason": "Function notation: $2$ goes, in brackets, in each place where the dummy variable $x$ stands."
              },
              {
                "step": "$3f(4) + 4f(2) = 3(-64) + 4(-10)$",
                "reason": "Substituting a value: each output, in brackets, takes the place of its function value."
              },
              {
                "step": "$3f(4) + 4f(2) = -232$",
                "reason": "The order of operations puts products before sums and differences."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $2f(4) + 2f(7)$, where $f(x) = -3x^2 - 5x - 5$.",
              "form": "Answer as an integer.",
              "answer": "-520",
              "lines": [
                {
                  "step": "Find $2f(4) + 2f(7)$, where $f(x) = -3x^2 - 5x - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(4) = -3(4)^2 - 5(4) - 5 = -73$",
                  "reason": "Function notation: $4$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(7) = -3(7)^2 - 5(7) - 5 = -187$",
                  "reason": "Function notation: $7$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$2f(4) + 2f(7) = 2(-73) + 2(-187)$",
                  "reason": "Substituting a value: each output, in brackets, takes the place of its function value."
                },
                {
                  "step": "$2f(4) + 2f(7) = -520$",
                  "reason": "The order of operations puts products before sums and differences."
                }
              ]
            },
            {
              "prompt": "Find $2f(-2) - 6f(-5)$, where $f(x) = -5x^2 - 11x + 16$.",
              "form": "Answer as an integer.",
              "answer": "360",
              "lines": [
                {
                  "step": "Find $2f(-2) - 6f(-5)$, where $f(x) = -5x^2 - 11x + 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-2) = -5(-2)^2 - 11(-2) + 16 = 18$",
                  "reason": "Function notation: $-2$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(-5) = -5(-5)^2 - 11(-5) + 16 = -54$",
                  "reason": "Function notation: $-5$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$2f(-2) - 6f(-5) = 2(18) - 6(-54)$",
                  "reason": "Substituting a value: each output, in brackets, takes the place of its function value."
                },
                {
                  "step": "$2f(-2) - 6f(-5) = 360$",
                  "reason": "The order of operations puts products before sums and differences."
                }
              ]
            },
            {
              "prompt": "Find $6f(-5) + 3f(5)$, where $f(x) = 4x^2 + 5x - 20$.",
              "form": "Answer as an integer.",
              "answer": "645",
              "lines": [
                {
                  "step": "Find $6f(-5) + 3f(5)$, where $f(x) = 4x^2 + 5x - 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-5) = 4(-5)^2 + 5(-5) - 20 = 55$",
                  "reason": "Function notation: $-5$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$f(5) = 4(5)^2 + 5(5) - 20 = 105$",
                  "reason": "Function notation: $5$ goes, in brackets, in each place where the dummy variable $x$ stands."
                },
                {
                  "step": "$6f(-5) + 3f(5) = 6(55) + 3(105)$",
                  "reason": "Substituting a value: each output, in brackets, takes the place of its function value."
                },
                {
                  "step": "$6f(-5) + 3f(5) = 645$",
                  "reason": "The order of operations puts products before sums and differences."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t157-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the set of pairs $\\{(3, 8), (-4, 1), (3, -6), (7, 0)\\}$, each written as (input, output), describes a function.",
            "lines": [
              {
                "step": "Decide whether the set of pairs $\\{(3, 8), (-4, 1), (3, -6), (7, 0)\\}$, each written as (input, output), describes a function.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The input $3$ is paired with $8$ and with $-6$: two outputs.",
                "reason": "Function: each pair is read as (input, output), and the outputs of each input are counted."
              },
              {
                "step": "The answer is No.",
                "reason": "Function: a rule is a function only when each input it accepts has exactly one output, so one input with two outputs is enough to fail."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the set of pairs $\\{(-5, 2), (6, 2), (1, 9), (-2, -7)\\}$, each written as (input, output), describes a function.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the set of pairs $\\{(-5, 2), (6, 2), (1, 9), (-2, -7)\\}$, each written as (input, output), describes a function.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each of the inputs $-5$, $6$, $1$ and $-2$ has one output.",
                  "reason": "Function: each pair is read as (input, output), and the outputs of each input are counted."
                },
                {
                  "step": "The answer is Yes.",
                  "reason": "Function: a rule is a function when each input it accepts has exactly one output."
                }
              ]
            },
            {
              "prompt": "Decide whether the rule $y^2 = x + 9$, with input $x$ and output $y$, describes a function for real numbers.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the rule $y^2 = x + 9$, with input $x$ and output $y$, describes a function for real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The input $x = 7$ gives $(7) + 9 = 16$, so $y^2 = 16$.",
                  "reason": "Substituting a value: $7$ replaces $x$, in brackets."
                },
                {
                  "step": "So $y = 4$ or $y = -4$: two outputs for the input $7$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "The answer is No.",
                  "reason": "Function: a rule is a function only when each input it accepts has exactly one output, so one input with two outputs is enough to fail."
                }
              ]
            },
            {
              "prompt": "Decide whether this rule describes a function. Input: a whole number. Output: the remainder when it is divided by 9.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether this rule describes a function. Input: a whole number. Output: the remainder when it is divided by 9.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Dividing a whole number by 9 leaves one remainder.",
                  "reason": "Function: one input is followed through the rule, and the rule allows one output for it."
                },
                {
                  "step": "The answer is Yes.",
                  "reason": "Function: a rule is a function when each input it accepts has exactly one output."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t157-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a number $x$ with $f(x) = 13$, where $f(x) = 5x + 11$.",
            "lines": [
              {
                "step": "Find a number $x$ with $f(x) = 13$, where $f(x) = 5x + 11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x + 11 = 13$",
                "reason": "Function notation: $f(x)$ is replaced by its rule."
              },
              {
                "step": "$5x = 2$",
                "reason": "Adding the same number: $-11$ is added to both sides."
              },
              {
                "step": "$x = \\dfrac{2}{5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ with $f(x) = -9$, where $f(x) = -9x + 14$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 23/9",
              "lines": [
                {
                  "step": "Find a number $x$ with $f(x) = -9$, where $f(x) = -9x + 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-9x + 14 = -9$",
                  "reason": "Function notation: $f(x)$ is replaced by its rule."
                },
                {
                  "step": "$-9x = -23$",
                  "reason": "Adding the same number: $-14$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{23}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-9$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $f(x) = -2$, where $f(x) = 9x - 6$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 4/9",
              "lines": [
                {
                  "step": "Find a number $x$ with $f(x) = -2$, where $f(x) = 9x - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9x - 6 = -2$",
                  "reason": "Function notation: $f(x)$ is replaced by its rule."
                },
                {
                  "step": "$9x = 4$",
                  "reason": "Adding the same number: $6$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{4}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $f(x) = 13$, where $f(x) = -8x - 5$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -9/4",
              "lines": [
                {
                  "step": "Find a number $x$ with $f(x) = 13$, where $f(x) = -8x - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-8x - 5 = 13$",
                  "reason": "Function notation: $f(x)$ is replaced by its rule."
                },
                {
                  "step": "$-8x = 18$",
                  "reason": "Adding the same number: $5$ is added to both sides."
                },
                {
                  "step": "$x = -\\dfrac{9}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-8$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $f(x) = 22$, where $f(x) = 4x^2 + 8x - 74$.",
            "lines": [
              {
                "step": "Solve $f(x) = 22$, where $f(x) = 4x^2 + 8x - 74$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x^2 + 8x - 74 = 22$",
                "reason": "Function notation: $f(x)$ is replaced by its rule."
              },
              {
                "step": "$4x^2 + 8x - 96 = 0$",
                "reason": "Adding the same number: $-22$ is added to both sides."
              },
              {
                "step": "$4(x^2 + 2x - 24) = 0$",
                "reason": "Taking out a common factor: each coefficient is a multiple of $4$."
              },
              {
                "step": "$4(x + 6)(x - 4) = 0$",
                "reason": "Factoring a quadratic: the numbers $6$ and $-4$ have sum $2$ and product $-24$."
              },
              {
                "step": "So $x = -6$ or $x = 4$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $f(x) = -21$, where $f(x) = 2x^2 - 34x + 123$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 8, x = 9",
              "lines": [
                {
                  "step": "Solve $f(x) = -21$, where $f(x) = 2x^2 - 34x + 123$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 - 34x + 123 = -21$",
                  "reason": "Function notation: $f(x)$ is replaced by its rule."
                },
                {
                  "step": "$2x^2 - 34x + 144 = 0$",
                  "reason": "Adding the same number: $21$ is added to both sides."
                },
                {
                  "step": "$2(x^2 - 17x + 72) = 0$",
                  "reason": "Taking out a common factor: each coefficient is a multiple of $2$."
                },
                {
                  "step": "$2(x - 8)(x - 9) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-8$ and $-9$ have sum $-17$ and product $72$."
                },
                {
                  "step": "So $x = 8$ or $x = 9$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            },
            {
              "prompt": "Solve $f(x) = -9$, where $f(x) = 6x^2 + 72x + 183$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -8, x = -4",
              "lines": [
                {
                  "step": "Solve $f(x) = -9$, where $f(x) = 6x^2 + 72x + 183$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x^2 + 72x + 183 = -9$",
                  "reason": "Function notation: $f(x)$ is replaced by its rule."
                },
                {
                  "step": "$6x^2 + 72x + 192 = 0$",
                  "reason": "Adding the same number: $9$ is added to both sides."
                },
                {
                  "step": "$6(x^2 + 12x + 32) = 0$",
                  "reason": "Taking out a common factor: each coefficient is a multiple of $6$."
                },
                {
                  "step": "$6(x + 8)(x + 4) = 0$",
                  "reason": "Factoring a quadratic: the numbers $8$ and $4$ have sum $12$ and product $32$."
                },
                {
                  "step": "So $x = -8$ or $x = -4$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            },
            {
              "prompt": "Solve $f(x) = 27$, where $f(x) = 4x^2 + 20x - 69$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -8, x = 3",
              "lines": [
                {
                  "step": "Solve $f(x) = 27$, where $f(x) = 4x^2 + 20x - 69$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 + 20x - 69 = 27$",
                  "reason": "Function notation: $f(x)$ is replaced by its rule."
                },
                {
                  "step": "$4x^2 + 20x - 96 = 0$",
                  "reason": "Adding the same number: $-27$ is added to both sides."
                },
                {
                  "step": "$4(x^2 + 5x - 24) = 0$",
                  "reason": "Taking out a common factor: each coefficient is a multiple of $4$."
                },
                {
                  "step": "$4(x + 8)(x - 3) = 0$",
                  "reason": "Factoring a quadratic: the numbers $8$ and $-3$ have sum $5$ and product $-24$."
                },
                {
                  "step": "So $x = -8$ or $x = 3$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(-7)$, where $f(x) = ax + b$ for numbers $a$ and $b$, with $f(-2) = 17$ and $f(-4) = 27$.",
            "lines": [
              {
                "step": "Find $f(-7)$, where $f(x) = ax + b$ for numbers $a$ and $b$, with $f(-2) = 17$ and $f(-4) = 27$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-2a + b = 17$",
                "reason": "Function notation: $f(-2)$ is the rule with $-2$ in place of $x$."
              },
              {
                "step": "$-4a + b = 27$",
                "reason": "Function notation: $f(-4)$ is the rule with $-4$ in place of $x$."
              },
              {
                "step": "$2a = -10$",
                "reason": "Elimination: taking the second equation from the first removes $b$."
              },
              {
                "step": "$a = -5$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$b = 7$",
                "reason": "Back-substitution: $a = -5$ in the first equation gives $10 + b = 17$."
              },
              {
                "step": "$f(-7) = -5(-7) + 7 = 42$",
                "reason": "Function notation: $-7$ goes in place of $x$ in $f(x) = -5x + 7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-6)$, where $f(x) = ax + b$ for numbers $a$ and $b$, with $f(3) = 27$ and $f(-5) = -13$.",
              "form": "Answer as an integer.",
              "answer": "-18",
              "lines": [
                {
                  "step": "Find $f(-6)$, where $f(x) = ax + b$ for numbers $a$ and $b$, with $f(3) = 27$ and $f(-5) = -13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3a + b = 27$",
                  "reason": "Function notation: $f(3)$ is the rule with $3$ in place of $x$."
                },
                {
                  "step": "$-5a + b = -13$",
                  "reason": "Function notation: $f(-5)$ is the rule with $-5$ in place of $x$."
                },
                {
                  "step": "$8a = 40$",
                  "reason": "Elimination: taking the second equation from the first removes $b$."
                },
                {
                  "step": "$a = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$b = 12$",
                  "reason": "Back-substitution: $a = 5$ in the first equation gives $15 + b = 27$."
                },
                {
                  "step": "$f(-6) = 5(-6) + 12 = -18$",
                  "reason": "Function notation: $-6$ goes in place of $x$ in $f(x) = 5x + 12$."
                }
              ]
            },
            {
              "prompt": "Find $f(2)$, where $f(x) = ax + b$ for numbers $a$ and $b$, with $f(3) = -35$ and $f(-5) = 29$.",
              "form": "Answer as an integer.",
              "answer": "-27",
              "lines": [
                {
                  "step": "Find $f(2)$, where $f(x) = ax + b$ for numbers $a$ and $b$, with $f(3) = -35$ and $f(-5) = 29$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3a + b = -35$",
                  "reason": "Function notation: $f(3)$ is the rule with $3$ in place of $x$."
                },
                {
                  "step": "$-5a + b = 29$",
                  "reason": "Function notation: $f(-5)$ is the rule with $-5$ in place of $x$."
                },
                {
                  "step": "$8a = -64$",
                  "reason": "Elimination: taking the second equation from the first removes $b$."
                },
                {
                  "step": "$a = -8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$b = -11$",
                  "reason": "Back-substitution: $a = -8$ in the first equation gives $-24 + b = -35$."
                },
                {
                  "step": "$f(2) = -8(2) - 11 = -27$",
                  "reason": "Function notation: $2$ goes in place of $x$ in $f(x) = -8x - 11$."
                }
              ]
            },
            {
              "prompt": "Find $f(-3)$, where $f(x) = ax + b$ for numbers $a$ and $b$, with $f(2) = 10$ and $f(-4) = -32$.",
              "form": "Answer as an integer.",
              "answer": "-25",
              "lines": [
                {
                  "step": "Find $f(-3)$, where $f(x) = ax + b$ for numbers $a$ and $b$, with $f(2) = 10$ and $f(-4) = -32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2a + b = 10$",
                  "reason": "Function notation: $f(2)$ is the rule with $2$ in place of $x$."
                },
                {
                  "step": "$-4a + b = -32$",
                  "reason": "Function notation: $f(-4)$ is the rule with $-4$ in place of $x$."
                },
                {
                  "step": "$6a = 42$",
                  "reason": "Elimination: taking the second equation from the first removes $b$."
                },
                {
                  "step": "$a = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$b = -4$",
                  "reason": "Back-substitution: $a = 7$ in the first equation gives $14 + b = 10$."
                },
                {
                  "step": "$f(-3) = 7(-3) - 4 = -25$",
                  "reason": "Function notation: $-3$ goes in place of $x$ in $f(x) = 7x - 4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $y$ with $g(y, 6, -6) = 13$, where $g(x, y, z) = 7x + 4yz + 3z$.",
            "lines": [
              {
                "step": "Find a number $y$ with $g(y, 6, -6) = 13$, where $g(x, y, z) = 7x + 4yz + 3z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first input $y$ goes in place of $x$, the second input $6$ goes in place of $y$, and the third input $-6$ goes in place of $z$.",
                "reason": "Function of several variables: the inputs are matched to the dummy variables by place, so the letter $y$ in the input is a number to find, whatever its name."
              },
              {
                "step": "$g(y, 6, -6) = 7(y) + 4(6)(-6) + 3(-6)$",
                "reason": "Substituting a value: each dummy variable is replaced by its input, in brackets."
              },
              {
                "step": "$g(y, 6, -6) = 7y - 162$",
                "reason": "The order of operations works out the products, and collecting like terms joins them."
              },
              {
                "step": "$7y - 162 = 13$",
                "reason": "The value given: $g(y, 6, -6)$ is $13$."
              },
              {
                "step": "$7y = 175$",
                "reason": "Adding the same number: $162$ is added to both sides."
              },
              {
                "step": "$y = 25$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ with $g(-4, -6, x) = 32$, where $g(x, y, z) = -2x + 3yz - 6z$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -1",
              "lines": [
                {
                  "step": "Find a number $x$ with $g(-4, -6, x) = 32$, where $g(x, y, z) = -2x + 3yz - 6z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first input $-4$ goes in place of $x$, the second input $-6$ goes in place of $y$, and the third input $x$ goes in place of $z$.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, so the letter $x$ in the input is a number to find, whatever its name."
                },
                {
                  "step": "$g(-4, -6, x) = -2(-4) + 3(-6)(x) - 6(x)$",
                  "reason": "Substituting a value: each dummy variable is replaced by its input, in brackets."
                },
                {
                  "step": "$g(-4, -6, x) = -24x + 8$",
                  "reason": "The order of operations works out the products, and collecting like terms joins them."
                },
                {
                  "step": "$-24x + 8 = 32$",
                  "reason": "The value given: $g(-4, -6, x)$ is $32$."
                },
                {
                  "step": "$-24x = 24$",
                  "reason": "Adding the same number: $-8$ is added to both sides."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-24$."
                }
              ]
            },
            {
              "prompt": "Find a number $z$ with $g(2, z, 2) = 24$, where $g(x, y, z) = -2xy - 2y - 3z$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "z = -5",
              "lines": [
                {
                  "step": "Find a number $z$ with $g(2, z, 2) = 24$, where $g(x, y, z) = -2xy - 2y - 3z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first input $2$ goes in place of $x$, the second input $z$ goes in place of $y$, and the third input $2$ goes in place of $z$.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, so the letter $z$ in the input is a number to find, whatever its name."
                },
                {
                  "step": "$g(2, z, 2) = -2(2)(z) - 2(z) - 3(2)$",
                  "reason": "Substituting a value: each dummy variable is replaced by its input, in brackets."
                },
                {
                  "step": "$g(2, z, 2) = -6z - 6$",
                  "reason": "The order of operations works out the products, and collecting like terms joins them."
                },
                {
                  "step": "$-6z - 6 = 24$",
                  "reason": "The value given: $g(2, z, 2)$ is $24$."
                },
                {
                  "step": "$-6z = 30$",
                  "reason": "Adding the same number: $6$ is added to both sides."
                },
                {
                  "step": "$z = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
                }
              ]
            },
            {
              "prompt": "Find a number $y$ with $g(y, -4, -5) = -18$, where $g(x, y, z) = 3x - 4yz - 4z$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = 14",
              "lines": [
                {
                  "step": "Find a number $y$ with $g(y, -4, -5) = -18$, where $g(x, y, z) = 3x - 4yz - 4z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first input $y$ goes in place of $x$, the second input $-4$ goes in place of $y$, and the third input $-5$ goes in place of $z$.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, so the letter $y$ in the input is a number to find, whatever its name."
                },
                {
                  "step": "$g(y, -4, -5) = 3(y) - 4(-4)(-5) - 4(-5)$",
                  "reason": "Substituting a value: each dummy variable is replaced by its input, in brackets."
                },
                {
                  "step": "$g(y, -4, -5) = 3y - 60$",
                  "reason": "The order of operations works out the products, and collecting like terms joins them."
                },
                {
                  "step": "$3y - 60 = -18$",
                  "reason": "The value given: $g(y, -4, -5)$ is $-18$."
                },
                {
                  "step": "$3y = 42$",
                  "reason": "Adding the same number: $60$ is added to both sides."
                },
                {
                  "step": "$y = 14$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(-2)$, where $f(x) = ax^3 + bx + 6$ for numbers $a$ and $b$, and $f(2) = -22$.",
            "lines": [
              {
                "step": "Find $f(-2)$, where $f(x) = ax^3 + bx + 6$ for numbers $a$ and $b$, and $f(2) = -22$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$8a + 2b + 6 = -22$",
                "reason": "Function notation: $f(2)$ is the rule with $2$ in place of $x$, and $f(2) = -22$ is given."
              },
              {
                "step": "$8a + 2b = -28$",
                "reason": "Adding the same number: $-6$ is added to both sides."
              },
              {
                "step": "$f(-2) = -8a - 2b + 6$",
                "reason": "Function notation, with the sign of a power of a negative number: an odd power of $-2$ is negative."
              },
              {
                "step": "$f(-2) = 6 - (8a + 2b)$",
                "reason": "Subtracting a bracket changes every sign in it."
              },
              {
                "step": "$f(-2) = 6 - (-28) = 34$",
                "reason": "Substitution for a repeated expression: $8a + 2b$ is $-28$ by the third line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-3)$, where $f(x) = ax^3 + bx + 1$ for numbers $a$ and $b$, and $f(3) = 24$.",
              "form": "Answer as an integer.",
              "answer": "-22",
              "lines": [
                {
                  "step": "Find $f(-3)$, where $f(x) = ax^3 + bx + 1$ for numbers $a$ and $b$, and $f(3) = 24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$27a + 3b + 1 = 24$",
                  "reason": "Function notation: $f(3)$ is the rule with $3$ in place of $x$, and $f(3) = 24$ is given."
                },
                {
                  "step": "$27a + 3b = 23$",
                  "reason": "Adding the same number: $-1$ is added to both sides."
                },
                {
                  "step": "$f(-3) = -27a - 3b + 1$",
                  "reason": "Function notation, with the sign of a power of a negative number: an odd power of $-3$ is negative."
                },
                {
                  "step": "$f(-3) = 1 - (27a + 3b)$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$f(-3) = 1 - (23) = -22$",
                  "reason": "Substitution for a repeated expression: $27a + 3b$ is $23$ by the third line."
                }
              ]
            },
            {
              "prompt": "Find $f(-2)$, where $f(x) = ax^3 + bx + 8$ for numbers $a$ and $b$, and $f(2) = -2$.",
              "form": "Answer as an integer.",
              "answer": "18",
              "lines": [
                {
                  "step": "Find $f(-2)$, where $f(x) = ax^3 + bx + 8$ for numbers $a$ and $b$, and $f(2) = -2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8a + 2b + 8 = -2$",
                  "reason": "Function notation: $f(2)$ is the rule with $2$ in place of $x$, and $f(2) = -2$ is given."
                },
                {
                  "step": "$8a + 2b = -10$",
                  "reason": "Adding the same number: $-8$ is added to both sides."
                },
                {
                  "step": "$f(-2) = -8a - 2b + 8$",
                  "reason": "Function notation, with the sign of a power of a negative number: an odd power of $-2$ is negative."
                },
                {
                  "step": "$f(-2) = 8 - (8a + 2b)$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$f(-2) = 8 - (-10) = 18$",
                  "reason": "Substitution for a repeated expression: $8a + 2b$ is $-10$ by the third line."
                }
              ]
            },
            {
              "prompt": "Find $f(-2)$, where $f(x) = ax^3 + bx + 12$ for numbers $a$ and $b$, and $f(2) = 3$.",
              "form": "Answer as an integer.",
              "answer": "21",
              "lines": [
                {
                  "step": "Find $f(-2)$, where $f(x) = ax^3 + bx + 12$ for numbers $a$ and $b$, and $f(2) = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8a + 2b + 12 = 3$",
                  "reason": "Function notation: $f(2)$ is the rule with $2$ in place of $x$, and $f(2) = 3$ is given."
                },
                {
                  "step": "$8a + 2b = -9$",
                  "reason": "Adding the same number: $-12$ is added to both sides."
                },
                {
                  "step": "$f(-2) = -8a - 2b + 12$",
                  "reason": "Function notation, with the sign of a power of a negative number: an odd power of $-2$ is negative."
                },
                {
                  "step": "$f(-2) = 12 - (8a + 2b)$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$f(-2) = 12 - (-9) = 21$",
                  "reason": "Substitution for a repeated expression: $8a + 2b$ is $-9$ by the third line."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t157-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(x - 4)$, where $f(x) = -6x^2 - 8x + 7$, and write that line right.",
            "given": [
              "$f(x - 4) = f(x) + f(-4)$",
              "$f(x - 4) = -6x^2 - 8x + 7 - 57$",
              "$f(x - 4) = -6x^2 - 8x - 50$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(x - 4)$, where $f(x) = -6x^2 - 8x + 7$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 reads $f(x - 4)$ as $f$ times $x - 4$ and splits it over the sum.",
                "reason": "Function notation: $f(x - 4)$ is the output for the input $x - 4$, never a product, so nothing comes out of the brackets."
              },
              {
                "step": "Line 1 written right is $f(x - 4) = -6(x - 4)^2 - 8(x - 4) + 7$.",
                "reason": "Function notation: the input $x - 4$ goes, in brackets, in each place where the dummy variable $x$ stands."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f(4k) + f(-3)$, where $f(x) = -7x^2 - 10x - 12$, and write that line right.",
              "given": [
                "$f(x) = -7x^2 - 10x - 12$",
                "$f(-3) = -7(-3)^2 - 10(-3) - 12 = -45$",
                "$f(4k) = 4f(k)$",
                "$f(4k) = 4(-7k^2 - 10k - 12)$",
                "$f(4k) = -28k^2 - 40k - 48$",
                "$f(4k) + f(-3) = -28k^2 - 40k - 48 - 45$",
                "$f(4k) + f(-3) = -28k^2 - 40k - 93$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(4*k) = -7*(4*k)^2-10*(4*k)-12",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(4k) + f(-3)$, where $f(x) = -7x^2 - 10x - 12$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 reads $f(4k)$ as $f$ times $4k$ and takes the $4$ out in front.",
                  "reason": "Function notation: $f(4k)$ is the output for the input $4k$, never a product, so nothing comes out of the brackets."
                },
                {
                  "step": "Line 3 written right is $f(4k) = -7(4k)^2 - 10(4k) - 12$.",
                  "reason": "Function notation: the input $4k$ goes, in brackets, in each place where the dummy variable $x$ stands."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(x - 3)$, where $f(x) = -8x^2 + 3x - 1$, and write that line right.",
              "given": [
                "$f(x - 3) = f(x) - 3$",
                "$f(x - 3) = -8x^2 + 3x - 1 - 3$",
                "$f(x - 3) = -8x^2 + 3x - 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: f(x-3) = -8*(x-3)^2+3*(x-3)-1",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(x - 3)$, where $f(x) = -8x^2 + 3x - 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 treats $f$ as a label that lets the $-3$ pass outside, as if $f(x - 3)$ were $f(x) - 3$.",
                  "reason": "Function notation: $f(x - 3)$ is the output for the input $x - 3$, never a product, so nothing comes out of the brackets."
                },
                {
                  "step": "Line 1 written right is $f(x - 3) = -8(x - 3)^2 + 3(x - 3) - 1$.",
                  "reason": "Function notation: the input $x - 3$ goes, in brackets, in each place where the dummy variable $x$ stands."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(3k) + f(x - 2)$, where $f(x) = -3x^2 + 8x + 12$, and write that line right.",
              "given": [
                "$f(x) = -3x^2 + 8x + 12$",
                "$f(3k) = -3(3k)^2 + 8(3k) + 12$",
                "$f(3k) = -27k^2 + 24k + 12$",
                "$f(x - 2) = f(x) + f(-2)$",
                "$f(x - 2) = -3x^2 + 8x + 12 - 16$",
                "$f(x - 2) = -3x^2 + 8x - 4$",
                "$f(3k) + f(x - 2) = -27k^2 + 24k + 12 - 3x^2 + 8x - 4$",
                "$f(3k) + f(x - 2) = -3x^2 - 27k^2 + 8x + 24k + 8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: f(x-2) = -3*(x-2)^2+8*(x-2)+12",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(3k) + f(x - 2)$, where $f(x) = -3x^2 + 8x + 12$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 reads $f(x - 2)$ as $f$ times $x - 2$ and splits it over the sum.",
                  "reason": "Function notation: $f(x - 2)$ is the output for the input $x - 2$, never a product, so nothing comes out of the brackets."
                },
                {
                  "step": "Line 4 written right is $f(x - 2) = -3(x - 2)^2 + 8(x - 2) + 12$.",
                  "reason": "Function notation: the input $x - 2$ goes, in brackets, in each place where the dummy variable $x$ stands."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $g(-9, -9, x)$, where $g(x, y, z) = 8x - 2yz - 9z$, and write that line right.",
            "given": [
              "$g(-9, -9, x) = 8(x) - 2(-9)(-9) - 9(-9)$",
              "$g(-9, -9, x) = 8x - 162 + 81$",
              "$g(-9, -9, x) = 8x - 81$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $g(-9, -9, x)$, where $g(x, y, z) = 8x - 2yz - 9z$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 keeps $x$ in the place of the dummy variable $x$, though $x$ is the third input, and moves the numbers along.",
                "reason": "Function of several variables: the inputs are matched to the dummy variables by place, never by their letters."
              },
              {
                "step": "Line 1 written right is $g(-9, -9, x) = 8(-9) - 2(-9)(x) - 9(x)$.",
                "reason": "Dummy variable: the $x$ of the definition only marks a place, so the third input goes in place of $z$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $g(-6, z, 4) + g(-3, 3, 5)$, where $g(x, y, z) = 3x - 7yz + 6z$, and write that line right.",
              "given": [
                "$g(x, y, z) = 3x - 7yz + 6z$",
                "$g(-3, 3, 5) = 3(-3) - 7(3)(5) + 6(5) = -84$",
                "$g(-6, z, 4) = 3(-6) - 7(4)(z) + 6(z)$",
                "$g(-6, z, 4) = -18 - 28z + 6z$",
                "$g(-6, z, 4) = -22z - 18$",
                "$g(-6, z, 4) + g(-3, 3, 5) = -22z - 18 - 84$",
                "$g(-6, z, 4) + g(-3, 3, 5) = -22z - 102$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: g(-6,z,4) = 3*(-6)-7*z*(4)+6*(4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(-6, z, 4) + g(-3, 3, 5)$, where $g(x, y, z) = 3x - 7yz + 6z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 keeps $z$ in the place of the dummy variable $z$, though $z$ is the second input, and moves the numbers along.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, never by their letters."
                },
                {
                  "step": "Line 3 written right is $g(-6, z, 4) = 3(-6) - 7(z)(4) + 6(4)$.",
                  "reason": "Dummy variable: the $z$ of the definition only marks a place, so the second input goes in place of $y$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $g(3, z, -6)$, where $g(x, y, z) = -11xy - 7y + 2z$, and write that line right.",
              "given": [
                "$g(3, z, -6) = -11(3)(-6) - 7(-6) + 2(z)$",
                "$g(3, z, -6) = 198 + 42 + 2z$",
                "$g(3, z, -6) = 2z + 240$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: g(3,z,-6) = -11*(3)*z-7*z+2*(-6)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(3, z, -6)$, where $g(x, y, z) = -11xy - 7y + 2z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 keeps $z$ in the place of the dummy variable $z$, though $z$ is the second input, and moves the numbers along.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, never by their letters."
                },
                {
                  "step": "Line 1 written right is $g(3, z, -6) = -11(3)(z) - 7(z) + 2(-6)$.",
                  "reason": "Dummy variable: the $z$ of the definition only marks a place, so the second input goes in place of $y$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $g(3, z, -5) + g(y, -6, 2)$, where $g(x, y, z) = -10xy - 8y + 7z$, and write that line right.",
              "given": [
                "$g(x, y, z) = -10xy - 8y + 7z$",
                "$g(3, z, -5) = -10(3)(z) - 8(z) + 7(-5)$",
                "$g(3, z, -5) = -38z - 35$",
                "$g(y, -6, 2) = -10(-6)(y) - 8(y) + 7(2)$",
                "$g(y, -6, 2) = 60y - 8y + 14$",
                "$g(y, -6, 2) = 52y + 14$",
                "$g(3, z, -5) + g(y, -6, 2) = -38z - 35 + 52y + 14$",
                "$g(3, z, -5) + g(y, -6, 2) = -38z + 52y - 21$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: g(y,-6,2) = -10*y*(-6)-8*(-6)+7*(2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(3, z, -5) + g(y, -6, 2)$, where $g(x, y, z) = -10xy - 8y + 7z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 keeps $y$ in the place of the dummy variable $y$, though $y$ is the first input, and moves the numbers along.",
                  "reason": "Function of several variables: the inputs are matched to the dummy variables by place, never by their letters."
                },
                {
                  "step": "Line 4 written right is $g(y, -6, 2) = -10(y)(-6) - 8(-6) + 7(2)$.",
                  "reason": "Dummy variable: the $y$ of the definition only marks a place, so the first input goes in place of $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t157-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the function as an equation for its output $y$ in terms of its input $x$, with $y$ alone on the left: the function that squares its input and then takes away 17 times the input.",
            "lines": [
              {
                "step": "Write the function as an equation for its output $y$ in terms of its input $x$, with $y$ alone on the left: the function that squares its input and then takes away 17 times the input.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Squaring the input gives $x^2$.",
                "reason": "Writing a sentence as an equation: the first operation of the sentence acts on the input $x$."
              },
              {
                "step": "Taking away 17 times the input gives $x^2 - 17x$.",
                "reason": "Writing a sentence as an equation: the second operation acts on the result of the first, in the sentence's order."
              },
              {
                "step": "$y = x^2 - 17x$",
                "reason": "Writing a sentence as an equation: the output $y$ equals the result."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the function as an equation for its output $y$ in terms of its input $x$, with $y$ alone on the left: the function that divides its input by 4 and then adds 9.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x/4+9",
              "lines": [
                {
                  "step": "Write the function as an equation for its output $y$ in terms of its input $x$, with $y$ alone on the left: the function that divides its input by 4 and then adds 9.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Dividing the input by 4 gives $\\dfrac{x}{4}$.",
                  "reason": "Writing a sentence as an equation: the first operation of the sentence acts on the input $x$."
                },
                {
                  "step": "Adding 9 gives $\\dfrac{x}{4} + 9$.",
                  "reason": "Writing a sentence as an equation: the second operation acts on the result of the first, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{x}{4} + 9$",
                  "reason": "Writing a sentence as an equation: the output $y$ equals the result."
                }
              ]
            },
            {
              "prompt": "Write the function as an equation for its output $y$ in terms of its input $x$, with $y$ alone on the left: the function that multiplies its input by 4 and then adds 11.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 4*x+11",
              "lines": [
                {
                  "step": "Write the function as an equation for its output $y$ in terms of its input $x$, with $y$ alone on the left: the function that multiplies its input by 4 and then adds 11.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying the input by 4 gives $4x$.",
                  "reason": "Writing a sentence as an equation: the first operation of the sentence acts on the input $x$."
                },
                {
                  "step": "Adding 11 gives $4x + 11$.",
                  "reason": "Writing a sentence as an equation: the second operation acts on the result of the first, in the sentence's order."
                },
                {
                  "step": "$y = 4x + 11$",
                  "reason": "Writing a sentence as an equation: the output $y$ equals the result."
                }
              ]
            },
            {
              "prompt": "Write the function as an equation for its output $y$ in terms of its input $x$, with $y$ alone on the left: the function that takes its input away from 20 and then multiplies the result by 5.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 5*(20-x)",
              "lines": [
                {
                  "step": "Write the function as an equation for its output $y$ in terms of its input $x$, with $y$ alone on the left: the function that takes its input away from 20 and then multiplies the result by 5.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Taking the input away from 20 gives $20 - x$.",
                  "reason": "Writing a sentence as an equation: the first operation of the sentence acts on the input $x$."
                },
                {
                  "step": "Multiplying the result by 5 gives $5(20 - x)$.",
                  "reason": "Writing a sentence as an equation: the second operation acts on the result of the first, in the sentence's order."
                },
                {
                  "step": "$y = 5(20 - x)$",
                  "reason": "Writing a sentence as an equation: the output $y$ equals the result."
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
