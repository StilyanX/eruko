// Divisibility Rules: divisibility extended to integers, the rules for small moduli, and the
// proofs to read and the statements to prove that go with them.
export default {
  "number": 28,
  "manyParts": false,
  "bare": {
    "prompt": "Decide whether $3$ divides $621$.",
    "answer": "Yes",
    "form": "Answer as Yes or No.",
    "solution": [
      "Decide whether $3$ divides $621$.",
      "The digit sum of $621$ is $6+2+1=9$.",
      "The number $3$ divides $9$, so $3$ divides $621$, by the rule for divisibility by $3$.",
      "Yes."
    ]
  },
  "ideas": [
    {
      "name": "Divisibility of integers",
      "concrete": "The integer $-4$ divides $28$, because $28=(-7)\\times(-4)$.",
      "general": "For a nonzero integer $y$, $y$ **divides** an integer $x$, written $y\\mid x$, if there is an integer $z$ with $x=zy$. If there is none, write $y\\nmid x$."
    },
    {
      "name": "Even whole numbers",
      "concrete": "The number $28$ is even, since $2 \\mid 28$. The number $17$ is odd, since $2 \\nmid 17$.",
      "general": "A whole number is **even** if $2$ divides it, and **odd** if $2$ does not divide it."
    },
    {
      "name": "Powers of 10 and remainders",
      "concrete": "Since $10=(3 \\times 3)+1$, the number $10$ leaves remainder $1$ when divided by $3$.",
      "general": "Divisibility rules for a whole number $d$ follow from the remainder each power of $10$ leaves when divided by $d$."
    },
    {
      "name": "Digit sum",
      "concrete": "The digit sum of $247$ is $2+4+7=13$.",
      "general": "The **digit sum** of a whole number is the sum of its digits."
    },
    {
      "name": "Alternating sum of digits",
      "concrete": "The alternating sum of the digits of $517$ is $(5+7)-1=11$.",
      "general": "The **alternating sum** of the digits of a whole number is the first sum minus the second sum. The first sum adds the digits in the ones, hundreds, ten-thousands places and so on. The second sum adds the digits in the tens, thousands, hundred-thousands places and so on."
    }
  ],
  "kinds": [
    {
      "id": "t28-k1",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $4$ divides $572$.",
            "lines": [
              {
                "step": "Split off the last two digits of $572$: $572=500+72$.",
                "reason": "the rule for divisibility by $4$ examines the last two digits, since $100$ is divisible by $4$"
              },
              {
                "step": "The number $500$ is divisible by $4$, since $500=125 \\times 4$.",
                "reason": "every multiple of $100$ is a multiple of $4$"
              },
              {
                "step": "So $4$ divides $572$ exactly when $4$ divides $72$, and $72=18 \\times 4$.",
                "reason": "the divisibility of a sum, applied to $572=500+72$"
              },
              {
                "step": "Yes.",
                "reason": "the number $4$ divides $72$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $4$ divides $324$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Split off the last two digits of $324$: $324=300+24$.",
                  "reason": "the rule for divisibility by $4$ examines the last two digits, since $100$ is divisible by $4$"
                },
                {
                  "step": "The number $300$ is divisible by $4$, since $300=75 \\times 4$.",
                  "reason": "every multiple of $100$ is a multiple of $4$"
                },
                {
                  "step": "So $4$ divides $324$ exactly when $4$ divides $24$, and $24=6 \\times 4$.",
                  "reason": "the divisibility of a sum, applied to $324=300+24$"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $4$ divides $24$"
                }
              ]
            },
            {
              "prompt": "Decide whether $4$ divides $716$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Split off the last two digits of $716$: $716=700+16$.",
                  "reason": "the rule for divisibility by $4$ examines the last two digits, since $100$ is divisible by $4$"
                },
                {
                  "step": "The number $700$ is divisible by $4$, since $700=175 \\times 4$.",
                  "reason": "every multiple of $100$ is a multiple of $4$"
                },
                {
                  "step": "So $4$ divides $716$ exactly when $4$ divides $16$, and $16=4 \\times 4$.",
                  "reason": "the divisibility of a sum, applied to $716=700+16$"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $4$ divides $16$"
                }
              ]
            },
            {
              "prompt": "Decide whether $4$ divides $936$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Split off the last two digits of $936$: $936=900+36$.",
                  "reason": "the rule for divisibility by $4$ examines the last two digits, since $100$ is divisible by $4$"
                },
                {
                  "step": "The number $900$ is divisible by $4$, since $900=225 \\times 4$.",
                  "reason": "every multiple of $100$ is a multiple of $4$"
                },
                {
                  "step": "So $4$ divides $936$ exactly when $4$ divides $36$, and $36=9 \\times 4$.",
                  "reason": "the divisibility of a sum, applied to $936=900+36$"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $4$ divides $36$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $3$ divides $84$.",
            "lines": [
              {
                "step": "Add the digits of $84$: $8+4=12$.",
                "reason": "the rule for divisibility by $3$ examines the digit sum"
              },
              {
                "step": "So $3$ divides $12$, since $12=4 \\times 3$.",
                "reason": "the rule for divisibility by $3$ asks whether $3$ divides the digit sum"
              },
              {
                "step": "Yes.",
                "reason": "the digit sum $12$ is divisible by $3$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $3$ divides $252$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Add the digits of $252$: $2+5+2=9$.",
                  "reason": "the rule for divisibility by $3$ examines the digit sum"
                },
                {
                  "step": "So $3$ divides $9$, since $9=3 \\times 3$.",
                  "reason": "the rule for divisibility by $3$ asks whether $3$ divides the digit sum"
                },
                {
                  "step": "Yes.",
                  "reason": "the digit sum $9$ is divisible by $3$"
                }
              ]
            },
            {
              "prompt": "Decide whether $3$ divides $285$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Add the digits of $285$: $2+8+5=15$.",
                  "reason": "the rule for divisibility by $3$ examines the digit sum"
                },
                {
                  "step": "So $3$ divides $15$, since $15=5 \\times 3$.",
                  "reason": "the rule for divisibility by $3$ asks whether $3$ divides the digit sum"
                },
                {
                  "step": "Yes.",
                  "reason": "the digit sum $15$ is divisible by $3$"
                }
              ]
            },
            {
              "prompt": "Decide whether $3$ divides $1\\,488$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Add the digits of $1\\,488$: $1+4+8+8=21$.",
                  "reason": "the rule for divisibility by $3$ examines the digit sum"
                },
                {
                  "step": "So $3$ divides $21$, since $21=7 \\times 3$.",
                  "reason": "the rule for divisibility by $3$ asks whether $3$ divides the digit sum"
                },
                {
                  "step": "Yes.",
                  "reason": "the digit sum $21$ is divisible by $3$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $4$ divides $538$.",
            "lines": [
              {
                "step": "Split off the last two digits of $538$: $538=500+38$.",
                "reason": "the rule for divisibility by $4$ examines the last two digits, since $100$ is divisible by $4$"
              },
              {
                "step": "The number $500$ is divisible by $4$, since $500=125 \\times 4$.",
                "reason": "every multiple of $100$ is a multiple of $4$"
              },
              {
                "step": "So $4$ divides $538$ exactly when $4$ divides $38$, and $4$ does not divide $38$.",
                "reason": "the divisibility of a sum, applied to $538=500+38$"
              },
              {
                "step": "No.",
                "reason": "the number $4$ does not divide $38$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $8$ divides $2\\,316$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Split off the last three digits of $2\\,316$: $2\\,316=2\\,000+316$.",
                  "reason": "the rule for divisibility by $8$ examines the last three digits, since $1\\,000$ is divisible by $8$"
                },
                {
                  "step": "The number $2\\,000$ is divisible by $8$, since $2\\,000=250 \\times 8$.",
                  "reason": "every multiple of $1\\,000$ is a multiple of $8$"
                },
                {
                  "step": "So $8$ divides $2\\,316$ exactly when $8$ divides $316$, and $8$ does not divide $316$.",
                  "reason": "the divisibility of a sum, applied to $2\\,316=2\\,000+316$"
                },
                {
                  "step": "No.",
                  "reason": "the number $8$ does not divide $316$"
                }
              ]
            },
            {
              "prompt": "Decide whether $4$ divides $942$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Split off the last two digits of $942$: $942=900+42$.",
                  "reason": "the rule for divisibility by $4$ examines the last two digits, since $100$ is divisible by $4$"
                },
                {
                  "step": "The number $900$ is divisible by $4$, since $900=225 \\times 4$.",
                  "reason": "every multiple of $100$ is a multiple of $4$"
                },
                {
                  "step": "So $4$ divides $942$ exactly when $4$ divides $42$, and $4$ does not divide $42$.",
                  "reason": "the divisibility of a sum, applied to $942=900+42$"
                },
                {
                  "step": "No.",
                  "reason": "the number $4$ does not divide $42$"
                }
              ]
            },
            {
              "prompt": "Decide whether $2$ divides $547$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Split off the ones digit of $547$: $547=540+7$.",
                  "reason": "the rule for divisibility by $2$ examines the ones digit, since $10$ is divisible by $2$"
                },
                {
                  "step": "The number $540$ is divisible by $2$, since $540=270 \\times 2$.",
                  "reason": "every multiple of $10$ is a multiple of $2$"
                },
                {
                  "step": "So $2$ divides $547$ exactly when $2$ divides $7$, and $2$ does not divide $7$.",
                  "reason": "the divisibility of a sum, applied to $547=540+7$"
                },
                {
                  "step": "No.",
                  "reason": "the number $2$ does not divide $7$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $5$ divides $730$.",
            "lines": [
              {
                "step": "The ones digit of $730$ is $0$, so $730=73 \\times 10$.",
                "reason": "a whole number whose ones digit is $0$ is a whole number of tens"
              },
              {
                "step": "The number $10$ is divisible by $5$, so $730=73 \\times 2 \\times 5=146 \\times 5$.",
                "reason": "every multiple of $10$ is a multiple of $5$"
              },
              {
                "step": "Yes.",
                "reason": "the number $5$ divides $730$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $2$ divides $4\\,190$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The ones digit of $4\\,190$ is $0$, so $4\\,190=419 \\times 10$.",
                  "reason": "a whole number whose ones digit is $0$ is a whole number of tens"
                },
                {
                  "step": "The number $10$ is divisible by $2$, so $4\\,190=419 \\times 5 \\times 2=2\\,095 \\times 2$.",
                  "reason": "every multiple of $10$ is a multiple of $2$"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $2$ divides $4\\,190$"
                }
              ]
            },
            {
              "prompt": "Decide whether $5$ divides $360$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The ones digit of $360$ is $0$, so $360=36 \\times 10$.",
                  "reason": "a whole number whose ones digit is $0$ is a whole number of tens"
                },
                {
                  "step": "The number $10$ is divisible by $5$, so $360=36 \\times 2 \\times 5=72 \\times 5$.",
                  "reason": "every multiple of $10$ is a multiple of $5$"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $5$ divides $360$"
                }
              ]
            },
            {
              "prompt": "Decide whether $2$ divides $1\\,470$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The ones digit of $1\\,470$ is $0$, so $1\\,470=147 \\times 10$.",
                  "reason": "a whole number whose ones digit is $0$ is a whole number of tens"
                },
                {
                  "step": "The number $10$ is divisible by $2$, so $1\\,470=147 \\times 5 \\times 2=735 \\times 2$.",
                  "reason": "every multiple of $10$ is a multiple of $2$"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $2$ divides $1\\,470$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $8$ divides $344$.",
            "lines": [
              {
                "step": "The number $344$ has three digits, so its last three digits are $344$ itself.",
                "reason": "the rule for divisibility by $8$ examines the last three digits, since $1\\,000$ is divisible by $8$"
              },
              {
                "step": "The number $344$ is divisible by $8$, since $344=43 \\times 8$.",
                "reason": "the definition of divisibility"
              },
              {
                "step": "Yes.",
                "reason": "the number $8$ divides $344$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $8$ divides $616$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The number $616$ has three digits, so its last three digits are $616$ itself.",
                  "reason": "the rule for divisibility by $8$ examines the last three digits, since $1\\,000$ is divisible by $8$"
                },
                {
                  "step": "The number $616$ is divisible by $8$, since $616=77 \\times 8$.",
                  "reason": "the definition of divisibility"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $8$ divides $616$"
                }
              ]
            },
            {
              "prompt": "Decide whether $8$ divides $488$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The number $488$ has three digits, so its last three digits are $488$ itself.",
                  "reason": "the rule for divisibility by $8$ examines the last three digits, since $1\\,000$ is divisible by $8$"
                },
                {
                  "step": "The number $488$ is divisible by $8$, since $488=61 \\times 8$.",
                  "reason": "the definition of divisibility"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $8$ divides $488$"
                }
              ]
            },
            {
              "prompt": "Decide whether $8$ divides $904$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The number $904$ has three digits, so its last three digits are $904$ itself.",
                  "reason": "the rule for divisibility by $8$ examines the last three digits, since $1\\,000$ is divisible by $8$"
                },
                {
                  "step": "The number $904$ is divisible by $8$, since $904=113 \\times 8$.",
                  "reason": "the definition of divisibility"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $8$ divides $904$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $3$ divides $715$.",
            "lines": [
              {
                "step": "Add the digits of $715$: $7+1+5=13$.",
                "reason": "the rule for divisibility by $3$ examines the digit sum"
              },
              {
                "step": "So $3$ does not divide $13$, since $13=(4 \\times 3)+1$.",
                "reason": "the rule for divisibility by $3$ asks whether $3$ divides the digit sum"
              },
              {
                "step": "No.",
                "reason": "the digit sum $13$ is not divisible by $3$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $9$ divides $583$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Add the digits of $583$: $5+8+3=16$.",
                  "reason": "the rule for divisibility by $9$ examines the digit sum"
                },
                {
                  "step": "So $9$ does not divide $16$, since $16=(1 \\times 9)+7$.",
                  "reason": "the rule for divisibility by $9$ asks whether $9$ divides the digit sum"
                },
                {
                  "step": "No.",
                  "reason": "the digit sum $16$ is not divisible by $9$"
                }
              ]
            },
            {
              "prompt": "Decide whether $3$ divides $1\\,024$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Add the digits of $1\\,024$: $1+0+2+4=7$.",
                  "reason": "the rule for divisibility by $3$ examines the digit sum"
                },
                {
                  "step": "So $3$ does not divide $7$, since $7=(2 \\times 3)+1$.",
                  "reason": "the rule for divisibility by $3$ asks whether $3$ divides the digit sum"
                },
                {
                  "step": "No.",
                  "reason": "the digit sum $7$ is not divisible by $3$"
                }
              ]
            },
            {
              "prompt": "Decide whether $9$ divides $2\\,306$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Add the digits of $2\\,306$: $2+3+0+6=11$.",
                  "reason": "the rule for divisibility by $9$ examines the digit sum"
                },
                {
                  "step": "So $9$ does not divide $11$, since $11=(1 \\times 9)+2$.",
                  "reason": "the rule for divisibility by $9$ asks whether $9$ divides the digit sum"
                },
                {
                  "step": "No.",
                  "reason": "the digit sum $11$ is not divisible by $9$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $11$ divides $913$.",
            "lines": [
              {
                "step": "The alternating sum of the digits of $913$ is $(3+9)-1=11$.",
                "reason": "the rule for divisibility by $11$ examines the alternating sum of the digits"
              },
              {
                "step": "So $11$ divides $11$, since $11=1 \\times 11$.",
                "reason": "the rule for divisibility by $11$ asks whether $11$ divides the alternating sum"
              },
              {
                "step": "Yes.",
                "reason": "the alternating sum $11$ is divisible by $11$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $11$ divides $2\\,365$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The alternating sum of the digits of $2\\,365$ is $(5+3)-(6+2)=0$.",
                  "reason": "the rule for divisibility by $11$ examines the alternating sum of the digits"
                },
                {
                  "step": "So $11$ divides $0$, since $0=0 \\times 11$.",
                  "reason": "the rule for divisibility by $11$ asks whether $11$ divides the alternating sum"
                },
                {
                  "step": "Yes.",
                  "reason": "the alternating sum $0$ is divisible by $11$"
                }
              ]
            },
            {
              "prompt": "Decide whether $11$ divides $4\\,829$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The alternating sum of the digits of $4\\,829$ is $(9+8)-(2+4)=11$.",
                  "reason": "the rule for divisibility by $11$ examines the alternating sum of the digits"
                },
                {
                  "step": "So $11$ divides $11$, since $11=1 \\times 11$.",
                  "reason": "the rule for divisibility by $11$ asks whether $11$ divides the alternating sum"
                },
                {
                  "step": "Yes.",
                  "reason": "the alternating sum $11$ is divisible by $11$"
                }
              ]
            },
            {
              "prompt": "Decide whether $11$ divides $627$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The alternating sum of the digits of $627$ is $(7+6)-2=11$.",
                  "reason": "the rule for divisibility by $11$ examines the alternating sum of the digits"
                },
                {
                  "step": "So $11$ divides $11$, since $11=1 \\times 11$.",
                  "reason": "the rule for divisibility by $11$ asks whether $11$ divides the alternating sum"
                },
                {
                  "step": "Yes.",
                  "reason": "the alternating sum $11$ is divisible by $11$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $11$ divides $538$.",
            "lines": [
              {
                "step": "The alternating sum of the digits of $538$ is $(8+5)-3=10$.",
                "reason": "the rule for divisibility by $11$ examines the alternating sum of the digits"
              },
              {
                "step": "So $11$ does not divide $10$, since $10=(0 \\times 11)+10$.",
                "reason": "the rule for divisibility by $11$ asks whether $11$ divides the alternating sum"
              },
              {
                "step": "No.",
                "reason": "the alternating sum $10$ is not divisible by $11$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $11$ divides $746$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The alternating sum of the digits of $746$ is $(6+7)-4=9$.",
                  "reason": "the rule for divisibility by $11$ examines the alternating sum of the digits"
                },
                {
                  "step": "So $11$ does not divide $9$, since $9=(0 \\times 11)+9$.",
                  "reason": "the rule for divisibility by $11$ asks whether $11$ divides the alternating sum"
                },
                {
                  "step": "No.",
                  "reason": "the alternating sum $9$ is not divisible by $11$"
                }
              ]
            },
            {
              "prompt": "Decide whether $11$ divides $5\\,708$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The alternating sum of the digits of $5\\,708$ is $(8+7)-(0+5)=10$.",
                  "reason": "the rule for divisibility by $11$ examines the alternating sum of the digits"
                },
                {
                  "step": "So $11$ does not divide $10$, since $10=(0 \\times 11)+10$.",
                  "reason": "the rule for divisibility by $11$ asks whether $11$ divides the alternating sum"
                },
                {
                  "step": "No.",
                  "reason": "the alternating sum $10$ is not divisible by $11$"
                }
              ]
            },
            {
              "prompt": "Decide whether $11$ divides $829$.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The alternating sum of the digits of $829$ is $(9+8)-2=15$.",
                  "reason": "the rule for divisibility by $11$ examines the alternating sum of the digits"
                },
                {
                  "step": "So $11$ does not divide $15$, since $15=(1 \\times 11)+4$.",
                  "reason": "the rule for divisibility by $11$ asks whether $11$ divides the alternating sum"
                },
                {
                  "step": "No.",
                  "reason": "the alternating sum $15$ is not divisible by $11$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t28-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $4$ divides $72$, given that $72=6 \\times 12$ and $12=3 \\times 4$.",
            "lines": [
              {
                "step": "Since $72=6 \\times 12$, $12$ divides $72$.",
                "reason": "the definition of divides"
              },
              {
                "step": "Since $12=3 \\times 4$, $4$ divides $12$.",
                "reason": "the definition of divides"
              },
              {
                "step": "So $4$ divides $72$.",
                "reason": "the transitivity of divisibility: a divisor of a divisor of a number divides that number"
              },
              {
                "step": "Yes.",
                "reason": "the problem asks whether $4$ divides $72$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $5$ divides $150$, given that $150=10 \\times 15$ and $15=3 \\times 5$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Since $150=10 \\times 15$, $15$ divides $150$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "Since $15=3 \\times 5$, $5$ divides $15$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "So $5$ divides $150$.",
                  "reason": "the transitivity of divisibility: a divisor of a divisor of a number divides that number"
                },
                {
                  "step": "Yes.",
                  "reason": "the problem asks whether $5$ divides $150$"
                }
              ]
            },
            {
              "prompt": "Decide whether $9$ divides $270$, given that $270=15 \\times 18$ and $18=2 \\times 9$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Since $270=15 \\times 18$, $18$ divides $270$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "Since $18=2 \\times 9$, $9$ divides $18$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "So $9$ divides $270$.",
                  "reason": "the transitivity of divisibility: a divisor of a divisor of a number divides that number"
                },
                {
                  "step": "Yes.",
                  "reason": "the problem asks whether $9$ divides $270$"
                }
              ]
            },
            {
              "prompt": "Decide whether $6$ divides $432$, given that $432=8 \\times 54$ and $54=9 \\times 6$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "Since $432=8 \\times 54$, $54$ divides $432$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "Since $54=9 \\times 6$, $6$ divides $54$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "So $6$ divides $432$.",
                  "reason": "the transitivity of divisibility: a divisor of a divisor of a number divides that number"
                },
                {
                  "step": "Yes.",
                  "reason": "the problem asks whether $6$ divides $432$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $7$ divides $210$, given that $210=196+14$, $7$ divides $196$, and $7$ divides $14$.",
            "lines": [
              {
                "step": "By hypothesis, $7$ divides both $196$ and $14$, and $210=196+14$.",
                "reason": "the given facts"
              },
              {
                "step": "So $7$ divides $210$.",
                "reason": "the divisibility of a sum: if a number divides two of $A,B,C$ in $A=B+C$, it divides the third"
              },
              {
                "step": "Yes.",
                "reason": "the number $7$ divides $210$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $9$ divides $153$, given that $153=144+9$, $9$ divides $144$, and $9$ divides $9$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "By hypothesis, $9$ divides both $144$ and $9$, and $153=144+9$.",
                  "reason": "the given facts"
                },
                {
                  "step": "So $9$ divides $153$.",
                  "reason": "the divisibility of a sum: if a number divides two of $A,B,C$ in $A=B+C$, it divides the third"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $9$ divides $153$"
                }
              ]
            },
            {
              "prompt": "Decide whether $11$ divides $198$, given that $198=187+11$, $11$ divides $187$, and $11$ divides $11$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "By hypothesis, $11$ divides both $187$ and $11$, and $198=187+11$.",
                  "reason": "the given facts"
                },
                {
                  "step": "So $11$ divides $198$.",
                  "reason": "the divisibility of a sum: if a number divides two of $A,B,C$ in $A=B+C$, it divides the third"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $11$ divides $198$"
                }
              ]
            },
            {
              "prompt": "Decide whether $13$ divides $117$, given that $117=104+13$, $13$ divides $104$, and $13$ divides $13$.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "By hypothesis, $13$ divides both $104$ and $13$, and $117=104+13$.",
                  "reason": "the given facts"
                },
                {
                  "step": "So $13$ divides $117$.",
                  "reason": "the divisibility of a sum: if a number divides two of $A,B,C$ in $A=B+C$, it divides the third"
                },
                {
                  "step": "Yes.",
                  "reason": "the number $13$ divides $117$"
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
      "id": "t28-p1",
      "method": "proof by cases",
      "statement": "Suppose that integers $A$, $B$, $C$ satisfy $A=B+C$. Suppose that a nonzero integer $x$ divides two of $A$, $B$, and $C$. Then $x$ also divides the third.",
      "idea": "Write the two known multiples of $x$ in terms of $x$. Then use the distributive law to write the third number as a multiple of $x$.",
      "lines": [
        {
          "line": "Suppose that $x$ divides $B$ and $C$.",
          "reason": "the first case"
        },
        {
          "line": "Then $B=wx$ and $C=zx$ for integers $w$ and $z$.",
          "reason": "the definition of divisibility"
        },
        {
          "line": "$A=B+C=wx+zx=(w+z)x$.",
          "reason": "substituting, then the distributive law"
        },
        {
          "line": "The number $w+z$ is an integer, so $A$ is a multiple of $x$, and $x$ divides $A$.",
          "reason": "the sum of two integers is an integer, and the definition of divisibility"
        },
        {
          "line": "Suppose instead that $x$ divides $A$ and $C$.",
          "reason": "the second case"
        },
        {
          "line": "Then $A=wx$ and $C=zx$ for integers $w$ and $z$.",
          "reason": "the definition of divisibility"
        },
        {
          "line": "$B=A-C=wx-zx=(w-z)x$.",
          "reason": "rearranging $A=B+C$ to $B=A-C$, then substituting and the distributive law for subtraction"
        },
        {
          "line": "The number $w-z$ is an integer, so $x$ divides $B$.",
          "reason": "the difference of two integers is an integer, and the definition of divisibility"
        },
        {
          "line": "Suppose instead that $x$ divides $A$ and $B$.",
          "reason": "the third case"
        },
        {
          "line": "The same argument as the second case, with the roles of $B$ and $C$ exchanged, shows that $x$ divides $C$.",
          "reason": "rearranging $A=B+C$ to $C=A-B$ and repeating the previous steps"
        },
        {
          "line": "The three cases cover every pair among $A$, $B$, $C$ that $x$ divides, so $x$ divides the third number.",
          "reason": "combining the three cases"
        }
      ]
    },
    {
      "id": "t28-p2",
      "method": "direct proof",
      "statement": "Let $A$, $B$, $C$ be integers. If $A$ divides $B$ and $B$ divides $C$, then $A$ divides $C$.",
      "idea": "Substitute the first equation into the second to write $C$ directly as a multiple of $A$.",
      "lines": [
        {
          "line": "By hypothesis, $B=mA$ for an integer $m$.",
          "reason": "the definition of divisibility, since $A$ divides $B$"
        },
        {
          "line": "Likewise, $C=nB$ for an integer $n$.",
          "reason": "the definition of divisibility, since $B$ divides $C$"
        },
        {
          "line": "$C=n(mA)$.",
          "reason": "substituting $B=mA$ into $C=nB$"
        },
        {
          "line": "$n(mA)=(nm)A$.",
          "reason": "the associative law of multiplication"
        },
        {
          "line": "The number $nm$ is an integer, so $C$ is a multiple of $A$, and $A$ divides $C$.",
          "reason": "the product of two integers is an integer, and the definition of divisibility"
        }
      ]
    },
    {
      "id": "t28-p3",
      "method": "proof by contradiction",
      "statement": "Let $A$, $B$, $C$ be integers. If $A$ does not divide $C$, then no multiple of $A$ can divide $C$.",
      "idea": "Assume that some multiple of $A$ divides $C$. By the transitivity of divisibility, $A$ itself would then divide $C$, which contradicts the hypothesis.",
      "lines": [
        {
          "line": "Let $B$ be a multiple of $A$, so $A$ divides $B$.",
          "reason": "the definition of multiple"
        },
        {
          "line": "Either $B$ divides $C$, or $B$ does not divide $C$.",
          "reason": "a statement and its negation, one of which must hold"
        },
        {
          "line": "Suppose, for contradiction, that $B$ divides $C$.",
          "reason": "proof by contradiction, testing the first possibility"
        },
        {
          "line": "Now $A$ divides $B$ and $B$ divides $C$, so $A$ divides $C$.",
          "reason": "the transitivity of divisibility"
        },
        {
          "line": "This contradicts the hypothesis that $A$ does not divide $C$.",
          "reason": "comparing the previous line with the hypothesis"
        },
        {
          "line": "So $B$ does not divide $C$.",
          "reason": "the only possibility left after the contradiction"
        }
      ]
    },
    {
      "id": "t28-p4",
      "method": "direct proof",
      "statement": "A whole number is even if and only if its ones digit is $0$, $2$, $4$, $6$, or $8$.",
      "idea": "Split the number into ten times the rest plus the ones digit. Then apply the divisibility of a sum, since ten times the rest is always even.",
      "lines": [
        {
          "line": "Let $n$ be a whole number with ones digit $k$, so $n=10b+k$ for a whole number $b$.",
          "reason": "the expanded form of a whole number"
        },
        {
          "line": "Since $10b=(5b)\\times2$, $2$ divides $10b$.",
          "reason": "the number $10$ is divisible by $2$"
        },
        {
          "line": "Suppose that $n$ is even. Since $2$ divides $n$ and $2$ divides $10b$, the divisibility of a sum shows that $2$ divides $k$.",
          "reason": "the divisibility of a sum, applied to $n=10b+k$"
        },
        {
          "line": "Conversely, suppose that $2$ divides $k$. Since $2$ divides $k$ and $2$ divides $10b$, the divisibility of a sum shows that $2$ divides $n$.",
          "reason": "the divisibility of a sum, applied to $n=10b+k$"
        },
        {
          "line": "A single digit $k$ is divisible by $2$ exactly when $k$ is $0$, $2$, $4$, $6$, or $8$.",
          "reason": "checking each of the ten possible digits"
        },
        {
          "line": "A whole number is even if and only if its ones digit is $0$, $2$, $4$, $6$, or $8$.",
          "reason": "combining the previous lines"
        }
      ]
    },
    {
      "id": "t28-p5",
      "method": "direct proof",
      "statement": "A whole number is divisible by $4$ exactly when its last two digits form a number divisible by $4$.",
      "idea": "Split the number into a multiple of $100$ plus its last two digits. Then apply the divisibility of a sum, since every multiple of $100$ is divisible by $4$.",
      "lines": [
        {
          "line": "Let $n$ be a whole number. Let $k$ be the two-digit number formed by its last two digits, so $n=100b+k$ for a whole number $b$.",
          "reason": "the expanded form of a whole number"
        },
        {
          "line": "Since $100b=(25b)\\times4$, $4$ divides $100b$.",
          "reason": "the number $100$ is divisible by $4$"
        },
        {
          "line": "Suppose that $4$ divides $n$. Since $4$ divides $n$ and $4$ divides $100b$, the divisibility of a sum shows that $4$ divides $k$.",
          "reason": "the divisibility of a sum, applied to $n=100b+k$"
        },
        {
          "line": "Conversely, suppose that $4$ divides $k$. Since $4$ divides $k$ and $4$ divides $100b$, the divisibility of a sum shows that $4$ divides $n$.",
          "reason": "the divisibility of a sum, applied to $n=100b+k$"
        },
        {
          "line": "A whole number is divisible by $4$ exactly when its last two digits form a number divisible by $4$.",
          "reason": "combining the previous lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t28-s1",
      "method": "direct proof",
      "statement": "For a whole number $n$, $3\\mid n$ if and only if $3$ divides the digit sum of $n$.",
      "check": {
        "proof": [
          {
            "line": "Let $n$ be a whole number with base-ten digits $d_k,\\ldots,d_1,d_0$ from left to right, so $n=d_k\\cdot10^k+\\cdots+d_1\\cdot10+d_0$.",
            "reason": "the expanded form of a whole number"
          },
          {
            "line": "Let $S=d_k+\\cdots+d_1+d_0$ be its digit sum.",
            "reason": "the definition of the digit sum"
          },
          {
            "line": "If $n$ has a single digit, then $n=S$, so $n-S=0=0\\times3$ and $3$ divides $n-S$. Otherwise $n$ has at least two digits, so $k\\ge1$.",
            "reason": "the definition of divisibility"
          },
          {
            "line": "Subtracting term by term gives $n-S=d_k(10^k-1)+\\cdots+d_1(10-1)$.",
            "reason": "the distributive law, since $d_0-d_0=0$"
          },
          {
            "line": "For each $i\\ge1$, the number $10^i-1$ consists of $i$ nines, so $10^i-1=3\\times33\\ldots3$, with $i$ threes.",
            "reason": "the subtraction algorithm applied to $10^i-1$, and the multiplication algorithm"
          },
          {
            "line": "So $3$ divides each term $d_i(10^i-1)$, and $3$ then divides their sum $n-S$.",
            "reason": "the transitivity of divisibility, then the divisibility of a sum, once for each term"
          },
          {
            "line": "Suppose that $3\\mid n$. Since $n=(n-S)+S$ and $3$ divides $n$ and $n-S$, the divisibility of a sum shows that $3\\mid S$.",
            "reason": "the divisibility of a sum, applied to $n=(n-S)+S$"
          },
          {
            "line": "Conversely, suppose that $3\\mid S$. Since $3$ divides $S$ and $n-S$, the divisibility of a sum shows that $3\\mid n$.",
            "reason": "the divisibility of a sum, applied to $n=(n-S)+S$"
          },
          {
            "line": "So $3\\mid n$ if and only if $3$ divides the digit sum of $n$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t28-s2",
      "method": "direct proof",
      "statement": "For a whole number $n$, $9\\mid n$ if and only if $9$ divides the digit sum of $n$.",
      "check": {
        "proof": [
          {
            "line": "Let $n$ be a whole number with base-ten digits $d_k,\\ldots,d_1,d_0$ from left to right, so $n=d_k\\cdot10^k+\\cdots+d_1\\cdot10+d_0$.",
            "reason": "the expanded form of a whole number"
          },
          {
            "line": "Let $S=d_k+\\cdots+d_1+d_0$ be its digit sum.",
            "reason": "the definition of the digit sum"
          },
          {
            "line": "If $n$ has a single digit, then $n=S$, so $n-S=0=0\\times9$ and $9$ divides $n-S$. Otherwise $n$ has at least two digits, so $k\\ge1$.",
            "reason": "the definition of divisibility"
          },
          {
            "line": "Subtracting term by term gives $n-S=d_k(10^k-1)+\\cdots+d_1(10-1)$.",
            "reason": "the distributive law, since $d_0-d_0=0$"
          },
          {
            "line": "For each $i\\ge1$, the number $10^i-1$ consists of $i$ nines, so $10^i-1=9\\times11\\ldots1$, with $i$ ones.",
            "reason": "the subtraction algorithm applied to $10^i-1$, and the multiplication algorithm"
          },
          {
            "line": "So $9$ divides each term $d_i(10^i-1)$, and $9$ then divides their sum $n-S$.",
            "reason": "the transitivity of divisibility, then the divisibility of a sum, once for each term"
          },
          {
            "line": "Suppose that $9\\mid n$. Since $n=(n-S)+S$ and $9$ divides $n$ and $n-S$, the divisibility of a sum shows that $9\\mid S$.",
            "reason": "the divisibility of a sum, applied to $n=(n-S)+S$"
          },
          {
            "line": "Conversely, suppose that $9\\mid S$. Since $9$ divides $S$ and $n-S$, the divisibility of a sum shows that $9\\mid n$.",
            "reason": "the divisibility of a sum, applied to $n=(n-S)+S$"
          },
          {
            "line": "So $9\\mid n$ if and only if $9$ divides the digit sum of $n$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t28-s3",
      "method": "proof by cases",
      "statement": "For a whole number $n$, $11\\mid n$ if and only if $11$ divides the alternating sum of the digits of $n$.",
      "check": {
        "proof": [
          {
            "line": "Let $n$ be a whole number with base-ten digits $d_k,\\ldots,d_1,d_0$ from left to right, so $n=d_k\\cdot10^k+\\cdots+d_1\\cdot10+d_0$.",
            "reason": "the expanded form of a whole number"
          },
          {
            "line": "Let $A=d_0-d_1+d_2-\\cdots$ be the alternating sum of the digits. The digit $d_i$ carries a plus sign when $i$ is even and a minus sign when $i$ is odd.",
            "reason": "the definition of the alternating sum of the digits"
          },
          {
            "line": "Subtracting term by term, $n-A$ is the sum of the terms $d_i(10^i-1)$ for even $i$ and $d_i(10^i+1)$ for odd $i$.",
            "reason": "the distributive law"
          },
          {
            "line": "Case $i$ even. If $i=0$, then $10^i-1=0=0\\times11$.",
            "reason": "the definition $10^0=1$"
          },
          {
            "line": "If $i=2j$ with $j\\ge1$, then $99\\times(10^{2j-2}+\\cdots+10^2+1)=(10^{2j}+\\cdots+10^2)-(10^{2j-2}+\\cdots+1)=10^{2j}-1$.",
            "reason": "the distributive law with $99=100-1$, after which every middle term cancels"
          },
          {
            "line": "Since $99=9\\times11$, the number $11$ divides $10^i-1$ for every even $i$.",
            "reason": "the transitivity of divisibility"
          },
          {
            "line": "Case $i$ odd, say $i=2j+1$. Then $10^{2j+1}+1=10(10^{2j}-1)+11$.",
            "reason": "the distributive law"
          },
          {
            "line": "By the even case, $10^{2j}-1=11c$ for an integer $c$, so $10(10^{2j}-1)=11(10c)$ and $11$ divides $10(10^{2j}-1)$. It also divides $11=1\\times11$, so $11$ divides $10^i+1$.",
            "reason": "the definition of divisibility and the associative and commutative laws of multiplication, then the divisibility of a sum"
          },
          {
            "line": "Each term of $n-A$ is $d_i$ times a number $11c$, so it equals $11(d_ic)$, and $11$ divides it. So $11$ divides $n-A$.",
            "reason": "the two cases, the associative and commutative laws of multiplication, and the divisibility of a sum, once for each term"
          },
          {
            "line": "Suppose that $11\\mid n$. Since $n=(n-A)+A$ and $11$ divides $n$ and $n-A$, the divisibility of a sum shows that $11\\mid A$.",
            "reason": "the divisibility of a sum, applied to $n=(n-A)+A$"
          },
          {
            "line": "Conversely, suppose that $11\\mid A$. Since $11$ divides $A$ and $n-A$, the divisibility of a sum shows that $11\\mid n$.",
            "reason": "the divisibility of a sum, applied to $n=(n-A)+A$"
          },
          {
            "line": "So $11\\mid n$ if and only if $11$ divides the alternating sum of the digits of $n$.",
            "reason": "combining the two cases and both directions"
          }
        ]
      }
    },
    {
      "id": "t28-s4",
      "method": "direct proof",
      "statement": "A whole number is divisible by $5$ if and only if its ones digit is $0$ or $5$.",
      "check": {
        "proof": [
          {
            "line": "Let $n$ be a whole number with ones digit $k$, so $n=10b+k$ for a whole number $b$.",
            "reason": "the expanded form of a whole number"
          },
          {
            "line": "Since $10b=(2b)\\times5$, $5$ divides $10b$.",
            "reason": "the number $10$ is divisible by $5$"
          },
          {
            "line": "Suppose that $5$ divides $n$. Since $5$ divides $n$ and $5$ divides $10b$, the divisibility of a sum shows that $5$ divides $k$.",
            "reason": "the divisibility of a sum, applied to $n=10b+k$"
          },
          {
            "line": "Conversely, suppose that $5$ divides $k$. Since $5$ divides $k$ and $5$ divides $10b$, the divisibility of a sum shows that $5$ divides $n$.",
            "reason": "the divisibility of a sum, applied to $n=10b+k$"
          },
          {
            "line": "A single digit $k$ is divisible by $5$ exactly when $k$ is $0$ or $5$.",
            "reason": "checking each of the ten possible digits"
          },
          {
            "line": "A whole number is divisible by $5$ if and only if its ones digit is $0$ or $5$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t28-s5",
      "method": "proof by contradiction",
      "statement": "No even integer divides an odd integer.",
      "check": {
        "proof": [
          {
            "line": "Suppose, for contradiction, that an even integer $d$ divides an odd integer $a$.",
            "reason": "proof by contradiction"
          },
          {
            "line": "By hypothesis, $a=dm$ for an integer $m$, and $d=2c$ for an integer $c$.",
            "reason": "the definition of divisibility, and the definition of even"
          },
          {
            "line": "Then $a=2cm$, a product of $2$ and the integer $cm$.",
            "reason": "substituting $d=2c$ into $a=dm$, then the associative law"
          },
          {
            "line": "So $a$ is even.",
            "reason": "the definition of even"
          },
          {
            "line": "This contradicts the hypothesis that $a$ is odd.",
            "reason": "comparing the previous line with the hypothesis"
          },
          {
            "line": "No even integer divides an odd integer.",
            "reason": "the contradiction rules out the supposition"
          }
        ]
      }
    }
  ]
}
