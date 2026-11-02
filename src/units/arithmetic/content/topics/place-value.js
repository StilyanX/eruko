// Place Value: counting, place value, expanded form, and multiplying by a power of 10.
export default {
  "number": 1,
  "manyParts": true,
  "ideas": [
    {
      "name": "Counting the whole numbers",
      "concrete": "Counting from $0$ one step at a time reaches $0$, $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $9$.",
      "general": "Counting from $0$ one step at a time, in order, without end, produces the **whole numbers**: $0$, $1$, $2$, $3$, and so on.",
      "definitions": [
        "A **digit** is one of the ten symbols $0$, $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $9$.",
        "A **numeral** is a row of digits."
      ]
    },
    {
      "name": "Addition as counting on",
      "concrete": "Counting five steps from $4$ reaches $9$, so the sum $4+5$ equals $9$.",
      "general": "The sum $a+b$ of whole numbers $a$ and $b$ is the whole number reached by counting $b$ steps from $a$."
    },
    {
      "name": "Place value from counting",
      "concrete": "In the number $728$, reaching the numeral $700$ takes $700$ steps, and $28$ more steps reach $728$. So the digit $7$ stands for $700$, the digit $2$ stands for $20$, and the digit $8$ stands for $8$.",
      "general": "A digit $d$ in the place with place value $10^k$ stands for $d\\times10^k$. This holds because counting to the numeral $d$ followed by $k$ zeros takes $d\\times10^k$ steps.",
      "definitions": [
        "The **place value** of a place is the power of 10 assigned to its position.",
        "The **ones** place has place value $10^0$, the **tens** place $10^1$, the **hundreds** place $10^2$, and the **thousands** place $10^3$."
      ]
    },
    {
      "name": "Expanded form",
      "concrete": "The number $3\\,728$ equals $3\\,000+700+20+8$.",
      "general": "For a whole number with digits $d_k d_{k-1}\\cdots d_1 d_0$ written from left to right, the number equals $d_k\\times10^k+d_{k-1}\\times10^{k-1}+\\cdots+d_1\\times10+d_0$.",
      "definitions": [
        "The **expanded form** of a number is the sum of each digit times its place value."
      ]
    },
    {
      "name": "Multiplication as repeated addition",
      "concrete": "The product $3\\times5$ equals the sum of three copies of $5$: $5+5+5=15$.",
      "general": "For whole numbers $m$ and $k$ with $m$ nonzero, the **product** $mk$ is the sum of $m$ copies of $k$: $k+k+\\cdots+k$. The product $0\\times k$ equals $0$ for every whole number $k$."
    },
    {
      "name": "Exponential notation for powers of 10",
      "concrete": "The power $10^3$ equals the product of three copies of $10$: $10\\times10\\times10=1\\,000$.",
      "general": "For every positive whole number $n$, the power $10^n$ is the product of $n$ copies of $10$. For whole numbers $p$ and $q$, $10^p\\times10^q=10^{p+q}$, since the $p$ copies and the $q$ copies of $10$ make $p+q$ copies.",
      "definitions": [
        "For a positive whole number $n$, the **exponent** of $10$ in $10^n$ counts the copies of $10$ multiplied together.",
        "By definition, the power $10^0$ equals $1$."
      ]
    },
    {
      "name": "Attaching zeros to multiply by a power of 10",
      "concrete": "The product $37\\times1\\,000$ equals $37\\,000$, which is $37$ with three zeros attached.",
      "general": "Take a whole number $n$ and a nonzero whole number $k$. The product $n\\times10^k$ is $n$ with $k$ zeros attached to the right."
    }
  ],
  "kinds": [
    {
      "id": "t1-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the number reached by counting $5\\,164$ more from $6\\,490\\,721$.",
            "lines": [
              {
                "step": "Counting $5\\,000$ more from $6\\,490\\,721$ reaches $6\\,495\\,721$.",
                "reason": "adding five to the thousands digit changes only the thousands and higher digits, since $5\\,000$ is five thousands"
              },
              {
                "step": "Counting $100$ more from $6\\,495\\,721$ reaches $6\\,495\\,821$.",
                "reason": "counting $100$ more changes only the hundreds and lower digits, with no carry into the thousands place"
              },
              {
                "step": "Counting $60$ more from $6\\,495\\,821$ reaches $6\\,495\\,881$.",
                "reason": "counting $60$ more changes only the tens and ones digits, with no carry into the hundreds place"
              },
              {
                "step": "Counting $4$ more from $6\\,495\\,881$ reaches $6\\,495\\,885$.",
                "reason": "counting $4$ more changes only the ones digit, with no carry into the tens place"
              },
              {
                "step": "$6\\,495\\,885$.",
                "reason": "the count $5\\,164$ splits into $5\\,000$, then $100$, then $60$, then $4$ more steps, each already counted above"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number reached by counting $3\\,215$ more from $4\\,162\\,532$.",
              "answer": "4 165 747",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Counting $3\\,000$ more from $4\\,162\\,532$ reaches $4\\,165\\,532$.",
                  "reason": "adding three to the thousands digit changes only the thousands and higher digits, since $3\\,000$ is three thousands"
                },
                {
                  "step": "Counting $200$ more from $4\\,165\\,532$ reaches $4\\,165\\,732$.",
                  "reason": "counting $200$ more changes only the hundreds and lower digits, with no carry into the thousands place"
                },
                {
                  "step": "Counting $10$ more from $4\\,165\\,732$ reaches $4\\,165\\,742$.",
                  "reason": "counting $10$ more changes only the tens and ones digits, with no carry into the hundreds place"
                },
                {
                  "step": "Counting $5$ more from $4\\,165\\,742$ reaches $4\\,165\\,747$.",
                  "reason": "counting $5$ more changes only the ones digit, with no carry into the tens place"
                },
                {
                  "step": "$4\\,165\\,747$.",
                  "reason": "the count $3\\,215$ splits into $3\\,000$, then $200$, then $10$, then $5$ more steps, each already counted above"
                }
              ]
            },
            {
              "prompt": "Find the number reached by counting $2\\,413$ more from $830\\,154$.",
              "answer": "832 567",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Counting $2\\,000$ more from $830\\,154$ reaches $832\\,154$.",
                  "reason": "adding two to the thousands digit changes only the thousands and higher digits, since $2\\,000$ is two thousands"
                },
                {
                  "step": "Counting $400$ more from $832\\,154$ reaches $832\\,554$.",
                  "reason": "counting $400$ more changes only the hundreds and lower digits, with no carry into the thousands place"
                },
                {
                  "step": "Counting $10$ more from $832\\,554$ reaches $832\\,564$.",
                  "reason": "counting $10$ more changes only the tens and ones digits, with no carry into the hundreds place"
                },
                {
                  "step": "Counting $3$ more from $832\\,564$ reaches $832\\,567$.",
                  "reason": "counting $3$ more changes only the ones digit, with no carry into the tens place"
                },
                {
                  "step": "$832\\,567$.",
                  "reason": "the count $2\\,413$ splits into $2\\,000$, then $400$, then $10$, then $3$ more steps, each already counted above"
                }
              ]
            },
            {
              "prompt": "Find the number reached by counting $6\\,342$ more from $27\\,103\\,425$.",
              "answer": "27 109 767",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Counting $6\\,000$ more from $27\\,103\\,425$ reaches $27\\,109\\,425$.",
                  "reason": "adding six to the thousands digit changes only the thousands and higher digits, since $6\\,000$ is six thousands"
                },
                {
                  "step": "Counting $300$ more from $27\\,109\\,425$ reaches $27\\,109\\,725$.",
                  "reason": "counting $300$ more changes only the hundreds and lower digits, with no carry into the thousands place"
                },
                {
                  "step": "Counting $40$ more from $27\\,109\\,725$ reaches $27\\,109\\,765$.",
                  "reason": "counting $40$ more changes only the tens and ones digits, with no carry into the hundreds place"
                },
                {
                  "step": "Counting $2$ more from $27\\,109\\,765$ reaches $27\\,109\\,767$.",
                  "reason": "counting $2$ more changes only the ones digit, with no carry into the tens place"
                },
                {
                  "step": "$27\\,109\\,767$.",
                  "reason": "the count $6\\,342$ splits into $6\\,000$, then $300$, then $40$, then $2$ more steps, each already counted above"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the whole number to add to $58\\times10^4$ to reach $63\\times10^4$.",
            "lines": [
              {
                "step": "Counting from $58$ to $63$ takes five steps.",
                "reason": "the sum $58+5$ equals $63$, by counting five steps from $58$"
              },
              {
                "step": "Reaching $63\\times10^4$ from $58\\times10^4$ takes the five extra copies of $10^4$, namely $5\\times10^4$.",
                "reason": "multiplication is repeated addition, and going from $58$ copies of $10^4$ to $63$ copies adds five more copies"
              },
              {
                "step": "The product $5\\times10^4$ equals $50\\,000$.",
                "reason": "the power $10^4$ equals $10\\,000$, and five copies of $10\\,000$ is $50\\,000$"
              },
              {
                "step": "$50\\,000$.",
                "reason": "the count of steps is the number added"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole number to add to $46\\times10^3$ to reach $52\\times10^3$.",
              "answer": "6 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Counting from $46$ to $52$ takes six steps.",
                  "reason": "the sum $46+6$ equals $52$, by counting six steps from $46$"
                },
                {
                  "step": "Reaching $52\\times10^3$ from $46\\times10^3$ takes the six extra copies of $10^3$, namely $6\\times10^3$.",
                  "reason": "multiplication is repeated addition, and going from $46$ copies of $10^3$ to $52$ copies adds six more copies"
                },
                {
                  "step": "The product $6\\times10^3$ equals $6\\,000$.",
                  "reason": "the power $10^3$ equals $1\\,000$, and six copies of $1\\,000$ is $6\\,000$"
                },
                {
                  "step": "$6\\,000$.",
                  "reason": "the count of steps is the number added"
                }
              ]
            },
            {
              "prompt": "Find the whole number to add to $71\\times10^6$ to reach $79\\times10^6$.",
              "answer": "8 000 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Counting from $71$ to $79$ takes eight steps.",
                  "reason": "the sum $71+8$ equals $79$, by counting eight steps from $71$"
                },
                {
                  "step": "Reaching $79\\times10^6$ from $71\\times10^6$ takes the eight extra copies of $10^6$, namely $8\\times10^6$.",
                  "reason": "multiplication is repeated addition, and going from $71$ copies of $10^6$ to $79$ copies adds eight more copies"
                },
                {
                  "step": "The product $8\\times10^6$ equals $8\\,000\\,000$.",
                  "reason": "the power $10^6$ equals $1\\,000\\,000$, and eight copies of $1\\,000\\,000$ is $8\\,000\\,000$"
                },
                {
                  "step": "$8\\,000\\,000$.",
                  "reason": "the count of steps is the number added"
                }
              ]
            },
            {
              "prompt": "Find the whole number to add to $52\\times10^5$ to reach $59\\times10^5$.",
              "answer": "700 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Counting from $52$ to $59$ takes seven steps.",
                  "reason": "the sum $52+7$ equals $59$, by counting seven steps from $52$"
                },
                {
                  "step": "Reaching $59\\times10^5$ from $52\\times10^5$ takes the seven extra copies of $10^5$, namely $7\\times10^5$.",
                  "reason": "multiplication is repeated addition, and going from $52$ copies of $10^5$ to $59$ copies adds seven more copies"
                },
                {
                  "step": "The product $7\\times10^5$ equals $700\\,000$.",
                  "reason": "the power $10^5$ equals $100\\,000$, and seven copies of $100\\,000$ is $700\\,000$"
                },
                {
                  "step": "$700\\,000$.",
                  "reason": "the count of steps is the number added"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t1-k2",
      "forms": [
        {
          "example": {
            "problem": "Compute the whole number equal to $1\\times10^7+4\\times10^6+6\\times10^5+4\\times100+1\\times10+8$.",
            "lines": [
              {
                "step": "The terms equal $10\\,000\\,000$, $4\\,000\\,000$, $600\\,000$, $400$, $10$, and $8$.",
                "reason": "each term is a digit times its place value"
              },
              {
                "step": "The sum $10\\,000\\,000+4\\,000\\,000$ equals $14\\,000\\,000$, and $14\\,000\\,000+600\\,000$ equals $14\\,600\\,000$.",
                "reason": "adding the terms from the greatest place value down"
              },
              {
                "step": "The sum $14\\,600\\,000+400$ equals $14\\,600\\,400$, and $14\\,600\\,400+10$ equals $14\\,600\\,410$.",
                "reason": "adding the remaining terms in order of place value"
              },
              {
                "step": "$14\\,600\\,418$.",
                "reason": "the sum $14\\,600\\,410+8$ equals $14\\,600\\,418$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute the whole number equal to $3\\times10^8+5\\times10^7+2\\times10^4+7\\times1\\,000+6\\times10+4$.",
              "answer": "350 027 064",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The terms equal $300\\,000\\,000$, $50\\,000\\,000$, $20\\,000$, $7\\,000$, $60$, and $4$.",
                  "reason": "each term is a digit times its place value"
                },
                {
                  "step": "The sum $300\\,000\\,000+50\\,000\\,000$ equals $350\\,000\\,000$, and $350\\,000\\,000+20\\,000$ equals $350\\,020\\,000$.",
                  "reason": "adding the terms from the greatest place value down"
                },
                {
                  "step": "The sum $350\\,020\\,000+7\\,000$ equals $350\\,027\\,000$, and $350\\,027\\,000+60$ equals $350\\,027\\,060$.",
                  "reason": "adding the remaining terms in order of place value"
                },
                {
                  "step": "$350\\,027\\,064$.",
                  "reason": "the sum $350\\,027\\,060+4$ equals $350\\,027\\,064$"
                }
              ]
            },
            {
              "prompt": "Compute the whole number equal to $7\\times10^{10}+2\\times10^9+6\\times10^4+6\\times100+5\\times10+9$.",
              "answer": "72 000 060 659",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The terms equal $70\\,000\\,000\\,000$, $2\\,000\\,000\\,000$, $60\\,000$, $600$, $50$, and $9$.",
                  "reason": "each term is a digit times its place value"
                },
                {
                  "step": "The sum $70\\,000\\,000\\,000+2\\,000\\,000\\,000$ equals $72\\,000\\,000\\,000$, and $72\\,000\\,000\\,000+60\\,000$ equals $72\\,000\\,060\\,000$.",
                  "reason": "adding the terms from the greatest place value down"
                },
                {
                  "step": "The sum $72\\,000\\,060\\,000+600$ equals $72\\,000\\,060\\,600$, and $72\\,000\\,060\\,600+50$ equals $72\\,000\\,060\\,650$.",
                  "reason": "adding the remaining terms in order of place value"
                },
                {
                  "step": "$72\\,000\\,060\\,659$.",
                  "reason": "the sum $72\\,000\\,060\\,650+9$ equals $72\\,000\\,060\\,659$"
                }
              ]
            },
            {
              "prompt": "Compute the whole number equal to $2\\times10^6+8\\times10^5+3\\times1\\,000+9\\times100+1\\times10+5$.",
              "answer": "2 803 915",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The terms equal $2\\,000\\,000$, $800\\,000$, $3\\,000$, $900$, $10$, and $5$.",
                  "reason": "each term is a digit times its place value"
                },
                {
                  "step": "The sum $2\\,000\\,000+800\\,000$ equals $2\\,800\\,000$, and $2\\,800\\,000+3\\,000$ equals $2\\,803\\,000$.",
                  "reason": "adding the terms from the greatest place value down"
                },
                {
                  "step": "The sum $2\\,803\\,000+900$ equals $2\\,803\\,900$, and $2\\,803\\,900+10$ equals $2\\,803\\,910$.",
                  "reason": "adding the remaining terms in order of place value"
                },
                {
                  "step": "$2\\,803\\,915$.",
                  "reason": "the sum $2\\,803\\,910+5$ equals $2\\,803\\,915$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t1-k3",
      "forms": [
        {
          "example": {
            "problem": "Compute $37\\times1\\,000$.",
            "lines": [
              {
                "step": "The product $37\\times1\\,000$ is the sum of $37$ copies of $1\\,000$.",
                "reason": "the definition of multiplication as repeated addition"
              },
              {
                "step": "Ten copies of $1\\,000$ is $10\\,000$, so thirty copies of $1\\,000$ is $30\\,000$.",
                "reason": "skip-counting by $1\\,000$ ten times reaches $10\\,000$, and three such groups of ten copies reach $30\\,000$"
              },
              {
                "step": "Seven copies of $1\\,000$ is $7\\,000$.",
                "reason": "counting $1\\,000$ seven times reaches $7\\,000$"
              },
              {
                "step": "Thirty-seven copies of $1\\,000$ is $30\\,000+7\\,000$, which equals $37\\,000$.",
                "reason": "thirty-seven copies split into thirty copies and seven more copies, and their sums add"
              },
              {
                "step": "$37\\,000$.",
                "reason": "the computed sum is the product"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $43\\times100$.",
              "answer": "4 300",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The product $43\\times100$ is the sum of $43$ copies of $100$.",
                  "reason": "the definition of multiplication as repeated addition"
                },
                {
                  "step": "Ten copies of $100$ is $1\\,000$, so forty copies of $100$ is $4\\,000$.",
                  "reason": "skip-counting by $100$ ten times reaches $1\\,000$, and four such groups of ten copies reach $4\\,000$"
                },
                {
                  "step": "Three copies of $100$ is $300$.",
                  "reason": "counting $100$ three times reaches $300$"
                },
                {
                  "step": "Forty-three copies of $100$ is $4\\,000+300$, which equals $4\\,300$.",
                  "reason": "forty-three copies split into forty copies and three more copies, and their sums add"
                },
                {
                  "step": "$4\\,300$.",
                  "reason": "the computed sum is the product"
                }
              ]
            },
            {
              "prompt": "Compute $56\\times10\\,000$.",
              "answer": "560 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The product $56\\times10\\,000$ is the sum of $56$ copies of $10\\,000$.",
                  "reason": "the definition of multiplication as repeated addition"
                },
                {
                  "step": "Ten copies of $10\\,000$ is $100\\,000$, so fifty copies of $10\\,000$ is $500\\,000$.",
                  "reason": "skip-counting by $10\\,000$ ten times reaches $100\\,000$, and five such groups of ten copies reach $500\\,000$"
                },
                {
                  "step": "Six copies of $10\\,000$ is $60\\,000$.",
                  "reason": "counting $10\\,000$ six times reaches $60\\,000$"
                },
                {
                  "step": "Fifty-six copies of $10\\,000$ is $500\\,000+60\\,000$, which equals $560\\,000$.",
                  "reason": "fifty-six copies split into fifty copies and six more copies, and their sums add"
                },
                {
                  "step": "$560\\,000$.",
                  "reason": "the computed sum is the product"
                }
              ]
            },
            {
              "prompt": "Compute $72\\times100\\,000$.",
              "answer": "7 200 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "The product $72\\times100\\,000$ is the sum of $72$ copies of $100\\,000$.",
                  "reason": "the definition of multiplication as repeated addition"
                },
                {
                  "step": "Ten copies of $100\\,000$ is $1\\,000\\,000$, so seventy copies of $100\\,000$ is $7\\,000\\,000$.",
                  "reason": "skip-counting by $100\\,000$ ten times reaches $1\\,000\\,000$, and seven such groups of ten copies reach $7\\,000\\,000$"
                },
                {
                  "step": "Two copies of $100\\,000$ is $200\\,000$.",
                  "reason": "counting $100\\,000$ two times reaches $200\\,000$"
                },
                {
                  "step": "Seventy-two copies of $100\\,000$ is $7\\,000\\,000+200\\,000$, which equals $7\\,200\\,000$.",
                  "reason": "seventy-two copies split into seventy copies and two more copies, and their sums add"
                },
                {
                  "step": "$7\\,200\\,000$.",
                  "reason": "the computed sum is the product"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": []
}
