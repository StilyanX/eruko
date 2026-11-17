export default {
  "number": 122,
  "title": "Rate problems",
  "section": 4,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "172, 197-207"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the distance in km from the home of Hugo to the harbour, if Hugo leaves home at the same time each day, arrives $24$ minutes late when he drives at $18$ km per hour, and arrives $20$ minutes early when he drives at $30$ km per hour.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "33",
    "solution": [
      "Find the distance in km from the home of Hugo to the harbour, if Hugo leaves home at the same time each day, arrives $24$ minutes late when he drives at $18$ km per hour, and arrives $20$ minutes early when he drives at $30$ km per hour.",
      "Let $x$ be the distance in km.",
      "At $18$ km per hour the trip takes $\\dfrac{x}{18}$ hours, and at $30$ km per hour it takes $\\dfrac{x}{30}$ hours.",
      "$\\dfrac{x}{18} - \\dfrac{x}{30} = \\dfrac{11}{15}$",
      "$5x - 3x = 66$",
      "$2x = 66$",
      "$x = 33$",
      "The distance is $33$ km."
    ]
  },
  "ideas": [
    {
      "name": "Distance = rate × time",
      "concrete": "A barge at $9$ km per hour for $4$ hours covers $9 \\cdot 4 = 36$ km, and the same $36$ km at $12$ km per hour takes $\\dfrac{36}{12} = 3$ hours.",
      "general": "For an object that moves at a steady rate $r$ for a time $t$, with the rate and the time in matching units, the distance covered is $d = rt$. For $r$ other than $0$ the time is $t = \\dfrac{d}{r}$."
    },
    {
      "name": "Rate of work",
      "concrete": "A gardener who weeds a whole bed alone in $5$ hours weeds $\\dfrac{1}{5}$ of it each hour, and in $2$ hours $\\dfrac{2}{5}$ of it.",
      "general": "A whole job counts as $1$. For a number $a$ above $0$, a worker who does the job alone in a time $a$ does it at the **rate of work** $\\dfrac{1}{a}$ of the job for each unit of time, and in a time $t$ does $\\dfrac{t}{a}$ of it."
    },
    {
      "name": "Rates of people working together add",
      "concrete": "If one press prints a run in $3$ hours and a second in $6$ hours, together they print $\\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{1}{2}$ of the run each hour. A shredder that destroys the run in $6$ hours counts as $-\\dfrac{1}{6}$.",
      "general": "For numbers $a$ and $b$ above $0$, two workers with rates of work $\\dfrac{1}{a}$ and $\\dfrac{1}{b}$, working at once, do $\\dfrac{1}{a} + \\dfrac{1}{b}$ of the job for each unit of time. A worker who undoes the job at the rate $\\dfrac{1}{b}$ adds $-\\dfrac{1}{b}$."
    },
    {
      "name": "Relative rate",
      "concrete": "A scooter at $25$ km per hour behind a cyclist at $15$ km per hour on the same road gains $25 - 15 = 10$ km on the cyclist each hour.",
      "general": "For two objects on one path with steady rates $v$ and $w$, $w$ above $v$, moving the same way, the gap between them changes by the **relative rate** $w - v$ for each unit of time."
    },
    {
      "name": "Speed with and against a current",
      "concrete": "A boat that moves at $10$ km per hour in still water, on a river that flows at $3$ km per hour, moves at $13$ km per hour downstream and $7$ km per hour upstream.",
      "general": "For a craft with speed $x$ in still water or still air, in a current or wind of speed $y$, $y$ below $x$, the speed going with the current or wind is $x + y$ and the speed going against it is $x - y$."
    }
  ],
  "kinds": [
    {
      "id": "t122-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the distance in km from the home of Ana to the station, if Ana leaves home at the same time each day, arrives $22$ minutes late when she cycles at $6$ km per hour, and arrives $30$ minutes early when she cycles at $45$ km per hour.",
            "lines": [
              {
                "step": "Find the distance in km from the home of Ana to the station, if Ana leaves home at the same time each day, arrives $22$ minutes late when she cycles at $6$ km per hour, and arrives $30$ minutes early when she cycles at $45$ km per hour.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the distance in km.",
                "reason": "Defining the unknown: the letter stands for the distance asked for, in km."
              },
              {
                "step": "At $6$ km per hour the trip takes $\\dfrac{x}{6}$ hours, and at $45$ km per hour it takes $\\dfrac{x}{45}$ hours.",
                "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
              },
              {
                "step": "$\\dfrac{x}{6} - \\dfrac{x}{45} = \\dfrac{13}{15}$",
                "reason": "Writing a sentence as an equation: the slower trip takes $22 + 30 = 52$ minutes longer than the faster trip, which is $\\dfrac{13}{15}$ of an hour, the unit of the rates."
              },
              {
                "step": "$15x - 2x = 78$",
                "reason": "Clearing fractions: both sides are multiplied by $90$, a common multiple of the denominators."
              },
              {
                "step": "$13x = 78$",
                "reason": "Collecting like terms: the two terms in $x$ are added by adding their coefficients."
              },
              {
                "step": "$x = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $13$ leaves $x$ alone."
              },
              {
                "step": "The distance is $6$ km.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the distance in km from the home of Ben to the office, if Ben leaves home at the same time each day, arrives $15$ minutes late when he drives at $18$ km per hour, and arrives $21$ minutes early when he drives at $45$ km per hour.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "18",
              "lines": [
                {
                  "step": "Find the distance in km from the home of Ben to the office, if Ben leaves home at the same time each day, arrives $15$ minutes late when he drives at $18$ km per hour, and arrives $21$ minutes early when he drives at $45$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the distance in km.",
                  "reason": "Defining the unknown: the letter stands for the distance asked for, in km."
                },
                {
                  "step": "At $18$ km per hour the trip takes $\\dfrac{x}{18}$ hours, and at $45$ km per hour it takes $\\dfrac{x}{45}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "$\\dfrac{x}{18} - \\dfrac{x}{45} = \\dfrac{3}{5}$",
                  "reason": "Writing a sentence as an equation: the slower trip takes $15 + 21 = 36$ minutes longer than the faster trip, which is $\\dfrac{3}{5}$ of an hour, the unit of the rates."
                },
                {
                  "step": "$5x - 2x = 54$",
                  "reason": "Clearing fractions: both sides are multiplied by $90$, a common multiple of the denominators."
                },
                {
                  "step": "$3x = 54$",
                  "reason": "Collecting like terms: the two terms in $x$ are added by adding their coefficients."
                },
                {
                  "step": "$x = 18$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "The distance is $18$ km.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the distance in km from the home of Clara to the gym, if Clara leaves home at the same time each day, arrives $8$ minutes late when she runs at $18$ km per hour, and arrives $12$ minutes early when she runs at $22$ km per hour.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "33",
              "lines": [
                {
                  "step": "Find the distance in km from the home of Clara to the gym, if Clara leaves home at the same time each day, arrives $8$ minutes late when she runs at $18$ km per hour, and arrives $12$ minutes early when she runs at $22$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the distance in km.",
                  "reason": "Defining the unknown: the letter stands for the distance asked for, in km."
                },
                {
                  "step": "At $18$ km per hour the trip takes $\\dfrac{x}{18}$ hours, and at $22$ km per hour it takes $\\dfrac{x}{22}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "$\\dfrac{x}{18} - \\dfrac{x}{22} = \\dfrac{1}{3}$",
                  "reason": "Writing a sentence as an equation: the slower trip takes $8 + 12 = 20$ minutes longer than the faster trip, which is $\\dfrac{1}{3}$ of an hour, the unit of the rates."
                },
                {
                  "step": "$11x - 9x = 66$",
                  "reason": "Clearing fractions: both sides are multiplied by $198$, a common multiple of the denominators."
                },
                {
                  "step": "$2x = 66$",
                  "reason": "Collecting like terms: the two terms in $x$ are added by adding their coefficients."
                },
                {
                  "step": "$x = 33$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "The distance is $33$ km.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the distance in km from the home of Dev to the school, if Dev leaves home at the same time each day, arrives $5$ minutes late when he rides his scooter at $20$ km per hour, and arrives $13$ minutes early when he rides his scooter at $50$ km per hour.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the distance in km from the home of Dev to the school, if Dev leaves home at the same time each day, arrives $5$ minutes late when he rides his scooter at $20$ km per hour, and arrives $13$ minutes early when he rides his scooter at $50$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the distance in km.",
                  "reason": "Defining the unknown: the letter stands for the distance asked for, in km."
                },
                {
                  "step": "At $20$ km per hour the trip takes $\\dfrac{x}{20}$ hours, and at $50$ km per hour it takes $\\dfrac{x}{50}$ hours.",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                },
                {
                  "step": "$\\dfrac{x}{20} - \\dfrac{x}{50} = \\dfrac{3}{10}$",
                  "reason": "Writing a sentence as an equation: the slower trip takes $5 + 13 = 18$ minutes longer than the faster trip, which is $\\dfrac{3}{10}$ of an hour, the unit of the rates."
                },
                {
                  "step": "$5x - 2x = 30$",
                  "reason": "Clearing fractions: both sides are multiplied by $100$, a common multiple of the denominators."
                },
                {
                  "step": "$3x = 30$",
                  "reason": "Collecting like terms: the two terms in $x$ are added by adding their coefficients."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "The distance is $10$ km.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the length in km of a route that a hiker walks at a steady speed, if at $2$ km per hour faster she would take $2$ hours less, and at $2$ km per hour slower she would take $4$ hours more.",
            "lines": [
              {
                "step": "Find the length in km of a route that a hiker walks at a steady speed, if at $2$ km per hour faster she would take $2$ hours less, and at $2$ km per hour slower she would take $4$ hours more.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be her usual speed in km per hour and $y$ her usual time in hours.",
                "reason": "One letter for each unknown: the usual speed and the usual time are both unknown, so each gets its own letter."
              },
              {
                "step": "$(x + 2)(y - 2) = xy$",
                "reason": "Distance = rate × time: the faster trip covers the same route, so its rate times its time is $xy$."
              },
              {
                "step": "$(x - 2)(y + 4) = xy$",
                "reason": "Distance = rate × time: the slower trip covers the same route, so its rate times its time is $xy$."
              },
              {
                "step": "$xy - 2x + 2y - 4 = xy$",
                "reason": "The distributive law, used twice: each term of the first bracket multiplies each term of the second."
              },
              {
                "step": "$2y - 2x = 4$",
                "reason": "Adding the same number to both sides: adding $4 - xy$ to both sides leaves the terms in $x$ and $y$ alone on the left."
              },
              {
                "step": "$xy + 4x - 2y - 8 = xy$",
                "reason": "The distributive law, used twice: each term of the first bracket multiplies each term of the second."
              },
              {
                "step": "$4x - 2y = 8$",
                "reason": "Adding the same number to both sides: adding $8 - xy$ to both sides leaves the terms in $x$ and $y$ alone on the left."
              },
              {
                "step": "$2x = 12$",
                "reason": "Adding two equations: the sixth and eighth lines are added, and the terms in $y$ cancel."
              },
              {
                "step": "$x = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
              },
              {
                "step": "$2y - 2 \\cdot 6 = 4$",
                "reason": "Back-substitution: the value found goes in place of $x$ in the sixth line."
              },
              {
                "step": "$2y = 16$",
                "reason": "Adding the same number to both sides: adding $12$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = 8$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
              },
              {
                "step": "$xy = 6 \\cdot 8 = 48$",
                "reason": "Distance = rate × time: the route is the usual speed times the usual time."
              },
              {
                "step": "The route is $48$ km long.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the length in km of a route that a rower rows at a steady speed, if at $3$ km per hour faster he would take $3$ hours less, and at $3$ km per hour slower he would take $5$ hours more.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "180",
              "lines": [
                {
                  "step": "Find the length in km of a route that a rower rows at a steady speed, if at $3$ km per hour faster he would take $3$ hours less, and at $3$ km per hour slower he would take $5$ hours more.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be his usual speed in km per hour and $y$ his usual time in hours.",
                  "reason": "One letter for each unknown: the usual speed and the usual time are both unknown, so each gets its own letter."
                },
                {
                  "step": "$(x + 3)(y - 3) = xy$",
                  "reason": "Distance = rate × time: the faster trip covers the same route, so its rate times its time is $xy$."
                },
                {
                  "step": "$(x - 3)(y + 5) = xy$",
                  "reason": "Distance = rate × time: the slower trip covers the same route, so its rate times its time is $xy$."
                },
                {
                  "step": "$xy - 3x + 3y - 9 = xy$",
                  "reason": "The distributive law, used twice: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$3y - 3x = 9$",
                  "reason": "Adding the same number to both sides: adding $9 - xy$ to both sides leaves the terms in $x$ and $y$ alone on the left."
                },
                {
                  "step": "$xy + 5x - 3y - 15 = xy$",
                  "reason": "The distributive law, used twice: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$5x - 3y = 15$",
                  "reason": "Adding the same number to both sides: adding $15 - xy$ to both sides leaves the terms in $x$ and $y$ alone on the left."
                },
                {
                  "step": "$2x = 24$",
                  "reason": "Adding two equations: the sixth and eighth lines are added, and the terms in $y$ cancel."
                },
                {
                  "step": "$x = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$3y - 3 \\cdot 12 = 9$",
                  "reason": "Back-substitution: the value found goes in place of $x$ in the sixth line."
                },
                {
                  "step": "$3y = 45$",
                  "reason": "Adding the same number to both sides: adding $36$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 15$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $y$ alone."
                },
                {
                  "step": "$xy = 12 \\cdot 15 = 180$",
                  "reason": "Distance = rate × time: the route is the usual speed times the usual time."
                },
                {
                  "step": "The route is $180$ km long.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the length in km of a route that a courier cycles at a steady speed, if at $2$ km per hour faster she would take $3$ hours less, and at $2$ km per hour slower she would take $9$ hours more.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "36",
              "lines": [
                {
                  "step": "Find the length in km of a route that a courier cycles at a steady speed, if at $2$ km per hour faster she would take $3$ hours less, and at $2$ km per hour slower she would take $9$ hours more.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be her usual speed in km per hour and $y$ her usual time in hours.",
                  "reason": "One letter for each unknown: the usual speed and the usual time are both unknown, so each gets its own letter."
                },
                {
                  "step": "$(x + 2)(y - 3) = xy$",
                  "reason": "Distance = rate × time: the faster trip covers the same route, so its rate times its time is $xy$."
                },
                {
                  "step": "$(x - 2)(y + 9) = xy$",
                  "reason": "Distance = rate × time: the slower trip covers the same route, so its rate times its time is $xy$."
                },
                {
                  "step": "$xy - 3x + 2y - 6 = xy$",
                  "reason": "The distributive law, used twice: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$2y - 3x = 6$",
                  "reason": "Adding the same number to both sides: adding $6 - xy$ to both sides leaves the terms in $x$ and $y$ alone on the left."
                },
                {
                  "step": "$xy + 9x - 2y - 18 = xy$",
                  "reason": "The distributive law, used twice: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$9x - 2y = 18$",
                  "reason": "Adding the same number to both sides: adding $18 - xy$ to both sides leaves the terms in $x$ and $y$ alone on the left."
                },
                {
                  "step": "$6x = 24$",
                  "reason": "Adding two equations: the sixth and eighth lines are added, and the terms in $y$ cancel."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone."
                },
                {
                  "step": "$2y - 3 \\cdot 4 = 6$",
                  "reason": "Back-substitution: the value found goes in place of $x$ in the sixth line."
                },
                {
                  "step": "$2y = 18$",
                  "reason": "Adding the same number to both sides: adding $12$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 9$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                },
                {
                  "step": "$xy = 4 \\cdot 9 = 36$",
                  "reason": "Distance = rate × time: the route is the usual speed times the usual time."
                },
                {
                  "step": "The route is $36$ km long.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the length in km of a route that a skater skates at a steady speed, if at $2$ km per hour faster he would take $2$ hours less, and at $2$ km per hour slower he would take $6$ hours more.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "24",
              "lines": [
                {
                  "step": "Find the length in km of a route that a skater skates at a steady speed, if at $2$ km per hour faster he would take $2$ hours less, and at $2$ km per hour slower he would take $6$ hours more.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be his usual speed in km per hour and $y$ his usual time in hours.",
                  "reason": "One letter for each unknown: the usual speed and the usual time are both unknown, so each gets its own letter."
                },
                {
                  "step": "$(x + 2)(y - 2) = xy$",
                  "reason": "Distance = rate × time: the faster trip covers the same route, so its rate times its time is $xy$."
                },
                {
                  "step": "$(x - 2)(y + 6) = xy$",
                  "reason": "Distance = rate × time: the slower trip covers the same route, so its rate times its time is $xy$."
                },
                {
                  "step": "$xy - 2x + 2y - 4 = xy$",
                  "reason": "The distributive law, used twice: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$2y - 2x = 4$",
                  "reason": "Adding the same number to both sides: adding $4 - xy$ to both sides leaves the terms in $x$ and $y$ alone on the left."
                },
                {
                  "step": "$xy + 6x - 2y - 12 = xy$",
                  "reason": "The distributive law, used twice: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$6x - 2y = 12$",
                  "reason": "Adding the same number to both sides: adding $12 - xy$ to both sides leaves the terms in $x$ and $y$ alone on the left."
                },
                {
                  "step": "$4x = 16$",
                  "reason": "Adding two equations: the sixth and eighth lines are added, and the terms in $y$ cancel."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
                },
                {
                  "step": "$2y - 2 \\cdot 4 = 4$",
                  "reason": "Back-substitution: the value found goes in place of $x$ in the sixth line."
                },
                {
                  "step": "$2y = 12$",
                  "reason": "Adding the same number to both sides: adding $8$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                },
                {
                  "step": "$xy = 4 \\cdot 6 = 24$",
                  "reason": "Distance = rate × time: the route is the usual speed times the usual time."
                },
                {
                  "step": "The route is $24$ km long.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of metres by which Ava beats Bea in a $1200$ m race, if Ava beats Bea by $50$ m in a $400$ m race and each runs at one steady speed in both races.",
            "lines": [
              {
                "step": "Find the number of metres by which Ava beats Bea in a $1200$ m race, if Ava beats Bea by $50$ m in a $400$ m race and each runs at one steady speed in both races.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the distance in m that Bea covers while Ava covers $1200$ m.",
                "reason": "Defining the unknown: the letter stands for the distance Bea covers in the time Ava covers the race, in m."
              },
              {
                "step": "While Ava covers $400$ m, Bea covers $400 - 50 = 350$ m.",
                "reason": "Writing a sentence as an equation: Ava wins by $50$ m, so when Ava finishes Bea is $50$ m short of the line."
              },
              {
                "step": "$\\dfrac{x}{1200} = \\dfrac{350}{400}$",
                "reason": "Distance = rate × time: in equal times the two distances are in the ratio of the two rates, and the rates are the same in both races."
              },
              {
                "step": "$400x = 420\\,000$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal."
              },
              {
                "step": "$x = 1050$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $400$ leaves $x$ alone."
              },
              {
                "step": "$1200 - 1050 = 150$",
                "reason": "Writing a sentence as an equation: the margin is the distance Ava covers less the distance Bea covers."
              },
              {
                "step": "Ava beats Bea by $150$ m.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of metres by which Cole beats Dan in a $1500$ m race, if Cole beats Dan by $100$ m in a $600$ m race and each swims at one steady speed in both races.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "250",
              "lines": [
                {
                  "step": "Find the number of metres by which Cole beats Dan in a $1500$ m race, if Cole beats Dan by $100$ m in a $600$ m race and each swims at one steady speed in both races.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the distance in m that Dan covers while Cole covers $1500$ m.",
                  "reason": "Defining the unknown: the letter stands for the distance Dan covers in the time Cole covers the race, in m."
                },
                {
                  "step": "While Cole covers $600$ m, Dan covers $600 - 100 = 500$ m.",
                  "reason": "Writing a sentence as an equation: Cole wins by $100$ m, so when Cole finishes Dan is $100$ m short of the line."
                },
                {
                  "step": "$\\dfrac{x}{1500} = \\dfrac{500}{600}$",
                  "reason": "Distance = rate × time: in equal times the two distances are in the ratio of the two rates, and the rates are the same in both races."
                },
                {
                  "step": "$600x = 750\\,000$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal."
                },
                {
                  "step": "$x = 1250$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $600$ leaves $x$ alone."
                },
                {
                  "step": "$1500 - 1250 = 250$",
                  "reason": "Writing a sentence as an equation: the margin is the distance Cole covers less the distance Dan covers."
                },
                {
                  "step": "Cole beats Dan by $250$ m.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of metres by which Edda beats Fay in a $2400$ m race, if Edda beats Fay by $25$ m in a $300$ m race and each skates at one steady speed in both races.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "200",
              "lines": [
                {
                  "step": "Find the number of metres by which Edda beats Fay in a $2400$ m race, if Edda beats Fay by $25$ m in a $300$ m race and each skates at one steady speed in both races.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the distance in m that Fay covers while Edda covers $2400$ m.",
                  "reason": "Defining the unknown: the letter stands for the distance Fay covers in the time Edda covers the race, in m."
                },
                {
                  "step": "While Edda covers $300$ m, Fay covers $300 - 25 = 275$ m.",
                  "reason": "Writing a sentence as an equation: Edda wins by $25$ m, so when Edda finishes Fay is $25$ m short of the line."
                },
                {
                  "step": "$\\dfrac{x}{2400} = \\dfrac{275}{300}$",
                  "reason": "Distance = rate × time: in equal times the two distances are in the ratio of the two rates, and the rates are the same in both races."
                },
                {
                  "step": "$300x = 660\\,000$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal."
                },
                {
                  "step": "$x = 2200$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $300$ leaves $x$ alone."
                },
                {
                  "step": "$2400 - 2200 = 200$",
                  "reason": "Writing a sentence as an equation: the margin is the distance Edda covers less the distance Fay covers."
                },
                {
                  "step": "Edda beats Fay by $200$ m.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of metres by which Gil beats Hans in a $2000$ m race, if Gil beats Hans by $200$ m in a $800$ m race and each rows at one steady speed in both races.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "500",
              "lines": [
                {
                  "step": "Find the number of metres by which Gil beats Hans in a $2000$ m race, if Gil beats Hans by $200$ m in a $800$ m race and each rows at one steady speed in both races.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the distance in m that Hans covers while Gil covers $2000$ m.",
                  "reason": "Defining the unknown: the letter stands for the distance Hans covers in the time Gil covers the race, in m."
                },
                {
                  "step": "While Gil covers $800$ m, Hans covers $800 - 200 = 600$ m.",
                  "reason": "Writing a sentence as an equation: Gil wins by $200$ m, so when Gil finishes Hans is $200$ m short of the line."
                },
                {
                  "step": "$\\dfrac{x}{2000} = \\dfrac{600}{800}$",
                  "reason": "Distance = rate × time: in equal times the two distances are in the ratio of the two rates, and the rates are the same in both races."
                },
                {
                  "step": "$800x = 1\\,200\\,000$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal."
                },
                {
                  "step": "$x = 1500$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $800$ leaves $x$ alone."
                },
                {
                  "step": "$2000 - 1500 = 500$",
                  "reason": "Writing a sentence as an equation: the margin is the distance Gil covers less the distance Hans covers."
                },
                {
                  "step": "Gil beats Hans by $500$ m.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t122-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the average speed in km per hour of a cyclist who rides for $t$ hours at $a$ km per hour and then for $t$ hours at $a + 12$ km per hour.",
            "lines": [
              {
                "step": "Find the average speed in km per hour of a cyclist who rides for $t$ hours at $a$ km per hour and then for $t$ hours at $a + 12$ km per hour.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first part covers $at$ km and the second $(a + 12)t$ km.",
                "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
              },
              {
                "step": "The whole trip covers $at + (a + 12)t = (2a + 12)t$ km.",
                "reason": "Collecting like terms: both distances have the factor $t$, so what multiplies $t$ is added."
              },
              {
                "step": "The whole trip takes $t + t = 2t$ hours.",
                "reason": "Collecting like terms: the two times are added."
              },
              {
                "step": "The average speed is $\\dfrac{(2a + 12)t}{2t}$ km per hour.",
                "reason": "Rate: the average speed is the whole distance over the whole time, in fixed units."
              },
              {
                "step": "The average speed is $\\dfrac{2a + 12}{2}$ km per hour.",
                "reason": "Cancelling a common factor: $t$ is a factor of the top and of the bottom, and $t$ is not $0$."
              },
              {
                "step": "The average speed is $a + 6$ km per hour.",
                "reason": "Cancelling a common factor: $2$ is a factor of every term of the top and of the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the average speed in km per hour of a lorry that travels for $t$ hours at $3a$ km per hour and then for $t$ hours at $5a$ km per hour.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "4*a",
              "lines": [
                {
                  "step": "Find the average speed in km per hour of a lorry that travels for $t$ hours at $3a$ km per hour and then for $t$ hours at $5a$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first part covers $3at$ km and the second $5at$ km.",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "The whole trip covers $3at + 5at = 8at$ km.",
                  "reason": "Collecting like terms: both distances have the factor $t$, so what multiplies $t$ is added."
                },
                {
                  "step": "The whole trip takes $t + t = 2t$ hours.",
                  "reason": "Collecting like terms: the two times are added."
                },
                {
                  "step": "The average speed is $\\dfrac{8at}{2t}$ km per hour.",
                  "reason": "Rate: the average speed is the whole distance over the whole time, in fixed units."
                },
                {
                  "step": "The average speed is $\\dfrac{8a}{2}$ km per hour.",
                  "reason": "Cancelling a common factor: $t$ is a factor of the top and of the bottom, and $t$ is not $0$."
                },
                {
                  "step": "The average speed is $4a$ km per hour.",
                  "reason": "Cancelling a common factor: $2$ is a factor of every term of the top and of the bottom."
                }
              ]
            },
            {
              "prompt": "Find the average speed in km per hour of a runner who runs for $t$ hours at $2a$ km per hour and then for $t$ hours at $4b$ km per hour.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "a+2*b",
              "lines": [
                {
                  "step": "Find the average speed in km per hour of a runner who runs for $t$ hours at $2a$ km per hour and then for $t$ hours at $4b$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first part covers $2at$ km and the second $4bt$ km.",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "The whole trip covers $2at + 4bt = (2a + 4b)t$ km.",
                  "reason": "Collecting like terms: both distances have the factor $t$, so what multiplies $t$ is added."
                },
                {
                  "step": "The whole trip takes $t + t = 2t$ hours.",
                  "reason": "Collecting like terms: the two times are added."
                },
                {
                  "step": "The average speed is $\\dfrac{(2a + 4b)t}{2t}$ km per hour.",
                  "reason": "Rate: the average speed is the whole distance over the whole time, in fixed units."
                },
                {
                  "step": "The average speed is $\\dfrac{2a + 4b}{2}$ km per hour.",
                  "reason": "Cancelling a common factor: $t$ is a factor of the top and of the bottom, and $t$ is not $0$."
                },
                {
                  "step": "The average speed is $a + 2b$ km per hour.",
                  "reason": "Cancelling a common factor: $2$ is a factor of every term of the top and of the bottom."
                }
              ]
            },
            {
              "prompt": "Find the average speed in km per hour of a ferry that sails for $t$ hours at $a + 8$ km per hour and then for $t$ hours at $3a$ km per hour.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "2*a+4",
              "lines": [
                {
                  "step": "Find the average speed in km per hour of a ferry that sails for $t$ hours at $a + 8$ km per hour and then for $t$ hours at $3a$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first part covers $(a + 8)t$ km and the second $3at$ km.",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "The whole trip covers $(a + 8)t + 3at = (4a + 8)t$ km.",
                  "reason": "Collecting like terms: both distances have the factor $t$, so what multiplies $t$ is added."
                },
                {
                  "step": "The whole trip takes $t + t = 2t$ hours.",
                  "reason": "Collecting like terms: the two times are added."
                },
                {
                  "step": "The average speed is $\\dfrac{(4a + 8)t}{2t}$ km per hour.",
                  "reason": "Rate: the average speed is the whole distance over the whole time, in fixed units."
                },
                {
                  "step": "The average speed is $\\dfrac{4a + 8}{2}$ km per hour.",
                  "reason": "Cancelling a common factor: $t$ is a factor of the top and of the bottom, and $t$ is not $0$."
                },
                {
                  "step": "The average speed is $2a + 4$ km per hour.",
                  "reason": "Cancelling a common factor: $2$ is a factor of every term of the top and of the bottom."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t122-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the number of hours Mira and Tom tile the floor together, if Mira would tile it alone in $6$ hours, Tom alone in $9$ hours, Mira starts alone, and Tom joins Mira $2$ hours later.",
            "lines": [
              {
                "step": "Find the number of hours Mira and Tom tile the floor together, if Mira would tile it alone in $6$ hours, Tom alone in $9$ hours, Mira starts alone, and Tom joins Mira $2$ hours later.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Mira tiles $\\dfrac{1}{6}$ of the floor each hour, and Tom $\\dfrac{1}{9}$.",
                "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
              },
              {
                "step": "In $2$ hours alone Mira tiles $2 \\cdot \\dfrac{1}{6} = \\dfrac{1}{3}$ of the floor.",
                "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
              },
              {
                "step": "The part left is $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$ of the floor.",
                "reason": "Rate of work: the whole job counts as $1$, so the part left is $1$ less the part done."
              },
              {
                "step": "Together they tile $\\dfrac{1}{6} + \\dfrac{1}{9} = \\dfrac{5}{18}$ of the floor each hour.",
                "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
              },
              {
                "step": "Let $x$ be the number of hours they work together.",
                "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
              },
              {
                "step": "$\\dfrac{5}{18}x = \\dfrac{2}{3}$",
                "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
              },
              {
                "step": "$x = \\dfrac{12}{5}$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{18}{5}$, the multiplicative inverse of $\\dfrac{5}{18}$, leaves $x$ alone."
              },
              {
                "step": "They work together for $\\dfrac{12}{5}$ hours.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of hours Lena and Raj paint the hall together, if Lena would paint it alone in $10$ hours, Raj alone in $15$ hours, Lena starts alone, and Raj joins Lena $4$ hours later.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "18/5",
              "lines": [
                {
                  "step": "Find the number of hours Lena and Raj paint the hall together, if Lena would paint it alone in $10$ hours, Raj alone in $15$ hours, Lena starts alone, and Raj joins Lena $4$ hours later.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lena paints $\\dfrac{1}{10}$ of the hall each hour, and Raj $\\dfrac{1}{15}$.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "In $4$ hours alone Lena paints $4 \\cdot \\dfrac{1}{10} = \\dfrac{2}{5}$ of the hall.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "The part left is $1 - \\dfrac{2}{5} = \\dfrac{3}{5}$ of the hall.",
                  "reason": "Rate of work: the whole job counts as $1$, so the part left is $1$ less the part done."
                },
                {
                  "step": "Together they paint $\\dfrac{1}{10} + \\dfrac{1}{15} = \\dfrac{1}{6}$ of the hall each hour.",
                  "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
                },
                {
                  "step": "Let $x$ be the number of hours they work together.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "$\\dfrac{1}{6}x = \\dfrac{3}{5}$",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "$x = \\dfrac{18}{5}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $6$, the multiplicative inverse of $\\dfrac{1}{6}$, leaves $x$ alone."
                },
                {
                  "step": "They work together for $\\dfrac{18}{5}$ hours.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours Omar and Ida weed the garden together, if Omar would weed it alone in $8$ hours, Ida alone in $12$ hours, Omar starts alone, and Ida joins Omar $3$ hours later.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number of hours Omar and Ida weed the garden together, if Omar would weed it alone in $8$ hours, Ida alone in $12$ hours, Omar starts alone, and Ida joins Omar $3$ hours later.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Omar weeds $\\dfrac{1}{8}$ of the garden each hour, and Ida $\\dfrac{1}{12}$.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "In $3$ hours alone Omar weeds $3 \\cdot \\dfrac{1}{8} = \\dfrac{3}{8}$ of the garden.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "The part left is $1 - \\dfrac{3}{8} = \\dfrac{5}{8}$ of the garden.",
                  "reason": "Rate of work: the whole job counts as $1$, so the part left is $1$ less the part done."
                },
                {
                  "step": "Together they weed $\\dfrac{1}{8} + \\dfrac{1}{12} = \\dfrac{5}{24}$ of the garden each hour.",
                  "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
                },
                {
                  "step": "Let $x$ be the number of hours they work together.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "$\\dfrac{5}{24}x = \\dfrac{5}{8}$",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{24}{5}$, the multiplicative inverse of $\\dfrac{5}{24}$, leaves $x$ alone."
                },
                {
                  "step": "They work together for $3$ hours.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours Nina and Sam pack the order together, if Nina would pack it alone in $5$ hours, Sam alone in $20$ hours, Nina starts alone, and Sam joins Nina $3$ hours later.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8/5",
              "lines": [
                {
                  "step": "Find the number of hours Nina and Sam pack the order together, if Nina would pack it alone in $5$ hours, Sam alone in $20$ hours, Nina starts alone, and Sam joins Nina $3$ hours later.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Nina packs $\\dfrac{1}{5}$ of the order each hour, and Sam $\\dfrac{1}{20}$.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "In $3$ hours alone Nina packs $3 \\cdot \\dfrac{1}{5} = \\dfrac{3}{5}$ of the order.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "The part left is $1 - \\dfrac{3}{5} = \\dfrac{2}{5}$ of the order.",
                  "reason": "Rate of work: the whole job counts as $1$, so the part left is $1$ less the part done."
                },
                {
                  "step": "Together they pack $\\dfrac{1}{5} + \\dfrac{1}{20} = \\dfrac{1}{4}$ of the order each hour.",
                  "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
                },
                {
                  "step": "Let $x$ be the number of hours they work together.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "$\\dfrac{1}{4}x = \\dfrac{2}{5}$",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "$x = \\dfrac{8}{5}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$, the multiplicative inverse of $\\dfrac{1}{4}$, leaves $x$ alone."
                },
                {
                  "step": "They work together for $\\dfrac{8}{5}$ hours.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of hours until the tank is filled, if the tank starts empty, a tap alone fills the whole tank in $4$ hours, a drain alone empties the whole tank in $10$ hours, and both work at once.",
            "lines": [
              {
                "step": "Find the number of hours until the tank is filled, if the tank starts empty, a tap alone fills the whole tank in $4$ hours, a drain alone empties the whole tank in $10$ hours, and both work at once.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The tap fills $\\dfrac{1}{4}$ of the tank each hour, and the drain empties $\\dfrac{1}{10}$ of it each hour.",
                "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
              },
              {
                "step": "With both at work, $\\dfrac{1}{4} - \\dfrac{1}{10} = \\dfrac{3}{20}$ of the tank is filled each hour.",
                "reason": "Rates of people working together add: the work undone counts with a minus sign, so its rate is taken away."
              },
              {
                "step": "Let $x$ be the number of hours until the tank is filled.",
                "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
              },
              {
                "step": "$\\dfrac{3}{20}x = 1$",
                "reason": "Rate of work: the part done is the rate times the time, and the whole job counts as $1$."
              },
              {
                "step": "$x = \\dfrac{20}{3}$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{20}{3}$, the multiplicative inverse of $\\dfrac{3}{20}$, leaves $x$ alone."
              },
              {
                "step": "The tank is filled after $\\dfrac{20}{3}$ hours.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of minutes until the shelf is filled, if the shelf starts empty, a stacker alone fills the whole shelf in $12$ minutes, a picker alone empties the whole shelf in $20$ minutes, and both work at once.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the number of minutes until the shelf is filled, if the shelf starts empty, a stacker alone fills the whole shelf in $12$ minutes, a picker alone empties the whole shelf in $20$ minutes, and both work at once.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The stacker fills $\\dfrac{1}{12}$ of the shelf each minute, and the picker empties $\\dfrac{1}{20}$ of it each minute.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ minutes does $\\dfrac{1}{n}$ of it each minute."
                },
                {
                  "step": "With both at work, $\\dfrac{1}{12} - \\dfrac{1}{20} = \\dfrac{1}{30}$ of the shelf is filled each minute.",
                  "reason": "Rates of people working together add: the work undone counts with a minus sign, so its rate is taken away."
                },
                {
                  "step": "Let $x$ be the number of minutes until the shelf is filled.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in minutes."
                },
                {
                  "step": "$\\dfrac{1}{30}x = 1$",
                  "reason": "Rate of work: the part done is the rate times the time, and the whole job counts as $1$."
                },
                {
                  "step": "$x = 30$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $30$, the multiplicative inverse of $\\dfrac{1}{30}$, leaves $x$ alone."
                },
                {
                  "step": "The shelf is filled after $30$ minutes.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours until the pool is filled, if the pool starts empty, a pump alone fills the whole pool in $3$ hours, a leak alone empties the whole pool in $8$ hours, and both work at once.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "24/5",
              "lines": [
                {
                  "step": "Find the number of hours until the pool is filled, if the pool starts empty, a pump alone fills the whole pool in $3$ hours, a leak alone empties the whole pool in $8$ hours, and both work at once.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pump fills $\\dfrac{1}{3}$ of the pool each hour, and the leak empties $\\dfrac{1}{8}$ of it each hour.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "With both at work, $\\dfrac{1}{3} - \\dfrac{1}{8} = \\dfrac{5}{24}$ of the pool is filled each hour.",
                  "reason": "Rates of people working together add: the work undone counts with a minus sign, so its rate is taken away."
                },
                {
                  "step": "Let $x$ be the number of hours until the pool is filled.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "$\\dfrac{5}{24}x = 1$",
                  "reason": "Rate of work: the part done is the rate times the time, and the whole job counts as $1$."
                },
                {
                  "step": "$x = \\dfrac{24}{5}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{24}{5}$, the multiplicative inverse of $\\dfrac{5}{24}$, leaves $x$ alone."
                },
                {
                  "step": "The pool is filled after $\\dfrac{24}{5}$ hours.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours until the trench is dug, if no part of the trench is dug at the start, a digger alone digs the whole trench in $7$ hours, a flood alone fills in the whole trench in $9$ hours, and both work at once.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "63/2",
              "lines": [
                {
                  "step": "Find the number of hours until the trench is dug, if no part of the trench is dug at the start, a digger alone digs the whole trench in $7$ hours, a flood alone fills in the whole trench in $9$ hours, and both work at once.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The digger digs $\\dfrac{1}{7}$ of the trench each hour, and the flood fills in $\\dfrac{1}{9}$ of it each hour.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "With both at work, $\\dfrac{1}{7} - \\dfrac{1}{9} = \\dfrac{2}{63}$ of the trench is dug each hour.",
                  "reason": "Rates of people working together add: the work undone counts with a minus sign, so its rate is taken away."
                },
                {
                  "step": "Let $x$ be the number of hours until the trench is dug.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "$\\dfrac{2}{63}x = 1$",
                  "reason": "Rate of work: the part done is the rate times the time, and the whole job counts as $1$."
                },
                {
                  "step": "$x = \\dfrac{63}{2}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{63}{2}$, the multiplicative inverse of $\\dfrac{2}{63}$, leaves $x$ alone."
                },
                {
                  "step": "The trench is dug after $\\dfrac{63}{2}$ hours.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of hours Jo would take to build the wall alone, if Ines would take $9$ hours alone, Ines works $3$ hours alone, and Jo then joins Ines and they finish $4$ hours later.",
            "lines": [
              {
                "step": "Find the number of hours Jo would take to build the wall alone, if Ines would take $9$ hours alone, Ines works $3$ hours alone, and Jo then joins Ines and they finish $4$ hours later.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of hours Jo takes alone.",
                "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
              },
              {
                "step": "Ines does $\\dfrac{1}{9}$ of the job each hour, and Jo $\\dfrac{1}{x}$.",
                "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
              },
              {
                "step": "Ines works $3 + 4 = 7$ hours and does $7 \\cdot \\dfrac{1}{9} = \\dfrac{7}{9}$ of the job.",
                "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
              },
              {
                "step": "Jo works $4$ hours and does $\\dfrac{4}{x}$ of the job.",
                "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
              },
              {
                "step": "$\\dfrac{7}{9} + \\dfrac{4}{x} = 1$",
                "reason": "Writing a sentence as an equation: the two parts make the whole job, which counts as $1$."
              },
              {
                "step": "$\\dfrac{4}{x} = \\dfrac{2}{9}$",
                "reason": "Adding the same number to both sides: adding $-\\dfrac{7}{9}$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$2x = 36$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since $x$ is not $0$."
              },
              {
                "step": "$x = 18$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
              },
              {
                "step": "Jo would take $18$ hours alone.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of hours Liv would take to paint the fence alone, if Karl would take $10$ hours alone, Karl works $4$ hours alone, and Liv then joins Karl and they finish $2$ hours later.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the number of hours Liv would take to paint the fence alone, if Karl would take $10$ hours alone, Karl works $4$ hours alone, and Liv then joins Karl and they finish $2$ hours later.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of hours Liv takes alone.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "Karl does $\\dfrac{1}{10}$ of the job each hour, and Liv $\\dfrac{1}{x}$.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "Karl works $4 + 2 = 6$ hours and does $6 \\cdot \\dfrac{1}{10} = \\dfrac{3}{5}$ of the job.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "Liv works $2$ hours and does $\\dfrac{2}{x}$ of the job.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "$\\dfrac{3}{5} + \\dfrac{2}{x} = 1$",
                  "reason": "Writing a sentence as an equation: the two parts make the whole job, which counts as $1$."
                },
                {
                  "step": "$\\dfrac{2}{x} = \\dfrac{2}{5}$",
                  "reason": "Adding the same number to both sides: adding $-\\dfrac{3}{5}$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$2x = 10$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since $x$ is not $0$."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "Liv would take $5$ hours alone.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours Noor would take to lay the path alone, if Maya would take $11$ hours alone, Maya works $2$ hours alone, and Noor then joins Maya and they finish $3$ hours later.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "11/2",
              "lines": [
                {
                  "step": "Find the number of hours Noor would take to lay the path alone, if Maya would take $11$ hours alone, Maya works $2$ hours alone, and Noor then joins Maya and they finish $3$ hours later.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of hours Noor takes alone.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "Maya does $\\dfrac{1}{11}$ of the job each hour, and Noor $\\dfrac{1}{x}$.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "Maya works $2 + 3 = 5$ hours and does $5 \\cdot \\dfrac{1}{11} = \\dfrac{5}{11}$ of the job.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "Noor works $3$ hours and does $\\dfrac{3}{x}$ of the job.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "$\\dfrac{5}{11} + \\dfrac{3}{x} = 1$",
                  "reason": "Writing a sentence as an equation: the two parts make the whole job, which counts as $1$."
                },
                {
                  "step": "$\\dfrac{3}{x} = \\dfrac{6}{11}$",
                  "reason": "Adding the same number to both sides: adding $-\\dfrac{5}{11}$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$6x = 33$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since $x$ is not $0$."
                },
                {
                  "step": "$x = \\dfrac{11}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone."
                },
                {
                  "step": "Noor would take $\\dfrac{11}{2}$ hours alone.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours Pam would take to clear the attic alone, if Oscar would take $12$ hours alone, Oscar works $3$ hours alone, and Pam then joins Oscar and they finish $4$ hours later.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "48/5",
              "lines": [
                {
                  "step": "Find the number of hours Pam would take to clear the attic alone, if Oscar would take $12$ hours alone, Oscar works $3$ hours alone, and Pam then joins Oscar and they finish $4$ hours later.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of hours Pam takes alone.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "Oscar does $\\dfrac{1}{12}$ of the job each hour, and Pam $\\dfrac{1}{x}$.",
                  "reason": "Rate of work: a worker who does a whole job alone in $n$ hours does $\\dfrac{1}{n}$ of it each hour."
                },
                {
                  "step": "Oscar works $3 + 4 = 7$ hours and does $7 \\cdot \\dfrac{1}{12} = \\dfrac{7}{12}$ of the job.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "Pam works $4$ hours and does $\\dfrac{4}{x}$ of the job.",
                  "reason": "Rate of work: the part of the job done is the rate of work times the time worked."
                },
                {
                  "step": "$\\dfrac{7}{12} + \\dfrac{4}{x} = 1$",
                  "reason": "Writing a sentence as an equation: the two parts make the whole job, which counts as $1$."
                },
                {
                  "step": "$\\dfrac{4}{x} = \\dfrac{5}{12}$",
                  "reason": "Adding the same number to both sides: adding $-\\dfrac{7}{12}$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$5x = 48$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since $x$ is not $0$."
                },
                {
                  "step": "$x = \\dfrac{48}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
                },
                {
                  "step": "Pam would take $\\dfrac{48}{5}$ hours alone.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find an expression for the number of coins a mint strikes in $n$ hours, if it strikes $3$ coins each second.",
            "lines": [
              {
                "step": "Find an expression for the number of coins a mint strikes in $n$ hours, if it strikes $3$ coins each second.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In $n$ hours there are $3600n$ seconds.",
                "reason": "Rate: a rate is measured in fixed units, so the time is written in seconds, the unit of the rate, and one hour is $3600$ seconds."
              },
              {
                "step": "In $3600n$ seconds it strikes $3 \\cdot 3600n$ coins.",
                "reason": "Rate: the amount done is the rate times the time, with the time in the unit of the rate."
              },
              {
                "step": "In $n$ hours it strikes $10\\,800n$ coins.",
                "reason": "The associative law of multiplication: the two numbers are multiplied first."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an expression for the number of bottles a bottling machine fills in $n$ minutes, if it fills $4$ bottles each second.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "240*n",
              "lines": [
                {
                  "step": "Find an expression for the number of bottles a bottling machine fills in $n$ minutes, if it fills $4$ bottles each second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $n$ minutes there are $60n$ seconds.",
                  "reason": "Rate: a rate is measured in fixed units, so the time is written in seconds, the unit of the rate, and one minute is $60$ seconds."
                },
                {
                  "step": "In $60n$ seconds it fills $4 \\cdot 60n$ bottles.",
                  "reason": "Rate: the amount done is the rate times the time, with the time in the unit of the rate."
                },
                {
                  "step": "In $n$ minutes it fills $240n$ bottles.",
                  "reason": "The associative law of multiplication: the two numbers are multiplied first."
                }
              ]
            },
            {
              "prompt": "Find an expression for the number of loaves a bakery bakes in $n$ days, if it bakes $35$ loaves each hour.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "840*n",
              "lines": [
                {
                  "step": "Find an expression for the number of loaves a bakery bakes in $n$ days, if it bakes $35$ loaves each hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $n$ days there are $24n$ hours.",
                  "reason": "Rate: a rate is measured in fixed units, so the time is written in hours, the unit of the rate, and one day is $24$ hours."
                },
                {
                  "step": "In $24n$ hours it bakes $35 \\cdot 24n$ loaves.",
                  "reason": "Rate: the amount done is the rate times the time, with the time in the unit of the rate."
                },
                {
                  "step": "In $n$ days it bakes $840n$ loaves.",
                  "reason": "The associative law of multiplication: the two numbers are multiplied first."
                }
              ]
            },
            {
              "prompt": "Find an expression for the number of kilograms of flour a mill grinds in $n$ weeks, if it grinds $90$ kilograms of flour each day.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "630*n",
              "lines": [
                {
                  "step": "Find an expression for the number of kilograms of flour a mill grinds in $n$ weeks, if it grinds $90$ kilograms of flour each day.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $n$ weeks there are $7n$ days.",
                  "reason": "Rate: a rate is measured in fixed units, so the time is written in days, the unit of the rate, and one week is $7$ days."
                },
                {
                  "step": "In $7n$ days it grinds $90 \\cdot 7n$ kilograms of flour.",
                  "reason": "Rate: the amount done is the rate times the time, with the time in the unit of the rate."
                },
                {
                  "step": "In $n$ weeks it grinds $630n$ kilograms of flour.",
                  "reason": "The associative law of multiplication: the two numbers are multiplied first."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t122-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the number of hours after the car sets out that it catches the cyclist, if the cyclist leaves the depot at $12$ km per hour and the car leaves the depot $30$ minutes later along the same road at $36$ km per hour.",
            "lines": [
              {
                "step": "Find the number of hours after the car sets out that it catches the cyclist, if the cyclist leaves the depot at $12$ km per hour and the car leaves the depot $30$ minutes later along the same road at $36$ km per hour.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In $30$ minutes, which is $\\dfrac{1}{2}$ of an hour, the cyclist covers $12 \\cdot \\dfrac{1}{2} = 6$ km.",
                "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
              },
              {
                "step": "The car gains $36 - 12 = 24$ km on the cyclist each hour.",
                "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
              },
              {
                "step": "Let $x$ be the number of hours after the car sets out.",
                "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
              },
              {
                "step": "$24x = 6$",
                "reason": "Distance = rate × time: the gap of $6$ km closes at the relative rate."
              },
              {
                "step": "$x = \\dfrac{1}{4}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $24$ leaves $x$ alone."
              },
              {
                "step": "The car catches the cyclist $\\dfrac{1}{4}$ of an hour after it sets out.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of hours after the cyclist sets out that she catches the walker, if the walker leaves the inn at $4$ km per hour and the cyclist leaves the inn $50$ minutes later along the same road at $16$ km per hour.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/18",
              "lines": [
                {
                  "step": "Find the number of hours after the cyclist sets out that she catches the walker, if the walker leaves the inn at $4$ km per hour and the cyclist leaves the inn $50$ minutes later along the same road at $16$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $50$ minutes, which is $\\dfrac{5}{6}$ of an hour, the walker covers $4 \\cdot \\dfrac{5}{6} = \\dfrac{10}{3}$ km.",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "The cyclist gains $16 - 4 = 12$ km on the walker each hour.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of hours after the cyclist sets out.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "$12x = \\dfrac{10}{3}$",
                  "reason": "Distance = rate × time: the gap of $\\dfrac{10}{3}$ km closes at the relative rate."
                },
                {
                  "step": "$x = \\dfrac{5}{18}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $12$ leaves $x$ alone."
                },
                {
                  "step": "The cyclist catches the walker $\\dfrac{5}{18}$ of an hour after it sets out.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours after the motorboat sets out that it catches the barge, if the barge leaves the lock at $6$ km per hour and the motorboat leaves the lock $40$ minutes later along the same canal at $20$ km per hour.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2/7",
              "lines": [
                {
                  "step": "Find the number of hours after the motorboat sets out that it catches the barge, if the barge leaves the lock at $6$ km per hour and the motorboat leaves the lock $40$ minutes later along the same canal at $20$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $40$ minutes, which is $\\dfrac{2}{3}$ of an hour, the barge covers $6 \\cdot \\dfrac{2}{3} = 4$ km.",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "The motorboat gains $20 - 6 = 14$ km on the barge each hour.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of hours after the motorboat sets out.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "$14x = 4$",
                  "reason": "Distance = rate × time: the gap of $4$ km closes at the relative rate."
                },
                {
                  "step": "$x = \\dfrac{2}{7}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $14$ leaves $x$ alone."
                },
                {
                  "step": "The motorboat catches the barge $\\dfrac{2}{7}$ of an hour after it sets out.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours after the motorbike sets out that it catches the lorry, if the lorry leaves the quarry at $30$ km per hour and the motorbike leaves the quarry $20$ minutes later along the same road at $54$ km per hour.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/12",
              "lines": [
                {
                  "step": "Find the number of hours after the motorbike sets out that it catches the lorry, if the lorry leaves the quarry at $30$ km per hour and the motorbike leaves the quarry $20$ minutes later along the same road at $54$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $20$ minutes, which is $\\dfrac{1}{3}$ of an hour, the lorry covers $30 \\cdot \\dfrac{1}{3} = 10$ km.",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "The motorbike gains $54 - 30 = 24$ km on the lorry each hour.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of hours after the motorbike sets out.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in hours."
                },
                {
                  "step": "$24x = 10$",
                  "reason": "Distance = rate × time: the gap of $10$ km closes at the relative rate."
                },
                {
                  "step": "$x = \\dfrac{5}{12}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $24$ leaves $x$ alone."
                },
                {
                  "step": "The motorbike catches the lorry $\\dfrac{5}{12}$ of an hour after it sets out.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of seconds until Lea first laps Kim, if they start together from one point of a $480$ m track and run the same way round, Lea at $6$ m per second and Kim at $4$ m per second.",
            "lines": [
              {
                "step": "Find the number of seconds until Lea first laps Kim, if they start together from one point of a $480$ m track and run the same way round, Lea at $6$ m per second and Kim at $4$ m per second.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lea gains $6 - 4 = 2$ m on Kim each second.",
                "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
              },
              {
                "step": "Let $x$ be the number of seconds until the first lap.",
                "reason": "Defining the unknown: the letter stands for the time asked for, in seconds."
              },
              {
                "step": "$2x = 480$",
                "reason": "Distance = rate × time: Lea laps Kim when the gain is one whole lap, $480$ m."
              },
              {
                "step": "$x = 240$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
              },
              {
                "step": "Lea first laps Kim after $240$ seconds.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of seconds until Max first laps Ola, if they start together from one point of a $600$ m track and run the same way round, Max at $7$ m per second and Ola at $3$ m per second.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "150",
              "lines": [
                {
                  "step": "Find the number of seconds until Max first laps Ola, if they start together from one point of a $600$ m track and run the same way round, Max at $7$ m per second and Ola at $3$ m per second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Max gains $7 - 3 = 4$ m on Ola each second.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of seconds until the first lap.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in seconds."
                },
                {
                  "step": "$4x = 600$",
                  "reason": "Distance = rate × time: Max laps Ola when the gain is one whole lap, $600$ m."
                },
                {
                  "step": "$x = 150$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
                },
                {
                  "step": "Max first laps Ola after $150$ seconds.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of seconds until Rui first laps Sia, if they start together from one point of a $500$ m track and run the same way round, Rui at $8$ m per second and Sia at $5$ m per second.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "500/3",
              "lines": [
                {
                  "step": "Find the number of seconds until Rui first laps Sia, if they start together from one point of a $500$ m track and run the same way round, Rui at $8$ m per second and Sia at $5$ m per second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Rui gains $8 - 5 = 3$ m on Sia each second.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of seconds until the first lap.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in seconds."
                },
                {
                  "step": "$3x = 500$",
                  "reason": "Distance = rate × time: Rui laps Sia when the gain is one whole lap, $500$ m."
                },
                {
                  "step": "$x = \\dfrac{500}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "Rui first laps Sia after $\\dfrac{500}{3}$ seconds.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of seconds until Ada first laps Ben, if they start together from one point of a $300$ m track and run the same way round, Ada at $5$ m per second and Ben at $2$ m per second.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "100",
              "lines": [
                {
                  "step": "Find the number of seconds until Ada first laps Ben, if they start together from one point of a $300$ m track and run the same way round, Ada at $5$ m per second and Ben at $2$ m per second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Ada gains $5 - 2 = 3$ m on Ben each second.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of seconds until the first lap.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in seconds."
                },
                {
                  "step": "$3x = 300$",
                  "reason": "Distance = rate × time: Ada laps Ben when the gain is one whole lap, $300$ m."
                },
                {
                  "step": "$x = 100$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "Ada first laps Ben after $100$ seconds.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find an expression for the number of seconds the dog takes to catch the hare, if the hare starts $d$ m ahead and moves at $a$ m per second, and the dog goes after it at $b$ m per second, the faster of the two.",
            "lines": [
              {
                "step": "Find an expression for the number of seconds the dog takes to catch the hare, if the hare starts $d$ m ahead and moves at $a$ m per second, and the dog goes after it at $b$ m per second, the faster of the two.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The dog gains $b - a$ m on the hare each second.",
                "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
              },
              {
                "step": "Let $x$ be the number of seconds until the dog catches the hare.",
                "reason": "Defining the unknown: the letter stands for the time asked for, in seconds."
              },
              {
                "step": "$(b - a)x = d$",
                "reason": "Distance = rate × time: the head start of $d$ m closes at the relative rate."
              },
              {
                "step": "$x = \\dfrac{d}{b - a}$",
                "reason": "Dividing both sides by a nonzero number: $b - a$ is above $0$, since the dog is the faster, and dividing by it leaves $x$ alone."
              },
              {
                "step": "The dog catches the hare after $\\dfrac{d}{b - a}$ seconds.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an expression for the number of seconds the police car takes to catch the getaway car, if the getaway car starts $d$ m ahead and moves at $a$ m per second, and the police car goes after it at $a + 3$ m per second, the faster of the two.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "d/3",
              "lines": [
                {
                  "step": "Find an expression for the number of seconds the police car takes to catch the getaway car, if the getaway car starts $d$ m ahead and moves at $a$ m per second, and the police car goes after it at $a + 3$ m per second, the faster of the two.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The police car gains $a + 3 - a = 3$ m on the getaway car each second.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of seconds until the police car catches the getaway car.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in seconds."
                },
                {
                  "step": "$3x = d$",
                  "reason": "Distance = rate × time: the head start of $d$ m closes at the relative rate."
                },
                {
                  "step": "$x = \\dfrac{d}{3}$",
                  "reason": "Dividing both sides by a nonzero number: $3$ is above $0$, since the police car is the faster, and dividing by it leaves $x$ alone."
                },
                {
                  "step": "The police car catches the getaway car after $\\dfrac{d}{3}$ seconds.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find an expression for the number of seconds the falcon takes to catch the pigeon, if the pigeon starts $d$ m ahead and moves at $a$ m per second, and the falcon goes after it at $4a$ m per second, the faster of the two.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "d/(3*a)",
              "lines": [
                {
                  "step": "Find an expression for the number of seconds the falcon takes to catch the pigeon, if the pigeon starts $d$ m ahead and moves at $a$ m per second, and the falcon goes after it at $4a$ m per second, the faster of the two.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The falcon gains $4a - a = 3a$ m on the pigeon each second.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of seconds until the falcon catches the pigeon.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in seconds."
                },
                {
                  "step": "$3ax = d$",
                  "reason": "Distance = rate × time: the head start of $d$ m closes at the relative rate."
                },
                {
                  "step": "$x = \\dfrac{d}{3a}$",
                  "reason": "Dividing both sides by a nonzero number: $3a$ is above $0$, since the falcon is the faster, and dividing by it leaves $x$ alone."
                },
                {
                  "step": "The falcon catches the pigeon after $\\dfrac{d}{3a}$ seconds.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find an expression for the number of seconds the cheetah takes to catch the gazelle, if the gazelle starts $d$ m ahead and moves at $2a$ m per second, and the cheetah goes after it at $6a$ m per second, the faster of the two.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "d/(4*a)",
              "lines": [
                {
                  "step": "Find an expression for the number of seconds the cheetah takes to catch the gazelle, if the gazelle starts $d$ m ahead and moves at $2a$ m per second, and the cheetah goes after it at $6a$ m per second, the faster of the two.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cheetah gains $6a - 2a = 4a$ m on the gazelle each second.",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                },
                {
                  "step": "Let $x$ be the number of seconds until the cheetah catches the gazelle.",
                  "reason": "Defining the unknown: the letter stands for the time asked for, in seconds."
                },
                {
                  "step": "$4ax = d$",
                  "reason": "Distance = rate × time: the head start of $d$ m closes at the relative rate."
                },
                {
                  "step": "$x = \\dfrac{d}{4a}$",
                  "reason": "Dividing both sides by a nonzero number: $4a$ is above $0$, since the cheetah is the faster, and dividing by it leaves $x$ alone."
                },
                {
                  "step": "The cheetah catches the gazelle after $\\dfrac{d}{4a}$ seconds.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t122-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the speed of the current in km per hour, if a boat goes $48$ km downstream in $2$ hours and comes back the same $48$ km upstream in $3$ hours.",
            "lines": [
              {
                "step": "Find the speed of the current in km per hour, if a boat goes $48$ km downstream in $2$ hours and comes back the same $48$ km upstream in $3$ hours.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the speed of the boat in still water and $y$ the speed of the current, both in km per hour.",
                "reason": "One letter for each unknown: the two speeds are unknown, so each gets its own letter."
              },
              {
                "step": "Going downstream the boat moves at $x + y$ km per hour, and going upstream at $x - y$ km per hour.",
                "reason": "Speed with and against a current: the current adds its speed going with it and takes it away going against it."
              },
              {
                "step": "$2(x + y) = 48$",
                "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
              },
              {
                "step": "$3(x - y) = 48$",
                "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
              },
              {
                "step": "$x + y = 24$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x + y$ alone."
              },
              {
                "step": "$x - y = 16$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x - y$ alone."
              },
              {
                "step": "$2y = 8$",
                "reason": "Elimination: taking the seventh line from the sixth removes $x$."
              },
              {
                "step": "$y = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
              },
              {
                "step": "The current flows at $4$ km per hour.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the speed of the wind in km per hour, if a plane goes $1800$ km with the wind in $3$ hours and comes back the same $1800$ km against the wind in $4$ hours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "75",
              "lines": [
                {
                  "step": "Find the speed of the wind in km per hour, if a plane goes $1800$ km with the wind in $3$ hours and comes back the same $1800$ km against the wind in $4$ hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the speed of the plane in still air and $y$ the speed of the wind, both in km per hour.",
                  "reason": "One letter for each unknown: the two speeds are unknown, so each gets its own letter."
                },
                {
                  "step": "Going with the wind the plane moves at $x + y$ km per hour, and going against the wind at $x - y$ km per hour.",
                  "reason": "Speed with and against a current: the wind adds its speed going with it and takes it away going against it."
                },
                {
                  "step": "$3(x + y) = 1800$",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "$4(x - y) = 1800$",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "$x + y = 600$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x + y$ alone."
                },
                {
                  "step": "$x - y = 450$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x - y$ alone."
                },
                {
                  "step": "$2y = 150$",
                  "reason": "Elimination: taking the seventh line from the sixth removes $x$."
                },
                {
                  "step": "$y = 75$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                },
                {
                  "step": "The wind blows at $75$ km per hour.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the speed of the canoe in still water in km per hour, if a canoe goes $36$ km downstream in $3$ hours and comes back the same $36$ km upstream in $6$ hours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the speed of the canoe in still water in km per hour, if a canoe goes $36$ km downstream in $3$ hours and comes back the same $36$ km upstream in $6$ hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the speed of the canoe in still water and $y$ the speed of the current, both in km per hour.",
                  "reason": "One letter for each unknown: the two speeds are unknown, so each gets its own letter."
                },
                {
                  "step": "Going downstream the canoe moves at $x + y$ km per hour, and going upstream at $x - y$ km per hour.",
                  "reason": "Speed with and against a current: the current adds its speed going with it and takes it away going against it."
                },
                {
                  "step": "$3(x + y) = 36$",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "$6(x - y) = 36$",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "$x + y = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x + y$ alone."
                },
                {
                  "step": "$x - y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x - y$ alone."
                },
                {
                  "step": "$2x = 18$",
                  "reason": "Elimination: adding the sixth and seventh lines removes $y$."
                },
                {
                  "step": "$x = 9$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "The canoe moves at $9$ km per hour in still water.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the speed of the wind in km per hour, if a glider goes $240$ km with the wind in $4$ hours and comes back the same $240$ km against the wind in $6$ hours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the speed of the wind in km per hour, if a glider goes $240$ km with the wind in $4$ hours and comes back the same $240$ km against the wind in $6$ hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the speed of the glider in still air and $y$ the speed of the wind, both in km per hour.",
                  "reason": "One letter for each unknown: the two speeds are unknown, so each gets its own letter."
                },
                {
                  "step": "Going with the wind the glider moves at $x + y$ km per hour, and going against the wind at $x - y$ km per hour.",
                  "reason": "Speed with and against a current: the wind adds its speed going with it and takes it away going against it."
                },
                {
                  "step": "$4(x + y) = 240$",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "$6(x - y) = 240$",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                },
                {
                  "step": "$x + y = 60$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x + y$ alone."
                },
                {
                  "step": "$x - y = 40$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x - y$ alone."
                },
                {
                  "step": "$2y = 20$",
                  "reason": "Elimination: taking the seventh line from the sixth removes $x$."
                },
                {
                  "step": "$y = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                },
                {
                  "step": "The wind blows at $10$ km per hour.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of hours Ilse goes downstream before turning back, if she rows at $9$ km per hour in still water on a river that flows at $5$ km per hour, sets out downstream from the jetty, and is back at the jetty $9$ hours after setting out.",
            "lines": [
              {
                "step": "Find the number of hours Ilse goes downstream before turning back, if she rows at $9$ km per hour in still water on a river that flows at $5$ km per hour, sets out downstream from the jetty, and is back at the jetty $9$ hours after setting out.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Going downstream Ilse moves at $9 + 5 = 14$ km per hour, and going upstream at $9 - 5 = 4$ km per hour.",
                "reason": "Speed with and against a current: the moving air or water adds its speed going with it and takes it away going against it."
              },
              {
                "step": "Let $x$ be the number of hours downstream and $y$ the number of hours upstream.",
                "reason": "One letter for each unknown: the two times are unknown, so each gets its own letter."
              },
              {
                "step": "$x + y = 9$",
                "reason": "Writing a sentence as an equation: the two times make up the whole trip."
              },
              {
                "step": "$14x = 4y$",
                "reason": "Distance = rate × time: the distance out and the distance back are the same."
              },
              {
                "step": "$14x = 4(9 - x)$",
                "reason": "Substitution: the fourth line gives $y = 9 - x$, which goes in place of $y$."
              },
              {
                "step": "$14x = 36 - 4x$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$18x = 36$",
                "reason": "Adding the same number to both sides: adding $4x$ to both sides leaves the terms in $x$ on the left only."
              },
              {
                "step": "$x = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $18$ leaves $x$ alone."
              },
              {
                "step": "Ilse goes downstream for $2$ hours before turning back.",
                "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of hours Ruth goes downstream before turning back, if she paddles at $6$ km per hour in still water on a river that flows at $2$ km per hour, sets out downstream from the boathouse, and is back at the boathouse $3$ hours after setting out.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find the number of hours Ruth goes downstream before turning back, if she paddles at $6$ km per hour in still water on a river that flows at $2$ km per hour, sets out downstream from the boathouse, and is back at the boathouse $3$ hours after setting out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Going downstream Ruth moves at $6 + 2 = 8$ km per hour, and going upstream at $6 - 2 = 4$ km per hour.",
                  "reason": "Speed with and against a current: the moving air or water adds its speed going with it and takes it away going against it."
                },
                {
                  "step": "Let $x$ be the number of hours downstream and $y$ the number of hours upstream.",
                  "reason": "One letter for each unknown: the two times are unknown, so each gets its own letter."
                },
                {
                  "step": "$x + y = 3$",
                  "reason": "Writing a sentence as an equation: the two times make up the whole trip."
                },
                {
                  "step": "$8x = 4y$",
                  "reason": "Distance = rate × time: the distance out and the distance back are the same."
                },
                {
                  "step": "$8x = 4(3 - x)$",
                  "reason": "Substitution: the fourth line gives $y = 3 - x$, which goes in place of $y$."
                },
                {
                  "step": "$8x = 12 - 4x$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$12x = 12$",
                  "reason": "Adding the same number to both sides: adding $4x$ to both sides leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $12$ leaves $x$ alone."
                },
                {
                  "step": "Ruth goes downstream for $1$ hour before turning back.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours a drone goes with the wind before turning back, if it flies at $50$ km per hour in still air on a wind that blows at $10$ km per hour, sets out with the wind from the mast, and is back at the mast $6$ hours after setting out.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "12/5",
              "lines": [
                {
                  "step": "Find the number of hours a drone goes with the wind before turning back, if it flies at $50$ km per hour in still air on a wind that blows at $10$ km per hour, sets out with the wind from the mast, and is back at the mast $6$ hours after setting out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Going with the wind a drone moves at $50 + 10 = 60$ km per hour, and going against the wind at $50 - 10 = 40$ km per hour.",
                  "reason": "Speed with and against a current: the moving air or water adds its speed going with it and takes it away going against it."
                },
                {
                  "step": "Let $x$ be the number of hours with the wind and $y$ the number of hours against the wind.",
                  "reason": "One letter for each unknown: the two times are unknown, so each gets its own letter."
                },
                {
                  "step": "$x + y = 6$",
                  "reason": "Writing a sentence as an equation: the two times make up the whole trip."
                },
                {
                  "step": "$60x = 40y$",
                  "reason": "Distance = rate × time: the distance out and the distance back are the same."
                },
                {
                  "step": "$60x = 40(6 - x)$",
                  "reason": "Substitution: the fourth line gives $y = 6 - x$, which goes in place of $y$."
                },
                {
                  "step": "$60x = 240 - 40x$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$100x = 240$",
                  "reason": "Adding the same number to both sides: adding $40x$ to both sides leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = \\dfrac{12}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $100$ leaves $x$ alone."
                },
                {
                  "step": "A drone goes with the wind for $\\dfrac{12}{5}$ hours before turning back.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            },
            {
              "prompt": "Find the number of hours Ahmed goes downstream before turning back, if he swims at $5$ km per hour in still water on a channel that flows at $2$ km per hour, sets out downstream from the buoy, and is back at the buoy $7$ hours after setting out.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "21/10",
              "lines": [
                {
                  "step": "Find the number of hours Ahmed goes downstream before turning back, if he swims at $5$ km per hour in still water on a channel that flows at $2$ km per hour, sets out downstream from the buoy, and is back at the buoy $7$ hours after setting out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Going downstream Ahmed moves at $5 + 2 = 7$ km per hour, and going upstream at $5 - 2 = 3$ km per hour.",
                  "reason": "Speed with and against a current: the moving air or water adds its speed going with it and takes it away going against it."
                },
                {
                  "step": "Let $x$ be the number of hours downstream and $y$ the number of hours upstream.",
                  "reason": "One letter for each unknown: the two times are unknown, so each gets its own letter."
                },
                {
                  "step": "$x + y = 7$",
                  "reason": "Writing a sentence as an equation: the two times make up the whole trip."
                },
                {
                  "step": "$7x = 3y$",
                  "reason": "Distance = rate × time: the distance out and the distance back are the same."
                },
                {
                  "step": "$7x = 3(7 - x)$",
                  "reason": "Substitution: the fourth line gives $y = 7 - x$, which goes in place of $y$."
                },
                {
                  "step": "$7x = 21 - 3x$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$10x = 21$",
                  "reason": "Adding the same number to both sides: adding $3x$ to both sides leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = \\dfrac{21}{10}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $10$ leaves $x$ alone."
                },
                {
                  "step": "Ahmed goes downstream for $\\dfrac{21}{10}$ hours before turning back.",
                  "reason": "Answering the question asked: the last line states the quantity the question names, in its unit."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t122-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find the distance in km from the home of Hugo to the harbour, if Hugo leaves home at the same time each day, arrives $24$ minutes late when he drives at $10$ km per hour, and arrives $30$ minutes early when he drives at $19$ km per hour.",
            "given": [
              "Let $x$ be the distance in km.",
              "$\\dfrac{x}{10} - \\dfrac{x}{19} = \\dfrac{9}{10}$",
              "$\\dfrac{x}{10} - \\dfrac{x}{19} = \\dfrac{9}{10} = 19x - 10x$",
              "$9x = \\dfrac{9}{10}$",
              "$x = \\dfrac{1}{10}$",
              "The distance is $\\dfrac{1}{10}$ km."
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find the distance in km from the home of Hugo to the harbour, if Hugo leaves home at the same time each day, arrives $24$ minutes late when he drives at $10$ km per hour, and arrives $30$ minutes early when he drives at $19$ km per hour.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 multiplies the left side alone by $190$ and runs on with a second equals sign, so it states $\\dfrac{9}{10} = 19x - 10x$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $19x - 10x$ is the left side multiplied by $190$, not $\\dfrac{9}{10}$."
              },
              {
                "step": "Line 3 written right is $19x - 10x = 171$.",
                "reason": "Clearing fractions: both sides of line 2 are multiplied by $190$, a common multiple of the denominators."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the distance in km from the home of Ana to the station, if Ana leaves home at the same time each day, arrives $20$ minutes late when she cycles at $24$ km per hour, and arrives $25$ minutes early when she cycles at $60$ km per hour.",
              "given": [
                "Let $x$ be the distance in km.",
                "At $24$ km per hour the trip takes $\\dfrac{x}{24}$ hours, and at $60$ km per hour it takes $\\dfrac{x}{60}$ hours.",
                "$\\dfrac{x}{24} - \\dfrac{x}{60} = \\dfrac{3}{4}$",
                "$\\dfrac{x}{24} - \\dfrac{x}{60} = \\dfrac{3}{4} = 5x - 2x$",
                "$3x = \\dfrac{3}{4}$",
                "$x = \\dfrac{1}{4}$",
                "The distance is $\\dfrac{1}{4}$ km."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 5*x-2*x = 90",
              "lines": [
                {
                  "step": "The working is for this problem: Find the distance in km from the home of Ana to the station, if Ana leaves home at the same time each day, arrives $20$ minutes late when she cycles at $24$ km per hour, and arrives $25$ minutes early when she cycles at $60$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies the left side alone by $120$ and runs on with a second equals sign, so it states $\\dfrac{3}{4} = 5x - 2x$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $5x - 2x$ is the left side multiplied by $120$, not $\\dfrac{3}{4}$."
                },
                {
                  "step": "Line 4 written right is $5x - 2x = 90$.",
                  "reason": "Clearing fractions: both sides of line 3 are multiplied by $120$, a common multiple of the denominators."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the distance in km from the home of Ben to the office, if Ben leaves home at the same time each day, arrives $19$ minutes late when he drives at $16$ km per hour, and arrives $26$ minutes early when he drives at $28$ km per hour.",
              "given": [
                "Let $x$ be the distance in km.",
                "$\\dfrac{x}{16} - \\dfrac{x}{28} = \\dfrac{3}{4}$",
                "$\\dfrac{x}{16} - \\dfrac{x}{28} = \\dfrac{3}{4} = 7x - 4x$",
                "$3x = \\dfrac{3}{4}$",
                "$x = \\dfrac{1}{4}$",
                "The distance is $\\dfrac{1}{4}$ km."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 7*x-4*x = 84",
              "lines": [
                {
                  "step": "The working is for this problem: Find the distance in km from the home of Ben to the office, if Ben leaves home at the same time each day, arrives $19$ minutes late when he drives at $16$ km per hour, and arrives $26$ minutes early when he drives at $28$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 multiplies the left side alone by $112$ and runs on with a second equals sign, so it states $\\dfrac{3}{4} = 7x - 4x$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $7x - 4x$ is the left side multiplied by $112$, not $\\dfrac{3}{4}$."
                },
                {
                  "step": "Line 3 written right is $7x - 4x = 84$.",
                  "reason": "Clearing fractions: both sides of line 2 are multiplied by $112$, a common multiple of the denominators."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the distance in km from the home of Clara to the gym, if Clara leaves home at the same time each day, arrives $12$ minutes late when she runs at $16$ km per hour, and arrives $30$ minutes early when she runs at $30$ km per hour.",
              "given": [
                "Let $x$ be the distance in km.",
                "At $16$ km per hour the trip takes $\\dfrac{x}{16}$ hours, and at $30$ km per hour it takes $\\dfrac{x}{30}$ hours.",
                "$\\dfrac{x}{16} - \\dfrac{x}{30} = \\dfrac{7}{10}$",
                "$\\dfrac{x}{16} - \\dfrac{x}{30} = \\dfrac{7}{10} = 15x - 8x$",
                "$7x = \\dfrac{7}{10}$",
                "$x = \\dfrac{1}{10}$",
                "The distance is $\\dfrac{1}{10}$ km."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 15*x-8*x = 168",
              "lines": [
                {
                  "step": "The working is for this problem: Find the distance in km from the home of Clara to the gym, if Clara leaves home at the same time each day, arrives $12$ minutes late when she runs at $16$ km per hour, and arrives $30$ minutes early when she runs at $30$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies the left side alone by $240$ and runs on with a second equals sign, so it states $\\dfrac{7}{10} = 15x - 8x$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $15x - 8x$ is the left side multiplied by $240$, not $\\dfrac{7}{10}$."
                },
                {
                  "step": "Line 4 written right is $15x - 8x = 168$.",
                  "reason": "Clearing fractions: both sides of line 3 are multiplied by $240$, a common multiple of the denominators."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find the number of hours until the tank is filled, if the tank starts empty, a tap alone fills the whole tank in $3$ hours, a drain alone empties the whole tank in $12$ hours, and both work at once.",
            "given": [
              "The tap fills $\\dfrac{1}{3}$ of the tank each hour, and the drain empties $\\dfrac{1}{12}$ of it each hour.",
              "With both at work, $\\dfrac{1}{3} + \\dfrac{1}{12} = \\dfrac{5}{12}$ of the tank is filled each hour.",
              "Let $x$ be the number of hours until the tank is filled.",
              "$\\dfrac{5}{12}x = 1$",
              "$x = \\dfrac{12}{5}$",
              "The tank is filled after $\\dfrac{12}{5}$ hours."
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find the number of hours until the tank is filled, if the tank starts empty, a tap alone fills the whole tank in $3$ hours, a drain alone empties the whole tank in $12$ hours, and both work at once.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 adds the rate of the drain to the rate of the tap.",
                "reason": "A sign lost: the drain undoes work, so its part carries a minus sign, and the line drops it."
              },
              {
                "step": "Line 2 written right is $\\dfrac{1}{3} - \\dfrac{1}{12} = \\dfrac{1}{4}$.",
                "reason": "Rates of people working together add: the work undone counts with a minus sign, so its rate is taken away."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of minutes until the shelf is filled, if the shelf starts empty, a stacker alone fills the whole shelf in $14$ minutes, a picker alone empties the whole shelf in $21$ minutes, and both work at once.",
              "given": [
                "Let $x$ be the number of minutes until the shelf is filled.",
                "$\\dfrac{x}{14} + \\dfrac{x}{21} = 1$",
                "$3x + 2x = 42$",
                "$5x = 42$",
                "$x = \\dfrac{42}{5}$",
                "The shelf is filled after $\\dfrac{42}{5}$ minutes."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x/14-x/21 = 1",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of minutes until the shelf is filled, if the shelf starts empty, a stacker alone fills the whole shelf in $14$ minutes, a picker alone empties the whole shelf in $21$ minutes, and both work at once.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds the part the picker empties in $x$ minutes to the part the stacker fills.",
                  "reason": "A sign lost: the picker undoes work, so its part carries a minus sign, and the line drops it."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{x}{14} - \\dfrac{x}{21} = 1$.",
                  "reason": "Rates of people working together add: the work undone counts with a minus sign, so its rate is taken away."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of hours until the pool is filled, if the pool starts empty, a pump alone fills the whole pool in $4$ hours, a leak alone empties the whole pool in $6$ hours, and both work at once.",
              "given": [
                "Let $x$ be the number of hours until the pool is filled.",
                "The pump fills $\\dfrac{1}{4}$ of the pool each hour, and the leak empties $\\dfrac{1}{6}$ of it each hour.",
                "With both at work, $\\dfrac{1}{4} + \\dfrac{1}{6} = \\dfrac{5}{12}$ of the pool is filled each hour.",
                "$\\dfrac{5}{12}x = 1$",
                "$x = \\dfrac{12}{5}$",
                "The pool is filled after $\\dfrac{12}{5}$ hours."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 1/4-1/6 = 1/12",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of hours until the pool is filled, if the pool starts empty, a pump alone fills the whole pool in $4$ hours, a leak alone empties the whole pool in $6$ hours, and both work at once.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds the rate of the leak to the rate of the pump.",
                  "reason": "A sign lost: the leak undoes work, so its part carries a minus sign, and the line drops it."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{1}{4} - \\dfrac{1}{6} = \\dfrac{1}{12}$.",
                  "reason": "Rates of people working together add: the work undone counts with a minus sign, so its rate is taken away."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of hours until the trench is dug, if no part of the trench is dug at the start, a digger alone digs the whole trench in $6$ hours, a flood alone fills in the whole trench in $14$ hours, and both work at once.",
              "given": [
                "Let $x$ be the number of hours until the trench is dug.",
                "$\\dfrac{x}{6} + \\dfrac{x}{14} = 1$",
                "$7x + 3x = 42$",
                "$10x = 42$",
                "$x = \\dfrac{21}{5}$",
                "The trench is dug after $\\dfrac{21}{5}$ hours."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x/6-x/14 = 1",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of hours until the trench is dug, if no part of the trench is dug at the start, a digger alone digs the whole trench in $6$ hours, a flood alone fills in the whole trench in $14$ hours, and both work at once.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds the part the flood fills in in $x$ hours to the part the digger digs.",
                  "reason": "A sign lost: the flood undoes work, so its part carries a minus sign, and the line drops it."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{x}{6} - \\dfrac{x}{14} = 1$.",
                  "reason": "Rates of people working together add: the work undone counts with a minus sign, so its rate is taken away."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t122-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A car travels at $x$ km per hour for $3$ hours and covers $y$ km.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A car travels at $x$ km per hour for $3$ hours and covers $y$ km.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The distance is the rate $x$ times the time $3$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = 3x$",
                "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A cyclist covers $40$ km at $x$ km per hour in $y$ hours.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 40/x",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A cyclist covers $40$ km at $x$ km per hour in $y$ hours.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The time is the distance $40$ divided by the rate $x$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{40}{x}$",
                  "reason": "Distance = rate × time: the time of a trip at a steady rate is its distance divided by its rate."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: In $x$ hours a drone flying at $45$ km per hour covers $y$ km.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 45*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: In $x$ hours a drone flying at $45$ km per hour covers $y$ km.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The distance is the rate $45$ times the time $x$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = 45x$",
                  "reason": "Distance = rate × time: the distance covered at a steady rate is the rate times the time."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A ship sails $300$ km in $x$ hours at $y$ km per hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 300/x",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A ship sails $300$ km in $x$ hours at $y$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rate is the distance $300$ divided by the time $x$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{300}{x}$",
                  "reason": "Distance = rate × time: the rate of a trip is its distance divided by its time."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A boat moves at $x$ km per hour in still water on a river that flows at $4$ km per hour, and its speed downstream is $y$ km per hour.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A boat moves at $x$ km per hour in still water on a river that flows at $4$ km per hour, and its speed downstream is $y$ km per hour.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Downstream the current adds its $4$ km per hour.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = x + 4$",
                "reason": "Speed with and against a current: going with the current or wind its speed is added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A canoe moves at $x$ km per hour in still water on a river that flows at $6$ km per hour, and its speed upstream is $y$ km per hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x-6",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A canoe moves at $x$ km per hour in still water on a river that flows at $6$ km per hour, and its speed upstream is $y$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Upstream the current takes away its $6$ km per hour.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = x - 6$",
                  "reason": "Speed with and against a current: going against the current or wind its speed is taken away."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A glider flies at $x$ km per hour in still air, and against a wind of $12$ km per hour its speed is $y$ km per hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x-12",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A glider flies at $x$ km per hour in still air, and against a wind of $12$ km per hour its speed is $y$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Against the wind its speed loses the $12$ km per hour of the wind.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = x - 12$",
                  "reason": "Speed with and against a current: going against the current or wind its speed is taken away."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A ferry moves at $20$ km per hour in still water on a river that flows at $x$ km per hour, and its speed upstream is $y$ km per hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 20-x",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A ferry moves at $20$ km per hour in still water on a river that flows at $x$ km per hour, and its speed upstream is $y$ km per hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Upstream the current takes away its $x$ km per hour from the $20$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = 20 - x$",
                  "reason": "Speed with and against a current: going against the current or wind its speed is taken away."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: Two pumps fill a tank alone in $8$ hours and in $x$ hours, and together they fill $y$ of the tank each hour.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: Two pumps fill a tank alone in $8$ hours and in $x$ hours, and together they fill $y$ of the tank each hour.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two parts done each hour are $\\dfrac{1}{8}$ and $\\dfrac{1}{x}$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = \\dfrac{1}{8} + \\dfrac{1}{x}$",
                "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A tap fills a tank alone in $x$ hours, a drain empties it alone in $9$ hours, and with both open $y$ of the tank fills each hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/x-1/9",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A tap fills a tank alone in $x$ hours, a drain empties it alone in $9$ hours, and with both open $y$ of the tank fills each hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The tap fills $\\dfrac{1}{x}$ of the tank each hour and the drain empties $\\dfrac{1}{9}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{1}{x} - \\dfrac{1}{9}$",
                  "reason": "Rates of people working together add: the work undone counts with a minus sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A cook peels a sack of potatoes alone in $x$ hours, a helper peels it alone in $10$ hours, and together they peel $y$ of the sack each hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/x+1/10",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A cook peels a sack of potatoes alone in $x$ hours, a helper peels it alone in $10$ hours, and together they peel $y$ of the sack each hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two parts done each hour are $\\dfrac{1}{x}$ and $\\dfrac{1}{10}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{1}{x} + \\dfrac{1}{10}$",
                  "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: Two mowers cut a field alone in $x$ hours and in $2x$ hours, and together they cut $y$ of the field each hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/x+1/(2*x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: Two mowers cut a field alone in $x$ hours and in $2x$ hours, and together they cut $y$ of the field each hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two parts done each hour are $\\dfrac{1}{x}$ and $\\dfrac{1}{2x}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{1}{x} + \\dfrac{1}{2x}$",
                  "reason": "Rates of people working together add: the part done each hour together is the sum of the parts each does alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A runner at $x$ m per second chases a walker at $2$ m per second, and the gap between them closes by $y$ m each second.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A runner at $x$ m per second chases a walker at $2$ m per second, and the gap between them closes by $y$ m each second.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The runner gains the difference of the two rates.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = x - 2$",
                "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A van at $x$ km per hour follows a tractor at $25$ km per hour along one road, and it gains $y$ km on the tractor each hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x-25",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A van at $x$ km per hour follows a tractor at $25$ km per hour along one road, and it gains $y$ km on the tractor each hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The van gains the difference of the two rates.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = x - 25$",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A cyclist at $16$ km per hour rides ahead of a walker at $x$ km per hour, going the same way on the same path, and the gap between them grows by $y$ km each hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 16-x",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A cyclist at $16$ km per hour rides ahead of a walker at $x$ km per hour, going the same way on the same path, and the gap between them grows by $y$ km each hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The gap grows by the difference of the two rates, the faster rate first.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = 16 - x$",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A fast train at $x$ km per hour runs behind a slow train at $70$ km per hour on the same line, and it gains $y$ km each hour.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x-70",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A fast train at $x$ km per hour runs behind a slow train at $70$ km per hour on the same line, and it gains $y$ km each hour.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fast train gains the difference of the two rates.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = x - 70$",
                  "reason": "Relative rate: for two objects moving the same way, the gap between them changes by the difference of their rates."
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
