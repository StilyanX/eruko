// Powers: multiplying a whole number by a power of 10.
export default {
  "number": 5,
  "manyParts": false,
  "bare": {
    "prompt": "Compute $67\\times{100}$.",
    "answer": "6 700",
    "form": "Answer as a whole number.",
    "solution": [
      "Compute $67\\times{100}$.",
      "The number $100$ equals $10^2$.",
      "Multiplying by $10^2$ attaches $2$ zeros to the right of the last digit of $67$.",
      "$6\\,700$."
    ]
  },
  "ideas": [],
  "kinds": [
    {
      "id": "t5-k1",
      "forms": [
        {
          "example": {
            "problem": "Compute $372\\times{10}^4$.",
            "lines": [
              {
                "step": "$372 = (3\\times{10}^2)+(7\\times{10}^1)+(2\\times{10}^0)$.",
                "reason": "the expanded form of $372$, using powers of 10"
              },
              {
                "step": "$372\\times{10}^4 = (3\\times{10}^2)\\times{10}^4 + (7\\times{10}^1)\\times{10}^4 + (2\\times{10}^0)\\times{10}^4$.",
                "reason": "the distributive law"
              },
              {
                "step": "$372\\times{10}^4 = (3\\times{10}^6)+(7\\times{10}^5)+(2\\times{10}^4)$.",
                "reason": "combining powers of 10 under multiplication"
              },
              {
                "step": "$372\\times{10}^4 = 3\\,720\\,000$.",
                "reason": "each term is a digit followed by as many zeros as its exponent"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $843\\times{10}^3$.",
              "answer": "843 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$843 = (8\\times{10}^2)+(4\\times{10}^1)+(3\\times{10}^0)$.",
                  "reason": "the expanded form of $843$, using powers of 10"
                },
                {
                  "step": "$843\\times{10}^3 = (8\\times{10}^2)\\times{10}^3 + (4\\times{10}^1)\\times{10}^3 + (3\\times{10}^0)\\times{10}^3$.",
                  "reason": "the distributive law"
                },
                {
                  "step": "$843\\times{10}^3 = (8\\times{10}^5)+(4\\times{10}^4)+(3\\times{10}^3)$.",
                  "reason": "combining powers of 10 under multiplication"
                },
                {
                  "step": "$843\\,000$.",
                  "reason": "each term is a digit followed by as many zeros as its exponent"
                }
              ]
            },
            {
              "prompt": "Compute $6\\,205\\times{10}^2$.",
              "answer": "620 500",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$6\\,205 = (6\\times{10}^3)+(2\\times{10}^2)+(0\\times{10}^1)+(5\\times{10}^0)$.",
                  "reason": "the expanded form of $6\\,205$, using powers of 10"
                },
                {
                  "step": "$6\\,205\\times{10}^2 = (6\\times{10}^3)\\times{10}^2 + (2\\times{10}^2)\\times{10}^2 + (0\\times{10}^1)\\times{10}^2 + (5\\times{10}^0)\\times{10}^2$.",
                  "reason": "the distributive law"
                },
                {
                  "step": "$6\\,205\\times{10}^2 = (6\\times{10}^5)+(2\\times{10}^4)+(0\\times{10}^3)+(5\\times{10}^2)$.",
                  "reason": "combining powers of 10 under multiplication"
                },
                {
                  "step": "$620\\,500$.",
                  "reason": "each term is a digit followed by as many zeros as its exponent"
                }
              ]
            },
            {
              "prompt": "Compute $91\\times{10}^6$.",
              "answer": "91 000 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$91 = (9\\times{10}^1)+(1\\times{10}^0)$.",
                  "reason": "the expanded form of $91$, using powers of 10"
                },
                {
                  "step": "$91\\times{10}^6 = (9\\times{10}^1)\\times{10}^6 + (1\\times{10}^0)\\times{10}^6$.",
                  "reason": "the distributive law"
                },
                {
                  "step": "$91\\times{10}^6 = (9\\times{10}^7)+(1\\times{10}^6)$.",
                  "reason": "combining powers of 10 under multiplication"
                },
                {
                  "step": "$91\\,000\\,000$.",
                  "reason": "each term is a digit followed by as many zeros as its exponent"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $48\\times{500}\\,000$.",
            "lines": [
              {
                "step": "$500\\,000 = 5\\times{10}^5$.",
                "reason": "the expanded form of $500\\,000$, using a power of 10"
              },
              {
                "step": "$48\\times{500}\\,000 = 48\\times(5\\times{10}^5) = (48\\times{5})\\times{10}^5$.",
                "reason": "the associative and commutative laws of multiplication"
              },
              {
                "step": "$(48\\times{5})\\times{10}^5 = 240\\times{10}^5$.",
                "reason": "two-digit by one-digit multiplication, $48\\times{5}=240$"
              },
              {
                "step": "$240\\times{10}^5 = 24\\,000\\,000$.",
                "reason": "multiplying by $10^5$ attaches $5$ zeros to the right of the last digit of $240$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $27\\times{400}$.",
              "answer": "10 800",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$400 = 4\\times{10}^2$.",
                  "reason": "the expanded form of $400$, using a power of 10"
                },
                {
                  "step": "$27\\times{400} = 27\\times(4\\times{10}^2) = (27\\times{4})\\times{10}^2$.",
                  "reason": "the associative and commutative laws of multiplication"
                },
                {
                  "step": "$(27\\times{4})\\times{10}^2 = 108\\times{10}^2$.",
                  "reason": "two-digit by one-digit multiplication, $27\\times{4}=108$"
                },
                {
                  "step": "$10\\,800$.",
                  "reason": "multiplying by $10^2$ attaches $2$ zeros to the right of the last digit of $108$"
                }
              ]
            },
            {
              "prompt": "Compute $56\\times{7}\\,000$.",
              "answer": "392 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$7\\,000 = 7\\times{10}^3$.",
                  "reason": "the expanded form of $7\\,000$, using a power of 10"
                },
                {
                  "step": "$56\\times{7}\\,000 = 56\\times(7\\times{10}^3) = (56\\times{7})\\times{10}^3$.",
                  "reason": "the associative and commutative laws of multiplication"
                },
                {
                  "step": "$(56\\times{7})\\times{10}^3 = 392\\times{10}^3$.",
                  "reason": "two-digit by one-digit multiplication, $56\\times{7}=392$"
                },
                {
                  "step": "$392\\,000$.",
                  "reason": "multiplying by $10^3$ attaches $3$ zeros to the right of the last digit of $392$"
                }
              ]
            },
            {
              "prompt": "Compute $19\\times{30}\\,000\\,000$.",
              "answer": "570 000 000",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$30\\,000\\,000 = 3\\times{10}^7$.",
                  "reason": "the expanded form of $30\\,000\\,000$, using a power of 10"
                },
                {
                  "step": "$19\\times{30}\\,000\\,000 = 19\\times(3\\times{10}^7) = (19\\times{3})\\times{10}^7$.",
                  "reason": "the associative and commutative laws of multiplication"
                },
                {
                  "step": "$(19\\times{3})\\times{10}^7 = 57\\times{10}^7$.",
                  "reason": "two-digit by one-digit multiplication, $19\\times{3}=57$"
                },
                {
                  "step": "$570\\,000\\,000$.",
                  "reason": "multiplying by $10^7$ attaches $7$ zeros to the right of the last digit of $57$"
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
      "id": "t5-p1",
      "method": "direct proof",
      "statement": "Let $k$ be a whole number. Let $N$ be a whole number with digits $a$, $b$, $c$ in the hundreds, tens, and ones places. Then $N\\times{10}^k$ equals the whole number formed by writing $a$, $b$, $c$ followed by $k$ zeros.",
      "idea": "Multiplying by $10^k$ raises the power of 10 in every term of the expanded form by $k$. So each digit moves $k$ places to the left, and $k$ zeros appear after the last digit.",
      "lines": [
        {
          "line": "Let $N$ be a whole number with digits $a$, $b$, $c$ in the hundreds, tens, and ones places, so $N=(a\\times{10}^2)+(b\\times{10}^1)+(c\\times{10}^0)$.",
          "reason": "the expanded form of a three-digit number, using powers of 10"
        },
        {
          "line": "$N\\times{10}^k = \\big((a\\times{10}^2)+(b\\times{10}^1)+(c\\times{10}^0)\\big)\\times{10}^k$.",
          "reason": "substituting the expanded form of $N$"
        },
        {
          "line": "$N\\times{10}^k = (a\\times{10}^2)\\times{10}^k + (b\\times{10}^1)\\times{10}^k + (c\\times{10}^0)\\times{10}^k$.",
          "reason": "the distributive law"
        },
        {
          "line": "$(a\\times{10}^2)\\times{10}^k = a\\times{10}^{k+2}$, $(b\\times{10}^1)\\times{10}^k = b\\times{10}^{k+1}$, and $(c\\times{10}^0)\\times{10}^k = c\\times{10}^k$.",
          "reason": "combining powers of 10 under multiplication"
        },
        {
          "line": "$N\\times{10}^k = (a\\times{10}^{k+2})+(b\\times{10}^{k+1})+(c\\times{10}^k)$.",
          "reason": "substituting the previous line"
        },
        {
          "line": "The right side is the expanded form of the whole number with digits $a$, $b$, $c$ followed by $k$ zeros. Its lowest power of 10 is $10^k$, so $k$ zeros follow the digit $c$.",
          "reason": "reading the place value of each term"
        },
        {
          "line": "Therefore $N\\times{10}^k$ equals the whole number formed by writing $a$, $b$, $c$ followed by $k$ zeros.",
          "reason": "combining the previous lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t5-s1",
      "statement": "For every whole number $n$, $10^n$ equals $1$ followed by $n$ zeros.",
      "method": "induction",
      "check": {
        "proof": [
          {
            "line": "$10^0=1$, which is $1$ followed by zero zeros.",
            "reason": "the definition of $10^0$"
          },
          {
            "line": "Suppose that $10^k$ equals $1$ followed by $k$ zeros, for some whole number $k$.",
            "reason": "the inductive hypothesis"
          },
          {
            "line": "$10^{k+1} = 10^k\\times{10}$.",
            "reason": "the definition of $10^{k+1}$ as one more copy of $10$ multiplied on"
          },
          {
            "line": "Multiplying the whole number \"$1$ followed by $k$ zeros\" by $10$ attaches one more zero. The result is \"$1$ followed by $(k+1)$ zeros\".",
            "reason": "multiplying by $10$ attaches one zero, the case $k=1$ of the fact that multiplying by $10^k$ attaches $k$ zeros"
          },
          {
            "line": "So $10^{k+1}$ equals $1$ followed by $(k+1)$ zeros.",
            "reason": "substituting the inductive hypothesis into the previous line"
          },
          {
            "line": "Therefore, for every whole number $n$, $10^n$ equals $1$ followed by $n$ zeros.",
            "reason": "the base case and the inductive step, by the principle of induction"
          }
        ]
      }
    },
    {
      "id": "t5-s2",
      "statement": "For every single-digit number $d$ and every whole number $k$, $d\\times{10}^k$ is less than $10^{k+1}$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "A single-digit number $d$ satisfies $d<10$.",
            "reason": "single-digit whole numbers run from $0$ to $9$, and $9<10$"
          },
          {
            "line": "Multiplying $d<10$ by the positive number $10^k$ gives $d\\times{10}^k<10\\times{10}^k$.",
            "reason": "the order law that, for $a>0$, $b<c$ is equivalent to $ab<ac$, applied with $a=10^k$"
          },
          {
            "line": "$10\\times{10}^k = 10^{k+1}$.",
            "reason": "combining powers of 10 under multiplication"
          },
          {
            "line": "Therefore $d\\times{10}^k<10^{k+1}$.",
            "reason": "substituting the previous line into $d\\times{10}^k<10\\times{10}^k$"
          }
        ]
      }
    }
  ]
}
