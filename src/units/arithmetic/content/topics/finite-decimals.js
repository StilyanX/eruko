// Finite Decimals: decomposition, negative powers of 10, the four operations and the law of exponents.
export default {
  "number": 34,
  "manyParts": false,
  "bare": {
    "prompt": "Compute $2.36 + 0.814\\,5$.",
    "answer": "3.1745",
    "form": "Answer as a finite decimal.",
    "solution": [
      "Compute $2.36 + 0.814\\,5$.",
      "Write two extra zeros at the right end, so both terms have 4 decimal digits: $2.360\\,0 + 0.814\\,5$.",
      "Add the whole numbers formed by ignoring the decimal points: $23\\,600+8\\,145=31\\,745$.",
      "$31\\,745 \\times 10^{-4} = 3.174\\,5$.",
      "$3.174\\,5$."
    ]
  },
  "ideas": [
    {
      "name": "Integer part and decomposition of a finite decimal",
      "concrete": "$41.15 = 41 + \\frac{15}{100} = 41 + 0.15$",
      "general": "A finite decimal $w.a_1a_2\\ldots a_n$ with integer part $w$ equals $w + 0.a_1a_2\\ldots a_n$. This is the only way to write the decimal as a whole number plus a finite decimal less than 1."
    },
    {
      "name": "Negative powers of 10",
      "concrete": "$41.15 = 4\\,115 \\times 10^{-2}$",
      "general": "For a whole number $a$ and a nonzero whole number $n$, $\\frac{a}{10^n} = a \\times 10^{-n}$.",
      "definitions": [
        "The notation $10^{-n}$ denotes the fraction $\\frac{1}{10^n}$, for a nonzero whole number $n$."
      ]
    },
    {
      "name": "Adding finite decimals",
      "concrete": "$0.135 + 0.048\\,6 = 1\\,350 \\times 10^{-4} + 486 \\times 10^{-4} = 1\\,836 \\times 10^{-4} = 0.183\\,6$",
      "general": "To add finite decimals, write extra zeros at the right end until each has the same number of decimal digits. Then add the whole numbers formed by ignoring the decimal points. Give the sum that same number of decimal digits."
    },
    {
      "name": "Subtracting finite decimals",
      "concrete": "$3.145 - 2.867\\,5 = 31\\,450 \\times 10^{-4} - 28\\,675 \\times 10^{-4} = 2\\,775 \\times 10^{-4} = 0.277\\,5$",
      "general": "To subtract finite decimals, write both with the same number of decimal digits. Then subtract the whole numbers formed by ignoring the decimal points. Give the difference that same number of decimal digits."
    },
    {
      "name": "Multiplying finite decimals",
      "concrete": "$11.460\\,8 \\times 0.397 = 114\\,608 \\times 10^{-4} \\times 397 \\times 10^{-3} = 45\\,499\\,376 \\times 10^{-7} = 4.549\\,937\\,6$",
      "general": "Let one finite decimal have $n$ decimal digits and the other $m$ decimal digits. To multiply them, multiply the two whole numbers formed by ignoring the decimal points. Then place the decimal point so the product has $n+m$ decimal digits."
    },
    {
      "name": "Dividing finite decimals",
      "concrete": "$\\frac{0.004\\,5}{0.14} = \\frac{45 \\times 10^{-4}}{1\\,400 \\times 10^{-4}} = \\frac{45}{1\\,400}$",
      "general": "For finite decimals $A$ and $B$, choose a whole number $k$ so that $A\\times10^k$ and $B\\times10^k$ are whole numbers. Then $\\frac{A}{B} = \\frac{A\\times10^k}{B\\times10^k}$ is a ratio of whole numbers. A ratio of whole numbers is not always a finite decimal."
    },
    {
      "name": "Law of exponents extended to integer exponents",
      "concrete": "$10^{-8} \\times 10^{3} = 10^{-5}$",
      "general": "For every integer $m$ and every integer $n$, $10^m \\times 10^n = 10^{m+n}$."
    }
  ],
  "kinds": [
    {
      "id": "t34-k1",
      "forms": [
        {
          "example": {
            "problem": "Compute $0.135 + 0.048\\,6$.",
            "lines": [
              {
                "step": "$0.135\\,0 + 0.048\\,6$.",
                "reason": "writing an extra zero at the right end gives both terms 4 decimal digits"
              },
              {
                "step": "$1\\,350+486=1\\,836$.",
                "reason": "the distributive law, adding the whole numbers formed by ignoring the decimal points"
              },
              {
                "step": "$1\\,836 \\times 10^{-4} = 0.183\\,6$.",
                "reason": "placing the decimal point 4 digits from the right"
              },
              {
                "step": "$0.183\\,6$.",
                "reason": "the sum computed above"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $2.517 + 0.304\\,8$.",
              "answer": "2.8218",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$2.517\\,0 + 0.304\\,8$.",
                  "reason": "writing an extra zero at the right end gives both terms 4 decimal digits"
                },
                {
                  "step": "$25\\,170+3\\,048=28\\,218$.",
                  "reason": "the distributive law, adding the whole numbers formed by ignoring the decimal points"
                },
                {
                  "step": "$28\\,218 \\times 10^{-4} = 2.821\\,8$.",
                  "reason": "placing the decimal point 4 digits from the right"
                },
                {
                  "step": "$2.821\\,8$.",
                  "reason": "the sum computed above"
                }
              ]
            },
            {
              "prompt": "Compute $0.762 + 1.059\\,3$.",
              "answer": "1.8213",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$0.762\\,0 + 1.059\\,3$.",
                  "reason": "writing an extra zero at the right end gives both terms 4 decimal digits"
                },
                {
                  "step": "$7\\,620+10\\,593=18\\,213$.",
                  "reason": "the distributive law, adding the whole numbers formed by ignoring the decimal points"
                },
                {
                  "step": "$18\\,213 \\times 10^{-4} = 1.821\\,3$.",
                  "reason": "placing the decimal point 4 digits from the right"
                },
                {
                  "step": "$1.821\\,3$.",
                  "reason": "the sum computed above"
                }
              ]
            },
            {
              "prompt": "Compute $4.208 + 0.017\\,6$.",
              "answer": "4.2256",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$4.208\\,0 + 0.017\\,6$.",
                  "reason": "writing an extra zero at the right end gives both terms 4 decimal digits"
                },
                {
                  "step": "$42\\,080+176=42\\,256$.",
                  "reason": "the distributive law, adding the whole numbers formed by ignoring the decimal points"
                },
                {
                  "step": "$42\\,256 \\times 10^{-4} = 4.225\\,6$.",
                  "reason": "placing the decimal point 4 digits from the right"
                },
                {
                  "step": "$4.225\\,6$.",
                  "reason": "the sum computed above"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t34-k2",
      "forms": [
        {
          "example": {
            "problem": "Compute $3.145 - 2.867\\,5$.",
            "lines": [
              {
                "step": "$3.145\\,0 - 2.867\\,5$.",
                "reason": "writing an extra zero at the right end gives both terms 4 decimal digits"
              },
              {
                "step": "$31\\,450-28\\,675=2\\,775$.",
                "reason": "subtracting the whole numbers formed by ignoring the decimal points"
              },
              {
                "step": "$2\\,775 \\times 10^{-4} = 0.277\\,5$.",
                "reason": "placing the decimal point 4 digits from the right"
              },
              {
                "step": "$0.277\\,5$.",
                "reason": "the difference computed above"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $14.06 - 5.238$.",
              "answer": "8.822",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$14.060 - 5.238$.",
                  "reason": "writing an extra zero at the right end gives both terms 3 decimal digits"
                },
                {
                  "step": "$14\\,060-5\\,238=8\\,822$.",
                  "reason": "subtracting the whole numbers formed by ignoring the decimal points"
                },
                {
                  "step": "$8\\,822 \\times 10^{-3} = 8.822$.",
                  "reason": "placing the decimal point 3 digits from the right"
                },
                {
                  "step": "$8.822$.",
                  "reason": "the difference computed above"
                }
              ]
            },
            {
              "prompt": "Compute $9.71 - 2.486$.",
              "answer": "7.224",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$9.710 - 2.486$.",
                  "reason": "writing an extra zero at the right end gives both terms 3 decimal digits"
                },
                {
                  "step": "$9\\,710-2\\,486=7\\,224$.",
                  "reason": "subtracting the whole numbers formed by ignoring the decimal points"
                },
                {
                  "step": "$7\\,224 \\times 10^{-3} = 7.224$.",
                  "reason": "placing the decimal point 3 digits from the right"
                },
                {
                  "step": "$7.224$.",
                  "reason": "the difference computed above"
                }
              ]
            },
            {
              "prompt": "Compute $8.302 - 1.65$.",
              "answer": "6.652",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$8.302 - 1.650$.",
                  "reason": "writing an extra zero at the right end gives both terms 3 decimal digits"
                },
                {
                  "step": "$8\\,302-1\\,650=6\\,652$.",
                  "reason": "subtracting the whole numbers formed by ignoring the decimal points"
                },
                {
                  "step": "$6\\,652 \\times 10^{-3} = 6.652$.",
                  "reason": "placing the decimal point 3 digits from the right"
                },
                {
                  "step": "$6.652$.",
                  "reason": "the difference computed above"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t34-k3",
      "forms": []
    },
    {
      "id": "t34-k4",
      "forms": [
        {
          "example": {
            "problem": "Compute $\\frac{52.2}{0.006}$.",
            "lines": [
              {
                "step": "$\\frac{52\\,200}{6}$.",
                "reason": "multiplying numerator and denominator by $10^{3}$ clears both decimal points"
              },
              {
                "step": "$\\frac{52\\,200}{6} = 8\\,700$.",
                "reason": "dividing by the common divisor $6$"
              },
              {
                "step": "$8\\,700$.",
                "reason": "the quotient computed above"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\frac{9.12}{0.38}$.",
              "answer": "24",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$\\frac{912}{38}$.",
                  "reason": "multiplying numerator and denominator by $10^{2}$ clears both decimal points"
                },
                {
                  "step": "$\\frac{912}{38} = 24$.",
                  "reason": "dividing by the common divisor $38$"
                },
                {
                  "step": "$24$.",
                  "reason": "the quotient computed above"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{3.78}{0.027}$.",
              "answer": "140",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$\\frac{3\\,780}{27}$.",
                  "reason": "multiplying numerator and denominator by $10^{3}$ clears both decimal points"
                },
                {
                  "step": "$\\frac{3\\,780}{27} = 140$.",
                  "reason": "dividing by the common divisor $27$"
                },
                {
                  "step": "$140$.",
                  "reason": "the quotient computed above"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{7.5}{1.5}$.",
              "answer": "5",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$\\frac{75}{15}$.",
                  "reason": "multiplying numerator and denominator by $10^{1}$ clears both decimal points"
                },
                {
                  "step": "$\\frac{75}{15} = 5$.",
                  "reason": "dividing by the common divisor $15$"
                },
                {
                  "step": "$5$.",
                  "reason": "the quotient computed above"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t34-k5",
      "forms": [
        {
          "example": {
            "problem": "Compute $11.460\\,8 \\times 0.397$.",
            "lines": [
              {
                "step": "$11.460\\,8 \\times 0.397 = 114\\,608 \\times 10^{-4} \\times 397 \\times 10^{-3}$.",
                "reason": "writing each finite decimal as a whole number times a negative power of 10"
              },
              {
                "step": "$114\\,608 \\times 397 \\times 10^{-7}$.",
                "reason": "the commutative and associative laws"
              },
              {
                "step": "$114\\,608 \\times 397 = 45\\,499\\,376$.",
                "reason": "the whole number multiplication algorithm"
              },
              {
                "step": "$45\\,499\\,376 \\times 10^{-7} = 4.549\\,937\\,6$.",
                "reason": "placing the decimal point 7 digits from the right"
              },
              {
                "step": "$4.549\\,937\\,6$.",
                "reason": "the product computed above"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $3.7 \\times 0.26$.",
              "answer": "0.962",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$3.7 \\times 0.26 = 37 \\times 10^{-1} \\times 26 \\times 10^{-2}$.",
                  "reason": "writing each finite decimal as a whole number times a negative power of 10"
                },
                {
                  "step": "$37 \\times 26 \\times 10^{-3}$.",
                  "reason": "the commutative and associative laws"
                },
                {
                  "step": "$37 \\times 26 = 962$.",
                  "reason": "the whole number multiplication algorithm"
                },
                {
                  "step": "$962 \\times 10^{-3} = 0.962$.",
                  "reason": "placing the decimal point 3 digits from the right"
                },
                {
                  "step": "$0.962$.",
                  "reason": "the product computed above"
                }
              ]
            },
            {
              "prompt": "Compute $0.8 \\times 13.6$.",
              "answer": "10.88",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$0.8 \\times 13.6 = 8 \\times 10^{-1} \\times 136 \\times 10^{-1}$.",
                  "reason": "writing each finite decimal as a whole number times a negative power of 10"
                },
                {
                  "step": "$8 \\times 136 \\times 10^{-2}$.",
                  "reason": "the commutative and associative laws"
                },
                {
                  "step": "$8 \\times 136 = 1\\,088$.",
                  "reason": "the whole number multiplication algorithm"
                },
                {
                  "step": "$1\\,088 \\times 10^{-2} = 10.88$.",
                  "reason": "placing the decimal point 2 digits from the right"
                },
                {
                  "step": "$10.88$.",
                  "reason": "the product computed above"
                }
              ]
            },
            {
              "prompt": "Compute $1.36 \\times 0.07$.",
              "answer": "0.0952",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$1.36 \\times 0.07 = 136 \\times 10^{-2} \\times 7 \\times 10^{-2}$.",
                  "reason": "writing each finite decimal as a whole number times a negative power of 10"
                },
                {
                  "step": "$136 \\times 7 \\times 10^{-4}$.",
                  "reason": "the commutative and associative laws"
                },
                {
                  "step": "$136 \\times 7 = 952$.",
                  "reason": "the whole number multiplication algorithm"
                },
                {
                  "step": "$952 \\times 10^{-4} = 0.095\\,2$.",
                  "reason": "placing the decimal point 4 digits from the right"
                },
                {
                  "step": "$0.095\\,2$.",
                  "reason": "the product computed above"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t34-k6",
      "forms": []
    },
    {
      "id": "t34-k7",
      "forms": [
        {
          "example": {
            "problem": "Place $0.65$.",
            "figure": {
              "file": "place:line:0.65",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $0.65$ is 0, so the mark lies between 0 and 1.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.65=\\frac{65}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 6 and 5 hundredths follow it, so the mark lies past the 6th cut and short of the next, between $0.6$ and $0.7$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:0.65",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 0.65 marked, between 0 and 1."
                }
              },
              {
                "step": "$0.65$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:0.65",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.65 lies at 0.65, in the tenth from 0.6 to 0.7, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.85$.",
              "answer": "0.85",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.85$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.85=\\frac{85}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 8 and 5 hundredths follow it, so the mark lies past the 8th cut and short of the next, between $0.8$ and $0.9$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.85$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.85",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.85 lies at 0.85, in the tenth from 0.8 to 0.9, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $1.72$.",
              "answer": "1.72",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.72$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.72=\\frac{72}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and 2 hundredths follow it, so the mark lies past the 7th cut and short of the next, between $1.7$ and $1.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.72$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.72",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.72 lies at 1.72, in the tenth from 1.7 to 1.8, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $2.35$.",
              "answer": "2.35",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $2.35$ is 2, so the mark lies between 2 and 3.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.35=\\frac{35}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 3 and 5 hundredths follow it, so the mark lies past the 3rd cut and short of the next, between $2.3$ and $2.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.35$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:2.35",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.35 lies at 2.35, in the tenth from 2.3 to 2.4, between 2 and 3."
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
      "id": "t34-p1",
      "method": "proof by cases",
      "statement": "For every integer $m$ and every integer $n$ such that $m$ is negative and $n$ is a whole number, $10^m \\times 10^n = 10^{m+n}$.",
      "idea": "Write the negative power as a reciprocal, then cancel the lesser power of 10 from top and bottom.",
      "lines": [
        {
          "line": "Let $m = -k$ for a whole number $k > 0$, since $m$ is negative.",
          "reason": "the definition of a negative integer"
        },
        {
          "line": "Consider first the case $k > n$. Write $k = n + p$ for a whole number $p > 0$.",
          "reason": "the whole number $k$ is greater than the whole number $n$"
        },
        {
          "line": "$10^m \\times 10^n = 10^{-k} \\times 10^n = \\frac{10^n}{10^k} = \\frac{10^n}{10^{n+p}}$.",
          "reason": "the definition of a negative exponent, substituting $k=n+p$"
        },
        {
          "line": "$\\frac{10^n}{10^{n+p}} = \\frac{10^n}{10^n \\times 10^p} = \\frac{1}{10^p} = 10^{-p}$.",
          "reason": "the law of exponents for whole numbers, then cancelling the common divisor $10^n$"
        },
        {
          "line": "$10^{-p} = 10^{n-k} = 10^{n+m}$.",
          "reason": "substituting $p=k-n$ and $m=-k$"
        },
        {
          "line": "Consider next the case $k \\le n$. Write $n = k+q$ for a whole number $q \\ge 0$.",
          "reason": "the whole number $k$ is at most the whole number $n$"
        },
        {
          "line": "$10^m \\times 10^n = 10^{-k} \\times 10^{k+q} = \\frac{10^k \\times 10^q}{10^k} = 10^q$.",
          "reason": "the definition of a negative exponent and the law of exponents for whole numbers, then cancelling the common divisor $10^k$"
        },
        {
          "line": "$10^q = 10^{n-k} = 10^{n+m}$, so $10^m \\times 10^n = 10^{m+n}$ in both cases.",
          "reason": "substituting $q=n-k$ and $m=-k$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t34-s2",
      "statement": "For every integer $m$ and every integer $n$ such that $m$ is negative and $n$ is negative, $10^m \\times 10^n = 10^{m+n}$.",
      "method": "proof by cases",
      "check": {
        "proof": [
          {
            "line": "Let $m = -j$ and $n = -k$ for whole numbers $j > 0$ and $k > 0$, since $m$ and $n$ are negative.",
            "reason": "the definition of a negative integer"
          },
          {
            "line": "$10^m \\times 10^n = 10^{-j} \\times 10^{-k} = \\frac{1}{10^j} \\times \\frac{1}{10^k} = \\frac{1}{10^j \\times 10^k}$.",
            "reason": "the definition of a negative exponent"
          },
          {
            "line": "$10^j \\times 10^k = 10^{j+k}$.",
            "reason": "the law of exponents for whole numbers"
          },
          {
            "line": "$\\frac{1}{10^{j+k}} = 10^{-(j+k)} = 10^{-j-k}$.",
            "reason": "the definition of a negative exponent"
          },
          {
            "line": "$-j-k = m+n$, since $m=-j$ and $n=-k$, so $10^m\\times10^n=10^{m+n}$.",
            "reason": "substituting $m=-j$ and $n=-k$"
          }
        ]
      }
    }
  ]
}
