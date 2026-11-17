export default {
  "number": 179,
  "title": "Geometric sequences",
  "section": 17,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "602-605, 621-627"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the sixth term of the geometric sequence $2, -6, 18, \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-486",
    "solution": [
      "Find the sixth term of the geometric sequence $2, -6, 18, \\dots$.",
      "The common ratio is $r = \\dfrac{-6}{2} = -3$.",
      "The sixth term is $2 \\cdot \\left(-3\\right)^5$.",
      "$2 \\cdot \\left(-3\\right)^5 = -486$"
    ]
  },
  "ideas": [
    {
      "name": "Geometric sequence",
      "concrete": "In the sequence $7, 21, 63, 189, \\dots$ each term is the term before it times $3$. Reaching the fifth term from the first takes four multiplications by $3$, so the fifth term is $7 \\cdot 3^4 = 567$.",
      "general": "A **geometric sequence** is a sequence in which each term after the first is the term before it times one fixed number $r$, the **common ratio**; where no term is $0$, the common ratio is each term divided by the term before it. For numbers $a$ and $r$, the geometric sequence with first term $a$ and common ratio $r$ has $n$th term $ar^{n-1}$ for every whole number $n$ from $1$ up: reaching the $n$th term from the first takes $n - 1$ multiplications by $r$."
    }
  ],
  "kinds": [
    {
      "id": "t179-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the seventh term of the geometric sequence $48, -24, 12, \\dots$.",
            "lines": [
              {
                "step": "Find the seventh term of the geometric sequence $48, -24, 12, \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{-24}{48} = -\\dfrac{1}{2}$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{12}{-24} = -\\dfrac{1}{2}$ as well."
              },
              {
                "step": "The seventh term is $48 \\cdot \\left(-\\dfrac{1}{2}\\right)^6$.",
                "reason": "The $n$th term $ar^{n-1}$, with $a = 48$, $r = -\\dfrac{1}{2}$ and $n = 7$."
              },
              {
                "step": "$48 \\cdot \\left(-\\dfrac{1}{2}\\right)^6 = \\dfrac{3}{4}$",
                "reason": "The definition of a power and the product formula, from arithmetic: $\\left(-\\dfrac{1}{2}\\right)^6 = \\dfrac{1}{64}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sixth term of the geometric sequence $5, 15, 45, \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1215",
              "lines": [
                {
                  "step": "Find the sixth term of the geometric sequence $5, 15, 45, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{15}{5} = 3$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{45}{15} = 3$ as well."
                },
                {
                  "step": "The sixth term is $5 \\cdot 3^5$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 5$, $r = 3$ and $n = 6$."
                },
                {
                  "step": "$5 \\cdot 3^5 = 1215$",
                  "reason": "The definition of a power and the multiplication of integers, from arithmetic: $3^5 = 243$."
                }
              ]
            },
            {
              "prompt": "Find the sixth term of the geometric sequence $-11, -22, -44, \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-352",
              "lines": [
                {
                  "step": "Find the sixth term of the geometric sequence $-11, -22, -44, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-22}{-11} = 2$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-44}{-22} = 2$ as well."
                },
                {
                  "step": "The sixth term is $-11 \\cdot 2^5$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = -11$, $r = 2$ and $n = 6$."
                },
                {
                  "step": "$-11 \\cdot 2^5 = -352$",
                  "reason": "The definition of a power and the multiplication of integers, from arithmetic: $2^5 = 32$."
                }
              ]
            },
            {
              "prompt": "Find the sixth term of the geometric sequence $81, 54, 36, \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "32/3",
              "lines": [
                {
                  "step": "Find the sixth term of the geometric sequence $81, 54, 36, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{54}{81} = \\dfrac{2}{3}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{36}{54} = \\dfrac{2}{3}$ as well."
                },
                {
                  "step": "The sixth term is $81 \\cdot \\left(\\dfrac{2}{3}\\right)^5$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 81$, $r = \\dfrac{2}{3}$ and $n = 6$."
                },
                {
                  "step": "$81 \\cdot \\left(\\dfrac{2}{3}\\right)^5 = \\dfrac{32}{3}$",
                  "reason": "The definition of a power and the product formula, from arithmetic: $\\left(\\dfrac{2}{3}\\right)^5 = \\dfrac{32}{243}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find which term of the geometric sequence $13, 26, 52, \\dots$ equals $416$.",
            "lines": [
              {
                "step": "Find which term of the geometric sequence $13, 26, 52, \\dots$ equals $416$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{26}{13} = 2$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{52}{26} = 2$ as well."
              },
              {
                "step": "$13 \\cdot 2^{n - 1} = 416$",
                "reason": "The $n$th term $ar^{n-1}$, with $a = 13$ and $r = 2$, set equal to $416$."
              },
              {
                "step": "$2^{n - 1} = 32$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
              },
              {
                "step": "$2^{n - 1} = 2^5$",
                "reason": "The definition of a power, from arithmetic: $2^5 = 32$."
              },
              {
                "step": "$n - 1 = 5$",
                "reason": "Equal powers of one base have equal exponents: the base $2$ is above $0$ and is not $1$."
              },
              {
                "step": "$n = 6$",
                "reason": "Adding the same number to both sides: $1$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find which term of the geometric sequence $3, 9, 27, \\dots$ equals $729$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find which term of the geometric sequence $3, 9, 27, \\dots$ equals $729$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{9}{3} = 3$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{27}{9} = 3$ as well."
                },
                {
                  "step": "$3 \\cdot 3^{n - 1} = 729$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 3$ and $r = 3$, set equal to $729$."
                },
                {
                  "step": "$3^{n - 1} = 243$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$3^{n - 1} = 3^5$",
                  "reason": "The definition of a power, from arithmetic: $3^5 = 243$."
                },
                {
                  "step": "$n - 1 = 5$",
                  "reason": "Equal powers of one base have equal exponents: the base $3$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 6$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find which term of the geometric sequence $1372, 196, 28, \\dots$ equals $\\dfrac{4}{7}$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find which term of the geometric sequence $1372, 196, 28, \\dots$ equals $\\dfrac{4}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{196}{1372} = \\dfrac{1}{7}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{28}{196} = \\dfrac{1}{7}$ as well."
                },
                {
                  "step": "$1372 \\cdot \\left(\\dfrac{1}{7}\\right)^{n - 1} = \\dfrac{4}{7}$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 1372$ and $r = \\dfrac{1}{7}$, set equal to $\\dfrac{4}{7}$."
                },
                {
                  "step": "$\\left(\\dfrac{1}{7}\\right)^{n - 1} = \\dfrac{1}{2401}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $1372$."
                },
                {
                  "step": "$\\left(\\dfrac{1}{7}\\right)^{n - 1} = \\left(\\dfrac{1}{7}\\right)^4$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{1}{7}\\right)^4 = \\dfrac{1}{2401}$."
                },
                {
                  "step": "$n - 1 = 4$",
                  "reason": "Equal powers of one base have equal exponents: the base $\\dfrac{1}{7}$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 5$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find which term of the geometric sequence $-4, -20, -100, \\dots$ equals $-2500$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find which term of the geometric sequence $-4, -20, -100, \\dots$ equals $-2500$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-20}{-4} = 5$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-100}{-20} = 5$ as well."
                },
                {
                  "step": "$-4 \\cdot 5^{n - 1} = -2500$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = -4$ and $r = 5$, set equal to $-2500$."
                },
                {
                  "step": "$5^{n - 1} = 625$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "$5^{n - 1} = 5^4$",
                  "reason": "The definition of a power, from arithmetic: $5^4 = 625$."
                },
                {
                  "step": "$n - 1 = 4$",
                  "reason": "Equal powers of one base have equal exponents: the base $5$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 5$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $n$th term of the geometric sequence $28, 56, 112, \\dots$ as an expression in $n$ with one power of $2$ whose exponent is $n$ plus a whole number.",
            "lines": [
              {
                "step": "Find the $n$th term of the geometric sequence $28, 56, 112, \\dots$ as an expression in $n$ with one power of $2$ whose exponent is $n$ plus a whole number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{56}{28} = 2$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{112}{56} = 2$ as well."
              },
              {
                "step": "The $n$th term is $28 \\cdot 2^{n - 1}$.",
                "reason": "The $n$th term $ar^{n-1}$, with $a = 28$ and $r = 2$."
              },
              {
                "step": "$28 \\cdot 2^{n - 1} = 7 \\cdot 2^2 \\cdot 2^{n - 1}$",
                "reason": "The definition of a power, from arithmetic: $28 = 7 \\cdot 4 = 7 \\cdot 2^2$."
              },
              {
                "step": "$7 \\cdot 2^2 \\cdot 2^{n - 1} = 7 \\cdot 2^{n + 1}$",
                "reason": "Product law: $2^2 \\cdot 2^{n - 1} = 2^{2 + n - 1} = 2^{n + 1}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $n$th term of the geometric sequence $123, 369, 1107, \\dots$ as an expression in $n$ with one power of $3$ whose exponent is $n$ plus a whole number.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "41*3^(n)",
              "lines": [
                {
                  "step": "Find the $n$th term of the geometric sequence $123, 369, 1107, \\dots$ as an expression in $n$ with one power of $3$ whose exponent is $n$ plus a whole number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{369}{123} = 3$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{1107}{369} = 3$ as well."
                },
                {
                  "step": "The $n$th term is $123 \\cdot 3^{n - 1}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 123$ and $r = 3$."
                },
                {
                  "step": "$123 \\cdot 3^{n - 1} = 41 \\cdot 3 \\cdot 3^{n - 1}$",
                  "reason": "The definition of a power, from arithmetic: $123 = 41 \\cdot 3$."
                },
                {
                  "step": "$41 \\cdot 3 \\cdot 3^{n - 1} = 41 \\cdot 3^n$",
                  "reason": "Product law: $3 \\cdot 3^{n - 1} = 3^{1 + n - 1} = 3^n$."
                }
              ]
            },
            {
              "prompt": "Find the $n$th term of the geometric sequence $85, 425, 2125, \\dots$ as an expression in $n$ with one power of $5$ whose exponent is $n$ plus a whole number.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "17*5^(n)",
              "lines": [
                {
                  "step": "Find the $n$th term of the geometric sequence $85, 425, 2125, \\dots$ as an expression in $n$ with one power of $5$ whose exponent is $n$ plus a whole number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{425}{85} = 5$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{2125}{425} = 5$ as well."
                },
                {
                  "step": "The $n$th term is $85 \\cdot 5^{n - 1}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 85$ and $r = 5$."
                },
                {
                  "step": "$85 \\cdot 5^{n - 1} = 17 \\cdot 5 \\cdot 5^{n - 1}$",
                  "reason": "The definition of a power, from arithmetic: $85 = 17 \\cdot 5$."
                },
                {
                  "step": "$17 \\cdot 5 \\cdot 5^{n - 1} = 17 \\cdot 5^n$",
                  "reason": "Product law: $5 \\cdot 5^{n - 1} = 5^{1 + n - 1} = 5^n$."
                }
              ]
            },
            {
              "prompt": "Find the $n$th term of the geometric sequence $\\dfrac{15}{4}, \\dfrac{15}{8}, \\dfrac{15}{16}, \\dots$ as an expression in $n$ with one power of $\\dfrac{1}{2}$ whose exponent is $n$ plus a whole number.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "15*(1/2)^(n+1)",
              "lines": [
                {
                  "step": "Find the $n$th term of the geometric sequence $\\dfrac{15}{4}, \\dfrac{15}{8}, \\dfrac{15}{16}, \\dots$ as an expression in $n$ with one power of $\\dfrac{1}{2}$ whose exponent is $n$ plus a whole number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{15}{8} \\div \\left(\\dfrac{15}{4}\\right) = \\dfrac{1}{2}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{15}{16} \\div \\left(\\dfrac{15}{8}\\right) = \\dfrac{1}{2}$ as well."
                },
                {
                  "step": "The $n$th term is $\\dfrac{15}{4} \\cdot \\left(\\dfrac{1}{2}\\right)^{n - 1}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = \\dfrac{15}{4}$ and $r = \\dfrac{1}{2}$."
                },
                {
                  "step": "$\\dfrac{15}{4} \\cdot \\left(\\dfrac{1}{2}\\right)^{n - 1} = 15 \\cdot \\left(\\dfrac{1}{2}\\right)^2 \\cdot \\left(\\dfrac{1}{2}\\right)^{n - 1}$",
                  "reason": "The definition of a power, from arithmetic: $\\dfrac{15}{4} = 15 \\cdot \\dfrac{1}{4} = 15 \\cdot \\left(\\dfrac{1}{2}\\right)^2$."
                },
                {
                  "step": "$15 \\cdot \\left(\\dfrac{1}{2}\\right)^2 \\cdot \\left(\\dfrac{1}{2}\\right)^{n - 1} = 15 \\cdot \\left(\\dfrac{1}{2}\\right)^{n + 1}$",
                  "reason": "Product law: $\\left(\\dfrac{1}{2}\\right)^2 \\cdot \\left(\\dfrac{1}{2}\\right)^{n - 1} = \\left(\\dfrac{1}{2}\\right)^{2 + n - 1} = \\left(\\dfrac{1}{2}\\right)^{n + 1}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t179-k2",
      "forms": [
        {
          "example": {
            "problem": "Find every possible value of the eighth term of a geometric sequence of real numbers whose fourth term is $2$ and whose seventh term is $-250$.",
            "lines": [
              {
                "step": "Find every possible value of the eighth term of a geometric sequence of real numbers whose fourth term is $2$ and whose seventh term is $-250$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two terms give $ar^{3} = 2$ and $ar^{6} = -250$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 4$ and with $n = 7$."
              },
              {
                "step": "$\\dfrac{ar^6}{ar^3} = \\dfrac{-250}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $2$, which the first equation gives as $ar^3$ on the left."
              },
              {
                "step": "$r^3 = -125$",
                "reason": "Quotient law: $\\dfrac{ar^6}{ar^3} = r^3$, while $\\dfrac{-250}{2} = -125$."
              },
              {
                "step": "$r = -5$",
                "reason": "The definition of $x^{1/n}$ for odd $n$: $r = \\left(-125\\right)^{1/3} = -5$, as $\\left(-5\\right)^3 = -125$."
              },
              {
                "step": "The eighth term is $ar^3 \\cdot r^4$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 8$, and the product law: $ar^7 = ar^3 \\cdot r^4$."
              },
              {
                "step": "The eighth term is $2 \\cdot r^4$.",
                "reason": "Substituting a value: $ar^3 = 2$, from line 2."
              },
              {
                "step": "$2 \\cdot \\left(-5\\right)^4 = 1250$",
                "reason": "Substituting a value, with the definition of a power from arithmetic: $r = -5$ and $\\left(-5\\right)^4 = 625$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every possible value of the seventh term of a geometric sequence of real numbers whose third term is $10$ and whose sixth term is $270$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{810}",
              "lines": [
                {
                  "step": "Find every possible value of the seventh term of a geometric sequence of real numbers whose third term is $10$ and whose sixth term is $270$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{2} = 10$ and $ar^{5} = 270$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 3$ and with $n = 6$."
                },
                {
                  "step": "$\\dfrac{ar^5}{ar^2} = \\dfrac{270}{10}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $10$, which the first equation gives as $ar^2$ on the left."
                },
                {
                  "step": "$r^3 = 27$",
                  "reason": "Quotient law: $\\dfrac{ar^5}{ar^2} = r^3$, while $\\dfrac{270}{10} = 27$."
                },
                {
                  "step": "$r = 3$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $r = 27^{1/3} = 3$, as $3^3 = 27$."
                },
                {
                  "step": "The seventh term is $ar^2 \\cdot r^4$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 7$, and the product law: $ar^6 = ar^2 \\cdot r^4$."
                },
                {
                  "step": "The seventh term is $10 \\cdot r^4$.",
                  "reason": "Substituting a value: $ar^2 = 10$, from line 2."
                },
                {
                  "step": "$10 \\cdot 3^4 = 810$",
                  "reason": "Substituting a value, with the definition of a power from arithmetic: $r = 3$ and $3^4 = 81$."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the fifth term of a geometric sequence of real numbers whose second term is $1701$ and whose seventh term is $224$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{504}",
              "lines": [
                {
                  "step": "Find every possible value of the fifth term of a geometric sequence of real numbers whose second term is $1701$ and whose seventh term is $224$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar = 1701$ and $ar^{6} = 224$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 2$ and with $n = 7$."
                },
                {
                  "step": "$\\dfrac{ar^6}{ar} = \\dfrac{224}{1701}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $1701$, which the first equation gives as $ar$ on the left."
                },
                {
                  "step": "$r^5 = \\dfrac{32}{243}$",
                  "reason": "Quotient law: $\\dfrac{ar^6}{ar} = r^5$, while $\\dfrac{224}{1701} = \\dfrac{32}{243}$."
                },
                {
                  "step": "$r = \\dfrac{2}{3}$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $r = \\left(\\dfrac{32}{243}\\right)^{1/5} = \\dfrac{2}{3}$, as $\\left(\\dfrac{2}{3}\\right)^5 = \\dfrac{32}{243}$."
                },
                {
                  "step": "The fifth term is $ar \\cdot r^3$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 5$, and the product law: $ar^4 = ar \\cdot r^3$."
                },
                {
                  "step": "The fifth term is $1701 \\cdot r^3$.",
                  "reason": "Substituting a value: $ar = 1701$, from line 2."
                },
                {
                  "step": "$1701 \\cdot \\left(\\dfrac{2}{3}\\right)^3 = 504$",
                  "reason": "Substituting a value, with the definition of a power from arithmetic: $r = \\dfrac{2}{3}$ and $\\left(\\dfrac{2}{3}\\right)^3 = \\dfrac{8}{27}$."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the ninth term of a geometric sequence of real numbers whose fourth term is $375$ and whose seventh term is $-24$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-96/25}",
              "lines": [
                {
                  "step": "Find every possible value of the ninth term of a geometric sequence of real numbers whose fourth term is $375$ and whose seventh term is $-24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{3} = 375$ and $ar^{6} = -24$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 4$ and with $n = 7$."
                },
                {
                  "step": "$\\dfrac{ar^6}{ar^3} = \\dfrac{-24}{375}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $375$, which the first equation gives as $ar^3$ on the left."
                },
                {
                  "step": "$r^3 = -\\dfrac{8}{125}$",
                  "reason": "Quotient law: $\\dfrac{ar^6}{ar^3} = r^3$, while $\\dfrac{-24}{375} = -\\dfrac{8}{125}$."
                },
                {
                  "step": "$r = -\\dfrac{2}{5}$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $r = \\left(-\\dfrac{8}{125}\\right)^{1/3} = -\\dfrac{2}{5}$, as $\\left(-\\dfrac{2}{5}\\right)^3 = -\\dfrac{8}{125}$."
                },
                {
                  "step": "The ninth term is $ar^3 \\cdot r^5$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 9$, and the product law: $ar^8 = ar^3 \\cdot r^5$."
                },
                {
                  "step": "The ninth term is $375 \\cdot r^5$.",
                  "reason": "Substituting a value: $ar^3 = 375$, from line 2."
                },
                {
                  "step": "$375 \\cdot \\left(-\\dfrac{2}{5}\\right)^5 = -\\dfrac{96}{25}$",
                  "reason": "Substituting a value, with the definition of a power from arithmetic: $r = -\\dfrac{2}{5}$ and $\\left(-\\dfrac{2}{5}\\right)^5 = -\\dfrac{32}{3125}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every possible value of the fourth term of a geometric sequence of real numbers whose third term is $2$ and whose fifth term is $\\dfrac{9}{2}$.",
            "lines": [
              {
                "step": "Find every possible value of the fourth term of a geometric sequence of real numbers whose third term is $2$ and whose fifth term is $\\dfrac{9}{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two terms give $ar^{2} = 2$ and $ar^{4} = \\dfrac{9}{2}$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 3$ and with $n = 5$."
              },
              {
                "step": "$\\dfrac{ar^4}{ar^2} = \\dfrac{9}{2} \\div 2$",
                "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $2$, which the first equation gives as $ar^2$ on the left."
              },
              {
                "step": "$r^2 = \\dfrac{9}{4}$",
                "reason": "Quotient law: $\\dfrac{ar^4}{ar^2} = r^2$, while $\\dfrac{9}{2} \\div 2 = \\dfrac{9}{4}$."
              },
              {
                "step": "Either $r = \\dfrac{3}{2}$ or $r = -\\dfrac{3}{2}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $\\left(\\dfrac{3}{2}\\right)^2 = \\dfrac{9}{4}$."
              },
              {
                "step": "The fourth term is $ar^2 \\cdot r$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 4$, and the product law: $ar^3 = ar^2 \\cdot r$."
              },
              {
                "step": "The fourth term is $2 \\cdot r$.",
                "reason": "Substituting a value: $ar^2 = 2$, from line 2."
              },
              {
                "step": "With $r = \\dfrac{3}{2}$ the fourth term is $2 \\cdot \\left(\\dfrac{3}{2}\\right) = 3$, and with $r = -\\dfrac{3}{2}$ it is $2 \\cdot \\left(-\\dfrac{3}{2}\\right) = -3$.",
                "reason": "Substituting a value, with the sign of a power of a negative number: an odd power of $-\\dfrac{3}{2}$ is negative."
              },
              {
                "step": "The fourth term is $3$ or $-3$.",
                "reason": "Geometric sequence: each of the two real values of $r$ gives a geometric sequence of real numbers with the two given terms, so both values stand."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every possible value of the fifth term of a geometric sequence of real numbers whose fourth term is $5$ and whose sixth term is $40$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{10*sqrt(2), -10*sqrt(2)}",
              "lines": [
                {
                  "step": "Find every possible value of the fifth term of a geometric sequence of real numbers whose fourth term is $5$ and whose sixth term is $40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{3} = 5$ and $ar^{5} = 40$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 4$ and with $n = 6$."
                },
                {
                  "step": "$\\dfrac{ar^5}{ar^3} = \\dfrac{40}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $5$, which the first equation gives as $ar^3$ on the left."
                },
                {
                  "step": "$r^2 = 8$",
                  "reason": "Quotient law: $\\dfrac{ar^5}{ar^3} = r^2$, while $\\dfrac{40}{5} = 8$."
                },
                {
                  "step": "Either $r = 2\\sqrt{2}$ or $r = -2\\sqrt{2}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $\\left(2\\sqrt{2}\\right)^2 = 8$."
                },
                {
                  "step": "The fifth term is $ar^3 \\cdot r$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 5$, and the product law: $ar^4 = ar^3 \\cdot r$."
                },
                {
                  "step": "The fifth term is $5 \\cdot r$.",
                  "reason": "Substituting a value: $ar^3 = 5$, from line 2."
                },
                {
                  "step": "With $r = 2\\sqrt{2}$ the fifth term is $5 \\cdot 2\\sqrt{2} = 10\\sqrt{2}$, and with $r = -2\\sqrt{2}$ it is $5 \\cdot \\left(-2\\sqrt{2}\\right) = -10\\sqrt{2}$.",
                  "reason": "Substituting a value, with the sign of a power of a negative number: an odd power of $-2\\sqrt{2}$ is negative."
                },
                {
                  "step": "The fifth term is $10\\sqrt{2}$ or $-10\\sqrt{2}$.",
                  "reason": "Geometric sequence: each of the two real values of $r$ gives a geometric sequence of real numbers with the two given terms, so both values stand."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the fifth term of a geometric sequence of real numbers whose second term is $2$ and whose fourth term is $98$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{686, -686}",
              "lines": [
                {
                  "step": "Find every possible value of the fifth term of a geometric sequence of real numbers whose second term is $2$ and whose fourth term is $98$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar = 2$ and $ar^{3} = 98$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 2$ and with $n = 4$."
                },
                {
                  "step": "$\\dfrac{ar^3}{ar} = \\dfrac{98}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $2$, which the first equation gives as $ar$ on the left."
                },
                {
                  "step": "$r^2 = 49$",
                  "reason": "Quotient law: $\\dfrac{ar^3}{ar} = r^2$, while $\\dfrac{98}{2} = 49$."
                },
                {
                  "step": "Either $r = 7$ or $r = -7$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $7^2 = 49$."
                },
                {
                  "step": "The fifth term is $ar \\cdot r^3$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 5$, and the product law: $ar^4 = ar \\cdot r^3$."
                },
                {
                  "step": "The fifth term is $2 \\cdot r^3$.",
                  "reason": "Substituting a value: $ar = 2$, from line 2."
                },
                {
                  "step": "With $r = 7$ the fifth term is $2 \\cdot 7^3 = 686$, and with $r = -7$ it is $2 \\cdot \\left(-7\\right)^3 = -686$.",
                  "reason": "Substituting a value, with the sign of a power of a negative number: an odd power of $-7$ is negative."
                },
                {
                  "step": "The fifth term is $686$ or $-686$.",
                  "reason": "Geometric sequence: each of the two real values of $r$ gives a geometric sequence of real numbers with the two given terms, so both values stand."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the seventh term of a geometric sequence of real numbers whose sixth term is $7$ and whose eighth term is $\\dfrac{7}{36}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7/6, -7/6}",
              "lines": [
                {
                  "step": "Find every possible value of the seventh term of a geometric sequence of real numbers whose sixth term is $7$ and whose eighth term is $\\dfrac{7}{36}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{5} = 7$ and $ar^{7} = \\dfrac{7}{36}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 6$ and with $n = 8$."
                },
                {
                  "step": "$\\dfrac{ar^7}{ar^5} = \\dfrac{7}{36} \\div 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $7$, which the first equation gives as $ar^5$ on the left."
                },
                {
                  "step": "$r^2 = \\dfrac{1}{36}$",
                  "reason": "Quotient law: $\\dfrac{ar^7}{ar^5} = r^2$, while $\\dfrac{7}{36} \\div 7 = \\dfrac{1}{36}$."
                },
                {
                  "step": "Either $r = \\dfrac{1}{6}$ or $r = -\\dfrac{1}{6}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $\\left(\\dfrac{1}{6}\\right)^2 = \\dfrac{1}{36}$."
                },
                {
                  "step": "The seventh term is $ar^5 \\cdot r$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 7$, and the product law: $ar^6 = ar^5 \\cdot r$."
                },
                {
                  "step": "The seventh term is $7 \\cdot r$.",
                  "reason": "Substituting a value: $ar^5 = 7$, from line 2."
                },
                {
                  "step": "With $r = \\dfrac{1}{6}$ the seventh term is $7 \\cdot \\left(\\dfrac{1}{6}\\right) = \\dfrac{7}{6}$, and with $r = -\\dfrac{1}{6}$ it is $7 \\cdot \\left(-\\dfrac{1}{6}\\right) = -\\dfrac{7}{6}$.",
                  "reason": "Substituting a value, with the sign of a power of a negative number: an odd power of $-\\dfrac{1}{6}$ is negative."
                },
                {
                  "step": "The seventh term is $\\dfrac{7}{6}$ or $-\\dfrac{7}{6}$.",
                  "reason": "Geometric sequence: each of the two real values of $r$ gives a geometric sequence of real numbers with the two given terms, so both values stand."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every possible value of the fourth term of a geometric sequence of real numbers whose third term is $3$ and whose seventh term is $48$.",
            "lines": [
              {
                "step": "Find every possible value of the fourth term of a geometric sequence of real numbers whose third term is $3$ and whose seventh term is $48$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two terms give $ar^{2} = 3$ and $ar^{6} = 48$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 3$ and with $n = 7$."
              },
              {
                "step": "$\\dfrac{ar^6}{ar^2} = \\dfrac{48}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $3$, which the first equation gives as $ar^2$ on the left."
              },
              {
                "step": "$r^4 = 16$",
                "reason": "Quotient law: $\\dfrac{ar^6}{ar^2} = r^4$, while $\\dfrac{48}{3} = 16$."
              },
              {
                "step": "Either $r^2 = 4$ or $r^2 = -4$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $r^2$ in place of $x$: $4^2 = 16$."
              },
              {
                "step": "So $r^2 = 4$.",
                "reason": "Trivial Inequality: $r^2 \\ge 0$ for every real number $r$, so $r^2 = -4$ has no real solution."
              },
              {
                "step": "Either $r = 2$ or $r = -2$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $2^2 = 4$."
              },
              {
                "step": "The fourth term is $ar^2 \\cdot r$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 4$, and the product law: $ar^3 = ar^2 \\cdot r$."
              },
              {
                "step": "The fourth term is $3 \\cdot r$.",
                "reason": "Substituting a value: $ar^2 = 3$, from line 2."
              },
              {
                "step": "With $r = 2$ the fourth term is $3 \\cdot 2 = 6$, and with $r = -2$ it is $3 \\cdot \\left(-2\\right) = -6$.",
                "reason": "Substituting a value, with the sign of a power of a negative number: an odd power of $-2$ is negative."
              },
              {
                "step": "The fourth term is $6$ or $-6$.",
                "reason": "Geometric sequence: each of the two real values of $r$ gives a geometric sequence of real numbers with the two given terms, so both values stand."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every possible value of the eighth term of a geometric sequence of real numbers whose fifth term is $4$ and whose ninth term is $\\dfrac{9}{4}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3*sqrt(3)/2, -3*sqrt(3)/2}",
              "lines": [
                {
                  "step": "Find every possible value of the eighth term of a geometric sequence of real numbers whose fifth term is $4$ and whose ninth term is $\\dfrac{9}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{4} = 4$ and $ar^{8} = \\dfrac{9}{4}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 5$ and with $n = 9$."
                },
                {
                  "step": "$\\dfrac{ar^8}{ar^4} = \\dfrac{9}{4} \\div 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $4$, which the first equation gives as $ar^4$ on the left."
                },
                {
                  "step": "$r^4 = \\dfrac{9}{16}$",
                  "reason": "Quotient law: $\\dfrac{ar^8}{ar^4} = r^4$, while $\\dfrac{9}{4} \\div 4 = \\dfrac{9}{16}$."
                },
                {
                  "step": "Either $r^2 = \\dfrac{3}{4}$ or $r^2 = -\\dfrac{3}{4}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $r^2$ in place of $x$: $\\left(\\dfrac{3}{4}\\right)^2 = \\dfrac{9}{16}$."
                },
                {
                  "step": "So $r^2 = \\dfrac{3}{4}$.",
                  "reason": "Trivial Inequality: $r^2 \\ge 0$ for every real number $r$, so $r^2 = -\\dfrac{3}{4}$ has no real solution."
                },
                {
                  "step": "Either $r = \\dfrac{\\sqrt{3}}{2}$ or $r = -\\dfrac{\\sqrt{3}}{2}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $\\left(\\dfrac{\\sqrt{3}}{2}\\right)^2 = \\dfrac{3}{4}$."
                },
                {
                  "step": "The eighth term is $ar^4 \\cdot r^3$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 8$, and the product law: $ar^7 = ar^4 \\cdot r^3$."
                },
                {
                  "step": "The eighth term is $4 \\cdot r^3$.",
                  "reason": "Substituting a value: $ar^4 = 4$, from line 2."
                },
                {
                  "step": "With $r = \\dfrac{\\sqrt{3}}{2}$ the eighth term is $4 \\cdot \\left(\\dfrac{\\sqrt{3}}{2}\\right)^3 = \\dfrac{3\\sqrt{3}}{2}$, and with $r = -\\dfrac{\\sqrt{3}}{2}$ it is $4 \\cdot \\left(-\\dfrac{\\sqrt{3}}{2}\\right)^3 = -\\dfrac{3\\sqrt{3}}{2}$.",
                  "reason": "Substituting a value, with the sign of a power of a negative number: an odd power of $-\\dfrac{\\sqrt{3}}{2}$ is negative."
                },
                {
                  "step": "The eighth term is $\\dfrac{3\\sqrt{3}}{2}$ or $-\\dfrac{3\\sqrt{3}}{2}$.",
                  "reason": "Geometric sequence: each of the two real values of $r$ gives a geometric sequence of real numbers with the two given terms, so both values stand."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the sixth term of a geometric sequence of real numbers whose third term is $6$ and whose seventh term is $\\dfrac{7203}{8}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1029/4, -1029/4}",
              "lines": [
                {
                  "step": "Find every possible value of the sixth term of a geometric sequence of real numbers whose third term is $6$ and whose seventh term is $\\dfrac{7203}{8}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{2} = 6$ and $ar^{6} = \\dfrac{7203}{8}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 3$ and with $n = 7$."
                },
                {
                  "step": "$\\dfrac{ar^6}{ar^2} = \\dfrac{7203}{8} \\div 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $6$, which the first equation gives as $ar^2$ on the left."
                },
                {
                  "step": "$r^4 = \\dfrac{2401}{16}$",
                  "reason": "Quotient law: $\\dfrac{ar^6}{ar^2} = r^4$, while $\\dfrac{7203}{8} \\div 6 = \\dfrac{2401}{16}$."
                },
                {
                  "step": "Either $r^2 = \\dfrac{49}{4}$ or $r^2 = -\\dfrac{49}{4}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $r^2$ in place of $x$: $\\left(\\dfrac{49}{4}\\right)^2 = \\dfrac{2401}{16}$."
                },
                {
                  "step": "So $r^2 = \\dfrac{49}{4}$.",
                  "reason": "Trivial Inequality: $r^2 \\ge 0$ for every real number $r$, so $r^2 = -\\dfrac{49}{4}$ has no real solution."
                },
                {
                  "step": "Either $r = \\dfrac{7}{2}$ or $r = -\\dfrac{7}{2}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $\\left(\\dfrac{7}{2}\\right)^2 = \\dfrac{49}{4}$."
                },
                {
                  "step": "The sixth term is $ar^2 \\cdot r^3$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 6$, and the product law: $ar^5 = ar^2 \\cdot r^3$."
                },
                {
                  "step": "The sixth term is $6 \\cdot r^3$.",
                  "reason": "Substituting a value: $ar^2 = 6$, from line 2."
                },
                {
                  "step": "With $r = \\dfrac{7}{2}$ the sixth term is $6 \\cdot \\left(\\dfrac{7}{2}\\right)^3 = \\dfrac{1029}{4}$, and with $r = -\\dfrac{7}{2}$ it is $6 \\cdot \\left(-\\dfrac{7}{2}\\right)^3 = -\\dfrac{1029}{4}$.",
                  "reason": "Substituting a value, with the sign of a power of a negative number: an odd power of $-\\dfrac{7}{2}$ is negative."
                },
                {
                  "step": "The sixth term is $\\dfrac{1029}{4}$ or $-\\dfrac{1029}{4}$.",
                  "reason": "Geometric sequence: each of the two real values of $r$ gives a geometric sequence of real numbers with the two given terms, so both values stand."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the seventh term of a geometric sequence of real numbers whose sixth term is $14$ and whose tenth term is $1134$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{42, -42}",
              "lines": [
                {
                  "step": "Find every possible value of the seventh term of a geometric sequence of real numbers whose sixth term is $14$ and whose tenth term is $1134$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{5} = 14$ and $ar^{9} = 1134$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 6$ and with $n = 10$."
                },
                {
                  "step": "$\\dfrac{ar^9}{ar^5} = \\dfrac{1134}{14}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $14$, which the first equation gives as $ar^5$ on the left."
                },
                {
                  "step": "$r^4 = 81$",
                  "reason": "Quotient law: $\\dfrac{ar^9}{ar^5} = r^4$, while $\\dfrac{1134}{14} = 81$."
                },
                {
                  "step": "Either $r^2 = 9$ or $r^2 = -9$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $r^2$ in place of $x$: $9^2 = 81$."
                },
                {
                  "step": "So $r^2 = 9$.",
                  "reason": "Trivial Inequality: $r^2 \\ge 0$ for every real number $r$, so $r^2 = -9$ has no real solution."
                },
                {
                  "step": "Either $r = 3$ or $r = -3$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $3^2 = 9$."
                },
                {
                  "step": "The seventh term is $ar^5 \\cdot r$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 7$, and the product law: $ar^6 = ar^5 \\cdot r$."
                },
                {
                  "step": "The seventh term is $14 \\cdot r$.",
                  "reason": "Substituting a value: $ar^5 = 14$, from line 2."
                },
                {
                  "step": "With $r = 3$ the seventh term is $14 \\cdot 3 = 42$, and with $r = -3$ it is $14 \\cdot \\left(-3\\right) = -42$.",
                  "reason": "Substituting a value, with the sign of a power of a negative number: an odd power of $-3$ is negative."
                },
                {
                  "step": "The seventh term is $42$ or $-42$.",
                  "reason": "Geometric sequence: each of the two real values of $r$ gives a geometric sequence of real numbers with the two given terms, so both values stand."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every possible value of the fifth term of a geometric sequence of positive numbers whose second term is $11$ and whose fourth term is $99$.",
            "lines": [
              {
                "step": "Find every possible value of the fifth term of a geometric sequence of positive numbers whose second term is $11$ and whose fourth term is $99$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two terms give $ar = 11$ and $ar^{3} = 99$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 2$ and with $n = 4$."
              },
              {
                "step": "$\\dfrac{ar^3}{ar} = \\dfrac{99}{11}$",
                "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $11$, which the first equation gives as $ar$ on the left."
              },
              {
                "step": "$r^2 = 9$",
                "reason": "Quotient law: $\\dfrac{ar^3}{ar} = r^2$, while $\\dfrac{99}{11} = 9$."
              },
              {
                "step": "$r = 3$",
                "reason": "Every term is positive, so $r$, a term divided by the term before it, is above $0$, and the definition of $x^{1/n}$ for even $n$ gives $r = 9^{1/2} = 3$, as $3^2 = 9$."
              },
              {
                "step": "The fifth term is $ar \\cdot r^3$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 5$, and the product law: $ar^4 = ar \\cdot r^3$."
              },
              {
                "step": "The fifth term is $11 \\cdot r^3$.",
                "reason": "Substituting a value: $ar = 11$, from line 2."
              },
              {
                "step": "$11 \\cdot 3^3 = 297$",
                "reason": "Substituting a value, with the definition of a power from arithmetic: $r = 3$ and $3^3 = 27$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every possible value of the sixth term of a geometric sequence of positive numbers whose third term is $4$ and whose seventh term is $\\dfrac{81}{4}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{27/2}",
              "lines": [
                {
                  "step": "Find every possible value of the sixth term of a geometric sequence of positive numbers whose third term is $4$ and whose seventh term is $\\dfrac{81}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{2} = 4$ and $ar^{6} = \\dfrac{81}{4}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 3$ and with $n = 7$."
                },
                {
                  "step": "$\\dfrac{ar^6}{ar^2} = \\dfrac{81}{4} \\div 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $4$, which the first equation gives as $ar^2$ on the left."
                },
                {
                  "step": "$r^4 = \\dfrac{81}{16}$",
                  "reason": "Quotient law: $\\dfrac{ar^6}{ar^2} = r^4$, while $\\dfrac{81}{4} \\div 4 = \\dfrac{81}{16}$."
                },
                {
                  "step": "$r = \\dfrac{3}{2}$",
                  "reason": "Every term is positive, so $r$, a term divided by the term before it, is above $0$, and the definition of $x^{1/n}$ for even $n$ gives $r = \\left(\\dfrac{81}{16}\\right)^{1/4} = \\dfrac{3}{2}$, as $\\left(\\dfrac{3}{2}\\right)^4 = \\dfrac{81}{16}$."
                },
                {
                  "step": "The sixth term is $ar^2 \\cdot r^3$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 6$, and the product law: $ar^5 = ar^2 \\cdot r^3$."
                },
                {
                  "step": "The sixth term is $4 \\cdot r^3$.",
                  "reason": "Substituting a value: $ar^2 = 4$, from line 2."
                },
                {
                  "step": "$4 \\cdot \\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{27}{2}$",
                  "reason": "Substituting a value, with the definition of a power from arithmetic: $r = \\dfrac{3}{2}$ and $\\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{27}{8}$."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the ninth term of a geometric sequence of positive numbers whose sixth term is $9$ and whose eighth term is $1$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1/3}",
              "lines": [
                {
                  "step": "Find every possible value of the ninth term of a geometric sequence of positive numbers whose sixth term is $9$ and whose eighth term is $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{5} = 9$ and $ar^{7} = 1$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 6$ and with $n = 8$."
                },
                {
                  "step": "$\\dfrac{ar^7}{ar^5} = 1 \\div 9$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $9$, which the first equation gives as $ar^5$ on the left."
                },
                {
                  "step": "$r^2 = \\dfrac{1}{9}$",
                  "reason": "Quotient law: $\\dfrac{ar^7}{ar^5} = r^2$, while $1 \\div 9 = \\dfrac{1}{9}$."
                },
                {
                  "step": "$r = \\dfrac{1}{3}$",
                  "reason": "Every term is positive, so $r$, a term divided by the term before it, is above $0$, and the definition of $x^{1/n}$ for even $n$ gives $r = \\left(\\dfrac{1}{9}\\right)^{1/2} = \\dfrac{1}{3}$, as $\\left(\\dfrac{1}{3}\\right)^2 = \\dfrac{1}{9}$."
                },
                {
                  "step": "The ninth term is $ar^5 \\cdot r^3$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 9$, and the product law: $ar^8 = ar^5 \\cdot r^3$."
                },
                {
                  "step": "The ninth term is $9 \\cdot r^3$.",
                  "reason": "Substituting a value: $ar^5 = 9$, from line 2."
                },
                {
                  "step": "$9 \\cdot \\left(\\dfrac{1}{3}\\right)^3 = \\dfrac{1}{3}$",
                  "reason": "Substituting a value, with the definition of a power from arithmetic: $r = \\dfrac{1}{3}$ and $\\left(\\dfrac{1}{3}\\right)^3 = \\dfrac{1}{27}$."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the seventh term of a geometric sequence of positive numbers whose sixth term is $16$ and whose tenth term is $625$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{40}",
              "lines": [
                {
                  "step": "Find every possible value of the seventh term of a geometric sequence of positive numbers whose sixth term is $16$ and whose tenth term is $625$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{5} = 16$ and $ar^{9} = 625$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 6$ and with $n = 10$."
                },
                {
                  "step": "$\\dfrac{ar^9}{ar^5} = 625 \\div 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $16$, which the first equation gives as $ar^5$ on the left."
                },
                {
                  "step": "$r^4 = \\dfrac{625}{16}$",
                  "reason": "Quotient law: $\\dfrac{ar^9}{ar^5} = r^4$, while $625 \\div 16 = \\dfrac{625}{16}$."
                },
                {
                  "step": "$r = \\dfrac{5}{2}$",
                  "reason": "Every term is positive, so $r$, a term divided by the term before it, is above $0$, and the definition of $x^{1/n}$ for even $n$ gives $r = \\left(\\dfrac{625}{16}\\right)^{1/4} = \\dfrac{5}{2}$, as $\\left(\\dfrac{5}{2}\\right)^4 = \\dfrac{625}{16}$."
                },
                {
                  "step": "The seventh term is $ar^5 \\cdot r$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 7$, and the product law: $ar^6 = ar^5 \\cdot r$."
                },
                {
                  "step": "The seventh term is $16 \\cdot r$.",
                  "reason": "Substituting a value: $ar^5 = 16$, from line 2."
                },
                {
                  "step": "$16 \\cdot \\left(\\dfrac{5}{2}\\right) = 40$",
                  "reason": "Substituting a value, with the definition of a power from arithmetic: $r = \\dfrac{5}{2}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every possible value of the first term of a geometric sequence of real numbers whose third term is $12$ and whose sixth term is $-768$.",
            "lines": [
              {
                "step": "Find every possible value of the first term of a geometric sequence of real numbers whose third term is $12$ and whose sixth term is $-768$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two terms give $ar^{2} = 12$ and $ar^{5} = -768$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 3$ and with $n = 6$."
              },
              {
                "step": "$\\dfrac{ar^5}{ar^2} = \\dfrac{-768}{12}$",
                "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $12$, which the first equation gives as $ar^2$ on the left."
              },
              {
                "step": "$r^3 = -64$",
                "reason": "Quotient law: $\\dfrac{ar^5}{ar^2} = r^3$, while $\\dfrac{-768}{12} = -64$."
              },
              {
                "step": "$r = -4$",
                "reason": "The definition of $x^{1/n}$ for odd $n$: $r = \\left(-64\\right)^{1/3} = -4$, as $\\left(-4\\right)^3 = -64$."
              },
              {
                "step": "$a \\cdot \\left(-4\\right)^2 = 12$",
                "reason": "Substituting a value: $r = -4$ is put into $ar^{2} = 12$, from line 2."
              },
              {
                "step": "$16a = 12$",
                "reason": "The definition of a power, from arithmetic: $\\left(-4\\right)^2 = 16$."
              },
              {
                "step": "$a = \\dfrac{3}{4}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and $\\dfrac{12}{16} = \\dfrac{3}{4}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every possible value of the first term of a geometric sequence of real numbers whose third term is $7$ and whose sixth term is $-2401$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1/7}",
              "lines": [
                {
                  "step": "Find every possible value of the first term of a geometric sequence of real numbers whose third term is $7$ and whose sixth term is $-2401$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{2} = 7$ and $ar^{5} = -2401$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 3$ and with $n = 6$."
                },
                {
                  "step": "$\\dfrac{ar^5}{ar^2} = \\dfrac{-2401}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $7$, which the first equation gives as $ar^2$ on the left."
                },
                {
                  "step": "$r^3 = -343$",
                  "reason": "Quotient law: $\\dfrac{ar^5}{ar^2} = r^3$, while $\\dfrac{-2401}{7} = -343$."
                },
                {
                  "step": "$r = -7$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $r = \\left(-343\\right)^{1/3} = -7$, as $\\left(-7\\right)^3 = -343$."
                },
                {
                  "step": "$a \\cdot \\left(-7\\right)^2 = 7$",
                  "reason": "Substituting a value: $r = -7$ is put into $ar^{2} = 7$, from line 2."
                },
                {
                  "step": "$49a = 7$",
                  "reason": "The definition of a power, from arithmetic: $\\left(-7\\right)^2 = 49$."
                },
                {
                  "step": "$a = \\dfrac{1}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $49$, and $\\dfrac{7}{49} = \\dfrac{1}{7}$."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the first term of a geometric sequence of real numbers whose third term is $18$ and whose sixth term is $3888$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1/2}",
              "lines": [
                {
                  "step": "Find every possible value of the first term of a geometric sequence of real numbers whose third term is $18$ and whose sixth term is $3888$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{2} = 18$ and $ar^{5} = 3888$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 3$ and with $n = 6$."
                },
                {
                  "step": "$\\dfrac{ar^5}{ar^2} = \\dfrac{3888}{18}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $18$, which the first equation gives as $ar^2$ on the left."
                },
                {
                  "step": "$r^3 = 216$",
                  "reason": "Quotient law: $\\dfrac{ar^5}{ar^2} = r^3$, while $\\dfrac{3888}{18} = 216$."
                },
                {
                  "step": "$r = 6$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $r = 216^{1/3} = 6$, as $6^3 = 216$."
                },
                {
                  "step": "$a \\cdot 6^2 = 18$",
                  "reason": "Substituting a value: $r = 6$ is put into $ar^{2} = 18$, from line 2."
                },
                {
                  "step": "$36a = 18$",
                  "reason": "The definition of a power, from arithmetic: $6^2 = 36$."
                },
                {
                  "step": "$a = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $36$, and $\\dfrac{18}{36} = \\dfrac{1}{2}$."
                }
              ]
            },
            {
              "prompt": "Find every possible value of the first term of a geometric sequence of real numbers whose fourth term is $27$ and whose seventh term is $\\dfrac{729}{125}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{125}",
              "lines": [
                {
                  "step": "Find every possible value of the first term of a geometric sequence of real numbers whose fourth term is $27$ and whose seventh term is $\\dfrac{729}{125}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two terms give $ar^{3} = 27$ and $ar^{6} = \\dfrac{729}{125}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 4$ and with $n = 7$."
                },
                {
                  "step": "$\\dfrac{ar^6}{ar^3} = \\dfrac{729}{125} \\div 27$",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $27$, which the first equation gives as $ar^3$ on the left."
                },
                {
                  "step": "$r^3 = \\dfrac{27}{125}$",
                  "reason": "Quotient law: $\\dfrac{ar^6}{ar^3} = r^3$, while $\\dfrac{729}{125} \\div 27 = \\dfrac{27}{125}$."
                },
                {
                  "step": "$r = \\dfrac{3}{5}$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $r = \\left(\\dfrac{27}{125}\\right)^{1/3} = \\dfrac{3}{5}$, as $\\left(\\dfrac{3}{5}\\right)^3 = \\dfrac{27}{125}$."
                },
                {
                  "step": "$a \\cdot \\left(\\dfrac{3}{5}\\right)^3 = 27$",
                  "reason": "Substituting a value: $r = \\dfrac{3}{5}$ is put into $ar^{3} = 27$, from line 2."
                },
                {
                  "step": "$\\dfrac{27}{125}a = 27$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{3}{5}\\right)^3 = \\dfrac{27}{125}$."
                },
                {
                  "step": "$a = 125$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{27}{125}$, and $27 \\div \\left(\\dfrac{27}{125}\\right) = 125$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t179-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the common ratio $r$ of the geometric sequence $x$, $y$, $z$, given that $x \\neq y$ and that $3x$, $7y$, $11z$ form an arithmetic sequence.",
            "lines": [
              {
                "step": "Find the common ratio $r$ of the geometric sequence $x$, $y$, $z$, given that $x \\neq y$ and that $3x$, $7y$, $11z$ form an arithmetic sequence.",
                "reason": "This is the problem as given."
              },
              {
                "step": "So $y = rx$ and $z = r^2x$.",
                "reason": "The $n$th term $ar^{n-1}$, with $a = x$ and $n = 2$, then $n = 3$."
              },
              {
                "step": "$14y = 3x + 11z$",
                "reason": "A term midway between two others is their mean: $7y = \\dfrac{3x + 11z}{2}$, and both sides are multiplied by $2$."
              },
              {
                "step": "$14rx = 3x + 11r^2x$",
                "reason": "Substituting a value: $rx$ is put for $y$ and $r^2x$ for $z$, from line 2."
              },
              {
                "step": "The number $x$ is not $0$.",
                "reason": "Substituting a value: with $x = 0$, line 2 gives $y = 0 = x$, and the problem gives $x \\neq y$."
              },
              {
                "step": "$14r = 3 + 11r^2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $x$."
              },
              {
                "step": "$11r^2 - 14r + 3 = 0$",
                "reason": "Adding the same number to both sides: every term is moved to the side where $r^2$ has a positive coefficient."
              },
              {
                "step": "$(11r - 3)(r - 1) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives back the left side of line 7."
              },
              {
                "step": "Either $r = \\dfrac{3}{11}$ or $r = 1$.",
                "reason": "Zero-product property: one of the two brackets is $0$."
              },
              {
                "step": "$r = \\dfrac{3}{11}$",
                "reason": "Substituting a value: with $r = 1$, line 2 gives $y = x$, and the problem gives $x \\neq y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the common ratio $r$ of the geometric sequence $x$, $y$, $z$, given that $x \\neq y$ and that $7x$, $6y$, $5z$ form an arithmetic sequence.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/5",
              "lines": [
                {
                  "step": "Find the common ratio $r$ of the geometric sequence $x$, $y$, $z$, given that $x \\neq y$ and that $7x$, $6y$, $5z$ form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "So $y = rx$ and $z = r^2x$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = x$ and $n = 2$, then $n = 3$."
                },
                {
                  "step": "$12y = 7x + 5z$",
                  "reason": "A term midway between two others is their mean: $6y = \\dfrac{7x + 5z}{2}$, and both sides are multiplied by $2$."
                },
                {
                  "step": "$12rx = 7x + 5r^2x$",
                  "reason": "Substituting a value: $rx$ is put for $y$ and $r^2x$ for $z$, from line 2."
                },
                {
                  "step": "The number $x$ is not $0$.",
                  "reason": "Substituting a value: with $x = 0$, line 2 gives $y = 0 = x$, and the problem gives $x \\neq y$."
                },
                {
                  "step": "$12r = 7 + 5r^2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $x$."
                },
                {
                  "step": "$5r^2 - 12r + 7 = 0$",
                  "reason": "Adding the same number to both sides: every term is moved to the side where $r^2$ has a positive coefficient."
                },
                {
                  "step": "$(5r - 7)(r - 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives back the left side of line 7."
                },
                {
                  "step": "Either $r = \\dfrac{7}{5}$ or $r = 1$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$r = \\dfrac{7}{5}$",
                  "reason": "Substituting a value: with $r = 1$, line 2 gives $y = x$, and the problem gives $x \\neq y$."
                }
              ]
            },
            {
              "prompt": "Find the common ratio $r$ of the geometric sequence $x$, $y$, $z$, given that $x \\neq y$ and that $3y$, $5x$, $7z$ form an arithmetic sequence.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-10/7",
              "lines": [
                {
                  "step": "Find the common ratio $r$ of the geometric sequence $x$, $y$, $z$, given that $x \\neq y$ and that $3y$, $5x$, $7z$ form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "So $y = rx$ and $z = r^2x$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = x$ and $n = 2$, then $n = 3$."
                },
                {
                  "step": "$10x = 3y + 7z$",
                  "reason": "A term midway between two others is their mean: $5x = \\dfrac{3y + 7z}{2}$, and both sides are multiplied by $2$."
                },
                {
                  "step": "$10x = 3rx + 7r^2x$",
                  "reason": "Substituting a value: $rx$ is put for $y$ and $r^2x$ for $z$, from line 2."
                },
                {
                  "step": "The number $x$ is not $0$.",
                  "reason": "Substituting a value: with $x = 0$, line 2 gives $y = 0 = x$, and the problem gives $x \\neq y$."
                },
                {
                  "step": "$10 = 3r + 7r^2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $x$."
                },
                {
                  "step": "$7r^2 + 3r - 10 = 0$",
                  "reason": "Adding the same number to both sides: every term is moved to the side where $r^2$ has a positive coefficient."
                },
                {
                  "step": "$(7r + 10)(r - 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives back the left side of line 7."
                },
                {
                  "step": "Either $r = -\\dfrac{10}{7}$ or $r = 1$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$r = -\\dfrac{10}{7}$",
                  "reason": "Substituting a value: with $r = 1$, line 2 gives $y = x$, and the problem gives $x \\neq y$."
                }
              ]
            },
            {
              "prompt": "Find the common ratio $r$ of the geometric sequence $x$, $y$, $z$, given that $x \\neq y$ and that $3x$, $4z$, $5y$ form an arithmetic sequence.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3/8",
              "lines": [
                {
                  "step": "Find the common ratio $r$ of the geometric sequence $x$, $y$, $z$, given that $x \\neq y$ and that $3x$, $4z$, $5y$ form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "So $y = rx$ and $z = r^2x$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = x$ and $n = 2$, then $n = 3$."
                },
                {
                  "step": "$8z = 3x + 5y$",
                  "reason": "A term midway between two others is their mean: $4z = \\dfrac{3x + 5y}{2}$, and both sides are multiplied by $2$."
                },
                {
                  "step": "$8r^2x = 3x + 5rx$",
                  "reason": "Substituting a value: $rx$ is put for $y$ and $r^2x$ for $z$, from line 2."
                },
                {
                  "step": "The number $x$ is not $0$.",
                  "reason": "Substituting a value: with $x = 0$, line 2 gives $y = 0 = x$, and the problem gives $x \\neq y$."
                },
                {
                  "step": "$8r^2 = 3 + 5r$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $x$."
                },
                {
                  "step": "$8r^2 - 5r - 3 = 0$",
                  "reason": "Adding the same number to both sides: every term is moved to the side where $r^2$ has a positive coefficient."
                },
                {
                  "step": "$(8r + 3)(r - 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives back the left side of line 7."
                },
                {
                  "step": "Either $r = -\\dfrac{3}{8}$ or $r = 1$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$r = -\\dfrac{3}{8}$",
                  "reason": "Substituting a value: with $r = 1$, line 2 gives $y = x$, and the problem gives $x \\neq y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the smallest possible third term of the geometric sequence made this way: three real numbers form an arithmetic sequence with first term $25$, and taking $1$ from the second and adding $2$ to the third gives a geometric sequence.",
            "lines": [
              {
                "step": "Find the smallest possible third term of the geometric sequence made this way: three real numbers form an arithmetic sequence with first term $25$, and taking $1$ from the second and adding $2$ to the third gives a geometric sequence.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The arithmetic sequence is $25$, $d + 25$, $2d + 25$, with common difference $d$.",
                "reason": "The $n$th term $a + (n-1)d$ of an arithmetic sequence, with $a = 25$ and $n = 1$, $2$, $3$."
              },
              {
                "step": "The geometric sequence is $25$, $d + 24$, $2d + 27$.",
                "reason": "Writing a sentence as an equation: $1$ is taken from the second number and $2$ is added to the third."
              },
              {
                "step": "$\\dfrac{d + 24}{25} = \\dfrac{2d + 27}{d + 24}$",
                "reason": "Common ratio: the second term divided by the first and the third term divided by the second are both the common ratio."
              },
              {
                "step": "$(d + 24)^2 = 25(2d + 27)$",
                "reason": "Cross-multiplying: each numerator in line 4 is multiplied by the other side's denominator."
              },
              {
                "step": "$d^2 + 48d + 576 = 25(2d + 27)$",
                "reason": "Square of a binomial: $(d + 24)^2 = d^2 + 48d + 576$."
              },
              {
                "step": "$d^2 + 48d + 576 = 50d + 675$",
                "reason": "The distributive law, from arithmetic: $25(2d + 27) = 50d + 675$."
              },
              {
                "step": "$d^2 - 2d - 99 = 0$",
                "reason": "Adding the same number to both sides: $50d + 675$ is taken from both sides, and like terms are collected."
              },
              {
                "step": "$(d + 9)(d - 11) = 0$",
                "reason": "Factoring a quadratic: $-9$ and $11$ have sum $2$ and product $-99$."
              },
              {
                "step": "Either $d = -9$ or $d = 11$.",
                "reason": "Zero-product property: one of the two brackets is $0$."
              },
              {
                "step": "The third term $2d + 27$ is $9$ when $d = -9$ and $49$ when $d = 11$.",
                "reason": "Substituting a value: the second terms $15$ and $35$ and the first term $25$ are not $0$, so both ratios are defined."
              },
              {
                "step": "The smallest third term is $9$.",
                "reason": "Comparing integers, from arithmetic: $9 < 49$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the largest possible third term of the geometric sequence made this way: three real numbers form an arithmetic sequence with first term $27$, and taking $4$ from the second and taking $5$ from the third gives a geometric sequence.",
              "form": "Answer as an integer.",
              "answer": "48",
              "lines": [
                {
                  "step": "Find the largest possible third term of the geometric sequence made this way: three real numbers form an arithmetic sequence with first term $27$, and taking $4$ from the second and taking $5$ from the third gives a geometric sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic sequence is $27$, $d + 27$, $2d + 27$, with common difference $d$.",
                  "reason": "The $n$th term $a + (n-1)d$ of an arithmetic sequence, with $a = 27$ and $n = 1$, $2$, $3$."
                },
                {
                  "step": "The geometric sequence is $27$, $d + 23$, $2d + 22$.",
                  "reason": "Writing a sentence as an equation: $4$ is taken from the second number and $5$ is taken from the third."
                },
                {
                  "step": "$\\dfrac{d + 23}{27} = \\dfrac{2d + 22}{d + 23}$",
                  "reason": "Common ratio: the second term divided by the first and the third term divided by the second are both the common ratio."
                },
                {
                  "step": "$(d + 23)^2 = 27(2d + 22)$",
                  "reason": "Cross-multiplying: each numerator in line 4 is multiplied by the other side's denominator."
                },
                {
                  "step": "$d^2 + 46d + 529 = 27(2d + 22)$",
                  "reason": "Square of a binomial: $(d + 23)^2 = d^2 + 46d + 529$."
                },
                {
                  "step": "$d^2 + 46d + 529 = 54d + 594$",
                  "reason": "The distributive law, from arithmetic: $27(2d + 22) = 54d + 594$."
                },
                {
                  "step": "$d^2 - 8d - 65 = 0$",
                  "reason": "Adding the same number to both sides: $54d + 594$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$(d + 5)(d - 13) = 0$",
                  "reason": "Factoring a quadratic: $-5$ and $13$ have sum $8$ and product $-65$."
                },
                {
                  "step": "Either $d = -5$ or $d = 13$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "The third term $2d + 22$ is $12$ when $d = -5$ and $48$ when $d = 13$.",
                  "reason": "Substituting a value: the second terms $18$ and $36$ and the first term $27$ are not $0$, so both ratios are defined."
                },
                {
                  "step": "The largest third term is $48$.",
                  "reason": "Comparing integers, from arithmetic: $12 < 48$."
                }
              ]
            },
            {
              "prompt": "Find the smallest possible third term of the geometric sequence made this way: three real numbers form an arithmetic sequence with first term $36$, and taking $4$ from the second and taking $7$ from the third gives a geometric sequence.",
              "form": "Answer as an integer.",
              "answer": "25",
              "lines": [
                {
                  "step": "Find the smallest possible third term of the geometric sequence made this way: three real numbers form an arithmetic sequence with first term $36$, and taking $4$ from the second and taking $7$ from the third gives a geometric sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic sequence is $36$, $d + 36$, $2d + 36$, with common difference $d$.",
                  "reason": "The $n$th term $a + (n-1)d$ of an arithmetic sequence, with $a = 36$ and $n = 1$, $2$, $3$."
                },
                {
                  "step": "The geometric sequence is $36$, $d + 32$, $2d + 29$.",
                  "reason": "Writing a sentence as an equation: $4$ is taken from the second number and $7$ is taken from the third."
                },
                {
                  "step": "$\\dfrac{d + 32}{36} = \\dfrac{2d + 29}{d + 32}$",
                  "reason": "Common ratio: the second term divided by the first and the third term divided by the second are both the common ratio."
                },
                {
                  "step": "$(d + 32)^2 = 36(2d + 29)$",
                  "reason": "Cross-multiplying: each numerator in line 4 is multiplied by the other side's denominator."
                },
                {
                  "step": "$d^2 + 64d + 1024 = 36(2d + 29)$",
                  "reason": "Square of a binomial: $(d + 32)^2 = d^2 + 64d + 1024$."
                },
                {
                  "step": "$d^2 + 64d + 1024 = 72d + 1044$",
                  "reason": "The distributive law, from arithmetic: $36(2d + 29) = 72d + 1044$."
                },
                {
                  "step": "$d^2 - 8d - 20 = 0$",
                  "reason": "Adding the same number to both sides: $72d + 1044$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$(d + 2)(d - 10) = 0$",
                  "reason": "Factoring a quadratic: $-2$ and $10$ have sum $8$ and product $-20$."
                },
                {
                  "step": "Either $d = -2$ or $d = 10$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "The third term $2d + 29$ is $25$ when $d = -2$ and $49$ when $d = 10$.",
                  "reason": "Substituting a value: the second terms $30$ and $42$ and the first term $36$ are not $0$, so both ratios are defined."
                },
                {
                  "step": "The smallest third term is $25$.",
                  "reason": "Comparing integers, from arithmetic: $25 < 49$."
                }
              ]
            },
            {
              "prompt": "Find the largest possible third term of the geometric sequence made this way: three real numbers form an arithmetic sequence with first term $18$, and adding $1$ to the second and adding $4$ to the third gives a geometric sequence.",
              "form": "Answer as an integer.",
              "answer": "32",
              "lines": [
                {
                  "step": "Find the largest possible third term of the geometric sequence made this way: three real numbers form an arithmetic sequence with first term $18$, and adding $1$ to the second and adding $4$ to the third gives a geometric sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic sequence is $18$, $d + 18$, $2d + 18$, with common difference $d$.",
                  "reason": "The $n$th term $a + (n-1)d$ of an arithmetic sequence, with $a = 18$ and $n = 1$, $2$, $3$."
                },
                {
                  "step": "The geometric sequence is $18$, $d + 19$, $2d + 22$.",
                  "reason": "Writing a sentence as an equation: $1$ is added to the second number and $4$ is added to the third."
                },
                {
                  "step": "$\\dfrac{d + 19}{18} = \\dfrac{2d + 22}{d + 19}$",
                  "reason": "Common ratio: the second term divided by the first and the third term divided by the second are both the common ratio."
                },
                {
                  "step": "$(d + 19)^2 = 18(2d + 22)$",
                  "reason": "Cross-multiplying: each numerator in line 4 is multiplied by the other side's denominator."
                },
                {
                  "step": "$d^2 + 38d + 361 = 18(2d + 22)$",
                  "reason": "Square of a binomial: $(d + 19)^2 = d^2 + 38d + 361$."
                },
                {
                  "step": "$d^2 + 38d + 361 = 36d + 396$",
                  "reason": "The distributive law, from arithmetic: $18(2d + 22) = 36d + 396$."
                },
                {
                  "step": "$d^2 + 2d - 35 = 0$",
                  "reason": "Adding the same number to both sides: $36d + 396$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$(d + 7)(d - 5) = 0$",
                  "reason": "Factoring a quadratic: $-7$ and $5$ have sum $-2$ and product $-35$."
                },
                {
                  "step": "Either $d = -7$ or $d = 5$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "The third term $2d + 22$ is $8$ when $d = -7$ and $32$ when $d = 5$.",
                  "reason": "Substituting a value: the second terms $12$ and $24$ and the first term $18$ are not $0$, so both ratios are defined."
                },
                {
                  "step": "The largest third term is $32$.",
                  "reason": "Comparing integers, from arithmetic: $8 < 32$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t179-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution, which finds every possible value of the fourth term of a geometric sequence of real numbers whose third term is $9$ and whose fifth term is $36$, and write that line right.",
            "given": [
              "$ar^{2} = 9$ and $ar^{4} = 36$",
              "$r^2 = 4$",
              "$r = 2$",
              "The fourth term is $9 \\cdot 2 = 18$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution, which finds every possible value of the fourth term of a geometric sequence of real numbers whose third term is $9$ and whose fifth term is $36$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the two given terms written as $ar^{n-1}$, and each line before the wrong one follows from the line before it by a rule that holds."
              },
              {
                "step": "Line 3 takes only the positive square root of $4$ and leaves out $r = -2$.",
                "reason": "A sign lost: $\\left(-2\\right)^2 = 4$ as well, and nothing in the problem makes the terms positive, so $r = -2$ also gives a geometric sequence of real numbers with the two given terms."
              },
              {
                "step": "Line 3 written right is: either $r = 2$ or $r = -2$.",
                "reason": "Worked by the same rule with every sign kept, the line is true: if $x^2 = a^2$ then $x = a$ or $x = -a$: both square roots of the number give a value of $r$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution, which finds every possible value of the seventh term of a geometric sequence of real numbers whose sixth term is $-4$ and whose eighth term is $-81$, and write that line right.",
              "given": [
                "$ar^{5} = -4$ and $ar^{7} = -81$",
                "$r^2 = -\\dfrac{81}{4}$",
                "No real number has a negative square, so no geometric sequence of real numbers has these two terms."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: r^2 = 81/4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which finds every possible value of the seventh term of a geometric sequence of real numbers whose sixth term is $-4$ and whose eighth term is $-81$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the two given terms written as $ar^{n-1}$, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 gives a negative number for $-81 \\div \\left(-4\\right)$.",
                  "reason": "A sign lost: a negative number divided by a negative number is positive, so $-81 \\div \\left(-4\\right) = \\dfrac{81}{4}$."
                },
                {
                  "step": "Line 2 written right is: $r^2 = \\dfrac{81}{4}$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: dividing both sides by a nonzero number and the quotient law: $\\dfrac{ar^7}{ar^5} = r^2$, while $-81 \\div \\left(-4\\right) = \\dfrac{81}{4}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, which finds every possible value of the eighth term of a geometric sequence of real numbers whose fifth term is $128$ and whose ninth term is $\\dfrac{1}{2}$, and write that line right.",
              "given": [
                "$ar^{4} = 128$ and $ar^{8} = \\dfrac{1}{2}$",
                "$r^4 = \\dfrac{1}{256}$",
                "$r^2 = \\dfrac{1}{16}$",
                "Either $r = \\dfrac{1}{4}$ or $r = -\\dfrac{1}{4}$.",
                "With $r = \\dfrac{1}{4}$ the eighth term is $128 \\cdot \\left(\\dfrac{1}{4}\\right)^3 = 2$.",
                "With $r = -\\dfrac{1}{4}$ the eighth term is $128 \\cdot \\left(-\\dfrac{1}{4}\\right)^3 = 2$.",
                "The eighth term is $2$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 128*(-1/4)^3 = -2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which finds every possible value of the eighth term of a geometric sequence of real numbers whose fifth term is $128$ and whose ninth term is $\\dfrac{1}{2}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 5 are right.",
                  "reason": "Line 1 is the two given terms written as $ar^{n-1}$, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 6 gives the positive number $2$ for $128 \\cdot \\left(-\\dfrac{1}{4}\\right)^3$.",
                  "reason": "A sign lost: an odd power of a negative number is negative, and a positive number times a negative number is negative, so $128 \\cdot \\left(-\\dfrac{1}{4}\\right)^3 = -2$."
                },
                {
                  "step": "Line 6 written right is: with $r = -\\dfrac{1}{4}$ the eighth term is $128 \\cdot \\left(-\\dfrac{1}{4}\\right)^3 = -2$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: the sign of a power of a negative number, with the signs of products from arithmetic: the odd power is negative, and a positive number times it is negative."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, which finds every possible value of the eighth term of a geometric sequence of real numbers whose fifth term is $2$ and whose ninth term is $200$, and write that line right.",
              "given": [
                "$ar^{4} = 2$ and $ar^{8} = 200$",
                "$r^4 = 100$",
                "$r^2 = 10$",
                "$r = \\sqrt{10}$",
                "The eighth term is $2 \\cdot \\left(\\sqrt{10}\\right)^3 = 20\\sqrt{10}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: r = sqrt(10) or r = -sqrt(10)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which finds every possible value of the eighth term of a geometric sequence of real numbers whose fifth term is $2$ and whose ninth term is $200$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the two given terms written as $ar^{n-1}$, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 takes only the positive square root of $10$ and leaves out $r = -\\sqrt{10}$.",
                  "reason": "A sign lost: $\\left(-\\sqrt{10}\\right)^2 = 10$ as well, and nothing in the problem makes the terms positive, so $r = -\\sqrt{10}$ also gives a geometric sequence of real numbers with the two given terms."
                },
                {
                  "step": "Line 4 written right is: either $r = \\sqrt{10}$ or $r = -\\sqrt{10}$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true: if $x^2 = a^2$ then $x = a$ or $x = -a$: both square roots of the number give a value of $r$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t179-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $a$ and $r$, with the sixth term on the left and nothing multiplied out: In a geometric sequence with first term $a$ and common ratio $r$, the sixth term is $5$ more than the third term.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $a$ and $r$, with the sixth term on the left and nothing multiplied out: In a geometric sequence with first term $a$ and common ratio $r$, the sixth term is $5$ more than the third term.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sixth term is $ar^5$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 6$."
              },
              {
                "step": "The third term is $ar^2$.",
                "reason": "The $n$th term $ar^{n-1}$, with $n = 3$."
              },
              {
                "step": "The right side is $ar^2 + 5$.",
                "reason": "Writing a sentence as an equation: \"$5$ more than\" adds $5$ to the third term."
              },
              {
                "step": "$ar^5 = ar^2 + 5$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $a$ and $r$, with the fifth term on the left and nothing multiplied out: In a geometric sequence with first term $a$ and common ratio $r$, the fifth term is $4$ times the second term.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "a*r^4 = 4*a*r",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $a$ and $r$, with the fifth term on the left and nothing multiplied out: In a geometric sequence with first term $a$ and common ratio $r$, the fifth term is $4$ times the second term.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fifth term is $ar^4$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 5$."
                },
                {
                  "step": "The second term is $ar$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 2$."
                },
                {
                  "step": "The right side is $4ar$.",
                  "reason": "Writing a sentence as an equation: \"$4$ times\" multiplies the second term by $4$."
                },
                {
                  "step": "$ar^4 = 4ar$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $a$ and $r$, with the seventh term on the left and nothing multiplied out: In a geometric sequence with first term $a$ and common ratio $r$, the seventh term is $9$ less than the fourth term.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "a*r^6 = a*r^3-9",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $a$ and $r$, with the seventh term on the left and nothing multiplied out: In a geometric sequence with first term $a$ and common ratio $r$, the seventh term is $9$ less than the fourth term.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The seventh term is $ar^6$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 7$."
                },
                {
                  "step": "The fourth term is $ar^3$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 4$."
                },
                {
                  "step": "The right side is $ar^3 - 9$.",
                  "reason": "Writing a sentence as an equation: \"$9$ less than\" takes $9$ from the fourth term."
                },
                {
                  "step": "$ar^6 = ar^3 - 9$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $a$ and $r$, with the fourth term on the left and nothing multiplied out: In a geometric sequence with first term $a$ and common ratio $r$, the fourth term is the square of the second term.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "a*r^3 = (a*r)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $a$ and $r$, with the fourth term on the left and nothing multiplied out: In a geometric sequence with first term $a$ and common ratio $r$, the fourth term is the square of the second term.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fourth term is $ar^3$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 4$."
                },
                {
                  "step": "The second term is $ar$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $n = 2$."
                },
                {
                  "step": "The right side is $(ar)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the whole second term, kept in a bracket, to the power 2."
                },
                {
                  "step": "$ar^3 = (ar)^2$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the second number divided by the first on the left and nothing multiplied out: The numbers $x$, $x + 6$ and $4x$ form a geometric sequence, in that order.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the second number divided by the first on the left and nothing multiplied out: The numbers $x$, $x + 6$ and $4x$ form a geometric sequence, in that order.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The second number divided by the first is $\\dfrac{x + 6}{x}$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it."
              },
              {
                "step": "The third number divided by the second is $\\dfrac{4x}{x + 6}$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it."
              },
              {
                "step": "$\\dfrac{x + 6}{x} = \\dfrac{4x}{x + 6}$",
                "reason": "Writing a sentence as an equation: a geometric sequence has one common ratio, so the two quotients are equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the second number divided by the first on the left and nothing multiplied out: The sequence $5, x, 125$ is geometric.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x)/(5) = (125)/(x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the second number divided by the first on the left and nothing multiplied out: The sequence $5, x, 125$ is geometric.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The second number divided by the first is $\\dfrac{x}{5}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it."
                },
                {
                  "step": "The third number divided by the second is $\\dfrac{125}{x}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it."
                },
                {
                  "step": "$\\dfrac{x}{5} = \\dfrac{125}{x}$",
                  "reason": "Writing a sentence as an equation: a geometric sequence has one common ratio, so the two quotients are equal."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the second number divided by the first on the left and nothing multiplied out: The numbers $x - 1$, $x + 3$, $5x$ are three terms in a row of a geometric sequence.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+3)/(x-1) = (5*x)/(x+3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the second number divided by the first on the left and nothing multiplied out: The numbers $x - 1$, $x + 3$, $5x$ are three terms in a row of a geometric sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The second number divided by the first is $\\dfrac{x + 3}{x - 1}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it."
                },
                {
                  "step": "The third number divided by the second is $\\dfrac{5x}{x + 3}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it."
                },
                {
                  "step": "$\\dfrac{x + 3}{x - 1} = \\dfrac{5x}{x + 3}$",
                  "reason": "Writing a sentence as an equation: a geometric sequence has one common ratio, so the two quotients are equal."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the second number divided by the first on the left and nothing multiplied out: The numbers $x + 2$, $3x$ and $8x - 3$, in that order, are the first three terms of a geometric sequence.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(3*x)/(x+2) = (8*x-3)/(3*x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the second number divided by the first on the left and nothing multiplied out: The numbers $x + 2$, $3x$ and $8x - 3$, in that order, are the first three terms of a geometric sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The second number divided by the first is $\\dfrac{3x}{x + 2}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it."
                },
                {
                  "step": "The third number divided by the second is $\\dfrac{8x - 3}{3x}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it."
                },
                {
                  "step": "$\\dfrac{3x}{x + 2} = \\dfrac{8x - 3}{3x}$",
                  "reason": "Writing a sentence as an equation: a geometric sequence has one common ratio, so the two quotients are equal."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $y$ and $r$, with the product on the left and nothing multiplied out: Three terms in a row of a geometric sequence have middle term $y$ and common ratio $r$, and their product is $343$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $y$ and $r$, with the product on the left and nothing multiplied out: Three terms in a row of a geometric sequence have middle term $y$ and common ratio $r$, and their product is $343$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The term before the middle term is $\\dfrac{y}{r}$.",
                "reason": "Common ratio: the middle term is the term before it times $r$, so the term before it is $y$ divided by $r$."
              },
              {
                "step": "The term after the middle term is $yr$.",
                "reason": "Common ratio: each term is the term before it times $r$."
              },
              {
                "step": "Their product is $\\dfrac{y}{r} \\cdot y \\cdot yr$.",
                "reason": "Writing a sentence as an equation: \"product\" multiplies the three terms."
              },
              {
                "step": "$\\dfrac{y}{r} \\cdot y \\cdot yr = 343$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $y$ and $r$, with the sum on the left and nothing multiplied out: Three terms in a row of a geometric sequence have middle term $y$ and common ratio $r$, and their sum is $26$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y/r+y+y*r = 26",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $y$ and $r$, with the sum on the left and nothing multiplied out: Three terms in a row of a geometric sequence have middle term $y$ and common ratio $r$, and their sum is $26$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The term before the middle term is $\\dfrac{y}{r}$.",
                  "reason": "Common ratio: the middle term is the term before it times $r$, so the term before it is $y$ divided by $r$."
                },
                {
                  "step": "The term after the middle term is $yr$.",
                  "reason": "Common ratio: each term is the term before it times $r$."
                },
                {
                  "step": "Their sum is $\\dfrac{y}{r} + y + yr$.",
                  "reason": "Writing a sentence as an equation: \"sum\" adds the three terms."
                },
                {
                  "step": "$\\dfrac{y}{r} + y + yr = 26$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $y$ and $r$, with the sum on the left and nothing multiplied out: Three terms in a row of a geometric sequence have middle term $y$ and common ratio $r$, and the sum of their squares is $91$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(y/r)^2+y^2+(y*r)^2 = 91",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $y$ and $r$, with the sum on the left and nothing multiplied out: Three terms in a row of a geometric sequence have middle term $y$ and common ratio $r$, and the sum of their squares is $91$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The term before the middle term is $\\dfrac{y}{r}$.",
                  "reason": "Common ratio: the middle term is the term before it times $r$, so the term before it is $y$ divided by $r$."
                },
                {
                  "step": "The term after the middle term is $yr$.",
                  "reason": "Common ratio: each term is the term before it times $r$."
                },
                {
                  "step": "The sum of their squares is $\\left(\\dfrac{y}{r}\\right)^2 + y^2 + (yr)^2$.",
                  "reason": "Writing a sentence as an equation: \"the sum of their squares\" squares each term and adds the squares."
                },
                {
                  "step": "$\\left(\\dfrac{y}{r}\\right)^2 + y^2 + (yr)^2 = 91$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $y$ and $r$, with the sum of the first and last terms on the left and nothing multiplied out: Three terms in a row of a geometric sequence have middle term $y$ and common ratio $r$, and the sum of the first and last terms is $34$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y/r+y*r = 34",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $y$ and $r$, with the sum of the first and last terms on the left and nothing multiplied out: Three terms in a row of a geometric sequence have middle term $y$ and common ratio $r$, and the sum of the first and last terms is $34$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The term before the middle term is $\\dfrac{y}{r}$.",
                  "reason": "Common ratio: the middle term is the term before it times $r$, so the term before it is $y$ divided by $r$."
                },
                {
                  "step": "The term after the middle term is $yr$.",
                  "reason": "Common ratio: each term is the term before it times $r$."
                },
                {
                  "step": "The sum of the first and last terms is $\\dfrac{y}{r} + yr$.",
                  "reason": "Writing a sentence as an equation: \"sum\" adds the first and last terms."
                },
                {
                  "step": "$\\dfrac{y}{r} + yr = 34$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
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
      "id": "t179-p1",
      "method": "direct proof",
      "statement": "In a geometric sequence of positive numbers $a_1, a_2, a_3, \\dots$ with common ratio $r$, a term exactly midway between two other terms is their geometric mean: for whole numbers $n$ and $k$ with $1 \\le k < n$, $a_n = \\sqrt{a_{n-k}a_{n+k}}$.",
      "idea": "Write the three terms from the first term and the common ratio. The powers of $r$ in the two outer terms add up to twice the power in the middle term, so the product of the outer terms is the square of the middle term; the middle term is positive, so it is the positive square root of that product.",
      "lines": [
        {
          "line": "The term $a_{n-k}$ equals $a_1r^{n-k-1}$.",
          "reason": "The $n$th term $ar^{n-1}$, with $a = a_1$ and $n - k$ in place of $n$."
        },
        {
          "line": "The term $a_{n+k}$ equals $a_1r^{n+k-1}$.",
          "reason": "The $n$th term $ar^{n-1}$, with $a = a_1$ and $n + k$ in place of $n$."
        },
        {
          "line": "So $a_{n-k}a_{n+k} = a_1^2r^{2n-2}$.",
          "reason": "Product law, with the commutative law of multiplication: the exponents $n - k - 1$ and $n + k - 1$ add up to $2n - 2$."
        },
        {
          "line": "The square $(a_1r^{n-1})^2$ equals $a_1^2(r^{n-1})^2$.",
          "reason": "Power of a product."
        },
        {
          "line": "The product $a_1^2(r^{n-1})^2$ equals $a_1^2r^{2n-2}$.",
          "reason": "Power law: $(r^{n-1})^2 = r^{2n-2}$."
        },
        {
          "line": "So $a_{n-k}a_{n+k} = (a_1r^{n-1})^2$.",
          "reason": "Lines 3 to 5, with the transitive property."
        },
        {
          "line": "The term $a_n$ equals $a_1r^{n-1}$.",
          "reason": "The $n$th term $ar^{n-1}$, with $a = a_1$."
        },
        {
          "line": "So $a_{n-k}a_{n+k} = a_n^2$.",
          "reason": "Substitution: $a_n$ is put for $a_1r^{n-1}$ in line 6, from line 7."
        },
        {
          "line": "The term $a_n$ is above $0$.",
          "reason": "Every term of the sequence is positive, as the statement gives."
        },
        {
          "line": "So $a_n = \\sqrt{a_{n-k}a_{n+k}}$.",
          "reason": "Positive square root, from arithmetic: $a_n$ is the positive number whose square is $a_{n-k}a_{n+k}$, by lines 8 and 9."
        },
        {
          "line": "Therefore $a_n$ is the geometric mean of $a_{n-k}$ and $a_{n+k}$.",
          "reason": "Arithmetic mean and geometric mean: the geometric mean of two positive numbers is the square root of their product."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t179-s1",
      "method": "direct proof",
      "statement": "Prove that if $a_1, a_2, a_3, \\dots$ is a geometric sequence with common ratio $r$, then $a_1^2, a_2^2, a_3^2, \\dots$ is a geometric sequence with common ratio $r^2$. Facts it may use: geometric sequence, common ratio, raising both sides to a power, power of a product, transitive property.",
      "check": {
        "proof": [
          {
            "line": "For every whole number $n$ from $1$ up, $a_{n+1} = ra_n$.",
            "reason": "Geometric sequence: each term after the first is the term before it times the common ratio $r$."
          },
          {
            "line": "So $a_{n+1}^2 = (ra_n)^2$ for every whole number $n$ from $1$ up.",
            "reason": "Raising both sides to a power: both sides of line 1 are squared."
          },
          {
            "line": "The square $(ra_n)^2$ equals $r^2a_n^2$.",
            "reason": "Power of a product."
          },
          {
            "line": "So $a_{n+1}^2 = r^2a_n^2$ for every whole number $n$ from $1$ up.",
            "reason": "Lines 2 and 3, with the transitive property."
          },
          {
            "line": "Therefore $a_1^2, a_2^2, a_3^2, \\dots$ is a geometric sequence with common ratio $r^2$.",
            "reason": "Geometric sequence: by line 4, each square after the first is the square before it times the one number $r^2$."
          }
        ]
      }
    },
    {
      "id": "t179-s2",
      "method": "direct proof",
      "statement": "Prove that if the three numbers $1$, $a$, $b$ form both an arithmetic sequence and a geometric sequence, in that order, then $a = 1$ and $b = 1$. Facts it may use: common ratio, a term midway between two others is their mean, substitution, square of a binomial, Trivial Inequality.",
      "check": {
        "proof": [
          {
            "line": "The common ratio of the geometric sequence $1$, $a$, $b$ is $a$.",
            "reason": "Common ratio: the second term is the first term, $1$, times the common ratio."
          },
          {
            "line": "So $b = a \\cdot a = a^2$.",
            "reason": "Common ratio: the third term is the second term times the common ratio $a$."
          },
          {
            "line": "The arithmetic sequence $1$, $a$, $b$ gives $a = \\dfrac{1 + b}{2}$.",
            "reason": "A term midway between two others is their mean."
          },
          {
            "line": "So $2a = 1 + b$.",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
          },
          {
            "line": "So $2a = 1 + a^2$.",
            "reason": "Substitution: $a^2$ is put for $b$, from line 2."
          },
          {
            "line": "So $a^2 - 2a + 1 = 0$.",
            "reason": "Adding the same number to both sides: $2a$ is taken from both sides."
          },
          {
            "line": "So $(a - 1)^2 = 0$.",
            "reason": "Square of a binomial: $(a - 1)^2 = a^2 - 2a + 1$."
          },
          {
            "line": "So $a - 1 = 0$.",
            "reason": "Trivial Inequality: $x^2 = 0$ only at $x = 0$."
          },
          {
            "line": "So $a = 1$.",
            "reason": "Adding the same number to both sides: $1$ is added to both sides."
          },
          {
            "line": "Therefore $b = 1^2 = 1$, and $a = 1$ and $b = 1$.",
            "reason": "Substituting a value: $a = 1$ is put into line 2."
          }
        ]
      }
    }
  ]
}
