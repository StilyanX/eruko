// Primes and Divisors: checking primality up to the square root, the Sieve of Eratosthenes,
// and the divisors built into a factorial.
export default {
  "number": 29,
  "manyParts": false,
  "bare": {
    "prompt": "Decide whether $149$ is a prime.",
    "answer": "Yes",
    "form": "Answer as Yes or No.",
    "solution": [
      "Decide whether $149$ is a prime.",
      "The squares $12^2=144$ and $13^2=169$ show that $\\sqrt{149}$ lies between $12$ and $13$.",
      "The number $149$ is odd. Direct division shows that $3$, $5$, $7$, and $11$ do not divide it.",
      "So $149$ is a prime.",
      "$\\text{Yes}$."
    ]
  },
  "ideas": [
    {
      "name": "Proper divisor and proper multiple",
      "concrete": "The whole number $3$ is a proper divisor of $12$, and $12$ is a proper multiple of $3$.",
      "general": "A whole number $b$ is a **proper divisor** of a whole number $a$ if $b$ divides $a$ and $2\\le b\\le a-1$. The number $a$ is a **multiple** of $b$ if $b$ divides $a$. It is a **proper multiple** of $b$ if also $a>b$."
    },
    {
      "name": "Prime and composite whole numbers",
      "concrete": "The whole number $7$ is a prime because it has no proper divisor. The whole number $12$ is a composite because $3$ is a proper divisor of it.",
      "general": "A whole number greater than $1$ with no proper divisor is a **prime**. A whole number greater than $1$ that is not a prime is a **composite**. The whole number $1$ is neither."
    },
    {
      "name": "Positive square root",
      "concrete": "The number $5$ is the positive square root of $25$, since $5 \\times 5=25$.",
      "general": "For a positive number $x$, a positive number $s$ with $s\\times s=x$ is the **positive square root** of $x$, written $\\sqrt x$."
    },
    {
      "name": "Factorial",
      "concrete": "The factorial of $5$ is $5!=1\\times2\\times3\\times4\\times5=120$.",
      "general": "For a whole number $n\\ge1$, the **factorial** of $n$, written $n!$, is the product $1\\times2\\times\\cdots\\times n$."
    }
  ],
  "kinds": [
    {
      "id": "t29-k1",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $193$ is a prime.",
            "lines": [
              {
                "step": "The squares $13^2=169$ and $14^2=196$ show that $\\sqrt{193}$ lies between $13$ and $14$.",
                "reason": "comparing $193$ with the squares of $13$ and $14$"
              },
              {
                "step": "The number $193$ is odd and not divisible by $3$ (digit sum $13$) or by $5$ (ones digit $3$). Direct division shows that $7$, $11$, and $13$ do not divide it.",
                "reason": "the divisibility rules for $3$ and $5$, and direct division for the rest"
              },
              {
                "step": "The number $193$ has no divisor from $2$ to $13$, so $193$ is a prime.",
                "reason": "no whole number from $2$ up to $\\sqrt{193}$ divides $193$"
              },
              {
                "step": "$\\text{Yes}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $337$ is a prime.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The squares $18^2=324$ and $19^2=361$ show that $\\sqrt{337}$ lies between $18$ and $19$.",
                  "reason": "comparing $337$ with the squares of $18$ and $19$"
                },
                {
                  "step": "The number $337$ is odd and not divisible by $3$ (digit sum $13$) or by $5$ (ones digit $7$). Direct division shows that $7$, $11$, $13$, and $17$ do not divide it.",
                  "reason": "the divisibility rules for $3$ and $5$, and direct division for the rest"
                },
                {
                  "step": "The number $337$ has no divisor from $2$ to $18$, so $337$ is a prime.",
                  "reason": "no whole number from $2$ up to $\\sqrt{337}$ divides $337$"
                },
                {
                  "step": "$\\text{Yes}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Decide whether $251$ is a prime.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The squares $15^2=225$ and $16^2=256$ show that $\\sqrt{251}$ lies between $15$ and $16$.",
                  "reason": "comparing $251$ with the squares of $15$ and $16$"
                },
                {
                  "step": "The number $251$ is odd and not divisible by $3$ (digit sum $8$) or by $5$ (ones digit $1$). Direct division shows that $7$, $11$, and $13$ do not divide it.",
                  "reason": "the divisibility rules for $3$ and $5$, and direct division for the rest"
                },
                {
                  "step": "The number $251$ has no divisor from $2$ to $15$, so $251$ is a prime.",
                  "reason": "no whole number from $2$ up to $\\sqrt{251}$ divides $251$"
                },
                {
                  "step": "$\\text{Yes}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Decide whether $293$ is a prime.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "The squares $17^2=289$ and $18^2=324$ show that $\\sqrt{293}$ lies between $17$ and $18$.",
                  "reason": "comparing $293$ with the squares of $17$ and $18$"
                },
                {
                  "step": "The number $293$ is odd and not divisible by $3$ (digit sum $14$) or by $5$ (ones digit $3$). Direct division shows that $7$, $11$, $13$, and $17$ do not divide it.",
                  "reason": "the divisibility rules for $3$ and $5$, and direct division for the rest"
                },
                {
                  "step": "The number $293$ has no divisor from $2$ to $17$, so $293$ is a prime.",
                  "reason": "no whole number from $2$ up to $\\sqrt{293}$ divides $293$"
                },
                {
                  "step": "$\\text{Yes}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t29-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the primes up to $144$, using the Sieve of Eratosthenes.",
            "lines": [
              {
                "step": "$12^2=144$, so only proper multiples of $2,3,\\dots,11,12$ need removing from the whole numbers $2$ to $144$.",
                "reason": "a whole number with no divisor from $2$ up to its square root is prime, applied with the bound $12$"
              },
              {
                "step": "Removing every proper multiple of $2$ also removes every multiple of $4$, $6$, $8$, $10$, and $12$.",
                "reason": "a multiple of $4$, $6$, $8$, $10$, or $12$ is already a multiple of $2$"
              },
              {
                "step": "Removing the remaining proper multiples of $3$, $5$, $7$, and $11$ leaves numbers with no proper divisor up to $12$.",
                "reason": "each removal covers a number up to the bound $12$, and a multiple of $9$ is a multiple of $3$"
              },
              {
                "step": "$2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$, $23$, $29$, $31$, $37$, $41$, $43$, $47$, $53$, $59$, $61$, $67$, $71$, $73$, $79$, $83$, $89$, $97$, $101$, $103$, $107$, $109$, $113$, $127$, $131$, $137$, $139$.",
                "reason": "each surviving number has no proper divisor among $2$ through $12$, so each is a prime"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the primes up to $81$.",
              "answer": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79",
              "form": "Answer as whole numbers separated by commas, in increasing order.",
              "lines": [
                {
                  "step": "$9^2=81$, so only proper multiples of $2,3,\\dots,8,9$ need removing from the whole numbers $2$ to $81$.",
                  "reason": "a whole number with no divisor from $2$ up to its square root is prime, applied with the bound $9$"
                },
                {
                  "step": "Removing every proper multiple of $2$ also removes every multiple of $4$, $6$, and $8$.",
                  "reason": "a multiple of $4$, $6$, or $8$ is already a multiple of $2$"
                },
                {
                  "step": "Removing the remaining proper multiples of $3$, $5$, and $7$ leaves numbers with no proper divisor up to $9$.",
                  "reason": "each removal covers a number up to the bound $9$, and a multiple of $9$ is a multiple of $3$"
                },
                {
                  "step": "$2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$, $23$, $29$, $31$, $37$, $41$, $43$, $47$, $53$, $59$, $61$, $67$, $71$, $73$, $79$.",
                  "reason": "each surviving number has no proper divisor among $2$ through $9$, so each is a prime"
                }
              ]
            },
            {
              "prompt": "Find the primes up to $100$.",
              "answer": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97",
              "form": "Answer as whole numbers separated by commas, in increasing order.",
              "lines": [
                {
                  "step": "$10^2=100$, so only proper multiples of $2,3,\\dots,9,10$ need removing from the whole numbers $2$ to $100$.",
                  "reason": "a whole number with no divisor from $2$ up to its square root is prime, applied with the bound $10$"
                },
                {
                  "step": "Removing every proper multiple of $2$ also removes every multiple of $4$, $6$, $8$, and $10$.",
                  "reason": "a multiple of $4$, $6$, $8$, or $10$ is already a multiple of $2$"
                },
                {
                  "step": "Removing the remaining proper multiples of $3$, $5$, and $7$ leaves numbers with no proper divisor up to $10$.",
                  "reason": "each removal covers a number up to the bound $10$, and a multiple of $9$ is a multiple of $3$"
                },
                {
                  "step": "$2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$, $23$, $29$, $31$, $37$, $41$, $43$, $47$, $53$, $59$, $61$, $67$, $71$, $73$, $79$, $83$, $89$, $97$.",
                  "reason": "each surviving number has no proper divisor among $2$ through $10$, so each is a prime"
                }
              ]
            },
            {
              "prompt": "Find the primes up to $121$.",
              "answer": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113",
              "form": "Answer as whole numbers separated by commas, in increasing order.",
              "lines": [
                {
                  "step": "$11^2=121$, so only proper multiples of $2,3,\\dots,10,11$ need removing from the whole numbers $2$ to $121$.",
                  "reason": "a whole number with no divisor from $2$ up to its square root is prime, applied with the bound $11$"
                },
                {
                  "step": "Removing every proper multiple of $2$ also removes every multiple of $4$, $6$, $8$, and $10$.",
                  "reason": "a multiple of $4$, $6$, $8$, or $10$ is already a multiple of $2$"
                },
                {
                  "step": "Removing the remaining proper multiples of $3$, $5$, $7$, and $11$ leaves numbers with no proper divisor up to $11$.",
                  "reason": "each removal covers a number up to the bound $11$, and a multiple of $9$ is a multiple of $3$"
                },
                {
                  "step": "$2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$, $23$, $29$, $31$, $37$, $41$, $43$, $47$, $53$, $59$, $61$, $67$, $71$, $73$, $79$, $83$, $89$, $97$, $101$, $103$, $107$, $109$, $113$.",
                  "reason": "each surviving number has no proper divisor among $2$ through $11$, so each is a prime"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t29-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a proper divisor of $6!+4$ that is at most $6$.",
            "lines": [
              {
                "step": "$6!=1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6=720$.",
                "reason": "the definition of $6!$"
              },
              {
                "step": "The number $4$ divides $720$, since $4$ is one of the factors multiplied together in $6!$.",
                "reason": "the definition of divides"
              },
              {
                "step": "The number $4$ divides $720+4=724$.",
                "reason": "a number that divides two numbers divides their sum, applied to $720$ and $4$"
              },
              {
                "step": "$2\\le4\\le6<724$, so $4$ is a proper divisor of $724$.",
                "reason": "the definition of proper divisor"
              },
              {
                "step": "$4$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a proper divisor of $6!+2$ that is at most $6$.",
              "answer": "2",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$6!=1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6=720$.",
                  "reason": "the definition of $6!$"
                },
                {
                  "step": "The number $2$ divides $720$, since $2$ is one of the factors multiplied together in $6!$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "The number $2$ divides $720+2=722$.",
                  "reason": "a number that divides two numbers divides their sum, applied to $720$ and $2$"
                },
                {
                  "step": "$2\\le2\\le6<722$, so $2$ is a proper divisor of $722$.",
                  "reason": "the definition of proper divisor"
                },
                {
                  "step": "$2$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find a proper divisor of $6!+5$ that is at most $6$.",
              "answer": "5",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$6!=1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6=720$.",
                  "reason": "the definition of $6!$"
                },
                {
                  "step": "The number $5$ divides $720$, since $5$ is one of the factors multiplied together in $6!$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "The number $5$ divides $720+5=725$.",
                  "reason": "a number that divides two numbers divides their sum, applied to $720$ and $5$"
                },
                {
                  "step": "$2\\le5\\le6<725$, so $5$ is a proper divisor of $725$.",
                  "reason": "the definition of proper divisor"
                },
                {
                  "step": "$5$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Find a proper divisor of $7!+3$ that is at most $7$.",
              "answer": "3",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$7!=1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 \\times 7=5\\,040$.",
                  "reason": "the definition of $7!$"
                },
                {
                  "step": "The number $3$ divides $5\\,040$, since $3$ is one of the factors multiplied together in $7!$.",
                  "reason": "the definition of divides"
                },
                {
                  "step": "The number $3$ divides $5\\,040+3=5\\,043$.",
                  "reason": "a number that divides two numbers divides their sum, applied to $5\\,040$ and $3$"
                },
                {
                  "step": "$2\\le3\\le7<5\\,043$, so $3$ is a proper divisor of $5\\,043$.",
                  "reason": "the definition of proper divisor"
                },
                {
                  "step": "$3$.",
                  "reason": "combining the previous lines"
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
      "id": "t29-p1",
      "method": "direct proof",
      "statement": "For positive numbers $s$, $t$, $u$, and $v$, if $s<t$ and $u<v$, then $su<tv$.",
      "idea": "Multiply each inequality by the positive number from the other inequality, then chain the two results by transitivity.",
      "lines": [
        {
          "line": "Since $u>0$ and $s<t$, $su<tu$.",
          "reason": "multiplying an inequality by a positive number preserves its direction, applied to $s<t$ with the positive number $u$"
        },
        {
          "line": "Since $t>0$ and $u<v$, $tu<tv$.",
          "reason": "multiplying an inequality by a positive number preserves its direction, applied to $u<v$ with the positive number $t$"
        },
        {
          "line": "The two inequalities $su<tu$ and $tu<tv$ together give $su<tv$.",
          "reason": "the transitivity of the order relation $<$"
        }
      ]
    },
    {
      "id": "t29-p2",
      "method": "proof by contradiction",
      "statement": "If a whole number $n\\ge2$ has no divisor $k$ with $2\\le k\\le\\sqrt n$, then $n$ is a prime.",
      "idea": "Two divisors that are each greater than the square root have a product greater than $n$.",
      "lines": [
        {
          "line": "Suppose, for contradiction, that $n$ is not a prime. Since $n\\ge2$, $n$ is a composite, so $n=km$ for whole numbers $k$ and $m$ each at least $2$.",
          "reason": "proof by contradiction, together with the definition of a composite for a whole number at least $2$"
        },
        {
          "line": "Both $k$ and $m$ are proper divisors of $n$, so by the hypothesis $\\sqrt n<k$ and $\\sqrt n<m$.",
          "reason": "the hypothesis that no divisor from $2$ to $\\sqrt n$ divides $n$"
        },
        {
          "line": "$n=\\sqrt n\\cdot\\sqrt n<km=n$.",
          "reason": "the definition of the positive square root, together with the inequality that positive numbers preserve order under multiplication"
        },
        {
          "line": "This gives $n<n$, which is impossible.",
          "reason": "a number is never less than itself"
        },
        {
          "line": "So $n$ is a prime.",
          "reason": "the supposition that $n$ is not a prime is impossible"
        }
      ]
    },
    {
      "id": "t29-p3",
      "method": "proof by cases",
      "statement": "For positive numbers $s$ and $t$, $s<t$ if and only if $\\sqrt s<\\sqrt t$.",
      "idea": "Trichotomy gives three cases for comparing two square roots, and two of them are impossible.",
      "lines": [
        {
          "line": "Suppose that $\\sqrt s<\\sqrt t$. Then $\\sqrt s\\cdot\\sqrt s<\\sqrt t\\cdot\\sqrt t$.",
          "reason": "the inequality that positive numbers preserve order under multiplication, applied with both pairs equal to $\\sqrt s<\\sqrt t$"
        },
        {
          "line": "The definition of the square root gives $\\sqrt s\\cdot\\sqrt s=s$ and $\\sqrt t\\cdot\\sqrt t=t$, so $s<t$.",
          "reason": "the definition of the positive square root"
        },
        {
          "line": "Conversely, suppose that $s<t$. Exactly one of three cases holds for $\\sqrt s$ and $\\sqrt t$: $\\sqrt s<\\sqrt t$, $\\sqrt s=\\sqrt t$, or $\\sqrt s>\\sqrt t$.",
          "reason": "the trichotomy law for real numbers"
        },
        {
          "line": "If $\\sqrt s=\\sqrt t$, then $\\sqrt s\\cdot\\sqrt s=\\sqrt t\\cdot\\sqrt t$, so $s=t$, which contradicts $s<t$.",
          "reason": "the definition of the positive square root"
        },
        {
          "line": "If $\\sqrt s>\\sqrt t$, then by the direction proved above, $s>t$, which contradicts $s<t$.",
          "reason": "the forward direction proved above, with the roles of $s$ and $t$ exchanged"
        },
        {
          "line": "So $\\sqrt s<\\sqrt t$ is the only case left.",
          "reason": "the other two cases are impossible"
        },
        {
          "line": "So $s<t$ if and only if $\\sqrt s<\\sqrt t$.",
          "reason": "combining both directions"
        }
      ]
    },
    {
      "id": "t29-p4",
      "method": "direct proof",
      "statement": "Take a proper divisor $b$ of a whole number $n$, with $n=bc$ for a whole number $c$. Then $c$ is also a proper divisor of $n$.",
      "idea": "Each of the two cases that would stop $c$ from being a proper divisor puts $b$ out of range.",
      "lines": [
        {
          "line": "If $c=1$, then $n=b$, which contradicts that $b$ is a proper divisor of $n$.",
          "reason": "the definition of proper divisor requires $b<n$"
        },
        {
          "line": "If $c=n$, then $b=1$, which contradicts that $b$ is a proper divisor of $n$.",
          "reason": "the definition of proper divisor requires $b\\ge2$"
        },
        {
          "line": "So $2\\le c\\le n-1$, and $c$ divides $n$ because $n=bc$.",
          "reason": "the two impossible cases do not occur, together with the definition of divides"
        },
        {
          "line": "So $c$ is a proper divisor of $n$.",
          "reason": "the definition of proper divisor"
        }
      ]
    },
    {
      "id": "t29-p5",
      "method": "direct proof",
      "statement": "For a whole number $n\\ge2$, the numbers $n!+2, n!+3,\\dots,n!+n$ are all composite.",
      "idea": "The factorial gives each number in the string a small factor of its own.",
      "lines": [
        {
          "line": "For each whole number $k$ with $2\\le k\\le n$, $k$ divides $n!=1 \\times 2 \\times \\cdots \\times n$.",
          "reason": "the whole number $k$ is one of the factors multiplied together in $n!$"
        },
        {
          "line": "So $k$ divides $n!+k$.",
          "reason": "a number that divides two numbers divides their sum, applied to $n!$ and $k$"
        },
        {
          "line": "Also $2\\le k\\le n<n!+k$, so $k$ is a proper divisor of $n!+k$.",
          "reason": "the factorial $n!$ is at least $n$ for $n\\ge2$, so $n!+k$ exceeds $k$"
        },
        {
          "line": "Each of $n!+2,\\dots,n!+n$ is a composite.",
          "reason": "each has the proper divisor $k$"
        }
      ]
    },
    {
      "id": "t29-p6",
      "method": "proof by cases",
      "statement": "For a whole number $k>3$, at least one of the three consecutive odd numbers $k$, $k+2$, $k+4$ is a composite. The only three consecutive odd numbers that are all prime are $3$, $5$, and $7$.",
      "idea": "The numbers $k$, $k+2$, and $k+4$ leave three different remainders on division by $3$. So one of them is a multiple of $3$. For $k>3$, that multiple is greater than $3$.",
      "lines": [
        {
          "line": "Divide $k$ by $3$: $k=3n+r$ for a whole number $n$ and a remainder $r$ equal to $0$, $1$, or $2$.",
          "reason": "division-with-remainder"
        },
        {
          "line": "If $r=0$, then $k=3n$, and $k>3$ makes $n>1$, so $k$ is a composite.",
          "reason": "the number $k$ is a multiple of $3$ greater than $3$"
        },
        {
          "line": "If $r=1$, then $k+2=3n+3=3(n+1)$, so $k+2$ is a composite.",
          "reason": "the number $k+2$ is a multiple of $3$ greater than $3$"
        },
        {
          "line": "If $r=2$, then $k+4=3n+6=3(n+2)$, so $k+4$ is a composite.",
          "reason": "the number $k+4$ is a multiple of $3$ greater than $3$"
        },
        {
          "line": "In every case, one of $k$, $k+2$, $k+4$ is a composite for $k>3$.",
          "reason": "the three cases exhaust every remainder $r$"
        },
        {
          "line": "The numbers $3$, $5$, and $7$ are three consecutive odd primes. No such triple exists for $k>3$, so $3,5,7$ is the only one.",
          "reason": "direct check that $3$, $5$, $7$ are each prime, combined with the case $k>3$ proved above"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t29-s1",
      "statement": "For primes $p$ and $q$, $p$ divides $q$ if and only if $p=q$.",
      "method": "direct proof",
      "check": {
        "proof": [
          {
            "line": "Suppose that $p$ divides $q$, so $q=pc$ for a whole number $c$.",
            "reason": "the definition of divisibility"
          },
          {
            "line": "The number $c$ is not $0$, since $q\\ne0$, so $c\\ge1$ and $q=pc\\ge p$.",
            "reason": "multiplying $c\\ge1$ by the positive number $p$"
          },
          {
            "line": "Since $q$ is a prime, it has no proper divisor. The number $p$ divides $q$ and $p\\ge2$, so $p\\le q-1$ is false, and so $p\\ge q$.",
            "reason": "the definitions of a prime and of a proper divisor, since the prime $p$ is at least $2$"
          },
          {
            "line": "From $q\\ge p$ and $p\\ge q$, $p=q$.",
            "reason": "two whole numbers, each at most the other, are equal"
          },
          {
            "line": "Conversely, suppose that $p=q$. Then $q=1\\times p$, so $p$ divides $q$.",
            "reason": "the definition of divisibility"
          },
          {
            "line": "So $p$ divides $q$ if and only if $p=q$.",
            "reason": "combining both directions"
          }
        ]
      }
    },
    {
      "id": "t29-s2",
      "statement": "If $p$ is a prime, then $p=2$ or $p$ is odd.",
      "method": "proof by cases",
      "check": {
        "proof": [
          {
            "line": "Either $2$ divides $p$, or $2$ does not divide $p$.",
            "reason": "a statement and its negation, one of which must hold"
          },
          {
            "line": "First case: $2$ divides $p$. The prime $p$ has no proper divisor and $2\\ge2$, so $2\\le p-1$ is false, and so $p\\le2$.",
            "reason": "the definitions of a prime and of a proper divisor"
          },
          {
            "line": "Also $p\\ge2$, since a prime is greater than $1$, so $p=2$.",
            "reason": "the definition of a prime"
          },
          {
            "line": "Second case: $2$ does not divide $p$. Then $p$ is odd.",
            "reason": "the definition of an odd whole number"
          },
          {
            "line": "In both cases, $p=2$ or $p$ is odd.",
            "reason": "the two cases cover every prime"
          }
        ]
      }
    },
    {
      "id": "t29-s3",
      "statement": "If $k$ divides a positive whole number $n$ and $k>n/2$, then $k=n$.",
      "method": "proof by contradiction",
      "check": {
        "proof": [
          {
            "line": "Suppose, for contradiction, that $k\\ne n$.",
            "reason": "proof by contradiction"
          },
          {
            "line": "The number $k$ divides $n$ and $k\\ne n$, so $n=kc$ for a whole number $c\\ge2$.",
            "reason": "a divisor different from $n$ itself leaves a quotient of at least $2$"
          },
          {
            "line": "$n=kc\\ge k \\times 2$.",
            "reason": "since $c\\ge2$"
          },
          {
            "line": "$k>n/2$, so $k \\times 2>n$.",
            "reason": "multiplying both sides of $k>n/2$ by $2$"
          },
          {
            "line": "$n\\ge k \\times 2>n$, so $n>n$, which is impossible.",
            "reason": "chaining the two inequalities above"
          },
          {
            "line": "$k=n$.",
            "reason": "the supposition that $k\\ne n$ is impossible"
          }
        ]
      }
    }
  ]
}
