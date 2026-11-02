// The Natural Numbers from the Axioms: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't40-k1-p01',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$ and $y$, if $x\' = y\'$, then $y = x$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$ and $y$, if $x\' = y\'$, then $y = x$.',
      'Suppose that $x\' = y\'$.',
      'Then $x = y$, because numbers with equal successors are equal, applied to $x\'=y\'$.',
      'So $y = x$, because equality is symmetric.'
    ]
  },
  {
    id: 't40-k1-p02',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, if $x$ is not equal to 1, then $x\'$ is not equal to $1\'$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, if $x$ is not equal to 1, then $x\'$ is not equal to $1\'$.',
      'Suppose that $x \\neq 1$.',
      'Then $x\' \\neq 1\'$, because distinct numbers have distinct successors.'
    ]
  },
  {
    id: 't40-k1-p03',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, the successor of the successor of $x$ is not equal to the successor of $x$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, the successor of the successor of $x$ is not equal to the successor of $x$.',
      'The successor $x\'$ is itself a natural number.',
      'So $(x\')\' \\neq x\'$, because every number differs from its own successor, applied with the number $x\'$ in place of $x$.',
      'So $x\'\' \\neq x\'$, because $x\'\'$ names $(x\')\'$.'
    ]
  },
  {
    id: 't40-k1-p04',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Prove that there exists a natural number that is not equal to 1.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that there exists a natural number that is not equal to 1.',
      'The number 1 is a natural number.',
      'So $1\'$ is a natural number, because every natural number has a successor.',
      'So $1\' \\neq 1$, because no number has 1 as its successor.',
      'So $1\'$ is a natural number that is not equal to $1$.'
    ]
  },
  {
    id: 't40-k1-p05',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Decide whether every natural number other than 1 is the successor of exactly one natural number.',
    answer: 'Yes',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether every natural number other than 1 is the successor of exactly one natural number.',
      'For every $x \\neq 1$, there exists exactly one $u$ such that $x = u\'$, by the theorem on numbers other than 1.',
      'Yes.'
    ]
  },
  {
    id: 't40-k1-p06',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, if $x \\neq y$ and $y \\neq z$, then $x\' \\neq y\'$ and $y\' \\neq z\'$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, if $x \\neq y$ and $y \\neq z$, then $x\' \\neq y\'$ and $y\' \\neq z\'$.',
      'Suppose that $x \\neq y$ and $y \\neq z$.',
      'Then $x\' \\neq y\'$, because distinct numbers have distinct successors, applied to $x \\neq y$.',
      'Then $y\' \\neq z\'$, because distinct numbers have distinct successors, applied to $y \\neq z$.',
      'So $x\' \\neq y\'$ and $y\' \\neq z\'$.'
    ]
  },
  {
    id: 't40-k1-p07',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Decide whether 1 can be the successor of some natural number.',
    answer: 'No',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether 1 can be the successor of some natural number.',
      'For every $x$, $x\' \\neq 1$, by the axiom that no number has 1 as its successor.',
      'No.'
    ]
  },
  {
    id: 't40-k1-p08',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, if $x\' = x\'\'$, then $x = x\'$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, if $x\' = x\'\'$, then $x = x\'$.',
      'Suppose that $x\' = x\'\'$.',
      'The number $x\'\'$ names $(x\')\'$.',
      'So $x\' = (x\')\'$.',
      'Then $x = x\'$, because numbers with equal successors are equal, applied with $x$ and $x\'$ in place of the two numbers.'
    ]
  },
  {
    id: 't40-k1-p09',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$ and $y$, if $x = y$, then $x\' = y\'$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$ and $y$, if $x = y$, then $x\' = y\'$.',
      'Suppose that $x = y$.',
      'Each natural number has exactly one successor.',
      'So $x\' = y\'$, because replacing $y$ by the equal number $x$ leaves its successor unchanged.'
    ]
  },
  {
    id: 't40-k1-p10',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Decide whether the set of all $x$ for which $x = 1$ contains every natural number.',
    answer: 'No',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether the set of all $x$ for which $x = 1$ contains every natural number.',
      'The number $1\'$ is a natural number, because every natural number has a successor.',
      'The number $1\'$ is not equal to 1, because no number has 1 as its successor.',
      'So the set of all $x$ for which $x=1$ leaves out $1\'$, and it does not contain every natural number.',
      'No.'
    ]
  },
  {
    id: 't40-k1-p11',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Prove that for every $x$, $y$, and $z$, if $x\' = y\'$ and $y\' = z\'$, then $x = z$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that for every $x$, $y$, and $z$, if $x\' = y\'$ and $y\' = z\'$, then $x = z$.',
      'Suppose that $x\' = y\'$ and $y\' = z\'$.',
      'Then $x = y$, because numbers with equal successors are equal, applied to $x\'=y\'$.',
      'Then $y = z$, because numbers with equal successors are equal, applied to $y\'=z\'$.',
      'So $x = z$, because equality is transitive, from $x=y$ and $y=z$.'
    ]
  },
  {
    id: 't40-k1-p12',
    topic: 'natural-numbers-from-the-axioms',
    kind: 't40-k1',
    calc: 'yes',
    prompt: 'Decide whether two different natural numbers can have the same successor.',
    answer: 'No',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether two different natural numbers can have the same successor.',
      'For every $x$ and $y$, if $x \\neq y$, then $x\' \\neq y\'$, by the theorem on distinct numbers and their successors.',
      'So no two different natural numbers have the same successor.',
      'No.'
    ]
  }
]
