// Multiplication from the Axioms: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't43-k1-p01',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Compute $3\\times4$ using only the recursive definition of multiplication, showing every step.',
    answer: '12',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $3\\times4$ using only the recursive definition of multiplication, showing every step.',
      'The numeral 4 names $3\'$, so $3\\times4=3\\times3\'=3\\times3+3$.',
      'The numeral 3 names $2\'$, so $3\\times3=3\\times2\'=3\\times2+3$.',
      'The numeral 2 names $1\'$, so $3\\times2=3\\times1\'=3\\times1+3$.',
      'Then $3\\times1=3$, by the recursive definition of multiplication, so $3\\times2=3+3=6$.',
      'Then $3\\times3=6+3=9$.',
      'Then $3\\times4=9+3=12$.',
      '$12$.'
    ]
  },
  {
    id: 't43-k1-p02',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $1\\cdot x=x$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $1\\cdot x=x$.',
      'For every $x$, $x\\cdot1=x$, by the recursive definition of multiplication.',
      'For every $a$ and $b$, $ab=ba$, by the commutative law of multiplication.',
      'So $1\\cdot x=x\\cdot1$, by the commutative law, applied with $a=1$ and $b=x$.',
      'So $1\\cdot x=x$, by the transitivity of equality, from $1\\cdot x=x\\cdot1$ and $x\\cdot1=x$.'
    ]
  },
  {
    id: 't43-k1-p03',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Decide whether there exist whole numbers $x$ and $y$ with $xy=0$, $x \\neq 0$, and $y \\neq 0$.',
    answer: 'No',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether there exist whole numbers $x$ and $y$ with $xy=0$, $x \\neq 0$, and $y \\neq 0$.',
      'By the fact that a product of two nonzero numbers is nonzero, $xy \\neq 0$ when $x \\neq 0$ and $y \\neq 0$.',
      'So $xy=0$ cannot hold together with $x \\neq 0$ and $y \\neq 0$.',
      'No.'
    ]
  },
  {
    id: 't43-k1-p04',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, $x(y+z) = (y+z)x$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, $x(y+z) = (y+z)x$.',
      'For every $a$ and $b$, $ab=ba$, by the commutative law of multiplication.',
      'So $x(y+z)=(y+z)x$, by the commutative law, applied with $a=x$ and $b=y+z$.'
    ]
  },
  {
    id: 't43-k1-p05',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Compute $5\\times3$ using only the recursive definition of multiplication, showing every step.',
    answer: '15',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $5\\times3$ using only the recursive definition of multiplication, showing every step.',
      'The numeral 3 names $2\'$, so $5\\times3=5\\times2\'=5\\times2+5$.',
      'The numeral 2 names $1\'$, so $5\\times2=5\\times1\'=5\\times1+5$.',
      'Then $5\\times1=5$, by the recursive definition of multiplication, so $5\\times2=5+5=10$.',
      'Then $5\\times3=10+5=15$.',
      '$15$.'
    ]
  },
  {
    id: 't43-k1-p06',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, if $x$ is not equal to 1, then $x \\cdot x$ is not equal to $x$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, if $x$ is not equal to 1, then $x \\cdot x$ is not equal to $x$.',
      'Suppose that $x \\neq 1$ and, for a proof by contradiction, that $x \\cdot x=x$.',
      'Then $x \\cdot 1=x$, by the recursive definition of multiplication.',
      'So $x \\cdot x=x \\cdot 1$, by the transitivity of equality, from $x \\cdot x=x$ and $x=x \\cdot 1$.',
      'So $x=1$, by the cancellation law for multiplication, applied to $x \\cdot x=x \\cdot 1$.',
      'This contradicts $x \\neq 1$.',
      'So $x \\cdot x \\neq x$.'
    ]
  },
  {
    id: 't43-k1-p07',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Decide whether the recursive definition of multiplication gives the same product whichever factor comes first.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether the recursive definition of multiplication gives the same product whichever factor comes first.',
      'For every $x$ and $y$, $xy=yx$, by the commutative law of multiplication.',
      'Yes.'
    ]
  },
  {
    id: 't43-k1-p08',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, if $x=y$, then $xz=yz$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, if $x=y$, then $xz=yz$.',
      'Suppose that $x = y$.',
      'Each pair of numbers has exactly one product.',
      'So $xz=yz$, because replacing $x$ by the equal number $y$ leaves the product unchanged.'
    ]
  },
  {
    id: 't43-k1-p09',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Compute $6\\times2$ using only the recursive definition of multiplication, showing every step.',
    answer: '12',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $6\\times2$ using only the recursive definition of multiplication, showing every step.',
      'The numeral 2 names $1\'$, so $6\\times2=6\\times1\'=6\\times1+6$.',
      'Then $6\\times1=6$, by the recursive definition of multiplication.',
      'So $6\\times2=6+6=12$.',
      '$12$.'
    ]
  },
  {
    id: 't43-k1-p10',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, $(xy)z = z(xy)$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, $(xy)z = z(xy)$.',
      'For every $a$ and $b$, $ab=ba$, by the commutative law of multiplication.',
      'So $(xy)z=z(xy)$, by the commutative law, applied with $a=xy$ and $b=z$.'
    ]
  },
  {
    id: 't43-k1-p11',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Decide whether 1 is the only natural number $x$ such that $x \\cdot x=x$.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether 1 is the only natural number $x$ such that $x \\cdot x=x$.',
      'The number 1 satisfies $1 \\cdot 1=1$, by the recursive definition of multiplication, $w \\cdot 1=w$, applied with $w=1$.',
      'For every $x$ not equal to 1, $x \\cdot x \\neq x$, because $x \\cdot x=x \\cdot 1$ would give $x=1$ by the cancellation law for multiplication.',
      'So no number other than 1 satisfies $x \\cdot x=x$, and 1 itself satisfies it.',
      'Yes.'
    ]
  },
  {
    id: 't43-k1-p12',
    topic: 'multiplication-from-the-axioms',
    kind: 't43-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, $z$, and $w$, if $x=y$ and $z=w$, then $xz=yw$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, $z$, and $w$, if $x=y$ and $z=w$, then $xz=yw$.',
      'Suppose that $x=y$ and $z=w$.',
      'Then $xz=yz$, because replacing $x$ by the equal number $y$ leaves the product unchanged.',
      'Then $yz=yw$, because replacing $z$ by the equal number $w$ leaves the product unchanged.',
      'So $xz=yw$, by the transitivity of equality, from $xz=yz$ and $yz=yw$.'
    ]
  }
]
