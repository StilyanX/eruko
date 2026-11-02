// Division-with-Remainder and Long Division: the theorem, the long division algorithm and its correctness.
export default {
  number: 9,
  manyParts: false,
  bare: {
    prompt: 'Find the quotient and remainder of the division-with-remainder of $44$ by $9$.',
    answer: '4, 8',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $44$ by $9$.',
      'The multiples of $9$ are $9$, $18$, $27$, $36$, $45$, and so on.',
      'The fourth multiple, $36$, does not exceed $44$, and the fifth multiple, $45$, does. So $4$ is the greatest whole number $k$ with $k\\times 9$ not exceeding $44$.',
      '$44-36=8$, so $44=(4\\times 9)+8$ with $0\\le 8<9$.',
      '$4$, $8$.'
    ]
  },
  ideas: [
    {
      name: 'Division as the inverse of multiplication',
      concrete: 'The division of $24$ by $3$, $24\\div 3=8$, holds because $24=8\\times 3$.',
      general:
        'A whole number $m$ is a **multiple** of a nonzero whole number $n$ when $m=kn$ for a whole number $k$. For such $m$ and $n$, the **division** of $m$ by $n$, written $m\\div n$, is the whole number $k$ with $m=kn$. The number $k$ is the **quotient**, $n$ the **divisor**, and $m$ the **dividend**.'
    },
    {
      name: 'Division-with-remainder',
      concrete:
        'For $25$ and $6$, the multiples $4\\times 6=24$ and $5\\times 6=30$ lie on either side of $25$. So $25$ is $1$ more than $24$, which gives $25=(4\\times 6)+1$, with quotient $4$ and remainder $1$.',
      general:
        'For whole numbers $a$ and $d$ with $d>0$, there are whole numbers $q$ and $r$ so that $a=qd+r$ and $0\\le r<d$. This statement about $a$, $d$, $q$, and $r$ is a **division-with-remainder** of $a$ by $d$. Here $q$ is the quotient and $r$ is the **remainder**.'
    }
  ],
  kinds: [
    {
      id: 't9-k1',
      forms: [
        {
          example: {
            problem: 'Find the quotient and remainder of the division-with-remainder of $586$ by $3$ using the long division algorithm.',
            lines: [
              {
                step: '$5=(1\\times 3)+2$. Write $1$ as the first digit of the quotient, and carry the remainder $2$.',
                reason: 'divide the first digit of $586$ by $3$'
              },
              {
                step: '$10\\times 2+8=28$, and $28=(9\\times 3)+1$. Write $9$ as the next digit of the quotient, and carry the remainder $1$.',
                reason: 'form the next dividend from ten times the carried remainder plus the next digit of $586$, then divide by $3$'
              },
              {
                step: '$10\\times 1+6=16$, and $16=(5\\times 3)+1$. Write $5$ as the next digit of the quotient. The remainder $1$ is final, since no digit of $586$ remains.',
                reason: 'form the next dividend from ten times the carried remainder plus the last digit of $586$, then divide by $3$'
              },
              {
                step: '$195$, $1$.',
                reason: 'read the quotient digits in order, and the remainder is the last step\'s remainder'
              }
            ]
          },
          fade: [
            {
              prompt: 'Find the quotient and remainder of the division-with-remainder of $913$ by $8$ using the long division algorithm.',
              answer: '114, 1',
              form: 'Answer as the quotient and the remainder, separated by a comma.',
              lines: [
                {
                  step: '$9=(1\\times 8)+1$. Write $1$ as the first digit of the quotient, and carry the remainder $1$.',
                  reason: 'divide the first digit of $913$ by $8$'
                },
                {
                  step: '$10\\times 1+1=11$, and $11=(1\\times 8)+3$. Write $1$ as the next digit of the quotient, and carry the remainder $3$.',
                  reason: 'form the next dividend from ten times the carried remainder plus the next digit of $913$, then divide by $8$'
                },
                {
                  step: '$10\\times 3+3=33$, and $33=(4\\times 8)+1$. Write $4$ as the next digit of the quotient. The remainder $1$ is final, since no digit of $913$ remains.',
                  reason: 'form the next dividend from ten times the carried remainder plus the last digit of $913$, then divide by $8$'
                },
                {
                  step: '$114$, $1$.',
                  reason: 'read the quotient digits in order, and the remainder is the last step\'s remainder'
                }
              ]
            },
            {
              prompt: 'Find the quotient and remainder of the division-with-remainder of $749$ by $6$ using the long division algorithm.',
              answer: '124, 5',
              form: 'Answer as the quotient and the remainder, separated by a comma.',
              lines: [
                {
                  step: '$7=(1\\times 6)+1$. Write $1$ as the first digit of the quotient, and carry the remainder $1$.',
                  reason: 'divide the first digit of $749$ by $6$'
                },
                {
                  step: '$10\\times 1+4=14$, and $14=(2\\times 6)+2$. Write $2$ as the next digit of the quotient, and carry the remainder $2$.',
                  reason: 'form the next dividend from ten times the carried remainder plus the next digit of $749$, then divide by $6$'
                },
                {
                  step: '$10\\times 2+9=29$, and $29=(4\\times 6)+5$. Write $4$ as the next digit of the quotient. The remainder $5$ is final, since no digit of $749$ remains.',
                  reason: 'form the next dividend from ten times the carried remainder plus the last digit of $749$, then divide by $6$'
                },
                {
                  step: '$124$, $5$.',
                  reason: 'read the quotient digits in order, and the remainder is the last step\'s remainder'
                }
              ]
            },
            {
              prompt: 'Find the quotient and remainder of the division-with-remainder of $957$ by $4$ using the long division algorithm.',
              answer: '239, 1',
              form: 'Answer as the quotient and the remainder, separated by a comma.',
              lines: [
                {
                  step: '$9=(2\\times 4)+1$. Write $2$ as the first digit of the quotient, and carry the remainder $1$.',
                  reason: 'divide the first digit of $957$ by $4$'
                },
                {
                  step: '$10\\times 1+5=15$, and $15=(3\\times 4)+3$. Write $3$ as the next digit of the quotient, and carry the remainder $3$.',
                  reason: 'form the next dividend from ten times the carried remainder plus the next digit of $957$, then divide by $4$'
                },
                {
                  step: '$10\\times 3+7=37$, and $37=(9\\times 4)+1$. Write $9$ as the next digit of the quotient. The remainder $1$ is final, since no digit of $957$ remains.',
                  reason: 'form the next dividend from ten times the carried remainder plus the last digit of $957$, then divide by $4$'
                },
                {
                  step: '$239$, $1$.',
                  reason: 'read the quotient digits in order, and the remainder is the last step\'s remainder'
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
      id: 't9-proof-division-with-remainder',
      method: 'proof of existence by construction',
      statement:
        'For whole numbers $a$ and $d$ with $d>0$, there exist unique whole numbers $q$ and $r$ with $a=qd+r$ and $0\\le r<d$.',
      idea: 'A multiple $kd$ with $k>a$ exceeds $a$, so the greatest whole number $q$ with $qd\\le a$ lies in the list $0,1,\\ldots,a$. That $q$ is the quotient, and $a-qd$ is the remainder.',
      lines: [
        {
          line:
            'Take a whole number $k$ with $k>a$. If $d=1$, then $kd=k>a$. If $d>1$, then $k>0$, since $k>a\\ge 0$. The order-and-multiplication rule applied to $1<d$ gives $k\\times 1<k\\times d$, so $k<kd$, and then $kd>k>a$. So $kd>a$ in either case.',
          reason: 'multiplying an order relation by a positive whole number preserves it'
        },
        {
          line:
            'So every whole number $k$ with $kd\\le a$ satisfies $k\\le a$, and $0\\times d=0\\le a$ is one such $k$. Comparing the whole numbers $0,1,\\ldots,a$ that satisfy $kd\\le a$ gives a greatest one, $q$.',
          reason: 'the previous line limits the candidates to the list $0,1,\\ldots,a$, and finitely many whole numbers have a greatest one'
        },
        {
          line: 'Let $r=a-qd$. Since $qd\\le a$, the number $r$ is a whole number.',
          reason: 'subtraction of whole numbers gives a whole number exactly when the number subtracted does not exceed the other'
        },
        {
          line: '$(q+1)d>a$, since $q$ is the greatest whole number with $kd\\le a$, so $q+1$ does not have this property.',
          reason: 'the definition of $q$ as the greatest such whole number'
        },
        {
          line: '$r=a-qd<(q+1)d-qd=d$.',
          reason: 'subtracting the same number $qd$ from both sides of the inequality in the previous line preserves it'
        },
        {
          line: 'So $q$ and $r$ are whole numbers with $a=qd+r$ and $0\\le r<d$.',
          reason: 'combining the previous lines'
        },
        {
          line:
            'Suppose that $q\'$ and $r\'$ are also whole numbers with $a=q\'d+r\'$ and $0\\le r\'<d$. Then $q\'d\\le a$, so $q\'\\le q$, by the definition of $q$ as the greatest such whole number.',
          reason: 'the definition of $q$'
        },
        {
          line:
            'If $q\'$ were less than $q$, then $q\'+1\\le q$, so $(q\'+1)d\\le qd\\le a$. But $r\'<d$ gives $a=q\'d+r\'<q\'d+d=(q\'+1)d$, so $(q\'+1)d>a$. This contradicts $(q\'+1)d\\le a$.',
          reason: 'combining the bound on $r\'$ with the ordering of $q$ and $q\'$'
        },
        {
          line: 'So $q\'=q$, and then $r\'=a-q\'d=a-qd=r$.',
          reason: 'the previous line rules out $q\'<q$, and $q\'\\le q$ then forces $q\'=q$'
        },
        {
          line: 'So there exist unique whole numbers $q$ and $r$ with $a=qd+r$ and $0\\le r<d$.',
          reason: 'combining the previous lines'
        }
      ]
    },
    {
      id: 't9-proof-long-division-correct',
      method: 'induction',
      statement:
        'Let $a$ be a whole number with digits $a_1,a_2,\\ldots,a_n$ from left to right, so that $a=\\sum_{i=1}^{n}a_i\\times 10^{n-i}$. Let $d$ be a whole number with $d>0$. Set $R_0=0$. For each $i$ from $1$ to $n$, divide $10R_{i-1}+a_i$ by $d$. Let $Q_i$ and $R_i$ be the quotient and remainder of this division-with-remainder. Then every $Q_i$ is a digit, and $a=qd+R_n$ with $0\\le R_n<d$, where $q$ is the whole number with digits $Q_1,Q_2,\\ldots,Q_n$.',
      idea: 'Each step\'s dividend comes from the previous remainder and the next digit. So the equation at one step, extended by one more digit, is the equation at the next step.',
      lines: [
        {
          line:
            'For $k=1,\\ldots,n$, let $a^{(k)}=\\sum_{i=1}^{k}a_i\\times 10^{k-i}$ be the whole number formed by the first $k$ digits of $a$. Let $q^{(k)}=\\sum_{i=1}^{k}Q_i\\times 10^{k-i}$ be the whole number formed by the first $k$ quotient digits.',
          reason: 'definitions used through the induction'
        },
        {
          line:
            'For every $i$ from $1$ to $n$, $R_{i-1}<d$. This holds because $R_0=0<d$, and for $i\\ge 2$ the number $R_{i-1}$ is itself the remainder of a division-with-remainder by $d$. So $10R_{i-1}+a_i\\le 10(d-1)+9=10d-1$. If $Q_i$ were $10$ or more, then $Q_id\\ge 10d$, which exceeds $10R_{i-1}+a_i$. The definition of $Q_i$ requires $Q_id\\le 10R_{i-1}+a_i$, so this cannot happen. So $Q_i<10$, a digit, for every $i$ from $1$ to $n$.',
          reason: 'the bound on a remainder in the division-with-remainder theorem, the bound on the dividend, and the definition of the quotient'
        },
        {
          line:
            'Base case, $k=1$: $a^{(1)}=a_1$ and $q^{(1)}=Q_1$. Since $R_0=0$, the definition of $Q_1,R_1$ gives $a_1=Q_1d+R_1$ with $0\\le R_1<d$. So $a^{(1)}=q^{(1)}d+R_1$ with $0\\le R_1<d$.',
          reason: 'the definition of the algorithm\'s first step and of division-with-remainder'
        },
        {
          line:
            'Inductive step: suppose that $a^{(k-1)}=q^{(k-1)}d+R_{k-1}$ with $0\\le R_{k-1}<d$, for some whole number $k$ with $2\\le k\\le n$.',
          reason: 'the inductive hypothesis'
        },
        {
          line: '$a^{(k)}=10\\times a^{(k-1)}+a_k$, since appending a digit to a number multiplies the number by ten and adds the digit.',
          reason: 'the expanded form of a number by its digits, applied to $a^{(k)}$'
        },
        {
          line:
            '$a^{(k)}=10\\times(q^{(k-1)}d+R_{k-1})+a_k=(10q^{(k-1)})d+(10R_{k-1}+a_k)$.',
          reason: 'substituting the inductive hypothesis, then the distributive law'
        },
        {
          line:
            'The numbers $Q_k$ and $R_k$ are the quotient and remainder of the division-with-remainder of $10R_{k-1}+a_k$ by $d$. So $10R_{k-1}+a_k=Q_kd+R_k$ with $0\\le R_k<d$.',
          reason: 'the definition of the algorithm\'s $k$-th step and of division-with-remainder'
        },
        {
          line:
            '$a^{(k)}=(10q^{(k-1)})d+(Q_kd+R_k)=(10q^{(k-1)}+Q_k)d+R_k$.',
          reason: 'substituting $10R_{k-1}+a_k=Q_kd+R_k$, then the distributive law'
        },
        {
          line: '$10q^{(k-1)}+Q_k=q^{(k)}$, since appending the digit $Q_k$ to $q^{(k-1)}$ multiplies it by ten and adds $Q_k$.',
          reason: 'the expanded form of a number by its digits, applied to the quotient digits'
        },
        {
          line: 'So $a^{(k)}=q^{(k)}d+R_k$ with $0\\le R_k<d$. This completes the step from $k-1$ to $k$.',
          reason: 'combining the previous two lines'
        },
        {
          line:
            'By induction on $k$ from $1$ to $n$, the equation $a^{(n)}=q^{(n)}d+R_n$ holds with $0\\le R_n<d$. Since $a^{(n)}=a$ and $q^{(n)}=q$, and every $Q_i$ is a digit by the bound above, $a=qd+R_n$ with $0\\le R_n<d$.',
          reason: 'combining the base case, every inductive step, and the digit bound for every $i$'
        }
      ]
    }
  ],
  prove: [
    {
      id: 't9-statement-below-divisor',
      statement: 'For whole numbers $a$ and $d$ with $0\\le a<d$, the division-with-remainder of $a$ by $d$ has quotient $0$ and remainder $a$.',
      method: 'proof of existence by construction',
      check: {
        proof: [
          { line: '$0\\times d=0$, and $a=0+a$, so $a=(0\\times d)+a$.', reason: 'multiplication by $0$ and the definition of addition' },
          { line: 'The hypothesis gives $0\\le a<d$.', reason: 'the hypothesis' },
          {
            line:
              'So $a=qd+r$ holds with $q=0$, $r=a$, and $0\\le r<d$. The division-with-remainder theorem\'s uniqueness gives that $q=0$ and $r=a$ are the quotient and remainder of $a$ divided by $d$.',
            reason: 'combining the previous lines with the uniqueness already established'
          }
        ]
      }
    },
    {
      id: 't9-statement-step-count',
      statement:
        'Let $a$ be a whole number with $n\\ge 1$ digits, and let $d$ be a whole number with $d>0$. The long division algorithm for the division-with-remainder of $a$ by $d$ takes exactly $n$ steps, one for each digit.',
      method: 'induction',
      check: {
        proof: [
          {
            line: 'Base case, $n=1$: a whole number with one digit gives the single dividend $10R_0+a_1=a_1$, since $R_0=0$. So the algorithm performs exactly one division-with-remainder, which is one step.',
            reason: 'the definition of the algorithm\'s first step'
          },
          {
            line: 'Inductive step: let $k\\ge 2$ be a whole number. Suppose that the algorithm run on a whole number with $k-1$ digits takes exactly $k-1$ steps.',
            reason: 'the inductive hypothesis'
          },
          {
            line:
              'A whole number with $k$ digits has its first $k-1$ digits and one further digit $a_k$. Each step\'s dividend depends only on the digits processed so far. So those first $k-1$ digits take the $k-1$ steps the algorithm performs on the $(k-1)$-digit number they form.',
            reason: 'the definition of the algorithm\'s step-by-step dividend'
          },
          {
            line: 'The algorithm then performs one further step, dividing $10R_{k-1}+a_k$ by $d$, for the digit $a_k$.',
            reason: 'the definition of the algorithm\'s $k$-th step'
          },
          {
            line:
              'So the algorithm on a $k$-digit number takes $(k-1)+1=k$ steps. By induction, the algorithm on an $n$-digit number takes exactly $n$ steps, one for each digit.',
            reason: 'combining the previous lines, which completes the induction'
          }
        ]
      }
    }
  ]
}
