export default {
  number: 17,
  manyParts: false,
  bare: {
    prompt: "Compute $\\frac{2}{3}\\times\\,\\frac{4}{5}$.",
    answer: "8/15",
    form: "Answer as a fraction in lowest terms, or equivalent.",
    solution: [
      "Compute $\\frac{2}{3}\\times\\,\\frac{4}{5}$.",
      "$\\frac{2}{3}\\times\\,\\frac{4}{5}=\\frac{2\\times\\,4}{3\\times\\,5}$, by the product formula.",
      "$\\frac{2\\times\\,4}{3\\times\\,5}=\\frac{8}{15}$, by multiplying the numerators and multiplying the denominators.",
      "$\\frac{8}{15}$."
    ]
  },
  ideas: [
    {
      name: "Definition of fraction multiplication",
      concrete: "The product $\\frac{1}{2}\\times\\,\\frac{1}{2}$ is the area of a square with side $\\frac{1}{2}$. Four congruent copies of this square tile the unit square, so its area is $\\frac{1}{4}$.",
      general: "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$, the product $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}$ is the area of a rectangle with sides $\\frac{m}{n}$ and $\\frac{k}{\\ell}$."
    },
    {
      name: "The product formula",
      concrete: "$\\frac{2}{3}\\times\\,\\frac{4}{5}=\\frac{2\\times\\,4}{3\\times\\,5}=\\frac{8}{15}$.",
      general: "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$, the product is $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}=\\frac{mk}{n\\ell}$."
    },
    {
      name: "Distributive law for fraction multiplication",
      concrete: "$2\\times\\,\\left(\\frac{1}{3}+\\frac{1}{5}\\right)=\\left(2\\times\\,\\frac{1}{3}\\right)+\\left(2\\times\\,\\frac{1}{5}\\right)$, since both sides equal $\\frac{16}{15}$.",
      general: "For fractions $A,B,C$: $A\\times\\,(B\\pm C)=(A\\times\\, B)\\pm(A\\times\\, C)$."
    },
    {
      name: "Lemma on the unique factor",
      concrete: "The fraction $A$ with $A\\times\\,\\frac{3}{4}=\\frac{5}{6}$ is $A=\\frac{5}{6}\\times\\,\\frac{4}{3}=\\frac{10}{9}$.",
      general: "Given a nonzero fraction $\\frac{k}{\\ell}$, for every fraction $\\frac{m}{n}$ there is exactly one fraction $A$ so that $A\\times\\,\\frac{k}{\\ell}=\\frac{m}{n}$, namely $A=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$."
    },
    {
      name: "Second interpretation: a fraction of a quantity",
      concrete: "The quantity $\\frac{4}{3}$ of $\\frac{5}{7}$ is $\\frac{20}{21}$.",
      general: "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$: $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}$ equals $\\frac{m}{n}$ of $\\frac{k}{\\ell}$. This is the length of $m$ concatenated parts when you divide a segment of length $\\frac{k}{\\ell}$ into $n$ equal parts."
    },
    {
      name: "Multiplication algorithm for finite decimals",
      concrete: "$1.25\\times\\,0.006\\,7=\\frac{125}{10^2}\\times\\,\\frac{67}{10^4}=\\frac{8\\,375}{10^6}=0.008\\,375$.",
      general: "To multiply two finite decimals, multiply their digit strings as whole numbers and ignore the decimal points. Then place the decimal point so the product has as many decimal digits as the two factors have together."
    },
    {
      name: "Multiplication and order",
      concrete: "$\\frac{2}{3}\\times\\,\\frac{1}{5}<\\frac{2}{3}\\times\\,\\frac{1}{4}$, since $\\frac{1}{5}<\\frac{1}{4}$.",
      general: "For fractions $A,B,C$ with $A>0$: the inequality $AB<AC$ is equivalent to $B<C$."
    }
  ],
  kinds: [
    {
      id: "t17-k1",
      forms: [
        {
          example: {
            problem: "Compute $\\frac{5}{6}\\times\\,\\frac{9}{10}$.",
            lines: [
              { step: "$\\frac{5}{6}\\times\\,\\frac{9}{10}=\\frac{5\\times\\,9}{6\\times\\,10}$.", reason: "the product formula" },
              { step: "The products are $5\\times\\,9=45$ and $6\\times\\,10=60$.", reason: "multiplying the numerators and multiplying the denominators" },
              { step: "$\\frac{3}{4}$.", reason: "dividing the numerator and the denominator by their common divisor 15" }
            ]
          },
          fade: [
            {
              prompt: "Compute $\\frac{13}{20}\\times\\,\\frac{15}{26}$.",
              answer: "3/8",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\frac{13}{20}\\times\\,\\frac{15}{26}=\\frac{13\\times\\,15}{20\\times\\,26}$.", reason: "the product formula" },
                { step: "The products are $13\\times\\,15=195$ and $20\\times\\,26=520$.", reason: "multiplying the numerators and multiplying the denominators" },
                { step: "$\\frac{3}{8}$.", reason: "dividing the numerator and the denominator by their common divisor 65" }
              ]
            },
            {
              prompt: "Compute $\\frac{7}{12}\\times\\,\\frac{18}{35}$.",
              answer: "3/10",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\frac{7}{12}\\times\\,\\frac{18}{35}=\\frac{7\\times\\,18}{12\\times\\,35}$.", reason: "the product formula" },
                { step: "The products are $7\\times\\,18=126$ and $12\\times\\,35=420$.", reason: "multiplying the numerators and multiplying the denominators" },
                { step: "$\\frac{3}{10}$.", reason: "dividing the numerator and the denominator by their common divisor 42" }
              ]
            },
            {
              prompt: "Compute $\\frac{19}{24}\\times\\,\\frac{8}{57}$.",
              answer: "1/9",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\frac{19}{24}\\times\\,\\frac{8}{57}=\\frac{19\\times\\,8}{24\\times\\,57}$.", reason: "the product formula" },
                { step: "The products are $19\\times\\,8=152$ and $24\\times\\,57=1\\,368$.", reason: "multiplying the numerators and multiplying the denominators" },
                { step: "$\\frac{1}{9}$.", reason: "dividing the numerator and the denominator by their common divisor 152" }
              ]
            }
          ]
        },
        {
          example: {
            problem: "Compute $2\\frac{2}{3}\\times\\,1\\frac{3}{7}$.",
            lines: [
              { step: "Write $2\\frac{2}{3}=\\frac{8}{3}$ and $1\\frac{3}{7}=\\frac{10}{7}$.", reason: "writing each mixed number as an improper fraction" },
              { step: "$\\frac{8}{3}\\times\\,\\frac{10}{7}=\\frac{8\\times\\,10}{3\\times\\,7}$.", reason: "the product formula" },
              { step: "The products are $8\\times\\,10=80$ and $3\\times\\,7=21$.", reason: "multiplying the numerators and multiplying the denominators" },
              { step: "$3\\,\\frac{17}{21}$.", reason: "writing the improper fraction as a mixed number" }
            ]
          },
          fade: [
            {
              prompt: "Compute $3\\frac{1}{5}\\times\\,2\\frac{5}{9}$.",
              answer: "8 8/45",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "Write $3\\frac{1}{5}=\\frac{16}{5}$ and $2\\frac{5}{9}=\\frac{23}{9}$.", reason: "writing each mixed number as an improper fraction" },
                { step: "$\\frac{16}{5}\\times\\,\\frac{23}{9}=\\frac{16\\times\\,23}{5\\times\\,9}$.", reason: "the product formula" },
                { step: "The products are $16\\times\\,23=368$ and $5\\times\\,9=45$.", reason: "multiplying the numerators and multiplying the denominators" },
                { step: "$8\\,\\frac{8}{45}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            },
            {
              prompt: "Compute $3\\frac{1}{2}\\times\\,1\\frac{2}{3}$.",
              answer: "5 5/6",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "Write $3\\frac{1}{2}=\\frac{7}{2}$ and $1\\frac{2}{3}=\\frac{5}{3}$.", reason: "writing each mixed number as an improper fraction" },
                { step: "$\\frac{7}{2}\\times\\,\\frac{5}{3}=\\frac{7\\times\\,5}{2\\times\\,3}$.", reason: "the product formula" },
                { step: "The products are $7\\times\\,5=35$ and $2\\times\\,3=6$.", reason: "multiplying the numerators and multiplying the denominators" },
                { step: "$5\\,\\frac{5}{6}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            },
            {
              prompt: "Compute $2\\frac{3}{4}\\times\\,1\\frac{2}{5}$.",
              answer: "3 17/20",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "Write $2\\frac{3}{4}=\\frac{11}{4}$ and $1\\frac{2}{5}=\\frac{7}{5}$.", reason: "writing each mixed number as an improper fraction" },
                { step: "$\\frac{11}{4}\\times\\,\\frac{7}{5}=\\frac{11\\times\\,7}{4\\times\\,5}$.", reason: "the product formula" },
                { step: "The products are $11\\times\\,7=77$ and $4\\times\\,5=20$.", reason: "multiplying the numerators and multiplying the denominators" },
                { step: "$3\\,\\frac{17}{20}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            }
          ]
        },
        {
          example: {
            problem: "Find the capacity of a container that holds $5\\frac{2}{3}$ copies of a $4.5$-gallon bucket.",
            lines: [
              { step: "The capacity of the container is $5\\frac{2}{3}\\times\\,4.5$ gallons.", reason: "taking $5\\frac{2}{3}$ copies of a quantity means multiplying by $5\\frac{2}{3}$" },
              { step: "Write $5\\frac{2}{3}=\\frac{17}{3}$ and $4.5=\\frac{45}{10}$.", reason: "writing the mixed number and the decimal as fractions" },
              { step: "$\\frac{17}{3}\\times\\,\\frac{45}{10}=\\frac{17\\times\\,45}{3\\times\\,10}$.", reason: "the product formula" },
              { step: "$\\frac{17\\times\\,45}{3\\times\\,10}=\\frac{17\\times\\,15}{10}=\\frac{255}{10}$.", reason: "cancelling the common divisor 3 from 45 and 3 before multiplying" },
              { step: "$25.5$.", reason: "rewriting the fraction as a decimal" }
            ]
          },
          fade: [
            {
              prompt: "Find the capacity of a container that holds $3\\frac{1}{4}$ copies of a $5.2$-gallon bucket.",
              answer: "16.9",
              form: "Answer as a finite decimal, or equivalent.",
              lines: [
                { step: "The capacity of the container is $3\\frac{1}{4}\\times\\,5.2$ gallons.", reason: "taking $3\\frac{1}{4}$ copies of a quantity means multiplying by $3\\frac{1}{4}$" },
                { step: "Write $3\\frac{1}{4}=\\frac{13}{4}$ and $5.2=\\frac{52}{10}$.", reason: "writing the mixed number and the decimal as fractions" },
                { step: "$\\frac{13}{4}\\times\\,\\frac{52}{10}=\\frac{13\\times\\,52}{4\\times\\,10}$.", reason: "the product formula" },
                { step: "$\\frac{13\\times\\,52}{4\\times\\,10}=\\frac{13\\times\\,13}{10}=\\frac{169}{10}$.", reason: "cancelling the common divisor 4 from 52 and 4 before multiplying" },
                { step: "$16.9$.", reason: "rewriting the fraction as a decimal" }
              ]
            },
            {
              prompt: "Find the capacity of a container that holds $4\\frac{1}{7}$ copies of a $2.8$-gallon bucket.",
              answer: "11.6",
              form: "Answer as a finite decimal, or equivalent.",
              lines: [
                { step: "The capacity of the container is $4\\frac{1}{7}\\times\\,2.8$ gallons.", reason: "taking $4\\frac{1}{7}$ copies of a quantity means multiplying by $4\\frac{1}{7}$" },
                { step: "Write $4\\frac{1}{7}=\\frac{29}{7}$ and $2.8=\\frac{28}{10}$.", reason: "writing the mixed number and the decimal as fractions" },
                { step: "$\\frac{29}{7}\\times\\,\\frac{28}{10}=\\frac{29\\times\\,28}{7\\times\\,10}$.", reason: "the product formula" },
                { step: "$\\frac{29\\times\\,28}{7\\times\\,10}=\\frac{29\\times\\,4}{10}=\\frac{116}{10}$.", reason: "cancelling the common divisor 7 from 28 and 7 before multiplying" },
                { step: "$11.6$.", reason: "rewriting the fraction as a decimal" }
              ]
            },
            {
              prompt: "Find the capacity of a container that holds $1\\frac{5}{6}$ copies of a $7.2$-gallon bucket.",
              answer: "13.2",
              form: "Answer as a finite decimal, or equivalent.",
              lines: [
                { step: "The capacity of the container is $1\\frac{5}{6}\\times\\,7.2$ gallons.", reason: "taking $1\\frac{5}{6}$ copies of a quantity means multiplying by $1\\frac{5}{6}$" },
                { step: "Write $1\\frac{5}{6}=\\frac{11}{6}$ and $7.2=\\frac{72}{10}$.", reason: "writing the mixed number and the decimal as fractions" },
                { step: "$\\frac{11}{6}\\times\\,\\frac{72}{10}=\\frac{11\\times\\,72}{6\\times\\,10}$.", reason: "the product formula" },
                { step: "$\\frac{11\\times\\,72}{6\\times\\,10}=\\frac{11\\times\\,12}{10}=\\frac{132}{10}$.", reason: "cancelling the common divisor 6 from 72 and 6 before multiplying" },
                { step: "$13.2$.", reason: "rewriting the fraction as a decimal" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "t17-k2",
      forms: [
        {
          example: {
            problem: "Compute $1.25\\times\\,0.006\\,7$.",
            lines: [
              { step: "The number $1.25$ has 2 decimal digits and $0.006\\,7$ has 4 decimal digits, for a total of 6 decimal digits.", reason: "counting the decimal digits of each factor" },
              { step: "$125\\times\\,67=8\\,375$.", reason: "multiplying the digit strings as whole numbers" },
              { step: "$0.008\\,375$.", reason: "placing the decimal point so the product has 6 decimal digits" }
            ]
          },
          fade: [
            {
              prompt: "Compute $0.36\\times\\,2.4$.",
              answer: "0.864",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "The number $0.36$ has 2 decimal digits and $2.4$ has 1 decimal digit, for a total of 3 decimal digits.", reason: "counting the decimal digits of each factor" },
                { step: "$36\\times\\,24=864$.", reason: "multiplying the digit strings as whole numbers" },
                { step: "$0.864$.", reason: "placing the decimal point so the product has 3 decimal digits" }
              ]
            },
            {
              prompt: "Compute $1.5\\times\\,0.023$.",
              answer: "0.0345",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "The number $1.5$ has 1 decimal digit and $0.023$ has 3 decimal digits, for a total of 4 decimal digits.", reason: "counting the decimal digits of each factor" },
                { step: "$15\\times\\,23=345$.", reason: "multiplying the digit strings as whole numbers" },
                { step: "$0.034\\,5$.", reason: "placing the decimal point so the product has 4 decimal digits" }
              ]
            },
            {
              prompt: "Compute $0.007\\,2\\times\\,3.4$.",
              answer: "0.02448",
              form: "Answer as a finite decimal.",
              lines: [
                { step: "The number $0.007\\,2$ has 4 decimal digits and $3.4$ has 1 decimal digit, for a total of 5 decimal digits.", reason: "counting the decimal digits of each factor" },
                { step: "$72\\times\\,34=2\\,448$.", reason: "multiplying the digit strings as whole numbers" },
                { step: "$0.024\\,48$.", reason: "placing the decimal point so the product has 5 decimal digits" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "t17-k3",
      forms: [
        {
          example: {
            problem: "Compute $\\left(0.516\\times\\,\\frac{14}{25}\\right)-\\left(0.016\\times\\,\\frac{14}{25}\\right)$.",
            lines: [
              { step: "$\\left(0.516\\times\\,\\frac{14}{25}\\right)-\\left(0.016\\times\\,\\frac{14}{25}\\right)=\\frac{14}{25}\\times\\,(0.516-0.016)$.", reason: "the distributive law, since both products share the factor $\\frac{14}{25}$" },
              { step: "$0.516-0.016=0.5$.", reason: "subtracting the decimals" },
              { step: "$\\frac{14}{25}\\times\\,0.5=\\frac{14}{25}\\times\\,\\frac{1}{2}=\\frac{14}{50}=\\frac{7}{25}$.", reason: "writing $0.5$ as a fraction, then the product formula, then reducing to lowest terms" },
              { step: "$0.28$.", reason: "rewriting the fraction as a decimal" }
            ]
          },
          fade: [
            {
              prompt: "Compute $\\left(0.837\\times\\,\\frac{8}{5}\\right)-\\left(0.587\\times\\,\\frac{8}{5}\\right)$.",
              answer: "0.4",
              form: "Answer as a finite decimal, or equivalent.",
              lines: [
                { step: "$\\left(0.837\\times\\,\\frac{8}{5}\\right)-\\left(0.587\\times\\,\\frac{8}{5}\\right)=\\frac{8}{5}\\times\\,(0.837-0.587)$.", reason: "the distributive law, since both products share the factor $\\frac{8}{5}$" },
                { step: "$0.837-0.587=0.25$.", reason: "subtracting the decimals" },
                { step: "$\\frac{8}{5}\\times\\,0.25=\\frac{8}{5}\\times\\,\\frac{1}{4}=\\frac{8}{20}=\\frac{2}{5}$.", reason: "writing $0.25$ as a fraction, then the product formula, then reducing to lowest terms" },
                { step: "$0.4$.", reason: "rewriting the fraction as a decimal" }
              ]
            },
            {
              prompt: "Compute $\\left(1.36\\times\\,\\frac{15}{16}\\right)-\\left(0.56\\times\\,\\frac{15}{16}\\right)$.",
              answer: "0.75",
              form: "Answer as a finite decimal, or equivalent.",
              lines: [
                { step: "$\\left(1.36\\times\\,\\frac{15}{16}\\right)-\\left(0.56\\times\\,\\frac{15}{16}\\right)=\\frac{15}{16}\\times\\,(1.36-0.56)$.", reason: "the distributive law, since both products share the factor $\\frac{15}{16}$" },
                { step: "$1.36-0.56=0.8$.", reason: "subtracting the decimals" },
                { step: "$\\frac{15}{16}\\times\\,0.8=\\frac{15}{16}\\times\\,\\frac{4}{5}=\\frac{60}{80}=\\frac{3}{4}$.", reason: "writing $0.8$ as a fraction, then the product formula, then reducing to lowest terms" },
                { step: "$0.75$.", reason: "rewriting the fraction as a decimal" }
              ]
            },
            {
              prompt: "Compute $\\left(2.418\\times\\,\\frac{9}{8}\\right)-\\left(2.018\\times\\,\\frac{9}{8}\\right)$.",
              answer: "0.45",
              form: "Answer as a finite decimal, or equivalent.",
              lines: [
                { step: "$\\left(2.418\\times\\,\\frac{9}{8}\\right)-\\left(2.018\\times\\,\\frac{9}{8}\\right)=\\frac{9}{8}\\times\\,(2.418-2.018)$.", reason: "the distributive law, since both products share the factor $\\frac{9}{8}$" },
                { step: "$2.418-2.018=0.4$.", reason: "subtracting the decimals" },
                { step: "$\\frac{9}{8}\\times\\,0.4=\\frac{9}{8}\\times\\,\\frac{2}{5}=\\frac{18}{40}=\\frac{9}{20}$.", reason: "writing $0.4$ as a fraction, then the product formula, then reducing to lowest terms" },
                { step: "$0.45$.", reason: "rewriting the fraction as a decimal" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "t17-k4",
      forms: [
        {
          example: {
            problem: "Find the fraction $\\frac mn$ so that $\\frac mn\\times\\,\\frac{5}{2}=\\frac{19}{3}$.",
            lines: [
              { step: "The equation $\\frac mn\\times\\,\\frac{5}{2}=\\frac{19}{3}$ means that $\\frac mn$ is the unique fraction that, multiplied by $\\frac{5}{2}$, gives $\\frac{19}{3}$.", reason: "restating the equation" },
              { step: "$\\frac mn=\\frac{19}{3}\\times\\,\\frac{2}{5}$.", reason: "the lemma on the unique factor, inverting the known factor $\\frac{5}{2}$ to $\\frac{2}{5}$ and multiplying by the target $\\frac{19}{3}$" },
              { step: "$\\frac{19}{3}\\times\\,\\frac{2}{5}=\\frac{19\\times\\,2}{3\\times\\,5}=\\frac{38}{15}$.", reason: "the product formula" },
              { step: "$\\frac{38}{15}$.", reason: "combining the previous two lines" }
            ]
          },
          fade: [
            {
              prompt: "Find the fraction $\\frac mn$ so that $\\frac mn\\times\\,\\frac{3}{4}=\\frac{5}{7}$.",
              answer: "20/21",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "The equation $\\frac mn\\times\\,\\frac{3}{4}=\\frac{5}{7}$ means that $\\frac mn$ is the unique fraction that, multiplied by $\\frac{3}{4}$, gives $\\frac{5}{7}$.", reason: "restating the equation" },
                { step: "$\\frac mn=\\frac{5}{7}\\times\\,\\frac{4}{3}$.", reason: "the lemma on the unique factor, inverting the known factor $\\frac{3}{4}$ to $\\frac{4}{3}$ and multiplying by the target $\\frac{5}{7}$" },
                { step: "$\\frac{5}{7}\\times\\,\\frac{4}{3}=\\frac{5\\times\\,4}{7\\times\\,3}=\\frac{20}{21}$.", reason: "the product formula" },
                { step: "$\\frac{20}{21}$.", reason: "combining the previous two lines" }
              ]
            },
            {
              prompt: "Find the fraction $\\frac mn$ so that $\\frac mn\\times\\,\\frac{7}{2}=\\frac{9}{5}$.",
              answer: "18/35",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "The equation $\\frac mn\\times\\,\\frac{7}{2}=\\frac{9}{5}$ means that $\\frac mn$ is the unique fraction that, multiplied by $\\frac{7}{2}$, gives $\\frac{9}{5}$.", reason: "restating the equation" },
                { step: "$\\frac mn=\\frac{9}{5}\\times\\,\\frac{2}{7}$.", reason: "the lemma on the unique factor, inverting the known factor $\\frac{7}{2}$ to $\\frac{2}{7}$ and multiplying by the target $\\frac{9}{5}$" },
                { step: "$\\frac{9}{5}\\times\\,\\frac{2}{7}=\\frac{9\\times\\,2}{5\\times\\,7}=\\frac{18}{35}$.", reason: "the product formula" },
                { step: "$\\frac{18}{35}$.", reason: "combining the previous two lines" }
              ]
            },
            {
              prompt: "Find the fraction $\\frac mn$ so that $\\frac mn\\times\\,\\frac{4}{9}=\\frac{7}{5}$.",
              answer: "63/20",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "The equation $\\frac mn\\times\\,\\frac{4}{9}=\\frac{7}{5}$ means that $\\frac mn$ is the unique fraction that, multiplied by $\\frac{4}{9}$, gives $\\frac{7}{5}$.", reason: "restating the equation" },
                { step: "$\\frac mn=\\frac{7}{5}\\times\\,\\frac{9}{4}$.", reason: "the lemma on the unique factor, inverting the known factor $\\frac{4}{9}$ to $\\frac{9}{4}$ and multiplying by the target $\\frac{7}{5}$" },
                { step: "$\\frac{7}{5}\\times\\,\\frac{9}{4}=\\frac{7\\times\\,9}{5\\times\\,4}=\\frac{63}{20}$.", reason: "the product formula" },
                { step: "$\\frac{63}{20}$.", reason: "combining the previous two lines" }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t17-k5",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{4}{5}$.",
            "figure": {
              "file": "place:line:4/5",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 4.",
                "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 4 counts the parts from 0"
              },
              {
                "step": "$\\frac{4}{5}=\\frac{4\\times 2}{5\\times 2}=\\frac{8}{10}=0.8$.",
                "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$0.8$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:4/5",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 4/5 lies at 0.8, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{3}{5}$.",
              "answer": "3/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 3.",
                  "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
                },
                {
                  "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.6$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:3/5",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/5 lies at 0.6, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{1}{2}$.",
              "answer": "1/2",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 2 equal parts, and the mark is the end of part 1.",
                  "reason": "the denominator 2 gives the number of equal parts of the unit, and the numerator 1 counts the parts from 0"
                },
                {
                  "step": "$\\frac{1}{2}=\\frac{1\\times 5}{2\\times 5}=\\frac{5}{10}=0.5$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.5$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:1/2",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1/2 lies at 0.5, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{11}{25}$.",
              "answer": "11/25",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 25 equal parts, and the mark is the end of part 11.",
                  "reason": "the denominator 25 gives the number of equal parts of the unit, and the numerator 11 counts the parts from 0"
                },
                {
                  "step": "$\\frac{11}{25}=\\frac{11\\times 4}{25\\times 4}=\\frac{44}{100}=0.44$.",
                  "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.44$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:11/25",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 11/25 lies at 0.44, in the tenth from 0.4 to 0.5, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $1.65$.",
            "figure": {
              "file": "place:line:1.65",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $1.65$ is 1, so the mark lies between 1 and 2.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.65=\\frac{65}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 6 and 5 hundredths follow it, so the mark lies past the 6th cut and short of the next, between $1.6$ and $1.7$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:1.65",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 1.65 marked, between 1 and 2."
                }
              },
              {
                "step": "$1.65$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:1.65",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.65 lies at 1.65, in the tenth from 1.6 to 1.7, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.73$.",
              "answer": "0.73",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.73$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.73=\\frac{73}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and 3 hundredths follow it, so the mark lies past the 7th cut and short of the next, between $0.7$ and $0.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.73$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.73",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.73 lies at 0.73, in the tenth from 0.7 to 0.8, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $4.28$.",
              "answer": "4.28",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $4.28$ is 4, so the mark lies between 4 and 5.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.28=\\frac{28}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 2 and 8 hundredths follow it, so the mark lies past the 2nd cut and short of the next, between $4.2$ and $4.3$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$4.28$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:4.28",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 4.28 lies at 4.28, in the tenth from 4.2 to 4.3, between 4 and 5."
                  }
                }
              ]
            },
            {
              "prompt": "Place $2.56$.",
              "answer": "2.56",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $2.56$ is 2, so the mark lies between 2 and 3.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.56=\\frac{56}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 5 and 6 hundredths follow it, so the mark lies past the 5th cut and short of the next, between $2.5$ and $2.6$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.56$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:2.56",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.56 lies at 2.56, in the tenth from 2.5 to 2.6, between 2 and 3."
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
      id: "c17-p1",
      method: "direct proof",
      statement: "For whole numbers $n>0$ and $\\ell>0$, $\\frac1n\\times\\,\\frac1\\ell=\\frac{1}{n\\ell}$.",
      idea: "Partitioning the unit square into $n\\ell$ congruent rectangles gives each one the area $\\frac{1}{n\\ell}$ two different ways.",
      lines: [
        {
          line: "Divide the vertical sides of the unit square into $n$ equal parts and its horizontal sides into $\\ell$ equal parts. Join the corresponding division points. This partitions the unit square into $n\\ell$ congruent rectangles, each with sides $\\frac1n$ and $\\frac1\\ell$.",
          reason: "each small rectangle lies between one of the $n$ vertical strips and one of the $\\ell$ horizontal strips"
        },
        {
          line: "Each of these rectangles has area $\\frac1n\\times\\,\\frac1\\ell$.",
          reason: "the definition of fraction multiplication as the area of a rectangle with the given sides"
        },
        {
          line: "Each of these $n\\ell$ congruent rectangles also has area $\\frac{1}{n\\ell}$.",
          reason: "the definition of a fraction: one part when you divide the unit area into $n\\ell$ equal parts is $\\frac{1}{n\\ell}$"
        },
        {
          line: "$\\frac1n\\times\\,\\frac1\\ell=\\frac{1}{n\\ell}$.",
          reason: "combining the previous two lines, which both give the area of the same rectangle"
        }
      ]
    },
    {
      id: "c17-p2",
      method: "direct proof",
      statement: "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$, the product is $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}=\\frac{mk}{n\\ell}$.",
      idea: "Dividing a rectangle with sides $\\frac{m}{n}$ and $\\frac{k}{\\ell}$ into unit-fraction rectangles counts its area in two ways.",
      lines: [
        {
          line: "The side of length $\\frac{m}{n}$ consists of $m$ concatenated segments each of length $\\frac1n$. The side of length $\\frac{k}{\\ell}$ consists of $k$ concatenated segments each of length $\\frac1\\ell$.",
          reason: "the definition of a fraction as copies of its unit fraction"
        },
        {
          line: "Join the corresponding division points on opposite sides. This partitions the rectangle with sides $\\frac{m}{n}$ and $\\frac{k}{\\ell}$ into $mk$ congruent rectangles, each with sides $\\frac1n$ and $\\frac1\\ell$.",
          reason: "the $m$-part division of one side and the $k$-part division of the other cut the rectangle into $m\\times\\, k$ small rectangles"
        },
        {
          line: "Each small rectangle has area $\\frac{1}{n\\ell}$.",
          reason: "the product formula for unit fractions"
        },
        {
          line: "The area of the big rectangle is $mk$ copies of $\\frac{1}{n\\ell}$, namely $\\frac{mk}{n\\ell}$.",
          reason: "the definition of a fraction as copies of its unit fraction, applied to the $mk$ small rectangles"
        },
        {
          line: "$\\frac{m}{n}\\times\\,\\frac{k}{\\ell}=\\frac{mk}{n\\ell}$.",
          reason: "the big rectangle has area $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}$ by the definition of fraction multiplication, and also $\\frac{mk}{n\\ell}$ by the previous line"
        }
      ]
    },
    {
      id: "c17-p3",
      method: "direct proof",
      statement: "For fractions $A,B,C$: $A\\times\\,(B+C)=(A\\times\\, B)+(A\\times\\, C)$.",
      idea: "Splitting one side of a rectangle splits the rectangle into two rectangles whose areas add to the whole.",
      lines: [
        {
          line: "Consider a rectangle with one side of length $A$. Let its other side consist of two concatenated segments of lengths $B$ and $C$.",
          reason: "the sum $B+C$ is the length of two concatenated segments of lengths $B$ and $C$"
        },
        {
          line: "This concatenation partitions the big rectangle into two smaller rectangles, one with sides $A,B$ and the other with sides $A,C$.",
          reason: "splitting one side of a rectangle into two concatenated segments splits the rectangle into two rectangles sharing the other side"
        },
        {
          line: "The area of the big rectangle equals the sum of the areas of the two smaller rectangles.",
          reason: "the area of a region equals the sum of the areas of the pieces in a partition of it"
        },
        {
          line: "The big rectangle has area $A\\times\\,(B+C)$, and the two smaller rectangles have areas $A\\times\\, B$ and $A\\times\\, C$.",
          reason: "the definition of fraction multiplication as the area of a rectangle, applied to each of the three rectangles"
        },
        {
          line: "$A\\times\\,(B+C)=(A\\times\\, B)+(A\\times\\, C)$.",
          reason: "combining the previous two lines"
        }
      ]
    },
    {
      id: "c17-p4",
      method: "direct proof",
      statement: "For whole numbers $k,\\ell,m,n$ with $k\\ne0$, $\\ell\\ne0$, $m\\ne0$: $\\frac{\\ell}{k}\\times\\,\\frac{kn}{\\ell m}=\\frac{n}{m}$.",
      idea: "The product formula turns $\\frac{\\ell}{k}\\times\\,\\frac{kn}{\\ell m}$ into one fraction with matching factors in its numerator and denominator, which cancel.",
      lines: [
        {
          line: "$\\frac{\\ell}{k}\\times\\,\\frac{kn}{\\ell m}=\\frac{\\ell\\times\\, kn}{k\\times\\,\\ell m}$.",
          reason: "the product formula"
        },
        {
          line: "$\\frac{\\ell\\times\\, kn}{k\\times\\,\\ell m}=\\frac{\\ell kn}{\\ell km}$.",
          reason: "rearranging the factors in the numerator and in the denominator"
        },
        {
          line: "$\\frac{\\ell kn}{\\ell km}=\\frac{n}{m}$.",
          reason: "the cancellation law for fractions, cancelling the common divisor $\\ell k$ from the numerator and the denominator"
        },
        {
          line: "$\\frac{\\ell}{k}\\times\\,\\frac{kn}{\\ell m}=\\frac{n}{m}$.",
          reason: "combining the previous equalities"
        }
      ]
    },
    {
      id: "c17-p5",
      method: "proof of existence by construction",
      statement: "Given a nonzero fraction $\\frac{k}{\\ell}$, for every fraction $\\frac{m}{n}$ there is exactly one fraction $A$ so that $A\\times\\,\\frac{k}{\\ell}=\\frac{m}{n}$, namely $A=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$.",
      idea: "Multiplying both sides of $A\\times\\,\\frac{k}{\\ell}=\\frac{m}{n}$ by $\\frac{\\ell}{k}$ isolates $A$, and the same step shows no other fraction works.",
      lines: [
        {
          line: "$\\left(\\frac{m}{n}\\times\\,\\frac{\\ell}{k}\\right)\\times\\,\\frac{k}{\\ell}=\\frac{m}{n}\\times\\,\\left(\\frac{\\ell}{k}\\times\\,\\frac{k}{\\ell}\\right)$.",
          reason: "the product formula and the associative law of multiplication for whole numbers, regrouping the three numerator-denominator products"
        },
        {
          line: "$\\frac{\\ell}{k}\\times\\,\\frac{k}{\\ell}=1$.",
          reason: "the cancellation law, taking a nonzero fraction and its reciprocal"
        },
        {
          line: "$\\frac{m}{n}\\times\\,\\left(\\frac{\\ell}{k}\\times\\,\\frac{k}{\\ell}\\right)=\\frac{m}{n}\\times\\,1=\\frac{m}{n}$.",
          reason: "multiplying a fraction by 1 leaves it unchanged"
        },
        {
          line: "$\\left(\\frac{m}{n}\\times\\,\\frac{\\ell}{k}\\right)\\times\\,\\frac{k}{\\ell}=\\frac{m}{n}$.",
          reason: "combining the previous lines"
        },
        {
          line: "If $B$ is a fraction with $B\\times\\,\\frac{k}{\\ell}=\\frac{m}{n}$, then multiplying both sides by $\\frac{\\ell}{k}$ gives $B\\times\\,\\left(\\frac{k}{\\ell}\\times\\,\\frac{\\ell}{k}\\right)=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$.",
          reason: "multiplying both sides of an equality by the same fraction preserves the equality"
        },
        {
          line: "$B\\times\\,\\left(\\frac{k}{\\ell}\\times\\,\\frac{\\ell}{k}\\right)=B\\times\\,1=B$, so $B=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$.",
          reason: "the cancellation law, and multiplying a fraction by 1"
        },
        {
          line: "So $A=\\frac{m}{n}\\times\\,\\frac{\\ell}{k}$ satisfies $A\\times\\,\\frac{k}{\\ell}=\\frac{m}{n}$, and it is the only fraction that does.",
          reason: "combining the existence and the uniqueness proved above"
        }
      ]
    },
    {
      id: "c17-p6",
      method: "direct proof",
      statement: "For fractions $\\frac{m}{n}$ and $\\frac{k}{\\ell}$: $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}$ equals $\\frac{m}{n}$ of $\\frac{k}{\\ell}$. This is the length of $m$ concatenated parts when you divide a segment of length $\\frac{k}{\\ell}$ into $n$ equal parts.",
      idea: "Repeated addition turns $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}$ into $m$ copies of one $n$-th part of $\\frac{k}{\\ell}$.",
      lines: [
        {
          line: "$\\frac{m}{n}=m\\times\\,\\frac1n$.",
          reason: "the definition of a fraction as $m$ copies of its unit fraction, restated as repeated addition"
        },
        {
          line: "$\\frac{m}{n}\\times\\,\\frac{k}{\\ell}=\\left(m\\times\\,\\frac1n\\right)\\times\\,\\frac{k}{\\ell}=m\\times\\,\\left(\\frac1n\\times\\,\\frac{k}{\\ell}\\right)$.",
          reason: "the product formula and the associative law of multiplication for whole numbers, regrouping the three numerator-denominator products"
        },
        {
          line: "$\\frac1n\\times\\,\\frac{k}{\\ell}=\\frac{k}{n\\ell}$.",
          reason: "the product formula"
        },
        {
          line: "So $n$ copies of $\\frac{k}{n\\ell}$ equal $\\frac{k}{\\ell}$.",
          reason: "the fact that $n\\times\\,\\frac{k}{n\\ell}=\\frac{nk}{n\\ell}=\\frac{k}{\\ell}$, by repeated addition and the cancellation law"
        },
        {
          line: "So $\\frac1n\\times\\,\\frac{k}{\\ell}$ is the length of one part when you divide a segment of length $\\frac{k}{\\ell}$ into $n$ equal parts.",
          reason: "the previous line shows $n$ copies of $\\frac1n\\times\\,\\frac{k}{\\ell}$ concatenate to $\\frac{k}{\\ell}$, which defines dividing $\\frac{k}{\\ell}$ into $n$ equal parts"
        },
        {
          line: "So $m\\times\\,\\left(\\frac1n\\times\\,\\frac{k}{\\ell}\\right)$ is the length of $m$ concatenated parts of a segment of length $\\frac{k}{\\ell}$ divided into $n$ equal parts.",
          reason: "repeated addition of $m$ copies of the one-part length identified in the previous line"
        },
        {
          line: "So $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}$ is the length of $m$ concatenated parts of a segment of length $\\frac{k}{\\ell}$ divided into $n$ equal parts. This length is $\\frac{m}{n}$ of $\\frac{k}{\\ell}$.",
          reason: "the product $\\frac{m}{n}\\times\\,\\frac{k}{\\ell}$ equals $m\\times\\,\\left(\\frac1n\\times\\,\\frac{k}{\\ell}\\right)$, so the length from the previous line applies to it"
        }
      ]
    },
    {
      id: "c17-p7",
      method: "direct proof",
      statement: "Let $x,y$ be finite decimals with $p,q$ decimal digits respectively. Multiply their digit strings as whole numbers, then place the decimal point so the result has $p+q$ decimal digits. The result equals $x\\times\\, y$.",
      idea: "Writing each decimal over a power of 10 turns their product into a whole-number product over a power of 10.",
      lines: [
        {
          line: "Write $x=\\frac{a}{10^p}$ and $y=\\frac{b}{10^q}$ for whole numbers $a,b$.",
          reason: "the definition of a finite decimal with $p$ and $q$ decimal digits"
        },
        {
          line: "$x\\times\\, y=\\frac{a}{10^p}\\times\\,\\frac{b}{10^q}=\\frac{ab}{10^p\\times\\,10^q}$.",
          reason: "the product formula"
        },
        {
          line: "$10^p\\times\\,10^q=10^{p+q}$.",
          reason: "the law of exponents for powers of 10"
        },
        {
          line: "$x\\times\\, y=\\frac{ab}{10^{p+q}}$.",
          reason: "combining the previous two lines"
        },
        {
          line: "The product $a\\times\\, b$ is the whole number from multiplying the digit strings of $x$ and $y$, ignoring their decimal points.",
          reason: "the whole numbers $a$ and $b$ are those digit strings"
        },
        {
          line: "The fraction $\\frac{ab}{10^{p+q}}$ is the decimal with $p+q$ decimal digits whose digit string is $ab$.",
          reason: "the definition of a finite decimal, read in reverse"
        },
        {
          line: "The whole number $a\\times\\, b$, with its decimal point placed so it has $p+q$ decimal digits, equals $x\\times\\, y$.",
          reason: "combining the previous two lines"
        }
      ]
    }
  ],
  prove: [
    {
      id: "t17-s1",
      statement: "For fractions $A$ and $B$: $A\\times\\, B=B\\times\\, A$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "Take a rectangle $R$ with vertical side $A$ and horizontal side $B$.", reason: "the definition of fraction multiplication as the area of a rectangle" },
          { line: "Rotating $R$ a quarter turn gives a rectangle $R'$ with vertical side $B$ and horizontal side $A$.", reason: "a quarter turn exchanges the vertical and horizontal sides of a rectangle" },
          { line: "So $R$ and $R'$ are congruent.", reason: "a rotation carries a figure to a congruent figure" },
          { line: "So $R$ and $R'$ have the same area.", reason: "congruent figures have equal area" },
          { line: "The product $A\\times\\, B$ is the area of $R$, and $B\\times\\, A$ is the area of $R'$.", reason: "the definition of fraction multiplication, applied to each rectangle" },
          { line: "$A\\times\\, B=B\\times\\, A$.", reason: "combining the previous two lines" }
        ]
      }
    },
    {
      id: "t17-s2",
      statement: "For fractions $A,B,C$: $(A\\times\\, B)\\times\\, C=A\\times\\,(B\\times\\, C)$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "Write $A=\\frac pq$, $B=\\frac rs$, $C=\\frac tu$.", reason: "notation for the three fractions" },
          { line: "$(A\\times\\, B)\\times\\, C=\\left(\\frac{pr}{qs}\\right)\\times\\,\\frac tu=\\frac{(pr)t}{(qs)u}$.", reason: "the product formula, applied twice" },
          { line: "$A\\times\\,(B\\times\\, C)=\\frac pq\\times\\,\\left(\\frac{rt}{su}\\right)=\\frac{p(rt)}{q(su)}$.", reason: "the product formula, applied twice" },
          { line: "The products satisfy $(pr)t=p(rt)$ and $(qs)u=q(su)$.", reason: "the associative law of multiplication for whole numbers" },
          { line: "$(A\\times\\, B)\\times\\, C=A\\times\\,(B\\times\\, C)$.", reason: "combining the previous two lines, since both sides equal the same fraction" }
        ]
      }
    },
    {
      id: "t17-s3",
      statement: "For fractions $A,B,C$ with $C<B$: $A\\times\\,(B-C)=(A\\times\\, B)-(A\\times\\, C)$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "The difference $B-C$ is the fraction $D$ so that $D+C=B$.", reason: "the definition of subtraction for fractions" },
          { line: "$A\\times\\, B=A\\times\\,(D+C)=(A\\times\\, D)+(A\\times\\, C)$.", reason: "substituting $B=D+C$, then the distributive law for addition" },
          { line: "$A\\times\\, D=(A\\times\\, B)-(A\\times\\, C)$.", reason: "subtracting $A\\times\\, C$ from both sides of the previous line" },
          { line: "$A\\times\\,(B-C)=(A\\times\\, B)-(A\\times\\, C)$.", reason: "the fact that $D=B-C$, so the previous line is the statement" }
        ]
      }
    },
    {
      id: "t17-s4",
      statement: "For every fraction $A$, there is a fraction $B$ so that $A\\times\\, B$ is a whole number.",
      method: "proof of existence by construction",
      check: {
        proof: [
          { line: "Write $A=\\frac pq$ for whole numbers $p,q$ with $q\\ne0$.", reason: "the definition of a fraction" },
          { line: "Let $B=q$.", reason: "taking the denominator of $A$ itself as a whole number" },
          { line: "$A\\times\\, B=\\frac pq\\times\\,\\frac q1=\\frac{pq}{q}$.", reason: "the product formula, writing the whole number $q$ as the fraction $\\frac q1$" },
          { line: "$\\frac{pq}{q}=p$.", reason: "the cancellation law, cancelling the common divisor $q$" },
          { line: "So $A\\times\\, B$ is the whole number $p$.", reason: "combining the previous two lines" }
        ]
      }
    },
    {
      id: "t17-s5",
      statement: "Take finite decimals $x$ and $y$ with digit strings $a$ and $b$, and with $p$ and $q$ decimal digits respectively. Then the whole number $10a\\times\\, b$, with its decimal point placed so the result has $p+q+1$ decimal digits, equals $x\\times\\, y$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "Write $x=\\frac{a}{10^p}$ and $y=\\frac{b}{10^q}$.", reason: "the definition of a finite decimal with $p$ and $q$ decimal digits" },
          { line: "$x=\\frac{10a}{10^{p+1}}$.", reason: "multiplying the numerator and the denominator of $x$ by 10" },
          { line: "$x\\times\\, y=\\frac{10a}{10^{p+1}}\\times\\,\\frac{b}{10^q}=\\frac{(10a)b}{10^{p+1}\\times\\,10^q}$.", reason: "the product formula, using the rewritten form of $x$" },
          { line: "$10^{p+1}\\times\\,10^q=10^{p+q+1}$.", reason: "the law of exponents for powers of 10" },
          { line: "$x\\times\\, y=\\frac{(10a)b}{10^{p+q+1}}$.", reason: "combining the previous two lines" },
          { line: "The whole number $10a\\times\\, b$, with its decimal point placed so it has $p+q+1$ decimal digits, equals $x\\times\\, y$.", reason: "the definition of a finite decimal, read in reverse, applied to the previous line" }
        ]
      }
    },
    {
      id: "t17-s6",
      statement: "For fractions $A,B,C$ with $A>0$: the inequality $AB<AC$ is equivalent to $B<C$.",
      method: "proof by contradiction",
      check: {
        proof: [
          { line: "Suppose that $B<C$.", reason: "the first direction to prove" },
          { line: "Write $C=B+D$ for a positive fraction $D$.", reason: "the definition of order for fractions" },
          { line: "$AC=A\\times\\,(B+D)=(A\\times\\, B)+(A\\times\\, D)$.", reason: "substituting $C=B+D$, then the distributive law" },
          { line: "The product $A\\times\\, D$ is a positive fraction.", reason: "it is the area of a rectangle with positive sides $A$ and $D$" },
          { line: "The product $AC$ equals the sum $AB+(A\\times\\, D)$, which exceeds $AB$, so $AB<AC$.", reason: "adding a positive fraction to $AB$ gives a fraction greater than $AB$" },
          { line: "Suppose instead that $AB<AC$, and suppose, for contradiction, that $B=C$ or $B>C$.", reason: "the converse direction, argued by contradiction" },
          { line: "If $B=C$, then $AB=AC$, which contradicts $AB<AC$. If $B>C$, the direction proved above, applied to $C<B$, gives $AC<AB$, which also contradicts $AB<AC$.", reason: "the trichotomy of order for fractions, and the direction already proved" },
          { line: "So $B<C$.", reason: "the contradiction rules out $B=C$ and $B>C$" },
          { line: "So $AB<AC$ is equivalent to $B<C$.", reason: "combining both directions" }
        ]
      }
    }
  ]
}
