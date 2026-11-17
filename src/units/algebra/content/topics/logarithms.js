export default {
  "number": 170,
  "title": "Logarithms",
  "section": 14,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "545-553, 553-557"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $\\log_{\\sqrt[3]{49}}{343}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "9/2",
    "solution": [
      "Evaluate $\\log_{\\sqrt[3]{49}}{343}$.",
      "$\\left(\\sqrt[3]{49}\\right)^{x} = 343$",
      "$\\left(7^{2/3}\\right)^{x} = 7^{3}$",
      "$7^{\\dfrac{2x}{3}} = 7^{3}$",
      "$\\dfrac{2x}{3} = 3$",
      "$x = \\dfrac{9}{2}$"
    ]
  },
  "ideas": [
    {
      "name": "Logarithm",
      "concrete": "Since $12^{3} = 1728$, the power of 12 that gives 1728 is 3, and this is written $\\log_{12}{1728} = 3$. No power of 12 is negative or 0, so $\\log_{12}{(-1728)}$ has no value.",
      "general": "For a positive number $a$ other than 1 and a positive number $b$, the **logarithm** $\\log_a b$ is the power of $a$ that gives $b$: $\\log_a b = c$ means $a^c = b$. The number $a$ is the **base** of the logarithm. The statement $\\log_a b = c$ is in **logarithmic form**, and $a^c = b$ is the same statement in **exponential form**. A logarithm of 0 or of a negative number is not defined. Raising $a$ to the power $\\log_a b$ gives $b$: $a^{\\log_a b} = b$."
    },
    {
      "name": "The logarithm function is the inverse of the exponential function",
      "concrete": "The function $f(x) = 13^x$ takes 3 to 2197, since $13^{3} = 2197$, and the function $g(x) = \\log_{13} x$ takes 2197 back to 3, since $\\log_{13}{2197} = 3$. Every positive number is a value of $13^x$, so every positive number can go into $g$, and every real number comes out of it.",
      "general": "For a number $a$ greater than 1, the function $g(x) = \\log_a x$ is the inverse of the exponential function $f(x) = a^x$. The domain of $g$ is the range of $f$, the positive numbers, and the range of $g$ is the domain of $f$, all real numbers. The graph of $g$ is the mirror image of the graph of $f$ in the line $y = x$: it crosses the $x$-axis at $(1, 0)$, rises from left to right, and comes closer and closer to the $y$-axis as $x$ comes down toward 0."
    }
  ],
  "kinds": [
    {
      "id": "t170-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\log_{4}{65\\,536}$.",
            "lines": [
              {
                "step": "Evaluate $\\log_{4}{65\\,536}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4^{x} = 65\\,536$",
                "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{4}{65\\,536}$ means $4^{x} = 65\\,536$."
              },
              {
                "step": "$\\left(2^{2}\\right)^{x} = 2^{16}$",
                "reason": "Writing both numbers as powers of $2$: $4 = 2^{2}$ and $65\\,536 = 2^{16}$."
              },
              {
                "step": "$2^{2x} = 2^{16}$",
                "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$2x = 16$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
              },
              {
                "step": "$x = 8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\log_{49}{2401}$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{49}{2401}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$49^{x} = 2401$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{49}{2401}$ means $49^{x} = 2401$."
                },
                {
                  "step": "$\\left(7^{2}\\right)^{x} = 7^{4}$",
                  "reason": "Writing both numbers as powers of $7$: $49 = 7^{2}$ and $2401 = 7^{4}$."
                },
                {
                  "step": "$7^{2x} = 7^{4}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2x = 4$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $7$, so their exponents are equal."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{8}{262\\,144}$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Evaluate $\\log_{8}{262\\,144}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8^{x} = 262\\,144$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{8}{262\\,144}$ means $8^{x} = 262\\,144$."
                },
                {
                  "step": "$\\left(2^{3}\\right)^{x} = 2^{18}$",
                  "reason": "Writing both numbers as powers of $2$: $8 = 2^{3}$ and $262\\,144 = 2^{18}$."
                },
                {
                  "step": "$2^{3x} = 2^{18}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$3x = 18$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{9}{59\\,049}$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Evaluate $\\log_{9}{59\\,049}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9^{x} = 59\\,049$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{9}{59\\,049}$ means $9^{x} = 59\\,049$."
                },
                {
                  "step": "$\\left(3^{2}\\right)^{x} = 3^{10}$",
                  "reason": "Writing both numbers as powers of $3$: $9 = 3^{2}$ and $59\\,049 = 3^{10}$."
                },
                {
                  "step": "$3^{2x} = 3^{10}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2x = 10$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\log_{\\frac{1}{27}}{6561}$.",
            "lines": [
              {
                "step": "Evaluate $\\log_{\\frac{1}{27}}{6561}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(\\dfrac{1}{27}\\right)^{x} = 6561$",
                "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{\\frac{1}{27}}{6561}$ means $\\left(\\dfrac{1}{27}\\right)^{x} = 6561$."
              },
              {
                "step": "$\\left(3^{-3}\\right)^{x} = 3^{8}$",
                "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$, so $\\dfrac{1}{27} = 3^{-3}$ and $6561 = 3^{8}$."
              },
              {
                "step": "$3^{-3x} = 3^{8}$",
                "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$-3x = 8$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
              },
              {
                "step": "$x = -\\dfrac{8}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\log_{25}{\\dfrac{1}{3125}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-5/2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{25}{\\dfrac{1}{3125}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$25^{x} = \\dfrac{1}{3125}$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{25}{\\dfrac{1}{3125}}$ means $25^{x} = \\dfrac{1}{3125}$."
                },
                {
                  "step": "$\\left(5^{2}\\right)^{x} = 5^{-5}$",
                  "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$, so $25 = 5^{2}$ and $\\dfrac{1}{3125} = 5^{-5}$."
                },
                {
                  "step": "$5^{2x} = 5^{-5}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2x = -5$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $5$, so their exponents are equal."
                },
                {
                  "step": "$x = -\\dfrac{5}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{36}{\\dfrac{1}{1296}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{36}{\\dfrac{1}{1296}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$36^{x} = \\dfrac{1}{1296}$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{36}{\\dfrac{1}{1296}}$ means $36^{x} = \\dfrac{1}{1296}$."
                },
                {
                  "step": "$\\left(6^{2}\\right)^{x} = 6^{-4}$",
                  "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$, so $36 = 6^{2}$ and $\\dfrac{1}{1296} = 6^{-4}$."
                },
                {
                  "step": "$6^{2x} = 6^{-4}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2x = -4$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $6$, so their exponents are equal."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{100}{\\dfrac{1}{1000}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3/2",
              "lines": [
                {
                  "step": "Evaluate $\\log_{100}{\\dfrac{1}{1000}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$100^{x} = \\dfrac{1}{1000}$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{100}{\\dfrac{1}{1000}}$ means $100^{x} = \\dfrac{1}{1000}$."
                },
                {
                  "step": "$\\left(10^{2}\\right)^{x} = 10^{-3}$",
                  "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$, so $100 = 10^{2}$ and $\\dfrac{1}{1000} = 10^{-3}$."
                },
                {
                  "step": "$10^{2x} = 10^{-3}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2x = -3$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $10$, so their exponents are equal."
                },
                {
                  "step": "$x = -\\dfrac{3}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\log_{\\frac{1}{\\sqrt{6}}}{1296}$.",
            "lines": [
              {
                "step": "Evaluate $\\log_{\\frac{1}{\\sqrt{6}}}{1296}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(\\dfrac{1}{\\sqrt{6}}\\right)^{x} = 1296$",
                "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{\\frac{1}{\\sqrt{6}}}{1296}$ means $\\left(\\dfrac{1}{\\sqrt{6}}\\right)^{x} = 1296$."
              },
              {
                "step": "$\\left(6^{-1/2}\\right)^{x} = 6^{4}$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ and the negative exponent $a^{-n} = \\dfrac{1}{a^n}$ write both numbers as powers of $6$: $\\dfrac{1}{\\sqrt{6}} = 6^{-1/2}$ and $1296 = 6^{4}$."
              },
              {
                "step": "$6^{-\\dfrac{x}{2}} = 6^{4}$",
                "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$-\\dfrac{x}{2} = 4$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $6$, so their exponents are equal."
              },
              {
                "step": "$x = -8$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $-2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\log_{7\\sqrt[3]{7}}{\\dfrac{1}{2401}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3",
              "lines": [
                {
                  "step": "Evaluate $\\log_{7\\sqrt[3]{7}}{\\dfrac{1}{2401}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(7\\sqrt[3]{7}\\right)^{x} = \\dfrac{1}{2401}$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{7\\sqrt[3]{7}}{\\dfrac{1}{2401}}$ means $\\left(7\\sqrt[3]{7}\\right)^{x} = \\dfrac{1}{2401}$."
                },
                {
                  "step": "$\\left(7^{4/3}\\right)^{x} = 7^{-4}$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ and the negative exponent $a^{-n} = \\dfrac{1}{a^n}$ write both numbers as powers of $7$: $7\\sqrt[3]{7} = 7^{4/3}$ and $\\dfrac{1}{2401} = 7^{-4}$."
                },
                {
                  "step": "$7^{\\dfrac{4x}{3}} = 7^{-4}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$\\dfrac{4x}{3} = -4$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $7$, so their exponents are equal."
                },
                {
                  "step": "$x = -3$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{3}{4}$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{10\\sqrt[3]{10}}{\\sqrt{10}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3/8",
              "lines": [
                {
                  "step": "Evaluate $\\log_{10\\sqrt[3]{10}}{\\sqrt{10}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(10\\sqrt[3]{10}\\right)^{x} = \\sqrt{10}$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{10\\sqrt[3]{10}}{\\sqrt{10}}$ means $\\left(10\\sqrt[3]{10}\\right)^{x} = \\sqrt{10}$."
                },
                {
                  "step": "$\\left(10^{4/3}\\right)^{x} = 10^{1/2}$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ writes both numbers as powers of $10$: $10\\sqrt[3]{10} = 10^{4/3}$ and $\\sqrt{10} = 10^{1/2}$."
                },
                {
                  "step": "$10^{\\dfrac{4x}{3}} = 10^{1/2}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$\\dfrac{4x}{3} = \\dfrac{1}{2}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $10$, so their exponents are equal."
                },
                {
                  "step": "$x = \\dfrac{3}{8}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{3}{4}$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\log_{\\sqrt[3]{10}}{10\\sqrt[3]{10}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4",
              "lines": [
                {
                  "step": "Evaluate $\\log_{\\sqrt[3]{10}}{10\\sqrt[3]{10}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\sqrt[3]{10}\\right)^{x} = 10\\sqrt[3]{10}$",
                  "reason": "Logarithm: calling the value $x$, the statement $x = \\log_{\\sqrt[3]{10}}{10\\sqrt[3]{10}}$ means $\\left(\\sqrt[3]{10}\\right)^{x} = 10\\sqrt[3]{10}$."
                },
                {
                  "step": "$\\left(10^{1/3}\\right)^{x} = 10^{4/3}$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ writes both numbers as powers of $10$: $\\sqrt[3]{10} = 10^{1/3}$ and $10\\sqrt[3]{10} = 10^{4/3}$."
                },
                {
                  "step": "$10^{\\dfrac{x}{3}} = 10^{4/3}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$\\dfrac{x}{3} = \\dfrac{4}{3}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $10$, so their exponents are equal."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $125^{\\log_{5}{10}}$.",
            "lines": [
              {
                "step": "Evaluate $125^{\\log_{5}{10}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$125^{\\log_{5}{10}} = \\left(5^{3}\\right)^{\\log_{5}{10}}$",
                "reason": "Substituting a value: $125 = 5^{3}$ is put in place of $125$."
              },
              {
                "step": "$125^{\\log_{5}{10}} = \\left(5^{\\log_{5}{10}}\\right)^{3}$",
                "reason": "Power law: $(a^m)^n = a^{mn} = (a^n)^m$, so the two exponents can be taken in either order."
              },
              {
                "step": "$125^{\\log_{5}{10}} = 10^{3}$",
                "reason": "Logarithm: $a^{\\log_a b} = b$: raising $5$ to the power that gives $10$ gives $10$."
              },
              {
                "step": "$125^{\\log_{5}{10}} = 1000$",
                "reason": "The definition of a power, from arithmetic: $10^{3}$ is the product of $3$ factors $10$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $25^{\\log_{5}{4}}$.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "Evaluate $25^{\\log_{5}{4}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$25^{\\log_{5}{4}} = \\left(5^{2}\\right)^{\\log_{5}{4}}$",
                  "reason": "Substituting a value: $25 = 5^{2}$ is put in place of $25$."
                },
                {
                  "step": "$25^{\\log_{5}{4}} = \\left(5^{\\log_{5}{4}}\\right)^{2}$",
                  "reason": "Power law: $(a^m)^n = a^{mn} = (a^n)^m$, so the two exponents can be taken in either order."
                },
                {
                  "step": "$25^{\\log_{5}{4}} = 4^{2}$",
                  "reason": "Logarithm: $a^{\\log_a b} = b$: raising $5$ to the power that gives $4$ gives $4$."
                },
                {
                  "step": "$25^{\\log_{5}{4}} = 16$",
                  "reason": "The definition of a power, from arithmetic: $4^{2}$ is the product of $2$ factors $4$."
                }
              ]
            },
            {
              "prompt": "Evaluate $36^{\\log_{6}{11}}$.",
              "form": "Answer as an integer.",
              "answer": "121",
              "lines": [
                {
                  "step": "Evaluate $36^{\\log_{6}{11}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$36^{\\log_{6}{11}} = \\left(6^{2}\\right)^{\\log_{6}{11}}$",
                  "reason": "Substituting a value: $36 = 6^{2}$ is put in place of $36$."
                },
                {
                  "step": "$36^{\\log_{6}{11}} = \\left(6^{\\log_{6}{11}}\\right)^{2}$",
                  "reason": "Power law: $(a^m)^n = a^{mn} = (a^n)^m$, so the two exponents can be taken in either order."
                },
                {
                  "step": "$36^{\\log_{6}{11}} = 11^{2}$",
                  "reason": "Logarithm: $a^{\\log_a b} = b$: raising $6$ to the power that gives $11$ gives $11$."
                },
                {
                  "step": "$36^{\\log_{6}{11}} = 121$",
                  "reason": "The definition of a power, from arithmetic: $11^{2}$ is the product of $2$ factors $11$."
                }
              ]
            },
            {
              "prompt": "Evaluate $9^{\\log_{3}{8}}$.",
              "form": "Answer as an integer.",
              "answer": "64",
              "lines": [
                {
                  "step": "Evaluate $9^{\\log_{3}{8}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9^{\\log_{3}{8}} = \\left(3^{2}\\right)^{\\log_{3}{8}}$",
                  "reason": "Substituting a value: $9 = 3^{2}$ is put in place of $9$."
                },
                {
                  "step": "$9^{\\log_{3}{8}} = \\left(3^{\\log_{3}{8}}\\right)^{2}$",
                  "reason": "Power law: $(a^m)^n = a^{mn} = (a^n)^m$, so the two exponents can be taken in either order."
                },
                {
                  "step": "$9^{\\log_{3}{8}} = 8^{2}$",
                  "reason": "Logarithm: $a^{\\log_a b} = b$: raising $3$ to the power that gives $8$ gives $8$."
                },
                {
                  "step": "$9^{\\log_{3}{8}} = 64$",
                  "reason": "The definition of a power, from arithmetic: $8^{2}$ is the product of $2$ factors $8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t170-k2",
      "forms": [
        {
          "example": {
            "problem": "Find a number $x$ with $\\log_{x}{1296} = \\dfrac{4}{3}$.",
            "lines": [
              {
                "step": "Find a number $x$ with $\\log_{x}{1296} = \\dfrac{4}{3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^{4/3} = 1296$",
                "reason": "Logarithm: $\\log_{x}{1296} = \\dfrac{4}{3}$ means $x^{4/3} = 1296$, with $x > 0$."
              },
              {
                "step": "$x = 1296^{3/4}$",
                "reason": "Raising both sides to a power: both sides are raised to the power $\\dfrac{3}{4}$, and $\\left(x^{4/3}\\right)^{3/4} = x^1 = x$ by the power law."
              },
              {
                "step": "$x = \\left(6^{4}\\right)^{3/4}$",
                "reason": "Substituting a value: $1296 = 6^{4}$."
              },
              {
                "step": "$x = 6^{3} = 216$",
                "reason": "Power law: $(a^m)^n = a^{mn}$, and $4 \\cdot \\dfrac{3}{4} = 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ with $\\log_{x}{\\dfrac{1}{27}} = -\\dfrac{3}{5}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 243",
              "lines": [
                {
                  "step": "Find a number $x$ with $\\log_{x}{\\dfrac{1}{27}} = -\\dfrac{3}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^{-3/5} = \\dfrac{1}{27}$",
                  "reason": "Logarithm: $\\log_{x}{\\dfrac{1}{27}} = -\\dfrac{3}{5}$ means $x^{-3/5} = \\dfrac{1}{27}$, with $x > 0$."
                },
                {
                  "step": "$x = \\left(\\dfrac{1}{27}\\right)^{-5/3}$",
                  "reason": "Raising both sides to a power: both sides are raised to the power $-\\dfrac{5}{3}$, and $\\left(x^{-3/5}\\right)^{-5/3} = x^1 = x$ by the power law."
                },
                {
                  "step": "$x = \\left(3^{-3}\\right)^{-5/3}$",
                  "reason": "Substituting a value: $\\dfrac{1}{27} = 3^{-3}$."
                },
                {
                  "step": "$x = 3^{5} = 243$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$, and $-3 \\cdot -\\dfrac{5}{3} = 5$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $\\log_{x}{\\dfrac{1}{64}} = -\\dfrac{6}{5}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 32",
              "lines": [
                {
                  "step": "Find a number $x$ with $\\log_{x}{\\dfrac{1}{64}} = -\\dfrac{6}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^{-6/5} = \\dfrac{1}{64}$",
                  "reason": "Logarithm: $\\log_{x}{\\dfrac{1}{64}} = -\\dfrac{6}{5}$ means $x^{-6/5} = \\dfrac{1}{64}$, with $x > 0$."
                },
                {
                  "step": "$x = \\left(\\dfrac{1}{64}\\right)^{-5/6}$",
                  "reason": "Raising both sides to a power: both sides are raised to the power $-\\dfrac{5}{6}$, and $\\left(x^{-6/5}\\right)^{-5/6} = x^1 = x$ by the power law."
                },
                {
                  "step": "$x = \\left(2^{-6}\\right)^{-5/6}$",
                  "reason": "Substituting a value: $\\dfrac{1}{64} = 2^{-6}$."
                },
                {
                  "step": "$x = 2^{5} = 32$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$, and $-6 \\cdot -\\dfrac{5}{6} = 5$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $\\log_{x}{3125} = \\dfrac{5}{3}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 125",
              "lines": [
                {
                  "step": "Find a number $x$ with $\\log_{x}{3125} = \\dfrac{5}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^{5/3} = 3125$",
                  "reason": "Logarithm: $\\log_{x}{3125} = \\dfrac{5}{3}$ means $x^{5/3} = 3125$, with $x > 0$."
                },
                {
                  "step": "$x = 3125^{3/5}$",
                  "reason": "Raising both sides to a power: both sides are raised to the power $\\dfrac{3}{5}$, and $\\left(x^{5/3}\\right)^{3/5} = x^1 = x$ by the power law."
                },
                {
                  "step": "$x = \\left(5^{5}\\right)^{3/5}$",
                  "reason": "Substituting a value: $3125 = 5^{5}$."
                },
                {
                  "step": "$x = 5^{3} = 125$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$, and $5 \\cdot \\dfrac{3}{5} = 3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $x$ with $\\log_{49}{(5x + 3)} = \\dfrac{1}{2}$.",
            "lines": [
              {
                "step": "Find a number $x$ with $\\log_{49}{(5x + 3)} = \\dfrac{1}{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x + 3 = 49^{1/2}$",
                "reason": "Logarithm: $\\log_{49}{(5x + 3)} = \\dfrac{1}{2}$ means $49^{1/2} = 5x + 3$."
              },
              {
                "step": "$5x + 3 = 7$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$: $49^{1/2} = 7$, and $7^{1} = 7$."
              },
              {
                "step": "$5x = 4$",
                "reason": "Adding the same number to both sides: $-3$ is added to both sides."
              },
              {
                "step": "$x = \\dfrac{4}{5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ with $\\log_{4}{(-3x - 9)} = \\dfrac{3}{2}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -17/3",
              "lines": [
                {
                  "step": "Find a number $x$ with $\\log_{4}{(-3x - 9)} = \\dfrac{3}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x - 9 = 4^{3/2}$",
                  "reason": "Logarithm: $\\log_{4}{(-3x - 9)} = \\dfrac{3}{2}$ means $4^{3/2} = -3x - 9$."
                },
                {
                  "step": "$-3x - 9 = 8$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$: $4^{1/2} = 2$, and $2^{3} = 8$."
                },
                {
                  "step": "$-3x = 17$",
                  "reason": "Adding the same number to both sides: $9$ is added to both sides."
                },
                {
                  "step": "$x = -\\dfrac{17}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $\\log_{8}{(-3x - 3)} = \\dfrac{1}{3}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -5/3",
              "lines": [
                {
                  "step": "Find a number $x$ with $\\log_{8}{(-3x - 3)} = \\dfrac{1}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x - 3 = 8^{1/3}$",
                  "reason": "Logarithm: $\\log_{8}{(-3x - 3)} = \\dfrac{1}{3}$ means $8^{1/3} = -3x - 3$."
                },
                {
                  "step": "$-3x - 3 = 2$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$: $8^{1/3} = 2$, and $2^{1} = 2$."
                },
                {
                  "step": "$-3x = 5$",
                  "reason": "Adding the same number to both sides: $3$ is added to both sides."
                },
                {
                  "step": "$x = -\\dfrac{5}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ with $\\log_{125}{(3x + 4)} = \\dfrac{1}{3}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 1/3",
              "lines": [
                {
                  "step": "Find a number $x$ with $\\log_{125}{(3x + 4)} = \\dfrac{1}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x + 4 = 125^{1/3}$",
                  "reason": "Logarithm: $\\log_{125}{(3x + 4)} = \\dfrac{1}{3}$ means $125^{1/3} = 3x + 4$."
                },
                {
                  "step": "$3x + 4 = 5$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$: $125^{1/3} = 5$, and $5^{1} = 5$."
                },
                {
                  "step": "$3x = 1$",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{1}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t170-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $y = 1 + 2 \\log_{3}{(5x - 3)}$ for $x$ in terms of $y$.",
            "lines": [
              {
                "step": "Solve $y = 1 + 2 \\log_{3}{(5x - 3)}$ for $x$ in terms of $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y - 1 = 2 \\log_{3}{(5x - 3)}$",
                "reason": "Adding the same number to both sides: $-1$ is added to both sides."
              },
              {
                "step": "$\\dfrac{y - 1}{2} = \\log_{3}{(5x - 3)}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$5x - 3 = 3^{\\frac{y - 1}{2}}$",
                "reason": "Logarithm: $\\log_{3}{(5x - 3)} = \\dfrac{y - 1}{2}$ means $3^{\\frac{y - 1}{2}} = 5x - 3$."
              },
              {
                "step": "$5x = 3^{\\frac{y - 1}{2}} + 3$",
                "reason": "Adding the same number to both sides: $3$ is added to both sides."
              },
              {
                "step": "$x = \\dfrac{3^{\\frac{y - 1}{2}} + 3}{5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $y = 5 + 3 \\log_{3}{(3x + 8)}$ for $x$ in terms of $y$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (3^((y-5)/3)-8)/3",
              "lines": [
                {
                  "step": "Solve $y = 5 + 3 \\log_{3}{(3x + 8)}$ for $x$ in terms of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 5 = 3 \\log_{3}{(3x + 8)}$",
                  "reason": "Adding the same number to both sides: $-5$ is added to both sides."
                },
                {
                  "step": "$\\dfrac{y - 5}{3} = \\log_{3}{(3x + 8)}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$3x + 8 = 3^{\\frac{y - 5}{3}}$",
                  "reason": "Logarithm: $\\log_{3}{(3x + 8)} = \\dfrac{y - 5}{3}$ means $3^{\\frac{y - 5}{3}} = 3x + 8$."
                },
                {
                  "step": "$3x = 3^{\\frac{y - 5}{3}} - 8$",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{3^{\\frac{y - 5}{3}} - 8}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Solve $y = -4 + 4 \\log_{8}{(5x + 4)}$ for $x$ in terms of $y$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (8^((y+4)/4)-4)/5",
              "lines": [
                {
                  "step": "Solve $y = -4 + 4 \\log_{8}{(5x + 4)}$ for $x$ in terms of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y + 4 = 4 \\log_{8}{(5x + 4)}$",
                  "reason": "Adding the same number to both sides: $4$ is added to both sides."
                },
                {
                  "step": "$\\dfrac{y + 4}{4} = \\log_{8}{(5x + 4)}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$5x + 4 = 8^{\\frac{y + 4}{4}}$",
                  "reason": "Logarithm: $\\log_{8}{(5x + 4)} = \\dfrac{y + 4}{4}$ means $8^{\\frac{y + 4}{4}} = 5x + 4$."
                },
                {
                  "step": "$5x = 8^{\\frac{y + 4}{4}} - 4$",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{8^{\\frac{y + 4}{4}} - 4}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Solve $y = -8 + 3 \\log_{8}{(5x + 5)}$ for $x$ in terms of $y$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (8^((y+8)/3)-5)/5",
              "lines": [
                {
                  "step": "Solve $y = -8 + 3 \\log_{8}{(5x + 5)}$ for $x$ in terms of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y + 8 = 3 \\log_{8}{(5x + 5)}$",
                  "reason": "Adding the same number to both sides: $8$ is added to both sides."
                },
                {
                  "step": "$\\dfrac{y + 8}{3} = \\log_{8}{(5x + 5)}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$5x + 5 = 8^{\\frac{y + 8}{3}}$",
                  "reason": "Logarithm: $\\log_{8}{(5x + 5)} = \\dfrac{y + 8}{3}$ means $8^{\\frac{y + 8}{3}} = 5x + 5$."
                },
                {
                  "step": "$5x = 8^{\\frac{y + 8}{3}} - 5$",
                  "reason": "Adding the same number to both sides: $-5$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{8^{\\frac{y + 8}{3}} - 5}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\log_{2}{(\\log_{2}{(-4x - 10)})} = 3$.",
            "lines": [
              {
                "step": "Solve $\\log_{2}{(\\log_{2}{(-4x - 10)})} = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{2}{(-4x - 10)} = 2^{3} = 8$",
                "reason": "Substitution for a repeated expression: $y$ takes the place of $\\log_{2}{(-4x - 10)}$, and the logarithm $\\log_{2}{y} = 3$ means $y = 2^{3}$."
              },
              {
                "step": "$-4x - 10 = 2^{8} = 256$",
                "reason": "Logarithm: $\\log_{2}{(-4x - 10)} = 8$ means $-4x - 10 = 2^{8}$."
              },
              {
                "step": "$-4x = 266$",
                "reason": "Adding the same number to both sides: $10$ is added to both sides."
              },
              {
                "step": "$x = -\\dfrac{133}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\log_{2}{(\\log_{5}{(4x + 9)})} = 2$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 154",
              "lines": [
                {
                  "step": "Solve $\\log_{2}{(\\log_{5}{(4x + 9)})} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{5}{(4x + 9)} = 2^{2} = 4$",
                  "reason": "Substitution for a repeated expression: $y$ takes the place of $\\log_{5}{(4x + 9)}$, and the logarithm $\\log_{2}{y} = 2$ means $y = 2^{2}$."
                },
                {
                  "step": "$4x + 9 = 5^{4} = 625$",
                  "reason": "Logarithm: $\\log_{5}{(4x + 9)} = 4$ means $4x + 9 = 5^{4}$."
                },
                {
                  "step": "$4x = 616$",
                  "reason": "Adding the same number to both sides: $-9$ is added to both sides."
                },
                {
                  "step": "$x = 154$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{2}{(\\log_{3}{(2x - 15)})} = 2$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 48",
              "lines": [
                {
                  "step": "Solve $\\log_{2}{(\\log_{3}{(2x - 15)})} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{3}{(2x - 15)} = 2^{2} = 4$",
                  "reason": "Substitution for a repeated expression: $y$ takes the place of $\\log_{3}{(2x - 15)}$, and the logarithm $\\log_{2}{y} = 2$ means $y = 2^{2}$."
                },
                {
                  "step": "$2x - 15 = 3^{4} = 81$",
                  "reason": "Logarithm: $\\log_{3}{(2x - 15)} = 4$ means $2x - 15 = 3^{4}$."
                },
                {
                  "step": "$2x = 96$",
                  "reason": "Adding the same number to both sides: $15$ is added to both sides."
                },
                {
                  "step": "$x = 48$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $\\log_{2}{(\\log_{6}{(-3x + 3)})} = 2$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -431",
              "lines": [
                {
                  "step": "Solve $\\log_{2}{(\\log_{6}{(-3x + 3)})} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{6}{(-3x + 3)} = 2^{2} = 4$",
                  "reason": "Substitution for a repeated expression: $y$ takes the place of $\\log_{6}{(-3x + 3)}$, and the logarithm $\\log_{2}{y} = 2$ means $y = 2^{2}$."
                },
                {
                  "step": "$-3x + 3 = 6^{4} = 1296$",
                  "reason": "Logarithm: $\\log_{6}{(-3x + 3)} = 4$ means $-3x + 3 = 6^{4}$."
                },
                {
                  "step": "$-3x = 1293$",
                  "reason": "Adding the same number to both sides: $-3$ is added to both sides."
                },
                {
                  "step": "$x = -431$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t170-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the domain of $f(x) = 3 \\log_{\\frac{1}{2}}{(4x - 11)} + 6$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = 3 \\log_{\\frac{1}{2}}{(4x - 11)} + 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The logarithm needs $4x - 11 > 0$.",
                "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
              },
              {
                "step": "$4x > 11$",
                "reason": "Adding the same number: $11$ is added to both sides, and the sign stays."
              },
              {
                "step": "$x > \\dfrac{11}{4}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$, and the sign stays."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = -4 \\log_{4}{(5x - 12)} - 8$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(12/5, inf)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = -4 \\log_{4}{(5x - 12)} - 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $5x - 12 > 0$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "$5x > 12$",
                  "reason": "Adding the same number: $12$ is added to both sides, and the sign stays."
                },
                {
                  "step": "$x > \\dfrac{12}{5}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{5}$, and the sign stays."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = 4 \\log_{\\frac{1}{4}}{(7x - 9)} + 5$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(9/7, inf)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = 4 \\log_{\\frac{1}{4}}{(7x - 9)} + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $7x - 9 > 0$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "$7x > 9$",
                  "reason": "Adding the same number: $9$ is added to both sides, and the sign stays."
                },
                {
                  "step": "$x > \\dfrac{9}{7}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{7}$, and the sign stays."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = 4 \\log_{10}{(2x + 4)} - 6$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-2, inf)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = 4 \\log_{10}{(2x + 4)} - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $2x + 4 > 0$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "$2x > -4$",
                  "reason": "Adding the same number: $-4$ is added to both sides, and the sign stays."
                },
                {
                  "step": "$x > -2$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$, and the sign stays."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = -4 \\log_{3}{(-4x + 8)} - 9$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = -4 \\log_{3}{(-4x + 8)} - 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The logarithm needs $-4x + 8 > 0$.",
                "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
              },
              {
                "step": "$-4x > -8$",
                "reason": "Adding the same number: $-8$ is added to both sides, and the sign stays."
              },
              {
                "step": "$x < 2$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-\\dfrac{1}{4}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = 2 \\log_{10}{(-7x + 5)} - 7$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, 5/7)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = 2 \\log_{10}{(-7x + 5)} - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $-7x + 5 > 0$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "$-7x > -5$",
                  "reason": "Adding the same number: $-5$ is added to both sides, and the sign stays."
                },
                {
                  "step": "$x < \\dfrac{5}{7}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-\\dfrac{1}{7}$."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = -3 \\log_{9}{(-6x + 15)} - 6$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, 5/2)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = -3 \\log_{9}{(-6x + 15)} - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $-6x + 15 > 0$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "$-6x > -15$",
                  "reason": "Adding the same number: $-15$ is added to both sides, and the sign stays."
                },
                {
                  "step": "$x < \\dfrac{5}{2}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-\\dfrac{1}{6}$."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = -2 \\log_{6}{(-6x - 4)} - 7$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -2/3)",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = -2 \\log_{6}{(-6x - 4)} - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $-6x - 4 > 0$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "$-6x > 4$",
                  "reason": "Adding the same number: $4$ is added to both sides, and the sign stays."
                },
                {
                  "step": "$x < -\\dfrac{2}{3}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-\\dfrac{1}{6}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t170-k5",
      "forms": [
        {
          "example": {
            "problem": "Find $x$, given that $a \\cdot 3^{x} = 5$ and $a \\cdot 147^{x} = 1715$.",
            "lines": [
              {
                "step": "Find $x$, given that $a \\cdot 3^{x} = 5$ and $a \\cdot 147^{x} = 1715$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{a \\cdot 147^{x}}{a \\cdot 3^{x}} = \\dfrac{1715}{5}$",
                "reason": "Dividing both sides by a nonzero number: the sides of the second equation are divided by the two equal sides of the first, $a \\cdot 3^{x}$ and $5$, which are not 0."
              },
              {
                "step": "$49^{x} = 343$",
                "reason": "Power of a quotient: $a$ cancels, and $\\dfrac{147^{x}}{3^{x}} = \\left(\\dfrac{147}{3}\\right)^{x} = 49^{x}$."
              },
              {
                "step": "$x = \\log_{49}{343}$",
                "reason": "Logarithm: $49^{x} = 343$ means $x = \\log_{49}{343}$."
              },
              {
                "step": "$x = \\log_{7^{2}}{7^{3}}$",
                "reason": "Substituting a value: $49 = 7^{2}$ and $343 = 7^{3}$ are put in line 4."
              },
              {
                "step": "$\\left(7^{2}\\right)^{x} = 7^{3}$",
                "reason": "Logarithm: line 5 means this."
              },
              {
                "step": "$7^{2x} = 7^{3}$",
                "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$2x = 3$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $7$, so their exponents are equal."
              },
              {
                "step": "$x = \\dfrac{3}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$, given that $a \\cdot 2^{x} = 14$ and $a \\cdot 8^{x} = 448$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5/2",
              "lines": [
                {
                  "step": "Find $x$, given that $a \\cdot 2^{x} = 14$ and $a \\cdot 8^{x} = 448$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{a \\cdot 8^{x}}{a \\cdot 2^{x}} = \\dfrac{448}{14}$",
                  "reason": "Dividing both sides by a nonzero number: the sides of the second equation are divided by the two equal sides of the first, $a \\cdot 2^{x}$ and $14$, which are not 0."
                },
                {
                  "step": "$4^{x} = 32$",
                  "reason": "Power of a quotient: $a$ cancels, and $\\dfrac{8^{x}}{2^{x}} = \\left(\\dfrac{8}{2}\\right)^{x} = 4^{x}$."
                },
                {
                  "step": "$x = \\log_{4}{32}$",
                  "reason": "Logarithm: $4^{x} = 32$ means $x = \\log_{4}{32}$."
                },
                {
                  "step": "$x = \\log_{2^{2}}{2^{5}}$",
                  "reason": "Substituting a value: $4 = 2^{2}$ and $32 = 2^{5}$ are put in line 4."
                },
                {
                  "step": "$\\left(2^{2}\\right)^{x} = 2^{5}$",
                  "reason": "Logarithm: line 5 means this."
                },
                {
                  "step": "$2^{2x} = 2^{5}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2x = 5$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$x = \\dfrac{5}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find $x$, given that $a \\cdot 3^{x} = 9$ and $a \\cdot 48^{x} = 4608$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 9/4",
              "lines": [
                {
                  "step": "Find $x$, given that $a \\cdot 3^{x} = 9$ and $a \\cdot 48^{x} = 4608$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{a \\cdot 48^{x}}{a \\cdot 3^{x}} = \\dfrac{4608}{9}$",
                  "reason": "Dividing both sides by a nonzero number: the sides of the second equation are divided by the two equal sides of the first, $a \\cdot 3^{x}$ and $9$, which are not 0."
                },
                {
                  "step": "$16^{x} = 512$",
                  "reason": "Power of a quotient: $a$ cancels, and $\\dfrac{48^{x}}{3^{x}} = \\left(\\dfrac{48}{3}\\right)^{x} = 16^{x}$."
                },
                {
                  "step": "$x = \\log_{16}{512}$",
                  "reason": "Logarithm: $16^{x} = 512$ means $x = \\log_{16}{512}$."
                },
                {
                  "step": "$x = \\log_{2^{4}}{2^{9}}$",
                  "reason": "Substituting a value: $16 = 2^{4}$ and $512 = 2^{9}$ are put in line 4."
                },
                {
                  "step": "$\\left(2^{4}\\right)^{x} = 2^{9}$",
                  "reason": "Logarithm: line 5 means this."
                },
                {
                  "step": "$2^{4x} = 2^{9}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$4x = 9$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$x = \\dfrac{9}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Find $x$, given that $a \\cdot 6^{x} = 3$ and $a \\cdot 192^{x} = 12$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 2/5",
              "lines": [
                {
                  "step": "Find $x$, given that $a \\cdot 6^{x} = 3$ and $a \\cdot 192^{x} = 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{a \\cdot 192^{x}}{a \\cdot 6^{x}} = \\dfrac{12}{3}$",
                  "reason": "Dividing both sides by a nonzero number: the sides of the second equation are divided by the two equal sides of the first, $a \\cdot 6^{x}$ and $3$, which are not 0."
                },
                {
                  "step": "$32^{x} = 4$",
                  "reason": "Power of a quotient: $a$ cancels, and $\\dfrac{192^{x}}{6^{x}} = \\left(\\dfrac{192}{6}\\right)^{x} = 32^{x}$."
                },
                {
                  "step": "$x = \\log_{32}{4}$",
                  "reason": "Logarithm: $32^{x} = 4$ means $x = \\log_{32}{4}$."
                },
                {
                  "step": "$x = \\log_{2^{5}}{2^{2}}$",
                  "reason": "Substituting a value: $32 = 2^{5}$ and $4 = 2^{2}$ are put in line 4."
                },
                {
                  "step": "$\\left(2^{5}\\right)^{x} = 2^{2}$",
                  "reason": "Logarithm: line 5 means this."
                },
                {
                  "step": "$2^{5x} = 2^{2}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$5x = 2$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$x = \\dfrac{2}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t170-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\log_{\\frac{1}{121}}{1331}$, and write that line right.",
            "given": [
              "$x = \\log_{\\frac{1}{121}}{1331}$",
              "$\\left(\\dfrac{1}{121}\\right)^{x} = 1331$",
              "$\\left(11^{2}\\right)^{x} = 11^{3}$",
              "$11^{2x} = 11^{3}$",
              "$2x = 3$",
              "$x = \\dfrac{3}{2}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $\\log_{\\frac{1}{121}}{1331}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 writes $\\dfrac{1}{121}$ as $11^{2}$: the minus sign of the exponent is lost.",
                "reason": "Negative exponent: $\\dfrac{1}{121} = 11^{-2}$, since $a^{-n} = \\dfrac{1}{a^n}$."
              },
              {
                "step": "Line 3 written right is $\\left(11^{-2}\\right)^{x} = 11^{3}$.",
                "reason": "The exponent of $\\dfrac{1}{121}$ as a power of $11$ is $-2$, and it keeps its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\log_{\\frac{1}{32}}{128}$, and write that line right.",
              "given": [
                "$x = \\log_{\\frac{1}{32}}{128}$",
                "$\\left(\\dfrac{1}{32}\\right)^{x} = 128$",
                "$\\left(2^{-5}\\right)^{x} = 2^{7}$",
                "$2^{-5x} = 2^{7}$",
                "$5x = 7$",
                "$x = \\dfrac{7}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -5*x = 7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\log_{\\frac{1}{32}}{128}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes the exponents of line 4 with the minus sign lost.",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal. Each exponent is copied with its sign."
                },
                {
                  "step": "Line 5 written right is $-5x = 7$.",
                  "reason": "The exponent of $\\dfrac{1}{32}$ as a power of $2$ is $-5$, and it keeps its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\log_{32}{\\dfrac{1}{256}}$, and write that line right.",
              "given": [
                "$x = \\log_{32}{\\dfrac{1}{256}}$",
                "$32^{x} = \\dfrac{1}{256}$",
                "$\\left(2^{5}\\right)^{x} = 2^{-8}$",
                "$2^{5x} = 2^{8}$",
                "$5x = 8$",
                "$x = \\dfrac{8}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2^(5*x) = 2^(-8)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\log_{32}{\\dfrac{1}{256}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 turns the exponent $-8$ of line 3 into $8$: the minus sign is lost.",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents and keeps their signs."
                },
                {
                  "step": "Line 4 written right is $2^{5x} = 2^{-8}$.",
                  "reason": "The exponent of $\\dfrac{1}{256}$ as a power of $2$ is $-8$, and it keeps its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\log_{64}{\\dfrac{1}{32}}$, and write that line right.",
              "given": [
                "$x = \\log_{64}{\\dfrac{1}{32}}$",
                "$64^{x} = \\dfrac{1}{32}$",
                "$\\left(2^{6}\\right)^{x} = 2^{5}$",
                "$2^{6x} = 2^{5}$",
                "$6x = 5$",
                "$x = \\dfrac{5}{6}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (2^6)^x = 2^(-5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\log_{64}{\\dfrac{1}{32}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $\\dfrac{1}{32}$ as $2^{5}$: the minus sign of the exponent is lost.",
                  "reason": "Negative exponent: $\\dfrac{1}{32} = 2^{-5}$, since $a^{-n} = \\dfrac{1}{a^n}$."
                },
                {
                  "step": "Line 3 written right is $\\left(2^{6}\\right)^{x} = 2^{-5}$.",
                  "reason": "The exponent of $\\dfrac{1}{32}$ as a power of $2$ is $-5$, and it keeps its sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t170-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = \\log_{3}{(x + 9)} - 1$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\log_{3}{(x + 9)} - 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The logarithm needs $x + 9 > 0$, so the graph lies to the right of the line $x = -9$.",
                "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
              },
              {
                "step": "At $y = 0$: $\\log_{3}{(x + 9)} = 1$, so $x + 9 = 3^{1} = 3$, and the graph crosses the $x$-axis at $(-6, 0)$.",
                "reason": "Logarithm: $\\log_{3}{(x + 9)} = 1$ means $3^{1} = x + 9$."
              },
              {
                "step": "At $x = 0$: $y = \\log_{3}{9} - 1 = 1$, so the graph crosses the $y$-axis at $(0, 1)$.",
                "reason": "Logarithm: $3^{2} = 9$ means $\\log_{3}{9} = 2$."
              },
              {
                "step": "As $x$ comes down toward $-9$ the values of $y$ fall without end: the graph comes closer and closer to the line $x = -9$ and never meets it.",
                "reason": "The logarithm function is the inverse of the exponential function: $3^x$ rises as $x$ rises, so its inverse $\\log_{3} x$ rises too, and inputs close to 0 give large negative values."
              },
              {
                "step": "The curve through these points, which rises from left to right, is the graph.",
                "reason": "The logarithm function is the inverse of the exponential function: $3^x$ rises as $x$ rises, so its inverse $\\log_{3} x$ rises too, and inputs close to 0 give large negative values.",
                "figure": {
                  "file": "logarithms-1.svg",
                  "alt": "A curve rising from left to right, coming close to the dashed line x = −9 as it goes down, crossing the x-axis at (−6, 0) and the y-axis at (0, 1)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = \\log_{2}{(x + 1)} + 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-\\dfrac{1}{2}, 0)$",
                  "$(0, 1)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -1$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{2}{(x + 1)} + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $x + 1 > 0$, so the graph lies to the right of the line $x = -1$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "At $y = 0$: $\\log_{2}{(x + 1)} = -1$, so $x + 1 = 2^{-1} = \\dfrac{1}{2}$, and the graph crosses the $x$-axis at $(-\\dfrac{1}{2}, 0)$.",
                  "reason": "Logarithm: $\\log_{2}{(x + 1)} = -1$ means $2^{-1} = x + 1$."
                },
                {
                  "step": "At $x = 0$: $y = \\log_{2}{1} + 1 = 1$, so the graph crosses the $y$-axis at $(0, 1)$.",
                  "reason": "Logarithm: $2^{0} = 1$ means $\\log_{2}{1} = 0$."
                },
                {
                  "step": "As $x$ comes down toward $-1$ the values of $y$ fall without end: the graph comes closer and closer to the line $x = -1$ and never meets it.",
                  "reason": "The logarithm function is the inverse of the exponential function: $2^x$ rises as $x$ rises, so its inverse $\\log_{2} x$ rises too, and inputs close to 0 give large negative values."
                },
                {
                  "step": "The curve through these points, which rises from left to right, is the graph.",
                  "reason": "The logarithm function is the inverse of the exponential function: $2^x$ rises as $x$ rises, so its inverse $\\log_{2} x$ rises too, and inputs close to 0 give large negative values.",
                  "figure": {
                    "file": "logarithms-2.svg",
                    "alt": "A curve rising from left to right, coming close to the dashed line x = −1 as it goes down, crossing the x-axis at (−1/2, 0) and the y-axis at (0, 1)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\log_{5}{(x + 25)} - 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-20, 0)$",
                  "$(0, 1)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -25$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{5}{(x + 25)} - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $x + 25 > 0$, so the graph lies to the right of the line $x = -25$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "At $y = 0$: $\\log_{5}{(x + 25)} = 1$, so $x + 25 = 5^{1} = 5$, and the graph crosses the $x$-axis at $(-20, 0)$.",
                  "reason": "Logarithm: $\\log_{5}{(x + 25)} = 1$ means $5^{1} = x + 25$."
                },
                {
                  "step": "At $x = 0$: $y = \\log_{5}{25} - 1 = 1$, so the graph crosses the $y$-axis at $(0, 1)$.",
                  "reason": "Logarithm: $5^{2} = 25$ means $\\log_{5}{25} = 2$."
                },
                {
                  "step": "As $x$ comes down toward $-25$ the values of $y$ fall without end: the graph comes closer and closer to the line $x = -25$ and never meets it.",
                  "reason": "The logarithm function is the inverse of the exponential function: $5^x$ rises as $x$ rises, so its inverse $\\log_{5} x$ rises too, and inputs close to 0 give large negative values."
                },
                {
                  "step": "The curve through these points, which rises from left to right, is the graph.",
                  "reason": "The logarithm function is the inverse of the exponential function: $5^x$ rises as $x$ rises, so its inverse $\\log_{5} x$ rises too, and inputs close to 0 give large negative values.",
                  "figure": {
                    "file": "logarithms-3.svg",
                    "alt": "A curve rising from left to right, coming close to the dashed line x = −25 as it goes down, crossing the x-axis at (−20, 0) and the y-axis at (0, 1)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\log_{4}{(x + 1)} - 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -1)$",
                  "$(3, 0)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -1$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{4}{(x + 1)} - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $x + 1 > 0$, so the graph lies to the right of the line $x = -1$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "At $y = 0$: $\\log_{4}{(x + 1)} = 1$, so $x + 1 = 4^{1} = 4$, and the graph crosses the $x$-axis at $(3, 0)$.",
                  "reason": "Logarithm: $\\log_{4}{(x + 1)} = 1$ means $4^{1} = x + 1$."
                },
                {
                  "step": "At $x = 0$: $y = \\log_{4}{1} - 1 = -1$, so the graph crosses the $y$-axis at $(0, -1)$.",
                  "reason": "Logarithm: $4^{0} = 1$ means $\\log_{4}{1} = 0$."
                },
                {
                  "step": "As $x$ comes down toward $-1$ the values of $y$ fall without end: the graph comes closer and closer to the line $x = -1$ and never meets it.",
                  "reason": "The logarithm function is the inverse of the exponential function: $4^x$ rises as $x$ rises, so its inverse $\\log_{4} x$ rises too, and inputs close to 0 give large negative values."
                },
                {
                  "step": "The curve through these points, which rises from left to right, is the graph.",
                  "reason": "The logarithm function is the inverse of the exponential function: $4^x$ rises as $x$ rises, so its inverse $\\log_{4} x$ rises too, and inputs close to 0 give large negative values.",
                  "figure": {
                    "file": "logarithms-4.svg",
                    "alt": "A curve rising from left to right, coming close to the dashed line x = −1 as it goes down, crossing the x-axis at (3, 0) and the y-axis at (0, −1)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = \\log_{5}{(x - 3)} - 1$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\log_{5}{(x - 3)} - 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The logarithm needs $x - 3 > 0$, so the graph lies to the right of the line $x = 3$.",
                "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
              },
              {
                "step": "At $y = 0$: $\\log_{5}{(x - 3)} = 1$, so $x - 3 = 5^{1} = 5$, and the graph crosses the $x$-axis at $(8, 0)$.",
                "reason": "Logarithm: $\\log_{5}{(x - 3)} = 1$ means $5^{1} = x - 3$."
              },
              {
                "step": "At $x = 0$: $x - 3 = -3$, which is not positive, so the graph never meets the $y$-axis.",
                "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
              },
              {
                "step": "As $x$ comes down toward $3$ the values of $y$ fall without end: the graph comes closer and closer to the line $x = 3$ and never meets it.",
                "reason": "The logarithm function is the inverse of the exponential function: $5^x$ rises as $x$ rises, so its inverse $\\log_{5} x$ rises too, and inputs close to 0 give large negative values."
              },
              {
                "step": "The curve through these points, which rises from left to right, is the graph.",
                "reason": "The logarithm function is the inverse of the exponential function: $5^x$ rises as $x$ rises, so its inverse $\\log_{5} x$ rises too, and inputs close to 0 give large negative values.",
                "figure": {
                  "file": "logarithms-12.svg",
                  "alt": "A curve rising from left to right, coming close to the dashed line x = 3 as it goes down, crossing the x-axis at (8, 0) and never meeting the y-axis."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = \\log_{3}{(x - 4)} + 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(\\dfrac{13}{3}, 0)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 4$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{3}{(x - 4)} + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $x - 4 > 0$, so the graph lies to the right of the line $x = 4$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "At $y = 0$: $\\log_{3}{(x - 4)} = -1$, so $x - 4 = 3^{-1} = \\dfrac{1}{3}$, and the graph crosses the $x$-axis at $(\\dfrac{13}{3}, 0)$.",
                  "reason": "Logarithm: $\\log_{3}{(x - 4)} = -1$ means $3^{-1} = x - 4$."
                },
                {
                  "step": "At $x = 0$: $x - 4 = -4$, which is not positive, so the graph never meets the $y$-axis.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "As $x$ comes down toward $4$ the values of $y$ fall without end: the graph comes closer and closer to the line $x = 4$ and never meets it.",
                  "reason": "The logarithm function is the inverse of the exponential function: $3^x$ rises as $x$ rises, so its inverse $\\log_{3} x$ rises too, and inputs close to 0 give large negative values."
                },
                {
                  "step": "The curve through these points, which rises from left to right, is the graph.",
                  "reason": "The logarithm function is the inverse of the exponential function: $3^x$ rises as $x$ rises, so its inverse $\\log_{3} x$ rises too, and inputs close to 0 give large negative values.",
                  "figure": {
                    "file": "logarithms-13.svg",
                    "alt": "A curve rising from left to right, coming close to the dashed line x = 4 as it goes down, crossing the x-axis at (13/3, 0) and never meeting the y-axis."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\log_{2}{(x - 7)} - 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(9, 0)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 7$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{2}{(x - 7)} - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $x - 7 > 0$, so the graph lies to the right of the line $x = 7$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "At $y = 0$: $\\log_{2}{(x - 7)} = 1$, so $x - 7 = 2^{1} = 2$, and the graph crosses the $x$-axis at $(9, 0)$.",
                  "reason": "Logarithm: $\\log_{2}{(x - 7)} = 1$ means $2^{1} = x - 7$."
                },
                {
                  "step": "At $x = 0$: $x - 7 = -7$, which is not positive, so the graph never meets the $y$-axis.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "As $x$ comes down toward $7$ the values of $y$ fall without end: the graph comes closer and closer to the line $x = 7$ and never meets it.",
                  "reason": "The logarithm function is the inverse of the exponential function: $2^x$ rises as $x$ rises, so its inverse $\\log_{2} x$ rises too, and inputs close to 0 give large negative values."
                },
                {
                  "step": "The curve through these points, which rises from left to right, is the graph.",
                  "reason": "The logarithm function is the inverse of the exponential function: $2^x$ rises as $x$ rises, so its inverse $\\log_{2} x$ rises too, and inputs close to 0 give large negative values.",
                  "figure": {
                    "file": "logarithms-14.svg",
                    "alt": "A curve rising from left to right, coming close to the dashed line x = 7 as it goes down, crossing the x-axis at (9, 0) and never meeting the y-axis."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\log_{3}{(x - 6)} - 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(15, 0)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 6$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\log_{3}{(x - 6)} - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The logarithm needs $x - 6 > 0$, so the graph lies to the right of the line $x = 6$.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "At $y = 0$: $\\log_{3}{(x - 6)} = 2$, so $x - 6 = 3^{2} = 9$, and the graph crosses the $x$-axis at $(15, 0)$.",
                  "reason": "Logarithm: $\\log_{3}{(x - 6)} = 2$ means $3^{2} = x - 6$."
                },
                {
                  "step": "At $x = 0$: $x - 6 = -6$, which is not positive, so the graph never meets the $y$-axis.",
                  "reason": "Logarithm: $\\log_a b$ is defined only for positive $b$, since $a^c$ is positive for every $c$."
                },
                {
                  "step": "As $x$ comes down toward $6$ the values of $y$ fall without end: the graph comes closer and closer to the line $x = 6$ and never meets it.",
                  "reason": "The logarithm function is the inverse of the exponential function: $3^x$ rises as $x$ rises, so its inverse $\\log_{3} x$ rises too, and inputs close to 0 give large negative values."
                },
                {
                  "step": "The curve through these points, which rises from left to right, is the graph.",
                  "reason": "The logarithm function is the inverse of the exponential function: $3^x$ rises as $x$ rises, so its inverse $\\log_{3} x$ rises too, and inputs close to 0 give large negative values.",
                  "figure": {
                    "file": "logarithms-15.svg",
                    "alt": "A curve rising from left to right, coming close to the dashed line x = 6 as it goes down, crossing the x-axis at (15, 0) and never meeting the y-axis."
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": [
    {
      "id": "t170-s1",
      "method": "direct proof",
      "statement": "Prove that $\\log_a a^p = p$ for every number $a$ greater than 1 and every real number $p$. Facts it may use: logarithm, Equal powers of one base have equal exponents, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Let $c = \\log_a a^p$.",
            "reason": "Logarithm: $a^p$ is positive, so its logarithm to the base $a$ is a number, here called $c$."
          },
          {
            "line": "Then $a^c = a^p$.",
            "reason": "Logarithm: $\\log_a b = c$ means $a^c = b$, here with $b = a^p$."
          },
          {
            "line": "So $c = p$.",
            "reason": "Equal powers of one base have equal exponents: both sides of line 2 are powers of $a$."
          },
          {
            "line": "Therefore $\\log_a a^p = p$.",
            "reason": "Substituting a value: $c$ is $\\log_a a^p$ by line 1."
          }
        ]
      }
    }
  ]
}
