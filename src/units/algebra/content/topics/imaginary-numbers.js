export default {
  "number": 143,
  "title": "Imaginary numbers",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "358-362, 369-371"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $i^{1990}$.",
    "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
    "answer": "-1",
    "solution": [
      "Evaluate $i^{1990}$.",
      "$i^{1990} = (i^4)^{497} \\cdot i^{2}$",
      "$(i^4)^{497} \\cdot i^{2} = i^{2}$",
      "$i^{2} = -1$"
    ]
  },
  "ideas": [
    {
      "name": "Real number",
      "concrete": "The numbers $-3$, $\\dfrac{2}{7}$ and $\\sqrt{5}$ each have a point on the number line: two are rational and $\\sqrt{5}$ is irrational.",
      "general": "The **real numbers** are the rational numbers and the irrational numbers together: the numbers with a point on the number line. A real number times itself is at least 0."
    },
    {
      "name": "The number $i$",
      "concrete": "No real number has $-1$ as its square: a positive or a negative number has a positive square, and $0$ has the square $0$. The number $i$ is a new number with $i \\cdot i = -1$.",
      "general": "The number $i$ is a number with $i^2 = -1$. It is not a real number. Sums, products and integer powers with $i$ follow the laws of arithmetic and of integer exponents, with $i^2$ written as $-1$ wherever it appears."
    },
    {
      "name": "Imaginary number",
      "concrete": "The number $\\dfrac{3}{4}i$ has the square $\\dfrac{9}{16}i^2 = -\\dfrac{9}{16}$, a real number that is not positive, so $\\dfrac{3}{4}i$ is an imaginary number. The number $-\\dfrac{3}{4}$ has the square $\\dfrac{9}{16}$, so it is not.",
      "general": "An **imaginary number** is a number whose square is a real number that is not positive. For every real number $a$, the number $ai$ is imaginary, since $(ai)^2 = -a^2$. The number 0 is both real and imaginary."
    },
    {
      "name": "Square root of a negative number",
      "concrete": "Both $32i$ and $-32i$ have the square $-1024$. The square root $\\sqrt{-1024}$ names the first: $\\sqrt{-1024} = i\\sqrt{1024} = 32i$.",
      "general": "For a positive number $n$, $\\sqrt{-n} = i\\sqrt{n}$. Then $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$. For $n = 0$, $x^2 = 0$ has the one solution $x = 0$. The root of a product holds for numbers at least 0 only: $\\sqrt{-9} \\cdot \\sqrt{-25} = 3i \\cdot 5i = -15$, not $\\sqrt{225}$."
    },
    {
      "name": "Powers of $i$ repeat every four",
      "concrete": "The powers $i^1$, $i^2$, $i^3$, $i^4$ are $i$, $-1$, $-i$, $1$, and the next four, $i^5$ to $i^8$, are $i$, $-1$, $-i$, $1$ again, since $i^4 = 1$.",
      "general": "For every whole number $k$ and each of $r = 0$, $1$, $2$ and $3$, $i^{4k + r} = i^r$. So a power of $i$ depends only on the remainder of its exponent on division by 4: the remainder 0 gives $1$, 1 gives $i$, 2 gives $-1$ and 3 gives $-i$."
    }
  ],
  "kinds": [
    {
      "id": "t143-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $i^{3013}$.",
            "lines": [
              {
                "step": "Evaluate $i^{3013}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$i^{3013} = (i^4)^{753} \\cdot i^{1}$",
                "reason": "Product law and power law: $3013 = 4 \\cdot 753 + 1$, so $i^{3013} = i^{3012} \\cdot i^{1}$ and $i^{3012} = (i^4)^{753}$."
              },
              {
                "step": "$(i^4)^{753} \\cdot i^{1} = i^{1}$",
                "reason": "Powers of $i$ repeat every four: $i^4 = 1$, and $1^{753} = 1$."
              },
              {
                "step": "$i^{1} = i$",
                "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $i^{2142}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-1",
              "lines": [
                {
                  "step": "Evaluate $i^{2142}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{2142} = (i^4)^{535} \\cdot i^{2}$",
                  "reason": "Product law and power law: $2142 = 4 \\cdot 535 + 2$, so $i^{2142} = i^{2140} \\cdot i^{2}$ and $i^{2140} = (i^4)^{535}$."
                },
                {
                  "step": "$(i^4)^{535} \\cdot i^{2} = i^{2}$",
                  "reason": "Powers of $i$ repeat every four: $i^4 = 1$, and $1^{535} = 1$."
                },
                {
                  "step": "$i^{2} = -1$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                }
              ]
            },
            {
              "prompt": "Evaluate $i^{875}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-i",
              "lines": [
                {
                  "step": "Evaluate $i^{875}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{875} = (i^4)^{218} \\cdot i^{3}$",
                  "reason": "Product law and power law: $875 = 4 \\cdot 218 + 3$, so $i^{875} = i^{872} \\cdot i^{3}$ and $i^{872} = (i^4)^{218}$."
                },
                {
                  "step": "$(i^4)^{218} \\cdot i^{3} = i^{3}$",
                  "reason": "Powers of $i$ repeat every four: $i^4 = 1$, and $1^{218} = 1$."
                },
                {
                  "step": "$i^{3} = -i$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                }
              ]
            },
            {
              "prompt": "Evaluate $i^{1260}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "1",
              "lines": [
                {
                  "step": "Evaluate $i^{1260}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{1260} = (i^4)^{315} \\cdot i^{0}$",
                  "reason": "Product law and power law: $1260 = 4 \\cdot 315 + 0$, so $i^{1260} = i^{1260} \\cdot i^{0}$ and $i^{1260} = (i^4)^{315}$."
                },
                {
                  "step": "$(i^4)^{315} \\cdot i^{0} = i^{0}$",
                  "reason": "Powers of $i$ repeat every four: $i^4 = 1$, and $1^{315} = 1$."
                },
                {
                  "step": "$i^{0} = 1$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $i^{-53}$.",
            "lines": [
              {
                "step": "Evaluate $i^{-53}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$i^{-53} = i^{-53} \\cdot (i^4)^{14}$",
                "reason": "Powers of $i$ repeat every four: $i^4 = 1$, so $(i^4)^{14} = 1$, and a number times 1 is that number."
              },
              {
                "step": "$i^{-53} \\cdot (i^4)^{14} = i^{3}$",
                "reason": "Power law and product law: $(i^4)^{14} = i^{56}$, and $-53 + 56 = 3$."
              },
              {
                "step": "$i^{3} = -i$",
                "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $i^{-230}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-1",
              "lines": [
                {
                  "step": "Evaluate $i^{-230}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{-230} = i^{-230} \\cdot (i^4)^{58}$",
                  "reason": "Powers of $i$ repeat every four: $i^4 = 1$, so $(i^4)^{58} = 1$, and a number times 1 is that number."
                },
                {
                  "step": "$i^{-230} \\cdot (i^4)^{58} = i^{2}$",
                  "reason": "Power law and product law: $(i^4)^{58} = i^{232}$, and $-230 + 232 = 2$."
                },
                {
                  "step": "$i^{2} = -1$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                }
              ]
            },
            {
              "prompt": "Evaluate $i^{-411}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "i",
              "lines": [
                {
                  "step": "Evaluate $i^{-411}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{-411} = i^{-411} \\cdot (i^4)^{103}$",
                  "reason": "Powers of $i$ repeat every four: $i^4 = 1$, so $(i^4)^{103} = 1$, and a number times 1 is that number."
                },
                {
                  "step": "$i^{-411} \\cdot (i^4)^{103} = i^{1}$",
                  "reason": "Power law and product law: $(i^4)^{103} = i^{412}$, and $-411 + 412 = 1$."
                },
                {
                  "step": "$i^{1} = i$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                }
              ]
            },
            {
              "prompt": "Evaluate $i^{-908}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "1",
              "lines": [
                {
                  "step": "Evaluate $i^{-908}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{-908} = i^{-908} \\cdot (i^4)^{227}$",
                  "reason": "Powers of $i$ repeat every four: $i^4 = 1$, so $(i^4)^{227} = 1$, and a number times 1 is that number."
                },
                {
                  "step": "$i^{-908} \\cdot (i^4)^{227} = i^{0}$",
                  "reason": "Power law and product law: $(i^4)^{227} = i^{908}$, and $-908 + 908 = 0$."
                },
                {
                  "step": "$i^{0} = 1$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $i + i^2 + i^3 + \\cdots + i^{70}$.",
            "lines": [
              {
                "step": "Evaluate $i + i^2 + i^3 + \\cdots + i^{70}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum is $17$ runs of four terms, from $i$ to $i^{68}$, and then $i^{69} + i^{70}$.",
                "reason": "The associative law of addition, from arithmetic: $70 = 4 \\cdot 17 + 2$, so the first $68$ terms make $17$ runs of four and $2$ terms are left."
              },
              {
                "step": "Each run $i^{k} + i^{k + 1} + i^{k + 2} + i^{k + 3}$ is $i^{k}(1 + i - 1 - i) = 0$.",
                "reason": "Product law and the distributive law, from arithmetic: $i^{k}$ is taken out of each term, and the number $i$ gives $i^2 = -1$ and $i^3 = i^2 \\cdot i = -i$."
              },
              {
                "step": "The sum equals $i^{69} + i^{70} = i + (-1)$.",
                "reason": "Powers of $i$ repeat every four: each exponent left is $68$ plus 1, 2 or 3, so its power equals $i$, $-1$ or $-i$."
              },
              {
                "step": "$i + (-1) = -1 + i$",
                "reason": "Collecting like terms: the numbers are added, and the multiples of $i$ are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $i + i^2 + i^3 + \\cdots + i^{127}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-1",
              "lines": [
                {
                  "step": "Evaluate $i + i^2 + i^3 + \\cdots + i^{127}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $31$ runs of four terms, from $i$ to $i^{124}$, and then $i^{125} + i^{126} + i^{127}$.",
                  "reason": "The associative law of addition, from arithmetic: $127 = 4 \\cdot 31 + 3$, so the first $124$ terms make $31$ runs of four and $3$ terms are left."
                },
                {
                  "step": "Each run $i^{k} + i^{k + 1} + i^{k + 2} + i^{k + 3}$ is $i^{k}(1 + i - 1 - i) = 0$.",
                  "reason": "Product law and the distributive law, from arithmetic: $i^{k}$ is taken out of each term, and the number $i$ gives $i^2 = -1$ and $i^3 = i^2 \\cdot i = -i$."
                },
                {
                  "step": "The sum equals $i^{125} + i^{126} + i^{127} = i + (-1) + (-i)$.",
                  "reason": "Powers of $i$ repeat every four: each exponent left is $124$ plus 1, 2 or 3, so its power equals $i$, $-1$ or $-i$."
                },
                {
                  "step": "$i + (-1) + (-i) = -1$",
                  "reason": "Collecting like terms: the numbers are added, and the multiples of $i$ are added."
                }
              ]
            },
            {
              "prompt": "Evaluate $i + i^2 + i^3 + \\cdots + i^{211}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-1",
              "lines": [
                {
                  "step": "Evaluate $i + i^2 + i^3 + \\cdots + i^{211}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $52$ runs of four terms, from $i$ to $i^{208}$, and then $i^{209} + i^{210} + i^{211}$.",
                  "reason": "The associative law of addition, from arithmetic: $211 = 4 \\cdot 52 + 3$, so the first $208$ terms make $52$ runs of four and $3$ terms are left."
                },
                {
                  "step": "Each run $i^{k} + i^{k + 1} + i^{k + 2} + i^{k + 3}$ is $i^{k}(1 + i - 1 - i) = 0$.",
                  "reason": "Product law and the distributive law, from arithmetic: $i^{k}$ is taken out of each term, and the number $i$ gives $i^2 = -1$ and $i^3 = i^2 \\cdot i = -i$."
                },
                {
                  "step": "The sum equals $i^{209} + i^{210} + i^{211} = i + (-1) + (-i)$.",
                  "reason": "Powers of $i$ repeat every four: each exponent left is $208$ plus 1, 2 or 3, so its power equals $i$, $-1$ or $-i$."
                },
                {
                  "step": "$i + (-1) + (-i) = -1$",
                  "reason": "Collecting like terms: the numbers are added, and the multiples of $i$ are added."
                }
              ]
            },
            {
              "prompt": "Evaluate $i + i^2 + i^3 + \\cdots + i^{342}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-1+i",
              "lines": [
                {
                  "step": "Evaluate $i + i^2 + i^3 + \\cdots + i^{342}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $85$ runs of four terms, from $i$ to $i^{340}$, and then $i^{341} + i^{342}$.",
                  "reason": "The associative law of addition, from arithmetic: $342 = 4 \\cdot 85 + 2$, so the first $340$ terms make $85$ runs of four and $2$ terms are left."
                },
                {
                  "step": "Each run $i^{k} + i^{k + 1} + i^{k + 2} + i^{k + 3}$ is $i^{k}(1 + i - 1 - i) = 0$.",
                  "reason": "Product law and the distributive law, from arithmetic: $i^{k}$ is taken out of each term, and the number $i$ gives $i^2 = -1$ and $i^3 = i^2 \\cdot i = -i$."
                },
                {
                  "step": "The sum equals $i^{341} + i^{342} = i + (-1)$.",
                  "reason": "Powers of $i$ repeat every four: each exponent left is $340$ plus 1, 2 or 3, so its power equals $i$, $-1$ or $-i$."
                },
                {
                  "step": "$i + (-1) = -1 + i$",
                  "reason": "Collecting like terms: the numbers are added, and the multiples of $i$ are added."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t143-k2",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $(7i)^2$.",
            "lines": [
              {
                "step": "Evaluate $(7i)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(7i)^2 = 7^2 \\cdot i^2$",
                "reason": "Power of a product: the square of a product is the product of the squares."
              },
              {
                "step": "$7^2 \\cdot i^2 = 49 \\cdot (-1)$",
                "reason": "The number $i$: $i^2 = -1$, and $7^2 = 49$."
              },
              {
                "step": "$49 \\cdot (-1) = -49$",
                "reason": "Signs of products: a positive number times a negative number is negative."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $(-29i)^2$.",
              "form": "Answer as an integer.",
              "answer": "-841",
              "lines": [
                {
                  "step": "Evaluate $(-29i)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-29i)^2 = (-29)^2 \\cdot i^2$",
                  "reason": "Power of a product: the square of a product is the product of the squares."
                },
                {
                  "step": "$(-29)^2 \\cdot i^2 = 841 \\cdot (-1)$",
                  "reason": "The number $i$: $i^2 = -1$, and $(-29)^2 = 841$."
                },
                {
                  "step": "$841 \\cdot (-1) = -841$",
                  "reason": "Signs of products: a positive number times a negative number is negative."
                }
              ]
            },
            {
              "prompt": "Evaluate $(33i)^2$.",
              "form": "Answer as an integer.",
              "answer": "-1089",
              "lines": [
                {
                  "step": "Evaluate $(33i)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(33i)^2 = 33^2 \\cdot i^2$",
                  "reason": "Power of a product: the square of a product is the product of the squares."
                },
                {
                  "step": "$33^2 \\cdot i^2 = 1089 \\cdot (-1)$",
                  "reason": "The number $i$: $i^2 = -1$, and $33^2 = 1089$."
                },
                {
                  "step": "$1089 \\cdot (-1) = -1089$",
                  "reason": "Signs of products: a positive number times a negative number is negative."
                }
              ]
            },
            {
              "prompt": "Evaluate $(-11i)^2$.",
              "form": "Answer as an integer.",
              "answer": "-121",
              "lines": [
                {
                  "step": "Evaluate $(-11i)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-11i)^2 = (-11)^2 \\cdot i^2$",
                  "reason": "Power of a product: the square of a product is the product of the squares."
                },
                {
                  "step": "$(-11)^2 \\cdot i^2 = 121 \\cdot (-1)$",
                  "reason": "The number $i$: $i^2 = -1$, and $(-11)^2 = 121$."
                },
                {
                  "step": "$121 \\cdot (-1) = -121$",
                  "reason": "Signs of products: a positive number times a negative number is negative."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $(6i)^4$.",
            "lines": [
              {
                "step": "Evaluate $(6i)^4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(6i)^4 = 6^4 \\cdot i^4$",
                "reason": "Power of a product: the power of a product is the product of the powers."
              },
              {
                "step": "$i^4 = 1$",
                "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
              },
              {
                "step": "$6^4 \\cdot i^4 = 1296 \\cdot 1$",
                "reason": "The definition of a power, from arithmetic: $6^4 = 1296$; line 3 gives $i^4 = 1$."
              },
              {
                "step": "$1296 \\cdot 1 = 1296$",
                "reason": "Signs of products: the product takes the sign the two factors give."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $(-2i)^5$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-32*i",
              "lines": [
                {
                  "step": "Evaluate $(-2i)^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-2i)^5 = (-2)^5 \\cdot i^5$",
                  "reason": "Power of a product: the power of a product is the product of the powers."
                },
                {
                  "step": "$i^5 = i$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                },
                {
                  "step": "$(-2)^5 \\cdot i^5 = -32 \\cdot i$",
                  "reason": "The definition of a power, from arithmetic: $(-2)^5 = -32$; line 3 gives $i^5 = i$."
                },
                {
                  "step": "$-32 \\cdot i = -32i$",
                  "reason": "Signs of products: the product takes the sign the two factors give."
                }
              ]
            },
            {
              "prompt": "Evaluate $(4i)^3$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-64*i",
              "lines": [
                {
                  "step": "Evaluate $(4i)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4i)^3 = 4^3 \\cdot i^3$",
                  "reason": "Power of a product: the power of a product is the product of the powers."
                },
                {
                  "step": "$i^3 = -i$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                },
                {
                  "step": "$4^3 \\cdot i^3 = 64 \\cdot (-i)$",
                  "reason": "The definition of a power, from arithmetic: $4^3 = 64$; line 3 gives $i^3 = -i$."
                },
                {
                  "step": "$64 \\cdot (-i) = -64i$",
                  "reason": "Signs of products: the product takes the sign the two factors give."
                }
              ]
            },
            {
              "prompt": "Evaluate $(-5i)^3$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "125*i",
              "lines": [
                {
                  "step": "Evaluate $(-5i)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-5i)^3 = (-5)^3 \\cdot i^3$",
                  "reason": "Power of a product: the power of a product is the product of the powers."
                },
                {
                  "step": "$i^3 = -i$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                },
                {
                  "step": "$(-5)^3 \\cdot i^3 = -125 \\cdot (-i)$",
                  "reason": "The definition of a power, from arithmetic: $(-5)^3 = -125$; line 3 gives $i^3 = -i$."
                },
                {
                  "step": "$-125 \\cdot (-i) = 125i$",
                  "reason": "Signs of products: the product takes the sign the two factors give."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\left(\\dfrac{i}{4}\\right)^2$.",
            "lines": [
              {
                "step": "Evaluate $\\left(\\dfrac{i}{4}\\right)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(\\dfrac{i}{4}\\right)^2 = \\dfrac{i^2}{4^2}$",
                "reason": "Power of a quotient: the power goes to the top and to the bottom."
              },
              {
                "step": "$i^2 = -1$",
                "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
              },
              {
                "step": "$\\dfrac{i^2}{4^2} = -\\dfrac{1}{16}$",
                "reason": "The definition of a power, from arithmetic: $4^2 = 16$, and the value of $i^2$ from line 3 stands on the top, its minus sign in front of the fraction."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\left(\\dfrac{i}{6}\\right)^3$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-i/216",
              "lines": [
                {
                  "step": "Evaluate $\\left(\\dfrac{i}{6}\\right)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{i}{6}\\right)^3 = \\dfrac{i^3}{6^3}$",
                  "reason": "Power of a quotient: the power goes to the top and to the bottom."
                },
                {
                  "step": "$i^3 = -i$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                },
                {
                  "step": "$\\dfrac{i^3}{6^3} = -\\dfrac{i}{216}$",
                  "reason": "The definition of a power, from arithmetic: $6^3 = 216$, and the value of $i^3$ from line 3 stands on the top, its minus sign in front of the fraction."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(\\dfrac{i}{5}\\right)^2$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-1/25",
              "lines": [
                {
                  "step": "Evaluate $\\left(\\dfrac{i}{5}\\right)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{i}{5}\\right)^2 = \\dfrac{i^2}{5^2}$",
                  "reason": "Power of a quotient: the power goes to the top and to the bottom."
                },
                {
                  "step": "$i^2 = -1$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                },
                {
                  "step": "$\\dfrac{i^2}{5^2} = -\\dfrac{1}{25}$",
                  "reason": "The definition of a power, from arithmetic: $5^2 = 25$, and the value of $i^2$ from line 3 stands on the top, its minus sign in front of the fraction."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(\\dfrac{i}{8}\\right)^3$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-i/512",
              "lines": [
                {
                  "step": "Evaluate $\\left(\\dfrac{i}{8}\\right)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{i}{8}\\right)^3 = \\dfrac{i^3}{8^3}$",
                  "reason": "Power of a quotient: the power goes to the top and to the bottom."
                },
                {
                  "step": "$i^3 = -i$",
                  "reason": "Powers of $i$ repeat every four: $i^0 = 1$, $i^1 = i$, $i^2 = -1$ and $i^3 = -i$, and every power of $i$ takes one of these four values."
                },
                {
                  "step": "$\\dfrac{i^3}{8^3} = -\\dfrac{i}{512}$",
                  "reason": "The definition of a power, from arithmetic: $8^3 = 512$, and the value of $i^3$ from line 3 stands on the top, its minus sign in front of the fraction."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t143-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $x^2 = -400$.",
            "lines": [
              {
                "step": "Solve $x^2 = -400$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{-400} = i\\sqrt{400} = 20i$",
                "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the positive square root of $400$ is $20$."
              },
              {
                "step": "So $x = 20i$ or $x = -20i$.",
                "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $(20i)^2 = 400i^2 = -400$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^2 = -361$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 19*i, x = -19*i",
              "lines": [
                {
                  "step": "Solve $x^2 = -361$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{-361} = i\\sqrt{361} = 19i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the positive square root of $361$ is $19$."
                },
                {
                  "step": "So $x = 19i$ or $x = -19i$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $(19i)^2 = 361i^2 = -361$."
                }
              ]
            },
            {
              "prompt": "Solve $y^2 = -441$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 21*i, y = -21*i",
              "lines": [
                {
                  "step": "Solve $y^2 = -441$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{-441} = i\\sqrt{441} = 21i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the positive square root of $441$ is $21$."
                },
                {
                  "step": "So $y = 21i$ or $y = -21i$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $(21i)^2 = 441i^2 = -441$."
                }
              ]
            },
            {
              "prompt": "Solve $z^2 = -484$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 22*i, z = -22*i",
              "lines": [
                {
                  "step": "Solve $z^2 = -484$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{-484} = i\\sqrt{484} = 22i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the positive square root of $484$ is $22$."
                },
                {
                  "step": "So $z = 22i$ or $z = -22i$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $(22i)^2 = 484i^2 = -484$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x^2 = -12$.",
            "lines": [
              {
                "step": "Solve $x^2 = -12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{-12} = i\\sqrt{12}$",
                "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              },
              {
                "step": "$i\\sqrt{12} = 2i\\sqrt{3}$",
                "reason": "Simplest radical form: $12 = 4 \\cdot 3$, and the root of a product takes $\\sqrt{4} = 2$ out of the root."
              },
              {
                "step": "So $x = 2i\\sqrt{3}$ or $x = -2i\\sqrt{3}$.",
                "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $\\left(2i\\sqrt{3}\\right)^2 = 4 \\cdot i^2 \\cdot 3 = -12$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^2 = -50$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 5*i*sqrt(2), x = -5*i*sqrt(2)",
              "lines": [
                {
                  "step": "Solve $x^2 = -50$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{-50} = i\\sqrt{50}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "$i\\sqrt{50} = 5i\\sqrt{2}$",
                  "reason": "Simplest radical form: $50 = 25 \\cdot 2$, and the root of a product takes $\\sqrt{25} = 5$ out of the root."
                },
                {
                  "step": "So $x = 5i\\sqrt{2}$ or $x = -5i\\sqrt{2}$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $\\left(5i\\sqrt{2}\\right)^2 = 25 \\cdot i^2 \\cdot 2 = -50$."
                }
              ]
            },
            {
              "prompt": "Solve $y^2 = -28$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 2*i*sqrt(7), y = -2*i*sqrt(7)",
              "lines": [
                {
                  "step": "Solve $y^2 = -28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{-28} = i\\sqrt{28}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "$i\\sqrt{28} = 2i\\sqrt{7}$",
                  "reason": "Simplest radical form: $28 = 4 \\cdot 7$, and the root of a product takes $\\sqrt{4} = 2$ out of the root."
                },
                {
                  "step": "So $y = 2i\\sqrt{7}$ or $y = -2i\\sqrt{7}$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $\\left(2i\\sqrt{7}\\right)^2 = 4 \\cdot i^2 \\cdot 7 = -28$."
                }
              ]
            },
            {
              "prompt": "Solve $z^2 = -45$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 3*i*sqrt(5), z = -3*i*sqrt(5)",
              "lines": [
                {
                  "step": "Solve $z^2 = -45$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{-45} = i\\sqrt{45}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "$i\\sqrt{45} = 3i\\sqrt{5}$",
                  "reason": "Simplest radical form: $45 = 9 \\cdot 5$, and the root of a product takes $\\sqrt{9} = 3$ out of the root."
                },
                {
                  "step": "So $z = 3i\\sqrt{5}$ or $z = -3i\\sqrt{5}$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $\\left(3i\\sqrt{5}\\right)^2 = 9 \\cdot i^2 \\cdot 5 = -45$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $5x^2 + 320 = 0$.",
            "lines": [
              {
                "step": "Solve $5x^2 + 320 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x^2 = -320$",
                "reason": "Adding the same number to both sides: $-320$ is added to each side."
              },
              {
                "step": "$x^2 = -64$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$\\sqrt{-64} = i\\sqrt{64} = 8i$",
                "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the positive square root of $64$ is $8$."
              },
              {
                "step": "So $x = 8i$ or $x = -8i$.",
                "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $(8i)^2 = 64i^2 = -64$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2x^2 + 288 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 12*i, x = -12*i",
              "lines": [
                {
                  "step": "Solve $2x^2 + 288 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 = -288$",
                  "reason": "Adding the same number to both sides: $-288$ is added to each side."
                },
                {
                  "step": "$x^2 = -144$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\sqrt{-144} = i\\sqrt{144} = 12i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the positive square root of $144$ is $12$."
                },
                {
                  "step": "So $x = 12i$ or $x = -12i$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $(12i)^2 = 144i^2 = -144$."
                }
              ]
            },
            {
              "prompt": "Solve $3y^2 + 588 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 14*i, y = -14*i",
              "lines": [
                {
                  "step": "Solve $3y^2 + 588 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3y^2 = -588$",
                  "reason": "Adding the same number to both sides: $-588$ is added to each side."
                },
                {
                  "step": "$y^2 = -196$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$\\sqrt{-196} = i\\sqrt{196} = 14i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the positive square root of $196$ is $14$."
                },
                {
                  "step": "So $y = 14i$ or $y = -14i$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $(14i)^2 = 196i^2 = -196$."
                }
              ]
            },
            {
              "prompt": "Solve $7z^2 + 1792 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 16*i, z = -16*i",
              "lines": [
                {
                  "step": "Solve $7z^2 + 1792 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7z^2 = -1792$",
                  "reason": "Adding the same number to both sides: $-1792$ is added to each side."
                },
                {
                  "step": "$z^2 = -256$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$\\sqrt{-256} = i\\sqrt{256} = 16i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and the positive square root of $256$ is $16$."
                },
                {
                  "step": "So $z = 16i$ or $z = -16i$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$; $(16i)^2 = 256i^2 = -256$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t143-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $19i^{13}$ is an imaginary number.",
            "lines": [
              {
                "step": "Decide whether $19i^{13}$ is an imaginary number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$i^{13} = i$",
                "reason": "Powers of $i$ repeat every four: $13 = 4 \\cdot 3 + 1$, so $i^{13} = i^{1}$, which is $i$."
              },
              {
                "step": "$19i^{13} = 19i$",
                "reason": "Substituting a value: $i^{13}$ is replaced by its value $i$, and signs of products gives the sign."
              },
              {
                "step": "$(19i)^2 = -361$",
                "reason": "The number $i$: $(19i)^2 = 361i^2$ by the power of a product, and $i^2 = -1$."
              },
              {
                "step": "So $19i^{13}$ is an imaginary number.",
                "reason": "Imaginary number: its square $-361$ is a real number that is not positive."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $-2i^{22}$ is an imaginary number.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $-2i^{22}$ is an imaginary number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{22} = -1$",
                  "reason": "Powers of $i$ repeat every four: $22 = 4 \\cdot 5 + 2$, so $i^{22} = i^{2}$, which is $-1$."
                },
                {
                  "step": "$-2i^{22} = 2$",
                  "reason": "Substituting a value: $i^{22}$ is replaced by its value $-1$, and signs of products gives the sign."
                },
                {
                  "step": "$2^2 = 4$",
                  "reason": "Signs of products: two factors of one sign give a positive product."
                },
                {
                  "step": "So $-2i^{22}$ is not an imaginary number.",
                  "reason": "Imaginary number: its square $4$ is positive, and an imaginary number has a square that is not positive."
                }
              ]
            },
            {
              "prompt": "Decide whether $-21i^{31}$ is an imaginary number.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $-21i^{31}$ is an imaginary number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{31} = -i$",
                  "reason": "Powers of $i$ repeat every four: $31 = 4 \\cdot 7 + 3$, so $i^{31} = i^{3}$, which is $-i$."
                },
                {
                  "step": "$-21i^{31} = 21i$",
                  "reason": "Substituting a value: $i^{31}$ is replaced by its value $-i$, and signs of products gives the sign."
                },
                {
                  "step": "$(21i)^2 = -441$",
                  "reason": "The number $i$: $(21i)^2 = 441i^2$ by the power of a product, and $i^2 = -1$."
                },
                {
                  "step": "So $-21i^{31}$ is an imaginary number.",
                  "reason": "Imaginary number: its square $-441$ is a real number that is not positive."
                }
              ]
            },
            {
              "prompt": "Decide whether $4i^{18}$ is an imaginary number.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $4i^{18}$ is an imaginary number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$i^{18} = -1$",
                  "reason": "Powers of $i$ repeat every four: $18 = 4 \\cdot 4 + 2$, so $i^{18} = i^{2}$, which is $-1$."
                },
                {
                  "step": "$4i^{18} = -4$",
                  "reason": "Substituting a value: $i^{18}$ is replaced by its value $-1$, and signs of products gives the sign."
                },
                {
                  "step": "$(-4)^2 = 16$",
                  "reason": "Signs of products: two factors of one sign give a positive product."
                },
                {
                  "step": "So $4i^{18}$ is not an imaginary number.",
                  "reason": "Imaginary number: its square $16$ is positive, and an imaginary number has a square that is not positive."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t143-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $(-2i)^3$, and write that line right.",
            "given": [
              "$(-2i)^3 = (-2)^3 \\cdot i^3$",
              "$(-2)^3 \\cdot i^3 = 8 \\cdot i^3$",
              "$i^3 = -i$",
              "$(-2i)^3 = -8i$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $(-2i)^3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Power of a product: line 1 gives the power to each factor, and each line before the wrong one follows by a rule that holds."
              },
              {
                "step": "Line 2 gives $(-2)^3$ the value $8$.",
                "reason": "A sign lost: $(-2)^3$ is a product of 3 negative factors, an odd number of them, so it is $-8$, below 0."
              },
              {
                "step": "Line 4 follows from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Line 4 multiplies the values of lines 2 and 3, and carries the lost sign with it."
              },
              {
                "step": "Line 2 written right is $(-2)^3 \\cdot i^3 = -8 \\cdot i^3$.",
                "reason": "With it the working ends on $(-2i)^3 = 8i$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $(7i)^3$, and write that line right.",
              "given": [
                "$(7i)^3 = 7^3 \\cdot i^3$",
                "$7^3 \\cdot i^3 = 343 \\cdot i^3$",
                "$i^3 = i$",
                "$(7i)^3 = 343i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: i^3 = -i",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(7i)^3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Power of a product: line 1 gives the power to each factor, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 gives $i^3$ the value $i$.",
                  "reason": "A sign lost: powers of $i$ repeat every four, and $3 = 4 \\cdot 0 + 3$ gives $i^3 = i^3 = -i$."
                },
                {
                  "step": "Line 4 follows from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Line 4 multiplies the values of lines 2 and 3, and carries the lost sign with it."
                },
                {
                  "step": "Line 3 written right is $i^3 = -i$.",
                  "reason": "With it the working ends on $(7i)^3 = -343i$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $(14i)^2$, and write that line right.",
              "given": [
                "$(14i)^2 = 14^2 \\cdot i^2$",
                "$14^2 \\cdot i^2 = 196 \\cdot i^2$",
                "$i^2 = 1$",
                "$(14i)^2 = 196$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: i^2 = -1",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(14i)^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Power of a product: line 1 gives the power to each factor, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 gives $i^2$ the value $1$.",
                  "reason": "A sign lost: powers of $i$ repeat every four, and $2 = 4 \\cdot 0 + 2$ gives $i^2 = i^2 = -1$."
                },
                {
                  "step": "Line 4 follows from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Line 4 multiplies the values of lines 2 and 3, and carries the lost sign with it."
                },
                {
                  "step": "Line 3 written right is $i^2 = -1$.",
                  "reason": "With it the working ends on $(14i)^2 = -196$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $(-4i)^5$, and write that line right.",
              "given": [
                "$(-4i)^5 = (-4)^5 \\cdot i^5$",
                "$(-4)^5 \\cdot i^5 = 1024 \\cdot i^5$",
                "$i^5 = i$",
                "$(-4i)^5 = 1024i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (-4)^5*i^5 = -1024*i^5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(-4i)^5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Power of a product: line 1 gives the power to each factor, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 2 gives $(-4)^5$ the value $1024$.",
                  "reason": "A sign lost: $(-4)^5$ is a product of 5 negative factors, an odd number of them, so it is $-1024$, below 0."
                },
                {
                  "step": "Line 4 follows from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Line 4 multiplies the values of lines 2 and 3, and carries the lost sign with it."
                },
                {
                  "step": "Line 2 written right is $(-4)^5 \\cdot i^5 = -1024 \\cdot i^5$.",
                  "reason": "With it the working ends on $(-4i)^5 = -1024i$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $2x^2 + 50 = 0$, and write that line right.",
            "given": [
              "$2x^2 + 50 = 0$",
              "$2x^2 = 50$",
              "$x^2 = 25$",
              "$x = 5$ or $x = -5$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $2x^2 + 50 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
              },
              {
                "step": "Line 2 moves $50$ to the right side as $50$.",
                "reason": "A sign lost: adding the same number to both sides adds $-50$ to each side, so the right side is $-50$."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the lost sign with it."
              },
              {
                "step": "Line 2 written right is $2x^2 = -50$.",
                "reason": "With it the working ends on $x = 5i$ or $x = -5i$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $3x^2 + 12 = 0$, and write that line right.",
              "given": [
                "$3x^2 + 12 = 0$",
                "$3x^2 = -12$",
                "$x^2 = 4$",
                "$x = 2$ or $x = -2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2 = -4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $3x^2 + 12 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 divides $-12$ by $3$ and writes $4$.",
                  "reason": "A sign lost: dividing both sides by a nonzero number gives $-12 \\div 3 = -4$, a negative number divided by a positive one."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the lost sign with it."
                },
                {
                  "step": "Line 3 written right is $x^2 = -4$.",
                  "reason": "With it the working ends on $x = 2i$ or $x = -2i$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $4x^2 + 400 = 0$, and write that line right.",
              "given": [
                "$4x^2 + 400 = 0$",
                "$4x^2 = 400$",
                "$x^2 = 100$",
                "$x = 10$ or $x = -10$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 4*x^2 = -400",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $4x^2 + 400 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 2 moves $400$ to the right side as $400$.",
                  "reason": "A sign lost: adding the same number to both sides adds $-400$ to each side, so the right side is $-400$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the lost sign with it."
                },
                {
                  "step": "Line 2 written right is $4x^2 = -400$.",
                  "reason": "With it the working ends on $x = 10i$ or $x = -10i$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2x^2 + 98 = 0$, and write that line right.",
              "given": [
                "$2x^2 + 98 = 0$",
                "$2x^2 = -98$",
                "$x^2 = 49$",
                "$x = 7$ or $x = -7$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2 = -49",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2x^2 + 98 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 divides $-98$ by $2$ and writes $49$.",
                  "reason": "A sign lost: dividing both sides by a nonzero number gives $-98 \\div 2 = -49$, a negative number divided by a positive one."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the lost sign with it."
                },
                {
                  "step": "Line 3 written right is $x^2 = -49$.",
                  "reason": "With it the working ends on $x = 7i$ or $x = -7i$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t143-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is $i$ raised to the power $n$, multiplied by 3.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is $i$ raised to the power $n$, multiplied by 3.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number $i$ raised to the power $n$ is $i^n$.",
                "reason": "Writing a sentence as an equation: \"raised to the power\" makes $n$ the exponent of $i$."
              },
              {
                "step": "That multiplied by 3 is $3i^n$.",
                "reason": "Writing a sentence as an equation: \"multiplied by\" multiplies."
              },
              {
                "step": "$y = 3i^n$",
                "reason": "Writing a sentence as an equation: \"is\" marks the place of the equals sign, with $y$ alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the square of the product of 4 and $i$, added to $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x+(4*i)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the square of the product of 4 and $i$, added to $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of 4 and $i$ is $4i$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two numbers named after it."
                },
                {
                  "step": "The square of that is $(4i)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" squares the whole product, so the product stands in brackets."
                },
                {
                  "step": "$y = x + (4i)^2$",
                  "reason": "Writing a sentence as an equation: \"is\" marks the place of the equals sign, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the product of $i$ and the square root of $x$, taken away from 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2-i*sqrt(x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the product of $i$ and the square root of $x$, taken away from 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root of $x$ is $\\sqrt{x}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts $x$ under the root sign."
                },
                {
                  "step": "The product of $i$ and that is $i\\sqrt{x}$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two numbers named after it."
                },
                {
                  "step": "$y = 2 - i\\sqrt{x}$",
                  "reason": "Writing a sentence as an equation: \"is\" marks the place of the equals sign, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is 5 times the sum of $x$ and $i$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 5*(x+i)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is 5 times the sum of $x$ and $i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and $i$ is $x + i$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it."
                },
                {
                  "step": "5 times that is $5(x + i)$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies the whole sum, so the sum stands in brackets."
                },
                {
                  "step": "$y = 5(x + i)$",
                  "reason": "Writing a sentence as an equation: \"is\" marks the place of the equals sign, with $y$ alone on the left."
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
      "id": "t143-p1",
      "method": "direct proof",
      "statement": "For every real number $a$, $(ai)^2 = -a^2$, and $ai$ is an imaginary number.",
      "idea": "Squaring $ai$ squares $a$ and $i$ apart. The square of $a$ is at least 0, and $i^2 = -1$ turns it into a number that is not positive.",
      "lines": [
        {
          "line": "Let $a$ be a real number.",
          "reason": "The statement takes it as given."
        },
        {
          "line": "$(ai)^2 = a^2i^2$",
          "reason": "Power of a product: the square of a product is the product of the squares."
        },
        {
          "line": "$a^2i^2 = a^2 \\cdot (-1)$",
          "reason": "The number $i$: $i^2 = -1$."
        },
        {
          "line": "$a^2 \\cdot (-1) = -a^2$",
          "reason": "Signs of products: a number times $-1$ is its negative."
        },
        {
          "line": "So $(ai)^2 = -a^2$.",
          "reason": "Transitive property: lines 2, 3 and 4."
        },
        {
          "line": "The number $a^2 = a \\cdot a$ is at least 0.",
          "reason": "Signs of products: two factors of one sign give a positive product, and $0 \\cdot 0 = 0$."
        },
        {
          "line": "So $-a^2$ is at most 0.",
          "reason": "Multiplying by a negative number reverses the sign: line 6 is multiplied by $-1$."
        },
        {
          "line": "So $ai$ is an imaginary number.",
          "reason": "Imaginary number: by lines 5 and 7 its square $-a^2$ is a real number that is not positive."
        }
      ]
    },
    {
      "id": "t143-p2",
      "method": "direct proof",
      "statement": "For every whole number $k$ and each of $r = 0$, $1$, $2$ and $3$, $i^{4k + r} = i^r$.",
      "idea": "The fourth power of $i$ is 1, so every block of four factors $i$ in a power can be dropped, and only the remainder of the exponent on division by 4 is left.",
      "lines": [
        {
          "line": "Let $k$ be a whole number and $r$ one of $0$, $1$, $2$ and $3$.",
          "reason": "The statement takes them as given."
        },
        {
          "line": "$i^{4k + r} = i^{4k} \\cdot i^r$",
          "reason": "Product law $a^ma^n = a^{m+n}$."
        },
        {
          "line": "$i^{4k} = (i^4)^k$",
          "reason": "Power law $(a^m)^n = a^{mn}$."
        },
        {
          "line": "$i^4 = (i^2)^2$",
          "reason": "Power law $(a^m)^n = a^{mn}$."
        },
        {
          "line": "$(i^2)^2 = (-1)^2$",
          "reason": "The number $i$: $i^2 = -1$."
        },
        {
          "line": "$(-1)^2 = 1$",
          "reason": "Signs of products: two negative factors give a positive product."
        },
        {
          "line": "So $i^4 = 1$.",
          "reason": "Transitive property: lines 4, 5 and 6."
        },
        {
          "line": "So $(i^4)^k = 1^k$.",
          "reason": "Substituting a value: $i^4$ is replaced by its value 1 from line 7."
        },
        {
          "line": "$1^k = 1$",
          "reason": "The definition of a power, from arithmetic: a product of ones is 1."
        },
        {
          "line": "So $i^{4k + r} = 1 \\cdot i^r$.",
          "reason": "Transitive property: lines 2, 3, 8 and 9."
        },
        {
          "line": "So $i^{4k + r} = i^r$.",
          "reason": "A number times 1 is that number: line 10."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t143-s1",
      "method": "direct proof",
      "statement": "Prove that for positive numbers $m$ and $n$, $\\sqrt{-m} \\cdot \\sqrt{-n} = -\\sqrt{mn}$. Facts it may use: square root of a negative number, the number $i$, root of a product, the commutative and associative laws of multiplication, substituting a value, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "The two roots are $\\sqrt{-m} = i\\sqrt{m}$ and $\\sqrt{-n} = i\\sqrt{n}$.",
            "reason": "Square root of a negative number: $m$ and $n$ are positive."
          },
          {
            "line": "$\\sqrt{-m} \\cdot \\sqrt{-n} = i\\sqrt{m} \\cdot i\\sqrt{n}$",
            "reason": "Substituting a value: line 1."
          },
          {
            "line": "$i\\sqrt{m} \\cdot i\\sqrt{n} = i^2\\sqrt{m}\\sqrt{n}$",
            "reason": "The commutative and associative laws of multiplication, from arithmetic."
          },
          {
            "line": "$i^2\\sqrt{m}\\sqrt{n} = -\\sqrt{m}\\sqrt{n}$",
            "reason": "The number $i$: $i^2 = -1$."
          },
          {
            "line": "$-\\sqrt{m}\\sqrt{n} = -\\sqrt{mn}$",
            "reason": "Root of a product: $m$ and $n$ are at least 0."
          },
          {
            "line": "So $\\sqrt{-m} \\cdot \\sqrt{-n} = -\\sqrt{mn}$.",
            "reason": "Transitive property: lines 2, 3, 4 and 5."
          }
        ]
      }
    },
    {
      "id": "t143-s2",
      "method": "proof by cases",
      "statement": "Prove that if $z$ is an imaginary number, then $iz$ is a real number. Facts it may use: imaginary number, real number, the number $i$, square root of a negative number, substituting a value, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "The square of $z$ is $z^2 = -c$ for a real number $c$ at least 0.",
            "reason": "Imaginary number: $z^2$ is a real number that is not positive, and $c = -z^2$."
          },
          {
            "line": "So $z = i\\sqrt{c}$ or $z = -i\\sqrt{c}$.",
            "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$ for positive $n$, and $x = 0$ for $n = 0$; line 1 with $n = c$."
          },
          {
            "line": "Case $z = i\\sqrt{c}$: $iz = i \\cdot i\\sqrt{c}$.",
            "reason": "Substituting a value: $z$ is replaced by $i\\sqrt{c}$."
          },
          {
            "line": "$i \\cdot i\\sqrt{c} = -\\sqrt{c}$",
            "reason": "The number $i$: $i \\cdot i = i^2 = -1$."
          },
          {
            "line": "Case $z = -i\\sqrt{c}$: $iz = i \\cdot (-i\\sqrt{c})$.",
            "reason": "Substituting a value: $z$ is replaced by $-i\\sqrt{c}$."
          },
          {
            "line": "$i \\cdot (-i\\sqrt{c}) = \\sqrt{c}$",
            "reason": "The number $i$: $i \\cdot i = -1$, and $-(-1) = 1$."
          },
          {
            "line": "In both cases $iz$ is $-\\sqrt{c}$ or $\\sqrt{c}$, a real number.",
            "reason": "Real number: $\\sqrt{c}$ is a real number for $c$ at least 0, and so is its negative; lines 2, 4 and 6."
          }
        ]
      }
    },
    {
      "id": "t143-s3",
      "method": "direct proof",
      "statement": "Prove that for every real number $a$ other than 0, $(ai)^{-1} = -\\dfrac{1}{a}i$. Facts it may use: the number $i$, negative exponent, product law, the cancellation law, signs of products, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "$(ai)^{-1} = \\dfrac{1}{ai}$",
            "reason": "Negative exponent $a^{-n} = \\dfrac{1}{a^n}$, with $n = 1$."
          },
          {
            "line": "$\\dfrac{1}{ai} = \\dfrac{i}{ai \\cdot i}$",
            "reason": "The cancellation law, from arithmetic: $i$ is not 0, since $i^2 = -1$."
          },
          {
            "line": "$\\dfrac{i}{ai \\cdot i} = \\dfrac{i}{ai^2}$",
            "reason": "Product law $a^ma^n = a^{m+n}$: $i \\cdot i = i^2$."
          },
          {
            "line": "$\\dfrac{i}{ai^2} = \\dfrac{i}{-a}$",
            "reason": "The number $i$: $i^2 = -1$."
          },
          {
            "line": "$\\dfrac{i}{-a} = -\\dfrac{1}{a}i$",
            "reason": "Signs of products: dividing by $-a$ gives the negative of dividing by $a$, and $a$ is not 0."
          },
          {
            "line": "So $(ai)^{-1} = -\\dfrac{1}{a}i$.",
            "reason": "Transitive property: lines 1 to 5."
          }
        ]
      }
    }
  ]
}
