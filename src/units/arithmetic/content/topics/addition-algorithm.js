export default {
  number: 6,
  manyParts: false,
  bare: {
    prompt: 'Compute $34+25$.',
    answer: '59',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $34+25$.',
      'Write $34=30+4$ and $25=20+5$.',
      '$34+25 = (30+20)+(4+5)$, by the associative and commutative laws of addition.',
      '$(30+20)+(4+5)=50+9=59$.',
      '$59$.'
    ]
  },
  ideas: [],
  kinds: [
    {
      id: 't6-k1',
      forms: [
        {
          example: {
            problem: 'Compute $765+892$.',
            lines: [
              { step: 'Write $765 = 700+60+5$ and $892 = 800+90+2$.', reason: 'the expanded form of $765$ and $892$' },
              { step: '$765+892 = (700+800)+(60+90)+(5+2)$.', reason: 'the associative and commutative laws of addition, with like place values grouped' },
              { step: 'The sums are $60+90=150$ and $5+2=7$, so $765+892 = (700+800)+150+7 = (700+800+100)+50+7$.', reason: 'the ones column needs no carry, but the tens column exceeds $9$, so $100$ moves into the hundreds column' },
              { step: '$700+800+100 = 1\\,600$.', reason: 'adding the hundreds column together with the carried $1$' },
              { step: '$1\\,657$.', reason: 'reading the digits $1$, $6$, $5$, $7$ off the regrouped sum' }
            ]
          },
          fade: [
            {
              prompt: 'Compute $583+741$.',
              answer: '1 324',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $583 = 500+80+3$ and $741 = 700+40+1$.', reason: 'the expanded form of $583$ and $741$' },
                { step: '$583+741 = (500+700)+(80+40)+(3+1)$.', reason: 'the associative and commutative laws of addition, with like place values grouped' },
                { step: 'The sums are $80+40=120$ and $3+1=4$, so $583+741 = (500+700)+120+4 = (500+700+100)+20+4$.', reason: 'the ones column needs no carry, but the tens column exceeds $9$, so $100$ moves into the hundreds column' },
                { step: '$500+700+100 = 1\\,300$.', reason: 'adding the hundreds column together with the carried $1$' },
                { step: '$1\\,324$.', reason: 'reading the digits $1$, $3$, $2$, $4$ off the regrouped sum' }
              ]
            },
            {
              prompt: 'Compute $674+962$.',
              answer: '1 636',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $674 = 600+70+4$ and $962 = 900+60+2$.', reason: 'the expanded form of $674$ and $962$' },
                { step: '$674+962 = (600+900)+(70+60)+(4+2)$.', reason: 'the associative and commutative laws of addition, with like place values grouped' },
                { step: 'The sums are $70+60=130$ and $4+2=6$, so $674+962 = (600+900)+130+6 = (600+900+100)+30+6$.', reason: 'the ones column needs no carry, but the tens column exceeds $9$, so $100$ moves into the hundreds column' },
                { step: '$600+900+100 = 1\\,600$.', reason: 'adding the hundreds column together with the carried $1$' },
                { step: '$1\\,636$.', reason: 'reading the digits $1$, $6$, $3$, $6$ off the regrouped sum' }
              ]
            },
            {
              prompt: 'Compute $845+371$.',
              answer: '1 216',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $845 = 800+40+5$ and $371 = 300+70+1$.', reason: 'the expanded form of $845$ and $371$' },
                { step: '$845+371 = (800+300)+(40+70)+(5+1)$.', reason: 'the associative and commutative laws of addition, with like place values grouped' },
                { step: 'The sums are $40+70=110$ and $5+1=6$, so $845+371 = (800+300)+110+6 = (800+300+100)+10+6$.', reason: 'the ones column needs no carry, but the tens column exceeds $9$, so $100$ moves into the hundreds column' },
                { step: '$800+300+100 = 1\\,200$.', reason: 'adding the hundreds column together with the carried $1$' },
                { step: '$1\\,216$.', reason: 'reading the digits $1$, $2$, $1$, $6$ off the regrouped sum' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Compute $165+27+83+829$.',
            lines: [
              { step: '$165 = 100+60+5$, $27 = 20+7$, $83 = 80+3$, $829 = 800+20+9$.', reason: 'the expanded form of each number' },
              { step: '$165+27+83+829 = (100+800)+(60+20+80+20)+(5+7+3+9)$.', reason: 'the associative and commutative laws of addition, with like place values grouped' },
              { step: 'The sums are $60+20+80+20 = 180$ and $5+7+3+9 = 24$.', reason: 'adding the digits in the tens column and in the ones column' },
              { step: '$165+27+83+829 = (100+800)+180+24 = (100+800+100)+(80+20)+4 = 1\\,000+100+0+4$.', reason: 'the tens and ones columns each sum to $10$ or more, so each carries into the column to its left' },
              { step: '$1\\,104$.', reason: 'reading the digits $1$, $1$, $0$, $4$ off the regrouped sum' }
            ]
          },
          fade: [
            {
              prompt: 'Compute $725+52+77+253$.',
              answer: '1 107',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$725 = 700+20+5$, $52 = 50+2$, $77 = 70+7$, $253 = 200+50+3$.', reason: 'the expanded form of each number' },
                { step: '$725+52+77+253 = (700+200)+(20+50+70+50)+(5+2+7+3)$.', reason: 'the associative and commutative laws of addition, with like place values grouped' },
                { step: 'The sums are $20+50+70+50 = 190$ and $5+2+7+3 = 17$.', reason: 'adding the digits in the tens column and in the ones column' },
                { step: '$725+52+77+253 = (700+200)+190+17 = (700+200+100)+(90+10)+7 = 1\\,000+100+0+7$.', reason: 'the tens and ones columns each sum to $10$ or more, so each carries into the column to its left' },
                { step: '$1\\,107$.', reason: 'reading the digits $1$, $1$, $0$, $7$ off the regrouped sum' }
              ]
            },
            {
              prompt: 'Compute $324+95+25+657$.',
              answer: '1 101',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$324 = 300+20+4$, $95 = 90+5$, $25 = 20+5$, $657 = 600+50+7$.', reason: 'the expanded form of each number' },
                { step: '$324+95+25+657 = (300+600)+(20+90+20+50)+(4+5+5+7)$.', reason: 'the associative and commutative laws of addition, with like place values grouped' },
                { step: 'The sums are $20+90+20+50 = 180$ and $4+5+5+7 = 21$.', reason: 'adding the digits in the tens column and in the ones column' },
                { step: '$324+95+25+657 = (300+600)+180+21 = (300+600+100)+(80+20)+1 = 1\\,000+100+0+1$.', reason: 'the tens and ones columns each sum to $10$ or more, so each carries into the column to its left' },
                { step: '$1\\,101$.', reason: 'reading the digits $1$, $1$, $0$, $1$ off the regrouped sum' }
              ]
            },
            {
              prompt: 'Compute $479+28+49+546$.',
              answer: '1 102',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$479 = 400+70+9$, $28 = 20+8$, $49 = 40+9$, $546 = 500+40+6$.', reason: 'the expanded form of each number' },
                { step: '$479+28+49+546 = (400+500)+(70+20+40+40)+(9+8+9+6)$.', reason: 'the associative and commutative laws of addition, with like place values grouped' },
                { step: 'The sums are $70+20+40+40 = 170$ and $9+8+9+6 = 32$.', reason: 'adding the digits in the tens column and in the ones column' },
                { step: '$479+28+49+546 = (400+500)+170+32 = (400+500+100)+(70+30)+2 = 1\\,000+100+0+2$.', reason: 'the tens and ones columns each sum to $10$ or more, so each carries into the column to its left' },
                { step: '$1\\,102$.', reason: 'reading the digits $1$, $1$, $0$, $2$ off the regrouped sum' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't6-k2',
      forms: [
        {
          example: {
            problem: 'Compute $1+2+\\cdots+10$.',
            lines: [
              { step: 'Write $S=1+2+\\cdots+10$ also in reverse order as $S=10+9+\\cdots+1$.', reason: 'the sum of the same ten terms, written in the opposite order' },
              { step: 'Adding the two forms of $S$ term by term gives $2S = (1+10)+(2+9)+\\cdots+(10+1)$.', reason: 'adding equal sums gives an equal result, term by term' },
              { step: 'Each of the ten sums in parentheses equals $11$.', reason: 'in each pair, one term rises by as much as the other falls, so each pair has the same sum' },
              { step: '$2S = 10\\times{11}=110$.', reason: 'ten copies of $11$' },
              { step: '$55$.', reason: 'dividing the doubled sum by $2$' }
            ]
          },
          fade: [
            {
              prompt: 'Compute $1+2+\\cdots+16$.',
              answer: '136',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $S=1+2+\\cdots+16$ also in reverse order as $S=16+15+\\cdots+1$.', reason: 'the sum of the same sixteen terms, written in the opposite order' },
                { step: 'Adding the two forms of $S$ term by term gives $2S = (1+16)+(2+15)+\\cdots+(16+1)$.', reason: 'adding equal sums gives an equal result, term by term' },
                { step: 'Each of the sixteen sums in parentheses equals $17$.', reason: 'in each pair, one term rises by as much as the other falls, so each pair has the same sum' },
                { step: '$2S = 16\\times{17}=272$.', reason: 'sixteen copies of $17$' },
                { step: '$136$.', reason: 'dividing the doubled sum by $2$' }
              ]
            },
            {
              prompt: 'Compute $1+2+\\cdots+21$.',
              answer: '231',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $S=1+2+\\cdots+21$ also in reverse order as $S=21+20+\\cdots+1$.', reason: 'the sum of the same twenty-one terms, written in the opposite order' },
                { step: 'Adding the two forms of $S$ term by term gives $2S = (1+21)+(2+20)+\\cdots+(21+1)$.', reason: 'adding equal sums gives an equal result, term by term' },
                { step: 'Each of the twenty-one sums in parentheses equals $22$.', reason: 'in each pair, one term rises by as much as the other falls, so each pair has the same sum' },
                { step: '$2S = 21\\times{22}=462$.', reason: 'twenty-one copies of $22$' },
                { step: '$231$.', reason: 'dividing the doubled sum by $2$' }
              ]
            },
            {
              prompt: 'Compute $1+2+\\cdots+37$.',
              answer: '703',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $S=1+2+\\cdots+37$ also in reverse order as $S=37+36+\\cdots+1$.', reason: 'the sum of the same thirty-seven terms, written in the opposite order' },
                { step: 'Adding the two forms of $S$ term by term gives $2S = (1+37)+(2+36)+\\cdots+(37+1)$.', reason: 'adding equal sums gives an equal result, term by term' },
                { step: 'Each of the thirty-seven sums in parentheses equals $38$.', reason: 'in each pair, one term rises by as much as the other falls, so each pair has the same sum' },
                { step: '$2S = 37\\times{38}=1\\,406$.', reason: 'thirty-seven copies of $38$' },
                { step: '$703$.', reason: 'dividing the doubled sum by $2$' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Compute $0+2+4+\\cdots+14$.',
            lines: [
              { step: 'Write $S=0+2+4+\\cdots+14$ also in reverse order as $S=14+12+\\cdots+0$.', reason: 'the sum of the same terms, written in the opposite order' },
              { step: 'Adding the two forms of $S$ term by term gives $2S = (0+14)+(2+12)+\\cdots+(14+0)$.', reason: 'adding equal sums gives an equal result, term by term' },
              { step: 'Each of the eight sums in parentheses equals $14$.', reason: 'in each pair, one term rises by as much as the other falls, so each pair has the same sum' },
              { step: '$2S = 8\\times{14}=112$.', reason: 'eight copies of $14$' },
              { step: '$56$.', reason: 'dividing the doubled sum by $2$' }
            ]
          },
          fade: [
            {
              prompt: 'Compute $0+2+4+\\cdots+22$.',
              answer: '132',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $S=0+2+4+\\cdots+22$ also in reverse order as $S=22+20+\\cdots+0$.', reason: 'the sum of the same terms, written in the opposite order' },
                { step: 'Adding the two forms of $S$ term by term gives $2S = (0+22)+(2+20)+\\cdots+(22+0)$.', reason: 'adding equal sums gives an equal result, term by term' },
                { step: 'Each of the twelve sums in parentheses equals $22$.', reason: 'in each pair, one term rises by as much as the other falls, so each pair has the same sum' },
                { step: '$2S = 12\\times{22}=264$.', reason: 'twelve copies of $22$' },
                { step: '$132$.', reason: 'dividing the doubled sum by $2$' }
              ]
            },
            {
              prompt: 'Compute $0+2+4+\\cdots+26$.',
              answer: '182',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $S=0+2+4+\\cdots+26$ also in reverse order as $S=26+24+\\cdots+0$.', reason: 'the sum of the same terms, written in the opposite order' },
                { step: 'Adding the two forms of $S$ term by term gives $2S = (0+26)+(2+24)+\\cdots+(26+0)$.', reason: 'adding equal sums gives an equal result, term by term' },
                { step: 'Each of the fourteen sums in parentheses equals $26$.', reason: 'in each pair, one term rises by as much as the other falls, so each pair has the same sum' },
                { step: '$2S = 14\\times{26}=364$.', reason: 'fourteen copies of $26$' },
                { step: '$182$.', reason: 'dividing the doubled sum by $2$' }
              ]
            },
            {
              prompt: 'Compute $0+2+4+\\cdots+34$.',
              answer: '306',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $S=0+2+4+\\cdots+34$ also in reverse order as $S=34+32+\\cdots+0$.', reason: 'the sum of the same terms, written in the opposite order' },
                { step: 'Adding the two forms of $S$ term by term gives $2S = (0+34)+(2+32)+\\cdots+(34+0)$.', reason: 'adding equal sums gives an equal result, term by term' },
                { step: 'Each of the eighteen sums in parentheses equals $34$.', reason: 'in each pair, one term rises by as much as the other falls, so each pair has the same sum' },
                { step: '$2S = 18\\times{34}=612$.', reason: 'eighteen copies of $34$' },
                { step: '$306$.', reason: 'dividing the doubled sum by $2$' }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: 't6-p1',
      method: 'direct proof',
      statement: 'Take two two-digit numbers with tens digits $p$ and $r$ and ones digits $q$ and $s$. Suppose that $q+s$ is $10$ or more. Write $q+s$ as $10+t$ for the single digit $t$. Then the sum $(10p+q)+(10r+s)$ equals $(10\\times(p+r+1))+t$.',
      idea: 'Split two two-digit numbers into tens and ones, then regroup. A ones-column total of $10$ or more moves exactly one extra ten into the tens column. That extra ten is the carry.',
      lines: [
        { line: 'Let $N$ have tens digit $p$ and ones digit $q$, so $N=10p+q$. Let $M$ have tens digit $r$ and ones digit $s$, so $M=10r+s$.', reason: 'the expanded form of a two-digit number' },
        { line: '$N+M = (10p+q)+(10r+s)$.', reason: 'substituting the expanded forms of $N$ and $M$' },
        { line: '$N+M = (10p+10r)+(q+s)$.', reason: 'the associative and commutative laws of addition' },
        { line: 'Suppose that $q+s$ is $10$ or more, so $q+s=10+t$ for the single digit $t$.', reason: 'the case where the ones column carries' },
        { line: '$N+M = (10p+10r)+(10+t)$.', reason: 'substituting $q+s=10+t$' },
        { line: '$N+M = (10p+10r+10)+t$.', reason: 'the associative law of addition' },
        { line: '$N+M = (10\\times(p+r+1))+t$.', reason: 'the distributive law, factoring the common $10$ out of $10p+10r+10$' },
        { line: 'Therefore $(10p+q)+(10r+s) = (10\\times(p+r+1))+t$.', reason: 'substituting the expanded forms of $N$ and $M$ from the first line' }
      ]
    }
  ],
  prove: [
    {
      id: 't6-s1',
      statement: 'For every whole number $n\\geq1$, $1+2+\\cdots+n=\\frac{n(n+1)}{2}$.',
      method: 'induction',
      check: {
        proof: [
          { line: 'The base case is $n=1$. The left side is $1$, and the right side is $\\frac{1\\times2}{2}=1$, so the two sides agree.', reason: 'evaluating both sides at $n=1$' },
          { line: 'Suppose that $1+2+\\cdots+k=\\frac{k(k+1)}{2}$ for some whole number $k\\geq1$.', reason: 'the inductive hypothesis' },
          { line: '$1+2+\\cdots+k+(k+1) = \\frac{k(k+1)}{2}+(k+1)$.', reason: 'adding $(k+1)$ to both sides of the inductive hypothesis' },
          { line: '$\\frac{k(k+1)}{2}+(k+1) = \\frac{k(k+1)+2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$.', reason: 'the distributive law, factoring out $(k+1)$' },
          { line: 'So $1+2+\\cdots+(k+1) = \\frac{(k+1)((k+1)+1)}{2}$.', reason: 'combining the previous lines' },
          { line: 'Therefore, for every whole number $n\\geq1$, $1+2+\\cdots+n=\\frac{n(n+1)}{2}$.', reason: 'the base case and the inductive step, by the principle of induction' }
        ]
      }
    },
    {
      id: 't6-s2',
      statement: 'For every whole number $n$, $n+n=2\\times{n}$.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The sum $n+n$ is the sum of two copies of $n$.', reason: 'the meaning of $n+n$' },
          { line: 'The product $2\\times{n}$ is also the sum of two copies of $n$.', reason: 'multiplication as repeated addition, with $n$ added two times' },
          { line: 'Therefore $n+n=2\\times{n}$.', reason: 'both sides are the same sum of two copies of $n$' }
        ]
      }
    }
  ]
}
