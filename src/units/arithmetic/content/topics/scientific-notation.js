// Scientific Notation: comparing finite decimals, then writing and comparing them in scientific notation.
export default {
  "number": 35,
  "manyParts": false,
  "bare": {
    "prompt": "Find which is greater: $30.4$ or $29.95$.",
    "answer": "30.4",
    "form": "Answer as a finite decimal.",
    "solution": [
      "Find which is greater: $30.4$ or $29.95$.",
      "The integer part of $30.4$ is 30, and the integer part of $29.95$ is 29.",
      "$30>29$.",
      "The greater number is $30.4$, because the decimal with the greater integer part is the greater decimal.",
      "$30.4$."
    ]
  },
  "ideas": [
    {
      "name": "Comparing finite decimals through a common power of 10",
      "concrete": "The decimals $0.4 = 0.400\\,00$ and $0.389\\,72$ both have five decimal digits, and $40\\,000 > 38\\,972$, so $0.4 > 0.389\\,72$.",
      "general": "For finite decimals $A$ and $B$, choose a whole number $k$ so that $A\\times10^k$ and $B\\times10^k$ are whole numbers. If $A\\times10^k < B\\times10^k$, then $A<B$."
    },
    {
      "name": "Scientific notation",
      "concrete": "$751.2 = 7.512 \\times 10^2$",
      "general": "Write a positive finite decimal as $a\\times10^k$ for an integer $k$ and a finite decimal $a$ with $1\\le a<10$. This form is its **scientific notation**, and $a$ is its **leading factor**."
    }
  ],
  "kinds": [
    {
      "id": "t35-k1",
      "forms": [
        {
          "example": {
            "problem": "Find which is greater: $58.2$ or $61.004$.",
            "lines": [
              {
                "step": "The integer part of $58.2$ is 58, and the integer part of $61.004$ is 61.",
                "reason": "reading the integer part of a finite decimal"
              },
              {
                "step": "$58 < 61$.",
                "reason": "comparing two whole numbers"
              },
              {
                "step": "$61.004$.",
                "reason": "the decimal with the greater integer part is the greater decimal"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find which is greater: $120.89$ or $121.4$.",
              "answer": "121.4",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The integer part of $120.89$ is 120, and the integer part of $121.4$ is 121.",
                  "reason": "reading the integer part of a finite decimal"
                },
                {
                  "step": "$120 < 121$.",
                  "reason": "comparing two whole numbers"
                },
                {
                  "step": "$121.4$.",
                  "reason": "the decimal with the greater integer part is the greater decimal"
                }
              ]
            },
            {
              "prompt": "Find which is greater: $34.7$ or $35.001$.",
              "answer": "35.001",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The integer part of $34.7$ is 34, and the integer part of $35.001$ is 35.",
                  "reason": "reading the integer part of a finite decimal"
                },
                {
                  "step": "$34 < 35$.",
                  "reason": "comparing two whole numbers"
                },
                {
                  "step": "$35.001$.",
                  "reason": "the decimal with the greater integer part is the greater decimal"
                }
              ]
            },
            {
              "prompt": "Find which is greater: $8.99$ or $9.001$.",
              "answer": "9.001",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The integer part of $8.99$ is 8, and the integer part of $9.001$ is 9.",
                  "reason": "reading the integer part of a finite decimal"
                },
                {
                  "step": "$8 < 9$.",
                  "reason": "comparing two whole numbers"
                },
                {
                  "step": "$9.001$.",
                  "reason": "the decimal with the greater integer part is the greater decimal"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find which is greater: $0.234\\,192\\,7$ or $0.234\\,2$.",
            "lines": [
              {
                "step": "Both decimals have integer part $0$.",
                "reason": "reading the integer part of each decimal"
              },
              {
                "step": "The first three decimal digits of both decimals are $2$, $3$, $4$.",
                "reason": "comparing decimal digits one by one from the left"
              },
              {
                "step": "The fourth decimal digit of $0.234\\,2$ is 2, while the fourth decimal digit of $0.234\\,192\\,7$ is 1.",
                "reason": "comparing decimal digits one by one from the left"
              },
              {
                "step": "$0.234\\,2$.",
                "reason": "the decimal with the greater digit at the first place of disagreement is the greater decimal"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find which is greater: $0.583\\,201$ or $0.583\\,4$.",
              "answer": "0.5834",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Both decimals have integer part $0$.",
                  "reason": "reading the integer part of each decimal"
                },
                {
                  "step": "The first three decimal digits of both decimals are $5$, $8$, $3$.",
                  "reason": "comparing decimal digits one by one from the left"
                },
                {
                  "step": "The fourth decimal digit of $0.583\\,4$ is 4, while the fourth decimal digit of $0.583\\,201$ is 2.",
                  "reason": "comparing decimal digits one by one from the left"
                },
                {
                  "step": "$0.583\\,4$.",
                  "reason": "the decimal with the greater digit at the first place of disagreement is the greater decimal"
                }
              ]
            },
            {
              "prompt": "Find which is greater: $12.607\\,49$ or $12.608\\,1$.",
              "answer": "12.6081",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Both decimals have integer part $12$.",
                  "reason": "reading the integer part of each decimal"
                },
                {
                  "step": "The first two decimal digits of both decimals are $6$, $0$.",
                  "reason": "comparing decimal digits one by one from the left"
                },
                {
                  "step": "The third decimal digit of $12.608\\,1$ is 8, while the third decimal digit of $12.607\\,49$ is 7.",
                  "reason": "comparing decimal digits one by one from the left"
                },
                {
                  "step": "$12.608\\,1$.",
                  "reason": "the decimal with the greater digit at the first place of disagreement is the greater decimal"
                }
              ]
            },
            {
              "prompt": "Find which is greater: $3.141\\,59$ or $3.141\\,7$.",
              "answer": "3.1417",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Both decimals have integer part $3$.",
                  "reason": "reading the integer part of each decimal"
                },
                {
                  "step": "The first three decimal digits of both decimals are $1$, $4$, $1$.",
                  "reason": "comparing decimal digits one by one from the left"
                },
                {
                  "step": "The fourth decimal digit of $3.141\\,7$ is 7, while the fourth decimal digit of $3.141\\,59$ is 5.",
                  "reason": "comparing decimal digits one by one from the left"
                },
                {
                  "step": "$3.141\\,7$.",
                  "reason": "the decimal with the greater digit at the first place of disagreement is the greater decimal"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t35-k2",
      "forms": [
        {
          "example": {
            "problem": "Write $0.000\\,028\\,7$ in scientific notation.",
            "lines": [
              {
                "step": "The first nonzero digit of $0.000\\,028\\,7$, namely 2, is five places after the decimal point.",
                "reason": "counting decimal places to the first nonzero digit"
              },
              {
                "step": "$0.000\\,028\\,7 = 2.87\\times10^{-5}$.",
                "reason": "moving the decimal point five places right multiplies the number by $10^5$, so multiplying by $10^{-5}$ restores it"
              },
              {
                "step": "The number $2.87$ satisfies $1\\le2.87<10$.",
                "reason": "the definition of scientific notation"
              },
              {
                "step": "$2.87\\times10^{-5}$.",
                "reason": "restating the number in scientific notation"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $0.006\\,14$ in scientific notation.",
              "answer": "6.14 × 10^-3",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The first nonzero digit of $0.006\\,14$, namely 6, is three places after the decimal point.",
                  "reason": "counting decimal places to the first nonzero digit"
                },
                {
                  "step": "$0.006\\,14 = 6.14\\times10^{-3}$.",
                  "reason": "moving the decimal point three places right multiplies the number by $10^3$, so multiplying by $10^{-3}$ restores it"
                },
                {
                  "step": "The number $6.14$ satisfies $1\\le6.14<10$.",
                  "reason": "the definition of scientific notation"
                },
                {
                  "step": "$6.14\\times10^{-3}$.",
                  "reason": "restating the number in scientific notation"
                }
              ]
            },
            {
              "prompt": "Write $0.000\\,308$ in scientific notation.",
              "answer": "3.08 × 10^-4",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The first nonzero digit of $0.000\\,308$, namely 3, is four places after the decimal point.",
                  "reason": "counting decimal places to the first nonzero digit"
                },
                {
                  "step": "$0.000\\,308 = 3.08\\times10^{-4}$.",
                  "reason": "moving the decimal point four places right multiplies the number by $10^4$, so multiplying by $10^{-4}$ restores it"
                },
                {
                  "step": "The number $3.08$ satisfies $1\\le3.08<10$.",
                  "reason": "the definition of scientific notation"
                },
                {
                  "step": "$3.08\\times10^{-4}$.",
                  "reason": "restating the number in scientific notation"
                }
              ]
            },
            {
              "prompt": "Write $0.000\\,000\\,731$ in scientific notation.",
              "answer": "7.31 × 10^-7",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The first nonzero digit of $0.000\\,000\\,731$, namely 7, is seven places after the decimal point.",
                  "reason": "counting decimal places to the first nonzero digit"
                },
                {
                  "step": "$0.000\\,000\\,731 = 7.31\\times10^{-7}$.",
                  "reason": "moving the decimal point seven places right multiplies the number by $10^7$, so multiplying by $10^{-7}$ restores it"
                },
                {
                  "step": "The number $7.31$ satisfies $1\\le7.31<10$.",
                  "reason": "the definition of scientific notation"
                },
                {
                  "step": "$7.31\\times10^{-7}$.",
                  "reason": "restating the number in scientific notation"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t35-k3",
      "forms": [
        {
          "example": {
            "problem": "Find which is greater: $6.4\\times10^9$ or $6.45\\times10^9$.",
            "lines": [
              {
                "step": "The exponents of $6.4\\times10^9$ and $6.45\\times10^9$ are both 9.",
                "reason": "reading off the exponent of each number"
              },
              {
                "step": "$6.4 < 6.45$.",
                "reason": "comparing the two leading factors"
              },
              {
                "step": "$6.45\\times10^9$.",
                "reason": "when the exponents are equal, the number with the greater leading factor is greater"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find which is greater: $4.05\\times10^8$ or $4.5\\times10^8$.",
              "answer": "4.5 × 10^8",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The exponents of $4.05\\times10^8$ and $4.5\\times10^8$ are both 8.",
                  "reason": "reading off the exponent of each number"
                },
                {
                  "step": "$4.05 < 4.5$.",
                  "reason": "comparing the two leading factors"
                },
                {
                  "step": "$4.5\\times10^8$.",
                  "reason": "when the exponents are equal, the number with the greater leading factor is greater"
                }
              ]
            },
            {
              "prompt": "Find which is greater: $6.19\\times10^{-3}$ or $6.2\\times10^{-3}$.",
              "answer": "6.2 × 10^-3",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The exponents of $6.19\\times10^{-3}$ and $6.2\\times10^{-3}$ are both $-3$.",
                  "reason": "reading off the exponent of each number"
                },
                {
                  "step": "$6.19 < 6.2$.",
                  "reason": "comparing the two leading factors"
                },
                {
                  "step": "$6.2\\times10^{-3}$.",
                  "reason": "when the exponents are equal, the number with the greater leading factor is greater"
                }
              ]
            },
            {
              "prompt": "Find which is greater: $1.001\\times10^{12}$ or $1.01\\times10^{12}$.",
              "answer": "1.01 × 10^12",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The exponents of $1.001\\times10^{12}$ and $1.01\\times10^{12}$ are both 12.",
                  "reason": "reading off the exponent of each number"
                },
                {
                  "step": "$1.001 < 1.01$.",
                  "reason": "comparing the two leading factors"
                },
                {
                  "step": "$1.01\\times10^{12}$.",
                  "reason": "when the exponents are equal, the number with the greater leading factor is greater"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find which is greater: $7.3\\times10^{-11}$ or $2.1\\times10^{-9}$.",
            "lines": [
              {
                "step": "The exponents of $7.3\\times10^{-11}$ and $2.1\\times10^{-9}$ are $-11$ and $-9$.",
                "reason": "reading off the exponent of each number"
              },
              {
                "step": "$-11 < -9$.",
                "reason": "comparing the two exponents"
              },
              {
                "step": "$2.1\\times10^{-9}$.",
                "reason": "when the exponents differ, the number with the greater exponent is greater regardless of the leading factors"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find which is greater: $9.87\\times10^{-9}$ or $1.02\\times10^{-8}$.",
              "answer": "1.02 × 10^-8",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The exponents of $9.87\\times10^{-9}$ and $1.02\\times10^{-8}$ are $-9$ and $-8$.",
                  "reason": "reading off the exponent of each number"
                },
                {
                  "step": "$-9 < -8$.",
                  "reason": "comparing the two exponents"
                },
                {
                  "step": "$1.02\\times10^{-8}$.",
                  "reason": "when the exponents differ, the number with the greater exponent is greater regardless of the leading factors"
                }
              ]
            },
            {
              "prompt": "Find which is greater: $8.4\\times10^{15}$ or $1.1\\times10^{16}$.",
              "answer": "1.1 × 10^16",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The exponents of $8.4\\times10^{15}$ and $1.1\\times10^{16}$ are 15 and 16.",
                  "reason": "reading off the exponent of each number"
                },
                {
                  "step": "$15 < 16$.",
                  "reason": "comparing the two exponents"
                },
                {
                  "step": "$1.1\\times10^{16}$.",
                  "reason": "when the exponents differ, the number with the greater exponent is greater regardless of the leading factors"
                }
              ]
            },
            {
              "prompt": "Find which is greater: $3.99\\times10^{-2}$ or $1.5\\times10^{-1}$.",
              "answer": "1.5 × 10^-1",
              "form": "Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.",
              "lines": [
                {
                  "step": "The exponents of $3.99\\times10^{-2}$ and $1.5\\times10^{-1}$ are $-2$ and $-1$.",
                  "reason": "reading off the exponent of each number"
                },
                {
                  "step": "$-2 < -1$.",
                  "reason": "comparing the two exponents"
                },
                {
                  "step": "$1.5\\times10^{-1}$.",
                  "reason": "when the exponents differ, the number with the greater exponent is greater regardless of the leading factors"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t35-k4",
      "forms": [
        {
          "example": {
            "problem": "Place $0.6$.",
            "figure": {
              "file": "place:line:0.6",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $0.6$ is 0, so the mark lies between 0 and 1.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.6=\\frac{6}{10}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 6 and no hundredths follow it, so the mark is the 6th cut of the unit from $0$ to $1$, at $0.6$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:0.6",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 0.6 marked, between 0 and 1."
                }
              },
              {
                "step": "$0.6$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:0.6",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.6 lies at 0.6, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.60$.",
              "answer": "0.60",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.60$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.60=\\frac{60}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 6 and no hundredths follow it, so the mark is the 6th cut of the unit from $0$ to $1$, at $0.6$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.60$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.60",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.60 lies at 0.6, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $3.4$.",
              "answer": "3.4",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $3.4$ is 3, so the mark lies between 3 and 4.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.4=\\frac{4}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 4 and no hundredths follow it, so the mark is the 4th cut of the unit from $3$ to $4$, at $3.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.4$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:3.4",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.4 lies at 3.4, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $3.40$.",
              "answer": "3.40",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $3.40$ is 3, so the mark lies between 3 and 4.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.40=\\frac{40}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 4 and no hundredths follow it, so the mark is the 4th cut of the unit from $3$ to $4$, at $3.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.40$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:3.40",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.40 lies at 3.4, between 3 and 4."
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
      "id": "t35-p1",
      "method": "direct proof",
      "statement": "Let $A$ and $B$ be finite decimals. Let $k$ be a whole number such that $A\\times10^k$ and $B\\times10^k$ are whole numbers. If $A\\times10^k < B\\times10^k$, then $A<B$.",
      "idea": "Two finite decimals with equal numbers of decimal digits compare as the whole numbers formed by dropping their decimal points.",
      "lines": [
        {
          "line": "Writing $A$ and $B$ over the common denominator $10^k$ gives $A=\\dfrac{A\\times10^k}{10^k}$ and $B=\\dfrac{B\\times10^k}{10^k}$.",
          "reason": "multiplying and dividing by the same positive number $10^k$ leaves a decimal unchanged"
        },
        {
          "line": "Both $A\\times10^k$ and $B\\times10^k$ are whole numbers, so $A$ and $B$ are two fractions with the same denominator $10^k$.",
          "reason": "the hypothesis that $A\\times10^k$ and $B\\times10^k$ are whole numbers"
        },
        {
          "line": "$\\dfrac{A\\times10^k}{10^k} < \\dfrac{B\\times10^k}{10^k}$.",
          "reason": "comparing two fractions with the same denominator, given $A\\times10^k<B\\times10^k$"
        },
        {
          "line": "$A<B$.",
          "reason": "substituting the equalities of the first line into the third line"
        }
      ]
    },
    {
      "id": "t35-p2",
      "method": "direct proof",
      "statement": "Let $A$ and $B$ be finite decimals with equal integer parts and the same number $k$ of decimal digits. Suppose that $A$ and $B$ agree on their first $j-1$ decimal digits. Suppose also that the $j$-th decimal digit of $B$ is greater than the $j$-th decimal digit of $A$. Then $A<B$.",
      "idea": "Comparing decimal digits from the left is the same as comparing the whole numbers those digits spell out.",
      "lines": [
        {
          "line": "Both $A\\times10^k$ and $B\\times10^k$ are whole numbers, because $A$ and $B$ each have $k$ decimal digits.",
          "reason": "the definition of a finite decimal with $k$ decimal digits"
        },
        {
          "line": "The whole numbers $A\\times10^k$ and $B\\times10^k$ agree on every digit up to the $(j-1)$-th decimal digit of $A$ and $B$. The digit after that is greater in $B\\times10^k$ than in $A\\times10^k$.",
          "reason": "the decimal digits of $A$ and $B$ are the digits of $A\\times10^k$ and $B\\times10^k$"
        },
        {
          "line": "$A\\times10^k < B\\times10^k$.",
          "reason": "comparing two whole numbers digit by digit from the left"
        },
        {
          "line": "$A<B$.",
          "reason": "the rule for comparing finite decimals through a common power of 10"
        }
      ]
    },
    {
      "id": "t35-p3",
      "method": "direct proof",
      "statement": "Let $A$ and $B$ be finite decimals with the same integer part $a$. Write $A=a+A'$ and $B=a+B'$, where $A'$ and $B'$ are finite decimals with integer part 0. If $A'<B'$, then $A<B$.",
      "idea": "Comparing two decimals with the same integer part reduces to comparing their fractional parts alone.",
      "lines": [
        {
          "line": "By definition, $A=a+A'$ and $B=a+B'$.",
          "reason": "every finite decimal is its integer part plus a finite decimal with integer part 0"
        },
        {
          "line": "$a+A' < a+B'$.",
          "reason": "adding the same whole number to both sides of $A'<B'$ keeps the inequality"
        },
        {
          "line": "$A<B$.",
          "reason": "substituting the equalities of the first line into the second line"
        }
      ]
    },
    {
      "id": "t35-p4",
      "method": "direct proof",
      "statement": "Let $a\\times10^k$ and $b\\times10^k$ be finite decimals in scientific notation with the same exponent $k$. If $a<b$, then $a\\times10^k<b\\times10^k$.",
      "idea": "In scientific notation with equal exponents, the leading factor alone decides which number is greater.",
      "lines": [
        {
          "line": "The power $10^k$ is positive for every integer $k$.",
          "reason": "a power of a positive number is positive"
        },
        {
          "line": "$a<b$.",
          "reason": "the hypothesis"
        },
        {
          "line": "$a\\times10^k < b\\times10^k$.",
          "reason": "multiplying both sides of an inequality by the same positive number keeps the inequality"
        }
      ]
    },
    {
      "id": "t35-p5",
      "method": "direct proof",
      "statement": "Let $a\\times10^k$ and $b\\times10^{\\ell}$ be finite decimals in scientific notation with $k<\\ell$. Then $a\\times10^k<b\\times10^{\\ell}$.",
      "idea": "Because $a<10\\le b\\times10$, the number $a\\times10^k$ is less than $b\\times10^{k+1}$, which is at most $b\\times10^{\\ell}$.",
      "lines": [
        {
          "line": "$1\\le b$, so $10\\le b\\times10$.",
          "reason": "multiplying both sides of $1\\le b$ by 10 keeps the inequality"
        },
        {
          "line": "$a<10\\le b\\times10$, so $a<b\\times10$.",
          "reason": "combining $a<10$, given $a$ is in scientific notation, with the first line"
        },
        {
          "line": "$a\\times10^k < (b\\times10)\\times10^k = b\\times10^{k+1}$.",
          "reason": "multiplying both sides of $a<b\\times10$ by the positive number $10^k$"
        },
        {
          "line": "The inequality $k<\\ell$ means $k+1\\le\\ell$, so $10^{k+1}\\le10^{\\ell}$.",
          "reason": "the numbers $k$ and $\\ell$ are integers"
        },
        {
          "line": "$b\\times10^{k+1} \\le b\\times10^{\\ell}$.",
          "reason": "multiplying both sides of $10^{k+1}\\le10^{\\ell}$ by the positive number $b$"
        },
        {
          "line": "$a\\times10^k < b\\times10^{\\ell}$.",
          "reason": "combining the third and fifth lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t35-s1",
      "statement": "Let $A$ and $B$ be finite decimals with unequal integer parts $a$ and $b$. If $a<b$, then $A<B$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "By definition, $A=a+A'$ and $B=b+B'$, where $A'$ and $B'$ are finite decimals with integer part 0.",
            "reason": "every finite decimal is its integer part plus a finite decimal with integer part 0"
          },
          {
            "line": "Both $A'<1$ and $B'\\ge0$.",
            "reason": "a finite decimal with integer part 0 is at least 0 and less than 1"
          },
          {
            "line": "$A=a+A' < a+1$.",
            "reason": "adding the same whole number to both sides of $A'<1$ keeps the inequality"
          },
          {
            "line": "$a+1 \\le b$.",
            "reason": "the inequality $a<b$ for whole numbers means $a+1\\le b$"
          },
          {
            "line": "$b \\le b+B' = B$.",
            "reason": "adding a nonnegative number to $b$ does not decrease it"
          },
          {
            "line": "$A<B$.",
            "reason": "combining the third, fourth, and fifth lines"
          }
        ]
      }
    },
    {
      "id": "t35-s2",
      "statement": "Every positive finite decimal $A$ equals $a\\times10^k$. Here $k$ is an integer and $a$ is a finite decimal with $1\\le a<10$.",
      "method": "proof of existence by construction",
      "check": {
        "proof": [
          {
            "line": "The number $A$ is a positive finite decimal. So $A=\\dfrac{N}{10^j}$ for a positive whole number $N$ and a whole number $j$.",
            "reason": "the definition of a finite decimal"
          },
          {
            "line": "The whole number $N$ has some number of digits, so there is a whole number $d$ with $10^d \\le N < 10^{d+1}$.",
            "reason": "every positive whole number lies between two consecutive powers of 10"
          },
          {
            "line": "Dividing by $10^j$ gives $10^{d-j} \\le A < 10^{d-j+1}$.",
            "reason": "dividing every part of an inequality of positive numbers by the same positive number keeps the inequality"
          },
          {
            "line": "Let $k=d-j$ and $a=\\dfrac{A}{10^k}$.",
            "reason": "defining $k$ and $a$ from the previous line"
          },
          {
            "line": "$1 \\le a < 10$.",
            "reason": "dividing every part of $10^k \\le A < 10^{k+1}$ by the positive number $10^k$"
          },
          {
            "line": "$A = a\\times10^k$, and $a$ is a finite decimal because it is $A$ with its decimal point shifted.",
            "reason": "multiplying both sides of $a=A/10^k$ by $10^k$"
          }
        ]
      }
    },
    {
      "id": "t35-s3",
      "statement": "The representation $A=a\\times10^k$ of a positive finite decimal $A$, with $1\\le a<10$, is unique.",
      "method": "proof by contradiction",
      "check": {
        "proof": [
          {
            "line": "Suppose that $A=a\\times10^k=a'\\times10^{k'}$ with $1\\le a<10$, $1\\le a'<10$, and $k<k'$.",
            "reason": "assuming that two such representations differ, one exponent less than the other"
          },
          {
            "line": "$a = a'\\times10^{k'-k}$, where $k'-k$ is a whole number at least 1.",
            "reason": "dividing both sides of $a\\times10^k=a'\\times10^{k'}$ by the positive number $10^k$"
          },
          {
            "line": "$10^{k'-k} \\ge 10$.",
            "reason": "a whole number power of 10 at least $10^1$ is at least 10"
          },
          {
            "line": "$a = a'\\times10^{k'-k} \\ge 1\\times10 = 10$.",
            "reason": "multiplying both sides of $a'\\ge1$ by $10^{k'-k}\\ge10$"
          },
          {
            "line": "The inequality $a\\ge10$ contradicts $a<10$.",
            "reason": "combining the fourth line with the hypothesis $1\\le a<10$"
          },
          {
            "line": "So $k=k'$, and $a\\times10^k=a'\\times10^k$ gives $a=a'$.",
            "reason": "dividing both sides by the positive number $10^k$"
          }
        ]
      }
    },
    {
      "id": "t35-s4",
      "statement": "For every finite decimal $A>0$, there is a whole number $n$ such that $10^{-n}<A$.",
      "method": "proof of existence by construction",
      "check": {
        "proof": [
          {
            "line": "The number $A>0$ is a finite decimal, so $A=\\dfrac{a}{10^j}$ for a whole number $a\\ge1$ and a whole number $j$.",
            "reason": "the definition of a finite decimal"
          },
          {
            "line": "Let $n=j+1$.",
            "reason": "choosing $n$ one greater than $j$"
          },
          {
            "line": "$10^{-n} = \\dfrac{10^{-j}}{10} < 10^{-j}$.",
            "reason": "dividing a positive number by 10 gives a number less than it"
          },
          {
            "line": "$10^{-j} = \\dfrac{1}{10^j} \\le \\dfrac{a}{10^j} = A$.",
            "reason": "since $a\\ge1$"
          },
          {
            "line": "$10^{-n} < A$.",
            "reason": "combining the third and fourth lines"
          }
        ]
      }
    }
  ]
}
