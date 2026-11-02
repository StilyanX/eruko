// Order and addition: comparing whole numbers, the order-and-addition equivalence, one proof
// Wu gives of that equivalence, and the statements to prove.
export default {
  number: 3,
  manyParts: false,
  bare: {
    prompt: 'Find the greater of $4\\,873$ and $12\\,001$.',
    answer: '12 001',
    form: 'Answer as a whole number.',
    solution: [
      'Find the greater of $4\\,873$ and $12\\,001$.',
      'The number $4\\,873$ has four digits, and $12\\,001$ has five digits.',
      '$12\\,001$.'
    ]
  },
  ideas: [
    {
      name: 'Comparing whole numbers',
      concrete: 'The number $1\\,058$ is greater than $874$, because $1\\,058$ has four digits and $874$ has three.',
      general:
        'For whole numbers $a$ and $b$: if $b$ has more digits than $a$, then $a<b$. If $a$ and $b$ have the same number of digits, compare them digit by digit from the left. At the first place where the digits differ, the number with the greater digit is the greater number.',
      definitions: [
        'The **trichotomy law**: for whole numbers $a$ and $b$, exactly one of $a=b$, $a<b$, $b<a$ holds.',
        'The **transitivity** of $<$: for whole numbers $a$, $b$, and $c$, if $a<b$ and $b<c$, then $a<c$.'
      ]
    },
    {
      name: 'Order and addition',
      concrete: 'The inequality $7<12$ holds, because $12=7+5$ for the positive whole number $5$.',
      general: 'For whole numbers $a$ and $b$: $a<b$ exactly when $b=a+c$ for some positive whole number $c$.'
    },
    {
      name: 'Adding the same number keeps the order',
      concrete: 'The inequality $47<53$ gives $47+128<53+128$.',
      general:
        'For whole numbers $a$, $b$, and $c$: $b<c$ is equivalent to $a+b<a+c$. If $b<c$, then $c=b+e$ for some positive whole number $e$, by the order-and-addition equivalence. So $a+c=a+(b+e)=(a+b)+e$, by the associative law of addition. Then $a+b<a+c$, by the order-and-addition equivalence. Conversely, if $a+b<a+c$, then $a+c=(a+b)+f$ for some positive whole number $f$, by the order-and-addition equivalence. The associative law of addition gives $(a+b)+f=a+(b+f)$, so $a+c=a+(b+f)$. Counting from $a$ reaches each whole number exactly once, so the same endpoint means the same count: $c=b+f$. Then $b<c$, by the order-and-addition equivalence.'
    }
  ],
  kinds: [
    {
      id: 't3-k1',
      forms: [
        {
          example: {
            problem: 'Find the greater of $8\\times(10^{32})$ and $2\\times(10^{33})$.',
            lines: [
              {
                step: 'The product $8\\times10^{32}$ equals the digit $8$ followed by $32$ zeros, a numeral of $33$ digits.',
                reason: 'the pattern of attaching zeros when multiplying by a power of 10'
              },
              {
                step: 'The product $2\\times10^{33}$ equals the digit $2$ followed by $33$ zeros, a numeral of $34$ digits.',
                reason: 'the same pattern, with one more zero attached'
              },
              {
                step: 'The number $8\\times10^{32}$ has fewer digits than $2\\times10^{33}$.',
                reason: 'the count $33$ is less than $34$'
              },
              { step: '$2\\times10^{33}$.', reason: 'the number with more digits is the greater one' }
            ]
          },
          fade: [
            {
              prompt: 'Find the greater of $4\\times(10^5)$ and $3\\times(10^6)$.',
              answer: '3 000 000',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The product $4\\times10^5$ equals the digit $4$ followed by $5$ zeros, a numeral of $6$ digits.', reason: 'the pattern of attaching zeros when multiplying by a power of 10' },
                { step: 'The product $3\\times10^6$ equals the digit $3$ followed by $6$ zeros, a numeral of $7$ digits.', reason: 'the same pattern, with one more zero attached' },
                { step: 'The number $4\\times10^5$ has fewer digits than $3\\times10^6$.', reason: 'the count $6$ is less than $7$' },
                { step: '$3\\,000\\,000$.', reason: 'the number with more digits is the greater one' }
              ]
            },
            {
              prompt: 'Find the greater of $9\\times(10^7)$ and $2\\times(10^8)$.',
              answer: '200 000 000',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The product $9\\times10^7$ equals the digit $9$ followed by $7$ zeros, a numeral of $8$ digits.', reason: 'the pattern of attaching zeros when multiplying by a power of 10' },
                { step: 'The product $2\\times10^8$ equals the digit $2$ followed by $8$ zeros, a numeral of $9$ digits.', reason: 'the same pattern, with one more zero attached' },
                { step: 'The number $9\\times10^7$ has fewer digits than $2\\times10^8$.', reason: 'the count $8$ is less than $9$' },
                { step: '$200\\,000\\,000$.', reason: 'the number with more digits is the greater one' }
              ]
            },
            {
              prompt: 'Find the greater of $6\\times(10^3)$ and $5\\times(10^4)$.',
              answer: '50 000',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The product $6\\times10^3$ equals the digit $6$ followed by $3$ zeros, a numeral of $4$ digits.', reason: 'the pattern of attaching zeros when multiplying by a power of 10' },
                { step: 'The product $5\\times10^4$ equals the digit $5$ followed by $4$ zeros, a numeral of $5$ digits.', reason: 'the same pattern, with one more zero attached' },
                { step: 'The number $6\\times10^3$ has fewer digits than $5\\times10^4$.', reason: 'the count $4$ is less than $5$' },
                { step: '$50\\,000$.', reason: 'the number with more digits is the greater one' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Find the greater of $7\\,541$ and $7\\,622$.',
            lines: [
              { step: 'The numbers $7\\,541$ and $7\\,622$ both have four digits.', reason: 'the digit-count rule does not decide between numbers with the same number of digits' },
              {
                step: 'Reading from the left, the two numbers agree in the thousands place, both $7$. They first differ in the hundreds place, where $5$ is less than $6$.',
                reason: 'comparing digit by digit from the left'
              },
              { step: 'The number $7\\,541$ has the lesser digit at the first differing place.', reason: 'the digit $5$ is less than $6$' },
              { step: '$7\\,622$.', reason: 'the number with the greater digit at the first differing place is the greater one' }
            ]
          },
          fade: [
            {
              prompt: 'Find the greater of $46\\,382$ and $49\\,105$.',
              answer: '49 105',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The numbers $46\\,382$ and $49\\,105$ both have five digits.', reason: 'the digit-count rule does not decide between numbers with the same number of digits' },
                { step: 'Reading from the left, the two numbers agree in the ten-thousands place, both $4$. They first differ in the thousands place, where $6$ is less than $9$.', reason: 'comparing digit by digit from the left' },
                { step: 'The number $46\\,382$ has the lesser digit at the first differing place.', reason: 'the digit $6$ is less than $9$' },
                { step: '$49\\,105$.', reason: 'the number with the greater digit at the first differing place is the greater one' }
              ]
            },
            {
              prompt: 'Find the greater of $3\\,815\\,207$ and $3\\,790\\,664$.',
              answer: '3 815 207',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The numbers $3\\,815\\,207$ and $3\\,790\\,664$ both have seven digits.', reason: 'the digit-count rule does not decide between numbers with the same number of digits' },
                { step: 'Reading from the left, the two numbers agree in the millions place, both $3$. They first differ in the hundred-thousands place, where $7$ is less than $8$.', reason: 'comparing digit by digit from the left' },
                { step: 'The number $3\\,790\\,664$ has the lesser digit at the first differing place.', reason: 'the digit $7$ is less than $8$' },
                { step: '$3\\,815\\,207$.', reason: 'the number with the greater digit at the first differing place is the greater one' }
              ]
            },
            {
              prompt: 'Find the greater of $512\\,734$ and $508\\,916$.',
              answer: '512 734',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The numbers $512\\,734$ and $508\\,916$ both have six digits.', reason: 'the digit-count rule does not decide between numbers with the same number of digits' },
                { step: 'Reading from the left, the two numbers agree in the hundred-thousands place, both $5$. They first differ in the ten-thousands place, where $0$ is less than $1$.', reason: 'comparing digit by digit from the left' },
                { step: 'The number $508\\,916$ has the lesser digit at the first differing place.', reason: 'the digit $0$ is less than $1$' },
                { step: '$512\\,734$.', reason: 'the number with the greater digit at the first differing place is the greater one' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't3-k2',
      forms: [
        {
          example: {
            problem: 'Find the greater of $872$ and $1\\,304$. Compare each number with a round number between them.',
            lines: [
              { step: '$872<999$.', reason: 'the number $872$ is a three-digit number, and $999$ is the greatest three-digit number' },
              { step: '$999<1\\,000$.', reason: 'counting one more step from $999$ reaches $1\\,000$' },
              { step: '$1\\,000<1\\,304$.', reason: 'the number $1\\,304$ is $304$ more steps beyond $1\\,000$' },
              { step: '$872<1\\,304$.', reason: 'chaining the three inequalities above by the transitivity of $<$' },
              { step: '$1\\,304$.', reason: 'the greater of the two numbers, by the chain above' }
            ]
          },
          fade: [
            {
              prompt: 'Find the greater of $100\\,002$ and $99\\,817$. Compare each number with a round number between them.',
              answer: '100 002',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$99\\,817<99\\,999$.', reason: 'the number $99\\,817$ is a five-digit number, and $99\\,999$ is the greatest five-digit number' },
                { step: '$99\\,999<100\\,000$.', reason: 'counting one more step from $99\\,999$ reaches $100\\,000$' },
                { step: '$100\\,000<100\\,002$.', reason: 'the number $100\\,002$ is $2$ more steps beyond $100\\,000$' },
                { step: '$99\\,817<100\\,002$.', reason: 'chaining the three inequalities above by the transitivity of $<$' },
                { step: '$100\\,002$.', reason: 'the greater of the two numbers, by the chain above' }
              ]
            },
            {
              prompt: 'Find the greater of $6\\,742$ and $10\\,385$. Compare each number with a round number between them.',
              answer: '10 385',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$6\\,742<9\\,999$.', reason: 'the number $6\\,742$ is a four-digit number, and $9\\,999$ is the greatest four-digit number' },
                { step: '$9\\,999<10\\,000$.', reason: 'counting one more step from $9\\,999$ reaches $10\\,000$' },
                { step: '$10\\,000<10\\,385$.', reason: 'the number $10\\,385$ is $385$ more steps beyond $10\\,000$' },
                { step: '$6\\,742<10\\,385$.', reason: 'chaining the three inequalities above by the transitivity of $<$' },
                { step: '$10\\,385$.', reason: 'the greater of the two numbers, by the chain above' }
              ]
            },
            {
              prompt: 'Find the greater of $1\\,000\\,460$ and $957\\,312$. Compare each number with a round number between them.',
              answer: '1 000 460',
              form: 'Answer as a whole number.',
              lines: [
                { step: '$957\\,312<999\\,999$.', reason: 'the number $957\\,312$ is a six-digit number, and $999\\,999$ is the greatest six-digit number' },
                { step: '$999\\,999<1\\,000\\,000$.', reason: 'counting one more step from $999\\,999$ reaches $1\\,000\\,000$' },
                { step: '$1\\,000\\,000<1\\,000\\,460$.', reason: 'the number $1\\,000\\,460$ is $460$ more steps beyond $1\\,000\\,000$' },
                { step: '$957\\,312<1\\,000\\,460$.', reason: 'chaining the three inequalities above by the transitivity of $<$' },
                { step: '$1\\,000\\,460$.', reason: 'the greater of the two numbers, by the chain above' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't3-k3',
      forms: [
        {
          example: {
            problem: 'Decide whether $58+217$ is less than $63+217$.',
            lines: [
              { step: '$63=58+5$.', reason: 'the order-and-addition equivalence, since counting five steps from $58$ reaches $63$' },
              { step: '$63+217=(58+5)+217=58+(5+217)$.', reason: 'substituting $63=58+5$ and the associative law of addition' },
              { step: '$58+217<63+217$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $63+217=(58+217)+5$, with the added number positive' },
              { step: 'Yes.', reason: 'the inequality $58+217<63+217$ holds' }
            ]
          },
          fade: [
            {
              prompt: 'Decide whether $47+128$ is less than $53+128$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$53=47+6$.', reason: 'the order-and-addition equivalence, since counting six steps from $47$ reaches $53$' },
                { step: '$53+128=(47+6)+128=47+(6+128)$.', reason: 'substituting $53=47+6$ and the associative law of addition' },
                { step: '$47+128<53+128$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $53+128=(47+128)+6$, with the added number positive' },
                { step: 'Yes.', reason: 'the inequality $47+128<53+128$ holds' }
              ]
            },
            {
              prompt: 'Decide whether $126+45$ is less than $134+45$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$134=126+8$.', reason: 'the order-and-addition equivalence, since counting eight steps from $126$ reaches $134$' },
                { step: '$134+45=(126+8)+45=126+(8+45)$.', reason: 'substituting $134=126+8$ and the associative law of addition' },
                { step: '$126+45<134+45$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $134+45=(126+45)+8$, with the added number positive' },
                { step: 'Yes.', reason: 'the inequality $126+45<134+45$ holds' }
              ]
            },
            {
              prompt: 'Decide whether $339+912$ is less than $355+912$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$355=339+16$.', reason: 'the order-and-addition equivalence, since counting sixteen steps from $339$ reaches $355$' },
                { step: '$355+912=(339+16)+912=339+(16+912)$.', reason: 'substituting $355=339+16$ and the associative law of addition' },
                { step: '$339+912<355+912$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $355+912=(339+912)+16$, with the added number positive' },
                { step: 'Yes.', reason: 'the inequality $339+912<355+912$ holds' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Decide whether $432+76$ is less than $425+76$.',
            lines: [
              { step: '$432=425+7$.', reason: 'the order-and-addition equivalence, since counting seven steps from $425$ reaches $432$' },
              { step: '$432+76=(425+7)+76=425+(7+76)$.', reason: 'substituting $432=425+7$ and the associative law of addition' },
              { step: '$425+76<432+76$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $432+76=(425+76)+7$, with the added number positive' },
              { step: 'No.', reason: 'the trichotomy law, since $425+76<432+76$ holds, so $432+76<425+76$ does not' }
            ]
          },
          fade: [
            {
              prompt: 'Decide whether $615+38$ is less than $606+38$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$615=606+9$.', reason: 'the order-and-addition equivalence, since counting nine steps from $606$ reaches $615$' },
                { step: '$615+38=(606+9)+38=606+(9+38)$.', reason: 'substituting $615=606+9$ and the associative law of addition' },
                { step: '$606+38<615+38$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $615+38=(606+38)+9$, with the added number positive' },
                { step: 'No.', reason: 'the trichotomy law, since $606+38<615+38$ holds, so $615+38<606+38$ does not' }
              ]
            },
            {
              prompt: 'Decide whether $88+517$ is less than $81+517$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$88=81+7$.', reason: 'the order-and-addition equivalence, since counting seven steps from $81$ reaches $88$' },
                { step: '$88+517=(81+7)+517=81+(7+517)$.', reason: 'substituting $88=81+7$ and the associative law of addition' },
                { step: '$81+517<88+517$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $88+517=(81+517)+7$, with the added number positive' },
                { step: 'No.', reason: 'the trichotomy law, since $81+517<88+517$ holds, so $88+517<81+517$ does not' }
              ]
            },
            {
              prompt: 'Decide whether $351+94$ is less than $340+94$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$351=340+11$.', reason: 'the order-and-addition equivalence, since counting eleven steps from $340$ reaches $351$' },
                { step: '$351+94=(340+11)+94=340+(11+94)$.', reason: 'substituting $351=340+11$ and the associative law of addition' },
                { step: '$340+94<351+94$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $351+94=(340+94)+11$, with the added number positive' },
                { step: 'No.', reason: 'the trichotomy law, since $340+94<351+94$ holds, so $351+94<340+94$ does not' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Decide whether $73+415$ is less than $79+415$, given that $73<79$.',
            lines: [
              { step: '$79=73+6$.', reason: 'the order-and-addition equivalence, applied to $73<79$, since counting six steps from $73$ reaches $79$' },
              { step: '$79+415=(73+6)+415=73+(6+415)$.', reason: 'substituting $79=73+6$ and the associative law of addition' },
              { step: '$73+415<79+415$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $79+415=(73+415)+6$, with the added number positive' },
              { step: 'Yes.', reason: 'the inequality $73+415<79+415$ holds' }
            ]
          },
          fade: [
            {
              prompt: 'Decide whether $138+52$ is less than $147+52$, given that $138<147$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$147=138+9$.', reason: 'the order-and-addition equivalence, applied to $138<147$, since counting nine steps from $138$ reaches $147$' },
                { step: '$147+52=(138+9)+52=138+(9+52)$.', reason: 'substituting $147=138+9$ and the associative law of addition' },
                { step: '$138+52<147+52$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $147+52=(138+52)+9$, with the added number positive' },
                { step: 'Yes.', reason: 'the inequality $138+52<147+52$ holds' }
              ]
            },
            {
              prompt: 'Decide whether $29+806$ is less than $33+806$, given that $29<33$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$33=29+4$.', reason: 'the order-and-addition equivalence, applied to $29<33$, since counting four steps from $29$ reaches $33$' },
                { step: '$33+806=(29+4)+806=29+(4+806)$.', reason: 'substituting $33=29+4$ and the associative law of addition' },
                { step: '$29+806<33+806$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $33+806=(29+806)+4$, with the added number positive' },
                { step: 'Yes.', reason: 'the inequality $29+806<33+806$ holds' }
              ]
            },
            {
              prompt: 'Decide whether $402+67$ is less than $415+67$, given that $402<415$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: '$415=402+13$.', reason: 'the order-and-addition equivalence, applied to $402<415$, since counting thirteen steps from $402$ reaches $415$' },
                { step: '$415+67=(402+13)+67=402+(13+67)$.', reason: 'substituting $415=402+13$ and the associative law of addition' },
                { step: '$402+67<415+67$.', reason: 'the order-and-addition equivalence, since the commutative and associative laws of addition give $415+67=(402+67)+13$, with the added number positive' },
                { step: 'Yes.', reason: 'the inequality $402+67<415+67$ holds' }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: 't3-p1',
      statement: 'For whole numbers $a$ and $b$: $a<b$ is equivalent to $b=a+c$ for some positive whole number $c$.',
      method: 'direct proof',
      idea: 'Count the extra steps from $a$ to $b$ to get the positive number $c$ with $b=a+c$. Conversely, those extra steps show $a$ comes before $b$.',
      lines: [
        { line: 'Suppose that $a<b$.', reason: 'the first direction to prove' },
        { line: 'Then, in the counting of the whole numbers, $a$ comes before $b$.', reason: 'the definition of $a<b$' },
        { line: 'Counting on from $a$ reaches $b$ after some positive number of steps. Call that number $c$.', reason: 'the number $a$ comes before $b$, so further counting from $a$ reaches $b$' },
        { line: '$b=a+c$.', reason: 'the definition of addition as counting on, applied with $c$ steps from $a$' },
        { line: 'Conversely, suppose that $b=a+c$ for a positive whole number $c$.', reason: 'the second direction to prove' },
        { line: 'Counting $c$ steps from $a$ reaches $b$.', reason: 'the definition of addition as counting on' },
        { line: 'Since $c$ is positive, $a$ comes before $b$ in the counting of the whole numbers.', reason: 'reaching $b$ from $a$ takes at least one further counting step' },
        { line: '$a<b$.', reason: 'the definition of $a<b$' },
        { line: 'Therefore $a<b$ is equivalent to $b=a+c$ for some positive whole number $c$.', reason: 'both directions hold' }
      ]
    }
  ],
  prove: [
    {
      id: 't3-s1',
      statement:
        'Let $k$ be a nonzero whole number and let $a$ and $b$ be whole numbers. If $a<10^k$ and $b=10^k+m$ for some whole number $m$, then $a<b$.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'Suppose that $a<10^k$ and $b=10^k+m$ for some whole number $m$.', reason: 'the hypothesis' },
          { line: 'Then $10^k=a+c$ for some positive whole number $c$.', reason: 'the order-and-addition equivalence, applied to $a<10^k$' },
          { line: '$b=(a+c)+m$.', reason: 'substituting $10^k=a+c$ into $b=10^k+m$' },
          { line: '$(a+c)+m=a+(c+m)$.', reason: 'the associative law of addition' },
          { line: '$b=a+(c+m)$.', reason: 'combining the two previous equalities' },
          { line: 'The sum $c+m$ is positive.', reason: 'counting $m$ more steps from the positive number $c$ never returns to $0$, since counting always moves forward' },
          { line: '$a<b$.', reason: 'the order-and-addition equivalence, since $b$ equals $a$ plus the positive number $c+m$' }
        ]
      }
    },
    {
      id: 't3-s2',
      statement: 'For whole numbers $a$, $b$, $c$, and $d$: if $a<b$ and $c<d$, then $a+c<b+d$.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'Suppose that $a<b$ and $c<d$.', reason: 'the hypothesis' },
          { line: 'Then $b=a+e$ and $d=c+f$ for positive whole numbers $e$ and $f$.', reason: 'the order-and-addition equivalence, applied to $a<b$ and to $c<d$' },
          { line: '$b+d=(a+e)+(c+f)$.', reason: 'substituting $b=a+e$ and $d=c+f$' },
          { line: '$(a+e)+(c+f)=(a+c)+(e+f)$.', reason: 'the associative and commutative laws of addition, regrouping the four terms' },
          { line: '$b+d=(a+c)+(e+f)$.', reason: 'combining the two previous equalities' },
          { line: 'The sum $e+f$ is positive.', reason: 'counting $f$ more steps from the positive number $e$ never returns to $0$, since counting always moves forward' },
          { line: '$a+c<b+d$.', reason: 'the order-and-addition equivalence, since $b+d$ equals $a+c$ plus the positive number $e+f$' }
        ]
      }
    },
    {
      id: 't3-s3',
      statement: 'For whole numbers $a$ and $b$: $a<b$ or $a=b$ holds exactly when $b=a+\\ell$ for some whole number $\\ell$.',
      method: 'proof by cases',
      check: {
        proof: [
          { line: 'Suppose that $a<b$ or $a=b$.', reason: 'the first direction to prove' },
          { line: 'Case $a<b$: then $b=a+c$ for a positive whole number $c$, so $\\ell=c$ satisfies $b=a+\\ell$.', reason: 'the order-and-addition equivalence, applied to $a<b$' },
          { line: 'Case $a=b$: then $b=a+0$, so $\\ell=0$ satisfies $b=a+\\ell$.', reason: 'adding $0$ to a number counts no further steps, leaving it unchanged' },
          { line: 'Either case gives $b=a+\\ell$ for some whole number $\\ell$.', reason: 'the two cases are exhaustive, since the supposition is $a<b$ or $a=b$' },
          { line: 'Conversely, suppose that $b=a+\\ell$ for some whole number $\\ell$.', reason: 'the second direction to prove' },
          { line: 'Case $\\ell=0$: then $b=a$.', reason: 'adding $0$ to a number leaves it unchanged' },
          { line: 'Case $\\ell$ positive: then $a<b$.', reason: 'the order-and-addition equivalence, since $b$ equals $a$ plus a positive number' },
          { line: 'Either case gives $a<b$ or $a=b$.', reason: 'the two cases are exhaustive, since every whole number $\\ell$ is $0$ or positive' },
          { line: 'Therefore $a<b$ or $a=b$ holds exactly when $b=a+\\ell$ for some whole number $\\ell$.', reason: 'both directions hold' }
        ]
      }
    },
    {
      id: 't3-s4',
      statement: 'For whole numbers $x$ and $y$: if $x+y$ equals $x$, then $y$ equals $0$.',
      method: 'proof by contradiction',
      check: {
        proof: [
          { line: 'Suppose that $x+y$ equals $x$.', reason: 'the hypothesis' },
          { line: 'Suppose, for contradiction, that $y$ is not $0$.', reason: 'assumed, to reach a contradiction' },
          { line: 'Then $y$ is positive.', reason: 'the trichotomy law, since $y$ is a whole number that is not $0$' },
          { line: '$x<x+y$.', reason: 'the order-and-addition equivalence, since $x+y$ equals $x$ plus the positive number $y$' },
          { line: '$x<x$.', reason: 'substituting $x+y=x$ into the previous inequality' },
          { line: 'This is impossible.', reason: 'the trichotomy law allows only one of $x=x$, $x<x$, $x>x$ to hold, and $x=x$ always holds' },
          { line: 'Therefore $y$ equals $0$.', reason: 'the assumption that $y$ is not $0$ led to a contradiction' }
        ]
      }
    },
    {
      id: 't3-s5',
      statement: 'For whole numbers $a$, $b$, and $c$: if $a<b$ and $b<c$, then $a<c$.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'Suppose that $a<b$ and $b<c$.', reason: 'the hypothesis' },
          { line: 'Then $b=a+e$ and $c=b+f$ for positive whole numbers $e$ and $f$.', reason: 'the order-and-addition equivalence, applied to $a<b$ and to $b<c$' },
          { line: '$c=(a+e)+f$.', reason: 'substituting $b=a+e$ into $c=b+f$' },
          { line: '$(a+e)+f=a+(e+f)$.', reason: 'the associative law of addition' },
          { line: '$c=a+(e+f)$.', reason: 'combining the two previous equalities' },
          { line: 'The sum $e+f$ is positive.', reason: 'counting $f$ more steps from the positive number $e$ never returns to $0$, since counting always moves forward' },
          { line: '$a<c$.', reason: 'the order-and-addition equivalence, since $c$ equals $a$ plus the positive number $e+f$' }
        ]
      }
    }
  ]
}
