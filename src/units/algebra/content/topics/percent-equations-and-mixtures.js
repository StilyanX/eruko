export default {
  "number": 119,
  "title": "Percent equations and mixtures",
  "section": 4,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "173-186"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find what percent of the pupils in the morning class and the evening class together ride a bike to school, if $15\\%$ of the pupils in the morning class ride a bike to school, $40\\%$ of the pupils in the evening class ride a bike to school, and the evening class has $\\dfrac{3}{2}$ times as many pupils as the morning class.",
    "form": "Answer as a number, or equivalent.",
    "answer": "30",
    "solution": [
      "Find what percent of the pupils in the morning class and the evening class together ride a bike to school, if $15\\%$ of the pupils in the morning class ride a bike to school, $40\\%$ of the pupils in the evening class ride a bike to school, and the evening class has $\\dfrac{3}{2}$ times as many pupils as the morning class.",
      "Let $x$ be the number of pupils in the morning class.",
      "The number of pupils in the evening class is $\\dfrac{3}{2}x$.",
      "In the morning class, $\\dfrac{15}{100} \\cdot x = \\dfrac{3}{20}x$ of the pupils ride a bike to school.",
      "In the evening class, $\\dfrac{40}{100} \\cdot \\dfrac{3}{2}x = \\dfrac{3}{5}x$ of the pupils ride a bike to school.",
      "In all, $\\dfrac{3}{20}x + \\dfrac{3}{5}x = \\dfrac{3}{4}x$ of the pupils ride a bike to school.",
      "In all, there are $x + \\dfrac{3}{2}x = \\dfrac{5}{2}x$ pupils.",
      "$\\dfrac{\\dfrac{3}{4}x}{\\dfrac{5}{2}x} = \\dfrac{3}{10}$",
      "$\\dfrac{3}{10} = 30\\%$",
      "With $20$ pupils in the morning class and $30$ in the evening class, $3 + 12 = 15$ of $50$ pupils ride a bike to school, and $\\dfrac{15}{50} = 30\\%$, the percent found.",
      "Of the pupils in the morning class and the evening class together, $30\\%$ ride a bike to school."
    ]
  },
  "ideas": [
    {
      "name": "A convenient value may be chosen when every datum is relative",
      "concrete": "Half the cups on a tray are full and the tray holds twice as many plates as cups. To find what share of the cups and plates together are full cups, take $10$ cups: then $5$ are full and there are $20$ plates, so $5$ of $30$, which is $\\dfrac{1}{6}$. With $x$ cups the share is $\\dfrac{x/2}{3x} = \\dfrac{1}{6}$ for every $x$ above $0$.",
      "general": "**A convenient value may be chosen when every datum is relative**: where every datum of a problem is a percent, a ratio or a multiple of another quantity, and the answer asked for is a percent or a ratio, the answer is the same for every size of the whole. One size, chosen to keep the counts whole, then gives the answer; the size is never itself an answer."
    }
  ],
  "kinds": [
    {
      "id": "t119-k1",
      "forms": [
        {
          "example": {
            "problem": "Find what percent of the trees in the north orchard and the south orchard together bear fruit, if $60\\%$ of the trees in the north orchard bear fruit, $24\\%$ of the trees in the south orchard bear fruit, and the south orchard has $3$ times as many trees as the north orchard.",
            "lines": [
              {
                "step": "Find what percent of the trees in the north orchard and the south orchard together bear fruit, if $60\\%$ of the trees in the north orchard bear fruit, $24\\%$ of the trees in the south orchard bear fruit, and the south orchard has $3$ times as many trees as the north orchard.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of trees in the north orchard.",
                "reason": "Defining the unknown: neither group size is given, so the letter stands for the size of the group the other is measured against."
              },
              {
                "step": "The number of trees in the south orchard is $3x$.",
                "reason": "Writing a sentence as an equation: \"$3$ times as many\" multiplies the count $x$ by $3$."
              },
              {
                "step": "In the north orchard, $\\dfrac{60}{100} \\cdot x = \\dfrac{3}{5}x$ of the trees bear fruit.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "In the south orchard, $\\dfrac{24}{100} \\cdot 3x = \\dfrac{18}{25}x$ of the trees bear fruit.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it. The tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "In all, $\\dfrac{3}{5}x + \\dfrac{18}{25}x = \\dfrac{33}{25}x$ of the trees bear fruit.",
                "reason": "Collecting like terms: the coefficients of $x$ are added."
              },
              {
                "step": "In all, there are $x + 3x = 4x$ trees.",
                "reason": "Collecting like terms: the coefficients of $x$ are added."
              },
              {
                "step": "$\\dfrac{\\dfrac{33}{25}x}{4x} = \\dfrac{33}{100}$",
                "reason": "Cancelling a common factor: $x$ stands on the top and on the bottom, and it is not $0$, since the groups have members."
              },
              {
                "step": "$\\dfrac{33}{100} = 33\\%$",
                "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
              },
              {
                "step": "With $25$ trees in the north orchard and $75$ in the south orchard, $15 + 18 = 33$ of $100$ trees bear fruit, and $\\dfrac{33}{100} = 33\\%$, the percent found.",
                "reason": "A convenient value may be chosen when every datum is relative: the answer does not depend on $x$, so one size that keeps every count whole checks the share found."
              },
              {
                "step": "Of the trees in the north orchard and the south orchard together, $33\\%$ bear fruit.",
                "reason": "Answering the question asked: the question asks for the percent of the two groups together, which is the share found."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find what percent of the players in the red team and the blue team together are left-handed, if $10\\%$ of the players in the red team are left-handed, $25\\%$ of the players in the blue team are left-handed, and the blue team has $6$ times as many players as the red team.",
              "form": "Answer as a number, or equivalent.",
              "answer": "160/7",
              "lines": [
                {
                  "step": "Find what percent of the players in the red team and the blue team together are left-handed, if $10\\%$ of the players in the red team are left-handed, $25\\%$ of the players in the blue team are left-handed, and the blue team has $6$ times as many players as the red team.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of players in the red team.",
                  "reason": "Defining the unknown: neither group size is given, so the letter stands for the size of the group the other is measured against."
                },
                {
                  "step": "The number of players in the blue team is $6x$.",
                  "reason": "Writing a sentence as an equation: \"$6$ times as many\" multiplies the count $x$ by $6$."
                },
                {
                  "step": "In the red team, $\\dfrac{10}{100} \\cdot x = \\dfrac{1}{10}x$ of the players are left-handed.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "In the blue team, $\\dfrac{25}{100} \\cdot 6x = \\dfrac{3}{2}x$ of the players are left-handed.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it. The tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "In all, $\\dfrac{1}{10}x + \\dfrac{3}{2}x = \\dfrac{8}{5}x$ of the players are left-handed.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "In all, there are $x + 6x = 7x$ players.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$\\dfrac{\\dfrac{8}{5}x}{7x} = \\dfrac{8}{35}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and on the bottom, and it is not $0$, since the groups have members."
                },
                {
                  "step": "$\\dfrac{8}{35} = \\dfrac{160}{7}\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "With $10$ players in the red team and $60$ in the blue team, $1 + 15 = 16$ of $70$ players are left-handed, and $\\dfrac{16}{70} = \\dfrac{160}{7}\\%$, the percent found.",
                  "reason": "A convenient value may be chosen when every datum is relative: the answer does not depend on $x$, so one size that keeps every count whole checks the share found."
                },
                {
                  "step": "Of the players in the red team and the blue team together, $\\dfrac{160}{7}\\%$ are left-handed.",
                  "reason": "Answering the question asked: the question asks for the percent of the two groups together, which is the share found."
                }
              ]
            },
            {
              "prompt": "Find what percent of the books on the top shelf and the bottom shelf together are novels, if $45\\%$ of the books on the top shelf are novels, $30\\%$ of the books on the bottom shelf are novels, and the bottom shelf has half as many books as the top shelf.",
              "form": "Answer as a number, or equivalent.",
              "answer": "40",
              "lines": [
                {
                  "step": "Find what percent of the books on the top shelf and the bottom shelf together are novels, if $45\\%$ of the books on the top shelf are novels, $30\\%$ of the books on the bottom shelf are novels, and the bottom shelf has half as many books as the top shelf.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of books on the top shelf.",
                  "reason": "Defining the unknown: neither group size is given, so the letter stands for the size of the group the other is measured against."
                },
                {
                  "step": "The number of books on the bottom shelf is $\\dfrac{1}{2}x$.",
                  "reason": "Writing a sentence as an equation: \"half as many\" multiplies the count $x$ by $\\dfrac{1}{2}$."
                },
                {
                  "step": "On the top shelf, $\\dfrac{45}{100} \\cdot x = \\dfrac{9}{20}x$ of the books are novels.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "On the bottom shelf, $\\dfrac{30}{100} \\cdot \\dfrac{1}{2}x = \\dfrac{3}{20}x$ of the books are novels.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it. The tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "In all, $\\dfrac{9}{20}x + \\dfrac{3}{20}x = \\dfrac{3}{5}x$ of the books are novels.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "In all, there are $x + \\dfrac{1}{2}x = \\dfrac{3}{2}x$ books.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$\\dfrac{\\dfrac{3}{5}x}{\\dfrac{3}{2}x} = \\dfrac{2}{5}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and on the bottom, and it is not $0$, since the groups have members."
                },
                {
                  "step": "$\\dfrac{2}{5} = 40\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "With $20$ books on the top shelf and $10$ on the bottom shelf, $9 + 3 = 12$ of $30$ books are novels, and $\\dfrac{12}{30} = 40\\%$, the percent found.",
                  "reason": "A convenient value may be chosen when every datum is relative: the answer does not depend on $x$, so one size that keeps every count whole checks the share found."
                },
                {
                  "step": "Of the books on the top shelf and the bottom shelf together, $40\\%$ are novels.",
                  "reason": "Answering the question asked: the question asks for the percent of the two groups together, which is the share found."
                }
              ]
            },
            {
              "prompt": "Find what percent of the rooms in the old wing and the new wing together have a balcony, if $12\\%$ of the rooms in the old wing have a balcony, $36\\%$ of the rooms in the new wing have a balcony, and the new wing has $2$ times as many rooms as the old wing.",
              "form": "Answer as a number, or equivalent.",
              "answer": "28",
              "lines": [
                {
                  "step": "Find what percent of the rooms in the old wing and the new wing together have a balcony, if $12\\%$ of the rooms in the old wing have a balcony, $36\\%$ of the rooms in the new wing have a balcony, and the new wing has $2$ times as many rooms as the old wing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of rooms in the old wing.",
                  "reason": "Defining the unknown: neither group size is given, so the letter stands for the size of the group the other is measured against."
                },
                {
                  "step": "The number of rooms in the new wing is $2x$.",
                  "reason": "Writing a sentence as an equation: \"$2$ times as many\" multiplies the count $x$ by $2$."
                },
                {
                  "step": "In the old wing, $\\dfrac{12}{100} \\cdot x = \\dfrac{3}{25}x$ of the rooms have a balcony.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "In the new wing, $\\dfrac{36}{100} \\cdot 2x = \\dfrac{18}{25}x$ of the rooms have a balcony.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it. The tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "In all, $\\dfrac{3}{25}x + \\dfrac{18}{25}x = \\dfrac{21}{25}x$ of the rooms have a balcony.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "In all, there are $x + 2x = 3x$ rooms.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$\\dfrac{\\dfrac{21}{25}x}{3x} = \\dfrac{7}{25}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and on the bottom, and it is not $0$, since the groups have members."
                },
                {
                  "step": "$\\dfrac{7}{25} = 28\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "With $25$ rooms in the old wing and $50$ in the new wing, $3 + 18 = 21$ of $75$ rooms have a balcony, and $\\dfrac{21}{75} = 28\\%$, the percent found.",
                  "reason": "A convenient value may be chosen when every datum is relative: the answer does not depend on $x$, so one size that keeps every count whole checks the share found."
                },
                {
                  "step": "Of the rooms in the old wing and the new wing together, $28\\%$ have a balcony.",
                  "reason": "Answering the question asked: the question asks for the percent of the two groups together, which is the share found."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find what percent of the plants in a garden are roses after a change, if $30\\%$ of the plants are roses at first, then the number of roses becomes $\\dfrac{4}{3}$ times what it was, and the number of the other plants stays the same.",
            "lines": [
              {
                "step": "Find what percent of the plants in a garden are roses after a change, if $30\\%$ of the plants are roses at first, then the number of roses becomes $\\dfrac{4}{3}$ times what it was, and the number of the other plants stays the same.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Take $100$ plants at the start.",
                "reason": "A convenient value may be chosen when every datum is relative: every datum is a percent or a multiple, so the answer is the same for every size, and a size that keeps the counts whole is taken."
              },
              {
                "step": "At the start there are $\\dfrac{30}{100} \\cdot 100 = 30$ roses.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "The other plants number $100 - 30 = 70$.",
                "reason": "Writing a sentence as an equation: the plants that are not roses make up the rest of the $100$."
              },
              {
                "step": "After the change there are $\\dfrac{4}{3} \\cdot 30 = 40$ roses.",
                "reason": "Writing a sentence as an equation: \"becomes $\\dfrac{4}{3}$ times what it was\" multiplies the count by $\\dfrac{4}{3}$."
              },
              {
                "step": "After the change there are $40 + 70 = 110$ plants in all.",
                "reason": "Writing a sentence as an equation: the other plants stay as they were, so they are added to the new count."
              },
              {
                "step": "$\\dfrac{40}{110} = \\dfrac{400}{11}\\%$",
                "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
              },
              {
                "step": "After the change, $\\dfrac{400}{11}\\%$ of the plants are roses.",
                "reason": "Answering the question asked: the question asks for the percent after the change, which is that share as a percent."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find what percent of the books in a library are atlases after a change, if $10\\%$ of the books are atlases at first, then the number of atlases becomes $\\dfrac{7}{2}$ times what it was, and the number of the other books stays the same.",
              "form": "Answer as a number, or equivalent.",
              "answer": "28",
              "lines": [
                {
                  "step": "Find what percent of the books in a library are atlases after a change, if $10\\%$ of the books are atlases at first, then the number of atlases becomes $\\dfrac{7}{2}$ times what it was, and the number of the other books stays the same.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take $100$ books at the start.",
                  "reason": "A convenient value may be chosen when every datum is relative: every datum is a percent or a multiple, so the answer is the same for every size, and a size that keeps the counts whole is taken."
                },
                {
                  "step": "At the start there are $\\dfrac{10}{100} \\cdot 100 = 10$ atlases.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The other books number $100 - 10 = 90$.",
                  "reason": "Writing a sentence as an equation: the books that are not atlases make up the rest of the $100$."
                },
                {
                  "step": "After the change there are $\\dfrac{7}{2} \\cdot 10 = 35$ atlases.",
                  "reason": "Writing a sentence as an equation: \"becomes $\\dfrac{7}{2}$ times what it was\" multiplies the count by $\\dfrac{7}{2}$."
                },
                {
                  "step": "After the change there are $35 + 90 = 125$ books in all.",
                  "reason": "Writing a sentence as an equation: the other books stay as they were, so they are added to the new count."
                },
                {
                  "step": "$\\dfrac{35}{125} = 28\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "After the change, $28\\%$ of the books are atlases.",
                  "reason": "Answering the question asked: the question asks for the percent after the change, which is that share as a percent."
                }
              ]
            },
            {
              "prompt": "Find what percent of the cars in a car park are red cars after a change, if $40\\%$ of the cars are red cars at first, then the number of red cars becomes half what it was, and the number of the other cars stays the same.",
              "form": "Answer as a number, or equivalent.",
              "answer": "25",
              "lines": [
                {
                  "step": "Find what percent of the cars in a car park are red cars after a change, if $40\\%$ of the cars are red cars at first, then the number of red cars becomes half what it was, and the number of the other cars stays the same.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take $100$ cars at the start.",
                  "reason": "A convenient value may be chosen when every datum is relative: every datum is a percent or a multiple, so the answer is the same for every size, and a size that keeps the counts whole is taken."
                },
                {
                  "step": "At the start there are $\\dfrac{40}{100} \\cdot 100 = 40$ red cars.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The other cars number $100 - 40 = 60$.",
                  "reason": "Writing a sentence as an equation: the cars that are not red cars make up the rest of the $100$."
                },
                {
                  "step": "After the change there are $\\dfrac{1}{2} \\cdot 40 = 20$ red cars.",
                  "reason": "Writing a sentence as an equation: \"becomes half what it was\" multiplies the count by $\\dfrac{1}{2}$."
                },
                {
                  "step": "After the change there are $20 + 60 = 80$ cars in all.",
                  "reason": "Writing a sentence as an equation: the other cars stay as they were, so they are added to the new count."
                },
                {
                  "step": "$\\dfrac{20}{80} = 25\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "After the change, $25\\%$ of the cars are red cars.",
                  "reason": "Answering the question asked: the question asks for the percent after the change, which is that share as a percent."
                }
              ]
            },
            {
              "prompt": "Find what percent of the fish in a tank are goldfish after a change, if $60\\%$ of the fish are goldfish at first, then the number of goldfish becomes $\\dfrac{2}{3}$ of what it was, and the number of the other fish stays the same.",
              "form": "Answer as a number, or equivalent.",
              "answer": "50",
              "lines": [
                {
                  "step": "Find what percent of the fish in a tank are goldfish after a change, if $60\\%$ of the fish are goldfish at first, then the number of goldfish becomes $\\dfrac{2}{3}$ of what it was, and the number of the other fish stays the same.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take $100$ fish at the start.",
                  "reason": "A convenient value may be chosen when every datum is relative: every datum is a percent or a multiple, so the answer is the same for every size, and a size that keeps the counts whole is taken."
                },
                {
                  "step": "At the start there are $\\dfrac{60}{100} \\cdot 100 = 60$ goldfish.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The other fish number $100 - 60 = 40$.",
                  "reason": "Writing a sentence as an equation: the fish that are not goldfish make up the rest of the $100$."
                },
                {
                  "step": "After the change there are $\\dfrac{2}{3} \\cdot 60 = 40$ goldfish.",
                  "reason": "Writing a sentence as an equation: \"becomes $\\dfrac{2}{3}$ of what it was\" multiplies the count by $\\dfrac{2}{3}$."
                },
                {
                  "step": "After the change there are $40 + 40 = 80$ fish in all.",
                  "reason": "Writing a sentence as an equation: the other fish stay as they were, so they are added to the new count."
                },
                {
                  "step": "$\\dfrac{40}{80} = 50\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "After the change, $50\\%$ of the fish are goldfish.",
                  "reason": "Answering the question asked: the question asks for the percent after the change, which is that share as a percent."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t119-k2",
      "forms": [
        {
          "example": {
            "problem": "Find how many mL of a $40\\%$ acid solution are mixed with a $10\\%$ acid solution to make $300$ mL of a $25\\%$ acid solution.",
            "lines": [
              {
                "step": "Find how many mL of a $40\\%$ acid solution are mixed with a $10\\%$ acid solution to make $300$ mL of a $25\\%$ acid solution.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of mL of the $40\\%$ acid solution, so the $10\\%$ acid solution makes up $300 - x$ mL.",
                "reason": "Defining the unknown: the letter stands for the amount the question asks for, and the other amount is the rest of the $300$ mL."
              },
              {
                "step": "The $40\\%$ acid solution holds $\\dfrac{40}{100}x$ mL of acid.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "The $10\\%$ acid solution holds $\\dfrac{10}{100}(300 - x)$ mL of acid.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "The mix holds $\\dfrac{25}{100} \\cdot 300 = 75$ mL of acid.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "$\\dfrac{40}{100}x + \\dfrac{10}{100}(300 - x) = 75$",
                "reason": "Writing a sentence as an equation: mixing loses no acid, so the acid of the two parts adds up to the acid of the mix."
              },
              {
                "step": "$40x + 10(300 - x) = 7500$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
              },
              {
                "step": "$40x + 3000 - 10x = 7500$",
                "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
              },
              {
                "step": "$30x + 3000 = 7500$",
                "reason": "Collecting like terms: the coefficients of $x$ are added."
              },
              {
                "step": "$30x = 4500$",
                "reason": "Adding the same number to both sides: adding $-3000$ to both sides keeps them equal and leaves the term in $x$ alone."
              },
              {
                "step": "$x = 150$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $30$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "With $150$ mL of the $40\\%$ acid solution and $150$ mL of the $10\\%$ acid solution, the acid is $\\dfrac{40}{100} \\cdot 150 + \\dfrac{10}{100} \\cdot 150 = 75$ mL, which is $25\\%$ of $300$ mL.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "Mix $150$ mL of the $40\\%$ acid solution.",
                "reason": "Answering the question asked: the question asks for the amount of the $40\\%$ acid solution, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many mL of a $35\\%$ salt solution are mixed with a $5\\%$ salt solution to make $120$ mL of a $20\\%$ salt solution.",
              "form": "Answer as a number, or equivalent.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find how many mL of a $35\\%$ salt solution are mixed with a $5\\%$ salt solution to make $120$ mL of a $20\\%$ salt solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of mL of the $35\\%$ salt solution, so the $5\\%$ salt solution makes up $120 - x$ mL.",
                  "reason": "Defining the unknown: the letter stands for the amount the question asks for, and the other amount is the rest of the $120$ mL."
                },
                {
                  "step": "The $35\\%$ salt solution holds $\\dfrac{35}{100}x$ mL of salt.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The $5\\%$ salt solution holds $\\dfrac{5}{100}(120 - x)$ mL of salt.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The mix holds $\\dfrac{20}{100} \\cdot 120 = 24$ mL of salt.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$\\dfrac{35}{100}x + \\dfrac{5}{100}(120 - x) = 24$",
                  "reason": "Writing a sentence as an equation: mixing loses no salt, so the salt of the two parts adds up to the salt of the mix."
                },
                {
                  "step": "$35x + 5(120 - x) = 2400$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$35x + 600 - 5x = 2400$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$30x + 600 = 2400$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$30x = 1800$",
                  "reason": "Adding the same number to both sides: adding $-600$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 60$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $30$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With $60$ mL of the $35\\%$ salt solution and $60$ mL of the $5\\%$ salt solution, the salt is $\\dfrac{35}{100} \\cdot 60 + \\dfrac{5}{100} \\cdot 60 = 24$ mL, which is $20\\%$ of $120$ mL.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Mix $60$ mL of the $35\\%$ salt solution.",
                  "reason": "Answering the question asked: the question asks for the amount of the $35\\%$ salt solution, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find how many litres of a $90\\%$ juice drink are mixed with a $30\\%$ juice drink to make $15$ litres of a $50\\%$ juice drink.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find how many litres of a $90\\%$ juice drink are mixed with a $30\\%$ juice drink to make $15$ litres of a $50\\%$ juice drink.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of litres of the $90\\%$ juice drink, so the $30\\%$ juice drink makes up $15 - x$ litres.",
                  "reason": "Defining the unknown: the letter stands for the amount the question asks for, and the other amount is the rest of the $15$ litres."
                },
                {
                  "step": "The $90\\%$ juice drink holds $\\dfrac{90}{100}x$ litres of juice.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The $30\\%$ juice drink holds $\\dfrac{30}{100}(15 - x)$ litres of juice.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The mix holds $\\dfrac{50}{100} \\cdot 15 = \\dfrac{15}{2}$ litres of juice.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$\\dfrac{90}{100}x + \\dfrac{30}{100}(15 - x) = \\dfrac{15}{2}$",
                  "reason": "Writing a sentence as an equation: mixing loses no juice, so the juice of the two parts adds up to the juice of the mix."
                },
                {
                  "step": "$90x + 30(15 - x) = 750$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$90x + 450 - 30x = 750$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$60x + 450 = 750$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$60x = 300$",
                  "reason": "Adding the same number to both sides: adding $-450$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $60$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With $5$ litres of the $90\\%$ juice drink and $10$ litres of the $30\\%$ juice drink, the juice is $\\dfrac{90}{100} \\cdot 5 + \\dfrac{30}{100} \\cdot 10 = \\dfrac{15}{2}$ litres, which is $50\\%$ of $15$ litres.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Mix $5$ litres of the $90\\%$ juice drink.",
                  "reason": "Answering the question asked: the question asks for the amount of the $90\\%$ juice drink, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find how many grams of a $70\\%$ copper alloy are mixed with a $20\\%$ copper alloy to make $250$ grams of a $60\\%$ copper alloy.",
              "form": "Answer as a number, or equivalent.",
              "answer": "200",
              "lines": [
                {
                  "step": "Find how many grams of a $70\\%$ copper alloy are mixed with a $20\\%$ copper alloy to make $250$ grams of a $60\\%$ copper alloy.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of grams of the $70\\%$ copper alloy, so the $20\\%$ copper alloy makes up $250 - x$ grams.",
                  "reason": "Defining the unknown: the letter stands for the amount the question asks for, and the other amount is the rest of the $250$ grams."
                },
                {
                  "step": "The $70\\%$ copper alloy holds $\\dfrac{70}{100}x$ grams of copper.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The $20\\%$ copper alloy holds $\\dfrac{20}{100}(250 - x)$ grams of copper.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The mix holds $\\dfrac{60}{100} \\cdot 250 = 150$ grams of copper.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$\\dfrac{70}{100}x + \\dfrac{20}{100}(250 - x) = 150$",
                  "reason": "Writing a sentence as an equation: mixing loses no copper, so the copper of the two parts adds up to the copper of the mix."
                },
                {
                  "step": "$70x + 20(250 - x) = 15\\,000$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$70x + 5000 - 20x = 15\\,000$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$50x + 5000 = 15\\,000$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$50x = 10\\,000$",
                  "reason": "Adding the same number to both sides: adding $-5000$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 200$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $50$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With $200$ grams of the $70\\%$ copper alloy and $50$ grams of the $20\\%$ copper alloy, the copper is $\\dfrac{70}{100} \\cdot 200 + \\dfrac{20}{100} \\cdot 50 = 150$ grams, which is $60\\%$ of $250$ grams.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Mix $200$ grams of the $70\\%$ copper alloy.",
                  "reason": "Answering the question asked: the question asks for the amount of the $70\\%$ copper alloy, which is $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how many mL of $240$ mL of a $25\\%$ acid solution are poured off and replaced by pure acid to give a $40\\%$ acid solution.",
            "lines": [
              {
                "step": "Find how many mL of $240$ mL of a $25\\%$ acid solution are poured off and replaced by pure acid to give a $40\\%$ acid solution.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of mL poured off and replaced.",
                "reason": "Defining the unknown: the letter stands for the amount the question asks for."
              },
              {
                "step": "At the start there are $\\dfrac{25}{100} \\cdot 240 = 60$ mL of acid.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "Pouring off $x$ mL takes out $\\dfrac{25}{100}x$ mL of acid.",
                "reason": "The definition of percent: what is poured off is the old acid solution, so $25\\%$ of it is acid."
              },
              {
                "step": "Pouring in $x$ mL adds $x$ mL of acid.",
                "reason": "The definition of percent: what is poured in is $100\\%$ acid."
              },
              {
                "step": "After the change there are $60 - \\dfrac{25}{100}x + x = 60 + \\dfrac{75}{100}x$ mL of acid.",
                "reason": "Collecting like terms: the coefficients of $x$ are added."
              },
              {
                "step": "The acid solution wanted holds $\\dfrac{40}{100} \\cdot 240 = 96$ mL of acid.",
                "reason": "The definition of percent: as much is poured in as is poured off, so the amount stays $240$ mL."
              },
              {
                "step": "$60 + \\dfrac{75}{100}x = 96$",
                "reason": "Writing a sentence as an equation: the acid after the change is the acid the acid solution wanted holds."
              },
              {
                "step": "$\\dfrac{75}{100}x = 36$",
                "reason": "Adding the same number to both sides: adding $-60$ to both sides keeps them equal and leaves the term in $x$ alone."
              },
              {
                "step": "$x = 36 \\cdot \\dfrac{100}{75} = 48$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{100}{75}$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "With $48$ mL replaced, the acid is $60 - \\dfrac{25}{100} \\cdot 48 + 48 = 96$ mL, which is $40\\%$ of $240$ mL.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "Pour off and replace $48$ mL.",
                "reason": "Answering the question asked: the question asks for the amount poured off and replaced, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many mL of $150$ mL of a $10\\%$ salt solution are poured off and replaced by a $40\\%$ salt solution to give a $22\\%$ salt solution.",
              "form": "Answer as a number, or equivalent.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find how many mL of $150$ mL of a $10\\%$ salt solution are poured off and replaced by a $40\\%$ salt solution to give a $22\\%$ salt solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of mL poured off and replaced.",
                  "reason": "Defining the unknown: the letter stands for the amount the question asks for."
                },
                {
                  "step": "At the start there are $\\dfrac{10}{100} \\cdot 150 = 15$ mL of salt.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "Pouring off $x$ mL takes out $\\dfrac{10}{100}x$ mL of salt.",
                  "reason": "The definition of percent: what is poured off is the old salt solution, so $10\\%$ of it is salt."
                },
                {
                  "step": "Pouring in $x$ mL adds $\\dfrac{40}{100}x$ mL of salt.",
                  "reason": "The definition of percent: what is poured in is $40\\%$ salt."
                },
                {
                  "step": "After the change there are $15 - \\dfrac{10}{100}x + \\dfrac{40}{100}x = 15 + \\dfrac{30}{100}x$ mL of salt.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "The salt solution wanted holds $\\dfrac{22}{100} \\cdot 150 = 33$ mL of salt.",
                  "reason": "The definition of percent: as much is poured in as is poured off, so the amount stays $150$ mL."
                },
                {
                  "step": "$15 + \\dfrac{30}{100}x = 33$",
                  "reason": "Writing a sentence as an equation: the salt after the change is the salt the salt solution wanted holds."
                },
                {
                  "step": "$\\dfrac{30}{100}x = 18$",
                  "reason": "Adding the same number to both sides: adding $-15$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 18 \\cdot \\dfrac{100}{30} = 60$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{100}{30}$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With $60$ mL replaced, the salt is $15 - \\dfrac{10}{100} \\cdot 60 + \\dfrac{40}{100} \\cdot 60 = 33$ mL, which is $22\\%$ of $150$ mL.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Pour off and replace $60$ mL.",
                  "reason": "Answering the question asked: the question asks for the amount poured off and replaced, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find how many mL of $400$ mL of a $30\\%$ sugar syrup are poured off and replaced by pure sugar to give a $51\\%$ sugar syrup.",
              "form": "Answer as a number, or equivalent.",
              "answer": "120",
              "lines": [
                {
                  "step": "Find how many mL of $400$ mL of a $30\\%$ sugar syrup are poured off and replaced by pure sugar to give a $51\\%$ sugar syrup.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of mL poured off and replaced.",
                  "reason": "Defining the unknown: the letter stands for the amount the question asks for."
                },
                {
                  "step": "At the start there are $\\dfrac{30}{100} \\cdot 400 = 120$ mL of sugar.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "Pouring off $x$ mL takes out $\\dfrac{30}{100}x$ mL of sugar.",
                  "reason": "The definition of percent: what is poured off is the old sugar syrup, so $30\\%$ of it is sugar."
                },
                {
                  "step": "Pouring in $x$ mL adds $x$ mL of sugar.",
                  "reason": "The definition of percent: what is poured in is $100\\%$ sugar."
                },
                {
                  "step": "After the change there are $120 - \\dfrac{30}{100}x + x = 120 + \\dfrac{70}{100}x$ mL of sugar.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "The sugar syrup wanted holds $\\dfrac{51}{100} \\cdot 400 = 204$ mL of sugar.",
                  "reason": "The definition of percent: as much is poured in as is poured off, so the amount stays $400$ mL."
                },
                {
                  "step": "$120 + \\dfrac{70}{100}x = 204$",
                  "reason": "Writing a sentence as an equation: the sugar after the change is the sugar the sugar syrup wanted holds."
                },
                {
                  "step": "$\\dfrac{70}{100}x = 84$",
                  "reason": "Adding the same number to both sides: adding $-120$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 84 \\cdot \\dfrac{100}{70} = 120$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{100}{70}$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With $120$ mL replaced, the sugar is $120 - \\dfrac{30}{100} \\cdot 120 + 120 = 204$ mL, which is $51\\%$ of $400$ mL.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Pour off and replace $120$ mL.",
                  "reason": "Answering the question asked: the question asks for the amount poured off and replaced, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find how many litres of $60$ litres of a $20\\%$ juice drink are poured off and replaced by a $80\\%$ juice drink to give a $35\\%$ juice drink.",
              "form": "Answer as a number, or equivalent.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find how many litres of $60$ litres of a $20\\%$ juice drink are poured off and replaced by a $80\\%$ juice drink to give a $35\\%$ juice drink.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of litres poured off and replaced.",
                  "reason": "Defining the unknown: the letter stands for the amount the question asks for."
                },
                {
                  "step": "At the start there are $\\dfrac{20}{100} \\cdot 60 = 12$ litres of juice.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "Pouring off $x$ litres takes out $\\dfrac{20}{100}x$ litres of juice.",
                  "reason": "The definition of percent: what is poured off is the old juice drink, so $20\\%$ of it is juice."
                },
                {
                  "step": "Pouring in $x$ litres adds $\\dfrac{80}{100}x$ litres of juice.",
                  "reason": "The definition of percent: what is poured in is $80\\%$ juice."
                },
                {
                  "step": "After the change there are $12 - \\dfrac{20}{100}x + \\dfrac{80}{100}x = 12 + \\dfrac{60}{100}x$ litres of juice.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "The juice drink wanted holds $\\dfrac{35}{100} \\cdot 60 = 21$ litres of juice.",
                  "reason": "The definition of percent: as much is poured in as is poured off, so the amount stays $60$ litres."
                },
                {
                  "step": "$12 + \\dfrac{60}{100}x = 21$",
                  "reason": "Writing a sentence as an equation: the juice after the change is the juice the juice drink wanted holds."
                },
                {
                  "step": "$\\dfrac{60}{100}x = 9$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 9 \\cdot \\dfrac{100}{60} = 15$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{100}{60}$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With $15$ litres replaced, the juice is $12 - \\dfrac{20}{100} \\cdot 15 + \\dfrac{80}{100} \\cdot 15 = 21$ litres, which is $35\\%$ of $60$ litres.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Pour off and replace $15$ litres.",
                  "reason": "Answering the question asked: the question asks for the amount poured off and replaced, which is $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t119-k3",
      "forms": [
        {
          "example": {
            "problem": "Find what percent of $3y$ is $2x$, if $x$ is $20\\%$ of $y$ and $y$ is positive.",
            "lines": [
              {
                "step": "Find what percent of $3y$ is $2x$, if $x$ is $20\\%$ of $y$ and $y$ is positive.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\dfrac{1}{5}y$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$20\\%$ of\" multiplies by $\\dfrac{20}{100} = \\dfrac{1}{5}$, by the definition of percent."
              },
              {
                "step": "$2x = \\dfrac{2}{5}y$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ keeps them equal."
              },
              {
                "step": "$\\dfrac{2x}{3y} = \\dfrac{\\dfrac{2}{5}y}{3y}$",
                "reason": "Substitution: $\\dfrac{2}{5}y$ goes in place of $2x$, which leaves one letter."
              },
              {
                "step": "$\\dfrac{\\dfrac{2}{5}y}{3y} = \\dfrac{2}{15}$",
                "reason": "Cancelling a common factor: $y$ stands on the top and on the bottom, and it is not $0$."
              },
              {
                "step": "$\\dfrac{2}{15} = \\dfrac{40}{3}\\%$",
                "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
              },
              {
                "step": "So $2x$ is $\\dfrac{40}{3}\\%$ of $3y$.",
                "reason": "Answering the question asked: the question asks what percent of $3y$ the number $2x$ is."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find what percent of $5y$ is $4x$, if $x$ is $15\\%$ of $y$ and $y$ is positive.",
              "form": "Answer as a number, or equivalent.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find what percent of $5y$ is $4x$, if $x$ is $15\\%$ of $y$ and $y$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{3}{20}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$15\\%$ of\" multiplies by $\\dfrac{15}{100} = \\dfrac{3}{20}$, by the definition of percent."
                },
                {
                  "step": "$4x = \\dfrac{3}{5}y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ keeps them equal."
                },
                {
                  "step": "$\\dfrac{4x}{5y} = \\dfrac{\\dfrac{3}{5}y}{5y}$",
                  "reason": "Substitution: $\\dfrac{3}{5}y$ goes in place of $4x$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{\\dfrac{3}{5}y}{5y} = \\dfrac{3}{25}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top and on the bottom, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{3}{25} = 12\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "So $4x$ is $12\\%$ of $5y$.",
                  "reason": "Answering the question asked: the question asks what percent of $5y$ the number $4x$ is."
                }
              ]
            },
            {
              "prompt": "Find what percent of $2y$ is $5x$, if $x$ is $60\\%$ of $y$ and $y$ is positive.",
              "form": "Answer as a number, or equivalent.",
              "answer": "150",
              "lines": [
                {
                  "step": "Find what percent of $2y$ is $5x$, if $x$ is $60\\%$ of $y$ and $y$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{3}{5}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$60\\%$ of\" multiplies by $\\dfrac{60}{100} = \\dfrac{3}{5}$, by the definition of percent."
                },
                {
                  "step": "$5x = 3y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ keeps them equal."
                },
                {
                  "step": "$\\dfrac{5x}{2y} = \\dfrac{3y}{2y}$",
                  "reason": "Substitution: $3y$ goes in place of $5x$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{3y}{2y} = \\dfrac{3}{2}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top and on the bottom, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{3}{2} = 150\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "So $5x$ is $150\\%$ of $2y$.",
                  "reason": "Answering the question asked: the question asks what percent of $2y$ the number $5x$ is."
                }
              ]
            },
            {
              "prompt": "Find what percent of $7y$ is $2x$, if $x$ is $35\\%$ of $y$ and $y$ is positive.",
              "form": "Answer as a number, or equivalent.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find what percent of $7y$ is $2x$, if $x$ is $35\\%$ of $y$ and $y$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{7}{20}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$35\\%$ of\" multiplies by $\\dfrac{35}{100} = \\dfrac{7}{20}$, by the definition of percent."
                },
                {
                  "step": "$2x = \\dfrac{7}{10}y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ keeps them equal."
                },
                {
                  "step": "$\\dfrac{2x}{7y} = \\dfrac{\\dfrac{7}{10}y}{7y}$",
                  "reason": "Substitution: $\\dfrac{7}{10}y$ goes in place of $2x$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{\\dfrac{7}{10}y}{7y} = \\dfrac{1}{10}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top and on the bottom, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{1}{10} = 10\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "So $2x$ is $10\\%$ of $7y$.",
                  "reason": "Answering the question asked: the question asks what percent of $7y$ the number $2x$ is."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find what percent of $7z$ is $2x$, if $x$ is $30\\%$ of $y$, $z$ is $20\\%$ of $y$, and $y$ is positive.",
            "lines": [
              {
                "step": "Find what percent of $7z$ is $2x$, if $x$ is $30\\%$ of $y$, $z$ is $20\\%$ of $y$, and $y$ is positive.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\dfrac{3}{10}y$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$30\\%$ of\" multiplies by $\\dfrac{30}{100} = \\dfrac{3}{10}$, by the definition of percent."
              },
              {
                "step": "$z = \\dfrac{1}{5}y$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$20\\%$ of\" multiplies by $\\dfrac{20}{100} = \\dfrac{1}{5}$, by the definition of percent."
              },
              {
                "step": "$2x = \\dfrac{3}{5}y$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ keeps them equal."
              },
              {
                "step": "$7z = \\dfrac{7}{5}y$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $7$ keeps them equal."
              },
              {
                "step": "$\\dfrac{2x}{7z} = \\dfrac{\\dfrac{3}{5}y}{\\dfrac{7}{5}y}$",
                "reason": "Substitution: each of $2x$ and $7z$ is replaced by its value in $y$, which leaves one letter."
              },
              {
                "step": "$\\dfrac{\\dfrac{3}{5}y}{\\dfrac{7}{5}y} = \\dfrac{3}{7}$",
                "reason": "Cancelling a common factor: $y$ stands on the top and on the bottom, and it is not $0$."
              },
              {
                "step": "$\\dfrac{3}{7} = \\dfrac{300}{7}\\%$",
                "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
              },
              {
                "step": "So $2x$ is $\\dfrac{300}{7}\\%$ of $7z$.",
                "reason": "Answering the question asked: the question asks what percent of $7z$ the number $2x$ is."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find what percent of $4z$ is $5x$, if $x$ is $60\\%$ of $y$, $z$ is $45\\%$ of $y$, and $y$ is positive.",
              "form": "Answer as a number, or equivalent.",
              "answer": "500/3",
              "lines": [
                {
                  "step": "Find what percent of $4z$ is $5x$, if $x$ is $60\\%$ of $y$, $z$ is $45\\%$ of $y$, and $y$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{3}{5}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$60\\%$ of\" multiplies by $\\dfrac{60}{100} = \\dfrac{3}{5}$, by the definition of percent."
                },
                {
                  "step": "$z = \\dfrac{9}{20}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$45\\%$ of\" multiplies by $\\dfrac{45}{100} = \\dfrac{9}{20}$, by the definition of percent."
                },
                {
                  "step": "$5x = 3y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ keeps them equal."
                },
                {
                  "step": "$4z = \\dfrac{9}{5}y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ keeps them equal."
                },
                {
                  "step": "$\\dfrac{5x}{4z} = \\dfrac{3y}{\\dfrac{9}{5}y}$",
                  "reason": "Substitution: each of $5x$ and $4z$ is replaced by its value in $y$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{3y}{\\dfrac{9}{5}y} = \\dfrac{5}{3}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top and on the bottom, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{5}{3} = \\dfrac{500}{3}\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "So $5x$ is $\\dfrac{500}{3}\\%$ of $4z$.",
                  "reason": "Answering the question asked: the question asks what percent of $4z$ the number $5x$ is."
                }
              ]
            },
            {
              "prompt": "Find what percent of $4z$ is $3x$, if $x$ is $12\\%$ of $y$, $z$ is $18\\%$ of $y$, and $y$ is positive.",
              "form": "Answer as a number, or equivalent.",
              "answer": "50",
              "lines": [
                {
                  "step": "Find what percent of $4z$ is $3x$, if $x$ is $12\\%$ of $y$, $z$ is $18\\%$ of $y$, and $y$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{3}{25}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$12\\%$ of\" multiplies by $\\dfrac{12}{100} = \\dfrac{3}{25}$, by the definition of percent."
                },
                {
                  "step": "$z = \\dfrac{9}{50}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$18\\%$ of\" multiplies by $\\dfrac{18}{100} = \\dfrac{9}{50}$, by the definition of percent."
                },
                {
                  "step": "$3x = \\dfrac{9}{25}y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ keeps them equal."
                },
                {
                  "step": "$4z = \\dfrac{18}{25}y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ keeps them equal."
                },
                {
                  "step": "$\\dfrac{3x}{4z} = \\dfrac{\\dfrac{9}{25}y}{\\dfrac{18}{25}y}$",
                  "reason": "Substitution: each of $3x$ and $4z$ is replaced by its value in $y$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{\\dfrac{9}{25}y}{\\dfrac{18}{25}y} = \\dfrac{1}{2}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top and on the bottom, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{1}{2} = 50\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "So $3x$ is $50\\%$ of $4z$.",
                  "reason": "Answering the question asked: the question asks what percent of $4z$ the number $3x$ is."
                }
              ]
            },
            {
              "prompt": "Find what percent of $5z$ is $6x$, if $x$ is $25\\%$ of $y$, $z$ is $40\\%$ of $y$, and $y$ is positive.",
              "form": "Answer as a number, or equivalent.",
              "answer": "75",
              "lines": [
                {
                  "step": "Find what percent of $5z$ is $6x$, if $x$ is $25\\%$ of $y$, $z$ is $40\\%$ of $y$, and $y$ is positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{1}{4}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$25\\%$ of\" multiplies by $\\dfrac{25}{100} = \\dfrac{1}{4}$, by the definition of percent."
                },
                {
                  "step": "$z = \\dfrac{2}{5}y$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and \"$40\\%$ of\" multiplies by $\\dfrac{40}{100} = \\dfrac{2}{5}$, by the definition of percent."
                },
                {
                  "step": "$6x = \\dfrac{3}{2}y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $6$ keeps them equal."
                },
                {
                  "step": "$5z = 2y$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ keeps them equal."
                },
                {
                  "step": "$\\dfrac{6x}{5z} = \\dfrac{\\dfrac{3}{2}y}{2y}$",
                  "reason": "Substitution: each of $6x$ and $5z$ is replaced by its value in $y$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{\\dfrac{3}{2}y}{2y} = \\dfrac{3}{4}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top and on the bottom, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{3}{4} = 75\\%$",
                  "reason": "The definition of percent: $k\\%$ is $\\dfrac{k}{100}$, so a share times $100$ is its percent."
                },
                {
                  "step": "So $6x$ is $75\\%$ of $5z$.",
                  "reason": "Answering the question asked: the question asks what percent of $5z$ the number $6x$ is."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t119-k4",
      "forms": [
        {
          "example": {
            "problem": "Find $x$, if a shop sells a lamp at $x\\%$ above its cost, and with the cost $10\\%$ lower and the same selling price, the price would be $(x + 20)\\%$ above the new cost.",
            "lines": [
              {
                "step": "Find $x$, if a shop sells a lamp at $x\\%$ above its cost, and with the cost $10\\%$ lower and the same selling price, the price would be $(x + 20)\\%$ above the new cost.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Take the cost to be $100$ euros.",
                "reason": "A convenient value may be chosen when every datum is relative: every datum is a percent or a multiple, so the answer is the same for every size, and a size that keeps the counts whole is taken."
              },
              {
                "step": "The selling price is $100 + x$ euros.",
                "reason": "The meaning of a rise of a percent: a rise of $x\\%$ on $100$ adds $\\dfrac{x}{100} \\cdot 100 = x$."
              },
              {
                "step": "The new cost is $100 - 10 = 90$ euros.",
                "reason": "The meaning of a fall of a percent: a fall of $10\\%$ on $100$ takes away $10$."
              },
              {
                "step": "On the new cost the price is $90\\left(1 + \\dfrac{x + 20}{100}\\right) = \\dfrac{9}{10}(x + 120)$ euros.",
                "reason": "A rise of $k\\%$ multiplies by $1 + \\dfrac{k}{100}$: here the rise is $(x + 20)\\%$, and $\\dfrac{90}{100} = \\dfrac{9}{10}$."
              },
              {
                "step": "$100 + x = \\dfrac{9}{10}(x + 120)$",
                "reason": "Writing a sentence as an equation: the selling price stays the same, so the two prices are equal."
              },
              {
                "step": "$10(100 + x) = 9(x + 120)$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $10$ keeps them equal and clears the fraction."
              },
              {
                "step": "$1000 + 10x = 9x + 1080$",
                "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
              },
              {
                "step": "$10x = 9x + 80$",
                "reason": "Adding the same number to both sides: adding $-1000$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 80$",
                "reason": "Adding the same number to both sides: adding $-9x$ to both sides keeps them equal and leaves $x$ alone on the left."
              },
              {
                "step": "With a cost of $100$ euros the price is $180$ euros; the new cost is $90$ euros, and $\\dfrac{9}{10} \\cdot 200 = 180$, a price $100\\%$ above it.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "The lamp sells at $80\\%$ above its cost.",
                "reason": "Answering the question asked: the question asks for $x$, the percent above the cost."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$, if a shop sells a bike at $x\\%$ above its cost, and with the cost $20\\%$ lower and the same selling price, the price would be $(x + 30)\\%$ above the new cost.",
              "form": "Answer as a number, or equivalent.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find $x$, if a shop sells a bike at $x\\%$ above its cost, and with the cost $20\\%$ lower and the same selling price, the price would be $(x + 30)\\%$ above the new cost.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take the cost to be $100$ euros.",
                  "reason": "A convenient value may be chosen when every datum is relative: every datum is a percent or a multiple, so the answer is the same for every size, and a size that keeps the counts whole is taken."
                },
                {
                  "step": "The selling price is $100 + x$ euros.",
                  "reason": "The meaning of a rise of a percent: a rise of $x\\%$ on $100$ adds $\\dfrac{x}{100} \\cdot 100 = x$."
                },
                {
                  "step": "The new cost is $100 - 20 = 80$ euros.",
                  "reason": "The meaning of a fall of a percent: a fall of $20\\%$ on $100$ takes away $20$."
                },
                {
                  "step": "On the new cost the price is $80\\left(1 + \\dfrac{x + 30}{100}\\right) = \\dfrac{4}{5}(x + 130)$ euros.",
                  "reason": "A rise of $k\\%$ multiplies by $1 + \\dfrac{k}{100}$: here the rise is $(x + 30)\\%$, and $\\dfrac{80}{100} = \\dfrac{4}{5}$."
                },
                {
                  "step": "$100 + x = \\dfrac{4}{5}(x + 130)$",
                  "reason": "Writing a sentence as an equation: the selling price stays the same, so the two prices are equal."
                },
                {
                  "step": "$5(100 + x) = 4(x + 130)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$500 + 5x = 4x + 520$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$5x = 4x + 20$",
                  "reason": "Adding the same number to both sides: adding $-500$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 20$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "With a cost of $100$ euros the price is $120$ euros; the new cost is $80$ euros, and $\\dfrac{4}{5} \\cdot 150 = 120$, a price $50\\%$ above it.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The bike sells at $20\\%$ above its cost.",
                  "reason": "Answering the question asked: the question asks for $x$, the percent above the cost."
                }
              ]
            },
            {
              "prompt": "Find $x$, if a shop sells a chair at $x\\%$ above its cost, and with the cost $25\\%$ lower and the same selling price, the price would be $(x + 50)\\%$ above the new cost.",
              "form": "Answer as a number, or equivalent.",
              "answer": "50",
              "lines": [
                {
                  "step": "Find $x$, if a shop sells a chair at $x\\%$ above its cost, and with the cost $25\\%$ lower and the same selling price, the price would be $(x + 50)\\%$ above the new cost.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take the cost to be $100$ euros.",
                  "reason": "A convenient value may be chosen when every datum is relative: every datum is a percent or a multiple, so the answer is the same for every size, and a size that keeps the counts whole is taken."
                },
                {
                  "step": "The selling price is $100 + x$ euros.",
                  "reason": "The meaning of a rise of a percent: a rise of $x\\%$ on $100$ adds $\\dfrac{x}{100} \\cdot 100 = x$."
                },
                {
                  "step": "The new cost is $100 - 25 = 75$ euros.",
                  "reason": "The meaning of a fall of a percent: a fall of $25\\%$ on $100$ takes away $25$."
                },
                {
                  "step": "On the new cost the price is $75\\left(1 + \\dfrac{x + 50}{100}\\right) = \\dfrac{3}{4}(x + 150)$ euros.",
                  "reason": "A rise of $k\\%$ multiplies by $1 + \\dfrac{k}{100}$: here the rise is $(x + 50)\\%$, and $\\dfrac{75}{100} = \\dfrac{3}{4}$."
                },
                {
                  "step": "$100 + x = \\dfrac{3}{4}(x + 150)$",
                  "reason": "Writing a sentence as an equation: the selling price stays the same, so the two prices are equal."
                },
                {
                  "step": "$4(100 + x) = 3(x + 150)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$400 + 4x = 3x + 450$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$4x = 3x + 50$",
                  "reason": "Adding the same number to both sides: adding $-400$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 50$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "With a cost of $100$ euros the price is $150$ euros; the new cost is $75$ euros, and $\\dfrac{3}{4} \\cdot 200 = 150$, a price $100\\%$ above it.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The chair sells at $50\\%$ above its cost.",
                  "reason": "Answering the question asked: the question asks for $x$, the percent above the cost."
                }
              ]
            },
            {
              "prompt": "Find $x$, if a shop sells a coat at $x\\%$ above its cost, and with the cost $5\\%$ lower and the same selling price, the price would be $(x + 10)\\%$ above the new cost.",
              "form": "Answer as a number, or equivalent.",
              "answer": "90",
              "lines": [
                {
                  "step": "Find $x$, if a shop sells a coat at $x\\%$ above its cost, and with the cost $5\\%$ lower and the same selling price, the price would be $(x + 10)\\%$ above the new cost.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take the cost to be $100$ euros.",
                  "reason": "A convenient value may be chosen when every datum is relative: every datum is a percent or a multiple, so the answer is the same for every size, and a size that keeps the counts whole is taken."
                },
                {
                  "step": "The selling price is $100 + x$ euros.",
                  "reason": "The meaning of a rise of a percent: a rise of $x\\%$ on $100$ adds $\\dfrac{x}{100} \\cdot 100 = x$."
                },
                {
                  "step": "The new cost is $100 - 5 = 95$ euros.",
                  "reason": "The meaning of a fall of a percent: a fall of $5\\%$ on $100$ takes away $5$."
                },
                {
                  "step": "On the new cost the price is $95\\left(1 + \\dfrac{x + 10}{100}\\right) = \\dfrac{19}{20}(x + 110)$ euros.",
                  "reason": "A rise of $k\\%$ multiplies by $1 + \\dfrac{k}{100}$: here the rise is $(x + 10)\\%$, and $\\dfrac{95}{100} = \\dfrac{19}{20}$."
                },
                {
                  "step": "$100 + x = \\dfrac{19}{20}(x + 110)$",
                  "reason": "Writing a sentence as an equation: the selling price stays the same, so the two prices are equal."
                },
                {
                  "step": "$20(100 + x) = 19(x + 110)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $20$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$2000 + 20x = 19x + 2090$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$20x = 19x + 90$",
                  "reason": "Adding the same number to both sides: adding $-2000$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 90$",
                  "reason": "Adding the same number to both sides: adding $-19x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "With a cost of $100$ euros the price is $190$ euros; the new cost is $95$ euros, and $\\dfrac{19}{20} \\cdot 200 = 190$, a price $100\\%$ above it.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The coat sells at $90\\%$ above its cost.",
                  "reason": "Answering the question asked: the question asks for $x$, the percent above the cost."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the wage, in euros, that pays a tax of $20\\%$ of the whole wage, if the tax takes $10\\%$ of the first $6000$ euros and $30\\%$ of the part of the wage above $6000$ euros, and the wage is above $6000$ euros.",
            "lines": [
              {
                "step": "Find the wage, in euros, that pays a tax of $20\\%$ of the whole wage, if the tax takes $10\\%$ of the first $6000$ euros and $30\\%$ of the part of the wage above $6000$ euros, and the wage is above $6000$ euros.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the wage in euros.",
                "reason": "Defining the unknown: the letter stands for the quantity the question asks for, in euros."
              },
              {
                "step": "The tax on the first $6000$ euros is $\\dfrac{10}{100} \\cdot 6000 = 600$ euros.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "The tax on the rest is $\\dfrac{30}{100}(x - 6000)$ euros.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "The whole tax is $\\dfrac{20}{100}x$ euros.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "$600 + \\dfrac{30}{100}(x - 6000) = \\dfrac{20}{100}x$",
                "reason": "Writing a sentence as an equation: the tax on the two parts adds up to the whole tax."
              },
              {
                "step": "$60\\,000 + 30(x - 6000) = 20x$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
              },
              {
                "step": "$60\\,000 + 30x - 180\\,000 = 20x$",
                "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
              },
              {
                "step": "$30x - 20x = 180\\,000 - 60\\,000$",
                "reason": "Adding the same number to both sides: adding $180\\,000 - 60\\,000 - 20x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$10x = 120\\,000$",
                "reason": "Collecting like terms: the coefficients of $x$ are added, and the numbers on the right are worked out."
              },
              {
                "step": "$x = 12\\,000$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $10$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "On a wage of $12\\,000$ euros the tax is $600 + \\dfrac{30}{100} \\cdot 6000 = 2400$ euros, which is $20\\%$ of $12\\,000$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "The wage is $12\\,000$ euros.",
                "reason": "Answering the question asked: the question asks for the wage, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the wage, in euros, that pays a tax of $15\\%$ of the whole wage, if the tax takes $5\\%$ of the first $8000$ euros and $25\\%$ of the part of the wage above $8000$ euros, and the wage is above $8000$ euros.",
              "form": "Answer as a number, or equivalent.",
              "answer": "16000",
              "lines": [
                {
                  "step": "Find the wage, in euros, that pays a tax of $15\\%$ of the whole wage, if the tax takes $5\\%$ of the first $8000$ euros and $25\\%$ of the part of the wage above $8000$ euros, and the wage is above $8000$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the wage in euros.",
                  "reason": "Defining the unknown: the letter stands for the quantity the question asks for, in euros."
                },
                {
                  "step": "The tax on the first $8000$ euros is $\\dfrac{5}{100} \\cdot 8000 = 400$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The tax on the rest is $\\dfrac{25}{100}(x - 8000)$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The whole tax is $\\dfrac{15}{100}x$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$400 + \\dfrac{25}{100}(x - 8000) = \\dfrac{15}{100}x$",
                  "reason": "Writing a sentence as an equation: the tax on the two parts adds up to the whole tax."
                },
                {
                  "step": "$40\\,000 + 25(x - 8000) = 15x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$40\\,000 + 25x - 200\\,000 = 15x$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$25x - 15x = 200\\,000 - 40\\,000$",
                  "reason": "Adding the same number to both sides: adding $200\\,000 - 40\\,000 - 15x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$10x = 160\\,000$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added, and the numbers on the right are worked out."
                },
                {
                  "step": "$x = 16\\,000$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $10$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "On a wage of $16\\,000$ euros the tax is $400 + \\dfrac{25}{100} \\cdot 8000 = 2400$ euros, which is $15\\%$ of $16\\,000$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The wage is $16\\,000$ euros.",
                  "reason": "Answering the question asked: the question asks for the wage, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the wage, in euros, that pays a tax of $20\\%$ of the whole wage, if the tax takes $12\\%$ of the first $14\\,000$ euros and $40\\%$ of the part of the wage above $14\\,000$ euros, and the wage is above $14\\,000$ euros.",
              "form": "Answer as a number, or equivalent.",
              "answer": "19600",
              "lines": [
                {
                  "step": "Find the wage, in euros, that pays a tax of $20\\%$ of the whole wage, if the tax takes $12\\%$ of the first $14\\,000$ euros and $40\\%$ of the part of the wage above $14\\,000$ euros, and the wage is above $14\\,000$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the wage in euros.",
                  "reason": "Defining the unknown: the letter stands for the quantity the question asks for, in euros."
                },
                {
                  "step": "The tax on the first $14\\,000$ euros is $\\dfrac{12}{100} \\cdot 14\\,000 = 1680$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The tax on the rest is $\\dfrac{40}{100}(x - 14\\,000)$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The whole tax is $\\dfrac{20}{100}x$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$1680 + \\dfrac{40}{100}(x - 14\\,000) = \\dfrac{20}{100}x$",
                  "reason": "Writing a sentence as an equation: the tax on the two parts adds up to the whole tax."
                },
                {
                  "step": "$168\\,000 + 40(x - 14\\,000) = 20x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$168\\,000 + 40x - 560\\,000 = 20x$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$40x - 20x = 560\\,000 - 168\\,000$",
                  "reason": "Adding the same number to both sides: adding $560\\,000 - 168\\,000 - 20x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$20x = 392\\,000$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added, and the numbers on the right are worked out."
                },
                {
                  "step": "$x = 19\\,600$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $20$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "On a wage of $19\\,600$ euros the tax is $1680 + \\dfrac{40}{100} \\cdot 5600 = 3920$ euros, which is $20\\%$ of $19\\,600$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The wage is $19\\,600$ euros.",
                  "reason": "Answering the question asked: the question asks for the wage, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the wage, in euros, that pays a tax of $18\\%$ of the whole wage, if the tax takes $8\\%$ of the first $6000$ euros and $30\\%$ of the part of the wage above $6000$ euros, and the wage is above $6000$ euros.",
              "form": "Answer as a number, or equivalent.",
              "answer": "11000",
              "lines": [
                {
                  "step": "Find the wage, in euros, that pays a tax of $18\\%$ of the whole wage, if the tax takes $8\\%$ of the first $6000$ euros and $30\\%$ of the part of the wage above $6000$ euros, and the wage is above $6000$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the wage in euros.",
                  "reason": "Defining the unknown: the letter stands for the quantity the question asks for, in euros."
                },
                {
                  "step": "The tax on the first $6000$ euros is $\\dfrac{8}{100} \\cdot 6000 = 480$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The tax on the rest is $\\dfrac{30}{100}(x - 6000)$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The whole tax is $\\dfrac{18}{100}x$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$480 + \\dfrac{30}{100}(x - 6000) = \\dfrac{18}{100}x$",
                  "reason": "Writing a sentence as an equation: the tax on the two parts adds up to the whole tax."
                },
                {
                  "step": "$48\\,000 + 30(x - 6000) = 18x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$48\\,000 + 30x - 180\\,000 = 18x$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$30x - 18x = 180\\,000 - 48\\,000$",
                  "reason": "Adding the same number to both sides: adding $180\\,000 - 48\\,000 - 18x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$12x = 132\\,000$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added, and the numbers on the right are worked out."
                },
                {
                  "step": "$x = 11\\,000$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $12$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "On a wage of $11\\,000$ euros the tax is $480 + \\dfrac{30}{100} \\cdot 5000 = 1980$ euros, which is $18\\%$ of $11\\,000$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The wage is $11\\,000$ euros.",
                  "reason": "Answering the question asked: the question asks for the wage, which is $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the wage, in euros, if a tax takes $a\\%$ of the first $6000$ euros of the wage and $(a + 5)\\%$ of the part above $6000$ euros, the whole tax is $(a + 2)\\%$ of the wage, and the wage is above $6000$ euros.",
            "lines": [
              {
                "step": "Find the wage, in euros, if a tax takes $a\\%$ of the first $6000$ euros of the wage and $(a + 5)\\%$ of the part above $6000$ euros, the whole tax is $(a + 2)\\%$ of the wage, and the wage is above $6000$ euros.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the wage in euros.",
                "reason": "Defining the unknown: the letter stands for the quantity the question asks for, in euros."
              },
              {
                "step": "The tax on the first $6000$ euros is $\\dfrac{a}{100} \\cdot 6000 = 60a$ euros.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "The tax on the rest is $\\dfrac{a + 5}{100}(x - 6000)$ euros.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "The whole tax is $\\dfrac{a + 2}{100}x$ euros.",
                "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
              },
              {
                "step": "$60a + \\dfrac{a + 5}{100}(x - 6000) = \\dfrac{a + 2}{100}x$",
                "reason": "Writing a sentence as an equation: the tax on the two parts adds up to the whole tax."
              },
              {
                "step": "$6000a + (a + 5)(x - 6000) = (a + 2)x$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
              },
              {
                "step": "$6000a + ax - 6000a + 5x - 30\\,000 = ax + 2x$",
                "reason": "Multiplying out: by the distributive law each term of $a + 5$ multiplies each term of $x - 6000$, and $a + 2$ multiplies $x$."
              },
              {
                "step": "$ax + 5x - 30\\,000 = ax + 2x$",
                "reason": "Collecting like terms: $6000a$ and $-6000a$ add to $0$."
              },
              {
                "step": "$5x - 30\\,000 = 2x$",
                "reason": "Adding the same number to both sides: adding $-ax$ to both sides keeps them equal, and the letter $a$ is gone."
              },
              {
                "step": "$3x = 30\\,000$",
                "reason": "Adding the same number to both sides: adding $30\\,000 - 2x$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 10\\,000$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "On a wage of $10\\,000$ euros the tax is $60a + \\dfrac{a + 5}{100} \\cdot 4000 = 100a + 200$ euros, and $\\dfrac{a + 2}{100} \\cdot 10\\,000 = 100a + 200$ euros, the same for every $a$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "The wage is $10\\,000$ euros.",
                "reason": "Answering the question asked: the question asks for the wage, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the wage, in euros, if a tax takes $a\\%$ of the first $9000$ euros of the wage and $(a + 5)\\%$ of the part above $9000$ euros, the whole tax is $(a + 3)\\%$ of the wage, and the wage is above $9000$ euros.",
              "form": "Answer as a number, or equivalent.",
              "answer": "22500",
              "lines": [
                {
                  "step": "Find the wage, in euros, if a tax takes $a\\%$ of the first $9000$ euros of the wage and $(a + 5)\\%$ of the part above $9000$ euros, the whole tax is $(a + 3)\\%$ of the wage, and the wage is above $9000$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the wage in euros.",
                  "reason": "Defining the unknown: the letter stands for the quantity the question asks for, in euros."
                },
                {
                  "step": "The tax on the first $9000$ euros is $\\dfrac{a}{100} \\cdot 9000 = 90a$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The tax on the rest is $\\dfrac{a + 5}{100}(x - 9000)$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The whole tax is $\\dfrac{a + 3}{100}x$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$90a + \\dfrac{a + 5}{100}(x - 9000) = \\dfrac{a + 3}{100}x$",
                  "reason": "Writing a sentence as an equation: the tax on the two parts adds up to the whole tax."
                },
                {
                  "step": "$9000a + (a + 5)(x - 9000) = (a + 3)x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$9000a + ax - 9000a + 5x - 45\\,000 = ax + 3x$",
                  "reason": "Multiplying out: by the distributive law each term of $a + 5$ multiplies each term of $x - 9000$, and $a + 3$ multiplies $x$."
                },
                {
                  "step": "$ax + 5x - 45\\,000 = ax + 3x$",
                  "reason": "Collecting like terms: $9000a$ and $-9000a$ add to $0$."
                },
                {
                  "step": "$5x - 45\\,000 = 3x$",
                  "reason": "Adding the same number to both sides: adding $-ax$ to both sides keeps them equal, and the letter $a$ is gone."
                },
                {
                  "step": "$2x = 45\\,000$",
                  "reason": "Adding the same number to both sides: adding $45\\,000 - 3x$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 22\\,500$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "On a wage of $22\\,500$ euros the tax is $90a + \\dfrac{a + 5}{100} \\cdot 13\\,500 = 225a + 675$ euros, and $\\dfrac{a + 3}{100} \\cdot 22\\,500 = 225a + 675$ euros, the same for every $a$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The wage is $22\\,500$ euros.",
                  "reason": "Answering the question asked: the question asks for the wage, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the wage, in euros, if a tax takes $a\\%$ of the first $10\\,000$ euros of the wage and $(a + 6)\\%$ of the part above $10\\,000$ euros, the whole tax is $(a + 2)\\%$ of the wage, and the wage is above $10\\,000$ euros.",
              "form": "Answer as a number, or equivalent.",
              "answer": "15000",
              "lines": [
                {
                  "step": "Find the wage, in euros, if a tax takes $a\\%$ of the first $10\\,000$ euros of the wage and $(a + 6)\\%$ of the part above $10\\,000$ euros, the whole tax is $(a + 2)\\%$ of the wage, and the wage is above $10\\,000$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the wage in euros.",
                  "reason": "Defining the unknown: the letter stands for the quantity the question asks for, in euros."
                },
                {
                  "step": "The tax on the first $10\\,000$ euros is $\\dfrac{a}{100} \\cdot 10\\,000 = 100a$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The tax on the rest is $\\dfrac{a + 6}{100}(x - 10\\,000)$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The whole tax is $\\dfrac{a + 2}{100}x$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$100a + \\dfrac{a + 6}{100}(x - 10\\,000) = \\dfrac{a + 2}{100}x$",
                  "reason": "Writing a sentence as an equation: the tax on the two parts adds up to the whole tax."
                },
                {
                  "step": "$10\\,000a + (a + 6)(x - 10\\,000) = (a + 2)x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$10\\,000a + ax - 10\\,000a + 6x - 60\\,000 = ax + 2x$",
                  "reason": "Multiplying out: by the distributive law each term of $a + 6$ multiplies each term of $x - 10\\,000$, and $a + 2$ multiplies $x$."
                },
                {
                  "step": "$ax + 6x - 60\\,000 = ax + 2x$",
                  "reason": "Collecting like terms: $10\\,000a$ and $-10\\,000a$ add to $0$."
                },
                {
                  "step": "$6x - 60\\,000 = 2x$",
                  "reason": "Adding the same number to both sides: adding $-ax$ to both sides keeps them equal, and the letter $a$ is gone."
                },
                {
                  "step": "$4x = 60\\,000$",
                  "reason": "Adding the same number to both sides: adding $60\\,000 - 2x$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 15\\,000$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "On a wage of $15\\,000$ euros the tax is $100a + \\dfrac{a + 6}{100} \\cdot 5000 = 150a + 300$ euros, and $\\dfrac{a + 2}{100} \\cdot 15\\,000 = 150a + 300$ euros, the same for every $a$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The wage is $15\\,000$ euros.",
                  "reason": "Answering the question asked: the question asks for the wage, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the wage, in euros, if a tax takes $a\\%$ of the first $12\\,000$ euros of the wage and $(a + 7)\\%$ of the part above $12\\,000$ euros, the whole tax is $(a + 3)\\%$ of the wage, and the wage is above $12\\,000$ euros.",
              "form": "Answer as a number, or equivalent.",
              "answer": "21000",
              "lines": [
                {
                  "step": "Find the wage, in euros, if a tax takes $a\\%$ of the first $12\\,000$ euros of the wage and $(a + 7)\\%$ of the part above $12\\,000$ euros, the whole tax is $(a + 3)\\%$ of the wage, and the wage is above $12\\,000$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the wage in euros.",
                  "reason": "Defining the unknown: the letter stands for the quantity the question asks for, in euros."
                },
                {
                  "step": "The tax on the first $12\\,000$ euros is $\\dfrac{a}{100} \\cdot 12\\,000 = 120a$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The tax on the rest is $\\dfrac{a + 7}{100}(x - 12\\,000)$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "The whole tax is $\\dfrac{a + 3}{100}x$ euros.",
                  "reason": "The definition of percent: $k\\%$ of a quantity is $\\dfrac{k}{100}$ times it."
                },
                {
                  "step": "$120a + \\dfrac{a + 7}{100}(x - 12\\,000) = \\dfrac{a + 3}{100}x$",
                  "reason": "Writing a sentence as an equation: the tax on the two parts adds up to the whole tax."
                },
                {
                  "step": "$12\\,000a + (a + 7)(x - 12\\,000) = (a + 3)x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $100$ keeps them equal and clears the fractions."
                },
                {
                  "step": "$12\\,000a + ax - 12\\,000a + 7x - 84\\,000 = ax + 3x$",
                  "reason": "Multiplying out: by the distributive law each term of $a + 7$ multiplies each term of $x - 12\\,000$, and $a + 3$ multiplies $x$."
                },
                {
                  "step": "$ax + 7x - 84\\,000 = ax + 3x$",
                  "reason": "Collecting like terms: $12\\,000a$ and $-12\\,000a$ add to $0$."
                },
                {
                  "step": "$7x - 84\\,000 = 3x$",
                  "reason": "Adding the same number to both sides: adding $-ax$ to both sides keeps them equal, and the letter $a$ is gone."
                },
                {
                  "step": "$4x = 84\\,000$",
                  "reason": "Adding the same number to both sides: adding $84\\,000 - 3x$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 21\\,000$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "On a wage of $21\\,000$ euros the tax is $120a + \\dfrac{a + 7}{100} \\cdot 9000 = 210a + 630$ euros, and $\\dfrac{a + 3}{100} \\cdot 21\\,000 = 210a + 630$ euros, the same for every $a$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The wage is $21\\,000$ euros.",
                  "reason": "Answering the question asked: the question asks for the wage, which is $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t119-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find what percent of the players in the red team and the blue team together are left-handed, if $20\\%$ of the players in the red team are left-handed, $35\\%$ of the players in the blue team are left-handed, and the blue team has $3$ times as many players as the red team.",
            "given": [
              "Let $x$ be the number of players in the red team, so the blue team has $3x$.",
              "In the red team: $\\dfrac{20}{100} \\cdot x = \\dfrac{1}{5}x$",
              "In the blue team: $\\dfrac{35}{100} \\cdot 3x = \\dfrac{21}{20}x$",
              "Players in all: $x + 3x = 4x$",
              "Players that are left-handed, in all: $\\dfrac{1}{5}x + \\dfrac{21}{20}x = 20\\% + 35\\% = 55\\%$",
              "So $55\\%$ of the players are left-handed."
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find what percent of the players in the red team and the blue team together are left-handed, if $20\\%$ of the players in the red team are left-handed, $35\\%$ of the players in the blue team are left-handed, and the blue team has $3$ times as many players as the red team.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 runs on from the count $\\dfrac{1}{5}x + \\dfrac{21}{20}x$ with a second equals sign to $20\\% + 35\\%$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that both sides are one number, and $\\dfrac{1}{5}x + \\dfrac{21}{20}x$ counts players, while $20\\%$ and $35\\%$ are shares of two groups of different sizes."
              },
              {
                "step": "Adding the coefficients of $x$ gives $\\dfrac{5}{4}x$.",
                "reason": "Collecting like terms: the coefficients of $x$ are added."
              },
              {
                "step": "Line 5 written right is $\\dfrac{1}{5}x + \\dfrac{21}{20}x = \\dfrac{5}{4}x$.",
                "reason": "The line keeps the count, and the share comes later, from dividing by the number of all the players."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find what percent of the rooms in the old wing and the new wing together have a balcony, if $25\\%$ of the rooms in the old wing have a balcony, $10\\%$ of the rooms in the new wing have a balcony, and the new wing has $4$ times as many rooms as the old wing.",
              "given": [
                "Let $x$ be the number of rooms in the old wing, so the new wing has $4x$.",
                "In the old wing: $\\dfrac{25}{100} \\cdot x = \\dfrac{1}{4}x$",
                "In the new wing: $\\dfrac{10}{100} \\cdot 4x = \\dfrac{2}{5}x$",
                "Rooms that have a balcony, in all: $\\dfrac{1}{4}x + \\dfrac{2}{5}x = 25\\% + 10\\% = 35\\%$",
                "So $35\\%$ of the rooms have a balcony."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 1/4*x+2/5*x = 13/20*x",
              "lines": [
                {
                  "step": "The working is for this problem: Find what percent of the rooms in the old wing and the new wing together have a balcony, if $25\\%$ of the rooms in the old wing have a balcony, $10\\%$ of the rooms in the new wing have a balcony, and the new wing has $4$ times as many rooms as the old wing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 runs on from the count $\\dfrac{1}{4}x + \\dfrac{2}{5}x$ with a second equals sign to $25\\% + 10\\%$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that both sides are one number, and $\\dfrac{1}{4}x + \\dfrac{2}{5}x$ counts rooms, while $25\\%$ and $10\\%$ are shares of two groups of different sizes."
                },
                {
                  "step": "Adding the coefficients of $x$ gives $\\dfrac{13}{20}x$.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{1}{4}x + \\dfrac{2}{5}x = \\dfrac{13}{20}x$.",
                  "reason": "The line keeps the count, and the share comes later, from dividing by the number of all the rooms."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find what percent of the sheep in the upper field and the lower field together are black, if $14\\%$ of the sheep in the upper field are black, $50\\%$ of the sheep in the lower field are black, and the lower field has half as many sheep as the upper field.",
              "given": [
                "Let $x$ be the number of sheep in the upper field, so the lower field has $\\dfrac{1}{2}x$.",
                "In the upper field: $\\dfrac{14}{100} \\cdot x = \\dfrac{7}{50}x$",
                "In the lower field: $\\dfrac{50}{100} \\cdot \\dfrac{1}{2}x = \\dfrac{1}{4}x$",
                "Sheep in all: $x + \\dfrac{1}{2}x = \\dfrac{3}{2}x$",
                "Sheep that are black, in all: $\\dfrac{7}{50}x + \\dfrac{1}{4}x = 14\\% + 50\\% = 64\\%$",
                "So $64\\%$ of the sheep are black."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 7/50*x+1/4*x = 39/100*x",
              "lines": [
                {
                  "step": "The working is for this problem: Find what percent of the sheep in the upper field and the lower field together are black, if $14\\%$ of the sheep in the upper field are black, $50\\%$ of the sheep in the lower field are black, and the lower field has half as many sheep as the upper field.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 runs on from the count $\\dfrac{7}{50}x + \\dfrac{1}{4}x$ with a second equals sign to $14\\% + 50\\%$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that both sides are one number, and $\\dfrac{7}{50}x + \\dfrac{1}{4}x$ counts sheep, while $14\\%$ and $50\\%$ are shares of two groups of different sizes."
                },
                {
                  "step": "Adding the coefficients of $x$ gives $\\dfrac{39}{100}x$.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "Line 5 written right is $\\dfrac{7}{50}x + \\dfrac{1}{4}x = \\dfrac{39}{100}x$.",
                  "reason": "The line keeps the count, and the share comes later, from dividing by the number of all the sheep."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find what percent of the marbles in the first bag and the second bag together are striped, if $40\\%$ of the marbles in the first bag are striped, $5\\%$ of the marbles in the second bag are striped, and the second bag has $\\dfrac{3}{2}$ times as many marbles as the first bag.",
              "given": [
                "Let $x$ be the number of marbles in the first bag, so the second bag has $\\dfrac{3}{2}x$.",
                "In the first bag: $\\dfrac{40}{100} \\cdot x = \\dfrac{2}{5}x$",
                "In the second bag: $\\dfrac{5}{100} \\cdot \\dfrac{3}{2}x = \\dfrac{3}{40}x$",
                "Marbles that are striped, in all: $\\dfrac{2}{5}x + \\dfrac{3}{40}x = 40\\% + 5\\% = 45\\%$",
                "So $45\\%$ of the marbles are striped."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2/5*x+3/40*x = 19/40*x",
              "lines": [
                {
                  "step": "The working is for this problem: Find what percent of the marbles in the first bag and the second bag together are striped, if $40\\%$ of the marbles in the first bag are striped, $5\\%$ of the marbles in the second bag are striped, and the second bag has $\\dfrac{3}{2}$ times as many marbles as the first bag.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 runs on from the count $\\dfrac{2}{5}x + \\dfrac{3}{40}x$ with a second equals sign to $40\\% + 5\\%$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that both sides are one number, and $\\dfrac{2}{5}x + \\dfrac{3}{40}x$ counts marbles, while $40\\%$ and $5\\%$ are shares of two groups of different sizes."
                },
                {
                  "step": "Adding the coefficients of $x$ gives $\\dfrac{19}{40}x$.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{2}{5}x + \\dfrac{3}{40}x = \\dfrac{19}{40}x$.",
                  "reason": "The line keeps the count, and the share comes later, from dividing by the number of all the marbles."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find how many mL of $300$ mL of a $20\\%$ acid solution are poured off and replaced by pure acid to give a $36\\%$ acid solution.",
            "given": [
              "Let $x$ be the number of mL poured off and replaced.",
              "Acid at the start: $\\dfrac{20}{100} \\cdot 300 = 60$",
              "Acid after: $60 + \\dfrac{20}{100}x + x = 60 + \\dfrac{120}{100}x$",
              "Acid wanted: $\\dfrac{36}{100} \\cdot 300 = 108$",
              "$60 + \\dfrac{120}{100}x = 108$",
              "$\\dfrac{120}{100}x = 48$",
              "$x = 40$"
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find how many mL of $300$ mL of a $20\\%$ acid solution are poured off and replaced by pure acid to give a $36\\%$ acid solution.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 adds the acid in the mL poured off, where pouring off takes it away.",
                "reason": "A sign is lost: the acid that leaves with the mL poured off comes with a minus sign."
              },
              {
                "step": "The acid poured off is $\\dfrac{20}{100}x$, so it is taken from $60$, and the coefficients of $x$ give $\\dfrac{80}{100}$.",
                "reason": "Collecting like terms: the coefficients of $x$ are added, each with its sign."
              },
              {
                "step": "Line 3 written right is $60 - \\dfrac{20}{100}x + x = 60 + \\dfrac{80}{100}x$.",
                "reason": "The line changes the amount of acid by what leaves and what comes in, each with its own sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find how many mL of $160$ mL of a $10\\%$ salt solution are poured off and replaced by a $50\\%$ salt solution to give a $30\\%$ salt solution.",
              "given": [
                "Let $x$ be the number of mL poured off and replaced.",
                "Salt at the start: $\\dfrac{10}{100} \\cdot 160 = 16$",
                "Salt wanted: $\\dfrac{30}{100} \\cdot 160 = 48$",
                "Salt after: $16 + \\dfrac{10}{100}x + \\dfrac{50}{100}x = 16 + \\dfrac{60}{100}x$",
                "$16 + \\dfrac{60}{100}x = 48$",
                "$\\dfrac{60}{100}x = 32$",
                "$x = \\dfrac{160}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 16-10/100*x+50/100*x = 16+40/100*x",
              "lines": [
                {
                  "step": "The working is for this problem: Find how many mL of $160$ mL of a $10\\%$ salt solution are poured off and replaced by a $50\\%$ salt solution to give a $30\\%$ salt solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 adds the salt in the mL poured off, where pouring off takes it away.",
                  "reason": "A sign is lost: the salt that leaves with the mL poured off comes with a minus sign."
                },
                {
                  "step": "The salt poured off is $\\dfrac{10}{100}x$, so it is taken from $16$, and the coefficients of $x$ give $\\dfrac{40}{100}$.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added, each with its sign."
                },
                {
                  "step": "Line 4 written right is $16 - \\dfrac{10}{100}x + \\dfrac{50}{100}x = 16 + \\dfrac{40}{100}x$.",
                  "reason": "The line changes the amount of salt by what leaves and what comes in, each with its own sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find how many mL of $200$ mL of a $25\\%$ sugar syrup are poured off and replaced by pure sugar to give a $43\\%$ sugar syrup.",
              "given": [
                "Let $x$ be the number of mL poured off and replaced.",
                "Sugar at the start: $\\dfrac{25}{100} \\cdot 200 = 50$",
                "Sugar after: $50 + \\dfrac{25}{100}x + x = 50 + \\dfrac{125}{100}x$",
                "Sugar wanted: $\\dfrac{43}{100} \\cdot 200 = 86$",
                "$50 + \\dfrac{125}{100}x = 86$",
                "$\\dfrac{125}{100}x = 36$",
                "$x = \\dfrac{144}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 50-25/100*x+x = 50+75/100*x",
              "lines": [
                {
                  "step": "The working is for this problem: Find how many mL of $200$ mL of a $25\\%$ sugar syrup are poured off and replaced by pure sugar to give a $43\\%$ sugar syrup.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds the sugar in the mL poured off, where pouring off takes it away.",
                  "reason": "A sign is lost: the sugar that leaves with the mL poured off comes with a minus sign."
                },
                {
                  "step": "The sugar poured off is $\\dfrac{25}{100}x$, so it is taken from $50$, and the coefficients of $x$ give $\\dfrac{75}{100}$.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added, each with its sign."
                },
                {
                  "step": "Line 3 written right is $50 - \\dfrac{25}{100}x + x = 50 + \\dfrac{75}{100}x$.",
                  "reason": "The line changes the amount of sugar by what leaves and what comes in, each with its own sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find how many litres of $80$ litres of a $30\\%$ juice drink are poured off and replaced by a $90\\%$ juice drink to give a $45\\%$ juice drink.",
              "given": [
                "Let $x$ be the number of litres poured off and replaced.",
                "Juice at the start: $\\dfrac{30}{100} \\cdot 80 = 24$",
                "Juice wanted: $\\dfrac{45}{100} \\cdot 80 = 36$",
                "Juice after: $24 + \\dfrac{30}{100}x + \\dfrac{90}{100}x = 24 + \\dfrac{120}{100}x$",
                "$24 + \\dfrac{120}{100}x = 36$",
                "$\\dfrac{120}{100}x = 12$",
                "$x = 10$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 24-30/100*x+90/100*x = 24+60/100*x",
              "lines": [
                {
                  "step": "The working is for this problem: Find how many litres of $80$ litres of a $30\\%$ juice drink are poured off and replaced by a $90\\%$ juice drink to give a $45\\%$ juice drink.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 adds the juice in the litres poured off, where pouring off takes it away.",
                  "reason": "A sign is lost: the juice that leaves with the litres poured off comes with a minus sign."
                },
                {
                  "step": "The juice poured off is $\\dfrac{30}{100}x$, so it is taken from $24$, and the coefficients of $x$ give $\\dfrac{60}{100}$.",
                  "reason": "Collecting like terms: the coefficients of $x$ are added, each with its sign."
                },
                {
                  "step": "Line 4 written right is $24 - \\dfrac{30}{100}x + \\dfrac{90}{100}x = 24 + \\dfrac{60}{100}x$.",
                  "reason": "The line changes the amount of juice by what leaves and what comes in, each with its own sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t119-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation in $x$ and $y$ for this sentence: Mixing $x$ litres of a $40\\%$ acid solution with $y$ litres of a $10\\%$ acid solution gives a mix that holds $9$ litres of acid.",
            "lines": [
              {
                "step": "Write an equation in $x$ and $y$ for this sentence: Mixing $x$ litres of a $40\\%$ acid solution with $y$ litres of a $10\\%$ acid solution gives a mix that holds $9$ litres of acid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\text{acid in the first} + \\text{acid in the second} = \\text{acid in the mix}$",
                "reason": "The word equation written before the letters: the sentence says which amounts are equal, so the equation is written in words first."
              },
              {
                "step": "$\\dfrac{40}{100}x + \\dfrac{10}{100}y = 9$",
                "reason": "Writing a sentence as an equation: each amount in words becomes its letters and numbers, a percent of an amount becoming that amount times the percent over $100$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence: The number $y$ is $35\\%$ of the number $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 35*x/100",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence: The number $y$ is $35\\%$ of the number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\text{the number } y = 35\\% \\text{ of the number } x$",
                  "reason": "The word equation written before the letters: the sentence says which amounts are equal, so the equation is written in words first."
                },
                {
                  "step": "$y = \\dfrac{35}{100}x$",
                  "reason": "Writing a sentence as an equation: each amount in words becomes its letters and numbers, a percent of an amount becoming that amount times the percent over $100$."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence: A price of $x$ euros rises by $12\\%$ to $y$ euros.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x+12*x/100",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence: A price of $x$ euros rises by $12\\%$ to $y$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\text{new price} = \\text{old price} + 12\\% \\text{ of the old price}$",
                  "reason": "The word equation written before the letters: the sentence says which amounts are equal, so the equation is written in words first."
                },
                {
                  "step": "$y = x + \\dfrac{12}{100}x$",
                  "reason": "Writing a sentence as an equation: each amount in words becomes its letters and numbers, a percent of an amount becoming that amount times the percent over $100$."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence: After a fall of $30\\%$, a price of $x$ euros becomes $y$ euros.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x-30*x/100",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence: After a fall of $30\\%$, a price of $x$ euros becomes $y$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\text{new price} = \\text{old price} - 30\\% \\text{ of the old price}$",
                  "reason": "The word equation written before the letters: the sentence says which amounts are equal, so the equation is written in words first."
                },
                {
                  "step": "$y = x - \\dfrac{30}{100}x$",
                  "reason": "Writing a sentence as an equation: each amount in words becomes its letters and numbers, a percent of an amount becoming that amount times the percent over $100$."
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
