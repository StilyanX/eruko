export default {
  "number": 234,
  "title": "Equations symmetric in x and 1/x",
  "section": 21,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "631-637"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $x^{5} + \\dfrac{1}{x^{5}}$, where $x + \\dfrac{1}{x} = 8$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "30248",
    "solution": [
      "Find $x^{5} + \\dfrac{1}{x^{5}}$, where $x + \\dfrac{1}{x} = 8$.",
      "$x \\cdot \\dfrac{1}{x} = 1$",
      "$x^k + \\dfrac{1}{x^k} = 8\\left(x^{k - 1} + \\dfrac{1}{x^{k - 1}}\\right) - \\left(x^{k - 2} + \\dfrac{1}{x^{k - 2}}\\right)$",
      "$x^{2} + \\dfrac{1}{x^{2}} = 8 \\cdot 8 - 2 = 62$",
      "$x^{3} + \\dfrac{1}{x^{3}} = 8 \\cdot 62 - 8 = 488$",
      "$x^{4} + \\dfrac{1}{x^{4}} = 8 \\cdot 488 - 62 = 3842$",
      "$x^{5} + \\dfrac{1}{x^{5}} = 8 \\cdot 3842 - 488 = 30{,}248$"
    ]
  },
  "ideas": [
    {
      "name": "Palindromic polynomial",
      "concrete": "In $15x^4 - 23x^3 + 34x^2 - 23x + 15$ the coefficients $15$, $-23$, $34$, $-23$, $15$ read the same forwards and backwards, so the polynomial is palindromic.",
      "general": "A polynomial $a_nx^n + a_{n - 1}x^{n - 1} + \\cdots + a_1x + a_0$ with $a_n \\ne 0$ is **palindromic** when $a_k = a_{n - k}$ for every whole number $k$ from $0$ to $n$: its coefficients read the same forwards and backwards."
    },
    {
      "name": "Substituting $y = x + \\dfrac{1}{x}$",
      "concrete": "Dividing the polynomial above, set equal to $0$, by $x^2$, which is not $0$, gives $15\\left(x^2 + \\dfrac{1}{x^2}\\right) - 23\\left(x + \\dfrac{1}{x}\\right) + 34 = 0$. With $y = x + \\dfrac{1}{x}$ the bracket $x^2 + \\dfrac{1}{x^2}$ is $y^2 - 2$, so the equation becomes $15y^2 - 23y + 4 = 0$, a quadratic in $y$. Each root $y$ then gives $x$ from $x^2 - yx + 1 = 0$.",
      "general": "For a palindromic polynomial of even degree $2m$ whose constant term is not $0$, the equation $a_{2m}x^{2m} + \\cdots + a_0 = 0$ has no root $x = 0$, so it may be divided by $x^m$; the terms then pair off as $a_k\\left(x^k + \\dfrac{1}{x^k}\\right)$. With $y = x + \\dfrac{1}{x}$, each $x^k + \\dfrac{1}{x^k}$ is a polynomial in $y$ of degree $k$ ($x^2 + \\dfrac{1}{x^2} = y^2 - 2$, $x^3 + \\dfrac{1}{x^3} = y^3 - 3y$), so the equation becomes one of degree $m$ in $y$. Each of its roots $y$ gives two values of $x$, the roots of $x^2 - yx + 1 = 0$."
    }
  ],
  "kinds": [
    {
      "id": "t234-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $x^{4} + \\dfrac{1}{x^{4}}$, where $x + \\dfrac{1}{x} = \\dfrac{14}{5}$.",
            "lines": [
              {
                "step": "Find $x^{4} + \\dfrac{1}{x^{4}}$, where $x + \\dfrac{1}{x} = \\dfrac{14}{5}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x \\cdot \\dfrac{1}{x} = 1$",
                "reason": "Reciprocal, from arithmetic: a number times its reciprocal is $1$."
              },
              {
                "step": "$x^k + \\dfrac{1}{x^k} = \\dfrac{14}{5}\\left(x^{k - 1} + \\dfrac{1}{x^{k - 1}}\\right) - \\left(x^{k - 2} + \\dfrac{1}{x^{k - 2}}\\right)$",
                "reason": "Power-sum recursion: for two numbers with sum $\\dfrac{14}{5}$ and product $1$, each power sum is $\\dfrac{14}{5}$ times the one before, less the one before that, for every whole number $k$ from $2$ up."
              },
              {
                "step": "$x^{2} + \\dfrac{1}{x^{2}} = \\dfrac{14}{5} \\cdot \\dfrac{14}{5} - 2 = \\dfrac{146}{25}$",
                "reason": "Power-sum recursion, line 3 with $k = 2$, and zero exponent: $x^0 + \\dfrac{1}{x^0} = 1 + 1 = 2$."
              },
              {
                "step": "$x^{3} + \\dfrac{1}{x^{3}} = \\dfrac{14}{5} \\cdot \\dfrac{146}{25} - \\dfrac{14}{5} = \\dfrac{1694}{125}$",
                "reason": "Power-sum recursion, line 3 with $k = 3$, with line 4 and the sum as given."
              },
              {
                "step": "$x^{4} + \\dfrac{1}{x^{4}} = \\dfrac{14}{5} \\cdot \\dfrac{1694}{125} - \\dfrac{146}{25} = \\dfrac{20{,}066}{625}$",
                "reason": "Power-sum recursion, line 3 with $k = 4$, with lines 5 and 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x^{4} + \\dfrac{1}{x^{4}}$, where $x + \\dfrac{1}{x} = \\dfrac{17}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "78929/16",
              "lines": [
                {
                  "step": "Find $x^{4} + \\dfrac{1}{x^{4}}$, where $x + \\dfrac{1}{x} = \\dfrac{17}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\cdot \\dfrac{1}{x} = 1$",
                  "reason": "Reciprocal, from arithmetic: a number times its reciprocal is $1$."
                },
                {
                  "step": "$x^k + \\dfrac{1}{x^k} = \\dfrac{17}{2}\\left(x^{k - 1} + \\dfrac{1}{x^{k - 1}}\\right) - \\left(x^{k - 2} + \\dfrac{1}{x^{k - 2}}\\right)$",
                  "reason": "Power-sum recursion: for two numbers with sum $\\dfrac{17}{2}$ and product $1$, each power sum is $\\dfrac{17}{2}$ times the one before, less the one before that, for every whole number $k$ from $2$ up."
                },
                {
                  "step": "$x^{2} + \\dfrac{1}{x^{2}} = \\dfrac{17}{2} \\cdot \\dfrac{17}{2} - 2 = \\dfrac{281}{4}$",
                  "reason": "Power-sum recursion, line 3 with $k = 2$, and zero exponent: $x^0 + \\dfrac{1}{x^0} = 1 + 1 = 2$."
                },
                {
                  "step": "$x^{3} + \\dfrac{1}{x^{3}} = \\dfrac{17}{2} \\cdot \\dfrac{281}{4} - \\dfrac{17}{2} = \\dfrac{4709}{8}$",
                  "reason": "Power-sum recursion, line 3 with $k = 3$, with line 4 and the sum as given."
                },
                {
                  "step": "$x^{4} + \\dfrac{1}{x^{4}} = \\dfrac{17}{2} \\cdot \\dfrac{4709}{8} - \\dfrac{281}{4} = \\dfrac{78{,}929}{16}$",
                  "reason": "Power-sum recursion, line 3 with $k = 4$, with lines 5 and 4."
                }
              ]
            },
            {
              "prompt": "Find $x^{4} + \\dfrac{1}{x^{4}}$, where $x + \\dfrac{1}{x} = \\dfrac{17}{3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "73279/81",
              "lines": [
                {
                  "step": "Find $x^{4} + \\dfrac{1}{x^{4}}$, where $x + \\dfrac{1}{x} = \\dfrac{17}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\cdot \\dfrac{1}{x} = 1$",
                  "reason": "Reciprocal, from arithmetic: a number times its reciprocal is $1$."
                },
                {
                  "step": "$x^k + \\dfrac{1}{x^k} = \\dfrac{17}{3}\\left(x^{k - 1} + \\dfrac{1}{x^{k - 1}}\\right) - \\left(x^{k - 2} + \\dfrac{1}{x^{k - 2}}\\right)$",
                  "reason": "Power-sum recursion: for two numbers with sum $\\dfrac{17}{3}$ and product $1$, each power sum is $\\dfrac{17}{3}$ times the one before, less the one before that, for every whole number $k$ from $2$ up."
                },
                {
                  "step": "$x^{2} + \\dfrac{1}{x^{2}} = \\dfrac{17}{3} \\cdot \\dfrac{17}{3} - 2 = \\dfrac{271}{9}$",
                  "reason": "Power-sum recursion, line 3 with $k = 2$, and zero exponent: $x^0 + \\dfrac{1}{x^0} = 1 + 1 = 2$."
                },
                {
                  "step": "$x^{3} + \\dfrac{1}{x^{3}} = \\dfrac{17}{3} \\cdot \\dfrac{271}{9} - \\dfrac{17}{3} = \\dfrac{4454}{27}$",
                  "reason": "Power-sum recursion, line 3 with $k = 3$, with line 4 and the sum as given."
                },
                {
                  "step": "$x^{4} + \\dfrac{1}{x^{4}} = \\dfrac{17}{3} \\cdot \\dfrac{4454}{27} - \\dfrac{271}{9} = \\dfrac{73{,}279}{81}$",
                  "reason": "Power-sum recursion, line 3 with $k = 4$, with lines 5 and 4."
                }
              ]
            },
            {
              "prompt": "Find $x^{6} + \\dfrac{1}{x^{6}}$, where $x + \\dfrac{1}{x} = \\dfrac{8}{3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "86158/729",
              "lines": [
                {
                  "step": "Find $x^{6} + \\dfrac{1}{x^{6}}$, where $x + \\dfrac{1}{x} = \\dfrac{8}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\cdot \\dfrac{1}{x} = 1$",
                  "reason": "Reciprocal, from arithmetic: a number times its reciprocal is $1$."
                },
                {
                  "step": "$x^k + \\dfrac{1}{x^k} = \\dfrac{8}{3}\\left(x^{k - 1} + \\dfrac{1}{x^{k - 1}}\\right) - \\left(x^{k - 2} + \\dfrac{1}{x^{k - 2}}\\right)$",
                  "reason": "Power-sum recursion: for two numbers with sum $\\dfrac{8}{3}$ and product $1$, each power sum is $\\dfrac{8}{3}$ times the one before, less the one before that, for every whole number $k$ from $2$ up."
                },
                {
                  "step": "$x^{2} + \\dfrac{1}{x^{2}} = \\dfrac{8}{3} \\cdot \\dfrac{8}{3} - 2 = \\dfrac{46}{9}$",
                  "reason": "Power-sum recursion, line 3 with $k = 2$, and zero exponent: $x^0 + \\dfrac{1}{x^0} = 1 + 1 = 2$."
                },
                {
                  "step": "$x^{3} + \\dfrac{1}{x^{3}} = \\dfrac{8}{3} \\cdot \\dfrac{46}{9} - \\dfrac{8}{3} = \\dfrac{296}{27}$",
                  "reason": "Power-sum recursion, line 3 with $k = 3$, with line 4 and the sum as given."
                },
                {
                  "step": "$x^{4} + \\dfrac{1}{x^{4}} = \\dfrac{8}{3} \\cdot \\dfrac{296}{27} - \\dfrac{46}{9} = \\dfrac{1954}{81}$",
                  "reason": "Power-sum recursion, line 3 with $k = 4$, with lines 5 and 4."
                },
                {
                  "step": "$x^{5} + \\dfrac{1}{x^{5}} = \\dfrac{8}{3} \\cdot \\dfrac{1954}{81} - \\dfrac{296}{27} = \\dfrac{12{,}968}{243}$",
                  "reason": "Power-sum recursion, line 3 with $k = 5$, with lines 6 and 5."
                },
                {
                  "step": "$x^{6} + \\dfrac{1}{x^{6}} = \\dfrac{8}{3} \\cdot \\dfrac{12{,}968}{243} - \\dfrac{1954}{81} = \\dfrac{86{,}158}{729}$",
                  "reason": "Power-sum recursion, line 3 with $k = 6$, with lines 7 and 6."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t234-k2",
      "forms": [
        {
          "example": {
            "problem": "Find every complex solution of $15x^4 + 29x^3 - 40x^2 + 29x + 15 = 0$.",
            "lines": [
              {
                "step": "Find every complex solution of $15x^4 + 29x^3 - 40x^2 + 29x + 15 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $x = 0$ the left side is $15$, so $x \\ne 0$.",
                "reason": "Substituting a value: each term but the constant term holds $x$."
              },
              {
                "step": "$15x^2 + 29x - 40 + \\dfrac{29}{x} + \\dfrac{15}{x^2} = 0$",
                "reason": "Dividing both sides by a nonzero number: line 2 gives $x \\ne 0$, so both sides are divided by $x^2$."
              },
              {
                "step": "$15\\left(x^2 + \\dfrac{1}{x^2}\\right) + 29\\left(x + \\dfrac{1}{x}\\right) - 40 = 0$",
                "reason": "Palindromic polynomial: the coefficients read the same forwards and backwards, so the terms pair off, and collecting like terms read backwards takes out each pair's coefficient."
              },
              {
                "step": "$15(y^2 - 2) + 29y - 40 = 0$",
                "reason": "Substituting $y = x + \\dfrac{1}{x}$: $y^2 = x^2 + 2 + \\dfrac{1}{x^2}$ by the square of a binomial, so $x^2 + \\dfrac{1}{x^2} = y^2 - 2$."
              },
              {
                "step": "$15y^2 + 29y - 70 = 0$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "$(3y + 10)(5y - 7) = 0$",
                "reason": "Factoring a quadratic: the two brackets multiply out to line 6."
              },
              {
                "step": "Either $y = -\\dfrac{10}{3}$ or $y = \\dfrac{7}{5}$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "So $x + \\dfrac{1}{x} = -\\dfrac{10}{3}$ or $x + \\dfrac{1}{x} = \\dfrac{7}{5}$.",
                "reason": "Substituting a letter and undoing it: $x + \\dfrac{1}{x}$ is put back in place of $y$."
              },
              {
                "step": "So $3x^2 + 10x + 3 = 0$ or $5x^2 - 7x + 5 = 0$.",
                "reason": "Multiplying both sides by the same number: the equations are multiplied by $3x$ and $5x$ in turn, each not $0$ by line 2, and the terms are gathered on the left."
              },
              {
                "step": "So $x = -\\dfrac{1}{3}$, $x = -3$, $x = \\dfrac{7 + i\\sqrt{51}}{10}$ or $x = \\dfrac{7 - i\\sqrt{51}}{10}$.",
                "reason": "Quadratic formula, for each equation; where the discriminant is negative, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $20x^4 - 57x^3 + 53x^2 - 57x + 20 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (1+3*i*sqrt(7))/8, x = (1-3*i*sqrt(7))/8, x = (13+sqrt(69))/10, x = (13-sqrt(69))/10",
              "lines": [
                {
                  "step": "Find every complex solution of $20x^4 - 57x^3 + 53x^2 - 57x + 20 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$ the left side is $20$, so $x \\ne 0$.",
                  "reason": "Substituting a value: each term but the constant term holds $x$."
                },
                {
                  "step": "$20x^2 - 57x + 53 - \\dfrac{57}{x} + \\dfrac{20}{x^2} = 0$",
                  "reason": "Dividing both sides by a nonzero number: line 2 gives $x \\ne 0$, so both sides are divided by $x^2$."
                },
                {
                  "step": "$20\\left(x^2 + \\dfrac{1}{x^2}\\right) - 57\\left(x + \\dfrac{1}{x}\\right) + 53 = 0$",
                  "reason": "Palindromic polynomial: the coefficients read the same forwards and backwards, so the terms pair off, and collecting like terms read backwards takes out each pair's coefficient."
                },
                {
                  "step": "$20(y^2 - 2) - 57y + 53 = 0$",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: $y^2 = x^2 + 2 + \\dfrac{1}{x^2}$ by the square of a binomial, so $x^2 + \\dfrac{1}{x^2} = y^2 - 2$."
                },
                {
                  "step": "$20y^2 - 57y + 13 = 0$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$(4y - 1)(5y - 13) = 0$",
                  "reason": "Factoring a quadratic: the two brackets multiply out to line 6."
                },
                {
                  "step": "Either $y = \\dfrac{1}{4}$ or $y = \\dfrac{13}{5}$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x + \\dfrac{1}{x} = \\dfrac{1}{4}$ or $x + \\dfrac{1}{x} = \\dfrac{13}{5}$.",
                  "reason": "Substituting a letter and undoing it: $x + \\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $4x^2 - x + 4 = 0$ or $5x^2 - 13x + 5 = 0$.",
                  "reason": "Multiplying both sides by the same number: the equations are multiplied by $4x$ and $5x$ in turn, each not $0$ by line 2, and the terms are gathered on the left."
                },
                {
                  "step": "So $x = \\dfrac{1 + 3i\\sqrt{7}}{8}$, $x = \\dfrac{1 - 3i\\sqrt{7}}{8}$, $x = \\dfrac{13 + \\sqrt{69}}{10}$ or $x = \\dfrac{13 - \\sqrt{69}}{10}$.",
                  "reason": "Quadratic formula, for each equation; where the discriminant is negative, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $10x^4 - 3x^3 + 2x^2 - 3x + 10 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (3+i*sqrt(7))/4, x = (3-i*sqrt(7))/4, x = (-3+4*i)/5, x = (-3-4*i)/5",
              "lines": [
                {
                  "step": "Find every complex solution of $10x^4 - 3x^3 + 2x^2 - 3x + 10 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$ the left side is $10$, so $x \\ne 0$.",
                  "reason": "Substituting a value: each term but the constant term holds $x$."
                },
                {
                  "step": "$10x^2 - 3x + 2 - \\dfrac{3}{x} + \\dfrac{10}{x^2} = 0$",
                  "reason": "Dividing both sides by a nonzero number: line 2 gives $x \\ne 0$, so both sides are divided by $x^2$."
                },
                {
                  "step": "$10\\left(x^2 + \\dfrac{1}{x^2}\\right) - 3\\left(x + \\dfrac{1}{x}\\right) + 2 = 0$",
                  "reason": "Palindromic polynomial: the coefficients read the same forwards and backwards, so the terms pair off, and collecting like terms read backwards takes out each pair's coefficient."
                },
                {
                  "step": "$10(y^2 - 2) - 3y + 2 = 0$",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: $y^2 = x^2 + 2 + \\dfrac{1}{x^2}$ by the square of a binomial, so $x^2 + \\dfrac{1}{x^2} = y^2 - 2$."
                },
                {
                  "step": "$10y^2 - 3y - 18 = 0$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$(2y - 3)(5y + 6) = 0$",
                  "reason": "Factoring a quadratic: the two brackets multiply out to line 6."
                },
                {
                  "step": "Either $y = \\dfrac{3}{2}$ or $y = -\\dfrac{6}{5}$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x + \\dfrac{1}{x} = \\dfrac{3}{2}$ or $x + \\dfrac{1}{x} = -\\dfrac{6}{5}$.",
                  "reason": "Substituting a letter and undoing it: $x + \\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $2x^2 - 3x + 2 = 0$ or $5x^2 + 6x + 5 = 0$.",
                  "reason": "Multiplying both sides by the same number: the equations are multiplied by $2x$ and $5x$ in turn, each not $0$ by line 2, and the terms are gathered on the left."
                },
                {
                  "step": "So $x = \\dfrac{3 + i\\sqrt{7}}{4}$, $x = \\dfrac{3 - i\\sqrt{7}}{4}$, $x = \\dfrac{-3 + 4i}{5}$ or $x = \\dfrac{-3 - 4i}{5}$.",
                  "reason": "Quadratic formula, for each equation; where the discriminant is negative, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $8x^4 - 26x^3 + 27x^2 - 26x + 8 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (1+i*sqrt(15))/4, x = (1-i*sqrt(15))/4, x = (11+sqrt(57))/8, x = (11-sqrt(57))/8",
              "lines": [
                {
                  "step": "Find every complex solution of $8x^4 - 26x^3 + 27x^2 - 26x + 8 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$ the left side is $8$, so $x \\ne 0$.",
                  "reason": "Substituting a value: each term but the constant term holds $x$."
                },
                {
                  "step": "$8x^2 - 26x + 27 - \\dfrac{26}{x} + \\dfrac{8}{x^2} = 0$",
                  "reason": "Dividing both sides by a nonzero number: line 2 gives $x \\ne 0$, so both sides are divided by $x^2$."
                },
                {
                  "step": "$8\\left(x^2 + \\dfrac{1}{x^2}\\right) - 26\\left(x + \\dfrac{1}{x}\\right) + 27 = 0$",
                  "reason": "Palindromic polynomial: the coefficients read the same forwards and backwards, so the terms pair off, and collecting like terms read backwards takes out each pair's coefficient."
                },
                {
                  "step": "$8(y^2 - 2) - 26y + 27 = 0$",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: $y^2 = x^2 + 2 + \\dfrac{1}{x^2}$ by the square of a binomial, so $x^2 + \\dfrac{1}{x^2} = y^2 - 2$."
                },
                {
                  "step": "$8y^2 - 26y + 11 = 0$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$(2y - 1)(4y - 11) = 0$",
                  "reason": "Factoring a quadratic: the two brackets multiply out to line 6."
                },
                {
                  "step": "Either $y = \\dfrac{1}{2}$ or $y = \\dfrac{11}{4}$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x + \\dfrac{1}{x} = \\dfrac{1}{2}$ or $x + \\dfrac{1}{x} = \\dfrac{11}{4}$.",
                  "reason": "Substituting a letter and undoing it: $x + \\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $2x^2 - x + 2 = 0$ or $4x^2 - 11x + 4 = 0$.",
                  "reason": "Multiplying both sides by the same number: the equations are multiplied by $2x$ and $4x$ in turn, each not $0$ by line 2, and the terms are gathered on the left."
                },
                {
                  "step": "So $x = \\dfrac{1 + i\\sqrt{15}}{4}$, $x = \\dfrac{1 - i\\sqrt{15}}{4}$, $x = \\dfrac{11 + \\sqrt{57}}{8}$ or $x = \\dfrac{11 - \\sqrt{57}}{8}$.",
                  "reason": "Quadratic formula, for each equation; where the discriminant is negative, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every complex solution of $21x^6 - 19x^5 - 423x^4 + 242x^3 - 423x^2 - 19x + 21 = 0$.",
            "lines": [
              {
                "step": "Find every complex solution of $21x^6 - 19x^5 - 423x^4 + 242x^3 - 423x^2 - 19x + 21 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $x = 0$ the left side is $21$, so $x \\ne 0$.",
                "reason": "Substituting a value: each term but the constant term holds $x$."
              },
              {
                "step": "$21x^3 - 19x^2 - 423x + 242 - \\dfrac{423}{x} - \\dfrac{19}{x^2} + \\dfrac{21}{x^3} = 0$",
                "reason": "Dividing both sides by a nonzero number: line 2 gives $x \\ne 0$, so both sides are divided by $x^3$."
              },
              {
                "step": "$21\\left(x^3 + \\dfrac{1}{x^3}\\right) - 19\\left(x^2 + \\dfrac{1}{x^2}\\right) - 423\\left(x + \\dfrac{1}{x}\\right) + 242 = 0$",
                "reason": "Palindromic polynomial: the coefficients read the same forwards and backwards, so the terms pair off, and collecting like terms read backwards takes out each pair's coefficient."
              },
              {
                "step": "With $y = x + \\dfrac{1}{x}$: $x^2 + \\dfrac{1}{x^2} = y^2 - 2$ and $x^3 + \\dfrac{1}{x^3} = y^3 - 3y$.",
                "reason": "Squaring and cubing a known sum: $a^2 + b^2 = (a + b)^2 - 2ab$ and $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, with $x$ and $\\dfrac{1}{x}$, whose product is $1$."
              },
              {
                "step": "$21(y^3 - 3y) - 19(y^2 - 2) - 423y + 242 = 0$",
                "reason": "Substituting $y = x + \\dfrac{1}{x}$: line 5 is put into line 4."
              },
              {
                "step": "$21y^3 - 19y^2 - 486y + 280 = 0$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "$(y - 5)(21y^2 + 86y - 56) = 0$",
                "reason": "Factor Theorem: $y = 5$ makes line 7 $0$, so $y - 5$ is a factor, and dividing it out leaves the quadratic."
              },
              {
                "step": "$(y - 5)(3y + 14)(7y - 4) = 0$",
                "reason": "Factoring a quadratic: the last two brackets multiply out to the quadratic of line 8."
              },
              {
                "step": "Either $y = -\\dfrac{14}{3}$, $y = \\dfrac{4}{7}$ or $y = 5$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "So $x + \\dfrac{1}{x} = -\\dfrac{14}{3}$, $x + \\dfrac{1}{x} = \\dfrac{4}{7}$ or $x + \\dfrac{1}{x} = 5$.",
                "reason": "Substituting a letter and undoing it: $x + \\dfrac{1}{x}$ is put back in place of $y$."
              },
              {
                "step": "So $3x^2 + 14x + 3 = 0$, $7x^2 - 4x + 7 = 0$ or $x^2 - 5x + 1 = 0$.",
                "reason": "Multiplying both sides by the same number: the equations are multiplied by $3x$, $7x$ and $x$ in turn, each not $0$ by line 2, and the terms are gathered on the left."
              },
              {
                "step": "So $x = \\dfrac{-7 + 2\\sqrt{10}}{3}$, $x = \\dfrac{-7 - 2\\sqrt{10}}{3}$, $x = \\dfrac{2 + 3i\\sqrt{5}}{7}$, $x = \\dfrac{2 - 3i\\sqrt{5}}{7}$, $x = \\dfrac{5 + \\sqrt{21}}{2}$ or $x = \\dfrac{5 - \\sqrt{21}}{2}$.",
                "reason": "Quadratic formula, for each equation; where the discriminant is negative, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $5x^6 + 49x^5 - 399x^4 - 262x^3 - 399x^2 + 49x + 5 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (-15+sqrt(221))/2, x = (-15-sqrt(221))/2, x = (-2+i*sqrt(21))/5, x = (-2-i*sqrt(21))/5, x = 3+2*sqrt(2), x = 3-2*sqrt(2)",
              "lines": [
                {
                  "step": "Find every complex solution of $5x^6 + 49x^5 - 399x^4 - 262x^3 - 399x^2 + 49x + 5 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$ the left side is $5$, so $x \\ne 0$.",
                  "reason": "Substituting a value: each term but the constant term holds $x$."
                },
                {
                  "step": "$5x^3 + 49x^2 - 399x - 262 - \\dfrac{399}{x} + \\dfrac{49}{x^2} + \\dfrac{5}{x^3} = 0$",
                  "reason": "Dividing both sides by a nonzero number: line 2 gives $x \\ne 0$, so both sides are divided by $x^3$."
                },
                {
                  "step": "$5\\left(x^3 + \\dfrac{1}{x^3}\\right) + 49\\left(x^2 + \\dfrac{1}{x^2}\\right) - 399\\left(x + \\dfrac{1}{x}\\right) - 262 = 0$",
                  "reason": "Palindromic polynomial: the coefficients read the same forwards and backwards, so the terms pair off, and collecting like terms read backwards takes out each pair's coefficient."
                },
                {
                  "step": "With $y = x + \\dfrac{1}{x}$: $x^2 + \\dfrac{1}{x^2} = y^2 - 2$ and $x^3 + \\dfrac{1}{x^3} = y^3 - 3y$.",
                  "reason": "Squaring and cubing a known sum: $a^2 + b^2 = (a + b)^2 - 2ab$ and $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, with $x$ and $\\dfrac{1}{x}$, whose product is $1$."
                },
                {
                  "step": "$5(y^3 - 3y) + 49(y^2 - 2) - 399y - 262 = 0$",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: line 5 is put into line 4."
                },
                {
                  "step": "$5y^3 + 49y^2 - 414y - 360 = 0$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$(y - 6)(5y^2 + 79y + 60) = 0$",
                  "reason": "Factor Theorem: $y = 6$ makes line 7 $0$, so $y - 6$ is a factor, and dividing it out leaves the quadratic."
                },
                {
                  "step": "$(y - 6)(y + 15)(5y + 4) = 0$",
                  "reason": "Factoring a quadratic: the last two brackets multiply out to the quadratic of line 8."
                },
                {
                  "step": "Either $y = -15$, $y = -\\dfrac{4}{5}$ or $y = 6$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x + \\dfrac{1}{x} = -15$, $x + \\dfrac{1}{x} = -\\dfrac{4}{5}$ or $x + \\dfrac{1}{x} = 6$.",
                  "reason": "Substituting a letter and undoing it: $x + \\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $x^2 + 15x + 1 = 0$, $5x^2 + 4x + 5 = 0$ or $x^2 - 6x + 1 = 0$.",
                  "reason": "Multiplying both sides by the same number: the equations are multiplied by $x$, $5x$ and $x$ in turn, each not $0$ by line 2, and the terms are gathered on the left."
                },
                {
                  "step": "So $x = \\dfrac{-15 + \\sqrt{221}}{2}$, $x = \\dfrac{-15 - \\sqrt{221}}{2}$, $x = \\dfrac{-2 + i\\sqrt{21}}{5}$, $x = \\dfrac{-2 - i\\sqrt{21}}{5}$, $x = 3 + 2\\sqrt{2}$ or $x = 3 - 2\\sqrt{2}$.",
                  "reason": "Quadratic formula, for each equation; where the discriminant is negative, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $9x^6 + 128x^5 + 246x^4 + 4x^3 + 246x^2 + 128x + 9 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -6+sqrt(35), x = -6-sqrt(35), x = (7+5*i*sqrt(11))/18, x = (7-5*i*sqrt(11))/18, x = (-3+sqrt(5))/2, x = (-3-sqrt(5))/2",
              "lines": [
                {
                  "step": "Find every complex solution of $9x^6 + 128x^5 + 246x^4 + 4x^3 + 246x^2 + 128x + 9 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$ the left side is $9$, so $x \\ne 0$.",
                  "reason": "Substituting a value: each term but the constant term holds $x$."
                },
                {
                  "step": "$9x^3 + 128x^2 + 246x + 4 + \\dfrac{246}{x} + \\dfrac{128}{x^2} + \\dfrac{9}{x^3} = 0$",
                  "reason": "Dividing both sides by a nonzero number: line 2 gives $x \\ne 0$, so both sides are divided by $x^3$."
                },
                {
                  "step": "$9\\left(x^3 + \\dfrac{1}{x^3}\\right) + 128\\left(x^2 + \\dfrac{1}{x^2}\\right) + 246\\left(x + \\dfrac{1}{x}\\right) + 4 = 0$",
                  "reason": "Palindromic polynomial: the coefficients read the same forwards and backwards, so the terms pair off, and collecting like terms read backwards takes out each pair's coefficient."
                },
                {
                  "step": "With $y = x + \\dfrac{1}{x}$: $x^2 + \\dfrac{1}{x^2} = y^2 - 2$ and $x^3 + \\dfrac{1}{x^3} = y^3 - 3y$.",
                  "reason": "Squaring and cubing a known sum: $a^2 + b^2 = (a + b)^2 - 2ab$ and $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, with $x$ and $\\dfrac{1}{x}$, whose product is $1$."
                },
                {
                  "step": "$9(y^3 - 3y) + 128(y^2 - 2) + 246y + 4 = 0$",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: line 5 is put into line 4."
                },
                {
                  "step": "$9y^3 + 128y^2 + 219y - 252 = 0$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$(y + 3)(9y^2 + 101y - 84) = 0$",
                  "reason": "Factor Theorem: $y = -3$ makes line 7 $0$, so $y + 3$ is a factor, and dividing it out leaves the quadratic."
                },
                {
                  "step": "$(y + 3)(y + 12)(9y - 7) = 0$",
                  "reason": "Factoring a quadratic: the last two brackets multiply out to the quadratic of line 8."
                },
                {
                  "step": "Either $y = -12$, $y = \\dfrac{7}{9}$ or $y = -3$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x + \\dfrac{1}{x} = -12$, $x + \\dfrac{1}{x} = \\dfrac{7}{9}$ or $x + \\dfrac{1}{x} = -3$.",
                  "reason": "Substituting a letter and undoing it: $x + \\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $x^2 + 12x + 1 = 0$, $9x^2 - 7x + 9 = 0$ or $x^2 + 3x + 1 = 0$.",
                  "reason": "Multiplying both sides by the same number: the equations are multiplied by $x$, $9x$ and $x$ in turn, each not $0$ by line 2, and the terms are gathered on the left."
                },
                {
                  "step": "So $x = -6 + \\sqrt{35}$, $x = -6 - \\sqrt{35}$, $x = \\dfrac{7 + 5i\\sqrt{11}}{18}$, $x = \\dfrac{7 - 5i\\sqrt{11}}{18}$, $x = \\dfrac{-3 + \\sqrt{5}}{2}$ or $x = \\dfrac{-3 - \\sqrt{5}}{2}$.",
                  "reason": "Quadratic formula, for each equation; where the discriminant is negative, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $9x^6 + 157x^5 + 441x^4 + 34x^3 + 441x^2 + 157x + 9 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -2+sqrt(3), x = -2-sqrt(3), x = (5+i*sqrt(299))/18, x = (5-i*sqrt(299))/18, x = -7+4*sqrt(3), x = -7-4*sqrt(3)",
              "lines": [
                {
                  "step": "Find every complex solution of $9x^6 + 157x^5 + 441x^4 + 34x^3 + 441x^2 + 157x + 9 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$ the left side is $9$, so $x \\ne 0$.",
                  "reason": "Substituting a value: each term but the constant term holds $x$."
                },
                {
                  "step": "$9x^3 + 157x^2 + 441x + 34 + \\dfrac{441}{x} + \\dfrac{157}{x^2} + \\dfrac{9}{x^3} = 0$",
                  "reason": "Dividing both sides by a nonzero number: line 2 gives $x \\ne 0$, so both sides are divided by $x^3$."
                },
                {
                  "step": "$9\\left(x^3 + \\dfrac{1}{x^3}\\right) + 157\\left(x^2 + \\dfrac{1}{x^2}\\right) + 441\\left(x + \\dfrac{1}{x}\\right) + 34 = 0$",
                  "reason": "Palindromic polynomial: the coefficients read the same forwards and backwards, so the terms pair off, and collecting like terms read backwards takes out each pair's coefficient."
                },
                {
                  "step": "With $y = x + \\dfrac{1}{x}$: $x^2 + \\dfrac{1}{x^2} = y^2 - 2$ and $x^3 + \\dfrac{1}{x^3} = y^3 - 3y$.",
                  "reason": "Squaring and cubing a known sum: $a^2 + b^2 = (a + b)^2 - 2ab$ and $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, with $x$ and $\\dfrac{1}{x}$, whose product is $1$."
                },
                {
                  "step": "$9(y^3 - 3y) + 157(y^2 - 2) + 441y + 34 = 0$",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: line 5 is put into line 4."
                },
                {
                  "step": "$9y^3 + 157y^2 + 414y - 280 = 0$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$(y + 14)(9y^2 + 31y - 20) = 0$",
                  "reason": "Factor Theorem: $y = -14$ makes line 7 $0$, so $y + 14$ is a factor, and dividing it out leaves the quadratic."
                },
                {
                  "step": "$(y + 14)(y + 4)(9y - 5) = 0$",
                  "reason": "Factoring a quadratic: the last two brackets multiply out to the quadratic of line 8."
                },
                {
                  "step": "Either $y = -4$, $y = \\dfrac{5}{9}$ or $y = -14$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $x + \\dfrac{1}{x} = -4$, $x + \\dfrac{1}{x} = \\dfrac{5}{9}$ or $x + \\dfrac{1}{x} = -14$.",
                  "reason": "Substituting a letter and undoing it: $x + \\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $x^2 + 4x + 1 = 0$, $9x^2 - 5x + 9 = 0$ or $x^2 + 14x + 1 = 0$.",
                  "reason": "Multiplying both sides by the same number: the equations are multiplied by $x$, $9x$ and $x$ in turn, each not $0$ by line 2, and the terms are gathered on the left."
                },
                {
                  "step": "So $x = -2 + \\sqrt{3}$, $x = -2 - \\sqrt{3}$, $x = \\dfrac{5 + i\\sqrt{299}}{18}$, $x = \\dfrac{5 - i\\sqrt{299}}{18}$, $x = -7 + 4\\sqrt{3}$ or $x = -7 - 4\\sqrt{3}$.",
                  "reason": "Quadratic formula, for each equation; where the discriminant is negative, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t234-k3",
      "forms": [
        {
          "example": {
            "problem": "Find every complex solution of $(x + 15)^4 + (x + 7)^4 = 9026$.",
            "lines": [
              {
                "step": "Find every complex solution of $(x + 15)^4 + (x + 7)^4 = 9026$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = x + 11$: $x + 15 = y + 4$ and $x + 7 = y - 4$.",
                "reason": "Substitution for a repeated expression: $-11$ is midway between $-15$ and $-7$, so each bracket is $y$ moved by $4$, one up and one down."
              },
              {
                "step": "$(y + 4)^4 + (y - 4)^4 = 9026$",
                "reason": "Substituting a value: line 2 is put into the equation as given."
              },
              {
                "step": "$(y + 4)^4 = y^4 + 16y^3 + 96y^2 + 256y + 256$",
                "reason": "Binomial Theorem."
              },
              {
                "step": "$(y - 4)^4 = y^4 - 16y^3 + 96y^2 - 256y + 256$",
                "reason": "Binomial Theorem."
              },
              {
                "step": "$2y^4 + 192y^2 + 512 = 9026$",
                "reason": "Adding two equations: lines 4 and 5 are added into line 3, and the terms in $y^3$ and in $y$ cancel."
              },
              {
                "step": "$2y^4 + 192y^2 - 8514 = 0$",
                "reason": "Adding the same number to both sides: $9026$ is taken from each side."
              },
              {
                "step": "$y^4 + 96y^2 - 4257 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$(y^2 - 33)(y^2 + 129) = 0$",
                "reason": "Quadratic in an expression: with $y^2$ as the expression, $-33$ and $129$ have sum $96$ and product $-4257$."
              },
              {
                "step": "Either $y^2 = 33$ or $y^2 = -129$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "So $y = \\sqrt{33}$, $y = -\\sqrt{33}$, $y = i\\sqrt{129}$ or $y = -i\\sqrt{129}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $y^2$, each root in simplest radical form; for the negative value, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              },
              {
                "step": "So $x = -11 + \\sqrt{33}$, $x = -11 - \\sqrt{33}$, $x = -11 + i\\sqrt{129}$ or $x = -11 - i\\sqrt{129}$.",
                "reason": "Substituting a letter and undoing it: $x = y - 11$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $(x + 7)^4 + (x + 5)^4 = 632$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -6+sqrt(15), x = -6-sqrt(15), x = -6+i*sqrt(21), x = -6-i*sqrt(21)",
              "lines": [
                {
                  "step": "Find every complex solution of $(x + 7)^4 + (x + 5)^4 = 632$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x + 6$: $x + 7 = y + 1$ and $x + 5 = y - 1$.",
                  "reason": "Substitution for a repeated expression: $-6$ is midway between $-7$ and $-5$, so each bracket is $y$ moved by $1$, one up and one down."
                },
                {
                  "step": "$(y + 1)^4 + (y - 1)^4 = 632$",
                  "reason": "Substituting a value: line 2 is put into the equation as given."
                },
                {
                  "step": "$(y + 1)^4 = y^4 + 4y^3 + 6y^2 + 4y + 1$",
                  "reason": "Binomial Theorem."
                },
                {
                  "step": "$(y - 1)^4 = y^4 - 4y^3 + 6y^2 - 4y + 1$",
                  "reason": "Binomial Theorem."
                },
                {
                  "step": "$2y^4 + 12y^2 + 2 = 632$",
                  "reason": "Adding two equations: lines 4 and 5 are added into line 3, and the terms in $y^3$ and in $y$ cancel."
                },
                {
                  "step": "$2y^4 + 12y^2 - 630 = 0$",
                  "reason": "Adding the same number to both sides: $632$ is taken from each side."
                },
                {
                  "step": "$y^4 + 6y^2 - 315 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$(y^2 - 15)(y^2 + 21) = 0$",
                  "reason": "Quadratic in an expression: with $y^2$ as the expression, $-15$ and $21$ have sum $6$ and product $-315$."
                },
                {
                  "step": "Either $y^2 = 15$ or $y^2 = -21$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $y = \\sqrt{15}$, $y = -\\sqrt{15}$, $y = i\\sqrt{21}$ or $y = -i\\sqrt{21}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $y^2$, each root in simplest radical form; for the negative value, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = -6 + \\sqrt{15}$, $x = -6 - \\sqrt{15}$, $x = -6 + i\\sqrt{21}$ or $x = -6 - i\\sqrt{21}$.",
                  "reason": "Substituting a letter and undoing it: $x = y - 6$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $(x + 4)^4 + (x + 2)^4 = 376$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -3+sqrt(11), x = -3-sqrt(11), x = -3+i*sqrt(17), x = -3-i*sqrt(17)",
              "lines": [
                {
                  "step": "Find every complex solution of $(x + 4)^4 + (x + 2)^4 = 376$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x + 3$: $x + 4 = y + 1$ and $x + 2 = y - 1$.",
                  "reason": "Substitution for a repeated expression: $-3$ is midway between $-4$ and $-2$, so each bracket is $y$ moved by $1$, one up and one down."
                },
                {
                  "step": "$(y + 1)^4 + (y - 1)^4 = 376$",
                  "reason": "Substituting a value: line 2 is put into the equation as given."
                },
                {
                  "step": "$(y + 1)^4 = y^4 + 4y^3 + 6y^2 + 4y + 1$",
                  "reason": "Binomial Theorem."
                },
                {
                  "step": "$(y - 1)^4 = y^4 - 4y^3 + 6y^2 - 4y + 1$",
                  "reason": "Binomial Theorem."
                },
                {
                  "step": "$2y^4 + 12y^2 + 2 = 376$",
                  "reason": "Adding two equations: lines 4 and 5 are added into line 3, and the terms in $y^3$ and in $y$ cancel."
                },
                {
                  "step": "$2y^4 + 12y^2 - 374 = 0$",
                  "reason": "Adding the same number to both sides: $376$ is taken from each side."
                },
                {
                  "step": "$y^4 + 6y^2 - 187 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$(y^2 - 11)(y^2 + 17) = 0$",
                  "reason": "Quadratic in an expression: with $y^2$ as the expression, $-11$ and $17$ have sum $6$ and product $-187$."
                },
                {
                  "step": "Either $y^2 = 11$ or $y^2 = -17$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $y = \\sqrt{11}$, $y = -\\sqrt{11}$, $y = i\\sqrt{17}$ or $y = -i\\sqrt{17}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $y^2$, each root in simplest radical form; for the negative value, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = -3 + \\sqrt{11}$, $x = -3 - \\sqrt{11}$, $x = -3 + i\\sqrt{17}$ or $x = -3 - i\\sqrt{17}$.",
                  "reason": "Substituting a letter and undoing it: $x = y - 3$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $(x + 11)^4 + (x + 5)^4 = 2754$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -8+3*sqrt(2), x = -8-3*sqrt(2), x = -8+6*i*sqrt(2), x = -8-6*i*sqrt(2)",
              "lines": [
                {
                  "step": "Find every complex solution of $(x + 11)^4 + (x + 5)^4 = 2754$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x + 8$: $x + 11 = y + 3$ and $x + 5 = y - 3$.",
                  "reason": "Substitution for a repeated expression: $-8$ is midway between $-11$ and $-5$, so each bracket is $y$ moved by $3$, one up and one down."
                },
                {
                  "step": "$(y + 3)^4 + (y - 3)^4 = 2754$",
                  "reason": "Substituting a value: line 2 is put into the equation as given."
                },
                {
                  "step": "$(y + 3)^4 = y^4 + 12y^3 + 54y^2 + 108y + 81$",
                  "reason": "Binomial Theorem."
                },
                {
                  "step": "$(y - 3)^4 = y^4 - 12y^3 + 54y^2 - 108y + 81$",
                  "reason": "Binomial Theorem."
                },
                {
                  "step": "$2y^4 + 108y^2 + 162 = 2754$",
                  "reason": "Adding two equations: lines 4 and 5 are added into line 3, and the terms in $y^3$ and in $y$ cancel."
                },
                {
                  "step": "$2y^4 + 108y^2 - 2592 = 0$",
                  "reason": "Adding the same number to both sides: $2754$ is taken from each side."
                },
                {
                  "step": "$y^4 + 54y^2 - 1296 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$(y^2 - 18)(y^2 + 72) = 0$",
                  "reason": "Quadratic in an expression: with $y^2$ as the expression, $-18$ and $72$ have sum $54$ and product $-1296$."
                },
                {
                  "step": "Either $y^2 = 18$ or $y^2 = -72$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "So $y = 3\\sqrt{2}$, $y = -3\\sqrt{2}$, $y = 6i\\sqrt{2}$ or $y = -6i\\sqrt{2}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $y^2$, each root in simplest radical form; for the negative value, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = -8 + 3\\sqrt{2}$, $x = -8 - 3\\sqrt{2}$, $x = -8 + 6i\\sqrt{2}$ or $x = -8 - 6i\\sqrt{2}$.",
                  "reason": "Substituting a letter and undoing it: $x = y - 8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t234-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, which solves $4x^4 + 16x^3 - 65x^2 + 16x + 4 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
            "given": [
              "$4x^4 + 16x^3 - 65x^2 + 16x + 4 = 0$",
              "At $x = 0$ the left side is $4$, so $x \\ne 0$.",
              "$4x^2 + 16x - 65 + \\dfrac{16}{x} + \\dfrac{4}{x^2} = 0$",
              "$4\\left(x^2 + \\dfrac{1}{x^2}\\right) + 16\\left(x + \\dfrac{1}{x}\\right) - 65 = 0$",
              "$4y^2 + 16y - 65 = 0$",
              "$(2y + 13)(2y - 5) = 0$",
              "Either $y = -\\dfrac{13}{2}$ or $y = \\dfrac{5}{2}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which solves $4x^4 + 16x^3 - 65x^2 + 16x + 4 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 puts $y^2$ in place of $x^2 + \\dfrac{1}{x^2}$, the square of $x + \\dfrac{1}{x}$ taken term by term.",
                "reason": "Square of a binomial: $y^2 = x^2 + 2 \\cdot x \\cdot \\dfrac{1}{x} + \\dfrac{1}{x^2} = x^2 + 2 + \\dfrac{1}{x^2}$, so $x^2 + \\dfrac{1}{x^2} = y^2 - 2$."
              },
              {
                "step": "Line 5 written right is $4(y^2 - 2) + 16y - 65 = 0$, which is $4y^2 + 16y - 73 = 0$ multiplied out.",
                "reason": "Substituting $y = x + \\dfrac{1}{x}$: $y^2 - 2$ goes in place of $x^2 + \\dfrac{1}{x^2}$ and $y$ in place of $x + \\dfrac{1}{x}$ in line 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which solves $8x^4 + 10x^3 - 63x^2 + 10x + 8 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
              "given": [
                "$8x^4 + 10x^3 - 63x^2 + 10x + 8 = 0$",
                "At $x = 0$ the left side is $8$, so $x \\ne 0$.",
                "$8\\left(x^2 + \\dfrac{1}{x^2}\\right) + 10\\left(x + \\dfrac{1}{x}\\right) - 63 = 0$",
                "$8y^2 + 10y - 63 = 0$",
                "$(2y + 7)(4y - 9) = 0$",
                "Either $y = -\\dfrac{7}{2}$ or $y = \\dfrac{9}{4}$.",
                "So $x + \\dfrac{1}{x} = -\\dfrac{7}{2}$ or $x + \\dfrac{1}{x} = \\dfrac{9}{4}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 8*(y^2-2)+10*y-63 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which solves $8x^4 + 10x^3 - 63x^2 + 10x + 8 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 puts $y^2$ in place of $x^2 + \\dfrac{1}{x^2}$, the square of $x + \\dfrac{1}{x}$ taken term by term.",
                  "reason": "Square of a binomial: $y^2 = x^2 + 2 \\cdot x \\cdot \\dfrac{1}{x} + \\dfrac{1}{x^2} = x^2 + 2 + \\dfrac{1}{x^2}$, so $x^2 + \\dfrac{1}{x^2} = y^2 - 2$."
                },
                {
                  "step": "Line 4 written right is $8(y^2 - 2) + 10y - 63 = 0$, which is $8y^2 + 10y - 79 = 0$ multiplied out.",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: $y^2 - 2$ goes in place of $x^2 + \\dfrac{1}{x^2}$ and $y$ in place of $x + \\dfrac{1}{x}$ in line 3."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which solves $9x^4 + 36x^3 + 20x^2 + 36x + 9 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
              "given": [
                "$9x^4 + 36x^3 + 20x^2 + 36x + 9 = 0$",
                "At $x = 0$ the left side is $9$, so $x \\ne 0$.",
                "$9x^2 + 36x + 20 + \\dfrac{36}{x} + \\dfrac{9}{x^2} = 0$",
                "$9\\left(x^2 + \\dfrac{1}{x^2}\\right) + 36\\left(x + \\dfrac{1}{x}\\right) + 20 = 0$",
                "$9y^2 + 36y + 20 = 0$",
                "$(3y + 10)(3y + 2) = 0$",
                "Either $y = -\\dfrac{10}{3}$ or $y = -\\dfrac{2}{3}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 9*(y^2-2)+36*y+20 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which solves $9x^4 + 36x^3 + 20x^2 + 36x + 9 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 puts $y^2$ in place of $x^2 + \\dfrac{1}{x^2}$, the square of $x + \\dfrac{1}{x}$ taken term by term.",
                  "reason": "Square of a binomial: $y^2 = x^2 + 2 \\cdot x \\cdot \\dfrac{1}{x} + \\dfrac{1}{x^2} = x^2 + 2 + \\dfrac{1}{x^2}$, so $x^2 + \\dfrac{1}{x^2} = y^2 - 2$."
                },
                {
                  "step": "Line 5 written right is $9(y^2 - 2) + 36y + 20 = 0$, which is $9y^2 + 36y + 2 = 0$ multiplied out.",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: $y^2 - 2$ goes in place of $x^2 + \\dfrac{1}{x^2}$ and $y$ in place of $x + \\dfrac{1}{x}$ in line 4."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which solves $2x^4 - 21x^3 - 11x^2 - 21x + 2 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
              "given": [
                "$2x^4 - 21x^3 - 11x^2 - 21x + 2 = 0$",
                "At $x = 0$ the left side is $2$, so $x \\ne 0$.",
                "$2\\left(x^2 + \\dfrac{1}{x^2}\\right) - 21\\left(x + \\dfrac{1}{x}\\right) - 11 = 0$",
                "$2y^2 - 21y - 11 = 0$",
                "$(y - 11)(2y + 1) = 0$",
                "Either $y = 11$ or $y = -\\dfrac{1}{2}$.",
                "So $x + \\dfrac{1}{x} = 11$ or $x + \\dfrac{1}{x} = -\\dfrac{1}{2}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*(y^2-2)-21*y-11 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which solves $2x^4 - 21x^3 - 11x^2 - 21x + 2 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 puts $y^2$ in place of $x^2 + \\dfrac{1}{x^2}$, the square of $x + \\dfrac{1}{x}$ taken term by term.",
                  "reason": "Square of a binomial: $y^2 = x^2 + 2 \\cdot x \\cdot \\dfrac{1}{x} + \\dfrac{1}{x^2} = x^2 + 2 + \\dfrac{1}{x^2}$, so $x^2 + \\dfrac{1}{x^2} = y^2 - 2$."
                },
                {
                  "step": "Line 4 written right is $2(y^2 - 2) - 21y - 11 = 0$, which is $2y^2 - 21y - 15 = 0$ multiplied out.",
                  "reason": "Substituting $y = x + \\dfrac{1}{x}$: $y^2 - 2$ goes in place of $x^2 + \\dfrac{1}{x^2}$ and $y$ in place of $x + \\dfrac{1}{x}$ in line 3."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, which solves $4x^4 + 9x^3 + 5x^2 + 9x + 4 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
            "given": [
              "$4x^4 + 9x^3 + 5x^2 + 9x + 4 = 0$",
              "At $x = 0$ the left side is $4$, so $x \\ne 0$.",
              "$4x^2 + 9x - 5 + \\dfrac{9}{x} + \\dfrac{4}{x^2} = 0$",
              "$4\\left(x^2 + \\dfrac{1}{x^2}\\right) + 9\\left(x + \\dfrac{1}{x}\\right) - 5 = 0$",
              "$4(y^2 - 2) + 9y - 5 = 0$",
              "$4y^2 + 9y - 13 = 0$",
              "$(y - 1)(4y + 13) = 0$",
              "Either $y = 1$ or $y = -\\dfrac{13}{4}$.",
              "So $x + \\dfrac{1}{x} = 1$ or $x + \\dfrac{1}{x} = -\\dfrac{13}{4}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which solves $4x^4 + 9x^3 + 5x^2 + 9x + 4 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 has the constant term $-5$, but the term $5x^2$ of line 1 divided by $x^2$ is $5$: the sign is lost.",
                "reason": "Dividing both sides by a nonzero number: each term of line 1 is divided by $x^2$, which is not $0$ by line 2, and keeps its sign."
              },
              {
                "step": "Line 3 written right is $4x^2 + 9x + 5 + \\dfrac{9}{x} + \\dfrac{4}{x^2} = 0$.",
                "reason": "Dividing both sides by a nonzero number: the constant term is $5$, and the other terms of line 3 are right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which solves $3x^4 - 26x^3 - 62x^2 - 26x + 3 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
              "given": [
                "$3x^4 - 26x^3 - 62x^2 - 26x + 3 = 0$",
                "At $x = 0$ the left side is $3$, so $x \\ne 0$.",
                "$3x^2 - 26x - 62 - \\dfrac{26}{x} + \\dfrac{3}{x^2} = 0$",
                "$3\\left(x^2 + \\dfrac{1}{x^2}\\right) - 26\\left(x + \\dfrac{1}{x}\\right) + 62 = 0$",
                "$3(y^2 - 2) - 26y + 62 = 0$",
                "$3y^2 - 26y + 56 = 0$",
                "$(y - 4)(3y - 14) = 0$",
                "Either $y = 4$ or $y = \\dfrac{14}{3}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 3*(x^2+1/x^2)-26*(x+1/x)-62 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which solves $3x^4 - 26x^3 - 62x^2 - 26x + 3 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 has the constant term $62$, but the term $-62x^2$ of line 1 divided by $x^2$ is $-62$: the sign is lost.",
                  "reason": "Dividing both sides by a nonzero number: each term of line 1 is divided by $x^2$, which is not $0$ by line 2, and keeps its sign."
                },
                {
                  "step": "Line 4 written right is $3\\left(x^2 + \\dfrac{1}{x^2}\\right) - 26\\left(x + \\dfrac{1}{x}\\right) - 62 = 0$.",
                  "reason": "Dividing both sides by a nonzero number: the constant term is $-62$, and the other terms of line 4 are right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which solves $20x^4 + 33x^3 - 47x^2 + 33x + 20 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
              "given": [
                "$20x^4 + 33x^3 - 47x^2 + 33x + 20 = 0$",
                "At $x = 0$ the left side is $20$, so $x \\ne 0$.",
                "$20x^2 + 33x + 47 + \\dfrac{33}{x} + \\dfrac{20}{x^2} = 0$",
                "$20\\left(x^2 + \\dfrac{1}{x^2}\\right) + 33\\left(x + \\dfrac{1}{x}\\right) + 47 = 0$",
                "$20(y^2 - 2) + 33y + 47 = 0$",
                "$20y^2 + 33y + 7 = 0$",
                "$(4y + 1)(5y + 7) = 0$",
                "Either $y = -\\dfrac{1}{4}$ or $y = -\\dfrac{7}{5}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 20*x^2+33*x-47+33/x+20/x^2 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which solves $20x^4 + 33x^3 - 47x^2 + 33x + 20 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 has the constant term $47$, but the term $-47x^2$ of line 1 divided by $x^2$ is $-47$: the sign is lost.",
                  "reason": "Dividing both sides by a nonzero number: each term of line 1 is divided by $x^2$, which is not $0$ by line 2, and keeps its sign."
                },
                {
                  "step": "Line 3 written right is $20x^2 + 33x - 47 + \\dfrac{33}{x} + \\dfrac{20}{x^2} = 0$.",
                  "reason": "Dividing both sides by a nonzero number: the constant term is $-47$, and the other terms of line 3 are right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which solves $20x^4 + 41x^3 + 2x^2 + 41x + 20 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
              "given": [
                "$20x^4 + 41x^3 + 2x^2 + 41x + 20 = 0$",
                "At $x = 0$ the left side is $20$, so $x \\ne 0$.",
                "$20x^2 + 41x + 2 + \\dfrac{41}{x} + \\dfrac{20}{x^2} = 0$",
                "$20\\left(x^2 + \\dfrac{1}{x^2}\\right) + 41\\left(x + \\dfrac{1}{x}\\right) - 2 = 0$",
                "$20(y^2 - 2) + 41y - 2 = 0$",
                "$20y^2 + 41y - 42 = 0$",
                "$(4y - 3)(5y + 14) = 0$",
                "Either $y = \\dfrac{3}{4}$ or $y = -\\dfrac{14}{5}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 20*(x^2+1/x^2)+41*(x+1/x)+2 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which solves $20x^4 + 41x^3 + 2x^2 + 41x + 20 = 0$ with $y = x + \\dfrac{1}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 has the constant term $-2$, but the term $2x^2$ of line 1 divided by $x^2$ is $2$: the sign is lost.",
                  "reason": "Dividing both sides by a nonzero number: each term of line 1 is divided by $x^2$, which is not $0$ by line 2, and keeps its sign."
                },
                {
                  "step": "Line 4 written right is $20\\left(x^2 + \\dfrac{1}{x^2}\\right) + 41\\left(x + \\dfrac{1}{x}\\right) + 2 = 0$.",
                  "reason": "Dividing both sides by a nonzero number: the constant term is $2$, and the other terms of line 4 are right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t234-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with both sums on the left: 3 times the sum of the square of a nonzero number $x$ and the square of its reciprocal, minus 6 times the sum of $x$ and its reciprocal, is $31$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with both sums on the left: 3 times the sum of the square of a nonzero number $x$ and the square of its reciprocal, minus 6 times the sum of $x$ and its reciprocal, is $31$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the square of $x$ and the square of its reciprocal is $x^2 + \\dfrac{1}{x^2}$.",
                "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
              },
              {
                "step": "3 times that sum is $3\\left(x^2 + \\dfrac{1}{x^2}\\right)$, and 6 times the sum of $x$ and its reciprocal is $6\\left(x + \\dfrac{1}{x}\\right)$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
              },
              {
                "step": "The second taken from the first is $3\\left(x^2 + \\dfrac{1}{x^2}\\right) - 6\\left(x + \\dfrac{1}{x}\\right)$.",
                "reason": "Writing a sentence as an equation: \"minus\" means the second amount is taken away from the first."
              },
              {
                "step": "$3\\left(x^2 + \\dfrac{1}{x^2}\\right) - 6\\left(x + \\dfrac{1}{x}\\right) = 31$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with both sums on the left: 9 times the sum of the square of a nonzero number $x$ and the square of its reciprocal, minus 5 times the sum of $x$ and its reciprocal, is $28$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "9*(x^2+1/x^2)-5*(x+1/x) = 28",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with both sums on the left: 9 times the sum of the square of a nonzero number $x$ and the square of its reciprocal, minus 5 times the sum of $x$ and its reciprocal, is $28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the square of $x$ and the square of its reciprocal is $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "9 times that sum is $9\\left(x^2 + \\dfrac{1}{x^2}\\right)$, and 5 times the sum of $x$ and its reciprocal is $5\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "The second taken from the first is $9\\left(x^2 + \\dfrac{1}{x^2}\\right) - 5\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"minus\" means the second amount is taken away from the first."
                },
                {
                  "step": "$9\\left(x^2 + \\dfrac{1}{x^2}\\right) - 5\\left(x + \\dfrac{1}{x}\\right) = 28$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with both sums on the left: 2 times the sum of the square of a nonzero number $x$ and the square of its reciprocal, minus 11 times the sum of $x$ and its reciprocal, is $23$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*(x^2+1/x^2)-11*(x+1/x) = 23",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with both sums on the left: 2 times the sum of the square of a nonzero number $x$ and the square of its reciprocal, minus 11 times the sum of $x$ and its reciprocal, is $23$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the square of $x$ and the square of its reciprocal is $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "2 times that sum is $2\\left(x^2 + \\dfrac{1}{x^2}\\right)$, and 11 times the sum of $x$ and its reciprocal is $11\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "The second taken from the first is $2\\left(x^2 + \\dfrac{1}{x^2}\\right) - 11\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"minus\" means the second amount is taken away from the first."
                },
                {
                  "step": "$2\\left(x^2 + \\dfrac{1}{x^2}\\right) - 11\\left(x + \\dfrac{1}{x}\\right) = 23$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with both sums on the left: 3 times the sum of the square of a nonzero number $x$ and the square of its reciprocal, minus 4 times the sum of $x$ and its reciprocal, is $\\dfrac{26}{5}$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "3*(x^2+1/x^2)-4*(x+1/x) = 26/5",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with both sums on the left: 3 times the sum of the square of a nonzero number $x$ and the square of its reciprocal, minus 4 times the sum of $x$ and its reciprocal, is $\\dfrac{26}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the square of $x$ and the square of its reciprocal is $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "3 times that sum is $3\\left(x^2 + \\dfrac{1}{x^2}\\right)$, and 4 times the sum of $x$ and its reciprocal is $4\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "The second taken from the first is $3\\left(x^2 + \\dfrac{1}{x^2}\\right) - 4\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"minus\" means the second amount is taken away from the first."
                },
                {
                  "step": "$3\\left(x^2 + \\dfrac{1}{x^2}\\right) - 4\\left(x + \\dfrac{1}{x}\\right) = \\dfrac{26}{5}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 43 more than 28 times the sum of $x$ and its reciprocal.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 43 more than 28 times the sum of $x$ and its reciprocal.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two squares added are $x^2 + \\dfrac{1}{x^2}$.",
                "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
              },
              {
                "step": "28 times the sum of $x$ and its reciprocal is $28\\left(x + \\dfrac{1}{x}\\right)$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
              },
              {
                "step": "43 more than that is $28\\left(x + \\dfrac{1}{x}\\right) + 43$.",
                "reason": "Writing a sentence as an equation: \"more than\" means the amount is added."
              },
              {
                "step": "$x^2 + \\dfrac{1}{x^2} = 28\\left(x + \\dfrac{1}{x}\\right) + 43$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 15 more than 38 times the sum of $x$ and its reciprocal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+1/x^2 = 38*(x+1/x)+15",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 15 more than 38 times the sum of $x$ and its reciprocal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two squares added are $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "38 times the sum of $x$ and its reciprocal is $38\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "15 more than that is $38\\left(x + \\dfrac{1}{x}\\right) + 15$.",
                  "reason": "Writing a sentence as an equation: \"more than\" means the amount is added."
                },
                {
                  "step": "$x^2 + \\dfrac{1}{x^2} = 38\\left(x + \\dfrac{1}{x}\\right) + 15$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 33 more than 16 times the sum of $x$ and its reciprocal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+1/x^2 = 16*(x+1/x)+33",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 33 more than 16 times the sum of $x$ and its reciprocal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two squares added are $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "16 times the sum of $x$ and its reciprocal is $16\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "33 more than that is $16\\left(x + \\dfrac{1}{x}\\right) + 33$.",
                  "reason": "Writing a sentence as an equation: \"more than\" means the amount is added."
                },
                {
                  "step": "$x^2 + \\dfrac{1}{x^2} = 16\\left(x + \\dfrac{1}{x}\\right) + 33$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 11 more than 9 times the sum of $x$ and its reciprocal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+1/x^2 = 9*(x+1/x)+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 11 more than 9 times the sum of $x$ and its reciprocal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two squares added are $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "9 times the sum of $x$ and its reciprocal is $9\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "11 more than that is $9\\left(x + \\dfrac{1}{x}\\right) + 11$.",
                  "reason": "Writing a sentence as an equation: \"more than\" means the amount is added."
                },
                {
                  "step": "$x^2 + \\dfrac{1}{x^2} = 9\\left(x + \\dfrac{1}{x}\\right) + 11$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 36 less than 19 times the sum of $x$ and its reciprocal.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 36 less than 19 times the sum of $x$ and its reciprocal.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two squares added are $x^2 + \\dfrac{1}{x^2}$.",
                "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
              },
              {
                "step": "19 times the sum of $x$ and its reciprocal is $19\\left(x + \\dfrac{1}{x}\\right)$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
              },
              {
                "step": "36 less than that is $19\\left(x + \\dfrac{1}{x}\\right) - 36$.",
                "reason": "Writing a sentence as an equation: \"less than\" means the amount is taken away."
              },
              {
                "step": "$x^2 + \\dfrac{1}{x^2} = 19\\left(x + \\dfrac{1}{x}\\right) - 36$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 27 less than 37 times the sum of $x$ and its reciprocal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+1/x^2 = 37*(x+1/x)-27",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 27 less than 37 times the sum of $x$ and its reciprocal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two squares added are $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "37 times the sum of $x$ and its reciprocal is $37\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "27 less than that is $37\\left(x + \\dfrac{1}{x}\\right) - 27$.",
                  "reason": "Writing a sentence as an equation: \"less than\" means the amount is taken away."
                },
                {
                  "step": "$x^2 + \\dfrac{1}{x^2} = 37\\left(x + \\dfrac{1}{x}\\right) - 27$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 35 less than 22 times the sum of $x$ and its reciprocal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+1/x^2 = 22*(x+1/x)-35",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 35 less than 22 times the sum of $x$ and its reciprocal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two squares added are $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "22 times the sum of $x$ and its reciprocal is $22\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "35 less than that is $22\\left(x + \\dfrac{1}{x}\\right) - 35$.",
                  "reason": "Writing a sentence as an equation: \"less than\" means the amount is taken away."
                },
                {
                  "step": "$x^2 + \\dfrac{1}{x^2} = 22\\left(x + \\dfrac{1}{x}\\right) - 35$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 8 less than 14 times the sum of $x$ and its reciprocal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+1/x^2 = 14*(x+1/x)-8",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two squares on the left: The square of a nonzero number $x$, added to the square of its reciprocal, is 8 less than 14 times the sum of $x$ and its reciprocal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two squares added are $x^2 + \\dfrac{1}{x^2}$.",
                  "reason": "Power of a quotient: the square of $\\dfrac{1}{x}$ is $\\dfrac{1}{x^2}$."
                },
                {
                  "step": "14 times the sum of $x$ and its reciprocal is $14\\left(x + \\dfrac{1}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole sum."
                },
                {
                  "step": "8 less than that is $14\\left(x + \\dfrac{1}{x}\\right) - 8$.",
                  "reason": "Writing a sentence as an equation: \"less than\" means the amount is taken away."
                },
                {
                  "step": "$x^2 + \\dfrac{1}{x^2} = 14\\left(x + \\dfrac{1}{x}\\right) - 8$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
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
      "id": "t234-p1",
      "method": "direct proof",
      "statement": "If $r$ is a root of a palindromic polynomial $p(x) = a_nx^n + a_{n - 1}x^{n - 1} + \\cdots + a_1x + a_0$, with $a_n \\ne 0$ and $a_k = a_{n - k}$ for every whole number $k$ from $0$ to $n$, then $r \\ne 0$ and $\\dfrac{1}{r}$ is also a root.",
      "idea": "Put $\\dfrac{1}{r}$ into the polynomial, write the result over $r^n$, and read the top backwards: it is $p(r)$.",
      "lines": [
        {
          "line": "The value $p(0)$ is $a_0$.",
          "reason": "Substituting a value: each term but the constant term holds $x$."
        },
        {
          "line": "So $p(0) = a_n$, which is not $0$.",
          "reason": "Palindromic polynomial: $a_0 = a_n$, and $a_n \\ne 0$ is given."
        },
        {
          "line": "So $r \\ne 0$.",
          "reason": "A root satisfies its equation: $p(r) = 0$, while line 2 gives $p(0) \\ne 0$."
        },
        {
          "line": "The value $p\\left(\\dfrac{1}{r}\\right)$ is $\\dfrac{a_n}{r^n} + \\dfrac{a_{n - 1}}{r^{n - 1}} + \\cdots + \\dfrac{a_1}{r} + a_0$.",
          "reason": "Substituting a value and the power of a quotient: $\\left(\\dfrac{1}{r}\\right)^k = \\dfrac{1}{r^k}$."
        },
        {
          "line": "So $p\\left(\\dfrac{1}{r}\\right) = \\dfrac{a_n + a_{n - 1}r + \\cdots + a_1r^{n - 1} + a_0r^n}{r^n}$.",
          "reason": "Single fraction: the terms are written over the common denominator $r^n$, which is not $0$ by line 3."
        },
        {
          "line": "The top of line 5 is $a_0 + a_1r + \\cdots + a_{n - 1}r^{n - 1} + a_nr^n$.",
          "reason": "Palindromic polynomial: the coefficient of $r^k$ on the top is $a_{n - k}$, and $a_{n - k} = a_k$."
        },
        {
          "line": "The top of line 5 is $p(r)$.",
          "reason": "Substituting a value: line 6 is $p(r)$ read in ascending powers."
        },
        {
          "line": "So the top of line 5 is $0$.",
          "reason": "A root satisfies its equation: $p(r) = 0$."
        },
        {
          "line": "So $p\\left(\\dfrac{1}{r}\\right) = \\dfrac{0}{r^n} = 0$, and $\\dfrac{1}{r}$ is a root.",
          "reason": "Root of an equation: a number that makes the polynomial $0$ is a root."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t234-s1",
      "method": "direct proof",
      "statement": "Prove that $-1$ is a root of every palindromic polynomial of odd degree. Facts it may use: palindromic polynomial, substituting a value, even whole numbers (from arithmetic), sign of a power of a negative number, collecting like terms, root of an equation.",
      "check": {
        "proof": [
          {
            "line": "Write the polynomial as $p(x) = a_nx^n + \\cdots + a_1x + a_0$, with $n$ odd and $a_k = a_{n - k}$ for every whole number $k$ from $0$ to $n$.",
            "reason": "Palindromic polynomial."
          },
          {
            "line": "The value $p(-1)$ is $a_n(-1)^n + a_{n - 1}(-1)^{n - 1} + \\cdots + a_1(-1) + a_0$.",
            "reason": "Substituting a value."
          },
          {
            "line": "For each whole number $k$ from $0$ to $n$, one of $k$ and $n - k$ is odd and the other is even.",
            "reason": "Even whole numbers, from arithmetic: $k + (n - k) = n$ is odd, and the sum of two odd or of two even numbers is even."
          },
          {
            "line": "So $(-1)^{n - k} = -(-1)^k$ for each such $k$.",
            "reason": "Sign of a power of a negative number: an even power of $-1$ is $1$, an odd power is $-1$."
          },
          {
            "line": "So $a_k(-1)^k + a_{n - k}(-1)^{n - k} = a_k(-1)^k - a_k(-1)^k = 0$ for each such $k$.",
            "reason": "Palindromic polynomial: $a_{n - k} = a_k$, with line 4."
          },
          {
            "line": "Since $n$ is odd, $k$ and $n - k$ are never equal, so the $n + 1$ terms of line 2 split into pairs, the term of $k$ with the term of $n - k$.",
            "reason": "Even whole numbers, from arithmetic: $k = n - k$ would make $n = 2k$ even."
          },
          {
            "line": "So $p(-1) = 0$.",
            "reason": "Collecting like terms: the sum of line 2 is a sum of pairs, each $0$ by line 5."
          },
          {
            "line": "Therefore $-1$ is a root of $p(x)$.",
            "reason": "Root of an equation: a number that makes the polynomial $0$ is a root."
          }
        ]
      }
    },
    {
      "id": "t234-s2",
      "method": "direct proof",
      "statement": "Prove that for a real number $y$, the equation $x + \\dfrac{1}{x} = y$ has a real solution $x$ exactly when $y \\le -2$ or $y \\ge 2$. Facts it may use: multiplying both sides by the same number, adding the same number to both sides, substituting a value, discriminant, difference of squares, the sign of a product.",
      "check": {
        "proof": [
          {
            "line": "For a nonzero number $x$, $x + \\dfrac{1}{x} = y$ exactly when $x^2 + 1 = yx$.",
            "reason": "Multiplying both sides by the same number: by $x$, which is not $0$, and back by dividing by $x$."
          },
          {
            "line": "So for a nonzero number $x$, $x + \\dfrac{1}{x} = y$ exactly when $x^2 - yx + 1 = 0$.",
            "reason": "Adding the same number to both sides: $yx$ is taken from each side."
          },
          {
            "line": "The number $0$ is not a root of $x^2 - yx + 1 = 0$, since the left side at $x = 0$ is $1$.",
            "reason": "Substituting a value."
          },
          {
            "line": "So the real solutions of $x + \\dfrac{1}{x} = y$ are exactly the real roots of $x^2 - yx + 1 = 0$.",
            "reason": "Lines 2 and 3."
          },
          {
            "line": "The discriminant of $x^2 - yx + 1$ is $y^2 - 4$.",
            "reason": "Discriminant: $b^2 - 4ac$ with $a = 1$, $b = -y$, $c = 1$."
          },
          {
            "line": "So $x^2 - yx + 1 = 0$ has a real root exactly when $y^2 - 4 \\ge 0$.",
            "reason": "Positive, zero, negative discriminant: two real roots, one double root, or no real root."
          },
          {
            "line": "The number $y^2 - 4$ equals $(y - 2)(y + 2)$.",
            "reason": "Difference of squares."
          },
          {
            "line": "So $y^2 - 4 \\ge 0$ exactly when $y \\le -2$ or $y \\ge 2$.",
            "reason": "The sign of a product: a product is positive when its factors have the same sign and negative when they differ, and it is $0$ at $y = 2$ and $y = -2$."
          },
          {
            "line": "Therefore $x + \\dfrac{1}{x} = y$ has a real solution exactly when $y \\le -2$ or $y \\ge 2$.",
            "reason": "Lines 4, 6 and 8."
          }
        ]
      }
    },
    {
      "id": "t234-s3",
      "method": "strong induction",
      "statement": "Prove that if $x + \\dfrac{1}{x}$ is an integer then so is $x^n + \\dfrac{1}{x^n}$ for every whole number $n$ from $1$ up. Facts it may use: strong induction, reciprocal (from arithmetic), Power-sum recursion, squaring and cubing a known sum, integers added, taken away and multiplied give integers.",
      "check": {
        "proof": [
          {
            "line": "Write $m$ for $x + \\dfrac{1}{x}$, an integer; then $x \\cdot \\dfrac{1}{x} = 1$.",
            "reason": "Reciprocal, from arithmetic."
          },
          {
            "line": "For $n = 1$, $x^1 + \\dfrac{1}{x^1} = m$, an integer.",
            "reason": "Base case."
          },
          {
            "line": "For $n = 2$, $x^2 + \\dfrac{1}{x^2} = m^2 - 2$, an integer.",
            "reason": "Base case, by squaring and cubing a known sum: $a^2 + b^2 = (a + b)^2 - 2ab$ with $ab = 1$."
          },
          {
            "line": "Take a whole number $k$ from $2$ up such that $x^j + \\dfrac{1}{x^j}$ is an integer for every whole number $j$ from $1$ to $k$.",
            "reason": "Inductive assumption."
          },
          {
            "line": "Then $x^{k + 1} + \\dfrac{1}{x^{k + 1}} = m\\left(x^k + \\dfrac{1}{x^k}\\right) - \\left(x^{k - 1} + \\dfrac{1}{x^{k - 1}}\\right)$.",
            "reason": "Power-sum recursion: the two numbers $x$ and $\\dfrac{1}{x}$ have sum $m$ and product $1$, by line 1."
          },
          {
            "line": "Both brackets of line 5 are integers.",
            "reason": "Line 4: $k$ and $k - 1$ lie from $1$ to $k$, since $k \\ge 2$."
          },
          {
            "line": "So $x^{k + 1} + \\dfrac{1}{x^{k + 1}}$ is an integer.",
            "reason": "Inductive step: integers multiplied and taken away give an integer, with lines 5 and 6."
          },
          {
            "line": "Therefore $x^n + \\dfrac{1}{x^n}$ is an integer for every whole number $n$ from $1$ up.",
            "reason": "Strong induction: lines 2 and 3 are the base cases and line 7 the step."
          }
        ]
      }
    }
  ]
}
