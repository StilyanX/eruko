export default {
  number: 18,
  manyParts: false,
  bare: {
    prompt: "Compute $\\frac{2}{3}\\div\\,\\frac{4}{5}$.",
    answer: "5/6",
    form: "Answer as a fraction in lowest terms, or equivalent.",
    solution: [
      "Compute $\\frac{2}{3}\\div\\,\\frac{4}{5}$.",
      "The quotient $\\frac{2}{3}\\div\\,\\frac{4}{5}$ is, by definition, the unique fraction that gives $\\frac{2}{3}$ when multiplied by $\\frac{4}{5}$.",
      "$\\frac{2}{3}\\div\\,\\frac{4}{5}=\\frac{2}{3}\\times\\,\\frac{5}{4}=\\frac{10}{12}$, by invert-and-multiply.",
      "The numerator and the denominator of $\\frac{10}{12}$ have the common divisor $2$, so $\\frac{10}{12}=\\frac{5}{6}$.",
      "$\\frac{5}{6}$."
    ]
  },
  ideas: [
    {
      name: "Definition of fraction division",
      concrete: "The quotient $5\\div\\,\\frac{1}{3}$ is $15$, because $15\\times\\,\\frac{1}{3}=5$.",
      general: "For fractions $A$ and $B$, with $B\\ne0$: the **quotient** of $A$ by $B$, written $A\\div\\,B$, is the fraction $C$ so that $A=C\\times\\,B$."
    },
    {
      name: "Invert-and-multiply",
      concrete: "Dividing $\\frac{2}{7}$ by $\\frac{5}{3}$ gives $\\frac{2}{7}\\times\\,\\frac{3}{5}=\\frac{6}{35}$.",
      general: "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$, with $\\frac{k}{\\ell}\\ne0$: $\\frac{m}{n}\\div\\,\\frac{k}{\\ell}=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$, a rule called **invert-and-multiply**."
    },
    {
      name: "Average speed",
      concrete: "A motion that covers 12 miles in $\\frac{1}{4}$ hour has average speed $12\\div\\,\\frac{1}{4}=48$ mph over that time interval.",
      general: "An object travels a distance $d$ in a time interval of length $t$. Its **average speed** in that time interval is $d\\div\\,t$."
    },
    {
      name: "Constant speed over every time interval",
      concrete: "A motion of constant speed 48 mph travels $2\\times\\,48=96$ miles in each 2-hour interval.",
      general: "Take a motion and a time interval of length $T$ with $T>0$, in which it travels a distance $D$. The motion has **constant speed** $v$ if $D=T\\times\\,v$ for each such interval."
    },
    {
      name: "Fraction to finite decimal",
      concrete: "The fraction $\\frac{3}{8}$ is $\\frac{375}{1\\,000}=0.375$, because $8=2^3$ and $3\\times\\,10^3\\div\\,8=375$ is a whole number.",
      general: "If $n=2^a\\times\\,5^b$, choose a whole number $k\\ge a$ and $k\\ge b$. Then $\\frac{m}{n}=\\frac{q}{10^k}$, a finite decimal, where $q$ is the whole number $m\\times\\,10^k\\div\\,n$."
    },
    {
      name: "Error bound on a truncated decimal expansion",
      concrete: "For $\\frac{2}{7}$, $0<\\frac{2}{7}-0.285\\,714\\,2<\\frac{1}{10^7}$.",
      general: "If dividing $m\\times\\,10^k$ by $n$ gives whole-number quotient $q$ and remainder $r$ (with $0\\le r<n$), then $\\frac{m}{n}-\\frac{q}{10^k}=\\frac{r}{n}\\times\\,\\frac{1}{10^k}$, so $0\\le\\frac{m}{n}-\\frac{q}{10^k}<\\frac{1}{10^k}$."
    },
    {
      name: "Division as a rectangle side",
      concrete: "A rectangle with area $\\frac{3}{2}$ and one side $\\frac{4}{5}$ has the other side equal to $\\frac{3}{2}\\div\\,\\frac{4}{5}=\\frac{15}{8}$.",
      general: "Take fractions $A$ and $B$ with $B\\ne0$. Then $A\\div\\,B$ is the length of one side of a rectangle with area $A$ whose other side has length $B$."
    },
    {
      name: "Perimeter of a rectangle",
      concrete: "A rectangle with sides 3 cm and 7 cm has perimeter $3+7+3+7=20$ cm.",
      general: "A rectangle with sides $a$ and $b$ has perimeter $a+b+a+b=2(a+b)$.",
      definitions: [
        "The **perimeter** of a rectangle is the sum of the lengths of its four sides."
      ]
    }
  ],
  kinds: [
    {
      id: "t18-k1",
      forms: [
        {
          example: {
            problem: "Compute $\\frac{11}{5}\\div\\,\\frac{23}{8}$.",
            lines: [
              { step: "The quotient $\\frac{11}{5}\\div\\,\\frac{23}{8}$ is the unique fraction that gives $\\frac{11}{5}$ when multiplied by $\\frac{23}{8}$.", reason: "the definition of fraction division" },
              { step: "$\\frac{11}{5}\\div\\,\\frac{23}{8}=\\frac{11}{5}\\times\\,\\frac{8}{23}$.", reason: "invert-and-multiply" },
              { step: "$\\frac{11}{5}\\times\\,\\frac{8}{23}=\\frac{11\\times\\,8}{5\\times\\,23}$.", reason: "the product formula" },
              { step: "$\\frac{88}{115}$.", reason: "multiplying the numerators and multiplying the denominators" }
            ]
          },
          fade: [
            {
              prompt: "Compute $\\frac{4}{9}\\div\\,\\frac{7}{5}$.",
              answer: "20/63",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "The quotient $\\frac{4}{9}\\div\\,\\frac{7}{5}$ is the unique fraction that gives $\\frac{4}{9}$ when multiplied by $\\frac{7}{5}$.", reason: "the definition of fraction division" },
                { step: "$\\frac{4}{9}\\div\\,\\frac{7}{5}=\\frac{4}{9}\\times\\,\\frac{5}{7}$.", reason: "invert-and-multiply" },
                { step: "$\\frac{4}{9}\\times\\,\\frac{5}{7}=\\frac{4\\times\\,5}{9\\times\\,7}$.", reason: "the product formula" },
                { step: "$\\frac{20}{63}$.", reason: "multiplying the numerators and multiplying the denominators" }
              ]
            },
            {
              prompt: "Compute $\\frac{5}{8}\\div\\,\\frac{9}{7}$.",
              answer: "35/72",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "The quotient $\\frac{5}{8}\\div\\,\\frac{9}{7}$ is the unique fraction that gives $\\frac{5}{8}$ when multiplied by $\\frac{9}{7}$.", reason: "the definition of fraction division" },
                { step: "$\\frac{5}{8}\\div\\,\\frac{9}{7}=\\frac{5}{8}\\times\\,\\frac{7}{9}$.", reason: "invert-and-multiply" },
                { step: "$\\frac{5}{8}\\times\\,\\frac{7}{9}=\\frac{5\\times\\,7}{8\\times\\,9}$.", reason: "the product formula" },
                { step: "$\\frac{35}{72}$.", reason: "multiplying the numerators and multiplying the denominators" }
              ]
            },
            {
              prompt: "Compute $\\frac{3}{10}\\div\\,\\frac{7}{11}$.",
              answer: "33/70",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "The quotient $\\frac{3}{10}\\div\\,\\frac{7}{11}$ is the unique fraction that gives $\\frac{3}{10}$ when multiplied by $\\frac{7}{11}$.", reason: "the definition of fraction division" },
                { step: "$\\frac{3}{10}\\div\\,\\frac{7}{11}=\\frac{3}{10}\\times\\,\\frac{11}{7}$.", reason: "invert-and-multiply" },
                { step: "$\\frac{3}{10}\\times\\,\\frac{11}{7}=\\frac{3\\times\\,11}{10\\times\\,7}$.", reason: "the product formula" },
                { step: "$\\frac{33}{70}$.", reason: "multiplying the numerators and multiplying the denominators" }
              ]
            }
          ]
        },
        {
          example: {
            problem: "Find the number of pieces, whole and fractional, cut from a rod $43\\frac{3}{8}$ metres long, each piece $\\frac{5}{3}$ metres long.",
            lines: [
              { step: "Let $A$ be the number of pieces. Then $43\\frac{3}{8}=A\\times\\,\\frac{5}{3}$.", reason: "the length of the rod is $A$ copies of the piece length" },
              { step: "$43\\frac{3}{8}=\\frac{347}{8}$.", reason: "writing the mixed number as an improper fraction" },
              { step: "$A=\\frac{347}{8}\\div\\,\\frac{5}{3}$.", reason: "the definition of fraction division" },
              { step: "$A=\\frac{347}{8}\\times\\,\\frac{3}{5}=\\frac{1\\,041}{40}$.", reason: "invert-and-multiply, then the product formula" },
              { step: "$26\\,\\frac{1}{40}$.", reason: "writing the improper fraction as a mixed number" }
            ]
          },
          fade: [
            {
              prompt: "Find the number of pieces, whole and fractional, cut from a ribbon $12\\frac{1}{2}$ metres long, each piece $\\frac{7}{3}$ metres long.",
              answer: "5 5/14",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "Let $A$ be the number of pieces. Then $12\\frac{1}{2}=A\\times\\,\\frac{7}{3}$.", reason: "the length of the ribbon is $A$ copies of the piece length" },
                { step: "$12\\frac{1}{2}=\\frac{25}{2}$.", reason: "writing the mixed number as an improper fraction" },
                { step: "$A=\\frac{25}{2}\\div\\,\\frac{7}{3}$.", reason: "the definition of fraction division" },
                { step: "$A=\\frac{25}{2}\\times\\,\\frac{3}{7}=\\frac{75}{14}$.", reason: "invert-and-multiply, then the product formula" },
                { step: "$5\\,\\frac{5}{14}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            },
            {
              prompt: "Find the number of pieces, whole and fractional, cut from a rope $9\\frac{2}{5}$ metres long, each piece $\\frac{4}{3}$ metres long.",
              answer: "7 1/20",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "Let $A$ be the number of pieces. Then $9\\frac{2}{5}=A\\times\\,\\frac{4}{3}$.", reason: "the length of the rope is $A$ copies of the piece length" },
                { step: "$9\\frac{2}{5}=\\frac{47}{5}$.", reason: "writing the mixed number as an improper fraction" },
                { step: "$A=\\frac{47}{5}\\div\\,\\frac{4}{3}$.", reason: "the definition of fraction division" },
                { step: "$A=\\frac{47}{5}\\times\\,\\frac{3}{4}=\\frac{141}{20}$.", reason: "invert-and-multiply, then the product formula" },
                { step: "$7\\,\\frac{1}{20}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            },
            {
              prompt: "Find the number of pieces, whole and fractional, cut from a board $15\\frac{3}{4}$ feet long, each piece $\\frac{8}{5}$ feet long.",
              answer: "9 27/32",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "Let $A$ be the number of pieces. Then $15\\frac{3}{4}=A\\times\\,\\frac{8}{5}$.", reason: "the length of the board is $A$ copies of the piece length" },
                { step: "$15\\frac{3}{4}=\\frac{63}{4}$.", reason: "writing the mixed number as an improper fraction" },
                { step: "$A=\\frac{63}{4}\\div\\,\\frac{8}{5}$.", reason: "the definition of fraction division" },
                { step: "$A=\\frac{63}{4}\\times\\,\\frac{5}{8}=\\frac{315}{32}$.", reason: "invert-and-multiply, then the product formula" },
                { step: "$9\\,\\frac{27}{32}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            }
          ]
        },
        {
          example: {
            problem: "Find the average speed, in mph, of a car that travels 12 miles in $\\frac{1}{4}$ hour.",
            lines: [
              { step: "The average speed is $12\\div\\,\\frac{1}{4}$ mph.", reason: "the definition of average speed as distance divided by time" },
              { step: "$12\\div\\,\\frac{1}{4}=12\\times\\,4$.", reason: "invert-and-multiply" },
              { step: "$48$.", reason: "multiplying the whole numbers" }
            ]
          },
          fade: [
            {
              prompt: "Find the average speed, in mph, of a cyclist that travels 5 miles in $\\frac{1}{3}$ hour.",
              answer: "15",
              form: "Answer as a whole number.",
              lines: [
                { step: "The average speed is $5\\div\\,\\frac{1}{3}$ mph.", reason: "the definition of average speed as distance divided by time" },
                { step: "$5\\div\\,\\frac{1}{3}=5\\times\\,3$.", reason: "invert-and-multiply" },
                { step: "$15$.", reason: "multiplying the whole numbers" }
              ]
            },
            {
              prompt: "Find the average speed, in mph, of a runner that travels 3 miles in $\\frac{1}{2}$ hour.",
              answer: "6",
              form: "Answer as a whole number.",
              lines: [
                { step: "The average speed is $3\\div\\,\\frac{1}{2}$ mph.", reason: "the definition of average speed as distance divided by time" },
                { step: "$3\\div\\,\\frac{1}{2}=3\\times\\,2$.", reason: "invert-and-multiply" },
                { step: "$6$.", reason: "multiplying the whole numbers" }
              ]
            },
            {
              prompt: "Find the average speed, in mph, of a train that travels 20 miles in $\\frac{1}{6}$ hour.",
              answer: "120",
              form: "Answer as a whole number.",
              lines: [
                { step: "The average speed is $20\\div\\,\\frac{1}{6}$ mph.", reason: "the definition of average speed as distance divided by time" },
                { step: "$20\\div\\,\\frac{1}{6}=20\\times\\,6$.", reason: "invert-and-multiply" },
                { step: "$120$.", reason: "multiplying the whole numbers" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "t18-k2",
      forms: [
        {
          example: {
            problem: "Compute the decimal equal to $\\frac{15}{32}$.",
            lines: [
              { step: "$32=2^5$.", reason: "factoring the denominator" },
              { step: "Choose $k=5$.", reason: "the number $k$ must be at least as large as the exponent of 2 in the denominator" },
              { step: "$15\\times\\,10^5=1\\,500\\,000$.", reason: "scaling the numerator by $10^k$" },
              { step: "$1\\,500\\,000\\div\\,32=46\\,875$.", reason: "the quotient $10^5\\div\\,32$ is a whole number, because $32=2^5$ and $10^5=2^5\\times\\,5^5$" },
              { step: "$0.468\\,75$.", reason: "a fraction with denominator a power of 10 is a finite decimal" }
            ]
          },
          fade: [
            {
              prompt: "Compute the decimal equal to $\\frac{7}{16}$.",
              answer: "0.4375",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "$16=2^4$.", reason: "factoring the denominator" },
                { step: "Choose $k=4$.", reason: "the number $k$ must be at least as large as the exponent of 2 in the denominator" },
                { step: "$7\\times\\,10^4=70\\,000$.", reason: "scaling the numerator by $10^k$" },
                { step: "$70\\,000\\div\\,16=4\\,375$.", reason: "the quotient $10^4\\div\\,16$ is a whole number, because $16=2^4$ and $10^4=2^4\\times\\,5^4$" },
                { step: "$0.437\\,5$.", reason: "a fraction with denominator a power of 10 is a finite decimal" }
              ]
            },
            {
              prompt: "Compute the decimal equal to $\\frac{5}{8}$.",
              answer: "0.625",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "$8=2^3$.", reason: "factoring the denominator" },
                { step: "Choose $k=3$.", reason: "the number $k$ must be at least as large as the exponent of 2 in the denominator" },
                { step: "$5\\times\\,10^3=5\\,000$.", reason: "scaling the numerator by $10^k$" },
                { step: "$5\\,000\\div\\,8=625$.", reason: "the quotient $10^3\\div\\,8$ is a whole number, because $8=2^3$ and $10^3=2^3\\times\\,5^3$" },
                { step: "$0.625$.", reason: "a fraction with denominator a power of 10 is a finite decimal" }
              ]
            },
            {
              prompt: "Compute the decimal equal to $\\frac{13}{64}$.",
              answer: "0.203125",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "$64=2^6$.", reason: "factoring the denominator" },
                { step: "Choose $k=6$.", reason: "the number $k$ must be at least as large as the exponent of 2 in the denominator" },
                { step: "$13\\times\\,10^6=13\\,000\\,000$.", reason: "scaling the numerator by $10^k$" },
                { step: "$13\\,000\\,000\\div\\,64=203\\,125$.", reason: "the quotient $10^6\\div\\,64$ is a whole number, because $64=2^6$ and $10^6=2^6\\times\\,5^6$" },
                { step: "$0.203\\,125$.", reason: "a fraction with denominator a power of 10 is a finite decimal" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "t18-k3",
      forms: [
        {
          example: {
            problem: "Find the 7-digit decimal expansion of $\\frac{2}{7}$.",
            lines: [
              { step: "$2\\times\\,10^7=20\\,000\\,000$.", reason: "scaling the numerator by $10^7$" },
              { step: "$20\\,000\\,000=(2\\,857\\,142\\times\\,7)+6$.", reason: "division-with-remainder of $20\\,000\\,000$ by 7" },
              { step: "$\\frac{2}{7}=\\frac{2\\,857\\,142}{10^7}+\\frac{6}{7}\\times\\,\\frac{1}{10^7}$.", reason: "dividing both sides of the previous line by $7\\times\\,10^7$, using the distributive law" },
              { step: "$0.285\\,714\\,2$.", reason: "a fraction with denominator a power of 10 is a finite decimal, and the truncation drops the remainder term" }
            ]
          },
          fade: [
            {
              prompt: "Find the 5-digit decimal expansion of $\\frac{1}{3}$.",
              answer: "0.33333",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "$1\\times\\,10^5=100\\,000$.", reason: "scaling the numerator by $10^5$" },
                { step: "$100\\,000=(33\\,333\\times\\,3)+1$.", reason: "division-with-remainder of $100\\,000$ by 3" },
                { step: "$\\frac{1}{3}=\\frac{33\\,333}{10^5}+\\frac{1}{3}\\times\\,\\frac{1}{10^5}$.", reason: "dividing both sides of the previous line by $3\\times\\,10^5$, using the distributive law" },
                { step: "$0.333\\,33$.", reason: "a fraction with denominator a power of 10 is a finite decimal, and the truncation drops the remainder term" }
              ]
            },
            {
              prompt: "Find the 4-digit decimal expansion of $\\frac{5}{6}$.",
              answer: "0.8333",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "$5\\times\\,10^4=50\\,000$.", reason: "scaling the numerator by $10^4$" },
                { step: "$50\\,000=(8\\,333\\times\\,6)+2$.", reason: "division-with-remainder of $50\\,000$ by 6" },
                { step: "$\\frac{5}{6}=\\frac{8\\,333}{10^4}+\\frac{2}{6}\\times\\,\\frac{1}{10^4}$.", reason: "dividing both sides of the previous line by $6\\times\\,10^4$, using the distributive law" },
                { step: "$0.833\\,3$.", reason: "a fraction with denominator a power of 10 is a finite decimal, and the truncation drops the remainder term" }
              ]
            },
            {
              prompt: "Find the 5-digit decimal expansion of $\\frac{7}{11}$.",
              answer: "0.63636",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "$7\\times\\,10^5=700\\,000$.", reason: "scaling the numerator by $10^5$" },
                { step: "$700\\,000=(63\\,636\\times\\,11)+4$.", reason: "division-with-remainder of $700\\,000$ by 11" },
                { step: "$\\frac{7}{11}=\\frac{63\\,636}{10^5}+\\frac{4}{11}\\times\\,\\frac{1}{10^5}$.", reason: "dividing both sides of the previous line by $11\\times\\,10^5$, using the distributive law" },
                { step: "$0.636\\,36$.", reason: "a fraction with denominator a power of 10 is a finite decimal, and the truncation drops the remainder term" }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t18-k4",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{21}{5}$.",
            "figure": {
              "file": "place:line:21/5",
              "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked, nothing between."
            },
            "lines": [
              {
                "step": "$21=4\\times 5+1$, so $\\frac{21}{5}=4+\\frac{1}{5}$.",
                "reason": "21 copies of $\\frac{1}{5}$ hold 4 groups of 5 copies, each group making 1, with 1 copy left over"
              },
              {
                "step": "The mark lies between 4 and 5, $\\frac{1}{5}$ of the way from 4 to 5.",
                "reason": "the whole part 4 puts the mark in the unit from 4 to 5, and 1 of the 5 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:21/5",
                  "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked, with 21/5 marked, between 4 and 5."
                }
              },
              {
                "step": "$\\frac{1}{5}=\\frac{1\\times 2}{5\\times 2}=\\frac{2}{10}=0.2$.",
                "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$4.2$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:21/5",
                  "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 21/5 lies at 4.2, between 4 and 5."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{17}{5}$.",
              "answer": "17/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$17=3\\times 5+2$, so $\\frac{17}{5}=3+\\frac{2}{5}$.",
                  "reason": "17 copies of $\\frac{1}{5}$ hold 3 groups of 5 copies, each group making 1, with 2 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{2}{5}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 2 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{2}{5}=\\frac{2\\times 2}{5\\times 2}=\\frac{4}{10}=0.4$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.4$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:17/5",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 17/5 lies at 3.4, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{23}{5}$.",
              "answer": "23/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$23=4\\times 5+3$, so $\\frac{23}{5}=4+\\frac{3}{5}$.",
                  "reason": "23 copies of $\\frac{1}{5}$ hold 4 groups of 5 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 4 and 5, $\\frac{3}{5}$ of the way from 4 to 5.",
                  "reason": "the whole part 4 puts the mark in the unit from 4 to 5, and 3 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$4.6$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:23/5",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 23/5 lies at 4.6, between 4 and 5."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{14}{5}$.",
              "answer": "14/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$14=2\\times 5+4$, so $\\frac{14}{5}=2+\\frac{4}{5}$.",
                  "reason": "14 copies of $\\frac{1}{5}$ hold 2 groups of 5 copies, each group making 1, with 4 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{4}{5}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 4 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{4}{5}=\\frac{4\\times 2}{5\\times 2}=\\frac{8}{10}=0.8$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$2.8$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:14/5",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 14/5 lies at 2.8, between 2 and 3."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{3}{20}$.",
            "figure": {
              "file": "place:line:3/20",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 3.",
                "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
              },
              {
                "step": "$\\frac{3}{20}=\\frac{3\\times 5}{20\\times 5}=\\frac{15}{100}=0.15$.",
                "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$0.15$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:3/20",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/20 lies at 0.15, in the tenth from 0.1 to 0.2, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{19}{25}$.",
              "answer": "19/25",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 25 equal parts, and the mark is the end of part 19.",
                  "reason": "the denominator 25 gives the number of equal parts of the unit, and the numerator 19 counts the parts from 0"
                },
                {
                  "step": "$\\frac{19}{25}=\\frac{19\\times 4}{25\\times 4}=\\frac{76}{100}=0.76$.",
                  "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.76$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:19/25",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 19/25 lies at 0.76, in the tenth from 0.7 to 0.8, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{9}{20}$.",
              "answer": "9/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 9.",
                  "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 9 counts the parts from 0"
                },
                {
                  "step": "$\\frac{9}{20}=\\frac{9\\times 5}{20\\times 5}=\\frac{45}{100}=0.45$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.45$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:9/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 9/20 lies at 0.45, in the tenth from 0.4 to 0.5, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{17}{50}$.",
              "answer": "17/50",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 50 equal parts, and the mark is the end of part 17.",
                  "reason": "the denominator 50 gives the number of equal parts of the unit, and the numerator 17 counts the parts from 0"
                },
                {
                  "step": "$\\frac{17}{50}=\\frac{17\\times 2}{50\\times 2}=\\frac{34}{100}=0.34$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.34$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:17/50",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 17/50 lies at 0.34, in the tenth from 0.3 to 0.4, between 0 and 1."
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: "t18-p1",
      method: "direct proof",
      statement: "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$ with $\\frac{k}{\\ell}\\ne0$: $\\frac{m}{n}\\div\\,\\frac{k}{\\ell}=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$.",
      idea: "The quotient is, by definition, the unique fraction that the lemma on the unique factor names.",
      lines: [
        { line: "The quotient $\\frac{m}{n}\\div\\,\\frac{k}{\\ell}$ is, by definition, the unique fraction $A$ so that $A\\times\\,\\frac{k}{\\ell}=\\frac{m}{n}$.", reason: "the definition of fraction division" },
        { line: "This unique fraction is $A=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$.", reason: "the lemma on the unique factor" },
        { line: "$\\frac{m}{n}\\div\\,\\frac{k}{\\ell}=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$.", reason: "combining the previous two lines" }
      ]
    },
    {
      id: "c18-p2",
      method: "proof by cases",
      statement: "Take a fraction $\\frac{m}{n}$ whose denominator $n$ is a product of factors each equal to 2 or 5. For a large enough whole number $k$, dividing $m\\times\\,10^k$ by $n$ gives a whole number $q$. Then $\\frac{m}{n}$ equals the finite decimal $\\frac{q}{10^k}$.",
      idea: "Writing $n=2^a\\times\\,5^b$ and choosing $k$ as the greater of $a$ and $b$ leaves only factors of 2 or of 5 to cancel.",
      lines: [
        { line: "Write $n=2^a\\times\\,5^b$, for whole numbers $a$ and $b$.", reason: "the denominator $n$ is a product of factors each equal to 2 or 5" },
        { line: "$10^k=2^k\\times\\,5^k$, for each whole number $k$.", reason: "the fact that $10=2\\times\\,5$" },
        { line: "Suppose that $a\\le b$, and choose $k=b$.", reason: "the case where the exponent of 5 is at least the exponent of 2" },
        { line: "$\\frac{10^b}{n}=\\frac{2^b\\times\\,5^b}{2^a\\times\\,5^b}=\\frac{2^b}{2^a}$.", reason: "the cancellation law" },
        { line: "The fraction $\\frac{2^b}{2^a}$ is a whole number. Since $a\\le b$, the numerator has at least as many factors of 2 as the denominator.", reason: "cancelling the common factors of 2" },
        { line: "Suppose instead that $a>b$, and choose $k=a$.", reason: "the case where the exponent of 2 is greater than the exponent of 5" },
        { line: "$\\frac{10^a}{n}=\\frac{2^a\\times\\,5^a}{2^a\\times\\,5^b}=\\frac{5^a}{5^b}$.", reason: "the cancellation law" },
        { line: "The fraction $\\frac{5^a}{5^b}$ is a whole number. Since $a>b$, the numerator has more factors of 5 than the denominator.", reason: "cancelling the common factors of 5" },
        { line: "In each case, $\\frac{10^k}{n}$ is a whole number for $k$ at least as large as $a$ and as $b$. So $\\frac{m\\times\\,10^k}{n}$ is a whole number $q$.", reason: "the product of the two whole numbers $m$ and $\\frac{10^k}{n}$ is a whole number" },
        { line: "$\\frac{m}{n}=\\frac{m\\times\\,10^k}{n}\\times\\,\\frac{1}{10^k}=q\\times\\,\\frac{1}{10^k}=\\frac{q}{10^k}$.", reason: "the cancellation law, then the definition of $q$" },
        { line: "So $\\frac{m}{n}$ equals the finite decimal $\\frac{q}{10^k}$.", reason: "a fraction with denominator a power of 10 is, by definition, a finite decimal" }
      ]
    },
    {
      id: "c18-p3",
      method: "direct proof",
      statement: "For nonzero fractions $A$ and $B$: if $A<B$, then $\\frac1A>\\frac1B$.",
      idea: "The cross-multiplication algorithm turns $A<B$ and $\\frac1B<\\frac1A$ into the same inequality on whole numbers.",
      lines: [
        { line: "Write $A=\\frac{k}{\\ell}$ and $B=\\frac{m}{n}$.", reason: "notation for the given fractions" },
        { line: "The inequality $A<B$ is equivalent to $kn<\\ell m$.", reason: "the cross-multiplication algorithm for fractions" },
        { line: "The reciprocals are $\\frac1A=\\frac{\\ell}{k}$ and $\\frac1B=\\frac{n}{m}$.", reason: "the reciprocal of $\\frac{k}{\\ell}$ is $\\frac{\\ell}{k}$" },
        { line: "The inequality $kn<\\ell m$ is equivalent to $\\frac{n}{m}<\\frac{\\ell}{k}$.", reason: "the cross-multiplication algorithm, applied to $\\frac{n}{m}$ and $\\frac{\\ell}{k}$" },
        { line: "So $A<B$ implies $\\frac1B<\\frac1A$.", reason: "the previous lines chain $A<B$ to $kn<\\ell m$ to $\\frac1B<\\frac1A$" }
      ]
    },
    {
      id: "t18-p4",
      method: "direct proof",
      statement: "If dividing $m\\times\\,10^k$ by $n$ gives whole-number quotient $q$ and remainder $r$ (with $0\\le r<n$), then $\\frac{m}{n}-\\frac{q}{10^k}=\\frac{r}{n}\\times\\,\\frac{1}{10^k}$, so $0\\le\\frac{m}{n}-\\frac{q}{10^k}<\\frac{1}{10^k}$.",
      idea: "Substituting the division-with-remainder equation into $\\frac{m}{n}$ splits it into the truncated decimal plus a small leftover term.",
      lines: [
        { line: "$m\\times\\,10^k=q\\times\\,n+r$, with $0\\le r<n$.", reason: "the definition of division-with-remainder" },
        { line: "$\\frac{m}{n}=\\frac{m\\times\\,10^k}{n\\times\\,10^k}=\\frac{qn+r}{n\\times\\,10^k}$.", reason: "multiplying the numerator and the denominator of $\\frac{m}{n}$ by $10^k$, then substituting the division-with-remainder equation" },
        { line: "$\\frac{qn+r}{n\\times\\,10^k}=\\frac{qn}{n\\times\\,10^k}+\\frac{r}{n\\times\\,10^k}=\\frac{q}{10^k}+\\frac{r}{n}\\times\\,\\frac{1}{10^k}$.", reason: "the addition formula for fractions, then cancelling the common divisor $n$ from the first term" },
        { line: "$\\frac{m}{n}-\\frac{q}{10^k}=\\frac{r}{n}\\times\\,\\frac{1}{10^k}$.", reason: "subtracting $\\frac{q}{10^k}$ from both sides of the previous line" },
        { line: "$0\\le\\frac{r}{n}<1$, since $0\\le r<n$.", reason: "the definition of a fraction, comparing $r$ and $n$" },
        { line: "$0\\le\\frac{m}{n}-\\frac{q}{10^k}<\\frac{1}{10^k}$.", reason: "multiplying the previous inequality by the positive fraction $\\frac{1}{10^k}$" }
      ]
    }
  ],
  prove: [
    {
      id: "t18-s1",
      statement: "For fractions $A,B,C$ with $B\\ne0$ and $C\\ne0$: $A\\div\\,B=C$ is equivalent to $A\\div\\,C=B$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "The equation $A\\div\\,B=C$ means $C\\times\\,B=A$.", reason: "the definition of fraction division" },
          { line: "The equation $C\\times\\,B=A$ is equivalent to $B\\times\\,C=A$.", reason: "the commutative law for fraction multiplication" },
          { line: "The equation $B\\times\\,C=A$ means $A\\div\\,C=B$.", reason: "the definition of fraction division, applied with $C$ and $B$ exchanged" },
          { line: "So $A\\div\\,B=C$ is equivalent to $A\\div\\,C=B$.", reason: "combining the previous two lines" }
        ]
      }
    },
    {
      id: "t18-s2",
      statement: "Take whole numbers $m,n$ with $n>0$ and division-with-remainder $m=qn+r$ (with $0\\le r<n$). If $r=0$, then $\\frac{m}{n}$ is a whole number. If $r>0$, then $q<\\frac{m}{n}<q+1$.",
      method: "proof by cases",
      check: {
        proof: [
          { line: "$\\frac{m}{n}=\\frac{qn+r}{n}=q+\\frac{r}{n}$.", reason: "the addition formula for fractions, cancelling the common divisor $n$ from the first term" },
          { line: "Suppose that $r=0$.", reason: "the first case" },
          { line: "$\\frac{m}{n}=q+0=q$, a whole number.", reason: "substituting $r=0$ into the previous line" },
          { line: "Suppose instead that $r>0$.", reason: "the second case" },
          { line: "$0<\\frac{r}{n}<1$, since $0<r<n$.", reason: "the definition of a fraction, comparing $r$ and $n$" },
          { line: "$q<q+\\frac{r}{n}<q+1$.", reason: "adding the same whole number to every part of an inequality preserves it" },
          { line: "$q<\\frac{m}{n}<q+1$.", reason: "combining the previous line with the first line" },
          { line: "So $\\frac{m}{n}$ is a whole number if $r=0$, and $q<\\frac{m}{n}<q+1$ if $r>0$.", reason: "combining the two cases" }
        ]
      }
    },
    {
      id: "t18-s3",
      statement: "Take a motion with constant speed $v>0$ over every time interval, and positive fractions $T_1<T_2$. Then the distances $D_1$ and $D_2$ travelled in time intervals of lengths $T_1$ and $T_2$ satisfy $D_1<D_2$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "The distances are $D_1=T_1\\times\\,v$ and $D_2=T_2\\times\\,v$.", reason: "the meaning of constant speed $v$" },
          { line: "$T_1\\times\\,v<T_2\\times\\,v$, since $T_1<T_2$ and $v>0$.", reason: "multiplication by a positive fraction preserves order" },
          { line: "$D_1<D_2$.", reason: "combining the previous two lines" }
        ]
      }
    },
    {
      id: "t18-s4",
      statement: "Given a fraction $A$ and a fraction $L$, there is a rectangle with area $A$ and perimeter greater than $L$.",
      method: "proof of existence by construction",
      check: {
        proof: [
          { line: "Let one side be $n$ and the other $\\frac{A}{n}$, for a whole number $n$.", reason: "choosing sides whose product is $A$" },
          { line: "The area of this rectangle is $n\\times\\,\\frac{A}{n}=A$, for every choice of $n$.", reason: "the product formula" },
          { line: "Choose $n$ to be a whole number greater than $\\frac{L}{2}$.", reason: "some whole number is greater than a given fraction" },
          { line: "The perimeter is $2\\left(n+\\frac{A}{n}\\right)$, and $2\\left(n+\\frac{A}{n}\\right)>2n>L$.", reason: "the fraction $\\frac{A}{n}$ is positive, and $n>\\frac{L}{2}$" },
          { line: "This rectangle has area $A$ and perimeter greater than $L$.", reason: "combining the previous lines" }
        ]
      }
    }
  ]
}
