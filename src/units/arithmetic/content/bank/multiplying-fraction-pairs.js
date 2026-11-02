// Multiplying Fraction Pairs: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't53-k1-p01', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{2}{3}\\cdot\\frac{5}{4}$ is equivalent to $\\frac{5}{6}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{2}{3}\\cdot\\frac{5}{4}$ is equivalent to $\\frac{5}{6}$.',
      'The product $\\frac{2}{3}\\cdot\\frac{5}{4}$ is $\\frac{2\\times5}{3\\times4}$, that is $\\frac{10}{12}$, by the definition of fraction pair multiplication.',
      'Now $10\\times6=60$ and $12\\times5=60$.',
      'So $10\\times6=12\\times5$, since both equal $60$.',
      'So $\\frac{10}{12}\\sim\\frac{5}{6}$, by the definition of fraction pair equivalence, and so $\\frac{2}{3}\\cdot\\frac{5}{4}\\sim\\frac{5}{6}$.'
    ]
  },
  {
    id: 't53-k1-p02', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{2}{3}\\cdot\\frac{5}{4}$ is equivalent to $\\frac{5}{4}\\cdot\\frac{2}{3}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{2}{3}\\cdot\\frac{5}{4}$ is equivalent to $\\frac{5}{4}\\cdot\\frac{2}{3}$.',
      'By the commutative law of fraction pair multiplication, $\\frac{2}{3}\\cdot\\frac{5}{4} \\sim \\frac{5}{4}\\cdot\\frac{2}{3}$.'
    ]
  },
  {
    id: 't53-k1-p03', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Prove that $\\left(\\frac{1}{2}\\cdot\\frac{2}{3}\\right)\\cdot\\frac{3}{4}$ is equivalent to $\\frac{1}{2}\\cdot\\left(\\frac{2}{3}\\cdot\\frac{3}{4}\\right)$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\left(\\frac{1}{2}\\cdot\\frac{2}{3}\\right)\\cdot\\frac{3}{4}$ is equivalent to $\\frac{1}{2}\\cdot\\left(\\frac{2}{3}\\cdot\\frac{3}{4}\\right)$.',
      'By the associative law of fraction pair multiplication, $\\left(\\frac{1}{2}\\cdot\\frac{2}{3}\\right)\\cdot\\frac{3}{4} \\sim \\frac{1}{2}\\cdot\\left(\\frac{2}{3}\\cdot\\frac{3}{4}\\right)$.'
    ]
  },
  {
    id: 't53-k1-p04', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{2}{3}\\cdot\\left(\\frac{1}{4}+\\frac{1}{5}\\right)$ is equivalent to $\\frac{2}{3}\\cdot\\frac{1}{4}+\\frac{2}{3}\\cdot\\frac{1}{5}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{2}{3}\\cdot\\left(\\frac{1}{4}+\\frac{1}{5}\\right)$ is equivalent to $\\frac{2}{3}\\cdot\\frac{1}{4}+\\frac{2}{3}\\cdot\\frac{1}{5}$.',
      'By the distributive law for fraction pairs, $\\frac{2}{3}\\cdot\\left(\\frac{1}{4}+\\frac{1}{5}\\right) \\sim \\frac{2}{3}\\cdot\\frac{1}{4}+\\frac{2}{3}\\cdot\\frac{1}{5}$.'
    ]
  },
  {
    id: 't53-k1-p05', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{4}{9}>\\frac{1}{3}$, then $\\frac{4}{9}\\cdot\\frac{2}{5}>\\frac{1}{3}\\cdot\\frac{2}{5}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{4}{9}>\\frac{1}{3}$, then $\\frac{4}{9}\\cdot\\frac{2}{5}>\\frac{1}{3}\\cdot\\frac{2}{5}$.',
      'Now $4 \\times 3 = 12$ and $9 \\times 1 = 9$, so $\\frac{4}{9} > \\frac{1}{3}$, since $12$ is greater than $9$.',
      'So $\\frac{4}{9}\\cdot\\frac{2}{5} > \\frac{1}{3}\\cdot\\frac{2}{5}$, by the fact that fraction pair multiplication preserves the order relation.'
    ]
  },
  {
    id: 't53-k1-p06', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{5}{6}>\\frac{2}{3}$ and $\\frac{7}{8}>\\frac{1}{4}$, then $\\frac{5}{6}\\cdot\\frac{7}{8}>\\frac{2}{3}\\cdot\\frac{1}{4}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{5}{6}>\\frac{2}{3}$ and $\\frac{7}{8}>\\frac{1}{4}$, then $\\frac{5}{6}\\cdot\\frac{7}{8}>\\frac{2}{3}\\cdot\\frac{1}{4}$.',
      'Now $5 \\times 3 = 15$ and $6 \\times 2 = 12$, so $\\frac{5}{6} > \\frac{2}{3}$, since $15$ is greater than $12$.',
      'Now $7 \\times 4 = 28$ and $8 \\times 1 = 8$, so $\\frac{7}{8} > \\frac{1}{4}$, since $28$ is greater than $8$.',
      'So $\\frac{5}{6}\\cdot\\frac{7}{8}>\\frac{2}{3}\\cdot\\frac{1}{4}$, by the fact that the product of two greater fraction pairs is greater than the product of the two lesser ones.'
    ]
  },
  {
    id: 't53-k1-p07', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Prove that there exists a fraction pair greater than $\\frac{2}{3}\\cdot\\frac{1}{4}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that there exists a fraction pair greater than $\\frac{2}{3}\\cdot\\frac{1}{4}$.',
      'The product $\\frac{2}{3}\\cdot\\frac{1}{4}$ is $\\frac{2\\times1}{3\\times4}$, that is $\\frac{2}{12}$, by the definition of fraction pair multiplication.',
      'Now $\\frac{2+2}{12}$ is $\\frac{4}{12}$, because $2+2=4$.',
      'Now $4\\times12=48$ and $12\\times2=24$.',
      'So $4\\times12>12\\times2$, since $48$ is greater than $24$.',
      'So $\\frac{4}{12} > \\frac{2}{12}$, by the definition of fraction pair greater-than.',
      'So $\\frac{4}{12}$ is greater than $\\frac{2}{3}\\cdot\\frac{1}{4}$.'
    ]
  },
  {
    id: 't53-k1-p08', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{3}{4}\\div\\frac{1}{2}$ is equivalent to $\\frac{3}{2}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{3}{4}\\div\\frac{1}{2}$ is equivalent to $\\frac{3}{2}$.',
      'Now $\\frac{1}{2}\\cdot\\frac{3}{2}$ is $\\frac{1\\times3}{2\\times2}$, that is $\\frac{3}{4}$, by the definition of fraction pair multiplication.',
      'So $\\frac{3}{2}$ solves $\\frac{1}{2}\\cdot\\frac{u_1}{u_2}\\sim\\frac{3}{4}$, by the previous line.',
      'So $\\frac{3}{4}\\div\\frac{1}{2}$ is $\\frac{3}{2}$, by the definition of the quotient of fraction pairs.'
    ]
  },
  {
    id: 't53-k1-p09', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Compute $\\frac{3}{5}\\cdot\\frac{2}{7}$.',
    answer: '6/35', form: 'Answer as a fraction in lowest terms.',
    solution: [
      'Compute $\\frac{3}{5}\\cdot\\frac{2}{7}$.',
      'The product $\\frac{3}{5}\\cdot\\frac{2}{7}$ is $\\frac{3\\times2}{5\\times7}$, by the definition of fraction pair multiplication.',
      'Now $3\\times2=6$ and $5\\times7=35$.',
      '$\\frac{6}{35}$.'
    ]
  },
  {
    id: 't53-k1-p10', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Compute $\\frac{4}{9}\\cdot\\frac{3}{8}$.',
    answer: '1/6', form: 'Answer as a fraction in lowest terms.',
    solution: [
      'Compute $\\frac{4}{9}\\cdot\\frac{3}{8}$.',
      'The product $\\frac{4}{9}\\cdot\\frac{3}{8}$ is $\\frac{4\\times3}{9\\times8}$, that is $\\frac{12}{72}$, by the definition of fraction pair multiplication.',
      'Now $\\frac{12}{72}$ reduces by the common divisor $12$ to $\\frac{1}{6}$.',
      '$\\frac{1}{6}$.'
    ]
  },
  {
    id: 't53-k1-p11', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{5}{6}\\cdot\\frac{3}{10}$ is equivalent to $\\frac{1}{4}$.',
    answer: 'Yes', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{5}{6}\\cdot\\frac{3}{10}$ is equivalent to $\\frac{1}{4}$.',
      'The product $\\frac{5}{6}\\cdot\\frac{3}{10}$ is $\\frac{5\\times3}{6\\times10}$, that is $\\frac{15}{60}$, by the definition of fraction pair multiplication.',
      'Now $15\\times4=60$ and $60\\times1=60$.',
      'So $15\\times4=60\\times1$, since both equal $60$.',
      'The fraction pair $\\frac{15}{60}$ is equivalent to $\\frac{1}{4}$, by the definition of fraction pair equivalence.',
      'Yes.'
    ]
  },
  {
    id: 't53-k1-p12', topic: 'multiplying-fraction-pairs', kind: 't53-k1', calc: 'yes',
    prompt: 'Compute $\\frac{7}{4}\\div\\frac{1}{2}$.',
    answer: '7/2', form: 'Answer as a fraction in lowest terms.',
    solution: [
      'Compute $\\frac{7}{4}\\div\\frac{1}{2}$.',
      'The fraction pair $\\frac{u_1}{u_2}$ solving $\\frac{1}{2}\\cdot\\frac{u_1}{u_2}\\sim\\frac{7}{4}$ has $u_1=7\\times2$ and $u_2=4\\times1$, by the construction for the quotient of fraction pairs.',
      'Now $7\\times2=14$ and $4\\times1=4$.',
      'Now $\\frac{14}{4}$ reduces by the common divisor $2$ to $\\frac{7}{2}$.',
      '$\\frac{7}{2}$.'
    ]
  }
]
