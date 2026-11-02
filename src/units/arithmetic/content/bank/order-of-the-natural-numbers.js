// Order of the Natural Numbers: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't42-k1-p01',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $x<x$ is impossible.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $x<x$ is impossible.',
      'By the trichotomy law of order, exactly one of $x=y$, $x>y$, $x<y$ holds for every $x$ and $y$.',
      'For $y=x$, exactly one of $x=x$, $x>x$, $x<x$ holds.',
      'Since $x=x$ always holds, by the reflexivity of equality, neither $x>x$ nor $x<x$ can also hold.',
      'So $x<x$ is impossible.'
    ]
  },
  {
    id: 't42-k1-p02',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, if $x<y$ and $y=z$, then $x<z$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, if $x<y$ and $y=z$, then $x<z$.',
      'Suppose that $x<y$ and $y=z$.',
      'So $x<z$, by substituting the equal number $z$ for $y$ inside $x<y$.'
    ]
  },
  {
    id: 't42-k1-p03',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Decide whether 5 is at least 5.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether 5 is at least 5.',
      'Since $5=5$, by the reflexivity of equality, $5 \\geq 5$ holds by the definition of $\\geq$.',
      'Yes.'
    ]
  },
  {
    id: 't42-k1-p04',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$ and $y$, if $x \\geq y$ and $x \\neq y$, then $x>y$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$ and $y$, if $x \\geq y$ and $x \\neq y$, then $x>y$.',
      'Suppose that $x \\geq y$ and $x \\neq y$.',
      'Then $x>y$ or $x=y$, by the definition of $\\geq$.',
      'Since $x \\neq y$, the case $x=y$ fails.',
      'So $x>y$.'
    ]
  },
  {
    id: 't42-k1-p05',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Decide whether there exists a natural number less than 1.',
    answer: 'No',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether there exists a natural number less than 1.',
      'For every $x$, $x \\geq 1$, by the fact that every number is at least 1.',
      'So no $x$ satisfies $x<1$, because $x \\geq 1$ excludes $x<1$, by the trichotomy law of order.',
      'No.'
    ]
  },
  {
    id: 't42-k1-p06',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, $z$, and $w$, if $x>y$ and $z=w$, then $x+z>y+w$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, $z$, and $w$, if $x>y$ and $z=w$, then $x+z>y+w$.',
      'Suppose that $x>y$ and $z=w$.',
      'Then $x+z>y+z$, by the fact that addition preserves the order relation, applied to $x>y$.',
      'So $x+z>y+w$, by substituting the equal number $w$ for $z$ on the right of $x+z>y+z$.'
    ]
  },
  {
    id: 't42-k1-p07',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Decide whether 6 is less than 9.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether 6 is less than 9.',
      'By the definition of $<$, $6<9$ holds exactly when $9=6+v$ for some $v$.',
      'Since $9=6+3$, the number $v=3$ satisfies $9=6+v$.',
      'So $6<9$.',
      'Yes.'
    ]
  },
  {
    id: 't42-k1-p08',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$ and $y$, if $x<y$, then $x+1 \\leq y$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$ and $y$, if $x<y$, then $x+1 \\leq y$.',
      'Suppose that $x<y$.',
      'Then $y>x$, by the fact that less-than means greater-than reversed.',
      'So $y \\geq x+1$, by the fact that a number greater than $x$ is at least $x+1$.',
      'So $x+1 \\leq y$, by the fact that greater-or-equal means less-or-equal reversed.'
    ]
  },
  {
    id: 't42-k1-p09',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Decide whether every natural number has a natural number less than it.',
    answer: 'No',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether every natural number has a natural number less than it.',
      'For $x=1$, every $y$ satisfies $y \\geq 1$, by the fact that every number is at least 1.',
      'So no $y$ satisfies $y<1$, because $y \\geq 1$ excludes $y<1$, by the trichotomy law of order.',
      'So 1 has no natural number less than it.',
      'No.'
    ]
  },
  {
    id: 't42-k1-p10',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, if $x \\leq y$ and $y \\leq z$ and $x \\neq z$, then $x<z$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, if $x \\leq y$ and $y \\leq z$ and $x \\neq z$, then $x<z$.',
      'Suppose that $x \\leq y$ and $y \\leq z$ and $x \\neq z$.',
      'Then $x \\leq z$, by the transitivity of the order relation, applied to $x \\leq y$ and $y \\leq z$.',
      'Then $x<z$ or $x=z$, by the definition of $\\leq$.',
      'Since $x \\neq z$, the case $x=z$ fails.',
      'So $x<z$.'
    ]
  },
  {
    id: 't42-k1-p11',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Decide whether 23 is greater than 19.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether 23 is greater than 19.',
      'By the definition of $>$, $23>19$ holds exactly when $23=19+u$ for some $u$.',
      'Since $23=19+4$, the number $u=4$ satisfies $23=19+u$.',
      'So $23>19$.',
      'Yes.'
    ]
  },
  {
    id: 't42-k1-p12',
    topic: 'order-of-the-natural-numbers',
    kind: 't42-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, if $x$ is not equal to 1, then $x>1$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, if $x$ is not equal to 1, then $x>1$.',
      'Suppose that $x \\neq 1$.',
      'Then $x \\geq 1$, by the fact that every number is at least 1.',
      'Then $x>1$ or $x=1$, by the definition of $\\geq$.',
      'Since $x \\neq 1$, the case $x=1$ fails.',
      'So $x>1$.'
    ]
  }
]
