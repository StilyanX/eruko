export default {
  "number": 173,
  "title": "Floor and ceiling",
  "section": 16,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "569-573, 584-588"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $\\lfloor -\\dfrac{76}{13} \\rfloor$.",
    "form": "Answer as an integer.",
    "answer": "-6",
    "solution": [
      "Evaluate $\\lfloor -\\dfrac{76}{13} \\rfloor$.",
      "$-\\dfrac{76}{13} = -6 + \\dfrac{2}{13}$",
      "$-6 < -\\dfrac{76}{13} < -5$",
      "$\\lfloor -\\dfrac{76}{13} \\rfloor = -6$"
    ]
  },
  "ideas": [
    {
      "name": "Floor and ceiling",
      "concrete": "The number $-\\dfrac{11}{4}$ lies between the consecutive whole numbers $-3$ and $-2$, so $\\lfloor -\\dfrac{11}{4}\\rfloor = -3$ and $\\lceil -\\dfrac{11}{4}\\rceil = -2$. Dropping the fraction would give $-2$, which is above $-\\dfrac{11}{4}$ and so not its floor.",
      "general": "For a real number $x$, the **floor** $\\lfloor x\\rfloor$ is the greatest integer that is not above $x$, and the **ceiling** $\\lceil x\\rceil$ is the least integer that is not below $x$. For a real number $x$ and an integer $n$, $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$. To find a floor, find the two consecutive whole numbers around the number."
    },
    {
      "name": "Fractional part",
      "concrete": "The number $\\dfrac{19}{8}$ is $2 + \\dfrac{3}{8}$ with $0 \\le \\dfrac{3}{8} < 1$, so $\\lfloor \\dfrac{19}{8}\\rfloor = 2$ and the fractional part of $\\dfrac{19}{8}$ is $\\dfrac{19}{8} - 2 = \\dfrac{3}{8}$.",
      "general": "For every real number $x$, the **fractional part** is $\\{x\\} = x - \\lfloor x\\rfloor$, and $0 \\le \\{x\\} < 1$. So $x = \\lfloor x\\rfloor + \\{x\\}$: a whole number plus a part between $0$ and $1$."
    }
  ],
  "kinds": [
    {
      "id": "t173-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\lfloor \\dfrac{64}{11} \\rfloor$.",
            "lines": [
              {
                "step": "Evaluate $\\lfloor \\dfrac{64}{11} \\rfloor$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{64}{11} = 5 + \\dfrac{9}{11}$",
                "reason": "The general addition formula, from arithmetic: $5 + \\dfrac{9}{11} = \\dfrac{55 + 9}{11}$."
              },
              {
                "step": "$5 < \\dfrac{64}{11} < 6$",
                "reason": "To find a floor, find the two consecutive whole numbers around the number: the number is $5$ plus a part between $0$ and $1$, so it lies between $5$ and the next whole number $6$."
              },
              {
                "step": "$\\lfloor \\dfrac{64}{11} \\rfloor = 5$",
                "reason": "Floor: the greatest integer that is not above the number is the lower of the two, $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\lfloor \\dfrac{67}{9} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor \\dfrac{67}{9} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{67}{9} = 7 + \\dfrac{4}{9}$",
                  "reason": "The general addition formula, from arithmetic: $7 + \\dfrac{4}{9} = \\dfrac{63 + 4}{9}$."
                },
                {
                  "step": "$7 < \\dfrac{67}{9} < 8$",
                  "reason": "To find a floor, find the two consecutive whole numbers around the number: the number is $7$ plus a part between $0$ and $1$, so it lies between $7$ and the next whole number $8$."
                },
                {
                  "step": "$\\lfloor \\dfrac{67}{9} \\rfloor = 7$",
                  "reason": "Floor: the greatest integer that is not above the number is the lower of the two, $7$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lfloor -\\dfrac{122}{15} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "-9",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor -\\dfrac{122}{15} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-\\dfrac{122}{15} = -9 + \\dfrac{13}{15}$",
                  "reason": "The general addition formula, from arithmetic: $-9 + \\dfrac{13}{15} = \\dfrac{-135 + 13}{15}$."
                },
                {
                  "step": "$-9 < -\\dfrac{122}{15} < -8$",
                  "reason": "To find a floor, find the two consecutive whole numbers around the number: the number is $-9$ plus a part between $0$ and $1$, so it lies between $-9$ and the next whole number $-8$."
                },
                {
                  "step": "$\\lfloor -\\dfrac{122}{15} \\rfloor = -9$",
                  "reason": "Floor: the greatest integer that is not above the number is the lower of the two, $-9$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lfloor -\\dfrac{36}{11} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "-4",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor -\\dfrac{36}{11} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-\\dfrac{36}{11} = -4 + \\dfrac{8}{11}$",
                  "reason": "The general addition formula, from arithmetic: $-4 + \\dfrac{8}{11} = \\dfrac{-44 + 8}{11}$."
                },
                {
                  "step": "$-4 < -\\dfrac{36}{11} < -3$",
                  "reason": "To find a floor, find the two consecutive whole numbers around the number: the number is $-4$ plus a part between $0$ and $1$, so it lies between $-4$ and the next whole number $-3$."
                },
                {
                  "step": "$\\lfloor -\\dfrac{36}{11} \\rfloor = -4$",
                  "reason": "Floor: the greatest integer that is not above the number is the lower of the two, $-4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\lceil -\\dfrac{50}{9} \\rceil$.",
            "lines": [
              {
                "step": "Evaluate $\\lceil -\\dfrac{50}{9} \\rceil$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-\\dfrac{50}{9} = -6 + \\dfrac{4}{9}$",
                "reason": "The general addition formula, from arithmetic: $-6 + \\dfrac{4}{9} = \\dfrac{-54 + 4}{9}$."
              },
              {
                "step": "$-6 < -\\dfrac{50}{9} < -5$",
                "reason": "To find a floor, find the two consecutive whole numbers around the number: the number is $-6$ plus a part between $0$ and $1$, so it lies between $-6$ and the next whole number $-5$."
              },
              {
                "step": "$\\lceil -\\dfrac{50}{9} \\rceil = -5$",
                "reason": "Ceiling: the least integer that is not below the number is the higher of the two, $-5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\lceil -\\dfrac{39}{14} \\rceil$.",
              "form": "Answer as an integer.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Evaluate $\\lceil -\\dfrac{39}{14} \\rceil$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-\\dfrac{39}{14} = -3 + \\dfrac{3}{14}$",
                  "reason": "The general addition formula, from arithmetic: $-3 + \\dfrac{3}{14} = \\dfrac{-42 + 3}{14}$."
                },
                {
                  "step": "$-3 < -\\dfrac{39}{14} < -2$",
                  "reason": "To find a floor, find the two consecutive whole numbers around the number: the number is $-3$ plus a part between $0$ and $1$, so it lies between $-3$ and the next whole number $-2$."
                },
                {
                  "step": "$\\lceil -\\dfrac{39}{14} \\rceil = -2$",
                  "reason": "Ceiling: the least integer that is not below the number is the higher of the two, $-2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lceil -\\dfrac{34}{9} \\rceil$.",
              "form": "Answer as an integer.",
              "answer": "-3",
              "lines": [
                {
                  "step": "Evaluate $\\lceil -\\dfrac{34}{9} \\rceil$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-\\dfrac{34}{9} = -4 + \\dfrac{2}{9}$",
                  "reason": "The general addition formula, from arithmetic: $-4 + \\dfrac{2}{9} = \\dfrac{-36 + 2}{9}$."
                },
                {
                  "step": "$-4 < -\\dfrac{34}{9} < -3$",
                  "reason": "To find a floor, find the two consecutive whole numbers around the number: the number is $-4$ plus a part between $0$ and $1$, so it lies between $-4$ and the next whole number $-3$."
                },
                {
                  "step": "$\\lceil -\\dfrac{34}{9} \\rceil = -3$",
                  "reason": "Ceiling: the least integer that is not below the number is the higher of the two, $-3$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lceil \\dfrac{96}{11} \\rceil$.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Evaluate $\\lceil \\dfrac{96}{11} \\rceil$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{96}{11} = 8 + \\dfrac{8}{11}$",
                  "reason": "The general addition formula, from arithmetic: $8 + \\dfrac{8}{11} = \\dfrac{88 + 8}{11}$."
                },
                {
                  "step": "$8 < \\dfrac{96}{11} < 9$",
                  "reason": "To find a floor, find the two consecutive whole numbers around the number: the number is $8$ plus a part between $0$ and $1$, so it lies between $8$ and the next whole number $9$."
                },
                {
                  "step": "$\\lceil \\dfrac{96}{11} \\rceil = 9$",
                  "reason": "Ceiling: the least integer that is not below the number is the higher of the two, $9$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\lfloor 5\\sqrt{14} \\rfloor$.",
            "lines": [
              {
                "step": "Evaluate $\\lfloor 5\\sqrt{14} \\rfloor$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5\\sqrt{14} = \\sqrt{350}$",
                "reason": "Root of a product: $5 = \\sqrt{25}$, and $\\sqrt{25}\\sqrt{14} = \\sqrt{350}$."
              },
              {
                "step": "$18^2 < 350 < 19^2$",
                "reason": "The definition of a power, from arithmetic: $18^2 = 324$ and $19^2 = 361$."
              },
              {
                "step": "$18 < \\sqrt{350} < 19$",
                "reason": "Powers and roots of positive numbers keep the order: square roots of the three positive numbers keep their order; to find a floor, find the two consecutive whole numbers around the number."
              },
              {
                "step": "$\\lfloor 5\\sqrt{14} \\rfloor = 18$",
                "reason": "Floor: the greatest integer that is not above $\\sqrt{350}$ is $18$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\lfloor 4\\sqrt{46} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "27",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor 4\\sqrt{46} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4\\sqrt{46} = \\sqrt{736}$",
                  "reason": "Root of a product: $4 = \\sqrt{16}$, and $\\sqrt{16}\\sqrt{46} = \\sqrt{736}$."
                },
                {
                  "step": "$27^2 < 736 < 28^2$",
                  "reason": "The definition of a power, from arithmetic: $27^2 = 729$ and $28^2 = 784$."
                },
                {
                  "step": "$27 < \\sqrt{736} < 28$",
                  "reason": "Powers and roots of positive numbers keep the order: square roots of the three positive numbers keep their order; to find a floor, find the two consecutive whole numbers around the number."
                },
                {
                  "step": "$\\lfloor 4\\sqrt{46} \\rfloor = 27$",
                  "reason": "Floor: the greatest integer that is not above $\\sqrt{736}$ is $27$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lfloor 4\\sqrt{55} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "29",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor 4\\sqrt{55} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4\\sqrt{55} = \\sqrt{880}$",
                  "reason": "Root of a product: $4 = \\sqrt{16}$, and $\\sqrt{16}\\sqrt{55} = \\sqrt{880}$."
                },
                {
                  "step": "$29^2 < 880 < 30^2$",
                  "reason": "The definition of a power, from arithmetic: $29^2 = 841$ and $30^2 = 900$."
                },
                {
                  "step": "$29 < \\sqrt{880} < 30$",
                  "reason": "Powers and roots of positive numbers keep the order: square roots of the three positive numbers keep their order; to find a floor, find the two consecutive whole numbers around the number."
                },
                {
                  "step": "$\\lfloor 4\\sqrt{55} \\rfloor = 29$",
                  "reason": "Floor: the greatest integer that is not above $\\sqrt{880}$ is $29$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lfloor 3\\sqrt{46} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor 3\\sqrt{46} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3\\sqrt{46} = \\sqrt{414}$",
                  "reason": "Root of a product: $3 = \\sqrt{9}$, and $\\sqrt{9}\\sqrt{46} = \\sqrt{414}$."
                },
                {
                  "step": "$20^2 < 414 < 21^2$",
                  "reason": "The definition of a power, from arithmetic: $20^2 = 400$ and $21^2 = 441$."
                },
                {
                  "step": "$20 < \\sqrt{414} < 21$",
                  "reason": "Powers and roots of positive numbers keep the order: square roots of the three positive numbers keep their order; to find a floor, find the two consecutive whole numbers around the number."
                },
                {
                  "step": "$\\lfloor 3\\sqrt{46} \\rfloor = 20$",
                  "reason": "Floor: the greatest integer that is not above $\\sqrt{414}$ is $20$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\lfloor \\sqrt{\\lceil \\dfrac{2059}{9} \\rceil} \\rfloor$.",
            "lines": [
              {
                "step": "Evaluate $\\lfloor \\sqrt{\\lceil \\dfrac{2059}{9} \\rceil} \\rfloor$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{2059}{9} = 228 + \\dfrac{7}{9}$",
                "reason": "The general addition formula, from arithmetic: $228 + \\dfrac{7}{9} = \\dfrac{2052 + 7}{9}$."
              },
              {
                "step": "$\\lceil \\dfrac{2059}{9} \\rceil = 229$",
                "reason": "Ceiling: $\\dfrac{2059}{9}$ lies between $228$ and $229$, and the least integer not below it is $229$."
              },
              {
                "step": "$\\lfloor \\sqrt{\\lceil \\dfrac{2059}{9} \\rceil} \\rfloor = \\lfloor \\sqrt{229} \\rfloor$",
                "reason": "Substituting a value: the inside is worked out first."
              },
              {
                "step": "$15^2 < 229 < 16^2$",
                "reason": "The definition of a power, from arithmetic: $15^2 = 225$ and $16^2 = 256$."
              },
              {
                "step": "$15 < \\sqrt{229} < 16$",
                "reason": "Powers and roots of positive numbers keep the order: square roots of the three positive numbers keep their order."
              },
              {
                "step": "$\\lfloor \\sqrt{\\lceil \\dfrac{2059}{9} \\rceil} \\rfloor = 15$",
                "reason": "Floor: the greatest integer that is not above $\\sqrt{229}$ is $15$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\lfloor \\sqrt{\\lceil \\dfrac{1957}{7} \\rceil} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor \\sqrt{\\lceil \\dfrac{1957}{7} \\rceil} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1957}{7} = 279 + \\dfrac{4}{7}$",
                  "reason": "The general addition formula, from arithmetic: $279 + \\dfrac{4}{7} = \\dfrac{1953 + 4}{7}$."
                },
                {
                  "step": "$\\lceil \\dfrac{1957}{7} \\rceil = 280$",
                  "reason": "Ceiling: $\\dfrac{1957}{7}$ lies between $279$ and $280$, and the least integer not below it is $280$."
                },
                {
                  "step": "$\\lfloor \\sqrt{\\lceil \\dfrac{1957}{7} \\rceil} \\rfloor = \\lfloor \\sqrt{280} \\rfloor$",
                  "reason": "Substituting a value: the inside is worked out first."
                },
                {
                  "step": "$16^2 < 280 < 17^2$",
                  "reason": "The definition of a power, from arithmetic: $16^2 = 256$ and $17^2 = 289$."
                },
                {
                  "step": "$16 < \\sqrt{280} < 17$",
                  "reason": "Powers and roots of positive numbers keep the order: square roots of the three positive numbers keep their order."
                },
                {
                  "step": "$\\lfloor \\sqrt{\\lceil \\dfrac{1957}{7} \\rceil} \\rfloor = 16$",
                  "reason": "Floor: the greatest integer that is not above $\\sqrt{280}$ is $16$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lfloor \\sqrt{\\lceil \\dfrac{454}{9} \\rceil} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor \\sqrt{\\lceil \\dfrac{454}{9} \\rceil} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{454}{9} = 50 + \\dfrac{4}{9}$",
                  "reason": "The general addition formula, from arithmetic: $50 + \\dfrac{4}{9} = \\dfrac{450 + 4}{9}$."
                },
                {
                  "step": "$\\lceil \\dfrac{454}{9} \\rceil = 51$",
                  "reason": "Ceiling: $\\dfrac{454}{9}$ lies between $50$ and $51$, and the least integer not below it is $51$."
                },
                {
                  "step": "$\\lfloor \\sqrt{\\lceil \\dfrac{454}{9} \\rceil} \\rfloor = \\lfloor \\sqrt{51} \\rfloor$",
                  "reason": "Substituting a value: the inside is worked out first."
                },
                {
                  "step": "$7^2 < 51 < 8^2$",
                  "reason": "The definition of a power, from arithmetic: $7^2 = 49$ and $8^2 = 64$."
                },
                {
                  "step": "$7 < \\sqrt{51} < 8$",
                  "reason": "Powers and roots of positive numbers keep the order: square roots of the three positive numbers keep their order."
                },
                {
                  "step": "$\\lfloor \\sqrt{\\lceil \\dfrac{454}{9} \\rceil} \\rfloor = 7$",
                  "reason": "Floor: the greatest integer that is not above $\\sqrt{51}$ is $7$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lfloor \\sqrt{\\lceil \\dfrac{1244}{9} \\rceil} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "11",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor \\sqrt{\\lceil \\dfrac{1244}{9} \\rceil} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1244}{9} = 138 + \\dfrac{2}{9}$",
                  "reason": "The general addition formula, from arithmetic: $138 + \\dfrac{2}{9} = \\dfrac{1242 + 2}{9}$."
                },
                {
                  "step": "$\\lceil \\dfrac{1244}{9} \\rceil = 139$",
                  "reason": "Ceiling: $\\dfrac{1244}{9}$ lies between $138$ and $139$, and the least integer not below it is $139$."
                },
                {
                  "step": "$\\lfloor \\sqrt{\\lceil \\dfrac{1244}{9} \\rceil} \\rfloor = \\lfloor \\sqrt{139} \\rfloor$",
                  "reason": "Substituting a value: the inside is worked out first."
                },
                {
                  "step": "$11^2 < 139 < 12^2$",
                  "reason": "The definition of a power, from arithmetic: $11^2 = 121$ and $12^2 = 144$."
                },
                {
                  "step": "$11 < \\sqrt{139} < 12$",
                  "reason": "Powers and roots of positive numbers keep the order: square roots of the three positive numbers keep their order."
                },
                {
                  "step": "$\\lfloor \\sqrt{\\lceil \\dfrac{1244}{9} \\rceil} \\rfloor = 11$",
                  "reason": "Floor: the greatest integer that is not above $\\sqrt{139}$ is $11$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t173-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\lfloor 6x - 4 \\rfloor = -7$.",
            "lines": [
              {
                "step": "Solve $\\lfloor 6x - 4 \\rfloor = -7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-7 \\le 6x - 4 < -6$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the number is $6x - 4$."
              },
              {
                "step": "$-3 \\le 6x < -2$",
                "reason": "Solving a chain: $4$ is added to each of the three parts."
              },
              {
                "step": "$-\\dfrac{1}{2} \\le x < -\\dfrac{1}{3}$",
                "reason": "Solving a chain: each part is divided by $6$, a positive number, so the signs stay."
              },
              {
                "step": "Here $x$ lies in $[-\\dfrac{1}{2}, -\\dfrac{1}{3})$",
                "reason": "Interval notation: the left end is in the set and the right end is not."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\lfloor 7x - 6 \\rfloor = 10$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[16/7, 17/7)",
              "lines": [
                {
                  "step": "Solve $\\lfloor 7x - 6 \\rfloor = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10 \\le 7x - 6 < 11$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the number is $7x - 6$."
                },
                {
                  "step": "$16 \\le 7x < 17$",
                  "reason": "Solving a chain: $6$ is added to each of the three parts."
                },
                {
                  "step": "$\\dfrac{16}{7} \\le x < \\dfrac{17}{7}$",
                  "reason": "Solving a chain: each part is divided by $7$, a positive number, so the signs stay."
                },
                {
                  "step": "Here $x$ lies in $[\\dfrac{16}{7}, \\dfrac{17}{7})$",
                  "reason": "Interval notation: the left end is in the set and the right end is not."
                }
              ]
            },
            {
              "prompt": "Solve $\\lfloor 3x - \\dfrac{8}{3} \\rfloor = 5$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[23/9, 26/9)",
              "lines": [
                {
                  "step": "Solve $\\lfloor 3x - \\dfrac{8}{3} \\rfloor = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5 \\le 3x - \\dfrac{8}{3} < 6$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the number is $3x - \\dfrac{8}{3}$."
                },
                {
                  "step": "$\\dfrac{23}{3} \\le 3x < \\dfrac{26}{3}$",
                  "reason": "Solving a chain: $\\dfrac{8}{3}$ is added to each of the three parts."
                },
                {
                  "step": "$\\dfrac{23}{9} \\le x < \\dfrac{26}{9}$",
                  "reason": "Solving a chain: each part is divided by $3$, a positive number, so the signs stay."
                },
                {
                  "step": "Here $x$ lies in $[\\dfrac{23}{9}, \\dfrac{26}{9})$",
                  "reason": "Interval notation: the left end is in the set and the right end is not."
                }
              ]
            },
            {
              "prompt": "Solve $\\lfloor 4x - 9 \\rfloor = -7$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[1/2, 3/4)",
              "lines": [
                {
                  "step": "Solve $\\lfloor 4x - 9 \\rfloor = -7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-7 \\le 4x - 9 < -6$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the number is $4x - 9$."
                },
                {
                  "step": "$2 \\le 4x < 3$",
                  "reason": "Solving a chain: $9$ is added to each of the three parts."
                },
                {
                  "step": "$\\dfrac{1}{2} \\le x < \\dfrac{3}{4}$",
                  "reason": "Solving a chain: each part is divided by $4$, a positive number, so the signs stay."
                },
                {
                  "step": "Here $x$ lies in $[\\dfrac{1}{2}, \\dfrac{3}{4})$",
                  "reason": "Interval notation: the left end is in the set and the right end is not."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x + 4\\lfloor x \\rfloor = \\dfrac{364}{9}$.",
            "lines": [
              {
                "step": "Solve $x + 4\\lfloor x \\rfloor = \\dfrac{364}{9}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $x = n + \\{x\\}$, with $n = \\lfloor x \\rfloor$ and $0 \\le \\{x\\} < 1$",
                "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ is its floor $n$ plus its fractional part."
              },
              {
                "step": "$n + \\{x\\} + 4n = \\dfrac{364}{9}$",
                "reason": "Substituting a value: $n + \\{x\\}$ goes in place of $x$, and $\\lfloor x \\rfloor = n$."
              },
              {
                "step": "$5n + \\{x\\} = \\dfrac{364}{9}$",
                "reason": "Collecting like terms: the terms in $n$ are added."
              },
              {
                "step": "$5n + \\{x\\} = 40 + \\dfrac{4}{9}$",
                "reason": "The general addition formula, from arithmetic: $40 + \\dfrac{4}{9} = \\dfrac{364}{9}$."
              },
              {
                "step": "Here $\\{x\\} = \\dfrac{4}{9}$ and $5n = 40$",
                "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $5n$ is a whole number and $0 \\le \\{x\\} < 1$, so $\\{x\\}$ is the part of the right side above its floor."
              },
              {
                "step": "$n = 8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$x = \\dfrac{76}{9}$",
                "reason": "The general addition formula, from arithmetic: $x = n + \\{x\\} = 8 + \\dfrac{4}{9}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x + \\lfloor x \\rfloor = -\\dfrac{7}{4}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -3/4",
              "lines": [
                {
                  "step": "Solve $x + \\lfloor x \\rfloor = -\\dfrac{7}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = n + \\{x\\}$, with $n = \\lfloor x \\rfloor$ and $0 \\le \\{x\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ is its floor $n$ plus its fractional part."
                },
                {
                  "step": "$n + \\{x\\} + n = -\\dfrac{7}{4}$",
                  "reason": "Substituting a value: $n + \\{x\\}$ goes in place of $x$, and $\\lfloor x \\rfloor = n$."
                },
                {
                  "step": "$2n + \\{x\\} = -\\dfrac{7}{4}$",
                  "reason": "Collecting like terms: the terms in $n$ are added."
                },
                {
                  "step": "$2n + \\{x\\} = -2 + \\dfrac{1}{4}$",
                  "reason": "The general addition formula, from arithmetic: $-2 + \\dfrac{1}{4} = -\\dfrac{7}{4}$."
                },
                {
                  "step": "Here $\\{x\\} = \\dfrac{1}{4}$ and $2n = -2$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $2n$ is a whole number and $0 \\le \\{x\\} < 1$, so $\\{x\\}$ is the part of the right side above its floor."
                },
                {
                  "step": "$n = -1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$x = -\\dfrac{3}{4}$",
                  "reason": "The general addition formula, from arithmetic: $x = n + \\{x\\} = -1 + \\dfrac{1}{4}$."
                }
              ]
            },
            {
              "prompt": "Solve $x + 2\\lfloor x \\rfloor = -\\dfrac{133}{5}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -43/5",
              "lines": [
                {
                  "step": "Solve $x + 2\\lfloor x \\rfloor = -\\dfrac{133}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = n + \\{x\\}$, with $n = \\lfloor x \\rfloor$ and $0 \\le \\{x\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ is its floor $n$ plus its fractional part."
                },
                {
                  "step": "$n + \\{x\\} + 2n = -\\dfrac{133}{5}$",
                  "reason": "Substituting a value: $n + \\{x\\}$ goes in place of $x$, and $\\lfloor x \\rfloor = n$."
                },
                {
                  "step": "$3n + \\{x\\} = -\\dfrac{133}{5}$",
                  "reason": "Collecting like terms: the terms in $n$ are added."
                },
                {
                  "step": "$3n + \\{x\\} = -27 + \\dfrac{2}{5}$",
                  "reason": "The general addition formula, from arithmetic: $-27 + \\dfrac{2}{5} = -\\dfrac{133}{5}$."
                },
                {
                  "step": "Here $\\{x\\} = \\dfrac{2}{5}$ and $3n = -27$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $3n$ is a whole number and $0 \\le \\{x\\} < 1$, so $\\{x\\}$ is the part of the right side above its floor."
                },
                {
                  "step": "$n = -9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$x = -\\dfrac{43}{5}$",
                  "reason": "The general addition formula, from arithmetic: $x = n + \\{x\\} = -9 + \\dfrac{2}{5}$."
                }
              ]
            },
            {
              "prompt": "Solve $x + 4\\lfloor x \\rfloor = \\dfrac{181}{3}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 37/3",
              "lines": [
                {
                  "step": "Solve $x + 4\\lfloor x \\rfloor = \\dfrac{181}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = n + \\{x\\}$, with $n = \\lfloor x \\rfloor$ and $0 \\le \\{x\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ is its floor $n$ plus its fractional part."
                },
                {
                  "step": "$n + \\{x\\} + 4n = \\dfrac{181}{3}$",
                  "reason": "Substituting a value: $n + \\{x\\}$ goes in place of $x$, and $\\lfloor x \\rfloor = n$."
                },
                {
                  "step": "$5n + \\{x\\} = \\dfrac{181}{3}$",
                  "reason": "Collecting like terms: the terms in $n$ are added."
                },
                {
                  "step": "$5n + \\{x\\} = 60 + \\dfrac{1}{3}$",
                  "reason": "The general addition formula, from arithmetic: $60 + \\dfrac{1}{3} = \\dfrac{181}{3}$."
                },
                {
                  "step": "Here $\\{x\\} = \\dfrac{1}{3}$ and $5n = 60$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $5n$ is a whole number and $0 \\le \\{x\\} < 1$, so $\\{x\\}$ is the part of the right side above its floor."
                },
                {
                  "step": "$n = 12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$x = \\dfrac{37}{3}$",
                  "reason": "The general addition formula, from arithmetic: $x = n + \\{x\\} = 12 + \\dfrac{1}{3}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $y$ when $x - 3\\lfloor y \\rfloor = -\\dfrac{73}{5}$ and $y - 3\\lfloor x \\rfloor = -\\dfrac{31}{3}$.",
            "lines": [
              {
                "step": "Find $y$ when $x - 3\\lfloor y \\rfloor = -\\dfrac{73}{5}$ and $y - 3\\lfloor x \\rfloor = -\\dfrac{31}{3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $x = m + \\{x\\}$ and $y = n + \\{y\\}$, with $m = \\lfloor x \\rfloor$, $n = \\lfloor y \\rfloor$, $0 \\le \\{x\\} < 1$ and $0 \\le \\{y\\} < 1$",
                "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ and $y$ are their floors $m$ and $n$ plus their fractional parts."
              },
              {
                "step": "Here $m - 3n + \\{x\\} = -15 + \\dfrac{2}{5}$ and $-3m + n + \\{y\\} = -11 + \\dfrac{2}{3}$",
                "reason": "Substituting a value: $m + \\{x\\}$ and $n + \\{y\\}$ go in place of $x$ and $y$; the general addition formula, from arithmetic splits each right side."
              },
              {
                "step": "Here $\\{x\\} = \\dfrac{2}{5}$, $m - 3n = -15$, $\\{y\\} = \\dfrac{2}{3}$ and $-3m + n = -11$",
                "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: the whole-number parts on the two sides are equal, and so are the parts between $0$ and $1$."
              },
              {
                "step": "$8n = 56$",
                "reason": "Elimination: the second equation in $m$ and $n$ is taken from $-3$ times the first, which removes $m$."
              },
              {
                "step": "$n = 7$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
              },
              {
                "step": "$m = 6$",
                "reason": "Back-substitution: $m = -15 - (-3) \\cdot (7)$."
              },
              {
                "step": "$y = \\dfrac{23}{3}$",
                "reason": "The general addition formula, from arithmetic: $y = n + \\{y\\}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$ when $x - 2\\lfloor y \\rfloor = \\dfrac{71}{7}$ and $y + 2\\lfloor x \\rfloor = -\\dfrac{49}{5}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -13/7",
              "lines": [
                {
                  "step": "Find $x$ when $x - 2\\lfloor y \\rfloor = \\dfrac{71}{7}$ and $y + 2\\lfloor x \\rfloor = -\\dfrac{49}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = m + \\{x\\}$ and $y = n + \\{y\\}$, with $m = \\lfloor x \\rfloor$, $n = \\lfloor y \\rfloor$, $0 \\le \\{x\\} < 1$ and $0 \\le \\{y\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ and $y$ are their floors $m$ and $n$ plus their fractional parts."
                },
                {
                  "step": "Here $m - 2n + \\{x\\} = 10 + \\dfrac{1}{7}$ and $2m + n + \\{y\\} = -10 + \\dfrac{1}{5}$",
                  "reason": "Substituting a value: $m + \\{x\\}$ and $n + \\{y\\}$ go in place of $x$ and $y$; the general addition formula, from arithmetic splits each right side."
                },
                {
                  "step": "Here $\\{x\\} = \\dfrac{1}{7}$, $m - 2n = 10$, $\\{y\\} = \\dfrac{1}{5}$ and $2m + n = -10$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: the whole-number parts on the two sides are equal, and so are the parts between $0$ and $1$."
                },
                {
                  "step": "$-5n = 30$",
                  "reason": "Elimination: the second equation in $m$ and $n$ is taken from $2$ times the first, which removes $m$."
                },
                {
                  "step": "$n = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                },
                {
                  "step": "$m = -2$",
                  "reason": "Back-substitution: $m = 10 - (-2) \\cdot (-6)$."
                },
                {
                  "step": "$x = -\\dfrac{13}{7}$",
                  "reason": "The general addition formula, from arithmetic: $x = m + \\{x\\}$."
                }
              ]
            },
            {
              "prompt": "Find $x$ when $x - 3\\lfloor y \\rfloor = -\\dfrac{142}{7}$ and $y - 2\\lfloor x \\rfloor = \\dfrac{64}{5}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -16/7",
              "lines": [
                {
                  "step": "Find $x$ when $x - 3\\lfloor y \\rfloor = -\\dfrac{142}{7}$ and $y - 2\\lfloor x \\rfloor = \\dfrac{64}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = m + \\{x\\}$ and $y = n + \\{y\\}$, with $m = \\lfloor x \\rfloor$, $n = \\lfloor y \\rfloor$, $0 \\le \\{x\\} < 1$ and $0 \\le \\{y\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ and $y$ are their floors $m$ and $n$ plus their fractional parts."
                },
                {
                  "step": "Here $m - 3n + \\{x\\} = -21 + \\dfrac{5}{7}$ and $-2m + n + \\{y\\} = 12 + \\dfrac{4}{5}$",
                  "reason": "Substituting a value: $m + \\{x\\}$ and $n + \\{y\\}$ go in place of $x$ and $y$; the general addition formula, from arithmetic splits each right side."
                },
                {
                  "step": "Here $\\{x\\} = \\dfrac{5}{7}$, $m - 3n = -21$, $\\{y\\} = \\dfrac{4}{5}$ and $-2m + n = 12$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: the whole-number parts on the two sides are equal, and so are the parts between $0$ and $1$."
                },
                {
                  "step": "$5n = 30$",
                  "reason": "Elimination: the second equation in $m$ and $n$ is taken from $-2$ times the first, which removes $m$."
                },
                {
                  "step": "$n = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$m = -3$",
                  "reason": "Back-substitution: $m = -21 - (-3) \\cdot (6)$."
                },
                {
                  "step": "$x = -\\dfrac{16}{7}$",
                  "reason": "The general addition formula, from arithmetic: $x = m + \\{x\\}$."
                }
              ]
            },
            {
              "prompt": "Find $x$ when $x + 2\\lfloor y \\rfloor = \\dfrac{25}{3}$ and $y - 3\\lfloor x \\rfloor = \\dfrac{93}{5}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -11/3",
              "lines": [
                {
                  "step": "Find $x$ when $x + 2\\lfloor y \\rfloor = \\dfrac{25}{3}$ and $y - 3\\lfloor x \\rfloor = \\dfrac{93}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = m + \\{x\\}$ and $y = n + \\{y\\}$, with $m = \\lfloor x \\rfloor$, $n = \\lfloor y \\rfloor$, $0 \\le \\{x\\} < 1$ and $0 \\le \\{y\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ and $y$ are their floors $m$ and $n$ plus their fractional parts."
                },
                {
                  "step": "Here $m + 2n + \\{x\\} = 8 + \\dfrac{1}{3}$ and $-3m + n + \\{y\\} = 18 + \\dfrac{3}{5}$",
                  "reason": "Substituting a value: $m + \\{x\\}$ and $n + \\{y\\}$ go in place of $x$ and $y$; the general addition formula, from arithmetic splits each right side."
                },
                {
                  "step": "Here $\\{x\\} = \\dfrac{1}{3}$, $m + 2n = 8$, $\\{y\\} = \\dfrac{3}{5}$ and $-3m + n = 18$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: the whole-number parts on the two sides are equal, and so are the parts between $0$ and $1$."
                },
                {
                  "step": "$-7n = -42$",
                  "reason": "Elimination: the second equation in $m$ and $n$ is taken from $-3$ times the first, which removes $m$."
                },
                {
                  "step": "$n = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$."
                },
                {
                  "step": "$m = -4$",
                  "reason": "Back-substitution: $m = 8 - (2) \\cdot (6)$."
                },
                {
                  "step": "$x = -\\dfrac{11}{3}$",
                  "reason": "The general addition formula, from arithmetic: $x = m + \\{x\\}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every integer $n$ with $\\lfloor \\dfrac{n}{2} \\rfloor = 9$.",
            "lines": [
              {
                "step": "Find every integer $n$ with $\\lfloor \\dfrac{n}{2} \\rfloor = 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$9 \\le \\dfrac{n}{2} < 10$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the number is $\\dfrac{n}{2}$ and the integer is $9$."
              },
              {
                "step": "$18 \\le n < 20$",
                "reason": "Solving a chain: each part is multiplied by $2$, a positive number, so the signs stay."
              },
              {
                "step": "The integers are $18$ and $19$.",
                "reason": "Strict and nonstrict inequality: $18$ is allowed and $20$ is not."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every integer $n$ with $\\lfloor \\dfrac{n}{4} \\rfloor = -5$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-20, -19, -18, -17}",
              "lines": [
                {
                  "step": "Find every integer $n$ with $\\lfloor \\dfrac{n}{4} \\rfloor = -5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-5 \\le \\dfrac{n}{4} < -4$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the number is $\\dfrac{n}{4}$ and the integer is $-5$."
                },
                {
                  "step": "$-20 \\le n < -16$",
                  "reason": "Solving a chain: each part is multiplied by $4$, a positive number, so the signs stay."
                },
                {
                  "step": "The integers are $-20$, $-19$, $-18$ and $-17$.",
                  "reason": "Strict and nonstrict inequality: $-20$ is allowed and $-16$ is not."
                }
              ]
            },
            {
              "prompt": "Find every integer $n$ with $\\lfloor \\dfrac{n}{5} \\rfloor = -3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-15, -14, -13, -12, -11}",
              "lines": [
                {
                  "step": "Find every integer $n$ with $\\lfloor \\dfrac{n}{5} \\rfloor = -3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3 \\le \\dfrac{n}{5} < -2$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the number is $\\dfrac{n}{5}$ and the integer is $-3$."
                },
                {
                  "step": "$-15 \\le n < -10$",
                  "reason": "Solving a chain: each part is multiplied by $5$, a positive number, so the signs stay."
                },
                {
                  "step": "The integers are $-15$, $-14$, $-13$, $-12$ and $-11$.",
                  "reason": "Strict and nonstrict inequality: $-15$ is allowed and $-10$ is not."
                }
              ]
            },
            {
              "prompt": "Find every integer $n$ with $\\lfloor \\dfrac{n}{5} \\rfloor = 7$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{35, 36, 37, 38, 39}",
              "lines": [
                {
                  "step": "Find every integer $n$ with $\\lfloor \\dfrac{n}{5} \\rfloor = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7 \\le \\dfrac{n}{5} < 8$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the number is $\\dfrac{n}{5}$ and the integer is $7$."
                },
                {
                  "step": "$35 \\le n < 40$",
                  "reason": "Solving a chain: each part is multiplied by $5$, a positive number, so the signs stay."
                },
                {
                  "step": "The integers are $35$, $36$, $37$, $38$ and $39$.",
                  "reason": "Strict and nonstrict inequality: $35$ is allowed and $40$ is not."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $5 < \\lfloor 6x + 9 \\rfloor \\le 8$.",
            "lines": [
              {
                "step": "Solve $5 < \\lfloor 6x + 9 \\rfloor \\le 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6 \\le \\lfloor 6x + 9 \\rfloor \\le 8$",
                "reason": "Floor: the floor is an integer, and the least integer above $5$ is $6$."
              },
              {
                "step": "$6 \\le 6x + 9 < 9$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor is $6$ or more exactly when the number is, and $8$ or less exactly when the number is below $9$."
              },
              {
                "step": "$-3 \\le 6x < 0$",
                "reason": "Solving a chain: $-9$ is added to each of the three parts."
              },
              {
                "step": "$-\\dfrac{1}{2} \\le x < 0$",
                "reason": "Solving a chain: each part is divided by $6$, a positive number, so the signs stay."
              },
              {
                "step": "Here $x$ lies in $[-\\dfrac{1}{2}, 0)$",
                "reason": "Interval notation: the left end is in the set and the right end is not."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $0 < \\lfloor 8x - 9 \\rfloor \\le 4$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[5/4, 7/4)",
              "lines": [
                {
                  "step": "Solve $0 < \\lfloor 8x - 9 \\rfloor \\le 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 \\le \\lfloor 8x - 9 \\rfloor \\le 4$",
                  "reason": "Floor: the floor is an integer, and the least integer above $0$ is $1$."
                },
                {
                  "step": "$1 \\le 8x - 9 < 5$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor is $1$ or more exactly when the number is, and $4$ or less exactly when the number is below $5$."
                },
                {
                  "step": "$10 \\le 8x < 14$",
                  "reason": "Solving a chain: $9$ is added to each of the three parts."
                },
                {
                  "step": "$\\dfrac{5}{4} \\le x < \\dfrac{7}{4}$",
                  "reason": "Solving a chain: each part is divided by $8$, a positive number, so the signs stay."
                },
                {
                  "step": "Here $x$ lies in $[\\dfrac{5}{4}, \\dfrac{7}{4})$",
                  "reason": "Interval notation: the left end is in the set and the right end is not."
                }
              ]
            },
            {
              "prompt": "Solve $-1 < \\lfloor 3x + 9 \\rfloor \\le 2$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-3, -2)",
              "lines": [
                {
                  "step": "Solve $-1 < \\lfloor 3x + 9 \\rfloor \\le 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$0 \\le \\lfloor 3x + 9 \\rfloor \\le 2$",
                  "reason": "Floor: the floor is an integer, and the least integer above $-1$ is $0$."
                },
                {
                  "step": "$0 \\le 3x + 9 < 3$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor is $0$ or more exactly when the number is, and $2$ or less exactly when the number is below $3$."
                },
                {
                  "step": "$-9 \\le 3x < -6$",
                  "reason": "Solving a chain: $-9$ is added to each of the three parts."
                },
                {
                  "step": "$-3 \\le x < -2$",
                  "reason": "Solving a chain: each part is divided by $3$, a positive number, so the signs stay."
                },
                {
                  "step": "Here $x$ lies in $[-3, -2)$",
                  "reason": "Interval notation: the left end is in the set and the right end is not."
                }
              ]
            },
            {
              "prompt": "Solve $-9 < \\lfloor 4x + 5 \\rfloor \\le -7$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-13/4, -11/4)",
              "lines": [
                {
                  "step": "Solve $-9 < \\lfloor 4x + 5 \\rfloor \\le -7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-8 \\le \\lfloor 4x + 5 \\rfloor \\le -7$",
                  "reason": "Floor: the floor is an integer, and the least integer above $-9$ is $-8$."
                },
                {
                  "step": "$-8 \\le 4x + 5 < -6$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor is $-8$ or more exactly when the number is, and $-7$ or less exactly when the number is below $-6$."
                },
                {
                  "step": "$-13 \\le 4x < -11$",
                  "reason": "Solving a chain: $-5$ is added to each of the three parts."
                },
                {
                  "step": "$-\\dfrac{13}{4} \\le x < -\\dfrac{11}{4}$",
                  "reason": "Solving a chain: each part is divided by $4$, a positive number, so the signs stay."
                },
                {
                  "step": "Here $x$ lies in $[-\\dfrac{13}{4}, -\\dfrac{11}{4})$",
                  "reason": "Interval notation: the left end is in the set and the right end is not."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\lfloor x \\rfloor = 3x - 21$.",
            "lines": [
              {
                "step": "Solve $\\lfloor x \\rfloor = 3x - 21$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $x = n + \\{x\\}$, with $n = \\lfloor x \\rfloor$ and $0 \\le \\{x\\} < 1$",
                "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ is its floor $n$ plus its fractional part."
              },
              {
                "step": "$n = 3n + 3\\{x\\} - 21$",
                "reason": "Substituting a value: $n + \\{x\\}$ goes in place of $x$, and $\\lfloor x \\rfloor = n$."
              },
              {
                "step": "$-2n + 21 = 3\\{x\\}$",
                "reason": "Adding the same number to both sides: $-3n + 21$ is added to both sides."
              },
              {
                "step": "$\\{x\\} = \\dfrac{-2n + 21}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$, and the equation is read from right to left."
              },
              {
                "step": "$0 \\le \\dfrac{-2n + 21}{3} < 1$",
                "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: here $\\{x\\} = \\dfrac{-2n + 21}{3}$."
              },
              {
                "step": "$0 \\le -2n + 21 < 3$",
                "reason": "Solving a chain: each part is multiplied by $3$, a positive number, so the signs stay."
              },
              {
                "step": "$-21 \\le -2n < -18$",
                "reason": "Solving a chain: $-21$ is added to each of the three parts."
              },
              {
                "step": "$9 < n \\le \\dfrac{21}{2}$",
                "reason": "Solving a chain: each part is divided by $-2$, a negative number, which reverses the signs."
              },
              {
                "step": "$n = 10$",
                "reason": "Strict and nonstrict inequality: the interval keeps its right end and leaves out its left end, and $10$ is the one integer in it."
              },
              {
                "step": "$\\{x\\} = \\dfrac{1}{3}$",
                "reason": "Substituting a value: $n = 10$ goes into the equation of line 5."
              },
              {
                "step": "$x = \\dfrac{31}{3}$",
                "reason": "The general addition formula, from arithmetic: $x = n + \\{x\\} = 10 + \\dfrac{1}{3}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\lfloor x \\rfloor = 6x + 11$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -7/3",
              "lines": [
                {
                  "step": "Solve $\\lfloor x \\rfloor = 6x + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = n + \\{x\\}$, with $n = \\lfloor x \\rfloor$ and $0 \\le \\{x\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ is its floor $n$ plus its fractional part."
                },
                {
                  "step": "$n = 6n + 6\\{x\\} + 11$",
                  "reason": "Substituting a value: $n + \\{x\\}$ goes in place of $x$, and $\\lfloor x \\rfloor = n$."
                },
                {
                  "step": "$-5n - 11 = 6\\{x\\}$",
                  "reason": "Adding the same number to both sides: $-6n - 11$ is added to both sides."
                },
                {
                  "step": "$\\{x\\} = \\dfrac{-5n - 11}{6}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$, and the equation is read from right to left."
                },
                {
                  "step": "$0 \\le \\dfrac{-5n - 11}{6} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: here $\\{x\\} = \\dfrac{-5n - 11}{6}$."
                },
                {
                  "step": "$0 \\le -5n - 11 < 6$",
                  "reason": "Solving a chain: each part is multiplied by $6$, a positive number, so the signs stay."
                },
                {
                  "step": "$11 \\le -5n < 17$",
                  "reason": "Solving a chain: $11$ is added to each of the three parts."
                },
                {
                  "step": "$-\\dfrac{17}{5} < n \\le -\\dfrac{11}{5}$",
                  "reason": "Solving a chain: each part is divided by $-5$, a negative number, which reverses the signs."
                },
                {
                  "step": "$n = -3$",
                  "reason": "Strict and nonstrict inequality: the interval keeps its right end and leaves out its left end, and $-3$ is the one integer in it."
                },
                {
                  "step": "$\\{x\\} = \\dfrac{2}{3}$",
                  "reason": "Substituting a value: $n = -3$ goes into the equation of line 5."
                },
                {
                  "step": "$x = -\\dfrac{7}{3}$",
                  "reason": "The general addition formula, from arithmetic: $x = n + \\{x\\} = -3 + \\dfrac{2}{3}$."
                }
              ]
            },
            {
              "prompt": "Solve $\\lfloor x \\rfloor = 4x - \\dfrac{5}{3}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5/12",
              "lines": [
                {
                  "step": "Solve $\\lfloor x \\rfloor = 4x - \\dfrac{5}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = n + \\{x\\}$, with $n = \\lfloor x \\rfloor$ and $0 \\le \\{x\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ is its floor $n$ plus its fractional part."
                },
                {
                  "step": "$n = 4n + 4\\{x\\} - \\dfrac{5}{3}$",
                  "reason": "Substituting a value: $n + \\{x\\}$ goes in place of $x$, and $\\lfloor x \\rfloor = n$."
                },
                {
                  "step": "$-3n + \\dfrac{5}{3} = 4\\{x\\}$",
                  "reason": "Adding the same number to both sides: $-4n + \\dfrac{5}{3}$ is added to both sides."
                },
                {
                  "step": "$\\{x\\} = \\dfrac{-9n + 5}{12}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and the equation is read from right to left."
                },
                {
                  "step": "$0 \\le \\dfrac{-9n + 5}{12} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: here $\\{x\\} = \\dfrac{-9n + 5}{12}$."
                },
                {
                  "step": "$0 \\le -9n + 5 < 12$",
                  "reason": "Solving a chain: each part is multiplied by $12$, a positive number, so the signs stay."
                },
                {
                  "step": "$-5 \\le -9n < 7$",
                  "reason": "Solving a chain: $-5$ is added to each of the three parts."
                },
                {
                  "step": "$-\\dfrac{7}{9} < n \\le \\dfrac{5}{9}$",
                  "reason": "Solving a chain: each part is divided by $-9$, a negative number, which reverses the signs."
                },
                {
                  "step": "$n = 0$",
                  "reason": "Strict and nonstrict inequality: the interval keeps its right end and leaves out its left end, and $0$ is the one integer in it."
                },
                {
                  "step": "$\\{x\\} = \\dfrac{5}{12}$",
                  "reason": "Substituting a value: $n = 0$ goes into the equation of line 5."
                },
                {
                  "step": "$x = \\dfrac{5}{12}$",
                  "reason": "The general addition formula, from arithmetic: $x = n + \\{x\\} = 0 + \\dfrac{5}{12}$."
                }
              ]
            },
            {
              "prompt": "Solve $\\lfloor x \\rfloor = 6x + 8$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -5/3",
              "lines": [
                {
                  "step": "Solve $\\lfloor x \\rfloor = 6x + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $x = n + \\{x\\}$, with $n = \\lfloor x \\rfloor$ and $0 \\le \\{x\\} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $x$ is its floor $n$ plus its fractional part."
                },
                {
                  "step": "$n = 6n + 6\\{x\\} + 8$",
                  "reason": "Substituting a value: $n + \\{x\\}$ goes in place of $x$, and $\\lfloor x \\rfloor = n$."
                },
                {
                  "step": "$-5n - 8 = 6\\{x\\}$",
                  "reason": "Adding the same number to both sides: $-6n - 8$ is added to both sides."
                },
                {
                  "step": "$\\{x\\} = \\dfrac{-5n - 8}{6}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$, and the equation is read from right to left."
                },
                {
                  "step": "$0 \\le \\dfrac{-5n - 8}{6} < 1$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: here $\\{x\\} = \\dfrac{-5n - 8}{6}$."
                },
                {
                  "step": "$0 \\le -5n - 8 < 6$",
                  "reason": "Solving a chain: each part is multiplied by $6$, a positive number, so the signs stay."
                },
                {
                  "step": "$8 \\le -5n < 14$",
                  "reason": "Solving a chain: $8$ is added to each of the three parts."
                },
                {
                  "step": "$-\\dfrac{14}{5} < n \\le -\\dfrac{8}{5}$",
                  "reason": "Solving a chain: each part is divided by $-5$, a negative number, which reverses the signs."
                },
                {
                  "step": "$n = -2$",
                  "reason": "Strict and nonstrict inequality: the interval keeps its right end and leaves out its left end, and $-2$ is the one integer in it."
                },
                {
                  "step": "$\\{x\\} = \\dfrac{1}{3}$",
                  "reason": "Substituting a value: $n = -2$ goes into the equation of line 5."
                },
                {
                  "step": "$x = -\\dfrac{5}{3}$",
                  "reason": "The general addition formula, from arithmetic: $x = n + \\{x\\} = -2 + \\dfrac{1}{3}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t173-k3",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\lfloor \\sqrt{50} \\rfloor + \\lfloor \\sqrt{51} \\rfloor + \\dots + \\lfloor \\sqrt{84} \\rfloor$.",
            "lines": [
              {
                "step": "Evaluate $\\lfloor \\sqrt{50} \\rfloor + \\lfloor \\sqrt{51} \\rfloor + \\dots + \\lfloor \\sqrt{84} \\rfloor$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $7^2 \\le 50$ and $63 < 8^2$, so each of the first $14$ terms is $7$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$ and powers and roots of positive numbers keep the order: $\\sqrt{k}$ lies between $7$ and $8$ for $k$ from $50$ to $63$."
              },
              {
                "step": "From $64 = 8^2$ to $80$ each term is $8$: $17$ terms",
                "reason": "Consecutive squares differ by $2n + 1$, with $n = 8$: $9^2 - 8^2 = 17$."
              },
              {
                "step": "From $81 = 9^2$ to $84$ each term is $9$: $4$ terms",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $\\sqrt{k}$ lies between $9$ and $10$, and $84 < 10^2$."
              },
              {
                "step": "$14 \\cdot 7 + 17 \\cdot 8 + 4 \\cdot 9 = 270$",
                "reason": "Order of operations, from arithmetic: the three groups are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\lfloor \\sqrt{42} \\rfloor + \\lfloor \\sqrt{43} \\rfloor + \\dots + \\lfloor \\sqrt{78} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "267",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor \\sqrt{42} \\rfloor + \\lfloor \\sqrt{43} \\rfloor + \\dots + \\lfloor \\sqrt{78} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $6^2 \\le 42$ and $48 < 7^2$, so each of the first $7$ terms is $6$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$ and powers and roots of positive numbers keep the order: $\\sqrt{k}$ lies between $6$ and $7$ for $k$ from $42$ to $48$."
                },
                {
                  "step": "From $49 = 7^2$ to $63$ each term is $7$: $15$ terms",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 7$: $8^2 - 7^2 = 15$."
                },
                {
                  "step": "From $64 = 8^2$ to $78$ each term is $8$: $15$ terms",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $\\sqrt{k}$ lies between $8$ and $9$, and $78 < 9^2$."
                },
                {
                  "step": "$7 \\cdot 6 + 15 \\cdot 7 + 15 \\cdot 8 = 267$",
                  "reason": "Order of operations, from arithmetic: the three groups are added."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lfloor \\sqrt{62} \\rfloor + \\lfloor \\sqrt{63} \\rfloor + \\dots + \\lfloor \\sqrt{94} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "276",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor \\sqrt{62} \\rfloor + \\lfloor \\sqrt{63} \\rfloor + \\dots + \\lfloor \\sqrt{94} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $7^2 \\le 62$ and $63 < 8^2$, so each of the first $2$ terms is $7$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$ and powers and roots of positive numbers keep the order: $\\sqrt{k}$ lies between $7$ and $8$ for $k$ from $62$ to $63$."
                },
                {
                  "step": "From $64 = 8^2$ to $80$ each term is $8$: $17$ terms",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 8$: $9^2 - 8^2 = 17$."
                },
                {
                  "step": "From $81 = 9^2$ to $94$ each term is $9$: $14$ terms",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $\\sqrt{k}$ lies between $9$ and $10$, and $94 < 10^2$."
                },
                {
                  "step": "$2 \\cdot 7 + 17 \\cdot 8 + 14 \\cdot 9 = 276$",
                  "reason": "Order of operations, from arithmetic: the three groups are added."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lfloor \\sqrt{59} \\rfloor + \\lfloor \\sqrt{60} \\rfloor + \\dots + \\lfloor \\sqrt{85} \\rfloor$.",
              "form": "Answer as an integer.",
              "answer": "216",
              "lines": [
                {
                  "step": "Evaluate $\\lfloor \\sqrt{59} \\rfloor + \\lfloor \\sqrt{60} \\rfloor + \\dots + \\lfloor \\sqrt{85} \\rfloor$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $7^2 \\le 59$ and $63 < 8^2$, so each of the first $5$ terms is $7$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$ and powers and roots of positive numbers keep the order: $\\sqrt{k}$ lies between $7$ and $8$ for $k$ from $59$ to $63$."
                },
                {
                  "step": "From $64 = 8^2$ to $80$ each term is $8$: $17$ terms",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 8$: $9^2 - 8^2 = 17$."
                },
                {
                  "step": "From $81 = 9^2$ to $85$ each term is $9$: $5$ terms",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $\\sqrt{k}$ lies between $9$ and $10$, and $85 < 10^2$."
                },
                {
                  "step": "$5 \\cdot 7 + 17 \\cdot 8 + 5 \\cdot 9 = 216$",
                  "reason": "Order of operations, from arithmetic: the three groups are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\lceil \\sqrt{74} \\rceil + \\lceil \\sqrt{75} \\rceil + \\dots + \\lceil \\sqrt{108} \\rceil$.",
            "lines": [
              {
                "step": "Evaluate $\\lceil \\sqrt{74} \\rceil + \\lceil \\sqrt{75} \\rceil + \\dots + \\lceil \\sqrt{108} \\rceil$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $8^2 < 74$ and $81 = 9^2$, so each of the first $8$ terms is $9$",
                "reason": "Ceiling and powers and roots of positive numbers keep the order: $\\sqrt{k}$ lies above $8$ and not above $9$ for $k$ from $74$ to $81$."
              },
              {
                "step": "From $82$ to $100 = 10^2$ each term is $10$: $19$ terms",
                "reason": "Consecutive squares differ by $2n + 1$, with $n = 9$: $10^2 - 9^2 = 19$."
              },
              {
                "step": "From $101$ to $108$ each term is $11$: $8$ terms",
                "reason": "Ceiling: $\\sqrt{k}$ lies above $10$ and not above $11$, since $108 \\le 11^2$."
              },
              {
                "step": "$8 \\cdot 9 + 19 \\cdot 10 + 8 \\cdot 11 = 350$",
                "reason": "Order of operations, from arithmetic: the three groups are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\lceil \\sqrt{32} \\rceil + \\lceil \\sqrt{33} \\rceil + \\dots + \\lceil \\sqrt{55} \\rceil$.",
              "form": "Answer as an integer.",
              "answer": "169",
              "lines": [
                {
                  "step": "Evaluate $\\lceil \\sqrt{32} \\rceil + \\lceil \\sqrt{33} \\rceil + \\dots + \\lceil \\sqrt{55} \\rceil$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $5^2 < 32$ and $36 = 6^2$, so each of the first $5$ terms is $6$",
                  "reason": "Ceiling and powers and roots of positive numbers keep the order: $\\sqrt{k}$ lies above $5$ and not above $6$ for $k$ from $32$ to $36$."
                },
                {
                  "step": "From $37$ to $49 = 7^2$ each term is $7$: $13$ terms",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 6$: $7^2 - 6^2 = 13$."
                },
                {
                  "step": "From $50$ to $55$ each term is $8$: $6$ terms",
                  "reason": "Ceiling: $\\sqrt{k}$ lies above $7$ and not above $8$, since $55 \\le 8^2$."
                },
                {
                  "step": "$5 \\cdot 6 + 13 \\cdot 7 + 6 \\cdot 8 = 169$",
                  "reason": "Order of operations, from arithmetic: the three groups are added."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lceil \\sqrt{7} \\rceil + \\lceil \\sqrt{8} \\rceil + \\dots + \\lceil \\sqrt{22} \\rceil$.",
              "form": "Answer as an integer.",
              "answer": "67",
              "lines": [
                {
                  "step": "Evaluate $\\lceil \\sqrt{7} \\rceil + \\lceil \\sqrt{8} \\rceil + \\dots + \\lceil \\sqrt{22} \\rceil$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $2^2 < 7$ and $9 = 3^2$, so each of the first $3$ terms is $3$",
                  "reason": "Ceiling and powers and roots of positive numbers keep the order: $\\sqrt{k}$ lies above $2$ and not above $3$ for $k$ from $7$ to $9$."
                },
                {
                  "step": "From $10$ to $16 = 4^2$ each term is $4$: $7$ terms",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 3$: $4^2 - 3^2 = 7$."
                },
                {
                  "step": "From $17$ to $22$ each term is $5$: $6$ terms",
                  "reason": "Ceiling: $\\sqrt{k}$ lies above $4$ and not above $5$, since $22 \\le 5^2$."
                },
                {
                  "step": "$3 \\cdot 3 + 7 \\cdot 4 + 6 \\cdot 5 = 67$",
                  "reason": "Order of operations, from arithmetic: the three groups are added."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\lceil \\sqrt{24} \\rceil + \\lceil \\sqrt{25} \\rceil + \\dots + \\lceil \\sqrt{46} \\rceil$.",
              "form": "Answer as an integer.",
              "answer": "146",
              "lines": [
                {
                  "step": "Evaluate $\\lceil \\sqrt{24} \\rceil + \\lceil \\sqrt{25} \\rceil + \\dots + \\lceil \\sqrt{46} \\rceil$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $4^2 < 24$ and $25 = 5^2$, so each of the first $2$ terms is $5$",
                  "reason": "Ceiling and powers and roots of positive numbers keep the order: $\\sqrt{k}$ lies above $4$ and not above $5$ for $k$ from $24$ to $25$."
                },
                {
                  "step": "From $26$ to $36 = 6^2$ each term is $6$: $11$ terms",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 5$: $6^2 - 5^2 = 11$."
                },
                {
                  "step": "From $37$ to $46$ each term is $7$: $10$ terms",
                  "reason": "Ceiling: $\\sqrt{k}$ lies above $6$ and not above $7$, since $46 \\le 7^2$."
                },
                {
                  "step": "$2 \\cdot 5 + 11 \\cdot 6 + 10 \\cdot 7 = 146$",
                  "reason": "Order of operations, from arithmetic: the three groups are added."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t173-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $\\lfloor -x\\rfloor = -\\lceil x\\rceil$ for every real number $x$.",
            "lines": [
              {
                "step": "Decide whether $\\lfloor -x\\rfloor = -\\lceil x\\rceil$ for every real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $n = \\lceil x\\rceil$; then $n - 1 < x \\le n$.",
                "reason": "Ceiling: $n$ is the least integer not below $x$, so the smaller integer $n - 1$ lies below $x$."
              },
              {
                "step": "$-n \\le -x < -n + 1$",
                "reason": "Multiplying by a negative number reverses the sign: each part is multiplied by $-1$."
              },
              {
                "step": "Since $\\lfloor -x\\rfloor = -n = -\\lceil x\\rceil$, the answer is Yes.",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the integer is $-n$ and the number is $-x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\{2x\\} = 2\\{x\\}$ for every real number $x$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $\\{2x\\} = 2\\{x\\}$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = \\dfrac{5}{8}$: $\\{2x\\} = \\{\\dfrac{5}{4}\\} = \\dfrac{1}{4}$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $\\dfrac{5}{4} = 1 + \\dfrac{1}{4}$, and $1$ is its floor."
                },
                {
                  "step": "Also $2\\{x\\} = 2 \\cdot \\dfrac{5}{8} = \\dfrac{5}{4}$",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $0 \\le \\dfrac{5}{8} < 1$, so the floor of $\\dfrac{5}{8}$ is $0$."
                },
                {
                  "step": "Since $\\dfrac{1}{4} \\ne \\dfrac{5}{4}$, the answer is No.",
                  "reason": "Disproof by counterexample: one value where the two sides fail the claim is enough."
                }
              ]
            },
            {
              "prompt": "Decide whether $\\lfloor \\lceil x\\rceil - x\\rfloor = 0$ for every real number $x$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $\\lfloor \\lceil x\\rceil - x\\rfloor = 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n = \\lceil x\\rceil$; then $x \\le n < x + 1$.",
                  "reason": "Ceiling: $n$ is not below $x$, and the smaller integer $n - 1$ lies below $x$."
                },
                {
                  "step": "$0 \\le n - x < 1$",
                  "reason": "Adding the same number, from arithmetic: $-x$ is added to each part."
                },
                {
                  "step": "Since $\\lfloor \\lceil x\\rceil - x\\rfloor = 0$, the answer is Yes.",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the integer is $0$ and the number is $n - x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $\\lfloor 5x\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor$ for every real number $x$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $\\lfloor 5x\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = \\dfrac{2}{5}$: $\\lfloor 5x\\rfloor = \\lfloor 2\\rfloor = 2$",
                  "reason": "Floor: $2$ is an integer, so it is its own floor."
                },
                {
                  "step": "Also $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor = \\lfloor \\dfrac{4}{5}\\rfloor + \\lfloor \\dfrac{6}{5}\\rfloor = 0 + 1 = 1$",
                  "reason": "To find a floor, find the two consecutive whole numbers around the number: $0 < \\dfrac{4}{5} < 1$ and $1 < \\dfrac{6}{5} < 2$."
                },
                {
                  "step": "Since $2 \\ne 1$, the answer is No.",
                  "reason": "Disproof by counterexample: one value where the two sides fail the claim is enough."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t173-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\lfloor -\\dfrac{16}{11} \\rfloor - \\lceil -\\dfrac{52}{9} \\rceil$, and write that line right.",
            "given": [
              "$-\\dfrac{16}{11} = -1 + \\dfrac{5}{11}$",
              "$-1 < -\\dfrac{16}{11} < 0$",
              "$\\lfloor -\\dfrac{16}{11} \\rfloor = -1$",
              "$-\\dfrac{52}{9} = -6 + \\dfrac{2}{9}$",
              "$-6 < -\\dfrac{52}{9} < -5$",
              "$\\lceil -\\dfrac{52}{9} \\rceil = -5$",
              "$-1 - (-5) = 4$",
              "$\\lfloor -\\dfrac{16}{11} \\rfloor - \\lceil -\\dfrac{52}{9} \\rceil = 4$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $\\lfloor -\\dfrac{16}{11} \\rfloor - \\lceil -\\dfrac{52}{9} \\rceil$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 writes $-\\dfrac{16}{11}$ as $-1 + \\dfrac{5}{11}$, but $-1 + \\dfrac{5}{11} = -\\dfrac{6}{11}$: the minus sign of the part after the whole number is lost.",
                "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $-\\dfrac{16}{11} = -1 - \\dfrac{5}{11}$, and the part added to the floor lies between $0$ and $1$, so it is $-2 + \\dfrac{6}{11}$."
              },
              {
                "step": "Line 1 written right: $-\\dfrac{16}{11} = -2 + \\dfrac{6}{11}$.",
                "reason": "The later lines follow from the wrong line, so they change with it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\lfloor -\\dfrac{9}{8} \\rfloor - \\lceil -\\dfrac{56}{11} \\rceil$, and write that line right.",
              "given": [
                "$-\\dfrac{9}{8} = -2 + \\dfrac{7}{8}$",
                "$-2 < -\\dfrac{9}{8} < -1$",
                "$\\lfloor -\\dfrac{9}{8} \\rfloor = -2$",
                "$-\\dfrac{56}{11} = -5 + \\dfrac{1}{11}$",
                "$-5 < -\\dfrac{56}{11} < -4$",
                "$\\lceil -\\dfrac{56}{11} \\rceil = -4$",
                "$-2 - (-4) = 2$",
                "$\\lfloor -\\dfrac{9}{8} \\rfloor - \\lceil -\\dfrac{56}{11} \\rceil = 2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -56/11 = -6+10/11",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\lfloor -\\dfrac{9}{8} \\rfloor - \\lceil -\\dfrac{56}{11} \\rceil$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $-\\dfrac{56}{11}$ as $-5 + \\dfrac{1}{11}$, but $-5 + \\dfrac{1}{11} = -\\dfrac{54}{11}$: the minus sign of the part after the whole number is lost.",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $-\\dfrac{56}{11} = -5 - \\dfrac{1}{11}$, and the part added to the floor lies between $0$ and $1$, so it is $-6 + \\dfrac{10}{11}$."
                },
                {
                  "step": "Line 4 written right: $-\\dfrac{56}{11} = -6 + \\dfrac{10}{11}$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\lfloor -\\dfrac{53}{9} \\rfloor - \\lceil -\\dfrac{62}{11} \\rceil$, and write that line right.",
              "given": [
                "$-\\dfrac{53}{9} = -6 + \\dfrac{1}{9}$",
                "$-6 < -\\dfrac{53}{9} < -5$",
                "$\\lfloor -\\dfrac{53}{9} \\rfloor = -6$",
                "$-\\dfrac{62}{11} = -6 + \\dfrac{4}{11}$",
                "$-6 < -\\dfrac{62}{11} < -5$",
                "$\\lceil -\\dfrac{62}{11} \\rceil = -5$",
                "$-6 - (-5) = -11$",
                "$\\lfloor -\\dfrac{53}{9} \\rfloor - \\lceil -\\dfrac{62}{11} \\rceil = -11$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: -6-(-5) = -1",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\lfloor -\\dfrac{53}{9} \\rfloor - \\lceil -\\dfrac{62}{11} \\rceil$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 takes $5$ away, but the bracket holds $-5$, so its minus sign is lost.",
                  "reason": "The addition and subtraction of integers, from arithmetic: taking away $-5$ is adding $5$, so $-6 - (-5) = -6 + 5 = -1$."
                },
                {
                  "step": "Line 7 written right: $-6 - (-5) = -1$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\lfloor -\\dfrac{35}{8} \\rfloor - \\lceil -\\dfrac{43}{14} \\rceil$, and write that line right.",
              "given": [
                "$-\\dfrac{35}{8} = -5 + \\dfrac{5}{8}$",
                "$-5 < -\\dfrac{35}{8} < -4$",
                "$\\lfloor -\\dfrac{35}{8} \\rfloor = -5$",
                "$-\\dfrac{43}{14} = -3 + \\dfrac{1}{14}$",
                "$-3 < -\\dfrac{43}{14} < -2$",
                "$\\lceil -\\dfrac{43}{14} \\rceil = -2$",
                "$-5 - (-2) = -3$",
                "$\\lfloor -\\dfrac{35}{8} \\rfloor - \\lceil -\\dfrac{43}{14} \\rceil = -3$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -43/14 = -4+13/14",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\lfloor -\\dfrac{35}{8} \\rfloor - \\lceil -\\dfrac{43}{14} \\rceil$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $-\\dfrac{43}{14}$ as $-3 + \\dfrac{1}{14}$, but $-3 + \\dfrac{1}{14} = -\\dfrac{41}{14}$: the minus sign of the part after the whole number is lost.",
                  "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: $-\\dfrac{43}{14} = -3 - \\dfrac{1}{14}$, and the part added to the floor lies between $0$ and $1$, so it is $-4 + \\dfrac{13}{14}$."
                },
                {
                  "step": "Line 4 written right: $-\\dfrac{43}{14} = -4 + \\dfrac{13}{14}$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t173-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = 2\\lfloor \\dfrac{x + 3}{3} \\rfloor - 2$ for $-6 \\le x < 6$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = 2\\lfloor \\dfrac{x + 3}{3} \\rfloor - 2$ for $-6 \\le x < 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $-3 \\le x < 0$: $\\lfloor \\dfrac{x + 3}{3} \\rfloor = 0$, so $y = -2$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $0 \\le \\dfrac{x + 3}{3} < 1$ here."
              },
              {
                "step": "Each step is $3$ wide, and $y$ goes up $2$ from one step to the next",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the value of $\\lfloor \\dfrac{x + 3}{3} \\rfloor$ changes by $1$ each time $\\dfrac{x + 3}{3}$ passes an integer."
              },
              {
                "step": "Each step starts with a filled dot where $x = -3 + 3n$ and ends with an open circle at the next such $x$",
                "reason": "Floor: there the number $\\dfrac{x + 3}{3}$ is the integer $n$, its own floor."
              },
              {
                "step": "The graph meets the $y$-axis at $(0, 0)$",
                "reason": "Definition of the $y$-intercept: at $x = 0$ the floor is that of $1$, which is $1$, so $y = 0$."
              },
              {
                "step": "The graph lies on the $x$-axis for $0 \\le x < 3$",
                "reason": "Definition of the $x$-intercept: $y = 0$ on the step where $\\lfloor \\dfrac{x + 3}{3} \\rfloor = 1$.",
                "figure": {
                  "file": "floor-and-ceiling-1.svg",
                  "alt": "Steps: y = −4 from x = −6 to −3; y = −2 from x = −3 to 0; y = 0 from x = 0 to 3; y = 2 from x = 3 to 6; filled dot at the left end of each step, open circle at the right end."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = 3\\lfloor \\dfrac{x + 2}{2} \\rfloor + 4$ for $-6 \\le x < 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 7)$"
                ],
                "turning": [
                  "Step $y = -2$: filled dot at $(-6, -2)$, open circle at $(-4, -2)$",
                  "Step $y = 1$: filled dot at $(-4, 1)$, open circle at $(-2, 1)$",
                  "Step $y = 4$: filled dot at $(-2, 4)$, open circle at $(0, 4)$",
                  "Step $y = 7$: filled dot at $(0, 7)$, open circle at $(2, 7)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 3\\lfloor \\dfrac{x + 2}{2} \\rfloor + 4$ for $-6 \\le x < 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $-2 \\le x < 0$: $\\lfloor \\dfrac{x + 2}{2} \\rfloor = 0$, so $y = 4$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $0 \\le \\dfrac{x + 2}{2} < 1$ here."
                },
                {
                  "step": "Each step is $2$ wide, and $y$ goes up $3$ from one step to the next",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the value of $\\lfloor \\dfrac{x + 2}{2} \\rfloor$ changes by $1$ each time $\\dfrac{x + 2}{2}$ passes an integer."
                },
                {
                  "step": "Each step starts with a filled dot where $x = -2 + 2n$ and ends with an open circle at the next such $x$",
                  "reason": "Floor: there the number $\\dfrac{x + 2}{2}$ is the integer $n$, its own floor."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 7)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ the floor is that of $1$, which is $1$, so $y = 7$."
                },
                {
                  "step": "The graph does not meet the $x$-axis",
                  "reason": "Definition of the $x$-intercept: the steps have the heights $-2$, $1$, $4$, $7$, and none is $0$.",
                  "figure": {
                    "file": "floor-and-ceiling-2.svg",
                    "alt": "Steps: y = −2 from x = −6 to −4; y = 1 from x = −4 to −2; y = 4 from x = −2 to 0; y = 7 from x = 0 to 2; filled dot at the left end of each step, open circle at the right end."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -2\\lfloor \\dfrac{x - 1}{2} \\rfloor + 3$ for $-3 \\le x < 5$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 5)$"
                ],
                "turning": [
                  "Step $y = 7$: filled dot at $(-3, 7)$, open circle at $(-1, 7)$",
                  "Step $y = 5$: filled dot at $(-1, 5)$, open circle at $(1, 5)$",
                  "Step $y = 3$: filled dot at $(1, 3)$, open circle at $(3, 3)$",
                  "Step $y = 1$: filled dot at $(3, 1)$, open circle at $(5, 1)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -2\\lfloor \\dfrac{x - 1}{2} \\rfloor + 3$ for $-3 \\le x < 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $1 \\le x < 3$: $\\lfloor \\dfrac{x - 1}{2} \\rfloor = 0$, so $y = 3$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $0 \\le \\dfrac{x - 1}{2} < 1$ here."
                },
                {
                  "step": "Each step is $2$ wide, and $y$ goes down $2$ from one step to the next",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the value of $\\lfloor \\dfrac{x - 1}{2} \\rfloor$ changes by $1$ each time $\\dfrac{x - 1}{2}$ passes an integer."
                },
                {
                  "step": "Each step starts with a filled dot where $x = 1 + 2n$ and ends with an open circle at the next such $x$",
                  "reason": "Floor: there the number $\\dfrac{x - 1}{2}$ is the integer $n$, its own floor."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 5)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ the floor is that of $-\\dfrac{1}{2}$, which is $-1$, so $y = 5$."
                },
                {
                  "step": "The graph does not meet the $x$-axis",
                  "reason": "Definition of the $x$-intercept: the steps have the heights $7$, $5$, $3$, $1$, and none is $0$.",
                  "figure": {
                    "file": "floor-and-ceiling-3.svg",
                    "alt": "Steps: y = 7 from x = −3 to −1; y = 5 from x = −1 to 1; y = 3 from x = 1 to 3; y = 1 from x = 3 to 5; filled dot at the left end of each step, open circle at the right end."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\lfloor \\dfrac{x - 2}{3} \\rfloor - 2$ for $-1 \\le x < 11$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -3)$",
                  "on the $x$-axis: $8 \\le x < 11$"
                ],
                "turning": [
                  "Step $y = -3$: filled dot at $(-1, -3)$, open circle at $(2, -3)$",
                  "Step $y = -2$: filled dot at $(2, -2)$, open circle at $(5, -2)$",
                  "Step $y = -1$: filled dot at $(5, -1)$, open circle at $(8, -1)$",
                  "Step $y = 0$: filled dot at $(8, 0)$, open circle at $(11, 0)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\lfloor \\dfrac{x - 2}{3} \\rfloor - 2$ for $-1 \\le x < 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $2 \\le x < 5$: $\\lfloor \\dfrac{x - 2}{3} \\rfloor = 0$, so $y = -2$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $0 \\le \\dfrac{x - 2}{3} < 1$ here."
                },
                {
                  "step": "Each step is $3$ wide, and $y$ goes up $1$ from one step to the next",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the value of $\\lfloor \\dfrac{x - 2}{3} \\rfloor$ changes by $1$ each time $\\dfrac{x - 2}{3}$ passes an integer."
                },
                {
                  "step": "Each step starts with a filled dot where $x = 2 + 3n$ and ends with an open circle at the next such $x$",
                  "reason": "Floor: there the number $\\dfrac{x - 2}{3}$ is the integer $n$, its own floor."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, -3)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ the floor is that of $-\\dfrac{2}{3}$, which is $-1$, so $y = -3$."
                },
                {
                  "step": "The graph lies on the $x$-axis for $8 \\le x < 11$",
                  "reason": "Definition of the $x$-intercept: $y = 0$ on the step where $\\lfloor \\dfrac{x - 2}{3} \\rfloor = 2$.",
                  "figure": {
                    "file": "floor-and-ceiling-4.svg",
                    "alt": "Steps: y = −3 from x = −1 to 2; y = −2 from x = 2 to 5; y = −1 from x = 5 to 8; y = 0 from x = 8 to 11; filled dot at the left end of each step, open circle at the right end."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = \\lceil \\dfrac{x + 1}{2} \\rceil - 2$ for $-5 < x \\le 3$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\lceil \\dfrac{x + 1}{2} \\rceil - 2$ for $-5 < x \\le 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $-3 < x \\le -1$: $\\lceil \\dfrac{x + 1}{2} \\rceil = 0$, so $y = -2$",
                "reason": "Ceiling: $-1 < \\dfrac{x + 1}{2} \\le 0$ here, and the least integer not below it is $0$."
              },
              {
                "step": "Each step is $2$ wide, and $y$ goes up $1$ from one step to the next",
                "reason": "Ceiling: the value of $\\lceil \\dfrac{x + 1}{2} \\rceil$ changes by $1$ each time $\\dfrac{x + 1}{2}$ passes an integer."
              },
              {
                "step": "Each step starts with an open circle where $x = -1 + 2n$ and ends with a filled dot at the next such $x$",
                "reason": "Ceiling: there the number $\\dfrac{x + 1}{2}$ is the integer $n$, its own ceiling."
              },
              {
                "step": "The graph meets the $y$-axis at $(0, -1)$",
                "reason": "Definition of the $y$-intercept: at $x = 0$ the ceiling is that of $\\dfrac{1}{2}$, which is $1$, so $y = -1$."
              },
              {
                "step": "The graph lies on the $x$-axis for $1 < x \\le 3$",
                "reason": "Definition of the $x$-intercept: $y = 0$ on the step where $\\lceil \\dfrac{x + 1}{2} \\rceil = 2$.",
                "figure": {
                  "file": "floor-and-ceiling-5.svg",
                  "alt": "Steps: y = −3 from x = −5 to −3; y = −2 from x = −3 to −1; y = −1 from x = −1 to 1; y = 0 from x = 1 to 3; open circle at the left end of each step, filled dot at the right end."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = 3\\lceil \\dfrac{x + 3}{3} \\rceil - 2$ for $-9 < x \\le 3$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 1)$"
                ],
                "turning": [
                  "Step $y = -5$: open circle at $(-9, -5)$, filled dot at $(-6, -5)$",
                  "Step $y = -2$: open circle at $(-6, -2)$, filled dot at $(-3, -2)$",
                  "Step $y = 1$: open circle at $(-3, 1)$, filled dot at $(0, 1)$",
                  "Step $y = 4$: open circle at $(0, 4)$, filled dot at $(3, 4)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 3\\lceil \\dfrac{x + 3}{3} \\rceil - 2$ for $-9 < x \\le 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $-6 < x \\le -3$: $\\lceil \\dfrac{x + 3}{3} \\rceil = 0$, so $y = -2$",
                  "reason": "Ceiling: $-1 < \\dfrac{x + 3}{3} \\le 0$ here, and the least integer not below it is $0$."
                },
                {
                  "step": "Each step is $3$ wide, and $y$ goes up $3$ from one step to the next",
                  "reason": "Ceiling: the value of $\\lceil \\dfrac{x + 3}{3} \\rceil$ changes by $1$ each time $\\dfrac{x + 3}{3}$ passes an integer."
                },
                {
                  "step": "Each step starts with an open circle where $x = -3 + 3n$ and ends with a filled dot at the next such $x$",
                  "reason": "Ceiling: there the number $\\dfrac{x + 3}{3}$ is the integer $n$, its own ceiling."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 1)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ the ceiling is that of $1$, which is $1$, so $y = 1$."
                },
                {
                  "step": "The graph does not meet the $x$-axis",
                  "reason": "Definition of the $x$-intercept: the steps have the heights $-5$, $-2$, $1$, $4$, and none is $0$.",
                  "figure": {
                    "file": "floor-and-ceiling-6.svg",
                    "alt": "Steps: y = −5 from x = −9 to −6; y = −2 from x = −6 to −3; y = 1 from x = −3 to 0; y = 4 from x = 0 to 3; open circle at the left end of each step, filled dot at the right end."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 2\\lceil \\dfrac{x + 3}{2} \\rceil - 2$ for $-7 < x \\le 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 2)$",
                  "on the $x$-axis: $-3 < x \\le -1$"
                ],
                "turning": [
                  "Step $y = -4$: open circle at $(-7, -4)$, filled dot at $(-5, -4)$",
                  "Step $y = -2$: open circle at $(-5, -2)$, filled dot at $(-3, -2)$",
                  "Step $y = 0$: open circle at $(-3, 0)$, filled dot at $(-1, 0)$",
                  "Step $y = 2$: open circle at $(-1, 2)$, filled dot at $(1, 2)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 2\\lceil \\dfrac{x + 3}{2} \\rceil - 2$ for $-7 < x \\le 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $-5 < x \\le -3$: $\\lceil \\dfrac{x + 3}{2} \\rceil = 0$, so $y = -2$",
                  "reason": "Ceiling: $-1 < \\dfrac{x + 3}{2} \\le 0$ here, and the least integer not below it is $0$."
                },
                {
                  "step": "Each step is $2$ wide, and $y$ goes up $2$ from one step to the next",
                  "reason": "Ceiling: the value of $\\lceil \\dfrac{x + 3}{2} \\rceil$ changes by $1$ each time $\\dfrac{x + 3}{2}$ passes an integer."
                },
                {
                  "step": "Each step starts with an open circle where $x = -3 + 2n$ and ends with a filled dot at the next such $x$",
                  "reason": "Ceiling: there the number $\\dfrac{x + 3}{2}$ is the integer $n$, its own ceiling."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 2)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ the ceiling is that of $\\dfrac{3}{2}$, which is $2$, so $y = 2$."
                },
                {
                  "step": "The graph lies on the $x$-axis for $-3 < x \\le -1$",
                  "reason": "Definition of the $x$-intercept: $y = 0$ on the step where $\\lceil \\dfrac{x + 3}{2} \\rceil = 1$.",
                  "figure": {
                    "file": "floor-and-ceiling-7.svg",
                    "alt": "Steps: y = −4 from x = −7 to −5; y = −2 from x = −5 to −3; y = 0 from x = −3 to −1; y = 2 from x = −1 to 1; open circle at the left end of each step, filled dot at the right end."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 2\\lceil \\dfrac{x + 2}{3} \\rceil - 4$ for $-8 < x \\le 7$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -2)$",
                  "on the $x$-axis: $1 < x \\le 4$"
                ],
                "turning": [
                  "Step $y = -6$: open circle at $(-8, -6)$, filled dot at $(-5, -6)$",
                  "Step $y = -4$: open circle at $(-5, -4)$, filled dot at $(-2, -4)$",
                  "Step $y = -2$: open circle at $(-2, -2)$, filled dot at $(1, -2)$",
                  "Step $y = 0$: open circle at $(1, 0)$, filled dot at $(4, 0)$",
                  "Step $y = 2$: open circle at $(4, 2)$, filled dot at $(7, 2)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 2\\lceil \\dfrac{x + 2}{3} \\rceil - 4$ for $-8 < x \\le 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $-5 < x \\le -2$: $\\lceil \\dfrac{x + 2}{3} \\rceil = 0$, so $y = -4$",
                  "reason": "Ceiling: $-1 < \\dfrac{x + 2}{3} \\le 0$ here, and the least integer not below it is $0$."
                },
                {
                  "step": "Each step is $3$ wide, and $y$ goes up $2$ from one step to the next",
                  "reason": "Ceiling: the value of $\\lceil \\dfrac{x + 2}{3} \\rceil$ changes by $1$ each time $\\dfrac{x + 2}{3}$ passes an integer."
                },
                {
                  "step": "Each step starts with an open circle where $x = -2 + 3n$ and ends with a filled dot at the next such $x$",
                  "reason": "Ceiling: there the number $\\dfrac{x + 2}{3}$ is the integer $n$, its own ceiling."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, -2)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ the ceiling is that of $\\dfrac{2}{3}$, which is $1$, so $y = -2$."
                },
                {
                  "step": "The graph lies on the $x$-axis for $1 < x \\le 4$",
                  "reason": "Definition of the $x$-intercept: $y = 0$ on the step where $\\lceil \\dfrac{x + 2}{3} \\rceil = 2$.",
                  "figure": {
                    "file": "floor-and-ceiling-8.svg",
                    "alt": "Steps: y = −6 from x = −8 to −5; y = −4 from x = −5 to −2; y = −2 from x = −2 to 1; y = 0 from x = 1 to 4; y = 2 from x = 4 to 7; open circle at the left end of each step, filled dot at the right end."
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
      "id": "t173-p1",
      "method": "direct proof",
      "statement": "For a real number $x$, $\\lceil x\\rceil = \\lfloor x\\rfloor$ exactly when $x$ is an integer.",
      "idea": "An integer is its own floor and its own ceiling; and when the two agree, $x$ is squeezed between one integer and itself.",
      "lines": [
        {
          "line": "Suppose first that $x$ is an integer.",
          "reason": "The first half of the statement starts from an integer $x$."
        },
        {
          "line": "Then $\\lfloor x\\rfloor = x$.",
          "reason": "Floor: $x$ is an integer not above $x$, and every larger integer is above $x$."
        },
        {
          "line": "Also $\\lceil x\\rceil = x$.",
          "reason": "Ceiling: $x$ is an integer not below $x$, and every smaller integer is below $x$."
        },
        {
          "line": "So $\\lceil x\\rceil = \\lfloor x\\rfloor$.",
          "reason": "Transitive property: lines 2 and 3."
        },
        {
          "line": "Suppose now that $\\lceil x\\rceil = \\lfloor x\\rfloor$, and call this integer $n$.",
          "reason": "The second half of the statement starts here."
        },
        {
          "line": "Then $n \\le x$.",
          "reason": "Floor: $n = \\lfloor x\\rfloor$ is not above $x$."
        },
        {
          "line": "Also $x \\le n$.",
          "reason": "Ceiling: $n = \\lceil x\\rceil$ is not below $x$."
        },
        {
          "line": "So $x = n$, and $x$ is an integer.",
          "reason": "Strict and nonstrict inequality: $x \\le n$ means $x < n$ or $x = n$, and $x < n$ would contradict line 6."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t173-s1",
      "method": "direct proof",
      "statement": "Prove that $\\lfloor x + n\\rfloor = \\lfloor x\\rfloor + n$ for every real number $x$ and every integer $n$. Facts it may use: the floor is the greatest integer not above the number; $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$; adding the same number; the sum of two integers is an integer.",
      "check": {
        "proof": [
          {
            "line": "Let $m = \\lfloor x\\rfloor$.",
            "reason": "Floor: $m$ is an integer."
          },
          {
            "line": "Then $m \\le x < m + 1$.",
            "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$."
          },
          {
            "line": "So $m + n \\le x + n < m + n + 1$.",
            "reason": "Adding the same number, from arithmetic: $n$ is added to each part."
          },
          {
            "line": "And $m + n$ is an integer.",
            "reason": "The addition of integers, from arithmetic."
          },
          {
            "line": "So $\\lfloor x + n\\rfloor = m + n$.",
            "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the integer is $m + n$ and the number is $x + n$."
          },
          {
            "line": "Therefore $\\lfloor x + n\\rfloor = \\lfloor x\\rfloor + n$.",
            "reason": "Substituting a value: $m$ is $\\lfloor x\\rfloor$."
          }
        ]
      }
    },
    {
      "id": "t173-s2",
      "method": "direct proof",
      "statement": "Prove that $\\{x + n\\} = \\{x\\}$ for every real number $x$ and every integer $n$. Facts it may use: $\\{x\\} = x - \\lfloor x\\rfloor$; $\\lfloor x + n\\rfloor = \\lfloor x\\rfloor + n$ for an integer $n$; subtracting a bracket changes every sign in it.",
      "check": {
        "proof": [
          {
            "line": "First, $\\{x + n\\} = x + n - \\lfloor x + n\\rfloor$.",
            "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$: with $x + n$ in place of $x$."
          },
          {
            "line": "Then $\\{x + n\\} = x + n - (\\lfloor x\\rfloor + n)$.",
            "reason": "Floor of a number plus an integer."
          },
          {
            "line": "So $\\{x + n\\} = x - \\lfloor x\\rfloor$.",
            "reason": "Subtracting a bracket changes every sign in it, and $n - n = 0$."
          },
          {
            "line": "Therefore $\\{x + n\\} = \\{x\\}$.",
            "reason": "Fractional part $\\{x\\} = x - \\lfloor x\\rfloor$, $0 \\le \\{x\\} < 1$."
          }
        ]
      }
    },
    {
      "id": "t173-s3",
      "method": "direct proof",
      "statement": "Prove that $\\lceil x\\rceil \\le \\lfloor x\\rfloor + 1$ for every real number $x$. Facts it may use: the ceiling is the least integer not below the number; $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$; the sum of two integers is an integer.",
      "check": {
        "proof": [
          {
            "line": "First, $x < \\lfloor x\\rfloor + 1$.",
            "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: with $n = \\lfloor x\\rfloor$."
          },
          {
            "line": "And $\\lfloor x\\rfloor + 1$ is an integer.",
            "reason": "The addition of integers, from arithmetic."
          },
          {
            "line": "So $\\lfloor x\\rfloor + 1$ is an integer not below $x$.",
            "reason": "Lines 1 and 2."
          },
          {
            "line": "Therefore $\\lceil x\\rceil \\le \\lfloor x\\rfloor + 1$.",
            "reason": "Ceiling: $\\lceil x\\rceil$ is the least integer not below $x$."
          }
        ]
      }
    },
    {
      "id": "t173-s4",
      "method": "direct proof",
      "statement": "Prove that $\\lceil x + n\\rceil = \\lceil x\\rceil + n$ for every real number $x$ and every integer $n$. Facts it may use: the ceiling is the least integer not below the number; adding the same number; the sum of two integers is an integer.",
      "check": {
        "proof": [
          {
            "line": "Let $m = \\lceil x\\rceil$.",
            "reason": "Ceiling: $m$ is an integer."
          },
          {
            "line": "Then $m - 1 < x \\le m$.",
            "reason": "Ceiling: $m$ is not below $x$, and the smaller integer $m - 1$ lies below $x$."
          },
          {
            "line": "So $m + n - 1 < x + n \\le m + n$.",
            "reason": "Adding the same number, from arithmetic: $n$ is added to each part."
          },
          {
            "line": "And $m + n$ is an integer.",
            "reason": "The addition of integers, from arithmetic."
          },
          {
            "line": "So $\\lceil x + n\\rceil = m + n$.",
            "reason": "Ceiling: $m + n$ is an integer not below $x + n$, and the next smaller integer $m + n - 1$ lies below $x + n$."
          },
          {
            "line": "Therefore $\\lceil x + n\\rceil = \\lceil x\\rceil + n$.",
            "reason": "Substituting a value: $m$ is $\\lceil x\\rceil$."
          }
        ]
      }
    },
    {
      "id": "t173-s5",
      "method": "disproof by counterexample",
      "statement": "Prove that $\\lfloor 2x\\rfloor = 2\\lfloor x\\rfloor$ does not hold for every real number $x$. Facts it may use: $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$; an integer is its own floor.",
      "check": {
        "proof": [
          {
            "line": "Take $x = \\dfrac{5}{2}$.",
            "reason": "One value is enough to show the equation fails."
          },
          {
            "line": "Then $\\lfloor 2x\\rfloor = \\lfloor 5\\rfloor = 5$.",
            "reason": "Floor: $5$ is an integer, so it is its own floor."
          },
          {
            "line": "Also $2 \\le \\dfrac{5}{2} < 3$, so $2\\lfloor x\\rfloor = 2 \\cdot 2 = 4$.",
            "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here the integer is $2$."
          },
          {
            "line": "Since $5 \\ne 4$, the equation does not hold for every real number $x$.",
            "reason": "Disproof by counterexample: one value where the two sides fail the claim is enough."
          }
        ]
      }
    }
  ]
}
