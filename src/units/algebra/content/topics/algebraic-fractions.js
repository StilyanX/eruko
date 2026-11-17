export default {
  "number": 107,
  "title": "Fractions with letters",
  "section": 1,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "68-73, 110-118"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Simplify $\\dfrac{10x^2-4x}{15x-6}$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(2*x)/3",
    "solution": [
      "Simplify $\\dfrac{10x^2-4x}{15x-6}$.",
      "$\\dfrac{10x^2-4x}{15x-6} = \\dfrac{2x(5x-2)}{3(5x-2)}$",
      "$\\dfrac{2x(5x-2)}{3(5x-2)} = \\dfrac{2x}{3}$"
    ]
  },
  "ideas": [
    {
      "name": "Cancelling a common factor",
      "concrete": "In $\\dfrac{6x}{9x^2}$ the top is $3x\\cdot 2$ and the bottom is $3x\\cdot 3x$, so the factor $3x$ cancels and leaves $\\dfrac{2}{3x}$, for every $x$ other than $0$.",
      "general": "Let $A$, $B$ and $C$ be expressions, with $B$ and $C$ not $0$. Then $\\dfrac{AC}{BC} = \\dfrac{A}{B}$: a factor of the whole top and of the whole bottom cancels. This is **cancelling a common factor**, the cancellation law of arithmetic with expressions in place of numbers. A term of a sum is not a factor of the sum, and it never cancels. A fraction with letters stands only for values of the letters that make no denominator $0$."
    },
    {
      "name": "Single fraction",
      "concrete": "The sum $\\dfrac{1}{x}+\\dfrac{2}{3}$ equals $\\dfrac{2x+3}{3x}$, one expression over one expression, for every $x$ other than $0$.",
      "general": "A **single fraction** is one expression over one expression, with no fraction left in its top or its bottom. A sum, a difference, a product or a quotient of fractions with letters is written as a single fraction for the values of the letters that make no denominator $0$. The single fraction is in lowest terms when its top and its bottom have no common factor other than $1$ and $-1$."
    },
    {
      "name": "Simplest common denominator",
      "concrete": "For $\\dfrac{1}{6x^2}$ and $\\dfrac{1}{4xy}$ the product of the denominators is $24x^3y$, and $12x^2y$ is smaller: $12$ is the least common multiple of $6$ and $4$, $x^2$ is the highest power of $x$, and $y$ is the highest power of $y$.",
      "general": "Let each denominator be written as a number times powers of letters and of brackets. The **simplest common denominator** is the least common multiple of the numbers times each letter and each bracket to the highest power it has in a denominator. Each denominator is a factor of it. To add or subtract the fractions, the top and the bottom of each are multiplied by the factor its denominator lacks, and the tops are then added or subtracted over the simplest common denominator."
    }
  ],
  "kinds": [
    {
      "id": "t107-k1",
      "forms": [
        {
          "example": {
            "problem": "Simplify $\\dfrac{12x^3y}{18xy^4}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{12x^3y}{18xy^4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{12x^3y}{18xy^4} = \\dfrac{6xy\\cdot 2x^2}{6xy\\cdot 3y^3}$",
                "reason": "The greatest common divisor of the numbers times the lowest power of each letter gives the highest common factor $6xy$ of the top and the bottom, and the product law writes each as $6xy$ times what is left."
              },
              {
                "step": "$\\dfrac{6xy\\cdot 2x^2}{6xy\\cdot 3y^3} = \\dfrac{2x^2}{3y^3}$",
                "reason": "Cancelling a common factor: $6xy$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{15a^2b^3}{25a^5b}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*b^2)/(5*a^3)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{15a^2b^3}{25a^5b}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{15a^2b^3}{25a^5b} = \\dfrac{5a^2b\\cdot 3b^2}{5a^2b\\cdot 5a^3}$",
                  "reason": "The greatest common divisor of the numbers times the lowest power of each letter gives the highest common factor $5a^2b$ of the top and the bottom, and the product law writes each as $5a^2b$ times what is left."
                },
                {
                  "step": "$\\dfrac{5a^2b\\cdot 3b^2}{5a^2b\\cdot 5a^3} = \\dfrac{3b^2}{5a^3}$",
                  "reason": "Cancelling a common factor: $5a^2b$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{14x^4}{35x^2y}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(2*x^2)/(5*y)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{14x^4}{35x^2y}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{14x^4}{35x^2y} = \\dfrac{7x^2\\cdot 2x^2}{7x^2\\cdot 5y}$",
                  "reason": "The greatest common divisor of the numbers times the lowest power of each letter gives the highest common factor $7x^2$ of the top and the bottom, and the product law writes each as $7x^2$ times what is left."
                },
                {
                  "step": "$\\dfrac{7x^2\\cdot 2x^2}{7x^2\\cdot 5y} = \\dfrac{2x^2}{5y}$",
                  "reason": "Cancelling a common factor: $7x^2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{8xy^5}{20x^3y^2}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(2*y^3)/(5*x^2)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{8xy^5}{20x^3y^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{8xy^5}{20x^3y^2} = \\dfrac{4xy^2\\cdot 2y^3}{4xy^2\\cdot 5x^2}$",
                  "reason": "The greatest common divisor of the numbers times the lowest power of each letter gives the highest common factor $4xy^2$ of the top and the bottom, and the product law writes each as $4xy^2$ times what is left."
                },
                {
                  "step": "$\\dfrac{4xy^2\\cdot 2y^3}{4xy^2\\cdot 5x^2} = \\dfrac{2y^3}{5x^2}$",
                  "reason": "Cancelling a common factor: $4xy^2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{8x^2+12x}{4x^2}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{8x^2+12x}{4x^2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{8x^2+12x}{4x^2} = \\dfrac{4x(2x+3)}{4x^2}$",
                "reason": "Factoring by the distributive law, read from right to left, takes the common factor $4x$ out of the top."
              },
              {
                "step": "$\\dfrac{4x(2x+3)}{4x^2} = \\dfrac{4x(2x+3)}{4x\\cdot x}$",
                "reason": "The product law writes the bottom as $4x$ times what is left, so the factor taken out of the top shows in the bottom too."
              },
              {
                "step": "$\\dfrac{4x(2x+3)}{4x\\cdot x} = \\dfrac{2x+3}{x}$",
                "reason": "Cancelling a common factor: $4x$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{9x^2-6x}{3x^3}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*x-2)/x^2",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{9x^2-6x}{3x^3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{9x^2-6x}{3x^3} = \\dfrac{3x(3x-2)}{3x^3}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $3x$ out of the top."
                },
                {
                  "step": "$\\dfrac{3x(3x-2)}{3x^3} = \\dfrac{3x(3x-2)}{3x\\cdot x^2}$",
                  "reason": "The product law writes the bottom as $3x$ times what is left, so the factor taken out of the top shows in the bottom too."
                },
                {
                  "step": "$\\dfrac{3x(3x-2)}{3x\\cdot x^2} = \\dfrac{3x-2}{x^2}$",
                  "reason": "Cancelling a common factor: $3x$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{14y+21}{28y}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(2*y+3)/(4*y)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{14y+21}{28y}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{14y+21}{28y} = \\dfrac{7(2y+3)}{28y}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $7$ out of the top."
                },
                {
                  "step": "$\\dfrac{7(2y+3)}{28y} = \\dfrac{7(2y+3)}{7\\cdot 4y}$",
                  "reason": "The product law writes the bottom as $7$ times what is left, so the factor taken out of the top shows in the bottom too."
                },
                {
                  "step": "$\\dfrac{7(2y+3)}{7\\cdot 4y} = \\dfrac{2y+3}{4y}$",
                  "reason": "Cancelling a common factor: $7$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{6a^2+10a}{8a^2}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*a+5)/(4*a)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{6a^2+10a}{8a^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{6a^2+10a}{8a^2} = \\dfrac{2a(3a+5)}{8a^2}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $2a$ out of the top."
                },
                {
                  "step": "$\\dfrac{2a(3a+5)}{8a^2} = \\dfrac{2a(3a+5)}{2a\\cdot 4a}$",
                  "reason": "The product law writes the bottom as $2a$ times what is left, so the factor taken out of the top shows in the bottom too."
                },
                {
                  "step": "$\\dfrac{2a(3a+5)}{2a\\cdot 4a} = \\dfrac{3a+5}{4a}$",
                  "reason": "Cancelling a common factor: $2a$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{6x^2+9x}{4x+6}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{6x^2+9x}{4x+6}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{6x^2+9x}{4x+6} = \\dfrac{3x(2x+3)}{2(2x+3)}$",
                "reason": "Factoring by the distributive law, read from right to left, takes a common factor out of the top and out of the bottom, and each bracket left has no common factor to take out."
              },
              {
                "step": "$\\dfrac{3x(2x+3)}{2(2x+3)} = \\dfrac{3x}{2}$",
                "reason": "Cancelling a common factor: $2x+3$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{5x^2+20x}{3x+12}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(5*x)/3",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{5x^2+20x}{3x+12}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5x^2+20x}{3x+12} = \\dfrac{5x(x+4)}{3(x+4)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes a common factor out of the top and out of the bottom, and each bracket left has no common factor to take out."
                },
                {
                  "step": "$\\dfrac{5x(x+4)}{3(x+4)} = \\dfrac{5x}{3}$",
                  "reason": "Cancelling a common factor: $x+4$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{12y+8}{9y^2+6y}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "4/(3*y)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{12y+8}{9y^2+6y}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{12y+8}{9y^2+6y} = \\dfrac{4(3y+2)}{3y(3y+2)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes a common factor out of the top and out of the bottom, and each bracket left has no common factor to take out."
                },
                {
                  "step": "$\\dfrac{4(3y+2)}{3y(3y+2)} = \\dfrac{4}{3y}$",
                  "reason": "Cancelling a common factor: $3y+2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{a^2b+ab^2}{3a+3b}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(a*b)/3",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{a^2b+ab^2}{3a+3b}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{a^2b+ab^2}{3a+3b} = \\dfrac{ab(a+b)}{3(a+b)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes a common factor out of the top and out of the bottom, and each bracket left has no common factor to take out."
                },
                {
                  "step": "$\\dfrac{ab(a+b)}{3(a+b)} = \\dfrac{ab}{3}$",
                  "reason": "Cancelling a common factor: $a+b$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{x^2-5x}{10-2x}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{x^2-5x}{10-2x}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x^2-5x}{10-2x} = \\dfrac{x(x-5)}{2(5-x)}$",
                "reason": "Factoring by the distributive law, read from right to left, takes a common factor out of the top and out of the bottom, and each bracket left has no common factor to take out."
              },
              {
                "step": "$\\dfrac{x(x-5)}{2(5-x)} = \\dfrac{x(x-5)}{-2(x-5)}$",
                "reason": "The rule for removing parentheses, $-(x-y)=-x+y$, read from right to left, writes $5-x$ as $-(x-5)$."
              },
              {
                "step": "$\\dfrac{x(x-5)}{-2(x-5)} = \\dfrac{x}{-2}$",
                "reason": "Cancelling a common factor: $x-5$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              },
              {
                "step": "$\\dfrac{x}{-2} = -\\dfrac{x}{2}$",
                "reason": "Negative quotient identities: a minus sign on the top or on the bottom of a fraction stands in front of the whole fraction."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{6-3y}{y^2-2y}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "-3/y",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{6-3y}{y^2-2y}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{6-3y}{y^2-2y} = \\dfrac{3(2-y)}{y(y-2)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes a common factor out of the top and out of the bottom, and each bracket left has no common factor to take out."
                },
                {
                  "step": "$\\dfrac{3(2-y)}{y(y-2)} = \\dfrac{-3(y-2)}{y(y-2)}$",
                  "reason": "The rule for removing parentheses, $-(x-y)=-x+y$, read from right to left, writes $2-y$ as $-(y-2)$."
                },
                {
                  "step": "$\\dfrac{-3(y-2)}{y(y-2)} = \\dfrac{-3}{y}$",
                  "reason": "Cancelling a common factor: $y-2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{-3}{y} = -\\dfrac{3}{y}$",
                  "reason": "Negative quotient identities: a minus sign on the top or on the bottom of a fraction stands in front of the whole fraction."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{4a-12}{3a^2-a^3}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "-4/a^2",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{4a-12}{3a^2-a^3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4a-12}{3a^2-a^3} = \\dfrac{4(a-3)}{a^2(3-a)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes a common factor out of the top and out of the bottom, and each bracket left has no common factor to take out."
                },
                {
                  "step": "$\\dfrac{4(a-3)}{a^2(3-a)} = \\dfrac{4(a-3)}{-a^2(a-3)}$",
                  "reason": "The rule for removing parentheses, $-(x-y)=-x+y$, read from right to left, writes $3-a$ as $-(a-3)$."
                },
                {
                  "step": "$\\dfrac{4(a-3)}{-a^2(a-3)} = \\dfrac{4}{-a^2}$",
                  "reason": "Cancelling a common factor: $a-3$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{4}{-a^2} = -\\dfrac{4}{a^2}$",
                  "reason": "Negative quotient identities: a minus sign on the top or on the bottom of a fraction stands in front of the whole fraction."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{2x-14}{21x-3x^2}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "-2/(3*x)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{2x-14}{21x-3x^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2x-14}{21x-3x^2} = \\dfrac{2(x-7)}{3x(7-x)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes a common factor out of the top and out of the bottom, and each bracket left has no common factor to take out."
                },
                {
                  "step": "$\\dfrac{2(x-7)}{3x(7-x)} = \\dfrac{2(x-7)}{-3x(x-7)}$",
                  "reason": "The rule for removing parentheses, $-(x-y)=-x+y$, read from right to left, writes $7-x$ as $-(x-7)$."
                },
                {
                  "step": "$\\dfrac{2(x-7)}{-3x(x-7)} = \\dfrac{2}{-3x}$",
                  "reason": "Cancelling a common factor: $x-7$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{2}{-3x} = -\\dfrac{2}{3x}$",
                  "reason": "Negative quotient identities: a minus sign on the top or on the bottom of a fraction stands in front of the whole fraction."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{12x^3-8x^2}{4x^2}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{12x^3-8x^2}{4x^2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{12x^3-8x^2}{4x^2} = \\dfrac{4x^2(3x-2)}{4x^2}$",
                "reason": "Factoring by the distributive law, read from right to left, takes the common factor $4x^2$ out of the top."
              },
              {
                "step": "$\\dfrac{4x^2(3x-2)}{4x^2} = \\dfrac{3x-2}{1}$",
                "reason": "Cancelling a common factor: $4x^2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              },
              {
                "step": "$\\dfrac{3x-2}{1} = 3x-2$",
                "reason": "A whole number as a fraction, read from right to left, with an expression in place of the number: a top over the denominator $1$ is the top itself."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{10y^2+15y}{5y}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*y+3",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{10y^2+15y}{5y}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{10y^2+15y}{5y} = \\dfrac{5y(2y+3)}{5y}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $5y$ out of the top."
                },
                {
                  "step": "$\\dfrac{5y(2y+3)}{5y} = \\dfrac{2y+3}{1}$",
                  "reason": "Cancelling a common factor: $5y$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{2y+3}{1} = 2y+3$",
                  "reason": "A whole number as a fraction, read from right to left, with an expression in place of the number: a top over the denominator $1$ is the top itself."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{6a^4-9a^3}{3a^2}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*a^2-3*a",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{6a^4-9a^3}{3a^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{6a^4-9a^3}{3a^2} = \\dfrac{3a^2(2a^2-3a)}{3a^2}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $3a^2$ out of the top."
                },
                {
                  "step": "$\\dfrac{3a^2(2a^2-3a)}{3a^2} = \\dfrac{2a^2-3a}{1}$",
                  "reason": "Cancelling a common factor: $3a^2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{2a^2-3a}{1} = 2a^2-3a$",
                  "reason": "A whole number as a fraction, read from right to left, with an expression in place of the number: a top over the denominator $1$ is the top itself."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{14x^3+21x}{7x}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*x^2+3",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{14x^3+21x}{7x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{14x^3+21x}{7x} = \\dfrac{7x(2x^2+3)}{7x}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $7x$ out of the top."
                },
                {
                  "step": "$\\dfrac{7x(2x^2+3)}{7x} = \\dfrac{2x^2+3}{1}$",
                  "reason": "Cancelling a common factor: $7x$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{2x^2+3}{1} = 2x^2+3$",
                  "reason": "A whole number as a fraction, read from right to left, with an expression in place of the number: a top over the denominator $1$ is the top itself."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t107-k2",
      "forms": [
        {
          "example": {
            "problem": "Simplify $\\dfrac{4x-8}{9x}\\cdot\\dfrac{6x^2}{5x-10}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{4x-8}{9x}\\cdot\\dfrac{6x^2}{5x-10}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{4x-8}{9x}\\cdot\\dfrac{6x^2}{5x-10} = \\dfrac{4(x-2)}{9x}\\cdot\\dfrac{6x^2}{5(x-2)}$",
                "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
              },
              {
                "step": "$\\dfrac{4(x-2)}{9x}\\cdot\\dfrac{6x^2}{5(x-2)} = \\dfrac{4(x-2)\\cdot 6x^2}{9x\\cdot 5(x-2)}$",
                "reason": "The product formula multiplies the tops together and the bottoms together."
              },
              {
                "step": "$\\dfrac{4(x-2)\\cdot 6x^2}{9x\\cdot 5(x-2)} = \\dfrac{4\\cdot 6x^2}{9x\\cdot 5}$",
                "reason": "Cancelling a common factor: $x-2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              },
              {
                "step": "$\\dfrac{4\\cdot 6x^2}{9x\\cdot 5} = \\dfrac{24x^2}{45x}$",
                "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
              },
              {
                "step": "$\\dfrac{24x^2}{45x} = \\dfrac{8x}{15}$",
                "reason": "Cancelling a common factor: $3x$ divides the top and the bottom, which leaves the fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{2y^2}{y^2+3y}\\cdot\\dfrac{5y+15}{8y^2}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "5/(4*y)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{2y^2}{y^2+3y}\\cdot\\dfrac{5y+15}{8y^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2y^2}{y^2+3y}\\cdot\\dfrac{5y+15}{8y^2} = \\dfrac{2y^2}{y(y+3)}\\cdot\\dfrac{5(y+3)}{8y^2}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{2y^2}{y(y+3)}\\cdot\\dfrac{5(y+3)}{8y^2} = \\dfrac{2y^2\\cdot 5(y+3)}{y(y+3)\\cdot 8y^2}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{2y^2\\cdot 5(y+3)}{y(y+3)\\cdot 8y^2} = \\dfrac{2y^2\\cdot 5}{y\\cdot 8y^2}$",
                  "reason": "Cancelling a common factor: $y+3$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{2y^2\\cdot 5}{y\\cdot 8y^2} = \\dfrac{10y^2}{8y^3}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{10y^2}{8y^3} = \\dfrac{5}{4y}$",
                  "reason": "Cancelling a common factor: $2y^2$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{x^2-4x}{6}\\cdot\\dfrac{9}{x^3-4x^2}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "3/(2*x)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{x^2-4x}{6}\\cdot\\dfrac{9}{x^3-4x^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x^2-4x}{6}\\cdot\\dfrac{9}{x^3-4x^2} = \\dfrac{x(x-4)}{6}\\cdot\\dfrac{9}{x^2(x-4)}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{x(x-4)}{6}\\cdot\\dfrac{9}{x^2(x-4)} = \\dfrac{x(x-4)\\cdot 9}{6\\cdot x^2(x-4)}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{x(x-4)\\cdot 9}{6\\cdot x^2(x-4)} = \\dfrac{x\\cdot 9}{6\\cdot x^2}$",
                  "reason": "Cancelling a common factor: $x-4$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{x\\cdot 9}{6\\cdot x^2} = \\dfrac{9x}{6x^2}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{9x}{6x^2} = \\dfrac{3}{2x}$",
                  "reason": "Cancelling a common factor: $3x$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{a+b}{4a}\\cdot\\dfrac{10a^2}{3a+3b}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(5*a)/6",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{a+b}{4a}\\cdot\\dfrac{10a^2}{3a+3b}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{a+b}{4a}\\cdot\\dfrac{10a^2}{3a+3b} = \\dfrac{a+b}{4a}\\cdot\\dfrac{10a^2}{3(a+b)}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{a+b}{4a}\\cdot\\dfrac{10a^2}{3(a+b)} = \\dfrac{(a+b)\\cdot 10a^2}{4a\\cdot 3(a+b)}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{(a+b)\\cdot 10a^2}{4a\\cdot 3(a+b)} = \\dfrac{10a^2}{4a\\cdot 3}$",
                  "reason": "Cancelling a common factor: $a+b$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{10a^2}{4a\\cdot 3} = \\dfrac{10a^2}{12a}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{10a^2}{12a} = \\dfrac{5a}{6}$",
                  "reason": "Cancelling a common factor: $2a$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{x^2+4x}{6}\\div\\dfrac{3x+12}{4x}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{x^2+4x}{6}\\div\\dfrac{3x+12}{4x}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x^2+4x}{6}\\div\\dfrac{3x+12}{4x} = \\dfrac{x^2+4x}{6}\\cdot\\dfrac{4x}{3x+12}$",
                "reason": "Invert-and-multiply: dividing by a fraction is multiplying by that fraction turned upside down."
              },
              {
                "step": "$\\dfrac{x^2+4x}{6}\\cdot\\dfrac{4x}{3x+12} = \\dfrac{x(x+4)}{6}\\cdot\\dfrac{4x}{3(x+4)}$",
                "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
              },
              {
                "step": "$\\dfrac{x(x+4)}{6}\\cdot\\dfrac{4x}{3(x+4)} = \\dfrac{x(x+4)\\cdot 4x}{6\\cdot 3(x+4)}$",
                "reason": "The product formula multiplies the tops together and the bottoms together."
              },
              {
                "step": "$\\dfrac{x(x+4)\\cdot 4x}{6\\cdot 3(x+4)} = \\dfrac{x\\cdot 4x}{6\\cdot 3}$",
                "reason": "Cancelling a common factor: $x+4$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              },
              {
                "step": "$\\dfrac{x\\cdot 4x}{6\\cdot 3} = \\dfrac{4x^2}{18}$",
                "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
              },
              {
                "step": "$\\dfrac{4x^2}{18} = \\dfrac{2x^2}{9}$",
                "reason": "Cancelling a common factor: $2$ divides the top and the bottom, which leaves the fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{10y}{y-5}\\div\\dfrac{4y^2}{3y-15}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "15/(2*y)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{10y}{y-5}\\div\\dfrac{4y^2}{3y-15}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{10y}{y-5}\\div\\dfrac{4y^2}{3y-15} = \\dfrac{10y}{y-5}\\cdot\\dfrac{3y-15}{4y^2}$",
                  "reason": "Invert-and-multiply: dividing by a fraction is multiplying by that fraction turned upside down."
                },
                {
                  "step": "$\\dfrac{10y}{y-5}\\cdot\\dfrac{3y-15}{4y^2} = \\dfrac{10y}{y-5}\\cdot\\dfrac{3(y-5)}{4y^2}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{10y}{y-5}\\cdot\\dfrac{3(y-5)}{4y^2} = \\dfrac{10y\\cdot 3(y-5)}{(y-5)\\cdot 4y^2}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{10y\\cdot 3(y-5)}{(y-5)\\cdot 4y^2} = \\dfrac{10y\\cdot 3}{4y^2}$",
                  "reason": "Cancelling a common factor: $y-5$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{10y\\cdot 3}{4y^2} = \\dfrac{30y}{4y^2}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{30y}{4y^2} = \\dfrac{15}{2y}$",
                  "reason": "Cancelling a common factor: $2y$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{x^2-2x}{9x}\\div\\dfrac{5x-10}{6x^2}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(2*x^2)/15",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{x^2-2x}{9x}\\div\\dfrac{5x-10}{6x^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x^2-2x}{9x}\\div\\dfrac{5x-10}{6x^2} = \\dfrac{x^2-2x}{9x}\\cdot\\dfrac{6x^2}{5x-10}$",
                  "reason": "Invert-and-multiply: dividing by a fraction is multiplying by that fraction turned upside down."
                },
                {
                  "step": "$\\dfrac{x^2-2x}{9x}\\cdot\\dfrac{6x^2}{5x-10} = \\dfrac{x(x-2)}{9x}\\cdot\\dfrac{6x^2}{5(x-2)}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{x(x-2)}{9x}\\cdot\\dfrac{6x^2}{5(x-2)} = \\dfrac{x(x-2)\\cdot 6x^2}{9x\\cdot 5(x-2)}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{x(x-2)\\cdot 6x^2}{9x\\cdot 5(x-2)} = \\dfrac{x\\cdot 6x^2}{9x\\cdot 5}$",
                  "reason": "Cancelling a common factor: $x-2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{x\\cdot 6x^2}{9x\\cdot 5} = \\dfrac{6x^3}{45x}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{6x^3}{45x} = \\dfrac{2x^2}{15}$",
                  "reason": "Cancelling a common factor: $3x$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{6x}{x+2}\\div\\dfrac{9x^2}{4x+8}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "8/(3*x)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{6x}{x+2}\\div\\dfrac{9x^2}{4x+8}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{6x}{x+2}\\div\\dfrac{9x^2}{4x+8} = \\dfrac{6x}{x+2}\\cdot\\dfrac{4x+8}{9x^2}$",
                  "reason": "Invert-and-multiply: dividing by a fraction is multiplying by that fraction turned upside down."
                },
                {
                  "step": "$\\dfrac{6x}{x+2}\\cdot\\dfrac{4x+8}{9x^2} = \\dfrac{6x}{x+2}\\cdot\\dfrac{4(x+2)}{9x^2}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{6x}{x+2}\\cdot\\dfrac{4(x+2)}{9x^2} = \\dfrac{6x\\cdot 4(x+2)}{(x+2)\\cdot 9x^2}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{6x\\cdot 4(x+2)}{(x+2)\\cdot 9x^2} = \\dfrac{6x\\cdot 4}{9x^2}$",
                  "reason": "Cancelling a common factor: $x+2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{6x\\cdot 4}{9x^2} = \\dfrac{24x}{9x^2}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{24x}{9x^2} = \\dfrac{8}{3x}$",
                  "reason": "Cancelling a common factor: $3x$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{\\dfrac{2a+6}{a^2}}{\\dfrac{a+3}{5a}}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{\\dfrac{2a+6}{a^2}}{\\dfrac{a+3}{5a}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{\\dfrac{2a+6}{a^2}}{\\dfrac{a+3}{5a}} = \\dfrac{2a+6}{a^2}\\div\\dfrac{a+3}{5a}$",
                "reason": "Complex fraction: a fraction whose top and bottom are fractions is the top divided by the bottom."
              },
              {
                "step": "$\\dfrac{2a+6}{a^2}\\div\\dfrac{a+3}{5a} = \\dfrac{2a+6}{a^2}\\cdot\\dfrac{5a}{a+3}$",
                "reason": "Invert-and-multiply: dividing by a fraction is multiplying by that fraction turned upside down."
              },
              {
                "step": "$\\dfrac{2a+6}{a^2}\\cdot\\dfrac{5a}{a+3} = \\dfrac{2(a+3)}{a^2}\\cdot\\dfrac{5a}{a+3}$",
                "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
              },
              {
                "step": "$\\dfrac{2(a+3)}{a^2}\\cdot\\dfrac{5a}{a+3} = \\dfrac{2(a+3)\\cdot 5a}{a^2(a+3)}$",
                "reason": "The product formula multiplies the tops together and the bottoms together."
              },
              {
                "step": "$\\dfrac{2(a+3)\\cdot 5a}{a^2(a+3)} = \\dfrac{2\\cdot 5a}{a^2}$",
                "reason": "Cancelling a common factor: $a+3$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              },
              {
                "step": "$\\dfrac{2\\cdot 5a}{a^2} = \\dfrac{10a}{a^2}$",
                "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
              },
              {
                "step": "$\\dfrac{10a}{a^2} = \\dfrac{10}{a}$",
                "reason": "Cancelling a common factor: $a$ divides the top and the bottom, which leaves the fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{\\dfrac{3x-12}{8x}}{\\dfrac{x-4}{2x^2}}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*x)/4",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{\\dfrac{3x-12}{8x}}{\\dfrac{x-4}{2x^2}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\dfrac{3x-12}{8x}}{\\dfrac{x-4}{2x^2}} = \\dfrac{3x-12}{8x}\\div\\dfrac{x-4}{2x^2}$",
                  "reason": "Complex fraction: a fraction whose top and bottom are fractions is the top divided by the bottom."
                },
                {
                  "step": "$\\dfrac{3x-12}{8x}\\div\\dfrac{x-4}{2x^2} = \\dfrac{3x-12}{8x}\\cdot\\dfrac{2x^2}{x-4}$",
                  "reason": "Invert-and-multiply: dividing by a fraction is multiplying by that fraction turned upside down."
                },
                {
                  "step": "$\\dfrac{3x-12}{8x}\\cdot\\dfrac{2x^2}{x-4} = \\dfrac{3(x-4)}{8x}\\cdot\\dfrac{2x^2}{x-4}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{3(x-4)}{8x}\\cdot\\dfrac{2x^2}{x-4} = \\dfrac{3(x-4)\\cdot 2x^2}{8x(x-4)}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{3(x-4)\\cdot 2x^2}{8x(x-4)} = \\dfrac{3\\cdot 2x^2}{8x}$",
                  "reason": "Cancelling a common factor: $x-4$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{3\\cdot 2x^2}{8x} = \\dfrac{6x^2}{8x}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{6x^2}{8x} = \\dfrac{3x}{4}$",
                  "reason": "Cancelling a common factor: $2x$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{\\dfrac{x^2+6x}{7}}{\\dfrac{2x+12}{21x}}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*x^2)/2",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{\\dfrac{x^2+6x}{7}}{\\dfrac{2x+12}{21x}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\dfrac{x^2+6x}{7}}{\\dfrac{2x+12}{21x}} = \\dfrac{x^2+6x}{7}\\div\\dfrac{2x+12}{21x}$",
                  "reason": "Complex fraction: a fraction whose top and bottom are fractions is the top divided by the bottom."
                },
                {
                  "step": "$\\dfrac{x^2+6x}{7}\\div\\dfrac{2x+12}{21x} = \\dfrac{x^2+6x}{7}\\cdot\\dfrac{21x}{2x+12}$",
                  "reason": "Invert-and-multiply: dividing by a fraction is multiplying by that fraction turned upside down."
                },
                {
                  "step": "$\\dfrac{x^2+6x}{7}\\cdot\\dfrac{21x}{2x+12} = \\dfrac{x(x+6)}{7}\\cdot\\dfrac{21x}{2(x+6)}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{x(x+6)}{7}\\cdot\\dfrac{21x}{2(x+6)} = \\dfrac{x(x+6)\\cdot 21x}{7\\cdot 2(x+6)}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{x(x+6)\\cdot 21x}{7\\cdot 2(x+6)} = \\dfrac{x\\cdot 21x}{7\\cdot 2}$",
                  "reason": "Cancelling a common factor: $x+6$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{x\\cdot 21x}{7\\cdot 2} = \\dfrac{21x^2}{14}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{21x^2}{14} = \\dfrac{3x^2}{2}$",
                  "reason": "Cancelling a common factor: $7$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{\\dfrac{4b}{b-1}}{\\dfrac{6b^3}{5b-5}}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "10/(3*b^2)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{\\dfrac{4b}{b-1}}{\\dfrac{6b^3}{5b-5}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\dfrac{4b}{b-1}}{\\dfrac{6b^3}{5b-5}} = \\dfrac{4b}{b-1}\\div\\dfrac{6b^3}{5b-5}$",
                  "reason": "Complex fraction: a fraction whose top and bottom are fractions is the top divided by the bottom."
                },
                {
                  "step": "$\\dfrac{4b}{b-1}\\div\\dfrac{6b^3}{5b-5} = \\dfrac{4b}{b-1}\\cdot\\dfrac{5b-5}{6b^3}$",
                  "reason": "Invert-and-multiply: dividing by a fraction is multiplying by that fraction turned upside down."
                },
                {
                  "step": "$\\dfrac{4b}{b-1}\\cdot\\dfrac{5b-5}{6b^3} = \\dfrac{4b}{b-1}\\cdot\\dfrac{5(b-1)}{6b^3}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes each top and each bottom that is a sum as a product."
                },
                {
                  "step": "$\\dfrac{4b}{b-1}\\cdot\\dfrac{5(b-1)}{6b^3} = \\dfrac{4b\\cdot 5(b-1)}{(b-1)\\cdot 6b^3}$",
                  "reason": "The product formula multiplies the tops together and the bottoms together."
                },
                {
                  "step": "$\\dfrac{4b\\cdot 5(b-1)}{(b-1)\\cdot 6b^3} = \\dfrac{4b\\cdot 5}{6b^3}$",
                  "reason": "Cancelling a common factor: $b-1$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{4b\\cdot 5}{6b^3} = \\dfrac{20b}{6b^3}$",
                  "reason": "The product law and the multiplication of the numbers write the top and the bottom each as one term."
                },
                {
                  "step": "$\\dfrac{20b}{6b^3} = \\dfrac{10}{3b^2}$",
                  "reason": "Cancelling a common factor: $2b$ divides the top and the bottom, which leaves the fraction in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{\\dfrac{x}{4}+2}{\\dfrac{x}{4}-1}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{\\dfrac{x}{4}+2}{\\dfrac{x}{4}-1}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{\\dfrac{x}{4}+2}{\\dfrac{x}{4}-1} = \\dfrac{\\left(\\dfrac{x}{4}+2\\right)\\cdot 4}{\\left(\\dfrac{x}{4}-1\\right)\\cdot 4}$",
                "reason": "Cancelling a common factor, read from right to left: the top and the bottom are each multiplied by $4$, which is not $0$."
              },
              {
                "step": "$\\dfrac{\\left(\\dfrac{x}{4}+2\\right)\\cdot 4}{\\left(\\dfrac{x}{4}-1\\right)\\cdot 4} = \\dfrac{x+8}{x-4}$",
                "reason": "The distributive law multiplies each term of the top and of the bottom by $4$, and each fraction times $4$ leaves its top; the top and the bottom left have no common factor, so the fraction is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{1+\\dfrac{3}{x}}{1-\\dfrac{2}{x}}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(x+3)/(x-2)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{1+\\dfrac{3}{x}}{1-\\dfrac{2}{x}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1+\\dfrac{3}{x}}{1-\\dfrac{2}{x}} = \\dfrac{\\left(1+\\dfrac{3}{x}\\right)\\cdot x}{\\left(1-\\dfrac{2}{x}\\right)\\cdot x}$",
                  "reason": "Cancelling a common factor, read from right to left: the top and the bottom are each multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{\\left(1+\\dfrac{3}{x}\\right)\\cdot x}{\\left(1-\\dfrac{2}{x}\\right)\\cdot x} = \\dfrac{x+3}{x-2}$",
                  "reason": "The distributive law multiplies each term of the top and of the bottom by $x$, and each fraction times $x$ leaves its top; the top and the bottom left have no common factor, so the fraction is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{\\dfrac{y}{2}-3}{\\dfrac{y}{2}+5}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(y-6)/(y+10)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{\\dfrac{y}{2}-3}{\\dfrac{y}{2}+5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\dfrac{y}{2}-3}{\\dfrac{y}{2}+5} = \\dfrac{\\left(\\dfrac{y}{2}-3\\right)\\cdot 2}{\\left(\\dfrac{y}{2}+5\\right)\\cdot 2}$",
                  "reason": "Cancelling a common factor, read from right to left: the top and the bottom are each multiplied by $2$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{\\left(\\dfrac{y}{2}-3\\right)\\cdot 2}{\\left(\\dfrac{y}{2}+5\\right)\\cdot 2} = \\dfrac{y-6}{y+10}$",
                  "reason": "The distributive law multiplies each term of the top and of the bottom by $2$, and each fraction times $2$ leaves its top; the top and the bottom left have no common factor, so the fraction is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{\\dfrac{2}{a}+1}{\\dfrac{3}{a}-1}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(2+a)/(3-a)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{\\dfrac{2}{a}+1}{\\dfrac{3}{a}-1}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\dfrac{2}{a}+1}{\\dfrac{3}{a}-1} = \\dfrac{\\left(\\dfrac{2}{a}+1\\right)\\cdot a}{\\left(\\dfrac{3}{a}-1\\right)\\cdot a}$",
                  "reason": "Cancelling a common factor, read from right to left: the top and the bottom are each multiplied by $a$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{\\left(\\dfrac{2}{a}+1\\right)\\cdot a}{\\left(\\dfrac{3}{a}-1\\right)\\cdot a} = \\dfrac{2+a}{3-a}$",
                  "reason": "The distributive law multiplies each term of the top and of the bottom by $a$, and each fraction times $a$ leaves its top; the top and the bottom left have no common factor, so the fraction is in lowest terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t107-k3",
      "forms": [
        {
          "example": {
            "problem": "Write $\\dfrac{3}{4x}+\\dfrac{1}{6x^2}$ as a single fraction.",
            "lines": [
              {
                "step": "Write $\\dfrac{3}{4x}+\\dfrac{1}{6x^2}$ as a single fraction.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{3}{4x}+\\dfrac{1}{6x^2} = \\dfrac{3\\cdot 3x}{4x\\cdot 3x}+\\dfrac{1\\cdot 2}{6x^2\\cdot 2}$",
                "reason": "Simplest common denominator: $12x^2$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
              },
              {
                "step": "$\\dfrac{3\\cdot 3x}{4x\\cdot 3x}+\\dfrac{1\\cdot 2}{6x^2\\cdot 2} = \\dfrac{9x}{12x^2}+\\dfrac{2}{12x^2}$",
                "reason": "The product law multiplies out each product on the top and on the bottom."
              },
              {
                "step": "$\\dfrac{9x}{12x^2}+\\dfrac{2}{12x^2} = \\dfrac{9x+2}{12x^2}$",
                "reason": "Adding fractions with the same denominator puts the tops over that denominator, which leaves a single fraction whose top and bottom have no common factor, so it is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{5}{2y}-\\dfrac{3}{8y^3}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(20*y^2-3)/(8*y^3)",
              "lines": [
                {
                  "step": "Write $\\dfrac{5}{2y}-\\dfrac{3}{8y^3}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5}{2y}-\\dfrac{3}{8y^3} = \\dfrac{5\\cdot 4y^2}{2y\\cdot 4y^2}-\\dfrac{3}{8y^3}$",
                  "reason": "Simplest common denominator: $8y^3$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{5\\cdot 4y^2}{2y\\cdot 4y^2}-\\dfrac{3}{8y^3} = \\dfrac{20y^2}{8y^3}-\\dfrac{3}{8y^3}$",
                  "reason": "The product law multiplies out each product on the top and on the bottom."
                },
                {
                  "step": "$\\dfrac{20y^2}{8y^3}-\\dfrac{3}{8y^3} = \\dfrac{20y^2-3}{8y^3}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first, which leaves a single fraction whose top and bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{x}{10}+\\dfrac{4}{15x}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*x^2+8)/(30*x)",
              "lines": [
                {
                  "step": "Write $\\dfrac{x}{10}+\\dfrac{4}{15x}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{10}+\\dfrac{4}{15x} = \\dfrac{x\\cdot 3x}{10\\cdot 3x}+\\dfrac{4\\cdot 2}{15x\\cdot 2}$",
                  "reason": "Simplest common denominator: $30x$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{x\\cdot 3x}{10\\cdot 3x}+\\dfrac{4\\cdot 2}{15x\\cdot 2} = \\dfrac{3x^2}{30x}+\\dfrac{8}{30x}$",
                  "reason": "The product law multiplies out each product on the top and on the bottom."
                },
                {
                  "step": "$\\dfrac{3x^2}{30x}+\\dfrac{8}{30x} = \\dfrac{3x^2+8}{30x}$",
                  "reason": "Adding fractions with the same denominator puts the tops over that denominator, which leaves a single fraction whose top and bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{7}{6ab}-\\dfrac{2}{9a^2}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(21*a-4*b)/(18*a^2*b)",
              "lines": [
                {
                  "step": "Write $\\dfrac{7}{6ab}-\\dfrac{2}{9a^2}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7}{6ab}-\\dfrac{2}{9a^2} = \\dfrac{7\\cdot 3a}{6ab\\cdot 3a}-\\dfrac{2\\cdot 2b}{9a^2\\cdot 2b}$",
                  "reason": "Simplest common denominator: $18a^2b$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{7\\cdot 3a}{6ab\\cdot 3a}-\\dfrac{2\\cdot 2b}{9a^2\\cdot 2b} = \\dfrac{21a}{18a^2b}-\\dfrac{4b}{18a^2b}$",
                  "reason": "The product law multiplies out each product on the top and on the bottom."
                },
                {
                  "step": "$\\dfrac{21a}{18a^2b}-\\dfrac{4b}{18a^2b} = \\dfrac{21a-4b}{18a^2b}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first, which leaves a single fraction whose top and bottom have no common factor, so it is in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{4}{x}-\\dfrac{3}{x+5}$ as a single fraction.",
            "lines": [
              {
                "step": "Write $\\dfrac{4}{x}-\\dfrac{3}{x+5}$ as a single fraction.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{4}{x}-\\dfrac{3}{x+5} = \\dfrac{4(x+5)}{x(x+5)}-\\dfrac{3x}{x(x+5)}$",
                "reason": "Simplest common denominator: $x(x+5)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
              },
              {
                "step": "$\\dfrac{4(x+5)}{x(x+5)}-\\dfrac{3x}{x(x+5)} = \\dfrac{4(x+5)-3x}{x(x+5)}$",
                "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first."
              },
              {
                "step": "$\\dfrac{4(x+5)-3x}{x(x+5)} = \\dfrac{4x+20-3x}{x(x+5)}$",
                "reason": "Multiplying out each bracket on the top by the distributive law."
              },
              {
                "step": "$\\dfrac{4x+20-3x}{x(x+5)} = \\dfrac{x+20}{x(x+5)}$",
                "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{2}{x-1}+\\dfrac{5}{x+3}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(7*x+1)/((x-1)*(x+3))",
              "lines": [
                {
                  "step": "Write $\\dfrac{2}{x-1}+\\dfrac{5}{x+3}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2}{x-1}+\\dfrac{5}{x+3} = \\dfrac{2(x+3)}{(x-1)(x+3)}+\\dfrac{5(x-1)}{(x-1)(x+3)}$",
                  "reason": "Simplest common denominator: $(x-1)(x+3)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{2(x+3)}{(x-1)(x+3)}+\\dfrac{5(x-1)}{(x-1)(x+3)} = \\dfrac{2(x+3)+5(x-1)}{(x-1)(x+3)}$",
                  "reason": "Adding fractions with the same denominator puts the tops over that denominator."
                },
                {
                  "step": "$\\dfrac{2(x+3)+5(x-1)}{(x-1)(x+3)} = \\dfrac{2x+6+5x-5}{(x-1)(x+3)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law."
                },
                {
                  "step": "$\\dfrac{2x+6+5x-5}{(x-1)(x+3)} = \\dfrac{7x+1}{(x-1)(x+3)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{3}{y+4}-\\dfrac{1}{y}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(2*y-4)/(y*(y+4))",
              "lines": [
                {
                  "step": "Write $\\dfrac{3}{y+4}-\\dfrac{1}{y}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3}{y+4}-\\dfrac{1}{y} = \\dfrac{3y}{y(y+4)}-\\dfrac{y+4}{y(y+4)}$",
                  "reason": "Simplest common denominator: $y(y+4)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{3y}{y(y+4)}-\\dfrac{y+4}{y(y+4)} = \\dfrac{3y-(y+4)}{y(y+4)}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first."
                },
                {
                  "step": "$\\dfrac{3y-(y+4)}{y(y+4)} = \\dfrac{3y-y-4}{y(y+4)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law, where subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$\\dfrac{3y-y-4}{y(y+4)} = \\dfrac{2y-4}{y(y+4)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{x}{x+2}+\\dfrac{3}{x-5}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(x^2-2*x+6)/((x+2)*(x-5))",
              "lines": [
                {
                  "step": "Write $\\dfrac{x}{x+2}+\\dfrac{3}{x-5}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{x+2}+\\dfrac{3}{x-5} = \\dfrac{x(x-5)}{(x+2)(x-5)}+\\dfrac{3(x+2)}{(x+2)(x-5)}$",
                  "reason": "Simplest common denominator: $(x+2)(x-5)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{x(x-5)}{(x+2)(x-5)}+\\dfrac{3(x+2)}{(x+2)(x-5)} = \\dfrac{x(x-5)+3(x+2)}{(x+2)(x-5)}$",
                  "reason": "Adding fractions with the same denominator puts the tops over that denominator."
                },
                {
                  "step": "$\\dfrac{x(x-5)+3(x+2)}{(x+2)(x-5)} = \\dfrac{x^2-5x+3x+6}{(x+2)(x-5)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law."
                },
                {
                  "step": "$\\dfrac{x^2-5x+3x+6}{(x+2)(x-5)} = \\dfrac{x^2-2x+6}{(x+2)(x-5)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{5}{x^2+3x}+\\dfrac{2}{x}$ as a single fraction.",
            "lines": [
              {
                "step": "Write $\\dfrac{5}{x^2+3x}+\\dfrac{2}{x}$ as a single fraction.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{5}{x^2+3x}+\\dfrac{2}{x} = \\dfrac{5}{x(x+3)}+\\dfrac{2}{x}$",
                "reason": "Factoring by the distributive law, read from right to left, writes $x^2+3x$ as $x(x+3)$, which shows the factors of the denominator."
              },
              {
                "step": "$\\dfrac{5}{x(x+3)}+\\dfrac{2}{x} = \\dfrac{5}{x(x+3)}+\\dfrac{2(x+3)}{x(x+3)}$",
                "reason": "Simplest common denominator: $x(x+3)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
              },
              {
                "step": "$\\dfrac{5}{x(x+3)}+\\dfrac{2(x+3)}{x(x+3)} = \\dfrac{5+2(x+3)}{x(x+3)}$",
                "reason": "Adding fractions with the same denominator puts the tops over that denominator."
              },
              {
                "step": "$\\dfrac{5+2(x+3)}{x(x+3)} = \\dfrac{5+2x+6}{x(x+3)}$",
                "reason": "Multiplying out each bracket on the top by the distributive law."
              },
              {
                "step": "$\\dfrac{5+2x+6}{x(x+3)} = \\dfrac{2x+11}{x(x+3)}$",
                "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{3}{2y-6}-\\dfrac{5}{2}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(18-5*y)/(2*(y-3))",
              "lines": [
                {
                  "step": "Write $\\dfrac{3}{2y-6}-\\dfrac{5}{2}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3}{2y-6}-\\dfrac{5}{2} = \\dfrac{3}{2(y-3)}-\\dfrac{5}{2}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes $2y-6$ as $2(y-3)$, which shows the factors of the denominator."
                },
                {
                  "step": "$\\dfrac{3}{2(y-3)}-\\dfrac{5}{2} = \\dfrac{3}{2(y-3)}-\\dfrac{5(y-3)}{2(y-3)}$",
                  "reason": "Simplest common denominator: $2(y-3)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{3}{2(y-3)}-\\dfrac{5(y-3)}{2(y-3)} = \\dfrac{3-5(y-3)}{2(y-3)}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first."
                },
                {
                  "step": "$\\dfrac{3-5(y-3)}{2(y-3)} = \\dfrac{3-5y+15}{2(y-3)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law, where subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$\\dfrac{3-5y+15}{2(y-3)} = \\dfrac{18-5y}{2(y-3)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{1}{y^2+2y}-\\dfrac{3}{y}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-3*y-5)/(y*(y+2))",
              "lines": [
                {
                  "step": "Write $\\dfrac{1}{y^2+2y}-\\dfrac{3}{y}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{y^2+2y}-\\dfrac{3}{y} = \\dfrac{1}{y(y+2)}-\\dfrac{3}{y}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes $y^2+2y$ as $y(y+2)$, which shows the factors of the denominator."
                },
                {
                  "step": "$\\dfrac{1}{y(y+2)}-\\dfrac{3}{y} = \\dfrac{1}{y(y+2)}-\\dfrac{3(y+2)}{y(y+2)}$",
                  "reason": "Simplest common denominator: $y(y+2)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{1}{y(y+2)}-\\dfrac{3(y+2)}{y(y+2)} = \\dfrac{1-3(y+2)}{y(y+2)}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first."
                },
                {
                  "step": "$\\dfrac{1-3(y+2)}{y(y+2)} = \\dfrac{1-3y-6}{y(y+2)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law, where subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$\\dfrac{1-3y-6}{y(y+2)} = \\dfrac{-3y-5}{y(y+2)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{7}{5x+10}+\\dfrac{4}{5}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(4*x+15)/(5*(x+2))",
              "lines": [
                {
                  "step": "Write $\\dfrac{7}{5x+10}+\\dfrac{4}{5}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7}{5x+10}+\\dfrac{4}{5} = \\dfrac{7}{5(x+2)}+\\dfrac{4}{5}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes $5x+10$ as $5(x+2)$, which shows the factors of the denominator."
                },
                {
                  "step": "$\\dfrac{7}{5(x+2)}+\\dfrac{4}{5} = \\dfrac{7}{5(x+2)}+\\dfrac{4(x+2)}{5(x+2)}$",
                  "reason": "Simplest common denominator: $5(x+2)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{7}{5(x+2)}+\\dfrac{4(x+2)}{5(x+2)} = \\dfrac{7+4(x+2)}{5(x+2)}$",
                  "reason": "Adding fractions with the same denominator puts the tops over that denominator."
                },
                {
                  "step": "$\\dfrac{7+4(x+2)}{5(x+2)} = \\dfrac{7+4x+8}{5(x+2)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law."
                },
                {
                  "step": "$\\dfrac{7+4x+8}{5(x+2)} = \\dfrac{4x+15}{5(x+2)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{1}{x}+\\dfrac{2}{x+2}-\\dfrac{3}{x^2+2x}$ as a single fraction.",
            "lines": [
              {
                "step": "Write $\\dfrac{1}{x}+\\dfrac{2}{x+2}-\\dfrac{3}{x^2+2x}$ as a single fraction.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{1}{x}+\\dfrac{2}{x+2}-\\dfrac{3}{x^2+2x} = \\dfrac{1}{x}+\\dfrac{2}{x+2}-\\dfrac{3}{x(x+2)}$",
                "reason": "Factoring by the distributive law, read from right to left, writes $x^2+2x$ as $x(x+2)$, which shows the factors of the denominator."
              },
              {
                "step": "$\\dfrac{1}{x}+\\dfrac{2}{x+2}-\\dfrac{3}{x(x+2)} = \\dfrac{x+2}{x(x+2)}+\\dfrac{2x}{x(x+2)}-\\dfrac{3}{x(x+2)}$",
                "reason": "Simplest common denominator: $x(x+2)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
              },
              {
                "step": "$\\dfrac{x+2}{x(x+2)}+\\dfrac{2x}{x(x+2)}-\\dfrac{3}{x(x+2)} = \\dfrac{x+2+2x-3}{x(x+2)}$",
                "reason": "Adding fractions with the same denominator and subtracting fractions with the same denominator put the tops over that denominator, each top with its sign."
              },
              {
                "step": "$\\dfrac{x+2+2x-3}{x(x+2)} = \\dfrac{3x-1}{x(x+2)}$",
                "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{1}{y}+\\dfrac{3}{y-2}-\\dfrac{4}{y^2-2y}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(4*y-6)/(y*(y-2))",
              "lines": [
                {
                  "step": "Write $\\dfrac{1}{y}+\\dfrac{3}{y-2}-\\dfrac{4}{y^2-2y}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{y}+\\dfrac{3}{y-2}-\\dfrac{4}{y^2-2y} = \\dfrac{1}{y}+\\dfrac{3}{y-2}-\\dfrac{4}{y(y-2)}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes $y^2-2y$ as $y(y-2)$, which shows the factors of the denominator."
                },
                {
                  "step": "$\\dfrac{1}{y}+\\dfrac{3}{y-2}-\\dfrac{4}{y(y-2)} = \\dfrac{y-2}{y(y-2)}+\\dfrac{3y}{y(y-2)}-\\dfrac{4}{y(y-2)}$",
                  "reason": "Simplest common denominator: $y(y-2)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{y-2}{y(y-2)}+\\dfrac{3y}{y(y-2)}-\\dfrac{4}{y(y-2)} = \\dfrac{y-2+3y-4}{y(y-2)}$",
                  "reason": "Adding fractions with the same denominator and subtracting fractions with the same denominator put the tops over that denominator, each top with its sign."
                },
                {
                  "step": "$\\dfrac{y-2+3y-4}{y(y-2)} = \\dfrac{4y-6}{y(y-2)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{1}{a}+\\dfrac{2}{a+5}+\\dfrac{1}{a^2+5a}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*a+6)/(a*(a+5))",
              "lines": [
                {
                  "step": "Write $\\dfrac{1}{a}+\\dfrac{2}{a+5}+\\dfrac{1}{a^2+5a}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{a}+\\dfrac{2}{a+5}+\\dfrac{1}{a^2+5a} = \\dfrac{1}{a}+\\dfrac{2}{a+5}+\\dfrac{1}{a(a+5)}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes $a^2+5a$ as $a(a+5)$, which shows the factors of the denominator."
                },
                {
                  "step": "$\\dfrac{1}{a}+\\dfrac{2}{a+5}+\\dfrac{1}{a(a+5)} = \\dfrac{a+5}{a(a+5)}+\\dfrac{2a}{a(a+5)}+\\dfrac{1}{a(a+5)}$",
                  "reason": "Simplest common denominator: $a(a+5)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{a+5}{a(a+5)}+\\dfrac{2a}{a(a+5)}+\\dfrac{1}{a(a+5)} = \\dfrac{a+5+2a+1}{a(a+5)}$",
                  "reason": "Adding fractions with the same denominator puts the tops over that denominator."
                },
                {
                  "step": "$\\dfrac{a+5+2a+1}{a(a+5)} = \\dfrac{3a+6}{a(a+5)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{1}{x}-\\dfrac{4}{x+1}+\\dfrac{2}{x^2+x}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3-3*x)/(x*(x+1))",
              "lines": [
                {
                  "step": "Write $\\dfrac{1}{x}-\\dfrac{4}{x+1}+\\dfrac{2}{x^2+x}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{x}-\\dfrac{4}{x+1}+\\dfrac{2}{x^2+x} = \\dfrac{1}{x}-\\dfrac{4}{x+1}+\\dfrac{2}{x(x+1)}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes $x^2+x$ as $x(x+1)$, which shows the factors of the denominator."
                },
                {
                  "step": "$\\dfrac{1}{x}-\\dfrac{4}{x+1}+\\dfrac{2}{x(x+1)} = \\dfrac{x+1}{x(x+1)}-\\dfrac{4x}{x(x+1)}+\\dfrac{2}{x(x+1)}$",
                  "reason": "Simplest common denominator: $x(x+1)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{x+1}{x(x+1)}-\\dfrac{4x}{x(x+1)}+\\dfrac{2}{x(x+1)} = \\dfrac{x+1-4x+2}{x(x+1)}$",
                  "reason": "Adding fractions with the same denominator and subtracting fractions with the same denominator put the tops over that denominator, each top with its sign."
                },
                {
                  "step": "$\\dfrac{x+1-4x+2}{x(x+1)} = \\dfrac{3-3x}{x(x+1)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $1+\\dfrac{2}{x}-\\dfrac{4}{x+3}$ as a single fraction.",
            "lines": [
              {
                "step": "Write $1+\\dfrac{2}{x}-\\dfrac{4}{x+3}$ as a single fraction.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$1+\\dfrac{2}{x}-\\dfrac{4}{x+3} = \\dfrac{1}{1}+\\dfrac{2}{x}-\\dfrac{4}{x+3}$",
                "reason": "A whole number as a fraction: the number is written over the denominator $1$."
              },
              {
                "step": "$\\dfrac{1}{1}+\\dfrac{2}{x}-\\dfrac{4}{x+3} = \\dfrac{x(x+3)}{x(x+3)}+\\dfrac{2(x+3)}{x(x+3)}-\\dfrac{4x}{x(x+3)}$",
                "reason": "Simplest common denominator: $x(x+3)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
              },
              {
                "step": "$\\dfrac{x(x+3)}{x(x+3)}+\\dfrac{2(x+3)}{x(x+3)}-\\dfrac{4x}{x(x+3)} = \\dfrac{x(x+3)+2(x+3)-4x}{x(x+3)}$",
                "reason": "Adding fractions with the same denominator and subtracting fractions with the same denominator put the tops over that denominator, each top with its sign."
              },
              {
                "step": "$\\dfrac{x(x+3)+2(x+3)-4x}{x(x+3)} = \\dfrac{x^2+3x+2x+6-4x}{x(x+3)}$",
                "reason": "Multiplying out each bracket on the top by the distributive law."
              },
              {
                "step": "$\\dfrac{x^2+3x+2x+6-4x}{x(x+3)} = \\dfrac{x^2+x+6}{x(x+3)}$",
                "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $5+\\dfrac{1}{y}-\\dfrac{3}{y+6}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(5*y^2+28*y+6)/(y*(y+6))",
              "lines": [
                {
                  "step": "Write $5+\\dfrac{1}{y}-\\dfrac{3}{y+6}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5+\\dfrac{1}{y}-\\dfrac{3}{y+6} = \\dfrac{5}{1}+\\dfrac{1}{y}-\\dfrac{3}{y+6}$",
                  "reason": "A whole number as a fraction: the number is written over the denominator $1$."
                },
                {
                  "step": "$\\dfrac{5}{1}+\\dfrac{1}{y}-\\dfrac{3}{y+6} = \\dfrac{5y(y+6)}{y(y+6)}+\\dfrac{1(y+6)}{y(y+6)}-\\dfrac{3y}{y(y+6)}$",
                  "reason": "Simplest common denominator: $y(y+6)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{5y(y+6)}{y(y+6)}+\\dfrac{1(y+6)}{y(y+6)}-\\dfrac{3y}{y(y+6)} = \\dfrac{5y(y+6)+1(y+6)-3y}{y(y+6)}$",
                  "reason": "Adding fractions with the same denominator and subtracting fractions with the same denominator put the tops over that denominator, each top with its sign."
                },
                {
                  "step": "$\\dfrac{5y(y+6)+1(y+6)-3y}{y(y+6)} = \\dfrac{5y^2+30y+y+6-3y}{y(y+6)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law."
                },
                {
                  "step": "$\\dfrac{5y^2+30y+y+6-3y}{y(y+6)} = \\dfrac{5y^2+28y+6}{y(y+6)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $1-\\dfrac{3}{a}+\\dfrac{2}{a+2}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(a^2+a-6)/(a*(a+2))",
              "lines": [
                {
                  "step": "Write $1-\\dfrac{3}{a}+\\dfrac{2}{a+2}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1-\\dfrac{3}{a}+\\dfrac{2}{a+2} = \\dfrac{1}{1}-\\dfrac{3}{a}+\\dfrac{2}{a+2}$",
                  "reason": "A whole number as a fraction: the number is written over the denominator $1$."
                },
                {
                  "step": "$\\dfrac{1}{1}-\\dfrac{3}{a}+\\dfrac{2}{a+2} = \\dfrac{a(a+2)}{a(a+2)}-\\dfrac{3(a+2)}{a(a+2)}+\\dfrac{2a}{a(a+2)}$",
                  "reason": "Simplest common denominator: $a(a+2)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{a(a+2)}{a(a+2)}-\\dfrac{3(a+2)}{a(a+2)}+\\dfrac{2a}{a(a+2)} = \\dfrac{a(a+2)-3(a+2)+2a}{a(a+2)}$",
                  "reason": "Adding fractions with the same denominator and subtracting fractions with the same denominator put the tops over that denominator, each top with its sign."
                },
                {
                  "step": "$\\dfrac{a(a+2)-3(a+2)+2a}{a(a+2)} = \\dfrac{a^2+2a-3a-6+2a}{a(a+2)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law, where subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$\\dfrac{a^2+2a-3a-6+2a}{a(a+2)} = \\dfrac{a^2+a-6}{a(a+2)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $3+\\dfrac{2}{x}-\\dfrac{5}{x+4}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*x^2+9*x+8)/(x*(x+4))",
              "lines": [
                {
                  "step": "Write $3+\\dfrac{2}{x}-\\dfrac{5}{x+4}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3+\\dfrac{2}{x}-\\dfrac{5}{x+4} = \\dfrac{3}{1}+\\dfrac{2}{x}-\\dfrac{5}{x+4}$",
                  "reason": "A whole number as a fraction: the number is written over the denominator $1$."
                },
                {
                  "step": "$\\dfrac{3}{1}+\\dfrac{2}{x}-\\dfrac{5}{x+4} = \\dfrac{3x(x+4)}{x(x+4)}+\\dfrac{2(x+4)}{x(x+4)}-\\dfrac{5x}{x(x+4)}$",
                  "reason": "Simplest common denominator: $x(x+4)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{3x(x+4)}{x(x+4)}+\\dfrac{2(x+4)}{x(x+4)}-\\dfrac{5x}{x(x+4)} = \\dfrac{3x(x+4)+2(x+4)-5x}{x(x+4)}$",
                  "reason": "Adding fractions with the same denominator and subtracting fractions with the same denominator put the tops over that denominator, each top with its sign."
                },
                {
                  "step": "$\\dfrac{3x(x+4)+2(x+4)-5x}{x(x+4)} = \\dfrac{3x^2+12x+2x+8-5x}{x(x+4)}$",
                  "reason": "Multiplying out each bracket on the top by the distributive law."
                },
                {
                  "step": "$\\dfrac{3x^2+12x+2x+8-5x}{x(x+4)} = \\dfrac{3x^2+9x+8}{x(x+4)}$",
                  "reason": "Collecting like terms on the top leaves a single fraction, and its top and its bottom have no common factor, so it is in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{4x+8}{x^2+2x}+\\dfrac{3}{2x}$ as a single fraction.",
            "lines": [
              {
                "step": "Write $\\dfrac{4x+8}{x^2+2x}+\\dfrac{3}{2x}$ as a single fraction.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{4x+8}{x^2+2x}+\\dfrac{3}{2x} = \\dfrac{4(x+2)}{x(x+2)}+\\dfrac{3}{2x}$",
                "reason": "Factoring by the distributive law, read from right to left, writes the top and the bottom of the first fraction as products."
              },
              {
                "step": "$\\dfrac{4(x+2)}{x(x+2)}+\\dfrac{3}{2x} = \\dfrac{4}{x}+\\dfrac{3}{2x}$",
                "reason": "Cancelling a common factor: $x+2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              },
              {
                "step": "$\\dfrac{4}{x}+\\dfrac{3}{2x} = \\dfrac{4\\cdot 2}{x\\cdot 2}+\\dfrac{3}{2x}$",
                "reason": "Simplest common denominator: $2x$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
              },
              {
                "step": "$\\dfrac{4\\cdot 2}{x\\cdot 2}+\\dfrac{3}{2x} = \\dfrac{8}{2x}+\\dfrac{3}{2x}$",
                "reason": "The product law multiplies out each product on the top and on the bottom."
              },
              {
                "step": "$\\dfrac{8}{2x}+\\dfrac{3}{2x} = \\dfrac{11}{2x}$",
                "reason": "Adding fractions with the same denominator puts the tops over that denominator, which leaves a single fraction whose top and bottom have no common factor, so it is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{3y-15}{y^2-5y}-\\dfrac{2}{5y}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "13/(5*y)",
              "lines": [
                {
                  "step": "Write $\\dfrac{3y-15}{y^2-5y}-\\dfrac{2}{5y}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3y-15}{y^2-5y}-\\dfrac{2}{5y} = \\dfrac{3(y-5)}{y(y-5)}-\\dfrac{2}{5y}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes the top and the bottom of the first fraction as products."
                },
                {
                  "step": "$\\dfrac{3(y-5)}{y(y-5)}-\\dfrac{2}{5y} = \\dfrac{3}{y}-\\dfrac{2}{5y}$",
                  "reason": "Cancelling a common factor: $y-5$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{3}{y}-\\dfrac{2}{5y} = \\dfrac{3\\cdot 5}{y\\cdot 5}-\\dfrac{2}{5y}$",
                  "reason": "Simplest common denominator: $5y$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{3\\cdot 5}{y\\cdot 5}-\\dfrac{2}{5y} = \\dfrac{15}{5y}-\\dfrac{2}{5y}$",
                  "reason": "The product law multiplies out each product on the top and on the bottom."
                },
                {
                  "step": "$\\dfrac{15}{5y}-\\dfrac{2}{5y} = \\dfrac{13}{5y}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first, which leaves a single fraction whose top and bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{5a+5}{a^2+a}+\\dfrac{1}{3a}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "16/(3*a)",
              "lines": [
                {
                  "step": "Write $\\dfrac{5a+5}{a^2+a}+\\dfrac{1}{3a}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5a+5}{a^2+a}+\\dfrac{1}{3a} = \\dfrac{5(a+1)}{a(a+1)}+\\dfrac{1}{3a}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes the top and the bottom of the first fraction as products."
                },
                {
                  "step": "$\\dfrac{5(a+1)}{a(a+1)}+\\dfrac{1}{3a} = \\dfrac{5}{a}+\\dfrac{1}{3a}$",
                  "reason": "Cancelling a common factor: $a+1$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{5}{a}+\\dfrac{1}{3a} = \\dfrac{5\\cdot 3}{a\\cdot 3}+\\dfrac{1}{3a}$",
                  "reason": "Simplest common denominator: $3a$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{5\\cdot 3}{a\\cdot 3}+\\dfrac{1}{3a} = \\dfrac{15}{3a}+\\dfrac{1}{3a}$",
                  "reason": "The product law multiplies out each product on the top and on the bottom."
                },
                {
                  "step": "$\\dfrac{15}{3a}+\\dfrac{1}{3a} = \\dfrac{16}{3a}$",
                  "reason": "Adding fractions with the same denominator puts the tops over that denominator, which leaves a single fraction whose top and bottom have no common factor, so it is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{2x-12}{x^2-6x}-\\dfrac{3}{4x}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "5/(4*x)",
              "lines": [
                {
                  "step": "Write $\\dfrac{2x-12}{x^2-6x}-\\dfrac{3}{4x}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2x-12}{x^2-6x}-\\dfrac{3}{4x} = \\dfrac{2(x-6)}{x(x-6)}-\\dfrac{3}{4x}$",
                  "reason": "Factoring by the distributive law, read from right to left, writes the top and the bottom of the first fraction as products."
                },
                {
                  "step": "$\\dfrac{2(x-6)}{x(x-6)}-\\dfrac{3}{4x} = \\dfrac{2}{x}-\\dfrac{3}{4x}$",
                  "reason": "Cancelling a common factor: $x-6$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                },
                {
                  "step": "$\\dfrac{2}{x}-\\dfrac{3}{4x} = \\dfrac{2\\cdot 4}{x\\cdot 4}-\\dfrac{3}{4x}$",
                  "reason": "Simplest common denominator: $4x$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{2\\cdot 4}{x\\cdot 4}-\\dfrac{3}{4x} = \\dfrac{8}{4x}-\\dfrac{3}{4x}$",
                  "reason": "The product law multiplies out each product on the top and on the bottom."
                },
                {
                  "step": "$\\dfrac{8}{4x}-\\dfrac{3}{4x} = \\dfrac{5}{4x}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first, which leaves a single fraction whose top and bottom have no common factor, so it is in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{2}{x+2}+\\dfrac{4}{x(x+2)}$ as a single fraction.",
            "lines": [
              {
                "step": "Write $\\dfrac{2}{x+2}+\\dfrac{4}{x(x+2)}$ as a single fraction.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{2}{x+2}+\\dfrac{4}{x(x+2)} = \\dfrac{2x}{x(x+2)}+\\dfrac{4}{x(x+2)}$",
                "reason": "Simplest common denominator: $x(x+2)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
              },
              {
                "step": "$\\dfrac{2x}{x(x+2)}+\\dfrac{4}{x(x+2)} = \\dfrac{2x+4}{x(x+2)}$",
                "reason": "Adding fractions with the same denominator puts the tops over that denominator."
              },
              {
                "step": "$\\dfrac{2x+4}{x(x+2)} = \\dfrac{2(x+2)}{x(x+2)}$",
                "reason": "Factoring by the distributive law, read from right to left, takes the common factor $2$ out of the top, which shows the bracket $x+2$ as a factor of the top and of the bottom."
              },
              {
                "step": "$\\dfrac{2(x+2)}{x(x+2)} = \\dfrac{2}{x}$",
                "reason": "Cancelling a common factor: $x+2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{3}{y-2}-\\dfrac{6}{y(y-2)}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "3/y",
              "lines": [
                {
                  "step": "Write $\\dfrac{3}{y-2}-\\dfrac{6}{y(y-2)}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3}{y-2}-\\dfrac{6}{y(y-2)} = \\dfrac{3y}{y(y-2)}-\\dfrac{6}{y(y-2)}$",
                  "reason": "Simplest common denominator: $y(y-2)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{3y}{y(y-2)}-\\dfrac{6}{y(y-2)} = \\dfrac{3y-6}{y(y-2)}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first."
                },
                {
                  "step": "$\\dfrac{3y-6}{y(y-2)} = \\dfrac{3(y-2)}{y(y-2)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $3$ out of the top, which shows the bracket $y-2$ as a factor of the top and of the bottom."
                },
                {
                  "step": "$\\dfrac{3(y-2)}{y(y-2)} = \\dfrac{3}{y}$",
                  "reason": "Cancelling a common factor: $y-2$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{4}{a+3}+\\dfrac{12}{a(a+3)}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "4/a",
              "lines": [
                {
                  "step": "Write $\\dfrac{4}{a+3}+\\dfrac{12}{a(a+3)}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4}{a+3}+\\dfrac{12}{a(a+3)} = \\dfrac{4a}{a(a+3)}+\\dfrac{12}{a(a+3)}$",
                  "reason": "Simplest common denominator: $a(a+3)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{4a}{a(a+3)}+\\dfrac{12}{a(a+3)} = \\dfrac{4a+12}{a(a+3)}$",
                  "reason": "Adding fractions with the same denominator puts the tops over that denominator."
                },
                {
                  "step": "$\\dfrac{4a+12}{a(a+3)} = \\dfrac{4(a+3)}{a(a+3)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $4$ out of the top, which shows the bracket $a+3$ as a factor of the top and of the bottom."
                },
                {
                  "step": "$\\dfrac{4(a+3)}{a(a+3)} = \\dfrac{4}{a}$",
                  "reason": "Cancelling a common factor: $a+3$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{7}{x-1}-\\dfrac{7}{x(x-1)}$ as a single fraction.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "7/x",
              "lines": [
                {
                  "step": "Write $\\dfrac{7}{x-1}-\\dfrac{7}{x(x-1)}$ as a single fraction.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7}{x-1}-\\dfrac{7}{x(x-1)} = \\dfrac{7x}{x(x-1)}-\\dfrac{7}{x(x-1)}$",
                  "reason": "Simplest common denominator: $x(x-1)$ has each denominator as a factor, and the top and the bottom of each fraction are multiplied by the factor its denominator lacks, which is cancelling a common factor read from right to left."
                },
                {
                  "step": "$\\dfrac{7x}{x(x-1)}-\\dfrac{7}{x(x-1)} = \\dfrac{7x-7}{x(x-1)}$",
                  "reason": "Subtracting fractions with the same denominator puts the tops over that denominator, the second top taken from the first."
                },
                {
                  "step": "$\\dfrac{7x-7}{x(x-1)} = \\dfrac{7(x-1)}{x(x-1)}$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor $7$ out of the top, which shows the bracket $x-1$ as a factor of the top and of the bottom."
                },
                {
                  "step": "$\\dfrac{7(x-1)}{x(x-1)} = \\dfrac{7}{x}$",
                  "reason": "Cancelling a common factor: $x-1$ is a factor of the whole top and of the whole bottom, and it is not $0$, so it is removed from both."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t107-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\dfrac{2x+8}{x+3}\\cdot\\dfrac{x+3}{2x+10}$, and write that line right.",
            "given": [
              "$\\dfrac{2x+8}{x+3}\\cdot\\dfrac{x+3}{2x+10} = \\dfrac{(2x+8)(x+3)}{(x+3)(2x+10)}$",
              "$\\dfrac{(2x+8)(x+3)}{(x+3)(2x+10)} = \\dfrac{2x+8}{2x+10}$",
              "$\\dfrac{2x+8}{2x+10} = \\dfrac{8}{10}$",
              "$\\dfrac{8}{10} = \\dfrac{4}{5}$"
            ],
            "lines": [
              {
                "step": "The working to check is for $\\dfrac{2x+8}{x+3}\\cdot\\dfrac{x+3}{2x+10}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 cancels the term $2x$ from a sum on the top and from a sum on the bottom.",
                "reason": "A letter is read as an object: cancelling a common factor needs a factor of the whole top and of the whole bottom, and a term of a sum is not a factor of it."
              },
              {
                "step": "Each sum is factored first, and only then does a factor cancel.",
                "reason": "Factoring by the distributive law, read from right to left, turns each sum into a product, and only then can a common factor cancel."
              },
              {
                "step": "Line 3 written right is $\\dfrac{2x+8}{2x+10} = \\dfrac{x+4}{x+5}$.",
                "reason": "Cancelling a common factor removes the factor the factoring shows, from the whole top and the whole bottom."
              },
              {
                "step": "Writing the brackets first, $\\dfrac{2(x+4)}{2(x+5)}$, is right too.",
                "reason": "Cancelling a common factor gives the line written right from it, so the two are the same working."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\dfrac{3x+12}{3x+6}\\cdot\\dfrac{5}{x+1}$, and write that line right.",
              "given": [
                "$\\dfrac{3x+12}{3x+6}\\cdot\\dfrac{5}{x+1} = \\dfrac{12}{6}\\cdot\\dfrac{5}{x+1}$",
                "$\\dfrac{12}{6}\\cdot\\dfrac{5}{x+1} = 2\\cdot\\dfrac{5}{x+1}$",
                "$2\\cdot\\dfrac{5}{x+1} = \\dfrac{10}{x+1}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (3*x+12)/(3*x+6)*5/(x+1) = (x+4)/(x+2)*5/(x+1)",
              "lines": [
                {
                  "step": "The working to check is for $\\dfrac{3x+12}{3x+6}\\cdot\\dfrac{5}{x+1}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 cancels the term $3x$ from a sum on the top and from a sum on the bottom.",
                  "reason": "A letter is read as an object: cancelling a common factor needs a factor of the whole top and of the whole bottom, and a term of a sum is not a factor of it."
                },
                {
                  "step": "Each sum is factored first, and only then does a factor cancel.",
                  "reason": "Factoring by the distributive law, read from right to left, turns each sum into a product, and only then can a common factor cancel."
                },
                {
                  "step": "Line 1 written right is $\\dfrac{3x+12}{3x+6}\\cdot\\dfrac{5}{x+1} = \\dfrac{x+4}{x+2}\\cdot\\dfrac{5}{x+1}$.",
                  "reason": "Cancelling a common factor removes the factor the factoring shows, from the whole top and the whole bottom."
                },
                {
                  "step": "Writing the brackets first, $\\dfrac{3(x+4)}{3(x+2)}\\cdot\\dfrac{5}{x+1}$, is right too.",
                  "reason": "Cancelling a common factor gives the line written right from it, so the two are the same working."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\dfrac{x^2+5x}{x^2+2x}\\cdot\\dfrac{x+2}{3}$, and write that line right.",
              "given": [
                "$\\dfrac{x^2+5x}{x^2+2x}\\cdot\\dfrac{x+2}{3} = \\dfrac{(x^2+5x)(x+2)}{(x^2+2x)\\cdot 3}$",
                "$\\dfrac{(x^2+5x)(x+2)}{(x^2+2x)\\cdot 3} = \\dfrac{5x(x+2)}{2x\\cdot 3}$",
                "$\\dfrac{5x(x+2)}{2x\\cdot 3} = \\dfrac{5(x+2)}{6}$",
                "$\\dfrac{5(x+2)}{6} = \\dfrac{5x+10}{6}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: ((x^2+5*x)*(x+2))/((x^2+2*x)*3) = (x+5)/3",
              "lines": [
                {
                  "step": "The working to check is for $\\dfrac{x^2+5x}{x^2+2x}\\cdot\\dfrac{x+2}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 cancels the term $x^2$ from a sum on the top and from a sum on the bottom.",
                  "reason": "A letter is read as an object: cancelling a common factor needs a factor of the whole top and of the whole bottom, and a term of a sum is not a factor of it."
                },
                {
                  "step": "Each sum is factored first, and only then does a factor cancel.",
                  "reason": "Factoring by the distributive law, read from right to left, turns each sum into a product, and only then can a common factor cancel."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{(x^2+5x)(x+2)}{(x^2+2x)\\cdot 3} = \\dfrac{x+5}{3}$.",
                  "reason": "Cancelling a common factor removes the factor the factoring shows, from the whole top and the whole bottom."
                },
                {
                  "step": "Writing the brackets first, $\\dfrac{x(x+5)(x+2)}{x(x+2)\\cdot 3}$, is right too.",
                  "reason": "Cancelling a common factor gives the line written right from it, so the two are the same working."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\dfrac{x+5}{6}\\div\\dfrac{x+7}{3}$, and write that line right.",
              "given": [
                "$\\dfrac{x+5}{6}\\div\\dfrac{x+7}{3} = \\dfrac{x+5}{6}\\cdot\\dfrac{3}{x+7}$",
                "$\\dfrac{x+5}{6}\\cdot\\dfrac{3}{x+7} = \\dfrac{3(x+5)}{6(x+7)}$",
                "$\\dfrac{3(x+5)}{6(x+7)} = \\dfrac{3\\cdot 5}{6\\cdot 7}$",
                "$\\dfrac{3\\cdot 5}{6\\cdot 7} = \\dfrac{5}{14}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (3*(x+5))/(6*(x+7)) = (x+5)/(2*(x+7))",
              "lines": [
                {
                  "step": "The working to check is for $\\dfrac{x+5}{6}\\div\\dfrac{x+7}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 cancels the term $x$ from a sum on the top and from a sum on the bottom.",
                  "reason": "A letter is read as an object: cancelling a common factor needs a factor of the whole top and of the whole bottom, and a term of a sum is not a factor of it."
                },
                {
                  "step": "Each sum is factored first, and only then does a factor cancel.",
                  "reason": "Factoring by the distributive law, read from right to left, turns each sum into a product, and only then can a common factor cancel."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{3(x+5)}{6(x+7)} = \\dfrac{x+5}{2(x+7)}$.",
                  "reason": "Cancelling a common factor removes the factor the factoring shows, from the whole top and the whole bottom."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\dfrac{2}{x}-\\dfrac{x+3}{4x}$, and write that line right.",
            "given": [
              "$\\dfrac{2}{x}-\\dfrac{x+3}{4x} = \\dfrac{8}{4x}-\\dfrac{x+3}{4x}$",
              "$\\dfrac{8}{4x}-\\dfrac{x+3}{4x} = \\dfrac{8-(x+3)}{4x}$",
              "$\\dfrac{8-(x+3)}{4x} = \\dfrac{8-x+3}{4x}$",
              "$\\dfrac{8-x+3}{4x} = \\dfrac{11-x}{4x}$"
            ],
            "lines": [
              {
                "step": "The working to check is for $\\dfrac{2}{x}-\\dfrac{x+3}{4x}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 takes away the bracket $(x+3)$ and changes the sign of its first term alone.",
                "reason": "A sign is lost: subtracting a bracket changes every sign in it, and this line changes the sign of the first term alone."
              },
              {
                "step": "Line 3 written right is $\\dfrac{8-(x+3)}{4x} = \\dfrac{8-x-3}{4x}$.",
                "reason": "Subtracting a bracket changes every sign in it, so both terms of the bracket change sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\dfrac{4}{x-1}-\\dfrac{x+2}{x(x-1)}$, and write that line right.",
              "given": [
                "$\\dfrac{4}{x-1}-\\dfrac{x+2}{x(x-1)} = \\dfrac{4x}{x(x-1)}-\\dfrac{x+2}{x(x-1)}$",
                "$\\dfrac{4x}{x(x-1)}-\\dfrac{x+2}{x(x-1)} = \\dfrac{4x-(x+2)}{x(x-1)}$",
                "$\\dfrac{4x-(x+2)}{x(x-1)} = \\dfrac{4x-x+2}{x(x-1)}$",
                "$\\dfrac{4x-x+2}{x(x-1)} = \\dfrac{3x+2}{x(x-1)}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (4*x-(x+2))/(x*(x-1)) = (4*x-x-2)/(x*(x-1))",
              "lines": [
                {
                  "step": "The working to check is for $\\dfrac{4}{x-1}-\\dfrac{x+2}{x(x-1)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes away the bracket $(x+2)$ and changes the sign of its first term alone.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, and this line changes the sign of the first term alone."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{4x-(x+2)}{x(x-1)} = \\dfrac{4x-x-2}{x(x-1)}$.",
                  "reason": "Subtracting a bracket changes every sign in it, so both terms of the bracket change sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\dfrac{3x+1}{x+2}-\\dfrac{x-4}{x+2}$, and write that line right.",
              "given": [
                "$\\dfrac{3x+1}{x+2}-\\dfrac{x-4}{x+2} = \\dfrac{3x+1-(x-4)}{x+2}$",
                "$\\dfrac{3x+1-(x-4)}{x+2} = \\dfrac{3x+1-x-4}{x+2}$",
                "$\\dfrac{3x+1-x-4}{x+2} = \\dfrac{2x-3}{x+2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (3*x+1-(x-4))/(x+2) = (3*x+1-x+4)/(x+2)",
              "lines": [
                {
                  "step": "The working to check is for $\\dfrac{3x+1}{x+2}-\\dfrac{x-4}{x+2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes away the bracket $(x-4)$ and changes the sign of its first term alone.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, and this line changes the sign of the first term alone."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{3x+1-(x-4)}{x+2} = \\dfrac{3x+1-x+4}{x+2}$.",
                  "reason": "Subtracting a bracket changes every sign in it, so both terms of the bracket change sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\dfrac{3}{2y}-\\dfrac{y-5}{4y^2}$, and write that line right.",
              "given": [
                "$\\dfrac{3}{2y}-\\dfrac{y-5}{4y^2} = \\dfrac{3\\cdot 2y}{2y\\cdot 2y}-\\dfrac{y-5}{4y^2}$",
                "$\\dfrac{3\\cdot 2y}{2y\\cdot 2y}-\\dfrac{y-5}{4y^2} = \\dfrac{6y}{4y^2}-\\dfrac{y-5}{4y^2}$",
                "$\\dfrac{6y}{4y^2}-\\dfrac{y-5}{4y^2} = \\dfrac{6y-(y-5)}{4y^2}$",
                "$\\dfrac{6y-(y-5)}{4y^2} = \\dfrac{6y-y-5}{4y^2}$",
                "$\\dfrac{6y-y-5}{4y^2} = \\dfrac{5y-5}{4y^2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (6*y-(y-5))/(4*y^2) = (6*y-y+5)/(4*y^2)",
              "lines": [
                {
                  "step": "The working to check is for $\\dfrac{3}{2y}-\\dfrac{y-5}{4y^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes away the bracket $(y-5)$ and changes the sign of its first term alone.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, and this line changes the sign of the first term alone."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{6y-(y-5)}{4y^2} = \\dfrac{6y-y+5}{4y^2}$.",
                  "reason": "Subtracting a bracket changes every sign in it, so both terms of the bracket change sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t107-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the sum of the reciprocals of a number $x$ and of 3 times the number is $\\dfrac{2}{3}$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: the sum of the reciprocals of a number $x$ and of 3 times the number is $\\dfrac{2}{3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The reciprocal of the number is $\\dfrac{1}{x}$, and 3 times the number is $3x$, with reciprocal $\\dfrac{1}{3x}$.",
                "reason": "Writing a sentence as an equation: the words \"the reciprocal of\" write $1$ divided by the number that follows them."
              },
              {
                "step": "The sum of the reciprocals is $\\dfrac{1}{x}+\\dfrac{1}{3x}$.",
                "reason": "Writing a sentence as an equation: the words \"the sum of\" join the two reciprocals with a plus sign."
              },
              {
                "step": "$\\dfrac{1}{x}+\\dfrac{1}{3x}=\\dfrac{2}{3}$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the reciprocal of a number $x$, taken away from the reciprocal of 4 less than the number, is $\\dfrac{1}{5}$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "1/(x-4)-1/x = 1/5",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the reciprocal of a number $x$, taken away from the reciprocal of 4 less than the number, is $\\dfrac{1}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number 4 less than $x$ is $x-4$, with reciprocal $\\dfrac{1}{x-4}$, and the reciprocal of the number is $\\dfrac{1}{x}$.",
                  "reason": "Writing a sentence as an equation: the words \"the reciprocal of\" write $1$ divided by the number that follows them."
                },
                {
                  "step": "Taking $\\dfrac{1}{x}$ away from $\\dfrac{1}{x-4}$ gives $\\dfrac{1}{x-4}-\\dfrac{1}{x}$.",
                  "reason": "Writing a sentence as an equation: the words \"taken away from\" put the number that follows them first, with the first number subtracted from it."
                },
                {
                  "step": "$\\dfrac{1}{x-4}-\\dfrac{1}{x}=\\dfrac{1}{5}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: a number $x$ divided by 2 more than the number is $\\dfrac{3}{4}$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x/(x+2) = 3/4",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: a number $x$ divided by 2 more than the number is $\\dfrac{3}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number 2 more than $x$ is $x+2$.",
                  "reason": "Writing a sentence as an equation: the words \"more than\" mean that 2 is added to the number."
                },
                {
                  "step": "The number divided by $x+2$ is $\\dfrac{x}{x+2}$.",
                  "reason": "Writing a sentence as an equation: the words \"divided by\" put the number before them on the top and the number after them on the bottom."
                },
                {
                  "step": "$\\dfrac{x}{x+2}=\\dfrac{3}{4}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$: the number $y$ is the quotient of 5 by the sum of a number $x$ and 1.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 5/(x+1)",
              "lines": [
                {
                  "step": "Write an equation for $y$: the number $y$ is the quotient of 5 by the sum of a number $x$ and 1.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the number and 1 is $x+1$.",
                  "reason": "Writing a sentence as an equation: the words \"the sum of\" join the two numbers with a plus sign."
                },
                {
                  "step": "The quotient of 5 by $x+1$ is $\\dfrac{5}{x+1}$.",
                  "reason": "Writing a sentence as an equation: the words \"the quotient of 5 by\" put 5 on the top and the number that follows on the bottom."
                },
                {
                  "step": "$y=\\dfrac{5}{x+1}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
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
      "id": "t107-s1",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be numbers with $a-b$ not $0$. Then $\\dfrac{b-a}{a-b} = -1$.",
      "check": {
        "proof": [
          {
            "line": "$b-a = -a+b$",
            "reason": "the commutative law of addition"
          },
          {
            "line": "$-a+b = -(a-b)$",
            "reason": "the rule for removing parentheses, $-(x-y)=-x+y$, read from right to left"
          },
          {
            "line": "So $\\dfrac{b-a}{a-b} = \\dfrac{-(a-b)}{a-b}$.",
            "reason": "the first and second lines"
          },
          {
            "line": "$\\dfrac{-(a-b)}{a-b} = -\\dfrac{a-b}{a-b}$",
            "reason": "Negative quotient identities: a minus sign on the top stands in front of the whole fraction"
          },
          {
            "line": "$\\dfrac{a-b}{a-b} = \\dfrac{1\\cdot(a-b)}{1\\cdot(a-b)}$",
            "reason": "multiplying a number by $1$ leaves it as it is"
          },
          {
            "line": "$\\dfrac{1\\cdot(a-b)}{1\\cdot(a-b)} = \\dfrac{1}{1}$",
            "reason": "cancelling a common factor: $a-b$ is a factor of the whole top and of the whole bottom, and it is not $0$"
          },
          {
            "line": "$\\dfrac{1}{1} = 1$",
            "reason": "A whole number as a fraction, read from right to left"
          },
          {
            "line": "Therefore $\\dfrac{b-a}{a-b} = -1$.",
            "reason": "the third to seventh lines"
          }
        ]
      }
    },
    {
      "id": "t107-s2",
      "method": "disproof by counterexample",
      "statement": "Prove that the statement \"for every number $x$ other than $-5$, $\\dfrac{x+3}{x+5} = \\dfrac{3}{5}$\" is false.",
      "check": {
        "proof": [
          {
            "line": "Let $x = 1$, a number other than $-5$.",
            "reason": "one value of $x$ where the two sides differ is enough to show a statement about every $x$ false"
          },
          {
            "line": "Then $\\dfrac{x+3}{x+5} = \\dfrac{1+3}{1+5}$.",
            "reason": "Substituting a value"
          },
          {
            "line": "$\\dfrac{1+3}{1+5} = \\dfrac{4}{6}$",
            "reason": "adding the whole numbers on the top and on the bottom"
          },
          {
            "line": "$\\dfrac{4}{6} = \\dfrac{2}{3}$",
            "reason": "The cancellation law, with the common factor $2$"
          },
          {
            "line": "The fraction $\\dfrac{2}{3}$ is not $\\dfrac{3}{5}$, since $2\\cdot 5 = 10$ and $3\\cdot 3 = 9$",
            "reason": "The cross-multiplication algorithm: two fractions are equal exactly when the two cross products are equal"
          },
          {
            "line": "So at $x = 1$ the two sides differ, and the statement is false.",
            "reason": "the second to fifth lines"
          }
        ]
      }
    }
  ]
}
