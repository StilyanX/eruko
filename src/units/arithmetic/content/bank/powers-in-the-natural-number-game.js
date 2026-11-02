// Powers in the Natural Number Game: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't44-k1-p01',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Compute $5^0$.',
    answer: '1',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $5^0$.',
      'By the recursive definition of powers, $a^0=1$ for every $a$.',
      '$1$.'
    ]
  },
  {
    id: 't44-k1-p02',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Compute $2^5$, unwinding the recursive definition of powers one exponent at a time.',
    answer: '32',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $2^5$, unwinding the recursive definition of powers one exponent at a time.',
      '$2^0=1$, by the recursive definition of powers.',
      '$2^1=2^0\\times2=1\\times2=2$.',
      '$2^2=2^1\\times2=2\\times2=4$.',
      '$2^3=2^2\\times2=4\\times2=8$.',
      '$2^4=2^3\\times2=8\\times2=16$.',
      '$2^5=2^4\\times2=16\\times2=32$.',
      '$32$.'
    ]
  },
  {
    id: 't44-k1-p03',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Decide whether $0^7=0$.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $0^7=0$.',
      'For every $m$, $0^{m+1}=0$, by the theorem on 0 raised to a successor.',
      'Since $7$ is the successor of $6$, $0^7=0^{6+1}=0$, by that theorem with $m=6$.',
      'Yes.'
    ]
  },
  {
    id: 't44-k1-p04',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Decide whether $1^{200}=1$.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $1^{200}=1$.',
      'For every $m$, $1^m=1$, by the theorem that $1$ raised to every power equals $1$.',
      'So $1^{200}=1$, by that theorem with $m=200$.',
      'Yes.'
    ]
  },
  {
    id: 't44-k1-p05',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Prove that for every number $a$, $a^2\\times a=a^3$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every number $a$, $a^2\\times a=a^3$.',
      'By the recursive definition of powers, $a^{n+1}=a^n\\times a$ for every $a$ and $n$.',
      'Applying this with $n=2$ gives $a^{2+1}=a^2\\times a$.',
      '$2+1=3$, so $a^{2+1}=a^3$.',
      'So $a^2\\times a=a^3$, by the transitivity of equality, from $a^{2+1}=a^2\\times a$ and $a^{2+1}=a^3$.'
    ]
  },
  {
    id: 't44-k1-p06',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Compute $2^3\\times2^2$ and $2^{3+2}$, and decide whether they are equal.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Compute $2^3\\times2^2$ and $2^{3+2}$, and decide whether they are equal.',
      'Because $2^3=8$ and $2^2=4$, $2^3\\times2^2=8\\times4=32$.',
      'The exponent sum is $3+2=5$, and $2^5=32$.',
      '$32=32$, so $2^3\\times2^2=2^{3+2}$.',
      'Yes.'
    ]
  },
  {
    id: 't44-k1-p07',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Compute $(2^3)^2$ and $2^{3\\times2}$, and decide whether they are equal.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Compute $(2^3)^2$ and $2^{3\\times2}$, and decide whether they are equal.',
      '$2^3=8$, so $(2^3)^2=8^2=64$.',
      'The exponent product is $3\\times2=6$, and $2^6=64$.',
      '$64=64$, so $(2^3)^2=2^{3\\times2}$.',
      'Yes.'
    ]
  },
  {
    id: 't44-k1-p08',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Compute $5^2+2\\times5\\times3+3^2$ and $(5+3)^2$, and decide whether they are equal.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Compute $5^2+2\\times5\\times3+3^2$ and $(5+3)^2$, and decide whether they are equal.',
      'Since $5^2=25$, $3^2=9$ and $2\\times5\\times3=30$, the sum is $5^2+2\\times5\\times3+3^2=25+30+9=64$.',
      '$5+3=8$, so $(5+3)^2=8^2=64$.',
      '$64=64$.',
      'Yes.'
    ]
  },
  {
    id: 't44-k1-p13',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Prove that for every number $a$, if $a$ is not equal to 0, then $a^2$ is not equal to 0.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every number $a$, if $a$ is not equal to 0, then $a^2$ is not equal to 0.',
      'Suppose that $a \\neq 0$.',
      'Then $a^2=a\\times a$, by the theorem that a number squared equals that number times itself.',
      'The product $a \\times a$ is not 0, because both factors are nonzero and a product of nonzero numbers is not 0.',
      'So $a^2$ is not equal to $0$, by substituting $a^2=a\\times a$.'
    ]
  },
  {
    id: 't44-k1-p10',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Prove that for every number $a$, $a^1\\times a^1=a^2$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every number $a$, $a^1\\times a^1=a^2$.',
      'For all numbers $a$, $m$, and $n$, $a^{m+n}=a^m\\times a^n$, by the theorem on powers of a sum of exponents.',
      'Applying this with $m=n=1$ gives $a^{1+1}=a^1\\times a^1$.',
      '$1+1=2$, so $a^{1+1}=a^2$.',
      'So $a^1\\times a^1=a^2$, by the transitivity of equality, from $a^{1+1}=a^1\\times a^1$ and $a^{1+1}=a^2$.'
    ]
  },
  {
    id: 't44-k1-p11',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Prove that for all numbers $a$ and $b$, if $a=b$, then $a^4=b^4$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for all numbers $a$ and $b$, if $a=b$, then $a^4=b^4$.',
      'Suppose that $a=b$.',
      'The power $a^4$ is a single natural number determined by $a$, by the recursive definition of powers.',
      'So replacing $a$ by the equal number $b$ inside $a^4$ leaves the value unchanged, by the meaning of equality.',
      'So $a^4=b^4$.'
    ]
  },
  {
    id: 't44-k1-p12',
    topic: 'powers-in-the-natural-number-game',
    kind: 't44-k1',
    calc: 'yes',
    prompt: 'Compute $3^4$ and $9^2$, and decide whether they are equal.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Compute $3^4$ and $9^2$, and decide whether they are equal.',
      '$3^2=9$, and $3^4=(3^2)^2$ by the theorem on a power raised to a power, applied with $m=2$ and $n=2$.',
      'So $3^4=9^2$.',
      '$9^2=81$, and unwinding $3^4=3^3\\times3=(3^2\\times3)\\times3=(9\\times3)\\times3=27\\times3=81$ gives the same value.',
      'Yes.'
    ]
  }
]
