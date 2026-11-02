// The Laws of Addition and Multiplication: the equal sign, the associative, commutative, and
// distributive laws, one proof Wu gives of a regrouping identity, and a statement to prove.
export default {
  number: 2,
  manyParts: true,
  ideas: [
    {
      name: 'The equal sign for whole numbers',
      concrete: 'Counting $5$ more from $4$ and counting $7$ more from $2$ both reach $9$. So the sum $4+5$ equals the sum $2+7$.',
      general: 'Two whole numbers $a$ and $b$ are equal, written $a=b$, exactly when counting verifies that they are the same number.'
    },
    {
      name: 'Associative and commutative laws of addition and multiplication',
      concrete: 'The sum $(32+25)+28+55$ equals the sum $(25+55)+28+32$, both equal to $140$.',
      general:
        'For all whole numbers $\\ell$, $m$, and $n$: $(\\ell+m)+n$ equals $\\ell+(m+n)$, and $m+n$ equals $n+m$. Likewise $(\\ell m)n$ equals $\\ell(mn)$, and $mn$ equals $nm$. Adding or multiplying a collection of numbers gives the same result in every order and every grouping.'
    },
    {
      name: 'The distributive law and the area model',
      concrete:
        'The product $3\\times(2+4)$ equals the sum $(3\\times2)+(3\\times4)$. A rectangle with vertical side $3$ and horizontal side $6$ splits into a $3$-by-$2$ piece and a $3$-by-$4$ piece.',
      general:
        'For all whole numbers $m$, $n$, and $\\ell$: $m(n+\\ell)$ equals $mn+m\\ell$. The product $mn$ is the area of a rectangle with sides $m$ and $n$.',
      definitions: [
        'A **unit square** has side $1$ and area $1$.',
        'A collection of rectangles **tiles** a rectangle $R$ when together they fill $R$ and overlap only along their edges.',
        'The **area** of a rectangle is the number of unit squares needed to tile it.'
      ]
    }
  ],
  kinds: [
    {
      id: 't2-k1',
      forms: [
        {
          example: {
            problem: 'Compute $37+189+163$.',
            lines: [
              { step: 'The numbers $37$ and $163$ add to $200$.', reason: 'pairing terms that make a round number' },
              {
                step: 'The sum $37+189+163$ equals $(37+163)+189$.',
                reason: 'the associative and commutative laws of addition regroup the three terms'
              },
              { step: 'The sum $(37+163)+189$ equals $200+189$.', reason: 'substituting the sum $200$ for $37+163$, from the first line' },
              { step: '$389$.', reason: 'the sum $200+189$ equals this number' }
            ]
          },
          fade: [
            {
              prompt: 'Compute $833+8\\,499+5\\,167$.',
              answer: '14 499',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The numbers $833$ and $5\\,167$ add to $6\\,000$.', reason: 'pairing terms that make a round number' },
                { step: 'The sum $833+8\\,499+5\\,167$ equals $(833+5\\,167)+8\\,499$.', reason: 'the associative and commutative laws of addition regroup the three terms' },
                { step: 'The sum $(833+5\\,167)+8\\,499$ equals $6\\,000+8\\,499$.', reason: 'substituting the sum $6\\,000$ for $833+5\\,167$, from the first line' },
                { step: '$14\\,499$.', reason: 'the sum $6\\,000+8\\,499$ equals this number' }
              ]
            },
            {
              prompt: 'Compute $54+69\\,978+46$.',
              answer: '70 078',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The numbers $54$ and $46$ add to $100$.', reason: 'pairing terms that make a round number' },
                { step: 'The sum $54+69\\,978+46$ equals $(54+46)+69\\,978$.', reason: 'the associative and commutative laws of addition regroup the three terms' },
                { step: 'The sum $(54+46)+69\\,978$ equals $100+69\\,978$.', reason: 'substituting the sum $100$ for $54+46$, from the first line' },
                { step: '$70\\,078$.', reason: 'the sum $100+69\\,978$ equals this number' }
              ]
            },
            {
              prompt: 'Compute $67+4\\,821+933$.',
              answer: '5 821',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The numbers $67$ and $933$ add to $1\\,000$.', reason: 'pairing terms that make a round number' },
                { step: 'The sum $67+4\\,821+933$ equals $(67+933)+4\\,821$.', reason: 'the associative and commutative laws of addition regroup the three terms' },
                { step: 'The sum $(67+933)+4\\,821$ equals $1\\,000+4\\,821$.', reason: 'substituting the sum $1\\,000$ for $67+933$, from the first line' },
                { step: '$5\\,821$.', reason: 'the sum $1\\,000+4\\,821$ equals this number' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Compute $(25\\times7\\,687)\\times80$.',
            lines: [
              {
                step: 'The product $(25\\times7\\,687)\\times80$ equals $7\\,687\\times(25\\times80)$.',
                reason: 'the commutative and associative laws of multiplication regroup the three factors'
              },
              {
                step: 'The numbers $25$ and $80$ multiply to $2\\,000$, so the product becomes $7\\,687\\times2\\,000$.',
                reason: 'multiplying the paired factors first'
              },
              { step: '$15\\,374\\,000$.', reason: 'the product $7\\,687\\times2\\,000$ equals this number' }
            ]
          },
          fade: [
            {
              prompt: 'Compute $(8\\times647)\\times125$.',
              answer: '647 000',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: 'The product $(8\\times647)\\times125$ equals $647\\times(8\\times125)$.',
                  reason: 'the commutative and associative laws of multiplication regroup the three factors'
                },
                {
                  step: 'The numbers $8$ and $125$ multiply to $1\\,000$, so the product becomes $647\\times1\\,000$.',
                  reason: 'multiplying the paired factors first'
                },
                { step: '$647\\,000$.', reason: 'the product $647\\times1\\,000$ equals this number' }
              ]
            },
            {
              prompt: 'Compute $(20\\times583)\\times50$.',
              answer: '583 000',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: 'The product $(20\\times583)\\times50$ equals $583\\times(20\\times50)$.',
                  reason: 'the commutative and associative laws of multiplication regroup the three factors'
                },
                {
                  step: 'The numbers $20$ and $50$ multiply to $1\\,000$, so the product becomes $583\\times1\\,000$.',
                  reason: 'multiplying the paired factors first'
                },
                { step: '$583\\,000$.', reason: 'the product $583\\times1\\,000$ equals this number' }
              ]
            },
            {
              prompt: 'Compute $(4\\times761)\\times25$.',
              answer: '76 100',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: 'The product $(4\\times761)\\times25$ equals $761\\times(4\\times25)$.',
                  reason: 'the commutative and associative laws of multiplication regroup the three factors'
                },
                {
                  step: 'The numbers $4$ and $25$ multiply to $100$, so the product becomes $761\\times100$.',
                  reason: 'multiplying the paired factors first'
                },
                { step: '$76\\,100$.', reason: 'the product $761\\times100$ equals this number' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't2-k2',
      forms: [
        {
          example: {
            problem: 'Compute $8\\times24$ using the distributive law.',
            lines: [
              { step: 'The number $24$ splits as $20+4$.', reason: 'the expanded form of $24$' },
              {
                step: 'The product $8\\times24$ equals $8\\times(20+4)$, which equals $(8\\times20)+(8\\times4)$.',
                reason: 'the distributive law'
              },
              { step: 'The two products equal $160$ and $32$.', reason: 'computing each part' },
              { step: '$192$.', reason: 'the sum $160+32$ equals this number' }
            ]
          },
          fade: [
            {
              prompt: 'Compute $7\\times53$.',
              answer: '371',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The number $53$ splits as $50+3$.', reason: 'the expanded form of $53$' },
                { step: 'The product $7\\times53$ equals $7\\times(50+3)$, which equals $(7\\times50)+(7\\times3)$.', reason: 'the distributive law' },
                { step: 'The two products equal $350$ and $21$.', reason: 'computing each part' },
                { step: '$371$.', reason: 'the sum $350+21$ equals this number' }
              ]
            },
            {
              prompt: 'Compute $6\\times39$.',
              answer: '234',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The number $39$ splits as $30+9$.', reason: 'the expanded form of $39$' },
                { step: 'The product $6\\times39$ equals $6\\times(30+9)$, which equals $(6\\times30)+(6\\times9)$.', reason: 'the distributive law' },
                { step: 'The two products equal $180$ and $54$.', reason: 'computing each part' },
                { step: '$234$.', reason: 'the sum $180+54$ equals this number' }
              ]
            },
            {
              prompt: 'Compute $9\\times94$.',
              answer: '846',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The number $94$ splits as $90+4$.', reason: 'the expanded form of $94$' },
                { step: 'The product $9\\times94$ equals $9\\times(90+4)$, which equals $(9\\times90)+(9\\times4)$.', reason: 'the distributive law' },
                { step: 'The two products equal $810$ and $36$.', reason: 'computing each part' },
                { step: '$846$.', reason: 'the sum $810+36$ equals this number' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Compute the difference between $9\\times9$ and $(4\\times4)+(5\\times5)$, given that $9=4+5$.',
            lines: [
              { step: 'The product $9\\times9$ equals $(4+5)\\times(4+5)$.', reason: 'the number $9$ equals $4+5$' },
              {
                step: 'The product $(4+5)\\times(4+5)$ equals $(4\\times4)+(4\\times5)+(5\\times4)+(5\\times5)$.',
                reason: 'the distributive law, applied to each of the two factors in turn'
              },
              {
                step: 'This sum equals $(4\\times4)+(5\\times5)+2\\times(4\\times5)$.',
                reason: 'the two middle terms both equal $4\\times5$, by the commutative law of multiplication'
              },
              {
                step: 'The difference between $9\\times9$ and $(4\\times4)+(5\\times5)$ equals $2\\times(4\\times5)$.',
                reason: 'the expansion of $9\\times9$ holds the terms $(4\\times4)+(5\\times5)$, so the difference is the term left over'
              },
              { step: '$40$.', reason: 'the product $2\\times(4\\times5)$ equals this number' }
            ]
          },
          fade: [
            {
              prompt: 'Compute the difference between $12\\times12$ and $(5\\times5)+(7\\times7)$, given that $12=5+7$.',
              answer: '70',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The product $12\\times12$ equals $(5+7)\\times(5+7)$.', reason: 'the number $12$ equals $5+7$' },
                {
                  step: 'The product $(5+7)\\times(5+7)$ equals $(5\\times5)+(5\\times7)+(7\\times5)+(7\\times7)$.',
                  reason: 'the distributive law, applied to each of the two factors in turn'
                },
                {
                  step: 'This sum equals $(5\\times5)+(7\\times7)+2\\times(5\\times7)$.',
                  reason: 'the two middle terms both equal $5\\times7$, by the commutative law of multiplication'
                },
                { step: 'The difference between $12\\times12$ and $(5\\times5)+(7\\times7)$ equals $2\\times(5\\times7)$.', reason: 'the expansion of $12\\times12$ holds the terms $(5\\times5)+(7\\times7)$, so the difference is the term left over' },
                { step: '$70$.', reason: 'the product $2\\times(5\\times7)$ equals this number' }
              ]
            },
            {
              prompt: 'Compute the difference between $18\\times18$ and $(12\\times12)+(6\\times6)$, given that $18=12+6$.',
              answer: '144',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The product $18\\times18$ equals $(12+6)\\times(12+6)$.', reason: 'the number $18$ equals $12+6$' },
                {
                  step: 'The product $(12+6)\\times(12+6)$ equals $(12\\times12)+(12\\times6)+(6\\times12)+(6\\times6)$.',
                  reason: 'the distributive law, applied to each of the two factors in turn'
                },
                {
                  step: 'This sum equals $(12\\times12)+(6\\times6)+2\\times(12\\times6)$.',
                  reason: 'the two middle terms both equal $12\\times6$, by the commutative law of multiplication'
                },
                { step: 'The difference between $18\\times18$ and $(12\\times12)+(6\\times6)$ equals $2\\times(12\\times6)$.', reason: 'the expansion of $18\\times18$ holds the terms $(12\\times12)+(6\\times6)$, so the difference is the term left over' },
                { step: '$144$.', reason: 'the product $2\\times(12\\times6)$ equals this number' }
              ]
            },
            {
              prompt: 'Compute the difference between $23\\times23$ and $(15\\times15)+(8\\times8)$, given that $23=15+8$.',
              answer: '240',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The product $23\\times23$ equals $(15+8)\\times(15+8)$.', reason: 'the number $23$ equals $15+8$' },
                {
                  step: 'The product $(15+8)\\times(15+8)$ equals $(15\\times15)+(15\\times8)+(8\\times15)+(8\\times8)$.',
                  reason: 'the distributive law, applied to each of the two factors in turn'
                },
                {
                  step: 'This sum equals $(15\\times15)+(8\\times8)+2\\times(15\\times8)$.',
                  reason: 'the two middle terms both equal $15\\times8$, by the commutative law of multiplication'
                },
                { step: 'The difference between $23\\times23$ and $(15\\times15)+(8\\times8)$ equals $2\\times(15\\times8)$.', reason: 'the expansion of $23\\times23$ holds the terms $(15\\times15)+(8\\times8)$, so the difference is the term left over' },
                { step: '$240$.', reason: 'the product $2\\times(15\\times8)$ equals this number' }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: 't2-p1',
      statement:
        'For all whole numbers $k$, $\\ell$, $m$, and $n$: $(k+\\ell)+m+n$ equals $(\\ell+n)+m+k$, which equals $(\\ell+n)+(m+k)$.',
      method: 'direct proof',
      idea: 'Each rearrangement regroups with the associative law or reorders with the commutative law, one pair at a time.',
      lines: [
        { line: 'Regrouping shows that $(k+\\ell)+m+n$ equals $(k+\\ell)+(m+n)$.', reason: 'the associative law of addition, applied to $k+\\ell$, $m$, and $n$' },
        { line: 'This equals $(k+\\ell)+(n+m)$.', reason: 'the commutative law of addition, applied to $m$ and $n$' },
        { line: 'This equals $k+\\ell+(n+m)$.', reason: 'the associative law of addition, regrouping $k$, $\\ell$, and $n+m$ into one sum' },
        { line: 'This equals $k+(\\ell+n)+m$.', reason: 'the associative law of addition, applied to $\\ell$, $n$, and $m$' },
        { line: 'This equals $(\\ell+n)+m+k$.', reason: 'the commutative law of addition, moving $k$ to the end' },
        { line: 'This equals $(\\ell+n)+(m+k)$.', reason: 'the associative law of addition, applied to $\\ell+n$, $m$, and $k$' },
        {
          line: 'Therefore $(k+\\ell)+m+n$ equals $(\\ell+n)+m+k$, which equals $(\\ell+n)+(m+k)$.',
          reason: 'combining the six equalities above'
        }
      ]
    }
  ],
  prove: [
    {
      id: 't2-s1',
      statement: 'For all whole numbers $m$, $n$, and $\\ell$: $m(n+\\ell)$ equals $mn+m\\ell$.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'Consider a rectangle with vertical side $m$ and horizontal side $n+\\ell$.', reason: 'the product $m(n+\\ell)$ is the area of this rectangle' },
          {
            line: 'This rectangle splits into two rectangles that share the vertical side $m$ and have horizontal sides $n$ and $\\ell$.',
            reason: 'cutting the horizontal side of length $n+\\ell$ at the point $n$ steps from its left end'
          },
          { line: 'The two pieces have areas $mn$ and $m\\ell$.', reason: 'the area of a rectangle with sides $m$ and $n$ is $mn$, and likewise for sides $m$ and $\\ell$' },
          {
            line: 'The area of the whole rectangle equals the sum of the areas of the two pieces.',
            reason: 'the area is the number of unit squares that tile a rectangle, and tiling both pieces tiles the whole'
          },
          { line: 'Therefore $m(n+\\ell)$ equals $mn+m\\ell$.', reason: 'substituting the area of the whole rectangle and the sum of the two pieces\' areas' }
        ]
      }
    }
  ]
}
