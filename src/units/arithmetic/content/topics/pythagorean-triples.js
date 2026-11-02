export default {
  "number": 33,
  "manyParts": false,
  "bare": {
    "prompt": "Decide whether $5, 12, 13$ form a Pythagorean triple.",
    "answer": "Yes",
    "form": "Answer as Yes or No.",
    "solution": [
      "Decide whether $5, 12, 13$ form a Pythagorean triple.",
      "$5^2+12^2=25+144=169$, and $13^2=169$.",
      "Yes."
    ]
  },
  "ideas": [
    {
      "name": "Pythagorean triple",
      "concrete": "The triple $3, 4, 5$ is a Pythagorean triple, since $3^2+4^2=5^2$.",
      "general": "A **Pythagorean triple** is a triple of nonzero whole numbers $a,b,c$ so that $a^2+b^2=c^2$."
    },
    {
      "name": "Primitive Pythagorean triple",
      "concrete": "The triple $3, 4, 5$ is primitive, since $\\gcd(3,4,5)=1$, while $6, 8, 10$ is not, since $\\gcd(6,8,10)=2$.",
      "general": "A Pythagorean triple $a,b,c$ is **primitive** if $\\gcd(a,b,c)=1$.",
      "definitions": [
        "The **gcd** of several whole numbers is the greatest whole number dividing all of them."
      ]
    },
    {
      "name": "The classification formula for primitive Pythagorean triples",
      "concrete": "The values $m=2, n=1$ give $m^2-n^2=3$, $2mn=4$, $m^2+n^2=5$, the triple $3,4,5$.",
      "general": "Every primitive Pythagorean triple is $\\{m^2-n^2,\\,2mn,\\,m^2+n^2\\}$ for positive whole numbers $m>n$ with $\\gcd(m,n)=1$ and exactly one of $m,n$ even. Every such triple is a primitive Pythagorean triple."
    }
  ],
  "kinds": [
    {
      "id": "t33-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the Pythagorean triple given by $m=2, n=1$ via the formula $\\{m^2-n^2,\\,2mn,\\,m^2+n^2\\}$.",
            "lines": [
              {
                "step": "$m^2-n^2=4-1=3$, $2mn=2 \\times 2 \\times 1=4$, $m^2+n^2=4+1=5$.",
                "reason": "the formula for a primitive Pythagorean triple"
              },
              {
                "step": "$3^2+4^2=5^2$.",
                "reason": "direct computation checks the triple"
              },
              {
                "step": "$\\gcd(2,1)=1$, and exactly one of 2, 1 is even.",
                "reason": "the formula's conditions on $m,n$"
              },
              {
                "step": "$3$, $4$, $5$.",
                "reason": "a primitive Pythagorean triple produced by the formula"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the Pythagorean triple given by $m=3, n=2$ via the formula $\\{m^2-n^2,\\,2mn,\\,m^2+n^2\\}$.",
              "answer": "5, 12, 13",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "$m^2-n^2=9-4=5$, $2mn=2 \\times 3 \\times 2=12$, $m^2+n^2=9+4=13$.",
                  "reason": "the formula for a primitive Pythagorean triple"
                },
                {
                  "step": "$5^2+12^2=13^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(3,2)=1$, and exactly one of 3, 2 is even.",
                  "reason": "the formula's conditions on $m,n$"
                },
                {
                  "step": "$5$, $12$, $13$.",
                  "reason": "a primitive Pythagorean triple produced by the formula"
                }
              ]
            },
            {
              "prompt": "Find the Pythagorean triple given by $m=4, n=3$ via the formula $\\{m^2-n^2,\\,2mn,\\,m^2+n^2\\}$.",
              "answer": "7, 24, 25",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "$m^2-n^2=16-9=7$, $2mn=2 \\times 4 \\times 3=24$, $m^2+n^2=16+9=25$.",
                  "reason": "the formula for a primitive Pythagorean triple"
                },
                {
                  "step": "$7^2+24^2=25^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(4,3)=1$, and exactly one of 4, 3 is even.",
                  "reason": "the formula's conditions on $m,n$"
                },
                {
                  "step": "$7$, $24$, $25$.",
                  "reason": "a primitive Pythagorean triple produced by the formula"
                }
              ]
            },
            {
              "prompt": "Find the Pythagorean triple given by $m=5, n=2$ via the formula $\\{m^2-n^2,\\,2mn,\\,m^2+n^2\\}$.",
              "answer": "21, 20, 29",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "$m^2-n^2=25-4=21$, $2mn=2 \\times 5 \\times 2=20$, $m^2+n^2=25+4=29$.",
                  "reason": "the formula for a primitive Pythagorean triple"
                },
                {
                  "step": "$21^2+20^2=29^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(5,2)=1$, and exactly one of 5, 2 is even.",
                  "reason": "the formula's conditions on $m,n$"
                },
                {
                  "step": "$21$, $20$, $29$.",
                  "reason": "a primitive Pythagorean triple produced by the formula"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t33-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $9, 12, 15$ is a primitive Pythagorean triple.",
            "lines": [
              {
                "step": "$9^2+12^2=81+144=225=15^2$.",
                "reason": "direct computation checks the triple"
              },
              {
                "step": "$\\gcd(9,12,15)=3$.",
                "reason": "the gcd of the three numbers decides primitivity"
              },
              {
                "step": "$\\{9,12,15\\}=3\\times\\{3,4,5\\}$.",
                "reason": "dividing by the gcd gives the primitive triple it multiplies"
              },
              {
                "step": "No.",
                "reason": "the triple is not primitive"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $15, 36, 39$ is a primitive Pythagorean triple.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$15^2+36^2=225+1\\,296=1\\,521=39^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(15,36,39)=3$.",
                  "reason": "the gcd of the three numbers decides primitivity"
                },
                {
                  "step": "$\\{15,36,39\\}=3\\times\\{5,12,13\\}$.",
                  "reason": "dividing by the gcd gives the primitive triple it multiplies"
                },
                {
                  "step": "No.",
                  "reason": "the triple is not primitive"
                }
              ]
            },
            {
              "prompt": "Decide whether $16, 30, 34$ is a primitive Pythagorean triple.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$16^2+30^2=256+900=1\\,156=34^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(16,30,34)=2$.",
                  "reason": "the gcd of the three numbers decides primitivity"
                },
                {
                  "step": "$\\{16,30,34\\}=2\\times\\{8,15,17\\}$.",
                  "reason": "dividing by the gcd gives the primitive triple it multiplies"
                },
                {
                  "step": "No.",
                  "reason": "the triple is not primitive"
                }
              ]
            },
            {
              "prompt": "Decide whether $24, 32, 40$ is a primitive Pythagorean triple.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$24^2+32^2=576+1\\,024=1\\,600=40^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(24,32,40)=8$.",
                  "reason": "the gcd of the three numbers decides primitivity"
                },
                {
                  "step": "$\\{24,32,40\\}=8\\times\\{3,4,5\\}$.",
                  "reason": "dividing by the gcd gives the primitive triple it multiplies"
                },
                {
                  "step": "No.",
                  "reason": "the triple is not primitive"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $8, 15, 17$ is a primitive Pythagorean triple.",
            "lines": [
              {
                "step": "$8^2+15^2=17^2$.",
                "reason": "direct computation checks the triple"
              },
              {
                "step": "$\\gcd(8,15,17)=1$.",
                "reason": "the gcd of the three numbers decides primitivity"
              },
              {
                "step": "The formula with $m=4, n=1$ gives $\\{m^2-n^2,2mn,m^2+n^2\\}=\\{8,15,17\\}$.",
                "reason": "the formula produces this triple"
              },
              {
                "step": "Yes.",
                "reason": "the triple is a Pythagorean triple with gcd 1"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $85, 132, 157$ is a primitive Pythagorean triple.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$85^2+132^2=157^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(85,132,157)=1$.",
                  "reason": "the gcd of the three numbers decides primitivity"
                },
                {
                  "step": "The formula with $m=11, n=6$ gives $\\{m^2-n^2,2mn,m^2+n^2\\}=\\{85,132,157\\}$.",
                  "reason": "the formula produces this triple"
                },
                {
                  "step": "Yes.",
                  "reason": "the triple is a Pythagorean triple with gcd 1"
                }
              ]
            },
            {
              "prompt": "Decide whether $57, 176, 185$ is a primitive Pythagorean triple.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$57^2+176^2=185^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(57,176,185)=1$.",
                  "reason": "the gcd of the three numbers decides primitivity"
                },
                {
                  "step": "The formula with $m=11, n=8$ gives $\\{m^2-n^2,2mn,m^2+n^2\\}=\\{57,176,185\\}$.",
                  "reason": "the formula produces this triple"
                },
                {
                  "step": "Yes.",
                  "reason": "the triple is a Pythagorean triple with gcd 1"
                }
              ]
            },
            {
              "prompt": "Decide whether $119, 120, 169$ is a primitive Pythagorean triple.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$119^2+120^2=169^2$.",
                  "reason": "direct computation checks the triple"
                },
                {
                  "step": "$\\gcd(119,120,169)=1$.",
                  "reason": "the gcd of the three numbers decides primitivity"
                },
                {
                  "step": "The formula with $m=12, n=5$ gives $\\{m^2-n^2,2mn,m^2+n^2\\}=\\{119,120,169\\}$.",
                  "reason": "the formula produces this triple"
                },
                {
                  "step": "Yes.",
                  "reason": "the triple is a Pythagorean triple with gcd 1"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $10, 15, 20$ is a primitive Pythagorean triple.",
            "lines": [
              {
                "step": "$10^2+15^2=325$.",
                "reason": "direct computation of the sum of the two squares"
              },
              {
                "step": "$20^2=400$.",
                "reason": "direct computation of the third square"
              },
              {
                "step": "$10^2+15^2\\neq20^2$.",
                "reason": "the two values above differ"
              },
              {
                "step": "No.",
                "reason": "the three numbers do not form a Pythagorean triple, so they do not form a primitive one either"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $5, 6, 8$ is a primitive Pythagorean triple.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$5^2+6^2=61$.",
                  "reason": "direct computation of the sum of the two squares"
                },
                {
                  "step": "$8^2=64$.",
                  "reason": "direct computation of the third square"
                },
                {
                  "step": "$5^2+6^2\\neq8^2$.",
                  "reason": "the two values above differ"
                },
                {
                  "step": "No.",
                  "reason": "the three numbers do not form a Pythagorean triple, so they do not form a primitive one either"
                }
              ]
            },
            {
              "prompt": "Decide whether $10, 11, 16$ is a primitive Pythagorean triple.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$10^2+11^2=221$.",
                  "reason": "direct computation of the sum of the two squares"
                },
                {
                  "step": "$16^2=256$.",
                  "reason": "direct computation of the third square"
                },
                {
                  "step": "$10^2+11^2\\neq16^2$.",
                  "reason": "the two values above differ"
                },
                {
                  "step": "No.",
                  "reason": "the three numbers do not form a Pythagorean triple, so they do not form a primitive one either"
                }
              ]
            },
            {
              "prompt": "Decide whether $12, 16, 21$ is a primitive Pythagorean triple.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$12^2+16^2=400$.",
                  "reason": "direct computation of the sum of the two squares"
                },
                {
                  "step": "$21^2=441$.",
                  "reason": "direct computation of the third square"
                },
                {
                  "step": "$12^2+16^2\\neq21^2$.",
                  "reason": "the two values above differ"
                },
                {
                  "step": "No.",
                  "reason": "the three numbers do not form a Pythagorean triple, so they do not form a primitive one either"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": [
    {
      "id": "t33-s1",
      "statement": "For integers $x,y,z$, $x^2+y^2=z^2$ and $\\gcd(x,y)=1$ if and only if there exist integers $m,n$ with four properties. First, $x=m^2-n^2$ and $y=2mn$, or $x=2mn$ and $y=m^2-n^2$. Second, $z=m^2+n^2$ or $z=-(m^2+n^2)$. Third, $\\gcd(m,n)=1$. Fourth, exactly one of $m,n$ is even.",
      "method": "proof by cases",
      "check": {
        "proof": [
          {
            "line": "Write $|x|$, $|y|$, $|z|$ for $x$, $y$, $z$ with their signs dropped. An integer divides $x$ exactly when it divides $|x|$, so $\\gcd(x,y)=\\gcd(|x|,|y|)$, and $x^2=|x|^2$.",
            "reason": "the definition of divisibility of integers, since $-x=(-1)x$"
          },
          {
            "line": "An odd number $2k+1$ has the odd square $4(k^2+k)+1$. An even number $2k$ has the square $4k^2$, which is divisible by $4$.",
            "reason": "the distributive law"
          },
          {
            "line": "Suppose that $x^2+y^2=z^2$ and $\\gcd(x,y)=1$. Then $x$ and $y$ are not both even, since $2$ would then be a common divisor.",
            "reason": "the definition of the gcd"
          },
          {
            "line": "If $x$ and $y$ were both odd, then $z^2=x^2+y^2=4K+2$ for a whole number $K$.",
            "reason": "the squares of odd numbers, from the previous lines"
          },
          {
            "line": "Then $z^2$ is even, so $z$ is even and $4\\mid z^2$. But $4\\nmid4K+2$. So exactly one of $x$ and $y$ is even.",
            "reason": "the square of an odd number is odd, and the divisibility of a sum, since $4\\nmid2$"
          },
          {
            "line": "Case $x$ odd and $y$ even. Then $z^2=x^2+y^2$ is odd, so $z$ is odd.",
            "reason": "the squares of odd and even numbers, and the divisibility of a sum"
          },
          {
            "line": "Write $X=|x|$ and $Z=|z|$, both odd. Then $Z^2=X^2+y^2\\ge X^2$, so $Z\\ge X$, and $Z+X$ and $Z-X$ are even.",
            "reason": "multiplying inequalities of positive numbers, and the sum and the difference of two odd numbers are even"
          },
          {
            "line": "Let $u=\\frac{Z+X}{2}$, $v=\\frac{Z-X}{2}$, and $w=\\frac{|y|}{2}$, whole numbers with $u+v=Z$, $u-v=X$, and $uv=\\frac{Z^2-X^2}{4}=\\frac{y^2}{4}=w^2$.",
            "reason": "the distributive law"
          },
          {
            "line": "Suppose that a prime $p$ divides both $u$ and $v$. Then $p$ divides $u+v=Z$ and $u-v=X$, so $p$ divides $Z^2-X^2=y^2$, and so $p$ divides $|y|$.",
            "reason": "the divisibility of a sum, and a prime dividing a product divides one of the factors"
          },
          {
            "line": "Then $p$ is a common divisor of $x$ and $y$ greater than $1$, which contradicts $\\gcd(x,y)=1$. So no prime divides both $u$ and $v$, and $\\gcd(u,v)=1$.",
            "reason": "the definition of the gcd, and every whole number at least $2$ has a prime divisor"
          },
          {
            "line": "If $v=0$, then $u=\\gcd(u,0)=1$, so $u=1^2$ and $v=0^2$.",
            "reason": "the definition $\\gcd(a,0)=a$"
          },
          {
            "line": "If $v\\ne0$, every prime appears an even number of times in $uv=w^2$. Since $u$ and $v$ share no prime, every prime appears an even number of times in $u$ and in $v$. So $u$ and $v$ are perfect squares.",
            "reason": "a number is a perfect square exactly when each of its primes appears an even number of times, and $1=1^2$"
          },
          {
            "line": "So $u=m^2$ and $v=n^2$ for whole numbers $m$ and $n$. Then $Z=m^2+n^2$, $X=m^2-n^2$, and $w^2=(mn)^2$, so $w=mn$ and $|y|=2mn$.",
            "reason": "substituting into $u+v=Z$, $u-v=X$, and $uv=w^2$, then two whole numbers with equal squares are equal"
          },
          {
            "line": "A common divisor of $m$ and $n$ divides $u=m^2$ and $v=n^2$, so it is at most $\\gcd(u,v)=1$, and $\\gcd(m,n)=1$.",
            "reason": "the transitivity of divisibility, and the definition of the gcd"
          },
          {
            "line": "Since $m^2+n^2=Z$ is odd, one of $m^2$ and $n^2$ is odd and the other even. So exactly one of $m$ and $n$ is even.",
            "reason": "the squares of odd and even numbers, and the divisibility of a sum"
          },
          {
            "line": "So $x=\\pm(m^2-n^2)$, $y=\\pm2mn$, and $z=\\pm(m^2+n^2)$. If $x=-(m^2-n^2)$, exchange $m$ and $n$. This changes the sign of $m^2-n^2$ and keeps $2mn$, $m^2+n^2$, $\\gcd(m,n)=1$, and exactly one of $m$, $n$ even.",
            "reason": "the commutative laws, and $n^2-m^2=-(m^2-n^2)$"
          },
          {
            "line": "If $y=-2mn$, replace $m$ by $-m$. This changes the sign of $2mn$ and keeps $m^2$, $\\gcd(m,n)=1$, and whether $m$ is even.",
            "reason": "the squares of $m$ and $-m$ are equal"
          },
          {
            "line": "So $x=m^2-n^2$, $y=2mn$, $z=m^2+n^2$ or $z=-(m^2+n^2)$, $\\gcd(m,n)=1$, and exactly one of $m$, $n$ is even.",
            "reason": "combining the lines of this case"
          },
          {
            "line": "Case $x$ even and $y$ odd. The integers $y$, $x$, $z$ satisfy $y^2+x^2=z^2$ and $\\gcd(y,x)=1$. So the first case gives integers $m$, $n$ with $x=2mn$, $y=m^2-n^2$, and the other conditions.",
            "reason": "the first case, with the roles of $x$ and $y$ exchanged"
          },
          {
            "line": "Conversely, suppose that integers $m$, $n$ satisfy the conditions. Then $(m^2-n^2)^2+(2mn)^2=m^4+2m^2n^2+n^4=(m^2+n^2)^2$.",
            "reason": "the distributive law"
          },
          {
            "line": "So $x^2+y^2=z^2$ in both orders of $x$, $y$ and for both signs of $z$.",
            "reason": "substituting, since $(-a)^2=a^2$"
          },
          {
            "line": "Exactly one of $m$, $n$ is even, so one of $m^2$, $n^2$ is odd and the other even. So $m^2-n^2$ is odd, and it is not $0$.",
            "reason": "the squares of odd and even numbers, and the divisibility of a sum"
          },
          {
            "line": "Suppose that a prime $p$ divides both $m^2-n^2$ and $2mn$. Then $p\\ne2$, since $m^2-n^2$ is odd, so $p$ divides $m$ or $n$.",
            "reason": "a prime dividing a product divides one of the factors, applied to $2\\cdot|m|\\cdot|n|$"
          },
          {
            "line": "If $p\\mid m$, then $p\\mid m^2$, so $p$ divides $m^2-(m^2-n^2)=n^2$, and so $p\\mid n$. If $p\\mid n$, the same steps give $p\\mid m$.",
            "reason": "the divisibility of a sum, and a prime dividing a product divides one of the factors"
          },
          {
            "line": "Either way $p$ divides both $m$ and $n$, which contradicts $\\gcd(m,n)=1$. So no prime divides both $x$ and $y$, and $\\gcd(x,y)=1$.",
            "reason": "every whole number at least $2$ has a prime divisor"
          },
          {
            "line": "So $x^2+y^2=z^2$ and $\\gcd(x,y)=1$ if and only if integers $m$, $n$ with the stated conditions exist.",
            "reason": "combining both directions"
          }
        ]
      }
    },
    {
      "id": "t33-s2",
      "statement": "For integers $x,y,z$ with $x^2+y^2=z^2$, if $\\gcd(x,y)=1$ then $\\gcd(y,z)=1$.",
      "method": "proof by contradiction",
      "check": {
        "proof": [
          {
            "line": "The numbers $y$ and $z$ are not both $0$, since otherwise $x^2=0$, so $x=0$, and $\\gcd(x,y)$ would not be $1$.",
            "reason": "the definition of the gcd, for numbers not both $0$"
          },
          {
            "line": "Suppose, for contradiction, that $\\gcd(y,z)\\ne1$, so $\\gcd(y,z)\\ge2$.",
            "reason": "proof by contradiction"
          },
          {
            "line": "Then $\\gcd(y,z)$ has a prime divisor $p$, and $p$ divides both $y$ and $z$.",
            "reason": "every whole number at least $2$ has a prime divisor, and the transitivity of divisibility"
          },
          {
            "line": "So $p$ divides $z^2-y^2=x^2$.",
            "reason": "the divisibility of a sum, applied to $z^2=x^2+y^2$"
          },
          {
            "line": "So $p$ divides $|x|\\cdot|x|$, and so $p$ divides $x$.",
            "reason": "a prime dividing a product divides one of the factors"
          },
          {
            "line": "Then $p$ is a common divisor of $x$ and $y$ with $p\\ge2$, so $\\gcd(x,y)\\ge2$, which contradicts $\\gcd(x,y)=1$.",
            "reason": "the definition of the gcd as the greatest whole number dividing both numbers"
          },
          {
            "line": "So $\\gcd(y,z)=1$.",
            "reason": "the supposition $\\gcd(y,z)\\ne1$ is impossible"
          }
        ]
      }
    }
  ]
}
