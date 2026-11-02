export default {
  "number": 14,
  "manyParts": false,
  "bare": {
    "prompt": "Compute $\\frac{2}{9}+\\frac{5}{9}$.",
    "answer": "7/9",
    "form": "Answer as a fraction in lowest terms.",
    "solution": [
      "Compute $\\frac{2}{9}+\\frac{5}{9}$.",
      "Add the numerators, since the two denominators are equal: $\\frac{2}{9}+\\frac{5}{9}=\\frac{7}{9}$.",
      "The fraction $\\frac{7}{9}$ is already in lowest terms, since no whole number greater than 1 divides both 7 and 9.",
      "$\\frac{7}{9}$."
    ]
  },
  "ideas": [
    {
      "name": "Concatenating segments",
      "concrete": "Place a segment of length $\\frac{7}{8}$ end to end with a segment of length $\\frac{5}{11}$. The second starts where the first ends. The combined segment has the total length of the two.",
      "general": "Joining two segments end to end, so that the second starts where the first ends, **concatenates** them."
    },
    {
      "name": "Definition of fraction addition",
      "concrete": "The sum $\\frac{7}{8}+\\frac{5}{11}$ is the length of two concatenated segments, one of length $\\frac{7}{8}$, the other of length $\\frac{5}{11}$.",
      "general": "For fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$, the **sum** $\\frac{k}{\\ell}+\\frac{m}{n}$ is the length of two concatenated segments, of lengths $\\frac{k}{\\ell}$ and $\\frac{m}{n}$."
    },
    {
      "name": "Adding fractions with the same denominator",
      "concrete": "$\\frac{2}{7}+\\frac{4}{7}=\\frac{6}{7}$.",
      "general": "For whole numbers $k$, $m$, and $\\ell>0$, $\\frac{k}{\\ell}+\\frac{m}{\\ell}=\\frac{k+m}{\\ell}$."
    },
    {
      "name": "The general addition formula",
      "concrete": "$\\frac{2}{3}+\\frac{4}{5}=\\frac{(2\\times5)+(3\\times4)}{3\\times5}=\\frac{22}{15}$.",
      "general": "For fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$, $\\frac{k}{\\ell}+\\frac{m}{n}=\\frac{kn+\\ell m}{\\ell n}$."
    },
    {
      "name": "Adding fractions when one denominator is a multiple of the other",
      "concrete": "Since $36=4\\times9$, the sum $\\frac{2}{9}+\\frac{5}{36}$ is $\\frac{8}{36}+\\frac{5}{36}=\\frac{13}{36}$.",
      "general": "For whole numbers $m$, $k$, $n$, $q$ with $n>0$ and $q>0$, $\\frac{m}{n}+\\frac{k}{nq}=\\frac{mq+k}{nq}$."
    },
    {
      "name": "Mixed number",
      "concrete": "The mixed number $4\\frac{2}{5}$ stands for $4+\\frac{2}{5}$.",
      "general": "For a whole number $q$ and a proper fraction $\\frac{r}{\\ell}$, the **mixed number** $q\\frac{r}{\\ell}$ stands for $q+\\frac{r}{\\ell}$.",
      "definitions": [
        "A fraction $\\frac{m}{n}$ is **proper** if $m<n$ and **improper** if $m\\ge n$."
      ]
    }
  ],
  "kinds": [
    {
      "id": "t14-k1",
      "forms": [
        {
          "example": {
            "problem": "Compute $\\frac{5}{18}+\\frac{7}{18}$.",
            "lines": [
              {
                "step": "$\\frac{5}{18}+\\frac{7}{18}=\\frac{5+7}{18}$.",
                "reason": "fractions with the same denominator add by adding their numerators"
              },
              {
                "step": "$5+7=12$.",
                "reason": "the number 12 is the sum of the two numerators"
              },
              {
                "step": "$\\frac{2}{3}$.",
                "reason": "the number 6 divides both 12 and 18, so the cancellation law reduces the fraction to lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\frac{5}{22}+\\frac{13}{22}$.",
              "answer": "9/11",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{5}{22}+\\frac{13}{22}=\\frac{5+13}{22}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$5+13=18$.",
                  "reason": "the number 18 is the sum of the two numerators"
                },
                {
                  "step": "$\\frac{9}{11}$.",
                  "reason": "the number 2 divides both 18 and 22, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{8}{21}+\\frac{10}{21}$.",
              "answer": "6/7",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{8}{21}+\\frac{10}{21}=\\frac{8+10}{21}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$8+10=18$.",
                  "reason": "the number 18 is the sum of the two numerators"
                },
                {
                  "step": "$\\frac{6}{7}$.",
                  "reason": "the number 3 divides both 18 and 21, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{9}{16}+\\frac{11}{16}$.",
              "answer": "5/4",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{9}{16}+\\frac{11}{16}=\\frac{9+11}{16}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$9+11=20$.",
                  "reason": "the number 20 is the sum of the two numerators"
                },
                {
                  "step": "$\\frac{5}{4}$.",
                  "reason": "the number 4 divides both 20 and 16, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\frac{2}{9}+\\frac{5}{36}$.",
            "lines": [
              {
                "step": "$\\frac{2}{9}=\\frac{8}{36}$.",
                "reason": "the denominator 36 is a multiple of 9, since $36=4\\times 9$, so the cancellation law rewrites the fraction with denominator 36"
              },
              {
                "step": "$\\frac{8}{36}+\\frac{5}{36}=\\frac{13}{36}$.",
                "reason": "fractions with the same denominator add by adding their numerators"
              },
              {
                "step": "$\\frac{13}{36}$.",
                "reason": "no whole number greater than 1 divides both 13 and 36, so the fraction is already in lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\frac{3}{8}+\\frac{5}{16}$.",
              "answer": "11/16",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{3}{8}=\\frac{6}{16}$.",
                  "reason": "the denominator 16 is a multiple of 8, since $16=2\\times 8$, so the cancellation law rewrites the fraction with denominator 16"
                },
                {
                  "step": "$\\frac{6}{16}+\\frac{5}{16}=\\frac{11}{16}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$\\frac{11}{16}$.",
                  "reason": "no whole number greater than 1 divides both 11 and 16, so the fraction is already in lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{3}{7}+\\frac{5}{14}$.",
              "answer": "11/14",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{3}{7}=\\frac{6}{14}$.",
                  "reason": "the denominator 14 is a multiple of 7, since $14=2\\times 7$, so the cancellation law rewrites the fraction with denominator 14"
                },
                {
                  "step": "$\\frac{6}{14}+\\frac{5}{14}=\\frac{11}{14}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$\\frac{11}{14}$.",
                  "reason": "no whole number greater than 1 divides both 11 and 14, so the fraction is already in lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{4}{7}+\\frac{9}{28}$.",
              "answer": "25/28",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\frac{4}{7}=\\frac{16}{28}$.",
                  "reason": "the denominator 28 is a multiple of 7, since $28=4\\times 7$, so the cancellation law rewrites the fraction with denominator 28"
                },
                {
                  "step": "$\\frac{16}{28}+\\frac{9}{28}=\\frac{25}{28}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$\\frac{25}{28}$.",
                  "reason": "no whole number greater than 1 divides both 25 and 28, so the fraction is already in lowest terms"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\frac{3}{4}+\\frac{5}{6}$.",
            "lines": [
              {
                "step": "The numerator is $(3\\times 6)+(4\\times 5)=38$ and the denominator is $4\\times 6=24$.",
                "reason": "the general addition formula computes the numerator and denominator this way"
              },
              {
                "step": "$\\frac{3}{4}+\\frac{5}{6}=\\frac{38}{24}$.",
                "reason": "the general addition formula gives this fraction as the sum"
              },
              {
                "step": "$\\frac{19}{12}$.",
                "reason": "the number 2 divides both 38 and 24, so the cancellation law reduces the fraction to lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\frac{1}{6}+\\frac{3}{10}$.",
              "answer": "7/15",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The numerator is $(1\\times 10)+(6\\times 3)=28$ and the denominator is $6\\times 10=60$.",
                  "reason": "the general addition formula computes the numerator and denominator this way"
                },
                {
                  "step": "$\\frac{1}{6}+\\frac{3}{10}=\\frac{28}{60}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$\\frac{7}{15}$.",
                  "reason": "the number 4 divides both 28 and 60, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{5}{8}+\\frac{1}{6}$.",
              "answer": "19/24",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The numerator is $(5\\times 6)+(8\\times 1)=38$ and the denominator is $8\\times 6=48$.",
                  "reason": "the general addition formula computes the numerator and denominator this way"
                },
                {
                  "step": "$\\frac{5}{8}+\\frac{1}{6}=\\frac{38}{48}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$\\frac{19}{24}$.",
                  "reason": "the number 2 divides both 38 and 48, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{3}{10}+\\frac{4}{15}$.",
              "answer": "17/30",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "The numerator is $(3\\times 15)+(10\\times 4)=85$ and the denominator is $10\\times 15=150$.",
                  "reason": "the general addition formula computes the numerator and denominator this way"
                },
                {
                  "step": "$\\frac{3}{10}+\\frac{4}{15}=\\frac{85}{150}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$\\frac{17}{30}$.",
                  "reason": "the number 5 divides both 85 and 150, so the cancellation law reduces the fraction to lowest terms"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t14-k2",
      "forms": [
        {
          "example": {
            "problem": "Compute the mixed number equal to $\\frac{25}{7}$.",
            "lines": [
              {
                "step": "$25=(3\\times 7)+4$.",
                "reason": "division-with-remainder writes the numerator this way"
              },
              {
                "step": "$\\frac{25}{7}=\\frac{21}{7}+\\frac{4}{7}=3+\\frac{4}{7}$.",
                "reason": "the fraction $\\frac{21}{7}$ equals the whole number 3, since $21=3\\times 7$"
              },
              {
                "step": "$3\\,\\frac{4}{7}$.",
                "reason": "a mixed number stands for a whole number plus a proper fraction"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute the mixed number equal to $\\frac{32}{7}$.",
              "answer": "4 4/7",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "$32=(4\\times 7)+4$.",
                  "reason": "division-with-remainder writes the numerator this way"
                },
                {
                  "step": "$\\frac{32}{7}=\\frac{28}{7}+\\frac{4}{7}=4+\\frac{4}{7}$.",
                  "reason": "the fraction $\\frac{28}{7}$ equals the whole number 4, since $28=4\\times 7$"
                },
                {
                  "step": "$4\\,\\frac{4}{7}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            },
            {
              "prompt": "Compute the mixed number equal to $\\frac{148}{9}$.",
              "answer": "16 4/9",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "$148=(16\\times 9)+4$.",
                  "reason": "division-with-remainder writes the numerator this way"
                },
                {
                  "step": "$\\frac{148}{9}=\\frac{144}{9}+\\frac{4}{9}=16+\\frac{4}{9}$.",
                  "reason": "the fraction $\\frac{144}{9}$ equals the whole number 16, since $144=16\\times 9$"
                },
                {
                  "step": "$16\\,\\frac{4}{9}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            },
            {
              "prompt": "Compute the mixed number equal to $\\frac{166}{15}$.",
              "answer": "11 1/15",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "$166=(11\\times 15)+1$.",
                  "reason": "division-with-remainder writes the numerator this way"
                },
                {
                  "step": "$\\frac{166}{15}=\\frac{165}{15}+\\frac{1}{15}=11+\\frac{1}{15}$.",
                  "reason": "the fraction $\\frac{165}{15}$ equals the whole number 11, since $165=11\\times 15$"
                },
                {
                  "step": "$11\\,\\frac{1}{15}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute the fraction equal to $5\\,\\frac{1}{3}$.",
            "lines": [
              {
                "step": "$5\\,\\frac{1}{3}=5+\\frac{1}{3}$.",
                "reason": "a mixed number stands for a whole number plus a proper fraction"
              },
              {
                "step": "$5=\\frac{15}{3}$.",
                "reason": "the whole number 5 equals the fraction $\\frac{15}{3}$, since $15=5\\times 3$"
              },
              {
                "step": "$\\frac{15}{3}+\\frac{1}{3}=\\frac{16}{3}$.",
                "reason": "fractions with the same denominator add by adding their numerators"
              },
              {
                "step": "$\\frac{16}{3}$.",
                "reason": "no whole number greater than 1 divides both 16 and 3, so the fraction is in lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute the fraction equal to $7\\,\\frac{5}{6}$.",
              "answer": "47/6",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$7\\,\\frac{5}{6}=7+\\frac{5}{6}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                },
                {
                  "step": "$7=\\frac{42}{6}$.",
                  "reason": "the whole number 7 equals the fraction $\\frac{42}{6}$, since $42=7\\times 6$"
                },
                {
                  "step": "$\\frac{42}{6}+\\frac{5}{6}=\\frac{47}{6}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$\\frac{47}{6}$.",
                  "reason": "no whole number greater than 1 divides both 47 and 6, so the fraction is in lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute the fraction equal to $4\\,\\frac{5}{7}$.",
              "answer": "33/7",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$4\\,\\frac{5}{7}=4+\\frac{5}{7}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                },
                {
                  "step": "$4=\\frac{28}{7}$.",
                  "reason": "the whole number 4 equals the fraction $\\frac{28}{7}$, since $28=4\\times 7$"
                },
                {
                  "step": "$\\frac{28}{7}+\\frac{5}{7}=\\frac{33}{7}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$\\frac{33}{7}$.",
                  "reason": "no whole number greater than 1 divides both 33 and 7, so the fraction is in lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute the fraction equal to $6\\,\\frac{1}{7}$.",
              "answer": "43/7",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$6\\,\\frac{1}{7}=6+\\frac{1}{7}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                },
                {
                  "step": "$6=\\frac{42}{7}$.",
                  "reason": "the whole number 6 equals the fraction $\\frac{42}{7}$, since $42=6\\times 7$"
                },
                {
                  "step": "$\\frac{42}{7}+\\frac{1}{7}=\\frac{43}{7}$.",
                  "reason": "fractions with the same denominator add by adding their numerators"
                },
                {
                  "step": "$\\frac{43}{7}$.",
                  "reason": "no whole number greater than 1 divides both 43 and 7, so the fraction is in lowest terms"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t14-k3",
      "forms": [
        {
          "example": {
            "problem": "Compute $2\\,\\frac{5}{9}+\\frac{7}{8}$.",
            "lines": [
              {
                "step": "Convert the mixed number to an improper fraction: $2\\,\\frac{5}{9}=\\frac{23}{9}$.",
                "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
              },
              {
                "step": "$\\frac{23}{9}+\\frac{7}{8}=\\frac{247}{72}$.",
                "reason": "the general addition formula gives this fraction as the sum"
              },
              {
                "step": "$3\\,\\frac{31}{72}$.",
                "reason": "a mixed number stands for a whole number plus a proper fraction"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $3\\,\\frac{2}{7}+\\frac{4}{5}$.",
              "answer": "4 3/35",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert the mixed number to an improper fraction: $3\\,\\frac{2}{7}=\\frac{23}{7}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{23}{7}+\\frac{4}{5}=\\frac{143}{35}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$4\\,\\frac{3}{35}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            },
            {
              "prompt": "Compute $1\\,\\frac{4}{9}+\\frac{5}{7}$.",
              "answer": "2 10/63",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert the mixed number to an improper fraction: $1\\,\\frac{4}{9}=\\frac{13}{9}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{13}{9}+\\frac{5}{7}=\\frac{136}{63}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$2\\,\\frac{10}{63}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            },
            {
              "prompt": "Compute $4\\,\\frac{5}{6}+\\frac{3}{5}$.",
              "answer": "5 13/30",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert the mixed number to an improper fraction: $4\\,\\frac{5}{6}=\\frac{29}{6}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{29}{6}+\\frac{3}{5}=\\frac{163}{30}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$5\\,\\frac{13}{30}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $3\\,\\frac{2}{7}+2\\,\\frac{3}{4}$.",
            "lines": [
              {
                "step": "Convert each mixed number to an improper fraction: $3\\,\\frac{2}{7}=\\frac{23}{7}$ and $2\\,\\frac{3}{4}=\\frac{11}{4}$.",
                "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
              },
              {
                "step": "$\\frac{23}{7}+\\frac{11}{4}=\\frac{169}{28}$.",
                "reason": "the general addition formula gives this fraction as the sum"
              },
              {
                "step": "$6\\,\\frac{1}{28}$.",
                "reason": "a mixed number stands for a whole number plus a proper fraction"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $1\\,\\frac{2}{3}+4\\,\\frac{1}{5}$.",
              "answer": "5 13/15",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert each mixed number to an improper fraction: $1\\,\\frac{2}{3}=\\frac{5}{3}$ and $4\\,\\frac{1}{5}=\\frac{21}{5}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{5}{3}+\\frac{21}{5}=\\frac{88}{15}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$5\\,\\frac{13}{15}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            },
            {
              "prompt": "Compute $2\\,\\frac{4}{9}+3\\,\\frac{1}{2}$.",
              "answer": "5 17/18",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert each mixed number to an improper fraction: $2\\,\\frac{4}{9}=\\frac{22}{9}$ and $3\\,\\frac{1}{2}=\\frac{7}{2}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{22}{9}+\\frac{7}{2}=\\frac{107}{18}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$5\\,\\frac{17}{18}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            },
            {
              "prompt": "Compute $5\\,\\frac{3}{8}+1\\,\\frac{2}{3}$.",
              "answer": "7 1/24",
              "form": "Answer as a mixed number in lowest terms.",
              "lines": [
                {
                  "step": "Convert each mixed number to an improper fraction: $5\\,\\frac{3}{8}=\\frac{43}{8}$ and $1\\,\\frac{2}{3}=\\frac{5}{3}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction, written as a single fraction"
                },
                {
                  "step": "$\\frac{43}{8}+\\frac{5}{3}=\\frac{169}{24}$.",
                  "reason": "the general addition formula gives this fraction as the sum"
                },
                {
                  "step": "$7\\,\\frac{1}{24}$.",
                  "reason": "a mixed number stands for a whole number plus a proper fraction"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t14-k4",
      "forms": [
        {
          "example": {
            "problem": "Compute $4.045\\,1+7.28$.",
            "lines": [
              {
                "step": "$4.045\\,1+7.28=4.045\\,1+7.280\\,0$.",
                "reason": "appending zeros gives both decimals 4 decimal digits"
              },
              {
                "step": "$40\\,451+72\\,800=113\\,251$.",
                "reason": "with the decimal points lined up, the digits add as whole numbers"
              },
              {
                "step": "$11.325\\,1$.",
                "reason": "the decimal point returns 4 digits from the right end of $113\\,251$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $5.09+7.928\\,7$.",
              "answer": "13.0187",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$5.09+7.928\\,7=5.090\\,0+7.928\\,7$.",
                  "reason": "appending zeros gives both decimals 4 decimal digits"
                },
                {
                  "step": "$50\\,900+79\\,287=130\\,187$.",
                  "reason": "with the decimal points lined up, the digits add as whole numbers"
                },
                {
                  "step": "$13.018\\,7$.",
                  "reason": "the decimal point returns 4 digits from the right end of $130\\,187$"
                }
              ]
            },
            {
              "prompt": "Compute $8.6+0.47$.",
              "answer": "9.07",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$8.6+0.47=8.60+0.47$.",
                  "reason": "appending zeros gives both decimals 2 decimal digits"
                },
                {
                  "step": "$860+47=907$.",
                  "reason": "with the decimal points lined up, the digits add as whole numbers"
                },
                {
                  "step": "$9.07$.",
                  "reason": "the decimal point returns 2 digits from the right end of $907$"
                }
              ]
            },
            {
              "prompt": "Compute $0.57+14.3$.",
              "answer": "14.87",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "$0.57+14.3=0.57+14.30$.",
                  "reason": "appending zeros gives both decimals 2 decimal digits"
                },
                {
                  "step": "$57+1\\,430=1\\,487$.",
                  "reason": "with the decimal points lined up, the digits add as whole numbers"
                },
                {
                  "step": "$14.87$.",
                  "reason": "the decimal point returns 2 digits from the right end of $1\\,487$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t14-k5",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{37}{20}$.",
            "figure": {
              "file": "place:line:37/20",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$37=1\\times 20+17$, so $\\frac{37}{20}=1+\\frac{17}{20}$.",
                "reason": "37 copies of $\\frac{1}{20}$ hold 1 group of 20 copies, each group making 1, with 17 copies left over"
              },
              {
                "step": "The mark lies between 1 and 2, $\\frac{17}{20}$ of the way from 1 to 2.",
                "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 17 of the 20 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:37/20",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 37/20 marked, between 1 and 2."
                }
              },
              {
                "step": "$\\frac{17}{20}=\\frac{17\\times 5}{20\\times 5}=\\frac{85}{100}=0.85$.",
                "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$1.85$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:37/20",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 37/20 lies at 1.85, in the tenth from 1.8 to 1.9, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{7}{4}$.",
              "answer": "7/4",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$7=1\\times 4+3$, so $\\frac{7}{4}=1+\\frac{3}{4}$.",
                  "reason": "7 copies of $\\frac{1}{4}$ hold 1 group of 4 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{3}{4}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 3 of the 4 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{4}=\\frac{3\\times 25}{4\\times 25}=\\frac{75}{100}=0.75$.",
                  "reason": "multiplying the numerator and the denominator by 25 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$1.75$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:7/4",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 7/4 lies at 1.75, in the tenth from 1.7 to 1.8, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{9}{5}$.",
              "answer": "9/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$9=1\\times 5+4$, so $\\frac{9}{5}=1+\\frac{4}{5}$.",
                  "reason": "9 copies of $\\frac{1}{5}$ hold 1 group of 5 copies, each group making 1, with 4 copies left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{4}{5}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 4 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{4}{5}=\\frac{4\\times 2}{5\\times 2}=\\frac{8}{10}=0.8$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$1.8$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:9/5",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 9/5 lies at 1.8, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{21}{8}$.",
              "answer": "21/8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$21=2\\times 8+5$, so $\\frac{21}{8}=2+\\frac{5}{8}$.",
                  "reason": "21 copies of $\\frac{1}{8}$ hold 2 groups of 8 copies, each group making 1, with 5 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{5}{8}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 5 of the 8 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{5}{8}=\\frac{5\\times 125}{8\\times 125}=\\frac{625}{1\\,000}=0.625$.",
                  "reason": "multiplying the numerator and the denominator by 125 gives an equal fraction over $1\\,000$, and a fraction over $1\\,000$ is a decimal in thousandths"
                },
                {
                  "step": "$2.625$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:21/8",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 21/8 lies at 2.625, in the tenth from 2.6 to 2.7, between 2 and 3."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $2.45$.",
            "figure": {
              "file": "place:line:2.45",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $2.45$ is 2, so the mark lies between 2 and 3.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.45=\\frac{45}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 4 and 5 hundredths follow it, so the mark lies past the 4th cut and short of the next, between $2.4$ and $2.5$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:2.45",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 2.45 marked, between 2 and 3."
                }
              },
              {
                "step": "$2.45$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:2.45",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.45 lies at 2.45, in the tenth from 2.4 to 2.5, between 2 and 3."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.38$.",
              "answer": "0.38",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.38$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.38=\\frac{38}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 3 and 8 hundredths follow it, so the mark lies past the 3rd cut and short of the next, between $0.3$ and $0.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.38$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.38",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.38 lies at 0.38, in the tenth from 0.3 to 0.4, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $5.72$.",
              "answer": "5.72",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $5.72$ is 5, so the mark lies between 5 and 6.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.72=\\frac{72}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and 2 hundredths follow it, so the mark lies past the 7th cut and short of the next, between $5.7$ and $5.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$5.72$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:5.72",
                    "alt": "Number line from 0 to 6, the whole numbers 0 to 6 marked and each unit cut into tenths. 5.72 lies at 5.72, in the tenth from 5.7 to 5.8, between 5 and 6."
                  }
                }
              ]
            },
            {
              "prompt": "Place $3.64$.",
              "answer": "3.64",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $3.64$ is 3, so the mark lies between 3 and 4.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.64=\\frac{64}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 6 and 4 hundredths follow it, so the mark lies past the 6th cut and short of the next, between $3.6$ and $3.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.64$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:3.64",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.64 lies at 3.64, in the tenth from 3.6 to 3.7, between 3 and 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{19}{10}$.",
            "figure": {
              "file": "place:line:19/10",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$19=1\\times 10+9$, so $\\frac{19}{10}=1+\\frac{9}{10}$.",
                "reason": "19 copies of $\\frac{1}{10}$ hold 1 group of 10 copies, each group making 1, with 9 copies left over"
              },
              {
                "step": "The mark lies between 1 and 2, $\\frac{9}{10}$ of the way from 1 to 2.",
                "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 9 of the 10 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:19/10",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 19/10 marked, between 1 and 2."
                }
              },
              {
                "step": "$\\frac{9}{10}=0.9$.",
                "reason": "a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$1.9$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:19/10",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 19/10 lies at 1.9, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{13}{10}$.",
              "answer": "13/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$13=1\\times 10+3$, so $\\frac{13}{10}=1+\\frac{3}{10}$.",
                  "reason": "13 copies of $\\frac{1}{10}$ hold 1 group of 10 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{3}{10}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 3 of the 10 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{10}=0.3$.",
                  "reason": "a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$1.3$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:13/10",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 13/10 lies at 1.3, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{37}{10}$.",
              "answer": "37/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$37=3\\times 10+7$, so $\\frac{37}{10}=3+\\frac{7}{10}$.",
                  "reason": "37 copies of $\\frac{1}{10}$ hold 3 groups of 10 copies, each group making 1, with 7 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{7}{10}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 7 of the 10 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{7}{10}=0.7$.",
                  "reason": "a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.7$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:37/10",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 37/10 lies at 3.7, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{33}{10}$.",
              "answer": "33/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$33=3\\times 10+3$, so $\\frac{33}{10}=3+\\frac{3}{10}$.",
                  "reason": "33 copies of $\\frac{1}{10}$ hold 3 groups of 10 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{3}{10}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 3 of the 10 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{10}=0.3$.",
                  "reason": "a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.3$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:33/10",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 33/10 lies at 3.3, between 3 and 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $3.6$.",
            "figure": {
              "file": "place:line:3.6",
              "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $3.6$ is 3, so the mark lies between 3 and 4.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.6=\\frac{6}{10}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 6 and no hundredths follow it, so the mark is the 6th cut of the unit from $3$ to $4$, at $3.6$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:3.6",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, with 3.6 marked, between 3 and 4."
                }
              },
              {
                "step": "$3.6$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:3.6",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.6 lies at 3.6, between 3 and 4."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $1.4$.",
              "answer": "1.4",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.4$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.4=\\frac{4}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 4 and no hundredths follow it, so the mark is the 4th cut of the unit from $1$ to $2$, at $1.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.4$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.4",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.4 lies at 1.4, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $0.8$.",
              "answer": "0.8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.8$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.8=\\frac{8}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 8 and no hundredths follow it, so the mark is the 8th cut of the unit from $0$ to $1$, at $0.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.8$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.8",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.8 lies at 0.8, between 0 and 1."
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
            }
          ]
        }
      ]
    }
  ],
  "proofs": [
    {
      "id": "c14-p1",
      "method": "direct proof",
      "statement": "For fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$, $\\frac{k}{\\ell}+\\frac{m}{n}=\\frac{kn+\\ell m}{\\ell n}$.",
      "idea": "Rewrite both fractions with the common denominator $\\ell n$, then add numerators.",
      "lines": [
        {
          "line": "Both fractions become $\\frac{k}{\\ell}=\\frac{kn}{\\ell n}$ and $\\frac{m}{n}=\\frac{\\ell m}{\\ell n}$.",
          "reason": "the rule for writing two fractions with a common denominator, from the cancellation law"
        },
        {
          "line": "$\\frac{k}{\\ell}+\\frac{m}{n}=\\frac{kn}{\\ell n}+\\frac{\\ell m}{\\ell n}$.",
          "reason": "substituting the equal fractions of the previous line"
        },
        {
          "line": "$\\frac{kn}{\\ell n}+\\frac{\\ell m}{\\ell n}=\\frac{kn+\\ell m}{\\ell n}$.",
          "reason": "fractions with the same denominator add by adding their numerators"
        },
        {
          "line": "So $\\frac{k}{\\ell}+\\frac{m}{n}=\\frac{kn+\\ell m}{\\ell n}$.",
          "reason": "combining the previous two lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "c14-s1",
      "statement": "For whole numbers $k$, $m$ and $\\ell>0$, $\\frac{k}{\\ell}+\\frac{m}{\\ell}=\\frac{k+m}{\\ell}$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "$\\frac{k}{\\ell}+\\frac{m}{\\ell}=\\frac{k\\ell+\\ell m}{\\ell\\ell}$.",
            "reason": "the general addition formula with $n$ replaced by $\\ell$"
          },
          {
            "line": "$k\\ell+\\ell m=(k+m)\\ell$.",
            "reason": "the distributive law"
          },
          {
            "line": "$\\frac{(k+m)\\ell}{\\ell\\ell}=\\frac{k+m}{\\ell}$.",
            "reason": "the cancellation law, cancelling the common divisor $\\ell$"
          },
          {
            "line": "So $\\frac{k}{\\ell}+\\frac{m}{\\ell}=\\frac{k+m}{\\ell}$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "c14-s2",
      "statement": "For whole numbers $m$, $k$, $n$, $q$ with $n>0$ and $q>0$, $\\frac{m}{n}+\\frac{k}{nq}=\\frac{mq+k}{nq}$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "$\\frac{m}{n}=\\frac{mq}{nq}$.",
            "reason": "the cancellation law, multiplying numerator and denominator by $q$"
          },
          {
            "line": "$\\frac{m}{n}+\\frac{k}{nq}=\\frac{mq}{nq}+\\frac{k}{nq}$.",
            "reason": "substituting the equal fraction of the previous line"
          },
          {
            "line": "$\\frac{mq}{nq}+\\frac{k}{nq}=\\frac{mq+k}{nq}$.",
            "reason": "fractions with the same denominator add by adding their numerators"
          },
          {
            "line": "So $\\frac{m}{n}+\\frac{k}{nq}=\\frac{mq+k}{nq}$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    }
  ]
}
