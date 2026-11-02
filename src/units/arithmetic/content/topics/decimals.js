// Decimals: the complete expanded form, decimals as limits of truncations, and repeating decimals as fractions.
export default {
  number: 36,
  manyParts: false,
  bare: {
    prompt: 'Find the digit of $72.050\\,3$ at generalized place value $10^{-2}$.',
    answer: '5',
    form: 'Answer as a whole number.',
    solution: [
      'Find the digit of $72.050\\,3$ at generalized place value $10^{-2}$.',
      'The nonzero digits of $72.050\\,3$ are 7, 2, 5, and 3, at generalized place values $10^1$, $10^0$, $10^{-2}$, and $10^{-4}$.',
      'The digit at generalized place value $10^{-2}$ is 5.',
      '$5$.'
    ]
  },
  ideas: [
    {
      name: 'Complete expanded form of a finite decimal',
      concrete: 'The finite decimal $35.264\\,7$ equals $(3\\times 10^1)+(5\\times 10^0)+(2\\times 10^{-1})+(6\\times 10^{-2})+(4\\times 10^{-3})+(7\\times 10^{-4})$.',
      general: 'A finite decimal equals a sum with one term for each nonzero digit. Each term is a single-digit whole number times an integer power of 10. This sum is the **complete expanded form** of the decimal.',
      definitions: [
        'A nonzero digit of a finite decimal multiplies one power of 10 in its complete expanded form. That power is the digit\'s **generalized place value**.'
      ]
    },
    {
      name: 'A decimal as the limit of its finite truncations',
      concrete: 'Keep more digits of $\\pi$ to get the truncations $t_1=3.1$, $t_2=3.14$, $t_3=3.141$, and so on. Their distance from $\\pi$ goes to 0, so $\\pi$ is the limit of the sequence $\\{t_n\\}$.',
      general: 'Take a whole number $w$ and an infinite sequence of single digits $a_1,a_2,a_3,\\ldots$, and let $s_n=w.a_1a_2\\cdots a_n$. The decimal $w.a_1a_2a_3\\cdots$ is the **limit** of the sequence of finite decimals $s_n$. This limit is the number whose distance from $s_n$ goes to 0 as $n$ grows without bound. Every such sequence has exactly one limit, so the decimal is well defined.',
      definitions: [
        'A decimal is an **infinite decimal** when infinitely many of its digits are nonzero.'
      ]
    },
    {
      name: 'Repeating decimals and the overline notation',
      concrete: 'Write $0.\\overline{15}$ for the infinite decimal $0.151\\,515\\cdots$.',
      general: 'A **repeating block** is a run of consecutive decimal digits that a decimal repeats indefinitely. The length of the shortest such run is the decimal\'s **period**.',
      definitions: [
        'A **repeating decimal** is an infinite decimal whose digits repeat a fixed block indefinitely from some point on. The block has at least one nonzero digit.'
      ]
    },
    {
      name: 'Converting a repeating decimal to a fraction by clearing the repeat',
      concrete: 'Multiplying $0.\\overline8$ by 10 gives $10\\times 0.\\overline8=8.\\overline8=8+0.\\overline8$, so $9\\times 0.\\overline8=8$, so $0.\\overline8=\\frac{8}{9}$.',
      general: 'Take a decimal whose repeating block has length $p$ and starts right after the decimal point. Multiplying it by $10^p$ shifts the block by one full period. Then $10^p$ times the decimal, minus the decimal itself, is a whole number, because the repeating digits cancel. Dividing that whole number by $10^p-1$ gives the decimal as a fraction.'
    },
    {
      name: 'A decimal never ends in a repeating 9',
      concrete: 'The equality $0.\\overline9=1$ holds, since $10\\times 0.\\overline9-0.\\overline9=9$, so $9\\times 0.\\overline9=9$, so $0.\\overline9=1$.',
      general: 'Take a decimal whose digits end in a repeating 9. Replace the repeating 9s with an infinite run of zeros and add 1 to the digit before them. The result is the same number, written as a decimal that does not end in a repeating 9.'
    }
  ],
  kinds: [
    {
      id: 't36-k1',
      forms: [
        {
          example: {
            problem: 'Find the digit of $208.035$ at generalized place value $10^{-2}$.',
            lines: [
              { step: 'The nonzero digits of $208.035$ are 2 at $10^2$, 8 at $10^0$, 3 at $10^{-2}$, and 5 at $10^{-3}$.', reason: 'counting place values from the decimal point, one digit at a time' },
              { step: 'The generalized place value $10^{-2}$ names the second decimal digit.', reason: 'a decimal digit\'s generalized place value is $10^{-n}$ for its position $n$ after the decimal point' },
              { step: '$3$.', reason: 'reading off the digit at that place value from the first line' }
            ]
          },
          fade: [
            {
              prompt: 'Find the digit of $63.007\\,2$ at generalized place value $10^{-3}$.',
              answer: '7',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The nonzero digits of $63.007\\,2$ are 6 at $10^1$, 3 at $10^0$, 7 at $10^{-3}$, and 2 at $10^{-4}$.', reason: 'counting place values from the decimal point, one digit at a time' },
                { step: 'The generalized place value $10^{-3}$ names the third decimal digit.', reason: 'a decimal digit\'s generalized place value is $10^{-n}$ for its position $n$ after the decimal point' },
                { step: '$7$.', reason: 'reading off the digit at that place value from the first line' }
              ]
            },
            {
              prompt: 'Find the digit of $4\\,060.701\\,3$ at generalized place value $10^{-1}$.',
              answer: '7',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The nonzero digits of $4\\,060.701\\,3$ are 4 at $10^3$, 6 at $10^1$, 7 at $10^{-1}$, 1 at $10^{-3}$, and 3 at $10^{-4}$.', reason: 'counting place values from the decimal point, one digit at a time' },
                { step: 'The generalized place value $10^{-1}$ names the first decimal digit.', reason: 'a decimal digit\'s generalized place value is $10^{-n}$ for its position $n$ after the decimal point' },
                { step: '$7$.', reason: 'reading off the digit at that place value from the first line' }
              ]
            },
            {
              prompt: 'Find the digit of $0.000\\,914$ at generalized place value $10^{-4}$.',
              answer: '9',
              form: 'Answer as a whole number.',
              lines: [
                { step: 'The nonzero digits of $0.000\\,914$ are 9 at $10^{-4}$, 1 at $10^{-5}$, and 4 at $10^{-6}$.', reason: 'counting place values from the decimal point, one digit at a time' },
                { step: 'The generalized place value $10^{-4}$ names the fourth decimal digit.', reason: 'a decimal digit\'s generalized place value is $10^{-n}$ for its position $n$ after the decimal point' },
                { step: '$9$.', reason: 'reading off the digit at that place value from the first line' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 't36-k2',
      forms: [
        {
          example: {
            problem: 'Write $0.\\overline{15}$ as a fraction.',
            lines: [
              { step: 'Multiplying $0.\\overline{15}$ by $10^2$ shifts its repeating block one full period to the left of the decimal point, so $100\\times 0.\\overline{15} = 15.\\overline{15} = 15+0.\\overline{15}$.', reason: 'multiplying by a power of 10 shifts the digits, and the digits after the decimal point are again the decimal' },
              { step: 'Subtracting $0.\\overline{15}$ from both sides of the first line gives $100\\times 0.\\overline{15} - 0.\\overline{15} = 15$.', reason: 'subtracting the same number from both sides of an equation keeps it true' },
              { step: '$99\\times 0.\\overline{15} = 15$.', reason: 'the distributive law: $100\\times 0.\\overline{15}-1\\times 0.\\overline{15}=(100-1)\\times 0.\\overline{15}$' },
              { step: '$\\frac{5}{33}$.', reason: 'dividing both sides by 99, then reducing by the common divisor 3' }
            ]
          },
          fade: [
            {
              prompt: 'Write $0.\\overline{27}$ as a fraction.',
              answer: '3/11',
              form: 'Answer as a fraction in lowest terms.',
              lines: [
                { step: 'Multiplying $0.\\overline{27}$ by $10^2$ shifts its repeating block one full period to the left of the decimal point, so $100\\times 0.\\overline{27} = 27.\\overline{27} = 27+0.\\overline{27}$.', reason: 'multiplying by a power of 10 shifts the digits, and the digits after the decimal point are again the decimal' },
                { step: 'Subtracting $0.\\overline{27}$ from both sides of the first line gives $100\\times 0.\\overline{27} - 0.\\overline{27} = 27$.', reason: 'subtracting the same number from both sides of an equation keeps it true' },
                { step: '$99\\times 0.\\overline{27} = 27$.', reason: 'the distributive law: $100\\times 0.\\overline{27}-1\\times 0.\\overline{27}=(100-1)\\times 0.\\overline{27}$' },
                { step: '$\\frac{3}{11}$.', reason: 'dividing both sides by 99, then reducing by the common divisor 9' }
              ]
            },
            {
              prompt: 'Write $0.\\overline{12}$ as a fraction.',
              answer: '4/33',
              form: 'Answer as a fraction in lowest terms.',
              lines: [
                { step: 'Multiplying $0.\\overline{12}$ by $10^2$ shifts its repeating block one full period to the left of the decimal point, so $100\\times 0.\\overline{12} = 12.\\overline{12} = 12+0.\\overline{12}$.', reason: 'multiplying by a power of 10 shifts the digits, and the digits after the decimal point are again the decimal' },
                { step: 'Subtracting $0.\\overline{12}$ from both sides of the first line gives $100\\times 0.\\overline{12} - 0.\\overline{12} = 12$.', reason: 'subtracting the same number from both sides of an equation keeps it true' },
                { step: '$99\\times 0.\\overline{12} = 12$.', reason: 'the distributive law: $100\\times 0.\\overline{12}-1\\times 0.\\overline{12}=(100-1)\\times 0.\\overline{12}$' },
                { step: '$\\frac{4}{33}$.', reason: 'dividing both sides by 99, then reducing by the common divisor 3' }
              ]
            },
            {
              prompt: 'Write $0.\\overline{135}$ as a fraction.',
              answer: '5/37',
              form: 'Answer as a fraction in lowest terms.',
              lines: [
                { step: 'Multiplying $0.\\overline{135}$ by $10^3$ shifts its repeating block one full period to the left of the decimal point, so $1\\,000\\times 0.\\overline{135} = 135.\\overline{135} = 135+0.\\overline{135}$.', reason: 'multiplying by a power of 10 shifts the digits, and the digits after the decimal point are again the decimal' },
                { step: 'Subtracting $0.\\overline{135}$ from both sides of the first line gives $1\\,000\\times 0.\\overline{135} - 0.\\overline{135} = 135$.', reason: 'subtracting the same number from both sides of an equation keeps it true' },
                { step: '$999\\times 0.\\overline{135} = 135$.', reason: 'the distributive law: $1\\,000\\times 0.\\overline{135}-1\\times 0.\\overline{135}=(1\\,000-1)\\times 0.\\overline{135}$' },
                { step: '$\\frac{5}{37}$.', reason: 'dividing both sides by 999, then reducing by the common divisor 27' }
              ]
            }
          ]
        },
        {
          example: {
            problem: 'Write $16.419\\overline{76}$ as a fraction.',
            lines: [
              { step: 'Splitting off the non-repeating digits gives $16.419\\overline{76} = 16.419 + 0.000\\overline{76}$.', reason: 'separating the digits before the repeating block from the digits from the block onward' },
              { step: 'Shifting three places gives $0.000\\overline{76} = 0.\\overline{76}\\times 10^{-3}$.', reason: 'multiplying a decimal by a power of 10 shifts its digits' },
              { step: 'Clearing the repeat gives $100\\times 0.\\overline{76} - 0.\\overline{76} = 76$, so $99\\times 0.\\overline{76}=76$, so $0.\\overline{76}=\\frac{76}{99}$.', reason: 'the rule for converting a purely repeating decimal to a fraction' },
              { step: 'Combining the pieces gives $16.419 + \\frac{76}{99}\\times 10^{-3} = 16 + 419\\times 10^{-3} + \\frac{76}{99}\\times 10^{-3} = 16 + \\left(419+\\frac{76}{99}\\right)\\times 10^{-3}$.', reason: 'the distributive law' },
              { step: 'Writing 419 over the denominator 99 gives $419+\\frac{76}{99} = \\frac{41\\,481+76}{99} = \\frac{41\\,557}{99}$.', reason: 'writing 419 as $\\frac{41\\,481}{99}$ and adding $\\frac{76}{99}$' },
              { step: '$\\frac{1\\,625\\,557}{99\\,000}$.', reason: 'combining $16 + \\frac{41\\,557}{99}\\times 10^{-3} = 16 + \\frac{41\\,557}{99\\,000}$ into a single fraction' }
            ]
          },
          fade: [
            {
              prompt: 'Write $2.318\\overline{41}$ as a fraction.',
              answer: '229523/99000',
              form: 'Answer as a fraction in lowest terms.',
              lines: [
                { step: 'Splitting off the non-repeating digits gives $2.318\\overline{41} = 2.318 + 0.000\\overline{41}$.', reason: 'separating the digits before the repeating block from the digits from the block onward' },
                { step: 'Shifting three places gives $0.000\\overline{41} = 0.\\overline{41}\\times 10^{-3}$.', reason: 'multiplying a decimal by a power of 10 shifts its digits' },
                { step: 'Clearing the repeat gives $100\\times 0.\\overline{41} - 0.\\overline{41} = 41$, so $99\\times 0.\\overline{41}=41$, so $0.\\overline{41}=\\frac{41}{99}$.', reason: 'the rule for converting a purely repeating decimal to a fraction' },
                { step: 'Combining the pieces gives $2.318 + \\frac{41}{99}\\times 10^{-3} = 2 + 318\\times 10^{-3} + \\frac{41}{99}\\times 10^{-3} = 2 + \\left(318+\\frac{41}{99}\\right)\\times 10^{-3}$.', reason: 'the distributive law' },
                { step: 'Writing 318 over the denominator 99 gives $318+\\frac{41}{99} = \\frac{31\\,482+41}{99} = \\frac{31\\,523}{99}$.', reason: 'writing 318 as $\\frac{31\\,482}{99}$ and adding $\\frac{41}{99}$' },
                { step: '$\\frac{229\\,523}{99\\,000}$.', reason: 'combining $2 + \\frac{31\\,523}{99}\\times 10^{-3} = 2 + \\frac{31\\,523}{99\\,000}$ into a single fraction' }
              ]
            },
            {
              prompt: 'Write $3.735\\overline{58}$ as a fraction.',
              answer: '369823/99000',
              form: 'Answer as a fraction in lowest terms.',
              lines: [
                { step: 'Splitting off the non-repeating digits gives $3.735\\overline{58} = 3.735 + 0.000\\overline{58}$.', reason: 'separating the digits before the repeating block from the digits from the block onward' },
                { step: 'Shifting three places gives $0.000\\overline{58} = 0.\\overline{58}\\times 10^{-3}$.', reason: 'multiplying a decimal by a power of 10 shifts its digits' },
                { step: 'Clearing the repeat gives $100\\times 0.\\overline{58} - 0.\\overline{58} = 58$, so $99\\times 0.\\overline{58}=58$, so $0.\\overline{58}=\\frac{58}{99}$.', reason: 'the rule for converting a purely repeating decimal to a fraction' },
                { step: 'Combining the pieces gives $3.735 + \\frac{58}{99}\\times 10^{-3} = 3 + 735\\times 10^{-3} + \\frac{58}{99}\\times 10^{-3} = 3 + \\left(735+\\frac{58}{99}\\right)\\times 10^{-3}$.', reason: 'the distributive law' },
                { step: 'Writing 735 over the denominator 99 gives $735+\\frac{58}{99} = \\frac{72\\,765+58}{99} = \\frac{72\\,823}{99}$.', reason: 'writing 735 as $\\frac{72\\,765}{99}$ and adding $\\frac{58}{99}$' },
                { step: '$\\frac{369\\,823}{99\\,000}$.', reason: 'combining $3 + \\frac{72\\,823}{99}\\times 10^{-3} = 3 + \\frac{72\\,823}{99\\,000}$ into a single fraction' }
              ]
            },
            {
              prompt: 'Write $7.904\\overline{23}$ as a fraction.',
              answer: '782519/99000',
              form: 'Answer as a fraction in lowest terms.',
              lines: [
                { step: 'Splitting off the non-repeating digits gives $7.904\\overline{23} = 7.904 + 0.000\\overline{23}$.', reason: 'separating the digits before the repeating block from the digits from the block onward' },
                { step: 'Shifting three places gives $0.000\\overline{23} = 0.\\overline{23}\\times 10^{-3}$.', reason: 'multiplying a decimal by a power of 10 shifts its digits' },
                { step: 'Clearing the repeat gives $100\\times 0.\\overline{23} - 0.\\overline{23} = 23$, so $99\\times 0.\\overline{23}=23$, so $0.\\overline{23}=\\frac{23}{99}$.', reason: 'the rule for converting a purely repeating decimal to a fraction' },
                { step: 'Combining the pieces gives $7.904 + \\frac{23}{99}\\times 10^{-3} = 7 + 904\\times 10^{-3} + \\frac{23}{99}\\times 10^{-3} = 7 + \\left(904+\\frac{23}{99}\\right)\\times 10^{-3}$.', reason: 'the distributive law' },
                { step: 'Writing 904 over the denominator 99 gives $904+\\frac{23}{99} = \\frac{89\\,496+23}{99} = \\frac{89\\,519}{99}$.', reason: 'writing 904 as $\\frac{89\\,496}{99}$ and adding $\\frac{23}{99}$' },
                { step: '$\\frac{782\\,519}{99\\,000}$.', reason: 'combining $7 + \\frac{89\\,519}{99}\\times 10^{-3} = 7 + \\frac{89\\,519}{99\\,000}$ into a single fraction' }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t36-k3",
      "forms": [
        {
          "example": {
            "problem": "Place $0.45$.",
            "figure": {
              "file": "place:line:0.45",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $0.45$ is 0, so the mark lies between 0 and 1.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.45=\\frac{45}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 4 and 5 hundredths follow it, so the mark lies past the 4th cut and short of the next, between $0.4$ and $0.5$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:0.45",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 0.45 marked, between 0 and 1."
                }
              },
              {
                "step": "$0.45$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:0.45",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.45 lies at 0.45, in the tenth from 0.4 to 0.5, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $2.68$.",
              "answer": "2.68",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $2.68$ is 2, so the mark lies between 2 and 3.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.68=\\frac{68}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 6 and 8 hundredths follow it, so the mark lies past the 6th cut and short of the next, between $2.6$ and $2.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.68$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:2.68",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.68 lies at 2.68, in the tenth from 2.6 to 2.7, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $4.75$.",
              "answer": "4.75",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $4.75$ is 4, so the mark lies between 4 and 5.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.75=\\frac{75}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and 5 hundredths follow it, so the mark lies past the 7th cut and short of the next, between $4.7$ and $4.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$4.75$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:4.75",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 4.75 lies at 4.75, in the tenth from 4.7 to 4.8, between 4 and 5."
                  }
                }
              ]
            },
            {
              "prompt": "Place $0.37$.",
              "answer": "0.37",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.37$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.37=\\frac{37}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 3 and 7 hundredths follow it, so the mark lies past the 3rd cut and short of the next, between $0.3$ and $0.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.37$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.37",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.37 lies at 0.37, in the tenth from 0.3 to 0.4, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{3}{8}$.",
            "figure": {
              "file": "place:line:3/8",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The unit from 0 to 1 is cut into 8 equal parts, and the mark is the end of part 3.",
                "reason": "the denominator 8 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
              },
              {
                "step": "$\\frac{3}{8}=\\frac{3\\times 125}{8\\times 125}=\\frac{375}{1\\,000}=0.375$.",
                "reason": "multiplying the numerator and the denominator by 125 gives an equal fraction over $1\\,000$, and a fraction over $1\\,000$ is a decimal in thousandths"
              },
              {
                "step": "$0.375$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:3/8",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/8 lies at 0.375, in the tenth from 0.3 to 0.4, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{5}{8}$.",
              "answer": "5/8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 8 equal parts, and the mark is the end of part 5.",
                  "reason": "the denominator 8 gives the number of equal parts of the unit, and the numerator 5 counts the parts from 0"
                },
                {
                  "step": "$\\frac{5}{8}=\\frac{5\\times 125}{8\\times 125}=\\frac{625}{1\\,000}=0.625$.",
                  "reason": "multiplying the numerator and the denominator by 125 gives an equal fraction over $1\\,000$, and a fraction over $1\\,000$ is a decimal in thousandths"
                },
                {
                  "step": "$0.625$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:5/8",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 5/8 lies at 0.625, in the tenth from 0.6 to 0.7, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{1}{8}$.",
              "answer": "1/8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 8 equal parts, and the mark is the end of part 1.",
                  "reason": "the denominator 8 gives the number of equal parts of the unit, and the numerator 1 counts the parts from 0"
                },
                {
                  "step": "$\\frac{1}{8}=\\frac{1\\times 125}{8\\times 125}=\\frac{125}{1\\,000}=0.125$.",
                  "reason": "multiplying the numerator and the denominator by 125 gives an equal fraction over $1\\,000$, and a fraction over $1\\,000$ is a decimal in thousandths"
                },
                {
                  "step": "$0.125$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:1/8",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1/8 lies at 0.125, in the tenth from 0.1 to 0.2, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{7}{8}$.",
              "answer": "7/8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 8 equal parts, and the mark is the end of part 7.",
                  "reason": "the denominator 8 gives the number of equal parts of the unit, and the numerator 7 counts the parts from 0"
                },
                {
                  "step": "$\\frac{7}{8}=\\frac{7\\times 125}{8\\times 125}=\\frac{875}{1\\,000}=0.875$.",
                  "reason": "multiplying the numerator and the denominator by 125 gives an equal fraction over $1\\,000$, and a fraction over $1\\,000$ is a decimal in thousandths"
                },
                {
                  "step": "$0.875$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:7/8",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 7/8 lies at 0.875, in the tenth from 0.8 to 0.9, between 0 and 1."
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
      id: 't36-p1',
      method: 'direct proof',
      statement: 'Let $d_1d_2\\cdots d_p$ be a block of $p$ digits, not all zero. Then the repeating decimal $0.\\overline{d_1d_2\\cdots d_p}$ is equal to a fraction.',
      idea: 'Shift a purely repeating decimal by one full period, then subtract the original. Every repeating digit cancels, so the difference is a whole number.',
      lines: [
        { line: 'Let $N$ be the whole number formed by the digits $d_1d_2\\cdots d_p$ of the repeating block, and let $x=0.\\overline{d_1d_2\\cdots d_p}$.', reason: 'naming the block\'s digits as a whole number, and the decimal itself as $x$' },
        { line: 'Multiplying $x$ by $10^p$ shifts the repeating block one full period to the left of the decimal point, so $10^p\\times x = N + x$.', reason: 'multiplying by a power of 10 shifts the digits, so the digits after the decimal point are again $x$' },
        { line: 'Subtracting $x$ from both sides of the second line gives $10^p\\times x - x = N$.', reason: 'subtracting the same number from both sides of an equation keeps it true' },
        { line: '$(10^p-1)\\times x = N$.', reason: 'the distributive law: $10^p\\times x - 1\\times x = (10^p-1)\\times x$' },
        { line: '$x = \\dfrac{N}{10^p-1}$.', reason: 'dividing both sides by $10^p-1$, positive because $p\\ge1$' }
      ]
    }
  ],
  prove: [
    {
      id: 't36-s1',
      statement: 'Let $x$ be a decimal with $m$ non-repeating decimal digits, followed by a repeating block of $p$ digits. Then $x$ is equal to a fraction.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'Let $w$ be the finite decimal formed by the digits of $x$ through its $m$-th decimal digit. Let $y$ be the purely repeating decimal formed by shifting the repeating block to start right after the decimal point. Then $x = w + y\\times 10^{-m}$.', reason: 'splitting off the first $m$ decimal digits from the digits that follow' },
          { line: 'The decimal $y$ equals the fraction $y=\\dfrac{N}{10^p-1}$, where $N$ is the whole number formed by the block\'s digits.', reason: 'the rule for a purely repeating decimal' },
          { line: 'Substituting the second line into the first line gives $x = w + \\dfrac{N}{10^p-1}\\times 10^{-m}$.', reason: 'substitution' },
          { line: 'Here $w$, $10^{-m}$, and $\\dfrac{N}{10^p-1}$ are fractions. So $x$ is a sum of a fraction and a product of fractions.', reason: 'every finite decimal is a fraction, and so is a quotient of whole numbers' },
          { line: 'A product of fractions is a fraction, and a sum of fractions is a fraction.', reason: 'multiplying fractions and adding fractions each give a fraction' },
          { line: 'The number $x$ is equal to a fraction.', reason: 'combining the previous lines' }
        ]
      }
    },
    {
      id: 't36-s2',
      statement: 'Let $c$ be a finite decimal with $k$ decimal digits. Then $c + 10^{-k}\\times 0.\\overline9 = c + 10^{-k}$.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The decimal $0.\\overline9$ is equal to a fraction, $0.\\overline9=\\dfrac{9}{10^1-1}=\\dfrac{9}{9}=1$.', reason: 'the rule for a purely repeating decimal, with block digit 9 and period 1' },
          { line: 'Multiplying both sides of $0.\\overline9=1$ by $10^{-k}$ gives $10^{-k}\\times 0.\\overline9 = 10^{-k}$.', reason: 'multiplying both sides of an equation by the same number keeps it true' },
          { line: 'Adding $c$ to both sides of the second line gives $c + 10^{-k}\\times 0.\\overline9 = c+10^{-k}$.', reason: 'adding the same number to both sides of an equation keeps it true' }
        ]
      }
    },
    {
      id: 't36-s3',
      statement: 'Take the $n$-th finite truncation $s_n$ of $0.\\overline9$, which has distance $10^{-n}$ from 1. This distance goes to 0 as $n$ grows without bound. Prove that $0.\\overline9=1$.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The $n$-th finite truncation of $0.\\overline9$ is the finite decimal with $n$ nines after the decimal point. It equals $1-10^{-n}$.', reason: 'writing out the first $n$ digits of $0.\\overline9$' },
          { line: 'The distance between $s_n$ and 1 is $10^{-n}$, since $1-s_n=1-(1-10^{-n})=10^{-n}$.', reason: 'the distance between two numbers is the absolute value of their difference' },
          { line: 'The distance $10^{-n}$ goes to 0 as $n$ grows without bound.', reason: 'a power of one tenth shrinks toward 0 as its exponent grows' },
          { line: 'The number 1 is the limit of the sequence of finite truncations of $0.\\overline9$.', reason: 'the definition of the limit of a sequence' },
          { line: 'The decimal $0.\\overline9$ is by definition also the limit of its own sequence of finite truncations. A sequence has only one limit, so $0.\\overline9=1$.', reason: 'the uniqueness of the limit of a sequence' }
        ]
      }
    }
  ]
}
