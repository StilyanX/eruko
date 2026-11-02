// Ordering Rational Numbers: the order rules that extend to signed numbers, absolute value,
// integer powers, and the proofs to read and the statements to prove that go with them.
export default {
  "number": 27,
  "manyParts": false,
  "bare": {
    "prompt": "Find the greater of $7\\times(-4)$ and $7\\times(-6)$.",
    "answer": "-28",
    "form": "Answer as an integer.",
    "solution": [
      "Find the greater of $7\\times(-4)$ and $7\\times(-6)$.",
      "Multiplying gives $7\\times(-4)=-28$ and $7\\times(-6)=-42$.",
      "$-28$."
    ]
  },
  "ideas": [
    {
      "name": "Absolute value",
      "concrete": "For $3$ and $-3$, $|3|=3$ and $|-3|=3$, the distance of each from $0$.",
      "general": "The **absolute value** $|x|$ of a nonzero number $x$ is the distance from $x$ to $0$. By definition, $|0|=0$."
    },
    {
      "name": "Integer powers",
      "concrete": "For $x=2$: $x^3=2\\times2\\times2=8$, $x^0=1$, and $x^{-2}=\\dfrac1{x^2}=\\dfrac{1}{4}$.",
      "general": "Define $x^0=1$ for a nonzero rational number $x$. For such an $x$ and a positive integer $n$, define the **negative integer power** $x^{-n}$ as $\\dfrac1{x^n}$."
    }
  ],
  "kinds": [
    {
      "id": "t27-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $(-5)(2)$ and $(-5)(3)$.",
            "lines": [
              {
                "step": "Compare the two factors that differ: $2<3$.",
                "reason": "reading the two factors"
              },
              {
                "step": "Multiplying an inequality by a negative number reverses it, so $(-5)(2)>(-5)(3)$.",
                "reason": "the rule for multiplying both sides of an inequality by a negative number"
              },
              {
                "step": "$-10$.",
                "reason": "multiplying out the greater side, $(-5)(2)=-10$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $(-3)(6)$ and $(-3)(9)$.",
              "answer": "-18",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Compare the two factors that differ: $6<9$.",
                  "reason": "reading the two factors"
                },
                {
                  "step": "Multiplying an inequality by a negative number reverses it, so $(-3)(6)>(-3)(9)$.",
                  "reason": "the rule for multiplying both sides of an inequality by a negative number"
                },
                {
                  "step": "$-18$.",
                  "reason": "multiplying out the greater side, $(-3)(6)=-18$"
                }
              ]
            },
            {
              "prompt": "Find the greater of $(-8)(1.5)$ and $(-8)(2.5)$.",
              "answer": "-12",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Compare the two factors that differ: $1.5<2.5$.",
                  "reason": "reading the two factors"
                },
                {
                  "step": "Multiplying an inequality by a negative number reverses it, so $(-8)(1.5)>(-8)(2.5)$.",
                  "reason": "the rule for multiplying both sides of an inequality by a negative number"
                },
                {
                  "step": "$-12$.",
                  "reason": "multiplying out the greater side, $(-8)(1.5)=-12$"
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\left(-\\dfrac{2}{3}\\right)(9)$ and $\\left(-\\dfrac{2}{3}\\right)(12)$.",
              "answer": "-6",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Compare the two factors that differ: $9<12$.",
                  "reason": "reading the two factors"
                },
                {
                  "step": "Multiplying an inequality by a negative number reverses it, so $\\left(-\\dfrac{2}{3}\\right)(9)>\\left(-\\dfrac{2}{3}\\right)(12)$.",
                  "reason": "the rule for multiplying both sides of an inequality by a negative number"
                },
                {
                  "step": "$-6$.",
                  "reason": "multiplying out the greater side, $\\left(-\\dfrac{2}{3}\\right)(9)=-6$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $-1.4$ and $-\\dfrac{3}{4}$.",
            "lines": [
              {
                "step": "Write $-\\dfrac{3}{4}$ as a decimal: $-\\dfrac{3}{4}=-0.75$.",
                "reason": "converting the fraction to a decimal for comparison"
              },
              {
                "step": "Subtract the first number from the second: $-0.75-(-1.4)=0.65$.",
                "reason": "a rational number is greater exactly when its difference from the other is positive"
              },
              {
                "step": "$-\\dfrac{3}{4}$.",
                "reason": "a positive difference means the second number is greater"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $-\\dfrac{2}{5}$ and $-0.35$.",
              "answer": "-0.35",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Write $-\\dfrac{2}{5}$ as a decimal: $-\\dfrac{2}{5}=-0.4$.",
                  "reason": "converting the fraction to a decimal for comparison"
                },
                {
                  "step": "Subtract the first number from the second: $-0.35-(-0.4)=0.05$.",
                  "reason": "a rational number is greater exactly when its difference from the other is positive"
                },
                {
                  "step": "$-0.35$.",
                  "reason": "a positive difference means the second number is greater"
                }
              ]
            },
            {
              "prompt": "Find the greater of $-\\dfrac{5}{8}$ and $-0.6$.",
              "answer": "-0.6",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Write $-\\dfrac{5}{8}$ as a decimal: $-\\dfrac{5}{8}=-0.625$.",
                  "reason": "converting the fraction to a decimal for comparison"
                },
                {
                  "step": "Subtract the first number from the second: $-0.6-(-0.625)=0.025$.",
                  "reason": "a rational number is greater exactly when its difference from the other is positive"
                },
                {
                  "step": "$-0.6$.",
                  "reason": "a positive difference means the second number is greater"
                }
              ]
            },
            {
              "prompt": "Find the greater of $-\\dfrac{6}{5}$ and $-1.05$.",
              "answer": "-1.05",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Write $-\\dfrac{6}{5}$ as a decimal: $-\\dfrac{6}{5}=-1.2$.",
                  "reason": "converting the fraction to a decimal for comparison"
                },
                {
                  "step": "Subtract the first number from the second: $-1.05-(-1.2)=0.15$.",
                  "reason": "a rational number is greater exactly when its difference from the other is positive"
                },
                {
                  "step": "$-1.05$.",
                  "reason": "a positive difference means the second number is greater"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t27-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $-\\dfrac{5}{8}$ and $-\\dfrac{7}{11}$.",
            "lines": [
              {
                "step": "Cross-multiply: compare $(-5)(11)$ and $(8)(-7)$.",
                "reason": "the cross-multiplication rule for quotients with positive denominators"
              },
              {
                "step": "Multiplying gives $(-5)(11)=-55$ and $(8)(-7)=-56$.",
                "reason": "multiplying out both products"
              },
              {
                "step": "$-\\dfrac{5}{8}$.",
                "reason": "the quotient with the greater cross product, $-55>-56$, is the greater quotient"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $-\\dfrac{3}{7}$ and $-\\dfrac{5}{9}$.",
              "answer": "-3/7",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Cross-multiply: compare $(-3)(9)$ and $(7)(-5)$.",
                  "reason": "the cross-multiplication rule for quotients with positive denominators"
                },
                {
                  "step": "Multiplying gives $(-3)(9)=-27$ and $(7)(-5)=-35$.",
                  "reason": "multiplying out both products"
                },
                {
                  "step": "$-\\dfrac{3}{7}$.",
                  "reason": "the quotient with the greater cross product, $-27>-35$, is the greater quotient"
                }
              ]
            },
            {
              "prompt": "Find the greater of $-\\dfrac{9}{10}$ and $-\\dfrac{11}{12}$.",
              "answer": "-9/10",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Cross-multiply: compare $(-9)(12)$ and $(10)(-11)$.",
                  "reason": "the cross-multiplication rule for quotients with positive denominators"
                },
                {
                  "step": "Multiplying gives $(-9)(12)=-108$ and $(10)(-11)=-110$.",
                  "reason": "multiplying out both products"
                },
                {
                  "step": "$-\\dfrac{9}{10}$.",
                  "reason": "the quotient with the greater cross product, $-108>-110$, is the greater quotient"
                }
              ]
            },
            {
              "prompt": "Find the greater of $-\\dfrac{7}{15}$ and $-\\dfrac{2}{5}$.",
              "answer": "-2/5",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Cross-multiply: compare $(-7)(5)$ and $(15)(-2)$.",
                  "reason": "the cross-multiplication rule for quotients with positive denominators"
                },
                {
                  "step": "Multiplying gives $(-7)(5)=-35$ and $(15)(-2)=-30$.",
                  "reason": "multiplying out both products"
                },
                {
                  "step": "$-\\dfrac{2}{5}$.",
                  "reason": "the quotient with the greater cross product, $-30>-35$, is the greater quotient"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t27-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $\\left(\\dfrac{2}{7}\\right)^3$ and $\\left(\\dfrac{2}{7}\\right)^5$.",
            "lines": [
              {
                "step": "Read the base: $0<\\dfrac{2}{7}<1$.",
                "reason": "comparing the base with $0$ and $1$"
              },
              {
                "step": "For a base between $0$ and $1$, the power with the lesser exponent is greater.",
                "reason": "the rule for powers of a number between $0$ and $1$"
              },
              {
                "step": "$\\dfrac{8}{343}$.",
                "reason": "applying the rule, since $3<5$, then computing $\\left(\\dfrac{2}{7}\\right)^3$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $(0.6)^2$ and $(0.6)^4$.",
              "answer": "0.36",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Read the base: $0<0.6<1$.",
                  "reason": "comparing the base with $0$ and $1$"
                },
                {
                  "step": "For a base between $0$ and $1$, the power with the lesser exponent is greater.",
                  "reason": "the rule for powers of a number between $0$ and $1$"
                },
                {
                  "step": "$0.36$.",
                  "reason": "applying the rule, since $2<4$, then computing $(0.6)^2$"
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\left(\\dfrac{3}{5}\\right)^4$ and $\\left(\\dfrac{3}{5}\\right)^7$.",
              "answer": "81/625",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Read the base: $0<\\dfrac{3}{5}<1$.",
                  "reason": "comparing the base with $0$ and $1$"
                },
                {
                  "step": "For a base between $0$ and $1$, the power with the lesser exponent is greater.",
                  "reason": "the rule for powers of a number between $0$ and $1$"
                },
                {
                  "step": "$\\dfrac{81}{625}$.",
                  "reason": "applying the rule, since $4<7$, then computing $\\left(\\dfrac{3}{5}\\right)^4$"
                }
              ]
            },
            {
              "prompt": "Find the greater of $(0.9)^3$ and $(0.9)^6$.",
              "answer": "0.729",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Read the base: $0<0.9<1$.",
                  "reason": "comparing the base with $0$ and $1$"
                },
                {
                  "step": "For a base between $0$ and $1$, the power with the lesser exponent is greater.",
                  "reason": "the rule for powers of a number between $0$ and $1$"
                },
                {
                  "step": "$0.729$.",
                  "reason": "applying the rule, since $3<6$, then computing $(0.9)^3$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $(0.3)^4$ and $(0.5)^4$.",
            "lines": [
              {
                "step": "Read the two bases: $0<0.3<0.5$.",
                "reason": "comparing the two positive bases"
              },
              {
                "step": "Raising two positive numbers to the same positive whole-number exponent keeps their order.",
                "reason": "the rule for powers of positive numbers in increasing order"
              },
              {
                "step": "$0.062\\,5$.",
                "reason": "applying the rule, since $0.5$ is the greater base, then computing $(0.5)^4$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $\\left(\\dfrac{1}{6}\\right)^3$ and $\\left(\\dfrac{1}{3}\\right)^3$.",
              "answer": "1/27",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Read the two bases: $0<\\dfrac{1}{6}<\\dfrac{1}{3}$.",
                  "reason": "comparing the two positive bases"
                },
                {
                  "step": "Raising two positive numbers to the same positive whole-number exponent keeps their order.",
                  "reason": "the rule for powers of positive numbers in increasing order"
                },
                {
                  "step": "$\\dfrac{1}{27}$.",
                  "reason": "applying the rule, since $\\dfrac{1}{3}$ is the greater base, then computing $\\left(\\dfrac{1}{3}\\right)^3$"
                }
              ]
            },
            {
              "prompt": "Find the greater of $(0.2)^5$ and $(0.4)^5$.",
              "answer": "0.01024",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Read the two bases: $0<0.2<0.4$.",
                  "reason": "comparing the two positive bases"
                },
                {
                  "step": "Raising two positive numbers to the same positive whole-number exponent keeps their order.",
                  "reason": "the rule for powers of positive numbers in increasing order"
                },
                {
                  "step": "$0.010\\,24$.",
                  "reason": "applying the rule, since $0.4$ is the greater base, then computing $(0.4)^5$"
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\left(\\dfrac{3}{4}\\right)^2$ and $\\left(\\dfrac{4}{5}\\right)^2$.",
              "answer": "16/25",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Read the two bases: $0<\\dfrac{3}{4}<\\dfrac{4}{5}$.",
                  "reason": "comparing the two positive bases"
                },
                {
                  "step": "Raising two positive numbers to the same positive whole-number exponent keeps their order.",
                  "reason": "the rule for powers of positive numbers in increasing order"
                },
                {
                  "step": "$\\dfrac{16}{25}$.",
                  "reason": "applying the rule, since $\\dfrac{4}{5}$ is the greater base, then computing $\\left(\\dfrac{4}{5}\\right)^2$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t27-k4",
      "forms": [
        {
          "example": {
            "problem": "Compute $\\left|-\\dfrac{7}{3}\\right|$.",
            "lines": [
              {
                "step": "Read the sign of the given number: $-\\dfrac{7}{3}$ is negative.",
                "reason": "comparing the number with $0$"
              },
              {
                "step": "The absolute value of a negative number is its mirror reflection.",
                "reason": "the definition of absolute value as a distance from $0$"
              },
              {
                "step": "$\\dfrac{7}{3}$.",
                "reason": "the mirror reflection of $-\\dfrac{7}{3}$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $|-4.5|$.",
              "answer": "4.5",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Read the sign of the given number: $-4.5$ is negative.",
                  "reason": "comparing the number with $0$"
                },
                {
                  "step": "The absolute value of a negative number is its mirror reflection.",
                  "reason": "the definition of absolute value as a distance from $0$"
                },
                {
                  "step": "$4.5$.",
                  "reason": "the mirror reflection of $-4.5$"
                }
              ]
            },
            {
              "prompt": "Compute $\\left|-\\dfrac{9}{4}\\right|$.",
              "answer": "9/4",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Read the sign of the given number: $-\\dfrac{9}{4}$ is negative.",
                  "reason": "comparing the number with $0$"
                },
                {
                  "step": "The absolute value of a negative number is its mirror reflection.",
                  "reason": "the definition of absolute value as a distance from $0$"
                },
                {
                  "step": "$\\dfrac{9}{4}$.",
                  "reason": "the mirror reflection of $-\\dfrac{9}{4}$"
                }
              ]
            },
            {
              "prompt": "Compute $|-0.08|$.",
              "answer": "0.08",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Read the sign of the given number: $-0.08$ is negative.",
                  "reason": "comparing the number with $0$"
                },
                {
                  "step": "The absolute value of a negative number is its mirror reflection.",
                  "reason": "the definition of absolute value as a distance from $0$"
                },
                {
                  "step": "$0.08$.",
                  "reason": "the mirror reflection of $-0.08$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t27-k5",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{33}{25}$.",
            "figure": {
              "file": "place:line:33/25",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$33=1\\times 25+8$, so $\\frac{33}{25}=1+\\frac{8}{25}$.",
                "reason": "33 copies of $\\frac{1}{25}$ hold 1 group of 25 copies, each group making 1, with 8 copies left over"
              },
              {
                "step": "The mark lies between 1 and 2, $\\frac{8}{25}$ of the way from 1 to 2.",
                "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 8 of the 25 equal parts of that unit come before it"
              },
              {
                "step": "$\\frac{8}{25}=\\frac{8\\times 4}{25\\times 4}=\\frac{32}{100}=0.32$.",
                "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$1.32$.",
                "reason": "the whole part and the decimal part written together"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{27}{20}$.",
              "answer": "27/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$27=1\\times 20+7$, so $\\frac{27}{20}=1+\\frac{7}{20}$.",
                  "reason": "27 copies of $\\frac{1}{20}$ hold 1 group of 20 copies, each group making 1, with 7 copies left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{7}{20}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 7 of the 20 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{7}{20}=\\frac{7\\times 5}{20\\times 5}=\\frac{35}{100}=0.35$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$1.35$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:27/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 27/20 lies at 1.35, in the tenth from 1.3 to 1.4, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{41}{25}$.",
              "answer": "41/25",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$41=1\\times 25+16$, so $\\frac{41}{25}=1+\\frac{16}{25}$.",
                  "reason": "41 copies of $\\frac{1}{25}$ hold 1 group of 25 copies, each group making 1, with 16 copies left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{16}{25}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 16 of the 25 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{16}{25}=\\frac{16\\times 4}{25\\times 4}=\\frac{64}{100}=0.64$.",
                  "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$1.64$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:41/25",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 41/25 lies at 1.64, in the tenth from 1.6 to 1.7, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{15}{4}$.",
              "answer": "15/4",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$15=3\\times 4+3$, so $\\frac{15}{4}=3+\\frac{3}{4}$.",
                  "reason": "15 copies of $\\frac{1}{4}$ hold 3 groups of 4 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{3}{4}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 3 of the 4 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{4}=\\frac{3\\times 25}{4\\times 25}=\\frac{75}{100}=0.75$.",
                  "reason": "multiplying the numerator and the denominator by 25 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$3.75$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:15/4",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 15/4 lies at 3.75, in the tenth from 3.7 to 3.8, between 3 and 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $3.75$.",
            "figure": {
              "file": "place:line:3.75",
              "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $3.75$ is 3, so the mark lies between 3 and 4.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.75=\\frac{75}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 7 and 5 hundredths follow it, so the mark lies past the 7th cut and short of the next, between $3.7$ and $3.8$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:3.75",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, with 3.75 marked, between 3 and 4."
                }
              },
              {
                "step": "$3.75$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:3.75",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.75 lies at 3.75, in the tenth from 3.7 to 3.8, between 3 and 4."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $2.85$.",
              "answer": "2.85",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $2.85$ is 2, so the mark lies between 2 and 3.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.85=\\frac{85}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 8 and 5 hundredths follow it, so the mark lies past the 8th cut and short of the next, between $2.8$ and $2.9$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.85$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:2.85",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.85 lies at 2.85, in the tenth from 2.8 to 2.9, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $0.45$.",
              "answer": "0.45",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.45$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.45=\\frac{45}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 4 and 5 hundredths follow it, so the mark lies past the 4th cut and short of the next, between $0.4$ and $0.5$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.45$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.45",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.45 lies at 0.45, in the tenth from 0.4 to 0.5, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $1.15$.",
              "answer": "1.15",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.15$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.15=\\frac{15}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 1 and 5 hundredths follow it, so the mark lies past the 1st cut and short of the next, between $1.1$ and $1.2$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.15$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.15",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.15 lies at 1.15, in the tenth from 1.1 to 1.2, between 1 and 2."
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
      "id": "t27-p1",
      "method": "direct proof",
      "statement": "For rational numbers $x$ and $y$, $x<y$ if and only if $-x>-y$.",
      "idea": "Reflecting two points through $0$ swaps which one lies to the left, since reflection reverses left-right order.",
      "lines": [
        {
          "line": "The statement $x<y$ means $x$ lies to the left of $y$ on the number line.",
          "reason": "the definition of the order relation $<$"
        },
        {
          "line": "Reflecting a point through $0$ reverses which of two points lies to the left.",
          "reason": "the rule for mirror reflection and order"
        },
        {
          "line": "Reflecting $x$ gives $-x$, and reflecting $y$ gives $-y$.",
          "reason": "the definition of the mirror reflection of a number"
        },
        {
          "line": "So $-x$ lies to the right of $-y$. That is, $-x>-y$.",
          "reason": "combining the previous two lines"
        },
        {
          "line": "Applying the same argument to $-x$ and $-y$ in place of $x$ and $y$ shows that $-x>-y$ implies $x<y$.",
          "reason": "reflecting twice returns each point to itself"
        },
        {
          "line": "For rational numbers $x$ and $y$, $x<y$ if and only if $-x>-y$.",
          "reason": "combining both directions"
        }
      ]
    },
    {
      "id": "t27-p2",
      "method": "direct proof",
      "statement": "For a nonzero rational number $x$, $x>0$ if and only if $\\dfrac1x>0$.",
      "idea": "The product of $x$ and its reciprocal is the positive number $1$, so the two numbers must share a sign.",
      "lines": [
        {
          "line": "$x\\times\\dfrac1x=1$.",
          "reason": "the definition of the reciprocal $\\frac1x$"
        },
        {
          "line": "The product of $x$ and $\\dfrac1x$ is positive, since it equals $1$.",
          "reason": "the number $1$ is positive"
        },
        {
          "line": "A product of two rational numbers is positive only when both factors are positive or both are negative.",
          "reason": "the sign rules for multiplication"
        },
        {
          "line": "So $x$ and $\\dfrac1x$ are both positive or both negative.",
          "reason": "applying the previous line to $x$ and $\\dfrac1x$"
        },
        {
          "line": "For a nonzero rational number $x$, $x>0$ if and only if $\\dfrac1x>0$.",
          "reason": "the two numbers share the same sign"
        }
      ]
    },
    {
      "id": "t27-p3",
      "method": "proof by cases",
      "statement": "For rational numbers $x,y,z$, if $z>0$ and $x<y$, then $xz<yz$.",
      "idea": "Split by the signs of $x$ and $y$. The mixed-sign case needs only the signs of the products. Each same-sign case reduces to the rule for positive numbers.",
      "lines": [
        {
          "line": "Suppose that $x<0<y$.",
          "reason": "the first case"
        },
        {
          "line": "Multiplying gives $xz<0$ and $yz>0$, so $xz<yz$.",
          "reason": "a positive number times a negative number is negative, and times a positive number is positive"
        },
        {
          "line": "Suppose that $0<x<y$.",
          "reason": "the second case"
        },
        {
          "line": "$xz<yz$.",
          "reason": "multiplying an inequality of positive numbers by a positive number preserves it"
        },
        {
          "line": "Suppose that $x<y<0$.",
          "reason": "the third case"
        },
        {
          "line": "$0<-y<-x$.",
          "reason": "the rule that $u<v$ if and only if $-u>-v$, applied to $x<y$, since $x$ and $y$ are negative"
        },
        {
          "line": "$(-y)z<(-x)z$.",
          "reason": "the second case above, applied to the positive numbers $-y<-x$"
        },
        {
          "line": "$-yz<-xz$.",
          "reason": "a negative number times a number is the mirror reflection of their product, applied to both sides"
        },
        {
          "line": "$xz<yz$.",
          "reason": "the rule that $u<v$ if and only if $-u>-v$, applied with $-yz$ and $-xz$ in place of $u$ and $v$"
        },
        {
          "line": "Suppose that $x=0$ or $y=0$. Since $x<y$, either $x=0<y$ or $x<y=0$.",
          "reason": "the fourth case"
        },
        {
          "line": "Then $xz=0<yz$ or $xz<0=yz$.",
          "reason": "the sign rules for multiplication, and the rule that $0$ times a number is $0$"
        },
        {
          "line": "So $xz<yz$.",
          "reason": "both subcases give this inequality"
        },
        {
          "line": "For rational numbers $x,y,z$, if $z>0$ and $x<y$, then $xz<yz$.",
          "reason": "combining the four cases"
        }
      ]
    },
    {
      "id": "t27-p4",
      "method": "direct proof",
      "statement": "For rational numbers $x,y,z$, if $z<0$ and $x<y$, then $xz>yz$.",
      "idea": "Write the negative multiplier as the mirror reflection of a positive number and apply the rule for a positive multiplier. Then flip the resulting inequality by reflecting both sides.",
      "lines": [
        {
          "line": "Let $w=-z$. Then $w$ is positive, since $z$ is negative.",
          "reason": "the mirror reflection of a negative number is positive"
        },
        {
          "line": "$wx<wy$.",
          "reason": "multiplying an inequality by a positive number preserves it"
        },
        {
          "line": "$-wx>-wy$.",
          "reason": "the rule that $u<v$ if and only if $-u>-v$"
        },
        {
          "line": "Regrouping gives $-wx=(-w)x=zx$ and $-wy=(-w)y=zy$.",
          "reason": "a negative number times a number is the mirror reflection of their product, and $z=-w$"
        },
        {
          "line": "$zx>zy$.",
          "reason": "combining the previous two lines"
        }
      ]
    },
    {
      "id": "t27-p5",
      "method": "direct proof",
      "statement": "For rational numbers $x,y,z,w$ with $y>0$ and $w>0$, $\\dfrac{x}{y}<\\dfrac{z}{w}$ if and only if $xw<yz$.",
      "idea": "Multiply the inequality by the product of the two positive denominators. This clears both quotients and leaves a comparison of products. The reverse direction multiplies by the reciprocal of that same product.",
      "lines": [
        {
          "line": "Suppose that $\\dfrac{x}{y}<\\dfrac{z}{w}$.",
          "reason": "the hypothesis of the first direction, to prove $xw<yz$"
        },
        {
          "line": "The product $yw$ is positive, since $y$ and $w$ are both positive.",
          "reason": "the product of two positive numbers is positive"
        },
        {
          "line": "Multiplying both sides by $yw$ gives $\\dfrac{x}{y}\\times yw<\\dfrac{z}{w}\\times yw$.",
          "reason": "multiplying an inequality by a positive number preserves it"
        },
        {
          "line": "Then $\\dfrac{x}{y}\\times yw=xw$ and $\\dfrac{z}{w}\\times yw=yz$.",
          "reason": "a quotient times its denominator, rearranged by the commutative and associative laws, leaves the other factor times the numerator"
        },
        {
          "line": "$xw<yz$.",
          "reason": "combining the previous two lines"
        },
        {
          "line": "Conversely, suppose that $xw<yz$.",
          "reason": "the hypothesis of the second direction, to prove $\\dfrac{x}{y}<\\dfrac{z}{w}$"
        },
        {
          "line": "The reciprocals $\\dfrac{1}{y}$ and $\\dfrac{1}{w}$ are both positive, so $\\dfrac{1}{yw}$ is positive.",
          "reason": "a positive number and its reciprocal share a sign, and the product of two positive numbers is positive"
        },
        {
          "line": "Multiplying both sides of $xw<yz$ by $\\dfrac{1}{yw}$ gives $xw\\times\\dfrac{1}{yw}<yz\\times\\dfrac{1}{yw}$.",
          "reason": "multiplying an inequality by a positive number preserves it"
        },
        {
          "line": "Then $xw\\times\\dfrac{1}{yw}=\\dfrac{x}{y}$ and $yz\\times\\dfrac{1}{yw}=\\dfrac{z}{w}$.",
          "reason": "cancelling $w$ from the first product and $y$ from the second, by the meaning of a quotient of rational numbers"
        },
        {
          "line": "$\\dfrac{x}{y}<\\dfrac{z}{w}$.",
          "reason": "combining the previous two lines"
        },
        {
          "line": "For rational numbers $x,y,z,w$ with $y>0$ and $w>0$, $\\dfrac{x}{y}<\\dfrac{z}{w}$ if and only if $xw<yz$.",
          "reason": "combining both directions"
        }
      ]
    },
    {
      "id": "t27-p6",
      "method": "proof by cases",
      "statement": "For a nonzero rational number $x$ and whole numbers $m$ and $n$ with $m>n$: if $x>1$, then $x^m>x^n$. If $0<x<1$, then $x^m<x^n$.",
      "idea": "Multiply $x$ by itself one factor at a time. Each further factor moves the power further from $1$ in the same direction. The power is greater than $1$ when $x>1$ and less than $1$ when $x<1$.",
      "lines": [
        {
          "line": "Suppose that $x>1$.",
          "reason": "the first case"
        },
        {
          "line": "$x\\times x>1\\times x$, so $x^2>x$.",
          "reason": "multiplying an inequality by the positive number $x$ preserves it"
        },
        {
          "line": "$x^2>1$, since $x^2>x$ and $x>1$.",
          "reason": "combining two inequalities in the same direction"
        },
        {
          "line": "Multiplying $x^2>x$ by the positive number $x$ gives $x^3>x^2$. Combining $x^3>x^2$ with $x^2>1$ gives $x^3>1$.",
          "reason": "multiplying an inequality by a positive number preserves it, then combining as before"
        },
        {
          "line": "Multiplying $x^k>x^{k-1}$ by $x$ gives $x^{k+1}>x^k$, so $x^{k+1}>x^k>1$ for every whole number $k$ from $2$ up to $m-n-1$.",
          "reason": "the same two steps repeated, one more power of $x$ at a time"
        },
        {
          "line": "So $x^{m-n}>1$.",
          "reason": "the repeated step reaches the exponent $m-n$"
        },
        {
          "line": "Multiplying both sides of $x^{m-n}>1$ by the positive number $x^n$ gives $x^n\\times x^{m-n}>x^n\\times1$.",
          "reason": "multiplying an inequality by the positive number $x^n$ preserves it"
        },
        {
          "line": "Then $x^n\\times x^{m-n}=x^m$ and $x^n\\times1=x^n$, so $x^m>x^n$.",
          "reason": "the definition of a power as repeated multiplication, and multiplying by $1$ leaves a number unchanged"
        },
        {
          "line": "Suppose that $0<x<1$.",
          "reason": "the second case"
        },
        {
          "line": "$1\\times x>x\\times x$, so $x>x^2$.",
          "reason": "multiplying an inequality by the positive number $x$ preserves it"
        },
        {
          "line": "$1>x^2$, since $x>x^2$ and $1>x$.",
          "reason": "combining two inequalities in the same direction"
        },
        {
          "line": "Repeat the steps of the first case with every inequality reversed. This gives $1>x^{m-n}$.",
          "reason": "the same repeated step, one more power of $x$ at a time"
        },
        {
          "line": "Multiplying both sides of $1>x^{m-n}$ by the positive number $x^n$ gives $x^n>x^n\\times x^{m-n}$. Then $x^n\\times x^{m-n}=x^m$, so $x^n>x^m$. That is, $x^m<x^n$.",
          "reason": "multiplying an inequality by a positive number preserves it, then the definition of a power as repeated multiplication"
        },
        {
          "line": "For a nonzero rational number $x$ and whole numbers $m>n$: if $x>1$ then $x^m>x^n$, and if $0<x<1$ then $x^m<x^n$.",
          "reason": "combining both cases"
        }
      ]
    },
    {
      "id": "t27-p7",
      "method": "induction",
      "statement": "For rational numbers $x,y$ with $0<x<y$, and every whole number $n>0$: $x^n<y^n$.",
      "idea": "Because $x$ and $y$ are positive, multiplying in one more factor of each preserves the inequality. This builds the result one power at a time.",
      "lines": [
        {
          "line": "The statement holds for $n=1$: $x^1<y^1$ is exactly the hypothesis $x<y$.",
          "reason": "the base case of the induction, $n=1$"
        },
        {
          "line": "Suppose that the statement holds for some whole number $k\\ge1$, so $x^k<y^k$.",
          "reason": "the inductive hypothesis"
        },
        {
          "line": "$x^{k+1}<x^k y$, since $x^k$ is positive and $x<y$.",
          "reason": "multiplying both sides of $x<y$ by the positive number $x^k$ preserves it"
        },
        {
          "line": "$x^k y<y^{k+1}$, since $y$ is positive and $x^k<y^k$.",
          "reason": "multiplying both sides of $x^k<y^k$ by the positive number $y$ preserves it"
        },
        {
          "line": "$x^{k+1}<y^{k+1}$.",
          "reason": "combining the previous two inequalities"
        },
        {
          "line": "So $x^n<y^n$ for every whole number $n>0$, by induction on $n$.",
          "reason": "combining the base case and the inductive step"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t27-s1",
      "method": "direct proof",
      "statement": "For rational numbers $x$ and $y$, $x<y$ if and only if $y-x>0$.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $x<y$.",
            "reason": "the hypothesis of the first direction"
          },
          {
            "line": "Adding $-y$ to both sides of an inequality preserves it, so $x+(-y)<y+(-y)$.",
            "reason": "the rule that adding the same quantity to both sides of an inequality preserves it"
          },
          {
            "line": "By definition, $x+(-y)=x-y$ and $y+(-y)=0$, so $x-y<0$.",
            "reason": "the definition of subtraction, and $y+(-y)=0$"
          },
          {
            "line": "$-(x-y)>0$.",
            "reason": "the rule that $x<y$ if and only if $-x>-y$, applied with $0$ in place of $y$"
          },
          {
            "line": "$-(x-y)=y-x$, so $y-x>0$.",
            "reason": "the rule for removing parentheses with a leading minus sign"
          },
          {
            "line": "Conversely, suppose that $y-x>0$.",
            "reason": "the hypothesis of the second direction"
          },
          {
            "line": "Adding $x$ to both sides of an inequality preserves it, so $(y-x)+x>0+x$.",
            "reason": "the rule that adding the same quantity to both sides of an inequality preserves it"
          },
          {
            "line": "Then $(y-x)+x=y$ and $0+x=x$, so $y>x$. That is, $x<y$.",
            "reason": "combining like terms"
          },
          {
            "line": "For rational numbers $x$ and $y$, $x<y$ if and only if $y-x>0$.",
            "reason": "combining both directions"
          }
        ]
      }
    },
    {
      "id": "t27-s2",
      "method": "proof by cases",
      "statement": "For all rational numbers $x$ and $y$, $|x||y|=|xy|$.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $x$ and $y$ are both nonnegative.",
            "reason": "the first case"
          },
          {
            "line": "$|x|=x$, $|y|=y$, and $xy$ is nonnegative, so $|xy|=xy$.",
            "reason": "the absolute value of a nonnegative number is the number itself, and the product of two nonnegative numbers is nonnegative"
          },
          {
            "line": "$|x||y|=xy=|xy|$.",
            "reason": "substituting the previous line"
          },
          {
            "line": "Suppose that $x$ and $y$ are both negative.",
            "reason": "the second case"
          },
          {
            "line": "$|x|=-x$, $|y|=-y$, and $xy$ is positive, so $|xy|=xy$.",
            "reason": "the absolute value of a negative number is its mirror reflection, and the product of two negative numbers is positive"
          },
          {
            "line": "$|x||y|=(-x)(-y)=xy=|xy|$.",
            "reason": "the product of two negative numbers, then combining with the previous line"
          },
          {
            "line": "Suppose that $x$ and $y$ have opposite signs, one positive and one negative.",
            "reason": "the third case"
          },
          {
            "line": "The product $xy$ is negative.",
            "reason": "the product of a positive number and a negative number is negative"
          },
          {
            "line": "So $|xy|=-xy$.",
            "reason": "the absolute value of a negative number is its mirror reflection"
          },
          {
            "line": "The product $|x||y|$ equals the positive factor times the mirror reflection of the negative factor, which is $-xy$.",
            "reason": "the definition of absolute value applied to each factor"
          },
          {
            "line": "$|x||y|=-xy=|xy|$.",
            "reason": "combining the previous two lines"
          },
          {
            "line": "Suppose that $x=0$ or $y=0$.",
            "reason": "the fourth case"
          },
          {
            "line": "Then $xy=0$ and $|x||y|=0$, so $|x||y|=0=|xy|$.",
            "reason": "the absolute value of $0$ is $0$, and $0$ times a number is $0$"
          },
          {
            "line": "The four cases cover every pair of rational numbers $x$ and $y$, so $|x||y|=|xy|$ always.",
            "reason": "combining the four cases"
          }
        ]
      }
    },
    {
      "id": "t27-s3",
      "method": "induction",
      "statement": "For every rational number $x$ and every whole number $n$ with $n\\ge1$, $|x^n|=|x|^n$.",
      "check": {
        "proof": [
          {
            "line": "The statement holds for $n=1$: $x^1=x$, so $|x^1|=|x|=|x|^1$.",
            "reason": "the base case of the induction, $n=1$"
          },
          {
            "line": "Suppose that the statement holds for some whole number $k\\ge1$, so $|x^k|=|x|^k$.",
            "reason": "the inductive hypothesis"
          },
          {
            "line": "$x^{k+1}=x^k\\times x$.",
            "reason": "the definition of a power as repeated multiplication, one more copy of $x$"
          },
          {
            "line": "$|x^{k+1}|=|x^k\\times x|=|x^k|\\times|x|$.",
            "reason": "the rule that the absolute value of a product is the product of the absolute values"
          },
          {
            "line": "$|x^k|\\times|x|=|x|^k\\times|x|=|x|^{k+1}$.",
            "reason": "the inductive hypothesis, and the definition of a power as repeated multiplication"
          },
          {
            "line": "So $|x^{k+1}|=|x|^{k+1}$.",
            "reason": "combining the previous two lines"
          },
          {
            "line": "So $|x^n|=|x|^n$ for every whole number $n\\ge1$, by induction on $n$.",
            "reason": "combining the base case and the inductive step"
          }
        ]
      }
    },
    {
      "id": "t27-s4",
      "method": "direct proof",
      "statement": "For a nonzero rational number $x$ and a positive integer $n$, $x^{-n}\\times x^n=1$.",
      "check": {
        "proof": [
          {
            "line": "By the definition of a negative integer power, $x^{-n}=\\dfrac{1}{x^n}$.",
            "reason": "the definition of $x^{-n}$ for a nonzero $x$ and a positive integer $n$"
          },
          {
            "line": "The number $x^n$ is not zero, because it is a product of $n$ copies of the nonzero number $x$.",
            "reason": "a product of nonzero rational numbers is not zero"
          },
          {
            "line": "So $x^{-n}\\times x^n=\\dfrac{1}{x^n}\\times x^n=1$.",
            "reason": "a nonzero number times its reciprocal is $1$"
          },
          {
            "line": "So $x^{-n}\\times x^n=1$ for every nonzero rational number $x$ and every positive integer $n$.",
            "reason": "the numbers $x$ and $n$ are arbitrary"
          }
        ]
      }
    }
  ]
}
