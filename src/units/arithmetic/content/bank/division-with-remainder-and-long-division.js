// Division-with-Remainder and Long Division: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't9-k1-p01',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $78\\,645$ by $119$ using the long division algorithm.',
    answer: '660, 105',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $78\\,645$ by $119$ using the long division algorithm.',
      '$7=(0\\times 119)+7$, since $7$ is less than $119$. Write $0$ as the first digit of the quotient, and carry the remainder $7$.',
      '$10\\times 7+8=78$, and $78=(0\\times 119)+78$, since $78$ is less than $119$. Write $0$ as the next digit of the quotient, and carry the remainder $78$.',
      '$10\\times 78+6=786$, and $786=(6\\times 119)+72$. Write $6$ as the next digit of the quotient, and carry the remainder $72$.',
      '$10\\times 72+4=724$, and $724=(6\\times 119)+10$. Write $6$ as the next digit of the quotient, and carry the remainder $10$.',
      '$10\\times 10+5=105$, and $105=(0\\times 119)+105$, since $105$ is less than $119$. Write $0$ as the last digit of the quotient. The remainder $105$ is final.',
      'Read the quotient digits in order and drop the leading zeros.',
      '$660$, $105$.'
    ]
  },
  {
    id: 't9-k1-p02',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $235$ by $4$ using the long division algorithm.',
    answer: '58, 3',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $235$ by $4$ using the long division algorithm.',
      '$2=(0\\times 4)+2$, since $2$ is less than $4$. Write $0$ as the first digit of the quotient, and carry the remainder $2$.',
      '$10\\times 2+3=23$, and $23=(5\\times 4)+3$. Write $5$ as the next digit of the quotient, and carry the remainder $3$.',
      '$10\\times 3+5=35$, and $35=(8\\times 4)+3$. Write $8$ as the last digit of the quotient. The remainder $3$ is final.',
      'Read the quotient digits in order and drop the leading zero.',
      '$58$, $3$.'
    ]
  },
  {
    id: 't9-k1-p03',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $1\\,162$ by $19$ using the long division algorithm.',
    answer: '61, 3',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $1\\,162$ by $19$ using the long division algorithm.',
      '$1=(0\\times 19)+1$, since $1$ is less than $19$. Write $0$ as the first digit of the quotient, and carry the remainder $1$.',
      '$10\\times 1+1=11$, and $11=(0\\times 19)+11$, since $11$ is less than $19$. Write $0$ as the next digit of the quotient, and carry the remainder $11$.',
      '$10\\times 11+6=116$, and $116=(6\\times 19)+2$. Write $6$ as the next digit of the quotient, and carry the remainder $2$.',
      '$10\\times 2+2=22$, and $22=(1\\times 19)+3$. Write $1$ as the last digit of the quotient. The remainder $3$ is final.',
      'Read the quotient digits in order and drop the leading zeros.',
      '$61$, $3$.'
    ]
  },
  {
    id: 't9-k1-p04',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $724$ by $6$ using the long division algorithm.',
    answer: '120, 4',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $724$ by $6$ using the long division algorithm.',
      '$7=(1\\times 6)+1$. Write $1$ as the first digit of the quotient, and carry the remainder $1$.',
      '$10\\times 1+2=12$, and $12=(2\\times 6)+0$. Write $2$ as the next digit of the quotient, and carry the remainder $0$.',
      '$10\\times 0+4=4$, and $4=(0\\times 6)+4$, since $4$ is less than $6$. Write $0$ as the last digit of the quotient. The remainder $4$ is final.',
      'Read the quotient digits in order.',
      '$120$, $4$.'
    ]
  },
  {
    id: 't9-k1-p05',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $4\\,059$ by $7$ using the long division algorithm.',
    answer: '579, 6',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $4\\,059$ by $7$ using the long division algorithm.',
      '$4=(0\\times 7)+4$, since $4$ is less than $7$. Write $0$ as the first digit of the quotient, and carry the remainder $4$.',
      '$10\\times 4+0=40$, and $40=(5\\times 7)+5$. Write $5$ as the next digit of the quotient, and carry the remainder $5$.',
      '$10\\times 5+5=55$, and $55=(7\\times 7)+6$. Write $7$ as the next digit of the quotient, and carry the remainder $6$.',
      '$10\\times 6+9=69$, and $69=(9\\times 7)+6$. Write $9$ as the last digit of the quotient. The remainder $6$ is final.',
      'Read the quotient digits in order and drop the leading zero.',
      '$579$, $6$.'
    ]
  },
  {
    id: 't9-k1-p06',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $6\\,247$ by $5$ using the long division algorithm.',
    answer: '1 249, 2',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $6\\,247$ by $5$ using the long division algorithm.',
      '$6=(1\\times 5)+1$. Write $1$ as the first digit of the quotient, and carry the remainder $1$.',
      '$10\\times 1+2=12$, and $12=(2\\times 5)+2$. Write $2$ as the next digit of the quotient, and carry the remainder $2$.',
      '$10\\times 2+4=24$, and $24=(4\\times 5)+4$. Write $4$ as the next digit of the quotient, and carry the remainder $4$.',
      '$10\\times 4+7=47$, and $47=(9\\times 5)+2$. Write $9$ as the last digit of the quotient. The remainder $2$ is final.',
      'Read the quotient digits in order.',
      '$1\\,249$, $2$.'
    ]
  },
  {
    id: 't9-k1-p07',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $15\\,234$ by $42$ using the long division algorithm.',
    answer: '362, 30',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $15\\,234$ by $42$ using the long division algorithm.',
      '$1=(0\\times 42)+1$, since $1$ is less than $42$. Write $0$ as the first digit of the quotient, and carry the remainder $1$.',
      '$10\\times 1+5=15$, and $15=(0\\times 42)+15$, since $15$ is less than $42$. Write $0$ as the next digit of the quotient, and carry the remainder $15$.',
      '$10\\times 15+2=152$, and $152=(3\\times 42)+26$. Write $3$ as the next digit of the quotient, and carry the remainder $26$.',
      '$10\\times 26+3=263$, and $263=(6\\times 42)+11$. Write $6$ as the next digit of the quotient, and carry the remainder $11$.',
      '$10\\times 11+4=114$, and $114=(2\\times 42)+30$. Write $2$ as the last digit of the quotient. The remainder $30$ is final.',
      'Read the quotient digits in order and drop the leading zeros.',
      '$362$, $30$.'
    ]
  },
  {
    id: 't9-k1-p08',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $2\\,508$ by $19$ using the long division algorithm.',
    answer: '132, 0',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $2\\,508$ by $19$ using the long division algorithm.',
      '$2=(0\\times 19)+2$, since $2$ is less than $19$. Write $0$ as the first digit of the quotient, and carry the remainder $2$.',
      '$10\\times 2+5=25$, and $25=(1\\times 19)+6$. Write $1$ as the next digit of the quotient, and carry the remainder $6$.',
      '$10\\times 6+0=60$, and $60=(3\\times 19)+3$. Write $3$ as the next digit of the quotient, and carry the remainder $3$.',
      '$10\\times 3+8=38$, and $38=(2\\times 19)+0$. Write $2$ as the last digit of the quotient. The remainder $0$ is final.',
      'Read the quotient digits in order and drop the leading zero.',
      '$132$, $0$.'
    ]
  },
  {
    id: 't9-k1-p09',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $50\\,094$ by $46$ using the long division algorithm.',
    answer: '1 089, 0',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $50\\,094$ by $46$ using the long division algorithm.',
      '$5=(0\\times 46)+5$, since $5$ is less than $46$. Write $0$ as the first digit of the quotient, and carry the remainder $5$.',
      '$10\\times 5+0=50$, and $50=(1\\times 46)+4$. Write $1$ as the next digit of the quotient, and carry the remainder $4$.',
      '$10\\times 4+0=40$, and $40=(0\\times 46)+40$, since $40$ is less than $46$. Write $0$ as the next digit of the quotient, and carry the remainder $40$.',
      '$10\\times 40+9=409$, and $409=(8\\times 46)+41$. Write $8$ as the next digit of the quotient, and carry the remainder $41$.',
      '$10\\times 41+4=414$, and $414=(9\\times 46)+0$. Write $9$ as the last digit of the quotient. The remainder $0$ is final.',
      'Read the quotient digits in order and drop the leading zero.',
      '$1\\,089$, $0$.'
    ]
  },
  {
    id: 't9-k1-p10',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $7\\,003$ by $9$ using the long division algorithm.',
    answer: '778, 1',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $7\\,003$ by $9$ using the long division algorithm.',
      '$7=(0\\times 9)+7$, since $7$ is less than $9$. Write $0$ as the first digit of the quotient, and carry the remainder $7$.',
      '$10\\times 7+0=70$, and $70=(7\\times 9)+7$. Write $7$ as the next digit of the quotient, and carry the remainder $7$.',
      '$10\\times 7+0=70$, and $70=(7\\times 9)+7$. Write $7$ as the next digit of the quotient, and carry the remainder $7$.',
      '$10\\times 7+3=73$, and $73=(8\\times 9)+1$. Write $8$ as the last digit of the quotient. The remainder $1$ is final.',
      'Read the quotient digits in order and drop the leading zero.',
      '$778$, $1$.'
    ]
  },
  {
    id: 't9-k1-p11',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $60$ by $7$ using the long division algorithm.',
    answer: '8, 4',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $60$ by $7$ using the long division algorithm.',
      '$6=(0\\times 7)+6$, since $6$ is less than $7$. Write $0$ as the first digit of the quotient, and carry the remainder $6$.',
      '$10\\times 6+0=60$, and $60=(8\\times 7)+4$. Write $8$ as the last digit of the quotient. The remainder $4$ is final.',
      'Read the quotient digits in order and drop the leading zero.',
      '$8$, $4$.'
    ]
  },
  {
    id: 't9-k1-p12',
    topic: 'division-with-remainder-and-long-division',
    kind: 't9-k1',
    calc: 'no',
    prompt: 'Find the quotient and remainder of the division-with-remainder of $392$ by $13$ using the long division algorithm.',
    answer: '30, 2',
    form: 'Answer as the quotient and the remainder, separated by a comma.',
    solution: [
      'Find the quotient and remainder of the division-with-remainder of $392$ by $13$ using the long division algorithm.',
      '$3=(0\\times 13)+3$, since $3$ is less than $13$. Write $0$ as the first digit of the quotient, and carry the remainder $3$.',
      '$10\\times 3+9=39$, and $39=(3\\times 13)+0$. Write $3$ as the next digit of the quotient, and carry the remainder $0$.',
      '$10\\times 0+2=2$, and $2=(0\\times 13)+2$, since $2$ is less than $13$. Write $0$ as the last digit of the quotient. The remainder $2$ is final.',
      'Read the quotient digits in order and drop the leading zero.',
      '$30$, $2$.'
    ]
  }
]
