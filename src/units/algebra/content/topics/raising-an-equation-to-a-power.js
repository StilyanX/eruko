export default {
  "number": 183,
  "title": "Squaring and cubing a known sum",
  "section": 21,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "628-631"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $x^2 + \\dfrac{169}{x^2}$, given that $x + \\dfrac{13}{x} = 17$.",
    "form": "Answer as an integer.",
    "answer": "263",
    "solution": [
      "Find $x^2 + \\dfrac{169}{x^2}$, given that $x + \\dfrac{13}{x} = 17$.",
      "$\\left(x + \\dfrac{13}{x}\\right)^2 = 289$",
      "$x^2 + 2 \\cdot x \\cdot \\dfrac{13}{x} + \\left(\\dfrac{13}{x}\\right)^2 = 289$",
      "$x^2 + 26 + \\left(\\dfrac{13}{x}\\right)^2 = 289$",
      "$x^2 + 26 + \\dfrac{169}{x^2} = 289$",
      "$x^2 + \\dfrac{169}{x^2} = 263$"
    ]
  },
  "ideas": [
    {
      "name": "Sums of powers from the sum and the product",
      "concrete": "For $3$ and $10$: $(3 + 10)^2 = 169$ and $3^2 + 10^2 = 109 = 169 - 2 \\cdot 30$; $(3 + 10)^3 = 2197$ and $3^3 + 10^3 = 1027 = 2197 - 3 \\cdot 30 \\cdot 13$.",
      "general": "For all numbers $a$ and $b$, $a^2 + b^2 = (a + b)^2 - 2ab$ and $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$. By the square of a binomial, $(a + b)^2$ is $2ab$ more than $a^2 + b^2$. Multiplying out $(a + b)^3$ gives $a^3 + 3a^2b + 3ab^2 + b^3$, which is $3ab(a + b)$ more than $a^3 + b^3$."
    }
  ],
  "kinds": [
    {
      "id": "t183-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $x^2 + \\dfrac{196}{x^2}$, given that $x + \\dfrac{14}{x} = -42$.",
            "lines": [
              {
                "step": "Find $x^2 + \\dfrac{196}{x^2}$, given that $x + \\dfrac{14}{x} = -42$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(x + \\dfrac{14}{x}\\right)^2 = 1764$",
                "reason": "Raising both sides to a power: both sides are squared, and $(-42)^2 = 1764$."
              },
              {
                "step": "$x^2 + 2 \\cdot x \\cdot \\dfrac{14}{x} + \\left(\\dfrac{14}{x}\\right)^2 = 1764$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = x$ and $b = \\dfrac{14}{x}$."
              },
              {
                "step": "$x^2 + 28 + \\left(\\dfrac{14}{x}\\right)^2 = 1764$",
                "reason": "Cancelling a common factor: $x \\cdot \\dfrac{14}{x} = 14$."
              },
              {
                "step": "$x^2 + 28 + \\dfrac{196}{x^2} = 1764$",
                "reason": "Power of a quotient: $\\left(\\dfrac{14}{x}\\right)^2 = \\dfrac{196}{x^2}$."
              },
              {
                "step": "$x^2 + \\dfrac{196}{x^2} = 1736$",
                "reason": "Adding the same number to both sides: $-28$ is added to both sides, and $1764 - 28 = 1736$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x^2 + \\dfrac{64}{x^2}$, given that $x - \\dfrac{8}{x} = -28$.",
              "form": "Answer as an integer.",
              "answer": "800",
              "lines": [
                {
                  "step": "Find $x^2 + \\dfrac{64}{x^2}$, given that $x - \\dfrac{8}{x} = -28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x - \\dfrac{8}{x}\\right)^2 = 784$",
                  "reason": "Raising both sides to a power: both sides are squared, and $(-28)^2 = 784$."
                },
                {
                  "step": "$x^2 + 2 \\cdot x \\cdot \\left(-\\dfrac{8}{x}\\right) + \\left(-\\dfrac{8}{x}\\right)^2 = 784$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = x$ and $b = -\\dfrac{8}{x}$."
                },
                {
                  "step": "$x^2 - 16 + \\left(-\\dfrac{8}{x}\\right)^2 = 784$",
                  "reason": "Cancelling a common factor: $x \\cdot \\dfrac{8}{x} = 8$."
                },
                {
                  "step": "$x^2 - 16 + \\dfrac{64}{x^2} = 784$",
                  "reason": "Power of a quotient: $\\left(-\\dfrac{8}{x}\\right)^2 = \\dfrac{64}{x^2}$."
                },
                {
                  "step": "$x^2 + \\dfrac{64}{x^2} = 800$",
                  "reason": "Adding the same number to both sides: $16$ is added to both sides, and $784 + 16 = 800$."
                }
              ]
            },
            {
              "prompt": "Find $x^2 + \\dfrac{100}{x^2}$, given that $x + \\dfrac{10}{x} = \\dfrac{19}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "281/4",
              "lines": [
                {
                  "step": "Find $x^2 + \\dfrac{100}{x^2}$, given that $x + \\dfrac{10}{x} = \\dfrac{19}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x + \\dfrac{10}{x}\\right)^2 = \\dfrac{361}{4}$",
                  "reason": "Raising both sides to a power: both sides are squared, and $\\left(\\dfrac{19}{2}\\right)^2 = \\dfrac{361}{4}$."
                },
                {
                  "step": "$x^2 + 2 \\cdot x \\cdot \\dfrac{10}{x} + \\left(\\dfrac{10}{x}\\right)^2 = \\dfrac{361}{4}$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = x$ and $b = \\dfrac{10}{x}$."
                },
                {
                  "step": "$x^2 + 20 + \\left(\\dfrac{10}{x}\\right)^2 = \\dfrac{361}{4}$",
                  "reason": "Cancelling a common factor: $x \\cdot \\dfrac{10}{x} = 10$."
                },
                {
                  "step": "$x^2 + 20 + \\dfrac{100}{x^2} = \\dfrac{361}{4}$",
                  "reason": "Power of a quotient: $\\left(\\dfrac{10}{x}\\right)^2 = \\dfrac{100}{x^2}$."
                },
                {
                  "step": "$x^2 + \\dfrac{100}{x^2} = \\dfrac{281}{4}$",
                  "reason": "Adding the same number to both sides: $-20$ is added to both sides, and $\\dfrac{361}{4} - 20 = \\dfrac{281}{4}$."
                }
              ]
            },
            {
              "prompt": "Find $x^2 + \\dfrac{81}{x^2}$, given that $x - \\dfrac{9}{x} = -8$.",
              "form": "Answer as an integer.",
              "answer": "82",
              "lines": [
                {
                  "step": "Find $x^2 + \\dfrac{81}{x^2}$, given that $x - \\dfrac{9}{x} = -8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x - \\dfrac{9}{x}\\right)^2 = 64$",
                  "reason": "Raising both sides to a power: both sides are squared, and $(-8)^2 = 64$."
                },
                {
                  "step": "$x^2 + 2 \\cdot x \\cdot \\left(-\\dfrac{9}{x}\\right) + \\left(-\\dfrac{9}{x}\\right)^2 = 64$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = x$ and $b = -\\dfrac{9}{x}$."
                },
                {
                  "step": "$x^2 - 18 + \\left(-\\dfrac{9}{x}\\right)^2 = 64$",
                  "reason": "Cancelling a common factor: $x \\cdot \\dfrac{9}{x} = 9$."
                },
                {
                  "step": "$x^2 - 18 + \\dfrac{81}{x^2} = 64$",
                  "reason": "Power of a quotient: $\\left(-\\dfrac{9}{x}\\right)^2 = \\dfrac{81}{x^2}$."
                },
                {
                  "step": "$x^2 + \\dfrac{81}{x^2} = 82$",
                  "reason": "Adding the same number to both sides: $18$ is added to both sides, and $64 + 18 = 82$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $x^3 + \\dfrac{1000}{x^3}$, given that $x + \\dfrac{10}{x} = -31$.",
            "lines": [
              {
                "step": "Find $x^3 + \\dfrac{1000}{x^3}$, given that $x + \\dfrac{10}{x} = -31$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(x + \\dfrac{10}{x}\\right)^3 = -29{,}791$",
                "reason": "Raising both sides to a power: both sides are cubed, and $(-31)^3 = -29{,}791$."
              },
              {
                "step": "$x^3 + 3 \\cdot x^2 \\cdot \\dfrac{10}{x} + 3 \\cdot x \\cdot \\left(\\dfrac{10}{x}\\right)^2 + \\left(\\dfrac{10}{x}\\right)^3 = -29{,}791$",
                "reason": "Each term of a product comes from one term of each factor: in $\\left(x + \\dfrac{10}{x}\\right)\\left(x + \\dfrac{10}{x}\\right)\\left(x + \\dfrac{10}{x}\\right)$, taking $\\dfrac{10}{x}$ from none, one, two or all three brackets gives $1$, $3$, $3$ and $1$ terms."
              },
              {
                "step": "$x^3 + 3 \\cdot x^2 \\cdot \\dfrac{10}{x} + 3 \\cdot x \\cdot \\dfrac{100}{x^2} + \\dfrac{1000}{x^3} = -29{,}791$",
                "reason": "Power of a quotient: $\\left(\\dfrac{10}{x}\\right)^2 = \\dfrac{100}{x^2}$ and $\\left(\\dfrac{10}{x}\\right)^3 = \\dfrac{1000}{x^3}$."
              },
              {
                "step": "$x^3 + 30x + \\dfrac{300}{x} + \\dfrac{1000}{x^3} = -29{,}791$",
                "reason": "Cancelling a common factor: $3 \\cdot x^2 \\cdot \\dfrac{10}{x} = 30x$ and $3 \\cdot x \\cdot \\dfrac{100}{x^2} = \\dfrac{300}{x}$."
              },
              {
                "step": "$x^3 + \\dfrac{1000}{x^3} + 30\\left(x + \\dfrac{10}{x}\\right) = -29{,}791$",
                "reason": "Factoring: the common factor $30$ is taken out of $30x + \\dfrac{300}{x}$."
              },
              {
                "step": "$x^3 + \\dfrac{1000}{x^3} + 30 \\cdot (-31) = -29{,}791$",
                "reason": "Substituting a value: $x + \\dfrac{10}{x}$ is replaced by $(-31)$."
              },
              {
                "step": "$x^3 + \\dfrac{1000}{x^3} = -28{,}861$",
                "reason": "Adding the same number to both sides: $930$ is added to both sides, and $-29{,}791 + 930 = -28{,}861$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x^3 - \\dfrac{27}{x^3}$, given that $x - \\dfrac{3}{x} = 29$.",
              "form": "Answer as an integer.",
              "answer": "24650",
              "lines": [
                {
                  "step": "Find $x^3 - \\dfrac{27}{x^3}$, given that $x - \\dfrac{3}{x} = 29$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x - \\dfrac{3}{x}\\right)^3 = 24{,}389$",
                  "reason": "Raising both sides to a power: both sides are cubed, and $29^3 = 24{,}389$."
                },
                {
                  "step": "$x^3 + 3 \\cdot x^2 \\cdot \\left(-\\dfrac{3}{x}\\right) + 3 \\cdot x \\cdot \\left(-\\dfrac{3}{x}\\right)^2 + \\left(-\\dfrac{3}{x}\\right)^3 = 24{,}389$",
                  "reason": "Each term of a product comes from one term of each factor: in $\\left(x - \\dfrac{3}{x}\\right)\\left(x - \\dfrac{3}{x}\\right)\\left(x - \\dfrac{3}{x}\\right)$, taking $-\\dfrac{3}{x}$ from none, one, two or all three brackets gives $1$, $3$, $3$ and $1$ terms."
                },
                {
                  "step": "$x^3 + 3 \\cdot x^2 \\cdot \\left(-\\dfrac{3}{x}\\right) + 3 \\cdot x \\cdot \\dfrac{9}{x^2} - \\dfrac{27}{x^3} = 24{,}389$",
                  "reason": "Power of a quotient: $\\left(-\\dfrac{3}{x}\\right)^2 = \\dfrac{9}{x^2}$ and $\\left(-\\dfrac{3}{x}\\right)^3 = -\\dfrac{27}{x^3}$."
                },
                {
                  "step": "$x^3 - 9x + \\dfrac{27}{x} - \\dfrac{27}{x^3} = 24{,}389$",
                  "reason": "Cancelling a common factor: $3 \\cdot x^2 \\cdot \\left(-\\dfrac{3}{x}\\right) = -9x$ and $3 \\cdot x \\cdot \\dfrac{9}{x^2} = \\dfrac{27}{x}$."
                },
                {
                  "step": "$x^3 - \\dfrac{27}{x^3} - 9\\left(x - \\dfrac{3}{x}\\right) = 24{,}389$",
                  "reason": "Factoring: the common factor $-9$ is taken out of $-9x + \\dfrac{27}{x}$."
                },
                {
                  "step": "$x^3 - \\dfrac{27}{x^3} - 9 \\cdot (29) = 24{,}389$",
                  "reason": "Substituting a value: $x - \\dfrac{3}{x}$ is replaced by $(29)$."
                },
                {
                  "step": "$x^3 - \\dfrac{27}{x^3} = 24{,}650$",
                  "reason": "Adding the same number to both sides: $261$ is added to both sides, and $24{,}389 + 261 = 24{,}650$."
                }
              ]
            },
            {
              "prompt": "Find $x^3 - \\dfrac{125}{x^3}$, given that $x - \\dfrac{5}{x} = \\dfrac{21}{4}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "14301/64",
              "lines": [
                {
                  "step": "Find $x^3 - \\dfrac{125}{x^3}$, given that $x - \\dfrac{5}{x} = \\dfrac{21}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x - \\dfrac{5}{x}\\right)^3 = \\dfrac{9261}{64}$",
                  "reason": "Raising both sides to a power: both sides are cubed, and $\\left(\\dfrac{21}{4}\\right)^3 = \\dfrac{9261}{64}$."
                },
                {
                  "step": "$x^3 + 3 \\cdot x^2 \\cdot \\left(-\\dfrac{5}{x}\\right) + 3 \\cdot x \\cdot \\left(-\\dfrac{5}{x}\\right)^2 + \\left(-\\dfrac{5}{x}\\right)^3 = \\dfrac{9261}{64}$",
                  "reason": "Each term of a product comes from one term of each factor: in $\\left(x - \\dfrac{5}{x}\\right)\\left(x - \\dfrac{5}{x}\\right)\\left(x - \\dfrac{5}{x}\\right)$, taking $-\\dfrac{5}{x}$ from none, one, two or all three brackets gives $1$, $3$, $3$ and $1$ terms."
                },
                {
                  "step": "$x^3 + 3 \\cdot x^2 \\cdot \\left(-\\dfrac{5}{x}\\right) + 3 \\cdot x \\cdot \\dfrac{25}{x^2} - \\dfrac{125}{x^3} = \\dfrac{9261}{64}$",
                  "reason": "Power of a quotient: $\\left(-\\dfrac{5}{x}\\right)^2 = \\dfrac{25}{x^2}$ and $\\left(-\\dfrac{5}{x}\\right)^3 = -\\dfrac{125}{x^3}$."
                },
                {
                  "step": "$x^3 - 15x + \\dfrac{75}{x} - \\dfrac{125}{x^3} = \\dfrac{9261}{64}$",
                  "reason": "Cancelling a common factor: $3 \\cdot x^2 \\cdot \\left(-\\dfrac{5}{x}\\right) = -15x$ and $3 \\cdot x \\cdot \\dfrac{25}{x^2} = \\dfrac{75}{x}$."
                },
                {
                  "step": "$x^3 - \\dfrac{125}{x^3} - 15\\left(x - \\dfrac{5}{x}\\right) = \\dfrac{9261}{64}$",
                  "reason": "Factoring: the common factor $-15$ is taken out of $-15x + \\dfrac{75}{x}$."
                },
                {
                  "step": "$x^3 - \\dfrac{125}{x^3} - 15 \\cdot \\left(\\dfrac{21}{4}\\right) = \\dfrac{9261}{64}$",
                  "reason": "Substituting a value: $x - \\dfrac{5}{x}$ is replaced by $\\left(\\dfrac{21}{4}\\right)$."
                },
                {
                  "step": "$x^3 - \\dfrac{125}{x^3} = \\dfrac{14{,}301}{64}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{315}{4}$ is added to both sides, and $\\dfrac{9261}{64} + \\dfrac{315}{4} = \\dfrac{14{,}301}{64}$."
                }
              ]
            },
            {
              "prompt": "Find $x^3 - \\dfrac{1331}{x^3}$, given that $x - \\dfrac{11}{x} = 30$.",
              "form": "Answer as an integer.",
              "answer": "27990",
              "lines": [
                {
                  "step": "Find $x^3 - \\dfrac{1331}{x^3}$, given that $x - \\dfrac{11}{x} = 30$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x - \\dfrac{11}{x}\\right)^3 = 27{,}000$",
                  "reason": "Raising both sides to a power: both sides are cubed, and $30^3 = 27{,}000$."
                },
                {
                  "step": "$x^3 + 3 \\cdot x^2 \\cdot \\left(-\\dfrac{11}{x}\\right) + 3 \\cdot x \\cdot \\left(-\\dfrac{11}{x}\\right)^2 + \\left(-\\dfrac{11}{x}\\right)^3 = 27{,}000$",
                  "reason": "Each term of a product comes from one term of each factor: in $\\left(x - \\dfrac{11}{x}\\right)\\left(x - \\dfrac{11}{x}\\right)\\left(x - \\dfrac{11}{x}\\right)$, taking $-\\dfrac{11}{x}$ from none, one, two or all three brackets gives $1$, $3$, $3$ and $1$ terms."
                },
                {
                  "step": "$x^3 + 3 \\cdot x^2 \\cdot \\left(-\\dfrac{11}{x}\\right) + 3 \\cdot x \\cdot \\dfrac{121}{x^2} - \\dfrac{1331}{x^3} = 27{,}000$",
                  "reason": "Power of a quotient: $\\left(-\\dfrac{11}{x}\\right)^2 = \\dfrac{121}{x^2}$ and $\\left(-\\dfrac{11}{x}\\right)^3 = -\\dfrac{1331}{x^3}$."
                },
                {
                  "step": "$x^3 - 33x + \\dfrac{363}{x} - \\dfrac{1331}{x^3} = 27{,}000$",
                  "reason": "Cancelling a common factor: $3 \\cdot x^2 \\cdot \\left(-\\dfrac{11}{x}\\right) = -33x$ and $3 \\cdot x \\cdot \\dfrac{121}{x^2} = \\dfrac{363}{x}$."
                },
                {
                  "step": "$x^3 - \\dfrac{1331}{x^3} - 33\\left(x - \\dfrac{11}{x}\\right) = 27{,}000$",
                  "reason": "Factoring: the common factor $-33$ is taken out of $-33x + \\dfrac{363}{x}$."
                },
                {
                  "step": "$x^3 - \\dfrac{1331}{x^3} - 33 \\cdot (30) = 27{,}000$",
                  "reason": "Substituting a value: $x - \\dfrac{11}{x}$ is replaced by $(30)$."
                },
                {
                  "step": "$x^3 - \\dfrac{1331}{x^3} = 27{,}990$",
                  "reason": "Adding the same number to both sides: $990$ is added to both sides, and $27{,}000 + 990 = 27{,}990$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t183-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $x^2 + \\dfrac{121}{x^2}$, given that $x + \\dfrac{11}{x} = 24$, and write that line right.",
            "given": [
              "$x + \\dfrac{11}{x} = 24$",
              "$\\left(x + \\dfrac{11}{x}\\right)^2 = 24^2$",
              "$x^2 + \\left(\\dfrac{11}{x}\\right)^2 = 24^2$",
              "$x^2 + \\dfrac{121}{x^2} = 24^2$",
              "$x^2 + \\dfrac{121}{x^2} = 576$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $x^2 + \\dfrac{121}{x^2}$, given that $x + \\dfrac{11}{x} = 24$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 writes $\\left(x + \\dfrac{11}{x}\\right)^2$ as $x^2 + \\left(\\dfrac{11}{x}\\right)^2$, the square of each term, and leaves out the middle term.",
                "reason": "A power or a root taken term by term over a sum: the square of a sum is the sum times itself, and by the square of a binomial it keeps the middle term $2 \\cdot x \\cdot \\dfrac{11}{x} = 22$ besides the two squares."
              },
              {
                "step": "Lines 1 and 2 are right, and the lines after line 3 follow from it as it is written, so line 3 is the first wrong line.",
                "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
              },
              {
                "step": "Line 3 written right is $x^2 + 2 \\cdot x \\cdot \\dfrac{11}{x} + \\left(\\dfrac{11}{x}\\right)^2 = 24^2$.",
                "reason": "A power of a sum acts on the whole sum, so the line written right follows from the line before it by a rule that holds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $x^2 + \\dfrac{25}{x^2}$, given that $x + \\dfrac{5}{x} = 46$, and write that line right.",
              "given": [
                "$x + \\dfrac{5}{x} = 46$",
                "$\\left(x + \\dfrac{5}{x}\\right)^2 = 46^2$",
                "$x^2 + \\left(\\dfrac{5}{x}\\right)^2 = 46^2$",
                "$x^2 + \\dfrac{25}{x^2} = 46^2$",
                "$x^2 + \\dfrac{25}{x^2} = 2116$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2+2*x*5/x+(5/x)^2 = 46^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^2 + \\dfrac{25}{x^2}$, given that $x + \\dfrac{5}{x} = 46$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $\\left(x + \\dfrac{5}{x}\\right)^2$ as $x^2 + \\left(\\dfrac{5}{x}\\right)^2$, the square of each term, and leaves out the middle term.",
                  "reason": "A power or a root taken term by term over a sum: the square of a sum is the sum times itself, and by the square of a binomial it keeps the middle term $2 \\cdot x \\cdot \\dfrac{5}{x} = 10$ besides the two squares."
                },
                {
                  "step": "Lines 1 and 2 are right, and the lines after line 3 follow from it as it is written, so line 3 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 3 written right is $x^2 + 2 \\cdot x \\cdot \\dfrac{5}{x} + \\left(\\dfrac{5}{x}\\right)^2 = 46^2$.",
                  "reason": "A power of a sum acts on the whole sum, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x^3 + \\dfrac{15{,}625}{x^3}$, given that $x + \\dfrac{25}{x} = 33$, and write that line right.",
              "given": [
                "$x + \\dfrac{25}{x} = 33$",
                "$\\left(x + \\dfrac{25}{x}\\right)^3 = 33^3$",
                "$x^3 + \\left(\\dfrac{25}{x}\\right)^3 = 33^3$",
                "$x^3 + \\dfrac{15{,}625}{x^3} = 33^3$",
                "$x^3 + \\dfrac{15{,}625}{x^3} = 35{,}937$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^3+75*x+1875/x+15625/x^3 = 33^3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^3 + \\dfrac{15{,}625}{x^3}$, given that $x + \\dfrac{25}{x} = 33$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $\\left(x + \\dfrac{25}{x}\\right)^3$ as $x^3 + \\left(\\dfrac{25}{x}\\right)^3$, the cube of each term, and leaves out the middle terms.",
                  "reason": "A power or a root taken term by term over a sum: the cube of a sum is the sum times itself three times, and since each term of a product comes from one term of each factor, it keeps the middle terms $75x$ and $\\dfrac{1875}{x}$ besides the two cubes."
                },
                {
                  "step": "Lines 1 and 2 are right, and the lines after line 3 follow from it as it is written, so line 3 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 3 written right is $x^3 + 75x + \\dfrac{1875}{x} + \\dfrac{15{,}625}{x^3} = 33^3$.",
                  "reason": "A power of a sum acts on the whole sum, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x^2 + \\dfrac{64}{x^2}$, given that $x + \\dfrac{8}{x} = 43$, and write that line right.",
              "given": [
                "$x + \\dfrac{8}{x} = 43$",
                "$\\left(x + \\dfrac{8}{x}\\right)^2 = 43^2$",
                "$\\left(x + \\dfrac{8}{x}\\right)^2 = 1849$",
                "$x^2 + \\left(\\dfrac{8}{x}\\right)^2 = 1849$",
                "$x^2 + \\dfrac{64}{x^2} = 1849$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x^2+2*x*8/x+(8/x)^2 = 1849",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^2 + \\dfrac{64}{x^2}$, given that $x + \\dfrac{8}{x} = 43$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $\\left(x + \\dfrac{8}{x}\\right)^2$ as $x^2 + \\left(\\dfrac{8}{x}\\right)^2$, the square of each term, and leaves out the middle term.",
                  "reason": "A power or a root taken term by term over a sum: the square of a sum is the sum times itself, and by the square of a binomial it keeps the middle term $2 \\cdot x \\cdot \\dfrac{8}{x} = 16$ besides the two squares."
                },
                {
                  "step": "Lines 1 to 3 are right, and the lines after line 4 follow from it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 4 written right is $x^2 + 2 \\cdot x \\cdot \\dfrac{8}{x} + \\left(\\dfrac{8}{x}\\right)^2 = 1849$.",
                  "reason": "A power of a sum acts on the whole sum, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $x^2 + \\dfrac{196}{x^2}$, given that $x + \\dfrac{14}{x} = -15$, and write that line right.",
            "given": [
              "$x + \\dfrac{14}{x} = -15$",
              "$\\left(x + \\dfrac{14}{x}\\right)^2 = 225$",
              "$x^2 + 28 + \\dfrac{196}{x^2} = 225$",
              "$x^2 + \\dfrac{196}{x^2} = 225 + 28$",
              "$x^2 + \\dfrac{196}{x^2} = 253$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $x^2 + \\dfrac{196}{x^2}$, given that $x + \\dfrac{14}{x} = -15$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 moves the term $+28$ to the right side with its sign kept.",
                "reason": "A sign lost: the term is taken off the left side by adding $-28$ to both sides, so it reaches the right side as $-28$."
              },
              {
                "step": "Lines 1 to 3 are right, and the lines after line 4 follow from it as it is written, so line 4 is the first wrong line.",
                "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
              },
              {
                "step": "Line 4 written right is $x^2 + \\dfrac{196}{x^2} = 225 - 28$.",
                "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $x^2 + \\dfrac{81}{x^2}$, given that $x - \\dfrac{9}{x} = -26$, and write that line right.",
              "given": [
                "$x - \\dfrac{9}{x} = -26$",
                "$\\left(x - \\dfrac{9}{x}\\right)^2 = -676$",
                "$x^2 - 18 + \\dfrac{81}{x^2} = -676$",
                "$x^2 + \\dfrac{81}{x^2} = -676 + 18$",
                "$x^2 + \\dfrac{81}{x^2} = -658$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (x-9/x)^2 = 676",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^2 + \\dfrac{81}{x^2}$, given that $x - \\dfrac{9}{x} = -26$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives $\\left(x - \\dfrac{9}{x}\\right)^2$ the value $-676$.",
                  "reason": "A sign lost: by the sign of a power of a negative number, an even power of $-26$ is positive: $(-26)^2 = 676$."
                },
                {
                  "step": "Line 1 is right, and the lines after line 2 follow from it as it is written, so line 2 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 2 written right is $\\left(x - \\dfrac{9}{x}\\right)^2 = 676$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x^3 + \\dfrac{5832}{x^3}$, given that $x + \\dfrac{18}{x} = -12$, and write that line right.",
              "given": [
                "$x + \\dfrac{18}{x} = -12$",
                "$\\left(x + \\dfrac{18}{x}\\right)^3 = 1728$",
                "$x^3 + 54x + \\dfrac{972}{x} + \\dfrac{5832}{x^3} = 1728$",
                "$x^3 + \\dfrac{5832}{x^3} + 54\\left(x + \\dfrac{18}{x}\\right) = 1728$",
                "$x^3 + \\dfrac{5832}{x^3} - 648 = 1728$",
                "$x^3 + \\dfrac{5832}{x^3} = 2376$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (x+18/x)^3 = -1728",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^3 + \\dfrac{5832}{x^3}$, given that $x + \\dfrac{18}{x} = -12$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives $\\left(x + \\dfrac{18}{x}\\right)^3$ the value $1728$.",
                  "reason": "A sign lost: by the sign of a power of a negative number, an odd power of $-12$ is negative: $(-12)^3 = -1728$."
                },
                {
                  "step": "Line 1 is right, and the lines after line 2 follow from it as it is written, so line 2 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 2 written right is $\\left(x + \\dfrac{18}{x}\\right)^3 = -1728$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x^2 + \\dfrac{169}{x^2}$, given that $x - \\dfrac{13}{x} = 10$, and write that line right.",
              "given": [
                "$x - \\dfrac{13}{x} = 10$",
                "$\\left(x - \\dfrac{13}{x}\\right)^2 = 100$",
                "$x^2 + 26 + \\dfrac{169}{x^2} = 100$",
                "$x^2 + \\dfrac{169}{x^2} = 100 - 26$",
                "$x^2 + \\dfrac{169}{x^2} = 74$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2-26+169/x^2 = 100",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^2 + \\dfrac{169}{x^2}$, given that $x - \\dfrac{13}{x} = 10$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives the middle term of $\\left(x - \\dfrac{13}{x}\\right)^2$ as $+26$.",
                  "reason": "A sign lost: by the square of a binomial with $b = -\\dfrac{13}{x}$, the middle term is $2 \\cdot x \\cdot \\left(-\\dfrac{13}{x}\\right) = -26$."
                },
                {
                  "step": "Lines 1 and 2 are right, and the lines after line 3 follow from it as it is written, so line 3 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 3 written right is $x^2 - 26 + \\dfrac{169}{x^2} = 100$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t183-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the sum of the two squares on the left and nothing multiplied out: The sum of the square of $x$ and the square of its reciprocal is 18 less than the cube of the sum of $x$ and its reciprocal.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the sum of the two squares on the left and nothing multiplied out: The sum of the square of $x$ and the square of its reciprocal is 18 less than the cube of the sum of $x$ and its reciprocal.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the square of $x$ and the square of its reciprocal is $x^2 + \\dfrac{1}{x^2}$.",
                "reason": "Writing a sentence as an equation: \"the square of $x$\" and \"the square of its reciprocal\" are $x^2$ and $\\left(\\dfrac{1}{x}\\right)^2 = \\dfrac{1}{x^2}$, and \"the sum of\" adds them."
              },
              {
                "step": "The cube of the sum of $x$ and its reciprocal is $\\left(x + \\dfrac{1}{x}\\right)^3$.",
                "reason": "Writing a sentence as an equation: the reciprocal of $x$ is $\\dfrac{1}{x}$, \"the sum of\" adds it to $x$, and \"the cube of\" raises the whole sum, kept in a bracket, to the power 3."
              },
              {
                "step": "18 less than the cube of the sum of $x$ and its reciprocal is $\\left(x + \\dfrac{1}{x}\\right)^3 - 18$.",
                "reason": "Writing a sentence as an equation: \"18 less than\" takes 18 away from what follows the words."
              },
              {
                "step": "$x^2 + \\dfrac{1}{x^2} = \\left(x + \\dfrac{1}{x}\\right)^3 - 18$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the sum of the squares on the left: The sum of the squares of $x$ and $y$ is ten times the product of $x$ and $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+y^2 = 10*x*y",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of the squares on the left: The sum of the squares of $x$ and $y$ is ten times the product of $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the squares of $x$ and $y$ is $x^2 + y^2$.",
                  "reason": "Writing a sentence as an equation: \"the squares of\" squares each number, and \"the sum of\" adds the two squares."
                },
                {
                  "step": "The product of $x$ and $y$ is $xy$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two numbers."
                },
                {
                  "step": "Ten times the product of $x$ and $y$ is $10xy$.",
                  "reason": "Writing a sentence as an equation: \"ten times\" multiplies what follows the words by 10, kept whole."
                },
                {
                  "step": "$x^2 + y^2 = 10xy$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the cube of the sum on the left and nothing multiplied out: The cube of the sum of $x$ and its reciprocal is 36 more than the sum of the cube of $x$ and the cube of its reciprocal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+1/x)^3 = x^3+1/x^3+36",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the cube of the sum on the left and nothing multiplied out: The cube of the sum of $x$ and its reciprocal is 36 more than the sum of the cube of $x$ and the cube of its reciprocal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cube of the sum of $x$ and its reciprocal is $\\left(x + \\dfrac{1}{x}\\right)^3$.",
                  "reason": "Writing a sentence as an equation: the reciprocal of $x$ is $\\dfrac{1}{x}$, \"the sum of\" adds it to $x$, and \"the cube of\" raises the whole sum, kept in a bracket, to the power 3."
                },
                {
                  "step": "The sum of the cube of $x$ and the cube of its reciprocal is $x^3 + \\dfrac{1}{x^3}$.",
                  "reason": "Writing a sentence as an equation: \"the cube of $x$\" and \"the cube of its reciprocal\" are $x^3$ and $\\dfrac{1}{x^3}$, and \"the sum of\" adds them."
                },
                {
                  "step": "36 more than the sum of the cube of $x$ and the cube of its reciprocal is $x^3 + \\dfrac{1}{x^3} + 36$.",
                  "reason": "Writing a sentence as an equation: \"36 more than\" adds 36 to what follows the words."
                },
                {
                  "step": "$\\left(x + \\dfrac{1}{x}\\right)^3 = x^3 + \\dfrac{1}{x^3} + 36$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum of $x$ and its reciprocal on the left: The sum of $x$ and its reciprocal is a quarter of the sum of the cube of $x$ and the cube of its reciprocal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x+1/x = (x^3+1/x^3)/4",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of $x$ and its reciprocal on the left: The sum of $x$ and its reciprocal is a quarter of the sum of the cube of $x$ and the cube of its reciprocal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and its reciprocal is $x + \\dfrac{1}{x}$.",
                  "reason": "Writing a sentence as an equation: the reciprocal of $x$ is $\\dfrac{1}{x}$, and \"the sum of\" adds it to $x$."
                },
                {
                  "step": "The sum of the cube of $x$ and the cube of its reciprocal is $x^3 + \\dfrac{1}{x^3}$.",
                  "reason": "Writing a sentence as an equation: \"the cube of $x$\" and \"the cube of its reciprocal\" are $x^3$ and $\\dfrac{1}{x^3}$, and \"the sum of\" adds them."
                },
                {
                  "step": "A quarter of the sum of the cube of $x$ and the cube of its reciprocal is $\\dfrac{1}{4}\\left(x^3 + \\dfrac{1}{x^3}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"a quarter of\" divides what follows the words by 4."
                },
                {
                  "step": "$x + \\dfrac{1}{x} = \\dfrac{1}{4}\\left(x^3 + \\dfrac{1}{x^3}\\right)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t183-k4",
      "forms": [
        {
          "example": {
            "problem": "Find $x^2 + y^2$, given that $x + y = 32$ and $xy = 65$.",
            "lines": [
              {
                "step": "Find $x^2 + y^2$, given that $x + y = 32$ and $xy = 65$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
              },
              {
                "step": "$x^2 + y^2 = (32)^2 - 2 \\cdot (65)$",
                "reason": "Substituting a value: $x + y$ and $xy$ are replaced by $(32)$ and $(65)$."
              },
              {
                "step": "$x^2 + y^2 = 894$",
                "reason": "Order of operations, from arithmetic: $(32)^2 = 1024$ and $2 \\cdot (65) = 130$ are worked out first, then the difference."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x^2 + y^2$, given that $x + y = 47$ and $xy = 87$.",
              "form": "Answer as an integer.",
              "answer": "2035",
              "lines": [
                {
                  "step": "Find $x^2 + y^2$, given that $x + y = 47$ and $xy = 87$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^2 + y^2 = (47)^2 - 2 \\cdot (87)$",
                  "reason": "Substituting a value: $x + y$ and $xy$ are replaced by $(47)$ and $(87)$."
                },
                {
                  "step": "$x^2 + y^2 = 2035$",
                  "reason": "Order of operations, from arithmetic: $(47)^2 = 2209$ and $2 \\cdot (87) = 174$ are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $x^2 + y^2$, given that $x + y = -7$ and $xy = -86$.",
              "form": "Answer as an integer.",
              "answer": "221",
              "lines": [
                {
                  "step": "Find $x^2 + y^2$, given that $x + y = -7$ and $xy = -86$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^2 + y^2 = (-7)^2 - 2 \\cdot (-86)$",
                  "reason": "Substituting a value: $x + y$ and $xy$ are replaced by $(-7)$ and $(-86)$."
                },
                {
                  "step": "$x^2 + y^2 = 221$",
                  "reason": "Order of operations, from arithmetic: $(-7)^2 = 49$ and $2 \\cdot (-86) = -172$ are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $x^2 + y^2$, given that $x + y = -5$ and $xy = -35$.",
              "form": "Answer as an integer.",
              "answer": "95",
              "lines": [
                {
                  "step": "Find $x^2 + y^2$, given that $x + y = -5$ and $xy = -35$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^2 + y^2 = (-5)^2 - 2 \\cdot (-35)$",
                  "reason": "Substituting a value: $x + y$ and $xy$ are replaced by $(-5)$ and $(-35)$."
                },
                {
                  "step": "$x^2 + y^2 = 95$",
                  "reason": "Order of operations, from arithmetic: $(-5)^2 = 25$ and $2 \\cdot (-35) = -70$ are worked out first, then the difference."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $xy$, given that $x + y = 7$ and $x^3 + y^3 = 3388$.",
            "lines": [
              {
                "step": "Find $xy$, given that $x + y = 7$ and $x^3 + y^3 = 3388$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^3 + y^3 = (x + y)^3 - 3xy(x + y)$",
                "reason": "The identity $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, with $a = x$ and $b = y$."
              },
              {
                "step": "$(3388) = (7)^3 - 3xy \\cdot (7)$",
                "reason": "Substituting a value: $x^3 + y^3$ and $x + y$ are replaced by $(3388)$ and $(7)$."
              },
              {
                "step": "$3388 = 343 - 21xy$",
                "reason": "Order of operations, from arithmetic: $(7)^3 = 343$, and $3 \\cdot (7) = 21$ multiplies $xy$."
              },
              {
                "step": "$21xy = -3045$",
                "reason": "Adding the same number to both sides: $21xy - 3388$ is added to both sides."
              },
              {
                "step": "$xy = -145$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $21$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $xy$, given that $x + y = -6$ and $x^3 + y^3 = -2214$.",
              "form": "Answer as an integer.",
              "answer": "-111",
              "lines": [
                {
                  "step": "Find $xy$, given that $x + y = -6$ and $x^3 + y^3 = -2214$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)^3 - 3xy(x + y)$",
                  "reason": "The identity $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$(-2214) = (-6)^3 - 3xy \\cdot (-6)$",
                  "reason": "Substituting a value: $x^3 + y^3$ and $x + y$ are replaced by $(-2214)$ and $(-6)$."
                },
                {
                  "step": "$-2214 = -216 + 18xy$",
                  "reason": "Order of operations, from arithmetic: $(-6)^3 = -216$, and $3 \\cdot (-6) = -18$ multiplies $xy$."
                },
                {
                  "step": "$-18xy = 1998$",
                  "reason": "Adding the same number to both sides: $-18xy + 2214$ is added to both sides."
                },
                {
                  "step": "$xy = -111$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-18$."
                }
              ]
            },
            {
              "prompt": "Find $xy$, given that $x + y = -17$ and $x^3 + y^3 = -3568$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1345/51",
              "lines": [
                {
                  "step": "Find $xy$, given that $x + y = -17$ and $x^3 + y^3 = -3568$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)^3 - 3xy(x + y)$",
                  "reason": "The identity $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$(-3568) = (-17)^3 - 3xy \\cdot (-17)$",
                  "reason": "Substituting a value: $x^3 + y^3$ and $x + y$ are replaced by $(-3568)$ and $(-17)$."
                },
                {
                  "step": "$-3568 = -4913 + 51xy$",
                  "reason": "Order of operations, from arithmetic: $(-17)^3 = -4913$, and $3 \\cdot (-17) = -51$ multiplies $xy$."
                },
                {
                  "step": "$-51xy = -1345$",
                  "reason": "Adding the same number to both sides: $-51xy + 3568$ is added to both sides."
                },
                {
                  "step": "$xy = \\dfrac{1345}{51}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-51$."
                }
              ]
            },
            {
              "prompt": "Find $xy$, given that $x + y = 18$ and $x^3 + y^3 = 1620$.",
              "form": "Answer as an integer.",
              "answer": "78",
              "lines": [
                {
                  "step": "Find $xy$, given that $x + y = 18$ and $x^3 + y^3 = 1620$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)^3 - 3xy(x + y)$",
                  "reason": "The identity $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$(1620) = (18)^3 - 3xy \\cdot (18)$",
                  "reason": "Substituting a value: $x^3 + y^3$ and $x + y$ are replaced by $(1620)$ and $(18)$."
                },
                {
                  "step": "$1620 = 5832 - 54xy$",
                  "reason": "Order of operations, from arithmetic: $(18)^3 = 5832$, and $3 \\cdot (18) = 54$ multiplies $xy$."
                },
                {
                  "step": "$54xy = 4212$",
                  "reason": "Adding the same number to both sides: $54xy - 1620$ is added to both sides."
                },
                {
                  "step": "$xy = 78$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $54$."
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
