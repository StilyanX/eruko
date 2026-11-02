// Numbers in Base b: the base b expansion, converting between bases, and arithmetic in a base other than ten.
export default {
  "number": 11,
  "manyParts": false,
  "bare": {
    "prompt": "Find the base 7 expansion of 18.",
    "answer": "(24)_7",
    "form": "Answer as the digits, as in 1011.",
    "solution": [
      "Find the base 7 expansion of 18.",
      "Divide $18$ by $7$: $18=(2\\times 7)+4$.",
      "The quotient $2$ is less than $7$, so divide no further.",
      "$18=(2\\times 7)+4=(24)_7$.",
      "$(24)_7$."
    ]
  },
  "ideas": [
    {
      "name": "Base b expansion",
      "concrete": "The number $23$ has base $5$ expansion $23=(4\\times 5)+3$, written $(43)_5$.",
      "general": "Let $b$ and $N$ be whole numbers with $b\\ge2$. A **base $b$ expansion** of $N$ is a sum $a_nb^n+a_{n-1}b^{n-1}+\\cdots+a_1b+a_0$ with each digit $a_i$ a whole number less than $b$. Write it as $(a_na_{n-1}\\cdots a_1a_0)_b$."
    },
    {
      "name": "Arithmetic in every base",
      "concrete": "In base $7$: $(103)_7+(242)_7=(345)_7$, since $(1\\times 7^2+0\\times 7+3)+(2\\times 7^2+4\\times 7+2)=(1+2)\\times 7^2+(0+4)\\times 7+(3+2)$, which is column-by-column addition.",
      "general": "For every base $b$ with $b\\ge2$, the standard addition, subtraction, and multiplication algorithms apply unchanged. They work digit by digit from the right and use the addition and multiplication facts of that base."
    },
    {
      "name": "Carrying in base b",
      "concrete": "In base $7$: $(64)_7+(25)_7=(122)_7$. The ones digits give $4+5=9=(1\\times 7)+2$, which is one seven and two ones, so write $2$ and carry $1$ to the sevens place. The sevens digits with the carry give $6+2+1=9=(1\\times 7)+2$ sevens, which is one forty-nine and two sevens, so write $2$ and carry $1$ to the forty-nines place.",
      "general": "For a base $b$ with $b\\ge2$: when the digits in the place of $b^k$ add to a total of $b$ or more, write the total as $(1\\times b)+r$ with $r<b$. Write $r$ in that place and carry $1$ to the next place. The reason: $b$ copies of $b^k$ make $b\\times b^k=b^{k+1}$, which is $1$ in the next place, so the sum stays the same and every digit stays less than $b$. Two digits and a carry of at most $1$ add to at most $(b-1)+(b-1)+1=2b-1$, which is less than $2b$, so the next carry is again at most $1$."
    },
    {
      "name": "Trading in base b",
      "concrete": "In base $7$: $(502)_7-(213)_7$. The ones digit $2$ is less than $3$, and the sevens digit is $0$. So trade one forty-nine for seven sevens, then one seven for seven ones: $5\\times 7^2+0\\times 7+2=4\\times 7^2+7\\times 7+2=4\\times 7^2+6\\times 7+9$. Subtract place by place: $(4-2)\\times 7^2+(6-1)\\times 7+(9-3)=2\\times 7^2+5\\times 7+6$, so $(502)_7-(213)_7=(256)_7$.",
      "general": "For a base $b$ with $b\\ge2$: when a digit is less than the digit subtracted from it, trade $1$ from the next place for $b$ in this place, then subtract. The reason: $1\\times b^{k+1}=b\\times b^k$, so taking $1$ from the place of $b^{k+1}$ and adding $b$ to the place of $b^k$ leaves the number the same. The digit $d$ becomes $d+b$, which is at least $b$, so every digit less than $b$ can be subtracted from it. A digit $0$ in the next place first trades from the place above it, and after trading on it is $b-1$."
    }
  ],
  "kinds": [
    {
      "id": "t11-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the base 7 expansion of $3\\,644$.",
            "lines": [
              {
                "step": "Divide $3\\,644$ by $7$: $3\\,644=(520\\times 7)+4$.",
                "reason": "the uniqueness of division-with-remainder gives one quotient and remainder for the division by $7$"
              },
              {
                "step": "The quotient $520$ is still at least $7$, so divide it by $7$ again: $520=(74\\times 7)+2$.",
                "reason": "repeat division-with-remainder on the quotient while it stays at least $7$"
              },
              {
                "step": "The quotient $74$ is still at least $7$, so divide it by $7$ again: $74=(10\\times 7)+4$.",
                "reason": "repeat division-with-remainder on the quotient while it stays at least $7$"
              },
              {
                "step": "The quotient $10$ is still at least $7$, so divide it by $7$ once more: $10=(1\\times 7)+3$. The quotient $1$ is less than $7$, so divide no further.",
                "reason": "repeat division-with-remainder on the quotient until it is less than $7$"
              },
              {
                "step": "Substitute each equation into the one before it: $3\\,644=[(74\\times 7)+2]\\times 7+4=[(10\\times 7+4)\\times 7+2]\\times 7+4=[(1\\times 7+3)\\times 7+4]\\times 7^2+2\\times 7+4=(1\\times 7^4)+(3\\times 7^3)+(4\\times 7^2)+(2\\times 7)+4$.",
                "reason": "substitute each division-with-remainder equation into the one before it and apply the distributive law"
              },
              {
                "step": "$(13424)_7$.",
                "reason": "read off the digits"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the base 3 expansion of $200$.",
              "answer": "(21102)_3",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Divide $200$ by $3$: $200=(66\\times 3)+2$.",
                  "reason": "the uniqueness of division-with-remainder gives one quotient and remainder for the division by $3$"
                },
                {
                  "step": "The quotient $66$ is still at least $3$, so divide it by $3$ again: $66=(22\\times 3)+0$.",
                  "reason": "repeat division-with-remainder on the quotient while it stays at least $3$"
                },
                {
                  "step": "The quotient $22$ is still at least $3$, so divide it by $3$ again: $22=(7\\times 3)+1$.",
                  "reason": "repeat division-with-remainder on the quotient while it stays at least $3$"
                },
                {
                  "step": "The quotient $7$ is still at least $3$, so divide it by $3$ once more: $7=(2\\times 3)+1$. The quotient $2$ is less than $3$, so divide no further.",
                  "reason": "repeat division-with-remainder on the quotient until it is less than $3$"
                },
                {
                  "step": "Substitute each equation into the one before it: $200=[(22\\times 3)+0]\\times 3+2=[(7\\times 3+1)\\times 3+0]\\times 3+2=[(2\\times 3+1)\\times 3+1]\\times 3^2+0\\times 3+2=(2\\times 3^4)+(1\\times 3^3)+(1\\times 3^2)+(0\\times 3)+2$.",
                  "reason": "substitute each division-with-remainder equation into the one before it and apply the distributive law"
                },
                {
                  "step": "$(21102)_3$.",
                  "reason": "read off the digits"
                }
              ]
            },
            {
              "prompt": "Find the base 5 expansion of $1\\,723$.",
              "answer": "(23343)_5",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Divide $1\\,723$ by $5$: $1\\,723=(344\\times 5)+3$.",
                  "reason": "the uniqueness of division-with-remainder gives one quotient and remainder for the division by $5$"
                },
                {
                  "step": "The quotient $344$ is still at least $5$, so divide it by $5$ again: $344=(68\\times 5)+4$.",
                  "reason": "repeat division-with-remainder on the quotient while it stays at least $5$"
                },
                {
                  "step": "The quotient $68$ is still at least $5$, so divide it by $5$ again: $68=(13\\times 5)+3$.",
                  "reason": "repeat division-with-remainder on the quotient while it stays at least $5$"
                },
                {
                  "step": "The quotient $13$ is still at least $5$, so divide it by $5$ once more: $13=(2\\times 5)+3$. The quotient $2$ is less than $5$, so divide no further.",
                  "reason": "repeat division-with-remainder on the quotient until it is less than $5$"
                },
                {
                  "step": "Substitute each equation into the one before it: $1\\,723=[(68\\times 5)+4]\\times 5+3=[(13\\times 5+3)\\times 5+4]\\times 5+3=[(2\\times 5+3)\\times 5+3]\\times 5^2+4\\times 5+3=(2\\times 5^4)+(3\\times 5^3)+(3\\times 5^2)+(4\\times 5)+3$.",
                  "reason": "substitute each division-with-remainder equation into the one before it and apply the distributive law"
                },
                {
                  "step": "$(23343)_5$.",
                  "reason": "read off the digits"
                }
              ]
            },
            {
              "prompt": "Find the base 4 expansion of $873$.",
              "answer": "(31221)_4",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Divide $873$ by $4$: $873=(218\\times 4)+1$.",
                  "reason": "the uniqueness of division-with-remainder gives one quotient and remainder for the division by $4$"
                },
                {
                  "step": "The quotient $218$ is still at least $4$, so divide it by $4$ again: $218=(54\\times 4)+2$.",
                  "reason": "repeat division-with-remainder on the quotient while it stays at least $4$"
                },
                {
                  "step": "The quotient $54$ is still at least $4$, so divide it by $4$ again: $54=(13\\times 4)+2$.",
                  "reason": "repeat division-with-remainder on the quotient while it stays at least $4$"
                },
                {
                  "step": "The quotient $13$ is still at least $4$, so divide it by $4$ once more: $13=(3\\times 4)+1$. The quotient $3$ is less than $4$, so divide no further.",
                  "reason": "repeat division-with-remainder on the quotient until it is less than $4$"
                },
                {
                  "step": "Substitute each equation into the one before it: $873=[(54\\times 4)+2]\\times 4+1=[(13\\times 4+2)\\times 4+2]\\times 4+1=[(3\\times 4+1)\\times 4+2]\\times 4^2+2\\times 4+1=(3\\times 4^4)+(1\\times 4^3)+(2\\times 4^2)+(2\\times 4)+1$.",
                  "reason": "substitute each division-with-remainder equation into the one before it and apply the distributive law"
                },
                {
                  "step": "$(31221)_4$.",
                  "reason": "read off the digits"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t11-k2",
      "forms": [
        {
          "example": {
            "problem": "Compute the whole number equal to $(19096)_{12}$.",
            "lines": [
              {
                "step": "Expand $(19096)_{12}$ by place value: $(1\\times 12^4)+(9\\times 12^3)+(0\\times 12^2)+(9\\times 12)+6$.",
                "reason": "the definition of a base $12$ expansion: each digit multiplies its power of $12$"
              },
              {
                "step": "Compute the needed powers of $12$: $12^4=20\\,736$, $12^3=1\\,728$, $12^2=144$.",
                "reason": "the definition of a power as repeated multiplication"
              },
              {
                "step": "Multiply each digit by its power of $12$: $1\\times 20\\,736=20\\,736$; $9\\times 1\\,728=15\\,552$; $0\\times 144=0$; $9\\times 12=108$. The ones digit is $6$.",
                "reason": "multiplication of whole numbers"
              },
              {
                "step": "Add the terms: $20\\,736+15\\,552+0+108+6=36\\,402$.",
                "reason": "addition of whole numbers"
              },
              {
                "step": "$36\\,402$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute the whole number equal to $(52031)_6$.",
              "answer": "6 931",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Expand $(52031)_6$ by place value: $(5\\times 6^4)+(2\\times 6^3)+(0\\times 6^2)+(3\\times 6)+1$.",
                  "reason": "the definition of a base $6$ expansion: each digit multiplies its power of $6$"
                },
                {
                  "step": "Compute the needed powers of $6$: $6^4=1\\,296$, $6^3=216$, $6^2=36$.",
                  "reason": "the definition of a power as repeated multiplication"
                },
                {
                  "step": "Multiply each digit by its power of $6$: $5\\times 1\\,296=6\\,480$; $2\\times 216=432$; $0\\times 36=0$; $3\\times 6=18$. The ones digit is $1$.",
                  "reason": "multiplication of whole numbers"
                },
                {
                  "step": "Add the terms: $6\\,480+432+0+18+1=6\\,931$.",
                  "reason": "addition of whole numbers"
                },
                {
                  "step": "$6\\,931$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute the whole number equal to $(17064)_8$.",
              "answer": "7 732",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Expand $(17064)_8$ by place value: $(1\\times 8^4)+(7\\times 8^3)+(0\\times 8^2)+(6\\times 8)+4$.",
                  "reason": "the definition of a base $8$ expansion: each digit multiplies its power of $8$"
                },
                {
                  "step": "Compute the needed powers of $8$: $8^4=4\\,096$, $8^3=512$, $8^2=64$.",
                  "reason": "the definition of a power as repeated multiplication"
                },
                {
                  "step": "Multiply each digit by its power of $8$: $1\\times 4\\,096=4\\,096$; $7\\times 512=3\\,584$; $0\\times 64=0$; $6\\times 8=48$. The ones digit is $4$.",
                  "reason": "multiplication of whole numbers"
                },
                {
                  "step": "Add the terms: $4\\,096+3\\,584+0+48+4=7\\,732$.",
                  "reason": "addition of whole numbers"
                },
                {
                  "step": "$7\\,732$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute the whole number equal to $(38015)_9$.",
              "answer": "25 529",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Expand $(38015)_9$ by place value: $(3\\times 9^4)+(8\\times 9^3)+(0\\times 9^2)+(1\\times 9)+5$.",
                  "reason": "the definition of a base $9$ expansion: each digit multiplies its power of $9$"
                },
                {
                  "step": "Compute the needed powers of $9$: $9^4=6\\,561$, $9^3=729$, $9^2=81$.",
                  "reason": "the definition of a power as repeated multiplication"
                },
                {
                  "step": "Multiply each digit by its power of $9$: $3\\times 6\\,561=19\\,683$; $8\\times 729=5\\,832$; $0\\times 81=0$; $1\\times 9=9$. The ones digit is $5$.",
                  "reason": "multiplication of whole numbers"
                },
                {
                  "step": "Add the terms: $19\\,683+5\\,832+0+9+5=25\\,529$.",
                  "reason": "addition of whole numbers"
                },
                {
                  "step": "$25\\,529$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t11-k3",
      "forms": [
        {
          "example": {
            "problem": "Compute $(3456)_7+(4363)_7$.",
            "lines": [
              {
                "step": "Add the ones digits: $6+3=9=(1\\times 7)+2$, so write $2$ and carry $1$.",
                "reason": "the number $9$ is $7$ or more, so rewrite it in base $7$ and carry"
              },
              {
                "step": "Add the next digits with the carry: $5+6+1=12=(1\\times 7)+5$, so write $5$ and carry $1$.",
                "reason": "the column total is $7$ or more again, so rewrite it and carry"
              },
              {
                "step": "Add the next digits with the carry: $4+3+1=8=(1\\times 7)+1$, so write $1$ and carry $1$.",
                "reason": "the column total is $7$ or more again, so rewrite it and carry"
              },
              {
                "step": "Add the leading digits with the carry: $3+4+1=8=(1\\times 7)+1$, so write $1$ and carry $1$. The final carry becomes a new leading digit.",
                "reason": "a final carry becomes the next digit"
              },
              {
                "step": "$(11152)_7$.",
                "reason": "read off the digits"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $(1234)_5+(4213)_5$.",
              "answer": "(11002)_5",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Add the ones digits: $4+3=7=(1\\times 5)+2$, so write $2$ and carry $1$.",
                  "reason": "the number $7$ is $5$ or more, so rewrite it in base $5$ and carry"
                },
                {
                  "step": "Add the next digits with the carry: $3+1+1=5=(1\\times 5)+0$, so write $0$ and carry $1$.",
                  "reason": "the column total is $5$ or more again, so rewrite it and carry"
                },
                {
                  "step": "Add the next digits with the carry: $2+2+1=5=(1\\times 5)+0$, so write $0$ and carry $1$.",
                  "reason": "the column total is $5$ or more again, so rewrite it and carry"
                },
                {
                  "step": "Add the leading digits with the carry: $1+4+1=6=(1\\times 5)+1$, so write $1$ and carry $1$. The final carry becomes a new leading digit.",
                  "reason": "a final carry becomes the next digit"
                },
                {
                  "step": "$(11002)_5$.",
                  "reason": "read off the digits"
                }
              ]
            },
            {
              "prompt": "Compute $(2345)_6+(4524)_6$.",
              "answer": "(11313)_6",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Add the ones digits: $5+4=9=(1\\times 6)+3$, so write $3$ and carry $1$.",
                  "reason": "the number $9$ is $6$ or more, so rewrite it in base $6$ and carry"
                },
                {
                  "step": "Add the next digits with the carry: $4+2+1=7=(1\\times 6)+1$, so write $1$ and carry $1$.",
                  "reason": "the column total is $6$ or more again, so rewrite it and carry"
                },
                {
                  "step": "Add the next digits with the carry: $3+5+1=9=(1\\times 6)+3$, so write $3$ and carry $1$.",
                  "reason": "the column total is $6$ or more again, so rewrite it and carry"
                },
                {
                  "step": "Add the leading digits with the carry: $2+4+1=7=(1\\times 6)+1$, so write $1$ and carry $1$. The final carry becomes a new leading digit.",
                  "reason": "a final carry becomes the next digit"
                },
                {
                  "step": "$(11313)_6$.",
                  "reason": "read off the digits"
                }
              ]
            },
            {
              "prompt": "Compute $(5678)_9+(4385)_9$.",
              "answer": "(11174)_9",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Add the ones digits: $8+5=13=(1\\times 9)+4$, so write $4$ and carry $1$.",
                  "reason": "the number $13$ is $9$ or more, so rewrite it in base $9$ and carry"
                },
                {
                  "step": "Add the next digits with the carry: $7+8+1=16=(1\\times 9)+7$, so write $7$ and carry $1$.",
                  "reason": "the column total is $9$ or more again, so rewrite it and carry"
                },
                {
                  "step": "Add the next digits with the carry: $6+3+1=10=(1\\times 9)+1$, so write $1$ and carry $1$.",
                  "reason": "the column total is $9$ or more again, so rewrite it and carry"
                },
                {
                  "step": "Add the leading digits with the carry: $5+4+1=10=(1\\times 9)+1$, so write $1$ and carry $1$. The final carry becomes a new leading digit.",
                  "reason": "a final carry becomes the next digit"
                },
                {
                  "step": "$(11174)_9$.",
                  "reason": "read off the digits"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t11-k4",
      "forms": [
        {
          "example": {
            "problem": "Compute $(5213)_7-(2465)_7$.",
            "lines": [
              {
                "step": "Subtract the ones digits: $3-5$ needs trading, so trade $7$ from the next place: $3+7-5=5$. The next place loses $1$.",
                "reason": "when a digit is less than the digit subtracted from it, trade a $7$ from the next place"
              },
              {
                "step": "Subtract the next digits, taking off the traded $1$: $1-1=0$. Then $0-6$ needs trading, so trade $7$: $0+7-6=1$, and the next place loses $1$.",
                "reason": "the digit is too small again, so trade a $7$ from the next place"
              },
              {
                "step": "Subtract the next digits, taking off the traded $1$: $2-1=1$. Then $1-4$ needs trading, so trade $7$: $1+7-4=4$, and the next place loses $1$.",
                "reason": "the digit is too small again, so trade a $7$ from the next place"
              },
              {
                "step": "Subtract the leading digits, taking off the traded $1$: $5-1=4$, and $4-2=2$, with no further trade needed.",
                "reason": "the leading digit is large enough, so the subtraction ends"
              },
              {
                "step": "$(2415)_7$.",
                "reason": "read off the digits"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $(4213)_5-(1234)_5$.",
              "answer": "(2424)_5",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Subtract the ones digits: $3-4$ needs trading, so trade $5$ from the next place: $3+5-4=4$. The next place loses $1$.",
                  "reason": "when a digit is less than the digit subtracted from it, trade a $5$ from the next place"
                },
                {
                  "step": "Subtract the next digits, taking off the traded $1$: $1-1=0$. Then $0-3$ needs trading, so trade $5$: $0+5-3=2$, and the next place loses $1$.",
                  "reason": "the digit is too small again, so trade a $5$ from the next place"
                },
                {
                  "step": "Subtract the next digits, taking off the traded $1$: $2-1=1$. Then $1-2$ needs trading, so trade $5$: $1+5-2=4$, and the next place loses $1$.",
                  "reason": "the digit is too small again, so trade a $5$ from the next place"
                },
                {
                  "step": "Subtract the leading digits, taking off the traded $1$: $4-1=3$, and $3-1=2$, with no further trade needed.",
                  "reason": "the leading digit is large enough, so the subtraction ends"
                },
                {
                  "step": "$(2424)_5$.",
                  "reason": "read off the digits"
                }
              ]
            },
            {
              "prompt": "Compute $(6215)_8-(3427)_8$.",
              "answer": "(2566)_8",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Subtract the ones digits: $5-7$ needs trading, so trade $8$ from the next place: $5+8-7=6$. The next place loses $1$.",
                  "reason": "when a digit is less than the digit subtracted from it, trade a $8$ from the next place"
                },
                {
                  "step": "Subtract the next digits, taking off the traded $1$: $1-1=0$. Then $0-2$ needs trading, so trade $8$: $0+8-2=6$, and the next place loses $1$.",
                  "reason": "the digit is too small again, so trade a $8$ from the next place"
                },
                {
                  "step": "Subtract the next digits, taking off the traded $1$: $2-1=1$. Then $1-4$ needs trading, so trade $8$: $1+8-4=5$, and the next place loses $1$.",
                  "reason": "the digit is too small again, so trade a $8$ from the next place"
                },
                {
                  "step": "Subtract the leading digits, taking off the traded $1$: $6-1=5$, and $5-3=2$, with no further trade needed.",
                  "reason": "the leading digit is large enough, so the subtraction ends"
                },
                {
                  "step": "$(2566)_8$.",
                  "reason": "read off the digits"
                }
              ]
            },
            {
              "prompt": "Compute $(7324)_9-(4568)_9$.",
              "answer": "(2645)_9",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Subtract the ones digits: $4-8$ needs trading, so trade $9$ from the next place: $4+9-8=5$. The next place loses $1$.",
                  "reason": "when a digit is less than the digit subtracted from it, trade a $9$ from the next place"
                },
                {
                  "step": "Subtract the next digits, taking off the traded $1$: $2-1=1$. Then $1-6$ needs trading, so trade $9$: $1+9-6=4$, and the next place loses $1$.",
                  "reason": "the digit is too small again, so trade a $9$ from the next place"
                },
                {
                  "step": "Subtract the next digits, taking off the traded $1$: $3-1=2$. Then $2-5$ needs trading, so trade $9$: $2+9-5=6$, and the next place loses $1$.",
                  "reason": "the digit is too small again, so trade a $9$ from the next place"
                },
                {
                  "step": "Subtract the leading digits, taking off the traded $1$: $7-1=6$, and $6-4=2$, with no further trade needed.",
                  "reason": "the leading digit is large enough, so the subtraction ends"
                },
                {
                  "step": "$(2645)_9$.",
                  "reason": "read off the digits"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t11-k5",
      "forms": [
        {
          "example": {
            "problem": "Compute $(265)_7\\times(4)_7$.",
            "lines": [
              {
                "step": "Multiply the ones digit by $4$: $5\\times 4=20=(2\\times 7)+6$. Write $6$ and carry $2$.",
                "reason": "looking up $5\\times 4$ in the base $7$ multiplication facts, then splitting the result into a carry and a ones digit"
              },
              {
                "step": "Multiply the sevens digit by $4$ and add the carry: $(6\\times 4)+2=26=(3\\times 7)+5$. Write $5$ and carry $3$.",
                "reason": "multiplying the next digit by $4$, adding the carried amount, and rewriting the result in base $7$"
              },
              {
                "step": "Multiply the forty-nines digit by $4$ and add the carry: $(2\\times 4)+3=11=(1\\times 7)+4$. Write $4$ and carry $1$.",
                "reason": "multiplying the next digit by $4$, adding the carried amount, and rewriting the result in base $7$"
              },
              {
                "step": "Write the final carry, $1$, in the next place, since no digits remain there: $(265)_7\\times(4)_7=(1456)_7$.",
                "reason": "a final carry becomes the leading digit"
              },
              {
                "step": "$(1456)_7$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $(243)_5\\times(4)_5$.",
              "answer": "(2132)_5",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Multiply the ones digit by $4$: $3\\times 4=12=(2\\times 5)+2$. Write $2$ and carry $2$.",
                  "reason": "looking up $3\\times 4$ in the base $5$ multiplication facts, then splitting the result into a carry and a ones digit"
                },
                {
                  "step": "Multiply the fives digit by $4$ and add the carry: $(4\\times 4)+2=18=(3\\times 5)+3$. Write $3$ and carry $3$.",
                  "reason": "multiplying the next digit by $4$, adding the carried amount, and rewriting the result in base $5$"
                },
                {
                  "step": "Multiply the twenty-fives digit by $4$ and add the carry: $(2\\times 4)+3=11=(2\\times 5)+1$. Write $1$ and carry $2$.",
                  "reason": "multiplying the next digit by $4$, adding the carried amount, and rewriting the result in base $5$"
                },
                {
                  "step": "Write the final carry, $2$, in the next place, since no digits remain there: $(243)_5\\times(4)_5=(2132)_5$.",
                  "reason": "a final carry becomes the leading digit"
                },
                {
                  "step": "$(2132)_5$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $(354)_6\\times(5)_6$.",
              "answer": "(3142)_6",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Multiply the ones digit by $5$: $4\\times 5=20=(3\\times 6)+2$. Write $2$ and carry $3$.",
                  "reason": "looking up $4\\times 5$ in the base $6$ multiplication facts, then splitting the result into a carry and a ones digit"
                },
                {
                  "step": "Multiply the sixes digit by $5$ and add the carry: $(5\\times 5)+3=28=(4\\times 6)+4$. Write $4$ and carry $4$.",
                  "reason": "multiplying the next digit by $5$, adding the carried amount, and rewriting the result in base $6$"
                },
                {
                  "step": "Multiply the thirty-sixes digit by $5$ and add the carry: $(3\\times 5)+4=19=(3\\times 6)+1$. Write $1$ and carry $3$.",
                  "reason": "multiplying the next digit by $5$, adding the carried amount, and rewriting the result in base $6$"
                },
                {
                  "step": "Write the final carry, $3$, in the next place, since no digits remain there: $(354)_6\\times(5)_6=(3142)_6$.",
                  "reason": "a final carry becomes the leading digit"
                },
                {
                  "step": "$(3142)_6$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $(576)_8\\times(7)_8$.",
              "answer": "(5162)_8",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Multiply the ones digit by $7$: $6\\times 7=42=(5\\times 8)+2$. Write $2$ and carry $5$.",
                  "reason": "looking up $6\\times 7$ in the base $8$ multiplication facts, then splitting the result into a carry and a ones digit"
                },
                {
                  "step": "Multiply the eights digit by $7$ and add the carry: $(7\\times 7)+5=54=(6\\times 8)+6$. Write $6$ and carry $6$.",
                  "reason": "multiplying the next digit by $7$, adding the carried amount, and rewriting the result in base $8$"
                },
                {
                  "step": "Multiply the sixty-fours digit by $7$ and add the carry: $(5\\times 7)+6=41=(5\\times 8)+1$. Write $1$ and carry $5$.",
                  "reason": "multiplying the next digit by $7$, adding the carried amount, and rewriting the result in base $8$"
                },
                {
                  "step": "Write the final carry, $5$, in the next place, since no digits remain there: $(576)_8\\times(7)_8=(5162)_8$.",
                  "reason": "a final carry becomes the leading digit"
                },
                {
                  "step": "$(5162)_8$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t11-k6",
      "forms": [
        {
          "example": {
            "problem": "Compute $(265)_7\\times(34)_7$.",
            "lines": [
              {
                "step": "Multiply $(265)_7$ by the ones digit of $(34)_7$: $(265)_7\\times(4)_7=(1456)_7$.",
                "reason": "multiply the first factor by the ones digit of the second factor"
              },
              {
                "step": "Multiply $(265)_7$ by the sevens digit of $(34)_7$: $(265)_7\\times(3)_7=(1161)_7$.",
                "reason": "multiply the first factor by the next digit of the second factor"
              },
              {
                "step": "Shift $(1161)_7$ one column to the left, since the digit $3$ is in the sevens place.",
                "reason": "multiplying by the base shifts a numeral one column to the left"
              },
              {
                "step": "Add $(1456)_7$ and $(1161)_7$ shifted one column left, using the base $7$ addition algorithm.",
                "reason": "the distributive law, adding the partial products"
              },
              {
                "step": "$(13366)_7$.",
                "reason": "read off the sum"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $(1234)_5\\times(21)_5$.",
              "answer": "(32014)_5",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Multiply $(1234)_5$ by the ones digit of $(21)_5$: $(1234)_5\\times(1)_5=(1234)_5$.",
                  "reason": "multiply the first factor by the ones digit of the second factor"
                },
                {
                  "step": "Multiply $(1234)_5$ by the fives digit of $(21)_5$: $(1234)_5\\times(2)_5=(3023)_5$.",
                  "reason": "multiply the first factor by the next digit of the second factor"
                },
                {
                  "step": "Shift $(3023)_5$ one column to the left, since the digit $2$ is in the fives place.",
                  "reason": "multiplying by the base shifts a numeral one column to the left"
                },
                {
                  "step": "Add $(1234)_5$ and $(3023)_5$ shifted one column left, using the base $5$ addition algorithm.",
                  "reason": "the distributive law, adding the partial products"
                },
                {
                  "step": "$(32014)_5$.",
                  "reason": "read off the sum"
                }
              ]
            },
            {
              "prompt": "Compute $(30121)_4\\times(12)_4$.",
              "answer": "(1022112)_4",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Multiply $(30121)_4$ by the ones digit of $(12)_4$: $(30121)_4\\times(2)_4=(120302)_4$.",
                  "reason": "multiply the first factor by the ones digit of the second factor"
                },
                {
                  "step": "Multiply $(30121)_4$ by the fours digit of $(12)_4$: $(30121)_4\\times(1)_4=(30121)_4$.",
                  "reason": "multiply the first factor by the next digit of the second factor"
                },
                {
                  "step": "Shift $(30121)_4$ one column to the left, since the digit $1$ is in the fours place.",
                  "reason": "multiplying by the base shifts a numeral one column to the left"
                },
                {
                  "step": "Add $(120302)_4$ and $(30121)_4$ shifted one column left, using the base $4$ addition algorithm.",
                  "reason": "the distributive law, adding the partial products"
                },
                {
                  "step": "$(1022112)_4$.",
                  "reason": "read off the sum"
                }
              ]
            },
            {
              "prompt": "Compute $(1331)_9\\times(13)_9$.",
              "answer": "(17413)_9",
              "form": "Answer as the digits, as in 1011.",
              "lines": [
                {
                  "step": "Multiply $(1331)_9$ by the ones digit of $(13)_9$: $(1331)_9\\times(3)_9=(4103)_9$.",
                  "reason": "multiply the first factor by the ones digit of the second factor"
                },
                {
                  "step": "Multiply $(1331)_9$ by the nines digit of $(13)_9$: $(1331)_9\\times(1)_9=(1331)_9$.",
                  "reason": "multiply the first factor by the next digit of the second factor"
                },
                {
                  "step": "Shift $(1331)_9$ one column to the left, since the digit $1$ is in the nines place.",
                  "reason": "multiplying by the base shifts a numeral one column to the left"
                },
                {
                  "step": "Add $(4103)_9$ and $(1331)_9$ shifted one column left, using the base $9$ addition algorithm.",
                  "reason": "the distributive law, adding the partial products"
                },
                {
                  "step": "$(17413)_9$.",
                  "reason": "read off the sum"
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
      "id": "t11-p1",
      "method": "proof of existence by construction",
      "statement": "If $b$ is a whole number with $b\\ge2$, every whole number has a base $b$ expansion.",
      "idea": "Divide repeatedly by $b$ until the quotient is less than $b$. Then substitute each equation into the one before it.",
      "lines": [
        {
          "line": "Divide $N$ by $b$: $N=q_1b+a_0$ with $0\\le a_0<b$.",
          "reason": "the uniqueness of division-with-remainder gives one quotient and remainder for the division by $b$"
        },
        {
          "line": "If $q_1$ is less than $b$, stop. Otherwise divide $q_1$ by $b$ to get $q_1=q_2b+a_1$ with $0\\le a_1<b$, and divide each new quotient by $b$ the same way.",
          "reason": "repeating division-with-remainder on the quotient while it stays at least $b$"
        },
        {
          "line": "Each new quotient comes from dividing the previous one by $b$, so the quotients strictly decrease. A strictly decreasing sequence of whole numbers cannot decrease forever. So after finitely many divisions some quotient $q_n$ is less than $b$, and $a_n=q_n$.",
          "reason": "a strictly decreasing sequence of whole numbers becomes less than $b$ after finitely many steps"
        },
        {
          "line": "Substituting each equation into the one before it and applying the distributive law gives $N=a_nb^n+a_{n-1}b^{n-1}+\\cdots+a_1b+a_0$. Every $a_i$ is a whole number less than $b$.",
          "reason": "substituting each division-with-remainder equation into the one before it"
        },
        {
          "line": "So $N$ has a base $b$ expansion.",
          "reason": "the previous line shows $N$ as a sum of the required form"
        }
      ]
    },
    {
      "id": "t11-p2",
      "method": "induction",
      "statement": "If $b$ is a whole number with $b\\ge2$, a whole number's base $b$ expansion is unique.",
      "idea": "Compare two expansions of the same number one digit at a time. The uniqueness of division-with-remainder matches each digit in turn.",
      "lines": [
        {
          "line": "Suppose that $N=a_nb^n+\\cdots+a_1b+a_0=c_nb^n+\\cdots+c_1b+c_0$, with every $a_i$ and every $c_i$ a whole number less than $b$. Pad the shorter expansion with leading zero digits so both have the same length.",
          "reason": "assuming that $N$ has two base $b$ expansions, to compare them"
        },
        {
          "line": "Group the first sum as $N=(a_nb^{n-1}+\\cdots+a_1)\\times b+a_0$ and the second as $N=(c_nb^{n-1}+\\cdots+c_1)\\times b+c_0$. Since $a_0$ and $c_0$ are both less than $b$, both equations are divisions-with-remainder of $N$ by $b$.",
          "reason": "factoring $b$ out of every term but the last, which shows each sum is a division-with-remainder of $N$ by $b$"
        },
        {
          "line": "The quotient and remainder of a division-with-remainder are unique, so $a_0=c_0$ and $a_nb^{n-1}+\\cdots+a_1=c_nb^{n-1}+\\cdots+c_1$.",
          "reason": "the quotient and remainder of $N$ divided by $b$ are unique"
        },
        {
          "line": "Apply the same grouping step to $a_nb^{n-1}+\\cdots+a_1=c_nb^{n-1}+\\cdots+c_1$ as a division-with-remainder by $b$ with remainders $a_1,c_1$. This gives $a_1=c_1$ and a shorter equality with one fewer term. Applying the step $n$ times in total matches every remaining digit, so $a_1=c_1,a_2=c_2,\\ldots,a_n=c_n$.",
          "reason": "each application of the grouping step matches one more digit, so $n$ applications match every remaining digit"
        },
        {
          "line": "The two expansions have the same digit at every place. So they are the same base $b$ expansion.",
          "reason": "combining the digit matches above"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t11-s1",
      "statement": "Take a whole number $b$ with $b\\ge2$ and a whole number $n$. A whole number $N$ has a base $b$ expansion with exactly $n+1$ digits, the leading one nonzero, exactly when $b^n\\le N<b^{n+1}$.",
      "method": "proof of existence by construction",
      "check": {
        "proof": [
          {
            "line": "Divide $N$ repeatedly by $b$, as in the construction of a base $b$ expansion. This gives digits $a_0,a_1,\\ldots,a_m$ with $N=a_mb^m+\\cdots+a_1b+a_0$ and every $a_i$ less than $b$.",
            "reason": "repeated division-with-remainder constructs the base $b$ expansion of $N$"
          },
          {
            "line": "If $a_m$, the leading digit, were $0$, the sum would equal $a_{m-1}b^{m-1}+\\cdots+a_0$, a sum of only $m$ terms. So the leading digit of the expansion with the fewest terms is never $0$. Call that count of terms $n+1$.",
            "reason": "a leading digit of $0$ contributes nothing, so count the digits from the first nonzero digit"
          },
          {
            "line": "For every whole number $m$, a sum $a_mb^m+a_{m-1}b^{m-1}+\\cdots+a_0$ with every digit less than $b$ is less than $b^{m+1}$. This holds for $m=0$, since $a_0<b=b^1$. If it holds for $m-1$, then $a_mb^m+(a_{m-1}b^{m-1}+\\cdots+a_0)<a_mb^m+b^m=(a_m+1)b^m\\le b\\times b^m=b^{m+1}$, because $a_m\\le b-1$, so it holds for $m$ too.",
            "reason": "induction on the number of terms in the sum"
          },
          {
            "line": "Because the leading digit $a_n$ is a whole number and not $0$, it is at least $1$. So $N=a_nb^n+\\cdots+a_0$ is at least $b^n$. By the previous line, $N$ is less than $b^{n+1}$.",
            "reason": "combining the lower bound from the leading digit with the upper bound above"
          },
          {
            "line": "The intervals $b^k\\le N<b^{k+1}$ for different whole numbers $k$ do not overlap. If $j<k$, then $b^{j+1}\\le b^k$, so a number less than $b^{j+1}$ is less than $b^k$ and not in the interval for $k$. So a number $N$ with $b^n\\le N<b^{n+1}$ lies in no other interval, and its expansion has exactly $n+1$ digits.",
            "reason": "the powers of $b$ increase with the exponent because $b\\ge2$, so $b^{j+1}\\le b^k$ when $j<k$"
          },
          {
            "line": "So $N$ has a base $b$ expansion with exactly $n+1$ digits, the leading one nonzero, exactly when $b^n\\le N<b^{n+1}$.",
            "reason": "combining the bounds above"
          }
        ]
      }
    },
    {
      "id": "t11-s2",
      "statement": "Take a whole number $b$ with $b\\ge2$ and a whole number $n>0$. The digit string with $n$ copies of the digit $b-1$, that is $(\\underbrace{(b-1)(b-1)\\cdots(b-1)}_{n})_b$, plus $(1)_b$, equals $(1\\,\\underbrace{0\\cdots0}_{n})_b$.",
      "method": "induction",
      "check": {
        "proof": [
          {
            "line": "The base case is $n=1$. The digit string is $(b-1)_b$, which equals $b-1$. Adding $1$ gives $b$, which is $(10)_b$, one digit followed by one $0$.",
            "reason": "a single digit $b-1$ plus $1$ equals $b$, the base itself"
          },
          {
            "line": "In the inductive step, suppose that $(\\underbrace{(b-1)\\cdots(b-1)}_{k})_b+1=b^k$, which is $1$ followed by $k$ zeros.",
            "reason": "assuming that the claim holds for $k$ copies, to extend it to $k+1$ copies"
          },
          {
            "line": "The digit string with $k+1$ copies of $b-1$ equals $(b-1)\\times b^k$ plus the digit string with $k$ copies of $b-1$. The extra leading digit $b-1$ contributes $(b-1)\\times b^k$.",
            "reason": "the base $b$ expansion of a $(k+1)$-digit string separates its leading digit from the rest, by the distributive law"
          },
          {
            "line": "Adding $1$: $(b-1)\\times b^k+\\left[\\text{the digit string with $k$ copies of $b-1$}+1\\right]=(b-1)\\times b^k+b^k=b\\times b^k=b^{k+1}$.",
            "reason": "substituting the inductive hypothesis, then combining the two terms, each a multiple of $b^k$"
          },
          {
            "line": "The power $b^{k+1}$ is $1$ followed by $k+1$ zeros in base $b$. So the digit string with $k+1$ copies of $b-1$ plus $1$ equals $1$ followed by $k+1$ zeros.",
            "reason": "a power of $b$ by itself is the base $b$ expansion with a single $1$ followed by that many zeros"
          },
          {
            "line": "The base case and the inductive step together show that for every whole number $n>0$, $(\\underbrace{(b-1)\\cdots(b-1)}_{n})_b+(1)_b=(1\\,\\underbrace{0\\cdots0}_{n})_b$.",
            "reason": "combining the base case and the inductive step"
          }
        ]
      }
    }
  ]
}
