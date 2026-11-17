export default {
  "number": 219,
  "title": "Equations and inequalities with logarithms",
  "section": 14,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "416-423, 433-443, 453-455"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $12^x = 72$ for $x$ in terms of $c$, where $c = \\log_{2}{3}$.",
    "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
    "answer": "x = (3+2*c)/(2+c)",
    "solution": [
      "Solve $12^x = 72$ for $x$ in terms of $c$, where $c = \\log_{2}{3}$.",
      "$\\log_{2}{12^x} = \\log_{2}{72}$",
      "$x\\log_{2}{12} = \\log_{2}{72}$",
      "$x\\log_{2}{(2^{2} \\cdot 3)} = \\log_{2}{(2^{3} \\cdot 3^{2})}$",
      "$x\\left(\\log_{2}{2^{2}} + \\log_{2}{3}\\right) = \\log_{2}{2^{3}} + \\log_{2}{3^{2}}$",
      "$x\\left(2 + \\log_{2}{3}\\right) = 3 + 2\\log_{2}{3}$",
      "$x(2 + c) = 3 + 2c$",
      "$x = \\dfrac{3 + 2c}{2 + c}$"
    ]
  },
  "ideas": [
    {
      "name": "Log to exponential form",
      "concrete": "The equation $\\log_{2}{(x - 3)} = 4$ says that $2$ raised to the power $4$ gives $x - 3$. So $x - 3 = 2^{4} = 16$, and $x = 19$. An equation with several logarithms is first written with a single logarithm, by the logarithm identities, and then in this form.",
      "general": "For a positive number $a$ other than 1, an expression $u$ and a number $c$, the equation $\\log_a u = c$ holds exactly when $u = a^c$. Writing an equation this way is **Log to exponential form**. Since $a^c$ is positive, every $u$ found this way is positive."
    },
    {
      "name": "Domain of a logarithm",
      "concrete": "In $\\log_{3}{x} + \\log_{3}{(x - 8)} = 2$ both logarithms are defined exactly when $x > 8$. The log of a product and the exponential form give $x(x - 8) = 9$, with the roots $9$ and $-1$. Only $9$ is greater than $8$, so $x = 9$ is the one solution. At $x = -1$ the product $x(x - 8)$ is positive although both of its factors are negative, so $-1$ satisfies the product equation and not the equation given.",
      "general": "For a positive number $a$ other than 1, $\\log_a u$ is defined exactly when $u > 0$. An equation or an inequality with logarithms is solved only among the values of the unknown that make every logarithm in it defined; this is the **Domain of a logarithm**. A value found on the way that lies outside is an extraneous solution, and it is dropped."
    },
    {
      "name": "Number of digits",
      "concrete": "The least whole number with 4 digits is $1000 = 10^{3}$, and the least with 5 digits is $10^{4}$. So a whole number has 4 digits exactly when it is at least $10^{3}$ and less than $10^{4}$, and its logarithm to the base 10 is then at least 3 and less than 4.",
      "general": "For a whole number $k$ greater than 0, a positive whole number $n$ has $k$ digits exactly when $10^{k-1} \\le n < 10^{k}$, that is, when $k - 1 \\le \\log_{10} n < k$. This is the **Number of digits**: it is 1 more than the whole part of $\\log_{10} n$."
    }
  ],
  "kinds": [
    {
      "id": "t219-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $6^x = 12$ for $x$ in terms of $c$, where $c = \\log_{2}{3}$.",
            "lines": [
              {
                "step": "Solve $6^x = 12$ for $x$ in terms of $c$, where $c = \\log_{2}{3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{2}{6^x} = \\log_{2}{12}$",
                "reason": "Logarithm: both sides are positive, and equal positive numbers have equal logarithms to the base $2$."
              },
              {
                "step": "$x\\log_{2}{6} = \\log_{2}{12}$",
                "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $x$ down in front."
              },
              {
                "step": "$x\\log_{2}{(2 \\cdot 3)} = \\log_{2}{(2^{2} \\cdot 3)}$",
                "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $6 = 2 \\cdot 3$ and $12 = 2^{2} \\cdot 3$."
              },
              {
                "step": "$x\\left(\\log_{2}{2} + \\log_{2}{3}\\right) = \\log_{2}{2^{2}} + \\log_{2}{3}$",
                "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
              },
              {
                "step": "$x\\left(1 + \\log_{2}{3}\\right) = 2 + \\log_{2}{3}$",
                "reason": "Log of a power and Logarithm: an exponent comes down in front of its logarithm, and $\\log_a a^p = p$."
              },
              {
                "step": "$x(1 + c) = 2 + c$",
                "reason": "Substituting a value: the letter $c$ stands for $\\log_{2}{3}$."
              },
              {
                "step": "$x = \\dfrac{2 + c}{1 + c}$",
                "reason": "Dividing both sides by a nonzero number: $1 + c$ is positive, since $c$ is positive, so it is not $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $21^x = 7$ for $x$ in terms of $c$, where $c = \\log_{3}{7}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = c/(1+c)",
              "lines": [
                {
                  "step": "Solve $21^x = 7$ for $x$ in terms of $c$, where $c = \\log_{3}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{3}{21^x} = \\log_{3}{7}$",
                  "reason": "Logarithm: both sides are positive, and equal positive numbers have equal logarithms to the base $3$."
                },
                {
                  "step": "$x\\log_{3}{21} = \\log_{3}{7}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $x$ down in front."
                },
                {
                  "step": "$x\\log_{3}{(3 \\cdot 7)} = \\log_{3}{7}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $21 = 3 \\cdot 7$ and $7 = 7$."
                },
                {
                  "step": "$x\\left(\\log_{3}{3} + \\log_{3}{7}\\right) = \\log_{3}{7}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$x\\left(1 + \\log_{3}{7}\\right) = \\log_{3}{7}$",
                  "reason": "Log of a power and Logarithm: an exponent comes down in front of its logarithm, and $\\log_a a^p = p$."
                },
                {
                  "step": "$x(1 + c) = c$",
                  "reason": "Substituting a value: the letter $c$ stands for $\\log_{3}{7}$."
                },
                {
                  "step": "$x = \\dfrac{c}{1 + c}$",
                  "reason": "Dividing both sides by a nonzero number: $1 + c$ is positive, since $c$ is positive, so it is not $0$."
                }
              ]
            },
            {
              "prompt": "Solve $50^x = 5$ for $x$ in terms of $c$, where $c = \\log_{2}{5}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = c/(1+2*c)",
              "lines": [
                {
                  "step": "Solve $50^x = 5$ for $x$ in terms of $c$, where $c = \\log_{2}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{50^x} = \\log_{2}{5}$",
                  "reason": "Logarithm: both sides are positive, and equal positive numbers have equal logarithms to the base $2$."
                },
                {
                  "step": "$x\\log_{2}{50} = \\log_{2}{5}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $x$ down in front."
                },
                {
                  "step": "$x\\log_{2}{(2 \\cdot 5^{2})} = \\log_{2}{5}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $50 = 2 \\cdot 5^{2}$ and $5 = 5$."
                },
                {
                  "step": "$x\\left(\\log_{2}{2} + \\log_{2}{5^{2}}\\right) = \\log_{2}{5}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$x\\left(1 + 2\\log_{2}{5}\\right) = \\log_{2}{5}$",
                  "reason": "Log of a power and Logarithm: an exponent comes down in front of its logarithm, and $\\log_a a^p = p$."
                },
                {
                  "step": "$x(1 + 2c) = c$",
                  "reason": "Substituting a value: the letter $c$ stands for $\\log_{2}{5}$."
                },
                {
                  "step": "$x = \\dfrac{c}{1 + 2c}$",
                  "reason": "Dividing both sides by a nonzero number: $1 + 2c$ is positive, since $c$ is positive, so it is not $0$."
                }
              ]
            },
            {
              "prompt": "Solve $63^x = 49$ for $x$ in terms of $c$, where $c = \\log_{3}{7}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 2*c/(2+c)",
              "lines": [
                {
                  "step": "Solve $63^x = 49$ for $x$ in terms of $c$, where $c = \\log_{3}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{3}{63^x} = \\log_{3}{49}$",
                  "reason": "Logarithm: both sides are positive, and equal positive numbers have equal logarithms to the base $3$."
                },
                {
                  "step": "$x\\log_{3}{63} = \\log_{3}{49}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $x$ down in front."
                },
                {
                  "step": "$x\\log_{3}{(3^{2} \\cdot 7)} = \\log_{3}{7^{2}}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $63 = 3^{2} \\cdot 7$ and $49 = 7^{2}$."
                },
                {
                  "step": "$x\\left(\\log_{3}{3^{2}} + \\log_{3}{7}\\right) = \\log_{3}{7^{2}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$x\\left(2 + \\log_{3}{7}\\right) = 2\\log_{3}{7}$",
                  "reason": "Log of a power and Logarithm: an exponent comes down in front of its logarithm, and $\\log_a a^p = p$."
                },
                {
                  "step": "$x(2 + c) = 2c$",
                  "reason": "Substituting a value: the letter $c$ stands for $\\log_{3}{7}$."
                },
                {
                  "step": "$x = \\dfrac{2c}{2 + c}$",
                  "reason": "Dividing both sides by a nonzero number: $2 + c$ is positive, since $c$ is positive, so it is not $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Express $\\log_{45}{27}$ in terms of $c$, where $c = \\log_{5}{3}$.",
            "lines": [
              {
                "step": "Express $\\log_{45}{27}$ in terms of $c$, where $c = \\log_{5}{3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{45}{27} = \\dfrac{\\log_{5}{27}}{\\log_{5}{45}}$",
                "reason": "Change of base: a logarithm to the base $45$ is a quotient of two logarithms in the base $5$."
              },
              {
                "step": "$\\log_{45}{27} = \\dfrac{\\log_{5}{3^{3}}}{\\log_{5}{(5 \\cdot 3^{2})}}$",
                "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $45 = 5 \\cdot 3^{2}$ and $27 = 3^{3}$."
              },
              {
                "step": "$\\log_{45}{27} = \\dfrac{\\log_{5}{3^{3}}}{\\log_{5}{5} + \\log_{5}{3^{2}}}$",
                "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
              },
              {
                "step": "$\\log_{45}{27} = \\dfrac{3\\log_{5}{3}}{1 + 2\\log_{5}{3}}$",
                "reason": "Log of a power and Logarithm: an exponent comes down in front of its logarithm, and $\\log_a a^p = p$."
              },
              {
                "step": "$\\log_{45}{27} = \\dfrac{3c}{1 + 2c}$",
                "reason": "Substituting a value: the letter $c$ stands for $\\log_{5}{3}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Express $\\log_{20}{5}$ in terms of $c$, where $c = \\log_{2}{5}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "c/(2+c)",
              "lines": [
                {
                  "step": "Express $\\log_{20}{5}$ in terms of $c$, where $c = \\log_{2}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{20}{5} = \\dfrac{\\log_{2}{5}}{\\log_{2}{20}}$",
                  "reason": "Change of base: a logarithm to the base $20$ is a quotient of two logarithms in the base $2$."
                },
                {
                  "step": "$\\log_{20}{5} = \\dfrac{\\log_{2}{5}}{\\log_{2}{(2^{2} \\cdot 5)}}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $20 = 2^{2} \\cdot 5$ and $5 = 5$."
                },
                {
                  "step": "$\\log_{20}{5} = \\dfrac{\\log_{2}{5}}{\\log_{2}{2^{2}} + \\log_{2}{5}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\log_{20}{5} = \\dfrac{\\log_{2}{5}}{2 + \\log_{2}{5}}$",
                  "reason": "Log of a power and Logarithm: an exponent comes down in front of its logarithm, and $\\log_a a^p = p$."
                },
                {
                  "step": "$\\log_{20}{5} = \\dfrac{c}{2 + c}$",
                  "reason": "Substituting a value: the letter $c$ stands for $\\log_{2}{5}$."
                }
              ]
            },
            {
              "prompt": "Express $\\log_{40}{200}$ in terms of $c$, where $c = \\log_{2}{5}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(3+2*c)/(3+c)",
              "lines": [
                {
                  "step": "Express $\\log_{40}{200}$ in terms of $c$, where $c = \\log_{2}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{40}{200} = \\dfrac{\\log_{2}{200}}{\\log_{2}{40}}$",
                  "reason": "Change of base: a logarithm to the base $40$ is a quotient of two logarithms in the base $2$."
                },
                {
                  "step": "$\\log_{40}{200} = \\dfrac{\\log_{2}{(2^{3} \\cdot 5^{2})}}{\\log_{2}{(2^{3} \\cdot 5)}}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $40 = 2^{3} \\cdot 5$ and $200 = 2^{3} \\cdot 5^{2}$."
                },
                {
                  "step": "$\\log_{40}{200} = \\dfrac{\\log_{2}{2^{3}} + \\log_{2}{5^{2}}}{\\log_{2}{2^{3}} + \\log_{2}{5}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\log_{40}{200} = \\dfrac{3 + 2\\log_{2}{5}}{3 + \\log_{2}{5}}$",
                  "reason": "Log of a power and Logarithm: an exponent comes down in front of its logarithm, and $\\log_a a^p = p$."
                },
                {
                  "step": "$\\log_{40}{200} = \\dfrac{3 + 2c}{3 + c}$",
                  "reason": "Substituting a value: the letter $c$ stands for $\\log_{2}{5}$."
                }
              ]
            },
            {
              "prompt": "Express $\\log_{24}{108}$ in terms of $c$, where $c = \\log_{2}{3}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(2+3*c)/(3+c)",
              "lines": [
                {
                  "step": "Express $\\log_{24}{108}$ in terms of $c$, where $c = \\log_{2}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{24}{108} = \\dfrac{\\log_{2}{108}}{\\log_{2}{24}}$",
                  "reason": "Change of base: a logarithm to the base $24$ is a quotient of two logarithms in the base $2$."
                },
                {
                  "step": "$\\log_{24}{108} = \\dfrac{\\log_{2}{(2^{2} \\cdot 3^{3})}}{\\log_{2}{(2^{3} \\cdot 3)}}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $24 = 2^{3} \\cdot 3$ and $108 = 2^{2} \\cdot 3^{3}$."
                },
                {
                  "step": "$\\log_{24}{108} = \\dfrac{\\log_{2}{2^{2}} + \\log_{2}{3^{3}}}{\\log_{2}{2^{3}} + \\log_{2}{3}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\log_{24}{108} = \\dfrac{2 + 3\\log_{2}{3}}{3 + \\log_{2}{3}}$",
                  "reason": "Log of a power and Logarithm: an exponent comes down in front of its logarithm, and $\\log_a a^p = p$."
                },
                {
                  "step": "$\\log_{24}{108} = \\dfrac{2 + 3c}{3 + c}$",
                  "reason": "Substituting a value: the letter $c$ stands for $\\log_{2}{3}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t219-k2",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $21^{\\log_{3}{11}} \\cdot 11^{\\log_{3}{\\frac{9}{7}}}$.",
            "lines": [
              {
                "step": "Evaluate $21^{\\log_{3}{11}} \\cdot 11^{\\log_{3}{\\frac{9}{7}}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $x$ for the value: $\\log_{3}{x} = \\log_{3}{\\left(21^{\\log_{3}{11}} \\cdot 11^{\\log_{3}{\\frac{9}{7}}}\\right)}$",
                "reason": "Logarithm: the value is a product of powers of positive numbers, so it is positive, and equal positive numbers have equal logarithms to the base $3$."
              },
              {
                "step": "$\\log_{3}{x} = \\log_{3}{21^{\\log_{3}{11}}} + \\log_{3}{11^{\\log_{3}{\\frac{9}{7}}}}$",
                "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
              },
              {
                "step": "$\\log_{3}{x} = \\log_{3}{11} \\cdot \\log_{3}{21} + \\log_{3}{\\dfrac{9}{7}} \\cdot \\log_{3}{11}$",
                "reason": "Log of a power: each exponent comes down in front of its logarithm."
              },
              {
                "step": "$\\log_{3}{x} = \\log_{3}{11} \\cdot \\left(\\log_{3}{21} + \\log_{3}{\\dfrac{9}{7}}\\right)$",
                "reason": "Factoring: each term has the factor $\\log_{3}{11}$."
              },
              {
                "step": "$\\log_{3}{x} = \\log_{3}{11} \\cdot \\log_{3}{27}$",
                "reason": "Log of a product: the two logarithms in the bracket have the same base $3$, and $21 \\cdot \\dfrac{9}{7} = 27$."
              },
              {
                "step": "$\\log_{3}{x} = 3\\log_{3}{11}$",
                "reason": "Logarithm: $3^{3} = 27$ means $\\log_{3}{27} = 3$."
              },
              {
                "step": "$\\log_{3}{x} = \\log_{3}{11^{3}}$",
                "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number in front up as an exponent."
              },
              {
                "step": "$x = 11^{3}$",
                "reason": "Monotonic functions are one-to-one: the logarithm to the base $3$ is monotonically increasing, so two positive numbers with the same logarithm are equal."
              },
              {
                "step": "$x = 1331$",
                "reason": "The definition of a power, from arithmetic: $11^{3} = 1331$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $32^{\\log_{10}{13}} \\cdot 13^{\\log_{10}{\\frac{25}{8}}}$.",
              "form": "Answer as an integer.",
              "answer": "169",
              "lines": [
                {
                  "step": "Evaluate $32^{\\log_{10}{13}} \\cdot 13^{\\log_{10}{\\frac{25}{8}}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ for the value: $\\log_{10}{x} = \\log_{10}{\\left(32^{\\log_{10}{13}} \\cdot 13^{\\log_{10}{\\frac{25}{8}}}\\right)}$",
                  "reason": "Logarithm: the value is a product of powers of positive numbers, so it is positive, and equal positive numbers have equal logarithms to the base $10$."
                },
                {
                  "step": "$\\log_{10}{x} = \\log_{10}{32^{\\log_{10}{13}}} + \\log_{10}{13^{\\log_{10}{\\frac{25}{8}}}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\log_{10}{x} = \\log_{10}{13} \\cdot \\log_{10}{32} + \\log_{10}{\\dfrac{25}{8}} \\cdot \\log_{10}{13}$",
                  "reason": "Log of a power: each exponent comes down in front of its logarithm."
                },
                {
                  "step": "$\\log_{10}{x} = \\log_{10}{13} \\cdot \\left(\\log_{10}{32} + \\log_{10}{\\dfrac{25}{8}}\\right)$",
                  "reason": "Factoring: each term has the factor $\\log_{10}{13}$."
                },
                {
                  "step": "$\\log_{10}{x} = \\log_{10}{13} \\cdot \\log_{10}{100}$",
                  "reason": "Log of a product: the two logarithms in the bracket have the same base $10$, and $32 \\cdot \\dfrac{25}{8} = 100$."
                },
                {
                  "step": "$\\log_{10}{x} = 2\\log_{10}{13}$",
                  "reason": "Logarithm: $10^{2} = 100$ means $\\log_{10}{100} = 2$."
                },
                {
                  "step": "$\\log_{10}{x} = \\log_{10}{13^{2}}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number in front up as an exponent."
                },
                {
                  "step": "$x = 13^{2}$",
                  "reason": "Monotonic functions are one-to-one: the logarithm to the base $10$ is monotonically increasing, so two positive numbers with the same logarithm are equal."
                },
                {
                  "step": "$x = 169$",
                  "reason": "The definition of a power, from arithmetic: $13^{2} = 169$."
                }
              ]
            },
            {
              "prompt": "Evaluate $50^{\\log_{5}{12}} \\cdot 12^{\\log_{5}{\\frac{1}{2}}}$.",
              "form": "Answer as an integer.",
              "answer": "144",
              "lines": [
                {
                  "step": "Evaluate $50^{\\log_{5}{12}} \\cdot 12^{\\log_{5}{\\frac{1}{2}}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ for the value: $\\log_{5}{x} = \\log_{5}{\\left(50^{\\log_{5}{12}} \\cdot 12^{\\log_{5}{\\frac{1}{2}}}\\right)}$",
                  "reason": "Logarithm: the value is a product of powers of positive numbers, so it is positive, and equal positive numbers have equal logarithms to the base $5$."
                },
                {
                  "step": "$\\log_{5}{x} = \\log_{5}{50^{\\log_{5}{12}}} + \\log_{5}{12^{\\log_{5}{\\frac{1}{2}}}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\log_{5}{x} = \\log_{5}{12} \\cdot \\log_{5}{50} + \\log_{5}{\\dfrac{1}{2}} \\cdot \\log_{5}{12}$",
                  "reason": "Log of a power: each exponent comes down in front of its logarithm."
                },
                {
                  "step": "$\\log_{5}{x} = \\log_{5}{12} \\cdot \\left(\\log_{5}{50} + \\log_{5}{\\dfrac{1}{2}}\\right)$",
                  "reason": "Factoring: each term has the factor $\\log_{5}{12}$."
                },
                {
                  "step": "$\\log_{5}{x} = \\log_{5}{12} \\cdot \\log_{5}{25}$",
                  "reason": "Log of a product: the two logarithms in the bracket have the same base $5$, and $50 \\cdot \\dfrac{1}{2} = 25$."
                },
                {
                  "step": "$\\log_{5}{x} = 2\\log_{5}{12}$",
                  "reason": "Logarithm: $5^{2} = 25$ means $\\log_{5}{25} = 2$."
                },
                {
                  "step": "$\\log_{5}{x} = \\log_{5}{12^{2}}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number in front up as an exponent."
                },
                {
                  "step": "$x = 12^{2}$",
                  "reason": "Monotonic functions are one-to-one: the logarithm to the base $5$ is monotonically increasing, so two positive numbers with the same logarithm are equal."
                },
                {
                  "step": "$x = 144$",
                  "reason": "The definition of a power, from arithmetic: $12^{2} = 144$."
                }
              ]
            },
            {
              "prompt": "Evaluate $18^{\\log_{2}{3}} \\cdot 3^{\\log_{2}{\\frac{8}{9}}}$.",
              "form": "Answer as an integer.",
              "answer": "81",
              "lines": [
                {
                  "step": "Evaluate $18^{\\log_{2}{3}} \\cdot 3^{\\log_{2}{\\frac{8}{9}}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ for the value: $\\log_{2}{x} = \\log_{2}{\\left(18^{\\log_{2}{3}} \\cdot 3^{\\log_{2}{\\frac{8}{9}}}\\right)}$",
                  "reason": "Logarithm: the value is a product of powers of positive numbers, so it is positive, and equal positive numbers have equal logarithms to the base $2$."
                },
                {
                  "step": "$\\log_{2}{x} = \\log_{2}{18^{\\log_{2}{3}}} + \\log_{2}{3^{\\log_{2}{\\frac{8}{9}}}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\log_{2}{x} = \\log_{2}{3} \\cdot \\log_{2}{18} + \\log_{2}{\\dfrac{8}{9}} \\cdot \\log_{2}{3}$",
                  "reason": "Log of a power: each exponent comes down in front of its logarithm."
                },
                {
                  "step": "$\\log_{2}{x} = \\log_{2}{3} \\cdot \\left(\\log_{2}{18} + \\log_{2}{\\dfrac{8}{9}}\\right)$",
                  "reason": "Factoring: each term has the factor $\\log_{2}{3}$."
                },
                {
                  "step": "$\\log_{2}{x} = \\log_{2}{3} \\cdot \\log_{2}{16}$",
                  "reason": "Log of a product: the two logarithms in the bracket have the same base $2$, and $18 \\cdot \\dfrac{8}{9} = 16$."
                },
                {
                  "step": "$\\log_{2}{x} = 4\\log_{2}{3}$",
                  "reason": "Logarithm: $2^{4} = 16$ means $\\log_{2}{16} = 4$."
                },
                {
                  "step": "$\\log_{2}{x} = \\log_{2}{3^{4}}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number in front up as an exponent."
                },
                {
                  "step": "$x = 3^{4}$",
                  "reason": "Monotonic functions are one-to-one: the logarithm to the base $2$ is monotonically increasing, so two positive numbers with the same logarithm are equal."
                },
                {
                  "step": "$x = 81$",
                  "reason": "The definition of a power, from arithmetic: $3^{4} = 81$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t219-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\log_{10}{x} + \\log_{10}{(x + 3)} = 1$.",
            "lines": [
              {
                "step": "Solve $\\log_{10}{x} + \\log_{10}{(x + 3)} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Both logarithms are defined exactly when $x > 0$.",
                "reason": "Domain of a logarithm: $x > 0$ and $x + 3 > 0$ must both hold."
              },
              {
                "step": "$\\log_{10}{\\left(x(x + 3)\\right)} = 1$",
                "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
              },
              {
                "step": "$x(x + 3) = 10$",
                "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, and $10^{1} = 10$."
              },
              {
                "step": "$x^2 + 3x = 10$",
                "reason": "Multiplying out: each term of one bracket multiplies each term of the other."
              },
              {
                "step": "$x^2 + 3x - 10 = 0$",
                "reason": "Adding the same number to both sides: $-10$ is added to both sides."
              },
              {
                "step": "$(x - 2)(x + 5) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = 2$ or $x = -5$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Only $x = 2$ is greater than $0$, so it is the one solution.",
                "reason": "Domain of a logarithm: a solution must make every logarithm defined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\log_{2}{(x + 1)} + \\log_{2}{(x + 7)} = 4$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1",
              "lines": [
                {
                  "step": "Solve $\\log_{2}{(x + 1)} + \\log_{2}{(x + 7)} = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > -1$.",
                  "reason": "Domain of a logarithm: $x + 1 > 0$ and $x + 7 > 0$ must both hold."
                },
                {
                  "step": "$\\log_{2}{\\left((x + 1)(x + 7)\\right)} = 4$",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
                },
                {
                  "step": "$(x + 1)(x + 7) = 16$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, and $2^{4} = 16$."
                },
                {
                  "step": "$x^2 + 8x + 7 = 16$",
                  "reason": "Multiplying out: each term of one bracket multiplies each term of the other."
                },
                {
                  "step": "$x^2 + 8x - 9 = 0$",
                  "reason": "Adding the same number to both sides: $-16$ is added to both sides."
                },
                {
                  "step": "$(x - 1)(x + 9) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 1$ or $x = -9$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Only $x = 1$ is greater than $-1$, so it is the one solution.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{3}{(x - 8)} + \\log_{3}{(x - 6)} = 1$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 9",
              "lines": [
                {
                  "step": "Solve $\\log_{3}{(x - 8)} + \\log_{3}{(x - 6)} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > 8$.",
                  "reason": "Domain of a logarithm: $x - 8 > 0$ and $x - 6 > 0$ must both hold."
                },
                {
                  "step": "$\\log_{3}{\\left((x - 8)(x - 6)\\right)} = 1$",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
                },
                {
                  "step": "$(x - 8)(x - 6) = 3$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, and $3^{1} = 3$."
                },
                {
                  "step": "$x^2 - 14x + 48 = 3$",
                  "reason": "Multiplying out: each term of one bracket multiplies each term of the other."
                },
                {
                  "step": "$x^2 - 14x + 45 = 0$",
                  "reason": "Adding the same number to both sides: $-3$ is added to both sides."
                },
                {
                  "step": "$(x - 9)(x - 5) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 9$ or $x = 5$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Only $x = 9$ is greater than $8$, so it is the one solution.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{6}{(x - 3)} + \\log_{6}{(x + 2)} = 1$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 4",
              "lines": [
                {
                  "step": "Solve $\\log_{6}{(x - 3)} + \\log_{6}{(x + 2)} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > 3$.",
                  "reason": "Domain of a logarithm: $x - 3 > 0$ and $x + 2 > 0$ must both hold."
                },
                {
                  "step": "$\\log_{6}{\\left((x - 3)(x + 2)\\right)} = 1$",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
                },
                {
                  "step": "$(x - 3)(x + 2) = 6$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, and $6^{1} = 6$."
                },
                {
                  "step": "$x^2 - x - 6 = 6$",
                  "reason": "Multiplying out: each term of one bracket multiplies each term of the other."
                },
                {
                  "step": "$x^2 - x - 12 = 0$",
                  "reason": "Adding the same number to both sides: $-6$ is added to both sides."
                },
                {
                  "step": "$(x - 4)(x + 3) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 4$ or $x = -3$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Only $x = 4$ is greater than $3$, so it is the one solution.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2\\log_{6}{(x - 3)} - \\log_{6}{(3x - 9)} = 1$.",
            "lines": [
              {
                "step": "Solve $2\\log_{6}{(x - 3)} - \\log_{6}{(3x - 9)} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Both logarithms are defined exactly when $x > 3$.",
                "reason": "Domain of a logarithm: $x - 3 > 0$ and $3x - 9 > 0$ must both hold."
              },
              {
                "step": "$\\log_{6}{(x - 3)^2} - \\log_{6}{(3x - 9)} = 1$",
                "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number in front up as an exponent."
              },
              {
                "step": "$\\log_{6}{\\dfrac{(x - 3)^2}{3x - 9}} = 1$",
                "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient."
              },
              {
                "step": "$\\dfrac{(x - 3)^2}{3x - 9} = 6$",
                "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, and $6^{1} = 6$."
              },
              {
                "step": "$(x - 3)^2 = 6(3x - 9)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $3x - 9$, which is positive where the logarithms are defined."
              },
              {
                "step": "$x^2 - 6x + 9 = 18x - 54$",
                "reason": "Square of a binomial and Multiplying out: $(a + b)^2 = a^2 + 2ab + b^2$, and $6$ multiplies each term in its bracket."
              },
              {
                "step": "$x^2 - 24x + 63 = 0$",
                "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
              },
              {
                "step": "$(x - 3)(x - 21) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = 3$ or $x = 21$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Only $x = 21$ is greater than $3$, so it is the one solution.",
                "reason": "Domain of a logarithm: a solution must make every logarithm defined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2\\log_{5}{(x + 6)} - \\log_{5}{(7x - 18)} = 1$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 9, x = 14",
              "lines": [
                {
                  "step": "Solve $2\\log_{5}{(x + 6)} - \\log_{5}{(7x - 18)} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > \\dfrac{18}{7}$.",
                  "reason": "Domain of a logarithm: $x + 6 > 0$ and $7x - 18 > 0$ must both hold."
                },
                {
                  "step": "$\\log_{5}{(x + 6)^2} - \\log_{5}{(7x - 18)} = 1$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number in front up as an exponent."
                },
                {
                  "step": "$\\log_{5}{\\dfrac{(x + 6)^2}{7x - 18}} = 1$",
                  "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient."
                },
                {
                  "step": "$\\dfrac{(x + 6)^2}{7x - 18} = 5$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, and $5^{1} = 5$."
                },
                {
                  "step": "$(x + 6)^2 = 5(7x - 18)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $7x - 18$, which is positive where the logarithms are defined."
                },
                {
                  "step": "$x^2 + 12x + 36 = 35x - 90$",
                  "reason": "Square of a binomial and Multiplying out: $(a + b)^2 = a^2 + 2ab + b^2$, and $5$ multiplies each term in its bracket."
                },
                {
                  "step": "$x^2 - 23x + 126 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$(x - 9)(x - 14) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 9$ or $x = 14$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Both $x = 9$ and $x = 14$ are greater than $\\dfrac{18}{7}$, so both are solutions.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            },
            {
              "prompt": "Solve $2\\log_{5}{(x - 5)} - \\log_{5}{(2x + 30)} = 1$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 25",
              "lines": [
                {
                  "step": "Solve $2\\log_{5}{(x - 5)} - \\log_{5}{(2x + 30)} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > 5$.",
                  "reason": "Domain of a logarithm: $x - 5 > 0$ and $2x + 30 > 0$ must both hold."
                },
                {
                  "step": "$\\log_{5}{(x - 5)^2} - \\log_{5}{(2x + 30)} = 1$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number in front up as an exponent."
                },
                {
                  "step": "$\\log_{5}{\\dfrac{(x - 5)^2}{2x + 30}} = 1$",
                  "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient."
                },
                {
                  "step": "$\\dfrac{(x - 5)^2}{2x + 30} = 5$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, and $5^{1} = 5$."
                },
                {
                  "step": "$(x - 5)^2 = 5(2x + 30)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2x + 30$, which is positive where the logarithms are defined."
                },
                {
                  "step": "$x^2 - 10x + 25 = 10x + 150$",
                  "reason": "Square of a binomial and Multiplying out: $(a + b)^2 = a^2 + 2ab + b^2$, and $5$ multiplies each term in its bracket."
                },
                {
                  "step": "$x^2 - 20x - 125 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$(x + 5)(x - 25) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = -5$ or $x = 25$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Only $x = 25$ is greater than $5$, so it is the one solution.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            },
            {
              "prompt": "Solve $2\\log_{2}{(x + 2)} - \\log_{2}{(7x - 10)} = 1$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 4, x = 6",
              "lines": [
                {
                  "step": "Solve $2\\log_{2}{(x + 2)} - \\log_{2}{(7x - 10)} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > \\dfrac{10}{7}$.",
                  "reason": "Domain of a logarithm: $x + 2 > 0$ and $7x - 10 > 0$ must both hold."
                },
                {
                  "step": "$\\log_{2}{(x + 2)^2} - \\log_{2}{(7x - 10)} = 1$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number in front up as an exponent."
                },
                {
                  "step": "$\\log_{2}{\\dfrac{(x + 2)^2}{7x - 10}} = 1$",
                  "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient."
                },
                {
                  "step": "$\\dfrac{(x + 2)^2}{7x - 10} = 2$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, and $2^{1} = 2$."
                },
                {
                  "step": "$(x + 2)^2 = 2(7x - 10)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $7x - 10$, which is positive where the logarithms are defined."
                },
                {
                  "step": "$x^2 + 4x + 4 = 14x - 20$",
                  "reason": "Square of a binomial and Multiplying out: $(a + b)^2 = a^2 + 2ab + b^2$, and $2$ multiplies each term in its bracket."
                },
                {
                  "step": "$x^2 - 10x + 24 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$(x - 4)(x - 6) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 4$ or $x = 6$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Both $x = 4$ and $x = 6$ are greater than $\\dfrac{10}{7}$, so both are solutions.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\left(\\log_{2}{x}\\right)^2 - 9\\log_{2}{x} + 20 = 0$.",
            "lines": [
              {
                "step": "Solve $\\left(\\log_{2}{x}\\right)^2 - 9\\log_{2}{x} + 20 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = \\log_{2}{x}$: $y^2 - 9y + 20 = 0$",
                "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{2}{x}$ each time it appears."
              },
              {
                "step": "$(y - 5)(y - 4) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $y = 5$ or $y = 4$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Either $\\log_{2}{x} = 5$ or $\\log_{2}{x} = 4$",
                "reason": "Substituting a letter and undoing it: $\\log_{2}{x}$ is put back in place of $y$."
              },
              {
                "step": "Either $x = 2^{5}$ or $x = 2^{4}$",
                "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
              },
              {
                "step": "Either $x = 32$ or $x = 16$",
                "reason": "The definition of a power, from arithmetic: $2^{5} = 32$ and $2^{4} = 16$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\left(\\log_{4}{x}\\right)^2 - 4\\log_{4}{x} + 3 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 64, x = 4",
              "lines": [
                {
                  "step": "Solve $\\left(\\log_{4}{x}\\right)^2 - 4\\log_{4}{x} + 3 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\log_{4}{x}$: $y^2 - 4y + 3 = 0$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{4}{x}$ each time it appears."
                },
                {
                  "step": "$(y - 3)(y - 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 3$ or $y = 1$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{4}{x} = 3$ or $\\log_{4}{x} = 1$",
                  "reason": "Substituting a letter and undoing it: $\\log_{4}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 4^{3}$ or $x = 4^{1}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 64$ or $x = 4$",
                  "reason": "The definition of a power, from arithmetic: $4^{3} = 64$ and $4^{1} = 4$."
                }
              ]
            },
            {
              "prompt": "Solve $\\left(\\log_{10}{x}\\right)^2 - 5\\log_{10}{x} + 4 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 10000, x = 10",
              "lines": [
                {
                  "step": "Solve $\\left(\\log_{10}{x}\\right)^2 - 5\\log_{10}{x} + 4 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\log_{10}{x}$: $y^2 - 5y + 4 = 0$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{10}{x}$ each time it appears."
                },
                {
                  "step": "$(y - 4)(y - 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 4$ or $y = 1$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{10}{x} = 4$ or $\\log_{10}{x} = 1$",
                  "reason": "Substituting a letter and undoing it: $\\log_{10}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 10^{4}$ or $x = 10^{1}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 10\\,000$ or $x = 10$",
                  "reason": "The definition of a power, from arithmetic: $10^{4} = 10\\,000$ and $10^{1} = 10$."
                }
              ]
            },
            {
              "prompt": "Solve $\\left(\\log_{3}{x}\\right)^2 - 7\\log_{3}{x} + 12 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 81, x = 27",
              "lines": [
                {
                  "step": "Solve $\\left(\\log_{3}{x}\\right)^2 - 7\\log_{3}{x} + 12 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\log_{3}{x}$: $y^2 - 7y + 12 = 0$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{3}{x}$ each time it appears."
                },
                {
                  "step": "$(y - 4)(y - 3) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 4$ or $y = 3$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{3}{x} = 4$ or $\\log_{3}{x} = 3$",
                  "reason": "Substituting a letter and undoing it: $\\log_{3}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 3^{4}$ or $x = 3^{3}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 81$ or $x = 27$",
                  "reason": "The definition of a power, from arithmetic: $3^{4} = 81$ and $3^{3} = 27$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x^{\\log_{3}{x}} = 6561x^{2}$.",
            "lines": [
              {
                "step": "Solve $x^{\\log_{3}{x}} = 6561x^{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{3}{x^{\\log_{3}{x}}} = \\log_{3}{\\left(6561x^{2}\\right)}$",
                "reason": "Logarithm: the equation needs $x > 0$, both sides are then positive, and equal positive numbers have equal logarithms to the base $3$."
              },
              {
                "step": "$\\left(\\log_{3}{x}\\right)^2 = \\log_{3}{\\left(6561x^{2}\\right)}$",
                "reason": "Log of a power: the exponent $\\log_{3}{x}$ comes down in front of $\\log_{3}{x}$."
              },
              {
                "step": "$\\left(\\log_{3}{x}\\right)^2 = \\log_{3}{6561} + \\log_{3}{x^{2}}$",
                "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
              },
              {
                "step": "$\\left(\\log_{3}{x}\\right)^2 = 8 + 2\\log_{3}{x}$",
                "reason": "Log of a power and Logarithm: the exponent $2$ comes down in front, and $3^{8} = 6561$ means $\\log_{3}{6561} = 8$."
              },
              {
                "step": "With $y = \\log_{3}{x}$: $y^2 = 8 + 2y$",
                "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{3}{x}$ each time it appears."
              },
              {
                "step": "$y^2 - 2y - 8 = 0$",
                "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
              },
              {
                "step": "$(y - 4)(y + 2) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $y = 4$ or $y = -2$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Either $\\log_{3}{x} = 4$ or $\\log_{3}{x} = -2$",
                "reason": "Substituting a letter and undoing it: $\\log_{3}{x}$ is put back in place of $y$."
              },
              {
                "step": "Either $x = 3^{4}$ or $x = 3^{-2}$",
                "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
              },
              {
                "step": "Either $x = 81$ or $x = \\dfrac{1}{9}$",
                "reason": "The definition of a power, from arithmetic: $3^{4} = 81$ and $3^{2} = 9$, and with Negative exponent $3^{-2} = \\dfrac{1}{9}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^{\\log_{10}{x}} = 1000x^{2}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1000, x = 1/10",
              "lines": [
                {
                  "step": "Solve $x^{\\log_{10}{x}} = 1000x^{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{x^{\\log_{10}{x}}} = \\log_{10}{\\left(1000x^{2}\\right)}$",
                  "reason": "Logarithm: the equation needs $x > 0$, both sides are then positive, and equal positive numbers have equal logarithms to the base $10$."
                },
                {
                  "step": "$\\left(\\log_{10}{x}\\right)^2 = \\log_{10}{\\left(1000x^{2}\\right)}$",
                  "reason": "Log of a power: the exponent $\\log_{10}{x}$ comes down in front of $\\log_{10}{x}$."
                },
                {
                  "step": "$\\left(\\log_{10}{x}\\right)^2 = \\log_{10}{1000} + \\log_{10}{x^{2}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\left(\\log_{10}{x}\\right)^2 = 3 + 2\\log_{10}{x}$",
                  "reason": "Log of a power and Logarithm: the exponent $2$ comes down in front, and $10^{3} = 1000$ means $\\log_{10}{1000} = 3$."
                },
                {
                  "step": "With $y = \\log_{10}{x}$: $y^2 = 3 + 2y$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{10}{x}$ each time it appears."
                },
                {
                  "step": "$y^2 - 2y - 3 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$(y - 3)(y + 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 3$ or $y = -1$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{10}{x} = 3$ or $\\log_{10}{x} = -1$",
                  "reason": "Substituting a letter and undoing it: $\\log_{10}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 10^{3}$ or $x = 10^{-1}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 1000$ or $x = \\dfrac{1}{10}$",
                  "reason": "The definition of a power, from arithmetic: $10^{3} = 1000$ and $10^{1} = 10$, and with Negative exponent $10^{-1} = \\dfrac{1}{10}$."
                }
              ]
            },
            {
              "prompt": "Solve $x^{\\log_{3}{x}} = 729x^{5}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 729, x = 1/3",
              "lines": [
                {
                  "step": "Solve $x^{\\log_{3}{x}} = 729x^{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{3}{x^{\\log_{3}{x}}} = \\log_{3}{\\left(729x^{5}\\right)}$",
                  "reason": "Logarithm: the equation needs $x > 0$, both sides are then positive, and equal positive numbers have equal logarithms to the base $3$."
                },
                {
                  "step": "$\\left(\\log_{3}{x}\\right)^2 = \\log_{3}{\\left(729x^{5}\\right)}$",
                  "reason": "Log of a power: the exponent $\\log_{3}{x}$ comes down in front of $\\log_{3}{x}$."
                },
                {
                  "step": "$\\left(\\log_{3}{x}\\right)^2 = \\log_{3}{729} + \\log_{3}{x^{5}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\left(\\log_{3}{x}\\right)^2 = 6 + 5\\log_{3}{x}$",
                  "reason": "Log of a power and Logarithm: the exponent $5$ comes down in front, and $3^{6} = 729$ means $\\log_{3}{729} = 6$."
                },
                {
                  "step": "With $y = \\log_{3}{x}$: $y^2 = 6 + 5y$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{3}{x}$ each time it appears."
                },
                {
                  "step": "$y^2 - 5y - 6 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$(y - 6)(y + 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 6$ or $y = -1$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{3}{x} = 6$ or $\\log_{3}{x} = -1$",
                  "reason": "Substituting a letter and undoing it: $\\log_{3}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 3^{6}$ or $x = 3^{-1}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 729$ or $x = \\dfrac{1}{3}$",
                  "reason": "The definition of a power, from arithmetic: $3^{6} = 729$ and $3^{1} = 3$, and with Negative exponent $3^{-1} = \\dfrac{1}{3}$."
                }
              ]
            },
            {
              "prompt": "Solve $x^{\\log_{2}{x}} = 1024x^{3}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 32, x = 1/4",
              "lines": [
                {
                  "step": "Solve $x^{\\log_{2}{x}} = 1024x^{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{x^{\\log_{2}{x}}} = \\log_{2}{\\left(1024x^{3}\\right)}$",
                  "reason": "Logarithm: the equation needs $x > 0$, both sides are then positive, and equal positive numbers have equal logarithms to the base $2$."
                },
                {
                  "step": "$\\left(\\log_{2}{x}\\right)^2 = \\log_{2}{\\left(1024x^{3}\\right)}$",
                  "reason": "Log of a power: the exponent $\\log_{2}{x}$ comes down in front of $\\log_{2}{x}$."
                },
                {
                  "step": "$\\left(\\log_{2}{x}\\right)^2 = \\log_{2}{1024} + \\log_{2}{x^{3}}$",
                  "reason": "Log of a product: the logarithm of a product is the sum of the logarithms of its factors."
                },
                {
                  "step": "$\\left(\\log_{2}{x}\\right)^2 = 10 + 3\\log_{2}{x}$",
                  "reason": "Log of a power and Logarithm: the exponent $3$ comes down in front, and $2^{10} = 1024$ means $\\log_{2}{1024} = 10$."
                },
                {
                  "step": "With $y = \\log_{2}{x}$: $y^2 = 10 + 3y$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{2}{x}$ each time it appears."
                },
                {
                  "step": "$y^2 - 3y - 10 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$(y - 5)(y + 2) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 5$ or $y = -2$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{2}{x} = 5$ or $\\log_{2}{x} = -2$",
                  "reason": "Substituting a letter and undoing it: $\\log_{2}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 2^{5}$ or $x = 2^{-2}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 32$ or $x = \\dfrac{1}{4}$",
                  "reason": "The definition of a power, from arithmetic: $2^{5} = 32$ and $2^{2} = 4$, and with Negative exponent $2^{-2} = \\dfrac{1}{4}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the product of the solutions of $3\\left(\\log_{3}{x}\\right)^2 + 6\\log_{3}{x} - 2 = 0$.",
            "lines": [
              {
                "step": "Find the product of the solutions of $3\\left(\\log_{3}{x}\\right)^2 + 6\\log_{3}{x} - 2 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = \\log_{3}{x}$: $3y^2 + 6y - 2 = 0$",
                "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{3}{x}$ each time it appears."
              },
              {
                "step": "The discriminant is $6^2 - 4 \\cdot 3 \\cdot (-2) = 60$, so the equation in $y$ has two different real roots, $r$ and $s$.",
                "reason": "Positive, zero, negative discriminant: a positive discriminant gives two different real roots."
              },
              {
                "step": "$r + s = -2$",
                "reason": "Sum of roots $-b/a$: here it is $-\\dfrac{6}{3}$."
              },
              {
                "step": "The solutions are $x = 3^{r}$ and $x = 3^{s}$.",
                "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, here with $y$ back as $\\log_{3}{x}$."
              },
              {
                "step": "Their product is $3^{r} \\cdot 3^{s} = 3^{r + s}$.",
                "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents."
              },
              {
                "step": "The product is $3^{-2}$.",
                "reason": "Substituting a value: $r + s = -2$."
              },
              {
                "step": "The product is $\\dfrac{1}{9}$.",
                "reason": "The definition of a power, from arithmetic: $3^{2} = 9$, and with Negative exponent $3^{-2} = \\dfrac{1}{9}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the product of the solutions of $4\\left(\\log_{5}{x}\\right)^2 - 12\\log_{5}{x} - 5 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "125",
              "lines": [
                {
                  "step": "Find the product of the solutions of $4\\left(\\log_{5}{x}\\right)^2 - 12\\log_{5}{x} - 5 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\log_{5}{x}$: $4y^2 - 12y - 5 = 0$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{5}{x}$ each time it appears."
                },
                {
                  "step": "The discriminant is $(-12)^2 - 4 \\cdot 4 \\cdot (-5) = 224$, so the equation in $y$ has two different real roots, $r$ and $s$.",
                  "reason": "Positive, zero, negative discriminant: a positive discriminant gives two different real roots."
                },
                {
                  "step": "$r + s = 3$",
                  "reason": "Sum of roots $-b/a$: here it is $-\\dfrac{-12}{4}$."
                },
                {
                  "step": "The solutions are $x = 5^{r}$ and $x = 5^{s}$.",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, here with $y$ back as $\\log_{5}{x}$."
                },
                {
                  "step": "Their product is $5^{r} \\cdot 5^{s} = 5^{r + s}$.",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents."
                },
                {
                  "step": "The product is $5^{3}$.",
                  "reason": "Substituting a value: $r + s = 3$."
                },
                {
                  "step": "The product is $125$.",
                  "reason": "The definition of a power, from arithmetic: $5^{3} = 125$."
                }
              ]
            },
            {
              "prompt": "Find the product of the solutions of $4\\left(\\log_{2}{x}\\right)^2 - 16\\log_{2}{x} - 7 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find the product of the solutions of $4\\left(\\log_{2}{x}\\right)^2 - 16\\log_{2}{x} - 7 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\log_{2}{x}$: $4y^2 - 16y - 7 = 0$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{2}{x}$ each time it appears."
                },
                {
                  "step": "The discriminant is $(-16)^2 - 4 \\cdot 4 \\cdot (-7) = 368$, so the equation in $y$ has two different real roots, $r$ and $s$.",
                  "reason": "Positive, zero, negative discriminant: a positive discriminant gives two different real roots."
                },
                {
                  "step": "$r + s = 4$",
                  "reason": "Sum of roots $-b/a$: here it is $-\\dfrac{-16}{4}$."
                },
                {
                  "step": "The solutions are $x = 2^{r}$ and $x = 2^{s}$.",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, here with $y$ back as $\\log_{2}{x}$."
                },
                {
                  "step": "Their product is $2^{r} \\cdot 2^{s} = 2^{r + s}$.",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents."
                },
                {
                  "step": "The product is $2^{4}$.",
                  "reason": "Substituting a value: $r + s = 4$."
                },
                {
                  "step": "The product is $16$.",
                  "reason": "The definition of a power, from arithmetic: $2^{4} = 16$."
                }
              ]
            },
            {
              "prompt": "Find the product of the solutions of $2\\left(\\log_{3}{x}\\right)^2 - 8\\log_{3}{x} + 3 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "81",
              "lines": [
                {
                  "step": "Find the product of the solutions of $2\\left(\\log_{3}{x}\\right)^2 - 8\\log_{3}{x} + 3 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\log_{3}{x}$: $2y^2 - 8y + 3 = 0$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{3}{x}$ each time it appears."
                },
                {
                  "step": "The discriminant is $(-8)^2 - 4 \\cdot 2 \\cdot 3 = 40$, so the equation in $y$ has two different real roots, $r$ and $s$.",
                  "reason": "Positive, zero, negative discriminant: a positive discriminant gives two different real roots."
                },
                {
                  "step": "$r + s = 4$",
                  "reason": "Sum of roots $-b/a$: here it is $-\\dfrac{-8}{2}$."
                },
                {
                  "step": "The solutions are $x = 3^{r}$ and $x = 3^{s}$.",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$, here with $y$ back as $\\log_{3}{x}$."
                },
                {
                  "step": "Their product is $3^{r} \\cdot 3^{s} = 3^{r + s}$.",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents."
                },
                {
                  "step": "The product is $3^{4}$.",
                  "reason": "Substituting a value: $r + s = 4$."
                },
                {
                  "step": "The product is $81$.",
                  "reason": "The definition of a power, from arithmetic: $3^{4} = 81$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $x$, given that $\\log_{3}{\\left(xy\\right)} = 2$ and $\\log_{3}{\\dfrac{x^{3}}{y^{2}}} = -9$ for positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find $x$, given that $\\log_{3}{\\left(xy\\right)} = 2$ and $\\log_{3}{\\dfrac{x^{3}}{y^{2}}} = -9$ for positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Then $\\log_{3}{x} + \\log_{3}{y} = 2$ and $\\log_{3}{x^{3}} - \\log_{3}{y^{2}} = -9$",
                "reason": "Log of a product and Log of a quotient: the logarithm of a product is a sum of logarithms, and the logarithm of a quotient is a difference."
              },
              {
                "step": "So $\\log_{3}{x} + \\log_{3}{y} = 2$ and $3\\log_{3}{x} - 2\\log_{3}{y} = -9$",
                "reason": "Log of a power: each exponent comes down in front of its logarithm."
              },
              {
                "step": "With $u = \\log_{3}{x}$ and $v = \\log_{3}{y}$: $u + v = 2$ and $3u - 2v = -9$",
                "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two logarithms."
              },
              {
                "step": "$5u = -5$",
                "reason": "Elimination: $2$ times the first equation added to the second equation has no term in $v$."
              },
              {
                "step": "$u = -1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$\\log_{3}{x} = -1$",
                "reason": "Substituting a letter and undoing it: $\\log_{3}{x}$ is put back in place of $u$."
              },
              {
                "step": "$x = 3^{-1}$",
                "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
              },
              {
                "step": "$x = \\dfrac{1}{3}$",
                "reason": "The definition of a power, from arithmetic: $3^{1} = 3$, and with Negative exponent $3^{-1} = \\dfrac{1}{3}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$, given that $\\log_{5}{\\left(x^{4}y\\right)} = 19$ and $\\log_{5}{\\dfrac{x^{2}}{y}} = 5$ for positive numbers $x$ and $y$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 625",
              "lines": [
                {
                  "step": "Find $x$, given that $\\log_{5}{\\left(x^{4}y\\right)} = 19$ and $\\log_{5}{\\dfrac{x^{2}}{y}} = 5$ for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Then $\\log_{5}{x^{4}} + \\log_{5}{y} = 19$ and $\\log_{5}{x^{2}} - \\log_{5}{y} = 5$",
                  "reason": "Log of a product and Log of a quotient: the logarithm of a product is a sum of logarithms, and the logarithm of a quotient is a difference."
                },
                {
                  "step": "So $4\\log_{5}{x} + \\log_{5}{y} = 19$ and $2\\log_{5}{x} - \\log_{5}{y} = 5$",
                  "reason": "Log of a power: each exponent comes down in front of its logarithm."
                },
                {
                  "step": "With $u = \\log_{5}{x}$ and $v = \\log_{5}{y}$: $4u + v = 19$ and $2u - v = 5$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two logarithms."
                },
                {
                  "step": "$6u = 24$",
                  "reason": "Elimination: the first equation added to the second equation has no term in $v$."
                },
                {
                  "step": "$u = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$\\log_{5}{x} = 4$",
                  "reason": "Substituting a letter and undoing it: $\\log_{5}{x}$ is put back in place of $u$."
                },
                {
                  "step": "$x = 5^{4}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "$x = 625$",
                  "reason": "The definition of a power, from arithmetic: $5^{4} = 625$."
                }
              ]
            },
            {
              "prompt": "Find $x$, given that $\\log_{10}{\\left(x^{4}y\\right)} = -3$ and $\\log_{10}{\\dfrac{x^{2}}{y^{2}}} = -4$ for positive numbers $x$ and $y$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 1/10",
              "lines": [
                {
                  "step": "Find $x$, given that $\\log_{10}{\\left(x^{4}y\\right)} = -3$ and $\\log_{10}{\\dfrac{x^{2}}{y^{2}}} = -4$ for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Then $\\log_{10}{x^{4}} + \\log_{10}{y} = -3$ and $\\log_{10}{x^{2}} - \\log_{10}{y^{2}} = -4$",
                  "reason": "Log of a product and Log of a quotient: the logarithm of a product is a sum of logarithms, and the logarithm of a quotient is a difference."
                },
                {
                  "step": "So $4\\log_{10}{x} + \\log_{10}{y} = -3$ and $2\\log_{10}{x} - 2\\log_{10}{y} = -4$",
                  "reason": "Log of a power: each exponent comes down in front of its logarithm."
                },
                {
                  "step": "With $u = \\log_{10}{x}$ and $v = \\log_{10}{y}$: $4u + v = -3$ and $2u - 2v = -4$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two logarithms."
                },
                {
                  "step": "$10u = -10$",
                  "reason": "Elimination: $2$ times the first equation added to the second equation has no term in $v$."
                },
                {
                  "step": "$u = -1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
                },
                {
                  "step": "$\\log_{10}{x} = -1$",
                  "reason": "Substituting a letter and undoing it: $\\log_{10}{x}$ is put back in place of $u$."
                },
                {
                  "step": "$x = 10^{-1}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "$x = \\dfrac{1}{10}$",
                  "reason": "The definition of a power, from arithmetic: $10^{1} = 10$, and with Negative exponent $10^{-1} = \\dfrac{1}{10}$."
                }
              ]
            },
            {
              "prompt": "Find $x$, given that $\\log_{3}{\\left(x^{3}y^{3}\\right)} = 12$ and $\\log_{3}{\\dfrac{x^{5}}{y}} = 26$ for positive numbers $x$ and $y$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 243",
              "lines": [
                {
                  "step": "Find $x$, given that $\\log_{3}{\\left(x^{3}y^{3}\\right)} = 12$ and $\\log_{3}{\\dfrac{x^{5}}{y}} = 26$ for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Then $\\log_{3}{x^{3}} + \\log_{3}{y^{3}} = 12$ and $\\log_{3}{x^{5}} - \\log_{3}{y} = 26$",
                  "reason": "Log of a product and Log of a quotient: the logarithm of a product is a sum of logarithms, and the logarithm of a quotient is a difference."
                },
                {
                  "step": "So $3\\log_{3}{x} + 3\\log_{3}{y} = 12$ and $5\\log_{3}{x} - \\log_{3}{y} = 26$",
                  "reason": "Log of a power: each exponent comes down in front of its logarithm."
                },
                {
                  "step": "With $u = \\log_{3}{x}$ and $v = \\log_{3}{y}$: $3u + 3v = 12$ and $5u - v = 26$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two logarithms."
                },
                {
                  "step": "$18u = 90$",
                  "reason": "Elimination: the first equation added to $3$ times the second equation has no term in $v$."
                },
                {
                  "step": "$u = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $18$."
                },
                {
                  "step": "$\\log_{3}{x} = 5$",
                  "reason": "Substituting a letter and undoing it: $\\log_{3}{x}$ is put back in place of $u$."
                },
                {
                  "step": "$x = 3^{5}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "$x = 243$",
                  "reason": "The definition of a power, from arithmetic: $3^{5} = 243$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\log_{2}{x} + 6\\log_{x}{2} = 7$.",
            "lines": [
              {
                "step": "Solve $\\log_{2}{x} + 6\\log_{x}{2} = 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The logarithm $\\log_{2}{x}$ is defined exactly when $x > 0$.",
                "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
              },
              {
                "step": "The logarithm $\\log_{x}{2}$ has the base $x$, so the equation also needs $x \\ne 1$.",
                "reason": "Logarithm: the base of a logarithm is a positive number other than 1."
              },
              {
                "step": "$\\log_{x}{2} = \\dfrac{\\log_{2}{2}}{\\log_{2}{x}}$",
                "reason": "Change of base: a logarithm to the base $x$ is a quotient of two logarithms in the base $2$."
              },
              {
                "step": "$\\log_{x}{2} = \\dfrac{1}{\\log_{2}{x}}$",
                "reason": "Logarithm: $2^{1} = 2$ means $\\log_{2}{2} = 1$."
              },
              {
                "step": "$\\log_{2}{x} + \\dfrac{6}{\\log_{2}{x}} = 7$",
                "reason": "Substituting a value: $\\dfrac{1}{\\log_{2}{x}}$ is put in place of $\\log_{x}{2}$."
              },
              {
                "step": "With $y = \\log_{2}{x}$: $y + \\dfrac{6}{y} = 7$",
                "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{2}{x}$ each time it appears."
              },
              {
                "step": "$y^2 + 6 = 7y$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $y$, which is not 0, since $x$ is not 1."
              },
              {
                "step": "$y^2 - 7y + 6 = 0$",
                "reason": "Adding the same number to both sides: $-7y$ is added to both sides."
              },
              {
                "step": "$(y - 6)(y - 1) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $y = 6$ or $y = 1$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Either $\\log_{2}{x} = 6$ or $\\log_{2}{x} = 1$",
                "reason": "Substituting a letter and undoing it: $\\log_{2}{x}$ is put back in place of $y$."
              },
              {
                "step": "Either $x = 2^{6}$ or $x = 2^{1}$",
                "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
              },
              {
                "step": "Either $x = 64$ or $x = 2$",
                "reason": "The definition of a power, from arithmetic: $2^{6} = 64$ and $2^{1} = 2$."
              },
              {
                "step": "Both $x = 64$ and $x = 2$ are positive and other than 1, so both are solutions.",
                "reason": "Domain of a logarithm: a solution must make every logarithm defined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\log_{3}{x} - 2\\log_{x}{3} = 1$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 9, x = 1/3",
              "lines": [
                {
                  "step": "Solve $\\log_{3}{x} - 2\\log_{x}{3} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm $\\log_{3}{x}$ is defined exactly when $x > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The logarithm $\\log_{x}{3}$ has the base $x$, so the equation also needs $x \\ne 1$.",
                  "reason": "Logarithm: the base of a logarithm is a positive number other than 1."
                },
                {
                  "step": "$\\log_{x}{3} = \\dfrac{\\log_{3}{3}}{\\log_{3}{x}}$",
                  "reason": "Change of base: a logarithm to the base $x$ is a quotient of two logarithms in the base $3$."
                },
                {
                  "step": "$\\log_{x}{3} = \\dfrac{1}{\\log_{3}{x}}$",
                  "reason": "Logarithm: $3^{1} = 3$ means $\\log_{3}{3} = 1$."
                },
                {
                  "step": "$\\log_{3}{x} - \\dfrac{2}{\\log_{3}{x}} = 1$",
                  "reason": "Substituting a value: $\\dfrac{1}{\\log_{3}{x}}$ is put in place of $\\log_{x}{3}$."
                },
                {
                  "step": "With $y = \\log_{3}{x}$: $y - \\dfrac{2}{y} = 1$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{3}{x}$ each time it appears."
                },
                {
                  "step": "$y^2 - 2 = y$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $y$, which is not 0, since $x$ is not 1."
                },
                {
                  "step": "$y^2 - y - 2 = 0$",
                  "reason": "Adding the same number to both sides: $-y$ is added to both sides."
                },
                {
                  "step": "$(y - 2)(y + 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 2$ or $y = -1$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{3}{x} = 2$ or $\\log_{3}{x} = -1$",
                  "reason": "Substituting a letter and undoing it: $\\log_{3}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 3^{2}$ or $x = 3^{-1}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 9$ or $x = \\dfrac{1}{3}$",
                  "reason": "The definition of a power, from arithmetic: $3^{2} = 9$ and $3^{1} = 3$, and with Negative exponent $3^{-1} = \\dfrac{1}{3}$."
                },
                {
                  "step": "Both $x = 9$ and $x = \\dfrac{1}{3}$ are positive and other than 1, so both are solutions.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{5}{x} - 3\\log_{x}{5} = -2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 5, x = 1/125",
              "lines": [
                {
                  "step": "Solve $\\log_{5}{x} - 3\\log_{x}{5} = -2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm $\\log_{5}{x}$ is defined exactly when $x > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The logarithm $\\log_{x}{5}$ has the base $x$, so the equation also needs $x \\ne 1$.",
                  "reason": "Logarithm: the base of a logarithm is a positive number other than 1."
                },
                {
                  "step": "$\\log_{x}{5} = \\dfrac{\\log_{5}{5}}{\\log_{5}{x}}$",
                  "reason": "Change of base: a logarithm to the base $x$ is a quotient of two logarithms in the base $5$."
                },
                {
                  "step": "$\\log_{x}{5} = \\dfrac{1}{\\log_{5}{x}}$",
                  "reason": "Logarithm: $5^{1} = 5$ means $\\log_{5}{5} = 1$."
                },
                {
                  "step": "$\\log_{5}{x} - \\dfrac{3}{\\log_{5}{x}} = -2$",
                  "reason": "Substituting a value: $\\dfrac{1}{\\log_{5}{x}}$ is put in place of $\\log_{x}{5}$."
                },
                {
                  "step": "With $y = \\log_{5}{x}$: $y - \\dfrac{3}{y} = -2$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{5}{x}$ each time it appears."
                },
                {
                  "step": "$y^2 - 3 = -2y$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $y$, which is not 0, since $x$ is not 1."
                },
                {
                  "step": "$y^2 + 2y - 3 = 0$",
                  "reason": "Adding the same number to both sides: $2y$ is added to both sides."
                },
                {
                  "step": "$(y - 1)(y + 3) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 1$ or $y = -3$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{5}{x} = 1$ or $\\log_{5}{x} = -3$",
                  "reason": "Substituting a letter and undoing it: $\\log_{5}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 5^{1}$ or $x = 5^{-3}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 5$ or $x = \\dfrac{1}{125}$",
                  "reason": "The definition of a power, from arithmetic: $5^{1} = 5$ and $5^{3} = 125$, and with Negative exponent $5^{-3} = \\dfrac{1}{125}$."
                },
                {
                  "step": "Both $x = 5$ and $x = \\dfrac{1}{125}$ are positive and other than 1, so both are solutions.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{2}{x} + 12\\log_{x}{2} = 8$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 64, x = 4",
              "lines": [
                {
                  "step": "Solve $\\log_{2}{x} + 12\\log_{x}{2} = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm $\\log_{2}{x}$ is defined exactly when $x > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The logarithm $\\log_{x}{2}$ has the base $x$, so the equation also needs $x \\ne 1$.",
                  "reason": "Logarithm: the base of a logarithm is a positive number other than 1."
                },
                {
                  "step": "$\\log_{x}{2} = \\dfrac{\\log_{2}{2}}{\\log_{2}{x}}$",
                  "reason": "Change of base: a logarithm to the base $x$ is a quotient of two logarithms in the base $2$."
                },
                {
                  "step": "$\\log_{x}{2} = \\dfrac{1}{\\log_{2}{x}}$",
                  "reason": "Logarithm: $2^{1} = 2$ means $\\log_{2}{2} = 1$."
                },
                {
                  "step": "$\\log_{2}{x} + \\dfrac{12}{\\log_{2}{x}} = 8$",
                  "reason": "Substituting a value: $\\dfrac{1}{\\log_{2}{x}}$ is put in place of $\\log_{x}{2}$."
                },
                {
                  "step": "With $y = \\log_{2}{x}$: $y + \\dfrac{12}{y} = 8$",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\log_{2}{x}$ each time it appears."
                },
                {
                  "step": "$y^2 + 12 = 8y$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $y$, which is not 0, since $x$ is not 1."
                },
                {
                  "step": "$y^2 - 8y + 12 = 0$",
                  "reason": "Adding the same number to both sides: $-8y$ is added to both sides."
                },
                {
                  "step": "$(y - 6)(y - 2) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 6$ or $y = 2$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $\\log_{2}{x} = 6$ or $\\log_{2}{x} = 2$",
                  "reason": "Substituting a letter and undoing it: $\\log_{2}{x}$ is put back in place of $y$."
                },
                {
                  "step": "Either $x = 2^{6}$ or $x = 2^{2}$",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "Either $x = 64$ or $x = 4$",
                  "reason": "The definition of a power, from arithmetic: $2^{6} = 64$ and $2^{2} = 4$."
                },
                {
                  "step": "Both $x = 64$ and $x = 4$ are positive and other than 1, so both are solutions.",
                  "reason": "Domain of a logarithm: a solution must make every logarithm defined."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t219-k4",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\log_{2}{(6x + 1)} < -1$.",
            "lines": [
              {
                "step": "Solve $\\log_{2}{(6x + 1)} < -1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The logarithm is defined exactly when $6x + 1 > 0$.",
                "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
              },
              {
                "step": "$\\log_{2}{(6x + 1)} < \\log_{2}{\\dfrac{1}{2}}$",
                "reason": "Logarithm: $2^{-1} = \\dfrac{1}{2}$ means $\\log_{2}{\\dfrac{1}{2}} = -1$."
              },
              {
                "step": "$6x + 1 < \\dfrac{1}{2}$",
                "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
              },
              {
                "step": "Together with the domain: $0 < 6x + 1 < \\dfrac{1}{2}$",
                "reason": "Domain of a logarithm: a solution must make the logarithm defined."
              },
              {
                "step": "$-1 < 6x < -\\dfrac{1}{2}$",
                "reason": "Adding the same number, from arithmetic: $-1$ is added."
              },
              {
                "step": "$-\\dfrac{1}{6} < x < -\\dfrac{1}{12}$",
                "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{6}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\log_{10}{(7x - 4)} > -1$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x > 41/70",
              "lines": [
                {
                  "step": "Solve $\\log_{10}{(7x - 4)} > -1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $7x - 4 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{10}{(7x - 4)} > \\log_{10}{\\dfrac{1}{10}}$",
                  "reason": "Logarithm: $10^{-1} = \\dfrac{1}{10}$ means $\\log_{10}{\\dfrac{1}{10}} = -1$."
                },
                {
                  "step": "$7x - 4 > \\dfrac{1}{10}$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Every such $x$ has $7x - 4 > 0$, so the whole condition is $7x - 4 > \\dfrac{1}{10}$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                },
                {
                  "step": "$7x > \\dfrac{41}{10}$",
                  "reason": "Adding the same number, from arithmetic: $4$ is added."
                },
                {
                  "step": "$x > \\dfrac{41}{70}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{7}$."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{10}{(3x - 7)} \\le 1$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "7/3 < x <= 17/3",
              "lines": [
                {
                  "step": "Solve $\\log_{10}{(3x - 7)} \\le 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $3x - 7 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{10}{(3x - 7)} \\le \\log_{10}{10}$",
                  "reason": "Logarithm: $10^{1} = 10$ means $\\log_{10}{10} = 1$."
                },
                {
                  "step": "$3x - 7 \\le 10$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Together with the domain: $0 < 3x - 7 \\le 10$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                },
                {
                  "step": "$7 < 3x \\le 17$",
                  "reason": "Adding the same number, from arithmetic: $7$ is added."
                },
                {
                  "step": "$\\dfrac{7}{3} < x \\le \\dfrac{17}{3}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{3}$."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{3}{(7x - 5)} \\ge 3$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= 32/7",
              "lines": [
                {
                  "step": "Solve $\\log_{3}{(7x - 5)} \\ge 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $7x - 5 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{3}{(7x - 5)} \\ge \\log_{3}{27}$",
                  "reason": "Logarithm: $3^{3} = 27$ means $\\log_{3}{27} = 3$."
                },
                {
                  "step": "$7x - 5 \\ge 27$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Every such $x$ has $7x - 5 > 0$, so the whole condition is $7x - 5 \\ge 27$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                },
                {
                  "step": "$7x \\ge 32$",
                  "reason": "Adding the same number, from arithmetic: $5$ is added."
                },
                {
                  "step": "$x \\ge \\dfrac{32}{7}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{7}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\log_{\\frac{1}{5}}{(6x + 1)} < 1$.",
            "lines": [
              {
                "step": "Solve $\\log_{\\frac{1}{5}}{(6x + 1)} < 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The logarithm is defined exactly when $6x + 1 > 0$.",
                "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
              },
              {
                "step": "$\\log_{\\frac{1}{5}}{(6x + 1)} = \\dfrac{\\log_{5}{(6x + 1)}}{\\log_{5}{\\frac{1}{5}}}$",
                "reason": "Change of base: a logarithm to the base $\\dfrac{1}{5}$ is a quotient of two logarithms in the base $5$."
              },
              {
                "step": "$\\log_{\\frac{1}{5}}{(6x + 1)} = -\\log_{5}{(6x + 1)}$",
                "reason": "Logarithm: $5^{-1} = \\dfrac{1}{5}$ means $\\log_{5}{\\dfrac{1}{5}} = -1$, and dividing by $-1$ changes the sign."
              },
              {
                "step": "$-\\log_{5}{(6x + 1)} < 1$",
                "reason": "Substituting a value: $-\\log_{5}{(6x + 1)}$ is put in place of $\\log_{\\frac{1}{5}}{(6x + 1)}$."
              },
              {
                "step": "$\\log_{5}{(6x + 1)} > -1$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$."
              },
              {
                "step": "$\\log_{5}{(6x + 1)} > \\log_{5}{\\dfrac{1}{5}}$",
                "reason": "Logarithm: $5^{-1} = \\dfrac{1}{5}$ means $\\log_{5}{\\dfrac{1}{5}} = -1$."
              },
              {
                "step": "$6x + 1 > \\dfrac{1}{5}$",
                "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
              },
              {
                "step": "Every such $x$ has $6x + 1 > 0$, so the whole condition is $6x + 1 > \\dfrac{1}{5}$",
                "reason": "Domain of a logarithm: a solution must make the logarithm defined."
              },
              {
                "step": "$6x > -\\dfrac{4}{5}$",
                "reason": "Adding the same number, from arithmetic: $-1$ is added."
              },
              {
                "step": "$x > -\\dfrac{2}{15}$",
                "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{6}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\log_{\\frac{1}{3}}{(6x + 5)} > 1$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-5/6 < x < -7/9",
              "lines": [
                {
                  "step": "Solve $\\log_{\\frac{1}{3}}{(6x + 5)} > 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $6x + 5 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{\\frac{1}{3}}{(6x + 5)} = \\dfrac{\\log_{3}{(6x + 5)}}{\\log_{3}{\\frac{1}{3}}}$",
                  "reason": "Change of base: a logarithm to the base $\\dfrac{1}{3}$ is a quotient of two logarithms in the base $3$."
                },
                {
                  "step": "$\\log_{\\frac{1}{3}}{(6x + 5)} = -\\log_{3}{(6x + 5)}$",
                  "reason": "Logarithm: $3^{-1} = \\dfrac{1}{3}$ means $\\log_{3}{\\dfrac{1}{3}} = -1$, and dividing by $-1$ changes the sign."
                },
                {
                  "step": "$-\\log_{3}{(6x + 5)} > 1$",
                  "reason": "Substituting a value: $-\\log_{3}{(6x + 5)}$ is put in place of $\\log_{\\frac{1}{3}}{(6x + 5)}$."
                },
                {
                  "step": "$\\log_{3}{(6x + 5)} < -1$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\log_{3}{(6x + 5)} < \\log_{3}{\\dfrac{1}{3}}$",
                  "reason": "Logarithm: $3^{-1} = \\dfrac{1}{3}$ means $\\log_{3}{\\dfrac{1}{3}} = -1$."
                },
                {
                  "step": "$6x + 5 < \\dfrac{1}{3}$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Together with the domain: $0 < 6x + 5 < \\dfrac{1}{3}$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                },
                {
                  "step": "$-5 < 6x < -\\dfrac{14}{3}$",
                  "reason": "Adding the same number, from arithmetic: $-5$ is added."
                },
                {
                  "step": "$-\\dfrac{5}{6} < x < -\\dfrac{7}{9}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{6}$."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{\\frac{1}{10}}{(7x - 2)} \\le 1$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= 3/10",
              "lines": [
                {
                  "step": "Solve $\\log_{\\frac{1}{10}}{(7x - 2)} \\le 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $7x - 2 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{\\frac{1}{10}}{(7x - 2)} = \\dfrac{\\log_{10}{(7x - 2)}}{\\log_{10}{\\frac{1}{10}}}$",
                  "reason": "Change of base: a logarithm to the base $\\dfrac{1}{10}$ is a quotient of two logarithms in the base $10$."
                },
                {
                  "step": "$\\log_{\\frac{1}{10}}{(7x - 2)} = -\\log_{10}{(7x - 2)}$",
                  "reason": "Logarithm: $10^{-1} = \\dfrac{1}{10}$ means $\\log_{10}{\\dfrac{1}{10}} = -1$, and dividing by $-1$ changes the sign."
                },
                {
                  "step": "$-\\log_{10}{(7x - 2)} \\le 1$",
                  "reason": "Substituting a value: $-\\log_{10}{(7x - 2)}$ is put in place of $\\log_{\\frac{1}{10}}{(7x - 2)}$."
                },
                {
                  "step": "$\\log_{10}{(7x - 2)} \\ge -1$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\log_{10}{(7x - 2)} \\ge \\log_{10}{\\dfrac{1}{10}}$",
                  "reason": "Logarithm: $10^{-1} = \\dfrac{1}{10}$ means $\\log_{10}{\\dfrac{1}{10}} = -1$."
                },
                {
                  "step": "$7x - 2 \\ge \\dfrac{1}{10}$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Every such $x$ has $7x - 2 > 0$, so the whole condition is $7x - 2 \\ge \\dfrac{1}{10}$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                },
                {
                  "step": "$7x \\ge \\dfrac{21}{10}$",
                  "reason": "Adding the same number, from arithmetic: $2$ is added."
                },
                {
                  "step": "$x \\ge \\dfrac{3}{10}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{7}$."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{\\frac{1}{2}}{(6x - 5)} \\ge 2$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "5/6 < x <= 7/8",
              "lines": [
                {
                  "step": "Solve $\\log_{\\frac{1}{2}}{(6x - 5)} \\ge 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $6x - 5 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{\\frac{1}{2}}{(6x - 5)} = \\dfrac{\\log_{2}{(6x - 5)}}{\\log_{2}{\\frac{1}{2}}}$",
                  "reason": "Change of base: a logarithm to the base $\\dfrac{1}{2}$ is a quotient of two logarithms in the base $2$."
                },
                {
                  "step": "$\\log_{\\frac{1}{2}}{(6x - 5)} = -\\log_{2}{(6x - 5)}$",
                  "reason": "Logarithm: $2^{-1} = \\dfrac{1}{2}$ means $\\log_{2}{\\dfrac{1}{2}} = -1$, and dividing by $-1$ changes the sign."
                },
                {
                  "step": "$-\\log_{2}{(6x - 5)} \\ge 2$",
                  "reason": "Substituting a value: $-\\log_{2}{(6x - 5)}$ is put in place of $\\log_{\\frac{1}{2}}{(6x - 5)}$."
                },
                {
                  "step": "$\\log_{2}{(6x - 5)} \\le -2$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\log_{2}{(6x - 5)} \\le \\log_{2}{\\dfrac{1}{4}}$",
                  "reason": "Logarithm: $2^{-2} = \\dfrac{1}{4}$ means $\\log_{2}{\\dfrac{1}{4}} = -2$."
                },
                {
                  "step": "$6x - 5 \\le \\dfrac{1}{4}$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Together with the domain: $0 < 6x - 5 \\le \\dfrac{1}{4}$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                },
                {
                  "step": "$5 < 6x \\le \\dfrac{21}{4}$",
                  "reason": "Adding the same number, from arithmetic: $5$ is added."
                },
                {
                  "step": "$\\dfrac{5}{6} < x \\le \\dfrac{7}{8}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{6}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = \\log_{2}{\\left(\\log_{4}{(2x + 3)} - 1\\right)}$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = \\log_{2}{\\left(\\log_{4}{(2x + 3)} - 1\\right)}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The inner logarithm is defined exactly when $2x + 3 > 0$.",
                "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
              },
              {
                "step": "The outer logarithm is defined exactly when $\\log_{4}{(2x + 3)} - 1 > 0$.",
                "reason": "Domain of a logarithm: the number whose logarithm to the base $2$ is taken must be positive."
              },
              {
                "step": "$\\log_{4}{(2x + 3)} > 1$",
                "reason": "Adding the same number, from arithmetic: $1$ is added."
              },
              {
                "step": "$\\log_{4}{(2x + 3)} > \\log_{4}{4}$",
                "reason": "Logarithm: $4^{1} = 4$ means $\\log_{4}{4} = 1$."
              },
              {
                "step": "$2x + 3 > 4$",
                "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
              },
              {
                "step": "Every such $x$ has $2x + 3 > 0$, so the whole condition is $2x + 3 > 4$",
                "reason": "Domain of a logarithm: both logarithms must be defined."
              },
              {
                "step": "$2x > 1$",
                "reason": "Adding the same number, from arithmetic: $-3$ is added."
              },
              {
                "step": "$x > \\dfrac{1}{2}$",
                "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{2}$."
              },
              {
                "step": "The domain of $f$ is $\\left(\\dfrac{1}{2}, \\infty\\right)$.",
                "reason": "Domain: the inputs for which $f(x)$ is defined form its domain."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = \\log_{3}{\\left(\\log_{5}{(3x + 4)} - 3\\right)}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(121/3, inf)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\log_{3}{\\left(\\log_{5}{(3x + 4)} - 3\\right)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner logarithm is defined exactly when $3x + 4 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The outer logarithm is defined exactly when $\\log_{5}{(3x + 4)} - 3 > 0$.",
                  "reason": "Domain of a logarithm: the number whose logarithm to the base $3$ is taken must be positive."
                },
                {
                  "step": "$\\log_{5}{(3x + 4)} > 3$",
                  "reason": "Adding the same number, from arithmetic: $3$ is added."
                },
                {
                  "step": "$\\log_{5}{(3x + 4)} > \\log_{5}{125}$",
                  "reason": "Logarithm: $5^{3} = 125$ means $\\log_{5}{125} = 3$."
                },
                {
                  "step": "$3x + 4 > 125$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Every such $x$ has $3x + 4 > 0$, so the whole condition is $3x + 4 > 125$",
                  "reason": "Domain of a logarithm: both logarithms must be defined."
                },
                {
                  "step": "$3x > 121$",
                  "reason": "Adding the same number, from arithmetic: $-4$ is added."
                },
                {
                  "step": "$x > \\dfrac{121}{3}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "The domain of $f$ is $\\left(\\dfrac{121}{3}, \\infty\\right)$.",
                  "reason": "Domain: the inputs for which $f(x)$ is defined form its domain."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\log_{10}{\\left(\\log_{2}{(3x - 8)} - 3\\right)}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(16/3, inf)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\log_{10}{\\left(\\log_{2}{(3x - 8)} - 3\\right)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner logarithm is defined exactly when $3x - 8 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The outer logarithm is defined exactly when $\\log_{2}{(3x - 8)} - 3 > 0$.",
                  "reason": "Domain of a logarithm: the number whose logarithm to the base $10$ is taken must be positive."
                },
                {
                  "step": "$\\log_{2}{(3x - 8)} > 3$",
                  "reason": "Adding the same number, from arithmetic: $3$ is added."
                },
                {
                  "step": "$\\log_{2}{(3x - 8)} > \\log_{2}{8}$",
                  "reason": "Logarithm: $2^{3} = 8$ means $\\log_{2}{8} = 3$."
                },
                {
                  "step": "$3x - 8 > 8$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Every such $x$ has $3x - 8 > 0$, so the whole condition is $3x - 8 > 8$",
                  "reason": "Domain of a logarithm: both logarithms must be defined."
                },
                {
                  "step": "$3x > 16$",
                  "reason": "Adding the same number, from arithmetic: $8$ is added."
                },
                {
                  "step": "$x > \\dfrac{16}{3}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "The domain of $f$ is $\\left(\\dfrac{16}{3}, \\infty\\right)$.",
                  "reason": "Domain: the inputs for which $f(x)$ is defined form its domain."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\log_{10}{\\left(\\log_{3}{(5x - 7)} - 3\\right)}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(34/5, inf)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\log_{10}{\\left(\\log_{3}{(5x - 7)} - 3\\right)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner logarithm is defined exactly when $5x - 7 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The outer logarithm is defined exactly when $\\log_{3}{(5x - 7)} - 3 > 0$.",
                  "reason": "Domain of a logarithm: the number whose logarithm to the base $10$ is taken must be positive."
                },
                {
                  "step": "$\\log_{3}{(5x - 7)} > 3$",
                  "reason": "Adding the same number, from arithmetic: $3$ is added."
                },
                {
                  "step": "$\\log_{3}{(5x - 7)} > \\log_{3}{27}$",
                  "reason": "Logarithm: $3^{3} = 27$ means $\\log_{3}{27} = 3$."
                },
                {
                  "step": "$5x - 7 > 27$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Every such $x$ has $5x - 7 > 0$, so the whole condition is $5x - 7 > 27$",
                  "reason": "Domain of a logarithm: both logarithms must be defined."
                },
                {
                  "step": "$5x > 34$",
                  "reason": "Adding the same number, from arithmetic: $7$ is added."
                },
                {
                  "step": "$x > \\dfrac{34}{5}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{5}$."
                },
                {
                  "step": "The domain of $f$ is $\\left(\\dfrac{34}{5}, \\infty\\right)$.",
                  "reason": "Domain: the inputs for which $f(x)$ is defined form its domain."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = \\log_{2}{\\left(\\log_{\\frac{1}{3}}{(2x + 5)} + 1\\right)}$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = \\log_{2}{\\left(\\log_{\\frac{1}{3}}{(2x + 5)} + 1\\right)}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The inner logarithm is defined exactly when $2x + 5 > 0$.",
                "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
              },
              {
                "step": "The outer logarithm is defined exactly when $\\log_{\\frac{1}{3}}{(2x + 5)} + 1 > 0$.",
                "reason": "Domain of a logarithm: the number whose logarithm to the base $2$ is taken must be positive."
              },
              {
                "step": "$\\log_{\\frac{1}{3}}{(2x + 5)} > -1$",
                "reason": "Adding the same number, from arithmetic: $-1$ is added."
              },
              {
                "step": "$\\log_{\\frac{1}{3}}{(2x + 5)} = \\dfrac{\\log_{3}{(2x + 5)}}{\\log_{3}{\\frac{1}{3}}}$",
                "reason": "Change of base: a logarithm to the base $\\dfrac{1}{3}$ is a quotient of two logarithms in the base $3$."
              },
              {
                "step": "$\\log_{\\frac{1}{3}}{(2x + 5)} = -\\log_{3}{(2x + 5)}$",
                "reason": "Logarithm: $3^{-1} = \\dfrac{1}{3}$ means $\\log_{3}{\\dfrac{1}{3}} = -1$, and dividing by $-1$ changes the sign."
              },
              {
                "step": "$-\\log_{3}{(2x + 5)} > -1$",
                "reason": "Substituting a value: $-\\log_{3}{(2x + 5)}$ is put in place of $\\log_{\\frac{1}{3}}{(2x + 5)}$."
              },
              {
                "step": "$\\log_{3}{(2x + 5)} < 1$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$."
              },
              {
                "step": "$\\log_{3}{(2x + 5)} < \\log_{3}{3}$",
                "reason": "Logarithm: $3^{1} = 3$ means $\\log_{3}{3} = 1$."
              },
              {
                "step": "$2x + 5 < 3$",
                "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
              },
              {
                "step": "Together with the inner logarithm: $0 < 2x + 5 < 3$",
                "reason": "Domain of a logarithm: both logarithms must be defined."
              },
              {
                "step": "$-5 < 2x < -2$",
                "reason": "Adding the same number, from arithmetic: $-5$ is added."
              },
              {
                "step": "$-\\dfrac{5}{2} < x < -1$",
                "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{2}$."
              },
              {
                "step": "The domain of $f$ is $\\left(-\\dfrac{5}{2}, -1\\right)$.",
                "reason": "Domain: the inputs for which $f(x)$ is defined form its domain."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = \\log_{3}{\\left(\\log_{\\frac{1}{2}}{(3x + 4)} + 2\\right)}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-4/3, 0)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\log_{3}{\\left(\\log_{\\frac{1}{2}}{(3x + 4)} + 2\\right)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner logarithm is defined exactly when $3x + 4 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The outer logarithm is defined exactly when $\\log_{\\frac{1}{2}}{(3x + 4)} + 2 > 0$.",
                  "reason": "Domain of a logarithm: the number whose logarithm to the base $3$ is taken must be positive."
                },
                {
                  "step": "$\\log_{\\frac{1}{2}}{(3x + 4)} > -2$",
                  "reason": "Adding the same number, from arithmetic: $-2$ is added."
                },
                {
                  "step": "$\\log_{\\frac{1}{2}}{(3x + 4)} = \\dfrac{\\log_{2}{(3x + 4)}}{\\log_{2}{\\frac{1}{2}}}$",
                  "reason": "Change of base: a logarithm to the base $\\dfrac{1}{2}$ is a quotient of two logarithms in the base $2$."
                },
                {
                  "step": "$\\log_{\\frac{1}{2}}{(3x + 4)} = -\\log_{2}{(3x + 4)}$",
                  "reason": "Logarithm: $2^{-1} = \\dfrac{1}{2}$ means $\\log_{2}{\\dfrac{1}{2}} = -1$, and dividing by $-1$ changes the sign."
                },
                {
                  "step": "$-\\log_{2}{(3x + 4)} > -2$",
                  "reason": "Substituting a value: $-\\log_{2}{(3x + 4)}$ is put in place of $\\log_{\\frac{1}{2}}{(3x + 4)}$."
                },
                {
                  "step": "$\\log_{2}{(3x + 4)} < 2$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\log_{2}{(3x + 4)} < \\log_{2}{4}$",
                  "reason": "Logarithm: $2^{2} = 4$ means $\\log_{2}{4} = 2$."
                },
                {
                  "step": "$3x + 4 < 4$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Together with the inner logarithm: $0 < 3x + 4 < 4$",
                  "reason": "Domain of a logarithm: both logarithms must be defined."
                },
                {
                  "step": "$-4 < 3x < 0$",
                  "reason": "Adding the same number, from arithmetic: $-4$ is added."
                },
                {
                  "step": "$-\\dfrac{4}{3} < x < 0$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "The domain of $f$ is $\\left(-\\dfrac{4}{3}, 0\\right)$.",
                  "reason": "Domain: the inputs for which $f(x)$ is defined form its domain."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\log_{10}{\\left(\\log_{\\frac{1}{5}}{(2x - 3)} + 1\\right)}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(3/2, 4)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\log_{10}{\\left(\\log_{\\frac{1}{5}}{(2x - 3)} + 1\\right)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner logarithm is defined exactly when $2x - 3 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The outer logarithm is defined exactly when $\\log_{\\frac{1}{5}}{(2x - 3)} + 1 > 0$.",
                  "reason": "Domain of a logarithm: the number whose logarithm to the base $10$ is taken must be positive."
                },
                {
                  "step": "$\\log_{\\frac{1}{5}}{(2x - 3)} > -1$",
                  "reason": "Adding the same number, from arithmetic: $-1$ is added."
                },
                {
                  "step": "$\\log_{\\frac{1}{5}}{(2x - 3)} = \\dfrac{\\log_{5}{(2x - 3)}}{\\log_{5}{\\frac{1}{5}}}$",
                  "reason": "Change of base: a logarithm to the base $\\dfrac{1}{5}$ is a quotient of two logarithms in the base $5$."
                },
                {
                  "step": "$\\log_{\\frac{1}{5}}{(2x - 3)} = -\\log_{5}{(2x - 3)}$",
                  "reason": "Logarithm: $5^{-1} = \\dfrac{1}{5}$ means $\\log_{5}{\\dfrac{1}{5}} = -1$, and dividing by $-1$ changes the sign."
                },
                {
                  "step": "$-\\log_{5}{(2x - 3)} > -1$",
                  "reason": "Substituting a value: $-\\log_{5}{(2x - 3)}$ is put in place of $\\log_{\\frac{1}{5}}{(2x - 3)}$."
                },
                {
                  "step": "$\\log_{5}{(2x - 3)} < 1$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\log_{5}{(2x - 3)} < \\log_{5}{5}$",
                  "reason": "Logarithm: $5^{1} = 5$ means $\\log_{5}{5} = 1$."
                },
                {
                  "step": "$2x - 3 < 5$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Together with the inner logarithm: $0 < 2x - 3 < 5$",
                  "reason": "Domain of a logarithm: both logarithms must be defined."
                },
                {
                  "step": "$3 < 2x < 8$",
                  "reason": "Adding the same number, from arithmetic: $3$ is added."
                },
                {
                  "step": "$\\dfrac{3}{2} < x < 4$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{2}$."
                },
                {
                  "step": "The domain of $f$ is $\\left(\\dfrac{3}{2}, 4\\right)$.",
                  "reason": "Domain: the inputs for which $f(x)$ is defined form its domain."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\log_{2}{\\left(\\log_{\\frac{1}{4}}{(5x + 2)} + 1\\right)}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-2/5, 2/5)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\log_{2}{\\left(\\log_{\\frac{1}{4}}{(5x + 2)} + 1\\right)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner logarithm is defined exactly when $5x + 2 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "The outer logarithm is defined exactly when $\\log_{\\frac{1}{4}}{(5x + 2)} + 1 > 0$.",
                  "reason": "Domain of a logarithm: the number whose logarithm to the base $2$ is taken must be positive."
                },
                {
                  "step": "$\\log_{\\frac{1}{4}}{(5x + 2)} > -1$",
                  "reason": "Adding the same number, from arithmetic: $-1$ is added."
                },
                {
                  "step": "$\\log_{\\frac{1}{4}}{(5x + 2)} = \\dfrac{\\log_{4}{(5x + 2)}}{\\log_{4}{\\frac{1}{4}}}$",
                  "reason": "Change of base: a logarithm to the base $\\dfrac{1}{4}$ is a quotient of two logarithms in the base $4$."
                },
                {
                  "step": "$\\log_{\\frac{1}{4}}{(5x + 2)} = -\\log_{4}{(5x + 2)}$",
                  "reason": "Logarithm: $4^{-1} = \\dfrac{1}{4}$ means $\\log_{4}{\\dfrac{1}{4}} = -1$, and dividing by $-1$ changes the sign."
                },
                {
                  "step": "$-\\log_{4}{(5x + 2)} > -1$",
                  "reason": "Substituting a value: $-\\log_{4}{(5x + 2)}$ is put in place of $\\log_{\\frac{1}{4}}{(5x + 2)}$."
                },
                {
                  "step": "$\\log_{4}{(5x + 2)} < 1$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\log_{4}{(5x + 2)} < \\log_{4}{4}$",
                  "reason": "Logarithm: $4^{1} = 4$ means $\\log_{4}{4} = 1$."
                },
                {
                  "step": "$5x + 2 < 4$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Together with the inner logarithm: $0 < 5x + 2 < 4$",
                  "reason": "Domain of a logarithm: both logarithms must be defined."
                },
                {
                  "step": "$-2 < 5x < 2$",
                  "reason": "Adding the same number, from arithmetic: $-2$ is added."
                },
                {
                  "step": "$-\\dfrac{2}{5} < x < \\dfrac{2}{5}$",
                  "reason": "Multiplying by a positive number, from arithmetic: each side is multiplied by $\\dfrac{1}{5}$."
                },
                {
                  "step": "The domain of $f$ is $\\left(-\\dfrac{2}{5}, \\dfrac{2}{5}\\right)$.",
                  "reason": "Domain: the inputs for which $f(x)$ is defined form its domain."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t219-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the number of digits of $11^{149}$, given that $1.041 < \\log_{10}{11} < 1.042$.",
            "lines": [
              {
                "step": "Find the number of digits of $11^{149}$, given that $1.041 < \\log_{10}{11} < 1.042$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{10}{11^{149}} = 149\\log_{10}{11}$",
                "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $149$ down in front."
              },
              {
                "step": "$149 \\cdot 1.041 < 149\\log_{10}{11} < 149 \\cdot 1.042$",
                "reason": "Multiplying by a positive number, from arithmetic: each part of the given inequality is multiplied by $149$."
              },
              {
                "step": "$155.109 < \\log_{10}{11^{149}} < 155.258$",
                "reason": "Substituting a value: $\\log_{10}{11^{149}}$ is put in place of $149\\log_{10}{11}$, and the two products are worked out."
              },
              {
                "step": "$155 < \\log_{10}{11^{149}} < 156$",
                "reason": "Transitivity, from arithmetic: $155 < 155.109$ and $155.258 < 156$."
              },
              {
                "step": "$10^{155} < 11^{149} < 10^{156}$",
                "reason": "Logarithm is increasing: $155 = \\log_{10}{10^{155}}$ and $156 = \\log_{10}{10^{156}}$, and the order of two logarithms is the order of their numbers."
              },
              {
                "step": "The number $11^{149}$ has $156$ digits.",
                "reason": "Number of digits: a whole number from $10^{k-1}$ up to less than $10^{k}$ has $k$ digits."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of digits of $2^{143}$, given that $0.301 < \\log_{10}{2} < 0.302$.",
              "form": "Answer as an integer.",
              "answer": "44",
              "lines": [
                {
                  "step": "Find the number of digits of $2^{143}$, given that $0.301 < \\log_{10}{2} < 0.302$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{2^{143}} = 143\\log_{10}{2}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $143$ down in front."
                },
                {
                  "step": "$143 \\cdot 0.301 < 143\\log_{10}{2} < 143 \\cdot 0.302$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part of the given inequality is multiplied by $143$."
                },
                {
                  "step": "$43.043 < \\log_{10}{2^{143}} < 43.186$",
                  "reason": "Substituting a value: $\\log_{10}{2^{143}}$ is put in place of $143\\log_{10}{2}$, and the two products are worked out."
                },
                {
                  "step": "$43 < \\log_{10}{2^{143}} < 44$",
                  "reason": "Transitivity, from arithmetic: $43 < 43.043$ and $43.186 < 44$."
                },
                {
                  "step": "$10^{43} < 2^{143} < 10^{44}$",
                  "reason": "Logarithm is increasing: $43 = \\log_{10}{10^{43}}$ and $44 = \\log_{10}{10^{44}}$, and the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "The number $2^{143}$ has $44$ digits.",
                  "reason": "Number of digits: a whole number from $10^{k-1}$ up to less than $10^{k}$ has $k$ digits."
                }
              ]
            },
            {
              "prompt": "Find the number of digits of $7^{99}$, given that $0.845 < \\log_{10}{7} < 0.846$.",
              "form": "Answer as an integer.",
              "answer": "84",
              "lines": [
                {
                  "step": "Find the number of digits of $7^{99}$, given that $0.845 < \\log_{10}{7} < 0.846$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{7^{99}} = 99\\log_{10}{7}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $99$ down in front."
                },
                {
                  "step": "$99 \\cdot 0.845 < 99\\log_{10}{7} < 99 \\cdot 0.846$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part of the given inequality is multiplied by $99$."
                },
                {
                  "step": "$83.655 < \\log_{10}{7^{99}} < 83.754$",
                  "reason": "Substituting a value: $\\log_{10}{7^{99}}$ is put in place of $99\\log_{10}{7}$, and the two products are worked out."
                },
                {
                  "step": "$83 < \\log_{10}{7^{99}} < 84$",
                  "reason": "Transitivity, from arithmetic: $83 < 83.655$ and $83.754 < 84$."
                },
                {
                  "step": "$10^{83} < 7^{99} < 10^{84}$",
                  "reason": "Logarithm is increasing: $83 = \\log_{10}{10^{83}}$ and $84 = \\log_{10}{10^{84}}$, and the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "The number $7^{99}$ has $84$ digits.",
                  "reason": "Number of digits: a whole number from $10^{k-1}$ up to less than $10^{k}$ has $k$ digits."
                }
              ]
            },
            {
              "prompt": "Find the number of digits of $13^{155}$, given that $1.113 < \\log_{10}{13} < 1.114$.",
              "form": "Answer as an integer.",
              "answer": "173",
              "lines": [
                {
                  "step": "Find the number of digits of $13^{155}$, given that $1.113 < \\log_{10}{13} < 1.114$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{13^{155}} = 155\\log_{10}{13}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $155$ down in front."
                },
                {
                  "step": "$155 \\cdot 1.113 < 155\\log_{10}{13} < 155 \\cdot 1.114$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part of the given inequality is multiplied by $155$."
                },
                {
                  "step": "$172.515 < \\log_{10}{13^{155}} < 172.67$",
                  "reason": "Substituting a value: $\\log_{10}{13^{155}}$ is put in place of $155\\log_{10}{13}$, and the two products are worked out."
                },
                {
                  "step": "$172 < \\log_{10}{13^{155}} < 173$",
                  "reason": "Transitivity, from arithmetic: $172 < 172.515$ and $172.67 < 173$."
                },
                {
                  "step": "$10^{172} < 13^{155} < 10^{173}$",
                  "reason": "Logarithm is increasing: $172 = \\log_{10}{10^{172}}$ and $173 = \\log_{10}{10^{173}}$, and the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "The number $13^{155}$ has $173$ digits.",
                  "reason": "Number of digits: a whole number from $10^{k-1}$ up to less than $10^{k}$ has $k$ digits."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t219-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\log_{20}{(x + 7)} + \\log_{20}{(x + 15)} = 1$, and write that line right.",
            "given": [
              "$\\log_{20}{(x + 7)} + \\log_{20}{(x + 15)} = 1$",
              "$(x + 7) + (x + 15) = 20$",
              "$2x + 22 = 20$",
              "$2x = -2$",
              "$x = -1$",
              "Both logarithms are defined exactly when $x > -7$.",
              "This value is greater than $-7$, so it is the solution."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\log_{20}{(x + 7)} + \\log_{20}{(x + 15)} = 1$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 adds $x + 7$ and $x + 15$, and line 1 adds two logarithms.",
                "reason": "A logarithm taken term by term over a sum: a sum of logarithms is read as the logarithm of the sum, the way $(a + b)^2$ is taken as $a^2 + b^2$."
              },
              {
                "step": "Line 2 written right is $(x + 7)(x + 15) = 20$.",
                "reason": "Log of a product and Log to exponential form: the sum of the two logarithms is the logarithm of the product, and $\\log_a u = c$ means $u = a^c$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\log_{2}{(x - 7)} + \\log_{2}{(x - 5)} = 3$, and write that line right.",
              "given": [
                "$\\log_{2}{(x - 7)} + \\log_{2}{(x - 5)} = 3$",
                "Both logarithms are defined exactly when $x > 7$.",
                "$(x - 7) + (x - 5) = 8$",
                "$2x - 12 = 8$",
                "$2x = 20$",
                "$x = 10$",
                "This value is greater than $7$, so it is the solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (x-7)*(x-5) = 8",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\log_{2}{(x - 7)} + \\log_{2}{(x - 5)} = 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds $x - 7$ and $x - 5$, and line 1 adds two logarithms.",
                  "reason": "A logarithm taken term by term over a sum: a sum of logarithms is read as the logarithm of the sum, the way $(a + b)^2$ is taken as $a^2 + b^2$."
                },
                {
                  "step": "Line 3 written right is $(x - 7)(x - 5) = 8$.",
                  "reason": "Log of a product and Log to exponential form: the sum of the two logarithms is the logarithm of the product, and $\\log_a u = c$ means $u = a^c$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\log_{2}{(x + 2)} + \\log_{2}{(x + 8)} = 4$, and write that line right.",
              "given": [
                "$\\log_{2}{(x + 2)} + \\log_{2}{(x + 8)} = 4$",
                "$(x + 2) + (x + 8) = 16$",
                "$2x + 10 = 16$",
                "$2x = 6$",
                "$x = 3$",
                "Both logarithms are defined exactly when $x > -2$.",
                "This value is greater than $-2$, so it is the solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (x+2)*(x+8) = 16",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\log_{2}{(x + 2)} + \\log_{2}{(x + 8)} = 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds $x + 2$ and $x + 8$, and line 1 adds two logarithms.",
                  "reason": "A logarithm taken term by term over a sum: a sum of logarithms is read as the logarithm of the sum, the way $(a + b)^2$ is taken as $a^2 + b^2$."
                },
                {
                  "step": "Line 2 written right is $(x + 2)(x + 8) = 16$.",
                  "reason": "Log of a product and Log to exponential form: the sum of the two logarithms is the logarithm of the product, and $\\log_a u = c$ means $u = a^c$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\log_{2}{(x + 12)} + \\log_{2}{(x + 14)} = 3$, and write that line right.",
              "given": [
                "$\\log_{2}{(x + 12)} + \\log_{2}{(x + 14)} = 3$",
                "Both logarithms are defined exactly when $x > -12$.",
                "$(x + 12) + (x + 14) = 8$",
                "$2x + 26 = 8$",
                "$2x = -18$",
                "$x = -9$",
                "This value is greater than $-12$, so it is the solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (x+12)*(x+14) = 8",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\log_{2}{(x + 12)} + \\log_{2}{(x + 14)} = 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds $x + 12$ and $x + 14$, and line 1 adds two logarithms.",
                  "reason": "A logarithm taken term by term over a sum: a sum of logarithms is read as the logarithm of the sum, the way $(a + b)^2$ is taken as $a^2 + b^2$."
                },
                {
                  "step": "Line 3 written right is $(x + 12)(x + 14) = 8$.",
                  "reason": "Log of a product and Log to exponential form: the sum of the two logarithms is the logarithm of the product, and $\\log_a u = c$ means $u = a^c$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $2\\log_{2}{(x - 4)} - \\log_{2}{(5x + 8)} = 1$, and write that line right.",
            "given": [
              "$2\\log_{2}{(x - 4)} - \\log_{2}{(5x + 8)} = 1$",
              "$\\log_{2}{(x - 4)^2} - \\log_{2}{(5x + 8)} = 1$",
              "$\\log_{2}{\\dfrac{(x - 4)^2}{5x + 8}} = 1$",
              "$\\dfrac{(x - 4)^2}{5x + 8} = 2$",
              "$(x - 4)^2 = 2(5x + 8)$",
              "$x^2 + 16 = 10x + 16$",
              "$x^2 - 10x = 0$",
              "$x(x - 10) = 0$",
              "Either $x = 0$ or $x = 10$",
              "Both logarithms are defined exactly when $x > 4$.",
              "Only $x = 10$ is greater than $4$, so it is the one solution."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $2\\log_{2}{(x - 4)} - \\log_{2}{(5x + 8)} = 1$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 6 writes $(x - 4)^2$ as $x^2 + 16$: the middle term $-8x$ is missing.",
                "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares."
              },
              {
                "step": "Line 6 written right is $x^2 - 8x + 16 = 10x + 16$.",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $2\\log_{3}{(x - 6)} - \\log_{3}{(7x + 4)} = 2$, and write that line right.",
              "given": [
                "$2\\log_{3}{(x - 6)} - \\log_{3}{(7x + 4)} = 2$",
                "Both logarithms are defined exactly when $x > 6$.",
                "$\\log_{3}{(x - 6)^2} - \\log_{3}{(7x + 4)} = 2$",
                "$\\log_{3}{\\dfrac{(x - 6)^2}{7x + 4}} = 2$",
                "$\\dfrac{(x - 6)^2}{7x + 4} = 9$",
                "$(x - 6)^2 = 9(7x + 4)$",
                "$x^2 + 36 = 63x + 36$",
                "$x^2 - 63x = 0$",
                "$x(x - 63) = 0$",
                "Either $x = 0$ or $x = 63$",
                "Only $x = 63$ is greater than $6$, so it is the one solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: x^2-12*x+36 = 63*x+36",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2\\log_{3}{(x - 6)} - \\log_{3}{(7x + 4)} = 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 writes $(x - 6)^2$ as $x^2 + 36$: the middle term $-12x$ is missing.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares."
                },
                {
                  "step": "Line 7 written right is $x^2 - 12x + 36 = 63x + 36$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2\\log_{4}{(x + 6)} - \\log_{4}{(7x + 9)} = 1$, and write that line right.",
              "given": [
                "$2\\log_{4}{(x + 6)} - \\log_{4}{(7x + 9)} = 1$",
                "$\\log_{4}{(x + 6)^2} - \\log_{4}{(7x + 9)} = 1$",
                "$\\log_{4}{\\dfrac{(x + 6)^2}{7x + 9}} = 1$",
                "$\\dfrac{(x + 6)^2}{7x + 9} = 4$",
                "$(x + 6)^2 = 4(7x + 9)$",
                "$x^2 + 36 = 28x + 36$",
                "$x^2 - 28x = 0$",
                "$x(x - 28) = 0$",
                "Either $x = 0$ or $x = 28$",
                "Both logarithms are defined exactly when $x > -\\dfrac{9}{7}$.",
                "Both $x = 0$ and $x = 28$ are greater than $-\\dfrac{9}{7}$, so both are solutions."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: x^2+12*x+36 = 28*x+36",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2\\log_{4}{(x + 6)} - \\log_{4}{(7x + 9)} = 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 writes $(x + 6)^2$ as $x^2 + 36$: the middle term $12x$ is missing.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares."
                },
                {
                  "step": "Line 6 written right is $x^2 + 12x + 36 = 28x + 36$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2\\log_{4}{(x + 8)} - \\log_{4}{(5x + 16)} = 1$, and write that line right.",
              "given": [
                "$2\\log_{4}{(x + 8)} - \\log_{4}{(5x + 16)} = 1$",
                "Both logarithms are defined exactly when $x > -\\dfrac{16}{5}$.",
                "$\\log_{4}{(x + 8)^2} - \\log_{4}{(5x + 16)} = 1$",
                "$\\log_{4}{\\dfrac{(x + 8)^2}{5x + 16}} = 1$",
                "$\\dfrac{(x + 8)^2}{5x + 16} = 4$",
                "$(x + 8)^2 = 4(5x + 16)$",
                "$x^2 + 64 = 20x + 64$",
                "$x^2 - 20x = 0$",
                "$x(x - 20) = 0$",
                "Either $x = 0$ or $x = 20$",
                "Both $x = 0$ and $x = 20$ are greater than $-\\dfrac{16}{5}$, so both are solutions."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: x^2+16*x+64 = 20*x+64",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2\\log_{4}{(x + 8)} - \\log_{4}{(5x + 16)} = 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 writes $(x + 8)^2$ as $x^2 + 64$: the middle term $16x$ is missing.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares."
                },
                {
                  "step": "Line 7 written right is $x^2 + 16x + 64 = 20x + 64$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\log_{6}{(x - 3)} + \\log_{6}{(x + 6)} = 2$, and write that line right.",
            "given": [
              "$\\log_{6}{(x - 3)} + \\log_{6}{(x + 6)} = 2$",
              "$(x - 3)(x + 6) = 36$",
              "$x^2 + 3x + 18 = 36$",
              "$x^2 + 3x - 18 = 0$",
              "$(x + 6)(x - 3) = 0$",
              "Either $x = -6$ or $x = 3$",
              "Both logarithms are defined exactly when $x > 3$.",
              "Neither value is greater than $3$, so the equation has no solution."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\log_{6}{(x - 3)} + \\log_{6}{(x + 6)} = 2$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 multiplies $-3$ by $6$ and writes $18$: the product is $-18$.",
                "reason": "A sign lost: the product of a negative number and a positive number is negative."
              },
              {
                "step": "Line 3 written right is $x^2 + 3x - 18 = 36$.",
                "reason": "Multiplying out: each term of one bracket multiplies each term of the other, with its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\log_{30}{(x - 3)} + \\log_{30}{(x + 10)} = 1$, and write that line right.",
              "given": [
                "$\\log_{30}{(x - 3)} + \\log_{30}{(x + 10)} = 1$",
                "Both logarithms are defined exactly when $x > 3$.",
                "$\\log_{30}{\\left((x - 3)(x + 10)\\right)} = 1$",
                "$(x - 3)(x + 10) = 30$",
                "$x^2 + 7x + 30 = 30$",
                "$x^2 + 7x = 0$",
                "$x(x + 7) = 0$",
                "Either $x = -7$ or $x = 0$",
                "Neither value is greater than $3$, so the equation has no solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x^2+7*x-30 = 30",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\log_{30}{(x - 3)} + \\log_{30}{(x + 10)} = 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 multiplies $-3$ by $10$ and writes $30$: the product is $-30$.",
                  "reason": "A sign lost: the product of a negative number and a positive number is negative."
                },
                {
                  "step": "Line 5 written right is $x^2 + 7x - 30 = 30$.",
                  "reason": "Multiplying out: each term of one bracket multiplies each term of the other, with its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2\\log_{2}{(x - 1)} - \\log_{2}{(4x - 16)} = 2$, and write that line right.",
              "given": [
                "$2\\log_{2}{(x - 1)} - \\log_{2}{(4x - 16)} = 2$",
                "$\\log_{2}{(x - 1)^2} - \\log_{2}{(4x - 16)} = 2$",
                "$\\log_{2}{\\dfrac{(x - 1)^2}{4x - 16}} = 2$",
                "$\\dfrac{(x - 1)^2}{4x - 16} = 4$",
                "$(x - 1)^2 = 4(4x - 16)$",
                "$x^2 - 2x + 1 = 16x + 64$",
                "$x^2 - 18x - 63 = 0$",
                "$(x + 3)(x - 21) = 0$",
                "Either $x = -3$ or $x = 21$",
                "Both logarithms are defined exactly when $x > 4$.",
                "Only $x = 21$ is greater than $4$, so it is the one solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: x^2-2*x+1 = 16*x-64",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2\\log_{2}{(x - 1)} - \\log_{2}{(4x - 16)} = 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 multiplies $4$ by $-16$ and writes $64$: the product is $-64$.",
                  "reason": "A sign lost: the product of a negative number and a positive number is negative."
                },
                {
                  "step": "Line 6 written right is $x^2 - 2x + 1 = 16x - 64$.",
                  "reason": "Multiplying out: the number $4$ multiplies each term in its bracket, with its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\log_{6}{(x - 12)} + \\log_{6}{(x + 4)} = 2$, and write that line right.",
              "given": [
                "$\\log_{6}{(x - 12)} + \\log_{6}{(x + 4)} = 2$",
                "Both logarithms are defined exactly when $x > 12$.",
                "$(x - 12)(x + 4) = 36$",
                "$x^2 - 8x + 48 = 36$",
                "$x^2 - 8x + 12 = 0$",
                "$(x - 2)(x - 6) = 0$",
                "Either $x = 2$ or $x = 6$",
                "Neither value is greater than $12$, so the equation has no solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x^2-8*x-48 = 36",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\log_{6}{(x - 12)} + \\log_{6}{(x + 4)} = 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies $-12$ by $4$ and writes $48$: the product is $-48$.",
                  "reason": "A sign lost: the product of a negative number and a positive number is negative."
                },
                {
                  "step": "Line 4 written right is $x^2 - 8x - 48 = 36$.",
                  "reason": "Multiplying out: each term of one bracket multiplies each term of the other, with its sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\log_{24}{(x - 3)} + \\log_{24}{(x + 7)} = 1$, and write that line right.",
            "given": [
              "$\\log_{24}{(x - 3)} + \\log_{24}{(x + 7)} = 1$",
              "$(x - 3)(x + 7) = 24$",
              "$x^2 + 4x - 21 = 24$",
              "$x^2 + 4x + 3 = 0$",
              "$(x + 3)(x + 1) = 0$",
              "Either $x = -3$ or $x = -1$",
              "Both logarithms are defined exactly when $x > 3$.",
              "Neither value is greater than $3$, so the equation has no solution."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\log_{24}{(x - 3)} + \\log_{24}{(x + 7)} = 1$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 adds $24$ on the left, where line 3 has $24$ on the right: taking $24$ to the left adds $-24$ there.",
                "reason": "A sign lost: a number taken to the other side of an equation changes its sign."
              },
              {
                "step": "Line 4 written right is $x^2 + 4x - 45 = 0$.",
                "reason": "Adding the same number to both sides: $-24$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\log_{6}{(x - 8)} + \\log_{6}{(x - 3)} = 1$, and write that line right.",
              "given": [
                "$\\log_{6}{(x - 8)} + \\log_{6}{(x - 3)} = 1$",
                "Both logarithms are defined exactly when $x > 8$.",
                "$\\log_{6}{\\left((x - 8)(x - 3)\\right)} = 1$",
                "$(x - 8)(x - 3) = 6$",
                "$x^2 - 11x + 24 = 6$",
                "$x^2 - 11x + 30 = 0$",
                "$(x - 5)(x - 6) = 0$",
                "Either $x = 5$ or $x = 6$",
                "Neither value is greater than $8$, so the equation has no solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: x^2-11*x+18 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\log_{6}{(x - 8)} + \\log_{6}{(x - 3)} = 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 adds $6$ on the left, where line 5 has $6$ on the right: taking $6$ to the left adds $-6$ there.",
                  "reason": "A sign lost: a number taken to the other side of an equation changes its sign."
                },
                {
                  "step": "Line 6 written right is $x^2 - 11x + 18 = 0$.",
                  "reason": "Adding the same number to both sides: $-6$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2\\log_{4}{(x - 5)} - \\log_{4}{(5x - 14)} = 1$, and write that line right.",
              "given": [
                "$2\\log_{4}{(x - 5)} - \\log_{4}{(5x - 14)} = 1$",
                "$\\log_{4}{(x - 5)^2} - \\log_{4}{(5x - 14)} = 1$",
                "$\\log_{4}{\\dfrac{(x - 5)^2}{5x - 14}} = 1$",
                "$\\dfrac{(x - 5)^2}{5x - 14} = 4$",
                "$(x - 5)^2 = 4(5x - 14)$",
                "$x^2 - 10x + 25 = 20x - 56$",
                "$x^2 - 30x - 31 = 0$",
                "$(x + 1)(x - 31) = 0$",
                "Either $x = -1$ or $x = 31$",
                "Both logarithms are defined exactly when $x > 5$.",
                "Only $x = 31$ is greater than $5$, so it is the one solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: x^2-30*x+81 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2\\log_{4}{(x - 5)} - \\log_{4}{(5x - 14)} = 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 takes $-56$ from the right side of line 6 to the left as $-56$, where it becomes $+56$ there.",
                  "reason": "A sign lost: a number taken to the other side of an equation changes its sign."
                },
                {
                  "step": "Line 7 written right is $x^2 - 30x + 81 = 0$.",
                  "reason": "Adding the same number to both sides: $-20x + 56$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\log_{30}{(x + 2)} + \\log_{30}{(x + 15)} = 1$, and write that line right.",
              "given": [
                "$\\log_{30}{(x + 2)} + \\log_{30}{(x + 15)} = 1$",
                "Both logarithms are defined exactly when $x > -2$.",
                "$(x + 2)(x + 15) = 30$",
                "$x^2 + 17x + 30 = 30$",
                "$x^2 + 17x + 60 = 0$",
                "$(x + 12)(x + 5) = 0$",
                "Either $x = -12$ or $x = -5$",
                "Neither value is greater than $-2$, so the equation has no solution."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x^2+17*x = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\log_{30}{(x + 2)} + \\log_{30}{(x + 15)} = 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 adds $30$ on the left, where line 4 has $30$ on the right: taking $30$ to the left adds $-30$ there.",
                  "reason": "A sign lost: a number taken to the other side of an equation changes its sign."
                },
                {
                  "step": "Line 5 written right is $x^2 + 17x = 0$.",
                  "reason": "Adding the same number to both sides: $-30$ is added to both sides."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t219-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an inequality for $x$ with no logarithm, or two joined by and: The logarithm to the base 3 of the number 5 more than twice $x$ is less than 2.",
            "lines": [
              {
                "step": "Write this sentence as an inequality for $x$ with no logarithm, or two joined by and: The logarithm to the base 3 of the number 5 more than twice $x$ is less than 2.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{3}{(2x + 5)} < 2$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "The logarithm is defined exactly when $2x + 5 > 0$.",
                "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
              },
              {
                "step": "$\\log_{3}{(2x + 5)} < \\log_{3}{3^{2}}$",
                "reason": "Logarithm: $\\log_a a^p = p$, so $2 = \\log_{3}{3^{2}}$."
              },
              {
                "step": "$2x + 5 < 3^{2}$",
                "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
              },
              {
                "step": "Together with the domain: $2x + 5 > 0$ and $2x + 5 < 3^{2}$",
                "reason": "Domain of a logarithm: a solution must make the logarithm defined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an inequality for $x$ with no logarithm, or two joined by and: The number 4 less than 3 times $x$ has a logarithm to the base 2 that is greater than 3.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "3*x-4 > 2^3",
              "lines": [
                {
                  "step": "Write this sentence as an inequality for $x$ with no logarithm, or two joined by and: The number 4 less than 3 times $x$ has a logarithm to the base 2 that is greater than 3.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{(3x - 4)} > 3$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The logarithm is defined exactly when $3x - 4 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{2}{(3x - 4)} > \\log_{2}{2^{3}}$",
                  "reason": "Logarithm: $\\log_a a^p = p$, so $3 = \\log_{2}{2^{3}}$."
                },
                {
                  "step": "$3x - 4 > 2^{3}$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Every such $x$ has $3x - 4 > 0$, so the one inequality is the whole condition: $3x - 4 > 2^{3}$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality for $x$ with no logarithm, or two joined by and: Taking the logarithm to the base 5 of the number 3 more than 4 times $x$ gives a number at most 2.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "4*x+3 > 0 and 4*x+3 <= 5^2",
              "lines": [
                {
                  "step": "Write this sentence as an inequality for $x$ with no logarithm, or two joined by and: Taking the logarithm to the base 5 of the number 3 more than 4 times $x$ gives a number at most 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{5}{(4x + 3)} \\le 2$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The logarithm is defined exactly when $4x + 3 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{5}{(4x + 3)} \\le \\log_{5}{5^{2}}$",
                  "reason": "Logarithm: $\\log_a a^p = p$, so $2 = \\log_{5}{5^{2}}$."
                },
                {
                  "step": "$4x + 3 \\le 5^{2}$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Together with the domain: $4x + 3 > 0$ and $4x + 3 \\le 5^{2}$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality for $x$ with no logarithm, or two joined by and: The logarithm to the base 10 of the number 6 less than 7 times $x$ is at least 2.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "7*x-6 >= 10^2",
              "lines": [
                {
                  "step": "Write this sentence as an inequality for $x$ with no logarithm, or two joined by and: The logarithm to the base 10 of the number 6 less than 7 times $x$ is at least 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{(7x - 6)} \\ge 2$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The logarithm is defined exactly when $7x - 6 > 0$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "$\\log_{10}{(7x - 6)} \\ge \\log_{10}{10^{2}}$",
                  "reason": "Logarithm: $\\log_a a^p = p$, so $2 = \\log_{10}{10^{2}}$."
                },
                {
                  "step": "$7x - 6 \\ge 10^{2}$",
                  "reason": "Logarithm is increasing: for a base greater than 1 a greater positive number has a greater logarithm, so the order of two logarithms is the order of their numbers."
                },
                {
                  "step": "Every such $x$ has $7x - 6 > 0$, so the one inequality is the whole condition: $7x - 6 \\ge 10^{2}$",
                  "reason": "Domain of a logarithm: a solution must make the logarithm defined."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = \\log_{\\frac{1}{3}}{(x + 3)} + 2$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\log_{\\frac{1}{3}}{(x + 3)} + 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The logarithm is defined exactly when $x + 3 > 0$, so the graph lies to the right of the line $x = -3$.",
                "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
              },
              {
                "step": "At $y = 0$: $\\log_{\\frac{1}{3}}{(x + 3)} = -2$, so $x + 3 = \\left(\\dfrac{1}{3}\\right)^{-2} = 9$, and the graph crosses the $x$-axis at $(6, 0)$.",
                "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
              },
              {
                "step": "At $x = 0$: $y = \\log_{\\frac{1}{3}}{3} + 2 = 1$, so the graph crosses the $y$-axis at $(0, 1)$.",
                "reason": "Logarithm: $\\left(\\dfrac{1}{3}\\right)^{-1} = 3$ means $\\log_{\\frac{1}{3}}{3} = -1$."
              },
              {
                "step": "As $x$ comes down toward $-3$ the values of $y$ rise without end: the graph comes closer and closer to the line $x = -3$ and never meets it.",
                "reason": "Asymptote: $\\log_{\\frac{1}{3}}{u} = -\\log_{3}{u}$ by the change of base, and inputs close to 0 give large negative values of $\\log_{3}{u}$."
              },
              {
                "step": "The curve through these points, which falls from left to right, is the graph.",
                "reason": "Change of base and Logarithm is increasing: $\\log_{\\frac{1}{3}}{u} = -\\log_{3}{u}$, and $\\log_{3}{u}$ rises as $u$ rises.",
                "figure": {
                  "file": "logarithmic-equations-and-inequalities-1.svg",
                  "alt": "A curve falling from left to right, coming close to the dashed line x = −3 as it goes up, crossing the x-axis at (6, 0) and the y-axis at (0, 1)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = \\log_{\\frac{1}{2}}{(x + 2)} - 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-\\dfrac{7}{4}, 0)$",
                  "$(0, -3)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -2$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{\\frac{1}{2}}{(x + 2)} - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $x + 2 > 0$, so the graph lies to the right of the line $x = -2$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "At $y = 0$: $\\log_{\\frac{1}{2}}{(x + 2)} = 2$, so $x + 2 = \\left(\\dfrac{1}{2}\\right)^{2} = \\dfrac{1}{4}$, and the graph crosses the $x$-axis at $(-\\dfrac{7}{4}, 0)$.",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "At $x = 0$: $y = \\log_{\\frac{1}{2}}{2} - 2 = -3$, so the graph crosses the $y$-axis at $(0, -3)$.",
                  "reason": "Logarithm: $\\left(\\dfrac{1}{2}\\right)^{-1} = 2$ means $\\log_{\\frac{1}{2}}{2} = -1$."
                },
                {
                  "step": "As $x$ comes down toward $-2$ the values of $y$ rise without end: the graph comes closer and closer to the line $x = -2$ and never meets it.",
                  "reason": "Asymptote: $\\log_{\\frac{1}{2}}{u} = -\\log_{2}{u}$ by the change of base, and inputs close to 0 give large negative values of $\\log_{2}{u}$."
                },
                {
                  "step": "The curve through these points, which falls from left to right, is the graph.",
                  "reason": "Change of base and Logarithm is increasing: $\\log_{\\frac{1}{2}}{u} = -\\log_{2}{u}$, and $\\log_{2}{u}$ rises as $u$ rises.",
                  "figure": {
                    "file": "logarithmic-equations-and-inequalities-2.svg",
                    "alt": "A curve falling from left to right, coming close to the dashed line x = −2 as it goes up, crossing the x-axis at (−7/4, 0) and the y-axis at (0, −3)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\log_{\\frac{1}{5}}{(x + 1)} + 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 1)$",
                  "$(4, 0)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -1$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{\\frac{1}{5}}{(x + 1)} + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $x + 1 > 0$, so the graph lies to the right of the line $x = -1$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "At $y = 0$: $\\log_{\\frac{1}{5}}{(x + 1)} = -1$, so $x + 1 = \\left(\\dfrac{1}{5}\\right)^{-1} = 5$, and the graph crosses the $x$-axis at $(4, 0)$.",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "At $x = 0$: $y = \\log_{\\frac{1}{5}}{1} + 1 = 1$, so the graph crosses the $y$-axis at $(0, 1)$.",
                  "reason": "Logarithm: $\\left(\\dfrac{1}{5}\\right)^{0} = 1$ means $\\log_{\\frac{1}{5}}{1} = 0$."
                },
                {
                  "step": "As $x$ comes down toward $-1$ the values of $y$ rise without end: the graph comes closer and closer to the line $x = -1$ and never meets it.",
                  "reason": "Asymptote: $\\log_{\\frac{1}{5}}{u} = -\\log_{5}{u}$ by the change of base, and inputs close to 0 give large negative values of $\\log_{5}{u}$."
                },
                {
                  "step": "The curve through these points, which falls from left to right, is the graph.",
                  "reason": "Change of base and Logarithm is increasing: $\\log_{\\frac{1}{5}}{u} = -\\log_{5}{u}$, and $\\log_{5}{u}$ rises as $u$ rises.",
                  "figure": {
                    "file": "logarithmic-equations-and-inequalities-3.svg",
                    "alt": "A curve falling from left to right, coming close to the dashed line x = −1 as it goes up, crossing the x-axis at (4, 0) and the y-axis at (0, 1)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\log_{\\frac{1}{4}}{(x + 4)} - 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-\\dfrac{15}{4}, 0)$",
                  "$(0, -2)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -4$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{\\frac{1}{4}}{(x + 4)} - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm is defined exactly when $x + 4 > 0$, so the graph lies to the right of the line $x = -4$.",
                  "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "At $y = 0$: $\\log_{\\frac{1}{4}}{(x + 4)} = 1$, so $x + 4 = \\left(\\dfrac{1}{4}\\right)^{1} = \\dfrac{1}{4}$, and the graph crosses the $x$-axis at $(-\\dfrac{15}{4}, 0)$.",
                  "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
                },
                {
                  "step": "At $x = 0$: $y = \\log_{\\frac{1}{4}}{4} - 1 = -2$, so the graph crosses the $y$-axis at $(0, -2)$.",
                  "reason": "Logarithm: $\\left(\\dfrac{1}{4}\\right)^{-1} = 4$ means $\\log_{\\frac{1}{4}}{4} = -1$."
                },
                {
                  "step": "As $x$ comes down toward $-4$ the values of $y$ rise without end: the graph comes closer and closer to the line $x = -4$ and never meets it.",
                  "reason": "Asymptote: $\\log_{\\frac{1}{4}}{u} = -\\log_{4}{u}$ by the change of base, and inputs close to 0 give large negative values of $\\log_{4}{u}$."
                },
                {
                  "step": "The curve through these points, which falls from left to right, is the graph.",
                  "reason": "Change of base and Logarithm is increasing: $\\log_{\\frac{1}{4}}{u} = -\\log_{4}{u}$, and $\\log_{4}{u}$ rises as $u$ rises.",
                  "figure": {
                    "file": "logarithmic-equations-and-inequalities-4.svg",
                    "alt": "A curve falling from left to right, coming close to the dashed line x = −4 as it goes up, crossing the x-axis at (−15/4, 0) and the y-axis at (0, −2)."
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
      "id": "t219-p1",
      "method": "direct proof",
      "statement": "Let $a$ be a positive number other than 1, and let $x$ and $y$ be positive numbers with $\\log_a x = \\log_a y$. Then $x = y$.",
      "idea": "Give the common value of the two logarithms a letter and write each equation in exponential form. Then $x$ and $y$ are the same power of $a$.",
      "lines": [
        {
          "line": "Let $c$ be the common value, so that $\\log_a x = c$ and $\\log_a y = c$.",
          "reason": "The hypothesis: the two logarithms are equal."
        },
        {
          "line": "Then $a^c = x$.",
          "reason": "Logarithm: $\\log_a x = c$ means $a^c = x$."
        },
        {
          "line": "Also $a^c = y$.",
          "reason": "Logarithm: $\\log_a y = c$ means $a^c = y$."
        },
        {
          "line": "Therefore $x = y$.",
          "reason": "Transitive property: both numbers are equal to $a^c$."
        }
      ]
    },
    {
      "id": "t219-p2",
      "method": "direct proof",
      "statement": "Let $a$ and $c$ be positive numbers, and let $b$ be a positive number other than 1. Then $a^{\\log_b c} = c^{\\log_b a}$.",
      "idea": "Each side has a logarithm as its exponent, so take the logarithm to the base $b$ of each side. The log of a power brings each exponent down, and both sides become the same product of two logarithms. Two numbers with the same logarithm are the same power of $b$.",
      "lines": [
        {
          "line": "The numbers $a^{\\log_b c}$ and $c^{\\log_b a}$ are positive, so each has a logarithm to the base $b$.",
          "reason": "Logarithm: a power of a positive number is positive."
        },
        {
          "line": "Then $\\log_b a^{\\log_b c} = \\log_b c \\cdot \\log_b a$.",
          "reason": "Log of a power: the exponent $\\log_b c$ comes down in front."
        },
        {
          "line": "Also $\\log_b c^{\\log_b a} = \\log_b a \\cdot \\log_b c$.",
          "reason": "Log of a power: the exponent $\\log_b a$ comes down in front."
        },
        {
          "line": "The products $\\log_b c \\cdot \\log_b a$ and $\\log_b a \\cdot \\log_b c$ are equal.",
          "reason": "The commutative law of multiplication, from arithmetic: the order of two factors does not change a product."
        },
        {
          "line": "So $\\log_b a^{\\log_b c} = \\log_b c^{\\log_b a}$; let $d$ be this number.",
          "reason": "Transitive property: lines 2, 3 and 4 form a chain of equal numbers."
        },
        {
          "line": "Then $a^{\\log_b c} = b^d$ and $c^{\\log_b a} = b^d$.",
          "reason": "Log to exponential form: $\\log_b u = d$ means $u = b^d$."
        },
        {
          "line": "Therefore $a^{\\log_b c} = c^{\\log_b a}$.",
          "reason": "Transitive property: both sides are equal to $b^d$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t219-s1",
      "method": "direct proof",
      "statement": "Prove that if $a$ is a number greater than 1 and $x$ and $y$ are positive numbers with $\\log_a x < \\log_a y$, then $x < y$. Facts it may use: Log to exponential form, Exponential function is increasing, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Let $c = \\log_a x$ and $d = \\log_a y$, so that $c < d$.",
            "reason": "The hypothesis: $\\log_a x < \\log_a y$."
          },
          {
            "line": "Then $x = a^c$ and $y = a^d$.",
            "reason": "Log to exponential form: $\\log_a u = c$ means $u = a^c$."
          },
          {
            "line": "Also $a^c < a^d$.",
            "reason": "Exponential function is increasing: for a base greater than 1, a greater exponent gives a greater power, and $c < d$."
          },
          {
            "line": "Therefore $x < y$.",
            "reason": "Substituting a value: line 2 is put in line 3."
          }
        ]
      }
    },
    {
      "id": "t219-s4",
      "method": "direct proof",
      "statement": "Prove that if a positive whole number $n$ has $k$ digits, then $n^2$ has $2k - 1$ or $2k$ digits. Facts it may use: Number of digits, powers and roots of positive numbers keep the order, power law, strict and nonstrict inequality.",
      "check": {
        "proof": [
          {
            "line": "Since $n$ has $k$ digits, $10^{k-1} \\le n < 10^{k}$.",
            "reason": "Number of digits: a positive whole number has $k$ digits exactly when it is at least $10^{k-1}$ and less than $10^{k}$."
          },
          {
            "line": "So $\\left(10^{k-1}\\right)^2 \\le n^2 < \\left(10^{k}\\right)^2$.",
            "reason": "Powers and roots of positive numbers keep the order: the three numbers are positive, and each is squared."
          },
          {
            "line": "So $10^{2k-2} \\le n^2 < 10^{2k}$.",
            "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
          },
          {
            "line": "Since $n^2 \\ge 10^{2k-2}$, the number $n^2$ has at least $2k - 1$ digits.",
            "reason": "Number of digits: a whole number with at most $2k - 2$ digits is less than $10^{2k-2}$."
          },
          {
            "line": "Since $n^2 < 10^{2k}$, the number $n^2$ has at most $2k$ digits.",
            "reason": "Number of digits: a whole number with at least $2k + 1$ digits is at least $10^{2k}$."
          },
          {
            "line": "Therefore $n^2$ has $2k - 1$ or $2k$ digits.",
            "reason": "Strict and nonstrict inequality: the only whole numbers from $2k - 1$ to $2k$ are these two."
          }
        ]
      }
    },
    {
      "id": "t219-s5",
      "method": "direct proof",
      "statement": "Prove that for a positive number $a$ other than 1, real numbers $b$ and $c$ with $b < c$, and a real number $d$, the equation $\\log_a (x - b) + \\log_a (x - c) = d$ has exactly one solution. Facts it may use: Domain of a logarithm, Log of a product, Log to exponential form, multiplying out, discriminant, Trivial Inequality, factored form, a product is positive when its factors have the same sign and negative when they differ, a quadratic has at most two roots.",
      "check": {
        "proof": [
          {
            "line": "Both logarithms are defined exactly when $x > c$.",
            "reason": "Domain of a logarithm: $x - b > 0$ and $x - c > 0$ must both hold, and $b < c$."
          },
          {
            "line": "For $x > c$ the equation says that $\\log_a ((x - b)(x - c)) = d$.",
            "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
          },
          {
            "line": "That is, $(x - b)(x - c) = a^d$.",
            "reason": "Log to exponential form: $\\log_a u = d$ means $u = a^d$."
          },
          {
            "line": "Let $g(x) = (x - b)(x - c) - a^d$.",
            "reason": "Function notation: $g$ is named by its rule, the left side of line 3 less its right side."
          },
          {
            "line": "Then $g(x) = x^2 - (b + c)x + bc - a^d$.",
            "reason": "Multiplying out: each term of one bracket multiplies each term of the other."
          },
          {
            "line": "The discriminant of $g$ is $(b + c)^2 - 4(bc - a^d)$, which is $(b - c)^2 + 4a^d$.",
            "reason": "Square of a binomial: both expressions multiply out to $b^2 - 2bc + c^2 + 4a^d$."
          },
          {
            "line": "This discriminant is positive.",
            "reason": "Trivial Inequality: the square $(b - c)^2$ is at least 0, and $a^d$ is positive."
          },
          {
            "line": "So $g$ has two different real roots, $r < s$.",
            "reason": "Positive, zero, negative discriminant: a positive discriminant gives two different real roots."
          },
          {
            "line": "So $g(x) = (x - r)(x - s)$.",
            "reason": "Factored form: $g$ has the leading coefficient 1 and the roots $r$ and $s$."
          },
          {
            "line": "Also $g(c) = -a^d$, which is negative.",
            "reason": "Substituting a value: at $x = c$ the product $(x - b)(x - c)$ is 0."
          },
          {
            "line": "So $(c - r)(c - s) < 0$.",
            "reason": "Substituting a value: $c$ is put in place of $x$ in the factored form, and $g(c)$ is negative."
          },
          {
            "line": "So $r < c < s$.",
            "reason": "A product is positive when its factors have the same sign and negative when they differ: the factors differ in sign, and $c - r$ is the greater one, so it is positive and $c - s$ is negative."
          },
          {
            "line": "Since $s > c$, both logarithms are defined at $s$, and $s$ is a solution.",
            "reason": "Domain of a logarithm: lines 2 and 3 hold for every $x > c$, and $g(s) = 0$."
          },
          {
            "line": "Since $r < c$, $\\log_a (r - c)$ is not defined, and $r$ is not a solution.",
            "reason": "Domain of a logarithm: a logarithm is defined only for a positive number."
          },
          {
            "line": "Therefore the equation has exactly one solution.",
            "reason": "A quadratic has at most two roots: no number other than $r$ and $s$ satisfies line 3."
          }
        ]
      }
    }
  ]
}
