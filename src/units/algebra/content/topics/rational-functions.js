export default {
  "number": 174,
  "title": "Rational functions and their graphs",
  "section": 15,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "573-576, 584-588"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the asymptotes of the graph of $f(x) = \\dfrac{-9x + 3}{2x + 4}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
    "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
    "answer": "x = -2, y = -9/2",
    "solution": [
      "Find the asymptotes of the graph of $f(x) = \\dfrac{-9x + 3}{2x + 4}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
      "$2x + 4 = 0$",
      "$2x = -4$",
      "$x = -2$",
      "$-9 \\cdot \\left(-2\\right) + 3 = 21$",
      "The vertical asymptote is $x = -2$.",
      "Top and bottom both have degree $1$, with leading coefficients $-9$ and $2$.",
      "The horizontal asymptote is $y = -\\dfrac{9}{2}$."
    ]
  },
  "ideas": [
    {
      "name": "Rational function and vertical asymptote",
      "concrete": "The function $f(x) = \\dfrac{4x - 7}{2x + 9}$ is one polynomial divided by another. Its bottom is $0$ at $x = -\\dfrac{9}{2}$, and there its top is $4 \\cdot \\left(-\\dfrac{9}{2}\\right) - 7 = -25$, which is not $0$. For $x$ close to $-\\dfrac{9}{2}$ the top stays close to $-25$ while the bottom comes close to $0$, so the values of $f$ grow without bound: the line $x = -\\dfrac{9}{2}$ is a vertical asymptote of the graph.",
      "general": "A **rational function** is one polynomial divided by another, the bottom not the zero polynomial. For polynomials $p$ and $q$ and a number $r$ with $q(r) = 0$ and $p(r) \\ne 0$, the graph of $f(x) = \\dfrac{p(x)}{q(x)}$ has the **vertical asymptote** $x = r$."
    },
    {
      "name": "Horizontal asymptote",
      "concrete": "For $x \\ne 0$, dividing top and bottom of $\\dfrac{4x - 7}{2x + 9}$ by $x$ gives $\\dfrac{4 - \\dfrac{7}{x}}{2 + \\dfrac{9}{x}}$. Far from $0$ the parts $\\dfrac{7}{x}$ and $\\dfrac{9}{x}$ are close to $0$, so the value is close to $\\dfrac{4}{2} = 2$: the line $y = 2$ is a horizontal asymptote. For $\\dfrac{5x + 3}{x^2 + 6}$ the bottom grows faster than the top, and the horizontal asymptote is $y = 0$.",
      "general": "For a rational function $\\dfrac{p(x)}{q(x)}$ with $p$ not the zero polynomial: when the degree of $p$ is less than the degree of $q$, the line $y = 0$ is the **horizontal asymptote**; when the degrees are equal, the horizontal asymptote is $y = \\dfrac{a}{b}$, where $a$ is the leading coefficient of $p$ and $b$ the leading coefficient of $q$."
    },
    {
      "name": "A common factor of top and bottom leaves a hole",
      "concrete": "The function $g(x) = \\dfrac{2x^2 + 5x - 18}{3x^2 - x - 10}$ factors as $\\dfrac{(x - 2)(2x + 9)}{(x - 2)(3x + 5)}$. For $x \\ne 2$ it equals $\\dfrac{2x + 9}{3x + 5}$, but $g$ has no value at $x = 2$. The graph of $g$ is the graph of $\\dfrac{2x + 9}{3x + 5}$ with the point $\\left(2, \\dfrac{13}{11}\\right)$ left out: a hole, not an asymptote, at $x = 2$.",
      "general": "For polynomials $p$ and $q$ and a number $r$ with $q(r) \\ne 0$, the function $f(x) = \\dfrac{(x - r)p(x)}{(x - r)q(x)}$ equals $\\dfrac{p(x)}{q(x)}$ for every $x \\ne r$ in its domain and has no value at $x = r$. Its graph is the graph of $\\dfrac{p(x)}{q(x)}$ with the point $\\left(r, \\dfrac{p(r)}{q(r)}\\right)$ left out: a hole at $x = r$."
    }
  ],
  "kinds": [
    {
      "id": "t174-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the asymptotes of the graph of $f(x) = \\dfrac{5x - 10}{3x - 5}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
            "lines": [
              {
                "step": "Find the asymptotes of the graph of $f(x) = \\dfrac{5x - 10}{3x - 5}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x - 5 = 0$",
                "reason": "Domain: $f$ has no value where the bottom is $0$."
              },
              {
                "step": "$3x = 5$",
                "reason": "Adding the same number to both sides: $5$ is added to both sides."
              },
              {
                "step": "$x = \\dfrac{5}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$5 \\cdot \\dfrac{5}{3} - 10 = -\\dfrac{5}{3}$",
                "reason": "Substituting a value: the top at $x = \\dfrac{5}{3}$ is $-\\dfrac{5}{3}$, which is not $0$."
              },
              {
                "step": "The vertical asymptote is $x = \\dfrac{5}{3}$.",
                "reason": "Vertical asymptote: the bottom is $0$ at $x = \\dfrac{5}{3}$ and the top is not."
              },
              {
                "step": "Top and bottom both have degree $1$, with leading coefficients $5$ and $3$.",
                "reason": "Leading coefficient: the coefficient of the highest power of $x$ in each."
              },
              {
                "step": "The horizontal asymptote is $y = \\dfrac{5}{3}$.",
                "reason": "Horizontal asymptote: with equal degrees it is $y$ equal to the top's leading coefficient over the bottom's."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the asymptotes of the graph of $f(x) = \\dfrac{7x + 10}{6x - 11}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 11/6, y = 7/6",
              "lines": [
                {
                  "step": "Find the asymptotes of the graph of $f(x) = \\dfrac{7x + 10}{6x - 11}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x - 11 = 0$",
                  "reason": "Domain: $f$ has no value where the bottom is $0$."
                },
                {
                  "step": "$6x = 11$",
                  "reason": "Adding the same number to both sides: $11$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{11}{6}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$7 \\cdot \\dfrac{11}{6} + 10 = \\dfrac{137}{6}$",
                  "reason": "Substituting a value: the top at $x = \\dfrac{11}{6}$ is $\\dfrac{137}{6}$, which is not $0$."
                },
                {
                  "step": "The vertical asymptote is $x = \\dfrac{11}{6}$.",
                  "reason": "Vertical asymptote: the bottom is $0$ at $x = \\dfrac{11}{6}$ and the top is not."
                },
                {
                  "step": "Top and bottom both have degree $1$, with leading coefficients $7$ and $6$.",
                  "reason": "Leading coefficient: the coefficient of the highest power of $x$ in each."
                },
                {
                  "step": "The horizontal asymptote is $y = \\dfrac{7}{6}$.",
                  "reason": "Horizontal asymptote: with equal degrees it is $y$ equal to the top's leading coefficient over the bottom's."
                }
              ]
            },
            {
              "prompt": "Find the asymptotes of the graph of $f(x) = \\dfrac{4x + 11}{4x + 8}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -2, y = 1",
              "lines": [
                {
                  "step": "Find the asymptotes of the graph of $f(x) = \\dfrac{4x + 11}{4x + 8}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 8 = 0$",
                  "reason": "Domain: $f$ has no value where the bottom is $0$."
                },
                {
                  "step": "$4x = -8$",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$4 \\cdot \\left(-2\\right) + 11 = 3$",
                  "reason": "Substituting a value: the top at $x = -2$ is $3$, which is not $0$."
                },
                {
                  "step": "The vertical asymptote is $x = -2$.",
                  "reason": "Vertical asymptote: the bottom is $0$ at $x = -2$ and the top is not."
                },
                {
                  "step": "Top and bottom both have degree $1$, with leading coefficients $4$ and $4$.",
                  "reason": "Leading coefficient: the coefficient of the highest power of $x$ in each."
                },
                {
                  "step": "The horizontal asymptote is $y = 1$.",
                  "reason": "Horizontal asymptote: with equal degrees it is $y$ equal to the top's leading coefficient over the bottom's."
                }
              ]
            },
            {
              "prompt": "Find the asymptotes of the graph of $f(x) = \\dfrac{-8x - 3}{5x + 4}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -4/5, y = -8/5",
              "lines": [
                {
                  "step": "Find the asymptotes of the graph of $f(x) = \\dfrac{-8x - 3}{5x + 4}$. Give the vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x + 4 = 0$",
                  "reason": "Domain: $f$ has no value where the bottom is $0$."
                },
                {
                  "step": "$5x = -4$",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides."
                },
                {
                  "step": "$x = -\\dfrac{4}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$-8 \\cdot \\left(-\\dfrac{4}{5}\\right) - 3 = \\dfrac{17}{5}$",
                  "reason": "Substituting a value: the top at $x = -\\dfrac{4}{5}$ is $\\dfrac{17}{5}$, which is not $0$."
                },
                {
                  "step": "The vertical asymptote is $x = -\\dfrac{4}{5}$.",
                  "reason": "Vertical asymptote: the bottom is $0$ at $x = -\\dfrac{4}{5}$ and the top is not."
                },
                {
                  "step": "Top and bottom both have degree $1$, with leading coefficients $-8$ and $5$.",
                  "reason": "Leading coefficient: the coefficient of the highest power of $x$ in each."
                },
                {
                  "step": "The horizontal asymptote is $y = -\\dfrac{8}{5}$.",
                  "reason": "Horizontal asymptote: with equal degrees it is $y$ equal to the top's leading coefficient over the bottom's."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every asymptote of the graph of $f(x) = \\dfrac{8x - 11}{3x^2 + 12x - 63}$. Give each vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
            "lines": [
              {
                "step": "Find every asymptote of the graph of $f(x) = \\dfrac{8x - 11}{3x^2 + 12x - 63}$. Give each vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x^2 + 12x - 63 = 0$",
                "reason": "Domain: $f$ has no value where the bottom is $0$."
              },
              {
                "step": "$3(x + 7)(x - 3) = 0$",
                "reason": "Factoring a quadratic: $7$ and $-3$ have sum $4$ and product $-21$, once the common factor $3$ is taken out."
              },
              {
                "step": "Either $x = -7$ or $x = 3$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "$8 \\cdot \\left(-7\\right) - 11 = -67$",
                "reason": "Substituting a value: the top at $x = -7$ is not $0$."
              },
              {
                "step": "$8 \\cdot 3 - 11 = 13$",
                "reason": "Substituting a value: the top at $x = 3$ is not $0$."
              },
              {
                "step": "The vertical asymptotes are $x = -7$ and $x = 3$.",
                "reason": "Vertical asymptote: at each of them the bottom is $0$ and the top is not."
              },
              {
                "step": "The top has degree $1$ and the bottom has degree $2$.",
                "reason": "Degree: the highest power of $x$ in each."
              },
              {
                "step": "The horizontal asymptote is $y = 0$.",
                "reason": "Horizontal asymptote: when the top's degree is less than the bottom's, it is $y = 0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every asymptote of the graph of $f(x) = \\dfrac{-5x - 1}{2x^2 + 18x + 40}$. Give each vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
              "form": "Answer as the asymptotes, as in x = -2, x = 5, y = 0.",
              "answer": "x = -5, x = -4, y = 0",
              "lines": [
                {
                  "step": "Find every asymptote of the graph of $f(x) = \\dfrac{-5x - 1}{2x^2 + 18x + 40}$. Give each vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 + 18x + 40 = 0$",
                  "reason": "Domain: $f$ has no value where the bottom is $0$."
                },
                {
                  "step": "$2(x + 5)(x + 4) = 0$",
                  "reason": "Factoring a quadratic: $5$ and $4$ have sum $9$ and product $20$, once the common factor $2$ is taken out."
                },
                {
                  "step": "Either $x = -5$ or $x = -4$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$-5 \\cdot \\left(-5\\right) - 1 = 24$",
                  "reason": "Substituting a value: the top at $x = -5$ is not $0$."
                },
                {
                  "step": "$-5 \\cdot \\left(-4\\right) - 1 = 19$",
                  "reason": "Substituting a value: the top at $x = -4$ is not $0$."
                },
                {
                  "step": "The vertical asymptotes are $x = -5$ and $x = -4$.",
                  "reason": "Vertical asymptote: at each of them the bottom is $0$ and the top is not."
                },
                {
                  "step": "The top has degree $1$ and the bottom has degree $2$.",
                  "reason": "Degree: the highest power of $x$ in each."
                },
                {
                  "step": "The horizontal asymptote is $y = 0$.",
                  "reason": "Horizontal asymptote: when the top's degree is less than the bottom's, it is $y = 0$."
                }
              ]
            },
            {
              "prompt": "Find every asymptote of the graph of $f(x) = \\dfrac{-5x + 9}{x^2 + x - 30}$. Give each vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
              "form": "Answer as the asymptotes, as in x = -2, x = 5, y = 0.",
              "answer": "x = -6, x = 5, y = 0",
              "lines": [
                {
                  "step": "Find every asymptote of the graph of $f(x) = \\dfrac{-5x + 9}{x^2 + x - 30}$. Give each vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + x - 30 = 0$",
                  "reason": "Domain: $f$ has no value where the bottom is $0$."
                },
                {
                  "step": "$(x + 6)(x - 5) = 0$",
                  "reason": "Factoring a quadratic: $6$ and $-5$ have sum $1$ and product $-30$."
                },
                {
                  "step": "Either $x = -6$ or $x = 5$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$-5 \\cdot \\left(-6\\right) + 9 = 39$",
                  "reason": "Substituting a value: the top at $x = -6$ is not $0$."
                },
                {
                  "step": "$-5 \\cdot 5 + 9 = -16$",
                  "reason": "Substituting a value: the top at $x = 5$ is not $0$."
                },
                {
                  "step": "The vertical asymptotes are $x = -6$ and $x = 5$.",
                  "reason": "Vertical asymptote: at each of them the bottom is $0$ and the top is not."
                },
                {
                  "step": "The top has degree $1$ and the bottom has degree $2$.",
                  "reason": "Degree: the highest power of $x$ in each."
                },
                {
                  "step": "The horizontal asymptote is $y = 0$.",
                  "reason": "Horizontal asymptote: when the top's degree is less than the bottom's, it is $y = 0$."
                }
              ]
            },
            {
              "prompt": "Find every asymptote of the graph of $f(x) = \\dfrac{-4x + 1}{x^2 - 10x + 24}$. Give each vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
              "form": "Answer as the asymptotes, as in x = -2, x = 5, y = 0.",
              "answer": "x = 4, x = 6, y = 0",
              "lines": [
                {
                  "step": "Find every asymptote of the graph of $f(x) = \\dfrac{-4x + 1}{x^2 - 10x + 24}$. Give each vertical asymptote as an equation in $x$ and the horizontal one as an equation in $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 10x + 24 = 0$",
                  "reason": "Domain: $f$ has no value where the bottom is $0$."
                },
                {
                  "step": "$(x - 4)(x - 6) = 0$",
                  "reason": "Factoring a quadratic: $-4$ and $-6$ have sum $-10$ and product $24$."
                },
                {
                  "step": "Either $x = 4$ or $x = 6$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$-4 \\cdot 4 + 1 = -15$",
                  "reason": "Substituting a value: the top at $x = 4$ is not $0$."
                },
                {
                  "step": "$-4 \\cdot 6 + 1 = -23$",
                  "reason": "Substituting a value: the top at $x = 6$ is not $0$."
                },
                {
                  "step": "The vertical asymptotes are $x = 4$ and $x = 6$.",
                  "reason": "Vertical asymptote: at each of them the bottom is $0$ and the top is not."
                },
                {
                  "step": "The top has degree $1$ and the bottom has degree $2$.",
                  "reason": "Degree: the highest power of $x$ in each."
                },
                {
                  "step": "The horizontal asymptote is $y = 0$.",
                  "reason": "Horizontal asymptote: when the top's degree is less than the bottom's, it is $y = 0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = \\dfrac{-5x^2 + x + 6}{3x^2 + 4x + 1}$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = \\dfrac{-5x^2 + x + 6}{3x^2 + 4x + 1}$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{-5x^2 + x + 6}{3x^2 + 4x + 1} = \\dfrac{(x + 1)(-5x + 6)}{(x + 1)(3x + 1)}$",
                "reason": "Factoring a quadratic: $(x + 1)(-5x + 6)$ multiplies out to the top and $(x + 1)(3x + 1)$ to the bottom."
              },
              {
                "step": "So $f(x) = \\dfrac{-5x + 6}{3x + 1}$ for $x \\ne -1$.",
                "reason": "A common factor of top and bottom leaves a hole: $x + 1$ cancels, and $f$ has no value at $x = -1$."
              },
              {
                "step": "$\\dfrac{-5 \\cdot \\left(-1\\right) + 6}{3 \\cdot \\left(-1\\right) + 1} = -\\dfrac{11}{2}$",
                "reason": "Substituting a value: the cancelled form at $x = -1$ gives the height of the hole."
              },
              {
                "step": "$y(3x + 1) = -5x + 6$",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{-5x + 6}{3x + 1}$ are multiplied by $3x + 1$, which is not $0$ in the domain."
              },
              {
                "step": "$3xy + 5x = 6 - y$",
                "reason": "Adding the same number to both sides: $5x - y$ is added to both sides."
              },
              {
                "step": "$x(3y + 5) = 6 - y$",
                "reason": "Collecting the terms with the letter and factoring it out: $x$ is taken out on the left."
              },
              {
                "step": "$x = \\dfrac{6 - y}{3y + 5}$",
                "reason": "Dividing both sides by a nonzero number: for $y \\ne -\\dfrac{5}{3}$ the bracket $3y + 5$ is not $0$."
              },
              {
                "step": "At $y = -\\dfrac{5}{3}$ the left side of line 7 is $0$ and the right side is $\\dfrac{23}{3}$.",
                "reason": "Substituting a value: $-\\dfrac{5}{3}$ is put in place of $y$ in line 7."
              },
              {
                "step": "So no $x$ gives $y = -\\dfrac{5}{3}$.",
                "reason": "Equation with no solution: $0$ is never equal to a number that is not $0$."
              },
              {
                "step": "At $y = -\\dfrac{11}{2}$ line 8 gives $x = -1$, the $x$ of the hole, so no $x$ in the domain gives $y = -\\dfrac{11}{2}$.",
                "reason": "A common factor of top and bottom leaves a hole: the point $\\left(-1, -\\dfrac{11}{2}\\right)$ is not on the graph."
              },
              {
                "step": "The range is $y < -\\dfrac{11}{2}$ or $-\\dfrac{11}{2} < y < -\\dfrac{5}{3}$ or $y > -\\dfrac{5}{3}$.",
                "reason": "Range: every other $y$ comes from the $x$ of line 8, and that $x$ is not $-1$, and not $-\\dfrac{1}{3}$, since there line 5 would make the top $\\dfrac{23}{3}$ equal to $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = \\dfrac{4x^2 - 15x - 4}{3x^2 - 10x - 8}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y < 17/14 or 17/14 < y < 4/3 or y > 4/3",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{4x^2 - 15x - 4}{3x^2 - 10x - 8}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4x^2 - 15x - 4}{3x^2 - 10x - 8} = \\dfrac{(x - 4)(4x + 1)}{(x - 4)(3x + 2)}$",
                  "reason": "Factoring a quadratic: $(x - 4)(4x + 1)$ multiplies out to the top and $(x - 4)(3x + 2)$ to the bottom."
                },
                {
                  "step": "So $f(x) = \\dfrac{4x + 1}{3x + 2}$ for $x \\ne 4$.",
                  "reason": "A common factor of top and bottom leaves a hole: $x - 4$ cancels, and $f$ has no value at $x = 4$."
                },
                {
                  "step": "$\\dfrac{4 \\cdot 4 + 1}{3 \\cdot 4 + 2} = \\dfrac{17}{14}$",
                  "reason": "Substituting a value: the cancelled form at $x = 4$ gives the height of the hole."
                },
                {
                  "step": "$y(3x + 2) = 4x + 1$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{4x + 1}{3x + 2}$ are multiplied by $3x + 2$, which is not $0$ in the domain."
                },
                {
                  "step": "$3xy - 4x = 1 - 2y$",
                  "reason": "Adding the same number to both sides: $-4x - 2y$ is added to both sides."
                },
                {
                  "step": "$x(3y - 4) = 1 - 2y$",
                  "reason": "Collecting the terms with the letter and factoring it out: $x$ is taken out on the left."
                },
                {
                  "step": "$x = \\dfrac{1 - 2y}{3y - 4}$",
                  "reason": "Dividing both sides by a nonzero number: for $y \\ne \\dfrac{4}{3}$ the bracket $3y - 4$ is not $0$."
                },
                {
                  "step": "At $y = \\dfrac{4}{3}$ the left side of line 7 is $0$ and the right side is $-\\dfrac{5}{3}$.",
                  "reason": "Substituting a value: $\\dfrac{4}{3}$ is put in place of $y$ in line 7."
                },
                {
                  "step": "So no $x$ gives $y = \\dfrac{4}{3}$.",
                  "reason": "Equation with no solution: $0$ is never equal to a number that is not $0$."
                },
                {
                  "step": "At $y = \\dfrac{17}{14}$ line 8 gives $x = 4$, the $x$ of the hole, so no $x$ in the domain gives $y = \\dfrac{17}{14}$.",
                  "reason": "A common factor of top and bottom leaves a hole: the point $\\left(4, \\dfrac{17}{14}\\right)$ is not on the graph."
                },
                {
                  "step": "The range is $y < \\dfrac{17}{14}$ or $\\dfrac{17}{14} < y < \\dfrac{4}{3}$ or $y > \\dfrac{4}{3}$.",
                  "reason": "Range: every other $y$ comes from the $x$ of line 8, and that $x$ is not $4$, and not $-\\dfrac{2}{3}$, since there line 5 would make the top $-\\dfrac{5}{3}$ equal to $0$."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{-5x^2 + 8x + 21}{4x^2 - 19x + 21}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y < -22/5 or -22/5 < y < -5/4 or y > -5/4",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{-5x^2 + 8x + 21}{4x^2 - 19x + 21}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-5x^2 + 8x + 21}{4x^2 - 19x + 21} = \\dfrac{(x - 3)(-5x - 7)}{(x - 3)(4x - 7)}$",
                  "reason": "Factoring a quadratic: $(x - 3)(-5x - 7)$ multiplies out to the top and $(x - 3)(4x - 7)$ to the bottom."
                },
                {
                  "step": "So $f(x) = \\dfrac{-5x - 7}{4x - 7}$ for $x \\ne 3$.",
                  "reason": "A common factor of top and bottom leaves a hole: $x - 3$ cancels, and $f$ has no value at $x = 3$."
                },
                {
                  "step": "$\\dfrac{-5 \\cdot 3 - 7}{4 \\cdot 3 - 7} = -\\dfrac{22}{5}$",
                  "reason": "Substituting a value: the cancelled form at $x = 3$ gives the height of the hole."
                },
                {
                  "step": "$y(4x - 7) = -5x - 7$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{-5x - 7}{4x - 7}$ are multiplied by $4x - 7$, which is not $0$ in the domain."
                },
                {
                  "step": "$4xy + 5x = -7 + 7y$",
                  "reason": "Adding the same number to both sides: $5x + 7y$ is added to both sides."
                },
                {
                  "step": "$x(4y + 5) = -7 + 7y$",
                  "reason": "Collecting the terms with the letter and factoring it out: $x$ is taken out on the left."
                },
                {
                  "step": "$x = \\dfrac{-7 + 7y}{4y + 5}$",
                  "reason": "Dividing both sides by a nonzero number: for $y \\ne -\\dfrac{5}{4}$ the bracket $4y + 5$ is not $0$."
                },
                {
                  "step": "At $y = -\\dfrac{5}{4}$ the left side of line 7 is $0$ and the right side is $-\\dfrac{63}{4}$.",
                  "reason": "Substituting a value: $-\\dfrac{5}{4}$ is put in place of $y$ in line 7."
                },
                {
                  "step": "So no $x$ gives $y = -\\dfrac{5}{4}$.",
                  "reason": "Equation with no solution: $0$ is never equal to a number that is not $0$."
                },
                {
                  "step": "At $y = -\\dfrac{22}{5}$ line 8 gives $x = 3$, the $x$ of the hole, so no $x$ in the domain gives $y = -\\dfrac{22}{5}$.",
                  "reason": "A common factor of top and bottom leaves a hole: the point $\\left(3, -\\dfrac{22}{5}\\right)$ is not on the graph."
                },
                {
                  "step": "The range is $y < -\\dfrac{22}{5}$ or $-\\dfrac{22}{5} < y < -\\dfrac{5}{4}$ or $y > -\\dfrac{5}{4}$.",
                  "reason": "Range: every other $y$ comes from the $x$ of line 8, and that $x$ is not $3$, and not $\\dfrac{7}{4}$, since there line 5 would make the top $-\\dfrac{63}{4}$ equal to $0$."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{5x^2 - 23x + 24}{3x^2 - 10x + 3}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y < 7/8 or 7/8 < y < 5/3 or y > 5/3",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{5x^2 - 23x + 24}{3x^2 - 10x + 3}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5x^2 - 23x + 24}{3x^2 - 10x + 3} = \\dfrac{(x - 3)(5x - 8)}{(x - 3)(3x - 1)}$",
                  "reason": "Factoring a quadratic: $(x - 3)(5x - 8)$ multiplies out to the top and $(x - 3)(3x - 1)$ to the bottom."
                },
                {
                  "step": "So $f(x) = \\dfrac{5x - 8}{3x - 1}$ for $x \\ne 3$.",
                  "reason": "A common factor of top and bottom leaves a hole: $x - 3$ cancels, and $f$ has no value at $x = 3$."
                },
                {
                  "step": "$\\dfrac{5 \\cdot 3 - 8}{3 \\cdot 3 - 1} = \\dfrac{7}{8}$",
                  "reason": "Substituting a value: the cancelled form at $x = 3$ gives the height of the hole."
                },
                {
                  "step": "$y(3x - 1) = 5x - 8$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{5x - 8}{3x - 1}$ are multiplied by $3x - 1$, which is not $0$ in the domain."
                },
                {
                  "step": "$3xy - 5x = -8 + y$",
                  "reason": "Adding the same number to both sides: $-5x + y$ is added to both sides."
                },
                {
                  "step": "$x(3y - 5) = -8 + y$",
                  "reason": "Collecting the terms with the letter and factoring it out: $x$ is taken out on the left."
                },
                {
                  "step": "$x = \\dfrac{-8 + y}{3y - 5}$",
                  "reason": "Dividing both sides by a nonzero number: for $y \\ne \\dfrac{5}{3}$ the bracket $3y - 5$ is not $0$."
                },
                {
                  "step": "At $y = \\dfrac{5}{3}$ the left side of line 7 is $0$ and the right side is $-\\dfrac{19}{3}$.",
                  "reason": "Substituting a value: $\\dfrac{5}{3}$ is put in place of $y$ in line 7."
                },
                {
                  "step": "So no $x$ gives $y = \\dfrac{5}{3}$.",
                  "reason": "Equation with no solution: $0$ is never equal to a number that is not $0$."
                },
                {
                  "step": "At $y = \\dfrac{7}{8}$ line 8 gives $x = 3$, the $x$ of the hole, so no $x$ in the domain gives $y = \\dfrac{7}{8}$.",
                  "reason": "A common factor of top and bottom leaves a hole: the point $\\left(3, \\dfrac{7}{8}\\right)$ is not on the graph."
                },
                {
                  "step": "The range is $y < \\dfrac{7}{8}$ or $\\dfrac{7}{8} < y < \\dfrac{5}{3}$ or $y > \\dfrac{5}{3}$.",
                  "reason": "Range: every other $y$ comes from the $x$ of line 8, and that $x$ is not $3$, and not $\\dfrac{1}{3}$, since there line 5 would make the top $-\\dfrac{19}{3}$ equal to $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t174-k2",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = \\dfrac{-6x - 3}{4x - 2}$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\dfrac{-6x - 3}{4x - 2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The bottom $4x - 2$ is $0$ at $x = \\dfrac{1}{2}$, and there the top is $-6 \\cdot \\dfrac{1}{2} - 3 = -6$.",
                "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = \\dfrac{1}{2}$ is a vertical asymptote."
              },
              {
                "step": "The horizontal asymptote is $y = -\\dfrac{3}{2}$.",
                "reason": "Horizontal asymptote: top and bottom have equal degree, and the leading coefficients are $-6$ and $4$."
              },
              {
                "step": "At $x = 0$ the top is $-3$ and the bottom is $-2$, so the graph meets the $y$-axis at $B\\left(0, \\dfrac{3}{2}\\right)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "The top $-6x - 3$ is $0$ at $x = -\\dfrac{1}{2}$, so the graph meets the $x$-axis at $A\\left(-\\dfrac{1}{2}, 0\\right)$.",
                "reason": "Definition of the $x$-intercept: a fraction is $0$ where its top is $0$ and its bottom is not."
              },
              {
                "step": "The curve has two branches, one on each side of $x = \\dfrac{1}{2}$, passes through $A$ and $B$, and comes ever closer to both asymptotes.",
                "reason": "Asymptote: a line the graph comes ever closer to and never meets.",
                "figure": {
                  "file": "rational-functions-1.svg",
                  "alt": "A curve in two branches with the vertical asymptote x = 1/2 and the horizontal asymptote y = −3/2, through A(−1/2, 0) and B(0, 3/2)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = \\dfrac{5x - 9}{x - 1}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{9}{5}, 0\\right)$",
                  "$(0, 9)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 1$",
                  "$y = 5$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{5x - 9}{x - 1}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x - 1$ is $0$ at $x = 1$, and there the top is $5 \\cdot 1 - 9 = -4$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 1$ is a vertical asymptote."
                },
                {
                  "step": "The horizontal asymptote is $y = 5$.",
                  "reason": "Horizontal asymptote: top and bottom have equal degree, and the leading coefficients are $5$ and $1$."
                },
                {
                  "step": "At $x = 0$ the top is $-9$ and the bottom is $-1$, so the graph meets the $y$-axis at $B(0, 9)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The top $5x - 9$ is $0$ at $x = \\dfrac{9}{5}$, so the graph meets the $x$-axis at $A\\left(\\dfrac{9}{5}, 0\\right)$.",
                  "reason": "Definition of the $x$-intercept: a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 1$, passes through $A$ and $B$, and comes ever closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes ever closer to and never meets.",
                  "figure": {
                    "file": "rational-functions-2.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 1 and the horizontal asymptote y = 5, through A(9/5, 0) and B(0, 9)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{6x - 7}{4x - 5}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{7}{6}, 0\\right)$",
                  "$\\left(0, \\dfrac{7}{5}\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = \\dfrac{5}{4}$",
                  "$y = \\dfrac{3}{2}$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{6x - 7}{4x - 5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $4x - 5$ is $0$ at $x = \\dfrac{5}{4}$, and there the top is $6 \\cdot \\dfrac{5}{4} - 7 = \\dfrac{1}{2}$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = \\dfrac{5}{4}$ is a vertical asymptote."
                },
                {
                  "step": "The horizontal asymptote is $y = \\dfrac{3}{2}$.",
                  "reason": "Horizontal asymptote: top and bottom have equal degree, and the leading coefficients are $6$ and $4$."
                },
                {
                  "step": "At $x = 0$ the top is $-7$ and the bottom is $-5$, so the graph meets the $y$-axis at $B\\left(0, \\dfrac{7}{5}\\right)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The top $6x - 7$ is $0$ at $x = \\dfrac{7}{6}$, so the graph meets the $x$-axis at $A\\left(\\dfrac{7}{6}, 0\\right)$.",
                  "reason": "Definition of the $x$-intercept: a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = \\dfrac{5}{4}$, passes through $A$ and $B$, and comes ever closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes ever closer to and never meets.",
                  "figure": {
                    "file": "rational-functions-3.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 5/4 and the horizontal asymptote y = 3/2, through A(7/6, 0) and B(0, 7/5)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{-4x - 7}{4x + 6}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(-\\dfrac{7}{4}, 0\\right)$",
                  "$\\left(0, -\\dfrac{7}{6}\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -\\dfrac{3}{2}$",
                  "$y = -1$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{-4x - 7}{4x + 6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $4x + 6$ is $0$ at $x = -\\dfrac{3}{2}$, and there the top is $-4 \\cdot \\left(-\\dfrac{3}{2}\\right) - 7 = -1$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -\\dfrac{3}{2}$ is a vertical asymptote."
                },
                {
                  "step": "The horizontal asymptote is $y = -1$.",
                  "reason": "Horizontal asymptote: top and bottom have equal degree, and the leading coefficients are $-4$ and $4$."
                },
                {
                  "step": "At $x = 0$ the top is $-7$ and the bottom is $6$, so the graph meets the $y$-axis at $B\\left(0, -\\dfrac{7}{6}\\right)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The top $-4x - 7$ is $0$ at $x = -\\dfrac{7}{4}$, so the graph meets the $x$-axis at $A\\left(-\\dfrac{7}{4}, 0\\right)$.",
                  "reason": "Definition of the $x$-intercept: a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = -\\dfrac{3}{2}$, passes through $A$ and $B$, and comes ever closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes ever closer to and never meets.",
                  "figure": {
                    "file": "rational-functions-4.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = −3/2 and the horizontal asymptote y = −1, through A(−7/4, 0) and B(0, −7/6)."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t174-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the asymptotes of $f(x) = \\dfrac{8x - 5}{3x + 2}$, and write that line right.",
            "given": [
              "$f(x) = \\dfrac{8x - 5}{3x + 2}$",
              "The bottom is $0$ where $3x + 2 = 0$.",
              "$3x = 2$",
              "$x = \\dfrac{2}{3}$",
              "The top there is $8 \\cdot \\dfrac{2}{3} - 5 = \\dfrac{1}{3}$, which is not $0$.",
              "So $x = \\dfrac{2}{3}$ is the vertical asymptote.",
              "The horizontal asymptote is $y = \\dfrac{8}{3}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the asymptotes of $f(x) = \\dfrac{8x - 5}{3x + 2}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 moves $2$ to the right side and keeps its sign, so a sign is lost.",
                "reason": "Adding the same number to both sides: $-2$ is added to both sides of $3x + 2 = 0$."
              },
              {
                "step": "Line 3 written right is: $3x = -2$",
                "reason": "Each line is checked against the lines before it, and those lines are right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the asymptotes of $f(x) = \\dfrac{7x + 7}{4x + 12}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{7x + 7}{4x + 12}$",
                "The bottom is $0$ where $4x + 12 = 0$.",
                "$4x = -12$",
                "$x = 3$",
                "The top there is $7 \\cdot 3 + 7 = 28$, which is not $0$.",
                "So $x = 3$ is the vertical asymptote.",
                "The horizontal asymptote is $y = \\dfrac{7}{4}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the asymptotes of $f(x) = \\dfrac{7x + 7}{4x + 12}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 divides $-12$ by $4$ and loses the sign.",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 3 are divided by $4$, which gives $-3$."
                },
                {
                  "step": "Line 4 written right is: $x = -3$",
                  "reason": "Each line is checked against the lines before it, and those lines are right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the asymptotes of $f(x) = \\dfrac{-6x + 2}{4x - 1}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{-6x + 2}{4x - 1}$",
                "The bottom is $0$ where $4x - 1 = 0$.",
                "$4x = 1$",
                "$x = \\dfrac{1}{4}$",
                "The top there is $-6 \\cdot \\dfrac{1}{4} + 2 = \\dfrac{7}{2}$, which is not $0$.",
                "So $x = \\dfrac{1}{4}$ is the vertical asymptote.",
                "The horizontal asymptote is $y = -\\dfrac{3}{2}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -6*(1/4)+2 = 1/2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the asymptotes of $f(x) = \\dfrac{-6x + 2}{4x - 1}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 works out $-6 \\cdot \\dfrac{1}{4}$ with the wrong sign.",
                  "reason": "Substituting a value: $-6 \\cdot \\dfrac{1}{4} = -\\dfrac{3}{2}$, and adding $2$ gives $\\dfrac{1}{2}$."
                },
                {
                  "step": "Line 5 written right is: The top there is $-6 \\cdot \\dfrac{1}{4} + 2 = \\dfrac{1}{2}$, which is not $0$.",
                  "reason": "Each line is checked against the lines before it, and those lines are right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the asymptotes of $f(x) = \\dfrac{-8x + 7}{4x + 2}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{-8x + 7}{4x + 2}$",
                "The bottom is $0$ where $4x + 2 = 0$.",
                "$4x = -2$",
                "$x = -\\dfrac{1}{2}$",
                "The top there is $-8 \\cdot \\left(-\\dfrac{1}{2}\\right) + 7 = 11$, which is not $0$.",
                "So $x = -\\dfrac{1}{2}$ is the vertical asymptote.",
                "The horizontal asymptote is $y = 2$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: y = -2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the asymptotes of $f(x) = \\dfrac{-8x + 7}{4x + 2}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 loses the sign of the horizontal asymptote.",
                  "reason": "Horizontal asymptote: with equal degrees it is the top's leading coefficient $-8$ over the bottom's $4$, which is $-2$."
                },
                {
                  "step": "Line 7 written right is: The horizontal asymptote is $y = -2$.",
                  "reason": "Each line is checked against the lines before it, and those lines are right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t174-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = -\\dfrac{19}{x + 4} + 2$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = -\\dfrac{19}{x + 4} + 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The graph of $y = -\\dfrac{19}{x}$ has the asymptotes $x = 0$ and $y = 0$.",
                "reason": "Vertical asymptote and horizontal asymptote: the bottom $x$ is $0$ at $x = 0$ where the top $-19$ is not, and the top's degree $0$ is less than the bottom's degree $1$."
              },
              {
                "step": "Putting $x + 4$ in place of $x$ moves the vertical asymptote to $x = -4$.",
                "reason": "Shifting, stretching and reflecting graphs: the graph moves 4 units to the left."
              },
              {
                "step": "Adding $2$ moves the horizontal asymptote to $y = 2$.",
                "reason": "Shifting, stretching and reflecting graphs: the graph moves 2 units up."
              },
              {
                "step": "At $x = 0$ the height is $-\\dfrac{19}{4} + 2 = -\\dfrac{11}{4}$, so the graph meets the $y$-axis at $B\\left(0, -\\dfrac{11}{4}\\right)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$-\\dfrac{19}{x + 4} + 2 = 0$",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "$-\\dfrac{19}{x + 4} = -2$",
                "reason": "Adding the same number to both sides: $-2$ is added to both sides."
              },
              {
                "step": "$-19 = -2(x + 4)$",
                "reason": "Cross-multiplying: both sides of line 7 are multiplied by $x + 4$, which is not $0$ in the domain."
              },
              {
                "step": "$x + 4 = \\dfrac{19}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
              },
              {
                "step": "So $x = \\dfrac{11}{2}$, and the graph meets the $x$-axis at $A\\left(\\dfrac{11}{2}, 0\\right)$.",
                "reason": "Adding the same number to both sides: $-4$ is added to both sides."
              },
              {
                "step": "The curve has two branches, one on each side of $x = -4$, passes through $A$ and $B$, and comes ever closer to both asymptotes.",
                "reason": "Asymptote: a line the graph comes ever closer to and never meets.",
                "figure": {
                  "file": "rational-functions-19.svg",
                  "alt": "A curve in two branches with the vertical asymptote x = −4 and the horizontal asymptote y = 2, through A(11/2, 0) and B(0, −11/4)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = -\\dfrac{22}{x - 7} - 6$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{10}{3}, 0\\right)$",
                  "$\\left(0, -\\dfrac{20}{7}\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 7$",
                  "$y = -6$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -\\dfrac{22}{x - 7} - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = -\\dfrac{22}{x}$ has the asymptotes $x = 0$ and $y = 0$.",
                  "reason": "Vertical asymptote and horizontal asymptote: the bottom $x$ is $0$ at $x = 0$ where the top $-22$ is not, and the top's degree $0$ is less than the bottom's degree $1$."
                },
                {
                  "step": "Putting $x - 7$ in place of $x$ moves the vertical asymptote to $x = 7$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 7 units to the right."
                },
                {
                  "step": "Adding $-6$ moves the horizontal asymptote to $y = -6$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 6 units down."
                },
                {
                  "step": "At $x = 0$ the height is $\\dfrac{22}{7} - 6 = -\\dfrac{20}{7}$, so the graph meets the $y$-axis at $B\\left(0, -\\dfrac{20}{7}\\right)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$-\\dfrac{22}{x - 7} - 6 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$-\\dfrac{22}{x - 7} = 6$",
                  "reason": "Adding the same number to both sides: $6$ is added to both sides."
                },
                {
                  "step": "$-22 = 6(x - 7)$",
                  "reason": "Cross-multiplying: both sides of line 7 are multiplied by $x - 7$, which is not $0$ in the domain."
                },
                {
                  "step": "$x - 7 = -\\dfrac{11}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "So $x = \\dfrac{10}{3}$, and the graph meets the $x$-axis at $A\\left(\\dfrac{10}{3}, 0\\right)$.",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 7$, passes through $A$ and $B$, and comes ever closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes ever closer to and never meets.",
                  "figure": {
                    "file": "rational-functions-20.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 7 and the horizontal asymptote y = −6, through A(10/3, 0) and B(0, −20/7)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{21}{x - 6} + 8$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{27}{8}, 0\\right)$",
                  "$\\left(0, \\dfrac{9}{2}\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 6$",
                  "$y = 8$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{21}{x - 6} + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = \\dfrac{21}{x}$ has the asymptotes $x = 0$ and $y = 0$.",
                  "reason": "Vertical asymptote and horizontal asymptote: the bottom $x$ is $0$ at $x = 0$ where the top $21$ is not, and the top's degree $0$ is less than the bottom's degree $1$."
                },
                {
                  "step": "Putting $x - 6$ in place of $x$ moves the vertical asymptote to $x = 6$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 6 units to the right."
                },
                {
                  "step": "Adding $8$ moves the horizontal asymptote to $y = 8$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 8 units up."
                },
                {
                  "step": "At $x = 0$ the height is $-\\dfrac{7}{2} + 8 = \\dfrac{9}{2}$, so the graph meets the $y$-axis at $B\\left(0, \\dfrac{9}{2}\\right)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{21}{x - 6} + 8 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{21}{x - 6} = -8$",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides."
                },
                {
                  "step": "$21 = -8(x - 6)$",
                  "reason": "Cross-multiplying: both sides of line 7 are multiplied by $x - 6$, which is not $0$ in the domain."
                },
                {
                  "step": "$x - 6 = -\\dfrac{21}{8}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-8$."
                },
                {
                  "step": "So $x = \\dfrac{27}{8}$, and the graph meets the $x$-axis at $A\\left(\\dfrac{27}{8}, 0\\right)$.",
                  "reason": "Adding the same number to both sides: $6$ is added to both sides."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 6$, passes through $A$ and $B$, and comes ever closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes ever closer to and never meets.",
                  "figure": {
                    "file": "rational-functions-21.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 6 and the horizontal asymptote y = 8, through A(27/8, 0) and B(0, 9/2)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{19}{x + 7} - 7$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(-\\dfrac{30}{7}, 0\\right)$",
                  "$\\left(0, -\\dfrac{30}{7}\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -7$",
                  "$y = -7$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{19}{x + 7} - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = \\dfrac{19}{x}$ has the asymptotes $x = 0$ and $y = 0$.",
                  "reason": "Vertical asymptote and horizontal asymptote: the bottom $x$ is $0$ at $x = 0$ where the top $19$ is not, and the top's degree $0$ is less than the bottom's degree $1$."
                },
                {
                  "step": "Putting $x + 7$ in place of $x$ moves the vertical asymptote to $x = -7$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 7 units to the left."
                },
                {
                  "step": "Adding $-7$ moves the horizontal asymptote to $y = -7$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 7 units down."
                },
                {
                  "step": "At $x = 0$ the height is $\\dfrac{19}{7} - 7 = -\\dfrac{30}{7}$, so the graph meets the $y$-axis at $B\\left(0, -\\dfrac{30}{7}\\right)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{19}{x + 7} - 7 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{19}{x + 7} = 7$",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides."
                },
                {
                  "step": "$19 = 7(x + 7)$",
                  "reason": "Cross-multiplying: both sides of line 7 are multiplied by $x + 7$, which is not $0$ in the domain."
                },
                {
                  "step": "$x + 7 = \\dfrac{19}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "So $x = -\\dfrac{30}{7}$, and the graph meets the $x$-axis at $A\\left(-\\dfrac{30}{7}, 0\\right)$.",
                  "reason": "Adding the same number to both sides: $-7$ is added to both sides."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = -7$, passes through $A$ and $B$, and comes ever closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes ever closer to and never meets.",
                  "figure": {
                    "file": "rational-functions-22.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = −7 and the horizontal asymptote y = −7, through A(−30/7, 0) and B(0, −30/7)."
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
      "id": "t174-p1",
      "method": "proof by contradiction",
      "statement": "The function $f(x) = \\dfrac{8x + 3}{4x - 7}$ never takes the value $2$, the height of its horizontal asymptote.",
      "idea": "Suppose some $x$ gives the value $2$. Clearing the fraction leaves the same term $8x$ on both sides, and what is left is a false equation.",
      "lines": [
        {
          "line": "Suppose $f(x) = 2$ for some $x$ with $x \\ne \\dfrac{7}{4}$.",
          "reason": "Proof by contradiction: the opposite of the statement is taken, and $f$ has a value only for $x \\ne \\dfrac{7}{4}$, where the bottom is not $0$."
        },
        {
          "line": "$\\dfrac{8x + 3}{4x - 7} = 2$",
          "reason": "Substituting a value: $f(x)$ is replaced by its formula."
        },
        {
          "line": "$8x + 3 = 2(4x - 7)$",
          "reason": "Multiplying both sides by the same number: both sides are multiplied by $4x - 7$, which is not $0$ by line 1."
        },
        {
          "line": "$8x + 3 = 8x - 14$",
          "reason": "Multiplying out: the $2$ multiplies each term of the bracket."
        },
        {
          "line": "Taking $8x$ from both sides leaves $3$ on the left and $-14$ on the right, and $3 \\ne -14$.",
          "reason": "Adding the same number to both sides: $-8x$ is added to both sides."
        },
        {
          "line": "So no $x$ gives $f(x) = 2$, and the graph never meets its horizontal asymptote $y = 2$.",
          "reason": "Proof by contradiction: line 1 led to a false line, so line 1 is false."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t174-s1",
      "method": "proof by contradiction",
      "statement": "Prove that for numbers $a$, $b$, $c$, $d$ with $c \\ne 0$ and $ad \\ne bc$, two different numbers in the domain of $f(x) = \\dfrac{ax + b}{cx + d}$ never give the same value. Facts it may use: proof by contradiction, substituting a value, multiplying both sides by the same number, multiplying out, adding the same number to both sides, taking out a common factor, zero-product property.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x_1 \\ne x_2$ are two numbers in the domain with $f(x_1) = f(x_2)$.",
            "reason": "Proof by contradiction: the opposite of the statement is taken."
          },
          {
            "line": "$\\dfrac{ax_1 + b}{cx_1 + d} = \\dfrac{ax_2 + b}{cx_2 + d}$",
            "reason": "Substituting a value: $f(x_1)$ and $f(x_2)$ are replaced by the formula."
          },
          {
            "line": "$(ax_1 + b)(cx_2 + d) = (ax_2 + b)(cx_1 + d)$",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $(cx_1 + d)(cx_2 + d)$, which is not $0$ in the domain."
          },
          {
            "line": "$acx_1 x_2 + adx_1 + bcx_2 + bd = acx_1 x_2 + adx_2 + bcx_1 + bd$",
            "reason": "Multiplying out: each term of one bracket multiplies each term of the other."
          },
          {
            "line": "$adx_1 + bcx_2 = adx_2 + bcx_1$",
            "reason": "Adding the same number to both sides: $-acx_1 x_2 - bd$ is added to both sides."
          },
          {
            "line": "$adx_1 - bcx_1 - adx_2 + bcx_2 = 0$",
            "reason": "Adding the same number to both sides: $-adx_2 - bcx_1$ is added to both sides."
          },
          {
            "line": "$(ad - bc)(x_1 - x_2) = 0$",
            "reason": "Taking out a common factor: $ad - bc$ is taken out of $adx_1 - bcx_1$ and of $-adx_2 + bcx_2$."
          },
          {
            "line": "Either $ad - bc = 0$ or $x_1 - x_2 = 0$.",
            "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
          },
          {
            "line": "The first goes against the hypothesis $ad \\ne bc$, and the second against $x_1 \\ne x_2$ in line 1.",
            "reason": "Adding the same number to both sides: $ad - bc = 0$ gives $ad = bc$, and $x_1 - x_2 = 0$ gives $x_1 = x_2$."
          },
          {
            "line": "So two different numbers in the domain never give the same value.",
            "reason": "Proof by contradiction: line 1 led to a line against the hypothesis or against itself, so line 1 is false."
          }
        ]
      }
    },
    {
      "id": "t174-s2",
      "method": "proof of existence by construction",
      "statement": "Prove that for numbers $a$, $b$, $c$ with $b \\ne ac$, every number $y \\ne a$ is a value of $f(x) = \\dfrac{ax + b}{x + c}$: there is an $x \\ne -c$ with $f(x) = y$. Facts it may use: never divide by an expression that may be zero, simplest common denominator, collecting like terms, fraction rules, taking out a common factor, cancelling a common factor, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Let $y$ be a number with $y \\ne a$.",
            "reason": "The hypothesis: the statement is about every $y \\ne a$, so one such $y$ is named."
          },
          {
            "line": "Take $x = \\dfrac{b - cy}{y - a}$.",
            "reason": "Never divide by an expression that may be zero: $y - a$ is not $0$ by line 1, so this $x$ exists."
          },
          {
            "line": "$x + c = \\dfrac{b - cy + c(y - a)}{y - a}$",
            "reason": "Simplest common denominator: $c = \\dfrac{c(y - a)}{y - a}$, and the two fractions over $y - a$ are added."
          },
          {
            "line": "$x + c = \\dfrac{b - ac}{y - a}$",
            "reason": "Collecting like terms: $-cy + cy = 0$ in the top."
          },
          {
            "line": "$x + c \\ne 0$",
            "reason": "Fraction rules, from arithmetic: a fraction is $0$ only when its top is $0$, and $b - ac \\ne 0$ by the hypothesis."
          },
          {
            "line": "$ax + b = \\dfrac{a(b - cy) + b(y - a)}{y - a}$",
            "reason": "Simplest common denominator: $b = \\dfrac{b(y - a)}{y - a}$, and the two fractions over $y - a$ are added."
          },
          {
            "line": "$ax + b = \\dfrac{by - acy}{y - a}$",
            "reason": "Collecting like terms: $ab - ab = 0$ in the top."
          },
          {
            "line": "$ax + b = \\dfrac{y(b - ac)}{y - a}$",
            "reason": "Taking out a common factor: $y$ is taken out of the top."
          },
          {
            "line": "$\\dfrac{ax + b}{x + c} = \\dfrac{\\dfrac{y(b - ac)}{y - a}}{\\dfrac{b - ac}{y - a}}$",
            "reason": "Fraction rules, from arithmetic: line 8 is divided by line 4, allowed by line 5."
          },
          {
            "line": "$\\dfrac{ax + b}{x + c} = \\dfrac{y(b - ac)}{b - ac}$",
            "reason": "Cancelling a common factor: the bottoms $y - a$ cancel, and $y - a$ is not $0$ by line 1."
          },
          {
            "line": "$\\dfrac{ax + b}{x + c} = y$",
            "reason": "Cancelling a common factor: $b - ac$ is not $0$ by the hypothesis."
          },
          {
            "line": "So $f(x) = y$ at $x = \\dfrac{b - cy}{y - a}$, and $y$ is a value of $f$.",
            "reason": "Substituting a value: line 11 is $f(x)$ at the $x$ of line 2, and line 5 puts that $x$ in the domain."
          }
        ]
      }
    },
    {
      "id": "t174-s3",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$ and $b$ with $b > 0$, and every $x > 0$, $\\dfrac{ax + b}{x} > a$: to the right of the $y$-axis the graph lies above its horizontal asymptote $y = a$. Facts it may use: adding fractions with the same denominator, cancelling a common factor, signs of products, adding the same number, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number with $x > 0$.",
            "reason": "The hypothesis: the statement is about every $x > 0$, so one such $x$ is named."
          },
          {
            "line": "$\\dfrac{ax + b}{x} = \\dfrac{ax}{x} + \\dfrac{b}{x}$",
            "reason": "Adding fractions with the same denominator, from arithmetic: a sum over one bottom splits into two fractions."
          },
          {
            "line": "$\\dfrac{ax}{x} + \\dfrac{b}{x} = a + \\dfrac{b}{x}$",
            "reason": "Cancelling a common factor: $x$ is not $0$ by line 1."
          },
          {
            "line": "$\\dfrac{b}{x} > 0$",
            "reason": "Signs of products, from arithmetic: $\\dfrac{b}{x} = b \\cdot \\dfrac{1}{x}$, with $b > 0$ by the hypothesis and $\\dfrac{1}{x} > 0$ by line 1."
          },
          {
            "line": "$a + \\dfrac{b}{x} > a$",
            "reason": "Adding the same number, from arithmetic: $a$ is added to both sides of line 4."
          },
          {
            "line": "$\\dfrac{ax + b}{x} > a$",
            "reason": "Substituting a value: lines 2 and 3 put $\\dfrac{ax + b}{x}$ in place of $a + \\dfrac{b}{x}$."
          }
        ]
      }
    }
  ]
}
