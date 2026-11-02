// The Addition Algorithm: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't6-k1-p01',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $172\\,993+90\\,008$.',
    answer: '263 001',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $172\\,993+90\\,008$.',
      'Expand each number by place value: $172\\,993 = 100\\,000+70\\,000+2\\,000+900+90+3$ and $90\\,008 = 90\\,000+0+0+0+0+8$.',
      '$172\\,993+90\\,008 = 100\\,000+(70\\,000+90\\,000)+2\\,000+900+90+(3+8)$, by the associative and commutative laws of addition.',
      'The sums are $70\\,000+90\\,000=160\\,000$ and $3+8=11$, so the total is $100\\,000+160\\,000+2\\,000+900+90+11 = (100\\,000+100\\,000)+60\\,000+2\\,000+900+(90+10)+1$. The extra hundred-thousand and the extra ten carry into the next places.',
      '$263\\,001$.'
    ]
  },
  {
    id: 't6-k1-p02',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $270\\,010\\,060\\,001+80\\,930\\,040$.',
    answer: '270 090 990 041',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $270\\,010\\,060\\,001+80\\,930\\,040$.',
      '$270\\,010\\,060\\,001 = (2\\times{10}^{11})+(7\\times{10}^{10})+(1\\times{10}^7)+(6\\times{10}^4)+(1\\times{10}^0)$.',
      '$80\\,930\\,040 = (8\\times{10}^7)+(9\\times{10}^5)+(3\\times{10}^4)+(4\\times{10}^1)$.',
      'No matching pair of terms carries into another power of 10. So adding the matching powers gives $(2\\times{10}^{11})+(7\\times{10}^{10})+(9\\times{10}^7)+(9\\times{10}^5)+(9\\times{10}^4)+(4\\times{10}^1)+(1\\times{10}^0)$, by the associative and commutative laws of addition.',
      '$270\\,090\\,990\\,041$.'
    ]
  },
  {
    id: 't6-k1-p03',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $67\\,579+84\\,937$.',
    answer: '152 516',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $67\\,579+84\\,937$.',
      'Expand each number by place value: $67\\,579 = 60\\,000+7\\,000+500+70+9$ and $84\\,937 = 80\\,000+4\\,000+900+30+7$.',
      '$67\\,579+84\\,937 = (60\\,000+80\\,000)+(7\\,000+4\\,000)+(500+900)+(70+30)+(9+7)$, by the associative and commutative laws of addition.',
      'Add each column from the right: $9+7=16$, $70+30+10=110$, $500+900+100=1\\,500$, $7\\,000+4\\,000+1\\,000=12\\,000$, $60\\,000+80\\,000+10\\,000=150\\,000$. Each column carries its extra ten into the column to its left.',
      '$152\\,516$.'
    ]
  },
  {
    id: 't6-k1-p04',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Find $B+(A+C)$, where $A=31\\,986$, $B$ exceeds $A$ by $2\\,308$, and $C$ exceeds $B$ by $8\\,205$.',
    answer: '108 779',
    form: 'Answer as a whole number.',
    solution: [
      'Find $B+(A+C)$, where $A=31\\,986$, $B$ exceeds $A$ by $2\\,308$, and $C$ exceeds $B$ by $8\\,205$.',
      '$B=A+2\\,308=31\\,986+2\\,308=34\\,294$.',
      '$C=B+8\\,205=34\\,294+8\\,205=42\\,499$.',
      '$B+(A+C) = A+B+C$, by the associative and commutative laws of addition. Then $A+B+C=31\\,986+34\\,294+42\\,499$.',
      '$108\\,779$.'
    ]
  },
  {
    id: 't6-k1-p05',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $7\\,826+7\\,826+7\\,826$.',
    answer: '23 478',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $7\\,826+7\\,826+7\\,826$.',
      'Expand each of the three addends the same way: $7\\,826 = 7\\,000+800+20+6$.',
      '$7\\,826+7\\,826+7\\,826 = (7\\,000+7\\,000+7\\,000)+(800+800+800)+(20+20+20)+(6+6+6)$, by the associative and commutative laws of addition.',
      'The column sums are $6+6+6=18$, $20+20+20=60$, $800+800+800=2\\,400$, and $7\\,000+7\\,000+7\\,000=21\\,000$, so the total is $21\\,000+2\\,400+60+18$.',
      '$23\\,478$.'
    ]
  },
  {
    id: 't6-k1-p06',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $516+238+947$.',
    answer: '1 701',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $516+238+947$.',
      '$516=500+10+6$, $238=200+30+8$, $947=900+40+7$.',
      '$516+238+947 = (500+200+900)+(10+30+40)+(6+8+7)$, by the associative and commutative laws of addition.',
      '$6+8+7=21$, so two tens carry into the tens column: $(500+200+900)+(10+30+40+20)+1 = (500+200+900)+100+1$.',
      'The tens column totals $100$ and carries a hundred into the hundreds column, so the hundreds sum is $500+200+900+100=1\\,700$.',
      '$1\\,701$.'
    ]
  },
  {
    id: 't6-k1-p07',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $8\\,349+275$.',
    answer: '8 624',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $8\\,349+275$.',
      'Expand each number by place value: $8\\,349 = 8\\,000+300+40+9$ and $275 = 0+200+70+5$.',
      '$8\\,349+275 = 8\\,000+(300+200)+(40+70)+(9+5)$, by the associative and commutative laws of addition.',
      'The sum $9+5=14$ carries a ten into the tens column. The sum $40+70+10=120$ carries a hundred into the hundreds column: $8\\,000+(300+200+100)+20+4$.',
      '$8\\,624$.'
    ]
  },
  {
    id: 't6-k1-p08',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $486+275+930+18$.',
    answer: '1 709',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $486+275+930+18$.',
      '$486=400+80+6$, $275=200+70+5$, $930=900+30+0$, $18=0+10+8$.',
      '$486+275+930+18 = (400+200+900)+(80+70+30+10)+(6+5+0+8)$, by the associative and commutative laws of addition.',
      'The sum $6+5+0+8=19$ carries a ten into the tens column. The sum $80+70+30+10+10=200$ carries two hundreds into the hundreds column: $400+200+900+200+0+9$.',
      '$1\\,709$.'
    ]
  },
  {
    id: 't6-k1-p09',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $59+68$.',
    answer: '127',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $59+68$.',
      'Expand each number by place value: $59=50+9$ and $68=60+8$.',
      '$59+68 = (50+60)+(9+8)$, by the associative and commutative laws of addition.',
      'The sum $9+8=17$ carries a ten into the tens column: $(50+60+10)+7 = 120+7$.',
      '$127$.'
    ]
  },
  {
    id: 't6-k1-p10',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $12\\,345+6\\,789$.',
    answer: '19 134',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $12\\,345+6\\,789$.',
      'Expand each number by place value: $12\\,345 = 10\\,000+2\\,000+300+40+5$ and $6\\,789 = 0+6\\,000+700+80+9$.',
      '$12\\,345+6\\,789 = 10\\,000+(2\\,000+6\\,000)+(300+700)+(40+80)+(5+9)$, by the associative and commutative laws of addition.',
      'The sum $5+9=14$ carries a ten into the tens column. The sum $40+80+10=130$ carries a hundred into the hundreds column. The sum $300+700+100=1\\,100$ carries a thousand into the thousands column.',
      'The thousands column gives $2\\,000+6\\,000+1\\,000=9\\,000$, which needs no further carry, so the total is $10\\,000+9\\,000+100+30+4$.',
      '$19\\,134$.'
    ]
  },
  {
    id: 't6-k1-p11',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $3\\,004+998$.',
    answer: '4 002',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $3\\,004+998$.',
      'Expand each number by place value: $3\\,004 = 3\\,000+0+0+4$ and $998 = 0+900+90+8$.',
      'The ones column gives $4+8=12$ and carries a ten into the tens column.',
      'The tens column gives $0+90+10=100$. It carries a hundred into the hundreds column.',
      'The hundreds column gives $0+900+100=1\\,000$. It carries a thousand into the thousands column.',
      'The thousands column gives $3\\,000+1\\,000=4\\,000$, so the total is $4\\,000+0+0+2$.',
      '$4\\,002$.'
    ]
  },
  {
    id: 't6-k1-p12',
    topic: 'addition-algorithm',
    kind: 't6-k1',
    calc: 'no',
    prompt: 'Compute $45+55+37+63$.',
    answer: '200',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $45+55+37+63$.',
      '$45=40+5$, $55=50+5$, $37=30+7$, $63=60+3$.',
      '$45+55+37+63 = (40+50+30+60)+(5+5+7+3)$, by the associative and commutative laws of addition.',
      'The sum $5+5+7+3=20$ carries two tens into the tens column: $(40+50+30+60+20)+0 = 200+0$.',
      '$200$.'
    ]
  },
  {
    id: 't6-k2-p01',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $1+2+\\cdots+28$.',
    answer: '406',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $1+2+\\cdots+28$.',
      'Write $S=1+2+\\cdots+28$ also in reverse order as $S=28+(28-1)+\\cdots+1$.',
      'Add the two forms of $S$ term by term: $2S = (1+28)+(2+(28-1))+\\cdots+(28+1)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $28$ sums in parentheses equals $29$.',
      '$2S = 28\\times{29}=812$.',
      'So $S=812\\div2=406$, because $S$ is half of $2S$.',
      '$406$.'
    ]
  },
  {
    id: 't6-k2-p02',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $1+2+\\cdots+33$.',
    answer: '561',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $1+2+\\cdots+33$.',
      'Write $S=1+2+\\cdots+33$ also in reverse order as $S=33+(33-1)+\\cdots+1$.',
      'Add the two forms of $S$ term by term: $2S = (1+33)+(2+(33-1))+\\cdots+(33+1)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $33$ sums in parentheses equals $34$.',
      '$2S = 33\\times{34}=1\\,122$.',
      'So $S=1\\,122\\div2=561$, because $S$ is half of $2S$.',
      '$561$.'
    ]
  },
  {
    id: 't6-k2-p03',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $0+2+4+\\cdots+18$.',
    answer: '90',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $0+2+4+\\cdots+18$.',
      'Write $S=0+2+\\cdots+18$ also in reverse order as $S=18+(18-2)+\\cdots+0$.',
      'Add the two forms of $S$ term by term: $2S = (0+18)+(2+(18-2))+\\cdots+(18+0)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $10$ sums in parentheses equals $18$.',
      '$2S = 10\\times{18}=180$.',
      'So $S=180\\div2=90$, because $S$ is half of $2S$.',
      '$90$.'
    ]
  },
  {
    id: 't6-k2-p04',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $1+2+\\cdots+50$.',
    answer: '1 275',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $1+2+\\cdots+50$.',
      'Write $S=1+2+\\cdots+50$ also in reverse order as $S=50+(50-1)+\\cdots+1$.',
      'Add the two forms of $S$ term by term: $2S = (1+50)+(2+(50-1))+\\cdots+(50+1)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $50$ sums in parentheses equals $51$.',
      '$2S = 50\\times{51}=2\\,550$.',
      'So $S=2\\,550\\div2=1\\,275$, because $S$ is half of $2S$.',
      '$1\\,275$.'
    ]
  },
  {
    id: 't6-k2-p05',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $1+2+\\cdots+99$.',
    answer: '4 950',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $1+2+\\cdots+99$.',
      'Write $S=1+2+\\cdots+99$ also in reverse order as $S=99+(99-1)+\\cdots+1$.',
      'Add the two forms of $S$ term by term: $2S = (1+99)+(2+(99-1))+\\cdots+(99+1)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $99$ sums in parentheses equals $100$.',
      '$2S = 99\\times{100}=9\\,900$.',
      'So $S=9\\,900\\div2=4\\,950$, because $S$ is half of $2S$.',
      '$4\\,950$.'
    ]
  },
  {
    id: 't6-k2-p06',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $0+2+4+\\cdots+40$.',
    answer: '420',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $0+2+4+\\cdots+40$.',
      'Write $S=0+2+\\cdots+40$ also in reverse order as $S=40+(40-2)+\\cdots+0$.',
      'Add the two forms of $S$ term by term: $2S = (0+40)+(2+(40-2))+\\cdots+(40+0)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $21$ sums in parentheses equals $40$.',
      '$2S = 21\\times{40}=840$.',
      'So $S=840\\div2=420$, because $S$ is half of $2S$.',
      '$420$.'
    ]
  },
  {
    id: 't6-k2-p07',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $1+2+\\cdots+64$.',
    answer: '2 080',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $1+2+\\cdots+64$.',
      'Write $S=1+2+\\cdots+64$ also in reverse order as $S=64+(64-1)+\\cdots+1$.',
      'Add the two forms of $S$ term by term: $2S = (1+64)+(2+(64-1))+\\cdots+(64+1)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $64$ sums in parentheses equals $65$.',
      '$2S = 64\\times{65}=4\\,160$.',
      'So $S=4\\,160\\div2=2\\,080$, because $S$ is half of $2S$.',
      '$2\\,080$.'
    ]
  },
  {
    id: 't6-k2-p08',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $1+2+\\cdots+45$.',
    answer: '1 035',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $1+2+\\cdots+45$.',
      'Write $S=1+2+\\cdots+45$ also in reverse order as $S=45+(45-1)+\\cdots+1$.',
      'Add the two forms of $S$ term by term: $2S = (1+45)+(2+(45-1))+\\cdots+(45+1)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $45$ sums in parentheses equals $46$.',
      '$2S = 45\\times{46}=2\\,070$.',
      'So $S=2\\,070\\div2=1\\,035$, because $S$ is half of $2S$.',
      '$1\\,035$.'
    ]
  },
  {
    id: 't6-k2-p09',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $0+2+4+\\cdots+58$.',
    answer: '870',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $0+2+4+\\cdots+58$.',
      'Write $S=0+2+\\cdots+58$ also in reverse order as $S=58+(58-2)+\\cdots+0$.',
      'Add the two forms of $S$ term by term: $2S = (0+58)+(2+(58-2))+\\cdots+(58+0)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $30$ sums in parentheses equals $58$.',
      '$2S = 30\\times{58}=1\\,740$.',
      'So $S=1\\,740\\div2=870$, because $S$ is half of $2S$.',
      '$870$.'
    ]
  },
  {
    id: 't6-k2-p10',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $0+2+4+\\cdots+80$.',
    answer: '1 640',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $0+2+4+\\cdots+80$.',
      'Write $S=0+2+\\cdots+80$ also in reverse order as $S=80+(80-2)+\\cdots+0$.',
      'Add the two forms of $S$ term by term: $2S = (0+80)+(2+(80-2))+\\cdots+(80+0)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $41$ sums in parentheses equals $80$.',
      '$2S = 41\\times{80}=3\\,280$.',
      'So $S=3\\,280\\div2=1\\,640$, because $S$ is half of $2S$.',
      '$1\\,640$.'
    ]
  },
  {
    id: 't6-k2-p11',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Compute $1+2+\\cdots+77$.',
    answer: '3 003',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $1+2+\\cdots+77$.',
      'Write $S=1+2+\\cdots+77$ also in reverse order as $S=77+(77-1)+\\cdots+1$.',
      'Add the two forms of $S$ term by term: $2S = (1+77)+(2+(77-1))+\\cdots+(77+1)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $77$ sums in parentheses equals $78$.',
      '$2S = 77\\times{78}=6\\,006$.',
      'So $S=6\\,006\\div2=3\\,003$, because $S$ is half of $2S$.',
      '$3\\,003$.'
    ]
  },
  {
    id: 't6-k2-p12',
    topic: 'addition-algorithm',
    kind: 't6-k2',
    calc: 'no',
    prompt: 'Prove that the sum of the first $n$ even numbers $0,2,4,\\ldots,2(n-1)$ equals $n(n-1)$, for every whole number $n\\geq1$.',
    answer: null,
    form: 'Write a proof.',
    solution: [
      'Prove that the sum of the first $n$ even numbers $0,2,4,\\ldots,2(n-1)$ equals $n(n-1)$, for every whole number $n\\geq1$.',
      'Write $S=0+2+\\cdots+2(n-1)$ also in reverse order as $S=2(n-1)+2(n-2)+\\cdots+0$.',
      'Add the two forms of $S$ term by term: $2S = \\big(0+2(n-1)\\big)+\\big(2+2(n-2)\\big)+\\cdots+\\big(2(n-1)+0\\big)$.',
      'In each pair one term rises by the amount the other falls, so the pair keeps the same sum. Each of the $n$ sums in parentheses equals $2(n-1)$.',
      '$2S = n\\times{2(n-1)}$.',
      'So $S=n(n-1)$, because $S$ is half of $2S$.'
    ]
  }
]
