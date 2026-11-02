export default {
  number: 4,
  manyParts: false,
  bare: {
    prompt: 'Decide whether $34\\times{52}$ is greater than $37\\times{55}$.',
    answer: 'No',
    form: 'Answer as Yes or No.',
    solution: [
      'Decide whether $34\\times{52}$ is greater than $37\\times{55}$.',
      'The numbers $34$ and $37$ agree in the first digit. They first differ at the ones place, where $4$ is less than $7$, so $34 < 37$.',
      'The numbers $52$ and $55$ agree in the first digit. They first differ at the ones place, where $2$ is less than $5$, so $52 < 55$.',
      '$34\\times{52} < 37\\times{55}$.',
      'No.'
    ]
  },
  ideas: [
    {
      name: 'Order and multiplication',
      concrete: 'The inequalities $7<9$ and $11>0$ give $11\\times{7}<11\\times{9}$.',
      general: 'For whole numbers $a,b,c,d$: if $a>0$, then $b<c$ is equivalent to $ab<ac$. If $a<b$ and $c<d$, then $ac<bd$.'
    }
  ],
  kinds: [
    {
      id: 't4-k1',
      forms: [
        {
          example: {
            problem: 'Decide whether $86\\,427\\,895\\times{172\\,945\\,678}$ is greater than $86\\,427\\,963\\times{173\\,000\\,001}$.',
            lines: [
              { step: 'The numbers $86\\,427\\,895$ and $86\\,427\\,963$ agree in the first five digits. They first differ at the hundreds place, where $8$ is less than $9$, so $86\\,427\\,895 < 86\\,427\\,963$.', reason: 'comparing digit by digit from the left' },
              { step: 'The numbers $172\\,945\\,678$ and $173\\,000\\,001$ agree in the first two digits. They first differ at the millions place, where $2$ is less than $3$, so $172\\,945\\,678 < 173\\,000\\,001$.', reason: 'comparing digit by digit from the left' },
              { step: '$86\\,427\\,895\\times{172\\,945\\,678} < 86\\,427\\,963\\times{173\\,000\\,001}$.', reason: 'the order law that $a<b$ and $c<d$ together imply $ac<bd$' },
              { step: 'No.', reason: 'the first product is less than the second, so it is not greater' }
            ]
          },
          fade: [
            {
              prompt: 'Decide whether $4\\,531\\times{712}$ is greater than $4\\,538\\times{725}$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $4\\,531$ and $4\\,538$ agree in the first three digits. They first differ at the ones place, where $1$ is less than $8$, so $4\\,531 < 4\\,538$.', reason: 'comparing digit by digit from the left' },
                { step: 'The numbers $712$ and $725$ agree in the first digit. They first differ at the tens place, where $1$ is less than $2$, so $712 < 725$.', reason: 'comparing digit by digit from the left' },
                { step: '$4\\,531\\times{712} < 4\\,538\\times{725}$.', reason: 'the order law that $a<b$ and $c<d$ together imply $ac<bd$' },
                { step: 'No.', reason: 'the first product is less than the second, so it is not greater' }
              ]
            },
            {
              prompt: 'Decide whether $3\\,746\\times{518}$ is greater than $3\\,762\\times{534}$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $3\\,746$ and $3\\,762$ agree in the first two digits. They first differ at the tens place, where $4$ is less than $6$, so $3\\,746 < 3\\,762$.', reason: 'comparing digit by digit from the left' },
                { step: 'The numbers $518$ and $534$ agree in the first digit. They first differ at the tens place, where $1$ is less than $3$, so $518 < 534$.', reason: 'comparing digit by digit from the left' },
                { step: '$3\\,746\\times{518} < 3\\,762\\times{534}$.', reason: 'the order law that $a<b$ and $c<d$ together imply $ac<bd$' },
                { step: 'No.', reason: 'the first product is less than the second, so it is not greater' }
              ]
            },
            {
              prompt: 'Decide whether $615\\times{2\\,341}$ is greater than $628\\times{2\\,358}$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $615$ and $628$ agree in the first digit. They first differ at the tens place, where $1$ is less than $2$, so $615 < 628$.', reason: 'comparing digit by digit from the left' },
                { step: 'The numbers $2\\,341$ and $2\\,358$ agree in the first two digits. They first differ at the tens place, where $4$ is less than $5$, so $2\\,341 < 2\\,358$.', reason: 'comparing digit by digit from the left' },
                { step: '$615\\times{2\\,341} < 628\\times{2\\,358}$.', reason: 'the order law that $a<b$ and $c<d$ together imply $ac<bd$' },
                { step: 'No.', reason: 'the first product is less than the second, so it is not greater' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Decide whether $7\\,284\\times{653}$ is greater than $7\\,251\\times{638}$.',
            lines: [
              { step: 'The numbers $7\\,251$ and $7\\,284$ agree in the first two digits. They first differ at the tens place, where $5$ is less than $8$, so $7\\,251 < 7\\,284$.', reason: 'comparing digit by digit from the left' },
              { step: 'The numbers $638$ and $653$ agree in the first digit. They first differ at the tens place, where $3$ is less than $5$, so $638 < 653$.', reason: 'comparing digit by digit from the left' },
              { step: '$7\\,251\\times{638} < 7\\,284\\times{653}$.', reason: 'the order law that $a<b$ and $c<d$ together imply $ac<bd$' },
              { step: 'Yes.', reason: 'the first product is greater than the second' }
            ]
          },
          fade: [
            {
              prompt: 'Decide whether $5\\,947\\times{386}$ is greater than $5\\,912\\times{374}$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $5\\,912$ and $5\\,947$ agree in the first two digits. They first differ at the tens place, where $1$ is less than $4$, so $5\\,912 < 5\\,947$.', reason: 'comparing digit by digit from the left' },
                { step: 'The numbers $374$ and $386$ agree in the first digit. They first differ at the tens place, where $7$ is less than $8$, so $374 < 386$.', reason: 'comparing digit by digit from the left' },
                { step: '$5\\,912\\times{374} < 5\\,947\\times{386}$.', reason: 'the order law that $a<b$ and $c<d$ together imply $ac<bd$' },
                { step: 'Yes.', reason: 'the first product is greater than the second' }
              ]
            },
            {
              prompt: 'Decide whether $863\\times{2\\,175}$ is greater than $847\\times{2\\,139}$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $847$ and $863$ agree in the first digit. They first differ at the tens place, where $4$ is less than $6$, so $847 < 863$.', reason: 'comparing digit by digit from the left' },
                { step: 'The numbers $2\\,139$ and $2\\,175$ agree in the first two digits. They first differ at the tens place, where $3$ is less than $7$, so $2\\,139 < 2\\,175$.', reason: 'comparing digit by digit from the left' },
                { step: '$847\\times{2\\,139} < 863\\times{2\\,175}$.', reason: 'the order law that $a<b$ and $c<d$ together imply $ac<bd$' },
                { step: 'Yes.', reason: 'the first product is greater than the second' }
              ]
            },
            {
              prompt: 'Decide whether $48\\,736\\times{419}$ is greater than $48\\,692\\times{405}$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $48\\,692$ and $48\\,736$ agree in the first two digits. They first differ at the hundreds place, where $6$ is less than $7$, so $48\\,692 < 48\\,736$.', reason: 'comparing digit by digit from the left' },
                { step: 'The numbers $405$ and $419$ agree in the first digit. They first differ at the tens place, where $0$ is less than $1$, so $405 < 419$.', reason: 'comparing digit by digit from the left' },
                { step: '$48\\,692\\times{405} < 48\\,736\\times{419}$.', reason: 'the order law that $a<b$ and $c<d$ together imply $ac<bd$' },
                { step: 'Yes.', reason: 'the first product is greater than the second' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't4-k2',
      forms: [
        {
          example: {
            problem: 'Decide whether $13\\times{91}$ is greater than $13\\times{93}$.',
            lines: [
              { step: 'The numbers $91$ and $93$ agree in the first digit. They first differ at the ones place, where $1$ is less than $3$, so $91 < 93$.', reason: 'comparing digit by digit from the left' },
              { step: '$13\\times{91} < 13\\times{93}$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=13$' },
              { step: 'No.', reason: 'the first product is less than the second, so it is not greater' }
            ]
          },
          fade: [
            {
              prompt: 'Decide whether $41\\times{857}$ is greater than $41\\times{863}$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $857$ and $863$ agree in the first digit. They first differ at the tens place, where $5$ is less than $6$, so $857 < 863$.', reason: 'comparing digit by digit from the left' },
                { step: '$41\\times{857} < 41\\times{863}$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=41$' },
                { step: 'No.', reason: 'the first product is less than the second, so it is not greater' }
              ]
            },
            {
              prompt: 'Decide whether $654\\times{3\\,281}$ is greater than $654\\times{3\\,294}$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $3\\,281$ and $3\\,294$ agree in the first two digits. They first differ at the tens place, where $8$ is less than $9$, so $3\\,281 < 3\\,294$.', reason: 'comparing digit by digit from the left' },
                { step: '$654\\times{3\\,281} < 654\\times{3\\,294}$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=654$' },
                { step: 'No.', reason: 'the first product is less than the second, so it is not greater' }
              ]
            },
            {
              prompt: 'Decide whether $189\\times{72}$ is greater than $189\\times{76}$.',
              answer: 'No',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $72$ and $76$ agree in the first digit. They first differ at the ones place, where $2$ is less than $6$, so $72 < 76$.', reason: 'comparing digit by digit from the left' },
                { step: '$189\\times{72} < 189\\times{76}$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=189$' },
                { step: 'No.', reason: 'the first product is less than the second, so it is not greater' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Decide whether $24\\times{675}$ is greater than $24\\times{648}$.',
            lines: [
              { step: 'The numbers $648$ and $675$ agree in the first digit. They first differ at the tens place, where $4$ is less than $7$, so $648 < 675$.', reason: 'comparing digit by digit from the left' },
              { step: '$24\\times{648} < 24\\times{675}$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=24$' },
              { step: 'Yes.', reason: 'the first product is greater than the second' }
            ]
          },
          fade: [
            {
              prompt: 'Decide whether $57\\times{9\\,413}$ is greater than $57\\times{9\\,386}$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $9\\,386$ and $9\\,413$ agree in the first digit. They first differ at the hundreds place, where $3$ is less than $4$, so $9\\,386 < 9\\,413$.', reason: 'comparing digit by digit from the left' },
                { step: '$57\\times{9\\,386} < 57\\times{9\\,413}$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=57$' },
                { step: 'Yes.', reason: 'the first product is greater than the second' }
              ]
            },
            {
              prompt: 'Decide whether $306\\times{87}$ is greater than $306\\times{83}$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $83$ and $87$ agree in the first digit. They first differ at the ones place, where $3$ is less than $7$, so $83 < 87$.', reason: 'comparing digit by digit from the left' },
                { step: '$306\\times{83} < 306\\times{87}$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=306$' },
                { step: 'Yes.', reason: 'the first product is greater than the second' }
              ]
            },
            {
              prompt: 'Decide whether $1\\,245\\times{547}$ is greater than $1\\,245\\times{521}$.',
              answer: 'Yes',
              form: 'Answer as Yes or No.',
              lines: [
                { step: 'The numbers $521$ and $547$ agree in the first digit. They first differ at the tens place, where $2$ is less than $4$, so $521 < 547$.', reason: 'comparing digit by digit from the left' },
                { step: '$1\\,245\\times{521} < 1\\,245\\times{547}$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=1\\,245$' },
                { step: 'Yes.', reason: 'the first product is greater than the second' }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: 't4-p1',
      method: 'proof by cases',
      statement: 'For whole numbers $a,b,c$ with $a>0$: $b<c$ is equivalent to $ab<ac$.',
      idea: 'Reduce $ab<ac$ to a comparison of two rectangles with the same vertical side $a$. Then rule out the other two trichotomy cases for $b$ and $c$ by contradiction.',
      lines: [
        { line: 'Suppose that $b<c$.', reason: 'the hypothesis of the forward direction' },
        { line: 'The product $ab$ is the area of a rectangle with vertical side $a$ and horizontal side $b$. The product $ac$ is the area of a rectangle with vertical side $a$ and horizontal side $c$.', reason: 'the area model of multiplication' },
        { line: 'The two rectangles have the same vertical side $a$, and since $b<c$ the first has the shorter horizontal side.', reason: 'the hypothesis $b<c$, applied to the two rectangles' },
        { line: 'So $ab<ac$.', reason: 'a rectangle with a shorter side and an equal other side has less area' },
        { line: 'Conversely, suppose that $ab<ac$.', reason: 'the hypothesis of the converse direction' },
        { line: 'Exactly one of $b<c$, $b=c$, $b>c$ holds.', reason: 'the trichotomy law of order' },
        { line: 'The equality $b=c$ is impossible, since it would give $ab=ac$, not $ab<ac$.', reason: 'two rectangles with the same sides have the same area' },
        { line: 'The inequality $b>c$ is impossible. The direction proved in the first part, applied with $b$ and $c$ exchanged, would give $ac<ab$, which contradicts $ab<ac$.', reason: 'the direction already proved, applied with $b$ and $c$ exchanged' },
        { line: 'Therefore $b<c$, the only possibility left by the trichotomy law.', reason: 'the trichotomy law, since the other two cases are impossible' },
        { line: 'So $b<c$ is equivalent to $ab<ac$.', reason: 'combining the forward direction and its converse' }
      ]
    }
  ],
  prove: [
    {
      id: 't4-s1',
      statement: 'Let $x$ and $y$ be whole numbers, and let $z>0$ be a whole number. If $xz>yz$, then $x>y$. If $xz=yz$, then $x=y$. If $xz<yz$, then $x<y$.',
      method: 'proof by cases',
      check: {
        proof: [
          { line: 'Exactly one of $x>y$, $x=y$, $x<y$ holds.', reason: 'the trichotomy law of order' },
          { line: 'Exactly one of $xz>yz$, $xz=yz$, $xz<yz$ holds.', reason: 'the trichotomy law of order, applied to $xz$ and $yz$' },
          { line: 'Multiplication by the positive number $z$ preserves the order relation, so $x>y$ gives $xz>yz$ and $x<y$ gives $xz<yz$. Multiplying equal numbers by the same number gives equal products, so $x=y$ gives $xz=yz$.', reason: 'the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=z$, and the rule that equal numbers multiplied by the same number stay equal' },
          { line: 'So each case for $x$ and $y$ corresponds to exactly one case for $xz$ and $yz$. No two different cases for $x$ and $y$ give the same case for $xz$ and $yz$.', reason: 'at most one of the three cases holds for each pair' },
          { line: 'Therefore the case for $xz$ and $yz$ determines the case for $x$ and $y$. If $xz>yz$, then $x>y$. If $xz=yz$, then $x=y$. If $xz<yz$, then $x<y$.', reason: 'combining the previous lines' }
        ]
      }
    },
    {
      id: 't4-s2',
      statement: 'For whole numbers $a,b,c,d$ with $a<b$ and $c<d$: $ac<bd$.',
      method: 'proof by cases',
      check: {
        proof: [
          { line: 'Suppose that $c>0$.', reason: 'the first case' },
          { line: '$ac<bc$.', reason: 'multiplying $a<b$ by the positive number $c$ preserves the order relation' },
          { line: 'The hypothesis $a<b$ gives $b>0$, since every whole number is at least $0$ and $b$ comes after $a$.', reason: 'the definition of $<$ applied to $a<b$' },
          { line: '$bc<bd$.', reason: 'multiplying $c<d$ by the positive number $b$ preserves the order relation' },
          { line: '$ac<bd$.', reason: 'chaining $ac<bc$ and $bc<bd$' },
          { line: 'Suppose instead that $c=0$.', reason: 'the second case' },
          { line: '$ac=0$.', reason: 'multiplying a whole number by $0$ gives $0$' },
          { line: 'The hypothesis $c<d$ together with $c=0$ gives $d>0$.', reason: 'substituting $c=0$ into $c<d$' },
          { line: 'Again $b>0$, as in the first case, so $bd>0$.', reason: 'the product of two positive whole numbers is positive' },
          { line: '$ac=0<bd$.', reason: 'substituting $ac=0$ into $bd>0$' },
          { line: 'Therefore $ac<bd$ in either case.', reason: 'combining the two cases, which cover every whole number $c$' }
        ]
      }
    }
  ]
}
