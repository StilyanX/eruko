export default {
  "number": 168,
  "title": "Exponential functions and equations",
  "section": 14,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "525-532, 553-557"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $4^{x + 1} = 8^{2x - 3}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "x = 11/4",
    "solution": [
      "$4^{x + 1} = 8^{2x - 3}$",
      "$2^{2(x + 1)} = 2^{3(2x - 3)}$",
      "$2(x + 1) = 3(2x - 3)$",
      "$2x + 2 = 6x - 9$",
      "$-4x = -11$",
      "$x = \\dfrac{11}{4}$"
    ]
  },
  "ideas": [
    {
      "name": "Exponential function",
      "concrete": "The function $f(x) = 7^{x}$ gives $f(-1) = \\dfrac{1}{7}$, $f(0) = 1$, $f(1) = 7$ and $f(2) = 49$. Every real number can go in for $x$, and every value that comes out is positive: far to the left the values are close to 0, and to the right they grow faster and faster.",
      "general": "For a number $a$ greater than 1, $f(x) = a^x$ is an **exponential function** with **base** $a$. Its domain is all real numbers and its range the positive numbers, and its graph crosses the $y$-axis at $(0, 1)$. A line that a graph comes closer and closer to and never meets is an **asymptote** of the graph; the graph of $a^x$ has the asymptote $y = 0$."
    },
    {
      "name": "Equal powers of one base have equal exponents",
      "concrete": "In $7^{2x + 1} = 7^{9}$ both sides are powers of 7, so the exponents are equal: $2x + 1 = 9$, and $x = 4$. Writing both sides with one base comes first where it is needed: $3^{6} = 9^{3}$, since $9^{3} = (3^2)^3 = 3^{6}$.",
      "general": "For a number $a$ greater than 1 and real numbers $m$ and $n$: if $a^m = a^n$, then $m = n$. An equation whose unknown is in an exponent is solved by writing both sides as powers of one base and setting the exponents equal."
    },
    {
      "name": "Linear growth and exponential growth",
      "concrete": "Starting from 4 and adding 6 each day gives 4, 10, 16, 22, so on day $n$ the amount is $4 + 6(n - 1) = 6n - 2$. Starting from 4 and multiplying by 3 each day gives 4, 12, 36, 108, so on day $n$ the amount is $4 \\cdot 3^{n - 1}$. By day 5 the first gives 28 and the second 324.",
      "general": "An amount that starts at $b$ and grows by the same number $c$ each step is $b + c(n - 1)$ at step $n$: this is **linear growth**. An amount that starts at $b$ and is multiplied by the same number $a$ greater than 1 each step is $b \\cdot a^{n - 1}$ at step $n$: this is **exponential growth**."
    }
  ],
  "kinds": [
    {
      "id": "t168-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $4^{4x + 4} = 4^{2x - 4}$.",
            "lines": [
              {
                "step": "$4^{4x + 4} = 4^{2x - 4}$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x + 4 = 2x - 4$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $4$, so their exponents are equal."
              },
              {
                "step": "$2x = -8$",
                "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
              },
              {
                "step": "$x = -4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $6^{3x - 6} = 6^{-2x + 8}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 14/5",
              "lines": [
                {
                  "step": "$6^{3x - 6} = 6^{-2x + 8}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x - 6 = -2x + 8$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $6$, so their exponents are equal."
                },
                {
                  "step": "$5x = 14$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = \\dfrac{14}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Solve $11^{4x + 5} = 11^{-3x + 2}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -3/7",
              "lines": [
                {
                  "step": "$11^{4x + 5} = 11^{-3x + 2}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 5 = -3x + 2$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $11$, so their exponents are equal."
                },
                {
                  "step": "$7x = -3$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = -\\dfrac{3}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            },
            {
              "prompt": "Solve $3^{-2x - 3} = 3^{5x + 7}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -10/7",
              "lines": [
                {
                  "step": "$3^{-2x - 3} = 3^{5x + 7}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x - 3 = 5x + 7$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$-7x = 10$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = -\\dfrac{10}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $9^{2x - 4} = 27^{-2x + 2}$.",
            "lines": [
              {
                "step": "$9^{2x - 4} = 27^{-2x + 2}$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3^{2(2x - 4)} = 3^{3(-2x + 2)}$",
                "reason": "Power law: $9 = 3^{2}$ and $27 = 3^{3}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$2(2x - 4) = 3(-2x + 2)$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
              },
              {
                "step": "$4x - 8 = -6x + 6$",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              },
              {
                "step": "$10x = 14$",
                "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
              },
              {
                "step": "$x = \\dfrac{7}{5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $27^{-2x + 4} = 81^{-2x + 1}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -4",
              "lines": [
                {
                  "step": "$27^{-2x + 4} = 81^{-2x + 1}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3^{3(-2x + 4)} = 3^{4(-2x + 1)}$",
                  "reason": "Power law: $27 = 3^{3}$ and $81 = 3^{4}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$3(-2x + 4) = 4(-2x + 1)$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$-6x + 12 = -8x + 4$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$2x = -8$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $4^{-2x - 4} = 64^{3x - 1}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -1/11",
              "lines": [
                {
                  "step": "$4^{-2x - 4} = 64^{3x - 1}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2^{2(-2x - 4)} = 2^{6(3x - 1)}$",
                  "reason": "Power law: $4 = 2^{2}$ and $64 = 2^{6}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2(-2x - 4) = 6(3x - 1)$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$-4x - 8 = 18x - 6$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$-22x = 2$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = -\\dfrac{1}{11}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-22$."
                }
              ]
            },
            {
              "prompt": "Solve $25^{-2x - 2} = 125^{3x - 4}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 8/13",
              "lines": [
                {
                  "step": "$25^{-2x - 2} = 125^{3x - 4}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5^{2(-2x - 2)} = 5^{3(3x - 4)}$",
                  "reason": "Power law: $25 = 5^{2}$ and $125 = 5^{3}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2(-2x - 2) = 3(3x - 4)$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $5$, so their exponents are equal."
                },
                {
                  "step": "$-4x - 4 = 9x - 12$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$-13x = -8$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = \\dfrac{8}{13}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-13$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $4^{\\left(8^{x - 2}\\right)} = 256^{\\left(2^{x + 2}\\right)}$.",
            "lines": [
              {
                "step": "$4^{\\left(8^{x - 2}\\right)} = 256^{\\left(2^{x + 2}\\right)}$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2^{2 \\cdot 8^{x - 2}} = 2^{8 \\cdot 2^{x + 2}}$",
                "reason": "Power law: $4 = 2^{2}$ and $256 = 2^{8}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$2 \\cdot 8^{x - 2} = 8 \\cdot 2^{x + 2}$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
              },
              {
                "step": "$2 \\cdot 2^{3(x - 2)} = 2^{3} \\cdot 2^{x + 2}$",
                "reason": "Power law: each number is written as a power of $2$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$2^{3x - 5} = 2^{x + 5}$",
                "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents, and each exponent is multiplied out."
              },
              {
                "step": "$3x - 5 = x + 5$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
              },
              {
                "step": "$2x = 10$",
                "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
              },
              {
                "step": "$x = 5$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $512^{\\left(27^{x - 2}\\right)} = 2^{\\left(3^{x - 2}\\right)}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 1",
              "lines": [
                {
                  "step": "$512^{\\left(27^{x - 2}\\right)} = 2^{\\left(3^{x - 2}\\right)}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2^{9 \\cdot 27^{x - 2}} = 2^{3^{x - 2}}$",
                  "reason": "Power law: $512 = 2^{9}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$9 \\cdot 27^{x - 2} = 3^{x - 2}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$3^{2} \\cdot 3^{3(x - 2)} = 3^{x - 2}$",
                  "reason": "Power law: each number is written as a power of $3$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$3^{3x - 4} = 3^{x - 2}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents, and each exponent is multiplied out."
                },
                {
                  "step": "$3x - 4 = x - 2$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$2x = 2$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $8^{\\left(3^{x + 1}\\right)} = 512^{\\left(27^{x + 2}\\right)}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -3",
              "lines": [
                {
                  "step": "$8^{\\left(3^{x + 1}\\right)} = 512^{\\left(27^{x + 2}\\right)}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2^{3 \\cdot 3^{x + 1}} = 2^{9 \\cdot 27^{x + 2}}$",
                  "reason": "Power law: $8 = 2^{3}$ and $512 = 2^{9}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$3 \\cdot 3^{x + 1} = 9 \\cdot 27^{x + 2}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$3 \\cdot 3^{x + 1} = 3^{2} \\cdot 3^{3(x + 2)}$",
                  "reason": "Power law: each number is written as a power of $3$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$3^{x + 2} = 3^{3x + 8}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents, and each exponent is multiplied out."
                },
                {
                  "step": "$x + 2 = 3x + 8$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$-2x = 6$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                }
              ]
            },
            {
              "prompt": "Solve $2^{\\left(9^{x - 1}\\right)} = 512^{\\left(81^{x}\\right)}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -2",
              "lines": [
                {
                  "step": "$2^{\\left(9^{x - 1}\\right)} = 512^{\\left(81^{x}\\right)}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2^{9^{x - 1}} = 2^{9 \\cdot 81^{x}}$",
                  "reason": "Power law: $512 = 2^{9}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$9^{x - 1} = 9 \\cdot 81^{x}$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$3^{2(x - 1)} = 3^{2} \\cdot 3^{4x}$",
                  "reason": "Power law: each number is written as a power of $3$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$3^{2x - 2} = 3^{4x + 2}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents, and each exponent is multiplied out."
                },
                {
                  "step": "$2x - 2 = 4x + 2$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$-2x = 4$",
                  "reason": "Adding the same number to both sides: the terms are moved so that the terms in $x$ stand on the left."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $4^{x^2} \\cdot 128^{x} = 16$.",
            "lines": [
              {
                "step": "$4^{x^2} \\cdot 128^{x} = 16$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2^{2x^2} \\cdot 2^{7x} = 2^{4}$",
                "reason": "Power law: $4 = 2^{2}$ and $128 = 2^{7}$ and $16 = 2^{4}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$2^{2x^2 + 7x} = 2^{4}$",
                "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents of the two powers on the left."
              },
              {
                "step": "$2x^2 + 7x = 4$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
              },
              {
                "step": "$2x^2 + 7x - 4 = 0$",
                "reason": "Adding the same number to both sides: $-4$ is added to both sides."
              },
              {
                "step": "$(2x - 1)(x + 4) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = \\dfrac{1}{2}$ or $x = -4$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $4^{x^2} \\cdot 64^{x} = 256$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1, x = -4",
              "lines": [
                {
                  "step": "$4^{x^2} \\cdot 64^{x} = 256$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2^{2x^2} \\cdot 2^{6x} = 2^{8}$",
                  "reason": "Power law: $4 = 2^{2}$ and $64 = 2^{6}$ and $256 = 2^{8}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2^{2x^2 + 6x} = 2^{8}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents of the two powers on the left."
                },
                {
                  "step": "$2x^2 + 6x = 8$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$2x^2 + 6x - 8 = 0$",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides."
                },
                {
                  "step": "$2(x - 1)(x + 4) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 1$ or $x = -4$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            },
            {
              "prompt": "Solve $8^{x^2} \\cdot 32^{x} = 4$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1/3, x = -2",
              "lines": [
                {
                  "step": "$8^{x^2} \\cdot 32^{x} = 4$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2^{3x^2} \\cdot 2^{5x} = 2^{2}$",
                  "reason": "Power law: $8 = 2^{3}$ and $32 = 2^{5}$ and $4 = 2^{2}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2^{3x^2 + 5x} = 2^{2}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents of the two powers on the left."
                },
                {
                  "step": "$3x^2 + 5x = 2$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$3x^2 + 5x - 2 = 0$",
                  "reason": "Adding the same number to both sides: $-2$ is added to both sides."
                },
                {
                  "step": "$(3x - 1)(x + 2) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = \\dfrac{1}{3}$ or $x = -2$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            },
            {
              "prompt": "Solve $9^{x^2} \\cdot 27^{x} = 243$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1, x = -5/2",
              "lines": [
                {
                  "step": "$9^{x^2} \\cdot 27^{x} = 243$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3^{2x^2} \\cdot 3^{3x} = 3^{5}$",
                  "reason": "Power law: $9 = 3^{2}$ and $27 = 3^{3}$ and $243 = 3^{5}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$3^{2x^2 + 3x} = 3^{5}$",
                  "reason": "Product law: $a^ma^n = a^{m+n}$ adds the exponents of the two powers on the left."
                },
                {
                  "step": "$2x^2 + 3x = 5$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$2x^2 + 3x - 5 = 0$",
                  "reason": "Adding the same number to both sides: $-5$ is added to both sides."
                },
                {
                  "step": "$(x - 1)(2x + 5) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 1$ or $x = -\\dfrac{5}{2}$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $81^{x^2 + 4} = 9^{-10x - 4}$.",
            "lines": [
              {
                "step": "$81^{x^2 + 4} = 9^{-10x - 4}$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3^{4(x^2 + 4)} = 3^{2(-10x - 4)}$",
                "reason": "Power law: $81 = 3^{4}$ and $9 = 3^{2}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$4(x^2 + 4) = 2(-10x - 4)$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
              },
              {
                "step": "$4x^2 + 16 = -20x - 8$",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              },
              {
                "step": "$4x^2 + 20x + 24 = 0$",
                "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
              },
              {
                "step": "$4(x + 3)(x + 2) = 0$",
                "reason": "Factoring a quadratic: multiplying out the brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = -3$ or $x = -2$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $27^{x^2 - 9} = 9^{6x - 6}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -1, x = 5",
              "lines": [
                {
                  "step": "$27^{x^2 - 9} = 9^{6x - 6}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3^{3(x^2 - 9)} = 3^{2(6x - 6)}$",
                  "reason": "Power law: $27 = 3^{3}$ and $9 = 3^{2}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$3(x^2 - 9) = 2(6x - 6)$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$3x^2 - 27 = 12x - 12$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$3x^2 - 12x - 15 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$3(x + 1)(x - 5) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = -1$ or $x = 5$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            },
            {
              "prompt": "Solve $9^{x^2 - 7} = 27^{2x + 2}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -2, x = 5",
              "lines": [
                {
                  "step": "$9^{x^2 - 7} = 27^{2x + 2}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3^{2(x^2 - 7)} = 3^{3(2x + 2)}$",
                  "reason": "Power law: $9 = 3^{2}$ and $27 = 3^{3}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$2(x^2 - 7) = 3(2x + 2)$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                },
                {
                  "step": "$2x^2 - 14 = 6x + 6$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$2x^2 - 6x - 20 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$2(x + 2)(x - 5) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = -2$ or $x = 5$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            },
            {
              "prompt": "Solve $16^{x^2 + 10} = 4^{12x + 4}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 2, x = 4",
              "lines": [
                {
                  "step": "$16^{x^2 + 10} = 4^{12x + 4}$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2^{4(x^2 + 10)} = 2^{2(12x + 4)}$",
                  "reason": "Power law: $16 = 2^{4}$ and $4 = 2^{2}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$4(x^2 + 10) = 2(12x + 4)$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
                },
                {
                  "step": "$4x^2 + 40 = 24x + 8$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$4x^2 - 24x + 32 = 0$",
                  "reason": "Adding the same number to both sides: the terms on the right are moved to the left."
                },
                {
                  "step": "$4(x - 2)(x - 4) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 2$ or $x = 4$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t168-k2",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $7^{2x - 1}$, given that $7^x = 5$.",
            "lines": [
              {
                "step": "Evaluate $7^{2x - 1}$, given that $7^x = 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$7^{2x - 1} = 7^{2x} \\cdot 7^{-1}$",
                "reason": "Product law: $a^{m+n} = a^ma^n$ splits the power into two."
              },
              {
                "step": "$7^{2x - 1} = \\left(7^x\\right)^{2} \\cdot 7^{-1}$",
                "reason": "Power law: $a^{mn} = (a^m)^n$ writes the first factor as a power of the given one."
              },
              {
                "step": "$7^{2x - 1} = \\left(5\\right)^{2} \\cdot 7^{-1}$",
                "reason": "Substituting a value: $7^x$ is replaced by its value $5$, in brackets."
              },
              {
                "step": "$7^{2x - 1} = \\dfrac{25}{7}$",
                "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product, with $a^{-n} = \\dfrac{1}{a^n}$ by the negative exponent."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $10^{3x + 3}$, given that $10^x = 2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8000",
              "lines": [
                {
                  "step": "Evaluate $10^{3x + 3}$, given that $10^x = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10^{3x + 3} = 10^{3x} \\cdot 10^{3}$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the power into two."
                },
                {
                  "step": "$10^{3x + 3} = \\left(10^x\\right)^{3} \\cdot 10^{3}$",
                  "reason": "Power law: $a^{mn} = (a^m)^n$ writes the first factor as a power of the given one."
                },
                {
                  "step": "$10^{3x + 3} = \\left(2\\right)^{3} \\cdot 10^{3}$",
                  "reason": "Substituting a value: $10^x$ is replaced by its value $2$, in brackets."
                },
                {
                  "step": "$10^{3x + 3} = 8000$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product."
                }
              ]
            },
            {
              "prompt": "Evaluate $4^{2x + 2}$, given that $4^x = 20$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "6400",
              "lines": [
                {
                  "step": "Evaluate $4^{2x + 2}$, given that $4^x = 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4^{2x + 2} = 4^{2x} \\cdot 4^{2}$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the power into two."
                },
                {
                  "step": "$4^{2x + 2} = \\left(4^x\\right)^{2} \\cdot 4^{2}$",
                  "reason": "Power law: $a^{mn} = (a^m)^n$ writes the first factor as a power of the given one."
                },
                {
                  "step": "$4^{2x + 2} = \\left(20\\right)^{2} \\cdot 4^{2}$",
                  "reason": "Substituting a value: $4^x$ is replaced by its value $20$, in brackets."
                },
                {
                  "step": "$4^{2x + 2} = 6400$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product."
                }
              ]
            },
            {
              "prompt": "Evaluate $10^{2x + 2}$, given that $10^x = 9$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8100",
              "lines": [
                {
                  "step": "Evaluate $10^{2x + 2}$, given that $10^x = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10^{2x + 2} = 10^{2x} \\cdot 10^{2}$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the power into two."
                },
                {
                  "step": "$10^{2x + 2} = \\left(10^x\\right)^{2} \\cdot 10^{2}$",
                  "reason": "Power law: $a^{mn} = (a^m)^n$ writes the first factor as a power of the given one."
                },
                {
                  "step": "$10^{2x + 2} = \\left(9\\right)^{2} \\cdot 10^{2}$",
                  "reason": "Substituting a value: $10^x$ is replaced by its value $9$, in brackets."
                },
                {
                  "step": "$10^{2x + 2} = 8100$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $5^{2x + 5}$, given that $25^{x + 2} = 9$.",
            "lines": [
              {
                "step": "Evaluate $5^{2x + 5}$, given that $25^{x + 2} = 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$25^x \\cdot 25^{2} = 9$",
                "reason": "Product law: $a^{m+n} = a^ma^n$ splits the given power into two."
              },
              {
                "step": "$25^x = \\dfrac{9}{625}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $25^{2} = 625$."
              },
              {
                "step": "$5^{2x + 5} = 25^x \\cdot 5^{5}$",
                "reason": "Power law and product law: $25 = 5^{2}$, so $5^{2x} = \\left(5^{2}\\right)^{x} = 25^x$, and $a^{m+n} = a^ma^n$ takes off the constant part of the exponent."
              },
              {
                "step": "$5^{2x + 5} = \\left(\\dfrac{9}{625}\\right) \\cdot 5^{5}$",
                "reason": "Substituting a value: $25^x$ is replaced by its value $\\dfrac{9}{625}$, in brackets."
              },
              {
                "step": "$5^{2x + 5} = 45$",
                "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $2^{4x + 1}$, given that $4^{x + 2} = 9$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "81/128",
              "lines": [
                {
                  "step": "Evaluate $2^{4x + 1}$, given that $4^{x + 2} = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4^x \\cdot 4^{2} = 9$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the given power into two."
                },
                {
                  "step": "$4^x = \\dfrac{9}{16}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4^{2} = 16$."
                },
                {
                  "step": "$2^{4x + 1} = \\left(4^x\\right)^{2} \\cdot 2^{1}$",
                  "reason": "Power law and product law: $4 = 2^{2}$, so $2^{4x} = \\left(2^{2}\\right)^{2x} = \\left(4^x\\right)^{2}$, and $a^{m+n} = a^ma^n$ takes off the constant part of the exponent."
                },
                {
                  "step": "$2^{4x + 1} = \\left(\\dfrac{9}{16}\\right)^{2} \\cdot 2^{1}$",
                  "reason": "Substituting a value: $4^x$ is replaced by its value $\\dfrac{9}{16}$, in brackets."
                },
                {
                  "step": "$2^{4x + 1} = \\dfrac{81}{128}$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product."
                }
              ]
            },
            {
              "prompt": "Evaluate $7^{4x - 1}$, given that $49^{x - 1} = 3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3087",
              "lines": [
                {
                  "step": "Evaluate $7^{4x - 1}$, given that $49^{x - 1} = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$49^x \\cdot 49^{-1} = 3$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the given power into two."
                },
                {
                  "step": "$49^x = 147$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $49^{-1} = \\dfrac{1}{49}$."
                },
                {
                  "step": "$7^{4x - 1} = \\left(49^x\\right)^{2} \\cdot 7^{-1}$",
                  "reason": "Power law and product law: $49 = 7^{2}$, so $7^{4x} = \\left(7^{2}\\right)^{2x} = \\left(49^x\\right)^{2}$, and $a^{m+n} = a^ma^n$ takes off the constant part of the exponent."
                },
                {
                  "step": "$7^{4x - 1} = \\left(147\\right)^{2} \\cdot 7^{-1}$",
                  "reason": "Substituting a value: $49^x$ is replaced by its value $147$, in brackets."
                },
                {
                  "step": "$7^{4x - 1} = 3087$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product, with $a^{-n} = \\dfrac{1}{a^n}$ by the negative exponent."
                }
              ]
            },
            {
              "prompt": "Evaluate $2^{6x + 2}$, given that $8^{x + 2} = 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/256",
              "lines": [
                {
                  "step": "Evaluate $2^{6x + 2}$, given that $8^{x + 2} = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8^x \\cdot 8^{2} = 6$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the given power into two."
                },
                {
                  "step": "$8^x = \\dfrac{3}{32}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8^{2} = 64$."
                },
                {
                  "step": "$2^{6x + 2} = \\left(8^x\\right)^{2} \\cdot 2^{2}$",
                  "reason": "Power law and product law: $8 = 2^{3}$, so $2^{6x} = \\left(2^{3}\\right)^{2x} = \\left(8^x\\right)^{2}$, and $a^{m+n} = a^ma^n$ takes off the constant part of the exponent."
                },
                {
                  "step": "$2^{6x + 2} = \\left(\\dfrac{3}{32}\\right)^{2} \\cdot 2^{2}$",
                  "reason": "Substituting a value: $8^x$ is replaced by its value $\\dfrac{3}{32}$, in brackets."
                },
                {
                  "step": "$2^{6x + 2} = \\dfrac{9}{256}$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $25^{2x - 1}$, given that $5^x = 7$.",
            "lines": [
              {
                "step": "Evaluate $25^{2x - 1}$, given that $5^x = 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$25^{2x - 1} = 5^{4x - 2}$",
                "reason": "Power law: $25 = 5^{2}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
              },
              {
                "step": "$25^{2x - 1} = 5^{4x} \\cdot 5^{-2}$",
                "reason": "Product law: $a^{m+n} = a^ma^n$ splits the power into two."
              },
              {
                "step": "$25^{2x - 1} = \\left(5^x\\right)^{4} \\cdot 5^{-2}$",
                "reason": "Power law: $a^{mn} = (a^m)^n$ writes the first factor as a power of the given one."
              },
              {
                "step": "$25^{2x - 1} = \\left(7\\right)^{4} \\cdot 5^{-2}$",
                "reason": "Substituting a value: $5^x$ is replaced by its value $7$, in brackets."
              },
              {
                "step": "$25^{2x - 1} = \\dfrac{2401}{25}$",
                "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product, with $a^{-n} = \\dfrac{1}{a^n}$ by the negative exponent."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $8^{x + 1}$, given that $2^x = 5$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1000",
              "lines": [
                {
                  "step": "Evaluate $8^{x + 1}$, given that $2^x = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8^{x + 1} = 2^{3x + 3}$",
                  "reason": "Power law: $8 = 2^{3}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$8^{x + 1} = 2^{3x} \\cdot 2^{3}$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the power into two."
                },
                {
                  "step": "$8^{x + 1} = \\left(2^x\\right)^{3} \\cdot 2^{3}$",
                  "reason": "Power law: $a^{mn} = (a^m)^n$ writes the first factor as a power of the given one."
                },
                {
                  "step": "$8^{x + 1} = \\left(5\\right)^{3} \\cdot 2^{3}$",
                  "reason": "Substituting a value: $2^x$ is replaced by its value $5$, in brackets."
                },
                {
                  "step": "$8^{x + 1} = 1000$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product."
                }
              ]
            },
            {
              "prompt": "Evaluate $25^{x - 2}$, given that $5^x = 11$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "121/625",
              "lines": [
                {
                  "step": "Evaluate $25^{x - 2}$, given that $5^x = 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$25^{x - 2} = 5^{2x - 4}$",
                  "reason": "Power law: $25 = 5^{2}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$25^{x - 2} = 5^{2x} \\cdot 5^{-4}$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the power into two."
                },
                {
                  "step": "$25^{x - 2} = \\left(5^x\\right)^{2} \\cdot 5^{-4}$",
                  "reason": "Power law: $a^{mn} = (a^m)^n$ writes the first factor as a power of the given one."
                },
                {
                  "step": "$25^{x - 2} = \\left(11\\right)^{2} \\cdot 5^{-4}$",
                  "reason": "Substituting a value: $5^x$ is replaced by its value $11$, in brackets."
                },
                {
                  "step": "$25^{x - 2} = \\dfrac{121}{625}$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product, with $a^{-n} = \\dfrac{1}{a^n}$ by the negative exponent."
                }
              ]
            },
            {
              "prompt": "Evaluate $9^{2x - 2}$, given that $3^x = 2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "16/81",
              "lines": [
                {
                  "step": "Evaluate $9^{2x - 2}$, given that $3^x = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9^{2x - 2} = 3^{4x - 4}$",
                  "reason": "Power law: $9 = 3^{2}$, and $(a^m)^n = a^{mn}$ multiplies the exponents."
                },
                {
                  "step": "$9^{2x - 2} = 3^{4x} \\cdot 3^{-4}$",
                  "reason": "Product law: $a^{m+n} = a^ma^n$ splits the power into two."
                },
                {
                  "step": "$9^{2x - 2} = \\left(3^x\\right)^{4} \\cdot 3^{-4}$",
                  "reason": "Power law: $a^{mn} = (a^m)^n$ writes the first factor as a power of the given one."
                },
                {
                  "step": "$9^{2x - 2} = \\left(2\\right)^{4} \\cdot 3^{-4}$",
                  "reason": "Substituting a value: $3^x$ is replaced by its value $2$, in brackets."
                },
                {
                  "step": "$9^{2x - 2} = \\dfrac{16}{81}$",
                  "reason": "Order of operations, from arithmetic: the powers are worked out first, then the product, with $a^{-n} = \\dfrac{1}{a^n}$ by the negative exponent."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t168-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $9 \\cdot 9^{x} - 730 \\cdot 3^{x} + 81 = 0$.",
            "lines": [
              {
                "step": "$9 \\cdot 9^{x} - 730 \\cdot 3^{x} + 81 = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = 3^x$: $9y^2 - 730y + 81 = 0$",
                "reason": "Quadratic in an expression: $9^{x} = \\left(3^{x}\\right)^2$ by the power law, so the letter $y$ stands for $3^x$ each time it appears."
              },
              {
                "step": "$(9y - 1)(y - 81) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $y = \\dfrac{1}{9}$ or $y = 81$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Either $3^x = 3^{-2}$ or $3^x = 3^{4}$",
                "reason": "Substituting a letter and undoing it: $3^x$ is put back in place of $y$, and each value is written as a power of $3$."
              },
              {
                "step": "Either $x = -2$ or $x = 4$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $25^{x} - 126 \\cdot 5^{x} + 125 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 0, x = 3",
              "lines": [
                {
                  "step": "$25^{x} - 126 \\cdot 5^{x} + 125 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = 5^x$: $y^2 - 126y + 125 = 0$",
                  "reason": "Quadratic in an expression: $25^{x} = \\left(5^{x}\\right)^2$ by the power law, so the letter $y$ stands for $5^x$ each time it appears."
                },
                {
                  "step": "$(y - 1)(y - 125) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 1$ or $y = 125$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $5^x = 5^{0}$ or $5^x = 5^{3}$",
                  "reason": "Substituting a letter and undoing it: $5^x$ is put back in place of $y$, and each value is written as a power of $5$."
                },
                {
                  "step": "Either $x = 0$ or $x = 3$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $5$, so their exponents are equal."
                }
              ]
            },
            {
              "prompt": "Solve $5^{2x} - 30 \\cdot 5^{x} + 125 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1, x = 2",
              "lines": [
                {
                  "step": "$5^{2x} - 30 \\cdot 5^{x} + 125 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = 5^x$: $y^2 - 30y + 125 = 0$",
                  "reason": "Quadratic in an expression: $5^{2x} = \\left(5^{x}\\right)^2$ by the power law, so the letter $y$ stands for $5^x$ each time it appears."
                },
                {
                  "step": "$(y - 5)(y - 25) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 5$ or $y = 25$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $5^x = 5^{1}$ or $5^x = 5^{2}$",
                  "reason": "Substituting a letter and undoing it: $5^x$ is put back in place of $y$, and each value is written as a power of $5$."
                },
                {
                  "step": "Either $x = 1$ or $x = 2$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $5$, so their exponents are equal."
                }
              ]
            },
            {
              "prompt": "Solve $6 \\cdot 6^{2x} - 217 \\cdot 6^{x} + 36 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -1, x = 2",
              "lines": [
                {
                  "step": "$6 \\cdot 6^{2x} - 217 \\cdot 6^{x} + 36 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = 6^x$: $6y^2 - 217y + 36 = 0$",
                  "reason": "Quadratic in an expression: $6^{2x} = \\left(6^{x}\\right)^2$ by the power law, so the letter $y$ stands for $6^x$ each time it appears."
                },
                {
                  "step": "$(6y - 1)(y - 36) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = \\dfrac{1}{6}$ or $y = 36$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $6^x = 6^{-1}$ or $6^x = 6^{2}$",
                  "reason": "Substituting a letter and undoing it: $6^x$ is put back in place of $y$, and each value is written as a power of $6$."
                },
                {
                  "step": "Either $x = -1$ or $x = 2$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $6$, so their exponents are equal."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $4^{x} - 30 \\cdot 2^{x} - 64 = 0$.",
            "lines": [
              {
                "step": "$4^{x} - 30 \\cdot 2^{x} - 64 = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = 2^x$: $y^2 - 30y - 64 = 0$",
                "reason": "Quadratic in an expression: $4^{x} = \\left(2^{x}\\right)^2$ by the power law, so the letter $y$ stands for $2^x$ each time it appears."
              },
              {
                "step": "$(y - 32)(y + 2) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $y = 32$ or $y = -2$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "The value $-2$ is negative, so it is not a value of $2^x$.",
                "reason": "Exponential function: the domain of $2^x$ is all real numbers and its range the positive numbers. A negative number is never a value of $2^x$."
              },
              {
                "step": "$2^x = 2^{5}$",
                "reason": "Substituting a letter and undoing it: $2^x$ is put back in place of $y$, and the value is written as a power of $2$."
              },
              {
                "step": "$x = 5$",
                "reason": "Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2 \\cdot 3^{2x} - 155 \\cdot 3^{x} - 567 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 4",
              "lines": [
                {
                  "step": "$2 \\cdot 3^{2x} - 155 \\cdot 3^{x} - 567 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = 3^x$: $2y^2 - 155y - 567 = 0$",
                  "reason": "Quadratic in an expression: $3^{2x} = \\left(3^{x}\\right)^2$ by the power law, so the letter $y$ stands for $3^x$ each time it appears."
                },
                {
                  "step": "$(y - 81)(2y + 7) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 81$ or $y = -\\dfrac{7}{2}$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "The value $-\\dfrac{7}{2}$ is negative, so it is not a value of $3^x$.",
                  "reason": "Exponential function: the domain of $3^x$ is all real numbers and its range the positive numbers. A negative number is never a value of $3^x$."
                },
                {
                  "step": "$3^x = 3^{4}$",
                  "reason": "Substituting a letter and undoing it: $3^x$ is put back in place of $y$, and the value is written as a power of $3$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                }
              ]
            },
            {
              "prompt": "Solve $3^{2x} - 22 \\cdot 3^{x} - 135 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 3",
              "lines": [
                {
                  "step": "$3^{2x} - 22 \\cdot 3^{x} - 135 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = 3^x$: $y^2 - 22y - 135 = 0$",
                  "reason": "Quadratic in an expression: $3^{2x} = \\left(3^{x}\\right)^2$ by the power law, so the letter $y$ stands for $3^x$ each time it appears."
                },
                {
                  "step": "$(y - 27)(y + 5) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = 27$ or $y = -5$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "The value $-5$ is negative, so it is not a value of $3^x$.",
                  "reason": "Exponential function: the domain of $3^x$ is all real numbers and its range the positive numbers. A negative number is never a value of $3^x$."
                },
                {
                  "step": "$3^x = 3^{3}$",
                  "reason": "Substituting a letter and undoing it: $3^x$ is put back in place of $y$, and the value is written as a power of $3$."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                }
              ]
            },
            {
              "prompt": "Solve $9 \\cdot 9^{x} + 18 \\cdot 3^{x} - 7 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -1",
              "lines": [
                {
                  "step": "$9 \\cdot 9^{x} + 18 \\cdot 3^{x} - 7 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = 3^x$: $9y^2 + 18y - 7 = 0$",
                  "reason": "Quadratic in an expression: $9^{x} = \\left(3^{x}\\right)^2$ by the power law, so the letter $y$ stands for $3^x$ each time it appears."
                },
                {
                  "step": "$(3y - 1)(3y + 7) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $y = \\dfrac{1}{3}$ or $y = -\\dfrac{7}{3}$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "The value $-\\dfrac{7}{3}$ is negative, so it is not a value of $3^x$.",
                  "reason": "Exponential function: the domain of $3^x$ is all real numbers and its range the positive numbers. A negative number is never a value of $3^x$."
                },
                {
                  "step": "$3^x = 3^{-1}$",
                  "reason": "Substituting a letter and undoing it: $3^x$ is put back in place of $y$, and the value is written as a power of $3$."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t168-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the range of $f(x) = 8\\left(9^{x + 3} + 8\\right)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = 8\\left(9^{x + 3} + 8\\right)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For every real $x$, $9^{x + 3} > 0$, and $9^{x + 3}$ takes every positive value.",
                "reason": "Exponential function: the domain of $9^x$ is all real numbers and its range the positive numbers. Shifting the exponent by $3$ leaves every real exponent possible."
              },
              {
                "step": "So $9^{x + 3} + 8 > 8$, and it takes every value above $8$.",
                "reason": "Adding the same number, from arithmetic: $8$ is added."
              },
              {
                "step": "So $8\\left(9^{x + 3} + 8\\right) > 64$, and $f$ takes every value above $64$.",
                "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $8$."
              },
              {
                "step": "The range of $f$ is $(64, \\infty)$.",
                "reason": "Range: the outputs of $f$ form its range."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = 2\\left(3^{x} + 6\\right)$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(12, inf)",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 2\\left(3^{x} + 6\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For every real $x$, $3^{x} > 0$, and $3^{x}$ takes every positive value.",
                  "reason": "Exponential function: the domain of $3^x$ is all real numbers and its range the positive numbers."
                },
                {
                  "step": "So $3^{x} + 6 > 6$, and it takes every value above $6$.",
                  "reason": "Adding the same number, from arithmetic: $6$ is added."
                },
                {
                  "step": "So $2\\left(3^{x} + 6\\right) > 12$, and $f$ takes every value above $12$.",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $2$."
                },
                {
                  "step": "The range of $f$ is $(12, \\infty)$.",
                  "reason": "Range: the outputs of $f$ form its range."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 8\\left(3^{x + 2} - 6\\right)$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-48, inf)",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 8\\left(3^{x + 2} - 6\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For every real $x$, $3^{x + 2} > 0$, and $3^{x + 2}$ takes every positive value.",
                  "reason": "Exponential function: the domain of $3^x$ is all real numbers and its range the positive numbers. Shifting the exponent by $2$ leaves every real exponent possible."
                },
                {
                  "step": "So $3^{x + 2} - 6 > -6$, and it takes every value above $-6$.",
                  "reason": "Adding the same number, from arithmetic: $-6$ is added."
                },
                {
                  "step": "So $8\\left(3^{x + 2} - 6\\right) > -48$, and $f$ takes every value above $-48$.",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $8$."
                },
                {
                  "step": "The range of $f$ is $(-48, \\infty)$.",
                  "reason": "Range: the outputs of $f$ form its range."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 9\\left(9^{x} + 1\\right)$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(9, inf)",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 9\\left(9^{x} + 1\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For every real $x$, $9^{x} > 0$, and $9^{x}$ takes every positive value.",
                  "reason": "Exponential function: the domain of $9^x$ is all real numbers and its range the positive numbers."
                },
                {
                  "step": "So $9^{x} + 1 > 1$, and it takes every value above $1$.",
                  "reason": "Adding the same number, from arithmetic: $1$ is added."
                },
                {
                  "step": "So $9\\left(9^{x} + 1\\right) > 9$, and $f$ takes every value above $9$.",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $9$."
                },
                {
                  "step": "The range of $f$ is $(9, \\infty)$.",
                  "reason": "Range: the outputs of $f$ form its range."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = 7\\left(2 - 5^{x + 3}\\right)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = 7\\left(2 - 5^{x + 3}\\right)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For every real $x$, $5^{x + 3} > 0$, and $5^{x + 3}$ takes every positive value.",
                "reason": "Exponential function: the domain of $5^x$ is all real numbers and its range the positive numbers. Shifting the exponent by $3$ leaves every real exponent possible."
              },
              {
                "step": "So $-5^{x + 3} < 0$, and it takes every negative value.",
                "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-1$."
              },
              {
                "step": "So $2 - 5^{x + 3} < 2$, and it takes every value below $2$.",
                "reason": "Adding the same number, from arithmetic: $2$ is added."
              },
              {
                "step": "So $7\\left(2 - 5^{x + 3}\\right) < 14$, and $f$ takes every value below $14$.",
                "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $7$."
              },
              {
                "step": "The range of $f$ is $(-\\infty, 14)$.",
                "reason": "Range: the outputs of $f$ form its range."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = 5\\left(-4 - 2^{x}\\right)$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -20)",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 5\\left(-4 - 2^{x}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For every real $x$, $2^{x} > 0$, and $2^{x}$ takes every positive value.",
                  "reason": "Exponential function: the domain of $2^x$ is all real numbers and its range the positive numbers."
                },
                {
                  "step": "So $-2^{x} < 0$, and it takes every negative value.",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-1$."
                },
                {
                  "step": "So $-4 - 2^{x} < -4$, and it takes every value below $-4$.",
                  "reason": "Adding the same number, from arithmetic: $-4$ is added."
                },
                {
                  "step": "So $5\\left(-4 - 2^{x}\\right) < -20$, and $f$ takes every value below $-20$.",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $5$."
                },
                {
                  "step": "The range of $f$ is $(-\\infty, -20)$.",
                  "reason": "Range: the outputs of $f$ form its range."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 3\\left(-5 - 7^{x + 1}\\right)$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -15)",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 3\\left(-5 - 7^{x + 1}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For every real $x$, $7^{x + 1} > 0$, and $7^{x + 1}$ takes every positive value.",
                  "reason": "Exponential function: the domain of $7^x$ is all real numbers and its range the positive numbers. Shifting the exponent by $1$ leaves every real exponent possible."
                },
                {
                  "step": "So $-7^{x + 1} < 0$, and it takes every negative value.",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-1$."
                },
                {
                  "step": "So $-5 - 7^{x + 1} < -5$, and it takes every value below $-5$.",
                  "reason": "Adding the same number, from arithmetic: $-5$ is added."
                },
                {
                  "step": "So $3\\left(-5 - 7^{x + 1}\\right) < -15$, and $f$ takes every value below $-15$.",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $3$."
                },
                {
                  "step": "The range of $f$ is $(-\\infty, -15)$.",
                  "reason": "Range: the outputs of $f$ form its range."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 6\\left(-1 - 8^{x - 1}\\right)$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -6)",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 6\\left(-1 - 8^{x - 1}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For every real $x$, $8^{x - 1} > 0$, and $8^{x - 1}$ takes every positive value.",
                  "reason": "Exponential function: the domain of $8^x$ is all real numbers and its range the positive numbers. Shifting the exponent by $-1$ leaves every real exponent possible."
                },
                {
                  "step": "So $-8^{x - 1} < 0$, and it takes every negative value.",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-1$."
                },
                {
                  "step": "So $-1 - 8^{x - 1} < -1$, and it takes every value below $-1$.",
                  "reason": "Adding the same number, from arithmetic: $-1$ is added."
                },
                {
                  "step": "So $6\\left(-1 - 8^{x - 1}\\right) < -6$, and $f$ takes every value below $-6$.",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $6$."
                },
                {
                  "step": "The range of $f$ is $(-\\infty, -6)$.",
                  "reason": "Range: the outputs of $f$ form its range."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t168-k5",
      "forms": [
        {
          "example": {
            "problem": "Write a formula for the number $y$ of trees planted in year $n$, with $y$ alone on the left. In year 1, 28 trees are planted, and each year after it has 14 more than the year before.",
            "lines": [
              {
                "step": "Write a formula for the number $y$ of trees planted in year $n$, with $y$ alone on the left. In year 1, 28 trees are planted, and each year after it has 14 more than the year before.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Year 1: $28$, year 2: $28 + 14$, year 3: $28 + 2 \\cdot 14$.",
                "reason": "Linear growth: the same number $14$ is added each year."
              },
              {
                "step": "From year 1 to year $n$ the number $14$ is added $n - 1$ times.",
                "reason": "Linear growth: years 2 to $n$ each add $14$ once, and there are $n - 1$ of them."
              },
              {
                "step": "$y = 28 + 14(n - 1)$",
                "reason": "Writing a sentence as an equation: the first amount, then the amount added, in the sentence's order."
              },
              {
                "step": "$y = 28 + 14n - 14$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$y = 14n + 14$",
                "reason": "Collecting like terms: the two numbers are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write a formula for the number $y$ of bacteria after hour $n$, with $y$ alone on the left. After hour 1 a dish holds 28 bacteria, and each hour after it has 9 more than the hour before.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 9*n+19",
              "lines": [
                {
                  "step": "Write a formula for the number $y$ of bacteria after hour $n$, with $y$ alone on the left. After hour 1 a dish holds 28 bacteria, and each hour after it has 9 more than the hour before.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Hour 1: $28$, hour 2: $28 + 9$, hour 3: $28 + 2 \\cdot 9$.",
                  "reason": "Linear growth: the same number $9$ is added each hour."
                },
                {
                  "step": "From hour 1 to hour $n$ the number $9$ is added $n - 1$ times.",
                  "reason": "Linear growth: hours 2 to $n$ each add $9$ once, and there are $n - 1$ of them."
                },
                {
                  "step": "$y = 28 + 9(n - 1)$",
                  "reason": "Writing a sentence as an equation: the first amount, then the amount added, in the sentence's order."
                },
                {
                  "step": "$y = 28 + 9n - 9$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$y = 9n + 19$",
                  "reason": "Collecting like terms: the two numbers are added."
                }
              ]
            },
            {
              "prompt": "Write a formula for the number $y$ of tiles in step $n$ of a pattern, with $y$ alone on the left. Step 1 uses 2 tiles, and each step after it has 12 more than the step before.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 12*n-10",
              "lines": [
                {
                  "step": "Write a formula for the number $y$ of tiles in step $n$ of a pattern, with $y$ alone on the left. Step 1 uses 2 tiles, and each step after it has 12 more than the step before.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Step 1: $2$, step 2: $2 + 12$, step 3: $2 + 2 \\cdot 12$.",
                  "reason": "Linear growth: the same number $12$ is added each step."
                },
                {
                  "step": "From step 1 to step $n$ the number $12$ is added $n - 1$ times.",
                  "reason": "Linear growth: steps 2 to $n$ each add $12$ once, and there are $n - 1$ of them."
                },
                {
                  "step": "$y = 2 + 12(n - 1)$",
                  "reason": "Writing a sentence as an equation: the first amount, then the amount added, in the sentence's order."
                },
                {
                  "step": "$y = 2 + 12n - 12$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$y = 12n - 10$",
                  "reason": "Collecting like terms: the two numbers are added."
                }
              ]
            },
            {
              "prompt": "Write a formula for the number $y$ of members in week $n$, with $y$ alone on the left. A club has 24 members in week 1, and each week after it has 13 more than the week before.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 13*n+11",
              "lines": [
                {
                  "step": "Write a formula for the number $y$ of members in week $n$, with $y$ alone on the left. A club has 24 members in week 1, and each week after it has 13 more than the week before.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Week 1: $24$, week 2: $24 + 13$, week 3: $24 + 2 \\cdot 13$.",
                  "reason": "Linear growth: the same number $13$ is added each week."
                },
                {
                  "step": "From week 1 to week $n$ the number $13$ is added $n - 1$ times.",
                  "reason": "Linear growth: weeks 2 to $n$ each add $13$ once, and there are $n - 1$ of them."
                },
                {
                  "step": "$y = 24 + 13(n - 1)$",
                  "reason": "Writing a sentence as an equation: the first amount, then the amount added, in the sentence's order."
                },
                {
                  "step": "$y = 24 + 13n - 13$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$y = 13n + 11$",
                  "reason": "Collecting like terms: the two numbers are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write a formula for the number $y$ of dots in figure $n$, with $y$ alone on the left. Figure 1 has 30 dots, and each figure after it has twice as many as the figure before.",
            "lines": [
              {
                "step": "Write a formula for the number $y$ of dots in figure $n$, with $y$ alone on the left. Figure 1 has 30 dots, and each figure after it has twice as many as the figure before.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Figure 1: $30$, figure 2: $30 \\cdot 2$, figure 3: $30 \\cdot 2^2$.",
                "reason": "Exponential growth: the amount is multiplied by the same number $2$ each figure."
              },
              {
                "step": "From figure 1 to figure $n$ the amount is multiplied by $2$, $n - 1$ times.",
                "reason": "Exponential growth: figures 2 to $n$ each multiply by $2$ once, and there are $n - 1$ of them."
              },
              {
                "step": "$y = 30 \\cdot 2^{n - 1}$",
                "reason": "Writing a sentence as an equation: the first amount, then the factor used $n - 1$ times as a power, in the sentence's order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write a formula for the number $y$ of pages read on day $n$, with $y$ alone on the left. On day 1, 18 pages are read, and each day after it has four times as many as the day before.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 18*4^(n-1)",
              "lines": [
                {
                  "step": "Write a formula for the number $y$ of pages read on day $n$, with $y$ alone on the left. On day 1, 18 pages are read, and each day after it has four times as many as the day before.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Day 1: $18$, day 2: $18 \\cdot 4$, day 3: $18 \\cdot 4^2$.",
                  "reason": "Exponential growth: the amount is multiplied by the same number $4$ each day."
                },
                {
                  "step": "From day 1 to day $n$ the amount is multiplied by $4$, $n - 1$ times.",
                  "reason": "Exponential growth: days 2 to $n$ each multiply by $4$ once, and there are $n - 1$ of them."
                },
                {
                  "step": "$y = 18 \\cdot 4^{n - 1}$",
                  "reason": "Writing a sentence as an equation: the first amount, then the factor used $n - 1$ times as a power, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write a formula for the number $y$ of trees planted in year $n$, with $y$ alone on the left. In year 1, 7 trees are planted, and each year after it has twice as many as the year before.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 7*2^(n-1)",
              "lines": [
                {
                  "step": "Write a formula for the number $y$ of trees planted in year $n$, with $y$ alone on the left. In year 1, 7 trees are planted, and each year after it has twice as many as the year before.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Year 1: $7$, year 2: $7 \\cdot 2$, year 3: $7 \\cdot 2^2$.",
                  "reason": "Exponential growth: the amount is multiplied by the same number $2$ each year."
                },
                {
                  "step": "From year 1 to year $n$ the amount is multiplied by $2$, $n - 1$ times.",
                  "reason": "Exponential growth: years 2 to $n$ each multiply by $2$ once, and there are $n - 1$ of them."
                },
                {
                  "step": "$y = 7 \\cdot 2^{n - 1}$",
                  "reason": "Writing a sentence as an equation: the first amount, then the factor used $n - 1$ times as a power, in the sentence's order."
                }
              ]
            },
            {
              "prompt": "Write a formula for the number $y$ of tiles in step $n$ of a pattern, with $y$ alone on the left. Step 1 uses 15 tiles, and each step after it has three times as many as the step before.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 15*3^(n-1)",
              "lines": [
                {
                  "step": "Write a formula for the number $y$ of tiles in step $n$ of a pattern, with $y$ alone on the left. Step 1 uses 15 tiles, and each step after it has three times as many as the step before.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Step 1: $15$, step 2: $15 \\cdot 3$, step 3: $15 \\cdot 3^2$.",
                  "reason": "Exponential growth: the amount is multiplied by the same number $3$ each step."
                },
                {
                  "step": "From step 1 to step $n$ the amount is multiplied by $3$, $n - 1$ times.",
                  "reason": "Exponential growth: steps 2 to $n$ each multiply by $3$ once, and there are $n - 1$ of them."
                },
                {
                  "step": "$y = 15 \\cdot 3^{n - 1}$",
                  "reason": "Writing a sentence as an equation: the first amount, then the factor used $n - 1$ times as a power, in the sentence's order."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t168-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $81^{x - 3} = 9^{-2x + 1}$, and write that line right.",
            "given": [
              "$81^{x - 3} = 9^{-2x + 1}$",
              "$3^{x + 1} = 9^{-2x + 1}$",
              "$3^{x + 1} = 3^{2(-2x + 1)}$",
              "$x + 1 = -4x + 2$",
              "$5x = 1$",
              "$x = \\dfrac{1}{5}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $81^{x - 3} = 9^{-2x + 1}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 writes $81^{x - 3}$ as $3^{x + 1}$: it adds the exponents $4$ and $x - 3$.",
                "reason": "Power law: $81 = 3^{4}$, and a power of a power multiplies the exponents, $(a^m)^n = a^{mn}$; it never adds them."
              },
              {
                "step": "Line 2 written right is $3^{4(x - 3)} = 9^{-2x + 1}$.",
                "reason": "Power law: $81^{x - 3} = \\left(3^{4}\\right)^{x - 3} = 3^{4(x - 3)}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $8^{3x - 5} = 64^{-2x + 4}$, and write that line right.",
              "given": [
                "$8^{3x - 5} = 64^{-2x + 4}$",
                "$2^{3(3x - 5)} = 64^{-2x + 4}$",
                "$2^{3(3x - 5)} = 2^{-2x + 10}$",
                "$9x - 15 = -2x + 10$",
                "$11x = 25$",
                "$x = \\dfrac{25}{11}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2^(3*(3*x-5)) = 2^(6*(-2*x+4))",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $8^{3x - 5} = 64^{-2x + 4}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $64^{-2x + 4}$ as $2^{-2x + 10}$: it adds the exponents $6$ and $-2x + 4$.",
                  "reason": "Power law: $64 = 2^{6}$, and a power of a power multiplies the exponents, $(a^m)^n = a^{mn}$; it never adds them."
                },
                {
                  "step": "Line 3 written right is $2^{3(3x - 5)} = 2^{6(-2x + 4)}$.",
                  "reason": "Power law: $64^{-2x + 4} = \\left(2^{6}\\right)^{-2x + 4} = 2^{6(-2x + 4)}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $27^{x + 1} = 9^{-2x + 3}$, and write that line right.",
              "given": [
                "$27^{x + 1} = 9^{-2x + 3}$",
                "$3^{3(x + 1)} = 9^{-2x + 3}$",
                "$3^{3(x + 1)} = 3^{-2x + 5}$",
                "$3x + 3 = -2x + 5$",
                "$5x = 2$",
                "$x = \\dfrac{2}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 3^(3*(x+1)) = 3^(2*(-2*x+3))",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $27^{x + 1} = 9^{-2x + 3}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $9^{-2x + 3}$ as $3^{-2x + 5}$: it adds the exponents $2$ and $-2x + 3$.",
                  "reason": "Power law: $9 = 3^{2}$, and a power of a power multiplies the exponents, $(a^m)^n = a^{mn}$; it never adds them."
                },
                {
                  "step": "Line 3 written right is $3^{3(x + 1)} = 3^{2(-2x + 3)}$.",
                  "reason": "Power law: $9^{-2x + 3} = \\left(3^{2}\\right)^{-2x + 3} = 3^{2(-2x + 3)}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $25^{3x - 3} = 125^{-2x - 1}$, and write that line right.",
              "given": [
                "$25^{3x - 3} = 125^{-2x - 1}$",
                "$5^{3x - 1} = 125^{-2x - 1}$",
                "$5^{3x - 1} = 5^{3(-2x - 1)}$",
                "$3x - 1 = -6x - 3$",
                "$9x = -2$",
                "$x = -\\dfrac{2}{9}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 5^(2*(3*x-3)) = 125^(-2*x-1)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $25^{3x - 3} = 125^{-2x - 1}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $25^{3x - 3}$ as $5^{3x - 1}$: it adds the exponents $2$ and $3x - 3$.",
                  "reason": "Power law: $25 = 5^{2}$, and a power of a power multiplies the exponents, $(a^m)^n = a^{mn}$; it never adds them."
                },
                {
                  "step": "Line 2 written right is $5^{2(3x - 3)} = 125^{-2x - 1}$.",
                  "reason": "Power law: $25^{3x - 3} = \\left(5^{2}\\right)^{3x - 3} = 5^{2(3x - 3)}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t168-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = 7 \\cdot 6^{x} - 42$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = 7 \\cdot 6^{x} - 42$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $x = 0$: $7 \\cdot 6^{0} - 42 = -35$, so the graph crosses the $y$-axis at $(0, -35)$.",
                "reason": "Zero exponent: $a^0 = 1$, so $6^0 = 1$."
              },
              {
                "step": "At $y = 0$, the equation $7 \\cdot 6^{x} - 42 = 0$ gives $6^x = 6 = 6^{1}$, so the graph crosses the $x$-axis at $(1, 0)$.",
                "reason": "Adding the same number to both sides and dividing both sides by a nonzero number give $6^x = 6$. Equal powers of one base have equal exponents: both sides are powers of $6$, so their exponents are equal. So $x = 1$."
              },
              {
                "step": "Far to the left $6^x$ is close to 0, so $y$ is close to $-42$: the graph comes closer and closer to the line $y = -42$ and never meets it.",
                "reason": "Asymptote: the graph of $6^x$ has the asymptote $y = 0$, so far to the left $6^x$ is close to 0 and never 0, and the line $y = -42$ is an asymptote of this graph."
              },
              {
                "step": "The curve through these points, which rises from the line $y = -42$ on the left and stays above it, is the graph.",
                "reason": "Substituting a value: $x = 1$ gives $y = 0$, above the value $-35$ at $x = 0$; and $7 \\cdot 6^x$ is positive for every $x$, since the range of $6^x$ is the positive numbers.",
                "figure": {
                  "file": "exponential-functions-and-equations-1.svg",
                  "alt": "A curve rises from left to right, coming close to the dashed line y = −42 on the left, crossing the y-axis at (0, −35) and the x-axis at (1, 0)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = 5 \\cdot 4^{x} - 80$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -75)$",
                  "$(2, 0)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$y = -80$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 5 \\cdot 4^{x} - 80$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$: $5 \\cdot 4^{0} - 80 = -75$, so the graph crosses the $y$-axis at $(0, -75)$.",
                  "reason": "Zero exponent: $a^0 = 1$, so $4^0 = 1$."
                },
                {
                  "step": "At $y = 0$, the equation $5 \\cdot 4^{x} - 80 = 0$ gives $4^x = 16 = 4^{2}$, so the graph crosses the $x$-axis at $(2, 0)$.",
                  "reason": "Adding the same number to both sides and dividing both sides by a nonzero number give $4^x = 16$. Equal powers of one base have equal exponents: both sides are powers of $4$, so their exponents are equal. So $x = 2$."
                },
                {
                  "step": "Far to the left $4^x$ is close to 0, so $y$ is close to $-80$: the graph comes closer and closer to the line $y = -80$ and never meets it.",
                  "reason": "Asymptote: the graph of $4^x$ has the asymptote $y = 0$, so far to the left $4^x$ is close to 0 and never 0, and the line $y = -80$ is an asymptote of this graph."
                },
                {
                  "step": "The curve through these points, which rises from the line $y = -80$ on the left and stays above it, is the graph.",
                  "reason": "Substituting a value: $x = 1$ gives $y = -60$, above the value $-75$ at $x = 0$; and $5 \\cdot 4^x$ is positive for every $x$, since the range of $4^x$ is the positive numbers.",
                  "figure": {
                    "file": "exponential-functions-and-equations-2.svg",
                    "alt": "A curve rises from left to right, coming close to the dashed line y = −80 on the left, crossing the y-axis at (0, −75) and the x-axis at (2, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 7 \\cdot 3^{x} - 21$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -14)$",
                  "$(1, 0)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$y = -21$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 7 \\cdot 3^{x} - 21$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$: $7 \\cdot 3^{0} - 21 = -14$, so the graph crosses the $y$-axis at $(0, -14)$.",
                  "reason": "Zero exponent: $a^0 = 1$, so $3^0 = 1$."
                },
                {
                  "step": "At $y = 0$, the equation $7 \\cdot 3^{x} - 21 = 0$ gives $3^x = 3 = 3^{1}$, so the graph crosses the $x$-axis at $(1, 0)$.",
                  "reason": "Adding the same number to both sides and dividing both sides by a nonzero number give $3^x = 3$. Equal powers of one base have equal exponents: both sides are powers of $3$, so their exponents are equal. So $x = 1$."
                },
                {
                  "step": "Far to the left $3^x$ is close to 0, so $y$ is close to $-21$: the graph comes closer and closer to the line $y = -21$ and never meets it.",
                  "reason": "Asymptote: the graph of $3^x$ has the asymptote $y = 0$, so far to the left $3^x$ is close to 0 and never 0, and the line $y = -21$ is an asymptote of this graph."
                },
                {
                  "step": "The curve through these points, which rises from the line $y = -21$ on the left and stays above it, is the graph.",
                  "reason": "Substituting a value: $x = 1$ gives $y = 0$, above the value $-14$ at $x = 0$; and $7 \\cdot 3^x$ is positive for every $x$, since the range of $3^x$ is the positive numbers.",
                  "figure": {
                    "file": "exponential-functions-and-equations-3.svg",
                    "alt": "A curve rises from left to right, coming close to the dashed line y = −21 on the left, crossing the y-axis at (0, −14) and the x-axis at (1, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 6 \\cdot 2^{x} - 3$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 3)$",
                  "$(-1, 0)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$y = -3$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 6 \\cdot 2^{x} - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$: $6 \\cdot 2^{0} - 3 = 3$, so the graph crosses the $y$-axis at $(0, 3)$.",
                  "reason": "Zero exponent: $a^0 = 1$, so $2^0 = 1$."
                },
                {
                  "step": "At $y = 0$, the equation $6 \\cdot 2^{x} - 3 = 0$ gives $2^x = \\dfrac{1}{2} = 2^{-1}$, so the graph crosses the $x$-axis at $(-1, 0)$.",
                  "reason": "Adding the same number to both sides and dividing both sides by a nonzero number give $2^x = \\dfrac{1}{2}$. Equal powers of one base have equal exponents: both sides are powers of $2$, so their exponents are equal. So $x = -1$."
                },
                {
                  "step": "Far to the left $2^x$ is close to 0, so $y$ is close to $-3$: the graph comes closer and closer to the line $y = -3$ and never meets it.",
                  "reason": "Asymptote: the graph of $2^x$ has the asymptote $y = 0$, so far to the left $2^x$ is close to 0 and never 0, and the line $y = -3$ is an asymptote of this graph."
                },
                {
                  "step": "The curve through these points, which rises from the line $y = -3$ on the left and stays above it, is the graph.",
                  "reason": "Substituting a value: $x = 1$ gives $y = 9$, above the value $3$ at $x = 0$; and $6 \\cdot 2^x$ is positive for every $x$, since the range of $2^x$ is the positive numbers.",
                  "figure": {
                    "file": "exponential-functions-and-equations-4.svg",
                    "alt": "A curve rises from left to right, coming close to the dashed line y = −3 on the left, crossing the y-axis at (0, 3) and the x-axis at (−1, 0)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = 5 \\cdot 5^{x} + 1$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = 5 \\cdot 5^{x} + 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $x = 0$: $5 \\cdot 5^{0} + 1 = 6$, so the graph crosses the $y$-axis at $(0, 6)$.",
                "reason": "Zero exponent: $a^0 = 1$, so $5^0 = 1$."
              },
              {
                "step": "At $y = 0$, the equation $5 \\cdot 5^{x} + 1 = 0$ would need $5^x = -\\dfrac{1}{5}$, so the graph never meets the $x$-axis.",
                "reason": "Exponential function: the domain of $5^x$ is all real numbers and its range the positive numbers. A negative number is never a value of $5^x$."
              },
              {
                "step": "Far to the left $5^x$ is close to 0, so $y$ is close to $1$: the graph comes closer and closer to the line $y = 1$ and never meets it.",
                "reason": "Asymptote: the graph of $5^x$ has the asymptote $y = 0$, so far to the left $5^x$ is close to 0 and never 0, and the line $y = 1$ is an asymptote of this graph."
              },
              {
                "step": "The curve through these points, which rises from the line $y = 1$ on the left and stays above it, is the graph.",
                "reason": "Substituting a value: $x = 1$ gives $y = 26$, above the value $6$ at $x = 0$; and $5 \\cdot 5^x$ is positive for every $x$, since the range of $5^x$ is the positive numbers.",
                "figure": {
                  "file": "exponential-functions-and-equations-12.svg",
                  "alt": "A curve rises from left to right, coming close to the dashed line y = 1 on the left, crossing the y-axis at (0, 6) and never meeting the x-axis."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = 9 \\cdot 6^{x} + 10$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 19)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$y = 10$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 9 \\cdot 6^{x} + 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$: $9 \\cdot 6^{0} + 10 = 19$, so the graph crosses the $y$-axis at $(0, 19)$.",
                  "reason": "Zero exponent: $a^0 = 1$, so $6^0 = 1$."
                },
                {
                  "step": "At $y = 0$, the equation $9 \\cdot 6^{x} + 10 = 0$ would need $6^x = -\\dfrac{10}{9}$, so the graph never meets the $x$-axis.",
                  "reason": "Exponential function: the domain of $6^x$ is all real numbers and its range the positive numbers. A negative number is never a value of $6^x$."
                },
                {
                  "step": "Far to the left $6^x$ is close to 0, so $y$ is close to $10$: the graph comes closer and closer to the line $y = 10$ and never meets it.",
                  "reason": "Asymptote: the graph of $6^x$ has the asymptote $y = 0$, so far to the left $6^x$ is close to 0 and never 0, and the line $y = 10$ is an asymptote of this graph."
                },
                {
                  "step": "The curve through these points, which rises from the line $y = 10$ on the left and stays above it, is the graph.",
                  "reason": "Substituting a value: $x = 1$ gives $y = 64$, above the value $19$ at $x = 0$; and $9 \\cdot 6^x$ is positive for every $x$, since the range of $6^x$ is the positive numbers.",
                  "figure": {
                    "file": "exponential-functions-and-equations-13.svg",
                    "alt": "A curve rises from left to right, coming close to the dashed line y = 10 on the left, crossing the y-axis at (0, 19) and never meeting the x-axis."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 2 \\cdot 7^{x} + 14$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 16)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$y = 14$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 2 \\cdot 7^{x} + 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$: $2 \\cdot 7^{0} + 14 = 16$, so the graph crosses the $y$-axis at $(0, 16)$.",
                  "reason": "Zero exponent: $a^0 = 1$, so $7^0 = 1$."
                },
                {
                  "step": "At $y = 0$, the equation $2 \\cdot 7^{x} + 14 = 0$ would need $7^x = -7$, so the graph never meets the $x$-axis.",
                  "reason": "Exponential function: the domain of $7^x$ is all real numbers and its range the positive numbers. A negative number is never a value of $7^x$."
                },
                {
                  "step": "Far to the left $7^x$ is close to 0, so $y$ is close to $14$: the graph comes closer and closer to the line $y = 14$ and never meets it.",
                  "reason": "Asymptote: the graph of $7^x$ has the asymptote $y = 0$, so far to the left $7^x$ is close to 0 and never 0, and the line $y = 14$ is an asymptote of this graph."
                },
                {
                  "step": "The curve through these points, which rises from the line $y = 14$ on the left and stays above it, is the graph.",
                  "reason": "Substituting a value: $x = 1$ gives $y = 28$, above the value $16$ at $x = 0$; and $2 \\cdot 7^x$ is positive for every $x$, since the range of $7^x$ is the positive numbers.",
                  "figure": {
                    "file": "exponential-functions-and-equations-14.svg",
                    "alt": "A curve rises from left to right, coming close to the dashed line y = 14 on the left, crossing the y-axis at (0, 16) and never meeting the x-axis."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -8 \\cdot 6^{x} - 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -9)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$y = -1$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -8 \\cdot 6^{x} - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$: $-8 \\cdot 6^{0} - 1 = -9$, so the graph crosses the $y$-axis at $(0, -9)$.",
                  "reason": "Zero exponent: $a^0 = 1$, so $6^0 = 1$."
                },
                {
                  "step": "At $y = 0$, the equation $-8 \\cdot 6^{x} - 1 = 0$ would need $6^x = -\\dfrac{1}{8}$, so the graph never meets the $x$-axis.",
                  "reason": "Exponential function: the domain of $6^x$ is all real numbers and its range the positive numbers. A negative number is never a value of $6^x$."
                },
                {
                  "step": "Far to the left $6^x$ is close to 0, so $y$ is close to $-1$: the graph comes closer and closer to the line $y = -1$ and never meets it.",
                  "reason": "Asymptote: the graph of $6^x$ has the asymptote $y = 0$, so far to the left $6^x$ is close to 0 and never 0, and the line $y = -1$ is an asymptote of this graph."
                },
                {
                  "step": "The curve through these points, which falls from the line $y = -1$ on the left and stays below it, is the graph.",
                  "reason": "Substituting a value: $x = 1$ gives $y = -49$, below the value $-9$ at $x = 0$; and $-8 \\cdot 6^x$ is negative for every $x$, since the range of $6^x$ is the positive numbers.",
                  "figure": {
                    "file": "exponential-functions-and-equations-15.svg",
                    "alt": "A curve falls from left to right, coming close to the dashed line y = −1 on the left, crossing the y-axis at (0, −9) and never meeting the x-axis."
                  }
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
