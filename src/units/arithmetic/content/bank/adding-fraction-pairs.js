// Adding Fraction Pairs: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't52-k1-p01', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{2}{3}+\\frac{1}{4}$ is equivalent to $\\frac{11}{12}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{2}{3}+\\frac{1}{4}$ is equivalent to $\\frac{11}{12}$.',
      'The sum $\\frac{2}{3}+\\frac{1}{4}$ is $\\frac{2\\times4+1\\times3}{3\\times4}$, by the definition of fraction pair addition.',
      'Multiplying and adding whole numbers gives $2\\times4+1\\times3=11$ and $3\\times4=12$.',
      'So $\\frac{2}{3}+\\frac{1}{4}$ is $\\frac{11}{12}$.',
      'So $\\frac{2}{3}+\\frac{1}{4}$ is equivalent to $\\frac{11}{12}$, since a fraction pair is equivalent to itself.'
    ]
  },
  {
    id: 't52-k1-p02', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{2}{3}+\\frac{1}{4}$ is equivalent to $\\frac{1}{4}+\\frac{2}{3}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{2}{3}+\\frac{1}{4}$ is equivalent to $\\frac{1}{4}+\\frac{2}{3}$.',
      'By the commutative law of fraction pair addition, $\\frac{2}{3}+\\frac{1}{4} \\sim \\frac{1}{4}+\\frac{2}{3}$.'
    ]
  },
  {
    id: 't52-k1-p03', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Prove that $\\left(\\frac{1}{2}+\\frac{1}{3}\\right)+\\frac{1}{6}$ is equivalent to $\\frac{1}{2}+\\left(\\frac{1}{3}+\\frac{1}{6}\\right)$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\left(\\frac{1}{2}+\\frac{1}{3}\\right)+\\frac{1}{6}$ is equivalent to $\\frac{1}{2}+\\left(\\frac{1}{3}+\\frac{1}{6}\\right)$.',
      'By the associative law of fraction pair addition, $\\left(\\frac{1}{2}+\\frac{1}{3}\\right)+\\frac{1}{6} \\sim \\frac{1}{2}+\\left(\\frac{1}{3}+\\frac{1}{6}\\right)$.'
    ]
  },
  {
    id: 't52-k1-p04', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{3}{5}+\\frac{2}{7}$ is greater than $\\frac{3}{5}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{3}{5}+\\frac{2}{7}$ is greater than $\\frac{3}{5}$.',
      'By the fact that a sum of two fraction pairs exceeds its first addend, $\\frac{3}{5}+\\frac{2}{7} > \\frac{3}{5}$.'
    ]
  },
  {
    id: 't52-k1-p05', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{3}{5}+\\frac{2}{7}$ is greater than $\\frac{2}{7}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{3}{5}+\\frac{2}{7}$ is greater than $\\frac{2}{7}$.',
      'By the commutative law of fraction pair addition, $\\frac{3}{5}+\\frac{2}{7} \\sim \\frac{2}{7}+\\frac{3}{5}$.',
      'By the fact that a sum of two fraction pairs exceeds its first addend, $\\frac{2}{7}+\\frac{3}{5} > \\frac{2}{7}$.',
      'So $\\frac{3}{5}+\\frac{2}{7} > \\frac{2}{7}$, by the fact that fraction pair order does not depend on the representative, for greater-than.'
    ]
  },
  {
    id: 't52-k1-p06', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{4}{9}>\\frac{1}{3}$, then $\\frac{4}{9}+\\frac{2}{5}>\\frac{1}{3}+\\frac{2}{5}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{4}{9}>\\frac{1}{3}$, then $\\frac{4}{9}+\\frac{2}{5}>\\frac{1}{3}+\\frac{2}{5}$.',
      'The products are $4 \\times 3 = 12$ and $9 \\times 1 = 9$, so $\\frac{4}{9} > \\frac{1}{3}$, since $12$ is greater than $9$.',
      'So $\\frac{4}{9}+\\frac{2}{5} > \\frac{1}{3}+\\frac{2}{5}$, by the fact that adding the same fraction pair to both sides of an inequality keeps the order.'
    ]
  },
  {
    id: 't52-k1-p07', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{5}{6}>\\frac{2}{3}$ and $\\frac{7}{8}>\\frac{1}{4}$, then $\\frac{5}{6}+\\frac{7}{8}>\\frac{2}{3}+\\frac{1}{4}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{5}{6}>\\frac{2}{3}$ and $\\frac{7}{8}>\\frac{1}{4}$, then $\\frac{5}{6}+\\frac{7}{8}>\\frac{2}{3}+\\frac{1}{4}$.',
      'The products are $5 \\times 3 = 15$ and $6 \\times 2 = 12$, so $\\frac{5}{6} > \\frac{2}{3}$, since $15$ is greater than $12$.',
      'The products are $7 \\times 4 = 28$ and $8 \\times 1 = 8$, so $\\frac{7}{8} > \\frac{1}{4}$, since $28$ is greater than $8$.',
      'So $\\frac{5}{6}+\\frac{7}{8}>\\frac{2}{3}+\\frac{1}{4}$, by the fact that the sum of two greater fraction pairs is greater than the sum of the two lesser ones.'
    ]
  },
  {
    id: 't52-k1-p08', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Prove that there exists a fraction pair greater than $\\frac{1}{2}+\\frac{1}{3}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that there exists a fraction pair greater than $\\frac{1}{2}+\\frac{1}{3}$.',
      'The sum $\\frac{1}{2}+\\frac{1}{3}$ is $\\frac{1\\times3+1\\times2}{2\\times3}$, that is $\\frac{5}{6}$, by the definition of fraction pair addition.',
      'The fraction pair $\\frac{5+5}{6}$ is $\\frac{10}{6}$, because $5+5=10$.',
      'Multiplying whole numbers gives $10 \\times 6 = 60$ and $6 \\times 5 = 30$.',
      'So $10 \\times 6 > 6 \\times 5$, since $60$ is greater than $30$.',
      'So $\\frac{10}{6} > \\frac{5}{6}$, by the definition of fraction pair greater-than.',
      'So $\\frac{10}{6}$ is greater than $\\frac{1}{2}+\\frac{1}{3}$.'
    ]
  },
  {
    id: 't52-k1-p09', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Compute $\\frac{1}{4}+\\frac{1}{6}$ using the definition of fraction pair addition.',
    answer: '5/12', form: 'Answer as a fraction in lowest terms.',
    solution: [
      'Compute $\\frac{1}{4}+\\frac{1}{6}$ using the definition of fraction pair addition.',
      'The sum $\\frac{1}{4}+\\frac{1}{6}$ is $\\frac{1\\times6+1\\times4}{4\\times6}$, by the definition of fraction pair addition.',
      'Multiplying and adding whole numbers gives $1\\times6+1\\times4=10$ and $4\\times6=24$.',
      'Reduce $\\frac{10}{24}$ by the common divisor $2$ to $\\frac{5}{12}$.',
      '$\\frac{5}{12}$.'
    ]
  },
  {
    id: 't52-k1-p10', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Compute $\\frac{2}{5}+\\frac{3}{10}$.',
    answer: '7/10', form: 'Answer as a fraction in lowest terms.',
    solution: [
      'Compute $\\frac{2}{5}+\\frac{3}{10}$.',
      'The sum $\\frac{2}{5}+\\frac{3}{10}$ is $\\frac{2\\times10+3\\times5}{5\\times10}$, by the definition of fraction pair addition.',
      'Multiplying and adding whole numbers gives $2\\times10+3\\times5=35$ and $5\\times10=50$.',
      'Reduce $\\frac{35}{50}$ by the common divisor $5$ to $\\frac{7}{10}$.',
      '$\\frac{7}{10}$.'
    ]
  },
  {
    id: 't52-k1-p11', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{3}{4}+\\frac{1}{8}$ is equivalent to $\\frac{7}{8}$.',
    answer: 'Yes', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{3}{4}+\\frac{1}{8}$ is equivalent to $\\frac{7}{8}$.',
      'The sum $\\frac{3}{4}+\\frac{1}{8}$ is $\\frac{3\\times8+1\\times4}{4\\times8}$, that is $\\frac{28}{32}$, by the definition of fraction pair addition.',
      'Multiplying whole numbers gives $28\\times8=224$ and $32\\times7=224$.',
      'So $28\\times8=32\\times7$, since both equal $224$.',
      'The fraction pair $\\frac{28}{32}$ is equivalent to $\\frac{7}{8}$, by the definition of fraction pair equivalence.',
      'Yes.'
    ]
  },
  {
    id: 't52-k1-p12', topic: 'adding-fraction-pairs', kind: 't52-k1', calc: 'yes',
    prompt: 'Compute $\\frac{5}{6}+\\frac{1}{4}$.',
    answer: '13/12', form: 'Answer as a fraction in lowest terms.',
    solution: [
      'Compute $\\frac{5}{6}+\\frac{1}{4}$.',
      'The sum $\\frac{5}{6}+\\frac{1}{4}$ is $\\frac{5\\times4+1\\times6}{6\\times4}$, by the definition of fraction pair addition.',
      'Multiplying and adding whole numbers gives $5\\times4+1\\times6=26$ and $6\\times4=24$.',
      'Reduce $\\frac{26}{24}$ by the common divisor $2$ to $\\frac{13}{12}$.',
      '$\\frac{13}{12}$.'
    ]
  }
]
