// Ordering Fraction Pairs: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't51-k1-p01', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{4}{3}$ is greater than $\\frac{9}{7}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{4}{3}$ is greater than $\\frac{9}{7}$.',
      'Now $4 \\times 7 = 28$ and $3 \\times 9 = 27$.',
      'So $4 \\times 7 > 3 \\times 9$, since $28$ is greater than $27$.',
      'So $\\frac{4}{3} > \\frac{9}{7}$, by the definition of fraction pair greater-than.'
    ]
  },
  {
    id: 't51-k1-p02', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{5}{6} < \\frac{7}{8}$, then $\\frac{7}{8} > \\frac{5}{6}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{5}{6} < \\frac{7}{8}$, then $\\frac{7}{8} > \\frac{5}{6}$.',
      'Since $\\frac{5}{6} < \\frac{7}{8}$, $5 \\times 8 < 6 \\times 7$, by the definition of fraction pair less-than.',
      'So $6 \\times 7 > 5 \\times 8$, because $a < b$ means $b > a$.',
      'So $\\frac{7}{8} > \\frac{5}{6}$, by the definition of fraction pair greater-than.'
    ]
  },
  {
    id: 't51-k1-p03', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{2}{5} < \\frac{3}{4}$ and $\\frac{3}{4} < \\frac{9}{10}$, then $\\frac{2}{5} < \\frac{9}{10}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{2}{5} < \\frac{3}{4}$ and $\\frac{3}{4} < \\frac{9}{10}$, then $\\frac{2}{5} < \\frac{9}{10}$.',
      'The fraction pairs satisfy $\\frac{2}{5} < \\frac{3}{4}$ and $\\frac{3}{4} < \\frac{9}{10}$, by hypothesis.',
      'So $\\frac{2}{5} < \\frac{9}{10}$, by the transitivity of strict fraction pair order.'
    ]
  },
  {
    id: 't51-k1-p04', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{6}{5}$ is greater than $\\frac{1}{1}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{6}{5}$ is greater than $\\frac{1}{1}$.',
      'Now $6 \\times 1 = 6$ and $5 \\times 1 = 5$, because a number multiplied by 1 is itself.',
      'So $6 \\times 1 > 5 \\times 1$, since $6$ is greater than $5$.',
      'So $\\frac{6}{5} > \\frac{1}{1}$, by the definition of fraction pair greater-than.'
    ]
  },
  {
    id: 't51-k1-p05', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Prove that there exists a fraction pair greater than $\\frac{5}{9}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that there exists a fraction pair greater than $\\frac{5}{9}$.',
      'Now $\\frac{5+5}{9}$ is $\\frac{10}{9}$, because $5+5=10$.',
      'Now $10 \\times 9 = 90$ and $9 \\times 5 = 45$.',
      'So $10 \\times 9 > 9 \\times 5$, since $90$ is greater than $45$.',
      'So $\\frac{10}{9} > \\frac{5}{9}$, by the definition of fraction pair greater-than.'
    ]
  },
  {
    id: 't51-k1-p06', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Prove that there exists a fraction pair less than $\\frac{7}{2}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that there exists a fraction pair less than $\\frac{7}{2}$.',
      'Now $\\frac{7}{2+2}$ is $\\frac{7}{4}$, because $2+2=4$.',
      'Now $7 \\times 2 = 14$ and $4 \\times 7 = 28$.',
      'So $7 \\times 2 < 4 \\times 7$, since $14$ is less than $28$.',
      'So $\\frac{7}{4} < \\frac{7}{2}$, by the definition of fraction pair less-than.'
    ]
  },
  {
    id: 't51-k1-p07', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Prove that there exists a fraction pair between $\\frac{1}{3}$ and $\\frac{1}{2}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that there exists a fraction pair between $\\frac{1}{3}$ and $\\frac{1}{2}$.',
      'Now $\\frac{1+1}{3+2}$ is $\\frac{2}{5}$, because $1+1=2$ and $3+2=5$.',
      'Now $1 \\times 5 = 5$ and $3 \\times 2 = 6$, so $\\frac{1}{3} < \\frac{2}{5}$, since $5$ is less than $6$.',
      'Now $2 \\times 2 = 4$ and $5 \\times 1 = 5$, so $\\frac{2}{5} < \\frac{1}{2}$, since $4$ is less than $5$.',
      'So $\\frac{1}{3} < \\frac{2}{5} < \\frac{1}{2}$, by joining the two inequalities already shown.'
    ]
  },
  {
    id: 't51-k1-p08', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{2}{9} \\lesssim \\frac{1}{4}$ and $\\frac{1}{4} < \\frac{3}{5}$, then $\\frac{2}{9} < \\frac{3}{5}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{2}{9} \\lesssim \\frac{1}{4}$ and $\\frac{1}{4} < \\frac{3}{5}$, then $\\frac{2}{9} < \\frac{3}{5}$.',
      'The fraction pairs satisfy $\\frac{2}{9} \\lesssim \\frac{1}{4}$ and $\\frac{1}{4} < \\frac{3}{5}$, by hypothesis.',
      'So $\\frac{2}{9} < \\frac{3}{5}$, by the transitivity of fraction pair order with one non-strict hypothesis.'
    ]
  },
  {
    id: 't51-k1-p09', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{5}{12}$ is greater than $\\frac{2}{5}$.',
    answer: 'Yes', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{5}{12}$ is greater than $\\frac{2}{5}$.',
      'Now $5 \\times 5 = 25$ and $12 \\times 2 = 24$.',
      'So $5 \\times 5 > 12 \\times 2$, since $25$ is greater than $24$.',
      'The fraction pair $\\frac{5}{12}$ is greater than $\\frac{2}{5}$, by the definition of fraction pair greater-than.',
      'Yes.'
    ]
  },
  {
    id: 't51-k1-p10', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{3}{7}$ is greater than $\\frac{5}{11}$.',
    answer: 'No', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{3}{7}$ is greater than $\\frac{5}{11}$.',
      'Now $3 \\times 11 = 33$ and $7 \\times 5 = 35$.',
      'So $3 \\times 11 < 7 \\times 5$, since $33$ is less than $35$.',
      'The fraction pair $\\frac{3}{7}$ is not greater than $\\frac{5}{11}$, by the definition of fraction pair less-than.',
      'No.'
    ]
  },
  {
    id: 't51-k1-p11', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{8}{15}$ is less than $\\frac{7}{13}$.',
    answer: 'Yes', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{8}{15}$ is less than $\\frac{7}{13}$.',
      'Now $8 \\times 13 = 104$ and $15 \\times 7 = 105$.',
      'So $8 \\times 13 < 15 \\times 7$, since $104$ is less than $105$.',
      'The fraction pair $\\frac{8}{15}$ is less than $\\frac{7}{13}$, by the definition of fraction pair less-than.',
      'Yes.'
    ]
  },
  {
    id: 't51-k1-p12', topic: 'ordering-fraction-pairs', kind: 't51-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{7}{9}$ is less than $\\frac{2}{3}$.',
    answer: 'No', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{7}{9}$ is less than $\\frac{2}{3}$.',
      'Now $7 \\times 3 = 21$ and $9 \\times 2 = 18$.',
      'So $7 \\times 3 > 9 \\times 2$, since $21$ is greater than $18$.',
      'The fraction pair $\\frac{7}{9}$ is not less than $\\frac{2}{3}$, by the definition of fraction pair greater-than.',
      'No.'
    ]
  }
]
