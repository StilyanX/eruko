// Numbers in Base b: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  // t11-k1: find the base b expansion of a whole number.
  {
    id: 't11-k1-p01', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 7 expansion of 280.',
    answer: '(550)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 7 expansion of 280.',
      'Divide $280$ by $7$: $280=(40\\times 7)+0$.',
      'The quotient $40$ is still at least $7$, so divide it by $7$ again: $40=(5\\times 7)+5$. The quotient $5$ is less than $7$, so divide no further.',
      'Substitute each equation into the one before it: $280=[(5\\times 7)+5]\\times 7+0=(5\\times 7^2)+(5\\times 7)+0$.',
      '$(550)_7$.'
    ]
  },
  {
    id: 't11-k1-p02', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 2 expansion of 67.',
    answer: '(1000011)_2',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 2 expansion of 67.',
      'Divide $67$ by $2$ repeatedly: $67=(33\\times 2)+1$; $33=(16\\times 2)+1$; $16=(8\\times 2)+0$; $8=(4\\times 2)+0$; $4=(2\\times 2)+0$; $2=(1\\times 2)+0$. The quotient $1$ is less than $2$, so divide no further.',
      'Substitute each equation into the one before it, from last to first, to read off the digits.',
      '$(1000011)_2$.'
    ]
  },
  {
    id: 't11-k1-p03', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 10 expansion of $8\\,704$ by dividing repeatedly by 10.',
    answer: '8 704',
    form: 'Answer as a whole number.',
    solution: [
      'Find the base 10 expansion of $8\\,704$ by dividing repeatedly by 10.',
      'Divide $8\\,704$ by $10$ repeatedly: $8\\,704=(870\\times 10)+4$; $870=(87\\times 10)+0$; $87=(8\\times 10)+7$. The quotient $8$ is less than $10$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$8\\,704$.'
    ]
  },
  {
    id: 't11-k1-p04', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 4 expansion of 793.',
    answer: '(30121)_4',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 4 expansion of 793.',
      'Divide $793$ by $4$ repeatedly: $793=(198\\times 4)+1$; $198=(49\\times 4)+2$; $49=(12\\times 4)+1$; $12=(3\\times 4)+0$. The quotient $3$ is less than $4$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$(30121)_4$.'
    ]
  },
  {
    id: 't11-k1-p05', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 5 expansion of 793.',
    answer: '(11133)_5',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 5 expansion of 793.',
      'Divide $793$ by $5$ repeatedly: $793=(158\\times 5)+3$; $158=(31\\times 5)+3$; $31=(6\\times 5)+1$. The quotient $6$ is still at least $5$, so divide it by $5$ again: $6=(1\\times 5)+1$. The quotient $1$ is less than $5$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$(11133)_5$.'
    ]
  },
  {
    id: 't11-k1-p06', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 8 expansion of 793.',
    answer: '(1431)_8',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 8 expansion of 793.',
      'Divide $793$ by $8$ repeatedly: $793=(99\\times 8)+1$; $99=(12\\times 8)+3$; $12=(1\\times 8)+4$. The quotient $1$ is less than $8$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$(1431)_8$.'
    ]
  },
  {
    id: 't11-k1-p07', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 60 expansion of 793.',
    answer: '(13 13)_60',
    form: 'Answer as the digits separated by spaces, as in 2 11 7.',
    solution: [
      'Find the base 60 expansion of 793.',
      'Divide $793$ by $60$: $793=(13\\times 60)+13$. The quotient $13$ is less than $60$, so divide no further.',
      'Read off the digits $13,13$.',
      '$(13\\ 13)_{60}$.'
    ]
  },
  {
    id: 't11-k1-p08', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 2 expansion of 793.',
    answer: '(1100011001)_2',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 2 expansion of 793.',
      'Divide $793$ by $2$ repeatedly: $793=(396\\times 2)+1$; $396=(198\\times 2)+0$; $198=(99\\times 2)+0$; $99=(49\\times 2)+1$; $49=(24\\times 2)+1$; $24=(12\\times 2)+0$; $12=(6\\times 2)+0$; $6=(3\\times 2)+0$; $3=(1\\times 2)+1$. The quotient $1$ is less than $2$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$(1100011001)_2$.'
    ]
  },
  {
    id: 't11-k1-p09', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 6 expansion of 500.',
    answer: '(2152)_6',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 6 expansion of 500.',
      'Divide $500$ by $6$ repeatedly: $500=(83\\times 6)+2$; $83=(13\\times 6)+5$; $13=(2\\times 6)+1$. The quotient $2$ is less than $6$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$(2152)_6$.'
    ]
  },
  {
    id: 't11-k1-p10', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 9 expansion of $1\\,000$.',
    answer: '(1331)_9',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 9 expansion of $1\\,000$.',
      'Divide $1\\,000$ by $9$ repeatedly: $1\\,000=(111\\times 9)+1$; $111=(12\\times 9)+3$; $12=(1\\times 9)+3$. The quotient $1$ is less than $9$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$(1331)_9$.'
    ]
  },
  {
    id: 't11-k1-p11', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 11 expansion of $2\\,024$.',
    answer: '(1580)_11',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 11 expansion of $2\\,024$.',
      'Divide $2\\,024$ by $11$ repeatedly: $2\\,024=(184\\times 11)+0$; $184=(16\\times 11)+8$; $16=(1\\times 11)+5$. The quotient $1$ is less than $11$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$(1580)_{11}$.'
    ]
  },
  {
    id: 't11-k1-p12', topic: 'numbers-in-base-b', kind: 't11-k1', calc: 'no',
    prompt: 'Find the base 12 expansion of $6\\,000$.',
    answer: '(3580)_12',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Find the base 12 expansion of $6\\,000$.',
      'Divide $6\\,000$ by $12$ repeatedly: $6\\,000=(500\\times 12)+0$; $500=(41\\times 12)+8$; $41=(3\\times 12)+5$. The quotient $3$ is less than $12$, so divide no further.',
      'Substitute each equation into the one before it to read off the digits.',
      '$(3580)_{12}$.'
    ]
  },

  // t11-k2: convert a base b numeral to a whole number in base 10.
  {
    id: 't11-k2-p01', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(3021)_4$.',
    answer: '201',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(3021)_4$.',
      'Expand $(3021)_4$ by place value: $(3\\times 4^3)+(0\\times 4^2)+(2\\times 4)+1$.',
      'Compute the terms and add: $(3\\times 64)+0+8+1=192+9=201$.',
      '$201$.'
    ]
  },
  {
    id: 't11-k2-p02', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(15\\ 11\\ 3)_{20}$.',
    answer: '6 223',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(15\\ 11\\ 3)_{20}$.',
      'Expand $(15\\ 11\\ 3)_{20}$ by place value: $(15\\times 20^2)+(11\\times 20)+3$.',
      'Compute the terms and add: $(15\\times 400)+220+3=6\\,000+220+3=6\\,223$.',
      '$6\\,223$.'
    ]
  },
  {
    id: 't11-k2-p03', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(2152)_6$.',
    answer: '500',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(2152)_6$.',
      'Expand $(2152)_6$ by place value: $(2\\times 6^3)+(1\\times 6^2)+(5\\times 6)+2$.',
      'Compute the terms and add: $(2\\times 216)+36+30+2=432+68=500$.',
      '$500$.'
    ]
  },
  {
    id: 't11-k2-p04', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(1331)_9$.',
    answer: '1 000',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(1331)_9$.',
      'Expand $(1331)_9$ by place value: $(1\\times 9^3)+(3\\times 9^2)+(3\\times 9)+1$.',
      'Compute the terms and add: $729+243+27+1=1\\,000$.',
      '$1\\,000$.'
    ]
  },
  {
    id: 't11-k2-p05', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(1580)_{11}$.',
    answer: '2 024',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(1580)_{11}$.',
      'Expand $(1580)_{11}$ by place value: $(1\\times 11^3)+(5\\times 11^2)+(8\\times 11)+0$.',
      'Compute the terms and add: $1\\,331+605+88+0=2\\,024$.',
      '$2\\,024$.'
    ]
  },
  {
    id: 't11-k2-p06', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(3580)_{12}$.',
    answer: '6 000',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(3580)_{12}$.',
      'Expand $(3580)_{12}$ by place value: $(3\\times 12^3)+(5\\times 12^2)+(8\\times 12)+0$.',
      'Compute the terms and add: $5\\,184+720+96+0=6\\,000$.',
      '$6\\,000$.'
    ]
  },
  {
    id: 't11-k2-p07', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(2221)_3$.',
    answer: '79',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(2221)_3$.',
      'Expand $(2221)_3$ by place value: $(2\\times 3^3)+(2\\times 3^2)+(2\\times 3)+1$.',
      'Compute the terms and add: $54+18+6+1=79$.',
      '$79$.'
    ]
  },
  {
    id: 't11-k2-p08', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(343)_5$.',
    answer: '98',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(343)_5$.',
      'Expand $(343)_5$ by place value: $(3\\times 5^2)+(4\\times 5)+3$.',
      'Compute the terms and add: $75+20+3=98$.',
      '$98$.'
    ]
  },
  {
    id: 't11-k2-p09', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(101100)_3$.',
    answer: '279',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(101100)_3$.',
      'Expand $(101100)_3$ by place value: $(1\\times 3^5)+(0\\times 3^4)+(1\\times 3^3)+(1\\times 3^2)+(0\\times 3)+0$.',
      'Compute the terms and add: $243+27+9=279$.',
      '$279$.'
    ]
  },
  {
    id: 't11-k2-p10', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(550)_7$.',
    answer: '280',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(550)_7$.',
      'Expand $(550)_7$ by place value: $(5\\times 7^2)+(5\\times 7)+0$.',
      'Compute the terms and add: $245+35+0=280$.',
      '$280$.'
    ]
  },
  {
    id: 't11-k2-p11', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(1000011)_2$.',
    answer: '67',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(1000011)_2$.',
      'Expand $(1000011)_2$ by place value: $2^6+2+1$.',
      'Compute the terms and add: $64+2+1=67$.',
      '$67$.'
    ]
  },
  {
    id: 't11-k2-p12', topic: 'numbers-in-base-b', kind: 't11-k2', calc: 'no',
    prompt: 'Compute the whole number equal to $(1431)_8$.',
    answer: '793',
    form: 'Answer as a whole number.',
    solution: [
      'Compute the whole number equal to $(1431)_8$.',
      'Expand $(1431)_8$ by place value: $(1\\times 8^3)+(4\\times 8^2)+(3\\times 8)+1$.',
      'Compute the terms and add: $512+256+24+1=793$.',
      '$793$.'
    ]
  },

  // t11-k3: add two base b numerals.
  {
    id: 't11-k3-p01', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(66)_7+(1)_7$.',
    answer: '(100)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(66)_7+(1)_7$.',
      'Add the ones digits: $6+1=7=(1\\times 7)+0$, so write $0$ and carry $1$.',
      'Add the sevens digits with the carry: $6+0+1=7=(1\\times 7)+0$, so write $0$ and carry $1$. The final carry becomes a new leading digit.',
      '$(100)_7$.'
    ]
  },
  {
    id: 't11-k3-p02', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(2666)_7+(1)_7$.',
    answer: '(3000)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(2666)_7+(1)_7$.',
      'Add the ones digits: $6+1=7=(1\\times 7)+0$, so write $0$ and carry $1$.',
      'Add the next digits with the carry: $6+0+1=7=(1\\times 7)+0$, so write $0$ and carry $1$. The same happens once more at the next place.',
      'Add the leading digits with the carry: $2+1=3$, with no further carry.',
      '$(3000)_7$.'
    ]
  },
  {
    id: 't11-k3-p03', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(266660)_7+(10)_7$.',
    answer: '(300000)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(266660)_7+(10)_7$.',
      'Add the ones digits: $0+0=0$, with no carry. Add the sevens digits: $6+1=7=(1\\times 7)+0$, so write $0$ and carry $1$.',
      'Each of the next three places holds the digit $6$. Since $6+0+1=7$, each of these places becomes $0$ and carries $1$.',
      'Add the leading digits with the final carry: $2+1=3$, with no further carry.',
      '$(300000)_7$.'
    ]
  },
  {
    id: 't11-k3-p04', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(111111111)_2+(10)_2$.',
    answer: '(1000000001)_2',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(111111111)_2+(10)_2$.',
      'Add the ones digits: $1+0=1$, so write $1$ with no carry.',
      'Add the twos digits: $1+1=2=(1\\times 2)+0$, so write $0$ and carry $1$.',
      'The seven remaining digits of $(111111111)_2$ are $1$, and the second numeral adds $0$ there. So each of these places adds $1+0+1=2=(1\\times 2)+0$: write $0$ and carry $1$, seven times in a row. The final carry becomes a new leading digit.',
      '$(1000000001)_2$.'
    ]
  },
  {
    id: 't11-k3-p05', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(1111)_2+(1)_2$.',
    answer: '(10000)_2',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(1111)_2+(1)_2$.',
      'Add the ones digits: $1+1=2=(1\\times 2)+0$, so write $0$ and carry $1$.',
      'The three remaining digits of $(1111)_2$ are $1$, and the second numeral adds $0$ there. So each of these places adds $1+0+1=2=(1\\times 2)+0$: write $0$ and carry $1$, three times in a row. The final carry becomes a new leading digit.',
      '$(10000)_2$.'
    ]
  },
  {
    id: 't11-k3-p06', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(2221)_3+(1)_3$.',
    answer: '(2222)_3',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(2221)_3+(1)_3$.',
      'Add the ones digits: $1+1=2$, with no carry, since $2$ is less than $3$.',
      'Every remaining digit of the second numeral is $0$, so the rest of $(2221)_3$ is unchanged.',
      '$(2222)_3$.'
    ]
  },
  {
    id: 't11-k3-p07', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(343)_5+(100)_5$.',
    answer: '(443)_5',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(343)_5+(100)_5$.',
      'Add the ones digits: $3+0=3$, with no carry.',
      'Add the fives digits: $4+0=4$, with no carry.',
      'Add the twenty-fives digits: $3+1=4$, with no carry.',
      '$(443)_5$.'
    ]
  },
  {
    id: 't11-k3-p08', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(24)_7+(3)_7$.',
    answer: '(30)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(24)_7+(3)_7$.',
      'Add the ones digits: $4+3=7=(1\\times 7)+0$, so write $0$ and carry $1$.',
      'Add the sevens digits with the carry: $2+0+1=3$, with no further carry.',
      '$(30)_7$.'
    ]
  },
  {
    id: 't11-k3-p13', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(2143)_6+(3211)_6$.',
    answer: '(5354)_6',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(2143)_6+(3211)_6$.',
      'Add the ones digits: $3+1=4$, with no carry.',
      'Add the sixes digits: $4+1=5$, with no carry.',
      'Add the thirty-sixes digits: $1+2=3$, with no carry.',
      'Add the leading digits: $2+3=5$, with no carry.',
      '$(5354)_6$.'
    ]
  },
  {
    id: 't11-k3-p10', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(11133)_5+(11133)_5$.',
    answer: '(22321)_5',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(11133)_5+(11133)_5$.',
      'Add the ones digits: $3+3=6=(1\\times 5)+1$, so write $1$ and carry $1$.',
      'Add the next digits with the carry: $3+3+1=7=(1\\times 5)+2$, so write $2$ and carry $1$.',
      'Add the next digits with the carry: $1+1+1=3$, with no further carry.',
      'Add the next digits: $1+1=2$, with no carry. Add the leading digits: $1+1=2$, with no carry.',
      '$(22321)_5$.'
    ]
  },
  {
    id: 't11-k3-p11', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(1000011)_2+(1000011)_2$.',
    answer: '(10000110)_2',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(1000011)_2+(1000011)_2$.',
      'Add the ones digits: $1+1=2=(1\\times 2)+0$, so write $0$ and carry $1$.',
      'Add the next digits with the carry: $1+1+1=3=(1\\times 2)+1$, so write $1$ and carry $1$.',
      'Add the next digits with the carry: $0+0+1=1$, so write $1$ with no carry. Each of the next three places adds $0+0=0$. At the leading digits, $1+1+0=2=(1\\times 2)+0$, so write $0$ and carry $1$. The final carry becomes a new leading digit.',
      '$(10000110)_2$.'
    ]
  },
  {
    id: 't11-k3-p12', topic: 'numbers-in-base-b', kind: 't11-k3', calc: 'no',
    prompt: 'Compute $(13\\ 13)_{60}+(1)_{60}$.',
    answer: '(13 14)_60',
    form: 'Answer as the digits separated by spaces, as in 2 11 7.',
    solution: [
      'Compute $(13\\ 13)_{60}+(1)_{60}$.',
      'Add the ones digits: $13+1=14$, which is less than $60$, so write $14$ with no carry.',
      'The leading digit, $13$, is unchanged.',
      '$(13\\ 14)_{60}$.'
    ]
  },

  // t11-k4: subtract two base b numerals.
  {
    id: 't11-k4-p01', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(30121)_4-(1)_4$.',
    answer: '(30120)_4',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(30121)_4-(1)_4$.',
      'Subtract the ones digits: $1-1=0$, with no trade needed.',
      'Every remaining digit of the second numeral is $0$, so the rest of $(30121)_4$ is unchanged.',
      '$(30120)_4$.'
    ]
  },
  {
    id: 't11-k4-p02', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(11133)_5-(343)_5$.',
    answer: '(10240)_5',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(11133)_5-(343)_5$.',
      'Subtract the ones digits: $3-3=0$, with no trade needed.',
      'Subtract the next digits: $3-4$ is negative, so trade $5$ from the next place: $3+5-4=4$. The next place loses $1$.',
      'Subtract the next digits, taking off the traded $1$: $1-1-3$ is negative, so trade $5$: $1-1+5-3=2$. The next place loses $1$.',
      'Subtract the next digits, taking off the traded $1$: $1-1-0=0$, with no further trade needed. The leading digit, $1$, is unchanged.',
      '$(10240)_5$.'
    ]
  },
  {
    id: 't11-k4-p13', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(2467)_9-(1358)_9$.',
    answer: '(1108)_9',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(2467)_9-(1358)_9$.',
      'Subtract the ones digits: $7-8$ is negative, so trade $9$ from the next place: $7+9-8=8$. The next place loses $1$.',
      'Subtract the next digits, taking off the traded $1$: $6-1-5=0$, with no further trade needed.',
      'Subtract the next digits: $4-3=1$, with no further trade. Subtract the leading digits: $2-1=1$, with no further trade.',
      '$(1108)_9$.'
    ]
  },
  {
    id: 't11-k4-p04', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(300000)_7-(1)_7$.',
    answer: '(266666)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(300000)_7-(1)_7$.',
      'Subtract the ones digits: $0-1$ is negative, so trade $7$: $0+7-1=6$. The next place loses $1$.',
      'Each of the next four places is $0-0-1$, which is negative. Each trades a $7$ from the next place in turn: $0+7-0-1=6$, four times.',
      'Subtract the leading digits, taking off the last traded $1$: $3-1=2$, with no further trade needed.',
      '$(266666)_7$.'
    ]
  },
  {
    id: 't11-k4-p05', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(1000000001)_2-(10)_2$.',
    answer: '(111111111)_2',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(1000000001)_2-(10)_2$.',
      'Subtract the ones digits: $1-0=1$, with no trade.',
      'Subtract the twos digits: $0-1$ is negative, so trade $2$ from the next place: $0+2-1=1$. The next place loses $1$.',
      'The next seven digits of the first numeral are $0$, and the second numeral has $0$ there. So the trade passes through all seven places. Each becomes $0+2-0-1=1$, and the next place loses $1$. At the leading digit, $1-1=0$, so drop the leading $0$.',
      '$(111111111)_2$.'
    ]
  },
  {
    id: 't11-k4-p06', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(10000)_2-(1)_2$.',
    answer: '(1111)_2',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(10000)_2-(1)_2$.',
      'Subtract the ones digits: $0-1$ is negative, so trade $2$: $0+2-1=1$. The next place loses $1$.',
      'The trade passes through the next three places. Each becomes $0+2-0-1=1$, and the next place loses $1$. At the leading digit, $1-1=0$, so drop the leading $0$.',
      '$(1111)_2$.'
    ]
  },
  {
    id: 't11-k4-p07', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(13\\ 13)_{60}-(1)_{60}$.',
    answer: '(13 12)_60',
    form: 'Answer as the digits separated by spaces, as in 2 11 7.',
    solution: [
      'Compute $(13\\ 13)_{60}-(1)_{60}$.',
      'Subtract the ones digits: $13-1=12$, with no trade needed.',
      'The leading digit, $13$, is unchanged.',
      '$(13\\ 12)_{60}$.'
    ]
  },
  {
    id: 't11-k4-p08', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(550)_7-(3)_7$.',
    answer: '(544)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(550)_7-(3)_7$.',
      'Subtract the ones digits: $0-3$ is negative, so trade $7$ from the next place: $0+7-3=4$. The next place loses $1$.',
      'Subtract the sevens digits, taking off the traded $1$: $5-1=4$, with no further trade needed.',
      'The leading digit, $5$, is unchanged.',
      '$(544)_7$.'
    ]
  },
  {
    id: 't11-k4-p14', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(5642)_7-(2431)_7$.',
    answer: '(3211)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(5642)_7-(2431)_7$.',
      'Subtract the ones digits: $2-1=1$, with no trade needed.',
      'Subtract the sevens digits: $4-3=1$, with no trade needed.',
      'Subtract the forty-nines digits: $6-4=2$, with no trade needed.',
      'Subtract the leading digits: $5-2=3$, with no trade needed.',
      '$(3211)_7$.'
    ]
  },
  {
    id: 't11-k4-p15', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(6023)_8-(1476)_8$.',
    answer: '(4325)_8',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(6023)_8-(1476)_8$.',
      'Subtract the ones digits: $3-6$ is negative, so trade $8$ from the next place: $3+8-6=5$. The next place loses $1$.',
      'Subtract the next digits, taking off the traded $1$: $2-1-7$ is negative, so trade $8$: $2-1+8-7=2$. The next place loses $1$.',
      'Subtract the next digits, taking off the traded $1$: $0-1-4$ is negative, so trade $8$: $0-1+8-4=3$. The next place loses $1$.',
      'Subtract the leading digits, taking off the traded $1$: $6-1-1=4$, with no further trade needed.',
      '$(4325)_8$.'
    ]
  },
  {
    id: 't11-k4-p11', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(1580)_{11}-(1)_{11}$.',
    answer: '(1 5 7 10)_11',
    form: 'Answer as the digits separated by spaces, as in 2 11 7.',
    solution: [
      'Compute $(1580)_{11}-(1)_{11}$.',
      'Subtract the ones digits: $0-1$ is negative, so trade $11$ from the next place: $0+11-1=10$. The next place loses $1$.',
      'Subtract the next digits, taking off the traded $1$: $8-1=7$, with no further trade needed.',
      'The remaining digits, $5$ and $1$, are unchanged.',
      '$(1\\ 5\\ 7\\ 10)_{11}$.'
    ]
  },
  {
    id: 't11-k4-p12', topic: 'numbers-in-base-b', kind: 't11-k4', calc: 'no',
    prompt: 'Compute $(3580)_{12}-(1)_{12}$.',
    answer: '(3 5 7 11)_12',
    form: 'Answer as the digits separated by spaces, as in 2 11 7.',
    solution: [
      'Compute $(3580)_{12}-(1)_{12}$.',
      'Subtract the ones digits: $0-1$ is negative, so trade $12$ from the next place: $0+12-1=11$. The next place loses $1$.',
      'Subtract the next digits, taking off the traded $1$: $8-1=7$, with no further trade needed.',
      'The remaining digits, $5$ and $3$, are unchanged.',
      '$(3\\ 5\\ 7\\ 11)_{12}$.'
    ]
  },

  // t11-k5: multiply a base b numeral by a single-digit base b numeral.
  {
    id: 't11-k5-p01', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(265)_7\\times(3)_7$.',
    answer: '(1161)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(265)_7\\times(3)_7$.',
      'Multiply the ones digit by $3$: $5\\times 3=15=(2\\times 7)+1$; write $1$ and carry $2$.',
      'Multiply the sevens digit by $3$ and add the carry: $(6\\times 3)+2=20=(2\\times 7)+6$; write $6$ and carry $2$.',
      'Multiply the forty-nines digit by $3$ and add the carry: $(2\\times 3)+2=8=(1\\times 7)+1$; write $1$ and carry $1$.',
      'Write the final carry, $1$, in the next place, since no digits remain there.',
      '$(1161)_7$.'
    ]
  },
  {
    id: 't11-k5-p02', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(550)_7\\times(5)_7$.',
    answer: '(4040)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(550)_7\\times(5)_7$.',
      'Multiply the ones digit by $5$: $0\\times 5=0$; write $0$.',
      'Multiply the sevens digit by $5$: $5\\times 5=25=(3\\times 7)+4$; write $4$ and carry $3$.',
      'Multiply the forty-nines digit by $5$ and add the carry: $(5\\times 5)+3=28=(4\\times 7)+0$; write $0$ and carry $4$.',
      'Write the final carry, $4$, in the next place, since no digits remain there.',
      '$(4040)_7$.'
    ]
  },
  {
    id: 't11-k5-p03', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(1431)_8\\times(6)_8$.',
    answer: '(11226)_8',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(1431)_8\\times(6)_8$.',
      'Multiply the ones digit by $6$: $1\\times 6=6$; write $6$.',
      'Multiply the eights digit by $6$: $3\\times 6=18=(2\\times 8)+2$; write $2$ and carry $2$.',
      'Multiply the sixty-fours digit by $6$ and add the carry: $(4\\times 6)+2=26=(3\\times 8)+2$; write $2$ and carry $3$.',
      'Multiply the leading digit by $6$ and add the carry: $(1\\times 6)+3=9=(1\\times 8)+1$; write $1$ and carry $1$. Write the final carry, $1$, in the next place.',
      '$(11226)_8$.'
    ]
  },
  {
    id: 't11-k5-p04', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(30121)_4\\times(2)_4$.',
    answer: '(120302)_4',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(30121)_4\\times(2)_4$.',
      'Multiply the ones digit by $2$: $1\\times 2=2$; write $2$.',
      'Multiply the fours digit by $2$: $2\\times 2=4=(1\\times 4)+0$; write $0$ and carry $1$.',
      'Multiply the sixteens digit by $2$ and add the carry: $(1\\times 2)+1=3$; write $3$.',
      'Multiply the sixty-fours digit by $2$: $0\\times 2=0$; write $0$.',
      'Multiply the leading digit by $2$: $3\\times 2=6=(1\\times 4)+2$; write $2$ and carry $1$. Write the final carry, $1$, in the next place.',
      '$(120302)_4$.'
    ]
  },
  {
    id: 't11-k5-p05', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(2152)_6\\times(5)_6$.',
    answer: '(15324)_6',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(2152)_6\\times(5)_6$.',
      'Multiply the ones digit by $5$: $2\\times 5=10=(1\\times 6)+4$; write $4$ and carry $1$.',
      'Multiply the sixes digit by $5$ and add the carry: $(5\\times 5)+1=26=(4\\times 6)+2$; write $2$ and carry $4$.',
      'Multiply the thirty-sixes digit by $5$ and add the carry: $(1\\times 5)+4=9=(1\\times 6)+3$; write $3$ and carry $1$.',
      'Multiply the leading digit by $5$ and add the carry: $(2\\times 5)+1=11=(1\\times 6)+5$; write $5$ and carry $1$. Write the final carry, $1$, in the next place.',
      '$(15324)_6$.'
    ]
  },
  {
    id: 't11-k5-p06', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(1331)_9\\times(7)_9$.',
    answer: '(10537)_9',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(1331)_9\\times(7)_9$.',
      'Multiply the ones digit by $7$: $1\\times 7=7$; write $7$.',
      'Multiply the nines digit by $7$: $3\\times 7=21=(2\\times 9)+3$; write $3$ and carry $2$.',
      'Multiply the eighty-ones digit by $7$ and add the carry: $(3\\times 7)+2=23=(2\\times 9)+5$; write $5$ and carry $2$.',
      'Multiply the leading digit by $7$ and add the carry: $(1\\times 7)+2=9=(1\\times 9)+0$; write $0$ and carry $1$. Write the final carry, $1$, in the next place.',
      '$(10537)_9$.'
    ]
  },
  {
    id: 't11-k5-p07', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(1580)_{11}\\times(6)_{11}$.',
    answer: '(9140)_11',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(1580)_{11}\\times(6)_{11}$.',
      'Multiply the ones digit by $6$: $0\\times 6=0$; write $0$.',
      'Multiply the elevens digit by $6$: $8\\times 6=48=(4\\times 11)+4$; write $4$ and carry $4$.',
      'Multiply the next digit by $6$ and add the carry: $(5\\times 6)+4=34=(3\\times 11)+1$; write $1$ and carry $3$.',
      'Multiply the leading digit by $6$ and add the carry: $(1\\times 6)+3=9$; write $9$, with no further carry.',
      '$(9140)_{11}$.'
    ]
  },
  {
    id: 't11-k5-p08', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(3580)_{12}\\times(9)_{12}$.',
    answer: '(27300)_12',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(3580)_{12}\\times(9)_{12}$.',
      'Multiply the ones digit by $9$: $0\\times 9=0$; write $0$.',
      'Multiply the twelves digit by $9$: $8\\times 9=72=(6\\times 12)+0$; write $0$ and carry $6$.',
      'Multiply the next digit by $9$ and add the carry: $(5\\times 9)+6=51=(4\\times 12)+3$; write $3$ and carry $4$.',
      'Multiply the leading digit by $9$ and add the carry: $(3\\times 9)+4=31=(2\\times 12)+7$; write $7$ and carry $2$. Write the final carry, $2$, in the next place.',
      '$(27300)_{12}$.'
    ]
  },
  {
    id: 't11-k5-p09', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(11133)_5\\times(2)_5$.',
    answer: '(22321)_5',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(11133)_5\\times(2)_5$.',
      'Multiply the ones digit by $2$: $3\\times 2=6=(1\\times 5)+1$; write $1$ and carry $1$.',
      'Multiply the fives digit by $2$ and add the carry: $(3\\times 2)+1=7=(1\\times 5)+2$; write $2$ and carry $1$.',
      'Multiply the twenty-fives digit by $2$ and add the carry: $(1\\times 2)+1=3$; write $3$.',
      'Multiply the next digit by $2$: $1\\times 2=2$; write $2$. Multiply the leading digit by $2$: $1\\times 2=2$; write $2$.',
      '$(22321)_5$.'
    ]
  },
  {
    id: 't11-k5-p10', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(24)_7\\times(3)_7$.',
    answer: '(105)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(24)_7\\times(3)_7$.',
      'Multiply the ones digit by $3$: $4\\times 3=12=(1\\times 7)+5$; write $5$ and carry $1$.',
      'Multiply the sevens digit by $3$ and add the carry: $(2\\times 3)+1=7=(1\\times 7)+0$; write $0$ and carry $1$. Write the final carry, $1$, in the next place.',
      '$(105)_7$.'
    ]
  },
  {
    id: 't11-k5-p11', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(30120)_4\\times(3)_4$.',
    answer: '(211020)_4',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(30120)_4\\times(3)_4$.',
      'Multiply the ones digit by $3$: $0\\times 3=0$; write $0$.',
      'Multiply the fours digit by $3$: $2\\times 3=6=(1\\times 4)+2$; write $2$ and carry $1$.',
      'Multiply the sixteens digit by $3$ and add the carry: $(1\\times 3)+1=4=(1\\times 4)+0$; write $0$ and carry $1$.',
      'Multiply the sixty-fours digit by $3$: $0\\times 3=0$; add the carry: $0+1=1$; write $1$.',
      'Multiply the leading digit by $3$: $3\\times 3=9=(2\\times 4)+1$; write $1$ and carry $2$. Write the final carry, $2$, in the next place.',
      '$(211020)_4$.'
    ]
  },
  {
    id: 't11-k5-p12', topic: 'numbers-in-base-b', kind: 't11-k5', calc: 'no',
    prompt: 'Compute $(550)_7\\times(2)_7$.',
    answer: '(1430)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(550)_7\\times(2)_7$.',
      'Multiply the ones digit by $2$: $0\\times 2=0$; write $0$.',
      'Multiply the sevens digit by $2$: $5\\times 2=10=(1\\times 7)+3$; write $3$ and carry $1$.',
      'Multiply the forty-nines digit by $2$ and add the carry: $(5\\times 2)+1=11=(1\\times 7)+4$; write $4$ and carry $1$. Write the final carry, $1$, in the next place.',
      '$(1430)_7$.'
    ]
  },

  // t11-k6: multiply two multi-digit base b numerals.
  {
    id: 't11-k6-p01', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(540)_7\\times(26)_7$.',
    answer: '(21630)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(540)_7\\times(26)_7$.',
      'Multiply $(540)_7$ by the ones digit of $(26)_7$: $(540)_7\\times(6)_7=(4530)_7$.',
      'Multiply $(540)_7$ by the sevens digit of $(26)_7$: $(540)_7\\times(2)_7=(1410)_7$, shifted one column to the left, giving $(14100)_7$.',
      'Add $(4530)_7$ and $(14100)_7$ using the base $7$ addition algorithm.',
      '$(21630)_7$.'
    ]
  },
  {
    id: 't11-k6-p02', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(11\\ 8\\ 10)_{12}\\times(76)_{12}$.',
    answer: '(74030)_12',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(11\\ 8\\ 10)_{12}\\times(76)_{12}$.',
      'Multiply $(11\\ 8\\ 10)_{12}$ by the ones digit of $(76)_{12}$: $(11\\ 8\\ 10)_{12}\\times(6)_{12}=(5\\ 10\\ 5\\ 0)_{12}$.',
      'Multiply $(11\\ 8\\ 10)_{12}$ by the twelves digit of $(76)_{12}$: $(11\\ 8\\ 10)_{12}\\times(7)_{12}=(6\\ 10\\ 1\\ 10)_{12}$, shifted one column to the left.',
      'Add $(5\\ 10\\ 5\\ 0)_{12}$ and $(6\\ 10\\ 1\\ 10\\ 0)_{12}$ using the base $12$ addition algorithm.',
      '$(74030)_{12}$.'
    ]
  },
  {
    id: 't11-k6-p03', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(2\\ 45)_{60}\\times(56\\ 22\\ 3)_{60}$.',
    answer: '(2 35 0 38 15)_60',
    form: 'Answer as the digits separated by spaces, as in 2 11 7.',
    solution: [
      'Compute $(2\\ 45)_{60}\\times(56\\ 22\\ 3)_{60}$.',
      'Multiply $(2\\ 45)_{60}$ by the ones digit $3$ of $(56\\ 22\\ 3)_{60}$: $(2\\times 60+45)\\times 3=495=(8\\ 15)_{60}$, placed with no shift.',
      'Multiply $(2\\ 45)_{60}$ by the next digit $22$: $(2\\times 60+45)\\times 22=3\\,630=(1\\ 0\\ 30)_{60}$, shifted one column to the left.',
      'Multiply $(2\\ 45)_{60}$ by the leading digit $56$: $(2\\times 60+45)\\times 56=9\\,240=(2\\ 34\\ 0)_{60}$, shifted two columns to the left.',
      'Add the three shifted partial products place by place. The ones place gets $15$, the next gets $8+30=38$, and the next gets $0+0=0$. The next gets $1+34=35$, and the leading place gets $2$. No column total reaches $60$.',
      '$(2\\ 35\\ 0\\ 38\\ 15)_{60}$.'
    ]
  },
  {
    id: 't11-k6-p04', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(10011011)_2\\times(1100010)_2$.',
    answer: '(11101101010110)_2',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(10011011)_2\\times(1100010)_2$.',
      'The digits of $(1100010)_2$, read from the ones place, are $0,1,0,0,0,1,1$. So the digit $1$ appears only $1$, $5$, and $6$ columns left of the ones place.',
      'Multiplying $(10011011)_2$ by the digit $1$ copies it unchanged. Multiplying it by the digit $0$ gives all zeros. So the nonzero partial products are $(10011011)_2$ itself, shifted left $1$, $5$, and $6$ columns.',
      'Add the three shifted partial products using the base $2$ addition algorithm.',
      '$(11101101010110)_2$.'
    ]
  },
  {
    id: 't11-k6-p05', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(123456)_7\\times(10000)_7$.',
    answer: '(1234560000)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(123456)_7\\times(10000)_7$.',
      'Multiply $(123456)_7$ by the ones digit of $(10000)_7$, which is $0$: every place gives $0$.',
      'Multiply $(123456)_7$ by the digit $1$ at the $7^4$ place of $(10000)_7$. This copies $(123456)_7$ unchanged, shifted four columns to the left.',
      'Add the shifted partial product to the zeros already found.',
      '$(1234560000)_7$.'
    ]
  },
  {
    id: 't11-k6-p13', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(2314)_5\\times(23)_5$.',
    answer: '(114332)_5',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(2314)_5\\times(23)_5$.',
      'Multiply $(2314)_5$ by the ones digit of $(23)_5$: $(2314)_5\\times(3)_5=(13002)_5$.',
      'Multiply $(2314)_5$ by the fives digit of $(23)_5$: $(2314)_5\\times(2)_5=(10133)_5$, shifted one column to the left, giving $(101330)_5$.',
      'Add $(13002)_5$ and $(101330)_5$ using the base $5$ addition algorithm.',
      '$(114332)_5$.'
    ]
  },
  {
    id: 't11-k6-p07', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(2152)_6\\times(12)_6$.',
    answer: '(30304)_6',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(2152)_6\\times(12)_6$.',
      'Multiply $(2152)_6$ by the ones digit of $(12)_6$: $(2152)_6\\times(2)_6=(4344)_6$.',
      'Multiply $(2152)_6$ by the sixes digit of $(12)_6$: $(2152)_6\\times(1)_6=(2152)_6$, shifted one column to the left, giving $(21520)_6$.',
      'Add $(4344)_6$ and $(21520)_6$ using the base $6$ addition algorithm.',
      '$(30304)_6$.'
    ]
  },
  {
    id: 't11-k6-p08', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(1331)_9\\times(21)_9$.',
    answer: '(28051)_9',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(1331)_9\\times(21)_9$.',
      'Multiply $(1331)_9$ by the ones digit of $(21)_9$: $(1331)_9\\times(1)_9=(1331)_9$.',
      'Multiply $(1331)_9$ by the nines digit of $(21)_9$: $(1331)_9\\times(2)_9=(2662)_9$, shifted one column to the left, giving $(26620)_9$.',
      'Add $(1331)_9$ and $(26620)_9$ using the base $9$ addition algorithm.',
      '$(28051)_9$.'
    ]
  },
  {
    id: 't11-k6-p09', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(1580)_{11}\\times(13)_{11}$.',
    answer: '(1 10 3 2 0)_11',
    form: 'Answer as the digits separated by spaces, as in 2 11 7.',
    solution: [
      'Compute $(1580)_{11}\\times(13)_{11}$.',
      'Multiply $(1580)_{11}$ by the ones digit of $(13)_{11}$: $(1580)_{11}\\times(3)_{11}=(4\\ 6\\ 2\\ 0)_{11}$.',
      'Multiply $(1580)_{11}$ by the elevens digit of $(13)_{11}$: $(1580)_{11}\\times(1)_{11}=(1580)_{11}$, shifted one column to the left, giving $(1\\ 5\\ 8\\ 0\\ 0)_{11}$.',
      'Add $(4\\ 6\\ 2\\ 0)_{11}$ and $(1\\ 5\\ 8\\ 0\\ 0)_{11}$ using the base $11$ addition algorithm.',
      '$(1\\ 10\\ 3\\ 2\\ 0)_{11}$.'
    ]
  },
  {
    id: 't11-k6-p10', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(3580)_{12}\\times(15)_{12}$.',
    answer: '(4 11 0 4 0)_12',
    form: 'Answer as the digits separated by spaces, as in 2 11 7.',
    solution: [
      'Compute $(3580)_{12}\\times(15)_{12}$.',
      'Multiply $(3580)_{12}$ by the ones digit of $(15)_{12}$: $(3580)_{12}\\times(5)_{12}=(1\\ 5\\ 4\\ 4\\ 0)_{12}$.',
      'Multiply $(3580)_{12}$ by the twelves digit of $(15)_{12}$: $(3580)_{12}\\times(1)_{12}=(3580)_{12}$, shifted one column to the left, giving $(3\\ 5\\ 8\\ 0\\ 0)_{12}$.',
      'Add $(1\\ 5\\ 4\\ 4\\ 0)_{12}$ and $(3\\ 5\\ 8\\ 0\\ 0)_{12}$ using the base $12$ addition algorithm.',
      '$(4\\ 11\\ 0\\ 4\\ 0)_{12}$.'
    ]
  },
  {
    id: 't11-k6-p11', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(30121)_4\\times(21)_4$.',
    answer: '(1233201)_4',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(30121)_4\\times(21)_4$.',
      'Multiply $(30121)_4$ by the ones digit of $(21)_4$: $(30121)_4\\times(1)_4=(30121)_4$.',
      'Multiply $(30121)_4$ by the fours digit of $(21)_4$: $(30121)_4\\times(2)_4=(120302)_4$, shifted one column to the left, giving $(1203020)_4$.',
      'Add $(30121)_4$ and $(1203020)_4$ using the base $4$ addition algorithm.',
      '$(1233201)_4$.'
    ]
  },
  {
    id: 't11-k6-p12', topic: 'numbers-in-base-b', kind: 't11-k6', calc: 'no',
    prompt: 'Compute $(550)_7\\times(24)_7$.',
    answer: '(20460)_7',
    form: 'Answer as the digits, as in 1011.',
    solution: [
      'Compute $(550)_7\\times(24)_7$.',
      'Multiply $(550)_7$ by the ones digit of $(24)_7$: $(550)_7\\times(4)_7=(3160)_7$.',
      'Multiply $(550)_7$ by the sevens digit of $(24)_7$: $(550)_7\\times(2)_7=(1430)_7$, shifted one column to the left, giving $(14300)_7$.',
      'Add $(3160)_7$ and $(14300)_7$ using the base $7$ addition algorithm.',
      '$(20460)_7$.'
    ]
  }
]
