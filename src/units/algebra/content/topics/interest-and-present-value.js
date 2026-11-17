export default {
  "number": 169,
  "title": "Interest and present value",
  "section": 14,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "532-545, 553-557"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the value after 3 years of 800 euros invested at $5\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
    "form": "Answer as a number, or equivalent.",
    "answer": "800*(21/20)^3",
    "solution": [
      "Find the value after 3 years of 800 euros invested at $5\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
      "$y = 800\\left(1 + \\dfrac{5}{100}\\right)^{3}$",
      "$y = 800\\left(\\dfrac{21}{20}\\right)^{3}$"
    ]
  },
  "ideas": [
    {
      "name": "Simple interest and compound interest",
      "concrete": "Take 2000 euros at $15\\%$ a year. Simple interest adds $\\dfrac{15}{100} \\cdot 2000 = 300$ each year, so after 2 years the amount is worth $2000 + 2 \\cdot 300 = 2600$. Compounded once a year, each year multiplies the amount by $1 + \\dfrac{15}{100} = \\dfrac{23}{20}$: after 1 year it is $2000 \\cdot \\dfrac{23}{20} = 2300$, and after 2 years $2300 \\cdot \\dfrac{23}{20} = 2645$, which is $2000\\left(\\dfrac{23}{20}\\right)^{2}$.",
      "general": "The amount invested is the **principal** $k$. For positive $k$ and $r$ and a whole number $n$: at $r\\%$ a year for $n$ years, **simple interest** adds the same interest each year, so the amount is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$; **compound interest**, once a year, multiplies the amount by $1 + \\dfrac{r}{100}$ each year, so it is worth $k\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
    },
    {
      "name": "Compounding m times a year",
      "concrete": "At $12\\%$ a year compounded 3 times a year, each third of a year adds a third of the yearly rate, $4\\%$, so each period multiplies the amount by $\\dfrac{26}{25}$. In 2 years there are $3 \\cdot 2 = 6$ periods, and 500 euros becomes $500\\left(\\dfrac{26}{25}\\right)^{6}$.",
      "general": "For positive $k$ and $r$ and whole numbers $m$ and $n$: the principal $k$ at $r\\%$ a year, compounded $m$ times a year, is worth $k\\left(1 + \\dfrac{r}{100m}\\right)^{mn}$ after $n$ years."
    },
    {
      "name": "Present value",
      "concrete": "At $20\\%$ a year compounded once a year, 3000 euros today becomes $3000\\left(\\dfrac{6}{5}\\right)^{2} = 4320$ in 2 years. So 4320 euros paid in 2 years is worth $\\dfrac{4320}{\\left(\\dfrac{6}{5}\\right)^{2}} = 3000$ today.",
      "general": "For positive $m$ and $r$ and a whole number $n$: the **present value** of $m$ paid in $n$ years, at $r\\%$ a year compounded once a year, is $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$, the amount that, invested today, grows to $m$."
    }
  ],
  "kinds": [
    {
      "id": "t169-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the value after 6 years of 3400 euros invested at $15\\%$ a year simple interest, added each year and never compounded.",
            "lines": [
              {
                "step": "Find the value after 6 years of 3400 euros invested at $15\\%$ a year simple interest, added each year and never compounded.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 3400\\left(1 + \\dfrac{15 \\cdot 6}{100}\\right)$",
                "reason": "Simple interest: the principal $k$ at $r\\%$ a year for $n$ years is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$, since the same interest is added each year."
              },
              {
                "step": "$y = 3400 \\cdot \\dfrac{19}{10}$",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{90}{100} = \\dfrac{19}{10}$."
              },
              {
                "step": "$y = 6460$",
                "reason": "Definition of fraction multiplication, from arithmetic: $3400$ is divided by $10$ and multiplied by $19$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value after 8 years of 1700 euros invested at $15\\%$ a year simple interest, added each year and never compounded.",
              "form": "Answer as a number, or equivalent.",
              "answer": "3740",
              "lines": [
                {
                  "step": "Find the value after 8 years of 1700 euros invested at $15\\%$ a year simple interest, added each year and never compounded.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 1700\\left(1 + \\dfrac{15 \\cdot 8}{100}\\right)$",
                  "reason": "Simple interest: the principal $k$ at $r\\%$ a year for $n$ years is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$, since the same interest is added each year."
                },
                {
                  "step": "$y = 1700 \\cdot \\dfrac{11}{5}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{120}{100} = \\dfrac{11}{5}$."
                },
                {
                  "step": "$y = 3740$",
                  "reason": "Definition of fraction multiplication, from arithmetic: $1700$ is divided by $5$ and multiplied by $11$."
                }
              ]
            },
            {
              "prompt": "Find the value after 6 years of 4600 euros invested at $25\\%$ a year simple interest, added each year and never compounded.",
              "form": "Answer as a number, or equivalent.",
              "answer": "11500",
              "lines": [
                {
                  "step": "Find the value after 6 years of 4600 euros invested at $25\\%$ a year simple interest, added each year and never compounded.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 4600\\left(1 + \\dfrac{25 \\cdot 6}{100}\\right)$",
                  "reason": "Simple interest: the principal $k$ at $r\\%$ a year for $n$ years is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$, since the same interest is added each year."
                },
                {
                  "step": "$y = 4600 \\cdot \\dfrac{5}{2}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{150}{100} = \\dfrac{5}{2}$."
                },
                {
                  "step": "$y = 11\\,500$",
                  "reason": "Definition of fraction multiplication, from arithmetic: $4600$ is divided by $2$ and multiplied by $5$."
                }
              ]
            },
            {
              "prompt": "Find the value after 6 years of 3600 euros invested at $12\\%$ a year simple interest, added each year and never compounded.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6192",
              "lines": [
                {
                  "step": "Find the value after 6 years of 3600 euros invested at $12\\%$ a year simple interest, added each year and never compounded.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 3600\\left(1 + \\dfrac{12 \\cdot 6}{100}\\right)$",
                  "reason": "Simple interest: the principal $k$ at $r\\%$ a year for $n$ years is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$, since the same interest is added each year."
                },
                {
                  "step": "$y = 3600 \\cdot \\dfrac{43}{25}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{72}{100} = \\dfrac{43}{25}$."
                },
                {
                  "step": "$y = 6192$",
                  "reason": "Definition of fraction multiplication, from arithmetic: $3600$ is divided by $25$ and multiplied by $43$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value after 6 years of 5700 euros invested at $4\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
            "lines": [
              {
                "step": "Find the value after 6 years of 5700 euros invested at $4\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 5700\\left(1 + \\dfrac{4}{100}\\right)^{6}$",
                "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
              },
              {
                "step": "$y = 5700\\left(\\dfrac{26}{25}\\right)^{6}$",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{4}{100} = \\dfrac{26}{25}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value after 2 years of 2600 euros invested at $10\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "2600*(11/10)^2",
              "lines": [
                {
                  "step": "Find the value after 2 years of 2600 euros invested at $10\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 2600\\left(1 + \\dfrac{10}{100}\\right)^{2}$",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$y = 2600\\left(\\dfrac{11}{10}\\right)^{2}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{10}{100} = \\dfrac{11}{10}$."
                }
              ]
            },
            {
              "prompt": "Find the value after 5 years of 6000 euros invested at $15\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6000*(23/20)^5",
              "lines": [
                {
                  "step": "Find the value after 5 years of 6000 euros invested at $15\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 6000\\left(1 + \\dfrac{15}{100}\\right)^{5}$",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$y = 6000\\left(\\dfrac{23}{20}\\right)^{5}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{15}{100} = \\dfrac{23}{20}$."
                }
              ]
            },
            {
              "prompt": "Find the value after 4 years of 4900 euros invested at $24\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "4900*(31/25)^4",
              "lines": [
                {
                  "step": "Find the value after 4 years of 4900 euros invested at $24\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 4900\\left(1 + \\dfrac{24}{100}\\right)^{4}$",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$y = 4900\\left(\\dfrac{31}{25}\\right)^{4}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{24}{100} = \\dfrac{31}{25}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value after 4 years of 2900 euros invested at $4\\%$ a year, compounded 3 times a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
            "lines": [
              {
                "step": "Find the value after 4 years of 2900 euros invested at $4\\%$ a year, compounded 3 times a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 2900\\left(1 + \\dfrac{4}{100 \\cdot 3}\\right)^{3 \\cdot 4}$",
                "reason": "Compounding $m$ times a year: each of the $mn$ periods in $n$ years multiplies the amount by $1 + \\dfrac{r}{100m}$."
              },
              {
                "step": "$y = 2900\\left(\\dfrac{76}{75}\\right)^{12}$",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{4}{300} = \\dfrac{76}{75}$. There are $3 \\cdot 4 = 12$ periods."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value after 4 years of 7400 euros invested at $6\\%$ a year, compounded 3 times a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "7400*(51/50)^12",
              "lines": [
                {
                  "step": "Find the value after 4 years of 7400 euros invested at $6\\%$ a year, compounded 3 times a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 7400\\left(1 + \\dfrac{6}{100 \\cdot 3}\\right)^{3 \\cdot 4}$",
                  "reason": "Compounding $m$ times a year: each of the $mn$ periods in $n$ years multiplies the amount by $1 + \\dfrac{r}{100m}$."
                },
                {
                  "step": "$y = 7400\\left(\\dfrac{51}{50}\\right)^{12}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{6}{300} = \\dfrac{51}{50}$. There are $3 \\cdot 4 = 12$ periods."
                }
              ]
            },
            {
              "prompt": "Find the value after 4 years of 6000 euros invested at $2\\%$ a year, compounded twice a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6000*(101/100)^8",
              "lines": [
                {
                  "step": "Find the value after 4 years of 6000 euros invested at $2\\%$ a year, compounded twice a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 6000\\left(1 + \\dfrac{2}{100 \\cdot 2}\\right)^{2 \\cdot 4}$",
                  "reason": "Compounding $m$ times a year: each of the $mn$ periods in $n$ years multiplies the amount by $1 + \\dfrac{r}{100m}$."
                },
                {
                  "step": "$y = 6000\\left(\\dfrac{101}{100}\\right)^{8}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{2}{200} = \\dfrac{101}{100}$. There are $2 \\cdot 4 = 8$ periods."
                }
              ]
            },
            {
              "prompt": "Find the value after 2 years of 5300 euros invested at $4\\%$ a year, compounded twice a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5300*(51/50)^4",
              "lines": [
                {
                  "step": "Find the value after 2 years of 5300 euros invested at $4\\%$ a year, compounded twice a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 5300\\left(1 + \\dfrac{4}{100 \\cdot 2}\\right)^{2 \\cdot 2}$",
                  "reason": "Compounding $m$ times a year: each of the $mn$ periods in $n$ years multiplies the amount by $1 + \\dfrac{r}{100m}$."
                },
                {
                  "step": "$y = 5300\\left(\\dfrac{51}{50}\\right)^{4}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{4}{200} = \\dfrac{51}{50}$. There are $2 \\cdot 2 = 4$ periods."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t169-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the present value of $19\\,900$ euros paid in 4 years, at $8\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
            "lines": [
              {
                "step": "Find the present value of $19\\,900$ euros paid in 4 years, at $8\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = \\dfrac{19\\,900}{\\left(1 + \\dfrac{8}{100}\\right)^{4}}$",
                "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today."
              },
              {
                "step": "$y = \\dfrac{19\\,900}{\\left(\\dfrac{27}{25}\\right)^{4}}$",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{8}{100} = \\dfrac{27}{25}$."
              },
              {
                "step": "$y = 19\\,900\\left(\\dfrac{25}{27}\\right)^{4}$",
                "reason": "Negative power of a quotient: dividing by $\\left(\\dfrac{a}{b}\\right)^{n}$ multiplies by $\\left(\\dfrac{b}{a}\\right)^{n}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the present value of $13\\,900$ euros paid in 4 years, at $20\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "13900*(5/6)^4",
              "lines": [
                {
                  "step": "Find the present value of $13\\,900$ euros paid in 4 years, at $20\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{13\\,900}{\\left(1 + \\dfrac{20}{100}\\right)^{4}}$",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today."
                },
                {
                  "step": "$y = \\dfrac{13\\,900}{\\left(\\dfrac{6}{5}\\right)^{4}}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{20}{100} = \\dfrac{6}{5}$."
                },
                {
                  "step": "$y = 13\\,900\\left(\\dfrac{5}{6}\\right)^{4}$",
                  "reason": "Negative power of a quotient: dividing by $\\left(\\dfrac{a}{b}\\right)^{n}$ multiplies by $\\left(\\dfrac{b}{a}\\right)^{n}$."
                }
              ]
            },
            {
              "prompt": "Find the present value of $15\\,200$ euros paid in 3 years, at $15\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "15200*(20/23)^3",
              "lines": [
                {
                  "step": "Find the present value of $15\\,200$ euros paid in 3 years, at $15\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{15\\,200}{\\left(1 + \\dfrac{15}{100}\\right)^{3}}$",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today."
                },
                {
                  "step": "$y = \\dfrac{15\\,200}{\\left(\\dfrac{23}{20}\\right)^{3}}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{15}{100} = \\dfrac{23}{20}$."
                },
                {
                  "step": "$y = 15\\,200\\left(\\dfrac{20}{23}\\right)^{3}$",
                  "reason": "Negative power of a quotient: dividing by $\\left(\\dfrac{a}{b}\\right)^{n}$ multiplies by $\\left(\\dfrac{b}{a}\\right)^{n}$."
                }
              ]
            },
            {
              "prompt": "Find the present value of 5500 euros paid in 6 years, at $25\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5500*(4/5)^6",
              "lines": [
                {
                  "step": "Find the present value of 5500 euros paid in 6 years, at $25\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{5500}{\\left(1 + \\dfrac{25}{100}\\right)^{6}}$",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today."
                },
                {
                  "step": "$y = \\dfrac{5500}{\\left(\\dfrac{5}{4}\\right)^{6}}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the rate is written as one fraction in lowest terms, $1 + \\dfrac{25}{100} = \\dfrac{5}{4}$."
                },
                {
                  "step": "$y = 5500\\left(\\dfrac{4}{5}\\right)^{6}$",
                  "reason": "Negative power of a quotient: dividing by $\\left(\\dfrac{a}{b}\\right)^{n}$ multiplies by $\\left(\\dfrac{b}{a}\\right)^{n}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the present value of the plan worth more today, at $50\\%$ a year compounded once a year. Plan A pays $11\\,178$ euros in 2 years. Plan B pays 5967 euros in 2 years and 6048 euros in 3 years.",
            "lines": [
              {
                "step": "Find the present value of the plan worth more today, at $50\\%$ a year compounded once a year. Plan A pays $11\\,178$ euros in 2 years. Plan B pays 5967 euros in 2 years and 6048 euros in 3 years.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Plan A: $\\dfrac{11\\,178}{\\left(\\dfrac{3}{2}\\right)^{2}} = 4968$.",
                "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today. Here $1 + \\dfrac{50}{100} = \\dfrac{3}{2}$."
              },
              {
                "step": "Plan B: $\\dfrac{5967}{\\left(\\dfrac{3}{2}\\right)^{2}} + \\dfrac{6048}{\\left(\\dfrac{3}{2}\\right)^{3}} = 4444$.",
                "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today; a payment made now is worth itself, and the present values of the two payments are added."
              },
              {
                "step": "Since $4968 > 4444$, plan A is worth more today, and its present value is 4968.",
                "reason": "Answering the question asked: the plan with the larger present value is worth more today."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the present value of the plan worth more today, at $10\\%$ a year compounded once a year. Plan A pays 7986 euros in 3 years. Plan B pays 3800 euros now and 2662 euros in 3 years.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6000",
              "lines": [
                {
                  "step": "Find the present value of the plan worth more today, at $10\\%$ a year compounded once a year. Plan A pays 7986 euros in 3 years. Plan B pays 3800 euros now and 2662 euros in 3 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Plan A: $\\dfrac{7986}{\\left(\\dfrac{11}{10}\\right)^{3}} = 6000$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today. Here $1 + \\dfrac{10}{100} = \\dfrac{11}{10}$."
                },
                {
                  "step": "Plan B: $3800 + \\dfrac{2662}{\\left(\\dfrac{11}{10}\\right)^{3}} = 5800$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today; a payment made now is worth itself, and the present values of the two payments are added."
                },
                {
                  "step": "Since $6000 > 5800$, plan A is worth more today, and its present value is 6000.",
                  "reason": "Answering the question asked: the plan with the larger present value is worth more today."
                }
              ]
            },
            {
              "prompt": "Find the present value of the plan worth more today, at $10\\%$ a year compounded once a year. Plan A pays 6655 euros in 3 years. Plan B pays 1700 euros now and 5324 euros in 3 years.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5700",
              "lines": [
                {
                  "step": "Find the present value of the plan worth more today, at $10\\%$ a year compounded once a year. Plan A pays 6655 euros in 3 years. Plan B pays 1700 euros now and 5324 euros in 3 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Plan A: $\\dfrac{6655}{\\left(\\dfrac{11}{10}\\right)^{3}} = 5000$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today. Here $1 + \\dfrac{10}{100} = \\dfrac{11}{10}$."
                },
                {
                  "step": "Plan B: $1700 + \\dfrac{5324}{\\left(\\dfrac{11}{10}\\right)^{3}} = 5700$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today; a payment made now is worth itself, and the present values of the two payments are added."
                },
                {
                  "step": "Since $5700 > 5000$, plan B is worth more today, and its present value is 5700.",
                  "reason": "Answering the question asked: the plan with the larger present value is worth more today."
                }
              ]
            },
            {
              "prompt": "Find the present value of the plan worth more today, at $10\\%$ a year compounded once a year. Plan A pays 5929 euros in 2 years. Plan B pays 2000 euros now and 3993 euros in 3 years.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5000",
              "lines": [
                {
                  "step": "Find the present value of the plan worth more today, at $10\\%$ a year compounded once a year. Plan A pays 5929 euros in 2 years. Plan B pays 2000 euros now and 3993 euros in 3 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Plan A: $\\dfrac{5929}{\\left(\\dfrac{11}{10}\\right)^{2}} = 4900$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today. Here $1 + \\dfrac{10}{100} = \\dfrac{11}{10}$."
                },
                {
                  "step": "Plan B: $2000 + \\dfrac{3993}{\\left(\\dfrac{11}{10}\\right)^{3}} = 5000$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today; a payment made now is worth itself, and the present values of the two payments are added."
                },
                {
                  "step": "Since $5000 > 4900$, plan B is worth more today, and its present value is 5000.",
                  "reason": "Answering the question asked: the plan with the larger present value is worth more today."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t169-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the yearly payment $x$, in euros, that pays off a loan of 612 euros in 2 equal payments, one at the end of each year, at $25\\%$ a year compounded once a year.",
            "lines": [
              {
                "step": "Find the yearly payment $x$, in euros, that pays off a loan of 612 euros in 2 equal payments, one at the end of each year, at $25\\%$ a year compounded once a year.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x}{\\dfrac{5}{4}} + \\dfrac{x}{\\left(\\dfrac{5}{4}\\right)^{2}} = 612$",
                "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today. Here $1 + \\dfrac{25}{100} = \\dfrac{5}{4}$, and the present values of the payments add up to the loan."
              },
              {
                "step": "$\\dfrac{4}{5}x + \\dfrac{16}{25}x = 612$",
                "reason": "Negative power of a quotient: dividing by $\\left(\\dfrac{a}{b}\\right)^{n}$ multiplies by $\\left(\\dfrac{b}{a}\\right)^{n}$."
              },
              {
                "step": "$\\dfrac{36}{25}x = 612$",
                "reason": "Collecting like terms: the coefficients of $x$ are added."
              },
              {
                "step": "$x = 425$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{25}{36}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the yearly payment $x$, in euros, that pays off a loan of 1290 euros in 3 equal payments, one at the end of each year, at $60\\%$ a year compounded once a year.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 1024",
              "lines": [
                {
                  "step": "Find the yearly payment $x$, in euros, that pays off a loan of 1290 euros in 3 equal payments, one at the end of each year, at $60\\%$ a year compounded once a year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{\\dfrac{8}{5}} + \\dfrac{x}{\\left(\\dfrac{8}{5}\\right)^{2}} + \\dfrac{x}{\\left(\\dfrac{8}{5}\\right)^{3}} = 1290$",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today. Here $1 + \\dfrac{60}{100} = \\dfrac{8}{5}$, and the present values of the payments add up to the loan."
                },
                {
                  "step": "$\\dfrac{5}{8}x + \\dfrac{25}{64}x + \\dfrac{125}{512}x = 1290$",
                  "reason": "Negative power of a quotient: dividing by $\\left(\\dfrac{a}{b}\\right)^{n}$ multiplies by $\\left(\\dfrac{b}{a}\\right)^{n}$."
                },
                {
                  "step": "$\\dfrac{645}{512}x = 1290$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$x = 1024$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{512}{645}$."
                }
              ]
            },
            {
              "prompt": "Find the yearly payment $x$, in euros, that pays off a loan of 8050 euros in 2 equal payments, one at the end of each year, at $30\\%$ a year compounded once a year.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5915",
              "lines": [
                {
                  "step": "Find the yearly payment $x$, in euros, that pays off a loan of 8050 euros in 2 equal payments, one at the end of each year, at $30\\%$ a year compounded once a year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{\\dfrac{13}{10}} + \\dfrac{x}{\\left(\\dfrac{13}{10}\\right)^{2}} = 8050$",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today. Here $1 + \\dfrac{30}{100} = \\dfrac{13}{10}$, and the present values of the payments add up to the loan."
                },
                {
                  "step": "$\\dfrac{10}{13}x + \\dfrac{100}{169}x = 8050$",
                  "reason": "Negative power of a quotient: dividing by $\\left(\\dfrac{a}{b}\\right)^{n}$ multiplies by $\\left(\\dfrac{b}{a}\\right)^{n}$."
                },
                {
                  "step": "$\\dfrac{230}{169}x = 8050$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$x = 5915$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{169}{230}$."
                }
              ]
            },
            {
              "prompt": "Find the yearly payment $x$, in euros, that pays off a loan of 1330 euros in 2 equal payments, one at the end of each year, at $80\\%$ a year compounded once a year.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 1539",
              "lines": [
                {
                  "step": "Find the yearly payment $x$, in euros, that pays off a loan of 1330 euros in 2 equal payments, one at the end of each year, at $80\\%$ a year compounded once a year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{\\dfrac{9}{5}} + \\dfrac{x}{\\left(\\dfrac{9}{5}\\right)^{2}} = 1330$",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today. Here $1 + \\dfrac{80}{100} = \\dfrac{9}{5}$, and the present values of the payments add up to the loan."
                },
                {
                  "step": "$\\dfrac{5}{9}x + \\dfrac{25}{81}x = 1330$",
                  "reason": "Negative power of a quotient: dividing by $\\left(\\dfrac{a}{b}\\right)^{n}$ multiplies by $\\left(\\dfrac{b}{a}\\right)^{n}$."
                },
                {
                  "step": "$\\dfrac{70}{81}x = 1330$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$x = 1539$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{81}{70}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t169-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the yearly rate $x\\%$ at which $55\\,000$ euros, compounded once a year, grows to $57\\,222$ euros in 2 years.",
            "lines": [
              {
                "step": "Find the yearly rate $x\\%$ at which $55\\,000$ euros, compounded once a year, grows to $57\\,222$ euros in 2 years.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$55\\,000\\left(1 + \\dfrac{x}{100}\\right)^{2} = 57\\,222$",
                "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
              },
              {
                "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{2601}{2500}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $55\\,000$, and the fraction is put in lowest terms."
              },
              {
                "step": "$1 + \\dfrac{x}{100} = \\sqrt{\\dfrac{2601}{2500}}$",
                "reason": "Positive square root, from arithmetic: $1 + \\dfrac{x}{100}$ is positive, so it is the positive square root of the right side."
              },
              {
                "step": "$1 + \\dfrac{x}{100} = \\dfrac{51}{50}$",
                "reason": "Root of a quotient: the root of the top over the root of the bottom, put in simplest form."
              },
              {
                "step": "$\\dfrac{x}{100} = \\dfrac{51}{50} - 1$",
                "reason": "Adding the same number to both sides: $1$ is taken from both sides."
              },
              {
                "step": "$x = 2$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $100$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the yearly rate $x\\%$ at which 3125 euros, compounded once a year, grows to 5445 euros in 2 years.",
              "form": "Answer as a number, or equivalent.",
              "answer": "32",
              "lines": [
                {
                  "step": "Find the yearly rate $x\\%$ at which 3125 euros, compounded once a year, grows to 5445 euros in 2 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3125\\left(1 + \\dfrac{x}{100}\\right)^{2} = 5445$",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{1089}{625}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3125$, and the fraction is put in lowest terms."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\sqrt{\\dfrac{1089}{625}}$",
                  "reason": "Positive square root, from arithmetic: $1 + \\dfrac{x}{100}$ is positive, so it is the positive square root of the right side."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\dfrac{33}{25}$",
                  "reason": "Root of a quotient: the root of the top over the root of the bottom, put in simplest form."
                },
                {
                  "step": "$\\dfrac{x}{100} = \\dfrac{33}{25} - 1$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides."
                },
                {
                  "step": "$x = 32$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $100$."
                }
              ]
            },
            {
              "prompt": "Find the yearly rate $x\\%$ at which $71\\,328$ euros, compounded once a year, grows to $160\\,488$ euros in 2 years.",
              "form": "Answer as a number, or equivalent.",
              "answer": "50",
              "lines": [
                {
                  "step": "Find the yearly rate $x\\%$ at which $71\\,328$ euros, compounded once a year, grows to $160\\,488$ euros in 2 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$71\\,328\\left(1 + \\dfrac{x}{100}\\right)^{2} = 160\\,488$",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{9}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $71\\,328$, and the fraction is put in lowest terms."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\sqrt{\\dfrac{9}{4}}$",
                  "reason": "Positive square root, from arithmetic: $1 + \\dfrac{x}{100}$ is positive, so it is the positive square root of the right side."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\dfrac{3}{2}$",
                  "reason": "Root of a quotient: the root of the top over the root of the bottom, put in simplest form."
                },
                {
                  "step": "$\\dfrac{x}{100} = \\dfrac{3}{2} - 1$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides."
                },
                {
                  "step": "$x = 50$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $100$."
                }
              ]
            },
            {
              "prompt": "Find the yearly rate $x\\%$ at which $65\\,625$ euros, compounded once a year, grows to $121\\,380$ euros in 2 years.",
              "form": "Answer as a number, or equivalent.",
              "answer": "36",
              "lines": [
                {
                  "step": "Find the yearly rate $x\\%$ at which $65\\,625$ euros, compounded once a year, grows to $121\\,380$ euros in 2 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$65\\,625\\left(1 + \\dfrac{x}{100}\\right)^{2} = 121\\,380$",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{1156}{625}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $65\\,625$, and the fraction is put in lowest terms."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\sqrt{\\dfrac{1156}{625}}$",
                  "reason": "Positive square root, from arithmetic: $1 + \\dfrac{x}{100}$ is positive, so it is the positive square root of the right side."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\dfrac{34}{25}$",
                  "reason": "Root of a quotient: the root of the top over the root of the bottom, put in simplest form."
                },
                {
                  "step": "$\\dfrac{x}{100} = \\dfrac{34}{25} - 1$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides."
                },
                {
                  "step": "$x = 36$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $100$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the yearly rate $x\\%$, the same in both years and compounded once a year, that gives the same value after 2 years as 1200 euros earning $62\\%$ in the first year and $100\\%$ in the second year.",
            "lines": [
              {
                "step": "Find the yearly rate $x\\%$, the same in both years and compounded once a year, that gives the same value after 2 years as 1200 euros earning $62\\%$ in the first year and $100\\%$ in the second year.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$1200\\left(1 + \\dfrac{x}{100}\\right)^{2} = 1200 \\cdot \\dfrac{81}{50} \\cdot 2$",
                "reason": "Compound interest: each year multiplies the amount by its own factor, and by the commutative law of multiplication, from arithmetic, the order of the two years does not change the value."
              },
              {
                "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{81}{50} \\cdot 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $1200$."
              },
              {
                "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{81}{25}$",
                "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and the fraction is put in lowest terms."
              },
              {
                "step": "$1 + \\dfrac{x}{100} = \\sqrt{\\dfrac{81}{25}}$",
                "reason": "Positive square root, from arithmetic: $1 + \\dfrac{x}{100}$ is positive, so it is the positive square root of the right side."
              },
              {
                "step": "$1 + \\dfrac{x}{100} = \\dfrac{9}{5}$",
                "reason": "Root of a quotient: the root of the top over the root of the bottom, put in simplest form."
              },
              {
                "step": "$\\dfrac{x}{100} = \\dfrac{9}{5} - 1$",
                "reason": "Adding the same number to both sides: $1$ is taken from both sides."
              },
              {
                "step": "$x = 80$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $100$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the yearly rate $x\\%$, the same in both years and compounded once a year, that gives the same value after 2 years as 8700 euros earning $100\\%$ in the first year and $142\\%$ in the second year.",
              "form": "Answer as a number, or equivalent.",
              "answer": "120",
              "lines": [
                {
                  "step": "Find the yearly rate $x\\%$, the same in both years and compounded once a year, that gives the same value after 2 years as 8700 euros earning $100\\%$ in the first year and $142\\%$ in the second year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8700\\left(1 + \\dfrac{x}{100}\\right)^{2} = 8700 \\cdot 2 \\cdot \\dfrac{121}{50}$",
                  "reason": "Compound interest: each year multiplies the amount by its own factor, and by the commutative law of multiplication, from arithmetic, the order of the two years does not change the value."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = 2 \\cdot \\dfrac{121}{50}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8700$."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{121}{25}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and the fraction is put in lowest terms."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\sqrt{\\dfrac{121}{25}}$",
                  "reason": "Positive square root, from arithmetic: $1 + \\dfrac{x}{100}$ is positive, so it is the positive square root of the right side."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\dfrac{11}{5}$",
                  "reason": "Root of a quotient: the root of the top over the root of the bottom, put in simplest form."
                },
                {
                  "step": "$\\dfrac{x}{100} = \\dfrac{11}{5} - 1$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides."
                },
                {
                  "step": "$x = 120$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $100$."
                }
              ]
            },
            {
              "prompt": "Find the yearly rate $x\\%$, the same in both years and compounded once a year, that gives the same value after 2 years as 3200 euros earning $80\\%$ in the first year and $145\\%$ in the second year.",
              "form": "Answer as a number, or equivalent.",
              "answer": "110",
              "lines": [
                {
                  "step": "Find the yearly rate $x\\%$, the same in both years and compounded once a year, that gives the same value after 2 years as 3200 euros earning $80\\%$ in the first year and $145\\%$ in the second year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3200\\left(1 + \\dfrac{x}{100}\\right)^{2} = 3200 \\cdot \\dfrac{9}{5} \\cdot \\dfrac{49}{20}$",
                  "reason": "Compound interest: each year multiplies the amount by its own factor, and by the commutative law of multiplication, from arithmetic, the order of the two years does not change the value."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{9}{5} \\cdot \\dfrac{49}{20}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3200$."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{441}{100}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and the fraction is put in lowest terms."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\sqrt{\\dfrac{441}{100}}$",
                  "reason": "Positive square root, from arithmetic: $1 + \\dfrac{x}{100}$ is positive, so it is the positive square root of the right side."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\dfrac{21}{10}$",
                  "reason": "Root of a quotient: the root of the top over the root of the bottom, put in simplest form."
                },
                {
                  "step": "$\\dfrac{x}{100} = \\dfrac{21}{10} - 1$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides."
                },
                {
                  "step": "$x = 110$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $100$."
                }
              ]
            },
            {
              "prompt": "Find the yearly rate $x\\%$, the same in both years and compounded once a year, that gives the same value after 2 years as 6600 euros earning $44\\%$ in the first year and $96\\%$ in the second year.",
              "form": "Answer as a number, or equivalent.",
              "answer": "68",
              "lines": [
                {
                  "step": "Find the yearly rate $x\\%$, the same in both years and compounded once a year, that gives the same value after 2 years as 6600 euros earning $44\\%$ in the first year and $96\\%$ in the second year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6600\\left(1 + \\dfrac{x}{100}\\right)^{2} = 6600 \\cdot \\dfrac{36}{25} \\cdot \\dfrac{49}{25}$",
                  "reason": "Compound interest: each year multiplies the amount by its own factor, and by the commutative law of multiplication, from arithmetic, the order of the two years does not change the value."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{36}{25} \\cdot \\dfrac{49}{25}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6600$."
                },
                {
                  "step": "$\\left(1 + \\dfrac{x}{100}\\right)^{2} = \\dfrac{1764}{625}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and the fraction is put in lowest terms."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\sqrt{\\dfrac{1764}{625}}$",
                  "reason": "Positive square root, from arithmetic: $1 + \\dfrac{x}{100}$ is positive, so it is the positive square root of the right side."
                },
                {
                  "step": "$1 + \\dfrac{x}{100} = \\dfrac{42}{25}$",
                  "reason": "Root of a quotient: the root of the top over the root of the bottom, put in simplest form."
                },
                {
                  "step": "$\\dfrac{x}{100} = \\dfrac{42}{25} - 1$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides."
                },
                {
                  "step": "$x = 68$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $100$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t169-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working of the value after 3 years of $19\\,000$ euros invested at $30\\%$ a year, compounded once a year, and write that line right.",
            "given": [
              "$y = 19\\,000\\left(1 + \\dfrac{30}{100}\\right)^{3}$",
              "$y = 19\\,000\\left(1 + \\dfrac{3 \\cdot 30}{100}\\right)$",
              "$y = 19\\,000 \\cdot \\dfrac{19}{10}$",
              "$y = 36\\,100$"
            ],
            "lines": [
              {
                "step": "The working is for the value after 3 years of $19\\,000$ euros at $30\\%$ a year, compounded once a year.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 adds the rate 3 times, as if the power were a sum: $y = 19\\,000\\left(1 + \\dfrac{3 \\cdot 30}{100}\\right)$.",
                "reason": "Compound interest: each year multiplies the amount by $\\dfrac{13}{10}$, so 3 years multiply it by $\\left(\\dfrac{13}{10}\\right)^{3}$; adding the rate 3 times is simple interest."
              },
              {
                "step": "Line 2 written right is $y = 19\\,000\\left(\\dfrac{13}{10}\\right)^{3}$.",
                "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$; the power stays."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working of the value after 2 years of $14\\,460$ euros invested at $50\\%$ a year, compounded once a year, and write that line right.",
              "given": [
                "$y = 14\\,460\\left(1 + \\dfrac{2 \\cdot 50}{100}\\right)$",
                "$y = 14\\,460\\left(1 + 1\\right)$",
                "$y = 14\\,460 \\cdot 2$",
                "$y = 28\\,920$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: y = 14460*(1+50/100)^2",
              "lines": [
                {
                  "step": "The working is for the value after 2 years of $14\\,460$ euros at $50\\%$ a year, compounded once a year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 adds the rate 2 times, as if the power were a sum: $y = 14\\,460\\left(1 + \\dfrac{2 \\cdot 50}{100}\\right)$.",
                  "reason": "Compound interest: each year multiplies the amount by $\\dfrac{3}{2}$, so 2 years multiply it by $\\left(\\dfrac{3}{2}\\right)^{2}$; adding the rate 2 times is simple interest."
                },
                {
                  "step": "Line 1 written right is $y = 14\\,460\\left(1 + \\dfrac{50}{100}\\right)^{2}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$; the power stays."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of the value after 4 years of $20\\,000$ euros invested at $30\\%$ a year, compounded once a year, and write that line right.",
              "given": [
                "$y = 20\\,000\\left(1 + \\dfrac{30}{100}\\right)^{4}$",
                "$y = 20\\,000\\left(1 + \\dfrac{4 \\cdot 30}{100}\\right)$",
                "$y = 20\\,000 \\cdot \\dfrac{11}{5}$",
                "$y = 44\\,000$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y = 20000*(13/10)^4",
              "lines": [
                {
                  "step": "The working is for the value after 4 years of $20\\,000$ euros at $30\\%$ a year, compounded once a year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds the rate 4 times, as if the power were a sum: $y = 20\\,000\\left(1 + \\dfrac{4 \\cdot 30}{100}\\right)$.",
                  "reason": "Compound interest: each year multiplies the amount by $\\dfrac{13}{10}$, so 4 years multiply it by $\\left(\\dfrac{13}{10}\\right)^{4}$; adding the rate 4 times is simple interest."
                },
                {
                  "step": "Line 2 written right is $y = 20\\,000\\left(\\dfrac{13}{10}\\right)^{4}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$; the power stays."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of the value after 2 years of $19\\,200$ euros invested at $10\\%$ a year, compounded once a year, and write that line right.",
              "given": [
                "$y = 19\\,200\\left(1 + \\dfrac{2 \\cdot 10}{100}\\right)$",
                "$y = 19\\,200\\left(1 + \\dfrac{1}{5}\\right)$",
                "$y = 19\\,200 \\cdot \\dfrac{6}{5}$",
                "$y = 23\\,040$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: y = 19200*(1+10/100)^2",
              "lines": [
                {
                  "step": "The working is for the value after 2 years of $19\\,200$ euros at $10\\%$ a year, compounded once a year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 adds the rate 2 times, as if the power were a sum: $y = 19\\,200\\left(1 + \\dfrac{2 \\cdot 10}{100}\\right)$.",
                  "reason": "Compound interest: each year multiplies the amount by $\\dfrac{11}{10}$, so 2 years multiply it by $\\left(\\dfrac{11}{10}\\right)^{2}$; adding the rate 2 times is simple interest."
                },
                {
                  "step": "Line 1 written right is $y = 19\\,200\\left(1 + \\dfrac{10}{100}\\right)^{2}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$; the power stays."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t169-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 7400 euros after 6 years at $12\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
            "lines": [
              {
                "step": "The sentence is: The number $y$ is the value, in euros, of 7400 euros after 6 years at $12\\%$ a year, compounded once a year.",
                "reason": "This is the sentence as given."
              },
              {
                "step": "A rise of $12\\%$ multiplies an amount by $\\dfrac{28}{25}$.",
                "reason": "Percent rise and fall, from arithmetic: a rise of $12\\%$ multiplies an amount by $1 + \\dfrac{12}{100} = \\dfrac{28}{25}$."
              },
              {
                "step": "6 years multiply the amount by $\\left(\\dfrac{28}{25}\\right)^{6}$.",
                "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
              },
              {
                "step": "$y = 7400\\left(\\dfrac{28}{25}\\right)^{6}$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 3800 euros after 7 years at $2\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3800*(51/50)^7",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 3800 euros after 7 years at $2\\%$ a year, compounded once a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $2\\%$ multiplies an amount by $\\dfrac{51}{50}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $2\\%$ multiplies an amount by $1 + \\dfrac{2}{100} = \\dfrac{51}{50}$."
                },
                {
                  "step": "7 years multiply the amount by $\\left(\\dfrac{51}{50}\\right)^{7}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$y = 3800\\left(\\dfrac{51}{50}\\right)^{7}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 7600 euros after 5 years at $6\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 7600*(53/50)^5",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 7600 euros after 5 years at $6\\%$ a year, compounded once a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $6\\%$ multiplies an amount by $\\dfrac{53}{50}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $6\\%$ multiplies an amount by $1 + \\dfrac{6}{100} = \\dfrac{53}{50}$."
                },
                {
                  "step": "5 years multiply the amount by $\\left(\\dfrac{53}{50}\\right)^{5}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$y = 7600\\left(\\dfrac{53}{50}\\right)^{5}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 6700 euros after 6 years at $8\\%$ a year, compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6700*(27/25)^6",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 6700 euros after 6 years at $8\\%$ a year, compounded once a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $8\\%$ multiplies an amount by $\\dfrac{27}{25}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $8\\%$ multiplies an amount by $1 + \\dfrac{8}{100} = \\dfrac{27}{25}$."
                },
                {
                  "step": "6 years multiply the amount by $\\left(\\dfrac{27}{25}\\right)^{6}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$y = 6700\\left(\\dfrac{27}{25}\\right)^{6}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 3200 euros after 3 years at $10\\%$ a year, compounded twice a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
            "lines": [
              {
                "step": "The sentence is: The number $y$ is the value, in euros, of 3200 euros after 3 years at $10\\%$ a year, compounded twice a year.",
                "reason": "This is the sentence as given."
              },
              {
                "step": "Each of the 2 periods a year adds $5\\%$, so it multiplies an amount by $\\dfrac{21}{20}$.",
                "reason": "Percent rise and fall, from arithmetic: a rise of $5\\%$ multiplies an amount by $1 + \\dfrac{5}{100} = \\dfrac{21}{20}$."
              },
              {
                "step": "3 years hold $6$ periods, each multiplying the amount by $\\dfrac{21}{20}$.",
                "reason": "Compounding $m$ times a year: each of the $mn$ periods in $n$ years multiplies the amount by $1 + \\dfrac{r}{100m}$."
              },
              {
                "step": "$y = 3200\\left(\\dfrac{21}{20}\\right)^{6}$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 2000 euros after 2 years at $25\\%$ a year, compounded twice a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2000*(9/8)^4",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 2000 euros after 2 years at $25\\%$ a year, compounded twice a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "Each of the 2 periods a year adds $\\dfrac{25}{2}\\%$, so it multiplies an amount by $\\dfrac{9}{8}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $\\dfrac{25}{2}\\%$ multiplies an amount by $1 + \\dfrac{\\dfrac{25}{2}}{100} = \\dfrac{9}{8}$."
                },
                {
                  "step": "2 years hold $4$ periods, each multiplying the amount by $\\dfrac{9}{8}$.",
                  "reason": "Compounding $m$ times a year: each of the $mn$ periods in $n$ years multiplies the amount by $1 + \\dfrac{r}{100m}$."
                },
                {
                  "step": "$y = 2000\\left(\\dfrac{9}{8}\\right)^{4}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 6300 euros after 2 years at $2\\%$ a year, compounded twice a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6300*(101/100)^4",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 6300 euros after 2 years at $2\\%$ a year, compounded twice a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "Each of the 2 periods a year adds $1\\%$, so it multiplies an amount by $\\dfrac{101}{100}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $1\\%$ multiplies an amount by $1 + \\dfrac{1}{100} = \\dfrac{101}{100}$."
                },
                {
                  "step": "2 years hold $4$ periods, each multiplying the amount by $\\dfrac{101}{100}$.",
                  "reason": "Compounding $m$ times a year: each of the $mn$ periods in $n$ years multiplies the amount by $1 + \\dfrac{r}{100m}$."
                },
                {
                  "step": "$y = 6300\\left(\\dfrac{101}{100}\\right)^{4}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 6500 euros after 4 years at $3\\%$ a year, compounded twice a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6500*(203/200)^8",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 6500 euros after 4 years at $3\\%$ a year, compounded twice a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "Each of the 2 periods a year adds $\\dfrac{3}{2}\\%$, so it multiplies an amount by $\\dfrac{203}{200}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $\\dfrac{3}{2}\\%$ multiplies an amount by $1 + \\dfrac{\\dfrac{3}{2}}{100} = \\dfrac{203}{200}$."
                },
                {
                  "step": "4 years hold $8$ periods, each multiplying the amount by $\\dfrac{203}{200}$.",
                  "reason": "Compounding $m$ times a year: each of the $mn$ periods in $n$ years multiplies the amount by $1 + \\dfrac{r}{100m}$."
                },
                {
                  "step": "$y = 6500\\left(\\dfrac{203}{200}\\right)^{8}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the present value, in euros, of 8300 euros paid in 8 years, at $2\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
            "lines": [
              {
                "step": "The sentence is: The number $y$ is the present value, in euros, of 8300 euros paid in 8 years, at $2\\%$ a year compounded once a year.",
                "reason": "This is the sentence as given."
              },
              {
                "step": "A rise of $2\\%$ multiplies an amount by $\\dfrac{51}{50}$.",
                "reason": "Percent rise and fall, from arithmetic: a rise of $2\\%$ multiplies an amount by $1 + \\dfrac{2}{100} = \\dfrac{51}{50}$."
              },
              {
                "step": "The payment is divided by $\\left(\\dfrac{51}{50}\\right)^{8}$.",
                "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today."
              },
              {
                "step": "$y = \\dfrac{8300}{\\left(\\dfrac{51}{50}\\right)^{8}}$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the present value, in euros, of 3300 euros paid in 4 years, at $5\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3300/(21/20)^4",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the present value, in euros, of 3300 euros paid in 4 years, at $5\\%$ a year compounded once a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $5\\%$ multiplies an amount by $\\dfrac{21}{20}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $5\\%$ multiplies an amount by $1 + \\dfrac{5}{100} = \\dfrac{21}{20}$."
                },
                {
                  "step": "The payment is divided by $\\left(\\dfrac{21}{20}\\right)^{4}$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today."
                },
                {
                  "step": "$y = \\dfrac{3300}{\\left(\\dfrac{21}{20}\\right)^{4}}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the present value, in euros, of 2200 euros paid in 8 years, at $24\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2200/(31/25)^8",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the present value, in euros, of 2200 euros paid in 8 years, at $24\\%$ a year compounded once a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $24\\%$ multiplies an amount by $\\dfrac{31}{25}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $24\\%$ multiplies an amount by $1 + \\dfrac{24}{100} = \\dfrac{31}{25}$."
                },
                {
                  "step": "The payment is divided by $\\left(\\dfrac{31}{25}\\right)^{8}$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today."
                },
                {
                  "step": "$y = \\dfrac{2200}{\\left(\\dfrac{31}{25}\\right)^{8}}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the present value, in euros, of 6900 euros paid in 7 years, at $12\\%$ a year compounded once a year. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6900/(28/25)^7",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the present value, in euros, of 6900 euros paid in 7 years, at $12\\%$ a year compounded once a year.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $12\\%$ multiplies an amount by $\\dfrac{28}{25}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $12\\%$ multiplies an amount by $1 + \\dfrac{12}{100} = \\dfrac{28}{25}$."
                },
                {
                  "step": "The payment is divided by $\\left(\\dfrac{28}{25}\\right)^{7}$.",
                  "reason": "Present value: a payment of $m$ in $n$ years is worth $\\dfrac{m}{\\left(1 + \\dfrac{r}{100}\\right)^{n}}$ today."
                },
                {
                  "step": "$y = \\dfrac{6900}{\\left(\\dfrac{28}{25}\\right)^{7}}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write an equation in $x$, with the end amount in euros alone on the right, for this sentence: An amount of $x$ euros grows by $4\\%$ a year, compounded once a year, for 2 years to 4600 euros. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
            "lines": [
              {
                "step": "The sentence is: An amount of $x$ euros grows by $4\\%$ a year, compounded once a year, for 2 years to 4600 euros.",
                "reason": "This is the sentence as given."
              },
              {
                "step": "A rise of $4\\%$ multiplies an amount by $\\dfrac{26}{25}$.",
                "reason": "Percent rise and fall, from arithmetic: a rise of $4\\%$ multiplies an amount by $1 + \\dfrac{4}{100} = \\dfrac{26}{25}$."
              },
              {
                "step": "2 years multiply $x$ by $\\left(\\dfrac{26}{25}\\right)^{2}$.",
                "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
              },
              {
                "step": "$x\\left(\\dfrac{26}{25}\\right)^{2} = 4600$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation in $x$, with the end amount in euros alone on the right, for this sentence: An amount of $x$ euros grows by $10\\%$ a year, compounded once a year, for 2 years to 7300 euros. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(11/10)^2 = 7300",
              "lines": [
                {
                  "step": "The sentence is: An amount of $x$ euros grows by $10\\%$ a year, compounded once a year, for 2 years to 7300 euros.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $10\\%$ multiplies an amount by $\\dfrac{11}{10}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $10\\%$ multiplies an amount by $1 + \\dfrac{10}{100} = \\dfrac{11}{10}$."
                },
                {
                  "step": "2 years multiply $x$ by $\\left(\\dfrac{11}{10}\\right)^{2}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$x\\left(\\dfrac{11}{10}\\right)^{2} = 7300$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$, with the end amount in euros alone on the right, for this sentence: An amount of $x$ euros grows by $20\\%$ a year, compounded once a year, for 3 years to 2700 euros. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(6/5)^3 = 2700",
              "lines": [
                {
                  "step": "The sentence is: An amount of $x$ euros grows by $20\\%$ a year, compounded once a year, for 3 years to 2700 euros.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $20\\%$ multiplies an amount by $\\dfrac{6}{5}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $20\\%$ multiplies an amount by $1 + \\dfrac{20}{100} = \\dfrac{6}{5}$."
                },
                {
                  "step": "3 years multiply $x$ by $\\left(\\dfrac{6}{5}\\right)^{3}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$x\\left(\\dfrac{6}{5}\\right)^{3} = 2700$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$, with the end amount in euros alone on the right, for this sentence: An amount of $x$ euros grows by $10\\%$ a year, compounded once a year, for 6 years to 600 euros. Write each rate as a fraction in lowest terms and leave every power unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(11/10)^6 = 600",
              "lines": [
                {
                  "step": "The sentence is: An amount of $x$ euros grows by $10\\%$ a year, compounded once a year, for 6 years to 600 euros.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "A rise of $10\\%$ multiplies an amount by $\\dfrac{11}{10}$.",
                  "reason": "Percent rise and fall, from arithmetic: a rise of $10\\%$ multiplies an amount by $1 + \\dfrac{10}{100} = \\dfrac{11}{10}$."
                },
                {
                  "step": "6 years multiply $x$ by $\\left(\\dfrac{11}{10}\\right)^{6}$.",
                  "reason": "Compound interest: each year multiplies the amount by $1 + \\dfrac{r}{100}$, so $n$ years multiply the principal $k$ by $\\left(1 + \\dfrac{r}{100}\\right)^{n}$."
                },
                {
                  "step": "$x\\left(\\dfrac{11}{10}\\right)^{6} = 600$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 5900 euros after 7 years at $3\\%$ a year simple interest, added each year and never compounded. Write the multiplier as a fraction in lowest terms and leave the product unevaluated.",
            "lines": [
              {
                "step": "The sentence is: The number $y$ is the value, in euros, of 5900 euros after 7 years at $3\\%$ a year simple interest, added each year and never compounded.",
                "reason": "This is the sentence as given."
              },
              {
                "step": "7 years of the same interest multiply the amount by $1 + \\dfrac{3 \\cdot 7}{100} = \\dfrac{121}{100}$.",
                "reason": "Simple interest: the principal $k$ at $r\\%$ a year for $n$ years is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$, since the same interest is added each year."
              },
              {
                "step": "$y = 5900 \\cdot \\dfrac{121}{100}$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 6900 euros after 4 years at $8\\%$ a year simple interest, added each year and never compounded. Write the multiplier as a fraction in lowest terms and leave the product unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6900*33/25",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 6900 euros after 4 years at $8\\%$ a year simple interest, added each year and never compounded.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "4 years of the same interest multiply the amount by $1 + \\dfrac{8 \\cdot 4}{100} = \\dfrac{33}{25}$.",
                  "reason": "Simple interest: the principal $k$ at $r\\%$ a year for $n$ years is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$, since the same interest is added each year."
                },
                {
                  "step": "$y = 6900 \\cdot \\dfrac{33}{25}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 3900 euros after 7 years at $8\\%$ a year simple interest, added each year and never compounded. Write the multiplier as a fraction in lowest terms and leave the product unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3900*39/25",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 3900 euros after 7 years at $8\\%$ a year simple interest, added each year and never compounded.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "7 years of the same interest multiply the amount by $1 + \\dfrac{8 \\cdot 7}{100} = \\dfrac{39}{25}$.",
                  "reason": "Simple interest: the principal $k$ at $r\\%$ a year for $n$ years is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$, since the same interest is added each year."
                },
                {
                  "step": "$y = 3900 \\cdot \\dfrac{39}{25}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, for this sentence: The number $y$ is the value, in euros, of 1300 euros after 5 years at $4\\%$ a year simple interest, added each year and never compounded. Write the multiplier as a fraction in lowest terms and leave the product unevaluated.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1300*6/5",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is the value, in euros, of 1300 euros after 5 years at $4\\%$ a year simple interest, added each year and never compounded.",
                  "reason": "This is the sentence as given."
                },
                {
                  "step": "5 years of the same interest multiply the amount by $1 + \\dfrac{4 \\cdot 5}{100} = \\dfrac{6}{5}$.",
                  "reason": "Simple interest: the principal $k$ at $r\\%$ a year for $n$ years is worth $k\\left(1 + \\dfrac{rn}{100}\\right)$, since the same interest is added each year."
                },
                {
                  "step": "$y = 1300 \\cdot \\dfrac{6}{5}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its letters and numbers, in the sentence's order."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": []
}
