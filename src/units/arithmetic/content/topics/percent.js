// Percent: percents and fractions, percent of a quantity, rises and falls, finding the whole, and relative error.
export default {
  "number": 20,
  "manyParts": false,
  "bare": {
    "prompt": "Compute $20\\%$ of $65$.",
    "answer": "13",
    "form": "Answer as a finite decimal, or equivalent.",
    "solution": [
      "Compute $20\\%$ of $65$.",
      "Finding $20\\%$ of $65$ means computing $20\\%\\times65$, since the mathematical meaning of \"of\" is multiplication.",
      "$20\\% = \\dfrac{20}{100}$, by the definition of percent.",
      "$\\dfrac{20}{100}\\times65 = \\dfrac{1\\,300}{100} = 13$.",
      "$13$."
    ]
  },
  "ideas": [
    {
      "name": "Percent rise and fall",
      "concrete": "A quantity of $200$ becomes $200+(15\\%\\times200)$ when it rises by $15\\%$. It becomes $200-(15\\%\\times200)$ when it falls by $15\\%$.",
      "general": "For a quantity $Q$ and a percent $r\\%$, a **rise** of $r\\%$ gives $Q+(r\\%\\times Q)$. A **fall** of $r\\%$ gives $Q-(r\\%\\times Q)$."
    },
    {
      "name": "Reference fraction",
      "concrete": "The percent $76\\%$ is close to $75\\%=\\dfrac{3}{4}$, so $\\dfrac{3}{4}$ is a reference fraction for $76\\%$.",
      "general": "A **reference fraction** for a percent is a fraction with a one-digit numerator and a one-digit denominator whose value is close to that percent."
    }
  ],
  "kinds": [
    {
      "id": "t20-k1",
      "forms": [
        {
          "example": {
            "problem": "Write $33\\,\\frac{1}{3}\\%$ as a fraction in lowest terms.",
            "lines": [
              {
                "step": "The percent $33\\,\\frac{1}{3}\\%$ equals $\\dfrac{33\\,\\frac{1}{3}}{100}$.",
                "reason": "the definition of percent"
              },
              {
                "step": "$33\\,\\frac{1}{3} = \\dfrac{100}{3}$.",
                "reason": "writing the mixed number as an improper fraction"
              },
              {
                "step": "$\\dfrac{33\\,\\frac{1}{3}}{100} = \\dfrac{100/3}{100} = \\dfrac{100}{3}\\times\\dfrac{1}{100} = \\dfrac{1}{3}$.",
                "reason": "invert-and-multiply, then cancelling the common divisor $100$"
              },
              {
                "step": "$\\dfrac{1}{3}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $87\\,\\frac{1}{2}\\%$ as a fraction in lowest terms.",
              "answer": "7/8",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The percent $87\\,\\frac{1}{2}\\%$ equals $\\dfrac{87\\,\\frac{1}{2}}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$87\\,\\frac{1}{2} = \\dfrac{175}{2}$.",
                  "reason": "writing the mixed number as an improper fraction"
                },
                {
                  "step": "$\\dfrac{175/2}{100} = \\dfrac{175}{2}\\times\\dfrac{1}{100} = \\dfrac{175}{200} = \\dfrac{7}{8}$.",
                  "reason": "invert-and-multiply, then cancelling the common divisor $25$"
                },
                {
                  "step": "$\\dfrac{7}{8}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Write $6\\,\\frac{1}{4}\\%$ as a fraction in lowest terms.",
              "answer": "1/16",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The percent $6\\,\\frac{1}{4}\\%$ equals $\\dfrac{6\\,\\frac{1}{4}}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$6\\,\\frac{1}{4} = \\dfrac{25}{4}$.",
                  "reason": "writing the mixed number as an improper fraction"
                },
                {
                  "step": "$\\dfrac{25/4}{100} = \\dfrac{25}{4}\\times\\dfrac{1}{100} = \\dfrac{25}{400} = \\dfrac{1}{16}$.",
                  "reason": "invert-and-multiply, then cancelling the common divisor $25$"
                },
                {
                  "step": "$\\dfrac{1}{16}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Write $16\\,\\frac{2}{3}\\%$ as a fraction in lowest terms.",
              "answer": "1/6",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The percent $16\\,\\frac{2}{3}\\%$ equals $\\dfrac{16\\,\\frac{2}{3}}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$16\\,\\frac{2}{3} = \\dfrac{50}{3}$.",
                  "reason": "writing the mixed number as an improper fraction"
                },
                {
                  "step": "$\\dfrac{50/3}{100} = \\dfrac{50}{3}\\times\\dfrac{1}{100} = \\dfrac{50}{300} = \\dfrac{1}{6}$.",
                  "reason": "invert-and-multiply, then cancelling the common divisor $50$"
                },
                {
                  "step": "$\\dfrac{1}{6}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{5}{16}$ as a percent.",
            "lines": [
              {
                "step": "Let $\\dfrac{5}{16}=C\\%$.",
                "reason": "a percent is a number, so you can set it equal to an unknown"
              },
              {
                "step": "$C\\%=C\\times\\dfrac{1}{100}$.",
                "reason": "the definition of percent"
              },
              {
                "step": "So $C = \\dfrac{5}{16}\\times100$.",
                "reason": "multiplying both sides by $100$"
              },
              {
                "step": "$C = \\dfrac{500}{16} = 31\\,\\dfrac{1}{4}$.",
                "reason": "multiplying, then simplifying to a mixed number"
              },
              {
                "step": "$31\\,\\dfrac{1}{4}\\%$.",
                "reason": "substituting the value of $C$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{7}{40}$ as a percent.",
              "answer": "17.5%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "Let $\\dfrac{7}{40}=C\\%$.",
                  "reason": "a percent is a number, so you can set it equal to an unknown"
                },
                {
                  "step": "$C\\%=C\\times\\dfrac{1}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "So $C=\\dfrac{7}{40}\\times100$.",
                  "reason": "multiplying both sides by $100$"
                },
                {
                  "step": "$C=\\dfrac{700}{40} = 17\\,\\dfrac{1}{2}$.",
                  "reason": "multiplying, then simplifying to a mixed number"
                },
                {
                  "step": "$17.5\\%$.",
                  "reason": "substituting the value of $C$"
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{9}{8}$ as a percent.",
              "answer": "112.5%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "Let $\\dfrac{9}{8}=C\\%$.",
                  "reason": "a percent is a number, so you can set it equal to an unknown"
                },
                {
                  "step": "$C\\%=C\\times\\dfrac{1}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "So $C=\\dfrac{9}{8}\\times100$.",
                  "reason": "multiplying both sides by $100$"
                },
                {
                  "step": "$C=\\dfrac{900}{8} = 112\\,\\dfrac{1}{2}$.",
                  "reason": "multiplying, then simplifying to a mixed number"
                },
                {
                  "step": "$112.5\\%$.",
                  "reason": "substituting the value of $C$"
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{7}{16}$ as a percent.",
              "answer": "43.75%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "Let $\\dfrac{7}{16}=C\\%$.",
                  "reason": "a percent is a number, so you can set it equal to an unknown"
                },
                {
                  "step": "$C\\%=C\\times\\dfrac{1}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "So $C=\\dfrac{7}{16}\\times100$.",
                  "reason": "multiplying both sides by $100$"
                },
                {
                  "step": "$C=\\dfrac{700}{16} = 43\\,\\dfrac{3}{4}$.",
                  "reason": "multiplying, then simplifying to a mixed number"
                },
                {
                  "step": "$43.75\\%$.",
                  "reason": "substituting the value of $C$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find what percent $45$ is of $70$.",
            "lines": [
              {
                "step": "Let $45 = N\\%\\times70$.",
                "reason": "the mathematical meaning of \"is ... of\""
              },
              {
                "step": "$N\\% = \\dfrac{45}{70}$.",
                "reason": "dividing both sides by $70$"
              },
              {
                "step": "$N = \\dfrac{45}{70}\\times100 = \\dfrac{4\\,500}{70} = 64\\,\\dfrac{2}{7}$.",
                "reason": "the definition of percent, then multiplying and simplifying"
              },
              {
                "step": "$64\\,\\dfrac{2}{7}\\%$.",
                "reason": "substituting the value of $N$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find what percent $18$ is of $84$.",
              "answer": "150/7%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "Let $18 = N\\%\\times84$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$N\\% = \\dfrac{18}{84}$.",
                  "reason": "dividing both sides by $84$"
                },
                {
                  "step": "$N = \\dfrac{18}{84}\\times100 = \\dfrac{1\\,800}{84} = 21\\,\\dfrac{3}{7}$.",
                  "reason": "the definition of percent, then multiplying and simplifying"
                },
                {
                  "step": "$\\dfrac{150}{7}\\%$.",
                  "reason": "substituting the value of $N$"
                }
              ]
            },
            {
              "prompt": "Find what percent $56$ is of $64$.",
              "answer": "87.5%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "Let $56 = N\\%\\times64$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$N\\% = \\dfrac{56}{64}$.",
                  "reason": "dividing both sides by $64$"
                },
                {
                  "step": "$N = \\dfrac{56}{64}\\times100 = \\dfrac{5\\,600}{64} = 87\\,\\dfrac{1}{2}$.",
                  "reason": "the definition of percent, then multiplying and simplifying"
                },
                {
                  "step": "$87.5\\%$.",
                  "reason": "substituting the value of $N$"
                }
              ]
            },
            {
              "prompt": "Find what percent $20$ is of $64$.",
              "answer": "31.25%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "Let $20 = N\\%\\times64$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$N\\% = \\dfrac{20}{64}$.",
                  "reason": "dividing both sides by $64$"
                },
                {
                  "step": "$N = \\dfrac{20}{64}\\times100 = \\dfrac{2\\,000}{64} = 31\\,\\dfrac{1}{4}$.",
                  "reason": "the definition of percent, then multiplying and simplifying"
                },
                {
                  "step": "$31.25\\%$.",
                  "reason": "substituting the value of $N$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $4\\,\\frac{1}{3}\\%$ as a fraction in lowest terms.",
            "lines": [
              {
                "step": "The percent $4\\,\\frac{1}{3}\\%$ equals $\\dfrac{4\\,\\frac{1}{3}}{100}$.",
                "reason": "the definition of percent"
              },
              {
                "step": "$4\\,\\frac{1}{3} = \\dfrac{13}{3}$.",
                "reason": "writing the mixed number as an improper fraction"
              },
              {
                "step": "$\\dfrac{13/3}{100} = \\dfrac{13}{3}\\times\\dfrac{1}{100} = \\dfrac{13}{300}$.",
                "reason": "invert-and-multiply"
              },
              {
                "step": "The fraction $\\dfrac{13}{300}$ is in lowest terms.",
                "reason": "no whole number greater than 1 divides both 13 and 300, so the fraction is already in lowest terms"
              },
              {
                "step": "$\\dfrac{13}{300}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $2\\,\\frac{3}{4}\\%$ as a fraction in lowest terms.",
              "answer": "11/400",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The percent $2\\,\\frac{3}{4}\\%$ equals $\\dfrac{2\\,\\frac{3}{4}}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$2\\,\\frac{3}{4} = \\dfrac{11}{4}$.",
                  "reason": "writing the mixed number as an improper fraction"
                },
                {
                  "step": "$\\dfrac{11/4}{100} = \\dfrac{11}{4}\\times\\dfrac{1}{100} = \\dfrac{11}{400}$.",
                  "reason": "invert-and-multiply"
                },
                {
                  "step": "The fraction $\\dfrac{11}{400}$ is in lowest terms.",
                  "reason": "no whole number greater than 1 divides both 11 and 400, so the fraction is already in lowest terms"
                },
                {
                  "step": "$\\dfrac{11}{400}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Write $5\\,\\frac{2}{3}\\%$ as a fraction in lowest terms.",
              "answer": "17/300",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The percent $5\\,\\frac{2}{3}\\%$ equals $\\dfrac{5\\,\\frac{2}{3}}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$5\\,\\frac{2}{3} = \\dfrac{17}{3}$.",
                  "reason": "writing the mixed number as an improper fraction"
                },
                {
                  "step": "$\\dfrac{17/3}{100} = \\dfrac{17}{3}\\times\\dfrac{1}{100} = \\dfrac{17}{300}$.",
                  "reason": "invert-and-multiply"
                },
                {
                  "step": "The fraction $\\dfrac{17}{300}$ is in lowest terms.",
                  "reason": "no whole number greater than 1 divides both 17 and 300, so the fraction is already in lowest terms"
                },
                {
                  "step": "$\\dfrac{17}{300}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Write $1\\,\\frac{1}{8}\\%$ as a fraction in lowest terms.",
              "answer": "9/800",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The percent $1\\,\\frac{1}{8}\\%$ equals $\\dfrac{1\\,\\frac{1}{8}}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$1\\,\\frac{1}{8} = \\dfrac{9}{8}$.",
                  "reason": "writing the mixed number as an improper fraction"
                },
                {
                  "step": "$\\dfrac{9/8}{100} = \\dfrac{9}{8}\\times\\dfrac{1}{100} = \\dfrac{9}{800}$.",
                  "reason": "invert-and-multiply"
                },
                {
                  "step": "The fraction $\\dfrac{9}{800}$ is in lowest terms.",
                  "reason": "no whole number greater than 1 divides both 9 and 800, so the fraction is already in lowest terms"
                },
                {
                  "step": "$\\dfrac{9}{800}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t20-k2",
      "forms": [
        {
          "example": {
            "problem": "Compute $45\\%$ of $70$.",
            "lines": [
              {
                "step": "Finding $45\\%$ of $70$ means computing $45\\%\\times70$.",
                "reason": "the meaning of a fraction of a quantity as multiplication"
              },
              {
                "step": "$45\\% = \\dfrac{45}{100}$.",
                "reason": "the definition of percent"
              },
              {
                "step": "$\\dfrac{45}{100}\\times70 = \\dfrac{3\\,150}{100} = 31.5$.",
                "reason": "multiplying the fraction by the whole number, then simplifying"
              },
              {
                "step": "$31.5$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $36\\%$ of $85$.",
              "answer": "30.6",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Finding $36\\%$ of $85$ means computing $36\\%\\times85$.",
                  "reason": "the meaning of a fraction of a quantity as multiplication"
                },
                {
                  "step": "$36\\% = \\dfrac{36}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$\\dfrac{36}{100}\\times85 = \\dfrac{3\\,060}{100} = 30.6$.",
                  "reason": "multiplying the fraction by the whole number, then simplifying"
                },
                {
                  "step": "$30.6$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $65\\%$ of $180$.",
              "answer": "117",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Finding $65\\%$ of $180$ means computing $65\\%\\times180$.",
                  "reason": "the meaning of a fraction of a quantity as multiplication"
                },
                {
                  "step": "$65\\% = \\dfrac{65}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$\\dfrac{65}{100}\\times180 = \\dfrac{11\\,700}{100} = 117$.",
                  "reason": "multiplying the fraction by the whole number, then simplifying"
                },
                {
                  "step": "$117$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $8\\%$ of $325$.",
              "answer": "26",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Finding $8\\%$ of $325$ means computing $8\\%\\times325$.",
                  "reason": "the meaning of a fraction of a quantity as multiplication"
                },
                {
                  "step": "$8\\% = \\dfrac{8}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$\\dfrac{8}{100}\\times325 = \\dfrac{2\\,600}{100} = 26$.",
                  "reason": "multiplying the fraction by the whole number, then simplifying"
                },
                {
                  "step": "$26$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the new quantity when a quantity of $84$ rises by $25\\%$.",
            "lines": [
              {
                "step": "A rise of $25\\%$ in $84$ gives $84+(25\\%\\times84)$.",
                "reason": "the meaning of a rise of a percent"
              },
              {
                "step": "$25\\%\\times84 = \\dfrac{25}{100}\\times84 = 21$.",
                "reason": "the definition of percent, then multiplying"
              },
              {
                "step": "$84+21=105$.",
                "reason": "adding the increase to the original quantity"
              },
              {
                "step": "$105$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the new quantity when a quantity of $70$ rises by $15\\%$.",
              "answer": "80.5",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "A rise of $15\\%$ in $70$ gives $70+(15\\%\\times70)$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "$15\\%\\times70 = \\dfrac{15}{100}\\times70 = 10.5$.",
                  "reason": "the definition of percent, then multiplying"
                },
                {
                  "step": "$70+10.5=80.5$.",
                  "reason": "adding the increase to the original quantity"
                },
                {
                  "step": "$80.5$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the new quantity when a quantity of $120$ rises by $8\\%$.",
              "answer": "129.6",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "A rise of $8\\%$ in $120$ gives $120+(8\\%\\times120)$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "$8\\%\\times120 = \\dfrac{8}{100}\\times120 = 9.6$.",
                  "reason": "the definition of percent, then multiplying"
                },
                {
                  "step": "$120+9.6=129.6$.",
                  "reason": "adding the increase to the original quantity"
                },
                {
                  "step": "$129.6$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the new quantity when a quantity of $350$ rises by $6\\%$.",
              "answer": "371",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "A rise of $6\\%$ in $350$ gives $350+(6\\%\\times350)$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "$6\\%\\times350 = \\dfrac{6}{100}\\times350 = 21$.",
                  "reason": "the definition of percent, then multiplying"
                },
                {
                  "step": "$350+21=371$.",
                  "reason": "adding the increase to the original quantity"
                },
                {
                  "step": "$371$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the new quantity when a quantity of $160$ falls by $35\\%$.",
            "lines": [
              {
                "step": "A fall of $35\\%$ in $160$ gives $160-(35\\%\\times160)$.",
                "reason": "the meaning of a fall of a percent"
              },
              {
                "step": "$35\\%\\times160 = \\dfrac{35}{100}\\times160 = 56$.",
                "reason": "the definition of percent, then multiplying"
              },
              {
                "step": "$160-56=104$.",
                "reason": "subtracting the decrease from the original quantity"
              },
              {
                "step": "$104$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the new quantity when a quantity of $80$ falls by $45\\%$.",
              "answer": "44",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "A fall of $45\\%$ in $80$ gives $80-(45\\%\\times80)$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "$45\\%\\times80 = \\dfrac{45}{100}\\times80 = 36$.",
                  "reason": "the definition of percent, then multiplying"
                },
                {
                  "step": "$80-36=44$.",
                  "reason": "subtracting the decrease from the original quantity"
                },
                {
                  "step": "$44$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the new quantity when a quantity of $550$ falls by $6\\%$.",
              "answer": "517",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "A fall of $6\\%$ in $550$ gives $550-(6\\%\\times550)$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "$6\\%\\times550 = \\dfrac{6}{100}\\times550 = 33$.",
                  "reason": "the definition of percent, then multiplying"
                },
                {
                  "step": "$550-33=517$.",
                  "reason": "subtracting the decrease from the original quantity"
                },
                {
                  "step": "$517$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the new quantity when a quantity of $75$ falls by $18\\%$.",
              "answer": "61.5",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "A fall of $18\\%$ in $75$ gives $75-(18\\%\\times75)$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "$18\\%\\times75 = \\dfrac{18}{100}\\times75 = 13.5$.",
                  "reason": "the definition of percent, then multiplying"
                },
                {
                  "step": "$75-13.5=61.5$.",
                  "reason": "subtracting the decrease from the original quantity"
                },
                {
                  "step": "$61.5$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t20-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the number $L$ so that $70$ is $45\\%$ of $L$.",
            "lines": [
              {
                "step": "$70 = 45\\%\\times L$.",
                "reason": "the mathematical meaning of \"is ... of\""
              },
              {
                "step": "$45\\% = \\dfrac{45}{100}$.",
                "reason": "the definition of percent"
              },
              {
                "step": "$L = 70\\div\\dfrac{45}{100} = 70\\times\\dfrac{100}{45}$.",
                "reason": "the definition of division, then invert-and-multiply"
              },
              {
                "step": "$L = \\dfrac{7\\,000}{45} = 155\\,\\dfrac{5}{9}$.",
                "reason": "multiplying, then simplifying"
              },
              {
                "step": "$155\\,\\dfrac{5}{9}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $L$ so that $40$ is $75\\%$ of $L$.",
              "answer": "53 1/3",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$40 = 75\\%\\times L$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$75\\% = \\dfrac{75}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$L = 40\\div\\dfrac{75}{100} = 40\\times\\dfrac{100}{75}$.",
                  "reason": "the definition of division, then invert-and-multiply"
                },
                {
                  "step": "$L = \\dfrac{4\\,000}{75} = 53\\,\\dfrac{1}{3}$.",
                  "reason": "multiplying, then simplifying"
                },
                {
                  "step": "$53\\,\\dfrac{1}{3}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the number $L$ so that $50$ is $85\\%$ of $L$.",
              "answer": "58 14/17",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$50 = 85\\%\\times L$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$85\\% = \\dfrac{85}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$L = 50\\div\\dfrac{85}{100} = 50\\times\\dfrac{100}{85}$.",
                  "reason": "the definition of division, then invert-and-multiply"
                },
                {
                  "step": "$L = \\dfrac{5\\,000}{85} = 58\\,\\dfrac{14}{17}$.",
                  "reason": "multiplying, then simplifying"
                },
                {
                  "step": "$58\\,\\dfrac{14}{17}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the number $L$ so that $24$ is $36\\%$ of $L$.",
              "answer": "66 2/3",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$24 = 36\\%\\times L$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$36\\% = \\dfrac{36}{100}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "$L = 24\\div\\dfrac{36}{100} = 24\\times\\dfrac{100}{36}$.",
                  "reason": "the definition of division, then invert-and-multiply"
                },
                {
                  "step": "$L = \\dfrac{2\\,400}{36} = 66\\,\\dfrac{2}{3}$.",
                  "reason": "multiplying, then simplifying"
                },
                {
                  "step": "$66\\,\\dfrac{2}{3}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $L$ for which $7$ is $26\\%$ of $L$. Give $L$ exactly, and give an approximate value using a nearby reference fraction for $26\\%$.",
            "lines": [
              {
                "step": "$7 = 26\\%\\times L$.",
                "reason": "the mathematical meaning of \"is ... of\""
              },
              {
                "step": "$L = 7\\div\\dfrac{26}{100} = 7\\times\\dfrac{100}{26} = \\dfrac{700}{26} = \\dfrac{350}{13} = 26\\,\\dfrac{12}{13}$.",
                "reason": "the definition of division, then invert-and-multiply"
              },
              {
                "step": "The percent $26\\%$ is close to the reference fraction $25\\%=\\dfrac{1}{4}$.",
                "reason": "replacing the given percent by a nearby reference fraction"
              },
              {
                "step": "So $7$ is close to $\\dfrac{1}{4}$ of $L$, and $L$ is close to $4\\times7=28$.",
                "reason": "the reference fraction gives an approximate value"
              },
              {
                "step": "$26\\,\\dfrac{12}{13}$, $28$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $L$ for which $42$ is $21\\%$ of $L$. Give $L$ exactly, and give an approximate value using the nearby reference fraction $\\dfrac{1}{5}$ for $21\\%$.",
              "answer": "200, 210",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "$42 = 21\\%\\times L$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$L = 42\\div\\dfrac{21}{100} = 42\\times\\dfrac{100}{21} = \\dfrac{4\\,200}{21} = 200$.",
                  "reason": "the definition of division, then invert-and-multiply"
                },
                {
                  "step": "The percent $21\\%$ is close to the reference fraction $20\\%=\\dfrac{1}{5}$.",
                  "reason": "replacing the given percent by a nearby reference fraction"
                },
                {
                  "step": "So $42$ is close to $\\dfrac{1}{5}$ of $L$, and $L$ is close to $5\\times42=210$.",
                  "reason": "the reference fraction gives an approximate value"
                },
                {
                  "step": "$200$, $210$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the number $L$ for which $111$ is $74\\%$ of $L$. Give $L$ exactly, and give an approximate value using the nearby reference fraction $\\dfrac{3}{4}$ for $74\\%$.",
              "answer": "150, 148",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "$111 = 74\\%\\times L$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$L = 111\\div\\dfrac{74}{100} = 111\\times\\dfrac{100}{74} = \\dfrac{11\\,100}{74} = 150$.",
                  "reason": "the definition of division, then invert-and-multiply"
                },
                {
                  "step": "The percent $74\\%$ is close to the reference fraction $75\\%=\\dfrac{3}{4}$.",
                  "reason": "replacing the given percent by a nearby reference fraction"
                },
                {
                  "step": "So $111$ is close to $\\dfrac{3}{4}$ of $L$, and $L$ is close to $111\\times\\dfrac{4}{3}=148$.",
                  "reason": "the reference fraction gives an approximate value"
                },
                {
                  "step": "$150$, $148$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the number $L$ for which $153$ is $51\\%$ of $L$. Give $L$ exactly, and give an approximate value using the nearby reference fraction $\\dfrac{1}{2}$ for $51\\%$.",
              "answer": "300, 306",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "$153 = 51\\%\\times L$.",
                  "reason": "the mathematical meaning of \"is ... of\""
                },
                {
                  "step": "$L = 153\\div\\dfrac{51}{100} = 153\\times\\dfrac{100}{51} = \\dfrac{15\\,300}{51} = 300$.",
                  "reason": "the definition of division, then invert-and-multiply"
                },
                {
                  "step": "The percent $51\\%$ is close to the reference fraction $50\\%=\\dfrac{1}{2}$.",
                  "reason": "replacing the given percent by a nearby reference fraction"
                },
                {
                  "step": "So $153$ is close to $\\dfrac{1}{2}$ of $L$, and $L$ is close to $2\\times 153=306$.",
                  "reason": "the reference fraction gives an approximate value"
                },
                {
                  "step": "$300$, $306$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t20-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether a price of $D$ dollars returns to $D$ dollars. It rises by $12\\%$, then falls by $12\\%$ the next day.",
            "lines": [
              {
                "step": "After the rise, the price is $D+(12\\%\\times D)$, which equals $(100\\%+12\\%)\\times D=112\\%\\times D$.",
                "reason": "the meaning of a rise of a percent, then the distributive law"
              },
              {
                "step": "After the fall, the price is $112\\%\\times D - 12\\%\\times(112\\%\\times D)$, which equals $(100\\%-12\\%)\\times(112\\%\\times D)=88\\%\\times112\\%\\times D$.",
                "reason": "the meaning of a fall of a percent, then the distributive law"
              },
              {
                "step": "$88\\%\\times112\\% = \\dfrac{9\\,856}{10\\,000}$, which is less than $1$.",
                "reason": "multiplying the two percents as fractions"
              },
              {
                "step": "So the price after both changes is less than $D$ dollars, and it does not return to $D$ dollars.",
                "reason": "combining the previous lines"
              },
              {
                "step": "No.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether a price of $D$ dollars returns to $D$ dollars. It rises by $15\\%$, then falls by $15\\%$ the next day.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "After the rise, the price is $D+(15\\%\\times D)$, which equals $(100\\%+15\\%)\\times D=115\\%\\times D$.",
                  "reason": "the meaning of a rise of a percent, then the distributive law"
                },
                {
                  "step": "After the fall, the price is $115\\%\\times D - 15\\%\\times(115\\%\\times D)$, which equals $(100\\%-15\\%)\\times(115\\%\\times D)=85\\%\\times115\\%\\times D$.",
                  "reason": "the meaning of a fall of a percent, then the distributive law"
                },
                {
                  "step": "$85\\%\\times115\\% = \\dfrac{9\\,775}{10\\,000}$, which is less than $1$.",
                  "reason": "multiplying the two percents as fractions"
                },
                {
                  "step": "So the price after both changes is less than $D$ dollars, and it does not return to $D$ dollars.",
                  "reason": "combining the previous lines"
                },
                {
                  "step": "No.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Decide whether a price of $D$ dollars returns to $D$ dollars. It rises by $20\\%$, then falls by $20\\%$ the next day.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "After the rise, the price is $D+(20\\%\\times D)$, which equals $(100\\%+20\\%)\\times D=120\\%\\times D$.",
                  "reason": "the meaning of a rise of a percent, then the distributive law"
                },
                {
                  "step": "After the fall, the price is $120\\%\\times D - 20\\%\\times(120\\%\\times D)$, which equals $(100\\%-20\\%)\\times(120\\%\\times D)=80\\%\\times120\\%\\times D$.",
                  "reason": "the meaning of a fall of a percent, then the distributive law"
                },
                {
                  "step": "$80\\%\\times120\\% = \\dfrac{9\\,600}{10\\,000}$, which is less than $1$.",
                  "reason": "multiplying the two percents as fractions"
                },
                {
                  "step": "So the price after both changes is less than $D$ dollars, and it does not return to $D$ dollars.",
                  "reason": "combining the previous lines"
                },
                {
                  "step": "No.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Decide whether a price of $D$ dollars returns to $D$ dollars. It rises by $25\\%$, then falls by $25\\%$ the next day.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "After the rise, the price is $D+(25\\%\\times D)$, which equals $(100\\%+25\\%)\\times D=125\\%\\times D$.",
                  "reason": "the meaning of a rise of a percent, then the distributive law"
                },
                {
                  "step": "After the fall, the price is $125\\%\\times D - 25\\%\\times(125\\%\\times D)$, which equals $(100\\%-25\\%)\\times(125\\%\\times D)=75\\%\\times125\\%\\times D$.",
                  "reason": "the meaning of a fall of a percent, then the distributive law"
                },
                {
                  "step": "$75\\%\\times125\\% = \\dfrac{9\\,375}{10\\,000}$, which is less than $1$.",
                  "reason": "multiplying the two percents as fractions"
                },
                {
                  "step": "So the price after both changes is less than $D$ dollars, and it does not return to $D$ dollars.",
                  "reason": "combining the previous lines"
                },
                {
                  "step": "No.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the percent $x$ by which a price must fall the next day to return exactly to $D$ dollars. The price first rises from $D$ dollars by $15\\%$.",
            "lines": [
              {
                "step": "After the rise, the price is $115\\%\\times D$.",
                "reason": "the meaning of a rise of a percent"
              },
              {
                "step": "A fall of $x\\%$ from this price gives $(100\\%-x\\%)\\times115\\%\\times D$.",
                "reason": "the meaning of a fall of a percent"
              },
              {
                "step": "The new price equals $D$ exactly when $(100-x)\\times115=10\\,000$.",
                "reason": "setting the new price equal to $D$, then multiplying both sides by $\\dfrac{10\\,000}{D}$"
              },
              {
                "step": "$11\\,500-115x=10\\,000$, so $115x=1\\,500$.",
                "reason": "the distributive law, then solving for $x$"
              },
              {
                "step": "$x=\\dfrac{1\\,500}{115}=\\dfrac{300}{23}=13\\,\\dfrac{1}{23}$.",
                "reason": "dividing, then simplifying to a mixed number"
              },
              {
                "step": "$\\dfrac{300}{23}\\%$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the percent a price must fall to return exactly to its original value, after it rises by $20\\%$.",
              "answer": "50/3%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "After the rise, the price is $120\\%\\times D$, for the original price $D$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "A fall of $x\\%$ from this price gives $(100\\%-x\\%)\\times120\\%\\times D$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "The new price equals $D$ exactly when $(100-x)\\times120=10\\,000$.",
                  "reason": "setting the new price equal to $D$, then multiplying both sides by $\\dfrac{10\\,000}{D}$"
                },
                {
                  "step": "$12\\,000-120x=10\\,000$, so $120x=2\\,000$.",
                  "reason": "the distributive law, then solving for $x$"
                },
                {
                  "step": "$x=\\dfrac{2\\,000}{120}=\\dfrac{50}{3}=16\\,\\dfrac{2}{3}$.",
                  "reason": "dividing, then simplifying to a mixed number"
                },
                {
                  "step": "$\\dfrac{50}{3}\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the percent a price must fall to return exactly to its original value, after it rises by $40\\%$.",
              "answer": "200/7%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "After the rise, the price is $140\\%\\times D$, for the original price $D$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "A fall of $x\\%$ from this price gives $(100\\%-x\\%)\\times140\\%\\times D$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "The new price equals $D$ exactly when $(100-x)\\times140=10\\,000$.",
                  "reason": "setting the new price equal to $D$, then multiplying both sides by $\\dfrac{10\\,000}{D}$"
                },
                {
                  "step": "$14\\,000-140x=10\\,000$, so $140x=4\\,000$.",
                  "reason": "the distributive law, then solving for $x$"
                },
                {
                  "step": "$x=\\dfrac{4\\,000}{140}=\\dfrac{200}{7}=28\\,\\dfrac{4}{7}$.",
                  "reason": "dividing, then simplifying to a mixed number"
                },
                {
                  "step": "$\\dfrac{200}{7}\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the percent a price must fall to return exactly to its original value, after it rises by $60\\%$.",
              "answer": "75/2%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "After the rise, the price is $160\\%\\times D$, for the original price $D$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "A fall of $x\\%$ from this price gives $(100\\%-x\\%)\\times160\\%\\times D$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "The new price equals $D$ exactly when $(100-x)\\times160=10\\,000$.",
                  "reason": "setting the new price equal to $D$, then multiplying both sides by $\\dfrac{10\\,000}{D}$"
                },
                {
                  "step": "$16\\,000-160x=10\\,000$, so $160x=6\\,000$.",
                  "reason": "the distributive law, then solving for $x$"
                },
                {
                  "step": "$x=\\dfrac{6\\,000}{160}=\\dfrac{75}{2}=37\\,\\dfrac{1}{2}$.",
                  "reason": "dividing, then simplifying to a mixed number"
                },
                {
                  "step": "$\\dfrac{75}{2}\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the percent $x$ by which a price must rise the next day to return exactly to $D$ dollars. The price first falls from $D$ dollars by $25\\%$.",
            "lines": [
              {
                "step": "After the fall, the price is $75\\%\\times D$.",
                "reason": "the meaning of a fall of a percent"
              },
              {
                "step": "A rise of $x\\%$ from this price gives $(100\\%+x\\%)\\times75\\%\\times D$.",
                "reason": "the meaning of a rise of a percent"
              },
              {
                "step": "The new price equals $D$ exactly when $(100+x)\\times75=10\\,000$.",
                "reason": "setting the new price equal to $D$, then multiplying both sides by $\\dfrac{10\\,000}{D}$"
              },
              {
                "step": "$7\\,500+75x=10\\,000$, so $75x=2\\,500$.",
                "reason": "the distributive law, then solving for $x$"
              },
              {
                "step": "$x=\\dfrac{2\\,500}{75}=\\dfrac{100}{3}=33\\,\\dfrac{1}{3}$.",
                "reason": "dividing, then simplifying to a mixed number"
              },
              {
                "step": "$\\dfrac{100}{3}\\%$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the percent a price must rise to return exactly to its original value, after it falls by $40\\%$.",
              "answer": "200/3%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "After the fall, the price is $60\\%\\times D$, for the original price $D$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "A rise of $x\\%$ from this price gives $(100\\%+x\\%)\\times60\\%\\times D$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "The new price equals $D$ exactly when $(100+x)\\times60=10\\,000$.",
                  "reason": "setting the new price equal to $D$, then multiplying both sides by $\\dfrac{10\\,000}{D}$"
                },
                {
                  "step": "$6\\,000+60x=10\\,000$, so $60x=4\\,000$.",
                  "reason": "the distributive law, then solving for $x$"
                },
                {
                  "step": "$x=\\dfrac{4\\,000}{60}=\\dfrac{200}{3}=66\\,\\dfrac{2}{3}$.",
                  "reason": "dividing, then simplifying to a mixed number"
                },
                {
                  "step": "$\\dfrac{200}{3}\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the percent a price must rise to return exactly to its original value, after it falls by $15\\%$.",
              "answer": "300/17%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "After the fall, the price is $85\\%\\times D$, for the original price $D$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "A rise of $x\\%$ from this price gives $(100\\%+x\\%)\\times85\\%\\times D$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "The new price equals $D$ exactly when $(100+x)\\times85=10\\,000$.",
                  "reason": "setting the new price equal to $D$, then multiplying both sides by $\\dfrac{10\\,000}{D}$"
                },
                {
                  "step": "$8\\,500+85x=10\\,000$, so $85x=1\\,500$.",
                  "reason": "the distributive law, then solving for $x$"
                },
                {
                  "step": "$x=\\dfrac{1\\,500}{85}=\\dfrac{300}{17}=17\\,\\dfrac{11}{17}$.",
                  "reason": "dividing, then simplifying to a mixed number"
                },
                {
                  "step": "$\\dfrac{300}{17}\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the percent a price must rise to return exactly to its original value, after it falls by $12\\%$.",
              "answer": "150/11%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "After the fall, the price is $88\\%\\times D$, for the original price $D$.",
                  "reason": "the meaning of a fall of a percent"
                },
                {
                  "step": "A rise of $x\\%$ from this price gives $(100\\%+x\\%)\\times88\\%\\times D$.",
                  "reason": "the meaning of a rise of a percent"
                },
                {
                  "step": "The new price equals $D$ exactly when $(100+x)\\times88=10\\,000$.",
                  "reason": "setting the new price equal to $D$, then multiplying both sides by $\\dfrac{10\\,000}{D}$"
                },
                {
                  "step": "$8\\,800+88x=10\\,000$, so $88x=1\\,200$.",
                  "reason": "the distributive law, then solving for $x$"
                },
                {
                  "step": "$x=\\dfrac{1\\,200}{88}=\\dfrac{150}{11}=13\\,\\dfrac{7}{11}$.",
                  "reason": "dividing, then simplifying to a mixed number"
                },
                {
                  "step": "$\\dfrac{150}{11}\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the new price when a price of $400$ dollars rises by $20\\%$, then falls by $20\\%$ the next day.",
            "lines": [
              {
                "step": "After the rise, the price is $400+(20\\%\\times400)=400+80=480$ dollars.",
                "reason": "the meaning of a rise of a percent, then the definition of percent"
              },
              {
                "step": "After the fall, the price is $480-(20\\%\\times480)=480-96=384$ dollars.",
                "reason": "the meaning of a fall of a percent, then the definition of percent"
              },
              {
                "step": "$384$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the new price when a price of $300$ dollars rises by $30\\%$, then falls by $30\\%$ the next day.",
              "answer": "273",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "After the rise, the price is $300+(30\\%\\times300)=300+90=390$ dollars.",
                  "reason": "the meaning of a rise of a percent, then the definition of percent"
                },
                {
                  "step": "After the fall, the price is $390-(30\\%\\times390)=390-117=273$ dollars.",
                  "reason": "the meaning of a fall of a percent, then the definition of percent"
                },
                {
                  "step": "$273$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the new price when a price of $550$ dollars rises by $8\\%$, then falls by $8\\%$ the next day.",
              "answer": "546.48",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "After the rise, the price is $550+(8\\%\\times550)=550+44=594$ dollars.",
                  "reason": "the meaning of a rise of a percent, then the definition of percent"
                },
                {
                  "step": "After the fall, the price is $594-(8\\%\\times594)=594-47.52=546.48$ dollars.",
                  "reason": "the meaning of a fall of a percent, then the definition of percent"
                },
                {
                  "step": "$546.48$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the new price when a price of $700$ dollars rises by $5\\%$, then falls by $5\\%$ the next day.",
              "answer": "698.25",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "After the rise, the price is $700+(5\\%\\times700)=700+35=735$ dollars.",
                  "reason": "the meaning of a rise of a percent, then the definition of percent"
                },
                {
                  "step": "After the fall, the price is $735-(5\\%\\times735)=735-36.75=698.25$ dollars.",
                  "reason": "the meaning of a fall of a percent, then the definition of percent"
                },
                {
                  "step": "$698.25$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the new price when a price of $450$ dollars falls by $20\\%$, then rises by $20\\%$ the next day.",
            "lines": [
              {
                "step": "After the fall, the price is $450-(20\\%\\times450)=450-90=360$ dollars.",
                "reason": "the meaning of a fall of a percent, then the definition of percent"
              },
              {
                "step": "After the rise, the price is $360+(20\\%\\times360)=360+72=432$ dollars.",
                "reason": "the meaning of a rise of a percent, then the definition of percent"
              },
              {
                "step": "$432$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the new price when a price of $800$ dollars falls by $15\\%$, then rises by $15\\%$ the next day.",
              "answer": "782",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "After the fall, the price is $800-(15\\%\\times800)=800-120=680$ dollars.",
                  "reason": "the meaning of a fall of a percent, then the definition of percent"
                },
                {
                  "step": "After the rise, the price is $680+(15\\%\\times680)=680+102=782$ dollars.",
                  "reason": "the meaning of a rise of a percent, then the definition of percent"
                },
                {
                  "step": "$782$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the new price when a price of $120$ dollars falls by $25\\%$, then rises by $25\\%$ the next day.",
              "answer": "112.5",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "After the fall, the price is $120-(25\\%\\times120)=120-30=90$ dollars.",
                  "reason": "the meaning of a fall of a percent, then the definition of percent"
                },
                {
                  "step": "After the rise, the price is $90+(25\\%\\times90)=90+22.5=112.5$ dollars.",
                  "reason": "the meaning of a rise of a percent, then the definition of percent"
                },
                {
                  "step": "$112.5$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the new price when a price of $650$ dollars falls by $6\\%$, then rises by $6\\%$ the next day.",
              "answer": "647.66",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "After the fall, the price is $650-(6\\%\\times650)=650-39=611$ dollars.",
                  "reason": "the meaning of a fall of a percent, then the definition of percent"
                },
                {
                  "step": "After the rise, the price is $611+(6\\%\\times611)=611+36.66=647.66$ dollars.",
                  "reason": "the meaning of a rise of a percent, then the definition of percent"
                },
                {
                  "step": "$647.66$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t20-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the relative error of estimating $67\\,\\frac{1}{2}\\%$ by $\\dfrac{2}{3}$.",
            "lines": [
              {
                "step": "$67\\,\\frac{1}{2}\\% = \\dfrac{67\\,\\frac{1}{2}}{100}$, and $\\dfrac{2}{3} = \\dfrac{66\\,\\frac{2}{3}}{100}$, since $\\dfrac{2}{3}\\times100=66\\,\\frac{2}{3}$.",
                "reason": "the definition of percent"
              },
              {
                "step": "The absolute error is $67\\,\\frac{1}{2}\\%-66\\,\\frac{2}{3}\\%=\\dfrac{5}{6}\\%$.",
                "reason": "subtracting the two percents"
              },
              {
                "step": "The relative error is $\\dfrac{5/6\\%}{67\\,\\frac{1}{2}\\%}$.",
                "reason": "the definition of relative error"
              },
              {
                "step": "$\\dfrac{5/6}{67\\,\\frac{1}{2}}=\\dfrac{5}{6}\\times\\dfrac{2}{135}=\\dfrac{10}{810}=\\dfrac{1}{81}$.",
                "reason": "invert-and-multiply, then cancelling"
              },
              {
                "step": "The relative error is $1\\,\\dfrac{19}{81}\\%$.",
                "reason": "converting $\\dfrac{1}{81}$ to a percent"
              },
              {
                "step": "$1\\,\\dfrac{19}{81}\\%$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the relative error of estimating $12\\,\\frac{1}{2}\\%$ by $\\dfrac{1}{9}$.",
              "answer": "100/9%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "$12\\,\\frac{1}{2}\\% = \\dfrac{12\\,\\frac{1}{2}}{100}$, and $\\dfrac{1}{9} = \\dfrac{11\\,\\frac{1}{9}}{100}$, since $\\dfrac{1}{9}\\times100=11\\,\\frac{1}{9}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "The absolute error is $12\\,\\frac{1}{2}\\%-11\\,\\frac{1}{9}\\%=\\dfrac{25}{18}\\%$.",
                  "reason": "subtracting the two percents"
                },
                {
                  "step": "The relative error is $\\dfrac{25/18\\%}{12\\,\\frac{1}{2}\\%}$.",
                  "reason": "the definition of relative error"
                },
                {
                  "step": "$\\dfrac{25/18}{12\\,\\frac{1}{2}}=\\dfrac{25}{18}\\times\\dfrac{2}{25}=\\dfrac{50}{450}=\\dfrac{1}{9}$.",
                  "reason": "invert-and-multiply, then cancelling"
                },
                {
                  "step": "The relative error is $\\dfrac{100}{9}\\%$.",
                  "reason": "converting $\\dfrac{1}{9}$ to a percent"
                },
                {
                  "step": "$\\dfrac{100}{9}\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the relative error of estimating $62\\,\\frac{1}{2}\\%$ by $\\dfrac{3}{5}$.",
              "answer": "4%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "$62\\,\\frac{1}{2}\\% = \\dfrac{62\\,\\frac{1}{2}}{100}$, and $\\dfrac{3}{5} = \\dfrac{60}{100}$, since $\\dfrac{3}{5}\\times100=60$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "The absolute error is $62\\,\\frac{1}{2}\\%-60\\%=\\dfrac{5}{2}\\%$.",
                  "reason": "subtracting the two percents"
                },
                {
                  "step": "The relative error is $\\dfrac{5/2\\%}{62\\,\\frac{1}{2}\\%}$.",
                  "reason": "the definition of relative error"
                },
                {
                  "step": "$\\dfrac{5/2}{62\\,\\frac{1}{2}}=\\dfrac{5}{2}\\times\\dfrac{2}{125}=\\dfrac{10}{250}=\\dfrac{1}{25}$.",
                  "reason": "invert-and-multiply, then cancelling"
                },
                {
                  "step": "The relative error is $4\\%$.",
                  "reason": "converting $\\dfrac{1}{25}$ to a percent"
                },
                {
                  "step": "$4\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the relative error of estimating $87\\,\\frac{1}{2}\\%$ by $\\dfrac{6}{7}$.",
              "answer": "100/49%",
              "form": "Answer as a percent, as in 25/6%.",
              "lines": [
                {
                  "step": "$87\\,\\frac{1}{2}\\% = \\dfrac{87\\,\\frac{1}{2}}{100}$, and $\\dfrac{6}{7} = \\dfrac{85\\,\\frac{5}{7}}{100}$, since $\\dfrac{6}{7}\\times100=85\\,\\frac{5}{7}$.",
                  "reason": "the definition of percent"
                },
                {
                  "step": "The absolute error is $87\\,\\frac{1}{2}\\%-85\\,\\frac{5}{7}\\%=\\dfrac{25}{14}\\%$.",
                  "reason": "subtracting the two percents"
                },
                {
                  "step": "The relative error is $\\dfrac{25/14\\%}{87\\,\\frac{1}{2}\\%}$.",
                  "reason": "the definition of relative error"
                },
                {
                  "step": "$\\dfrac{25/14}{87\\,\\frac{1}{2}}=\\dfrac{25}{14}\\times\\dfrac{2}{175}=\\dfrac{50}{2\\,450}=\\dfrac{1}{49}$.",
                  "reason": "invert-and-multiply, then cancelling"
                },
                {
                  "step": "The relative error is $\\dfrac{100}{49}\\%$.",
                  "reason": "converting $\\dfrac{1}{49}$ to a percent"
                },
                {
                  "step": "$\\dfrac{100}{49}\\%$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t20-k6",
      "forms": [
        {
          "example": {
            "problem": "Place $205\\%$.",
            "figure": {
              "file": "place:line:205%",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "$205\\%=\\frac{205}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{205}{100}=2.05$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 0 and 5 hundredths follow it, so the mark lies short of the first cut of the unit from $2$ to $3$, between $2$ and $2.1$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:205%",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 205% marked, between 2 and 3."
                }
              },
              {
                "step": "$2.05$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:205%",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 205% lies at 2.05, in the tenth from 2 to 2.1, between 2 and 3."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $7\\%$.",
              "answer": "7%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$7\\%=\\frac{7}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{7}{100}=0.07$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 0 and 7 hundredths follow it, so the mark lies short of the first cut of the unit from $0$ to $1$, between $0$ and $0.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.07$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:7%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 7% lies at 0.07, in the tenth from 0 to 0.1, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $104\\%$.",
              "answer": "104%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$104\\%=\\frac{104}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{104}{100}=1.04$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 0 and 4 hundredths follow it, so the mark lies short of the first cut of the unit from $1$ to $2$, between $1$ and $1.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.04$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:104%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 104% lies at 1.04, in the tenth from 1 to 1.1, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $309\\%$.",
              "answer": "309%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$309\\%=\\frac{309}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{309}{100}=3.09$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 0 and 9 hundredths follow it, so the mark lies short of the first cut of the unit from $3$ to $4$, between $3$ and $3.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.09$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:309%",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 309% lies at 3.09, in the tenth from 3 to 3.1, between 3 and 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $1.5$.",
            "figure": {
              "file": "place:line:1.5",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $1.5$ is 1, so the mark lies between 1 and 2.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.5=\\frac{5}{10}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 5 and no hundredths follow it, so the mark is the 5th cut of the unit from $1$ to $2$, at $1.5$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:1.5",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 1.5 marked, between 1 and 2."
                }
              },
              {
                "step": "$1.5$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:1.5",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.5 lies at 1.5, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.3$.",
              "answer": "0.3",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.3$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.3=\\frac{3}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 3 and no hundredths follow it, so the mark is the 3rd cut of the unit from $0$ to $1$, at $0.3$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.3$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.3",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.3 lies at 0.3, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $2.7$.",
              "answer": "2.7",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $2.7$ is 2, so the mark lies between 2 and 3.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.7=\\frac{7}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and no hundredths follow it, so the mark is the 7th cut of the unit from $2$ to $3$, at $2.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.7$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:2.7",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.7 lies at 2.7, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $4.2$.",
              "answer": "4.2",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $4.2$ is 4, so the mark lies between 4 and 5.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.2=\\frac{2}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 2 and no hundredths follow it, so the mark is the 2nd cut of the unit from $4$ to $5$, at $4.2$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$4.2$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:4.2",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 4.2 lies at 4.2, between 4 and 5."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $165\\%$.",
            "figure": {
              "file": "place:line:165%",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$165\\%=\\frac{165}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{165}{100}=1.65$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 6 and 5 hundredths follow it, so the mark lies past the 6th cut and short of the next, between $1.6$ and $1.7$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:165%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 165% marked, between 1 and 2."
                }
              },
              {
                "step": "$1.65$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:165%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 165% lies at 1.65, in the tenth from 1.6 to 1.7, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $42\\%$.",
              "answer": "42%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$42\\%=\\frac{42}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{42}{100}=0.42$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 4 and 2 hundredths follow it, so the mark lies past the 4th cut and short of the next, between $0.4$ and $0.5$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.42$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:42%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 42% lies at 0.42, in the tenth from 0.4 to 0.5, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $236\\%$.",
              "answer": "236%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$236\\%=\\frac{236}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{236}{100}=2.36$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 3 and 6 hundredths follow it, so the mark lies past the 3rd cut and short of the next, between $2.3$ and $2.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.36$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:236%",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 236% lies at 2.36, in the tenth from 2.3 to 2.4, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $76\\%$.",
              "answer": "76%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$76\\%=\\frac{76}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{76}{100}=0.76$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 7 and 6 hundredths follow it, so the mark lies past the 7th cut and short of the next, between $0.7$ and $0.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.76$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:76%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 76% lies at 0.76, in the tenth from 0.7 to 0.8, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $230\\%$.",
            "figure": {
              "file": "place:line:230%",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "$230\\%=\\frac{230}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{230}{100}=2.3$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 3 and no hundredths follow it, so the mark is the 3rd cut of the unit from $2$ to $3$, at $2.3$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:230%",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 230% marked, between 2 and 3."
                }
              },
              {
                "step": "$2.3$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:230%",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 230% lies at 2.3, between 2 and 3."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $40\\%$.",
              "answer": "40%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$40\\%=\\frac{40}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{40}{100}=0.4$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 4 and no hundredths follow it, so the mark is the 4th cut of the unit from $0$ to $1$, at $0.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.4$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:40%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 40% lies at 0.4, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $190\\%$.",
              "answer": "190%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$190\\%=\\frac{190}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{190}{100}=1.9$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 9 and no hundredths follow it, so the mark is the 9th cut of the unit from $1$ to $2$, at $1.9$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.9$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:190%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 190% lies at 1.9, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $310\\%$.",
              "answer": "310%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$310\\%=\\frac{310}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{310}{100}=3.1$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 1 and no hundredths follow it, so the mark is the 1st cut of the unit from $3$ to $4$, at $3.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.1$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:310%",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 310% lies at 3.1, between 3 and 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $3.04$.",
            "figure": {
              "file": "place:line:3.04",
              "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $3.04$ is 3, so the mark lies between 3 and 4.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.04=\\frac{4}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 0 and 4 hundredths follow it, so the mark lies short of the first cut of the unit from $3$ to $4$, between $3$ and $3.1$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:3.04",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, with 3.04 marked, between 3 and 4."
                }
              },
              {
                "step": "$3.04$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:3.04",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.04 lies at 3.04, in the tenth from 3 to 3.1, between 3 and 4."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.08$.",
              "answer": "0.08",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.08$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.08=\\frac{8}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 0 and 8 hundredths follow it, so the mark lies short of the first cut of the unit from $0$ to $1$, between $0$ and $0.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.08$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.08",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.08 lies at 0.08, in the tenth from 0 to 0.1, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $1.02$.",
              "answer": "1.02",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.02$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.02=\\frac{2}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 0 and 2 hundredths follow it, so the mark lies short of the first cut of the unit from $1$ to $2$, between $1$ and $1.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.02$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.02",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.02 lies at 1.02, in the tenth from 1 to 1.1, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $4.06$.",
              "answer": "4.06",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $4.06$ is 4, so the mark lies between 4 and 5.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.06=\\frac{6}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 0 and 6 hundredths follow it, so the mark lies short of the first cut of the unit from $4$ to $5$, between $4$ and $4.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$4.06$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:4.06",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 4.06 lies at 4.06, in the tenth from 4 to 4.1, between 4 and 5."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $1.85$.",
            "figure": {
              "file": "place:line:1.85",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $1.85$ is 1, so the mark lies between 1 and 2.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.85=\\frac{85}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 8 and 5 hundredths follow it, so the mark lies past the 8th cut and short of the next, between $1.8$ and $1.9$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:1.85",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 1.85 marked, between 1 and 2."
                }
              },
              {
                "step": "$1.85$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:1.85",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.85 lies at 1.85, in the tenth from 1.8 to 1.9, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.62$.",
              "answer": "0.62",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.62$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.62=\\frac{62}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 6 and 2 hundredths follow it, so the mark lies past the 6th cut and short of the next, between $0.6$ and $0.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.62$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.62",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.62 lies at 0.62, in the tenth from 0.6 to 0.7, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $3.47$.",
              "answer": "3.47",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $3.47$ is 3, so the mark lies between 3 and 4.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.47=\\frac{47}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 4 and 7 hundredths follow it, so the mark lies past the 4th cut and short of the next, between $3.4$ and $3.5$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.47$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:3.47",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.47 lies at 3.47, in the tenth from 3.4 to 3.5, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $2.29$.",
              "answer": "2.29",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $2.29$ is 2, so the mark lies between 2 and 3.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.29=\\frac{29}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 2 and 9 hundredths follow it, so the mark lies past the 2nd cut and short of the next, between $2.2$ and $2.3$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.29$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:2.29",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.29 lies at 2.29, in the tenth from 2.2 to 2.3, between 2 and 3."
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
      "id": "t20-p1",
      "method": "direct proof",
      "statement": "Let $N$ be a fraction, and let $Q$ be a quantity. Then $N\\%$ of $Q$ is the total of $N$ parts when $Q$ splits into $100$ equal parts.",
      "idea": "Taking a percent of a quantity is multiplication by a complex fraction. By the meaning of fraction multiplication, this gives copies of one hundredth of the quantity.",
      "lines": [
        {
          "line": "The quantity $N\\%$ of $Q$ equals $N\\%\\times Q$.",
          "reason": "the meaning of a fraction of a quantity as multiplication"
        },
        {
          "line": "This equals $\\dfrac{N}{100}\\times Q$.",
          "reason": "the definition of percent"
        },
        {
          "line": "This equals $N\\times\\left(\\dfrac{1}{100}\\times Q\\right)$.",
          "reason": "the associative law of multiplication"
        },
        {
          "line": "The product $\\dfrac{1}{100}\\times Q$ is one part when $Q$ splits into $100$ equal parts.",
          "reason": "the meaning of a unit fraction times a quantity"
        },
        {
          "line": "So $N\\times\\left(\\dfrac{1}{100}\\times Q\\right)$ is the total of $N$ parts when $Q$ splits into $100$ equal parts.",
          "reason": "multiplying a quantity by a fraction gives that many copies of it"
        },
        {
          "line": "So $N\\%$ of $Q$ is the total of $N$ parts when $Q$ splits into $100$ equal parts.",
          "reason": "combining the previous lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t20-s1",
      "statement": "For every nonzero fraction $N$, $N\\%\\times100 = N$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "The percent $N\\%$ equals $\\dfrac{N}{100}$.",
            "reason": "the definition of percent"
          },
          {
            "line": "So $N\\%\\times100$ equals $\\dfrac{N}{100}\\times100$.",
            "reason": "substituting the value of $N\\%$"
          },
          {
            "line": "This equals $N\\times\\left(\\dfrac{1}{100}\\times100\\right)$.",
            "reason": "the associative law of multiplication"
          },
          {
            "line": "The product $\\dfrac{1}{100}\\times100$ equals $1$.",
            "reason": "a unit fraction times its own denominator equals one"
          },
          {
            "line": "So $N\\times\\left(\\dfrac{1}{100}\\times100\\right) = N\\times1 = N$.",
            "reason": "multiplying a number by one leaves it unchanged"
          },
          {
            "line": "So $N\\%\\times100=N$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t20-s2",
      "statement": "Let $Q$ be a quantity and $r\\%$ a percent with $0<r\\%<100\\%$. A rise of $r\\%$ in $Q$ followed by a fall of the same $r\\%$ gives a quantity less than $Q$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "A rise of $r\\%$ in $Q$ gives $Q+(r\\%\\times Q)$, which equals $(100\\%+r\\%)\\times Q$.",
            "reason": "the meaning of a rise of a percent, then the distributive law"
          },
          {
            "line": "A fall of $r\\%$ in $(100\\%+r\\%)\\times Q$ gives $(100\\%-r\\%)\\times(100\\%+r\\%)\\times Q$.",
            "reason": "the meaning of a fall of a percent, then the distributive law"
          },
          {
            "line": "This product equals $100\\%\\times100\\% + 100\\%\\times r\\% - r\\%\\times100\\% - r\\%\\times r\\%$.",
            "reason": "the distributive law, applied twice"
          },
          {
            "line": "The middle two terms are equal, so they cancel. That leaves $100\\%\\times100\\% - r\\%\\times r\\% = 1-(r\\%)^2$.",
            "reason": "the commutative law of multiplication, then simplifying"
          },
          {
            "line": "$(r\\%)^2>0$, since $r\\%$ is positive.",
            "reason": "a positive number times itself is positive"
          },
          {
            "line": "So $1-(r\\%)^2 < 1$, and therefore $(100\\%-r\\%)\\times(100\\%+r\\%)\\times Q < Q$.",
            "reason": "subtracting a positive number from a number gives a result less than that number, then multiplying both sides by $Q$"
          },
          {
            "line": "So a rise of $r\\%$ in $Q$, then a fall of the same $r\\%$, gives a quantity less than $Q$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t20-s3",
      "statement": "Let $V>0$ be a correct value and $E$ an estimate with $0<E<V$. The relative error of estimating $V$ by $E$ equals $100\\%$ minus the percent $E$ is of $V$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "Since $E<V$, the absolute error is $V-E$, so the relative error is $\\dfrac{V-E}{V}$.",
            "reason": "the definition of relative error"
          },
          {
            "line": "This equals $\\dfrac{V}{V}-\\dfrac{E}{V}$, which equals $1-\\dfrac{E}{V}$.",
            "reason": "division distributes over subtraction"
          },
          {
            "line": "As a percent, $1-\\dfrac{E}{V}$ equals $100\\%-\\dfrac{E}{V}\\times100\\%$.",
            "reason": "the distributive law, multiplying by $100$ and writing the result in percent"
          },
          {
            "line": "The number $\\dfrac{E}{V}\\times100\\%$ is exactly the percent $E$ is of $V$.",
            "reason": "the definition of what percent one number is of another"
          },
          {
            "line": "So the relative error of estimating $V$ by $E$ equals $100\\%$ minus the percent $E$ is of $V$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    }
  ]
}
