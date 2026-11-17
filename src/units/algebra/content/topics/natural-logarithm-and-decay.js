export default {
  "number": 220,
  "title": "The number e, natural logarithms and decay",
  "section": 17,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "444-450"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the amount, in grams, left after 21 days of 104 grams of a substance, given that half of what is left decays in every 7 days.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "13",
    "solution": [
      "Find the amount, in grams, left after 21 days of 104 grams of a substance, given that half of what is left decays in every 7 days.",
      "$y = 104\\left(\\dfrac{1}{2}\\right)^{21/7}$",
      "$y = 104\\left(\\dfrac{1}{2}\\right)^{3}$",
      "$y = 104 \\cdot \\dfrac{1}{8}$",
      "$y = 13$"
    ]
  },
  "ideas": [
    {
      "name": "The number e",
      "concrete": "With $n = 3$, the number $\\left(1 + \\dfrac{1}{n}\\right)^n$ is $\\left(\\dfrac{4}{3}\\right)^{3} = \\dfrac{64}{27}$.",
      "general": "For whole numbers $n$ from $1$ up, the numbers $\\left(1 + \\dfrac{1}{n}\\right)^n$ form a sequence. The **number $e$** is the limit of this sequence, the limit as arithmetic's decimals topic defines it: the number whose distance from $\\left(1 + \\dfrac{1}{n}\\right)^n$ goes to $0$ as $n$ grows without bound."
    },
    {
      "name": "The limit of $\\left(1+\\frac1n\\right)^n$ exists",
      "concrete": "With $n = 4$, the number $\\left(1 + \\dfrac{1}{n}\\right)^n$ is $\\left(\\dfrac{5}{4}\\right)^{4} = \\dfrac{625}{256}$, which lies between $2$ and $3$.",
      "general": "The numbers $\\left(1 + \\dfrac{1}{n}\\right)^n$, for whole numbers $n$ from $1$ up, have a limit, and the limit lies between $2$ and $3$. So the number $e$ exists, is positive and is not $1$. The course states this fact with no proof."
    },
    {
      "name": "Natural logarithm",
      "concrete": "The power of $e$ that gives $e^{2}$ is $2$, so the logarithm of $e^{2}$ to the base $e$ is $2$. It is written $\\ln e^{2} = 2$.",
      "general": "For a positive number $b$, the **natural logarithm** of $b$ is the logarithm of $b$ to the base $e$, written $\\ln b$: $\\ln b = \\log_e b$, so $\\ln b = p$ means $e^p = b$. The base $e$ is positive and not $1$, so every fact about logarithms holds for the natural logarithm: $e^{\\ln b} = b$ for every positive number $b$, $\\ln e^p = p$ for every real number $p$, and equal positive numbers have equal natural logarithms."
    },
    {
      "name": "Half-life formula",
      "concrete": "An amount of $80$ that is halved every $3$ days is $40$ after $3$ days, $20$ after $6$ days and $10$ after $9$ days, and $10 = 80\\left(\\dfrac{1}{2}\\right)^{9/3}$.",
      "general": "An amount **decays exponentially** when over every stretch of time of one fixed length it is multiplied by one fixed number between $0$ and $1$, wherever the stretch starts. The **half-life** of such an amount is the length of the stretch over which it is halved. For positive numbers $b$ and $c$, an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at every time $x \\ge 0$, a whole number of half-lives or not. This is the **Half-life formula**."
    }
  ],
  "kinds": [
    {
      "id": "t220-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the amount, in grams, left after 20 days of 352 grams of a substance with a half-life of 4 days.",
            "lines": [
              {
                "step": "Find the amount, in grams, left after 20 days of 352 grams of a substance with a half-life of 4 days.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 352\\left(\\dfrac{1}{2}\\right)^{20/4}$",
                "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $y$ stands for the amount left."
              },
              {
                "step": "$y = 352\\left(\\dfrac{1}{2}\\right)^{5}$",
                "reason": "Order of operations, from arithmetic: the exponent is worked out, $20 \\div 4 = 5$."
              },
              {
                "step": "$y = 352 \\cdot \\dfrac{1}{32}$",
                "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{5} = \\dfrac{1}{2^{5}} = \\dfrac{1}{32}$."
              },
              {
                "step": "$y = 11$",
                "reason": "The product formula, from arithmetic: $352 \\cdot \\dfrac{1}{32} = \\dfrac{352}{32}$, which is $11$ in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the amount, in milligrams, left after 18 hours of 240 milligrams of a substance with a half-life of 6 hours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the amount, in milligrams, left after 18 hours of 240 milligrams of a substance with a half-life of 6 hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 240\\left(\\dfrac{1}{2}\\right)^{18/6}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $y$ stands for the amount left."
                },
                {
                  "step": "$y = 240\\left(\\dfrac{1}{2}\\right)^{3}$",
                  "reason": "Order of operations, from arithmetic: the exponent is worked out, $18 \\div 6 = 3$."
                },
                {
                  "step": "$y = 240 \\cdot \\dfrac{1}{8}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{3} = \\dfrac{1}{2^{3}} = \\dfrac{1}{8}$."
                },
                {
                  "step": "$y = 30$",
                  "reason": "The product formula, from arithmetic: $240 \\cdot \\dfrac{1}{8} = \\dfrac{240}{8}$, which is $30$ in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the amount, in kilograms, left after 12 years of 200 kilograms of a substance with a half-life of 6 years.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "50",
              "lines": [
                {
                  "step": "Find the amount, in kilograms, left after 12 years of 200 kilograms of a substance with a half-life of 6 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 200\\left(\\dfrac{1}{2}\\right)^{12/6}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $y$ stands for the amount left."
                },
                {
                  "step": "$y = 200\\left(\\dfrac{1}{2}\\right)^{2}$",
                  "reason": "Order of operations, from arithmetic: the exponent is worked out, $12 \\div 6 = 2$."
                },
                {
                  "step": "$y = 200 \\cdot \\dfrac{1}{4}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{2} = \\dfrac{1}{2^{2}} = \\dfrac{1}{4}$."
                },
                {
                  "step": "$y = 50$",
                  "reason": "The product formula, from arithmetic: $200 \\cdot \\dfrac{1}{4} = \\dfrac{200}{4}$, which is $50$ in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the amount, in grams, left after 35 minutes of 320 grams of a substance with a half-life of 7 minutes.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the amount, in grams, left after 35 minutes of 320 grams of a substance with a half-life of 7 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 320\\left(\\dfrac{1}{2}\\right)^{35/7}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $y$ stands for the amount left."
                },
                {
                  "step": "$y = 320\\left(\\dfrac{1}{2}\\right)^{5}$",
                  "reason": "Order of operations, from arithmetic: the exponent is worked out, $35 \\div 7 = 5$."
                },
                {
                  "step": "$y = 320 \\cdot \\dfrac{1}{32}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{5} = \\dfrac{1}{2^{5}} = \\dfrac{1}{32}$."
                },
                {
                  "step": "$y = 10$",
                  "reason": "The product formula, from arithmetic: $320 \\cdot \\dfrac{1}{32} = \\dfrac{320}{32}$, which is $10$ in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the amount, in grams, left after 45 days of 464 grams of a substance with a half-life of 10 days.",
            "lines": [
              {
                "step": "Find the amount, in grams, left after 45 days of 464 grams of a substance with a half-life of 10 days.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 464\\left(\\dfrac{1}{2}\\right)^{45/10}$",
                "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $y$ stands for the amount left."
              },
              {
                "step": "$y = 464\\left(\\dfrac{1}{2}\\right)^{9/2}$",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{45}{10} = \\dfrac{9}{2}$."
              },
              {
                "step": "$y = 464\\left(\\dfrac{1}{2}\\right)^{4}\\left(\\dfrac{1}{2}\\right)^{1/2}$",
                "reason": "Product law: $a^ma^n = a^{m+n}$, read the other way, with $\\dfrac{9}{2} = 4 + \\dfrac{1}{2}$."
              },
              {
                "step": "$y = 464 \\cdot \\dfrac{1}{16}\\left(\\dfrac{1}{2}\\right)^{1/2}$",
                "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{4} = \\dfrac{1}{2^{4}} = \\dfrac{1}{16}$."
              },
              {
                "step": "$y = 464 \\cdot \\dfrac{1}{16} \\cdot \\dfrac{1}{\\sqrt{2}}$",
                "reason": "Root of a quotient: the exponent $\\dfrac{1}{2}$ is the square root, and $\\sqrt{\\dfrac{1}{2}} = \\dfrac{\\sqrt{1}}{\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}}$."
              },
              {
                "step": "$y = \\dfrac{29}{\\sqrt{2}}$",
                "reason": "The product formula, from arithmetic: $464 \\cdot \\dfrac{1}{16} = 29$."
              },
              {
                "step": "$y = \\dfrac{29\\sqrt{2}}{2}$",
                "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{2}$, and $\\sqrt{2} \\cdot \\sqrt{2} = 2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the amount, in milligrams, left after 54 hours of 368 milligrams of a substance with a half-life of 12 hours.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "23*sqrt(2)/2",
              "lines": [
                {
                  "step": "Find the amount, in milligrams, left after 54 hours of 368 milligrams of a substance with a half-life of 12 hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 368\\left(\\dfrac{1}{2}\\right)^{54/12}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $y$ stands for the amount left."
                },
                {
                  "step": "$y = 368\\left(\\dfrac{1}{2}\\right)^{9/2}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{54}{12} = \\dfrac{9}{2}$."
                },
                {
                  "step": "$y = 368\\left(\\dfrac{1}{2}\\right)^{4}\\left(\\dfrac{1}{2}\\right)^{1/2}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$, read the other way, with $\\dfrac{9}{2} = 4 + \\dfrac{1}{2}$."
                },
                {
                  "step": "$y = 368 \\cdot \\dfrac{1}{16}\\left(\\dfrac{1}{2}\\right)^{1/2}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{4} = \\dfrac{1}{2^{4}} = \\dfrac{1}{16}$."
                },
                {
                  "step": "$y = 368 \\cdot \\dfrac{1}{16} \\cdot \\dfrac{1}{\\sqrt{2}}$",
                  "reason": "Root of a quotient: the exponent $\\dfrac{1}{2}$ is the square root, and $\\sqrt{\\dfrac{1}{2}} = \\dfrac{\\sqrt{1}}{\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}}$."
                },
                {
                  "step": "$y = \\dfrac{23}{\\sqrt{2}}$",
                  "reason": "The product formula, from arithmetic: $368 \\cdot \\dfrac{1}{16} = 23$."
                },
                {
                  "step": "$y = \\dfrac{23\\sqrt{2}}{2}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{2}$, and $\\sqrt{2} \\cdot \\sqrt{2} = 2$."
                }
              ]
            },
            {
              "prompt": "Find the amount, in kilograms, left after 30 years of 108 kilograms of a substance with a half-life of 12 years.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "27*sqrt(2)/2",
              "lines": [
                {
                  "step": "Find the amount, in kilograms, left after 30 years of 108 kilograms of a substance with a half-life of 12 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 108\\left(\\dfrac{1}{2}\\right)^{30/12}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $y$ stands for the amount left."
                },
                {
                  "step": "$y = 108\\left(\\dfrac{1}{2}\\right)^{5/2}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{30}{12} = \\dfrac{5}{2}$."
                },
                {
                  "step": "$y = 108\\left(\\dfrac{1}{2}\\right)^{2}\\left(\\dfrac{1}{2}\\right)^{1/2}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$, read the other way, with $\\dfrac{5}{2} = 2 + \\dfrac{1}{2}$."
                },
                {
                  "step": "$y = 108 \\cdot \\dfrac{1}{4}\\left(\\dfrac{1}{2}\\right)^{1/2}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{2} = \\dfrac{1}{2^{2}} = \\dfrac{1}{4}$."
                },
                {
                  "step": "$y = 108 \\cdot \\dfrac{1}{4} \\cdot \\dfrac{1}{\\sqrt{2}}$",
                  "reason": "Root of a quotient: the exponent $\\dfrac{1}{2}$ is the square root, and $\\sqrt{\\dfrac{1}{2}} = \\dfrac{\\sqrt{1}}{\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}}$."
                },
                {
                  "step": "$y = \\dfrac{27}{\\sqrt{2}}$",
                  "reason": "The product formula, from arithmetic: $108 \\cdot \\dfrac{1}{4} = 27$."
                },
                {
                  "step": "$y = \\dfrac{27\\sqrt{2}}{2}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{2}$, and $\\sqrt{2} \\cdot \\sqrt{2} = 2$."
                }
              ]
            },
            {
              "prompt": "Find the amount, in grams, left after 49 minutes of 200 grams of a substance with a half-life of 14 minutes.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "25*sqrt(2)/2",
              "lines": [
                {
                  "step": "Find the amount, in grams, left after 49 minutes of 200 grams of a substance with a half-life of 14 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 200\\left(\\dfrac{1}{2}\\right)^{49/14}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $y$ stands for the amount left."
                },
                {
                  "step": "$y = 200\\left(\\dfrac{1}{2}\\right)^{7/2}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{49}{14} = \\dfrac{7}{2}$."
                },
                {
                  "step": "$y = 200\\left(\\dfrac{1}{2}\\right)^{3}\\left(\\dfrac{1}{2}\\right)^{1/2}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$, read the other way, with $\\dfrac{7}{2} = 3 + \\dfrac{1}{2}$."
                },
                {
                  "step": "$y = 200 \\cdot \\dfrac{1}{8}\\left(\\dfrac{1}{2}\\right)^{1/2}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{3} = \\dfrac{1}{2^{3}} = \\dfrac{1}{8}$."
                },
                {
                  "step": "$y = 200 \\cdot \\dfrac{1}{8} \\cdot \\dfrac{1}{\\sqrt{2}}$",
                  "reason": "Root of a quotient: the exponent $\\dfrac{1}{2}$ is the square root, and $\\sqrt{\\dfrac{1}{2}} = \\dfrac{\\sqrt{1}}{\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}}$."
                },
                {
                  "step": "$y = \\dfrac{25}{\\sqrt{2}}$",
                  "reason": "The product formula, from arithmetic: $200 \\cdot \\dfrac{1}{8} = 25$."
                },
                {
                  "step": "$y = \\dfrac{25\\sqrt{2}}{2}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{2}$, and $\\sqrt{2} \\cdot \\sqrt{2} = 2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the starting amount, in grams, of a substance with a half-life of 5 days, given that 19 grams are left after 15 days.",
            "lines": [
              {
                "step": "Find the starting amount, in grams, of a substance with a half-life of 5 days, given that 19 grams are left after 15 days.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$19 = b\\left(\\dfrac{1}{2}\\right)^{15/5}$",
                "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $b$ is the starting amount asked for."
              },
              {
                "step": "$19 = b\\left(\\dfrac{1}{2}\\right)^{3}$",
                "reason": "Order of operations, from arithmetic: the exponent is worked out, $15 \\div 5 = 3$."
              },
              {
                "step": "$19 = b \\cdot \\dfrac{1}{8}$",
                "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{3} = \\dfrac{1}{2^{3}} = \\dfrac{1}{8}$."
              },
              {
                "step": "$b = 152$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $8$, and $19 \\cdot 8 = 152$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the starting amount, in milligrams, of a substance with a half-life of 10 hours, given that 11 milligrams are left after 30 hours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "88",
              "lines": [
                {
                  "step": "Find the starting amount, in milligrams, of a substance with a half-life of 10 hours, given that 11 milligrams are left after 30 hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$11 = b\\left(\\dfrac{1}{2}\\right)^{30/10}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $b$ is the starting amount asked for."
                },
                {
                  "step": "$11 = b\\left(\\dfrac{1}{2}\\right)^{3}$",
                  "reason": "Order of operations, from arithmetic: the exponent is worked out, $30 \\div 10 = 3$."
                },
                {
                  "step": "$11 = b \\cdot \\dfrac{1}{8}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{3} = \\dfrac{1}{2^{3}} = \\dfrac{1}{8}$."
                },
                {
                  "step": "$b = 88$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $8$, and $11 \\cdot 8 = 88$."
                }
              ]
            },
            {
              "prompt": "Find the starting amount, in kilograms, of a substance with a half-life of 7 years, given that 5 kilograms are left after 28 years.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "80",
              "lines": [
                {
                  "step": "Find the starting amount, in kilograms, of a substance with a half-life of 7 years, given that 5 kilograms are left after 28 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5 = b\\left(\\dfrac{1}{2}\\right)^{28/7}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $b$ is the starting amount asked for."
                },
                {
                  "step": "$5 = b\\left(\\dfrac{1}{2}\\right)^{4}$",
                  "reason": "Order of operations, from arithmetic: the exponent is worked out, $28 \\div 7 = 4$."
                },
                {
                  "step": "$5 = b \\cdot \\dfrac{1}{16}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{4} = \\dfrac{1}{2^{4}} = \\dfrac{1}{16}$."
                },
                {
                  "step": "$b = 80$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $16$, and $5 \\cdot 16 = 80$."
                }
              ]
            },
            {
              "prompt": "Find the starting amount, in grams, of a substance with a half-life of 3 minutes, given that 9 grams are left after 15 minutes.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "288",
              "lines": [
                {
                  "step": "Find the starting amount, in grams, of a substance with a half-life of 3 minutes, given that 9 grams are left after 15 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9 = b\\left(\\dfrac{1}{2}\\right)^{15/3}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, and here $b$ is the starting amount asked for."
                },
                {
                  "step": "$9 = b\\left(\\dfrac{1}{2}\\right)^{5}$",
                  "reason": "Order of operations, from arithmetic: the exponent is worked out, $15 \\div 3 = 5$."
                },
                {
                  "step": "$9 = b \\cdot \\dfrac{1}{32}$",
                  "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, so $\\left(\\dfrac{1}{2}\\right)^{5} = \\dfrac{1}{2^{5}} = \\dfrac{1}{32}$."
                },
                {
                  "step": "$b = 288$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $32$, and $9 \\cdot 32 = 288$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t220-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the amount, in grams, of a substance left after 20 days, given that it decays with a fixed half-life and that 875 grams are left after 5 days and 560 grams after 15 days.",
            "lines": [
              {
                "step": "Find the amount, in grams, of a substance left after 20 days, given that it decays with a fixed half-life and that 875 grams are left after 5 days and 560 grams after 15 days.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{560}{875} = \\left(\\dfrac{1}{2}\\right)^{10/c}$",
                "reason": "Half-life formula and Quotient law: with the amount $b$ at time $0$ and the half-life $c$, the amounts at the times $5$ and $15$ are $b\\left(\\dfrac{1}{2}\\right)^{5/c}$ and $b\\left(\\dfrac{1}{2}\\right)^{15/c}$, and the second divided by the first is $\\left(\\dfrac{1}{2}\\right)^{(15 - 5)/c}$."
              },
              {
                "step": "$\\dfrac{y}{875} = \\left(\\dfrac{1}{2}\\right)^{15/c}$",
                "reason": "Half-life formula and Quotient law: with the amount $b$ at time $0$ and the half-life $c$, the amounts at the times $5$ and $20$ are $b\\left(\\dfrac{1}{2}\\right)^{5/c}$ and $b\\left(\\dfrac{1}{2}\\right)^{20/c}$, and the second divided by the first is $\\left(\\dfrac{1}{2}\\right)^{(20 - 5)/c}$; here $y$ stands for the amount left after 20 days."
              },
              {
                "step": "$\\left(\\dfrac{1}{2}\\right)^{15/c} = \\left(\\left(\\dfrac{1}{2}\\right)^{10/c}\\right)^{3/2}$",
                "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents, and $\\dfrac{10}{c} \\cdot \\dfrac{3}{2} = \\dfrac{15}{c}$."
              },
              {
                "step": "$\\dfrac{y}{875} = \\left(\\dfrac{560}{875}\\right)^{3/2}$",
                "reason": "Substituting a value: by the first two equations, $\\dfrac{y}{875}$ and $\\dfrac{560}{875}$ are put in place of the two powers of $\\dfrac{1}{2}$."
              },
              {
                "step": "$\\dfrac{y}{875} = \\left(\\dfrac{16}{25}\\right)^{3/2}$",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{560}{875} = \\dfrac{16}{25}$."
              },
              {
                "step": "$\\dfrac{y}{875} = \\dfrac{64}{125}$",
                "reason": "The exponent m/n: $\\left(\\dfrac{16}{25}\\right)^{3/2} = \\left(\\left(\\dfrac{16}{25}\\right)^{1/2}\\right)^{3} = \\left(\\dfrac{4}{5}\\right)^{3}$."
              },
              {
                "step": "$y = 448$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $875$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the amount, in milligrams, of a substance left after 21 hours, given that it decays with a fixed half-life and that 56 milligrams are left after 11 hours and 7 milligrams after 26 hours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "14",
              "lines": [
                {
                  "step": "Find the amount, in milligrams, of a substance left after 21 hours, given that it decays with a fixed half-life and that 56 milligrams are left after 11 hours and 7 milligrams after 26 hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7}{56} = \\left(\\dfrac{1}{2}\\right)^{15/c}$",
                  "reason": "Half-life formula and Quotient law: with the amount $b$ at time $0$ and the half-life $c$, the amounts at the times $11$ and $26$ are $b\\left(\\dfrac{1}{2}\\right)^{11/c}$ and $b\\left(\\dfrac{1}{2}\\right)^{26/c}$, and the second divided by the first is $\\left(\\dfrac{1}{2}\\right)^{(26 - 11)/c}$."
                },
                {
                  "step": "$\\dfrac{y}{56} = \\left(\\dfrac{1}{2}\\right)^{10/c}$",
                  "reason": "Half-life formula and Quotient law: with the amount $b$ at time $0$ and the half-life $c$, the amounts at the times $11$ and $21$ are $b\\left(\\dfrac{1}{2}\\right)^{11/c}$ and $b\\left(\\dfrac{1}{2}\\right)^{21/c}$, and the second divided by the first is $\\left(\\dfrac{1}{2}\\right)^{(21 - 11)/c}$; here $y$ stands for the amount left after 21 hours."
                },
                {
                  "step": "$\\left(\\dfrac{1}{2}\\right)^{10/c} = \\left(\\left(\\dfrac{1}{2}\\right)^{15/c}\\right)^{2/3}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents, and $\\dfrac{15}{c} \\cdot \\dfrac{2}{3} = \\dfrac{10}{c}$."
                },
                {
                  "step": "$\\dfrac{y}{56} = \\left(\\dfrac{7}{56}\\right)^{2/3}$",
                  "reason": "Substituting a value: by the first two equations, $\\dfrac{y}{56}$ and $\\dfrac{7}{56}$ are put in place of the two powers of $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\dfrac{y}{56} = \\left(\\dfrac{1}{8}\\right)^{2/3}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{7}{56} = \\dfrac{1}{8}$."
                },
                {
                  "step": "$\\dfrac{y}{56} = \\dfrac{1}{4}$",
                  "reason": "The exponent m/n: $\\left(\\dfrac{1}{8}\\right)^{2/3} = \\left(\\left(\\dfrac{1}{8}\\right)^{1/3}\\right)^{2} = \\left(\\dfrac{1}{2}\\right)^{2}$."
                },
                {
                  "step": "$y = 14$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $56$."
                }
              ]
            },
            {
              "prompt": "Find the amount, in kilograms, of a substance left after 17 years, given that it decays with a fixed half-life and that 320 kilograms are left after 11 years and 180 kilograms after 15 years.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "135",
              "lines": [
                {
                  "step": "Find the amount, in kilograms, of a substance left after 17 years, given that it decays with a fixed half-life and that 320 kilograms are left after 11 years and 180 kilograms after 15 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{180}{320} = \\left(\\dfrac{1}{2}\\right)^{4/c}$",
                  "reason": "Half-life formula and Quotient law: with the amount $b$ at time $0$ and the half-life $c$, the amounts at the times $11$ and $15$ are $b\\left(\\dfrac{1}{2}\\right)^{11/c}$ and $b\\left(\\dfrac{1}{2}\\right)^{15/c}$, and the second divided by the first is $\\left(\\dfrac{1}{2}\\right)^{(15 - 11)/c}$."
                },
                {
                  "step": "$\\dfrac{y}{320} = \\left(\\dfrac{1}{2}\\right)^{6/c}$",
                  "reason": "Half-life formula and Quotient law: with the amount $b$ at time $0$ and the half-life $c$, the amounts at the times $11$ and $17$ are $b\\left(\\dfrac{1}{2}\\right)^{11/c}$ and $b\\left(\\dfrac{1}{2}\\right)^{17/c}$, and the second divided by the first is $\\left(\\dfrac{1}{2}\\right)^{(17 - 11)/c}$; here $y$ stands for the amount left after 17 years."
                },
                {
                  "step": "$\\left(\\dfrac{1}{2}\\right)^{6/c} = \\left(\\left(\\dfrac{1}{2}\\right)^{4/c}\\right)^{3/2}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents, and $\\dfrac{4}{c} \\cdot \\dfrac{3}{2} = \\dfrac{6}{c}$."
                },
                {
                  "step": "$\\dfrac{y}{320} = \\left(\\dfrac{180}{320}\\right)^{3/2}$",
                  "reason": "Substituting a value: by the first two equations, $\\dfrac{y}{320}$ and $\\dfrac{180}{320}$ are put in place of the two powers of $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\dfrac{y}{320} = \\left(\\dfrac{9}{16}\\right)^{3/2}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{180}{320} = \\dfrac{9}{16}$."
                },
                {
                  "step": "$\\dfrac{y}{320} = \\dfrac{27}{64}$",
                  "reason": "The exponent m/n: $\\left(\\dfrac{9}{16}\\right)^{3/2} = \\left(\\left(\\dfrac{9}{16}\\right)^{1/2}\\right)^{3} = \\left(\\dfrac{3}{4}\\right)^{3}$."
                },
                {
                  "step": "$y = 135$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $320$."
                }
              ]
            },
            {
              "prompt": "Find the amount, in grams, of a substance left after 21 minutes, given that it decays with a fixed half-life and that 3125 grams are left after 5 minutes and 1600 grams after 17 minutes.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1280",
              "lines": [
                {
                  "step": "Find the amount, in grams, of a substance left after 21 minutes, given that it decays with a fixed half-life and that 3125 grams are left after 5 minutes and 1600 grams after 17 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1600}{3125} = \\left(\\dfrac{1}{2}\\right)^{12/c}$",
                  "reason": "Half-life formula and Quotient law: with the amount $b$ at time $0$ and the half-life $c$, the amounts at the times $5$ and $17$ are $b\\left(\\dfrac{1}{2}\\right)^{5/c}$ and $b\\left(\\dfrac{1}{2}\\right)^{17/c}$, and the second divided by the first is $\\left(\\dfrac{1}{2}\\right)^{(17 - 5)/c}$."
                },
                {
                  "step": "$\\dfrac{y}{3125} = \\left(\\dfrac{1}{2}\\right)^{16/c}$",
                  "reason": "Half-life formula and Quotient law: with the amount $b$ at time $0$ and the half-life $c$, the amounts at the times $5$ and $21$ are $b\\left(\\dfrac{1}{2}\\right)^{5/c}$ and $b\\left(\\dfrac{1}{2}\\right)^{21/c}$, and the second divided by the first is $\\left(\\dfrac{1}{2}\\right)^{(21 - 5)/c}$; here $y$ stands for the amount left after 21 minutes."
                },
                {
                  "step": "$\\left(\\dfrac{1}{2}\\right)^{16/c} = \\left(\\left(\\dfrac{1}{2}\\right)^{12/c}\\right)^{4/3}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents, and $\\dfrac{12}{c} \\cdot \\dfrac{4}{3} = \\dfrac{16}{c}$."
                },
                {
                  "step": "$\\dfrac{y}{3125} = \\left(\\dfrac{1600}{3125}\\right)^{4/3}$",
                  "reason": "Substituting a value: by the first two equations, $\\dfrac{y}{3125}$ and $\\dfrac{1600}{3125}$ are put in place of the two powers of $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\dfrac{y}{3125} = \\left(\\dfrac{64}{125}\\right)^{4/3}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{1600}{3125} = \\dfrac{64}{125}$."
                },
                {
                  "step": "$\\dfrac{y}{3125} = \\dfrac{256}{625}$",
                  "reason": "The exponent m/n: $\\left(\\dfrac{64}{125}\\right)^{4/3} = \\left(\\left(\\dfrac{64}{125}\\right)^{1/3}\\right)^{4} = \\left(\\dfrac{4}{5}\\right)^{4}$."
                },
                {
                  "step": "$y = 1280$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $3125$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t220-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the time $x$, in days, after which 7 grams are left of 896 grams of a substance with a half-life of 11 days.",
            "lines": [
              {
                "step": "Find the time $x$, in days, after which 7 grams are left of 896 grams of a substance with a half-life of 11 days.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$7 = 896\\left(\\dfrac{1}{2}\\right)^{x/11}$",
                "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
              },
              {
                "step": "$\\dfrac{1}{128} = \\left(\\dfrac{1}{2}\\right)^{x/11}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $896$, and $\\dfrac{7}{896} = \\dfrac{1}{128}$."
              },
              {
                "step": "$2^{-7} = 2^{-x/11}$",
                "reason": "Negative exponent and Power law: $\\dfrac{1}{128} = \\dfrac{1}{2^{7}} = 2^{-7}$, and $\\left(\\dfrac{1}{2}\\right)^{x/11} = \\left(2^{-1}\\right)^{x/11} = 2^{-x/11}$."
              },
              {
                "step": "$-7 = -\\dfrac{x}{11}$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
              },
              {
                "step": "$x = 77$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $-11$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the time $x$, in hours, after which 15 milligrams are left of 240 milligrams of a substance with a half-life of 13 hours.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 52",
              "lines": [
                {
                  "step": "Find the time $x$, in hours, after which 15 milligrams are left of 240 milligrams of a substance with a half-life of 13 hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15 = 240\\left(\\dfrac{1}{2}\\right)^{x/13}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{16} = \\left(\\dfrac{1}{2}\\right)^{x/13}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $240$, and $\\dfrac{15}{240} = \\dfrac{1}{16}$."
                },
                {
                  "step": "$2^{-4} = 2^{-x/13}$",
                  "reason": "Negative exponent and Power law: $\\dfrac{1}{16} = \\dfrac{1}{2^{4}} = 2^{-4}$, and $\\left(\\dfrac{1}{2}\\right)^{x/13} = \\left(2^{-1}\\right)^{x/13} = 2^{-x/13}$."
                },
                {
                  "step": "$-4 = -\\dfrac{x}{13}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$x = 52$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-13$."
                }
              ]
            },
            {
              "prompt": "Find the time $x$, in years, after which 9 kilograms are left of 1152 kilograms of a substance with a half-life of 10 years.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 70",
              "lines": [
                {
                  "step": "Find the time $x$, in years, after which 9 kilograms are left of 1152 kilograms of a substance with a half-life of 10 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9 = 1152\\left(\\dfrac{1}{2}\\right)^{x/10}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{128} = \\left(\\dfrac{1}{2}\\right)^{x/10}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $1152$, and $\\dfrac{9}{1152} = \\dfrac{1}{128}$."
                },
                {
                  "step": "$2^{-7} = 2^{-x/10}$",
                  "reason": "Negative exponent and Power law: $\\dfrac{1}{128} = \\dfrac{1}{2^{7}} = 2^{-7}$, and $\\left(\\dfrac{1}{2}\\right)^{x/10} = \\left(2^{-1}\\right)^{x/10} = 2^{-x/10}$."
                },
                {
                  "step": "$-7 = -\\dfrac{x}{10}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$x = 70$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-10$."
                }
              ]
            },
            {
              "prompt": "Find the time $x$, in minutes, after which 13 grams are left of 832 grams of a substance with a half-life of 15 minutes.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 90",
              "lines": [
                {
                  "step": "Find the time $x$, in minutes, after which 13 grams are left of 832 grams of a substance with a half-life of 15 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$13 = 832\\left(\\dfrac{1}{2}\\right)^{x/15}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{64} = \\left(\\dfrac{1}{2}\\right)^{x/15}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $832$, and $\\dfrac{13}{832} = \\dfrac{1}{64}$."
                },
                {
                  "step": "$2^{-6} = 2^{-x/15}$",
                  "reason": "Negative exponent and Power law: $\\dfrac{1}{64} = \\dfrac{1}{2^{6}} = 2^{-6}$, and $\\left(\\dfrac{1}{2}\\right)^{x/15} = \\left(2^{-1}\\right)^{x/15} = 2^{-x/15}$."
                },
                {
                  "step": "$-6 = -\\dfrac{x}{15}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$x = 90$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-15$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the half-life $c$, in days, of a substance of which 12 grams fall to 3 grams in 23 days.",
            "lines": [
              {
                "step": "Find the half-life $c$, in days, of a substance of which 12 grams fall to 3 grams in 23 days.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3 = 12\\left(\\dfrac{1}{2}\\right)^{23/c}$",
                "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
              },
              {
                "step": "$\\dfrac{1}{4} = \\left(\\dfrac{1}{2}\\right)^{23/c}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$, and $\\dfrac{3}{12} = \\dfrac{1}{4}$."
              },
              {
                "step": "$2^{-2} = 2^{-23/c}$",
                "reason": "Negative exponent and Power law: $\\dfrac{1}{4} = \\dfrac{1}{2^{2}} = 2^{-2}$, and $\\left(\\dfrac{1}{2}\\right)^{23/c} = \\left(2^{-1}\\right)^{23/c} = 2^{-23/c}$."
              },
              {
                "step": "$-2 = -\\dfrac{23}{c}$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
              },
              {
                "step": "$-2c = -23$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $c$."
              },
              {
                "step": "$c = \\dfrac{23}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the half-life $c$, in hours, of a substance of which 52 milligrams fall to 13 milligrams in 25 hours.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 25/2",
              "lines": [
                {
                  "step": "Find the half-life $c$, in hours, of a substance of which 52 milligrams fall to 13 milligrams in 25 hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$13 = 52\\left(\\dfrac{1}{2}\\right)^{25/c}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{4} = \\left(\\dfrac{1}{2}\\right)^{25/c}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $52$, and $\\dfrac{13}{52} = \\dfrac{1}{4}$."
                },
                {
                  "step": "$2^{-2} = 2^{-25/c}$",
                  "reason": "Negative exponent and Power law: $\\dfrac{1}{4} = \\dfrac{1}{2^{2}} = 2^{-2}$, and $\\left(\\dfrac{1}{2}\\right)^{25/c} = \\left(2^{-1}\\right)^{25/c} = 2^{-25/c}$."
                },
                {
                  "step": "$-2 = -\\dfrac{25}{c}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$-2c = -25$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $c$."
                },
                {
                  "step": "$c = \\dfrac{25}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                }
              ]
            },
            {
              "prompt": "Find the half-life $c$, in years, of a substance of which 288 kilograms fall to 18 kilograms in 42 years.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 21/2",
              "lines": [
                {
                  "step": "Find the half-life $c$, in years, of a substance of which 288 kilograms fall to 18 kilograms in 42 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$18 = 288\\left(\\dfrac{1}{2}\\right)^{42/c}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{16} = \\left(\\dfrac{1}{2}\\right)^{42/c}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $288$, and $\\dfrac{18}{288} = \\dfrac{1}{16}$."
                },
                {
                  "step": "$2^{-4} = 2^{-42/c}$",
                  "reason": "Negative exponent and Power law: $\\dfrac{1}{16} = \\dfrac{1}{2^{4}} = 2^{-4}$, and $\\left(\\dfrac{1}{2}\\right)^{42/c} = \\left(2^{-1}\\right)^{42/c} = 2^{-42/c}$."
                },
                {
                  "step": "$-4 = -\\dfrac{42}{c}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$-4c = -42$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $c$."
                },
                {
                  "step": "$c = \\dfrac{21}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                }
              ]
            },
            {
              "prompt": "Find the half-life $c$, in minutes, of a substance of which 96 grams fall to 6 grams in 7 minutes.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 7/4",
              "lines": [
                {
                  "step": "Find the half-life $c$, in minutes, of a substance of which 96 grams fall to 6 grams in 7 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6 = 96\\left(\\dfrac{1}{2}\\right)^{7/c}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{16} = \\left(\\dfrac{1}{2}\\right)^{7/c}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $96$, and $\\dfrac{6}{96} = \\dfrac{1}{16}$."
                },
                {
                  "step": "$2^{-4} = 2^{-7/c}$",
                  "reason": "Negative exponent and Power law: $\\dfrac{1}{16} = \\dfrac{1}{2^{4}} = 2^{-4}$, and $\\left(\\dfrac{1}{2}\\right)^{7/c} = \\left(2^{-1}\\right)^{7/c} = 2^{-7/c}$."
                },
                {
                  "step": "$-4 = -\\dfrac{7}{c}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$-4c = -7$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $c$."
                },
                {
                  "step": "$c = \\dfrac{7}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t220-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the time $x$, in days, after which 2 grams are left of 196 grams of a substance with a half-life of 18 days. Answer in terms of $u$ and $v$, where $u = \\ln{2}$ and $v = \\ln{7}$.",
            "lines": [
              {
                "step": "Find the time $x$, in days, after which 2 grams are left of 196 grams of a substance with a half-life of 18 days. Answer in terms of $u$ and $v$, where $u = \\ln{2}$ and $v = \\ln{7}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2 = 196\\left(\\dfrac{1}{2}\\right)^{x/18}$",
                "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
              },
              {
                "step": "$\\dfrac{1}{98} = \\left(\\dfrac{1}{2}\\right)^{x/18}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $196$, and $\\dfrac{2}{196} = \\dfrac{1}{98}$."
              },
              {
                "step": "$\\ln{\\dfrac{1}{98}} = \\ln{\\left(\\dfrac{1}{2}\\right)^{x/18}}$",
                "reason": "Natural logarithm: both sides are positive, and equal positive numbers have equal natural logarithms."
              },
              {
                "step": "$\\ln{\\dfrac{1}{98}} = \\dfrac{x}{18}\\ln{\\dfrac{1}{2}}$",
                "reason": "Log of a power: the exponent comes down in front of the logarithm."
              },
              {
                "step": "$-\\ln{98} = -\\dfrac{x}{18}\\ln{2}$",
                "reason": "Negative exponent and Log of a power: $\\dfrac{1}{98} = 98^{-1}$ and $\\dfrac{1}{2} = 2^{-1}$, and the exponent $-1$ comes down in front of each logarithm."
              },
              {
                "step": "$\\ln{98} = \\dfrac{x}{18}\\ln{2}$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
              },
              {
                "step": "$\\ln{\\left(2 \\cdot 7^{2}\\right)} = \\dfrac{x}{18}\\ln{2}$",
                "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $98 = 2 \\cdot 7^{2}$."
              },
              {
                "step": "$\\ln{2} + 2\\ln{7} = \\dfrac{x}{18}\\ln{2}$",
                "reason": "Log of a product and Log of a power: the logarithm of a product is the sum of the logarithms of its factors, and an exponent comes down in front of its logarithm."
              },
              {
                "step": "$u + 2v = \\dfrac{x}{18}u$",
                "reason": "Substituting a value: the letters $u$ and $v$ stand for $\\ln{2}$ and $\\ln{7}$."
              },
              {
                "step": "$18(u + 2v) = xu$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $18$."
              },
              {
                "step": "$x = \\dfrac{18(u + 2v)}{u}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $u$, which is not $0$, since $\\ln{2} = 0$ would mean $2 = e^{0} = 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the time $x$, in hours, after which 3 milligrams are left of 54 milligrams of a substance with a half-life of 16 hours. Answer in terms of $u$ and $v$, where $u = \\ln{2}$ and $v = \\ln{3}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 16*(u+2*v)/u",
              "lines": [
                {
                  "step": "Find the time $x$, in hours, after which 3 milligrams are left of 54 milligrams of a substance with a half-life of 16 hours. Answer in terms of $u$ and $v$, where $u = \\ln{2}$ and $v = \\ln{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 = 54\\left(\\dfrac{1}{2}\\right)^{x/16}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{18} = \\left(\\dfrac{1}{2}\\right)^{x/16}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $54$, and $\\dfrac{3}{54} = \\dfrac{1}{18}$."
                },
                {
                  "step": "$\\ln{\\dfrac{1}{18}} = \\ln{\\left(\\dfrac{1}{2}\\right)^{x/16}}$",
                  "reason": "Natural logarithm: both sides are positive, and equal positive numbers have equal natural logarithms."
                },
                {
                  "step": "$\\ln{\\dfrac{1}{18}} = \\dfrac{x}{16}\\ln{\\dfrac{1}{2}}$",
                  "reason": "Log of a power: the exponent comes down in front of the logarithm."
                },
                {
                  "step": "$-\\ln{18} = -\\dfrac{x}{16}\\ln{2}$",
                  "reason": "Negative exponent and Log of a power: $\\dfrac{1}{18} = 18^{-1}$ and $\\dfrac{1}{2} = 2^{-1}$, and the exponent $-1$ comes down in front of each logarithm."
                },
                {
                  "step": "$\\ln{18} = \\dfrac{x}{16}\\ln{2}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\ln{\\left(2 \\cdot 3^{2}\\right)} = \\dfrac{x}{16}\\ln{2}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $18 = 2 \\cdot 3^{2}$."
                },
                {
                  "step": "$\\ln{2} + 2\\ln{3} = \\dfrac{x}{16}\\ln{2}$",
                  "reason": "Log of a product and Log of a power: the logarithm of a product is the sum of the logarithms of its factors, and an exponent comes down in front of its logarithm."
                },
                {
                  "step": "$u + 2v = \\dfrac{x}{16}u$",
                  "reason": "Substituting a value: the letters $u$ and $v$ stand for $\\ln{2}$ and $\\ln{3}$."
                },
                {
                  "step": "$16(u + 2v) = xu$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $16$."
                },
                {
                  "step": "$x = \\dfrac{16(u + 2v)}{u}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $u$, which is not $0$, since $\\ln{2} = 0$ would mean $2 = e^{0} = 1$."
                }
              ]
            },
            {
              "prompt": "Find the half-life $c$, in hours, of a substance of which 160 milligrams fall to 4 milligrams in 30 hours. Answer in terms of $u$ and $v$, where $u = \\ln{2}$ and $v = \\ln{5}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "c = 30*u/(3*u+v)",
              "lines": [
                {
                  "step": "Find the half-life $c$, in hours, of a substance of which 160 milligrams fall to 4 milligrams in 30 hours. Answer in terms of $u$ and $v$, where $u = \\ln{2}$ and $v = \\ln{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4 = 160\\left(\\dfrac{1}{2}\\right)^{30/c}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{40} = \\left(\\dfrac{1}{2}\\right)^{30/c}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $160$, and $\\dfrac{4}{160} = \\dfrac{1}{40}$."
                },
                {
                  "step": "$\\ln{\\dfrac{1}{40}} = \\ln{\\left(\\dfrac{1}{2}\\right)^{30/c}}$",
                  "reason": "Natural logarithm: both sides are positive, and equal positive numbers have equal natural logarithms."
                },
                {
                  "step": "$\\ln{\\dfrac{1}{40}} = \\dfrac{30}{c}\\ln{\\dfrac{1}{2}}$",
                  "reason": "Log of a power: the exponent comes down in front of the logarithm."
                },
                {
                  "step": "$-\\ln{40} = -\\dfrac{30}{c}\\ln{2}$",
                  "reason": "Negative exponent and Log of a power: $\\dfrac{1}{40} = 40^{-1}$ and $\\dfrac{1}{2} = 2^{-1}$, and the exponent $-1$ comes down in front of each logarithm."
                },
                {
                  "step": "$\\ln{40} = \\dfrac{30}{c}\\ln{2}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\ln{\\left(2^{3} \\cdot 5\\right)} = \\dfrac{30}{c}\\ln{2}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $40 = 2^{3} \\cdot 5$."
                },
                {
                  "step": "$3\\ln{2} + \\ln{5} = \\dfrac{30}{c}\\ln{2}$",
                  "reason": "Log of a product and Log of a power: the logarithm of a product is the sum of the logarithms of its factors, and an exponent comes down in front of its logarithm."
                },
                {
                  "step": "$3u + v = \\dfrac{30}{c}u$",
                  "reason": "Substituting a value: the letters $u$ and $v$ stand for $\\ln{2}$ and $\\ln{5}$."
                },
                {
                  "step": "$c(3u + v) = 30u$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $c$."
                },
                {
                  "step": "$c = \\dfrac{30u}{3u + v}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3u + v$, which is $\\ln{40}$ and is not $0$, since $\\ln{40} = 0$ would mean $40 = e^{0} = 1$."
                }
              ]
            },
            {
              "prompt": "Find the time $x$, in minutes, after which 2 grams are left of 200 grams of a substance with a half-life of 2 minutes. Answer in terms of $u$ and $v$, where $u = \\ln{2}$ and $v = \\ln{5}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 2*(2*u+2*v)/u",
              "lines": [
                {
                  "step": "Find the time $x$, in minutes, after which 2 grams are left of 200 grams of a substance with a half-life of 2 minutes. Answer in terms of $u$ and $v$, where $u = \\ln{2}$ and $v = \\ln{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2 = 200\\left(\\dfrac{1}{2}\\right)^{x/2}$",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$."
                },
                {
                  "step": "$\\dfrac{1}{100} = \\left(\\dfrac{1}{2}\\right)^{x/2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $200$, and $\\dfrac{2}{200} = \\dfrac{1}{100}$."
                },
                {
                  "step": "$\\ln{\\dfrac{1}{100}} = \\ln{\\left(\\dfrac{1}{2}\\right)^{x/2}}$",
                  "reason": "Natural logarithm: both sides are positive, and equal positive numbers have equal natural logarithms."
                },
                {
                  "step": "$\\ln{\\dfrac{1}{100}} = \\dfrac{x}{2}\\ln{\\dfrac{1}{2}}$",
                  "reason": "Log of a power: the exponent comes down in front of the logarithm."
                },
                {
                  "step": "$-\\ln{100} = -\\dfrac{x}{2}\\ln{2}$",
                  "reason": "Negative exponent and Log of a power: $\\dfrac{1}{100} = 100^{-1}$ and $\\dfrac{1}{2} = 2^{-1}$, and the exponent $-1$ comes down in front of each logarithm."
                },
                {
                  "step": "$\\ln{100} = \\dfrac{x}{2}\\ln{2}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
                },
                {
                  "step": "$\\ln{\\left(2^{2} \\cdot 5^{2}\\right)} = \\dfrac{x}{2}\\ln{2}$",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $100 = 2^{2} \\cdot 5^{2}$."
                },
                {
                  "step": "$2\\ln{2} + 2\\ln{5} = \\dfrac{x}{2}\\ln{2}$",
                  "reason": "Log of a product and Log of a power: the logarithm of a product is the sum of the logarithms of its factors, and an exponent comes down in front of its logarithm."
                },
                {
                  "step": "$2u + 2v = \\dfrac{x}{2}u$",
                  "reason": "Substituting a value: the letters $u$ and $v$ stand for $\\ln{2}$ and $\\ln{5}$."
                },
                {
                  "step": "$2(2u + 2v) = xu$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                },
                {
                  "step": "$x = \\dfrac{2(2u + 2v)}{u}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $u$, which is not $0$, since $\\ln{2} = 0$ would mean $2 = e^{0} = 1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t220-k5",
      "forms": [
        {
          "example": {
            "problem": "Write $y = 45\\left(\\dfrac{1}{2}\\right)^{x/5}$ with the base $e$ in place of the base $\\dfrac{1}{2}$, with $y$ alone on the left and in terms of $u$, where $u = \\ln{2}$.",
            "lines": [
              {
                "step": "Write $y = 45\\left(\\dfrac{1}{2}\\right)^{x/5}$ with the base $e$ in place of the base $\\dfrac{1}{2}$, with $y$ alone on the left and in terms of $u$, where $u = \\ln{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 45\\left(e^{\\ln{\\dfrac{1}{2}}}\\right)^{x/5}$",
                "reason": "Natural logarithm: $e^{\\ln b} = b$ for every positive number $b$, here with $b = \\dfrac{1}{2}$."
              },
              {
                "step": "$y = 45\\left(e^{\\ln{2^{-1}}}\\right)^{x/5}$",
                "reason": "Negative exponent: $\\dfrac{1}{2} = 2^{-1}$."
              },
              {
                "step": "$y = 45\\left(e^{-\\ln{2}}\\right)^{x/5}$",
                "reason": "Log of a power: the exponent $-1$ comes down in front of the logarithm."
              },
              {
                "step": "$y = 45\\left(e^{-u}\\right)^{x/5}$",
                "reason": "Substituting a value: the letter $u$ stands for $\\ln{2}$."
              },
              {
                "step": "$y = 45e^{-ux/5}$",
                "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents, and $-u \\cdot \\dfrac{x}{5} = -\\dfrac{ux}{5}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $y = 17\\left(\\dfrac{1}{2}\\right)^{x/5}$ with the base $e$ in place of the base $\\dfrac{1}{2}$, with $y$ alone on the left and in terms of $u$, where $u = \\ln{2}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 17*e^(-u*x/5)",
              "lines": [
                {
                  "step": "Write $y = 17\\left(\\dfrac{1}{2}\\right)^{x/5}$ with the base $e$ in place of the base $\\dfrac{1}{2}$, with $y$ alone on the left and in terms of $u$, where $u = \\ln{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 17\\left(e^{\\ln{\\dfrac{1}{2}}}\\right)^{x/5}$",
                  "reason": "Natural logarithm: $e^{\\ln b} = b$ for every positive number $b$, here with $b = \\dfrac{1}{2}$."
                },
                {
                  "step": "$y = 17\\left(e^{\\ln{2^{-1}}}\\right)^{x/5}$",
                  "reason": "Negative exponent: $\\dfrac{1}{2} = 2^{-1}$."
                },
                {
                  "step": "$y = 17\\left(e^{-\\ln{2}}\\right)^{x/5}$",
                  "reason": "Log of a power: the exponent $-1$ comes down in front of the logarithm."
                },
                {
                  "step": "$y = 17\\left(e^{-u}\\right)^{x/5}$",
                  "reason": "Substituting a value: the letter $u$ stands for $\\ln{2}$."
                },
                {
                  "step": "$y = 17e^{-ux/5}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents, and $-u \\cdot \\dfrac{x}{5} = -\\dfrac{ux}{5}$."
                }
              ]
            },
            {
              "prompt": "Write $y = 64\\left(\\dfrac{1}{2}\\right)^{x/4}$ with the base $e$ in place of the base $\\dfrac{1}{2}$, with $y$ alone on the left and in terms of $u$, where $u = \\ln{2}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 64*e^(-u*x/4)",
              "lines": [
                {
                  "step": "Write $y = 64\\left(\\dfrac{1}{2}\\right)^{x/4}$ with the base $e$ in place of the base $\\dfrac{1}{2}$, with $y$ alone on the left and in terms of $u$, where $u = \\ln{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 64\\left(e^{\\ln{\\dfrac{1}{2}}}\\right)^{x/4}$",
                  "reason": "Natural logarithm: $e^{\\ln b} = b$ for every positive number $b$, here with $b = \\dfrac{1}{2}$."
                },
                {
                  "step": "$y = 64\\left(e^{\\ln{2^{-1}}}\\right)^{x/4}$",
                  "reason": "Negative exponent: $\\dfrac{1}{2} = 2^{-1}$."
                },
                {
                  "step": "$y = 64\\left(e^{-\\ln{2}}\\right)^{x/4}$",
                  "reason": "Log of a power: the exponent $-1$ comes down in front of the logarithm."
                },
                {
                  "step": "$y = 64\\left(e^{-u}\\right)^{x/4}$",
                  "reason": "Substituting a value: the letter $u$ stands for $\\ln{2}$."
                },
                {
                  "step": "$y = 64e^{-ux/4}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents, and $-u \\cdot \\dfrac{x}{4} = -\\dfrac{ux}{4}$."
                }
              ]
            },
            {
              "prompt": "Write $y = 41\\left(\\dfrac{1}{2}\\right)^{x/10}$ with the base $e$ in place of the base $\\dfrac{1}{2}$, with $y$ alone on the left and in terms of $u$, where $u = \\ln{2}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 41*e^(-u*x/10)",
              "lines": [
                {
                  "step": "Write $y = 41\\left(\\dfrac{1}{2}\\right)^{x/10}$ with the base $e$ in place of the base $\\dfrac{1}{2}$, with $y$ alone on the left and in terms of $u$, where $u = \\ln{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 41\\left(e^{\\ln{\\dfrac{1}{2}}}\\right)^{x/10}$",
                  "reason": "Natural logarithm: $e^{\\ln b} = b$ for every positive number $b$, here with $b = \\dfrac{1}{2}$."
                },
                {
                  "step": "$y = 41\\left(e^{\\ln{2^{-1}}}\\right)^{x/10}$",
                  "reason": "Negative exponent: $\\dfrac{1}{2} = 2^{-1}$."
                },
                {
                  "step": "$y = 41\\left(e^{-\\ln{2}}\\right)^{x/10}$",
                  "reason": "Log of a power: the exponent $-1$ comes down in front of the logarithm."
                },
                {
                  "step": "$y = 41\\left(e^{-u}\\right)^{x/10}$",
                  "reason": "Substituting a value: the letter $u$ stands for $\\ln{2}$."
                },
                {
                  "step": "$y = 41e^{-ux/10}$",
                  "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents, and $-u \\cdot \\dfrac{x}{10} = -\\dfrac{ux}{10}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the half-life $c$, in days, of an amount that is $70e^{-3x/2}$ grams after $x$ days. Answer in terms of $u$, where $u = \\ln{2}$.",
            "lines": [
              {
                "step": "Find the half-life $c$, in days, of an amount that is $70e^{-3x/2}$ grams after $x$ days. Answer in terms of $u$, where $u = \\ln{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$70e^{-3c/2} = 35$",
                "reason": "Half-life formula: the half-life $c$ is the time over which the amount is halved; at time $0$ the amount is $70e^{0} = 70$, and half of it is $35$."
              },
              {
                "step": "$e^{-3c/2} = \\dfrac{1}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $70$."
              },
              {
                "step": "$-\\dfrac{3c}{2} = \\ln{\\dfrac{1}{2}}$",
                "reason": "Natural logarithm: $e^p = b$ means $p = \\ln b$, here with the exponent $-\\dfrac{3c}{2}$ as $p$."
              },
              {
                "step": "$-\\dfrac{3c}{2} = -\\ln{2}$",
                "reason": "Negative exponent and Log of a power: $\\dfrac{1}{2} = 2^{-1}$, and the exponent $-1$ comes down in front of the logarithm."
              },
              {
                "step": "$-\\dfrac{3c}{2} = -u$",
                "reason": "Substituting a value: the letter $u$ stands for $\\ln{2}$."
              },
              {
                "step": "$c = \\dfrac{2u}{3}$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $-\\dfrac{2}{3}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the half-life $c$, in hours, of an amount that is $32e^{-7x/2}$ milligrams after $x$ hours. Answer in terms of $u$, where $u = \\ln{2}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "c = 2*u/7",
              "lines": [
                {
                  "step": "Find the half-life $c$, in hours, of an amount that is $32e^{-7x/2}$ milligrams after $x$ hours. Answer in terms of $u$, where $u = \\ln{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$32e^{-7c/2} = 16$",
                  "reason": "Half-life formula: the half-life $c$ is the time over which the amount is halved; at time $0$ the amount is $32e^{0} = 32$, and half of it is $16$."
                },
                {
                  "step": "$e^{-7c/2} = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $32$."
                },
                {
                  "step": "$-\\dfrac{7c}{2} = \\ln{\\dfrac{1}{2}}$",
                  "reason": "Natural logarithm: $e^p = b$ means $p = \\ln b$, here with the exponent $-\\dfrac{7c}{2}$ as $p$."
                },
                {
                  "step": "$-\\dfrac{7c}{2} = -\\ln{2}$",
                  "reason": "Negative exponent and Log of a power: $\\dfrac{1}{2} = 2^{-1}$, and the exponent $-1$ comes down in front of the logarithm."
                },
                {
                  "step": "$-\\dfrac{7c}{2} = -u$",
                  "reason": "Substituting a value: the letter $u$ stands for $\\ln{2}$."
                },
                {
                  "step": "$c = \\dfrac{2u}{7}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-\\dfrac{2}{7}$."
                }
              ]
            },
            {
              "prompt": "Find the half-life $c$, in years, of an amount that is $34e^{-2x/7}$ kilograms after $x$ years. Answer in terms of $u$, where $u = \\ln{2}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "c = 7*u/2",
              "lines": [
                {
                  "step": "Find the half-life $c$, in years, of an amount that is $34e^{-2x/7}$ kilograms after $x$ years. Answer in terms of $u$, where $u = \\ln{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$34e^{-2c/7} = 17$",
                  "reason": "Half-life formula: the half-life $c$ is the time over which the amount is halved; at time $0$ the amount is $34e^{0} = 34$, and half of it is $17$."
                },
                {
                  "step": "$e^{-2c/7} = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $34$."
                },
                {
                  "step": "$-\\dfrac{2c}{7} = \\ln{\\dfrac{1}{2}}$",
                  "reason": "Natural logarithm: $e^p = b$ means $p = \\ln b$, here with the exponent $-\\dfrac{2c}{7}$ as $p$."
                },
                {
                  "step": "$-\\dfrac{2c}{7} = -\\ln{2}$",
                  "reason": "Negative exponent and Log of a power: $\\dfrac{1}{2} = 2^{-1}$, and the exponent $-1$ comes down in front of the logarithm."
                },
                {
                  "step": "$-\\dfrac{2c}{7} = -u$",
                  "reason": "Substituting a value: the letter $u$ stands for $\\ln{2}$."
                },
                {
                  "step": "$c = \\dfrac{7u}{2}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-\\dfrac{7}{2}$."
                }
              ]
            },
            {
              "prompt": "Find the half-life $c$, in minutes, of an amount that is $28e^{-6x/5}$ grams after $x$ minutes. Answer in terms of $u$, where $u = \\ln{2}$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "c = 5*u/6",
              "lines": [
                {
                  "step": "Find the half-life $c$, in minutes, of an amount that is $28e^{-6x/5}$ grams after $x$ minutes. Answer in terms of $u$, where $u = \\ln{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$28e^{-6c/5} = 14$",
                  "reason": "Half-life formula: the half-life $c$ is the time over which the amount is halved; at time $0$ the amount is $28e^{0} = 28$, and half of it is $14$."
                },
                {
                  "step": "$e^{-6c/5} = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $28$."
                },
                {
                  "step": "$-\\dfrac{6c}{5} = \\ln{\\dfrac{1}{2}}$",
                  "reason": "Natural logarithm: $e^p = b$ means $p = \\ln b$, here with the exponent $-\\dfrac{6c}{5}$ as $p$."
                },
                {
                  "step": "$-\\dfrac{6c}{5} = -\\ln{2}$",
                  "reason": "Negative exponent and Log of a power: $\\dfrac{1}{2} = 2^{-1}$, and the exponent $-1$ comes down in front of the logarithm."
                },
                {
                  "step": "$-\\dfrac{6c}{5} = -u$",
                  "reason": "Substituting a value: the letter $u$ stands for $\\ln{2}$."
                },
                {
                  "step": "$c = \\dfrac{5u}{6}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-\\dfrac{5}{6}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t220-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the time $x$, in days, after which 6 grams are left of 288 grams of a substance with a half-life of 19 days, where $u = \\ln{2}$ and $v = \\ln{3}$, and write that line right.",
            "given": [
              "$288\\left(\\dfrac{1}{2}\\right)^{x/19} = 6$",
              "$\\left(\\dfrac{1}{2}\\right)^{x/19} = \\dfrac{6}{288} = \\dfrac{1}{48}$",
              "$\\ln{\\left(\\dfrac{1}{2}\\right)^{x/19}} = \\dfrac{x}{19}\\ln{\\dfrac{1}{2}} = \\ln{\\dfrac{1}{48}}$",
              "$\\dfrac{x}{19}u = -(4u + v)$",
              "$xu = -19(4u + v)$",
              "$x = -\\dfrac{19(4u + v)}{u}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the time $x$, in days, after which 6 grams are left of 288 grams of a substance with a half-life of 19 days, where $u = \\ln{2}$ and $v = \\ln{3}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 writes $\\ln{\\dfrac{1}{2}}$ as $u$, and $\\ln{\\dfrac{1}{2}}$ is $-\\ln{2}$, which is $-u$.",
                "reason": "A sign lost: the minus sign of $\\ln{\\dfrac{1}{2}} = -\\ln{2}$ is dropped on the left side."
              },
              {
                "step": "Line 4 written right is $-\\dfrac{x}{19}u = -(4u + v)$.",
                "reason": "Negative exponent and Log of a power: $\\ln{\\dfrac{1}{2}} = \\ln{2^{-1}} = -u$, and in the same way $\\ln{\\dfrac{1}{48}} = -\\ln{48}$, which is $-(4u + v)$ since $48 = 2^{4} \\cdot 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the half-life $c$, in hours, of a substance of which 84 milligrams fall to 3 milligrams in 8 hours, where $u = \\ln{2}$ and $v = \\ln{7}$, and write that line right.",
              "given": [
                "$84\\left(\\dfrac{1}{2}\\right)^{8/c} = 3$",
                "$\\left(\\dfrac{1}{2}\\right)^{8/c} = \\dfrac{3}{84} = \\dfrac{1}{28}$",
                "$\\dfrac{8}{c}\\ln{\\dfrac{1}{2}} = \\ln{\\dfrac{1}{28}}$",
                "$-\\dfrac{8}{c}u = -(2u + v)$",
                "$8u = -c(2u + v)$",
                "$c = -\\dfrac{8u}{2u + v}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 8*u = c*(2*u+v)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the half-life $c$, in hours, of a substance of which 84 milligrams fall to 3 milligrams in 8 hours, where $u = \\ln{2}$ and $v = \\ln{7}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 multiplies both sides of line 4 by $-c$ and keeps a minus sign on the right.",
                  "reason": "A sign lost: $-(2u + v)$ times $-c$ is $c(2u + v)$, since the product of two negative numbers is positive."
                },
                {
                  "step": "Line 5 written right is $8u = c(2u + v)$.",
                  "reason": "Multiplying both sides by the same number: both sides of line 4 are multiplied by $-c$, and each side becomes positive."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the time $x$, in years, after which 7 kilograms are left of 126 kilograms of a substance with a half-life of 17 years, where $u = \\ln{2}$ and $v = \\ln{3}$, and write that line right.",
              "given": [
                "$126\\left(\\dfrac{1}{2}\\right)^{x/17} = 7$",
                "$\\left(\\dfrac{1}{2}\\right)^{x/17} = \\dfrac{1}{18}$",
                "$\\ln{\\left(\\dfrac{1}{2}\\right)^{x/17}} = \\dfrac{x}{17}\\ln{\\dfrac{1}{2}} = \\ln{\\dfrac{1}{18}}$",
                "$-\\dfrac{x}{17}u = u + 2v$",
                "$xu = -17(u + 2v)$",
                "$x = -\\dfrac{17(u + 2v)}{u}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -x*u/17 = -(u+2*v)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the time $x$, in years, after which 7 kilograms are left of 126 kilograms of a substance with a half-life of 17 years, where $u = \\ln{2}$ and $v = \\ln{3}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $\\ln{\\dfrac{1}{18}}$ as $u + 2v$, and $\\ln{\\dfrac{1}{18}}$ is $-\\ln{18}$, which is $-(u + 2v)$.",
                  "reason": "A sign lost: the minus sign of $\\ln{\\dfrac{1}{18}} = -\\ln{18}$ is dropped on the right side."
                },
                {
                  "step": "Line 4 written right is $-\\dfrac{x}{17}u = -(u + 2v)$.",
                  "reason": "Negative exponent and Log of a power: $\\ln{\\dfrac{1}{2}} = \\ln{2^{-1}} = -u$, and in the same way $\\ln{\\dfrac{1}{18}} = -\\ln{18}$, which is $-(u + 2v)$ since $18 = 2 \\cdot 3^{2}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the time $x$, in minutes, after which 9 grams are left of 504 grams of a substance with a half-life of 13 minutes, where $u = \\ln{2}$ and $v = \\ln{7}$, and write that line right.",
              "given": [
                "$504\\left(\\dfrac{1}{2}\\right)^{x/13} = 9$",
                "$\\left(\\dfrac{1}{2}\\right)^{x/13} = \\dfrac{9}{504} = \\dfrac{1}{56}$",
                "$\\ln{\\left(\\dfrac{1}{2}\\right)^{x/13}} = \\dfrac{x}{13}\\ln{\\dfrac{1}{2}} = \\ln{\\dfrac{1}{56}}$",
                "$\\dfrac{x}{13}u = -(3u + v)$",
                "$xu = -13(3u + v)$",
                "$x = -\\dfrac{13(3u + v)}{u}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -x*u/13 = -(3*u+v)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the time $x$, in minutes, after which 9 grams are left of 504 grams of a substance with a half-life of 13 minutes, where $u = \\ln{2}$ and $v = \\ln{7}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $\\ln{\\dfrac{1}{2}}$ as $u$, and $\\ln{\\dfrac{1}{2}}$ is $-\\ln{2}$, which is $-u$.",
                  "reason": "A sign lost: the minus sign of $\\ln{\\dfrac{1}{2}} = -\\ln{2}$ is dropped on the left side."
                },
                {
                  "step": "Line 4 written right is $-\\dfrac{x}{13}u = -(3u + v)$.",
                  "reason": "Negative exponent and Log of a power: $\\ln{\\dfrac{1}{2}} = \\ln{2^{-1}} = -u$, and in the same way $\\ln{\\dfrac{1}{56}} = -\\ln{56}$, which is $-(3u + v)$ since $56 = 2^{3} \\cdot 7$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the half-life $c$, in days, of a substance of which 240 grams fall to 3 grams in 4 days, where $u = \\ln{2}$ and $v = \\ln{5}$, and write that line right.",
            "given": [
              "$240\\left(\\dfrac{1}{2}\\right)^{4/c} = 3$",
              "$240\\left(\\dfrac{1}{2}\\right)^{4/c} = \\dfrac{3}{240} = \\dfrac{1}{80}$",
              "$\\dfrac{4}{c}\\ln{\\dfrac{1}{2}} = \\ln{\\dfrac{1}{80}}$",
              "$-\\dfrac{4}{c}u = -(4u + v)$",
              "$4u = c(4u + v) = 4cu + cv$",
              "$c = \\dfrac{4u}{4u + v}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the half-life $c$, in days, of a substance of which 240 grams fall to 3 grams in 4 days, where $u = \\ln{2}$ and $v = \\ln{5}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 divides the right side of line 1 by $240$ and leaves the left side as it is, so it states $240\\left(\\dfrac{1}{2}\\right)^{4/c} = \\dfrac{1}{80}$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side is $3$."
              },
              {
                "step": "Line 2 written right is $\\left(\\dfrac{1}{2}\\right)^{4/c} = \\dfrac{1}{80}$.",
                "reason": "Dividing both sides by a nonzero number: both sides of line 1 are divided by $240$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the half-life $c$, in hours, of a substance of which 120 milligrams fall to 6 milligrams in 16 hours, where $u = \\ln{2}$ and $v = \\ln{5}$, and write that line right.",
              "given": [
                "$120\\left(\\dfrac{1}{2}\\right)^{16/c} = 6$",
                "$\\left(\\dfrac{1}{2}\\right)^{16/c} = \\dfrac{6}{120} = \\dfrac{1}{20}$",
                "$\\ln{\\left(\\dfrac{1}{2}\\right)^{16/c}} = \\dfrac{16}{c}\\ln{\\dfrac{1}{2}} = \\ln{\\dfrac{1}{20}}$",
                "$-\\dfrac{16}{c}u = -(2u + v)$",
                "$-\\dfrac{16}{c}u = -(2u + v) \\cdot (-c) = c(2u + v)$",
                "$c = \\dfrac{16u}{2u + v}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 16*u = c*(2*u+v)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the half-life $c$, in hours, of a substance of which 120 milligrams fall to 6 milligrams in 16 hours, where $u = \\ln{2}$ and $v = \\ln{5}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 multiplies the right side of line 4 by $-c$ and leaves the left side as it is, so it states $-\\dfrac{16}{c}u = c(2u + v)$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 4 the left side is $-(2u + v)$."
                },
                {
                  "step": "Line 5 written right is $16u = c(2u + v)$.",
                  "reason": "Multiplying both sides by the same number: both sides of line 4 are multiplied by $-c$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the half-life $c$, in years, of a substance of which 264 kilograms fall to 11 kilograms in 11 years, where $u = \\ln{2}$ and $v = \\ln{3}$, and write that line right.",
              "given": [
                "$264\\left(\\dfrac{1}{2}\\right)^{11/c} = 11$",
                "$264\\left(\\dfrac{1}{2}\\right)^{11/c} = \\dfrac{11}{264} = \\dfrac{1}{24}$",
                "$\\dfrac{11}{c}\\ln{\\dfrac{1}{2}} = \\ln{\\dfrac{1}{24}}$",
                "$-\\dfrac{11}{c}u = -(3u + v)$",
                "$11u = c(3u + v) = 3cu + cv$",
                "$c = \\dfrac{11u}{3u + v}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (1/2)^(11/c) = 1/24",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the half-life $c$, in years, of a substance of which 264 kilograms fall to 11 kilograms in 11 years, where $u = \\ln{2}$ and $v = \\ln{3}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 divides the right side of line 1 by $264$ and leaves the left side as it is, so it states $264\\left(\\dfrac{1}{2}\\right)^{11/c} = \\dfrac{1}{24}$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side is $11$."
                },
                {
                  "step": "Line 2 written right is $\\left(\\dfrac{1}{2}\\right)^{11/c} = \\dfrac{1}{24}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 1 are divided by $264$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the time $x$, in minutes, after which 3 grams are left of 750 grams of a substance with a half-life of 21 minutes, where $u = \\ln{2}$ and $v = \\ln{5}$, and write that line right.",
              "given": [
                "$750\\left(\\dfrac{1}{2}\\right)^{x/21} = 3$",
                "$\\left(\\dfrac{1}{2}\\right)^{x/21} = \\dfrac{1}{250}$",
                "$\\ln{\\left(\\dfrac{1}{2}\\right)^{x/21}} = \\dfrac{x}{21}\\ln{\\dfrac{1}{2}} = \\ln{\\dfrac{1}{250}}$",
                "$-\\dfrac{x}{21}u = -(u + 3v)$",
                "$-\\dfrac{x}{21}u = -(u + 3v) \\cdot (-21) = 21(u + 3v)$",
                "$x = \\dfrac{21(u + 3v)}{u}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x*u = 21*(u+3*v)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the time $x$, in minutes, after which 3 grams are left of 750 grams of a substance with a half-life of 21 minutes, where $u = \\ln{2}$ and $v = \\ln{5}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 multiplies the right side of line 4 by $-21$ and leaves the left side as it is, so it states $-\\dfrac{x}{21}u = 21(u + 3v)$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 4 the left side is $-(u + 3v)$."
                },
                {
                  "step": "Line 5 written right is $xu = 21(u + 3v)$.",
                  "reason": "Multiplying both sides by the same number: both sides of line 4 are multiplied by $-21$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t220-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: The number $y$ is the amount, in grams, left after $x$ days of 260 grams of a substance with a half-life of 19 days.",
            "lines": [
              {
                "step": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: The number $y$ is the amount, in grams, left after $x$ days of 260 grams of a substance with a half-life of 19 days.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The amount left after $x$ days is $260\\left(\\dfrac{1}{2}\\right)^{x/19}$ grams.",
                "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, here with $b = 260$ and $c = 19$."
              },
              {
                "step": "$y = 260\\left(\\dfrac{1}{2}\\right)^{x/19}$",
                "reason": "Writing a sentence as an equation: the sentence says that $y$ is the amount left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: A substance has a half-life of 15 hours, and of 325 milligrams of it, $y$ milligrams are left after $x$ hours.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 325*(1/2)^(x/15)",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: A substance has a half-life of 15 hours, and of 325 milligrams of it, $y$ milligrams are left after $x$ hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The amount left after $x$ hours is $325\\left(\\dfrac{1}{2}\\right)^{x/15}$ milligrams.",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, here with $b = 325$ and $c = 15$."
                },
                {
                  "step": "$y = 325\\left(\\dfrac{1}{2}\\right)^{x/15}$",
                  "reason": "Writing a sentence as an equation: the sentence says that $y$ is the amount left."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: After $x$ years, $y$ kilograms remain of a sample of 295 kilograms that is halved over every 18 years.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 295*(1/2)^(x/18)",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: After $x$ years, $y$ kilograms remain of a sample of 295 kilograms that is halved over every 18 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The amount left after $x$ years is $295\\left(\\dfrac{1}{2}\\right)^{x/18}$ kilograms.",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, here with $b = 295$ and $c = 18$."
                },
                {
                  "step": "$y = 295\\left(\\dfrac{1}{2}\\right)^{x/18}$",
                  "reason": "Writing a sentence as an equation: the sentence says that $y$ is the amount left."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: The number $y$ is the amount, in grams, left after $x$ minutes of 375 grams of a substance with a half-life of 10 minutes.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 375*(1/2)^(x/10)",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: The number $y$ is the amount, in grams, left after $x$ minutes of 375 grams of a substance with a half-life of 10 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The amount left after $x$ minutes is $375\\left(\\dfrac{1}{2}\\right)^{x/10}$ grams.",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, here with $b = 375$ and $c = 10$."
                },
                {
                  "step": "$y = 375\\left(\\dfrac{1}{2}\\right)^{x/10}$",
                  "reason": "Writing a sentence as an equation: the sentence says that $y$ is the amount left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: The number $y$ is the amount, in grams, that has decayed after $x$ days out of 320 grams of a substance with a half-life of 9 days.",
            "lines": [
              {
                "step": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: The number $y$ is the amount, in grams, that has decayed after $x$ days out of 320 grams of a substance with a half-life of 9 days.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The amount left after $x$ days is $320\\left(\\dfrac{1}{2}\\right)^{x/9}$ grams.",
                "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, here with $b = 320$ and $c = 9$."
              },
              {
                "step": "The amount that has decayed is $320$ less the amount left.",
                "reason": "Answering the question asked: the sentence names the amount that is gone, and not the amount left."
              },
              {
                "step": "$y = 320 - 320\\left(\\dfrac{1}{2}\\right)^{x/9}$",
                "reason": "Writing a sentence as an equation: the sentence says that $y$ is the starting amount less the amount left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: A substance has a half-life of 27 hours, and of 200 milligrams of it, $y$ milligrams have decayed after $x$ hours.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 200-200*(1/2)^(x/27)",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: A substance has a half-life of 27 hours, and of 200 milligrams of it, $y$ milligrams have decayed after $x$ hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The amount left after $x$ hours is $200\\left(\\dfrac{1}{2}\\right)^{x/27}$ milligrams.",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, here with $b = 200$ and $c = 27$."
                },
                {
                  "step": "The amount that has decayed is $200$ less the amount left.",
                  "reason": "Answering the question asked: the sentence names the amount that is gone, and not the amount left."
                },
                {
                  "step": "$y = 200 - 200\\left(\\dfrac{1}{2}\\right)^{x/27}$",
                  "reason": "Writing a sentence as an equation: the sentence says that $y$ is the starting amount less the amount left."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: After $x$ years, $y$ kilograms are gone from a sample of 825 kilograms that is halved over every 24 years.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 825-825*(1/2)^(x/24)",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: After $x$ years, $y$ kilograms are gone from a sample of 825 kilograms that is halved over every 24 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The amount left after $x$ years is $825\\left(\\dfrac{1}{2}\\right)^{x/24}$ kilograms.",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, here with $b = 825$ and $c = 24$."
                },
                {
                  "step": "The amount that has decayed is $825$ less the amount left.",
                  "reason": "Answering the question asked: the sentence names the amount that is gone, and not the amount left."
                },
                {
                  "step": "$y = 825 - 825\\left(\\dfrac{1}{2}\\right)^{x/24}$",
                  "reason": "Writing a sentence as an equation: the sentence says that $y$ is the starting amount less the amount left."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: The number $y$ is the amount, in grams, that has decayed after $x$ minutes out of 350 grams of a substance with a half-life of 12 minutes.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 350-350*(1/2)^(x/12)",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left and the power of $\\dfrac{1}{2}$ left as it is, for this sentence: The number $y$ is the amount, in grams, that has decayed after $x$ minutes out of 350 grams of a substance with a half-life of 12 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The amount left after $x$ minutes is $350\\left(\\dfrac{1}{2}\\right)^{x/12}$ grams.",
                  "reason": "Half-life formula: an amount that is $b$ at time $0$ and has half-life $c$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$ at time $x$, here with $b = 350$ and $c = 12$."
                },
                {
                  "step": "The amount that has decayed is $350$ less the amount left.",
                  "reason": "Answering the question asked: the sentence names the amount that is gone, and not the amount left."
                },
                {
                  "step": "$y = 350 - 350\\left(\\dfrac{1}{2}\\right)^{x/12}$",
                  "reason": "Writing a sentence as an equation: the sentence says that $y$ is the starting amount less the amount left."
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
      "id": "t220-p1",
      "method": "direct proof",
      "statement": "Let $b$ and $c$ be positive numbers, and let an amount be $b$ at time $0$ and be halved over every stretch of time of length $c$. Then for every whole number $n$ from $1$ up, the amount at the time $x = nc$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$.",
      "idea": "Cut the time from $0$ to $x$ into stretches of length $c$. Each stretch halves the amount, so the amount is multiplied by $\\dfrac{1}{2}$ once for each stretch, and the number of stretches is $\\dfrac{x}{c}$.",
      "lines": [
        {
          "line": "The time from $0$ to $nc$ is made of $n$ stretches of length $c$, one after another.",
          "reason": "Multiplication as repeated addition, from arithmetic: $nc$ is $c$ added $n$ times."
        },
        {
          "line": "Over each of these stretches the amount is multiplied by $\\dfrac{1}{2}$.",
          "reason": "The hypothesis: the amount is halved over every stretch of length $c$."
        },
        {
          "line": "So the amount at the time $nc$ is $b$ times $n$ factors $\\dfrac{1}{2}$.",
          "reason": "The hypothesis: the amount is $b$ at time $0$, and lines 1 and 2 multiply it by $\\dfrac{1}{2}$ once for each stretch."
        },
        {
          "line": "So the amount at the time $nc$ is $b\\left(\\dfrac{1}{2}\\right)^{n}$.",
          "reason": "The definition of a power, from arithmetic: a product of $n$ equal factors is their $n$th power."
        },
        {
          "line": "Since $x = nc$, $n = \\dfrac{x}{c}$.",
          "reason": "Dividing both sides by a nonzero number: $c$ is positive, so it is not $0$."
        },
        {
          "line": "Therefore the amount at the time $x = nc$ is $b\\left(\\dfrac{1}{2}\\right)^{x/c}$.",
          "reason": "Substituting a value: by line 5, $\\dfrac{x}{c}$ is put in place of $n$ in line 4."
        }
      ]
    },
    {
      "id": "t220-p2",
      "method": "direct proof",
      "statement": "Let $b$ and $c$ be positive numbers and $x$ a real number, and let $a = \\dfrac{\\ln 2}{c}$. Then $b\\left(\\dfrac{1}{2}\\right)^{x/c} = be^{-ax}$.",
      "idea": "Write $\\dfrac{1}{2}$ as a power of $e$: its exponent is $\\ln \\dfrac{1}{2}$, which is $-\\ln 2$. The power law then multiplies this exponent by $\\dfrac{x}{c}$.",
      "lines": [
        {
          "line": "The number $\\dfrac{1}{2}$ is $e^{\\ln \\frac{1}{2}}$.",
          "reason": "Natural logarithm: $e^{\\ln b} = b$ for every positive number $b$."
        },
        {
          "line": "Also $\\ln \\dfrac{1}{2} = \\ln 1 - \\ln 2$.",
          "reason": "Log of a quotient, with the base $e$."
        },
        {
          "line": "Also $e^0 = 1$.",
          "reason": "Zero exponent: $a^0 = 1$ for every number $a$ other than $0$."
        },
        {
          "line": "So $\\ln 1 = 0$.",
          "reason": "Natural logarithm: $\\ln b = p$ means $e^p = b$, and line 3 is this with $b = 1$ and $p = 0$."
        },
        {
          "line": "So $\\ln \\dfrac{1}{2} = -\\ln 2$.",
          "reason": "Substituting a value: line 4 is put in line 2."
        },
        {
          "line": "So $\\dfrac{1}{2} = e^{-\\ln 2}$.",
          "reason": "Substituting a value: line 5 is put in line 1."
        },
        {
          "line": "So $\\left(\\dfrac{1}{2}\\right)^{x/c} = \\left(e^{-\\ln 2}\\right)^{x/c}$.",
          "reason": "Raising both sides to a power: both sides of line 6 are raised to the power $\\dfrac{x}{c}$."
        },
        {
          "line": "Also $\\left(e^{-\\ln 2}\\right)^{x/c} = e^{-\\ln 2 \\cdot \\frac{x}{c}}$.",
          "reason": "Power law: $(a^m)^n = a^{mn}$ multiplies the exponents."
        },
        {
          "line": "Also $-\\ln 2 \\cdot \\dfrac{x}{c} = -\\dfrac{\\ln 2}{c} \\cdot x$.",
          "reason": "The product formula, from arithmetic: each side is $-\\dfrac{x\\ln 2}{c}$."
        },
        {
          "line": "So $\\left(e^{-\\ln 2}\\right)^{x/c} = e^{-\\frac{\\ln 2}{c} \\cdot x}$.",
          "reason": "Substituting a value: line 9 is put in line 8."
        },
        {
          "line": "So $\\left(e^{-\\ln 2}\\right)^{x/c} = e^{-ax}$.",
          "reason": "Substituting a value: by the hypothesis, $a$ is put in place of $\\dfrac{\\ln 2}{c}$ in line 10."
        },
        {
          "line": "So $\\left(\\dfrac{1}{2}\\right)^{x/c} = e^{-ax}$.",
          "reason": "Transitive property: lines 7 and 11 form a chain of equal numbers."
        },
        {
          "line": "Therefore $b\\left(\\dfrac{1}{2}\\right)^{x/c} = be^{-ax}$.",
          "reason": "Multiplying both sides by the same number: both sides of line 12 are multiplied by $b$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t220-s2",
      "method": "direct proof",
      "statement": "Prove that for positive numbers $b$ and $c$, the function $f(x) = b\\left(\\dfrac{1}{2}\\right)^{x/c}$ satisfies $f(x + d) = f(x)\\left(\\dfrac{1}{2}\\right)^{d/c}$ for all real numbers $x$ and $d$: over every stretch of time of length $d$ the amount is multiplied by the same number, wherever the stretch starts. Facts it may use: substituting a value, product law; adding fractions with the same denominator, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "By the rule of $f$, $f(x + d) = b\\left(\\dfrac{1}{2}\\right)^{(x + d)/c}$.",
            "reason": "Substituting a value: $x + d$ is put in place of $x$."
          },
          {
            "line": "Also $\\dfrac{x + d}{c} = \\dfrac{x}{c} + \\dfrac{d}{c}$.",
            "reason": "Adding fractions with the same denominator, from arithmetic: fractions with one bottom add by adding their tops."
          },
          {
            "line": "So $f(x + d) = b\\left(\\dfrac{1}{2}\\right)^{x/c + d/c}$.",
            "reason": "Substituting a value: line 2 is put in line 1."
          },
          {
            "line": "So $f(x + d) = b\\left(\\dfrac{1}{2}\\right)^{x/c}\\left(\\dfrac{1}{2}\\right)^{d/c}$.",
            "reason": "Product law: $a^ma^n = a^{m+n}$, read the other way."
          },
          {
            "line": "Therefore $f(x + d) = f(x)\\left(\\dfrac{1}{2}\\right)^{d/c}$.",
            "reason": "Substituting a value: by the rule of $f$, $f(x)$ is put in place of $b\\left(\\dfrac{1}{2}\\right)^{x/c}$."
          }
        ]
      }
    },
    {
      "id": "t220-s3",
      "method": "direct proof",
      "statement": "Prove that if $b$, $c$ and $y$ are positive numbers and $x$ is a real number with $y = b\\left(\\dfrac{1}{2}\\right)^{x/c}$, then $x = \\dfrac{c\\ln \\frac{b}{y}}{\\ln 2}$. Facts it may use: Natural logarithm, Log of a power, negative exponent, substituting a value, multiplying both sides by the same number, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "Since $y = b\\left(\\dfrac{1}{2}\\right)^{x/c}$, $\\dfrac{y}{b} = \\left(\\dfrac{1}{2}\\right)^{x/c}$.",
            "reason": "Dividing both sides by a nonzero number: $b$ is positive, so it is not $0$."
          },
          {
            "line": "So $\\ln \\dfrac{y}{b} = \\ln \\left(\\dfrac{1}{2}\\right)^{x/c}$.",
            "reason": "Natural logarithm: both sides are positive, and equal positive numbers have equal natural logarithms."
          },
          {
            "line": "So $\\ln \\dfrac{y}{b} = \\dfrac{x}{c}\\ln \\dfrac{1}{2}$.",
            "reason": "Log of a power: the exponent comes down in front of the logarithm."
          },
          {
            "line": "Also $\\dfrac{1}{2} = 2^{-1}$.",
            "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$ with $n = 1$."
          },
          {
            "line": "So $\\ln \\dfrac{1}{2} = -\\ln 2$.",
            "reason": "Log of a power: by line 4, the exponent $-1$ comes down in front of the logarithm."
          },
          {
            "line": "Also $\\dfrac{y}{b} = \\left(\\dfrac{b}{y}\\right)^{-1}$.",
            "reason": "Negative exponent: $\\left(\\dfrac{b}{y}\\right)^{-1}$ is $1$ divided by $\\dfrac{b}{y}$, which is $\\dfrac{y}{b}$."
          },
          {
            "line": "So $\\ln \\dfrac{y}{b} = -\\ln \\dfrac{b}{y}$.",
            "reason": "Log of a power: by line 6, the exponent $-1$ comes down in front of the logarithm."
          },
          {
            "line": "So $\\ln \\dfrac{y}{b} = -\\dfrac{x}{c}\\ln 2$.",
            "reason": "Substituting a value: line 5 is put in line 3."
          },
          {
            "line": "So $-\\ln \\dfrac{b}{y} = -\\dfrac{x}{c}\\ln 2$.",
            "reason": "Substituting a value: line 7 is put in line 8."
          },
          {
            "line": "So $c\\ln \\dfrac{b}{y} = x\\ln 2$.",
            "reason": "Multiplying both sides by the same number: both sides of line 9 are multiplied by $-c$."
          },
          {
            "line": "The number $\\ln 2$ is not $0$.",
            "reason": "Natural logarithm: $\\ln 2 = 0$ would mean $2 = e^0 = 1$."
          },
          {
            "line": "Therefore $x = \\dfrac{c\\ln \\frac{b}{y}}{\\ln 2}$.",
            "reason": "Dividing both sides by a nonzero number: both sides of line 10 are divided by $\\ln 2$."
          }
        ]
      }
    },
    {
      "id": "t220-s4",
      "method": "direct proof",
      "statement": "Prove that the numbers $\\dfrac{(n + 1)^n}{3n^n}$, for whole numbers $n$ from $1$ up, have the limit $\\dfrac{e}{3}$. Facts it may use: The number e, The limit of $\\left(1+\\frac1n\\right)^n$ exists, power of a quotient, substituting a value, dividing both sides by a nonzero number, A limit passes through sums, products and quotients; adding fractions with the same denominator, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "For every whole number $n$ from $1$ up, $\\dfrac{(n + 1)^n}{n^n} = \\left(\\dfrac{n + 1}{n}\\right)^n$.",
            "reason": "Power of a quotient: a power of a fraction is the power of its top over the power of its bottom, read the other way."
          },
          {
            "line": "Also $\\dfrac{n + 1}{n} = 1 + \\dfrac{1}{n}$.",
            "reason": "Adding fractions with the same denominator, from arithmetic: $\\dfrac{n}{n} + \\dfrac{1}{n} = \\dfrac{n + 1}{n}$, and $\\dfrac{n}{n} = 1$."
          },
          {
            "line": "So $\\dfrac{(n + 1)^n}{n^n} = \\left(1 + \\dfrac{1}{n}\\right)^n$.",
            "reason": "Substituting a value: line 2 is put in line 1."
          },
          {
            "line": "So $\\dfrac{(n + 1)^n}{3n^n} = \\dfrac{1}{3}\\left(1 + \\dfrac{1}{n}\\right)^n$.",
            "reason": "Dividing both sides by a nonzero number: both sides of line 3 are divided by $3$."
          },
          {
            "line": "The numbers $\\left(1 + \\dfrac{1}{n}\\right)^n$ have a limit.",
            "reason": "The limit of $\\left(1+\\frac1n\\right)^n$ exists."
          },
          {
            "line": "This limit is $e$.",
            "reason": "The number e: $e$ is the limit of the numbers $\\left(1 + \\dfrac{1}{n}\\right)^n$."
          },
          {
            "line": "Therefore the numbers $\\dfrac{(n + 1)^n}{3n^n}$ have the limit $\\dfrac{e}{3}$.",
            "reason": "A limit passes through sums, products and quotients: the numbers of line 5, with limit $e$, are divided by the fixed number $3$."
          }
        ]
      }
    }
  ]
}
