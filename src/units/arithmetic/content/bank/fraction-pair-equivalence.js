// Fraction Pair Equivalence: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't50-k1-p01', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{5}{8}$ is equivalent to $\\frac{15}{24}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{5}{8}$ is equivalent to $\\frac{15}{24}$.',
      'Now $5 \\times 24 = 120$ and $8 \\times 15 = 120$.',
      'So $5 \\times 24 = 8 \\times 15$, since both equal $120$.',
      'So $\\frac{5}{8}\\sim\\frac{15}{24}$, since the cross products are equal, by the definition of fraction pair equivalence.'
    ]
  },
  {
    id: 't50-k1-p02', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{9}{4}$ is equivalent to $\\frac{40}{18}$.',
    answer: 'No', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{9}{4}$ is equivalent to $\\frac{40}{18}$.',
      'Now $9 \\times 18 = 162$ and $4 \\times 40 = 160$.',
      'So $9 \\times 18 \\neq 4 \\times 40$, since $162$ is not $160$.',
      'The fraction pair $\\frac{9}{4}$ is not equivalent to $\\frac{40}{18}$, by the definition of fraction pair equivalence.',
      'No.'
    ]
  },
  {
    id: 't50-k1-p03', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{3}{5}$ is equivalent to $\\frac{21}{35}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{3}{5}$ is equivalent to $\\frac{21}{35}$.',
      'Now $\\frac{21}{35}$ is $\\frac{3\\times7}{5\\times7}$, because $3 \\times 7 = 21$ and $5 \\times 7 = 35$.',
      'So $\\frac{3}{5}\\sim\\frac{3\\times7}{5\\times7}$, by the fact that a fraction pair is equivalent to itself scaled by a common factor.',
      'So $\\frac{3}{5}\\sim\\frac{21}{35}$.'
    ]
  },
  {
    id: 't50-k1-p04', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{12}{18}$ is equivalent to $\\frac{2}{3}$.',
    answer: 'Yes', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{12}{18}$ is equivalent to $\\frac{2}{3}$.',
      'Now $12 \\times 3 = 36$ and $18 \\times 2 = 36$.',
      'So $12 \\times 3 = 18 \\times 2$, since both equal $36$.',
      'The fraction pair $\\frac{12}{18}$ is equivalent to $\\frac{2}{3}$, by the definition of fraction pair equivalence.',
      'Yes.'
    ]
  },
  {
    id: 't50-k1-p05', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{4}{7}$ is equivalent to $\\frac{8}{14}$, and $\\frac{8}{14}$ is equivalent to $\\frac{12}{21}$, then $\\frac{4}{7}$ is equivalent to $\\frac{12}{21}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{4}{7}$ is equivalent to $\\frac{8}{14}$, and $\\frac{8}{14}$ is equivalent to $\\frac{12}{21}$, then $\\frac{4}{7}$ is equivalent to $\\frac{12}{21}$.',
      'The fraction pairs satisfy $\\frac{4}{7}\\sim\\frac{8}{14}$ and $\\frac{8}{14}\\sim\\frac{12}{21}$, by hypothesis.',
      'So $\\frac{4}{7}\\sim\\frac{12}{21}$, by the transitivity of fraction pair equivalence.'
    ]
  },
  {
    id: 't50-k1-p06', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{6}{11}$ is equivalent to $\\frac{6}{11}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{6}{11}$ is equivalent to $\\frac{6}{11}$.',
      'Now $6 \\times 11 = 6 \\times 11$, because a number equals itself.',
      'So $\\frac{6}{11}\\sim\\frac{6}{11}$, by the definition of fraction pair equivalence.'
    ]
  },
  {
    id: 't50-k1-p07', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{10}{15}$ is equivalent to $\\frac{2}{3}$, then $\\frac{2}{3}$ is equivalent to $\\frac{10}{15}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{10}{15}$ is equivalent to $\\frac{2}{3}$, then $\\frac{2}{3}$ is equivalent to $\\frac{10}{15}$.',
      'Since $\\frac{10}{15}\\sim\\frac{2}{3}$, $10 \\times 3 = 15 \\times 2$, by the definition of fraction pair equivalence.',
      'So $15 \\times 2 = 10 \\times 3$, by the symmetry of equality.',
      'So $\\frac{2}{3}\\sim\\frac{10}{15}$, by the definition of fraction pair equivalence.'
    ]
  },
  {
    id: 't50-k1-p08', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{9}{2}$ is equivalent to $\\frac{36}{8}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{9}{2}$ is equivalent to $\\frac{36}{8}$.',
      'Now $\\frac{36}{8}$ is $\\frac{9\\times4}{2\\times4}$, because $9 \\times 4 = 36$ and $2 \\times 4 = 8$.',
      'So $\\frac{9}{2}\\sim\\frac{9\\times4}{2\\times4}$, by the fact that a fraction pair is equivalent to itself scaled by a common factor.',
      'So $\\frac{9}{2}\\sim\\frac{36}{8}$.'
    ]
  },
  {
    id: 't50-k1-p09', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Prove that if $\\frac{7}{12}$ is equivalent to $\\frac{14}{24}$, then $\\frac{14}{24}$ is equivalent to $\\frac{7}{12}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that if $\\frac{7}{12}$ is equivalent to $\\frac{14}{24}$, then $\\frac{14}{24}$ is equivalent to $\\frac{7}{12}$.',
      'Since $\\frac{7}{12}\\sim\\frac{14}{24}$, $7 \\times 24 = 12 \\times 14$, by the definition of fraction pair equivalence.',
      'So $12 \\times 14 = 7 \\times 24$, by the symmetry of equality.',
      'So $\\frac{14}{24}\\sim\\frac{7}{12}$, by the definition of fraction pair equivalence.'
    ]
  },
  {
    id: 't50-k1-p10', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{7}{9}$ is equivalent to $\\frac{21}{28}$.',
    answer: 'No', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{7}{9}$ is equivalent to $\\frac{21}{28}$.',
      'Now $7 \\times 28 = 196$ and $9 \\times 21 = 189$.',
      'So $7 \\times 28 \\neq 9 \\times 21$, since $196$ is not $189$.',
      'The fraction pair $\\frac{7}{9}$ is not equivalent to $\\frac{21}{28}$, by the definition of fraction pair equivalence.',
      'No.'
    ]
  },
  {
    id: 't50-k1-p11', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Prove that $\\frac{8}{3}$ is equivalent to $\\frac{40}{15}$.',
    answer: null, form: 'Write a proof.',
    solution: [
      'Prove that $\\frac{8}{3}$ is equivalent to $\\frac{40}{15}$.',
      'Now $\\frac{40}{15}$ is $\\frac{8\\times5}{3\\times5}$, because $8 \\times 5 = 40$ and $3 \\times 5 = 15$.',
      'So $\\frac{8}{3}\\sim\\frac{8\\times5}{3\\times5}$, by the fact that a fraction pair is equivalent to itself scaled by a common factor.',
      'So $\\frac{8}{3}\\sim\\frac{40}{15}$.'
    ]
  },
  {
    id: 't50-k1-p12', topic: 'fraction-pair-equivalence', kind: 't50-k1', calc: 'yes',
    prompt: 'Decide whether $\\frac{15}{6}$ is equivalent to $\\frac{5}{2}$.',
    answer: 'Yes', form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $\\frac{15}{6}$ is equivalent to $\\frac{5}{2}$.',
      'Now $15 \\times 2 = 30$ and $6 \\times 5 = 30$.',
      'So $15 \\times 2 = 6 \\times 5$, since both equal $30$.',
      'The fraction pair $\\frac{15}{6}$ is equivalent to $\\frac{5}{2}$, by the definition of fraction pair equivalence.',
      'Yes.'
    ]
  }
]
