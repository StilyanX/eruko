export default {
  number: 8,
  manyParts: false,
  bare: {
    prompt: 'Compute $341 \\times 6$.',
    answer: '2 046',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $341 \\times 6$.',
      'The number $341$ has hundreds digit $3$, tens digit $4$, and ones digit $1$, so $341=(3\\times 100)+(4\\times 10)+1$.',
      '$341\\times 6=(3\\times 6)\\times 100+(4\\times 6)\\times 10+(1\\times 6)$, since multiplication distributes over addition.',
      '$(3\\times 6)\\times 100+(4\\times 6)\\times 10+(1\\times 6)=1\\,800+240+6$.',
      '$1\\,800+240+6=2\\,046$.',
      '$2\\,046$.'
    ]
  },
  ideas: [
    {
      name: 'Partial product',
      concrete: 'In $852\\times 73$, the two partial products are $852\\times 3=2\\,556$ and $852\\times 7=5\\,964$.',
      general:
        'Each digit of the second factor gives one **partial product**: the first factor times that digit, before the place-value shift. Shifting and adding every partial product gives the final product.'
    }
  ],
  kinds: [
    {
      id: 't8-k1',
      forms: [
        {
          example: {
            problem: 'Compute $852 \\times 3$ using the multiplication algorithm.',
            lines: [
              {
                step: '$2\\times 3=6$. Write $6$ in the ones column.',
                reason: 'multiply the ones digit of $852$ by $3$'
              },
              {
                step: '$5\\times 3=15$. Write $5$ in the tens column and carry $1$ to the hundreds column.',
                reason: 'multiply the tens digit of $852$ by $3$, then carry the extra ten into the next column'
              },
              {
                step: '$8\\times 3=24$, plus the carried $1$ is $25$. Write $25$.',
                reason: 'multiply the hundreds digit of $852$ by $3$, then add the carried digit, since no column follows'
              },
              {
                step: '$2\\,556$.',
                reason: 'read the digits written in each column, left to right'
              }
            ]
          },
          fade: [
            {
              prompt: 'Compute $731 \\times 4$ using the multiplication algorithm.',
              answer: '2 924',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: '$1\\times 4=4$. Write $4$ in the ones column.',
                  reason: 'multiply the ones digit of $731$ by $4$'
                },
                {
                  step: '$3\\times 4=12$. Write $2$ in the tens column and carry $1$ to the hundreds column.',
                  reason: 'multiply the tens digit of $731$ by $4$, then carry the extra ten into the next column'
                },
                {
                  step: '$7\\times 4=28$, plus the carried $1$ is $29$. Write $29$.',
                  reason: 'multiply the hundreds digit of $731$ by $4$, then add the carried digit, since no column follows'
                },
                {
                  step: '$2\\,924$.',
                  reason: 'read the digits written in each column, left to right'
                }
              ]
            },
            {
              prompt: 'Compute $671 \\times 2$ using the multiplication algorithm.',
              answer: '1 342',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: '$1\\times 2=2$. Write $2$ in the ones column.',
                  reason: 'multiply the ones digit of $671$ by $2$'
                },
                {
                  step: '$7\\times 2=14$. Write $4$ in the tens column and carry $1$ to the hundreds column.',
                  reason: 'multiply the tens digit of $671$ by $2$, then carry the extra ten into the next column'
                },
                {
                  step: '$6\\times 2=12$, plus the carried $1$ is $13$. Write $13$.',
                  reason: 'multiply the hundreds digit of $671$ by $2$, then add the carried digit, since no column follows'
                },
                {
                  step: '$1\\,342$.',
                  reason: 'read the digits written in each column, left to right'
                }
              ]
            },
            {
              prompt: 'Compute $521 \\times 8$ using the multiplication algorithm.',
              answer: '4 168',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: '$1\\times 8=8$. Write $8$ in the ones column.',
                  reason: 'multiply the ones digit of $521$ by $8$'
                },
                {
                  step: '$2\\times 8=16$. Write $6$ in the tens column and carry $1$ to the hundreds column.',
                  reason: 'multiply the tens digit of $521$ by $8$, then carry the extra ten into the next column'
                },
                {
                  step: '$5\\times 8=40$, plus the carried $1$ is $41$. Write $41$.',
                  reason: 'multiply the hundreds digit of $521$ by $8$, then add the carried digit, since no column follows'
                },
                {
                  step: '$4\\,168$.',
                  reason: 'read the digits written in each column, left to right'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't8-k2',
      forms: [
        {
          example: {
            problem: 'Compute $852 \\times 473$ using the multiplication algorithm.',
            lines: [
              { step: '$852\\times 3=2\\,556$.', reason: 'multiply $852$ by the ones digit of $473$, the first partial product' },
              { step: '$852\\times 7=5\\,964$.', reason: 'multiply $852$ by the tens digit of $473$, the second partial product' },
              { step: '$852\\times 4=3\\,408$.', reason: 'multiply $852$ by the hundreds digit of $473$, the third partial product' },
              {
                step: 'Write $5\\,964$ one column to the left of $2\\,556$, and $3\\,408$ two columns to the left of $2\\,556$.',
                reason: 'each partial product shifts left by as many columns as its digit\'s place value has zeros: $10$ for the tens digit, $100$ for the hundreds digit'
              },
              {
                step: 'Add the three shifted partial products column by column: $2\\,556+59\\,640+340\\,800=402\\,996$.',
                reason: 'add the partial products as in the addition algorithm'
              },
              { step: '$852\\times 473=402\\,996$.', reason: 'read off the sum of the shifted partial products' }
            ]
          },
          fade: [
            {
              prompt: 'Compute $618 \\times 327$ using the multiplication algorithm.',
              answer: '202 086',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$618\\times 7=4\\,326$.', reason: 'multiply $618$ by the ones digit of $327$, the first partial product' },
                { step: '$618\\times 2=1\\,236$.', reason: 'multiply $618$ by the tens digit of $327$, the second partial product' },
                { step: '$618\\times 3=1\\,854$.', reason: 'multiply $618$ by the hundreds digit of $327$, the third partial product' },
                {
                  step: 'Write $1\\,236$ one column to the left of $4\\,326$, and $1\\,854$ two columns to the left of $4\\,326$.',
                  reason: 'each partial product shifts left by as many columns as its digit\'s place value has zeros: $10$ for the tens digit, $100$ for the hundreds digit'
                },
                {
                  step: 'Add the three shifted partial products column by column: $4\\,326+12\\,360+185\\,400=202\\,086$.',
                  reason: 'add the partial products as in the addition algorithm'
                },
                { step: '$202\\,086$.', reason: 'read off the sum of the shifted partial products' }
              ]
            },
            {
              prompt: 'Compute $5\\,029 \\times 412$ using the multiplication algorithm.',
              answer: '2 071 948',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$5\\,029\\times 2=10\\,058$.', reason: 'multiply $5\\,029$ by the ones digit of $412$, the first partial product' },
                { step: '$5\\,029\\times 1=5\\,029$.', reason: 'multiply $5\\,029$ by the tens digit of $412$, the second partial product' },
                { step: '$5\\,029\\times 4=20\\,116$.', reason: 'multiply $5\\,029$ by the hundreds digit of $412$, the third partial product' },
                {
                  step: 'Write $5\\,029$ one column to the left of $10\\,058$, and $20\\,116$ two columns to the left of $10\\,058$.',
                  reason: 'each partial product shifts left by as many columns as its digit\'s place value has zeros: $10$ for the tens digit, $100$ for the hundreds digit'
                },
                {
                  step: 'Add the three shifted partial products column by column: $10\\,058+50\\,290+2\\,011\\,600=2\\,071\\,948$.',
                  reason: 'add the partial products as in the addition algorithm'
                },
                { step: '$2\\,071\\,948$.', reason: 'read off the sum of the shifted partial products' }
              ]
            },
            {
              prompt: 'Compute $246 \\times 803$ using the multiplication algorithm.',
              answer: '197 538',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$246\\times 3=738$.', reason: 'multiply $246$ by the ones digit of $803$, the first partial product' },
                { step: '$246\\times 0=0$.', reason: 'multiply $246$ by the tens digit of $803$, the second partial product' },
                { step: '$246\\times 8=1\\,968$.', reason: 'multiply $246$ by the hundreds digit of $803$, the third partial product' },
                {
                  step: 'Write $0$ one column to the left of $738$, and $1\\,968$ two columns to the left of $738$.',
                  reason: 'each partial product shifts left by as many columns as its digit\'s place value has zeros: $10$ for the tens digit, $100$ for the hundreds digit'
                },
                {
                  step: 'Add the three shifted partial products column by column: $738+0+196\\,800=197\\,538$.',
                  reason: 'add the partial products as in the addition algorithm'
                },
                { step: '$197\\,538$.', reason: 'read off the sum of the shifted partial products' }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: 't8-proof-single-digit',
      method: 'direct proof',
      statement:
        'Let $a$, $b$, and $c$ be digits and let $k$ be a single-digit whole number. Take the three-digit number with hundreds digit $a$, tens digit $b$, and ones digit $c$. The multiplication algorithm applied to this number and $k$ gives the product $(100a+10b+c)\\times k$.',
      idea: 'Expand the number by place value. Multiplying each digit by $k$ separately then gives the same carries as the algorithm, one column at a time.',
      lines: [
        {
          line: '$(100a+10b+c)\\times k=(100\\times (a\\times k))+(10\\times (b\\times k))+(c\\times k)$.',
          reason: 'the expanded form of the number, the distributive law, and the commutative and associative laws of multiplication'
        },
        {
          line:
            'Let $r_1$ be the tens digit of $c\\times k$ and $r_0$ its ones digit, so $c\\times k=10r_1+r_0$. Since $c$ and $k$ are digits, $c\\times k$ is less than $100$, so $r_1$ is itself a digit.',
          reason: 'a whole number less than $100$ has at most a tens digit and a ones digit'
        },
        {
          line:
            '$(100\\times (a\\times k))+(10\\times (b\\times k))+(c\\times k)=(100\\times (a\\times k))+(10\\times (b\\times k))+10r_1+r_0=(100\\times (a\\times k))+10\\times ((b\\times k)+r_1)+r_0$.',
          reason: 'substituting $c\\times k=10r_1+r_0$ and combining the two multiples of ten'
        },
        {
          line:
            'Let $q_1$ be the tens digit of $(b\\times k)+r_1$ and $q_0$ its ones digit, so $(b\\times k)+r_1=10q_1+q_0$. Since $b$ and $k$ are digits, $b\\times k$ is at most $81$. Since $r_1$ is a digit, $r_1$ is at most $9$. So $(b\\times k)+r_1$ is at most $90$, which is less than $100$. So $q_1$ is itself a digit.',
          reason: 'a whole number less than $100$ has at most a tens digit and a ones digit'
        },
        {
          line:
            '$(100\\times (a\\times k))+10\\times ((b\\times k)+r_1)+r_0=(100\\times (a\\times k))+10\\times (10q_1+q_0)+r_0=100\\times ((a\\times k)+q_1)+10q_0+r_0$.',
          reason: 'substituting $(b\\times k)+r_1=10q_1+q_0$ and combining the two multiples of a hundred'
        },
        {
          line:
            'So $(100a+10b+c)\\times k=100\\times ((a\\times k)+q_1)+10q_0+r_0$. The ones column holds $r_0$, the tens column holds $q_0$, and the whole number $(a\\times k)+q_1$ starts at the hundreds column. The multiplication algorithm records each column and its carried digit the same way.',
          reason: 'combining the previous lines, and no column follows the hundreds column for a three-digit first factor'
        }
      ]
    },
    {
      id: 't8-proof-two-digit-multiplier',
      method: 'direct proof',
      statement:
        'Let $N$ be a whole number and let $c$ and $d$ be digits. Take the two-digit number with tens digit $c$ and ones digit $d$. The multiplication algorithm applied to $N$ and this number gives the product $N\\times (10c+d)$.',
      idea: 'Split the second factor by place value. Its product with $N$ then becomes two partial products. One of them shifts one column left, because its digit is the tens digit and stands for ten times its own value.',
      lines: [
        {
          line: '$N\\times (10c+d)=(N\\times 10c)+(N\\times d)$.',
          reason: 'multiplication distributes over addition'
        },
        {
          line: '$N\\times 10c=(N\\times c)\\times 10$.',
          reason: 'the commutative and associative laws of multiplication regroup the factors'
        },
        {
          line: 'So $N\\times (10c+d)=((N\\times c)\\times 10)+(N\\times d)$.',
          reason: 'combining the previous two lines'
        },
        {
          line:
            'Write $N\\times d$ in one row and $N\\times c$ in the row below it, shifted one column to the left. Adding the rows column by column computes $((N\\times c)\\times 10)+(N\\times d)$.',
          reason: 'the addition algorithm adds column by column, and shifting a number one column left multiplies it by ten'
        },
        {
          line:
            'So the two rows the multiplication algorithm writes, $N\\times d$ and $N\\times c$ shifted one column left, add up to $N\\times (10c+d)$.',
          reason: 'combining the previous lines'
        }
      ]
    }
  ],
  prove: [
    {
      id: 't8-statement-left-to-right',
      statement:
        'Let $N$ be a whole number with digits $d_n,d_{n-1},\\ldots,d_1,d_0$, so that $N=(d_n\\times 10^n)+(d_{n-1}\\times 10^{n-1})+\\cdots+(d_1\\times 10)+d_0$, and let $k$ be a single-digit whole number. Then $N\\times k$ equals the sum of every digit\'s product with $k$, placed at that digit\'s own place value. You can compute and add the products in either order.',
      method: 'direct proof',
      check: {
        proof: [
          {
            line: '$N=(d_n\\times 10^n)+(d_{n-1}\\times 10^{n-1})+\\cdots+(d_1\\times 10)+d_0$.',
            reason: 'the expanded form of $N$ by place value'
          },
          {
            line:
              '$N\\times k=\\big((d_n\\times 10^n)+(d_{n-1}\\times 10^{n-1})+\\cdots+(d_1\\times 10)+d_0\\big)\\times k=(d_n\\times 10^n)\\times k+(d_{n-1}\\times 10^{n-1})\\times k+\\cdots+(d_1\\times 10)\\times k+d_0\\times k$.',
            reason: 'multiplication distributes over a sum of several terms'
          },
          {
            line: 'For every digit $d_i$ with place value $10^i$, $(d_i\\times 10^i)\\times k=(d_i\\times k)\\times 10^i$.',
            reason: 'the commutative and associative laws of multiplication'
          },
          {
            line:
              'So $N\\times k=(d_n\\times k)\\times 10^n+(d_{n-1}\\times k)\\times 10^{n-1}+\\cdots+(d_1\\times k)\\times 10+(d_0\\times k)$, the sum of each digit\'s product with $k$ placed at that digit\'s own place value.',
            reason: 'combining the previous lines'
          },
          {
            line:
              'This sum has the same value in whichever order you combine its terms. You can go from the ones place upward with carrying, or from the highest place downward, computing each product directly.',
            reason: 'the associative and commutative laws of addition'
          },
          {
            line:
              'Therefore $N\\times k=(d_n\\times k)\\times 10^n+(d_{n-1}\\times k)\\times 10^{n-1}+\\cdots+(d_1\\times k)\\times 10+(d_0\\times k)$, the sum of every digit\'s product with $k$ placed at that digit\'s own place value. You can compute and add the products in either order.',
            reason: 'combining the previous lines'
          }
        ]
      }
    },
    {
      id: 't8-statement-either-factor-drives',
      statement:
        'Let $N$ and $M$ be whole numbers. Apply the multiplication algorithm to $N\\times M$, using the digits of $M$ for the partial products. Apply it to $M\\times N$, using the digits of $N$. Both applications give the same product.',
      method: 'direct proof',
      check: {
        proof: [
          {
            line:
              'Let $M$ have digits $e_m,e_{m-1},\\ldots,e_1,e_0$, so $M=(e_m\\times 10^m)+(e_{m-1}\\times 10^{m-1})+\\cdots+(e_1\\times 10)+e_0$.',
            reason: 'the expanded form of $M$ by place value'
          },
          {
            line:
              '$N\\times M=N\\times\\big((e_m\\times 10^m)+(e_{m-1}\\times 10^{m-1})+\\cdots+(e_1\\times 10)+e_0\\big)=(N\\times e_m)\\times 10^m+(N\\times e_{m-1})\\times 10^{m-1}+\\cdots+(N\\times e_1)\\times 10+(N\\times e_0)$.',
            reason: 'the distributive law and the commutative and associative laws of multiplication, one digit of $M$ at a time'
          },
          {
            line:
              'Likewise, let $N$ have digits $d_n,d_{n-1},\\ldots,d_1,d_0$, so $N=(d_n\\times 10^n)+(d_{n-1}\\times 10^{n-1})+\\cdots+(d_1\\times 10)+d_0$. The same argument gives $M\\times N=(M\\times d_n)\\times 10^n+(M\\times d_{n-1})\\times 10^{n-1}+\\cdots+(M\\times d_1)\\times 10+(M\\times d_0)$.',
            reason: 'the same argument with the roles of $N$ and $M$ exchanged'
          },
          {
            line: '$N\\times M=M\\times N$.',
            reason: 'the commutative law of multiplication'
          },
          {
            line:
              'Therefore both applications give the same product.',
            reason: 'combining the previous lines, since both sums of partial products equal the same number'
          }
        ]
      }
    }
  ]
}
