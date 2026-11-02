// Greatest Common Divisor and Least Common Multiple: divisors and multiples from prime decompositions, fractions in lowest terms, perfect squares and irrational square roots.
export default {
  "number": 32,
  "manyParts": false,
  "bare": {
    "prompt": "Find $\\gcd(30,42)$ and $\\mathrm{lcm}(30,42)$.",
    "answer": "6, 210",
    "form": "Answer as whole numbers separated by commas, in the order asked.",
    "solution": [
      "Find $\\gcd(30,42)$ and $\\mathrm{lcm}(30,42)$.",
      "The divisors of $30$ are $1,2,3,5,6,10,15,30$, and the divisors of $42$ are $1,2,3,6,7,14,21,42$. The common divisors are $1,2,3,6$, so $\\gcd(30,42)=6$.",
      "The multiples of $30$ are $30,60,90,120,150,180,210,\\dots$ and the multiples of $42$ are $42,84,126,168,210,\\dots$. The first common multiple is $210$, so $\\mathrm{lcm}(30,42)=210$.",
      "$6$, $210$."
    ]
  },
  "ideas": [
    {
      "name": "Divisors read off from a prime decomposition",
      "concrete": "The number $24=2^3 \\times 3$ divides $360=2^3 \\times 3^2 \\times 5$, because $24$ is a product of primes from the prime decomposition of $360$.",
      "general": "A whole number $b\\geq2$ divides $n\\geq2$ exactly when $b$ is a product of primes from $n$'s prime decomposition. No prime appears more often in $b$ than in $n$."
    },
    {
      "name": "Least common multiple",
      "concrete": "The first common multiple of 24 and 108 is 216, so $\\mathrm{lcm}(24,108)=216$.",
      "general": "The **least common multiple** $\\mathrm{lcm}(a,b)$ of nonzero whole numbers $a$ and $b$ is their least nonzero common multiple."
    },
    {
      "name": "Reading the gcd and lcm off two prime decompositions",
      "concrete": "From $24=2^3 \\times 3$ and $108=2^2 \\times 3^3$, $\\gcd(24,108)=2^2 \\times 3=12$ and $\\mathrm{lcm}(24,108)=2^3 \\times 3^3=216$.",
      "general": "Take two nonzero whole numbers. Their gcd is the product of the primes in both prime decompositions, each to the lesser of its two exponents. Their lcm is the product of every prime in either prime decomposition, each to the greater of its two exponents."
    },
    {
      "name": "The product of two whole numbers equals the product of their gcd and lcm",
      "concrete": "The numbers $4$ and $6$ have $\\gcd(4,6)=2$ and $\\mathrm{lcm}(4,6)=12$, and $4 \\times 6=24=2 \\times 12$.",
      "general": "For nonzero whole numbers $a$ and $b$, $ab=\\gcd(a,b) \\times \\mathrm{lcm}(a,b)$."
    },
    {
      "name": "Fractions in lowest terms and the gcd",
      "concrete": "The fraction $\\frac{81}{54}$ equals $\\frac{3}{2}$ in lowest terms, since $\\gcd(81,54)=27$ and $81/27=3$, $54/27=2$.",
      "general": "A fraction $\\frac{a}{b}$ is in lowest terms exactly when $\\gcd(a,b)=1$."
    },
    {
      "name": "Perfect square",
      "concrete": "The number $1\\,936=44^2$ is a perfect square, and its prime decomposition $2^4 \\times 11^2$ has every prime to an even power.",
      "general": "A whole number is a perfect square exactly when every prime in its decomposition appears an even number of times.",
      "definitions": [
        "A whole number $n$ is a **perfect square** if $n=m^2$ for some whole number $m$."
      ]
    },
    {
      "name": "Irrational square roots",
      "concrete": "The number $\\sqrt{18}$ is irrational, since $18=2 \\times 3^2$ is not a perfect square.",
      "general": "If a whole number is not a perfect square, its square root is irrational.",
      "definitions": [
        "A number is **irrational** if it is not a rational number."
      ]
    }
  ],
  "kinds": [
    {
      "id": "t32-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $\\gcd(24,108)$ and $\\mathrm{lcm}(24,108)$ from $24=2^3 \\times 3$ and $108=2^2 \\times 3^3$.",
            "lines": [
              {
                "step": "$\\gcd(24,108)=2^2 \\times 3=12$.",
                "reason": "the gcd is the product of the primes common to both decompositions, to the lesser exponent"
              },
              {
                "step": "$\\mathrm{lcm}(24,108)=2^3 \\times 3^3=216$.",
                "reason": "the lcm is the product of every prime appearing in either decomposition, to the greater exponent"
              },
              {
                "step": "Multiplying directly gives $24 \\times 108=2\\,592$, and multiplying the gcd and lcm gives $12 \\times 216=2\\,592$, so the two products match.",
                "reason": "the product of two whole numbers equals the product of their gcd and lcm"
              },
              {
                "step": "$12$, $216$.",
                "reason": "the gcd and lcm computed above"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\gcd(210,693)$ and $\\mathrm{lcm}(210,693)$ from $210=2 \\times 3 \\times 5 \\times 7$ and $693=3^2 \\times 7 \\times 11$.",
              "answer": "21, 6930",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "$\\gcd(210,693)=3 \\times 7=21$.",
                  "reason": "the gcd is the product of the primes common to both decompositions, to the lesser exponent"
                },
                {
                  "step": "$\\mathrm{lcm}(210,693)=2 \\times 3^2 \\times 5 \\times 7 \\times 11=6\\,930$.",
                  "reason": "the lcm is the product of every prime appearing in either decomposition, to the greater exponent"
                },
                {
                  "step": "Multiplying directly gives $210 \\times 693=145\\,530$, and multiplying the gcd and lcm gives $21 \\times 6\\,930=145\\,530$, so the two products match.",
                  "reason": "the product of two whole numbers equals the product of their gcd and lcm"
                },
                {
                  "step": "$21$, $6\\,930$.",
                  "reason": "the gcd and lcm computed above"
                }
              ]
            },
            {
              "prompt": "Find $\\gcd(26\\,460,15\\,225)$ and $\\mathrm{lcm}(26\\,460,15\\,225)$ from $26\\,460=2^2 \\times 3^3 \\times 5 \\times 7^2$ and $15\\,225=3 \\times 5^2 \\times 7 \\times 29$.",
              "answer": "105, 3836700",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "$\\gcd(26\\,460,15\\,225)=3 \\times 5 \\times 7=105$.",
                  "reason": "the gcd is the product of the primes common to both decompositions, to the lesser exponent"
                },
                {
                  "step": "$\\mathrm{lcm}(26\\,460,15\\,225)=2^2 \\times 3^3 \\times 5^2 \\times 7^2 \\times 29=3\\,836\\,700$.",
                  "reason": "the lcm is the product of every prime appearing in either decomposition, to the greater exponent"
                },
                {
                  "step": "Multiplying directly gives $26\\,460 \\times 15\\,225=402\\,853\\,500$, and multiplying the gcd and lcm gives $105 \\times 3\\,836\\,700=402\\,853\\,500$, so the two products match.",
                  "reason": "the product of two whole numbers equals the product of their gcd and lcm"
                },
                {
                  "step": "$105$, $3\\,836\\,700$.",
                  "reason": "the gcd and lcm computed above"
                }
              ]
            },
            {
              "prompt": "Find $\\gcd(72,120)$ and $\\mathrm{lcm}(72,120)$ from $72=2^3 \\times 3^2$ and $120=2^3 \\times 3 \\times 5$.",
              "answer": "24, 360",
              "form": "Answer as whole numbers separated by commas, in the order asked.",
              "lines": [
                {
                  "step": "$\\gcd(72,120)=2^3 \\times 3=24$.",
                  "reason": "the gcd is the product of the primes common to both decompositions, to the lesser exponent"
                },
                {
                  "step": "$\\mathrm{lcm}(72,120)=2^3 \\times 3^2 \\times 5=360$.",
                  "reason": "the lcm is the product of every prime appearing in either decomposition, to the greater exponent"
                },
                {
                  "step": "Multiplying directly gives $72 \\times 120=8\\,640$, and multiplying the gcd and lcm gives $24 \\times 360=8\\,640$, so the two products match.",
                  "reason": "the product of two whole numbers equals the product of their gcd and lcm"
                },
                {
                  "step": "$24$, $360$.",
                  "reason": "the gcd and lcm computed above"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t32-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $\\mathrm{lcm}(24,108)$, given $\\gcd(24,108)=12$.",
            "lines": [
              {
                "step": "$24 \\times 108=2\\,592$.",
                "reason": "direct multiplication"
              },
              {
                "step": "$\\mathrm{lcm}(24,108)=\\frac{24 \\times 108}{12}=216$.",
                "reason": "the product of two whole numbers equals the product of their gcd and lcm, solved for the lcm"
              },
              {
                "step": "$216$.",
                "reason": "the lcm computed above"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\mathrm{lcm}(90,315)$, given $\\gcd(90,315)=45$.",
              "answer": "630",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$90 \\times 315=28\\,350$.",
                  "reason": "direct multiplication"
                },
                {
                  "step": "$\\mathrm{lcm}(90,315)=\\frac{90 \\times 315}{45}=630$.",
                  "reason": "the product of two whole numbers equals the product of their gcd and lcm, solved for the lcm"
                },
                {
                  "step": "$630$.",
                  "reason": "the lcm computed above"
                }
              ]
            },
            {
              "prompt": "Find $\\mathrm{lcm}(48,84)$, given $\\gcd(48,84)=12$.",
              "answer": "336",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$48 \\times 84=4\\,032$.",
                  "reason": "direct multiplication"
                },
                {
                  "step": "$\\mathrm{lcm}(48,84)=\\frac{48 \\times 84}{12}=336$.",
                  "reason": "the product of two whole numbers equals the product of their gcd and lcm, solved for the lcm"
                },
                {
                  "step": "$336$.",
                  "reason": "the lcm computed above"
                }
              ]
            },
            {
              "prompt": "Find $\\mathrm{lcm}(126,225)$, given $\\gcd(126,225)=9$.",
              "answer": "3150",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "$126 \\times 225=28\\,350$.",
                  "reason": "direct multiplication"
                },
                {
                  "step": "$\\mathrm{lcm}(126,225)=\\frac{126 \\times 225}{9}=3\\,150$.",
                  "reason": "the product of two whole numbers equals the product of their gcd and lcm, solved for the lcm"
                },
                {
                  "step": "$3\\,150$.",
                  "reason": "the lcm computed above"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t32-k3",
      "forms": [
        {
          "example": {
            "problem": "Compute $\\gcd\\left(\\frac{168}{12},\\frac{180}{12}\\right)$, where $12=\\gcd(168,180)$.",
            "lines": [
              {
                "step": "Dividing by the gcd gives $\\frac{168}{12}=14$ and $\\frac{180}{12}=15$.",
                "reason": "dividing by the gcd"
              },
              {
                "step": "The quotients $14=2 \\times 7$ and $15=3 \\times 5$ share no prime divisor.",
                "reason": "the gcd already removed every prime common to both"
              },
              {
                "step": "$\\gcd(14,15)=1$.",
                "reason": "no shared prime divisor means the only common divisor is 1"
              },
              {
                "step": "$1$.",
                "reason": "the gcd of the two quotients computed above"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\gcd\\left(\\frac{360}{90},\\frac{630}{90}\\right)$, where $90=\\gcd(360,630)$.",
              "answer": "1",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Dividing by the gcd gives $\\frac{360}{90}=4$ and $\\frac{630}{90}=7$.",
                  "reason": "dividing by the gcd"
                },
                {
                  "step": "The quotients $4=2^2$ and $7$ share no prime divisor.",
                  "reason": "the gcd already removed every prime common to both"
                },
                {
                  "step": "$\\gcd(4,7)=1$.",
                  "reason": "no shared prime divisor means the only common divisor is 1"
                },
                {
                  "step": "$1$.",
                  "reason": "the gcd of the two quotients computed above"
                }
              ]
            },
            {
              "prompt": "Compute $\\gcd\\left(\\frac{126}{42},\\frac{84}{42}\\right)$, where $42=\\gcd(126,84)$.",
              "answer": "1",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Dividing by the gcd gives $\\frac{126}{42}=3$ and $\\frac{84}{42}=2$.",
                  "reason": "dividing by the gcd"
                },
                {
                  "step": "The quotients $3$ and $2$ share no prime divisor.",
                  "reason": "the gcd already removed every prime common to both"
                },
                {
                  "step": "$\\gcd(3,2)=1$.",
                  "reason": "no shared prime divisor means the only common divisor is 1"
                },
                {
                  "step": "$1$.",
                  "reason": "the gcd of the two quotients computed above"
                }
              ]
            },
            {
              "prompt": "Compute $\\gcd\\left(\\frac{120}{15},\\frac{315}{15}\\right)$, where $15=\\gcd(120,315)$.",
              "answer": "1",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Dividing by the gcd gives $\\frac{120}{15}=8$ and $\\frac{315}{15}=21$.",
                  "reason": "dividing by the gcd"
                },
                {
                  "step": "The quotients $8=2^3$ and $21=3 \\times 7$ share no prime divisor.",
                  "reason": "the gcd already removed every prime common to both"
                },
                {
                  "step": "$\\gcd(8,21)=1$.",
                  "reason": "no shared prime divisor means the only common divisor is 1"
                },
                {
                  "step": "$1$.",
                  "reason": "the gcd of the two quotients computed above"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t32-k4",
      "forms": [
        {
          "example": {
            "problem": "Compute the fraction in lowest terms equal to $\\frac{81}{54}$.",
            "lines": [
              {
                "step": "$\\gcd(81,54)=27$.",
                "reason": "direct computation"
              },
              {
                "step": "Dividing gives $81/27=3$ and $54/27=2$.",
                "reason": "dividing both numbers by the gcd"
              },
              {
                "step": "$\\frac{81}{54}=\\frac{3}{2}$, in lowest terms.",
                "reason": "by direct computation, $\\gcd(3,2)=1$"
              },
              {
                "step": "$\\frac{3}{2}$.",
                "reason": "the fraction in lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute the fraction in lowest terms equal to $\\frac{132}{72}$.",
              "answer": "11/6",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\gcd(132,72)=12$.",
                  "reason": "direct computation"
                },
                {
                  "step": "Dividing gives $132/12=11$ and $72/12=6$.",
                  "reason": "dividing both numbers by the gcd"
                },
                {
                  "step": "$\\frac{132}{72}=\\frac{11}{6}$, in lowest terms.",
                  "reason": "by direct computation, $\\gcd(11,6)=1$"
                },
                {
                  "step": "$\\frac{11}{6}$.",
                  "reason": "the fraction in lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute the fraction in lowest terms equal to $\\frac{160}{256}$.",
              "answer": "5/8",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\gcd(160,256)=32$.",
                  "reason": "direct computation"
                },
                {
                  "step": "Dividing gives $160/32=5$ and $256/32=8$.",
                  "reason": "dividing both numbers by the gcd"
                },
                {
                  "step": "$\\frac{160}{256}=\\frac{5}{8}$, in lowest terms.",
                  "reason": "by direct computation, $\\gcd(5,8)=1$"
                },
                {
                  "step": "$\\frac{5}{8}$.",
                  "reason": "the fraction in lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute the fraction in lowest terms equal to $\\frac{273}{156}$.",
              "answer": "7/4",
              "form": "Answer as a fraction in lowest terms.",
              "lines": [
                {
                  "step": "$\\gcd(273,156)=39$.",
                  "reason": "direct computation"
                },
                {
                  "step": "Dividing gives $273/39=7$ and $156/39=4$.",
                  "reason": "dividing both numbers by the gcd"
                },
                {
                  "step": "$\\frac{273}{156}=\\frac{7}{4}$, in lowest terms.",
                  "reason": "by direct computation, $\\gcd(7,4)=1$"
                },
                {
                  "step": "$\\frac{7}{4}$.",
                  "reason": "the fraction in lowest terms"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t32-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $\\sqrt{175}$ is irrational.",
            "lines": [
              {
                "step": "$175=5^2 \\times 7$.",
                "reason": "prime decomposition"
              },
              {
                "step": "The prime $7$ appears an odd number of times in $175$'s prime decomposition.",
                "reason": "checking each exponent for being even or odd"
              },
              {
                "step": "The number $175$ is not a perfect square.",
                "reason": "the perfect square rule"
              },
              {
                "step": "Yes.",
                "reason": "if a whole number is not a perfect square, its square root is irrational"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\sqrt{20}$ is irrational.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$20=2^2 \\times 5$.",
                  "reason": "prime decomposition"
                },
                {
                  "step": "The prime $5$ appears an odd number of times in $20$'s prime decomposition.",
                  "reason": "checking each exponent for being even or odd"
                },
                {
                  "step": "The number $20$ is not a perfect square.",
                  "reason": "the perfect square rule"
                },
                {
                  "step": "Yes.",
                  "reason": "if a whole number is not a perfect square, its square root is irrational"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\sqrt{75}$ is irrational.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$75=3 \\times 5^2$.",
                  "reason": "prime decomposition"
                },
                {
                  "step": "The prime $3$ appears an odd number of times in $75$'s prime decomposition.",
                  "reason": "checking each exponent for being even or odd"
                },
                {
                  "step": "The number $75$ is not a perfect square.",
                  "reason": "the perfect square rule"
                },
                {
                  "step": "Yes.",
                  "reason": "if a whole number is not a perfect square, its square root is irrational"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\sqrt{99}$ is irrational.",
              "answer": "Yes",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$99=3^2 \\times 11$.",
                  "reason": "prime decomposition"
                },
                {
                  "step": "The prime $11$ appears an odd number of times in $99$'s prime decomposition.",
                  "reason": "checking each exponent for being even or odd"
                },
                {
                  "step": "The number $99$ is not a perfect square.",
                  "reason": "the perfect square rule"
                },
                {
                  "step": "Yes.",
                  "reason": "if a whole number is not a perfect square, its square root is irrational"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $\\sqrt{144}$ is irrational.",
            "lines": [
              {
                "step": "$144=2^4 \\times 3^2$.",
                "reason": "prime decomposition"
              },
              {
                "step": "Every prime in $144$'s prime decomposition appears an even number of times.",
                "reason": "checking each exponent for being even or odd"
              },
              {
                "step": "The number $144$ is a perfect square.",
                "reason": "the perfect square rule"
              },
              {
                "step": "No.",
                "reason": "if a whole number is a perfect square, its square root is rational"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\sqrt{121}$ is irrational.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$121=11^2$.",
                  "reason": "prime decomposition"
                },
                {
                  "step": "Every prime in $121$'s prime decomposition appears an even number of times.",
                  "reason": "checking each exponent for being even or odd"
                },
                {
                  "step": "The number $121$ is a perfect square.",
                  "reason": "the perfect square rule"
                },
                {
                  "step": "No.",
                  "reason": "if a whole number is a perfect square, its square root is rational"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\sqrt{169}$ is irrational.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$169=13^2$.",
                  "reason": "prime decomposition"
                },
                {
                  "step": "Every prime in $169$'s prime decomposition appears an even number of times.",
                  "reason": "checking each exponent for being even or odd"
                },
                {
                  "step": "The number $169$ is a perfect square.",
                  "reason": "the perfect square rule"
                },
                {
                  "step": "No.",
                  "reason": "if a whole number is a perfect square, its square root is rational"
                }
              ]
            },
            {
              "prompt": "Decide whether $\\sqrt{225}$ is irrational.",
              "answer": "No",
              "form": "Answer as Yes or No.",
              "lines": [
                {
                  "step": "$225=3^2 \\times 5^2$.",
                  "reason": "prime decomposition"
                },
                {
                  "step": "Every prime in $225$'s prime decomposition appears an even number of times.",
                  "reason": "checking each exponent for being even or odd"
                },
                {
                  "step": "The number $225$ is a perfect square.",
                  "reason": "the perfect square rule"
                },
                {
                  "step": "No.",
                  "reason": "if a whole number is a perfect square, its square root is rational"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t32-k6",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{12}{10}$.",
            "figure": {
              "file": "place:line:12/10",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$\\frac{12}{10}=\\frac{6}{5}$.",
                "reason": "dividing the numerator and the denominator by 2 gives an equal fraction"
              },
              {
                "step": "$6=1\\times 5+1$, so $\\frac{6}{5}=1+\\frac{1}{5}$.",
                "reason": "6 copies of $\\frac{1}{5}$ hold 1 group of 5 copies, each group making 1, with 1 copy left over"
              },
              {
                "step": "The mark lies between 1 and 2, $\\frac{1}{5}$ of the way from 1 to 2.",
                "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 1 of the 5 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:12/10",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 12/10 marked, between 1 and 2."
                }
              },
              {
                "step": "$\\frac{1}{5}=\\frac{1\\times 2}{5\\times 2}=\\frac{2}{10}=0.2$.",
                "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$1.2$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:12/10",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 12/10 lies at 1.2, between 1 and 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{48}{20}$.",
              "answer": "48/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{48}{20}=\\frac{12}{5}$.",
                  "reason": "dividing the numerator and the denominator by 4 gives an equal fraction"
                },
                {
                  "step": "$12=2\\times 5+2$, so $\\frac{12}{5}=2+\\frac{2}{5}$.",
                  "reason": "12 copies of $\\frac{1}{5}$ hold 2 groups of 5 copies, each group making 1, with 2 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{2}{5}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 2 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{2}{5}=\\frac{2\\times 2}{5\\times 2}=\\frac{4}{10}=0.4$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$2.4$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:48/20",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 48/20 lies at 2.4, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{18}{12}$.",
              "answer": "18/12",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{18}{12}=\\frac{3}{2}$.",
                  "reason": "dividing the numerator and the denominator by 6 gives an equal fraction"
                },
                {
                  "step": "$3=1\\times 2+1$, so $\\frac{3}{2}=1+\\frac{1}{2}$.",
                  "reason": "3 copies of $\\frac{1}{2}$ hold 1 group of 2 copies, each group making 1, with 1 copy left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{1}{2}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 1 of the 2 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{1}{2}=\\frac{1\\times 5}{2\\times 5}=\\frac{5}{10}=0.5$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$1.5$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:18/12",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 18/12 lies at 1.5, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{28}{8}$.",
              "answer": "28/8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{28}{8}=\\frac{7}{2}$.",
                  "reason": "dividing the numerator and the denominator by 4 gives an equal fraction"
                },
                {
                  "step": "$7=3\\times 2+1$, so $\\frac{7}{2}=3+\\frac{1}{2}$.",
                  "reason": "7 copies of $\\frac{1}{2}$ hold 3 groups of 2 copies, each group making 1, with 1 copy left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{1}{2}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 1 of the 2 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{1}{2}=\\frac{1\\times 5}{2\\times 5}=\\frac{5}{10}=0.5$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.5$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:28/8",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 28/8 lies at 3.5, between 3 and 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{24}{30}$.",
            "figure": {
              "file": "place:line:24/30",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "$\\frac{24}{30}=\\frac{4}{5}$.",
                "reason": "dividing the numerator and the denominator by 6 gives an equal fraction"
              },
              {
                "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 4.",
                "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 4 counts the parts from 0"
              },
              {
                "step": "$\\frac{4}{5}=\\frac{4\\times 2}{5\\times 2}=\\frac{8}{10}=0.8$.",
                "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$0.8$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:24/30",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 24/30 lies at 0.8, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{18}{30}$.",
              "answer": "18/30",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{18}{30}=\\frac{3}{5}$.",
                  "reason": "dividing the numerator and the denominator by 6 gives an equal fraction"
                },
                {
                  "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 3.",
                  "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
                },
                {
                  "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.6$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:18/30",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 18/30 lies at 0.6, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{8}{20}$.",
              "answer": "8/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{8}{20}=\\frac{2}{5}$.",
                  "reason": "dividing the numerator and the denominator by 4 gives an equal fraction"
                },
                {
                  "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 2.",
                  "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 2 counts the parts from 0"
                },
                {
                  "step": "$\\frac{2}{5}=\\frac{2\\times 2}{5\\times 2}=\\frac{4}{10}=0.4$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.4$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:8/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 8/20 lies at 0.4, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{7}{35}$.",
              "answer": "7/35",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$\\frac{7}{35}=\\frac{1}{5}$.",
                  "reason": "dividing the numerator and the denominator by 7 gives an equal fraction"
                },
                {
                  "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 1.",
                  "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 1 counts the parts from 0"
                },
                {
                  "step": "$\\frac{1}{5}=\\frac{1\\times 2}{5\\times 2}=\\frac{2}{10}=0.2$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.2$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:7/35",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 7/35 lies at 0.2, between 0 and 1."
                  }
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
      "id": "t32-p1",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be whole numbers $\\geq2$. If $d=\\gcd(a,b)$, then $\\gcd(a/d,b/d)=1$.",
      "idea": "Write $d$ as an integral linear combination of $a$ and $b$, then divide through by $d$. Every common divisor of the two quotients then divides 1.",
      "lines": [
        {
          "line": "Write $a=da'$ and $b=db'$ for whole numbers $a',b'$.",
          "reason": "the definition of gcd as a common divisor"
        },
        {
          "line": "Write $d=pa+qb$ for integers $p,q$.",
          "reason": "the Euclidean algorithm, which writes the gcd as an integral linear combination of $a$ and $b$"
        },
        {
          "line": "$d=pda'+qdb'$.",
          "reason": "substituting $a=da'$ and $b=db'$"
        },
        {
          "line": "$1=pa'+qb'$.",
          "reason": "dividing both sides by $d$, which is nonzero"
        },
        {
          "line": "Let $c$ be a common positive divisor of $a'$ and $b'$. Then $c$ divides $pa'$ and $qb'$, so $c$ divides $pa'+qb'=1$.",
          "reason": "the divisibility of a sum"
        },
        {
          "line": "$c=1$, since $c$ is a whole number dividing 1.",
          "reason": "the only whole number divisor of 1 is 1"
        },
        {
          "line": "$\\gcd(a',b')=1$.",
          "reason": "the only common divisor is 1"
        }
      ]
    },
    {
      "id": "t32-p2",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be nonzero whole numbers with $d=\\gcd(a,b)$, $a=da'$, $b=db'$. Then $ab=\\gcd(a,b) \\times \\mathrm{lcm}(a,b)$.",
      "idea": "Show that $da'b'$ is a common multiple of $a$ and $b$ and divides every other. It is then the lcm.",
      "lines": [
        {
          "line": "If $a=1$ or $b=1$, the identity holds directly, since $\\gcd(1,b)=1$ and $\\mathrm{lcm}(1,b)=b$. Assume from now on that $a,b\\geq2$.",
          "reason": "the case where $a$ or $b$ is 1, checked separately"
        },
        {
          "line": "$da'b'=a'b=ab'$, a common multiple of $a$ and $b$, since $a=da'$ and $b=db'$.",
          "reason": "the definitions of $a'$ and $b'$"
        },
        {
          "line": "Let $n$ be a nonzero common multiple of $a$ and $b$: $n=aA=bB$ for whole numbers $A,B$.",
          "reason": "the definition of a common multiple"
        },
        {
          "line": "$a'A=b'B$.",
          "reason": "substituting $a=da'$ and $b=db'$ into $aA=bB$, then cancelling $d$"
        },
        {
          "line": "$\\gcd(a',b')=1$.",
          "reason": "the rule that dividing two numbers by their gcd makes them relatively prime"
        },
        {
          "line": "The number $b'$ divides $A$, since $b'$ divides $b'B=a'A$ and $\\gcd(a',b')=1$.",
          "reason": "a number dividing a product and relatively prime to one factor divides the other factor"
        },
        {
          "line": "Write $A=b'k$ for a whole number $k$, so $n=aA=ab'k=da'b'k$.",
          "reason": "substitution"
        },
        {
          "line": "The number $da'b'$ divides every nonzero common multiple $n$ of $a$ and $b$, so $da'b'=\\mathrm{lcm}(a,b)$.",
          "reason": "a common multiple dividing every other nonzero common multiple is the least one"
        },
        {
          "line": "$ab=(da')(db')=d^2a'b'=d \\times(da'b')=\\gcd(a,b) \\times \\mathrm{lcm}(a,b)$.",
          "reason": "substituting $a=da'$, $b=db'$, and $da'b'=\\mathrm{lcm}(a,b)$"
        }
      ]
    },
    {
      "id": "t32-p3",
      "method": "direct proof",
      "statement": "Every fraction $m/n$ equals a fraction in lowest terms, obtained by dividing $m$ and $n$ by their gcd. That fraction is unique. If $m/n=a/b=A/B$ with $a/b$ and $A/B$ both in lowest terms, then $a=A$ and $b=B$.",
      "idea": "Existence follows from dividing by the gcd. Uniqueness follows because each numerator divides the other when both fractions are in lowest terms.",
      "lines": [
        {
          "line": "Let $d=\\gcd(m,n)$, $m=da$, $n=db$ for whole numbers $a,b$.",
          "reason": "the definition of gcd"
        },
        {
          "line": "$m/n=da/db=a/b$.",
          "reason": "the cancellation law for fractions"
        },
        {
          "line": "The fraction $a/b$ is in lowest terms.",
          "reason": "the rule that dividing two numbers by their gcd makes them relatively prime"
        },
        {
          "line": "Suppose that $A/B$ is also in lowest terms and equal to $m/n$, and so equal to $a/b$.",
          "reason": "hypothesis"
        },
        {
          "line": "$aB=Ab$.",
          "reason": "cross-multiplication"
        },
        {
          "line": "The number $a$ divides $A$, since $a$ divides $aB=Ab$ and $\\gcd(a,b)=1$.",
          "reason": "a number dividing a product and relatively prime to one factor divides the other factor"
        },
        {
          "line": "The number $A$ divides $a$, since $A$ divides $Ab=aB$ and $\\gcd(A,B)=1$.",
          "reason": "a number dividing a product and relatively prime to one factor divides the other factor"
        },
        {
          "line": "$a=A$, since $a$ divides $A$ and $A$ divides $a$, both positive whole numbers.",
          "reason": "mutual divisibility of positive whole numbers forces equality"
        },
        {
          "line": "$B=b$, since $aB=Ab=ab$.",
          "reason": "cancellation, since $a$ is nonzero"
        }
      ]
    },
    {
      "id": "t32-p4",
      "method": "proof by cases",
      "statement": "A fraction $a/b$ in lowest terms equals a finite decimal exactly when $b=2^m5^n$ for whole numbers $m$ and $n$.",
      "idea": "Cross-multiplying shows that the denominator of a finite decimal divides a power of 10. Multiplying a $2^m5^n$ denominator up to that power of 10 gives the converse.",
      "lines": [
        {
          "line": "Suppose that $a/b$ has a finite decimal expansion: $a/b=N/10^k$ for a whole number $N$ and a whole number $k$.",
          "reason": "the definition of a finite decimal"
        },
        {
          "line": "$10^ka=Nb$.",
          "reason": "cross-multiplication"
        },
        {
          "line": "The number $b$ divides $10^ka$.",
          "reason": "the definition of divisibility, applied to $10^ka=Nb$"
        },
        {
          "line": "The number $b$ divides $10^k$, since $\\gcd(a,b)=1$.",
          "reason": "a number dividing a product and relatively prime to one factor divides the other factor"
        },
        {
          "line": "$10^k=2^k5^k$, so $b$ is a product of primes drawn from $\\{2,5\\}$, that is, $b=2^m5^n$ for whole numbers $m,n\\leq k$.",
          "reason": "a number divides $10^k$ exactly when it is a product of primes drawn from the prime decomposition of $10^k$"
        },
        {
          "line": "Conversely, suppose that $b=2^m5^n$ for whole numbers $m,n$.",
          "reason": "the converse direction"
        },
        {
          "line": "Take first the case $m\\leq n$: $2^{n-m}b=2^n5^n=10^n$.",
          "reason": "matching the lesser exponent up to the greater"
        },
        {
          "line": "$a/b=(2^{n-m}a)/(2^{n-m}b)=(2^{n-m}a)/10^n$, a finite decimal with at most $n$ decimal digits.",
          "reason": "multiplying numerator and denominator by the same amount"
        },
        {
          "line": "The case $m>n$ is symmetric: multiply by $5^{m-n}$ instead of $2^{n-m}$ to reach $10^m$. So $a/b$ equals a finite decimal exactly when $b=2^m5^n$.",
          "reason": "the roles of 2 and 5 in $b=2^m5^n$ are interchangeable, and the two directions together"
        }
      ]
    },
    {
      "id": "t32-p5",
      "method": "proof by contradiction",
      "statement": "The number $\\sqrt2$ is irrational.",
      "idea": "Reduce the fraction until numerator and denominator are not both even, then show that both are even.",
      "lines": [
        {
          "line": "Suppose, for contradiction, that $\\sqrt2=a/b$ for whole numbers $a,b$.",
          "reason": "proof by contradiction"
        },
        {
          "line": "Reduce $a/b$ by repeatedly dividing numerator and denominator by 2, until at least one of $a,b$ is odd.",
          "reason": "the cancellation law"
        },
        {
          "line": "$2=a^2/b^2$, so $2b^2=a^2$.",
          "reason": "squaring $\\sqrt2=a/b$"
        },
        {
          "line": "The number $a^2$ is even, since $a^2=2b^2$.",
          "reason": "the definition of even"
        },
        {
          "line": "The number $a$ is even, because an odd $a$ gives an odd $a^2$, and $a^2$ is even. So $b$ is odd, because the reduction above leaves at least one of $a$ and $b$ odd.",
          "reason": "the fact that a product of two odd numbers is odd, and the reduction step"
        },
        {
          "line": "Write $a=2c$ for a whole number $c$, so $2b^2=a^2=4c^2$.",
          "reason": "substitution"
        },
        {
          "line": "$b^2=2c^2$.",
          "reason": "dividing both sides by 2"
        },
        {
          "line": "The number $b^2$ is even, so $b$ is even, because an odd $b$ gives an odd $b^2$.",
          "reason": "the fact that a product of two odd numbers is odd"
        },
        {
          "line": "The number $b$ is both odd and even, a contradiction.",
          "reason": "contradiction"
        },
        {
          "line": "So $\\sqrt2$ is irrational.",
          "reason": "the assumption that $\\sqrt2$ is a fraction is impossible"
        }
      ]
    },
    {
      "id": "t32-p6",
      "method": "proof by contradiction",
      "statement": "If a whole number $N$ is not a perfect square, $\\sqrt N$ is irrational.",
      "idea": "A prime with an odd exponent in $N$ would appear an odd number of times in a perfect square. That is impossible.",
      "lines": [
        {
          "line": "The number $N$ is not a perfect square. So some prime $q$ appears an odd number of times in $N$'s decomposition.",
          "reason": "the perfect square rule, negated"
        },
        {
          "line": "Suppose, for contradiction, that $\\sqrt N=a/b$ for whole numbers $a,b$. Then $a^2=Nb^2$.",
          "reason": "proof by contradiction, squaring $\\sqrt N=a/b$"
        },
        {
          "line": "The prime $q$ appears an odd number of times in the prime decomposition of $Nb^2$. This holds because it appears an odd number of times in $N$ and an even number of times in $b^2$.",
          "reason": "the perfect square rule, applied to $b^2$"
        },
        {
          "line": "This is also the prime decomposition of $a^2$, so $q$ appears an odd number of times in it.",
          "reason": "uniqueness of prime decomposition, since $a^2=Nb^2$"
        },
        {
          "line": "This contradicts the perfect square rule, because every prime in $a^2$ must appear an even number of times.",
          "reason": "the perfect square rule"
        },
        {
          "line": "So $\\sqrt N$ cannot be a fraction, and it is irrational.",
          "reason": "the assumption leads to a contradiction"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t32-s1",
      "method": "direct proof",
      "statement": "Let $d$ and $n$ be nonzero whole numbers. Then $d$ divides $n$ exactly when no prime has a greater exponent in $d$ than in $n$.",
      "check": {
        "proof": [
          {
            "line": "Write $d=p_1^{f_1}p_2^{f_2}\\cdots p_k^{f_k}$ and $n=p_1^{e_1}p_2^{e_2}\\cdots p_k^{e_k}$, where $p_1,\\dots,p_k$ are the primes in either decomposition. A prime absent from one decomposition has exponent $0$ there. The number $1$ is the product of no primes, with every exponent $0$.",
            "reason": "the fundamental theorem of arithmetic, with exponent $0$ for an absent prime"
          },
          {
            "line": "Suppose first that $f_i\\leq e_i$ for each $i$.",
            "reason": "the first direction"
          },
          {
            "line": "Then each $e_i-f_i$ is a whole number, so $c=p_1^{e_1-f_1}p_2^{e_2-f_2}\\cdots p_k^{e_k-f_k}$ is a whole number.",
            "reason": "the difference of whole numbers $e_i\\geq f_i$ is a whole number"
          },
          {
            "line": "So $dc=p_1^{f_1+(e_1-f_1)}\\cdots p_k^{f_k+(e_k-f_k)}=p_1^{e_1}\\cdots p_k^{e_k}=n$, and $d$ divides $n$.",
            "reason": "the rule $p^xp^y=p^{x+y}$ for powers, and the definition of divisibility"
          },
          {
            "line": "Conversely, suppose that $d$ divides $n$, so $n=dc$ for a whole number $c$. Here $c$ is nonzero since $n$ is nonzero.",
            "reason": "the definition of divisibility"
          },
          {
            "line": "Putting the prime decompositions of $d$ and $c$ side by side gives a product of primes equal to $dc=n$.",
            "reason": "a product of two products of primes is a product of primes"
          },
          {
            "line": "By the uniqueness of prime decomposition, this is the decomposition of $n$. So each $p_i$ appears in $n$ at least as many times as in $d$, that is, $f_i\\leq e_i$.",
            "reason": "the fundamental theorem of arithmetic"
          },
          {
            "line": "So every prime's exponent in $d$ is at most its exponent in $n$ exactly when $d$ divides $n$.",
            "reason": "the two directions together"
          }
        ]
      }
    },
    {
      "id": "t32-s2",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be nonzero whole numbers. Then every prime's exponent in $\\gcd(a,b)$ is the lesser of its exponents in $a$ and in $b$.",
      "check": {
        "proof": [
          {
            "line": "Write $a=p_1^{a_1}\\cdots p_k^{a_k}$ and $b=p_1^{b_1}\\cdots p_k^{b_k}$, where $p_1,\\dots,p_k$ are the primes in either decomposition. A prime absent from one decomposition has exponent $0$ there. The number $1$ is the product of no primes, with every exponent $0$.",
            "reason": "the fundamental theorem of arithmetic, with exponent $0$ for an absent prime"
          },
          {
            "line": "Let $m_i$ be the lesser of $a_i$ and $b_i$, and let $g=p_1^{m_1}\\cdots p_k^{m_k}$.",
            "reason": "naming the lesser exponent of each prime and the number built from them"
          },
          {
            "line": "Each $m_i$ is at most $a_i$ and at most $b_i$, so $g$ divides $a$ and $g$ divides $b$.",
            "reason": "a divisor is a number whose exponents are at most those of the multiple"
          },
          {
            "line": "Take a common divisor $e$ of $a$ and $b$. Each prime's exponent in $e$ is at most its exponent in $a$ and at most its exponent in $b$. So it is at most the lesser of the two.",
            "reason": "a divisor is a number whose exponents are at most those of the multiple"
          },
          {
            "line": "So every prime's exponent in $e$ is at most its exponent in $g$, so $e$ divides $g$. That is, $g=ec$ for a whole number $c$, and $c\\geq1$ since $g\\neq0$, so $e\\leq ec=g$.",
            "reason": "the same rule, the definition of divisibility, and multiplying $1\\leq c$ by the positive number $e$"
          },
          {
            "line": "So $g$ is the greatest common divisor of $a$ and $b$, that is, $\\gcd(a,b)=p_1^{m_1}\\cdots p_k^{m_k}$.",
            "reason": "the definition of the greatest common divisor"
          },
          {
            "line": "By the uniqueness of prime decomposition, each prime's exponent in $\\gcd(a,b)$ is $m_i$. This is the lesser of its exponents in $a$ and $b$. A prime outside $p_1,\\dots,p_k$ has exponent $0$ in all three.",
            "reason": "the fundamental theorem of arithmetic"
          }
        ]
      }
    },
    {
      "id": "t32-s3",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be nonzero whole numbers. Then every prime's exponent in $\\mathrm{lcm}(a,b)$ is the greater of its exponents in $a$ and in $b$.",
      "check": {
        "proof": [
          {
            "line": "Write $a=p_1^{a_1}\\cdots p_k^{a_k}$, $b=p_1^{b_1}\\cdots p_k^{b_k}$ and $\\mathrm{lcm}(a,b)=p_1^{l_1}\\cdots p_k^{l_k}$, where $p_1,\\dots,p_k$ are the primes in the three decompositions. An absent prime has exponent $0$. The number $1$ is the product of no primes, with every exponent $0$.",
            "reason": "the fundamental theorem of arithmetic, with exponent $0$ for an absent prime"
          },
          {
            "line": "The product $ab$ equals $\\gcd(a,b) \\times \\mathrm{lcm}(a,b)$.",
            "reason": "the product of two nonzero whole numbers equals the product of their gcd and lcm"
          },
          {
            "line": "Putting two decompositions side by side gives the decomposition of the product. So a prime's exponent in a product is the sum of its exponents in the two factors.",
            "reason": "the uniqueness of prime decomposition"
          },
          {
            "line": "So the exponent of $p_i$ in $ab$ is $a_i+b_i$.",
            "reason": "the sum rule for exponents stated above"
          },
          {
            "line": "The exponent of $p_i$ in $\\gcd(a,b)$ is the lesser of $a_i$ and $b_i$. So its exponent in $\\gcd(a,b) \\times \\mathrm{lcm}(a,b)$ is that lesser one plus $l_i$.",
            "reason": "the exponents of the gcd and the sum rule for exponents"
          },
          {
            "line": "The two products are equal, so $a_i+b_i$ equals the lesser of $a_i$ and $b_i$ plus $l_i$.",
            "reason": "the uniqueness of prime decomposition"
          },
          {
            "line": "The sum $a_i+b_i$ also equals the lesser of $a_i$ and $b_i$ plus the greater one. So $l_i$ is the greater of $a_i$ and $b_i$.",
            "reason": "cancelling the same number from both sides of an equation"
          },
          {
            "line": "So every prime's exponent in $\\mathrm{lcm}(a,b)$ is the greater of its exponents in $a$ and $b$.",
            "reason": "the result holds for each $p_i$, and every other prime has exponent $0$ in all three"
          }
        ]
      }
    },
    {
      "id": "t32-s4",
      "method": "proof by cases",
      "statement": "A whole number is a perfect square exactly when every prime in its decomposition appears an even number of times.",
      "check": {
        "proof": [
          {
            "line": "Take a whole number $n$. In the case $n=0$ or $n=1$, the number $n$ is a perfect square, since $0=0^2$ and $1=1^2$. No prime appears in its decomposition, so both sides hold.",
            "reason": "the definition of a perfect square"
          },
          {
            "line": "In the remaining case $n\\geq2$, suppose first that $n$ is a perfect square, $n=m^2$ for a whole number $m$. Then $m\\geq2$, since $0^2=0$ and $1^2=1$.",
            "reason": "the definition of a perfect square"
          },
          {
            "line": "Write $m=p_1^{c_1}\\cdots p_k^{c_k}$. Then $n=m \\times m=p_1^{2c_1}\\cdots p_k^{2c_k}$.",
            "reason": "the fundamental theorem of arithmetic, and the rule $p^xp^y=p^{x+y}$ for powers"
          },
          {
            "line": "By the uniqueness of prime decomposition, each prime $p_i$ appears $2c_i$ times in $n$'s decomposition, an even number.",
            "reason": "the fundamental theorem of arithmetic"
          },
          {
            "line": "Conversely, suppose that every prime in $n$'s decomposition appears an even number of times, so $n=p_1^{2c_1}\\cdots p_k^{2c_k}$ for whole numbers $c_i$.",
            "reason": "the definition of even"
          },
          {
            "line": "Let $m=p_1^{c_1}\\cdots p_k^{c_k}$. Then $m^2=p_1^{2c_1}\\cdots p_k^{2c_k}=n$.",
            "reason": "the rule $p^xp^y=p^{x+y}$ for powers, with the factors rearranged"
          },
          {
            "line": "So $n$ is a perfect square exactly when every prime in its decomposition appears an even number of times.",
            "reason": "the cases $n\\leq1$ and $n\\geq2$ cover every whole number"
          }
        ]
      }
    },
    {
      "id": "t32-s5",
      "method": "proof by contradiction",
      "statement": "For every whole number $n$, there exists a prime $p$ so that $n\\leq p$.",
      "check": {
        "proof": [
          {
            "line": "If $n=0$, the prime $2$ satisfies $0\\leq2$. Suppose from now on that $n\\geq1$.",
            "reason": "the case $n=0$, checked directly"
          },
          {
            "line": "The number $N=n!+1$ is at least $2$, so $N$ is a prime or a composite. In both cases $N$ has a prime divisor $p$.",
            "reason": "a prime is its own prime divisor, and a composite has a prime divisor"
          },
          {
            "line": "Suppose, for contradiction, that $p<n$.",
            "reason": "proof by contradiction"
          },
          {
            "line": "Then $p$ is one of the factors $1,2,\\dots,n$ of $n!$, so $p$ divides $n!$.",
            "reason": "the definition of the factorial and of divisibility"
          },
          {
            "line": "The prime $p$ divides $n!+1$ and $n!$, so $p$ divides their difference $1$.",
            "reason": "a number that divides two of $A$, $B$, $C$ with $A=B+C$ divides the third"
          },
          {
            "line": "So $1=cp$ for a whole number $c$, and $c\\geq1$ since $1\\neq0$, so $1=cp\\geq p\\geq2$, which is impossible.",
            "reason": "the definition of divisibility, multiplying $1\\leq c$ by the positive number $p$, and a prime is at least $2$"
          },
          {
            "line": "So $n\\leq p$, and $p$ is a prime with $n\\leq p$.",
            "reason": "the supposition that $p<n$ is impossible"
          }
        ]
      }
    },
    {
      "id": "t32-s6",
      "method": "direct proof",
      "statement": "Let $c$ be a whole number, and let $a$ and $b$ be nonzero whole numbers. Then $\\mathrm{lcm}(a,b)$ divides $c$ exactly when both $a$ and $b$ divide $c$.",
      "check": {
        "proof": [
          {
            "line": "Suppose first that $\\mathrm{lcm}(a,b)$ divides $c$.",
            "reason": "the first direction"
          },
          {
            "line": "The number $\\mathrm{lcm}(a,b)$ is a multiple of both $a$ and $b$, so $a$ and $b$ each divide $\\mathrm{lcm}(a,b)$.",
            "reason": "the definition of the least common multiple"
          },
          {
            "line": "So $a$ divides $c$ and $b$ divides $c$.",
            "reason": "the transitivity of divisibility"
          },
          {
            "line": "Conversely, suppose that $a$ divides $c$ and $b$ divides $c$. If $c=0$, then $\\mathrm{lcm}(a,b)$ divides $c$, since $0=0 \\times \\mathrm{lcm}(a,b)$.",
            "reason": "the definition of divisibility"
          },
          {
            "line": "If $c\\neq0$, take a prime $p$ with exponents $x$ in $a$, $y$ in $b$ and $z$ in $c$. Then $x\\leq z$ and $y\\leq z$, since $a$ and $b$ divide $c$.",
            "reason": "a divisor is a number whose exponents are at most those of the multiple"
          },
          {
            "line": "So the greater of $x$ and $y$ is at most $z$. That greater one is the exponent of $p$ in $\\mathrm{lcm}(a,b)$.",
            "reason": "the exponents of the lcm"
          },
          {
            "line": "Every prime's exponent in $\\mathrm{lcm}(a,b)$ is at most its exponent in $c$, so $\\mathrm{lcm}(a,b)$ divides $c$.",
            "reason": "a divisor is a number whose exponents are at most those of the multiple"
          },
          {
            "line": "So $\\mathrm{lcm}(a,b)$ divides $c$ exactly when both $a$ and $b$ divide $c$.",
            "reason": "the two directions together"
          }
        ]
      }
    }
  ]
}
