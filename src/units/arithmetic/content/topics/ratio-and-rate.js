export default {
  "number": 21,
  "manyParts": false,
  "bare": {
    "prompt": "Find the two numbers whose ratio is $2:3$ and whose sum is $45$.",
    "answer": "18, 27",
    "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
    "solution": [
      "Find the two numbers whose ratio is $2:3$ and whose sum is $45$.",
      "Let the two numbers be $x=2u$ and $y=3u$, for some fraction $u$, since their ratio is $2:3$.",
      "Since $x+y=45$, this gives $2u+3u=45$, so $5u=45$, so $u=9$.",
      "Then $x=2\\times9=18$ and $y=3\\times9=27$.",
      "$18$, $27$."
    ]
  },
  "ideas": [
    {
      "name": "Ratio",
      "concrete": "The ratio $12:18$ means the same as $\\dfrac{12}{18}=\\dfrac{2}{3}$.",
      "general": "For nonzero fractions $M$ and $N$, the **ratio** of $M$ to $N$ is $a:b$ when $\\dfrac{M}{N}=\\dfrac{a}{b}$. Here $a$ and $b$ are nonzero fractions."
    },
    {
      "name": "Rate",
      "concrete": "The quantities $100$ miles and $4$ hours have the rate $\\dfrac{100}{4}=25$ miles per hour.",
      "general": "A **rate** is the quotient $\\dfrac{M}{N}$ of two quantities $M$ and $N$ measured in fixed units."
    },
    {
      "name": "Three-term ratio",
      "concrete": "Fractions $A,B,C$ with $A:B=3:8$ and $B:C=8:5$ are in the ratio $A:B:C=3:8:5$. Then $\\dfrac{A}{3}=\\dfrac{B}{8}=\\dfrac{C}{5}$.",
      "general": "For fractions $A,B,C$ and nonzero fractions $\\ell,m,n$: $A,B,C$ are in the **three-term ratio** $\\ell:m:n$, written $A:B:C=\\ell:m:n$, when $A:B=\\ell:m$ and $B:C=m:n$. Then $\\dfrac{A}{\\ell}=\\dfrac{B}{m}=\\dfrac{C}{n}$."
    }
  ],
  "kinds": [
    {
      "id": "t21-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the numbers of boys and girls in a class of $27$ pupils. The ratio of boys to girls is $4:5$.",
            "lines": [
              {
                "step": "Let $B$ be the number of boys and $G$ the number of girls. Then $B=4u$ and $G=5u$, for some fraction $u$.",
                "reason": "the definition of ratio, since the ratio of $B$ to $G$ is $4:5$"
              },
              {
                "step": "Substituting $B=4u$ and $G=5u$ into $B+G=27$ gives $4u+5u=27$, so $9u=27$.",
                "reason": "substituting the values of $B$ and $G$, then the distributive law"
              },
              {
                "step": "So $u=3$.",
                "reason": "dividing both sides by $9$"
              },
              {
                "step": "So $B=4\\times3=12$ and $G=5\\times3=15$.",
                "reason": "substituting the value of $u$"
              },
              {
                "step": "$12$, $15$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the two numbers whose ratio is $2:3$ and whose sum is $40$.",
              "answer": "16, 24",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $x$ be the first number and $y$ the second. Then $x=2u$ and $y=3u$, for some fraction $u$.",
                  "reason": "the definition of ratio, since the ratio of $x$ to $y$ is $2:3$"
                },
                {
                  "step": "Substituting $x=2u$ and $y=3u$ into $x+y=40$ gives $2u+3u=40$, so $5u=40$.",
                  "reason": "substituting the values of $x$ and $y$, then the distributive law"
                },
                {
                  "step": "So $u=8$.",
                  "reason": "dividing both sides by $5$"
                },
                {
                  "step": "So $x=2\\times8=16$ and $y=3\\times8=24$.",
                  "reason": "substituting the value of $u$"
                },
                {
                  "step": "$16$, $24$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the two numbers whose ratio is $3:4$ and whose sum is $63$.",
              "answer": "27, 36",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $x$ be the first number and $y$ the second. Then $x=3u$ and $y=4u$, for some fraction $u$.",
                  "reason": "the definition of ratio, since the ratio of $x$ to $y$ is $3:4$"
                },
                {
                  "step": "Substituting $x=3u$ and $y=4u$ into $x+y=63$ gives $3u+4u=63$, so $7u=63$.",
                  "reason": "substituting the values of $x$ and $y$, then the distributive law"
                },
                {
                  "step": "So $u=9$.",
                  "reason": "dividing both sides by $7$"
                },
                {
                  "step": "So $x=3\\times9=27$ and $y=4\\times9=36$.",
                  "reason": "substituting the value of $u$"
                },
                {
                  "step": "$27$, $36$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the two numbers whose ratio is $5:7$ and whose sum is $72$.",
              "answer": "30, 42",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $x$ be the first number and $y$ the second. Then $x=5u$ and $y=7u$, for some fraction $u$.",
                  "reason": "the definition of ratio, since the ratio of $x$ to $y$ is $5:7$"
                },
                {
                  "step": "Substituting $x=5u$ and $y=7u$ into $x+y=72$ gives $5u+7u=72$, so $12u=72$.",
                  "reason": "substituting the values of $x$ and $y$, then the distributive law"
                },
                {
                  "step": "So $u=6$.",
                  "reason": "dividing both sides by $12$"
                },
                {
                  "step": "So $x=5\\times6=30$ and $y=7\\times6=42$.",
                  "reason": "substituting the value of $u$"
                },
                {
                  "step": "$30$, $42$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $A$ and $C$, in that order, if the fractions $A,B,C$ are in the ratio $3:8:5$, and $B=20$.",
            "lines": [
              {
                "step": "By the given ratio, $\\dfrac{A}{3}=\\dfrac{B}{8}=\\dfrac{C}{5}$.",
                "reason": "the meaning of a three-term ratio"
              },
              {
                "step": "Since $B=20$, $\\dfrac{B}{8}=\\dfrac{20}{8}=\\dfrac{5}{2}$.",
                "reason": "substituting the value of $B$, then simplifying"
              },
              {
                "step": "So $A=3\\times\\dfrac{5}{2}=\\dfrac{15}{2}$ and $C=5\\times\\dfrac{5}{2}=\\dfrac{25}{2}$.",
                "reason": "multiplying each ratio term by the common value $\\dfrac52$"
              },
              {
                "step": "$\\dfrac{15}{2}$, $\\dfrac{25}{2}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $A$ and $C$, in that order, if the fractions $A,B,C$ are in the ratio $2:3:5$, and $B=18$.",
              "answer": "12, 30",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "By the given ratio, $\\dfrac{A}{2}=\\dfrac{B}{3}=\\dfrac{C}{5}$.",
                  "reason": "the meaning of a three-term ratio"
                },
                {
                  "step": "Since $B=18$, $\\dfrac{B}{3}=\\dfrac{18}{3}=6$.",
                  "reason": "substituting the value of $B$, then simplifying"
                },
                {
                  "step": "So $A=2\\times6=12$ and $C=5\\times6=30$.",
                  "reason": "multiplying each ratio term by the common value $6$"
                },
                {
                  "step": "$12$, $30$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find $A$ and $C$, in that order, if the fractions $A,B,C$ are in the ratio $4:5:9$, and $B=25$.",
              "answer": "20, 45",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "By the given ratio, $\\dfrac{A}{4}=\\dfrac{B}{5}=\\dfrac{C}{9}$.",
                  "reason": "the meaning of a three-term ratio"
                },
                {
                  "step": "Since $B=25$, $\\dfrac{B}{5}=\\dfrac{25}{5}=5$.",
                  "reason": "substituting the value of $B$, then simplifying"
                },
                {
                  "step": "So $A=4\\times5=20$ and $C=9\\times5=45$.",
                  "reason": "multiplying each ratio term by the common value $5$"
                },
                {
                  "step": "$20$, $45$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find $A$ and $C$, in that order, if the fractions $A,B,C$ are in the ratio $1:4:7$, and $B=16$.",
              "answer": "4, 28",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "By the given ratio, $\\dfrac{A}{1}=\\dfrac{B}{4}=\\dfrac{C}{7}$.",
                  "reason": "the meaning of a three-term ratio"
                },
                {
                  "step": "Since $B=16$, $\\dfrac{B}{4}=\\dfrac{16}{4}=4$.",
                  "reason": "substituting the value of $B$, then simplifying"
                },
                {
                  "step": "So $A=1\\times4=4$ and $C=7\\times4=28$.",
                  "reason": "multiplying each ratio term by the common value $4$"
                },
                {
                  "step": "$4$, $28$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find each share, in the order of the ratio. Three people share $360$ dollars, and their shares are in the ratio $2:3:7$.",
            "lines": [
              {
                "step": "Let the shares be $x$, $y$ and $z$ dollars. Then $x=2u$, $y=3u$ and $z=7u$, for some fraction $u$.",
                "reason": "the meaning of a three-term ratio, since the shares are in the ratio $2:3:7$"
              },
              {
                "step": "Substituting $x=2u$, $y=3u$ and $z=7u$ into $x+y+z=360$ gives $2u+3u+7u=360$, so $12u=360$.",
                "reason": "substituting the values of $x$, $y$ and $z$, then the distributive law"
              },
              {
                "step": "So $u=30$.",
                "reason": "dividing both sides by $12$"
              },
              {
                "step": "So $x=2\\times30=60$, $y=3\\times30=90$ and $z=7\\times30=210$.",
                "reason": "substituting the value of $u$"
              },
              {
                "step": "$60$, $90$, $210$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find each share, in the order of the ratio. Three people share $108$ dollars, and their shares are in the ratio $3:4:5$.",
              "answer": "27, 36, 45",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let the shares be $x$, $y$ and $z$ dollars. Then $x=3u$, $y=4u$ and $z=5u$, for some fraction $u$.",
                  "reason": "the meaning of a three-term ratio, since the shares are in the ratio $3:4:5$"
                },
                {
                  "step": "Substituting $x=3u$, $y=4u$ and $z=5u$ into $x+y+z=108$ gives $3u+4u+5u=108$, so $12u=108$.",
                  "reason": "substituting the values of $x$, $y$ and $z$, then the distributive law"
                },
                {
                  "step": "So $u=9$.",
                  "reason": "dividing both sides by $12$"
                },
                {
                  "step": "So $x=3\\times9=27$, $y=4\\times9=36$ and $z=5\\times9=45$.",
                  "reason": "substituting the value of $u$"
                },
                {
                  "step": "$27$, $36$, $45$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find each share, in the order of the ratio. Three people share $65$ dollars, and their shares are in the ratio $2:5:6$.",
              "answer": "10, 25, 30",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let the shares be $x$, $y$ and $z$ dollars. Then $x=2u$, $y=5u$ and $z=6u$, for some fraction $u$.",
                  "reason": "the meaning of a three-term ratio, since the shares are in the ratio $2:5:6$"
                },
                {
                  "step": "Substituting $x=2u$, $y=5u$ and $z=6u$ into $x+y+z=65$ gives $2u+5u+6u=65$, so $13u=65$.",
                  "reason": "substituting the values of $x$, $y$ and $z$, then the distributive law"
                },
                {
                  "step": "So $u=5$.",
                  "reason": "dividing both sides by $13$"
                },
                {
                  "step": "So $x=2\\times5=10$, $y=5\\times5=25$ and $z=6\\times5=30$.",
                  "reason": "substituting the value of $u$"
                },
                {
                  "step": "$10$, $25$, $30$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find each share, in the order of the ratio. Three people share $144$ dollars, and their shares are in the ratio $4:5:9$.",
              "answer": "32, 40, 72",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let the shares be $x$, $y$ and $z$ dollars. Then $x=4u$, $y=5u$ and $z=9u$, for some fraction $u$.",
                  "reason": "the meaning of a three-term ratio, since the shares are in the ratio $4:5:9$"
                },
                {
                  "step": "Substituting $x=4u$, $y=5u$ and $z=9u$ into $x+y+z=144$ gives $4u+5u+9u=144$, so $18u=144$.",
                  "reason": "substituting the values of $x$, $y$ and $z$, then the distributive law"
                },
                {
                  "step": "So $u=8$.",
                  "reason": "dividing both sides by $18$"
                },
                {
                  "step": "So $x=4\\times8=32$, $y=5\\times8=40$ and $z=9\\times8=72$.",
                  "reason": "substituting the value of $u$"
                },
                {
                  "step": "$32$, $40$, $72$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t21-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the least number of new teachers a district must hire to improve a teacher-pupil ratio of $1:30$ to $1:25$. The number of pupils is $450$.",
            "lines": [
              {
                "step": "Let $T$ be the current number of teachers and $S=450$ the number of pupils. The given ratio is $\\dfrac{T}{S}=\\dfrac{1}{30}$.",
                "reason": "the given ratio"
              },
              {
                "step": "So $T=\\dfrac{1}{30}\\times450=15$.",
                "reason": "substituting the value of $S$"
              },
              {
                "step": "Let $n$ be the number of new teachers. The new ratio is $\\dfrac{15+n}{450}$, and it must be at least $\\dfrac{1}{25}$.",
                "reason": "the new number of teachers is $15+n$"
              },
              {
                "step": "When the new ratio equals the required ratio, $\\dfrac{15+n}{450}=\\dfrac{1}{25}$ gives $15+n=\\dfrac{450}{25}=18$, so $n=3$.",
                "reason": "cross-multiplying, then solving for $n$"
              },
              {
                "step": "$3$.",
                "reason": "the new ratio grows as the number of new teachers grows, so the equation gives the least number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least number of new teachers a district must hire to improve a teacher-pupil ratio of $1:20$ to $1:15$. The number of pupils is $600$.",
              "answer": "10",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $T$ be the current number of teachers and $S=600$ the number of pupils. The given ratio is $\\dfrac{T}{S}=\\dfrac{1}{20}$.",
                  "reason": "the given ratio"
                },
                {
                  "step": "So $T=\\dfrac{1}{20}\\times600=30$.",
                  "reason": "substituting the value of $S$"
                },
                {
                  "step": "Let $n$ be the number of new teachers. The new ratio is $\\dfrac{30+n}{600}$, and it must be at least $\\dfrac{1}{15}$.",
                  "reason": "the new number of teachers is $30+n$"
                },
                {
                  "step": "When the new ratio equals the required ratio, $\\dfrac{30+n}{600}=\\dfrac{1}{15}$ gives $30+n=\\dfrac{600}{15}=40$, so $n=10$.",
                  "reason": "cross-multiplying, then solving for $n$"
                },
                {
                  "step": "$10$.",
                  "reason": "the new ratio grows as the number of new teachers grows, so the equation gives the least number"
                }
              ]
            },
            {
              "prompt": "Find the least number of new teachers a district must hire to improve a teacher-pupil ratio of $1:18$ to $1:12$. The number of pupils is $540$.",
              "answer": "15",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $T$ be the current number of teachers and $S=540$ the number of pupils. The given ratio is $\\dfrac{T}{S}=\\dfrac{1}{18}$.",
                  "reason": "the given ratio"
                },
                {
                  "step": "So $T=\\dfrac{1}{18}\\times540=30$.",
                  "reason": "substituting the value of $S$"
                },
                {
                  "step": "Let $n$ be the number of new teachers. The new ratio is $\\dfrac{30+n}{540}$, and it must be at least $\\dfrac{1}{12}$.",
                  "reason": "the new number of teachers is $30+n$"
                },
                {
                  "step": "When the new ratio equals the required ratio, $\\dfrac{30+n}{540}=\\dfrac{1}{12}$ gives $30+n=\\dfrac{540}{12}=45$, so $n=15$.",
                  "reason": "cross-multiplying, then solving for $n$"
                },
                {
                  "step": "$15$.",
                  "reason": "the new ratio grows as the number of new teachers grows, so the equation gives the least number"
                }
              ]
            },
            {
              "prompt": "Find the least number of new teachers a district must hire to improve a teacher-pupil ratio of $1:24$ to $1:16$. The number of pupils is $480$.",
              "answer": "10",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $T$ be the current number of teachers and $S=480$ the number of pupils. The given ratio is $\\dfrac{T}{S}=\\dfrac{1}{24}$.",
                  "reason": "the given ratio"
                },
                {
                  "step": "So $T=\\dfrac{1}{24}\\times480=20$.",
                  "reason": "substituting the value of $S$"
                },
                {
                  "step": "Let $n$ be the number of new teachers. The new ratio is $\\dfrac{20+n}{480}$, and it must be at least $\\dfrac{1}{16}$.",
                  "reason": "the new number of teachers is $20+n$"
                },
                {
                  "step": "When the new ratio equals the required ratio, $\\dfrac{20+n}{480}=\\dfrac{1}{16}$ gives $20+n=\\dfrac{480}{16}=30$, so $n=10$.",
                  "reason": "cross-multiplying, then solving for $n$"
                },
                {
                  "step": "$10$.",
                  "reason": "the new ratio grows as the number of new teachers grows, so the equation gives the least number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least number of new teachers a district must hire to improve a teacher-pupil ratio of $1:24$ to $1:21$. The number of pupils is $480$.",
            "lines": [
              {
                "step": "Let $T$ be the current number of teachers and $S=480$ the number of pupils. The given ratio is $\\dfrac{T}{S}=\\dfrac{1}{24}$.",
                "reason": "the given ratio"
              },
              {
                "step": "So $T=\\dfrac{1}{24}\\times480=20$.",
                "reason": "substituting the value of $S$"
              },
              {
                "step": "Let $n$ be the number of new teachers. The new ratio is $\\dfrac{20+n}{480}$, and it must be at least $\\dfrac{1}{21}$.",
                "reason": "the new number of teachers is $20+n$"
              },
              {
                "step": "When the new ratio equals the required ratio, $\\dfrac{20+n}{480}=\\dfrac{1}{21}$ gives $20+n=\\dfrac{480}{21}=22\\,\\dfrac{6}{7}$, so $n=2\\,\\dfrac{6}{7}$.",
                "reason": "cross-multiplying, then solving for $n$"
              },
              {
                "step": "The least whole number that is at least $2\\,\\dfrac{6}{7}$ is $3$.",
                "reason": "a number of teachers is a whole number, and the new ratio grows as the number of new teachers grows"
              },
              {
                "step": "$3$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least number of new teachers a district must hire to improve a teacher-pupil ratio of $1:21$ to $1:16$. The number of pupils is $420$.",
              "answer": "7",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $T$ be the current number of teachers and $S=420$ the number of pupils. The given ratio is $\\dfrac{T}{S}=\\dfrac{1}{21}$.",
                  "reason": "the given ratio"
                },
                {
                  "step": "So $T=\\dfrac{1}{21}\\times420=20$.",
                  "reason": "substituting the value of $S$"
                },
                {
                  "step": "Let $n$ be the number of new teachers. The new ratio is $\\dfrac{20+n}{420}$, and it must be at least $\\dfrac{1}{16}$.",
                  "reason": "the new number of teachers is $20+n$"
                },
                {
                  "step": "When the new ratio equals the required ratio, $\\dfrac{20+n}{420}=\\dfrac{1}{16}$ gives $20+n=\\dfrac{420}{16}=26\\,\\dfrac{1}{4}$, so $n=6\\,\\dfrac{1}{4}$.",
                  "reason": "cross-multiplying, then solving for $n$"
                },
                {
                  "step": "The least whole number that is at least $6\\,\\dfrac{1}{4}$ is $7$.",
                  "reason": "a number of teachers is a whole number, and the new ratio grows as the number of new teachers grows"
                },
                {
                  "step": "$7$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the least number of new teachers a district must hire to improve a teacher-pupil ratio of $1:26$ to $1:23$. The number of pupils is $780$.",
              "answer": "4",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $T$ be the current number of teachers and $S=780$ the number of pupils. The given ratio is $\\dfrac{T}{S}=\\dfrac{1}{26}$.",
                  "reason": "the given ratio"
                },
                {
                  "step": "So $T=\\dfrac{1}{26}\\times780=30$.",
                  "reason": "substituting the value of $S$"
                },
                {
                  "step": "Let $n$ be the number of new teachers. The new ratio is $\\dfrac{30+n}{780}$, and it must be at least $\\dfrac{1}{23}$.",
                  "reason": "the new number of teachers is $30+n$"
                },
                {
                  "step": "When the new ratio equals the required ratio, $\\dfrac{30+n}{780}=\\dfrac{1}{23}$ gives $30+n=\\dfrac{780}{23}=33\\,\\dfrac{21}{23}$, so $n=3\\,\\dfrac{21}{23}$.",
                  "reason": "cross-multiplying, then solving for $n$"
                },
                {
                  "step": "The least whole number that is at least $3\\,\\dfrac{21}{23}$ is $4$.",
                  "reason": "a number of teachers is a whole number, and the new ratio grows as the number of new teachers grows"
                },
                {
                  "step": "$4$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the least number of new teachers a district must hire to improve a teacher-pupil ratio of $1:15$ to $1:11$. The number of pupils is $300$.",
              "answer": "8",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $T$ be the current number of teachers and $S=300$ the number of pupils. The given ratio is $\\dfrac{T}{S}=\\dfrac{1}{15}$.",
                  "reason": "the given ratio"
                },
                {
                  "step": "So $T=\\dfrac{1}{15}\\times300=20$.",
                  "reason": "substituting the value of $S$"
                },
                {
                  "step": "Let $n$ be the number of new teachers. The new ratio is $\\dfrac{20+n}{300}$, and it must be at least $\\dfrac{1}{11}$.",
                  "reason": "the new number of teachers is $20+n$"
                },
                {
                  "step": "When the new ratio equals the required ratio, $\\dfrac{20+n}{300}=\\dfrac{1}{11}$ gives $20+n=\\dfrac{300}{11}=27\\,\\dfrac{3}{11}$, so $n=7\\,\\dfrac{3}{11}$.",
                  "reason": "cross-multiplying, then solving for $n$"
                },
                {
                  "step": "The least whole number that is at least $7\\,\\dfrac{3}{11}$ is $8$.",
                  "reason": "a number of teachers is a whole number, and the new ratio grows as the number of new teachers grows"
                },
                {
                  "step": "$8$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t21-k3",
      "forms": [
        {
          "example": {
            "problem": "Find how long it takes a faucet to fill a tank of $11\\dfrac{1}{2}$ cubic feet. The faucet has a constant rate of water flow. It takes $25$ seconds to fill a container of $3\\dfrac{1}{2}$ cubic feet.",
            "lines": [
              {
                "step": "Let $t$ be the time, in seconds, to fill the tank. Let $r$ be the constant rate, in cubic feet per second.",
                "reason": "naming the unknown time and the constant rate"
              },
              {
                "step": "Then $r=\\dfrac{11\\frac{1}{2}}{t}$, and also $r=\\dfrac{3\\frac{1}{2}}{25}$.",
                "reason": "the definition of rate, applied to each container"
              },
              {
                "step": "So $\\dfrac{11\\frac{1}{2}}{t}=\\dfrac{3\\frac{1}{2}}{25}$.",
                "reason": "both equal the same constant rate $r$"
              },
              {
                "step": "Cross-multiplying gives $25\\times 11\\frac{1}{2}=3\\frac{1}{2}\\times t$, so $\\dfrac{575}{2}=\\dfrac{7}{2}t$, so $t=\\dfrac{575}{7}=82\\,\\dfrac{1}{7}$.",
                "reason": "the cross-multiplication algorithm, then solving for $t$"
              },
              {
                "step": "$\\dfrac{575}{7}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how long it takes a faucet to fill a tank of $9\\dfrac{1}{2}$ cubic feet. The faucet has a constant rate of water flow. It takes $13$ seconds to fill a container of $2\\dfrac{1}{2}$ cubic feet.",
              "answer": "247/5",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $t$ be the time, in seconds, to fill the tank. Let $r$ be the constant rate, in cubic feet per second.",
                  "reason": "naming the unknown time and the constant rate"
                },
                {
                  "step": "Then $r=\\dfrac{9\\frac{1}{2}}{t}$, and also $r=\\dfrac{2\\frac{1}{2}}{13}$.",
                  "reason": "the definition of rate, applied to each container"
                },
                {
                  "step": "So $\\dfrac{9\\frac{1}{2}}{t}=\\dfrac{2\\frac{1}{2}}{13}$.",
                  "reason": "both equal the same constant rate $r$"
                },
                {
                  "step": "Cross-multiplying gives $13\\times 9\\frac{1}{2}=2\\frac{1}{2}\\times t$, so $\\dfrac{247}{2}=\\dfrac{5}{2}t$, so $t=\\dfrac{247}{5}=49\\,\\dfrac{2}{5}$.",
                  "reason": "the cross-multiplication algorithm, then solving for $t$"
                },
                {
                  "step": "$\\dfrac{247}{5}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find how long it takes a faucet to fill a tank of $6\\dfrac{1}{2}$ cubic feet. The faucet has a constant rate of water flow. It takes $11$ seconds to fill a container of $1\\dfrac{1}{2}$ cubic feet.",
              "answer": "143/3",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $t$ be the time, in seconds, to fill the tank. Let $r$ be the constant rate, in cubic feet per second.",
                  "reason": "naming the unknown time and the constant rate"
                },
                {
                  "step": "Then $r=\\dfrac{6\\frac{1}{2}}{t}$, and also $r=\\dfrac{1\\frac{1}{2}}{11}$.",
                  "reason": "the definition of rate, applied to each container"
                },
                {
                  "step": "So $\\dfrac{6\\frac{1}{2}}{t}=\\dfrac{1\\frac{1}{2}}{11}$.",
                  "reason": "both equal the same constant rate $r$"
                },
                {
                  "step": "Cross-multiplying gives $11\\times 6\\frac{1}{2}=1\\frac{1}{2}\\times t$, so $\\dfrac{143}{2}=\\dfrac{3}{2}t$, so $t=\\dfrac{143}{3}=47\\,\\dfrac{2}{3}$.",
                  "reason": "the cross-multiplication algorithm, then solving for $t$"
                },
                {
                  "step": "$\\dfrac{143}{3}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find how long it takes a faucet to fill a tank of $13\\dfrac{1}{2}$ cubic feet. The faucet has a constant rate of water flow. It takes $7$ seconds to fill a container of $5\\dfrac{1}{2}$ cubic feet.",
              "answer": "189/11",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $t$ be the time, in seconds, to fill the tank. Let $r$ be the constant rate, in cubic feet per second.",
                  "reason": "naming the unknown time and the constant rate"
                },
                {
                  "step": "Then $r=\\dfrac{13\\frac{1}{2}}{t}$, and also $r=\\dfrac{5\\frac{1}{2}}{7}$.",
                  "reason": "the definition of rate, applied to each container"
                },
                {
                  "step": "So $\\dfrac{13\\frac{1}{2}}{t}=\\dfrac{5\\frac{1}{2}}{7}$.",
                  "reason": "both equal the same constant rate $r$"
                },
                {
                  "step": "Cross-multiplying gives $7\\times 13\\frac{1}{2}=5\\frac{1}{2}\\times t$, so $\\dfrac{189}{2}=\\dfrac{11}{2}t$, so $t=\\dfrac{189}{11}=17\\,\\dfrac{2}{11}$.",
                  "reason": "the cross-multiplication algorithm, then solving for $t$"
                },
                {
                  "step": "$\\dfrac{189}{11}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how long a faucet takes to fill a tub if its rate of water flow drops by $15\\%$. At the original constant rate, it fills the tub in $15$ minutes.",
            "lines": [
              {
                "step": "Let $V$ be the capacity of the tub and $r$ the original constant rate. Then $r=\\dfrac{V}{15}$.",
                "reason": "the definition of rate"
              },
              {
                "step": "At the reduced rate of $85\\%\\times r$, let $t$ be the new time. Then $\\dfrac{V}{t}=85\\%\\times r$.",
                "reason": "the definition of rate, at the reduced rate"
              },
              {
                "step": "So $\\dfrac{V}{t}=85\\%\\times\\dfrac{V}{15}$, and dividing both sides by $V$ gives $\\dfrac{1}{t}=\\dfrac{85}{100}\\times\\dfrac{1}{15}=\\dfrac{85}{1\\,500}$.",
                "reason": "substituting the value of $r$, then the definition of percent"
              },
              {
                "step": "So $t=\\dfrac{1\\,500}{85}=\\dfrac{300}{17}=17\\,\\dfrac{11}{17}$.",
                "reason": "inverting both sides, then simplifying"
              },
              {
                "step": "$\\dfrac{300}{17}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how long a faucet takes to fill a tub if its rate of water flow drops by $20\\%$. At the original constant rate, it fills the tub in $26$ minutes.",
              "answer": "65/2",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $V$ be the capacity of the tub and $r$ the original constant rate. Then $r=\\dfrac{V}{26}$.",
                  "reason": "the definition of rate"
                },
                {
                  "step": "At the reduced rate of $80\\%\\times r$, let $t$ be the new time. Then $\\dfrac{V}{t}=80\\%\\times r$.",
                  "reason": "the definition of rate, at the reduced rate"
                },
                {
                  "step": "So $\\dfrac{V}{t}=80\\%\\times\\dfrac{V}{26}$, and dividing both sides by $V$ gives $\\dfrac{1}{t}=\\dfrac{80}{100}\\times\\dfrac{1}{26}=\\dfrac{80}{2\\,600}$.",
                  "reason": "substituting the value of $r$, then the definition of percent"
                },
                {
                  "step": "So $t=\\dfrac{2\\,600}{80}=\\dfrac{65}{2}=32\\,\\dfrac{1}{2}$.",
                  "reason": "inverting both sides, then simplifying"
                },
                {
                  "step": "$\\dfrac{65}{2}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find how long a faucet takes to fill a tub if its rate of water flow drops by $25\\%$. At the original constant rate, it fills the tub in $20$ minutes.",
              "answer": "80/3",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $V$ be the capacity of the tub and $r$ the original constant rate. Then $r=\\dfrac{V}{20}$.",
                  "reason": "the definition of rate"
                },
                {
                  "step": "At the reduced rate of $75\\%\\times r$, let $t$ be the new time. Then $\\dfrac{V}{t}=75\\%\\times r$.",
                  "reason": "the definition of rate, at the reduced rate"
                },
                {
                  "step": "So $\\dfrac{V}{t}=75\\%\\times\\dfrac{V}{20}$, and dividing both sides by $V$ gives $\\dfrac{1}{t}=\\dfrac{75}{100}\\times\\dfrac{1}{20}=\\dfrac{75}{2\\,000}$.",
                  "reason": "substituting the value of $r$, then the definition of percent"
                },
                {
                  "step": "So $t=\\dfrac{2\\,000}{75}=\\dfrac{80}{3}=26\\,\\dfrac{2}{3}$.",
                  "reason": "inverting both sides, then simplifying"
                },
                {
                  "step": "$\\dfrac{80}{3}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find how long a faucet takes to fill a tub if its rate of water flow drops by $12\\%$. At the original constant rate, it fills the tub in $30$ minutes.",
              "answer": "375/11",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $V$ be the capacity of the tub and $r$ the original constant rate. Then $r=\\dfrac{V}{30}$.",
                  "reason": "the definition of rate"
                },
                {
                  "step": "At the reduced rate of $88\\%\\times r$, let $t$ be the new time. Then $\\dfrac{V}{t}=88\\%\\times r$.",
                  "reason": "the definition of rate, at the reduced rate"
                },
                {
                  "step": "So $\\dfrac{V}{t}=88\\%\\times\\dfrac{V}{30}$, and dividing both sides by $V$ gives $\\dfrac{1}{t}=\\dfrac{88}{100}\\times\\dfrac{1}{30}=\\dfrac{88}{3\\,000}$.",
                  "reason": "substituting the value of $r$, then the definition of percent"
                },
                {
                  "step": "So $t=\\dfrac{3\\,000}{88}=\\dfrac{375}{11}=34\\,\\dfrac{1}{11}$.",
                  "reason": "inverting both sides, then simplifying"
                },
                {
                  "step": "$\\dfrac{375}{11}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t21-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the rate of a faucet in quarts per second. Water comes out of it at a constant rate of $5$ gallons per minute. Take $1$ gallon as $4$ quarts and $1$ minute as $60$ seconds.",
            "lines": [
              {
                "step": "In one minute, $5$ gallons come out, which is $5\\times4=20$ quarts.",
                "reason": "converting gallons to quarts by the given conversion"
              },
              {
                "step": "One minute is $60$ seconds.",
                "reason": "the given conversion of minutes to seconds"
              },
              {
                "step": "So the rate is $\\dfrac{20\\text{ quarts}}{60\\text{ seconds}}=\\dfrac{20}{60}=\\dfrac{1}{3}$ quarts per second.",
                "reason": "the definition of rate, then simplifying"
              },
              {
                "step": "$\\dfrac{1}{3}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the rate of a faucet in quarts per second. Water comes out of it at a constant rate of $2$ gallons per minute. Take $1$ gallon as $4$ quarts and $1$ minute as $60$ seconds.",
              "answer": "2/15",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "In one minute, $2$ gallons come out, which is $2\\times4=8$ quarts.",
                  "reason": "converting gallons to quarts by the given conversion"
                },
                {
                  "step": "One minute is $60$ seconds.",
                  "reason": "the given conversion of minutes to seconds"
                },
                {
                  "step": "So the rate is $\\dfrac{8\\text{ quarts}}{60\\text{ seconds}}=\\dfrac{8}{60}=\\dfrac{2}{15}$ quarts per second.",
                  "reason": "the definition of rate, then simplifying"
                },
                {
                  "step": "$\\dfrac{2}{15}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the rate of a faucet in quarts per second. Water comes out of it at a constant rate of $7$ gallons per minute. Take $1$ gallon as $4$ quarts and $1$ minute as $60$ seconds.",
              "answer": "7/15",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "In one minute, $7$ gallons come out, which is $7\\times4=28$ quarts.",
                  "reason": "converting gallons to quarts by the given conversion"
                },
                {
                  "step": "One minute is $60$ seconds.",
                  "reason": "the given conversion of minutes to seconds"
                },
                {
                  "step": "So the rate is $\\dfrac{28\\text{ quarts}}{60\\text{ seconds}}=\\dfrac{28}{60}=\\dfrac{7}{15}$ quarts per second.",
                  "reason": "the definition of rate, then simplifying"
                },
                {
                  "step": "$\\dfrac{7}{15}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the rate of a faucet in quarts per second. Water comes out of it at a constant rate of $11$ gallons per minute. Take $1$ gallon as $4$ quarts and $1$ minute as $60$ seconds.",
              "answer": "11/15",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "In one minute, $11$ gallons come out, which is $11\\times4=44$ quarts.",
                  "reason": "converting gallons to quarts by the given conversion"
                },
                {
                  "step": "One minute is $60$ seconds.",
                  "reason": "the given conversion of minutes to seconds"
                },
                {
                  "step": "So the rate is $\\dfrac{44\\text{ quarts}}{60\\text{ seconds}}=\\dfrac{44}{60}=\\dfrac{11}{15}$ quarts per second.",
                  "reason": "the definition of rate, then simplifying"
                },
                {
                  "step": "$\\dfrac{11}{15}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the rate of a faucet in gallons per hour. Water comes out of it at a constant rate of $26$ quarts per minute. Take $1$ gallon as $4$ quarts and $1$ hour as $60$ minutes.",
            "lines": [
              {
                "step": "In one minute, $26$ quarts come out, which is $\\dfrac{26}{4}=\\dfrac{13}{2}$ gallons.",
                "reason": "converting quarts to gallons by the given conversion"
              },
              {
                "step": "One minute is $\\dfrac{1}{60}$ hour.",
                "reason": "the given conversion of hours to minutes"
              },
              {
                "step": "So the rate is $\\dfrac{13/2\\text{ gallons}}{1/60\\text{ hour}}=\\dfrac{13}{2}\\times60=390$ gallons per hour.",
                "reason": "the definition of rate, then invert-and-multiply"
              },
              {
                "step": "$390$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the rate of a faucet in gallons per hour. Water comes out of it at a constant rate of $14$ quarts per minute. Take $1$ gallon as $4$ quarts and $1$ hour as $60$ minutes.",
              "answer": "210",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "In one minute, $14$ quarts come out, which is $\\dfrac{14}{4}=\\dfrac{7}{2}$ gallons.",
                  "reason": "converting quarts to gallons by the given conversion"
                },
                {
                  "step": "One minute is $\\dfrac{1}{60}$ hour.",
                  "reason": "the given conversion of hours to minutes"
                },
                {
                  "step": "So the rate is $\\dfrac{7/2\\text{ gallons}}{1/60\\text{ hour}}=\\dfrac{7}{2}\\times60=210$ gallons per hour.",
                  "reason": "the definition of rate, then invert-and-multiply"
                },
                {
                  "step": "$210$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the rate of a faucet in gallons per hour. Water comes out of it at a constant rate of $18$ quarts per minute. Take $1$ gallon as $4$ quarts and $1$ hour as $60$ minutes.",
              "answer": "270",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "In one minute, $18$ quarts come out, which is $\\dfrac{18}{4}=\\dfrac{9}{2}$ gallons.",
                  "reason": "converting quarts to gallons by the given conversion"
                },
                {
                  "step": "One minute is $\\dfrac{1}{60}$ hour.",
                  "reason": "the given conversion of hours to minutes"
                },
                {
                  "step": "So the rate is $\\dfrac{9/2\\text{ gallons}}{1/60\\text{ hour}}=\\dfrac{9}{2}\\times60=270$ gallons per hour.",
                  "reason": "the definition of rate, then invert-and-multiply"
                },
                {
                  "step": "$270$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the rate of a faucet in gallons per hour. Water comes out of it at a constant rate of $22$ quarts per minute. Take $1$ gallon as $4$ quarts and $1$ hour as $60$ minutes.",
              "answer": "330",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "In one minute, $22$ quarts come out, which is $\\dfrac{22}{4}=\\dfrac{11}{2}$ gallons.",
                  "reason": "converting quarts to gallons by the given conversion"
                },
                {
                  "step": "One minute is $\\dfrac{1}{60}$ hour.",
                  "reason": "the given conversion of hours to minutes"
                },
                {
                  "step": "So the rate is $\\dfrac{11/2\\text{ gallons}}{1/60\\text{ hour}}=\\dfrac{11}{2}\\times60=330$ gallons per hour.",
                  "reason": "the definition of rate, then invert-and-multiply"
                },
                {
                  "step": "$330$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the speed of a train in miles per hour. It travels at a constant speed of $\\dfrac{3}{4}$ mile per minute. Take $1$ hour as $60$ minutes.",
            "lines": [
              {
                "step": "One minute is $\\dfrac{1}{60}$ hour.",
                "reason": "the given conversion of hours to minutes"
              },
              {
                "step": "So the rate is $\\dfrac{3/4\\text{ mile}}{1/60\\text{ hour}}=\\dfrac{3}{4}\\times60=45$ miles per hour.",
                "reason": "the definition of rate, then invert-and-multiply"
              },
              {
                "step": "$45$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the speed of a train in miles per hour. It travels at a constant speed of $\\dfrac{5}{6}$ mile per minute. Take $1$ hour as $60$ minutes.",
              "answer": "50",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "One minute is $\\dfrac{1}{60}$ hour.",
                  "reason": "the given conversion of hours to minutes"
                },
                {
                  "step": "So the rate is $\\dfrac{5/6\\text{ mile}}{1/60\\text{ hour}}=\\dfrac{5}{6}\\times60=50$ miles per hour.",
                  "reason": "the definition of rate, then invert-and-multiply"
                },
                {
                  "step": "$50$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the speed of a train in miles per hour. It travels at a constant speed of $\\dfrac{2}{3}$ mile per minute. Take $1$ hour as $60$ minutes.",
              "answer": "40",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "One minute is $\\dfrac{1}{60}$ hour.",
                  "reason": "the given conversion of hours to minutes"
                },
                {
                  "step": "So the rate is $\\dfrac{2/3\\text{ mile}}{1/60\\text{ hour}}=\\dfrac{2}{3}\\times60=40$ miles per hour.",
                  "reason": "the definition of rate, then invert-and-multiply"
                },
                {
                  "step": "$40$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the speed of a train in miles per hour. It travels at a constant speed of $\\dfrac{7}{10}$ mile per minute. Take $1$ hour as $60$ minutes.",
              "answer": "42",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "One minute is $\\dfrac{1}{60}$ hour.",
                  "reason": "the given conversion of hours to minutes"
                },
                {
                  "step": "So the rate is $\\dfrac{7/10\\text{ mile}}{1/60\\text{ hour}}=\\dfrac{7}{10}\\times60=42$ miles per hour.",
                  "reason": "the definition of rate, then invert-and-multiply"
                },
                {
                  "step": "$42$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t21-k5",
      "forms": [
        {
          "example": {
            "problem": "Find how long Regina and Eric take to mow a lawn together. Regina takes $10$ hours alone, and Eric takes $12$ hours alone.",
            "lines": [
              {
                "step": "Let $A$ be the area of the lawn. Regina mows at the constant rate $R=\\dfrac{A}{10}$, and Eric at the constant rate $E=\\dfrac{A}{12}$.",
                "reason": "the definition of a constant rate, applied to each"
              },
              {
                "step": "In $t$ hours together, they mow $Rt+Et=(R+E)t$ square feet.",
                "reason": "each mows at a constant rate, so in $t$ hours Regina mows $Rt$ and Eric mows $Et$"
              },
              {
                "step": "If they finish the whole lawn in $T$ hours, then $(R+E)T=A$.",
                "reason": "finishing the lawn means mowing all $A$ square feet"
              },
              {
                "step": "Substituting $R=\\dfrac{A}{10}$ and $E=\\dfrac{A}{12}$: $\\left(\\dfrac{A}{10}+\\dfrac{A}{12}\\right)T=A$, so dividing both sides by $A$ gives $\\left(\\dfrac{1}{10}+\\dfrac{1}{12}\\right)T=1$.",
                "reason": "substituting the values of $R$ and $E$, then dividing by $A$"
              },
              {
                "step": "So $T=\\dfrac{1}{1/10+1/12}=\\dfrac{1}{11/60}=\\dfrac{60}{11}=5\\,\\dfrac{5}{11}$.",
                "reason": "adding the two fractions, then inverting"
              },
              {
                "step": "$\\dfrac{60}{11}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how long Paul and Sara take to mow a lawn together. Paul takes $6$ hours alone, and Sara takes $8$ hours alone.",
              "answer": "24/7",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $A$ be the area of the lawn. Paul mows at the constant rate $P=\\dfrac{A}{6}$, and Sara at the constant rate $S=\\dfrac{A}{8}$.",
                  "reason": "the definition of a constant rate, applied to each"
                },
                {
                  "step": "In $t$ hours together, they mow $Pt+St=(P+S)t$ square feet.",
                  "reason": "each mows at a constant rate, so in $t$ hours Paul mows $Pt$ and Sara mows $St$"
                },
                {
                  "step": "If they finish the whole lawn in $T$ hours, then $(P+S)T=A$.",
                  "reason": "finishing the lawn means mowing all $A$ square feet"
                },
                {
                  "step": "Substituting $P=\\dfrac{A}{6}$ and $S=\\dfrac{A}{8}$: $\\left(\\dfrac{A}{6}+\\dfrac{A}{8}\\right)T=A$, so dividing both sides by $A$ gives $\\left(\\dfrac{1}{6}+\\dfrac{1}{8}\\right)T=1$.",
                  "reason": "substituting the values of $P$ and $S$, then dividing by $A$"
                },
                {
                  "step": "So $T=\\dfrac{1}{1/6+1/8}=\\dfrac{1}{7/24}=\\dfrac{24}{7}=3\\,\\dfrac{3}{7}$.",
                  "reason": "adding the two fractions, then inverting"
                },
                {
                  "step": "$\\dfrac{24}{7}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find how long Hana and Kofi take to mow a lawn together. Hana takes $5$ hours alone, and Kofi takes $7$ hours alone.",
              "answer": "35/12",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $A$ be the area of the lawn. Hana mows at the constant rate $H=\\dfrac{A}{5}$, and Kofi at the constant rate $K=\\dfrac{A}{7}$.",
                  "reason": "the definition of a constant rate, applied to each"
                },
                {
                  "step": "In $t$ hours together, they mow $Ht+Kt=(H+K)t$ square feet.",
                  "reason": "each mows at a constant rate, so in $t$ hours Hana mows $Ht$ and Kofi mows $Kt$"
                },
                {
                  "step": "If they finish the whole lawn in $T$ hours, then $(H+K)T=A$.",
                  "reason": "finishing the lawn means mowing all $A$ square feet"
                },
                {
                  "step": "Substituting $H=\\dfrac{A}{5}$ and $K=\\dfrac{A}{7}$: $\\left(\\dfrac{A}{5}+\\dfrac{A}{7}\\right)T=A$, so dividing both sides by $A$ gives $\\left(\\dfrac{1}{5}+\\dfrac{1}{7}\\right)T=1$.",
                  "reason": "substituting the values of $H$ and $K$, then dividing by $A$"
                },
                {
                  "step": "So $T=\\dfrac{1}{1/5+1/7}=\\dfrac{1}{12/35}=\\dfrac{35}{12}=2\\,\\dfrac{11}{12}$.",
                  "reason": "adding the two fractions, then inverting"
                },
                {
                  "step": "$\\dfrac{35}{12}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find how long Lena and Max take to mow a lawn together. Lena takes $9$ hours alone, and Max takes $15$ hours alone.",
              "answer": "45/8",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Let $A$ be the area of the lawn. Lena mows at the constant rate $L=\\dfrac{A}{9}$, and Max at the constant rate $M=\\dfrac{A}{15}$.",
                  "reason": "the definition of a constant rate, applied to each"
                },
                {
                  "step": "In $t$ hours together, they mow $Lt+Mt=(L+M)t$ square feet.",
                  "reason": "each mows at a constant rate, so in $t$ hours Lena mows $Lt$ and Max mows $Mt$"
                },
                {
                  "step": "If they finish the whole lawn in $T$ hours, then $(L+M)T=A$.",
                  "reason": "finishing the lawn means mowing all $A$ square feet"
                },
                {
                  "step": "Substituting $L=\\dfrac{A}{9}$ and $M=\\dfrac{A}{15}$: $\\left(\\dfrac{A}{9}+\\dfrac{A}{15}\\right)T=A$, so dividing both sides by $A$ gives $\\left(\\dfrac{1}{9}+\\dfrac{1}{15}\\right)T=1$.",
                  "reason": "substituting the values of $L$ and $M$, then dividing by $A$"
                },
                {
                  "step": "So $T=\\dfrac{1}{1/9+1/15}=\\dfrac{1}{8/45}=\\dfrac{45}{8}=5\\,\\dfrac{5}{8}$.",
                  "reason": "adding the two fractions, then inverting"
                },
                {
                  "step": "$\\dfrac{45}{8}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the distance between Town A and Town B. A driver goes from Town A to Town B at an average speed of $50$ mph. The driver returns at an average speed of $60$ mph. The round trip takes $14\\,\\dfrac{2}{3}$ hours.",
            "lines": [
              {
                "step": "Let $D$ be the distance between the towns. The trip out takes $\\dfrac{D}{50}$ hours, and the trip back takes $\\dfrac{D}{60}$ hours.",
                "reason": "the definition of average speed, applied to each leg"
              },
              {
                "step": "The total time is $\\dfrac{D}{50}+\\dfrac{D}{60}=14\\,\\dfrac{2}{3}$.",
                "reason": "the round trip time is the sum of the two legs"
              },
              {
                "step": "So $\\left(\\dfrac{1}{50}+\\dfrac{1}{60}\\right)D=\\dfrac{44}{3}$, which gives $\\dfrac{11}{300}D=\\dfrac{44}{3}$.",
                "reason": "the distributive law, then adding the two fractions"
              },
              {
                "step": "So $D=\\dfrac{44}{3}\\times\\dfrac{300}{11}=400$.",
                "reason": "multiplying both sides by $\\dfrac{300}{11}$"
              },
              {
                "step": "$400$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the distance between Town A and Town B. A driver goes from Town A to Town B at an average speed of $30$ mph. The driver returns at an average speed of $40$ mph. The round trip takes $11\\,\\dfrac{2}{3}$ hours.",
              "answer": "200",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Let $D$ be the distance between the towns. The trip out takes $\\dfrac{D}{30}$ hours, and the trip back takes $\\dfrac{D}{40}$ hours.",
                  "reason": "the definition of average speed, applied to each leg"
                },
                {
                  "step": "The total time is $\\dfrac{D}{30}+\\dfrac{D}{40}=11\\,\\dfrac{2}{3}$.",
                  "reason": "the round trip time is the sum of the two legs"
                },
                {
                  "step": "So $\\left(\\dfrac{1}{30}+\\dfrac{1}{40}\\right)D=\\dfrac{35}{3}$, which gives $\\dfrac{7}{120}D=\\dfrac{35}{3}$.",
                  "reason": "the distributive law, then adding the two fractions"
                },
                {
                  "step": "So $D=\\dfrac{35}{3}\\times\\dfrac{120}{7}=200$.",
                  "reason": "multiplying both sides by $\\dfrac{120}{7}$"
                },
                {
                  "step": "$200$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the distance between Town A and Town B. A driver goes from Town A to Town B at an average speed of $45$ mph. The driver returns at an average speed of $60$ mph. The round trip takes $4\\,\\dfrac{2}{3}$ hours.",
              "answer": "120",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Let $D$ be the distance between the towns. The trip out takes $\\dfrac{D}{45}$ hours, and the trip back takes $\\dfrac{D}{60}$ hours.",
                  "reason": "the definition of average speed, applied to each leg"
                },
                {
                  "step": "The total time is $\\dfrac{D}{45}+\\dfrac{D}{60}=4\\,\\dfrac{2}{3}$.",
                  "reason": "the round trip time is the sum of the two legs"
                },
                {
                  "step": "So $\\left(\\dfrac{1}{45}+\\dfrac{1}{60}\\right)D=\\dfrac{14}{3}$, which gives $\\dfrac{7}{180}D=\\dfrac{14}{3}$.",
                  "reason": "the distributive law, then adding the two fractions"
                },
                {
                  "step": "So $D=\\dfrac{14}{3}\\times\\dfrac{180}{7}=120$.",
                  "reason": "multiplying both sides by $\\dfrac{180}{7}$"
                },
                {
                  "step": "$120$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the distance between Town A and Town B. A driver goes from Town A to Town B at an average speed of $35$ mph. The driver returns at an average speed of $50$ mph. The round trip takes $6\\,\\dfrac{4}{5}$ hours.",
              "answer": "140",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Let $D$ be the distance between the towns. The trip out takes $\\dfrac{D}{35}$ hours, and the trip back takes $\\dfrac{D}{50}$ hours.",
                  "reason": "the definition of average speed, applied to each leg"
                },
                {
                  "step": "The total time is $\\dfrac{D}{35}+\\dfrac{D}{50}=6\\,\\dfrac{4}{5}$.",
                  "reason": "the round trip time is the sum of the two legs"
                },
                {
                  "step": "So $\\left(\\dfrac{1}{35}+\\dfrac{1}{50}\\right)D=\\dfrac{34}{5}$, which gives $\\dfrac{17}{350}D=\\dfrac{34}{5}$.",
                  "reason": "the distributive law, then adding the two fractions"
                },
                {
                  "step": "So $D=\\dfrac{34}{5}\\times\\dfrac{350}{17}=140$.",
                  "reason": "multiplying both sides by $\\dfrac{350}{17}$"
                },
                {
                  "step": "$140$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the constant speed of the other cyclist. Two cyclists start $96$ miles apart and ride toward each other at constant speeds. They meet after $4$ hours, and one rides at a constant speed of $13$ mph.",
            "lines": [
              {
                "step": "Let $v$ be the speed of the other cyclist, in mph. In $4$ hours, the two cyclists ride $13\\times4$ miles and $v\\times4$ miles.",
                "reason": "the definition of a constant rate, applied to each"
              },
              {
                "step": "They meet when the two distances add up to $96$ miles, so $13\\times4+v\\times4=96$, which gives $(13+v)\\times4=96$.",
                "reason": "the two distances together make up the gap between them, then the distributive law"
              },
              {
                "step": "So $13+v=\\dfrac{96}{4}=24$.",
                "reason": "dividing both sides by $4$"
              },
              {
                "step": "So $v=24-13=11$.",
                "reason": "subtracting $13$ from both sides"
              },
              {
                "step": "$11$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant speed of the other cyclist. Two cyclists start $180$ miles apart and ride toward each other at constant speeds. They meet after $3$ hours, and one rides at a constant speed of $35$ mph.",
              "answer": "25",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Let $v$ be the speed of the other cyclist, in mph. In $3$ hours, the two cyclists ride $35\\times3$ miles and $v\\times3$ miles.",
                  "reason": "the definition of a constant rate, applied to each"
                },
                {
                  "step": "They meet when the two distances add up to $180$ miles, so $35\\times3+v\\times3=180$, which gives $(35+v)\\times3=180$.",
                  "reason": "the two distances together make up the gap between them, then the distributive law"
                },
                {
                  "step": "So $35+v=\\dfrac{180}{3}=60$.",
                  "reason": "dividing both sides by $3$"
                },
                {
                  "step": "So $v=60-35=25$.",
                  "reason": "subtracting $35$ from both sides"
                },
                {
                  "step": "$25$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the constant speed of the other cyclist. Two cyclists start $140$ miles apart and ride toward each other at constant speeds. They meet after $2$ hours, and one rides at a constant speed of $38$ mph.",
              "answer": "32",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Let $v$ be the speed of the other cyclist, in mph. In $2$ hours, the two cyclists ride $38\\times2$ miles and $v\\times2$ miles.",
                  "reason": "the definition of a constant rate, applied to each"
                },
                {
                  "step": "They meet when the two distances add up to $140$ miles, so $38\\times2+v\\times2=140$, which gives $(38+v)\\times2=140$.",
                  "reason": "the two distances together make up the gap between them, then the distributive law"
                },
                {
                  "step": "So $38+v=\\dfrac{140}{2}=70$.",
                  "reason": "dividing both sides by $2$"
                },
                {
                  "step": "So $v=70-38=32$.",
                  "reason": "subtracting $38$ from both sides"
                },
                {
                  "step": "$32$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find the constant speed of the other cyclist. Two cyclists start $234$ miles apart and ride toward each other at constant speeds. They meet after $6$ hours, and one rides at a constant speed of $17$ mph.",
              "answer": "22",
              "form": "Answer as a finite decimal, or equivalent.",
              "lines": [
                {
                  "step": "Let $v$ be the speed of the other cyclist, in mph. In $6$ hours, the two cyclists ride $17\\times6$ miles and $v\\times6$ miles.",
                  "reason": "the definition of a constant rate, applied to each"
                },
                {
                  "step": "They meet when the two distances add up to $234$ miles, so $17\\times6+v\\times6=234$, which gives $(17+v)\\times6=234$.",
                  "reason": "the two distances together make up the gap between them, then the distributive law"
                },
                {
                  "step": "So $17+v=\\dfrac{234}{6}=39$.",
                  "reason": "dividing both sides by $6$"
                },
                {
                  "step": "So $v=39-17=22$.",
                  "reason": "subtracting $17$ from both sides"
                },
                {
                  "step": "$22$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t21-k6",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{9}{25}$.",
            "figure": {
              "file": "place:line:9/25",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
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
          },
          "fade": [
            {
              "prompt": "Place $\\frac{13}{20}$.",
              "answer": "13/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 13.",
                  "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 13 counts the parts from 0"
                },
                {
                  "step": "$\\frac{13}{20}=\\frac{13\\times 5}{20\\times 5}=\\frac{65}{100}=0.65$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.65$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:13/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 13/20 lies at 0.65, in the tenth from 0.6 to 0.7, between 0 and 1."
                  }
                }
              ]
            },
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
              "prompt": "Place $\\frac{7}{50}$.",
              "answer": "7/50",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 50 equal parts, and the mark is the end of part 7.",
                  "reason": "the denominator 50 gives the number of equal parts of the unit, and the numerator 7 counts the parts from 0"
                },
                {
                  "step": "$\\frac{7}{50}=\\frac{7\\times 2}{50\\times 2}=\\frac{14}{100}=0.14$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.14$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:7/50",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 7/50 lies at 0.14, in the tenth from 0.1 to 0.2, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $20\\%$.",
            "figure": {
              "file": "place:line:20%",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$20\\%=\\frac{20}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{20}{100}=0.2$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 2 and no hundredths follow it, so the mark is the 2nd cut of the unit from $0$ to $1$, at $0.2$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:20%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 20% marked, between 0 and 1."
                }
              },
              {
                "step": "$0.2$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:20%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 20% lies at 0.2, between 0 and 1."
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
              "prompt": "Place $70\\%$.",
              "answer": "70%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$70\\%=\\frac{70}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{70}{100}=0.7$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 7 and no hundredths follow it, so the mark is the 7th cut of the unit from $0$ to $1$, at $0.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.7$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:70%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 70% lies at 0.7, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $90\\%$.",
              "answer": "90%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$90\\%=\\frac{90}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{90}{100}=0.9$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 9 and no hundredths follow it, so the mark is the 9th cut of the unit from $0$ to $1$, at $0.9$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.9$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:90%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 90% lies at 0.9, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $145\\%$.",
            "figure": {
              "file": "place:line:145%",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$145\\%=\\frac{145}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{145}{100}=1.45$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 4 and 5 hundredths follow it, so the mark lies past the 4th cut and short of the next, between $1.4$ and $1.5$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:145%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 145% marked, between 1 and 2."
                }
              },
              {
                "step": "$1.45$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:145%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 145% lies at 1.45, in the tenth from 1.4 to 1.5, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $37\\%$.",
              "answer": "37%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$37\\%=\\frac{37}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{37}{100}=0.37$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 3 and 7 hundredths follow it, so the mark lies past the 3rd cut and short of the next, between $0.3$ and $0.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.37$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:37%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 37% lies at 0.37, in the tenth from 0.3 to 0.4, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $218\\%$.",
              "answer": "218%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$218\\%=\\frac{218}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{218}{100}=2.18$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 1 and 8 hundredths follow it, so the mark lies past the 1st cut and short of the next, between $2.1$ and $2.2$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.18$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:218%",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 218% lies at 2.18, in the tenth from 2.1 to 2.2, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $84\\%$.",
              "answer": "84%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$84\\%=\\frac{84}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{84}{100}=0.84$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 8 and 4 hundredths follow it, so the mark lies past the 8th cut and short of the next, between $0.8$ and $0.9$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.84$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:84%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 84% lies at 0.84, in the tenth from 0.8 to 0.9, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $106\\%$.",
            "figure": {
              "file": "place:line:106%",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$106\\%=\\frac{106}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{106}{100}=1.06$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 0 and 6 hundredths follow it, so the mark lies short of the first cut of the unit from $1$ to $2$, between $1$ and $1.1$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:106%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 106% marked, between 1 and 2."
                }
              },
              {
                "step": "$1.06$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:106%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 106% lies at 1.06, in the tenth from 1 to 1.1, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $4\\%$.",
              "answer": "4%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$4\\%=\\frac{4}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{4}{100}=0.04$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 0 and 4 hundredths follow it, so the mark lies short of the first cut of the unit from $0$ to $1$, between $0$ and $0.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.04$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:4%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 4% lies at 0.04, in the tenth from 0 to 0.1, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $203\\%$.",
              "answer": "203%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$203\\%=\\frac{203}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{203}{100}=2.03$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 0 and 3 hundredths follow it, so the mark lies short of the first cut of the unit from $2$ to $3$, between $2$ and $2.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.03$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:203%",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 203% lies at 2.03, in the tenth from 2 to 2.1, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $109\\%$.",
              "answer": "109%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$109\\%=\\frac{109}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{109}{100}=1.09$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 0 and 9 hundredths follow it, so the mark lies short of the first cut of the unit from $1$ to $2$, between $1$ and $1.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.09$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:109%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 109% lies at 1.09, in the tenth from 1 to 1.1, between 1 and 2."
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
      "id": "t21-p1",
      "method": "direct proof",
      "statement": "Suppose that the ratio of two quantities $M$ and $N$, measured in a given unit, is $a:b$. Here $a$ and $b$ are nonzero fractions. Then there is a fraction $u$ with $M=au$ and $N=bu$.",
      "idea": "Cross-multiply the ratio equation to get two equal fractions, then name their common value $u$.",
      "lines": [
        {
          "line": "By hypothesis, $\\dfrac{M}{N}=\\dfrac{a}{b}$.",
          "reason": "the definition of the ratio $a:b$"
        },
        {
          "line": "This gives $\\dfrac{M}{a}=\\dfrac{N}{b}$.",
          "reason": "the cross-multiplication algorithm, valid for complex fractions"
        },
        {
          "line": "Let $u$ be the common value $u=\\dfrac{M}{a}=\\dfrac{N}{b}$.",
          "reason": "naming the common value of the two equal fractions"
        },
        {
          "line": "So $M=au$ and $N=bu$.",
          "reason": "multiplying the equation $u=\\frac{M}{a}$ by $a$ and the equation $u=\\frac{N}{b}$ by $b$"
        },
        {
          "line": "So there is a fraction $u$ with $M=au$ and $N=bu$.",
          "reason": "combining the previous lines"
        }
      ]
    },
    {
      "id": "t21-p2",
      "method": "direct proof",
      "statement": "Two constant rates $R$ and $E$ work on a shared job of size $A$. Over a time $t$, they complete $(R+E)t$ of the job, so together they work at the constant rate $R+E$.",
      "idea": "Each rate gives its own share of the job over every time interval. The shares add, so the combined rate is fixed and equal to the sum.",
      "lines": [
        {
          "line": "At the constant rate $R$, the work done in $t$ hours is an amount $Rt$ of the job.",
          "reason": "the definition of a constant rate"
        },
        {
          "line": "At the constant rate $E$, the work done in $t$ hours is an amount $Et$ of the job.",
          "reason": "the definition of a constant rate"
        },
        {
          "line": "Together, in $t$ hours, the amount done is $Rt+Et$, which equals $(R+E)t$.",
          "reason": "the distributive law"
        },
        {
          "line": "The average rate of the combined work in the time interval $t$ is $\\dfrac{(R+E)t}{t}=R+E$.",
          "reason": "the definition of average rate"
        },
        {
          "line": "This value $R+E$ does not depend on $t$, so the combined rate is constant and equals $R+E$.",
          "reason": "combining the previous lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t21-s1",
      "statement": "For nonzero fractions $A,B,C,\\ell,m,n$, if $\\dfrac{A}{\\ell}=\\dfrac{B}{m}=\\dfrac{C}{n}$, then $A:B=\\ell:m$ and $B:C=m:n$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "From $\\dfrac{A}{\\ell}=\\dfrac{B}{m}$, cross-multiplying gives $Am=B\\ell$.",
            "reason": "the cross-multiplication algorithm"
          },
          {
            "line": "Dividing both sides of $Am=B\\ell$ by $Bm$ gives $\\dfrac{A}{B}=\\dfrac{\\ell}{m}$.",
            "reason": "dividing both sides by the same nonzero quantity $Bm$"
          },
          {
            "line": "So $A:B=\\ell:m$.",
            "reason": "the definition of ratio"
          },
          {
            "line": "The same argument, applied to $\\dfrac{B}{m}=\\dfrac{C}{n}$, gives $\\dfrac{B}{C}=\\dfrac{m}{n}$.",
            "reason": "repeating the previous three lines with $B,C,m,n$ in place of $A,B,\\ell,m$"
          },
          {
            "line": "So $B:C=m:n$.",
            "reason": "the definition of ratio"
          },
          {
            "line": "So $A:B=\\ell:m$ and $B:C=m:n$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t21-s2",
      "statement": "Take a rate $\\dfrac{M}{N}$. Let $p$ be the conversion factor for $M$, in new units of $M$ per old unit of $M$. Let $q$ be the conversion factor for $N$, in new units of $N$ per old unit of $N$. Then the same rate expressed in the new units is $\\dfrac{p}{q}\\times\\dfrac{M}{N}$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "In the new units, the quantity $M$ becomes $pM$, and the quantity $N$ becomes $qN$.",
            "reason": "the meaning of a conversion factor"
          },
          {
            "line": "The rate in the new units is $\\dfrac{pM}{qN}$.",
            "reason": "the definition of rate, applied to the converted quantities"
          },
          {
            "line": "The fraction $\\dfrac{pM}{qN}$ equals $\\dfrac{p}{q}\\times\\dfrac{M}{N}$.",
            "reason": "the product formula for two complex fractions"
          },
          {
            "line": "So the rate in the new units is $\\dfrac{p}{q}\\times\\dfrac{M}{N}$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    }
  ]
}
