// Addition from the Axioms: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't41-k1-p01',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $1+x = x+1$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $1+x = x+1$.',
      'For every $a$ and $b$, $a+b=b+a$, by the commutative law of addition.',
      'So $1+x=x+1$, by the commutative law, applied with $a=1$ and $b=x$.'
    ]
  },
  {
    id: 't41-k1-p02',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Compute $3+2$ using only the recursive definition of addition, showing every step.',
    answer: '5',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $3+2$ using only the recursive definition of addition, showing every step.',
      'The numeral 2 names $1\'$.',
      'So $3+2=3+1\'$.',
      'Then $3+1\' = (3+1)\'$, because $w+y\'=(w+y)\'$ with $w=3$ and $y=1$.',
      'Then $3+1=3\'$, because $w+1=w\'$ with $w=3$, and $3\'$ names 4.',
      'Then $3+2=4\'$, and $4\'$ names $5$.',
      '$5$.'
    ]
  },
  {
    id: 't41-k1-p03',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$ and $y$, $x+y$ is not equal to $x$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$ and $y$, $x+y$ is not equal to $x$.',
      'For every $a$ and $b$, $b \\neq a+b$, by the fact that a sum never equals its second addend.',
      'So $x \\neq y+x$, by this fact, applied with $a=y$ and $b=x$.',
      'Then $y+x=x+y$, by the commutative law of addition.',
      'So $x \\neq x+y$, by substituting $y+x=x+y$ into $x \\neq y+x$.',
      'So $x+y \\neq x$, by the symmetry of $\\neq$.'
    ]
  },
  {
    id: 't41-k1-p04',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, if $y \\neq z$, then $y+x \\neq z+x$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, if $y \\neq z$, then $y+x \\neq z+x$.',
      'Suppose that $y \\neq z$.',
      'Then $x+y \\neq x+z$, because adding the same number on the left keeps two numbers distinct, applied to $y \\neq z$.',
      'Then $x+y=y+x$ and $x+z=z+x$, by the commutative law of addition.',
      'So $y+x \\neq z+x$, by substituting $x+y=y+x$ and $x+z=z+x$ into $x+y \\neq x+z$.'
    ]
  },
  {
    id: 't41-k1-p05',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Compute $4+3$ using only the recursive definition of addition, showing every step.',
    answer: '7',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $4+3$ using only the recursive definition of addition, showing every step.',
      'The numeral 3 names $2\'$.',
      'So $4+3=4+2\'=(4+2)\'$, because $w+y\'=(w+y)\'$ with $w=4$ and $y=2$.',
      'The numeral 2 names $1\'$.',
      'So $4+2=4+1\'=(4+1)\'$, because $w+y\'=(w+y)\'$ with $w=4$ and $y=1$.',
      'Then $4+1=4\'$, because $w+1=w\'$ with $w=4$, and $4\'$ names 5.',
      'So $4+2=5\'$, and $5\'$ names $6$.',
      'Then $4+3=6\'$, and $6\'$ names $7$.',
      '$7$.'
    ]
  },
  {
    id: 't41-k1-p06',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Decide whether there exist natural numbers $x$ and $y$ with $x+y=y$.',
    answer: 'No',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether there exist natural numbers $x$ and $y$ with $x+y=y$.',
      'For every $x$ and $y$, $y \\neq x+y$, by the fact that a sum never equals its second addend.',
      'So no $x$ and $y$ satisfy $x+y=y$.',
      'No.'
    ]
  },
  {
    id: 't41-k1-p07',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$ and $y$, if $x = y$, then $x+1 = y+1$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$ and $y$, if $x = y$, then $x+1 = y+1$.',
      'Suppose that $x = y$.',
      'Then $x+1=x\'$ and $y+1=y\'$, by the definition of addition.',
      'Then $x\'=y\'$, because replacing $y$ by the equal number $x$ leaves the successor unchanged.',
      'So $x+1=y+1$, by the transitivity of equality, from $x+1=x\'$, $x\'=y\'$, and $y\'=y+1$.'
    ]
  },
  {
    id: 't41-k1-p08',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, $x+(y+z) = (y+z)+x$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, $x+(y+z) = (y+z)+x$.',
      'For every $a$ and $b$, $a+b=b+a$, by the commutative law of addition.',
      'So $x+(y+z)=(y+z)+x$, by the commutative law, applied with $a=x$ and $b=y+z$.'
    ]
  },
  {
    id: 't41-k1-p09',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Compute $5+2$ using only the recursive definition of addition, showing every step.',
    answer: '7',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $5+2$ using only the recursive definition of addition, showing every step.',
      'The numeral 2 names $1\'$.',
      'So $5+2=5+1\'=(5+1)\'$, because $w+y\'=(w+y)\'$ with $w=5$ and $y=1$.',
      'Then $5+1=5\'$, because $w+1=w\'$ with $w=5$, and $5\'$ names 6.',
      'Then $5+2=6\'$, and $6\'$ names $7$.',
      '$7$.'
    ]
  },
  {
    id: 't41-k1-p10',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, $z$, and $w$, if $x = y$ and $z = w$, then $x+z = y+w$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, $z$, and $w$, if $x = y$ and $z = w$, then $x+z = y+w$.',
      'Suppose that $x = y$ and $z = w$.',
      'Then $x+z=y+z$, because replacing $x$ by the equal number $y$ leaves the sum unchanged.',
      'Then $y+z=y+w$, because replacing $z$ by the equal number $w$ leaves the sum unchanged.',
      'So $x+z=y+w$, by the transitivity of equality, from $x+z=y+z$ and $y+z=y+w$.'
    ]
  },
  {
    id: 't41-k1-p11',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Decide whether the recursive definition of addition gives the same sum whichever addend comes first.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether the recursive definition of addition gives the same sum whichever addend comes first.',
      'For every $x$ and $y$, $x+y=y+x$, by the commutative law of addition.',
      'Yes.'
    ]
  },
  {
    id: 't41-k1-p12',
    topic: 'addition-from-the-axioms',
    kind: 't41-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, if $x+y = x+z$, then $y=z$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, if $x+y = x+z$, then $y=z$.',
      'Suppose, for a proof by contradiction, that $y \\neq z$.',
      'Then $x+y \\neq x+z$, because adding the same number on the left keeps two numbers distinct, applied to $y \\neq z$.',
      'This contradicts $x+y=x+z$.',
      'So $y=z$, since supposing $y \\neq z$ leads to a contradiction.'
    ]
  }
]
