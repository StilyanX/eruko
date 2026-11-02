export default {
  number: 19,
  manyParts: false,
  bare: {
    prompt: "Compute $\\dfrac{\\frac{3}{4}}{\\frac{5}{6}}$.",
    answer: "9/10",
    form: "Answer as a fraction in lowest terms, or equivalent.",
    solution: [
      "Compute $\\dfrac{\\frac{3}{4}}{\\frac{5}{6}}$.",
      "$\\dfrac{\\frac{3}{4}}{\\frac{5}{6}}=\\frac{3}{4}\\div\\,\\frac{5}{6}=\\frac{3}{4}\\times\\,\\frac{6}{5}$, by the definition of a complex fraction and invert-and-multiply.",
      "$\\frac{3}{4}\\times\\,\\frac{6}{5}=\\frac{18}{20}=\\frac{9}{10}$, by the product formula, then dividing the numerator and the denominator by their common divisor 2.",
      "$\\frac{9}{10}$."
    ]
  },
  ideas: [
    {
      name: "Complex fraction",
      concrete: "Here, $\\dfrac{\\frac{3}{2}}{\\frac{4}{5}}$ is a complex fraction, with numerator $\\frac{3}{2}$ and denominator $\\frac{4}{5}$.",
      general: "For fractions $A$ and $C$, with $C\\ne0$: $\\dfrac{A}{C}$ is a **complex fraction**, equal to $A\\div\\,C$."
    },
    {
      name: "A fraction times a complex fraction",
      concrete: "Here, $\\frac{2}{7}\\times\\,\\dfrac{22/3}{13/5}=\\dfrac{\\frac{2}{7}\\times\\,\\frac{22}{3}}{\\frac{13}{5}}$.",
      general: "For fractions $A,B,C$, with $C\\ne0$: $A\\times\\,\\dfrac{B}{C}=\\dfrac{AB}{C}$."
    },
    {
      name: "Cancellation in a complex fraction",
      concrete: "Here, $\\dfrac{\\frac{5}{16}\\times\\,\\frac{17}{7}}{\\frac{2}{3}\\times\\,\\frac{17}{7}}=\\dfrac{5/16}{2/3}$.",
      general: "For fractions $A,B,C$, with $B,C\\ne0$: $\\dfrac{AC}{BC}=\\dfrac{A}{B}$."
    },
    {
      name: "Comparing complex fractions",
      concrete: "Here, $\\dfrac12=\\dfrac24$, because $1\\times\\,4=2\\times\\,2$. Also $\\dfrac13<\\dfrac12$, because $1\\times\\,2<3\\times\\,1$.",
      general: "For fractions $A,B,C,D$, with $B,D\\ne0$: $\\dfrac{A}{B}=\\dfrac{C}{D}$ exactly when $AD=BC$, and $\\dfrac{A}{B}<\\dfrac{C}{D}$ exactly when $AD<BC$."
    },
    {
      name: "Adding or subtracting complex fractions",
      concrete: "Here, $\\dfrac{0.3}{2.5}+\\dfrac{5}{1.7}=\\dfrac{(0.3\\times\\,1.7)+(2.5\\times\\,5)}{2.5\\times\\,1.7}$.",
      general: "For fractions $A,B,C,D$, with $B,D\\ne0$: $\\dfrac{A}{B}\\pm\\,\\dfrac{C}{D}=\\dfrac{(AD)\\pm(BC)}{BD}$. The minus sign needs $\\dfrac{A}{B}\\ge\\dfrac{C}{D}$."
    },
    {
      name: "Multiplying complex fractions",
      concrete: "Here, $\\dfrac{12.5}{7/8}\\times\\,\\dfrac{4/5}{6.2}=\\dfrac{12.5\\times\\,\\frac{4}{5}}{\\frac{7}{8}\\times\\,6.2}$.",
      general: "For fractions $A,B,C,D$, with $B,D\\ne0$: $\\dfrac{A}{B}\\times\\,\\dfrac{C}{D}=\\dfrac{AC}{BD}$."
    },
    {
      name: "The distributive law for complex fractions",
      concrete: "Here, $\\dfrac{0.5}{1.7}\\times\\,\\left(\\dfrac{2}{5}+\\dfrac{6}{9}\\right)=\\dfrac{0.5}{1.7}\\times\\,\\dfrac25+\\dfrac{0.5}{1.7}\\times\\,\\dfrac69$.",
      general: "For fractions $A,B,C,D,E,F$, with $B,D,F\\ne0$: $\\dfrac{A}{B}\\times\\,\\left(\\dfrac{C}{D}\\pm\\,\\dfrac{E}{F}\\right)=\\dfrac{A}{B}\\times\\,\\dfrac{C}{D}\\pm\\,\\dfrac{A}{B}\\times\\,\\dfrac{E}{F}$. The minus sign needs $\\dfrac{C}{D}\\ge\\dfrac{E}{F}$."
    }
  ],
  kinds: [
    {
      id: "t19-k1",
      forms: [
        {
          example: {
            problem: "Compute $\\dfrac{\\frac{3}{2}}{\\frac{4}{5}}$.",
            lines: [
              { step: "$\\dfrac{\\frac{3}{2}}{\\frac{4}{5}}=\\frac{3}{2}\\div\\,\\frac{4}{5}$.", reason: "the definition of a complex fraction" },
              { step: "$\\frac{3}{2}\\div\\,\\frac{4}{5}=\\frac{3}{2}\\times\\,\\frac{5}{4}$.", reason: "invert-and-multiply" },
              { step: "$\\frac{3}{2}\\times\\,\\frac{5}{4}=\\frac{15}{8}$.", reason: "the product formula" },
              { step: "$1\\,\\frac{7}{8}$.", reason: "writing the improper fraction as a mixed number" }
            ]
          },
          fade: [
            {
              prompt: "Compute $\\dfrac{\\frac{5}{3}}{\\frac{2}{7}}$.",
              answer: "5 5/6",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{\\frac{5}{3}}{\\frac{2}{7}}=\\frac{5}{3}\\div\\,\\frac{2}{7}$.", reason: "the definition of a complex fraction" },
                { step: "$\\frac{5}{3}\\div\\,\\frac{2}{7}=\\frac{5}{3}\\times\\,\\frac{7}{2}$.", reason: "invert-and-multiply" },
                { step: "$\\frac{5}{3}\\times\\,\\frac{7}{2}=\\frac{35}{6}$.", reason: "the product formula" },
                { step: "$5\\,\\frac{5}{6}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{\\frac{7}{4}}{\\frac{3}{5}}$.",
              answer: "2 11/12",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{\\frac{7}{4}}{\\frac{3}{5}}=\\frac{7}{4}\\div\\,\\frac{3}{5}$.", reason: "the definition of a complex fraction" },
                { step: "$\\frac{7}{4}\\div\\,\\frac{3}{5}=\\frac{7}{4}\\times\\,\\frac{5}{3}$.", reason: "invert-and-multiply" },
                { step: "$\\frac{7}{4}\\times\\,\\frac{5}{3}=\\frac{35}{12}$.", reason: "the product formula" },
                { step: "$2\\,\\frac{11}{12}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{\\frac{9}{5}}{\\frac{2}{3}}$.",
              answer: "2 7/10",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{\\frac{9}{5}}{\\frac{2}{3}}=\\frac{9}{5}\\div\\,\\frac{2}{3}$.", reason: "the definition of a complex fraction" },
                { step: "$\\frac{9}{5}\\div\\,\\frac{2}{3}=\\frac{9}{5}\\times\\,\\frac{3}{2}$.", reason: "invert-and-multiply" },
                { step: "$\\frac{9}{5}\\times\\,\\frac{3}{2}=\\frac{27}{10}$.", reason: "the product formula" },
                { step: "$2\\,\\frac{7}{10}$.", reason: "writing the improper fraction as a mixed number" }
              ]
            }
          ]
        },
        {
          example: {
            problem: "Compute $\\dfrac{\\frac{5}{16}\\times\\,\\frac{17}{7}}{\\frac{2}{3}\\times\\,\\frac{17}{7}}$.",
            lines: [
              { step: "$\\dfrac{\\frac{5}{16}\\times\\,\\frac{17}{7}}{\\frac{2}{3}\\times\\,\\frac{17}{7}}=\\dfrac{\\frac{5}{16}}{\\frac{2}{3}}$.", reason: "cancellation in a complex fraction, cancelling the common divisor $\\frac{17}{7}$" },
              { step: "$\\dfrac{\\frac{5}{16}}{\\frac{2}{3}}=\\frac{5}{16}\\div\\,\\frac{2}{3}=\\frac{5}{16}\\times\\,\\frac{3}{2}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
              { step: "$\\frac{5}{16}\\times\\,\\frac{3}{2}=\\frac{15}{32}$.", reason: "the product formula" },
              { step: "$\\frac{15}{32}$.", reason: "the fraction is already in lowest terms" }
            ]
          },
          fade: [
            {
              prompt: "Compute $\\dfrac{\\frac{3}{7}\\times\\,\\frac{9}{11}}{\\frac{5}{6}\\times\\,\\frac{9}{11}}$.",
              answer: "18/35",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{\\frac{3}{7}\\times\\,\\frac{9}{11}}{\\frac{5}{6}\\times\\,\\frac{9}{11}}=\\dfrac{\\frac{3}{7}}{\\frac{5}{6}}$.", reason: "cancellation in a complex fraction, cancelling the common divisor $\\frac{9}{11}$" },
                { step: "$\\dfrac{\\frac{3}{7}}{\\frac{5}{6}}=\\frac{3}{7}\\div\\,\\frac{5}{6}=\\frac{3}{7}\\times\\,\\frac{6}{5}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
                { step: "$\\frac{3}{7}\\times\\,\\frac{6}{5}=\\frac{18}{35}$.", reason: "the product formula" },
                { step: "$\\frac{18}{35}$.", reason: "the fraction is already in lowest terms" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{\\frac{2}{9}\\times\\,\\frac{5}{13}}{\\frac{3}{4}\\times\\,\\frac{5}{13}}$.",
              answer: "8/27",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{\\frac{2}{9}\\times\\,\\frac{5}{13}}{\\frac{3}{4}\\times\\,\\frac{5}{13}}=\\dfrac{\\frac{2}{9}}{\\frac{3}{4}}$.", reason: "cancellation in a complex fraction, cancelling the common divisor $\\frac{5}{13}$" },
                { step: "$\\dfrac{\\frac{2}{9}}{\\frac{3}{4}}=\\frac{2}{9}\\div\\,\\frac{3}{4}=\\frac{2}{9}\\times\\,\\frac{4}{3}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
                { step: "$\\frac{2}{9}\\times\\,\\frac{4}{3}=\\frac{8}{27}$.", reason: "the product formula" },
                { step: "$\\frac{8}{27}$.", reason: "the fraction is already in lowest terms" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{\\frac{4}{11}\\times\\,\\frac{7}{3}}{\\frac{5}{8}\\times\\,\\frac{7}{3}}$.",
              answer: "32/55",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{\\frac{4}{11}\\times\\,\\frac{7}{3}}{\\frac{5}{8}\\times\\,\\frac{7}{3}}=\\dfrac{\\frac{4}{11}}{\\frac{5}{8}}$.", reason: "cancellation in a complex fraction, cancelling the common divisor $\\frac{7}{3}$" },
                { step: "$\\dfrac{\\frac{4}{11}}{\\frac{5}{8}}=\\frac{4}{11}\\div\\,\\frac{5}{8}=\\frac{4}{11}\\times\\,\\frac{8}{5}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
                { step: "$\\frac{4}{11}\\times\\,\\frac{8}{5}=\\frac{32}{55}$.", reason: "the product formula" },
                { step: "$\\frac{32}{55}$.", reason: "the fraction is already in lowest terms" }
              ]
            }
          ]
        },
        {
          example: {
            problem: "Find the two parts $A$ and $B$ that 88 splits into, so that $\\dfrac{A}{B}=\\dfrac{2/3}{4/5}$.",
            lines: [
              { step: "$\\dfrac{2/3}{4/5}=\\frac{2}{3}\\div\\,\\frac{4}{5}=\\frac{2}{3}\\times\\,\\frac{5}{4}=\\frac{10}{12}=\\frac{5}{6}$.", reason: "the definition of a complex fraction, invert-and-multiply, then reducing to lowest terms" },
              { step: "Write $A=5u$ and $B=6u$, for some fraction $u$.", reason: "since $\\frac{5}{6}$ is in lowest terms, every fraction equal to it has the form $\\frac{5u}{6u}$, by the cancellation law" },
              { step: "$5u+6u=88$, because $A+B=88$.", reason: "substituting $A=5u$ and $B=6u$" },
              { step: "$11u=88$, so $u=8$.", reason: "the distributive law, then division" },
              { step: "$40$, $48$.", reason: "substituting $u=8$ into $A=5u$ and $B=6u$" }
            ]
          },
          fade: [
            {
              prompt: "Find the two parts $A$ and $B$ that 63 splits into, so that $\\dfrac{A}{B}=\\dfrac{5/3}{2/3}$.",
              answer: "45, 18",
              form: "Answer as whole numbers separated by commas, in the order asked.",
              lines: [
                { step: "$\\dfrac{5/3}{2/3}=\\frac{5}{3}\\div\\,\\frac{2}{3}=\\frac{5}{3}\\times\\,\\frac{3}{2}=\\frac{15}{6}=\\frac{5}{2}$.", reason: "the definition of a complex fraction, invert-and-multiply, then reducing to lowest terms" },
                { step: "Write $A=5u$ and $B=2u$, for some fraction $u$.", reason: "since $\\frac{5}{2}$ is in lowest terms, every fraction equal to it has the form $\\frac{5u}{2u}$, by the cancellation law" },
                { step: "$5u+2u=63$, because $A+B=63$.", reason: "substituting $A=5u$ and $B=2u$" },
                { step: "$7u=63$, so $u=9$.", reason: "the distributive law, then division" },
                { step: "$45$, $18$.", reason: "substituting $u=9$ into $A=5u$ and $B=2u$" }
              ]
            },
            {
              prompt: "Find the two parts $A$ and $B$ that 100 splits into, so that $\\dfrac{A}{B}=\\dfrac{9/10}{3/5}$.",
              answer: "60, 40",
              form: "Answer as whole numbers separated by commas, in the order asked.",
              lines: [
                { step: "$\\dfrac{9/10}{3/5}=\\frac{9}{10}\\div\\,\\frac{3}{5}=\\frac{9}{10}\\times\\,\\frac{5}{3}=\\frac{45}{30}=\\frac{3}{2}$.", reason: "the definition of a complex fraction, invert-and-multiply, then reducing to lowest terms" },
                { step: "Write $A=3u$ and $B=2u$, for some fraction $u$.", reason: "since $\\frac{3}{2}$ is in lowest terms, every fraction equal to it has the form $\\frac{3u}{2u}$, by the cancellation law" },
                { step: "$3u+2u=100$, because $A+B=100$.", reason: "substituting $A=3u$ and $B=2u$" },
                { step: "$5u=100$, so $u=20$.", reason: "the distributive law, then division" },
                { step: "$60$, $40$.", reason: "substituting $u=20$ into $A=3u$ and $B=2u$" }
              ]
            },
            {
              prompt: "Find the two parts $A$ and $B$ that 90 splits into, so that $\\dfrac{A}{B}=\\dfrac{7/5}{2/5}$.",
              answer: "70, 20",
              form: "Answer as whole numbers separated by commas, in the order asked.",
              lines: [
                { step: "$\\dfrac{7/5}{2/5}=\\frac{7}{5}\\div\\,\\frac{2}{5}=\\frac{7}{5}\\times\\,\\frac{5}{2}=\\frac{35}{10}=\\frac{7}{2}$.", reason: "the definition of a complex fraction, invert-and-multiply, then reducing to lowest terms" },
                { step: "Write $A=7u$ and $B=2u$, for some fraction $u$.", reason: "since $\\frac{7}{2}$ is in lowest terms, every fraction equal to it has the form $\\frac{7u}{2u}$, by the cancellation law" },
                { step: "$7u+2u=90$, because $A+B=90$.", reason: "substituting $A=7u$ and $B=2u$" },
                { step: "$9u=90$, so $u=10$.", reason: "the distributive law, then division" },
                { step: "$70$, $20$.", reason: "substituting $u=10$ into $A=7u$ and $B=2u$" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "t19-k2",
      forms: [
        {
          example: {
            problem: "Decide whether $\\dfrac{1/2}{3/4}$ is less than $\\dfrac{2/3}{5/6}$.",
            lines: [
              { step: "Write $A=\\frac{1}{2},B=\\frac{3}{4},C=\\frac{2}{3},D=\\frac{5}{6}$. Compare $AD$ and $BC$.", reason: "the comparison rule for complex fractions" },
              { step: "$AD=\\frac{1}{2}\\times\\,\\frac{5}{6}=\\frac{5}{12}$.", reason: "the product formula" },
              { step: "$BC=\\frac{3}{4}\\times\\,\\frac{2}{3}=\\frac{6}{12}$.", reason: "the product formula" },
              { step: "$\\frac{5}{12}<\\frac{6}{12}$, so $AD<BC$.", reason: "comparing fractions with equal denominators" },
              { step: "Yes.", reason: "since $AD<BC$ means $\\dfrac{A}{B}<\\dfrac{C}{D}$" }
            ]
          },
          fade: [
            {
              prompt: "Decide whether $\\dfrac{1/6}{5/9}$ is less than $\\dfrac{1/2}{2/3}$.",
              answer: "Yes",
              form: "Answer as Yes or No.",
              lines: [
                { step: "Write $A=\\frac{1}{6},B=\\frac{5}{9},C=\\frac{1}{2},D=\\frac{2}{3}$. Compare $AD$ and $BC$.", reason: "the comparison rule for complex fractions" },
                { step: "$AD=\\frac{1}{6}\\times\\,\\frac{2}{3}=\\frac{2}{18}$.", reason: "the product formula" },
                { step: "$BC=\\frac{5}{9}\\times\\,\\frac{1}{2}=\\frac{5}{18}$.", reason: "the product formula" },
                { step: "$\\frac{2}{18}<\\frac{5}{18}$, so $AD<BC$.", reason: "comparing fractions with equal denominators" },
                { step: "Yes.", reason: "since $AD<BC$ means $\\dfrac{A}{B}<\\dfrac{C}{D}$" }
              ]
            },
            {
              prompt: "Decide whether $\\dfrac{1/8}{2/5}$ is less than $\\dfrac{5/8}{3/5}$.",
              answer: "Yes",
              form: "Answer as Yes or No.",
              lines: [
                { step: "Write $A=\\frac{1}{8},B=\\frac{2}{5},C=\\frac{5}{8},D=\\frac{3}{5}$. Compare $AD$ and $BC$.", reason: "the comparison rule for complex fractions" },
                { step: "$AD=\\frac{1}{8}\\times\\,\\frac{3}{5}=\\frac{3}{40}$.", reason: "the product formula" },
                { step: "$BC=\\frac{2}{5}\\times\\,\\frac{5}{8}=\\frac{10}{40}$.", reason: "the product formula" },
                { step: "$\\frac{3}{40}<\\frac{10}{40}$, so $AD<BC$.", reason: "comparing fractions with equal denominators" },
                { step: "Yes.", reason: "since $AD<BC$ means $\\dfrac{A}{B}<\\dfrac{C}{D}$" }
              ]
            },
            {
              prompt: "Decide whether $\\dfrac{1/4}{3/4}$ is less than $\\dfrac{1/5}{2/5}$.",
              answer: "Yes",
              form: "Answer as Yes or No.",
              lines: [
                { step: "Write $A=\\frac{1}{4},B=\\frac{3}{4},C=\\frac{1}{5},D=\\frac{2}{5}$. Compare $AD$ and $BC$.", reason: "the comparison rule for complex fractions" },
                { step: "$AD=\\frac{1}{4}\\times\\,\\frac{2}{5}=\\frac{2}{20}$.", reason: "the product formula" },
                { step: "$BC=\\frac{3}{4}\\times\\,\\frac{1}{5}=\\frac{3}{20}$.", reason: "the product formula" },
                { step: "$\\frac{2}{20}<\\frac{3}{20}$, so $AD<BC$.", reason: "comparing fractions with equal denominators" },
                { step: "Yes.", reason: "since $AD<BC$ means $\\dfrac{A}{B}<\\dfrac{C}{D}$" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "t19-k3",
      forms: [
        {
          example: {
            problem: "Compute $\\dfrac{2/3}{5}+\\dfrac{1/4}{2}$.",
            lines: [
              { step: "$\\dfrac{2/3}{5}+\\dfrac{1/4}{2}=\\dfrac{(5\\times\\,\\frac{1}{4})+(2\\times\\,\\frac{2}{3})}{5\\times\\,2}$.", reason: "the rule for adding complex fractions" },
              { step: "Here, $5\\times\\,\\frac{1}{4}=\\frac{5}{4}$ and $2\\times\\,\\frac{2}{3}=\\frac{4}{3}$, so the numerator is $\\frac{5}{4}+\\frac{4}{3}=\\frac{31}{12}$.", reason: "multiplying, then adding the fractions" },
              { step: "$5\\times\\,2=10$.", reason: "multiplying the whole numbers" },
              { step: "$\\dfrac{31/12}{10}=\\frac{31}{12}\\div\\,10=\\frac{31}{120}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
              { step: "$31/120$.", reason: "the fraction is already in lowest terms" }
            ]
          },
          fade: [
            {
              prompt: "Compute $\\dfrac{1/2}{3}+\\dfrac{1/4}{5}$.",
              answer: "13/60",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{1/2}{3}+\\dfrac{1/4}{5}=\\dfrac{(3\\times\\,\\frac{1}{4})+(5\\times\\,\\frac{1}{2})}{3\\times\\,5}$.", reason: "the rule for adding complex fractions" },
                { step: "Here, $3\\times\\,\\frac{1}{4}=\\frac{3}{4}$ and $5\\times\\,\\frac{1}{2}=\\frac{5}{2}$, so the numerator is $\\frac{3}{4}+\\frac{5}{2}=\\frac{13}{4}$.", reason: "multiplying, then adding the fractions" },
                { step: "$3\\times\\,5=15$.", reason: "multiplying the whole numbers" },
                { step: "$\\dfrac{13/4}{15}=\\frac{13}{4}\\div\\,15=\\frac{13}{60}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
                { step: "$13/60$.", reason: "the fraction is already in lowest terms" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{1/2}{2}+\\dfrac{1/5}{3}$.",
              answer: "19/60",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{1/2}{2}+\\dfrac{1/5}{3}=\\dfrac{(2\\times\\,\\frac{1}{5})+(3\\times\\,\\frac{1}{2})}{2\\times\\,3}$.", reason: "the rule for adding complex fractions" },
                { step: "Here, $2\\times\\,\\frac{1}{5}=\\frac{2}{5}$ and $3\\times\\,\\frac{1}{2}=\\frac{3}{2}$, so the numerator is $\\frac{2}{5}+\\frac{3}{2}=\\frac{19}{10}$.", reason: "multiplying, then adding the fractions" },
                { step: "$2\\times\\,3=6$.", reason: "multiplying the whole numbers" },
                { step: "$\\dfrac{19/10}{6}=\\frac{19}{10}\\div\\,6=\\frac{19}{60}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
                { step: "$19/60$.", reason: "the fraction is already in lowest terms" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{1/3}{5}+\\dfrac{1/2}{4}$.",
              answer: "23/120",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{1/3}{5}+\\dfrac{1/2}{4}=\\dfrac{(5\\times\\,\\frac{1}{2})+(4\\times\\,\\frac{1}{3})}{5\\times\\,4}$.", reason: "the rule for adding complex fractions" },
                { step: "Here, $5\\times\\,\\frac{1}{2}=\\frac{5}{2}$ and $4\\times\\,\\frac{1}{3}=\\frac{4}{3}$, so the numerator is $\\frac{5}{2}+\\frac{4}{3}=\\frac{23}{6}$.", reason: "multiplying, then adding the fractions" },
                { step: "$5\\times\\,4=20$.", reason: "multiplying the whole numbers" },
                { step: "$\\dfrac{23/6}{20}=\\frac{23}{6}\\div\\,20=\\frac{23}{120}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
                { step: "$23/120$.", reason: "the fraction is already in lowest terms" }
              ]
            }
          ]
        },
        {
          example: {
            problem: "Compute $\\dfrac{3/4}{2}-\\dfrac{1/3}{5}$.",
            lines: [
              { step: "$\\dfrac{3/4}{2}-\\dfrac{1/3}{5}=\\dfrac{(5\\times\\,\\frac{3}{4})-(2\\times\\,\\frac{1}{3})}{2\\times\\,5}$.", reason: "the rule for subtracting complex fractions" },
              { step: "Here, $5\\times\\,\\frac{3}{4}=\\frac{15}{4}$ and $2\\times\\,\\frac{1}{3}=\\frac{2}{3}$, so the numerator is $\\frac{15}{4}-\\frac{2}{3}=\\frac{37}{12}$.", reason: "multiplying, then subtracting the fractions" },
              { step: "$2\\times\\,5=10$.", reason: "multiplying the whole numbers" },
              { step: "$\\dfrac{37/12}{10}=\\frac{37}{12}\\div\\,10=\\frac{37}{120}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
              { step: "$37/120$.", reason: "the fraction is already in lowest terms" }
            ]
          },
          fade: [
            {
              prompt: "Compute $\\dfrac{1/2}{2}-\\dfrac{1/3}{5}$.",
              answer: "11/60",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{1/2}{2}-\\dfrac{1/3}{5}=\\dfrac{(5\\times\\,\\frac{1}{2})-(2\\times\\,\\frac{1}{3})}{2\\times\\,5}$.", reason: "the rule for subtracting complex fractions" },
                { step: "Here, $5\\times\\,\\frac{1}{2}=\\frac{5}{2}$ and $2\\times\\,\\frac{1}{3}=\\frac{2}{3}$, so the numerator is $\\frac{5}{2}-\\frac{2}{3}=\\frac{11}{6}$.", reason: "multiplying, then subtracting the fractions" },
                { step: "$2\\times\\,5=10$.", reason: "multiplying the whole numbers" },
                { step: "$\\dfrac{11/6}{10}=\\frac{11}{6}\\div\\,10=\\frac{11}{60}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
                { step: "$11/60$.", reason: "the fraction is already in lowest terms" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{2/3}{3}-\\dfrac{1/4}{4}$.",
              answer: "23/144",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{2/3}{3}-\\dfrac{1/4}{4}=\\dfrac{(4\\times\\,\\frac{2}{3})-(3\\times\\,\\frac{1}{4})}{3\\times\\,4}$.", reason: "the rule for subtracting complex fractions" },
                { step: "Here, $4\\times\\,\\frac{2}{3}=\\frac{8}{3}$ and $3\\times\\,\\frac{1}{4}=\\frac{3}{4}$, so the numerator is $\\frac{8}{3}-\\frac{3}{4}=\\frac{23}{12}$.", reason: "multiplying, then subtracting the fractions" },
                { step: "$3\\times\\,4=12$.", reason: "multiplying the whole numbers" },
                { step: "$\\dfrac{23/12}{12}=\\frac{23}{12}\\div\\,12=\\frac{23}{144}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
                { step: "$23/144$.", reason: "the fraction is already in lowest terms" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{1/2}{3}-\\dfrac{1/8}{5}$.",
              answer: "17/120",
              form: "Answer as a fraction in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{1/2}{3}-\\dfrac{1/8}{5}=\\dfrac{(5\\times\\,\\frac{1}{2})-(3\\times\\,\\frac{1}{8})}{3\\times\\,5}$.", reason: "the rule for subtracting complex fractions" },
                { step: "Here, $5\\times\\,\\frac{1}{2}=\\frac{5}{2}$ and $3\\times\\,\\frac{1}{8}=\\frac{3}{8}$, so the numerator is $\\frac{5}{2}-\\frac{3}{8}=\\frac{17}{8}$.", reason: "multiplying, then subtracting the fractions" },
                { step: "$3\\times\\,5=15$.", reason: "multiplying the whole numbers" },
                { step: "$\\dfrac{17/8}{15}=\\frac{17}{8}\\div\\,15=\\frac{17}{120}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
                { step: "$17/120$.", reason: "the fraction is already in lowest terms" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "t19-k4",
      forms: [
        {
          example: {
            problem: "Compute $\\dfrac{3/4}{2/5}\\times\\,\\dfrac{5/6}{3/8}$.",
            lines: [
              { step: "$\\dfrac{3/4}{2/5}\\times\\,\\dfrac{5/6}{3/8}=\\dfrac{\\frac{3}{4}\\times\\,\\frac{5}{6}}{\\frac{2}{5}\\times\\,\\frac{3}{8}}$.", reason: "the rule for multiplying complex fractions" },
              { step: "$\\frac{3}{4}\\times\\,\\frac{5}{6}=\\frac{15}{24}=\\frac{5}{8}$.", reason: "the product formula, then reducing to lowest terms" },
              { step: "$\\frac{2}{5}\\times\\,\\frac{3}{8}=\\frac{6}{40}=\\frac{3}{20}$.", reason: "the product formula, then reducing to lowest terms" },
              { step: "$\\dfrac{5/8}{3/20}=\\frac{5}{8}\\div\\,\\frac{3}{20}=\\frac{5}{8}\\times\\,\\frac{20}{3}=\\frac{100}{24}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
              { step: "$4\\,\\frac{1}{6}$.", reason: "reducing to lowest terms, then writing the improper fraction as a mixed number" }
            ]
          },
          fade: [
            {
              prompt: "Compute $\\dfrac{7/8}{3/7}\\times\\,\\dfrac{5/7}{5/6}$.",
              answer: "1 3/4",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{7/8}{3/7}\\times\\,\\dfrac{5/7}{5/6}=\\dfrac{\\frac{7}{8}\\times\\,\\frac{5}{7}}{\\frac{3}{7}\\times\\,\\frac{5}{6}}$.", reason: "the rule for multiplying complex fractions" },
                { step: "$\\frac{7}{8}\\times\\,\\frac{5}{7}=\\frac{35}{56}=\\frac{5}{8}$.", reason: "the product formula, then reducing to lowest terms" },
                { step: "$\\frac{3}{7}\\times\\,\\frac{5}{6}=\\frac{15}{42}=\\frac{5}{14}$.", reason: "the product formula, then reducing to lowest terms" },
                { step: "$\\dfrac{5/8}{5/14}=\\frac{5}{8}\\div\\,\\frac{5}{14}=\\frac{5}{8}\\times\\,\\frac{14}{5}=\\frac{70}{40}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
                { step: "$1\\,\\frac{3}{4}$.", reason: "reducing to lowest terms, then writing the improper fraction as a mixed number" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{4/5}{2/9}\\times\\,\\dfrac{9/10}{3/5}$.",
              answer: "5 2/5",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{4/5}{2/9}\\times\\,\\dfrac{9/10}{3/5}=\\dfrac{\\frac{4}{5}\\times\\,\\frac{9}{10}}{\\frac{2}{9}\\times\\,\\frac{3}{5}}$.", reason: "the rule for multiplying complex fractions" },
                { step: "$\\frac{4}{5}\\times\\,\\frac{9}{10}=\\frac{36}{50}=\\frac{18}{25}$.", reason: "the product formula, then reducing to lowest terms" },
                { step: "$\\frac{2}{9}\\times\\,\\frac{3}{5}=\\frac{6}{45}=\\frac{2}{15}$.", reason: "the product formula, then reducing to lowest terms" },
                { step: "$\\dfrac{18/25}{2/15}=\\frac{18}{25}\\div\\,\\frac{2}{15}=\\frac{18}{25}\\times\\,\\frac{15}{2}=\\frac{270}{50}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
                { step: "$5\\,\\frac{2}{5}$.", reason: "reducing to lowest terms, then writing the improper fraction as a mixed number" }
              ]
            },
            {
              prompt: "Compute $\\dfrac{3/7}{4/9}\\times\\,\\dfrac{2/3}{3/5}$.",
              answer: "1 1/14",
              form: "Answer as a mixed number in lowest terms, or equivalent.",
              lines: [
                { step: "$\\dfrac{3/7}{4/9}\\times\\,\\dfrac{2/3}{3/5}=\\dfrac{\\frac{3}{7}\\times\\,\\frac{2}{3}}{\\frac{4}{9}\\times\\,\\frac{3}{5}}$.", reason: "the rule for multiplying complex fractions" },
                { step: "$\\frac{3}{7}\\times\\,\\frac{2}{3}=\\frac{6}{21}=\\frac{2}{7}$.", reason: "the product formula, then reducing to lowest terms" },
                { step: "$\\frac{4}{9}\\times\\,\\frac{3}{5}=\\frac{12}{45}=\\frac{4}{15}$.", reason: "the product formula, then reducing to lowest terms" },
                { step: "$\\dfrac{2/7}{4/15}=\\frac{2}{7}\\div\\,\\frac{4}{15}=\\frac{2}{7}\\times\\,\\frac{15}{4}=\\frac{30}{28}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
                { step: "$1\\,\\frac{1}{14}$.", reason: "reducing to lowest terms, then writing the improper fraction as a mixed number" }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t19-k5",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{13}{5}$.",
            "figure": {
              "file": "place:line:13/5",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "$13=2\\times 5+3$, so $\\frac{13}{5}=2+\\frac{3}{5}$.",
                "reason": "13 copies of $\\frac{1}{5}$ hold 2 groups of 5 copies, each group making 1, with 3 copies left over"
              },
              {
                "step": "The mark lies between 2 and 3, $\\frac{3}{5}$ of the way from 2 to 3.",
                "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 3 of the 5 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:13/5",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 13/5 marked, between 2 and 3."
                }
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
          "fade": [
            {
              "prompt": "Place $\\frac{12}{5}$.",
              "answer": "12/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$12=2\\times 5+2$, so $\\frac{12}{5}=2+\\frac{2}{5}$.",
                  "reason": "12 copies of $\\frac{1}{5}$ hold 2 groups of 5 copies, each group making 1, with 2 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{2}{5}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 2 of the 5 equal parts of that unit come before it"
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
              "prompt": "Place $\\frac{24}{5}$.",
              "answer": "24/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$24=4\\times 5+4$, so $\\frac{24}{5}=4+\\frac{4}{5}$.",
                  "reason": "24 copies of $\\frac{1}{5}$ hold 4 groups of 5 copies, each group making 1, with 4 copies left over"
                },
                {
                  "step": "The mark lies between 4 and 5, $\\frac{4}{5}$ of the way from 4 to 5.",
                  "reason": "the whole part 4 puts the mark in the unit from 4 to 5, and 4 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{4}{5}=\\frac{4\\times 2}{5\\times 2}=\\frac{8}{10}=0.8$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$4.8$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:24/5",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 24/5 lies at 4.8, between 4 and 5."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{21}{25}$.",
            "figure": {
              "file": "place:line:21/25",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The unit from 0 to 1 is cut into 25 equal parts, and the mark is the end of part 21.",
                "reason": "the denominator 25 gives the number of equal parts of the unit, and the numerator 21 counts the parts from 0"
              },
              {
                "step": "$\\frac{21}{25}=\\frac{21\\times 4}{25\\times 4}=\\frac{84}{100}=0.84$.",
                "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$0.84$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:21/25",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 21/25 lies at 0.84, in the tenth from 0.8 to 0.9, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{1}{20}$.",
              "answer": "1/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 1.",
                  "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 1 counts the parts from 0"
                },
                {
                  "step": "$\\frac{1}{20}=\\frac{1\\times 5}{20\\times 5}=\\frac{5}{100}=0.05$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.05$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:1/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1/20 lies at 0.05, in the tenth from 0 to 0.1, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{13}{25}$.",
              "answer": "13/25",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 25 equal parts, and the mark is the end of part 13.",
                  "reason": "the denominator 25 gives the number of equal parts of the unit, and the numerator 13 counts the parts from 0"
                },
                {
                  "step": "$\\frac{13}{25}=\\frac{13\\times 4}{25\\times 4}=\\frac{52}{100}=0.52$.",
                  "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.52$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:13/25",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 13/25 lies at 0.52, in the tenth from 0.5 to 0.6, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{17}{20}$.",
              "answer": "17/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 17.",
                  "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 17 counts the parts from 0"
                },
                {
                  "step": "$\\frac{17}{20}=\\frac{17\\times 5}{20\\times 5}=\\frac{85}{100}=0.85$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.85$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:17/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 17/20 lies at 0.85, in the tenth from 0.8 to 0.9, between 0 and 1."
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
      id: "t19-p1",
      method: "direct proof",
      statement: "For fractions $A,B,C$, with $C\\ne0$: $A\\times\\,\\dfrac{B}{C}=\\dfrac{AB}{C}$.",
      idea: "Write each of the three fractions as a numerator over a denominator. Both sides then become the same product of whole numbers over the same product of whole numbers.",
      lines: [
        { line: "Write $A=\\frac k\\ell$, $B=\\frac mn$ and $C=\\frac pq$. Then $\\frac BC=\\frac{mq}{np}$.", reason: "invert-and-multiply for the fractions $B$ and $C$" },
        { line: "$A\\times\\,\\frac BC=\\frac k\\ell\\times\\,\\frac{mq}{np}=\\frac{kmq}{\\ell np}$.", reason: "the product formula for two fractions" },
        { line: "$\\dfrac{AB}{C}=\\dfrac{\\frac k\\ell\\times\\,\\frac mn}{\\frac pq}=\\dfrac{\\frac{km}{\\ell n}}{\\frac pq}=\\frac{km}{\\ell n}\\times\\,\\frac qp=\\frac{kmq}{\\ell np}$.", reason: "the product formula, then invert-and-multiply" },
        { line: "$A\\times\\,\\dfrac BC=\\dfrac{AB}{C}$, because both sides equal $\\frac{kmq}{\\ell np}$.", reason: "the two previous lines give the same value" }
      ]
    },
    {
      id: "t19-p2",
      method: "direct proof",
      statement: "For fractions $A,B,C$, with $B,C\\ne0$: $\\dfrac{AC}{BC}=\\dfrac{A}{B}$.",
      idea: "Write each of the three fractions as a numerator over a denominator. Invert-and-multiply then leaves a common divisor in the numerator and the denominator, and it cancels.",
      lines: [
        { line: "Write $A=\\frac k\\ell$, $B=\\frac mn$ and $C=\\frac pq$.", reason: "notation for the three fractions" },
        { line: "Here, $AC=\\frac{kp}{\\ell q}$ and $BC=\\frac{mp}{nq}$.", reason: "the product formula" },
        { line: "$\\dfrac{AC}{BC}=\\dfrac{kp/\\ell q}{mp/nq}=\\frac{kp}{\\ell q}\\times\\,\\frac{nq}{mp}=\\frac{kpnq}{\\ell qmp}$.", reason: "the definition of a complex fraction, then invert-and-multiply" },
        { line: "$\\frac{kpnq}{\\ell qmp}=\\frac{kn}{\\ell m}$.", reason: "the cancellation law, cancelling the common divisor $pq$" },
        { line: "$\\dfrac{A}{B}=\\frac{k}{\\ell}\\div\\,\\frac{m}{n}=\\frac{k}{\\ell}\\times\\,\\frac{n}{m}=\\frac{kn}{\\ell m}$.", reason: "the definition of a complex fraction and invert-and-multiply" },
        { line: "$\\dfrac{AC}{BC}=\\dfrac{A}{B}$, because both sides equal $\\frac{kn}{\\ell m}$.", reason: "the two previous lines give the same value" }
      ]
    },
    {
      id: "c19-p2",
      method: "direct proof",
      statement: "For fractions $A,B,C,D$ with $B,D\\ne0$: $\\dfrac AB\\pm\\,\\dfrac CD=\\dfrac{(AD)\\pm(BC)}{BD}$. The minus sign needs $\\dfrac AB\\ge\\dfrac CD$.",
      idea: "Write each of the four fractions as a numerator over a denominator and add over a common denominator. Cancelling a common divisor then gives the same fraction on both sides.",
      lines: [
        { line: "Write $A=\\frac k\\ell$, $B=\\frac mn$, $C=\\frac pq$ and $D=\\frac rs$.", reason: "notation for the given fractions" },
        { line: "Here, $\\dfrac AB=\\frac{kn}{\\ell m}$ and $\\dfrac CD=\\frac{ps}{qr}$.", reason: "invert-and-multiply" },
        { line: "$\\dfrac AB\\pm\\,\\dfrac CD=\\frac{kn}{\\ell m}\\pm\\,\\frac{ps}{qr}=\\frac{(knqr)\\pm(\\ell mps)}{\\ell mqr}$.", reason: "the addition or subtraction formula for two fractions" },
        { line: "Here, $AD=\\frac{kr}{\\ell s}$ and $BC=\\frac{mp}{nq}$, so $(AD)\\pm(BC)=\\dfrac{(krnq)\\pm(\\ell smp)}{\\ell snq}$.", reason: "the product formula, then the addition or subtraction formula" },
        { line: "$BD=\\dfrac{mr}{ns}$, so $\\dfrac{(AD)\\pm(BC)}{BD}=\\dfrac{\\big((krnq)\\pm(\\ell smp)\\big)/(\\ell snq)}{mr/ns}=\\dfrac{\\big((krnq)\\pm(\\ell smp)\\big)\\times\\,ns}{\\ell snq\\times\\,mr}$.", reason: "invert-and-multiply" },
        { line: "$\\dfrac{\\big((krnq)\\pm(\\ell smp)\\big)\\times\\,ns}{\\ell snq\\times\\,mr}=\\dfrac{(krnq)\\pm(\\ell smp)}{\\ell qmr}$, cancelling the common divisor $sn$.", reason: "the cancellation law" },
        { line: "$\\dfrac{(krnq)\\pm(\\ell smp)}{\\ell qmr}=\\dfrac{(knqr)\\pm(\\ell mps)}{\\ell mqr}$, because $krnq=knqr$ and $\\ell smp=\\ell mps$.", reason: "reordering the factors within each product, by the commutative and associative laws of multiplication" },
        { line: "$\\dfrac AB\\pm\\,\\dfrac CD=\\dfrac{(AD)\\pm(BC)}{BD}$, because both sides equal $\\dfrac{(knqr)\\pm(\\ell mps)}{\\ell mqr}$.", reason: "the two previous computations agree" }
      ]
    },
    {
      id: "c19-p3",
      method: "direct proof",
      statement: "For fractions $A,B,C,D,E,F$ with $B,D,F\\ne0$ and $\\dfrac CD\\ge\\dfrac EF$: $\\dfrac AB\\times\\,\\left(\\dfrac CD-\\dfrac EF\\right)=\\dfrac AB\\times\\,\\dfrac CD-\\dfrac AB\\times\\,\\dfrac EF$.",
      idea: "Split the second side of the rectangle with sides $\\dfrac AB$ and $\\dfrac CD$ into the difference $\\dfrac CD-\\dfrac EF$ and the piece $\\dfrac EF$. The area splits the same way.",
      lines: [
        { line: "Let $R$ be the rectangle with sides $\\dfrac AB$ and $\\dfrac CD$.", reason: "the area of a rectangle is the product of its sides" },
        { line: "Divide the side of length $\\dfrac CD$ into two segments, one of length $\\dfrac CD-\\dfrac EF$ and the other of length $\\dfrac EF$.", reason: "the fact that $\\left(\\dfrac CD-\\dfrac EF\\right)+\\dfrac EF=\\dfrac CD$" },
        { line: "Let $R_1$ be the rectangle with sides $\\dfrac AB$ and $\\dfrac CD-\\dfrac EF$. Let $R_2$ be the rectangle with sides $\\dfrac AB$ and $\\dfrac EF$.", reason: "dividing the side of $R$ makes these two smaller rectangles" },
        { line: "The area of $R_1$ equals the area of $R$ minus the area of $R_2$.", reason: "the rectangle $R$ is the concatenation of $R_1$ and $R_2$ along the divided side" },
        { line: "Here, $\\dfrac AB\\times\\,\\left(\\dfrac CD-\\dfrac EF\\right)$ is the area of $R_1$.", reason: "the area of a rectangle is the product of its sides" },
        { line: "The area of $R$ is $\\dfrac AB\\times\\,\\dfrac CD$, and the area of $R_2$ is $\\dfrac AB\\times\\,\\dfrac EF$.", reason: "the area of a rectangle is the product of its sides" },
        { line: "$\\dfrac AB\\times\\,\\left(\\dfrac CD-\\dfrac EF\\right)=\\dfrac AB\\times\\,\\dfrac CD-\\dfrac AB\\times\\,\\dfrac EF$.", reason: "combining the previous three lines" }
      ]
    }
  ],
  prove: [
    {
      id: "t19-s1",
      statement: "For fractions $A,B,C,D$ with $B,D\\ne0$: $\\dfrac AB=\\dfrac CD$ exactly when $AD=BC$, and $\\dfrac AB<\\dfrac CD$ exactly when $AD<BC$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "Write $A=\\frac k\\ell$, $B=\\frac mn$, $C=\\frac pq$ and $D=\\frac rs$.", reason: "notation for the given fractions" },
          { line: "Here, $\\dfrac AB=\\frac{kn}{\\ell m}$ and $\\dfrac CD=\\frac{ps}{qr}$.", reason: "invert-and-multiply" },
          { line: "Here, $\\dfrac AB=\\dfrac CD$ is equivalent to $kn\\times\\,qr=\\ell m\\times\\,ps$.", reason: "the cross-multiplication algorithm" },
          { line: "Here, $AD=\\frac k\\ell\\times\\,\\frac rs=\\frac{kr}{\\ell s}$ and $BC=\\frac mn\\times\\,\\frac pq=\\frac{mp}{nq}$, so $AD=BC$ is equivalent to $kr\\times\\,nq=\\ell s\\times\\,mp$.", reason: "the product formula" },
          { line: "Here, $kn\\times\\,qr=kr\\times\\,nq$ and $\\ell m\\times\\,ps=\\ell s\\times\\,mp$, by the commutative and associative laws of multiplication. So the two equivalent conditions are the same.", reason: "reordering the factors" },
          { line: "Here, $\\dfrac AB=\\dfrac CD$ exactly when $AD=BC$. The same computation with $<$ in place of $=$ throughout gives $\\dfrac AB<\\dfrac CD$ exactly when $AD<BC$.", reason: "combining the previous lines" }
        ]
      }
    },
    {
      id: "t19-s2",
      statement: "For fractions $A,B,C,D$ with $B,D\\ne0$: $\\dfrac AB\\times\\,\\dfrac CD=\\dfrac{AC}{BD}$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "Write $A=\\frac k\\ell$, $B=\\frac mn$, $C=\\frac pq$ and $D=\\frac rs$.", reason: "notation for the given fractions" },
          { line: "Here, $\\dfrac AB=\\frac{kn}{\\ell m}$ and $\\dfrac CD=\\frac{ps}{qr}$.", reason: "invert-and-multiply" },
          { line: "$\\dfrac AB\\times\\,\\dfrac CD=\\frac{kn}{\\ell m}\\times\\,\\frac{ps}{qr}=\\frac{knps}{\\ell mqr}$.", reason: "the product formula for two fractions" },
          { line: "Here, $AC=\\frac{kp}{\\ell q}$ and $BD=\\frac{mr}{ns}$, so $\\dfrac{AC}{BD}=\\frac{kp}{\\ell q}\\times\\,\\frac{ns}{mr}=\\frac{kpns}{\\ell qmr}$.", reason: "the product formula, then invert-and-multiply" },
          { line: "$\\dfrac AB\\times\\,\\dfrac CD=\\dfrac{AC}{BD}$, because $\\frac{knps}{\\ell mqr}$ and $\\frac{kpns}{\\ell qmr}$ have the same factors in the numerator and the same factors in the denominator, in a different order.", reason: "the commutative and associative laws of multiplication" }
        ]
      }
    },
    {
      id: "t19-s3",
      statement: "For fractions $A,B,C,D,E,F$ with $B,D,F\\ne0$: $\\dfrac AB\\times\\,\\left(\\dfrac CD+\\dfrac EF\\right)=\\dfrac AB\\times\\,\\dfrac CD+\\dfrac AB\\times\\,\\dfrac EF$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "Let $R$ be the rectangle with one side $\\dfrac AB$. Let its other side be the concatenation of two segments, one of length $\\dfrac CD$ and the other of length $\\dfrac EF$.", reason: "the length $\\dfrac CD+\\dfrac EF$ is, by definition, the concatenation of two segments of these lengths" },
          { line: "This concatenation partitions $R$ into two smaller rectangles. Rectangle $R_1$ has sides $\\dfrac AB$ and $\\dfrac CD$, and rectangle $R_2$ has sides $\\dfrac AB$ and $\\dfrac EF$.", reason: "splitting one side of a rectangle into two concatenated segments splits it into two rectangles sharing the other side" },
          { line: "The area of $R$ equals the sum of the areas of $R_1$ and $R_2$.", reason: "the area of a region equals the sum of the areas of the pieces in a partition of it" },
          { line: "The area of $R$ is $\\dfrac AB\\times\\,\\left(\\dfrac CD+\\dfrac EF\\right)$, the area of $R_1$ is $\\dfrac AB\\times\\,\\dfrac CD$, and the area of $R_2$ is $\\dfrac AB\\times\\,\\dfrac EF$.", reason: "the definition of fraction multiplication as the area of a rectangle, applied to each of the three rectangles" },
          { line: "$\\dfrac AB\\times\\,\\left(\\dfrac CD+\\dfrac EF\\right)=\\dfrac AB\\times\\,\\dfrac CD+\\dfrac AB\\times\\,\\dfrac EF$.", reason: "combining the previous lines" }
        ]
      }
    },
    {
      id: "t19-s4",
      statement: "For fractions $A,B,C,D,E$ with $B,C,D\\ne0$: $\\dfrac{A}{BC}+\\dfrac{E}{BD}=\\dfrac{AD+CE}{BCD}$.",
      method: "direct proof",
      check: {
        proof: [
          { line: "$\\dfrac{A}{BC}+\\dfrac{E}{BD}=\\dfrac{(A\\times\\,BD)+(E\\times\\,BC)}{BC\\times\\,BD}$.", reason: "the rule for adding complex fractions" },
          { line: "$(A\\times\\,BD)+(E\\times\\,BC)=B\\times\\,\\big((AD)+(CE)\\big)$.", reason: "the distributive law, factoring out $B$" },
          { line: "$BC\\times\\,BD=B\\times\\,(BCD)$.", reason: "the associative and commutative laws of multiplication" },
          { line: "$\\dfrac{B\\times\\,\\big((AD)+(CE)\\big)}{B\\times\\,(BCD)}=\\dfrac{(AD)+(CE)}{BCD}$.", reason: "cancellation in a complex fraction, cancelling the common divisor $B$" },
          { line: "$\\dfrac{A}{BC}+\\dfrac{E}{BD}=\\dfrac{AD+CE}{BCD}$.", reason: "combining the previous lines" }
        ]
      }
    }
  ]
}
