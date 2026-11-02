// The Euclidean Algorithm: the greatest common divisor by repeated division-with-remainder,
// and, run backwards, as an integral linear combination of the two numbers.
export default {
  number: 31,
  manyParts: false,
  bare: {
    prompt: 'Find $\\gcd(24, 54)$.',
    answer: '6',
    form: 'Answer as a whole number.',
    solution: [
      'Find $\\gcd(24, 54)$.',
      'The divisors of $24$ are $1,2,3,4,6,8,12,24$, and the divisors of $54$ are $1,2,3,6,9,18,27,54$. The common divisors are $1,2,3,6$.',
      'The greatest of them is $6$, so $\\gcd(24, 54)=6$.',
      '$6$.'
    ]
  },
  ideas: [
    {
      name: 'Greatest common divisor',
      concrete: 'The common divisors of $8$ and $12$ are $1$, $2$, $4$, so $\\gcd(8,12)=4$.',
      general:
        'For whole numbers $a$ and $b$ not both $0$, $\\gcd(a,b)$ is the **greatest common divisor**: the greatest whole number dividing both $a$ and $b$. By definition, $\\gcd(a,0)=a$ for a nonzero whole number $a$, and $\\gcd(b,1)=1$ for every whole number $b$.'
    },
    {
      name: 'Relatively prime whole numbers',
      concrete: 'The numbers $12$ and $175$ are relatively prime, though neither is a prime.',
      general:
        'Two whole numbers $a$ and $b$ are **relatively prime** if their only common divisor is $1$, that is, if $\\gcd(a,b)=1$.'
    },
    {
      name: 'Integral linear combination',
      concrete: 'The equation $64=(9 \\times 1\\,344)+(-4) \\times 3\\,008$ expresses $64$ as an integral linear combination of $1\\,344$ and $3\\,008$.',
      general:
        'An **integral linear combination** of whole numbers $a$ and $b$ is a sum $ma+nb$ for integers $m$ and $n$.'
    },
    {
      name: 'The Euclidean algorithm',
      concrete: 'The equations $54=(2 \\times 24)+6$ and $24=(4 \\times 6)+0$ give $\\gcd(54,24)=\\gcd(24,6)=6$.',
      general:
        'To find $\\gcd(a,b)$ for whole numbers $a\\ge b>0$, divide $a$ by $b$ with remainder, $a=qb+r$. Replace $a,b$ by $b,r$, since $\\gcd(a,b)=\\gcd(b,r)$, and repeat until a remainder is $0$. The last nonzero remainder is $\\gcd(a,b)$, or $b$ if the first remainder is $0$. This procedure is the **Euclidean algorithm**. Running its divisions backwards writes $\\gcd(a,b)$ as an integral linear combination $ma+nb$.'
    }
  ],
  kinds: [
    {
      id: 't31-k1',
      forms: [
        {
          example: {
            problem: 'Find $\\gcd(3\\,008, 1\\,344)$.',
            lines: [
              {
                step: 'The division $3\\,008=2 \\times 1\\,344+320$ gives $\\gcd(3\\,008,1\\,344)=\\gcd(1\\,344,320)$.',
                reason: 'common divisors of two numbers in a division-with-remainder are exactly the common divisors of the divisor and the remainder'
              },
              {
                step: 'The division $1\\,344=4 \\times 320+64$ gives $\\gcd(1\\,344,320)=\\gcd(320,64)$.',
                reason: 'the same reduction, applied again'
              },
              {
                step: 'The division $320=5 \\times 64+0$ gives $\\gcd(320,64)=\\gcd(64,0)=64$.',
                reason: 'the definition $\\gcd(a,0)=a$'
              },
              { step: 'So $\\gcd(3\\,008,1\\,344)=64$.', reason: 'chaining the three equalities' },
              { step: '$64$.', reason: 'restating the gcd as the required answer' }
            ]
          },
          fade: [
            {
              prompt: 'Find $\\gcd(693, 210)$.',
              answer: '21',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: 'The division $693=3 \\times 210+63$ gives $\\gcd(693,210)=\\gcd(210,63)$.',
                  reason: 'common divisors of two numbers in a division-with-remainder are exactly the common divisors of the divisor and the remainder'
                },
                {
                  step: 'The division $210=3 \\times 63+21$ gives $\\gcd(210,63)=\\gcd(63,21)$.',
                  reason: 'the same reduction, applied again'
                },
                {
                  step: 'The division $63=3 \\times 21+0$ gives $\\gcd(63,21)=\\gcd(21,0)=21$.',
                  reason: 'the definition $\\gcd(a,0)=a$'
                },
                { step: 'So $\\gcd(693,210)=21$.', reason: 'chaining the three equalities' },
                { step: '$21$.', reason: 'restating the gcd as the required answer' }
              ]
            },
            {
              prompt: 'Find $\\gcd(180, 156)$.',
              answer: '12',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: 'The division $180=1 \\times 156+24$ gives $\\gcd(180,156)=\\gcd(156,24)$.',
                  reason: 'common divisors of two numbers in a division-with-remainder are exactly the common divisors of the divisor and the remainder'
                },
                {
                  step: 'The division $156=6 \\times 24+12$ gives $\\gcd(156,24)=\\gcd(24,12)$.',
                  reason: 'the same reduction, applied again'
                },
                {
                  step: 'The division $24=2 \\times 12+0$ gives $\\gcd(24,12)=\\gcd(12,0)=12$.',
                  reason: 'the definition $\\gcd(a,0)=a$'
                },
                { step: 'So $\\gcd(180,156)=12$.', reason: 'chaining the three equalities' },
                { step: '$12$.', reason: 'restating the gcd as the required answer' }
              ]
            },
            {
              prompt: 'Find $\\gcd(29, 10)$.',
              answer: '1',
              form: 'Answer as a whole number.',
              lines: [
                {
                  step: 'The division $29=2 \\times 10+9$ gives $\\gcd(29,10)=\\gcd(10,9)$.',
                  reason: 'common divisors of two numbers in a division-with-remainder are exactly the common divisors of the divisor and the remainder'
                },
                {
                  step: 'The division $10=1 \\times 9+1$ gives $\\gcd(10,9)=\\gcd(9,1)$.',
                  reason: 'the same reduction, applied again'
                },
                {
                  step: 'The division $9=9 \\times 1+0$ gives $\\gcd(9,1)=\\gcd(1,0)=1$.',
                  reason: 'the definition $\\gcd(a,0)=a$'
                },
                { step: 'So $\\gcd(29,10)=1$.', reason: 'chaining the three equalities' },
                { step: '$1$.', reason: 'restating the gcd as the required answer' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't31-k2',
      forms: [
        {
          example: {
            problem: 'Find integers $m$ and $n$, in that order, so that $\\gcd(884, 374)=884m+374n$.',
            lines: [
              {
                step:
                  'The Euclidean algorithm gives $884=2 \\times 374+136$; $374=2 \\times 136+102$; $136=1 \\times 102+34$; $102=3 \\times 34+0$.',
                reason: 'the Euclidean algorithm'
              },
              { step: 'So $\\gcd(884,374)=34$.', reason: 'the last nonzero remainder' },
              {
                step: 'The third equation gives $34=136-1 \\times 102=136-1 \\times(374-2 \\times 136)=3 \\times 136-1 \\times 374$.',
                reason: 'back-substituting the third equation, keeping $374$ intact'
              },
              {
                step: 'The first equation gives $34=3 \\times(884-2 \\times 374)-1 \\times 374=3 \\times 884-7 \\times 374$.',
                reason: 'back-substituting the first equation, keeping $884$ intact'
              },
              { step: '$3$, $-7$.', reason: 'restating the two coefficients $m$ and $n$, in that order, as the required answer' }
            ]
          },
          fade: [
            {
              prompt: 'Find integers $m$ and $n$, in that order, so that $\\gcd(23, 16)=23m+16n$.',
              answer: '7, -10',
              form: 'Answer as integers separated by commas, in the order asked.',
              lines: [
                {
                  step: 'The Euclidean algorithm gives $23=1 \\times 16+7$; $16=2 \\times 7+2$; $7=3 \\times 2+1$; $2=2 \\times 1+0$.',
                  reason: 'the Euclidean algorithm'
                },
                { step: 'So $\\gcd(23,16)=1$.', reason: 'the last nonzero remainder' },
                {
                  step: 'The third equation gives $1=7-3 \\times 2=7-3 \\times(16-2 \\times 7)=7 \\times 7-3 \\times 16$.',
                  reason: 'back-substituting the third equation, keeping $16$ intact'
                },
                {
                  step: 'The first equation gives $1=7 \\times(23-1 \\times 16)-3 \\times 16=7 \\times 23-10 \\times 16$.',
                  reason: 'back-substituting the first equation, keeping $23$ intact'
                },
                { step: '$7$, $-10$.', reason: 'restating the two coefficients $m$ and $n$, in that order, as the required answer' }
              ]
            },
            {
              prompt: 'Find integers $m$ and $n$, in that order, so that $\\gcd(354, 96)=354m+96n$.',
              answer: '3, -11',
              form: 'Answer as integers separated by commas, in the order asked.',
              lines: [
                {
                  step: 'The Euclidean algorithm gives $354=3 \\times 96+66$; $96=1 \\times 66+30$; $66=2 \\times 30+6$; $30=5 \\times 6+0$.',
                  reason: 'the Euclidean algorithm'
                },
                { step: 'So $\\gcd(354,96)=6$.', reason: 'the last nonzero remainder' },
                {
                  step: 'The third equation gives $6=66-2 \\times 30=66-2 \\times(96-1 \\times 66)=3 \\times 66-2 \\times 96$.',
                  reason: 'back-substituting the third equation, keeping $96$ intact'
                },
                {
                  step: 'The first equation gives $6=3 \\times(354-3 \\times 96)-2 \\times 96=3 \\times 354-11 \\times 96$.',
                  reason: 'back-substituting the first equation, keeping $354$ intact'
                },
                { step: '$3$, $-11$.', reason: 'restating the two coefficients $m$ and $n$, in that order, as the required answer' }
              ]
            },
            {
              prompt: 'Find integers $m$ and $n$, in that order, so that $\\gcd(343, 280)=343m+280n$.',
              answer: '9, -11',
              form: 'Answer as integers separated by commas, in the order asked.',
              lines: [
                {
                  step: 'The Euclidean algorithm gives $343=1 \\times 280+63$; $280=4 \\times 63+28$; $63=2 \\times 28+7$; $28=4 \\times 7+0$.',
                  reason: 'the Euclidean algorithm'
                },
                { step: 'So $\\gcd(343,280)=7$.', reason: 'the last nonzero remainder' },
                {
                  step: 'The third equation gives $7=63-2 \\times 28=63-2 \\times(280-4 \\times 63)=9 \\times 63-2 \\times 280$.',
                  reason: 'back-substituting the third equation, keeping $280$ intact'
                },
                {
                  step: 'The first equation gives $7=9 \\times(343-1 \\times 280)-2 \\times 280=9 \\times 343-11 \\times 280$.',
                  reason: 'back-substituting the first equation, keeping $343$ intact'
                },
                { step: '$9$, $-11$.', reason: 'restating the two coefficients $m$ and $n$, in that order, as the required answer' }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: 't31-p1',
      method: 'proof by contradiction',
      statement: 'Let $a$ and $b$ be whole numbers, not both $0$. Then $\\gcd(a,b)$ is an integral linear combination of $a$ and $b$.',
      idea: 'Take the failing pair with the least second number. The pair formed by that second number and the remainder does not fail. Its integral linear combination gives one for the first pair, a contradiction.',
      lines: [
        {
          line: 'Consider pairs of whole numbers $a$, $b$, not both $0$. Call such a pair failing when $\\gcd(a,b)$ is not an integral linear combination of $a$ and $b$.',
          reason: 'the definition of a failing pair'
        },
        {
          line: 'A pair $a$, $0$ is not failing, since $\\gcd(a,0)=a=(1 \\times a)+(0 \\times 0)$.',
          reason: 'the definition $\\gcd(a,0)=a$ for a nonzero whole number $a$'
        },
        {
          line: 'Suppose that some pair is failing. Choose a failing pair $a$, $b$ whose second number $b$ is the least second number of a failing pair.',
          reason: 'every nonempty set of whole numbers has a least member, and every failing pair has second number at least $1$'
        },
        {
          line: 'Divide $a$ by $b$: $a=qb+r$, where $q$ and $r$ are whole numbers and $0\\le r<b$.',
          reason: 'division-with-remainder, since $b>0$'
        },
        {
          line: 'The common divisors of $a$ and $b$ are exactly the common divisors of $b$ and $r$, so $\\gcd(a,b)=\\gcd(b,r)$.',
          reason: 'a number that divides $a$ and $b$ divides $r=a-qb$, and a number that divides $b$ and $r$ divides $a=qb+r$'
        },
        {
          line: 'The pair $b$, $r$ is not failing, so $\\gcd(b,r)=mb+nr$ for some integers $m$ and $n$.',
          reason: 'the number $b$ is nonzero, and $r$ is less than $b$, the least second number of a failing pair'
        },
        {
          line: 'So $\\gcd(a,b)=mb+n(a-qb)=na+(m-nq)b$.',
          reason: 'substituting $r=a-qb$, then using the distributive law'
        },
        {
          line: 'The numbers $n$ and $m-nq$ are integers, so the pair $a$, $b$ is not failing, which contradicts its choice.',
          reason: 'sums, differences, and products of integers are integers'
        },
        {
          line: 'So, for whole numbers $a$ and $b$ not both $0$, $\\gcd(a,b)$ is an integral linear combination of $a$ and $b$.',
          reason: 'the supposition that some pair is failing leads to a contradiction'
        }
      ]
    },
    {
      id: 't31-p2',
      method: 'direct proof',
      statement: 'If $p$ is a prime and $p\\mid ab$ for whole numbers $a$ and $b$, then $p\\mid a$ or $p\\mid b$.',
      idea: 'Write $1$ as an integral linear combination of $p$ and $a$, then multiply by $b$. The prime $p$ divides both terms, so $p$ divides $b$.',
      lines: [
        { line: 'If $p\\mid a$, the conclusion already holds.', reason: 'the definition of or' },
        { line: 'Suppose that $p\\nmid a$.', reason: 'the remaining case' },
        {
          line: 'The only possible divisors of $p$ are $1$ and $p$, since $p$ is a prime. So the only possible common divisors of $a$ and $p$ are $1$ and $p$.',
          reason: 'the definition of a prime'
        },
        { line: 'The fact $p\\nmid a$ excludes $p$ as a common divisor, so $\\gcd(a,p)=1$.', reason: 'only $1$ remains as a possible common divisor' },
        { line: 'So $1=mp+na$ for integers $m$ and $n$.', reason: 'the Euclidean algorithm, which writes $\\gcd(a,b)$ as an integral linear combination $ma+nb$ by repeated division-with-remainder' },
        { line: 'Multiplying both sides by $b$ gives $b=mbp+nab$.', reason: 'equal numbers multiplied by the same number stay equal' },
        { line: 'The prime $p$ divides $mbp$, and $p$ divides $nab$, since $p\\mid ab$.', reason: 'the definition of divisibility' },
        { line: 'So $p$ divides the right side of $b=mbp+nab$, hence the left side, $b$.', reason: 'a number that divides two numbers divides their sum' },
        { line: 'So $p\\mid a$ or $p\\mid b$.', reason: 'the first line settles the case $p\\mid a$, and the previous line settles the case $p\\nmid a$' }
      ]
    },
    {
      id: 't31-p5',
      method: 'direct proof',
      statement: 'Suppose that $a$, $b$, $k$ are whole numbers such that $k\\mid ab$ and $\\gcd(a,k)=1$. Then $k\\mid b$.',
      idea: 'Write $1$ as an integral linear combination of $a$ and $k$. Multiply by $b$, as in the proof for a prime. Then $k$ divides both terms, so $k$ divides $b$.',
      lines: [
        { line: 'The equation $\\gcd(a,k)=1$ gives $1=ma+nk$ for integers $m$ and $n$.', reason: 'the Euclidean algorithm, which writes $\\gcd(a,b)$ as an integral linear combination $ma+nb$ by repeated division-with-remainder' },
        { line: 'Multiplying both sides by $b$ gives $b=mab+nkb$.', reason: 'equal numbers multiplied by the same number stay equal' },
        { line: 'The number $k$ divides $mab$, since $k\\mid ab$, and $k$ divides $nkb$, since $k$ is itself a factor of $nkb$.', reason: 'the definition of divisibility' },
        { line: 'So $k$ divides the right side of $b=mab+nkb$, hence the left side, $b$.', reason: 'a number that divides two numbers divides their sum' },
        { line: 'So $k\\mid b$.', reason: 'the previous line, written with the divisibility sign' }
      ]
    },
    {
      id: 't31-p3',
      method: 'proof by cases',
      statement: 'If $p$, $q$, $s$ are primes and $n=pqs$, then $n$ has no prime decomposition other than $pqs$, up to rearrangement.',
      idea: 'Each prime that divides $n$ must equal $p$, $q$, or $s$, and counting exponents rules out every other decomposition.',
      lines: [
        {
          line: 'Let $p\'$ be a prime dividing $n=pqs$. Then $p\'\\mid p(qs)$.',
          reason: 'the product $n=pqs$ regrouped as $p(qs)$'
        },
        {
          line: 'If $p\'=p$, then $p\'$ is one of $p$, $q$, $s$. If not, $p\'\\ne p$, so $\\gcd(p,p\')=1$. Then $p\'\\mid p(qs)$ gives $p\'\\mid qs$.',
          reason: 'two distinct primes are relatively prime, and a divisor of a product relatively prime to one factor divides the other'
        },
        {
          line: 'If $p\'=q$, then $p\'$ is one of $p$, $q$, $s$. If not, $\\gcd(p\',q)=1$, so $p\'\\mid qs$ gives $p\'\\mid s$. Then $p\'=s$, since both are primes.',
          reason: 'the two rules cited in the previous line, and a prime dividing a prime equals it'
        },
        {
          line: 'So every prime dividing $n$ is one of $p$, $q$, $s$. Every other prime decomposition of $n$ can use only $p$, $q$, $s$.',
          reason: 'the case analysis exhausts every prime divisor of $n$'
        },
        {
          line: 'Case $p$, $q$, $s$ not all distinct, say $p=q$ and $p\\ne s$. Then $n=p^2s$, and only $p$, $s$ may appear in a decomposition. Suppose $p^ks^j=p^2s$ with whole numbers $k$ and $j$.',
          reason: 'every prime divisor of $n$ is $p$ or $s$'
        },
        {
          line: 'Cancel the lesser power of $p$ and the lesser power of $s$ from both sides. This leaves two equal products of $p$ and $s$ with whole exponents and no prime on both sides.',
          reason: 'cancelling a nonzero common factor from both sides'
        },
        {
          line: 'A prime left on one side divides the other side. That side is $1$ or a power of the other prime. Then the prime divides $1$ or equals the other prime. Neither is possible, since a prime is at least $2$ and $p\\ne s$. So nothing is left, and $k=2$, $j=1$.',
          reason: 'a prime dividing a product of primes equals one of them'
        },
        {
          line: 'Case $p=q=s$. Then $n=p^3$, and only $p$ may appear, so $p^k=p^3$ forces $k=3$ by the same reasoning.',
          reason: 'cancellation, since $p\\ge2$'
        },
        {
          line: 'Case $p$, $q$, $s$ distinct. Suppose $p^kq^js^m=pqs$ with whole numbers $k$, $j$, $m$. Cancel the lesser power of each prime from both sides. This leaves two equal products of $p$, $q$, $s$ with whole exponents and no prime on both sides.',
          reason: 'cancelling a nonzero common factor from both sides'
        },
        {
          line: 'A prime left on one side divides the other side. That side is $1$ or a product of powers of the other two primes. Then the prime divides $1$ or equals one of them. Neither is possible, since a prime is at least $2$ and $p$, $q$, $s$ are distinct. So nothing is left, and $k=j=m=1$.',
          reason: 'a prime dividing a product of primes equals one of them'
        },
        {
          line: 'In every case, $pqs$ is the only prime decomposition of $n$, up to rearrangement.',
          reason: 'the cases cover every possibility for $p$, $q$, $s$'
        }
      ]
    }
  ],
  prove: [
    {
      id: 't31-s1',
      statement: 'For integers $a$ and $b$, there are integers $x$ and $y$ with $xa+yb=1$ if and only if $\\gcd(a,b)=1$.',
      method: 'proof by contradiction',
      check: {
        proof: [
          { line: 'Write $|a|$ and $|b|$ for $a$ and $b$ with their signs dropped. An integer divides $a$ exactly when it divides $|a|$, so $\\gcd(a,b)=\\gcd(|a|,|b|)$.', reason: 'the definition of divisibility of integers, since $-a=(-1)a$' },
          { line: 'If $a=b=0$, then $xa+yb=0$ for every pair of integers $x$, $y$, and $\\gcd(0,0)$ is not defined, so neither side holds. Otherwise $a$ and $b$ are not both $0$.', reason: 'multiplication by $0$, and the definition of the gcd for numbers not both $0$' },
          { line: 'Suppose that $xa+yb=1$ for integers $x$ and $y$, and suppose, for contradiction, that $g=\\gcd(a,b)\\ne1$, so $g\\ge2$.', reason: 'proof by contradiction, since $1$ divides both $a$ and $b$, so the gcd is at least $1$' },
          { line: 'Then $g$ divides $a$ and $b$, so $g$ divides $xa$ and $yb$, and $g$ then divides $xa+yb=1$.', reason: 'the definition of divisibility, then a number that divides two numbers divides their sum' },
          { line: 'So $1=cg$ for an integer $c$. Since $1$ and $g$ are positive, $c$ is positive, so $c\\ge1$ and $1=cg\\ge g\\ge2$, which is false.', reason: 'the definition of divisibility, the signs of products, and multiplying $c\\ge1$ by the positive number $g$' },
          { line: 'So $\\gcd(a,b)=1$.', reason: 'the supposition $g\\ne1$ is impossible' },
          { line: 'Conversely, suppose that $\\gcd(a,b)=1$. Then $\\gcd(|a|,|b|)=1$, so $1=m|a|+n|b|$ for integers $m$ and $n$.', reason: 'the first line, and the gcd of two whole numbers, not both $0$, is an integral linear combination of them' },
          { line: 'Since $|a|=a$ or $|a|=-a$, take $x=m$ or $x=-m$ so that $m|a|=xa$. Likewise take $y=n$ or $y=-n$ so that $n|b|=yb$.', reason: 'the definition of absolute value' },
          { line: 'Then $xa+yb=1$ for these integers $x$ and $y$.', reason: 'substituting into the previous line' },
          { line: 'So there are integers $x$ and $y$ with $xa+yb=1$ if and only if $\\gcd(a,b)=1$.', reason: 'combining both directions' }
        ]
      }
    },
    {
      id: 't31-s2',
      statement:
        'Let $M$, $N$, $m$, $n$ be whole numbers with $M/N=m/n$, where $m/n$ is a fraction in lowest terms. Then $M/m$ and $N/n$ are whole numbers.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The equation $M/N=m/n$ gives $Mn=Nm$.', reason: 'cross-multiplying two equal fractions' },
          { line: 'The number $m$ divides $Nm$, and $Nm=Mn$, so $m$ divides $Mn$.', reason: 'the definition of divisibility, together with substitution' },
          { line: 'The fraction $m/n$ is in lowest terms, so $\\gcd(m,n)=1$.', reason: 'the definition of a fraction in lowest terms' },
          {
            line: 'The number $m$ divides $Mn=nM$ and $\\gcd(n,m)=1$, so $m$ divides $M$.',
            reason: 'the rule that a divisor of a product relatively prime to one factor divides the other'
          },
          {
            line: 'By the same reasoning, $n$ divides $Nm=mN$ and $\\gcd(m,n)=1$, so $n$ divides $N$.',
            reason: 'the rule that a divisor of a product relatively prime to one factor divides the other'
          },
          { line: 'So $M/m$ and $N/n$ are whole numbers.', reason: 'the number $m$ divides $M$ and the number $n$ divides $N$' }
        ]
      }
    },
    {
      id: 't31-s3',
      statement: 'If $p$ and $q$ are primes and $n=pq$, then $n$ has no prime decomposition other than $pq$, up to rearrangement.',
      method: 'proof by cases',
      check: {
        proof: [
          { line: 'Let $p\'$ be a prime dividing $n=pq$.', reason: 'the choice of $p\'$' },
          {
            line: 'So $p\'$ divides $p$ or $p\'$ divides $q$.',
            reason: 'the rule that a prime dividing a product divides one of the factors'
          },
          {
            line: 'If $p\'$ divides $p$, then $p\'=p$, since two primes, one dividing the other, are equal. If not, $p\'$ divides $q$, so $p\'=q$.',
            reason: 'two primes, one dividing the other, are equal'
          },
          {
            line: 'Every prime dividing $n$ is $p$ or $q$, so every other decomposition of $n$ can only use $p$ and $q$.',
            reason: 'the two cases exhaust every prime divisor of $n$'
          },
          {
            line: 'Case $p=q$. Then $n=p^2$, and only $p$ may appear. Now $p^k=p^2$ forces $k=2$, since multiplying both sides by $1/p^2$ gives $p^{k-2}=1$, which is impossible unless $k=2$ because $p\\ge2$.',
            reason: 'a prime power equal to $1$ forces the exponent to be $0$'
          },
          {
            line: 'Case $p\\ne q$. If $p^kq^j=pq$ with $(k,j)\\ne(1,1)$, multiplying both sides by $1/(pq)$ gives $p^{k-1}q^{j-1}=1$. Since $p,q\\ge2$, this forces $k=j=1$.',
            reason: 'cancellation, and a prime cannot equal $1$'
          },
          {
            line: 'In both cases, $pq$ is the only prime decomposition of $n$, up to rearrangement.',
            reason: 'the two cases cover every possibility for $p$ and $q$'
          }
        ]
      }
    }
  ]
}
