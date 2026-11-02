export default {
  "number": 15,
  "manyParts": false,
  "bare": {
    "prompt": "Find the greater of $\\frac{5}{8}$ and $\\frac{7}{12}$.",
    "answer": "5/8",
    "form": "Answer as a fraction in lowest terms, or equivalent.",
    "solution": [
      "Find the greater of $\\frac{5}{8}$ and $\\frac{7}{12}$.",
      "Apply the cross-multiplication algorithm: $5\\times 12=60$ and $8\\times 7=56$.",
      "Since 60 is greater than 56, the fraction $\\frac{5}{8}$ is greater than $\\frac{7}{12}$.",
      "$\\frac{5}{8}$."
    ]
  },
  "ideas": [
    {
      "name": "Comparing fractions with the same denominator",
      "concrete": "The inequality $\\frac{2}{7}<\\frac{4}{7}$ holds, since $2<4$.",
      "general": "For whole numbers $k$, $m$, and $\\ell>0$, $\\frac{k}{\\ell}<\\frac{m}{\\ell}$ is equivalent to $k<m$, and $\\frac{k}{\\ell}=\\frac{m}{\\ell}$ is equivalent to $k=m$."
    },
    {
      "name": "Trichotomy of order for fractions",
      "concrete": "Exactly one of $\\frac{1}{3}=\\frac{1}{2}$, $\\frac{1}{3}<\\frac{1}{2}$, or $\\frac{1}{3}>\\frac{1}{2}$ holds.",
      "general": "For fractions $A$ and $B$, exactly one of $A=B$, $A<B$, or $A>B$ holds."
    },
    {
      "name": "Reciprocal",
      "concrete": "The reciprocal of $\\frac{5}{9}$ is $\\frac{9}{5}$.",
      "general": "For whole numbers $a$ and $b$, both nonzero, the **reciprocal** of the fraction $\\frac{a}{b}$ is $\\frac{b}{a}$."
    }
  ],
  "kinds": [
    {
      "id": "t15-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $\\frac{9}{16}$ and $\\frac{14}{25}$.",
            "lines": [
              {
                "step": "The cross products are $9\\times 25=225$ and $16\\times 14=224$.",
                "reason": "the cross-multiplication algorithm compares two fractions by their cross products"
              },
              {
                "step": "$\\frac{9}{16}>\\frac{14}{25}$.",
                "reason": "the number 225 is greater than 224, and the greater cross product names the greater fraction"
              },
              {
                "step": "$\\frac{9}{16}$.",
                "reason": "the greater of the two given fractions"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $\\frac{5}{12}$ and $\\frac{7}{17}$.",
              "answer": "5/12",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The cross products are $5\\times 17=85$ and $12\\times 7=84$.",
                  "reason": "the cross-multiplication algorithm compares two fractions by their cross products"
                },
                {
                  "step": "$\\frac{5}{12}>\\frac{7}{17}$.",
                  "reason": "the number 85 is greater than 84, and the greater cross product names the greater fraction"
                },
                {
                  "step": "$\\frac{5}{12}$.",
                  "reason": "the greater of the two given fractions"
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\frac{3}{8}$ and $\\frac{8}{21}$.",
              "answer": "8/21",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The cross products are $3\\times 21=63$ and $8\\times 8=64$.",
                  "reason": "the cross-multiplication algorithm compares two fractions by their cross products"
                },
                {
                  "step": "$\\frac{8}{21}>\\frac{3}{8}$.",
                  "reason": "the number 64 is greater than 63, and the greater cross product names the greater fraction"
                },
                {
                  "step": "$\\frac{8}{21}$.",
                  "reason": "the greater of the two given fractions"
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\frac{10}{19}$ and $\\frac{11}{21}$.",
              "answer": "10/19",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The cross products are $10\\times 21=210$ and $19\\times 11=209$.",
                  "reason": "the cross-multiplication algorithm compares two fractions by their cross products"
                },
                {
                  "step": "$\\frac{10}{19}>\\frac{11}{21}$.",
                  "reason": "the number 210 is greater than 209, and the greater cross product names the greater fraction"
                },
                {
                  "step": "$\\frac{10}{19}$.",
                  "reason": "the greater of the two given fractions"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $121\\,\\frac{5}{6}$ and $122\\,\\frac{1}{7}$.",
            "lines": [
              {
                "step": "The whole-number parts are 121 and 122.",
                "reason": "comparing the whole-number parts of the two mixed numbers first"
              },
              {
                "step": "$122>121$.",
                "reason": "the whole-number parts differ, so they alone decide which mixed number is greater"
              },
              {
                "step": "$122\\,\\frac{1}{7}$.",
                "reason": "the mixed number with the greater whole-number part is greater"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $31\\,\\frac{7}{8}$ and $32\\,\\frac{1}{5}$.",
              "answer": "32 1/5",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The whole-number parts are 31 and 32.",
                  "reason": "comparing the whole-number parts of the two mixed numbers first"
                },
                {
                  "step": "$32>31$.",
                  "reason": "the whole-number parts differ, so they alone decide which mixed number is greater"
                },
                {
                  "step": "$32\\,\\frac{1}{5}$.",
                  "reason": "the mixed number with the greater whole-number part is greater"
                }
              ]
            },
            {
              "prompt": "Find the greater of $17\\,\\frac{3}{8}$ and $18\\,\\frac{1}{6}$.",
              "answer": "18 1/6",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The whole-number parts are 17 and 18.",
                  "reason": "comparing the whole-number parts of the two mixed numbers first"
                },
                {
                  "step": "$18>17$.",
                  "reason": "the whole-number parts differ, so they alone decide which mixed number is greater"
                },
                {
                  "step": "$18\\,\\frac{1}{6}$.",
                  "reason": "the mixed number with the greater whole-number part is greater"
                }
              ]
            },
            {
              "prompt": "Find the greater of $25\\,\\frac{4}{9}$ and $24\\,\\frac{8}{9}$.",
              "answer": "25 4/9",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The whole-number parts are 25 and 24.",
                  "reason": "comparing the whole-number parts of the two mixed numbers first"
                },
                {
                  "step": "$25>24$.",
                  "reason": "the whole-number parts differ, so they alone decide which mixed number is greater"
                },
                {
                  "step": "$25\\,\\frac{4}{9}$.",
                  "reason": "the mixed number with the greater whole-number part is greater"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $9\\,\\frac{4}{15}$ and $9\\,\\frac{5}{18}$.",
            "lines": [
              {
                "step": "The whole-number parts are 9 and 9.",
                "reason": "comparing the whole-number parts of the two mixed numbers first"
              },
              {
                "step": "The cross products are $4\\times 18=72$ and $15\\times 5=75$.",
                "reason": "the whole-number parts are equal, so the cross-multiplication algorithm compares the fractional parts"
              },
              {
                "step": "$\\frac{5}{18}>\\frac{4}{15}$.",
                "reason": "the number 75 is greater than 72, and the greater cross product names the greater fraction"
              },
              {
                "step": "$9\\,\\frac{5}{18}$.",
                "reason": "the mixed number with the greater fractional part is greater, since the whole-number parts are equal"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $8\\,\\frac{3}{7}$ and $8\\,\\frac{5}{9}$.",
              "answer": "8 5/9",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The whole-number parts are 8 and 8.",
                  "reason": "comparing the whole-number parts of the two mixed numbers first"
                },
                {
                  "step": "The cross products are $3\\times 9=27$ and $7\\times 5=35$.",
                  "reason": "the whole-number parts are equal, so the cross-multiplication algorithm compares the fractional parts"
                },
                {
                  "step": "$\\frac{5}{9}>\\frac{3}{7}$.",
                  "reason": "the number 35 is greater than 27, and the greater cross product names the greater fraction"
                },
                {
                  "step": "$8\\,\\frac{5}{9}$.",
                  "reason": "the mixed number with the greater fractional part is greater, since the whole-number parts are equal"
                }
              ]
            },
            {
              "prompt": "Find the greater of $6\\,\\frac{7}{11}$ and $6\\,\\frac{5}{8}$.",
              "answer": "6 7/11",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The whole-number parts are 6 and 6.",
                  "reason": "comparing the whole-number parts of the two mixed numbers first"
                },
                {
                  "step": "The cross products are $7\\times 8=56$ and $11\\times 5=55$.",
                  "reason": "the whole-number parts are equal, so the cross-multiplication algorithm compares the fractional parts"
                },
                {
                  "step": "$\\frac{7}{11}>\\frac{5}{8}$.",
                  "reason": "the number 56 is greater than 55, and the greater cross product names the greater fraction"
                },
                {
                  "step": "$6\\,\\frac{7}{11}$.",
                  "reason": "the mixed number with the greater fractional part is greater, since the whole-number parts are equal"
                }
              ]
            },
            {
              "prompt": "Find the greater of $12\\,\\frac{5}{9}$ and $12\\,\\frac{7}{12}$.",
              "answer": "12 7/12",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The whole-number parts are 12 and 12.",
                  "reason": "comparing the whole-number parts of the two mixed numbers first"
                },
                {
                  "step": "The cross products are $5\\times 12=60$ and $9\\times 7=63$.",
                  "reason": "the whole-number parts are equal, so the cross-multiplication algorithm compares the fractional parts"
                },
                {
                  "step": "$\\frac{7}{12}>\\frac{5}{9}$.",
                  "reason": "the number 63 is greater than 60, and the greater cross product names the greater fraction"
                },
                {
                  "step": "$12\\,\\frac{7}{12}$.",
                  "reason": "the mixed number with the greater fractional part is greater, since the whole-number parts are equal"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t15-k2",
      "forms": [
        {
          "example": {
            "problem": "Find a fraction exactly halfway between $\\frac{2}{5}$ and $\\frac{3}{7}$.",
            "lines": [
              {
                "step": "Both fractions become $\\frac{2}{5}=\\frac{28}{70}$ and $\\frac{3}{7}=\\frac{30}{70}$.",
                "reason": "the cancellation law rewrites both fractions with the doubled common denominator"
              },
              {
                "step": "$28<29<30$.",
                "reason": "two numerators that differ by an even amount have a whole number exactly between them"
              },
              {
                "step": "$\\frac{29}{70}$.",
                "reason": "the whole number exactly between the two numerators, over the common denominator"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a fraction exactly halfway between $\\frac{1}{3}$ and $\\frac{2}{5}$.",
              "answer": "11/30",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Both fractions become $\\frac{1}{3}=\\frac{10}{30}$ and $\\frac{2}{5}=\\frac{12}{30}$.",
                  "reason": "the cancellation law rewrites both fractions with the doubled common denominator"
                },
                {
                  "step": "$10<11<12$.",
                  "reason": "two numerators that differ by an even amount have a whole number exactly between them"
                },
                {
                  "step": "$\\frac{11}{30}$.",
                  "reason": "the whole number exactly between the two numerators, over the common denominator"
                }
              ]
            },
            {
              "prompt": "Find a fraction exactly halfway between $\\frac{3}{5}$ and $\\frac{5}{8}$.",
              "answer": "49/80",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Both fractions become $\\frac{3}{5}=\\frac{48}{80}$ and $\\frac{5}{8}=\\frac{50}{80}$.",
                  "reason": "the cancellation law rewrites both fractions with the doubled common denominator"
                },
                {
                  "step": "$48<49<50$.",
                  "reason": "two numerators that differ by an even amount have a whole number exactly between them"
                },
                {
                  "step": "$\\frac{49}{80}$.",
                  "reason": "the whole number exactly between the two numerators, over the common denominator"
                }
              ]
            },
            {
              "prompt": "Find a fraction exactly halfway between $\\frac{2}{9}$ and $\\frac{1}{4}$.",
              "answer": "17/72",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Both fractions become $\\frac{2}{9}=\\frac{16}{72}$ and $\\frac{1}{4}=\\frac{18}{72}$.",
                  "reason": "the cancellation law rewrites both fractions with the doubled common denominator"
                },
                {
                  "step": "$16<17<18$.",
                  "reason": "two numerators that differ by an even amount have a whole number exactly between them"
                },
                {
                  "step": "$\\frac{17}{72}$.",
                  "reason": "the whole number exactly between the two numerators, over the common denominator"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a decimal exactly halfway between $1.035\\,6$ and $1.035\\,7$.",
            "lines": [
              {
                "step": "The decimals are $1.035\\,6$ and $1.035\\,7$.",
                "reason": "the two decimals share every digit except the last, and their last digits are consecutive"
              },
              {
                "step": "$1.035\\,6<1.035\\,65<1.035\\,7$.",
                "reason": "appending the digit 5 to the lesser decimal gives a number greater than it and less than the greater decimal"
              },
              {
                "step": "$1.035\\,65$.",
                "reason": "the digit 5 in the next place is half a unit of the last place, so the decimal lies halfway"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a decimal exactly halfway between $0.617$ and $0.618$.",
              "answer": "0.6175",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The decimals are $0.617$ and $0.618$.",
                  "reason": "the two decimals share every digit except the last, and their last digits are consecutive"
                },
                {
                  "step": "$0.617<0.617\\,5<0.618$.",
                  "reason": "appending the digit 5 to the lesser decimal gives a number greater than it and less than the greater decimal"
                },
                {
                  "step": "$0.617\\,5$.",
                  "reason": "the digit 5 in the next place is half a unit of the last place, so the decimal lies halfway"
                }
              ]
            },
            {
              "prompt": "Find a decimal exactly halfway between $2.093$ and $2.094$.",
              "answer": "2.0935",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The decimals are $2.093$ and $2.094$.",
                  "reason": "the two decimals share every digit except the last, and their last digits are consecutive"
                },
                {
                  "step": "$2.093<2.093\\,5<2.094$.",
                  "reason": "appending the digit 5 to the lesser decimal gives a number greater than it and less than the greater decimal"
                },
                {
                  "step": "$2.093\\,5$.",
                  "reason": "the digit 5 in the next place is half a unit of the last place, so the decimal lies halfway"
                }
              ]
            },
            {
              "prompt": "Find a decimal exactly halfway between $7.452$ and $7.453$.",
              "answer": "7.4525",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The decimals are $7.452$ and $7.453$.",
                  "reason": "the two decimals share every digit except the last, and their last digits are consecutive"
                },
                {
                  "step": "$7.452<7.452\\,5<7.453$.",
                  "reason": "appending the digit 5 to the lesser decimal gives a number greater than it and less than the greater decimal"
                },
                {
                  "step": "$7.452\\,5$.",
                  "reason": "the digit 5 in the next place is half a unit of the last place, so the decimal lies halfway"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t15-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $0.093$ and $0.100\\,18$.",
            "lines": [
              {
                "step": "$0.093\\,00\\text{ and }0.100\\,18$.",
                "reason": "appending zeros to write both decimals with 5 decimal digits"
              },
              {
                "step": "$9\\,300\\text{ and }10\\,018$.",
                "reason": "the digit strings, compared as whole numbers, order the same way as the decimals themselves"
              },
              {
                "step": "$0.100\\,18$.",
                "reason": "the greater whole number names the greater decimal"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $0.47$ and $0.469\\,9$.",
              "answer": "0.47",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "$0.470\\,0\\text{ and }0.469\\,9$.",
                  "reason": "appending zeros to write both decimals with 4 decimal digits"
                },
                {
                  "step": "$4\\,700\\text{ and }4\\,699$.",
                  "reason": "the digit strings, compared as whole numbers, order the same way as the decimals themselves"
                },
                {
                  "step": "$0.47$.",
                  "reason": "the greater whole number names the greater decimal"
                }
              ]
            },
            {
              "prompt": "Find the greater of $0.071\\,5$ and $0.072$.",
              "answer": "0.072",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "$0.071\\,5\\text{ and }0.072\\,0$.",
                  "reason": "appending zeros to write both decimals with 4 decimal digits"
                },
                {
                  "step": "$715\\text{ and }720$.",
                  "reason": "the digit strings, compared as whole numbers, order the same way as the decimals themselves"
                },
                {
                  "step": "$0.072$.",
                  "reason": "the greater whole number names the greater decimal"
                }
              ]
            },
            {
              "prompt": "Find the greater of $2.38$ and $2.379$.",
              "answer": "2.38",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "$2.380\\text{ and }2.379$.",
                  "reason": "appending zeros to write both decimals with 3 decimal digits"
                },
                {
                  "step": "$2\\,380\\text{ and }2\\,379$.",
                  "reason": "the digit strings, compared as whole numbers, order the same way as the decimals themselves"
                },
                {
                  "step": "$2.38$.",
                  "reason": "the greater whole number names the greater decimal"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t15-k4",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{1}{4}$.",
            "figure": {
              "file": "place:line:1/4",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The unit from 0 to 1 is cut into 4 equal parts, and the mark is the end of part 1.",
                "reason": "the denominator 4 gives the number of equal parts of the unit, and the numerator 1 counts the parts from 0"
              },
              {
                "step": "$\\frac{1}{4}=\\frac{1\\times 25}{4\\times 25}=\\frac{25}{100}=0.25$.",
                "reason": "multiplying the numerator and the denominator by 25 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$0.25$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:1/4",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1/4 lies at 0.25, in the tenth from 0.2 to 0.3, between 0 and 1."
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
              "prompt": "Place $\\frac{2}{5}$.",
              "answer": "2/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 2.",
                  "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 2 counts the parts from 0"
                },
                {
                  "step": "$\\frac{2}{5}=\\frac{2\\times 2}{5\\times 2}=\\frac{4}{10}=0.4$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.4$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:2/5",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 2/5 lies at 0.4, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{3}{25}$.",
              "answer": "3/25",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 25 equal parts, and the mark is the end of part 3.",
                  "reason": "the denominator 25 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
                },
                {
                  "step": "$\\frac{3}{25}=\\frac{3\\times 4}{25\\times 4}=\\frac{12}{100}=0.12$.",
                  "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.12$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:3/25",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/25 lies at 0.12, in the tenth from 0.1 to 0.2, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $0.25$.",
            "figure": {
              "file": "place:line:0.25",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $0.25$ is 0, so the mark lies between 0 and 1.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.25=\\frac{25}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 2 and 5 hundredths follow it, so the mark lies past the 2nd cut and short of the next, between $0.2$ and $0.3$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:0.25",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 0.25 marked, between 0 and 1."
                }
              },
              {
                "step": "$0.25$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:0.25",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.25 lies at 0.25, in the tenth from 0.2 to 0.3, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $6.48$.",
              "answer": "6.48",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $6.48$ is 6, so the mark lies between 6 and 7.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.48=\\frac{48}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 4 and 8 hundredths follow it, so the mark lies past the 4th cut and short of the next, between $6.4$ and $6.5$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$6.48$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:6.48",
                    "alt": "Number line from 0 to 7, the whole numbers 0 to 7 marked and each unit cut into tenths. 6.48 lies at 6.48, in the tenth from 6.4 to 6.5, between 6 and 7."
                  }
                }
              ]
            },
            {
              "prompt": "Place $1.27$.",
              "answer": "1.27",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.27$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.27=\\frac{27}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 2 and 7 hundredths follow it, so the mark lies past the 2nd cut and short of the next, between $1.2$ and $1.3$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.27$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.27",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.27 lies at 1.27, in the tenth from 1.2 to 1.3, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $4.35$.",
              "answer": "4.35",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $4.35$ is 4, so the mark lies between 4 and 5.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.35=\\frac{35}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 3 and 5 hundredths follow it, so the mark lies past the 3rd cut and short of the next, between $4.3$ and $4.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$4.35$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:4.35",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 4.35 lies at 4.35, in the tenth from 4.3 to 4.4, between 4 and 5."
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
      "id": "c15-p1",
      "method": "direct proof",
      "statement": "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$, $\\frac{m}{n}<\\frac{k}{\\ell}$ if and only if $m\\ell<nk$.",
      "idea": "Rewrite both fractions as multiples of the same unit fraction $\\frac{1}{n\\ell}$, then compare the counts.",
      "lines": [
        {
          "line": "Suppose that $\\frac{m}{n}<\\frac{k}{\\ell}$.",
          "reason": "assuming the fraction inequality, to prove $m\\ell<nk$"
        },
        {
          "line": "Both fractions become $\\frac{m}{n}=\\frac{m\\ell}{n\\ell}$ and $\\frac{k}{\\ell}=\\frac{nk}{n\\ell}$.",
          "reason": "the rule for writing two fractions with a common denominator"
        },
        {
          "line": "The point $\\frac{m}{n}$ is the $m\\ell$-th multiple of $\\frac{1}{n\\ell}$, and the point $\\frac{k}{\\ell}$ is the $nk$-th multiple of $\\frac{1}{n\\ell}$.",
          "reason": "restating the previous line as counts of copies of the same unit fraction"
        },
        {
          "line": "The $m\\ell$-th multiple of $\\frac{1}{n\\ell}$ is to the left of the $nk$-th multiple.",
          "reason": "multiples of a point progress from left to right, and the assumed inequality puts $\\frac{m}{n}$ left of $\\frac{k}{\\ell}$"
        },
        {
          "line": "So $m\\ell<nk$.",
          "reason": "of two multiples of one point, the one further left has the lesser count"
        },
        {
          "line": "Conversely, suppose that $m\\ell<nk$.",
          "reason": "assuming the whole-number inequality, to prove $\\frac{m}{n}<\\frac{k}{\\ell}$"
        },
        {
          "line": "The $m\\ell$-th multiple of $\\frac{1}{n\\ell}$ is to the left of the $nk$-th multiple.",
          "reason": "multiples of a point progress from left to right, and $m\\ell<nk$ by assumption"
        },
        {
          "line": "$\\frac{m\\ell}{n\\ell}<\\frac{nk}{n\\ell}$.",
          "reason": "restating the previous line as fractions with denominator $n\\ell$"
        },
        {
          "line": "So $\\frac{m}{n}<\\frac{k}{\\ell}$.",
          "reason": "the theorem on equivalent fractions rewrites both sides in their original form"
        },
        {
          "line": "So $\\frac{m}{n}<\\frac{k}{\\ell}$ if and only if $m\\ell<nk$.",
          "reason": "combining both directions"
        }
      ]
    },
    {
      "id": "c15-p2",
      "method": "direct proof",
      "statement": "For whole numbers $a,b,c,d$ with $b\\neq0$ and $d\\neq0$: $\\frac{a}{b}<\\frac{c}{d}$ if and only if $\\frac{a}{a+b}<\\frac{c}{c+d}$.",
      "idea": "Cross-multiply the assumed inequality, then add or remove the common term $ac$ to reach the other form.",
      "lines": [
        {
          "line": "Suppose that $\\frac{a}{b}<\\frac{c}{d}$.",
          "reason": "assuming the first inequality, to prove the second"
        },
        {
          "line": "$ad<bc$.",
          "reason": "the cross-multiplication algorithm applied to the assumed inequality"
        },
        {
          "line": "$ac+ad<ac+bc$.",
          "reason": "adding $ac$ to both sides of an inequality between whole numbers preserves it"
        },
        {
          "line": "$a(c+d)<(a+b)c$.",
          "reason": "the distributive law rewrites both sides of the previous line"
        },
        {
          "line": "So $\\frac{a}{a+b}<\\frac{c}{c+d}$.",
          "reason": "the cross-multiplication algorithm applied in reverse to the previous line"
        },
        {
          "line": "Conversely, suppose that $\\frac{a}{a+b}<\\frac{c}{c+d}$.",
          "reason": "assuming the second inequality, to prove the first"
        },
        {
          "line": "$a(c+d)<c(a+b)$.",
          "reason": "the cross-multiplication algorithm applied to the assumed inequality"
        },
        {
          "line": "$ac+ad<ac+bc$.",
          "reason": "the distributive law rewrites both sides of the previous line"
        },
        {
          "line": "$ad<bc$.",
          "reason": "removing the common term $ac$ from both sides of an inequality between whole numbers preserves it"
        },
        {
          "line": "So $\\frac{a}{b}<\\frac{c}{d}$.",
          "reason": "the cross-multiplication algorithm applied in reverse to the previous line"
        },
        {
          "line": "So $\\frac{a}{b}<\\frac{c}{d}$ if and only if $\\frac{a}{a+b}<\\frac{c}{c+d}$.",
          "reason": "combining both directions"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "c15-s1",
      "statement": "For whole numbers $a,b,c,d$, all nonzero, if $\\frac{a}{b}<\\frac{c}{d}$, then $\\frac{b}{a}>\\frac{d}{c}$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "$ad<bc$.",
            "reason": "the cross-multiplication algorithm applied to the hypothesis $\\frac{a}{b}<\\frac{c}{d}$"
          },
          {
            "line": "$da<cb$.",
            "reason": "the commutative law of multiplication rewrites both products of the previous line"
          },
          {
            "line": "$\\frac{d}{c}<\\frac{b}{a}$.",
            "reason": "the cross-multiplication algorithm applied in reverse to the previous line"
          },
          {
            "line": "So $\\frac{b}{a}>\\frac{d}{c}$.",
            "reason": "the same order relation, read from the other side"
          }
        ]
      }
    },
    {
      "id": "c15-s2",
      "statement": "Take finite decimals $A$ and $B$ with the same number of decimal digits $d$, written $A=\\frac{p}{10^d}$ and $B=\\frac{q}{10^d}$. Then $A<B$ if and only if $p<q$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "A finite decimal with $d$ decimal digits equals a fraction with denominator $10^d$.",
            "reason": "the definition of a finite decimal"
          },
          {
            "line": "Both decimals become $A=\\frac{p}{10^d}$ and $B=\\frac{q}{10^d}$.",
            "reason": "restating both decimals in this fraction form, with the same denominator $10^d$"
          },
          {
            "line": "The inequality $\\frac{p}{10^d}<\\frac{q}{10^d}$ holds if and only if $p<q$.",
            "reason": "fractions with the same denominator order the same way as their numerators"
          },
          {
            "line": "So $A<B$ if and only if $p<q$.",
            "reason": "combining the previous two lines"
          }
        ]
      }
    },
    {
      "id": "c15-s3",
      "statement": "For fractions $\\frac{a}{b}$ and $\\frac{c}{d}$ with $\\frac{a}{b}<\\frac{c}{d}$, there exists a fraction $X$ with $\\frac{a}{b}<X<\\frac{c}{d}$.",
      "method": "proof of existence by construction",
      "check": {
        "proof": [
          {
            "line": "Both fractions become $\\frac{a}{b}=\\frac{2ad}{2bd}$ and $\\frac{c}{d}=\\frac{2bc}{2bd}$.",
            "reason": "the cancellation law, multiplying numerator and denominator by $2d$ and $2b$"
          },
          {
            "line": "$ad<bc$.",
            "reason": "the cross-multiplication algorithm applied to the hypothesis $\\frac{a}{b}<\\frac{c}{d}$"
          },
          {
            "line": "This gives $2ad<ad+bc$ and $ad+bc<2bc$.",
            "reason": "adding $ad$ or $bc$ to both sides of the previous line preserves the inequality $ad<bc$"
          },
          {
            "line": "Let $X=\\frac{ad+bc}{2bd}$.",
            "reason": "defining $X$ as this fraction, whose numerator lies between $2ad$ and $2bc$ by the previous line"
          },
          {
            "line": "So $\\frac{a}{b}<X<\\frac{c}{d}$.",
            "reason": "fractions with the same denominator order the same way as their numerators, applied to the previous two lines"
          }
        ]
      }
    }
  ]
}
