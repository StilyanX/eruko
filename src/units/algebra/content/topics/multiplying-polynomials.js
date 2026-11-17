export default {
  "number": 167,
  "title": "Multiplying polynomials",
  "section": 11,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "516-521"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the leading term of $(-3x^4 - 7 - 4x^2)(-5x^2 + 6x + 6)(3x^3 - 3)$, without multiplying out.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "45*x^9",
    "solution": [
      "Find the leading term of $(-3x^4 - 7 - 4x^2)(-5x^2 + 6x + 6)(3x^3 - 3)$, without multiplying out.",
      "The leading terms of the factors are $-3x^4$, $-5x^2$ and $3x^3$.",
      "$(-3x^4) \\cdot (-5x^2) \\cdot 3x^3 = 45x^9$",
      "The leading term of the product is $45x^9$."
    ]
  },
  "ideas": [
    {
      "name": "Multiplying polynomials",
      "concrete": "In $(2x^2 - 3)(x^3 + 4x - 5)$ each of the two terms of the first factor meets each of the three terms of the second, which gives the six products $2x^5$, $8x^3$, $-10x^2$, $-3x^3$, $-12x$ and $15$. Collected, $(2x^2 - 3)(x^3 + 4x - 5) = 2x^5 + 5x^3 - 10x^2 - 12x + 15$. The degrees of the factors are $2$ and $3$, and the product has degree $5$. Its leading term $2x^5$ is $2x^2 \\cdot x^3$, and its constant term $15$ is $(-3) \\cdot (-5)$. Its term $5x^3$ comes from the two products $2x^2 \\cdot 4x$ and $(-3) \\cdot x^3$.",
      "general": "For nonzero polynomials $f$ and $g$: the **degree of a product is the sum of the degrees**, $\\deg(fg) = \\deg f + \\deg g$; **the leading term of a product is the product of the leading terms**; **the constant term of a product is the product of the constant terms**; and **each term of a product comes from one term of each factor**: the term of $f(x)g(x)$ in $x^k$ is the sum of the products of a term of $f$ in $x^i$ and a term of $g$ in $x^j$ with $i + j = k$."
    }
  ],
  "kinds": [
    {
      "id": "t167-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the leading term of $(-4x^5 - 2x^2 + 3)(-2x^2 - 2)(7 - 2x^2 + 2x^4)$, without multiplying out.",
            "lines": [
              {
                "step": "Find the leading term of $(-4x^5 - 2x^2 + 3)(-2x^2 - 2)(7 - 2x^2 + 2x^4)$, without multiplying out.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The leading terms of the factors are $-4x^5$, $-2x^2$ and $2x^4$.",
                "reason": "Leading term: the leading term of a polynomial is its term with the highest power of $x$, wherever it stands in the sum."
              },
              {
                "step": "$(-4x^5) \\cdot (-2x^2) \\cdot 2x^4 = 16x^{11}$",
                "reason": "Product law: the coefficients multiply, with the signs of products from arithmetic, and the exponents of the powers of $x$ add."
              },
              {
                "step": "The leading term of the product is $16x^{11}$.",
                "reason": "The leading term of a product is the product of the leading terms: no factor is the zero polynomial, so the product of the leading terms is not zero and no other product reaches its power."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the leading term of $(4 - 3x^2 + 3x^5)(-7x^5 + x^2 - 6)$, without multiplying out.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-21*x^10",
              "lines": [
                {
                  "step": "Find the leading term of $(4 - 3x^2 + 3x^5)(-7x^5 + x^2 - 6)$, without multiplying out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The leading terms of the factors are $3x^5$ and $-7x^5$.",
                  "reason": "Leading term: the leading term of a polynomial is its term with the highest power of $x$, wherever it stands in the sum."
                },
                {
                  "step": "$3x^5 \\cdot (-7x^5) = -21x^{10}$",
                  "reason": "Product law: the coefficients multiply, with the signs of products from arithmetic, and the exponents of the powers of $x$ add."
                },
                {
                  "step": "The leading term of the product is $-21x^{10}$.",
                  "reason": "The leading term of a product is the product of the leading terms: no factor is the zero polynomial, so the product of the leading terms is not zero and no other product reaches its power."
                }
              ]
            },
            {
              "prompt": "Find the leading term of $(-7 - 4x^2 + 6x^4)(-4x^5 + 7 - x^2)$, without multiplying out.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-24*x^9",
              "lines": [
                {
                  "step": "Find the leading term of $(-7 - 4x^2 + 6x^4)(-4x^5 + 7 - x^2)$, without multiplying out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The leading terms of the factors are $6x^4$ and $-4x^5$.",
                  "reason": "Leading term: the leading term of a polynomial is its term with the highest power of $x$, wherever it stands in the sum."
                },
                {
                  "step": "$6x^4 \\cdot (-4x^5) = -24x^9$",
                  "reason": "Product law: the coefficients multiply, with the signs of products from arithmetic, and the exponents of the powers of $x$ add."
                },
                {
                  "step": "The leading term of the product is $-24x^9$.",
                  "reason": "The leading term of a product is the product of the leading terms: no factor is the zero polynomial, so the product of the leading terms is not zero and no other product reaches its power."
                }
              ]
            },
            {
              "prompt": "Find the leading term of $(6x^2 + 7x + 5)(2x^4 + 2 + 7x^2)(3 + 7x^3)$, without multiplying out.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "84*x^9",
              "lines": [
                {
                  "step": "Find the leading term of $(6x^2 + 7x + 5)(2x^4 + 2 + 7x^2)(3 + 7x^3)$, without multiplying out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The leading terms of the factors are $6x^2$, $2x^4$ and $7x^3$.",
                  "reason": "Leading term: the leading term of a polynomial is its term with the highest power of $x$, wherever it stands in the sum."
                },
                {
                  "step": "$6x^2 \\cdot 2x^4 \\cdot 7x^3 = 84x^9$",
                  "reason": "Product law: the coefficients multiply, with the signs of products from arithmetic, and the exponents of the powers of $x$ add."
                },
                {
                  "step": "The leading term of the product is $84x^9$.",
                  "reason": "The leading term of a product is the product of the leading terms: no factor is the zero polynomial, so the product of the leading terms is not zero and no other product reaches its power."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the constant term of $(-3 - 4x)(7x^4 + 6x^2 - 6)(5x - 3)$, without multiplying out.",
            "lines": [
              {
                "step": "Find the constant term of $(-3 - 4x)(7x^4 + 6x^2 - 6)(5x - 3)$, without multiplying out.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The constant terms of the factors are $-3$, $-6$ and $-3$.",
                "reason": "Constant term: the constant term of a polynomial is its term with no power of $x$ in it."
              },
              {
                "step": "$(-3) \\cdot (-6) \\cdot (-3) = -54$",
                "reason": "Signs of products, from arithmetic: a product of an even number of negative numbers is positive, and of an odd number negative."
              },
              {
                "step": "The constant term of the product is $-54$.",
                "reason": "The constant term of a product is the product of the constant terms: each other product holds a power of $x$ from at least one factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant term of $(3x^2 - 2)(2x^3 - 4)(5x^3 + 2)$, without multiplying out.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find the constant term of $(3x^2 - 2)(2x^3 - 4)(5x^3 + 2)$, without multiplying out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The constant terms of the factors are $-2$, $-4$ and $2$.",
                  "reason": "Constant term: the constant term of a polynomial is its term with no power of $x$ in it."
                },
                {
                  "step": "$(-2) \\cdot (-4) \\cdot 2 = 16$",
                  "reason": "Signs of products, from arithmetic: a product of an even number of negative numbers is positive, and of an odd number negative."
                },
                {
                  "step": "The constant term of the product is $16$.",
                  "reason": "The constant term of a product is the product of the constant terms: each other product holds a power of $x$ from at least one factor."
                }
              ]
            },
            {
              "prompt": "Find the constant term of $(7x^4 + 2x^2 - 4)(-4x^3 - 5)$, without multiplying out.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the constant term of $(7x^4 + 2x^2 - 4)(-4x^3 - 5)$, without multiplying out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The constant terms of the factors are $-4$ and $-5$.",
                  "reason": "Constant term: the constant term of a polynomial is its term with no power of $x$ in it."
                },
                {
                  "step": "$(-4) \\cdot (-5) = 20$",
                  "reason": "Signs of products, from arithmetic: a product of an even number of negative numbers is positive, and of an odd number negative."
                },
                {
                  "step": "The constant term of the product is $20$.",
                  "reason": "The constant term of a product is the product of the constant terms: each other product holds a power of $x$ from at least one factor."
                }
              ]
            },
            {
              "prompt": "Find the constant term of $(7x^3 - 5x + 3)(-4x^4 + 3x^2 + 4)(-7 + 3x^2 - 6x^5)$, without multiplying out.",
              "form": "Answer as an integer.",
              "answer": "-84",
              "lines": [
                {
                  "step": "Find the constant term of $(7x^3 - 5x + 3)(-4x^4 + 3x^2 + 4)(-7 + 3x^2 - 6x^5)$, without multiplying out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The constant terms of the factors are $3$, $4$ and $-7$.",
                  "reason": "Constant term: the constant term of a polynomial is its term with no power of $x$ in it."
                },
                {
                  "step": "$3 \\cdot 4 \\cdot (-7) = -84$",
                  "reason": "Signs of products, from arithmetic: a product of an even number of negative numbers is positive, and of an odd number negative."
                },
                {
                  "step": "The constant term of the product is $-84$.",
                  "reason": "The constant term of a product is the product of the constant terms: each other product holds a power of $x$ from at least one factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the leading term of a polynomial $f(x)$ with $(4x^2 + 7) \\cdot f(x) = -16x^4 + 12x^3 - 48x^2 + 21x - 35$.",
            "lines": [
              {
                "step": "Find the leading term of a polynomial $f(x)$ with $(4x^2 + 7) \\cdot f(x) = -16x^4 + 12x^3 - 48x^2 + 21x - 35$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The degree of $f(x)$ is $4 - 2 = 2$.",
                "reason": "Degree of a product is the sum of the degrees: the right side has degree $4$ and the bracket degree $2$."
              },
              {
                "step": "The leading term of $f(x)$ is $ax^2$ for a number $a$, with $4x^2 \\cdot ax^2 = -16x^4$.",
                "reason": "The leading term of a product is the product of the leading terms: the leading term of the bracket times the leading term of $f(x)$ is the leading term of the right side."
              },
              {
                "step": "$4a = -16$",
                "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^4$ on the two sides are equal."
              },
              {
                "step": "$a = -4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
              },
              {
                "step": "The leading term of $f(x)$ is $-4x^2$.",
                "reason": "Substituting a value: the number found goes in place of $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the leading term of a polynomial $f(x)$ with $(2x^2 + 6) \\cdot f(x) = -6x^5 - 22x^3 - 14x^2 - 12x - 42$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-3*x^3",
              "lines": [
                {
                  "step": "Find the leading term of a polynomial $f(x)$ with $(2x^2 + 6) \\cdot f(x) = -6x^5 - 22x^3 - 14x^2 - 12x - 42$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The degree of $f(x)$ is $5 - 2 = 3$.",
                  "reason": "Degree of a product is the sum of the degrees: the right side has degree $5$ and the bracket degree $2$."
                },
                {
                  "step": "The leading term of $f(x)$ is $ax^3$ for a number $a$, with $2x^2 \\cdot ax^3 = -6x^5$.",
                  "reason": "The leading term of a product is the product of the leading terms: the leading term of the bracket times the leading term of $f(x)$ is the leading term of the right side."
                },
                {
                  "step": "$2a = -6$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^5$ on the two sides are equal."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "The leading term of $f(x)$ is $-3x^3$.",
                  "reason": "Substituting a value: the number found goes in place of $a$."
                }
              ]
            },
            {
              "prompt": "Find the leading term of a polynomial $f(x)$ with $(-7x + 4) \\cdot f(x) = -35x^5 + 20x^4 + 14x^2 - 43x + 20$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "5*x^4",
              "lines": [
                {
                  "step": "Find the leading term of a polynomial $f(x)$ with $(-7x + 4) \\cdot f(x) = -35x^5 + 20x^4 + 14x^2 - 43x + 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The degree of $f(x)$ is $5 - 1 = 4$.",
                  "reason": "Degree of a product is the sum of the degrees: the right side has degree $5$ and the bracket degree $1$."
                },
                {
                  "step": "The leading term of $f(x)$ is $ax^4$ for a number $a$, with $-7x \\cdot ax^4 = -35x^5$.",
                  "reason": "The leading term of a product is the product of the leading terms: the leading term of the bracket times the leading term of $f(x)$ is the leading term of the right side."
                },
                {
                  "step": "$-7a = -35$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^5$ on the two sides are equal."
                },
                {
                  "step": "$a = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$."
                },
                {
                  "step": "The leading term of $f(x)$ is $5x^4$.",
                  "reason": "Substituting a value: the number found goes in place of $a$."
                }
              ]
            },
            {
              "prompt": "Find the leading term of a polynomial $f(x)$ with $(7x - 3) \\cdot f(x) = 35x^3 - 8x^2 + 18x - 9$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "5*x^2",
              "lines": [
                {
                  "step": "Find the leading term of a polynomial $f(x)$ with $(7x - 3) \\cdot f(x) = 35x^3 - 8x^2 + 18x - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The degree of $f(x)$ is $3 - 1 = 2$.",
                  "reason": "Degree of a product is the sum of the degrees: the right side has degree $3$ and the bracket degree $1$."
                },
                {
                  "step": "The leading term of $f(x)$ is $ax^2$ for a number $a$, with $7x \\cdot ax^2 = 35x^3$.",
                  "reason": "The leading term of a product is the product of the leading terms: the leading term of the bracket times the leading term of $f(x)$ is the leading term of the right side."
                },
                {
                  "step": "$7a = 35$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^3$ on the two sides are equal."
                },
                {
                  "step": "$a = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "The leading term of $f(x)$ is $5x^2$.",
                  "reason": "Substituting a value: the number found goes in place of $a$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the degree of $f(g(x))$ for $f(x) = 7x^3 + 5$ and $g(x) = -7x^3 + 2x^2 - 3$.",
            "lines": [
              {
                "step": "Find the degree of $f(g(x))$ for $f(x) = 7x^3 + 5$ and $g(x) = -7x^3 + 2x^2 - 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(g(x)) = 7(g(x))^3 + 5$",
                "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$, so $g(x)$ goes in place of $x$ in each term of $f$."
              },
              {
                "step": "The power $(g(x))^3 = g(x) \\cdot g(x) \\cdot g(x)$ has degree $3 + 3 + 3 = 9$.",
                "reason": "Degree of a product is the sum of the degrees: each of the $3$ factors has degree $3$."
              },
              {
                "step": "The other terms of $f(g(x))$ have degree at most $0$, which is less than $9$.",
                "reason": "Degree of a product is the sum of the degrees: a lower power of $g(x)$ has fewer factors of degree $3$, and a number has degree $0$."
              },
              {
                "step": "The degree of $f(g(x))$ is $9$.",
                "reason": "The leading term of a product is the product of the leading terms: the term $7(g(x))^3$ has the nonzero leading term $-2401x^9$, and no other term reaches that power."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the degree of $f(g(x))$ for $f(x) = 5x^2 - 5x - 3$ and $g(x) = -3x^4 + 5x + 3$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the degree of $f(g(x))$ for $f(x) = 5x^2 - 5x - 3$ and $g(x) = -3x^4 + 5x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = 5(g(x))^2 - 5g(x) - 3$",
                  "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$, so $g(x)$ goes in place of $x$ in each term of $f$."
                },
                {
                  "step": "The power $(g(x))^2 = g(x) \\cdot g(x)$ has degree $4 + 4 = 8$.",
                  "reason": "Degree of a product is the sum of the degrees: each of the $2$ factors has degree $4$."
                },
                {
                  "step": "The other terms of $f(g(x))$ have degree at most $4$, which is less than $8$.",
                  "reason": "Degree of a product is the sum of the degrees: a lower power of $g(x)$ has fewer factors of degree $4$, and a number has degree $0$."
                },
                {
                  "step": "The degree of $f(g(x))$ is $8$.",
                  "reason": "The leading term of a product is the product of the leading terms: the term $5(g(x))^2$ has the nonzero leading term $45x^8$, and no other term reaches that power."
                }
              ]
            },
            {
              "prompt": "Find the degree of $f(g(x))$ for $f(x) = 6x^4 - 2x + 3$ and $g(x) = 5x^3 + x - 5$.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the degree of $f(g(x))$ for $f(x) = 6x^4 - 2x + 3$ and $g(x) = 5x^3 + x - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = 6(g(x))^4 - 2g(x) + 3$",
                  "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$, so $g(x)$ goes in place of $x$ in each term of $f$."
                },
                {
                  "step": "The power $(g(x))^4 = g(x) \\cdot g(x) \\cdot g(x) \\cdot g(x)$ has degree $3 + 3 + 3 + 3 = 12$.",
                  "reason": "Degree of a product is the sum of the degrees: each of the $4$ factors has degree $3$."
                },
                {
                  "step": "The other terms of $f(g(x))$ have degree at most $3$, which is less than $12$.",
                  "reason": "Degree of a product is the sum of the degrees: a lower power of $g(x)$ has fewer factors of degree $3$, and a number has degree $0$."
                },
                {
                  "step": "The degree of $f(g(x))$ is $12$.",
                  "reason": "The leading term of a product is the product of the leading terms: the term $6(g(x))^4$ has the nonzero leading term $3750x^{12}$, and no other term reaches that power."
                }
              ]
            },
            {
              "prompt": "Find the degree of $f(g(x))$ for $f(x) = -2x^5 + x^2 - 2$ and $g(x) = -4x^2 + 6$.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the degree of $f(g(x))$ for $f(x) = -2x^5 + x^2 - 2$ and $g(x) = -4x^2 + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = -2(g(x))^5 + (g(x))^2 - 2$",
                  "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$, so $g(x)$ goes in place of $x$ in each term of $f$."
                },
                {
                  "step": "The power $(g(x))^5 = g(x) \\cdot g(x) \\cdot g(x) \\cdot g(x) \\cdot g(x)$ has degree $2 + 2 + 2 + 2 + 2 = 10$.",
                  "reason": "Degree of a product is the sum of the degrees: each of the $5$ factors has degree $2$."
                },
                {
                  "step": "The other terms of $f(g(x))$ have degree at most $4$, which is less than $10$.",
                  "reason": "Degree of a product is the sum of the degrees: a lower power of $g(x)$ has fewer factors of degree $2$, and a number has degree $0$."
                },
                {
                  "step": "The degree of $f(g(x))$ is $10$.",
                  "reason": "The leading term of a product is the product of the leading terms: the term $-2(g(x))^5$ has the nonzero leading term $2048x^{10}$, and no other term reaches that power."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t167-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $a$ given that $(ax^2 - 7x - 7)(3x^3 + 4x - 5) = 12x^5 - 21x^4 - 5x^3 - 48x^2 + 7x + 35$.",
            "lines": [
              {
                "step": "Find $a$ given that $(ax^2 - 7x - 7)(3x^3 + 4x - 5) = 12x^5 - 21x^4 - 5x^3 - 48x^2 + 7x + 35$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms in $x^2$ on the left come from $ax^2 \\cdot (-5)$ and $(-7x) \\cdot 4x$.",
                "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $2$."
              },
              {
                "step": "$ax^2 \\cdot (-5) + (-7x) \\cdot 4x = -5ax^2 - 28x^2$",
                "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
              },
              {
                "step": "$-5ax^2 - 28x^2 = (-5a - 28)x^2$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^2$."
              },
              {
                "step": "$-5a - 28 = -48$",
                "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^2$ on the right is $-48$."
              },
              {
                "step": "$-5a = -20$",
                "reason": "Adding the same number to both sides: $28$ is added to both sides."
              },
              {
                "step": "$a = 4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$ given that $(ax^3 - 2x^2 + 6)(-7x^3 + 6x^2 + 2) = -49x^6 + 56x^5 - 12x^4 - 28x^3 + 32x^2 + 12$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find $a$ given that $(ax^3 - 2x^2 + 6)(-7x^3 + 6x^2 + 2) = -49x^6 + 56x^5 - 12x^4 - 28x^3 + 32x^2 + 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $x^5$ on the left come from $ax^3 \\cdot 6x^2$ and $(-2x^2) \\cdot (-7x^3)$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $5$."
                },
                {
                  "step": "$ax^3 \\cdot 6x^2 + (-2x^2) \\cdot (-7x^3) = 6ax^5 + 14x^5$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$6ax^5 + 14x^5 = (6a + 14)x^5$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^5$."
                },
                {
                  "step": "$6a + 14 = 56$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^5$ on the right is $56$."
                },
                {
                  "step": "$6a = 42$",
                  "reason": "Adding the same number to both sides: $-14$ is added to both sides."
                },
                {
                  "step": "$a = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                }
              ]
            },
            {
              "prompt": "Find $a$ given that $(-2x^3 + ax^2 - 7)(2x^2 + 4) = -4x^5 - 10x^4 - 8x^3 - 34x^2 - 28$.",
              "form": "Answer as an integer.",
              "answer": "-5",
              "lines": [
                {
                  "step": "Find $a$ given that $(-2x^3 + ax^2 - 7)(2x^2 + 4) = -4x^5 - 10x^4 - 8x^3 - 34x^2 - 28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $x^2$ on the left come from $ax^2 \\cdot 4$ and $(-7) \\cdot 2x^2$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $2$."
                },
                {
                  "step": "$ax^2 \\cdot 4 + (-7) \\cdot 2x^2 = 4ax^2 - 14x^2$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$4ax^2 - 14x^2 = (4a - 14)x^2$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^2$."
                },
                {
                  "step": "$4a - 14 = -34$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^2$ on the right is $-34$."
                },
                {
                  "step": "$4a = -20$",
                  "reason": "Adding the same number to both sides: $14$ is added to both sides."
                },
                {
                  "step": "$a = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Find $a$ given that $(ax^3 - x - 5)(3x^3 - 6x + 4) = -18x^6 + 33x^4 - 39x^3 + 6x^2 + 26x - 20$.",
              "form": "Answer as an integer.",
              "answer": "-6",
              "lines": [
                {
                  "step": "Find $a$ given that $(ax^3 - x - 5)(3x^3 - 6x + 4) = -18x^6 + 33x^4 - 39x^3 + 6x^2 + 26x - 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $x^3$ on the left come from $ax^3 \\cdot 4$ and $(-5) \\cdot 3x^3$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $3$."
                },
                {
                  "step": "$ax^3 \\cdot 4 + (-5) \\cdot 3x^3 = 4ax^3 - 15x^3$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$4ax^3 - 15x^3 = (4a - 15)x^3$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^3$."
                },
                {
                  "step": "$4a - 15 = -39$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^3$ on the right is $-39$."
                },
                {
                  "step": "$4a = -24$",
                  "reason": "Adding the same number to both sides: $15$ is added to both sides."
                },
                {
                  "step": "$a = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $b$ given that $(ax^2 - 6x - 3)(bx^3 + 7x^2 + x - 4) = 15x^5 - 17x^4 - 38x^3 - 7x^2 + 21x + 12$.",
            "lines": [
              {
                "step": "Find $b$ given that $(ax^2 - 6x - 3)(bx^3 + 7x^2 + x - 4) = 15x^5 - 17x^4 - 38x^3 - 7x^2 + 21x + 12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms in $x^2$ on the left come from $ax^2 \\cdot (-4)$, $(-6x) \\cdot x$ and $(-3) \\cdot 7x^2$.",
                "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $2$."
              },
              {
                "step": "$ax^2 \\cdot (-4) + (-6x) \\cdot x + (-3) \\cdot 7x^2 = -4ax^2 - 6x^2 - 21x^2$",
                "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
              },
              {
                "step": "$-4ax^2 - 6x^2 - 21x^2 = (-4a - 27)x^2$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^2$."
              },
              {
                "step": "$-4a - 27 = -7$",
                "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^2$ on the right is $-7$."
              },
              {
                "step": "$-4a = 20$",
                "reason": "Adding the same number to both sides: $27$ is added to both sides."
              },
              {
                "step": "$a = -5$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
              },
              {
                "step": "The terms in $x^4$ on the left come from $ax^2 \\cdot 7x^2$ and $(-6x) \\cdot bx^3$.",
                "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $4$."
              },
              {
                "step": "$ax^2 \\cdot 7x^2 + (-6x) \\cdot bx^3 = 7ax^4 - 6bx^4$",
                "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
              },
              {
                "step": "$7ax^4 - 6bx^4 = (-6b + 7a)x^4$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^4$."
              },
              {
                "step": "$-6b + 7a = -17$",
                "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^4$ on the right is $-17$."
              },
              {
                "step": "$-6b + 7 \\cdot (-5) = -17$",
                "reason": "Substituting a value: $a = -5$, found above, goes in place of $a$."
              },
              {
                "step": "$-6b - 35 = -17$",
                "reason": "Order of operations: the product is worked out and added to the number."
              },
              {
                "step": "$-6b = 18$",
                "reason": "Adding the same number to both sides: $35$ is added to both sides."
              },
              {
                "step": "$b = -3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$ given that $(ax^3 - 5x^2 - 6)(bx^3 - 2x^2 + 4x + 5) = -35x^6 + 11x^5 + 38x^4 + 45x^3 - 13x^2 - 24x - 30$.",
              "form": "Answer as an integer.",
              "answer": "-5",
              "lines": [
                {
                  "step": "Find $b$ given that $(ax^3 - 5x^2 - 6)(bx^3 - 2x^2 + 4x + 5) = -35x^6 + 11x^5 + 38x^4 + 45x^3 - 13x^2 - 24x - 30$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $x^4$ on the left come from $ax^3 \\cdot 4x$ and $(-5x^2) \\cdot (-2x^2)$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $4$."
                },
                {
                  "step": "$ax^3 \\cdot 4x + (-5x^2) \\cdot (-2x^2) = 4ax^4 + 10x^4$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$4ax^4 + 10x^4 = (4a + 10)x^4$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^4$."
                },
                {
                  "step": "$4a + 10 = 38$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^4$ on the right is $38$."
                },
                {
                  "step": "$4a = 28$",
                  "reason": "Adding the same number to both sides: $-10$ is added to both sides."
                },
                {
                  "step": "$a = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "The terms in $x^3$ on the left come from $ax^3 \\cdot 5$, $(-5x^2) \\cdot 4x$ and $(-6) \\cdot bx^3$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $3$."
                },
                {
                  "step": "$ax^3 \\cdot 5 + (-5x^2) \\cdot 4x + (-6) \\cdot bx^3 = 5ax^3 - 20x^3 - 6bx^3$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$5ax^3 - 20x^3 - 6bx^3 = (-6b + 5a - 20)x^3$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^3$."
                },
                {
                  "step": "$-6b + 5a - 20 = 45$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^3$ on the right is $45$."
                },
                {
                  "step": "$-6b + 5 \\cdot 7 - 20 = 45$",
                  "reason": "Substituting a value: $a = 7$, found above, goes in place of $a$."
                },
                {
                  "step": "$-6b + 15 = 45$",
                  "reason": "Order of operations: the product is worked out and added to the number."
                },
                {
                  "step": "$-6b = 30$",
                  "reason": "Adding the same number to both sides: $-15$ is added to both sides."
                },
                {
                  "step": "$b = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
                }
              ]
            },
            {
              "prompt": "Find $b$ given that $(-3x^3 + ax - 3)(-2x^3 - 4x^2 + bx - 2) = 6x^6 + 12x^5 - 14x^4 - 4x^3 + 20x^2 - 14x + 6$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find $b$ given that $(-3x^3 + ax - 3)(-2x^3 - 4x^2 + bx - 2) = 6x^6 + 12x^5 - 14x^4 - 4x^3 + 20x^2 - 14x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $x^3$ on the left come from $(-3x^3) \\cdot (-2)$, $ax \\cdot (-4x^2)$ and $(-3) \\cdot (-2x^3)$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $3$."
                },
                {
                  "step": "$(-3x^3) \\cdot (-2) + ax \\cdot (-4x^2) + (-3) \\cdot (-2x^3) = 6x^3 - 4ax^3 + 6x^3$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$6x^3 - 4ax^3 + 6x^3 = (-4a + 12)x^3$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^3$."
                },
                {
                  "step": "$-4a + 12 = -4$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^3$ on the right is $-4$."
                },
                {
                  "step": "$-4a = -16$",
                  "reason": "Adding the same number to both sides: $-12$ is added to both sides."
                },
                {
                  "step": "$a = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "The terms in $x$ on the left come from $ax \\cdot (-2)$ and $(-3) \\cdot bx$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $1$."
                },
                {
                  "step": "$ax \\cdot (-2) + (-3) \\cdot bx = -2ax - 3bx$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$-2ax - 3bx = (-3b - 2a)x$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x$."
                },
                {
                  "step": "$-3b - 2a = -14$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x$ on the right is $-14$."
                },
                {
                  "step": "$-3b - 2 \\cdot 4 = -14$",
                  "reason": "Substituting a value: $a = 4$, found above, goes in place of $a$."
                },
                {
                  "step": "$-3b - 8 = -14$",
                  "reason": "Order of operations: the product is worked out and added to the number."
                },
                {
                  "step": "$-3b = -6$",
                  "reason": "Adding the same number to both sides: $8$ is added to both sides."
                },
                {
                  "step": "$b = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                }
              ]
            },
            {
              "prompt": "Find $b$ given that $(7x^2 + ax - 6)(-2x^3 + 6x^2 + bx + 2) = -14x^5 + 56x^4 + 19x^3 - 71x^2 - 56x - 12$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find $b$ given that $(7x^2 + ax - 6)(-2x^3 + 6x^2 + bx + 2) = -14x^5 + 56x^4 + 19x^3 - 71x^2 - 56x - 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $x^4$ on the left come from $7x^2 \\cdot 6x^2$ and $ax \\cdot (-2x^3)$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $4$."
                },
                {
                  "step": "$7x^2 \\cdot 6x^2 + ax \\cdot (-2x^3) = 42x^4 - 2ax^4$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$42x^4 - 2ax^4 = (-2a + 42)x^4$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^4$."
                },
                {
                  "step": "$-2a + 42 = 56$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^4$ on the right is $56$."
                },
                {
                  "step": "$-2a = 14$",
                  "reason": "Adding the same number to both sides: $-42$ is added to both sides."
                },
                {
                  "step": "$a = -7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                },
                {
                  "step": "The terms in $x^3$ on the left come from $7x^2 \\cdot bx$, $ax \\cdot 6x^2$ and $(-6) \\cdot (-2x^3)$.",
                  "reason": "Each term of a product comes from one term of each factor: of all the products of one term of each factor, only these have powers of $x$ that add to $3$."
                },
                {
                  "step": "$7x^2 \\cdot bx + ax \\cdot 6x^2 + (-6) \\cdot (-2x^3) = 7bx^3 + 6ax^3 + 12x^3$",
                  "reason": "Multiplying out: the coefficients multiply, with the signs of products from arithmetic, and the product law adds the exponents."
                },
                {
                  "step": "$7bx^3 + 6ax^3 + 12x^3 = (7b + 6a + 12)x^3$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x^3$."
                },
                {
                  "step": "$7b + 6a + 12 = 19$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficient of $x^3$ on the right is $19$."
                },
                {
                  "step": "$7b + 6 \\cdot (-7) + 12 = 19$",
                  "reason": "Substituting a value: $a = -7$, found above, goes in place of $a$."
                },
                {
                  "step": "$7b - 30 = 19$",
                  "reason": "Order of operations: the product is worked out and added to the number."
                },
                {
                  "step": "$7b = 49$",
                  "reason": "Adding the same number to both sides: $30$ is added to both sides."
                },
                {
                  "step": "$b = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t167-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $a$ in $(-2x^3 + ax + 6)(5x^3 - 6x^2 + 7) = -10x^6 + 12x^5 - 30x^4 + 52x^3 - 36x^2 - 42x + 42$, and write that line right.",
            "given": [
              "$(-2x^3 + ax + 6)(5x^3 - 6x^2 + 7) = -10x^6 + 12x^5 - 30x^4 + 52x^3 - 36x^2 - 42x + 42$",
              "$(-2) \\cdot 7 + a \\cdot (-6) + 6 \\cdot 5 = 52$",
              "$-6a - 44 = 52$",
              "$-6a = 96$",
              "$a = -16$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $a$ in $(-2x^3 + ax + 6)(5x^3 - 6x^2 + 7) = -10x^6 + 12x^5 - 30x^4 + 52x^3 - 36x^2 - 42x + 42$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 works out $6 \\cdot 5$ as $-30$.",
                "reason": "A sign lost: by the signs of products, from arithmetic, $6 \\cdot 5 = 30$."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $-6a + 16 = 52$.",
                "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $a$ in $(ax^3 - 7x + 4)(-2x^3 + 4x - 5) = 8x^6 - 2x^4 + 12x^3 - 28x^2 + 51x - 20$, and write that line right.",
              "given": [
                "$(ax^3 - 7x + 4)(-2x^3 + 4x - 5) = 8x^6 - 2x^4 + 12x^3 - 28x^2 + 51x - 20$",
                "$a \\cdot 4 + (-7) \\cdot (-2) = -2$",
                "$4a + 14 = -2$",
                "$4a = 12$",
                "$a = 3$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 4*a = -16",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $a$ in $(ax^3 - 7x + 4)(-2x^3 + 4x - 5) = 8x^6 - 2x^4 + 12x^3 - 28x^2 + 51x - 20$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1, 2 and 3 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 adds $14$ to both sides, where the rule adds $-14$.",
                  "reason": "A sign lost: to take $14$ off the left side, its opposite $-14$ is added to both sides."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $4a = -16$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $a$ in $(ax^3 + 3x^2 - 4)(4x^3 + 7x^2 - 4) = 24x^6 + 54x^5 + 21x^4 - 40x^3 - 40x^2 + 16$, and write that line right.",
              "given": [
                "$(ax^3 + 3x^2 - 4)(4x^3 + 7x^2 - 4) = 24x^6 + 54x^5 + 21x^4 - 40x^3 - 40x^2 + 16$",
                "$a \\cdot (-4) + (-4) \\cdot (-4) = -40$",
                "$-4a + 16 = -40$",
                "$-4a = -56$",
                "$a = 14$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: a*(-4)+(-4)*4 = -40",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $a$ in $(ax^3 + 3x^2 - 4)(4x^3 + 7x^2 - 4) = 24x^6 + 54x^5 + 21x^4 - 40x^3 - 40x^2 + 16$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 takes the term $4x^3$ of the second factor with the coefficient $-4$.",
                  "reason": "A sign lost: a term of a factor keeps its own sign when its coefficient goes into a product."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $a \\cdot (-4) + (-4) \\cdot 4 = -40$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $a$ in $(-2x^3 + 2x + a)(-4x^3 - 4x + 2) = 8x^6 - 32x^3 - 8x^2 - 24x + 14$, and write that line right.",
              "given": [
                "$(-2x^3 + 2x + a)(-4x^3 - 4x + 2) = 8x^6 - 32x^3 - 8x^2 - 24x + 14$",
                "$(-2) \\cdot 2 + a \\cdot (-4) = -32$",
                "$-4a + 4 = -32$",
                "$-4a = -36$",
                "$a = 9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -4*a-4 = -32",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $a$ in $(-2x^3 + 2x + a)(-4x^3 - 4x + 2) = 8x^6 - 32x^3 - 8x^2 - 24x + 14$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 works out $(-2) \\cdot 2$ as $4$.",
                  "reason": "A sign lost: by the signs of products, from arithmetic, $(-2) \\cdot 2 = -4$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $-4a - 4 = -32$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the constant term of $(-5x^4 + 3x^2 + 4)(2x^5 - 2 + 7x^2)(6 - 7x^2 + 2x^5)$, and write that line right.",
            "given": [
              "$(-5x^4 + 3x^2 + 4)(2x^5 - 2 + 7x^2)(6 - 7x^2 + 2x^5)$",
              "$4 \\cdot (-2) \\cdot 6$",
              "$8 \\cdot 6$",
              "$48$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the constant term of $(-5x^4 + 3x^2 + 4)(2x^5 - 2 + 7x^2)(6 - 7x^2 + 2x^5)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the product as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 works out $4 \\cdot (-2)$ as $8$.",
                "reason": "A sign lost: by the signs of products, from arithmetic, $4 \\cdot (-2) = -8$."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $(-8) \\cdot 6$.",
                "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the constant term of $(4 + 5x^3)(-6x^3 - 2)(-3 - 2x^3)$, and write that line right.",
              "given": [
                "$(4 + 5x^3)(-6x^3 - 2)(-3 - 2x^3)$",
                "$4 \\cdot (-2) \\cdot (-3)$",
                "$8 \\cdot (-3)$",
                "$-24$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (-8)*(-3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the constant term of $(4 + 5x^3)(-6x^3 - 2)(-3 - 2x^3)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the product as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 works out $4 \\cdot (-2)$ as $8$.",
                  "reason": "A sign lost: by the signs of products, from arithmetic, $4 \\cdot (-2) = -8$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $(-8) \\cdot (-3)$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the constant term of $(-5 + 4x^4 - 5x^2)(-6x^4 + 2x^2 + 5)(-x^2 + 4x^4 + 4)$, and write that line right.",
              "given": [
                "$(-5 + 4x^4 - 5x^2)(-6x^4 + 2x^2 + 5)(-x^2 + 4x^4 + 4)$",
                "$(-5) \\cdot 5 \\cdot (-4)$",
                "$(-25) \\cdot (-4)$",
                "$100$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (-5)*5*4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the constant term of $(-5 + 4x^4 - 5x^2)(-6x^4 + 2x^2 + 5)(-x^2 + 4x^4 + 4)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the product as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 takes the constant term of the factor $-x^2 + 4x^4 + 4$ as $-4$.",
                  "reason": "A sign lost: a constant term keeps its own sign when it is taken from its factor."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $(-5) \\cdot 5 \\cdot 4$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the constant term of $(-2x^4 + 3 - 7x^2)(5x^2 + 3x^5 + 5)(6x^5 + x^2 + 2)$, and write that line right.",
              "given": [
                "$(-2x^4 + 3 - 7x^2)(5x^2 + 3x^5 + 5)(6x^5 + x^2 + 2)$",
                "$(-3) \\cdot 5 \\cdot 2$",
                "$(-15) \\cdot 2$",
                "$-30$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 3*5*2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the constant term of $(-2x^4 + 3 - 7x^2)(5x^2 + 3x^5 + 5)(6x^5 + x^2 + 2)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the product as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 takes the constant term of the factor $-2x^4 + 3 - 7x^2$ as $-3$.",
                  "reason": "A sign lost: a constant term keeps its own sign when it is taken from its factor."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $3 \\cdot 5 \\cdot 2$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t167-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: The number $y$ is the product of 8 more than 4 times the square of $x$ and 8 less than the cube of $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: The number $y$ is the product of 8 more than 4 times the square of $x$ and 8 less than the cube of $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first amount is $4x^2 + 8$.",
                "reason": "Writing a sentence as an equation: \"4 times the square of $x$\" is $4x^2$, and \"8 more than\" adds $8$ to it."
              },
              {
                "step": "The second amount is $x^3 - 8$.",
                "reason": "Writing a sentence as an equation: \"the cube of $x$\" is $x^3$, and \"8 less than\" takes $8$ away from it."
              },
              {
                "step": "$y = (4x^2 + 8)(x^3 - 8)$",
                "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, each kept whole in a bracket, and the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Multiplying 2 less than the cube of $x$ by 7 less than the square of $x$ gives the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x^3-2)*(x^2-7)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Multiplying 2 less than the cube of $x$ by 7 less than the square of $x$ gives the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first amount is $x^3 - 2$.",
                  "reason": "Writing a sentence as an equation: \"the cube of $x$\" is $x^3$, and \"2 less than\" takes $2$ away from it."
                },
                {
                  "step": "The second amount is $x^2 - 7$.",
                  "reason": "Writing a sentence as an equation: \"the square of $x$\" is $x^2$, and \"7 less than\" takes $7$ away from it."
                },
                {
                  "step": "$y = (x^3 - 2)(x^2 - 7)$",
                  "reason": "Writing a sentence as an equation: \"multiplying by\" multiplies the two amounts, each kept whole in a bracket, and the word \"gives\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: The number $y$ is the product of 8 less than 3 times $x$ and 8 more than 3 times the cube of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (3*x-8)*(3*x^3+8)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: The number $y$ is the product of 8 less than 3 times $x$ and 8 more than 3 times the cube of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first amount is $3x - 8$.",
                  "reason": "Writing a sentence as an equation: \"3 times $x$\" is $3x$, and \"8 less than\" takes $8$ away from it."
                },
                {
                  "step": "The second amount is $3x^3 + 8$.",
                  "reason": "Writing a sentence as an equation: \"3 times the cube of $x$\" is $3x^3$, and \"8 more than\" adds $8$ to it."
                },
                {
                  "step": "$y = (3x - 8)(3x^3 + 8)$",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, each kept whole in a bracket, and the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Multiplying 7 more than 7 times the cube of $x$ by 8 more than 6 times the cube of $x$ gives the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (7*x^3+7)*(6*x^3+8)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Multiplying 7 more than 7 times the cube of $x$ by 8 more than 6 times the cube of $x$ gives the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first amount is $7x^3 + 7$.",
                  "reason": "Writing a sentence as an equation: \"7 times the cube of $x$\" is $7x^3$, and \"7 more than\" adds $7$ to it."
                },
                {
                  "step": "The second amount is $6x^3 + 8$.",
                  "reason": "Writing a sentence as an equation: \"6 times the cube of $x$\" is $6x^3$, and \"8 more than\" adds $8$ to it."
                },
                {
                  "step": "$y = (7x^3 + 7)(6x^3 + 8)$",
                  "reason": "Writing a sentence as an equation: \"multiplying by\" multiplies the two amounts, each kept whole in a bracket, and the word \"gives\" marks the place of the equals sign."
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
      "id": "t167-p1",
      "method": "direct proof",
      "statement": "For nonzero polynomials $f$ of degree $n$ and $g$ of degree $m$, the product $f(x)g(x)$ has degree $n + m$, its leading term is the product of the leading terms of $f$ and $g$, and its constant term is the product of their constant terms.",
      "idea": "Multiply each term of $f$ by each term of $g$ and look only at the highest power and at the power $0$: one product reaches each of them, and nothing cancels it.",
      "lines": [
        {
          "line": "Write $f(x) = a_nx^n + \\dots + a_1x + a_0$ with $a_n \\ne 0$, and $g(x) = b_mx^m + \\dots + b_1x + b_0$ with $b_m \\ne 0$.",
          "reason": "General form: a polynomial of degree $n$ has a nonzero coefficient of $x^n$ and no higher power of $x$."
        },
        {
          "line": "Multiplied out, $f(x)g(x)$ is the sum of the products $a_ix^i \\cdot b_jx^j$, one for each term of $f$ and each term of $g$.",
          "reason": "Multiplying out: by the distributive law each term of $f$ multiplies each term of $g$."
        },
        {
          "line": "Each product is $a_ix^i \\cdot b_jx^j = a_ib_jx^{i + j}$.",
          "reason": "Product law: the exponents of the powers of $x$ add."
        },
        {
          "line": "Since $i \\le n$ and $j \\le m$, each product has $i + j \\le n + m$.",
          "reason": "Adding two inequalities: the two inequalities are added side by side."
        },
        {
          "line": "The sum $i + j$ equals $n + m$ only for $i = n$ and $j = m$.",
          "reason": "Adding two inequalities: if $i < n$ or $j < m$, the sum is less than $n + m$."
        },
        {
          "line": "So the only product in $x^{n + m}$ is $a_nb_mx^{n + m}$, and no product has a higher power of $x$.",
          "reason": "Each term of a product comes from one term of each factor: by lines 4 and 5, only the product of $a_nx^n$ and $b_mx^m$ reaches $x^{n + m}$."
        },
        {
          "line": "$a_nb_m \\ne 0$",
          "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, and neither $a_n$ nor $b_m$ is 0."
        },
        {
          "line": "So $f(x)g(x)$ has degree $n + m$, and its leading term $a_nb_mx^{n + m}$ is the product of the leading terms $a_nx^n$ and $b_mx^m$.",
          "reason": "Degree and leading term: the highest power of $x$ with a nonzero coefficient gives both."
        },
        {
          "line": "The sum $i + j$ is $0$ only for $i = 0$ and $j = 0$, since neither exponent is negative.",
          "reason": "A sum of two whole numbers is 0 only when both are 0, from arithmetic."
        },
        {
          "line": "So the constant term of $f(x)g(x)$ is $a_0b_0$, the product of the constant terms.",
          "reason": "Constant term: the one product with no power of $x$ is $a_0 \\cdot b_0$."
        }
      ]
    },
    {
      "id": "t167-p2",
      "method": "proof by contradiction",
      "statement": "No number can be given to the zero polynomial as its degree so that the degree of a product is still the sum of the degrees.",
      "idea": "Multiply the zero polynomial by a polynomial of known degree: the product is still zero, so its degree would have to grow and stay the same at once.",
      "lines": [
        {
          "line": "Suppose the zero polynomial has a degree $d$, a number, and the degree of a product is the sum of the degrees for it too.",
          "reason": "This is the assumption, made to reach a contradiction."
        },
        {
          "line": "The polynomial $g(x) = 4x^3 + 7$ has degree $3$.",
          "reason": "Degree: the highest power of $x$ in $g$ with a nonzero coefficient is $x^3$."
        },
        {
          "line": "The product $0 \\cdot g(x)$ is the zero polynomial.",
          "reason": "Assumptions on multiplication, from arithmetic, for each value of $x$."
        },
        {
          "line": "So the degree of the product is $d$, and also $d + 3$.",
          "reason": "Line 3 gives the first; the assumption of line 1 with line 2 gives the second."
        },
        {
          "line": "Taking $d$ from both, $3$ would equal $0$.",
          "reason": "Adding the same number to both sides: $-d$ is added."
        },
        {
          "line": "That is false, so the assumption is false: the zero polynomial has no degree.",
          "reason": "Proof by contradiction: an assumption that leads to a false statement is false."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t167-s1",
      "method": "proof by cases",
      "statement": "Prove that if the polynomials $f$ and $g$ have integer coefficients and $f(x)g(x)$ has a prime $p$ as its constant term, then the constant term of $f$ or of $g$ is $1$ or $-1$. Facts it may use: constant term, the constant term of a product is the product of the constant terms, divisor, prime and composite whole numbers.",
      "check": {
        "proof": [
          {
            "line": "Let the constant terms of $f$ and $g$ be $c$ and $d$, which are integers.",
            "reason": "Constant term: it is one of the coefficients, and every coefficient is an integer."
          },
          {
            "line": "$cd = p$",
            "reason": "The constant term of a product is the product of the constant terms."
          },
          {
            "line": "So $c$ is a divisor of $p$.",
            "reason": "Divisor, from arithmetic: $c$ times the integer $d$ gives $p$."
          },
          {
            "line": "So $c$ is one of $1$, $-1$, $p$ and $-p$.",
            "reason": "Prime and composite whole numbers, from arithmetic: the only positive divisors of a prime $p$ are $1$ and $p$, and a negative divisor is the opposite of a positive one."
          },
          {
            "line": "If $c$ is $1$ or $-1$, the constant term of $f$ is $1$ or $-1$.",
            "reason": "This is the first case: the statement holds as it stands."
          },
          {
            "line": "If $c = p$, then $pd = p$.",
            "reason": "Substituting a value: $p$ goes in place of $c$ in line 2."
          },
          {
            "line": "In that case $d = 1$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $p$."
          },
          {
            "line": "If $c = -p$, then $-pd = p$.",
            "reason": "Substituting a value: $-p$ goes in place of $c$ in line 2."
          },
          {
            "line": "In that case $d = -1$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $-p$."
          },
          {
            "line": "In every case the constant term of $f$ or of $g$ is $1$ or $-1$.",
            "reason": "Proof by cases: lines 5 to 9 cover the four values of line 4."
          }
        ]
      }
    },
    {
      "id": "t167-s2",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ are nonzero polynomials and $f(x)g(x)$ has degree $1$, then $f$ or $g$ is a nonzero constant. Facts it may use: degree, degree of a product is the sum of the degrees.",
      "check": {
        "proof": [
          {
            "line": "$\\deg f + \\deg g = 1$",
            "reason": "Degree of a product is the sum of the degrees, since neither factor is the zero polynomial."
          },
          {
            "line": "Each of $\\deg f$ and $\\deg g$ is a whole number.",
            "reason": "Degree: the degree is a power of $x$, which is $0$, $1$, $2$ and so on."
          },
          {
            "line": "Two whole numbers that add to $1$ are $0$ and $1$, in one order or the other.",
            "reason": "Adding two inequalities: if both were $1$ or more, the sum would be $2$ or more; so one of them is $0$, and the other is $1$."
          },
          {
            "line": "So $f$ or $g$ has degree $0$.",
            "reason": "Degree: line 3 gives one of the two degrees as $0$."
          },
          {
            "line": "A nonzero polynomial of degree $0$ has no power of $x$ in it, so it is a nonzero constant.",
            "reason": "Degree: degree $0$ means the highest power of $x$ with a nonzero coefficient is $x^0 = 1$."
          }
        ]
      }
    },
    {
      "id": "t167-s3",
      "method": "disproof by counterexample",
      "statement": "Prove that the statement \"if $f(x)g(x)$ is monic, then $f$ and $g$ are monic\" is false. Facts it may use: monic, leading term, leading coefficient, the leading term of a product is the product of the leading terms.",
      "check": {
        "proof": [
          {
            "line": "Take $f(x) = 4x - 1$ and $g(x) = \\dfrac{1}{4}x + 2$.",
            "reason": "A counterexample needs one pair for which the statement fails."
          },
          {
            "line": "The leading terms are $4x$ and $\\dfrac{1}{4}x$, and $4x \\cdot \\dfrac{1}{4}x = x^2$.",
            "reason": "Leading term, with the product law."
          },
          {
            "line": "So the leading term of $f(x)g(x)$ is $x^2$, and $f(x)g(x)$ is monic.",
            "reason": "The leading term of a product is the product of the leading terms; monic means the leading coefficient is $1$."
          },
          {
            "line": "The leading coefficient of $f$ is $4$, so $f$ is not monic.",
            "reason": "Leading coefficient: the coefficient of the leading term $4x$."
          },
          {
            "line": "So the statement fails for this pair, and it is false.",
            "reason": "Disproof by counterexample: a statement about every pair is false if one pair fails it."
          }
        ]
      }
    },
    {
      "id": "t167-s4",
      "method": "proof by contradiction",
      "statement": "Prove that no polynomial $f$ has $(x^2 + 3) \\cdot f(x) = x^3 + 5x$ for every $x$. Facts it may use: degree, general form, degree of a product is the sum of the degrees, each term of a product comes from one term of each factor, equal for all $x$ means equal coefficients.",
      "check": {
        "proof": [
          {
            "line": "Suppose a polynomial $f$ has $(x^2 + 3) \\cdot f(x) = x^3 + 5x$ for every $x$.",
            "reason": "This is the assumption, made to reach a contradiction."
          },
          {
            "line": "Then $f$ is not the zero polynomial, since $x^3 + 5x$ is not.",
            "reason": "Assumptions on multiplication, from arithmetic, and $x^3 + 5x$ is not $0$ at $x = 1$."
          },
          {
            "line": "The degree of $f$ is $3 - 2 = 1$.",
            "reason": "Degree of a product is the sum of the degrees: $2 + \\deg f = 3$."
          },
          {
            "line": "So $f(x) = cx + d$ for numbers $c$ and $d$ with $c \\ne 0$.",
            "reason": "General form of a polynomial of degree $1$."
          },
          {
            "line": "$(x^2 + 3)(cx + d) = cx^3 + dx^2 + 3cx + 3d$",
            "reason": "Each term of a product comes from one term of each factor: each term of the first bracket multiplies each term of the second, and no two products share a power of $x$."
          },
          {
            "line": "The coefficient of $x^3$ gives $c = 1$.",
            "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^3$ on the two sides are $c$ and $1$."
          },
          {
            "line": "The coefficient of $x$ gives $3c = 5$.",
            "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are $3c$ and $5$."
          },
          {
            "line": "With $c = 1$, the number $3c$ is $3$, not $5$.",
            "reason": "Substituting a value: $1$ goes in place of $c$."
          },
          {
            "line": "This is a contradiction, so no such polynomial $f$ exists.",
            "reason": "Proof by contradiction: an assumption that leads to a false statement is false."
          }
        ]
      }
    }
  ]
}
