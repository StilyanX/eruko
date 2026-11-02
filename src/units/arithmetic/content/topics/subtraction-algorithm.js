export default {
  "number": 7,
  "manyParts": false,
  "bare": {
    "prompt": "Compute $1\\,658-257$.",
    "answer": "1 401",
    "form": "Answer as a whole number.",
    "solution": [
      "Compute $1\\,658-257$.",
      "Every digit of 257 is at most the matching digit of $1\\,658$, so each column subtracts directly with no trading.",
      "$8-7=1$, $5-5=0$, $6-2=4$, $1-0=1$.",
      "$1\\,401$."
    ]
  },
  "ideas": [
    {
      "name": "Definition of subtraction",
      "concrete": "The difference $37-15$ is the number of steps from 15 to 37, so $37-15=22$ since $22+15=37$.",
      "general": "For whole numbers $m,n$ with $m\\geq{n}$, the **difference** $m-n$ is the whole number $k$ satisfying $m=k+n$.",
      "definitions": [
        "The notation $m\\geq{n}$ means $m>n$ or $m=n$."
      ]
    },
    {
      "name": "Subtracting a sum from a sum",
      "concrete": "The equation $(7+8+9)-(3+4+5) = (7-3)+(8-4)+(9-5)$ holds.",
      "general": "For whole numbers with $\\ell\\geq{a}$, $m\\geq{b}$, $n\\geq{c}$: $(\\ell+m+n)-(a+b+c) = (\\ell-a)+(m-b)+(n-c)$, and likewise for every number of matching pairs."
    },
    {
      "name": "The distributive law for subtraction",
      "concrete": "The equation $3\\times(6-2) = (3\\times{6})-(3\\times{2})$ holds.",
      "general": "For whole numbers $k,m,n$ with $m\\geq{n}$: $k(m-n) = km-kn$."
    },
    {
      "name": "A product of a sum and a difference",
      "concrete": "The equation $(5-2)(5+2) = (5\\times5)-(2\\times2)$ holds, since $3\\times{7}=21$ and $25-4=21$.",
      "general": "For whole numbers $x>y$: $(x-y)(x+y) = (x\\times{x})-(y\\times{y})$."
    }
  ],
  "kinds": [
    {
      "id": "t7-k1",
      "forms": [
        {
          "example": {
            "problem": "Compute $756-389$.",
            "lines": [
              {
                "step": "Here, $756 = 700+50+6$ and $389 = 300+80+9$.",
                "reason": "the expanded form of $756$ and $389$"
              },
              {
                "step": "The ones column $6-9$ needs trading: change it to $16-9$ and lower the tens digit from $5$ to $4$.",
                "reason": "the digit of $756$ is less than the matching digit of $389$, so trade a ten from the tens column"
              },
              {
                "step": "The tens column, now $4-8$, needs trading too. Change it to $14-8$ and lower the hundreds digit from $7$ to $6$.",
                "reason": "the lowered tens digit is still less than the matching digit of $389$, so trade from the hundreds column"
              },
              {
                "step": "Subtracting each column: $16-9=7$, $14-8=6$, $6-3=3$.",
                "reason": "single-digit subtraction in each column, after trading"
              },
              {
                "step": "$367$.",
                "reason": "reading the digits $3$, $6$, $7$ off the traded columns"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $843-275$.",
              "answer": "568",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Here, $843 = 800+40+3$ and $275 = 200+70+5$.",
                  "reason": "the expanded form of $843$ and $275$"
                },
                {
                  "step": "The ones column $3-5$ needs trading: change it to $13-5$ and lower the tens digit from $4$ to $3$.",
                  "reason": "the digit of $843$ is less than the matching digit of $275$, so trade a ten from the tens column"
                },
                {
                  "step": "The tens column, now $3-7$, needs trading too. Change it to $13-7$ and lower the hundreds digit from $8$ to $7$.",
                  "reason": "the lowered tens digit is still less than the matching digit of $275$, so trade from the hundreds column"
                },
                {
                  "step": "Subtracting each column: $13-5=8$, $13-7=6$, $7-2=5$.",
                  "reason": "single-digit subtraction in each column, after trading"
                },
                {
                  "step": "$568$.",
                  "reason": "reading the digits $5$, $6$, $8$ off the traded columns"
                }
              ]
            },
            {
              "prompt": "Compute $932-468$.",
              "answer": "464",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Here, $932 = 900+30+2$ and $468 = 400+60+8$.",
                  "reason": "the expanded form of $932$ and $468$"
                },
                {
                  "step": "The ones column $2-8$ needs trading: change it to $12-8$ and lower the tens digit from $3$ to $2$.",
                  "reason": "the digit of $932$ is less than the matching digit of $468$, so trade a ten from the tens column"
                },
                {
                  "step": "The tens column, now $2-6$, needs trading too. Change it to $12-6$ and lower the hundreds digit from $9$ to $8$.",
                  "reason": "the lowered tens digit is still less than the matching digit of $468$, so trade from the hundreds column"
                },
                {
                  "step": "Subtracting each column: $12-8=4$, $12-6=6$, $8-4=4$.",
                  "reason": "single-digit subtraction in each column, after trading"
                },
                {
                  "step": "$464$.",
                  "reason": "reading the digits $4$, $6$, $4$ off the traded columns"
                }
              ]
            },
            {
              "prompt": "Compute $627-488$.",
              "answer": "139",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Here, $627 = 600+20+7$ and $488 = 400+80+8$.",
                  "reason": "the expanded form of $627$ and $488$"
                },
                {
                  "step": "The ones column $7-8$ needs trading: change it to $17-8$ and lower the tens digit from $2$ to $1$.",
                  "reason": "the digit of $627$ is less than the matching digit of $488$, so trade a ten from the tens column"
                },
                {
                  "step": "The tens column, now $1-8$, needs trading too. Change it to $11-8$ and lower the hundreds digit from $6$ to $5$.",
                  "reason": "the lowered tens digit is still less than the matching digit of $488$, so trade from the hundreds column"
                },
                {
                  "step": "Subtracting each column: $17-8=9$, $11-8=3$, $5-4=1$.",
                  "reason": "single-digit subtraction in each column, after trading"
                },
                {
                  "step": "$139$.",
                  "reason": "reading the digits $1$, $3$, $9$ off the traded columns"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $50\\,003-465$.",
            "lines": [
              {
                "step": "The ones column is $3-5$, and the digit to its left is $0$, so no ordinary trade is possible there.",
                "reason": "the digit of $50\\,003$ is less than the matching digit of $465$, and the neighbouring digit is $0$"
              },
              {
                "step": "Change each zero between the ones column and the first nonzero digit to $9$. Lower that nonzero digit by $1$. The tens, hundreds, and thousands digits of $50\\,003$ become $9$, and the ten-thousands digit falls from $5$ to $4$.",
                "reason": "trading through zeros, since no nonzero digit sits immediately to the left of the ones column"
              },
              {
                "step": "Change the ones subtraction to $13-5$.",
                "reason": "the ten traded into the ones column"
              },
              {
                "step": "Subtracting each column: $13-5=8$, $9-6=3$, $9-4=5$, $9-0=9$, $4-0=4$.",
                "reason": "single-digit subtraction in each column, after trading the zeros"
              },
              {
                "step": "$49\\,538$.",
                "reason": "reading the digits off the traded columns"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $70\\,002-358$.",
              "answer": "69 644",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The ones column is $2-8$, and the digit to its left is $0$, so no ordinary trade is possible there.",
                  "reason": "the digit of $70\\,002$ is less than the matching digit of $358$, and the neighbouring digit is $0$"
                },
                {
                  "step": "Change each zero between the ones column and the first nonzero digit to $9$. Lower that nonzero digit by $1$. The tens, hundreds, and thousands digits of $70\\,002$ become $9$, and the ten-thousands digit falls from $7$ to $6$.",
                  "reason": "trading through zeros, since no nonzero digit sits immediately to the left of the ones column"
                },
                {
                  "step": "Change the ones subtraction to $12-8$.",
                  "reason": "the ten traded into the ones column"
                },
                {
                  "step": "Subtracting each column: $12-8=4$, $9-5=4$, $9-3=6$, $9-0=9$, $6-0=6$.",
                  "reason": "single-digit subtraction in each column, after trading the zeros"
                },
                {
                  "step": "$69\\,644$.",
                  "reason": "reading the digits off the traded columns"
                }
              ]
            },
            {
              "prompt": "Compute $40\\,006-729$.",
              "answer": "39 277",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The ones column is $6-9$, and the digit to its left is $0$, so no ordinary trade is possible there.",
                  "reason": "the digit of $40\\,006$ is less than the matching digit of $729$, and the neighbouring digit is $0$"
                },
                {
                  "step": "Change each zero between the ones column and the first nonzero digit to $9$. Lower that nonzero digit by $1$. The tens, hundreds, and thousands digits of $40\\,006$ become $9$, and the ten-thousands digit falls from $4$ to $3$.",
                  "reason": "trading through zeros, since no nonzero digit sits immediately to the left of the ones column"
                },
                {
                  "step": "Change the ones subtraction to $16-9$.",
                  "reason": "the ten traded into the ones column"
                },
                {
                  "step": "Subtracting each column: $16-9=7$, $9-2=7$, $9-7=2$, $9-0=9$, $3-0=3$.",
                  "reason": "single-digit subtraction in each column, after trading the zeros"
                },
                {
                  "step": "$39\\,277$.",
                  "reason": "reading the digits off the traded columns"
                }
              ]
            },
            {
              "prompt": "Compute $80\\,001-846$.",
              "answer": "79 155",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The ones column is $1-6$, and the digit to its left is $0$, so no ordinary trade is possible there.",
                  "reason": "the digit of $80\\,001$ is less than the matching digit of $846$, and the neighbouring digit is $0$"
                },
                {
                  "step": "Change each zero between the ones column and the first nonzero digit to $9$. Lower that nonzero digit by $1$. The tens, hundreds, and thousands digits of $80\\,001$ become $9$, and the ten-thousands digit falls from $8$ to $7$.",
                  "reason": "trading through zeros, since no nonzero digit sits immediately to the left of the ones column"
                },
                {
                  "step": "Change the ones subtraction to $11-6$.",
                  "reason": "the ten traded into the ones column"
                },
                {
                  "step": "Subtracting each column: $11-6=5$, $9-4=5$, $9-8=1$, $9-0=9$, $7-0=7$.",
                  "reason": "single-digit subtraction in each column, after trading the zeros"
                },
                {
                  "step": "$79\\,155$.",
                  "reason": "reading the digits off the traded columns"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t7-k2",
      "forms": [
        {
          "example": {
            "problem": "Find how much each of Stefanie and Linda has. Stefanie has 15 dollars less than Linda, and the two together have 61 dollars.",
            "lines": [
              {
                "step": "Let $\\ell$ be Linda's dollars, so Stefanie has $\\ell-15$. Together they have 61 dollars, so $\\ell+(\\ell-15)=61$.",
                "reason": "translating the given relations into a number sentence"
              },
              {
                "step": "$\\ell+(\\ell-15) = 2\\ell-15$, so $2\\ell-15=61$.",
                "reason": "collecting the two copies of $\\ell$, by the definition of subtraction and the associative and commutative laws of addition"
              },
              {
                "step": "So $2\\ell=76$ and $\\ell=38$.",
                "reason": "the definition of subtraction, since $61+15=76$, and dividing $76$ by $2$"
              },
              {
                "step": "Stefanie has $38-15=23$.",
                "reason": "substituting $\\ell=38$"
              },
              {
                "step": "$23$, $38$.",
                "reason": "restating the two values found, in the order Stefanie, Linda"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how much each of Marta and Jonas has. Marta has 17 dollars less than Jonas, and the two together have 83 dollars.",
              "answer": "33, 50",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $j$ be Jonas's dollars, so Marta has $j-17$. Together they have 83 dollars, so $j+(j-17)=83$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$j+(j-17) = 2j-17$, so $2j-17=83$.",
                  "reason": "collecting the two copies of $j$, by the definition of subtraction and the associative and commutative laws of addition"
                },
                {
                  "step": "So $2j=100$ and $j=50$.",
                  "reason": "the definition of subtraction, since $83+17=100$, and dividing $100$ by $2$"
                },
                {
                  "step": "Marta has $50-17=33$.",
                  "reason": "substituting $j=50$"
                },
                {
                  "step": "$33$, $50$.",
                  "reason": "restating the two values found, in the order Marta, Jonas"
                }
              ]
            },
            {
              "prompt": "Find how much each of Keiko and Tomas has. Keiko has 26 dollars less than Tomas, and the two together have 140 dollars.",
              "answer": "57, 83",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $t$ be Tomas's dollars, so Keiko has $t-26$. Together they have 140 dollars, so $t+(t-26)=140$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$t+(t-26) = 2t-26$, so $2t-26=140$.",
                  "reason": "collecting the two copies of $t$, by the definition of subtraction and the associative and commutative laws of addition"
                },
                {
                  "step": "So $2t=166$ and $t=83$.",
                  "reason": "the definition of subtraction, since $140+26=166$, and dividing $166$ by $2$"
                },
                {
                  "step": "Keiko has $83-26=57$.",
                  "reason": "substituting $t=83$"
                },
                {
                  "step": "$57$, $83$.",
                  "reason": "restating the two values found, in the order Keiko, Tomas"
                }
              ]
            },
            {
              "prompt": "Find how much each of Rosa and David has. Rosa has 9 dollars less than David, and the two together have 47 dollars.",
              "answer": "19, 28",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $d$ be David's dollars, so Rosa has $d-9$. Together they have 47 dollars, so $d+(d-9)=47$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$d+(d-9) = 2d-9$, so $2d-9=47$.",
                  "reason": "collecting the two copies of $d$, by the definition of subtraction and the associative and commutative laws of addition"
                },
                {
                  "step": "So $2d=56$ and $d=28$.",
                  "reason": "the definition of subtraction, since $47+9=56$, and dividing $56$ by $2$"
                },
                {
                  "step": "Rosa has $28-9=19$.",
                  "reason": "substituting $d=28$"
                },
                {
                  "step": "$19$, $28$.",
                  "reason": "restating the two values found, in the order Rosa, David"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how much each of Lena, Nadia, and Sara has. Nadia has 7 dollars more than Lena, and Sara has 12 dollars more than Nadia. The three together have 101 dollars.",
            "lines": [
              {
                "step": "Let $\\ell$ be Lena's dollars, so Nadia has $\\ell+7$ and Sara has $(\\ell+7)+12=\\ell+19$. Together they have 101 dollars, so $\\ell+(\\ell+7)+(\\ell+19)=101$.",
                "reason": "translating the given relations into a number sentence, and the associative law of addition"
              },
              {
                "step": "$\\ell+(\\ell+7)+(\\ell+19) = 3\\ell+26$, so $3\\ell+26=101$.",
                "reason": "collecting the three copies of $\\ell$, by the associative and commutative laws of addition"
              },
              {
                "step": "So $3\\ell=75$ and $\\ell=25$.",
                "reason": "the definition of subtraction, since $101-26=75$, and dividing $75$ by $3$"
              },
              {
                "step": "Nadia has $25+7=32$ and Sara has $32+12=44$.",
                "reason": "substituting $\\ell=25$"
              },
              {
                "step": "$25$, $32$, $44$.",
                "reason": "restating the three values found, in the order Lena, Nadia, Sara"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how much each of Tom, Ulla, and Vera has. Ulla has 5 dollars more than Tom, and Vera has 9 dollars more than Ulla. The three together have 76 dollars.",
              "answer": "19, 24, 33",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $t$ be Tom's dollars, so Ulla has $t+5$ and Vera has $(t+5)+9=t+14$. Together they have 76 dollars, so $t+(t+5)+(t+14)=76$.",
                  "reason": "translating the given relations into a number sentence, and the associative law of addition"
                },
                {
                  "step": "$t+(t+5)+(t+14) = 3t+19$, so $3t+19=76$.",
                  "reason": "collecting the three copies of $t$, by the associative and commutative laws of addition"
                },
                {
                  "step": "So $3t=57$ and $t=19$.",
                  "reason": "the definition of subtraction, since $76-19=57$, and dividing $57$ by $3$"
                },
                {
                  "step": "Ulla has $19+5=24$ and Vera has $24+9=33$.",
                  "reason": "substituting $t=19$"
                },
                {
                  "step": "$19$, $24$, $33$.",
                  "reason": "restating the three values found, in the order Tom, Ulla, Vera"
                }
              ]
            },
            {
              "prompt": "Find how much each of Ana, Ben, and Cleo has. Ben has 11 dollars more than Ana, and Cleo has 6 dollars more than Ben. The three together have 118 dollars.",
              "answer": "30, 41, 47",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $a$ be Ana's dollars, so Ben has $a+11$ and Cleo has $(a+11)+6=a+17$. Together they have 118 dollars, so $a+(a+11)+(a+17)=118$.",
                  "reason": "translating the given relations into a number sentence, and the associative law of addition"
                },
                {
                  "step": "$a+(a+11)+(a+17) = 3a+28$, so $3a+28=118$.",
                  "reason": "collecting the three copies of $a$, by the associative and commutative laws of addition"
                },
                {
                  "step": "So $3a=90$ and $a=30$.",
                  "reason": "the definition of subtraction, since $118-28=90$, and dividing $90$ by $3$"
                },
                {
                  "step": "Ben has $30+11=41$ and Cleo has $41+6=47$.",
                  "reason": "substituting $a=30$"
                },
                {
                  "step": "$30$, $41$, $47$.",
                  "reason": "restating the three values found, in the order Ana, Ben, Cleo"
                }
              ]
            },
            {
              "prompt": "Find how much each of Kofi, Lars, and Mina has. Lars has 14 dollars more than Kofi, and Mina has 10 dollars more than Lars. The three together have 158 dollars.",
              "answer": "40, 54, 64",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $k$ be Kofi's dollars, so Lars has $k+14$ and Mina has $(k+14)+10=k+24$. Together they have 158 dollars, so $k+(k+14)+(k+24)=158$.",
                  "reason": "translating the given relations into a number sentence, and the associative law of addition"
                },
                {
                  "step": "$k+(k+14)+(k+24) = 3k+38$, so $3k+38=158$.",
                  "reason": "collecting the three copies of $k$, by the associative and commutative laws of addition"
                },
                {
                  "step": "So $3k=120$ and $k=40$.",
                  "reason": "the definition of subtraction, since $158-38=120$, and dividing $120$ by $3$"
                },
                {
                  "step": "Lars has $40+14=54$ and Mina has $54+10=64$.",
                  "reason": "substituting $k=40$"
                },
                {
                  "step": "$40$, $54$, $64$.",
                  "reason": "restating the three values found, in the order Kofi, Lars, Mina"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how much each of Rita, Sam, and Tara has. Sam has twice the dollars Rita has, and Tara has 5 dollars more than Sam. Rita and Sam together have 13 dollars more than Tara.",
            "lines": [
              {
                "step": "Let $r$ be Rita's dollars, so Sam has $2r$ and Tara has $2r+5$.",
                "reason": "translating the first two relations into expressions in $r$"
              },
              {
                "step": "Rita and Sam together have $r+2r=3r$, which is 13 more than Tara, so $3r=(2r+5)+13$.",
                "reason": "translating the third relation into a number sentence, after collecting the copies of $r$"
              },
              {
                "step": "$3r=2r+18$, so $r=18$.",
                "reason": "the associative law of addition, since $5+13=18$, and $3r$ exceeds $2r$ by $r$"
              },
              {
                "step": "Sam has $2\\times{18}=36$, and Tara has $36+5=41$.",
                "reason": "substituting $r=18$"
              },
              {
                "step": "$18$, $36$, $41$.",
                "reason": "restating the three values found, in the order Rita, Sam, Tara"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how much each of Uma, Vik, and Wen has. Vik has 3 times the dollars Uma has, and Wen has 8 dollars more than Vik. Uma and Vik together have 6 dollars more than Wen.",
              "answer": "14, 42, 50",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $u$ be Uma's dollars, so Vik has $3u$ and Wen has $3u+8$.",
                  "reason": "translating the first two relations into expressions in $u$"
                },
                {
                  "step": "Uma and Vik together have $u+3u=4u$, which is 6 more than Wen, so $4u=(3u+8)+6$.",
                  "reason": "translating the third relation into a number sentence, after collecting the copies of $u$"
                },
                {
                  "step": "$4u=3u+14$, so $u=14$.",
                  "reason": "the associative law of addition, since $8+6=14$, and $4u$ exceeds $3u$ by $u$"
                },
                {
                  "step": "Vik has $3\\times{14}=42$, and Wen has $42+8=50$.",
                  "reason": "substituting $u=14$"
                },
                {
                  "step": "$14$, $42$, $50$.",
                  "reason": "restating the three values found, in the order Uma, Vik, Wen"
                }
              ]
            },
            {
              "prompt": "Find how much each of Ada, Bo, and Cy has. Bo has twice the dollars Ada has, and Cy has 9 dollars more than Bo. Ada and Bo together have 7 dollars more than Cy.",
              "answer": "16, 32, 41",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $a$ be Ada's dollars, so Bo has $2a$ and Cy has $2a+9$.",
                  "reason": "translating the first two relations into expressions in $a$"
                },
                {
                  "step": "Ada and Bo together have $a+2a=3a$, which is 7 more than Cy, so $3a=(2a+9)+7$.",
                  "reason": "translating the third relation into a number sentence, after collecting the copies of $a$"
                },
                {
                  "step": "$3a=2a+16$, so $a=16$.",
                  "reason": "the associative law of addition, since $9+7=16$, and $3a$ exceeds $2a$ by $a$"
                },
                {
                  "step": "Bo has $2\\times{16}=32$, and Cy has $32+9=41$.",
                  "reason": "substituting $a=16$"
                },
                {
                  "step": "$16$, $32$, $41$.",
                  "reason": "restating the three values found, in the order Ada, Bo, Cy"
                }
              ]
            },
            {
              "prompt": "Find how much each of Dev, Eva, and Finn has. Eva has twice the dollars Dev has, and Finn has 12 dollars more than Eva. Dev and Eva together have 10 dollars more than Finn.",
              "answer": "22, 44, 56",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "Let $d$ be Dev's dollars, so Eva has $2d$ and Finn has $2d+12$.",
                  "reason": "translating the first two relations into expressions in $d$"
                },
                {
                  "step": "Dev and Eva together have $d+2d=3d$, which is 10 more than Finn, so $3d=(2d+12)+10$.",
                  "reason": "translating the third relation into a number sentence, after collecting the copies of $d$"
                },
                {
                  "step": "$3d=2d+22$, so $d=22$.",
                  "reason": "the associative law of addition, since $12+10=22$, and $3d$ exceeds $2d$ by $d$"
                },
                {
                  "step": "Eva has $2\\times{22}=44$, and Finn has $44+12=56$.",
                  "reason": "substituting $d=22$"
                },
                {
                  "step": "$22$, $44$, $56$.",
                  "reason": "restating the three values found, in the order Dev, Eva, Finn"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how many shells Noor takes out of a bag of 95 shells. She puts back 22 and ends with 64.",
            "lines": [
              {
                "step": "Let $x$ be the number of shells Noor takes out, so after taking out $x$ and putting back 22, $(95-x)+22=64$.",
                "reason": "translating the given relations into a number sentence"
              },
              {
                "step": "$(95-x)+22 = 117-x$, so $117-x=64$.",
                "reason": "the definition of subtraction and the associative and commutative laws of addition"
              },
              {
                "step": "$x=117-64$.",
                "reason": "the definition of subtraction"
              },
              {
                "step": "$53$.",
                "reason": "computing $117-64$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many cards Lukas takes out of a box of 140 cards. He puts back 27 and ends with 85.",
              "answer": "82",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number of cards Lukas takes out, so after taking out $x$ and putting back 27, $(140-x)+27=85$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$(140-x)+27 = 167-x$, so $167-x=85$.",
                  "reason": "the definition of subtraction and the associative and commutative laws of addition"
                },
                {
                  "step": "$x=167-85$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$82$.",
                  "reason": "computing $167-85$"
                }
              ]
            },
            {
              "prompt": "Find how many beads Sofia takes out of a jar of 73 beads. She puts back 16 and ends with 50.",
              "answer": "39",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number of beads Sofia takes out, so after taking out $x$ and putting back 16, $(73-x)+16=50$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$(73-x)+16 = 89-x$, so $89-x=50$.",
                  "reason": "the definition of subtraction and the associative and commutative laws of addition"
                },
                {
                  "step": "$x=89-50$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$39$.",
                  "reason": "computing $89-50$"
                }
              ]
            },
            {
              "prompt": "Find how many stamps Arjun takes out of a book of 210 stamps. He puts back 45 and ends with 132.",
              "answer": "123",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number of stamps Arjun takes out, so after taking out $x$ and putting back 45, $(210-x)+45=132$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$(210-x)+45 = 255-x$, so $255-x=132$.",
                  "reason": "the definition of subtraction and the associative and commutative laws of addition"
                },
                {
                  "step": "$x=255-132$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$123$.",
                  "reason": "computing $255-132$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how many beads Zara removes from a string of 58 beads. She first adds 24, then removes some, and ends with 39.",
            "lines": [
              {
                "step": "Let $x$ be the number of beads Zara removes, so after adding 24 and then removing $x$, $(58+24)-x=39$.",
                "reason": "translating the given relations into a number sentence"
              },
              {
                "step": "$(58+24)-x = 82-x$, so $82-x=39$.",
                "reason": "adding $58+24=82$"
              },
              {
                "step": "$x=82-39$.",
                "reason": "the definition of subtraction"
              },
              {
                "step": "$43$.",
                "reason": "computing $82-39$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many marbles Leo removes from a bag of 47 marbles. He first adds 18, then removes some, and ends with 29.",
              "answer": "36",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number of marbles Leo removes, so after adding 18 and then removing $x$, $(47+18)-x=29$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$(47+18)-x = 65-x$, so $65-x=29$.",
                  "reason": "adding $47+18=65$"
                },
                {
                  "step": "$x=65-29$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$36$.",
                  "reason": "computing $65-29$"
                }
              ]
            },
            {
              "prompt": "Find how many cards Yara removes from a deck of 64 cards. She first adds 29, then removes some, and ends with 48.",
              "answer": "45",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number of cards Yara removes, so after adding 29 and then removing $x$, $(64+29)-x=48$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$(64+29)-x = 93-x$, so $93-x=48$.",
                  "reason": "adding $64+29=93$"
                },
                {
                  "step": "$x=93-48$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$45$.",
                  "reason": "computing $93-48$"
                }
              ]
            },
            {
              "prompt": "Find how many coins Ravi removes from a purse of 135 coins. He first adds 40, then removes some, and ends with 98.",
              "answer": "77",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number of coins Ravi removes, so after adding 40 and then removing $x$, $(135+40)-x=98$.",
                  "reason": "translating the given relations into a number sentence"
                },
                {
                  "step": "$(135+40)-x = 175-x$, so $175-x=98$.",
                  "reason": "adding $135+40=175$"
                },
                {
                  "step": "$x=175-98$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$77$.",
                  "reason": "computing $175-98$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the whole number that, decreased by 46, gives 75.",
            "lines": [
              {
                "step": "Let $x$ be the number, so $x-46=75$.",
                "reason": "translating the given relation into a number sentence"
              },
              {
                "step": "$x=75+46$.",
                "reason": "the definition of subtraction"
              },
              {
                "step": "$121$.",
                "reason": "computing $75+46$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole number that, decreased by 39, gives 64.",
              "answer": "103",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number, so $x-39=64$.",
                  "reason": "translating the given relation into a number sentence"
                },
                {
                  "step": "$x=64+39$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$103$.",
                  "reason": "computing $64+39$"
                }
              ]
            },
            {
              "prompt": "Find the whole number that, decreased by 125, gives 218.",
              "answer": "343",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number, so $x-125=218$.",
                  "reason": "translating the given relation into a number sentence"
                },
                {
                  "step": "$x=218+125$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$343$.",
                  "reason": "computing $218+125$"
                }
              ]
            },
            {
              "prompt": "Find the whole number that, decreased by 17, gives 92.",
              "answer": "109",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Let $x$ be the number, so $x-17=92$.",
                  "reason": "translating the given relation into a number sentence"
                },
                {
                  "step": "$x=92+17$.",
                  "reason": "the definition of subtraction"
                },
                {
                  "step": "$109$.",
                  "reason": "computing $92+17$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t7-k3",
      "forms": [
        {
          "example": {
            "problem": "Compute $8\\times{875}$.",
            "lines": [
              {
                "step": "$875=1\\,000-125$, and $8\\times{125}=1\\,000$.",
                "reason": "writing $875$ as a round number minus a small number whose product with $8$ is a round number"
              },
              {
                "step": "$8\\times{875} = 8\\times(1\\,000-125) = (8\\times{1\\,000})-(8\\times{125})$.",
                "reason": "the distributive law for subtraction"
              },
              {
                "step": "$(8\\times{1\\,000})-(8\\times{125}) = 8\\,000-1\\,000$.",
                "reason": "the two products above"
              },
              {
                "step": "$7\\,000$.",
                "reason": "computing $8\\,000-1\\,000$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $4\\times{975}$.",
              "answer": "3 900",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$975=1\\,000-25$, and $4\\times{25}=100$.",
                  "reason": "writing $975$ as a round number minus a small number whose product with $4$ is a round number"
                },
                {
                  "step": "$4\\times{975} = 4\\times(1\\,000-25) = (4\\times{1\\,000})-(4\\times{25})$.",
                  "reason": "the distributive law for subtraction"
                },
                {
                  "step": "$(4\\times{1\\,000})-(4\\times{25}) = 4\\,000-100$.",
                  "reason": "the two products above"
                },
                {
                  "step": "$3\\,900$.",
                  "reason": "computing $4\\,000-100$"
                }
              ]
            },
            {
              "prompt": "Compute $25\\times{996}$.",
              "answer": "24 900",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$996=1\\,000-4$, and $25\\times{4}=100$.",
                  "reason": "writing $996$ as a round number minus a small number whose product with $25$ is a round number"
                },
                {
                  "step": "$25\\times{996} = 25\\times(1\\,000-4) = (25\\times{1\\,000})-(25\\times{4})$.",
                  "reason": "the distributive law for subtraction"
                },
                {
                  "step": "$(25\\times{1\\,000})-(25\\times{4}) = 25\\,000-100$.",
                  "reason": "the two products above"
                },
                {
                  "step": "$24\\,900$.",
                  "reason": "computing $25\\,000-100$"
                }
              ]
            },
            {
              "prompt": "Compute $16\\times{9\\,875}$.",
              "answer": "158 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$9\\,875=10\\,000-125$, and $16\\times{125}=2\\,000$.",
                  "reason": "writing $9\\,875$ as a round number minus a small number whose product with $16$ is a round number"
                },
                {
                  "step": "$16\\times{9\\,875} = 16\\times(10\\,000-125) = (16\\times{10\\,000})-(16\\times{125})$.",
                  "reason": "the distributive law for subtraction"
                },
                {
                  "step": "$(16\\times{10\\,000})-(16\\times{125}) = 160\\,000-2\\,000$.",
                  "reason": "the two products above"
                },
                {
                  "step": "$158\\,000$.",
                  "reason": "computing $160\\,000-2\\,000$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $103\\times{97}$.",
            "lines": [
              {
                "step": "The factors split as $103=100+3$ and $97=100-3$.",
                "reason": "writing both factors as $100$ plus or minus the same small number"
              },
              {
                "step": "$103\\times{97} = (100+3)(100-3)$.",
                "reason": "substituting the previous line"
              },
              {
                "step": "$(100+3)(100-3) = (100\\times{100})-(3\\times{3})$.",
                "reason": "the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$"
              },
              {
                "step": "$(100\\times{100})-(3\\times{3}) = 10\\,000-9$.",
                "reason": "multiplying $100$ by itself and $3$ by itself"
              },
              {
                "step": "$9\\,991$.",
                "reason": "computing $10\\,000-9$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $94\\times{86}$.",
              "answer": "8 084",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The factors split as $94=90+4$ and $86=90-4$.",
                  "reason": "writing both factors as $90$ plus or minus the same small number"
                },
                {
                  "step": "$94\\times{86} = (90+4)(90-4)$.",
                  "reason": "substituting the previous line"
                },
                {
                  "step": "$(90+4)(90-4) = (90\\times{90})-(4\\times{4})$.",
                  "reason": "the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$"
                },
                {
                  "step": "$(90\\times{90})-(4\\times{4}) = 8\\,100-16$.",
                  "reason": "multiplying $90$ by itself and $4$ by itself"
                },
                {
                  "step": "$8\\,084$.",
                  "reason": "computing $8\\,100-16$"
                }
              ]
            },
            {
              "prompt": "Compute $52\\times{48}$.",
              "answer": "2 496",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The factors split as $52=50+2$ and $48=50-2$.",
                  "reason": "writing both factors as $50$ plus or minus the same small number"
                },
                {
                  "step": "$52\\times{48} = (50+2)(50-2)$.",
                  "reason": "substituting the previous line"
                },
                {
                  "step": "$(50+2)(50-2) = (50\\times{50})-(2\\times{2})$.",
                  "reason": "the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$"
                },
                {
                  "step": "$(50\\times{50})-(2\\times{2}) = 2\\,500-4$.",
                  "reason": "multiplying $50$ by itself and $2$ by itself"
                },
                {
                  "step": "$2\\,496$.",
                  "reason": "computing $2\\,500-4$"
                }
              ]
            },
            {
              "prompt": "Compute $205\\times{195}$.",
              "answer": "39 975",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The factors split as $205=200+5$ and $195=200-5$.",
                  "reason": "writing both factors as $200$ plus or minus the same small number"
                },
                {
                  "step": "$205\\times{195} = (200+5)(200-5)$.",
                  "reason": "substituting the previous line"
                },
                {
                  "step": "$(200+5)(200-5) = (200\\times{200})-(5\\times{5})$.",
                  "reason": "the identity $(x+y)(x-y)=(x\\times{x})-(y\\times{y})$"
                },
                {
                  "step": "$(200\\times{200})-(5\\times{5}) = 40\\,000-25$.",
                  "reason": "multiplying $200$ by itself and $5$ by itself"
                },
                {
                  "step": "$39\\,975$.",
                  "reason": "computing $40\\,000-25$"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [
    {
      "id": "t7-p1",
      "method": "direct proof",
      "statement": "For whole numbers $\\ell,m,n,a,b,c$ with $\\ell\\geq{a}$, $m\\geq{b}$, $n\\geq{c}$: $(\\ell+m+n)-(a+b+c) = (\\ell-a)+(m-b)+(n-c)$.",
      "idea": "Name the three differences. Check that adding them back to $a$, $b$, $c$ returns $\\ell$, $m$, $n$, as the definition of subtraction requires.",
      "lines": [
        {
          "line": "Let $x=\\ell-a$, $y=m-b$, $z=n-c$, each defined since $\\ell\\geq{a}$, $m\\geq{b}$, $n\\geq{c}$.",
          "reason": "the hypothesis, and the definition of subtraction"
        },
        {
          "line": "The equation $(\\ell+m+n)-(a+b+c) = x+y+z$ is equivalent to $(\\ell+m+n) = (a+b+c)+(x+y+z)$.",
          "reason": "the definition of subtraction"
        },
        {
          "line": "$(a+b+c)+(x+y+z) = (x+a)+(y+b)+(z+c)$.",
          "reason": "the associative and commutative laws of addition"
        },
        {
          "line": "$x+a=\\ell$, $y+b=m$, $z+c=n$.",
          "reason": "the definition of $x,y,z$ as $\\ell-a$, $m-b$, $n-c$ and the definition of subtraction"
        },
        {
          "line": "$(a+b+c)+(x+y+z) = \\ell+m+n$.",
          "reason": "substituting the previous line into the line before it"
        },
        {
          "line": "Therefore $(\\ell+m+n)-(a+b+c) = (\\ell-a)+(m-b)+(n-c)$.",
          "reason": "combining the previous lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t7-s1",
      "statement": "For whole numbers $k,m,n$ with $m\\geq{n}$: $km-kn=k(m-n)$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "The equation $km-kn=k(m-n)$ means $km=kn+k(m-n)$.",
            "reason": "the definition of subtraction"
          },
          {
            "line": "$kn+k(m-n) = k\\big(n+(m-n)\\big)$.",
            "reason": "the distributive law"
          },
          {
            "line": "$n+(m-n)=m$.",
            "reason": "the definition of subtraction, since $m-n$ is the number that, added to $n$, gives $m$"
          },
          {
            "line": "$kn+k(m-n) = km$.",
            "reason": "substituting the previous line"
          },
          {
            "line": "Therefore $km-kn=k(m-n)$.",
            "reason": "combining the previous lines, which together prove the equivalent addition statement"
          }
        ]
      }
    },
    {
      "id": "t7-s2",
      "statement": "For whole numbers $a,b,c$ with $c\\leq{a}$ and $a<b$: $a-c<b-c$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "Since $c\\leq{a}$ and $a<b$, also $c<b$, so both $a-c$ and $b-c$ are defined.",
            "reason": "the hypothesis, and the order relation chained through $c\\leq{a}<b$"
          },
          {
            "line": "Let $x=a-c$ and $y=b-c$, so $a=x+c$ and $b=y+c$.",
            "reason": "the definition of subtraction"
          },
          {
            "line": "Since $a<b$, $b=a+p$ for some positive whole number $p$.",
            "reason": "the order-and-addition equivalence"
          },
          {
            "line": "Substituting $a=x+c$ and $b=y+c$ into $b=a+p$ gives $y+c=(x+c)+p$, and $(x+c)+p=(x+p)+c$.",
            "reason": "the associative and commutative laws of addition"
          },
          {
            "line": "Since $y+c$ and $(x+p)+c$ are the same number, $y=(y+c)-c$ and $x+p=\\big((x+p)+c\\big)-c$.",
            "reason": "the definition of subtraction, since a number plus $c$, minus $c$, returns that number"
          },
          {
            "line": "Therefore $y=x+p$ for the positive whole number $p$, so $x<y$, which means $a-c<b-c$.",
            "reason": "the order-and-addition equivalence, and substituting $x=a-c$, $y=b-c$"
          }
        ]
      }
    },
    {
      "id": "t7-s3",
      "statement": "For whole numbers $x>y$: $(x-y)(x+y) = (x\\times{x})-(y\\times{y})$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "$(x-y)(x+y) = (x-y)x+(x-y)y$.",
            "reason": "the distributive law, distributing $(x-y)$ over the sum $x+y$"
          },
          {
            "line": "Here, $(x-y)x=x(x-y)$ and $(x-y)y=y(x-y)$.",
            "reason": "the commutative law of multiplication"
          },
          {
            "line": "Taking $k=x$ and $k=y$ gives $x(x-y) = (x\\times{x})-xy$ and $y(x-y) = xy-(y\\times{y})$.",
            "reason": "the distributive law for subtraction"
          },
          {
            "line": "Let $d_1=(x\\times{x})-xy$ and $d_2=xy-(y\\times{y})$, so $x\\times{x}=d_1+xy$ and $xy=d_2+(y\\times{y})$.",
            "reason": "the definition of subtraction"
          },
          {
            "line": "$x\\times{x} = d_1+\\big(d_2+(y\\times{y})\\big) = (d_1+d_2)+(y\\times{y})$.",
            "reason": "substituting the second equation into the first, then the associative law of addition"
          },
          {
            "line": "Therefore $(x\\times{x})-(y\\times{y}) = d_1+d_2 = x(x-y)+y(x-y) = (x-y)(x+y)$.",
            "reason": "the definition of subtraction, and substituting the previous lines"
          }
        ]
      }
    }
  ]
}
