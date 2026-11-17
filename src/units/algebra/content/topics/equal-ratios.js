export default {
  "number": 210,
  "title": "Equal ratios",
  "section": 18,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "343-348"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $x$, where $\\dfrac{x + 7}{2} = \\dfrac{y + 2}{9} = \\dfrac{z - 8}{8}$ and $2x + y + 4z = -11$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-41/5",
    "solution": [
      "Find $x$, where $\\dfrac{x + 7}{2} = \\dfrac{y + 2}{9} = \\dfrac{z - 8}{8}$ and $2x + y + 4z = -11$.",
      "With $a$ for the common value of the three ratios, $x + 7 = 2a$, $y + 2 = 9a$ and $z - 8 = 8a$.",
      "So $x = 2a - 7$, $y = 9a - 2$ and $z = 8a + 8$.",
      "$2(2a - 7) + (9a - 2) + 4(8a + 8) = -11$",
      "$45a + 16 = -11$",
      "$45a = -27$",
      "$a = -\\dfrac{3}{5}$",
      "$x = 2 \\cdot \\left(-\\dfrac{3}{5}\\right) - 7 = -\\dfrac{41}{5}$"
    ]
  },
  "ideas": [
    {
      "name": "Common value of equal ratios",
      "concrete": "The ratios $\\dfrac{21}{6}$ and $\\dfrac{35}{10}$ are equal: each is $\\dfrac{7}{2}$. So $21 = \\dfrac{7}{2} \\cdot 6$ and $35 = \\dfrac{7}{2} \\cdot 10$: each numerator is $\\dfrac{7}{2}$ times its denominator.",
      "general": "For a whole number $n \\ge 2$, let $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2} = \\dots = \\dfrac{x_n}{y_n}$ be equal ratios of numbers, with no denominator $0$. The one number $a$ that each of them equals is their **common value**. Then $x_1 = ay_1$, $x_2 = ay_2$, and so on to $x_n = ay_n$: each numerator is the common value times its denominator. This is the **Common value of equal ratios**. Putting $ay_1$ for $x_1$, $ay_2$ for $x_2$ and so on leaves an expression in $a$ and the denominators, with the given fractions gone."
    },
    {
      "name": "Adding numerators and denominators",
      "concrete": "The ratios $\\dfrac{21}{6}$ and $\\dfrac{35}{10}$ are both $\\dfrac{7}{2}$. Adding the numerators and adding the denominators gives $\\dfrac{21 + 35}{6 + 10} = \\dfrac{56}{16}$, which is $\\dfrac{7}{2}$ again.",
      "general": "For a whole number $n \\ge 2$, let $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2} = \\dots = \\dfrac{x_n}{y_n}$ be equal ratios of numbers, with no denominator $0$ and with $y_1 + y_2 + \\dots + y_n$ not $0$. Then each of the ratios equals $\\dfrac{x_1 + x_2 + \\dots + x_n}{y_1 + y_2 + \\dots + y_n}$. This is **Adding numerators and denominators**. The numerator and the denominator of a ratio may first be multiplied by one number other than $0$, which leaves the ratio as it was. So for two equal ratios and each number $b$ with $y_1 + by_2$ not $0$, each ratio also equals $\\dfrac{x_1 + bx_2}{y_1 + by_2}$; with $b = -1$ the numerators are subtracted and the denominators are subtracted. Where the sum of the denominators is $0$, the new fraction has no value and the fact gives nothing: $\\dfrac{7}{2} = \\dfrac{-7}{-2}$, and $\\dfrac{7 + (-7)}{2 + (-2)}$ has $0$ below."
    }
  ],
  "kinds": [
    {
      "id": "t210-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $y$, where $\\dfrac{x + 6}{5} = \\dfrac{y + 7}{8} = \\dfrac{z + 3}{9}$ and $x - y + 2z = 25$.",
            "lines": [
              {
                "step": "Find $y$, where $\\dfrac{x + 6}{5} = \\dfrac{y + 7}{8} = \\dfrac{z + 3}{9}$ and $x - y + 2z = 25$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $a$ for the common value of the three ratios, $x + 6 = 5a$, $y + 7 = 8a$ and $z + 3 = 9a$.",
                "reason": "Common value of equal ratios: the three ratios share one value, and each numerator is that value times its denominator."
              },
              {
                "step": "So $x = 5a - 6$, $y = 8a - 7$ and $z = 9a - 3$.",
                "reason": "Adding the same number to both sides: in each equation of line 2 the number beside the letter is moved to the other side."
              },
              {
                "step": "$(5a - 6) - (8a - 7) + 2(9a - 3) = 25$",
                "reason": "Substituting a value: the expressions of line 3 stand in the places of $x$, $y$ and $z$ in the second equation."
              },
              {
                "step": "$15a - 5 = 25$",
                "reason": "Multiplying out and collecting like terms: the terms in $a$ add to $15a$ and the numbers add to $-5$."
              },
              {
                "step": "$15a = 30$",
                "reason": "Adding the same number to both sides: $5$ is added to both sides."
              },
              {
                "step": "$a = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $15$."
              },
              {
                "step": "$y = 8 \\cdot 2 - 7 = 9$",
                "reason": "Substituting a value: the value of $a$ goes into the equation for $y$ of line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $y$, where $\\dfrac{x - 6}{9} = \\dfrac{y - 8}{8} = \\dfrac{z + 7}{7}$ and $x + 2y - 3z = 55$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "32",
              "lines": [
                {
                  "step": "Find $y$, where $\\dfrac{x - 6}{9} = \\dfrac{y - 8}{8} = \\dfrac{z + 7}{7}$ and $x + 2y - 3z = 55$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the three ratios, $x - 6 = 9a$, $y - 8 = 8a$ and $z + 7 = 7a$.",
                  "reason": "Common value of equal ratios: the three ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "So $x = 9a + 6$, $y = 8a + 8$ and $z = 7a - 7$.",
                  "reason": "Adding the same number to both sides: in each equation of line 2 the number beside the letter is moved to the other side."
                },
                {
                  "step": "$(9a + 6) + 2(8a + 8) - 3(7a - 7) = 55$",
                  "reason": "Substituting a value: the expressions of line 3 stand in the places of $x$, $y$ and $z$ in the second equation."
                },
                {
                  "step": "$4a + 43 = 55$",
                  "reason": "Multiplying out and collecting like terms: the terms in $a$ add to $4a$ and the numbers add to $43$."
                },
                {
                  "step": "$4a = 12$",
                  "reason": "Adding the same number to both sides: $-43$ is added to both sides."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$y = 8 \\cdot 3 + 8 = 32$",
                  "reason": "Substituting a value: the value of $a$ goes into the equation for $y$ of line 3."
                }
              ]
            },
            {
              "prompt": "Find $x$, where $\\dfrac{x + 1}{8} = \\dfrac{y + 5}{5} = \\dfrac{z + 6}{3}$ and $2x - 3y + 5z = 43$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "29",
              "lines": [
                {
                  "step": "Find $x$, where $\\dfrac{x + 1}{8} = \\dfrac{y + 5}{5} = \\dfrac{z + 6}{3}$ and $2x - 3y + 5z = 43$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the three ratios, $x + 1 = 8a$, $y + 5 = 5a$ and $z + 6 = 3a$.",
                  "reason": "Common value of equal ratios: the three ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "So $x = 8a - 1$, $y = 5a - 5$ and $z = 3a - 6$.",
                  "reason": "Adding the same number to both sides: in each equation of line 2 the number beside the letter is moved to the other side."
                },
                {
                  "step": "$2(8a - 1) - 3(5a - 5) + 5(3a - 6) = 43$",
                  "reason": "Substituting a value: the expressions of line 3 stand in the places of $x$, $y$ and $z$ in the second equation."
                },
                {
                  "step": "$16a - 17 = 43$",
                  "reason": "Multiplying out and collecting like terms: the terms in $a$ add to $16a$ and the numbers add to $-17$."
                },
                {
                  "step": "$16a = 60$",
                  "reason": "Adding the same number to both sides: $17$ is added to both sides."
                },
                {
                  "step": "$a = \\dfrac{15}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$."
                },
                {
                  "step": "$x = 8 \\cdot \\dfrac{15}{4} - 1 = 29$",
                  "reason": "Substituting a value: the value of $a$ goes into the equation for $x$ of line 3."
                }
              ]
            },
            {
              "prompt": "Find $x$, where $\\dfrac{x - 1}{3} = \\dfrac{y + 6}{8} = \\dfrac{z + 8}{7}$ and $4x + 4y + 3z = 34$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "23/5",
              "lines": [
                {
                  "step": "Find $x$, where $\\dfrac{x - 1}{3} = \\dfrac{y + 6}{8} = \\dfrac{z + 8}{7}$ and $4x + 4y + 3z = 34$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the three ratios, $x - 1 = 3a$, $y + 6 = 8a$ and $z + 8 = 7a$.",
                  "reason": "Common value of equal ratios: the three ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "So $x = 3a + 1$, $y = 8a - 6$ and $z = 7a - 8$.",
                  "reason": "Adding the same number to both sides: in each equation of line 2 the number beside the letter is moved to the other side."
                },
                {
                  "step": "$4(3a + 1) + 4(8a - 6) + 3(7a - 8) = 34$",
                  "reason": "Substituting a value: the expressions of line 3 stand in the places of $x$, $y$ and $z$ in the second equation."
                },
                {
                  "step": "$65a - 44 = 34$",
                  "reason": "Multiplying out and collecting like terms: the terms in $a$ add to $65a$ and the numbers add to $-44$."
                },
                {
                  "step": "$65a = 78$",
                  "reason": "Adding the same number to both sides: $44$ is added to both sides."
                },
                {
                  "step": "$a = \\dfrac{6}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $65$."
                },
                {
                  "step": "$x = 3 \\cdot \\dfrac{6}{5} + 1 = \\dfrac{23}{5}$",
                  "reason": "Substituting a value: the value of $a$ goes into the equation for $x$ of line 3."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value of $\\dfrac{2x + z}{2x + 2y}$, where $\\dfrac{2x + 2y}{3} = \\dfrac{z - 2y}{10}$ and $2x + 2y$ is not $0$.",
            "lines": [
              {
                "step": "Find the value of $\\dfrac{2x + z}{2x + 2y}$, where $\\dfrac{2x + 2y}{3} = \\dfrac{z - 2y}{10}$ and $2x + 2y$ is not $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{2x + 2y}{3} = \\dfrac{z - 2y}{10} = \\dfrac{(2x + 2y) + (z - 2y)}{3 + 10}$",
                "reason": "Adding numerators and denominators: the sum of the denominators, $13$, is not $0$, so each ratio equals the sum of the numerators over the sum of the denominators."
              },
              {
                "step": "$\\dfrac{(2x + 2y) + (z - 2y)}{3 + 10} = \\dfrac{2x + z}{13}$",
                "reason": "Collecting like terms: the terms $2y$ and $-2y$ add to $0$, and $3 + 10 = 13$."
              },
              {
                "step": "$\\dfrac{2x + 2y}{3} = \\dfrac{2x + z}{13}$",
                "reason": "Transitive property: by lines 2 and 3 the first ratio and the fraction with $13$ below have one value."
              },
              {
                "step": "$\\dfrac{2x + z}{2x + 2y} = \\dfrac{13}{3}$",
                "reason": "Multiplying both sides by the same number: both sides of line 4 are multiplied by $\\dfrac{13}{2x + 2y}$, and $2x + 2y$ is not $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $\\dfrac{3x + z}{3x - 3y}$, where $\\dfrac{3y + z}{13} = \\dfrac{3x - 3y}{2}$ and $3x - 3y$ is not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "15/2",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{3x + z}{3x - 3y}$, where $\\dfrac{3y + z}{13} = \\dfrac{3x - 3y}{2}$ and $3x - 3y$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3y + z}{13} = \\dfrac{3x - 3y}{2} = \\dfrac{(3y + z) + (3x - 3y)}{13 + 2}$",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $15$, is not $0$, so each ratio equals the sum of the numerators over the sum of the denominators."
                },
                {
                  "step": "$\\dfrac{(3y + z) + (3x - 3y)}{13 + 2} = \\dfrac{3x + z}{15}$",
                  "reason": "Collecting like terms: the terms $3y$ and $-3y$ add to $0$, and $13 + 2 = 15$."
                },
                {
                  "step": "$\\dfrac{3x - 3y}{2} = \\dfrac{3x + z}{15}$",
                  "reason": "Transitive property: by lines 2 and 3 the second ratio and the fraction with $15$ below have one value."
                },
                {
                  "step": "$\\dfrac{3x + z}{3x - 3y} = \\dfrac{15}{2}$",
                  "reason": "Multiplying both sides by the same number: both sides of line 4 are multiplied by $\\dfrac{15}{3x - 3y}$, and $3x - 3y$ is not $0$."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\dfrac{5y + 3z}{4x + 3z}$, where $\\dfrac{4x + 3z}{13} = \\dfrac{5y - 4x}{9}$ and $4x + 3z$ is not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "22/13",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{5y + 3z}{4x + 3z}$, where $\\dfrac{4x + 3z}{13} = \\dfrac{5y - 4x}{9}$ and $4x + 3z$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4x + 3z}{13} = \\dfrac{5y - 4x}{9} = \\dfrac{(4x + 3z) + (5y - 4x)}{13 + 9}$",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $22$, is not $0$, so each ratio equals the sum of the numerators over the sum of the denominators."
                },
                {
                  "step": "$\\dfrac{(4x + 3z) + (5y - 4x)}{13 + 9} = \\dfrac{5y + 3z}{22}$",
                  "reason": "Collecting like terms: the terms $4x$ and $-4x$ add to $0$, and $13 + 9 = 22$."
                },
                {
                  "step": "$\\dfrac{4x + 3z}{13} = \\dfrac{5y + 3z}{22}$",
                  "reason": "Transitive property: by lines 2 and 3 the first ratio and the fraction with $22$ below have one value."
                },
                {
                  "step": "$\\dfrac{5y + 3z}{4x + 3z} = \\dfrac{22}{13}$",
                  "reason": "Multiplying both sides by the same number: both sides of line 4 are multiplied by $\\dfrac{22}{4x + 3z}$, and $4x + 3z$ is not $0$."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\dfrac{5x + 2y}{5x + 3z}$, where $\\dfrac{2y - 3z}{13} = \\dfrac{5x + 3z}{12}$ and $5x + 3z$ is not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "25/12",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{5x + 2y}{5x + 3z}$, where $\\dfrac{2y - 3z}{13} = \\dfrac{5x + 3z}{12}$ and $5x + 3z$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2y - 3z}{13} = \\dfrac{5x + 3z}{12} = \\dfrac{(2y - 3z) + (5x + 3z)}{13 + 12}$",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $25$, is not $0$, so each ratio equals the sum of the numerators over the sum of the denominators."
                },
                {
                  "step": "$\\dfrac{(2y - 3z) + (5x + 3z)}{13 + 12} = \\dfrac{5x + 2y}{25}$",
                  "reason": "Collecting like terms: the terms $3z$ and $-3z$ add to $0$, and $13 + 12 = 25$."
                },
                {
                  "step": "$\\dfrac{5x + 3z}{12} = \\dfrac{5x + 2y}{25}$",
                  "reason": "Transitive property: by lines 2 and 3 the second ratio and the fraction with $25$ below have one value."
                },
                {
                  "step": "$\\dfrac{5x + 2y}{5x + 3z} = \\dfrac{25}{12}$",
                  "reason": "Multiplying both sides by the same number: both sides of line 4 are multiplied by $\\dfrac{25}{5x + 3z}$, and $5x + 3z$ is not $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $x + y + z$, where $\\dfrac{x}{y - x + 12} = \\dfrac{y}{z - y + 6} = \\dfrac{z}{x - z + 8} = 3$.",
            "lines": [
              {
                "step": "Find $x + y + z$, where $\\dfrac{x}{y - x + 12} = \\dfrac{y}{z - y + 6} = \\dfrac{z}{x - z + 8} = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the three denominators is $(y - x + 12) + (z - y + 6) + (x - z + 8) = 26$.",
                "reason": "Collecting like terms: the terms in $x$, in $y$ and in $z$ each add to $0$, and the numbers add to $26$."
              },
              {
                "step": "Each of the three ratios equals $\\dfrac{x + y + z}{26}$.",
                "reason": "Adding numerators and denominators: the sum of the denominators is $26$ by line 2, which is not $0$, and the sum of the numerators is $x + y + z$."
              },
              {
                "step": "$\\dfrac{x + y + z}{26} = 3$",
                "reason": "Transitive property: each ratio is $3$ as given, and by line 3 each ratio is the fraction with $26$ below."
              },
              {
                "step": "$x + y + z = 78$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $26$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x + y + z$, where $\\dfrac{x}{x - y + 3} = \\dfrac{y}{y - z + 11} = \\dfrac{z}{z - x + 6} = \\dfrac{4}{3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "80/3",
              "lines": [
                {
                  "step": "Find $x + y + z$, where $\\dfrac{x}{x - y + 3} = \\dfrac{y}{y - z + 11} = \\dfrac{z}{z - x + 6} = \\dfrac{4}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the three denominators is $(x - y + 3) + (y - z + 11) + (z - x + 6) = 20$.",
                  "reason": "Collecting like terms: the terms in $x$, in $y$ and in $z$ each add to $0$, and the numbers add to $20$."
                },
                {
                  "step": "Each of the three ratios equals $\\dfrac{x + y + z}{20}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators is $20$ by line 2, which is not $0$, and the sum of the numerators is $x + y + z$."
                },
                {
                  "step": "$\\dfrac{x + y + z}{20} = \\dfrac{4}{3}$",
                  "reason": "Transitive property: each ratio is $\\dfrac{4}{3}$ as given, and by line 3 each ratio is the fraction with $20$ below."
                },
                {
                  "step": "$x + y + z = \\dfrac{80}{3}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $20$."
                }
              ]
            },
            {
              "prompt": "Find $x + y + z$, where $\\dfrac{x}{y - x + 11} = \\dfrac{y}{z - y + 9} = \\dfrac{z}{x - z - 5} = -\\dfrac{3}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-45/2",
              "lines": [
                {
                  "step": "Find $x + y + z$, where $\\dfrac{x}{y - x + 11} = \\dfrac{y}{z - y + 9} = \\dfrac{z}{x - z - 5} = -\\dfrac{3}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the three denominators is $(y - x + 11) + (z - y + 9) + (x - z - 5) = 15$.",
                  "reason": "Collecting like terms: the terms in $x$, in $y$ and in $z$ each add to $0$, and the numbers add to $15$."
                },
                {
                  "step": "Each of the three ratios equals $\\dfrac{x + y + z}{15}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators is $15$ by line 2, which is not $0$, and the sum of the numerators is $x + y + z$."
                },
                {
                  "step": "$\\dfrac{x + y + z}{15} = -\\dfrac{3}{2}$",
                  "reason": "Transitive property: each ratio is $-\\dfrac{3}{2}$ as given, and by line 3 each ratio is the fraction with $15$ below."
                },
                {
                  "step": "$x + y + z = -\\dfrac{45}{2}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $15$."
                }
              ]
            },
            {
              "prompt": "Find $x + y + z$, where $\\dfrac{x}{x - y + 7} = \\dfrac{y}{y - z + 5} = \\dfrac{z}{z - x + 11} = -\\dfrac{1}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-23/2",
              "lines": [
                {
                  "step": "Find $x + y + z$, where $\\dfrac{x}{x - y + 7} = \\dfrac{y}{y - z + 5} = \\dfrac{z}{z - x + 11} = -\\dfrac{1}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the three denominators is $(x - y + 7) + (y - z + 5) + (z - x + 11) = 23$.",
                  "reason": "Collecting like terms: the terms in $x$, in $y$ and in $z$ each add to $0$, and the numbers add to $23$."
                },
                {
                  "step": "Each of the three ratios equals $\\dfrac{x + y + z}{23}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators is $23$ by line 2, which is not $0$, and the sum of the numerators is $x + y + z$."
                },
                {
                  "step": "$\\dfrac{x + y + z}{23} = -\\dfrac{1}{2}$",
                  "reason": "Transitive property: each ratio is $-\\dfrac{1}{2}$ as given, and by line 3 each ratio is the fraction with $23$ below."
                },
                {
                  "step": "$x + y + z = -\\dfrac{23}{2}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $23$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t210-k2",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with each ratio as one fraction and the first ratio on the left: The number $x$ is to 19 as the number $y$ is to 14.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with each ratio as one fraction and the first ratio on the left: The number $x$ is to 19 as the number $y$ is to 14.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first ratio, of $x$ to $19$, is $\\dfrac{x}{19}$.",
                "reason": "Writing a sentence as an equation: each phrase before and after \"is to\" becomes its expression, and \"is to\" names their ratio, which by Ratio of two variables is their quotient."
              },
              {
                "step": "The second ratio, of $y$ to $14$, is $\\dfrac{y}{14}$.",
                "reason": "Writing a sentence as an equation: the second \"is to\" names a ratio in the same way, the quotient of what stands before it by what stands after it."
              },
              {
                "step": "$\\dfrac{x}{19} = \\dfrac{y}{14}$",
                "reason": "Writing a sentence as an equation: the word \"as\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with each ratio as one fraction and the first ratio on the left: The sum of $x$ and 11 is to $y$ as 15 is to 13.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+11)/y = 15/13",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with each ratio as one fraction and the first ratio on the left: The sum of $x$ and 11 is to $y$ as 15 is to 13.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and $11$ is $x + 11$, so the first ratio is $\\dfrac{x + 11}{y}$.",
                  "reason": "Writing a sentence as an equation: each phrase before and after \"is to\" becomes its expression, and \"is to\" names their ratio, which by Ratio of two variables is their quotient."
                },
                {
                  "step": "The second ratio, of $15$ to $13$, is $\\dfrac{15}{13}$.",
                  "reason": "Writing a sentence as an equation: the second \"is to\" names a ratio in the same way, the quotient of what stands before it by what stands after it."
                },
                {
                  "step": "$\\dfrac{x + 11}{y} = \\dfrac{15}{13}$",
                  "reason": "Writing a sentence as an equation: the word \"as\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with each ratio as one fraction and the first ratio on the left: The difference of $x$ and $y$ is to 7 as the sum of $x$ and $y$ is to 10.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-y)/7 = (x+y)/10",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with each ratio as one fraction and the first ratio on the left: The difference of $x$ and $y$ is to 7 as the sum of $x$ and $y$ is to 10.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of $x$ and $y$ is $x - y$, so the first ratio is $\\dfrac{x - y}{7}$.",
                  "reason": "Writing a sentence as an equation: each phrase before and after \"is to\" becomes its expression, and \"is to\" names their ratio, which by Ratio of two variables is their quotient."
                },
                {
                  "step": "The sum of $x$ and $y$ is $x + y$, so the second ratio is $\\dfrac{x + y}{10}$.",
                  "reason": "Writing a sentence as an equation: the second \"is to\" names a ratio in the same way, the quotient of what stands before it by what stands after it."
                },
                {
                  "step": "$\\dfrac{x - y}{7} = \\dfrac{x + y}{10}$",
                  "reason": "Writing a sentence as an equation: the word \"as\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with each ratio as one fraction and the first ratio on the left: The number $x$ is to $y$ as the sum of $x$ and 2 is to the sum of $y$ and 17.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x/y = (x+2)/(y+17)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with each ratio as one fraction and the first ratio on the left: The number $x$ is to $y$ as the sum of $x$ and 2 is to the sum of $y$ and 17.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first ratio, of $x$ to $y$, is $\\dfrac{x}{y}$.",
                  "reason": "Writing a sentence as an equation: each phrase before and after \"is to\" becomes its expression, and \"is to\" names their ratio, which by Ratio of two variables is their quotient."
                },
                {
                  "step": "The two sums are $x + 2$ and $y + 17$, so the second ratio is $\\dfrac{x + 2}{y + 17}$.",
                  "reason": "Writing a sentence as an equation: the second \"is to\" names a ratio in the same way, the quotient of what stands before it by what stands after it."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{x + 2}{y + 17}$",
                  "reason": "Writing a sentence as an equation: the word \"as\" marks the place of the equals sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t210-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working on the equal ratios $\\dfrac{x + z}{6} = \\dfrac{5x + 2y - z}{9} = \\dfrac{2z - 2x}{7}$, in which each line after line 1 is one fraction that each of the ratios equals, and write that line right.",
            "given": [
              "$\\dfrac{x + z}{6} = \\dfrac{5x + 2y - z}{9} = \\dfrac{2z - 2x}{7}$",
              "$\\dfrac{(x + z) + (5x + 2y - z) + (2z - 2x)}{6 + 9 + 7}$",
              "$\\dfrac{4x + 2y + 4z}{22}$",
              "$\\dfrac{2(2x + y + 2z)}{22}$",
              "$\\dfrac{2x + y + 2z}{11}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working on the equal ratios $\\dfrac{x + z}{6} = \\dfrac{5x + 2y - z}{9} = \\dfrac{2z - 2x}{7}$, in which each line after line 1 is one fraction that each of the ratios equals, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the ratios as given, and each line before the wrong one follows from the line before it by a rule that holds."
              },
              {
                "step": "Line 3 collects $z$, $-z$ and $2z$ as $4z$.",
                "reason": "A sign lost: the term $-z$ keeps its minus sign, so the terms in $z$ add to $2z$."
              },
              {
                "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                "reason": "The first wrong line is the first line that does not follow from the line before it."
              },
              {
                "step": "Line 3 written right is $\\dfrac{4x + 2y + 2z}{22}$.",
                "reason": "Collecting like terms: the terms in each letter of line 2 are added with their signs, and the denominators add to $22$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working on the equal ratios $\\dfrac{x + 3y}{5} = \\dfrac{2x + 3y + 4z}{7} = \\dfrac{x - 4y - 2z}{12}$, in which each line after line 1 is one fraction that each of the ratios equals, and write that line right.",
              "given": [
                "$\\dfrac{x + 3y}{5} = \\dfrac{2x + 3y + 4z}{7} = \\dfrac{x - 4y - 2z}{12}$",
                "$\\dfrac{(x + 3y) + (2x + 3y + 4z) + (x - 4y + 2z)}{5 + 7 + 12}$",
                "$\\dfrac{4x + 2y + 6z}{24}$",
                "$\\dfrac{2(2x + y + 3z)}{24}$",
                "$\\dfrac{2x + y + 3z}{12}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: ((x+3*y)+(2*x+3*y+4*z)+(x-4*y-2*z))/(5+7+12)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the equal ratios $\\dfrac{x + 3y}{5} = \\dfrac{2x + 3y + 4z}{7} = \\dfrac{x - 4y - 2z}{12}$, in which each line after line 1 is one fraction that each of the ratios equals, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the ratios as given, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 copies the numerator $x - 4y - 2z$ of line 1 as $x - 4y + 2z$.",
                  "reason": "A sign lost: the term $-2z$ of line 1 has lost its minus sign. Adding numerators and denominators adds the numerators as they stand in line 1."
                },
                {
                  "step": "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{(x + 3y) + (2x + 3y + 4z) + (x - 4y - 2z)}{5 + 7 + 12}$.",
                  "reason": "Adding numerators and denominators: the numerators of line 1 are added as they stand, each term with its sign, and so are the denominators."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working on the equal ratios $\\dfrac{3x + y}{13} = \\dfrac{3x + 2y - 3z}{3} = \\dfrac{5z - 2x - 5y}{12}$, in which each line after line 1 is one fraction that each of the ratios equals, and write that line right.",
              "given": [
                "$\\dfrac{3x + y}{13} = \\dfrac{3x + 2y - 3z}{3} = \\dfrac{5z - 2x - 5y}{12}$",
                "$\\dfrac{(3x + y) + (3x + 2y - 3z) + (5z - 2x - 5y)}{13 + 3 + 12}$",
                "$\\dfrac{4x - 2y + 2z}{28}$",
                "$\\dfrac{2(2x + y + z)}{28}$",
                "$\\dfrac{2x + y + z}{14}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*(2*x-y+z)/28",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the equal ratios $\\dfrac{3x + y}{13} = \\dfrac{3x + 2y - 3z}{3} = \\dfrac{5z - 2x - 5y}{12}$, in which each line after line 1 is one fraction that each of the ratios equals, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the ratios as given, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 gives the term $y$ in the bracket the sign $+$.",
                  "reason": "A sign lost: the term $-2y$ of line 3 is $2$ times $-y$, so the bracket holds $-y$ with its minus sign."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{2(2x - y + z)}{28}$.",
                  "reason": "Taking out a common factor: each term of the numerator of line 3 is $2$ times a term of the bracket, with the same sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working on the equal ratios $\\dfrac{x + 4y}{11} = \\dfrac{3x + y + z}{4} = \\dfrac{3z - 2x - 3y}{3}$, in which each line after line 1 is one fraction that each of the ratios equals, and write that line right.",
              "given": [
                "$\\dfrac{x + 4y}{11} = \\dfrac{3x + y + z}{4} = \\dfrac{3z - 2x - 3y}{3}$",
                "$\\dfrac{(x + 4y) + (3x + y + z) + (3z - 2x - 3y)}{11 + 4 + 3}$",
                "$\\dfrac{2x + 8y + 4z}{18}$",
                "$\\dfrac{2(x + 4y + 2z)}{18}$",
                "$\\dfrac{x + 4y + 2z}{9}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (2*x+2*y+4*z)/18",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the equal ratios $\\dfrac{x + 4y}{11} = \\dfrac{3x + y + z}{4} = \\dfrac{3z - 2x - 3y}{3}$, in which each line after line 1 is one fraction that each of the ratios equals, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the ratios as given, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 collects $4y$, $y$ and $-3y$ as $8y$.",
                  "reason": "A sign lost: the term $-3y$ keeps its minus sign, so the terms in $y$ add to $2y$."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{2x + 2y + 4z}{18}$.",
                  "reason": "Collecting like terms: the terms in each letter of line 2 are added with their signs, and the denominators add to $18$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t210-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the expression in $a$ alone that $\\dfrac{5x_1 + 2y_1}{3x_1 - 7y_1}$ and $\\dfrac{5x_2 + 2y_2}{3x_2 - 7y_2}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ and no denominator is $0$.",
            "lines": [
              {
                "step": "Find the expression in $a$ alone that $\\dfrac{5x_1 + 2y_1}{3x_1 - 7y_1}$ and $\\dfrac{5x_2 + 2y_2}{3x_2 - 7y_2}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ and no denominator is $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
                "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
              },
              {
                "step": "$\\dfrac{5x_1 + 2y_1}{3x_1 - 7y_1} = \\dfrac{5ay_1 + 2y_1}{3ay_1 - 7y_1}$",
                "reason": "Substituting a value: $ay_1$ stands in the place of $x_1$."
              },
              {
                "step": "$\\dfrac{5ay_1 + 2y_1}{3ay_1 - 7y_1} = \\dfrac{y_1(5a + 2)}{y_1(3a - 7)}$",
                "reason": "Taking out a common factor: $y_1$ is a factor of every term above and below."
              },
              {
                "step": "$\\dfrac{y_1(5a + 2)}{y_1(3a - 7)} = \\dfrac{5a + 2}{3a - 7}$",
                "reason": "Cancelling a common factor: $y_1$ is not $0$, since it is a denominator of the given ratios."
              },
              {
                "step": "$\\dfrac{5x_2 + 2y_2}{3x_2 - 7y_2} = \\dfrac{5ay_2 + 2y_2}{3ay_2 - 7y_2}$",
                "reason": "Substituting a value: $ay_2$ stands in the place of $x_2$."
              },
              {
                "step": "$\\dfrac{5ay_2 + 2y_2}{3ay_2 - 7y_2} = \\dfrac{y_2(5a + 2)}{y_2(3a - 7)}$",
                "reason": "Taking out a common factor: $y_2$ is a factor of every term above and below."
              },
              {
                "step": "$\\dfrac{y_2(5a + 2)}{y_2(3a - 7)} = \\dfrac{5a + 2}{3a - 7}$",
                "reason": "Cancelling a common factor: $y_2$ is not $0$, since it is a denominator of the given ratios."
              },
              {
                "step": "So $\\dfrac{5x_1 + 2y_1}{3x_1 - 7y_1}$ and $\\dfrac{5x_2 + 2y_2}{3x_2 - 7y_2}$ both equal $\\dfrac{5a + 2}{3a - 7}$.",
                "reason": "Transitive property: lines 5 and 8 give the two quotients one value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression in $a$ alone that $\\dfrac{5x_1 - 4y_1}{5x_1 - 2y_1}$ and $\\dfrac{5x_2 - 4y_2}{5x_2 - 2y_2}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ and no denominator is $0$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(5*a-4)/(5*a-2)",
              "lines": [
                {
                  "step": "Find the expression in $a$ alone that $\\dfrac{5x_1 - 4y_1}{5x_1 - 2y_1}$ and $\\dfrac{5x_2 - 4y_2}{5x_2 - 2y_2}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ and no denominator is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "$\\dfrac{5x_1 - 4y_1}{5x_1 - 2y_1} = \\dfrac{5ay_1 - 4y_1}{5ay_1 - 2y_1}$",
                  "reason": "Substituting a value: $ay_1$ stands in the place of $x_1$."
                },
                {
                  "step": "$\\dfrac{5ay_1 - 4y_1}{5ay_1 - 2y_1} = \\dfrac{y_1(5a - 4)}{y_1(5a - 2)}$",
                  "reason": "Taking out a common factor: $y_1$ is a factor of every term above and below."
                },
                {
                  "step": "$\\dfrac{y_1(5a - 4)}{y_1(5a - 2)} = \\dfrac{5a - 4}{5a - 2}$",
                  "reason": "Cancelling a common factor: $y_1$ is not $0$, since it is a denominator of the given ratios."
                },
                {
                  "step": "$\\dfrac{5x_2 - 4y_2}{5x_2 - 2y_2} = \\dfrac{5ay_2 - 4y_2}{5ay_2 - 2y_2}$",
                  "reason": "Substituting a value: $ay_2$ stands in the place of $x_2$."
                },
                {
                  "step": "$\\dfrac{5ay_2 - 4y_2}{5ay_2 - 2y_2} = \\dfrac{y_2(5a - 4)}{y_2(5a - 2)}$",
                  "reason": "Taking out a common factor: $y_2$ is a factor of every term above and below."
                },
                {
                  "step": "$\\dfrac{y_2(5a - 4)}{y_2(5a - 2)} = \\dfrac{5a - 4}{5a - 2}$",
                  "reason": "Cancelling a common factor: $y_2$ is not $0$, since it is a denominator of the given ratios."
                },
                {
                  "step": "So $\\dfrac{5x_1 - 4y_1}{5x_1 - 2y_1}$ and $\\dfrac{5x_2 - 4y_2}{5x_2 - 2y_2}$ both equal $\\dfrac{5a - 4}{5a - 2}$.",
                  "reason": "Transitive property: lines 5 and 8 give the two quotients one value."
                }
              ]
            },
            {
              "prompt": "Find the expression in $a$ alone that $\\dfrac{x_1 + 3y_1}{5x_1 - 3y_1}$ and $\\dfrac{x_2 + 3y_2}{5x_2 - 3y_2}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ and no denominator is $0$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(a+3)/(5*a-3)",
              "lines": [
                {
                  "step": "Find the expression in $a$ alone that $\\dfrac{x_1 + 3y_1}{5x_1 - 3y_1}$ and $\\dfrac{x_2 + 3y_2}{5x_2 - 3y_2}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ and no denominator is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "$\\dfrac{x_1 + 3y_1}{5x_1 - 3y_1} = \\dfrac{ay_1 + 3y_1}{5ay_1 - 3y_1}$",
                  "reason": "Substituting a value: $ay_1$ stands in the place of $x_1$."
                },
                {
                  "step": "$\\dfrac{ay_1 + 3y_1}{5ay_1 - 3y_1} = \\dfrac{y_1(a + 3)}{y_1(5a - 3)}$",
                  "reason": "Taking out a common factor: $y_1$ is a factor of every term above and below."
                },
                {
                  "step": "$\\dfrac{y_1(a + 3)}{y_1(5a - 3)} = \\dfrac{a + 3}{5a - 3}$",
                  "reason": "Cancelling a common factor: $y_1$ is not $0$, since it is a denominator of the given ratios."
                },
                {
                  "step": "$\\dfrac{x_2 + 3y_2}{5x_2 - 3y_2} = \\dfrac{ay_2 + 3y_2}{5ay_2 - 3y_2}$",
                  "reason": "Substituting a value: $ay_2$ stands in the place of $x_2$."
                },
                {
                  "step": "$\\dfrac{ay_2 + 3y_2}{5ay_2 - 3y_2} = \\dfrac{y_2(a + 3)}{y_2(5a - 3)}$",
                  "reason": "Taking out a common factor: $y_2$ is a factor of every term above and below."
                },
                {
                  "step": "$\\dfrac{y_2(a + 3)}{y_2(5a - 3)} = \\dfrac{a + 3}{5a - 3}$",
                  "reason": "Cancelling a common factor: $y_2$ is not $0$, since it is a denominator of the given ratios."
                },
                {
                  "step": "So $\\dfrac{x_1 + 3y_1}{5x_1 - 3y_1}$ and $\\dfrac{x_2 + 3y_2}{5x_2 - 3y_2}$ both equal $\\dfrac{a + 3}{5a - 3}$.",
                  "reason": "Transitive property: lines 5 and 8 give the two quotients one value."
                }
              ]
            },
            {
              "prompt": "Find the expression in $a$ alone that $\\dfrac{3x_1 + 2y_1}{6x_1 + 5y_1}$ and $\\dfrac{3x_2 + 2y_2}{6x_2 + 5y_2}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ and no denominator is $0$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*a+2)/(6*a+5)",
              "lines": [
                {
                  "step": "Find the expression in $a$ alone that $\\dfrac{3x_1 + 2y_1}{6x_1 + 5y_1}$ and $\\dfrac{3x_2 + 2y_2}{6x_2 + 5y_2}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ and no denominator is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "$\\dfrac{3x_1 + 2y_1}{6x_1 + 5y_1} = \\dfrac{3ay_1 + 2y_1}{6ay_1 + 5y_1}$",
                  "reason": "Substituting a value: $ay_1$ stands in the place of $x_1$."
                },
                {
                  "step": "$\\dfrac{3ay_1 + 2y_1}{6ay_1 + 5y_1} = \\dfrac{y_1(3a + 2)}{y_1(6a + 5)}$",
                  "reason": "Taking out a common factor: $y_1$ is a factor of every term above and below."
                },
                {
                  "step": "$\\dfrac{y_1(3a + 2)}{y_1(6a + 5)} = \\dfrac{3a + 2}{6a + 5}$",
                  "reason": "Cancelling a common factor: $y_1$ is not $0$, since it is a denominator of the given ratios."
                },
                {
                  "step": "$\\dfrac{3x_2 + 2y_2}{6x_2 + 5y_2} = \\dfrac{3ay_2 + 2y_2}{6ay_2 + 5y_2}$",
                  "reason": "Substituting a value: $ay_2$ stands in the place of $x_2$."
                },
                {
                  "step": "$\\dfrac{3ay_2 + 2y_2}{6ay_2 + 5y_2} = \\dfrac{y_2(3a + 2)}{y_2(6a + 5)}$",
                  "reason": "Taking out a common factor: $y_2$ is a factor of every term above and below."
                },
                {
                  "step": "$\\dfrac{y_2(3a + 2)}{y_2(6a + 5)} = \\dfrac{3a + 2}{6a + 5}$",
                  "reason": "Cancelling a common factor: $y_2$ is not $0$, since it is a denominator of the given ratios."
                },
                {
                  "step": "So $\\dfrac{3x_1 + 2y_1}{6x_1 + 5y_1}$ and $\\dfrac{3x_2 + 2y_2}{6x_2 + 5y_2}$ both equal $\\dfrac{3a + 2}{6a + 5}$.",
                  "reason": "Transitive property: lines 5 and 8 give the two quotients one value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression in $x$ and $z$ alone equal to $\\dfrac{x^2 - 6y^2}{y^2 - 6z^2}$, where $\\dfrac{x}{y} = \\dfrac{y}{z}$ and no denominator is $0$.",
            "lines": [
              {
                "step": "Find the expression in $x$ and $z$ alone equal to $\\dfrac{x^2 - 6y^2}{y^2 - 6z^2}$, where $\\dfrac{x}{y} = \\dfrac{y}{z}$ and no denominator is $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $a$ for the common value of the two ratios, $x = ay$ and $y = az$.",
                "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
              },
              {
                "step": "So $x = a \\cdot az = a^2z$.",
                "reason": "Substituting a value: $az$ stands in the place of $y$ in $x = ay$."
              },
              {
                "step": "$\\dfrac{x^2 - 6y^2}{y^2 - 6z^2} = \\dfrac{(a^2z)^2 - 6(az)^2}{(az)^2 - 6z^2}$",
                "reason": "Substituting a value: $a^2z$ stands in the place of $x$ and $az$ in the place of $y$."
              },
              {
                "step": "$\\dfrac{(a^2z)^2 - 6(az)^2}{(az)^2 - 6z^2} = \\dfrac{a^4z^2 - 6a^2z^2}{a^2z^2 - 6z^2}$",
                "reason": "Power of a product: each power and each product is multiplied out, with $(a^2z)^2 = a^4z^2$ and $(az)^2 = a^2z^2$."
              },
              {
                "step": "$\\dfrac{a^4z^2 - 6a^2z^2}{a^2z^2 - 6z^2} = \\dfrac{a^2z^2(a^2 - 6)}{z^2(a^2 - 6)}$",
                "reason": "Taking out a common factor: $a^2z^2$ is a factor of every term above and $z^2$ of every term below."
              },
              {
                "step": "$\\dfrac{a^2z^2(a^2 - 6)}{z^2(a^2 - 6)} = a^2$",
                "reason": "Cancelling a common factor: $z^2(a^2 - 6)$ is the denominator $y^2 - 6z^2$, which is not $0$."
              },
              {
                "step": "$\\dfrac{x}{z} = \\dfrac{a^2z}{z}$",
                "reason": "Substituting a value: $a^2z$ stands in the place of $x$."
              },
              {
                "step": "$\\dfrac{a^2z}{z} = a^2$",
                "reason": "Cancelling a common factor: $z$ is not $0$, since no denominator is $0$."
              },
              {
                "step": "So $\\dfrac{x^2 - 6y^2}{y^2 - 6z^2} = \\dfrac{x}{z}$.",
                "reason": "Transitive property: by lines 4 to 7 and lines 8 and 9 the two sides have one value, $a^2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression in $y$ and $z$ alone equal to $\\dfrac{2x^2 + 5y^2}{2y^2 + 5z^2}$, where $\\dfrac{x}{y} = \\dfrac{y}{z}$ and no denominator is $0$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "y^2/z^2",
              "lines": [
                {
                  "step": "Find the expression in $y$ and $z$ alone equal to $\\dfrac{2x^2 + 5y^2}{2y^2 + 5z^2}$, where $\\dfrac{x}{y} = \\dfrac{y}{z}$ and no denominator is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x = ay$ and $y = az$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "So $x = a \\cdot az = a^2z$.",
                  "reason": "Substituting a value: $az$ stands in the place of $y$ in $x = ay$."
                },
                {
                  "step": "$\\dfrac{2x^2 + 5y^2}{2y^2 + 5z^2} = \\dfrac{2(a^2z)^2 + 5(az)^2}{2(az)^2 + 5z^2}$",
                  "reason": "Substituting a value: $a^2z$ stands in the place of $x$ and $az$ in the place of $y$."
                },
                {
                  "step": "$\\dfrac{2(a^2z)^2 + 5(az)^2}{2(az)^2 + 5z^2} = \\dfrac{2a^4z^2 + 5a^2z^2}{2a^2z^2 + 5z^2}$",
                  "reason": "Power of a product: each power and each product is multiplied out, with $(a^2z)^2 = a^4z^2$ and $(az)^2 = a^2z^2$."
                },
                {
                  "step": "$\\dfrac{2a^4z^2 + 5a^2z^2}{2a^2z^2 + 5z^2} = \\dfrac{a^2z^2(2a^2 + 5)}{z^2(2a^2 + 5)}$",
                  "reason": "Taking out a common factor: $a^2z^2$ is a factor of every term above and $z^2$ of every term below."
                },
                {
                  "step": "$\\dfrac{a^2z^2(2a^2 + 5)}{z^2(2a^2 + 5)} = a^2$",
                  "reason": "Cancelling a common factor: $z^2(2a^2 + 5)$ is the denominator $2y^2 + 5z^2$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{y^2}{z^2} = \\dfrac{a^2z^2}{z^2}$",
                  "reason": "Substituting a value: $az$ stands in the place of $y$, with $(az)^2 = a^2z^2$."
                },
                {
                  "step": "$\\dfrac{a^2z^2}{z^2} = a^2$",
                  "reason": "Cancelling a common factor: $z^2$ is not $0$, since no denominator is $0$."
                },
                {
                  "step": "So $\\dfrac{2x^2 + 5y^2}{2y^2 + 5z^2} = \\dfrac{y^2}{z^2}$.",
                  "reason": "Transitive property: by lines 4 to 7 and lines 8 and 9 the two sides have one value, $a^2$."
                }
              ]
            },
            {
              "prompt": "Find the expression in $x$ and $y$ alone equal to $\\dfrac{x^2 - 4y^2}{y^2 - 4z^2}$, where $\\dfrac{x}{y} = \\dfrac{y}{z}$ and no denominator is $0$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "x^2/y^2",
              "lines": [
                {
                  "step": "Find the expression in $x$ and $y$ alone equal to $\\dfrac{x^2 - 4y^2}{y^2 - 4z^2}$, where $\\dfrac{x}{y} = \\dfrac{y}{z}$ and no denominator is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x = ay$ and $y = az$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "So $x = a \\cdot az = a^2z$.",
                  "reason": "Substituting a value: $az$ stands in the place of $y$ in $x = ay$."
                },
                {
                  "step": "$\\dfrac{x^2 - 4y^2}{y^2 - 4z^2} = \\dfrac{(a^2z)^2 - 4(az)^2}{(az)^2 - 4z^2}$",
                  "reason": "Substituting a value: $a^2z$ stands in the place of $x$ and $az$ in the place of $y$."
                },
                {
                  "step": "$\\dfrac{(a^2z)^2 - 4(az)^2}{(az)^2 - 4z^2} = \\dfrac{a^4z^2 - 4a^2z^2}{a^2z^2 - 4z^2}$",
                  "reason": "Power of a product: each power and each product is multiplied out, with $(a^2z)^2 = a^4z^2$ and $(az)^2 = a^2z^2$."
                },
                {
                  "step": "$\\dfrac{a^4z^2 - 4a^2z^2}{a^2z^2 - 4z^2} = \\dfrac{a^2z^2(a^2 - 4)}{z^2(a^2 - 4)}$",
                  "reason": "Taking out a common factor: $a^2z^2$ is a factor of every term above and $z^2$ of every term below."
                },
                {
                  "step": "$\\dfrac{a^2z^2(a^2 - 4)}{z^2(a^2 - 4)} = a^2$",
                  "reason": "Cancelling a common factor: $z^2(a^2 - 4)$ is the denominator $y^2 - 4z^2$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{x^2}{y^2} = \\dfrac{a^2y^2}{y^2}$",
                  "reason": "Substituting a value: $ay$ stands in the place of $x$, with $(ay)^2 = a^2y^2$."
                },
                {
                  "step": "$\\dfrac{a^2y^2}{y^2} = a^2$",
                  "reason": "Cancelling a common factor: $y^2$ is not $0$, since no denominator is $0$."
                },
                {
                  "step": "So $\\dfrac{x^2 - 4y^2}{y^2 - 4z^2} = \\dfrac{x^2}{y^2}$.",
                  "reason": "Transitive property: by lines 4 to 7 and lines 8 and 9 the two sides have one value, $a^2$."
                }
              ]
            },
            {
              "prompt": "Find the expression in $x$ and $z$ alone equal to $\\dfrac{x^2 - 2y^2}{y^2 - 2z^2}$, where $\\dfrac{x}{y} = \\dfrac{y}{z}$ and no denominator is $0$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "x/z",
              "lines": [
                {
                  "step": "Find the expression in $x$ and $z$ alone equal to $\\dfrac{x^2 - 2y^2}{y^2 - 2z^2}$, where $\\dfrac{x}{y} = \\dfrac{y}{z}$ and no denominator is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x = ay$ and $y = az$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "So $x = a \\cdot az = a^2z$.",
                  "reason": "Substituting a value: $az$ stands in the place of $y$ in $x = ay$."
                },
                {
                  "step": "$\\dfrac{x^2 - 2y^2}{y^2 - 2z^2} = \\dfrac{(a^2z)^2 - 2(az)^2}{(az)^2 - 2z^2}$",
                  "reason": "Substituting a value: $a^2z$ stands in the place of $x$ and $az$ in the place of $y$."
                },
                {
                  "step": "$\\dfrac{(a^2z)^2 - 2(az)^2}{(az)^2 - 2z^2} = \\dfrac{a^4z^2 - 2a^2z^2}{a^2z^2 - 2z^2}$",
                  "reason": "Power of a product: each power and each product is multiplied out, with $(a^2z)^2 = a^4z^2$ and $(az)^2 = a^2z^2$."
                },
                {
                  "step": "$\\dfrac{a^4z^2 - 2a^2z^2}{a^2z^2 - 2z^2} = \\dfrac{a^2z^2(a^2 - 2)}{z^2(a^2 - 2)}$",
                  "reason": "Taking out a common factor: $a^2z^2$ is a factor of every term above and $z^2$ of every term below."
                },
                {
                  "step": "$\\dfrac{a^2z^2(a^2 - 2)}{z^2(a^2 - 2)} = a^2$",
                  "reason": "Cancelling a common factor: $z^2(a^2 - 2)$ is the denominator $y^2 - 2z^2$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{a^2z}{z}$",
                  "reason": "Substituting a value: $a^2z$ stands in the place of $x$."
                },
                {
                  "step": "$\\dfrac{a^2z}{z} = a^2$",
                  "reason": "Cancelling a common factor: $z$ is not $0$, since no denominator is $0$."
                },
                {
                  "step": "So $\\dfrac{x^2 - 2y^2}{y^2 - 2z^2} = \\dfrac{x}{z}$.",
                  "reason": "Transitive property: by lines 4 to 7 and lines 8 and 9 the two sides have one value, $a^2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression in $a$ alone that $\\dfrac{4x_1 - 5y_1}{\\sqrt{7x_1^2 + 3y_1^2}}$ and $\\dfrac{4x_2 - 5y_2}{\\sqrt{7x_2^2 + 3y_2^2}}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ of positive numbers $x_1$, $y_1$, $x_2$ and $y_2$.",
            "lines": [
              {
                "step": "Find the expression in $a$ alone that $\\dfrac{4x_1 - 5y_1}{\\sqrt{7x_1^2 + 3y_1^2}}$ and $\\dfrac{4x_2 - 5y_2}{\\sqrt{7x_2^2 + 3y_2^2}}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ of positive numbers $x_1$, $y_1$, $x_2$ and $y_2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
                "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
              },
              {
                "step": "$\\dfrac{4x_1 - 5y_1}{\\sqrt{7x_1^2 + 3y_1^2}} = \\dfrac{4ay_1 - 5y_1}{\\sqrt{7a^2y_1^2 + 3y_1^2}}$",
                "reason": "Substituting a value: $ay_1$ stands in the place of $x_1$, with $(ay_1)^2 = a^2y_1^2$."
              },
              {
                "step": "$\\dfrac{4ay_1 - 5y_1}{\\sqrt{7a^2y_1^2 + 3y_1^2}} = \\dfrac{y_1(4a - 5)}{\\sqrt{y_1^2(7a^2 + 3)}}$",
                "reason": "Taking out a common factor: $y_1$ is a factor of every term above, and $y_1^2$ of every term under the root."
              },
              {
                "step": "$\\dfrac{y_1(4a - 5)}{\\sqrt{y_1^2(7a^2 + 3)}} = \\dfrac{y_1(4a - 5)}{y_1\\sqrt{7a^2 + 3}}$",
                "reason": "Root of a product: the root of $y_1^2$ times the other factor is the root of $y_1^2$ times the root of the other factor, and the root of $y_1^2$ is $y_1$, since $y_1$ is positive."
              },
              {
                "step": "$\\dfrac{y_1(4a - 5)}{y_1\\sqrt{7a^2 + 3}} = \\dfrac{4a - 5}{\\sqrt{7a^2 + 3}}$",
                "reason": "Cancelling a common factor: $y_1$ is positive, so it is not $0$."
              },
              {
                "step": "$\\dfrac{4x_2 - 5y_2}{\\sqrt{7x_2^2 + 3y_2^2}} = \\dfrac{4ay_2 - 5y_2}{\\sqrt{7a^2y_2^2 + 3y_2^2}}$",
                "reason": "Substituting a value: $ay_2$ stands in the place of $x_2$, with $(ay_2)^2 = a^2y_2^2$."
              },
              {
                "step": "$\\dfrac{4ay_2 - 5y_2}{\\sqrt{7a^2y_2^2 + 3y_2^2}} = \\dfrac{y_2(4a - 5)}{\\sqrt{y_2^2(7a^2 + 3)}}$",
                "reason": "Taking out a common factor: $y_2$ is a factor of every term above, and $y_2^2$ of every term under the root."
              },
              {
                "step": "$\\dfrac{y_2(4a - 5)}{\\sqrt{y_2^2(7a^2 + 3)}} = \\dfrac{y_2(4a - 5)}{y_2\\sqrt{7a^2 + 3}}$",
                "reason": "Root of a product: the root of $y_2^2$ times the other factor is the root of $y_2^2$ times the root of the other factor, and the root of $y_2^2$ is $y_2$, since $y_2$ is positive."
              },
              {
                "step": "$\\dfrac{y_2(4a - 5)}{y_2\\sqrt{7a^2 + 3}} = \\dfrac{4a - 5}{\\sqrt{7a^2 + 3}}$",
                "reason": "Cancelling a common factor: $y_2$ is positive, so it is not $0$."
              },
              {
                "step": "So $\\dfrac{4x_1 - 5y_1}{\\sqrt{7x_1^2 + 3y_1^2}}$ and $\\dfrac{4x_2 - 5y_2}{\\sqrt{7x_2^2 + 3y_2^2}}$ both equal $\\dfrac{4a - 5}{\\sqrt{7a^2 + 3}}$.",
                "reason": "Transitive property: lines 6 and 10 give the two quotients one value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression in $a$ alone that $\\dfrac{x_1 - 6y_1}{\\sqrt{2x_1^2 + 5y_1^2}}$ and $\\dfrac{x_2 - 6y_2}{\\sqrt{2x_2^2 + 5y_2^2}}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ of positive numbers $x_1$, $y_1$, $x_2$ and $y_2$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(a-6)/sqrt(2*a^2+5)",
              "lines": [
                {
                  "step": "Find the expression in $a$ alone that $\\dfrac{x_1 - 6y_1}{\\sqrt{2x_1^2 + 5y_1^2}}$ and $\\dfrac{x_2 - 6y_2}{\\sqrt{2x_2^2 + 5y_2^2}}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ of positive numbers $x_1$, $y_1$, $x_2$ and $y_2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "$\\dfrac{x_1 - 6y_1}{\\sqrt{2x_1^2 + 5y_1^2}} = \\dfrac{ay_1 - 6y_1}{\\sqrt{2a^2y_1^2 + 5y_1^2}}$",
                  "reason": "Substituting a value: $ay_1$ stands in the place of $x_1$, with $(ay_1)^2 = a^2y_1^2$."
                },
                {
                  "step": "$\\dfrac{ay_1 - 6y_1}{\\sqrt{2a^2y_1^2 + 5y_1^2}} = \\dfrac{y_1(a - 6)}{\\sqrt{y_1^2(2a^2 + 5)}}$",
                  "reason": "Taking out a common factor: $y_1$ is a factor of every term above, and $y_1^2$ of every term under the root."
                },
                {
                  "step": "$\\dfrac{y_1(a - 6)}{\\sqrt{y_1^2(2a^2 + 5)}} = \\dfrac{y_1(a - 6)}{y_1\\sqrt{2a^2 + 5}}$",
                  "reason": "Root of a product: the root of $y_1^2$ times the other factor is the root of $y_1^2$ times the root of the other factor, and the root of $y_1^2$ is $y_1$, since $y_1$ is positive."
                },
                {
                  "step": "$\\dfrac{y_1(a - 6)}{y_1\\sqrt{2a^2 + 5}} = \\dfrac{a - 6}{\\sqrt{2a^2 + 5}}$",
                  "reason": "Cancelling a common factor: $y_1$ is positive, so it is not $0$."
                },
                {
                  "step": "$\\dfrac{x_2 - 6y_2}{\\sqrt{2x_2^2 + 5y_2^2}} = \\dfrac{ay_2 - 6y_2}{\\sqrt{2a^2y_2^2 + 5y_2^2}}$",
                  "reason": "Substituting a value: $ay_2$ stands in the place of $x_2$, with $(ay_2)^2 = a^2y_2^2$."
                },
                {
                  "step": "$\\dfrac{ay_2 - 6y_2}{\\sqrt{2a^2y_2^2 + 5y_2^2}} = \\dfrac{y_2(a - 6)}{\\sqrt{y_2^2(2a^2 + 5)}}$",
                  "reason": "Taking out a common factor: $y_2$ is a factor of every term above, and $y_2^2$ of every term under the root."
                },
                {
                  "step": "$\\dfrac{y_2(a - 6)}{\\sqrt{y_2^2(2a^2 + 5)}} = \\dfrac{y_2(a - 6)}{y_2\\sqrt{2a^2 + 5}}$",
                  "reason": "Root of a product: the root of $y_2^2$ times the other factor is the root of $y_2^2$ times the root of the other factor, and the root of $y_2^2$ is $y_2$, since $y_2$ is positive."
                },
                {
                  "step": "$\\dfrac{y_2(a - 6)}{y_2\\sqrt{2a^2 + 5}} = \\dfrac{a - 6}{\\sqrt{2a^2 + 5}}$",
                  "reason": "Cancelling a common factor: $y_2$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\dfrac{x_1 - 6y_1}{\\sqrt{2x_1^2 + 5y_1^2}}$ and $\\dfrac{x_2 - 6y_2}{\\sqrt{2x_2^2 + 5y_2^2}}$ both equal $\\dfrac{a - 6}{\\sqrt{2a^2 + 5}}$.",
                  "reason": "Transitive property: lines 6 and 10 give the two quotients one value."
                }
              ]
            },
            {
              "prompt": "Find the expression in $a$ alone that $\\dfrac{5x_1 + 3y_1}{\\sqrt{6x_1^2 + 5y_1^2}}$ and $\\dfrac{5x_2 + 3y_2}{\\sqrt{6x_2^2 + 5y_2^2}}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ of positive numbers $x_1$, $y_1$, $x_2$ and $y_2$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(5*a+3)/sqrt(6*a^2+5)",
              "lines": [
                {
                  "step": "Find the expression in $a$ alone that $\\dfrac{5x_1 + 3y_1}{\\sqrt{6x_1^2 + 5y_1^2}}$ and $\\dfrac{5x_2 + 3y_2}{\\sqrt{6x_2^2 + 5y_2^2}}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ of positive numbers $x_1$, $y_1$, $x_2$ and $y_2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "$\\dfrac{5x_1 + 3y_1}{\\sqrt{6x_1^2 + 5y_1^2}} = \\dfrac{5ay_1 + 3y_1}{\\sqrt{6a^2y_1^2 + 5y_1^2}}$",
                  "reason": "Substituting a value: $ay_1$ stands in the place of $x_1$, with $(ay_1)^2 = a^2y_1^2$."
                },
                {
                  "step": "$\\dfrac{5ay_1 + 3y_1}{\\sqrt{6a^2y_1^2 + 5y_1^2}} = \\dfrac{y_1(5a + 3)}{\\sqrt{y_1^2(6a^2 + 5)}}$",
                  "reason": "Taking out a common factor: $y_1$ is a factor of every term above, and $y_1^2$ of every term under the root."
                },
                {
                  "step": "$\\dfrac{y_1(5a + 3)}{\\sqrt{y_1^2(6a^2 + 5)}} = \\dfrac{y_1(5a + 3)}{y_1\\sqrt{6a^2 + 5}}$",
                  "reason": "Root of a product: the root of $y_1^2$ times the other factor is the root of $y_1^2$ times the root of the other factor, and the root of $y_1^2$ is $y_1$, since $y_1$ is positive."
                },
                {
                  "step": "$\\dfrac{y_1(5a + 3)}{y_1\\sqrt{6a^2 + 5}} = \\dfrac{5a + 3}{\\sqrt{6a^2 + 5}}$",
                  "reason": "Cancelling a common factor: $y_1$ is positive, so it is not $0$."
                },
                {
                  "step": "$\\dfrac{5x_2 + 3y_2}{\\sqrt{6x_2^2 + 5y_2^2}} = \\dfrac{5ay_2 + 3y_2}{\\sqrt{6a^2y_2^2 + 5y_2^2}}$",
                  "reason": "Substituting a value: $ay_2$ stands in the place of $x_2$, with $(ay_2)^2 = a^2y_2^2$."
                },
                {
                  "step": "$\\dfrac{5ay_2 + 3y_2}{\\sqrt{6a^2y_2^2 + 5y_2^2}} = \\dfrac{y_2(5a + 3)}{\\sqrt{y_2^2(6a^2 + 5)}}$",
                  "reason": "Taking out a common factor: $y_2$ is a factor of every term above, and $y_2^2$ of every term under the root."
                },
                {
                  "step": "$\\dfrac{y_2(5a + 3)}{\\sqrt{y_2^2(6a^2 + 5)}} = \\dfrac{y_2(5a + 3)}{y_2\\sqrt{6a^2 + 5}}$",
                  "reason": "Root of a product: the root of $y_2^2$ times the other factor is the root of $y_2^2$ times the root of the other factor, and the root of $y_2^2$ is $y_2$, since $y_2$ is positive."
                },
                {
                  "step": "$\\dfrac{y_2(5a + 3)}{y_2\\sqrt{6a^2 + 5}} = \\dfrac{5a + 3}{\\sqrt{6a^2 + 5}}$",
                  "reason": "Cancelling a common factor: $y_2$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\dfrac{5x_1 + 3y_1}{\\sqrt{6x_1^2 + 5y_1^2}}$ and $\\dfrac{5x_2 + 3y_2}{\\sqrt{6x_2^2 + 5y_2^2}}$ both equal $\\dfrac{5a + 3}{\\sqrt{6a^2 + 5}}$.",
                  "reason": "Transitive property: lines 6 and 10 give the two quotients one value."
                }
              ]
            },
            {
              "prompt": "Find the expression in $a$ alone that $\\dfrac{x_1 + 4y_1}{\\sqrt{x_1^2 + 3y_1^2}}$ and $\\dfrac{x_2 + 4y_2}{\\sqrt{x_2^2 + 3y_2^2}}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ of positive numbers $x_1$, $y_1$, $x_2$ and $y_2$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(a+4)/sqrt(a^2+3)",
              "lines": [
                {
                  "step": "Find the expression in $a$ alone that $\\dfrac{x_1 + 4y_1}{\\sqrt{x_1^2 + 3y_1^2}}$ and $\\dfrac{x_2 + 4y_2}{\\sqrt{x_2^2 + 3y_2^2}}$ both equal, where $a$ is the common value of the equal ratios $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$ of positive numbers $x_1$, $y_1$, $x_2$ and $y_2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
                  "reason": "Common value of equal ratios: the two ratios share one value, and each numerator is that value times its denominator."
                },
                {
                  "step": "$\\dfrac{x_1 + 4y_1}{\\sqrt{x_1^2 + 3y_1^2}} = \\dfrac{ay_1 + 4y_1}{\\sqrt{a^2y_1^2 + 3y_1^2}}$",
                  "reason": "Substituting a value: $ay_1$ stands in the place of $x_1$, with $(ay_1)^2 = a^2y_1^2$."
                },
                {
                  "step": "$\\dfrac{ay_1 + 4y_1}{\\sqrt{a^2y_1^2 + 3y_1^2}} = \\dfrac{y_1(a + 4)}{\\sqrt{y_1^2(a^2 + 3)}}$",
                  "reason": "Taking out a common factor: $y_1$ is a factor of every term above, and $y_1^2$ of every term under the root."
                },
                {
                  "step": "$\\dfrac{y_1(a + 4)}{\\sqrt{y_1^2(a^2 + 3)}} = \\dfrac{y_1(a + 4)}{y_1\\sqrt{a^2 + 3}}$",
                  "reason": "Root of a product: the root of $y_1^2$ times the other factor is the root of $y_1^2$ times the root of the other factor, and the root of $y_1^2$ is $y_1$, since $y_1$ is positive."
                },
                {
                  "step": "$\\dfrac{y_1(a + 4)}{y_1\\sqrt{a^2 + 3}} = \\dfrac{a + 4}{\\sqrt{a^2 + 3}}$",
                  "reason": "Cancelling a common factor: $y_1$ is positive, so it is not $0$."
                },
                {
                  "step": "$\\dfrac{x_2 + 4y_2}{\\sqrt{x_2^2 + 3y_2^2}} = \\dfrac{ay_2 + 4y_2}{\\sqrt{a^2y_2^2 + 3y_2^2}}$",
                  "reason": "Substituting a value: $ay_2$ stands in the place of $x_2$, with $(ay_2)^2 = a^2y_2^2$."
                },
                {
                  "step": "$\\dfrac{ay_2 + 4y_2}{\\sqrt{a^2y_2^2 + 3y_2^2}} = \\dfrac{y_2(a + 4)}{\\sqrt{y_2^2(a^2 + 3)}}$",
                  "reason": "Taking out a common factor: $y_2$ is a factor of every term above, and $y_2^2$ of every term under the root."
                },
                {
                  "step": "$\\dfrac{y_2(a + 4)}{\\sqrt{y_2^2(a^2 + 3)}} = \\dfrac{y_2(a + 4)}{y_2\\sqrt{a^2 + 3}}$",
                  "reason": "Root of a product: the root of $y_2^2$ times the other factor is the root of $y_2^2$ times the root of the other factor, and the root of $y_2^2$ is $y_2$, since $y_2$ is positive."
                },
                {
                  "step": "$\\dfrac{y_2(a + 4)}{y_2\\sqrt{a^2 + 3}} = \\dfrac{a + 4}{\\sqrt{a^2 + 3}}$",
                  "reason": "Cancelling a common factor: $y_2$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\dfrac{x_1 + 4y_1}{\\sqrt{x_1^2 + 3y_1^2}}$ and $\\dfrac{x_2 + 4y_2}{\\sqrt{x_2^2 + 3y_2^2}}$ both equal $\\dfrac{a + 4}{\\sqrt{a^2 + 3}}$.",
                  "reason": "Transitive property: lines 6 and 10 give the two quotients one value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $E$ for which each of the equal ratios $\\dfrac{3x - 3y - 2z}{10} = \\dfrac{4z - x - y}{6}$ equals $\\dfrac{x - 2y + z}{E}$, whatever numbers $x$, $y$ and $z$ make the ratios equal.",
            "lines": [
              {
                "step": "Find a number $E$ for which each of the equal ratios $\\dfrac{3x - 3y - 2z}{10} = \\dfrac{4z - x - y}{6}$ equals $\\dfrac{x - 2y + z}{E}$, whatever numbers $x$, $y$ and $z$ make the ratios equal.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each of the two ratios equals $\\dfrac{(3x - 3y - 2z) + (4z - x - y)}{10 + 6}$.",
                "reason": "Adding numerators and denominators: the sum of the denominators, $16$, is not $0$."
              },
              {
                "step": "$\\dfrac{(3x - 3y - 2z) + (4z - x - y)}{10 + 6} = \\dfrac{2x - 4y + 2z}{16}$",
                "reason": "Collecting like terms: the terms in each letter are added with their signs, and the denominators add to $16$."
              },
              {
                "step": "$\\dfrac{2x - 4y + 2z}{16} = \\dfrac{2(x - 2y + z)}{16}$",
                "reason": "Taking out a common factor: $2$ is a factor of every term above."
              },
              {
                "step": "$\\dfrac{2(x - 2y + z)}{16} = \\dfrac{x - 2y + z}{8}$",
                "reason": "Cancelling a common factor: $2$ divides $2$ and $16$."
              },
              {
                "step": "So each of the two ratios equals $\\dfrac{x - 2y + z}{8}$, and $E = 8$.",
                "reason": "Transitive property: lines 2 to 5 join each ratio to the last fraction by equal fractions."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $E$ for which each of the equal ratios $\\dfrac{5x - 4z}{7} = \\dfrac{2y - x + 3z}{8} = \\dfrac{4x + 2y - 3z}{5}$ equals $\\dfrac{2x + y - z}{E}$, whatever numbers $x$, $y$ and $z$ make the ratios equal.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find a number $E$ for which each of the equal ratios $\\dfrac{5x - 4z}{7} = \\dfrac{2y - x + 3z}{8} = \\dfrac{4x + 2y - 3z}{5}$ equals $\\dfrac{2x + y - z}{E}$, whatever numbers $x$, $y$ and $z$ make the ratios equal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each of the three ratios equals $\\dfrac{(5x - 4z) + (2y - x + 3z) + (4x + 2y - 3z)}{7 + 8 + 5}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $20$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(5x - 4z) + (2y - x + 3z) + (4x + 2y - 3z)}{7 + 8 + 5} = \\dfrac{8x + 4y - 4z}{20}$",
                  "reason": "Collecting like terms: the terms in each letter are added with their signs, and the denominators add to $20$."
                },
                {
                  "step": "$\\dfrac{8x + 4y - 4z}{20} = \\dfrac{4(2x + y - z)}{20}$",
                  "reason": "Taking out a common factor: $4$ is a factor of every term above."
                },
                {
                  "step": "$\\dfrac{4(2x + y - z)}{20} = \\dfrac{2x + y - z}{5}$",
                  "reason": "Cancelling a common factor: $4$ divides $4$ and $20$."
                },
                {
                  "step": "So each of the three ratios equals $\\dfrac{2x + y - z}{5}$, and $E = 5$.",
                  "reason": "Transitive property: lines 2 to 5 join each ratio to the last fraction by equal fractions."
                }
              ]
            },
            {
              "prompt": "Find a number $E$ for which each of the equal ratios $\\dfrac{3z - y}{4} = \\dfrac{5x + 2y + 4z}{9} = \\dfrac{3y - x + z}{3}$ equals $\\dfrac{x + y + 2z}{E}$, whatever numbers $x$, $y$ and $z$ make the ratios equal.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find a number $E$ for which each of the equal ratios $\\dfrac{3z - y}{4} = \\dfrac{5x + 2y + 4z}{9} = \\dfrac{3y - x + z}{3}$ equals $\\dfrac{x + y + 2z}{E}$, whatever numbers $x$, $y$ and $z$ make the ratios equal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each of the three ratios equals $\\dfrac{(3z - y) + (5x + 2y + 4z) + (3y - x + z)}{4 + 9 + 3}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $16$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(3z - y) + (5x + 2y + 4z) + (3y - x + z)}{4 + 9 + 3} = \\dfrac{4x + 4y + 8z}{16}$",
                  "reason": "Collecting like terms: the terms in each letter are added with their signs, and the denominators add to $16$."
                },
                {
                  "step": "$\\dfrac{4x + 4y + 8z}{16} = \\dfrac{4(x + y + 2z)}{16}$",
                  "reason": "Taking out a common factor: $4$ is a factor of every term above."
                },
                {
                  "step": "$\\dfrac{4(x + y + 2z)}{16} = \\dfrac{x + y + 2z}{4}$",
                  "reason": "Cancelling a common factor: $4$ divides $4$ and $16$."
                },
                {
                  "step": "So each of the three ratios equals $\\dfrac{x + y + 2z}{4}$, and $E = 4$.",
                  "reason": "Transitive property: lines 2 to 5 join each ratio to the last fraction by equal fractions."
                }
              ]
            },
            {
              "prompt": "Find a number $E$ for which each of the equal ratios $\\dfrac{3z - 2x - 2y}{12} = \\dfrac{5x + 5y + 3z}{9}$ equals $\\dfrac{x + y + 2z}{E}$, whatever numbers $x$, $y$ and $z$ make the ratios equal.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find a number $E$ for which each of the equal ratios $\\dfrac{3z - 2x - 2y}{12} = \\dfrac{5x + 5y + 3z}{9}$ equals $\\dfrac{x + y + 2z}{E}$, whatever numbers $x$, $y$ and $z$ make the ratios equal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each of the two ratios equals $\\dfrac{(3z - 2x - 2y) + (5x + 5y + 3z)}{12 + 9}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $21$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(3z - 2x - 2y) + (5x + 5y + 3z)}{12 + 9} = \\dfrac{3x + 3y + 6z}{21}$",
                  "reason": "Collecting like terms: the terms in each letter are added with their signs, and the denominators add to $21$."
                },
                {
                  "step": "$\\dfrac{3x + 3y + 6z}{21} = \\dfrac{3(x + y + 2z)}{21}$",
                  "reason": "Taking out a common factor: $3$ is a factor of every term above."
                },
                {
                  "step": "$\\dfrac{3(x + y + 2z)}{21} = \\dfrac{x + y + 2z}{7}$",
                  "reason": "Cancelling a common factor: $3$ divides $3$ and $21$."
                },
                {
                  "step": "So each of the two ratios equals $\\dfrac{x + y + 2z}{7}$, and $E = 7$.",
                  "reason": "Transitive property: lines 2 to 5 join each ratio to the last fraction by equal fractions."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression in $y$ and $z$ alone equal to $\\dfrac{x}{y}$, where $\\dfrac{4x + 5y}{4y + 5z} = \\dfrac{4x - 5y}{4y - 5z}$ and none of $y$, $z$, $4y + 5z$ and $4y - 5z$ is $0$.",
            "lines": [
              {
                "step": "Find the expression in $y$ and $z$ alone equal to $\\dfrac{x}{y}$, where $\\dfrac{4x + 5y}{4y + 5z} = \\dfrac{4x - 5y}{4y - 5z}$ and none of $y$, $z$, $4y + 5z$ and $4y - 5z$ is $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each of the two ratios equals $\\dfrac{(4x + 5y) + (4x - 5y)}{(4y + 5z) + (4y - 5z)}$.",
                "reason": "Adding numerators and denominators: the sum of the denominators, $8y$, is not $0$."
              },
              {
                "step": "$\\dfrac{(4x + 5y) + (4x - 5y)}{(4y + 5z) + (4y - 5z)} = \\dfrac{8x}{8y}$",
                "reason": "Collecting like terms: the terms $5y$ and $-5y$ add to $0$ above, and the terms $5z$ and $-5z$ add to $0$ below."
              },
              {
                "step": "$\\dfrac{8x}{8y} = \\dfrac{x}{y}$",
                "reason": "Cancelling a common factor: $8$ divides the numerator and the denominator."
              },
              {
                "step": "Each of the two ratios also equals $\\dfrac{(4x + 5y) - (4x - 5y)}{(4y + 5z) - (4y - 5z)}$.",
                "reason": "Adding numerators and denominators, with the numerator and the denominator of the second ratio first multiplied by $-1$: the difference of the denominators, $10z$, is not $0$."
              },
              {
                "step": "$\\dfrac{(4x + 5y) - (4x - 5y)}{(4y + 5z) - (4y - 5z)} = \\dfrac{10y}{10z}$",
                "reason": "Subtracting a bracket changes every sign in it, then collecting like terms: the terms in $x$ add to $0$ above and the terms in $y$ add to $0$ below."
              },
              {
                "step": "$\\dfrac{10y}{10z} = \\dfrac{y}{z}$",
                "reason": "Cancelling a common factor: $10$ divides the numerator and the denominator."
              },
              {
                "step": "So $\\dfrac{x}{y} = \\dfrac{y}{z}$.",
                "reason": "Transitive property: by lines 2 to 4 and lines 5 to 7 each side is the value of the given ratios."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression in $z$ and $x$ alone equal to $\\dfrac{y}{z}$, where $\\dfrac{y + 4z}{z + 4x} = \\dfrac{y - 4z}{z - 4x}$ and none of $z$, $x$, $z + 4x$ and $z - 4x$ is $0$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "z/x",
              "lines": [
                {
                  "step": "Find the expression in $z$ and $x$ alone equal to $\\dfrac{y}{z}$, where $\\dfrac{y + 4z}{z + 4x} = \\dfrac{y - 4z}{z - 4x}$ and none of $z$, $x$, $z + 4x$ and $z - 4x$ is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each of the two ratios equals $\\dfrac{(y + 4z) + (y - 4z)}{(z + 4x) + (z - 4x)}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $2z$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(y + 4z) + (y - 4z)}{(z + 4x) + (z - 4x)} = \\dfrac{2y}{2z}$",
                  "reason": "Collecting like terms: the terms $4z$ and $-4z$ add to $0$ above, and the terms $4x$ and $-4x$ add to $0$ below."
                },
                {
                  "step": "$\\dfrac{2y}{2z} = \\dfrac{y}{z}$",
                  "reason": "Cancelling a common factor: $2$ divides the numerator and the denominator."
                },
                {
                  "step": "Each of the two ratios also equals $\\dfrac{(y + 4z) - (y - 4z)}{(z + 4x) - (z - 4x)}$.",
                  "reason": "Adding numerators and denominators, with the numerator and the denominator of the second ratio first multiplied by $-1$: the difference of the denominators, $8x$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(y + 4z) - (y - 4z)}{(z + 4x) - (z - 4x)} = \\dfrac{8z}{8x}$",
                  "reason": "Subtracting a bracket changes every sign in it, then collecting like terms: the terms in $y$ add to $0$ above and the terms in $z$ add to $0$ below."
                },
                {
                  "step": "$\\dfrac{8z}{8x} = \\dfrac{z}{x}$",
                  "reason": "Cancelling a common factor: $8$ divides the numerator and the denominator."
                },
                {
                  "step": "So $\\dfrac{y}{z} = \\dfrac{z}{x}$.",
                  "reason": "Transitive property: by lines 2 to 4 and lines 5 to 7 each side is the value of the given ratios."
                }
              ]
            },
            {
              "prompt": "Find the expression in $z$ and $x$ alone equal to $\\dfrac{x}{y}$, where $\\dfrac{7x + 4z}{7y + 4x} = \\dfrac{7x - 4z}{7y - 4x}$ and none of $y$, $x$, $7y + 4x$ and $7y - 4x$ is $0$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "z/x",
              "lines": [
                {
                  "step": "Find the expression in $z$ and $x$ alone equal to $\\dfrac{x}{y}$, where $\\dfrac{7x + 4z}{7y + 4x} = \\dfrac{7x - 4z}{7y - 4x}$ and none of $y$, $x$, $7y + 4x$ and $7y - 4x$ is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each of the two ratios equals $\\dfrac{(7x + 4z) + (7x - 4z)}{(7y + 4x) + (7y - 4x)}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $14y$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(7x + 4z) + (7x - 4z)}{(7y + 4x) + (7y - 4x)} = \\dfrac{14x}{14y}$",
                  "reason": "Collecting like terms: the terms $4z$ and $-4z$ add to $0$ above, and the terms $4x$ and $-4x$ add to $0$ below."
                },
                {
                  "step": "$\\dfrac{14x}{14y} = \\dfrac{x}{y}$",
                  "reason": "Cancelling a common factor: $14$ divides the numerator and the denominator."
                },
                {
                  "step": "Each of the two ratios also equals $\\dfrac{(7x + 4z) - (7x - 4z)}{(7y + 4x) - (7y - 4x)}$.",
                  "reason": "Adding numerators and denominators, with the numerator and the denominator of the second ratio first multiplied by $-1$: the difference of the denominators, $8x$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(7x + 4z) - (7x - 4z)}{(7y + 4x) - (7y - 4x)} = \\dfrac{8z}{8x}$",
                  "reason": "Subtracting a bracket changes every sign in it, then collecting like terms: the terms in $x$ add to $0$ above and the terms in $y$ add to $0$ below."
                },
                {
                  "step": "$\\dfrac{8z}{8x} = \\dfrac{z}{x}$",
                  "reason": "Cancelling a common factor: $8$ divides the numerator and the denominator."
                },
                {
                  "step": "So $\\dfrac{x}{y} = \\dfrac{z}{x}$.",
                  "reason": "Transitive property: by lines 2 to 4 and lines 5 to 7 each side is the value of the given ratios."
                }
              ]
            },
            {
              "prompt": "Find the expression in $x$ and $y$ alone equal to $\\dfrac{z}{x}$, where $\\dfrac{6z + 5x}{6x + 5y} = \\dfrac{6z - 5x}{6x - 5y}$ and none of $x$, $y$, $6x + 5y$ and $6x - 5y$ is $0$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "x/y",
              "lines": [
                {
                  "step": "Find the expression in $x$ and $y$ alone equal to $\\dfrac{z}{x}$, where $\\dfrac{6z + 5x}{6x + 5y} = \\dfrac{6z - 5x}{6x - 5y}$ and none of $x$, $y$, $6x + 5y$ and $6x - 5y$ is $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each of the two ratios equals $\\dfrac{(6z + 5x) + (6z - 5x)}{(6x + 5y) + (6x - 5y)}$.",
                  "reason": "Adding numerators and denominators: the sum of the denominators, $12x$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(6z + 5x) + (6z - 5x)}{(6x + 5y) + (6x - 5y)} = \\dfrac{12z}{12x}$",
                  "reason": "Collecting like terms: the terms $5x$ and $-5x$ add to $0$ above, and the terms $5y$ and $-5y$ add to $0$ below."
                },
                {
                  "step": "$\\dfrac{12z}{12x} = \\dfrac{z}{x}$",
                  "reason": "Cancelling a common factor: $12$ divides the numerator and the denominator."
                },
                {
                  "step": "Each of the two ratios also equals $\\dfrac{(6z + 5x) - (6z - 5x)}{(6x + 5y) - (6x - 5y)}$.",
                  "reason": "Adding numerators and denominators, with the numerator and the denominator of the second ratio first multiplied by $-1$: the difference of the denominators, $10y$, is not $0$."
                },
                {
                  "step": "$\\dfrac{(6z + 5x) - (6z - 5x)}{(6x + 5y) - (6x - 5y)} = \\dfrac{10x}{10y}$",
                  "reason": "Subtracting a bracket changes every sign in it, then collecting like terms: the terms in $z$ add to $0$ above and the terms in $x$ add to $0$ below."
                },
                {
                  "step": "$\\dfrac{10x}{10y} = \\dfrac{x}{y}$",
                  "reason": "Cancelling a common factor: $10$ divides the numerator and the denominator."
                },
                {
                  "step": "So $\\dfrac{z}{x} = \\dfrac{x}{y}$.",
                  "reason": "Transitive property: by lines 2 to 4 and lines 5 to 7 each side is the value of the given ratios."
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
      "id": "t210-p1",
      "method": "direct proof",
      "statement": "Let $x_1$, $y_1$, $x_2$ and $y_2$ be numbers with $y_1$ and $y_2$ not $0$ and $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$, and let $b$ be a number with $y_1 + by_2$ not $0$. Then $\\dfrac{x_1 + bx_2}{y_1 + by_2} = \\dfrac{x_1}{y_1}$.",
      "idea": "Give the common value of the two ratios a letter. Each numerator is then that value times its denominator, so the new numerator is that value times the new denominator.",
      "lines": [
        {
          "line": "Let $a$ be the common value of the two ratios, so $\\dfrac{x_1}{y_1} = a$ and $\\dfrac{x_2}{y_2} = a$.",
          "reason": "The hypothesis: the two ratios are equal, so one number is the value of both."
        },
        {
          "line": "So $x_1 = ay_1$ and $x_2 = ay_2$.",
          "reason": "Multiplying both sides by the same number: each equation of line 1 is multiplied by its denominator."
        },
        {
          "line": "So $x_1 + bx_2 = ay_1 + a \\cdot by_2$.",
          "reason": "Substitution: by line 2, $ay_1$ stands in the place of $x_1$ and $ay_2$ in the place of $x_2$."
        },
        {
          "line": "So $x_1 + bx_2 = a(y_1 + by_2)$.",
          "reason": "The distributive law, from arithmetic: the number $a$ is common to both terms."
        },
        {
          "line": "So $\\dfrac{x_1 + bx_2}{y_1 + by_2} = a$.",
          "reason": "Dividing both sides by a nonzero number: $y_1 + by_2$ is not $0$ by hypothesis."
        },
        {
          "line": "Therefore $\\dfrac{x_1 + bx_2}{y_1 + by_2} = \\dfrac{x_1}{y_1}$.",
          "reason": "Substitution: by line 1 the number $a$ is $\\dfrac{x_1}{y_1}$."
        }
      ]
    },
    {
      "id": "t210-p2",
      "method": "direct proof",
      "statement": "Let $n$ be a whole number with $n \\ge 2$, and let $x_1$ to $x_n$ and $y_1$ to $y_n$ be numbers with no $y_i$ equal to $0$, with $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2} = \\dots = \\dfrac{x_n}{y_n}$ and with $y_1 + y_2 + \\dots + y_n$ not $0$. Then $\\dfrac{x_1 + x_2 + \\dots + x_n}{y_1 + y_2 + \\dots + y_n} = \\dfrac{x_1}{y_1}$.",
      "idea": "Each numerator is the common value times its denominator. Added up, the numerators are the common value times the sum of the denominators, since a number that stands in every term of a sum comes out of the sum.",
      "lines": [
        {
          "line": "Let $a$ be the common value of the ratios, so $\\dfrac{x_i}{y_i} = a$ for each index $i$ from $1$ to $n$.",
          "reason": "The hypothesis: the $n$ ratios are equal, so one number is the value of each."
        },
        {
          "line": "So $x_i = ay_i$ for each index $i$ from $1$ to $n$.",
          "reason": "Multiplying both sides by the same number: both sides of $\\dfrac{x_i}{y_i} = a$ are multiplied by $y_i$."
        },
        {
          "line": "So $x_1 + x_2 + \\dots + x_n = ay_1 + ay_2 + \\dots + ay_n$.",
          "reason": "Substitution: by line 2 each term $x_i$ is replaced by $ay_i$."
        },
        {
          "line": "So $x_1 + x_2 + \\dots + x_n = a(y_1 + y_2 + \\dots + y_n)$.",
          "reason": "Sums split and constants come out: the number $a$, the same in every term, comes out of the sum."
        },
        {
          "line": "So $\\dfrac{x_1 + x_2 + \\dots + x_n}{y_1 + y_2 + \\dots + y_n} = a$.",
          "reason": "Dividing both sides by a nonzero number: $y_1 + y_2 + \\dots + y_n$ is not $0$ by hypothesis."
        },
        {
          "line": "Therefore $\\dfrac{x_1 + x_2 + \\dots + x_n}{y_1 + y_2 + \\dots + y_n} = \\dfrac{x_1}{y_1}$.",
          "reason": "Substitution: by line 1 with $i = 1$ the number $a$ is $\\dfrac{x_1}{y_1}$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t210-s1",
      "method": "direct proof",
      "statement": "Prove that if $x_1$, $y_1$, $x_2$ and $y_2$ are numbers with $y_1$ and $y_2$ not $0$ and $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$, and $b$ is a number with $x_1 - by_1$ and $x_2 - by_2$ not $0$, then $\\dfrac{x_1 + by_1}{x_1 - by_1} = \\dfrac{x_2 + by_2}{x_2 - by_2}$. Facts it may use: Common value of equal ratios, substitution, the distributive law, cancelling a common factor, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "With $a$ for the common value of the two ratios, $x_1 = ay_1$ and $x_2 = ay_2$.",
            "reason": "Common value of equal ratios: each numerator is the common value times its denominator."
          },
          {
            "line": "So $\\dfrac{x_1 + by_1}{x_1 - by_1} = \\dfrac{ay_1 + by_1}{ay_1 - by_1}$.",
            "reason": "Substitution: by line 1, $ay_1$ stands in the place of $x_1$."
          },
          {
            "line": "So $\\dfrac{x_1 + by_1}{x_1 - by_1} = \\dfrac{y_1(a + b)}{y_1(a - b)}$.",
            "reason": "The distributive law, from arithmetic: $y_1$ is common to both terms above and to both terms below."
          },
          {
            "line": "So $\\dfrac{x_1 + by_1}{x_1 - by_1} = \\dfrac{a + b}{a - b}$.",
            "reason": "Cancelling a common factor: $y_1$ is not $0$ by hypothesis."
          },
          {
            "line": "In the same way $\\dfrac{x_2 + by_2}{x_2 - by_2} = \\dfrac{ay_2 + by_2}{ay_2 - by_2}$.",
            "reason": "Substitution: by line 1, $ay_2$ stands in the place of $x_2$."
          },
          {
            "line": "So $\\dfrac{x_2 + by_2}{x_2 - by_2} = \\dfrac{y_2(a + b)}{y_2(a - b)}$.",
            "reason": "The distributive law, from arithmetic: $y_2$ is common to both terms above and to both terms below."
          },
          {
            "line": "So $\\dfrac{x_2 + by_2}{x_2 - by_2} = \\dfrac{a + b}{a - b}$.",
            "reason": "Cancelling a common factor: $y_2$ is not $0$ by hypothesis."
          },
          {
            "line": "Therefore $\\dfrac{x_1 + by_1}{x_1 - by_1} = \\dfrac{x_2 + by_2}{x_2 - by_2}$.",
            "reason": "Transitive property: by lines 4 and 7 both sides equal $\\dfrac{a + b}{a - b}$."
          }
        ]
      }
    },
    {
      "id": "t210-s2",
      "method": "direct proof",
      "statement": "Prove that if $b$, $c$ and $d$ are numbers, none of them $0$, with $b + c + d$ not $0$, and $x$, $y$ and $z$ are numbers with $\\dfrac{x - y}{b} = \\dfrac{y - z}{c} = \\dfrac{z - x}{d}$, then $x = y = z$. Facts it may use: Adding numerators and denominators, collecting like terms, substitution, multiplying both sides by the same number, adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "Each of the three ratios equals $\\dfrac{(x - y) + (y - z) + (z - x)}{b + c + d}$.",
            "reason": "Adding numerators and denominators: the sum $b + c + d$ of the denominators is not $0$ by hypothesis."
          },
          {
            "line": "The numerator $(x - y) + (y - z) + (z - x)$ is $0$.",
            "reason": "Collecting like terms: the terms in $x$, in $y$ and in $z$ each add to $0$."
          },
          {
            "line": "So each of the three ratios is $0$.",
            "reason": "Substitution: by line 2 the fraction of line 1 is $0$ divided by the nonzero number $b + c + d$, which is $0$."
          },
          {
            "line": "So $x - y = 0$ and $y - z = 0$.",
            "reason": "Multiplying both sides by the same number: by line 3, $\\dfrac{x - y}{b} = 0$ and $\\dfrac{y - z}{c} = 0$; the first is multiplied by $b$ and the second by $c$."
          },
          {
            "line": "So $x = y$.",
            "reason": "Adding the same number to both sides: $y$ is added to both sides of $x - y = 0$ of line 4."
          },
          {
            "line": "Therefore $x = y = z$.",
            "reason": "Adding the same number to both sides: $z$ is added to both sides of $y - z = 0$ of line 4, which gives $y = z$, and $x = y$ by line 5."
          }
        ]
      }
    }
  ]
}
