export default {
  "number": 212,
  "title": "The Binomial Theorem",
  "section": 18,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "358-365"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $\\binom{9}{2}$, which stands for $\\dfrac{{9!}}{{2!} \\cdot {7!}}$.",
    "form": "Answer as an integer.",
    "answer": "36",
    "solution": [
      "Evaluate $\\binom{9}{2}$, which stands for $\\dfrac{{9!}}{{2!} \\cdot {7!}}$.",
      "$\\binom{9}{2} = \\dfrac{{9!}}{{2!} \\cdot {7!}}$",
      "$\\dfrac{{9!}}{{2!} \\cdot {7!}} = \\dfrac{9 \\cdot 8 \\cdot {7!}}{{2!} \\cdot {7!}}$",
      "$\\dfrac{9 \\cdot 8 \\cdot {7!}}{{2!} \\cdot {7!}} = \\dfrac{9 \\cdot 8}{2 \\cdot 1}$",
      "$\\dfrac{9 \\cdot 8}{2 \\cdot 1} = 36$"
    ]
  },
  "ideas": [
    {
      "name": "Factorial",
      "concrete": "The product $7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1$ is ${7!} = 5040$. Its last four factors make ${4!} = 24$, so ${7!} = 7 \\cdot 6 \\cdot 5 \\cdot {4!}$, and $\\dfrac{7!}{4!} = 7 \\cdot 6 \\cdot 5 = 210$ with no long product worked out.",
      "general": "For a whole number $n \\ge 1$, arithmetic defines ${n!}$ as the product of the whole numbers from $1$ to $n$. This topic adds one value, ${0!} = 1$. With it, the **Factorial** satisfies $(n + 1)! = (n + 1) \\cdot {n!}$ for every whole number $n \\ge 0$. For whole numbers $n$ and $r$ with $1 \\le r \\le n$, the quotient $\\dfrac{n!}{(n - r)!}$ is the product of the $r$ whole numbers from $n$ down to $n - r + 1$, since the factors of $(n - r)!$ cancel."
    },
    {
      "name": "Binomial coefficient",
      "concrete": "With $7$ above and $2$ below, $\\binom{7}{2} = \\dfrac{7!}{{2!} \\cdot {5!}}$. Here ${5!}$ cancels, which leaves $\\dfrac{7 \\cdot 6}{2 \\cdot 1} = 21$.",
      "general": "For whole numbers $n$ and $r$ with $0 \\le r \\le n$, the **Binomial coefficient** $\\binom{n}{r}$ is the number $\\dfrac{n!}{r!(n - r)!}$. It is read \"$n$ choose $r$\". For every whole number $n \\ge 0$, $\\binom{n}{0} = \\binom{n}{n} = 1$, and for $n \\ge 1$, $\\binom{n}{1} = n$. For $1 \\le r \\le n$ the factor $(n - r)!$ cancels, so $\\binom{n}{r}$ is the product of the $r$ whole numbers from $n$ down to $n - r + 1$, divided by ${r!}$. The name comes from the Binomial Theorem below, where these numbers are the coefficients of a power of a binomial."
    },
    {
      "name": "Pascal's identity",
      "concrete": "The coefficients $\\binom{6}{1} = 6$ and $\\binom{6}{2} = 15$ add up to $21$, and $\\binom{7}{2} = 21$ as well: two neighbours with $6$ above give the coefficient with $7$ above.",
      "general": "For all whole numbers $n$ and $r$ with $0 \\le r < n$, $\\binom{n}{r} + \\binom{n}{r+1} = \\binom{n+1}{r+1}$. This is **Pascal's identity**, proved below from the definition. Write the coefficients $\\binom{n}{0}$ to $\\binom{n}{n}$ in a row, row $n$, and the rows under each other from row $0$ down: the result is **Pascal's triangle**. Each row begins and ends with $1$, and by Pascal's identity each other number is the sum of the two numbers next to each other in the row above. Row $4$ is $1$, $4$, $6$, $4$, $1$, and row $5$ is $1$, $5$, $10$, $10$, $5$, $1$. Since each row is made from the row above by adding whole numbers, every binomial coefficient is a whole number."
    },
    {
      "name": "Binomial Theorem",
      "concrete": "Multiplying out $(x + 2)^3 = (x + 2)(x + 2)(x + 2)$ gives $x^3 + 6x^2 + 12x + 8$. The coefficients are $1 \\cdot 1$, $3 \\cdot 2$, $3 \\cdot 4$ and $1 \\cdot 8$: the numbers $1$, $3$, $3$, $1$ of row $3$ of Pascal's triangle, each times a power of $2$. So $(x + 2)^3 = \\binom{3}{0}x^3 + \\binom{3}{1}x^2 \\cdot 2 + \\binom{3}{2}x \\cdot 2^2 + \\binom{3}{3} \\cdot 2^3$.",
      "general": "For all numbers $x$ and $y$ and every whole number $n \\ge 1$, $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, where $x^0$ and $y^0$ are read as $1$. This is the **Binomial Theorem**, proved below by induction. Written out, $(x + y)^n = x^n + \\binom{n}{1}x^{n-1}y + \\binom{n}{2}x^{n-2}y^2 + \\dots + \\binom{n}{n-1}xy^{n-1} + y^n$: the expansion has $n + 1$ terms, the term with index $i$ is $\\binom{n}{i}x^{n-i}y^i$, and in each term the two exponents add up to $n$. The letters $x$ and $y$ stand for whole expressions: with $-y$ in the place of $y$, the terms with an odd power of $y$ are negative, and $(x + y)^n$ is never $x^n + y^n$ alone for $n \\ge 2$."
    }
  ],
  "kinds": [
    {
      "id": "t212-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\binom{7}{4}$.",
            "lines": [
              {
                "step": "Evaluate $\\binom{7}{4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\binom{7}{4} = \\dfrac{{7!}}{{4!} \\cdot {3!}}$",
                "reason": "Binomial coefficient: $\\binom{n}{r} = \\dfrac{n!}{r!(n - r)!}$ with $n = 7$ and $r = 4$, so $n - r = 3$."
              },
              {
                "step": "$\\dfrac{{7!}}{{4!} \\cdot {3!}} = \\dfrac{7 \\cdot 6 \\cdot 5 \\cdot {4!}}{{4!} \\cdot {3!}}$",
                "reason": "Factorial: ${7!}$ is the product of the whole numbers from $7$ down to $1$, and the numbers from $4$ down to $1$ make ${4!}$."
              },
              {
                "step": "$\\dfrac{7 \\cdot 6 \\cdot 5 \\cdot {4!}}{{4!} \\cdot {3!}} = \\dfrac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1}$",
                "reason": "Cancelling a common factor: ${4!}$ is cancelled above and below, and ${3!} = 3 \\cdot 2 \\cdot 1$."
              },
              {
                "step": "$\\dfrac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1} = 35$",
                "reason": "Order of operations, from arithmetic: the top is $210$, the bottom is $6$, and $210 \\div 6 = 35$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\binom{11}{9}$.",
              "form": "Answer as an integer.",
              "answer": "55",
              "lines": [
                {
                  "step": "Evaluate $\\binom{11}{9}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\binom{11}{9} = \\dfrac{{11!}}{{9!} \\cdot {2!}}$",
                  "reason": "Binomial coefficient: $\\binom{n}{r} = \\dfrac{n!}{r!(n - r)!}$ with $n = 11$ and $r = 9$, so $n - r = 2$."
                },
                {
                  "step": "$\\dfrac{{11!}}{{9!} \\cdot {2!}} = \\dfrac{11 \\cdot 10 \\cdot {9!}}{{9!} \\cdot {2!}}$",
                  "reason": "Factorial: ${11!}$ is the product of the whole numbers from $11$ down to $1$, and the numbers from $9$ down to $1$ make ${9!}$."
                },
                {
                  "step": "$\\dfrac{11 \\cdot 10 \\cdot {9!}}{{9!} \\cdot {2!}} = \\dfrac{11 \\cdot 10}{2 \\cdot 1}$",
                  "reason": "Cancelling a common factor: ${9!}$ is cancelled above and below, and ${2!} = 2 \\cdot 1$."
                },
                {
                  "step": "$\\dfrac{11 \\cdot 10}{2 \\cdot 1} = 55$",
                  "reason": "Order of operations, from arithmetic: the top is $110$, the bottom is $2$, and $110 \\div 2 = 55$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\binom{13}{10}$.",
              "form": "Answer as an integer.",
              "answer": "286",
              "lines": [
                {
                  "step": "Evaluate $\\binom{13}{10}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\binom{13}{10} = \\dfrac{{13!}}{{10!} \\cdot {3!}}$",
                  "reason": "Binomial coefficient: $\\binom{n}{r} = \\dfrac{n!}{r!(n - r)!}$ with $n = 13$ and $r = 10$, so $n - r = 3$."
                },
                {
                  "step": "$\\dfrac{{13!}}{{10!} \\cdot {3!}} = \\dfrac{13 \\cdot 12 \\cdot 11 \\cdot {10!}}{{10!} \\cdot {3!}}$",
                  "reason": "Factorial: ${13!}$ is the product of the whole numbers from $13$ down to $1$, and the numbers from $10$ down to $1$ make ${10!}$."
                },
                {
                  "step": "$\\dfrac{13 \\cdot 12 \\cdot 11 \\cdot {10!}}{{10!} \\cdot {3!}} = \\dfrac{13 \\cdot 12 \\cdot 11}{3 \\cdot 2 \\cdot 1}$",
                  "reason": "Cancelling a common factor: ${10!}$ is cancelled above and below, and ${3!} = 3 \\cdot 2 \\cdot 1$."
                },
                {
                  "step": "$\\dfrac{13 \\cdot 12 \\cdot 11}{3 \\cdot 2 \\cdot 1} = 286$",
                  "reason": "Order of operations, from arithmetic: the top is $1716$, the bottom is $6$, and $1716 \\div 6 = 286$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\binom{11}{8}$.",
              "form": "Answer as an integer.",
              "answer": "165",
              "lines": [
                {
                  "step": "Evaluate $\\binom{11}{8}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\binom{11}{8} = \\dfrac{{11!}}{{8!} \\cdot {3!}}$",
                  "reason": "Binomial coefficient: $\\binom{n}{r} = \\dfrac{n!}{r!(n - r)!}$ with $n = 11$ and $r = 8$, so $n - r = 3$."
                },
                {
                  "step": "$\\dfrac{{11!}}{{8!} \\cdot {3!}} = \\dfrac{11 \\cdot 10 \\cdot 9 \\cdot {8!}}{{8!} \\cdot {3!}}$",
                  "reason": "Factorial: ${11!}$ is the product of the whole numbers from $11$ down to $1$, and the numbers from $8$ down to $1$ make ${8!}$."
                },
                {
                  "step": "$\\dfrac{11 \\cdot 10 \\cdot 9 \\cdot {8!}}{{8!} \\cdot {3!}} = \\dfrac{11 \\cdot 10 \\cdot 9}{3 \\cdot 2 \\cdot 1}$",
                  "reason": "Cancelling a common factor: ${8!}$ is cancelled above and below, and ${3!} = 3 \\cdot 2 \\cdot 1$."
                },
                {
                  "step": "$\\dfrac{11 \\cdot 10 \\cdot 9}{3 \\cdot 2 \\cdot 1} = 165$",
                  "reason": "Order of operations, from arithmetic: the top is $990$, the bottom is $6$, and $990 \\div 6 = 165$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\binom{22}{3}$, given that $\\binom{21}{2} = 210$ and $\\binom{21}{3} = 1330$.",
            "lines": [
              {
                "step": "Evaluate $\\binom{22}{3}$, given that $\\binom{21}{2} = 210$ and $\\binom{21}{3} = 1330$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\binom{22}{3} = \\binom{21}{2} + \\binom{21}{3}$",
                "reason": "Pascal's identity: $\\binom{n}{r} + \\binom{n}{r + 1} = \\binom{n + 1}{r + 1}$ with $n = 21$ and $r = 2$."
              },
              {
                "step": "$\\binom{21}{2} + \\binom{21}{3} = 210 + 1330$",
                "reason": "Substituting a value: each of the two given values goes into the place of its coefficient."
              },
              {
                "step": "$210 + 1330 = 1540$",
                "reason": "Order of operations, from arithmetic: the sum is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\binom{15}{10}$, given that $\\binom{14}{9} = 2002$ and $\\binom{14}{10} = 1001$.",
              "form": "Answer as an integer.",
              "answer": "3003",
              "lines": [
                {
                  "step": "Evaluate $\\binom{15}{10}$, given that $\\binom{14}{9} = 2002$ and $\\binom{14}{10} = 1001$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\binom{15}{10} = \\binom{14}{9} + \\binom{14}{10}$",
                  "reason": "Pascal's identity: $\\binom{n}{r} + \\binom{n}{r + 1} = \\binom{n + 1}{r + 1}$ with $n = 14$ and $r = 9$."
                },
                {
                  "step": "$\\binom{14}{9} + \\binom{14}{10} = 2002 + 1001$",
                  "reason": "Substituting a value: each of the two given values goes into the place of its coefficient."
                },
                {
                  "step": "$2002 + 1001 = 3003$",
                  "reason": "Order of operations, from arithmetic: the sum is worked out."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\binom{21}{17}$, given that $\\binom{20}{16} = 4845$ and $\\binom{20}{17} = 1140$.",
              "form": "Answer as an integer.",
              "answer": "5985",
              "lines": [
                {
                  "step": "Evaluate $\\binom{21}{17}$, given that $\\binom{20}{16} = 4845$ and $\\binom{20}{17} = 1140$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\binom{21}{17} = \\binom{20}{16} + \\binom{20}{17}$",
                  "reason": "Pascal's identity: $\\binom{n}{r} + \\binom{n}{r + 1} = \\binom{n + 1}{r + 1}$ with $n = 20$ and $r = 16$."
                },
                {
                  "step": "$\\binom{20}{16} + \\binom{20}{17} = 4845 + 1140$",
                  "reason": "Substituting a value: each of the two given values goes into the place of its coefficient."
                },
                {
                  "step": "$4845 + 1140 = 5985$",
                  "reason": "Order of operations, from arithmetic: the sum is worked out."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\binom{20}{2}$, given that $\\binom{19}{1} = 19$ and $\\binom{19}{2} = 171$.",
              "form": "Answer as an integer.",
              "answer": "190",
              "lines": [
                {
                  "step": "Evaluate $\\binom{20}{2}$, given that $\\binom{19}{1} = 19$ and $\\binom{19}{2} = 171$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\binom{20}{2} = \\binom{19}{1} + \\binom{19}{2}$",
                  "reason": "Pascal's identity: $\\binom{n}{r} + \\binom{n}{r + 1} = \\binom{n + 1}{r + 1}$ with $n = 19$ and $r = 1$."
                },
                {
                  "step": "$\\binom{19}{1} + \\binom{19}{2} = 19 + 171$",
                  "reason": "Substituting a value: each of the two given values goes into the place of its coefficient."
                },
                {
                  "step": "$19 + 171 = 190$",
                  "reason": "Order of operations, from arithmetic: the sum is worked out."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t212-k2",
      "forms": [
        {
          "example": {
            "problem": "Expand $(x + y)^{10}$.",
            "lines": [
              {
                "step": "Expand $(x + y)^{10}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x + y)^{10} = \\binom{10}{0}x^{10} + \\binom{10}{1}x^9y + \\binom{10}{2}x^8y^2 + \\binom{10}{3}x^7y^3 + \\binom{10}{4}x^6y^4 + \\binom{10}{5}x^5y^5 + \\binom{10}{6}x^4y^6 + \\binom{10}{7}x^3y^7 + \\binom{10}{8}x^2y^8 + \\binom{10}{9}xy^9 + \\binom{10}{10}y^{10}$",
                "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$ with $n = 10$."
              },
              {
                "step": "$(x + y)^{10} = x^{10} + 10x^9y + 45x^8y^2 + 120x^7y^3 + 210x^6y^4 + 252x^5y^5 + 210x^4y^6 + 120x^3y^7 + 45x^2y^8 + 10xy^9 + y^{10}$",
                "reason": "Binomial coefficient: $\\binom{10}{0} = \\binom{10}{10} = 1$, $\\binom{10}{1} = \\binom{10}{9} = 10$, $\\binom{10}{2} = \\binom{10}{8} = 45$, $\\binom{10}{3} = \\binom{10}{7} = 120$, $\\binom{10}{4} = \\binom{10}{6} = 210$ and $\\binom{10}{5} = 252$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(x + y)^9$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^9+9*x^8*y+36*x^7*y^2+84*x^6*y^3+126*x^5*y^4+126*x^4*y^5+84*x^3*y^6+36*x^2*y^7+9*x*y^8+y^9",
              "lines": [
                {
                  "step": "Expand $(x + y)^9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + y)^9 = \\binom{9}{0}x^9 + \\binom{9}{1}x^8y + \\binom{9}{2}x^7y^2 + \\binom{9}{3}x^6y^3 + \\binom{9}{4}x^5y^4 + \\binom{9}{5}x^4y^5 + \\binom{9}{6}x^3y^6 + \\binom{9}{7}x^2y^7 + \\binom{9}{8}xy^8 + \\binom{9}{9}y^9$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$ with $n = 9$."
                },
                {
                  "step": "$(x + y)^9 = x^9 + 9x^8y + 36x^7y^2 + 84x^6y^3 + 126x^5y^4 + 126x^4y^5 + 84x^3y^6 + 36x^2y^7 + 9xy^8 + y^9$",
                  "reason": "Binomial coefficient: $\\binom{9}{0} = \\binom{9}{9} = 1$, $\\binom{9}{1} = \\binom{9}{8} = 9$, $\\binom{9}{2} = \\binom{9}{7} = 36$, $\\binom{9}{3} = \\binom{9}{6} = 84$ and $\\binom{9}{4} = \\binom{9}{5} = 126$."
                }
              ]
            },
            {
              "prompt": "Expand $(x + y)^7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^7+7*x^6*y+21*x^5*y^2+35*x^4*y^3+35*x^3*y^4+21*x^2*y^5+7*x*y^6+y^7",
              "lines": [
                {
                  "step": "Expand $(x + y)^7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + y)^7 = \\binom{7}{0}x^7 + \\binom{7}{1}x^6y + \\binom{7}{2}x^5y^2 + \\binom{7}{3}x^4y^3 + \\binom{7}{4}x^3y^4 + \\binom{7}{5}x^2y^5 + \\binom{7}{6}xy^6 + \\binom{7}{7}y^7$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$ with $n = 7$."
                },
                {
                  "step": "$(x + y)^7 = x^7 + 7x^6y + 21x^5y^2 + 35x^4y^3 + 35x^3y^4 + 21x^2y^5 + 7xy^6 + y^7$",
                  "reason": "Binomial coefficient: $\\binom{7}{0} = \\binom{7}{7} = 1$, $\\binom{7}{1} = \\binom{7}{6} = 7$, $\\binom{7}{2} = \\binom{7}{5} = 21$ and $\\binom{7}{3} = \\binom{7}{4} = 35$."
                }
              ]
            },
            {
              "prompt": "Expand $(x + y)^{13}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^13+13*x^12*y+78*x^11*y^2+286*x^10*y^3+715*x^9*y^4+1287*x^8*y^5+1716*x^7*y^6+1716*x^6*y^7+1287*x^5*y^8+715*x^4*y^9+286*x^3*y^10+78*x^2*y^11+13*x*y^12+y^13",
              "lines": [
                {
                  "step": "Expand $(x + y)^{13}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + y)^{13} = \\binom{13}{0}x^{13} + \\binom{13}{1}x^{12}y + \\binom{13}{2}x^{11}y^2 + \\binom{13}{3}x^{10}y^3 + \\binom{13}{4}x^9y^4 + \\binom{13}{5}x^8y^5 + \\binom{13}{6}x^7y^6 + \\binom{13}{7}x^6y^7 + \\binom{13}{8}x^5y^8 + \\binom{13}{9}x^4y^9 + \\binom{13}{10}x^3y^{10} + \\binom{13}{11}x^2y^{11} + \\binom{13}{12}xy^{12} + \\binom{13}{13}y^{13}$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$ with $n = 13$."
                },
                {
                  "step": "$(x + y)^{13} = x^{13} + 13x^{12}y + 78x^{11}y^2 + 286x^{10}y^3 + 715x^9y^4 + 1287x^8y^5 + 1716x^7y^6 + 1716x^6y^7 + 1287x^5y^8 + 715x^4y^9 + 286x^3y^{10} + 78x^2y^{11} + 13xy^{12} + y^{13}$",
                  "reason": "Binomial coefficient: $\\binom{13}{0} = \\binom{13}{13} = 1$, $\\binom{13}{1} = \\binom{13}{12} = 13$, $\\binom{13}{2} = \\binom{13}{11} = 78$, $\\binom{13}{3} = \\binom{13}{10} = 286$, $\\binom{13}{4} = \\binom{13}{9} = 715$, $\\binom{13}{5} = \\binom{13}{8} = 1287$ and $\\binom{13}{6} = \\binom{13}{7} = 1716$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(5x + y)^3$.",
            "lines": [
              {
                "step": "Expand $(5x + y)^3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(5x + y)^3 = \\binom{3}{0}(5x)^3 + \\binom{3}{1}(5x)^2y + \\binom{3}{2}(5x)y^2 + \\binom{3}{3}y^3$",
                "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $5x$ in the place of $x$, $y$ in the place of $y$ and $n = 3$."
              },
              {
                "step": "$(5x + y)^3 = (5x)^3 + 3(5x)^2y + 3(5x)y^2 + y^3$",
                "reason": "Binomial coefficient: $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
              },
              {
                "step": "$(5x + y)^3 = 125x^3 + 3 \\cdot 25x^2 \\cdot y + 3 \\cdot 5x \\cdot y^2 + y^3$",
                "reason": "Power of a product: $(5x)^3 = 125x^3$, and each other power is worked out in the same way."
              },
              {
                "step": "$(5x + y)^3 = 125x^3 + 75x^2y + 15xy^2 + y^3$",
                "reason": "Order of operations, from arithmetic: the numbers of each term are multiplied."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(2x + 3)^3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*x^3+36*x^2+54*x+27",
              "lines": [
                {
                  "step": "Expand $(2x + 3)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x + 3)^3 = \\binom{3}{0}(2x)^3 + \\binom{3}{1}(2x)^2 \\cdot 3 + \\binom{3}{2}(2x) \\cdot 3^2 + \\binom{3}{3} \\cdot 3^3$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $2x$ in the place of $x$, $3$ in the place of $y$ and $n = 3$."
                },
                {
                  "step": "$(2x + 3)^3 = (2x)^3 + 3(2x)^2 \\cdot 3 + 3(2x) \\cdot 3^2 + 3^3$",
                  "reason": "Binomial coefficient: $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
                },
                {
                  "step": "$(2x + 3)^3 = 8x^3 + 3 \\cdot 4x^2 \\cdot 3 + 3 \\cdot 2x \\cdot 9 + 27$",
                  "reason": "Power of a product: $(2x)^3 = 8x^3$, and each other power is worked out in the same way."
                },
                {
                  "step": "$(2x + 3)^3 = 8x^3 + 36x^2 + 54x + 27$",
                  "reason": "Order of operations, from arithmetic: the numbers of each term are multiplied."
                }
              ]
            },
            {
              "prompt": "Expand $(4x + y)^5$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "1024*x^5+1280*x^4*y+640*x^3*y^2+160*x^2*y^3+20*x*y^4+y^5",
              "lines": [
                {
                  "step": "Expand $(4x + y)^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4x + y)^5 = \\binom{5}{0}(4x)^5 + \\binom{5}{1}(4x)^4y + \\binom{5}{2}(4x)^3y^2 + \\binom{5}{3}(4x)^2y^3 + \\binom{5}{4}(4x)y^4 + \\binom{5}{5}y^5$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $4x$ in the place of $x$, $y$ in the place of $y$ and $n = 5$."
                },
                {
                  "step": "$(4x + y)^5 = (4x)^5 + 5(4x)^4y + 10(4x)^3y^2 + 10(4x)^2y^3 + 5(4x)y^4 + y^5$",
                  "reason": "Binomial coefficient: $\\binom{5}{0} = \\binom{5}{5} = 1$, $\\binom{5}{1} = \\binom{5}{4} = 5$ and $\\binom{5}{2} = \\binom{5}{3} = 10$."
                },
                {
                  "step": "$(4x + y)^5 = 1024x^5 + 5 \\cdot 256x^4 \\cdot y + 10 \\cdot 64x^3 \\cdot y^2 + 10 \\cdot 16x^2 \\cdot y^3 + 5 \\cdot 4x \\cdot y^4 + y^5$",
                  "reason": "Power of a product: $(4x)^5 = 1024x^5$, and each other power is worked out in the same way."
                },
                {
                  "step": "$(4x + y)^5 = 1024x^5 + 1280x^4y + 640x^3y^2 + 160x^2y^3 + 20xy^4 + y^5$",
                  "reason": "Order of operations, from arithmetic: the numbers of each term are multiplied."
                }
              ]
            },
            {
              "prompt": "Expand $(3x + 4)^5$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "243*x^5+1620*x^4+4320*x^3+5760*x^2+3840*x+1024",
              "lines": [
                {
                  "step": "Expand $(3x + 4)^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x + 4)^5 = \\binom{5}{0}(3x)^5 + \\binom{5}{1}(3x)^4 \\cdot 4 + \\binom{5}{2}(3x)^3 \\cdot 4^2 + \\binom{5}{3}(3x)^2 \\cdot 4^3 + \\binom{5}{4}(3x) \\cdot 4^4 + \\binom{5}{5} \\cdot 4^5$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $3x$ in the place of $x$, $4$ in the place of $y$ and $n = 5$."
                },
                {
                  "step": "$(3x + 4)^5 = (3x)^5 + 5(3x)^4 \\cdot 4 + 10(3x)^3 \\cdot 4^2 + 10(3x)^2 \\cdot 4^3 + 5(3x) \\cdot 4^4 + 4^5$",
                  "reason": "Binomial coefficient: $\\binom{5}{0} = \\binom{5}{5} = 1$, $\\binom{5}{1} = \\binom{5}{4} = 5$ and $\\binom{5}{2} = \\binom{5}{3} = 10$."
                },
                {
                  "step": "$(3x + 4)^5 = 243x^5 + 5 \\cdot 81x^4 \\cdot 4 + 10 \\cdot 27x^3 \\cdot 16 + 10 \\cdot 9x^2 \\cdot 64 + 5 \\cdot 3x \\cdot 256 + 1024$",
                  "reason": "Power of a product: $(3x)^5 = 243x^5$, and each other power is worked out in the same way."
                },
                {
                  "step": "$(3x + 4)^5 = 243x^5 + 1620x^4 + 4320x^3 + 5760x^2 + 3840x + 1024$",
                  "reason": "Order of operations, from arithmetic: the numbers of each term are multiplied."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(3x - 4y)^4$.",
            "lines": [
              {
                "step": "Expand $(3x - 4y)^4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(3x - 4y)^4 = \\binom{4}{0}(3x)^4 + \\binom{4}{1}(3x)^3(-4y) + \\binom{4}{2}(3x)^2(-4y)^2 + \\binom{4}{3}(3x)(-4y)^3 + \\binom{4}{4}(-4y)^4$",
                "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $3x$ in the place of $x$, $-4y$ in the place of $y$ and $n = 4$."
              },
              {
                "step": "$(3x - 4y)^4 = (3x)^4 + 4(3x)^3(-4y) + 6(3x)^2(-4y)^2 + 4(3x)(-4y)^3 + (-4y)^4$",
                "reason": "Binomial coefficient: $\\binom{4}{0} = \\binom{4}{4} = 1$, $\\binom{4}{1} = \\binom{4}{3} = 4$ and $\\binom{4}{2} = 6$."
              },
              {
                "step": "$(3x - 4y)^4 = 81x^4 + 4 \\cdot 27x^3 \\cdot (-4y) + 6 \\cdot 9x^2 \\cdot 16y^2 + 4 \\cdot 3x \\cdot (-64y^3) + 256y^4$",
                "reason": "Power of a product and the sign of a power of a negative number: $(3x)^4 = 81x^4$, and $(-4y)^3 = -64y^3$, as an odd power of a negative number is negative and an even power is positive."
              },
              {
                "step": "$(3x - 4y)^4 = 81x^4 - 432x^3y + 864x^2y^2 - 768xy^3 + 256y^4$",
                "reason": "Signs of products: a term with a negative factor is negative, and the numbers of each term are multiplied."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(3x - y)^3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "27*x^3-27*x^2*y+9*x*y^2-y^3",
              "lines": [
                {
                  "step": "Expand $(3x - y)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x - y)^3 = \\binom{3}{0}(3x)^3 + \\binom{3}{1}(3x)^2(-y) + \\binom{3}{2}(3x)(-y)^2 + \\binom{3}{3}(-y)^3$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $3x$ in the place of $x$, $-y$ in the place of $y$ and $n = 3$."
                },
                {
                  "step": "$(3x - y)^3 = (3x)^3 + 3(3x)^2(-y) + 3(3x)(-y)^2 + (-y)^3$",
                  "reason": "Binomial coefficient: $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
                },
                {
                  "step": "$(3x - y)^3 = 27x^3 + 3 \\cdot 9x^2 \\cdot (-y) + 3 \\cdot 3x \\cdot y^2 - y^3$",
                  "reason": "Power of a product and the sign of a power of a negative number: $(3x)^3 = 27x^3$, and $(-y)^3 = -y^3$, as an odd power of a negative number is negative and an even power is positive."
                },
                {
                  "step": "$(3x - y)^3 = 27x^3 - 27x^2y + 9xy^2 - y^3$",
                  "reason": "Signs of products: a term with a negative factor is negative, and the numbers of each term are multiplied."
                }
              ]
            },
            {
              "prompt": "Expand $(2x - 5y)^4$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "16*x^4-160*x^3*y+600*x^2*y^2-1000*x*y^3+625*y^4",
              "lines": [
                {
                  "step": "Expand $(2x - 5y)^4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x - 5y)^4 = \\binom{4}{0}(2x)^4 + \\binom{4}{1}(2x)^3(-5y) + \\binom{4}{2}(2x)^2(-5y)^2 + \\binom{4}{3}(2x)(-5y)^3 + \\binom{4}{4}(-5y)^4$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $2x$ in the place of $x$, $-5y$ in the place of $y$ and $n = 4$."
                },
                {
                  "step": "$(2x - 5y)^4 = (2x)^4 + 4(2x)^3(-5y) + 6(2x)^2(-5y)^2 + 4(2x)(-5y)^3 + (-5y)^4$",
                  "reason": "Binomial coefficient: $\\binom{4}{0} = \\binom{4}{4} = 1$, $\\binom{4}{1} = \\binom{4}{3} = 4$ and $\\binom{4}{2} = 6$."
                },
                {
                  "step": "$(2x - 5y)^4 = 16x^4 + 4 \\cdot 8x^3 \\cdot (-5y) + 6 \\cdot 4x^2 \\cdot 25y^2 + 4 \\cdot 2x \\cdot (-125y^3) + 625y^4$",
                  "reason": "Power of a product and the sign of a power of a negative number: $(2x)^4 = 16x^4$, and $(-5y)^3 = -125y^3$, as an odd power of a negative number is negative and an even power is positive."
                },
                {
                  "step": "$(2x - 5y)^4 = 16x^4 - 160x^3y + 600x^2y^2 - 1000xy^3 + 625y^4$",
                  "reason": "Signs of products: a term with a negative factor is negative, and the numbers of each term are multiplied."
                }
              ]
            },
            {
              "prompt": "Expand $(5x - 4y)^3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "125*x^3-300*x^2*y+240*x*y^2-64*y^3",
              "lines": [
                {
                  "step": "Expand $(5x - 4y)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5x - 4y)^3 = \\binom{3}{0}(5x)^3 + \\binom{3}{1}(5x)^2(-4y) + \\binom{3}{2}(5x)(-4y)^2 + \\binom{3}{3}(-4y)^3$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $5x$ in the place of $x$, $-4y$ in the place of $y$ and $n = 3$."
                },
                {
                  "step": "$(5x - 4y)^3 = (5x)^3 + 3(5x)^2(-4y) + 3(5x)(-4y)^2 + (-4y)^3$",
                  "reason": "Binomial coefficient: $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
                },
                {
                  "step": "$(5x - 4y)^3 = 125x^3 + 3 \\cdot 25x^2 \\cdot (-4y) + 3 \\cdot 5x \\cdot 16y^2 - 64y^3$",
                  "reason": "Power of a product and the sign of a power of a negative number: $(5x)^3 = 125x^3$, and $(-4y)^3 = -64y^3$, as an odd power of a negative number is negative and an even power is positive."
                },
                {
                  "step": "$(5x - 4y)^3 = 125x^3 - 300x^2y + 240xy^2 - 64y^3$",
                  "reason": "Signs of products: a term with a negative factor is negative, and the numbers of each term are multiplied."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(5x^3 - 8y)^3$.",
            "lines": [
              {
                "step": "Expand $(5x^3 - 8y)^3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(5x^3 - 8y)^3 = \\binom{3}{0}(5x^3)^3 + \\binom{3}{1}(5x^3)^2(-8y) + \\binom{3}{2}(5x^3)(-8y)^2 + \\binom{3}{3}(-8y)^3$",
                "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $5x^3$ in the place of $x$, $-8y$ in the place of $y$ and $n = 3$."
              },
              {
                "step": "$(5x^3 - 8y)^3 = (5x^3)^3 + 3(5x^3)^2(-8y) + 3(5x^3)(-8y)^2 + (-8y)^3$",
                "reason": "Binomial coefficient: $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
              },
              {
                "step": "$(5x^3 - 8y)^3 = 125x^9 + 3 \\cdot 25x^6 \\cdot (-8y) + 3 \\cdot 5x^3 \\cdot 64y^2 - 512y^3$",
                "reason": "Power of a product, power law and the sign of a power of a negative number: $(5x^3)^3 = 125x^9$, as $(x^3)^3 = x^9$, and $(-8y)^3 = -512y^3$, as an odd power of a negative number is negative."
              },
              {
                "step": "$(5x^3 - 8y)^3 = 125x^9 - 600x^6y + 960x^3y^2 - 512y^3$",
                "reason": "Signs of products: a term with a negative factor is negative, and the numbers of each term are multiplied."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(5x^3 - 9y)^3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "125*x^9-675*x^6*y+1215*x^3*y^2-729*y^3",
              "lines": [
                {
                  "step": "Expand $(5x^3 - 9y)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5x^3 - 9y)^3 = \\binom{3}{0}(5x^3)^3 + \\binom{3}{1}(5x^3)^2(-9y) + \\binom{3}{2}(5x^3)(-9y)^2 + \\binom{3}{3}(-9y)^3$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $5x^3$ in the place of $x$, $-9y$ in the place of $y$ and $n = 3$."
                },
                {
                  "step": "$(5x^3 - 9y)^3 = (5x^3)^3 + 3(5x^3)^2(-9y) + 3(5x^3)(-9y)^2 + (-9y)^3$",
                  "reason": "Binomial coefficient: $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
                },
                {
                  "step": "$(5x^3 - 9y)^3 = 125x^9 + 3 \\cdot 25x^6 \\cdot (-9y) + 3 \\cdot 5x^3 \\cdot 81y^2 - 729y^3$",
                  "reason": "Power of a product, power law and the sign of a power of a negative number: $(5x^3)^3 = 125x^9$, as $(x^3)^3 = x^9$, and $(-9y)^3 = -729y^3$, as an odd power of a negative number is negative."
                },
                {
                  "step": "$(5x^3 - 9y)^3 = 125x^9 - 675x^6y + 1215x^3y^2 - 729y^3$",
                  "reason": "Signs of products: a term with a negative factor is negative, and the numbers of each term are multiplied."
                }
              ]
            },
            {
              "prompt": "Expand $(3x^2 - 8y)^3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "27*x^6-216*x^4*y+576*x^2*y^2-512*y^3",
              "lines": [
                {
                  "step": "Expand $(3x^2 - 8y)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x^2 - 8y)^3 = \\binom{3}{0}(3x^2)^3 + \\binom{3}{1}(3x^2)^2(-8y) + \\binom{3}{2}(3x^2)(-8y)^2 + \\binom{3}{3}(-8y)^3$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $3x^2$ in the place of $x$, $-8y$ in the place of $y$ and $n = 3$."
                },
                {
                  "step": "$(3x^2 - 8y)^3 = (3x^2)^3 + 3(3x^2)^2(-8y) + 3(3x^2)(-8y)^2 + (-8y)^3$",
                  "reason": "Binomial coefficient: $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
                },
                {
                  "step": "$(3x^2 - 8y)^3 = 27x^6 + 3 \\cdot 9x^4 \\cdot (-8y) + 3 \\cdot 3x^2 \\cdot 64y^2 - 512y^3$",
                  "reason": "Power of a product, power law and the sign of a power of a negative number: $(3x^2)^3 = 27x^6$, as $(x^2)^3 = x^6$, and $(-8y)^3 = -512y^3$, as an odd power of a negative number is negative."
                },
                {
                  "step": "$(3x^2 - 8y)^3 = 27x^6 - 216x^4y + 576x^2y^2 - 512y^3$",
                  "reason": "Signs of products: a term with a negative factor is negative, and the numbers of each term are multiplied."
                }
              ]
            },
            {
              "prompt": "Expand $(2x^2 - 9y)^3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*x^6-108*x^4*y+486*x^2*y^2-729*y^3",
              "lines": [
                {
                  "step": "Expand $(2x^2 - 9y)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x^2 - 9y)^3 = \\binom{3}{0}(2x^2)^3 + \\binom{3}{1}(2x^2)^2(-9y) + \\binom{3}{2}(2x^2)(-9y)^2 + \\binom{3}{3}(-9y)^3$",
                  "reason": "Binomial Theorem: $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, with $2x^2$ in the place of $x$, $-9y$ in the place of $y$ and $n = 3$."
                },
                {
                  "step": "$(2x^2 - 9y)^3 = (2x^2)^3 + 3(2x^2)^2(-9y) + 3(2x^2)(-9y)^2 + (-9y)^3$",
                  "reason": "Binomial coefficient: $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
                },
                {
                  "step": "$(2x^2 - 9y)^3 = 8x^6 + 3 \\cdot 4x^4 \\cdot (-9y) + 3 \\cdot 2x^2 \\cdot 81y^2 - 729y^3$",
                  "reason": "Power of a product, power law and the sign of a power of a negative number: $(2x^2)^3 = 8x^6$, as $(x^2)^3 = x^6$, and $(-9y)^3 = -729y^3$, as an odd power of a negative number is negative."
                },
                {
                  "step": "$(2x^2 - 9y)^3 = 8x^6 - 108x^4y + 486x^2y^2 - 729y^3$",
                  "reason": "Signs of products: a term with a negative factor is negative, and the numbers of each term are multiplied."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t212-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the coefficient of $x^3$ in the expansion of $(4x - 3)^5$.",
            "lines": [
              {
                "step": "Find the coefficient of $x^3$ in the expansion of $(4x - 3)^5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms of the expansion are $\\binom{5}{i}(4x)^{5-i}(-3)^i$ for $i$ from $0$ to $5$.",
                "reason": "Binomial Theorem: with $4x$ in the place of $x$, $-3$ in the place of $y$ and $n = 5$."
              },
              {
                "step": "The term with $x^3$ has $5 - i = 3$, so $i = 2$.",
                "reason": "Power of a product: $(4x)^{5-i} = 4^{5-i}x^{5-i}$, so the exponent of $x$ in the term is $5 - i$."
              },
              {
                "step": "That term is $\\binom{5}{2}(4x)^3(-3)^2$.",
                "reason": "Substituting a value: $2$ goes into each place of $i$."
              },
              {
                "step": "$\\binom{5}{2} = 10$",
                "reason": "Binomial coefficient: $\\binom{5}{2} = \\dfrac{5 \\cdot 4}{2 \\cdot 1}$, after ${3!}$ is cancelled."
              },
              {
                "step": "The term is $10 \\cdot 64x^3 \\cdot 9$.",
                "reason": "Power of a product and the sign of a power of a negative number: $(4x)^3 = 64x^3$, and $(-3)^2 = 9$, as an even power of a negative number is positive."
              },
              {
                "step": "The coefficient of $x^3$ is $10 \\cdot 64 \\cdot 9 = 5760$.",
                "reason": "Answering the question asked: the coefficient is the number in front of $x^3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the coefficient of $x^2$ in the expansion of $(3x - 2)^5$.",
              "form": "Answer as an integer.",
              "answer": "-720",
              "lines": [
                {
                  "step": "Find the coefficient of $x^2$ in the expansion of $(3x - 2)^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{5}{i}(3x)^{5-i}(-2)^i$ for $i$ from $0$ to $5$.",
                  "reason": "Binomial Theorem: with $3x$ in the place of $x$, $-2$ in the place of $y$ and $n = 5$."
                },
                {
                  "step": "The term with $x^2$ has $5 - i = 2$, so $i = 3$.",
                  "reason": "Power of a product: $(3x)^{5-i} = 3^{5-i}x^{5-i}$, so the exponent of $x$ in the term is $5 - i$."
                },
                {
                  "step": "That term is $\\binom{5}{3}(3x)^2(-2)^3$.",
                  "reason": "Substituting a value: $3$ goes into each place of $i$."
                },
                {
                  "step": "$\\binom{5}{3} = 10$",
                  "reason": "Binomial coefficient: $\\binom{5}{3} = \\dfrac{5 \\cdot 4}{2 \\cdot 1}$, after ${3!}$ is cancelled."
                },
                {
                  "step": "The term is $10 \\cdot 9x^2 \\cdot (-8)$.",
                  "reason": "Power of a product and the sign of a power of a negative number: $(3x)^2 = 9x^2$, and $(-2)^3 = -8$, as an odd power of a negative number is negative."
                },
                {
                  "step": "The coefficient of $x^2$ is $10 \\cdot 9 \\cdot (-8) = -720$.",
                  "reason": "Answering the question asked: the coefficient is the number in front of $x^2$."
                }
              ]
            },
            {
              "prompt": "Find the coefficient of $x^2$ in the expansion of $(6x - 3)^5$.",
              "form": "Answer as an integer.",
              "answer": "-9720",
              "lines": [
                {
                  "step": "Find the coefficient of $x^2$ in the expansion of $(6x - 3)^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{5}{i}(6x)^{5-i}(-3)^i$ for $i$ from $0$ to $5$.",
                  "reason": "Binomial Theorem: with $6x$ in the place of $x$, $-3$ in the place of $y$ and $n = 5$."
                },
                {
                  "step": "The term with $x^2$ has $5 - i = 2$, so $i = 3$.",
                  "reason": "Power of a product: $(6x)^{5-i} = 6^{5-i}x^{5-i}$, so the exponent of $x$ in the term is $5 - i$."
                },
                {
                  "step": "That term is $\\binom{5}{3}(6x)^2(-3)^3$.",
                  "reason": "Substituting a value: $3$ goes into each place of $i$."
                },
                {
                  "step": "$\\binom{5}{3} = 10$",
                  "reason": "Binomial coefficient: $\\binom{5}{3} = \\dfrac{5 \\cdot 4}{2 \\cdot 1}$, after ${3!}$ is cancelled."
                },
                {
                  "step": "The term is $10 \\cdot 36x^2 \\cdot (-27)$.",
                  "reason": "Power of a product and the sign of a power of a negative number: $(6x)^2 = 36x^2$, and $(-3)^3 = -27$, as an odd power of a negative number is negative."
                },
                {
                  "step": "The coefficient of $x^2$ is $10 \\cdot 36 \\cdot (-27) = -9720$.",
                  "reason": "Answering the question asked: the coefficient is the number in front of $x^2$."
                }
              ]
            },
            {
              "prompt": "Find the coefficient of $x^2$ in the expansion of $(4x - 2)^6$.",
              "form": "Answer as an integer.",
              "answer": "3840",
              "lines": [
                {
                  "step": "Find the coefficient of $x^2$ in the expansion of $(4x - 2)^6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{6}{i}(4x)^{6-i}(-2)^i$ for $i$ from $0$ to $6$.",
                  "reason": "Binomial Theorem: with $4x$ in the place of $x$, $-2$ in the place of $y$ and $n = 6$."
                },
                {
                  "step": "The term with $x^2$ has $6 - i = 2$, so $i = 4$.",
                  "reason": "Power of a product: $(4x)^{6-i} = 4^{6-i}x^{6-i}$, so the exponent of $x$ in the term is $6 - i$."
                },
                {
                  "step": "That term is $\\binom{6}{4}(4x)^2(-2)^4$.",
                  "reason": "Substituting a value: $4$ goes into each place of $i$."
                },
                {
                  "step": "$\\binom{6}{4} = 15$",
                  "reason": "Binomial coefficient: $\\binom{6}{4} = \\dfrac{6 \\cdot 5}{2 \\cdot 1}$, after ${4!}$ is cancelled."
                },
                {
                  "step": "The term is $15 \\cdot 16x^2 \\cdot 16$.",
                  "reason": "Power of a product and the sign of a power of a negative number: $(4x)^2 = 16x^2$, and $(-2)^4 = 16$, as an even power of a negative number is positive."
                },
                {
                  "step": "The coefficient of $x^2$ is $15 \\cdot 16 \\cdot 16 = 3840$.",
                  "reason": "Answering the question asked: the coefficient is the number in front of $x^2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the constant term in the expansion of $\\left(7x^3 + \\dfrac{2}{x^2}\\right)^5$.",
            "lines": [
              {
                "step": "Find the constant term in the expansion of $\\left(7x^3 + \\dfrac{2}{x^2}\\right)^5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms of the expansion are $\\binom{5}{i}(7x^3)^{5-i}\\left(\\dfrac{2}{x^2}\\right)^i$ for $i$ from $0$ to $5$.",
                "reason": "Binomial Theorem: with $7x^3$ in the place of $x$, $\\dfrac{2}{x^2}$ in the place of $y$ and $n = 5$."
              },
              {
                "step": "In that term the power of $x$ is $x^{3(5-i)} \\cdot x^{-2i} = x^{15-5i}$.",
                "reason": "Power law, negative exponent and product law: a power of $x$ under the bar counts with a negative exponent, a power of a power multiplies the exponents, and the two exponents of $x$ add."
              },
              {
                "step": "The constant term has $15 - 5i = 0$, so $i = 3$.",
                "reason": "Zero exponent: a constant term has $x^0 = 1$ as its power of $x$, and $15 - 5i = 0$ exactly when $i = 3$."
              },
              {
                "step": "That term is $\\binom{5}{3}(7x^3)^2\\left(\\dfrac{2}{x^2}\\right)^3$.",
                "reason": "Substituting a value: $3$ goes into each place of $i$."
              },
              {
                "step": "$\\binom{5}{3} = 10$",
                "reason": "Binomial coefficient: $\\binom{5}{3} = \\dfrac{5 \\cdot 4}{2 \\cdot 1}$, after ${3!}$ is cancelled."
              },
              {
                "step": "The term is $10 \\cdot 49x^6 \\cdot \\dfrac{8}{x^6}$.",
                "reason": "Power of a product and power of a quotient: $(7x^3)^2 = 49x^6$ and $\\left(\\dfrac{2}{x^2}\\right)^3 = \\dfrac{8}{x^6}$."
              },
              {
                "step": "The constant term is $10 \\cdot 49 \\cdot 8 = 3920$.",
                "reason": "Answering the question asked: the powers of $x$ cancel, and the numbers that are left are multiplied."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant term in the expansion of $\\left(3x^3 + \\dfrac{2}{x^3}\\right)^6$.",
              "form": "Answer as an integer.",
              "answer": "4320",
              "lines": [
                {
                  "step": "Find the constant term in the expansion of $\\left(3x^3 + \\dfrac{2}{x^3}\\right)^6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{6}{i}(3x^3)^{6-i}\\left(\\dfrac{2}{x^3}\\right)^i$ for $i$ from $0$ to $6$.",
                  "reason": "Binomial Theorem: with $3x^3$ in the place of $x$, $\\dfrac{2}{x^3}$ in the place of $y$ and $n = 6$."
                },
                {
                  "step": "In that term the power of $x$ is $x^{3(6-i)} \\cdot x^{-3i} = x^{18-6i}$.",
                  "reason": "Power law, negative exponent and product law: a power of $x$ under the bar counts with a negative exponent, a power of a power multiplies the exponents, and the two exponents of $x$ add."
                },
                {
                  "step": "The constant term has $18 - 6i = 0$, so $i = 3$.",
                  "reason": "Zero exponent: a constant term has $x^0 = 1$ as its power of $x$, and $18 - 6i = 0$ exactly when $i = 3$."
                },
                {
                  "step": "That term is $\\binom{6}{3}(3x^3)^3\\left(\\dfrac{2}{x^3}\\right)^3$.",
                  "reason": "Substituting a value: $3$ goes into each place of $i$."
                },
                {
                  "step": "$\\binom{6}{3} = 20$",
                  "reason": "Binomial coefficient: $\\binom{6}{3} = \\dfrac{6 \\cdot 5 \\cdot 4}{3 \\cdot 2 \\cdot 1}$, after ${3!}$ is cancelled."
                },
                {
                  "step": "The term is $20 \\cdot 27x^9 \\cdot \\dfrac{8}{x^9}$.",
                  "reason": "Power of a product and power of a quotient: $(3x^3)^3 = 27x^9$ and $\\left(\\dfrac{2}{x^3}\\right)^3 = \\dfrac{8}{x^9}$."
                },
                {
                  "step": "The constant term is $20 \\cdot 27 \\cdot 8 = 4320$.",
                  "reason": "Answering the question asked: the powers of $x$ cancel, and the numbers that are left are multiplied."
                }
              ]
            },
            {
              "prompt": "Find the constant term in the expansion of $\\left(2x^3 + \\dfrac{3}{x^3}\\right)^4$.",
              "form": "Answer as an integer.",
              "answer": "216",
              "lines": [
                {
                  "step": "Find the constant term in the expansion of $\\left(2x^3 + \\dfrac{3}{x^3}\\right)^4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{4}{i}(2x^3)^{4-i}\\left(\\dfrac{3}{x^3}\\right)^i$ for $i$ from $0$ to $4$.",
                  "reason": "Binomial Theorem: with $2x^3$ in the place of $x$, $\\dfrac{3}{x^3}$ in the place of $y$ and $n = 4$."
                },
                {
                  "step": "In that term the power of $x$ is $x^{3(4-i)} \\cdot x^{-3i} = x^{12-6i}$.",
                  "reason": "Power law, negative exponent and product law: a power of $x$ under the bar counts with a negative exponent, a power of a power multiplies the exponents, and the two exponents of $x$ add."
                },
                {
                  "step": "The constant term has $12 - 6i = 0$, so $i = 2$.",
                  "reason": "Zero exponent: a constant term has $x^0 = 1$ as its power of $x$, and $12 - 6i = 0$ exactly when $i = 2$."
                },
                {
                  "step": "That term is $\\binom{4}{2}(2x^3)^2\\left(\\dfrac{3}{x^3}\\right)^2$.",
                  "reason": "Substituting a value: $2$ goes into each place of $i$."
                },
                {
                  "step": "$\\binom{4}{2} = 6$",
                  "reason": "Binomial coefficient: $\\binom{4}{2} = \\dfrac{4 \\cdot 3}{2 \\cdot 1}$, after ${2!}$ is cancelled."
                },
                {
                  "step": "The term is $6 \\cdot 4x^6 \\cdot \\dfrac{9}{x^6}$.",
                  "reason": "Power of a product and power of a quotient: $(2x^3)^2 = 4x^6$ and $\\left(\\dfrac{3}{x^3}\\right)^2 = \\dfrac{9}{x^6}$."
                },
                {
                  "step": "The constant term is $6 \\cdot 4 \\cdot 9 = 216$.",
                  "reason": "Answering the question asked: the powers of $x$ cancel, and the numbers that are left are multiplied."
                }
              ]
            },
            {
              "prompt": "Find the constant term in the expansion of $\\left(2x^2 + \\dfrac{5}{x}\\right)^6$.",
              "form": "Answer as an integer.",
              "answer": "37500",
              "lines": [
                {
                  "step": "Find the constant term in the expansion of $\\left(2x^2 + \\dfrac{5}{x}\\right)^6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{6}{i}(2x^2)^{6-i}\\left(\\dfrac{5}{x}\\right)^i$ for $i$ from $0$ to $6$.",
                  "reason": "Binomial Theorem: with $2x^2$ in the place of $x$, $\\dfrac{5}{x}$ in the place of $y$ and $n = 6$."
                },
                {
                  "step": "In that term the power of $x$ is $x^{2(6-i)} \\cdot x^{-i} = x^{12-3i}$.",
                  "reason": "Power law, negative exponent and product law: a power of $x$ under the bar counts with a negative exponent, a power of a power multiplies the exponents, and the two exponents of $x$ add."
                },
                {
                  "step": "The constant term has $12 - 3i = 0$, so $i = 4$.",
                  "reason": "Zero exponent: a constant term has $x^0 = 1$ as its power of $x$, and $12 - 3i = 0$ exactly when $i = 4$."
                },
                {
                  "step": "That term is $\\binom{6}{4}(2x^2)^2\\left(\\dfrac{5}{x}\\right)^4$.",
                  "reason": "Substituting a value: $4$ goes into each place of $i$."
                },
                {
                  "step": "$\\binom{6}{4} = 15$",
                  "reason": "Binomial coefficient: $\\binom{6}{4} = \\dfrac{6 \\cdot 5}{2 \\cdot 1}$, after ${4!}$ is cancelled."
                },
                {
                  "step": "The term is $15 \\cdot 4x^4 \\cdot \\dfrac{625}{x^4}$.",
                  "reason": "Power of a product and power of a quotient: $(2x^2)^2 = 4x^4$ and $\\left(\\dfrac{5}{x}\\right)^4 = \\dfrac{625}{x^4}$."
                },
                {
                  "step": "The constant term is $15 \\cdot 4 \\cdot 625 = 37\\,500$.",
                  "reason": "Answering the question asked: the powers of $x$ cancel, and the numbers that are left are multiplied."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t212-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the remainder when $61^{23}$ is divided by $600$.",
            "lines": [
              {
                "step": "Find the remainder when $61^{23}$ is divided by $600$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Write $61 = 60 + 1$, where $60^2 = 3600 = 6 \\cdot 600$.",
                "reason": "The definition of a power, from arithmetic: $60^2 = 60 \\cdot 60$, and $3600$ is a multiple of the divisor $600$."
              },
              {
                "step": "$(60 + 1)^{23} = 60^{23} + \\binom{23}{1}60^{22} + \\dots + \\binom{23}{21}60^2 + \\binom{23}{22} \\cdot 60 + 1$",
                "reason": "Binomial Theorem: with $60$ in the place of $x$, $1$ in the place of $y$ and $n = 23$; every power of $1$ is $1$."
              },
              {
                "step": "Every term before the last two is a multiple of $600$.",
                "reason": "Divisibility of integers, from arithmetic: each of those terms is a whole number times $60^2$, as its power of $60$ has the exponent $2$ or more and a binomial coefficient is a whole number."
              },
              {
                "step": "The last two terms add up to $23 \\cdot 60 + 1 = 1381$.",
                "reason": "Binomial coefficient: $\\binom{23}{22} = 23$."
              },
              {
                "step": "$1381 = 2 \\cdot 600 + 181$",
                "reason": "Division-with-remainder, from arithmetic: $181$ is less than $600$."
              },
              {
                "step": "So $61^{23}$ leaves the remainder $181$ on division by $600$.",
                "reason": "Divisibility of integers, from arithmetic: by lines 3 to 6, $61^{23}$ is a multiple of $600$ plus $181$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when $19^{17}$ is divided by $54$.",
              "form": "Answer as an integer.",
              "answer": "37",
              "lines": [
                {
                  "step": "Find the remainder when $19^{17}$ is divided by $54$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $19 = 18 + 1$, where $18^2 = 324 = 6 \\cdot 54$.",
                  "reason": "The definition of a power, from arithmetic: $18^2 = 18 \\cdot 18$, and $324$ is a multiple of the divisor $54$."
                },
                {
                  "step": "$(18 + 1)^{17} = 18^{17} + \\binom{17}{1}18^{16} + \\dots + \\binom{17}{15}18^2 + \\binom{17}{16} \\cdot 18 + 1$",
                  "reason": "Binomial Theorem: with $18$ in the place of $x$, $1$ in the place of $y$ and $n = 17$; every power of $1$ is $1$."
                },
                {
                  "step": "Every term before the last two is a multiple of $54$.",
                  "reason": "Divisibility of integers, from arithmetic: each of those terms is a whole number times $18^2$, as its power of $18$ has the exponent $2$ or more and a binomial coefficient is a whole number."
                },
                {
                  "step": "The last two terms add up to $17 \\cdot 18 + 1 = 307$.",
                  "reason": "Binomial coefficient: $\\binom{17}{16} = 17$."
                },
                {
                  "step": "$307 = 5 \\cdot 54 + 37$",
                  "reason": "Division-with-remainder, from arithmetic: $37$ is less than $54$."
                },
                {
                  "step": "So $19^{17}$ leaves the remainder $37$ on division by $54$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 to 6, $19^{17}$ is a multiple of $54$ plus $37$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $57^9$ is divided by $196$.",
              "form": "Answer as an integer.",
              "answer": "113",
              "lines": [
                {
                  "step": "Find the remainder when $57^9$ is divided by $196$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $57 = 56 + 1$, where $56^2 = 3136 = 16 \\cdot 196$.",
                  "reason": "The definition of a power, from arithmetic: $56^2 = 56 \\cdot 56$, and $3136$ is a multiple of the divisor $196$."
                },
                {
                  "step": "$(56 + 1)^9 = 56^9 + \\binom{9}{1}56^8 + \\dots + \\binom{9}{7}56^2 + \\binom{9}{8} \\cdot 56 + 1$",
                  "reason": "Binomial Theorem: with $56$ in the place of $x$, $1$ in the place of $y$ and $n = 9$; every power of $1$ is $1$."
                },
                {
                  "step": "Every term before the last two is a multiple of $196$.",
                  "reason": "Divisibility of integers, from arithmetic: each of those terms is a whole number times $56^2$, as its power of $56$ has the exponent $2$ or more and a binomial coefficient is a whole number."
                },
                {
                  "step": "The last two terms add up to $9 \\cdot 56 + 1 = 505$.",
                  "reason": "Binomial coefficient: $\\binom{9}{8} = 9$."
                },
                {
                  "step": "$505 = 2 \\cdot 196 + 113$",
                  "reason": "Division-with-remainder, from arithmetic: $113$ is less than $196$."
                },
                {
                  "step": "So $57^9$ leaves the remainder $113$ on division by $196$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 to 6, $57^9$ is a multiple of $196$ plus $113$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $46^{38}$ is divided by $405$.",
              "form": "Answer as an integer.",
              "answer": "91",
              "lines": [
                {
                  "step": "Find the remainder when $46^{38}$ is divided by $405$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $46 = 45 + 1$, where $45^2 = 2025 = 5 \\cdot 405$.",
                  "reason": "The definition of a power, from arithmetic: $45^2 = 45 \\cdot 45$, and $2025$ is a multiple of the divisor $405$."
                },
                {
                  "step": "$(45 + 1)^{38} = 45^{38} + \\binom{38}{1}45^{37} + \\dots + \\binom{38}{36}45^2 + \\binom{38}{37} \\cdot 45 + 1$",
                  "reason": "Binomial Theorem: with $45$ in the place of $x$, $1$ in the place of $y$ and $n = 38$; every power of $1$ is $1$."
                },
                {
                  "step": "Every term before the last two is a multiple of $405$.",
                  "reason": "Divisibility of integers, from arithmetic: each of those terms is a whole number times $45^2$, as its power of $45$ has the exponent $2$ or more and a binomial coefficient is a whole number."
                },
                {
                  "step": "The last two terms add up to $38 \\cdot 45 + 1 = 1711$.",
                  "reason": "Binomial coefficient: $\\binom{38}{37} = 38$."
                },
                {
                  "step": "$1711 = 4 \\cdot 405 + 91$",
                  "reason": "Division-with-remainder, from arithmetic: $91$ is less than $405$."
                },
                {
                  "step": "So $46^{38}$ leaves the remainder $91$ on division by $405$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 to 6, $46^{38}$ is a multiple of $405$ plus $91$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the remainder when $48^{11} + 50^{18}$ is divided by $343$.",
            "lines": [
              {
                "step": "Find the remainder when $48^{11} + 50^{18}$ is divided by $343$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Write $48 = 49 - 1$ and $50 = 49 + 1$, where $49^2 = 2401 = 7 \\cdot 343$.",
                "reason": "The definition of a power, from arithmetic: $49^2 = 49 \\cdot 49$, and $2401$ is a multiple of the divisor $343$."
              },
              {
                "step": "$(49 - 1)^{11} = 49^{11} - \\binom{11}{1}49^{10} + \\dots - \\binom{11}{9}49^2 + \\binom{11}{10} \\cdot 49 - 1$",
                "reason": "Binomial Theorem and the sign of a power of a negative number: with $49$ in the place of $x$, $-1$ in the place of $y$ and $n = 11$; an odd power of $-1$ is $-1$ and an even power is $1$."
              },
              {
                "step": "$(49 + 1)^{18} = 49^{18} + \\binom{18}{1}49^{17} + \\dots + \\binom{18}{16}49^2 + \\binom{18}{17} \\cdot 49 + 1$",
                "reason": "Binomial Theorem: with $49$ in the place of $x$, $1$ in the place of $y$ and $n = 18$; every power of $1$ is $1$."
              },
              {
                "step": "In both expansions every term before the last two is a multiple of $343$.",
                "reason": "Divisibility of integers, from arithmetic: each of those terms is a whole number times $49^2$, as its power of $49$ has the exponent $2$ or more and a binomial coefficient is a whole number."
              },
              {
                "step": "The four terms that are left add up to $11 \\cdot 49 - 1 + 18 \\cdot 49 + 1 = 1421$.",
                "reason": "Binomial coefficient: $\\binom{11}{10} = 11$ and $\\binom{18}{17} = 18$."
              },
              {
                "step": "$1421 = 4 \\cdot 343 + 49$",
                "reason": "Division-with-remainder, from arithmetic: $49$ is less than $343$."
              },
              {
                "step": "So $48^{11} + 50^{18}$ leaves the remainder $49$ on division by $343$.",
                "reason": "Divisibility of integers, from arithmetic: by lines 3 to 7, the sum is a multiple of $343$ plus $49$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when $23^7 + 25^{16}$ is divided by $192$.",
              "form": "Answer as an integer.",
              "answer": "168",
              "lines": [
                {
                  "step": "Find the remainder when $23^7 + 25^{16}$ is divided by $192$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $23 = 24 - 1$ and $25 = 24 + 1$, where $24^2 = 576 = 3 \\cdot 192$.",
                  "reason": "The definition of a power, from arithmetic: $24^2 = 24 \\cdot 24$, and $576$ is a multiple of the divisor $192$."
                },
                {
                  "step": "$(24 - 1)^7 = 24^7 - \\binom{7}{1}24^6 + \\dots - \\binom{7}{5}24^2 + \\binom{7}{6} \\cdot 24 - 1$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: with $24$ in the place of $x$, $-1$ in the place of $y$ and $n = 7$; an odd power of $-1$ is $-1$ and an even power is $1$."
                },
                {
                  "step": "$(24 + 1)^{16} = 24^{16} + \\binom{16}{1}24^{15} + \\dots + \\binom{16}{14}24^2 + \\binom{16}{15} \\cdot 24 + 1$",
                  "reason": "Binomial Theorem: with $24$ in the place of $x$, $1$ in the place of $y$ and $n = 16$; every power of $1$ is $1$."
                },
                {
                  "step": "In both expansions every term before the last two is a multiple of $192$.",
                  "reason": "Divisibility of integers, from arithmetic: each of those terms is a whole number times $24^2$, as its power of $24$ has the exponent $2$ or more and a binomial coefficient is a whole number."
                },
                {
                  "step": "The four terms that are left add up to $7 \\cdot 24 - 1 + 16 \\cdot 24 + 1 = 552$.",
                  "reason": "Binomial coefficient: $\\binom{7}{6} = 7$ and $\\binom{16}{15} = 16$."
                },
                {
                  "step": "$552 = 2 \\cdot 192 + 168$",
                  "reason": "Division-with-remainder, from arithmetic: $168$ is less than $192$."
                },
                {
                  "step": "So $23^7 + 25^{16}$ leaves the remainder $168$ on division by $192$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 to 7, the sum is a multiple of $192$ plus $168$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $53^9 + 55^{29}$ is divided by $324$.",
              "form": "Answer as an integer.",
              "answer": "108",
              "lines": [
                {
                  "step": "Find the remainder when $53^9 + 55^{29}$ is divided by $324$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $53 = 54 - 1$ and $55 = 54 + 1$, where $54^2 = 2916 = 9 \\cdot 324$.",
                  "reason": "The definition of a power, from arithmetic: $54^2 = 54 \\cdot 54$, and $2916$ is a multiple of the divisor $324$."
                },
                {
                  "step": "$(54 - 1)^9 = 54^9 - \\binom{9}{1}54^8 + \\dots - \\binom{9}{7}54^2 + \\binom{9}{8} \\cdot 54 - 1$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: with $54$ in the place of $x$, $-1$ in the place of $y$ and $n = 9$; an odd power of $-1$ is $-1$ and an even power is $1$."
                },
                {
                  "step": "$(54 + 1)^{29} = 54^{29} + \\binom{29}{1}54^{28} + \\dots + \\binom{29}{27}54^2 + \\binom{29}{28} \\cdot 54 + 1$",
                  "reason": "Binomial Theorem: with $54$ in the place of $x$, $1$ in the place of $y$ and $n = 29$; every power of $1$ is $1$."
                },
                {
                  "step": "In both expansions every term before the last two is a multiple of $324$.",
                  "reason": "Divisibility of integers, from arithmetic: each of those terms is a whole number times $54^2$, as its power of $54$ has the exponent $2$ or more and a binomial coefficient is a whole number."
                },
                {
                  "step": "The four terms that are left add up to $9 \\cdot 54 - 1 + 29 \\cdot 54 + 1 = 2052$.",
                  "reason": "Binomial coefficient: $\\binom{9}{8} = 9$ and $\\binom{29}{28} = 29$."
                },
                {
                  "step": "$2052 = 6 \\cdot 324 + 108$",
                  "reason": "Division-with-remainder, from arithmetic: $108$ is less than $324$."
                },
                {
                  "step": "So $53^9 + 55^{29}$ leaves the remainder $108$ on division by $324$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 to 7, the sum is a multiple of $324$ plus $108$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $22^9 + 24^{38}$ is divided by $529$.",
              "form": "Answer as an integer.",
              "answer": "23",
              "lines": [
                {
                  "step": "Find the remainder when $22^9 + 24^{38}$ is divided by $529$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $22 = 23 - 1$ and $24 = 23 + 1$, where $23^2 = 529$.",
                  "reason": "The definition of a power, from arithmetic: $23^2 = 23 \\cdot 23$, and $529$ is a multiple of the divisor $529$."
                },
                {
                  "step": "$(23 - 1)^9 = 23^9 - \\binom{9}{1}23^8 + \\dots - \\binom{9}{7}23^2 + \\binom{9}{8} \\cdot 23 - 1$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: with $23$ in the place of $x$, $-1$ in the place of $y$ and $n = 9$; an odd power of $-1$ is $-1$ and an even power is $1$."
                },
                {
                  "step": "$(23 + 1)^{38} = 23^{38} + \\binom{38}{1}23^{37} + \\dots + \\binom{38}{36}23^2 + \\binom{38}{37} \\cdot 23 + 1$",
                  "reason": "Binomial Theorem: with $23$ in the place of $x$, $1$ in the place of $y$ and $n = 38$; every power of $1$ is $1$."
                },
                {
                  "step": "In both expansions every term before the last two is a multiple of $529$.",
                  "reason": "Divisibility of integers, from arithmetic: each of those terms is a whole number times $23^2$, as its power of $23$ has the exponent $2$ or more and a binomial coefficient is a whole number."
                },
                {
                  "step": "The four terms that are left add up to $9 \\cdot 23 - 1 + 38 \\cdot 23 + 1 = 1081$.",
                  "reason": "Binomial coefficient: $\\binom{9}{8} = 9$ and $\\binom{38}{37} = 38$."
                },
                {
                  "step": "$1081 = 2 \\cdot 529 + 23$",
                  "reason": "Division-with-remainder, from arithmetic: $23$ is less than $529$."
                },
                {
                  "step": "So $22^9 + 24^{38}$ leaves the remainder $23$ on division by $529$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 to 7, the sum is a multiple of $529$ plus $23$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t212-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the real solution of $x^3 - 12x^2 + 48x = 91$.",
            "lines": [
              {
                "step": "Find the real solution of $x^3 - 12x^2 + 48x = 91$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x - 4)^3 = x^3 - 12x^2 + 48x - 64$",
                "reason": "Binomial Theorem: with $-4$ in the place of $y$ and $n = 3$, the coefficients are $1$, $3$, $3$ and $1$; the left side of the equation is this expansion without its last term."
              },
              {
                "step": "$x^3 - 12x^2 + 48x - 64 = 91 - 64$",
                "reason": "Adding the same number to both sides: $-64$ is added to both sides, which completes the expansion on the left."
              },
              {
                "step": "$(x - 4)^3 = 27$",
                "reason": "Binomial Theorem, read from right to left: by line 2 the left side is $(x - 4)^3$; the right side is $91 - 64 = 27$."
              },
              {
                "step": "$x - 4 = 3$",
                "reason": "The exponent 1/n: for the odd index $3$ each number has one real cube root, and $3^3 = 27$."
              },
              {
                "step": "$x = 7$",
                "reason": "Adding the same number to both sides: $4$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the real solution of $x^3 - 18x^2 + 108x = 280$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 10",
              "lines": [
                {
                  "step": "Find the real solution of $x^3 - 18x^2 + 108x = 280$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 6)^3 = x^3 - 18x^2 + 108x - 216$",
                  "reason": "Binomial Theorem: with $-6$ in the place of $y$ and $n = 3$, the coefficients are $1$, $3$, $3$ and $1$; the left side of the equation is this expansion without its last term."
                },
                {
                  "step": "$x^3 - 18x^2 + 108x - 216 = 280 - 216$",
                  "reason": "Adding the same number to both sides: $-216$ is added to both sides, which completes the expansion on the left."
                },
                {
                  "step": "$(x - 6)^3 = 64$",
                  "reason": "Binomial Theorem, read from right to left: by line 2 the left side is $(x - 6)^3$; the right side is $280 - 216 = 64$."
                },
                {
                  "step": "$x - 6 = 4$",
                  "reason": "The exponent 1/n: for the odd index $3$ each number has one real cube root, and $4^3 = 64$."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Adding the same number to both sides: $6$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the real solution of $x^3 + 15x^2 + 75x = -133$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -7",
              "lines": [
                {
                  "step": "Find the real solution of $x^3 + 15x^2 + 75x = -133$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 5)^3 = x^3 + 15x^2 + 75x + 125$",
                  "reason": "Binomial Theorem: with $5$ in the place of $y$ and $n = 3$, the coefficients are $1$, $3$, $3$ and $1$; the left side of the equation is this expansion without its last term."
                },
                {
                  "step": "$x^3 + 15x^2 + 75x + 125 = -133 + 125$",
                  "reason": "Adding the same number to both sides: $125$ is added to both sides, which completes the expansion on the left."
                },
                {
                  "step": "$(x + 5)^3 = -8$",
                  "reason": "Binomial Theorem, read from right to left: by line 2 the left side is $(x + 5)^3$; the right side is $-133 + 125 = -8$."
                },
                {
                  "step": "$x + 5 = -2$",
                  "reason": "The exponent 1/n: for the odd index $3$ each number has one real cube root, and $(-2)^3 = -8$."
                },
                {
                  "step": "$x = -7$",
                  "reason": "Adding the same number to both sides: $-5$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the real solution of $x^3 - 27x^2 + 243x = 730$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 10",
              "lines": [
                {
                  "step": "Find the real solution of $x^3 - 27x^2 + 243x = 730$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 9)^3 = x^3 - 27x^2 + 243x - 729$",
                  "reason": "Binomial Theorem: with $-9$ in the place of $y$ and $n = 3$, the coefficients are $1$, $3$, $3$ and $1$; the left side of the equation is this expansion without its last term."
                },
                {
                  "step": "$x^3 - 27x^2 + 243x - 729 = 730 - 729$",
                  "reason": "Adding the same number to both sides: $-729$ is added to both sides, which completes the expansion on the left."
                },
                {
                  "step": "$(x - 9)^3 = 1$",
                  "reason": "Binomial Theorem, read from right to left: by line 2 the left side is $(x - 9)^3$; the right side is $730 - 729 = 1$."
                },
                {
                  "step": "$x - 9 = 1$",
                  "reason": "The exponent 1/n: for the odd index $3$ each number has one real cube root, and $1^3 = 1$."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Adding the same number to both sides: $9$ is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every real solution of $256x^4 - 768x^3 + 864x^2 - 432x = 175$.",
            "lines": [
              {
                "step": "Find every real solution of $256x^4 - 768x^3 + 864x^2 - 432x = 175$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(4x - 3)^4 = 256x^4 - 768x^3 + 864x^2 - 432x + 81$",
                "reason": "Binomial Theorem: with $4x$ in the place of $x$, $-3$ in the place of $y$ and $n = 4$, the coefficients are $1$, $4$, $6$, $4$ and $1$; the left side of the equation is this expansion without its last term."
              },
              {
                "step": "$256x^4 - 768x^3 + 864x^2 - 432x + 81 = 175 + 81$",
                "reason": "Adding the same number to both sides: $81$ is added to both sides, which completes the expansion on the left."
              },
              {
                "step": "$(4x - 3)^4 = 256$",
                "reason": "Binomial Theorem, read from right to left: by line 2 the left side is $(4x - 3)^4$; the right side is $175 + 81 = 256$."
              },
              {
                "step": "$(4x - 3)^2 = 16$",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: the square of $(4x - 3)^2$ is $256 = 16^2$, so $(4x - 3)^2$ is $16$ or $-16$, and by the Trivial Inequality the square of a real number is not negative."
              },
              {
                "step": "So $4x - 3 = 4$ or $4x - 3 = -4$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $16 = 4^2$."
              },
              {
                "step": "So $4x = 7$ or $4x = -1$.",
                "reason": "Adding the same number to both sides: $3$ is added to both sides of each equation."
              },
              {
                "step": "So $x = \\dfrac{7}{4}$ or $x = -\\dfrac{1}{4}$.",
                "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every real solution of $625x^4 - 1000x^3 + 600x^2 - 160x = -15$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1/5, x = 3/5",
              "lines": [
                {
                  "step": "Find every real solution of $625x^4 - 1000x^3 + 600x^2 - 160x = -15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5x - 2)^4 = 625x^4 - 1000x^3 + 600x^2 - 160x + 16$",
                  "reason": "Binomial Theorem: with $5x$ in the place of $x$, $-2$ in the place of $y$ and $n = 4$, the coefficients are $1$, $4$, $6$, $4$ and $1$; the left side of the equation is this expansion without its last term."
                },
                {
                  "step": "$625x^4 - 1000x^3 + 600x^2 - 160x + 16 = -15 + 16$",
                  "reason": "Adding the same number to both sides: $16$ is added to both sides, which completes the expansion on the left."
                },
                {
                  "step": "$(5x - 2)^4 = 1$",
                  "reason": "Binomial Theorem, read from right to left: by line 2 the left side is $(5x - 2)^4$; the right side is $-15 + 16 = 1$."
                },
                {
                  "step": "$(5x - 2)^2 = 1$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: the square of $(5x - 2)^2$ is $1 = 1^2$, so $(5x - 2)^2$ is $1$ or $-1$, and by the Trivial Inequality the square of a real number is not negative."
                },
                {
                  "step": "So $5x - 2 = 1$ or $5x - 2 = -1$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $1 = 1^2$."
                },
                {
                  "step": "So $5x = 3$ or $5x = 1$.",
                  "reason": "Adding the same number to both sides: $2$ is added to both sides of each equation."
                },
                {
                  "step": "So $x = \\dfrac{3}{5}$ or $x = \\dfrac{1}{5}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find every real solution of $81x^4 + 432x^3 + 864x^2 + 768x = 1040$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -10/3, x = 2/3",
              "lines": [
                {
                  "step": "Find every real solution of $81x^4 + 432x^3 + 864x^2 + 768x = 1040$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x + 4)^4 = 81x^4 + 432x^3 + 864x^2 + 768x + 256$",
                  "reason": "Binomial Theorem: with $3x$ in the place of $x$, $4$ in the place of $y$ and $n = 4$, the coefficients are $1$, $4$, $6$, $4$ and $1$; the left side of the equation is this expansion without its last term."
                },
                {
                  "step": "$81x^4 + 432x^3 + 864x^2 + 768x + 256 = 1040 + 256$",
                  "reason": "Adding the same number to both sides: $256$ is added to both sides, which completes the expansion on the left."
                },
                {
                  "step": "$(3x + 4)^4 = 1296$",
                  "reason": "Binomial Theorem, read from right to left: by line 2 the left side is $(3x + 4)^4$; the right side is $1040 + 256 = 1296$."
                },
                {
                  "step": "$(3x + 4)^2 = 36$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: the square of $(3x + 4)^2$ is $1296 = 36^2$, so $(3x + 4)^2$ is $36$ or $-36$, and by the Trivial Inequality the square of a real number is not negative."
                },
                {
                  "step": "So $3x + 4 = 6$ or $3x + 4 = -6$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $36 = 6^2$."
                },
                {
                  "step": "So $3x = 2$ or $3x = -10$.",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides of each equation."
                },
                {
                  "step": "So $x = \\dfrac{2}{3}$ or $x = -\\dfrac{10}{3}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Find every real solution of $625x^4 + 1500x^3 + 1350x^2 + 540x = -65$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -1, x = -1/5",
              "lines": [
                {
                  "step": "Find every real solution of $625x^4 + 1500x^3 + 1350x^2 + 540x = -65$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5x + 3)^4 = 625x^4 + 1500x^3 + 1350x^2 + 540x + 81$",
                  "reason": "Binomial Theorem: with $5x$ in the place of $x$, $3$ in the place of $y$ and $n = 4$, the coefficients are $1$, $4$, $6$, $4$ and $1$; the left side of the equation is this expansion without its last term."
                },
                {
                  "step": "$625x^4 + 1500x^3 + 1350x^2 + 540x + 81 = -65 + 81$",
                  "reason": "Adding the same number to both sides: $81$ is added to both sides, which completes the expansion on the left."
                },
                {
                  "step": "$(5x + 3)^4 = 16$",
                  "reason": "Binomial Theorem, read from right to left: by line 2 the left side is $(5x + 3)^4$; the right side is $-65 + 81 = 16$."
                },
                {
                  "step": "$(5x + 3)^2 = 4$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: the square of $(5x + 3)^2$ is $16 = 4^2$, so $(5x + 3)^2$ is $4$ or $-4$, and by the Trivial Inequality the square of a real number is not negative."
                },
                {
                  "step": "So $5x + 3 = 2$ or $5x + 3 = -2$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $4 = 2^2$."
                },
                {
                  "step": "So $5x = -1$ or $5x = -5$.",
                  "reason": "Adding the same number to both sides: $-3$ is added to both sides of each equation."
                },
                {
                  "step": "So $x = -\\dfrac{1}{5}$ or $x = -1$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $5$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{i=0}^{8} \\binom{8}{i} \\cdot 2^i$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{i=0}^{8} \\binom{8}{i} \\cdot 2^i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{i=0}^{8} \\binom{8}{i} \\cdot 2^i = \\sum_{i=0}^{8} \\binom{8}{i} \\cdot 1^{8-i} \\cdot 2^i$",
                "reason": "The definition of a power, from arithmetic: every power of $1$ is $1$, so each term may take the factor $1^{8-i}$."
              },
              {
                "step": "$\\sum_{i=0}^{8} \\binom{8}{i} \\cdot 1^{8-i} \\cdot 2^i = (1 + 2)^8$",
                "reason": "Binomial Theorem, read from right to left: with $1$ in the place of $x$, $2$ in the place of $y$ and $n = 8$."
              },
              {
                "step": "$(1 + 2)^8 = 3^8$",
                "reason": "Order of operations, from arithmetic: the bracket is worked out first."
              },
              {
                "step": "$3^8 = 6561$",
                "reason": "The definition of a power, from arithmetic: $3$ is multiplied by itself until it stands $8$ times."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{i=0}^{7} \\binom{7}{i} \\cdot 2^i$.",
              "form": "Answer as an integer.",
              "answer": "2187",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{i=0}^{7} \\binom{7}{i} \\cdot 2^i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{i=0}^{7} \\binom{7}{i} \\cdot 2^i = \\sum_{i=0}^{7} \\binom{7}{i} \\cdot 1^{7-i} \\cdot 2^i$",
                  "reason": "The definition of a power, from arithmetic: every power of $1$ is $1$, so each term may take the factor $1^{7-i}$."
                },
                {
                  "step": "$\\sum_{i=0}^{7} \\binom{7}{i} \\cdot 1^{7-i} \\cdot 2^i = (1 + 2)^7$",
                  "reason": "Binomial Theorem, read from right to left: with $1$ in the place of $x$, $2$ in the place of $y$ and $n = 7$."
                },
                {
                  "step": "$(1 + 2)^7 = 3^7$",
                  "reason": "Order of operations, from arithmetic: the bracket is worked out first."
                },
                {
                  "step": "$3^7 = 2187$",
                  "reason": "The definition of a power, from arithmetic: $3$ is multiplied by itself until it stands $7$ times."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{i=0}^{3} \\binom{3}{i} \\cdot 3^i$.",
              "form": "Answer as an integer.",
              "answer": "64",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{i=0}^{3} \\binom{3}{i} \\cdot 3^i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{i=0}^{3} \\binom{3}{i} \\cdot 3^i = \\sum_{i=0}^{3} \\binom{3}{i} \\cdot 1^{3-i} \\cdot 3^i$",
                  "reason": "The definition of a power, from arithmetic: every power of $1$ is $1$, so each term may take the factor $1^{3-i}$."
                },
                {
                  "step": "$\\sum_{i=0}^{3} \\binom{3}{i} \\cdot 1^{3-i} \\cdot 3^i = (1 + 3)^3$",
                  "reason": "Binomial Theorem, read from right to left: with $1$ in the place of $x$, $3$ in the place of $y$ and $n = 3$."
                },
                {
                  "step": "$(1 + 3)^3 = 4^3$",
                  "reason": "Order of operations, from arithmetic: the bracket is worked out first."
                },
                {
                  "step": "$4^3 = 64$",
                  "reason": "The definition of a power, from arithmetic: $4$ is multiplied by itself until it stands $3$ times."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{i=0}^{4} \\binom{4}{i} \\cdot 5^i$.",
              "form": "Answer as an integer.",
              "answer": "1296",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{i=0}^{4} \\binom{4}{i} \\cdot 5^i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{i=0}^{4} \\binom{4}{i} \\cdot 5^i = \\sum_{i=0}^{4} \\binom{4}{i} \\cdot 1^{4-i} \\cdot 5^i$",
                  "reason": "The definition of a power, from arithmetic: every power of $1$ is $1$, so each term may take the factor $1^{4-i}$."
                },
                {
                  "step": "$\\sum_{i=0}^{4} \\binom{4}{i} \\cdot 1^{4-i} \\cdot 5^i = (1 + 5)^4$",
                  "reason": "Binomial Theorem, read from right to left: with $1$ in the place of $x$, $5$ in the place of $y$ and $n = 4$."
                },
                {
                  "step": "$(1 + 5)^4 = 6^4$",
                  "reason": "Order of operations, from arithmetic: the bracket is worked out first."
                },
                {
                  "step": "$6^4 = 1296$",
                  "reason": "The definition of a power, from arithmetic: $6$ is multiplied by itself until it stands $4$ times."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t212-k6",
      "forms": [
        {
          "example": {
            "problem": "Compute $(1 + \\sqrt{5})^3 + (1 - \\sqrt{5})^3$.",
            "lines": [
              {
                "step": "Compute $(1 + \\sqrt{5})^3 + (1 - \\sqrt{5})^3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$",
                "reason": "Binomial Theorem: with $n = 3$; $\\binom{3}{0} = \\binom{3}{3} = 1$ and $\\binom{3}{1} = \\binom{3}{2} = 3$."
              },
              {
                "step": "$(x - y)^3 = x^3 - 3x^2y + 3xy^2 - y^3$",
                "reason": "Binomial Theorem and the sign of a power of a negative number: $-y$ goes into the place of $y$, and the odd powers of $-y$ are negative."
              },
              {
                "step": "$(x + y)^3 + (x - y)^3 = 2x^3 + 6xy^2$",
                "reason": "Collecting like terms: the terms with an odd power of $y$ cancel, and each other term stands twice."
              },
              {
                "step": "With $x = 1$ and $y = \\sqrt{5}$, $y^2 = 5$.",
                "reason": "Positive square root: $(\\sqrt{5})^2 = 5$, and by the power law an even power of $\\sqrt{5}$ is a power of $5$."
              },
              {
                "step": "$(1 + \\sqrt{5})^3 + (1 - \\sqrt{5})^3 = 2 + 6 \\cdot 5$",
                "reason": "Substituting a value: $1$ goes into each place of $x$, and the values of line 5 go into the places of the powers of $y$."
              },
              {
                "step": "$2 + 6 \\cdot 5 = 32$",
                "reason": "Order of operations, from arithmetic: each product is worked out, and the products are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $(4 + \\sqrt{5})^5 + (4 - \\sqrt{5})^5$.",
              "form": "Answer as an integer.",
              "answer": "9448",
              "lines": [
                {
                  "step": "Compute $(4 + \\sqrt{5})^5 + (4 - \\sqrt{5})^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + y)^5 = x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5$",
                  "reason": "Binomial Theorem: with $n = 5$; $\\binom{5}{0} = \\binom{5}{5} = 1$, $\\binom{5}{1} = \\binom{5}{4} = 5$ and $\\binom{5}{2} = \\binom{5}{3} = 10$."
                },
                {
                  "step": "$(x - y)^5 = x^5 - 5x^4y + 10x^3y^2 - 10x^2y^3 + 5xy^4 - y^5$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: $-y$ goes into the place of $y$, and the odd powers of $-y$ are negative."
                },
                {
                  "step": "$(x + y)^5 + (x - y)^5 = 2x^5 + 20x^3y^2 + 10xy^4$",
                  "reason": "Collecting like terms: the terms with an odd power of $y$ cancel, and each other term stands twice."
                },
                {
                  "step": "With $x = 4$ and $y = \\sqrt{5}$, $y^2 = 5$ and $y^4 = 25$.",
                  "reason": "Positive square root: $(\\sqrt{5})^2 = 5$, and by the power law an even power of $\\sqrt{5}$ is a power of $5$."
                },
                {
                  "step": "$(4 + \\sqrt{5})^5 + (4 - \\sqrt{5})^5 = 2 \\cdot 1024 + 20 \\cdot 64 \\cdot 5 + 10 \\cdot 4 \\cdot 25$",
                  "reason": "Substituting a value: $4$ goes into each place of $x$, and the values of line 5 go into the places of the powers of $y$."
                },
                {
                  "step": "$2 \\cdot 1024 + 20 \\cdot 64 \\cdot 5 + 10 \\cdot 4 \\cdot 25 = 9448$",
                  "reason": "Order of operations, from arithmetic: each product is worked out, and the products are added."
                }
              ]
            },
            {
              "prompt": "Compute $(3 + \\sqrt{10})^5 + (3 - \\sqrt{10})^5$.",
              "form": "Answer as an integer.",
              "answer": "8886",
              "lines": [
                {
                  "step": "Compute $(3 + \\sqrt{10})^5 + (3 - \\sqrt{10})^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + y)^5 = x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5$",
                  "reason": "Binomial Theorem: with $n = 5$; $\\binom{5}{0} = \\binom{5}{5} = 1$, $\\binom{5}{1} = \\binom{5}{4} = 5$ and $\\binom{5}{2} = \\binom{5}{3} = 10$."
                },
                {
                  "step": "$(x - y)^5 = x^5 - 5x^4y + 10x^3y^2 - 10x^2y^3 + 5xy^4 - y^5$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: $-y$ goes into the place of $y$, and the odd powers of $-y$ are negative."
                },
                {
                  "step": "$(x + y)^5 + (x - y)^5 = 2x^5 + 20x^3y^2 + 10xy^4$",
                  "reason": "Collecting like terms: the terms with an odd power of $y$ cancel, and each other term stands twice."
                },
                {
                  "step": "With $x = 3$ and $y = \\sqrt{10}$, $y^2 = 10$ and $y^4 = 100$.",
                  "reason": "Positive square root: $(\\sqrt{10})^2 = 10$, and by the power law an even power of $\\sqrt{10}$ is a power of $10$."
                },
                {
                  "step": "$(3 + \\sqrt{10})^5 + (3 - \\sqrt{10})^5 = 2 \\cdot 243 + 20 \\cdot 27 \\cdot 10 + 10 \\cdot 3 \\cdot 100$",
                  "reason": "Substituting a value: $3$ goes into each place of $x$, and the values of line 5 go into the places of the powers of $y$."
                },
                {
                  "step": "$2 \\cdot 243 + 20 \\cdot 27 \\cdot 10 + 10 \\cdot 3 \\cdot 100 = 8886$",
                  "reason": "Order of operations, from arithmetic: each product is worked out, and the products are added."
                }
              ]
            },
            {
              "prompt": "Compute $(4 + \\sqrt{6})^4 + (4 - \\sqrt{6})^4$.",
              "form": "Answer as an integer.",
              "answer": "1736",
              "lines": [
                {
                  "step": "Compute $(4 + \\sqrt{6})^4 + (4 - \\sqrt{6})^4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$",
                  "reason": "Binomial Theorem: with $n = 4$; $\\binom{4}{0} = \\binom{4}{4} = 1$, $\\binom{4}{1} = \\binom{4}{3} = 4$ and $\\binom{4}{2} = 6$."
                },
                {
                  "step": "$(x - y)^4 = x^4 - 4x^3y + 6x^2y^2 - 4xy^3 + y^4$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: $-y$ goes into the place of $y$, and the odd powers of $-y$ are negative."
                },
                {
                  "step": "$(x + y)^4 + (x - y)^4 = 2x^4 + 12x^2y^2 + 2y^4$",
                  "reason": "Collecting like terms: the terms with an odd power of $y$ cancel, and each other term stands twice."
                },
                {
                  "step": "With $x = 4$ and $y = \\sqrt{6}$, $y^2 = 6$ and $y^4 = 36$.",
                  "reason": "Positive square root: $(\\sqrt{6})^2 = 6$, and by the power law an even power of $\\sqrt{6}$ is a power of $6$."
                },
                {
                  "step": "$(4 + \\sqrt{6})^4 + (4 - \\sqrt{6})^4 = 2 \\cdot 256 + 12 \\cdot 16 \\cdot 6 + 2 \\cdot 36$",
                  "reason": "Substituting a value: $4$ goes into each place of $x$, and the values of line 5 go into the places of the powers of $y$."
                },
                {
                  "step": "$2 \\cdot 256 + 12 \\cdot 16 \\cdot 6 + 2 \\cdot 36 = 1736$",
                  "reason": "Order of operations, from arithmetic: each product is worked out, and the products are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{i=0}^{2} \\binom{5}{2i} \\cdot 4^i$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{i=0}^{2} \\binom{5}{2i} \\cdot 4^i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(1 + 2)^5 = \\sum_{i=0}^{5} \\binom{5}{i} \\cdot 2^i$",
                "reason": "Binomial Theorem: with $1$ in the place of $x$, $2$ in the place of $y$ and $n = 5$; every power of $1$ is $1$."
              },
              {
                "step": "$(1 - 2)^5 = \\sum_{i=0}^{5} \\binom{5}{i}(-2)^i$",
                "reason": "Binomial Theorem and the sign of a power of a negative number: with $1$ in the place of $x$, $-2$ in the place of $y$ and $n = 5$; an odd power of $-2$ is negative and an even power is positive."
              },
              {
                "step": "$3^5 + (-1)^5 = 2\\sum_{i=0}^{2} \\binom{5}{2i} \\cdot 4^i$",
                "reason": "Adding two equations: lines 2 and 3 are added; a term with an odd $i$ cancels, a term with an even $i$ stands twice, and the even numbers from $0$ to $5$ are $2i$ for $i$ from $0$ to $2$, where by the power law $2^{2i} = 4^i$; on the left, $1 + 2 = 3$ and $1 - 2 = -1$."
              },
              {
                "step": "$\\sum_{i=0}^{2} \\binom{5}{2i} \\cdot 4^i = \\dfrac{3^5 + (-1)^5}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$\\dfrac{3^5 + (-1)^5}{2} = 121$",
                "reason": "The definition of a power, from arithmetic: $3^5 = 243$ and $(-1)^5 = -1$, so the top is $242$, and half of it is $121$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{i=0}^{3} \\binom{6}{2i} \\cdot 9^i$.",
              "form": "Answer as an integer.",
              "answer": "2080",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{i=0}^{3} \\binom{6}{2i} \\cdot 9^i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(1 + 3)^6 = \\sum_{i=0}^{6} \\binom{6}{i} \\cdot 3^i$",
                  "reason": "Binomial Theorem: with $1$ in the place of $x$, $3$ in the place of $y$ and $n = 6$; every power of $1$ is $1$."
                },
                {
                  "step": "$(1 - 3)^6 = \\sum_{i=0}^{6} \\binom{6}{i}(-3)^i$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: with $1$ in the place of $x$, $-3$ in the place of $y$ and $n = 6$; an odd power of $-3$ is negative and an even power is positive."
                },
                {
                  "step": "$4^6 + (-2)^6 = 2\\sum_{i=0}^{3} \\binom{6}{2i} \\cdot 9^i$",
                  "reason": "Adding two equations: lines 2 and 3 are added; a term with an odd $i$ cancels, a term with an even $i$ stands twice, and the even numbers from $0$ to $6$ are $2i$ for $i$ from $0$ to $3$, where by the power law $3^{2i} = 9^i$; on the left, $1 + 3 = 4$ and $1 - 3 = -2$."
                },
                {
                  "step": "$\\sum_{i=0}^{3} \\binom{6}{2i} \\cdot 9^i = \\dfrac{4^6 + (-2)^6}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\dfrac{4^6 + (-2)^6}{2} = 2080$",
                  "reason": "The definition of a power, from arithmetic: $4^6 = 4096$ and $(-2)^6 = 64$, so the top is $4160$, and half of it is $2080$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{i=0}^{2} \\binom{4}{2i} \\cdot 16^i$.",
              "form": "Answer as an integer.",
              "answer": "353",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{i=0}^{2} \\binom{4}{2i} \\cdot 16^i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(1 + 4)^4 = \\sum_{i=0}^{4} \\binom{4}{i} \\cdot 4^i$",
                  "reason": "Binomial Theorem: with $1$ in the place of $x$, $4$ in the place of $y$ and $n = 4$; every power of $1$ is $1$."
                },
                {
                  "step": "$(1 - 4)^4 = \\sum_{i=0}^{4} \\binom{4}{i}(-4)^i$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: with $1$ in the place of $x$, $-4$ in the place of $y$ and $n = 4$; an odd power of $-4$ is negative and an even power is positive."
                },
                {
                  "step": "$5^4 + (-3)^4 = 2\\sum_{i=0}^{2} \\binom{4}{2i} \\cdot 16^i$",
                  "reason": "Adding two equations: lines 2 and 3 are added; a term with an odd $i$ cancels, a term with an even $i$ stands twice, and the even numbers from $0$ to $4$ are $2i$ for $i$ from $0$ to $2$, where by the power law $4^{2i} = 16^i$; on the left, $1 + 4 = 5$ and $1 - 4 = -3$."
                },
                {
                  "step": "$\\sum_{i=0}^{2} \\binom{4}{2i} \\cdot 16^i = \\dfrac{5^4 + (-3)^4}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\dfrac{5^4 + (-3)^4}{2} = 353$",
                  "reason": "The definition of a power, from arithmetic: $5^4 = 625$ and $(-3)^4 = 81$, so the top is $706$, and half of it is $353$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{i=0}^{4} \\binom{8}{2i} \\cdot 4^i$.",
              "form": "Answer as an integer.",
              "answer": "3281",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{i=0}^{4} \\binom{8}{2i} \\cdot 4^i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(1 + 2)^8 = \\sum_{i=0}^{8} \\binom{8}{i} \\cdot 2^i$",
                  "reason": "Binomial Theorem: with $1$ in the place of $x$, $2$ in the place of $y$ and $n = 8$; every power of $1$ is $1$."
                },
                {
                  "step": "$(1 - 2)^8 = \\sum_{i=0}^{8} \\binom{8}{i}(-2)^i$",
                  "reason": "Binomial Theorem and the sign of a power of a negative number: with $1$ in the place of $x$, $-2$ in the place of $y$ and $n = 8$; an odd power of $-2$ is negative and an even power is positive."
                },
                {
                  "step": "$3^8 + (-1)^8 = 2\\sum_{i=0}^{4} \\binom{8}{2i} \\cdot 4^i$",
                  "reason": "Adding two equations: lines 2 and 3 are added; a term with an odd $i$ cancels, a term with an even $i$ stands twice, and the even numbers from $0$ to $8$ are $2i$ for $i$ from $0$ to $4$, where by the power law $2^{2i} = 4^i$; on the left, $1 + 2 = 3$ and $1 - 2 = -1$."
                },
                {
                  "step": "$\\sum_{i=0}^{4} \\binom{8}{2i} \\cdot 4^i = \\dfrac{3^8 + (-1)^8}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\dfrac{3^8 + (-1)^8}{2} = 3281$",
                  "reason": "The definition of a power, from arithmetic: $3^8 = 6561$ and $(-1)^8 = 1$, so the top is $6562$, and half of it is $3281$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t212-k7",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this expansion of $(x - 3)^3 + (x + 5)^3$, and write that line right.",
            "given": [
              "$(x - 3)^3 + (x + 5)^3$",
              "$x^3 - 27 + (x + 5)^3$",
              "$x^3 - 27 + x^3 + 15x^2 + 75x + 125$",
              "$2x^3 + 15x^2 + 75x + 98$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this expansion of $(x - 3)^3 + (x + 5)^3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Each line is checked alone against what comes before it: line 1 is the expression as given, and each line before the wrong one equals the line before it."
              },
              {
                "step": "Line 2 writes $(x - 3)^3$ as $x^3 - 27$ and leaves out the two middle terms.",
                "reason": "A power taken term by term over a sum: the power of a sum is not the sum of the powers, since the terms of the expansion between the first and the last are left out."
              },
              {
                "step": "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
                "reason": "The first wrong line is the first line that does not equal the line before it."
              },
              {
                "step": "Line 2 written right is $x^3 - 9x^2 + 27x - 27 + (x + 5)^3$.",
                "reason": "Binomial Theorem: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, with $-3$ in the place of $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this expansion of $(x - 4)^4 + (x + 7)^3$, and write that line right.",
              "given": [
                "$(x - 4)^4 + (x + 7)^3$",
                "$x^4 - 16x^3 + 96x^2 - 256x + 256 + (x + 7)^3$",
                "$x^4 - 16x^3 + 96x^2 - 256x + 256 + x^3 + 343$",
                "$x^4 - 15x^3 + 96x^2 - 256x + 599$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^4-16*x^3+96*x^2-256*x+256+x^3+21*x^2+147*x+343",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(x - 4)^4 + (x + 7)^3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Each line is checked alone against what comes before it: line 1 is the expression as given, and each line before the wrong one equals the line before it."
                },
                {
                  "step": "Line 3 writes $(x + 7)^3$ as $x^3 + 343$ and leaves out the two middle terms.",
                  "reason": "A power taken term by term over a sum: the power of a sum is not the sum of the powers, since the terms of the expansion between the first and the last are left out."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not equal the line before it."
                },
                {
                  "step": "Line 3 written right is $x^4 - 16x^3 + 96x^2 - 256x + 256 + x^3 + 21x^2 + 147x + 343$.",
                  "reason": "Binomial Theorem: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, with $7$ in the place of $y$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(x + 2)^4 + (x - 7)^3$, and write that line right.",
              "given": [
                "$(x + 2)^4 + (x - 7)^3$",
                "$x^4 + 16 + (x - 7)^3$",
                "$x^4 + 16 + x^3 - 21x^2 + 147x - 343$",
                "$x^4 + x^3 - 21x^2 + 147x - 327$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^4+8*x^3+24*x^2+32*x+16+(x-7)^3",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(x + 2)^4 + (x - 7)^3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Each line is checked alone against what comes before it: line 1 is the expression as given, and each line before the wrong one equals the line before it."
                },
                {
                  "step": "Line 2 writes $(x + 2)^4$ as $x^4 + 16$ and leaves out the three middle terms.",
                  "reason": "A power taken term by term over a sum: the power of a sum is not the sum of the powers, since the terms of the expansion between the first and the last are left out."
                },
                {
                  "step": "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not equal the line before it."
                },
                {
                  "step": "Line 2 written right is $x^4 + 8x^3 + 24x^2 + 32x + 16 + (x - 7)^3$.",
                  "reason": "Binomial Theorem: $(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$, with $2$ in the place of $y$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(x + 4)^4 + (x - 3)^3$, and write that line right.",
              "given": [
                "$(x + 4)^4 + (x - 3)^3$",
                "$x^4 + 16x^3 + 96x^2 + 256x + 256 + (x - 3)^3$",
                "$x^4 + 16x^3 + 96x^2 + 256x + 256 + x^3 - 27$",
                "$x^4 + 17x^3 + 96x^2 + 256x + 229$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^4+16*x^3+96*x^2+256*x+256+x^3-9*x^2+27*x-27",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(x + 4)^4 + (x - 3)^3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Each line is checked alone against what comes before it: line 1 is the expression as given, and each line before the wrong one equals the line before it."
                },
                {
                  "step": "Line 3 writes $(x - 3)^3$ as $x^3 - 27$ and leaves out the two middle terms.",
                  "reason": "A power taken term by term over a sum: the power of a sum is not the sum of the powers, since the terms of the expansion between the first and the last are left out."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not equal the line before it."
                },
                {
                  "step": "Line 3 written right is $x^4 + 16x^3 + 96x^2 + 256x + 256 + x^3 - 9x^2 + 27x - 27$.",
                  "reason": "Binomial Theorem: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, with $-3$ in the place of $y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this expansion of $(x + 5)^3 + (x - 2)^3$, and write that line right.",
            "given": [
              "$(x + 5)^3 + (x - 2)^3$",
              "$x^3 + 15x^2 + 75x + 125 + (x - 2)^3$",
              "$x^3 + 15x^2 + 75x + 125 + x^3 + 6x^2 + 12x + 8$",
              "$2x^3 + 21x^2 + 87x + 133$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this expansion of $(x + 5)^3 + (x - 2)^3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Each line is checked alone against what comes before it: line 1 is the expression as given, and each line before the wrong one equals the line before it."
              },
              {
                "step": "Line 3 expands $(x - 2)^3$ as $x^3 + 6x^2 + 12x + 8$, with every term positive.",
                "reason": "A sign lost: $-2$ stands in the place of $y$, and its odd powers are negative, so the terms with an odd power of $-2$ keep a minus sign."
              },
              {
                "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                "reason": "The first wrong line is the first line that does not equal the line before it."
              },
              {
                "step": "Line 3 written right is $x^3 + 15x^2 + 75x + 125 + x^3 - 6x^2 + 12x - 8$.",
                "reason": "Binomial Theorem: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, with $-2$ in the place of $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this expansion of $(x - 4)^3 + (x + 6)^3$, and write that line right.",
              "given": [
                "$(x - 4)^3 + (x + 6)^3$",
                "$x^3 + 12x^2 + 48x + 64 + (x + 6)^3$",
                "$x^3 + 12x^2 + 48x + 64 + x^3 + 18x^2 + 108x + 216$",
                "$2x^3 + 30x^2 + 156x + 280$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^3-12*x^2+48*x-64+(x+6)^3",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(x - 4)^3 + (x + 6)^3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Each line is checked alone against what comes before it: line 1 is the expression as given, and each line before the wrong one equals the line before it."
                },
                {
                  "step": "Line 2 expands $(x - 4)^3$ as $x^3 + 12x^2 + 48x + 64$, with every term positive.",
                  "reason": "A sign lost: $-4$ stands in the place of $y$, and its odd powers are negative, so the terms with an odd power of $-4$ keep a minus sign."
                },
                {
                  "step": "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not equal the line before it."
                },
                {
                  "step": "Line 2 written right is $x^3 - 12x^2 + 48x - 64 + (x + 6)^3$.",
                  "reason": "Binomial Theorem: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, with $-4$ in the place of $y$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(x - 6)^3 + (x + 4)^4$, and write that line right.",
              "given": [
                "$(x - 6)^3 + (x + 4)^4$",
                "$x^3 - 18x^2 + 108x - 216 + (x + 4)^4$",
                "$x^3 - 18x^2 + 108x - 216 + x^4 + 16x^3 + 96x^2 + 256x + 256$",
                "$x^4 + 17x^3 + 114x^2 + 364x + 40$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x^4+17*x^3+78*x^2+364*x+40",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(x - 6)^3 + (x + 4)^4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Each line is checked alone against what comes before it: line 1 is the expression as given, and each line before the wrong one equals the line before it."
                },
                {
                  "step": "Line 4 collects $-18x^2$ and $96x^2$ of line 3 as $114x^2$.",
                  "reason": "A sign lost: the term $-18x^2$ keeps its minus sign, so the two terms add to $78x^2$."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not equal the line before it."
                },
                {
                  "step": "Line 4 written right is $x^4 + 17x^3 + 78x^2 + 364x + 40$.",
                  "reason": "Collecting like terms: like terms are added with their signs."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(x + 4)^3 + (x - 2)^3$, and write that line right.",
              "given": [
                "$(x + 4)^3 + (x - 2)^3$",
                "$x^3 + 12x^2 + 48x + 64 + (x - 2)^3$",
                "$x^3 + 12x^2 + 48x + 64 + x^3 + 6x^2 + 12x + 8$",
                "$2x^3 + 18x^2 + 60x + 72$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^3+12*x^2+48*x+64+x^3-6*x^2+12*x-8",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(x + 4)^3 + (x - 2)^3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Each line is checked alone against what comes before it: line 1 is the expression as given, and each line before the wrong one equals the line before it."
                },
                {
                  "step": "Line 3 expands $(x - 2)^3$ as $x^3 + 6x^2 + 12x + 8$, with every term positive.",
                  "reason": "A sign lost: $-2$ stands in the place of $y$, and its odd powers are negative, so the terms with an odd power of $-2$ keep a minus sign."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not equal the line before it."
                },
                {
                  "step": "Line 3 written right is $x^3 + 12x^2 + 48x + 64 + x^3 - 6x^2 + 12x - 8$.",
                  "reason": "Binomial Theorem: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, with $-2$ in the place of $y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t212-k8",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left, as one fraction in which ${23!}$ has been cancelled and no product is worked out: The number $y$ is the binomial coefficient with $25$ above and $2$ below.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left, as one fraction in which ${23!}$ has been cancelled and no product is worked out: The number $y$ is the binomial coefficient with $25$ above and $2$ below.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In symbols the sentence says $y = \\dfrac{{25!}}{{2!} \\cdot {23!}}$.",
                "reason": "Binomial coefficient: the words name the two numbers of the coefficient, and $\\binom{25}{2} = \\dfrac{{25!}}{{2!} \\cdot {23!}}$."
              },
              {
                "step": "$\\dfrac{{25!}}{{2!} \\cdot {23!}} = \\dfrac{25 \\cdot 24}{2 \\cdot 1}$",
                "reason": "Factorial: ${25!} = 25 \\cdot 24 \\cdot {23!}$, so ${23!}$ is cancelled, and ${2!} = 2 \\cdot 1$."
              },
              {
                "step": "$y = \\dfrac{25 \\cdot 24}{2 \\cdot 1}$",
                "reason": "Writing a sentence as an equation: the number $y$ stands alone on the left, and no product is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left, as one fraction in which ${8!}$ has been cancelled and no product is worked out: In row $12$ of Pascal's triangle, with the places counted from $0$, the number in place $4$ is $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (12*11*10*9)/(4*3*2*1)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left, as one fraction in which ${8!}$ has been cancelled and no product is worked out: In row $12$ of Pascal's triangle, with the places counted from $0$, the number in place $4$ is $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $y = \\dfrac{{12!}}{{4!} \\cdot {8!}}$.",
                  "reason": "Binomial coefficient: row $12$ holds the coefficients $\\binom{12}{0}$ to $\\binom{12}{12}$, and place $4$ holds $\\binom{12}{4}$, and $\\binom{12}{4} = \\dfrac{{12!}}{{4!} \\cdot {8!}}$."
                },
                {
                  "step": "$\\dfrac{{12!}}{{4!} \\cdot {8!}} = \\dfrac{12 \\cdot 11 \\cdot 10 \\cdot 9}{4 \\cdot 3 \\cdot 2 \\cdot 1}$",
                  "reason": "Factorial: ${12!} = 12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot {8!}$, so ${8!}$ is cancelled, and ${4!} = 4 \\cdot 3 \\cdot 2 \\cdot 1$."
                },
                {
                  "step": "$y = \\dfrac{12 \\cdot 11 \\cdot 10 \\cdot 9}{4 \\cdot 3 \\cdot 2 \\cdot 1}$",
                  "reason": "Writing a sentence as an equation: the number $y$ stands alone on the left, and no product is worked out."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left, as one fraction in which ${13!}$ has been cancelled and no product is worked out: Pascal's triangle has the number $y$ in row $16$, three places after the $1$ that begins the row.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (16*15*14)/(3*2*1)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left, as one fraction in which ${13!}$ has been cancelled and no product is worked out: Pascal's triangle has the number $y$ in row $16$, three places after the $1$ that begins the row.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $y = \\dfrac{{16!}}{{3!} \\cdot {13!}}$.",
                  "reason": "Binomial coefficient: the $1$ that begins row $16$ is $\\binom{16}{0}$, so three places after it stands $\\binom{16}{3}$, and $\\binom{16}{3} = \\dfrac{{16!}}{{3!} \\cdot {13!}}$."
                },
                {
                  "step": "$\\dfrac{{16!}}{{3!} \\cdot {13!}} = \\dfrac{16 \\cdot 15 \\cdot 14}{3 \\cdot 2 \\cdot 1}$",
                  "reason": "Factorial: ${16!} = 16 \\cdot 15 \\cdot 14 \\cdot {13!}$, so ${13!}$ is cancelled, and ${3!} = 3 \\cdot 2 \\cdot 1$."
                },
                {
                  "step": "$y = \\dfrac{16 \\cdot 15 \\cdot 14}{3 \\cdot 2 \\cdot 1}$",
                  "reason": "Writing a sentence as an equation: the number $y$ stands alone on the left, and no product is worked out."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left, as one fraction in which ${16!}$ has been cancelled and no product is worked out: The number $y$ is the binomial coefficient with $18$ above and $2$ below.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (18*17)/(2*1)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left, as one fraction in which ${16!}$ has been cancelled and no product is worked out: The number $y$ is the binomial coefficient with $18$ above and $2$ below.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $y = \\dfrac{{18!}}{{2!} \\cdot {16!}}$.",
                  "reason": "Binomial coefficient: the words name the two numbers of the coefficient, and $\\binom{18}{2} = \\dfrac{{18!}}{{2!} \\cdot {16!}}$."
                },
                {
                  "step": "$\\dfrac{{18!}}{{2!} \\cdot {16!}} = \\dfrac{18 \\cdot 17}{2 \\cdot 1}$",
                  "reason": "Factorial: ${18!} = 18 \\cdot 17 \\cdot {16!}$, so ${16!}$ is cancelled, and ${2!} = 2 \\cdot 1$."
                },
                {
                  "step": "$y = \\dfrac{18 \\cdot 17}{2 \\cdot 1}$",
                  "reason": "Writing a sentence as an equation: the number $y$ stands alone on the left, and no product is worked out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with $z$ alone on the left, the binomial coefficient worked out and no power worked out: In the expansion of $(5x + 2)^8$, the term that holds $x^2$ is $z$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $z$ alone on the left, the binomial coefficient worked out and no power worked out: In the expansion of $(5x + 2)^8$, the term that holds $x^2$ is $z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms of the expansion are $\\binom{8}{i}(5x)^{8-i} \\cdot 2^i$ for $i$ from $0$ to $8$.",
                "reason": "Binomial Theorem: with $5x$ in the place of $x$, $2$ in the place of $y$ and $n = 8$."
              },
              {
                "step": "The term named has $i = 6$.",
                "reason": "Writing a sentence as an equation: the words \"holds $x^2$\" give $8 - i = 2$, so $i = 6$."
              },
              {
                "step": "$\\binom{8}{6} = 28$",
                "reason": "Binomial coefficient: $\\binom{8}{6} = \\dfrac{8 \\cdot 7}{2 \\cdot 1}$, after ${6!}$ is cancelled."
              },
              {
                "step": "$z = 28(5x)^2 \\cdot 2^6$",
                "reason": "Writing a sentence as an equation: $6$ goes into each place of $i$, and the term $z$ stands alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left, the binomial coefficient worked out and no power worked out: When $(2x + 3)^8$ is expanded in descending powers of $x$, the fourth term is $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 56*(2*x)^5*3^3",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left, the binomial coefficient worked out and no power worked out: When $(2x + 3)^8$ is expanded in descending powers of $x$, the fourth term is $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{8}{i}(2x)^{8-i} \\cdot 3^i$ for $i$ from $0$ to $8$.",
                  "reason": "Binomial Theorem: with $2x$ in the place of $x$, $3$ in the place of $y$ and $n = 8$."
                },
                {
                  "step": "The term named has $i = 3$.",
                  "reason": "Writing a sentence as an equation: the first term has $i = 0$, so the fourth term has $i = 3$."
                },
                {
                  "step": "$\\binom{8}{3} = 56$",
                  "reason": "Binomial coefficient: $\\binom{8}{3} = \\dfrac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1}$, after ${5!}$ is cancelled."
                },
                {
                  "step": "$z = 56(2x)^5 \\cdot 3^3$",
                  "reason": "Writing a sentence as an equation: $3$ goes into each place of $i$, and the term $z$ stands alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left, the binomial coefficient worked out and no power worked out: The term $z$ of the expansion of $(4x - 3)^9$ is the one in which $-3$ is raised to the power $2$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 36*(4*x)^7*(-3)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left, the binomial coefficient worked out and no power worked out: The term $z$ of the expansion of $(4x - 3)^9$ is the one in which $-3$ is raised to the power $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{9}{i}(4x)^{9-i}(-3)^i$ for $i$ from $0$ to $9$.",
                  "reason": "Binomial Theorem: with $4x$ in the place of $x$, $-3$ in the place of $y$ and $n = 9$."
                },
                {
                  "step": "The term named has $i = 2$.",
                  "reason": "Writing a sentence as an equation: the words \"raised to the power $2$\" name the exponent of $-3$, which is $i$."
                },
                {
                  "step": "$\\binom{9}{2} = 36$",
                  "reason": "Binomial coefficient: $\\binom{9}{2} = \\dfrac{9 \\cdot 8}{2 \\cdot 1}$, after ${7!}$ is cancelled."
                },
                {
                  "step": "$z = 36(4x)^7(-3)^2$",
                  "reason": "Writing a sentence as an equation: $2$ goes into each place of $i$, and the term $z$ stands alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left, the binomial coefficient worked out and no power worked out: The term $z$ of the expansion of $(3x + 5)^6$ is the one in which $5$ is raised to the power $3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 20*(3*x)^3*5^3",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left, the binomial coefficient worked out and no power worked out: The term $z$ of the expansion of $(3x + 5)^6$ is the one in which $5$ is raised to the power $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms of the expansion are $\\binom{6}{i}(3x)^{6-i} \\cdot 5^i$ for $i$ from $0$ to $6$.",
                  "reason": "Binomial Theorem: with $3x$ in the place of $x$, $5$ in the place of $y$ and $n = 6$."
                },
                {
                  "step": "The term named has $i = 3$.",
                  "reason": "Writing a sentence as an equation: the words \"raised to the power $3$\" name the exponent of $5$, which is $i$."
                },
                {
                  "step": "$\\binom{6}{3} = 20$",
                  "reason": "Binomial coefficient: $\\binom{6}{3} = \\dfrac{6 \\cdot 5 \\cdot 4}{3 \\cdot 2 \\cdot 1}$, after ${3!}$ is cancelled."
                },
                {
                  "step": "$z = 20(3x)^3 \\cdot 5^3$",
                  "reason": "Writing a sentence as an equation: $3$ goes into each place of $i$, and the term $z$ stands alone on the left."
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
      "id": "t212-p1",
      "method": "direct proof",
      "statement": "For all whole numbers $n$ and $r$ with $0 \\le r < n$, $\\binom{n}{r} + \\binom{n}{r+1} = \\binom{n+1}{r+1}$.",
      "idea": "Both coefficients are written as fractions by the definition. Their bottoms differ in one factor each, so $(r + 1)!(n - r)!$ is a common denominator. The two tops then add up to $(n + 1) \\cdot {n!}$, which is $(n + 1)!$.",
      "lines": [
        {
          "line": "By the definition, $\\binom{n}{r} = \\dfrac{n!}{r!(n - r)!}$ and $\\binom{n}{r+1} = \\dfrac{n!}{(r + 1)!(n - r - 1)!}$.",
          "reason": "Binomial coefficient: both are defined, as $0 \\le r$ and $r + 1 \\le n$, and $n - (r + 1) = n - r - 1$."
        },
        {
          "line": "Also $(r + 1)! = (r + 1) \\cdot {r!}$ and $(n - r)! = (n - r) \\cdot (n - r - 1)!$.",
          "reason": "Factorial: each factorial is its whole number times the factorial of the whole number before it, and $n - r$ is $1$ or more."
        },
        {
          "line": "So $\\binom{n}{r} = \\dfrac{(r + 1) \\cdot n!}{(r + 1) \\cdot {r!} \\cdot (n - r)!}$.",
          "reason": "The cancellation law, from arithmetic: the first fraction of line 1 is multiplied above and below by $r + 1$."
        },
        {
          "line": "So $\\binom{n}{r} = \\dfrac{(r + 1) \\cdot n!}{(r + 1)!(n - r)!}$.",
          "reason": "Factorial: by line 2, $(r + 1) \\cdot {r!} = (r + 1)!$."
        },
        {
          "line": "Also $\\binom{n}{r+1} = \\dfrac{(n - r) \\cdot n!}{(r + 1)! \\cdot (n - r) \\cdot (n - r - 1)!}$.",
          "reason": "The cancellation law, from arithmetic: the second fraction of line 1 is multiplied above and below by $n - r$."
        },
        {
          "line": "So $\\binom{n}{r+1} = \\dfrac{(n - r) \\cdot n!}{(r + 1)!(n - r)!}$.",
          "reason": "Factorial: by line 2, $(n - r) \\cdot (n - r - 1)! = (n - r)!$."
        },
        {
          "line": "So $\\binom{n}{r} + \\binom{n}{r+1} = \\dfrac{(r + 1) \\cdot {n!} + (n - r) \\cdot n!}{(r + 1)!(n - r)!}$.",
          "reason": "Adding fractions with the same denominator, from arithmetic: by lines 4 and 6 the two bottoms are equal, so the tops are added."
        },
        {
          "line": "The top is $(n + 1) \\cdot {n!}$.",
          "reason": "Taking out a common factor: ${n!}$ is a factor of both terms, and $(r + 1) + (n - r) = n + 1$."
        },
        {
          "line": "The top is then $(n + 1)!$.",
          "reason": "Factorial: the next whole number times ${n!}$ is the factorial of that whole number."
        },
        {
          "line": "So $\\binom{n}{r} + \\binom{n}{r+1} = \\dfrac{(n + 1)!}{(r + 1)!(n - r)!}$.",
          "reason": "Substituting a value: the top of line 9 goes into the fraction of line 7."
        },
        {
          "line": "Therefore $\\binom{n}{r} + \\binom{n}{r+1} = \\binom{n+1}{r+1}$.",
          "reason": "Binomial coefficient: with $n + 1$ above and $r + 1$ below, the bottom is $(r + 1)!((n + 1) - (r + 1))!$, and $(n + 1) - (r + 1) = n - r$."
        }
      ]
    },
    {
      "id": "t212-p2",
      "method": "induction",
      "statement": "For all numbers $x$ and $y$ and every whole number $n \\ge 1$, $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$, where $x^0$ and $y^0$ are read as $1$.",
      "idea": "Multiplying the expansion of $(x + y)^k$ by $x + y$ gives two sums. In the two sums, the terms with the same powers of $x$ and $y$ have neighbouring coefficients $\\binom{k}{i-1}$ and $\\binom{k}{i}$, and by Pascal's identity these add up to $\\binom{k+1}{i}$, the coefficient the expansion of $(x + y)^{k+1}$ needs.",
      "lines": [
        {
          "line": "Let $x$ and $y$ be numbers, and let the statement for $n$ be $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$.",
          "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
        },
        {
          "line": "At $n = 1$ the left side is $x + y$ and the right side is $\\binom{1}{0}x + \\binom{1}{1}y = x + y$.",
          "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim, as $\\binom{1}{0} = \\binom{1}{1} = 1$."
        },
        {
          "line": "Assume that $(x + y)^k = \\sum_{i=0}^{k} \\binom{k}{i}x^{k-i}y^i$ for a whole number $k \\ge 1$.",
          "reason": "Inductive assumption: the statement for $n = k$."
        },
        {
          "line": "Then $(x + y)^{k+1} = (x + y)\\sum_{i=0}^{k} \\binom{k}{i}x^{k-i}y^i$.",
          "reason": "Multiplying both sides by the same number: both sides of line 3 are multiplied by $x + y$, and by the product law $(x + y)(x + y)^k = (x + y)^{k+1}$."
        },
        {
          "line": "The right side is $\\sum_{i=0}^{k} \\binom{k}{i}x \\cdot x^{k-i}y^i + \\sum_{i=0}^{k} \\binom{k}{i}x^{k-i}y^i \\cdot y$.",
          "reason": "Sums split and constants come out: the sum is multiplied by $x$ and by $y$, and each of the two factors goes into every term of its sum."
        },
        {
          "line": "So the right side is $\\sum_{i=0}^{k} \\binom{k}{i}x^{k+1-i}y^i + \\sum_{i=0}^{k} \\binom{k}{i}x^{k-i}y^{i+1}$.",
          "reason": "Product law: $x \\cdot x^{k-i} = x^{k+1-i}$ and $y^i \\cdot y = y^{i+1}$."
        },
        {
          "line": "The second sum is $\\sum_{i=1}^{k+1} \\binom{k}{i-1}x^{k+1-i}y^i$.",
          "reason": "Shifting the index: both limits go up by $1$, and the term takes $i - 1$ in the place of $i$."
        },
        {
          "line": "The first sum is $x^{k+1} + \\sum_{i=1}^{k} \\binom{k}{i}x^{k+1-i}y^i$.",
          "reason": "Sigma notation: the term for $i = 0$ is written apart, and $\\binom{k}{0} = 1$."
        },
        {
          "line": "The second sum is $\\sum_{i=1}^{k} \\binom{k}{i-1}x^{k+1-i}y^i + y^{k+1}$.",
          "reason": "Sigma notation: the term for $i = k + 1$ of line 7 is written apart, and $\\binom{k}{k} = 1$."
        },
        {
          "line": "So $(x + y)^{k+1} = x^{k+1} + \\sum_{i=1}^{k} \\left(\\binom{k}{i-1} + \\binom{k}{i}\\right)x^{k+1-i}y^i + y^{k+1}$.",
          "reason": "Sums split and constants come out, read from right to left: the two sums of lines 8 and 9 have the same limits, and the common factor $x^{k+1-i}y^i$ is taken out of each pair of terms."
        },
        {
          "line": "Here $\\binom{k}{i-1} + \\binom{k}{i} = \\binom{k+1}{i}$ for each $i$ from $1$ to $k$.",
          "reason": "Pascal's identity: with $n = k$ and $r = i - 1$, where $0 \\le i - 1 < k$."
        },
        {
          "line": "So $(x + y)^{k+1} = x^{k+1} + \\sum_{i=1}^{k} \\binom{k+1}{i}x^{k+1-i}y^i + y^{k+1}$.",
          "reason": "Substituting a value: by line 11, $\\binom{k+1}{i}$ goes into the place of the bracket in each term of the sum of line 10."
        },
        {
          "line": "So $(x + y)^{k+1} = \\sum_{i=0}^{k+1} \\binom{k+1}{i}x^{k+1-i}y^i$, the statement for $n = k + 1$.",
          "reason": "Inductive step: in line 12, $x^{k+1}$ and $y^{k+1}$ are the terms of the sum for $i = 0$ and $i = k + 1$, since $\\binom{k+1}{0} = \\binom{k+1}{k+1} = 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
        },
        {
          "line": "Therefore $(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i}x^{n-i}y^i$ for every whole number $n \\ge 1$.",
          "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 13."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t212-s1",
      "method": "direct proof",
      "statement": "Prove that for all whole numbers $n$ and $r$ with $0 \\le r \\le n$, $\\binom{n}{n-r} = \\binom{n}{r}$. Facts it may use: Binomial coefficient, subtracting a bracket changes every sign in it, the commutative law of multiplication.",
      "check": {
        "proof": [
          {
            "line": "The number $n - r$ is a whole number from $0$ to $n$, so $\\binom{n}{n-r}$ is defined.",
            "reason": "Binomial coefficient: the lower number has to be a whole number from $0$ to $n$, and $0 \\le r \\le n$ gives $0 \\le n - r \\le n$."
          },
          {
            "line": "So $\\binom{n}{n-r} = \\dfrac{n!}{(n - r)!(n - (n - r))!}$.",
            "reason": "Binomial coefficient: $n - r$ goes into each place of the lower number."
          },
          {
            "line": "Here $n - (n - r) = r$.",
            "reason": "Subtracting a bracket changes every sign in it: $n - (n - r) = n - n + r$."
          },
          {
            "line": "So $\\binom{n}{n-r} = \\dfrac{n!}{(n - r)! \\cdot r!}$.",
            "reason": "Substituting a value: by line 3, $r$ goes into the place of $n - (n - r)$."
          },
          {
            "line": "So $\\binom{n}{n-r} = \\dfrac{n!}{r!(n - r)!}$.",
            "reason": "The commutative law of multiplication, from arithmetic: the two factors of the bottom change places."
          },
          {
            "line": "Therefore $\\binom{n}{n-r} = \\binom{n}{r}$.",
            "reason": "Binomial coefficient: the fraction of line 5 is the definition of $\\binom{n}{r}$."
          }
        ]
      }
    },
    {
      "id": "t212-s2",
      "method": "direct proof",
      "statement": "Prove that for all whole numbers $n$ and $r$ with $0 \\le r \\le n$, $(n + 1)\\binom{n}{r} = (r + 1)\\binom{n+1}{r+1}$. Facts it may use: Factorial, Binomial coefficient, cancelling a common factor, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "By the definition, $(n + 1)\\binom{n}{r} = \\dfrac{(n + 1) \\cdot n!}{r!(n - r)!}$.",
            "reason": "Binomial coefficient: the definition of $\\binom{n}{r}$, multiplied by $n + 1$."
          },
          {
            "line": "So $(n + 1)\\binom{n}{r} = \\dfrac{(n + 1)!}{r!(n - r)!}$.",
            "reason": "Factorial: the next whole number times ${n!}$ is the factorial of that whole number."
          },
          {
            "line": "Also $\\binom{n+1}{r+1} = \\dfrac{(n + 1)!}{(r + 1)!(n - r)!}$.",
            "reason": "Binomial coefficient: $0 \\le r + 1 \\le n + 1$, and $(n + 1) - (r + 1) = n - r$."
          },
          {
            "line": "So $(r + 1)\\binom{n+1}{r+1} = \\dfrac{(r + 1) \\cdot (n + 1)!}{(r + 1) \\cdot {r!} \\cdot (n - r)!}$.",
            "reason": "Factorial: $(r + 1)! = (r + 1) \\cdot {r!}$, and both sides of line 3 are multiplied by $r + 1$."
          },
          {
            "line": "So $(r + 1)\\binom{n+1}{r+1} = \\dfrac{(n + 1)!}{r!(n - r)!}$.",
            "reason": "Cancelling a common factor: $r + 1$ is positive, so it is not $0$."
          },
          {
            "line": "Therefore $(n + 1)\\binom{n}{r} = (r + 1)\\binom{n+1}{r+1}$.",
            "reason": "Transitive property: by lines 2 and 5 both sides equal one fraction."
          }
        ]
      }
    },
    {
      "id": "t212-s3",
      "method": "induction",
      "statement": "Prove that for every whole number $r \\ge 0$ and every whole number $n \\ge r$, $\\sum_{m=r}^{n} \\binom{m}{r} = \\binom{n+1}{r+1}$. Facts it may use: Induction, Base case, Inductive assumption, Inductive step, Binomial coefficient, Pascal's identity, adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "Let $r$ be a whole number, and let the statement for $n$ be $\\sum_{m=r}^{n} \\binom{m}{r} = \\binom{n+1}{r+1}$.",
            "reason": "Induction: the claim is one statement for each whole number $n \\ge r$, and it is proved by a base case and an inductive step."
          },
          {
            "line": "At $n = r$ the left side is $\\binom{r}{r} = 1$ and the right side is $\\binom{r+1}{r+1} = 1$.",
            "reason": "Base case: the statement holds for $n = r$, the least $n$ of the claim, as a binomial coefficient with equal upper and lower numbers is $1$."
          },
          {
            "line": "Assume that $\\sum_{m=r}^{k} \\binom{m}{r} = \\binom{k+1}{r+1}$ for a whole number $k \\ge r$.",
            "reason": "Inductive assumption: the statement for $n = k$."
          },
          {
            "line": "Then $\\sum_{m=r}^{k+1} \\binom{m}{r} = \\binom{k+1}{r+1} + \\binom{k+1}{r}$.",
            "reason": "Adding the same number to both sides: the next term, $\\binom{k+1}{r}$, is added to both sides of line 3."
          },
          {
            "line": "Here $\\binom{k+1}{r} + \\binom{k+1}{r+1} = \\binom{k+2}{r+1}$.",
            "reason": "Pascal's identity: with $k + 1$ in the place of $n$, where $0 \\le r < k + 1$."
          },
          {
            "line": "So $\\sum_{m=r}^{k+1} \\binom{m}{r} = \\binom{(k+1)+1}{r+1}$, the statement for $n = k + 1$.",
            "reason": "Inductive step: by lines 4 and 5; the statement for $n = k$ has given the statement for $n = k + 1$."
          },
          {
            "line": "Therefore $\\sum_{m=r}^{n} \\binom{m}{r} = \\binom{n+1}{r+1}$ for every whole number $n \\ge r$.",
            "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
          }
        ]
      }
    },
    {
      "id": "t212-s4",
      "method": "direct proof",
      "statement": "Prove that for all whole numbers $n$ and $r$ with $n \\ge 1$ and $0 \\le r \\le n$, $\\binom{n}{r} < 2^n$. Facts it may use: Binomial Theorem, Binomial coefficient, adding two inequalities, adding the same number.",
      "check": {
        "proof": [
          {
            "line": "By the Binomial Theorem, $2^n = (1 + 1)^n = \\sum_{i=0}^{n} \\binom{n}{i}$.",
            "reason": "Binomial Theorem: with $1$ in the place of $x$ and of $y$; every power of $1$ is $1$."
          },
          {
            "line": "Each term $\\binom{n}{i}$ of the sum is positive.",
            "reason": "Binomial coefficient: it is a quotient of factorials, and each factorial is a positive whole number."
          },
          {
            "line": "The sum has $n + 1$ terms, so it has a term other than $\\binom{n}{r}$.",
            "reason": "Sigma notation: the index takes each whole number from $0$ to $n$, and $n + 1$ is $2$ or more as $n \\ge 1$."
          },
          {
            "line": "The terms other than $\\binom{n}{r}$ add up to a positive number.",
            "reason": "Adding two inequalities: each of those terms is greater than $0$ by line 2, and by line 3 there is one of them or more."
          },
          {
            "line": "Therefore $\\binom{n}{r} < 2^n$.",
            "reason": "Adding the same number: $\\binom{n}{r}$ is added to both sides of the inequality of line 4, and by line 1 the whole sum is $2^n$."
          }
        ]
      }
    }
  ]
}
