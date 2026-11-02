export default {
  "number": 13,
  "manyParts": true,
  "ideas": [
    {
      "name": "Divisibility of whole numbers",
      "concrete": "Since $24=3\\times8$, 3 divides 24, and 24 is divisible by 3.",
      "general": "For whole numbers $m$ and $n$ with $n$ nonzero, $n$ **divides** $m$ if $m=kn$ for some whole number $k$. Then $m$ is divisible by $n$."
    },
    {
      "name": "The cancellation law",
      "concrete": "The fraction $\\frac{2}{3}$ equals $\\frac{5\\times2}{5\\times3}=\\frac{10}{15}$, so $\\frac{10}{15}$ and $\\frac{2}{3}$ are equal fractions.",
      "general": "For a fraction $\\frac{m}{n}$ and a nonzero whole number $c$, $\\frac{m}{n}=\\frac{cm}{cn}$. This is the **cancellation law**. Read right to left, the common divisor $c$ cancels from the numerator and the denominator."
    },
    {
      "name": "Reduced fraction",
      "concrete": "The fraction $\\frac{2}{3}$ is reduced, since no whole number greater than 1 divides both 2 and 3. The fraction $\\frac{18}{27}$ is not reduced, since 9 divides both 18 and 27.",
      "general": "A fraction $\\frac{k}{\\ell}$ is **reduced** if no whole number $c$ greater than 1 divides both $k$ and $\\ell$. A reduced fraction is in lowest terms. Every fraction equals one and only one fraction in reduced form."
    },
    {
      "name": "Appending or removing a trailing zero",
      "concrete": "The decimals $5.890\\,0$ and $5.89$ have the same value.",
      "general": "Appending or removing a trailing zero at the right end of a finite decimal does not change its value."
    },
    {
      "name": "The fundamental fact of fraction pairs",
      "concrete": "The fraction $\\frac{4}{3}$ equals $\\frac{28}{21}$, and the fraction $\\frac{9}{7}$ equals $\\frac{27}{21}$. These two fractions have the same denominator 21.",
      "general": "Every two fractions have fraction symbols with the same denominator. The fraction $\\frac{k}{\\ell}$ equals $\\frac{kn}{\\ell n}$, and the fraction $\\frac{m}{n}$ equals $\\frac{\\ell m}{\\ell n}$."
    },
    {
      "name": "Two decimals with the same number of decimal digits",
      "concrete": "The decimals $0.021$ and $6.122\\,95$ both have forms with 5 decimal digits: $0.021\\,00$ and $6.122\\,95$.",
      "general": "Every pair of decimals has forms with the same number of decimal digits. Add zeros to the right end of the decimal with fewer decimal digits until both have the same number."
    },
    {
      "name": "The cross-multiplication algorithm",
      "concrete": "The equality $\\frac{2}{3}=\\frac{4}{6}$ holds, since $2\\times6=3\\times4$.",
      "general": "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$, $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$. This is the **cross-multiplication algorithm**."
    }
  ],
  "kinds": [
    {
      "id": "t13-k1",
      "forms": [
        {
          "example": {
            "problem": "Write $\\frac{1\\,651}{762}$ in lowest terms.",
            "lines": [
              {
                "step": "The number 127 divides both $1\\,651$ and 762: $1\\,651 = 127\\times 13$ and $762 = 127\\times 6$.",
                "reason": "trial division"
              },
              {
                "step": "$\\frac{1\\,651}{762} = \\frac{127\\times 13}{127\\times 6}$.",
                "reason": "rewriting numerator and denominator using the divisions"
              },
              {
                "step": "$\\frac{127\\times 13}{127\\times 6} = \\frac{13}{6}$.",
                "reason": "the cancellation law, dividing numerator and denominator by the common divisor 127"
              },
              {
                "step": "The numbers 13 and 6 share no common divisor greater than 1.",
                "reason": "the definition of a reduced fraction"
              },
              {
                "step": "$\\frac{13}{6}$.",
                "reason": "combining the previous two lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\frac{27}{126}$ in lowest terms.",
              "answer": "3/14",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The number 9 divides both 27 and 126: $27 = 9\\times 3$ and $126 = 9\\times 14$.",
                  "reason": "trial division"
                },
                {
                  "step": "$\\frac{27}{126} = \\frac{9\\times 3}{9\\times 14}$.",
                  "reason": "rewriting numerator and denominator using the divisions"
                },
                {
                  "step": "$\\frac{9\\times 3}{9\\times 14} = \\frac{3}{14}$.",
                  "reason": "the cancellation law, dividing numerator and denominator by the common divisor 9"
                },
                {
                  "step": "The numbers 3 and 14 share no common divisor greater than 1.",
                  "reason": "the definition of a reduced fraction"
                },
                {
                  "step": "$\\frac{3}{14}$.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Write $\\frac{72}{48}$ in lowest terms.",
              "answer": "3/2",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The number 24 divides both 72 and 48: $72 = 24\\times 3$ and $48 = 24\\times 2$.",
                  "reason": "trial division"
                },
                {
                  "step": "$\\frac{72}{48} = \\frac{24\\times 3}{24\\times 2}$.",
                  "reason": "rewriting numerator and denominator using the divisions"
                },
                {
                  "step": "$\\frac{24\\times 3}{24\\times 2} = \\frac{3}{2}$.",
                  "reason": "the cancellation law, dividing numerator and denominator by the common divisor 24"
                },
                {
                  "step": "The numbers 3 and 2 share no common divisor greater than 1.",
                  "reason": "the definition of a reduced fraction"
                },
                {
                  "step": "$\\frac{3}{2}$.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Write $\\frac{42}{91}$ in lowest terms.",
              "answer": "6/13",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The number 7 divides both 42 and 91: $42 = 7\\times 6$ and $91 = 7\\times 13$.",
                  "reason": "trial division"
                },
                {
                  "step": "$\\frac{42}{91} = \\frac{7\\times 6}{7\\times 13}$.",
                  "reason": "rewriting numerator and denominator using the divisions"
                },
                {
                  "step": "$\\frac{7\\times 6}{7\\times 13} = \\frac{6}{13}$.",
                  "reason": "the cancellation law, dividing numerator and denominator by the common divisor 7"
                },
                {
                  "step": "The numbers 6 and 13 share no common divisor greater than 1.",
                  "reason": "the definition of a reduced fraction"
                },
                {
                  "step": "$\\frac{6}{13}$.",
                  "reason": "combining the previous two lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t13-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $\\frac{161}{91}$ and $\\frac{253}{143}$ are equal.",
            "lines": [
              {
                "step": "$161\\times 143 = 23\\,023$.",
                "reason": "computing the product of the first numerator and the second denominator"
              },
              {
                "step": "$91\\times 253 = 23\\,023$.",
                "reason": "computing the product of the first denominator and the second numerator"
              },
              {
                "step": "The two products are equal.",
                "reason": "both equal $23\\,023$"
              },
              {
                "step": "$\\frac{161}{91}=\\frac{253}{143}$.",
                "reason": "the cross-multiplication algorithm: $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$"
              },
              {
                "step": "Yes.",
                "reason": "combining the previous two lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\frac{7}{12}$ and $\\frac{35}{60}$ are equal.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$7\\times 60 = 420$.",
                  "reason": "computing the product of the first numerator and the second denominator"
                },
                {
                  "step": "$12\\times 35 = 420$.",
                  "reason": "computing the product of the first denominator and the second numerator"
                },
                {
                  "step": "The two products are equal.",
                  "reason": "both equal $420$"
                },
                {
                  "step": "$\\frac{7}{12}=\\frac{35}{60}$.",
                  "reason": "the cross-multiplication algorithm: $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$"
                },
                {
                  "step": "Yes.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{6}{11}$ and $\\frac{24}{44}$ are equal.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$6\\times 44 = 264$.",
                  "reason": "computing the product of the first numerator and the second denominator"
                },
                {
                  "step": "$11\\times 24 = 264$.",
                  "reason": "computing the product of the first denominator and the second numerator"
                },
                {
                  "step": "The two products are equal.",
                  "reason": "both equal $264$"
                },
                {
                  "step": "$\\frac{6}{11}=\\frac{24}{44}$.",
                  "reason": "the cross-multiplication algorithm: $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$"
                },
                {
                  "step": "Yes.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{3}{7}$ and $\\frac{12}{28}$ are equal.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$3\\times 28 = 84$.",
                  "reason": "computing the product of the first numerator and the second denominator"
                },
                {
                  "step": "$7\\times 12 = 84$.",
                  "reason": "computing the product of the first denominator and the second numerator"
                },
                {
                  "step": "The two products are equal.",
                  "reason": "both equal $84$"
                },
                {
                  "step": "$\\frac{3}{7}=\\frac{12}{28}$.",
                  "reason": "the cross-multiplication algorithm: $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$"
                },
                {
                  "step": "Yes.",
                  "reason": "combining the previous two lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $\\frac{14}{39}$ and $\\frac{27}{76}$ are equal.",
            "lines": [
              {
                "step": "$14\\times 76 = 1\\,064$.",
                "reason": "computing the product of the first numerator and the second denominator"
              },
              {
                "step": "$39\\times 27 = 1\\,053$.",
                "reason": "computing the product of the first denominator and the second numerator"
              },
              {
                "step": "The two products are not equal.",
                "reason": "the products $1\\,064$ and $1\\,053$ differ"
              },
              {
                "step": "$\\frac{14}{39}\\neq\\frac{27}{76}$.",
                "reason": "the cross-multiplication algorithm: $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$"
              },
              {
                "step": "No.",
                "reason": "combining the previous two lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\frac{5}{9}$ and $\\frac{26}{47}$ are equal.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$5\\times 47 = 235$.",
                  "reason": "computing the product of the first numerator and the second denominator"
                },
                {
                  "step": "$9\\times 26 = 234$.",
                  "reason": "computing the product of the first denominator and the second numerator"
                },
                {
                  "step": "The two products are not equal.",
                  "reason": "the products $235$ and $234$ differ"
                },
                {
                  "step": "$\\frac{5}{9}\\neq\\frac{26}{47}$.",
                  "reason": "the cross-multiplication algorithm: $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$"
                },
                {
                  "step": "No.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{10}{13}$ and $\\frac{31}{40}$ are equal.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$10\\times 40 = 400$.",
                  "reason": "computing the product of the first numerator and the second denominator"
                },
                {
                  "step": "$13\\times 31 = 403$.",
                  "reason": "computing the product of the first denominator and the second numerator"
                },
                {
                  "step": "The two products are not equal.",
                  "reason": "the products $400$ and $403$ differ"
                },
                {
                  "step": "$\\frac{10}{13}\\neq\\frac{31}{40}$.",
                  "reason": "the cross-multiplication algorithm: $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$"
                },
                {
                  "step": "No.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\frac{7}{16}$ and $\\frac{22}{51}$ are equal.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$7\\times 51 = 357$.",
                  "reason": "computing the product of the first numerator and the second denominator"
                },
                {
                  "step": "$16\\times 22 = 352$.",
                  "reason": "computing the product of the first denominator and the second numerator"
                },
                {
                  "step": "The two products are not equal.",
                  "reason": "the products $357$ and $352$ differ"
                },
                {
                  "step": "$\\frac{7}{16}\\neq\\frac{22}{51}$.",
                  "reason": "the cross-multiplication algorithm: $\\frac{m}{n}=\\frac{k}{\\ell}$ exactly when $m\\ell=nk$"
                },
                {
                  "step": "No.",
                  "reason": "combining the previous two lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t13-k4",
      "forms": [
        {
          "example": {
            "problem": "Write $\\frac{4}{3}$ and $\\frac{9}{7}$ as fractions with a common denominator, and find the greater of the two.",
            "lines": [
              {
                "step": "$\\frac{4}{3} = \\frac{7\\times 4}{7\\times 3} = \\frac{28}{21}$.",
                "reason": "the cancellation law with $c=7$, the other denominator"
              },
              {
                "step": "$\\frac{9}{7} = \\frac{3\\times 9}{3\\times 7} = \\frac{27}{21}$.",
                "reason": "the cancellation law with $c=3$, the other denominator"
              },
              {
                "step": "The 28 copies of $\\frac{1}{21}$ exceed the 27 copies of $\\frac{1}{21}$.",
                "reason": "comparing the numerators of two fractions with the same denominator"
              },
              {
                "step": "$\\frac{4}{3}$.",
                "reason": "the greater fraction is the one farther to the right on the number line"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\frac{8}{9}$ and $\\frac{17}{11}$ as fractions with a common denominator, and find the greater of the two.",
              "answer": "17/11",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "$\\frac{8}{9} = \\frac{11\\times 8}{11\\times 9} = \\frac{88}{99}$.",
                  "reason": "the cancellation law with $c=11$, the other denominator"
                },
                {
                  "step": "$\\frac{17}{11} = \\frac{9\\times 17}{9\\times 11} = \\frac{153}{99}$.",
                  "reason": "the cancellation law with $c=9$, the other denominator"
                },
                {
                  "step": "The 153 copies of $\\frac{1}{99}$ exceed the 88 copies of $\\frac{1}{99}$.",
                  "reason": "comparing the numerators of two fractions with the same denominator"
                },
                {
                  "step": "$\\frac{17}{11}$.",
                  "reason": "the greater fraction is the one farther to the right on the number line"
                }
              ]
            },
            {
              "prompt": "Write $\\frac{15}{4}$ and $\\frac{13}{25}$ as fractions with a common denominator, and find the greater of the two.",
              "answer": "15/4",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "$\\frac{15}{4} = \\frac{25\\times 15}{25\\times 4} = \\frac{375}{100}$.",
                  "reason": "the cancellation law with $c=25$, the other denominator"
                },
                {
                  "step": "$\\frac{13}{25} = \\frac{4\\times 13}{4\\times 25} = \\frac{52}{100}$.",
                  "reason": "the cancellation law with $c=4$, the other denominator"
                },
                {
                  "step": "The 375 copies of $\\frac{1}{100}$ exceed the 52 copies of $\\frac{1}{100}$.",
                  "reason": "comparing the numerators of two fractions with the same denominator"
                },
                {
                  "step": "$\\frac{15}{4}$.",
                  "reason": "the greater fraction is the one farther to the right on the number line"
                }
              ]
            },
            {
              "prompt": "Write $\\frac{15}{13}$ and $\\frac{2}{17}$ as fractions with a common denominator, and find the greater of the two.",
              "answer": "15/13",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "$\\frac{15}{13} = \\frac{17\\times 15}{17\\times 13} = \\frac{255}{221}$.",
                  "reason": "the cancellation law with $c=17$, the other denominator"
                },
                {
                  "step": "$\\frac{2}{17} = \\frac{13\\times 2}{13\\times 17} = \\frac{26}{221}$.",
                  "reason": "the cancellation law with $c=13$, the other denominator"
                },
                {
                  "step": "The 255 copies of $\\frac{1}{221}$ exceed the 26 copies of $\\frac{1}{221}$.",
                  "reason": "comparing the numerators of two fractions with the same denominator"
                },
                {
                  "step": "$\\frac{15}{13}$.",
                  "reason": "the greater fraction is the one farther to the right on the number line"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t13-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the whole number $x$ that satisfies $\\frac{39}{x} = \\frac{63}{105}$.",
            "lines": [
              {
                "step": "$39\\times 105 = 63x$.",
                "reason": "the cross-multiplication algorithm"
              },
              {
                "step": "$63x = 4\\,095$.",
                "reason": "computing $39\\times 105$"
              },
              {
                "step": "$x = 4\\,095\\div 63$.",
                "reason": "dividing both sides by 63"
              },
              {
                "step": "$65$.",
                "reason": "computing the quotient"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole number $x$ that satisfies $\\frac{49}{x} = \\frac{91}{39}$.",
              "answer": "21",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$49\\times 39 = 91x$.",
                  "reason": "the cross-multiplication algorithm"
                },
                {
                  "step": "$91x = 1\\,911$.",
                  "reason": "computing $49\\times 39$"
                },
                {
                  "step": "$x = 1\\,911\\div 91$.",
                  "reason": "dividing both sides by 91"
                },
                {
                  "step": "$21$.",
                  "reason": "computing the quotient"
                }
              ]
            },
            {
              "prompt": "Find the whole number $x$ that satisfies $\\frac{x}{33} = \\frac{91}{39}$.",
              "answer": "77",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$x\\times 39 = 91\\times 33$.",
                  "reason": "the cross-multiplication algorithm"
                },
                {
                  "step": "$39x = 3\\,003$.",
                  "reason": "computing $91\\times 33$"
                },
                {
                  "step": "$x = 3\\,003\\div 39$.",
                  "reason": "dividing both sides by 39"
                },
                {
                  "step": "$77$.",
                  "reason": "computing the quotient"
                }
              ]
            },
            {
              "prompt": "Find the whole number $x$ that satisfies $\\frac{x}{18} = \\frac{35}{45}$.",
              "answer": "14",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$x\\times 45 = 35\\times 18$.",
                  "reason": "the cross-multiplication algorithm"
                },
                {
                  "step": "$45x = 630$.",
                  "reason": "computing $35\\times 18$"
                },
                {
                  "step": "$x = 630\\div 45$.",
                  "reason": "dividing both sides by 45"
                },
                {
                  "step": "$14$.",
                  "reason": "computing the quotient"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t13-k6",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{24}{16}$.",
            "figure": {
              "file": "place:line:24/16",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$\\frac{24}{16}=\\frac{3}{2}$.",
                "reason": "dividing the numerator and the denominator by 8 gives an equal fraction"
              },
              {
                "step": "$3=1\\times 2+1$, so $\\frac{3}{2}=1+\\frac{1}{2}$.",
                "reason": "3 copies of $\\frac{1}{2}$ hold 1 group of 2 copies, each group making 1, with 1 copy left over"
              },
              {
                "step": "The mark lies between 1 and 2, $\\frac{1}{2}$ of the way from 1 to 2.",
                "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 1 of the 2 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:24/16",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 24/16 marked, between 1 and 2."
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
                  "file": "place:check:24/16",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 24/16 lies at 1.5, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{30}{12}$.",
              "answer": "30/12",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{30}{12}=\\frac{5}{2}$.",
                  "reason": "dividing the numerator and the denominator by 6 gives an equal fraction"
                },
                {
                  "step": "$5=2\\times 2+1$, so $\\frac{5}{2}=2+\\frac{1}{2}$.",
                  "reason": "5 copies of $\\frac{1}{2}$ hold 2 groups of 2 copies, each group making 1, with 1 copy left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{1}{2}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 1 of the 2 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{1}{2}=\\frac{1\\times 5}{2\\times 5}=\\frac{5}{10}=0.5$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$2.5$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:30/12",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 30/12 lies at 2.5, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{36}{15}$.",
              "answer": "36/15",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{36}{15}=\\frac{12}{5}$.",
                  "reason": "dividing the numerator and the denominator by 3 gives an equal fraction"
                },
                {
                  "step": "$12=2\\times 5+2$, so $\\frac{12}{5}=2+\\frac{2}{5}$.",
                  "reason": "12 copies of $\\frac{1}{5}$ hold 2 groups of 5 copies, each group making 1, with 2 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{2}{5}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 2 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{2}{5}=\\frac{2\\times 2}{5\\times 2}=\\frac{4}{10}=0.4$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$2.4$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:36/15",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 36/15 lies at 2.4, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{30}{8}$.",
              "answer": "30/8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{30}{8}=\\frac{15}{4}$.",
                  "reason": "dividing the numerator and the denominator by 2 gives an equal fraction"
                },
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
                    "file": "place:check:30/8",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 30/8 lies at 3.75, in the tenth from 3.7 to 3.8, between 3 and 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{9}{15}$.",
            "figure": {
              "file": "place:line:9/15",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$\\frac{9}{15}=\\frac{3}{5}$.",
                "reason": "dividing the numerator and the denominator by 3 gives an equal fraction"
              },
              {
                "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 3.",
                "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
              },
              {
                "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$0.6$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:9/15",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 9/15 lies at 0.6, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{30}{40}$.",
              "answer": "30/40",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{30}{40}=\\frac{3}{4}$.",
                  "reason": "dividing the numerator and the denominator by 10 gives an equal fraction"
                },
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
                    "file": "place:check:30/40",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 30/40 lies at 0.75, in the tenth from 0.7 to 0.8, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{16}{40}$.",
              "answer": "16/40",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{16}{40}=\\frac{2}{5}$.",
                  "reason": "dividing the numerator and the denominator by 8 gives an equal fraction"
                },
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
                    "file": "place:check:16/40",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 16/40 lies at 0.4, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{28}{35}$.",
              "answer": "28/35",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{28}{35}=\\frac{4}{5}$.",
                  "reason": "dividing the numerator and the denominator by 7 gives an equal fraction"
                },
                {
                  "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 4.",
                  "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 4 counts the parts from 0"
                },
                {
                  "step": "$\\frac{4}{5}=\\frac{4\\times 2}{5\\times 2}=\\frac{8}{10}=0.8$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.8$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:28/35",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 28/35 lies at 0.8, between 0 and 1."
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
      "id": "t13-pr1",
      "method": "direct proof",
      "statement": "Given fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$, if $k=cm$ and $\\ell=cn$ for a nonzero whole number $c$, then $\\frac{m}{n}=\\frac{k}{\\ell}$.",
      "idea": "Split each part of length $\\frac1n$ into $c$ equal parts. Then $\\frac{m}{n}$ is $cm$ copies of the unit fraction $\\frac{1}{cn}$.",
      "lines": [
        {
          "line": "The fraction $\\frac{m}{n}$ is $m$ copies of $\\frac1n$.",
          "reason": "the definition of a fraction as copies of its unit fraction"
        },
        {
          "line": "Consider the multiples of $\\frac1n$ and of $\\frac{1}{cn}$. Call the segments between consecutive multiples of $\\frac{1}{cn}$ small segments.",
          "reason": "setting up both sequences of equal parts on the number line"
        },
        {
          "line": "Each segment between consecutive multiples of $\\frac1n$ divides into $c$ small segments of equal length.",
          "reason": "the unit segment holds $cn$ small segments, so each of the $n$ parts of length $\\frac1n$ holds $c$"
        },
        {
          "line": "The fraction $\\frac1n$ is $c$ copies of $\\frac{1}{cn}$.",
          "reason": "combining the previous two lines"
        },
        {
          "line": "The fraction $\\frac{m}{n}$ is $cm$ copies of $\\frac{1}{cn}$.",
          "reason": "the fraction $\\frac{m}{n}$ is $m$ copies of $\\frac1n$, and each copy of $\\frac1n$ is $c$ copies of $\\frac{1}{cn}$"
        },
        {
          "line": "The fraction $\\frac{cm}{cn}$ is also $cm$ copies of $\\frac{1}{cn}$.",
          "reason": "the definition of a fraction as copies of its unit fraction"
        },
        {
          "line": "$\\frac{m}{n}=\\frac{cm}{cn}$.",
          "reason": "combining the previous two lines, since both denote the same point on the number line",
          "figure": {
            "file": "equivalent-fractions-1.json",
            "alt": "A number line from 0 to 1, cut into halves and into sixths. The point m/n, here 1/2, is also the point cm/cn, here 3/6, with n = 2, m = 1 and c = 3."
          }
        },
        {
          "line": "$\\frac{m}{n}=\\frac{k}{\\ell}$.",
          "reason": "substituting $k$ for $cm$ and $\\ell$ for $cn$"
        }
      ]
    },
    {
      "id": "t13-pr2",
      "method": "direct proof",
      "statement": "Given a fraction $\\frac{k}{\\ell}$, if a whole number $c$ divides both $k$ and $\\ell$, then $\\frac{k}{\\ell}=\\frac{k\\div c}{\\ell\\div c}$.",
      "idea": "Reducing a fraction is the cancellation law read from right to left, with $c$ the common divisor.",
      "lines": [
        {
          "line": "Let $m=k\\div c$ and $n=\\ell\\div c$.",
          "reason": "the whole number $c$ divides both $k$ and $\\ell$, by hypothesis"
        },
        {
          "line": "Then $k=cm$ and $\\ell=cn$.",
          "reason": "the definition of division, restating the previous line as products"
        },
        {
          "line": "$\\frac{k}{\\ell}=\\frac{cm}{cn}$.",
          "reason": "substituting $k=cm$ and $\\ell=cn$"
        },
        {
          "line": "$\\frac{cm}{cn}=\\frac{m}{n}$.",
          "reason": "the cancellation law"
        },
        {
          "line": "$\\frac{k}{\\ell}=\\frac{k\\div c}{\\ell\\div c}$.",
          "reason": "combining the previous two lines and substituting $m=k\\div c$ and $n=\\ell\\div c$"
        }
      ]
    },
    {
      "id": "t13-pr3",
      "method": "direct proof",
      "statement": "Given fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$, $\\frac{k}{\\ell}=\\frac{kn}{\\ell n}$ and $\\frac{m}{n}=\\frac{\\ell m}{\\ell n}$.",
      "idea": "Multiplying each fraction's numerator and denominator by the other's denominator puts both on the same denominator.",
      "lines": [
        {
          "line": "$\\frac{k}{\\ell}=\\frac{kn}{\\ell n}$.",
          "reason": "the cancellation law with $c=n$"
        },
        {
          "line": "$\\frac{m}{n}=\\frac{\\ell m}{\\ell n}$.",
          "reason": "the cancellation law with $c=\\ell$"
        },
        {
          "line": "The fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$ equal $\\frac{kn}{\\ell n}$ and $\\frac{\\ell m}{\\ell n}$, with the same denominator $\\ell n$.",
          "reason": "combining the previous two lines"
        }
      ]
    },
    {
      "id": "t13-pr4",
      "method": "direct proof",
      "statement": "Given fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$, $\\frac{m}{n}=\\frac{k}{\\ell}$ if and only if $m\\ell=nk$.",
      "idea": "Rewriting both fractions with the common denominator $n\\ell$ turns the equality of fractions into an equality of numerators.",
      "lines": [
        {
          "line": "Suppose that $\\frac{m}{n}=\\frac{k}{\\ell}$.",
          "reason": "assuming the fraction equality, to prove $m\\ell=nk$"
        },
        {
          "line": "Then $\\frac{m}{n}=\\frac{m\\ell}{n\\ell}$ and $\\frac{k}{\\ell}=\\frac{nk}{n\\ell}$.",
          "reason": "the cancellation law, with $c=\\ell$ and $c=n$"
        },
        {
          "line": "$\\frac{m\\ell}{n\\ell}=\\frac{nk}{n\\ell}$.",
          "reason": "substituting the assumed equality into the previous line"
        },
        {
          "line": "$m\\ell=nk$.",
          "reason": "two fractions with the same denominator are equal only when their numerators are equal"
        },
        {
          "line": "Conversely, suppose that $m\\ell=nk$.",
          "reason": "assuming the whole-number equation, to prove $\\frac{m}{n}=\\frac{k}{\\ell}$"
        },
        {
          "line": "$\\frac{m\\ell}{n\\ell}=\\frac{nk}{n\\ell}$.",
          "reason": "the two fraction symbols have equal numerators, by the assumption $m\\ell=nk$"
        },
        {
          "line": "Then $\\frac{m\\ell}{n\\ell}=\\frac{m}{n}$ and $\\frac{nk}{n\\ell}=\\frac{k}{\\ell}$.",
          "reason": "the cancellation law"
        },
        {
          "line": "$\\frac{m}{n}=\\frac{k}{\\ell}$.",
          "reason": "combining the previous two lines"
        },
        {
          "line": "So $\\frac{m}{n}=\\frac{k}{\\ell}$ if and only if $m\\ell=nk$.",
          "reason": "combining both directions"
        }
      ]
    },
    {
      "id": "t13-pr5",
      "method": "direct proof",
      "statement": "Appending or removing a trailing zero at the right end of a finite decimal does not change its value.",
      "idea": "One more trailing zero multiplies both the digit string and the power of 10 by 10. The common factor 10 cancels.",
      "lines": [
        {
          "line": "A finite decimal with $d$ decimal digits equals $\\frac{a}{10^d}$, where $a$ is the whole number formed by its digits.",
          "reason": "the definition of a finite decimal"
        },
        {
          "line": "Appending one zero multiplies the digit string by 10 and raises the digit count from $d$ to $d+1$. So the new value is $\\frac{10a}{10^{d+1}}$.",
          "reason": "one more decimal digit multiplies the place value of every earlier digit by 10"
        },
        {
          "line": "$\\frac{10a}{10^{d+1}}=\\frac{a}{10^d}$.",
          "reason": "the cancellation law with $c=10$"
        },
        {
          "line": "Appending or removing a trailing zero does not change the value of a finite decimal.",
          "reason": "combining the previous two lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t13-s1",
      "method": "direct proof",
      "statement": "For whole numbers $a$, $b$, and $c$, if $a$ divides $b$ and $b$ divides $c$, then $a$ divides $c$.",
      "check": {
        "proof": [
          {
            "line": "By hypothesis, $b=ja$ for a whole number $j$.",
            "reason": "the definition of divisibility, since $a$ divides $b$"
          },
          {
            "line": "Likewise, $c=kb$ for a whole number $k$.",
            "reason": "the definition of divisibility, since $b$ divides $c$"
          },
          {
            "line": "So $c=k(ja)=(kj)a$.",
            "reason": "substituting $b=ja$ into $c=kb$, then the associative law of multiplication"
          },
          {
            "line": "The number $kj$ is a whole number, so $a$ divides $c$.",
            "reason": "the product of two whole numbers is a whole number, and the definition of divisibility"
          }
        ]
      }
    },
    {
      "id": "t13-s2",
      "method": "direct proof",
      "statement": "Take whole numbers $k$ and $\\ell$ with $\\ell$ nonzero, and a whole number $c$ greater than 1 that divides both. Then $\\frac{k}{\\ell}$ is not reduced.",
      "check": {
        "proof": [
          {
            "line": "Suppose that a whole number $c$ greater than 1 divides both $k$ and $\\ell$.",
            "reason": "the hypothesis, to prove $\\frac{k}{\\ell}$ is not reduced"
          },
          {
            "line": "A fraction $\\frac{k}{\\ell}$ is reduced only when no whole number greater than 1 divides both $k$ and $\\ell$.",
            "reason": "the definition of a reduced fraction"
          },
          {
            "line": "The fraction $\\frac{k}{\\ell}$ is not reduced.",
            "reason": "the whole number $c$ is greater than 1 and divides both, so the condition for being reduced fails"
          }
        ]
      }
    },
    {
      "id": "t13-s3",
      "method": "direct proof",
      "statement": "For a fraction $\\frac{m}{n}$ and nonzero whole numbers $c$ and $d$, $\\frac{cdm}{cdn}=\\frac{m}{n}$.",
      "check": {
        "proof": [
          {
            "line": "The product $cd$ is a nonzero whole number.",
            "reason": "the product of two nonzero whole numbers is nonzero"
          },
          {
            "line": "Then $cdm=(cd)m$ and $cdn=(cd)n$.",
            "reason": "restating the numerator and denominator with $cd$ as a single factor"
          },
          {
            "line": "$\\frac{(cd)m}{(cd)n}=\\frac{m}{n}$.",
            "reason": "the cancellation law with the nonzero whole number $cd$ in place of $c$"
          },
          {
            "line": "$\\frac{cdm}{cdn}=\\frac{m}{n}$.",
            "reason": "combining the previous two lines"
          }
        ]
      }
    },
    {
      "id": "t13-s4",
      "method": "proof of existence by construction",
      "statement": "For fractions $\\frac{a}{b}$, $\\frac{c}{d}$, and $\\frac{e}{f}$, there is a nonzero whole number that is a common denominator of all three.",
      "check": {
        "proof": [
          {
            "line": "Let $D=bdf$, the product of the three denominators.",
            "reason": "constructing a candidate common denominator"
          },
          {
            "line": "$\\frac{a}{b}=\\frac{adf}{bdf}=\\frac{adf}{D}$.",
            "reason": "the cancellation law with $c=df$"
          },
          {
            "line": "$\\frac{c}{d}=\\frac{cbf}{dbf}=\\frac{cbf}{D}$.",
            "reason": "the cancellation law with $c=bf$"
          },
          {
            "line": "$\\frac{e}{f}=\\frac{ebd}{fbd}=\\frac{ebd}{D}$.",
            "reason": "the cancellation law with $c=bd$"
          },
          {
            "line": "The number $D$ is a nonzero whole number, and all three fractions equal fractions with denominator $D$.",
            "reason": "combining the previous three lines, since $b$, $d$, and $f$ are each nonzero"
          }
        ]
      }
    },
    {
      "id": "t13-s5",
      "method": "direct proof",
      "statement": "For nonzero whole numbers $a$, $b$, $c$, $d$, if $\\frac{a}{b}=\\frac{c}{d}$, then $\\frac{b}{a}=\\frac{d}{c}$.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $\\frac{a}{b}=\\frac{c}{d}$.",
            "reason": "the hypothesis, to prove $\\frac{b}{a}=\\frac{d}{c}$"
          },
          {
            "line": "$ad=bc$.",
            "reason": "the cross-multiplication algorithm applied to $\\frac{a}{b}=\\frac{c}{d}$"
          },
          {
            "line": "$bc=ad$.",
            "reason": "the symmetry of equality"
          },
          {
            "line": "$\\frac{b}{a}=\\frac{d}{c}$.",
            "reason": "the cross-multiplication algorithm applied to $bc=ad$, since $a$ and $c$ are nonzero"
          }
        ]
      }
    },
    {
      "id": "t13-s6",
      "method": "direct proof",
      "statement": "Take a finite decimal with $d$ decimal digits and whole-number digit string $a$. It equals the finite decimal with digit string $100a$ and $d+2$ decimal digits.",
      "check": {
        "proof": [
          {
            "line": "The first decimal equals $\\frac{a}{10^d}$.",
            "reason": "the definition of a finite decimal"
          },
          {
            "line": "The second decimal equals $\\frac{100a}{10^{d+2}}$.",
            "reason": "the definition of a finite decimal, with digit string $100a$ and $d+2$ decimal digits"
          },
          {
            "line": "$\\frac{100a}{10^{d+2}}=\\frac{a}{10^d}$.",
            "reason": "the cancellation law with $c=100$, since $10^{d+2}=100\\times 10^d$"
          },
          {
            "line": "The two decimals are equal.",
            "reason": "combining the previous three lines"
          }
        ]
      }
    }
  ]
}
