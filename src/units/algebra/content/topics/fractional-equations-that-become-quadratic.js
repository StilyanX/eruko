export default {
  "number": 148,
  "title": "Equations with fractions that become quadratic",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "312-317, 392-397, 573-574"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $\\dfrac{2x}{x + 1} + \\dfrac{2}{x + 5} = 5$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = (-9+2*sqrt(3))/3, x = (-9-2*sqrt(3))/3",
    "solution": [
      "$\\dfrac{2x}{x + 1} + \\dfrac{2}{x + 5} = 5$",
      "Here $x \\ne -1$ and $x \\ne -5$.",
      "$2x(x + 5) + 2(x + 1) = 5(x + 1)(x + 5)$",
      "$2x^2 + 12x + 2 = 5x^2 + 30x + 25$",
      "$0 = 3x^2 + 18x + 23$",
      "$x = \\dfrac{-18 \\pm \\sqrt{48}}{6}$",
      "Then $x = \\dfrac{-9 + 2\\sqrt{3}}{3}$ or $x = \\dfrac{-9 - 2\\sqrt{3}}{3}$",
      "So both values are solutions."
    ]
  },
  "ideas": [],
  "kinds": [
    {
      "id": "t148-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\dfrac{x^2 + x - 12}{x - 3} + \\dfrac{3x^2 + 10x - 25}{x + 5} = 2$.",
            "lines": [
              {
                "step": "$\\dfrac{x^2 + x - 12}{x - 3} + \\dfrac{3x^2 + 10x - 25}{x + 5} = 2$",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $x \\ne 3$ and $x \\ne -5$.",
                "reason": "Excluded value: $x = 3$ and $x = -5$ make a denominator $0$, so neither is a solution."
              },
              {
                "step": "$\\dfrac{(x - 3)(x + 4)}{x - 3} + \\dfrac{(x + 5)(3x - 5)}{x + 5} = 2$",
                "reason": "Factoring a quadratic: each top is written as a product of two brackets, and the brackets multiply out to the top as given."
              },
              {
                "step": "$x + 4 + 3x - 5 = 2$",
                "reason": "Cancelling a common factor: $x - 3$ and $x + 5$ are not $0$, so each divides the top and the bottom of its fraction."
              },
              {
                "step": "$4x - 1 = 2$",
                "reason": "Collecting like terms: the multiples of $x$ are added, and the numbers are added."
              },
              {
                "step": "$4x = 3$",
                "reason": "Adding the same number to both sides: $1$ is added to both sides."
              },
              {
                "step": "$x = \\dfrac{3}{4}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
              },
              {
                "step": "So $x = \\dfrac{3}{4}$ is the solution.",
                "reason": "Excluded value: $\\dfrac{3}{4}$ is neither $3$ nor $-5$, so it is not excluded."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{x^2 + x - 20}{x - 4} + \\dfrac{3x^2 + 20x + 25}{x + 5} = 2$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -2",
              "lines": [
                {
                  "step": "$\\dfrac{x^2 + x - 20}{x - 4} + \\dfrac{3x^2 + 20x + 25}{x + 5} = 2$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 4$ and $x \\ne -5$.",
                  "reason": "Excluded value: $x = 4$ and $x = -5$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$\\dfrac{(x - 4)(x + 5)}{x - 4} + \\dfrac{(x + 5)(3x + 5)}{x + 5} = 2$",
                  "reason": "Factoring a quadratic: each top is written as a product of two brackets, and the brackets multiply out to the top as given."
                },
                {
                  "step": "$x + 5 + 3x + 5 = 2$",
                  "reason": "Cancelling a common factor: $x - 4$ and $x + 5$ are not $0$, so each divides the top and the bottom of its fraction."
                },
                {
                  "step": "$4x + 10 = 2$",
                  "reason": "Collecting like terms: the multiples of $x$ are added, and the numbers are added."
                },
                {
                  "step": "$4x = -8$",
                  "reason": "Adding the same number to both sides: $10$ is taken from both sides."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "So $x = -2$ is the solution.",
                  "reason": "Excluded value: $-2$ is neither $4$ nor $-5$, so it is not excluded."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{x^2 + x - 12}{x + 4} + \\dfrac{x^2 + 8x + 7}{x + 1} = -5$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -9/2",
              "lines": [
                {
                  "step": "$\\dfrac{x^2 + x - 12}{x + 4} + \\dfrac{x^2 + 8x + 7}{x + 1} = -5$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne -4$ and $x \\ne -1$.",
                  "reason": "Excluded value: $x = -4$ and $x = -1$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$\\dfrac{(x + 4)(x - 3)}{x + 4} + \\dfrac{(x + 1)(x + 7)}{x + 1} = -5$",
                  "reason": "Factoring a quadratic: each top is written as a product of two brackets, and the brackets multiply out to the top as given."
                },
                {
                  "step": "$x - 3 + x + 7 = -5$",
                  "reason": "Cancelling a common factor: $x + 4$ and $x + 1$ are not $0$, so each divides the top and the bottom of its fraction."
                },
                {
                  "step": "$2x + 4 = -5$",
                  "reason": "Collecting like terms: the multiples of $x$ are added, and the numbers are added."
                },
                {
                  "step": "$2x = -9$",
                  "reason": "Adding the same number to both sides: $4$ is taken from both sides."
                },
                {
                  "step": "$x = -\\dfrac{9}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "So $x = -\\dfrac{9}{2}$ is the solution.",
                  "reason": "Excluded value: $-\\dfrac{9}{2}$ is neither $-4$ nor $-1$, so it is not excluded."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{x^2 - 4x - 12}{x + 2} + \\dfrac{2x^2 - 17x + 35}{x - 5} = 6$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 19/3",
              "lines": [
                {
                  "step": "$\\dfrac{x^2 - 4x - 12}{x + 2} + \\dfrac{2x^2 - 17x + 35}{x - 5} = 6$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne -2$ and $x \\ne 5$.",
                  "reason": "Excluded value: $x = -2$ and $x = 5$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$\\dfrac{(x + 2)(x - 6)}{x + 2} + \\dfrac{(x - 5)(2x - 7)}{x - 5} = 6$",
                  "reason": "Factoring a quadratic: each top is written as a product of two brackets, and the brackets multiply out to the top as given."
                },
                {
                  "step": "$x - 6 + 2x - 7 = 6$",
                  "reason": "Cancelling a common factor: $x + 2$ and $x - 5$ are not $0$, so each divides the top and the bottom of its fraction."
                },
                {
                  "step": "$3x - 13 = 6$",
                  "reason": "Collecting like terms: the multiples of $x$ are added, and the numbers are added."
                },
                {
                  "step": "$3x = 19$",
                  "reason": "Adding the same number to both sides: $13$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{19}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "So $x = \\dfrac{19}{3}$ is the solution.",
                  "reason": "Excluded value: $\\dfrac{19}{3}$ is neither $-2$ nor $5$, so it is not excluded."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{x}{x - 4} + \\dfrac{7}{x - 1} = 2$.",
            "lines": [
              {
                "step": "$\\dfrac{x}{x - 4} + \\dfrac{7}{x - 1} = 2$",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $x \\ne 4$ and $x \\ne 1$.",
                "reason": "Excluded value: $x = 4$ and $x = 1$ make a denominator $0$, so neither is a solution."
              },
              {
                "step": "$x(x - 1) + 7(x - 4) = 2(x - 4)(x - 1)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 4)(x - 1)$, which is not $0$, and each fraction cancels to its top times the other bracket."
              },
              {
                "step": "$x^2 + 6x - 28 = 2x^2 - 10x + 8$",
                "reason": "Multiplying out: each bracket is multiplied out, and like terms on each side are collected."
              },
              {
                "step": "$0 = x^2 - 16x + 36$",
                "reason": "Adding the same number to both sides: every term is taken to the side with the greater multiple of $x^2$."
              },
              {
                "step": "$x = \\dfrac{16 \\pm \\sqrt{112}}{2}$",
                "reason": "Quadratic formula: with $a = 1$, $b = -16$ and $c = 36$."
              },
              {
                "step": "Then $x = 8 + 2\\sqrt{7}$ or $x = 8 - 2\\sqrt{7}$",
                "reason": "Simplest radical form: the root is taken out of the square root as far as it goes, and the fraction is written in lowest terms."
              },
              {
                "step": "So both values are solutions.",
                "reason": "Excluded value: neither value is $4$ or $1$, so neither is excluded."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{x}{x - 5} - \\dfrac{4}{x + 4} = -2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (1+sqrt(61))/3, x = (1-sqrt(61))/3",
              "lines": [
                {
                  "step": "$\\dfrac{x}{x - 5} - \\dfrac{4}{x + 4} = -2$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 5$ and $x \\ne -4$.",
                  "reason": "Excluded value: $x = 5$ and $x = -4$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$x(x + 4) - 4(x - 5) = -2(x - 5)(x + 4)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 5)(x + 4)$, which is not $0$, and each fraction cancels to its top times the other bracket."
                },
                {
                  "step": "$x^2 + 20 = -2x^2 + 2x + 40$",
                  "reason": "Multiplying out: each bracket is multiplied out, and like terms on each side are collected."
                },
                {
                  "step": "$3x^2 - 2x - 20 = 0$",
                  "reason": "Adding the same number to both sides: every term is taken to the side with the greater multiple of $x^2$."
                },
                {
                  "step": "$x = \\dfrac{2 \\pm \\sqrt{244}}{6}$",
                  "reason": "Quadratic formula: with $a = 3$, $b = -2$ and $c = -20$."
                },
                {
                  "step": "Then $x = \\dfrac{1 + \\sqrt{61}}{3}$ or $x = \\dfrac{1 - \\sqrt{61}}{3}$",
                  "reason": "Simplest radical form: the root is taken out of the square root as far as it goes, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $5$ or $-4$, so neither is excluded."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{3x}{x - 6} + \\dfrac{2}{x - 1} = 4$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (27+3*sqrt(65))/2, x = (27-3*sqrt(65))/2",
              "lines": [
                {
                  "step": "$\\dfrac{3x}{x - 6} + \\dfrac{2}{x - 1} = 4$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 6$ and $x \\ne 1$.",
                  "reason": "Excluded value: $x = 6$ and $x = 1$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$3x(x - 1) + 2(x - 6) = 4(x - 6)(x - 1)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 6)(x - 1)$, which is not $0$, and each fraction cancels to its top times the other bracket."
                },
                {
                  "step": "$3x^2 - x - 12 = 4x^2 - 28x + 24$",
                  "reason": "Multiplying out: each bracket is multiplied out, and like terms on each side are collected."
                },
                {
                  "step": "$0 = x^2 - 27x + 36$",
                  "reason": "Adding the same number to both sides: every term is taken to the side with the greater multiple of $x^2$."
                },
                {
                  "step": "$x = \\dfrac{27 \\pm \\sqrt{585}}{2}$",
                  "reason": "Quadratic formula: with $a = 1$, $b = -27$ and $c = 36$."
                },
                {
                  "step": "Then $x = \\dfrac{27 + 3\\sqrt{65}}{2}$ or $x = \\dfrac{27 - 3\\sqrt{65}}{2}$",
                  "reason": "Simplest radical form: the root is taken out of the square root as far as it goes, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $6$ or $1$, so neither is excluded."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{3x}{x + 6} - \\dfrac{5}{x - 5} = -2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (9+3*sqrt(59))/5, x = (9-3*sqrt(59))/5",
              "lines": [
                {
                  "step": "$\\dfrac{3x}{x + 6} - \\dfrac{5}{x - 5} = -2$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne -6$ and $x \\ne 5$.",
                  "reason": "Excluded value: $x = -6$ and $x = 5$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$3x(x - 5) - 5(x + 6) = -2(x + 6)(x - 5)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 6)(x - 5)$, which is not $0$, and each fraction cancels to its top times the other bracket."
                },
                {
                  "step": "$3x^2 - 20x - 30 = -2x^2 - 2x + 60$",
                  "reason": "Multiplying out: each bracket is multiplied out, and like terms on each side are collected."
                },
                {
                  "step": "$5x^2 - 18x - 90 = 0$",
                  "reason": "Adding the same number to both sides: every term is taken to the side with the greater multiple of $x^2$."
                },
                {
                  "step": "$x = \\dfrac{18 \\pm \\sqrt{2124}}{10}$",
                  "reason": "Quadratic formula: with $a = 5$, $b = -18$ and $c = -90$."
                },
                {
                  "step": "Then $x = \\dfrac{9 + 3\\sqrt{59}}{5}$ or $x = \\dfrac{9 - 3\\sqrt{59}}{5}$",
                  "reason": "Simplest radical form: the root is taken out of the square root as far as it goes, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $-6$ or $5$, so neither is excluded."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{x}{x + 13} = \\dfrac{9}{x + 12} + \\dfrac{13}{x^2 + 25x + 156}$.",
            "lines": [
              {
                "step": "$\\dfrac{x}{x + 13} = \\dfrac{9}{x + 12} + \\dfrac{13}{x^2 + 25x + 156}$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x}{x + 13} = \\dfrac{9}{x + 12} + \\dfrac{13}{(x + 13)(x + 12)}$",
                "reason": "Factoring a quadratic: the numbers $13$ and $12$ have sum $25$ and product $156$."
              },
              {
                "step": "Here $x \\ne -13$ and $x \\ne -12$.",
                "reason": "Excluded value: $x = -13$ and $x = -12$ make a denominator $0$, so neither is a solution."
              },
              {
                "step": "$x(x + 12) = 9(x + 13) + 13$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 13)(x + 12)$, which is not $0$."
              },
              {
                "step": "$x^2 + 12x = 9x + 130$",
                "reason": "Multiplying out: each bracket is multiplied out, and the numbers on the right are collected."
              },
              {
                "step": "$x^2 + 3x - 130 = 0$",
                "reason": "Adding the same number to both sides: every term is taken to the left side."
              },
              {
                "step": "$(x + 13)(x - 10) = 0$",
                "reason": "Factoring a quadratic: the numbers $13$ and $-10$ have sum $3$ and product $-130$."
              },
              {
                "step": "Then $x = -13$ or $x = 10$",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "So $x = 10$.",
                "reason": "Extraneous solution: $x = -13$ solves the line before and makes a denominator of the original equation $0$; $x = 10$ is neither $-13$ nor $-12$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{x}{x - 12} = -\\dfrac{5}{x - 3} + \\dfrac{108}{x^2 - 15x + 36}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -14",
              "lines": [
                {
                  "step": "$\\dfrac{x}{x - 12} = -\\dfrac{5}{x - 3} + \\dfrac{108}{x^2 - 15x + 36}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{x - 12} = -\\dfrac{5}{x - 3} + \\dfrac{108}{(x - 12)(x - 3)}$",
                  "reason": "Factoring a quadratic: the numbers $-12$ and $-3$ have sum $-15$ and product $36$."
                },
                {
                  "step": "Here $x \\ne 12$ and $x \\ne 3$.",
                  "reason": "Excluded value: $x = 12$ and $x = 3$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$x(x - 3) = -5(x - 12) + 108$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 12)(x - 3)$, which is not $0$."
                },
                {
                  "step": "$x^2 - 3x = -5x + 168$",
                  "reason": "Multiplying out: each bracket is multiplied out, and the numbers on the right are collected."
                },
                {
                  "step": "$x^2 + 2x - 168 = 0$",
                  "reason": "Adding the same number to both sides: every term is taken to the left side."
                },
                {
                  "step": "$(x - 12)(x + 14) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-12$ and $14$ have sum $2$ and product $-168$."
                },
                {
                  "step": "Then $x = 12$ or $x = -14$",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x = -14$.",
                  "reason": "Extraneous solution: $x = 12$ solves the line before and makes a denominator of the original equation $0$; $x = -14$ is neither $12$ nor $3$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{x}{x + 12} = -\\dfrac{5}{x + 4} + \\dfrac{96}{x^2 + 16x + 48}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 3",
              "lines": [
                {
                  "step": "$\\dfrac{x}{x + 12} = -\\dfrac{5}{x + 4} + \\dfrac{96}{x^2 + 16x + 48}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{x + 12} = -\\dfrac{5}{x + 4} + \\dfrac{96}{(x + 12)(x + 4)}$",
                  "reason": "Factoring a quadratic: the numbers $12$ and $4$ have sum $16$ and product $48$."
                },
                {
                  "step": "Here $x \\ne -12$ and $x \\ne -4$.",
                  "reason": "Excluded value: $x = -12$ and $x = -4$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$x(x + 4) = -5(x + 12) + 96$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 12)(x + 4)$, which is not $0$."
                },
                {
                  "step": "$x^2 + 4x = -5x + 36$",
                  "reason": "Multiplying out: each bracket is multiplied out, and the numbers on the right are collected."
                },
                {
                  "step": "$x^2 + 9x - 36 = 0$",
                  "reason": "Adding the same number to both sides: every term is taken to the left side."
                },
                {
                  "step": "$(x + 12)(x - 3) = 0$",
                  "reason": "Factoring a quadratic: the numbers $12$ and $-3$ have sum $9$ and product $-36$."
                },
                {
                  "step": "Then $x = -12$ or $x = 3$",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x = 3$.",
                  "reason": "Extraneous solution: $x = -12$ solves the line before and makes a denominator of the original equation $0$; $x = 3$ is neither $-12$ nor $-4$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{x}{x - 11} = \\dfrac{13}{x - 12} - \\dfrac{11}{x^2 - 23x + 132}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 14",
              "lines": [
                {
                  "step": "$\\dfrac{x}{x - 11} = \\dfrac{13}{x - 12} - \\dfrac{11}{x^2 - 23x + 132}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{x - 11} = \\dfrac{13}{x - 12} - \\dfrac{11}{(x - 11)(x - 12)}$",
                  "reason": "Factoring a quadratic: the numbers $-11$ and $-12$ have sum $-23$ and product $132$."
                },
                {
                  "step": "Here $x \\ne 11$ and $x \\ne 12$.",
                  "reason": "Excluded value: $x = 11$ and $x = 12$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$x(x - 12) = 13(x - 11) - 11$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 11)(x - 12)$, which is not $0$."
                },
                {
                  "step": "$x^2 - 12x = 13x - 154$",
                  "reason": "Multiplying out: each bracket is multiplied out, and the numbers on the right are collected."
                },
                {
                  "step": "$x^2 - 25x + 154 = 0$",
                  "reason": "Adding the same number to both sides: every term is taken to the left side."
                },
                {
                  "step": "$(x - 11)(x - 14) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-11$ and $-14$ have sum $-25$ and product $154$."
                },
                {
                  "step": "Then $x = 11$ or $x = 14$",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x = 14$.",
                  "reason": "Extraneous solution: $x = 11$ solves the line before and makes a denominator of the original equation $0$; $x = 14$ is neither $11$ nor $12$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every complex solution of $\\dfrac{7}{x + \\dfrac{8}{x}} = 2$.",
            "lines": [
              {
                "step": "$\\dfrac{7}{x + \\dfrac{8}{x}} = 2$",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $x \\ne 0$ and $x^2 + 8 \\ne 0$.",
                "reason": "Excluded value: $x = 0$ makes the bottom of the small fraction $0$, and for other $x$ the bottom of the large fraction is $0$ exactly when $x^2 + 8 = 0$, so neither is a solution."
              },
              {
                "step": "$\\dfrac{7x}{x^2 + 8} = 2$",
                "reason": "Complex fraction: the top and the bottom are multiplied by $x$, which is not $0$."
              },
              {
                "step": "$7x = 2(x^2 + 8)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^2 + 8$, which is $x$ times the bottom of the original fraction and so not $0$."
              },
              {
                "step": "$7x = 2x^2 + 16$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$2x^2 - 7x + 16 = 0$",
                "reason": "Adding the same number to both sides: $7x$ is taken from both sides."
              },
              {
                "step": "$x = \\dfrac{7 \\pm \\sqrt{-79}}{4}$",
                "reason": "Quadratic formula: with $a = 2$, $b = -7$ and $c = 16$."
              },
              {
                "step": "Then $x = \\dfrac{7 + i\\sqrt{79}}{4}$ or $x = \\dfrac{7 - i\\sqrt{79}}{4}$",
                "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the fraction is written in lowest terms."
              },
              {
                "step": "So both values are solutions.",
                "reason": "Excluded value: neither value is $0$, and neither makes $x^2 + 8$ equal to $0$, since then line 4 would give $7x = 0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $\\dfrac{22}{x + \\dfrac{4}{x}} = 7$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (11+5*i*sqrt(3))/7, x = (11-5*i*sqrt(3))/7",
              "lines": [
                {
                  "step": "$\\dfrac{22}{x + \\dfrac{4}{x}} = 7$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 0$ and $x^2 + 4 \\ne 0$.",
                  "reason": "Excluded value: $x = 0$ makes the bottom of the small fraction $0$, and for other $x$ the bottom of the large fraction is $0$ exactly when $x^2 + 4 = 0$, so neither is a solution."
                },
                {
                  "step": "$\\dfrac{22x}{x^2 + 4} = 7$",
                  "reason": "Complex fraction: the top and the bottom are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$22x = 7(x^2 + 4)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^2 + 4$, which is $x$ times the bottom of the original fraction and so not $0$."
                },
                {
                  "step": "$22x = 7x^2 + 28$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$7x^2 - 22x + 28 = 0$",
                  "reason": "Adding the same number to both sides: $22x$ is taken from both sides."
                },
                {
                  "step": "$x = \\dfrac{22 \\pm \\sqrt{-300}}{14}$",
                  "reason": "Quadratic formula: with $a = 7$, $b = -22$ and $c = 28$."
                },
                {
                  "step": "Then $x = \\dfrac{11 + 5i\\sqrt{3}}{7}$ or $x = \\dfrac{11 - 5i\\sqrt{3}}{7}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $0$, and neither makes $x^2 + 4$ equal to $0$, since then line 4 would give $22x = 0$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $\\dfrac{23}{6x + \\dfrac{7}{x}} = 2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (23+i*sqrt(143))/24, x = (23-i*sqrt(143))/24",
              "lines": [
                {
                  "step": "$\\dfrac{23}{6x + \\dfrac{7}{x}} = 2$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 0$ and $6x^2 + 7 \\ne 0$.",
                  "reason": "Excluded value: $x = 0$ makes the bottom of the small fraction $0$, and for other $x$ the bottom of the large fraction is $0$ exactly when $6x^2 + 7 = 0$, so neither is a solution."
                },
                {
                  "step": "$\\dfrac{23x}{6x^2 + 7} = 2$",
                  "reason": "Complex fraction: the top and the bottom are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$23x = 2(6x^2 + 7)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $6x^2 + 7$, which is $x$ times the bottom of the original fraction and so not $0$."
                },
                {
                  "step": "$23x = 12x^2 + 14$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$12x^2 - 23x + 14 = 0$",
                  "reason": "Adding the same number to both sides: $23x$ is taken from both sides."
                },
                {
                  "step": "$x = \\dfrac{23 \\pm \\sqrt{-143}}{24}$",
                  "reason": "Quadratic formula: with $a = 12$, $b = -23$ and $c = 14$."
                },
                {
                  "step": "Then $x = \\dfrac{23 + i\\sqrt{143}}{24}$ or $x = \\dfrac{23 - i\\sqrt{143}}{24}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $0$, and neither makes $6x^2 + 7$ equal to $0$, since then line 4 would give $23x = 0$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $\\dfrac{11}{6x + \\dfrac{3}{x}} = 3$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (11+i*sqrt(527))/36, x = (11-i*sqrt(527))/36",
              "lines": [
                {
                  "step": "$\\dfrac{11}{6x + \\dfrac{3}{x}} = 3$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 0$ and $6x^2 + 3 \\ne 0$.",
                  "reason": "Excluded value: $x = 0$ makes the bottom of the small fraction $0$, and for other $x$ the bottom of the large fraction is $0$ exactly when $6x^2 + 3 = 0$, so neither is a solution."
                },
                {
                  "step": "$\\dfrac{11x}{6x^2 + 3} = 3$",
                  "reason": "Complex fraction: the top and the bottom are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$11x = 3(6x^2 + 3)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $6x^2 + 3$, which is $x$ times the bottom of the original fraction and so not $0$."
                },
                {
                  "step": "$11x = 18x^2 + 9$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$18x^2 - 11x + 9 = 0$",
                  "reason": "Adding the same number to both sides: $11x$ is taken from both sides."
                },
                {
                  "step": "$x = \\dfrac{11 \\pm \\sqrt{-527}}{36}$",
                  "reason": "Quadratic formula: with $a = 18$, $b = -11$ and $c = 9$."
                },
                {
                  "step": "Then $x = \\dfrac{11 + i\\sqrt{527}}{36}$ or $x = \\dfrac{11 - i\\sqrt{527}}{36}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $0$, and neither makes $6x^2 + 3$ equal to $0$, since then line 4 would give $11x = 0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{x^2 + 8x + 7}{x^2 - x - 56} - \\dfrac{2}{x - 7} = 2$.",
            "lines": [
              {
                "step": "$\\dfrac{x^2 + 8x + 7}{x^2 - x - 56} - \\dfrac{2}{x - 7} = 2$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{(x + 7)(x + 1)}{(x + 7)(x - 8)} - \\dfrac{2}{x - 7} = 2$",
                "reason": "Factoring a quadratic: the top and the bottom of the first fraction are each written as a product of two brackets, which multiply out to them as given."
              },
              {
                "step": "Here $x \\ne -7$, $x \\ne 8$ and $x \\ne 7$.",
                "reason": "Excluded value: $x = -7$, $x = 8$ and $x = 7$ make a denominator $0$, so none is a solution."
              },
              {
                "step": "$\\dfrac{x + 1}{x - 8} - \\dfrac{2}{x - 7} = 2$",
                "reason": "Cancelling a common factor: $x + 7$ is not $0$, so it divides the top and the bottom of the first fraction."
              },
              {
                "step": "$(x + 1)(x - 7) - 2(x - 8) = 2(x - 8)(x - 7)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 8)(x - 7)$, which is not $0$, and each fraction cancels to its top times the other bracket."
              },
              {
                "step": "$x^2 - 8x + 9 = 2x^2 - 30x + 112$",
                "reason": "Multiplying out: each bracket is multiplied out, and like terms on each side are collected."
              },
              {
                "step": "$0 = x^2 - 22x + 103$",
                "reason": "Adding the same number to both sides: every term is taken to the side with the greater multiple of $x^2$."
              },
              {
                "step": "$x = \\dfrac{22 \\pm \\sqrt{72}}{2}$",
                "reason": "Quadratic formula: with $a = 1$, $b = -22$ and $c = 103$."
              },
              {
                "step": "Then $x = 11 + 3\\sqrt{2}$ or $x = 11 - 3\\sqrt{2}$",
                "reason": "Simplest radical form: the root is taken out of the square root as far as it goes, and the fraction is written in lowest terms."
              },
              {
                "step": "So both values are solutions.",
                "reason": "Excluded value: neither value is $-7$, $8$ or $7$; $x = -7$ stays excluded although its bracket cancelled, since it makes a denominator of the given equation $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{x^2 + 5x + 4}{x^2 + x - 12} + \\dfrac{6}{x - 9} = 2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 11+2*sqrt(10), x = 11-2*sqrt(10)",
              "lines": [
                {
                  "step": "$\\dfrac{x^2 + 5x + 4}{x^2 + x - 12} + \\dfrac{6}{x - 9} = 2$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(x + 4)(x + 1)}{(x + 4)(x - 3)} + \\dfrac{6}{x - 9} = 2$",
                  "reason": "Factoring a quadratic: the top and the bottom of the first fraction are each written as a product of two brackets, which multiply out to them as given."
                },
                {
                  "step": "Here $x \\ne -4$, $x \\ne 3$ and $x \\ne 9$.",
                  "reason": "Excluded value: $x = -4$, $x = 3$ and $x = 9$ make a denominator $0$, so none is a solution."
                },
                {
                  "step": "$\\dfrac{x + 1}{x - 3} + \\dfrac{6}{x - 9} = 2$",
                  "reason": "Cancelling a common factor: $x + 4$ is not $0$, so it divides the top and the bottom of the first fraction."
                },
                {
                  "step": "$(x + 1)(x - 9) + 6(x - 3) = 2(x - 3)(x - 9)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 3)(x - 9)$, which is not $0$, and each fraction cancels to its top times the other bracket."
                },
                {
                  "step": "$x^2 - 2x - 27 = 2x^2 - 24x + 54$",
                  "reason": "Multiplying out: each bracket is multiplied out, and like terms on each side are collected."
                },
                {
                  "step": "$0 = x^2 - 22x + 81$",
                  "reason": "Adding the same number to both sides: every term is taken to the side with the greater multiple of $x^2$."
                },
                {
                  "step": "$x = \\dfrac{22 \\pm \\sqrt{160}}{2}$",
                  "reason": "Quadratic formula: with $a = 1$, $b = -22$ and $c = 81$."
                },
                {
                  "step": "Then $x = 11 + 2\\sqrt{10}$ or $x = 11 - 2\\sqrt{10}$",
                  "reason": "Simplest radical form: the root is taken out of the square root as far as it goes, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $-4$, $3$ or $9$; $x = -4$ stays excluded although its bracket cancelled, since it makes a denominator of the given equation $0$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{x^2 + x - 42}{x^2 - 4x - 12} - \\dfrac{5}{x + 8} = 2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -5+sqrt(39), x = -5-sqrt(39)",
              "lines": [
                {
                  "step": "$\\dfrac{x^2 + x - 42}{x^2 - 4x - 12} - \\dfrac{5}{x + 8} = 2$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(x - 6)(x + 7)}{(x - 6)(x + 2)} - \\dfrac{5}{x + 8} = 2$",
                  "reason": "Factoring a quadratic: the top and the bottom of the first fraction are each written as a product of two brackets, which multiply out to them as given."
                },
                {
                  "step": "Here $x \\ne 6$, $x \\ne -2$ and $x \\ne -8$.",
                  "reason": "Excluded value: $x = 6$, $x = -2$ and $x = -8$ make a denominator $0$, so none is a solution."
                },
                {
                  "step": "$\\dfrac{x + 7}{x + 2} - \\dfrac{5}{x + 8} = 2$",
                  "reason": "Cancelling a common factor: $x - 6$ is not $0$, so it divides the top and the bottom of the first fraction."
                },
                {
                  "step": "$(x + 7)(x + 8) - 5(x + 2) = 2(x + 2)(x + 8)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 2)(x + 8)$, which is not $0$, and each fraction cancels to its top times the other bracket."
                },
                {
                  "step": "$x^2 + 10x + 46 = 2x^2 + 20x + 32$",
                  "reason": "Multiplying out: each bracket is multiplied out, and like terms on each side are collected."
                },
                {
                  "step": "$0 = x^2 + 10x - 14$",
                  "reason": "Adding the same number to both sides: every term is taken to the side with the greater multiple of $x^2$."
                },
                {
                  "step": "$x = \\dfrac{-10 \\pm \\sqrt{156}}{2}$",
                  "reason": "Quadratic formula: with $a = 1$, $b = 10$ and $c = -14$."
                },
                {
                  "step": "Then $x = -5 + \\sqrt{39}$ or $x = -5 - \\sqrt{39}$",
                  "reason": "Simplest radical form: the root is taken out of the square root as far as it goes, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $6$, $-2$ or $-8$; $x = 6$ stays excluded although its bracket cancelled, since it makes a denominator of the given equation $0$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{x^2 - 5x + 4}{x^2 - 13x + 36} - \\dfrac{9}{x + 6} = 2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1+2*sqrt(46), x = 1-2*sqrt(46)",
              "lines": [
                {
                  "step": "$\\dfrac{x^2 - 5x + 4}{x^2 - 13x + 36} - \\dfrac{9}{x + 6} = 2$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(x - 4)(x - 1)}{(x - 4)(x - 9)} - \\dfrac{9}{x + 6} = 2$",
                  "reason": "Factoring a quadratic: the top and the bottom of the first fraction are each written as a product of two brackets, which multiply out to them as given."
                },
                {
                  "step": "Here $x \\ne 4$, $x \\ne 9$ and $x \\ne -6$.",
                  "reason": "Excluded value: $x = 4$, $x = 9$ and $x = -6$ make a denominator $0$, so none is a solution."
                },
                {
                  "step": "$\\dfrac{x - 1}{x - 9} - \\dfrac{9}{x + 6} = 2$",
                  "reason": "Cancelling a common factor: $x - 4$ is not $0$, so it divides the top and the bottom of the first fraction."
                },
                {
                  "step": "$(x - 1)(x + 6) - 9(x - 9) = 2(x - 9)(x + 6)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 9)(x + 6)$, which is not $0$, and each fraction cancels to its top times the other bracket."
                },
                {
                  "step": "$x^2 - 4x + 75 = 2x^2 - 6x - 108$",
                  "reason": "Multiplying out: each bracket is multiplied out, and like terms on each side are collected."
                },
                {
                  "step": "$0 = x^2 - 2x - 183$",
                  "reason": "Adding the same number to both sides: every term is taken to the side with the greater multiple of $x^2$."
                },
                {
                  "step": "$x = \\dfrac{2 \\pm \\sqrt{736}}{2}$",
                  "reason": "Quadratic formula: with $a = 1$, $b = -2$ and $c = -183$."
                },
                {
                  "step": "Then $x = 1 + 2\\sqrt{46}$ or $x = 1 - 2\\sqrt{46}$",
                  "reason": "Simplest radical form: the root is taken out of the square root as far as it goes, and the fraction is written in lowest terms."
                },
                {
                  "step": "So both values are solutions.",
                  "reason": "Excluded value: neither value is $4$, $9$ or $-6$; $x = 4$ stays excluded although its bracket cancelled, since it makes a denominator of the given equation $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t148-k2",
      "forms": [
        {
          "example": {
            "problem": "Find every number $a$ for which the equation $\\dfrac{x + 5}{x + 8} = \\dfrac{x - a}{x + 9}$ has no solution in $x$.",
            "lines": [
              {
                "step": "$\\dfrac{x + 5}{x + 8} = \\dfrac{x - a}{x + 9}$",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $x \\ne -8$ and $x \\ne -9$.",
                "reason": "Excluded value: $x = -8$ and $x = -9$ make a denominator $0$, so neither is a solution."
              },
              {
                "step": "$(x + 5)(x + 9) = (x - a)(x + 8)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$x^2 + 14x + 45 = x^2 - ax + 8x - 8a$",
                "reason": "Every term of one bracket times every term of the other: each side is multiplied out and like terms are collected."
              },
              {
                "step": "$(a + 6)x = -8a - 45$",
                "reason": "Adding the same number to both sides: $x^2$ is taken from both sides, and the terms in $x$ are gathered on the left."
              },
              {
                "step": "At $a = -6$ the line before reads $0 = 3$.",
                "reason": "No solution, or every number: an equation that reads as a false statement about numbers has no solution."
              },
              {
                "step": "For $a \\ne -6$, $x = \\dfrac{-8a - 45}{a + 6}$.",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $a + 6$."
              },
              {
                "step": "At $x = -8$: $-8(a + 6) = -8a - 45$ reads $-48 = -45$, so no $a$ gives $x = -8$.",
                "reason": "Excluded value: the solution is excluded only when it equals $-8$, and multiplying out leaves a false statement."
              },
              {
                "step": "At $x = -9$: $-9(a + 6) = -8a - 45$ gives $a = -9$.",
                "reason": "Excluded value: the solution is excluded when it equals $-9$, and solving for $a$ gives one value."
              },
              {
                "step": "So $a = -6$ or $a = -9$.",
                "reason": "Excluded value: these are the numbers for which every candidate is excluded or none exists."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $a$ for which the equation $\\dfrac{x + 6}{x - 6} = \\dfrac{x - a}{x - 7}$ has no solution in $x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-5, 7}",
              "lines": [
                {
                  "step": "$\\dfrac{x + 6}{x - 6} = \\dfrac{x - a}{x - 7}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 6$ and $x \\ne 7$.",
                  "reason": "Excluded value: $x = 6$ and $x = 7$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$(x + 6)(x - 7) = (x - a)(x - 6)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$x^2 - x - 42 = x^2 - ax - 6x + 6a$",
                  "reason": "Every term of one bracket times every term of the other: each side is multiplied out and like terms are collected."
                },
                {
                  "step": "$(a + 5)x = 6a + 42$",
                  "reason": "Adding the same number to both sides: $x^2$ is taken from both sides, and the terms in $x$ are gathered on the left."
                },
                {
                  "step": "At $a = -5$ the line before reads $0 = 12$.",
                  "reason": "No solution, or every number: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "For $a \\ne -5$, $x = \\dfrac{6a + 42}{a + 5}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a + 5$."
                },
                {
                  "step": "At $x = 6$: $6(a + 5) = 6a + 42$ reads $30 = 42$, so no $a$ gives $x = 6$.",
                  "reason": "Excluded value: the solution is excluded only when it equals $6$, and multiplying out leaves a false statement."
                },
                {
                  "step": "At $x = 7$: $7(a + 5) = 6a + 42$ gives $a = 7$.",
                  "reason": "Excluded value: the solution is excluded when it equals $7$, and solving for $a$ gives one value."
                },
                {
                  "step": "So $a = -5$ or $a = 7$.",
                  "reason": "Excluded value: these are the numbers for which every candidate is excluded or none exists."
                }
              ]
            },
            {
              "prompt": "Find every number $a$ for which the equation $\\dfrac{x + 3}{x + 7} = \\dfrac{x - a}{x - 10}$ has no solution in $x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{14, 10}",
              "lines": [
                {
                  "step": "$\\dfrac{x + 3}{x + 7} = \\dfrac{x - a}{x - 10}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne -7$ and $x \\ne 10$.",
                  "reason": "Excluded value: $x = -7$ and $x = 10$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$(x + 3)(x - 10) = (x - a)(x + 7)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$x^2 - 7x - 30 = x^2 - ax + 7x - 7a$",
                  "reason": "Every term of one bracket times every term of the other: each side is multiplied out and like terms are collected."
                },
                {
                  "step": "$(a - 14)x = -7a + 30$",
                  "reason": "Adding the same number to both sides: $x^2$ is taken from both sides, and the terms in $x$ are gathered on the left."
                },
                {
                  "step": "At $a = 14$ the line before reads $0 = -68$.",
                  "reason": "No solution, or every number: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "For $a \\ne 14$, $x = \\dfrac{-7a + 30}{a - 14}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a - 14$."
                },
                {
                  "step": "At $x = -7$: $-7(a - 14) = -7a + 30$ reads $98 = 30$, so no $a$ gives $x = -7$.",
                  "reason": "Excluded value: the solution is excluded only when it equals $-7$, and multiplying out leaves a false statement."
                },
                {
                  "step": "At $x = 10$: $10(a - 14) = -7a + 30$ gives $a = 10$.",
                  "reason": "Excluded value: the solution is excluded when it equals $10$, and solving for $a$ gives one value."
                },
                {
                  "step": "So $a = 14$ or $a = 10$.",
                  "reason": "Excluded value: these are the numbers for which every candidate is excluded or none exists."
                }
              ]
            },
            {
              "prompt": "Find every number $a$ for which the equation $\\dfrac{x + 11}{x - 9} = \\dfrac{x - a}{x + 3}$ has no solution in $x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-23, -3}",
              "lines": [
                {
                  "step": "$\\dfrac{x + 11}{x - 9} = \\dfrac{x - a}{x + 3}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 9$ and $x \\ne -3$.",
                  "reason": "Excluded value: $x = 9$ and $x = -3$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$(x + 11)(x + 3) = (x - a)(x - 9)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$x^2 + 14x + 33 = x^2 - ax - 9x + 9a$",
                  "reason": "Every term of one bracket times every term of the other: each side is multiplied out and like terms are collected."
                },
                {
                  "step": "$(a + 23)x = 9a - 33$",
                  "reason": "Adding the same number to both sides: $x^2$ is taken from both sides, and the terms in $x$ are gathered on the left."
                },
                {
                  "step": "At $a = -23$ the line before reads $0 = -240$.",
                  "reason": "No solution, or every number: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "For $a \\ne -23$, $x = \\dfrac{9a - 33}{a + 23}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a + 23$."
                },
                {
                  "step": "At $x = 9$: $9(a + 23) = 9a - 33$ reads $207 = -33$, so no $a$ gives $x = 9$.",
                  "reason": "Excluded value: the solution is excluded only when it equals $9$, and multiplying out leaves a false statement."
                },
                {
                  "step": "At $x = -3$: $-3(a + 23) = 9a - 33$ gives $a = -3$.",
                  "reason": "Excluded value: the solution is excluded when it equals $-3$, and solving for $a$ gives one value."
                },
                {
                  "step": "So $a = -23$ or $a = -3$.",
                  "reason": "Excluded value: these are the numbers for which every candidate is excluded or none exists."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $a$ for which the equation $\\dfrac{x + 13}{x + 12} = \\dfrac{x - 1}{x - a}$ has no solution in $x$.",
            "lines": [
              {
                "step": "$\\dfrac{x + 13}{x + 12} = \\dfrac{x - 1}{x - a}$",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $x \\ne -12$ and $x \\ne a$.",
                "reason": "Excluded value: $x = -12$ and $x = a$ make a denominator $0$, so neither is a solution."
              },
              {
                "step": "$(x + 13)(x - a) = (x - 1)(x + 12)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$x^2 - ax + 13x - 13a = x^2 + 11x - 12$",
                "reason": "Every term of one bracket times every term of the other: each side is multiplied out and like terms are collected."
              },
              {
                "step": "$(2 - a)x = 13a - 12$",
                "reason": "Adding the same number to both sides: $x^2$ is taken from both sides, and the terms in $x$ are gathered on the left."
              },
              {
                "step": "At $a = 2$ the line before reads $0 = 14$.",
                "reason": "No solution, or every number: an equation that reads as a false statement about numbers has no solution."
              },
              {
                "step": "For $a \\ne 2$, $x = \\dfrac{13a - 12}{2 - a}$.",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2 - a$."
              },
              {
                "step": "At $x = -12$: $-12(2 - a) = 13a - 12$ gives $a = -12$.",
                "reason": "Excluded value: the solution is excluded when it equals $-12$, and solving for $a$ gives one value."
              },
              {
                "step": "At $x = a$: $a(2 - a) = 13a - 12$ gives $a^2 + 11a - 12 = 0$.",
                "reason": "Excluded value: the solution is excluded when it equals $a$, and every term is taken to one side."
              },
              {
                "step": "Then $(a + 12)(a - 1) = 0$, so $a = -12$ or $a = 1$.",
                "reason": "Zero-product property: the numbers $12$ and $-1$ have sum $11$ and product $-12$, and a product is $0$ exactly when one factor is $0$."
              },
              {
                "step": "So $a = 2$, $a = -12$ or $a = 1$.",
                "reason": "Excluded value: these are the numbers for which every candidate is excluded or none exists."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $a$ for which the equation $\\dfrac{x + 7}{x - 11} = \\dfrac{x + 8}{x - a}$ has no solution in $x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{10, 11, -8}",
              "lines": [
                {
                  "step": "$\\dfrac{x + 7}{x - 11} = \\dfrac{x + 8}{x - a}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 11$ and $x \\ne a$.",
                  "reason": "Excluded value: $x = 11$ and $x = a$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$(x + 7)(x - a) = (x + 8)(x - 11)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$x^2 - ax + 7x - 7a = x^2 - 3x - 88$",
                  "reason": "Every term of one bracket times every term of the other: each side is multiplied out and like terms are collected."
                },
                {
                  "step": "$(10 - a)x = 7a - 88$",
                  "reason": "Adding the same number to both sides: $x^2$ is taken from both sides, and the terms in $x$ are gathered on the left."
                },
                {
                  "step": "At $a = 10$ the line before reads $0 = -18$.",
                  "reason": "No solution, or every number: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "For $a \\ne 10$, $x = \\dfrac{7a - 88}{10 - a}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10 - a$."
                },
                {
                  "step": "At $x = 11$: $11(10 - a) = 7a - 88$ gives $a = 11$.",
                  "reason": "Excluded value: the solution is excluded when it equals $11$, and solving for $a$ gives one value."
                },
                {
                  "step": "At $x = a$: $a(10 - a) = 7a - 88$ gives $a^2 - 3a - 88 = 0$.",
                  "reason": "Excluded value: the solution is excluded when it equals $a$, and every term is taken to one side."
                },
                {
                  "step": "Then $(a - 11)(a + 8) = 0$, so $a = 11$ or $a = -8$.",
                  "reason": "Zero-product property: the numbers $-11$ and $8$ have sum $-3$ and product $-88$, and a product is $0$ exactly when one factor is $0$."
                },
                {
                  "step": "So $a = 10$, $a = 11$ or $a = -8$.",
                  "reason": "Excluded value: these are the numbers for which every candidate is excluded or none exists."
                }
              ]
            },
            {
              "prompt": "Find every number $a$ for which the equation $\\dfrac{x + 12}{x - 3} = \\dfrac{x - 12}{x - a}$ has no solution in $x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{27, 3, 12}",
              "lines": [
                {
                  "step": "$\\dfrac{x + 12}{x - 3} = \\dfrac{x - 12}{x - a}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne 3$ and $x \\ne a$.",
                  "reason": "Excluded value: $x = 3$ and $x = a$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$(x + 12)(x - a) = (x - 12)(x - 3)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$x^2 - ax + 12x - 12a = x^2 - 15x + 36$",
                  "reason": "Every term of one bracket times every term of the other: each side is multiplied out and like terms are collected."
                },
                {
                  "step": "$(27 - a)x = 12a + 36$",
                  "reason": "Adding the same number to both sides: $x^2$ is taken from both sides, and the terms in $x$ are gathered on the left."
                },
                {
                  "step": "At $a = 27$ the line before reads $0 = 360$.",
                  "reason": "No solution, or every number: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "For $a \\ne 27$, $x = \\dfrac{12a + 36}{27 - a}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $27 - a$."
                },
                {
                  "step": "At $x = 3$: $3(27 - a) = 12a + 36$ gives $a = 3$.",
                  "reason": "Excluded value: the solution is excluded when it equals $3$, and solving for $a$ gives one value."
                },
                {
                  "step": "At $x = a$: $a(27 - a) = 12a + 36$ gives $a^2 - 15a + 36 = 0$.",
                  "reason": "Excluded value: the solution is excluded when it equals $a$, and every term is taken to one side."
                },
                {
                  "step": "Then $(a - 3)(a - 12) = 0$, so $a = 3$ or $a = 12$.",
                  "reason": "Zero-product property: the numbers $-3$ and $-12$ have sum $-15$ and product $36$, and a product is $0$ exactly when one factor is $0$."
                },
                {
                  "step": "So $a = 27$, $a = 3$ or $a = 12$.",
                  "reason": "Excluded value: these are the numbers for which every candidate is excluded or none exists."
                }
              ]
            },
            {
              "prompt": "Find every number $a$ for which the equation $\\dfrac{x + 14}{x + 13} = \\dfrac{x + 7}{x - a}$ has no solution in $x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-6, -13, -7}",
              "lines": [
                {
                  "step": "$\\dfrac{x + 14}{x + 13} = \\dfrac{x + 7}{x - a}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x \\ne -13$ and $x \\ne a$.",
                  "reason": "Excluded value: $x = -13$ and $x = a$ make a denominator $0$, so neither is a solution."
                },
                {
                  "step": "$(x + 14)(x - a) = (x + 7)(x + 13)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$x^2 - ax + 14x - 14a = x^2 + 20x + 91$",
                  "reason": "Every term of one bracket times every term of the other: each side is multiplied out and like terms are collected."
                },
                {
                  "step": "$(-6 - a)x = 14a + 91$",
                  "reason": "Adding the same number to both sides: $x^2$ is taken from both sides, and the terms in $x$ are gathered on the left."
                },
                {
                  "step": "At $a = -6$ the line before reads $0 = 7$.",
                  "reason": "No solution, or every number: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "For $a \\ne -6$, $x = \\dfrac{14a + 91}{-6 - a}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6 - a$."
                },
                {
                  "step": "At $x = -13$: $-13(-6 - a) = 14a + 91$ gives $a = -13$.",
                  "reason": "Excluded value: the solution is excluded when it equals $-13$, and solving for $a$ gives one value."
                },
                {
                  "step": "At $x = a$: $a(-6 - a) = 14a + 91$ gives $a^2 + 20a + 91 = 0$.",
                  "reason": "Excluded value: the solution is excluded when it equals $a$, and every term is taken to one side."
                },
                {
                  "step": "Then $(a + 13)(a + 7) = 0$, so $a = -13$ or $a = -7$.",
                  "reason": "Zero-product property: the numbers $13$ and $7$ have sum $20$ and product $91$, and a product is $0$ exactly when one factor is $0$."
                },
                {
                  "step": "So $a = -6$, $a = -13$ or $a = -7$.",
                  "reason": "Excluded value: these are the numbers for which every candidate is excluded or none exists."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t148-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\dfrac{2}{x + 1} - \\dfrac{x + 3}{x + 6} = 4$, and write that line right.",
            "given": [
              "$\\dfrac{2}{x + 1} - \\dfrac{x + 3}{x + 6} = 4$",
              "$2(x + 6) + (x + 3)(x + 1) = 4(x + 1)(x + 6)$",
              "$2x + 12 + x^2 + 4x + 3 = 4x^2 + 28x + 24$",
              "$0 = 3x^2 + 22x + 9$",
              "$x = \\dfrac{-22 \\pm \\sqrt{376}}{6}$",
              "$x = \\dfrac{-11 + \\sqrt{94}}{3}$ or $x = \\dfrac{-11 - \\sqrt{94}}{3}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\dfrac{2}{x + 1} - \\dfrac{x + 3}{x + 6} = 4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 2 drops the minus sign in front of the second product: the second fraction is taken away, so its top times the other bracket is taken away too.",
                "reason": "A sign lost: multiplying both sides by the same number keeps the minus sign in front of the second fraction."
              },
              {
                "step": "Line 2 written right is $2(x + 6) - (x + 3)(x + 1) = 4(x + 1)(x + 6)$.",
                "reason": "Each later line follows from the line written right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{4}{x - 3} - \\dfrac{x - 6}{x + 3} = 3$, and write that line right.",
              "given": [
                "$\\dfrac{4}{x - 3} - \\dfrac{x - 6}{x + 3} = 3$",
                "$x \\ne 3$ and $x \\ne -3$",
                "$4(x + 3) + (x - 6)(x - 3) = 3(x - 3)(x + 3)$",
                "$4x + 12 + x^2 - 9x + 18 = 3x^2 - 27$",
                "$0 = 2x^2 + 5x - 57$",
                "$x = \\dfrac{-5 \\pm \\sqrt{481}}{4}$",
                "$x = \\dfrac{-5 + \\sqrt{481}}{4}$ or $x = \\dfrac{-5 - \\sqrt{481}}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 4*(x+3)-(x-6)*(x-3) = 3*(x-3)*(x+3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{4}{x - 3} - \\dfrac{x - 6}{x + 3} = 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 drops the minus sign in front of the second product: the second fraction is taken away, so its top times the other bracket is taken away too.",
                  "reason": "A sign lost: multiplying both sides by the same number keeps the minus sign in front of the second fraction."
                },
                {
                  "step": "Line 3 written right is $4(x + 3) - (x - 6)(x - 3) = 3(x - 3)(x + 3)$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{8}{x - 5} - \\dfrac{x + 1}{x + 2} = 2$, and write that line right.",
              "given": [
                "$\\dfrac{8}{x - 5} - \\dfrac{x + 1}{x + 2} = 2$",
                "$8(x + 2) + (x + 1)(x - 5) = 2(x - 5)(x + 2)$",
                "$8x + 16 + x^2 - 4x - 5 = 2x^2 - 6x - 20$",
                "$0 = x^2 - 10x - 31$",
                "$x = \\dfrac{10 \\pm \\sqrt{224}}{2}$",
                "$x = 5 + 2\\sqrt{14}$ or $x = 5 - 2\\sqrt{14}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 8*(x+2)-(x+1)*(x-5) = 2*(x-5)*(x+2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{8}{x - 5} - \\dfrac{x + 1}{x + 2} = 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 drops the minus sign in front of the second product: the second fraction is taken away, so its top times the other bracket is taken away too.",
                  "reason": "A sign lost: multiplying both sides by the same number keeps the minus sign in front of the second fraction."
                },
                {
                  "step": "Line 2 written right is $8(x + 2) - (x + 1)(x - 5) = 2(x - 5)(x + 2)$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{4}{x - 6} - \\dfrac{x + 4}{x + 5} = 2$, and write that line right.",
              "given": [
                "$\\dfrac{4}{x - 6} - \\dfrac{x + 4}{x + 5} = 2$",
                "$x \\ne 6$ and $x \\ne -5$",
                "$4(x + 5) + (x + 4)(x - 6) = 2(x - 6)(x + 5)$",
                "$4x + 20 + x^2 - 2x - 24 = 2x^2 - 2x - 60$",
                "$0 = x^2 - 4x - 56$",
                "$x = \\dfrac{4 \\pm \\sqrt{240}}{2}$",
                "$x = 2 + 2\\sqrt{15}$ or $x = 2 - 2\\sqrt{15}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 4*(x+5)-(x+4)*(x-6) = 2*(x-6)*(x+5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{4}{x - 6} - \\dfrac{x + 4}{x + 5} = 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 drops the minus sign in front of the second product: the second fraction is taken away, so its top times the other bracket is taken away too.",
                  "reason": "A sign lost: multiplying both sides by the same number keeps the minus sign in front of the second fraction."
                },
                {
                  "step": "Line 3 written right is $4(x + 5) - (x + 4)(x - 6) = 2(x - 6)(x + 5)$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\dfrac{6}{x + 2} - \\dfrac{x + 1}{x + 5} = 3$, and write that line right.",
            "given": [
              "$\\dfrac{6}{x + 2} - \\dfrac{x + 1}{x + 5} = 3$",
              "$6(x + 5) - (x + 1)(x + 2) = 3(x + 2)(x + 5)$",
              "$6x + 30 - x^2 - 3x + 2 = 3x^2 + 21x + 30$",
              "$0 = 4x^2 + 18x - 2$",
              "$x = \\dfrac{-18 \\pm \\sqrt{356}}{8}$",
              "$x = \\dfrac{-9 + \\sqrt{89}}{4}$ or $x = \\dfrac{-9 - \\sqrt{89}}{4}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\dfrac{6}{x + 2} - \\dfrac{x + 1}{x + 5} = 3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 keeps the sign of the last term of the subtracted bracket: the product of the two numbers in the brackets must change sign as well.",
                "reason": "A sign lost: subtracting a bracket changes every sign in it, the number term included."
              },
              {
                "step": "Line 3 written right is $6x + 30 - x^2 - 3x - 2 = 3x^2 + 21x + 30$.",
                "reason": "Each later line follows from the line written right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{7}{x + 4} - \\dfrac{x + 6}{x - 4} = 4$, and write that line right.",
              "given": [
                "$\\dfrac{7}{x + 4} - \\dfrac{x + 6}{x - 4} = 4$",
                "$x \\ne -4$ and $x \\ne 4$",
                "$7(x - 4) - (x + 6)(x + 4) = 4(x + 4)(x - 4)$",
                "$7x - 28 - x^2 - 10x + 24 = 4x^2 - 64$",
                "$0 = 5x^2 + 3x - 60$",
                "$x = \\dfrac{-3 \\pm \\sqrt{1209}}{10}$",
                "$x = \\dfrac{-3 + \\sqrt{1209}}{10}$ or $x = \\dfrac{-3 - \\sqrt{1209}}{10}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 7*x-28-x^2-10*x-24 = 4*x^2-64",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{7}{x + 4} - \\dfrac{x + 6}{x - 4} = 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 keeps the sign of the last term of the subtracted bracket: the product of the two numbers in the brackets must change sign as well.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, the number term included."
                },
                {
                  "step": "Line 4 written right is $7x - 28 - x^2 - 10x - 24 = 4x^2 - 64$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{2}{x - 3} - \\dfrac{x - 2}{x + 3} = 3$, and write that line right.",
              "given": [
                "$\\dfrac{2}{x - 3} - \\dfrac{x - 2}{x + 3} = 3$",
                "$2(x + 3) - (x - 2)(x - 3) = 3(x - 3)(x + 3)$",
                "$2x + 6 - x^2 + 5x + 6 = 3x^2 - 27$",
                "$0 = 4x^2 - 7x - 39$",
                "$x = \\dfrac{7 \\pm \\sqrt{673}}{8}$",
                "$x = \\dfrac{7 + \\sqrt{673}}{8}$ or $x = \\dfrac{7 - \\sqrt{673}}{8}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*x+6-x^2+5*x-6 = 3*x^2-27",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{2}{x - 3} - \\dfrac{x - 2}{x + 3} = 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 keeps the sign of the last term of the subtracted bracket: the product of the two numbers in the brackets must change sign as well.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, the number term included."
                },
                {
                  "step": "Line 3 written right is $2x + 6 - x^2 + 5x - 6 = 3x^2 - 27$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{7}{x + 2} - \\dfrac{x - 4}{x + 5} = 3$, and write that line right.",
              "given": [
                "$\\dfrac{7}{x + 2} - \\dfrac{x - 4}{x + 5} = 3$",
                "$x \\ne -2$ and $x \\ne -5$",
                "$7(x + 5) - (x - 4)(x + 2) = 3(x + 2)(x + 5)$",
                "$7x + 35 - x^2 + 2x - 8 = 3x^2 + 21x + 30$",
                "$0 = 4x^2 + 12x + 3$",
                "$x = \\dfrac{-12 \\pm \\sqrt{96}}{8}$",
                "$x = \\dfrac{-3 + \\sqrt{6}}{2}$ or $x = \\dfrac{-3 - \\sqrt{6}}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 7*x+35-x^2+2*x+8 = 3*x^2+21*x+30",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{7}{x + 2} - \\dfrac{x - 4}{x + 5} = 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 keeps the sign of the last term of the subtracted bracket: the product of the two numbers in the brackets must change sign as well.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, the number term included."
                },
                {
                  "step": "Line 4 written right is $7x + 35 - x^2 + 2x + 8 = 3x^2 + 21x + 30$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\dfrac{8}{x - 3} - \\dfrac{x - 4}{x + 2} = 4$, and write that line right.",
            "given": [
              "$\\dfrac{8}{x - 3} - \\dfrac{x - 4}{x + 2} = 4$",
              "$8(x + 2) - (x - 4)(x - 3) = 4(x - 3)(x + 2)$",
              "$8x + 16 - x^2 + 7x - 12 = 4x^2 - 4x - 24$",
              "$0 = 5x^2 + 11x - 28$",
              "$x = \\dfrac{-11 \\pm \\sqrt{681}}{10}$",
              "$x = \\dfrac{-11 + \\sqrt{681}}{10}$ or $x = \\dfrac{-11 - \\sqrt{681}}{10}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\dfrac{8}{x - 3} - \\dfrac{x - 4}{x + 2} = 4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 4 loses a sign when the term in $x$ goes across: a term taken to the other side changes sign.",
                "reason": "A sign lost: adding the same number to both sides takes the term in $x$ away from both sides."
              },
              {
                "step": "Line 4 written right is $0 = 5x^2 - 19x - 28$.",
                "reason": "Each later line follows from the line written right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{8}{x - 2} - \\dfrac{x + 6}{x + 5} = 2$, and write that line right.",
              "given": [
                "$\\dfrac{8}{x - 2} - \\dfrac{x + 6}{x + 5} = 2$",
                "$x \\ne 2$ and $x \\ne -5$",
                "$8(x + 5) - (x + 6)(x - 2) = 2(x - 2)(x + 5)$",
                "$8x + 40 - x^2 - 4x + 12 = 2x^2 + 6x - 20$",
                "$0 = 3x^2 + 10x - 72$",
                "$x = \\dfrac{-10 \\pm \\sqrt{964}}{6}$",
                "$x = \\dfrac{-5 + \\sqrt{241}}{3}$ or $x = \\dfrac{-5 - \\sqrt{241}}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 0 = 3*x^2+2*x-72",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{8}{x - 2} - \\dfrac{x + 6}{x + 5} = 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 loses a sign when the term in $x$ goes across: a term taken to the other side changes sign.",
                  "reason": "A sign lost: adding the same number to both sides takes the term in $x$ away from both sides."
                },
                {
                  "step": "Line 5 written right is $0 = 3x^2 + 2x - 72$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{9}{x + 3} - \\dfrac{x - 1}{x - 4} = 4$, and write that line right.",
              "given": [
                "$\\dfrac{9}{x + 3} - \\dfrac{x - 1}{x - 4} = 4$",
                "$9(x - 4) - (x - 1)(x + 3) = 4(x + 3)(x - 4)$",
                "$9x - 36 - x^2 - 2x + 3 = 4x^2 - 4x - 48$",
                "$0 = 5x^2 + 3x - 15$",
                "$x = \\dfrac{-3 \\pm \\sqrt{309}}{10}$",
                "$x = \\dfrac{-3 + \\sqrt{309}}{10}$ or $x = \\dfrac{-3 - \\sqrt{309}}{10}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 0 = 5*x^2-11*x-15",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{9}{x + 3} - \\dfrac{x - 1}{x - 4} = 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 loses a sign when the term in $x$ goes across: a term taken to the other side changes sign.",
                  "reason": "A sign lost: adding the same number to both sides takes the term in $x$ away from both sides."
                },
                {
                  "step": "Line 4 written right is $0 = 5x^2 - 11x - 15$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{9}{x - 6} - \\dfrac{x + 6}{x + 3} = 4$, and write that line right.",
              "given": [
                "$\\dfrac{9}{x - 6} - \\dfrac{x + 6}{x + 3} = 4$",
                "$x \\ne 6$ and $x \\ne -3$",
                "$9(x + 3) - (x + 6)(x - 6) = 4(x - 6)(x + 3)$",
                "$9x + 27 - x^2 + 36 = 4x^2 - 12x - 72$",
                "$0 = 5x^2 - 3x - 135$",
                "$x = \\dfrac{3 \\pm \\sqrt{2709}}{10}$",
                "$x = \\dfrac{3 + 3\\sqrt{301}}{10}$ or $x = \\dfrac{3 - 3\\sqrt{301}}{10}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 0 = 5*x^2-21*x-135",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{9}{x - 6} - \\dfrac{x + 6}{x + 3} = 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 loses a sign when the term in $x$ goes across: a term taken to the other side changes sign.",
                  "reason": "A sign lost: adding the same number to both sides takes the term in $x$ away from both sides."
                },
                {
                  "step": "Line 5 written right is $0 = 5x^2 - 21x - 135$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t148-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: one tap fills a tank alone in $x$ hours, a second tap takes 20 hours longer than the first to do it alone, and the two together take $\\dfrac{21}{2}$ hours.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: one tap fills a tank alone in $x$ hours, a second tap takes 20 hours longer than the first to do it alone, and the two together take $\\dfrac{21}{2}$ hours.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first tap does $\\dfrac{1}{x}$ of the tank each hour.",
                "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
              },
              {
                "step": "The second tap takes $x + 20$ hours alone.",
                "reason": "Writing a sentence as an equation: \"20 hours longer than\" adds 20 to the first tap's time."
              },
              {
                "step": "The second tap does $\\dfrac{1}{x + 20}$ of the tank each hour, and the two together do $\\dfrac{2}{21}$ of it each hour.",
                "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
              },
              {
                "step": "$\\dfrac{1}{x} + \\dfrac{1}{x + 20} = \\dfrac{2}{21}$",
                "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: working together, two pumps empty a pond in $84$ hours; alone, the second needs 26 hours less than the first, which needs $x$ hours.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "1/x+1/(x-26) = 1/84",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: working together, two pumps empty a pond in $84$ hours; alone, the second needs 26 hours less than the first, which needs $x$ hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first pump does $\\dfrac{1}{x}$ of the pond each hour.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "The second pump takes $x - 26$ hours alone.",
                  "reason": "Writing a sentence as an equation: \"26 hours less than\" takes away 26 from the first pump's time."
                },
                {
                  "step": "The second pump does $\\dfrac{1}{x - 26}$ of the pond each hour, and the two together do $\\dfrac{1}{84}$ of it each hour.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{x - 26} = \\dfrac{1}{84}$",
                  "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: two printers together print a batch of leaflets in $24$ hours, the first alone taking $x$ hours and the second alone taking 14 hours longer.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "1/x+1/(x+14) = 1/24",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: two printers together print a batch of leaflets in $24$ hours, the first alone taking $x$ hours and the second alone taking 14 hours longer.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first printer does $\\dfrac{1}{x}$ of the batch each hour.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "The second printer takes $x + 14$ hours alone.",
                  "reason": "Writing a sentence as an equation: \"14 hours longer\" adds 14 to the first printer's time."
                },
                {
                  "step": "The second printer does $\\dfrac{1}{x + 14}$ of the batch each hour, and the two together do $\\dfrac{1}{24}$ of it each hour.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{x + 14} = \\dfrac{1}{24}$",
                  "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: one machine packs an order alone in $x$ hours, a second machine takes 7 hours less than the first to do it alone, and the two together take $12$ hours.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "1/x+1/(x-7) = 1/12",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: one machine packs an order alone in $x$ hours, a second machine takes 7 hours less than the first to do it alone, and the two together take $12$ hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first machine does $\\dfrac{1}{x}$ of the order each hour.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "The second machine takes $x - 7$ hours alone.",
                  "reason": "Writing a sentence as an equation: \"7 hours less than\" takes away 7 from the first machine's time."
                },
                {
                  "step": "The second machine does $\\dfrac{1}{x - 7}$ of the order each hour, and the two together do $\\dfrac{1}{12}$ of it each hour.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{x - 7} = \\dfrac{1}{12}$",
                  "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: a cyclist rides 18 km at $x$ km per hour, then rides 26 km at 7 km per hour faster, and the whole trip takes 5 hours.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: a cyclist rides 18 km at $x$ km per hour, then rides 26 km at 7 km per hour faster, and the whole trip takes 5 hours.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first part takes $\\dfrac{18}{x}$ hours.",
                "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
              },
              {
                "step": "The second part is at $x + 7$ km per hour.",
                "reason": "Writing a sentence as an equation: \"7 km per hour faster\" adds 7 to the first speed."
              },
              {
                "step": "The second part takes $\\dfrac{26}{x + 7}$ hours.",
                "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
              },
              {
                "step": "$\\dfrac{18}{x} + \\dfrac{26}{x + 7} = 5$",
                "reason": "Writing a sentence as an equation: the whole time is the sum of the two times, and \"takes\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: a trip of 44 km at $x$ km per hour and 48 km at a speed 4 km per hour higher lasts 2 hours.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "44/x+48/(x+4) = 2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: a trip of 44 km at $x$ km per hour and 48 km at a speed 4 km per hour higher lasts 2 hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first part takes $\\dfrac{44}{x}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "The second part is at $x + 4$ km per hour.",
                  "reason": "Writing a sentence as an equation: \"a speed 4 km per hour higher\" adds 4 to the first speed."
                },
                {
                  "step": "The second part takes $\\dfrac{48}{x + 4}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "$\\dfrac{44}{x} + \\dfrac{48}{x + 4} = 2$",
                  "reason": "Writing a sentence as an equation: the whole time is the sum of the two times, and \"lasts\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: the whole trip takes 7 hours when a boat covers the first 42 km at $x$ km per hour and the last 4 km at 3 km per hour slower.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "42/x+4/(x-3) = 7",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: the whole trip takes 7 hours when a boat covers the first 42 km at $x$ km per hour and the last 4 km at 3 km per hour slower.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first part takes $\\dfrac{42}{x}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "The second part is at $x - 3$ km per hour.",
                  "reason": "Writing a sentence as an equation: \"3 km per hour slower\" takes away 3 from the first speed."
                },
                {
                  "step": "The second part takes $\\dfrac{4}{x - 3}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "$\\dfrac{42}{x} + \\dfrac{4}{x - 3} = 7$",
                  "reason": "Writing a sentence as an equation: the whole time is the sum of the two times, and \"takes\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: a walker walks 12 km at $x$ km per hour, then walks 24 km at 3 km per hour faster, and the whole trip takes 8 hours.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "12/x+24/(x+3) = 8",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum of the two fractions on the left: a walker walks 12 km at $x$ km per hour, then walks 24 km at 3 km per hour faster, and the whole trip takes 8 hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first part takes $\\dfrac{12}{x}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "The second part is at $x + 3$ km per hour.",
                  "reason": "Writing a sentence as an equation: \"3 km per hour faster\" adds 3 to the first speed."
                },
                {
                  "step": "The second part takes $\\dfrac{24}{x + 3}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "$\\dfrac{12}{x} + \\dfrac{24}{x + 3} = 8$",
                  "reason": "Writing a sentence as an equation: the whole time is the sum of the two times, and \"takes\" stands where the equals sign goes."
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
