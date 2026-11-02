// Estimation: rounding, absolute and relative error, and order of magnitude.
export default {
  number: 10,
  manyParts: false,
  bare: {
    prompt: 'Round $248$ to the nearest ten.',
    answer: '250',
    form: 'Answer as a whole number.',
    solution: [
      'Round $248$ to the nearest ten.',
      'Write $248$ as $240+8$.',
      'The ones digit of $248$ is $8$.',
      'Since $8\\ge5$, the rounded value is $240+10=250$.',
      '$250$.'
    ]
  },
  ideas: [
    {
      name: 'Rounding a whole number',
      concrete: 'The number $248$ rounds to $250$ (nearest ten): $248=240+8$, and since $8\\ge5$, the rounded value is $240+10=250$.',
      general: 'To round a whole number $n$ to the nearest ten, write $n=N+e$. Here $e$ is $n$\'s ones digit and $N$ is $n$ with its ones digit replaced by $0$. The rounded value is $N$ if $e<5$, and $N+10$ if $e\\ge5$.',
      definitions: [
        'To **round** $n$ to the nearest ten is to take the closest multiple of ten, the greater in a tie.'
      ]
    },
    {
      name: 'Rounding a decimal',
      concrete: 'The decimal $26.874\\,1$ rounds to $26.87$ (nearest hundredth): $26.874\\,1=26.87+0.004\\,1$. Since the third decimal digit $4<5$, the rounded value is $26.87$.',
      general: 'To round a decimal $m$ to the nearest hundredth, write $m=M+e$. Here $M$ agrees with $m$\'s digits through the hundredths place and is $0$ after, and $e$ is what remains. The rounded value is $M$ if the third decimal digit of $m$ is less than $5$. It is $M+0.01$ if that digit is $5$ or more.',
      definitions: [
        'To **round** to the nearest hundredth is to take the closest multiple of $0.01$, the greater in a tie.'
      ]
    },
    {
      name: 'Percent',
      concrete: 'The percent $7\\%$ means $7\\times\\dfrac{1}{100}$, and $34\\%$ means $34\\times\\dfrac{1}{100}$.',
      general: 'A **percent** is a number of hundredths: for every number $N$, $N\\%$ means $N\\times\\dfrac{1}{100}$.'
    },
    {
      name: 'Absolute and relative error',
      concrete: 'Estimating $127+284$ (which is $411$) as $400$ has absolute error $411-400=11$ and relative error $11/411\\approx 3\\%$.',
      general: 'For a correct value $V$ and an estimate $E$, the **absolute error** is the positive difference between $V$ and $E$. When $V$ is nonzero, the **relative error** is that absolute error divided by $V$, expressed as a percent.'
    },
    {
      name: 'Order of magnitude',
      concrete: 'The number $8\\,379\\,388\\,245\\,684$ has leading digit $8$ in the $10^{12}$ place, so its order of magnitude is $10^{12}$.',
      general: 'The **order of magnitude** of a whole number is the place value of its leading digit. A whole number with order of magnitude $10^n$ has $n+1$ digits.'
    }
  ],
  kinds: [
    {
      id: 't10-k1',
      forms: [
        {
          example: {
            problem: 'Round $45\\,297$ to the nearest thousand.',
            lines: [
              { step: 'Write $45\\,297$ as $45\\,000+297$.', reason: 'isolate the digits below the thousands place' },
              { step: 'The leading digit of $297$ is $2$.', reason: 'identify the digit that decides whether to round up' },
              { step: 'Since $2<5$, the rounded value is $45\\,000$.', reason: 'a leading digit below 5 leaves the number at that multiple of $1\\,000$' },
              { step: '$45\\,000$.', reason: 'state the rounded value' }
            ]
          },
          fade: [
            {
              prompt: 'Round $6\\,128\\,447$ to the nearest hundred.',
              answer: '6 128 400',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $6\\,128\\,447$ as $6\\,128\\,400+47$.', reason: 'isolate the digits below the hundreds place' },
                { step: 'The leading digit of $47$ is $4$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $4<5$, the rounded value is $6\\,128\\,400$.', reason: 'a leading digit below 5 leaves the number at that multiple of $100$' },
                { step: '$6\\,128\\,400$.', reason: 'state the rounded value' }
              ]
            },
            {
              prompt: 'Round $950\\,249\\,936$ to the nearest $10^5$.',
              answer: '950 200 000',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $950\\,249\\,936$ as $950\\,200\\,000+49\\,936$.', reason: 'isolate the digits below the $10^5$ place' },
                { step: 'The leading digit of $49\\,936$ is $4$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $4<5$, the rounded value is $950\\,200\\,000$.', reason: 'a leading digit below 5 leaves the number at that multiple of $10^5$' },
                { step: '$950\\,200\\,000$.', reason: 'state the rounded value' }
              ]
            },
            {
              prompt: 'Round $804\\,315\\,962$ to the nearest million.',
              answer: '804 000 000',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $804\\,315\\,962$ as $804\\,000\\,000+315\\,962$.', reason: 'isolate the digits below the millions place' },
                { step: 'The leading digit of $315\\,962$ is $3$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $3<5$, the rounded value is $804\\,000\\,000$.', reason: 'a leading digit below 5 leaves the number at that multiple of $1\\,000\\,000$' },
                { step: '$804\\,000\\,000$.', reason: 'state the rounded value' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Round $49\\,501$ to the nearest thousand.',
            lines: [
              { step: 'Write $49\\,501$ as $49\\,000+501$.', reason: 'isolate the digits below the thousands place' },
              { step: 'The leading digit of $501$ is $5$.', reason: 'identify the digit that decides whether to round up' },
              { step: 'Since $5\\ge5$, the rounded value is $49\\,000+1\\,000=50\\,000$.', reason: 'a leading digit of 5 or more moves the number up to the next multiple of $1\\,000$' },
              { step: '$50\\,000$.', reason: 'state the rounded value' }
            ]
          },
          fade: [
            {
              prompt: 'Round $61\\,499\\,995$ to the nearest hundred.',
              answer: '61 500 000',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $61\\,499\\,995$ as $61\\,499\\,900+95$.', reason: 'isolate the digits below the hundreds place' },
                { step: 'The leading digit of $95$ is $9$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $9\\ge5$, the rounded value is $61\\,499\\,900+100=61\\,500\\,000$.', reason: 'a leading digit of 5 or more moves the number up to the next multiple of $100$' },
                { step: '$61\\,500\\,000$.', reason: 'state the rounded value' }
              ]
            },
            {
              prompt: 'Round $2\\,736\\,580$ to the nearest ten-thousand.',
              answer: '2 740 000',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $2\\,736\\,580$ as $2\\,730\\,000+6\\,580$.', reason: 'isolate the digits below the ten-thousands place' },
                { step: 'The leading digit of $6\\,580$ is $6$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $6\\ge5$, the rounded value is $2\\,730\\,000+10\\,000=2\\,740\\,000$.', reason: 'a leading digit of 5 or more moves the number up to the next multiple of $10\\,000$' },
                { step: '$2\\,740\\,000$.', reason: 'state the rounded value' }
              ]
            },
            {
              prompt: 'Round $950\\,249\\,936$ to the nearest $10^8$.',
              answer: '1 000 000 000',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'Write $950\\,249\\,936$ as $900\\,000\\,000+50\\,249\\,936$.', reason: 'isolate the digits below the $10^8$ place' },
                { step: 'The leading digit of $50\\,249\\,936$ is $5$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $5\\ge5$, the rounded value is $900\\,000\\,000+10^8=1\\,000\\,000\\,000$.', reason: 'a leading digit of 5 or more moves the number up to the next multiple of $10^8$' },
                { step: '$1\\,000\\,000\\,000$.', reason: 'state the rounded value' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Round $26.874\\,1$ to the nearest hundredth.',
            lines: [
              { step: 'Write $26.874\\,1$ as $26.87+0.004\\,1$.', reason: 'isolate the digits after the hundredths place' },
              { step: 'The third decimal digit of $26.874\\,1$ is $4$.', reason: 'identify the digit that decides whether to round up' },
              { step: 'Since $4<5$, the rounded value is $26.87$.', reason: 'a third decimal digit below 5 leaves the decimal at that multiple of $0.01$' },
              { step: '$26.87$.', reason: 'state the rounded value' }
            ]
          },
          fade: [
            {
              prompt: 'Round $3.141\\,59$ to the nearest hundredth.',
              answer: '3.14',
              form: 'Answer as a finite decimal.',
              lines: [
                { step: 'Write $3.141\\,59$ as $3.14+0.001\\,59$.', reason: 'isolate the digits after the hundredths place' },
                { step: 'The third decimal digit of $3.141\\,59$ is $1$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $1<5$, the rounded value is $3.14$.', reason: 'a third decimal digit below 5 leaves the decimal at that multiple of $0.01$' },
                { step: '$3.14$.', reason: 'state the rounded value' }
              ]
            },
            {
              prompt: 'Round $7.402\\,8$ to the nearest tenth.',
              answer: '7.4',
              form: 'Answer as a finite decimal.',
              lines: [
                { step: 'Write $7.402\\,8$ as $7.4+0.002\\,8$.', reason: 'isolate the digits after the tenths place' },
                { step: 'The second decimal digit of $7.402\\,8$ is $0$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $0<5$, the rounded value is $7.4$.', reason: 'a second decimal digit below 5 leaves the decimal at that multiple of $0.1$' },
                { step: '$7.4$.', reason: 'state the rounded value' }
              ]
            },
            {
              prompt: 'Round $0.002\\,839\\,4$ to the nearest ten-thousandth.',
              answer: '0.0028',
              form: 'Answer as a finite decimal.',
              lines: [
                { step: 'Write $0.002\\,839\\,4$ as $0.002\\,8+0.000\\,039\\,4$.', reason: 'isolate the digits after the ten-thousandths place' },
                { step: 'The fifth decimal digit of $0.002\\,839\\,4$ is $3$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $3<5$, the rounded value is $0.002\\,8$.', reason: 'a fifth decimal digit below 5 leaves the decimal at that multiple of $0.000\\,1$' },
                { step: '$0.002\\,8$.', reason: 'state the rounded value' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Round $59.997\\,25$ to the nearest hundredth.',
            lines: [
              { step: 'Write $59.997\\,25$ as $59.99+0.007\\,25$.', reason: 'isolate the digits after the hundredths place' },
              { step: 'The third decimal digit of $59.997\\,25$ is $7$.', reason: 'identify the digit that decides whether to round up' },
              { step: 'Since $7\\ge5$, the rounded value is $59.99+0.01=60.00$.', reason: 'a third decimal digit of 5 or more moves the decimal up to the next multiple of $0.01$' },
              { step: '$60.00$.', reason: 'state the rounded value' }
            ]
          },
          fade: [
            {
              prompt: 'Round $1.709\\,95$ to the nearest thousandth.',
              answer: '1.710',
              form: 'Answer as a finite decimal.',
              lines: [
                { step: 'Write $1.709\\,95$ as $1.709+0.000\\,95$.', reason: 'isolate the digits after the thousandths place' },
                { step: 'The fourth decimal digit of $1.709\\,95$ is $9$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $9\\ge5$, the rounded value is $1.709+0.001=1.710$.', reason: 'a fourth decimal digit of 5 or more moves the decimal up to the next multiple of $0.001$' },
                { step: '$1.710$.', reason: 'state the rounded value' }
              ]
            },
            {
              prompt: 'Round $8.264\\,7$ to the nearest thousandth.',
              answer: '8.265',
              form: 'Answer as a finite decimal.',
              lines: [
                { step: 'Write $8.264\\,7$ as $8.264+0.000\\,7$.', reason: 'isolate the digits after the thousandths place' },
                { step: 'The fourth decimal digit of $8.264\\,7$ is $7$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $7\\ge5$, the rounded value is $8.264+0.001=8.265$.', reason: 'a fourth decimal digit of 5 or more moves the decimal up to the next multiple of $0.001$' },
                { step: '$8.265$.', reason: 'state the rounded value' }
              ]
            },
            {
              prompt: 'Round $0.385\\,2$ to the nearest hundredth.',
              answer: '0.39',
              form: 'Answer as a finite decimal.',
              lines: [
                { step: 'Write $0.385\\,2$ as $0.38+0.005\\,2$.', reason: 'isolate the digits after the hundredths place' },
                { step: 'The third decimal digit of $0.385\\,2$ is $5$.', reason: 'identify the digit that decides whether to round up' },
                { step: 'Since $5\\ge5$, the rounded value is $0.38+0.01=0.39$.', reason: 'a third decimal digit of 5 or more moves the decimal up to the next multiple of $0.01$' },
                { step: '$0.39$.', reason: 'state the rounded value' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't10-k2',
      forms: [
        {
          example: {
            problem: 'Find the relative error, rounded to two decimal places, of estimating Earth\'s equatorial diameter, $12\\,756.8$ km, by the pole-to-pole distance, $12\\,713.8$ km.',
            lines: [
              { step: 'The absolute error is $12\\,756.8-12\\,713.8=43$ km.', reason: 'definition of absolute error: positive difference between the correct value and the estimate' },
              { step: 'The relative error is $43/12\\,756.8\\approx0.003\\,4$.', reason: 'definition of relative error: absolute error divided by the correct value' },
              { step: '$0.003\\,4\\approx0.34\\%$.', reason: 'expressing the relative error as a percent, rounded to two decimal places' },
              { step: '$0.34\\%$.', reason: 'stating the rounded relative error' }
            ]
          },
          fade: [
            {
              prompt: 'Estimate Australia\'s area, $7\\,617\\,930$ square kilometres, as the area of the contiguous United States, $9\\,158\\,960$ square kilometres. Find the relative error, rounded to the nearest whole percent.',
              answer: '20%',
              form: 'Answer as a percent, as in 42.5%.',
              lines: [
                { step: 'The absolute error is $9\\,158\\,960-7\\,617\\,930=1\\,541\\,030$ square kilometres.', reason: 'definition of absolute error: positive difference between the correct value and the estimate' },
                { step: 'The relative error is $1\\,541\\,030/7\\,617\\,930\\approx0.202$.', reason: 'definition of relative error: absolute error divided by the correct value' },
                { step: '$0.202\\approx20\\%$.', reason: 'expressing the relative error as a percent, rounded to the nearest whole percent' },
                { step: '$20\\%$.', reason: 'stating the rounded relative error' }
              ]
            },
            {
              prompt: 'Find the relative error, rounded to one decimal place, of estimating the population of the United States, $292\\,922\\,990$, as $290\\,000\\,000$.',
              answer: '1.0%',
              form: 'Answer as a percent, as in 42.5%.',
              lines: [
                { step: 'The absolute error is $292\\,922\\,990-290\\,000\\,000=2\\,922\\,990$.', reason: 'definition of absolute error: positive difference between the correct value and the estimate' },
                { step: 'The relative error is $2\\,922\\,990/292\\,922\\,990\\approx0.009\\,98$.', reason: 'definition of relative error: absolute error divided by the correct value' },
                { step: '$0.009\\,98\\approx1.0\\%$.', reason: 'expressing the relative error as a percent, rounded to one decimal place' },
                { step: '$1.0\\%$.', reason: 'stating the rounded relative error' }
              ]
            },
            {
              prompt: 'Find the relative error, rounded to one decimal place, of estimating a bridge\'s correct length, $1\\,280$ metres, as $1\\,300$ metres.',
              answer: '1.6%',
              form: 'Answer as a percent, as in 42.5%.',
              lines: [
                { step: 'The absolute error is $1\\,300-1\\,280=20$ metres.', reason: 'definition of absolute error: positive difference between the correct value and the estimate' },
                { step: 'The relative error is $20/1\\,280\\approx0.015\\,6$.', reason: 'definition of relative error: absolute error divided by the correct value' },
                { step: '$0.015\\,6\\approx1.6\\%$.', reason: 'expressing the relative error as a percent, rounded to one decimal place' },
                { step: '$1.6\\%$.', reason: 'stating the rounded relative error' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Round a distance of $106$ million miles to the nearest million. Find the maximum possible relative error, rounded to two decimal places.',
            lines: [
              { step: 'Rounding to the nearest million means the correct distance is between $105.5$ and $106.5$ million miles. So the absolute error is at most $0.5$ million miles.', reason: 'a value rounded to the nearest million is within half a million of its correct value' },
              { step: 'The relative error is greatest when the correct distance is least, $105.5$ million miles.', reason: 'a fixed absolute error divided by a lesser correct value gives a greater relative error' },
              { step: '$0.5/105.5\\approx 0.004\\,7$.', reason: 'definition of relative error: absolute error divided by the correct value' },
              { step: '$0.004\\,7\\approx 0.47\\%$.', reason: 'expressing the relative error as a percent, rounded to two decimal places' },
              { step: '$0.47\\%$.', reason: 'stating the rounded relative error' }
            ]
          },
          fade: [
            {
              prompt: 'Round a weight of $40$ tons to the nearest ton. Find the maximum possible relative error, rounded to one decimal place.',
              answer: '1.3%',
              form: 'Answer as a percent, as in 42.5%.',
              lines: [
                { step: 'Rounding to the nearest ton means the correct weight is between $39.5$ and $40.5$ tons. So the absolute error is at most $0.5$ tons.', reason: 'a value rounded to the nearest ton is within half a ton of its correct value' },
                { step: 'The relative error is greatest when the correct weight is least, $39.5$ tons.', reason: 'a fixed absolute error divided by a lesser correct value gives a greater relative error' },
                { step: '$0.5/39.5\\approx 0.013$.', reason: 'definition of relative error: absolute error divided by the correct value' },
                { step: '$0.013\\approx 1.3\\%$.', reason: 'expressing the relative error as a percent, rounded to one decimal place' },
                { step: '$1.3\\%$.', reason: 'stating the rounded relative error' }
              ]
            },
            {
              prompt: 'Round a beam\'s length of $250$ centimetres to the nearest $10$ centimetres. Find the maximum possible relative error, rounded to one decimal place.',
              answer: '2.0%',
              form: 'Answer as a percent, as in 42.5%.',
              lines: [
                { step: 'Rounding to the nearest $10$ centimetres means the correct length is between $245$ and $255$ centimetres. So the absolute error is at most $5$ centimetres.', reason: 'a value rounded to the nearest $10$ centimetres is within $5$ centimetres of its correct value' },
                { step: 'The relative error is greatest when the correct length is least, $245$ centimetres.', reason: 'a fixed absolute error divided by a lesser correct value gives a greater relative error' },
                { step: '$5/245\\approx 0.020$.', reason: 'definition of relative error: absolute error divided by the correct value' },
                { step: '$0.020\\approx 2.0\\%$.', reason: 'expressing the relative error as a percent, rounded to one decimal place' },
                { step: '$2.0\\%$.', reason: 'stating the rounded relative error' }
              ]
            },
            {
              prompt: 'Round a count of $18\\,000$ to the nearest thousand. Find the maximum possible relative error, rounded to one decimal place.',
              answer: '2.9%',
              form: 'Answer as a percent, as in 42.5%.',
              lines: [
                { step: 'Rounding to the nearest thousand means the correct count is between $17\\,500$ and $18\\,500$. So the absolute error is at most $500$.', reason: 'a value rounded to the nearest thousand is within $500$ of its correct value' },
                { step: 'The relative error is greatest when the correct count is least, $17\\,500$.', reason: 'a fixed absolute error divided by a lesser correct value gives a greater relative error' },
                { step: '$500/17\\,500\\approx 0.029$.', reason: 'definition of relative error: absolute error divided by the correct value' },
                { step: '$0.029\\approx 2.9\\%$.', reason: 'expressing the relative error as a percent, rounded to one decimal place' },
                { step: '$2.9\\%$.', reason: 'stating the rounded relative error' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't10-k3',
      forms: [
        {
          example: {
            problem: 'Estimate $615+382$ by rounding each number to the nearest hundred. Find the absolute and relative error of the estimate, rounded to one decimal place.',
            lines: [
              { step: 'Rounding $615$ to the nearest hundred gives $600$, and rounding $382$ gives $400$, so the estimate is $600+400=1\\,000$.', reason: 'round each addend to the nearest hundred, then add' },
              { step: 'The correct sum is $615+382=997$, so the absolute error is $1\\,000-997=3$.', reason: 'definition of absolute error: positive difference between the correct value and the estimate' },
              { step: 'The relative error is $3/997\\approx 0.003$, about $0.3\\%$.', reason: 'definition of relative error: absolute error divided by the correct value, rounded to one decimal place' },
              { step: '$3$, $0.3\\%$.', reason: 'state the absolute and relative error' }
            ]
          },
          fade: [
            {
              prompt: 'Estimate $4\\,257+3\\,461$ by rounding each number to the nearest hundred. Find the absolute and relative error of the estimate, rounded to one decimal place.',
              answer: '82, 1.1%',
              form: 'Answer as numbers separated by commas, in the order asked, or equivalent.',
              lines: [
                { step: 'Rounding $4\\,257$ to the nearest hundred gives $4\\,300$, and rounding $3\\,461$ gives $3\\,500$, so the estimate is $4\\,300+3\\,500=7\\,800$.', reason: 'round each addend to the nearest hundred, then add' },
                { step: 'The correct sum is $4\\,257+3\\,461=7\\,718$, so the absolute error is $7\\,800-7\\,718=82$.', reason: 'definition of absolute error: positive difference between the correct value and the estimate' },
                { step: 'The relative error is $82/7\\,718\\approx 0.011$, about $1.1\\%$.', reason: 'definition of relative error: absolute error divided by the correct value, rounded to one decimal place' },
                { step: '$82$, $1.1\\%$.', reason: 'state the absolute and relative error' }
              ]
            },
            {
              prompt: 'Estimate $127+284$ by rounding each number to the nearest $50$. Find the absolute and relative error of the estimate, rounded to one decimal place.',
              answer: '39, 9.5%',
              form: 'Answer as numbers separated by commas, in the order asked, or equivalent.',
              lines: [
                { step: 'Rounding $127$ to the nearest $50$ gives $150$, and rounding $284$ gives $300$, so the estimate is $150+300=450$.', reason: 'round each addend to the nearest $50$, then add' },
                { step: 'The correct sum is $127+284=411$, so the absolute error is $450-411=39$.', reason: 'definition of absolute error: positive difference between the correct value and the estimate' },
                { step: 'The relative error is $39/411\\approx 0.095$, about $9.5\\%$.', reason: 'definition of relative error: absolute error divided by the correct value, rounded to one decimal place' },
                { step: '$39$, $9.5\\%$.', reason: 'state the absolute and relative error' }
              ]
            },
            {
              prompt: 'Estimate $127+284$ by rounding each number to the nearest ten. Find the absolute and relative error of the estimate, rounded to one decimal place.',
              answer: '1, 0.2%',
              form: 'Answer as numbers separated by commas, in the order asked, or equivalent.',
              lines: [
                { step: 'Rounding $127$ to the nearest ten gives $130$, and rounding $284$ gives $280$, so the estimate is $130+280=410$.', reason: 'round each addend to the nearest ten, then add' },
                { step: 'The correct sum is $127+284=411$, so the absolute error is $411-410=1$.', reason: 'definition of absolute error: positive difference between the correct value and the estimate' },
                { step: 'The relative error is $1/411\\approx 0.002$, about $0.2\\%$.', reason: 'definition of relative error: absolute error divided by the correct value, rounded to one decimal place' },
                { step: '$1$, $0.2\\%$.', reason: 'state the absolute and relative error' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't10-k4',
      forms: []
    },
    {
      "id": "t10-k5",
      "forms": [
        {
          "example": {
            "problem": "Place $3.40$.",
            "figure": {
              "file": "place:line:3.40",
              "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $3.40$ is 3, so the mark lies between 3 and 4.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.40=\\frac{40}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 4 and no hundredths follow it, so the mark is the 4th cut of the unit from $3$ to $4$, at $3.4$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:3.40",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, with 3.40 marked, between 3 and 4."
                }
              },
              {
                "step": "$3.40$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:3.40",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.40 lies at 3.4, between 3 and 4."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $1.5$.",
              "answer": "1.5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.5$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.5=\\frac{5}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 5 and no hundredths follow it, so the mark is the 5th cut of the unit from $1$ to $2$, at $1.5$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.5$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.5",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.5 lies at 1.5, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $0.70$.",
              "answer": "0.70",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.70$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.70=\\frac{70}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and no hundredths follow it, so the mark is the 7th cut of the unit from $0$ to $1$, at $0.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.70$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.70",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.70 lies at 0.7, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $2.30$.",
              "answer": "2.30",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $2.30$ is 2, so the mark lies between 2 and 3.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.30=\\frac{30}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 3 and no hundredths follow it, so the mark is the 3rd cut of the unit from $2$ to $3$, at $2.3$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.30$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:2.30",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.30 lies at 2.3, between 2 and 3."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $15\\%$.",
            "figure": {
              "file": "place:line:15%",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$15\\%=\\frac{15}{100}$.",
                "reason": "percent means per hundred"
              },
              {
                "step": "$\\frac{15}{100}=0.15$.",
                "reason": "a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "The tenths digit is 1 and 5 hundredths follow it, so the mark lies past the 1st cut and short of the next, between $0.1$ and $0.2$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:15%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 15% marked, between 0 and 1."
                }
              },
              {
                "step": "$0.15$.",
                "reason": "the place of the mark, written as a decimal",
                "figure": {
                  "file": "place:check:15%",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 15% lies at 0.15, in the tenth from 0.1 to 0.2, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $45\\%$.",
              "answer": "45%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$45\\%=\\frac{45}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{45}{100}=0.45$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 4 and 5 hundredths follow it, so the mark lies past the 4th cut and short of the next, between $0.4$ and $0.5$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.45$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:45%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 45% lies at 0.45, in the tenth from 0.4 to 0.5, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $175\\%$.",
              "answer": "175%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$175\\%=\\frac{175}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{175}{100}=1.75$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 7 and 5 hundredths follow it, so the mark lies past the 7th cut and short of the next, between $1.7$ and $1.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.75$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:175%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 175% lies at 1.75, in the tenth from 1.7 to 1.8, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $25\\%$.",
              "answer": "25%",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$25\\%=\\frac{25}{100}$.",
                  "reason": "percent means per hundred"
                },
                {
                  "step": "$\\frac{25}{100}=0.25$.",
                  "reason": "a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "The tenths digit is 2 and 5 hundredths follow it, so the mark lies past the 2nd cut and short of the next, between $0.2$ and $0.3$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.25$.",
                  "reason": "the place of the mark, written as a decimal",
                  "figure": {
                    "file": "place:check:25%",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 25% lies at 0.25, in the tenth from 0.2 to 0.3, between 0 and 1."
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  proofs: [
    {
      id: 't10-p1',
      method: 'direct proof',
      statement: 'Let $m$ and $n$ be whole numbers that each have exactly 4 digits. Round each to the nearest hundred, then add the results. The relative error of this estimate of $m+n$ is at most $5\\%$.',
      idea: 'Bound the absolute error of the two roundings together, then divide by the least possible sum of two 4-digit numbers.',
      lines: [
        {
          line: 'The number $m$ is never more than $50$ from the closest multiple of $100$. So rounding $m$ to the nearest hundred changes $m$ by at most $50$.',
          reason: 'definition of rounding to the nearest hundred'
        },
        {
          line: 'Likewise, rounding $n$ to the nearest hundred changes $n$ by at most $50$.',
          reason: 'definition of rounding to the nearest hundred, applied to $n$'
        },
        {
          line: 'So rounding both $m$ and $n$ changes their sum $m+n$ by at most $50+50=100$, the absolute error of the estimate.',
          reason: 'the combined change from two roundings is at most the sum of the two individual changes'
        },
        {
          line: 'Because $m$ and $n$ each have exactly 4 digits, the leading digit of each is at least $1$. So each of $m$ and $n$ is at least $1\\,000$.',
          reason: 'a 4-digit whole number\'s leading digit is at least 1, and that digit has place value $1\\,000$'
        },
        {
          line: 'So $m+n$ is at least $1\\,000+1\\,000=2\\,000$.',
          reason: 'adding the two lower bounds'
        },
        {
          line: 'The relative error of the estimate is the absolute error divided by $m+n$, so it is at most $100/(m+n)$. Since $m+n\\ge2\\,000$, the quotient $100/(m+n)$ is at most $100/2\\,000$.',
          reason: 'rewriting both fractions over the common denominator $(m+n)\\times2\\,000$ by the cancellation law, then comparing numerators, since $m+n\\ge2\\,000$ gives $100\\times2\\,000\\le100\\times(m+n)$'
        },
        {
          line: '$100/2\\,000=5\\%$.',
          reason: 'computing the quotient and expressing it as a percent'
        },
        {
          line: 'So the relative error of the estimate is at most $5\\%$.',
          reason: 'combining the absolute-error bound with the bound on $m+n$'
        }
      ]
    }
  ],
  prove: [
    {
      id: 't10-s1',
      statement: 'Let $m$ and $n$ be whole numbers that each have exactly 5 digits. Round each to the nearest thousand, then add the results. The relative error of this estimate of $m+n$ is at most $5\\%$.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The number $m$ is never more than $500$ from the closest multiple of $1\\,000$. So rounding $m$ to the nearest thousand changes $m$ by at most $500$.', reason: 'definition of rounding to the nearest thousand' },
          { line: 'Likewise, rounding $n$ to the nearest thousand changes $n$ by at most $500$.', reason: 'definition of rounding to the nearest thousand, applied to $n$' },
          { line: 'So rounding both $m$ and $n$ changes their sum $m+n$ by at most $500+500=1\\,000$, the absolute error of the estimate.', reason: 'the combined change from two roundings is at most the sum of the two individual changes' },
          { line: 'Because $m$ and $n$ each have exactly 5 digits, the leading digit of each is at least $1$. So each of $m$ and $n$ is at least $10\\,000$.', reason: 'a 5-digit whole number\'s leading digit is at least 1, and that digit has place value $10\\,000$' },
          { line: 'So $m+n$ is at least $10\\,000+10\\,000=20\\,000$.', reason: 'adding the two lower bounds' },
          { line: 'The relative error of the estimate is the absolute error divided by $m+n$, so it is at most $1\\,000/(m+n)$. Since $m+n\\ge20\\,000$, the quotient $1\\,000/(m+n)$ is at most $1\\,000/20\\,000$.', reason: 'rewriting both fractions over the common denominator $(m+n)\\times20\\,000$ by the cancellation law, then comparing numerators, since $m+n\\ge20\\,000$ gives $1\\,000\\times20\\,000\\le1\\,000\\times(m+n)$' },
          { line: '$1\\,000/20\\,000=5\\%$.', reason: 'computing the quotient and expressing it as a percent' },
          { line: 'So the relative error of the estimate is at most $5\\%$.', reason: 'combining the absolute-error bound with the bound on $m+n$' }
        ]
      }
    },
    {
      id: 't10-s2',
      statement: 'For every whole number $n$ and every whole number $k$ with $k\\ge1$, write $n=N+e$. Here $N$ is $n$ with its last $k$ digits replaced by $0$. Also $e$ is the whole number formed by the last $k$ digits of $n$, written as a $k$-digit number. The multiple of $10^k$ closest to $n$ is $N$ when the leading digit of $e$ is less than $5$. It is $N+10^k$ when that digit is $5$ or more.',
      method: 'proof by cases',
      check: {
        proof: [
          { line: 'Because $e$ is formed from the last $k$ digits of $n$, it satisfies $0\\le e<10^k$. Because $N$ is $n$ with those digits replaced by $0$, the number $N$ is a multiple of $10^k$ and $n=N+e$.', reason: 'definition of $N$ and $e$' },
          { line: 'So $n$ lies between $N$ and $N+10^k$, two consecutive multiples of $10^k$, since $N\\le n<N+10^k$.', reason: 'the bound $0\\le e<10^k$ places $n=N+e$ in that range' },
          { line: 'The distance from $n$ to $N$ is $e$, and the distance from $n$ to $N+10^k$ is $10^k-e$.', reason: 'subtracting $n=N+e$ from each of the two multiples' },
          { line: 'The leading digit of $e$, written as a $k$-digit number, is less than $5$ exactly when $e<5\\times10^{k-1}$. Also, $5\\times10^{k-1}$ is half of $10^k$.', reason: 'a $k$-digit number with leading digit $d$ is at least $d\\times10^{k-1}$ and less than $(d+1)\\times10^{k-1}$' },
          { line: 'So when the leading digit of $e$ is less than $5$, the number $e$ is less than half of $10^k$. So the distance from $n$ to $N$ is less than the distance from $n$ to $N+10^k$. So the closest multiple of $10^k$ to $n$ is $N$.', reason: 'combining the previous two lines with the rule that the lesser distance names the closer multiple' },
          { line: 'When the leading digit of $e$ is $5$ or more, the number $e$ is at least half of $10^k$. So the distance from $n$ to $N+10^k$ is at most the distance from $n$ to $N$. By the convention of choosing the greater multiple in a tie, the closest multiple of $10^k$ to $n$ is $N+10^k$.', reason: 'combining the same two lines, with the tie-breaking convention for equal distances' },
          { line: 'So the multiple of $10^k$ closest to $n$ is $N$ when the leading digit of $e$ is less than $5$. It is $N+10^k$ when that digit is $5$ or more.', reason: 'the two cases cover every possible value of the leading digit of $e$' }
        ]
      }
    },
    {
      id: 't10-s3',
      statement: 'Let $N$ and $n$ be whole numbers. If the order of magnitude of $N$ is $10^n$, then $N$ has exactly $n+1$ digits.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The order of magnitude of $N$ is $10^n$ exactly when its leading digit has place value $10^n$, so $10^n\\le N<10^{n+1}$.', reason: 'definition of order of magnitude' },
          { line: 'A whole number $M$ has exactly $n+1$ digits exactly when $10^n\\le M<10^{n+1}$. This holds since the least whole number with $n+1$ digits is $10^n$ and the least with $n+2$ digits is $10^{n+1}$.', reason: 'definition of the number of digits of a whole number, by place value' },
          { line: 'So $N$ satisfies $10^n\\le N<10^{n+1}$, the condition for exactly $n+1$ digits, so $N$ has exactly $n+1$ digits.', reason: 'combining the previous two lines' }
        ]
      }
    }
  ]
}
