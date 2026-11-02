// Average Speed and Percent Problems (Wu, chapter 23): the average speed of a round trip, a changed speed or rate,
// a part that stays fixed while the rest evaporates, and a spoonful exchanged. Every number is computed exactly.
export default {
  "number": 22,
  "manyParts": false,
  "bare": {
    "prompt": "Find the average speed, in mph, of a round trip made out at $15$ mph and back at $18$ mph.",
    "answer": "16 4/11",
    "form": "Answer as a mixed number in lowest terms, or equivalent.",
    "solution": [
      "Find the average speed, in mph, of a round trip made out at $15$ mph and back at $18$ mph.",
      "Let the one-way distance be $D$ miles. The time out is $\\dfrac{D}{15}$ hours, and the time back is $\\dfrac{D}{18}$ hours.",
      "The average speed is $\\dfrac{2D}{\\frac{D}{15}+\\frac{D}{18}}=\\dfrac{2}{\\frac{1}{15}+\\frac{1}{18}}$ mph.",
      "Since $\\dfrac{1}{15}+\\dfrac{1}{18}=\\dfrac{11}{90}$, the average speed is $2\\times\\dfrac{90}{11}=\\dfrac{180}{11}$ mph.",
      "$16\\,\\dfrac{4}{11}$."
    ]
  },
  "ideas": [
    {
      "name": "The average speed of a round trip",
      "concrete": "A round trip out at $15$ mph and back at $18$ mph has average speed $\\dfrac{2\\times15\\times18}{15+18}=16\\,\\dfrac{4}{11}$ mph.",
      "general": "Take a round trip out at $x$ mph and back at $y$ mph, each at constant speed. Its average speed is $\\dfrac{2xy}{x+y}$ mph, whatever the distance.",
      "definitions": [
        "The **harmonic mean** of two positive numbers $x$ and $y$ is $\\dfrac{2xy}{x+y}$."
      ]
    }
  ],
  "kinds": [
    {
      "id": "t22-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the average speed, in mph, of a round trip made out at $20$ mph and back at $30$ mph.",
            "lines": [
              {
                "step": "Let the one-way distance be $D$ miles. The time out is $\\dfrac{D}{20}$ hours, and the time back is $\\dfrac{D}{30}$ hours.",
                "reason": "a trip at constant speed takes its distance divided by its speed"
              },
              {
                "step": "The average speed is $\\dfrac{2D}{\\frac{D}{20}+\\frac{D}{30}}=\\dfrac{2}{\\frac{1}{20}+\\frac{1}{30}}$ mph.",
                "reason": "average speed is total distance divided by total time, not the mean of the speeds; then the distributive law and cancelling $D$"
              },
              {
                "step": "Since $\\dfrac{1}{20}+\\dfrac{1}{30}=\\dfrac{1}{12}$, the average speed is $2\\times12=24$ mph.",
                "reason": "adding fractions, then inverting and multiplying"
              },
              {
                "step": "$24$.",
                "reason": "the average speed, in mph"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the average speed, in mph, of a round trip made out at $40$ mph and back at $60$ mph.",
              "answer": "48",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let the one-way distance be $D$ miles. The time out is $\\dfrac{D}{40}$ hours, and the time back is $\\dfrac{D}{60}$ hours.",
                  "reason": "a trip at constant speed takes its distance divided by its speed"
                },
                {
                  "step": "The average speed is $\\dfrac{2D}{\\frac{D}{40}+\\frac{D}{60}}=\\dfrac{2}{\\frac{1}{40}+\\frac{1}{60}}$ mph.",
                  "reason": "average speed is total distance divided by total time, not the mean of the speeds; then the distributive law and cancelling $D$"
                },
                {
                  "step": "Since $\\dfrac{1}{40}+\\dfrac{1}{60}=\\dfrac{1}{24}$, the average speed is $2\\times24=48$ mph.",
                  "reason": "adding fractions, then inverting and multiplying"
                },
                {
                  "step": "$48$.",
                  "reason": "the average speed, in mph"
                }
              ]
            },
            {
              "prompt": "Find the average speed, in mph, of a round trip made out at $12$ mph and back at $18$ mph.",
              "answer": "14 2/5",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let the one-way distance be $D$ miles. The time out is $\\dfrac{D}{12}$ hours, and the time back is $\\dfrac{D}{18}$ hours.",
                  "reason": "a trip at constant speed takes its distance divided by its speed"
                },
                {
                  "step": "The average speed is $\\dfrac{2D}{\\frac{D}{12}+\\frac{D}{18}}=\\dfrac{2}{\\frac{1}{12}+\\frac{1}{18}}$ mph.",
                  "reason": "average speed is total distance divided by total time, not the mean of the speeds; then the distributive law and cancelling $D$"
                },
                {
                  "step": "Since $\\dfrac{1}{12}+\\dfrac{1}{18}=\\dfrac{5}{36}$, the average speed is $2\\times\\dfrac{36}{5}=\\dfrac{72}{5}$ mph.",
                  "reason": "adding fractions, then inverting and multiplying"
                },
                {
                  "step": "$14\\,\\dfrac{2}{5}$.",
                  "reason": "the average speed, in mph"
                }
              ]
            },
            {
              "prompt": "Find the average speed, in mph, of a round trip made out at $9$ mph and back at $18$ mph.",
              "answer": "12",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let the one-way distance be $D$ miles. The time out is $\\dfrac{D}{9}$ hours, and the time back is $\\dfrac{D}{18}$ hours.",
                  "reason": "a trip at constant speed takes its distance divided by its speed"
                },
                {
                  "step": "The average speed is $\\dfrac{2D}{\\frac{D}{9}+\\frac{D}{18}}=\\dfrac{2}{\\frac{1}{9}+\\frac{1}{18}}$ mph.",
                  "reason": "average speed is total distance divided by total time, not the mean of the speeds; then the distributive law and cancelling $D$"
                },
                {
                  "step": "Since $\\dfrac{1}{9}+\\dfrac{1}{18}=\\dfrac{1}{6}$, the average speed is $2\\times6=12$ mph.",
                  "reason": "adding fractions, then inverting and multiplying"
                },
                {
                  "step": "$12$.",
                  "reason": "the average speed, in mph"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t22-k2",
      "forms": [
        {
          "example": {
            "problem": "Find by how many percent the travel time between two towns shortens. The constant speed rises by $\\dfrac{1}{3}$ of itself.",
            "lines": [
              {
                "step": "Let the distance be $D$ and the old speed $s$. The old time is $I=\\dfrac{D}{s}$.",
                "reason": "a trip at constant speed takes its distance divided by its speed"
              },
              {
                "step": "The new speed is $s+\\dfrac{1}{3}s=\\dfrac{4}{3}s$, so the new time is $F=\\dfrac{D}{\\dfrac{4}{3}s}=\\dfrac{3}{4}I$.",
                "reason": "the distributive law, then inverting and multiplying"
              },
              {
                "step": "So $I-F=\\left(1-\\dfrac{3}{4}\\right)I=\\dfrac{1}{4}I$, and $\\dfrac{I-F}{I}=\\dfrac{1}{4}$.",
                "reason": "the distributive law, then cancelling $I$"
              },
              {
                "step": "$25\\%$.",
                "reason": "the fraction $\\dfrac{1}{4}$ written as a percent"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find by how many percent the travel time between two towns shortens. The constant speed rises by $\\dfrac{1}{4}$ of itself.",
              "answer": "20%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "Let the distance be $D$ and the old speed $s$. The old time is $I=\\dfrac{D}{s}$.",
                  "reason": "a trip at constant speed takes its distance divided by its speed"
                },
                {
                  "step": "The new speed is $s+\\dfrac{1}{4}s=\\dfrac{5}{4}s$, so the new time is $F=\\dfrac{D}{\\dfrac{5}{4}s}=\\dfrac{4}{5}I$.",
                  "reason": "the distributive law, then inverting and multiplying"
                },
                {
                  "step": "So $I-F=\\left(1-\\dfrac{4}{5}\\right)I=\\dfrac{1}{5}I$, and $\\dfrac{I-F}{I}=\\dfrac{1}{5}$.",
                  "reason": "the distributive law, then cancelling $I$"
                },
                {
                  "step": "$20\\%$.",
                  "reason": "the fraction $\\dfrac{1}{5}$ written as a percent"
                }
              ]
            },
            {
              "prompt": "Find by how many percent the travel time between two towns shortens. The constant speed rises by $\\dfrac{3}{5}$ of itself.",
              "answer": "37.5%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "Let the distance be $D$ and the old speed $s$. The old time is $I=\\dfrac{D}{s}$.",
                  "reason": "a trip at constant speed takes its distance divided by its speed"
                },
                {
                  "step": "The new speed is $s+\\dfrac{3}{5}s=\\dfrac{8}{5}s$, so the new time is $F=\\dfrac{D}{\\dfrac{8}{5}s}=\\dfrac{5}{8}I$.",
                  "reason": "the distributive law, then inverting and multiplying"
                },
                {
                  "step": "So $I-F=\\left(1-\\dfrac{5}{8}\\right)I=\\dfrac{3}{8}I$, and $\\dfrac{I-F}{I}=\\dfrac{3}{8}$.",
                  "reason": "the distributive law, then cancelling $I$"
                },
                {
                  "step": "$37.5\\%$.",
                  "reason": "the fraction $\\dfrac{3}{8}$ written as a percent"
                }
              ]
            },
            {
              "prompt": "Find by how many percent the travel time between two towns shortens. The constant speed rises by $\\dfrac{2}{3}$ of itself.",
              "answer": "40%",
              "form": "Answer as a percent, as in 42.5%.",
              "lines": [
                {
                  "step": "Let the distance be $D$ and the old speed $s$. The old time is $I=\\dfrac{D}{s}$.",
                  "reason": "a trip at constant speed takes its distance divided by its speed"
                },
                {
                  "step": "The new speed is $s+\\dfrac{2}{3}s=\\dfrac{5}{3}s$, so the new time is $F=\\dfrac{D}{\\dfrac{5}{3}s}=\\dfrac{3}{5}I$.",
                  "reason": "the distributive law, then inverting and multiplying"
                },
                {
                  "step": "So $I-F=\\left(1-\\dfrac{3}{5}\\right)I=\\dfrac{2}{5}I$, and $\\dfrac{I-F}{I}=\\dfrac{2}{5}$.",
                  "reason": "the distributive law, then cancelling $I$"
                },
                {
                  "step": "$40\\%$.",
                  "reason": "the fraction $\\dfrac{2}{5}$ written as a percent"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how many minutes a tub takes to fill before the flow rate drops by $35\\%$. After the drop, it takes $10$ minutes at a constant rate.",
            "lines": [
              {
                "step": "Let the old rate be $R$ and the amount of water $V$. The old time is $\\dfrac{V}{R}$.",
                "reason": "time at a constant rate is the amount divided by the rate"
              },
              {
                "step": "The new rate is $\\left(1-\\dfrac{35}{100}\\right)R=\\dfrac{13}{20}R$, so the new time is $\\dfrac{V}{\\dfrac{13}{20}R}=\\dfrac{20}{13}\\times\\dfrac{V}{R}$.",
                "reason": "the distributive law, then inverting and multiplying"
              },
              {
                "step": "So the old time is $\\dfrac{13}{20}$ of the new time, which is $\\dfrac{13}{20}\\times10=\\dfrac{13}{2}$ minutes.",
                "reason": "multiplying both sides by the reciprocal of the factor"
              },
              {
                "step": "$6\\,\\dfrac{1}{2}$.",
                "reason": "the old time, in minutes"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many minutes a tub takes to fill before the flow rate drops by $20\\%$. After the drop, it takes $15$ minutes at a constant rate.",
              "answer": "12",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let the old rate be $R$ and the amount of water $V$. The old time is $\\dfrac{V}{R}$.",
                  "reason": "time at a constant rate is the amount divided by the rate"
                },
                {
                  "step": "The new rate is $\\left(1-\\dfrac{20}{100}\\right)R=\\dfrac{4}{5}R$, so the new time is $\\dfrac{V}{\\dfrac{4}{5}R}=\\dfrac{5}{4}\\times\\dfrac{V}{R}$.",
                  "reason": "the distributive law, then inverting and multiplying"
                },
                {
                  "step": "So the old time is $\\dfrac{4}{5}$ of the new time, which is $\\dfrac{4}{5}\\times15=12$ minutes.",
                  "reason": "multiplying both sides by the reciprocal of the factor"
                },
                {
                  "step": "$12$.",
                  "reason": "the old time, in minutes"
                }
              ]
            },
            {
              "prompt": "Find how many minutes a tub takes to fill before the flow rate drops by $25\\%$. After the drop, it takes $12$ minutes at a constant rate.",
              "answer": "9",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let the old rate be $R$ and the amount of water $V$. The old time is $\\dfrac{V}{R}$.",
                  "reason": "time at a constant rate is the amount divided by the rate"
                },
                {
                  "step": "The new rate is $\\left(1-\\dfrac{25}{100}\\right)R=\\dfrac{3}{4}R$, so the new time is $\\dfrac{V}{\\dfrac{3}{4}R}=\\dfrac{4}{3}\\times\\dfrac{V}{R}$.",
                  "reason": "the distributive law, then inverting and multiplying"
                },
                {
                  "step": "So the old time is $\\dfrac{3}{4}$ of the new time, which is $\\dfrac{3}{4}\\times12=9$ minutes.",
                  "reason": "multiplying both sides by the reciprocal of the factor"
                },
                {
                  "step": "$9$.",
                  "reason": "the old time, in minutes"
                }
              ]
            },
            {
              "prompt": "Find how many minutes a tub takes to fill before the flow rate drops by $40\\%$. After the drop, it takes $10$ minutes at a constant rate.",
              "answer": "6",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let the old rate be $R$ and the amount of water $V$. The old time is $\\dfrac{V}{R}$.",
                  "reason": "time at a constant rate is the amount divided by the rate"
                },
                {
                  "step": "The new rate is $\\left(1-\\dfrac{40}{100}\\right)R=\\dfrac{3}{5}R$, so the new time is $\\dfrac{V}{\\dfrac{3}{5}R}=\\dfrac{5}{3}\\times\\dfrac{V}{R}$.",
                  "reason": "the distributive law, then inverting and multiplying"
                },
                {
                  "step": "So the old time is $\\dfrac{3}{5}$ of the new time, which is $\\dfrac{3}{5}\\times10=6$ minutes.",
                  "reason": "multiplying both sides by the reciprocal of the factor"
                },
                {
                  "step": "$6$.",
                  "reason": "the old time, in minutes"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t22-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the new weight, in lbs, of $300$ lbs of cucumbers that are $99\\%$ water by weight. After some water evaporates, they are $98\\%$ water by weight.",
            "lines": [
              {
                "step": "The part that is not water is $1\\%$ of $300$ lbs, which is $\\dfrac{1}{100}\\times300=3$ lbs.",
                "reason": "what is not water is $100\\%$ minus the $99\\%$ that is water"
              },
              {
                "step": "That part stays $3$ lbs.",
                "reason": "only water evaporates"
              },
              {
                "step": "After drying, that part is $2\\%$ of the new weight $w$, so $3=\\dfrac{2}{100}\\times w$ and $w=\\dfrac{100\\times3}{2}=150$.",
                "reason": "what is not water is now $100\\%$ minus $98\\%$; then multiplying both sides by $\\dfrac{100}{2}$"
              },
              {
                "step": "$150$.",
                "reason": "the new weight, in lbs"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the new weight, in lbs, of $200$ lbs of cucumbers that are $99\\%$ water by weight. After some water evaporates, they are $96\\%$ water by weight.",
              "answer": "50",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The part that is not water is $1\\%$ of $200$ lbs, which is $\\dfrac{1}{100}\\times200=2$ lbs.",
                  "reason": "what is not water is $100\\%$ minus the $99\\%$ that is water"
                },
                {
                  "step": "That part stays $2$ lbs.",
                  "reason": "only water evaporates"
                },
                {
                  "step": "After drying, that part is $4\\%$ of the new weight $w$, so $2=\\dfrac{4}{100}\\times w$ and $w=\\dfrac{100\\times2}{4}=50$.",
                  "reason": "what is not water is now $100\\%$ minus $96\\%$; then multiplying both sides by $\\dfrac{100}{4}$"
                },
                {
                  "step": "$50$.",
                  "reason": "the new weight, in lbs"
                }
              ]
            },
            {
              "prompt": "Find the new weight, in lbs, of $500$ lbs of melons that are $98\\%$ water by weight. After some water evaporates, they are $95\\%$ water by weight.",
              "answer": "200",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The part that is not water is $2\\%$ of $500$ lbs, which is $\\dfrac{2}{100}\\times500=10$ lbs.",
                  "reason": "what is not water is $100\\%$ minus the $98\\%$ that is water"
                },
                {
                  "step": "That part stays $10$ lbs.",
                  "reason": "only water evaporates"
                },
                {
                  "step": "After drying, that part is $5\\%$ of the new weight $w$, so $10=\\dfrac{5}{100}\\times w$ and $w=\\dfrac{100\\times10}{5}=200$.",
                  "reason": "what is not water is now $100\\%$ minus $95\\%$; then multiplying both sides by $\\dfrac{100}{5}$"
                },
                {
                  "step": "$200$.",
                  "reason": "the new weight, in lbs"
                }
              ]
            },
            {
              "prompt": "Find the new weight, in lbs, of $400$ lbs of grapes that are $90\\%$ water by weight. After some water evaporates, they are $80\\%$ water by weight.",
              "answer": "200",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The part that is not water is $10\\%$ of $400$ lbs, which is $\\dfrac{10}{100}\\times400=40$ lbs.",
                  "reason": "what is not water is $100\\%$ minus the $90\\%$ that is water"
                },
                {
                  "step": "That part stays $40$ lbs.",
                  "reason": "only water evaporates"
                },
                {
                  "step": "After drying, that part is $20\\%$ of the new weight $w$, so $40=\\dfrac{20}{100}\\times w$ and $w=\\dfrac{100\\times40}{20}=200$.",
                  "reason": "what is not water is now $100\\%$ minus $80\\%$; then multiplying both sides by $\\dfrac{100}{20}$"
                },
                {
                  "step": "$200$.",
                  "reason": "the new weight, in lbs"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the proof of the liquid left when $90\\%$ of the alcohol in a $120$-proof drink evaporates. None of its other fluid evaporates. A drink of $200$ proof is all alcohol by volume.",
            "lines": [
              {
                "step": "Take $1$ unit of the drink. It holds $\\dfrac{120}{200}=\\dfrac{3}{5}$ unit of alcohol and $\\dfrac{2}{5}$ unit of other fluid.",
                "reason": "a drink of $200$ proof is all alcohol by volume"
              },
              {
                "step": "After $90\\%$ of the alcohol evaporates, $\\dfrac{1}{10}\\times\\dfrac{3}{5}=\\dfrac{3}{50}$ unit of alcohol remains, and still $\\dfrac{2}{5}$ unit of other fluid.",
                "reason": "only alcohol evaporates"
              },
              {
                "step": "The alcohol is now $\\dfrac{3}{50}\\div\\left(\\dfrac{3}{50}+\\dfrac{2}{5}\\right)=\\dfrac{3}{23}$ of the liquid, so the proof is $200\\times\\dfrac{3}{23}=\\dfrac{600}{23}$.",
                "reason": "the fraction of alcohol in the liquid left; then all alcohol is $200$ proof"
              },
              {
                "step": "$\\dfrac{600}{23}$.",
                "reason": "the new proof"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the proof of the liquid left when $50\\%$ of the alcohol in an $80$-proof drink evaporates. None of its other fluid evaporates. A drink of $200$ proof is all alcohol by volume.",
              "answer": "50",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Take $1$ unit of the drink. It holds $\\dfrac{80}{200}=\\dfrac{2}{5}$ unit of alcohol and $\\dfrac{3}{5}$ unit of other fluid.",
                  "reason": "a drink of $200$ proof is all alcohol by volume"
                },
                {
                  "step": "After $50\\%$ of the alcohol evaporates, $\\dfrac{1}{2}\\times\\dfrac{2}{5}=\\dfrac{1}{5}$ unit of alcohol remains, and still $\\dfrac{3}{5}$ unit of other fluid.",
                  "reason": "only alcohol evaporates"
                },
                {
                  "step": "The alcohol is now $\\dfrac{1}{5}\\div\\left(\\dfrac{1}{5}+\\dfrac{3}{5}\\right)=\\dfrac{1}{4}$ of the liquid, so the proof is $200\\times\\dfrac{1}{4}=50$.",
                  "reason": "the fraction of alcohol in the liquid left; then all alcohol is $200$ proof"
                },
                {
                  "step": "$50$.",
                  "reason": "the new proof"
                }
              ]
            },
            {
              "prompt": "Find the proof of the liquid left when $75\\%$ of the alcohol in a $100$-proof drink evaporates. None of its other fluid evaporates. A drink of $200$ proof is all alcohol by volume.",
              "answer": "40",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Take $1$ unit of the drink. It holds $\\dfrac{100}{200}=\\dfrac{1}{2}$ unit of alcohol and $\\dfrac{1}{2}$ unit of other fluid.",
                  "reason": "a drink of $200$ proof is all alcohol by volume"
                },
                {
                  "step": "After $75\\%$ of the alcohol evaporates, $\\dfrac{1}{4}\\times\\dfrac{1}{2}=\\dfrac{1}{8}$ unit of alcohol remains, and still $\\dfrac{1}{2}$ unit of other fluid.",
                  "reason": "only alcohol evaporates"
                },
                {
                  "step": "The alcohol is now $\\dfrac{1}{8}\\div\\left(\\dfrac{1}{8}+\\dfrac{1}{2}\\right)=\\dfrac{1}{5}$ of the liquid, so the proof is $200\\times\\dfrac{1}{5}=40$.",
                  "reason": "the fraction of alcohol in the liquid left; then all alcohol is $200$ proof"
                },
                {
                  "step": "$40$.",
                  "reason": "the new proof"
                }
              ]
            },
            {
              "prompt": "Find the proof of the liquid left when $50\\%$ of the alcohol in a $150$-proof drink evaporates. None of its other fluid evaporates. A drink of $200$ proof is all alcohol by volume.",
              "answer": "120",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Take $1$ unit of the drink. It holds $\\dfrac{150}{200}=\\dfrac{3}{4}$ unit of alcohol and $\\dfrac{1}{4}$ unit of other fluid.",
                  "reason": "a drink of $200$ proof is all alcohol by volume"
                },
                {
                  "step": "After $50\\%$ of the alcohol evaporates, $\\dfrac{1}{2}\\times\\dfrac{3}{4}=\\dfrac{3}{8}$ unit of alcohol remains, and still $\\dfrac{1}{4}$ unit of other fluid.",
                  "reason": "only alcohol evaporates"
                },
                {
                  "step": "The alcohol is now $\\dfrac{3}{8}\\div\\left(\\dfrac{3}{8}+\\dfrac{1}{4}\\right)=\\dfrac{3}{5}$ of the liquid, so the proof is $200\\times\\dfrac{3}{5}=120$.",
                  "reason": "the fraction of alcohol in the liquid left; then all alcohol is $200$ proof"
                },
                {
                  "step": "$120$.",
                  "reason": "the new proof"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t22-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the amount of wine, in cc, that a kettle of tea gains. A spoonful of $5$ cc of tea goes into a bottle of $1\\,000$ cc of wine. Then a spoonful of the stirred mixture goes back into the kettle.",
            "lines": [
              {
                "step": "After the spoonful of tea goes in, the bottle holds $1\\,000+5=1\\,005$ cc, of which $\\dfrac{1\\,000}{1\\,005}$ is wine.",
                "reason": "the spoonful adds its tea to the wine"
              },
              {
                "step": "A spoonful of the stirred mixture carries $\\dfrac{1\\,000}{1\\,005}\\times5$ cc of wine.",
                "reason": "a spoonful of a stirred mixture holds the same fraction of wine as the whole"
              },
              {
                "step": "So the kettle gains $\\dfrac{5\\,000}{1\\,005}=\\dfrac{1\\,000}{201}$ cc of wine.",
                "reason": "multiplying a fraction by a whole number, then the cancellation law"
              },
              {
                "step": "$\\dfrac{1\\,000}{201}$.",
                "reason": "the wine in the kettle, in cc"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the amount of wine, in cc, that a kettle of tea gains. A spoonful of $10$ cc of tea goes into a bottle of $90$ cc of wine. Then a spoonful of the stirred mixture goes back into the kettle.",
              "answer": "9",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "After the spoonful of tea goes in, the bottle holds $90+10=100$ cc, of which $\\dfrac{90}{100}$ is wine.",
                  "reason": "the spoonful adds its tea to the wine"
                },
                {
                  "step": "A spoonful of the stirred mixture carries $\\dfrac{90}{100}\\times10$ cc of wine.",
                  "reason": "a spoonful of a stirred mixture holds the same fraction of wine as the whole"
                },
                {
                  "step": "So the kettle gains $\\dfrac{900}{100}=9$ cc of wine.",
                  "reason": "multiplying a fraction by a whole number, then the cancellation law"
                },
                {
                  "step": "$9$.",
                  "reason": "the wine in the kettle, in cc"
                }
              ]
            },
            {
              "prompt": "Find the amount of wine, in cc, that a kettle of tea gains. A spoonful of $5$ cc of tea goes into a bottle of $20$ cc of wine. Then a spoonful of the stirred mixture goes back into the kettle.",
              "answer": "4",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "After the spoonful of tea goes in, the bottle holds $20+5=25$ cc, of which $\\dfrac{20}{25}$ is wine.",
                  "reason": "the spoonful adds its tea to the wine"
                },
                {
                  "step": "A spoonful of the stirred mixture carries $\\dfrac{20}{25}\\times5$ cc of wine.",
                  "reason": "a spoonful of a stirred mixture holds the same fraction of wine as the whole"
                },
                {
                  "step": "So the kettle gains $\\dfrac{100}{25}=4$ cc of wine.",
                  "reason": "multiplying a fraction by a whole number, then the cancellation law"
                },
                {
                  "step": "$4$.",
                  "reason": "the wine in the kettle, in cc"
                }
              ]
            },
            {
              "prompt": "Find the amount of wine, in cc, that a kettle of tea gains. A spoonful of $8$ cc of tea goes into a bottle of $72$ cc of wine. Then a spoonful of the stirred mixture goes back into the kettle.",
              "answer": "36/5",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "After the spoonful of tea goes in, the bottle holds $72+8=80$ cc, of which $\\dfrac{72}{80}$ is wine.",
                  "reason": "the spoonful adds its tea to the wine"
                },
                {
                  "step": "A spoonful of the stirred mixture carries $\\dfrac{72}{80}\\times8$ cc of wine.",
                  "reason": "a spoonful of a stirred mixture holds the same fraction of wine as the whole"
                },
                {
                  "step": "So the kettle gains $\\dfrac{576}{80}=\\dfrac{36}{5}$ cc of wine.",
                  "reason": "multiplying a fraction by a whole number, then the cancellation law"
                },
                {
                  "step": "$\\dfrac{36}{5}$.",
                  "reason": "the wine in the kettle, in cc"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t22-k5",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{12}{5}$.",
            "figure": {
              "file": "place:line:12/5",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "$12=2\\times 5+2$, so $\\frac{12}{5}=2+\\frac{2}{5}$.",
                "reason": "12 copies of $\\frac{1}{5}$ hold 2 groups of 5 copies, each group making 1, with 2 copies left over"
              },
              {
                "step": "The mark lies between 2 and 3, $\\frac{2}{5}$ of the way from 2 to 3.",
                "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 2 of the 5 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:12/5",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 12/5 marked, between 2 and 3."
                }
              },
              {
                "step": "$\\frac{2}{5}=\\frac{2\\times 2}{5\\times 2}=\\frac{4}{10}=0.4$.",
                "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$2.4$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:12/5",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 12/5 lies at 2.4, between 2 and 3."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{18}{5}$.",
              "answer": "18/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$18=3\\times 5+3$, so $\\frac{18}{5}=3+\\frac{3}{5}$.",
                  "reason": "18 copies of $\\frac{1}{5}$ hold 3 groups of 5 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{3}{5}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 3 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.6$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:18/5",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 18/5 lies at 3.6, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{13}{5}$.",
              "answer": "13/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$13=2\\times 5+3$, so $\\frac{13}{5}=2+\\frac{3}{5}$.",
                  "reason": "13 copies of $\\frac{1}{5}$ hold 2 groups of 5 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{3}{5}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 3 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$2.6$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:13/5",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 13/5 lies at 2.6, between 2 and 3."
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
            }
          ]
        },
        {
          "example": {
            "problem": "Place $125\\%$.",
            "figure": {
              "file": "place:line:125%",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$125\\%=\\frac{125}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{125}{100}=1.25$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 2 and 5 hundredths follow it, so the mark lies past the 2nd cut and short of the next, between $1.2$ and $1.3$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:125%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 125% marked, between 1 and 2."
                }
              },
              {
                "step": "$1.25$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:125%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 125% lies at 1.25, in the tenth from 1.2 to 1.3, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $235\\%$.",
              "answer": "235%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$235\\%=\\frac{235}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{235}{100}=2.35$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 3 and 5 hundredths follow it, so the mark lies past the 3rd cut and short of the next, between $2.3$ and $2.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.35$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:235%",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 235% lies at 2.35, in the tenth from 2.3 to 2.4, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $85\\%$.",
              "answer": "85%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$85\\%=\\frac{85}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{85}{100}=0.85$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 8 and 5 hundredths follow it, so the mark lies past the 8th cut and short of the next, between $0.8$ and $0.9$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.85$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:85%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 85% lies at 0.85, in the tenth from 0.8 to 0.9, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $62\\%$.",
              "answer": "62%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$62\\%=\\frac{62}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{62}{100}=0.62$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 6 and 2 hundredths follow it, so the mark lies past the 6th cut and short of the next, between $0.6$ and $0.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.62$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:62%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 62% lies at 0.62, in the tenth from 0.6 to 0.7, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $170\\%$.",
            "figure": {
              "file": "place:line:170%",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$170\\%=\\frac{170}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{170}{100}=1.7$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 7 and no hundredths follow it, so the mark is the 7th cut of the unit from $1$ to $2$, at $1.7$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:170%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 170% marked, between 1 and 2."
                }
              },
              {
                "step": "$1.7$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:170%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 170% lies at 1.7, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $30\\%$.",
              "answer": "30%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$30\\%=\\frac{30}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{30}{100}=0.3$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 3 and no hundredths follow it, so the mark is the 3rd cut of the unit from $0$ to $1$, at $0.3$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.3$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:30%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 30% lies at 0.3, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $220\\%$.",
              "answer": "220%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$220\\%=\\frac{220}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{220}{100}=2.2$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 2 and no hundredths follow it, so the mark is the 2nd cut of the unit from $2$ to $3$, at $2.2$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.2$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:220%",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 220% lies at 2.2, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $60\\%$.",
              "answer": "60%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$60\\%=\\frac{60}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{60}{100}=0.6$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 6 and no hundredths follow it, so the mark is the 6th cut of the unit from $0$ to $1$, at $0.6$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.6$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:60%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 60% lies at 0.6, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{17}{10}$.",
            "figure": {
              "file": "place:line:17/10",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$17=1\\times 10+7$, so $\\frac{17}{10}=1+\\frac{7}{10}$.",
                "reason": "17 copies of $\\frac{1}{10}$ hold 1 group of 10 copies, each group making 1, with 7 copies left over"
              },
              {
                "step": "The mark lies between 1 and 2, $\\frac{7}{10}$ of the way from 1 to 2.",
                "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 7 of the 10 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:17/10",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 17/10 marked, between 1 and 2."
                }
              },
              {
                "step": "$\\frac{7}{10}=0.7$.",
                "reason": "a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$1.7$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:17/10",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 17/10 lies at 1.7, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{23}{10}$.",
              "answer": "23/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$23=2\\times 10+3$, so $\\frac{23}{10}=2+\\frac{3}{10}$.",
                  "reason": "23 copies of $\\frac{1}{10}$ hold 2 groups of 10 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{3}{10}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 3 of the 10 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{10}=0.3$.",
                  "reason": "a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$2.3$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:23/10",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 23/10 lies at 2.3, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{31}{10}$.",
              "answer": "31/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$31=3\\times 10+1$, so $\\frac{31}{10}=3+\\frac{1}{10}$.",
                  "reason": "31 copies of $\\frac{1}{10}$ hold 3 groups of 10 copies, each group making 1, with 1 copy left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{1}{10}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 1 of the 10 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{1}{10}=0.1$.",
                  "reason": "a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.1$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:31/10",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 31/10 lies at 3.1, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{19}{10}$.",
              "answer": "19/10",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$19=1\\times 10+9$, so $\\frac{19}{10}=1+\\frac{9}{10}$.",
                  "reason": "19 copies of $\\frac{1}{10}$ hold 1 group of 10 copies, each group making 1, with 9 copies left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{9}{10}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 9 of the 10 equal parts of that unit come before it"
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
            }
          ]
        }
      ]
    }
  ],
  "proofs": [
    {
      "id": "t22-r1",
      "method": "direct proof",
      "statement": "A round trip at constant speeds of $x$ mph out and $y$ mph back has average speed $\\dfrac{2xy}{x+y}$ mph.",
      "idea": "The unknown distance appears in every term of the total time. So the distributive law pulls it out, and it cancels.",
      "lines": [
        {
          "line": "Let the one-way distance be $D$ miles, with $D>0$.",
          "reason": "naming the unknown distance"
        },
        {
          "line": "The time out is $\\dfrac{D}{x}$ hours, and the time back is $\\dfrac{D}{y}$ hours.",
          "reason": "a trip at constant speed takes its distance divided by its speed"
        },
        {
          "line": "The average speed is $\\dfrac{2D}{\\frac{D}{x}+\\frac{D}{y}}$ mph.",
          "reason": "average speed is the total distance divided by the total time"
        },
        {
          "line": "Since $\\dfrac{D}{x}+\\dfrac{D}{y}=\\left(\\dfrac{1}{x}+\\dfrac{1}{y}\\right)D$, the average speed is $\\dfrac{2}{\\frac{1}{x}+\\frac{1}{y}}$ mph.",
          "reason": "the distributive law, then cancelling $D$ from the numerator and the denominator"
        },
        {
          "line": "Since $\\dfrac{1}{x}+\\dfrac{1}{y}=\\dfrac{x+y}{xy}$, the average speed is $\\dfrac{2xy}{x+y}$ mph.",
          "reason": "adding fractions, then inverting and multiplying"
        }
      ]
    },
    {
      "id": "t22-r2",
      "method": "direct proof",
      "statement": "When a constant speed rises by a third of itself, the travel time over a fixed distance shortens by $25\\%$.",
      "idea": "The new time is a fixed fraction of the old time, whatever the distance and speed. So the saving is a fixed fraction of the old time too.",
      "lines": [
        {
          "line": "Let the distance be $D$ and the old speed $s$, so the old time is $I=\\dfrac{D}{s}$.",
          "reason": "a trip at constant speed takes its distance divided by its speed"
        },
        {
          "line": "The new speed is $s+\\dfrac{1}{3}s=\\dfrac{4}{3}s$.",
          "reason": "the distributive law"
        },
        {
          "line": "The new time is $F=\\dfrac{D}{\\frac{4}{3}s}=\\dfrac{3}{4}\\times\\dfrac{D}{s}=\\dfrac{3}{4}I$.",
          "reason": "inverting and multiplying"
        },
        {
          "line": "So $I-F=\\left(1-\\dfrac{3}{4}\\right)I=\\dfrac{1}{4}I$.",
          "reason": "the distributive law"
        },
        {
          "line": "So $\\dfrac{I-F}{I}=\\dfrac{1}{4}$, which is $25\\%$, and the travel time shortens by $25\\%$.",
          "reason": "cancelling $I$, then writing $\\frac{1}{4}$ as a percent"
        }
      ]
    },
    {
      "id": "t22-r3",
      "method": "direct proof",
      "statement": "A spoonful of tea from a kettle goes into a bottle of wine. A spoonful of the mixture, stirred or not, then goes back into the kettle. The amount of tea left in the bottle equals the amount of wine in the kettle.",
      "idea": "The returned spoonful is full, so the wine it carries takes exactly the place of the tea it leaves behind.",
      "lines": [
        {
          "line": "Let the spoon hold $s$ cc. Let the spoonful that goes back hold $T$ cc of tea and $W$ cc of wine.",
          "reason": "naming the unknown amounts"
        },
        {
          "line": "So $T+W=s$.",
          "reason": "the spoonful poured back is full"
        },
        {
          "line": "The kettle now holds $W$ cc of wine.",
          "reason": "the only wine to reach the kettle is in the spoonful poured back"
        },
        {
          "line": "The bottle receives $s$ cc of tea and loses $T$ cc, so it holds $s-T$ cc of tea.",
          "reason": "the definition of subtraction"
        },
        {
          "line": "So $s-T=W$, and the tea left in the bottle equals the wine in the kettle.",
          "reason": "subtracting $T$ from both sides of $T+W=s$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t22-s1",
      "method": "direct proof",
      "statement": "Let a constant speed rise by the fraction $r$ of itself, with $r>0$. Then the travel time over a fixed distance shortens by the fraction $\\dfrac{r}{1+r}$ of the old time.",
      "check": {
        "proof": [
          {
            "line": "Let the distance be $D$ and the old speed $s$, so the old time is $I=\\dfrac{D}{s}$.",
            "reason": "a trip at constant speed takes its distance divided by its speed"
          },
          {
            "line": "The new speed is $s+rs=(1+r)s$, so the new time is $F=\\dfrac{D}{(1+r)s}=\\dfrac{1}{1+r}I$.",
            "reason": "the distributive law, then inverting and multiplying"
          },
          {
            "line": "So $I-F=\\left(1-\\dfrac{1}{1+r}\\right)I=\\dfrac{r}{1+r}I$.",
            "reason": "the distributive law, then subtracting fractions"
          },
          {
            "line": "So the time shortens by $\\dfrac{I-F}{I}=\\dfrac{r}{1+r}$ of the old time.",
            "reason": "cancelling $I$"
          }
        ]
      }
    },
    {
      "id": "t22-s2",
      "method": "direct proof",
      "statement": "A spoonful of $s$ cc of tea goes into a bottle of $b$ cc of wine. A spoonful of the stirred mixture goes back into the kettle of tea. Then the kettle gains $\\dfrac{bs}{b+s}$ cc of wine, and the bottle keeps $\\dfrac{bs}{b+s}$ cc of tea.",
      "check": {
        "proof": [
          {
            "line": "After the spoonful of tea goes in, the bottle holds $b+s$ cc. The fraction $\\dfrac{b}{b+s}$ of it is wine, and $\\dfrac{s}{b+s}$ is tea.",
            "reason": "the spoonful adds its tea to the wine"
          },
          {
            "line": "A spoonful of the stirred mixture carries $\\dfrac{b}{b+s}\\times s=\\dfrac{bs}{b+s}$ cc of wine and $\\dfrac{s}{b+s}\\times s$ cc of tea.",
            "reason": "a spoonful of a stirred mixture holds the same fractions as the whole"
          },
          {
            "line": "So the kettle gains $\\dfrac{bs}{b+s}$ cc of wine.",
            "reason": "that spoonful goes into the kettle"
          },
          {
            "line": "The bottle keeps $s-\\dfrac{s^2}{b+s}=\\dfrac{s(b+s)-s^2}{b+s}=\\dfrac{sb}{b+s}$ cc of tea.",
            "reason": "subtracting fractions, then the distributive law"
          },
          {
            "line": "So the kettle gains $\\dfrac{bs}{b+s}$ cc of wine, and the bottle keeps $\\dfrac{bs}{b+s}$ cc of tea.",
            "reason": "the commutative law of multiplication, since $sb=bs$"
          }
        ]
      }
    },
    {
      "id": "t22-s3",
      "method": "proof by cases",
      "statement": "For positive numbers $x$ and $y$, the harmonic mean $\\dfrac{2xy}{x+y}$ is at most $\\dfrac{x+y}{2}$, with equality exactly when $x=y$.",
      "check": {
        "proof": [
          {
            "line": "The claim $\\dfrac{2xy}{x+y}\\le\\dfrac{x+y}{2}$ holds exactly when $4xy\\le(x+y)^2$.",
            "reason": "cross-multiplication for positive fractions"
          },
          {
            "line": "Since $(x+y)^2=x^2+2xy+y^2$, the claim holds exactly when $2xy\\le x^2+y^2$.",
            "reason": "the distributive law, then subtracting $2xy$ from both sides"
          },
          {
            "line": "Case $x\\ge y$: write $x=y+d$ with $d\\ge0$. Then $x^2+y^2=2y^2+2yd+d^2$ and $2xy=2y^2+2yd$.",
            "reason": "the definition of $x\\ge y$, then the distributive law"
          },
          {
            "line": "So $x^2+y^2=2xy+d^2\\ge2xy$, with equality exactly when $d=0$, which is when $x=y$.",
            "reason": "adding $d^2\\ge0$ does not decrease a number, and $d^2=0$ exactly when $d=0$"
          },
          {
            "line": "Case $y>x$: the same argument with $x$ and $y$ exchanged gives $x^2+y^2>2xy$.",
            "reason": "exchanging $x$ and $y$ leaves both sides unchanged"
          },
          {
            "line": "So $\\dfrac{2xy}{x+y}\\le\\dfrac{x+y}{2}$ for all positive $x$ and $y$, with equality exactly when $x=y$.",
            "reason": "the two cases cover every pair"
          }
        ]
      }
    }
  ]
}
