export default {
  "number": 16,
  "manyParts": false,
  "bare": {
    "prompt": "Compute $\\frac{9}{11}-\\frac{4}{11}$.",
    "answer": "5/11",
    "form": "Answer as a fraction in lowest terms.",
    "solution": [
      "Compute $\\frac{9}{11}-\\frac{4}{11}$.",
      "Subtract the numerators, since the two denominators are equal: $\\frac{9}{11}-\\frac{4}{11}=\\frac{5}{11}$.",
      "The fraction $\\frac{5}{11}$ is already in lowest terms, since no whole number greater than 1 divides both 5 and 11.",
      "$\\frac{5}{11}$."
    ]
  },
  "ideas": [
    {
      "name": "Definition of fraction subtraction",
      "concrete": "The difference $\\frac{7}{8}-\\frac{1}{3}$ is the fraction so that $\\left(\\frac{7}{8}-\\frac{1}{3}\\right)+\\frac{1}{3}=\\frac{7}{8}$.",
      "general": "For fractions $\\frac{k}{\\ell}\\ge\\frac{m}{n}$, the **difference** $\\frac{k}{\\ell}-\\frac{m}{n}$ is the fraction so that $\\left(\\frac{k}{\\ell}-\\frac{m}{n}\\right)+\\frac{m}{n}=\\frac{k}{\\ell}$."
    },
    {
      "name": "The general subtraction formula",
      "concrete": "$\\frac{4}{5}-\\frac{2}{7}=\\frac{(4\\times7)-(5\\times2)}{5\\times7}=\\frac{18}{35}$.",
      "general": "For fractions $\\frac{k}{\\ell}\\ge\\frac{m}{n}$, the difference is $\\frac{k}{\\ell}-\\frac{m}{n}=\\frac{kn-\\ell m}{\\ell n}$."
    },
    {
      "name": "Subtracting fractions with the same denominator",
      "concrete": "$\\frac{6}{7}-\\frac{2}{7}=\\frac{4}{7}$.",
      "general": "For whole numbers $k\\ge m$ and $\\ell>0$, the difference is $\\frac{k}{\\ell}-\\frac{m}{\\ell}=\\frac{k-m}{\\ell}$."
    },
    {
      "name": "Trading in mixed-number subtraction",
      "concrete": "$17\\frac{2}{5}=16+\\frac{7}{5}$, since $16+1+\\frac{2}{5}=16+\\frac{5}{5}+\\frac{2}{5}=16+\\frac{7}{5}$.",
      "general": "To subtract mixed numbers $q\\frac{r}{\\ell}-p\\frac{s}{\\ell}$ when $\\frac{r}{\\ell}<\\frac{s}{\\ell}$, first trade one whole from $q$ into the fractional part: $q\\frac{r}{\\ell}=(q-1)+\\frac{\\ell+r}{\\ell}$. Then subtract."
    },
    {
      "name": "Order and addition or subtraction of fractions",
      "concrete": "$\\frac{2}{5}<\\frac{4}{5}$, and $\\frac{4}{5}-\\frac{2}{5}=\\frac{2}{5}$, a positive fraction.",
      "general": "For fractions $A,B,C,D$: the inequality $A<B$ is equivalent to $A+C=B$ for some nonzero fraction $C$. If $B>A$, then $B-A>0$. The inequality $A<B$ is equivalent to $A+C<B+C$ for every fraction $C$. If $A<B$ and $C<D$, then $A+C<B+D$."
    }
  ],
  "kinds": [
    {
      "id": "t16-k1",
      "forms": [
        {
          "example": {
            "problem": "Compute $\\frac{5}{6}-\\frac{3}{8}$.",
            "lines": [
              {
                "step": "The numerator is $(5\\times 8)-(6\\times 3)=22$ and the denominator is $6\\times 8=48$.",
                "reason": "the general subtraction formula computes the numerator and denominator this way"
              },
              {
                "step": "$\\frac{5}{6}-\\frac{3}{8}=\\frac{22}{48}$.",
                "reason": "the general subtraction formula gives this fraction as the difference"
              },
              {
                "step": "$\\frac{11}{24}$.",
                "reason": "the number 2 divides both 22 and 48, so the cancellation law reduces the fraction to lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\frac{7}{8}-\\frac{1}{6}$.",
              "answer": "17/24",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The numerator is $(7\\times 6)-(8\\times 1)=34$ and the denominator is $8\\times 6=48$.",
                  "reason": "the general subtraction formula computes the numerator and denominator this way"
                },
                {
                  "step": "$\\frac{7}{8}-\\frac{1}{6}=\\frac{34}{48}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference"
                },
                {
                  "step": "$\\frac{17}{24}$.",
                  "reason": "the number 2 divides both 34 and 48, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{9}{10}-\\frac{1}{6}$.",
              "answer": "11/15",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The numerator is $(9\\times 6)-(10\\times 1)=44$ and the denominator is $10\\times 6=60$.",
                  "reason": "the general subtraction formula computes the numerator and denominator this way"
                },
                {
                  "step": "$\\frac{9}{10}-\\frac{1}{6}=\\frac{44}{60}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference"
                },
                {
                  "step": "$\\frac{11}{15}$.",
                  "reason": "the number 4 divides both 44 and 60, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{3}{4}-\\frac{1}{6}$.",
              "answer": "7/12",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The numerator is $(3\\times 6)-(4\\times 1)=14$ and the denominator is $4\\times 6=24$.",
                  "reason": "the general subtraction formula computes the numerator and denominator this way"
                },
                {
                  "step": "$\\frac{3}{4}-\\frac{1}{6}=\\frac{14}{24}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference"
                },
                {
                  "step": "$\\frac{7}{12}$.",
                  "reason": "the number 2 divides both 14 and 24, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\frac{11}{15}-\\frac{4}{15}$.",
            "lines": [
              {
                "step": "$\\frac{11}{15}-\\frac{4}{15}=\\frac{11-4}{15}$.",
                "reason": "fractions with the same denominator subtract by subtracting their numerators"
              },
              {
                "step": "$11-4=7$.",
                "reason": "the number 7 is the difference of the two numerators"
              },
              {
                "step": "$\\frac{7}{15}$.",
                "reason": "no whole number greater than 1 divides both 7 and 15, so the fraction is already in lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\frac{14}{19}-\\frac{5}{19}$.",
              "answer": "9/19",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{14}{19}-\\frac{5}{19}=\\frac{14-5}{19}$.",
                  "reason": "fractions with the same denominator subtract by subtracting their numerators"
                },
                {
                  "step": "$14-5=9$.",
                  "reason": "the number 9 is the difference of the two numerators"
                },
                {
                  "step": "$\\frac{9}{19}$.",
                  "reason": "no whole number greater than 1 divides both 9 and 19, so the fraction is already in lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{17}{20}-\\frac{8}{20}$.",
              "answer": "9/20",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{17}{20}-\\frac{8}{20}=\\frac{17-8}{20}$.",
                  "reason": "fractions with the same denominator subtract by subtracting their numerators"
                },
                {
                  "step": "$17-8=9$.",
                  "reason": "the number 9 is the difference of the two numerators"
                },
                {
                  "step": "$\\frac{9}{20}$.",
                  "reason": "no whole number greater than 1 divides both 9 and 20, so the fraction is already in lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{22}{25}-\\frac{9}{25}$.",
              "answer": "13/25",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{22}{25}-\\frac{9}{25}=\\frac{22-9}{25}$.",
                  "reason": "fractions with the same denominator subtract by subtracting their numerators"
                },
                {
                  "step": "$22-9=13$.",
                  "reason": "the number 13 is the difference of the two numerators"
                },
                {
                  "step": "$\\frac{13}{25}$.",
                  "reason": "no whole number greater than 1 divides both 13 and 25, so the fraction is already in lowest terms"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t16-k2",
      "forms": [
        {
          "example": {
            "problem": "Compute $17\\,\\frac{2}{5}-7\\,\\frac{3}{4}$.",
            "lines": [
              {
                "step": "Convert each mixed number to an improper fraction: $17\\,\\frac{2}{5}=\\frac{87}{5}$ and $7\\,\\frac{3}{4}=\\frac{31}{4}$.",
                "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
              },
              {
                "step": "$\\frac{87}{5}-\\frac{31}{4}=\\frac{193}{20}$.",
                "reason": "the general subtraction formula gives this fraction as the difference"
              },
              {
                "step": "$9\\,\\frac{13}{20}$.",
                "reason": "writing a whole number plus a proper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $12\\,\\frac{3}{7}-5\\,\\frac{2}{3}$.",
              "answer": "6 16/21",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert each mixed number to an improper fraction: $12\\,\\frac{3}{7}=\\frac{87}{7}$ and $5\\,\\frac{2}{3}=\\frac{17}{3}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{87}{7}-\\frac{17}{3}=\\frac{142}{21}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference"
                },
                {
                  "step": "$6\\,\\frac{16}{21}$.",
                  "reason": "writing a whole number plus a proper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $8\\,\\frac{1}{4}-3\\,\\frac{4}{5}$.",
              "answer": "4 9/20",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert each mixed number to an improper fraction: $8\\,\\frac{1}{4}=\\frac{33}{4}$ and $3\\,\\frac{4}{5}=\\frac{19}{5}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{33}{4}-\\frac{19}{5}=\\frac{89}{20}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference"
                },
                {
                  "step": "$4\\,\\frac{9}{20}$.",
                  "reason": "writing a whole number plus a proper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $14\\,\\frac{5}{9}-6\\,\\frac{1}{2}$.",
              "answer": "8 1/18",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert each mixed number to an improper fraction: $14\\,\\frac{5}{9}=\\frac{131}{9}$ and $6\\,\\frac{1}{2}=\\frac{13}{2}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{131}{9}-\\frac{13}{2}=\\frac{145}{18}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference"
                },
                {
                  "step": "$8\\,\\frac{1}{18}$.",
                  "reason": "writing a whole number plus a proper fraction as a mixed number"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t16-k3",
      "forms": [
        {
          "example": {
            "problem": "Compute $11\\,\\frac{2}{5}-4\\,\\frac{3}{4}$.",
            "lines": [
              {
                "step": "$11\\,\\frac{2}{5}=10+\\frac{7}{5}$.",
                "reason": "trading one whole from 11 into the fractional part, since $\\frac{2}{5}<\\frac{3}{4}$"
              },
              {
                "step": "$(10-4)+(\\frac{7}{5}-\\frac{3}{4})$.",
                "reason": "subtracting the whole-number parts and the fractional parts separately"
              },
              {
                "step": "$\\frac{7}{5}-\\frac{3}{4}=\\frac{13}{20}$.",
                "reason": "the general subtraction formula gives this fraction as the difference of the fractional parts"
              },
              {
                "step": "$6+\\frac{13}{20}$.",
                "reason": "the whole-number difference combines with the fraction"
              },
              {
                "step": "$6\\,\\frac{13}{20}$.",
                "reason": "writing a whole number plus a proper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $8\\,\\frac{1}{3}-2\\,\\frac{4}{7}$.",
              "answer": "5 16/21",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "$8\\,\\frac{1}{3}=7+\\frac{4}{3}$.",
                  "reason": "trading one whole from 8 into the fractional part, since $\\frac{1}{3}<\\frac{4}{7}$"
                },
                {
                  "step": "$(7-2)+(\\frac{4}{3}-\\frac{4}{7})$.",
                  "reason": "subtracting the whole-number parts and the fractional parts separately"
                },
                {
                  "step": "$\\frac{4}{3}-\\frac{4}{7}=\\frac{16}{21}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference of the fractional parts"
                },
                {
                  "step": "$5+\\frac{16}{21}$.",
                  "reason": "the whole-number difference combines with the fraction"
                },
                {
                  "step": "$5\\,\\frac{16}{21}$.",
                  "reason": "writing a whole number plus a proper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $13\\,\\frac{1}{6}-7\\,\\frac{4}{5}$.",
              "answer": "5 11/30",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "$13\\,\\frac{1}{6}=12+\\frac{7}{6}$.",
                  "reason": "trading one whole from 13 into the fractional part, since $\\frac{1}{6}<\\frac{4}{5}$"
                },
                {
                  "step": "$(12-7)+(\\frac{7}{6}-\\frac{4}{5})$.",
                  "reason": "subtracting the whole-number parts and the fractional parts separately"
                },
                {
                  "step": "$\\frac{7}{6}-\\frac{4}{5}=\\frac{11}{30}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference of the fractional parts"
                },
                {
                  "step": "$5+\\frac{11}{30}$.",
                  "reason": "the whole-number difference combines with the fraction"
                },
                {
                  "step": "$5\\,\\frac{11}{30}$.",
                  "reason": "writing a whole number plus a proper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $9\\,\\frac{2}{9}-3\\,\\frac{1}{2}$.",
              "answer": "5 13/18",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "$9\\,\\frac{2}{9}=8+\\frac{11}{9}$.",
                  "reason": "trading one whole from 9 into the fractional part, since $\\frac{2}{9}<\\frac{1}{2}$"
                },
                {
                  "step": "$(8-3)+(\\frac{11}{9}-\\frac{1}{2})$.",
                  "reason": "subtracting the whole-number parts and the fractional parts separately"
                },
                {
                  "step": "$\\frac{11}{9}-\\frac{1}{2}=\\frac{13}{18}$.",
                  "reason": "the general subtraction formula gives this fraction as the difference of the fractional parts"
                },
                {
                  "step": "$5+\\frac{13}{18}$.",
                  "reason": "the whole-number difference combines with the fraction"
                },
                {
                  "step": "$5\\,\\frac{13}{18}$.",
                  "reason": "writing a whole number plus a proper fraction as a mixed number"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t16-k4",
      "forms": [
        {
          "example": {
            "problem": "Compute $16.05-9.378\\,4$.",
            "lines": [
              {
                "step": "$16.05-9.378\\,4=16.050\\,0-9.378\\,4$.",
                "reason": "appending zeros to write both decimals with 4 decimal digits"
              },
              {
                "step": "$160\\,500-93\\,784=66\\,716$.",
                "reason": "lining up the decimal points, so the digits subtract as whole numbers"
              },
              {
                "step": "$6.671\\,6$.",
                "reason": "the decimal point goes 4 digits from the right end of $66\\,716$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $9.214-4.07$.",
              "answer": "5.144",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$9.214-4.07=9.214-4.070$.",
                  "reason": "appending zeros to write both decimals with 3 decimal digits"
                },
                {
                  "step": "$9\\,214-4\\,070=5\\,144$.",
                  "reason": "lining up the decimal points, so the digits subtract as whole numbers"
                },
                {
                  "step": "$5.144$.",
                  "reason": "the decimal point goes 3 digits from the right end of $5\\,144$"
                }
              ]
            },
            {
              "prompt": "Compute $7.3-2.58$.",
              "answer": "4.72",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$7.3-2.58=7.30-2.58$.",
                  "reason": "appending zeros to write both decimals with 2 decimal digits"
                },
                {
                  "step": "$730-258=472$.",
                  "reason": "lining up the decimal points, so the digits subtract as whole numbers"
                },
                {
                  "step": "$4.72$.",
                  "reason": "the decimal point goes 2 digits from the right end of $472$"
                }
              ]
            },
            {
              "prompt": "Compute $12.6-5.917$.",
              "answer": "6.683",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$12.6-5.917=12.600-5.917$.",
                  "reason": "appending zeros to write both decimals with 3 decimal digits"
                },
                {
                  "step": "$12\\,600-5\\,917=6\\,683$.",
                  "reason": "lining up the decimal points, so the digits subtract as whole numbers"
                },
                {
                  "step": "$6.683$.",
                  "reason": "the decimal point goes 3 digits from the right end of $6\\,683$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t16-k5",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{3}{2}$.",
            "figure": {
              "file": "place:line:3/2",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$3=1\\times 2+1$, so $\\frac{3}{2}=1+\\frac{1}{2}$.",
                "reason": "3 copies of $\\frac{1}{2}$ hold 1 group of 2 copies, each group making 1, with 1 copy left over"
              },
              {
                "step": "The mark lies between 1 and 2, $\\frac{1}{2}$ of the way from 1 to 2.",
                "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 1 of the 2 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:3/2",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 3/2 marked, between 1 and 2."
                }
              },
              {
                "step": "$\\frac{1}{2}=\\frac{1\\times 5}{2\\times 5}=\\frac{5}{10}=0.5$.",
                "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$1.5$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:3/2",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/2 lies at 1.5, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{7}{2}$.",
              "answer": "7/2",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$7=3\\times 2+1$, so $\\frac{7}{2}=3+\\frac{1}{2}$.",
                  "reason": "7 copies of $\\frac{1}{2}$ hold 3 groups of 2 copies, each group making 1, with 1 copy left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{1}{2}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 1 of the 2 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{1}{2}=\\frac{1\\times 5}{2\\times 5}=\\frac{5}{10}=0.5$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.5$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:7/2",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 7/2 lies at 3.5, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{9}{4}$.",
              "answer": "9/4",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$9=2\\times 4+1$, so $\\frac{9}{4}=2+\\frac{1}{4}$.",
                  "reason": "9 copies of $\\frac{1}{4}$ hold 2 groups of 4 copies, each group making 1, with 1 copy left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{1}{4}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 1 of the 4 equal parts of that unit come before it"
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
            {
              "prompt": "Place $\\frac{17}{5}$.",
              "answer": "17/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$17=3\\times 5+2$, so $\\frac{17}{5}=3+\\frac{2}{5}$.",
                  "reason": "17 copies of $\\frac{1}{5}$ hold 3 groups of 5 copies, each group making 1, with 2 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{2}{5}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 2 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{2}{5}=\\frac{2\\times 2}{5\\times 2}=\\frac{4}{10}=0.4$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.4$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:17/5",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 17/5 lies at 3.4, between 3 and 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $1.35$.",
            "figure": {
              "file": "place:line:1.35",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $1.35$ is 1, so the mark lies between 1 and 2.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.35=\\frac{35}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 3 and 5 hundredths follow it, so the mark lies past the 3rd cut and short of the next, between $1.3$ and $1.4$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:1.35",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 1.35 marked, between 1 and 2."
                }
              },
              {
                "step": "$1.35$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:1.35",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.35 lies at 1.35, in the tenth from 1.3 to 1.4, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $3.75$.",
              "answer": "3.75",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
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
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
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
              "prompt": "Place $0.56$.",
              "answer": "0.56",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.56$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.56=\\frac{56}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 5 and 6 hundredths follow it, so the mark lies past the 5th cut and short of the next, between $0.5$ and $0.6$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.56$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.56",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.56 lies at 0.56, in the tenth from 0.5 to 0.6, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{29}{10}$.",
            "figure": {
              "file": "place:line:29/10",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "$29=2\\times 10+9$, so $\\frac{29}{10}=2+\\frac{9}{10}$.",
                "reason": "29 copies of $\\frac{1}{10}$ hold 2 groups of 10 copies, each group making 1, with 9 copies left over"
              },
              {
                "step": "The mark lies between 2 and 3, $\\frac{9}{10}$ of the way from 2 to 3.",
                "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 9 of the 10 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:29/10",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 29/10 marked, between 2 and 3."
                }
              },
              {
                "step": "$\\frac{9}{10}=0.9$.",
                "reason": "a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$2.9$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:29/10",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 29/10 lies at 2.9, between 2 and 3."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{39}{10}$.",
              "answer": "39/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$39=3\\times 10+9$, so $\\frac{39}{10}=3+\\frac{9}{10}$.",
                  "reason": "39 copies of $\\frac{1}{10}$ hold 3 groups of 10 copies, each group making 1, with 9 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{9}{10}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 9 of the 10 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{9}{10}=0.9$.",
                  "reason": "a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.9$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:39/10",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 39/10 lies at 3.9, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{43}{10}$.",
              "answer": "43/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$43=4\\times 10+3$, so $\\frac{43}{10}=4+\\frac{3}{10}$.",
                  "reason": "43 copies of $\\frac{1}{10}$ hold 4 groups of 10 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 4 and 5, $\\frac{3}{10}$ of the way from 4 to 5.",
                  "reason": "the whole part 4 puts the mark in the unit from 4 to 5, and 3 of the 10 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{10}=0.3$.",
                  "reason": "a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$4.3$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:43/10",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 43/10 lies at 4.3, between 4 and 5."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{47}{10}$.",
              "answer": "47/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$47=4\\times 10+7$, so $\\frac{47}{10}=4+\\frac{7}{10}$.",
                  "reason": "47 copies of $\\frac{1}{10}$ hold 4 groups of 10 copies, each group making 1, with 7 copies left over"
                },
                {
                  "step": "The mark lies between 4 and 5, $\\frac{7}{10}$ of the way from 4 to 5.",
                  "reason": "the whole part 4 puts the mark in the unit from 4 to 5, and 7 of the 10 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{7}{10}=0.7$.",
                  "reason": "a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$4.7$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:47/10",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 47/10 lies at 4.7, between 4 and 5."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $2.3$.",
            "figure": {
              "file": "place:line:2.3",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $2.3$ is 2, so the mark lies between 2 and 3.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.3=\\frac{3}{10}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 3 and no hundredths follow it, so the mark is the 3rd cut of the unit from $2$ to $3$, at $2.3$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:2.3",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 2.3 marked, between 2 and 3."
                }
              },
              {
                "step": "$2.3$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:2.3",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.3 lies at 2.3, between 2 and 3."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.6$.",
              "answer": "0.6",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
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
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
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
            {
              "prompt": "Place $1.7$.",
              "answer": "1.7",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.7$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.7=\\frac{7}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and no hundredths follow it, so the mark is the 7th cut of the unit from $1$ to $2$, at $1.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.7$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.7",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.7 lies at 1.7, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $3.8$.",
              "answer": "3.8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $3.8$ is 3, so the mark lies between 3 and 4.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.8=\\frac{8}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 8 and no hundredths follow it, so the mark is the 8th cut of the unit from $3$ to $4$, at $3.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.8$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:3.8",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.8 lies at 3.8, between 3 and 4."
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
      "id": "c16-p1",
      "method": "direct proof",
      "statement": "For fractions $\\frac{k}{\\ell}\\ge\\frac{m}{n}$, the difference is $\\frac{k}{\\ell}-\\frac{m}{n}=\\frac{kn-\\ell m}{\\ell n}$.",
      "idea": "Rewrite both fractions with the common denominator $\\ell n$, then subtract numerators.",
      "lines": [
        {
          "line": "Both fractions become $\\frac{k}{\\ell}=\\frac{kn}{\\ell n}$ and $\\frac{m}{n}=\\frac{\\ell m}{\\ell n}$.",
          "reason": "the rule for writing two fractions with a common denominator, from the cancellation law"
        },
        {
          "line": "$kn\\ge\\ell m$.",
          "reason": "the cross-multiplication algorithm applied to the hypothesis $\\frac{k}{\\ell}\\ge\\frac{m}{n}$"
        },
        {
          "line": "$\\frac{kn}{\\ell n}-\\frac{\\ell m}{\\ell n}=\\frac{kn-\\ell m}{\\ell n}$.",
          "reason": "fractions with the same denominator subtract by subtracting their numerators, valid since $kn\\ge\\ell m$"
        },
        {
          "line": "So $\\frac{k}{\\ell}-\\frac{m}{n}=\\frac{kn-\\ell m}{\\ell n}$.",
          "reason": "combining the previous three lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "c16-s1",
      "statement": "For whole numbers $k\\ge m$ and $\\ell>0$, the difference is $\\frac{k}{\\ell}-\\frac{m}{\\ell}=\\frac{k-m}{\\ell}$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "$\\frac{k}{\\ell}-\\frac{m}{\\ell}=\\frac{k\\ell-\\ell m}{\\ell\\ell}$.",
            "reason": "the general subtraction formula with $n$ replaced by $\\ell$"
          },
          {
            "line": "$k\\ell-\\ell m=(k-m)\\ell$.",
            "reason": "the distributive law"
          },
          {
            "line": "$\\frac{(k-m)\\ell}{\\ell\\ell}=\\frac{k-m}{\\ell}$.",
            "reason": "the cancellation law, cancelling the common divisor $\\ell$"
          },
          {
            "line": "So $\\frac{k}{\\ell}-\\frac{m}{\\ell}=\\frac{k-m}{\\ell}$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "c16-s2",
      "statement": "For fractions $A$ and $B$, the inequality $A<B$ is equivalent to $A+C=B$ for some nonzero fraction $C$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "Suppose that $A<B$.",
            "reason": "assuming the first statement, to prove there exists nonzero $C$ with $A+C=B$"
          },
          {
            "line": "Let $C$ be the fraction $B-A$, defined since $B>A$.",
            "reason": "the definition of subtraction requires the first fraction to be at least the second, and $A<B$ gives $B>A$"
          },
          {
            "line": "$C+A=B$, so $A+C=B$.",
            "reason": "the definition of subtraction, then the commutative law of addition"
          },
          {
            "line": "The fraction $C$ is nonzero, since $A\\neq B$.",
            "reason": "if $C$ were 0, adding it would leave $A$ unchanged, so $B$ would equal $A$"
          },
          {
            "line": "Conversely, suppose that $A+C=B$ for some nonzero fraction $C$.",
            "reason": "assuming the second statement, to prove $A<B$"
          },
          {
            "line": "The point $A+C$ lies to the right of $A$, since $C$ is a nonzero length concatenated onto $A$.",
            "reason": "the definition of fraction addition as concatenation of segments"
          },
          {
            "line": "So $B$ lies to the right of $A$, which means $A<B$.",
            "reason": "combining the previous two lines, since $A+C=B$"
          },
          {
            "line": "So $A<B$ is equivalent to $A+C=B$ for some nonzero fraction $C$.",
            "reason": "combining both directions"
          }
        ]
      }
    },
    {
      "id": "c16-s3",
      "statement": "For fractions $A$, $B$, $C$, the inequality $A<B$ is equivalent to $A+C<B+C$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "Write $A$, $B$, $C$ with a common denominator $n$: $A=\\frac{p}{n}$, $B=\\frac{q}{n}$, $C=\\frac{r}{n}$.",
            "reason": "extending the rule for writing two fractions with a common denominator to three fractions"
          },
          {
            "line": "These give $A+C=\\frac{p+r}{n}$ and $B+C=\\frac{q+r}{n}$.",
            "reason": "fractions with the same denominator add by adding their numerators"
          },
          {
            "line": "The inequality $A<B$ is equivalent to $p<q$, and $A+C<B+C$ is equivalent to $p+r<q+r$.",
            "reason": "fractions with the same denominator order the same way as their numerators"
          },
          {
            "line": "The whole-number inequality $p<q$ is equivalent to $p+r<q+r$.",
            "reason": "adding or subtracting the same whole number on both sides of a whole-number inequality preserves it"
          },
          {
            "line": "So $A<B$ is equivalent to $A+C<B+C$.",
            "reason": "combining the previous two lines"
          }
        ]
      }
    },
    {
      "id": "c16-s4",
      "statement": "For fractions $A,B,C,D$: if $A<B$ and $C<D$, then $A+C<B+D$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "Write $A,B,C,D$ with a common denominator $n$: $A=\\frac{p}{n}$, $B=\\frac{q}{n}$, $C=\\frac{r}{n}$, $D=\\frac{s}{n}$.",
            "reason": "extending the rule for writing two fractions with a common denominator to four fractions"
          },
          {
            "line": "These give $p<q$ and $r<s$.",
            "reason": "fractions with the same denominator order the same way as their numerators, applied to the hypotheses $A<B$ and $C<D$"
          },
          {
            "line": "$p+r<q+s$.",
            "reason": "adding two whole-number inequalities term by term preserves the inequality"
          },
          {
            "line": "These give $A+C=\\frac{p+r}{n}$ and $B+D=\\frac{q+s}{n}$.",
            "reason": "fractions with the same denominator add by adding their numerators"
          },
          {
            "line": "So $A+C<B+D$.",
            "reason": "fractions with the same denominator order the same way as their numerators, applied to the previous two lines"
          }
        ]
      }
    }
  ]
}
