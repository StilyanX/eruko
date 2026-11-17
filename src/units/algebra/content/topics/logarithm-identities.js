export default {
  "number": 217,
  "title": "Logarithm identities",
  "section": 14,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "424-433"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $\\log_{12}{8} + \\log_{12}{18}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "2",
    "solution": [
      "Evaluate $\\log_{12}{8} + \\log_{12}{18}$.",
      "$\\log_{12}{8} + \\log_{12}{18} = \\log_{12}{\\left(8 \\cdot 18\\right)}$",
      "$\\log_{12}{\\left(8 \\cdot 18\\right)} = \\log_{12}{144}$",
      "$\\log_{12}{144} = 2$"
    ]
  },
  "ideas": [
    {
      "name": "Log of a power",
      "concrete": "Since $5^{2} = 25$, $\\log_{5}{25} = 2$. The cube of 25 is $25^{3} = 5^{6}$, so $\\log_{5}{25^{3}} = 6$, which is $3 \\cdot 2$: the exponent 3 comes down in front of $\\log_{5}{25}$.",
      "general": "For a positive number $a$ other than 1, a positive number $b$ and a real number $c$, $\\log_a b^c = c\\log_a b$."
    },
    {
      "name": "Log of a product",
      "concrete": "Since $2^{2} = 4$ and $2^{5} = 32$, $\\log_{2}{4} + \\log_{2}{32} = 2 + 5 = 7$. The product is $4 \\cdot 32 = 128 = 2^{7}$, so $\\log_{2}{(4 \\cdot 32)} = 7$ as well.",
      "general": "For a positive number $a$ other than 1 and positive numbers $b$ and $c$, $\\log_a b + \\log_a c = \\log_a bc$. The two logarithms must have the same base."
    },
    {
      "name": "Log of a quotient",
      "concrete": "Since $3^{5} = 243$ and $3^{2} = 9$, $\\log_{3}{243} - \\log_{3}{9} = 5 - 2 = 3$. The quotient is $\\dfrac{243}{9} = 27 = 3^{3}$, so $\\log_{3}{\\dfrac{243}{9}} = 3$ as well.",
      "general": "For a positive number $a$ other than 1 and positive numbers $b$ and $c$, $\\log_a b - \\log_a c = \\log_a \\dfrac{b}{c}$. The two logarithms must have the same base."
    },
    {
      "name": "Change of base",
      "concrete": "Since $100^{3} = 1\\,000\\,000$, $\\log_{100}{1\\,000\\,000} = 3$. In the base 10, $\\log_{10}{1\\,000\\,000} = 6$ and $\\log_{10}{100} = 2$, and $\\dfrac{6}{2} = 3$: the quotient of the two logarithms in the base 10 is the logarithm to the base 100.",
      "general": "For positive numbers $a$ and $c$ other than 1 and a positive number $b$, $\\log_c b = \\dfrac{\\log_a b}{\\log_a c}$. This is the **change of base**: a logarithm to the base $c$ is a quotient of two logarithms in another base $a$."
    },
    {
      "name": "Powers on base and argument",
      "concrete": "Since $4^{2} = 16$, $\\log_{4}{16} = 2$. Cubing both numbers gives $4^{3} = 64$ and $16^{3} = 4096$, and $64^{2} = 4096$, so $\\log_{64}{4096} = 2$ as well.",
      "general": "The number whose logarithm is taken is the **argument** of the logarithm. For a positive number $a$ other than 1, a positive number $b$ and a real number $n$ other than 0, $\\log_{a^n} b^n = \\log_a b$: raising the base and the argument to the same power leaves the logarithm as it was."
    }
  ],
  "kinds": [
    {
      "id": "t217-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\log_{5}{125^{16}}$.",
            "lines": [
              {
                "step": "Evaluate $\\log_{5}{125^{16}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{5}{125^{16}} = 16\\log_{5}{125}$",
                "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $16$ down in front."
              },
              {
                "step": "$16\\log_{5}{125} = 16 \\cdot 3$",
                "reason": "Logarithm: $5^{3} = 125$ means $\\log_{5}{125} = 3$."
              },
              {
                "step": "$16 \\cdot 3 = 48$",
                "reason": "Order of operations, from arithmetic: the product is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\log_{2}{32^{-6}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-30",
              "lines": [
                {
                  "step": "Evaluate $\\log_{2}{32^{-6}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{32^{-6}} = -6\\log_{2}{32}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $-6$ down in front."
                },
                {
                  "step": "$-6\\log_{2}{32} = -6 \\cdot 5$",
                  "reason": "Logarithm: $2^{5} = 32$ means $\\log_{2}{32} = 5$."
                },
                {
                  "step": "$-6 \\cdot 5 = -30$",
                  "reason": "Order of operations, from arithmetic: the product is worked out."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{3}{81^{7/2}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "14",
              "lines": [
                {
                  "step": "Evaluate $\\log_{3}{81^{7/2}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{3}{81^{7/2}} = \\dfrac{7}{2}\\log_{3}{81}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $\\dfrac{7}{2}$ down in front."
                },
                {
                  "step": "$\\dfrac{7}{2}\\log_{3}{81} = \\dfrac{7}{2} \\cdot 4$",
                  "reason": "Logarithm: $3^{4} = 81$ means $\\log_{3}{81} = 4$."
                },
                {
                  "step": "$\\dfrac{7}{2} \\cdot 4 = 14$",
                  "reason": "Order of operations, from arithmetic: the product is worked out."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{7}{49^{15}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "30",
              "lines": [
                {
                  "step": "Evaluate $\\log_{7}{49^{15}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{7}{49^{15}} = 15\\log_{7}{49}$",
                  "reason": "Log of a power: $\\log_a b^c = c\\log_a b$ brings the exponent $15$ down in front."
                },
                {
                  "step": "$15\\log_{7}{49} = 15 \\cdot 2$",
                  "reason": "Logarithm: $7^{2} = 49$ means $\\log_{7}{49} = 2$."
                },
                {
                  "step": "$15 \\cdot 2 = 30$",
                  "reason": "Order of operations, from arithmetic: the product is worked out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\log_{6}{4} + \\log_{6}{54}$.",
            "lines": [
              {
                "step": "Evaluate $\\log_{6}{4} + \\log_{6}{54}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{6}{4} + \\log_{6}{54} = \\log_{6}{\\left(4 \\cdot 54\\right)}$",
                "reason": "Log of a product: the two logarithms have the same base $6$, so their sum is the logarithm of the product."
              },
              {
                "step": "$\\log_{6}{\\left(4 \\cdot 54\\right)} = \\log_{6}{216}$",
                "reason": "Order of operations, from arithmetic: the product in the bracket is worked out, $4 \\cdot 54 = 216$."
              },
              {
                "step": "$\\log_{6}{216} = 3$",
                "reason": "Logarithm: $6^{3} = 216$ means $\\log_{6}{216} = 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\log_{10}{8} + \\log_{10}{125}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3",
              "lines": [
                {
                  "step": "Evaluate $\\log_{10}{8} + \\log_{10}{125}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{8} + \\log_{10}{125} = \\log_{10}{\\left(8 \\cdot 125\\right)}$",
                  "reason": "Log of a product: the two logarithms have the same base $10$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$\\log_{10}{\\left(8 \\cdot 125\\right)} = \\log_{10}{1000}$",
                  "reason": "Order of operations, from arithmetic: the product in the bracket is worked out, $8 \\cdot 125 = 1000$."
                },
                {
                  "step": "$\\log_{10}{1000} = 3$",
                  "reason": "Logarithm: $10^{3} = 1000$ means $\\log_{10}{1000} = 3$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{2}{20} + \\log_{2}{\\dfrac{16}{5}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "6",
              "lines": [
                {
                  "step": "Evaluate $\\log_{2}{20} + \\log_{2}{\\dfrac{16}{5}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{20} + \\log_{2}{\\dfrac{16}{5}} = \\log_{2}{\\left(20 \\cdot \\dfrac{16}{5}\\right)}$",
                  "reason": "Log of a product: the two logarithms have the same base $2$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$\\log_{2}{\\left(20 \\cdot \\dfrac{16}{5}\\right)} = \\log_{2}{64}$",
                  "reason": "Order of operations, from arithmetic: the product in the bracket is worked out, $20 \\cdot \\dfrac{16}{5} = 64$."
                },
                {
                  "step": "$\\log_{2}{64} = 6$",
                  "reason": "Logarithm: $2^{6} = 64$ means $\\log_{2}{64} = 6$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{14}{28} + \\log_{14}{7}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{14}{28} + \\log_{14}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{14}{28} + \\log_{14}{7} = \\log_{14}{\\left(28 \\cdot 7\\right)}$",
                  "reason": "Log of a product: the two logarithms have the same base $14$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$\\log_{14}{\\left(28 \\cdot 7\\right)} = \\log_{14}{196}$",
                  "reason": "Order of operations, from arithmetic: the product in the bracket is worked out, $28 \\cdot 7 = 196$."
                },
                {
                  "step": "$\\log_{14}{196} = 2$",
                  "reason": "Logarithm: $14^{2} = 196$ means $\\log_{14}{196} = 2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\log_{3}{162} - \\log_{3}{6}$.",
            "lines": [
              {
                "step": "Evaluate $\\log_{3}{162} - \\log_{3}{6}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{3}{162} - \\log_{3}{6} = \\log_{3}{\\dfrac{162}{6}}$",
                "reason": "Log of a quotient: the two logarithms have the same base $3$, so their difference is the logarithm of the quotient."
              },
              {
                "step": "$\\log_{3}{\\dfrac{162}{6}} = \\log_{3}{27}$",
                "reason": "Order of operations, from arithmetic: the quotient is worked out, $\\dfrac{162}{6} = 27$."
              },
              {
                "step": "$\\log_{3}{27} = 3$",
                "reason": "Logarithm: $3^{3} = 27$ means $\\log_{3}{27} = 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\log_{2}{80} - \\log_{2}{5}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4",
              "lines": [
                {
                  "step": "Evaluate $\\log_{2}{80} - \\log_{2}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{80} - \\log_{2}{5} = \\log_{2}{\\dfrac{80}{5}}$",
                  "reason": "Log of a quotient: the two logarithms have the same base $2$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\log_{2}{\\dfrac{80}{5}} = \\log_{2}{16}$",
                  "reason": "Order of operations, from arithmetic: the quotient is worked out, $\\dfrac{80}{5} = 16$."
                },
                {
                  "step": "$\\log_{2}{16} = 4$",
                  "reason": "Logarithm: $2^{4} = 16$ means $\\log_{2}{16} = 4$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{5}{75} - \\log_{5}{3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{5}{75} - \\log_{5}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{5}{75} - \\log_{5}{3} = \\log_{5}{\\dfrac{75}{3}}$",
                  "reason": "Log of a quotient: the two logarithms have the same base $5$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\log_{5}{\\dfrac{75}{3}} = \\log_{5}{25}$",
                  "reason": "Order of operations, from arithmetic: the quotient is worked out, $\\dfrac{75}{3} = 25$."
                },
                {
                  "step": "$\\log_{5}{25} = 2$",
                  "reason": "Logarithm: $5^{2} = 25$ means $\\log_{5}{25} = 2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{6}{5} - \\log_{6}{180}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{6}{5} - \\log_{6}{180}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{6}{5} - \\log_{6}{180} = \\log_{6}{\\dfrac{5}{180}}$",
                  "reason": "Log of a quotient: the two logarithms have the same base $6$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\log_{6}{\\dfrac{5}{180}} = \\log_{6}{\\dfrac{1}{36}}$",
                  "reason": "Order of operations, from arithmetic: the quotient is worked out, $\\dfrac{5}{180} = \\dfrac{1}{36}$."
                },
                {
                  "step": "$\\log_{6}{\\dfrac{1}{36}} = -2$",
                  "reason": "Logarithm: $6^{-2} = \\dfrac{1}{36}$ means $\\log_{6}{\\dfrac{1}{36}} = -2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{\\log_{7}{32}}{\\log_{7}{8}}$.",
            "lines": [
              {
                "step": "Evaluate $\\dfrac{\\log_{7}{32}}{\\log_{7}{8}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{\\log_{7}{32}}{\\log_{7}{8}} = \\log_{8}{32}$",
                "reason": "Change of base: the quotient of the logarithms of $32$ and $8$ in one base is the logarithm of $32$ to the base $8$."
              },
              {
                "step": "$\\log_{8}{32} = \\dfrac{5}{3}$",
                "reason": "Logarithm: $8^{5/3} = \\left(8^{1/3}\\right)^{5} = 2^{5} = 32$ means $\\log_{8}{32} = \\dfrac{5}{3}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{\\log_{5}{81}}{\\log_{5}{3}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{\\log_{5}{81}}{\\log_{5}{3}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\log_{5}{81}}{\\log_{5}{3}} = \\log_{3}{81}$",
                  "reason": "Change of base: the quotient of the logarithms of $81$ and $3$ in one base is the logarithm of $81$ to the base $3$."
                },
                {
                  "step": "$\\log_{3}{81} = 4$",
                  "reason": "Logarithm: $3^{4} = 81$ means $\\log_{3}{81} = 4$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{\\log_{2}{9}}{\\log_{2}{27}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2/3",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{\\log_{2}{9}}{\\log_{2}{27}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\log_{2}{9}}{\\log_{2}{27}} = \\log_{27}{9}$",
                  "reason": "Change of base: the quotient of the logarithms of $9$ and $27$ in one base is the logarithm of $9$ to the base $27$."
                },
                {
                  "step": "$\\log_{27}{9} = \\dfrac{2}{3}$",
                  "reason": "Logarithm: $27^{2/3} = \\left(27^{1/3}\\right)^{2} = 3^{2} = 9$ means $\\log_{27}{9} = \\dfrac{2}{3}$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{\\log_{3}{1000}}{\\log_{3}{100}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3/2",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{\\log_{3}{1000}}{\\log_{3}{100}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\log_{3}{1000}}{\\log_{3}{100}} = \\log_{100}{1000}$",
                  "reason": "Change of base: the quotient of the logarithms of $1000$ and $100$ in one base is the logarithm of $1000$ to the base $100$."
                },
                {
                  "step": "$\\log_{100}{1000} = \\dfrac{3}{2}$",
                  "reason": "Logarithm: $100^{3/2} = \\left(100^{1/2}\\right)^{3} = 10^{3} = 1000$ means $\\log_{100}{1000} = \\dfrac{3}{2}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $7^{\\log_{49}{25}}$.",
            "lines": [
              {
                "step": "Evaluate $7^{\\log_{49}{25}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{49}{25} = \\log_{7}{5}$",
                "reason": "Powers on base and argument: $\\log_{a^n} b^n = \\log_a b$, with $49 = 7^{2}$ and $25 = 5^{2}$."
              },
              {
                "step": "$7^{\\log_{49}{25}} = 7^{\\log_{7}{5}}$",
                "reason": "Substituting a value: $\\log_{7}{5}$ is put in place of $\\log_{49}{25}$."
              },
              {
                "step": "$7^{\\log_{7}{5}} = 5$",
                "reason": "Logarithm: $a^{\\log_a b} = b$, so raising $7$ to the power that gives $5$ gives $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $2^{\\log_{8}{343}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7",
              "lines": [
                {
                  "step": "Evaluate $2^{\\log_{8}{343}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{8}{343} = \\log_{2}{7}$",
                  "reason": "Powers on base and argument: $\\log_{a^n} b^n = \\log_a b$, with $8 = 2^{3}$ and $343 = 7^{3}$."
                },
                {
                  "step": "$2^{\\log_{8}{343}} = 2^{\\log_{2}{7}}$",
                  "reason": "Substituting a value: $\\log_{2}{7}$ is put in place of $\\log_{8}{343}$."
                },
                {
                  "step": "$2^{\\log_{2}{7}} = 7$",
                  "reason": "Logarithm: $a^{\\log_a b} = b$, so raising $2$ to the power that gives $7$ gives $7$."
                }
              ]
            },
            {
              "prompt": "Evaluate $3^{\\log_{9}{\\dfrac{4}{25}}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2/5",
              "lines": [
                {
                  "step": "Evaluate $3^{\\log_{9}{\\dfrac{4}{25}}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{9}{\\dfrac{4}{25}} = \\log_{3}{\\dfrac{2}{5}}$",
                  "reason": "Powers on base and argument: $\\log_{a^n} b^n = \\log_a b$, with $9 = 3^{2}$ and $\\dfrac{4}{25} = \\left(\\dfrac{2}{5}\\right)^{2}$."
                },
                {
                  "step": "$3^{\\log_{9}{\\dfrac{4}{25}}} = 3^{\\log_{3}{\\dfrac{2}{5}}}$",
                  "reason": "Substituting a value: $\\log_{3}{\\dfrac{2}{5}}$ is put in place of $\\log_{9}{\\dfrac{4}{25}}$."
                },
                {
                  "step": "$3^{\\log_{3}{\\dfrac{2}{5}}} = \\dfrac{2}{5}$",
                  "reason": "Logarithm: $a^{\\log_a b} = b$, so raising $3$ to the power that gives $\\dfrac{2}{5}$ gives $\\dfrac{2}{5}$."
                }
              ]
            },
            {
              "prompt": "Evaluate $5^{\\log_{125}{64}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4",
              "lines": [
                {
                  "step": "Evaluate $5^{\\log_{125}{64}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{125}{64} = \\log_{5}{4}$",
                  "reason": "Powers on base and argument: $\\log_{a^n} b^n = \\log_a b$, with $125 = 5^{3}$ and $64 = 4^{3}$."
                },
                {
                  "step": "$5^{\\log_{125}{64}} = 5^{\\log_{5}{4}}$",
                  "reason": "Substituting a value: $\\log_{5}{4}$ is put in place of $\\log_{125}{64}$."
                },
                {
                  "step": "$5^{\\log_{5}{4}} = 4$",
                  "reason": "Logarithm: $a^{\\log_a b} = b$, so raising $5$ to the power that gives $4$ gives $4$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t217-k2",
      "forms": [
        {
          "example": {
            "problem": "Find a number $x$ with $3\\log_{5}{2} + 2\\log_{5}{3} = \\log_{5}{x}$.",
            "lines": [
              {
                "step": "Find a number $x$ with $3\\log_{5}{2} + 2\\log_{5}{3} = \\log_{5}{x}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{5}{2^{3}} + \\log_{5}{3^{2}} = \\log_{5}{x}$",
                "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
              },
              {
                "step": "$\\log_{5}{\\left(2^{3} \\cdot 3^{2}\\right)} = \\log_{5}{x}$",
                "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
              },
              {
                "step": "$x = 2^{3} \\cdot 3^{2}$",
                "reason": "Logarithm: the line above says that $x$ is $5$ raised to the power $\\log_{5}{\\left(2^{3} \\cdot 3^{2}\\right)}$, and $a^{\\log_a b} = b$."
              },
              {
                "step": "$x = 8 \\cdot 9$",
                "reason": "The definition of a power, from arithmetic: $2^{3} = 8$ and $3^{2} = 9$."
              },
              {
                "step": "$x = 72$",
                "reason": "Order of operations, from arithmetic: the product is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ with $3\\log_{7}{3} + 2\\log_{7}{2} = \\log_{7}{x}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 108",
              "lines": [
                {
                  "step": "Find a number $x$ with $3\\log_{7}{3} + 2\\log_{7}{2} = \\log_{7}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{7}{3^{3}} + \\log_{7}{2^{2}} = \\log_{7}{x}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{7}{\\left(3^{3} \\cdot 2^{2}\\right)} = \\log_{7}{x}$",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
                },
                {
                  "step": "$x = 3^{3} \\cdot 2^{2}$",
                  "reason": "Logarithm: the line above says that $x$ is $7$ raised to the power $\\log_{7}{\\left(3^{3} \\cdot 2^{2}\\right)}$, and $a^{\\log_a b} = b$."
                },
                {
                  "step": "$x = 27 \\cdot 4$",
                  "reason": "The definition of a power, from arithmetic: $3^{3} = 27$ and $2^{2} = 4$."
                },
                {
                  "step": "$x = 108$",
                  "reason": "Order of operations, from arithmetic: the product is worked out."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $2\\log_{2}{5} + 3\\log_{2}{7} = \\log_{2}{x}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 8575",
              "lines": [
                {
                  "step": "Find a number $x$ with $2\\log_{2}{5} + 3\\log_{2}{7} = \\log_{2}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{5^{2}} + \\log_{2}{7^{3}} = \\log_{2}{x}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{2}{\\left(5^{2} \\cdot 7^{3}\\right)} = \\log_{2}{x}$",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
                },
                {
                  "step": "$x = 5^{2} \\cdot 7^{3}$",
                  "reason": "Logarithm: the line above says that $x$ is $2$ raised to the power $\\log_{2}{\\left(5^{2} \\cdot 7^{3}\\right)}$, and $a^{\\log_a b} = b$."
                },
                {
                  "step": "$x = 25 \\cdot 343$",
                  "reason": "The definition of a power, from arithmetic: $5^{2} = 25$ and $7^{3} = 343$."
                },
                {
                  "step": "$x = 8575$",
                  "reason": "Order of operations, from arithmetic: the product is worked out."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $4\\log_{3}{2} + 2\\log_{3}{5} = \\log_{3}{x}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 400",
              "lines": [
                {
                  "step": "Find a number $x$ with $4\\log_{3}{2} + 2\\log_{3}{5} = \\log_{3}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{3}{2^{4}} + \\log_{3}{5^{2}} = \\log_{3}{x}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{3}{\\left(2^{4} \\cdot 5^{2}\\right)} = \\log_{3}{x}$",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product."
                },
                {
                  "step": "$x = 2^{4} \\cdot 5^{2}$",
                  "reason": "Logarithm: the line above says that $x$ is $3$ raised to the power $\\log_{3}{\\left(2^{4} \\cdot 5^{2}\\right)}$, and $a^{\\log_a b} = b$."
                },
                {
                  "step": "$x = 16 \\cdot 25$",
                  "reason": "The definition of a power, from arithmetic: $2^{4} = 16$ and $5^{2} = 25$."
                },
                {
                  "step": "$x = 400$",
                  "reason": "Order of operations, from arithmetic: the product is worked out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $x$ with $3\\log_{3}{7} - 4\\log_{3}{2} = \\log_{3}{x}$.",
            "lines": [
              {
                "step": "Find a number $x$ with $3\\log_{3}{7} - 4\\log_{3}{2} = \\log_{3}{x}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{3}{7^{3}} - \\log_{3}{2^{4}} = \\log_{3}{x}$",
                "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
              },
              {
                "step": "$\\log_{3}{\\dfrac{7^{3}}{2^{4}}} = \\log_{3}{x}$",
                "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient."
              },
              {
                "step": "$x = \\dfrac{7^{3}}{2^{4}}$",
                "reason": "Logarithm: the line above says that $x$ is $3$ raised to the power $\\log_{3}{\\dfrac{7^{3}}{2^{4}}}$, and $a^{\\log_a b} = b$."
              },
              {
                "step": "$x = \\dfrac{343}{16}$",
                "reason": "The definition of a power, from arithmetic: $7^{3} = 343$ and $2^{4} = 16$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ with $2\\log_{2}{9} - 3\\log_{2}{5} = \\log_{2}{x}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 81/125",
              "lines": [
                {
                  "step": "Find a number $x$ with $2\\log_{2}{9} - 3\\log_{2}{5} = \\log_{2}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{9^{2}} - \\log_{2}{5^{3}} = \\log_{2}{x}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{2}{\\dfrac{9^{2}}{5^{3}}} = \\log_{2}{x}$",
                  "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient."
                },
                {
                  "step": "$x = \\dfrac{9^{2}}{5^{3}}$",
                  "reason": "Logarithm: the line above says that $x$ is $2$ raised to the power $\\log_{2}{\\dfrac{9^{2}}{5^{3}}}$, and $a^{\\log_a b} = b$."
                },
                {
                  "step": "$x = \\dfrac{81}{125}$",
                  "reason": "The definition of a power, from arithmetic: $9^{2} = 81$ and $5^{3} = 125$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $7\\log_{5}{2} - 4\\log_{5}{3} = \\log_{5}{x}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 128/81",
              "lines": [
                {
                  "step": "Find a number $x$ with $7\\log_{5}{2} - 4\\log_{5}{3} = \\log_{5}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{5}{2^{7}} - \\log_{5}{3^{4}} = \\log_{5}{x}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{5}{\\dfrac{2^{7}}{3^{4}}} = \\log_{5}{x}$",
                  "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient."
                },
                {
                  "step": "$x = \\dfrac{2^{7}}{3^{4}}$",
                  "reason": "Logarithm: the line above says that $x$ is $5$ raised to the power $\\log_{5}{\\dfrac{2^{7}}{3^{4}}}$, and $a^{\\log_a b} = b$."
                },
                {
                  "step": "$x = \\dfrac{128}{81}$",
                  "reason": "The definition of a power, from arithmetic: $2^{7} = 128$ and $3^{4} = 81$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $3\\log_{10}{7} - 2\\log_{10}{6} = \\log_{10}{x}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 343/36",
              "lines": [
                {
                  "step": "Find a number $x$ with $3\\log_{10}{7} - 2\\log_{10}{6} = \\log_{10}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{7^{3}} - \\log_{10}{6^{2}} = \\log_{10}{x}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{10}{\\dfrac{7^{3}}{6^{2}}} = \\log_{10}{x}$",
                  "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient."
                },
                {
                  "step": "$x = \\dfrac{7^{3}}{6^{2}}$",
                  "reason": "Logarithm: the line above says that $x$ is $10$ raised to the power $\\log_{10}{\\dfrac{7^{3}}{6^{2}}}$, and $a^{\\log_a b} = b$."
                },
                {
                  "step": "$x = \\dfrac{343}{36}$",
                  "reason": "The definition of a power, from arithmetic: $7^{3} = 343$ and $6^{2} = 36$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t217-k3",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\log_{3}{7} \\cdot \\log_{7}{81}$.",
            "lines": [
              {
                "step": "Evaluate $\\log_{3}{7} \\cdot \\log_{7}{81}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{3}{7} \\cdot \\log_{7}{81} = \\log_{3}{7} \\cdot \\dfrac{\\log_{3}{81}}{\\log_{3}{7}}$",
                "reason": "Change of base: the second logarithm is written in the base $3$ of the first, $\\log_{7}{81} = \\dfrac{\\log_{3}{81}}{\\log_{3}{7}}$."
              },
              {
                "step": "$\\log_{3}{7} \\cdot \\dfrac{\\log_{3}{81}}{\\log_{3}{7}} = \\log_{3}{81}$",
                "reason": "Cancelling a common factor: $\\log_{3}{7}$ is not $0$, and it cancels."
              },
              {
                "step": "$\\log_{3}{81} = 4$",
                "reason": "Logarithm: $3^{4} = 81$ means $\\log_{3}{81} = 4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\log_{2}{11} \\cdot \\log_{11}{128}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7",
              "lines": [
                {
                  "step": "Evaluate $\\log_{2}{11} \\cdot \\log_{11}{128}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{11} \\cdot \\log_{11}{128} = \\log_{2}{11} \\cdot \\dfrac{\\log_{2}{128}}{\\log_{2}{11}}$",
                  "reason": "Change of base: the second logarithm is written in the base $2$ of the first, $\\log_{11}{128} = \\dfrac{\\log_{2}{128}}{\\log_{2}{11}}$."
                },
                {
                  "step": "$\\log_{2}{11} \\cdot \\dfrac{\\log_{2}{128}}{\\log_{2}{11}} = \\log_{2}{128}$",
                  "reason": "Cancelling a common factor: $\\log_{2}{11}$ is not $0$, and it cancels."
                },
                {
                  "step": "$\\log_{2}{128} = 7$",
                  "reason": "Logarithm: $2^{7} = 128$ means $\\log_{2}{128} = 7$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{5}{3} \\cdot \\log_{3}{\\dfrac{1}{25}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{5}{3} \\cdot \\log_{3}{\\dfrac{1}{25}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{5}{3} \\cdot \\log_{3}{\\dfrac{1}{25}} = \\log_{5}{3} \\cdot \\dfrac{\\log_{5}{\\dfrac{1}{25}}}{\\log_{5}{3}}$",
                  "reason": "Change of base: the second logarithm is written in the base $5$ of the first, $\\log_{3}{\\dfrac{1}{25}} = \\dfrac{\\log_{5}{\\dfrac{1}{25}}}{\\log_{5}{3}}$."
                },
                {
                  "step": "$\\log_{5}{3} \\cdot \\dfrac{\\log_{5}{\\dfrac{1}{25}}}{\\log_{5}{3}} = \\log_{5}{\\dfrac{1}{25}}$",
                  "reason": "Cancelling a common factor: $\\log_{5}{3}$ is not $0$, and it cancels."
                },
                {
                  "step": "$\\log_{5}{\\dfrac{1}{25}} = -2$",
                  "reason": "Logarithm: $5^{-2} = \\dfrac{1}{25}$ means $\\log_{5}{\\dfrac{1}{25}} = -2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{10}{6} \\cdot \\log_{6}{100\\,000}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5",
              "lines": [
                {
                  "step": "Evaluate $\\log_{10}{6} \\cdot \\log_{6}{100\\,000}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{6} \\cdot \\log_{6}{100\\,000} = \\log_{10}{6} \\cdot \\dfrac{\\log_{10}{100\\,000}}{\\log_{10}{6}}$",
                  "reason": "Change of base: the second logarithm is written in the base $10$ of the first, $\\log_{6}{100\\,000} = \\dfrac{\\log_{10}{100\\,000}}{\\log_{10}{6}}$."
                },
                {
                  "step": "$\\log_{10}{6} \\cdot \\dfrac{\\log_{10}{100\\,000}}{\\log_{10}{6}} = \\log_{10}{100\\,000}$",
                  "reason": "Cancelling a common factor: $\\log_{10}{6}$ is not $0$, and it cancels."
                },
                {
                  "step": "$\\log_{10}{100\\,000} = 5$",
                  "reason": "Logarithm: $10^{5} = 100\\,000$ means $\\log_{10}{100\\,000} = 5$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\log_{3}{5} \\cdot \\log_{5}{6} + \\log_{3}{7} \\cdot \\log_{7}{\\dfrac{27}{2}}$.",
            "lines": [
              {
                "step": "Evaluate $\\log_{3}{5} \\cdot \\log_{5}{6} + \\log_{3}{7} \\cdot \\log_{7}{\\dfrac{27}{2}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{3}{5} \\cdot \\log_{5}{6} + \\log_{3}{7} \\cdot \\log_{7}{\\dfrac{27}{2}} = \\log_{3}{5} \\cdot \\dfrac{\\log_{3}{6}}{\\log_{3}{5}} + \\log_{3}{7} \\cdot \\dfrac{\\log_{3}{\\dfrac{27}{2}}}{\\log_{3}{7}}$",
                "reason": "Change of base: the second logarithm of each product is written in the base $3$."
              },
              {
                "step": "$\\log_{3}{5} \\cdot \\dfrac{\\log_{3}{6}}{\\log_{3}{5}} + \\log_{3}{7} \\cdot \\dfrac{\\log_{3}{\\dfrac{27}{2}}}{\\log_{3}{7}} = \\log_{3}{6} + \\log_{3}{\\dfrac{27}{2}}$",
                "reason": "Cancelling a common factor: $\\log_{3}{5}$ and $\\log_{3}{7}$ are not $0$, and each cancels in its own product."
              },
              {
                "step": "$\\log_{3}{6} + \\log_{3}{\\dfrac{27}{2}} = \\log_{3}{\\left(6 \\cdot \\dfrac{27}{2}\\right)}$",
                "reason": "Log of a product: the two logarithms have the same base $3$, so their sum is the logarithm of the product."
              },
              {
                "step": "$\\log_{3}{\\left(6 \\cdot \\dfrac{27}{2}\\right)} = \\log_{3}{81}$",
                "reason": "Order of operations, from arithmetic: the product in the bracket is worked out, $6 \\cdot \\dfrac{27}{2} = 81$."
              },
              {
                "step": "$\\log_{3}{81} = 4$",
                "reason": "Logarithm: $3^{4} = 81$ means $\\log_{3}{81} = 4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\log_{6}{7} \\cdot \\log_{7}{9} + \\log_{6}{5} \\cdot \\log_{5}{4}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{6}{7} \\cdot \\log_{7}{9} + \\log_{6}{5} \\cdot \\log_{5}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{6}{7} \\cdot \\log_{7}{9} + \\log_{6}{5} \\cdot \\log_{5}{4} = \\log_{6}{7} \\cdot \\dfrac{\\log_{6}{9}}{\\log_{6}{7}} + \\log_{6}{5} \\cdot \\dfrac{\\log_{6}{4}}{\\log_{6}{5}}$",
                  "reason": "Change of base: the second logarithm of each product is written in the base $6$."
                },
                {
                  "step": "$\\log_{6}{7} \\cdot \\dfrac{\\log_{6}{9}}{\\log_{6}{7}} + \\log_{6}{5} \\cdot \\dfrac{\\log_{6}{4}}{\\log_{6}{5}} = \\log_{6}{9} + \\log_{6}{4}$",
                  "reason": "Cancelling a common factor: $\\log_{6}{7}$ and $\\log_{6}{5}$ are not $0$, and each cancels in its own product."
                },
                {
                  "step": "$\\log_{6}{9} + \\log_{6}{4} = \\log_{6}{\\left(9 \\cdot 4\\right)}$",
                  "reason": "Log of a product: the two logarithms have the same base $6$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$\\log_{6}{\\left(9 \\cdot 4\\right)} = \\log_{6}{36}$",
                  "reason": "Order of operations, from arithmetic: the product in the bracket is worked out, $9 \\cdot 4 = 36$."
                },
                {
                  "step": "$\\log_{6}{36} = 2$",
                  "reason": "Logarithm: $6^{2} = 36$ means $\\log_{6}{36} = 2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{5}{2} \\cdot \\log_{2}{10} + \\log_{5}{3} \\cdot \\log_{3}{\\dfrac{25}{2}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3",
              "lines": [
                {
                  "step": "Evaluate $\\log_{5}{2} \\cdot \\log_{2}{10} + \\log_{5}{3} \\cdot \\log_{3}{\\dfrac{25}{2}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{5}{2} \\cdot \\log_{2}{10} + \\log_{5}{3} \\cdot \\log_{3}{\\dfrac{25}{2}} = \\log_{5}{2} \\cdot \\dfrac{\\log_{5}{10}}{\\log_{5}{2}} + \\log_{5}{3} \\cdot \\dfrac{\\log_{5}{\\dfrac{25}{2}}}{\\log_{5}{3}}$",
                  "reason": "Change of base: the second logarithm of each product is written in the base $5$."
                },
                {
                  "step": "$\\log_{5}{2} \\cdot \\dfrac{\\log_{5}{10}}{\\log_{5}{2}} + \\log_{5}{3} \\cdot \\dfrac{\\log_{5}{\\dfrac{25}{2}}}{\\log_{5}{3}} = \\log_{5}{10} + \\log_{5}{\\dfrac{25}{2}}$",
                  "reason": "Cancelling a common factor: $\\log_{5}{2}$ and $\\log_{5}{3}$ are not $0$, and each cancels in its own product."
                },
                {
                  "step": "$\\log_{5}{10} + \\log_{5}{\\dfrac{25}{2}} = \\log_{5}{\\left(10 \\cdot \\dfrac{25}{2}\\right)}$",
                  "reason": "Log of a product: the two logarithms have the same base $5$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$\\log_{5}{\\left(10 \\cdot \\dfrac{25}{2}\\right)} = \\log_{5}{125}$",
                  "reason": "Order of operations, from arithmetic: the product in the bracket is worked out, $10 \\cdot \\dfrac{25}{2} = 125$."
                },
                {
                  "step": "$\\log_{5}{125} = 3$",
                  "reason": "Logarithm: $5^{3} = 125$ means $\\log_{5}{125} = 3$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{6}{5} \\cdot \\log_{5}{8} + \\log_{6}{11} \\cdot \\log_{11}{27}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3",
              "lines": [
                {
                  "step": "Evaluate $\\log_{6}{5} \\cdot \\log_{5}{8} + \\log_{6}{11} \\cdot \\log_{11}{27}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{6}{5} \\cdot \\log_{5}{8} + \\log_{6}{11} \\cdot \\log_{11}{27} = \\log_{6}{5} \\cdot \\dfrac{\\log_{6}{8}}{\\log_{6}{5}} + \\log_{6}{11} \\cdot \\dfrac{\\log_{6}{27}}{\\log_{6}{11}}$",
                  "reason": "Change of base: the second logarithm of each product is written in the base $6$."
                },
                {
                  "step": "$\\log_{6}{5} \\cdot \\dfrac{\\log_{6}{8}}{\\log_{6}{5}} + \\log_{6}{11} \\cdot \\dfrac{\\log_{6}{27}}{\\log_{6}{11}} = \\log_{6}{8} + \\log_{6}{27}$",
                  "reason": "Cancelling a common factor: $\\log_{6}{5}$ and $\\log_{6}{11}$ are not $0$, and each cancels in its own product."
                },
                {
                  "step": "$\\log_{6}{8} + \\log_{6}{27} = \\log_{6}{\\left(8 \\cdot 27\\right)}$",
                  "reason": "Log of a product: the two logarithms have the same base $6$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$\\log_{6}{\\left(8 \\cdot 27\\right)} = \\log_{6}{216}$",
                  "reason": "Order of operations, from arithmetic: the product in the bracket is worked out, $8 \\cdot 27 = 216$."
                },
                {
                  "step": "$\\log_{6}{216} = 3$",
                  "reason": "Logarithm: $6^{3} = 216$ means $\\log_{6}{216} = 3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{3}{\\log_{6}{3}} - \\dfrac{3}{\\log_{2}{3}}$.",
            "lines": [
              {
                "step": "Evaluate $\\dfrac{3}{\\log_{6}{3}} - \\dfrac{3}{\\log_{2}{3}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{3}{\\log_{6}{3}} - \\dfrac{3}{\\log_{2}{3}} = 3\\log_{3}{6} - 3\\log_{3}{2}$",
                "reason": "Change of base: $\\log_{3}{6} = \\dfrac{\\log_{6}{6}}{\\log_{6}{3}} = \\dfrac{1}{\\log_{6}{3}}$, since $\\log_{6}{6} = 1$, and the same holds with $2$ in place of $6$."
              },
              {
                "step": "$3\\log_{3}{6} - 3\\log_{3}{2} = \\log_{3}{6^{3}} - \\log_{3}{2^{3}}$",
                "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
              },
              {
                "step": "$\\log_{3}{6^{3}} - \\log_{3}{2^{3}} = \\log_{3}{\\dfrac{6^{3}}{2^{3}}}$",
                "reason": "Log of a quotient: the two logarithms have the same base $3$, so their difference is the logarithm of the quotient."
              },
              {
                "step": "$\\log_{3}{\\dfrac{6^{3}}{2^{3}}} = \\log_{3}{27}$",
                "reason": "The definition of a power, from arithmetic: $6^{3} = 216$ and $2^{3} = 8$, and $\\dfrac{216}{8} = 27$."
              },
              {
                "step": "$\\log_{3}{27} = 3$",
                "reason": "Logarithm: $3^{3} = 27$ means $\\log_{3}{27} = 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{5}{\\log_{12}{2}} - \\dfrac{5}{\\log_{3}{2}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "10",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{5}{\\log_{12}{2}} - \\dfrac{5}{\\log_{3}{2}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5}{\\log_{12}{2}} - \\dfrac{5}{\\log_{3}{2}} = 5\\log_{2}{12} - 5\\log_{2}{3}$",
                  "reason": "Change of base: $\\log_{2}{12} = \\dfrac{\\log_{12}{12}}{\\log_{12}{2}} = \\dfrac{1}{\\log_{12}{2}}$, since $\\log_{12}{12} = 1$, and the same holds with $3$ in place of $12$."
                },
                {
                  "step": "$5\\log_{2}{12} - 5\\log_{2}{3} = \\log_{2}{12^{5}} - \\log_{2}{3^{5}}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{2}{12^{5}} - \\log_{2}{3^{5}} = \\log_{2}{\\dfrac{12^{5}}{3^{5}}}$",
                  "reason": "Log of a quotient: the two logarithms have the same base $2$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\log_{2}{\\dfrac{12^{5}}{3^{5}}} = \\log_{2}{1024}$",
                  "reason": "The definition of a power, from arithmetic: $12^{5} = 248\\,832$ and $3^{5} = 243$, and $\\dfrac{248\\,832}{243} = 1024$."
                },
                {
                  "step": "$\\log_{2}{1024} = 10$",
                  "reason": "Logarithm: $2^{10} = 1024$ means $\\log_{2}{1024} = 10$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{2}{\\log_{15}{5}} - \\dfrac{2}{\\log_{3}{5}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{2}{\\log_{15}{5}} - \\dfrac{2}{\\log_{3}{5}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2}{\\log_{15}{5}} - \\dfrac{2}{\\log_{3}{5}} = 2\\log_{5}{15} - 2\\log_{5}{3}$",
                  "reason": "Change of base: $\\log_{5}{15} = \\dfrac{\\log_{15}{15}}{\\log_{15}{5}} = \\dfrac{1}{\\log_{15}{5}}$, since $\\log_{15}{15} = 1$, and the same holds with $3$ in place of $15$."
                },
                {
                  "step": "$2\\log_{5}{15} - 2\\log_{5}{3} = \\log_{5}{15^{2}} - \\log_{5}{3^{2}}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{5}{15^{2}} - \\log_{5}{3^{2}} = \\log_{5}{\\dfrac{15^{2}}{3^{2}}}$",
                  "reason": "Log of a quotient: the two logarithms have the same base $5$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\log_{5}{\\dfrac{15^{2}}{3^{2}}} = \\log_{5}{25}$",
                  "reason": "The definition of a power, from arithmetic: $15^{2} = 225$ and $3^{2} = 9$, and $\\dfrac{225}{9} = 25$."
                },
                {
                  "step": "$\\log_{5}{25} = 2$",
                  "reason": "Logarithm: $5^{2} = 25$ means $\\log_{5}{25} = 2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{6}{\\log_{6}{2}} - \\dfrac{3}{\\log_{9}{2}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "6",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{6}{\\log_{6}{2}} - \\dfrac{3}{\\log_{9}{2}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{6}{\\log_{6}{2}} - \\dfrac{3}{\\log_{9}{2}} = 6\\log_{2}{6} - 3\\log_{2}{9}$",
                  "reason": "Change of base: $\\log_{2}{6} = \\dfrac{\\log_{6}{6}}{\\log_{6}{2}} = \\dfrac{1}{\\log_{6}{2}}$, since $\\log_{6}{6} = 1$, and the same holds with $9$ in place of $6$."
                },
                {
                  "step": "$6\\log_{2}{6} - 3\\log_{2}{9} = \\log_{2}{6^{6}} - \\log_{2}{9^{3}}$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes each number in front up as an exponent."
                },
                {
                  "step": "$\\log_{2}{6^{6}} - \\log_{2}{9^{3}} = \\log_{2}{\\dfrac{6^{6}}{9^{3}}}$",
                  "reason": "Log of a quotient: the two logarithms have the same base $2$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\log_{2}{\\dfrac{6^{6}}{9^{3}}} = \\log_{2}{64}$",
                  "reason": "The definition of a power, from arithmetic: $6^{6} = 46\\,656$ and $9^{3} = 729$, and $\\dfrac{46\\,656}{729} = 64$."
                },
                {
                  "step": "$\\log_{2}{64} = 6$",
                  "reason": "Logarithm: $2^{6} = 64$ means $\\log_{2}{64} = 6$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t217-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for a number $x$ with $2\\log_{3}{10} - 3\\log_{3}{7} = \\log_{3}{x}$, and write that line right.",
            "given": [
              "$2\\log_{3}{10} - 3\\log_{3}{7} = \\log_{3}{x}$",
              "$\\log_{3}{10^{2}} - 3\\log_{3}{7} = \\log_{3}{x}$",
              "$\\log_{3}{10^{2}} - \\log_{3}{7^{3}} = \\log_{3}{x}$",
              "$x = 10^{2} \\cdot 7^{3}$",
              "$x = 100 \\cdot 343$",
              "$x = 34\\,300$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for a number $x$ with $2\\log_{3}{10} - 3\\log_{3}{7} = \\log_{3}{x}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 multiplies $10^{2}$ by $7^{3}$, and line 3 has a minus sign between its two logarithms.",
                "reason": "A sign lost: the minus sign between the two logarithms is dropped, so their difference is treated as a sum."
              },
              {
                "step": "Line 4 written right is $x = \\dfrac{10^{2}}{7^{3}}$.",
                "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient of the two numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $3\\log_{5}{4} - \\log_{5}{7} = \\log_{5}{x}$, and write that line right.",
              "given": [
                "$3\\log_{5}{4} - \\log_{5}{7} = \\log_{5}{x}$",
                "$\\log_{5}{4^{3}} + \\log_{5}{7^{-1}} = \\log_{5}{x}$",
                "$x = 4^{3} \\cdot 7^{-1}$",
                "$x = 64 \\cdot 7$",
                "$x = 448$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 64/7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $3\\log_{5}{4} - \\log_{5}{7} = \\log_{5}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies $64$ by $7$, and line 3 has the power $7^{-1}$, whose exponent is negative.",
                  "reason": "A sign lost: the minus sign of the exponent $-1$ is dropped, so $7^{-1}$ is worked out as $7$."
                },
                {
                  "step": "Line 4 written right is $x = \\dfrac{64}{7}$.",
                  "reason": "Negative exponent: $7^{-1} = \\dfrac{1}{7}$, so $64$ is divided by $7$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $2\\log_{2}{9} - 2\\log_{2}{5} = \\log_{2}{x}$, and write that line right.",
              "given": [
                "$2\\log_{2}{9} - 2\\log_{2}{5} = \\log_{2}{x}$",
                "$\\log_{2}{9^{2}} - 2\\log_{2}{5} = \\log_{2}{x}$",
                "$\\log_{2}{9^{2}} - \\log_{2}{5^{2}} = \\log_{2}{x}$",
                "$x = 9^{2} \\cdot 5^{2}$",
                "$x = 81 \\cdot 25$",
                "$x = 2025$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 9^2/5^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $2\\log_{2}{9} - 2\\log_{2}{5} = \\log_{2}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies $9^{2}$ by $5^{2}$, and line 3 has a minus sign between its two logarithms.",
                  "reason": "A sign lost: the minus sign between the two logarithms is dropped, so their difference is treated as a sum."
                },
                {
                  "step": "Line 4 written right is $x = \\dfrac{9^{2}}{5^{2}}$.",
                  "reason": "Log of a quotient: the difference of two logarithms with the same base is the logarithm of the quotient of the two numbers."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $2\\log_{7}{10} - \\log_{7}{3} = \\log_{7}{x}$, and write that line right.",
              "given": [
                "$2\\log_{7}{10} - \\log_{7}{3} = \\log_{7}{x}$",
                "$\\log_{7}{10^{2}} + \\log_{7}{3^{-1}} = \\log_{7}{x}$",
                "$x = 10^{2} \\cdot 3^{-1}$",
                "$x = 100 \\cdot 3$",
                "$x = 300$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 100/3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $2\\log_{7}{10} - \\log_{7}{3} = \\log_{7}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies $100$ by $3$, and line 3 has the power $3^{-1}$, whose exponent is negative.",
                  "reason": "A sign lost: the minus sign of the exponent $-1$ is dropped, so $3^{-1}$ is worked out as $3$."
                },
                {
                  "step": "Line 4 written right is $x = \\dfrac{100}{3}$.",
                  "reason": "Negative exponent: $3^{-1} = \\dfrac{1}{3}$, so $100$ is divided by $3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for a number $x$ with $2\\log_{2}{3} + \\log_{2}{5} = \\log_{2}{x}$, and write that line right.",
            "given": [
              "$2\\log_{2}{3} + \\log_{2}{5} = \\log_{2}{x}$",
              "$\\log_{2}{3^{2}} + \\log_{2}{5} = \\log_{2}{x}$",
              "$x = 3^{2} + 5$",
              "$x = 9 + 5$",
              "$x = 14$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for a number $x$ with $2\\log_{2}{3} + \\log_{2}{5} = \\log_{2}{x}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 adds $3^{2}$ and $5$, and line 2 adds two logarithms.",
                "reason": "A logarithm taken term by term over a sum: a sum of logarithms is read as the logarithm of the sum, the way $(a + b)^2$ is taken as $a^2 + b^2$."
              },
              {
                "step": "Line 3 written right is $x = 3^{2} \\cdot 5$.",
                "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product of the two numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $4\\log_{5}{2} + 2\\log_{5}{3} = \\log_{5}{x}$, and write that line right.",
              "given": [
                "$4\\log_{5}{2} + 2\\log_{5}{3} = \\log_{5}{x}$",
                "$\\log_{5}{2^{4}} + 2\\log_{5}{3} = \\log_{5}{x}$",
                "$\\log_{5}{2^{4}} + \\log_{5}{3^{2}} = \\log_{5}{x}$",
                "$x = 2^{4} + 3^{2}$",
                "$x = 16 + 9$",
                "$x = 25$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 2^4*3^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $4\\log_{5}{2} + 2\\log_{5}{3} = \\log_{5}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 adds $2^{4}$ and $3^{2}$, and line 3 adds two logarithms.",
                  "reason": "A logarithm taken term by term over a sum: a sum of logarithms is read as the logarithm of the sum, the way $(a + b)^2$ is taken as $a^2 + b^2$."
                },
                {
                  "step": "Line 4 written right is $x = 2^{4} \\cdot 3^{2}$.",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product of the two numbers."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $2\\log_{3}{7} + \\log_{3}{4} = \\log_{3}{x}$, and write that line right.",
              "given": [
                "$2\\log_{3}{7} + \\log_{3}{4} = \\log_{3}{x}$",
                "$\\log_{3}{7^{2}} + \\log_{3}{4} = \\log_{3}{x}$",
                "$x = 7^{2} + 4$",
                "$x = 49 + 4$",
                "$x = 53$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x = 7^2*4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $2\\log_{3}{7} + \\log_{3}{4} = \\log_{3}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds $7^{2}$ and $4$, and line 2 adds two logarithms.",
                  "reason": "A logarithm taken term by term over a sum: a sum of logarithms is read as the logarithm of the sum, the way $(a + b)^2$ is taken as $a^2 + b^2$."
                },
                {
                  "step": "Line 3 written right is $x = 7^{2} \\cdot 4$.",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product of the two numbers."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $3\\log_{6}{5} + 2\\log_{6}{2} = \\log_{6}{x}$, and write that line right.",
              "given": [
                "$3\\log_{6}{5} + 2\\log_{6}{2} = \\log_{6}{x}$",
                "$\\log_{6}{5^{3}} + 2\\log_{6}{2} = \\log_{6}{x}$",
                "$\\log_{6}{5^{3}} + \\log_{6}{2^{2}} = \\log_{6}{x}$",
                "$x = 5^{3} + 2^{2}$",
                "$x = 125 + 4$",
                "$x = 129$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 5^3*2^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $3\\log_{6}{5} + 2\\log_{6}{2} = \\log_{6}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 adds $5^{3}$ and $2^{2}$, and line 3 adds two logarithms.",
                  "reason": "A logarithm taken term by term over a sum: a sum of logarithms is read as the logarithm of the sum, the way $(a + b)^2$ is taken as $a^2 + b^2$."
                },
                {
                  "step": "Line 4 written right is $x = 5^{3} \\cdot 2^{2}$.",
                  "reason": "Log of a product: the sum of two logarithms with the same base is the logarithm of the product of the two numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for a number $x$ with $2\\log_{5}{7} + 3\\log_{5}{2} = \\log_{5}{x}$, and write that line right.",
            "given": [
              "$2\\log_{5}{7} + 3\\log_{5}{2} = \\log_{5}{x}$",
              "$\\log_{5}{7^{2}} + 3\\log_{5}{2} = \\log_{5}{x}$",
              "$\\log_{5}{7^{2}} + \\log_{5}{2^{3}} = \\log_{5}{x}$",
              "$x = 7^{2} \\cdot 2^{3}$",
              "$x = 7^{2} = 49 \\cdot 8$",
              "$x = 392$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for a number $x$ with $2\\log_{5}{7} + 3\\log_{5}{2} = \\log_{5}{x}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 works out $7^{2}$ and runs on with a second equals sign, so it states $7^{2} = 49 \\cdot 8$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $7^{2}$ is $49$, not $49 \\cdot 8$."
              },
              {
                "step": "Line 5 written right is $x = 49 \\cdot 8$.",
                "reason": "The definition of a power, from arithmetic: $7^{2} = 49$ and $2^{3} = 8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $3\\log_{2}{5} + \\log_{2}{7} = \\log_{2}{x}$, and write that line right.",
              "given": [
                "$3\\log_{2}{5} + \\log_{2}{7} = \\log_{2}{x}$",
                "$\\log_{2}{5^{3}} + \\log_{2}{7} = \\log_{2}{x}$",
                "$x = 5^{3} \\cdot 7$",
                "$x = 5^{3} = 125 \\cdot 7$",
                "$x = 875$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 125*7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $3\\log_{2}{5} + \\log_{2}{7} = \\log_{2}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 works out $5^{3}$ and runs on with a second equals sign, so it states $5^{3} = 125 \\cdot 7$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $5^{3}$ is $125$, not $125 \\cdot 7$."
                },
                {
                  "step": "Line 4 written right is $x = 125 \\cdot 7$.",
                  "reason": "The definition of a power, from arithmetic: $5^{3} = 125$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $2\\log_{3}{4} + 2\\log_{3}{7} = \\log_{3}{x}$, and write that line right.",
              "given": [
                "$2\\log_{3}{4} + 2\\log_{3}{7} = \\log_{3}{x}$",
                "$\\log_{3}{4^{2}} + 2\\log_{3}{7} = \\log_{3}{x}$",
                "$\\log_{3}{4^{2}} + \\log_{3}{7^{2}} = \\log_{3}{x}$",
                "$x = 4^{2} \\cdot 7^{2}$",
                "$x = 4^{2} = 16 \\cdot 49$",
                "$x = 784$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x = 16*49",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $2\\log_{3}{4} + 2\\log_{3}{7} = \\log_{3}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 works out $4^{2}$ and runs on with a second equals sign, so it states $4^{2} = 16 \\cdot 49$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $4^{2}$ is $16$, not $16 \\cdot 49$."
                },
                {
                  "step": "Line 5 written right is $x = 16 \\cdot 49$.",
                  "reason": "The definition of a power, from arithmetic: $4^{2} = 16$ and $7^{2} = 49$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a number $x$ with $5\\log_{10}{2} + \\log_{10}{3} = \\log_{10}{x}$, and write that line right.",
              "given": [
                "$5\\log_{10}{2} + \\log_{10}{3} = \\log_{10}{x}$",
                "$\\log_{10}{2^{5}} + \\log_{10}{3} = \\log_{10}{x}$",
                "$x = 2^{5} \\cdot 3$",
                "$x = 2^{5} = 32 \\cdot 3$",
                "$x = 96$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 32*3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a number $x$ with $5\\log_{10}{2} + \\log_{10}{3} = \\log_{10}{x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 works out $2^{5}$ and runs on with a second equals sign, so it states $2^{5} = 32 \\cdot 3$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $2^{5}$ is $32$, not $32 \\cdot 3$."
                },
                {
                  "step": "Line 4 written right is $x = 32 \\cdot 3$.",
                  "reason": "The definition of a power, from arithmetic: $2^{5} = 32$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t217-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: 3 times the logarithm of $x$ to the base 2, plus the logarithm of $y$ to the base 2, is 5.",
            "lines": [
              {
                "step": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: 3 times the logarithm of $x$ to the base 2, plus the logarithm of $y$ to the base 2, is 5.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3\\log_{2}{x} + \\log_{2}{y} = 5$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order, and the word \"is\" stands where the equals sign goes."
              },
              {
                "step": "$\\log_{2}{x^{3}} + \\log_{2}{y} = 5$",
                "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number $3$ in front up as an exponent."
              },
              {
                "step": "$\\log_{2}{\\left(x^{3}y\\right)} = 5$",
                "reason": "Log of a product: the two logarithms have the same base $2$, so their sum is the logarithm of the product."
              },
              {
                "step": "$x^{3}y = 2^{5}$",
                "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$."
              },
              {
                "step": "$x^{3}y = 32$",
                "reason": "The definition of a power, from arithmetic: $2^{5} = 32$."
              },
              {
                "step": "$y = \\dfrac{32}{x^{3}}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $x^{3}$, which is not $0$ because $x$ is positive."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: The sum of the logarithm of $y$ to the base 3 and 2 times the logarithm of $x$ to the base 3 is 4.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 81/x^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: The sum of the logarithm of $y$ to the base 3 and 2 times the logarithm of $x$ to the base 3 is 4.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2\\log_{3}{x} + \\log_{3}{y} = 4$",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two logarithms, written here with the term in $x$ first, and the word \"is\" stands where the equals sign goes."
                },
                {
                  "step": "$\\log_{3}{x^{2}} + \\log_{3}{y} = 4$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number $2$ in front up as an exponent."
                },
                {
                  "step": "$\\log_{3}{\\left(x^{2}y\\right)} = 4$",
                  "reason": "Log of a product: the two logarithms have the same base $3$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$x^{2}y = 3^{4}$",
                  "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$."
                },
                {
                  "step": "$x^{2}y = 81$",
                  "reason": "The definition of a power, from arithmetic: $3^{4} = 81$."
                },
                {
                  "step": "$y = \\dfrac{81}{x^{2}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $x^{2}$, which is not $0$ because $x$ is positive."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: Adding the logarithm of $y$ to the base 10 to 2 times the logarithm of $x$ to the base 10 gives 3.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1000/x^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: Adding the logarithm of $y$ to the base 10 to 2 times the logarithm of $x$ to the base 10 gives 3.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2\\log_{10}{x} + \\log_{10}{y} = 3$",
                  "reason": "Writing a sentence as an equation: \"adding\" puts the logarithm of $y$ after the term in $x$, and the word \"gives\" stands where the equals sign goes."
                },
                {
                  "step": "$\\log_{10}{x^{2}} + \\log_{10}{y} = 3$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number $2$ in front up as an exponent."
                },
                {
                  "step": "$\\log_{10}{\\left(x^{2}y\\right)} = 3$",
                  "reason": "Log of a product: the two logarithms have the same base $10$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$x^{2}y = 10^{3}$",
                  "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$."
                },
                {
                  "step": "$x^{2}y = 1000$",
                  "reason": "The definition of a power, from arithmetic: $10^{3} = 1000$."
                },
                {
                  "step": "$y = \\dfrac{1000}{x^{2}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $x^{2}$, which is not $0$ because $x$ is positive."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: 4 times the logarithm of $x$ to the base 5, plus the logarithm of $y$ to the base 5, is 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 25/x^4",
              "lines": [
                {
                  "step": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: 4 times the logarithm of $x$ to the base 5, plus the logarithm of $y$ to the base 5, is 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4\\log_{5}{x} + \\log_{5}{y} = 2$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order, and the word \"is\" stands where the equals sign goes."
                },
                {
                  "step": "$\\log_{5}{x^{4}} + \\log_{5}{y} = 2$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number $4$ in front up as an exponent."
                },
                {
                  "step": "$\\log_{5}{\\left(x^{4}y\\right)} = 2$",
                  "reason": "Log of a product: the two logarithms have the same base $5$, so their sum is the logarithm of the product."
                },
                {
                  "step": "$x^{4}y = 5^{2}$",
                  "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$."
                },
                {
                  "step": "$x^{4}y = 25$",
                  "reason": "The definition of a power, from arithmetic: $5^{2} = 25$."
                },
                {
                  "step": "$y = \\dfrac{25}{x^{4}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $x^{4}$, which is not $0$ because $x$ is positive."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: The logarithm of $y$ to the base 3 is 3 more than 2 times the logarithm of $x$ to the base 3.",
            "lines": [
              {
                "step": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: The logarithm of $y$ to the base 3 is 3 more than 2 times the logarithm of $x$ to the base 3.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{3}{y} - 2\\log_{3}{x} = 3$",
                "reason": "Writing a sentence as an equation: \"3 more than\" says that the logarithm of $y$, with the term in $x$ subtracted from it, is 3."
              },
              {
                "step": "$\\log_{3}{y} - \\log_{3}{x^{2}} = 3$",
                "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number $2$ in front up as an exponent."
              },
              {
                "step": "$\\log_{3}{\\dfrac{y}{x^{2}}} = 3$",
                "reason": "Log of a quotient: the two logarithms have the same base $3$, so their difference is the logarithm of the quotient."
              },
              {
                "step": "$\\dfrac{y}{x^{2}} = 3^{3}$",
                "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$."
              },
              {
                "step": "$\\dfrac{y}{x^{2}} = 27$",
                "reason": "The definition of a power, from arithmetic: $3^{3} = 27$."
              },
              {
                "step": "$y = 27x^{2}$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^{2}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: Taking 4 times the logarithm of $x$ to the base 2 from the logarithm of $y$ to the base 2 leaves 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 64*x^4",
              "lines": [
                {
                  "step": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: Taking 4 times the logarithm of $x$ to the base 2 from the logarithm of $y$ to the base 2 leaves 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{y} - 4\\log_{2}{x} = 6$",
                  "reason": "Writing a sentence as an equation: \"taking from\" subtracts the term in $x$ from the logarithm of $y$, and the word \"leaves\" stands where the equals sign goes."
                },
                {
                  "step": "$\\log_{2}{y} - \\log_{2}{x^{4}} = 6$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number $4$ in front up as an exponent."
                },
                {
                  "step": "$\\log_{2}{\\dfrac{y}{x^{4}}} = 6$",
                  "reason": "Log of a quotient: the two logarithms have the same base $2$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\dfrac{y}{x^{4}} = 2^{6}$",
                  "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$."
                },
                {
                  "step": "$\\dfrac{y}{x^{4}} = 64$",
                  "reason": "The definition of a power, from arithmetic: $2^{6} = 64$."
                },
                {
                  "step": "$y = 64x^{4}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^{4}$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: The logarithm of $y$ to the base 10, less 3 times the logarithm of $x$ to the base 10, is 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 100*x^3",
              "lines": [
                {
                  "step": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: The logarithm of $y$ to the base 10, less 3 times the logarithm of $x$ to the base 10, is 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{10}{y} - 3\\log_{10}{x} = 2$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order: \"less\" is a subtraction, and the word \"is\" stands where the equals sign goes."
                },
                {
                  "step": "$\\log_{10}{y} - \\log_{10}{x^{3}} = 2$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number $3$ in front up as an exponent."
                },
                {
                  "step": "$\\log_{10}{\\dfrac{y}{x^{3}}} = 2$",
                  "reason": "Log of a quotient: the two logarithms have the same base $10$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\dfrac{y}{x^{3}} = 10^{2}$",
                  "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$."
                },
                {
                  "step": "$\\dfrac{y}{x^{3}} = 100$",
                  "reason": "The definition of a power, from arithmetic: $10^{2} = 100$."
                },
                {
                  "step": "$y = 100x^{3}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^{3}$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: The logarithm of $y$ to the base 6 is 2 more than 5 times the logarithm of $x$ to the base 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 36*x^5",
              "lines": [
                {
                  "step": "Write this sentence as an equation with no logarithm in it, with $y$ alone on the left: The logarithm of $y$ to the base 6 is 2 more than 5 times the logarithm of $x$ to the base 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{6}{y} - 5\\log_{6}{x} = 2$",
                  "reason": "Writing a sentence as an equation: \"2 more than\" says that the logarithm of $y$, with the term in $x$ subtracted from it, is 2."
                },
                {
                  "step": "$\\log_{6}{y} - \\log_{6}{x^{5}} = 2$",
                  "reason": "Log of a power: $c\\log_a b = \\log_a b^c$ takes the number $5$ in front up as an exponent."
                },
                {
                  "step": "$\\log_{6}{\\dfrac{y}{x^{5}}} = 2$",
                  "reason": "Log of a quotient: the two logarithms have the same base $6$, so their difference is the logarithm of the quotient."
                },
                {
                  "step": "$\\dfrac{y}{x^{5}} = 6^{2}$",
                  "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$."
                },
                {
                  "step": "$\\dfrac{y}{x^{5}} = 36$",
                  "reason": "The definition of a power, from arithmetic: $6^{2} = 36$."
                },
                {
                  "step": "$y = 36x^{5}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^{5}$."
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
      "id": "t217-p1",
      "method": "direct proof",
      "statement": "Let $a$ be a positive number other than 1, $b$ a positive number and $c$ a real number. Then $\\log_a b^c = c\\log_a b$.",
      "idea": "Name $\\log_a b$ with a letter and write what it says in exponential form. Raising both sides to the power $c$ turns it into a statement about $b^c$, and the power law multiplies the exponents.",
      "lines": [
        {
          "line": "Let $x = \\log_a b$.",
          "reason": "Logarithm: $b$ is positive, so its logarithm to the base $a$ is a number, here called $x$."
        },
        {
          "line": "Then $a^x = b$.",
          "reason": "Logarithm: $\\log_a b = x$ means $a^x = b$."
        },
        {
          "line": "So $(a^x)^c = b^c$.",
          "reason": "Raising both sides to a power: both sides of line 2 are raised to the power $c$."
        },
        {
          "line": "So $a^{cx} = b^c$.",
          "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
        },
        {
          "line": "So $\\log_a b^c = cx$.",
          "reason": "Logarithm: $a^{cx} = b^c$ means $\\log_a b^c = cx$."
        },
        {
          "line": "Therefore $\\log_a b^c = c\\log_a b$.",
          "reason": "Substituting a value: $x$ is $\\log_a b$ by line 1."
        }
      ]
    },
    {
      "id": "t217-p2",
      "method": "direct proof",
      "statement": "Let $a$ be a positive number other than 1, and let $b$ and $c$ be positive numbers. Then $\\log_a bc = \\log_a b + \\log_a c$.",
      "idea": "Name the two logarithms with letters and write both in exponential form. Multiplying the two equations puts the product $bc$ on one side, and the product law adds the exponents on the other.",
      "lines": [
        {
          "line": "Let $x = \\log_a b$ and $y = \\log_a c$.",
          "reason": "Logarithm: $b$ and $c$ are positive, so their logarithms to the base $a$ are numbers."
        },
        {
          "line": "Then $a^x = b$ and $a^y = c$.",
          "reason": "Logarithm: $\\log_a b = x$ means $a^x = b$, and the same for $c$."
        },
        {
          "line": "So $a^x \\cdot a^y = bc$.",
          "reason": "Multiplying two equations: the left sides of line 2 are multiplied, and the right sides."
        },
        {
          "line": "So $a^{x+y} = bc$.",
          "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents."
        },
        {
          "line": "So $\\log_a bc = x + y$.",
          "reason": "Logarithm: $a^{x+y} = bc$ means $\\log_a bc = x + y$."
        },
        {
          "line": "Therefore $\\log_a bc = \\log_a b + \\log_a c$.",
          "reason": "Substituting a value: $x$ and $y$ are $\\log_a b$ and $\\log_a c$ by line 1."
        }
      ]
    },
    {
      "id": "t217-p3",
      "method": "direct proof",
      "statement": "Let $a$ be a positive number other than 1, and let $b$ and $c$ be positive numbers. Then $\\log_a \\dfrac{b}{c} = \\log_a b - \\log_a c$.",
      "idea": "A quotient is a product with a reciprocal, and a reciprocal is a power with the exponent $-1$. So the two identities already proved, for a product and for a power, give this one.",
      "lines": [
        {
          "line": "The quotient $\\dfrac{b}{c}$ is the product $b \\cdot c^{-1}$.",
          "reason": "Negative exponent: $c^{-1} = \\dfrac{1}{c}$."
        },
        {
          "line": "So $\\log_a \\dfrac{b}{c} = \\log_a b + \\log_a c^{-1}$.",
          "reason": "Log of a product: $b$ and $c^{-1}$ are positive numbers."
        },
        {
          "line": "Also $\\log_a c^{-1} = -\\log_a c$.",
          "reason": "Log of a power, with the exponent $-1$."
        },
        {
          "line": "Therefore $\\log_a \\dfrac{b}{c} = \\log_a b - \\log_a c$.",
          "reason": "Substituting a value: line 3 is put in line 2."
        }
      ]
    },
    {
      "id": "t217-p4",
      "method": "direct proof",
      "statement": "Let $a$ and $c$ be positive numbers other than 1, and let $b$ be a positive number. Then $\\log_c b = \\dfrac{\\log_a b}{\\log_a c}$.",
      "idea": "Name $\\log_a c$ and $\\log_c b$ with letters and write both in exponential form. Putting the first equation into the second gives a power of $a$ that equals $b$, so $\\log_a b$ is the product of the two logarithms, and dividing by $\\log_a c$ leaves $\\log_c b$.",
      "lines": [
        {
          "line": "Let $x = \\log_a c$ and $z = \\log_c b$.",
          "reason": "Logarithm: $c$ and $b$ are positive, and the bases $a$ and $c$ are positive and not 1."
        },
        {
          "line": "Then $a^x = c$ and $c^z = b$.",
          "reason": "Logarithm: $\\log_a c = x$ means $a^x = c$, and $\\log_c b = z$ means $c^z = b$."
        },
        {
          "line": "So $(a^x)^z = b$.",
          "reason": "Substituting a value: $a^x$ is put in place of $c$ in $c^z = b$."
        },
        {
          "line": "So $a^{xz} = b$.",
          "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
        },
        {
          "line": "So $\\log_a b = xz$.",
          "reason": "Logarithm: $a^{xz} = b$ means $\\log_a b = xz$."
        },
        {
          "line": "So $\\log_a b = \\log_a c \\cdot \\log_c b$.",
          "reason": "Substituting a value: $x$ and $z$ are $\\log_a c$ and $\\log_c b$ by line 1."
        },
        {
          "line": "The number $\\log_a c$ is not 0.",
          "reason": "Logarithm: $\\log_a c = 0$ would mean $c = a^0 = 1$, and $c$ is not 1."
        },
        {
          "line": "Therefore $\\log_c b = \\dfrac{\\log_a b}{\\log_a c}$.",
          "reason": "Dividing both sides by a nonzero number: both sides of line 6 are divided by $\\log_a c$."
        }
      ]
    },
    {
      "id": "t217-p5",
      "method": "direct proof",
      "statement": "Let $a$ be a positive number other than 1, $b$ a positive number and $n$ a real number other than 0. Then $\\log_{a^n} b^n = \\log_a b$.",
      "idea": "Write $\\log_a b$ in exponential form and raise both sides to the power $n$. The power law, used twice, lets the two exponents change places, so the same exponent now sits on the base $a^n$.",
      "lines": [
        {
          "line": "Let $x = \\log_a b$.",
          "reason": "Logarithm: $b$ is positive, so its logarithm to the base $a$ is a number, here called $x$."
        },
        {
          "line": "Then $a^x = b$.",
          "reason": "Logarithm: $\\log_a b = x$ means $a^x = b$."
        },
        {
          "line": "So $(a^x)^n = b^n$.",
          "reason": "Raising both sides to a power: both sides of line 2 are raised to the power $n$."
        },
        {
          "line": "So $a^{xn} = b^n$.",
          "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
        },
        {
          "line": "So $(a^n)^x = b^n$.",
          "reason": "Power law: read the other way, $a^{nx} = (a^n)^x$, and $xn = nx$."
        },
        {
          "line": "The number $a^n$ is positive.",
          "reason": "Logarithm: $a^c$ is positive for every $c$, since $a$ is positive."
        },
        {
          "line": "The number $a^n$ is not 1.",
          "reason": "Logarithm: $a^n = 1$ means $\\log_a 1 = n$, and $\\log_a 1 = 0$, while $n$ is not 0."
        },
        {
          "line": "So $\\log_{a^n} b^n = x$.",
          "reason": "Logarithm: $(a^n)^x = b^n$ means $\\log_{a^n} b^n = x$, and lines 6 and 7 allow the base $a^n$."
        },
        {
          "line": "Therefore $\\log_{a^n} b^n = \\log_a b$.",
          "reason": "Substituting a value: $x$ is $\\log_a b$ by line 1."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t217-s1",
      "method": "direct proof",
      "statement": "Prove that $\\dfrac{1}{\\log_{ab} c} = \\dfrac{1}{\\log_a c} + \\dfrac{1}{\\log_b c}$ for all positive numbers $a$, $b$ and $c$ with none of $a$, $b$, $ab$ and $c$ equal to 1. Facts it may use: logarithm, $\\log_a a^p = p$, Change of base, Log of a product, substituting a value, transitive property; the reciprocal, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "For a positive number $d$ other than 1, $\\log_d c = \\dfrac{\\log_c c}{\\log_c d}$.",
            "reason": "Change of base, to the base $c$, which is positive and not 1."
          },
          {
            "line": "Also $\\log_c c = 1$.",
            "reason": "Logarithm: $\\log_a a^p = p$ with $p = 1$."
          },
          {
            "line": "So $\\log_d c = \\dfrac{1}{\\log_c d}$.",
            "reason": "Substituting a value: line 2 is put in line 1."
          },
          {
            "line": "So $\\dfrac{1}{\\log_d c} = \\log_c d$.",
            "reason": "Reciprocal, from arithmetic: the reciprocal of $\\dfrac{1}{q}$ is $q$."
          },
          {
            "line": "With $ab$ in place of $d$: $\\dfrac{1}{\\log_{ab} c} = \\log_c ab$.",
            "reason": "Substituting a value: $ab$ is positive and not 1."
          },
          {
            "line": "With $a$ in place of $d$: $\\dfrac{1}{\\log_a c} = \\log_c a$.",
            "reason": "Substituting a value: $a$ is positive and not 1."
          },
          {
            "line": "With $b$ in place of $d$: $\\dfrac{1}{\\log_b c} = \\log_c b$.",
            "reason": "Substituting a value: $b$ is positive and not 1."
          },
          {
            "line": "Also $\\log_c ab = \\log_c a + \\log_c b$.",
            "reason": "Log of a product."
          },
          {
            "line": "So $\\dfrac{1}{\\log_{ab} c} = \\log_c a + \\log_c b$.",
            "reason": "Transitive property: lines 5 and 8 form a chain of equal numbers."
          },
          {
            "line": "So $\\dfrac{1}{\\log_{ab} c} = \\dfrac{1}{\\log_a c} + \\log_c b$.",
            "reason": "Substituting a value: by line 6, $\\dfrac{1}{\\log_a c}$ is put in place of $\\log_c a$."
          },
          {
            "line": "Therefore $\\dfrac{1}{\\log_{ab} c} = \\dfrac{1}{\\log_a c} + \\dfrac{1}{\\log_b c}$.",
            "reason": "Substituting a value: by line 7, $\\dfrac{1}{\\log_b c}$ is put in place of $\\log_c b$."
          }
        ]
      }
    },
    {
      "id": "t217-s2",
      "method": "direct proof",
      "statement": "Prove that $\\dfrac{1}{\\log_{\\frac{a}{b}} c} = \\dfrac{1}{\\log_a c} - \\dfrac{1}{\\log_b c}$ for all positive numbers $a$, $b$ and $c$ with none of $a$, $b$, $\\dfrac{a}{b}$ and $c$ equal to 1. Facts it may use: logarithm, $\\log_a a^p = p$, Change of base, Log of a quotient, substituting a value, transitive property; the reciprocal, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "For a positive number $d$ other than 1, $\\log_d c = \\dfrac{\\log_c c}{\\log_c d}$.",
            "reason": "Change of base, to the base $c$, which is positive and not 1."
          },
          {
            "line": "Also $\\log_c c = 1$.",
            "reason": "Logarithm: $\\log_a a^p = p$ with $p = 1$."
          },
          {
            "line": "So $\\log_d c = \\dfrac{1}{\\log_c d}$.",
            "reason": "Substituting a value: line 2 is put in line 1."
          },
          {
            "line": "So $\\dfrac{1}{\\log_d c} = \\log_c d$.",
            "reason": "Reciprocal, from arithmetic: the reciprocal of $\\dfrac{1}{q}$ is $q$."
          },
          {
            "line": "With $\\frac{a}{b}$ in place of $d$: $\\dfrac{1}{\\log_{\\frac{a}{b}} c} = \\log_c \\frac{a}{b}$.",
            "reason": "Substituting a value: $\\frac{a}{b}$ is positive and not 1."
          },
          {
            "line": "With $a$ in place of $d$: $\\dfrac{1}{\\log_a c} = \\log_c a$.",
            "reason": "Substituting a value: $a$ is positive and not 1."
          },
          {
            "line": "With $b$ in place of $d$: $\\dfrac{1}{\\log_b c} = \\log_c b$.",
            "reason": "Substituting a value: $b$ is positive and not 1."
          },
          {
            "line": "Also $\\log_c \\frac{a}{b} = \\log_c a - \\log_c b$.",
            "reason": "Log of a quotient."
          },
          {
            "line": "So $\\dfrac{1}{\\log_{\\frac{a}{b}} c} = \\log_c a - \\log_c b$.",
            "reason": "Transitive property: lines 5 and 8 form a chain of equal numbers."
          },
          {
            "line": "So $\\dfrac{1}{\\log_{\\frac{a}{b}} c} = \\dfrac{1}{\\log_a c} - \\log_c b$.",
            "reason": "Substituting a value: by line 6, $\\dfrac{1}{\\log_a c}$ is put in place of $\\log_c a$."
          },
          {
            "line": "Therefore $\\dfrac{1}{\\log_{\\frac{a}{b}} c} = \\dfrac{1}{\\log_a c} - \\dfrac{1}{\\log_b c}$.",
            "reason": "Substituting a value: by line 7, $\\dfrac{1}{\\log_b c}$ is put in place of $\\log_c b$."
          }
        ]
      }
    },
    {
      "id": "t217-s3",
      "method": "direct proof",
      "statement": "Prove that $\\log_{\\frac{1}{a}} b = -\\log_a b$ for every positive number $a$ other than 1 and every positive number $b$. Facts it may use: negative exponent, power law, Powers on base and argument, Log of a power, substituting a value, transitive property.",
      "check": {
        "proof": [
          {
            "line": "The base $\\dfrac{1}{a}$ is $a^{-1}$.",
            "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$ with $n = 1$."
          },
          {
            "line": "The number $b$ is $\\left(b^{-1}\\right)^{-1}$.",
            "reason": "Power law: $\\left(b^{-1}\\right)^{-1} = b^{(-1)(-1)} = b^{1}$."
          },
          {
            "line": "So $\\log_{\\frac{1}{a}} b = \\log_{a^{-1}} b$.",
            "reason": "Substituting a value: by line 1, $a^{-1}$ is put in place of the base $\\dfrac{1}{a}$."
          },
          {
            "line": "Also $\\log_{a^{-1}} b = \\log_{a^{-1}} \\left(b^{-1}\\right)^{-1}$.",
            "reason": "Substituting a value: by line 2, $\\left(b^{-1}\\right)^{-1}$ is put in place of $b$."
          },
          {
            "line": "Also $\\log_{a^{-1}} \\left(b^{-1}\\right)^{-1} = \\log_a b^{-1}$.",
            "reason": "Powers on base and argument, with $n = -1$ and the positive number $b^{-1}$ as the argument."
          },
          {
            "line": "Also $\\log_a b^{-1} = -\\log_a b$.",
            "reason": "Log of a power, with the exponent $-1$."
          },
          {
            "line": "Therefore $\\log_{\\frac{1}{a}} b = -\\log_a b$.",
            "reason": "Transitive property: lines 3, 4, 5 and 6 form a chain of equal numbers."
          }
        ]
      }
    }
  ]
}
