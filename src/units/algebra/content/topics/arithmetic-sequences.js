export default {
  "number": 177,
  "title": "Arithmetic sequences",
  "section": 17,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "589-594, 621-626"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the 50th term of the arithmetic sequence $7, 11, 15, \\dots$.",
    "form": "Answer as an integer.",
    "answer": "203",
    "solution": [
      "Find the 50th term of the arithmetic sequence $7, 11, 15, \\dots$.",
      "$d = 11 - 7 = 4$",
      "$a_{50} = 7 + (50 - 1) \\cdot 4$",
      "$a_{50} = 7 + 196$",
      "$a_{50} = 203$"
    ]
  },
  "ideas": [
    {
      "name": "Arithmetic sequence",
      "concrete": "In the list $5, 8, 11, 14, \\dots$ each number is $3$ more than the one before, so it is an arithmetic sequence with common difference $3$; its first term is $5$ and its fourth term is $14$.",
      "general": "A **sequence** is a list of numbers in order, and each number in it is a **term**. The term in place $n$ is written $a_n$, the **term $a_n$**, so the first term is $a_1$. An **arithmetic sequence** is a sequence in which each term after the first is the term before it plus one fixed number $d$, its **common difference**: $a_{n+1} - a_n = d$ for every whole number $n$ from 1 up."
    },
    {
      "name": "The $n$th term",
      "concrete": "In $5, 8, 11, 14, \\dots$ the 10th term is $9$ steps of $3$ after the first term, so it is $5 + 9 \\cdot 3 = 32$.",
      "general": "For an arithmetic sequence with first term $a$ and common difference $d$, and every whole number $n$ from 1 up, the **$n$th term $a + (n - 1)d$** is $a_n$: the $n$th term is $n - 1$ steps after the first, and each step adds $d$."
    },
    {
      "name": "A term midway between two others is their mean",
      "concrete": "In $5, 8, 11, 14, 17$ the term $11$ is two places after $5$ and two places before $17$, and $\\dfrac{5 + 17}{2} = 11$.",
      "general": "For an arithmetic sequence and whole numbers $n$ and $k$ with $k$ less than $n$, the term $a_n$ is $k$ places after $a_{n-k}$ and $k$ places before $a_{n+k}$, and $a_n = \\dfrac{a_{n-k} + a_{n+k}}{2}$: **a term midway between two others is their mean**."
    }
  ],
  "kinds": [
    {
      "id": "t177-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the 65th term of the arithmetic sequence $-3, 0, 3, \\dots$.",
            "lines": [
              {
                "step": "Find the 65th term of the arithmetic sequence $-3, 0, 3, \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$d = 0 - (-3) = 3$",
                "reason": "Common difference: the second term minus the first is the amount added at each step."
              },
              {
                "step": "$a_{65} = -3 + (65 - 1) \\cdot 3$",
                "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = -3$, $d = 3$ and $n = 65$ in place of the letters."
              },
              {
                "step": "$a_{65} = -3 + 192$",
                "reason": "Order of operations: the bracket first, $65 - 1 = 64$, then the product, $64 \\cdot 3 = 192$."
              },
              {
                "step": "$a_{65} = 189$",
                "reason": "Order of operations: the sum last, $-3 + 192 = 189$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the 63rd term of the arithmetic sequence $44, 38, 32, \\dots$.",
              "form": "Answer as an integer.",
              "answer": "-328",
              "lines": [
                {
                  "step": "Find the 63rd term of the arithmetic sequence $44, 38, 32, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = 38 - 44 = -6$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$a_{63} = 44 + (63 - 1) \\cdot (-6)$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = 44$, $d = -6$ and $n = 63$ in place of the letters."
                },
                {
                  "step": "$a_{63} = 44 - 372$",
                  "reason": "Order of operations: the bracket first, $63 - 1 = 62$, then the product, $62 \\cdot (-6) = -372$."
                },
                {
                  "step": "$a_{63} = -328$",
                  "reason": "Order of operations: the sum last, $44 - 372 = -328$."
                }
              ]
            },
            {
              "prompt": "Find the 88th term of the arithmetic sequence $-25, -17, -9, \\dots$.",
              "form": "Answer as an integer.",
              "answer": "671",
              "lines": [
                {
                  "step": "Find the 88th term of the arithmetic sequence $-25, -17, -9, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = -17 - (-25) = 8$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$a_{88} = -25 + (88 - 1) \\cdot 8$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = -25$, $d = 8$ and $n = 88$ in place of the letters."
                },
                {
                  "step": "$a_{88} = -25 + 696$",
                  "reason": "Order of operations: the bracket first, $88 - 1 = 87$, then the product, $87 \\cdot 8 = 696$."
                },
                {
                  "step": "$a_{88} = 671$",
                  "reason": "Order of operations: the sum last, $-25 + 696 = 671$."
                }
              ]
            },
            {
              "prompt": "Find the 47th term of the arithmetic sequence $8, 19, 30, \\dots$.",
              "form": "Answer as an integer.",
              "answer": "514",
              "lines": [
                {
                  "step": "Find the 47th term of the arithmetic sequence $8, 19, 30, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = 19 - 8 = 11$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$a_{47} = 8 + (47 - 1) \\cdot 11$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = 8$, $d = 11$ and $n = 47$ in place of the letters."
                },
                {
                  "step": "$a_{47} = 8 + 506$",
                  "reason": "Order of operations: the bracket first, $47 - 1 = 46$, then the product, $46 \\cdot 11 = 506$."
                },
                {
                  "step": "$a_{47} = 514$",
                  "reason": "Order of operations: the sum last, $8 + 506 = 514$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of terms of the arithmetic sequence $78, 89, 100, \\dots, 221$.",
            "lines": [
              {
                "step": "Find the number of terms of the arithmetic sequence $78, 89, 100, \\dots, 221$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$d = 89 - 78 = 11$",
                "reason": "Common difference: the second term minus the first is the amount added at each step."
              },
              {
                "step": "$78 + (n - 1) \\cdot 11 = 221$",
                "reason": "The $n$th term $a + (n - 1)d$: the term equal to $221$ is the $n$th, so with $a = 78$ and $d = 11$ the $n$th term is set equal to $221$."
              },
              {
                "step": "$(n - 1) \\cdot 11 = 143$",
                "reason": "Adding the same number to both sides: adding $-78$ to both sides leaves the product alone."
              },
              {
                "step": "$n - 1 = 13$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$."
              },
              {
                "step": "$n = 14$",
                "reason": "Adding the same number to both sides: adding $1$ to both sides leaves $n$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $n$ such that the $n$th term of the arithmetic sequence $69, 60, 51, \\dots$ is $-336$.",
              "form": "Answer as an integer.",
              "answer": "46",
              "lines": [
                {
                  "step": "Find $n$ such that the $n$th term of the arithmetic sequence $69, 60, 51, \\dots$ is $-336$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = 60 - 69 = -9$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$69 + (n - 1) \\cdot (-9) = -336$",
                  "reason": "The $n$th term $a + (n - 1)d$: the term equal to $-336$ is the $n$th, so with $a = 69$ and $d = -9$ the $n$th term is set equal to $-336$."
                },
                {
                  "step": "$(n - 1) \\cdot (-9) = -405$",
                  "reason": "Adding the same number to both sides: adding $-69$ to both sides leaves the product alone."
                },
                {
                  "step": "$n - 1 = 45$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-9$."
                },
                {
                  "step": "$n = 46$",
                  "reason": "Adding the same number to both sides: adding $1$ to both sides leaves $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find the number of terms of the arithmetic sequence $59, 54, 49, \\dots, -226$.",
              "form": "Answer as an integer.",
              "answer": "58",
              "lines": [
                {
                  "step": "Find the number of terms of the arithmetic sequence $59, 54, 49, \\dots, -226$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = 54 - 59 = -5$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$59 + (n - 1) \\cdot (-5) = -226$",
                  "reason": "The $n$th term $a + (n - 1)d$: the term equal to $-226$ is the $n$th, so with $a = 59$ and $d = -5$ the $n$th term is set equal to $-226$."
                },
                {
                  "step": "$(n - 1) \\cdot (-5) = -285$",
                  "reason": "Adding the same number to both sides: adding $-59$ to both sides leaves the product alone."
                },
                {
                  "step": "$n - 1 = 57$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                },
                {
                  "step": "$n = 58$",
                  "reason": "Adding the same number to both sides: adding $1$ to both sides leaves $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find $n$ such that the $n$th term of the arithmetic sequence $51, 41, 31, \\dots$ is $-159$.",
              "form": "Answer as an integer.",
              "answer": "22",
              "lines": [
                {
                  "step": "Find $n$ such that the $n$th term of the arithmetic sequence $51, 41, 31, \\dots$ is $-159$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = 41 - 51 = -10$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$51 + (n - 1) \\cdot (-10) = -159$",
                  "reason": "The $n$th term $a + (n - 1)d$: the term equal to $-159$ is the $n$th, so with $a = 51$ and $d = -10$ the $n$th term is set equal to $-159$."
                },
                {
                  "step": "$(n - 1) \\cdot (-10) = -210$",
                  "reason": "Adding the same number to both sides: adding $-51$ to both sides leaves the product alone."
                },
                {
                  "step": "$n - 1 = 21$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-10$."
                },
                {
                  "step": "$n = 22$",
                  "reason": "Adding the same number to both sides: adding $1$ to both sides leaves $n$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $n$th term of the arithmetic sequence $36, 34, 32, \\dots$ as an expression in $n$.",
            "lines": [
              {
                "step": "Find the $n$th term of the arithmetic sequence $36, 34, 32, \\dots$ as an expression in $n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$d = 34 - 36 = -2$",
                "reason": "Common difference: the second term minus the first is the amount added at each step."
              },
              {
                "step": "$a_n = 36 + (n - 1) \\cdot (-2)$",
                "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = 36$ and $d = -2$ in place of the letters."
              },
              {
                "step": "$a_n = 36 - 2n + 2$",
                "reason": "Multiplying out: the number $-2$ multiplies each term of the bracket $n - 1$, and the signs of products give each product its sign."
              },
              {
                "step": "$a_n = -2n + 38$",
                "reason": "Collecting like terms: $36 + 2 = 38$, and the term in $n$ is written first, in descending order of powers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $n$th term of the arithmetic sequence $24, 12, 0, \\dots$ as an expression in $n$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-12*n+36",
              "lines": [
                {
                  "step": "Find the $n$th term of the arithmetic sequence $24, 12, 0, \\dots$ as an expression in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = 12 - 24 = -12$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$a_n = 24 + (n - 1) \\cdot (-12)$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = 24$ and $d = -12$ in place of the letters."
                },
                {
                  "step": "$a_n = 24 - 12n + 12$",
                  "reason": "Multiplying out: the number $-12$ multiplies each term of the bracket $n - 1$, and the signs of products give each product its sign."
                },
                {
                  "step": "$a_n = -12n + 36$",
                  "reason": "Collecting like terms: $24 + 12 = 36$, and the term in $n$ is written first, in descending order of powers."
                }
              ]
            },
            {
              "prompt": "Find the $n$th term of the arithmetic sequence $-20, -29, -38, \\dots$ as an expression in $n$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-9*n-11",
              "lines": [
                {
                  "step": "Find the $n$th term of the arithmetic sequence $-20, -29, -38, \\dots$ as an expression in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = -29 - (-20) = -9$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$a_n = -20 + (n - 1) \\cdot (-9)$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = -20$ and $d = -9$ in place of the letters."
                },
                {
                  "step": "$a_n = -20 - 9n + 9$",
                  "reason": "Multiplying out: the number $-9$ multiplies each term of the bracket $n - 1$, and the signs of products give each product its sign."
                },
                {
                  "step": "$a_n = -9n - 11$",
                  "reason": "Collecting like terms: $-20 + 9 = -11$, and the term in $n$ is written first, in descending order of powers."
                }
              ]
            },
            {
              "prompt": "Find the $n$th term of the arithmetic sequence $15, 17, 19, \\dots$ as an expression in $n$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*n+13",
              "lines": [
                {
                  "step": "Find the $n$th term of the arithmetic sequence $15, 17, 19, \\dots$ as an expression in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = 17 - 15 = 2$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$a_n = 15 + (n - 1) \\cdot 2$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = 15$ and $d = 2$ in place of the letters."
                },
                {
                  "step": "$a_n = 15 + 2n - 2$",
                  "reason": "Multiplying out: the number $2$ multiplies each term of the bracket $n - 1$, and the signs of products give each product its sign."
                },
                {
                  "step": "$a_n = 2n + 13$",
                  "reason": "Collecting like terms: $15 - 2 = 13$, and the term in $n$ is written first, in descending order of powers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least $n$ for which the $n$th term of the arithmetic sequence $39, 50, 61, \\dots$ is above $1341$.",
            "lines": [
              {
                "step": "Find the least $n$ for which the $n$th term of the arithmetic sequence $39, 50, 61, \\dots$ is above $1341$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$d = 50 - 39 = 11$",
                "reason": "Common difference: the second term minus the first is the amount added at each step."
              },
              {
                "step": "$39 + (n - 1) \\cdot 11 > 1341$",
                "reason": "The $n$th term $a + (n - 1)d$: with $a = 39$ and $d = 11$, the $n$th term is above $1341$."
              },
              {
                "step": "$(n - 1) \\cdot 11 > 1302$",
                "reason": "Adding the same number: adding $-39$ to both sides, so the sign stays as it is."
              },
              {
                "step": "$n - 1 > \\dfrac{1302}{11}$",
                "reason": "Multiplying by a positive number: dividing both sides by $11$ is multiplying by $\\dfrac{1}{11}$, which is positive, so the sign stays as it is."
              },
              {
                "step": "$n > \\dfrac{1313}{11}$",
                "reason": "Adding the same number: adding $1$ to both sides, so the sign stays as it is."
              },
              {
                "step": "$n = 120$",
                "reason": "Solution of an inequality: $119 \\cdot 11 = 1309$ and $120 \\cdot 11 = 1320$, so $\\dfrac{1313}{11}$ lies between $119$ and $120$, and $120$ is the least whole number above it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least $n$ for which the $n$th term of the arithmetic sequence $-24, -17, -10, \\dots$ is above $1062$.",
              "form": "Answer as an integer.",
              "answer": "157",
              "lines": [
                {
                  "step": "Find the least $n$ for which the $n$th term of the arithmetic sequence $-24, -17, -10, \\dots$ is above $1062$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = -17 - (-24) = 7$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$-24 + (n - 1) \\cdot 7 > 1062$",
                  "reason": "The $n$th term $a + (n - 1)d$: with $a = -24$ and $d = 7$, the $n$th term is above $1062$."
                },
                {
                  "step": "$(n - 1) \\cdot 7 > 1086$",
                  "reason": "Adding the same number: adding $24$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$n - 1 > \\dfrac{1086}{7}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $7$ is multiplying by $\\dfrac{1}{7}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$n > \\dfrac{1093}{7}$",
                  "reason": "Adding the same number: adding $1$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$n = 157$",
                  "reason": "Solution of an inequality: $156 \\cdot 7 = 1092$ and $157 \\cdot 7 = 1099$, so $\\dfrac{1093}{7}$ lies between $156$ and $157$, and $157$ is the least whole number above it."
                }
              ]
            },
            {
              "prompt": "Find the least $n$ for which the $n$th term of the arithmetic sequence $-14, -6, 2, \\dots$ is above $1055$.",
              "form": "Answer as an integer.",
              "answer": "135",
              "lines": [
                {
                  "step": "Find the least $n$ for which the $n$th term of the arithmetic sequence $-14, -6, 2, \\dots$ is above $1055$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = -6 - (-14) = 8$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$-14 + (n - 1) \\cdot 8 > 1055$",
                  "reason": "The $n$th term $a + (n - 1)d$: with $a = -14$ and $d = 8$, the $n$th term is above $1055$."
                },
                {
                  "step": "$(n - 1) \\cdot 8 > 1069$",
                  "reason": "Adding the same number: adding $14$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$n - 1 > \\dfrac{1069}{8}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $8$ is multiplying by $\\dfrac{1}{8}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$n > \\dfrac{1077}{8}$",
                  "reason": "Adding the same number: adding $1$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$n = 135$",
                  "reason": "Solution of an inequality: $134 \\cdot 8 = 1072$ and $135 \\cdot 8 = 1080$, so $\\dfrac{1077}{8}$ lies between $134$ and $135$, and $135$ is the least whole number above it."
                }
              ]
            },
            {
              "prompt": "Find the least $n$ for which the $n$th term of the arithmetic sequence $-18, -14, -10, \\dots$ is above $1345$.",
              "form": "Answer as an integer.",
              "answer": "342",
              "lines": [
                {
                  "step": "Find the least $n$ for which the $n$th term of the arithmetic sequence $-18, -14, -10, \\dots$ is above $1345$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = -14 - (-18) = 4$",
                  "reason": "Common difference: the second term minus the first is the amount added at each step."
                },
                {
                  "step": "$-18 + (n - 1) \\cdot 4 > 1345$",
                  "reason": "The $n$th term $a + (n - 1)d$: with $a = -18$ and $d = 4$, the $n$th term is above $1345$."
                },
                {
                  "step": "$(n - 1) \\cdot 4 > 1363$",
                  "reason": "Adding the same number: adding $18$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$n - 1 > \\dfrac{1363}{4}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $4$ is multiplying by $\\dfrac{1}{4}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$n > \\dfrac{1367}{4}$",
                  "reason": "Adding the same number: adding $1$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$n = 342$",
                  "reason": "Solution of an inequality: $341 \\cdot 4 = 1364$ and $342 \\cdot 4 = 1368$, so $\\dfrac{1367}{4}$ lies between $341$ and $342$, and $342$ is the least whole number above it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t177-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the 13th term of the arithmetic sequence whose 7th term is $14$ and whose 14th term is $91$.",
            "lines": [
              {
                "step": "Find the 13th term of the arithmetic sequence whose 7th term is $14$ and whose 14th term is $91$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a_{14} - a_{7} = 7d$",
                "reason": "The $n$th term $a + (n - 1)d$: $a_{14} = a + 13d$ and $a_{7} = a + 6d$, so the two terms differ by $7$ steps of $d$."
              },
              {
                "step": "$7d = 77$",
                "reason": "Substituting a value: $a_{14} = 91$ and $a_{7} = 14$, and $91 - 14 = 77$."
              },
              {
                "step": "$d = 11$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
              },
              {
                "step": "$a_{13} = a_{7} + 6d$",
                "reason": "The $n$th term $a + (n - 1)d$: the 13th term is $6$ places after the 7th, so it is the 7th term plus $6$ steps of $d$."
              },
              {
                "step": "$a_{13} = 14 + 6 \\cdot 11$",
                "reason": "Substituting a value: $a_{7} = 14$ and $d = 11$."
              },
              {
                "step": "$a_{13} = 80$",
                "reason": "Order of operations: the product first, $6 \\cdot 11 = 66$, then the sum."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the 9th term of the arithmetic sequence whose 3rd term is $-15$ and whose 5th term is $-18$.",
              "form": "Answer as an integer.",
              "answer": "-24",
              "lines": [
                {
                  "step": "Find the 9th term of the arithmetic sequence whose 3rd term is $-15$ and whose 5th term is $-18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{5} - a_{3} = 2d$",
                  "reason": "The $n$th term $a + (n - 1)d$: $a_{5} = a + 4d$ and $a_{3} = a + 2d$, so the two terms differ by $2$ steps of $d$."
                },
                {
                  "step": "$2d = -3$",
                  "reason": "Substituting a value: $a_{5} = -18$ and $a_{3} = -15$, and $-18 - (-15) = -3$."
                },
                {
                  "step": "$d = -\\dfrac{3}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$a_{9} = a_{5} + 4d$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 9th term is $4$ places after the 5th, so it is the 5th term plus $4$ steps of $d$."
                },
                {
                  "step": "$a_{9} = -18 + 4 \\cdot (-\\dfrac{3}{2})$",
                  "reason": "Substituting a value: $a_{5} = -18$ and $d = -\\dfrac{3}{2}$."
                },
                {
                  "step": "$a_{9} = -24$",
                  "reason": "Order of operations: the product first, $4 \\cdot (-\\dfrac{3}{2}) = -6$, then the sum."
                }
              ]
            },
            {
              "prompt": "Find the 27th term of the arithmetic sequence whose 2nd term is $-20$ and whose 6th term is $-23$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-155/4",
              "lines": [
                {
                  "step": "Find the 27th term of the arithmetic sequence whose 2nd term is $-20$ and whose 6th term is $-23$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{6} - a_{2} = 4d$",
                  "reason": "The $n$th term $a + (n - 1)d$: $a_{6} = a + 5d$ and $a_{2} = a + d$, so the two terms differ by $4$ steps of $d$."
                },
                {
                  "step": "$4d = -3$",
                  "reason": "Substituting a value: $a_{6} = -23$ and $a_{2} = -20$, and $-23 - (-20) = -3$."
                },
                {
                  "step": "$d = -\\dfrac{3}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$a_{27} = a_{6} + 21d$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 27th term is $21$ places after the 6th, so it is the 6th term plus $21$ steps of $d$."
                },
                {
                  "step": "$a_{27} = -23 + 21 \\cdot (-\\dfrac{3}{4})$",
                  "reason": "Substituting a value: $a_{6} = -23$ and $d = -\\dfrac{3}{4}$."
                },
                {
                  "step": "$a_{27} = -\\dfrac{155}{4}$",
                  "reason": "Order of operations: the product first, $21 \\cdot (-\\dfrac{3}{4}) = -\\dfrac{63}{4}$, then the sum."
                }
              ]
            },
            {
              "prompt": "Find the 23rd term of the arithmetic sequence whose 3rd term is $17$ and whose 11th term is $-23$.",
              "form": "Answer as an integer.",
              "answer": "-83",
              "lines": [
                {
                  "step": "Find the 23rd term of the arithmetic sequence whose 3rd term is $17$ and whose 11th term is $-23$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{11} - a_{3} = 8d$",
                  "reason": "The $n$th term $a + (n - 1)d$: $a_{11} = a + 10d$ and $a_{3} = a + 2d$, so the two terms differ by $8$ steps of $d$."
                },
                {
                  "step": "$8d = -40$",
                  "reason": "Substituting a value: $a_{11} = -23$ and $a_{3} = 17$, and $-23 - 17 = -40$."
                },
                {
                  "step": "$d = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$a_{23} = a_{11} + 12d$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 23rd term is $12$ places after the 11th, so it is the 11th term plus $12$ steps of $d$."
                },
                {
                  "step": "$a_{23} = -23 + 12 \\cdot (-5)$",
                  "reason": "Substituting a value: $a_{11} = -23$ and $d = -5$."
                },
                {
                  "step": "$a_{23} = -83$",
                  "reason": "Order of operations: the product first, $12 \\cdot (-5) = -60$, then the sum."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first term of the arithmetic sequence in which the 3rd term plus the 11th term is $2$, and the 10th term plus the 13th term is $20$.",
            "lines": [
              {
                "step": "Find the first term of the arithmetic sequence in which the 3rd term plus the 11th term is $2$, and the 10th term plus the 13th term is $20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(a + 2d) + (a + 10d) = 2$",
                "reason": "The $n$th term $a + (n - 1)d$: the 3rd term is $a + 2d$ and the 11th term is $a + 10d$."
              },
              {
                "step": "$(a + 9d) + (a + 12d) = 20$",
                "reason": "The $n$th term $a + (n - 1)d$: the 10th term is $a + 9d$ and the 13th term is $a + 12d$."
              },
              {
                "step": "$2a + 12d = 2$",
                "reason": "Collecting like terms: $a + a = 2a$ and $2d + 10d = 12d$."
              },
              {
                "step": "$2a + 21d = 20$",
                "reason": "Collecting like terms: $a + a = 2a$ and $9d + 12d = 21d$."
              },
              {
                "step": "$9d = 18$",
                "reason": "Elimination: taking the first of the two equations from the second leaves no term in $a$."
              },
              {
                "step": "$d = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
              },
              {
                "step": "$2a + 12 \\cdot 2 = 2$",
                "reason": "Back-substitution: the value of $d$ goes, in brackets where it is negative, in place of $d$ in $2a + 12d = 2$."
              },
              {
                "step": "$2a = -22$",
                "reason": "Adding the same number to both sides: $12 \\cdot 2 = 24$, and adding $-24$ to both sides leaves $2a$ alone."
              },
              {
                "step": "$a = -11$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first term of the arithmetic sequence in which the 10th term plus the 16th term is $94$, and the 13th term plus the 20th term is $136$.",
              "form": "Answer as an integer.",
              "answer": "-25",
              "lines": [
                {
                  "step": "Find the first term of the arithmetic sequence in which the 10th term plus the 16th term is $94$, and the 13th term plus the 20th term is $136$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(a + 9d) + (a + 15d) = 94$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 10th term is $a + 9d$ and the 16th term is $a + 15d$."
                },
                {
                  "step": "$(a + 12d) + (a + 19d) = 136$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 13th term is $a + 12d$ and the 20th term is $a + 19d$."
                },
                {
                  "step": "$2a + 24d = 94$",
                  "reason": "Collecting like terms: $a + a = 2a$ and $9d + 15d = 24d$."
                },
                {
                  "step": "$2a + 31d = 136$",
                  "reason": "Collecting like terms: $a + a = 2a$ and $12d + 19d = 31d$."
                },
                {
                  "step": "$7d = 42$",
                  "reason": "Elimination: taking the first of the two equations from the second leaves no term in $a$."
                },
                {
                  "step": "$d = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$2a + 24 \\cdot 6 = 94$",
                  "reason": "Back-substitution: the value of $d$ goes, in brackets where it is negative, in place of $d$ in $2a + 24d = 94$."
                },
                {
                  "step": "$2a = -50$",
                  "reason": "Adding the same number to both sides: $24 \\cdot 6 = 144$, and adding $-144$ to both sides leaves $2a$ alone."
                },
                {
                  "step": "$a = -25$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find the first term of the arithmetic sequence in which the 4th term plus the 15th term is $-2$, and the 11th term plus the 12th term is $-26$.",
              "form": "Answer as an integer.",
              "answer": "50",
              "lines": [
                {
                  "step": "Find the first term of the arithmetic sequence in which the 4th term plus the 15th term is $-2$, and the 11th term plus the 12th term is $-26$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(a + 3d) + (a + 14d) = -2$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 4th term is $a + 3d$ and the 15th term is $a + 14d$."
                },
                {
                  "step": "$(a + 10d) + (a + 11d) = -26$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 11th term is $a + 10d$ and the 12th term is $a + 11d$."
                },
                {
                  "step": "$2a + 17d = -2$",
                  "reason": "Collecting like terms: $a + a = 2a$ and $3d + 14d = 17d$."
                },
                {
                  "step": "$2a + 21d = -26$",
                  "reason": "Collecting like terms: $a + a = 2a$ and $10d + 11d = 21d$."
                },
                {
                  "step": "$4d = -24$",
                  "reason": "Elimination: taking the first of the two equations from the second leaves no term in $a$."
                },
                {
                  "step": "$d = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$2a + 17 \\cdot (-6) = -2$",
                  "reason": "Back-substitution: the value of $d$ goes, in brackets where it is negative, in place of $d$ in $2a + 17d = -2$."
                },
                {
                  "step": "$2a = 100$",
                  "reason": "Adding the same number to both sides: $17 \\cdot (-6) = -102$, and adding $102$ to both sides leaves $2a$ alone."
                },
                {
                  "step": "$a = 50$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find the first term of the arithmetic sequence in which the 6th term plus the 15th term is $-156$, and the 9th term plus the 18th term is $-192$.",
              "form": "Answer as an integer.",
              "answer": "-21",
              "lines": [
                {
                  "step": "Find the first term of the arithmetic sequence in which the 6th term plus the 15th term is $-156$, and the 9th term plus the 18th term is $-192$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(a + 5d) + (a + 14d) = -156$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 6th term is $a + 5d$ and the 15th term is $a + 14d$."
                },
                {
                  "step": "$(a + 8d) + (a + 17d) = -192$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 9th term is $a + 8d$ and the 18th term is $a + 17d$."
                },
                {
                  "step": "$2a + 19d = -156$",
                  "reason": "Collecting like terms: $a + a = 2a$ and $5d + 14d = 19d$."
                },
                {
                  "step": "$2a + 25d = -192$",
                  "reason": "Collecting like terms: $a + a = 2a$ and $8d + 17d = 25d$."
                },
                {
                  "step": "$6d = -36$",
                  "reason": "Elimination: taking the first of the two equations from the second leaves no term in $a$."
                },
                {
                  "step": "$d = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$2a + 19 \\cdot (-6) = -156$",
                  "reason": "Back-substitution: the value of $d$ goes, in brackets where it is negative, in place of $d$ in $2a + 19d = -156$."
                },
                {
                  "step": "$2a = -42$",
                  "reason": "Adding the same number to both sides: $19 \\cdot (-6) = -114$, and adding $114$ to both sides leaves $2a$ alone."
                },
                {
                  "step": "$a = -21$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the 19th term of the arithmetic sequence whose 11th term is $75$ and whose 27th term is $141$.",
            "lines": [
              {
                "step": "Find the 19th term of the arithmetic sequence whose 11th term is $75$ and whose 27th term is $141$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The 19th term is $8$ places after the 11th term and $8$ places before the 27th term.",
                "reason": "Term $a_n$: a term's place is its number $n$, and $19 - 11 = 27 - 19 = 8$."
              },
              {
                "step": "$a_{19} = \\dfrac{75 + 141}{2}$",
                "reason": "A term midway between two others is their mean: the 19th term is midway between the 11th and the 27th."
              },
              {
                "step": "$a_{19} = 108$",
                "reason": "Order of operations: the top first, $75 + 141 = 216$, then the division by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the 10th term of the arithmetic sequence whose 4th term is $57$ and whose 16th term is $136$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "193/2",
              "lines": [
                {
                  "step": "Find the 10th term of the arithmetic sequence whose 4th term is $57$ and whose 16th term is $136$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 10th term is $6$ places after the 4th term and $6$ places before the 16th term.",
                  "reason": "Term $a_n$: a term's place is its number $n$, and $10 - 4 = 16 - 10 = 6$."
                },
                {
                  "step": "$a_{10} = \\dfrac{57 + 136}{2}$",
                  "reason": "A term midway between two others is their mean: the 10th term is midway between the 4th and the 16th."
                },
                {
                  "step": "$a_{10} = \\dfrac{193}{2}$",
                  "reason": "Order of operations: the top first, $57 + 136 = 193$, then the division by $2$, which leaves a fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the 14th term of the arithmetic sequence whose 5th term is $58$ and whose 23rd term is $64$.",
              "form": "Answer as an integer.",
              "answer": "61",
              "lines": [
                {
                  "step": "Find the 14th term of the arithmetic sequence whose 5th term is $58$ and whose 23rd term is $64$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 14th term is $9$ places after the 5th term and $9$ places before the 23rd term.",
                  "reason": "Term $a_n$: a term's place is its number $n$, and $14 - 5 = 23 - 14 = 9$."
                },
                {
                  "step": "$a_{14} = \\dfrac{58 + 64}{2}$",
                  "reason": "A term midway between two others is their mean: the 14th term is midway between the 5th and the 23rd."
                },
                {
                  "step": "$a_{14} = 61$",
                  "reason": "Order of operations: the top first, $58 + 64 = 122$, then the division by $2$."
                }
              ]
            },
            {
              "prompt": "Find the 10th term of the arithmetic sequence whose 1st term is $118$ and whose 19th term is $54$.",
              "form": "Answer as an integer.",
              "answer": "86",
              "lines": [
                {
                  "step": "Find the 10th term of the arithmetic sequence whose 1st term is $118$ and whose 19th term is $54$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 10th term is $9$ places after the 1st term and $9$ places before the 19th term.",
                  "reason": "Term $a_n$: a term's place is its number $n$, and $10 - 1 = 19 - 10 = 9$."
                },
                {
                  "step": "$a_{10} = \\dfrac{118 + 54}{2}$",
                  "reason": "A term midway between two others is their mean: the 10th term is midway between the 1st and the 19th."
                },
                {
                  "step": "$a_{10} = 86$",
                  "reason": "Order of operations: the top first, $118 + 54 = 172$, then the division by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $n$th term, as an expression in $n$, of the arithmetic sequence whose 3rd term is $-12$ and whose 13th term is $78$.",
            "lines": [
              {
                "step": "Find the $n$th term, as an expression in $n$, of the arithmetic sequence whose 3rd term is $-12$ and whose 13th term is $78$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a_{13} - a_{3} = 10d$",
                "reason": "The $n$th term $a + (n - 1)d$: $a_{13} = a + 12d$ and $a_{3} = a + 2d$, so the two terms differ by $10$ steps of $d$."
              },
              {
                "step": "$10d = 90$",
                "reason": "Substituting a value: $a_{13} = 78$ and $a_{3} = -12$, and $78 - (-12) = 90$."
              },
              {
                "step": "$d = 9$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
              },
              {
                "step": "$a + 2 \\cdot 9 = -12$",
                "reason": "The $n$th term $a + (n - 1)d$: the 3rd term is $a + 2d$, and substituting a value puts $d = 9$ in place of $d$."
              },
              {
                "step": "$a + 18 = -12$",
                "reason": "Order of operations: $2 \\cdot 9 = 18$."
              },
              {
                "step": "$a = -30$",
                "reason": "Adding the same number to both sides: adding $-18$ to both sides leaves $a$ alone."
              },
              {
                "step": "$a_n = -30 + (n - 1) \\cdot 9$",
                "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = -30$ and $d = 9$ in place of the letters."
              },
              {
                "step": "$a_n = -30 + 9n - 9$",
                "reason": "Multiplying out: the number $9$ multiplies each term of the bracket $n - 1$, and the signs of products give each product its sign."
              },
              {
                "step": "$a_n = 9n - 39$",
                "reason": "Collecting like terms: $-30 - 9 = -39$, and the term in $n$ is written first, in descending order of powers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $n$th term, as an expression in $n$, of the arithmetic sequence whose 9th term is $16$ and whose 15th term is $46$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "5*n-29",
              "lines": [
                {
                  "step": "Find the $n$th term, as an expression in $n$, of the arithmetic sequence whose 9th term is $16$ and whose 15th term is $46$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{15} - a_{9} = 6d$",
                  "reason": "The $n$th term $a + (n - 1)d$: $a_{15} = a + 14d$ and $a_{9} = a + 8d$, so the two terms differ by $6$ steps of $d$."
                },
                {
                  "step": "$6d = 30$",
                  "reason": "Substituting a value: $a_{15} = 46$ and $a_{9} = 16$, and $46 - 16 = 30$."
                },
                {
                  "step": "$d = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$a + 8 \\cdot 5 = 16$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 9th term is $a + 8d$, and substituting a value puts $d = 5$ in place of $d$."
                },
                {
                  "step": "$a + 40 = 16$",
                  "reason": "Order of operations: $8 \\cdot 5 = 40$."
                },
                {
                  "step": "$a = -24$",
                  "reason": "Adding the same number to both sides: adding $-40$ to both sides leaves $a$ alone."
                },
                {
                  "step": "$a_n = -24 + (n - 1) \\cdot 5$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = -24$ and $d = 5$ in place of the letters."
                },
                {
                  "step": "$a_n = -24 + 5n - 5$",
                  "reason": "Multiplying out: the number $5$ multiplies each term of the bracket $n - 1$, and the signs of products give each product its sign."
                },
                {
                  "step": "$a_n = 5n - 29$",
                  "reason": "Collecting like terms: $-24 - 5 = -29$, and the term in $n$ is written first, in descending order of powers."
                }
              ]
            },
            {
              "prompt": "Find the $n$th term, as an expression in $n$, of the arithmetic sequence whose 4th term is $-35$ and whose 13th term is $-98$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-7*n-7",
              "lines": [
                {
                  "step": "Find the $n$th term, as an expression in $n$, of the arithmetic sequence whose 4th term is $-35$ and whose 13th term is $-98$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{13} - a_{4} = 9d$",
                  "reason": "The $n$th term $a + (n - 1)d$: $a_{13} = a + 12d$ and $a_{4} = a + 3d$, so the two terms differ by $9$ steps of $d$."
                },
                {
                  "step": "$9d = -63$",
                  "reason": "Substituting a value: $a_{13} = -98$ and $a_{4} = -35$, and $-98 - (-35) = -63$."
                },
                {
                  "step": "$d = -7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                },
                {
                  "step": "$a + 3 \\cdot (-7) = -35$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 4th term is $a + 3d$, and substituting a value puts $d = -7$ in place of $d$."
                },
                {
                  "step": "$a - 21 = -35$",
                  "reason": "Order of operations: $3 \\cdot (-7) = -21$."
                },
                {
                  "step": "$a = -14$",
                  "reason": "Adding the same number to both sides: adding $21$ to both sides leaves $a$ alone."
                },
                {
                  "step": "$a_n = -14 + (n - 1) \\cdot (-7)$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = -14$ and $d = -7$ in place of the letters."
                },
                {
                  "step": "$a_n = -14 - 7n + 7$",
                  "reason": "Multiplying out: the number $-7$ multiplies each term of the bracket $n - 1$, and the signs of products give each product its sign."
                },
                {
                  "step": "$a_n = -7n - 7$",
                  "reason": "Collecting like terms: $-14 + 7 = -7$, and the term in $n$ is written first, in descending order of powers."
                }
              ]
            },
            {
              "prompt": "Find the $n$th term, as an expression in $n$, of the arithmetic sequence whose 5th term is $15$ and whose 11th term is $-21$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-6*n+45",
              "lines": [
                {
                  "step": "Find the $n$th term, as an expression in $n$, of the arithmetic sequence whose 5th term is $15$ and whose 11th term is $-21$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{11} - a_{5} = 6d$",
                  "reason": "The $n$th term $a + (n - 1)d$: $a_{11} = a + 10d$ and $a_{5} = a + 4d$, so the two terms differ by $6$ steps of $d$."
                },
                {
                  "step": "$6d = -36$",
                  "reason": "Substituting a value: $a_{11} = -21$ and $a_{5} = 15$, and $-21 - 15 = -36$."
                },
                {
                  "step": "$d = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$a + 4 \\cdot (-6) = 15$",
                  "reason": "The $n$th term $a + (n - 1)d$: the 5th term is $a + 4d$, and substituting a value puts $d = -6$ in place of $d$."
                },
                {
                  "step": "$a - 24 = 15$",
                  "reason": "Order of operations: $4 \\cdot (-6) = -24$."
                },
                {
                  "step": "$a = 39$",
                  "reason": "Adding the same number to both sides: adding $24$ to both sides leaves $a$ alone."
                },
                {
                  "step": "$a_n = 39 + (n - 1) \\cdot (-6)$",
                  "reason": "The $n$th term $a + (n - 1)d$: substituting a value puts $a = 39$ and $d = -6$ in place of the letters."
                },
                {
                  "step": "$a_n = 39 - 6n + 6$",
                  "reason": "Multiplying out: the number $-6$ multiplies each term of the bracket $n - 1$, and the signs of products give each product its sign."
                },
                {
                  "step": "$a_n = -6n + 45$",
                  "reason": "Collecting like terms: $39 + 6 = 45$, and the term in $n$ is written first, in descending order of powers."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t177-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a number $x$ such that $4x + 7$, $-5x - 3$ and $9x + 10$ are consecutive terms of an arithmetic sequence, in that order.",
            "lines": [
              {
                "step": "Find a number $x$ such that $4x + 7$, $-5x - 3$ and $9x + 10$ are consecutive terms of an arithmetic sequence, in that order.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-5x - 3) - (4x + 7) = (9x + 10) - (-5x - 3)$",
                "reason": "Common difference: consecutive terms of an arithmetic sequence differ by the same number, so the second minus the first equals the third minus the second."
              },
              {
                "step": "$-5x - 3 - 4x - 7 = 9x + 10 + 5x + 3$",
                "reason": "Subtracting a bracket changes every sign in it."
              },
              {
                "step": "$-9x - 10 = 14x + 13$",
                "reason": "Collecting like terms: $-5x - 4x = -9x$ on the left and $9x + 5x = 14x$ on the right, with the numbers collected beside them."
              },
              {
                "step": "$-23x = 23$",
                "reason": "Adding the same number to both sides: adding $-14x$ and $10$ to both sides collects the terms in $x$ on the left."
              },
              {
                "step": "$x = -1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-23$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ such that $5x - 13$, $-4x + 14$ and $-7x + 1$ are consecutive terms of an arithmetic sequence, in that order.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 20/3",
              "lines": [
                {
                  "step": "Find a number $x$ such that $5x - 13$, $-4x + 14$ and $-7x + 1$ are consecutive terms of an arithmetic sequence, in that order.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-4x + 14) - (5x - 13) = (-7x + 1) - (-4x + 14)$",
                  "reason": "Common difference: consecutive terms of an arithmetic sequence differ by the same number, so the second minus the first equals the third minus the second."
                },
                {
                  "step": "$-4x + 14 - 5x + 13 = -7x + 1 + 4x - 14$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$-9x + 27 = -3x - 13$",
                  "reason": "Collecting like terms: $-4x - 5x = -9x$ on the left and $-7x + 4x = -3x$ on the right, with the numbers collected beside them."
                },
                {
                  "step": "$-6x = -40$",
                  "reason": "Adding the same number to both sides: adding $3x$ and $-27$ to both sides collects the terms in $x$ on the left."
                },
                {
                  "step": "$x = \\dfrac{20}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ such that $-9x + 2$, $7x + 6$ and $9x + 3$ are consecutive terms of an arithmetic sequence, in that order.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -1/2",
              "lines": [
                {
                  "step": "Find a number $x$ such that $-9x + 2$, $7x + 6$ and $9x + 3$ are consecutive terms of an arithmetic sequence, in that order.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(7x + 6) - (-9x + 2) = (9x + 3) - (7x + 6)$",
                  "reason": "Common difference: consecutive terms of an arithmetic sequence differ by the same number, so the second minus the first equals the third minus the second."
                },
                {
                  "step": "$7x + 6 + 9x - 2 = 9x + 3 - 7x - 6$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$16x + 4 = 2x - 3$",
                  "reason": "Collecting like terms: $7x + 9x = 16x$ on the left and $9x - 7x = 2x$ on the right, with the numbers collected beside them."
                },
                {
                  "step": "$14x = -7$",
                  "reason": "Adding the same number to both sides: adding $-2x$ and $-4$ to both sides collects the terms in $x$ on the left."
                },
                {
                  "step": "$x = -\\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $14$."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ such that $3x + 9$, $-6x + 15$ and $9x + 13$ are consecutive terms of an arithmetic sequence, in that order.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 1/3",
              "lines": [
                {
                  "step": "Find a number $x$ such that $3x + 9$, $-6x + 15$ and $9x + 13$ are consecutive terms of an arithmetic sequence, in that order.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-6x + 15) - (3x + 9) = (9x + 13) - (-6x + 15)$",
                  "reason": "Common difference: consecutive terms of an arithmetic sequence differ by the same number, so the second minus the first equals the third minus the second."
                },
                {
                  "step": "$-6x + 15 - 3x - 9 = 9x + 13 + 6x - 15$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$-9x + 6 = 15x - 2$",
                  "reason": "Collecting like terms: $-6x - 3x = -9x$ on the left and $9x + 6x = 15x$ on the right, with the numbers collected beside them."
                },
                {
                  "step": "$-24x = -8$",
                  "reason": "Adding the same number to both sides: adding $-15x$ and $-6$ to both sides collects the terms in $x$ on the left."
                },
                {
                  "step": "$x = \\dfrac{1}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-24$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t177-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the 51st term of the arithmetic sequence $79, 71, 63, \\dots$, and write that line right.",
            "given": [
              "$d = 71 - 79$",
              "$d = -8$",
              "$a_{51} = 79 + (51 - 1) \\cdot (-8)$",
              "$(51 - 1) \\cdot (-8) = 400$",
              "$79 + 400 = 479$",
              "$a_{51} = 479$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the 51st term of the arithmetic sequence $79, 71, 63, \\dots$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every line before line 4 is right.",
                "reason": "Line 1 takes the first term from the second, and each line after it, up to the wrong one, follows from the lines before it by a rule that holds."
              },
              {
                "step": "Line 4 writes $(51 - 1) \\cdot (-8)$ as $400$.",
                "reason": "A sign lost: by the signs of products, a positive number times a negative number is negative, so $50 \\cdot (-8) = -400$."
              },
              {
                "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                "reason": "Each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 4 written right is $(51 - 1) \\cdot (-8) = -400$.",
                "reason": "Worked by the same rule with every sign kept, the line is true."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the 15th term of the arithmetic sequence $45, 39, 33, \\dots$, and write that line right.",
              "given": [
                "$d = 39 - 45$",
                "$d = 6$",
                "$a_{15} = 45 + (15 - 1) \\cdot 6$",
                "$(15 - 1) \\cdot 6 = 84$",
                "$45 + 84 = 129$",
                "$a_{15} = 129$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: d = -6",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the 15th term of the arithmetic sequence $45, 39, 33, \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 2 is right.",
                  "reason": "Line 1 takes the first term from the second, and each line after it, up to the wrong one, follows from the lines before it by a rule that holds."
                },
                {
                  "step": "Line 2 writes $39 - 45$ as $6$.",
                  "reason": "A sign lost: by subtraction as addition, $39 - 45 = 39 + (-45) = -6$, and a sequence whose terms fall has a negative common difference."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $d = -6$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the 32nd term of the arithmetic sequence $55, 47, 39, \\dots$, and write that line right.",
              "given": [
                "$d = 47 - 55$",
                "$d = -8$",
                "$a_{32} = 55 + (32 - 1) \\cdot (-8)$",
                "$(32 - 1) \\cdot (-8) = -248$",
                "$55 + (-248) = 193$",
                "$a_{32} = 193$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 55+(-248) = -193",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the 32nd term of the arithmetic sequence $55, 47, 39, \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 5 is right.",
                  "reason": "Line 1 takes the first term from the second, and each line after it, up to the wrong one, follows from the lines before it by a rule that holds."
                },
                {
                  "step": "Line 5 writes $55 + (-248)$ as $193$.",
                  "reason": "A sign lost: by subtraction as addition, $55 + (-248) = 55 - 248$, and taking $248$ from the smaller number $55$ leaves a negative number, $-193$."
                },
                {
                  "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 5 written right is $55 + (-248) = -193$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the 38th term of the arithmetic sequence $32, 27, 22, \\dots$, and write that line right.",
              "given": [
                "$d = 27 - 32$",
                "$d = -5$",
                "$a_{38} = 32 + (38 - 1) \\cdot (-5)$",
                "$(38 - 1) \\cdot (-5) = 185$",
                "$32 + 185 = 217$",
                "$a_{38} = 217$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (38-1)*(-5) = -185",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the 38th term of the arithmetic sequence $32, 27, 22, \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 4 is right.",
                  "reason": "Line 1 takes the first term from the second, and each line after it, up to the wrong one, follows from the lines before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $(38 - 1) \\cdot (-5)$ as $185$.",
                  "reason": "A sign lost: by the signs of products, a positive number times a negative number is negative, so $37 \\cdot (-5) = -185$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $(38 - 1) \\cdot (-5) = -185$.",
                  "reason": "Worked by the same rule with every sign kept, the line is true."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the number of terms of the arithmetic sequence $6, 10, 14, \\dots, 126$, and write that line right.",
            "given": [
              "$6 + (n - 1) \\cdot 4 = 126$",
              "$6 + 4n - 4 = 126$",
              "$4n + 2 = 126$",
              "$4n + 2 = 126 - 2 = 124$",
              "$4n = 122$",
              "$n = \\dfrac{122}{4} = \\dfrac{61}{2}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the number of terms of the arithmetic sequence $6, 10, 14, \\dots, 126$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every line before line 4 is right.",
                "reason": "Line 1 is the $n$th term $a + (n - 1)d$ set equal to the last term, and each line after it, up to the wrong one, follows from the line before it by a rule that holds."
              },
              {
                "step": "Line 4 takes $2$ from the right side alone and runs on with a second equals sign, so it states $4n + 2 = 124$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 3 the left side $4n + 2$ equals $126$, not $124$."
              },
              {
                "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                "reason": "Each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 4 written right is $4n = 124$.",
                "reason": "Adding the same number to both sides: adding $-2$ to both sides of line 3 changes the two sides together."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the number of terms of the arithmetic sequence $23, 27, 31, \\dots, 95$, and write that line right.",
              "given": [
                "$23 + (n - 1) \\cdot 4 = 95$",
                "$23 + (n - 1) \\cdot 4 = 95 - 23 = 72$",
                "$(n - 1) \\cdot 4 = 49$",
                "$n - 1 = \\dfrac{49}{4}$",
                "$n = \\dfrac{49}{4} + 1 = \\dfrac{53}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (n-1)*4 = 72",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number of terms of the arithmetic sequence $23, 27, 31, \\dots, 95$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 2 is right.",
                  "reason": "Line 1 is the $n$th term $a + (n - 1)d$ set equal to the last term, and each line after it, up to the wrong one, follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 takes $23$ from the right side alone and runs on with a second equals sign, so it states $23 + (n - 1) \\cdot 4 = 72$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side $23 + (n - 1) \\cdot 4$ equals $95$, not $72$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $(n - 1) \\cdot 4 = 72$.",
                  "reason": "Adding the same number to both sides: adding $-23$ to both sides of line 1 changes the two sides together."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the number of terms of the arithmetic sequence $38, 46, 54, \\dots, 318$, and write that line right.",
              "given": [
                "$38 + (n - 1) \\cdot 8 = 318$",
                "$8n + 30 = 318$",
                "$8n + 30 = 318 - 30 = 288$",
                "$8n = 258$",
                "$n = \\dfrac{258}{8} = \\dfrac{129}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 8*n = 288",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number of terms of the arithmetic sequence $38, 46, 54, \\dots, 318$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 3 is right.",
                  "reason": "Line 1 is the $n$th term $a + (n - 1)d$ set equal to the last term, and each line after it, up to the wrong one, follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 takes $30$ from the right side alone and runs on with a second equals sign, so it states $8n + 30 = 288$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side $8n + 30$ equals $318$, not $288$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $8n = 288$.",
                  "reason": "Adding the same number to both sides: adding $-30$ to both sides of line 2 changes the two sides together."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the number of terms of the arithmetic sequence $31, 38, 45, \\dots, 290$, and write that line right.",
              "given": [
                "$31 + (n - 1) \\cdot 7 = 290$",
                "$31 + (n - 1) \\cdot 7 = 290 - 31 = 259$",
                "$(n - 1) \\cdot 7 = 228$",
                "$n - 1 = \\dfrac{228}{7}$",
                "$n = \\dfrac{228}{7} + 1 = \\dfrac{235}{7}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (n-1)*7 = 259",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number of terms of the arithmetic sequence $31, 38, 45, \\dots, 290$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 2 is right.",
                  "reason": "Line 1 is the $n$th term $a + (n - 1)d$ set equal to the last term, and each line after it, up to the wrong one, follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 takes $31$ from the right side alone and runs on with a second equals sign, so it states $31 + (n - 1) \\cdot 7 = 259$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side $31 + (n - 1) \\cdot 7$ equals $290$, not $259$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $(n - 1) \\cdot 7 = 259$.",
                  "reason": "Adding the same number to both sides: adding $-31$ to both sides of line 1 changes the two sides together."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t177-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the fourth term of an arithmetic sequence whose first term is $x$ and in which each term is $9$ less than the one before.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the fourth term of an arithmetic sequence whose first term is $x$ and in which each term is $9$ less than the one before.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first term is $x$ and the common difference is $-9$.",
                "reason": "Common difference: \"each term is $9$ less than the one before\" adds $-9$ at each step, so $d = -9$."
              },
              {
                "step": "The fourth term is $x + (4 - 1) \\cdot (-9)$.",
                "reason": "The $n$th term $a + (n - 1)d$: the first term and the common difference go in place of $a$ and $d$, and $n = 4$."
              },
              {
                "step": "$y = x + (4 - 1) \\cdot (-9)$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $y$ alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the 17th term of an arithmetic sequence with first term $x$ and common difference $4$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x+(17-1)*4",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the 17th term of an arithmetic sequence with first term $x$ and common difference $4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $x$ and the common difference is $4$.",
                  "reason": "Common difference: the sentence names the common difference, $d = 4$."
                },
                {
                  "step": "The 17th term is $x + (17 - 1) \\cdot 4$.",
                  "reason": "The $n$th term $a + (n - 1)d$: the first term and the common difference go in place of $a$ and $d$, and $n = 17$."
                },
                {
                  "step": "$y = x + (17 - 1) \\cdot 4$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $n$th term of an arithmetic sequence whose first term is $-1$ and in which each term is $2$ less than the one before.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1+(n-1)*(-2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $n$th term of an arithmetic sequence whose first term is $-1$ and in which each term is $2$ less than the one before.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $-1$ and the common difference is $-2$.",
                  "reason": "Common difference: \"each term is $2$ less than the one before\" adds $-2$ at each step, so $d = -2$."
                },
                {
                  "step": "The $n$th term is $-1 + (n - 1) \\cdot (-2)$.",
                  "reason": "The $n$th term $a + (n - 1)d$: the first term and the common difference go in place of $a$ and $d$, with $n$ kept as it is."
                },
                {
                  "step": "$y = -1 + (n - 1) \\cdot (-2)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the 9th term of an arithmetic sequence with first term $x$ and common difference $-7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x+(9-1)*(-7)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the 9th term of an arithmetic sequence with first term $x$ and common difference $-7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $x$ and the common difference is $-7$.",
                  "reason": "Common difference: the sentence names the common difference, $d = -7$."
                },
                {
                  "step": "The 9th term is $x + (9 - 1) \\cdot (-7)$.",
                  "reason": "The $n$th term $a + (n - 1)d$: the first term and the common difference go in place of $a$ and $d$, and $n = 9$."
                },
                {
                  "step": "$y = x + (9 - 1) \\cdot (-7)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $y$ alone on the left."
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
      "id": "t177-p1",
      "method": "direct proof",
      "statement": "For an arithmetic sequence $a_1, a_2, a_3, \\dots$ with common difference $d$, and whole numbers $n$ and $k$ with $k$ less than $n$, $a_n = \\dfrac{a_{n-k} + a_{n+k}}{2}$.",
      "idea": "Going $k$ places on from $a_{n-k}$ reaches $a_n$, and going $k$ places on from $a_n$ reaches $a_{n+k}$, and each walk adds $kd$. So $a_n$ sits $kd$ above the earlier term and $kd$ below the later one, and adding the two equations cancels the steps.",
      "lines": [
        {
          "line": "The term $a_n$ is $k$ places after $a_{n-k}$, so $a_n = a_{n-k} + kd$.",
          "reason": "The $n$th term $a + (n - 1)d$, read from $a_{n-k}$ as a first term: the term $k$ places on is its $(k + 1)$th term."
        },
        {
          "line": "The term $a_{n+k}$ is $k$ places after $a_n$, so $a_n + kd = a_{n+k}$.",
          "reason": "The $n$th term $a + (n - 1)d$, read from $a_n$ as a first term: the term $k$ places on is its $(k + 1)$th term."
        },
        {
          "line": "So $a_n - kd = a_{n-k}$.",
          "reason": "Adding the same number to both sides: $-kd$ is added to both sides of line 1."
        },
        {
          "line": "So $(a_n - kd) + (a_n + kd) = a_{n-k} + a_{n+k}$.",
          "reason": "Adding two equations: the left sides of lines 3 and 2 add, and so do their right sides."
        },
        {
          "line": "The sum $(a_n - kd) + (a_n + kd)$ equals $2a_n$.",
          "reason": "Collecting like terms: $a_n + a_n = 2a_n$, and $-kd + kd = 0$."
        },
        {
          "line": "So $2a_n = a_{n-k} + a_{n+k}$.",
          "reason": "Transitive property: by lines 4 and 5, $2a_n$ and $a_{n-k} + a_{n+k}$ both equal $(a_n - kd) + (a_n + kd)$."
        },
        {
          "line": "Therefore $a_n = \\dfrac{a_{n-k} + a_{n+k}}{2}$.",
          "reason": "Dividing both sides by a nonzero number: both sides of line 6 are divided by $2$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t177-s1",
      "method": "direct proof",
      "statement": "Prove that if $a_1, a_2, a_3, \\dots$ is an arithmetic sequence with common difference $d$ and $c$ is a number, then $ca_1, ca_2, ca_3, \\dots$ is an arithmetic sequence with common difference $cd$. Facts it may use: arithmetic sequence, common difference, the distributive law, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "For every whole number $n$ from 1 up, $a_{n+1} - a_n = d$.",
            "reason": "Common difference: each term of an arithmetic sequence minus the one before is $d$."
          },
          {
            "line": "For every such $n$, $ca_{n+1} - ca_n = c(a_{n+1} - a_n)$.",
            "reason": "The distributive law, read backwards: $c$ is taken out of both terms."
          },
          {
            "line": "So $ca_{n+1} - ca_n = cd$.",
            "reason": "Substituting a value: $a_{n+1} - a_n$ is replaced by $d$, which equals it by line 1."
          },
          {
            "line": "Therefore $ca_1, ca_2, ca_3, \\dots$ is an arithmetic sequence with common difference $cd$.",
            "reason": "Arithmetic sequence: by line 3 each term minus the one before is the same number, $cd$, for every $n$."
          }
        ]
      }
    },
    {
      "id": "t177-s2",
      "method": "direct proof",
      "statement": "Prove that if $a_1$, $a_2$, $a_3$ are consecutive terms of an arithmetic sequence, then $a_1^2 - a_2a_3$, $a_2^2 - a_1a_3$, $a_3^2 - a_1a_2$ are consecutive terms of an arithmetic sequence, in that order. Facts it may use: a term midway between two others is their mean, multiplying both sides by the same number, square of a binomial, the commutative and associative laws of multiplication, the distributive law, substituting a value, multiplying out, transitive property, adding the same number to both sides, collecting like terms, subtracting a bracket changes every sign in it, arithmetic sequence.",
      "check": {
        "proof": [
          {
            "line": "The term $a_2$ is one place after $a_1$ and one place before $a_3$, so $a_2 = \\dfrac{a_1 + a_3}{2}$.",
            "reason": "A term midway between two others is their mean."
          },
          {
            "line": "So $2a_2 = a_1 + a_3$.",
            "reason": "Multiplying both sides by the same number: both sides of line 1 are multiplied by $2$."
          },
          {
            "line": "So $2a_2(a_1 + a_3) = (a_1 + a_3)(a_1 + a_3)$.",
            "reason": "Multiplying both sides by the same number: both sides of line 2 are multiplied by $a_1 + a_3$."
          },
          {
            "line": "The product $(a_1 + a_3)(a_1 + a_3)$ equals $a_1^2 + 2a_1a_3 + a_3^2$.",
            "reason": "Square of a binomial: a bracket times itself is its square, and $(a + b)^2 = a^2 + 2ab + b^2$."
          },
          {
            "line": "The product $2a_2(a_1 + a_3)$ equals $a_2 \\cdot 2(a_1 + a_3)$.",
            "reason": "The commutative and associative laws of multiplication: the factors $2$ and $a_2$ change places."
          },
          {
            "line": "The product $a_2 \\cdot 2(a_1 + a_3)$ equals $a_2\\big((a_1 + a_3) + (a_1 + a_3)\\big)$.",
            "reason": "The distributive law: $2 = 1 + 1$, so $2(a_1 + a_3)$ is $(a_1 + a_3)$ added to itself."
          },
          {
            "line": "The product $a_2\\big((a_1 + a_3) + (a_1 + a_3)\\big)$ equals $a_2(2a_2 + a_1 + a_3)$.",
            "reason": "Substituting a value: the first $a_1 + a_3$ is replaced by $2a_2$, which equals it by line 2."
          },
          {
            "line": "The product $a_2(2a_2 + a_1 + a_3)$ equals $2a_2^2 + a_1a_2 + a_2a_3$.",
            "reason": "Multiplying out: $a_2$ multiplies each term of the bracket."
          },
          {
            "line": "So $a_1^2 + 2a_1a_3 + a_3^2 = 2a_2^2 + a_1a_2 + a_2a_3$.",
            "reason": "Transitive property: lines 3 to 8 join the two expressions through expressions equal to them."
          },
          {
            "line": "So $a_1^2 + 2a_1a_3 + a_3^2 - a_1^2 - a_1a_2 - a_2^2 - a_1a_3 = 2a_2^2 + a_1a_2 + a_2a_3 - a_1^2 - a_1a_2 - a_2^2 - a_1a_3$.",
            "reason": "Adding the same number to both sides: $-a_1^2 - a_1a_2 - a_2^2 - a_1a_3$ is added to both sides of line 9."
          },
          {
            "line": "So $a_3^2 - a_1a_2 - a_2^2 + a_1a_3 = a_2^2 - a_1a_3 - a_1^2 + a_2a_3$.",
            "reason": "Collecting like terms: on the left $a_1^2 - a_1^2 = 0$ and $2a_1a_3 - a_1a_3 = a_1a_3$; on the right $2a_2^2 - a_2^2 = a_2^2$ and $a_1a_2 - a_1a_2 = 0$."
          },
          {
            "line": "So $(a_3^2 - a_1a_2) - (a_2^2 - a_1a_3) = (a_2^2 - a_1a_3) - (a_1^2 - a_2a_3)$.",
            "reason": "Subtracting a bracket changes every sign in it, read backwards on each side of line 11."
          },
          {
            "line": "Therefore $a_1^2 - a_2a_3$, $a_2^2 - a_1a_3$, $a_3^2 - a_1a_2$ are consecutive terms of an arithmetic sequence, in that order.",
            "reason": "Arithmetic sequence: by line 12 the third minus the second equals the second minus the first, so both steps add one fixed number."
          }
        ]
      }
    },
    {
      "id": "t177-s3",
      "method": "direct proof",
      "statement": "Prove that if $a$, $b$, $c$ are numbers with $b = \\dfrac{a + c}{2}$, then $a$, $b$, $c$ are consecutive terms of an arithmetic sequence, in that order. Facts it may use: substituting a value, subtracting fractions with the same denominator, subtracting a bracket changes every sign in it, collecting like terms, transitive property, arithmetic sequence.",
      "check": {
        "proof": [
          {
            "line": "The difference $b - a$ equals $\\dfrac{a + c}{2} - a$.",
            "reason": "Substituting a value: $b$ is replaced by $\\dfrac{a + c}{2}$, which equals it."
          },
          {
            "line": "The difference $\\dfrac{a + c}{2} - a$ equals $\\dfrac{a + c - 2a}{2}$.",
            "reason": "Subtracting fractions with the same denominator: $a = \\dfrac{2a}{2}$, and the tops are subtracted over the denominator $2$."
          },
          {
            "line": "The fraction $\\dfrac{a + c - 2a}{2}$ equals $\\dfrac{c - a}{2}$.",
            "reason": "Collecting like terms: $a - 2a = -a$."
          },
          {
            "line": "The difference $c - b$ equals $c - \\dfrac{a + c}{2}$.",
            "reason": "Substituting a value: $b$ is replaced by $\\dfrac{a + c}{2}$, which equals it."
          },
          {
            "line": "The difference $c - \\dfrac{a + c}{2}$ equals $\\dfrac{2c - (a + c)}{2}$.",
            "reason": "Subtracting fractions with the same denominator: $c = \\dfrac{2c}{2}$, and the tops are subtracted over the denominator $2$."
          },
          {
            "line": "The fraction $\\dfrac{2c - (a + c)}{2}$ equals $\\dfrac{2c - a - c}{2}$.",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "The fraction $\\dfrac{2c - a - c}{2}$ equals $\\dfrac{c - a}{2}$.",
            "reason": "Collecting like terms: $2c - c = c$."
          },
          {
            "line": "So $b - a = c - b$.",
            "reason": "Transitive property: by lines 1 to 3 and lines 4 to 7, both differences equal $\\dfrac{c - a}{2}$."
          },
          {
            "line": "Therefore $a$, $b$, $c$ are consecutive terms of an arithmetic sequence, in that order.",
            "reason": "Arithmetic sequence: by line 8, $b$ is $a$ plus the number $\\dfrac{c - a}{2}$, and $c$ is $b$ plus the same number."
          }
        ]
      }
    }
  ]
}
