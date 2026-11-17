export default {
  "number": 178,
  "title": "Arithmetic series",
  "section": 17,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "594-602, 621-627"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the sum $4 + 13 + 22 + \\dots + 103$.",
    "form": "Answer as an integer.",
    "answer": "642",
    "solution": [
      "Find the sum $4 + 13 + 22 + \\dots + 103$.",
      "The common difference is $13 - 4 = 9$.",
      "$4 + (n - 1) \\cdot 9 = 103$",
      "$(n - 1) \\cdot 9 = 99$",
      "$n - 1 = 11$",
      "$n = 12$",
      "The sum is $12 \\cdot \\dfrac{4 + 103}{2}$.",
      "$12 \\cdot \\dfrac{4 + 103}{2} = 12 \\cdot \\dfrac{107}{2}$",
      "$12 \\cdot \\dfrac{107}{2} = 642$"
    ]
  },
  "ideas": [
    {
      "name": "Arithmetic series",
      "concrete": "The series $4 + 9 + 14 + 19 + 24 + 29$ written backwards is $29 + 24 + 19 + 14 + 9 + 4$. Adding the two term by term gives 6 columns, each $4 + 29 = 33$, so twice the sum is $6 \\cdot 33 = 198$ and the sum is $99$.",
      "general": "A **series** is a sum of the terms of a sequence, and an **arithmetic series** is a sum of consecutive terms of an arithmetic sequence. For a whole number $n \\ge 1$ and numbers $a$ and $d$, the arithmetic series $a + (a + d) + \\dots + (a + (n - 1)d)$ of $n$ terms has sum $n \\cdot \\dfrac{a + (a + (n - 1)d)}{2}$: the number of terms times the mean of the first and last term."
    }
  ],
  "kinds": [
    {
      "id": "t178-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the sum of the arithmetic series of 13 terms with first term $-8$ and last term $40$.",
            "lines": [
              {
                "step": "Find the sum of the arithmetic series of 13 terms with first term $-8$ and last term $40$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum is $13 \\cdot \\dfrac{-8 + 40}{2}$.",
                "reason": "Sum = number of terms × mean of the first and last term, with $13$ terms, first term $-8$ and last term $40$."
              },
              {
                "step": "$13 \\cdot \\dfrac{-8 + 40}{2} = 13 \\cdot 16$",
                "reason": "Order of operations, from arithmetic: the top of the fraction is added first, then halved."
              },
              {
                "step": "$13 \\cdot 16 = 208$",
                "reason": "Multiplying rational numbers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of an arithmetic series whose first term is $5$, whose last term is $93$, and which has 23 terms.",
              "form": "Answer as an integer.",
              "answer": "1127",
              "lines": [
                {
                  "step": "Find the sum of an arithmetic series whose first term is $5$, whose last term is $93$, and which has 23 terms.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $23 \\cdot \\dfrac{5 + 93}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $23$ terms, first term $5$ and last term $93$."
                },
                {
                  "step": "$23 \\cdot \\dfrac{5 + 93}{2} = 23 \\cdot 49$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first, then halved."
                },
                {
                  "step": "$23 \\cdot 49 = 1127$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum of the arithmetic series of 14 terms with first term $61$ and last term $-17$.",
              "form": "Answer as an integer.",
              "answer": "308",
              "lines": [
                {
                  "step": "Find the sum of the arithmetic series of 14 terms with first term $61$ and last term $-17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $14 \\cdot \\dfrac{61 + (-17)}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $14$ terms, first term $61$ and last term $-17$."
                },
                {
                  "step": "$14 \\cdot \\dfrac{61 + (-17)}{2} = 14 \\cdot 22$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first, then halved."
                },
                {
                  "step": "$14 \\cdot 22 = 308$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum of an arithmetic series whose first term is $\\dfrac{1}{3}$, whose last term is $\\dfrac{19}{3}$, and which has 9 terms.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the sum of an arithmetic series whose first term is $\\dfrac{1}{3}$, whose last term is $\\dfrac{19}{3}$, and which has 9 terms.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $9 \\cdot \\dfrac{\\frac{1}{3} + \\frac{19}{3}}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $9$ terms, first term $\\dfrac{1}{3}$ and last term $\\dfrac{19}{3}$."
                },
                {
                  "step": "$9 \\cdot \\dfrac{\\frac{1}{3} + \\frac{19}{3}}{2} = 9 \\cdot \\dfrac{10}{3}$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first, then halved."
                },
                {
                  "step": "$9 \\cdot \\dfrac{10}{3} = 30$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum $6 + 13 + 20 + \\dots + 97$.",
            "lines": [
              {
                "step": "Find the sum $6 + 13 + 20 + \\dots + 97$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common difference is $13 - 6 = 7$.",
                "reason": "Common difference: a term minus the term before it."
              },
              {
                "step": "$6 + (n - 1) \\cdot 7 = 97$",
                "reason": "The $n$th term $a + (n - 1)d$; the last term is the $n$th term."
              },
              {
                "step": "$(n - 1) \\cdot 7 = 91$",
                "reason": "Adding the same number to both sides: $-6$ is added to both sides."
              },
              {
                "step": "$n - 1 = 13$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
              },
              {
                "step": "$n = 14$",
                "reason": "Adding the same number to both sides: $1$ is added to both sides."
              },
              {
                "step": "The sum is $14 \\cdot \\dfrac{6 + 97}{2}$.",
                "reason": "Sum = number of terms × mean of the first and last term, with $14$ terms."
              },
              {
                "step": "$14 \\cdot \\dfrac{6 + 97}{2} = 14 \\cdot \\dfrac{103}{2}$",
                "reason": "Order of operations, from arithmetic: the top of the fraction is added first."
              },
              {
                "step": "$14 \\cdot \\dfrac{103}{2} = 721$",
                "reason": "Multiplying rational numbers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum $85 + 79 + 73 + \\dots + (-11)$.",
              "form": "Answer as an integer.",
              "answer": "629",
              "lines": [
                {
                  "step": "Find the sum $85 + 79 + 73 + \\dots + (-11)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common difference is $79 - 85 = -6$.",
                  "reason": "Common difference: a term minus the term before it."
                },
                {
                  "step": "$85 + (n - 1) \\cdot (-6) = -11$",
                  "reason": "The $n$th term $a + (n - 1)d$; the last term is the $n$th term."
                },
                {
                  "step": "$(n - 1) \\cdot (-6) = -96$",
                  "reason": "Adding the same number to both sides: $-85$ is added to both sides."
                },
                {
                  "step": "$n - 1 = 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
                },
                {
                  "step": "$n = 17$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $17 \\cdot \\dfrac{85 + (-11)}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $17$ terms."
                },
                {
                  "step": "$17 \\cdot \\dfrac{85 + (-11)}{2} = 17 \\cdot \\dfrac{74}{2}$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first."
                },
                {
                  "step": "$17 \\cdot \\dfrac{74}{2} = 629$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum $-20 + (-17) + (-14) + \\dots + 46$.",
              "form": "Answer as an integer.",
              "answer": "299",
              "lines": [
                {
                  "step": "Find the sum $-20 + (-17) + (-14) + \\dots + 46$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common difference is $-17 - (-20) = 3$.",
                  "reason": "Common difference: a term minus the term before it."
                },
                {
                  "step": "$-20 + (n - 1) \\cdot 3 = 46$",
                  "reason": "The $n$th term $a + (n - 1)d$; the last term is the $n$th term."
                },
                {
                  "step": "$(n - 1) \\cdot 3 = 66$",
                  "reason": "Adding the same number to both sides: $20$ is added to both sides."
                },
                {
                  "step": "$n - 1 = 22$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$n = 23$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $23 \\cdot \\dfrac{-20 + 46}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $23$ terms."
                },
                {
                  "step": "$23 \\cdot \\dfrac{-20 + 46}{2} = 23 \\cdot \\dfrac{26}{2}$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first."
                },
                {
                  "step": "$23 \\cdot \\dfrac{26}{2} = 299$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum $\\dfrac{3}{4} + \\dfrac{5}{4} + \\dfrac{7}{4} + \\dots + \\dfrac{37}{4}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "90",
              "lines": [
                {
                  "step": "Find the sum $\\dfrac{3}{4} + \\dfrac{5}{4} + \\dfrac{7}{4} + \\dots + \\dfrac{37}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common difference is $\\dfrac{5}{4} - \\dfrac{3}{4} = \\dfrac{1}{2}$.",
                  "reason": "Common difference: a term minus the term before it."
                },
                {
                  "step": "$\\dfrac{3}{4} + (n - 1) \\cdot \\dfrac{1}{2} = \\dfrac{37}{4}$",
                  "reason": "The $n$th term $a + (n - 1)d$; the last term is the $n$th term."
                },
                {
                  "step": "$(n - 1) \\cdot \\dfrac{1}{2} = \\dfrac{17}{2}$",
                  "reason": "Adding the same number to both sides: $-\\dfrac{3}{4}$ is added to both sides."
                },
                {
                  "step": "$n - 1 = 17$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{1}{2}$."
                },
                {
                  "step": "$n = 18$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $18 \\cdot \\dfrac{\\frac{3}{4} + \\frac{37}{4}}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $18$ terms."
                },
                {
                  "step": "$18 \\cdot \\dfrac{\\frac{3}{4} + \\frac{37}{4}}{2} = 18 \\cdot \\dfrac{10}{2}$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first."
                },
                {
                  "step": "$18 \\cdot \\dfrac{10}{2} = 90$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the first 16 terms of the arithmetic series with first term $9$ and common difference $-4$.",
            "lines": [
              {
                "step": "Find the sum of the first 16 terms of the arithmetic series with first term $9$ and common difference $-4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The last term is the 16th term, $9 + (16 - 1) \\cdot (-4) = -51$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $a = 9$, $d = -4$ and $n = 16$."
              },
              {
                "step": "The sum is $16 \\cdot \\dfrac{9 + (-51)}{2}$.",
                "reason": "Sum = number of terms × mean of the first and last term, with $16$ terms."
              },
              {
                "step": "$16 \\cdot \\dfrac{9 + (-51)}{2} = 16 \\cdot \\dfrac{-42}{2}$",
                "reason": "Order of operations, from arithmetic: the top of the fraction is added first."
              },
              {
                "step": "$16 \\cdot \\dfrac{-42}{2} = -336$",
                "reason": "Multiplying rational numbers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the first 21 terms of the arithmetic series with first term $-12$ and common difference $5$.",
              "form": "Answer as an integer.",
              "answer": "798",
              "lines": [
                {
                  "step": "Find the sum of the first 21 terms of the arithmetic series with first term $-12$ and common difference $5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term is the 21st term, $-12 + (21 - 1) \\cdot 5 = 88$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = -12$, $d = 5$ and $n = 21$."
                },
                {
                  "step": "The sum is $21 \\cdot \\dfrac{-12 + 88}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $21$ terms."
                },
                {
                  "step": "$21 \\cdot \\dfrac{-12 + 88}{2} = 21 \\cdot \\dfrac{76}{2}$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first."
                },
                {
                  "step": "$21 \\cdot \\dfrac{76}{2} = 798$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum of the first 13 terms of the arithmetic series with first term $40$ and common difference $7$.",
              "form": "Answer as an integer.",
              "answer": "1066",
              "lines": [
                {
                  "step": "Find the sum of the first 13 terms of the arithmetic series with first term $40$ and common difference $7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term is the 13th term, $40 + (13 - 1) \\cdot 7 = 124$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 40$, $d = 7$ and $n = 13$."
                },
                {
                  "step": "The sum is $13 \\cdot \\dfrac{40 + 124}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $13$ terms."
                },
                {
                  "step": "$13 \\cdot \\dfrac{40 + 124}{2} = 13 \\cdot \\dfrac{164}{2}$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first."
                },
                {
                  "step": "$13 \\cdot \\dfrac{164}{2} = 1066$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum of the first 10 terms of the arithmetic series with first term $\\dfrac{5}{2}$ and common difference $-\\dfrac{3}{4}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-35/4",
              "lines": [
                {
                  "step": "Find the sum of the first 10 terms of the arithmetic series with first term $\\dfrac{5}{2}$ and common difference $-\\dfrac{3}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term is the 10th term, $\\dfrac{5}{2} + (10 - 1) \\cdot \\left(-\\dfrac{3}{4}\\right) = -\\dfrac{17}{4}$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = \\dfrac{5}{2}$, $d = -\\dfrac{3}{4}$ and $n = 10$."
                },
                {
                  "step": "The sum is $10 \\cdot \\dfrac{\\frac{5}{2} + \\left(-\\frac{17}{4}\\right)}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term, with $10$ terms."
                },
                {
                  "step": "$10 \\cdot \\dfrac{\\frac{5}{2} + \\left(-\\frac{17}{4}\\right)}{2} = 10 \\cdot \\dfrac{-\\frac{7}{4}}{2}$",
                  "reason": "Order of operations, from arithmetic: the top of the fraction is added first."
                },
                {
                  "step": "$10 \\cdot \\dfrac{-\\frac{7}{4}}{2} = -\\dfrac{35}{4}$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t178-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the common difference of the arithmetic series of 12 terms with first term $6$ and sum $270$.",
            "lines": [
              {
                "step": "Find the common difference of the arithmetic series of 12 terms with first term $6$ and sum $270$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The last term, the 12th, is $6 + 11d$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $n = 12$."
              },
              {
                "step": "$\\dfrac{12(6 + (6 + 11d))}{2} = 270$",
                "reason": "Sum = number of terms × mean of the first and last term, with $12$ terms."
              },
              {
                "step": "$6 + (6 + 11d) = 45$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{6}$."
              },
              {
                "step": "$11d + 12 = 45$",
                "reason": "Collecting like terms."
              },
              {
                "step": "$11d = 33$",
                "reason": "Adding the same number to both sides: $-12$ is added to both sides."
              },
              {
                "step": "$d = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the common difference of the arithmetic series of 9 terms with first term $-4$ and sum $144$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series of 9 terms with first term $-4$ and sum $144$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term, the 9th, is $-4 + 8d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 9$."
                },
                {
                  "step": "$\\dfrac{9(-4 + (-4 + 8d))}{2} = 144$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $9$ terms."
                },
                {
                  "step": "$-4 + (-4 + 8d) = 32$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{9}$."
                },
                {
                  "step": "$8d - 8 = 32$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$8d = 40$",
                  "reason": "Adding the same number to both sides: $8$ is added to both sides."
                },
                {
                  "step": "$d = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                }
              ]
            },
            {
              "prompt": "Find the common difference of the arithmetic series of 8 terms with first term $30$ and sum $44$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-7",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series of 8 terms with first term $30$ and sum $44$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term, the 8th, is $30 + 7d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 8$."
                },
                {
                  "step": "$\\dfrac{8(30 + (30 + 7d))}{2} = 44$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $8$ terms."
                },
                {
                  "step": "$30 + (30 + 7d) = 11$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{4}$."
                },
                {
                  "step": "$7d + 60 = 11$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$7d = -49$",
                  "reason": "Adding the same number to both sides: $-60$ is added to both sides."
                },
                {
                  "step": "$d = -7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            },
            {
              "prompt": "Find the common difference of the arithmetic series of 10 terms with first term $\\dfrac{1}{2}$ and sum $\\dfrac{155}{4}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3/4",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series of 10 terms with first term $\\dfrac{1}{2}$ and sum $\\dfrac{155}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term, the 10th, is $\\dfrac{1}{2} + 9d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 10$."
                },
                {
                  "step": "$\\dfrac{10(\\dfrac{1}{2} + (\\dfrac{1}{2} + 9d))}{2} = \\dfrac{155}{4}$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $10$ terms."
                },
                {
                  "step": "$\\dfrac{1}{2} + (\\dfrac{1}{2} + 9d) = \\dfrac{31}{4}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{5}$."
                },
                {
                  "step": "$9d + 1 = \\dfrac{31}{4}$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$9d = \\dfrac{27}{4}$",
                  "reason": "Adding the same number to both sides: $-1$ is added to both sides."
                },
                {
                  "step": "$d = \\dfrac{3}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the common difference of the arithmetic series whose first 4 terms have sum $38$ and whose first 9 terms have sum $153$.",
            "lines": [
              {
                "step": "Find the common difference of the arithmetic series whose first 4 terms have sum $38$ and whose first 9 terms have sum $153$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The 4th term is $a + 3d$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $n = 4$."
              },
              {
                "step": "$\\dfrac{4(a + (a + 3d))}{2} = 38$",
                "reason": "Sum = number of terms × mean of the first and last term, with $4$ terms."
              },
              {
                "step": "$a + (a + 3d) = 19$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{2}$."
              },
              {
                "step": "$2a + 3d = 19$",
                "reason": "Collecting like terms."
              },
              {
                "step": "The 9th term is $a + 8d$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $n = 9$."
              },
              {
                "step": "$\\dfrac{9(a + (a + 8d))}{2} = 153$",
                "reason": "Sum = number of terms × mean of the first and last term, with $9$ terms."
              },
              {
                "step": "$a + (a + 8d) = 34$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{9}$."
              },
              {
                "step": "$2a + 8d = 34$",
                "reason": "Collecting like terms."
              },
              {
                "step": "$5d = 15$",
                "reason": "Elimination: the equation of line 5 is taken from the equation of line 9, and $2a$ drops out."
              },
              {
                "step": "$d = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the common difference of the arithmetic series whose first 3 terms have sum $9$ and whose first 8 terms have sum $124$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series whose first 3 terms have sum $9$ and whose first 8 terms have sum $124$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 3rd term is $a + 2d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 3$."
                },
                {
                  "step": "$\\dfrac{3(a + (a + 2d))}{2} = 9$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $3$ terms."
                },
                {
                  "step": "$a + (a + 2d) = 6$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{3}$."
                },
                {
                  "step": "$2a + 2d = 6$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The 8th term is $a + 7d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 8$."
                },
                {
                  "step": "$\\dfrac{8(a + (a + 7d))}{2} = 124$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $8$ terms."
                },
                {
                  "step": "$a + (a + 7d) = 31$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{4}$."
                },
                {
                  "step": "$2a + 7d = 31$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$5d = 25$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 9, and $2a$ drops out."
                },
                {
                  "step": "$d = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find the common difference of the arithmetic series whose first 5 terms have sum $75$ and whose first 12 terms have sum $54$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series whose first 5 terms have sum $75$ and whose first 12 terms have sum $54$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 5th term is $a + 4d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 5$."
                },
                {
                  "step": "$\\dfrac{5(a + (a + 4d))}{2} = 75$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $5$ terms."
                },
                {
                  "step": "$a + (a + 4d) = 30$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{5}$."
                },
                {
                  "step": "$2a + 4d = 30$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The 12th term is $a + 11d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 12$."
                },
                {
                  "step": "$\\dfrac{12(a + (a + 11d))}{2} = 54$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $12$ terms."
                },
                {
                  "step": "$a + (a + 11d) = 9$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{6}$."
                },
                {
                  "step": "$2a + 11d = 9$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$7d = -21$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 9, and $2a$ drops out."
                },
                {
                  "step": "$d = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            },
            {
              "prompt": "Find the common difference of the arithmetic series whose first 6 terms have sum $16$ and whose first 10 terms have sum $40$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2/3",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series whose first 6 terms have sum $16$ and whose first 10 terms have sum $40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 6th term is $a + 5d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 6$."
                },
                {
                  "step": "$\\dfrac{6(a + (a + 5d))}{2} = 16$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $6$ terms."
                },
                {
                  "step": "$a + (a + 5d) = \\dfrac{16}{3}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "$2a + 5d = \\dfrac{16}{3}$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The 10th term is $a + 9d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 10$."
                },
                {
                  "step": "$\\dfrac{10(a + (a + 9d))}{2} = 40$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $10$ terms."
                },
                {
                  "step": "$a + (a + 9d) = 8$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{5}$."
                },
                {
                  "step": "$2a + 9d = 8$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$4d = \\dfrac{8}{3}$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 9, and $2a$ drops out."
                },
                {
                  "step": "$d = \\dfrac{2}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first term of the arithmetic series whose first 5 terms have sum $35$ and whose first 8 terms have sum $116$.",
            "lines": [
              {
                "step": "Find the first term of the arithmetic series whose first 5 terms have sum $35$ and whose first 8 terms have sum $116$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The 5th term is $a + 4d$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $n = 5$."
              },
              {
                "step": "$\\dfrac{5(a + (a + 4d))}{2} = 35$",
                "reason": "Sum = number of terms × mean of the first and last term, with $5$ terms."
              },
              {
                "step": "$a + (a + 4d) = 14$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{5}$."
              },
              {
                "step": "$2a + 4d = 14$",
                "reason": "Collecting like terms."
              },
              {
                "step": "The 8th term is $a + 7d$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $n = 8$."
              },
              {
                "step": "$\\dfrac{8(a + (a + 7d))}{2} = 116$",
                "reason": "Sum = number of terms × mean of the first and last term, with $8$ terms."
              },
              {
                "step": "$a + (a + 7d) = 29$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{4}$."
              },
              {
                "step": "$2a + 7d = 29$",
                "reason": "Collecting like terms."
              },
              {
                "step": "$3d = 15$",
                "reason": "Elimination: the equation of line 5 is taken from the equation of line 9, and $2a$ drops out."
              },
              {
                "step": "$d = 5$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$2a + 4 \\cdot 5 = 14$",
                "reason": "Substituting a value: $d$ is replaced by its value in the equation of line 5."
              },
              {
                "step": "$2a + 20 = 14$",
                "reason": "Multiplying rational numbers, from arithmetic."
              },
              {
                "step": "$2a = -6$",
                "reason": "Adding the same number to both sides: $-20$ is added to both sides."
              },
              {
                "step": "$a = -3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first term of the arithmetic series whose first 6 terms have sum $-81$ and whose first 10 terms have sum $-275$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the first term of the arithmetic series whose first 6 terms have sum $-81$ and whose first 10 terms have sum $-275$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 6th term is $a + 5d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 6$."
                },
                {
                  "step": "$\\dfrac{6(a + (a + 5d))}{2} = -81$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $6$ terms."
                },
                {
                  "step": "$a + (a + 5d) = -27$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "$2a + 5d = -27$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The 10th term is $a + 9d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 10$."
                },
                {
                  "step": "$\\dfrac{10(a + (a + 9d))}{2} = -275$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $10$ terms."
                },
                {
                  "step": "$a + (a + 9d) = -55$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{5}$."
                },
                {
                  "step": "$2a + 9d = -55$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$4d = -28$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 9, and $2a$ drops out."
                },
                {
                  "step": "$d = -7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$2a + 5 \\cdot (-7) = -27$",
                  "reason": "Substituting a value: $d$ is replaced by its value in the equation of line 5."
                },
                {
                  "step": "$2a - 35 = -27$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                },
                {
                  "step": "$2a = 8$",
                  "reason": "Adding the same number to both sides: $35$ is added to both sides."
                },
                {
                  "step": "$a = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find the first term of the arithmetic series whose first 4 terms have sum $6$ and whose first 9 terms have sum $126$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-6",
              "lines": [
                {
                  "step": "Find the first term of the arithmetic series whose first 4 terms have sum $6$ and whose first 9 terms have sum $126$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 4th term is $a + 3d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 4$."
                },
                {
                  "step": "$\\dfrac{4(a + (a + 3d))}{2} = 6$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $4$ terms."
                },
                {
                  "step": "$a + (a + 3d) = 3$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{2}$."
                },
                {
                  "step": "$2a + 3d = 3$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The 9th term is $a + 8d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 9$."
                },
                {
                  "step": "$\\dfrac{9(a + (a + 8d))}{2} = 126$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $9$ terms."
                },
                {
                  "step": "$a + (a + 8d) = 28$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{9}$."
                },
                {
                  "step": "$2a + 8d = 28$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$5d = 25$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 9, and $2a$ drops out."
                },
                {
                  "step": "$d = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$2a + 3 \\cdot 5 = 3$",
                  "reason": "Substituting a value: $d$ is replaced by its value in the equation of line 5."
                },
                {
                  "step": "$2a + 15 = 3$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                },
                {
                  "step": "$2a = -12$",
                  "reason": "Adding the same number to both sides: $-15$ is added to both sides."
                },
                {
                  "step": "$a = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find the first term of the arithmetic series whose first 3 terms have sum $21$ and whose first 7 terms have sum $-21$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the first term of the arithmetic series whose first 3 terms have sum $21$ and whose first 7 terms have sum $-21$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 3rd term is $a + 2d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 3$."
                },
                {
                  "step": "$\\dfrac{3(a + (a + 2d))}{2} = 21$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $3$ terms."
                },
                {
                  "step": "$a + (a + 2d) = 14$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{3}$."
                },
                {
                  "step": "$2a + 2d = 14$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The 7th term is $a + 6d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 7$."
                },
                {
                  "step": "$\\dfrac{7(a + (a + 6d))}{2} = -21$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $7$ terms."
                },
                {
                  "step": "$a + (a + 6d) = -6$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{7}$."
                },
                {
                  "step": "$2a + 6d = -6$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$4d = -20$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 9, and $2a$ drops out."
                },
                {
                  "step": "$d = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$2a + 2 \\cdot (-5) = 14$",
                  "reason": "Substituting a value: $d$ is replaced by its value in the equation of line 5."
                },
                {
                  "step": "$2a - 10 = 14$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                },
                {
                  "step": "$2a = 24$",
                  "reason": "Adding the same number to both sides: $10$ is added to both sides."
                },
                {
                  "step": "$a = 12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the common difference of the arithmetic series whose first 6 terms have sum $21$ and whose next 6 terms have sum $93$.",
            "lines": [
              {
                "step": "Find the common difference of the arithmetic series whose first 6 terms have sum $21$ and whose next 6 terms have sum $93$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The 6th term is $a + 5d$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $n = 6$."
              },
              {
                "step": "$\\dfrac{6(a + (a + 5d))}{2} = 21$",
                "reason": "Sum = number of terms × mean of the first and last term, with $6$ terms."
              },
              {
                "step": "$a + (a + 5d) = 7$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{3}$."
              },
              {
                "step": "$2a + 5d = 7$",
                "reason": "Collecting like terms."
              },
              {
                "step": "The first term of the block, the 7th term, is $a + 6d$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $n = 7$."
              },
              {
                "step": "The last term of the block, the 12th term, is $a + 11d$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $n = 12$."
              },
              {
                "step": "$\\dfrac{6((a + 6d) + (a + 11d))}{2} = 93$",
                "reason": "Sum = number of terms × mean of the first and last term, with $6$ terms, first term $a + 6d$ and last term $a + 11d$."
              },
              {
                "step": "$(a + 6d) + (a + 11d) = 31$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{3}$."
              },
              {
                "step": "$2a + 17d = 31$",
                "reason": "Collecting like terms."
              },
              {
                "step": "$12d = 24$",
                "reason": "Elimination: the equation of line 5 is taken from the equation of line 10, and $2a$ drops out."
              },
              {
                "step": "$d = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the common difference of the arithmetic series whose first 4 terms have sum $50$ and whose next 4 terms have sum $162$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series whose first 4 terms have sum $50$ and whose next 4 terms have sum $162$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 4th term is $a + 3d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 4$."
                },
                {
                  "step": "$\\dfrac{4(a + (a + 3d))}{2} = 50$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $4$ terms."
                },
                {
                  "step": "$a + (a + 3d) = 25$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{2}$."
                },
                {
                  "step": "$2a + 3d = 25$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The first term of the block, the 5th term, is $a + 4d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 5$."
                },
                {
                  "step": "The last term of the block, the 8th term, is $a + 7d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 8$."
                },
                {
                  "step": "$\\dfrac{4((a + 4d) + (a + 7d))}{2} = 162$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $4$ terms, first term $a + 4d$ and last term $a + 7d$."
                },
                {
                  "step": "$(a + 4d) + (a + 7d) = 81$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{2}$."
                },
                {
                  "step": "$2a + 11d = 81$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$8d = 56$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 10, and $2a$ drops out."
                },
                {
                  "step": "$d = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                }
              ]
            },
            {
              "prompt": "Find the common difference of the arithmetic series whose first 5 terms have sum $10$ and whose terms from the 9th to the 14th have sum $-90$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series whose first 5 terms have sum $10$ and whose terms from the 9th to the 14th have sum $-90$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 5th term is $a + 4d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 5$."
                },
                {
                  "step": "$\\dfrac{5(a + (a + 4d))}{2} = 10$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $5$ terms."
                },
                {
                  "step": "$a + (a + 4d) = 4$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{5}$."
                },
                {
                  "step": "$2a + 4d = 4$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The first term of the block, the 9th term, is $a + 8d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 9$."
                },
                {
                  "step": "The last term of the block, the 14th term, is $a + 13d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 14$."
                },
                {
                  "step": "$\\dfrac{6((a + 8d) + (a + 13d))}{2} = -90$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $6$ terms, first term $a + 8d$ and last term $a + 13d$."
                },
                {
                  "step": "$(a + 8d) + (a + 13d) = -30$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "$2a + 21d = -30$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$17d = -34$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 10, and $2a$ drops out."
                },
                {
                  "step": "$d = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $17$."
                }
              ]
            },
            {
              "prompt": "Find the common difference of the arithmetic series whose first 6 terms have sum $-\\dfrac{33}{2}$ and whose terms from the 10th to the 15th have sum $\\dfrac{21}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/2",
              "lines": [
                {
                  "step": "Find the common difference of the arithmetic series whose first 6 terms have sum $-\\dfrac{33}{2}$ and whose terms from the 10th to the 15th have sum $\\dfrac{21}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 6th term is $a + 5d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 6$."
                },
                {
                  "step": "$\\dfrac{6(a + (a + 5d))}{2} = -\\dfrac{33}{2}$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $6$ terms."
                },
                {
                  "step": "$a + (a + 5d) = -\\dfrac{11}{2}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "$2a + 5d = -\\dfrac{11}{2}$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The first term of the block, the 10th term, is $a + 9d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 10$."
                },
                {
                  "step": "The last term of the block, the 15th term, is $a + 14d$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $n = 15$."
                },
                {
                  "step": "$\\dfrac{6((a + 9d) + (a + 14d))}{2} = \\dfrac{21}{2}$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $6$ terms, first term $a + 9d$ and last term $a + 14d$."
                },
                {
                  "step": "$(a + 9d) + (a + 14d) = \\dfrac{7}{2}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "$2a + 23d = \\dfrac{7}{2}$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$18d = 9$",
                  "reason": "Elimination: the equation of line 5 is taken from the equation of line 10, and $2a$ drops out."
                },
                {
                  "step": "$d = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $18$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of terms of the arithmetic series with first term $3$ and common difference $4$ whose sum is $528$.",
            "lines": [
              {
                "step": "Find the number of terms of the arithmetic series with first term $3$ and common difference $4$ whose sum is $528$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The last term, the $n$th, is $3 + (n - 1) \\cdot 4$.",
                "reason": "The $n$th term $a + (n - 1)d$."
              },
              {
                "step": "$\\dfrac{n(3 + (3 + (n - 1) \\cdot 4))}{2} = 528$",
                "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms."
              },
              {
                "step": "$n(3 + (3 + (n - 1) \\cdot 4)) = 1056$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
              },
              {
                "step": "$n(3 + 3 + 4n - 4) = 1056$",
                "reason": "Multiplying out: the number $4$ multiplies each term of the bracket $n - 1$."
              },
              {
                "step": "$n(4n + 2) = 1056$",
                "reason": "Collecting like terms."
              },
              {
                "step": "$4n^2 + 2n = 1056$",
                "reason": "Multiplying out: by the distributive law $n$ multiplies each term of the bracket."
              },
              {
                "step": "$4n^2 + 2n - 1056 = 0$",
                "reason": "Adding the same number to both sides: $-1056$ is added to both sides."
              },
              {
                "step": "$2(2n + 33)(n - 16) = 0$",
                "reason": "Factoring a quadratic: the product multiplies out to $4n^2 + 2n - 1056$."
              },
              {
                "step": "Either $n = 16$ or $n = -\\dfrac{33}{2}$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "$n = 16$",
                "reason": "Checking against the words: a number of terms is a whole number, and $-\\dfrac{33}{2}$ is not one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of terms of the arithmetic series with first term $9$ and common difference $2$ whose sum is $240$.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the number of terms of the arithmetic series with first term $9$ and common difference $2$ whose sum is $240$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term, the $n$th, is $9 + (n - 1) \\cdot 2$.",
                  "reason": "The $n$th term $a + (n - 1)d$."
                },
                {
                  "step": "$\\dfrac{n(9 + (9 + (n - 1) \\cdot 2))}{2} = 240$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms."
                },
                {
                  "step": "$n(9 + (9 + (n - 1) \\cdot 2)) = 480$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                },
                {
                  "step": "$n(9 + 9 + 2n - 2) = 480$",
                  "reason": "Multiplying out: the number $2$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$n(2n + 16) = 480$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$2n^2 + 16n = 480$",
                  "reason": "Multiplying out: by the distributive law $n$ multiplies each term of the bracket."
                },
                {
                  "step": "$2n^2 + 16n - 480 = 0$",
                  "reason": "Adding the same number to both sides: $-480$ is added to both sides."
                },
                {
                  "step": "$2(n + 20)(n - 12) = 0$",
                  "reason": "Factoring a quadratic: the product multiplies out to $2n^2 + 16n - 480$."
                },
                {
                  "step": "Either $n = 12$ or $n = -20$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$n = 12$",
                  "reason": "Checking against the words: a number of terms is a whole number, and $-20$ is not one."
                }
              ]
            },
            {
              "prompt": "Find the number of terms of the arithmetic series with first term $-7$ and common difference $5$ whose sum is $198$.",
              "form": "Answer as an integer.",
              "answer": "11",
              "lines": [
                {
                  "step": "Find the number of terms of the arithmetic series with first term $-7$ and common difference $5$ whose sum is $198$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term, the $n$th, is $-7 + (n - 1) \\cdot 5$.",
                  "reason": "The $n$th term $a + (n - 1)d$."
                },
                {
                  "step": "$\\dfrac{n(-7 + (-7 + (n - 1) \\cdot 5))}{2} = 198$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms."
                },
                {
                  "step": "$n(-7 + (-7 + (n - 1) \\cdot 5)) = 396$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                },
                {
                  "step": "$n(-7 + (-7) + 5n - 5) = 396$",
                  "reason": "Multiplying out: the number $5$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$n(5n - 19) = 396$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$5n^2 - 19n = 396$",
                  "reason": "Multiplying out: by the distributive law $n$ multiplies each term of the bracket."
                },
                {
                  "step": "$5n^2 - 19n - 396 = 0$",
                  "reason": "Adding the same number to both sides: $-396$ is added to both sides."
                },
                {
                  "step": "$(5n + 36)(n - 11) = 0$",
                  "reason": "Factoring a quadratic: the product multiplies out to $5n^2 - 19n - 396$."
                },
                {
                  "step": "Either $n = 11$ or $n = -\\dfrac{36}{5}$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$n = 11$",
                  "reason": "Checking against the words: a number of terms is a whole number, and $-\\dfrac{36}{5}$ is not one."
                }
              ]
            },
            {
              "prompt": "Find the number of terms of the arithmetic series with first term $2$ and common difference $6$ whose sum is $234$.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the number of terms of the arithmetic series with first term $2$ and common difference $6$ whose sum is $234$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term, the $n$th, is $2 + (n - 1) \\cdot 6$.",
                  "reason": "The $n$th term $a + (n - 1)d$."
                },
                {
                  "step": "$\\dfrac{n(2 + (2 + (n - 1) \\cdot 6))}{2} = 234$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms."
                },
                {
                  "step": "$n(2 + (2 + (n - 1) \\cdot 6)) = 468$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                },
                {
                  "step": "$n(2 + 2 + 6n - 6) = 468$",
                  "reason": "Multiplying out: the number $6$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$n(6n - 2) = 468$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "$6n^2 - 2n = 468$",
                  "reason": "Multiplying out: by the distributive law $n$ multiplies each term of the bracket."
                },
                {
                  "step": "$6n^2 - 2n - 468 = 0$",
                  "reason": "Adding the same number to both sides: $-468$ is added to both sides."
                },
                {
                  "step": "$2(3n + 26)(n - 9) = 0$",
                  "reason": "Factoring a quadratic: the product multiplies out to $6n^2 - 2n - 468$."
                },
                {
                  "step": "Either $n = 9$ or $n = -\\dfrac{26}{3}$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$n = 9$",
                  "reason": "Checking against the words: a number of terms is a whole number, and $-\\dfrac{26}{3}$ is not one."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t178-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the last term of the arithmetic series of 9 terms with common difference $4$ and sum $369$.",
            "lines": [
              {
                "step": "Find the last term of the arithmetic series of 9 terms with common difference $4$ and sum $369$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The middle term $x$ is the 5th, and $9x = 369$.",
                "reason": "A sum of an odd number of terms is the middle term times the number of terms: 9 terms, with 4 on each side of the middle term."
              },
              {
                "step": "$x = 41$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
              },
              {
                "step": "The last term is the 9th, 4 terms after the middle term: $41 + 4 \\cdot 4 = 57$.",
                "reason": "The $n$th term $a + (n - 1)d$, counted from the middle term: each step adds the common difference $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first term of the arithmetic series of 7 terms with common difference $-5$ and sum $84$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "27",
              "lines": [
                {
                  "step": "Find the first term of the arithmetic series of 7 terms with common difference $-5$ and sum $84$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The middle term $x$ is the 4th, and $7x = 84$.",
                  "reason": "A sum of an odd number of terms is the middle term times the number of terms: 7 terms, with 3 on each side of the middle term."
                },
                {
                  "step": "$x = 12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "The first term is the 1st, 3 terms before the middle term: $12 - 3 \\cdot (-5) = 27$.",
                  "reason": "The $n$th term $a + (n - 1)d$, counted from the middle term: each step adds the common difference $-5$."
                }
              ]
            },
            {
              "prompt": "Find the last term of the arithmetic series of 11 terms with common difference $3$ and sum $-44$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "11",
              "lines": [
                {
                  "step": "Find the last term of the arithmetic series of 11 terms with common difference $3$ and sum $-44$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The middle term $x$ is the 6th, and $11x = -44$.",
                  "reason": "A sum of an odd number of terms is the middle term times the number of terms: 11 terms, with 5 on each side of the middle term."
                },
                {
                  "step": "$x = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$."
                },
                {
                  "step": "The last term is the 11th, 5 terms after the middle term: $-4 + 5 \\cdot 3 = 11$.",
                  "reason": "The $n$th term $a + (n - 1)d$, counted from the middle term: each step adds the common difference $3$."
                }
              ]
            },
            {
              "prompt": "Find the first term of the arithmetic series of 13 terms with common difference $\\dfrac{1}{2}$ and sum $130$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the first term of the arithmetic series of 13 terms with common difference $\\dfrac{1}{2}$ and sum $130$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The middle term $x$ is the 7th, and $13x = 130$.",
                  "reason": "A sum of an odd number of terms is the middle term times the number of terms: 13 terms, with 6 on each side of the middle term."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
                },
                {
                  "step": "The first term is the 1st, 6 terms before the middle term: $10 - 6 \\cdot \\dfrac{1}{2} = 7$.",
                  "reason": "The $n$th term $a + (n - 1)d$, counted from the middle term: each step adds the common difference $\\dfrac{1}{2}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t178-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the sum $23 + 24 + 25 + \\dots + 70$.",
            "lines": [
              {
                "step": "Find the sum $23 + 24 + 25 + \\dots + 70$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$1 + 2 + \\dots + 70 = (1 + 2 + \\dots + 22) + (23 + 24 + \\dots + 70)$",
                "reason": "The associative law of addition, from arithmetic: $1 + 2 + \\dots + 70$ is $1 + 2 + \\dots + 22$ followed by $23 + 24 + \\dots + 70$."
              },
              {
                "step": "$23 + 24 + \\dots + 70 = (1 + 2 + \\dots + 70) - (1 + 2 + \\dots + 22)$",
                "reason": "Adding the same number to both sides: $-(1 + 2 + \\dots + 22)$ is added to both sides, and the sides are written the other way round."
              },
              {
                "step": "$1 + 2 + \\dots + 70 = \\dfrac{70 \\cdot 71}{2} = 2485$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 70$."
              },
              {
                "step": "$1 + 2 + \\dots + 22 = \\dfrac{22 \\cdot 23}{2} = 253$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 22$."
              },
              {
                "step": "$2485 - 253 = 2232$",
                "reason": "The subtraction of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum $15 + 16 + 17 + \\dots + 60$.",
              "form": "Answer as an integer.",
              "answer": "1725",
              "lines": [
                {
                  "step": "Find the sum $15 + 16 + 17 + \\dots + 60$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 + 2 + \\dots + 60 = (1 + 2 + \\dots + 14) + (15 + 16 + \\dots + 60)$",
                  "reason": "The associative law of addition, from arithmetic: $1 + 2 + \\dots + 60$ is $1 + 2 + \\dots + 14$ followed by $15 + 16 + \\dots + 60$."
                },
                {
                  "step": "$15 + 16 + \\dots + 60 = (1 + 2 + \\dots + 60) - (1 + 2 + \\dots + 14)$",
                  "reason": "Adding the same number to both sides: $-(1 + 2 + \\dots + 14)$ is added to both sides, and the sides are written the other way round."
                },
                {
                  "step": "$1 + 2 + \\dots + 60 = \\dfrac{60 \\cdot 61}{2} = 1830$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 60$."
                },
                {
                  "step": "$1 + 2 + \\dots + 14 = \\dfrac{14 \\cdot 15}{2} = 105$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 14$."
                },
                {
                  "step": "$1830 - 105 = 1725$",
                  "reason": "The subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum $41 + 42 + 43 + \\dots + 90$.",
              "form": "Answer as an integer.",
              "answer": "3275",
              "lines": [
                {
                  "step": "Find the sum $41 + 42 + 43 + \\dots + 90$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 + 2 + \\dots + 90 = (1 + 2 + \\dots + 40) + (41 + 42 + \\dots + 90)$",
                  "reason": "The associative law of addition, from arithmetic: $1 + 2 + \\dots + 90$ is $1 + 2 + \\dots + 40$ followed by $41 + 42 + \\dots + 90$."
                },
                {
                  "step": "$41 + 42 + \\dots + 90 = (1 + 2 + \\dots + 90) - (1 + 2 + \\dots + 40)$",
                  "reason": "Adding the same number to both sides: $-(1 + 2 + \\dots + 40)$ is added to both sides, and the sides are written the other way round."
                },
                {
                  "step": "$1 + 2 + \\dots + 90 = \\dfrac{90 \\cdot 91}{2} = 4095$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 90$."
                },
                {
                  "step": "$1 + 2 + \\dots + 40 = \\dfrac{40 \\cdot 41}{2} = 820$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 40$."
                },
                {
                  "step": "$4095 - 820 = 3275$",
                  "reason": "The subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum $8 + 9 + 10 + \\dots + 33$.",
              "form": "Answer as an integer.",
              "answer": "533",
              "lines": [
                {
                  "step": "Find the sum $8 + 9 + 10 + \\dots + 33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 + 2 + \\dots + 33 = (1 + 2 + \\dots + 7) + (8 + 9 + \\dots + 33)$",
                  "reason": "The associative law of addition, from arithmetic: $1 + 2 + \\dots + 33$ is $1 + 2 + \\dots + 7$ followed by $8 + 9 + \\dots + 33$."
                },
                {
                  "step": "$8 + 9 + \\dots + 33 = (1 + 2 + \\dots + 33) - (1 + 2 + \\dots + 7)$",
                  "reason": "Adding the same number to both sides: $-(1 + 2 + \\dots + 7)$ is added to both sides, and the sides are written the other way round."
                },
                {
                  "step": "$1 + 2 + \\dots + 33 = \\dfrac{33 \\cdot 34}{2} = 561$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 33$."
                },
                {
                  "step": "$1 + 2 + \\dots + 7 = \\dfrac{7 \\cdot 8}{2} = 28$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 7$."
                },
                {
                  "step": "$561 - 28 = 533$",
                  "reason": "The subtraction of integers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum $1 + 3 + 5 + \\dots + 87$.",
            "lines": [
              {
                "step": "Find the sum $1 + 3 + 5 + \\dots + 87$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The last term $87$ is the $n$th odd number, so $2n - 1 = 87$.",
                "reason": "The $n$th term $a + (n - 1)d$: with first term $1$ and common difference $2$ it is $1 + (n - 1) \\cdot 2 = 2n - 1$."
              },
              {
                "step": "$2n = 88$",
                "reason": "Adding the same number to both sides: $1$ is added to both sides."
              },
              {
                "step": "$n = 44$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "The sum is $44^2$.",
                "reason": "The first $n$ odd numbers sum to $n^2$, with $n = 44$."
              },
              {
                "step": "$44^2 = 1936$",
                "reason": "The definition of a power, from arithmetic: $44^2 = 44 \\cdot 44$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum $1 + 3 + 5 + \\dots + 59$.",
              "form": "Answer as an integer.",
              "answer": "900",
              "lines": [
                {
                  "step": "Find the sum $1 + 3 + 5 + \\dots + 59$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term $59$ is the $n$th odd number, so $2n - 1 = 59$.",
                  "reason": "The $n$th term $a + (n - 1)d$: with first term $1$ and common difference $2$ it is $1 + (n - 1) \\cdot 2 = 2n - 1$."
                },
                {
                  "step": "$2n = 60$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "$n = 30$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "The sum is $30^2$.",
                  "reason": "The first $n$ odd numbers sum to $n^2$, with $n = 30$."
                },
                {
                  "step": "$30^2 = 900$",
                  "reason": "The definition of a power, from arithmetic: $30^2 = 30 \\cdot 30$."
                }
              ]
            },
            {
              "prompt": "Find the sum $1 + 3 + 5 + \\dots + 125$.",
              "form": "Answer as an integer.",
              "answer": "3969",
              "lines": [
                {
                  "step": "Find the sum $1 + 3 + 5 + \\dots + 125$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term $125$ is the $n$th odd number, so $2n - 1 = 125$.",
                  "reason": "The $n$th term $a + (n - 1)d$: with first term $1$ and common difference $2$ it is $1 + (n - 1) \\cdot 2 = 2n - 1$."
                },
                {
                  "step": "$2n = 126$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "$n = 63$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "The sum is $63^2$.",
                  "reason": "The first $n$ odd numbers sum to $n^2$, with $n = 63$."
                },
                {
                  "step": "$63^2 = 3969$",
                  "reason": "The definition of a power, from arithmetic: $63^2 = 63 \\cdot 63$."
                }
              ]
            },
            {
              "prompt": "Find the sum $1 + 3 + 5 + \\dots + 41$.",
              "form": "Answer as an integer.",
              "answer": "441",
              "lines": [
                {
                  "step": "Find the sum $1 + 3 + 5 + \\dots + 41$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term $41$ is the $n$th odd number, so $2n - 1 = 41$.",
                  "reason": "The $n$th term $a + (n - 1)d$: with first term $1$ and common difference $2$ it is $1 + (n - 1) \\cdot 2 = 2n - 1$."
                },
                {
                  "step": "$2n = 42$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "$n = 21$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "The sum is $21^2$.",
                  "reason": "The first $n$ odd numbers sum to $n^2$, with $n = 21$."
                },
                {
                  "step": "$21^2 = 441$",
                  "reason": "The definition of a power, from arithmetic: $21^2 = 21 \\cdot 21$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum $2 + 4 + 6 + \\dots + 96$.",
            "lines": [
              {
                "step": "Find the sum $2 + 4 + 6 + \\dots + 96$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2 + 4 + \\dots + 96 = 2(1 + 2 + \\dots + 48)$",
                "reason": "The distributive law, from arithmetic: each term is $2$ times a whole number from $1$ to $48$."
              },
              {
                "step": "$1 + 2 + \\dots + 48 = \\dfrac{48 \\cdot 49}{2} = 1176$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 48$."
              },
              {
                "step": "$2 \\cdot 1176 = 2352$",
                "reason": "Multiplying rational numbers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum $2 + 4 + 6 + \\dots + 70$.",
              "form": "Answer as an integer.",
              "answer": "1260",
              "lines": [
                {
                  "step": "Find the sum $2 + 4 + 6 + \\dots + 70$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2 + 4 + \\dots + 70 = 2(1 + 2 + \\dots + 35)$",
                  "reason": "The distributive law, from arithmetic: each term is $2$ times a whole number from $1$ to $35$."
                },
                {
                  "step": "$1 + 2 + \\dots + 35 = \\dfrac{35 \\cdot 36}{2} = 630$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 35$."
                },
                {
                  "step": "$2 \\cdot 630 = 1260$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum $2 + 4 + 6 + \\dots + 124$.",
              "form": "Answer as an integer.",
              "answer": "3906",
              "lines": [
                {
                  "step": "Find the sum $2 + 4 + 6 + \\dots + 124$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2 + 4 + \\dots + 124 = 2(1 + 2 + \\dots + 62)$",
                  "reason": "The distributive law, from arithmetic: each term is $2$ times a whole number from $1$ to $62$."
                },
                {
                  "step": "$1 + 2 + \\dots + 62 = \\dfrac{62 \\cdot 63}{2} = 1953$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 62$."
                },
                {
                  "step": "$2 \\cdot 1953 = 3906$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the sum $2 + 4 + 6 + \\dots + 38$.",
              "form": "Answer as an integer.",
              "answer": "380",
              "lines": [
                {
                  "step": "Find the sum $2 + 4 + 6 + \\dots + 38$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2 + 4 + \\dots + 38 = 2(1 + 2 + \\dots + 19)$",
                  "reason": "The distributive law, from arithmetic: each term is $2$ times a whole number from $1$ to $19$."
                },
                {
                  "step": "$1 + 2 + \\dots + 19 = \\dfrac{19 \\cdot 20}{2} = 190$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic, with $n = 19$."
                },
                {
                  "step": "$2 \\cdot 190 = 380$",
                  "reason": "Multiplying rational numbers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $5 - 13 + 21 - 29 + \\dots + 101 - 109$.",
            "lines": [
              {
                "step": "Find $5 - 13 + 21 - 29 + \\dots + 101 - 109$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The numbers $5, 13, 21, \\dots, 109$ form an arithmetic sequence with common difference $8$, and $109 = 5 + 13 \\cdot 8$ is its 14th term.",
                "reason": "The $n$th term $a + (n - 1)d$, with $a = 5$ and $d = 8$."
              },
              {
                "step": "$5 - 13 + 21 - 29 + \\dots + 101 - 109 = (5 - 13) + (21 - 29) + \\dots + (101 - 109)$",
                "reason": "The associative law of addition, from arithmetic: the 14 terms are grouped in 7 pairs."
              },
              {
                "step": "Each pair is $-8$.",
                "reason": "Common difference: in each pair the second number is $8$ more than the first."
              },
              {
                "step": "The sum is $7 \\cdot (-8) = -56$.",
                "reason": "Multiplication as repeated addition, from arithmetic: 7 pairs, each $-8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $50 - 47 + 44 - 41 + \\dots + 8 - 5$.",
              "form": "Answer as an integer.",
              "answer": "24",
              "lines": [
                {
                  "step": "Find $50 - 47 + 44 - 41 + \\dots + 8 - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $50, 47, 44, \\dots, 5$ form an arithmetic sequence with common difference $-3$, and $5 = 50 + 15 \\cdot (-3)$ is its 16th term.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 50$ and $d = -3$."
                },
                {
                  "step": "$50 - 47 + 44 - 41 + \\dots + 8 - 5 = (50 - 47) + (44 - 41) + \\dots + (8 - 5)$",
                  "reason": "The associative law of addition, from arithmetic: the 16 terms are grouped in 8 pairs."
                },
                {
                  "step": "Each pair is $3$.",
                  "reason": "Common difference: in each pair the second number is $3$ less than the first."
                },
                {
                  "step": "The sum is $8 \\cdot 3 = 24$.",
                  "reason": "Multiplication as repeated addition, from arithmetic: 8 pairs, each $3$."
                }
              ]
            },
            {
              "prompt": "Find $2 - 7 + 12 - 17 + \\dots + 92 - 97$.",
              "form": "Answer as an integer.",
              "answer": "-50",
              "lines": [
                {
                  "step": "Find $2 - 7 + 12 - 17 + \\dots + 92 - 97$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $2, 7, 12, \\dots, 97$ form an arithmetic sequence with common difference $5$, and $97 = 2 + 19 \\cdot 5$ is its 20th term.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 2$ and $d = 5$."
                },
                {
                  "step": "$2 - 7 + 12 - 17 + \\dots + 92 - 97 = (2 - 7) + (12 - 17) + \\dots + (92 - 97)$",
                  "reason": "The associative law of addition, from arithmetic: the 20 terms are grouped in 10 pairs."
                },
                {
                  "step": "Each pair is $-5$.",
                  "reason": "Common difference: in each pair the second number is $5$ more than the first."
                },
                {
                  "step": "The sum is $10 \\cdot (-5) = -50$.",
                  "reason": "Multiplication as repeated addition, from arithmetic: 10 pairs, each $-5$."
                }
              ]
            },
            {
              "prompt": "Find $13 - 19 + 25 - 31 + \\dots + 109 - 115$.",
              "form": "Answer as an integer.",
              "answer": "-54",
              "lines": [
                {
                  "step": "Find $13 - 19 + 25 - 31 + \\dots + 109 - 115$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $13, 19, 25, \\dots, 115$ form an arithmetic sequence with common difference $6$, and $115 = 13 + 17 \\cdot 6$ is its 18th term.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 13$ and $d = 6$."
                },
                {
                  "step": "$13 - 19 + 25 - 31 + \\dots + 109 - 115 = (13 - 19) + (25 - 31) + \\dots + (109 - 115)$",
                  "reason": "The associative law of addition, from arithmetic: the 18 terms are grouped in 9 pairs."
                },
                {
                  "step": "Each pair is $-6$.",
                  "reason": "Common difference: in each pair the second number is $6$ more than the first."
                },
                {
                  "step": "The sum is $9 \\cdot (-6) = -54$.",
                  "reason": "Multiplication as repeated addition, from arithmetic: 9 pairs, each $-6$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t178-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the least whole number $n$ for which $1 + 2 + \\dots + n$ is above $700$.",
            "lines": [
              {
                "step": "Find the least whole number $n$ for which $1 + 2 + \\dots + n$ is above $700$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{n(n + 1)}{2} > 700$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic."
              },
              {
                "step": "$n(n + 1) > 1400$",
                "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $2$, which is positive, so the sign stays as it is."
              },
              {
                "step": "For whole numbers $1 \\le m < n$, $m(m + 1) < n(n + 1)$.",
                "reason": "Multiplying two inequalities of positive numbers, from arithmetic: $m < n$ and $m + 1 < n + 1$."
              },
              {
                "step": "For $n = 36$, $n(n + 1) = 36 \\cdot 37 = 1332$, not above $1400$.",
                "reason": "Substituting a value: $n$ is replaced by $36$."
              },
              {
                "step": "For $n = 37$, $n(n + 1) = 37 \\cdot 38 = 1406$, above $1400$.",
                "reason": "Substituting a value: $n$ is replaced by $37$."
              },
              {
                "step": "$n = 37$",
                "reason": "Lines 4 to 6: $37$ makes $n(n + 1)$ above $1400$, and $36$, with every smaller whole number by line 4, does not."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least whole number $n$ for which $1 + 2 + \\dots + n$ is above $250$.",
              "form": "Answer as an integer.",
              "answer": "22",
              "lines": [
                {
                  "step": "Find the least whole number $n$ for which $1 + 2 + \\dots + n$ is above $250$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{n(n + 1)}{2} > 250$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic."
                },
                {
                  "step": "$n(n + 1) > 500$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $2$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For whole numbers $1 \\le m < n$, $m(m + 1) < n(n + 1)$.",
                  "reason": "Multiplying two inequalities of positive numbers, from arithmetic: $m < n$ and $m + 1 < n + 1$."
                },
                {
                  "step": "For $n = 21$, $n(n + 1) = 21 \\cdot 22 = 462$, not above $500$.",
                  "reason": "Substituting a value: $n$ is replaced by $21$."
                },
                {
                  "step": "For $n = 22$, $n(n + 1) = 22 \\cdot 23 = 506$, above $500$.",
                  "reason": "Substituting a value: $n$ is replaced by $22$."
                },
                {
                  "step": "$n = 22$",
                  "reason": "Lines 4 to 6: $22$ makes $n(n + 1)$ above $500$, and $21$, with every smaller whole number by line 4, does not."
                }
              ]
            },
            {
              "prompt": "Find the least whole number $n$ for which $1 + 2 + \\dots + n$ is at least $595$.",
              "form": "Answer as an integer.",
              "answer": "34",
              "lines": [
                {
                  "step": "Find the least whole number $n$ for which $1 + 2 + \\dots + n$ is at least $595$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{n(n + 1)}{2} \\ge 595$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic."
                },
                {
                  "step": "$n(n + 1) \\ge 1190$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $2$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For whole numbers $1 \\le m < n$, $m(m + 1) < n(n + 1)$.",
                  "reason": "Multiplying two inequalities of positive numbers, from arithmetic: $m < n$ and $m + 1 < n + 1$."
                },
                {
                  "step": "For $n = 33$, $n(n + 1) = 33 \\cdot 34 = 1122$, below $1190$.",
                  "reason": "Substituting a value: $n$ is replaced by $33$."
                },
                {
                  "step": "For $n = 34$, $n(n + 1) = 34 \\cdot 35 = 1190$, at least $1190$.",
                  "reason": "Substituting a value: $n$ is replaced by $34$."
                },
                {
                  "step": "$n = 34$",
                  "reason": "Lines 4 to 6: $34$ makes $n(n + 1)$ at least $1190$, and $33$, with every smaller whole number by line 4, does not."
                }
              ]
            },
            {
              "prompt": "Find the least whole number $n$ for which $1 + 2 + \\dots + n$ is above $1200$.",
              "form": "Answer as an integer.",
              "answer": "49",
              "lines": [
                {
                  "step": "Find the least whole number $n$ for which $1 + 2 + \\dots + n$ is above $1200$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{n(n + 1)}{2} > 1200$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic."
                },
                {
                  "step": "$n(n + 1) > 2400$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $2$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "For whole numbers $1 \\le m < n$, $m(m + 1) < n(n + 1)$.",
                  "reason": "Multiplying two inequalities of positive numbers, from arithmetic: $m < n$ and $m + 1 < n + 1$."
                },
                {
                  "step": "For $n = 48$, $n(n + 1) = 48 \\cdot 49 = 2352$, not above $2400$.",
                  "reason": "Substituting a value: $n$ is replaced by $48$."
                },
                {
                  "step": "For $n = 49$, $n(n + 1) = 49 \\cdot 50 = 2450$, above $2400$.",
                  "reason": "Substituting a value: $n$ is replaced by $49$."
                },
                {
                  "step": "$n = 49$",
                  "reason": "Lines 4 to 6: $49$ makes $n(n + 1)$ above $2400$, and $48$, with every smaller whole number by line 4, does not."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t178-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum of the arithmetic series of 13 terms with first term $-31$ and last term $41$, and write that line right.",
            "given": [
              "$13 \\cdot \\dfrac{31 + 41}{2} = 13 \\cdot \\dfrac{72}{2}$",
              "$13 \\cdot \\dfrac{72}{2} = 13 \\cdot 36$",
              "$13 \\cdot 36 = 13 \\cdot 30 + 13 \\cdot 6 = 468$",
              "The sum is $468$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum of the arithmetic series of 13 terms with first term $-31$ and last term $41$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 puts the first term $-31$ into the top of the fraction as $31$.",
                "reason": "A sign lost: the first term is $-31$, so the top is $-31 + 41 = 10$."
              },
              {
                "step": "Every line other than line 1 follows by a rule that holds, from the data or from the line before it as it is written, so line 1 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 1 written right is $13 \\cdot \\dfrac{-31 + 41}{2} = 13 \\cdot \\dfrac{10}{2}$.",
                "reason": "Each number keeps its own sign when it is put into a formula, added or halved, and the signs of products give each product its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum $-9 + (-6) + (-3) + \\dots + 21$, and write that line right.",
              "given": [
                "$d = -6 - (-9) = 3$",
                "$-9 + (n - 1) \\cdot 3 = 21$",
                "$(n - 1) \\cdot 3 = 30$",
                "$n = 10 + 1 = 11$",
                "$11 \\cdot \\dfrac{9 + 21}{2} = 11 \\cdot \\dfrac{30}{2} = 11 \\cdot 15$",
                "$11 \\cdot 15 = 165$",
                "The sum is $165$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 11*(-9+21)/2 = 11*12/2 = 11*6",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $-9 + (-6) + (-3) + \\dots + 21$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 puts the first term $-9$ into the top of the fraction as $9$.",
                  "reason": "A sign lost: the first term is $-9$, so the top is $-9 + 21 = 12$."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 5 written right is $11 \\cdot \\dfrac{-9 + 21}{2} = 11 \\cdot \\dfrac{12}{2} = 11 \\cdot 6$.",
                  "reason": "Each number keeps its own sign when it is put into a formula, added or halved, and the signs of products give each product its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $23 + 18 + 13 + \\dots + (-47)$, and write that line right.",
              "given": [
                "$d = 18 - 23 = -5$",
                "$23 + (n - 1) \\cdot (-5) = -47$",
                "$(n - 1) \\cdot (-5) = -70$",
                "$n = 14 + 1 = 15$",
                "$15 \\cdot \\dfrac{23 + (-47)}{2} = 15 \\cdot \\dfrac{-24}{2} = 15 \\cdot (-12)$",
                "$15 \\cdot (-12) = 180$",
                "The sum is $180$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 15*(-12) = -180",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $23 + 18 + 13 + \\dots + (-47)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 multiplies $15$ by $-12$ and writes $180$.",
                  "reason": "A sign lost: by the signs of products, a positive number times a negative number is negative, so $15 \\cdot (-12) = -180$."
                },
                {
                  "step": "Every line other than line 6 follows by a rule that holds, from the data or from the line before it as it is written, so line 6 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 6 written right is $15 \\cdot (-12) = -180$.",
                  "reason": "Each number keeps its own sign when it is put into a formula, added or halved, and the signs of products give each product its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum of the first 11 terms of the arithmetic series with first term $-21$ and common difference $6$, and write that line right.",
              "given": [
                "$a_{11} = -21 + (11 - 1) \\cdot 6 = 39$",
                "$11 \\cdot \\dfrac{21 + 39}{2} = 11 \\cdot \\dfrac{60}{2}$",
                "$11 \\cdot \\dfrac{60}{2} = 11 \\cdot 30$",
                "The sum is $11 \\cdot 30 = 330$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 11*(-21+39)/2 = 11*18/2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum of the first 11 terms of the arithmetic series with first term $-21$ and common difference $6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 puts the first term $-21$ into the top of the fraction as $21$.",
                  "reason": "A sign lost: the first term is $-21$, so the top is $-21 + 39 = 18$."
                },
                {
                  "step": "Every line other than line 2 follows by a rule that holds, from the data or from the line before it as it is written, so line 2 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 2 written right is $11 \\cdot \\dfrac{-21 + 39}{2} = 11 \\cdot \\dfrac{18}{2}$.",
                  "reason": "Each number keeps its own sign when it is put into a formula, added or halved, and the signs of products give each product its sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum of the first 12 terms of the arithmetic series with first term $9$ and common difference $5$, and write that line right.",
            "given": [
              "$a_{12} = 9 + (12 - 1) \\cdot 5 = 64$",
              "$9 + 64 = 73 \\cdot 12 = 876$",
              "$\\dfrac{876}{2} = \\dfrac{800}{2} + \\dfrac{76}{2} = 438$",
              "The sum is $438$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum of the first 12 terms of the arithmetic series with first term $9$ and common difference $5$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 writes $9 + 64$, then times $12$, in one run of equals signs, so it states $9 + 64 = 876$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $9 + 64$ is $73$."
              },
              {
                "step": "Every line other than line 2 follows by a rule that holds, from the data or from the line before it as it is written, so line 2 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 2 written right is $(9 + 64) \\cdot 12 = 876$.",
                "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum $8 + 14 + 20 + \\dots + 86$, and write that line right.",
              "given": [
                "$d = 14 - 8 = 6$",
                "$8 + (n - 1) \\cdot 6 = 86$",
                "$(n - 1) \\cdot 6 = 78$",
                "$n = 13 + 1 = 14$",
                "$14 \\cdot \\dfrac{8 + 86}{2} = 14 \\cdot \\dfrac{94}{2}$",
                "$\\dfrac{94}{2} = 47 \\cdot 14 = 658$",
                "The sum is $658$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 14*94/2 = 658",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $8 + 14 + 20 + \\dots + 86$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 writes $\\dfrac{94}{2}$, then times $14$, in one run of equals signs, so it states $\\dfrac{94}{2} = 658$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $\\dfrac{94}{2}$ is $47$."
                },
                {
                  "step": "Every line other than line 6 follows by a rule that holds, from the data or from the line before it as it is written, so line 6 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 6 written right is $14 \\cdot \\dfrac{94}{2} = 658$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum of the first 18 terms of the arithmetic series with first term $13$ and common difference $2$, and write that line right.",
              "given": [
                "$a_{18} = 13 + (18 - 1) \\cdot 2$",
                "$13 + (18 - 1) \\cdot 2 = 13 + 34 = 47$",
                "$18 \\cdot \\dfrac{13 + 47}{2} = 18 \\cdot \\dfrac{60}{2}$",
                "$\\dfrac{60}{2} = 30 \\cdot 18 = 540$",
                "The sum is $540$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 18*60/2 = 540",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum of the first 18 terms of the arithmetic series with first term $13$ and common difference $2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $\\dfrac{60}{2}$, then times $18$, in one run of equals signs, so it states $\\dfrac{60}{2} = 540$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $\\dfrac{60}{2}$ is $30$."
                },
                {
                  "step": "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 4 written right is $18 \\cdot \\dfrac{60}{2} = 540$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $-5 + (-1) + 3 + \\dots + 51$, and write that line right.",
              "given": [
                "$d = -1 - (-5) = 4$",
                "$-5 + (n - 1) \\cdot 4 = 51$",
                "$(n - 1) \\cdot 4 = 56$",
                "$n = 14 + 1 = 15$",
                "$-5 + 51 = 46 \\cdot 15 = 690$",
                "$\\dfrac{690}{2} = 345$",
                "The sum is $345$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (-5+51)*15 = 690",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $-5 + (-1) + 3 + \\dots + 51$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes $-5 + 51$, then times $15$, in one run of equals signs, so it states $-5 + 51 = 690$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $-5 + 51$ is $46$."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 5 written right is $(-5 + 51) \\cdot 15 = 690$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t178-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the sum on the left: The sum of the first $n$ positive odd numbers is 40 more than 6 times $n$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the sum on the left: The sum of the first $n$ positive odd numbers is 40 more than 6 times $n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the first $n$ positive odd numbers is $n^2$.",
                "reason": "The first $n$ odd numbers sum to $n^2$."
              },
              {
                "step": "40 more than 6 times $n$ is $6n + 40$.",
                "reason": "Writing a sentence as an equation: \"6 times $n$\" multiplies $n$ by 6, and \"40 more than\" adds 40."
              },
              {
                "step": "$n^2 = 6n + 40$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the sum on the left: The sum of the first $n$ positive odd numbers is 14 less than 9 times $n$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "n^2 = 9*n-14",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum on the left: The sum of the first $n$ positive odd numbers is 14 less than 9 times $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the first $n$ positive odd numbers is $n^2$.",
                  "reason": "The first $n$ odd numbers sum to $n^2$."
                },
                {
                  "step": "14 less than 9 times $n$ is $9n - 14$.",
                  "reason": "Writing a sentence as an equation: \"9 times $n$\" multiplies $n$ by 9, and \"14 less than\" takes 14 away."
                },
                {
                  "step": "$n^2 = 9n - 14$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum on the left: The sum of the first $n$ positive odd numbers equals 5 times the sum of $n$ and 30.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "n^2 = 5*(n+30)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum on the left: The sum of the first $n$ positive odd numbers equals 5 times the sum of $n$ and 30.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the first $n$ positive odd numbers is $n^2$.",
                  "reason": "The first $n$ odd numbers sum to $n^2$."
                },
                {
                  "step": "5 times the sum of $n$ and 30 is $5(n + 30)$.",
                  "reason": "Writing a sentence as an equation: \"the sum of $n$ and 30\" adds, and \"5 times\" multiplies the whole sum, kept in a bracket, by 5."
                },
                {
                  "step": "$n^2 = 5(n + 30)$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum on the left: The sum of the first $n$ positive odd numbers is 12 times the difference of $n$ and 3.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "n^2 = 12*(n-3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum on the left: The sum of the first $n$ positive odd numbers is 12 times the difference of $n$ and 3.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the first $n$ positive odd numbers is $n^2$.",
                  "reason": "The first $n$ odd numbers sum to $n^2$."
                },
                {
                  "step": "12 times the difference of $n$ and 3 is $12(n - 3)$.",
                  "reason": "Writing a sentence as an equation: \"the difference of $n$ and 3\" takes 3 from $n$, and \"12 times\" multiplies the whole difference, kept in a bracket, by 12."
                },
                {
                  "step": "$n^2 = 12(n - 3)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with the sum on the left: The arithmetic series with first term $6$, common difference $8$ and $n$ terms has sum $506$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the sum on the left: The arithmetic series with first term $6$, common difference $8$ and $n$ terms has sum $506$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The last term is $6 + (n - 1) \\cdot 8$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $a = 6$ and $d = 8$."
              },
              {
                "step": "The sum is $n \\cdot \\dfrac{6 + (6 + (n - 1) \\cdot 8)}{2}$.",
                "reason": "Sum = number of terms × mean of the first and last term."
              },
              {
                "step": "$n \\cdot \\dfrac{6 + (6 + (n - 1) \\cdot 8)}{2} = 506$",
                "reason": "Writing a sentence as an equation: the words \"has sum\" mark the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the sum on the left: The sum of $n$ terms of the arithmetic series that starts at $3$ and goes up by $5$ at each term is $164$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "n*(3+(3+(n-1)*5))/2 = 164",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum on the left: The sum of $n$ terms of the arithmetic series that starts at $3$ and goes up by $5$ at each term is $164$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term is $3 + (n - 1) \\cdot 5$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 3$ and $d = 5$."
                },
                {
                  "step": "The sum is $n \\cdot \\dfrac{3 + (3 + (n - 1) \\cdot 5)}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term."
                },
                {
                  "step": "$n \\cdot \\dfrac{3 + (3 + (n - 1) \\cdot 5)}{2} = 164$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum on the left: An arithmetic series of $n$ terms begins with $40$, each term is $3$ less than the one before, and the sum of its terms equals $265$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "n*(40+(40+(n-1)*(-3)))/2 = 265",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum on the left: An arithmetic series of $n$ terms begins with $40$, each term is $3$ less than the one before, and the sum of its terms equals $265$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term is $40 + (n - 1) \\cdot (-3)$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 40$ and $d = -3$."
                },
                {
                  "step": "The sum is $n \\cdot \\dfrac{40 + (40 + (n - 1) \\cdot (-3))}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term."
                },
                {
                  "step": "$n \\cdot \\dfrac{40 + (40 + (n - 1) \\cdot (-3))}{2} = 265$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum on the left: Adding the first $n$ terms of the arithmetic sequence with first term $-2$ and common difference $7$ gives $295$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "n*(-2+(-2+(n-1)*7))/2 = 295",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum on the left: Adding the first $n$ terms of the arithmetic sequence with first term $-2$ and common difference $7$ gives $295$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The last term is $-2 + (n - 1) \\cdot 7$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = -2$ and $d = 7$."
                },
                {
                  "step": "The sum is $n \\cdot \\dfrac{-2 + (-2 + (n - 1) \\cdot 7)}{2}$.",
                  "reason": "Sum = number of terms × mean of the first and last term."
                },
                {
                  "step": "$n \\cdot \\dfrac{-2 + (-2 + (n - 1) \\cdot 7)}{2} = 295$",
                  "reason": "Writing a sentence as an equation: the word \"gives\" marks the place of the equals sign."
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
      "id": "t178-p1",
      "method": "direct proof",
      "statement": "For a whole number $n \\ge 1$ and numbers $a$ and $d$, the arithmetic series $a + (a + d) + \\dots + (a + (n - 1)d)$ has sum $n \\cdot \\dfrac{a + (a + (n - 1)d)}{2}$, the number of terms times the mean of the first and last term.",
      "idea": "Write the series forwards and then backwards and add the two term by term. Every column holds one term from the start and one from the end, and every column has the same total: the first term plus the last.",
      "lines": [
        {
          "line": "For $j = 1, 2, \\dots, n$, the $j$th term from the start is $a + (j - 1)d$.",
          "reason": "The $n$th term $a + (n - 1)d$, with $j$ in place of $n$."
        },
        {
          "line": "The $j$th term from the end is the $(n + 1 - j)$th term from the start.",
          "reason": "Counting from the end: the 1st term from the end is the $n$th term, and each step back lowers the place by $1$."
        },
        {
          "line": "The $(n + 1 - j)$th term is $a + (n - j)d$.",
          "reason": "The $n$th term $a + (n - 1)d$, with $n + 1 - j$ in place of $n$."
        },
        {
          "line": "The $j$th term from the start plus the $j$th term from the end is $2a + (n - 1)d$.",
          "reason": "Collecting like terms: $(j - 1)d + (n - j)d = (n - 1)d$."
        },
        {
          "line": "Twice the sum is the series written forwards plus the series written backwards, added column by column, the $j$th column holding the $j$th term from the start and the $j$th term from the end.",
          "reason": "The associative and commutative laws of addition, from arithmetic: the $2n$ terms may be added in pairs, in this order."
        },
        {
          "line": "Each of the $n$ columns totals $2a + (n - 1)d$.",
          "reason": "Line 4."
        },
        {
          "line": "Twice the sum is $n(2a + (n - 1)d)$.",
          "reason": "Multiplication as repeated addition, from arithmetic: $n$ equal column totals."
        },
        {
          "line": "The sum is $\\dfrac{n(2a + (n - 1)d)}{2}$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
        },
        {
          "line": "The last term is the $n$th term, $a + (n - 1)d$.",
          "reason": "The $n$th term $a + (n - 1)d$."
        },
        {
          "line": "So $2a + (n - 1)d = a + (a + (n - 1)d)$, the first term plus the last term.",
          "reason": "Collecting like terms, read backwards: $2a = a + a$."
        },
        {
          "line": "Therefore the sum is $n \\cdot \\dfrac{a + (a + (n - 1)d)}{2}$, the number of terms times the mean of the first and last term.",
          "reason": "Lines 8 and 10."
        }
      ]
    },
    {
      "id": "t178-p2",
      "method": "direct proof",
      "statement": "For a whole number $n \\ge 1$, the first $n$ odd numbers sum to $n^2$: $1 + 3 + 5 + \\dots + (2n - 1) = n^2$.",
      "idea": "The odd numbers form an arithmetic sequence with first term 1 and common difference 2, so their sum is the number of terms times the mean of the first and last term, and that mean is $n$.",
      "lines": [
        {
          "line": "The odd numbers $1, 3, 5, \\dots$ form an arithmetic sequence with first term $1$ and common difference $2$.",
          "reason": "Arithmetic sequence: each odd number is $2$ more than the odd number before it."
        },
        {
          "line": "The $n$th odd number is $1 + (n - 1) \\cdot 2$.",
          "reason": "The $n$th term $a + (n - 1)d$, with $a = 1$ and $d = 2$."
        },
        {
          "line": "The number $1 + (n - 1) \\cdot 2$ equals $2n - 1$.",
          "reason": "Multiplying out and collecting like terms: $1 + 2n - 2 = 2n - 1$."
        },
        {
          "line": "So $1 + 3 + 5 + \\dots + (2n - 1)$ is an arithmetic series of $n$ terms with first term $1$ and last term $2n - 1$.",
          "reason": "Arithmetic series: a sum of consecutive terms of an arithmetic sequence."
        },
        {
          "line": "Its sum is $n \\cdot \\dfrac{1 + (2n - 1)}{2}$.",
          "reason": "Sum = number of terms × mean of the first and last term."
        },
        {
          "line": "The top $1 + (2n - 1)$ equals $2n$.",
          "reason": "Collecting like terms."
        },
        {
          "line": "The mean $\\dfrac{2n}{2}$ equals $n$.",
          "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
        },
        {
          "line": "So the sum is $n \\cdot n$.",
          "reason": "Lines 5 to 7."
        },
        {
          "line": "Therefore $1 + 3 + 5 + \\dots + (2n - 1) = n^2$.",
          "reason": "The definition of a power, from arithmetic: $n \\cdot n = n^2$."
        }
      ]
    },
    {
      "id": "t178-p3",
      "method": "direct proof",
      "statement": "For a whole number $m \\ge 0$ and numbers $a$ and $d$, the arithmetic series $a + (a + d) + \\dots + (a + 2md)$ of $2m + 1$ terms has sum $(2m + 1)(a + md)$, the number of terms times the middle term $a + md$.",
      "idea": "The mean of the first and last term of $2m + 1$ terms is the $(m + 1)$th term, the middle one.",
      "lines": [
        {
          "line": "The series has $2m + 1$ terms, its first term is $a$, and its last term is the $(2m + 1)$th term, $a + 2md$.",
          "reason": "The $n$th term $a + (n - 1)d$, with $2m + 1$ in place of $n$."
        },
        {
          "line": "Its sum is $(2m + 1) \\cdot \\dfrac{a + (a + 2md)}{2}$.",
          "reason": "Sum = number of terms × mean of the first and last term."
        },
        {
          "line": "The top $a + (a + 2md)$ equals $2a + 2md$.",
          "reason": "Collecting like terms."
        },
        {
          "line": "The number $2a + 2md$ equals $2(a + md)$.",
          "reason": "Taking out a common factor: $2$ divides both terms."
        },
        {
          "line": "So the mean $\\dfrac{a + (a + 2md)}{2}$ equals $a + md$.",
          "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
        },
        {
          "line": "The middle term has $m$ terms before it and $m$ after it, so it is the $(m + 1)$th term, $a + md$.",
          "reason": "The $n$th term $a + (n - 1)d$, with $m + 1$ in place of $n$."
        },
        {
          "line": "Therefore the sum is $(2m + 1)(a + md)$, the number of terms times the middle term.",
          "reason": "Lines 2, 5 and 6."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t178-s1",
      "method": "direct proof",
      "statement": "Prove that for whole numbers $m \\ge 1$ and $k$, the sum of the $2m + 1$ consecutive whole numbers $k, k + 1, \\dots, k + 2m$ is a multiple of $2m + 1$. Facts it may use: arithmetic series, the $n$th term $a + (n - 1)d$, a sum of an odd number of terms is the middle term times the number of terms, the sum of two whole numbers is a whole number, divisibility of whole numbers from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "The numbers $k, k + 1, \\dots, k + 2m$ form an arithmetic series of $2m + 1$ terms with first term $k$ and common difference $1$.",
            "reason": "Arithmetic series: a sum of consecutive terms of an arithmetic sequence, here each number $1$ more than the one before it."
          },
          {
            "line": "The middle term is the $(m + 1)$th term, $k + m$.",
            "reason": "The $n$th term $a + (n - 1)d$, with $m + 1$ in place of $n$, first term $k$ and common difference $1$."
          },
          {
            "line": "The sum is $(2m + 1)(k + m)$.",
            "reason": "A sum of an odd number of terms is the middle term times the number of terms."
          },
          {
            "line": "The number $k + m$ is a whole number.",
            "reason": "The sum of two whole numbers is a whole number, from arithmetic."
          },
          {
            "line": "So the sum is a multiple of $2m + 1$.",
            "reason": "Divisibility of whole numbers, from arithmetic: the sum is the whole number $k + m$ times $2m + 1$, so $2m + 1$ divides it, and it is a multiple of $2m + 1$."
          }
        ]
      }
    },
    {
      "id": "t178-s2",
      "method": "direct proof",
      "statement": "Prove that for every whole number $n \\ge 1$, $1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n + 1)(2n + 1)}{6}$. Facts it may use: square of a binomial, every term of one bracket times every term of the other, collecting like terms, adding two equations, adding the same number to both sides, taking out a common factor, the sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$ from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "For every whole number $j$, $(j + 1)^3 = (j + 1)(j + 1)^2$.",
            "reason": "Product law: $(j + 1)(j + 1)^2 = (j + 1)^{1 + 2}$."
          },
          {
            "line": "The product $(j + 1)(j + 1)^2$ equals $(j + 1)(j^2 + 2j + 1)$.",
            "reason": "Square of a binomial: $(j + 1)^2 = j^2 + 2j + 1$."
          },
          {
            "line": "The product $(j + 1)(j^2 + 2j + 1)$ equals $j^3 + 2j^2 + j + j^2 + 2j + 1$.",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "The sum $j^3 + 2j^2 + j + j^2 + 2j + 1$ equals $j^3 + 3j^2 + 3j + 1$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "So $(j + 1)^3 - j^3 = 3j^2 + 3j + 1$ for every whole number $j$.",
            "reason": "Adding the same number to both sides: $-j^3$ is added to both sides of $(j + 1)^3 = j^3 + 3j^2 + 3j + 1$, from lines 1 to 4."
          },
          {
            "line": "Line 5 for $j = 1, 2, \\dots, n$ gives $n$ equations, from $2^3 - 1^3 = 3 \\cdot 1^2 + 3 \\cdot 1 + 1$ to $(n + 1)^3 - n^3 = 3n^2 + 3n + 1$.",
            "reason": "Substituting a value: $j$ is replaced by $1$, then $2$, and so on up to $n$."
          },
          {
            "line": "Adding the $n$ equations gives $(2^3 - 1^3) + (3^3 - 2^3) + \\dots + ((n + 1)^3 - n^3)$ on the left and $(3 \\cdot 1^2 + 3 \\cdot 1 + 1) + \\dots + (3n^2 + 3n + 1)$ on the right.",
            "reason": "Adding two equations, once for each equation."
          },
          {
            "line": "The left side equals $(n + 1)^3 - 1^3$.",
            "reason": "The associative and commutative laws of addition, from arithmetic: each cube from $2^3$ to $n^3$ is added once and taken away once, and a number minus itself is $0$."
          },
          {
            "line": "The number $(n + 1)^3 - 1^3$ equals $(n + 1)^3 - 1$.",
            "reason": "The definition of a power, from arithmetic: $1^3 = 1 \\cdot 1 \\cdot 1 = 1$."
          },
          {
            "line": "The right side equals $(3 \\cdot 1^2 + \\dots + 3n^2) + (3 \\cdot 1 + \\dots + 3n) + (1 + \\dots + 1)$, with $n$ ones.",
            "reason": "The associative and commutative laws of addition, from arithmetic: the squares, the whole numbers and the ones are grouped apart."
          },
          {
            "line": "This equals $3(1^2 + \\dots + n^2) + 3(1 + \\dots + n) + (1 + \\dots + 1)$.",
            "reason": "Taking out a common factor: $3$ divides each term of the first two groups."
          },
          {
            "line": "The $n$ ones add to $n$.",
            "reason": "Multiplication as repeated addition, from arithmetic: $n \\cdot 1 = n$."
          },
          {
            "line": "The sum $1 + 2 + \\dots + n$ equals $\\dfrac{n(n + 1)}{2}$.",
            "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, from arithmetic."
          },
          {
            "line": "So $(n + 1)^3 - 1 = 3(1^2 + 2^2 + \\dots + n^2) + 3 \\cdot \\dfrac{n(n + 1)}{2} + n$.",
            "reason": "Lines 7 to 13: the two sides of the added equations, each written its new way."
          },
          {
            "line": "So $3(1^2 + 2^2 + \\dots + n^2) = (n + 1)^3 - 1 - n - 3 \\cdot \\dfrac{n(n + 1)}{2}$.",
            "reason": "Adding the same number to both sides: $-3 \\cdot \\dfrac{n(n + 1)}{2} - n$ is added to both sides."
          },
          {
            "line": "The right side equals $(n + 1)^3 - (n + 1) - 3 \\cdot \\dfrac{n(n + 1)}{2}$.",
            "reason": "Subtracting a bracket changes every sign in it, read backwards: $-1 - n = -(n + 1)$."
          },
          {
            "line": "The right side equals $(n + 1)\\left((n + 1)^2 - 1 - \\dfrac{3n}{2}\\right)$.",
            "reason": "Taking out a common factor: $n + 1$ divides each of the three terms."
          },
          {
            "line": "The bracket $(n + 1)^2 - 1 - \\dfrac{3n}{2}$ equals $n^2 + 2n + 1 - 1 - \\dfrac{3n}{2}$.",
            "reason": "Square of a binomial: $(n + 1)^2 = n^2 + 2n + 1$."
          },
          {
            "line": "The number $n^2 + 2n + 1 - 1 - \\dfrac{3n}{2}$ equals $n^2 + 2n - \\dfrac{3n}{2}$.",
            "reason": "Collecting like terms: $1 - 1 = 0$."
          },
          {
            "line": "The number $n^2 + 2n - \\dfrac{3n}{2}$ equals $\\dfrac{2n^2 + n}{2}$.",
            "reason": "Collecting like terms over the denominator $2$: $2n - \\dfrac{3n}{2} = \\dfrac{n}{2}$."
          },
          {
            "line": "The number $\\dfrac{2n^2 + n}{2}$ equals $\\dfrac{n(2n + 1)}{2}$.",
            "reason": "Taking out a common factor: $n$ divides both terms of the top."
          },
          {
            "line": "So $3(1^2 + 2^2 + \\dots + n^2) = \\dfrac{n(n + 1)(2n + 1)}{2}$.",
            "reason": "Lines 15 to 21."
          },
          {
            "line": "Therefore $1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n + 1)(2n + 1)}{6}$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
          }
        ]
      }
    }
  ]
}
