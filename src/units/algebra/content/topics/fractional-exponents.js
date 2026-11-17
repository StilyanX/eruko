export default {
  "number": 103,
  "title": "Fractional exponents",
  "section": 1,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "37–42"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $27^{2/3}$.",
    "form": "Answer as an integer.",
    "answer": "9",
    "solution": [
      "Evaluate $27^{2/3}$.",
      "$27^{2/3} = \\left(27^{1/3}\\right)^2$",
      "Since $3^3 = 27$, the root is $27^{1/3} = 3$.",
      "$27^{2/3} = 3^2 = 9$"
    ]
  },
  "ideas": [
    {
      "name": "The exponent 1/n",
      "concrete": "If the power law holds for the exponent $\\frac12$, then $\\left(49^{1/2}\\right)^2 = 49^{\\frac12\\cdot 2} = 49^1 = 49$. So $49^{1/2}$ is a number whose square is $49$. Both $7$ and $-7$ have square $49$, and $49^{1/2}$ is the nonnegative one: $49^{1/2} = 7$.",
      "general": "Let $n$ be a positive whole number. For even $n$ and $x \\ge 0$, the power $x^{1/n}$ is the nonnegative number whose $n$th power is $x$. For odd $n$, the power $x^{1/n}$ is the one real number whose $n$th power is $x$. The number $x^{1/n}$ is the **root** of $x$ with index $n$: the **square root** for $n = 2$, the **cube root** for $n = 3$, then the fourth root, the fifth root, and so on."
    },
    {
      "name": "The exponent m/n",
      "concrete": "If the power law holds, then $8^{2/3} = \\left(8^{1/3}\\right)^2 = 2^2 = 4$, and also $8^{2/3} = \\left(8^2\\right)^{1/3} = 64^{1/3} = 4$.",
      "general": "Let $m$ and $n$ be whole numbers with $n$ positive and the fraction $\\frac mn$ in lowest terms. Wherever $x^{1/n}$ is a real number, $x^{m/n} = \\left(x^{1/n}\\right)^m = \\left(x^m\\right)^{1/n}$. For a positive base the value is the same for every way of writing the fraction, and the laws of integer exponents hold for fractional exponents: the product law, the power law, the quotient law, the negative exponent rule, power of a product and power of a quotient. For a negative base only the definition is used, with $n$ odd. The power law can fail there: $\\left((-8)^2\\right)^{1/2} = 64^{1/2} = 8$, which is not $(-8)^1$."
    },
    {
      "name": "Even root of a negative number",
      "concrete": "A positive number has a positive fourth power. A negative number has a positive fourth power too, since an even power of a negative number is positive. The fourth power of $0$ is $0$. So no real number has fourth power $-16$, and $(-16)^{1/4}$ is not a real number.",
      "general": "For even $n$ and negative $x$, no real number has $n$th power $x$, so $x^{1/n}$ is not a real number."
    }
  ],
  "kinds": [
    {
      "id": "t103-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $243^{1/5}$.",
            "lines": [
              {
                "step": "Evaluate $243^{1/5}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$243 = 3^5$",
                "reason": "The definition of $x^{1/n}$ asks for the number whose fifth power is $243$, so the base is written as a fifth power."
              },
              {
                "step": "$243^{1/5} = \\left(3^5\\right)^{1/5}$",
                "reason": "Substituting $3^5$ for $243$ changes only the way the base is written."
              },
              {
                "step": "$\\left(3^5\\right)^{1/5} = 3^{5\\cdot\\frac{1}{5}} = 3^1$",
                "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and the product of the two exponents is $1$."
              },
              {
                "step": "$243^{1/5} = 3$",
                "reason": "The first power of a number is the number itself, and $3$ is nonnegative, as the definition of $x^{1/n}$ requires."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $81^{1/4}$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Evaluate $81^{1/4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$81 = 3^4$",
                  "reason": "The definition of $x^{1/n}$ asks for the number whose fourth power is $81$, so the base is written as a fourth power."
                },
                {
                  "step": "$81^{1/4} = \\left(3^4\\right)^{1/4}$",
                  "reason": "Substituting $3^4$ for $81$ changes only the way the base is written."
                },
                {
                  "step": "$\\left(3^4\\right)^{1/4} = 3^{4\\cdot\\frac{1}{4}} = 3^1$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and the product of the two exponents is $1$."
                },
                {
                  "step": "$81^{1/4} = 3$",
                  "reason": "The first power of a number is the number itself, and $3$ is nonnegative, as the definition of $x^{1/n}$ requires."
                }
              ]
            },
            {
              "prompt": "Evaluate $125^{1/3}$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Evaluate $125^{1/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$125 = 5^3$",
                  "reason": "The definition of $x^{1/n}$ asks for the number whose third power is $125$, so the base is written as a third power."
                },
                {
                  "step": "$125^{1/3} = \\left(5^3\\right)^{1/3}$",
                  "reason": "Substituting $5^3$ for $125$ changes only the way the base is written."
                },
                {
                  "step": "$\\left(5^3\\right)^{1/3} = 5^{3\\cdot\\frac{1}{3}} = 5^1$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and the product of the two exponents is $1$."
                },
                {
                  "step": "$125^{1/3} = 5$",
                  "reason": "The first power of a number is the number itself, and $5$ is nonnegative, as the definition of $x^{1/n}$ requires."
                }
              ]
            },
            {
              "prompt": "Evaluate $64^{1/6}$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Evaluate $64^{1/6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$64 = 2^6$",
                  "reason": "The definition of $x^{1/n}$ asks for the number whose sixth power is $64$, so the base is written as a sixth power."
                },
                {
                  "step": "$64^{1/6} = \\left(2^6\\right)^{1/6}$",
                  "reason": "Substituting $2^6$ for $64$ changes only the way the base is written."
                },
                {
                  "step": "$\\left(2^6\\right)^{1/6} = 2^{6\\cdot\\frac{1}{6}} = 2^1$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and the product of the two exponents is $1$."
                },
                {
                  "step": "$64^{1/6} = 2$",
                  "reason": "The first power of a number is the number itself, and $2$ is nonnegative, as the definition of $x^{1/n}$ requires."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $16^{3/4}$.",
            "lines": [
              {
                "step": "Evaluate $16^{3/4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$16^{3/4} = \\left(16^{1/4}\\right)^3$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
              },
              {
                "step": "Since $2^4 = 16$, the root is $16^{1/4} = 2$.",
                "reason": "The definition of $x^{1/n}$ for even $n$: the nonnegative number whose fourth power is $16$."
              },
              {
                "step": "$16^{3/4} = 2^3 = 8$",
                "reason": "Substituting $2$ for $16^{1/4}$ leaves a power with a whole exponent to work out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $8^{5/3}$.",
              "form": "Answer as an integer.",
              "answer": "32",
              "lines": [
                {
                  "step": "Evaluate $8^{5/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8^{5/3} = \\left(8^{1/3}\\right)^5$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $2^3 = 8$, the root is $8^{1/3} = 2$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $8$."
                },
                {
                  "step": "$8^{5/3} = 2^5 = 32$",
                  "reason": "Substituting $2$ for $8^{1/3}$ leaves a power with a whole exponent to work out."
                }
              ]
            },
            {
              "prompt": "Evaluate $9^{3/2}$.",
              "form": "Answer as an integer.",
              "answer": "27",
              "lines": [
                {
                  "step": "Evaluate $9^{3/2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9^{3/2} = \\left(9^{1/2}\\right)^3$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $3^2 = 9$, the root is $9^{1/2} = 3$.",
                  "reason": "The definition of $x^{1/n}$ for even $n$: the nonnegative number whose second power is $9$."
                },
                {
                  "step": "$9^{3/2} = 3^3 = 27$",
                  "reason": "Substituting $3$ for $9^{1/2}$ leaves a power with a whole exponent to work out."
                }
              ]
            },
            {
              "prompt": "Evaluate $81^{3/4}$.",
              "form": "Answer as an integer.",
              "answer": "27",
              "lines": [
                {
                  "step": "Evaluate $81^{3/4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$81^{3/4} = \\left(81^{1/4}\\right)^3$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $3^4 = 81$, the root is $81^{1/4} = 3$.",
                  "reason": "The definition of $x^{1/n}$ for even $n$: the nonnegative number whose fourth power is $81$."
                },
                {
                  "step": "$81^{3/4} = 3^3 = 27$",
                  "reason": "Substituting $3$ for $81^{1/4}$ leaves a power with a whole exponent to work out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $16^{-3/2}$.",
            "lines": [
              {
                "step": "Evaluate $16^{-3/2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$16^{-3/2} = \\dfrac{1}{16^{3/2}}$",
                "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ leaves a power with a positive exponent."
              },
              {
                "step": "$16^{3/2} = \\left(16^{1/2}\\right)^3$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
              },
              {
                "step": "Since $4^2 = 16$, the root is $16^{1/2} = 4$.",
                "reason": "The definition of $x^{1/n}$ for even $n$: the nonnegative number whose second power is $16$."
              },
              {
                "step": "$16^{3/2} = 4^3 = 64$",
                "reason": "Substituting $4$ for $16^{1/2}$ leaves a power with a whole exponent to work out."
              },
              {
                "step": "$16^{-3/2} = \\dfrac{1}{64}$",
                "reason": "Substituting the value of the power into the first line gives the answer as a fraction."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $8^{-2/3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/4",
              "lines": [
                {
                  "step": "Evaluate $8^{-2/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8^{-2/3} = \\dfrac{1}{8^{2/3}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ leaves a power with a positive exponent."
                },
                {
                  "step": "$8^{2/3} = \\left(8^{1/3}\\right)^2$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $2^3 = 8$, the root is $8^{1/3} = 2$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $8$."
                },
                {
                  "step": "$8^{2/3} = 2^2 = 4$",
                  "reason": "Substituting $2$ for $8^{1/3}$ leaves a power with a whole exponent to work out."
                },
                {
                  "step": "$8^{-2/3} = \\dfrac{1}{4}$",
                  "reason": "Substituting the value of the power into the first line gives the answer as a fraction."
                }
              ]
            },
            {
              "prompt": "Evaluate $81^{-3/4}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/27",
              "lines": [
                {
                  "step": "Evaluate $81^{-3/4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$81^{-3/4} = \\dfrac{1}{81^{3/4}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ leaves a power with a positive exponent."
                },
                {
                  "step": "$81^{3/4} = \\left(81^{1/4}\\right)^3$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $3^4 = 81$, the root is $81^{1/4} = 3$.",
                  "reason": "The definition of $x^{1/n}$ for even $n$: the nonnegative number whose fourth power is $81$."
                },
                {
                  "step": "$81^{3/4} = 3^3 = 27$",
                  "reason": "Substituting $3$ for $81^{1/4}$ leaves a power with a whole exponent to work out."
                },
                {
                  "step": "$81^{-3/4} = \\dfrac{1}{27}$",
                  "reason": "Substituting the value of the power into the first line gives the answer as a fraction."
                }
              ]
            },
            {
              "prompt": "Evaluate $32^{-2/5}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/4",
              "lines": [
                {
                  "step": "Evaluate $32^{-2/5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$32^{-2/5} = \\dfrac{1}{32^{2/5}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ leaves a power with a positive exponent."
                },
                {
                  "step": "$32^{2/5} = \\left(32^{1/5}\\right)^2$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $2^5 = 32$, the root is $32^{1/5} = 2$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose fifth power is $32$."
                },
                {
                  "step": "$32^{2/5} = 2^2 = 4$",
                  "reason": "Substituting $2$ for $32^{1/5}$ leaves a power with a whole exponent to work out."
                },
                {
                  "step": "$32^{-2/5} = \\dfrac{1}{4}$",
                  "reason": "Substituting the value of the power into the first line gives the answer as a fraction."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $(-27)^{2/3}$.",
            "lines": [
              {
                "step": "Evaluate $(-27)^{2/3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-27)^{2/3} = \\left((-27)^{1/3}\\right)^2$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
              },
              {
                "step": "Since $(-3)^3 = -27$, the root is $(-27)^{1/3} = -3$.",
                "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-27$. By the sign of a power of a negative number, that number is negative."
              },
              {
                "step": "$(-27)^{2/3} = (-3)^2 = 9$",
                "reason": "The sign of a power of a negative number: an even power of a negative number is positive."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $(-8)^{5/3}$.",
              "form": "Answer as an integer.",
              "answer": "-32",
              "lines": [
                {
                  "step": "Evaluate $(-8)^{5/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-8)^{5/3} = \\left((-8)^{1/3}\\right)^5$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $(-2)^3 = -8$, the root is $(-8)^{1/3} = -2$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-8$. By the sign of a power of a negative number, that number is negative."
                },
                {
                  "step": "$(-8)^{5/3} = (-2)^5 = -32$",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
                }
              ]
            },
            {
              "prompt": "Evaluate $(-32)^{3/5}$.",
              "form": "Answer as an integer.",
              "answer": "-8",
              "lines": [
                {
                  "step": "Evaluate $(-32)^{3/5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-32)^{3/5} = \\left((-32)^{1/5}\\right)^3$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $(-2)^5 = -32$, the root is $(-32)^{1/5} = -2$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose fifth power is $-32$. By the sign of a power of a negative number, that number is negative."
                },
                {
                  "step": "$(-32)^{3/5} = (-2)^3 = -8$",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
                }
              ]
            },
            {
              "prompt": "Evaluate $(-64)^{2/3}$.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "Evaluate $(-64)^{2/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-64)^{2/3} = \\left((-64)^{1/3}\\right)^2$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $(-4)^3 = -64$, the root is $(-64)^{1/3} = -4$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-64$. By the sign of a power of a negative number, that number is negative."
                },
                {
                  "step": "$(-64)^{2/3} = (-4)^2 = 16$",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $(-8)^{-2/3}$.",
            "lines": [
              {
                "step": "Evaluate $(-8)^{-2/3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-8)^{-2/3} = \\dfrac{1}{(-8)^{2/3}}$",
                "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ leaves a power with a positive exponent."
              },
              {
                "step": "$(-8)^{2/3} = \\left((-8)^{1/3}\\right)^2$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
              },
              {
                "step": "Since $(-2)^3 = -8$, the root is $(-8)^{1/3} = -2$.",
                "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-8$. By the sign of a power of a negative number, that number is negative."
              },
              {
                "step": "$(-8)^{2/3} = (-2)^2 = 4$",
                "reason": "The sign of a power of a negative number: an even power of a negative number is positive."
              },
              {
                "step": "$(-8)^{-2/3} = \\dfrac{1}{4}$",
                "reason": "Substituting the value of the power into the first line gives the answer as a fraction."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $(-27)^{-2/3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/9",
              "lines": [
                {
                  "step": "Evaluate $(-27)^{-2/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-27)^{-2/3} = \\dfrac{1}{(-27)^{2/3}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ leaves a power with a positive exponent."
                },
                {
                  "step": "$(-27)^{2/3} = \\left((-27)^{1/3}\\right)^2$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $(-3)^3 = -27$, the root is $(-27)^{1/3} = -3$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-27$. By the sign of a power of a negative number, that number is negative."
                },
                {
                  "step": "$(-27)^{2/3} = (-3)^2 = 9$",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive."
                },
                {
                  "step": "$(-27)^{-2/3} = \\dfrac{1}{9}$",
                  "reason": "Substituting the value of the power into the first line gives the answer as a fraction."
                }
              ]
            },
            {
              "prompt": "Evaluate $(-32)^{-3/5}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-1/8",
              "lines": [
                {
                  "step": "Evaluate $(-32)^{-3/5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-32)^{-3/5} = \\dfrac{1}{(-32)^{3/5}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ leaves a power with a positive exponent."
                },
                {
                  "step": "$(-32)^{3/5} = \\left((-32)^{1/5}\\right)^3$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $(-2)^5 = -32$, the root is $(-32)^{1/5} = -2$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose fifth power is $-32$. By the sign of a power of a negative number, that number is negative."
                },
                {
                  "step": "$(-32)^{3/5} = (-2)^3 = -8$",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
                },
                {
                  "step": "$(-32)^{-3/5} = -\\dfrac{1}{8}$",
                  "reason": "Substituting the value of the power into the first line gives the answer as a fraction."
                }
              ]
            },
            {
              "prompt": "Evaluate $(-64)^{-2/3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/16",
              "lines": [
                {
                  "step": "Evaluate $(-64)^{-2/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-64)^{-2/3} = \\dfrac{1}{(-64)^{2/3}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ leaves a power with a positive exponent."
                },
                {
                  "step": "$(-64)^{2/3} = \\left((-64)^{1/3}\\right)^2$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root first, which keeps the numbers small."
                },
                {
                  "step": "Since $(-4)^3 = -64$, the root is $(-64)^{1/3} = -4$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-64$. By the sign of a power of a negative number, that number is negative."
                },
                {
                  "step": "$(-64)^{2/3} = (-4)^2 = 16$",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive."
                },
                {
                  "step": "$(-64)^{-2/3} = \\dfrac{1}{16}$",
                  "reason": "Substituting the value of the power into the first line gives the answer as a fraction."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\left(\\dfrac{16}{81}\\right)^{3/4}$.",
            "lines": [
              {
                "step": "Evaluate $\\left(\\dfrac{16}{81}\\right)^{3/4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(\\dfrac{16}{81}\\right)^{3/4} = \\dfrac{16^{3/4}}{81^{3/4}}$",
                "reason": "Power of a quotient $\\left(\\dfrac ab\\right)^n = \\dfrac{a^n}{b^n}$ holds for fractional exponents of positive numbers, and it gives the exponent to the top and to the bottom."
              },
              {
                "step": "$16^{3/4} = \\left(16^{1/4}\\right)^3 = 2^3 = 8$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, with $16^{1/4} = 2$ by the definition of $x^{1/n}$, since $2^4 = 16$."
              },
              {
                "step": "$81^{3/4} = \\left(81^{1/4}\\right)^3 = 3^3 = 27$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, with $81^{1/4} = 3$ by the definition of $x^{1/n}$, since $3^4 = 81$."
              },
              {
                "step": "$\\left(\\dfrac{16}{81}\\right)^{3/4} = \\dfrac{8}{27}$",
                "reason": "Substituting the two values into the first line gives the answer as a fraction."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\left(\\dfrac{8}{27}\\right)^{2/3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4/9",
              "lines": [
                {
                  "step": "Evaluate $\\left(\\dfrac{8}{27}\\right)^{2/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{8}{27}\\right)^{2/3} = \\dfrac{8^{2/3}}{27^{2/3}}$",
                  "reason": "Power of a quotient $\\left(\\dfrac ab\\right)^n = \\dfrac{a^n}{b^n}$ holds for fractional exponents of positive numbers, and it gives the exponent to the top and to the bottom."
                },
                {
                  "step": "$8^{2/3} = \\left(8^{1/3}\\right)^2 = 2^2 = 4$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, with $8^{1/3} = 2$ by the definition of $x^{1/n}$, since $2^3 = 8$."
                },
                {
                  "step": "$27^{2/3} = \\left(27^{1/3}\\right)^2 = 3^2 = 9$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, with $27^{1/3} = 3$ by the definition of $x^{1/n}$, since $3^3 = 27$."
                },
                {
                  "step": "$\\left(\\dfrac{8}{27}\\right)^{2/3} = \\dfrac{4}{9}$",
                  "reason": "Substituting the two values into the first line gives the answer as a fraction."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(\\dfrac{9}{4}\\right)^{3/2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "27/8",
              "lines": [
                {
                  "step": "Evaluate $\\left(\\dfrac{9}{4}\\right)^{3/2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{9}{4}\\right)^{3/2} = \\dfrac{9^{3/2}}{4^{3/2}}$",
                  "reason": "Power of a quotient $\\left(\\dfrac ab\\right)^n = \\dfrac{a^n}{b^n}$ holds for fractional exponents of positive numbers, and it gives the exponent to the top and to the bottom."
                },
                {
                  "step": "$9^{3/2} = \\left(9^{1/2}\\right)^3 = 3^3 = 27$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, with $9^{1/2} = 3$ by the definition of $x^{1/n}$, since $3^2 = 9$."
                },
                {
                  "step": "$4^{3/2} = \\left(4^{1/2}\\right)^3 = 2^3 = 8$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, with $4^{1/2} = 2$ by the definition of $x^{1/n}$, since $2^2 = 4$."
                },
                {
                  "step": "$\\left(\\dfrac{9}{4}\\right)^{3/2} = \\dfrac{27}{8}$",
                  "reason": "Substituting the two values into the first line gives the answer as a fraction."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(\\dfrac{1}{32}\\right)^{3/5}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/8",
              "lines": [
                {
                  "step": "Evaluate $\\left(\\dfrac{1}{32}\\right)^{3/5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{1}{32}\\right)^{3/5} = \\dfrac{1^{3/5}}{32^{3/5}}$",
                  "reason": "Power of a quotient $\\left(\\dfrac ab\\right)^n = \\dfrac{a^n}{b^n}$ holds for fractional exponents of positive numbers, and it gives the exponent to the top and to the bottom."
                },
                {
                  "step": "$1^{3/5} = \\left(1^{1/5}\\right)^3 = 1^3 = 1$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, with $1^{1/5} = 1$ by the definition of $x^{1/n}$, since $1^5 = 1$."
                },
                {
                  "step": "$32^{3/5} = \\left(32^{1/5}\\right)^3 = 2^3 = 8$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, with $32^{1/5} = 2$ by the definition of $x^{1/n}$, since $2^5 = 32$."
                },
                {
                  "step": "$\\left(\\dfrac{1}{32}\\right)^{3/5} = \\dfrac{1}{8}$",
                  "reason": "Substituting the two values into the first line gives the answer as a fraction."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\left(2^9 \\cdot 5^6\\right)^{1/3}$.",
            "lines": [
              {
                "step": "Evaluate $\\left(2^9 \\cdot 5^6\\right)^{1/3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(2^9 \\cdot 5^6\\right)^{1/3} = \\left(2^9\\right)^{1/3} \\cdot \\left(5^6\\right)^{1/3}$",
                "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
              },
              {
                "step": "$\\left(2^9\\right)^{1/3} \\cdot \\left(5^6\\right)^{1/3} = 2^{9\\cdot\\frac{1}{3}} \\cdot 5^{6\\cdot\\frac{1}{3}} = 2^3 \\cdot 5^2$",
                "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
              },
              {
                "step": "$2^3 \\cdot 5^2 = 8 \\cdot 25 = 200$",
                "reason": "Working out each power and multiplying gives the value as one whole number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\left(3^4 \\cdot 5^2\\right)^{1/2}$.",
              "form": "Answer as an integer.",
              "answer": "45",
              "lines": [
                {
                  "step": "Evaluate $\\left(3^4 \\cdot 5^2\\right)^{1/2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(3^4 \\cdot 5^2\\right)^{1/2} = \\left(3^4\\right)^{1/2} \\cdot \\left(5^2\\right)^{1/2}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "$\\left(3^4\\right)^{1/2} \\cdot \\left(5^2\\right)^{1/2} = 3^{4\\cdot\\frac{1}{2}} \\cdot 5^{2\\cdot\\frac{1}{2}} = 3^2 \\cdot 5$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$3^2 \\cdot 5 = 9 \\cdot 5 = 45$",
                  "reason": "Working out each power and multiplying gives the value as one whole number."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(2^6 \\cdot 3^3\\right)^{2/3}$.",
              "form": "Answer as an integer.",
              "answer": "144",
              "lines": [
                {
                  "step": "Evaluate $\\left(2^6 \\cdot 3^3\\right)^{2/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(2^6 \\cdot 3^3\\right)^{2/3} = \\left(2^6\\right)^{2/3} \\cdot \\left(3^3\\right)^{2/3}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "$\\left(2^6\\right)^{2/3} \\cdot \\left(3^3\\right)^{2/3} = 2^{6\\cdot\\frac{2}{3}} \\cdot 3^{3\\cdot\\frac{2}{3}} = 2^4 \\cdot 3^2$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$2^4 \\cdot 3^2 = 16 \\cdot 9 = 144$",
                  "reason": "Working out each power and multiplying gives the value as one whole number."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(2^{10} \\cdot 3^5\\right)^{1/5}$.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Evaluate $\\left(2^{10} \\cdot 3^5\\right)^{1/5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(2^{10} \\cdot 3^5\\right)^{1/5} = \\left(2^{10}\\right)^{1/5} \\cdot \\left(3^5\\right)^{1/5}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "$\\left(2^{10}\\right)^{1/5} \\cdot \\left(3^5\\right)^{1/5} = 2^{10\\cdot\\frac{1}{5}} \\cdot 3^{5\\cdot\\frac{1}{5}} = 2^2 \\cdot 3$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$2^2 \\cdot 3 = 4 \\cdot 3 = 12$",
                  "reason": "Working out each power and multiplying gives the value as one whole number."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $1728^{1/3}$.",
            "lines": [
              {
                "step": "Evaluate $1728^{1/3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$1728 = 2^6 \\cdot 3^3$",
                "reason": "The prime factorisation of $1728$, which the fundamental theorem of arithmetic gives, writes the base as a product of powers."
              },
              {
                "step": "$1728^{1/3} = \\left(2^6 \\cdot 3^3\\right)^{1/3}$",
                "reason": "Substituting the factorisation for $1728$ changes only the way the base is written."
              },
              {
                "step": "$\\left(2^6 \\cdot 3^3\\right)^{1/3} = \\left(2^6\\right)^{1/3} \\cdot \\left(3^3\\right)^{1/3}$",
                "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
              },
              {
                "step": "$\\left(2^6\\right)^{1/3} \\cdot \\left(3^3\\right)^{1/3} = 2^{6\\cdot\\frac{1}{3}} \\cdot 3^{3\\cdot\\frac{1}{3}} = 2^2 \\cdot 3$",
                "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
              },
              {
                "step": "$2^2 \\cdot 3 = 4 \\cdot 3 = 12$",
                "reason": "Working out each power and multiplying gives the value as one whole number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $1296^{1/4}$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Evaluate $1296^{1/4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1296 = 2^4 \\cdot 3^4$",
                  "reason": "The prime factorisation of $1296$, which the fundamental theorem of arithmetic gives, writes the base as a product of powers."
                },
                {
                  "step": "$1296^{1/4} = \\left(2^4 \\cdot 3^4\\right)^{1/4}$",
                  "reason": "Substituting the factorisation for $1296$ changes only the way the base is written."
                },
                {
                  "step": "$\\left(2^4 \\cdot 3^4\\right)^{1/4} = \\left(2^4\\right)^{1/4} \\cdot \\left(3^4\\right)^{1/4}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "$\\left(2^4\\right)^{1/4} \\cdot \\left(3^4\\right)^{1/4} = 2^{4\\cdot\\frac{1}{4}} \\cdot 3^{4\\cdot\\frac{1}{4}} = 2 \\cdot 3$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$2 \\cdot 3 = 2 \\cdot 3 = 6$",
                  "reason": "Working out each power and multiplying gives the value as one whole number."
                }
              ]
            },
            {
              "prompt": "Evaluate $3375^{1/3}$.",
              "form": "Answer as an integer.",
              "answer": "15",
              "lines": [
                {
                  "step": "Evaluate $3375^{1/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3375 = 3^3 \\cdot 5^3$",
                  "reason": "The prime factorisation of $3375$, which the fundamental theorem of arithmetic gives, writes the base as a product of powers."
                },
                {
                  "step": "$3375^{1/3} = \\left(3^3 \\cdot 5^3\\right)^{1/3}$",
                  "reason": "Substituting the factorisation for $3375$ changes only the way the base is written."
                },
                {
                  "step": "$\\left(3^3 \\cdot 5^3\\right)^{1/3} = \\left(3^3\\right)^{1/3} \\cdot \\left(5^3\\right)^{1/3}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "$\\left(3^3\\right)^{1/3} \\cdot \\left(5^3\\right)^{1/3} = 3^{3\\cdot\\frac{1}{3}} \\cdot 5^{3\\cdot\\frac{1}{3}} = 3 \\cdot 5$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$3 \\cdot 5 = 3 \\cdot 5 = 15$",
                  "reason": "Working out each power and multiplying gives the value as one whole number."
                }
              ]
            },
            {
              "prompt": "Evaluate $2025^{1/2}$.",
              "form": "Answer as an integer.",
              "answer": "45",
              "lines": [
                {
                  "step": "Evaluate $2025^{1/2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2025 = 3^4 \\cdot 5^2$",
                  "reason": "The prime factorisation of $2025$, which the fundamental theorem of arithmetic gives, writes the base as a product of powers."
                },
                {
                  "step": "$2025^{1/2} = \\left(3^4 \\cdot 5^2\\right)^{1/2}$",
                  "reason": "Substituting the factorisation for $2025$ changes only the way the base is written."
                },
                {
                  "step": "$\\left(3^4 \\cdot 5^2\\right)^{1/2} = \\left(3^4\\right)^{1/2} \\cdot \\left(5^2\\right)^{1/2}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "$\\left(3^4\\right)^{1/2} \\cdot \\left(5^2\\right)^{1/2} = 3^{4\\cdot\\frac{1}{2}} \\cdot 5^{2\\cdot\\frac{1}{2}} = 3^2 \\cdot 5$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$3^2 \\cdot 5 = 9 \\cdot 5 = 45$",
                  "reason": "Working out each power and multiplying gives the value as one whole number."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\left(7^{2/3}\\right)^3$.",
            "lines": [
              {
                "step": "Evaluate $\\left(7^{2/3}\\right)^3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(7^{2/3}\\right)^3 = 7^{\\frac{2}{3}\\cdot 3}$",
                "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
              },
              {
                "step": "$7^{\\frac{2}{3}\\cdot 3} = 7^2$",
                "reason": "Multiplying a fraction by a whole number: $\\frac{2}{3}\\cdot 3 = 2$."
              },
              {
                "step": "$7^2 = 49$",
                "reason": "A power with a whole exponent is worked out by multiplying."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\left(5^{3/4}\\right)^4$.",
              "form": "Answer as an integer.",
              "answer": "125",
              "lines": [
                {
                  "step": "Evaluate $\\left(5^{3/4}\\right)^4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(5^{3/4}\\right)^4 = 5^{\\frac{3}{4}\\cdot 4}$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$5^{\\frac{3}{4}\\cdot 4} = 5^3$",
                  "reason": "Multiplying a fraction by a whole number: $\\frac{3}{4}\\cdot 4 = 3$."
                },
                {
                  "step": "$5^3 = 125$",
                  "reason": "A power with a whole exponent is worked out by multiplying."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(2^{5/2}\\right)^2$.",
              "form": "Answer as an integer.",
              "answer": "32",
              "lines": [
                {
                  "step": "Evaluate $\\left(2^{5/2}\\right)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(2^{5/2}\\right)^2 = 2^{\\frac{5}{2}\\cdot 2}$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$2^{\\frac{5}{2}\\cdot 2} = 2^5$",
                  "reason": "Multiplying a fraction by a whole number: $\\frac{5}{2}\\cdot 2 = 5$."
                },
                {
                  "step": "$2^5 = 32$",
                  "reason": "A power with a whole exponent is worked out by multiplying."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(3^{4/5}\\right)^5$.",
              "form": "Answer as an integer.",
              "answer": "81",
              "lines": [
                {
                  "step": "Evaluate $\\left(3^{4/5}\\right)^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(3^{4/5}\\right)^5 = 3^{\\frac{4}{5}\\cdot 5}$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$3^{\\frac{4}{5}\\cdot 5} = 3^4$",
                  "reason": "Multiplying a fraction by a whole number: $\\frac{4}{5}\\cdot 5 = 4$."
                },
                {
                  "step": "$3^4 = 81$",
                  "reason": "A power with a whole exponent is worked out by multiplying."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\left(3^{1/2}\\right)^3 \\cdot 3^{1/2}$.",
            "lines": [
              {
                "step": "Evaluate $\\left(3^{1/2}\\right)^3 \\cdot 3^{1/2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(3^{1/2}\\right)^3 = 3^{\\frac{1}{2}\\cdot 3} = 3^{3/2}$",
                "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
              },
              {
                "step": "$3^{3/2} \\cdot 3^{1/2} = 3^{\\frac{3}{2}+\\frac{1}{2}}$",
                "reason": "The product law $a^ma^n = a^{m+n}$ holds for fractional exponents of a positive base, and it leaves one power of the base."
              },
              {
                "step": "$3^{\\frac{3}{2}+\\frac{1}{2}} = 3^2$",
                "reason": "Adding fractions with a common denominator: $\\frac{3}{2}+\\frac{1}{2} = 2$."
              },
              {
                "step": "$3^2 = 9$",
                "reason": "A power with a whole exponent is worked out by multiplying."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\left(2^{2/3}\\right)^2 \\cdot 2^{5/3}$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Evaluate $\\left(2^{2/3}\\right)^2 \\cdot 2^{5/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(2^{2/3}\\right)^2 = 2^{\\frac{2}{3}\\cdot 2} = 2^{4/3}$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$2^{4/3} \\cdot 2^{5/3} = 2^{\\frac{4}{3}+\\frac{5}{3}}$",
                  "reason": "The product law $a^ma^n = a^{m+n}$ holds for fractional exponents of a positive base, and it leaves one power of the base."
                },
                {
                  "step": "$2^{\\frac{4}{3}+\\frac{5}{3}} = 2^3$",
                  "reason": "Adding fractions with a common denominator: $\\frac{4}{3}+\\frac{5}{3} = 3$."
                },
                {
                  "step": "$2^3 = 8$",
                  "reason": "A power with a whole exponent is worked out by multiplying."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(7^{1/4}\\right)^2 \\cdot 7^{3/2}$.",
              "form": "Answer as an integer.",
              "answer": "49",
              "lines": [
                {
                  "step": "Evaluate $\\left(7^{1/4}\\right)^2 \\cdot 7^{3/2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(7^{1/4}\\right)^2 = 7^{\\frac{1}{4}\\cdot 2} = 7^{1/2}$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$7^{1/2} \\cdot 7^{3/2} = 7^{\\frac{1}{2}+\\frac{3}{2}}$",
                  "reason": "The product law $a^ma^n = a^{m+n}$ holds for fractional exponents of a positive base, and it leaves one power of the base."
                },
                {
                  "step": "$7^{\\frac{1}{2}+\\frac{3}{2}} = 7^2$",
                  "reason": "Adding fractions with a common denominator: $\\frac{1}{2}+\\frac{3}{2} = 2$."
                },
                {
                  "step": "$7^2 = 49$",
                  "reason": "A power with a whole exponent is worked out by multiplying."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(6^{1/3}\\right)^4 \\cdot 6^{5/3}$.",
              "form": "Answer as an integer.",
              "answer": "216",
              "lines": [
                {
                  "step": "Evaluate $\\left(6^{1/3}\\right)^4 \\cdot 6^{5/3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(6^{1/3}\\right)^4 = 6^{\\frac{1}{3}\\cdot 4} = 6^{4/3}$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the two exponents."
                },
                {
                  "step": "$6^{4/3} \\cdot 6^{5/3} = 6^{\\frac{4}{3}+\\frac{5}{3}}$",
                  "reason": "The product law $a^ma^n = a^{m+n}$ holds for fractional exponents of a positive base, and it leaves one power of the base."
                },
                {
                  "step": "$6^{\\frac{4}{3}+\\frac{5}{3}} = 6^3$",
                  "reason": "Adding fractions with a common denominator: $\\frac{4}{3}+\\frac{5}{3} = 3$."
                },
                {
                  "step": "$6^3 = 216$",
                  "reason": "A power with a whole exponent is worked out by multiplying."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t103-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $(-81)^{3/4}$ is a real number.",
            "lines": [
              {
                "step": "Decide whether $(-81)^{3/4}$ is a real number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-81)^{3/4} = \\left((-81)^{1/4}\\right)^3$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ shows that the question is whether $(-81)^{1/4}$ is a real number."
              },
              {
                "step": "The denominator $4$ of the exponent is even, and the base $-81$ is negative.",
                "reason": "The definition of $x^{1/n}$ treats even $n$ and odd $n$ apart. Here $n$ is even, so the sign of the base decides."
              },
              {
                "step": "No: $(-81)^{3/4}$ is not a real number.",
                "reason": "Even root of a negative number is not real: no real number has a negative fourth power."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $(-8)^{2/3}$ is a real number.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $(-8)^{2/3}$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-8)^{2/3} = \\left((-8)^{1/3}\\right)^2$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ shows that the question is whether $(-8)^{1/3}$ is a real number."
                },
                {
                  "step": "The denominator $3$ of the exponent is odd, and the base $-8$ is negative.",
                  "reason": "The definition of $x^{1/n}$ treats even $n$ and odd $n$ apart. Here $n$ is odd, so the sign of the base does not matter."
                },
                {
                  "step": "Yes: $(-8)^{1/3}$ is the one real number whose third power is $-8$, so $(-8)^{2/3}$ is a real number.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$ gives one real number for every real number $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $(-9)^{5/2}$ is a real number.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $(-9)^{5/2}$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-9)^{5/2} = \\left((-9)^{1/2}\\right)^5$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ shows that the question is whether $(-9)^{1/2}$ is a real number."
                },
                {
                  "step": "The denominator $2$ of the exponent is even, and the base $-9$ is negative.",
                  "reason": "The definition of $x^{1/n}$ treats even $n$ and odd $n$ apart. Here $n$ is even, so the sign of the base decides."
                },
                {
                  "step": "No: $(-9)^{5/2}$ is not a real number.",
                  "reason": "Even root of a negative number is not real: no real number has a negative second power."
                }
              ]
            },
            {
              "prompt": "Decide whether $6^{3/4}$ is a real number.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $6^{3/4}$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6^{3/4} = \\left(6^{1/4}\\right)^3$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ shows that the question is whether $6^{1/4}$ is a real number."
                },
                {
                  "step": "The denominator $4$ of the exponent is even, and the base $6$ is positive.",
                  "reason": "The definition of $x^{1/n}$ treats even $n$ and odd $n$ apart. Here $n$ is even, so the sign of the base decides."
                },
                {
                  "step": "Yes: $6^{1/4}$ is the nonnegative number whose fourth power is $6$, so $6^{3/4}$ is a real number.",
                  "reason": "The definition of $x^{1/n}$ for even $n$ gives one real number for every nonnegative number $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t103-k3",
      "forms": [
        {
          "example": {
            "problem": "Simplify $\\left(x^{2/3}\\right)^6 \\cdot x^{1/2}$, where $x$ is positive.",
            "lines": [
              {
                "step": "Simplify $\\left(x^{2/3}\\right)^6 \\cdot x^{1/2}$, where $x$ is positive.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(x^{2/3}\\right)^6 = x^{\\frac{2}{3}\\cdot 6} = x^4$",
                "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it removes the bracket."
              },
              {
                "step": "$x^4 \\cdot x^{1/2} = x^{4+\\frac{1}{2}}$",
                "reason": "The product law $a^ma^n = a^{m+n}$ holds for fractional exponents of a positive base, and it leaves the letter $x$ once."
              },
              {
                "step": "$x^{4+\\frac{1}{2}} = x^{9/2}$",
                "reason": "Adding fractions with a common denominator: $4+\\frac{1}{2} = \\frac{9}{2}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\left(x^{3/4}\\right)^2 \\cdot x^{1/2}$, where $x$ is positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "x^2",
              "lines": [
                {
                  "step": "Simplify $\\left(x^{3/4}\\right)^2 \\cdot x^{1/2}$, where $x$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x^{3/4}\\right)^2 = x^{\\frac{3}{4}\\cdot 2} = x^{3/2}$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it removes the bracket."
                },
                {
                  "step": "$x^{3/2} \\cdot x^{1/2} = x^{\\frac{3}{2}+\\frac{1}{2}}$",
                  "reason": "The product law $a^ma^n = a^{m+n}$ holds for fractional exponents of a positive base, and it leaves the letter $x$ once."
                },
                {
                  "step": "$x^{\\frac{3}{2}+\\frac{1}{2}} = x^2$",
                  "reason": "Adding fractions with a common denominator: $\\frac{3}{2}+\\frac{1}{2} = 2$."
                }
              ]
            },
            {
              "prompt": "Simplify $\\left(y^{1/2}\\right)^3 \\cdot y^{1/6}$, where $y$ is positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "y^(5/3)",
              "lines": [
                {
                  "step": "Simplify $\\left(y^{1/2}\\right)^3 \\cdot y^{1/6}$, where $y$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(y^{1/2}\\right)^3 = y^{\\frac{1}{2}\\cdot 3} = y^{3/2}$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it removes the bracket."
                },
                {
                  "step": "$y^{3/2} \\cdot y^{1/6} = y^{\\frac{3}{2}+\\frac{1}{6}}$",
                  "reason": "The product law $a^ma^n = a^{m+n}$ holds for fractional exponents of a positive base, and it leaves the letter $y$ once."
                },
                {
                  "step": "$y^{\\frac{3}{2}+\\frac{1}{6}} = y^{5/3}$",
                  "reason": "Adding fractions with a common denominator: $\\frac{3}{2}+\\frac{1}{6} = \\frac{5}{3}$."
                }
              ]
            },
            {
              "prompt": "Simplify $\\left(x^{2/5}\\right)^5 \\cdot x^{1/3}$, where $x$ is positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "x^(7/3)",
              "lines": [
                {
                  "step": "Simplify $\\left(x^{2/5}\\right)^5 \\cdot x^{1/3}$, where $x$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x^{2/5}\\right)^5 = x^{\\frac{2}{5}\\cdot 5} = x^2$",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it removes the bracket."
                },
                {
                  "step": "$x^2 \\cdot x^{1/3} = x^{2+\\frac{1}{3}}$",
                  "reason": "The product law $a^ma^n = a^{m+n}$ holds for fractional exponents of a positive base, and it leaves the letter $x$ once."
                },
                {
                  "step": "$x^{2+\\frac{1}{3}} = x^{7/3}$",
                  "reason": "Adding fractions with a common denominator: $2+\\frac{1}{3} = \\frac{7}{3}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\left(8x^6y^{3/2}\\right)^{2/3}$, where $x$ and $y$ are positive.",
            "lines": [
              {
                "step": "Simplify $\\left(8x^6y^{3/2}\\right)^{2/3}$, where $x$ and $y$ are positive.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(8x^6y^{3/2}\\right)^{2/3} = 8^{2/3} \\cdot \\left(x^6\\right)^{2/3} \\cdot \\left(y^{3/2}\\right)^{2/3}$",
                "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
              },
              {
                "step": "$8^{2/3} = \\left(8^{1/3}\\right)^2 = 2^2 = 4$",
                "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root of the number first, then the power."
              },
              {
                "step": "For the letters, $\\left(x^6\\right)^{2/3} = x^4$ and $\\left(y^{3/2}\\right)^{2/3} = y$.",
                "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the exponents of each letter."
              },
              {
                "step": "$\\left(8x^6y^{3/2}\\right)^{2/3} = 4x^4y$",
                "reason": "Multiplying the three factors writes the result as one term."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\left(16x^2y^{4/3}\\right)^{3/2}$, where $x$ and $y$ are positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "64*x^3*y^2",
              "lines": [
                {
                  "step": "Simplify $\\left(16x^2y^{4/3}\\right)^{3/2}$, where $x$ and $y$ are positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(16x^2y^{4/3}\\right)^{3/2} = 16^{3/2} \\cdot \\left(x^2\\right)^{3/2} \\cdot \\left(y^{4/3}\\right)^{3/2}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "$16^{3/2} = \\left(16^{1/2}\\right)^3 = 4^3 = 64$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root of the number first, then the power."
                },
                {
                  "step": "For the letters, $\\left(x^2\\right)^{3/2} = x^3$ and $\\left(y^{4/3}\\right)^{3/2} = y^2$.",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the exponents of each letter."
                },
                {
                  "step": "$\\left(16x^2y^{4/3}\\right)^{3/2} = 64x^3y^2$",
                  "reason": "Multiplying the three factors writes the result as one term."
                }
              ]
            },
            {
              "prompt": "Simplify $\\left(27x^{3/2}y^6\\right)^{1/3}$, where $x$ and $y$ are positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "3*x^(1/2)*y^2",
              "lines": [
                {
                  "step": "Simplify $\\left(27x^{3/2}y^6\\right)^{1/3}$, where $x$ and $y$ are positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(27x^{3/2}y^6\\right)^{1/3} = 27^{1/3} \\cdot \\left(x^{3/2}\\right)^{1/3} \\cdot \\left(y^6\\right)^{1/3}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "Since $3^3 = 27$, the number is $27^{1/3} = 3$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $27$."
                },
                {
                  "step": "For the letters, $\\left(x^{3/2}\\right)^{1/3} = x^{1/2}$ and $\\left(y^6\\right)^{1/3} = y^2$.",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the exponents of each letter."
                },
                {
                  "step": "$\\left(27x^{3/2}y^6\\right)^{1/3} = 3x^{1/2}y^2$",
                  "reason": "Multiplying the three factors writes the result as one term."
                }
              ]
            },
            {
              "prompt": "Simplify $\\left(32x^5y^{10/3}\\right)^{3/5}$, where $x$ and $y$ are positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "8*x^3*y^2",
              "lines": [
                {
                  "step": "Simplify $\\left(32x^5y^{10/3}\\right)^{3/5}$, where $x$ and $y$ are positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(32x^5y^{10/3}\\right)^{3/5} = 32^{3/5} \\cdot \\left(x^5\\right)^{3/5} \\cdot \\left(y^{10/3}\\right)^{3/5}$",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ holds for fractional exponents of positive numbers, and it gives the exponent to each factor."
                },
                {
                  "step": "$32^{3/5} = \\left(32^{1/5}\\right)^3 = 2^3 = 8$",
                  "reason": "The rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ takes the root of the number first, then the power."
                },
                {
                  "step": "For the letters, $\\left(x^5\\right)^{3/5} = x^3$ and $\\left(y^{10/3}\\right)^{3/5} = y^2$.",
                  "reason": "The power law $(a^m)^n = a^{mn}$ holds for fractional exponents of a positive base, and it multiplies the exponents of each letter."
                },
                {
                  "step": "$\\left(32x^5y^{10/3}\\right)^{3/5} = 8x^3y^2$",
                  "reason": "Multiplying the three factors writes the result as one term."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{x^{1/3}}{x^{5/6}}$, where $x$ is positive.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{x^{1/3}}{x^{5/6}}$, where $x$ is positive.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x^{1/3}}{x^{5/6}} = x^{\\frac{1}{3}-\\frac{5}{6}}$",
                "reason": "The quotient law $\\dfrac{a^m}{a^n} = a^{m-n}$ holds for fractional exponents of a positive base, and it leaves the letter $x$ once."
              },
              {
                "step": "$x^{\\frac{1}{3}-\\frac{5}{6}} = x^{-1/2}$",
                "reason": "Subtracting fractions with a common denominator: $\\frac{1}{3}-\\frac{5}{6} = -\\frac{1}{2}$."
              },
              {
                "step": "$x^{-1/2} = \\dfrac{1}{x^{1/2}}$",
                "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ holds for fractional exponents of a positive base, and it leaves no negative exponent."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{y^{1/2}}{y^{5/4}}$, where $y$ is positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "1/y^(3/4)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{y^{1/2}}{y^{5/4}}$, where $y$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{y^{1/2}}{y^{5/4}} = y^{\\frac{1}{2}-\\frac{5}{4}}$",
                  "reason": "The quotient law $\\dfrac{a^m}{a^n} = a^{m-n}$ holds for fractional exponents of a positive base, and it leaves the letter $y$ once."
                },
                {
                  "step": "$y^{\\frac{1}{2}-\\frac{5}{4}} = y^{-3/4}$",
                  "reason": "Subtracting fractions with a common denominator: $\\frac{1}{2}-\\frac{5}{4} = -\\frac{3}{4}$."
                },
                {
                  "step": "$y^{-3/4} = \\dfrac{1}{y^{3/4}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ holds for fractional exponents of a positive base, and it leaves no negative exponent."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{x^{2/3}}{x^2}$, where $x$ is positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "1/x^(4/3)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{x^{2/3}}{x^2}$, where $x$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x^{2/3}}{x^2} = x^{\\frac{2}{3}-2}$",
                  "reason": "The quotient law $\\dfrac{a^m}{a^n} = a^{m-n}$ holds for fractional exponents of a positive base, and it leaves the letter $x$ once."
                },
                {
                  "step": "$x^{\\frac{2}{3}-2} = x^{-4/3}$",
                  "reason": "Subtracting fractions with a common denominator: $\\frac{2}{3}-2 = -\\frac{4}{3}$."
                },
                {
                  "step": "$x^{-4/3} = \\dfrac{1}{x^{4/3}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ holds for fractional exponents of a positive base, and it leaves no negative exponent."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{z^{3/4}}{z^{3/2}}$, where $z$ is positive.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "1/z^(3/4)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{z^{3/4}}{z^{3/2}}$, where $z$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{z^{3/4}}{z^{3/2}} = z^{\\frac{3}{4}-\\frac{3}{2}}$",
                  "reason": "The quotient law $\\dfrac{a^m}{a^n} = a^{m-n}$ holds for fractional exponents of a positive base, and it leaves the letter $z$ once."
                },
                {
                  "step": "$z^{\\frac{3}{4}-\\frac{3}{2}} = z^{-3/4}$",
                  "reason": "Subtracting fractions with a common denominator: $\\frac{3}{4}-\\frac{3}{2} = -\\frac{3}{4}$."
                },
                {
                  "step": "$z^{-3/4} = \\dfrac{1}{z^{3/4}}$",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ holds for fractional exponents of a positive base, and it leaves no negative exponent."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t103-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this evaluation of $(16 + 9)^{3/2}$, and write that line right.",
            "given": [
              "$(16 + 9)^{3/2} = \\left((16 + 9)^{1/2}\\right)^3$",
              "$(16 + 9)^{1/2} = 16^{1/2} + 9^{1/2}$",
              "$16^{1/2} + 9^{1/2} = 4 + 3 = 7$",
              "$7^3 = 343$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this evaluation of $(16 + 9)^{3/2}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes the power $\\frac12$ of each term of the sum $16 + 9$.",
                "reason": "Power of a product $(ab)^n = a^nb^n$ shares an exponent among the factors of a product. No fact shares an exponent among the terms of a sum."
              },
              {
                "step": "The sum in the bracket is worked out first: $16 + 9 = 25$.",
                "reason": "The order of operations works out a bracket before the power outside it."
              },
              {
                "step": "Line 2 written right is $(16 + 9)^{1/2} = 25^{1/2}$.",
                "reason": "The base of the power is the whole bracket, so its value takes the exponent."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this evaluation of $(64 + 36)^{1/2}$, and write that line right.",
              "given": [
                "$(64 + 36)^{1/2} = 64^{1/2} + 36^{1/2}$",
                "$64^{1/2} = 8$ and $36^{1/2} = 6$",
                "$8 + 6 = 14$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (64+36)^(1/2) = 100^(1/2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $(64 + 36)^{1/2}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 takes the power $\\frac12$ of each term of the sum $64 + 36$.",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ shares an exponent among the factors of a product. No fact shares an exponent among the terms of a sum."
                },
                {
                  "step": "The sum in the bracket is worked out first: $64 + 36 = 100$.",
                  "reason": "The order of operations works out a bracket before the power outside it."
                },
                {
                  "step": "Line 1 written right is $(64 + 36)^{1/2} = 100^{1/2}$.",
                  "reason": "The base of the power is the whole bracket, so its value takes the exponent."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $(144 + 81)^{3/2}$, and write that line right.",
              "given": [
                "$144^{1/2} = 12$ and $81^{1/2} = 9$",
                "$(144 + 81)^{3/2} = \\left((144 + 81)^{1/2}\\right)^3$",
                "$(144 + 81)^{1/2} = 12 + 9$",
                "$21^3 = 9261$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (144+81)^(1/2) = 225^(1/2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $(144 + 81)^{3/2}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes the power $\\frac12$ of each term of the sum $144 + 81$.",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ shares an exponent among the factors of a product. No fact shares an exponent among the terms of a sum."
                },
                {
                  "step": "The sum in the bracket is worked out first: $144 + 81 = 225$.",
                  "reason": "The order of operations works out a bracket before the power outside it."
                },
                {
                  "step": "Line 3 written right is $(144 + 81)^{1/2} = 225^{1/2}$.",
                  "reason": "The base of the power is the whole bracket, so its value takes the exponent."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $(100 - 64)^{3/2}$, and write that line right.",
              "given": [
                "$(100 - 64)^{3/2} = \\left((100 - 64)^{1/2}\\right)^3$",
                "$(100 - 64)^{1/2} = 100^{1/2} - 64^{1/2}$",
                "$100^{1/2} - 64^{1/2} = 10 - 8 = 2$",
                "$2^3 = 8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (100-64)^(1/2) = 36^(1/2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $(100 - 64)^{3/2}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes the power $\\frac12$ of each term of the difference $100 - 64$.",
                  "reason": "Power of a product $(ab)^n = a^nb^n$ shares an exponent among the factors of a product. No fact shares an exponent among the terms of a difference."
                },
                {
                  "step": "The difference in the bracket is worked out first: $100 - 64 = 36$.",
                  "reason": "The order of operations works out a bracket before the power outside it."
                },
                {
                  "step": "Line 2 written right is $(100 - 64)^{1/2} = 36^{1/2}$.",
                  "reason": "The base of the power is the whole bracket, so its value takes the exponent."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this evaluation of $(-8)^{7/3}$, and write that line right.",
            "given": [
              "$(-8)^{7/3} = \\left((-8)^{1/3}\\right)^7$",
              "$(-8)^{1/3} = 2$",
              "$2^7 = 128$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this evaluation of $(-8)^{7/3}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 loses the minus sign of the base $-8$.",
                "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-8$. The third power of $2$ is $8$."
              },
              {
                "step": "The number $-2$ has third power $(-2)^3 = -8$.",
                "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
              },
              {
                "step": "Line 2 written right is $(-8)^{1/3} = -2$.",
                "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this evaluation of $(-27)^{5/3}$, and write that line right.",
              "given": [
                "$(-27)^{1/3} = 3$",
                "$(-27)^{5/3} = \\left((-27)^{1/3}\\right)^5$",
                "$3^5 = 243$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (-27)^(1/3) = -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $(-27)^{5/3}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 loses the minus sign of the base $-27$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-27$. The third power of $3$ is $27$."
                },
                {
                  "step": "The number $-3$ has third power $(-3)^3 = -27$.",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
                },
                {
                  "step": "Line 1 written right is $(-27)^{1/3} = -3$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-27$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $(-32)^{7/5}$, and write that line right.",
              "given": [
                "$(-32)^{7/5} = \\left((-32)^{1/5}\\right)^7$",
                "$2^5 = 32$",
                "$(-32)^{1/5} = 2$",
                "$2^7 = 128$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (-32)^(1/5) = -2",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $(-32)^{7/5}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 loses the minus sign of the base $-32$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose fifth power is $-32$. The fifth power of $2$ is $32$."
                },
                {
                  "step": "The number $-2$ has fifth power $(-2)^5 = -32$.",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
                },
                {
                  "step": "Line 3 written right is $(-32)^{1/5} = -2$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose fifth power is $-32$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $(-64)^{5/3}$, and write that line right.",
              "given": [
                "$(-64)^{5/3} = \\left((-64)^{1/3}\\right)^5$",
                "$4^3 = 64$",
                "$(-64)^{1/3} = 4$",
                "$4^5 = 1024$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (-64)^(1/3) = -4",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $(-64)^{5/3}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 loses the minus sign of the base $-64$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-64$. The third power of $4$ is $64$."
                },
                {
                  "step": "The number $-4$ has third power $(-4)^3 = -64$.",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
                },
                {
                  "step": "Line 3 written right is $(-64)^{1/3} = -4$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real number whose third power is $-64$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this evaluation of $9^{-3/2}$, and write that line right.",
            "given": [
              "$9^{1/2} = 3$",
              "$9^{-3/2} = 9^{3/2}$",
              "$9^{3/2} = 3^3 = 27$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this evaluation of $9^{-3/2}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 loses the minus sign of the exponent $-\\frac{3}{2}$.",
                "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ gives the minus sign of an exponent a meaning, so it cannot be dropped."
              },
              {
                "step": "The power $9^{-3/2}$ is the reciprocal of $9^{3/2}$, and the two are different numbers.",
                "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$."
              },
              {
                "step": "Line 2 written right is $9^{-3/2} = \\dfrac{1}{9^{3/2}}$.",
                "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$, with the minus sign kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this evaluation of $16^{-5/4}$, and write that line right.",
              "given": [
                "$16^{-5/4} = 16^{5/4}$",
                "$16^{5/4} = \\left(16^{1/4}\\right)^5$",
                "$\\left(16^{1/4}\\right)^5 = 2^5 = 32$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 16^(-5/4) = 1/16^(5/4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $16^{-5/4}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 loses the minus sign of the exponent $-\\frac{5}{4}$.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ gives the minus sign of an exponent a meaning, so it cannot be dropped."
                },
                {
                  "step": "The power $16^{-5/4}$ is the reciprocal of $16^{5/4}$, and the two are different numbers.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$."
                },
                {
                  "step": "Line 1 written right is $16^{-5/4} = \\dfrac{1}{16^{5/4}}$.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$, with the minus sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $125^{-2/3}$, and write that line right.",
              "given": [
                "$125^{1/3} = 5$",
                "$125^{2/3} = 5^2 = 25$",
                "$125^{-2/3} = 25$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 125^(-2/3) = 1/25",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $125^{-2/3}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 loses the minus sign of the exponent $-\\frac{2}{3}$.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ gives the minus sign of an exponent a meaning, so it cannot be dropped."
                },
                {
                  "step": "The power with the positive exponent is $125^{2/3} = 25$, and $125^{-2/3}$ is its reciprocal.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$."
                },
                {
                  "step": "Line 3 written right is $125^{-2/3} = \\dfrac{1}{25}$.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$, with the minus sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $36^{-3/2}$, and write that line right.",
              "given": [
                "$36^{1/2} = 6$",
                "$36^{3/2} = 6^3 = 216$",
                "$36^{-3/2} = 216$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 36^(-3/2) = 1/216",
              "lines": [
                {
                  "step": "Find the first wrong line in this evaluation of $36^{-3/2}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 loses the minus sign of the exponent $-\\frac{3}{2}$.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$ gives the minus sign of an exponent a meaning, so it cannot be dropped."
                },
                {
                  "step": "The power with the positive exponent is $36^{3/2} = 216$, and $36^{-3/2}$ is its reciprocal.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$."
                },
                {
                  "step": "Line 3 written right is $36^{-3/2} = \\dfrac{1}{216}$.",
                  "reason": "The negative exponent rule $a^{-n} = \\dfrac{1}{a^n}$, with the minus sign kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t103-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the square root of the cube of a number $x$ is 8. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: the square root of the cube of a number $x$ is 8. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The cube of the number is $x^3$.",
                "reason": "Writing a sentence as an equation: the cube of a number is its third power."
              },
              {
                "step": "The square root of that is $\\left(x^3\\right)^{1/2}$.",
                "reason": "Writing a sentence as an equation: by the definition of $x^{1/n}$, the square root of a number is its power with exponent $\\frac{1}{2}$."
              },
              {
                "step": "$\\left(x^3\\right)^{1/2} = 8$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the cube root of the square of a number $x$ is 4. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^2)^(1/3) = 4",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the cube root of the square of a number $x$ is 4. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$.",
                  "reason": "Writing a sentence as an equation: the square of a number is its second power."
                },
                {
                  "step": "The cube root of that is $\\left(x^2\\right)^{1/3}$.",
                  "reason": "Writing a sentence as an equation: by the definition of $x^{1/n}$, the cube root of a number is its power with exponent $\\frac{1}{3}$."
                },
                {
                  "step": "$\\left(x^2\\right)^{1/3} = 4$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $y$: the square root of the fifth power of a number $y$ is 32. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(y^5)^(1/2) = 32",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $y$: the square root of the fifth power of a number $y$ is 32. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fifth power of the number is $y^5$.",
                  "reason": "Writing a sentence as an equation: by the definition of a power as repeated multiplication, the fifth power has five equal factors."
                },
                {
                  "step": "The square root of that is $\\left(y^5\\right)^{1/2}$.",
                  "reason": "Writing a sentence as an equation: by the definition of $x^{1/n}$, the square root of a number is its power with exponent $\\frac{1}{2}$."
                },
                {
                  "step": "$\\left(y^5\\right)^{1/2} = 32$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the fourth root of the cube of a number $x$ is 27. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^3)^(1/4) = 27",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the fourth root of the cube of a number $x$ is 27. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cube of the number is $x^3$.",
                  "reason": "Writing a sentence as an equation: the cube of a number is its third power."
                },
                {
                  "step": "The fourth root of that is $\\left(x^3\\right)^{1/4}$.",
                  "reason": "Writing a sentence as an equation: by the definition of $x^{1/n}$, the fourth root of a number is its power with exponent $\\frac{1}{4}$."
                },
                {
                  "step": "$\\left(x^3\\right)^{1/4} = 27$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the cube of the square root of a number $x$ is 27. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: the cube of the square root of a number $x$ is 27. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square root of the number is $x^{1/2}$.",
                "reason": "Writing a sentence as an equation: by the definition of $x^{1/n}$, the square root of a number is its power with exponent $\\frac{1}{2}$."
              },
              {
                "step": "The cube of that is $\\left(x^{1/2}\\right)^3$.",
                "reason": "Writing a sentence as an equation: the cube of a number is its third power."
              },
              {
                "step": "$\\left(x^{1/2}\\right)^3 = 27$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the square of the cube root of a number $x$ is 9. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^(1/3))^2 = 9",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the square of the cube root of a number $x$ is 9. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cube root of the number is $x^{1/3}$.",
                  "reason": "Writing a sentence as an equation: by the definition of $x^{1/n}$, the cube root of a number is its power with exponent $\\frac{1}{3}$."
                },
                {
                  "step": "The square of that is $\\left(x^{1/3}\\right)^2$.",
                  "reason": "Writing a sentence as an equation: the square of a number is its second power."
                },
                {
                  "step": "$\\left(x^{1/3}\\right)^2 = 9$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $y$: the cube of the fourth root of a number $y$ is 8. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(y^(1/4))^3 = 8",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $y$: the cube of the fourth root of a number $y$ is 8. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fourth root of the number is $y^{1/4}$.",
                  "reason": "Writing a sentence as an equation: by the definition of $x^{1/n}$, the fourth root of a number is its power with exponent $\\frac{1}{4}$."
                },
                {
                  "step": "The cube of that is $\\left(y^{1/4}\\right)^3$.",
                  "reason": "Writing a sentence as an equation: the cube of a number is its third power."
                },
                {
                  "step": "$\\left(y^{1/4}\\right)^3 = 8$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the fifth power of the square root of a number $x$ is 15. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^(1/2))^5 = 15",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the fifth power of the square root of a number $x$ is 15. Write the root as a fractional exponent, and keep the root and the power as two exponents in the order of the sentence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root of the number is $x^{1/2}$.",
                  "reason": "Writing a sentence as an equation: by the definition of $x^{1/n}$, the square root of a number is its power with exponent $\\frac{1}{2}$."
                },
                {
                  "step": "The fifth power of that is $\\left(x^{1/2}\\right)^5$.",
                  "reason": "Writing a sentence as an equation: by the definition of a power as repeated multiplication, the fifth power has five equal factors."
                },
                {
                  "step": "$\\left(x^{1/2}\\right)^5 = 15$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
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
      "id": "t103-p1",
      "method": "proof by cases",
      "statement": "Let $a$ be a positive number. Then $a$ and $-a$ are two different numbers with square $a^2$, and $a$ is the only real number with cube $a^3$.",
      "idea": "A number and its opposite have the same square and opposite cubes. So two numbers have square $a^2$, and the word nonnegative in the definition of $x^{1/2}$ picks one of them. Only one number has cube $a^3$, because a smaller positive number has a smaller cube and a larger one a larger cube. So the definition of $x^{1/3}$ has nothing to pick.",
      "lines": [
        {
          "line": "$(-a)^2 = (-1)^2a^2$.",
          "reason": "power of a product, with $-a$ written as $(-1)a$"
        },
        {
          "line": "Since $(-1)^2 = 1$, the product $(-1)^2a^2$ is $a^2$, so $(-a)^2 = a^2$.",
          "reason": "the sign of a power of a negative number: $(-1)^2 = 1$"
        },
        {
          "line": "Since $a$ is positive, $-a$ is negative, so $a$ and $-a$ are different numbers.",
          "reason": "trichotomy of order: no number is both positive and negative"
        },
        {
          "line": "So $a$ and $-a$ are two different numbers with square $a^2$.",
          "reason": "combining the two previous lines"
        },
        {
          "line": "The number $a^3$ is positive.",
          "reason": "a product of positive numbers is positive"
        },
        {
          "line": "Let $y$ be a real number. Exactly one of five cases holds: $y = 0$; $y < 0$; $0 < y < a$; $y > a$; $y = a$.",
          "reason": "trichotomy of order, used for $y$ and $0$ and then for $y$ and $a$"
        },
        {
          "line": "Case $y = 0$: then $y^3 = 0$, which is not the positive number $a^3$.",
          "reason": "a product with a factor $0$ is $0$"
        },
        {
          "line": "Case $y < 0$: then $y^3$ is negative, which is not the positive number $a^3$.",
          "reason": "the sign of a power of a negative number: an odd power of a negative number is negative"
        },
        {
          "line": "Case $0 < y < a$: then $y^2 < ay$.",
          "reason": "multiplying an inequality by a positive number preserves it, here $y < a$ by $y$"
        },
        {
          "line": "In this case also $ay < a^2$.",
          "reason": "multiplying an inequality by a positive number preserves it, here $y < a$ by $a$"
        },
        {
          "line": "So $y^2 < a^2$.",
          "reason": "transitivity of order"
        },
        {
          "line": "Then $y^3 < a^2y$.",
          "reason": "multiplying an inequality by a positive number preserves it, here $y^2 < a^2$ by $y$"
        },
        {
          "line": "Also $a^2y < a^3$.",
          "reason": "multiplying an inequality by a positive number preserves it, here $y < a$ by $a^2$"
        },
        {
          "line": "So $y^3 < a^3$, and $y^3$ is not $a^3$.",
          "reason": "transitivity of order, then trichotomy of order"
        },
        {
          "line": "Case $y > a$: then $a^2 < ay$.",
          "reason": "multiplying an inequality by a positive number preserves it, here $a < y$ by $a$"
        },
        {
          "line": "In this case also $ay < y^2$.",
          "reason": "multiplying an inequality by a positive number preserves it, here $a < y$ by $y$, which is positive because $y > a > 0$"
        },
        {
          "line": "So $a^2 < y^2$.",
          "reason": "transitivity of order"
        },
        {
          "line": "Then $a^3 < ay^2$.",
          "reason": "multiplying an inequality by a positive number preserves it, here $a^2 < y^2$ by $a$"
        },
        {
          "line": "Also $ay^2 < y^3$.",
          "reason": "multiplying an inequality by a positive number preserves it, here $a < y$ by $y^2$"
        },
        {
          "line": "So $a^3 < y^3$, and $y^3$ is not $a^3$.",
          "reason": "transitivity of order, then trichotomy of order"
        },
        {
          "line": "Case $y = a$: then $y^3 = a^3$.",
          "reason": "substituting $a$ for $y$"
        },
        {
          "line": "So $y^3 = a^3$ holds in the case $y = a$ and in no other case.",
          "reason": "the five cases cover every real number $y$"
        },
        {
          "line": "Therefore $a$ and $-a$ are two different numbers with square $a^2$, and $a$ is the only real number with cube $a^3$.",
          "reason": "combining the fourth line and the previous line"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t103-s1",
      "method": "proof by cases",
      "statement": "Let $n$ be a positive even whole number and let $a$ be a negative number. Then no real number $y$ has $y^n = a$.",
      "check": {
        "proof": [
          {
            "line": "Let $y$ be a real number. Exactly one of $y = 0$, $y > 0$ and $y < 0$ holds.",
            "reason": "trichotomy of order"
          },
          {
            "line": "Case $y = 0$: then $y^n = 0$.",
            "reason": "a product with a factor $0$ is $0$, and $n$ is positive"
          },
          {
            "line": "Case $y > 0$: then $y^n$ is positive.",
            "reason": "a product of positive numbers is positive"
          },
          {
            "line": "Case $y < 0$: then $y^n$ is positive.",
            "reason": "the sign of a power of a negative number: an even power of a negative number is positive"
          },
          {
            "line": "In every case $y^n \\ge 0$, and $a < 0$, so $y^n$ is not $a$.",
            "reason": "trichotomy of order"
          },
          {
            "line": "Therefore no real number $y$ has $y^n = a$.",
            "reason": "the three cases cover every real number $y$"
          }
        ]
      }
    },
    {
      "id": "t103-s2",
      "method": "proof by cases",
      "statement": "Let $n$ be a positive whole number and let $x \\ge 0$. Then $\\left(x^n\\right)^{1/n} = x$.",
      "check": {
        "proof": [
          {
            "line": "The number $x^n$ is nonnegative.",
            "reason": "a product of nonnegative numbers is nonnegative"
          },
          {
            "line": "The number $x$ is a nonnegative number whose $n$th power is $x^n$.",
            "reason": "the hypothesis $x \\ge 0$"
          },
          {
            "line": "Case $n$ even: $\\left(x^n\\right)^{1/n}$ is the nonnegative number whose $n$th power is $x^n$, so it is $x$.",
            "reason": "the definition of $x^{1/n}$ for even $n$, applied to the nonnegative number $x^n$"
          },
          {
            "line": "Case $n$ odd: $\\left(x^n\\right)^{1/n}$ is the one real number whose $n$th power is $x^n$, so it is $x$.",
            "reason": "the definition of $x^{1/n}$ for odd $n$"
          },
          {
            "line": "Therefore $\\left(x^n\\right)^{1/n} = x$.",
            "reason": "every positive whole number is even or odd"
          }
        ]
      }
    },
    {
      "id": "t103-s3",
      "method": "direct proof",
      "statement": "Let $k$, $m$ and $n$ be positive whole numbers and let $x$ be a positive number. Then $\\left(x^{1/(kn)}\\right)^{km} = \\left(x^{1/n}\\right)^m$.",
      "check": {
        "proof": [
          {
            "line": "Write $b$ for $x^{1/(kn)}$. Then $b^{kn} = x$.",
            "reason": "the definition of $x^{1/n}$"
          },
          {
            "line": "The number $b$ is positive.",
            "reason": "the definition of $x^{1/n}$ for even $kn$, with $b$ not $0$ because $x$ is not $0$. For odd $kn$, a negative $b$ or $b = 0$ would not have the positive power $x$, by the sign of a power of a negative number"
          },
          {
            "line": "$\\left(b^k\\right)^n = b^{kn}$.",
            "reason": "the power law for whole exponents"
          },
          {
            "line": "So $\\left(b^k\\right)^n = x$.",
            "reason": "substituting $b^{kn} = x$ from the first line"
          },
          {
            "line": "The number $b^k$ is positive.",
            "reason": "a product of positive numbers is positive"
          },
          {
            "line": "So $b^k = x^{1/n}$.",
            "reason": "the definition of $x^{1/n}$: for even $n$ the nonnegative number whose $n$th power is $x$, for odd $n$ the one real such number"
          },
          {
            "line": "$\\left(x^{1/n}\\right)^m = \\left(b^k\\right)^m = b^{km}$.",
            "reason": "substituting $b^k$ for $x^{1/n}$, then the power law for whole exponents"
          },
          {
            "line": "Therefore $\\left(x^{1/(kn)}\\right)^{km} = \\left(x^{1/n}\\right)^m$.",
            "reason": "substituting $x^{1/(kn)}$ for $b$"
          }
        ]
      }
    },
    {
      "id": "t103-s4",
      "method": "direct proof",
      "statement": "Let $m$ and $n$ be positive whole numbers and let $x \\ge 0$. Then $\\left(x^{1/n}\\right)^m = \\left(x^m\\right)^{1/n}$.",
      "check": {
        "proof": [
          {
            "line": "Write $b$ for $x^{1/n}$. Then $b^n = x$.",
            "reason": "the definition of $x^{1/n}$"
          },
          {
            "line": "The number $b$ is nonnegative.",
            "reason": "the definition of $x^{1/n}$ for even $n$. For odd $n$, a negative $b$ would have a negative $n$th power, by the sign of a power of a negative number, and $x$ is not negative"
          },
          {
            "line": "$\\left(b^m\\right)^n = b^{mn}$.",
            "reason": "the power law for whole exponents"
          },
          {
            "line": "$b^{mn} = \\left(b^n\\right)^m$.",
            "reason": "the power law for whole exponents"
          },
          {
            "line": "So $\\left(b^m\\right)^n = x^m$.",
            "reason": "substituting $b^n = x$ from the first line"
          },
          {
            "line": "The numbers $b^m$ and $x^m$ are nonnegative.",
            "reason": "a product of nonnegative numbers is nonnegative"
          },
          {
            "line": "So $b^m$ is a nonnegative number whose $n$th power is the nonnegative number $x^m$, and $\\left(x^m\\right)^{1/n} = b^m$.",
            "reason": "the definition of $x^{1/n}$: for even $n$ the nonnegative such number, for odd $n$ the one real such number"
          },
          {
            "line": "Therefore $\\left(x^{1/n}\\right)^m = \\left(x^m\\right)^{1/n}$.",
            "reason": "substituting $x^{1/n}$ for $b$"
          }
        ]
      }
    },
    {
      "id": "t103-s5",
      "method": "direct proof",
      "statement": "Let $k$, $m$ and $n$ be positive whole numbers and let $x$ be a positive number. Then $x^{k/n} \\cdot x^{m/n} = x^{(k+m)/n}$.",
      "check": {
        "proof": [
          {
            "line": "Write $b$ for $x^{1/n}$. Then $x^{k/n} = b^k$ and $x^{m/n} = b^m$.",
            "reason": "the rule $x^{m/n} = \\left(x^{1/n}\\right)^m$, whose value for a positive base is the same for every way of writing the fraction"
          },
          {
            "line": "$x^{k/n} \\cdot x^{m/n} = b^k \\cdot b^m$.",
            "reason": "substituting the two powers from the first line"
          },
          {
            "line": "$b^k \\cdot b^m = b^{k+m}$.",
            "reason": "the product law for whole exponents"
          },
          {
            "line": "$b^{k+m} = \\left(x^{1/n}\\right)^{k+m} = x^{(k+m)/n}$.",
            "reason": "substituting $x^{1/n}$ for $b$, then the rule $x^{m/n} = \\left(x^{1/n}\\right)^m$ with the whole number $k+m$ in the place of $m$"
          },
          {
            "line": "Therefore $x^{k/n} \\cdot x^{m/n} = x^{(k+m)/n}$.",
            "reason": "combining the three previous lines"
          }
        ]
      }
    }
  ]
}
