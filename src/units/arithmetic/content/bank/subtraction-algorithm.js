// The Subtraction Algorithm: problems stored blank, each with its full solution. Mixed practice draws them.
export default [
  {
    id: 't7-k1-p01',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $493\\,625-273\\,514$.',
    answer: '220 111',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $493\\,625-273\\,514$.',
      'Every digit of $273\\,514$ is at most the matching digit of $493\\,625$, so each column subtracts directly.',
      '$5-4=1$, $2-1=1$, $6-5=1$, $3-3=0$, $9-7=2$, $4-2=2$.',
      '$220\\,111$.'
    ]
  },
  {
    id: 't7-k1-p02',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $57\\,328\\,694-4\\,017\\,382$.',
    answer: '53 311 312',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $57\\,328\\,694-4\\,017\\,382$.',
      'Write $4\\,017\\,382$ as $04\\,017\\,382$ to match the eight digits of $57\\,328\\,694$. Every digit of the second number is at most the matching digit of the first, so each column subtracts directly.',
      '$4-2=2$, $9-8=1$, $6-3=3$, $8-7=1$, $2-1=1$, $3-0=3$, $7-4=3$, $5-0=5$.',
      '$53\\,311\\,312$.'
    ]
  },
  {
    id: 't7-k1-p03',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $76\\,431-58\\,914$.',
    answer: '17 517',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $76\\,431-58\\,914$.',
      'The ones column $1-4$ needs trading: change it to $11-4$ and lower the tens digit from 3 to 2.',
      'The hundreds column $4-9$ needs trading: change it to $14-9$ and lower the thousands digit from 6 to 5.',
      'The thousands column, now $5-8$, needs trading: change it to $15-8$ and lower the ten-thousands digit from 7 to 6.',
      'Subtract each column: $11-4=7$, $2-1=1$, $14-9=5$, $15-8=7$, $6-5=1$.',
      '$17\\,517$.'
    ]
  },
  {
    id: 't7-k1-p04',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $35-19$.',
    answer: '16',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $35-19$.',
      'The ones column $5-9$ needs trading: change it to $15-9$ and lower the tens digit from 3 to 2.',
      'Subtract each column: $15-9=6$, $2-1=1$.',
      '$16$.'
    ]
  },
  {
    id: 't7-k1-p05',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $804-385$.',
    answer: '419',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $804-385$.',
      'The ones column is $4-5$, and the digit to its left is 0, so the column needs trading through zeros. The tens digit becomes 9, and the hundreds digit falls from 8 to 7.',
      'Change the ones subtraction to $14-5=9$. The tens column is now $9-8=1$, which needs no further trade.',
      'Subtract the hundreds column: $7-3=4$.',
      '$419$.'
    ]
  },
  {
    id: 't7-k1-p06',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $800\\,400-770\\,992$.',
    answer: '29 408',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $800\\,400-770\\,992$.',
      'The ones column is $0-2$, and the digit to its left is 0, so the column needs trading through zeros. The tens digit becomes 9, and the hundreds digit falls from 4 to 3.',
      'Change the ones subtraction to $10-2$. The tens column is now $9-9=0$, which needs no further trade. The hundreds column, now $3-9$, needs trading through zeros. The thousands and ten-thousands digits become 9, and the hundred-thousands digit falls from 8 to 7.',
      'Subtract each column: $10-2=8$, $9-9=0$, $13-9=4$, $9-0=9$, $9-7=2$, $7-7=0$.',
      '$29\\,408$.'
    ]
  },
  {
    id: 't7-k1-p07',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $1\\,004-758$.',
    answer: '246',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $1\\,004-758$.',
      'The ones column is $4-8$, and the digit to its left is 0, so the column needs trading through zeros. The tens and hundreds digits become 9, and the thousands digit falls from 1 to 0.',
      'Change the ones subtraction to $14-8=6$.',
      'Subtract each remaining column: $9-5=4$, $9-7=2$.',
      '$246$.'
    ]
  },
  {
    id: 't7-k1-p08',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $60\\,005-12\\,348$.',
    answer: '47 657',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $60\\,005-12\\,348$.',
      'The ones column is $5-8$, and the digit to its left is 0, so the column needs trading through zeros. The tens, hundreds, and thousands digits become 9, and the ten-thousands digit falls from 6 to 5.',
      'Change the ones subtraction to $15-8=7$.',
      'Subtract each remaining column: $9-4=5$, $9-3=6$, $9-2=7$, $5-1=4$.',
      '$47\\,657$.'
    ]
  },
  {
    id: 't7-k1-p09',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $30\\,024-8\\,697$.',
    answer: '21 327',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $30\\,024-8\\,697$.',
      'The ones column $4-7$ needs trading: change it to $14-7$ and lower the tens digit from 2 to 1.',
      'The tens column, now $1-9$, needs trading through zeros. The hundreds and thousands digits become 9, and the ten-thousands digit falls from 3 to 2.',
      'Subtract each column: $14-7=7$, $11-9=2$, $9-6=3$, $9-8=1$, $2-0=2$.',
      '$21\\,327$.'
    ]
  },
  {
    id: 't7-k1-p10',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $563-241$.',
    answer: '322',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $563-241$.',
      'Every digit of 241 is at most the matching digit of 563, so each column subtracts directly.',
      '$3-1=2$, $6-4=2$, $5-2=3$.',
      '$322$.'
    ]
  },
  {
    id: 't7-k1-p11',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $9\\,002-3\\,765$.',
    answer: '5 237',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $9\\,002-3\\,765$.',
      'The ones column is $2-5$, and the digit to its left is 0, so the column needs trading through zeros. The tens and hundreds digits become 9, and the thousands digit falls from 9 to 8.',
      'Change the ones subtraction to $12-5=7$.',
      'Subtract each remaining column: $9-6=3$, $9-7=2$, $8-3=5$.',
      '$5\\,237$.'
    ]
  },
  {
    id: 't7-k1-p12',
    topic: 'subtraction-algorithm',
    kind: 't7-k1',
    calc: 'no',
    prompt: 'Compute $70\\,004-2\\,586$.',
    answer: '67 418',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $70\\,004-2\\,586$.',
      'The ones column is $4-6$, and the digit to its left is 0, so the column needs trading through zeros. The tens, hundreds, and thousands digits become 9, and the ten-thousands digit falls from 7 to 6.',
      'Change the ones subtraction to $14-6=8$.',
      'Subtract each remaining column: $9-8=1$, $9-5=4$, $9-2=7$, $6-0=6$.',
      '$67\\,418$.'
    ]
  },
  {
    id: 't7-k2-p02',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how much each of Priya and Omar has. Priya has 13 dollars more than Omar, and the two together have 89 dollars.',
    answer: '51, 38',
    form: 'Answer as whole numbers separated by commas, in the order asked.',
    solution: [
      'Find how much each of Priya and Omar has. Priya has 13 dollars more than Omar, and the two together have 89 dollars.',
      'Let $p$ be Priya\'s dollars, so Omar has $p-13$. Together they have 89 dollars, so $p+(p-13)=89$.',
      '$p+(p-13) = 2p-13$, by the definition of subtraction and the associative and commutative laws of addition, so $2p-13=89$.',
      'So $2p=102$ and $p=51$, by the definition of subtraction, since $89+13=102$.',
      'Omar has $51-13=38$.',
      '$51$, $38$.'
    ]
  },
  {
    id: 't7-k2-p05',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how much each of Wei and Aroha has. Wei has 34 dollars more than Aroha, and the two together have 210 dollars.',
    answer: '122, 88',
    form: 'Answer as whole numbers separated by commas, in the order asked.',
    solution: [
      'Find how much each of Wei and Aroha has. Wei has 34 dollars more than Aroha, and the two together have 210 dollars.',
      'Let $w$ be Wei\'s dollars, so Aroha has $w-34$. Together they have 210 dollars, so $w+(w-34)=210$.',
      '$w+(w-34) = 2w-34$, by the definition of subtraction and the associative and commutative laws of addition, so $2w-34=210$.',
      'So $2w=244$ and $w=122$, by the definition of subtraction, since $210+34=244$.',
      'Aroha has $122-34=88$.',
      '$122$, $88$.'
    ]
  },
  {
    id: 't7-k2-p08',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how much each of Ines, Mateus, and Paulo has. Mateus has twice the dollars Ines has, and Paulo has 6 dollars more than Mateus. Ines and Mateus together have 9 dollars more than Paulo.',
    answer: '15, 30, 36',
    form: 'Answer as whole numbers separated by commas, in the order asked.',
    solution: [
      'Find how much each of Ines, Mateus, and Paulo has. Mateus has twice the dollars Ines has, and Paulo has 6 dollars more than Mateus. Ines and Mateus together have 9 dollars more than Paulo.',
      'Let $i$ be Ines\'s dollars, so Mateus has $2i$ and Paulo has $2i+6$.',
      'Ines and Mateus together have $i+2i=3i$, which is 9 more than Paulo: $3i=(2i+6)+9$.',
      '$3i=2i+15$, so $i=15$, because $3i$ exceeds $2i$ by $i$.',
      'Mateus has $2\\times{15}=30$, and Paulo has $30+6=36$.',
      '$15$, $30$, $36$.'
    ]
  },
  {
    id: 't7-k2-p10',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how many stickers Amara takes out of an album of 120 stickers. She puts back 35 and ends with 68.',
    answer: '87',
    form: 'Answer as a whole number.',
    solution: [
      'Find how many stickers Amara takes out of an album of 120 stickers. She puts back 35 and ends with 68.',
      'Let $x$ be the number of stickers Amara takes out, so after taking out $x$ and putting back 35, $(120-x)+35=68$.',
      '$(120-x)+35 = 155-x$, by the definition of subtraction and the associative and commutative laws of addition, so $155-x=68$.',
      '$x=155-68$, by the definition of subtraction.',
      '$87$.'
    ]
  },
  {
    id: 't7-k2-p11',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how many coins Diego takes out of a box of 84 coins. He puts back 19 and ends with 47.',
    answer: '56',
    form: 'Answer as a whole number.',
    solution: [
      'Find how many coins Diego takes out of a box of 84 coins. He puts back 19 and ends with 47.',
      'Let $x$ be the number of coins Diego takes out, so after taking out $x$ and putting back 19, $(84-x)+19=47$.',
      '$(84-x)+19 = 103-x$, by the definition of subtraction and the associative and commutative laws of addition, so $103-x=47$.',
      '$x=103-47$, by the definition of subtraction.',
      '$56$.'
    ]
  },
  {
    id: 't7-k2-p12',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how much each of Grace, Iris, and Hana has. Grace has 6 dollars more than Iris, 21 dollars less than Hana, and the three together have 90 dollars.',
    answer: '25, 19, 46',
    form: 'Answer as whole numbers separated by commas, in the order asked.',
    solution: [
      'Find how much each of Grace, Iris, and Hana has. Grace has 6 dollars more than Iris, 21 dollars less than Hana, and the three together have 90 dollars.',
      'Let $i$ be Iris\'s dollars, so Grace has $i+6$ and Hana has $(i+6)+21=i+27$, and the three together have $i+(i+6)+(i+27)=90$.',
      '$i+(i+6)+(i+27) = 3i+33$, by the associative and commutative laws of addition, so $3i+33=90$.',
      'So $3i=57$, which gives $i=19$.',
      'Grace has $19+6=25$ and Hana has $25+21=46$.',
      '$25$, $19$, $46$.'
    ]
  },
  {
    id: 't7-k2-p13',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find the whole number that, decreased by 58, gives 89.',
    answer: '147',
    form: 'Answer as a whole number.',
    solution: [
      'Find the whole number that, decreased by 58, gives 89.',
      'Let $x$ be the number, so $x-58=89$.',
      'The equation $x-58=89$ means $x=89+58$, by the definition of subtraction.',
      '$147$.'
    ]
  },
  {
    id: 't7-k2-p14',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how much each of Elif and Baran has. Baran has 24 dollars less than Elif, and the two together have 118 dollars.',
    answer: '71, 47',
    form: 'Answer as whole numbers separated by commas, in the order asked.',
    solution: [
      'Find how much each of Elif and Baran has. Baran has 24 dollars less than Elif, and the two together have 118 dollars.',
      'Let $e$ be Elif\'s dollars, so Baran has $e-24$. Together they have 118 dollars, so $e+(e-24)=118$.',
      '$e+(e-24) = 2e-24$, by the definition of subtraction and the associative and commutative laws of addition, so $2e-24=118$.',
      'So $2e=142$ and $e=71$, by the definition of subtraction, since $118+24=142$.',
      'Baran has $71-24=47$.',
      '$71$, $47$.'
    ]
  },
  {
    id: 't7-k2-p15',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how much each of Chen, Diego, and Fatima has. Diego has 8 dollars more than Chen, and Fatima has 8 dollars more than Diego. The three together have 129 dollars.',
    answer: '35, 43, 51',
    form: 'Answer as whole numbers separated by commas, in the order asked.',
    solution: [
      'Find how much each of Chen, Diego, and Fatima has. Diego has 8 dollars more than Chen, and Fatima has 8 dollars more than Diego. The three together have 129 dollars.',
      'Let $c$ be Chen\'s dollars, so Diego has $c+8$ and Fatima has $(c+8)+8=c+16$, and the three together have $c+(c+8)+(c+16)=129$.',
      '$c+(c+8)+(c+16) = 3c+24$, by the associative and commutative laws of addition, so $3c+24=129$.',
      'So $3c=105$, which gives $c=35$.',
      'Diego has $35+8=43$ and Fatima has $43+8=51$.',
      '$35$, $43$, $51$.'
    ]
  },
  {
    id: 't7-k2-p16',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how many pins Mia removes from a strip of 76 pins. She first adds 15, then removes some, and ends with 54.',
    answer: '37',
    form: 'Answer as a whole number.',
    solution: [
      'Find how many pins Mia removes from a strip of 76 pins. She first adds 15, then removes some, and ends with 54.',
      'Let $x$ be the number of pins Mia removes, so after adding 15 and then removing $x$, $(76+15)-x=54$.',
      '$(76+15)-x = 91-x$, so $91-x=54$.',
      '$x=91-54$, by the definition of subtraction.',
      '$37$.'
    ]
  },
  {
    id: 't7-k2-p17',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how much each of Aditi, Bilal, and Chidi has. Bilal has 3 times the dollars Aditi has, and Chidi has 7 dollars more than Bilal. Aditi and Bilal together have 5 dollars more than Chidi.',
    answer: '12, 36, 43',
    form: 'Answer as whole numbers separated by commas, in the order asked.',
    solution: [
      'Find how much each of Aditi, Bilal, and Chidi has. Bilal has 3 times the dollars Aditi has, and Chidi has 7 dollars more than Bilal. Aditi and Bilal together have 5 dollars more than Chidi.',
      'Let $a$ be Aditi\'s dollars, so Bilal has $3a$ and Chidi has $3a+7$.',
      'Aditi and Bilal together have $a+3a=4a$, which is 5 more than Chidi: $4a=(3a+7)+5$.',
      '$4a=3a+12$, so $a=12$, because $4a$ exceeds $3a$ by $a$.',
      'Bilal has $3\\times{12}=36$, and Chidi has $36+7=43$.',
      '$12$, $36$, $43$.'
    ]
  },
  {
    id: 't7-k2-p18',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how many marbles Tariq takes out of a jar of 100 marbles. He then puts back 20, takes out 8 more, and ends with 50.',
    answer: '62',
    form: 'Answer as a whole number.',
    solution: [
      'Find how many marbles Tariq takes out of a jar of 100 marbles. He then puts back 20, takes out 8 more, and ends with 50.',
      'Let $x$ be the number of marbles Tariq first takes out, so $((100-x)+20)-8=50$.',
      '$((100-x)+20)-8 = 112-x$, by the definition of subtraction and the associative and commutative laws of addition, so $112-x=50$.',
      '$x=112-50$, by the definition of subtraction.',
      '$62$.'
    ]
  },
  {
    id: 't7-k2-p19',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how much each of Hugo, Ivy, and Jun has. Ivy has twice the dollars Hugo has, and Jun has 3 dollars more than Ivy. Hugo and Ivy together have 17 dollars more than Jun.',
    answer: '20, 40, 43',
    form: 'Answer as whole numbers separated by commas, in the order asked.',
    solution: [
      'Find how much each of Hugo, Ivy, and Jun has. Ivy has twice the dollars Hugo has, and Jun has 3 dollars more than Ivy. Hugo and Ivy together have 17 dollars more than Jun.',
      'Let $h$ be Hugo\'s dollars, so Ivy has $2h$ and Jun has $2h+3$.',
      'Hugo and Ivy together have $h+2h=3h$, which is 17 more than Jun: $3h=(2h+3)+17$.',
      '$3h=2h+20$, so $h=20$, because $3h$ exceeds $2h$ by $h$.',
      'Ivy has $2\\times{20}=40$, and Jun has $40+3=43$.',
      '$20$, $40$, $43$.'
    ]
  },
  {
    id: 't7-k2-p20',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how many stickers Elena removes from a sheet of 52 stickers. She first adds 33, then removes some, and ends with 46.',
    answer: '39',
    form: 'Answer as a whole number.',
    solution: [
      'Find how many stickers Elena removes from a sheet of 52 stickers. She first adds 33, then removes some, and ends with 46.',
      'Let $x$ be the number of stickers Elena removes, so after adding 33 and then removing $x$, $(52+33)-x=46$.',
      '$(52+33)-x = 85-x$, so $85-x=46$.',
      '$x=85-46$, by the definition of subtraction.',
      '$39$.'
    ]
  },
  {
    id: 't7-k2-p21',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find how many buttons Kwame removes from a tin of 110 buttons. He first adds 25, then removes some, and ends with 72.',
    answer: '63',
    form: 'Answer as a whole number.',
    solution: [
      'Find how many buttons Kwame removes from a tin of 110 buttons. He first adds 25, then removes some, and ends with 72.',
      'Let $x$ be the number of buttons Kwame removes, so after adding 25 and then removing $x$, $(110+25)-x=72$.',
      '$(110+25)-x = 135-x$, so $135-x=72$.',
      '$x=135-72$, by the definition of subtraction.',
      '$63$.'
    ]
  },
  {
    id: 't7-k2-p22',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find the whole number that, decreased by 84, gives 67.',
    answer: '151',
    form: 'Answer as a whole number.',
    solution: [
      'Find the whole number that, decreased by 84, gives 67.',
      'Let $x$ be the number, so $x-84=67$.',
      'The equation $x-84=67$ means $x=67+84$, by the definition of subtraction.',
      '$151$.'
    ]
  },
  {
    id: 't7-k2-p23',
    topic: 'subtraction-algorithm',
    kind: 't7-k2',
    calc: 'no',
    prompt: 'Find the whole number that, decreased by 29, gives 135.',
    answer: '164',
    form: 'Answer as a whole number.',
    solution: [
      'Find the whole number that, decreased by 29, gives 135.',
      'Let $x$ be the number, so $x-29=135$.',
      'The equation $x-29=135$ means $x=135+29$, by the definition of subtraction.',
      '$164$.'
    ]
  },
  {
    id: 't7-k3-p01',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $6\\times{998}$.',
    answer: '5 988',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $6\\times{998}$.',
      '$998=1\\,000-2$.',
      '$6\\times{998} = 6\\times(1\\,000-2) = (6\\times{1\\,000})-(6\\times{2})$, by the distributive law for subtraction.',
      '$(6\\times{1\\,000})-(6\\times{2}) = 6\\,000-12$.',
      '$5\\,988$.'
    ]
  },
  {
    id: 't7-k3-p02',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $12\\times{495}$.',
    answer: '5 940',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $12\\times{495}$.',
      '$495=500-5$.',
      '$12\\times{495} = 12\\times(500-5) = (12\\times{500})-(12\\times{5})$, by the distributive law for subtraction.',
      '$(12\\times{500})-(12\\times{5}) = 6\\,000-60$.',
      '$5\\,940$.'
    ]
  },
  {
    id: 't7-k3-p03',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $4\\times{1}\\,998$.',
    answer: '7 992',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $4\\times{1}\\,998$.',
      '$1\\,998=2\\,000-2$.',
      '$4\\times{1}\\,998 = 4\\times(2\\,000-2) = (4\\times{2\\,000})-(4\\times{2})$, by the distributive law for subtraction.',
      '$(4\\times{2\\,000})-(4\\times{2}) = 8\\,000-8$.',
      '$7\\,992$.'
    ]
  },
  {
    id: 't7-k3-p04',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $58\\times{99}$.',
    answer: '5 742',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $58\\times{99}$.',
      '$99=100-1$.',
      '$58\\times{99} = 58\\times(100-1) = (58\\times{100})-(58\\times{1})$, by the distributive law for subtraction.',
      '$(58\\times{100})-(58\\times{1}) = 5\\,800-58$.',
      '$5\\,742$.'
    ]
  },
  {
    id: 't7-k3-p05',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $203\\times{197}$.',
    answer: '39 991',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $203\\times{197}$.',
      'The factors split as $203=200+3$ and $197=200-3$.',
      '$203\\times{197} = (200+3)(200-3) = (200\\times{200})-(3\\times{3})$, by the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$.',
      '$(200\\times{200})-(3\\times{3}) = 40\\,000-9$.',
      '$39\\,991$.'
    ]
  },
  {
    id: 't7-k3-p06',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $76\\times{84}$.',
    answer: '6 384',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $76\\times{84}$.',
      'The factors split as $76=80-4$ and $84=80+4$.',
      '$76\\times{84} = (80-4)(80+4) = (80\\times{80})-(4\\times{4})$, by the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$.',
      '$(80\\times{80})-(4\\times{4}) = 6\\,400-16$.',
      '$6\\,384$.'
    ]
  },
  {
    id: 't7-k3-p07',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $31\\times{29}$.',
    answer: '899',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $31\\times{29}$.',
      'The factors split as $31=30+1$ and $29=30-1$.',
      '$31\\times{29} = (30+1)(30-1) = (30\\times{30})-(1\\times{1})$, by the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$.',
      '$(30\\times{30})-(1\\times{1}) = 900-1$.',
      '$899$.'
    ]
  },
  {
    id: 't7-k3-p08',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $(17\\times{17})-(16\\times{16})$.',
    answer: '33',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $(17\\times{17})-(16\\times{16})$.',
      '$(17\\times{17})-(16\\times{16}) = (17-16)(17+16)$, by the identity $(x\\times{x})-(y\\times{y})=(x-y)(x+y)$.',
      '$(17-16)(17+16) = 1\\times{33}$.',
      '$33$.'
    ]
  },
  {
    id: 't7-k3-p09',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $(25\\times{25})-(24\\times{24})$.',
    answer: '49',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $(25\\times{25})-(24\\times{24})$.',
      '$(25\\times{25})-(24\\times{24}) = (25-24)(25+24)$, by the identity $(x\\times{x})-(y\\times{y})=(x-y)(x+y)$.',
      '$(25-24)(25+24) = 1\\times{49}$.',
      '$49$.'
    ]
  },
  {
    id: 't7-k3-p10',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Find the greatest possible area of a rectangle with whole-number length and width adding to 24. Use the identity $(x-y)(x+y)=(x\\times{x})-(y\\times{y})$.',
    answer: '144',
    form: 'Answer as a whole number.',
    solution: [
      'Find the greatest possible area of a rectangle with whole-number length and width adding to 24. Use the identity $(x-y)(x+y)=(x\\times{x})-(y\\times{y})$.',
      'Write the length as $12+t$ and the width as $12-t$ for a whole number $t$ from 0 to 11. So the two sides always add to 24.',
      'The area is $(12+t)(12-t) = (12\\times{12})-(t\\times{t})$, by the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$.',
      'The area $(12\\times{12})-(t\\times{t})$ is greatest when $t=0$, a 12-by-12 square.',
      '$144$.'
    ]
  },
  {
    id: 't7-k3-p11',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Find the least possible area of a rectangle with whole-number length and width adding to 24. Neither side is 0. Use the identity $(x-y)(x+y)=(x\\times{x})-(y\\times{y})$.',
    answer: '23',
    form: 'Answer as a whole number.',
    solution: [
      'Find the least possible area of a rectangle with whole-number length and width adding to 24. Neither side is 0. Use the identity $(x-y)(x+y)=(x\\times{x})-(y\\times{y})$.',
      'Write the length as $12+t$ and the width as $12-t$ for a whole number $t$ from 0 to 11. So the two sides always add to 24 and the width stays positive.',
      'The area is $(12+t)(12-t) = (12\\times{12})-(t\\times{t})$, by the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$.',
      'The area $(12\\times{12})-(t\\times{t})$ is least when $t=11$, since that is the greatest value that keeps the width positive: $144-(11\\times{11})$.',
      '$23$.'
    ]
  },
  {
    id: 't7-k3-p13',
    topic: 'subtraction-algorithm',
    kind: 't7-k3',
    calc: 'no',
    prompt: 'Compute $47\\times{53}$.',
    answer: '2 491',
    form: 'Answer as a whole number.',
    solution: [
      'Compute $47\\times{53}$.',
      'The factors split as $47=50-3$ and $53=50+3$.',
      '$47\\times{53} = (50-3)(50+3) = (50\\times{50})-(3\\times{3})$, by the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$.',
      '$(50\\times{50})-(3\\times{3}) = 2\\,500-9$.',
      '$2\\,491$.'
    ]
  }
]
