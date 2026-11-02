// Decimal Expansions of Fractions: every fraction is a finite or repeating decimal, found by long division.
export default {
  "number": 37,
  "manyParts": false,
  "bare": {
    "prompt": "Find the decimal expansion of $\\frac{9}{25}$.",
    "answer": "0.36",
    "form": "Answer as a finite decimal.",
    "solution": [
      "Find the decimal expansion of $\\frac{9}{25}$.",
      "The denominator $25=5^2$, so multiplying numerator and denominator by $2^2=4$ makes the denominator a power of 10.",
      "$\\frac{9}{25} = \\frac{9\\times 4}{25\\times 4} = \\frac{36}{100} = 0.36$.",
      "$0.36$."
    ]
  },
  "ideas": [
    {
      "name": "Decimal expansion of a fraction by making the denominator a power of 10",
      "concrete": "The fraction $\\frac{21}{8}$ equals $2+\\frac{5}{8}$, and $\\frac{5}{8} = \\frac{5\\times 125}{8\\times 125} = \\frac{625}{1\\,000} = 0.625$, so $\\frac{21}{8}=2.625$.",
      "general": "Let $\\frac{m}{n}$ be a reduced proper fraction whose denominator's only prime divisors are 2 and 5. To find its decimal expansion, multiply numerator and denominator by a power of 2 or of 5. Choose the power that makes the denominator a power of 10. Then read off the decimal."
    },
    {
      "name": "Finding a repeating block via the pigeonhole principle on remainders",
      "concrete": "Each division-with-remainder by 3 has remainder 0, 1, or 2. So among every four consecutive divisions by 3 some remainder must repeat.",
      "general": "In the long division that gives the decimal expansion of $\\frac{m}{n}$, every division-with-remainder has the same divisor $n$. So among every $n+1$ consecutive such divisions some remainder repeats. From the first repeat onward, the divisions and their quotient digits repeat. So a repeating block appears within the first $n$ decimal digits and the period is at most $n-1$."
    },
    {
      "name": "Finite or repeating",
      "concrete": "The fraction $\\frac38$ equals the finite decimal $0.375$, and $\\frac13$ equals the repeating decimal $0.\\overline3$.",
      "general": "Every fraction is equal to a finite or a repeating decimal, called the fraction's **decimal expansion**."
    }
  ],
  "kinds": [
    {
      "id": "t37-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the decimal expansion of $\\frac{3}{16}$.",
            "lines": [
              {
                "step": "The denominator $16=2^4$, so multiplying numerator and denominator by $5^4=625$ makes the denominator a power of 10.",
                "reason": "since $2^4\\times 5^4=10^4$"
              },
              {
                "step": "$\\frac{3}{16} = \\frac{3\\times 625}{16\\times 625} = \\frac{1\\,875}{10\\,000} = 0.187\\,5$.",
                "reason": "placing the decimal point four digits from the right"
              },
              {
                "step": "$0.187\\,5$.",
                "reason": "restating the quotient as the decimal expansion"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the decimal expansion of $\\frac{1}{4}$.",
              "answer": "0.25",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The denominator $4=2^2$, so multiplying numerator and denominator by $5^2=25$ makes the denominator a power of 10.",
                  "reason": "since $2^2\\times 5^2=10^2$"
                },
                {
                  "step": "$\\frac{1}{4} = \\frac{1\\times 25}{4\\times 25} = \\frac{25}{100} = 0.25$.",
                  "reason": "placing the decimal point two digits from the right"
                },
                {
                  "step": "$0.25$.",
                  "reason": "restating the quotient as the decimal expansion"
                }
              ]
            },
            {
              "prompt": "Find the decimal expansion of $\\frac{9}{16}$.",
              "answer": "0.5625",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The denominator $16=2^4$, so multiplying numerator and denominator by $5^4=625$ makes the denominator a power of 10.",
                  "reason": "since $2^4\\times 5^4=10^4$"
                },
                {
                  "step": "$\\frac{9}{16} = \\frac{9\\times 625}{16\\times 625} = \\frac{5\\,625}{10\\,000} = 0.562\\,5$.",
                  "reason": "placing the decimal point four digits from the right"
                },
                {
                  "step": "$0.562\\,5$.",
                  "reason": "restating the quotient as the decimal expansion"
                }
              ]
            },
            {
              "prompt": "Find the decimal expansion of $\\frac{13}{32}$.",
              "answer": "0.40625",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The denominator $32=2^5$, so multiplying numerator and denominator by $5^5=3\\,125$ makes the denominator a power of 10.",
                  "reason": "since $2^5\\times 5^5=10^5$"
                },
                {
                  "step": "$\\frac{13}{32} = \\frac{13\\times 3\\,125}{32\\times 3\\,125} = \\frac{40\\,625}{100\\,000} = 0.406\\,25$.",
                  "reason": "placing the decimal point five digits from the right"
                },
                {
                  "step": "$0.406\\,25$.",
                  "reason": "restating the quotient as the decimal expansion"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the decimal expansion of $\\frac{21}{8}$.",
            "lines": [
              {
                "step": "Division-with-remainder gives $\\frac{21}{8} = 2+\\frac{5}{8}$, since $21=(2\\times 8)+5$.",
                "reason": "division-with-remainder of 21 by 8"
              },
              {
                "step": "The denominator $8=2^3$, so multiplying numerator and denominator of $\\frac{5}{8}$ by $5^3=125$ makes the denominator a power of 10.",
                "reason": "since $2^3\\times 5^3=10^3$"
              },
              {
                "step": "$\\frac{5}{8} = \\frac{5\\times 125}{8\\times 125} = \\frac{625}{1\\,000} = 0.625$.",
                "reason": "placing the decimal point three digits from the right"
              },
              {
                "step": "$2.625$.",
                "reason": "adding the integer part back to the decimal part"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the decimal expansion of $\\frac{13}{4}$.",
              "answer": "3.25",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Division-with-remainder gives $\\frac{13}{4} = 3+\\frac{1}{4}$, since $13=(3\\times 4)+1$.",
                  "reason": "division-with-remainder of 13 by 4"
                },
                {
                  "step": "The denominator $4=2^2$, so multiplying numerator and denominator of $\\frac{1}{4}$ by $5^2=25$ makes the denominator a power of 10.",
                  "reason": "since $2^2\\times 5^2=10^2$"
                },
                {
                  "step": "$\\frac{1}{4} = \\frac{1\\times 25}{4\\times 25} = \\frac{25}{100} = 0.25$.",
                  "reason": "placing the decimal point two digits from the right"
                },
                {
                  "step": "$3.25$.",
                  "reason": "adding the integer part back to the decimal part"
                }
              ]
            },
            {
              "prompt": "Find the decimal expansion of $\\frac{11}{4}$.",
              "answer": "2.75",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Division-with-remainder gives $\\frac{11}{4} = 2+\\frac{3}{4}$, since $11=(2\\times 4)+3$.",
                  "reason": "division-with-remainder of 11 by 4"
                },
                {
                  "step": "The denominator $4=2^2$, so multiplying numerator and denominator of $\\frac{3}{4}$ by $5^2=25$ makes the denominator a power of 10.",
                  "reason": "since $2^2\\times 5^2=10^2$"
                },
                {
                  "step": "$\\frac{3}{4} = \\frac{3\\times 25}{4\\times 25} = \\frac{75}{100} = 0.75$.",
                  "reason": "placing the decimal point two digits from the right"
                },
                {
                  "step": "$2.75$.",
                  "reason": "adding the integer part back to the decimal part"
                }
              ]
            },
            {
              "prompt": "Find the decimal expansion of $\\frac{37}{16}$.",
              "answer": "2.3125",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Division-with-remainder gives $\\frac{37}{16} = 2+\\frac{5}{16}$, since $37=(2\\times 16)+5$.",
                  "reason": "division-with-remainder of 37 by 16"
                },
                {
                  "step": "The denominator $16=2^4$, so multiplying numerator and denominator of $\\frac{5}{16}$ by $5^4=625$ makes the denominator a power of 10.",
                  "reason": "since $2^4\\times 5^4=10^4$"
                },
                {
                  "step": "$\\frac{5}{16} = \\frac{5\\times 625}{16\\times 625} = \\frac{3\\,125}{10\\,000} = 0.312\\,5$.",
                  "reason": "placing the decimal point four digits from the right"
                },
                {
                  "step": "$2.312\\,5$.",
                  "reason": "adding the integer part back to the decimal part"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t37-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the decimal expansion of $\\frac{1}{28}$.",
            "lines": [
              {
                "step": "Long-dividing 1 by 28 gives $1\\times 10=0\\times 28+10$, $10\\times 10=3\\times 28+16$, $16\\times 10=5\\times 28+20$, $20\\times 10=7\\times 28+4$, $4\\times 10=1\\times 28+12$, $12\\times 10=4\\times 28+8$, $8\\times 10=2\\times 28+24$, $24\\times 10=8\\times 28+16$.",
                "reason": "each step's remainder times 10 is the next step's dividend, by the long division algorithm"
              },
              {
                "step": "Only 28 remainders, 0 through 27, are possible for a division by 28. So among every 29 consecutive divisions some remainder must repeat.",
                "reason": "the pigeonhole principle"
              },
              {
                "step": "The remainder 16 appears at both the second and eighth division. So each division after the eighth repeats the matching division after the second.",
                "reason": "the long division algorithm produces the same next step whenever the remainder is the same"
              },
              {
                "step": "The quotient digits from the third digit onward repeat in blocks of six: 5, 7, 1, 4, 2, 8.",
                "reason": "the repeating divisions produce the same quotient digits"
              },
              {
                "step": "$0.03\\overline{571\\,428}$.",
                "reason": "the quotient of the long division gives the decimal digits, with the first two digits 0, 3 not repeating"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the decimal expansion of $\\frac{1}{52}$.",
              "answer": "0.01(923076)",
              "form": "Answer as a repeating decimal, the repeating block in brackets, as in 0.2(3).",
              "lines": [
                {
                  "step": "Long-dividing 1 by 52 gives $1\\times 10=0\\times 52+10$, $10\\times 10=1\\times 52+48$, $48\\times 10=9\\times 52+12$, $12\\times 10=2\\times 52+16$, $16\\times 10=3\\times 52+4$, $4\\times 10=0\\times 52+40$, $40\\times 10=7\\times 52+36$, $36\\times 10=6\\times 52+48$.",
                  "reason": "each step's remainder times 10 is the next step's dividend, by the long division algorithm"
                },
                {
                  "step": "Only 52 remainders, 0 through 51, are possible for a division by 52. So among every 53 consecutive divisions some remainder must repeat.",
                  "reason": "the pigeonhole principle"
                },
                {
                  "step": "The remainder 48 appears at both the second and eighth division. So each division after the eighth repeats the matching division after the second.",
                  "reason": "the long division algorithm produces the same next step whenever the remainder is the same"
                },
                {
                  "step": "The quotient digits from the third digit onward repeat in blocks of six: 9, 2, 3, 0, 7, 6.",
                  "reason": "the repeating divisions produce the same quotient digits"
                },
                {
                  "step": "$0.01\\overline{923\\,076}$.",
                  "reason": "the quotient of the long division gives the decimal digits, with the first two digits 0, 1 not repeating"
                }
              ]
            },
            {
              "prompt": "Find the decimal expansion of $\\frac{7}{44}$.",
              "answer": "0.15(90)",
              "form": "Answer as a repeating decimal, the repeating block in brackets, as in 0.2(3).",
              "lines": [
                {
                  "step": "Long-dividing 7 by 44 gives $7\\times 10=1\\times 44+26$, $26\\times 10=5\\times 44+40$, $40\\times 10=9\\times 44+4$, $4\\times 10=0\\times 44+40$.",
                  "reason": "each step's remainder times 10 is the next step's dividend, by the long division algorithm"
                },
                {
                  "step": "Only 44 remainders, 0 through 43, are possible for a division by 44. So among every 45 consecutive divisions some remainder must repeat.",
                  "reason": "the pigeonhole principle"
                },
                {
                  "step": "The remainder 40 appears at both the second and fourth division. So each division after the fourth repeats the matching division after the second.",
                  "reason": "the long division algorithm produces the same next step whenever the remainder is the same"
                },
                {
                  "step": "The quotient digits from the third digit onward repeat in blocks of two: 9, 0.",
                  "reason": "the repeating divisions produce the same quotient digits"
                },
                {
                  "step": "$0.15\\overline{90}$.",
                  "reason": "the quotient of the long division gives the decimal digits, with the first two digits 1, 5 not repeating"
                }
              ]
            },
            {
              "prompt": "Find the decimal expansion of $\\frac{5}{84}$.",
              "answer": "0.05(952380)",
              "form": "Answer as a repeating decimal, the repeating block in brackets, as in 0.2(3).",
              "lines": [
                {
                  "step": "Long-dividing 5 by 84 gives $5\\times 10=0\\times 84+50$, $50\\times 10=5\\times 84+80$, $80\\times 10=9\\times 84+44$, $44\\times 10=5\\times 84+20$, $20\\times 10=2\\times 84+32$, $32\\times 10=3\\times 84+68$, $68\\times 10=8\\times 84+8$, $8\\times 10=0\\times 84+80$.",
                  "reason": "each step's remainder times 10 is the next step's dividend, by the long division algorithm"
                },
                {
                  "step": "Only 84 remainders, 0 through 83, are possible for a division by 84. So among every 85 consecutive divisions some remainder must repeat.",
                  "reason": "the pigeonhole principle"
                },
                {
                  "step": "The remainder 80 appears at both the second and eighth division. So each division after the eighth repeats the matching division after the second.",
                  "reason": "the long division algorithm produces the same next step whenever the remainder is the same"
                },
                {
                  "step": "The quotient digits from the third digit onward repeat in blocks of six: 9, 5, 2, 3, 8, 0.",
                  "reason": "the repeating divisions produce the same quotient digits"
                },
                {
                  "step": "$0.05\\overline{952\\,380}$.",
                  "reason": "the quotient of the long division gives the decimal digits, with the first two digits 0, 5 not repeating"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t37-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $\\frac{5}{187}$ has a finite decimal expansion.",
            "lines": [
              {
                "step": "The denominator $187=11\\times 17$, and 5 and 187 share no common divisor greater than 1, so $\\frac{5}{187}$ is already reduced.",
                "reason": "checking the prime decomposition of 187 against the numerator 5"
              },
              {
                "step": "Both 11 and 17 are primes other than 2 and 5, so 187 is not of the form $2^k\\times 5^{\\ell}$.",
                "reason": "reading off the prime decomposition of 187"
              },
              {
                "step": "No.",
                "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\frac{4}{91}$ has a finite decimal expansion.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The denominator $91=7\\times 13$, and 4 and 91 share no common divisor greater than 1, so $\\frac{4}{91}$ is already reduced.",
                  "reason": "checking the prime decomposition of 91 against the numerator 4"
                },
                {
                  "step": "Both 7 and 13 are primes other than 2 and 5, so 91 is not of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 91"
                },
                {
                  "step": "No.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{9}{143}$ has a finite decimal expansion.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The denominator $143=11\\times 13$, and 9 and 143 share no common divisor greater than 1, so $\\frac{9}{143}$ is already reduced.",
                  "reason": "checking the prime decomposition of 143 against the numerator 9"
                },
                {
                  "step": "Both 11 and 13 are primes other than 2 and 5, so 143 is not of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 143"
                },
                {
                  "step": "No.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{6}{119}$ has a finite decimal expansion.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The denominator $119=7\\times 17$, and 6 and 119 share no common divisor greater than 1, so $\\frac{6}{119}$ is already reduced.",
                  "reason": "checking the prime decomposition of 119 against the numerator 6"
                },
                {
                  "step": "Both 7 and 17 are primes other than 2 and 5, so 119 is not of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 119"
                },
                {
                  "step": "No.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $\\frac{7}{80}$ has a finite decimal expansion.",
            "lines": [
              {
                "step": "The denominator $80=2^4\\times 5$, and 7 and 80 share no common divisor greater than 1, so $\\frac{7}{80}$ is already reduced.",
                "reason": "checking the prime decomposition of 80 against the numerator 7"
              },
              {
                "step": "The only primes in $2^4\\times 5$ are 2 and 5, so 80 is of the form $2^k\\times 5^{\\ell}$.",
                "reason": "reading off the prime decomposition of 80"
              },
              {
                "step": "Yes.",
                "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\frac{9}{160}$ has a finite decimal expansion.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The denominator $160=2^5\\times 5$, and 9 and 160 share no common divisor greater than 1, so $\\frac{9}{160}$ is already reduced.",
                  "reason": "checking the prime decomposition of 160 against the numerator 9"
                },
                {
                  "step": "The only primes in $2^5\\times 5$ are 2 and 5, so 160 is of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 160"
                },
                {
                  "step": "Yes.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{21}{200}$ has a finite decimal expansion.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The denominator $200=2^3\\times 5^2$, and 21 and 200 share no common divisor greater than 1, so $\\frac{21}{200}$ is already reduced.",
                  "reason": "checking the prime decomposition of 200 against the numerator 21"
                },
                {
                  "step": "The only primes in $2^3\\times 5^2$ are 2 and 5, so 200 is of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 200"
                },
                {
                  "step": "Yes.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{11}{250}$ has a finite decimal expansion.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The denominator $250=2\\times 5^3$, and 11 and 250 share no common divisor greater than 1, so $\\frac{11}{250}$ is already reduced.",
                  "reason": "checking the prime decomposition of 250 against the numerator 11"
                },
                {
                  "step": "The only primes in $2\\times 5^3$ are 2 and 5, so 250 is of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 250"
                },
                {
                  "step": "Yes.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $\\frac{39}{130}$ has a finite decimal expansion.",
            "lines": [
              {
                "step": "The numbers $39=3\\times 13$ and $130=2\\times 5\\times 13$ have greatest common divisor 13, so $\\frac{39}{130}=\\frac{3}{10}$.",
                "reason": "reducing $\\frac{39}{130}$ by the greatest common divisor of 39 and 130"
              },
              {
                "step": "The only primes in the reduced denominator $10=2\\times 5$ are 2 and 5, so 10 is of the form $2^k\\times 5^{\\ell}$.",
                "reason": "reading off the prime decomposition of 10"
              },
              {
                "step": "Yes.",
                "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\frac{77}{280}$ has a finite decimal expansion.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The numbers $77=7\\times 11$ and $280=2^3\\times 5\\times 7$ have greatest common divisor 7, so $\\frac{77}{280}=\\frac{11}{40}$.",
                  "reason": "reducing $\\frac{77}{280}$ by the greatest common divisor of 77 and 280"
                },
                {
                  "step": "The only primes in the reduced denominator $40=2^3\\times 5$ are 2 and 5, so 40 is of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 40"
                },
                {
                  "step": "Yes.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{27}{450}$ has a finite decimal expansion.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The numbers $27=3^3$ and $450=2\\times 3^2\\times 5^2$ have greatest common divisor 9, so $\\frac{27}{450}=\\frac{3}{50}$.",
                  "reason": "reducing $\\frac{27}{450}$ by the greatest common divisor of 27 and 450"
                },
                {
                  "step": "The only primes in the reduced denominator $50=2\\times 5^2$ are 2 and 5, so 50 is of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 50"
                },
                {
                  "step": "Yes.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{57}{380}$ has a finite decimal expansion.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The numbers $57=3\\times 19$ and $380=2^2\\times 5\\times 19$ have greatest common divisor 19, so $\\frac{57}{380}=\\frac{3}{20}$.",
                  "reason": "reducing $\\frac{57}{380}$ by the greatest common divisor of 57 and 380"
                },
                {
                  "step": "The only primes in the reduced denominator $20=2^2\\times 5$ are 2 and 5, so 20 is of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 20"
                },
                {
                  "step": "Yes.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $\\frac{35}{84}$ has a finite decimal expansion.",
            "lines": [
              {
                "step": "The numbers $35=5\\times 7$ and $84=2^2\\times 3\\times 7$ have greatest common divisor 7, so $\\frac{35}{84}=\\frac{5}{12}$.",
                "reason": "reducing $\\frac{35}{84}$ by the greatest common divisor of 35 and 84"
              },
              {
                "step": "The prime 3 in the reduced denominator $12=2^2\\times 3$ is other than 2 and 5, so 12 is not of the form $2^k\\times 5^{\\ell}$.",
                "reason": "reading off the prime decomposition of 12"
              },
              {
                "step": "No.",
                "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\frac{33}{198}$ has a finite decimal expansion.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The numbers $33=3\\times 11$ and $198=2\\times 3^2\\times 11$ have greatest common divisor 33, so $\\frac{33}{198}=\\frac{1}{6}$.",
                  "reason": "reducing $\\frac{33}{198}$ by the greatest common divisor of 33 and 198"
                },
                {
                  "step": "The prime 3 in the reduced denominator $6=2\\times 3$ is other than 2 and 5, so 6 is not of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 6"
                },
                {
                  "step": "No.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{24}{90}$ has a finite decimal expansion.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The numbers $24=2^3\\times 3$ and $90=2\\times 3^2\\times 5$ have greatest common divisor 6, so $\\frac{24}{90}=\\frac{4}{15}$.",
                  "reason": "reducing $\\frac{24}{90}$ by the greatest common divisor of 24 and 90"
                },
                {
                  "step": "The prime 3 in the reduced denominator $15=3\\times 5$ is other than 2 and 5, so 15 is not of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 15"
                },
                {
                  "step": "No.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{14}{63}$ has a finite decimal expansion.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The numbers $14=2\\times 7$ and $63=3^2\\times 7$ have greatest common divisor 7, so $\\frac{14}{63}=\\frac{2}{9}$.",
                  "reason": "reducing $\\frac{14}{63}$ by the greatest common divisor of 14 and 63"
                },
                {
                  "step": "The prime 3 in the reduced denominator $9=3^2$ is other than 2 and 5, so 9 is not of the form $2^k\\times 5^{\\ell}$.",
                  "reason": "reading off the prime decomposition of 9"
                },
                {
                  "step": "No.",
                  "reason": "a reduced fraction is a finite decimal exactly when its denominator's only prime divisors are 2 and 5"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t37-k4",
      "forms": [
        {
          "example": {
            "problem": "Compute the decimal equal to $\\frac{2.4}{75}$.",
            "lines": [
              {
                "step": "Multiplying numerator and denominator by 10 clears the decimal point: $\\frac{2.4}{75} = \\frac{24}{750}$.",
                "reason": "multiplying both numerator and denominator by the same power of 10 leaves the fraction unchanged"
              },
              {
                "step": "Dividing numerator and denominator by their common divisor 6 gives $\\frac{24}{750} = \\frac{4}{125}$.",
                "reason": "reducing the fraction"
              },
              {
                "step": "The denominator $125=5^3$, so multiplying numerator and denominator by $2^3=8$ makes the denominator a power of 10: $\\frac{4}{125}=\\frac{32}{1\\,000}$.",
                "reason": "since $5^3\\times 2^3=10^3$"
              },
              {
                "step": "$0.032$.",
                "reason": "placing the decimal point three digits from the right"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute the decimal equal to $\\frac{3.6}{45}$.",
              "answer": "0.08",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Multiplying numerator and denominator by 10 clears the decimal point: $\\frac{3.6}{45} = \\frac{36}{450}$.",
                  "reason": "multiplying both numerator and denominator by the same power of 10 leaves the fraction unchanged"
                },
                {
                  "step": "Dividing numerator and denominator by their common divisor 18 gives $\\frac{36}{450} = \\frac{2}{25}$.",
                  "reason": "reducing the fraction"
                },
                {
                  "step": "The denominator $25=5^2$, so multiplying numerator and denominator by $2^2=4$ makes the denominator a power of 10: $\\frac{2}{25}=\\frac{8}{100}$.",
                  "reason": "since $5^2\\times 2^2=10^2$"
                },
                {
                  "step": "$0.08$.",
                  "reason": "placing the decimal point two digits from the right"
                }
              ]
            },
            {
              "prompt": "Compute the decimal equal to $\\frac{1.2}{50}$.",
              "answer": "0.024",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Multiplying numerator and denominator by 10 clears the decimal point: $\\frac{1.2}{50} = \\frac{12}{500}$.",
                  "reason": "multiplying both numerator and denominator by the same power of 10 leaves the fraction unchanged"
                },
                {
                  "step": "Dividing numerator and denominator by their common divisor 4 gives $\\frac{12}{500} = \\frac{3}{125}$.",
                  "reason": "reducing the fraction"
                },
                {
                  "step": "The denominator $125=5^3$, so multiplying numerator and denominator by $2^3=8$ makes the denominator a power of 10: $\\frac{3}{125}=\\frac{24}{1\\,000}$.",
                  "reason": "since $5^3\\times 2^3=10^3$"
                },
                {
                  "step": "$0.024$.",
                  "reason": "placing the decimal point three digits from the right"
                }
              ]
            },
            {
              "prompt": "Compute the decimal equal to $\\frac{5.4}{1\\,125}$.",
              "answer": "0.0048",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Multiplying numerator and denominator by 10 clears the decimal point: $\\frac{5.4}{1\\,125} = \\frac{54}{11\\,250}$.",
                  "reason": "multiplying both numerator and denominator by the same power of 10 leaves the fraction unchanged"
                },
                {
                  "step": "Dividing numerator and denominator by their common divisor 18 gives $\\frac{54}{11\\,250} = \\frac{3}{625}$.",
                  "reason": "reducing the fraction"
                },
                {
                  "step": "The denominator $625=5^4$, so multiplying numerator and denominator by $2^4=16$ makes the denominator a power of 10: $\\frac{3}{625}=\\frac{48}{10\\,000}$.",
                  "reason": "since $5^4\\times 2^4=10^4$"
                },
                {
                  "step": "$0.004\\,8$.",
                  "reason": "placing the decimal point four digits from the right"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t37-k5",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{9}{4}$.",
            "figure": {
              "file": "place:line:9/4",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "$9=2\\times 4+1$, so $\\frac{9}{4}=2+\\frac{1}{4}$.",
                "reason": "9 copies of $\\frac{1}{4}$ hold 2 groups of 4 copies, each group making 1, with 1 copy left over"
              },
              {
                "step": "The mark lies between 2 and 3, $\\frac{1}{4}$ of the way from 2 to 3.",
                "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 1 of the 4 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:9/4",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 9/4 marked, between 2 and 3."
                }
              },
              {
                "step": "$\\frac{1}{4}=\\frac{1\\times 25}{4\\times 25}=\\frac{25}{100}=0.25$.",
                "reason": "multiplying the numerator and the denominator by 25 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$2.25$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:9/4",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 9/4 lies at 2.25, in the tenth from 2.2 to 2.3, between 2 and 3."
                }
              }
            ]
          },
          "fade": [
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
            },
            {
              "prompt": "Place $\\frac{29}{20}$.",
              "answer": "29/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$29=1\\times 20+9$, so $\\frac{29}{20}=1+\\frac{9}{20}$.",
                  "reason": "29 copies of $\\frac{1}{20}$ hold 1 group of 20 copies, each group making 1, with 9 copies left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{9}{20}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 9 of the 20 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{9}{20}=\\frac{9\\times 5}{20\\times 5}=\\frac{45}{100}=0.45$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$1.45$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:29/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 29/20 lies at 1.45, in the tenth from 1.4 to 1.5, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{58}{25}$.",
              "answer": "58/25",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$58=2\\times 25+8$, so $\\frac{58}{25}=2+\\frac{8}{25}$.",
                  "reason": "58 copies of $\\frac{1}{25}$ hold 2 groups of 25 copies, each group making 1, with 8 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{8}{25}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 8 of the 25 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{8}{25}=\\frac{8\\times 4}{25\\times 4}=\\frac{32}{100}=0.32$.",
                  "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$2.32$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:58/25",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 58/25 lies at 2.32, in the tenth from 2.3 to 2.4, between 2 and 3."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{11}{20}$.",
            "figure": {
              "file": "place:line:11/20",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 11.",
                "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 11 counts the parts from 0"
              },
              {
                "step": "$\\frac{11}{20}=\\frac{11\\times 5}{20\\times 5}=\\frac{55}{100}=0.55$.",
                "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$0.55$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:11/20",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 11/20 lies at 0.55, in the tenth from 0.5 to 0.6, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{3}{4}$.",
              "answer": "3/4",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 4 equal parts, and the mark is the end of part 3.",
                  "reason": "the denominator 4 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
                },
                {
                  "step": "$\\frac{3}{4}=\\frac{3\\times 25}{4\\times 25}=\\frac{75}{100}=0.75$.",
                  "reason": "multiplying the numerator and the denominator by 25 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.75$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:3/4",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/4 lies at 0.75, in the tenth from 0.7 to 0.8, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{7}{20}$.",
              "answer": "7/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 7.",
                  "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 7 counts the parts from 0"
                },
                {
                  "step": "$\\frac{7}{20}=\\frac{7\\times 5}{20\\times 5}=\\frac{35}{100}=0.35$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.35$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:7/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 7/20 lies at 0.35, in the tenth from 0.3 to 0.4, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{9}{25}$.",
              "answer": "9/25",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 25 equal parts, and the mark is the end of part 9.",
                  "reason": "the denominator 25 gives the number of equal parts of the unit, and the numerator 9 counts the parts from 0"
                },
                {
                  "step": "$\\frac{9}{25}=\\frac{9\\times 4}{25\\times 4}=\\frac{36}{100}=0.36$.",
                  "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.36$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:9/25",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 9/25 lies at 0.36, in the tenth from 0.3 to 0.4, between 0 and 1."
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
      "id": "t37-p1",
      "method": "proof by cases",
      "statement": "Let $\\frac{m}{n}$ be a reduced proper fraction. Its denominator $n$ is not a multiple of 10, and $n=2^k5^{\\ell}$ for whole numbers $k,\\ell$. Then $\\frac{m}{n}$ is equal to a finite decimal.",
      "idea": "Multiply the numerator and denominator by the prime, 2 or 5, that is missing from the denominator. This turns the fraction into a whole number over a power of 10.",
      "lines": [
        {
          "line": "Since $n$ is not a multiple of 10 and $2\\times 5=10$, not both $k$ and $\\ell$ are positive.",
          "reason": "the hypothesis that $n$ is not a multiple of 10"
        },
        {
          "line": "Case $n=2^k$: the product $m\\times 10^k = m\\times 2^k\\times 5^k$ is a multiple of $2^k=n$.",
          "reason": "since $10^k=2^k\\times 5^k$"
        },
        {
          "line": "Writing $q=\\dfrac{m\\times 10^k}{2^k}$, a whole number, gives $\\dfrac{m}{n}=\\dfrac{m}{2^k} = \\dfrac{m\\times 5^k}{2^k\\times 5^k} = \\dfrac{q}{10^k}$, a finite decimal.",
          "reason": "the product formula for fractions, since $q=m\\times 5^k$"
        },
        {
          "line": "Case $n=5^{\\ell}$: the product $m\\times 10^{\\ell} = m\\times 2^{\\ell}\\times 5^{\\ell}$ is a multiple of $5^{\\ell}=n$.",
          "reason": "since $10^{\\ell}=2^{\\ell}\\times 5^{\\ell}$"
        },
        {
          "line": "Writing $q'=\\dfrac{m\\times 10^{\\ell}}{5^{\\ell}}$, a whole number, gives $\\dfrac{m}{n}=\\dfrac{m}{5^{\\ell}} = \\dfrac{m\\times 2^{\\ell}}{5^{\\ell}\\times 2^{\\ell}} = \\dfrac{q'}{10^{\\ell}}$, a finite decimal.",
          "reason": "the product formula for fractions, since $q'=m\\times 2^{\\ell}$"
        },
        {
          "line": "These two cases cover every such $n$, so $\\dfrac{m}{n}$ is equal to a finite decimal.",
          "reason": "combining the two cases"
        }
      ]
    },
    {
      "id": "t37-p2",
      "method": "direct proof",
      "statement": "Let $\\frac{m}{n}$ be a reduced proper fraction. For each whole number $j$, let $q_j$ be the quotient of the long division of $m\\times 10^j$ by $n$. Let $s_j=\\dfrac{q_j}{10^j}$. Then the sequence $\\{s_j\\}$ converges to $\\frac{m}{n}$.",
      "idea": "The long-division quotient after $j$ steps, divided by $10^j$, differs from the fraction by less than $10^{-j}$. So the sequence converges to the fraction.",
      "lines": [
        {
          "line": "Writing the division-with-remainder of $m\\times 10^j$ by $n$ gives $m\\times 10^j = (q_j\\times n)+r_j$, where $0\\le r_j<n$.",
          "reason": "the definition of $q_j$ as the quotient of this long division"
        },
        {
          "line": "Dividing both sides by $n\\times 10^j$ gives $\\dfrac{m}{n} = \\dfrac{q_j}{10^j} + \\dfrac{r_j}{n}\\times\\dfrac{1}{10^j} = s_j + \\dfrac{r_j}{n\\times 10^j}$.",
          "reason": "the product formula for fractions, and the definition of $s_j$"
        },
        {
          "line": "The distance between $\\dfrac{m}{n}$ and $s_j$ is $\\dfrac{r_j}{n\\times 10^j}$, and $0\\le r_j$, so this distance is at least 0.",
          "reason": "subtracting $s_j$ from both sides of the second line"
        },
        {
          "line": "Since $r_j<n$, the distance $\\dfrac{r_j}{n\\times 10^j}$ is less than $\\dfrac{n}{n\\times 10^j}=\\dfrac{1}{10^j}$.",
          "reason": "dividing both sides of $r_j<n$ by the positive number $n\\times 10^j$"
        },
        {
          "line": "Since $\\dfrac{1}{10^j}$ goes to 0 as $j$ grows without bound, the distance between $\\dfrac{m}{n}$ and $s_j$ goes to 0 too.",
          "reason": "combining the third and fourth lines"
        },
        {
          "line": "The sequence $\\{s_j\\}$ converges to $\\dfrac{m}{n}$.",
          "reason": "the definition of the limit of a sequence"
        }
      ]
    },
    {
      "id": "t37-p3",
      "method": "the pigeonhole principle",
      "statement": "Let $\\frac{m}{n}$ be a reduced proper fraction whose decimal expansion is infinite. Then a repeating block appears within its first $n$ decimal digits. The period of the decimal is at most $n-1$.",
      "idea": "Since no remainder is 0, only $n-1$ remainders are possible. So among $n$ divisions two remainders are equal, and the digits then repeat.",
      "lines": [
        {
          "line": "The decimal digits of $\\dfrac{m}{n}$ are the quotient digits of the long divisions of $m\\times 10^j$ by $n$, for $j=1,2,\\ldots$. Each division has remainder $r_j$ with $0\\le r_j<n$.",
          "reason": "the long division algorithm for finding a fraction's decimal expansion"
        },
        {
          "line": "A remainder of 0 would end the division and give a finite decimal. Since the decimal expansion is infinite, no remainder $r_j$ is ever 0.",
          "reason": "the definition of a finite decimal expansion"
        },
        {
          "line": "Each of $r_1,r_2,\\ldots,r_n$ is one of only the $n-1$ whole numbers $1,2,\\ldots,n-1$.",
          "reason": "combining the first and second lines"
        },
        {
          "line": "Among the $n$ remainders $r_1,\\ldots,r_n$, two must be equal, say $r_i=r_{i+p}$ with $1\\le i$ and $i+p\\le n$.",
          "reason": "the pigeonhole principle, since $n$ remainders cannot all be different when only $n-1$ values are possible"
        },
        {
          "line": "Once $r_i=r_{i+p}$, the long division algorithm produces the same digit and next remainder at step $i+p+1$ as at step $i+1$. This continues indefinitely, so the digits repeat in a block of length $p$ starting at digit $i+1$.",
          "reason": "the long division algorithm depends only on the current remainder"
        },
        {
          "line": "The repeating block begins at digit $i+1$, which is at most $n$. Its length $p$ is at most $n-1$, because $i\\ge1$ and $i+p\\le n$.",
          "reason": "combining the previous lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t37-s1",
      "statement": "Let $\\frac{m}{n}$ be a fraction with $m\\ge n$. Let $q$ and $r$ be the quotient and remainder of the division-with-remainder of $m$ by $n$. Then $\\dfrac{m}{n}=q+\\dfrac{r}{n}$, and $\\dfrac{r}{n}$ is a proper fraction.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "By the division-with-remainder of $m$ by $n$, $m=(q\\times n)+r$, where $0\\le r<n$.",
            "reason": "the definition of the quotient and remainder"
          },
          {
            "line": "Dividing both sides by $n$ gives $\\dfrac{m}{n} = q + \\dfrac{r}{n}$.",
            "reason": "dividing both sides of an equation by the same positive number keeps it true, and the product formula for fractions"
          },
          {
            "line": "Since $0\\le r<n$, the fraction $\\dfrac{r}{n}$ is a proper fraction.",
            "reason": "the definition of a proper fraction"
          }
        ]
      }
    },
    {
      "id": "t37-s2",
      "statement": "Let $\\frac{m}{n}$ be a reduced fraction with $n=2^k5^{\\ell}$, not both $k,\\ell$ zero. Then the decimal expansion of $\\frac{m}{n}$ is finite with exactly $\\max(k,\\ell)$ decimal digits.",
      "method": "proof by cases",
      "check": {
        "proof": [
          {
            "line": "Let $d=\\min(k,\\ell)$, and write $n=10^d\\times n'$, where $n'=2^{k-d}$ if $k\\ge\\ell$, or $n'=5^{\\ell-d}$ if $\\ell>k$.",
            "reason": "since $2\\times 5=10$, so $d$ copies of 10 divide out of $n$"
          },
          {
            "line": "The number $n'$ is a pure power of 2 or of 5, since at most one of $k-d,\\ell-d$ is positive. So $n'$ is not a multiple of 10.",
            "reason": "the definition of $d$ as the lesser of $k,\\ell$"
          },
          {
            "line": "Case $k\\ge\\ell$: $\\dfrac{m}{n'}=\\dfrac{m}{2^{k-d}}$ is a finite decimal with exactly $k-d$ decimal digits.",
            "reason": "the rule for a denominator that is a pure power of 2, applied with exponent $k-d$"
          },
          {
            "line": "Case $\\ell>k$: $\\dfrac{m}{n'}=\\dfrac{m}{5^{\\ell-d}}$ is a finite decimal with exactly $\\ell-d$ decimal digits.",
            "reason": "the rule for a denominator that is a pure power of 5, applied with exponent $\\ell-d$"
          },
          {
            "line": "In either case, $\\dfrac{m}{n} = \\dfrac{m}{n'}\\times 10^{-d}$ is a finite decimal. It has $(k-d)+d$ or $(\\ell-d)+d$ decimal digits in all.",
            "reason": "multiplying a decimal by $10^{-d}$ moves its decimal point $d$ places to the left"
          },
          {
            "line": "The count $(k-d)+d$ equals $k$ when $k\\ge\\ell$, and $(\\ell-d)+d$ equals $\\ell$ when $\\ell>k$. In both cases the count equals $\\max(k,\\ell)$, since $d=\\min(k,\\ell)$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t37-s3",
      "statement": "Let $\\frac{m}{n}$ be a reduced proper fraction whose decimal expansion is finite. Then the long division of $m\\times 10^j$ by $n$ gives remainder 0 for some whole number $j\\le n$.",
      "method": "the pigeonhole principle",
      "check": {
        "proof": [
          {
            "line": "Suppose, for contradiction, that none of the divisions of $m\\times 10^1,m\\times 10^2,\\ldots,m\\times 10^n$ by $n$ gives remainder 0.",
            "reason": "assuming the opposite of the claim"
          },
          {
            "line": "Then each of the $n$ remainders $r_1,\\ldots,r_n$ is one of only the $n-1$ whole numbers $1,2,\\ldots,n-1$.",
            "reason": "a remainder is always less than the divisor, and none is 0 by assumption"
          },
          {
            "line": "Among these $n$ remainders, two must be equal, say $r_i=r_{i+p}$.",
            "reason": "the pigeonhole principle, since $n$ remainders cannot all be different when only $n-1$ values are possible"
          },
          {
            "line": "Once $r_i=r_{i+p}$, the long division algorithm repeats the same digits forever from digit $i+1$ onward. So the decimal expansion is infinite.",
            "reason": "the long division algorithm depends only on the current remainder"
          },
          {
            "line": "An infinite decimal expansion contradicts the hypothesis that the decimal expansion of $\\frac{m}{n}$ is finite.",
            "reason": "the definition of a finite decimal expansion"
          },
          {
            "line": "So some remainder among the first $n$ divisions must be 0.",
            "reason": "rejecting the assumption of the first line"
          }
        ]
      }
    },
    {
      "id": "t37-s4",
      "statement": "Let $a$ and $b$ be positive whole numbers. Let $q$ and $r$ be the quotient and remainder of the division-with-remainder of $a$ by $b$. Let $q'$ and $r'$ be the quotient and remainder of the division-with-remainder of $a\\times 10$ by $b$. Prove that there is a single-digit whole number $k$ such that $q'=(q\\times 10)+k$.",
      "method": "proof of existence by construction",
      "check": {
        "proof": [
          {
            "line": "Dividing $10r$ by $b$ with remainder gives $10r=(k\\times b)+r''$, where $0\\le r''<b$.",
            "reason": "the division-with-remainder of $10r$ by $b$"
          },
          {
            "line": "Since $0\\le r<b$, multiplying by 10 gives $0\\le10r<10b$, so $0\\le k<10$.",
            "reason": "multiplying every part of $0\\le r<b$ by 10, and dividing every part of the result by $b$"
          },
          {
            "line": "Substitution gives $a\\times 10 = 10\\times(q\\times b+r) = (10q\\times b)+10r = (10q\\times b)+(k\\times b+r'') = ((10q+k)\\times b)+r''$.",
            "reason": "substituting $a=q\\times b+r$, then $10r=k\\times b+r''$, then the distributive law"
          },
          {
            "line": "Since $0\\le r''<b$, the numbers $10q+k$ and $r''$ are themselves the quotient and remainder of the division-with-remainder of $a\\times 10$ by $b$.",
            "reason": "the uniqueness of the quotient and remainder of a division-with-remainder"
          },
          {
            "line": "So $q'=(q\\times 10)+k$, where $k$ is a single-digit whole number from 0 to 9.",
            "reason": "combining the previous lines with $0\\le k<10$"
          }
        ]
      }
    },
    {
      "id": "t37-s5",
      "statement": "Prove that $\\dfrac{1}{35}$ cannot have a finite decimal expansion. Do not use the classification of finite decimals by their denominator's prime divisors.",
      "method": "proof by contradiction",
      "check": {
        "proof": [
          {
            "line": "Suppose, for contradiction, that $\\dfrac{1}{35} = \\dfrac{k}{10^n}$ for some whole numbers $k$ and $n$.",
            "reason": "the definition of a finite decimal"
          },
          {
            "line": "Cross-multiplying gives $10^n = 35\\times k$.",
            "reason": "the cross-multiplication algorithm for equal fractions"
          },
          {
            "line": "Since $35=5\\times 7$, 7 divides $35\\times k=10^n$.",
            "reason": "the prime decomposition of 35"
          },
          {
            "line": "But $10^n=2^n\\times 5^n$ has only 2 and 5 as prime divisors, for every whole number $n$, so 7 cannot divide $10^n$.",
            "reason": "the prime decomposition of $10^n$"
          },
          {
            "line": "This contradicts the third line, so no such $k$ and $n$ exist, and $\\dfrac{1}{35}$ is not a finite decimal.",
            "reason": "rejecting the assumption of the first line"
          }
        ]
      }
    }
  ]
}
