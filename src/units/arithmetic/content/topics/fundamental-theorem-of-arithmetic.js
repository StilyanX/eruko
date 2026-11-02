// The Fundamental Theorem of Arithmetic: every whole number at least 2 has a prime
// decomposition, and that decomposition is unique.
export default {
  number: 30,
  manyParts: false,
  bare: {
    prompt: 'Find the prime decomposition of $133$.',
    answer: '7 × 19',
    form: 'Answer as the product of primes, as in 2^3 × 3 × 5.',
    solution: ['Find the prime decomposition of $133$.', 'Direct division shows that $7$ divides $133$, since $133=7 \\times 19$, and $19$ is a prime.', '$7 \\times 19$.']
  },
  ideas: [
    {
      name: 'Prime decomposition',
      concrete: 'The equation $12=2 \\times 2 \\times 3$ gives the prime decomposition of $12$.',
      general:
        'The **prime decomposition** of a whole number is its expression as a product of primes. A single prime counts as a product with one term.'
    },
    {
      name: 'Uniqueness up to rearrangement',
      concrete: 'The products $2 \\times 2 \\times 3$, $2 \\times 3 \\times 2$, and $3 \\times 2 \\times 2$ all count as the same decomposition of $12$.',
      general:
        'Two prime decompositions are the same decomposition if one is a rearrangement of the other. The **fundamental theorem of arithmetic** states that every whole number at least $2$ has a prime decomposition. That decomposition is unique up to rearrangement.'
    },
    {
      name: 'A prime dividing a product',
      concrete: 'The prime $3$ divides $4 \\times 3$, and $3$ divides the second factor, $3$.',
      general:
        'Let $a$ and $b$ be whole numbers, and let a prime $p$ divide $ab$. Then $p$ divides $a$ or $p$ divides $b$.'
    }
  ],
  kinds: [
    {
      id: 't30-k1',
      forms: [
        {
          example: {
            problem: 'Find the prime decomposition of $1\\,729$.',
            lines: [
              {
                step: 'Direct division shows that $7$ is a prime divisor of $1\\,729$, and $1\\,729 \\div 7=247$.',
                reason: 'direct division'
              },
              { step: 'So $1\\,729=7 \\times 247$.', reason: 'the definition of quotient' },
              {
                step: 'The number $247$ is not a prime, since $13$ is a prime divisor of $247$ and $247=13 \\times 19$.',
                reason: 'direct division'
              },
              {
                step: 'So $1\\,729=7 \\times 13 \\times 19$, and $19$ is a prime.',
                reason: 'substituting the decomposition of $247$'
              },
              { step: '$7 \\times 13 \\times 19$.', reason: 'restating the decomposition as the required answer' }
            ]
          },
          fade: [
            {
              prompt: 'Find the prime decomposition of $3\\,059$.',
              answer: '7 × 19 × 23',
              form: 'Answer as the product of primes, as in 2^3 × 3 × 5.',
              lines: [
                {
                  step: 'Direct division shows that $7$ is a prime divisor of $3\\,059$, and $3\\,059 \\div 7=437$.',
                  reason: 'direct division'
                },
                { step: 'So $3\\,059=7 \\times 437$.', reason: 'the definition of quotient' },
                {
                  step: 'The number $437$ is not a prime, since $19$ is a prime divisor of $437$ and $437=19 \\times 23$.',
                  reason: 'direct division'
                },
                {
                  step: 'So $3\\,059=7 \\times 19 \\times 23$, and $23$ is a prime.',
                  reason: 'substituting the decomposition of $437$'
                },
                { step: '$7 \\times 19 \\times 23$.', reason: 'restating the decomposition as the required answer' }
              ]
            },
            {
              prompt: 'Find the prime decomposition of $6\\,409$.',
              answer: '13 × 17 × 29',
              form: 'Answer as the product of primes, as in 2^3 × 3 × 5.',
              lines: [
                {
                  step: 'Direct division shows that $13$ is a prime divisor of $6\\,409$, and $6\\,409 \\div 13=493$.',
                  reason: 'direct division'
                },
                { step: 'So $6\\,409=13 \\times 493$.', reason: 'the definition of quotient' },
                {
                  step: 'The number $493$ is not a prime, since $17$ is a prime divisor of $493$ and $493=17 \\times 29$.',
                  reason: 'direct division'
                },
                {
                  step: 'So $6\\,409=13 \\times 17 \\times 29$, and $29$ is a prime.',
                  reason: 'substituting the decomposition of $493$'
                },
                { step: '$13 \\times 17 \\times 29$.', reason: 'restating the decomposition as the required answer' }
              ]
            },
            {
              prompt: 'Find the prime decomposition of $3\\,689$.',
              answer: '7 × 17 × 31',
              form: 'Answer as the product of primes, as in 2^3 × 3 × 5.',
              lines: [
                {
                  step: 'Direct division shows that $7$ is a prime divisor of $3\\,689$, and $3\\,689 \\div 7=527$.',
                  reason: 'direct division'
                },
                { step: 'So $3\\,689=7 \\times 527$.', reason: 'the definition of quotient' },
                {
                  step: 'The number $527$ is not a prime, since $17$ is a prime divisor of $527$ and $527=17 \\times 31$.',
                  reason: 'direct division'
                },
                {
                  step: 'So $3\\,689=7 \\times 17 \\times 31$, and $31$ is a prime.',
                  reason: 'substituting the decomposition of $527$'
                },
                { step: '$7 \\times 17 \\times 31$.', reason: 'restating the decomposition as the required answer' }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: 't30-p1',
      method: 'proof by contradiction',
      statement: 'If a whole number $n$ is a composite, then $n$ has a prime divisor.',
      idea: 'The least proper divisor of a composite number cannot itself have a proper divisor less than it, so it must be prime.',
      lines: [
        {
          line: 'Since $n$ is a composite, it has at least one proper divisor.',
          reason: 'the definition of a composite'
        },
        {
          line: 'Let $d_0$ be the least among all the proper divisors of $n$.',
          reason: 'a nonempty set of whole numbers has a least member'
        },
        {
          line: 'Suppose, for contradiction, that $d_0$ is not a prime, so $d_0$ has a proper divisor $a$ with $1<a<d_0$.',
          reason: 'the definition of a prime, negated'
        },
        {
          line: 'The number $a$ divides $d_0$, and $d_0$ divides $n$, so $a$ divides $n$.',
          reason: 'the transitivity of divisibility'
        },
        {
          line: 'The number $a$ is a proper divisor of $n$ less than $d_0$. This contradicts the choice of $d_0$ as the least proper divisor of $n$.',
          reason: 'contradiction'
        },
        {
          line: 'So $d_0$ is a prime, and $d_0$ is a prime divisor of $n$.',
          reason: 'the supposition that $d_0$ is not a prime is impossible'
        }
      ]
    },
    {
      id: 't30-p2',
      method: 'proof by contradiction',
      statement: 'Every whole number $n\\ge2$ has a prime decomposition.',
      idea: 'Suppose that some whole number has no prime decomposition, and take the least such number. The decomposition of a number less than it then gives it one, which is a contradiction.',
      lines: [
        {
          line: 'Suppose, for contradiction, that some whole number $n\\ge2$ has no prime decomposition.',
          reason: 'the negation of the claim, for contradiction'
        },
        {
          line: 'Let $n_0$ be the least whole number $\\ge2$ with no prime decomposition.',
          reason: 'a nonempty set of whole numbers has a least member'
        },
        {
          line: 'The number $n_0$ is not a prime, since a prime is its own prime decomposition.',
          reason: 'the definition of prime decomposition'
        },
        {
          line: 'So $n_0$ is a composite and has a prime divisor $p$. Then $n_0=pA$ for a whole number $A$, with $1<p<n_0$.',
          reason: 'a composite has a prime divisor, and a prime divisor of a composite is a proper divisor'
        },
        {
          line: 'The number $A$ is less than $n_0$, since $n_0=pA$ and $p\\ge2$.',
          reason: 'dividing a number by a factor of at least $2$ gives a quotient less than that number'
        },
        {
          line: 'The number $A$ is at least $2$, since $p<n_0$ and $n_0=pA$.',
          reason: 'dividing a number by a factor less than itself gives a quotient greater than $1$'
        },
        {
          line: 'The number $A$ has a prime decomposition $A=q_1q_2\\cdots q_k$, since $2\\le A<n_0$ and $n_0$ is the least number with no prime decomposition.',
          reason: 'the minimality of $n_0$'
        },
        {
          line: 'So $n_0=pA=p \\times q_1 \\times q_2 \\times\\cdots\\times q_k$, a product of primes.',
          reason: 'substitution'
        },
        {
          line: 'This gives $n_0$ a prime decomposition, which contradicts that $n_0$ has none.',
          reason: 'contradiction'
        },
        {
          line: 'So every whole number $n\\ge2$ has a prime decomposition.',
          reason: 'the supposition that some whole number has none is impossible'
        }
      ]
    }
  ],
  prove: [
    {
      id: 't30-s1',
      statement: 'For a whole number $n$, no prime divides both $n$ and $n+1$.',
      method: 'proof by contradiction',
      check: {
        proof: [
          {
            line: 'Suppose, for contradiction, that a prime $p$ divides both $n$ and $n+1$.',
            reason: 'proof by contradiction'
          },
          {
            line: 'The prime $p$ divides $(n+1)-n=1$.',
            reason: 'a number that divides two numbers divides their difference'
          },
          { line: 'The only divisor of $1$ is $1$ itself, and $p\\ge2$.', reason: 'the definition of a prime' },
          { line: 'So $p$ cannot divide $1$. This contradicts the second line.', reason: 'the contradiction between $p\\mid1$ and $p\\ge2$' },
          { line: 'So no prime divides both $n$ and $n+1$.', reason: 'the supposition that some prime divides both is impossible' }
        ]
      }
    },
    {
      id: 't30-s2',
      statement: 'Every whole number $n\\ge1$ equals $2^k \\times m$ for a whole number $k$ and an odd whole number $m$.',
      method: 'strong induction',
      check: {
        proof: [
          {
            line: 'Take a whole number $n\\ge1$, and suppose that the claim holds for every whole number $j$ with $1\\le j<n$.',
            reason: 'the hypothesis of strong induction'
          },
          {
            line: 'If $n$ is odd, then $n=2^0 \\times n$, so $k=0$ and $m=n$ work.',
            reason: 'the power $2^0=1$'
          },
          {
            line: 'If $n$ is even, then $n=2A$ for a whole number $A$.',
            reason: 'the definition of even and of divisibility'
          },
          {
            line: 'The number $A$ is at least $1$, since $n\\ge1$, and $A<2A=n$.',
            reason: 'a whole number $A\\ge1$ is less than $2A$'
          },
          {
            line: 'So $A=2^j \\times m$ for a whole number $j$ and an odd whole number $m$.',
            reason: 'the inductive hypothesis, applied to $A$'
          },
          {
            line: 'Then $n=2 \\times 2^j \\times m=2^{j+1} \\times m$, so $k=j+1$ and this odd $m$ work.',
            reason: 'the rule $2^j \\times 2=2^{j+1}$ for powers'
          },
          {
            line: 'Every whole number $n\\ge1$ equals $2^k \\times m$ for a whole number $k$ and an odd whole number $m$.',
            reason: 'the principle of strong induction'
          }
        ]
      }
    }
  ]
}
