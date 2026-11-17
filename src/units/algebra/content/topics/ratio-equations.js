export default {
  "number": 118,
  "title": "Ratios as equations",
  "section": 4,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "157-166"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the number of counters in a bag at the start, if the blue counters make up $\\dfrac{3}{4}$ of the counters and the rest are white counters, and after 8 blue counters are taken out and 9 white counters are put in, the ratio of blue counters to white counters is $2 : 3$.",
    "form": "Answer as an integer.",
    "answer": "24",
    "solution": [
      "Find the number of counters in a bag at the start, if the blue counters make up $\\dfrac{3}{4}$ of the counters and the rest are white counters, and after 8 blue counters are taken out and 9 white counters are put in, the ratio of blue counters to white counters is $2 : 3$.",
      "Let $x$ be the number of blue counters and $y$ the number of white counters at the start.",
      "$\\dfrac{\\text{blue counters}}{\\text{all the counters}} = \\dfrac{3}{4}$",
      "$\\dfrac{x}{x + y} = \\dfrac{3}{4}$",
      "$4x = 3(x + y)$",
      "$4x = 3x + 3y$",
      "$x = 3y$",
      "$\\dfrac{\\text{blue counters after}}{\\text{white counters after}} = \\dfrac{2}{3}$",
      "$\\dfrac{x - 8}{y + 9} = \\dfrac{2}{3}$",
      "$3(x - 8) = 2(y + 9)$",
      "$3(3y - 8) = 2(y + 9)$",
      "$9y - 24 = 2y + 18$",
      "$7y - 24 = 18$",
      "$7y = 42$",
      "$y = 6$",
      "$x = 3(6) = 18$",
      "At the start there are $18$ blue counters and $6$ white counters, with $\\dfrac{18}{24} = \\dfrac{3}{4}$; after the change there are $10$ and $15$, with $\\dfrac{10}{15} = \\dfrac{2}{3}$.",
      "There were $24$ counters in the bag at the start."
    ]
  },
  "ideas": [
    {
      "name": "Part-to-part and part-to-whole ratio",
      "concrete": "A box holds $12$ pens and $8$ pencils and nothing else. The ratio of pens to pencils, a part to a part, is $\\dfrac{12}{8} = \\dfrac{3}{2}$; the ratio of pens to all the items, a part to the whole, is $\\dfrac{12}{20} = \\dfrac{3}{5}$.",
      "general": "**Part-to-part and part-to-whole ratio**: where a whole is made of two parts with positive counts $x$ and $y$, the ratio of the first part to the second is $\\dfrac{x}{y}$, and the ratio of the first part to the whole is $\\dfrac{x}{x + y}$."
    },
    {
      "name": "The word equation written before the letters",
      "concrete": "For the sentence \"three sevenths of the cards are red\", the word equation $\\dfrac{\\text{red cards}}{\\text{all the cards}} = \\dfrac{3}{7}$ comes first; with $x$ red cards and $y$ others, it becomes $\\dfrac{x}{x + y} = \\dfrac{3}{7}$.",
      "general": "**The word equation written before the letters**: a ratio sentence is first written as an equation in words, naming the quantity on top and the quantity below, and only then are the letters put in place of the words."
    },
    {
      "name": "Ratio of two variables",
      "concrete": "From $4x = 9y$ with $y$ not $0$, dividing both sides by $4y$ gives $\\dfrac{x}{y} = \\dfrac{9}{4}$: the ratio of $x$ to $y$ is $9 : 4$, though neither $x$ nor $y$ is known.",
      "general": "**Ratio of two variables**: for numbers $x$ and $y$ with $y$ not $0$, the ratio of $x$ to $y$ is the quotient $\\dfrac{x}{y}$. For nonzero numbers $a$ and $b$, the equation $ax = by$ gives $\\dfrac{x}{y} = \\dfrac{b}{a}$, though it fixes neither $x$ nor $y$."
    }
  ],
  "kinds": [
    {
      "id": "t118-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the number of novels on a shelf at the start, if the novels make up $\\dfrac{4}{5}$ of the books and the rest are atlases, and after 8 novels and 5 atlases are put on the shelf, the ratio of novels to atlases is $5 : 2$.",
            "lines": [
              {
                "step": "Find the number of novels on a shelf at the start, if the novels make up $\\dfrac{4}{5}$ of the books and the rest are atlases, and after 8 novels and 5 atlases are put on the shelf, the ratio of novels to atlases is $5 : 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of novels and $y$ the number of atlases at the start.",
                "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
              },
              {
                "step": "$\\dfrac{\\text{novels}}{\\text{all the books}} = \\dfrac{4}{5}$",
                "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
              },
              {
                "step": "$\\dfrac{x}{x + y} = \\dfrac{4}{5}$",
                "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{4}{5}$ compares the novels with all the books, a part with the whole, so the bottom is $x + y$."
              },
              {
                "step": "$5x = 4(x + y)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$5x = 4x + 4y$",
                "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket."
              },
              {
                "step": "$x = 4y$",
                "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves $x$ alone on the left."
              },
              {
                "step": "$\\dfrac{\\text{novels after}}{\\text{atlases after}} = \\dfrac{5}{2}$",
                "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
              },
              {
                "step": "$\\dfrac{x + 8}{y + 5} = \\dfrac{5}{2}$",
                "reason": "Ratio: the ratio $5 : 2$ of the novels to the atlases is the quotient of the two counts after the change, a part over a part."
              },
              {
                "step": "$2(x + 8) = 5(y + 5)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$2(4y + 8) = 5(y + 5)$",
                "reason": "Substitution: $4y$ goes in place of $x$, which leaves one letter."
              },
              {
                "step": "$8y + 16 = 5y + 25$",
                "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
              },
              {
                "step": "$3y + 16 = 25$",
                "reason": "Adding the same number to both sides: adding $-5y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
              },
              {
                "step": "$3y = 9$",
                "reason": "Adding the same number to both sides: adding $-16$ to both sides keeps them equal and leaves the term in $y$ alone."
              },
              {
                "step": "$y = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x = 4(3) = 12$",
                "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = 4y$."
              },
              {
                "step": "At the start there are $12$ novels and $3$ atlases, with $\\dfrac{12}{15} = \\dfrac{4}{5}$; after the change there are $20$ and $8$, with $\\dfrac{20}{8} = \\dfrac{5}{2}$.",
                "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "There were $12$ novels on the shelf at the start.",
                "reason": "Answering the question asked: the question asks for the number of novels at the start, so the last line states that count, $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of black beads in a jar at the start, if the red beads make up $\\dfrac{2}{3}$ of the beads and the rest are black beads, and after 4 red beads are taken out and 3 black beads are put in, the ratio of red beads to black beads is $3 : 4$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the number of black beads in a jar at the start, if the red beads make up $\\dfrac{2}{3}$ of the beads and the rest are black beads, and after 4 red beads are taken out and 3 black beads are put in, the ratio of red beads to black beads is $3 : 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of red beads and $y$ the number of black beads at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{red beads}}{\\text{all the beads}} = \\dfrac{2}{3}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{2}{3}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{2}{3}$ compares the red beads with all the beads, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$3x = 2(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$3x = 2x + 2y$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 2y$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "$\\dfrac{\\text{red beads after}}{\\text{black beads after}} = \\dfrac{3}{4}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x - 4}{y + 3} = \\dfrac{3}{4}$",
                  "reason": "Ratio: the ratio $3 : 4$ of the red beads to the black beads is the quotient of the two counts after the change, a part over a part."
                },
                {
                  "step": "$4(x - 4) = 3(y + 3)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$4(2y - 4) = 3(y + 3)$",
                  "reason": "Substitution: $2y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$8y - 16 = 3y + 9$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$5y - 16 = 9$",
                  "reason": "Adding the same number to both sides: adding $-3y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$5y = 25$",
                  "reason": "Adding the same number to both sides: adding $16$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 2(5) = 10$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = 2y$."
                },
                {
                  "step": "At the start there are $10$ red beads and $5$ black beads, with $\\dfrac{10}{15} = \\dfrac{2}{3}$; after the change there are $6$ and $8$, with $\\dfrac{6}{8} = \\dfrac{3}{4}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $5$ black beads in the jar at the start.",
                  "reason": "Answering the question asked: the question asks for the number of black beads at the start, so the last line states that count, $y$."
                }
              ]
            },
            {
              "prompt": "Find the number of singers in a choir at the start, if the girls make up $\\dfrac{3}{4}$ of the singers and the rest are boys, and after 4 girls leave and 8 boys join, the ratio of girls to boys is $5 : 3$.",
              "form": "Answer as an integer.",
              "answer": "52",
              "lines": [
                {
                  "step": "Find the number of singers in a choir at the start, if the girls make up $\\dfrac{3}{4}$ of the singers and the rest are boys, and after 4 girls leave and 8 boys join, the ratio of girls to boys is $5 : 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of girls and $y$ the number of boys at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{girls}}{\\text{all the singers}} = \\dfrac{3}{4}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{3}{4}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{3}{4}$ compares the girls with all the singers, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$4x = 3(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$4x = 3x + 3y$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 3y$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "$\\dfrac{\\text{girls after}}{\\text{boys after}} = \\dfrac{5}{3}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x - 4}{y + 8} = \\dfrac{5}{3}$",
                  "reason": "Ratio: the ratio $5 : 3$ of the girls to the boys is the quotient of the two counts after the change, a part over a part."
                },
                {
                  "step": "$3(x - 4) = 5(y + 8)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$3(3y - 4) = 5(y + 8)$",
                  "reason": "Substitution: $3y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$9y - 12 = 5y + 40$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$4y - 12 = 40$",
                  "reason": "Adding the same number to both sides: adding $-5y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$4y = 52$",
                  "reason": "Adding the same number to both sides: adding $12$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 13$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 3(13) = 39$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = 3y$."
                },
                {
                  "step": "At the start there are $39$ girls and $13$ boys, with $\\dfrac{39}{52} = \\dfrac{3}{4}$; after the change there are $35$ and $21$, with $\\dfrac{35}{21} = \\dfrac{5}{3}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $52$ singers in the choir at the start.",
                  "reason": "Answering the question asked: the question asks for the number of singers at the start, so the last line states the sum $x + y$."
                }
              ]
            },
            {
              "prompt": "Find the number of vans in a car park at the start, if the cars make up $\\dfrac{5}{6}$ of the vehicles and the rest are vans, and after 3 cars and 6 vans drive in, the ratio of cars to vans is $7 : 2$.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the number of vans in a car park at the start, if the cars make up $\\dfrac{5}{6}$ of the vehicles and the rest are vans, and after 3 cars and 6 vans drive in, the ratio of cars to vans is $7 : 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of cars and $y$ the number of vans at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{cars}}{\\text{all the vehicles}} = \\dfrac{5}{6}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{5}{6}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{5}{6}$ compares the cars with all the vehicles, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$6x = 5(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$6x = 5x + 5y$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 5y$",
                  "reason": "Adding the same number to both sides: adding $-5x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "$\\dfrac{\\text{cars after}}{\\text{vans after}} = \\dfrac{7}{2}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x + 3}{y + 6} = \\dfrac{7}{2}$",
                  "reason": "Ratio: the ratio $7 : 2$ of the cars to the vans is the quotient of the two counts after the change, a part over a part."
                },
                {
                  "step": "$2(x + 3) = 7(y + 6)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$2(5y + 3) = 7(y + 6)$",
                  "reason": "Substitution: $5y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$10y + 6 = 7y + 42$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$3y + 6 = 42$",
                  "reason": "Adding the same number to both sides: adding $-7y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$3y = 36$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 5(12) = 60$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = 5y$."
                },
                {
                  "step": "At the start there are $60$ cars and $12$ vans, with $\\dfrac{60}{72} = \\dfrac{5}{6}$; after the change there are $63$ and $18$, with $\\dfrac{63}{18} = \\dfrac{7}{2}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $12$ vans in the car park at the start.",
                  "reason": "Answering the question asked: the question asks for the number of vans at the start, so the last line states that count, $y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of beads in a jar at the start, if the red beads make up $\\dfrac{3}{5}$ of the beads and the rest are black beads, and after 8 red beads are taken out and 4 black beads are put in, the ratio of red beads to black beads is $4 : 5$.",
            "lines": [
              {
                "step": "Find the number of beads in a jar at the start, if the red beads make up $\\dfrac{3}{5}$ of the beads and the rest are black beads, and after 8 red beads are taken out and 4 black beads are put in, the ratio of red beads to black beads is $4 : 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of red beads and $y$ the number of black beads at the start.",
                "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
              },
              {
                "step": "$\\dfrac{\\text{red beads}}{\\text{all the beads}} = \\dfrac{3}{5}$",
                "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
              },
              {
                "step": "$\\dfrac{x}{x + y} = \\dfrac{3}{5}$",
                "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{3}{5}$ compares the red beads with all the beads, a part with the whole, so the bottom is $x + y$."
              },
              {
                "step": "$5x = 3(x + y)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$5x = 3x + 3y$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
              },
              {
                "step": "$2x = 3y$",
                "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$x = \\dfrac{3}{2}y$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "$\\dfrac{\\text{red beads after}}{\\text{black beads after}} = \\dfrac{4}{5}$",
                "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
              },
              {
                "step": "$\\dfrac{x - 8}{y + 4} = \\dfrac{4}{5}$",
                "reason": "Ratio: the ratio $4 : 5$ of the red beads to the black beads is the quotient of the two counts after the change, a part over a part."
              },
              {
                "step": "$5(x - 8) = 4(y + 4)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$5\\left(\\dfrac{3}{2}y - 8\\right) = 4(y + 4)$",
                "reason": "Substitution: $\\dfrac{3}{2}y$ goes in place of $x$, which leaves one letter."
              },
              {
                "step": "$\\dfrac{15}{2}y - 40 = 4y + 16$",
                "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
              },
              {
                "step": "$15y - 80 = 8y + 32$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ keeps them equal and clears the fraction."
              },
              {
                "step": "$7y - 80 = 32$",
                "reason": "Adding the same number to both sides: adding $-8y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
              },
              {
                "step": "$7y = 112$",
                "reason": "Adding the same number to both sides: adding $80$ to both sides keeps them equal and leaves the term in $y$ alone."
              },
              {
                "step": "$y = 16$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x = \\dfrac{3}{2}(16) = 24$",
                "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = \\dfrac{3}{2}y$."
              },
              {
                "step": "At the start there are $24$ red beads and $16$ black beads, with $\\dfrac{24}{40} = \\dfrac{3}{5}$; after the change there are $16$ and $20$, with $\\dfrac{16}{20} = \\dfrac{4}{5}$.",
                "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "There were $40$ beads in the jar at the start.",
                "reason": "Answering the question asked: the question asks for the number of beads at the start, so the last line states the sum $x + y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of novels on a shelf at the start, if the novels make up $\\dfrac{3}{10}$ of the books and the rest are atlases, and after 9 novels and 6 atlases are put on the shelf, the ratio of novels to atlases is $3 : 4$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the number of novels on a shelf at the start, if the novels make up $\\dfrac{3}{10}$ of the books and the rest are atlases, and after 9 novels and 6 atlases are put on the shelf, the ratio of novels to atlases is $3 : 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of novels and $y$ the number of atlases at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{novels}}{\\text{all the books}} = \\dfrac{3}{10}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{3}{10}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{3}{10}$ compares the novels with all the books, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$10x = 3(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$10x = 3x + 3y$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$7x = 3y$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = \\dfrac{3}{7}y$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$\\dfrac{\\text{novels after}}{\\text{atlases after}} = \\dfrac{3}{4}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x + 9}{y + 6} = \\dfrac{3}{4}$",
                  "reason": "Ratio: the ratio $3 : 4$ of the novels to the atlases is the quotient of the two counts after the change, a part over a part."
                },
                {
                  "step": "$4(x + 9) = 3(y + 6)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$4\\left(\\dfrac{3}{7}y + 9\\right) = 3(y + 6)$",
                  "reason": "Substitution: $\\dfrac{3}{7}y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{12}{7}y + 36 = 3y + 18$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$12y + 252 = 21y + 126$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $7$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$-9y + 252 = 126$",
                  "reason": "Adding the same number to both sides: adding $-21y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$-9y = -126$",
                  "reason": "Adding the same number to both sides: adding $-252$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 14$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-9$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = \\dfrac{3}{7}(14) = 6$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = \\dfrac{3}{7}y$."
                },
                {
                  "step": "At the start there are $6$ novels and $14$ atlases, with $\\dfrac{6}{20} = \\dfrac{3}{10}$; after the change there are $15$ and $20$, with $\\dfrac{15}{20} = \\dfrac{3}{4}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $6$ novels on the shelf at the start.",
                  "reason": "Answering the question asked: the question asks for the number of novels at the start, so the last line states that count, $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of yellow tulips in a flower bed at the start, if the red tulips make up $\\dfrac{7}{12}$ of the tulips and the rest are yellow tulips, and after 7 red tulips are dug up and 4 yellow tulips are planted, the ratio of red tulips to yellow tulips is $7 : 8$.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the number of yellow tulips in a flower bed at the start, if the red tulips make up $\\dfrac{7}{12}$ of the tulips and the rest are yellow tulips, and after 7 red tulips are dug up and 4 yellow tulips are planted, the ratio of red tulips to yellow tulips is $7 : 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of red tulips and $y$ the number of yellow tulips at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{red tulips}}{\\text{all the tulips}} = \\dfrac{7}{12}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{7}{12}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{7}{12}$ compares the red tulips with all the tulips, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$12x = 7(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$12x = 7x + 7y$",
                  "reason": "Multiplying out: by the distributive law the $7$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$5x = 7y$",
                  "reason": "Adding the same number to both sides: adding $-7x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = \\dfrac{7}{5}y$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$\\dfrac{\\text{red tulips after}}{\\text{yellow tulips after}} = \\dfrac{7}{8}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x - 7}{y + 4} = \\dfrac{7}{8}$",
                  "reason": "Ratio: the ratio $7 : 8$ of the red tulips to the yellow tulips is the quotient of the two counts after the change, a part over a part."
                },
                {
                  "step": "$8(x - 7) = 7(y + 4)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$8\\left(\\dfrac{7}{5}y - 7\\right) = 7(y + 4)$",
                  "reason": "Substitution: $\\dfrac{7}{5}y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{56}{5}y - 56 = 7y + 28$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$56y - 280 = 35y + 140$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$21y - 280 = 140$",
                  "reason": "Adding the same number to both sides: adding $-35y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$21y = 420$",
                  "reason": "Adding the same number to both sides: adding $280$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 20$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $21$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = \\dfrac{7}{5}(20) = 28$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = \\dfrac{7}{5}y$."
                },
                {
                  "step": "At the start there are $28$ red tulips and $20$ yellow tulips, with $\\dfrac{28}{48} = \\dfrac{7}{12}$; after the change there are $21$ and $24$, with $\\dfrac{21}{24} = \\dfrac{7}{8}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $20$ yellow tulips in the flower bed at the start.",
                  "reason": "Answering the question asked: the question asks for the number of yellow tulips at the start, so the last line states that count, $y$."
                }
              ]
            },
            {
              "prompt": "Find the number of vehicles in a car park at the start, if the cars make up $\\dfrac{2}{9}$ of the vehicles and the rest are vans, and after 6 cars drive in and 6 vans drive out, the ratio of cars to vans is $5 : 4$.",
              "form": "Answer as an integer.",
              "answer": "18",
              "lines": [
                {
                  "step": "Find the number of vehicles in a car park at the start, if the cars make up $\\dfrac{2}{9}$ of the vehicles and the rest are vans, and after 6 cars drive in and 6 vans drive out, the ratio of cars to vans is $5 : 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of cars and $y$ the number of vans at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{cars}}{\\text{all the vehicles}} = \\dfrac{2}{9}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{2}{9}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{2}{9}$ compares the cars with all the vehicles, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$9x = 2(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$9x = 2x + 2y$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$7x = 2y$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = \\dfrac{2}{7}y$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$\\dfrac{\\text{cars after}}{\\text{vans after}} = \\dfrac{5}{4}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x + 6}{y - 6} = \\dfrac{5}{4}$",
                  "reason": "Ratio: the ratio $5 : 4$ of the cars to the vans is the quotient of the two counts after the change, a part over a part."
                },
                {
                  "step": "$4(x + 6) = 5(y - 6)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$4\\left(\\dfrac{2}{7}y + 6\\right) = 5(y - 6)$",
                  "reason": "Substitution: $\\dfrac{2}{7}y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$\\dfrac{8}{7}y + 24 = 5y - 30$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$8y + 168 = 35y - 210$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $7$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$-27y + 168 = -210$",
                  "reason": "Adding the same number to both sides: adding $-35y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$-27y = -378$",
                  "reason": "Adding the same number to both sides: adding $-168$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 14$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-27$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = \\dfrac{2}{7}(14) = 4$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = \\dfrac{2}{7}y$."
                },
                {
                  "step": "At the start there are $4$ cars and $14$ vans, with $\\dfrac{4}{18} = \\dfrac{2}{9}$; after the change there are $10$ and $8$, with $\\dfrac{10}{8} = \\dfrac{5}{4}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $18$ vehicles in the car park at the start.",
                  "reason": "Answering the question asked: the question asks for the number of vehicles at the start, so the last line states the sum $x + y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of beads in a jar at the start, if the red beads make up $\\dfrac{5}{6}$ of the beads and the rest are black beads, and after 3 red beads and 5 black beads are put in the jar, the red beads make up $\\dfrac{3}{4}$ of the beads.",
            "lines": [
              {
                "step": "Find the number of beads in a jar at the start, if the red beads make up $\\dfrac{5}{6}$ of the beads and the rest are black beads, and after 3 red beads and 5 black beads are put in the jar, the red beads make up $\\dfrac{3}{4}$ of the beads.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of red beads and $y$ the number of black beads at the start.",
                "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
              },
              {
                "step": "$\\dfrac{\\text{red beads}}{\\text{all the beads}} = \\dfrac{5}{6}$",
                "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
              },
              {
                "step": "$\\dfrac{x}{x + y} = \\dfrac{5}{6}$",
                "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{5}{6}$ compares the red beads with all the beads, a part with the whole, so the bottom is $x + y$."
              },
              {
                "step": "$6x = 5(x + y)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$6x = 5x + 5y$",
                "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket."
              },
              {
                "step": "$x = 5y$",
                "reason": "Adding the same number to both sides: adding $-5x$ to both sides keeps them equal and leaves $x$ alone on the left."
              },
              {
                "step": "$\\dfrac{\\text{red beads after}}{\\text{all the beads after}} = \\dfrac{3}{4}$",
                "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
              },
              {
                "step": "$\\dfrac{x + 3}{x + y + 8} = \\dfrac{3}{4}$",
                "reason": "Part-to-part and part-to-whole ratio: after the change $\\dfrac{3}{4}$ again compares the red beads with all the beads, so the bottom is the whole after the change, $x + y$ with the change of both kinds, $x + y + 8$."
              },
              {
                "step": "$4(x + 3) = 3(x + y + 8)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$4(5y + 3) = 3(5y + y + 8)$",
                "reason": "Substitution: $5y$ goes in place of $x$, which leaves one letter."
              },
              {
                "step": "$20y + 12 = 15y + 3y + 24$",
                "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
              },
              {
                "step": "$20y + 12 = 18y + 24$",
                "reason": "Collecting like terms: $15y$ and $3y$ add to $18y$."
              },
              {
                "step": "$2y + 12 = 24$",
                "reason": "Adding the same number to both sides: adding $-18y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
              },
              {
                "step": "$2y = 12$",
                "reason": "Adding the same number to both sides: adding $-12$ to both sides keeps them equal and leaves the term in $y$ alone."
              },
              {
                "step": "$y = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x = 5(6) = 30$",
                "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = 5y$."
              },
              {
                "step": "At the start there are $30$ red beads and $6$ black beads, with $\\dfrac{30}{36} = \\dfrac{5}{6}$; after the change there are $33$ red beads of $44$ beads, with $\\dfrac{33}{44} = \\dfrac{3}{4}$.",
                "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "There were $36$ beads in the jar at the start.",
                "reason": "Answering the question asked: the question asks for the number of beads at the start, so the last line states the sum $x + y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of novels on a shelf at the start, if the novels make up $\\dfrac{4}{5}$ of the books and the rest are atlases, and after 6 novels are put on and 2 atlases are taken off, the novels make up $\\dfrac{6}{7}$ of the books.",
              "form": "Answer as an integer.",
              "answer": "36",
              "lines": [
                {
                  "step": "Find the number of novels on a shelf at the start, if the novels make up $\\dfrac{4}{5}$ of the books and the rest are atlases, and after 6 novels are put on and 2 atlases are taken off, the novels make up $\\dfrac{6}{7}$ of the books.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of novels and $y$ the number of atlases at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{novels}}{\\text{all the books}} = \\dfrac{4}{5}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{4}{5}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{4}{5}$ compares the novels with all the books, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$5x = 4(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$5x = 4x + 4y$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 4y$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "$\\dfrac{\\text{novels after}}{\\text{all the books after}} = \\dfrac{6}{7}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x + 6}{x + y + 4} = \\dfrac{6}{7}$",
                  "reason": "Part-to-part and part-to-whole ratio: after the change $\\dfrac{6}{7}$ again compares the novels with all the books, so the bottom is the whole after the change, $x + y$ with the change of both kinds, $x + y + 4$."
                },
                {
                  "step": "$7(x + 6) = 6(x + y + 4)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$7(4y + 6) = 6(4y + y + 4)$",
                  "reason": "Substitution: $4y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$28y + 42 = 24y + 6y + 24$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$28y + 42 = 30y + 24$",
                  "reason": "Collecting like terms: $24y$ and $6y$ add to $30y$."
                },
                {
                  "step": "$-2y + 42 = 24$",
                  "reason": "Adding the same number to both sides: adding $-30y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$-2y = -18$",
                  "reason": "Adding the same number to both sides: adding $-42$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 9$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 4(9) = 36$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = 4y$."
                },
                {
                  "step": "At the start there are $36$ novels and $9$ atlases, with $\\dfrac{36}{45} = \\dfrac{4}{5}$; after the change there are $42$ novels of $49$ books, with $\\dfrac{42}{49} = \\dfrac{6}{7}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $36$ novels on the shelf at the start.",
                  "reason": "Answering the question asked: the question asks for the number of novels at the start, so the last line states that count, $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of boys in a choir at the start, if the girls make up $\\dfrac{3}{4}$ of the singers and the rest are boys, and after 2 girls and 6 boys join, the girls make up $\\dfrac{7}{10}$ of the singers.",
              "form": "Answer as an integer.",
              "answer": "18",
              "lines": [
                {
                  "step": "Find the number of boys in a choir at the start, if the girls make up $\\dfrac{3}{4}$ of the singers and the rest are boys, and after 2 girls and 6 boys join, the girls make up $\\dfrac{7}{10}$ of the singers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of girls and $y$ the number of boys at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{girls}}{\\text{all the singers}} = \\dfrac{3}{4}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{3}{4}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{3}{4}$ compares the girls with all the singers, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$4x = 3(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$4x = 3x + 3y$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 3y$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "$\\dfrac{\\text{girls after}}{\\text{all the singers after}} = \\dfrac{7}{10}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x + 2}{x + y + 8} = \\dfrac{7}{10}$",
                  "reason": "Part-to-part and part-to-whole ratio: after the change $\\dfrac{7}{10}$ again compares the girls with all the singers, so the bottom is the whole after the change, $x + y$ with the change of both kinds, $x + y + 8$."
                },
                {
                  "step": "$10(x + 2) = 7(x + y + 8)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$10(3y + 2) = 7(3y + y + 8)$",
                  "reason": "Substitution: $3y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$30y + 20 = 21y + 7y + 56$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$30y + 20 = 28y + 56$",
                  "reason": "Collecting like terms: $21y$ and $7y$ add to $28y$."
                },
                {
                  "step": "$2y + 20 = 56$",
                  "reason": "Adding the same number to both sides: adding $-28y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$2y = 36$",
                  "reason": "Adding the same number to both sides: adding $-20$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 18$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 3(18) = 54$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = 3y$."
                },
                {
                  "step": "At the start there are $54$ girls and $18$ boys, with $\\dfrac{54}{72} = \\dfrac{3}{4}$; after the change there are $56$ girls of $80$ singers, with $\\dfrac{56}{80} = \\dfrac{7}{10}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $18$ boys in the choir at the start.",
                  "reason": "Answering the question asked: the question asks for the number of boys at the start, so the last line states that count, $y$."
                }
              ]
            },
            {
              "prompt": "Find the number of tulips in a flower bed at the start, if the red tulips make up $\\dfrac{2}{3}$ of the tulips and the rest are yellow tulips, and after 4 red tulips are planted and 6 yellow tulips are dug up, the red tulips make up $\\dfrac{4}{5}$ of the tulips.",
              "form": "Answer as an integer.",
              "answer": "42",
              "lines": [
                {
                  "step": "Find the number of tulips in a flower bed at the start, if the red tulips make up $\\dfrac{2}{3}$ of the tulips and the rest are yellow tulips, and after 4 red tulips are planted and 6 yellow tulips are dug up, the red tulips make up $\\dfrac{4}{5}$ of the tulips.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of red tulips and $y$ the number of yellow tulips at the start.",
                  "reason": "One letter for each unknown: the two counts at the start are unknown, so each gets its own letter, and the counts after the change are written in those letters."
                },
                {
                  "step": "$\\dfrac{\\text{red tulips}}{\\text{all the tulips}} = \\dfrac{2}{3}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{2}{3}$",
                  "reason": "Part-to-part and part-to-whole ratio: $\\dfrac{2}{3}$ compares the red tulips with all the tulips, a part with the whole, so the bottom is $x + y$."
                },
                {
                  "step": "$3x = 2(x + y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$3x = 2x + 2y$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 2y$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves $x$ alone on the left."
                },
                {
                  "step": "$\\dfrac{\\text{red tulips after}}{\\text{all the tulips after}} = \\dfrac{4}{5}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x + 4}{x + y - 2} = \\dfrac{4}{5}$",
                  "reason": "Part-to-part and part-to-whole ratio: after the change $\\dfrac{4}{5}$ again compares the red tulips with all the tulips, so the bottom is the whole after the change, $x + y$ with the change of both kinds, $x + y - 2$."
                },
                {
                  "step": "$5(x + 4) = 4(x + y - 2)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$5(2y + 4) = 4(2y + y - 2)$",
                  "reason": "Substitution: $2y$ goes in place of $x$, which leaves one letter."
                },
                {
                  "step": "$10y + 20 = 8y + 4y - 8$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$10y + 20 = 12y - 8$",
                  "reason": "Collecting like terms: $8y$ and $4y$ add to $12y$."
                },
                {
                  "step": "$-2y + 20 = -8$",
                  "reason": "Adding the same number to both sides: adding $-12y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$-2y = -28$",
                  "reason": "Adding the same number to both sides: adding $-20$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 14$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 2(14) = 28$",
                  "reason": "Back-substitution: the value found goes, in brackets, in place of $y$ in $x = 2y$."
                },
                {
                  "step": "At the start there are $28$ red tulips and $14$ yellow tulips, with $\\dfrac{28}{42} = \\dfrac{2}{3}$; after the change there are $32$ red tulips of $40$ tulips, with $\\dfrac{32}{40} = \\dfrac{4}{5}$.",
                  "reason": "Checking against the words: the counts go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There were $42$ tulips in the flower bed at the start.",
                  "reason": "Answering the question asked: the question asks for the number of tulips at the start, so the last line states the sum $x + y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t118-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the ratio $\\dfrac{x}{y}$, if $\\dfrac{8x - 5y}{7x - 4y} = \\dfrac{2}{3}$ and $y$ is not $0$.",
            "lines": [
              {
                "step": "Find the ratio $\\dfrac{x}{y}$, if $\\dfrac{8x - 5y}{7x - 4y} = \\dfrac{2}{3}$ and $y$ is not $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3(8x - 5y) = 2(7x - 4y)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$24x - 15y = 14x - 8y$",
                "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
              },
              {
                "step": "$10x - 15y = -8y$",
                "reason": "Adding the same number to both sides: adding $-14x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$10x = 7y$",
                "reason": "Adding the same number to both sides: adding $15y$ to both sides keeps them equal and leaves the terms in $y$ on the right only."
              },
              {
                "step": "$\\dfrac{x}{y} = \\dfrac{7}{10}$",
                "reason": "Ratio of two variables: dividing both sides by $10y$, which is not $0$, leaves the quotient $\\dfrac{x}{y}$ on the left, and $\\dfrac{7}{10}$ is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the ratio $\\dfrac{x}{y}$, if $\\dfrac{5x - 4y}{3x + 2y} = \\dfrac{6}{7}$ and $y$ is not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "40/17",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{x}{y}$, if $\\dfrac{5x - 4y}{3x + 2y} = \\dfrac{6}{7}$ and $y$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7(5x - 4y) = 6(3x + 2y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$35x - 28y = 18x + 12y$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$17x - 28y = 12y$",
                  "reason": "Adding the same number to both sides: adding $-18x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$17x = 40y$",
                  "reason": "Adding the same number to both sides: adding $28y$ to both sides keeps them equal and leaves the terms in $y$ on the right only."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{40}{17}$",
                  "reason": "Ratio of two variables: dividing both sides by $17y$, which is not $0$, leaves the quotient $\\dfrac{x}{y}$ on the left, and $\\dfrac{40}{17}$ is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the ratio $\\dfrac{x}{y}$, if $\\dfrac{5x - 4y}{2x - 7y} = \\dfrac{3}{7}$ and $y$ is not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/29",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{x}{y}$, if $\\dfrac{5x - 4y}{2x - 7y} = \\dfrac{3}{7}$ and $y$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7(5x - 4y) = 3(2x - 7y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$35x - 28y = 6x - 21y$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$29x - 28y = -21y$",
                  "reason": "Adding the same number to both sides: adding $-6x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$29x = 7y$",
                  "reason": "Adding the same number to both sides: adding $28y$ to both sides keeps them equal and leaves the terms in $y$ on the right only."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{7}{29}$",
                  "reason": "Ratio of two variables: dividing both sides by $29y$, which is not $0$, leaves the quotient $\\dfrac{x}{y}$ on the left, and $\\dfrac{7}{29}$ is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the ratio $\\dfrac{x}{y}$, if $\\dfrac{8x - 7y}{3x - 2y} = \\dfrac{5}{6}$ and $y$ is not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "32/33",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{x}{y}$, if $\\dfrac{8x - 7y}{3x - 2y} = \\dfrac{5}{6}$ and $y$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6(8x - 7y) = 5(3x - 2y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$48x - 42y = 15x - 10y$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$33x - 42y = -10y$",
                  "reason": "Adding the same number to both sides: adding $-15x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$33x = 32y$",
                  "reason": "Adding the same number to both sides: adding $42y$ to both sides keeps them equal and leaves the terms in $y$ on the right only."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{32}{33}$",
                  "reason": "Ratio of two variables: dividing both sides by $33y$, which is not $0$, leaves the quotient $\\dfrac{x}{y}$ on the left, and $\\dfrac{32}{33}$ is in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the ratio $\\dfrac{x}{z}$, if $\\dfrac{x}{y} = \\dfrac{5}{9}$ and $\\dfrac{y}{z} = \\dfrac{11}{5}$, where $y$ and $z$ are not $0$.",
            "lines": [
              {
                "step": "Find the ratio $\\dfrac{x}{z}$, if $\\dfrac{x}{y} = \\dfrac{5}{9}$ and $\\dfrac{y}{z} = \\dfrac{11}{5}$, where $y$ and $z$ are not $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x}{y} \\cdot \\dfrac{y}{z} = \\dfrac{5}{9} \\cdot \\dfrac{11}{5}$",
                "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
              },
              {
                "step": "$\\dfrac{x}{z} = \\dfrac{5}{9} \\cdot \\dfrac{11}{5}$",
                "reason": "Cancelling a common factor: $y$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
              },
              {
                "step": "$\\dfrac{x}{z} = \\dfrac{55}{45}$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$\\dfrac{x}{z} = \\dfrac{11}{9}$",
                "reason": "A fraction in lowest terms: dividing top and bottom by $5$ leaves no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the ratio $\\dfrac{x}{z}$, if $\\dfrac{x}{y} = \\dfrac{4}{9}$ and $\\dfrac{y}{z} = \\dfrac{15}{8}$, where $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/6",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{x}{z}$, if $\\dfrac{x}{y} = \\dfrac{4}{9}$ and $\\dfrac{y}{z} = \\dfrac{15}{8}$, where $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{y}{z} = \\dfrac{4}{9} \\cdot \\dfrac{15}{8}$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{4}{9} \\cdot \\dfrac{15}{8}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{60}{72}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{5}{6}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $12$ leaves no common factor."
                }
              ]
            },
            {
              "prompt": "Find the ratio $\\dfrac{x}{z}$, if $\\dfrac{x}{y} = \\dfrac{12}{13}$ and $\\dfrac{y}{z} = \\dfrac{5}{4}$, where $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "15/13",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{x}{z}$, if $\\dfrac{x}{y} = \\dfrac{12}{13}$ and $\\dfrac{y}{z} = \\dfrac{5}{4}$, where $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{y}{z} = \\dfrac{12}{13} \\cdot \\dfrac{5}{4}$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{12}{13} \\cdot \\dfrac{5}{4}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{60}{52}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{15}{13}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $4$ leaves no common factor."
                }
              ]
            },
            {
              "prompt": "Find the ratio $\\dfrac{x}{z}$, if $\\dfrac{x}{y} = \\dfrac{14}{11}$ and $\\dfrac{y}{z} = \\dfrac{6}{7}$, where $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "12/11",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{x}{z}$, if $\\dfrac{x}{y} = \\dfrac{14}{11}$ and $\\dfrac{y}{z} = \\dfrac{6}{7}$, where $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{y}{z} = \\dfrac{14}{11} \\cdot \\dfrac{6}{7}$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{14}{11} \\cdot \\dfrac{6}{7}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{84}{77}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{12}{11}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $7$ leaves no common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the ratio $\\dfrac{z}{y}$, if $\\dfrac{x}{y} = \\dfrac{4}{9}$ and $\\dfrac{x}{z} = \\dfrac{10}{3}$, where $x$, $y$ and $z$ are not $0$.",
            "lines": [
              {
                "step": "Find the ratio $\\dfrac{z}{y}$, if $\\dfrac{x}{y} = \\dfrac{4}{9}$ and $\\dfrac{x}{z} = \\dfrac{10}{3}$, where $x$, $y$ and $z$ are not $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x}{y} \\div \\dfrac{x}{z} = \\dfrac{4}{9} \\div \\dfrac{10}{3}$",
                "reason": "Dividing both sides by a nonzero number: the first equation is divided on the left by $\\dfrac{x}{z}$ and on the right by $\\dfrac{10}{3}$, which are equal by the second equation and not $0$."
              },
              {
                "step": "$\\dfrac{x}{y} \\cdot \\dfrac{z}{x} = \\dfrac{4}{9} \\cdot \\dfrac{3}{10}$",
                "reason": "Division of rational numbers: dividing by a fraction is multiplying by its multiplicative inverse, the fraction turned over."
              },
              {
                "step": "$\\dfrac{z}{y} = \\dfrac{4}{9} \\cdot \\dfrac{3}{10}$",
                "reason": "Cancelling a common factor: $x$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
              },
              {
                "step": "$\\dfrac{z}{y} = \\dfrac{12}{90}$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$\\dfrac{z}{y} = \\dfrac{2}{15}$",
                "reason": "A fraction in lowest terms: dividing top and bottom by $6$ leaves no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the ratio $\\dfrac{z}{y}$, if $\\dfrac{x}{y} = \\dfrac{6}{5}$ and $\\dfrac{x}{z} = \\dfrac{9}{10}$, where $x$, $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4/3",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{z}{y}$, if $\\dfrac{x}{y} = \\dfrac{6}{5}$ and $\\dfrac{x}{z} = \\dfrac{9}{10}$, where $x$, $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\div \\dfrac{x}{z} = \\dfrac{6}{5} \\div \\dfrac{9}{10}$",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided on the left by $\\dfrac{x}{z}$ and on the right by $\\dfrac{9}{10}$, which are equal by the second equation and not $0$."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{z}{x} = \\dfrac{6}{5} \\cdot \\dfrac{10}{9}$",
                  "reason": "Division of rational numbers: dividing by a fraction is multiplying by its multiplicative inverse, the fraction turned over."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{6}{5} \\cdot \\dfrac{10}{9}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{60}{45}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{4}{3}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $15$ leaves no common factor."
                }
              ]
            },
            {
              "prompt": "Find the ratio $\\dfrac{z}{y}$, if $\\dfrac{x}{y} = \\dfrac{8}{3}$ and $\\dfrac{x}{z} = \\dfrac{12}{7}$, where $x$, $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "14/9",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{z}{y}$, if $\\dfrac{x}{y} = \\dfrac{8}{3}$ and $\\dfrac{x}{z} = \\dfrac{12}{7}$, where $x$, $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\div \\dfrac{x}{z} = \\dfrac{8}{3} \\div \\dfrac{12}{7}$",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided on the left by $\\dfrac{x}{z}$ and on the right by $\\dfrac{12}{7}$, which are equal by the second equation and not $0$."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{z}{x} = \\dfrac{8}{3} \\cdot \\dfrac{7}{12}$",
                  "reason": "Division of rational numbers: dividing by a fraction is multiplying by its multiplicative inverse, the fraction turned over."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{8}{3} \\cdot \\dfrac{7}{12}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{56}{36}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{14}{9}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $4$ leaves no common factor."
                }
              ]
            },
            {
              "prompt": "Find the ratio $\\dfrac{z}{y}$, if $\\dfrac{x}{y} = \\dfrac{5}{6}$ and $\\dfrac{x}{z} = \\dfrac{15}{4}$, where $x$, $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2/9",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{z}{y}$, if $\\dfrac{x}{y} = \\dfrac{5}{6}$ and $\\dfrac{x}{z} = \\dfrac{15}{4}$, where $x$, $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\div \\dfrac{x}{z} = \\dfrac{5}{6} \\div \\dfrac{15}{4}$",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided on the left by $\\dfrac{x}{z}$ and on the right by $\\dfrac{15}{4}$, which are equal by the second equation and not $0$."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{z}{x} = \\dfrac{5}{6} \\cdot \\dfrac{4}{15}$",
                  "reason": "Division of rational numbers: dividing by a fraction is multiplying by its multiplicative inverse, the fraction turned over."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{5}{6} \\cdot \\dfrac{4}{15}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{20}{90}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{z}{y} = \\dfrac{2}{9}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $10$ leaves no common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the ratio $\\dfrac{z}{x}$, if $\\dfrac{x}{y} = \\dfrac{3}{4}$ and $\\dfrac{y}{z} = \\dfrac{10}{9}$, where $x$, $y$ and $z$ are not $0$.",
            "lines": [
              {
                "step": "Find the ratio $\\dfrac{z}{x}$, if $\\dfrac{x}{y} = \\dfrac{3}{4}$ and $\\dfrac{y}{z} = \\dfrac{10}{9}$, where $x$, $y$ and $z$ are not $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x}{y} \\cdot \\dfrac{y}{z} = \\dfrac{3}{4} \\cdot \\dfrac{10}{9}$",
                "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
              },
              {
                "step": "$\\dfrac{x}{z} = \\dfrac{3}{4} \\cdot \\dfrac{10}{9}$",
                "reason": "Cancelling a common factor: $y$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
              },
              {
                "step": "$\\dfrac{x}{z} = \\dfrac{30}{36}$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$\\dfrac{z}{x} = \\dfrac{36}{30}$",
                "reason": "Multiplicative inverse: equal nonzero numbers have equal multiplicative inverses, and the inverse of a fraction is the fraction turned over, so $\\dfrac{z}{x}$ is the inverse of $\\dfrac{x}{z}$."
              },
              {
                "step": "$\\dfrac{z}{x} = \\dfrac{6}{5}$",
                "reason": "A fraction in lowest terms: dividing top and bottom by $6$ leaves no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the ratio $\\dfrac{z}{x}$, if $\\dfrac{x}{y} = \\dfrac{5}{6}$ and $\\dfrac{y}{z} = \\dfrac{9}{10}$, where $x$, $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4/3",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{z}{x}$, if $\\dfrac{x}{y} = \\dfrac{5}{6}$ and $\\dfrac{y}{z} = \\dfrac{9}{10}$, where $x$, $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{y}{z} = \\dfrac{5}{6} \\cdot \\dfrac{9}{10}$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{5}{6} \\cdot \\dfrac{9}{10}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{45}{60}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{z}{x} = \\dfrac{60}{45}$",
                  "reason": "Multiplicative inverse: equal nonzero numbers have equal multiplicative inverses, and the inverse of a fraction is the fraction turned over, so $\\dfrac{z}{x}$ is the inverse of $\\dfrac{x}{z}$."
                },
                {
                  "step": "$\\dfrac{z}{x} = \\dfrac{4}{3}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $15$ leaves no common factor."
                }
              ]
            },
            {
              "prompt": "Find the ratio $\\dfrac{z}{x}$, if $\\dfrac{x}{y} = \\dfrac{7}{10}$ and $\\dfrac{y}{z} = \\dfrac{4}{21}$, where $x$, $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "15/2",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{z}{x}$, if $\\dfrac{x}{y} = \\dfrac{7}{10}$ and $\\dfrac{y}{z} = \\dfrac{4}{21}$, where $x$, $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{y}{z} = \\dfrac{7}{10} \\cdot \\dfrac{4}{21}$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{7}{10} \\cdot \\dfrac{4}{21}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{28}{210}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{z}{x} = \\dfrac{210}{28}$",
                  "reason": "Multiplicative inverse: equal nonzero numbers have equal multiplicative inverses, and the inverse of a fraction is the fraction turned over, so $\\dfrac{z}{x}$ is the inverse of $\\dfrac{x}{z}$."
                },
                {
                  "step": "$\\dfrac{z}{x} = \\dfrac{15}{2}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $14$ leaves no common factor."
                }
              ]
            },
            {
              "prompt": "Find the ratio $\\dfrac{z}{x}$, if $\\dfrac{x}{y} = \\dfrac{9}{8}$ and $\\dfrac{y}{z} = \\dfrac{4}{15}$, where $x$, $y$ and $z$ are not $0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "10/3",
              "lines": [
                {
                  "step": "Find the ratio $\\dfrac{z}{x}$, if $\\dfrac{x}{y} = \\dfrac{9}{8}$ and $\\dfrac{y}{z} = \\dfrac{4}{15}$, where $x$, $y$ and $z$ are not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} \\cdot \\dfrac{y}{z} = \\dfrac{9}{8} \\cdot \\dfrac{4}{15}$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{9}{8} \\cdot \\dfrac{4}{15}$",
                  "reason": "Cancelling a common factor: $y$ stands on the top of one fraction and on the bottom of the other, and it is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{z} = \\dfrac{36}{120}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$\\dfrac{z}{x} = \\dfrac{120}{36}$",
                  "reason": "Multiplicative inverse: equal nonzero numbers have equal multiplicative inverses, and the inverse of a fraction is the fraction turned over, so $\\dfrac{z}{x}$ is the inverse of $\\dfrac{x}{z}$."
                },
                {
                  "step": "$\\dfrac{z}{x} = \\dfrac{10}{3}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $12$ leaves no common factor."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t118-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the number of minutes after 4 o'clock at which the minute hand and the hour hand first point the same way. The face has $60$ minute marks.",
            "lines": [
              {
                "step": "Find the number of minutes after 4 o'clock at which the minute hand and the hour hand first point the same way. The face has $60$ minute marks.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of minutes after 4 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
              },
              {
                "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
              },
              {
                "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
              },
              {
                "step": "The hour hand points at mark $20 + \\dfrac{x}{12}$.",
                "reason": "Writing a sentence as an equation: at 4 o'clock the hour hand points at the 4, which is mark $5 \\cdot 4 = 20$, and it has moved $\\dfrac{x}{12}$ marks on since."
              },
              {
                "step": "$x = 20 + \\dfrac{x}{12}$",
                "reason": "Writing a sentence as an equation: the hands point the same way when they point at the same mark."
              },
              {
                "step": "$12x = 240 + x$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
              },
              {
                "step": "$11x = 240$",
                "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$x = \\dfrac{240}{11}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "At $\\dfrac{240}{11}$ minutes after 4 o'clock the hour hand points at mark $20 + \\dfrac{20}{11} = \\dfrac{240}{11}$, the mark of the minute hand.",
                "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
              },
              {
                "step": "The hands first point the same way $\\dfrac{240}{11}$ minutes after 4 o'clock.",
                "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of minutes after 1 o'clock at which the minute hand and the hour hand first point the same way. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "60/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 1 o'clock at which the minute hand and the hour hand first point the same way. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 1 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $5 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 1 o'clock the hour hand points at the 1, which is mark $5 \\cdot 1 = 5$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$x = 5 + \\dfrac{x}{12}$",
                  "reason": "Writing a sentence as an equation: the hands point the same way when they point at the same mark."
                },
                {
                  "step": "$12x = 60 + x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$11x = 60$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = \\dfrac{60}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{60}{11}$ minutes after 1 o'clock the hour hand points at mark $5 + \\dfrac{5}{11} = \\dfrac{60}{11}$, the mark of the minute hand.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The hands first point the same way $\\dfrac{60}{11}$ minutes after 1 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after 7 o'clock at which the minute hand and the hour hand first point the same way. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "420/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 7 o'clock at which the minute hand and the hour hand first point the same way. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 7 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $35 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 7 o'clock the hour hand points at the 7, which is mark $5 \\cdot 7 = 35$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$x = 35 + \\dfrac{x}{12}$",
                  "reason": "Writing a sentence as an equation: the hands point the same way when they point at the same mark."
                },
                {
                  "step": "$12x = 420 + x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$11x = 420$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = \\dfrac{420}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{420}{11}$ minutes after 7 o'clock the hour hand points at mark $35 + \\dfrac{35}{11} = \\dfrac{420}{11}$, the mark of the minute hand.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The hands first point the same way $\\dfrac{420}{11}$ minutes after 7 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after 6 o'clock at which the minute hand and the hour hand first point the same way. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "360/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 6 o'clock at which the minute hand and the hour hand first point the same way. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 6 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $30 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 6 o'clock the hour hand points at the 6, which is mark $5 \\cdot 6 = 30$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$x = 30 + \\dfrac{x}{12}$",
                  "reason": "Writing a sentence as an equation: the hands point the same way when they point at the same mark."
                },
                {
                  "step": "$12x = 360 + x$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$11x = 360$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = \\dfrac{360}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{360}{11}$ minutes after 6 o'clock the hour hand points at mark $30 + \\dfrac{30}{11} = \\dfrac{360}{11}$, the mark of the minute hand.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The hands first point the same way $\\dfrac{360}{11}$ minutes after 6 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of minutes after 3 o'clock at which the minute hand and the hour hand first point in opposite directions. The face has $60$ minute marks.",
            "lines": [
              {
                "step": "Find the number of minutes after 3 o'clock at which the minute hand and the hour hand first point in opposite directions. The face has $60$ minute marks.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of minutes after 3 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
              },
              {
                "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
              },
              {
                "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
              },
              {
                "step": "The hour hand points at mark $15 + \\dfrac{x}{12}$.",
                "reason": "Writing a sentence as an equation: at 3 o'clock the hour hand points at the 3, which is mark $5 \\cdot 3 = 15$, and it has moved $\\dfrac{x}{12}$ marks on since."
              },
              {
                "step": "$x - \\left(15 + \\dfrac{x}{12}\\right) = 30$",
                "reason": "Writing a sentence as an equation: opposite directions put the hands half the face apart, $30$ marks, and the minute hand gets there ahead of the hour hand."
              },
              {
                "step": "$x - 15 - \\dfrac{x}{12} = 30$",
                "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
              },
              {
                "step": "$12x - 180 - x = 360$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
              },
              {
                "step": "$11x - 180 = 360$",
                "reason": "Collecting like terms: $12x$ and $-x$ add to $11x$."
              },
              {
                "step": "$11x = 540$",
                "reason": "Adding the same number to both sides: adding $180$ to both sides keeps them equal and leaves the term in $x$ alone."
              },
              {
                "step": "$x = \\dfrac{540}{11}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "At $\\dfrac{540}{11}$ minutes after 3 o'clock the hour hand points at mark $15 + \\dfrac{45}{11} = \\dfrac{210}{11}$, and $\\dfrac{540}{11} - \\dfrac{210}{11} = 30$.",
                "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
              },
              {
                "step": "The hands first point in opposite directions $\\dfrac{540}{11}$ minutes after 3 o'clock.",
                "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of minutes after 2 o'clock at which the minute hand and the hour hand first make a right angle. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "300/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 2 o'clock at which the minute hand and the hour hand first make a right angle. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 2 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $10 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 2 o'clock the hour hand points at the 2, which is mark $5 \\cdot 2 = 10$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$x - \\left(10 + \\dfrac{x}{12}\\right) = 15$",
                  "reason": "Writing a sentence as an equation: a right angle is a quarter of the face, $15$ marks, and the minute hand gets there ahead of the hour hand."
                },
                {
                  "step": "$x - 10 - \\dfrac{x}{12} = 15$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$12x - 120 - x = 180$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$11x - 120 = 180$",
                  "reason": "Collecting like terms: $12x$ and $-x$ add to $11x$."
                },
                {
                  "step": "$11x = 300$",
                  "reason": "Adding the same number to both sides: adding $120$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{300}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{300}{11}$ minutes after 2 o'clock the hour hand points at mark $10 + \\dfrac{25}{11} = \\dfrac{135}{11}$, and $\\dfrac{300}{11} - \\dfrac{135}{11} = 15$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The hands first make a right angle $\\dfrac{300}{11}$ minutes after 2 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after 1 o'clock at which the minute hand is first 8 marks ahead of the hour hand. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "156/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 1 o'clock at which the minute hand is first 8 marks ahead of the hour hand. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 1 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $5 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 1 o'clock the hour hand points at the 1, which is mark $5 \\cdot 1 = 5$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$x - \\left(5 + \\dfrac{x}{12}\\right) = 8$",
                  "reason": "Writing a sentence as an equation: the mark of the minute hand less the mark of the hour hand is $8$."
                },
                {
                  "step": "$x - 5 - \\dfrac{x}{12} = 8$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$12x - 60 - x = 96$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$11x - 60 = 96$",
                  "reason": "Collecting like terms: $12x$ and $-x$ add to $11x$."
                },
                {
                  "step": "$11x = 156$",
                  "reason": "Adding the same number to both sides: adding $60$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{156}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{156}{11}$ minutes after 1 o'clock the hour hand points at mark $5 + \\dfrac{13}{11} = \\dfrac{68}{11}$, and $\\dfrac{156}{11} - \\dfrac{68}{11} = 8$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The minute hand is first 8 marks ahead $\\dfrac{156}{11}$ minutes after 1 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after 4 o'clock at which the minute hand and the hour hand first point in opposite directions. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "600/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 4 o'clock at which the minute hand and the hour hand first point in opposite directions. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 4 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $20 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 4 o'clock the hour hand points at the 4, which is mark $5 \\cdot 4 = 20$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$x - \\left(20 + \\dfrac{x}{12}\\right) = 30$",
                  "reason": "Writing a sentence as an equation: opposite directions put the hands half the face apart, $30$ marks, and the minute hand gets there ahead of the hour hand."
                },
                {
                  "step": "$x - 20 - \\dfrac{x}{12} = 30$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$12x - 240 - x = 360$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$11x - 240 = 360$",
                  "reason": "Collecting like terms: $12x$ and $-x$ add to $11x$."
                },
                {
                  "step": "$11x = 600$",
                  "reason": "Adding the same number to both sides: adding $240$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{600}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{600}{11}$ minutes after 4 o'clock the hour hand points at mark $20 + \\dfrac{50}{11} = \\dfrac{270}{11}$, and $\\dfrac{600}{11} - \\dfrac{270}{11} = 30$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The hands first point in opposite directions $\\dfrac{600}{11}$ minutes after 4 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of minutes after 7 o'clock at which the minute hand and the hour hand first point in opposite directions. The face has $60$ minute marks.",
            "lines": [
              {
                "step": "Find the number of minutes after 7 o'clock at which the minute hand and the hour hand first point in opposite directions. The face has $60$ minute marks.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of minutes after 7 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
              },
              {
                "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
              },
              {
                "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
              },
              {
                "step": "The hour hand points at mark $35 + \\dfrac{x}{12}$.",
                "reason": "Writing a sentence as an equation: at 7 o'clock the hour hand points at the 7, which is mark $5 \\cdot 7 = 35$, and it has moved $\\dfrac{x}{12}$ marks on since."
              },
              {
                "step": "$\\left(35 + \\dfrac{x}{12}\\right) - x = 30$",
                "reason": "Writing a sentence as an equation: opposite directions put the hands half the face apart, $30$ marks, and the minute hand gets there still behind the hour hand."
              },
              {
                "step": "$35 + \\dfrac{x}{12} - x = 30$",
                "reason": "Dropping a bracket after nothing or a plus sign: the bracket opens the left side, so it goes and no sign in it changes."
              },
              {
                "step": "$420 + x - 12x = 360$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
              },
              {
                "step": "$420 - 11x = 360$",
                "reason": "Collecting like terms: $x$ and $-12x$ add to $-11x$."
              },
              {
                "step": "$-11x = -60$",
                "reason": "Adding the same number to both sides: adding $-420$ to both sides keeps them equal and leaves the term in $x$ alone."
              },
              {
                "step": "$x = \\dfrac{60}{11}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-11$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "At $\\dfrac{60}{11}$ minutes after 7 o'clock the hour hand points at mark $35 + \\dfrac{5}{11} = \\dfrac{390}{11}$, and $\\dfrac{390}{11} - \\dfrac{60}{11} = 30$.",
                "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
              },
              {
                "step": "The hands first point in opposite directions $\\dfrac{60}{11}$ minutes after 7 o'clock.",
                "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of minutes after 5 o'clock at which the minute hand and the hour hand first make a right angle. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "120/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 5 o'clock at which the minute hand and the hour hand first make a right angle. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 5 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $25 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 5 o'clock the hour hand points at the 5, which is mark $5 \\cdot 5 = 25$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$\\left(25 + \\dfrac{x}{12}\\right) - x = 15$",
                  "reason": "Writing a sentence as an equation: a right angle is a quarter of the face, $15$ marks, and the minute hand gets there still behind the hour hand."
                },
                {
                  "step": "$25 + \\dfrac{x}{12} - x = 15$",
                  "reason": "Dropping a bracket after nothing or a plus sign: the bracket opens the left side, so it goes and no sign in it changes."
                },
                {
                  "step": "$300 + x - 12x = 180$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$300 - 11x = 180$",
                  "reason": "Collecting like terms: $x$ and $-12x$ add to $-11x$."
                },
                {
                  "step": "$-11x = -120$",
                  "reason": "Adding the same number to both sides: adding $-300$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{120}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{120}{11}$ minutes after 5 o'clock the hour hand points at mark $25 + \\dfrac{10}{11} = \\dfrac{285}{11}$, and $\\dfrac{285}{11} - \\dfrac{120}{11} = 15$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The hands first make a right angle $\\dfrac{120}{11}$ minutes after 5 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after 9 o'clock at which the minute hand is first 8 marks behind the hour hand. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "444/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 9 o'clock at which the minute hand is first 8 marks behind the hour hand. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 9 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $45 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 9 o'clock the hour hand points at the 9, which is mark $5 \\cdot 9 = 45$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$\\left(45 + \\dfrac{x}{12}\\right) - x = 8$",
                  "reason": "Writing a sentence as an equation: the mark of the hour hand less the mark of the minute hand is $8$."
                },
                {
                  "step": "$45 + \\dfrac{x}{12} - x = 8$",
                  "reason": "Dropping a bracket after nothing or a plus sign: the bracket opens the left side, so it goes and no sign in it changes."
                },
                {
                  "step": "$540 + x - 12x = 96$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$540 - 11x = 96$",
                  "reason": "Collecting like terms: $x$ and $-12x$ add to $-11x$."
                },
                {
                  "step": "$-11x = -444$",
                  "reason": "Adding the same number to both sides: adding $-540$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{444}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{444}{11}$ minutes after 9 o'clock the hour hand points at mark $45 + \\dfrac{37}{11} = \\dfrac{532}{11}$, and $\\dfrac{532}{11} - \\dfrac{444}{11} = 8$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The minute hand is first 8 marks behind $\\dfrac{444}{11}$ minutes after 9 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after 11 o'clock at which the minute hand is first 20 marks behind the hour hand. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "420/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 11 o'clock at which the minute hand is first 20 marks behind the hour hand. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 11 o'clock, so the minute hand points at mark $x$, counted from the 12.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so after $x$ minutes it points at mark $x$."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In $x$ minutes the hour hand moves $\\dfrac{x}{12}$ marks.",
                  "reason": "Ratio: $\\dfrac{5}{60} = \\dfrac{1}{12}$, and the minute hand moves $x$ marks, so the hour hand moves $\\dfrac{1}{12}$ of $x$ marks."
                },
                {
                  "step": "The hour hand points at mark $55 + \\dfrac{x}{12}$.",
                  "reason": "Writing a sentence as an equation: at 11 o'clock the hour hand points at the 11, which is mark $5 \\cdot 11 = 55$, and it has moved $\\dfrac{x}{12}$ marks on since."
                },
                {
                  "step": "$\\left(55 + \\dfrac{x}{12}\\right) - x = 20$",
                  "reason": "Writing a sentence as an equation: the mark of the hour hand less the mark of the minute hand is $20$."
                },
                {
                  "step": "$55 + \\dfrac{x}{12} - x = 20$",
                  "reason": "Dropping a bracket after nothing or a plus sign: the bracket opens the left side, so it goes and no sign in it changes."
                },
                {
                  "step": "$660 + x - 12x = 240$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$660 - 11x = 240$",
                  "reason": "Collecting like terms: $x$ and $-12x$ add to $-11x$."
                },
                {
                  "step": "$-11x = -420$",
                  "reason": "Adding the same number to both sides: adding $-660$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{420}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{420}{11}$ minutes after 11 o'clock the hour hand points at mark $55 + \\dfrac{35}{11} = \\dfrac{640}{11}$, and $\\dfrac{640}{11} - \\dfrac{420}{11} = 20$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands, not into the equation."
                },
                {
                  "step": "The minute hand is first 20 marks behind $\\dfrac{420}{11}$ minutes after 11 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour, which is $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of minutes after 2 o'clock it is now, if it is now between 2 and 3 o'clock and 5 minutes from now the minute hand will point the opposite way to where the hour hand pointed 4 minutes ago. The face has $60$ minute marks.",
            "lines": [
              {
                "step": "Find the number of minutes after 2 o'clock it is now, if it is now between 2 and 3 o'clock and 5 minutes from now the minute hand will point the opposite way to where the hour hand pointed 4 minutes ago. The face has $60$ minute marks.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of minutes after 2 o'clock now.",
                "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so the times and marks are counted from the hour."
              },
              {
                "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
              },
              {
                "step": "In 5 minutes the minute hand points at mark $x + 5$.",
                "reason": "Writing a sentence as an equation: the minute hand moves one mark a minute, so $5$ minutes on from mark $x$ it is at mark $x + 5$."
              },
              {
                "step": "The time 4 minutes ago was $x - 4$ minutes after 2 o'clock, and the hour hand then pointed at mark $10 + \\dfrac{x - 4}{12}$.",
                "reason": "Ratio: the hour hand moves $\\dfrac{1}{12}$ of the marks the minute hand moves, so in $x - 4$ minutes after the hour it moves $\\dfrac{x - 4}{12}$ marks on from the 2, which is mark $5 \\cdot 2 = 10$."
              },
              {
                "step": "$x + 5 - \\left(10 + \\dfrac{x - 4}{12}\\right) = 30$",
                "reason": "Writing a sentence as an equation: the opposite way is half the face, $30$ marks, on from where the hour hand was, with the minute hand ahead."
              },
              {
                "step": "$x + 5 - 10 - \\dfrac{x - 4}{12} = 30$",
                "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
              },
              {
                "step": "$12x + 60 - 120 - (x - 4) = 360$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal, multiplies each term by $12$ and clears the fraction, whose top keeps its bracket."
              },
              {
                "step": "$12x + 60 - 120 - x + 4 = 360$",
                "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
              },
              {
                "step": "$11x - 56 = 360$",
                "reason": "Collecting like terms: $12x$ and $-x$ add to $11x$, and the numbers are added."
              },
              {
                "step": "$11x = 416$",
                "reason": "Adding the same number to both sides: adding $56$ to both sides keeps them equal and leaves the term in $x$ alone."
              },
              {
                "step": "$x = \\dfrac{416}{11}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "At $\\dfrac{416}{11} + 5 = \\dfrac{471}{11}$ minutes after 2 o'clock the minute hand points at mark $\\dfrac{471}{11}$; at $\\dfrac{416}{11} - 4 = \\dfrac{372}{11}$ minutes after 2 o'clock the hour hand pointed at mark $10 + \\dfrac{31}{11} = \\dfrac{141}{11}$, and $\\dfrac{471}{11} - \\dfrac{141}{11} = 30$.",
                "reason": "Checking against the words: the value goes back into the positions of the two hands at the two times, not into the equation."
              },
              {
                "step": "It is now $\\dfrac{416}{11}$ minutes after 2 o'clock.",
                "reason": "Answering the question asked: the question asks for the number of minutes after the hour now, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of minutes after 4 o'clock it is now, if it is now between 4 and 5 o'clock and 3 minutes from now the minute hand will point the same way as the hour hand pointed 5 minutes ago. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "199/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 4 o'clock it is now, if it is now between 4 and 5 o'clock and 3 minutes from now the minute hand will point the same way as the hour hand pointed 5 minutes ago. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 4 o'clock now.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so the times and marks are counted from the hour."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In 3 minutes the minute hand points at mark $x + 3$.",
                  "reason": "Writing a sentence as an equation: the minute hand moves one mark a minute, so $3$ minutes on from mark $x$ it is at mark $x + 3$."
                },
                {
                  "step": "The time 5 minutes ago was $x - 5$ minutes after 4 o'clock, and the hour hand then pointed at mark $20 + \\dfrac{x - 5}{12}$.",
                  "reason": "Ratio: the hour hand moves $\\dfrac{1}{12}$ of the marks the minute hand moves, so in $x - 5$ minutes after the hour it moves $\\dfrac{x - 5}{12}$ marks on from the 4, which is mark $5 \\cdot 4 = 20$."
                },
                {
                  "step": "$x + 3 - \\left(20 + \\dfrac{x - 5}{12}\\right) = 0$",
                  "reason": "Writing a sentence as an equation: pointing the same way puts the two marks $0$ marks apart."
                },
                {
                  "step": "$x + 3 - 20 - \\dfrac{x - 5}{12} = 0$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$12x + 36 - 240 - (x - 5) = 0$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal, multiplies each term by $12$ and clears the fraction, whose top keeps its bracket."
                },
                {
                  "step": "$12x + 36 - 240 - x + 5 = 0$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$11x - 199 = 0$",
                  "reason": "Collecting like terms: $12x$ and $-x$ add to $11x$, and the numbers are added."
                },
                {
                  "step": "$11x = 199$",
                  "reason": "Adding the same number to both sides: adding $199$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{199}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{199}{11} + 3 = \\dfrac{232}{11}$ minutes after 4 o'clock the minute hand points at mark $\\dfrac{232}{11}$; at $\\dfrac{199}{11} - 5 = \\dfrac{144}{11}$ minutes after 4 o'clock the hour hand pointed at mark $20 + \\dfrac{12}{11} = \\dfrac{232}{11}$, and $\\dfrac{232}{11} - \\dfrac{232}{11} = 0$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands at the two times, not into the equation."
                },
                {
                  "step": "It is now $\\dfrac{199}{11}$ minutes after 4 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour now, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after 3 o'clock it is now, if it is now between 3 and 4 o'clock and 2 minutes from now the minute hand will point the opposite way to where the hour hand pointed 6 minutes ago. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "510/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 3 o'clock it is now, if it is now between 3 and 4 o'clock and 2 minutes from now the minute hand will point the opposite way to where the hour hand pointed 6 minutes ago. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 3 o'clock now.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so the times and marks are counted from the hour."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In 2 minutes the minute hand points at mark $x + 2$.",
                  "reason": "Writing a sentence as an equation: the minute hand moves one mark a minute, so $2$ minutes on from mark $x$ it is at mark $x + 2$."
                },
                {
                  "step": "The time 6 minutes ago was $x - 6$ minutes after 3 o'clock, and the hour hand then pointed at mark $15 + \\dfrac{x - 6}{12}$.",
                  "reason": "Ratio: the hour hand moves $\\dfrac{1}{12}$ of the marks the minute hand moves, so in $x - 6$ minutes after the hour it moves $\\dfrac{x - 6}{12}$ marks on from the 3, which is mark $5 \\cdot 3 = 15$."
                },
                {
                  "step": "$x + 2 - \\left(15 + \\dfrac{x - 6}{12}\\right) = 30$",
                  "reason": "Writing a sentence as an equation: the opposite way is half the face, $30$ marks, on from where the hour hand was, with the minute hand ahead."
                },
                {
                  "step": "$x + 2 - 15 - \\dfrac{x - 6}{12} = 30$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$12x + 24 - 180 - (x - 6) = 360$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal, multiplies each term by $12$ and clears the fraction, whose top keeps its bracket."
                },
                {
                  "step": "$12x + 24 - 180 - x + 6 = 360$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$11x - 150 = 360$",
                  "reason": "Collecting like terms: $12x$ and $-x$ add to $11x$, and the numbers are added."
                },
                {
                  "step": "$11x = 510$",
                  "reason": "Adding the same number to both sides: adding $150$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{510}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{510}{11} + 2 = \\dfrac{532}{11}$ minutes after 3 o'clock the minute hand points at mark $\\dfrac{532}{11}$; at $\\dfrac{510}{11} - 6 = \\dfrac{444}{11}$ minutes after 3 o'clock the hour hand pointed at mark $15 + \\dfrac{37}{11} = \\dfrac{202}{11}$, and $\\dfrac{532}{11} - \\dfrac{202}{11} = 30$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands at the two times, not into the equation."
                },
                {
                  "step": "It is now $\\dfrac{510}{11}$ minutes after 3 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour now, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after 5 o'clock it is now, if it is now between 5 and 6 o'clock and 4 minutes from now the minute hand will point the same way as the hour hand pointed 8 minutes ago. The face has $60$ minute marks.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "244/11",
              "lines": [
                {
                  "step": "Find the number of minutes after 5 o'clock it is now, if it is now between 5 and 6 o'clock and 4 minutes from now the minute hand will point the same way as the hour hand pointed 8 minutes ago. The face has $60$ minute marks.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of minutes after 5 o'clock now.",
                  "reason": "Defining the unknown: the minute hand moves one mark a minute and points at the 12 on the hour, so the times and marks are counted from the hour."
                },
                {
                  "step": "$\\dfrac{\\text{marks the hour hand moves}}{\\text{marks the minute hand moves}} = \\dfrac{5}{60}$",
                  "reason": "The word equation written before the letters: in one hour the minute hand goes round all $60$ marks and the hour hand moves from one number to the next, $5$ marks."
                },
                {
                  "step": "In 4 minutes the minute hand points at mark $x + 4$.",
                  "reason": "Writing a sentence as an equation: the minute hand moves one mark a minute, so $4$ minutes on from mark $x$ it is at mark $x + 4$."
                },
                {
                  "step": "The time 8 minutes ago was $x - 8$ minutes after 5 o'clock, and the hour hand then pointed at mark $25 + \\dfrac{x - 8}{12}$.",
                  "reason": "Ratio: the hour hand moves $\\dfrac{1}{12}$ of the marks the minute hand moves, so in $x - 8$ minutes after the hour it moves $\\dfrac{x - 8}{12}$ marks on from the 5, which is mark $5 \\cdot 5 = 25$."
                },
                {
                  "step": "$x + 4 - \\left(25 + \\dfrac{x - 8}{12}\\right) = 0$",
                  "reason": "Writing a sentence as an equation: pointing the same way puts the two marks $0$ marks apart."
                },
                {
                  "step": "$x + 4 - 25 - \\dfrac{x - 8}{12} = 0$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$12x + 48 - 300 - (x - 8) = 0$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $12$ keeps them equal, multiplies each term by $12$ and clears the fraction, whose top keeps its bracket."
                },
                {
                  "step": "$12x + 48 - 300 - x + 8 = 0$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$11x - 244 = 0$",
                  "reason": "Collecting like terms: $12x$ and $-x$ add to $11x$, and the numbers are added."
                },
                {
                  "step": "$11x = 244$",
                  "reason": "Adding the same number to both sides: adding $244$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{244}{11}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "At $\\dfrac{244}{11} + 4 = \\dfrac{288}{11}$ minutes after 5 o'clock the minute hand points at mark $\\dfrac{288}{11}$; at $\\dfrac{244}{11} - 8 = \\dfrac{156}{11}$ minutes after 5 o'clock the hour hand pointed at mark $25 + \\dfrac{13}{11} = \\dfrac{288}{11}$, and $\\dfrac{288}{11} - \\dfrac{288}{11} = 0$.",
                  "reason": "Checking against the words: the value goes back into the positions of the two hands at the two times, not into the equation."
                },
                {
                  "step": "It is now $\\dfrac{244}{11}$ minutes after 5 o'clock.",
                  "reason": "Answering the question asked: the question asks for the number of minutes after the hour now, which is $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t118-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find the number of tiles in a crate at the start, if the green tiles make up $\\dfrac{4}{5}$ of the tiles and the rest are grey tiles, and after 5 green tiles are taken out and 4 grey tiles are put in, the ratio of green tiles to grey tiles is $5 : 2$.",
            "given": [
              "Let $x$ be the number of green tiles and $y$ the number of grey tiles at the start.",
              "$\\dfrac{x}{y} = \\dfrac{4}{5}$",
              "$5x = 4y$",
              "$\\dfrac{x - 5}{y + 4} = \\dfrac{5}{2}$",
              "$2(x - 5) = 5(y + 4)$",
              "Then $x = -\\dfrac{120}{17}$ and $y = -\\dfrac{150}{17}$.",
              "So there were $-\\dfrac{270}{17}$ tiles at the start."
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find the number of tiles in a crate at the start, if the green tiles make up $\\dfrac{4}{5}$ of the tiles and the rest are grey tiles, and after 5 green tiles are taken out and 4 grey tiles are put in, the ratio of green tiles to grey tiles is $5 : 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 writes $\\dfrac{x}{y}$, the green tiles over the grey tiles, where the sentence compares the green tiles with all the tiles, a part with the whole.",
                "reason": "A letter is read as an object: $y$ counts the grey tiles only, so it cannot stand for all the tiles, which number $x + y$."
              },
              {
                "step": "Line 2 written right is $\\dfrac{x}{x + y} = \\dfrac{4}{5}$.",
                "reason": "Part-to-part and part-to-whole ratio: a part over the whole has the count of the part on top and the sum of the parts below."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of red beads in a jar at the start, if the red beads make up $\\dfrac{2}{3}$ of the beads and the rest are black beads, and after 10 red beads are taken out and 5 black beads are put in, the ratio of red beads to black beads is $3 : 4$.",
              "given": [
                "Let $x$ be the number of red beads and $y$ the number of black beads at the start.",
                "$\\dfrac{x}{x + y} = \\dfrac{2}{3}$",
                "$3x = 2(x + y)$",
                "$\\dfrac{x - 10}{x + y - 5} = \\dfrac{3}{4}$",
                "$4(x - 10) = 3(x + y - 5)$",
                "Then $x = -50$ and $y = -25$.",
                "So there were $-50$ red beads at the start."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (x-10)/(y+5) = 3/4",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of red beads in a jar at the start, if the red beads make up $\\dfrac{2}{3}$ of the beads and the rest are black beads, and after 10 red beads are taken out and 5 black beads are put in, the ratio of red beads to black beads is $3 : 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $\\dfrac{x - 10}{x + y - 5}$, the red beads over all the beads after the change, where the sentence compares the red beads with the black beads, a part with a part.",
                  "reason": "A letter is read as an object: the bottom $x + y - 5$ counts all the beads, where the ratio puts the black beads alone, $y + 5$."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{x - 10}{y + 5} = \\dfrac{3}{4}$.",
                  "reason": "Part-to-part and part-to-whole ratio: a part over a part has the count of one part on top and the count of the other below."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of vans in a car park at the start, if the cars make up $\\dfrac{3}{4}$ of the vehicles and the rest are vans, and after 5 cars drive out and 9 vans drive in, the ratio of cars to vans is $5 : 3$.",
              "given": [
                "Let $x$ be the number of cars and $y$ the number of vans at the start.",
                "$\\dfrac{x - 5}{y + 9} = \\dfrac{5}{3}$",
                "$3(x - 5) = 5(y + 9)$",
                "$\\dfrac{x}{y} = \\dfrac{3}{4}$",
                "$4x = 3y$",
                "Then $x = -\\dfrac{180}{11}$ and $y = -\\dfrac{240}{11}$.",
                "So there were $-\\dfrac{240}{11}$ vans at the start."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x/(x+y) = 3/4",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of vans in a car park at the start, if the cars make up $\\dfrac{3}{4}$ of the vehicles and the rest are vans, and after 5 cars drive out and 9 vans drive in, the ratio of cars to vans is $5 : 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $\\dfrac{x}{y}$, the cars over the vans, where the sentence compares the cars with all the vehicles, a part with the whole.",
                  "reason": "A letter is read as an object: $y$ counts the vans only, so it cannot stand for all the vehicles, which number $x + y$."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{x}{x + y} = \\dfrac{3}{4}$.",
                  "reason": "Part-to-part and part-to-whole ratio: a part over the whole has the count of the part on top and the sum of the parts below."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of singers in a choir at the start, if the girls make up $\\dfrac{5}{6}$ of the singers and the rest are boys, and after 9 girls leave and 2 boys join, the ratio of girls to boys is $6 : 5$.",
              "given": [
                "Let $x$ be the number of girls and $y$ the number of boys at the start.",
                "$\\dfrac{x - 9}{x + y - 7} = \\dfrac{6}{5}$",
                "$5(x - 9) = 6(x + y - 7)$",
                "$\\dfrac{x}{x + y} = \\dfrac{5}{6}$",
                "$6x = 5(x + y)$",
                "Then $x = -\\dfrac{15}{11}$ and $y = -\\dfrac{3}{11}$.",
                "So there were $-\\dfrac{18}{11}$ singers at the start."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (x-9)/(y+2) = 6/5",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of singers in a choir at the start, if the girls make up $\\dfrac{5}{6}$ of the singers and the rest are boys, and after 9 girls leave and 2 boys join, the ratio of girls to boys is $6 : 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $\\dfrac{x - 9}{x + y - 7}$, the girls over all the singers after the change, where the sentence compares the girls with the boys, a part with a part.",
                  "reason": "A letter is read as an object: the bottom $x + y - 7$ counts all the singers, where the ratio puts the boys alone, $y + 2$."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{x - 9}{y + 2} = \\dfrac{6}{5}$.",
                  "reason": "Part-to-part and part-to-whole ratio: a part over a part has the count of one part on top and the count of the other below."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t118-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of boys and $y$ the number of girls in a choir: Four ninths of the singers in the choir are boys.",
            "lines": [
              {
                "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of boys and $y$ the number of girls in a choir: Four ninths of the singers in the choir are boys.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{\\text{boys}}{\\text{all the singers}} = \\dfrac{4}{9}$",
                "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
              },
              {
                "step": "$\\dfrac{x}{x + y} = \\dfrac{4}{9}$",
                "reason": "Writing a sentence as an equation: each quantity in words is replaced by its letters, as the prompt defines them, in the same place."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of cats and $y$ the number of dogs at a shelter: For every 5 cats at the shelter there are 3 dogs.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x/y = 5/3",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of cats and $y$ the number of dogs at a shelter: For every 5 cats at the shelter there are 3 dogs.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\text{cats}}{\\text{dogs}} = \\dfrac{5}{3}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{5}{3}$",
                  "reason": "Writing a sentence as an equation: each quantity in words is replaced by its letters, as the prompt defines them, in the same place."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of red cars and $y$ the number of grey cars in a car park: The ratio of red cars to grey cars is $2 : 7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x/y = 2/7",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of red cars and $y$ the number of grey cars in a car park: The ratio of red cars to grey cars is $2 : 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\text{red cars}}{\\text{grey cars}} = \\dfrac{2}{7}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{2}{7}$",
                  "reason": "Writing a sentence as an equation: each quantity in words is replaced by its letters, as the prompt defines them, in the same place."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of atlases and $y$ the number of novels on a shelf that holds no other books: Three out of every eight books on the shelf are atlases.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x/(x+y) = 3/8",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of atlases and $y$ the number of novels on a shelf that holds no other books: Three out of every eight books on the shelf are atlases.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\text{atlases}}{\\text{all the books}} = \\dfrac{3}{8}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{x}{x + y} = \\dfrac{3}{8}$",
                  "reason": "Writing a sentence as an equation: each quantity in words is replaced by its letters, as the prompt defines them, in the same place."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t118-k6",
      "forms": [
        {
          "example": {
            "problem": "Find the ratio of men to women in the two towns together, as a fraction, if the ratio of men to women is $2 : 7$ in the first town and $7 : 5$ in the second, the second town has 4 times as many people as the first, and the people are all men or women.",
            "lines": [
              {
                "step": "Find the ratio of men to women in the two towns together, as a fraction, if the ratio of men to women is $2 : 7$ in the first town and $7 : 5$ in the second, the second town has 4 times as many people as the first, and the people are all men or women.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of groups of $9$ people in the first town, each with $2$ men and $7$ women.",
                "reason": "Part-to-part and part-to-whole ratio: the ratio $2 : 7$ puts $2$ men and $7$ women in every $9$ people of the first town, so its people come in groups of $9$."
              },
              {
                "step": "The first town has $2x$ men, $7x$ women and $9x$ people in all.",
                "reason": "Writing a sentence as an equation: each of the $x$ groups holds $2$ men and $7$ women."
              },
              {
                "step": "The second town has $4(9x) = 36x$ people.",
                "reason": "Writing a sentence as an equation: the second town has $4$ times as many people as the first."
              },
              {
                "step": "The second town has $\\dfrac{7}{12}(36x) = 21x$ men.",
                "reason": "Part-to-part and part-to-whole ratio: the ratio $7 : 5$ makes the men $\\dfrac{7}{12}$ of the people of the second town, a part of the whole."
              },
              {
                "step": "The second town has $36x - 21x = 15x$ women.",
                "reason": "Collecting like terms: the women of the second town are its people less its men."
              },
              {
                "step": "$\\dfrac{\\text{men in both towns}}{\\text{women in both towns}} = \\dfrac{2x + 21x}{7x + 15x}$",
                "reason": "Writing a sentence as an equation: the men of the two towns together are the men of the first plus those of the second, and the same holds for the women."
              },
              {
                "step": "$\\dfrac{\\text{men in both towns}}{\\text{women in both towns}} = \\dfrac{23x}{22x}$",
                "reason": "Collecting like terms: the terms in $x$ on the top are added, and so are those below."
              },
              {
                "step": "$\\dfrac{\\text{men in both towns}}{\\text{women in both towns}} = \\dfrac{23}{22}$",
                "reason": "Cancelling a common factor: $x$ stands on the top and below and is not $0$, and $\\dfrac{23}{22}$ is in lowest terms."
              },
              {
                "step": "The ratio of men to women in the two towns together is $\\dfrac{23}{22}$.",
                "reason": "Answering the question asked: the question asks for the ratio of the two groups together, as a fraction."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the ratio of girls to boys in the two clubs together, as a fraction, if the ratio of girls to boys is $2 : 9$ in the first club and $3 : 8$ in the second, the second club has 2 times as many members as the first, and the members are all girls or boys.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8/25",
              "lines": [
                {
                  "step": "Find the ratio of girls to boys in the two clubs together, as a fraction, if the ratio of girls to boys is $2 : 9$ in the first club and $3 : 8$ in the second, the second club has 2 times as many members as the first, and the members are all girls or boys.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of groups of $11$ members in the first club, each with $2$ girls and $9$ boys.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $2 : 9$ puts $2$ girls and $9$ boys in every $11$ members of the first club, so its members come in groups of $11$."
                },
                {
                  "step": "The first club has $2x$ girls, $9x$ boys and $11x$ members in all.",
                  "reason": "Writing a sentence as an equation: each of the $x$ groups holds $2$ girls and $9$ boys."
                },
                {
                  "step": "The second club has $2(11x) = 22x$ members.",
                  "reason": "Writing a sentence as an equation: the second club has $2$ times as many members as the first."
                },
                {
                  "step": "The second club has $\\dfrac{3}{11}(22x) = 6x$ girls.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $3 : 8$ makes the girls $\\dfrac{3}{11}$ of the members of the second club, a part of the whole."
                },
                {
                  "step": "The second club has $22x - 6x = 16x$ boys.",
                  "reason": "Collecting like terms: the boys of the second club are its members less its girls."
                },
                {
                  "step": "$\\dfrac{\\text{girls in both clubs}}{\\text{boys in both clubs}} = \\dfrac{2x + 6x}{9x + 16x}$",
                  "reason": "Writing a sentence as an equation: the girls of the two clubs together are the girls of the first plus those of the second, and the same holds for the boys."
                },
                {
                  "step": "$\\dfrac{\\text{girls in both clubs}}{\\text{boys in both clubs}} = \\dfrac{8x}{25x}$",
                  "reason": "Collecting like terms: the terms in $x$ on the top are added, and so are those below."
                },
                {
                  "step": "$\\dfrac{\\text{girls in both clubs}}{\\text{boys in both clubs}} = \\dfrac{8}{25}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and below and is not $0$, and $\\dfrac{8}{25}$ is in lowest terms."
                },
                {
                  "step": "The ratio of girls to boys in the two clubs together is $\\dfrac{8}{25}$.",
                  "reason": "Answering the question asked: the question asks for the ratio of the two groups together, as a fraction."
                }
              ]
            },
            {
              "prompt": "Find the ratio of apple trees to pear trees in the two orchards together, as a fraction, if the ratio of apple trees to pear trees is $5 : 7$ in the first orchard and $3 : 5$ in the second, the second orchard has 4 times as many trees as the first, and the trees are all apple trees or pear trees.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "23/37",
              "lines": [
                {
                  "step": "Find the ratio of apple trees to pear trees in the two orchards together, as a fraction, if the ratio of apple trees to pear trees is $5 : 7$ in the first orchard and $3 : 5$ in the second, the second orchard has 4 times as many trees as the first, and the trees are all apple trees or pear trees.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of groups of $12$ trees in the first orchard, each with $5$ apple trees and $7$ pear trees.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $5 : 7$ puts $5$ apple trees and $7$ pear trees in every $12$ trees of the first orchard, so its trees come in groups of $12$."
                },
                {
                  "step": "The first orchard has $5x$ apple trees, $7x$ pear trees and $12x$ trees in all.",
                  "reason": "Writing a sentence as an equation: each of the $x$ groups holds $5$ apple trees and $7$ pear trees."
                },
                {
                  "step": "The second orchard has $4(12x) = 48x$ trees.",
                  "reason": "Writing a sentence as an equation: the second orchard has $4$ times as many trees as the first."
                },
                {
                  "step": "The second orchard has $\\dfrac{3}{8}(48x) = 18x$ apple trees.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $3 : 5$ makes the apple trees $\\dfrac{3}{8}$ of the trees of the second orchard, a part of the whole."
                },
                {
                  "step": "The second orchard has $48x - 18x = 30x$ pear trees.",
                  "reason": "Collecting like terms: the pear trees of the second orchard are its trees less its apple trees."
                },
                {
                  "step": "$\\dfrac{\\text{apple trees in both orchards}}{\\text{pear trees in both orchards}} = \\dfrac{5x + 18x}{7x + 30x}$",
                  "reason": "Writing a sentence as an equation: the apple trees of the two orchards together are the apple trees of the first plus those of the second, and the same holds for the pear trees."
                },
                {
                  "step": "$\\dfrac{\\text{apple trees in both orchards}}{\\text{pear trees in both orchards}} = \\dfrac{23x}{37x}$",
                  "reason": "Collecting like terms: the terms in $x$ on the top are added, and so are those below."
                },
                {
                  "step": "$\\dfrac{\\text{apple trees in both orchards}}{\\text{pear trees in both orchards}} = \\dfrac{23}{37}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and below and is not $0$, and $\\dfrac{23}{37}$ is in lowest terms."
                },
                {
                  "step": "The ratio of apple trees to pear trees in the two orchards together is $\\dfrac{23}{37}$.",
                  "reason": "Answering the question asked: the question asks for the ratio of the two groups together, as a fraction."
                }
              ]
            },
            {
              "prompt": "Find the ratio of red tiles to white tiles on the two floors together, as a fraction, if the ratio of red tiles to white tiles is $7 : 8$ on the first floor and $2 : 3$ on the second, the second floor has 4 times as many tiles as the first, and the tiles are all red tiles or white tiles.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "31/44",
              "lines": [
                {
                  "step": "Find the ratio of red tiles to white tiles on the two floors together, as a fraction, if the ratio of red tiles to white tiles is $7 : 8$ on the first floor and $2 : 3$ on the second, the second floor has 4 times as many tiles as the first, and the tiles are all red tiles or white tiles.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of groups of $15$ tiles on the first floor, each with $7$ red tiles and $8$ white tiles.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $7 : 8$ puts $7$ red tiles and $8$ white tiles in every $15$ tiles of the first floor, so its tiles come in groups of $15$."
                },
                {
                  "step": "The first floor has $7x$ red tiles, $8x$ white tiles and $15x$ tiles in all.",
                  "reason": "Writing a sentence as an equation: each of the $x$ groups holds $7$ red tiles and $8$ white tiles."
                },
                {
                  "step": "The second floor has $4(15x) = 60x$ tiles.",
                  "reason": "Writing a sentence as an equation: the second floor has $4$ times as many tiles as the first."
                },
                {
                  "step": "The second floor has $\\dfrac{2}{5}(60x) = 24x$ red tiles.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $2 : 3$ makes the red tiles $\\dfrac{2}{5}$ of the tiles of the second floor, a part of the whole."
                },
                {
                  "step": "The second floor has $60x - 24x = 36x$ white tiles.",
                  "reason": "Collecting like terms: the white tiles of the second floor are its tiles less its red tiles."
                },
                {
                  "step": "$\\dfrac{\\text{red tiles on both floors}}{\\text{white tiles on both floors}} = \\dfrac{7x + 24x}{8x + 36x}$",
                  "reason": "Writing a sentence as an equation: the red tiles of the two floors together are the red tiles of the first plus those of the second, and the same holds for the white tiles."
                },
                {
                  "step": "$\\dfrac{\\text{red tiles on both floors}}{\\text{white tiles on both floors}} = \\dfrac{31x}{44x}$",
                  "reason": "Collecting like terms: the terms in $x$ on the top are added, and so are those below."
                },
                {
                  "step": "$\\dfrac{\\text{red tiles on both floors}}{\\text{white tiles on both floors}} = \\dfrac{31}{44}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and below and is not $0$, and $\\dfrac{31}{44}$ is in lowest terms."
                },
                {
                  "step": "The ratio of red tiles to white tiles on the two floors together is $\\dfrac{31}{44}$.",
                  "reason": "Answering the question asked: the question asks for the ratio of the two groups together, as a fraction."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the ratio of men to women in the second town, as a fraction, if the ratio of men to women is $2 : 5$ in the first town and $3 : 4$ in the two towns together, the second town has 3 times as many people as the first, and the people are all men or women.",
            "lines": [
              {
                "step": "Find the ratio of men to women in the second town, as a fraction, if the ratio of men to women is $2 : 5$ in the first town and $3 : 4$ in the two towns together, the second town has 3 times as many people as the first, and the people are all men or women.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of groups of $7$ people in the first town, each with $2$ men and $5$ women.",
                "reason": "Part-to-part and part-to-whole ratio: the ratio $2 : 5$ puts $2$ men and $5$ women in every $7$ people of the first town, so its people come in groups of $7$."
              },
              {
                "step": "The first town has $2x$ men, $5x$ women and $7x$ people in all.",
                "reason": "Writing a sentence as an equation: each of the $x$ groups holds $2$ men and $5$ women."
              },
              {
                "step": "The second town has $3(7x) = 21x$ people.",
                "reason": "Writing a sentence as an equation: the second town has $3$ times as many people as the first."
              },
              {
                "step": "Let $y$ be the number of men in the second town, so it has $21x - y$ women.",
                "reason": "One letter for each unknown: the men of the second town are unknown, and its women are the rest of its $21x$ people."
              },
              {
                "step": "$\\dfrac{\\text{men in both towns}}{\\text{women in both towns}} = \\dfrac{3}{4}$",
                "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
              },
              {
                "step": "$\\dfrac{2x + y}{5x + 21x - y} = \\dfrac{3}{4}$",
                "reason": "Writing a sentence as an equation: the men of the two towns together are $2x + y$, and the women are $5x + 21x - y$."
              },
              {
                "step": "$4(2x + y) = 3(5x + 21x - y)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$8x + 4y = 15x + 63x - 3y$",
                "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
              },
              {
                "step": "$4y + 3y = 15x + 63x - 8x$",
                "reason": "Adding the same number to both sides: adding $3y - 8x$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
              },
              {
                "step": "$7y = 70x$",
                "reason": "Collecting like terms: the terms in $y$ are added on the left, and the terms in $x$ on the right."
              },
              {
                "step": "$y = 10x$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "The second town has $21x - 10x$ women.",
                "reason": "Substitution: $10x$ goes in place of $y$ in $21x - y$, which leaves one letter."
              },
              {
                "step": "$21x - 10x = 11x$",
                "reason": "Collecting like terms: the coefficients of $x$ are added."
              },
              {
                "step": "$\\dfrac{\\text{men in the second town}}{\\text{women in the second town}} = \\dfrac{10x}{11x}$",
                "reason": "Writing a sentence as an equation: the ratio asked for is the quotient of the two counts of the second town."
              },
              {
                "step": "$\\dfrac{\\text{men in the second town}}{\\text{women in the second town}} = \\dfrac{10}{11}$",
                "reason": "Cancelling a common factor: $x$ stands on the top and below and is not $0$, and $\\dfrac{10}{11}$ is in lowest terms."
              },
              {
                "step": "The ratio of men to women in the second town is $\\dfrac{10}{11}$.",
                "reason": "Answering the question asked: the question asks for the ratio in the second town, as a fraction."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the ratio of girls to boys in the second club, as a fraction, if the ratio of girls to boys is $3 : 8$ in the first club and $13 : 9$ in the two clubs together, the second club has 3 times as many members as the first, and the members are all girls or boys.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "23/10",
              "lines": [
                {
                  "step": "Find the ratio of girls to boys in the second club, as a fraction, if the ratio of girls to boys is $3 : 8$ in the first club and $13 : 9$ in the two clubs together, the second club has 3 times as many members as the first, and the members are all girls or boys.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of groups of $11$ members in the first club, each with $3$ girls and $8$ boys.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $3 : 8$ puts $3$ girls and $8$ boys in every $11$ members of the first club, so its members come in groups of $11$."
                },
                {
                  "step": "The first club has $3x$ girls, $8x$ boys and $11x$ members in all.",
                  "reason": "Writing a sentence as an equation: each of the $x$ groups holds $3$ girls and $8$ boys."
                },
                {
                  "step": "The second club has $3(11x) = 33x$ members.",
                  "reason": "Writing a sentence as an equation: the second club has $3$ times as many members as the first."
                },
                {
                  "step": "Let $y$ be the number of girls in the second club, so it has $33x - y$ boys.",
                  "reason": "One letter for each unknown: the girls of the second club are unknown, and its boys are the rest of its $33x$ members."
                },
                {
                  "step": "$\\dfrac{\\text{girls in both clubs}}{\\text{boys in both clubs}} = \\dfrac{13}{9}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{3x + y}{8x + 33x - y} = \\dfrac{13}{9}$",
                  "reason": "Writing a sentence as an equation: the girls of the two clubs together are $3x + y$, and the boys are $8x + 33x - y$."
                },
                {
                  "step": "$9(3x + y) = 13(8x + 33x - y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$27x + 9y = 104x + 429x - 13y$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$9y + 13y = 104x + 429x - 27x$",
                  "reason": "Adding the same number to both sides: adding $13y - 27x$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$22y = 506x$",
                  "reason": "Collecting like terms: the terms in $y$ are added on the left, and the terms in $x$ on the right."
                },
                {
                  "step": "$y = 23x$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $22$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "The second club has $33x - 23x$ boys.",
                  "reason": "Substitution: $23x$ goes in place of $y$ in $33x - y$, which leaves one letter."
                },
                {
                  "step": "$33x - 23x = 10x$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$\\dfrac{\\text{girls in the second club}}{\\text{boys in the second club}} = \\dfrac{23x}{10x}$",
                  "reason": "Writing a sentence as an equation: the ratio asked for is the quotient of the two counts of the second club."
                },
                {
                  "step": "$\\dfrac{\\text{girls in the second club}}{\\text{boys in the second club}} = \\dfrac{23}{10}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and below and is not $0$, and $\\dfrac{23}{10}$ is in lowest terms."
                },
                {
                  "step": "The ratio of girls to boys in the second club is $\\dfrac{23}{10}$.",
                  "reason": "Answering the question asked: the question asks for the ratio in the second club, as a fraction."
                }
              ]
            },
            {
              "prompt": "Find the ratio of apple trees to pear trees in the second orchard, as a fraction, if the ratio of apple trees to pear trees is $8 : 7$ in the first orchard and $5 : 4$ in the two orchards together, the second orchard has 2 times as many trees as the first, and the trees are all apple trees or pear trees.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "17/13",
              "lines": [
                {
                  "step": "Find the ratio of apple trees to pear trees in the second orchard, as a fraction, if the ratio of apple trees to pear trees is $8 : 7$ in the first orchard and $5 : 4$ in the two orchards together, the second orchard has 2 times as many trees as the first, and the trees are all apple trees or pear trees.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of groups of $15$ trees in the first orchard, each with $8$ apple trees and $7$ pear trees.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $8 : 7$ puts $8$ apple trees and $7$ pear trees in every $15$ trees of the first orchard, so its trees come in groups of $15$."
                },
                {
                  "step": "The first orchard has $8x$ apple trees, $7x$ pear trees and $15x$ trees in all.",
                  "reason": "Writing a sentence as an equation: each of the $x$ groups holds $8$ apple trees and $7$ pear trees."
                },
                {
                  "step": "The second orchard has $2(15x) = 30x$ trees.",
                  "reason": "Writing a sentence as an equation: the second orchard has $2$ times as many trees as the first."
                },
                {
                  "step": "Let $y$ be the number of apple trees in the second orchard, so it has $30x - y$ pear trees.",
                  "reason": "One letter for each unknown: the apple trees of the second orchard are unknown, and its pear trees are the rest of its $30x$ trees."
                },
                {
                  "step": "$\\dfrac{\\text{apple trees in both orchards}}{\\text{pear trees in both orchards}} = \\dfrac{5}{4}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{8x + y}{7x + 30x - y} = \\dfrac{5}{4}$",
                  "reason": "Writing a sentence as an equation: the apple trees of the two orchards together are $8x + y$, and the pear trees are $7x + 30x - y$."
                },
                {
                  "step": "$4(8x + y) = 5(7x + 30x - y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$32x + 4y = 35x + 150x - 5y$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$4y + 5y = 35x + 150x - 32x$",
                  "reason": "Adding the same number to both sides: adding $5y - 32x$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$9y = 153x$",
                  "reason": "Collecting like terms: the terms in $y$ are added on the left, and the terms in $x$ on the right."
                },
                {
                  "step": "$y = 17x$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $9$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "The second orchard has $30x - 17x$ pear trees.",
                  "reason": "Substitution: $17x$ goes in place of $y$ in $30x - y$, which leaves one letter."
                },
                {
                  "step": "$30x - 17x = 13x$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$\\dfrac{\\text{apple trees in the second orchard}}{\\text{pear trees in the second orchard}} = \\dfrac{17x}{13x}$",
                  "reason": "Writing a sentence as an equation: the ratio asked for is the quotient of the two counts of the second orchard."
                },
                {
                  "step": "$\\dfrac{\\text{apple trees in the second orchard}}{\\text{pear trees in the second orchard}} = \\dfrac{17}{13}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and below and is not $0$, and $\\dfrac{17}{13}$ is in lowest terms."
                },
                {
                  "step": "The ratio of apple trees to pear trees in the second orchard is $\\dfrac{17}{13}$.",
                  "reason": "Answering the question asked: the question asks for the ratio in the second orchard, as a fraction."
                }
              ]
            },
            {
              "prompt": "Find the ratio of red tiles to white tiles on the second floor, as a fraction, if the ratio of red tiles to white tiles is $5 : 4$ on the first floor and $5 : 7$ on the two floors together, the second floor has 3 times as many tiles as the first, and the tiles are all red tiles or white tiles.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "10/17",
              "lines": [
                {
                  "step": "Find the ratio of red tiles to white tiles on the second floor, as a fraction, if the ratio of red tiles to white tiles is $5 : 4$ on the first floor and $5 : 7$ on the two floors together, the second floor has 3 times as many tiles as the first, and the tiles are all red tiles or white tiles.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of groups of $9$ tiles on the first floor, each with $5$ red tiles and $4$ white tiles.",
                  "reason": "Part-to-part and part-to-whole ratio: the ratio $5 : 4$ puts $5$ red tiles and $4$ white tiles in every $9$ tiles of the first floor, so its tiles come in groups of $9$."
                },
                {
                  "step": "The first floor has $5x$ red tiles, $4x$ white tiles and $9x$ tiles in all.",
                  "reason": "Writing a sentence as an equation: each of the $x$ groups holds $5$ red tiles and $4$ white tiles."
                },
                {
                  "step": "The second floor has $3(9x) = 27x$ tiles.",
                  "reason": "Writing a sentence as an equation: the second floor has $3$ times as many tiles as the first."
                },
                {
                  "step": "Let $y$ be the number of red tiles on the second floor, so it has $27x - y$ white tiles.",
                  "reason": "One letter for each unknown: the red tiles of the second floor are unknown, and its white tiles are the rest of its $27x$ tiles."
                },
                {
                  "step": "$\\dfrac{\\text{red tiles on both floors}}{\\text{white tiles on both floors}} = \\dfrac{5}{7}$",
                  "reason": "The word equation written before the letters: the sentence says which quantity sits on top and which sits below, so the ratio is written in words first."
                },
                {
                  "step": "$\\dfrac{5x + y}{4x + 27x - y} = \\dfrac{5}{7}$",
                  "reason": "Writing a sentence as an equation: the red tiles of the two floors together are $5x + y$, and the white tiles are $4x + 27x - y$."
                },
                {
                  "step": "$7(5x + y) = 5(4x + 27x - y)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$35x + 7y = 20x + 135x - 5y$",
                  "reason": "Multiplying out: by the distributive law the number in front of each bracket multiplies each term in it."
                },
                {
                  "step": "$7y + 5y = 20x + 135x - 35x$",
                  "reason": "Adding the same number to both sides: adding $5y - 35x$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$12y = 120x$",
                  "reason": "Collecting like terms: the terms in $y$ are added on the left, and the terms in $x$ on the right."
                },
                {
                  "step": "$y = 10x$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $12$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "The second floor has $27x - 10x$ white tiles.",
                  "reason": "Substitution: $10x$ goes in place of $y$ in $27x - y$, which leaves one letter."
                },
                {
                  "step": "$27x - 10x = 17x$",
                  "reason": "Collecting like terms: the coefficients of $x$ are added."
                },
                {
                  "step": "$\\dfrac{\\text{red tiles on the second floor}}{\\text{white tiles on the second floor}} = \\dfrac{10x}{17x}$",
                  "reason": "Writing a sentence as an equation: the ratio asked for is the quotient of the two counts of the second floor."
                },
                {
                  "step": "$\\dfrac{\\text{red tiles on the second floor}}{\\text{white tiles on the second floor}} = \\dfrac{10}{17}$",
                  "reason": "Cancelling a common factor: $x$ stands on the top and below and is not $0$, and $\\dfrac{10}{17}$ is in lowest terms."
                },
                {
                  "step": "The ratio of red tiles to white tiles on the second floor is $\\dfrac{10}{17}$.",
                  "reason": "Answering the question asked: the question asks for the ratio on the second floor, as a fraction."
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
