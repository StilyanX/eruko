export default {
  "number": 181,
  "title": "Infinite geometric series",
  "section": 17,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "609-616, 621-627"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the sum of the infinite geometric series $7 + \\dfrac{21}{5} + \\dfrac{63}{25} + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{35/2}",
    "solution": [
      "Find the sum of the infinite geometric series $7 + \\dfrac{21}{5} + \\dfrac{63}{25} + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
      "The common ratio is $r = \\dfrac{21}{5} \\div 7 = \\dfrac{3}{5}$.",
      "The ratio has size $|r| = \\dfrac{3}{5}$, which is less than $1$.",
      "The series converges, with sum $\\dfrac{7}{1 - \\frac{3}{5}}$.",
      "$\\dfrac{7}{1 - \\frac{3}{5}} = \\dfrac{35}{2}$",
      "The series has the one sum $\\dfrac{35}{2}$, so the set of its sums is $\\left\\{\\dfrac{35}{2}\\right\\}$."
    ]
  },
  "ideas": [
    {
      "name": "Sum of an infinite series",
      "concrete": "In $\\dfrac{8}{9} + \\dfrac{8}{81} + \\dfrac{8}{729} + \\dots$ the sums of the first one, two and three terms are $\\dfrac{8}{9}$, $\\dfrac{80}{81}$ and $\\dfrac{728}{729}$. The sum of the first $n$ terms lies $\\dfrac{1}{9^n}$ below $1$, and that distance goes to $0$ as $n$ grows, so the series has sum $1$, which is $\\dfrac{8}{9} \\div \\left(1 - \\dfrac{1}{9}\\right)$.",
      "general": "An **infinite geometric series** $a + ar + ar^2 + \\dots$ has a term for every whole number $n$ from $1$ up, the $n$th term being $ar^{n-1}$. Its **partial sum** $s_n$ is the sum of its first $n$ terms. The **sum of an infinite series** is the limit of its partial sums, the limit as arithmetic's decimals topic defines it; its distance from $s_n$ goes to $0$, meaning that for every distance above $0$ there is a whole number $m$ from $1$ up with $s_n$ closer to the limit than that distance for every $n \\ge m$; a series whose partial sums have a limit **converges**, and a series whose partial sums have no limit has no sum. For numbers $a$ and $r$ with $|r| < 1$, the infinite geometric series converges, with sum $\\dfrac{a}{1-r}$. For numbers $a$ and $r$ with $a \\neq 0$ and $|r| \\ge 1$, the infinite geometric series has no sum."
    },
    {
      "name": "Powers of a number between $-1$ and $1$ shrink to $0$",
      "concrete": "The powers of $-\\dfrac{4}{5}$ are $-\\dfrac{4}{5}$, $\\dfrac{16}{25}$, $-\\dfrac{64}{125}$, $\\dfrac{256}{625}$, and so on: each is $\\dfrac{4}{5}$ of the size of the one before, so they close in on $0$.",
      "general": "For a number $r$ with $-1 < r < 1$, the powers $r^n$ have limit $0$ as $n$ grows. The course states this fact with no proof."
    },
    {
      "name": "A limit passes through sums, products and quotients",
      "concrete": "The powers $\\left(\\dfrac{1}{3}\\right)^n$ have limit $0$, so the numbers $5 - 2\\left(\\dfrac{1}{3}\\right)^n$ have limit $5 - 2 \\cdot 0 = 5$.",
      "general": "If the numbers $s_n$ have limit $b$ and the numbers $t_n$ have limit $c$, then $s_n + t_n$ has limit $b + c$ and $s_n - t_n$ has limit $b - c$; for a fixed number $a$, $as_n$ has limit $ab$, and $\\dfrac{s_n}{a}$ has limit $\\dfrac{b}{a}$ where $a \\neq 0$. The same holds where the partial sum of $n$ terms of a series is a partial sum of one series plus a partial sum of another, the numbers of terms in both growing without bound as $n$ grows. The course states this fact with no proof, and only in these cases."
    }
  ],
  "kinds": [
    {
      "id": "t181-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the sum of the infinite geometric series $11 - \\dfrac{33}{7} + \\dfrac{99}{49} - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
            "lines": [
              {
                "step": "Find the sum of the infinite geometric series $11 - \\dfrac{33}{7} + \\dfrac{99}{49} - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = -\\dfrac{33}{7} \\div 11 = -\\dfrac{3}{7}$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{99}{49} \\div \\left(-\\dfrac{33}{7}\\right) = -\\dfrac{3}{7}$ as well."
              },
              {
                "step": "The ratio has size $|r| = \\dfrac{3}{7}$, which is less than $1$.",
                "reason": "Absolute value, from arithmetic: $\\dfrac{3}{7}$ is the distance of $-\\dfrac{3}{7}$ from $0$."
              },
              {
                "step": "The series converges, with sum $\\dfrac{11}{1 - \\left(-\\frac{3}{7}\\right)}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 11$ and $r = -\\dfrac{3}{7}$."
              },
              {
                "step": "$\\dfrac{11}{1 - \\left(-\\frac{3}{7}\\right)} = \\dfrac{77}{10}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $7$."
              },
              {
                "step": "The series has the one sum $\\dfrac{77}{10}$, so the set of its sums is $\\left\\{\\dfrac{77}{10}\\right\\}$.",
                "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite geometric series $14 + \\dfrac{56}{5} + \\dfrac{224}{25} + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{70}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $14 + \\dfrac{56}{5} + \\dfrac{224}{25} + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{56}{5} \\div 14 = \\dfrac{4}{5}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{224}{25} \\div \\left(\\dfrac{56}{5}\\right) = \\dfrac{4}{5}$ as well."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{4}{5}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{4}{5}$ is the distance of $\\dfrac{4}{5}$ from $0$."
                },
                {
                  "step": "The series converges, with sum $\\dfrac{14}{1 - \\frac{4}{5}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 14$ and $r = \\dfrac{4}{5}$."
                },
                {
                  "step": "$\\dfrac{14}{1 - \\frac{4}{5}} = 70$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $5$."
                },
                {
                  "step": "The series has the one sum $70$, so the set of its sums is $\\left\\{70\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite geometric series $-20 - \\dfrac{40}{9} - \\dfrac{80}{81} - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-180/7}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $-20 - \\dfrac{40}{9} - \\dfrac{80}{81} - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = -\\dfrac{40}{9} \\div \\left(-20\\right) = \\dfrac{2}{9}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $-\\dfrac{80}{81} \\div \\left(-\\dfrac{40}{9}\\right) = \\dfrac{2}{9}$ as well."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{2}{9}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{2}{9}$ is the distance of $\\dfrac{2}{9}$ from $0$."
                },
                {
                  "step": "The series converges, with sum $\\dfrac{-20}{1 - \\frac{2}{9}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = -20$ and $r = \\dfrac{2}{9}$."
                },
                {
                  "step": "$\\dfrac{-20}{1 - \\frac{2}{9}} = -\\dfrac{180}{7}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $9$."
                },
                {
                  "step": "The series has the one sum $-\\dfrac{180}{7}$, so the set of its sums is $\\left\\{-\\dfrac{180}{7}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite geometric series $17 - \\dfrac{85}{9} + \\dfrac{425}{81} - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{153/14}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $17 - \\dfrac{85}{9} + \\dfrac{425}{81} - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = -\\dfrac{85}{9} \\div 17 = -\\dfrac{5}{9}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{425}{81} \\div \\left(-\\dfrac{85}{9}\\right) = -\\dfrac{5}{9}$ as well."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{5}{9}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{5}{9}$ is the distance of $-\\dfrac{5}{9}$ from $0$."
                },
                {
                  "step": "The series converges, with sum $\\dfrac{17}{1 - \\left(-\\frac{5}{9}\\right)}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 17$ and $r = -\\dfrac{5}{9}$."
                },
                {
                  "step": "$\\dfrac{17}{1 - \\left(-\\frac{5}{9}\\right)} = \\dfrac{153}{14}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $9$."
                },
                {
                  "step": "The series has the one sum $\\dfrac{153}{14}$, so the set of its sums is $\\left\\{\\dfrac{153}{14}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the infinite geometric series $16 + 20 + 25 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
            "lines": [
              {
                "step": "Find the sum of the infinite geometric series $16 + 20 + 25 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{20}{16} = \\dfrac{5}{4}$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{25}{20} = \\dfrac{5}{4}$ as well."
              },
              {
                "step": "The ratio has size $|r| = \\dfrac{5}{4}$, which is at least $1$.",
                "reason": "Absolute value, from arithmetic: $\\dfrac{5}{4}$ is the distance of $\\dfrac{5}{4}$ from $0$."
              },
              {
                "step": "The series has no sum.",
                "reason": "No sum when $|r| \\ge 1$: $a = 16$ is not $0$ and $|r| = \\dfrac{5}{4}$ is at least $1$."
              },
              {
                "step": "The series has no sum, so the set of its sums is $\\{\\}$.",
                "reason": "Sum of an infinite series: line 4 gives none to list."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite geometric series $25 - 35 + 49 - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $25 - 35 + 49 - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-35}{25} = -\\dfrac{7}{5}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{49}{-35} = -\\dfrac{7}{5}$ as well."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{7}{5}$, which is at least $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{7}{5}$ is the distance of $-\\dfrac{7}{5}$ from $0$."
                },
                {
                  "step": "The series has no sum.",
                  "reason": "No sum when $|r| \\ge 1$: $a = 25$ is not $0$ and $|r| = \\dfrac{7}{5}$ is at least $1$."
                },
                {
                  "step": "The series has no sum, so the set of its sums is $\\{\\}$.",
                  "reason": "Sum of an infinite series: line 4 gives none to list."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite geometric series $-6 + 6 - 6 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $-6 + 6 - 6 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{6}{-6} = -1$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-6}{6} = -1$ as well."
                },
                {
                  "step": "The ratio has size $|r| = 1$, which is at least $1$.",
                  "reason": "Absolute value, from arithmetic: $1$ is the distance of $-1$ from $0$."
                },
                {
                  "step": "The series has no sum.",
                  "reason": "No sum when $|r| \\ge 1$: $a = -6$ is not $0$ and $|r| = 1$ is at least $1$."
                },
                {
                  "step": "The series has no sum, so the set of its sums is $\\{\\}$.",
                  "reason": "Sum of an infinite series: line 4 gives none to list."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite geometric series $36 + 42 + 49 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $36 + 42 + 49 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{42}{36} = \\dfrac{7}{6}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{49}{42} = \\dfrac{7}{6}$ as well."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{7}{6}$, which is at least $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{7}{6}$ is the distance of $\\dfrac{7}{6}$ from $0$."
                },
                {
                  "step": "The series has no sum.",
                  "reason": "No sum when $|r| \\ge 1$: $a = 36$ is not $0$ and $|r| = \\dfrac{7}{6}$ is at least $1$."
                },
                {
                  "step": "The series has no sum, so the set of its sums is $\\{\\}$.",
                  "reason": "Sum of an infinite series: line 4 gives none to list."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the infinite series made of every second term of the infinite geometric series $5 + 3 + \\dfrac{9}{5} + \\dots$, starting with its second term, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
            "lines": [
              {
                "step": "Find the sum of the infinite series made of every second term of the infinite geometric series $5 + 3 + \\dfrac{9}{5} + \\dots$, starting with its second term, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = 3 \\div 5 = \\dfrac{3}{5}$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{9}{5} \\div 3 = \\dfrac{3}{5}$ as well."
              },
              {
                "step": "The new series starts with the second term, $5 \\cdot \\dfrac{3}{5} = 3$.",
                "reason": "The $n$th term $ar^{n-1}$, with the definition of a power from arithmetic: $n = 2$."
              },
              {
                "step": "Its terms are the terms in places $2, 4, 6, \\dots$, each $2$ places after the one before, so it is an infinite geometric series with common ratio $r^2 = \\dfrac{9}{25}$.",
                "reason": "The $n$th term $ar^{n-1}$, with the product law: the term $ar^{n+1}$ is $ar^{n-1} \\cdot r^2$."
              },
              {
                "step": "The new ratio has size $|r^2| = \\dfrac{9}{25}$, which is less than $1$.",
                "reason": "Absolute value, from arithmetic: $\\dfrac{9}{25}$ is the distance of $\\dfrac{9}{25}$ from $0$."
              },
              {
                "step": "The new series converges, with sum $\\dfrac{3}{1 - \\frac{9}{25}}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 3$ and $r = \\dfrac{9}{25}$."
              },
              {
                "step": "$\\dfrac{3}{1 - \\frac{9}{25}} = \\dfrac{75}{16}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $25$."
              },
              {
                "step": "The series has the one sum $\\dfrac{75}{16}$, so the set of its sums is $\\left\\{\\dfrac{75}{16}\\right\\}$.",
                "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite series made of every second term of the infinite geometric series $121 - 22 + 4 - \\dots$, starting with its third term, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{484/117}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series made of every second term of the infinite geometric series $121 - 22 + 4 - \\dots$, starting with its third term, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-22}{121} = -\\dfrac{2}{11}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{4}{-22} = -\\dfrac{2}{11}$ as well."
                },
                {
                  "step": "The new series starts with the third term, $121 \\cdot \\left(-\\dfrac{2}{11}\\right)^{2} = 4$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the definition of a power from arithmetic: $n = 3$."
                },
                {
                  "step": "Its terms are the terms in places $3, 5, 7, \\dots$, each $2$ places after the one before, so it is an infinite geometric series with common ratio $r^2 = \\dfrac{4}{121}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: the term $ar^{n+1}$ is $ar^{n-1} \\cdot r^2$."
                },
                {
                  "step": "The new ratio has size $|r^2| = \\dfrac{4}{121}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{4}{121}$ is the distance of $\\dfrac{4}{121}$ from $0$."
                },
                {
                  "step": "The new series converges, with sum $\\dfrac{4}{1 - \\frac{4}{121}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 4$ and $r = \\dfrac{4}{121}$."
                },
                {
                  "step": "$\\dfrac{4}{1 - \\frac{4}{121}} = \\dfrac{484}{117}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $121$."
                },
                {
                  "step": "The series has the one sum $\\dfrac{484}{117}$, so the set of its sums is $\\left\\{\\dfrac{484}{117}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series made of every second term of the infinite geometric series $12 + 10 + \\dfrac{25}{3} + \\dots$, starting with its second term, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{360/11}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series made of every second term of the infinite geometric series $12 + 10 + \\dfrac{25}{3} + \\dots$, starting with its second term, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{10}{12} = \\dfrac{5}{6}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{25}{3} \\div 10 = \\dfrac{5}{6}$ as well."
                },
                {
                  "step": "The new series starts with the second term, $12 \\cdot \\dfrac{5}{6} = 10$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the definition of a power from arithmetic: $n = 2$."
                },
                {
                  "step": "Its terms are the terms in places $2, 4, 6, \\dots$, each $2$ places after the one before, so it is an infinite geometric series with common ratio $r^2 = \\dfrac{25}{36}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: the term $ar^{n+1}$ is $ar^{n-1} \\cdot r^2$."
                },
                {
                  "step": "The new ratio has size $|r^2| = \\dfrac{25}{36}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{25}{36}$ is the distance of $\\dfrac{25}{36}$ from $0$."
                },
                {
                  "step": "The new series converges, with sum $\\dfrac{10}{1 - \\frac{25}{36}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 10$ and $r = \\dfrac{25}{36}$."
                },
                {
                  "step": "$\\dfrac{10}{1 - \\frac{25}{36}} = \\dfrac{360}{11}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $36$."
                },
                {
                  "step": "The series has the one sum $\\dfrac{360}{11}$, so the set of its sums is $\\left\\{\\dfrac{360}{11}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series made of every third term of the infinite geometric series $25 - 20 + 16 - \\dots$, starting with its second term, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-2500/189}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series made of every third term of the infinite geometric series $25 - 20 + 16 - \\dots$, starting with its second term, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-20}{25} = -\\dfrac{4}{5}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{16}{-20} = -\\dfrac{4}{5}$ as well."
                },
                {
                  "step": "The new series starts with the second term, $25 \\cdot \\left(-\\dfrac{4}{5}\\right) = -20$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the definition of a power from arithmetic: $n = 2$."
                },
                {
                  "step": "Its terms are the terms in places $2, 5, 8, \\dots$, each $3$ places after the one before, so it is an infinite geometric series with common ratio $r^3 = -\\dfrac{64}{125}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: the term $ar^{n+2}$ is $ar^{n-1} \\cdot r^3$."
                },
                {
                  "step": "The new ratio has size $|r^3| = \\dfrac{64}{125}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{64}{125}$ is the distance of $-\\dfrac{64}{125}$ from $0$."
                },
                {
                  "step": "The new series converges, with sum $\\dfrac{-20}{1 - \\left(-\\frac{64}{125}\\right)}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = -20$ and $r = -\\dfrac{64}{125}$."
                },
                {
                  "step": "$\\dfrac{-20}{1 - \\left(-\\frac{64}{125}\\right)} = -\\dfrac{2500}{189}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $125$."
                },
                {
                  "step": "The series has the one sum $-\\dfrac{2500}{189}$, so the set of its sums is $\\left\\{-\\dfrac{2500}{189}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the infinite geometric series $9 + 3\\sqrt{6} + 6 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
            "lines": [
              {
                "step": "Find the sum of the infinite geometric series $9 + 3\\sqrt{6} + 6 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = 3\\sqrt{6} \\div 9 = \\dfrac{\\sqrt{6}}{3}$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $6 \\div 3\\sqrt{6} = \\dfrac{\\sqrt{6}}{3}$ as well."
              },
              {
                "step": "The ratio has size $|r| = \\dfrac{\\sqrt{6}}{3}$, which is less than $1$.",
                "reason": "Powers and roots of positive numbers keep the order: $\\left(\\dfrac{\\sqrt{6}}{3}\\right)^2 = \\dfrac{2}{3}$ is less than $1 = 1^2$."
              },
              {
                "step": "The series converges, with sum $\\dfrac{9}{1 - \\frac{\\sqrt{6}}{3}}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 9$ and $r = \\dfrac{\\sqrt{6}}{3}$."
              },
              {
                "step": "$\\dfrac{9}{1 - \\frac{\\sqrt{6}}{3}} = \\dfrac{27}{3 - \\sqrt{6}}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $3$."
              },
              {
                "step": "$\\dfrac{27}{3 - \\sqrt{6}} = \\dfrac{27(3 + \\sqrt{6})}{3}$",
                "reason": "Rationalising the denominator: the top and the bottom are multiplied by the conjugate $3 + \\sqrt{6}$, and $(3 - \\sqrt{6})(3 + \\sqrt{6}) = 9 - 6 = 3$."
              },
              {
                "step": "$\\dfrac{27(3 + \\sqrt{6})}{3} = 9(3 + \\sqrt{6})$",
                "reason": "Cancelling a common factor: $3$ divides $27$ and $3$."
              },
              {
                "step": "$9(3 + \\sqrt{6}) = 27 + 9\\sqrt{6}$",
                "reason": "The distributive law, from arithmetic."
              },
              {
                "step": "The series has the one sum $27 + 9\\sqrt{6}$, so the set of its sums is $\\left\\{27 + 9\\sqrt{6}\\right\\}$.",
                "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite geometric series $18 - 6\\sqrt{7} + 14 - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{81-27*sqrt(7)}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $18 - 6\\sqrt{7} + 14 - \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = -6\\sqrt{7} \\div 18 = -\\dfrac{\\sqrt{7}}{3}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $14 \\div \\left(-6\\sqrt{7}\\right) = -\\dfrac{\\sqrt{7}}{3}$ as well."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{\\sqrt{7}}{3}$, which is less than $1$.",
                  "reason": "Powers and roots of positive numbers keep the order: $\\left(\\dfrac{\\sqrt{7}}{3}\\right)^2 = \\dfrac{7}{9}$ is less than $1 = 1^2$."
                },
                {
                  "step": "The series converges, with sum $\\dfrac{18}{1 - \\left(-\\frac{\\sqrt{7}}{3}\\right)}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 18$ and $r = -\\dfrac{\\sqrt{7}}{3}$."
                },
                {
                  "step": "$\\dfrac{18}{1 - \\left(-\\frac{\\sqrt{7}}{3}\\right)} = \\dfrac{54}{3 + \\sqrt{7}}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $3$."
                },
                {
                  "step": "$\\dfrac{54}{3 + \\sqrt{7}} = \\dfrac{54(3 - \\sqrt{7})}{2}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by the conjugate $3 - \\sqrt{7}$, and $(3 + \\sqrt{7})(3 - \\sqrt{7}) = 9 - 7 = 2$."
                },
                {
                  "step": "$\\dfrac{54(3 - \\sqrt{7})}{2} = 27(3 - \\sqrt{7})$",
                  "reason": "Cancelling a common factor: $2$ divides $54$ and $2$."
                },
                {
                  "step": "$27(3 - \\sqrt{7}) = 81 - 27\\sqrt{7}$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "The series has the one sum $81 - 27\\sqrt{7}$, so the set of its sums is $\\left\\{81 - 27\\sqrt{7}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite geometric series $16 + 4\\sqrt{2} + 2 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{(128+32*sqrt(2))/7}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $16 + 4\\sqrt{2} + 2 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = 4\\sqrt{2} \\div 16 = \\dfrac{\\sqrt{2}}{4}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $2 \\div 4\\sqrt{2} = \\dfrac{\\sqrt{2}}{4}$ as well."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{\\sqrt{2}}{4}$, which is less than $1$.",
                  "reason": "Powers and roots of positive numbers keep the order: $\\left(\\dfrac{\\sqrt{2}}{4}\\right)^2 = \\dfrac{1}{8}$ is less than $1 = 1^2$."
                },
                {
                  "step": "The series converges, with sum $\\dfrac{16}{1 - \\frac{\\sqrt{2}}{4}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 16$ and $r = \\dfrac{\\sqrt{2}}{4}$."
                },
                {
                  "step": "$\\dfrac{16}{1 - \\frac{\\sqrt{2}}{4}} = \\dfrac{64}{4 - \\sqrt{2}}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $4$."
                },
                {
                  "step": "$\\dfrac{64}{4 - \\sqrt{2}} = \\dfrac{64(4 + \\sqrt{2})}{14}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by the conjugate $4 + \\sqrt{2}$, and $(4 - \\sqrt{2})(4 + \\sqrt{2}) = 16 - 2 = 14$."
                },
                {
                  "step": "$\\dfrac{64(4 + \\sqrt{2})}{14} = \\dfrac{32(4 + \\sqrt{2})}{7}$",
                  "reason": "Cancelling a common factor: $2$ divides $64$ and $14$."
                },
                {
                  "step": "$\\dfrac{32(4 + \\sqrt{2})}{7} = \\dfrac{128 + 32\\sqrt{2}}{7}$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "The series has the one sum $\\dfrac{128 + 32\\sqrt{2}}{7}$, so the set of its sums is $\\left\\{\\dfrac{128 + 32\\sqrt{2}}{7}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite geometric series $-16 + 4\\sqrt{6} - 6 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-(128-32*sqrt(6))/5}",
              "lines": [
                {
                  "step": "Find the sum of the infinite geometric series $-16 + 4\\sqrt{6} - 6 + \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = 4\\sqrt{6} \\div \\left(-16\\right) = -\\dfrac{\\sqrt{6}}{4}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $-6 \\div 4\\sqrt{6} = -\\dfrac{\\sqrt{6}}{4}$ as well."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{\\sqrt{6}}{4}$, which is less than $1$.",
                  "reason": "Powers and roots of positive numbers keep the order: $\\left(\\dfrac{\\sqrt{6}}{4}\\right)^2 = \\dfrac{3}{8}$ is less than $1 = 1^2$."
                },
                {
                  "step": "The series converges, with sum $\\dfrac{-16}{1 - \\left(-\\frac{\\sqrt{6}}{4}\\right)}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = -16$ and $r = -\\dfrac{\\sqrt{6}}{4}$."
                },
                {
                  "step": "$\\dfrac{-16}{1 - \\left(-\\frac{\\sqrt{6}}{4}\\right)} = \\dfrac{-64}{4 + \\sqrt{6}}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $4$."
                },
                {
                  "step": "$\\dfrac{-64}{4 + \\sqrt{6}} = \\dfrac{-64(4 - \\sqrt{6})}{10}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by the conjugate $4 - \\sqrt{6}$, and $(4 + \\sqrt{6})(4 - \\sqrt{6}) = 16 - 6 = 10$."
                },
                {
                  "step": "$\\dfrac{-64(4 - \\sqrt{6})}{10} = -\\dfrac{32(4 - \\sqrt{6})}{5}$",
                  "reason": "Cancelling a common factor: $2$ divides $64$ and $10$."
                },
                {
                  "step": "$-\\dfrac{32(4 - \\sqrt{6})}{5} = -\\dfrac{128 - 32\\sqrt{6}}{5}$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "The series has the one sum $-\\dfrac{128 - 32\\sqrt{6}}{5}$, so the set of its sums is $\\left\\{-\\dfrac{128 - 32\\sqrt{6}}{5}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the infinite series whose $n$th term is $\\dfrac{2^n + 3^n}{7^n}$, for $n = 1, 2, 3, \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
            "lines": [
              {
                "step": "Find the sum of the infinite series whose $n$th term is $\\dfrac{2^n + 3^n}{7^n}$, for $n = 1, 2, 3, \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{2^n + 3^n}{7^n} = \\dfrac{2^n}{7^n} + \\dfrac{3^n}{7^n}$",
                "reason": "Adding fractions with the same denominator, from arithmetic: two fractions with one bottom add by adding their tops."
              },
              {
                "step": "$\\dfrac{2^n}{7^n} + \\dfrac{3^n}{7^n} = \\left(\\dfrac{2}{7}\\right)^n + \\left(\\dfrac{3}{7}\\right)^n$",
                "reason": "Power of a quotient: $\\dfrac{2^n}{7^n} = \\left(\\dfrac{2}{7}\\right)^n$, and the same for the second."
              },
              {
                "step": "The terms $\\left(\\dfrac{2}{7}\\right)^n$ form the infinite geometric series with first term $\\dfrac{2}{7}$ and common ratio $\\dfrac{2}{7}$.",
                "reason": "The $n$th term $ar^{n-1}$, with the product law: $\\left(\\dfrac{2}{7}\\right)^n = \\dfrac{2}{7} \\cdot \\left(\\dfrac{2}{7}\\right)^{n-1}$."
              },
              {
                "step": "The first series converges, with sum $\\dfrac{\\frac{2}{7}}{1 - \\frac{2}{7}}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = r = \\dfrac{2}{7}$, and $|r| = \\dfrac{2}{7}$ is less than $1$."
              },
              {
                "step": "$\\dfrac{\\frac{2}{7}}{1 - \\frac{2}{7}} = \\dfrac{2}{5}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $7$."
              },
              {
                "step": "The terms $\\left(\\dfrac{3}{7}\\right)^n$ form the infinite geometric series with first term $\\dfrac{3}{7}$ and common ratio $\\dfrac{3}{7}$.",
                "reason": "The $n$th term $ar^{n-1}$, with the product law: $\\left(\\dfrac{3}{7}\\right)^n = \\dfrac{3}{7} \\cdot \\left(\\dfrac{3}{7}\\right)^{n-1}$."
              },
              {
                "step": "The second series converges, with sum $\\dfrac{\\frac{3}{7}}{1 - \\frac{3}{7}}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = r = \\dfrac{3}{7}$, and $|r| = \\dfrac{3}{7}$ is less than $1$."
              },
              {
                "step": "$\\dfrac{\\frac{3}{7}}{1 - \\frac{3}{7}} = \\dfrac{3}{4}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $7$."
              },
              {
                "step": "The series has sum $\\dfrac{2}{5} + \\dfrac{3}{4}$.",
                "reason": "A limit passes through sums, products and quotients: each partial sum of the series is the partial sum of the first series plus the partial sum of the second, so its limit is the sum of their limits."
              },
              {
                "step": "$\\dfrac{2}{5} + \\dfrac{3}{4} = \\dfrac{23}{20}$",
                "reason": "The general addition formula, from arithmetic."
              },
              {
                "step": "The series has the one sum $\\dfrac{23}{20}$, so the set of its sums is $\\left\\{\\dfrac{23}{20}\\right\\}$.",
                "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite series whose $n$th term is $\\dfrac{(-2)^n + 9^n}{13^n}$, for $n = 1, 2, 3, \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{127/60}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series whose $n$th term is $\\dfrac{(-2)^n + 9^n}{13^n}$, for $n = 1, 2, 3, \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(-2)^n + 9^n}{13^n} = \\dfrac{(-2)^n}{13^n} + \\dfrac{9^n}{13^n}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic: two fractions with one bottom add by adding their tops."
                },
                {
                  "step": "$\\dfrac{(-2)^n}{13^n} + \\dfrac{9^n}{13^n} = \\left(-\\dfrac{2}{13}\\right)^n + \\left(\\dfrac{9}{13}\\right)^n$",
                  "reason": "Power of a quotient: $\\dfrac{(-2)^n}{13^n} = \\left(-\\dfrac{2}{13}\\right)^n$, and the same for the second."
                },
                {
                  "step": "The terms $\\left(-\\dfrac{2}{13}\\right)^n$ form the infinite geometric series with first term $-\\dfrac{2}{13}$ and common ratio $-\\dfrac{2}{13}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: $\\left(-\\dfrac{2}{13}\\right)^n = -\\dfrac{2}{13} \\cdot \\left(-\\dfrac{2}{13}\\right)^{n-1}$."
                },
                {
                  "step": "The first series converges, with sum $\\dfrac{-\\frac{2}{13}}{1 - \\left(-\\frac{2}{13}\\right)}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = r = -\\dfrac{2}{13}$, and $|r| = \\dfrac{2}{13}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{-\\frac{2}{13}}{1 - \\left(-\\frac{2}{13}\\right)} = -\\dfrac{2}{15}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $13$."
                },
                {
                  "step": "The terms $\\left(\\dfrac{9}{13}\\right)^n$ form the infinite geometric series with first term $\\dfrac{9}{13}$ and common ratio $\\dfrac{9}{13}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: $\\left(\\dfrac{9}{13}\\right)^n = \\dfrac{9}{13} \\cdot \\left(\\dfrac{9}{13}\\right)^{n-1}$."
                },
                {
                  "step": "The second series converges, with sum $\\dfrac{\\frac{9}{13}}{1 - \\frac{9}{13}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = r = \\dfrac{9}{13}$, and $|r| = \\dfrac{9}{13}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{\\frac{9}{13}}{1 - \\frac{9}{13}} = \\dfrac{9}{4}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $13$."
                },
                {
                  "step": "The series has sum $-\\dfrac{2}{15} + \\dfrac{9}{4}$.",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of the series is the partial sum of the first series plus the partial sum of the second, so its limit is the sum of their limits."
                },
                {
                  "step": "$-\\dfrac{2}{15} + \\dfrac{9}{4} = \\dfrac{127}{60}$",
                  "reason": "The general addition formula, from arithmetic."
                },
                {
                  "step": "The series has the one sum $\\dfrac{127}{60}$, so the set of its sums is $\\left\\{\\dfrac{127}{60}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series whose $n$th term is $\\dfrac{5^n + 7^n}{9^n}$, for $n = 1, 2, 3, \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{19/4}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series whose $n$th term is $\\dfrac{5^n + 7^n}{9^n}$, for $n = 1, 2, 3, \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5^n + 7^n}{9^n} = \\dfrac{5^n}{9^n} + \\dfrac{7^n}{9^n}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic: two fractions with one bottom add by adding their tops."
                },
                {
                  "step": "$\\dfrac{5^n}{9^n} + \\dfrac{7^n}{9^n} = \\left(\\dfrac{5}{9}\\right)^n + \\left(\\dfrac{7}{9}\\right)^n$",
                  "reason": "Power of a quotient: $\\dfrac{5^n}{9^n} = \\left(\\dfrac{5}{9}\\right)^n$, and the same for the second."
                },
                {
                  "step": "The terms $\\left(\\dfrac{5}{9}\\right)^n$ form the infinite geometric series with first term $\\dfrac{5}{9}$ and common ratio $\\dfrac{5}{9}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: $\\left(\\dfrac{5}{9}\\right)^n = \\dfrac{5}{9} \\cdot \\left(\\dfrac{5}{9}\\right)^{n-1}$."
                },
                {
                  "step": "The first series converges, with sum $\\dfrac{\\frac{5}{9}}{1 - \\frac{5}{9}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = r = \\dfrac{5}{9}$, and $|r| = \\dfrac{5}{9}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{\\frac{5}{9}}{1 - \\frac{5}{9}} = \\dfrac{5}{4}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $9$."
                },
                {
                  "step": "The terms $\\left(\\dfrac{7}{9}\\right)^n$ form the infinite geometric series with first term $\\dfrac{7}{9}$ and common ratio $\\dfrac{7}{9}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: $\\left(\\dfrac{7}{9}\\right)^n = \\dfrac{7}{9} \\cdot \\left(\\dfrac{7}{9}\\right)^{n-1}$."
                },
                {
                  "step": "The second series converges, with sum $\\dfrac{\\frac{7}{9}}{1 - \\frac{7}{9}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = r = \\dfrac{7}{9}$, and $|r| = \\dfrac{7}{9}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{\\frac{7}{9}}{1 - \\frac{7}{9}} = \\dfrac{7}{2}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $9$."
                },
                {
                  "step": "The series has sum $\\dfrac{5}{4} + \\dfrac{7}{2}$.",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of the series is the partial sum of the first series plus the partial sum of the second, so its limit is the sum of their limits."
                },
                {
                  "step": "$\\dfrac{5}{4} + \\dfrac{7}{2} = \\dfrac{19}{4}$",
                  "reason": "The general addition formula, from arithmetic."
                },
                {
                  "step": "The series has the one sum $\\dfrac{19}{4}$, so the set of its sums is $\\left\\{\\dfrac{19}{4}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series whose $n$th term is $\\dfrac{4^n + 9^n}{11^n}$, for $n = 1, 2, 3, \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{71/14}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series whose $n$th term is $\\dfrac{4^n + 9^n}{11^n}$, for $n = 1, 2, 3, \\dots$, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4^n + 9^n}{11^n} = \\dfrac{4^n}{11^n} + \\dfrac{9^n}{11^n}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic: two fractions with one bottom add by adding their tops."
                },
                {
                  "step": "$\\dfrac{4^n}{11^n} + \\dfrac{9^n}{11^n} = \\left(\\dfrac{4}{11}\\right)^n + \\left(\\dfrac{9}{11}\\right)^n$",
                  "reason": "Power of a quotient: $\\dfrac{4^n}{11^n} = \\left(\\dfrac{4}{11}\\right)^n$, and the same for the second."
                },
                {
                  "step": "The terms $\\left(\\dfrac{4}{11}\\right)^n$ form the infinite geometric series with first term $\\dfrac{4}{11}$ and common ratio $\\dfrac{4}{11}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: $\\left(\\dfrac{4}{11}\\right)^n = \\dfrac{4}{11} \\cdot \\left(\\dfrac{4}{11}\\right)^{n-1}$."
                },
                {
                  "step": "The first series converges, with sum $\\dfrac{\\frac{4}{11}}{1 - \\frac{4}{11}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = r = \\dfrac{4}{11}$, and $|r| = \\dfrac{4}{11}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{\\frac{4}{11}}{1 - \\frac{4}{11}} = \\dfrac{4}{7}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $11$."
                },
                {
                  "step": "The terms $\\left(\\dfrac{9}{11}\\right)^n$ form the infinite geometric series with first term $\\dfrac{9}{11}$ and common ratio $\\dfrac{9}{11}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with the product law: $\\left(\\dfrac{9}{11}\\right)^n = \\dfrac{9}{11} \\cdot \\left(\\dfrac{9}{11}\\right)^{n-1}$."
                },
                {
                  "step": "The second series converges, with sum $\\dfrac{\\frac{9}{11}}{1 - \\frac{9}{11}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = r = \\dfrac{9}{11}$, and $|r| = \\dfrac{9}{11}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{\\frac{9}{11}}{1 - \\frac{9}{11}} = \\dfrac{9}{2}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $11$."
                },
                {
                  "step": "The series has sum $\\dfrac{4}{7} + \\dfrac{9}{2}$.",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of the series is the partial sum of the first series plus the partial sum of the second, so its limit is the sum of their limits."
                },
                {
                  "step": "$\\dfrac{4}{7} + \\dfrac{9}{2} = \\dfrac{71}{14}$",
                  "reason": "The general addition formula, from arithmetic."
                },
                {
                  "step": "The series has the one sum $\\dfrac{71}{14}$, so the set of its sums is $\\left\\{\\dfrac{71}{14}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the infinite series $20 + 10 + 6 + 3 + \\dfrac{9}{5} + \\dots$, in which each term is the term before it times $\\dfrac{1}{2}$ and $\\dfrac{3}{5}$ in turn, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
            "lines": [
              {
                "step": "Find the sum of the infinite series $20 + 10 + 6 + 3 + \\dfrac{9}{5} + \\dots$, in which each term is the term before it times $\\dfrac{1}{2}$ and $\\dfrac{3}{5}$ in turn, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms in odd places form an infinite geometric series with first term $20$ and common ratio $\\dfrac{1}{2} \\cdot \\dfrac{3}{5} = \\dfrac{3}{10}$.",
                "reason": "Common ratio: each term in odd places is the term two places before it times $\\dfrac{1}{2}$ and $\\dfrac{3}{5}$."
              },
              {
                "step": "That series converges, with sum $\\dfrac{20}{1 - \\frac{3}{10}}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 20$ and $r = \\dfrac{3}{10}$, and $|r| = \\dfrac{3}{10}$ is less than $1$."
              },
              {
                "step": "$\\dfrac{20}{1 - \\frac{3}{10}} = \\dfrac{200}{7}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $10$."
              },
              {
                "step": "The terms in even places form an infinite geometric series with first term $10$ and common ratio $\\dfrac{1}{2} \\cdot \\dfrac{3}{5} = \\dfrac{3}{10}$.",
                "reason": "Common ratio: each term in even places is the term two places before it times $\\dfrac{1}{2}$ and $\\dfrac{3}{5}$."
              },
              {
                "step": "That series converges, with sum $\\dfrac{10}{1 - \\frac{3}{10}}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 10$ and $r = \\dfrac{3}{10}$, and $|r| = \\dfrac{3}{10}$ is less than $1$."
              },
              {
                "step": "$\\dfrac{10}{1 - \\frac{3}{10}} = \\dfrac{100}{7}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $10$."
              },
              {
                "step": "The series has sum $\\dfrac{200}{7} + \\dfrac{100}{7}$.",
                "reason": "A limit passes through sums, products and quotients: each partial sum of the series is a partial sum of the odd-place series plus a partial sum of the even-place series, so its limit is the sum of their limits."
              },
              {
                "step": "$\\dfrac{200}{7} + \\dfrac{100}{7} = \\dfrac{300}{7}$",
                "reason": "The general addition formula, from arithmetic."
              },
              {
                "step": "The series has the one sum $\\dfrac{300}{7}$, so the set of its sums is $\\left\\{\\dfrac{300}{7}\\right\\}$.",
                "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite series $24 + 12 + 10 + 5 + \\dfrac{25}{6} + \\dots$, in which each term is the term before it times $\\dfrac{1}{2}$ and $\\dfrac{5}{6}$ in turn, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{432/7}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $24 + 12 + 10 + 5 + \\dfrac{25}{6} + \\dots$, in which each term is the term before it times $\\dfrac{1}{2}$ and $\\dfrac{5}{6}$ in turn, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in odd places form an infinite geometric series with first term $24$ and common ratio $\\dfrac{1}{2} \\cdot \\dfrac{5}{6} = \\dfrac{5}{12}$.",
                  "reason": "Common ratio: each term in odd places is the term two places before it times $\\dfrac{1}{2}$ and $\\dfrac{5}{6}$."
                },
                {
                  "step": "That series converges, with sum $\\dfrac{24}{1 - \\frac{5}{12}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 24$ and $r = \\dfrac{5}{12}$, and $|r| = \\dfrac{5}{12}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{24}{1 - \\frac{5}{12}} = \\dfrac{288}{7}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $12$."
                },
                {
                  "step": "The terms in even places form an infinite geometric series with first term $12$ and common ratio $\\dfrac{1}{2} \\cdot \\dfrac{5}{6} = \\dfrac{5}{12}$.",
                  "reason": "Common ratio: each term in even places is the term two places before it times $\\dfrac{1}{2}$ and $\\dfrac{5}{6}$."
                },
                {
                  "step": "That series converges, with sum $\\dfrac{12}{1 - \\frac{5}{12}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 12$ and $r = \\dfrac{5}{12}$, and $|r| = \\dfrac{5}{12}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{12}{1 - \\frac{5}{12}} = \\dfrac{144}{7}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $12$."
                },
                {
                  "step": "The series has sum $\\dfrac{288}{7} + \\dfrac{144}{7}$.",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of the series is a partial sum of the odd-place series plus a partial sum of the even-place series, so its limit is the sum of their limits."
                },
                {
                  "step": "$\\dfrac{288}{7} + \\dfrac{144}{7} = \\dfrac{432}{7}$",
                  "reason": "The general addition formula, from arithmetic."
                },
                {
                  "step": "The series has the one sum $\\dfrac{432}{7}$, so the set of its sums is $\\left\\{\\dfrac{432}{7}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $14 + 6 + 3 + \\dfrac{9}{7} + \\dfrac{9}{14} + \\dots$, in which each term is the term before it times $\\dfrac{3}{7}$ and $\\dfrac{1}{2}$ in turn, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{280/11}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $14 + 6 + 3 + \\dfrac{9}{7} + \\dfrac{9}{14} + \\dots$, in which each term is the term before it times $\\dfrac{3}{7}$ and $\\dfrac{1}{2}$ in turn, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in odd places form an infinite geometric series with first term $14$ and common ratio $\\dfrac{3}{7} \\cdot \\dfrac{1}{2} = \\dfrac{3}{14}$.",
                  "reason": "Common ratio: each term in odd places is the term two places before it times $\\dfrac{3}{7}$ and $\\dfrac{1}{2}$."
                },
                {
                  "step": "That series converges, with sum $\\dfrac{14}{1 - \\frac{3}{14}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 14$ and $r = \\dfrac{3}{14}$, and $|r| = \\dfrac{3}{14}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{14}{1 - \\frac{3}{14}} = \\dfrac{196}{11}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $14$."
                },
                {
                  "step": "The terms in even places form an infinite geometric series with first term $6$ and common ratio $\\dfrac{3}{7} \\cdot \\dfrac{1}{2} = \\dfrac{3}{14}$.",
                  "reason": "Common ratio: each term in even places is the term two places before it times $\\dfrac{3}{7}$ and $\\dfrac{1}{2}$."
                },
                {
                  "step": "That series converges, with sum $\\dfrac{6}{1 - \\frac{3}{14}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 6$ and $r = \\dfrac{3}{14}$, and $|r| = \\dfrac{3}{14}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{6}{1 - \\frac{3}{14}} = \\dfrac{84}{11}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $14$."
                },
                {
                  "step": "The series has sum $\\dfrac{196}{11} + \\dfrac{84}{11}$.",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of the series is a partial sum of the odd-place series plus a partial sum of the even-place series, so its limit is the sum of their limits."
                },
                {
                  "step": "$\\dfrac{196}{11} + \\dfrac{84}{11} = \\dfrac{280}{11}$",
                  "reason": "The general addition formula, from arithmetic."
                },
                {
                  "step": "The series has the one sum $\\dfrac{280}{11}$, so the set of its sums is $\\left\\{\\dfrac{280}{11}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $36 + 12 + 3 + 1 + \\dfrac{1}{4} + \\dots$, in which each term is the term before it times $\\dfrac{1}{3}$ and $\\dfrac{1}{4}$ in turn, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{576/11}",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $36 + 12 + 3 + 1 + \\dfrac{1}{4} + \\dots$, in which each term is the term before it times $\\dfrac{1}{3}$ and $\\dfrac{1}{4}$ in turn, written as a set: the one sum in braces, or $\\{\\}$ if the series has none.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in odd places form an infinite geometric series with first term $36$ and common ratio $\\dfrac{1}{3} \\cdot \\dfrac{1}{4} = \\dfrac{1}{12}$.",
                  "reason": "Common ratio: each term in odd places is the term two places before it times $\\dfrac{1}{3}$ and $\\dfrac{1}{4}$."
                },
                {
                  "step": "That series converges, with sum $\\dfrac{36}{1 - \\frac{1}{12}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 36$ and $r = \\dfrac{1}{12}$, and $|r| = \\dfrac{1}{12}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{36}{1 - \\frac{1}{12}} = \\dfrac{432}{11}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $12$."
                },
                {
                  "step": "The terms in even places form an infinite geometric series with first term $12$ and common ratio $\\dfrac{1}{3} \\cdot \\dfrac{1}{4} = \\dfrac{1}{12}$.",
                  "reason": "Common ratio: each term in even places is the term two places before it times $\\dfrac{1}{3}$ and $\\dfrac{1}{4}$."
                },
                {
                  "step": "That series converges, with sum $\\dfrac{12}{1 - \\frac{1}{12}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 12$ and $r = \\dfrac{1}{12}$, and $|r| = \\dfrac{1}{12}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{12}{1 - \\frac{1}{12}} = \\dfrac{144}{11}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $12$."
                },
                {
                  "step": "The series has sum $\\dfrac{432}{11} + \\dfrac{144}{11}$.",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of the series is a partial sum of the odd-place series plus a partial sum of the even-place series, so its limit is the sum of their limits."
                },
                {
                  "step": "$\\dfrac{432}{11} + \\dfrac{144}{11} = \\dfrac{576}{11}$",
                  "reason": "The general addition formula, from arithmetic."
                },
                {
                  "step": "The series has the one sum $\\dfrac{576}{11}$, so the set of its sums is $\\left\\{\\dfrac{576}{11}\\right\\}$.",
                  "reason": "The uniqueness of the limit of a sequence, from arithmetic: the partial sums have only one limit."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t181-k2",
      "forms": [
        {
          "example": {
            "problem": "Find a number $x$ for which $7 + 7x + 7x^2 + \\dots = 13$.",
            "lines": [
              {
                "step": "Find a number $x$ for which $7 + 7x + 7x^2 + \\dots = 13$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The left side is the infinite geometric series with first term $7$ and common ratio $x$.",
                "reason": "Common ratio: each term is the term before it times $x$."
              },
              {
                "step": "With $|x| < 1$ the left side converges, with sum $\\dfrac{7}{1 - x}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 7$ and $r = x$."
              },
              {
                "step": "$\\dfrac{7}{1 - x} = 13$",
                "reason": "Substituting a value: the left side equals $13$."
              },
              {
                "step": "$7 = 13(1 - x)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 - x$, which is not $0$ as $|x| < 1$."
              },
              {
                "step": "$7 = 13 - 13x$",
                "reason": "The distributive law, from arithmetic."
              },
              {
                "step": "$13x = 6$",
                "reason": "Adding the same number to both sides: $13x - 7$ is added to both sides."
              },
              {
                "step": "$x = \\dfrac{6}{13}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
              },
              {
                "step": "The size of $x = \\dfrac{6}{13}$ is less than $1$, so this $x$ gives a series that converges, with sum $13$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$: the condition of line 3 holds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ for which $6 + 6x + 6x^2 + \\dots = 11$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5/11",
              "lines": [
                {
                  "step": "Find a number $x$ for which $6 + 6x + 6x^2 + \\dots = 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is the infinite geometric series with first term $6$ and common ratio $x$.",
                  "reason": "Common ratio: each term is the term before it times $x$."
                },
                {
                  "step": "With $|x| < 1$ the left side converges, with sum $\\dfrac{6}{1 - x}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 6$ and $r = x$."
                },
                {
                  "step": "$\\dfrac{6}{1 - x} = 11$",
                  "reason": "Substituting a value: the left side equals $11$."
                },
                {
                  "step": "$6 = 11(1 - x)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 - x$, which is not $0$ as $|x| < 1$."
                },
                {
                  "step": "$6 = 11 - 11x$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "$11x = 5$",
                  "reason": "Adding the same number to both sides: $11x - 6$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{5}{11}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$."
                },
                {
                  "step": "The size of $x = \\dfrac{5}{11}$ is less than $1$, so this $x$ gives a series that converges, with sum $11$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$: the condition of line 3 holds."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ for which $11 - 11x + 11x^2 - \\dots = 7$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 4/7",
              "lines": [
                {
                  "step": "Find a number $x$ for which $11 - 11x + 11x^2 - \\dots = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is the infinite geometric series with first term $11$ and common ratio $-x$.",
                  "reason": "Common ratio: each term is the term before it times $-x$."
                },
                {
                  "step": "With $|x| < 1$ the left side converges, with sum $\\dfrac{11}{1 + x}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 11$ and $r = -x$, as $|-x| = |x|$."
                },
                {
                  "step": "$\\dfrac{11}{1 + x} = 7$",
                  "reason": "Substituting a value: the left side equals $7$."
                },
                {
                  "step": "$11 = 7(1 + x)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 + x$, which is not $0$ as $|x| < 1$."
                },
                {
                  "step": "$11 = 7 + 7x$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "$7x = 4$",
                  "reason": "Adding the same number to both sides: $-7$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{4}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "The size of $x = \\dfrac{4}{7}$ is less than $1$, so this $x$ gives a series that converges, with sum $7$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$: the condition of line 3 holds."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ for which $9 + 9x + 9x^2 + \\dots = 13$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 4/13",
              "lines": [
                {
                  "step": "Find a number $x$ for which $9 + 9x + 9x^2 + \\dots = 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is the infinite geometric series with first term $9$ and common ratio $x$.",
                  "reason": "Common ratio: each term is the term before it times $x$."
                },
                {
                  "step": "With $|x| < 1$ the left side converges, with sum $\\dfrac{9}{1 - x}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 9$ and $r = x$."
                },
                {
                  "step": "$\\dfrac{9}{1 - x} = 13$",
                  "reason": "Substituting a value: the left side equals $13$."
                },
                {
                  "step": "$9 = 13(1 - x)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 - x$, which is not $0$ as $|x| < 1$."
                },
                {
                  "step": "$9 = 13 - 13x$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "$13x = 4$",
                  "reason": "Adding the same number to both sides: $13x - 9$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{4}{13}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
                },
                {
                  "step": "The size of $x = \\dfrac{4}{13}$ is less than $1$, so this $x$ gives a series that converges, with sum $13$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$: the condition of line 3 holds."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first term of an infinite geometric series with common ratio $r$, $|r| < 1$, whose sum is $65$ and for which the sum of the squares of its terms is $169$.",
            "lines": [
              {
                "step": "Find the first term of an infinite geometric series with common ratio $r$, $|r| < 1$, whose sum is $65$ and for which the sum of the squares of its terms is $169$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{a}{1 - r} = 65$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a$."
              },
              {
                "step": "$a = 65(1 - r)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 - r$, which is not $0$."
              },
              {
                "step": "The squares $a^2, a^2r^2, a^2r^4, \\dots$ form an infinite geometric series with common ratio $r^2$.",
                "reason": "Power of a product, with the power law: $(ar^{n-1})^2 = a^2(r^2)^{n-1}$."
              },
              {
                "step": "$\\dfrac{a^2}{1 - r^2} = 169$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a^2$ and ratio $r^2$, as $|r^2| = |r|^2 < 1$."
              },
              {
                "step": "$\\dfrac{(65(1 - r))^2}{1 - r^2} = 169$",
                "reason": "Substituting a value: $a$ is replaced by its value from line 3."
              },
              {
                "step": "$\\dfrac{4225(1 - r)^2}{1 - r^2} = 169$",
                "reason": "Power of a product: $(65(1 - r))^2 = 4225(1 - r)^2$."
              },
              {
                "step": "$\\dfrac{4225(1 - r)^2}{(1 - r)(1 + r)} = 169$",
                "reason": "Difference of squares: $1 - r^2 = (1 - r)(1 + r)$."
              },
              {
                "step": "$\\dfrac{4225(1 - r)}{1 + r} = 169$",
                "reason": "Cancelling a common factor: $1 - r$, which is not $0$."
              },
              {
                "step": "$4225(1 - r) = 169(1 + r)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 + r$, which is not $0$."
              },
              {
                "step": "$4225 - 4225r = 169 + 169r$",
                "reason": "The distributive law, from arithmetic."
              },
              {
                "step": "$4056 = 4394r$",
                "reason": "Adding the same number to both sides: $4225r - 169$ is added to both sides, and like terms are collected."
              },
              {
                "step": "$r = \\dfrac{12}{13}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4394$, and $\\dfrac{4056}{4394} = \\dfrac{12}{13}$."
              },
              {
                "step": "$a = 65\\left(1 - \\frac{12}{13}\\right) = 5$",
                "reason": "Substituting a value: $r = \\dfrac{12}{13}$ is put into line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first term of an infinite geometric series with common ratio $r$, $|r| < 1$, whose sum is $68$ and for which the sum of the squares of its terms is $289$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the first term of an infinite geometric series with common ratio $r$, $|r| < 1$, whose sum is $68$ and for which the sum of the squares of its terms is $289$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{a}{1 - r} = 68$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a$."
                },
                {
                  "step": "$a = 68(1 - r)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 - r$, which is not $0$."
                },
                {
                  "step": "The squares $a^2, a^2r^2, a^2r^4, \\dots$ form an infinite geometric series with common ratio $r^2$.",
                  "reason": "Power of a product, with the power law: $(ar^{n-1})^2 = a^2(r^2)^{n-1}$."
                },
                {
                  "step": "$\\dfrac{a^2}{1 - r^2} = 289$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a^2$ and ratio $r^2$, as $|r^2| = |r|^2 < 1$."
                },
                {
                  "step": "$\\dfrac{(68(1 - r))^2}{1 - r^2} = 289$",
                  "reason": "Substituting a value: $a$ is replaced by its value from line 3."
                },
                {
                  "step": "$\\dfrac{4624(1 - r)^2}{1 - r^2} = 289$",
                  "reason": "Power of a product: $(68(1 - r))^2 = 4624(1 - r)^2$."
                },
                {
                  "step": "$\\dfrac{4624(1 - r)^2}{(1 - r)(1 + r)} = 289$",
                  "reason": "Difference of squares: $1 - r^2 = (1 - r)(1 + r)$."
                },
                {
                  "step": "$\\dfrac{4624(1 - r)}{1 + r} = 289$",
                  "reason": "Cancelling a common factor: $1 - r$, which is not $0$."
                },
                {
                  "step": "$4624(1 - r) = 289(1 + r)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 + r$, which is not $0$."
                },
                {
                  "step": "$4624 - 4624r = 289 + 289r$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "$4335 = 4913r$",
                  "reason": "Adding the same number to both sides: $4624r - 289$ is added to both sides, and like terms are collected."
                },
                {
                  "step": "$r = \\dfrac{15}{17}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4913$, and $\\dfrac{4335}{4913} = \\dfrac{15}{17}$."
                },
                {
                  "step": "$a = 68\\left(1 - \\frac{15}{17}\\right) = 8$",
                  "reason": "Substituting a value: $r = \\dfrac{15}{17}$ is put into line 3."
                }
              ]
            },
            {
              "prompt": "Find the first term of an infinite geometric series with common ratio $r$, $|r| < 1$, whose sum is $5$ and for which the sum of the squares of its terms is $225$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the first term of an infinite geometric series with common ratio $r$, $|r| < 1$, whose sum is $5$ and for which the sum of the squares of its terms is $225$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{a}{1 - r} = 5$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a$."
                },
                {
                  "step": "$a = 5(1 - r)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 - r$, which is not $0$."
                },
                {
                  "step": "The squares $a^2, a^2r^2, a^2r^4, \\dots$ form an infinite geometric series with common ratio $r^2$.",
                  "reason": "Power of a product, with the power law: $(ar^{n-1})^2 = a^2(r^2)^{n-1}$."
                },
                {
                  "step": "$\\dfrac{a^2}{1 - r^2} = 225$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a^2$ and ratio $r^2$, as $|r^2| = |r|^2 < 1$."
                },
                {
                  "step": "$\\dfrac{(5(1 - r))^2}{1 - r^2} = 225$",
                  "reason": "Substituting a value: $a$ is replaced by its value from line 3."
                },
                {
                  "step": "$\\dfrac{25(1 - r)^2}{1 - r^2} = 225$",
                  "reason": "Power of a product: $(5(1 - r))^2 = 25(1 - r)^2$."
                },
                {
                  "step": "$\\dfrac{25(1 - r)^2}{(1 - r)(1 + r)} = 225$",
                  "reason": "Difference of squares: $1 - r^2 = (1 - r)(1 + r)$."
                },
                {
                  "step": "$\\dfrac{25(1 - r)}{1 + r} = 225$",
                  "reason": "Cancelling a common factor: $1 - r$, which is not $0$."
                },
                {
                  "step": "$25(1 - r) = 225(1 + r)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 + r$, which is not $0$."
                },
                {
                  "step": "$25 - 25r = 225 + 225r$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "$-200 = 250r$",
                  "reason": "Adding the same number to both sides: $25r - 225$ is added to both sides, and like terms are collected."
                },
                {
                  "step": "$r = -\\dfrac{4}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $250$, and $\\dfrac{-200}{250} = -\\dfrac{4}{5}$."
                },
                {
                  "step": "$a = 5\\left(1 - \\left(-\\frac{4}{5}\\right)\\right) = 9$",
                  "reason": "Substituting a value: $r = -\\dfrac{4}{5}$ is put into line 3."
                }
              ]
            },
            {
              "prompt": "Find the first term of an infinite geometric series with common ratio $r$, $|r| < 1$, whose sum is $42$ and for which the sum of the squares of its terms is $294$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the first term of an infinite geometric series with common ratio $r$, $|r| < 1$, whose sum is $42$ and for which the sum of the squares of its terms is $294$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{a}{1 - r} = 42$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a$."
                },
                {
                  "step": "$a = 42(1 - r)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 - r$, which is not $0$."
                },
                {
                  "step": "The squares $a^2, a^2r^2, a^2r^4, \\dots$ form an infinite geometric series with common ratio $r^2$.",
                  "reason": "Power of a product, with the power law: $(ar^{n-1})^2 = a^2(r^2)^{n-1}$."
                },
                {
                  "step": "$\\dfrac{a^2}{1 - r^2} = 294$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a^2$ and ratio $r^2$, as $|r^2| = |r|^2 < 1$."
                },
                {
                  "step": "$\\dfrac{(42(1 - r))^2}{1 - r^2} = 294$",
                  "reason": "Substituting a value: $a$ is replaced by its value from line 3."
                },
                {
                  "step": "$\\dfrac{1764(1 - r)^2}{1 - r^2} = 294$",
                  "reason": "Power of a product: $(42(1 - r))^2 = 1764(1 - r)^2$."
                },
                {
                  "step": "$\\dfrac{1764(1 - r)^2}{(1 - r)(1 + r)} = 294$",
                  "reason": "Difference of squares: $1 - r^2 = (1 - r)(1 + r)$."
                },
                {
                  "step": "$\\dfrac{1764(1 - r)}{1 + r} = 294$",
                  "reason": "Cancelling a common factor: $1 - r$, which is not $0$."
                },
                {
                  "step": "$1764(1 - r) = 294(1 + r)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $1 + r$, which is not $0$."
                },
                {
                  "step": "$1764 - 1764r = 294 + 294r$",
                  "reason": "The distributive law, from arithmetic."
                },
                {
                  "step": "$1470 = 2058r$",
                  "reason": "Adding the same number to both sides: $1764r - 294$ is added to both sides, and like terms are collected."
                },
                {
                  "step": "$r = \\dfrac{5}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2058$, and $\\dfrac{1470}{2058} = \\dfrac{5}{7}$."
                },
                {
                  "step": "$a = 42\\left(1 - \\frac{5}{7}\\right) = 12$",
                  "reason": "Substituting a value: $r = \\dfrac{5}{7}$ is put into line 3."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first term of the infinite geometric series with common ratio $-\\dfrac{8}{9}$ and sum $18$.",
            "lines": [
              {
                "step": "Find the first term of the infinite geometric series with common ratio $-\\dfrac{8}{9}$ and sum $18$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The ratio has size $|r| = \\dfrac{8}{9}$, which is less than $1$.",
                "reason": "Absolute value, from arithmetic: $\\dfrac{8}{9}$ is the distance of $-\\dfrac{8}{9}$ from $0$."
              },
              {
                "step": "$\\dfrac{a}{1 - \\left(-\\frac{8}{9}\\right)} = 18$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a$ and $r = -\\dfrac{8}{9}$."
              },
              {
                "step": "$\\dfrac{9a}{17} = 18$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $9$."
              },
              {
                "step": "$9a = 306$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $17$."
              },
              {
                "step": "$a = 34$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first term of the infinite geometric series with common ratio $\\dfrac{3}{11}$ and sum $22$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find the first term of the infinite geometric series with common ratio $\\dfrac{3}{11}$ and sum $22$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{3}{11}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{3}{11}$ is the distance of $\\dfrac{3}{11}$ from $0$."
                },
                {
                  "step": "$\\dfrac{a}{1 - \\frac{3}{11}} = 22$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a$ and $r = \\dfrac{3}{11}$."
                },
                {
                  "step": "$\\dfrac{11a}{8} = 22$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $11$."
                },
                {
                  "step": "$11a = 176$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $8$."
                },
                {
                  "step": "$a = 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$."
                }
              ]
            },
            {
              "prompt": "Find the first term of the infinite geometric series with common ratio $-\\dfrac{7}{8}$ and sum $16$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the first term of the infinite geometric series with common ratio $-\\dfrac{7}{8}$ and sum $16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{7}{8}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{7}{8}$ is the distance of $-\\dfrac{7}{8}$ from $0$."
                },
                {
                  "step": "$\\dfrac{a}{1 - \\left(-\\frac{7}{8}\\right)} = 16$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a$ and $r = -\\dfrac{7}{8}$."
                },
                {
                  "step": "$\\dfrac{8a}{15} = 16$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $8$."
                },
                {
                  "step": "$8a = 240$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $15$."
                },
                {
                  "step": "$a = 30$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                }
              ]
            },
            {
              "prompt": "Find the first term of the infinite geometric series with common ratio $-\\dfrac{6}{7}$ and sum $14$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "26",
              "lines": [
                {
                  "step": "Find the first term of the infinite geometric series with common ratio $-\\dfrac{6}{7}$ and sum $14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The ratio has size $|r| = \\dfrac{6}{7}$, which is less than $1$.",
                  "reason": "Absolute value, from arithmetic: $\\dfrac{6}{7}$ is the distance of $-\\dfrac{6}{7}$ from $0$."
                },
                {
                  "step": "$\\dfrac{a}{1 - \\left(-\\frac{6}{7}\\right)} = 14$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $a$ and $r = -\\dfrac{6}{7}$."
                },
                {
                  "step": "$\\dfrac{7a}{13} = 14$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $7$."
                },
                {
                  "step": "$7a = 182$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $13$."
                },
                {
                  "step": "$a = 26$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t181-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the total distance, in metres, that a ball travels when it is dropped from a height of $45$ metres and, after each fall, bounces back up to $\\dfrac{13}{15}$ of the height it fell from, for ever.",
            "lines": [
              {
                "step": "Find the total distance, in metres, that a ball travels when it is dropped from a height of $45$ metres and, after each fall, bounces back up to $\\dfrac{13}{15}$ of the height it fell from, for ever.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The heights it rises to are $39, \\dfrac{169}{5}, \\dots$, an infinite geometric series with first term $45 \\cdot \\dfrac{13}{15} = 39$ and common ratio $\\dfrac{13}{15}$.",
                "reason": "Common ratio: each height is the height before it times $\\dfrac{13}{15}$."
              },
              {
                "step": "After the first fall it goes up and down each of those heights, so the total distance is $45 + 2(39 + \\dfrac{169}{5} + \\dots)$.",
                "reason": "Writing a sentence as an equation: each bounce goes up a height and falls the same height back."
              },
              {
                "step": "The series of heights converges, with sum $\\dfrac{39}{1 - \\frac{13}{15}}$.",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 39$ and $r = \\dfrac{13}{15}$, as $|r| = \\dfrac{13}{15}$ is less than $1$."
              },
              {
                "step": "$\\dfrac{39}{1 - \\frac{13}{15}} = \\dfrac{585}{2}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $15$, giving $\\dfrac{585}{2}$."
              },
              {
                "step": "The total distance is $45 + 2 \\cdot \\dfrac{585}{2} = 630$ metres.",
                "reason": "Substituting a value: the sum $\\dfrac{585}{2}$ is put into line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the total distance, in metres, travelled by a ball dropped from $28$ metres above the ground if every bounce takes it back up to $\\dfrac{9}{14}$ of the height of the fall before, and it never stops bouncing.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "644/5",
              "lines": [
                {
                  "step": "Find the total distance, in metres, travelled by a ball dropped from $28$ metres above the ground if every bounce takes it back up to $\\dfrac{9}{14}$ of the height of the fall before, and it never stops bouncing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The heights it rises to are $18, \\dfrac{81}{7}, \\dots$, an infinite geometric series with first term $28 \\cdot \\dfrac{9}{14} = 18$ and common ratio $\\dfrac{9}{14}$.",
                  "reason": "Common ratio: each height is the height before it times $\\dfrac{9}{14}$."
                },
                {
                  "step": "After the first fall it goes up and down each of those heights, so the total distance is $28 + 2(18 + \\dfrac{81}{7} + \\dots)$.",
                  "reason": "Writing a sentence as an equation: each bounce goes up a height and falls the same height back."
                },
                {
                  "step": "The series of heights converges, with sum $\\dfrac{18}{1 - \\frac{9}{14}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 18$ and $r = \\dfrac{9}{14}$, as $|r| = \\dfrac{9}{14}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{18}{1 - \\frac{9}{14}} = \\dfrac{252}{5}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $14$, giving $\\dfrac{252}{5}$."
                },
                {
                  "step": "The total distance is $28 + 2 \\cdot \\dfrac{252}{5} = \\dfrac{644}{5}$ metres.",
                  "reason": "Substituting a value: the sum $\\dfrac{252}{5}$ is put into line 3."
                }
              ]
            },
            {
              "prompt": "Find the total distance, in metres, that a ball covers going up and down when it falls from a height of $30$ metres and each bounce lifts it to $\\dfrac{8}{15}$ of the height it last fell, for ever.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "690/7",
              "lines": [
                {
                  "step": "Find the total distance, in metres, that a ball covers going up and down when it falls from a height of $30$ metres and each bounce lifts it to $\\dfrac{8}{15}$ of the height it last fell, for ever.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The heights it rises to are $16, \\dfrac{128}{15}, \\dots$, an infinite geometric series with first term $30 \\cdot \\dfrac{8}{15} = 16$ and common ratio $\\dfrac{8}{15}$.",
                  "reason": "Common ratio: each height is the height before it times $\\dfrac{8}{15}$."
                },
                {
                  "step": "After the first fall it goes up and down each of those heights, so the total distance is $30 + 2(16 + \\dfrac{128}{15} + \\dots)$.",
                  "reason": "Writing a sentence as an equation: each bounce goes up a height and falls the same height back."
                },
                {
                  "step": "The series of heights converges, with sum $\\dfrac{16}{1 - \\frac{8}{15}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 16$ and $r = \\dfrac{8}{15}$, as $|r| = \\dfrac{8}{15}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{16}{1 - \\frac{8}{15}} = \\dfrac{240}{7}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $15$, giving $\\dfrac{240}{7}$."
                },
                {
                  "step": "The total distance is $30 + 2 \\cdot \\dfrac{240}{7} = \\dfrac{690}{7}$ metres.",
                  "reason": "Substituting a value: the sum $\\dfrac{240}{7}$ is put into line 3."
                }
              ]
            },
            {
              "prompt": "Find the total distance, in metres, that a ball travels when it is dropped from a height of $26$ metres and, after each fall, bounces back up to $\\dfrac{6}{13}$ of the height it fell from, for ever.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "494/7",
              "lines": [
                {
                  "step": "Find the total distance, in metres, that a ball travels when it is dropped from a height of $26$ metres and, after each fall, bounces back up to $\\dfrac{6}{13}$ of the height it fell from, for ever.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The heights it rises to are $12, \\dfrac{72}{13}, \\dots$, an infinite geometric series with first term $26 \\cdot \\dfrac{6}{13} = 12$ and common ratio $\\dfrac{6}{13}$.",
                  "reason": "Common ratio: each height is the height before it times $\\dfrac{6}{13}$."
                },
                {
                  "step": "After the first fall it goes up and down each of those heights, so the total distance is $26 + 2(12 + \\dfrac{72}{13} + \\dots)$.",
                  "reason": "Writing a sentence as an equation: each bounce goes up a height and falls the same height back."
                },
                {
                  "step": "The series of heights converges, with sum $\\dfrac{12}{1 - \\frac{6}{13}}$.",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with $a = 12$ and $r = \\dfrac{6}{13}$, as $|r| = \\dfrac{6}{13}$ is less than $1$."
                },
                {
                  "step": "$\\dfrac{12}{1 - \\frac{6}{13}} = \\dfrac{156}{7}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $13$, giving $\\dfrac{156}{7}$."
                },
                {
                  "step": "The total distance is $26 + 2 \\cdot \\dfrac{156}{7} = \\dfrac{494}{7}$ metres.",
                  "reason": "Substituting a value: the sum $\\dfrac{156}{7}$ is put into line 3."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t181-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working on the infinite geometric series $3 + 5 + \\dfrac{25}{3} + \\dots$, and write that line right.",
            "given": [
              "$r = 5 \\div 3 = \\dfrac{5}{3}$",
              "$3 + 5 + \\dfrac{25}{3} + \\dots = \\dfrac{3}{1 - \\frac{5}{3}}$",
              "$1 - \\frac{5}{3} = -\\dfrac{2}{3}$",
              "$3 \\div \\left(-\\dfrac{2}{3}\\right) = -\\dfrac{9}{2}$",
              "The sum is $-\\dfrac{9}{2}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working on the infinite geometric series $3 + 5 + \\dfrac{25}{3} + \\dots$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 sets the series equal to $\\dfrac{3}{1 - \\frac{5}{3}}$, although $|r| = \\dfrac{5}{3}$ is at least $1$.",
                "reason": "The equals sign read as \"work out the answer\": the formula $\\dfrac{a}{1-r}$ is worked out as if the series had a sum, but the fact \"Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$\" gives that sum only when $|r| < 1$."
              },
              {
                "step": "Every line other than line 2 follows by a rule that holds, from the data or from the line before it as it is written, so line 2 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 2 written right is: the series has no sum, as $|r| = \\dfrac{5}{3}$ is at least $1$.",
                "reason": "No sum when $|r| \\ge 1$: $a \\neq 0$ and $|r| \\ge 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working on the infinite geometric series $8 - 14 + \\dfrac{49}{2} - \\dots$, and write that line right.",
              "given": [
                "The first term is $a = 8$.",
                "$r = \\dfrac{-14}{8} = -\\dfrac{7}{4}$",
                "$8 - 14 + \\dfrac{49}{2} - \\dots = \\dfrac{8}{1 - \\left(-\\frac{7}{4}\\right)}$",
                "$1 - \\left(-\\frac{7}{4}\\right) = \\dfrac{11}{4}$",
                "$8 \\div \\dfrac{11}{4} = \\dfrac{32}{11}$",
                "The sum is $\\dfrac{32}{11}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: the series has no sum, as |r| = 7/4 >= 1",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the infinite geometric series $8 - 14 + \\dfrac{49}{2} - \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 sets the series equal to $\\dfrac{8}{1 - \\left(-\\frac{7}{4}\\right)}$, although $|r| = \\dfrac{7}{4}$ is at least $1$.",
                  "reason": "The equals sign read as \"work out the answer\": the formula $\\dfrac{a}{1-r}$ is worked out as if the series had a sum, but the fact \"Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$\" gives that sum only when $|r| < 1$."
                },
                {
                  "step": "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 3 written right is: the series has no sum, as $|r| = \\dfrac{7}{4}$ is at least $1$.",
                  "reason": "No sum when $|r| \\ge 1$: $a \\neq 0$ and $|r| \\ge 1$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working on the infinite geometric series $32 - 34 + \\dfrac{289}{8} - \\dots$, and write that line right.",
              "given": [
                "$r = \\dfrac{-34}{32} = -\\dfrac{17}{16}$",
                "$32 - 34 + \\dfrac{289}{8} - \\dots = \\dfrac{32}{1 - \\left(-\\frac{17}{16}\\right)}$",
                "$1 - \\left(-\\frac{17}{16}\\right) = \\dfrac{33}{16}$",
                "$32 \\div \\dfrac{33}{16} = \\dfrac{512}{33}$",
                "The sum is $\\dfrac{512}{33}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: the series has no sum, as |r| = 17/16 >= 1",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the infinite geometric series $32 - 34 + \\dfrac{289}{8} - \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 sets the series equal to $\\dfrac{32}{1 - \\left(-\\frac{17}{16}\\right)}$, although $|r| = \\dfrac{17}{16}$ is at least $1$.",
                  "reason": "The equals sign read as \"work out the answer\": the formula $\\dfrac{a}{1-r}$ is worked out as if the series had a sum, but the fact \"Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$\" gives that sum only when $|r| < 1$."
                },
                {
                  "step": "Every line other than line 2 follows by a rule that holds, from the data or from the line before it as it is written, so line 2 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 2 written right is: the series has no sum, as $|r| = \\dfrac{17}{16}$ is at least $1$.",
                  "reason": "No sum when $|r| \\ge 1$: $a \\neq 0$ and $|r| \\ge 1$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working on the infinite geometric series $-10 - 12 - \\dfrac{72}{5} - \\dots$, and write that line right.",
              "given": [
                "The first term is $a = -10$.",
                "$r = \\dfrac{-12}{-10} = \\dfrac{6}{5}$",
                "$-10 - 12 - \\dfrac{72}{5} - \\dots = \\dfrac{-10}{1 - \\frac{6}{5}}$",
                "$1 - \\frac{6}{5} = -\\dfrac{1}{5}$",
                "$-10 \\div \\left(-\\dfrac{1}{5}\\right) = 50$",
                "The sum is $50$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: the series has no sum, as |r| = 6/5 >= 1",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the infinite geometric series $-10 - 12 - \\dfrac{72}{5} - \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 sets the series equal to $\\dfrac{-10}{1 - \\frac{6}{5}}$, although $|r| = \\dfrac{6}{5}$ is at least $1$.",
                  "reason": "The equals sign read as \"work out the answer\": the formula $\\dfrac{a}{1-r}$ is worked out as if the series had a sum, but the fact \"Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$\" gives that sum only when $|r| < 1$."
                },
                {
                  "step": "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 3 written right is: the series has no sum, as $|r| = \\dfrac{6}{5}$ is at least $1$.",
                  "reason": "No sum when $|r| \\ge 1$: $a \\neq 0$ and $|r| \\ge 1$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working on the infinite geometric series $45 - 3 + \\dfrac{1}{5} - \\dots$, and write that line right.",
            "given": [
              "$r = \\dfrac{-3}{45} = -\\dfrac{1}{15}$",
              "$45 - 3 + \\dfrac{1}{5} - \\dots = \\dfrac{45}{1 - \\left(-\\frac{1}{15}\\right)}$",
              "$1 - \\left(-\\frac{1}{15}\\right) = \\dfrac{14}{15}$",
              "$45 \\div \\dfrac{14}{15} = \\dfrac{675}{14}$",
              "The sum is $\\dfrac{675}{14}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working on the infinite geometric series $45 - 3 + \\dfrac{1}{5} - \\dots$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 takes $\\dfrac{1}{15}$ from $1$, where $1 - \\left(-\\frac{1}{15}\\right)$ adds it.",
                "reason": "A sign lost: taking away a negative number adds its size."
              },
              {
                "step": "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 3 written right is $1 - \\left(-\\frac{1}{15}\\right) = \\dfrac{16}{15}$.",
                "reason": "Worked by the same rule with every sign kept, the line is true: subtraction as addition, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working on the infinite geometric series $-34 - 18 - \\dfrac{162}{17} - \\dots$, and write that line right.",
              "given": [
                "The first term is $a = -34$.",
                "$r = \\dfrac{-18}{-34} = \\dfrac{9}{17}$",
                "$-34 - 18 - \\dfrac{162}{17} - \\dots = \\dfrac{-34}{1 - \\frac{9}{17}}$",
                "$1 - \\frac{9}{17} = \\dfrac{8}{17}$",
                "$-34 \\div \\dfrac{8}{17} = \\dfrac{289}{4}$",
                "The sum is $\\dfrac{289}{4}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -34/(8/17) = -289/4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the infinite geometric series $-34 - 18 - \\dfrac{162}{17} - \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 gives the quotient $-34 \\div \\dfrac{8}{17}$ the positive value $\\dfrac{289}{4}$.",
                  "reason": "A sign lost: a negative number divided by a positive number is negative."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 5 written right is $-34 \\div \\dfrac{8}{17} = -\\dfrac{289}{4}$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: invert-and-multiply, from arithmetic, with the signs of quotients."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working on the infinite geometric series $36 - 30 + 25 - \\dots$, and write that line right.",
              "given": [
                "$r = \\dfrac{-30}{36} = \\dfrac{5}{6}$",
                "$36 - 30 + 25 - \\dots = \\dfrac{36}{1 - \\frac{5}{6}}$",
                "$1 - \\frac{5}{6} = \\dfrac{1}{6}$",
                "$36 \\div \\dfrac{1}{6} = 216$",
                "The sum is $216$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: r = -5/6",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the infinite geometric series $36 - 30 + 25 - \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 gives the ratio $\\dfrac{-30}{36}$ the positive value $\\dfrac{5}{6}$.",
                  "reason": "A sign lost: a negative number divided by a positive one is negative."
                },
                {
                  "step": "Every line other than line 1 follows by a rule that holds, from the data or from the line before it as it is written, so line 1 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 1 written right is $r = \\dfrac{-30}{36} = -\\dfrac{5}{6}$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and the quotient is negative."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working on the infinite geometric series $-81 + 18 - 4 + \\dots$, and write that line right.",
              "given": [
                "$r = \\dfrac{18}{-81} = -\\dfrac{2}{9}$",
                "$-81 + 18 - 4 + \\dots = \\dfrac{-81}{1 - \\left(-\\frac{2}{9}\\right)}$",
                "$1 - \\left(-\\frac{2}{9}\\right) = \\dfrac{11}{9}$",
                "$-81 \\div \\dfrac{11}{9} = \\dfrac{729}{11}$",
                "The sum is $\\dfrac{729}{11}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -81/(11/9) = -729/11",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the infinite geometric series $-81 + 18 - 4 + \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 gives the quotient $-81 \\div \\dfrac{11}{9}$ the positive value $\\dfrac{729}{11}$.",
                  "reason": "A sign lost: a negative number divided by a positive number is negative."
                },
                {
                  "step": "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 4 written right is $-81 \\div \\dfrac{11}{9} = -\\dfrac{729}{11}$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: invert-and-multiply, from arithmetic, with the signs of quotients."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t181-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation with $y$ alone on the left and, on the right, the digits before the repeating block as one fraction over a power of $10$, plus an infinite geometric series with one term for each copy of the block: The number $y$ is the repeating decimal $0.3\\overline{52}$.",
            "lines": [
              {
                "step": "Write this sentence as an equation with $y$ alone on the left and, on the right, the digits before the repeating block as one fraction over a power of $10$, plus an infinite geometric series with one term for each copy of the block: The number $y$ is the repeating decimal $0.3\\overline{52}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The digits before the block give $\\dfrac{3}{10}$.",
                "reason": "Complete expanded form of a finite decimal, from arithmetic: $0.3$ is $3$ over $10$."
              },
              {
                "step": "The first copy of the block, in places 2 to 3 after the point, gives $\\dfrac{52}{1000}$.",
                "reason": "Complete expanded form of a finite decimal, from arithmetic: the digits 52 end in place 3."
              },
              {
                "step": "Each later copy sits $2$ places further on, so its term is the one before it times $\\dfrac{1}{100}$: the next is $\\dfrac{52}{100{,}000}$.",
                "reason": "Common ratio: shifting a digit $2$ places to the right divides it by $100$."
              },
              {
                "step": "$y = \\dfrac{3}{10} + \\dfrac{52}{1000} + \\dfrac{52}{100{,}000} + \\dots$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and the series is left unsummed, as a Translate is never solved."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left and, on the right, the digits before the repeating block as one fraction over a power of $10$, plus an infinite geometric series with one term for each copy of the block: The number $y$ equals $0.6\\overline{8}$, whose block $8$ repeats for ever.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6/10+8/100+8/1000+...",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left and, on the right, the digits before the repeating block as one fraction over a power of $10$, plus an infinite geometric series with one term for each copy of the block: The number $y$ equals $0.6\\overline{8}$, whose block $8$ repeats for ever.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The digits before the block give $\\dfrac{6}{10}$.",
                  "reason": "Complete expanded form of a finite decimal, from arithmetic: $0.6$ is $6$ over $10$."
                },
                {
                  "step": "The first copy of the block, in place 2 after the point, gives $\\dfrac{8}{100}$.",
                  "reason": "Complete expanded form of a finite decimal, from arithmetic: the digits 8 end in place 2."
                },
                {
                  "step": "Each later copy sits $1$ place further on, so its term is the one before it times $\\dfrac{1}{10}$: the next is $\\dfrac{8}{1000}$.",
                  "reason": "Common ratio: shifting a digit $1$ place to the right divides it by $10$."
                },
                {
                  "step": "$y = \\dfrac{6}{10} + \\dfrac{8}{100} + \\dfrac{8}{1000} + \\dots$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign, and the series is left unsummed, as a Translate is never solved."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left and, on the right, the digits before the repeating block as one fraction over a power of $10$, plus an infinite geometric series with one term for each copy of the block: The number $y$ is the decimal $1.2\\overline{38}$, in which the digits $38$ repeat without end.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 12/10+38/1000+38/100000+...",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left and, on the right, the digits before the repeating block as one fraction over a power of $10$, plus an infinite geometric series with one term for each copy of the block: The number $y$ is the decimal $1.2\\overline{38}$, in which the digits $38$ repeat without end.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The digits before the block give $\\dfrac{12}{10}$.",
                  "reason": "Complete expanded form of a finite decimal, from arithmetic: $1.2$ is $12$ over $10$."
                },
                {
                  "step": "The first copy of the block, in places 2 to 3 after the point, gives $\\dfrac{38}{1000}$.",
                  "reason": "Complete expanded form of a finite decimal, from arithmetic: the digits 38 end in place 3."
                },
                {
                  "step": "Each later copy sits $2$ places further on, so its term is the one before it times $\\dfrac{1}{100}$: the next is $\\dfrac{38}{100{,}000}$.",
                  "reason": "Common ratio: shifting a digit $2$ places to the right divides it by $100$."
                },
                {
                  "step": "$y = \\dfrac{12}{10} + \\dfrac{38}{1000} + \\dfrac{38}{100{,}000} + \\dots$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and the series is left unsummed, as a Translate is never solved."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left and, on the right, the digits before the repeating block as one fraction over a power of $10$, plus an infinite geometric series with one term for each copy of the block: The number $y$ is $0.05\\overline{6}$ written as a repeating decimal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 5/100+6/1000+6/10000+...",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left and, on the right, the digits before the repeating block as one fraction over a power of $10$, plus an infinite geometric series with one term for each copy of the block: The number $y$ is $0.05\\overline{6}$ written as a repeating decimal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The digits before the block give $\\dfrac{5}{100}$.",
                  "reason": "Complete expanded form of a finite decimal, from arithmetic: $0.05$ is $5$ over $100$."
                },
                {
                  "step": "The first copy of the block, in place 3 after the point, gives $\\dfrac{6}{1000}$.",
                  "reason": "Complete expanded form of a finite decimal, from arithmetic: the digits 6 end in place 3."
                },
                {
                  "step": "Each later copy sits $1$ place further on, so its term is the one before it times $\\dfrac{1}{10}$: the next is $\\dfrac{6}{10{,}000}$.",
                  "reason": "Common ratio: shifting a digit $1$ place to the right divides it by $10$."
                },
                {
                  "step": "$y = \\dfrac{5}{100} + \\dfrac{6}{1000} + \\dfrac{6}{10{,}000} + \\dots$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and the series is left unsummed, as a Translate is never solved."
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
      "id": "t181-p1",
      "method": "direct proof",
      "statement": "For numbers $a$ and $r$ with $|r| < 1$, the infinite geometric series $a + ar + ar^2 + \\dots$ converges, with sum $\\dfrac{a}{1 - r}$.",
      "idea": "Write the partial sum by the sum of $n$ terms and split it into the fixed number $\\dfrac{a}{1 - r}$ minus that number times $r^n$; the powers $r^n$ shrink to $0$, so the partial sums close in on $\\dfrac{a}{1 - r}$.",
      "lines": [
        {
          "line": "The partial sum of the first $n$ terms is $s_n = \\dfrac{a(r^n - 1)}{r - 1}$.",
          "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, as $r \\neq 1$ when $|r| < 1$."
        },
        {
          "line": "So $s_n = \\dfrac{a(1 - r^n)}{1 - r}$.",
          "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $-1$."
        },
        {
          "line": "So $s_n = \\dfrac{a - ar^n}{1 - r}$.",
          "reason": "The distributive law, from arithmetic."
        },
        {
          "line": "So $s_n = \\dfrac{a}{1 - r} - \\dfrac{ar^n}{1 - r}$.",
          "reason": "Subtracting fractions with the same denominator, from arithmetic: two fractions with one bottom subtract by subtracting their tops."
        },
        {
          "line": "The fraction $\\dfrac{ar^n}{1 - r}$ equals $\\dfrac{a}{1 - r} \\cdot r^n$.",
          "reason": "The product formula, from arithmetic."
        },
        {
          "line": "So $s_n = \\dfrac{a}{1 - r} - \\dfrac{a}{1 - r} \\cdot r^n$, and $\\dfrac{a}{1 - r}$ is one fixed number.",
          "reason": "Substitution: line 5 is put into line 4."
        },
        {
          "line": "If the powers $r^n$ have limit $b$, the partial sums $s_n$ have limit $\\dfrac{a}{1 - r} - \\dfrac{a}{1 - r} \\cdot b$.",
          "reason": "A limit passes through sums, products and quotients: the fixed number $\\dfrac{a}{1 - r}$ times $r^n$, taken from a fixed number."
        },
        {
          "line": "The series converges exactly when the partial sums have a limit, and its sum is that limit.",
          "reason": "Sum of an infinite series: the limit of its partial sums."
        },
        {
          "line": "Since $|r| < 1$, $-1 < r < 1$.",
          "reason": "Absolute value, from arithmetic."
        },
        {
          "line": "The powers $r^n$ have limit $0$.",
          "reason": "Powers of a number between $-1$ and $1$ shrink to $0$."
        },
        {
          "line": "The partial sums $s_n$ have limit $\\dfrac{a}{1 - r} - \\dfrac{a}{1 - r} \\cdot 0 = \\dfrac{a}{1 - r}$.",
          "reason": "Line 7 with $b = 0$."
        },
        {
          "line": "Therefore $a + ar + ar^2 + \\dots$ converges, with sum $\\dfrac{a}{1 - r}$.",
          "reason": "Sum of an infinite series: line 8."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t181-s1",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$ and $r$ with $a > 0$ and $0 < r < 1$, every partial sum of the infinite geometric series $a + ar + ar^2 + \\dots$ is less than $\\dfrac{a}{1 - r}$. Facts it may use: the sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, partial sum, the cancellation law, the distributive law, subtracting fractions with the same denominator, product of positive rational numbers, the signs of products and quotients, adding the same number.",
      "check": {
        "proof": [
          {
            "line": "The partial sum of the first $n$ terms is $s_n = \\dfrac{a(r^n - 1)}{r - 1}$.",
            "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, as $r \\neq 1$."
          },
          {
            "line": "So $s_n = \\dfrac{a(1 - r^n)}{1 - r}$.",
            "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $-1$."
          },
          {
            "line": "So $s_n = \\dfrac{a - ar^n}{1 - r}$.",
            "reason": "The distributive law, from arithmetic."
          },
          {
            "line": "So $s_n = \\dfrac{a}{1 - r} - \\dfrac{ar^n}{1 - r}$.",
            "reason": "Subtracting fractions with the same denominator, from arithmetic: two fractions with one bottom subtract by subtracting their tops."
          },
          {
            "line": "The number $r^n$ is above $0$.",
            "reason": "Product of positive rational numbers: $r^n$ is a product of factors $r$, each above $0$."
          },
          {
            "line": "The number $ar^n$ is above $0$.",
            "reason": "Product of positive rational numbers: $a > 0$ and $r^n > 0$."
          },
          {
            "line": "The number $1 - r$ is above $0$.",
            "reason": "Adding the same number: $-r$ is added to both sides of $r < 1$."
          },
          {
            "line": "The number $\\dfrac{ar^n}{1 - r}$ is above $0$.",
            "reason": "The signs of products and quotients: $ar^n > 0$ and $1 - r > 0$."
          },
          {
            "line": "So $\\dfrac{a}{1 - r} - \\dfrac{ar^n}{1 - r} < \\dfrac{a}{1 - r}$.",
            "reason": "Adding the same number: $\\dfrac{a}{1 - r} - \\dfrac{ar^n}{1 - r}$ is added to both sides of $0 < \\dfrac{ar^n}{1 - r}$."
          },
          {
            "line": "Therefore $s_n < \\dfrac{a}{1 - r}$ for every whole number $n$ from $1$ up.",
            "reason": "Substitution: line 4 gives the left side as $s_n$."
          }
        ]
      }
    },
    {
      "id": "t181-s2",
      "method": "proof by contradiction",
      "statement": "Prove that for numbers $a$ and $r$ with $a \\neq 0$ and $|r| \\ge 1$, the infinite geometric series $a + ar + ar^2 + \\dots$ has no sum. Facts it may use: sum of an infinite series, the $n$th term $ar^{n-1}$, absolute value, powers and roots of positive numbers keep the order, multiplying by a positive or a negative number, adding two inequalities, the definition of the limit of a sequence.",
      "check": {
        "proof": [
          {
            "line": "Suppose that the series has a sum $b$.",
            "reason": "Proof by contradiction: the statement is taken to be false."
          },
          {
            "line": "The partial sums $s_n$ have limit $b$.",
            "reason": "Sum of an infinite series: the sum is the limit of the partial sums."
          },
          {
            "line": "For every whole number $n$ from $1$ up, $s_{n+1} - s_n = ar^n$.",
            "reason": "The $n$th term $ar^{n-1}$: the partial sum of $n + 1$ terms is the partial sum of $n$ terms plus the $(n + 1)$th term, $ar^n$."
          },
          {
            "line": "So $|s_{n+1} - s_n| = |a| \\cdot |r|^n$.",
            "reason": "Absolute value, from arithmetic: the size of a product is the product of the sizes."
          },
          {
            "line": "For every whole number $n$ from $1$ up, $|r|^n \\ge 1$.",
            "reason": "Powers and roots of positive numbers keep the order: $|r| \\ge 1$."
          },
          {
            "line": "So $|s_{n+1} - s_n| \\ge |a|$ for every whole number $n$ from $1$ up.",
            "reason": "Multiplying by a positive number: $|r|^n \\ge 1$ is multiplied by $|a|$, which is above $0$ as $a \\neq 0$."
          },
          {
            "line": "There is a whole number $m$ from $1$ up with $|s_n - b| < \\dfrac{|a|}{2}$ for every whole number $n \\ge m$.",
            "reason": "The definition of the limit of a sequence, from arithmetic, with the distance $\\dfrac{|a|}{2}$, which is above $0$."
          },
          {
            "line": "So $b - \\dfrac{|a|}{2} < s_{m+1} < b + \\dfrac{|a|}{2}$.",
            "reason": "Absolute value, from arithmetic: a number closer to $b$ than $\\dfrac{|a|}{2}$ lies between $b - \\dfrac{|a|}{2}$ and $b + \\dfrac{|a|}{2}$, and line 7 holds for $n = m + 1$."
          },
          {
            "line": "So $b - \\dfrac{|a|}{2} < s_m < b + \\dfrac{|a|}{2}$.",
            "reason": "Absolute value, from arithmetic, and line 7 for $n = m$."
          },
          {
            "line": "So $-b - \\dfrac{|a|}{2} < -s_m < -b + \\dfrac{|a|}{2}$.",
            "reason": "Multiplying by a negative number reverses the sign: line 9 is multiplied by $-1$."
          },
          {
            "line": "So $-|a| < s_{m+1} - s_m < |a|$.",
            "reason": "Adding two inequalities, from arithmetic: lines 8 and 10 are added."
          },
          {
            "line": "So $|s_{m+1} - s_m| < |a|$.",
            "reason": "Absolute value, from arithmetic."
          },
          {
            "line": "Line 12 contradicts line 6 with $n = m$.",
            "reason": "Proof by contradiction: line 6 gives $|s_{n+1} - s_n| \\ge |a|$ for every whole number $n$ from $1$ up, $m$ among them."
          },
          {
            "line": "Therefore the infinite geometric series $a + ar + ar^2 + \\dots$ has no sum.",
            "reason": "Proof by contradiction: the supposition of line 1 gives a contradiction."
          }
        ]
      }
    }
  ]
}
