export default {
  "number": 222,
  "title": "Asymptotes and graphs of rational functions",
  "section": 15,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "476-486"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the range of $f(x) = \\dfrac{x^2 - x + 10}{x + 2}$, as values of $y = f(x)$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "y <= -13 or y >= 3",
    "solution": [
      "Find the range of $f(x) = \\dfrac{x^2 - x + 10}{x + 2}$, as values of $y = f(x)$.",
      "$y(x + 2) = x^2 - x + 10$",
      "$x^2 + (-1 - y)x + (-2y + 10) = 0$",
      "At $x = -2$ the left side of line 3 is $\\left(-2\\right)^2 + (-1 - y) \\cdot \\left(-2\\right) + (-2y + 10) = 16$, which is not $0$, so no solution of line 3 is $x = -2$.",
      "$(-1 - y)^2 - 4(-2y + 10) \\ge 0$",
      "$y^2 + 10y - 39 \\ge 0$",
      "$(y + 13)(y - 3) \\ge 0$",
      "The range is $y \\le -13$ or $y \\ge 3$."
    ]
  },
  "ideas": [
    {
      "name": "Slant asymptote",
      "concrete": "Dividing $3x^2 + 4x - 9$ by $x - 2$ gives the quotient $3x + 10$ and the remainder $11$, so for $x \\ne 2$, $\\dfrac{3x^2 + 4x - 9}{x - 2} = 3x + 10 + \\dfrac{11}{x - 2}$. Far from $0$ the fraction $\\dfrac{11}{x - 2}$ is close to $0$ and never $0$, so the graph of the function comes closer and closer to the line $y = 3x + 10$ and never meets it.",
      "general": "For a polynomial $p$ of degree 2 and a polynomial $g$ of degree 1, let $mx + c$ be the quotient and the number $r$ the remainder when $p$ is divided by $g$. The term $mx$ is the leading term of $p$ divided by the leading term of $g$, so $m \\ne 0$, and $\\dfrac{p(x)}{g(x)} = mx + c + \\dfrac{r}{g(x)}$ for every $x$ with $g(x) \\ne 0$. When $r \\ne 0$, the graph of $f(x) = \\dfrac{p(x)}{g(x)}$ comes closer and closer to the line $y = mx + c$ far from $0$ and never meets it, since there $\\dfrac{r}{g(x)}$ is close to $0$ and never $0$: this line is the **slant asymptote** of the graph. Whether or not $r$ is $0$, the values of $f$ grow without bound far from $0$, as those of $mx + c$ do, so the graph has no horizontal asymptote."
    }
  ],
  "kinds": [
    {
      "id": "t222-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the range of $f(x) = \\dfrac{x^2 - 15x + 37}{x - 3}$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = \\dfrac{x^2 - 15x + 37}{x - 3}$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y(x - 3) = x^2 - 15x + 37$",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{x^2 - 15x + 37}{x - 3}$ are multiplied by $x - 3$, which is not $0$ in the domain."
              },
              {
                "step": "$x^2 + (-15 - y)x + (3y + 37) = 0$",
                "reason": "Adding the same number to both sides: $3y - xy$ is added to both sides, and the terms are collected by powers of $x$."
              },
              {
                "step": "At $x = 3$ the left side of line 3 is $3^2 + (-15 - y) \\cdot 3 + (3y + 37) = 1$, which is not $0$, so no solution of line 3 is $x = 3$.",
                "reason": "Substituting a value: $3$ is put in place of $x$, and the two terms with $y$ cancel."
              },
              {
                "step": "$(-15 - y)^2 - 4(3y + 37) \\ge 0$",
                "reason": "Positive, zero, negative discriminant: line 3 is a quadratic in $x$ with $a = 1$, $b = -15 - y$ and $c = 3y + 37$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
              },
              {
                "step": "$y^2 + 18y + 77 \\ge 0$",
                "reason": "Square of a binomial: $(-15 - y)^2 = y^2 + 30y + 225$; the bracket $(3y + 37)$ is multiplied by $-4$, and like terms are collected."
              },
              {
                "step": "$(y + 11)(y + 7) \\ge 0$",
                "reason": "Factoring a quadratic: $11$ and $7$ have sum $18$ and product $77$."
              },
              {
                "step": "The range is $y \\le -11$ or $y \\ge -7$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: both brackets are $0$ or negative for $y \\le -11$, both are $0$ or positive for $y \\ge -7$, and between $-11$ and $-7$ their signs differ. Each such $y$ has a real $x$ by line 5, and that $x$ is in the domain by line 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = \\dfrac{x^2 - 6x + 14}{x - 5}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y <= -2 or y >= 10",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{x^2 - 6x + 14}{x - 5}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(x - 5) = x^2 - 6x + 14$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{x^2 - 6x + 14}{x - 5}$ are multiplied by $x - 5$, which is not $0$ in the domain."
                },
                {
                  "step": "$x^2 + (-6 - y)x + (5y + 14) = 0$",
                  "reason": "Adding the same number to both sides: $5y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "At $x = 5$ the left side of line 3 is $5^2 + (-6 - y) \\cdot 5 + (5y + 14) = 9$, which is not $0$, so no solution of line 3 is $x = 5$.",
                  "reason": "Substituting a value: $5$ is put in place of $x$, and the two terms with $y$ cancel."
                },
                {
                  "step": "$(-6 - y)^2 - 4(5y + 14) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 3 is a quadratic in $x$ with $a = 1$, $b = -6 - y$ and $c = 5y + 14$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 - 8y - 20 \\ge 0$",
                  "reason": "Square of a binomial: $(-6 - y)^2 = y^2 + 12y + 36$; the bracket $(5y + 14)$ is multiplied by $-4$, and like terms are collected."
                },
                {
                  "step": "$(y + 2)(y - 10) \\ge 0$",
                  "reason": "Factoring a quadratic: $2$ and $-10$ have sum $-8$ and product $-20$."
                },
                {
                  "step": "The range is $y \\le -2$ or $y \\ge 10$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: both brackets are $0$ or negative for $y \\le -2$, both are $0$ or positive for $y \\ge 10$, and between $-2$ and $10$ their signs differ. Each such $y$ has a real $x$ by line 5, and that $x$ is in the domain by line 4."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{3x^2 + 17x + 27}{x + 3}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y <= -7 or y >= 5",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{3x^2 + 17x + 27}{x + 3}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(x + 3) = 3x^2 + 17x + 27$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{3x^2 + 17x + 27}{x + 3}$ are multiplied by $x + 3$, which is not $0$ in the domain."
                },
                {
                  "step": "$3x^2 + (17 - y)x + (-3y + 27) = 0$",
                  "reason": "Adding the same number to both sides: $-3y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "At $x = -3$ the left side of line 3 is $3 \\cdot \\left(-3\\right)^2 + (17 - y) \\cdot \\left(-3\\right) + (-3y + 27) = 3$, which is not $0$, so no solution of line 3 is $x = -3$.",
                  "reason": "Substituting a value: $-3$ is put in place of $x$, and the two terms with $y$ cancel."
                },
                {
                  "step": "$(17 - y)^2 - 4 \\cdot 3(-3y + 27) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 3 is a quadratic in $x$ with $a = 3$, $b = 17 - y$ and $c = -3y + 27$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 + 2y - 35 \\ge 0$",
                  "reason": "Square of a binomial: $(17 - y)^2 = y^2 - 34y + 289$; the bracket $(-3y + 27)$ is multiplied by $-12$, and like terms are collected."
                },
                {
                  "step": "$(y + 7)(y - 5) \\ge 0$",
                  "reason": "Factoring a quadratic: $7$ and $-5$ have sum $2$ and product $-35$."
                },
                {
                  "step": "The range is $y \\le -7$ or $y \\ge 5$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: both brackets are $0$ or negative for $y \\le -7$, both are $0$ or positive for $y \\ge 5$, and between $-7$ and $5$ their signs differ. Each such $y$ has a real $x$ by line 5, and that $x$ is in the domain by line 4."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{-2x^2 - 18x - 38}{x + 3}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y <= -10 or y >= -2",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{-2x^2 - 18x - 38}{x + 3}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(x + 3) = -2x^2 - 18x - 38$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{-2x^2 - 18x - 38}{x + 3}$ are multiplied by $x + 3$, which is not $0$ in the domain."
                },
                {
                  "step": "$-2x^2 + (-18 - y)x + (-3y - 38) = 0$",
                  "reason": "Adding the same number to both sides: $-3y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "At $x = -3$ the left side of line 3 is $-2 \\cdot \\left(-3\\right)^2 + (-18 - y) \\cdot \\left(-3\\right) + (-3y - 38) = -2$, which is not $0$, so no solution of line 3 is $x = -3$.",
                  "reason": "Substituting a value: $-3$ is put in place of $x$, and the two terms with $y$ cancel."
                },
                {
                  "step": "$(-18 - y)^2 - 4 \\cdot \\left(-2\\right)(-3y - 38) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 3 is a quadratic in $x$ with $a = -2$, $b = -18 - y$ and $c = -3y - 38$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 + 12y + 20 \\ge 0$",
                  "reason": "Square of a binomial: $(-18 - y)^2 = y^2 + 36y + 324$; the bracket $(-3y - 38)$ is multiplied by $8$, and like terms are collected."
                },
                {
                  "step": "$(y + 10)(y + 2) \\ge 0$",
                  "reason": "Factoring a quadratic: $10$ and $2$ have sum $12$ and product $20$."
                },
                {
                  "step": "The range is $y \\le -10$ or $y \\ge -2$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: both brackets are $0$ or negative for $y \\le -10$, both are $0$ or positive for $y \\ge -2$, and between $-10$ and $-2$ their signs differ. Each such $y$ has a real $x$ by line 5, and that $x$ is in the domain by line 4."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = \\dfrac{2x^2 - 11x - 4}{x - 5}$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = \\dfrac{2x^2 - 11x - 4}{x - 5}$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y(x - 5) = 2x^2 - 11x - 4$",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{2x^2 - 11x - 4}{x - 5}$ are multiplied by $x - 5$, which is not $0$ in the domain."
              },
              {
                "step": "$2x^2 + (-11 - y)x + (5y - 4) = 0$",
                "reason": "Adding the same number to both sides: $5y - xy$ is added to both sides, and the terms are collected by powers of $x$."
              },
              {
                "step": "At $x = 5$ the left side of line 3 is $2 \\cdot 5^2 + (-11 - y) \\cdot 5 + (5y - 4) = -9$, which is not $0$, so no solution of line 3 is $x = 5$.",
                "reason": "Substituting a value: $5$ is put in place of $x$, and the two terms with $y$ cancel."
              },
              {
                "step": "$(-11 - y)^2 - 4 \\cdot 2(5y - 4) \\ge 0$",
                "reason": "Positive, zero, negative discriminant: line 3 is a quadratic in $x$ with $a = 2$, $b = -11 - y$ and $c = 5y - 4$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
              },
              {
                "step": "$y^2 - 18y + 153 \\ge 0$",
                "reason": "Square of a binomial: $(-11 - y)^2 = y^2 + 22y + 121$; the bracket $(5y - 4)$ is multiplied by $-8$, and like terms are collected."
              },
              {
                "step": "The discriminant of $y^2 - 18y + 153$ is $\\left(-18\\right)^2 - 4 \\cdot 153 = -288$, which is negative.",
                "reason": "Discriminant $b^2 - 4ac$: here $a = 1$, $b = -18$ and $c = 153$."
              },
              {
                "step": "The range is every real number.",
                "reason": "A quadratic with no real root keeps one sign: $y^2 - 18y + 153$ is positive for every real $y$, so line 5 holds for every $y$. Each $y$ has a real $x$, and that $x$ is in the domain by line 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = \\dfrac{x^2 - 15x + 34}{x - 4}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "All",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{x^2 - 15x + 34}{x - 4}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(x - 4) = x^2 - 15x + 34$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{x^2 - 15x + 34}{x - 4}$ are multiplied by $x - 4$, which is not $0$ in the domain."
                },
                {
                  "step": "$x^2 + (-15 - y)x + (4y + 34) = 0$",
                  "reason": "Adding the same number to both sides: $4y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "At $x = 4$ the left side of line 3 is $4^2 + (-15 - y) \\cdot 4 + (4y + 34) = -10$, which is not $0$, so no solution of line 3 is $x = 4$.",
                  "reason": "Substituting a value: $4$ is put in place of $x$, and the two terms with $y$ cancel."
                },
                {
                  "step": "$(-15 - y)^2 - 4(4y + 34) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 3 is a quadratic in $x$ with $a = 1$, $b = -15 - y$ and $c = 4y + 34$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 + 14y + 89 \\ge 0$",
                  "reason": "Square of a binomial: $(-15 - y)^2 = y^2 + 30y + 225$; the bracket $(4y + 34)$ is multiplied by $-4$, and like terms are collected."
                },
                {
                  "step": "The discriminant of $y^2 + 14y + 89$ is $14^2 - 4 \\cdot 89 = -160$, which is negative.",
                  "reason": "Discriminant $b^2 - 4ac$: here $a = 1$, $b = 14$ and $c = 89$."
                },
                {
                  "step": "The range is every real number.",
                  "reason": "A quadratic with no real root keeps one sign: $y^2 + 14y + 89$ is positive for every real $y$, so line 5 holds for every $y$. Each $y$ has a real $x$, and that $x$ is in the domain by line 4."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{-3x^2 - 10x - 2}{x + 3}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "All",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{-3x^2 - 10x - 2}{x + 3}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(x + 3) = -3x^2 - 10x - 2$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{-3x^2 - 10x - 2}{x + 3}$ are multiplied by $x + 3$, which is not $0$ in the domain."
                },
                {
                  "step": "$-3x^2 + (-10 - y)x + (-3y - 2) = 0$",
                  "reason": "Adding the same number to both sides: $-3y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "At $x = -3$ the left side of line 3 is $-3 \\cdot \\left(-3\\right)^2 + (-10 - y) \\cdot \\left(-3\\right) + (-3y - 2) = 1$, which is not $0$, so no solution of line 3 is $x = -3$.",
                  "reason": "Substituting a value: $-3$ is put in place of $x$, and the two terms with $y$ cancel."
                },
                {
                  "step": "$(-10 - y)^2 - 4 \\cdot \\left(-3\\right)(-3y - 2) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 3 is a quadratic in $x$ with $a = -3$, $b = -10 - y$ and $c = -3y - 2$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 - 16y + 76 \\ge 0$",
                  "reason": "Square of a binomial: $(-10 - y)^2 = y^2 + 20y + 100$; the bracket $(-3y - 2)$ is multiplied by $12$, and like terms are collected."
                },
                {
                  "step": "The discriminant of $y^2 - 16y + 76$ is $\\left(-16\\right)^2 - 4 \\cdot 76 = -48$, which is negative.",
                  "reason": "Discriminant $b^2 - 4ac$: here $a = 1$, $b = -16$ and $c = 76$."
                },
                {
                  "step": "The range is every real number.",
                  "reason": "A quadratic with no real root keeps one sign: $y^2 - 16y + 76$ is positive for every real $y$, so line 5 holds for every $y$. Each $y$ has a real $x$, and that $x$ is in the domain by line 4."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{-2x^2 - 17x - 14}{x + 2}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "All",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{-2x^2 - 17x - 14}{x + 2}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(x + 2) = -2x^2 - 17x - 14$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{-2x^2 - 17x - 14}{x + 2}$ are multiplied by $x + 2$, which is not $0$ in the domain."
                },
                {
                  "step": "$-2x^2 + (-17 - y)x + (-2y - 14) = 0$",
                  "reason": "Adding the same number to both sides: $-2y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "At $x = -2$ the left side of line 3 is $-2 \\cdot \\left(-2\\right)^2 + (-17 - y) \\cdot \\left(-2\\right) + (-2y - 14) = 12$, which is not $0$, so no solution of line 3 is $x = -2$.",
                  "reason": "Substituting a value: $-2$ is put in place of $x$, and the two terms with $y$ cancel."
                },
                {
                  "step": "$(-17 - y)^2 - 4 \\cdot \\left(-2\\right)(-2y - 14) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 3 is a quadratic in $x$ with $a = -2$, $b = -17 - y$ and $c = -2y - 14$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 + 18y + 177 \\ge 0$",
                  "reason": "Square of a binomial: $(-17 - y)^2 = y^2 + 34y + 289$; the bracket $(-2y - 14)$ is multiplied by $8$, and like terms are collected."
                },
                {
                  "step": "The discriminant of $y^2 + 18y + 177$ is $18^2 - 4 \\cdot 177 = -384$, which is negative.",
                  "reason": "Discriminant $b^2 - 4ac$: here $a = 1$, $b = 18$ and $c = 177$."
                },
                {
                  "step": "The range is every real number.",
                  "reason": "A quadratic with no real root keeps one sign: $y^2 + 18y + 177$ is positive for every real $y$, so line 5 holds for every $y$. Each $y$ has a real $x$, and that $x$ is in the domain by line 4."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t222-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the slant asymptote of the graph of $f(x) = \\dfrac{10x^2 - 9x - 7}{2x - 3}$.",
            "lines": [
              {
                "step": "Find the slant asymptote of the graph of $f(x) = \\dfrac{10x^2 - 9x - 7}{2x - 3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(10x^2 - 9x - 7) - 5x(2x - 3) = 6x - 7$",
                "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $10x^2$ divided by the leading term $2x$ of the divisor gives the quotient term $5x$, and $5x$ times the divisor is taken away."
              },
              {
                "step": "$(6x - 7) - 3(2x - 3) = 2$",
                "reason": "Long division of polynomials: the leading term $6x$ divided by the leading term $2x$ of the divisor gives the quotient term $3$, and $3$ times the divisor is taken away. What is left, $2$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "$10x^2 - 9x - 7 = (2x - 3)(5x + 3) + 2$",
                "reason": "Division statement: the top equals the bottom times the quotient, plus the remainder; the quotient $5x + 3$ is the sum of the quotient terms, and the remainder $2$ is what is left."
              },
              {
                "step": "The slant asymptote is $y = 5x + 3$.",
                "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $5x + 3$, and the remainder $2$ is not $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the slant asymptote of the graph of $f(x) = \\dfrac{x^2 + 12x + 31}{x + 3}$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = x+9",
              "lines": [
                {
                  "step": "Find the slant asymptote of the graph of $f(x) = \\dfrac{x^2 + 12x + 31}{x + 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x^2 + 12x + 31) - x(x + 3) = 9x + 31$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $x^2$ divided by the leading term $x$ of the divisor gives the quotient term $x$, and $x$ times the divisor is taken away."
                },
                {
                  "step": "$(9x + 31) - 9(x + 3) = 4$",
                  "reason": "Long division of polynomials: the leading term $9x$ divided by the leading term $x$ of the divisor gives the quotient term $9$, and $9$ times the divisor is taken away. What is left, $4$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$x^2 + 12x + 31 = (x + 3)(x + 9) + 4$",
                  "reason": "Division statement: the top equals the bottom times the quotient, plus the remainder; the quotient $x + 9$ is the sum of the quotient terms, and the remainder $4$ is what is left."
                },
                {
                  "step": "The slant asymptote is $y = x + 9$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $x + 9$, and the remainder $4$ is not $0$."
                }
              ]
            },
            {
              "prompt": "Find the slant asymptote of the graph of $f(x) = \\dfrac{x^2 + 3x - 21}{x - 2}$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = x+5",
              "lines": [
                {
                  "step": "Find the slant asymptote of the graph of $f(x) = \\dfrac{x^2 + 3x - 21}{x - 2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x^2 + 3x - 21) - x(x - 2) = 5x - 21$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $x^2$ divided by the leading term $x$ of the divisor gives the quotient term $x$, and $x$ times the divisor is taken away."
                },
                {
                  "step": "$(5x - 21) - 5(x - 2) = -11$",
                  "reason": "Long division of polynomials: the leading term $5x$ divided by the leading term $x$ of the divisor gives the quotient term $5$, and $5$ times the divisor is taken away. What is left, $-11$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$x^2 + 3x - 21 = (x - 2)(x + 5) - 11$",
                  "reason": "Division statement: the top equals the bottom times the quotient, plus the remainder; the quotient $x + 5$ is the sum of the quotient terms, and the remainder $-11$ is what is left."
                },
                {
                  "step": "The slant asymptote is $y = x + 5$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $x + 5$, and the remainder $-11$ is not $0$."
                }
              ]
            },
            {
              "prompt": "Find the slant asymptote of the graph of $f(x) = \\dfrac{5x^2 + 43x + 43}{x + 7}$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = 5*x+8",
              "lines": [
                {
                  "step": "Find the slant asymptote of the graph of $f(x) = \\dfrac{5x^2 + 43x + 43}{x + 7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5x^2 + 43x + 43) - 5x(x + 7) = 8x + 43$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $5x^2$ divided by the leading term $x$ of the divisor gives the quotient term $5x$, and $5x$ times the divisor is taken away."
                },
                {
                  "step": "$(8x + 43) - 8(x + 7) = -13$",
                  "reason": "Long division of polynomials: the leading term $8x$ divided by the leading term $x$ of the divisor gives the quotient term $8$, and $8$ times the divisor is taken away. What is left, $-13$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$5x^2 + 43x + 43 = (x + 7)(5x + 8) - 13$",
                  "reason": "Division statement: the top equals the bottom times the quotient, plus the remainder; the quotient $5x + 8$ is the sum of the quotient terms, and the remainder $-13$ is what is left."
                },
                {
                  "step": "The slant asymptote is $y = 5x + 8$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $5x + 8$, and the remainder $-13$ is not $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the slant asymptote of the graph of $f(x) = \\dfrac{5x^2 - 24}{x + 1}$.",
            "lines": [
              {
                "step": "Find the slant asymptote of the graph of $f(x) = \\dfrac{5x^2 - 24}{x + 1}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x^2 - 24 = 5x^2 + 0x - 24$",
                "reason": "General form: the power $x$ is missing from the top, so its coefficient is 0, and the term $0x$ keeps its column in the long division."
              },
              {
                "step": "$(5x^2 + 0x - 24) - 5x(x + 1) = -5x - 24$",
                "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $5x^2$ divided by the leading term $x$ of the divisor gives the quotient term $5x$, and $5x$ times the divisor is taken away."
              },
              {
                "step": "$(-5x - 24) - (-5)(x + 1) = -19$",
                "reason": "Long division of polynomials: the leading term $-5x$ divided by the leading term $x$ of the divisor gives the quotient term $-5$, and $-5$ times the divisor is taken away. What is left, $-19$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "$5x^2 - 24 = (x + 1)(5x - 5) - 19$",
                "reason": "Division statement: the top equals the bottom times the quotient, plus the remainder; the quotient $5x - 5$ is the sum of the quotient terms, and the remainder $-19$ is what is left."
              },
              {
                "step": "The slant asymptote is $y = 5x - 5$.",
                "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $5x - 5$, and the remainder $-19$ is not $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the slant asymptote of the graph of $f(x) = \\dfrac{-3x^2 + 49}{x + 4}$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -3*x+12",
              "lines": [
                {
                  "step": "Find the slant asymptote of the graph of $f(x) = \\dfrac{-3x^2 + 49}{x + 4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x^2 + 49 = -3x^2 + 0x + 49$",
                  "reason": "General form: the power $x$ is missing from the top, so its coefficient is 0, and the term $0x$ keeps its column in the long division."
                },
                {
                  "step": "$(-3x^2 + 0x + 49) - (-3x)(x + 4) = 12x + 49$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $-3x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-3x$, and $-3x$ times the divisor is taken away."
                },
                {
                  "step": "$(12x + 49) - 12(x + 4) = 1$",
                  "reason": "Long division of polynomials: the leading term $12x$ divided by the leading term $x$ of the divisor gives the quotient term $12$, and $12$ times the divisor is taken away. What is left, $1$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$-3x^2 + 49 = (x + 4)(-3x + 12) + 1$",
                  "reason": "Division statement: the top equals the bottom times the quotient, plus the remainder; the quotient $-3x + 12$ is the sum of the quotient terms, and the remainder $1$ is what is left."
                },
                {
                  "step": "The slant asymptote is $y = -3x + 12$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-3x + 12$, and the remainder $1$ is not $0$."
                }
              ]
            },
            {
              "prompt": "Find the slant asymptote of the graph of $f(x) = \\dfrac{x^2 - 3}{x + 2}$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = x-2",
              "lines": [
                {
                  "step": "Find the slant asymptote of the graph of $f(x) = \\dfrac{x^2 - 3}{x + 2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 3 = x^2 + 0x - 3$",
                  "reason": "General form: the power $x$ is missing from the top, so its coefficient is 0, and the term $0x$ keeps its column in the long division."
                },
                {
                  "step": "$(x^2 + 0x - 3) - x(x + 2) = -2x - 3$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $x^2$ divided by the leading term $x$ of the divisor gives the quotient term $x$, and $x$ times the divisor is taken away."
                },
                {
                  "step": "$(-2x - 3) - (-2)(x + 2) = 1$",
                  "reason": "Long division of polynomials: the leading term $-2x$ divided by the leading term $x$ of the divisor gives the quotient term $-2$, and $-2$ times the divisor is taken away. What is left, $1$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$x^2 - 3 = (x + 2)(x - 2) + 1$",
                  "reason": "Division statement: the top equals the bottom times the quotient, plus the remainder; the quotient $x - 2$ is the sum of the quotient terms, and the remainder $1$ is what is left."
                },
                {
                  "step": "The slant asymptote is $y = x - 2$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $x - 2$, and the remainder $1$ is not $0$."
                }
              ]
            },
            {
              "prompt": "Find the slant asymptote of the graph of $f(x) = \\dfrac{-3x^2 + 66}{x - 5}$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -3*x-15",
              "lines": [
                {
                  "step": "Find the slant asymptote of the graph of $f(x) = \\dfrac{-3x^2 + 66}{x - 5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x^2 + 66 = -3x^2 + 0x + 66$",
                  "reason": "General form: the power $x$ is missing from the top, so its coefficient is 0, and the term $0x$ keeps its column in the long division."
                },
                {
                  "step": "$(-3x^2 + 0x + 66) - (-3x)(x - 5) = -15x + 66$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $-3x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-3x$, and $-3x$ times the divisor is taken away."
                },
                {
                  "step": "$(-15x + 66) - (-15)(x - 5) = -9$",
                  "reason": "Long division of polynomials: the leading term $-15x$ divided by the leading term $x$ of the divisor gives the quotient term $-15$, and $-15$ times the divisor is taken away. What is left, $-9$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$-3x^2 + 66 = (x - 5)(-3x - 15) - 9$",
                  "reason": "Division statement: the top equals the bottom times the quotient, plus the remainder; the quotient $-3x - 15$ is the sum of the quotient terms, and the remainder $-9$ is what is left."
                },
                {
                  "step": "The slant asymptote is $y = -3x - 15$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-3x - 15$, and the remainder $-9$ is not $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t222-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the graph of $f(x) = \\dfrac{(5x + 4)(4x - 5)}{7x - 4}$ has a horizontal asymptote.",
            "lines": [
              {
                "step": "Decide whether the graph of $f(x) = \\dfrac{(5x + 4)(4x - 5)}{7x - 4}$ has a horizontal asymptote.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The top $(5x + 4)(4x - 5)$ has degree $2$.",
                "reason": "Degree of a product is the sum of the degrees: each bracket has degree 1, and $1 + 1 = 2$."
              },
              {
                "step": "The bottom $7x - 4$ has degree $1$.",
                "reason": "Degree: the highest power of $x$ with a coefficient that is not $0$ is $x$."
              },
              {
                "step": "The top has degree 2 and the bottom degree 1, so the graph has no horizontal asymptote: No.",
                "reason": "Slant asymptote: for a top of degree 2 over a bottom of degree 1, the values of the function grow without bound far from $0$, so the graph has no horizontal asymptote."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the graph of $f(x) = \\dfrac{(4x - 7)(x - 7)}{(x - 4)(3x + 5)}$ has a horizontal asymptote.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $f(x) = \\dfrac{(4x - 7)(x - 7)}{(x - 4)(3x + 5)}$ has a horizontal asymptote.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top $(4x - 7)(x - 7)$ has degree $2$.",
                  "reason": "Degree of a product is the sum of the degrees: each bracket has degree 1, and $1 + 1 = 2$."
                },
                {
                  "step": "The bottom $(x - 4)(3x + 5)$ has degree $2$.",
                  "reason": "Degree of a product is the sum of the degrees: each bracket has degree 1, and $1 + 1 = 2$."
                },
                {
                  "step": "The degrees are equal, so the graph has a horizontal asymptote: Yes.",
                  "reason": "Horizontal asymptote: with equal degrees it is $y$ equal to the top's leading coefficient over the bottom's."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $f(x) = \\dfrac{4x^2 - 6x - 13}{3x + 7}$ has a horizontal asymptote.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the graph of $f(x) = \\dfrac{4x^2 - 6x - 13}{3x + 7}$ has a horizontal asymptote.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top $4x^2 - 6x - 13$ has degree $2$.",
                  "reason": "Degree: the highest power of $x$ with a coefficient that is not $0$ is $x^2$."
                },
                {
                  "step": "The bottom $3x + 7$ has degree $1$.",
                  "reason": "Degree: the highest power of $x$ with a coefficient that is not $0$ is $x$."
                },
                {
                  "step": "The top has degree 2 and the bottom degree 1, so the graph has no horizontal asymptote: No.",
                  "reason": "Slant asymptote: for a top of degree 2 over a bottom of degree 1, the values of the function grow without bound far from $0$, so the graph has no horizontal asymptote."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $f(x) = \\dfrac{-2x - 7}{(4x + 9)(3x + 2)}$ has a horizontal asymptote.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $f(x) = \\dfrac{-2x - 7}{(4x + 9)(3x + 2)}$ has a horizontal asymptote.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top $-2x - 7$ has degree $1$.",
                  "reason": "Degree: the highest power of $x$ with a coefficient that is not $0$ is $x$."
                },
                {
                  "step": "The bottom $(4x + 9)(3x + 2)$ has degree $2$.",
                  "reason": "Degree of a product is the sum of the degrees: each bracket has degree 1, and $1 + 1 = 2$."
                },
                {
                  "step": "The top's degree is less than the bottom's, so the graph has a horizontal asymptote: Yes.",
                  "reason": "Horizontal asymptote: when the top's degree is less than the bottom's, it is $y = 0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t222-k4",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = \\dfrac{-3x^2 - 21x - 18}{x + 4}$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\dfrac{-3x^2 - 21x - 18}{x + 4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The bottom $x + 4$ is $0$ at $x = -4$, and there the top is $-3 \\cdot \\left(-4\\right)^2 - 21 \\cdot \\left(-4\\right) - 18 = 18$.",
                "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -4$ is a vertical asymptote."
              },
              {
                "step": "$(-3x^2 - 21x - 18) - (-3x)(x + 4) = -9x - 18$",
                "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $-3x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-3x$, and $-3x$ times the divisor is taken away."
              },
              {
                "step": "$(-9x - 18) - (-9)(x + 4) = 18$",
                "reason": "Long division of polynomials: the leading term $-9x$ divided by the leading term $x$ of the divisor gives the quotient term $-9$, and $-9$ times the divisor is taken away. What is left, $18$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "The slant asymptote is $y = -3x - 9$.",
                "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-3x - 9$, and the remainder $18$ is not $0$."
              },
              {
                "step": "For $x \\ne -4$, $y = -3x - 9 + \\dfrac{18}{x + 4}$.",
                "reason": "Division statement: the top is the bottom times the quotient $-3x - 9$, plus the remainder $18$, and both sides are divided by the bottom, which is not $0$ for $x \\ne -4$."
              },
              {
                "step": "On each side of $x = -4$ a greater $x$ gives a smaller $-3x - 9$ and a smaller $\\dfrac{18}{x + 4}$, so the graph falls all the way along each branch and has no turning point.",
                "reason": "Monotonically decreasing: a greater input gives a smaller output on each branch. Multiplying by a negative number reverses the sign, so a greater $x$ gives a smaller $-3x - 9$; reciprocals of numbers of the same sign reverse the order, and on one side of $x = -4$ the numbers $x + 4$ have one sign, so a greater $x$ gives a smaller $\\dfrac{18}{x + 4}$; adding two inequalities, the sum of the two parts is smaller too."
              },
              {
                "step": "At $x = 0$ the top is $-18$ and the bottom is $4$, so the graph meets the $y$-axis at $B\\left(0, -\\dfrac{9}{2}\\right)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$-3x^2 - 21x - 18 = -3(x + 6)(x + 1)$",
                "reason": "Factoring a quadratic: $6$ and $1$ have sum $7$ and product $6$, once the common factor $-3$ is taken out."
              },
              {
                "step": "The top is $0$ at $x = -6$ and at $x = -1$, so the graph meets the $x$-axis at $A(-6, 0)$ and $C(-1, 0)$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
              },
              {
                "step": "The graph is above the $x$-axis for $x < -6$, below it for $-6 < x < -4$, above it for $-4 < x < -1$ and below it for $x > -1$.",
                "reason": "Sign table: the brackets $x + 6$, $x + 4$ and $x + 1$ are each negative to the left of their zero and positive to the right, so for $x > -1$ all three are positive and $y$ has the sign of the top's leading coefficient $-3$; the sign of $y$ changes at each of $-6$, $-4$ and $-1$."
              },
              {
                "step": "The curve has two branches, one on each side of $x = -4$, passes through $A$, $B$ and $C$, and comes closer and closer to both asymptotes.",
                "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                "figure": {
                  "file": "asymptotes-of-rational-functions-1.svg",
                  "alt": "A curve in two branches with the vertical asymptote x = −4 and the slant asymptote y = −3x − 9, through A(−6, 0), B(0, −9/2) and C(−1, 0)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = \\dfrac{-x^2 + 5x + 6}{x - 1}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-1, 0)$",
                  "$(6, 0)$",
                  "$(0, -6)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 1$",
                  "$y = -x + 4$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{-x^2 + 5x + 6}{x - 1}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x - 1$ is $0$ at $x = 1$, and there the top is $-1^2 + 5 \\cdot 1 + 6 = 10$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 1$ is a vertical asymptote."
                },
                {
                  "step": "$(-x^2 + 5x + 6) - (-x)(x - 1) = 4x + 6$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $-x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-x$, and $-x$ times the divisor is taken away."
                },
                {
                  "step": "$(4x + 6) - 4(x - 1) = 10$",
                  "reason": "Long division of polynomials: the leading term $4x$ divided by the leading term $x$ of the divisor gives the quotient term $4$, and $4$ times the divisor is taken away. What is left, $10$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote is $y = -x + 4$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-x + 4$, and the remainder $10$ is not $0$."
                },
                {
                  "step": "For $x \\ne 1$, $y = -x + 4 + \\dfrac{10}{x - 1}$.",
                  "reason": "Division statement: the top is the bottom times the quotient $-x + 4$, plus the remainder $10$, and both sides are divided by the bottom, which is not $0$ for $x \\ne 1$."
                },
                {
                  "step": "On each side of $x = 1$ a greater $x$ gives a smaller $-x + 4$ and a smaller $\\dfrac{10}{x - 1}$, so the graph falls all the way along each branch and has no turning point.",
                  "reason": "Monotonically decreasing: a greater input gives a smaller output on each branch. Multiplying by a negative number reverses the sign, so a greater $x$ gives a smaller $-x + 4$; reciprocals of numbers of the same sign reverse the order, and on one side of $x = 1$ the numbers $x - 1$ have one sign, so a greater $x$ gives a smaller $\\dfrac{10}{x - 1}$; adding two inequalities, the sum of the two parts is smaller too."
                },
                {
                  "step": "At $x = 0$ the top is $6$ and the bottom is $-1$, so the graph meets the $y$-axis at $B(0, -6)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$-x^2 + 5x + 6 = -(x + 1)(x - 6)$",
                  "reason": "Factoring a quadratic: $1$ and $-6$ have sum $-5$ and product $-6$, once the factor $-1$ is taken out."
                },
                {
                  "step": "The top is $0$ at $x = -1$ and at $x = 6$, so the graph meets the $x$-axis at $A(-1, 0)$ and $C(6, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The graph is above the $x$-axis for $x < -1$, below it for $-1 < x < 1$, above it for $1 < x < 6$ and below it for $x > 6$.",
                  "reason": "Sign table: the brackets $x + 1$, $x - 1$ and $x - 6$ are each negative to the left of their zero and positive to the right, so for $x > 6$ all three are positive and $y$ has the sign of the top's leading coefficient $-1$; the sign of $y$ changes at each of $-1$, $1$ and $6$."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 1$, passes through $A$, $B$ and $C$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-2.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 1 and the slant asymptote y = −x + 4, through A(−1, 0), B(0, −6) and C(6, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{3x^2 - 15x + 12}{x - 2}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(1, 0)$",
                  "$(4, 0)$",
                  "$(0, -6)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 2$",
                  "$y = 3x - 9$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{3x^2 - 15x + 12}{x - 2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x - 2$ is $0$ at $x = 2$, and there the top is $3 \\cdot 2^2 - 15 \\cdot 2 + 12 = -6$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 2$ is a vertical asymptote."
                },
                {
                  "step": "$(3x^2 - 15x + 12) - 3x(x - 2) = -9x + 12$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $3x^2$ divided by the leading term $x$ of the divisor gives the quotient term $3x$, and $3x$ times the divisor is taken away."
                },
                {
                  "step": "$(-9x + 12) - (-9)(x - 2) = -6$",
                  "reason": "Long division of polynomials: the leading term $-9x$ divided by the leading term $x$ of the divisor gives the quotient term $-9$, and $-9$ times the divisor is taken away. What is left, $-6$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote is $y = 3x - 9$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $3x - 9$, and the remainder $-6$ is not $0$."
                },
                {
                  "step": "For $x \\ne 2$, $y = 3x - 9 - \\dfrac{6}{x - 2}$.",
                  "reason": "Division statement: the top is the bottom times the quotient $3x - 9$, plus the remainder $-6$, and both sides are divided by the bottom, which is not $0$ for $x \\ne 2$."
                },
                {
                  "step": "On each side of $x = 2$ a greater $x$ gives a greater $3x - 9$ and a greater $-\\dfrac{6}{x - 2}$, so the graph rises all the way along each branch and has no turning point.",
                  "reason": "Monotonically increasing: a greater input gives a greater output on each branch. Multiplying by a positive number keeps the order, so a greater $x$ gives a greater $3x - 9$; reciprocals of numbers of the same sign reverse the order, and on one side of $x = 2$ the numbers $x - 2$ have one sign, so a greater $x$ gives a smaller $\\dfrac{6}{x - 2}$, and multiplying by a negative number reverses the sign, so it gives a greater $-\\dfrac{6}{x - 2}$; adding two inequalities, the sum of the two parts is greater too."
                },
                {
                  "step": "At $x = 0$ the top is $12$ and the bottom is $-2$, so the graph meets the $y$-axis at $B(0, -6)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$3x^2 - 15x + 12 = 3(x - 1)(x - 4)$",
                  "reason": "Factoring a quadratic: $-1$ and $-4$ have sum $-5$ and product $4$, once the common factor $3$ is taken out."
                },
                {
                  "step": "The top is $0$ at $x = 1$ and at $x = 4$, so the graph meets the $x$-axis at $A(1, 0)$ and $C(4, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The graph is below the $x$-axis for $x < 1$, above it for $1 < x < 2$, below it for $2 < x < 4$ and above it for $x > 4$.",
                  "reason": "Sign table: the brackets $x - 1$, $x - 2$ and $x - 4$ are each negative to the left of their zero and positive to the right, so for $x > 4$ all three are positive and $y$ has the sign of the top's leading coefficient $3$; the sign of $y$ changes at each of $1$, $2$ and $4$."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 2$, passes through $A$, $B$ and $C$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-3.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 2 and the slant asymptote y = 3x − 9, through A(1, 0), B(0, −6) and C(4, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{2x^2 - 18x + 28}{x - 4}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(2, 0)$",
                  "$(7, 0)$",
                  "$(0, -7)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 4$",
                  "$y = 2x - 10$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{2x^2 - 18x + 28}{x - 4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x - 4$ is $0$ at $x = 4$, and there the top is $2 \\cdot 4^2 - 18 \\cdot 4 + 28 = -12$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 4$ is a vertical asymptote."
                },
                {
                  "step": "$(2x^2 - 18x + 28) - 2x(x - 4) = -10x + 28$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $2x^2$ divided by the leading term $x$ of the divisor gives the quotient term $2x$, and $2x$ times the divisor is taken away."
                },
                {
                  "step": "$(-10x + 28) - (-10)(x - 4) = -12$",
                  "reason": "Long division of polynomials: the leading term $-10x$ divided by the leading term $x$ of the divisor gives the quotient term $-10$, and $-10$ times the divisor is taken away. What is left, $-12$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote is $y = 2x - 10$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $2x - 10$, and the remainder $-12$ is not $0$."
                },
                {
                  "step": "For $x \\ne 4$, $y = 2x - 10 - \\dfrac{12}{x - 4}$.",
                  "reason": "Division statement: the top is the bottom times the quotient $2x - 10$, plus the remainder $-12$, and both sides are divided by the bottom, which is not $0$ for $x \\ne 4$."
                },
                {
                  "step": "On each side of $x = 4$ a greater $x$ gives a greater $2x - 10$ and a greater $-\\dfrac{12}{x - 4}$, so the graph rises all the way along each branch and has no turning point.",
                  "reason": "Monotonically increasing: a greater input gives a greater output on each branch. Multiplying by a positive number keeps the order, so a greater $x$ gives a greater $2x - 10$; reciprocals of numbers of the same sign reverse the order, and on one side of $x = 4$ the numbers $x - 4$ have one sign, so a greater $x$ gives a smaller $\\dfrac{12}{x - 4}$, and multiplying by a negative number reverses the sign, so it gives a greater $-\\dfrac{12}{x - 4}$; adding two inequalities, the sum of the two parts is greater too."
                },
                {
                  "step": "At $x = 0$ the top is $28$ and the bottom is $-4$, so the graph meets the $y$-axis at $B(0, -7)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$2x^2 - 18x + 28 = 2(x - 2)(x - 7)$",
                  "reason": "Factoring a quadratic: $-2$ and $-7$ have sum $-9$ and product $14$, once the common factor $2$ is taken out."
                },
                {
                  "step": "The top is $0$ at $x = 2$ and at $x = 7$, so the graph meets the $x$-axis at $A(2, 0)$ and $C(7, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The graph is below the $x$-axis for $x < 2$, above it for $2 < x < 4$, below it for $4 < x < 7$ and above it for $x > 7$.",
                  "reason": "Sign table: the brackets $x - 2$, $x - 4$ and $x - 7$ are each negative to the left of their zero and positive to the right, so for $x > 7$ all three are positive and $y$ has the sign of the top's leading coefficient $2$; the sign of $y$ changes at each of $2$, $4$ and $7$."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 4$, passes through $A$, $B$ and $C$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-4.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 4 and the slant asymptote y = 2x − 10, through A(2, 0), B(0, −7) and C(7, 0)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = \\dfrac{x^2 + 22x + 112}{x + 6}$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\dfrac{x^2 + 22x + 112}{x + 6}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The bottom $x + 6$ is $0$ at $x = -6$, and there the top is $\\left(-6\\right)^2 + 22 \\cdot \\left(-6\\right) + 112 = 16$.",
                "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -6$ is a vertical asymptote."
              },
              {
                "step": "$(x^2 + 22x + 112) - x(x + 6) = 16x + 112$",
                "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $x^2$ divided by the leading term $x$ of the divisor gives the quotient term $x$, and $x$ times the divisor is taken away."
              },
              {
                "step": "$(16x + 112) - 16(x + 6) = 16$",
                "reason": "Long division of polynomials: the leading term $16x$ divided by the leading term $x$ of the divisor gives the quotient term $16$, and $16$ times the divisor is taken away. What is left, $16$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "The slant asymptote is $y = x + 16$.",
                "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $x + 16$, and the remainder $16$ is not $0$."
              },
              {
                "step": "At $x = 0$ the top is $112$ and the bottom is $6$, so the graph meets the $y$-axis at $B\\left(0, \\dfrac{56}{3}\\right)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$x^2 + 22x + 112 = (x + 14)(x + 8)$",
                "reason": "Factoring a quadratic: $14$ and $8$ have sum $22$ and product $112$."
              },
              {
                "step": "The top is $0$ at $x = -14$ and at $x = -8$, so the graph meets the $x$-axis at $A(-14, 0)$ and $C(-8, 0)$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
              },
              {
                "step": "The graph is below the $x$-axis for $x < -14$, above it for $-14 < x < -8$, below it for $-8 < x < -6$ and above it for $x > -6$.",
                "reason": "Sign table: the brackets $x + 14$, $x + 8$ and $x + 6$ are each negative to the left of their zero and positive to the right, so for $x > -6$ all three are positive and $y$ has the sign of the top's leading coefficient $1$; the sign of $y$ changes at each of $-14$, $-8$ and $-6$."
              },
              {
                "step": "$y(x + 6) = x^2 + 22x + 112$",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{x^2 + 22x + 112}{x + 6}$ are multiplied by $x + 6$, which is not $0$ in the domain."
              },
              {
                "step": "$x^2 + (22 - y)x + (-6y + 112) = 0$",
                "reason": "Adding the same number to both sides: $-6y - xy$ is added to both sides, and the terms are collected by powers of $x$."
              },
              {
                "step": "$(22 - y)^2 - 4(-6y + 112) \\ge 0$",
                "reason": "Positive, zero, negative discriminant: line 11 is a quadratic in $x$ with $a = 1$, $b = 22 - y$ and $c = -6y + 112$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
              },
              {
                "step": "$y^2 - 20y + 36 \\ge 0$",
                "reason": "Square of a binomial: $(22 - y)^2 = y^2 - 44y + 484$; the bracket $(-6y + 112)$ is multiplied by $-4$, and like terms are collected."
              },
              {
                "step": "$(y - 2)(y - 18) \\ge 0$",
                "reason": "Factoring a quadratic: $-2$ and $-18$ have sum $-20$ and product $36$."
              },
              {
                "step": "So $y \\le 2$ or $y \\ge 18$ at every point of the graph.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: both brackets are $0$ or negative for $y \\le 2$, both are $0$ or positive for $y \\ge 18$, and between $2$ and $18$ their signs differ."
              },
              {
                "step": "At $y = 2$ line 11 has the double root $x = \\dfrac{2 - 22}{2} = -10$, and at $y = 18$ it has the double root $x = \\dfrac{18 - 22}{2} = -2$.",
                "reason": "Positive, zero, negative discriminant: a zero discriminant gives the double root $-\\dfrac{b}{2a}$, and here $a = 1$ and $b = 22 - y$."
              },
              {
                "step": "The graph turns at $D(-10, 2)$, the highest point of its branch, and at $E(-2, 18)$, the lowest point of its branch.",
                "reason": "Graph of a function: the height of the graph at $x$ is the value of $y$, and by line 15 no height lies between $2$ and $18$, while each of $2$ and $18$ is the height at one $x$ alone."
              },
              {
                "step": "The curve has two branches, one on each side of $x = -6$, passes through $A$, $B$, $C$, $D$ and $E$, and comes closer and closer to both asymptotes.",
                "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                "figure": {
                  "file": "asymptotes-of-rational-functions-13.svg",
                  "alt": "A curve in two branches with the vertical asymptote x = −6 and the slant asymptote y = x + 16, through A(−14, 0), B(0, 56/3) and C(−8, 0), turning at D(−10, 2) and E(−2, 18)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = \\dfrac{-x^2 + 11x - 10}{x + 2}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(1, 0)$",
                  "$(10, 0)$",
                  "$(0, -5)$"
                ],
                "turning": [
                  "$(4, 3)$",
                  "$(-8, 27)$"
                ],
                "asymptotes": [
                  "$x = -2$",
                  "$y = -x + 13$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{-x^2 + 11x - 10}{x + 2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x + 2$ is $0$ at $x = -2$, and there the top is $-\\left(-2\\right)^2 + 11 \\cdot \\left(-2\\right) - 10 = -36$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -2$ is a vertical asymptote."
                },
                {
                  "step": "$(-x^2 + 11x - 10) - (-x)(x + 2) = 13x - 10$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $-x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-x$, and $-x$ times the divisor is taken away."
                },
                {
                  "step": "$(13x - 10) - 13(x + 2) = -36$",
                  "reason": "Long division of polynomials: the leading term $13x$ divided by the leading term $x$ of the divisor gives the quotient term $13$, and $13$ times the divisor is taken away. What is left, $-36$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote is $y = -x + 13$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-x + 13$, and the remainder $-36$ is not $0$."
                },
                {
                  "step": "At $x = 0$ the top is $-10$ and the bottom is $2$, so the graph meets the $y$-axis at $B(0, -5)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$-x^2 + 11x - 10 = -(x - 1)(x - 10)$",
                  "reason": "Factoring a quadratic: $-1$ and $-10$ have sum $-11$ and product $10$, once the factor $-1$ is taken out."
                },
                {
                  "step": "The top is $0$ at $x = 1$ and at $x = 10$, so the graph meets the $x$-axis at $A(1, 0)$ and $C(10, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The graph is above the $x$-axis for $x < -2$, below it for $-2 < x < 1$, above it for $1 < x < 10$ and below it for $x > 10$.",
                  "reason": "Sign table: the brackets $x + 2$, $x - 1$ and $x - 10$ are each negative to the left of their zero and positive to the right, so for $x > 10$ all three are positive and $y$ has the sign of the top's leading coefficient $-1$; the sign of $y$ changes at each of $-2$, $1$ and $10$."
                },
                {
                  "step": "$y(x + 2) = -x^2 + 11x - 10$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{-x^2 + 11x - 10}{x + 2}$ are multiplied by $x + 2$, which is not $0$ in the domain."
                },
                {
                  "step": "$-x^2 + (11 - y)x + (-2y - 10) = 0$",
                  "reason": "Adding the same number to both sides: $-2y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "$(11 - y)^2 + 4(-2y - 10) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 11 is a quadratic in $x$ with $a = -1$, $b = 11 - y$ and $c = -2y - 10$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 - 30y + 81 \\ge 0$",
                  "reason": "Square of a binomial: $(11 - y)^2 = y^2 - 22y + 121$; the bracket $(-2y - 10)$ is multiplied by $4$, and like terms are collected."
                },
                {
                  "step": "$(y - 3)(y - 27) \\ge 0$",
                  "reason": "Factoring a quadratic: $-3$ and $-27$ have sum $-30$ and product $81$."
                },
                {
                  "step": "So $y \\le 3$ or $y \\ge 27$ at every point of the graph.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: both brackets are $0$ or negative for $y \\le 3$, both are $0$ or positive for $y \\ge 27$, and between $3$ and $27$ their signs differ."
                },
                {
                  "step": "At $y = 3$ line 11 has the double root $x = \\dfrac{3 - 11}{-2} = 4$, and at $y = 27$ it has the double root $x = \\dfrac{27 - 11}{-2} = -8$.",
                  "reason": "Positive, zero, negative discriminant: a zero discriminant gives the double root $-\\dfrac{b}{2a}$, and here $a = -1$ and $b = 11 - y$."
                },
                {
                  "step": "The graph turns at $D(4, 3)$, the highest point of its branch, and at $E(-8, 27)$, the lowest point of its branch.",
                  "reason": "Graph of a function: the height of the graph at $x$ is the value of $y$, and by line 15 no height lies between $3$ and $27$, while each of $3$ and $27$ is the height at one $x$ alone."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = -2$, passes through $A$, $B$, $C$, $D$ and $E$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-14.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = −2 and the slant asymptote y = −x + 13, through A(1, 0), B(0, −5) and C(10, 0), turning at D(4, 3) and E(−8, 27)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{x^2 - 21x + 104}{x - 4}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(8, 0)$",
                  "$(13, 0)$",
                  "$(0, -26)$"
                ],
                "turning": [
                  "$(-2, -25)$",
                  "$(10, -1)$"
                ],
                "asymptotes": [
                  "$x = 4$",
                  "$y = x - 17$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{x^2 - 21x + 104}{x - 4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x - 4$ is $0$ at $x = 4$, and there the top is $4^2 - 21 \\cdot 4 + 104 = 36$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 4$ is a vertical asymptote."
                },
                {
                  "step": "$(x^2 - 21x + 104) - x(x - 4) = -17x + 104$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $x^2$ divided by the leading term $x$ of the divisor gives the quotient term $x$, and $x$ times the divisor is taken away."
                },
                {
                  "step": "$(-17x + 104) - (-17)(x - 4) = 36$",
                  "reason": "Long division of polynomials: the leading term $-17x$ divided by the leading term $x$ of the divisor gives the quotient term $-17$, and $-17$ times the divisor is taken away. What is left, $36$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote is $y = x - 17$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $x - 17$, and the remainder $36$ is not $0$."
                },
                {
                  "step": "At $x = 0$ the top is $104$ and the bottom is $-4$, so the graph meets the $y$-axis at $B(0, -26)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$x^2 - 21x + 104 = (x - 8)(x - 13)$",
                  "reason": "Factoring a quadratic: $-8$ and $-13$ have sum $-21$ and product $104$."
                },
                {
                  "step": "The top is $0$ at $x = 8$ and at $x = 13$, so the graph meets the $x$-axis at $A(8, 0)$ and $C(13, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The graph is below the $x$-axis for $x < 4$, above it for $4 < x < 8$, below it for $8 < x < 13$ and above it for $x > 13$.",
                  "reason": "Sign table: the brackets $x - 4$, $x - 8$ and $x - 13$ are each negative to the left of their zero and positive to the right, so for $x > 13$ all three are positive and $y$ has the sign of the top's leading coefficient $1$; the sign of $y$ changes at each of $4$, $8$ and $13$."
                },
                {
                  "step": "$y(x - 4) = x^2 - 21x + 104$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{x^2 - 21x + 104}{x - 4}$ are multiplied by $x - 4$, which is not $0$ in the domain."
                },
                {
                  "step": "$x^2 + (-21 - y)x + (4y + 104) = 0$",
                  "reason": "Adding the same number to both sides: $4y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "$(-21 - y)^2 - 4(4y + 104) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 11 is a quadratic in $x$ with $a = 1$, $b = -21 - y$ and $c = 4y + 104$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 + 26y + 25 \\ge 0$",
                  "reason": "Square of a binomial: $(-21 - y)^2 = y^2 + 42y + 441$; the bracket $(4y + 104)$ is multiplied by $-4$, and like terms are collected."
                },
                {
                  "step": "$(y + 25)(y + 1) \\ge 0$",
                  "reason": "Factoring a quadratic: $25$ and $1$ have sum $26$ and product $25$."
                },
                {
                  "step": "So $y \\le -25$ or $y \\ge -1$ at every point of the graph.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: both brackets are $0$ or negative for $y \\le -25$, both are $0$ or positive for $y \\ge -1$, and between $-25$ and $-1$ their signs differ."
                },
                {
                  "step": "At $y = -25$ line 11 has the double root $x = \\dfrac{-25 - \\left(-21\\right)}{2} = -2$, and at $y = -1$ it has the double root $x = \\dfrac{-1 - \\left(-21\\right)}{2} = 10$.",
                  "reason": "Positive, zero, negative discriminant: a zero discriminant gives the double root $-\\dfrac{b}{2a}$, and here $a = 1$ and $b = -21 - y$."
                },
                {
                  "step": "The graph turns at $D(-2, -25)$, the highest point of its branch, and at $E(10, -1)$, the lowest point of its branch.",
                  "reason": "Graph of a function: the height of the graph at $x$ is the value of $y$, and by line 15 no height lies between $-25$ and $-1$, while each of $-25$ and $-1$ is the height at one $x$ alone."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 4$, passes through $A$, $B$, $C$, $D$ and $E$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-15.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 4 and the slant asymptote y = x − 17, through A(8, 0), B(0, −26) and C(13, 0), turning at D(−2, −25) and E(10, −1)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{-x^2 - 16x - 55}{x + 3}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-11, 0)$",
                  "$(-5, 0)$",
                  "$\\left(0, -\\dfrac{55}{3}\\right)$"
                ],
                "turning": [
                  "$(1, -18)$",
                  "$(-7, -2)$"
                ],
                "asymptotes": [
                  "$x = -3$",
                  "$y = -x - 13$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{-x^2 - 16x - 55}{x + 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x + 3$ is $0$ at $x = -3$, and there the top is $-\\left(-3\\right)^2 - 16 \\cdot \\left(-3\\right) - 55 = -16$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -3$ is a vertical asymptote."
                },
                {
                  "step": "$(-x^2 - 16x - 55) - (-x)(x + 3) = -13x - 55$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $-x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-x$, and $-x$ times the divisor is taken away."
                },
                {
                  "step": "$(-13x - 55) - (-13)(x + 3) = -16$",
                  "reason": "Long division of polynomials: the leading term $-13x$ divided by the leading term $x$ of the divisor gives the quotient term $-13$, and $-13$ times the divisor is taken away. What is left, $-16$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote is $y = -x - 13$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-x - 13$, and the remainder $-16$ is not $0$."
                },
                {
                  "step": "At $x = 0$ the top is $-55$ and the bottom is $3$, so the graph meets the $y$-axis at $B\\left(0, -\\dfrac{55}{3}\\right)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$-x^2 - 16x - 55 = -(x + 11)(x + 5)$",
                  "reason": "Factoring a quadratic: $11$ and $5$ have sum $16$ and product $55$, once the factor $-1$ is taken out."
                },
                {
                  "step": "The top is $0$ at $x = -11$ and at $x = -5$, so the graph meets the $x$-axis at $A(-11, 0)$ and $C(-5, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "The graph is above the $x$-axis for $x < -11$, below it for $-11 < x < -5$, above it for $-5 < x < -3$ and below it for $x > -3$.",
                  "reason": "Sign table: the brackets $x + 11$, $x + 5$ and $x + 3$ are each negative to the left of their zero and positive to the right, so for $x > -3$ all three are positive and $y$ has the sign of the top's leading coefficient $-1$; the sign of $y$ changes at each of $-11$, $-5$ and $-3$."
                },
                {
                  "step": "$y(x + 3) = -x^2 - 16x - 55$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: both sides of $y = \\dfrac{-x^2 - 16x - 55}{x + 3}$ are multiplied by $x + 3$, which is not $0$ in the domain."
                },
                {
                  "step": "$-x^2 + (-16 - y)x + (-3y - 55) = 0$",
                  "reason": "Adding the same number to both sides: $-3y - xy$ is added to both sides, and the terms are collected by powers of $x$."
                },
                {
                  "step": "$(-16 - y)^2 + 4(-3y - 55) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: line 11 is a quadratic in $x$ with $a = -1$, $b = -16 - y$ and $c = -3y - 55$, and it has a real solution exactly when its discriminant $b^2 - 4ac$ is not negative."
                },
                {
                  "step": "$y^2 + 20y + 36 \\ge 0$",
                  "reason": "Square of a binomial: $(-16 - y)^2 = y^2 + 32y + 256$; the bracket $(-3y - 55)$ is multiplied by $4$, and like terms are collected."
                },
                {
                  "step": "$(y + 18)(y + 2) \\ge 0$",
                  "reason": "Factoring a quadratic: $18$ and $2$ have sum $20$ and product $36$."
                },
                {
                  "step": "So $y \\le -18$ or $y \\ge -2$ at every point of the graph.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: both brackets are $0$ or negative for $y \\le -18$, both are $0$ or positive for $y \\ge -2$, and between $-18$ and $-2$ their signs differ."
                },
                {
                  "step": "At $y = -18$ line 11 has the double root $x = \\dfrac{-18 - \\left(-16\\right)}{-2} = 1$, and at $y = -2$ it has the double root $x = \\dfrac{-2 - \\left(-16\\right)}{-2} = -7$.",
                  "reason": "Positive, zero, negative discriminant: a zero discriminant gives the double root $-\\dfrac{b}{2a}$, and here $a = -1$ and $b = -16 - y$."
                },
                {
                  "step": "The graph turns at $D(1, -18)$, the highest point of its branch, and at $E(-7, -2)$, the lowest point of its branch.",
                  "reason": "Graph of a function: the height of the graph at $x$ is the value of $y$, and by line 15 no height lies between $-18$ and $-2$, while each of $-18$ and $-2$ is the height at one $x$ alone."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = -3$, passes through $A$, $B$, $C$, $D$ and $E$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-16.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = −3 and the slant asymptote y = −x − 13, through A(−11, 0), B(0, −55/3) and C(−5, 0), turning at D(1, −18) and E(−7, −2)."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t222-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the curve in the figure is the graph of $f(x) = \\dfrac{-2x^2 + 14x + 5}{x - 5}$. The curve is the graph of an equation of the form $y = mx + c + \\dfrac{a}{x - h}$, the dashed lines are its two asymptotes, and the marked points are $A(0, -1)$, $B(0, 4)$, $C(4, 12)$ and $D(5, 0)$.",
            "figure": {
              "file": "asymptotes-of-rational-functions-23.svg",
              "alt": "A curve in two branches, two dashed lines, and the marked points A(0, −1), B(0, 4), C(4, 12) and D(5, 0)."
            },
            "lines": [
              {
                "step": "Decide whether the curve in the figure is the graph of $f(x) = \\dfrac{-2x^2 + 14x + 5}{x - 5}$. The curve is the graph of an equation of the form $y = mx + c + \\dfrac{a}{x - h}$, the dashed lines are its two asymptotes, and the marked points are $A(0, -1)$, $B(0, 4)$, $C(4, 12)$ and $D(5, 0)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The bottom $x - 5$ is $0$ at $x = 5$, and there the top is $-2 \\cdot 5^2 + 14 \\cdot 5 + 5 = 25$.",
                "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 5$ is a vertical asymptote of the graph of $f$."
              },
              {
                "step": "$(-2x^2 + 14x + 5) - (-2x)(x - 5) = 4x + 5$",
                "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $-2x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-2x$, and $-2x$ times the divisor is taken away."
              },
              {
                "step": "$(4x + 5) - 4(x - 5) = 25$",
                "reason": "Long division of polynomials: the leading term $4x$ divided by the leading term $x$ of the divisor gives the quotient term $4$, and $4$ times the divisor is taken away. What is left, $25$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "The slant asymptote of the graph of $f$ is $y = -2x + 4$.",
                "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-2x + 4$, and the remainder $25$ is not $0$."
              },
              {
                "step": "The slanted dashed line passes through $B(0, 4)$ and $C(4, 12)$: it has the slope $\\dfrac{12 - 4}{4 - 0} = 2$ and meets the $y$-axis at $B$, so it is the line $y = 2x + 4$.",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slope is the change in $y$ over the change in $x$ from $B$ to $C$."
              },
              {
                "step": "$f(0) = \\dfrac{5}{-5} = -1$",
                "reason": "Substituting a value: $0$ is put in place of $x$."
              },
              {
                "step": "The slanted dashed line is $y = 2x + 4$, and the slant asymptote of the graph of $f$ is $y = -2x + 4$: the two lines differ, so the answer is No.",
                "reason": "Slant asymptote: the slant asymptote of the graph of $f$ is the line of line 5, $y$ equal to the quotient, and the curve's is the slanted dashed line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the curve in the figure is the graph of $f(x) = \\dfrac{x^2 + 10x + 8}{x + 2}$. The curve is the graph of an equation of the form $y = mx + c + \\dfrac{a}{x - h}$, the dashed lines are its two asymptotes, and the marked points are $A(-5, 3)$, $B(-2, 0)$, $C(0, 4)$ and $D(0, 8)$.",
              "figure": {
                "file": "asymptotes-of-rational-functions-24.svg",
                "alt": "A curve in two branches, two dashed lines, and the marked points A(−5, 3), B(−2, 0), C(0, 4) and D(0, 8)."
              },
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the curve in the figure is the graph of $f(x) = \\dfrac{x^2 + 10x + 8}{x + 2}$. The curve is the graph of an equation of the form $y = mx + c + \\dfrac{a}{x - h}$, the dashed lines are its two asymptotes, and the marked points are $A(-5, 3)$, $B(-2, 0)$, $C(0, 4)$ and $D(0, 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x + 2$ is $0$ at $x = -2$, and there the top is $\\left(-2\\right)^2 + 10 \\cdot \\left(-2\\right) + 8 = -8$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -2$ is a vertical asymptote of the graph of $f$."
                },
                {
                  "step": "$(x^2 + 10x + 8) - x(x + 2) = 8x + 8$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $x^2$ divided by the leading term $x$ of the divisor gives the quotient term $x$, and $x$ times the divisor is taken away."
                },
                {
                  "step": "$(8x + 8) - 8(x + 2) = -8$",
                  "reason": "Long division of polynomials: the leading term $8x$ divided by the leading term $x$ of the divisor gives the quotient term $8$, and $8$ times the divisor is taken away. What is left, $-8$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote of the graph of $f$ is $y = x + 8$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $x + 8$, and the remainder $-8$ is not $0$."
                },
                {
                  "step": "The slanted dashed line passes through $D(0, 8)$ and $A(-5, 3)$: it has the slope $\\dfrac{3 - 8}{-5 - 0} = 1$ and meets the $y$-axis at $D$, so it is the line $y = x + 8$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slope is the change in $y$ over the change in $x$ from $D$ to $A$."
                },
                {
                  "step": "$f(0) = \\dfrac{8}{2} = 4$",
                  "reason": "Substituting a value: $0$ is put in place of $x$."
                },
                {
                  "step": "The vertical dashed line, through $B(-2, 0)$, is $x = -2$, the slanted one is $y = x + 8$, and the curve passes through $C(0, 4)$: the curve and the graph of $f$ have the same two asymptotes by lines 2 and 5 and both pass through $C$ by line 7, so they are the same graph, and the answer is Yes.",
                  "reason": "Slant asymptote: both are graphs of $y = mx + c + \\dfrac{a}{x - h}$ with the same $m$, $c$ and $h$, and the one common point gives one value of $a$."
                }
              ]
            },
            {
              "prompt": "Decide whether the curve in the figure is the graph of $f(x) = \\dfrac{3x^2 - 10x + 4}{x - 2}$. The curve is the graph of an equation of the form $y = mx + c + \\dfrac{a}{x - h}$, the dashed lines are its two asymptotes, and the marked points are $A(-6, -22)$, $B(-2, 0)$, $C(0, -4)$ and $D(0, -2)$.",
              "figure": {
                "file": "asymptotes-of-rational-functions-25.svg",
                "alt": "A curve in two branches, two dashed lines, and the marked points A(−6, −22), B(−2, 0), C(0, −4) and D(0, −2)."
              },
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the curve in the figure is the graph of $f(x) = \\dfrac{3x^2 - 10x + 4}{x - 2}$. The curve is the graph of an equation of the form $y = mx + c + \\dfrac{a}{x - h}$, the dashed lines are its two asymptotes, and the marked points are $A(-6, -22)$, $B(-2, 0)$, $C(0, -4)$ and $D(0, -2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x - 2$ is $0$ at $x = 2$, and there the top is $3 \\cdot 2^2 - 10 \\cdot 2 + 4 = -4$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 2$ is a vertical asymptote of the graph of $f$."
                },
                {
                  "step": "$(3x^2 - 10x + 4) - 3x(x - 2) = -4x + 4$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $3x^2$ divided by the leading term $x$ of the divisor gives the quotient term $3x$, and $3x$ times the divisor is taken away."
                },
                {
                  "step": "$(-4x + 4) - (-4)(x - 2) = -4$",
                  "reason": "Long division of polynomials: the leading term $-4x$ divided by the leading term $x$ of the divisor gives the quotient term $-4$, and $-4$ times the divisor is taken away. What is left, $-4$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote of the graph of $f$ is $y = 3x - 4$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $3x - 4$, and the remainder $-4$ is not $0$."
                },
                {
                  "step": "The slanted dashed line passes through $C(0, -4)$ and $A(-6, -22)$: it has the slope $\\dfrac{-22 - \\left(-4\\right)}{-6 - 0} = 3$ and meets the $y$-axis at $C$, so it is the line $y = 3x - 4$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slope is the change in $y$ over the change in $x$ from $C$ to $A$."
                },
                {
                  "step": "$f(0) = \\dfrac{4}{-2} = -2$",
                  "reason": "Substituting a value: $0$ is put in place of $x$."
                },
                {
                  "step": "The vertical dashed line, through $B(-2, 0)$, is $x = -2$, where the bottom of $f$ is $-2 - 2 = -4$, so the graph of $f$ has a point on that line and the curve has none: the answer is No.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets; the curve never meets its vertical dashed line and the graph of $f$ does, so the curve is not the graph of $f$."
                }
              ]
            },
            {
              "prompt": "Decide whether the curve in the figure is the graph of $f(x) = \\dfrac{2x^2 + 8x + 15}{x + 3}$. The curve is the graph of an equation of the form $y = mx + c + \\dfrac{a}{x - h}$, the dashed lines are its two asymptotes, and the marked points are $A(-3, 0)$, $B(0, 2)$, $C(0, 6)$ and $D(4, 10)$.",
              "figure": {
                "file": "asymptotes-of-rational-functions-26.svg",
                "alt": "A curve in two branches, two dashed lines, and the marked points A(−3, 0), B(0, 2), C(0, 6) and D(4, 10)."
              },
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the curve in the figure is the graph of $f(x) = \\dfrac{2x^2 + 8x + 15}{x + 3}$. The curve is the graph of an equation of the form $y = mx + c + \\dfrac{a}{x - h}$, the dashed lines are its two asymptotes, and the marked points are $A(-3, 0)$, $B(0, 2)$, $C(0, 6)$ and $D(4, 10)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $x + 3$ is $0$ at $x = -3$, and there the top is $2 \\cdot \\left(-3\\right)^2 + 8 \\cdot \\left(-3\\right) + 15 = 9$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -3$ is a vertical asymptote of the graph of $f$."
                },
                {
                  "step": "$(2x^2 + 8x + 15) - 2x(x + 3) = 2x + 15$",
                  "reason": "Long division of polynomials: the top is divided by the bottom. The leading term $2x^2$ divided by the leading term $x$ of the divisor gives the quotient term $2x$, and $2x$ times the divisor is taken away."
                },
                {
                  "step": "$(2x + 15) - 2(x + 3) = 9$",
                  "reason": "Long division of polynomials: the leading term $2x$ divided by the leading term $x$ of the divisor gives the quotient term $2$, and $2$ times the divisor is taken away. What is left, $9$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "The slant asymptote of the graph of $f$ is $y = 2x + 2$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $2x + 2$, and the remainder $9$ is not $0$."
                },
                {
                  "step": "The slanted dashed line passes through $B(0, 2)$ and $D(4, 10)$: it has the slope $\\dfrac{10 - 2}{4 - 0} = 2$ and meets the $y$-axis at $B$, so it is the line $y = 2x + 2$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slope is the change in $y$ over the change in $x$ from $B$ to $D$."
                },
                {
                  "step": "$f(0) = \\dfrac{15}{3} = 5$",
                  "reason": "Substituting a value: $0$ is put in place of $x$."
                },
                {
                  "step": "The height of the graph of $f$ at $x = 0$ is $5$, and the curve passes through $C(0, 6)$: that point is not on the graph of $f$, so the answer is No.",
                  "reason": "Graph of a function: the one point of the graph on the line $x = 0$ is $(0, f(0))$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t222-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{-x^2 + 8x - 21}{x - 4}$, and write that line right.",
            "given": [
              "$f(x) = \\dfrac{-x^2 + 8x - 21}{x - 4}$",
              "$(-x^2 + 8x - 21) - (-x)(x - 4) = 4x - 21$",
              "$(4x - 21) - 4(x - 4) = -5$",
              "$f(x) = -x + 4 - \\dfrac{5}{x - 4}$",
              "The slant asymptote is $y = -x - 4$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{-x^2 + 8x - 21}{x - 4}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 2, 3 and 4 are right.",
                "reason": "Division statement: lines 2 and 3 are the long division, and line 4 is the top written as the bottom times the quotient $-x + 4$, plus the remainder $-5$, divided by the bottom."
              },
              {
                "step": "Line 4 has the quotient $-x + 4$, and line 5 writes the line as $y = -x - 4$.",
                "reason": "A sign lost: the quotient of line 4 has the number $4$, and line 5 has $-4$."
              },
              {
                "step": "Line 5 written right is: The slant asymptote is $y = -x + 4$.",
                "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-x + 4$, and the remainder $-5$ is not $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{2x^2 + 3x - 11}{x - 2}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{2x^2 + 3x - 11}{x - 2}$",
                "$(2x^2 + 3x - 11) - 2x(x - 2) = 7x - 11$",
                "$(7x - 11) - 7(x - 2) = 3$",
                "$f(x) = 2x + 7 + \\dfrac{3}{x - 2}$",
                "The slant asymptote is $y = -2x + 7$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: y = 2*x+7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{2x^2 + 3x - 11}{x - 2}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 2, 3 and 4 are right.",
                  "reason": "Division statement: lines 2 and 3 are the long division, and line 4 is the top written as the bottom times the quotient $2x + 7$, plus the remainder $3$, divided by the bottom."
                },
                {
                  "step": "Line 4 has the quotient $2x + 7$, and line 5 writes the line as $y = -2x + 7$.",
                  "reason": "A sign lost: the quotient of line 4 has the term $2x$, and line 5 has $-2x$."
                },
                {
                  "step": "Line 5 written right is: The slant asymptote is $y = 2x + 7$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $2x + 7$, and the remainder $3$ is not $0$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{-2x^2 - 1}{x - 2}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{-2x^2 - 1}{x - 2}$",
                "$-2x^2 - 1 = -2x^2 + 0x - 1$",
                "$(-2x^2 + 0x - 1) - (-2x)(x - 2) = -4x - 1$",
                "$(-4x - 1) - (-4)(x - 2) = -9$",
                "$f(x) = -2x - 4 - \\dfrac{9}{x - 2}$",
                "The slant asymptote is $y = -2x + 4$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: y = -2*x-4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{-2x^2 - 1}{x - 2}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 2, 3, 4 and 5 are right.",
                  "reason": "Division statement: line 2 gives the missing power of $x$ the coefficient $0$, lines 3 and 4 are the long division, and line 5 is the top written as the bottom times the quotient $-2x - 4$, plus the remainder $-9$, divided by the bottom."
                },
                {
                  "step": "Line 5 has the quotient $-2x - 4$, and line 6 writes the line as $y = -2x + 4$.",
                  "reason": "A sign lost: the quotient of line 5 has the number $-4$, and line 6 has $4$."
                },
                {
                  "step": "Line 6 written right is: The slant asymptote is $y = -2x - 4$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $-2x - 4$, and the remainder $-9$ is not $0$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{3x^2 - 24}{x - 3}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{3x^2 - 24}{x - 3}$",
                "$3x^2 - 24 = 3x^2 + 0x - 24$",
                "$(3x^2 + 0x - 24) - 3x(x - 3) = 9x - 24$",
                "$(9x - 24) - 9(x - 3) = 3$",
                "$f(x) = 3x + 9 + \\dfrac{3}{x - 3}$",
                "The slant asymptote is $y = -3x + 9$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: y = 3*x+9",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{3x^2 - 24}{x - 3}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 2, 3, 4 and 5 are right.",
                  "reason": "Division statement: line 2 gives the missing power of $x$ the coefficient $0$, lines 3 and 4 are the long division, and line 5 is the top written as the bottom times the quotient $3x + 9$, plus the remainder $3$, divided by the bottom."
                },
                {
                  "step": "Line 5 has the quotient $3x + 9$, and line 6 writes the line as $y = -3x + 9$.",
                  "reason": "A sign lost: the quotient of line 5 has the term $3x$, and line 6 has $-3x$."
                },
                {
                  "step": "Line 6 written right is: The slant asymptote is $y = 3x + 9$.",
                  "reason": "Slant asymptote: the top has degree 2 and the bottom degree 1, the quotient is $3x + 9$, and the remainder $3$ is not $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{x^2 - 2x - 32}{x + 5}$, and write that line right.",
            "given": [
              "$f(x) = \\dfrac{x^2 - 2x - 32}{x + 5}$",
              "$(x^2 - 2x - 32) - x(x + 5) = -7x - 32$",
              "$(-7x - 32) - (-7)(x + 5) = 3$",
              "$f(x) = x - 7 - \\dfrac{3}{x + 5}$",
              "The slant asymptote is $y = x - 7$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{x^2 - 2x - 32}{x + 5}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 2 and 3 are right.",
                "reason": "Long division of polynomials: each line takes away its quotient term times the divisor, and works the difference out right."
              },
              {
                "step": "Line 3 leaves the remainder $3$, and line 4 writes the fraction with $-3$ on top.",
                "reason": "A sign lost: the remainder goes over the bottom with its own sign, so the fraction is $\\dfrac{3}{x + 5}$."
              },
              {
                "step": "Line 4 written right is $f(x) = x - 7 + \\dfrac{3}{x + 5}$.",
                "reason": "Division statement: the top is the bottom times the quotient $x - 7$, plus the remainder $3$, and both sides are divided by the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{2x^2 - 43}{x + 5}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{2x^2 - 43}{x + 5}$",
                "$2x^2 - 43 = 2x^2 + 0x - 43$",
                "$(2x^2 + 0x - 43) - 2x(x + 5) = -10x - 43$",
                "$(-10x - 43) - (-10)(x + 5) = 7$",
                "$f(x) = 2x + 10 + \\dfrac{7}{x + 5}$",
                "The slant asymptote is $y = 2x + 10$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: f(x) = 2*x-10+7/(x+5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{2x^2 - 43}{x + 5}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 2, 3 and 4 are right.",
                  "reason": "Long division of polynomials: line 2 gives the missing power of $x$ the coefficient $0$, which keeps its column, and lines 3 and 4 each take away their quotient term times the divisor, and work the difference out right."
                },
                {
                  "step": "Lines 3 and 4 have the quotient terms $2x$ and $-10$, and line 5 writes the quotient as $2x + 10$.",
                  "reason": "A sign lost: the quotient is the sum of the quotient terms, each with its own sign, so it is $2x - 10$."
                },
                {
                  "step": "Line 5 written right is $f(x) = 2x - 10 + \\dfrac{7}{x + 5}$.",
                  "reason": "Division statement: the top is the bottom times the quotient $2x - 10$, plus the remainder $7$, and both sides are divided by the bottom."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{-3x^2 - 10x + 4}{x + 4}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{-3x^2 - 10x + 4}{x + 4}$",
                "$(-3x^2 - 10x + 4) - (-3x)(x + 4) = 2x + 4$",
                "$(2x + 4) - 2(x + 4) = -4$",
                "$f(x) = -3x + 2 + \\dfrac{4}{x + 4}$",
                "The slant asymptote is $y = -3x + 2$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: f(x) = -3*x+2-4/(x+4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{-3x^2 - 10x + 4}{x + 4}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 2 and 3 are right.",
                  "reason": "Long division of polynomials: each line takes away its quotient term times the divisor, and works the difference out right."
                },
                {
                  "step": "Line 3 leaves the remainder $-4$, and line 4 writes the fraction with $4$ on top.",
                  "reason": "A sign lost: the remainder goes over the bottom with its own sign, so the fraction is $-\\dfrac{4}{x + 4}$."
                },
                {
                  "step": "Line 4 written right is $f(x) = -3x + 2 - \\dfrac{4}{x + 4}$.",
                  "reason": "Division statement: the top is the bottom times the quotient $-3x + 2$, plus the remainder $-4$, and both sides are divided by the bottom."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{-2x^2 + 10x - 14}{x - 1}$, and write that line right.",
              "given": [
                "$f(x) = \\dfrac{-2x^2 + 10x - 14}{x - 1}$",
                "$(-2x^2 + 10x - 14) - (-2x)(x - 1) = 8x - 14$",
                "$(8x - 14) - 8(x - 1) = -6$",
                "$f(x) = -2x - 8 - \\dfrac{6}{x - 1}$",
                "The slant asymptote is $y = -2x - 8$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: f(x) = -2*x+8-6/(x-1)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the slant asymptote of the graph of $f(x) = \\dfrac{-2x^2 + 10x - 14}{x - 1}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 2 and 3 are right.",
                  "reason": "Long division of polynomials: each line takes away its quotient term times the divisor, and works the difference out right."
                },
                {
                  "step": "Lines 2 and 3 have the quotient terms $-2x$ and $8$, and line 4 writes the quotient as $-2x - 8$.",
                  "reason": "A sign lost: the quotient is the sum of the quotient terms, each with its own sign, so it is $-2x + 8$."
                },
                {
                  "step": "Line 4 written right is $f(x) = -2x + 8 - \\dfrac{6}{x - 1}$.",
                  "reason": "Division statement: the top is the bottom times the quotient $-2x + 8$, plus the remainder $-6$, and both sides are divided by the bottom."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t222-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = 2x + 4 - \\dfrac{30}{x + 4}$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = 2x + 4 - \\dfrac{30}{x + 4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Written as one fraction, $y = \\dfrac{(2x + 4)(x + 4) - 30}{x + 4}$; the bottom is $0$ at $x = -4$, and there the top is $-30$.",
                "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -4$ is a vertical asymptote."
              },
              {
                "step": "The slant asymptote is $y = 2x + 4$.",
                "reason": "Slant asymptote: the top $(2x + 4)(x + 4) - 30$ divided by $x + 4$ has the quotient $2x + 4$ and the remainder $-30$, which is not $0$."
              },
              {
                "step": "On each side of $x = -4$ a greater $x$ gives a greater $2x + 4$ and a greater $-\\dfrac{30}{x + 4}$, so the graph rises all the way along each branch and has no turning point.",
                "reason": "Monotonically increasing: a greater input gives a greater output on each branch. Multiplying by a positive number keeps the order, so a greater $x$ gives a greater $2x + 4$; reciprocals of numbers of the same sign reverse the order, and on one side of $x = -4$ the numbers $x + 4$ have one sign, so a greater $x$ gives a smaller $\\dfrac{30}{x + 4}$, and multiplying by a negative number reverses the sign, so it gives a greater $-\\dfrac{30}{x + 4}$; adding two inequalities, the sum of the two parts is greater too."
              },
              {
                "step": "At $x = 0$ the height is $4 - \\dfrac{15}{2} = -\\dfrac{7}{2}$, so the graph meets the $y$-axis at $B\\left(0, -\\dfrac{7}{2}\\right)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$(2x + 4)(x + 4) - 30 = 0$",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
              },
              {
                "step": "$2x^2 + 12x - 14 = 0$",
                "reason": "Multiplying out and collecting like terms: each term of one bracket times each term of the other, and the number is added."
              },
              {
                "step": "$2(x + 7)(x - 1) = 0$",
                "reason": "Factoring a quadratic: $7$ and $-1$ have sum $6$ and product $-7$, once the common factor $2$ is taken out."
              },
              {
                "step": "So $x = -7$ or $x = 1$, and the graph meets the $x$-axis at $A(-7, 0)$ and $C(1, 0)$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "The curve has two branches, one on each side of $x = -4$, passes through $A$, $B$ and $C$, and comes closer and closer to both asymptotes.",
                "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                "figure": {
                  "file": "asymptotes-of-rational-functions-41.svg",
                  "alt": "A curve in two branches with the vertical asymptote x = −4 and the slant asymptote y = 2x + 4, through A(−7, 0), B(0, −7/2) and C(1, 0)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = -x - 3 + \\dfrac{4}{x + 3}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-5, 0)$",
                  "$(-1, 0)$",
                  "$\\left(0, -\\dfrac{5}{3}\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -3$",
                  "$y = -x - 3$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -x - 3 + \\dfrac{4}{x + 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Written as one fraction, $y = \\dfrac{(-x - 3)(x + 3) + 4}{x + 3}$; the bottom is $0$ at $x = -3$, and there the top is $4$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = -3$ is a vertical asymptote."
                },
                {
                  "step": "The slant asymptote is $y = -x - 3$.",
                  "reason": "Slant asymptote: the top $(-x - 3)(x + 3) + 4$ divided by $x + 3$ has the quotient $-x - 3$ and the remainder $4$, which is not $0$."
                },
                {
                  "step": "On each side of $x = -3$ a greater $x$ gives a smaller $-x - 3$ and a smaller $\\dfrac{4}{x + 3}$, so the graph falls all the way along each branch and has no turning point.",
                  "reason": "Monotonically decreasing: a greater input gives a smaller output on each branch. Multiplying by a negative number reverses the sign, so a greater $x$ gives a smaller $-x - 3$; reciprocals of numbers of the same sign reverse the order, and on one side of $x = -3$ the numbers $x + 3$ have one sign, so a greater $x$ gives a smaller $\\dfrac{4}{x + 3}$; adding two inequalities, the sum of the two parts is smaller too."
                },
                {
                  "step": "At $x = 0$ the height is $-3 + \\dfrac{4}{3} = -\\dfrac{5}{3}$, so the graph meets the $y$-axis at $B\\left(0, -\\dfrac{5}{3}\\right)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$(-x - 3)(x + 3) + 4 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "$-x^2 - 6x - 5 = 0$",
                  "reason": "Multiplying out and collecting like terms: each term of one bracket times each term of the other, and the number is added."
                },
                {
                  "step": "$-(x + 5)(x + 1) = 0$",
                  "reason": "Factoring a quadratic: $5$ and $1$ have sum $6$ and product $5$, once the factor $-1$ is taken out."
                },
                {
                  "step": "So $x = -5$ or $x = -1$, and the graph meets the $x$-axis at $A(-5, 0)$ and $C(-1, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = -3$, passes through $A$, $B$ and $C$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-42.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = −3 and the slant asymptote y = −x − 3, through A(−5, 0), B(0, −5/3) and C(−1, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 2x + 14 - \\dfrac{20}{x - 2}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-8, 0)$",
                  "$(3, 0)$",
                  "$(0, 24)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 2$",
                  "$y = 2x + 14$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 2x + 14 - \\dfrac{20}{x - 2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Written as one fraction, $y = \\dfrac{(2x + 14)(x - 2) - 20}{x - 2}$; the bottom is $0$ at $x = 2$, and there the top is $-20$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 2$ is a vertical asymptote."
                },
                {
                  "step": "The slant asymptote is $y = 2x + 14$.",
                  "reason": "Slant asymptote: the top $(2x + 14)(x - 2) - 20$ divided by $x - 2$ has the quotient $2x + 14$ and the remainder $-20$, which is not $0$."
                },
                {
                  "step": "On each side of $x = 2$ a greater $x$ gives a greater $2x + 14$ and a greater $-\\dfrac{20}{x - 2}$, so the graph rises all the way along each branch and has no turning point.",
                  "reason": "Monotonically increasing: a greater input gives a greater output on each branch. Multiplying by a positive number keeps the order, so a greater $x$ gives a greater $2x + 14$; reciprocals of numbers of the same sign reverse the order, and on one side of $x = 2$ the numbers $x - 2$ have one sign, so a greater $x$ gives a smaller $\\dfrac{20}{x - 2}$, and multiplying by a negative number reverses the sign, so it gives a greater $-\\dfrac{20}{x - 2}$; adding two inequalities, the sum of the two parts is greater too."
                },
                {
                  "step": "At $x = 0$ the height is $14 + 10 = 24$, so the graph meets the $y$-axis at $B(0, 24)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$(2x + 14)(x - 2) - 20 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "$2x^2 + 10x - 48 = 0$",
                  "reason": "Multiplying out and collecting like terms: each term of one bracket times each term of the other, and the number is added."
                },
                {
                  "step": "$2(x + 8)(x - 3) = 0$",
                  "reason": "Factoring a quadratic: $8$ and $-3$ have sum $5$ and product $-24$, once the common factor $2$ is taken out."
                },
                {
                  "step": "So $x = -8$ or $x = 3$, and the graph meets the $x$-axis at $A(-8, 0)$ and $C(3, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 2$, passes through $A$, $B$ and $C$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-43.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 2 and the slant asymptote y = 2x + 14, through A(−8, 0), B(0, 24) and C(3, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -2x + 12 + \\dfrac{8}{x - 3}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(2, 0)$",
                  "$(7, 0)$",
                  "$\\left(0, \\dfrac{28}{3}\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 3$",
                  "$y = -2x + 12$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -2x + 12 + \\dfrac{8}{x - 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Written as one fraction, $y = \\dfrac{(-2x + 12)(x - 3) + 8}{x - 3}$; the bottom is $0$ at $x = 3$, and there the top is $8$.",
                  "reason": "Vertical asymptote: the bottom is $0$ and the top is not, so the line $x = 3$ is a vertical asymptote."
                },
                {
                  "step": "The slant asymptote is $y = -2x + 12$.",
                  "reason": "Slant asymptote: the top $(-2x + 12)(x - 3) + 8$ divided by $x - 3$ has the quotient $-2x + 12$ and the remainder $8$, which is not $0$."
                },
                {
                  "step": "On each side of $x = 3$ a greater $x$ gives a smaller $-2x + 12$ and a smaller $\\dfrac{8}{x - 3}$, so the graph falls all the way along each branch and has no turning point.",
                  "reason": "Monotonically decreasing: a greater input gives a smaller output on each branch. Multiplying by a negative number reverses the sign, so a greater $x$ gives a smaller $-2x + 12$; reciprocals of numbers of the same sign reverse the order, and on one side of $x = 3$ the numbers $x - 3$ have one sign, so a greater $x$ gives a smaller $\\dfrac{8}{x - 3}$; adding two inequalities, the sum of the two parts is smaller too."
                },
                {
                  "step": "At $x = 0$ the height is $12 - \\dfrac{8}{3} = \\dfrac{28}{3}$, so the graph meets the $y$-axis at $B\\left(0, \\dfrac{28}{3}\\right)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$(-2x + 12)(x - 3) + 8 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, and a fraction is $0$ where its top is $0$ and its bottom is not."
                },
                {
                  "step": "$-2x^2 + 18x - 28 = 0$",
                  "reason": "Multiplying out and collecting like terms: each term of one bracket times each term of the other, and the number is added."
                },
                {
                  "step": "$-2(x - 2)(x - 7) = 0$",
                  "reason": "Factoring a quadratic: $-2$ and $-7$ have sum $-9$ and product $14$, once the common factor $-2$ is taken out."
                },
                {
                  "step": "So $x = 2$ or $x = 7$, and the graph meets the $x$-axis at $A(2, 0)$ and $C(7, 0)$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "The curve has two branches, one on each side of $x = 3$, passes through $A$, $B$ and $C$, and comes closer and closer to both asymptotes.",
                  "reason": "Asymptote: a line the graph comes closer and closer to and never meets.",
                  "figure": {
                    "file": "asymptotes-of-rational-functions-44.svg",
                    "alt": "A curve in two branches with the vertical asymptote x = 3 and the slant asymptote y = −2x + 12, through A(2, 0), B(0, 28/3) and C(7, 0)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of the curve in the figure in the form $y = mx + c + \\dfrac{a}{x - h}$. The dashed lines are its two asymptotes, and the marked points are $A(-4, -3)$, $B(-3, 0)$, $C(-1, -1)$ and $D(0, 5)$.",
            "figure": {
              "file": "asymptotes-of-rational-functions-52.svg",
              "alt": "A curve in two branches, two dashed lines, and the marked points A(−4, −3), B(−3, 0), C(−1, −1) and D(0, 5)."
            },
            "lines": [
              {
                "step": "Write the equation of the curve in the figure in the form $y = mx + c + \\dfrac{a}{x - h}$. The dashed lines are its two asymptotes, and the marked points are $A(-4, -3)$, $B(-3, 0)$, $C(-1, -1)$ and $D(0, 5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h = -3$",
                "reason": "Vertical asymptote: the bottom $x - h$ is $0$ at $x = h$, and the vertical dashed line, through $B(-3, 0)$, is the line $x = -3$."
              },
              {
                "step": "The slanted dashed line is the line $y = mx + c$.",
                "reason": "Slant asymptote: the top $(mx + c)(x - h) + a$ divided by $x - h$ has the quotient $mx + c$ and the remainder $a$, so the slant asymptote is $y = mx + c$."
              },
              {
                "step": "$m = \\dfrac{-3 - 5}{-4 - 0} = 2$",
                "reason": "Slope: the change in $y$ over the change in $x$ from $D(0, 5)$ to $A(-4, -3)$, the two marked points on the slanted dashed line."
              },
              {
                "step": "$c = 5$",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slanted line meets the $y$-axis at $D$."
              },
              {
                "step": "$-1 = 2 \\cdot \\left(-1\\right) + 5 + \\dfrac{a}{-1 - \\left(-3\\right)}$",
                "reason": "Substituting a value: $C(-1, -1)$ lies on the curve, so its coordinates satisfy the equation, with $m$, $c$ and $h$ put in."
              },
              {
                "step": "$\\dfrac{a}{2} = -4$",
                "reason": "Adding the same number to both sides: $2 \\cdot \\left(-1\\right) + 5 = 3$, and $-3$ is added to both sides; the bottom is $-1 - \\left(-3\\right) = 2$."
              },
              {
                "step": "$a = -8$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
              },
              {
                "step": "$y = 2x + 5 - \\dfrac{8}{x + 3}$",
                "reason": "Substituting a value: $m$, $c$, $a$ and $h$ are put in their places."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the curve in the figure in the form $y = mx + c + \\dfrac{a}{x - h}$. The dashed lines are its two asymptotes, and the marked points are $A(-4, 4)$, $B(0, -8)$, $C(3, 0)$ and $D(7, -26)$.",
              "figure": {
                "file": "asymptotes-of-rational-functions-53.svg",
                "alt": "A curve in two branches, two dashed lines, and the marked points A(−4, 4), B(0, −8), C(3, 0) and D(7, −26)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -3*x-8+12/(x-3)",
              "lines": [
                {
                  "step": "Write the equation of the curve in the figure in the form $y = mx + c + \\dfrac{a}{x - h}$. The dashed lines are its two asymptotes, and the marked points are $A(-4, 4)$, $B(0, -8)$, $C(3, 0)$ and $D(7, -26)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 3$",
                  "reason": "Vertical asymptote: the bottom $x - h$ is $0$ at $x = h$, and the vertical dashed line, through $C(3, 0)$, is the line $x = 3$."
                },
                {
                  "step": "The slanted dashed line is the line $y = mx + c$.",
                  "reason": "Slant asymptote: the top $(mx + c)(x - h) + a$ divided by $x - h$ has the quotient $mx + c$ and the remainder $a$, so the slant asymptote is $y = mx + c$."
                },
                {
                  "step": "$m = \\dfrac{4 - \\left(-8\\right)}{-4 - 0} = -3$",
                  "reason": "Slope: the change in $y$ over the change in $x$ from $B(0, -8)$ to $A(-4, 4)$, the two marked points on the slanted dashed line."
                },
                {
                  "step": "$c = -8$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slanted line meets the $y$-axis at $B$."
                },
                {
                  "step": "$-26 = -3 \\cdot 7 - 8 + \\dfrac{a}{7 - 3}$",
                  "reason": "Substituting a value: $D(7, -26)$ lies on the curve, so its coordinates satisfy the equation, with $m$, $c$ and $h$ put in."
                },
                {
                  "step": "$\\dfrac{a}{4} = 3$",
                  "reason": "Adding the same number to both sides: $-3 \\cdot 7 - 8 = -29$, and $29$ is added to both sides; the bottom is $7 - 3 = 4$."
                },
                {
                  "step": "$a = 12$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $4$."
                },
                {
                  "step": "$y = -3x - 8 + \\dfrac{12}{x - 3}$",
                  "reason": "Substituting a value: $m$, $c$, $a$ and $h$ are put in their places."
                }
              ]
            },
            {
              "prompt": "Write the equation of the curve in the figure in the form $y = mx + c + \\dfrac{a}{x - h}$. The dashed lines are its two asymptotes, and the marked points are $A(-7, 22)$, $B(-6, 16)$, $C(-5, 0)$ and $D(0, -2)$.",
              "figure": {
                "file": "asymptotes-of-rational-functions-54.svg",
                "alt": "A curve in two branches, two dashed lines, and the marked points A(−7, 22), B(−6, 16), C(−5, 0) and D(0, −2)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -3*x-2-6/(x+5)",
              "lines": [
                {
                  "step": "Write the equation of the curve in the figure in the form $y = mx + c + \\dfrac{a}{x - h}$. The dashed lines are its two asymptotes, and the marked points are $A(-7, 22)$, $B(-6, 16)$, $C(-5, 0)$ and $D(0, -2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -5$",
                  "reason": "Vertical asymptote: the bottom $x - h$ is $0$ at $x = h$, and the vertical dashed line, through $C(-5, 0)$, is the line $x = -5$."
                },
                {
                  "step": "The slanted dashed line is the line $y = mx + c$.",
                  "reason": "Slant asymptote: the top $(mx + c)(x - h) + a$ divided by $x - h$ has the quotient $mx + c$ and the remainder $a$, so the slant asymptote is $y = mx + c$."
                },
                {
                  "step": "$m = \\dfrac{16 - \\left(-2\\right)}{-6 - 0} = -3$",
                  "reason": "Slope: the change in $y$ over the change in $x$ from $D(0, -2)$ to $B(-6, 16)$, the two marked points on the slanted dashed line."
                },
                {
                  "step": "$c = -2$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slanted line meets the $y$-axis at $D$."
                },
                {
                  "step": "$22 = -3 \\cdot \\left(-7\\right) - 2 + \\dfrac{a}{-7 - \\left(-5\\right)}$",
                  "reason": "Substituting a value: $A(-7, 22)$ lies on the curve, so its coordinates satisfy the equation, with $m$, $c$ and $h$ put in."
                },
                {
                  "step": "$\\dfrac{a}{-2} = 3$",
                  "reason": "Adding the same number to both sides: $-3 \\cdot \\left(-7\\right) - 2 = 19$, and $-19$ is added to both sides; the bottom is $-7 - \\left(-5\\right) = -2$."
                },
                {
                  "step": "$a = -6$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-2$."
                },
                {
                  "step": "$y = -3x - 2 - \\dfrac{6}{x + 5}$",
                  "reason": "Substituting a value: $m$, $c$, $a$ and $h$ are put in their places."
                }
              ]
            },
            {
              "prompt": "Write the equation of the curve in the figure in the form $y = mx + c + \\dfrac{a}{x - h}$. The dashed lines are its two asymptotes, and the marked points are $A(-8, -24)$, $B(-4, 0)$, $C(0, 5)$ and $D(2, 11)$.",
              "figure": {
                "file": "asymptotes-of-rational-functions-55.svg",
                "alt": "A curve in two branches, two dashed lines, and the marked points A(−8, −24), B(−4, 0), C(0, 5) and D(2, 11)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*x+5+20/(x+4)",
              "lines": [
                {
                  "step": "Write the equation of the curve in the figure in the form $y = mx + c + \\dfrac{a}{x - h}$. The dashed lines are its two asymptotes, and the marked points are $A(-8, -24)$, $B(-4, 0)$, $C(0, 5)$ and $D(2, 11)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -4$",
                  "reason": "Vertical asymptote: the bottom $x - h$ is $0$ at $x = h$, and the vertical dashed line, through $B(-4, 0)$, is the line $x = -4$."
                },
                {
                  "step": "The slanted dashed line is the line $y = mx + c$.",
                  "reason": "Slant asymptote: the top $(mx + c)(x - h) + a$ divided by $x - h$ has the quotient $mx + c$ and the remainder $a$, so the slant asymptote is $y = mx + c$."
                },
                {
                  "step": "$m = \\dfrac{11 - 5}{2 - 0} = 3$",
                  "reason": "Slope: the change in $y$ over the change in $x$ from $C(0, 5)$ to $D(2, 11)$, the two marked points on the slanted dashed line."
                },
                {
                  "step": "$c = 5$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slanted line meets the $y$-axis at $C$."
                },
                {
                  "step": "$-24 = 3 \\cdot \\left(-8\\right) + 5 + \\dfrac{a}{-8 - \\left(-4\\right)}$",
                  "reason": "Substituting a value: $A(-8, -24)$ lies on the curve, so its coordinates satisfy the equation, with $m$, $c$ and $h$ put in."
                },
                {
                  "step": "$\\dfrac{a}{-4} = -5$",
                  "reason": "Adding the same number to both sides: $3 \\cdot \\left(-8\\right) + 5 = -19$, and $19$ is added to both sides; the bottom is $-8 - \\left(-4\\right) = -4$."
                },
                {
                  "step": "$a = 20$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-4$."
                },
                {
                  "step": "$y = 3x + 5 + \\dfrac{20}{x + 4}$",
                  "reason": "Substituting a value: $m$, $c$, $a$ and $h$ are put in their places."
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
      "id": "t222-p1",
      "method": "direct proof",
      "statement": "For numbers $a$, $b$, $c$ and $d$ with $c \\ne 0$ and $ad \\ne bc$, the graph of $y = \\dfrac{ax + b}{cx + d}$ is the graph of $\\left(x + \\dfrac{d}{c}\\right)\\left(y - \\dfrac{a}{c}\\right) = \\dfrac{bc - ad}{c^2}$.",
      "idea": "Dividing $ax + b$ by $cx + d$ leaves the quotient $\\dfrac{a}{c}$ and a remainder that is a number. Taking the quotient to the left and multiplying by the bracket turns the equation into a product of two brackets equal to a number, and each step can be undone.",
      "lines": [
        {
          "line": "$ax + b = \\dfrac{a}{c}(cx + d) + \\dfrac{bc - ad}{c}$",
          "reason": "Division statement: dividing $ax + b$ by $cx + d$ gives the quotient $\\dfrac{a}{c}$, since $\\dfrac{a}{c} \\cdot cx = ax$, and the remainder $b - \\dfrac{a}{c} \\cdot d = \\dfrac{bc - ad}{c}$."
        },
        {
          "line": "Let $(x, y)$ be a point of the graph of $y = \\dfrac{ax + b}{cx + d}$. Then $cx + d \\ne 0$ and $y = \\dfrac{ax + b}{cx + d}$.",
          "reason": "Graph of an equation: a point lies on it when its coordinates satisfy the equation, and the fraction has a value only where its bottom is not $0$."
        },
        {
          "line": "$y = \\dfrac{a}{c} + \\dfrac{bc - ad}{c(cx + d)}$",
          "reason": "Dividing both sides by a nonzero number: both sides of line 1 are divided by $cx + d$, and the left side becomes the fraction of line 2."
        },
        {
          "line": "$y - \\dfrac{a}{c} = \\dfrac{bc - ad}{c(cx + d)}$",
          "reason": "Adding the same number to both sides: $-\\dfrac{a}{c}$ is added to both sides."
        },
        {
          "line": "$y - \\dfrac{a}{c} = \\dfrac{bc - ad}{c^2\\left(x + \\dfrac{d}{c}\\right)}$",
          "reason": "Taking out a common factor: $cx + d = c\\left(x + \\dfrac{d}{c}\\right)$, since $c \\ne 0$."
        },
        {
          "line": "$\\left(x + \\dfrac{d}{c}\\right)\\left(y - \\dfrac{a}{c}\\right) = \\dfrac{bc - ad}{c^2}$",
          "reason": "Multiplying both sides by the same number: both sides of line 5 are multiplied by $x + \\dfrac{d}{c}$."
        },
        {
          "line": "So every point of the graph of $y = \\dfrac{ax + b}{cx + d}$ is a point of the graph of $\\left(x + \\dfrac{d}{c}\\right)\\left(y - \\dfrac{a}{c}\\right) = \\dfrac{bc - ad}{c^2}$.",
          "reason": "Graph of an equation: by line 6 the coordinates of the point satisfy the second equation."
        },
        {
          "line": "Let $(x, y)$ be a point of the graph of $\\left(x + \\dfrac{d}{c}\\right)\\left(y - \\dfrac{a}{c}\\right) = \\dfrac{bc - ad}{c^2}$. Then $x + \\dfrac{d}{c} \\ne 0$.",
          "reason": "Rectangular hyperbola: the graph of $(x - h)(y - k) = d$ with $d \\ne 0$ never meets the line $x = h$; here the right side $\\dfrac{bc - ad}{c^2}$ is not $0$, since $ad \\ne bc$."
        },
        {
          "line": "$cx + d \\ne 0$",
          "reason": "Zero-product property: $cx + d = c\\left(x + \\dfrac{d}{c}\\right)$ is a product of two numbers that are not $0$."
        },
        {
          "line": "$y - \\dfrac{a}{c} = \\dfrac{bc - ad}{c^2\\left(x + \\dfrac{d}{c}\\right)}$",
          "reason": "Dividing both sides by a nonzero number: both sides of the equation of line 8 are divided by $x + \\dfrac{d}{c}$."
        },
        {
          "line": "$y - \\dfrac{a}{c} = \\dfrac{bc - ad}{c(cx + d)}$",
          "reason": "Multiplying out: $c^2\\left(x + \\dfrac{d}{c}\\right) = c(cx + d)$."
        },
        {
          "line": "$y = \\dfrac{a}{c} + \\dfrac{bc - ad}{c(cx + d)}$",
          "reason": "Adding the same number to both sides: $\\dfrac{a}{c}$ is added to both sides."
        },
        {
          "line": "$y = \\dfrac{ax + b}{cx + d}$",
          "reason": "Dividing both sides by a nonzero number: line 1 divided by $cx + d$, which is not $0$ by line 9, shows that the right side of line 12 is this fraction."
        },
        {
          "line": "So every point of the graph of $\\left(x + \\dfrac{d}{c}\\right)\\left(y - \\dfrac{a}{c}\\right) = \\dfrac{bc - ad}{c^2}$ is a point of the graph of $y = \\dfrac{ax + b}{cx + d}$.",
          "reason": "Graph of an equation: by line 13 the coordinates of the point satisfy the first equation."
        },
        {
          "line": "So the graph of $y = \\dfrac{ax + b}{cx + d}$ is the graph of $\\left(x + \\dfrac{d}{c}\\right)\\left(y - \\dfrac{a}{c}\\right) = \\dfrac{bc - ad}{c^2}$.",
          "reason": "Graph of an equation: by lines 7 and 14 the two equations are satisfied by the same points."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t222-s1",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$, $c$ and $h$ with $a \\ne 0$ and $ah^2 + bh + c \\ne 0$, the graph of $f(x) = \\dfrac{ax^2 + bx + c}{x - h}$ does not meet the line $y = ax + b + ah$. Facts it may use: multiplying out and collecting like terms, adding the same number to both sides, dividing both sides by a nonzero number, zero-product property, the graphs of $f$ and $g$ meet where $f(x) = g(x)$.",
      "check": {
        "proof": [
          {
            "line": "$(x - h)(ax + b + ah) = ax^2 + bx - bh - ah^2$",
            "reason": "Multiplying out and collecting like terms: each term of one bracket times each term of the other, and the terms $ahx$ and $-ahx$ cancel."
          },
          {
            "line": "$ax^2 + bx + c = (x - h)(ax + b + ah) + (ah^2 + bh + c)$",
            "reason": "Adding the same number to both sides: $ah^2 + bh + c$ is added to both sides of line 1, and the two sides are exchanged."
          },
          {
            "line": "For every $x \\ne h$, $f(x) = ax + b + ah + \\dfrac{ah^2 + bh + c}{x - h}$.",
            "reason": "Dividing both sides by a nonzero number: both sides of line 2 are divided by $x - h$."
          },
          {
            "line": "For every $x \\ne h$, $f(x) - (ax + b + ah) = \\dfrac{ah^2 + bh + c}{x - h}$.",
            "reason": "Adding the same number to both sides: $-(ax + b + ah)$ is added to both sides of line 3."
          },
          {
            "line": "For every $x \\ne h$, the fraction $\\dfrac{ah^2 + bh + c}{x - h}$ is not $0$.",
            "reason": "Zero-product property: the fraction is the product of $ah^2 + bh + c$ and $\\dfrac{1}{x - h}$, and neither factor is $0$."
          },
          {
            "line": "For every $x \\ne h$, $f(x) \\ne ax + b + ah$.",
            "reason": "Adding the same number to both sides: by lines 4 and 5 the difference of the two numbers is not $0$, and equal numbers have the difference $0$."
          },
          {
            "line": "So the graph of $f$ does not meet the line $y = ax + b + ah$.",
            "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: by line 6 no $x$ in the domain of $f$ gives the two graphs the same height."
          }
        ]
      }
    }
  ]
}
