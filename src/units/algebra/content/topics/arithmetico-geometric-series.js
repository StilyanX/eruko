export default {
  "number": 228,
  "title": "Arithmetico-geometric series",
  "section": 19,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "567-571"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the value of $\\sum_{k=1}^{3} (5k + 4) \\cdot 5^{k}$.",
    "form": "Answer as an integer.",
    "answer": "2770",
    "solution": [
      "Find the value of $\\sum_{k=1}^{3} (5k + 4) \\cdot 5^{k}$.",
      "Write $y$ for the sum: $y = 9 \\cdot 5 + 14 \\cdot 5^{2} + 19 \\cdot 5^{3}$.",
      "$5y = 9 \\cdot 5^{2} + 14 \\cdot 5^{3} + 19 \\cdot 5^{4}$",
      "$5y - y = -9 \\cdot 5 - 5 \\cdot 5^{2} - 5 \\cdot 5^{3} + 19 \\cdot 5^{4}$",
      "$5 \\cdot 5^{2} + 5 \\cdot 5^{3} = \\dfrac{5 \\cdot 5^{2}(5^{2} - 1)}{5 - 1}$",
      "$\\dfrac{5 \\cdot 5^{2}(5^{2} - 1)}{5 - 1} = 750$",
      "$5y - y = 11{,}080$",
      "$4y = 11{,}080$",
      "$y = 2770$"
    ]
  },
  "ideas": [
    {
      "name": "Arithmetico-geometric series",
      "concrete": "Write $y = 2 \\cdot 5 + 4 \\cdot 5^{2} + 6 \\cdot 5^{3}$: the factors $2, 4, 6$ form an arithmetic sequence and the factors $5, 5^{2}, 5^{3}$ a geometric one with common ratio $5$. Then $5y = 2 \\cdot 5^{2} + 4 \\cdot 5^{3} + 6 \\cdot 5^{4}$, and taking $y$ from $5y$ pairs each power with its neighbour: $5y - y = -2 \\cdot 5 - 2 \\cdot 5^{2} - 2 \\cdot 5^{3} + 6 \\cdot 5^{4}$, a geometric series plus two end terms. So $4y = -10 - 50 - 250 + 3750 = 3440$ and $y = 860$.",
      "general": "An **arithmetico-geometric series** is a sum whose terms are the terms of an arithmetic sequence times the matching terms of a geometric sequence, as $(a + (k - 1)d)r^{k-1}$ for $k = 1, 2, 3, \\dots$, with numbers $a$, $d$ and $r$; its common ratio is $r$. Multiplying the series by $r$ and taking one series from the other leaves the first term, a geometric series with common ratio $r$ whose terms carry the common difference $d$, and, for a sum with a last term, that last term times $r$. **Arithmetico-geometric series converges for $|r| < 1$**: an infinite arithmetico-geometric series whose common ratio has size less than $1$ has a sum; the course states this with no proof."
    }
  ],
  "kinds": [
    {
      "id": "t228-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the value of $\\sum_{k=1}^{3} (7k + 3) \\cdot 6^{k}$.",
            "lines": [
              {
                "step": "Find the value of $\\sum_{k=1}^{3} (7k + 3) \\cdot 6^{k}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Write $y$ for the sum: $y = 10 \\cdot 6 + 17 \\cdot 6^{2} + 24 \\cdot 6^{3}$.",
                "reason": "Sigma notation: the term is written out for $k = 1$ to $3$."
              },
              {
                "step": "$6y = 10 \\cdot 6^{2} + 17 \\cdot 6^{3} + 24 \\cdot 6^{4}$",
                "reason": "Multiply by the ratio and subtract: both sides of line 2 are multiplied by the common ratio $6$, and each power of $6$ goes up by one."
              },
              {
                "step": "$6y - y = -10 \\cdot 6 - 7 \\cdot 6^{2} - 7 \\cdot 6^{3} + 24 \\cdot 6^{4}$",
                "reason": "Multiply by the ratio and subtract: line 2 is taken from line 3, and each power from $6^{2}$ to $6^{3}$ is left with $-7$, as the coefficients of line 2 rise by $7$."
              },
              {
                "step": "$7 \\cdot 6^{2} + 7 \\cdot 6^{3} = \\dfrac{7 \\cdot 6^{2}(6^{2} - 1)}{6 - 1}$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $7 \\cdot 6^{2}$, common ratio $6$ and $2$ terms, as $6 \\neq 1$."
              },
              {
                "step": "$\\dfrac{7 \\cdot 6^{2}(6^{2} - 1)}{6 - 1} = 1764$",
                "reason": "Order of operations, from arithmetic: $6^{2} - 1 = 35$ and $6 - 1 = 5$ are worked out first."
              },
              {
                "step": "$6y - y = 29{,}280$",
                "reason": "Substituting a value: line 6 replaces the middle terms of line 4, and $-10 \\cdot 6 - 1764 + 24 \\cdot 6^{4} = 29{,}280$."
              },
              {
                "step": "$5y = 29{,}280$",
                "reason": "Taking out a common factor: $6y - y = (6 - 1)y$."
              },
              {
                "step": "$y = 5856$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $\\sum_{k=1}^{3} (6k + 3) \\cdot 8^{k}$.",
              "form": "Answer as an integer.",
              "answer": "11784",
              "lines": [
                {
                  "step": "Find the value of $\\sum_{k=1}^{3} (6k + 3) \\cdot 8^{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 9 \\cdot 8 + 15 \\cdot 8^{2} + 21 \\cdot 8^{3}$.",
                  "reason": "Sigma notation: the term is written out for $k = 1$ to $3$."
                },
                {
                  "step": "$8y = 9 \\cdot 8^{2} + 15 \\cdot 8^{3} + 21 \\cdot 8^{4}$",
                  "reason": "Multiply by the ratio and subtract: both sides of line 2 are multiplied by the common ratio $8$, and each power of $8$ goes up by one."
                },
                {
                  "step": "$8y - y = -9 \\cdot 8 - 6 \\cdot 8^{2} - 6 \\cdot 8^{3} + 21 \\cdot 8^{4}$",
                  "reason": "Multiply by the ratio and subtract: line 2 is taken from line 3, and each power from $8^{2}$ to $8^{3}$ is left with $-6$, as the coefficients of line 2 rise by $6$."
                },
                {
                  "step": "$6 \\cdot 8^{2} + 6 \\cdot 8^{3} = \\dfrac{6 \\cdot 8^{2}(8^{2} - 1)}{8 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $6 \\cdot 8^{2}$, common ratio $8$ and $2$ terms, as $8 \\neq 1$."
                },
                {
                  "step": "$\\dfrac{6 \\cdot 8^{2}(8^{2} - 1)}{8 - 1} = 3456$",
                  "reason": "Order of operations, from arithmetic: $8^{2} - 1 = 63$ and $8 - 1 = 7$ are worked out first."
                },
                {
                  "step": "$8y - y = 82{,}488$",
                  "reason": "Substituting a value: line 6 replaces the middle terms of line 4, and $-9 \\cdot 8 - 3456 + 21 \\cdot 8^{4} = 82{,}488$."
                },
                {
                  "step": "$7y = 82{,}488$",
                  "reason": "Taking out a common factor: $8y - y = (8 - 1)y$."
                },
                {
                  "step": "$y = 11{,}784$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\sum_{k=1}^{3} (5k + 2) \\cdot 7^{k}$.",
              "form": "Answer as an integer.",
              "answer": "6468",
              "lines": [
                {
                  "step": "Find the value of $\\sum_{k=1}^{3} (5k + 2) \\cdot 7^{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 7 \\cdot 7 + 12 \\cdot 7^{2} + 17 \\cdot 7^{3}$.",
                  "reason": "Sigma notation: the term is written out for $k = 1$ to $3$."
                },
                {
                  "step": "$7y = 7 \\cdot 7^{2} + 12 \\cdot 7^{3} + 17 \\cdot 7^{4}$",
                  "reason": "Multiply by the ratio and subtract: both sides of line 2 are multiplied by the common ratio $7$, and each power of $7$ goes up by one."
                },
                {
                  "step": "$7y - y = -7 \\cdot 7 - 5 \\cdot 7^{2} - 5 \\cdot 7^{3} + 17 \\cdot 7^{4}$",
                  "reason": "Multiply by the ratio and subtract: line 2 is taken from line 3, and each power from $7^{2}$ to $7^{3}$ is left with $-5$, as the coefficients of line 2 rise by $5$."
                },
                {
                  "step": "$5 \\cdot 7^{2} + 5 \\cdot 7^{3} = \\dfrac{5 \\cdot 7^{2}(7^{2} - 1)}{7 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $5 \\cdot 7^{2}$, common ratio $7$ and $2$ terms, as $7 \\neq 1$."
                },
                {
                  "step": "$\\dfrac{5 \\cdot 7^{2}(7^{2} - 1)}{7 - 1} = 1960$",
                  "reason": "Order of operations, from arithmetic: $7^{2} - 1 = 48$ and $7 - 1 = 6$ are worked out first."
                },
                {
                  "step": "$7y - y = 38{,}808$",
                  "reason": "Substituting a value: line 6 replaces the middle terms of line 4, and $-7 \\cdot 7 - 1960 + 17 \\cdot 7^{4} = 38{,}808$."
                },
                {
                  "step": "$6y = 38{,}808$",
                  "reason": "Taking out a common factor: $7y - y = (7 - 1)y$."
                },
                {
                  "step": "$y = 6468$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\sum_{k=1}^{3} (4k - 2) \\cdot 5^{k}$.",
              "form": "Answer as an integer.",
              "answer": "1410",
              "lines": [
                {
                  "step": "Find the value of $\\sum_{k=1}^{3} (4k - 2) \\cdot 5^{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 2 \\cdot 5 + 6 \\cdot 5^{2} + 10 \\cdot 5^{3}$.",
                  "reason": "Sigma notation: the term is written out for $k = 1$ to $3$."
                },
                {
                  "step": "$5y = 2 \\cdot 5^{2} + 6 \\cdot 5^{3} + 10 \\cdot 5^{4}$",
                  "reason": "Multiply by the ratio and subtract: both sides of line 2 are multiplied by the common ratio $5$, and each power of $5$ goes up by one."
                },
                {
                  "step": "$5y - y = -2 \\cdot 5 - 4 \\cdot 5^{2} - 4 \\cdot 5^{3} + 10 \\cdot 5^{4}$",
                  "reason": "Multiply by the ratio and subtract: line 2 is taken from line 3, and each power from $5^{2}$ to $5^{3}$ is left with $-4$, as the coefficients of line 2 rise by $4$."
                },
                {
                  "step": "$4 \\cdot 5^{2} + 4 \\cdot 5^{3} = \\dfrac{4 \\cdot 5^{2}(5^{2} - 1)}{5 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $4 \\cdot 5^{2}$, common ratio $5$ and $2$ terms, as $5 \\neq 1$."
                },
                {
                  "step": "$\\dfrac{4 \\cdot 5^{2}(5^{2} - 1)}{5 - 1} = 600$",
                  "reason": "Order of operations, from arithmetic: $5^{2} - 1 = 24$ and $5 - 1 = 4$ are worked out first."
                },
                {
                  "step": "$5y - y = 5640$",
                  "reason": "Substituting a value: line 6 replaces the middle terms of line 4, and $-2 \\cdot 5 - 600 + 10 \\cdot 5^{4} = 5640$."
                },
                {
                  "step": "$4y = 5640$",
                  "reason": "Taking out a common factor: $5y - y = (5 - 1)y$."
                },
                {
                  "step": "$y = 1410$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a closed form for $\\sum_{k=1}^{n} (3k + 3) \\cdot 9^{k}$, for a whole number $n$ from $3$ up.",
            "lines": [
              {
                "step": "Find a closed form for $\\sum_{k=1}^{n} (3k + 3) \\cdot 9^{k}$, for a whole number $n$ from $3$ up.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Write $y$ for the sum: $y = 6 \\cdot 9 + 9 \\cdot 9^{2} + 12 \\cdot 9^{3} + \\dots + (3n + 3) \\cdot 9^{n}$.",
                "reason": "Sigma notation: the term is written out for $k = 1$ to $n$."
              },
              {
                "step": "$9y = 6 \\cdot 9^{2} + 9 \\cdot 9^{3} + \\dots + (3n) \\cdot 9^{n} + (3n + 3) \\cdot 9^{n+1}$",
                "reason": "Multiply by the ratio and subtract: both sides of line 2 are multiplied by the common ratio $9$, and each power of $9$ goes up by one."
              },
              {
                "step": "$9y - y = -6 \\cdot 9 - 3 \\cdot 9^{2} - 3 \\cdot 9^{3} - \\dots - 3 \\cdot 9^{n} + (3n + 3) \\cdot 9^{n+1}$",
                "reason": "Multiply by the ratio and subtract: line 2 is taken from line 3, and each power from $9^{2}$ to $9^{n}$ is left with $-3$, as the coefficients of line 2 rise by $3$."
              },
              {
                "step": "$3 \\cdot 9^{2} + 3 \\cdot 9^{3} + \\dots + 3 \\cdot 9^{n} = \\dfrac{3 \\cdot 9^{2}(9^{n-1} - 1)}{9 - 1}$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $3 \\cdot 9^{2}$, common ratio $9$ and $n - 1$ terms, as $9 \\neq 1$."
              },
              {
                "step": "$\\dfrac{3 \\cdot 9^{2}(9^{n-1} - 1)}{9 - 1} = \\dfrac{3 \\cdot 9^{n+1} - 243}{8}$",
                "reason": "Product law: $9^{2} \\cdot 9^{n-1} = 9^{n+1}$, and the bracket is multiplied out by the distributive law, from arithmetic."
              },
              {
                "step": "$9y - y = (3n + 3) \\cdot 9^{n+1} - 54 - \\dfrac{3 \\cdot 9^{n+1} - 243}{8}$",
                "reason": "Substituting a value: line 6 replaces the middle terms of line 4, and $6 \\cdot 9 = 54$."
              },
              {
                "step": "$8y = (3n + 3) \\cdot 9^{n+1} - 54 - \\dfrac{3 \\cdot 9^{n+1} - 243}{8}$",
                "reason": "Taking out a common factor: $9y - y = (9 - 1)y$."
              },
              {
                "step": "$y = \\dfrac{(3n + 3) \\cdot 9^{n+1} - 54}{8} - \\dfrac{3 \\cdot 9^{n+1} - 243}{64}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $\\sum_{k=1}^{n} (6k + 4) \\cdot 7^{k}$, for a whole number $n$ from $3$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "((6*n+4)*7^(n+1)-70)/6-(6*7^(n+1)-294)/36",
              "lines": [
                {
                  "step": "Find a closed form for $\\sum_{k=1}^{n} (6k + 4) \\cdot 7^{k}$, for a whole number $n$ from $3$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 10 \\cdot 7 + 16 \\cdot 7^{2} + 22 \\cdot 7^{3} + \\dots + (6n + 4) \\cdot 7^{n}$.",
                  "reason": "Sigma notation: the term is written out for $k = 1$ to $n$."
                },
                {
                  "step": "$7y = 10 \\cdot 7^{2} + 16 \\cdot 7^{3} + \\dots + (6n - 2) \\cdot 7^{n} + (6n + 4) \\cdot 7^{n+1}$",
                  "reason": "Multiply by the ratio and subtract: both sides of line 2 are multiplied by the common ratio $7$, and each power of $7$ goes up by one."
                },
                {
                  "step": "$7y - y = -10 \\cdot 7 - 6 \\cdot 7^{2} - 6 \\cdot 7^{3} - \\dots - 6 \\cdot 7^{n} + (6n + 4) \\cdot 7^{n+1}$",
                  "reason": "Multiply by the ratio and subtract: line 2 is taken from line 3, and each power from $7^{2}$ to $7^{n}$ is left with $-6$, as the coefficients of line 2 rise by $6$."
                },
                {
                  "step": "$6 \\cdot 7^{2} + 6 \\cdot 7^{3} + \\dots + 6 \\cdot 7^{n} = \\dfrac{6 \\cdot 7^{2}(7^{n-1} - 1)}{7 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $6 \\cdot 7^{2}$, common ratio $7$ and $n - 1$ terms, as $7 \\neq 1$."
                },
                {
                  "step": "$\\dfrac{6 \\cdot 7^{2}(7^{n-1} - 1)}{7 - 1} = \\dfrac{6 \\cdot 7^{n+1} - 294}{6}$",
                  "reason": "Product law: $7^{2} \\cdot 7^{n-1} = 7^{n+1}$, and the bracket is multiplied out by the distributive law, from arithmetic."
                },
                {
                  "step": "$7y - y = (6n + 4) \\cdot 7^{n+1} - 70 - \\dfrac{6 \\cdot 7^{n+1} - 294}{6}$",
                  "reason": "Substituting a value: line 6 replaces the middle terms of line 4, and $10 \\cdot 7 = 70$."
                },
                {
                  "step": "$6y = (6n + 4) \\cdot 7^{n+1} - 70 - \\dfrac{6 \\cdot 7^{n+1} - 294}{6}$",
                  "reason": "Taking out a common factor: $7y - y = (7 - 1)y$."
                },
                {
                  "step": "$y = \\dfrac{(6n + 4) \\cdot 7^{n+1} - 70}{6} - \\dfrac{6 \\cdot 7^{n+1} - 294}{36}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $\\sum_{k=1}^{n} (7k + 5) \\cdot 5^{k}$, for a whole number $n$ from $3$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "((7*n+5)*5^(n+1)-60)/4-(7*5^(n+1)-175)/16",
              "lines": [
                {
                  "step": "Find a closed form for $\\sum_{k=1}^{n} (7k + 5) \\cdot 5^{k}$, for a whole number $n$ from $3$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 12 \\cdot 5 + 19 \\cdot 5^{2} + 26 \\cdot 5^{3} + \\dots + (7n + 5) \\cdot 5^{n}$.",
                  "reason": "Sigma notation: the term is written out for $k = 1$ to $n$."
                },
                {
                  "step": "$5y = 12 \\cdot 5^{2} + 19 \\cdot 5^{3} + \\dots + (7n - 2) \\cdot 5^{n} + (7n + 5) \\cdot 5^{n+1}$",
                  "reason": "Multiply by the ratio and subtract: both sides of line 2 are multiplied by the common ratio $5$, and each power of $5$ goes up by one."
                },
                {
                  "step": "$5y - y = -12 \\cdot 5 - 7 \\cdot 5^{2} - 7 \\cdot 5^{3} - \\dots - 7 \\cdot 5^{n} + (7n + 5) \\cdot 5^{n+1}$",
                  "reason": "Multiply by the ratio and subtract: line 2 is taken from line 3, and each power from $5^{2}$ to $5^{n}$ is left with $-7$, as the coefficients of line 2 rise by $7$."
                },
                {
                  "step": "$7 \\cdot 5^{2} + 7 \\cdot 5^{3} + \\dots + 7 \\cdot 5^{n} = \\dfrac{7 \\cdot 5^{2}(5^{n-1} - 1)}{5 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $7 \\cdot 5^{2}$, common ratio $5$ and $n - 1$ terms, as $5 \\neq 1$."
                },
                {
                  "step": "$\\dfrac{7 \\cdot 5^{2}(5^{n-1} - 1)}{5 - 1} = \\dfrac{7 \\cdot 5^{n+1} - 175}{4}$",
                  "reason": "Product law: $5^{2} \\cdot 5^{n-1} = 5^{n+1}$, and the bracket is multiplied out by the distributive law, from arithmetic."
                },
                {
                  "step": "$5y - y = (7n + 5) \\cdot 5^{n+1} - 60 - \\dfrac{7 \\cdot 5^{n+1} - 175}{4}$",
                  "reason": "Substituting a value: line 6 replaces the middle terms of line 4, and $12 \\cdot 5 = 60$."
                },
                {
                  "step": "$4y = (7n + 5) \\cdot 5^{n+1} - 60 - \\dfrac{7 \\cdot 5^{n+1} - 175}{4}$",
                  "reason": "Taking out a common factor: $5y - y = (5 - 1)y$."
                },
                {
                  "step": "$y = \\dfrac{(7n + 5) \\cdot 5^{n+1} - 60}{4} - \\dfrac{7 \\cdot 5^{n+1} - 175}{16}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $\\sum_{k=1}^{n} (5k + 3) \\cdot 8^{k}$, for a whole number $n$ from $3$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "((5*n+3)*8^(n+1)-64)/7-(5*8^(n+1)-320)/49",
              "lines": [
                {
                  "step": "Find a closed form for $\\sum_{k=1}^{n} (5k + 3) \\cdot 8^{k}$, for a whole number $n$ from $3$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 8 \\cdot 8 + 13 \\cdot 8^{2} + 18 \\cdot 8^{3} + \\dots + (5n + 3) \\cdot 8^{n}$.",
                  "reason": "Sigma notation: the term is written out for $k = 1$ to $n$."
                },
                {
                  "step": "$8y = 8 \\cdot 8^{2} + 13 \\cdot 8^{3} + \\dots + (5n - 2) \\cdot 8^{n} + (5n + 3) \\cdot 8^{n+1}$",
                  "reason": "Multiply by the ratio and subtract: both sides of line 2 are multiplied by the common ratio $8$, and each power of $8$ goes up by one."
                },
                {
                  "step": "$8y - y = -8 \\cdot 8 - 5 \\cdot 8^{2} - 5 \\cdot 8^{3} - \\dots - 5 \\cdot 8^{n} + (5n + 3) \\cdot 8^{n+1}$",
                  "reason": "Multiply by the ratio and subtract: line 2 is taken from line 3, and each power from $8^{2}$ to $8^{n}$ is left with $-5$, as the coefficients of line 2 rise by $5$."
                },
                {
                  "step": "$5 \\cdot 8^{2} + 5 \\cdot 8^{3} + \\dots + 5 \\cdot 8^{n} = \\dfrac{5 \\cdot 8^{2}(8^{n-1} - 1)}{8 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $5 \\cdot 8^{2}$, common ratio $8$ and $n - 1$ terms, as $8 \\neq 1$."
                },
                {
                  "step": "$\\dfrac{5 \\cdot 8^{2}(8^{n-1} - 1)}{8 - 1} = \\dfrac{5 \\cdot 8^{n+1} - 320}{7}$",
                  "reason": "Product law: $8^{2} \\cdot 8^{n-1} = 8^{n+1}$, and the bracket is multiplied out by the distributive law, from arithmetic."
                },
                {
                  "step": "$8y - y = (5n + 3) \\cdot 8^{n+1} - 64 - \\dfrac{5 \\cdot 8^{n+1} - 320}{7}$",
                  "reason": "Substituting a value: line 6 replaces the middle terms of line 4, and $8 \\cdot 8 = 64$."
                },
                {
                  "step": "$7y = (5n + 3) \\cdot 8^{n+1} - 64 - \\dfrac{5 \\cdot 8^{n+1} - 320}{7}$",
                  "reason": "Taking out a common factor: $8y - y = (8 - 1)y$."
                },
                {
                  "step": "$y = \\dfrac{(5n + 3) \\cdot 8^{n+1} - 64}{7} - \\dfrac{5 \\cdot 8^{n+1} - 320}{49}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t228-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k - 1)\\left(\\dfrac{5}{6}\\right)^{k}$.",
            "lines": [
              {
                "step": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k - 1)\\left(\\dfrac{5}{6}\\right)^{k}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Write $y$ for the sum: $y = 2 \\cdot \\dfrac{5}{6} + 5 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 8 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + 11 \\cdot \\left(\\dfrac{5}{6}\\right)^{4} + \\dots$.",
                "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $\\dfrac{5}{6}$, whose size is less than $1$, so the series converges; its terms for $k = 1, 2, 3, 4$ are written out by sigma notation."
              },
              {
                "step": "$\\dfrac{5}{6}y = 2 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 5 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + 8 \\cdot \\left(\\dfrac{5}{6}\\right)^{4} + \\dots$",
                "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $\\dfrac{5}{6}$, so the sum is too."
              },
              {
                "step": "$y - \\dfrac{5}{6}y = 2 \\cdot \\dfrac{5}{6} + 3 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 3 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + \\dots$",
                "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, a limit passing through the difference, and each power from the second on is left with $3$, as the coefficients rise by $3$."
              },
              {
                "step": "$3 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 3 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + \\dots = \\dfrac{\\frac{25}{12}}{1 - \\frac{5}{6}}$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{25}{12}$ and $r = \\dfrac{5}{6}$."
              },
              {
                "step": "$\\dfrac{\\frac{25}{12}}{1 - \\frac{5}{6}} = \\dfrac{25}{2}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $36$."
              },
              {
                "step": "$y - \\dfrac{5}{6}y = \\dfrac{85}{6}$",
                "reason": "The general addition formula, from arithmetic: line 6 replaces the series in line 4, and $\\dfrac{5}{3} + \\dfrac{25}{2} = \\dfrac{85}{6}$."
              },
              {
                "step": "$\\dfrac{1}{6}y = \\dfrac{85}{6}$",
                "reason": "Taking out a common factor: $y - \\dfrac{5}{6}y = \\left(1 - \\dfrac{5}{6}\\right)y$."
              },
              {
                "step": "$y = 85$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{1}{6}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k + 3)\\left(\\dfrac{7}{9}\\right)^{k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "357/4",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k + 3)\\left(\\dfrac{7}{9}\\right)^{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 8 \\cdot \\dfrac{7}{9} + 13 \\cdot \\left(\\dfrac{7}{9}\\right)^{2} + 18 \\cdot \\left(\\dfrac{7}{9}\\right)^{3} + 23 \\cdot \\left(\\dfrac{7}{9}\\right)^{4} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $\\dfrac{7}{9}$, whose size is less than $1$, so the series converges; its terms for $k = 1, 2, 3, 4$ are written out by sigma notation."
                },
                {
                  "step": "$\\dfrac{7}{9}y = 8 \\cdot \\left(\\dfrac{7}{9}\\right)^{2} + 13 \\cdot \\left(\\dfrac{7}{9}\\right)^{3} + 18 \\cdot \\left(\\dfrac{7}{9}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $\\dfrac{7}{9}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{7}{9}y = 8 \\cdot \\dfrac{7}{9} + 5 \\cdot \\left(\\dfrac{7}{9}\\right)^{2} + 5 \\cdot \\left(\\dfrac{7}{9}\\right)^{3} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, a limit passing through the difference, and each power from the second on is left with $5$, as the coefficients rise by $5$."
                },
                {
                  "step": "$5 \\cdot \\left(\\dfrac{7}{9}\\right)^{2} + 5 \\cdot \\left(\\dfrac{7}{9}\\right)^{3} + \\dots = \\dfrac{\\frac{245}{81}}{1 - \\frac{7}{9}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{245}{81}$ and $r = \\dfrac{7}{9}$."
                },
                {
                  "step": "$\\dfrac{\\frac{245}{81}}{1 - \\frac{7}{9}} = \\dfrac{245}{18}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $81$."
                },
                {
                  "step": "$y - \\dfrac{7}{9}y = \\dfrac{119}{6}$",
                  "reason": "The general addition formula, from arithmetic: line 6 replaces the series in line 4, and $\\dfrac{56}{9} + \\dfrac{245}{18} = \\dfrac{119}{6}$."
                },
                {
                  "step": "$\\dfrac{2}{9}y = \\dfrac{119}{6}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{7}{9}y = \\left(1 - \\dfrac{7}{9}\\right)y$."
                },
                {
                  "step": "$y = \\dfrac{357}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{2}{9}$."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (4k + 1)\\left(\\dfrac{4}{7}\\right)^{k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "124/9",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (4k + 1)\\left(\\dfrac{4}{7}\\right)^{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 5 \\cdot \\dfrac{4}{7} + 9 \\cdot \\left(\\dfrac{4}{7}\\right)^{2} + 13 \\cdot \\left(\\dfrac{4}{7}\\right)^{3} + 17 \\cdot \\left(\\dfrac{4}{7}\\right)^{4} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $\\dfrac{4}{7}$, whose size is less than $1$, so the series converges; its terms for $k = 1, 2, 3, 4$ are written out by sigma notation."
                },
                {
                  "step": "$\\dfrac{4}{7}y = 5 \\cdot \\left(\\dfrac{4}{7}\\right)^{2} + 9 \\cdot \\left(\\dfrac{4}{7}\\right)^{3} + 13 \\cdot \\left(\\dfrac{4}{7}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $\\dfrac{4}{7}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{4}{7}y = 5 \\cdot \\dfrac{4}{7} + 4 \\cdot \\left(\\dfrac{4}{7}\\right)^{2} + 4 \\cdot \\left(\\dfrac{4}{7}\\right)^{3} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, a limit passing through the difference, and each power from the second on is left with $4$, as the coefficients rise by $4$."
                },
                {
                  "step": "$4 \\cdot \\left(\\dfrac{4}{7}\\right)^{2} + 4 \\cdot \\left(\\dfrac{4}{7}\\right)^{3} + \\dots = \\dfrac{\\frac{64}{49}}{1 - \\frac{4}{7}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{64}{49}$ and $r = \\dfrac{4}{7}$."
                },
                {
                  "step": "$\\dfrac{\\frac{64}{49}}{1 - \\frac{4}{7}} = \\dfrac{64}{21}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $49$."
                },
                {
                  "step": "$y - \\dfrac{4}{7}y = \\dfrac{124}{21}$",
                  "reason": "The general addition formula, from arithmetic: line 6 replaces the series in line 4, and $\\dfrac{20}{7} + \\dfrac{64}{21} = \\dfrac{124}{21}$."
                },
                {
                  "step": "$\\dfrac{3}{7}y = \\dfrac{124}{21}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{4}{7}y = \\left(1 - \\dfrac{4}{7}\\right)y$."
                },
                {
                  "step": "$y = \\dfrac{124}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{3}{7}$."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k + 4)\\left(\\dfrac{4}{9}\\right)^{k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "52/5",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k + 4)\\left(\\dfrac{4}{9}\\right)^{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 9 \\cdot \\dfrac{4}{9} + 14 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 19 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + 24 \\cdot \\left(\\dfrac{4}{9}\\right)^{4} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $\\dfrac{4}{9}$, whose size is less than $1$, so the series converges; its terms for $k = 1, 2, 3, 4$ are written out by sigma notation."
                },
                {
                  "step": "$\\dfrac{4}{9}y = 9 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 14 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + 19 \\cdot \\left(\\dfrac{4}{9}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $\\dfrac{4}{9}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{4}{9}y = 9 \\cdot \\dfrac{4}{9} + 5 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 5 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, a limit passing through the difference, and each power from the second on is left with $5$, as the coefficients rise by $5$."
                },
                {
                  "step": "$5 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 5 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + \\dots = \\dfrac{\\frac{80}{81}}{1 - \\frac{4}{9}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{80}{81}$ and $r = \\dfrac{4}{9}$."
                },
                {
                  "step": "$\\dfrac{\\frac{80}{81}}{1 - \\frac{4}{9}} = \\dfrac{16}{9}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $81$."
                },
                {
                  "step": "$y - \\dfrac{4}{9}y = \\dfrac{52}{9}$",
                  "reason": "The general addition formula, from arithmetic: line 6 replaces the series in line 4, and $4 + \\dfrac{16}{9} = \\dfrac{52}{9}$."
                },
                {
                  "step": "$\\dfrac{5}{9}y = \\dfrac{52}{9}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{4}{9}y = \\left(1 - \\dfrac{4}{9}\\right)y$."
                },
                {
                  "step": "$y = \\dfrac{52}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{5}{9}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a closed form for $\\sum_{k=1}^{\\infty} (11k - 2)x^{k}$, where $|x| < 1$.",
            "lines": [
              {
                "step": "Find a closed form for $\\sum_{k=1}^{\\infty} (11k - 2)x^{k}$, where $|x| < 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Write $y$ for the sum: $y = 9x + 20x^{2} + 31x^{3} + 42x^{4} + \\dots$.",
                "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $x$, whose size is less than $1$, so the series converges; its terms for $k = 1, 2, 3, 4$ are written out by sigma notation."
              },
              {
                "step": "$xy = 9x^{2} + 20x^{3} + 31x^{4} + \\dots$",
                "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $x$, so the sum is too."
              },
              {
                "step": "$y - xy = 9x + 11x^{2} + 11x^{3} + \\dots$",
                "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, a limit passing through the difference, and each power from $x^{2}$ on is left with $11$, as the coefficients rise by $11$."
              },
              {
                "step": "$11x^{2} + 11x^{3} + \\dots = \\dfrac{11x^{2}}{1 - x}$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $11x^{2}$ and $r = x$."
              },
              {
                "step": "$y - xy = 9x + \\dfrac{11x^{2}}{1 - x}$",
                "reason": "Substituting a value: line 5 replaces the series in line 4."
              },
              {
                "step": "$y - xy = \\dfrac{9x + 2x^{2}}{1 - x}$",
                "reason": "Single fraction: $9x$ is written as $\\dfrac{9x(1 - x)}{1 - x}$ and the tops are added."
              },
              {
                "step": "$(1 - x)y = \\dfrac{9x + 2x^{2}}{1 - x}$",
                "reason": "Taking out a common factor: $y - xy = (1 - x)y$."
              },
              {
                "step": "$y = \\dfrac{9x + 2x^{2}}{(1 - x)^{2}}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $1 - x$, which is not $0$ as $|x| < 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (8k + 3)x^{k}$, where $|x| < 1$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(11*x-3*x^2)/(1-x)^2",
              "lines": [
                {
                  "step": "Find a closed form for $\\sum_{k=1}^{\\infty} (8k + 3)x^{k}$, where $|x| < 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 11x + 19x^{2} + 27x^{3} + 35x^{4} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $x$, whose size is less than $1$, so the series converges; its terms for $k = 1, 2, 3, 4$ are written out by sigma notation."
                },
                {
                  "step": "$xy = 11x^{2} + 19x^{3} + 27x^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $x$, so the sum is too."
                },
                {
                  "step": "$y - xy = 11x + 8x^{2} + 8x^{3} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, a limit passing through the difference, and each power from $x^{2}$ on is left with $8$, as the coefficients rise by $8$."
                },
                {
                  "step": "$8x^{2} + 8x^{3} + \\dots = \\dfrac{8x^{2}}{1 - x}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $8x^{2}$ and $r = x$."
                },
                {
                  "step": "$y - xy = 11x + \\dfrac{8x^{2}}{1 - x}$",
                  "reason": "Substituting a value: line 5 replaces the series in line 4."
                },
                {
                  "step": "$y - xy = \\dfrac{11x - 3x^{2}}{1 - x}$",
                  "reason": "Single fraction: $11x$ is written as $\\dfrac{11x(1 - x)}{1 - x}$ and the tops are added."
                },
                {
                  "step": "$(1 - x)y = \\dfrac{11x - 3x^{2}}{1 - x}$",
                  "reason": "Taking out a common factor: $y - xy = (1 - x)y$."
                },
                {
                  "step": "$y = \\dfrac{11x - 3x^{2}}{(1 - x)^{2}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $1 - x$, which is not $0$ as $|x| < 1$."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (7k + 12)x^{k}$, where $|x| < 1$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(19*x-12*x^2)/(1-x)^2",
              "lines": [
                {
                  "step": "Find a closed form for $\\sum_{k=1}^{\\infty} (7k + 12)x^{k}$, where $|x| < 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 19x + 26x^{2} + 33x^{3} + 40x^{4} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $x$, whose size is less than $1$, so the series converges; its terms for $k = 1, 2, 3, 4$ are written out by sigma notation."
                },
                {
                  "step": "$xy = 19x^{2} + 26x^{3} + 33x^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $x$, so the sum is too."
                },
                {
                  "step": "$y - xy = 19x + 7x^{2} + 7x^{3} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, a limit passing through the difference, and each power from $x^{2}$ on is left with $7$, as the coefficients rise by $7$."
                },
                {
                  "step": "$7x^{2} + 7x^{3} + \\dots = \\dfrac{7x^{2}}{1 - x}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $7x^{2}$ and $r = x$."
                },
                {
                  "step": "$y - xy = 19x + \\dfrac{7x^{2}}{1 - x}$",
                  "reason": "Substituting a value: line 5 replaces the series in line 4."
                },
                {
                  "step": "$y - xy = \\dfrac{19x - 12x^{2}}{1 - x}$",
                  "reason": "Single fraction: $19x$ is written as $\\dfrac{19x(1 - x)}{1 - x}$ and the tops are added."
                },
                {
                  "step": "$(1 - x)y = \\dfrac{19x - 12x^{2}}{1 - x}$",
                  "reason": "Taking out a common factor: $y - xy = (1 - x)y$."
                },
                {
                  "step": "$y = \\dfrac{19x - 12x^{2}}{(1 - x)^{2}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $1 - x$, which is not $0$ as $|x| < 1$."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (13k + 5)x^{k}$, where $|x| < 1$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(18*x-5*x^2)/(1-x)^2",
              "lines": [
                {
                  "step": "Find a closed form for $\\sum_{k=1}^{\\infty} (13k + 5)x^{k}$, where $|x| < 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 18x + 31x^{2} + 44x^{3} + 57x^{4} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $x$, whose size is less than $1$, so the series converges; its terms for $k = 1, 2, 3, 4$ are written out by sigma notation."
                },
                {
                  "step": "$xy = 18x^{2} + 31x^{3} + 44x^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $x$, so the sum is too."
                },
                {
                  "step": "$y - xy = 18x + 13x^{2} + 13x^{3} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, a limit passing through the difference, and each power from $x^{2}$ on is left with $13$, as the coefficients rise by $13$."
                },
                {
                  "step": "$13x^{2} + 13x^{3} + \\dots = \\dfrac{13x^{2}}{1 - x}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $13x^{2}$ and $r = x$."
                },
                {
                  "step": "$y - xy = 18x + \\dfrac{13x^{2}}{1 - x}$",
                  "reason": "Substituting a value: line 5 replaces the series in line 4."
                },
                {
                  "step": "$y - xy = \\dfrac{18x - 5x^{2}}{1 - x}$",
                  "reason": "Single fraction: $18x$ is written as $\\dfrac{18x(1 - x)}{1 - x}$ and the tops are added."
                },
                {
                  "step": "$(1 - x)y = \\dfrac{18x - 5x^{2}}{1 - x}$",
                  "reason": "Taking out a common factor: $y - xy = (1 - x)y$."
                },
                {
                  "step": "$y = \\dfrac{18x - 5x^{2}}{(1 - x)^{2}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $1 - x$, which is not $0$ as $|x| < 1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t228-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (2k + 1)^{2}\\left(\\dfrac{5}{6}\\right)^{k}$, given that the series converges.",
            "lines": [
              {
                "step": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (2k + 1)^{2}\\left(\\dfrac{5}{6}\\right)^{k}$, given that the series converges.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Write $y$ for the sum: $y = 9 \\cdot \\dfrac{5}{6} + 25 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 49 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + 81 \\cdot \\left(\\dfrac{5}{6}\\right)^{4} + \\dots$.",
                "reason": "Sigma notation: the term is written out for $k = 1, 2, 3, 4$ and on."
              },
              {
                "step": "$\\dfrac{5}{6}y = 9 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 25 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + 49 \\cdot \\left(\\dfrac{5}{6}\\right)^{4} + \\dots$",
                "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $\\dfrac{5}{6}$, so the sum is too."
              },
              {
                "step": "$y - \\dfrac{5}{6}y = 9 \\cdot \\dfrac{5}{6} + 16 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 24 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + 32 \\cdot \\left(\\dfrac{5}{6}\\right)^{4} + \\dots$",
                "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, and from the second power on the coefficients are $(2k + 1)^{2} - (2k - 1)^{2} = 8k$."
              },
              {
                "step": "$\\dfrac{5}{6}\\left(y - \\dfrac{5}{6}y\\right) = 9 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 16 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + 24 \\cdot \\left(\\dfrac{5}{6}\\right)^{4} + \\dots$",
                "reason": "A limit passes through sums, products and quotients: each partial sum of line 4 is multiplied by $\\dfrac{5}{6}$, so the sum is too."
              },
              {
                "step": "$\\left(y - \\dfrac{5}{6}y\\right) - \\dfrac{5}{6}\\left(y - \\dfrac{5}{6}y\\right) = 9 \\cdot \\dfrac{5}{6} + 7 \\cdot \\left(\\dfrac{5}{6}\\right)^{2} + 8 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + 8 \\cdot \\left(\\dfrac{5}{6}\\right)^{4} + \\dots$",
                "reason": "Multiply by the ratio and subtract: line 4 is an arithmetico-geometric series from its second term on, so line 5 is taken from line 4, and each power from the third on is left with $8$."
              },
              {
                "step": "$8 \\cdot \\left(\\dfrac{5}{6}\\right)^{3} + 8 \\cdot \\left(\\dfrac{5}{6}\\right)^{4} + \\dots = \\dfrac{\\frac{125}{27}}{1 - \\frac{5}{6}}$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{125}{27}$ and $r = \\dfrac{5}{6}$."
              },
              {
                "step": "$\\dfrac{\\frac{125}{27}}{1 - \\frac{5}{6}} = \\dfrac{250}{9}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $216$."
              },
              {
                "step": "$\\left(y - \\dfrac{5}{6}y\\right) - \\dfrac{5}{6}\\left(y - \\dfrac{5}{6}y\\right) = \\dfrac{1445}{36}$",
                "reason": "The general addition formula, from arithmetic: line 8 replaces the series in line 6, and $\\dfrac{15}{2} + \\dfrac{175}{36} + \\dfrac{250}{9} = \\dfrac{1445}{36}$."
              },
              {
                "step": "$\\left(1 - \\dfrac{5}{6}\\right)\\left(y - \\dfrac{5}{6}y\\right) = \\dfrac{1445}{36}$",
                "reason": "Taking out a common factor: $\\left(y - \\dfrac{5}{6}y\\right) - \\dfrac{5}{6}\\left(y - \\dfrac{5}{6}y\\right) = \\left(1 - \\dfrac{5}{6}\\right)\\left(y - \\dfrac{5}{6}y\\right)$."
              },
              {
                "step": "$\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{6}\\right)y = \\dfrac{1445}{36}$",
                "reason": "Taking out a common factor: $y - \\dfrac{5}{6}y = \\left(1 - \\dfrac{5}{6}\\right)y$ inside the bracket of line 10."
              },
              {
                "step": "$y = 1445$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{6}\\right) = \\dfrac{1}{36}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k - 2)^{2}\\left(\\dfrac{6}{7}\\right)^{k}$, given that the series converges.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "12834",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k - 2)^{2}\\left(\\dfrac{6}{7}\\right)^{k}$, given that the series converges.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 9 \\cdot \\dfrac{6}{7} + 64 \\cdot \\left(\\dfrac{6}{7}\\right)^{2} + 169 \\cdot \\left(\\dfrac{6}{7}\\right)^{3} + 324 \\cdot \\left(\\dfrac{6}{7}\\right)^{4} + \\dots$.",
                  "reason": "Sigma notation: the term is written out for $k = 1, 2, 3, 4$ and on."
                },
                {
                  "step": "$\\dfrac{6}{7}y = 9 \\cdot \\left(\\dfrac{6}{7}\\right)^{2} + 64 \\cdot \\left(\\dfrac{6}{7}\\right)^{3} + 169 \\cdot \\left(\\dfrac{6}{7}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $\\dfrac{6}{7}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{6}{7}y = 9 \\cdot \\dfrac{6}{7} + 55 \\cdot \\left(\\dfrac{6}{7}\\right)^{2} + 105 \\cdot \\left(\\dfrac{6}{7}\\right)^{3} + 155 \\cdot \\left(\\dfrac{6}{7}\\right)^{4} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, and from the second power on the coefficients are $(5k - 2)^{2} - (5k - 7)^{2} = 50k - 45$."
                },
                {
                  "step": "$\\dfrac{6}{7}\\left(y - \\dfrac{6}{7}y\\right) = 9 \\cdot \\left(\\dfrac{6}{7}\\right)^{2} + 55 \\cdot \\left(\\dfrac{6}{7}\\right)^{3} + 105 \\cdot \\left(\\dfrac{6}{7}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 4 is multiplied by $\\dfrac{6}{7}$, so the sum is too."
                },
                {
                  "step": "$\\left(y - \\dfrac{6}{7}y\\right) - \\dfrac{6}{7}\\left(y - \\dfrac{6}{7}y\\right) = 9 \\cdot \\dfrac{6}{7} + 46 \\cdot \\left(\\dfrac{6}{7}\\right)^{2} + 50 \\cdot \\left(\\dfrac{6}{7}\\right)^{3} + 50 \\cdot \\left(\\dfrac{6}{7}\\right)^{4} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 4 is an arithmetico-geometric series from its second term on, so line 5 is taken from line 4, and each power from the third on is left with $50$."
                },
                {
                  "step": "$50 \\cdot \\left(\\dfrac{6}{7}\\right)^{3} + 50 \\cdot \\left(\\dfrac{6}{7}\\right)^{4} + \\dots = \\dfrac{\\frac{10{,}800}{343}}{1 - \\frac{6}{7}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{10{,}800}{343}$ and $r = \\dfrac{6}{7}$."
                },
                {
                  "step": "$\\dfrac{\\frac{10{,}800}{343}}{1 - \\frac{6}{7}} = \\dfrac{10{,}800}{49}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $343$."
                },
                {
                  "step": "$\\left(y - \\dfrac{6}{7}y\\right) - \\dfrac{6}{7}\\left(y - \\dfrac{6}{7}y\\right) = \\dfrac{12{,}834}{49}$",
                  "reason": "The general addition formula, from arithmetic: line 8 replaces the series in line 6, and $\\dfrac{54}{7} + \\dfrac{1656}{49} + \\dfrac{10{,}800}{49} = \\dfrac{12{,}834}{49}$."
                },
                {
                  "step": "$\\left(1 - \\dfrac{6}{7}\\right)\\left(y - \\dfrac{6}{7}y\\right) = \\dfrac{12{,}834}{49}$",
                  "reason": "Taking out a common factor: $\\left(y - \\dfrac{6}{7}y\\right) - \\dfrac{6}{7}\\left(y - \\dfrac{6}{7}y\\right) = \\left(1 - \\dfrac{6}{7}\\right)\\left(y - \\dfrac{6}{7}y\\right)$."
                },
                {
                  "step": "$\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{7}\\right)y = \\dfrac{12{,}834}{49}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{6}{7}y = \\left(1 - \\dfrac{6}{7}\\right)y$ inside the bracket of line 10."
                },
                {
                  "step": "$y = 12{,}834$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{7}\\right) = \\dfrac{1}{49}$."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 2)^{2}\\left(\\dfrac{4}{9}\\right)^{k}$, given that the series converges.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "6772/125",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 2)^{2}\\left(\\dfrac{4}{9}\\right)^{k}$, given that the series converges.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 25 \\cdot \\dfrac{4}{9} + 64 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 121 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + 196 \\cdot \\left(\\dfrac{4}{9}\\right)^{4} + \\dots$.",
                  "reason": "Sigma notation: the term is written out for $k = 1, 2, 3, 4$ and on."
                },
                {
                  "step": "$\\dfrac{4}{9}y = 25 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 64 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + 121 \\cdot \\left(\\dfrac{4}{9}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $\\dfrac{4}{9}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{4}{9}y = 25 \\cdot \\dfrac{4}{9} + 39 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 57 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + 75 \\cdot \\left(\\dfrac{4}{9}\\right)^{4} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, and from the second power on the coefficients are $(3k + 2)^{2} - (3k - 1)^{2} = 18k + 3$."
                },
                {
                  "step": "$\\dfrac{4}{9}\\left(y - \\dfrac{4}{9}y\\right) = 25 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 39 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + 57 \\cdot \\left(\\dfrac{4}{9}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 4 is multiplied by $\\dfrac{4}{9}$, so the sum is too."
                },
                {
                  "step": "$\\left(y - \\dfrac{4}{9}y\\right) - \\dfrac{4}{9}\\left(y - \\dfrac{4}{9}y\\right) = 25 \\cdot \\dfrac{4}{9} + 14 \\cdot \\left(\\dfrac{4}{9}\\right)^{2} + 18 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + 18 \\cdot \\left(\\dfrac{4}{9}\\right)^{4} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 4 is an arithmetico-geometric series from its second term on, so line 5 is taken from line 4, and each power from the third on is left with $18$."
                },
                {
                  "step": "$18 \\cdot \\left(\\dfrac{4}{9}\\right)^{3} + 18 \\cdot \\left(\\dfrac{4}{9}\\right)^{4} + \\dots = \\dfrac{\\frac{128}{81}}{1 - \\frac{4}{9}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{128}{81}$ and $r = \\dfrac{4}{9}$."
                },
                {
                  "step": "$\\dfrac{\\frac{128}{81}}{1 - \\frac{4}{9}} = \\dfrac{128}{45}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $729$."
                },
                {
                  "step": "$\\left(y - \\dfrac{4}{9}y\\right) - \\dfrac{4}{9}\\left(y - \\dfrac{4}{9}y\\right) = \\dfrac{6772}{405}$",
                  "reason": "The general addition formula, from arithmetic: line 8 replaces the series in line 6, and $\\dfrac{100}{9} + \\dfrac{224}{81} + \\dfrac{128}{45} = \\dfrac{6772}{405}$."
                },
                {
                  "step": "$\\left(1 - \\dfrac{4}{9}\\right)\\left(y - \\dfrac{4}{9}y\\right) = \\dfrac{6772}{405}$",
                  "reason": "Taking out a common factor: $\\left(y - \\dfrac{4}{9}y\\right) - \\dfrac{4}{9}\\left(y - \\dfrac{4}{9}y\\right) = \\left(1 - \\dfrac{4}{9}\\right)\\left(y - \\dfrac{4}{9}y\\right)$."
                },
                {
                  "step": "$\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{9}\\right)y = \\dfrac{6772}{405}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{4}{9}y = \\left(1 - \\dfrac{4}{9}\\right)y$ inside the bracket of line 10."
                },
                {
                  "step": "$y = \\dfrac{6772}{125}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{9}\\right) = \\dfrac{25}{81}$."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k - 1)^{2}\\left(\\dfrac{8}{9}\\right)^{k}$, given that the series converges.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "29888",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k - 1)^{2}\\left(\\dfrac{8}{9}\\right)^{k}$, given that the series converges.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $y$ for the sum: $y = 16 \\cdot \\dfrac{8}{9} + 81 \\cdot \\left(\\dfrac{8}{9}\\right)^{2} + 196 \\cdot \\left(\\dfrac{8}{9}\\right)^{3} + 361 \\cdot \\left(\\dfrac{8}{9}\\right)^{4} + \\dots$.",
                  "reason": "Sigma notation: the term is written out for $k = 1, 2, 3, 4$ and on."
                },
                {
                  "step": "$\\dfrac{8}{9}y = 16 \\cdot \\left(\\dfrac{8}{9}\\right)^{2} + 81 \\cdot \\left(\\dfrac{8}{9}\\right)^{3} + 196 \\cdot \\left(\\dfrac{8}{9}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 2 is multiplied by $\\dfrac{8}{9}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{8}{9}y = 16 \\cdot \\dfrac{8}{9} + 65 \\cdot \\left(\\dfrac{8}{9}\\right)^{2} + 115 \\cdot \\left(\\dfrac{8}{9}\\right)^{3} + 165 \\cdot \\left(\\dfrac{8}{9}\\right)^{4} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 3 is taken from line 2, and from the second power on the coefficients are $(5k - 1)^{2} - (5k - 6)^{2} = 50k - 35$."
                },
                {
                  "step": "$\\dfrac{8}{9}\\left(y - \\dfrac{8}{9}y\\right) = 16 \\cdot \\left(\\dfrac{8}{9}\\right)^{2} + 65 \\cdot \\left(\\dfrac{8}{9}\\right)^{3} + 115 \\cdot \\left(\\dfrac{8}{9}\\right)^{4} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 4 is multiplied by $\\dfrac{8}{9}$, so the sum is too."
                },
                {
                  "step": "$\\left(y - \\dfrac{8}{9}y\\right) - \\dfrac{8}{9}\\left(y - \\dfrac{8}{9}y\\right) = 16 \\cdot \\dfrac{8}{9} + 49 \\cdot \\left(\\dfrac{8}{9}\\right)^{2} + 50 \\cdot \\left(\\dfrac{8}{9}\\right)^{3} + 50 \\cdot \\left(\\dfrac{8}{9}\\right)^{4} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 4 is an arithmetico-geometric series from its second term on, so line 5 is taken from line 4, and each power from the third on is left with $50$."
                },
                {
                  "step": "$50 \\cdot \\left(\\dfrac{8}{9}\\right)^{3} + 50 \\cdot \\left(\\dfrac{8}{9}\\right)^{4} + \\dots = \\dfrac{\\frac{25{,}600}{729}}{1 - \\frac{8}{9}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{25{,}600}{729}$ and $r = \\dfrac{8}{9}$."
                },
                {
                  "step": "$\\dfrac{\\frac{25{,}600}{729}}{1 - \\frac{8}{9}} = \\dfrac{25{,}600}{81}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $729$."
                },
                {
                  "step": "$\\left(y - \\dfrac{8}{9}y\\right) - \\dfrac{8}{9}\\left(y - \\dfrac{8}{9}y\\right) = \\dfrac{29{,}888}{81}$",
                  "reason": "The general addition formula, from arithmetic: line 8 replaces the series in line 6, and $\\dfrac{128}{9} + \\dfrac{3136}{81} + \\dfrac{25{,}600}{81} = \\dfrac{29{,}888}{81}$."
                },
                {
                  "step": "$\\left(1 - \\dfrac{8}{9}\\right)\\left(y - \\dfrac{8}{9}y\\right) = \\dfrac{29{,}888}{81}$",
                  "reason": "Taking out a common factor: $\\left(y - \\dfrac{8}{9}y\\right) - \\dfrac{8}{9}\\left(y - \\dfrac{8}{9}y\\right) = \\left(1 - \\dfrac{8}{9}\\right)\\left(y - \\dfrac{8}{9}y\\right)$."
                },
                {
                  "step": "$\\left(1 - \\dfrac{8}{9}\\right)\\left(1 - \\dfrac{8}{9}\\right)y = \\dfrac{29{,}888}{81}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{8}{9}y = \\left(1 - \\dfrac{8}{9}\\right)y$ inside the bracket of line 10."
                },
                {
                  "step": "$y = 29{,}888$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\left(1 - \\dfrac{8}{9}\\right)\\left(1 - \\dfrac{8}{9}\\right) = \\dfrac{1}{81}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t228-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the value of $\\log_{3} \\sqrt[13]{3^{3}} + \\log_{3} \\sqrt[169]{3^{6}} + \\log_{3} \\sqrt[2197]{3^{9}} + \\dots$.",
            "lines": [
              {
                "step": "Find the value of $\\log_{3} \\sqrt[13]{3^{3}} + \\log_{3} \\sqrt[169]{3^{6}} + \\log_{3} \\sqrt[2197]{3^{9}} + \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The $k$th term is $\\log_{3} \\sqrt[13^{k}]{3^{3k}} = \\log_{3} 3^{3k/13^{k}}$.",
                "reason": "Power law: the root $\\sqrt[13^{k}]{\\ }$ is the power $\\dfrac{1}{13^{k}}$, and $(3^{3k})^{1/13^{k}} = 3^{3k/13^{k}}$."
              },
              {
                "step": "The $k$th term is $\\dfrac{3k}{13^{k}}$.",
                "reason": "Logarithm: $\\log_a a^p = p$, with $a = 3$."
              },
              {
                "step": "Write $y$ for the sum: $y = \\dfrac{3}{13} + \\dfrac{6}{13^{2}} + \\dfrac{9}{13^{3}} + \\dfrac{12}{13^{4}} + \\dots$.",
                "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $\\dfrac{1}{13}$, whose size is less than $1$, so the series converges."
              },
              {
                "step": "$\\dfrac{y}{13} = \\dfrac{3}{13^{2}} + \\dfrac{6}{13^{3}} + \\dfrac{9}{13^{4}} + \\dots$",
                "reason": "A limit passes through sums, products and quotients: each partial sum of line 4 is multiplied by $\\dfrac{1}{13}$, so the sum is too."
              },
              {
                "step": "$y - \\dfrac{y}{13} = \\dfrac{3}{13} + \\dfrac{3}{13^{2}} + \\dfrac{3}{13^{3}} + \\dots$",
                "reason": "Multiply by the ratio and subtract: line 5 is taken from line 4, and each power is left with $3$."
              },
              {
                "step": "$\\dfrac{3}{13} + \\dfrac{3}{13^{2}} + \\dots = \\dfrac{\\frac{3}{13}}{1 - \\frac{1}{13}}$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{3}{13}$ and $r = \\dfrac{1}{13}$."
              },
              {
                "step": "$\\dfrac{\\frac{3}{13}}{1 - \\frac{1}{13}} = \\dfrac{1}{4}$",
                "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $13$."
              },
              {
                "step": "$y - \\dfrac{y}{13} = \\dfrac{1}{4}$",
                "reason": "Substituting a value: lines 7 and 8 replace the series in line 6."
              },
              {
                "step": "$\\dfrac{12}{13}y = \\dfrac{1}{4}$",
                "reason": "Taking out a common factor: $y - \\dfrac{y}{13} = \\left(1 - \\dfrac{1}{13}\\right)y$."
              },
              {
                "step": "$y = \\dfrac{13}{48}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{12}{13}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $\\log_{5} \\sqrt[16]{5^{9}} + \\log_{5} \\sqrt[256]{5^{18}} + \\log_{5} \\sqrt[4096]{5^{27}} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "16/25",
              "lines": [
                {
                  "step": "Find the value of $\\log_{5} \\sqrt[16]{5^{9}} + \\log_{5} \\sqrt[256]{5^{18}} + \\log_{5} \\sqrt[4096]{5^{27}} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $k$th term is $\\log_{5} \\sqrt[16^{k}]{5^{9k}} = \\log_{5} 5^{9k/16^{k}}$.",
                  "reason": "Power law: the root $\\sqrt[16^{k}]{\\ }$ is the power $\\dfrac{1}{16^{k}}$, and $(5^{9k})^{1/16^{k}} = 5^{9k/16^{k}}$."
                },
                {
                  "step": "The $k$th term is $\\dfrac{9k}{16^{k}}$.",
                  "reason": "Logarithm: $\\log_a a^p = p$, with $a = 5$."
                },
                {
                  "step": "Write $y$ for the sum: $y = \\dfrac{9}{16} + \\dfrac{18}{16^{2}} + \\dfrac{27}{16^{3}} + \\dfrac{36}{16^{4}} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $\\dfrac{1}{16}$, whose size is less than $1$, so the series converges."
                },
                {
                  "step": "$\\dfrac{y}{16} = \\dfrac{9}{16^{2}} + \\dfrac{18}{16^{3}} + \\dfrac{27}{16^{4}} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 4 is multiplied by $\\dfrac{1}{16}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{y}{16} = \\dfrac{9}{16} + \\dfrac{9}{16^{2}} + \\dfrac{9}{16^{3}} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 5 is taken from line 4, and each power is left with $9$."
                },
                {
                  "step": "$\\dfrac{9}{16} + \\dfrac{9}{16^{2}} + \\dots = \\dfrac{\\frac{9}{16}}{1 - \\frac{1}{16}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{9}{16}$ and $r = \\dfrac{1}{16}$."
                },
                {
                  "step": "$\\dfrac{\\frac{9}{16}}{1 - \\frac{1}{16}} = \\dfrac{3}{5}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $16$."
                },
                {
                  "step": "$y - \\dfrac{y}{16} = \\dfrac{3}{5}$",
                  "reason": "Substituting a value: lines 7 and 8 replace the series in line 6."
                },
                {
                  "step": "$\\dfrac{15}{16}y = \\dfrac{3}{5}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{y}{16} = \\left(1 - \\dfrac{1}{16}\\right)y$."
                },
                {
                  "step": "$y = \\dfrac{16}{25}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{15}{16}$."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\log_{7} \\sqrt[19]{7^{8}} + \\log_{7} \\sqrt[361]{7^{16}} + \\log_{7} \\sqrt[6859]{7^{24}} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "38/81",
              "lines": [
                {
                  "step": "Find the value of $\\log_{7} \\sqrt[19]{7^{8}} + \\log_{7} \\sqrt[361]{7^{16}} + \\log_{7} \\sqrt[6859]{7^{24}} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $k$th term is $\\log_{7} \\sqrt[19^{k}]{7^{8k}} = \\log_{7} 7^{8k/19^{k}}$.",
                  "reason": "Power law: the root $\\sqrt[19^{k}]{\\ }$ is the power $\\dfrac{1}{19^{k}}$, and $(7^{8k})^{1/19^{k}} = 7^{8k/19^{k}}$."
                },
                {
                  "step": "The $k$th term is $\\dfrac{8k}{19^{k}}$.",
                  "reason": "Logarithm: $\\log_a a^p = p$, with $a = 7$."
                },
                {
                  "step": "Write $y$ for the sum: $y = \\dfrac{8}{19} + \\dfrac{16}{19^{2}} + \\dfrac{24}{19^{3}} + \\dfrac{32}{19^{4}} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $\\dfrac{1}{19}$, whose size is less than $1$, so the series converges."
                },
                {
                  "step": "$\\dfrac{y}{19} = \\dfrac{8}{19^{2}} + \\dfrac{16}{19^{3}} + \\dfrac{24}{19^{4}} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 4 is multiplied by $\\dfrac{1}{19}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{y}{19} = \\dfrac{8}{19} + \\dfrac{8}{19^{2}} + \\dfrac{8}{19^{3}} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 5 is taken from line 4, and each power is left with $8$."
                },
                {
                  "step": "$\\dfrac{8}{19} + \\dfrac{8}{19^{2}} + \\dots = \\dfrac{\\frac{8}{19}}{1 - \\frac{1}{19}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{8}{19}$ and $r = \\dfrac{1}{19}$."
                },
                {
                  "step": "$\\dfrac{\\frac{8}{19}}{1 - \\frac{1}{19}} = \\dfrac{4}{9}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $19$."
                },
                {
                  "step": "$y - \\dfrac{y}{19} = \\dfrac{4}{9}$",
                  "reason": "Substituting a value: lines 7 and 8 replace the series in line 6."
                },
                {
                  "step": "$\\dfrac{18}{19}y = \\dfrac{4}{9}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{y}{19} = \\left(1 - \\dfrac{1}{19}\\right)y$."
                },
                {
                  "step": "$y = \\dfrac{38}{81}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{18}{19}$."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\log_{6} \\sqrt[11]{6^{5}} + \\log_{6} \\sqrt[121]{6^{10}} + \\log_{6} \\sqrt[1331]{6^{15}} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "11/20",
              "lines": [
                {
                  "step": "Find the value of $\\log_{6} \\sqrt[11]{6^{5}} + \\log_{6} \\sqrt[121]{6^{10}} + \\log_{6} \\sqrt[1331]{6^{15}} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $k$th term is $\\log_{6} \\sqrt[11^{k}]{6^{5k}} = \\log_{6} 6^{5k/11^{k}}$.",
                  "reason": "Power law: the root $\\sqrt[11^{k}]{\\ }$ is the power $\\dfrac{1}{11^{k}}$, and $(6^{5k})^{1/11^{k}} = 6^{5k/11^{k}}$."
                },
                {
                  "step": "The $k$th term is $\\dfrac{5k}{11^{k}}$.",
                  "reason": "Logarithm: $\\log_a a^p = p$, with $a = 6$."
                },
                {
                  "step": "Write $y$ for the sum: $y = \\dfrac{5}{11} + \\dfrac{10}{11^{2}} + \\dfrac{15}{11^{3}} + \\dfrac{20}{11^{4}} + \\dots$.",
                  "reason": "Arithmetico-geometric series converges for $|r| < 1$: the common ratio is $\\dfrac{1}{11}$, whose size is less than $1$, so the series converges."
                },
                {
                  "step": "$\\dfrac{y}{11} = \\dfrac{5}{11^{2}} + \\dfrac{10}{11^{3}} + \\dfrac{15}{11^{4}} + \\dots$",
                  "reason": "A limit passes through sums, products and quotients: each partial sum of line 4 is multiplied by $\\dfrac{1}{11}$, so the sum is too."
                },
                {
                  "step": "$y - \\dfrac{y}{11} = \\dfrac{5}{11} + \\dfrac{5}{11^{2}} + \\dfrac{5}{11^{3}} + \\dots$",
                  "reason": "Multiply by the ratio and subtract: line 5 is taken from line 4, and each power is left with $5$."
                },
                {
                  "step": "$\\dfrac{5}{11} + \\dfrac{5}{11^{2}} + \\dots = \\dfrac{\\frac{5}{11}}{1 - \\frac{1}{11}}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{5}{11}$ and $r = \\dfrac{1}{11}$."
                },
                {
                  "step": "$\\dfrac{\\frac{5}{11}}{1 - \\frac{1}{11}} = \\dfrac{1}{2}$",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $11$."
                },
                {
                  "step": "$y - \\dfrac{y}{11} = \\dfrac{1}{2}$",
                  "reason": "Substituting a value: lines 7 and 8 replace the series in line 6."
                },
                {
                  "step": "$\\dfrac{10}{11}y = \\dfrac{1}{2}$",
                  "reason": "Taking out a common factor: $y - \\dfrac{y}{11} = \\left(1 - \\dfrac{1}{11}\\right)y$."
                },
                {
                  "step": "$y = \\dfrac{11}{20}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{10}{11}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t228-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (4k + 6) \\cdot 5^{k}$, and write that line right.",
            "given": [
              "$y = 10 \\cdot 5 + 14 \\cdot 5^{2} + 18 \\cdot 5^{3}$",
              "$5y = 10 \\cdot 5^{2} + 14 \\cdot 5^{3} + 18 \\cdot 5^{4}$",
              "$5y - y = -10 \\cdot 5 + 4 \\cdot 5^{2} + 4 \\cdot 5^{3} + 18 \\cdot 5^{4}$",
              "$4 \\cdot 5^{2} + 4 \\cdot 5^{3} = 600$",
              "$5y - y = -50 + 600 + 11{,}250$",
              "$4y = 11{,}800$",
              "$y = 2950$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (4k + 6) \\cdot 5^{k}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 gives the powers from $5^{2}$ to $5^{3}$ the coefficient $4$, although taking line 2 from line 3 leaves $-4$.",
                "reason": "A sign lost: each such power has the coefficient of line 3 minus the coefficient of line 2, as $10 - 14 = -4$, and the minus sign was dropped."
              },
              {
                "step": "Lines 1 and 2 are right, and each line after line 3 follows from the line before it as it is written, so line 3 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: line 2 is line 1 times the common ratio, and every later line rests on the lines before it."
              },
              {
                "step": "Line 3 written right is $5y - y = -10 \\cdot 5 - 4 \\cdot 5^{2} - 4 \\cdot 5^{3} + 18 \\cdot 5^{4}$.",
                "reason": "Worked by the same rule with every sign kept, the line is true: it leads on to $y = 2650$, the value of the sum."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (6k + 2) \\cdot 5^{k}$, and write that line right.",
              "given": [
                "$y = 8 \\cdot 5 + 14 \\cdot 5^{2} + 20 \\cdot 5^{3}$",
                "$5y = 8 \\cdot 5^{2} + 14 \\cdot 5^{3} + 20 \\cdot 5^{4}$",
                "$5y - y = -8 \\cdot 5 - 6 \\cdot 5^{2} - 6 \\cdot 5^{3} + 20 \\cdot 5^{4}$",
                "$6 \\cdot 5^{2} + 6 \\cdot 5^{3} = 900$",
                "$5y - y = -40 + 900 + 12{,}500$",
                "$4y = 13{,}360$",
                "$y = 3340$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 5*y-y = -40-900+12500",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (6k + 2) \\cdot 5^{k}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 adds $900$, although line 3 takes the middle terms away.",
                  "reason": "A sign lost: line 4 puts $900$ in place of the middle terms of line 3, which carry minus signs, so $900$ is taken away."
                },
                {
                  "step": "Lines 1 to 4 are right, and each line after line 5 follows from the line before it as it is written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: line 2 is line 1 times the common ratio, and every later line rests on the lines before it."
                },
                {
                  "step": "Line 5 written right is $5y - y = -40 - 900 + 12{,}500$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: it leads on to $y = 2890$, the value of the sum."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (2k + 2) \\cdot 9^{k}$, and write that line right.",
              "given": [
                "$y = 4 \\cdot 9 + 6 \\cdot 9^{2} + 8 \\cdot 9^{3} + 10 \\cdot 9^{4}$",
                "$9y = 4 \\cdot 9^{2} + 6 \\cdot 9^{3} + 8 \\cdot 9^{4} + 10 \\cdot 9^{5}$",
                "$9y - y = -4 \\cdot 9 - 2 \\cdot 9^{2} - 2 \\cdot 9^{3} - 2 \\cdot 9^{4} + 10 \\cdot 9^{5}$",
                "$2 \\cdot 9^{2} + 2 \\cdot 9^{3} + 2 \\cdot 9^{4} = 14{,}742$",
                "$9y - y = -36 - 14{,}742 + 590{,}490$",
                "$8y = 575{,}784$",
                "$y = 71{,}973$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 8*y = 575712",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (2k + 2) \\cdot 9^{k}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 adds up the right side of line 5 as $575{,}784$, although $-36 - 14{,}742 + 590{,}490 = 575{,}712$.",
                  "reason": "A sign lost: the first number on the right of line 5, $-36$, was added as $+36$."
                },
                {
                  "step": "Lines 1 to 5 are right, and each line after line 6 follows from the line before it as it is written, so line 6 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: line 2 is line 1 times the common ratio, and every later line rests on the lines before it."
                },
                {
                  "step": "Line 6 written right is $8y = 575{,}712$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: it leads on to $y = 71{,}964$, the value of the sum."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (2k + 4) \\cdot 7^{k}$, and write that line right.",
              "given": [
                "$y = 6 \\cdot 7 + 8 \\cdot 7^{2} + 10 \\cdot 7^{3}$",
                "$7y = 6 \\cdot 7^{2} + 8 \\cdot 7^{3} + 10 \\cdot 7^{4}$",
                "$7y - y = 6 \\cdot 7 - 2 \\cdot 7^{2} - 2 \\cdot 7^{3} + 10 \\cdot 7^{4}$",
                "$2 \\cdot 7^{2} + 2 \\cdot 7^{3} = 784$",
                "$7y - y = 42 - 784 + 24{,}010$",
                "$6y = 23{,}268$",
                "$y = 3878$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 7*y-y = -6*7-2*7^2-2*7^3+10*7^4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (2k + 4) \\cdot 7^{k}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives the first term $6 \\cdot 7$ a plus sign, although it comes from line 2 alone, which is taken away.",
                  "reason": "A sign lost: line 3 has no term in $7$ to the first power, so the term $6 \\cdot 7$ of line 2 is taken away and keeps a minus sign."
                },
                {
                  "step": "Lines 1 and 2 are right, and each line after line 3 follows from the line before it as it is written, so line 3 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: line 2 is line 1 times the common ratio, and every later line rests on the lines before it."
                },
                {
                  "step": "Line 3 written right is $7y - y = -6 \\cdot 7 - 2 \\cdot 7^{2} - 2 \\cdot 7^{3} + 10 \\cdot 7^{4}$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: it leads on to $y = 3864$, the value of the sum."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t228-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $4$ terms of the series made by multiplying each term of the arithmetic series $11 + 18 + 25 + \\dots$ by the matching term of the geometric series $6 + 24 + 96 + \\dots$.",
            "lines": [
              {
                "step": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $4$ terms of the series made by multiplying each term of the arithmetic series $11 + 18 + 25 + \\dots$ by the matching term of the geometric series $6 + 24 + 96 + \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first factors are $11$, $18$, $25$, $32$.",
                "reason": "Arithmetic sequence: each first factor is the one before it plus the common difference $7$."
              },
              {
                "step": "The second factors are $6$, $24$, $96$, $384$.",
                "reason": "Common ratio: each second factor is the one before it times $4$."
              },
              {
                "step": "The terms are $11 \\cdot 6$, $18 \\cdot 24$, $25 \\cdot 96$, $32 \\cdot 384$.",
                "reason": "Arithmetico-geometric series: each term is a term of the arithmetic sequence times the matching term of the geometric sequence."
              },
              {
                "step": "$y = 11 \\cdot 6 + 18 \\cdot 24 + 25 \\cdot 96 + 32 \\cdot 384$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and the sum is left as it is, as a Translate is never solved."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $3$ products, whose first factors start at $4$ and go up by $7$ each time, and whose second factors start at $6$ and are multiplied by $4$ each time.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 4*6+11*24+18*96",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $3$ products, whose first factors start at $4$ and go up by $7$ each time, and whose second factors start at $6$ and are multiplied by $4$ each time.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first factors are $4$, $11$, $18$.",
                  "reason": "Arithmetic sequence: each first factor is the one before it plus the common difference $7$."
                },
                {
                  "step": "The second factors are $6$, $24$, $96$.",
                  "reason": "Common ratio: each second factor is the one before it times $4$."
                },
                {
                  "step": "The terms are $4 \\cdot 6$, $11 \\cdot 24$, $18 \\cdot 96$.",
                  "reason": "Arithmetico-geometric series: each term is a term of the arithmetic sequence times the matching term of the geometric sequence."
                },
                {
                  "step": "$y = 4 \\cdot 6 + 11 \\cdot 24 + 18 \\cdot 96$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and the sum is left as it is, as a Translate is never solved."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $10$ and goes up by $2$, times the matching terms of the geometric sequence that starts at $9$ with common ratio $6$, gives a total, and the number $y$ is that total.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 10*9+12*54+14*324",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $10$ and goes up by $2$, times the matching terms of the geometric sequence that starts at $9$ with common ratio $6$, gives a total, and the number $y$ is that total.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first factors are $10$, $12$, $14$.",
                  "reason": "Arithmetic sequence: each first factor is the one before it plus the common difference $2$."
                },
                {
                  "step": "The second factors are $9$, $54$, $324$.",
                  "reason": "Common ratio: each second factor is the one before it times $6$."
                },
                {
                  "step": "The terms are $10 \\cdot 9$, $12 \\cdot 54$, $14 \\cdot 324$.",
                  "reason": "Arithmetico-geometric series: each term is a term of the arithmetic sequence times the matching term of the geometric sequence."
                },
                {
                  "step": "$y = 10 \\cdot 9 + 12 \\cdot 54 + 14 \\cdot 324$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and the sum is left as it is, as a Translate is never solved."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $3$ terms of the series made by multiplying each term of the arithmetic series $13 + 10 + 7 + \\dots$ by the matching term of the geometric series $8 + 16 + 32 + \\dots$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 13*8+10*16+7*32",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $3$ terms of the series made by multiplying each term of the arithmetic series $13 + 10 + 7 + \\dots$ by the matching term of the geometric series $8 + 16 + 32 + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first factors are $13$, $10$, $7$.",
                  "reason": "Arithmetic sequence: each first factor is the one before it plus the common difference $-3$."
                },
                {
                  "step": "The second factors are $8$, $16$, $32$.",
                  "reason": "Common ratio: each second factor is the one before it times $2$."
                },
                {
                  "step": "The terms are $13 \\cdot 8$, $10 \\cdot 16$, $7 \\cdot 32$.",
                  "reason": "Arithmetico-geometric series: each term is a term of the arithmetic sequence times the matching term of the geometric sequence."
                },
                {
                  "step": "$y = 13 \\cdot 8 + 10 \\cdot 16 + 7 \\cdot 32$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and the sum is left as it is, as a Translate is never solved."
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
      "id": "t228-p1",
      "method": "direct proof",
      "statement": "For a number $r$ with $|r| < 1$, the infinite series $r + 2r^{2} + 3r^{3} + \\dots$, with terms $kr^{k}$, has sum $\\dfrac{r}{(1 - r)^{2}}$.",
      "idea": "Multiply the series by $r$: each power moves one place along. Taking the new series from the old one, each coefficient $k$ meets $k - 1$, so every term is left with coefficient $1$, and what remains is the geometric series $r + r^{2} + r^{3} + \\dots$, whose sum is known. Dividing by $1 - r$ gives the sum.",
      "lines": [
        {
          "line": "Write $y$ for the sum: $y = r + 2r^{2} + 3r^{3} + \\dots$.",
          "reason": "Arithmetico-geometric series converges for $|r| < 1$: the factors $1, 2, 3, \\dots$ form an arithmetic sequence and the common ratio $r$ has $|r| < 1$, so the series converges."
        },
        {
          "line": "So $ry = r^{2} + 2r^{3} + 3r^{4} + \\dots$.",
          "reason": "A limit passes through sums, products and quotients: each partial sum of line 1 is multiplied by $r$, so the sum is too."
        },
        {
          "line": "So $y - ry = r + (2 - 1)r^{2} + (3 - 2)r^{3} + \\dots$.",
          "reason": "A limit passes through sums, products and quotients: the partial sum of $n$ terms of line 1 less the partial sum of $n - 1$ terms of line 2 pairs each power of $r$, and has $y - ry$ as its limit."
        },
        {
          "line": "So $y - ry = r + r^{2} + r^{3} + \\dots$.",
          "reason": "The addition and subtraction of integers, from arithmetic: $k - (k - 1) = 1$ for each $k$."
        },
        {
          "line": "So $y - ry = \\dfrac{r}{1 - r}$.",
          "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $r$ and common ratio $r$."
        },
        {
          "line": "So $(1 - r)y = \\dfrac{r}{1 - r}$.",
          "reason": "Taking out a common factor: $y$ comes out of the left side."
        },
        {
          "line": "The number $1 - r$ is not $0$.",
          "reason": "Absolute value, from arithmetic: $|r| < 1$ gives $r < 1$, so $1 - r > 0$."
        },
        {
          "line": "Therefore $y = \\dfrac{r}{(1 - r)^{2}}$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $1 - r$, which is not $0$ by line 7."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t228-s1",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $d$ and $r \\neq 1$ and a whole number $n$ from $2$ up, $a + (a + d)r + (a + 2d)r^{2} + \\dots + (a + (n - 1)d)r^{n-1} = \\dfrac{a(r^{n} - 1)}{r - 1} + \\dfrac{dr((n - 1)r^{n} - nr^{n-1} + 1)}{(r - 1)^{2}}$. Facts it may use: arithmetico-geometric series; multiply by the ratio and subtract; the sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$; product law; taking out a common factor; single fraction; dividing both sides by a nonzero number; the distributive law, the addition and subtraction of integers and the cancellation law, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Write $y = a + (a + d)r + (a + 2d)r^{2} + \\dots + (a + (n - 1)d)r^{n-1}$.",
            "reason": "Arithmetico-geometric series: the factors $a, a + d, \\dots, a + (n - 1)d$ form an arithmetic sequence and the powers of $r$ a geometric one with common ratio $r$."
          },
          {
            "line": "So $ry = ar + (a + d)r^{2} + \\dots + (a + (n - 2)d)r^{n-1} + (a + (n - 1)d)r^{n}$.",
            "reason": "The distributive law, from arithmetic, with the product law: both sides are multiplied by $r$, $r$ multiplies each term and raises its power by one."
          },
          {
            "line": "So $y - ry = a + dr + dr^{2} + \\dots + dr^{n-1} - (a + (n - 1)d)r^{n}$.",
            "reason": "Multiply by the ratio and subtract: line 2 is taken from line 1, each power from $r$ to $r^{n-1}$ is left with the common difference $d$, and $(a + (n - 1)d)r^{n}$ is left over."
          },
          {
            "line": "So $y - ry = a + \\dfrac{dr(r^{n-1} - 1)}{r - 1} - (a + (n - 1)d)r^{n}$.",
            "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $dr$, common ratio $r$ and $n - 1$ terms, as $r \\neq 1$."
          },
          {
            "line": "So $y - ry = a - ar^{n} + \\dfrac{dr(r^{n-1} - 1)}{r - 1} - (n - 1)dr^{n}$.",
            "reason": "The distributive law, from arithmetic: $(a + (n - 1)d)r^{n} = ar^{n} + (n - 1)dr^{n}$."
          },
          {
            "line": "So $y - ry = a(1 - r^{n}) + \\dfrac{dr(r^{n-1} - 1)}{r - 1} - (n - 1)dr^{n}$.",
            "reason": "Taking out a common factor: $a - ar^{n} = a(1 - r^{n})$."
          },
          {
            "line": "So $y - ry = a(1 - r^{n}) + \\dfrac{dr(r^{n-1} - 1) - (n - 1)dr^{n}(r - 1)}{r - 1}$.",
            "reason": "Single fraction: $(n - 1)dr^{n}$ is written as $\\dfrac{(n - 1)dr^{n}(r - 1)}{r - 1}$."
          },
          {
            "line": "So $y - ry = a(1 - r^{n}) + \\dfrac{dr^{n} - dr - (n - 1)dr^{n+1} + (n - 1)dr^{n}}{r - 1}$.",
            "reason": "The distributive law, from arithmetic, with the product law: $r \\cdot r^{n-1} = r^{n}$ and $r^{n} \\cdot r = r^{n+1}$."
          },
          {
            "line": "So $y - ry = a(1 - r^{n}) + \\dfrac{ndr^{n} - dr - (n - 1)dr^{n+1}}{r - 1}$.",
            "reason": "The distributive law, from arithmetic: $dr^{n} + (n - 1)dr^{n} = ndr^{n}$."
          },
          {
            "line": "So $y - ry = a(1 - r^{n}) - \\dfrac{dr((n - 1)r^{n} - nr^{n-1} + 1)}{r - 1}$.",
            "reason": "Taking out a common factor: $-dr$ comes out of the top, with the product law."
          },
          {
            "line": "So $(1 - r)y = a(1 - r^{n}) - \\dfrac{dr((n - 1)r^{n} - nr^{n-1} + 1)}{r - 1}$.",
            "reason": "Taking out a common factor: $y$ comes out of the left side."
          },
          {
            "line": "So $y = \\dfrac{a(1 - r^{n})}{1 - r} - \\dfrac{dr((n - 1)r^{n} - nr^{n-1} + 1)}{(r - 1)(1 - r)}$.",
            "reason": "Dividing both sides by a nonzero number: each term of both sides is divided by $1 - r$, which is not $0$ as $r \\neq 1$."
          },
          {
            "line": "Therefore $y = \\dfrac{a(r^{n} - 1)}{r - 1} + \\dfrac{dr((n - 1)r^{n} - nr^{n-1} + 1)}{(r - 1)^{2}}$.",
            "reason": "The cancellation law, from arithmetic: the top and the bottom of each fraction are multiplied by $-1$, and $-(1 - r) = r - 1$."
          }
        ]
      }
    },
    {
      "id": "t228-s2",
      "method": "direct proof",
      "statement": "Prove that for a number $x$ with $0 < x < 1$ and a whole number $n$ from $1$ up, $x + 2x^{2} + \\dots + nx^{n} < \\dfrac{x}{(1 - x)^{2}}$. Facts it may use: arithmetico-geometric series; multiply by the ratio and subtract; the sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$; taking out a common factor; single fraction; dividing both sides by a nonzero number; product law; substituting a value; the distributive law, the signs of products, multiplying by a positive number, adding the same number and the cancellation law, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Write $y = x + 2x^{2} + \\dots + nx^{n}$.",
            "reason": "Arithmetico-geometric series: the factors $1, 2, \\dots, n$ form an arithmetic sequence and the powers of $x$ a geometric one with common ratio $x$."
          },
          {
            "line": "So $xy = x^{2} + 2x^{3} + \\dots + nx^{n+1}$.",
            "reason": "The distributive law, from arithmetic, with the product law: $x$ multiplies each term and raises its power by one."
          },
          {
            "line": "So $y - xy = x + x^{2} + \\dots + x^{n} - nx^{n+1}$.",
            "reason": "Multiply by the ratio and subtract: line 2 is taken from line 1, each power from $x^{2}$ to $x^{n}$ is left with $1$, and $nx^{n+1}$ is left over."
          },
          {
            "line": "So $y - xy = \\dfrac{x(x^{n} - 1)}{x - 1} - nx^{n+1}$.",
            "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $x$, common ratio $x$ and $n$ terms, as $x \\neq 1$."
          },
          {
            "line": "So $y - xy = \\dfrac{x(1 - x^{n})}{1 - x} - nx^{n+1}$.",
            "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $-1$."
          },
          {
            "line": "So $(1 - x)y = \\dfrac{x(1 - x^{n})}{1 - x} - nx^{n+1}$.",
            "reason": "Taking out a common factor: $y$ comes out of the left side."
          },
          {
            "line": "So $(1 - x)y = \\dfrac{x(1 - x^{n}) - nx^{n+1}(1 - x)}{1 - x}$.",
            "reason": "Single fraction: $nx^{n+1}$ is written as $\\dfrac{nx^{n+1}(1 - x)}{1 - x}$."
          },
          {
            "line": "So $(1 - x)y = \\dfrac{x - x^{n+1} - nx^{n+1}(1 - x)}{1 - x}$.",
            "reason": "The distributive law, from arithmetic, with the product law: $x \\cdot x^{n} = x^{n+1}$."
          },
          {
            "line": "So $(1 - x)y = \\dfrac{x - x^{n+1}(1 + n(1 - x))}{1 - x}$.",
            "reason": "Taking out a common factor: $x^{n+1}$ comes out of the last two terms of the top."
          },
          {
            "line": "So $(1 - x)y = \\dfrac{x - x^{n+1}(n + 1 - nx)}{1 - x}$.",
            "reason": "The distributive law, from arithmetic: $1 + n(1 - x) = n + 1 - nx$."
          },
          {
            "line": "So $y = \\dfrac{x - x^{n+1}(n + 1 - nx)}{(1 - x)^{2}}$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $1 - x$, which is above $0$ as $x < 1$."
          },
          {
            "line": "The number $nx$ is below $n$.",
            "reason": "Multiplying by a positive number, from arithmetic: both sides of $x < 1$ are multiplied by $n$."
          },
          {
            "line": "The number $n + 1 - nx$ is above $0$.",
            "reason": "Adding the same number, from arithmetic: $1 - nx$ is added to both sides of line 12, giving $n + 1 - nx > 1$."
          },
          {
            "line": "The number $x^{n+1}(n + 1 - nx)$ is above $0$.",
            "reason": "Signs of products, from arithmetic: $x^{n+1} > 0$ as $x > 0$, and line 13."
          },
          {
            "line": "So $x - x^{n+1}(n + 1 - nx) < x$.",
            "reason": "Adding the same number, from arithmetic: $x$ is added to both sides of $-x^{n+1}(n + 1 - nx) < 0$, from line 14."
          },
          {
            "line": "So $\\dfrac{x - x^{n+1}(n + 1 - nx)}{(1 - x)^{2}} < \\dfrac{x}{(1 - x)^{2}}$.",
            "reason": "Multiplying by a positive number, from arithmetic: both sides of line 15 are divided by $(1 - x)^{2}$, which is above $0$."
          },
          {
            "line": "Therefore $y < \\dfrac{x}{(1 - x)^{2}}$.",
            "reason": "Substituting a value: $y$ stands for the left side of line 16, by line 11."
          }
        ]
      }
    }
  ]
}
