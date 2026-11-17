export default {
  "number": 203,
  "title": "Nonreal roots",
  "section": 13,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "239-244"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $-7 + 5i$ and $9 + 2i\\sqrt{5}$ as roots.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-4*x^3-77*x^2+82*x+7474",
    "solution": [
      "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $-7 + 5i$ and $9 + 2i\\sqrt{5}$ as roots.",
      "The conjugate $-7 - 5i$ of $-7 + 5i$ is also a root.",
      "The conjugate $9 - 2i\\sqrt{5}$ of $9 + 2i\\sqrt{5}$ is also a root.",
      "The four numbers of lines 1 to 3 are different, so the degree is at least $4$.",
      "$\\left(x - (-7 + 5i)\\right)\\left(x - (-7 - 5i)\\right) = (x + 7)^2 - (5i)^2$",
      "$(5i)^2 = -25$",
      "$(x + 7)^2 - (5i)^2 = (x + 7)^2 + 25$",
      "$(x + 7)^2 + 25 = x^2 + 14x + 74$",
      "$\\left(x - (9 + 2i\\sqrt{5})\\right)\\left(x - (9 - 2i\\sqrt{5})\\right) = (x - 9)^2 - (2i\\sqrt{5})^2$",
      "$(2i\\sqrt{5})^2 = -20$",
      "$(x - 9)^2 - (2i\\sqrt{5})^2 = (x - 9)^2 + 20$",
      "$(x - 9)^2 + 20 = x^2 - 18x + 101$",
      "$f(x) = (x^2 + 14x + 74)(x^2 - 18x + 101)$",
      "$f(x) = x^4 - 4x^3 - 77x^2 + 82x + 7474$"
    ]
  },
  "ideas": [
    {
      "name": "Conjugate roots",
      "concrete": "The polynomial $f(x) = x^3 + 5x^2 + 17x - 123$ has real coefficients and the root $-4 - 5i$, since $f(x) = (x - 3)(x^2 + 8x + 41)$ and $x^2 + 8x + 41 = \\left(x - (-4 - 5i)\\right)\\left(x - (-4 + 5i)\\right)$. The same factor shows that the conjugate $-4 + 5i$ is a root as well.",
      "general": "Let $f(x)$ be a polynomial with real coefficients, and let $a$ and $b$ be real numbers with $b \\ne 0$. If $a + bi$ is a root of $f(x)$, then its conjugate $a - bi$ is a root of $f(x)$ too. This is **Conjugate roots**. The roots of $f(x)$ that are not real come in conjugate pairs, and each pair gives the factor $(x - (a + bi))(x - (a - bi)) = x^2 - 2ax + a^2 + b^2$, whose coefficients are real."
    },
    {
      "name": "Real factorization",
      "concrete": "The polynomial $g(x) = 3x^4 - 37x^3 + 158x^2 + 68x - 520$ has the roots $2$, $-\\dfrac{5}{3}$, $6 + 4i$ and $6 - 4i$. Over the real numbers it factors as $g(x) = (x - 2)(3x + 5)(x^2 - 12x + 52)$: two factors of degree $1$ and one of degree $2$, whose discriminant $-64$ is below $0$, so it has no real root.",
      "general": "Every polynomial of degree at least $1$ with real coefficients is a product of polynomials with real coefficients, each of degree $1$ or $2$. This is **Real factorization**. A factor of degree $2$ with a real root splits into two factors of degree $1$, so the factors of degree $2$ that are left have negative discriminants, and each holds a pair of conjugate roots."
    }
  ],
  "kinds": [
    {
      "id": "t203-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $-3 + 4i\\sqrt{2}$ and $9 + 11i$ as roots.",
            "lines": [
              {
                "step": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $-3 + 4i\\sqrt{2}$ and $9 + 11i$ as roots.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate $-3 - 4i\\sqrt{2}$ of $-3 + 4i\\sqrt{2}$ is also a root.",
                "reason": "Conjugate roots: the coefficients are real and $-3 + 4i\\sqrt{2}$ is not real, so its conjugate is a root too."
              },
              {
                "step": "The conjugate $9 - 11i$ of $9 + 11i$ is also a root.",
                "reason": "Conjugate roots: the coefficients are real and $9 + 11i$ is not real, so its conjugate is a root too."
              },
              {
                "step": "The four numbers of lines 1 to 3 are different, so the degree is at least $4$.",
                "reason": "At most n roots: a nonzero polynomial of degree $n$ has at most $n$ different roots."
              },
              {
                "step": "$\\left(x - (-3 + 4i\\sqrt{2})\\right)\\left(x - (-3 - 4i\\sqrt{2})\\right) = (x + 3)^2 - (4i\\sqrt{2})^2$",
                "reason": "Difference of squares: the brackets are $(x + 3) - 4i\\sqrt{2}$ and $(x + 3) + 4i\\sqrt{2}$, the same two terms with a plus and with a minus between them."
              },
              {
                "step": "$(4i\\sqrt{2})^2 = -32$",
                "reason": "The number $i$ with $i^2 = -1$: by the power of a product, $(4i\\sqrt{2})^2 = 32i^2$, and $i^2 = -1$."
              },
              {
                "step": "$(x + 3)^2 - (4i\\sqrt{2})^2 = (x + 3)^2 + 32$",
                "reason": "Substitution: line 6 takes the place of $(4i\\sqrt{2})^2$ in line 5, and taking away $-32$ adds $32$."
              },
              {
                "step": "$(x + 3)^2 + 32 = x^2 + 6x + 41$",
                "reason": "Square of a binomial: $(x + 3)^2 = x^2 + 6x + 9$, and $9 + 32 = 41$."
              },
              {
                "step": "$\\left(x - (9 + 11i)\\right)\\left(x - (9 - 11i)\\right) = (x - 9)^2 - (11i)^2$",
                "reason": "Difference of squares: the brackets are $(x - 9) - 11i$ and $(x - 9) + 11i$, the same two terms with a plus and with a minus between them."
              },
              {
                "step": "$(11i)^2 = -121$",
                "reason": "The number $i$ with $i^2 = -1$: by the power of a product, $(11i)^2 = 121i^2$, and $i^2 = -1$."
              },
              {
                "step": "$(x - 9)^2 - (11i)^2 = (x - 9)^2 + 121$",
                "reason": "Substitution: line 10 takes the place of $(11i)^2$ in line 9, and taking away $-121$ adds $121$."
              },
              {
                "step": "$(x - 9)^2 + 121 = x^2 - 18x + 202$",
                "reason": "Square of a binomial: $(x - 9)^2 = x^2 - 18x + 81$, and $81 + 121 = 202$."
              },
              {
                "step": "$f(x) = (x^2 + 6x + 41)(x^2 - 18x + 202)$",
                "reason": "Factored form: a polynomial of degree $4$ with leading coefficient $1$ and the four different roots of lines 1 to 3 is the product of the brackets $x - r$, one for each root $r$, and lines 8 and 12 give the product of each pair."
              },
              {
                "step": "$f(x) = x^4 - 12x^3 + 135x^2 + 474x + 8282$",
                "reason": "Multiplying out and collecting like terms: every term of one bracket times every term of the other."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $5 - 2i\\sqrt{22}$ and $-3 - 5i\\sqrt{3}$ as roots.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-4*x^3+137*x^2-162*x+9492",
              "lines": [
                {
                  "step": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $5 - 2i\\sqrt{22}$ and $-3 - 5i\\sqrt{3}$ as roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $5 + 2i\\sqrt{22}$ of $5 - 2i\\sqrt{22}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $5 - 2i\\sqrt{22}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The conjugate $-3 + 5i\\sqrt{3}$ of $-3 - 5i\\sqrt{3}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $-3 - 5i\\sqrt{3}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The four numbers of lines 1 to 3 are different, so the degree is at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$ has at most $n$ different roots."
                },
                {
                  "step": "$\\left(x - (5 - 2i\\sqrt{22})\\right)\\left(x - (5 + 2i\\sqrt{22})\\right) = (x - 5)^2 - (2i\\sqrt{22})^2$",
                  "reason": "Difference of squares: the brackets are $(x - 5) + 2i\\sqrt{22}$ and $(x - 5) - 2i\\sqrt{22}$, the same two terms with a plus and with a minus between them."
                },
                {
                  "step": "$(2i\\sqrt{22})^2 = -88$",
                  "reason": "The number $i$ with $i^2 = -1$: by the power of a product, $(2i\\sqrt{22})^2 = 88i^2$, and $i^2 = -1$."
                },
                {
                  "step": "$(x - 5)^2 - (2i\\sqrt{22})^2 = (x - 5)^2 + 88$",
                  "reason": "Substitution: line 6 takes the place of $(2i\\sqrt{22})^2$ in line 5, and taking away $-88$ adds $88$."
                },
                {
                  "step": "$(x - 5)^2 + 88 = x^2 - 10x + 113$",
                  "reason": "Square of a binomial: $(x - 5)^2 = x^2 - 10x + 25$, and $25 + 88 = 113$."
                },
                {
                  "step": "$\\left(x - (-3 - 5i\\sqrt{3})\\right)\\left(x - (-3 + 5i\\sqrt{3})\\right) = (x + 3)^2 - (5i\\sqrt{3})^2$",
                  "reason": "Difference of squares: the brackets are $(x + 3) + 5i\\sqrt{3}$ and $(x + 3) - 5i\\sqrt{3}$, the same two terms with a plus and with a minus between them."
                },
                {
                  "step": "$(5i\\sqrt{3})^2 = -75$",
                  "reason": "The number $i$ with $i^2 = -1$: by the power of a product, $(5i\\sqrt{3})^2 = 75i^2$, and $i^2 = -1$."
                },
                {
                  "step": "$(x + 3)^2 - (5i\\sqrt{3})^2 = (x + 3)^2 + 75$",
                  "reason": "Substitution: line 10 takes the place of $(5i\\sqrt{3})^2$ in line 9, and taking away $-75$ adds $75$."
                },
                {
                  "step": "$(x + 3)^2 + 75 = x^2 + 6x + 84$",
                  "reason": "Square of a binomial: $(x + 3)^2 = x^2 + 6x + 9$, and $9 + 75 = 84$."
                },
                {
                  "step": "$f(x) = (x^2 - 10x + 113)(x^2 + 6x + 84)$",
                  "reason": "Factored form: a polynomial of degree $4$ with leading coefficient $1$ and the four different roots of lines 1 to 3 is the product of the brackets $x - r$, one for each root $r$, and lines 8 and 12 give the product of each pair."
                },
                {
                  "step": "$f(x) = x^4 - 4x^3 + 137x^2 - 162x + 9492$",
                  "reason": "Multiplying out and collecting like terms: every term of one bracket times every term of the other."
                }
              ]
            },
            {
              "prompt": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $-4 + 2i\\sqrt{23}$ and $7 - i\\sqrt{15}$ as roots.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-6*x^3+60*x^2-1000*x+6912",
              "lines": [
                {
                  "step": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $-4 + 2i\\sqrt{23}$ and $7 - i\\sqrt{15}$ as roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-4 - 2i\\sqrt{23}$ of $-4 + 2i\\sqrt{23}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $-4 + 2i\\sqrt{23}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The conjugate $7 + i\\sqrt{15}$ of $7 - i\\sqrt{15}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $7 - i\\sqrt{15}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The four numbers of lines 1 to 3 are different, so the degree is at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$ has at most $n$ different roots."
                },
                {
                  "step": "$\\left(x - (-4 + 2i\\sqrt{23})\\right)\\left(x - (-4 - 2i\\sqrt{23})\\right) = (x + 4)^2 - (2i\\sqrt{23})^2$",
                  "reason": "Difference of squares: the brackets are $(x + 4) - 2i\\sqrt{23}$ and $(x + 4) + 2i\\sqrt{23}$, the same two terms with a plus and with a minus between them."
                },
                {
                  "step": "$(2i\\sqrt{23})^2 = -92$",
                  "reason": "The number $i$ with $i^2 = -1$: by the power of a product, $(2i\\sqrt{23})^2 = 92i^2$, and $i^2 = -1$."
                },
                {
                  "step": "$(x + 4)^2 - (2i\\sqrt{23})^2 = (x + 4)^2 + 92$",
                  "reason": "Substitution: line 6 takes the place of $(2i\\sqrt{23})^2$ in line 5, and taking away $-92$ adds $92$."
                },
                {
                  "step": "$(x + 4)^2 + 92 = x^2 + 8x + 108$",
                  "reason": "Square of a binomial: $(x + 4)^2 = x^2 + 8x + 16$, and $16 + 92 = 108$."
                },
                {
                  "step": "$\\left(x - (7 - i\\sqrt{15})\\right)\\left(x - (7 + i\\sqrt{15})\\right) = (x - 7)^2 - (i\\sqrt{15})^2$",
                  "reason": "Difference of squares: the brackets are $(x - 7) + i\\sqrt{15}$ and $(x - 7) - i\\sqrt{15}$, the same two terms with a plus and with a minus between them."
                },
                {
                  "step": "$(i\\sqrt{15})^2 = -15$",
                  "reason": "The number $i$ with $i^2 = -1$: by the power of a product, $(i\\sqrt{15})^2 = 15i^2$, and $i^2 = -1$."
                },
                {
                  "step": "$(x - 7)^2 - (i\\sqrt{15})^2 = (x - 7)^2 + 15$",
                  "reason": "Substitution: line 10 takes the place of $(i\\sqrt{15})^2$ in line 9, and taking away $-15$ adds $15$."
                },
                {
                  "step": "$(x - 7)^2 + 15 = x^2 - 14x + 64$",
                  "reason": "Square of a binomial: $(x - 7)^2 = x^2 - 14x + 49$, and $49 + 15 = 64$."
                },
                {
                  "step": "$f(x) = (x^2 + 8x + 108)(x^2 - 14x + 64)$",
                  "reason": "Factored form: a polynomial of degree $4$ with leading coefficient $1$ and the four different roots of lines 1 to 3 is the product of the brackets $x - r$, one for each root $r$, and lines 8 and 12 give the product of each pair."
                },
                {
                  "step": "$f(x) = x^4 - 6x^3 + 60x^2 - 1000x + 6912$",
                  "reason": "Multiplying out and collecting like terms: every term of one bracket times every term of the other."
                }
              ]
            },
            {
              "prompt": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $5 + i\\sqrt{23}$ and $6 - 13i$ as roots.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-22*x^3+373*x^2-2626*x+9840",
              "lines": [
                {
                  "step": "Find the polynomial of least degree with leading coefficient $1$ and real coefficients that has $5 + i\\sqrt{23}$ and $6 - 13i$ as roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $5 - i\\sqrt{23}$ of $5 + i\\sqrt{23}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $5 + i\\sqrt{23}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The conjugate $6 + 13i$ of $6 - 13i$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $6 - 13i$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The four numbers of lines 1 to 3 are different, so the degree is at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$ has at most $n$ different roots."
                },
                {
                  "step": "$\\left(x - (5 + i\\sqrt{23})\\right)\\left(x - (5 - i\\sqrt{23})\\right) = (x - 5)^2 - (i\\sqrt{23})^2$",
                  "reason": "Difference of squares: the brackets are $(x - 5) - i\\sqrt{23}$ and $(x - 5) + i\\sqrt{23}$, the same two terms with a plus and with a minus between them."
                },
                {
                  "step": "$(i\\sqrt{23})^2 = -23$",
                  "reason": "The number $i$ with $i^2 = -1$: by the power of a product, $(i\\sqrt{23})^2 = 23i^2$, and $i^2 = -1$."
                },
                {
                  "step": "$(x - 5)^2 - (i\\sqrt{23})^2 = (x - 5)^2 + 23$",
                  "reason": "Substitution: line 6 takes the place of $(i\\sqrt{23})^2$ in line 5, and taking away $-23$ adds $23$."
                },
                {
                  "step": "$(x - 5)^2 + 23 = x^2 - 10x + 48$",
                  "reason": "Square of a binomial: $(x - 5)^2 = x^2 - 10x + 25$, and $25 + 23 = 48$."
                },
                {
                  "step": "$\\left(x - (6 - 13i)\\right)\\left(x - (6 + 13i)\\right) = (x - 6)^2 - (13i)^2$",
                  "reason": "Difference of squares: the brackets are $(x - 6) + 13i$ and $(x - 6) - 13i$, the same two terms with a plus and with a minus between them."
                },
                {
                  "step": "$(13i)^2 = -169$",
                  "reason": "The number $i$ with $i^2 = -1$: by the power of a product, $(13i)^2 = 169i^2$, and $i^2 = -1$."
                },
                {
                  "step": "$(x - 6)^2 - (13i)^2 = (x - 6)^2 + 169$",
                  "reason": "Substitution: line 10 takes the place of $(13i)^2$ in line 9, and taking away $-169$ adds $169$."
                },
                {
                  "step": "$(x - 6)^2 + 169 = x^2 - 12x + 205$",
                  "reason": "Square of a binomial: $(x - 6)^2 = x^2 - 12x + 36$, and $36 + 169 = 205$."
                },
                {
                  "step": "$f(x) = (x^2 - 10x + 48)(x^2 - 12x + 205)$",
                  "reason": "Factored form: a polynomial of degree $4$ with leading coefficient $1$ and the four different roots of lines 1 to 3 is the product of the brackets $x - r$, one for each root $r$, and lines 8 and 12 give the product of each pair."
                },
                {
                  "step": "$f(x) = x^4 - 22x^3 + 373x^2 - 2626x + 9840$",
                  "reason": "Multiplying out and collecting like terms: every term of one bracket times every term of the other."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t203-k2",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is $7$ times the product of $x$ minus the number $-2 - 5i\\sqrt{15}$ and $x$ minus the conjugate of $-2 - 5i\\sqrt{15}$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is $7$ times the product of $x$ minus the number $-2 - 5i\\sqrt{15}$ and $x$ minus the conjugate of $-2 - 5i\\sqrt{15}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate of $-2 - 5i\\sqrt{15}$ is $-2 + 5i\\sqrt{15}$.",
                "reason": "Complex conjugate: the conjugate of $a + bi$ is $a - bi$, with the sign of the imaginary part reversed."
              },
              {
                "step": "The first amount is $x - (-2 - 5i\\sqrt{15})$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
              },
              {
                "step": "The second amount is $x - (-2 + 5i\\sqrt{15})$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = 7\\left(x - (-2 - 5i\\sqrt{15})\\right)\\left(x - (-2 + 5i\\sqrt{15})\\right)$",
                "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, \"$7$ times\" multiplies that product by $7$, and the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the conjugate of $10 - 4i\\sqrt{17}$ and $x$ minus the number $10 - 4i\\sqrt{17}$, increased by $2$, is a number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-(10+4*i*sqrt(17)))*(x-(10-4*i*sqrt(17)))+2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the conjugate of $10 - 4i\\sqrt{17}$ and $x$ minus the number $10 - 4i\\sqrt{17}$, increased by $2$, is a number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $10 - 4i\\sqrt{17}$ is $10 + 4i\\sqrt{17}$.",
                  "reason": "Complex conjugate: the conjugate of $a + bi$ is $a - bi$, with the sign of the imaginary part reversed."
                },
                {
                  "step": "The first amount is $x - (10 + 4i\\sqrt{17})$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The second amount is $x - (10 - 4i\\sqrt{17})$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\left(x - (10 + 4i\\sqrt{17})\\right)\\left(x - (10 - 4i\\sqrt{17})\\right) + 2$",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, \"increased by $2$\" adds $2$, and the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is $3$ less than the product of $x$ minus the number $7 - 4i\\sqrt{13}$ and $x$ minus its conjugate.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-(7-4*i*sqrt(13)))*(x-(7+4*i*sqrt(13)))-3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is $3$ less than the product of $x$ minus the number $7 - 4i\\sqrt{13}$ and $x$ minus its conjugate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $7 - 4i\\sqrt{13}$ is $7 + 4i\\sqrt{13}$.",
                  "reason": "Complex conjugate: the conjugate of $a + bi$ is $a - bi$, with the sign of the imaginary part reversed."
                },
                {
                  "step": "The first amount is $x - (7 - 4i\\sqrt{13})$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The second amount is $x - (7 + 4i\\sqrt{13})$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\left(x - (7 - 4i\\sqrt{13})\\right)\\left(x - (7 + 4i\\sqrt{13})\\right) - 3$",
                  "reason": "Writing a sentence as an equation: \"$3$ less than\" takes $3$ from the product of the two amounts, and the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: dividing the product of $x$ minus the number $4 - 4i\\sqrt{14}$ and $x$ minus the conjugate of $4 - 4i\\sqrt{14}$ by $12$ gives a number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-(4-4*i*sqrt(14)))*(x-(4+4*i*sqrt(14)))/12",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $y$ alone on the left: dividing the product of $x$ minus the number $4 - 4i\\sqrt{14}$ and $x$ minus the conjugate of $4 - 4i\\sqrt{14}$ by $12$ gives a number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $4 - 4i\\sqrt{14}$ is $4 + 4i\\sqrt{14}$.",
                  "reason": "Complex conjugate: the conjugate of $a + bi$ is $a - bi$, with the sign of the imaginary part reversed."
                },
                {
                  "step": "The first amount is $x - (4 - 4i\\sqrt{14})$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The second amount is $x - (4 + 4i\\sqrt{14})$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{\\left(x - (4 - 4i\\sqrt{14})\\right)\\left(x - (4 + 4i\\sqrt{14})\\right)}{12}$",
                  "reason": "Writing a sentence as an equation: \"dividing the product by $12$\" puts the product over $12$, and \"gives\" stands where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t203-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the polynomial of least degree with leading coefficient $1$ and real coefficients that has $8 + 10i$ and $6 - i\\sqrt{2}$ as roots, and write that line right.",
            "given": [
              "The conjugate $8 - 10i$ of $8 + 10i$ is also a root.",
              "The conjugate $6 + i\\sqrt{2}$ of $6 - i\\sqrt{2}$ is also a root.",
              "The four numbers of lines 1 and 2 are different, so the degree is at least $4$.",
              "$\\left(x - (8 + 10i)\\right)\\left(x - (8 - 10i)\\right) = (x - 8)^2 - (10i)^2$",
              "$(10i)^2 = 100$",
              "$(x - 8)^2 - (10i)^2 = (x - 8)^2 - 100$",
              "$(x - 8)^2 - 100 = x^2 - 16x - 36$",
              "$\\left(x - (6 - i\\sqrt{2})\\right)\\left(x - (6 + i\\sqrt{2})\\right) = (x - 6)^2 - (i\\sqrt{2})^2$",
              "$(i\\sqrt{2})^2 = -2$",
              "$(x - 6)^2 - (i\\sqrt{2})^2 = (x - 6)^2 + 2$",
              "$(x - 6)^2 + 2 = x^2 - 12x + 38$",
              "$f(x) = (x^2 - 16x - 36)(x^2 - 12x + 38)$",
              "$f(x) = x^4 - 28x^3 + 194x^2 - 176x - 1368$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the polynomial of least degree with leading coefficient $1$ and real coefficients that has $8 + 10i$ and $6 - i\\sqrt{2}$ as roots, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 gives $(10i)^2$ as $100$, but $i^2 = -1$ makes it negative.",
                "reason": "A sign lost: $(10i)^2 = 100i^2$, and $i^2 = -1$."
              },
              {
                "step": "The lines above line 5 are right, so line 5 is the first wrong line.",
                "reason": "Transitive property: each line above line 5 follows from the lines before it by a rule that holds."
              },
              {
                "step": "Line 5 written right is $(10i)^2 = -100$.",
                "reason": "The number $i$ with $i^2 = -1$: the square of a number times $i$ is minus the square of the number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the polynomial of least degree with leading coefficient $1$ and real coefficients that has $8 + i\\sqrt{6}$ and $-6 + i\\sqrt{21}$ as roots, and write that line right.",
              "given": [
                "The conjugate $8 - i\\sqrt{6}$ of $8 + i\\sqrt{6}$ is also a root.",
                "The conjugate $-6 - i\\sqrt{21}$ of $-6 + i\\sqrt{21}$ is also a root.",
                "The four numbers of lines 1 and 2 are different, so the degree is at least $4$.",
                "$\\left(x - (8 + i\\sqrt{6})\\right)\\left(x - (8 - i\\sqrt{6})\\right) = (x - 8)^2 - (i\\sqrt{6})^2$",
                "$(i\\sqrt{6})^2 = -6$",
                "$(x - 8)^2 - (i\\sqrt{6})^2 = (x - 8)^2 + 6$",
                "$(x - 8)^2 + 6 = x^2 - 16x + 70$",
                "$\\left(x - (-6 + i\\sqrt{21})\\right)\\left(x - (-6 - i\\sqrt{21})\\right) = (x + 6)^2 - (i\\sqrt{21})^2$",
                "$(i\\sqrt{21})^2 = -21$",
                "$(x + 6)^2 - (i\\sqrt{21})^2 = (x + 6)^2 - 21$",
                "$(x + 6)^2 - 21 = x^2 + 12x + 15$",
                "$f(x) = (x^2 - 16x + 70)(x^2 + 12x + 15)$",
                "$f(x) = x^4 - 4x^3 - 107x^2 + 600x + 1050$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 10: (x+6)^2-(i*sqrt(21))^2 = (x+6)^2+21",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial of least degree with leading coefficient $1$ and real coefficients that has $8 + i\\sqrt{6}$ and $-6 + i\\sqrt{21}$ as roots, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 10 takes $21$ away, but line 8 takes away $(i\\sqrt{21})^2$, which line 9 gives as $-21$.",
                  "reason": "A sign lost: taking away $-21$ adds $21$."
                },
                {
                  "step": "The lines above line 10 are right, so line 10 is the first wrong line.",
                  "reason": "Transitive property: each line above line 10 follows from the lines before it by a rule that holds."
                },
                {
                  "step": "Line 10 written right is $(x + 6)^2 - (i\\sqrt{21})^2 = (x + 6)^2 + 21$.",
                  "reason": "Substitution: the square of line 9 takes the place of $(i\\sqrt{21})^2$, and taking away a negative number adds it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the polynomial of least degree with leading coefficient $1$ and real coefficients that has $-4 + 3i\\sqrt{15}$ and $6 + i\\sqrt{23}$ as roots, and write that line right.",
              "given": [
                "The conjugate $-4 - 3i\\sqrt{15}$ of $-4 + 3i\\sqrt{15}$ is also a root.",
                "The conjugate $6 - i\\sqrt{23}$ of $6 + i\\sqrt{23}$ is also a root.",
                "The four numbers of lines 1 and 2 are different, so the degree is at least $4$.",
                "$\\left(x - (-4 + 3i\\sqrt{15})\\right)\\left(x - (-4 - 3i\\sqrt{15})\\right) = (x + 4)^2 - (3i\\sqrt{15})^2$",
                "$(3i\\sqrt{15})^2 = -135$",
                "$(x + 4)^2 - (3i\\sqrt{15})^2 = (x + 4)^2 + 135$",
                "$(x + 4)^2 + 135 = x^2 - 8x + 151$",
                "$\\left(x - (6 + i\\sqrt{23})\\right)\\left(x - (6 - i\\sqrt{23})\\right) = (x - 6)^2 - (i\\sqrt{23})^2$",
                "$(i\\sqrt{23})^2 = -23$",
                "$(x - 6)^2 - (i\\sqrt{23})^2 = (x - 6)^2 + 23$",
                "$(x - 6)^2 + 23 = x^2 - 12x + 59$",
                "$f(x) = (x^2 - 8x + 151)(x^2 - 12x + 59)$",
                "$f(x) = x^4 - 20x^3 + 306x^2 - 2284x + 8909$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: (x+4)^2+135 = x^2+8*x+151",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial of least degree with leading coefficient $1$ and real coefficients that has $-4 + 3i\\sqrt{15}$ and $6 + i\\sqrt{23}$ as roots, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 gives the middle term of $(x + 4)^2$ as $-8x$, but it is $8x$.",
                  "reason": "A sign lost: $(x + 4)^2 = x^2 + 2 \\cdot x \\cdot 4 + 4^2$, so the middle term is $8x$."
                },
                {
                  "step": "The lines above line 7 are right, so line 7 is the first wrong line.",
                  "reason": "Transitive property: each line above line 7 follows from the lines before it by a rule that holds."
                },
                {
                  "step": "Line 7 written right is $(x + 4)^2 + 135 = x^2 + 8x + 151$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the polynomial of least degree with leading coefficient $1$ and real coefficients that has $3 - 4i\\sqrt{7}$ and $8 - i\\sqrt{14}$ as roots, and write that line right.",
              "given": [
                "The conjugate $3 + 4i\\sqrt{7}$ of $3 - 4i\\sqrt{7}$ is also a root.",
                "The conjugate $8 + i\\sqrt{14}$ of $8 - i\\sqrt{14}$ is also a root.",
                "The four numbers of lines 1 and 2 are different, so the degree is at least $4$.",
                "$\\left(x - (3 - 4i\\sqrt{7})\\right)\\left(x - (3 + 4i\\sqrt{7})\\right) = (x - 3)^2 - (4i\\sqrt{7})^2$",
                "$(4i\\sqrt{7})^2 = -112$",
                "$(x - 3)^2 - (4i\\sqrt{7})^2 = (x - 3)^2 + 112$",
                "$(x - 3)^2 + 112 = x^2 - 6x + 121$",
                "$\\left(x - (8 - i\\sqrt{14})\\right)\\left(x - (8 + i\\sqrt{14})\\right) = (x - 8)^2 + (i\\sqrt{14})^2$",
                "$(i\\sqrt{14})^2 = -14$",
                "$(x - 8)^2 + (i\\sqrt{14})^2 = (x - 8)^2 - 14$",
                "$(x - 8)^2 - 14 = x^2 - 16x + 50$",
                "$f(x) = (x^2 - 6x + 121)(x^2 - 16x + 50)$",
                "$f(x) = x^4 - 22x^3 + 267x^2 - 2236x + 6050$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: (x-(8-i*sqrt(14)))*(x-(8+i*sqrt(14))) = (x-8)^2-(i*sqrt(14))^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial of least degree with leading coefficient $1$ and real coefficients that has $3 - 4i\\sqrt{7}$ and $8 - i\\sqrt{14}$ as roots, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 8 joins $(x - 8)^2$ and $(i\\sqrt{14})^2$ with a plus sign, but the product of a sum and a difference of the same two terms is the difference of their squares.",
                  "reason": "A sign lost: $(a + b)(a - b) = a^2 - b^2$, with a minus sign before $b^2$."
                },
                {
                  "step": "The lines above line 8 are right, so line 8 is the first wrong line.",
                  "reason": "Transitive property: each line above line 8 follows from the lines before it by a rule that holds."
                },
                {
                  "step": "Line 8 written right is $\\left(x - (8 - i\\sqrt{14})\\right)\\left(x - (8 + i\\sqrt{14})\\right) = (x - 8)^2 - (i\\sqrt{14})^2$.",
                  "reason": "Difference of squares: $(a + b)(a - b) = a^2 - b^2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t203-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the least degree of a nonzero polynomial with real coefficients that has each of the numbers $11 + 4i\\sqrt{13}$, $9 - 5i\\sqrt{3}$, $-5$ and $11 - 4i\\sqrt{13}$ as a root.",
            "lines": [
              {
                "step": "Find the least degree of a nonzero polynomial with real coefficients that has each of the numbers $11 + 4i\\sqrt{13}$, $9 - 5i\\sqrt{3}$, $-5$ and $11 - 4i\\sqrt{13}$ as a root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The numbers $11 + 4i\\sqrt{13}$, $9 - 5i\\sqrt{3}$ and $11 - 4i\\sqrt{13}$ are not real, so their conjugates $11 - 4i\\sqrt{13}$, $9 + 5i\\sqrt{3}$ and $11 + 4i\\sqrt{13}$ are roots too.",
                "reason": "Conjugate roots: the coefficients are real, so the conjugate of each root that is not real is a root too."
              },
              {
                "step": "The different roots found so far are $11 + 4i\\sqrt{13}$, $9 - 5i\\sqrt{3}$, $-5$, $11 - 4i\\sqrt{13}$ and $9 + 5i\\sqrt{3}$, which is $5$ numbers.",
                "reason": "Complex conjugate: the conjugate of $a + bi$ is $a - bi$, so a conjugate that is already on the given list is counted once."
              },
              {
                "step": "So the degree is at least $5$.",
                "reason": "At most n roots: a nonzero polynomial of degree $n$ has at most $n$ different roots, and line 3 gives $5$."
              },
              {
                "step": "The product of the brackets $x - r$, one for each number $r$ of line 3, has degree $5$, and its coefficients are real.",
                "reason": "A number plus its conjugate is $2a$, and a number times its conjugate is $a^2 + b^2$: so the two brackets of a conjugate pair multiply to $x^2 - 2ax + a^2 + b^2$, whose coefficients are real, and the brackets of the real numbers have real coefficients too."
              },
              {
                "step": "So the least degree is $5$.",
                "reason": "Answering the question asked: by line 4 no smaller degree is possible, and line 5 has degree $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least degree of a nonzero polynomial with real coefficients that has each of the numbers $-3i\\sqrt{14}$ and $-12$ as a root.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the least degree of a nonzero polynomial with real coefficients that has each of the numbers $-3i\\sqrt{14}$ and $-12$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $-3i\\sqrt{14}$ is not real, so its conjugate $3i\\sqrt{14}$ is a root too.",
                  "reason": "Conjugate roots: the coefficients are real, so the conjugate of each root that is not real is a root too."
                },
                {
                  "step": "The different roots found so far are $-3i\\sqrt{14}$, $-12$ and $3i\\sqrt{14}$, which is $3$ numbers.",
                  "reason": "Complex conjugate: the conjugate of $a + bi$ is $a - bi$, so a conjugate that is already on the given list is counted once."
                },
                {
                  "step": "So the degree is at least $3$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$ has at most $n$ different roots, and line 3 gives $3$."
                },
                {
                  "step": "The product of the brackets $x - r$, one for each number $r$ of line 3, has degree $3$, and its coefficients are real.",
                  "reason": "A number plus its conjugate is $2a$, and a number times its conjugate is $a^2 + b^2$: so the two brackets of a conjugate pair multiply to $x^2 - 2ax + a^2 + b^2$, whose coefficients are real, and the brackets of the real numbers have real coefficients too."
                },
                {
                  "step": "So the least degree is $3$.",
                  "reason": "Answering the question asked: by line 4 no smaller degree is possible, and line 5 has degree $3$."
                }
              ]
            },
            {
              "prompt": "Find the least degree of a nonzero polynomial with real coefficients that has each of the numbers $11 - 5i$, $8 - 4i$, $11 + 5i$ and $8 + 4i$ as a root.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the least degree of a nonzero polynomial with real coefficients that has each of the numbers $11 - 5i$, $8 - 4i$, $11 + 5i$ and $8 + 4i$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $11 - 5i$, $8 - 4i$, $11 + 5i$ and $8 + 4i$ are not real, so their conjugates $11 + 5i$, $8 + 4i$, $11 - 5i$ and $8 - 4i$ are roots too.",
                  "reason": "Conjugate roots: the coefficients are real, so the conjugate of each root that is not real is a root too."
                },
                {
                  "step": "The different roots found so far are $11 - 5i$, $8 - 4i$, $11 + 5i$ and $8 + 4i$, which is $4$ numbers.",
                  "reason": "Complex conjugate: the conjugate of $a + bi$ is $a - bi$, so a conjugate that is already on the given list is counted once."
                },
                {
                  "step": "So the degree is at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$ has at most $n$ different roots, and line 3 gives $4$."
                },
                {
                  "step": "The product of the brackets $x - r$, one for each number $r$ of line 3, has degree $4$, and its coefficients are real.",
                  "reason": "A number plus its conjugate is $2a$, and a number times its conjugate is $a^2 + b^2$: so the two brackets of a conjugate pair multiply to $x^2 - 2ax + a^2 + b^2$, whose coefficients are real, and the brackets of the real numbers have real coefficients too."
                },
                {
                  "step": "So the least degree is $4$.",
                  "reason": "Answering the question asked: by line 4 no smaller degree is possible, and line 5 has degree $4$."
                }
              ]
            },
            {
              "prompt": "Find the least degree of a nonzero polynomial with real coefficients that has each of the numbers $-2 - 5i$, $-5i\\sqrt{7}$, $-2 + 5i$ and $9 + 2i$ as a root.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the least degree of a nonzero polynomial with real coefficients that has each of the numbers $-2 - 5i$, $-5i\\sqrt{7}$, $-2 + 5i$ and $9 + 2i$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $-2 - 5i$, $-5i\\sqrt{7}$, $-2 + 5i$ and $9 + 2i$ are not real, so their conjugates $-2 + 5i$, $5i\\sqrt{7}$, $-2 - 5i$ and $9 - 2i$ are roots too.",
                  "reason": "Conjugate roots: the coefficients are real, so the conjugate of each root that is not real is a root too."
                },
                {
                  "step": "The different roots found so far are $-2 - 5i$, $-5i\\sqrt{7}$, $-2 + 5i$, $9 + 2i$, $5i\\sqrt{7}$ and $9 - 2i$, which is $6$ numbers.",
                  "reason": "Complex conjugate: the conjugate of $a + bi$ is $a - bi$, so a conjugate that is already on the given list is counted once."
                },
                {
                  "step": "So the degree is at least $6$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$ has at most $n$ different roots, and line 3 gives $6$."
                },
                {
                  "step": "The product of the brackets $x - r$, one for each number $r$ of line 3, has degree $6$, and its coefficients are real.",
                  "reason": "A number plus its conjugate is $2a$, and a number times its conjugate is $a^2 + b^2$: so the two brackets of a conjugate pair multiply to $x^2 - 2ax + a^2 + b^2$, whose coefficients are real, and the brackets of the real numbers have real coefficients too."
                },
                {
                  "step": "So the least degree is $6$.",
                  "reason": "Answering the question asked: by line 4 no smaller degree is possible, and line 5 has degree $6$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t203-k5",
      "forms": [
        {
          "example": {
            "problem": "Factor $f(x) = 20x^4 - 147x^3 + 808x^2 - 807x - 462$ completely over the real numbers, given that $3 + 2i\\sqrt{6}$ is a root of $f(x)$.",
            "lines": [
              {
                "step": "Factor $f(x) = 20x^4 - 147x^3 + 808x^2 - 807x - 462$ completely over the real numbers, given that $3 + 2i\\sqrt{6}$ is a root of $f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate $3 - 2i\\sqrt{6}$ is also a root.",
                "reason": "Conjugate roots: the coefficients are real and $3 + 2i\\sqrt{6}$ is not real, so its conjugate is a root too."
              },
              {
                "step": "The numbers $3 + 2i\\sqrt{6}$ and $3 - 2i\\sqrt{6}$ are the roots of $x^2 - 6x + 33$.",
                "reason": "Sum of roots $-b/a$ and product of roots $c/a$: the two numbers have the sum $6$ and, as a number times its conjugate, the product $3^2 + (2\\sqrt{6})^2 = 33$."
              },
              {
                "step": "$f(x) - 20x^2(x^2 - 6x + 33) = -27x^3 + 148x^2 - 807x - 462$",
                "reason": "Long division of polynomials: the leading term of $f(x)$ over $x^2$ gives the first term $20x^2$ of the quotient, and that term times the divisor is taken away."
              },
              {
                "step": "$-27x^3 + 148x^2 - 807x - 462 + 27x(x^2 - 6x + 33) = -14x^2 + 84x - 462$",
                "reason": "Long division of polynomials: the leading term of line 4's right side over $x^2$ gives the next term $-27x$, and that term times the divisor is taken away."
              },
              {
                "step": "$-14x^2 + 84x - 462 + 14(x^2 - 6x + 33) = 0$",
                "reason": "Long division of polynomials: the leading term of line 5's right side over $x^2$ gives the last term $-14$, and that term times the divisor leaves the remainder $0$."
              },
              {
                "step": "$f(x) = (x^2 - 6x + 33)(20x^2 - 27x - 14)$",
                "reason": "Division statement: the quotient is the sum $20x^2 - 27x - 14$ of the three terms of lines 4 to 6, and the remainder is $0$."
              },
              {
                "step": "$20x^2 - 27x - 14 = (4x - 7)(5x + 2)$",
                "reason": "Factoring a quadratic: $(4x - 7)(5x + 2)$ multiplies out to $20x^2 - 27x - 14$."
              },
              {
                "step": "The discriminant of $x^2 - 6x + 33$ is $(-6)^2 - 4 \\cdot 33 = -96$, which is below $0$.",
                "reason": "Discriminant $b^2 - 4ac$: a negative discriminant means no real root, so the quadratic has no factor of degree $1$ with real coefficients."
              },
              {
                "step": "$f(x) = (4x - 7)(5x + 2)(x^2 - 6x + 33)$",
                "reason": "Substitution, with Real factorization: line 8 takes the place of the quotient in line 7, which leaves factors of degree $1$ and $2$ with real coefficients, and by line 9 the factor of degree $2$ splits no further."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $f(x) = 5x^4 + 38x^3 + 399x^2 + 1174x - 536$ completely over the real numbers, given that $-2 - 3i\\sqrt{7}$ is a root of $f(x)$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(x+4)*(5*x-2)*(x^2+4*x+67)",
              "lines": [
                {
                  "step": "Factor $f(x) = 5x^4 + 38x^3 + 399x^2 + 1174x - 536$ completely over the real numbers, given that $-2 - 3i\\sqrt{7}$ is a root of $f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-2 + 3i\\sqrt{7}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $-2 - 3i\\sqrt{7}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The numbers $-2 - 3i\\sqrt{7}$ and $-2 + 3i\\sqrt{7}$ are the roots of $x^2 + 4x + 67$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: the two numbers have the sum $-4$ and, as a number times its conjugate, the product $(-2)^2 + (3\\sqrt{7})^2 = 67$."
                },
                {
                  "step": "$f(x) - 5x^2(x^2 + 4x + 67) = 18x^3 + 64x^2 + 1174x - 536$",
                  "reason": "Long division of polynomials: the leading term of $f(x)$ over $x^2$ gives the first term $5x^2$ of the quotient, and that term times the divisor is taken away."
                },
                {
                  "step": "$18x^3 + 64x^2 + 1174x - 536 - 18x(x^2 + 4x + 67) = -8x^2 - 32x - 536$",
                  "reason": "Long division of polynomials: the leading term of line 4's right side over $x^2$ gives the next term $18x$, and that term times the divisor is taken away."
                },
                {
                  "step": "$-8x^2 - 32x - 536 + 8(x^2 + 4x + 67) = 0$",
                  "reason": "Long division of polynomials: the leading term of line 5's right side over $x^2$ gives the last term $-8$, and that term times the divisor leaves the remainder $0$."
                },
                {
                  "step": "$f(x) = (x^2 + 4x + 67)(5x^2 + 18x - 8)$",
                  "reason": "Division statement: the quotient is the sum $5x^2 + 18x - 8$ of the three terms of lines 4 to 6, and the remainder is $0$."
                },
                {
                  "step": "$5x^2 + 18x - 8 = (x + 4)(5x - 2)$",
                  "reason": "Factoring a quadratic: $(x + 4)(5x - 2)$ multiplies out to $5x^2 + 18x - 8$."
                },
                {
                  "step": "The discriminant of $x^2 + 4x + 67$ is $4^2 - 4 \\cdot 67 = -252$, which is below $0$.",
                  "reason": "Discriminant $b^2 - 4ac$: a negative discriminant means no real root, so the quadratic has no factor of degree $1$ with real coefficients."
                },
                {
                  "step": "$f(x) = (x + 4)(5x - 2)(x^2 + 4x + 67)$",
                  "reason": "Substitution, with Real factorization: line 8 takes the place of the quotient in line 7, which leaves factors of degree $1$ and $2$ with real coefficients, and by line 9 the factor of degree $2$ splits no further."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = 10x^4 - 117x^3 + 850x^2 - 990x - 1400$ completely over the real numbers, given that $5 + 3i\\sqrt{5}$ is a root of $f(x)$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(2*x-5)*(5*x+4)*(x^2-10*x+70)",
              "lines": [
                {
                  "step": "Factor $f(x) = 10x^4 - 117x^3 + 850x^2 - 990x - 1400$ completely over the real numbers, given that $5 + 3i\\sqrt{5}$ is a root of $f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $5 - 3i\\sqrt{5}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $5 + 3i\\sqrt{5}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The numbers $5 + 3i\\sqrt{5}$ and $5 - 3i\\sqrt{5}$ are the roots of $x^2 - 10x + 70$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: the two numbers have the sum $10$ and, as a number times its conjugate, the product $5^2 + (3\\sqrt{5})^2 = 70$."
                },
                {
                  "step": "$f(x) - 10x^2(x^2 - 10x + 70) = -17x^3 + 150x^2 - 990x - 1400$",
                  "reason": "Long division of polynomials: the leading term of $f(x)$ over $x^2$ gives the first term $10x^2$ of the quotient, and that term times the divisor is taken away."
                },
                {
                  "step": "$-17x^3 + 150x^2 - 990x - 1400 + 17x(x^2 - 10x + 70) = -20x^2 + 200x - 1400$",
                  "reason": "Long division of polynomials: the leading term of line 4's right side over $x^2$ gives the next term $-17x$, and that term times the divisor is taken away."
                },
                {
                  "step": "$-20x^2 + 200x - 1400 + 20(x^2 - 10x + 70) = 0$",
                  "reason": "Long division of polynomials: the leading term of line 5's right side over $x^2$ gives the last term $-20$, and that term times the divisor leaves the remainder $0$."
                },
                {
                  "step": "$f(x) = (x^2 - 10x + 70)(10x^2 - 17x - 20)$",
                  "reason": "Division statement: the quotient is the sum $10x^2 - 17x - 20$ of the three terms of lines 4 to 6, and the remainder is $0$."
                },
                {
                  "step": "$10x^2 - 17x - 20 = (2x - 5)(5x + 4)$",
                  "reason": "Factoring a quadratic: $(2x - 5)(5x + 4)$ multiplies out to $10x^2 - 17x - 20$."
                },
                {
                  "step": "The discriminant of $x^2 - 10x + 70$ is $(-10)^2 - 4 \\cdot 70 = -180$, which is below $0$.",
                  "reason": "Discriminant $b^2 - 4ac$: a negative discriminant means no real root, so the quadratic has no factor of degree $1$ with real coefficients."
                },
                {
                  "step": "$f(x) = (2x - 5)(5x + 4)(x^2 - 10x + 70)$",
                  "reason": "Substitution, with Real factorization: line 8 takes the place of the quotient in line 7, which leaves factors of degree $1$ and $2$ with real coefficients, and by line 9 the factor of degree $2$ splits no further."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = 8x^4 + 90x^3 + 463x^2 - 516x - 612$ completely over the real numbers, given that $-6 + 4i\\sqrt{2}$ is a root of $f(x)$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(2*x-3)*(4*x+3)*(x^2+12*x+68)",
              "lines": [
                {
                  "step": "Factor $f(x) = 8x^4 + 90x^3 + 463x^2 - 516x - 612$ completely over the real numbers, given that $-6 + 4i\\sqrt{2}$ is a root of $f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-6 - 4i\\sqrt{2}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $-6 + 4i\\sqrt{2}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The numbers $-6 + 4i\\sqrt{2}$ and $-6 - 4i\\sqrt{2}$ are the roots of $x^2 + 12x + 68$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: the two numbers have the sum $-12$ and, as a number times its conjugate, the product $(-6)^2 + (4\\sqrt{2})^2 = 68$."
                },
                {
                  "step": "$f(x) - 8x^2(x^2 + 12x + 68) = -6x^3 - 81x^2 - 516x - 612$",
                  "reason": "Long division of polynomials: the leading term of $f(x)$ over $x^2$ gives the first term $8x^2$ of the quotient, and that term times the divisor is taken away."
                },
                {
                  "step": "$-6x^3 - 81x^2 - 516x - 612 + 6x(x^2 + 12x + 68) = -9x^2 - 108x - 612$",
                  "reason": "Long division of polynomials: the leading term of line 4's right side over $x^2$ gives the next term $-6x$, and that term times the divisor is taken away."
                },
                {
                  "step": "$-9x^2 - 108x - 612 + 9(x^2 + 12x + 68) = 0$",
                  "reason": "Long division of polynomials: the leading term of line 5's right side over $x^2$ gives the last term $-9$, and that term times the divisor leaves the remainder $0$."
                },
                {
                  "step": "$f(x) = (x^2 + 12x + 68)(8x^2 - 6x - 9)$",
                  "reason": "Division statement: the quotient is the sum $8x^2 - 6x - 9$ of the three terms of lines 4 to 6, and the remainder is $0$."
                },
                {
                  "step": "$8x^2 - 6x - 9 = (2x - 3)(4x + 3)$",
                  "reason": "Factoring a quadratic: $(2x - 3)(4x + 3)$ multiplies out to $8x^2 - 6x - 9$."
                },
                {
                  "step": "The discriminant of $x^2 + 12x + 68$ is $12^2 - 4 \\cdot 68 = -128$, which is below $0$.",
                  "reason": "Discriminant $b^2 - 4ac$: a negative discriminant means no real root, so the quadratic has no factor of degree $1$ with real coefficients."
                },
                {
                  "step": "$f(x) = (2x - 3)(4x + 3)(x^2 + 12x + 68)$",
                  "reason": "Substitution, with Real factorization: line 8 takes the place of the quotient in line 7, which leaves factors of degree $1$ and $2$ with real coefficients, and by line 9 the factor of degree $2$ splits no further."
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
      "id": "t203-p1",
      "method": "direct proof",
      "statement": "Let $f(x)$ be a polynomial with real coefficients, and let $a$ and $b$ be real numbers with $b \\ne 0$. If $f(a + bi) = 0$, then $f(a - bi) = 0$.",
      "idea": "The two brackets $x - (a + bi)$ and $x - (a - bi)$ multiply to a quadratic $g(x)$ with real coefficients. Dividing $f(x)$ by $g(x)$ leaves a remainder $cx + d$ with real $c$ and $d$, and $a + bi$ makes that remainder $0$. A real line $cx + d$ that is $0$ at a number that is not real is the zero polynomial, so $g(x)$ is a factor of $f(x)$, and $g(a - bi) = 0$ finishes the proof.",
      "lines": [
        {
          "line": "$g(x) = (x - (a + bi))(x - (a - bi)) = x^2 - 2ax + a^2 + b^2$",
          "reason": "A number plus its conjugate is $2a$, and a number times its conjugate is $a^2 + b^2$: the product is $x^2$ minus the sum of the two numbers times $x$, plus their product."
        },
        {
          "line": "The coefficients $1$, $-2a$ and $a^2 + b^2$ of $g(x)$ are real.",
          "reason": "Real number: sums and products of the real numbers $a$ and $b$ are real."
        },
        {
          "line": "Dividing by $g(x)$ gives $f(x) = g(x)q(x) + cx + d$ for a polynomial $q(x)$ and numbers $c$ and $d$.",
          "reason": "Division statement and degree of the remainder: dividing by $g(x)$, of degree $2$, leaves a remainder that is $0$ or has degree below $2$."
        },
        {
          "line": "The coefficients of $q(x)$ and the numbers $c$ and $d$ are real.",
          "reason": "Long division of polynomials: each step divides by the leading coefficient $1$ of $g(x)$ and takes away a real multiple of $g(x)$, so only real numbers arise."
        },
        {
          "line": "$g(a + bi) = 0$",
          "reason": "Substituting a value: the first bracket of line 1 is $0$ at $x = a + bi$."
        },
        {
          "line": "$f(a + bi) = c(a + bi) + d$",
          "reason": "Substituting a value: $a + bi$ goes in place of $x$ in line 3, and line 5 makes the first term $0$."
        },
        {
          "line": "$c(a + bi) + d = 0$",
          "reason": "The hypothesis: $f(a + bi) = 0$, with line 6."
        },
        {
          "line": "$(ca + d) + cbi = 0$",
          "reason": "The distributive law, from arithmetic, then collecting like terms in line 7."
        },
        {
          "line": "So $cb = 0$ and $ca + d = 0$.",
          "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: line 8 has real part $ca + d$ and imaginary part $cb$, by line 4, and $0$ has both parts $0$."
        },
        {
          "line": "$c = 0$",
          "reason": "Dividing both sides by a nonzero number: $cb = 0$ is divided by $b \\ne 0$."
        },
        {
          "line": "$d = 0$",
          "reason": "Substituting a value: $c = 0$ in $ca + d = 0$ of line 9 leaves $d = 0$."
        },
        {
          "line": "$f(x) = g(x)q(x)$",
          "reason": "Substituting a value: lines 10 and 11 make the remainder of line 3 zero."
        },
        {
          "line": "$g(a - bi) = 0$",
          "reason": "Substituting a value: the second bracket of line 1 is $0$ at $x = a - bi$."
        },
        {
          "line": "$f(a - bi) = 0 \\cdot q(a - bi) = 0$",
          "reason": "Substituting a value: $a - bi$ goes in place of $x$ in line 12, and line 13 gives the first factor; a product with a factor $0$ is $0$."
        }
      ]
    },
    {
      "id": "t203-p2",
      "method": "direct proof",
      "statement": "Let $f(x)$ be a polynomial with real coefficients, and let $r = a + bi$ with $a$ and $b$ real and $b \\ne 0$. If $(x - r)^2$ is a factor of $f(x)$, then $(x - \\overline{r})^2$ is a factor of $f(x)$.",
      "idea": "Conjugate roots makes $\\overline{r}$ a root, so $f(x)$ is $(x - r)(x - \\overline{r})$, a quadratic with real coefficients, times a quotient $q(x)$ that also has real coefficients. The second bracket $x - r$ sits inside $q(x)$, so $r$ is a root of $q(x)$, and Conjugate roots on $q(x)$ gives the second bracket $x - \\overline{r}$.",
      "lines": [
        {
          "line": "So $f(x) = (x - r)^2h(x)$ for a polynomial $h(x)$.",
          "reason": "Factor Theorem, its definition of a factor: $(x - r)^2$ is a factor of $f(x)$ by the hypothesis."
        },
        {
          "line": "$f(r) = 0$",
          "reason": "Substituting a value: the bracket $x - r$ of line 1 is $0$ at $x = r$."
        },
        {
          "line": "$f(\\overline{r}) = 0$",
          "reason": "Conjugate roots: $f(x)$ has real coefficients, $r$ is not real since $b \\ne 0$, and line 2."
        },
        {
          "line": "$\\overline{r} - r = -2bi \\ne 0$",
          "reason": "Complex conjugate: $\\overline{r} = a - bi$, and $-2bi$ has the imaginary part $-2b \\ne 0$."
        },
        {
          "line": "$f(\\overline{r}) = (\\overline{r} - r)^2h(\\overline{r})$",
          "reason": "Substituting a value: $\\overline{r}$ goes in place of $x$ in line 1."
        },
        {
          "line": "$h(\\overline{r}) = 0$",
          "reason": "Zero-product property: by lines 3 and 5 the product is $0$, and by line 4 the factor $(\\overline{r} - r)^2$ is not $0$."
        },
        {
          "line": "So $h(x) = (x - \\overline{r})v(x)$ for a polynomial $v(x)$.",
          "reason": "Factor Theorem, with line 6."
        },
        {
          "line": "$f(x) = (x - r)^2(x - \\overline{r})v(x)$",
          "reason": "Substitution: line 7 takes the place of $h(x)$ in line 1."
        },
        {
          "line": "So $f(x) = g(x)q(x)$, with $g(x) = (x - r)(x - \\overline{r})$ and $q(x) = (x - r)v(x)$.",
          "reason": "The commutative and associative laws of multiplication, from arithmetic: the four factors of line 8 are regrouped."
        },
        {
          "line": "$g(x) = x^2 - 2ax + a^2 + b^2$",
          "reason": "A number plus its conjugate is $2a$, and a number times its conjugate is $a^2 + b^2$."
        },
        {
          "line": "So $f(x) = g(x)q(x) + 0$, and $q(x)$ is the quotient and $0$ the remainder of $f(x)$ divided by $g(x)$.",
          "reason": "Division statement: exactly one pair of polynomials, a quotient and a remainder that is $0$ or of degree below that of $g(x)$, gives $f(x)$ this way."
        },
        {
          "line": "The coefficients of $q(x)$ are real.",
          "reason": "Long division of polynomials: $f(x)$ and $g(x)$ have real coefficients, by the hypothesis and line 10, and the leading coefficient of $g(x)$ is $1$, so each step uses real numbers only."
        },
        {
          "line": "$q(r) = 0$",
          "reason": "Substituting a value: the bracket $x - r$ of $q(x)$ in line 9 is $0$ at $x = r$."
        },
        {
          "line": "$q(\\overline{r}) = 0$",
          "reason": "Conjugate roots: $q(x)$ has real coefficients by line 12, $r$ is not real, and line 13."
        },
        {
          "line": "So $q(x) = (x - \\overline{r})w(x)$ for a polynomial $w(x)$.",
          "reason": "Factor Theorem, with line 14."
        },
        {
          "line": "$f(x) = (x - r)(x - \\overline{r})^2w(x)$",
          "reason": "Substitution: line 15 takes the place of $q(x)$ in line 9."
        },
        {
          "line": "So $(x - \\overline{r})^2$ is a factor of $f(x)$.",
          "reason": "Factor Theorem, its definition of a factor: line 16 writes $f(x)$ as $(x - \\overline{r})^2$ times a polynomial."
        }
      ]
    },
    {
      "id": "t203-p3",
      "method": "proof by contradiction",
      "statement": "Every polynomial of degree at least $1$ with real coefficients is a product of polynomials with real coefficients, each of degree $1$ or $2$.",
      "idea": "Take a polynomial of least degree for which the statement fails. It has a root by the Fundamental Theorem of Algebra. A real root splits off a factor of degree $1$, and a root that is not real splits off, with its conjugate, a factor of degree $2$; both leave a quotient of smaller degree with real coefficients, which is such a product. So the polynomial was such a product after all.",
      "lines": [
        {
          "line": "Suppose that some polynomial of degree at least $1$ with real coefficients is not such a product.",
          "reason": "Proof by contradiction: the conclusion is taken to be false."
        },
        {
          "line": "Among these polynomials, $f(x)$ has the least degree $n$.",
          "reason": "A nonempty set of whole numbers has a least member, from arithmetic: the degrees of the polynomials of line 1 form such a set."
        },
        {
          "line": "$n \\ge 3$",
          "reason": "Degree: a polynomial of degree $1$ or $2$ is a product of one factor of degree $1$ or $2$, so $n$ is neither."
        },
        {
          "line": "The polynomial $f(x)$ has a complex root $r$.",
          "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity."
        },
        {
          "line": "If $r$ is real, then $f(x) = (x - r)h(x)$ for a polynomial $h(x)$.",
          "reason": "Factor Theorem."
        },
        {
          "line": "In that case $h(x)$ has real coefficients.",
          "reason": "Synthetic division: dividing by $x - r$ with $r$ real uses real numbers only."
        },
        {
          "line": "In that case $h(x)$ has degree $n - 1$.",
          "reason": "Degree of a product is the sum of the degrees: line 5."
        },
        {
          "line": "If $r = a + bi$ with $b \\ne 0$, then $a - bi$ is a root of $f(x)$ too.",
          "reason": "Conjugate roots: $f(x)$ has real coefficients."
        },
        {
          "line": "In that case $f(x) = (x - r)v(x)$ for a polynomial $v(x)$.",
          "reason": "Factor Theorem."
        },
        {
          "line": "In that case $v(\\overline{r}) = 0$.",
          "reason": "Zero-product property: $f(\\overline{r}) = (\\overline{r} - r)v(\\overline{r}) = 0$ by lines 8 and 9, and $\\overline{r} - r = -2bi \\ne 0$."
        },
        {
          "line": "In that case $v(x) = (x - \\overline{r})h(x)$ for a polynomial $h(x)$.",
          "reason": "Factor Theorem, with line 10."
        },
        {
          "line": "In that case $f(x) = (x - r)(x - \\overline{r})h(x)$.",
          "reason": "Substitution: line 11 takes the place of $v(x)$ in line 9."
        },
        {
          "line": "$(x - r)(x - \\overline{r}) = x^2 - 2ax + a^2 + b^2$",
          "reason": "A number plus its conjugate is $2a$, and a number times its conjugate is $a^2 + b^2$."
        },
        {
          "line": "In that case $h(x)$ has real coefficients.",
          "reason": "Division statement and long division of polynomials: by lines 12 and 13, $h(x)$ is the quotient of $f(x)$ by $x^2 - 2ax + a^2 + b^2$, whose coefficients are real and whose leading coefficient is $1$, so each step uses real numbers only."
        },
        {
          "line": "In that case $h(x)$ has degree $n - 2$.",
          "reason": "Degree of a product is the sum of the degrees: lines 12 and 13."
        },
        {
          "line": "In both cases $h(x)$ has degree at least $1$ and below $n$.",
          "reason": "Lines 3, 7 and 15: $n - 1$ and $n - 2$ are at least $1$ when $n \\ge 3$."
        },
        {
          "line": "The polynomial $h(x)$ is a product of polynomials with real coefficients, each of degree $1$ or $2$.",
          "reason": "Line 2: $n$ is the least degree of the polynomials of line 1, and $h(x)$ has real coefficients (lines 6 and 14) and a smaller degree."
        },
        {
          "line": "So $f(x)$ is such a product.",
          "reason": "Substitution: line 17 takes the place of $h(x)$ in line 5, or in line 12 with line 13, and $x - r$ and $x^2 - 2ax + a^2 + b^2$ have real coefficients and degree $1$ and $2$."
        },
        {
          "line": "So every polynomial of degree at least $1$ with real coefficients is such a product.",
          "reason": "Proof by contradiction: line 18 contradicts the choice of $f(x)$ in line 2, so the supposition of line 1 is false."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t203-s1",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a_3$, $a_2$, $a_1$ and $a_0$ and the polynomial $f(x) = a_3x^3 + a_2x^2 + a_1x + a_0$, every complex number $z$ has $f(\\overline{z}) = \\overline{f(z)}$. Facts it may use: complex conjugate, conjugate of a sum, conjugate of a product, real number, substituting a value, substitution.",
      "check": {
        "proof": [
          {
            "line": "$\\overline{f(z)} = \\overline{a_3z^3} + \\overline{a_2z^2} + \\overline{a_1z} + \\overline{a_0}$",
            "reason": "Conjugate of a sum: the conjugate of a sum is the sum of the conjugates."
          },
          {
            "line": "$\\overline{a_3} = a_3$, $\\overline{a_2} = a_2$, $\\overline{a_1} = a_1$ and $\\overline{a_0} = a_0$",
            "reason": "Complex conjugate: a real number $a + 0i$ has the conjugate $a - 0i$, the same number."
          },
          {
            "line": "$\\overline{z^2} = \\overline{z} \\cdot \\overline{z} = \\overline{z}^2$",
            "reason": "Conjugate of a product: $z^2 = z \\cdot z$."
          },
          {
            "line": "$\\overline{z^3} = \\overline{z^2} \\cdot \\overline{z} = \\overline{z}^3$",
            "reason": "Conjugate of a product: $z^3 = z^2 \\cdot z$, then line 3."
          },
          {
            "line": "$\\overline{a_3z^3} = a_3\\overline{z}^3$, $\\overline{a_2z^2} = a_2\\overline{z}^2$ and $\\overline{a_1z} = a_1\\overline{z}$",
            "reason": "Conjugate of a product, with lines 2 to 4."
          },
          {
            "line": "$\\overline{f(z)} = a_3\\overline{z}^3 + a_2\\overline{z}^2 + a_1\\overline{z} + a_0$",
            "reason": "Substitution: lines 2 and 5 take the place of the conjugates in line 1."
          },
          {
            "line": "$\\overline{f(z)} = f(\\overline{z})$",
            "reason": "Substituting a value: $\\overline{z}$ in place of $x$ in $f(x)$ gives the right side of line 6."
          }
        ]
      }
    },
    {
      "id": "t203-s2",
      "method": "proof by contradiction",
      "statement": "Prove that every polynomial of degree $3$ with real coefficients has a real root. Facts it may use: Real factorization, degree, degree of a product is the sum of the degrees, zero-product property, isolating the variable.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $f(x)$ has degree $3$, real coefficients and no real root.",
            "reason": "Proof by contradiction: the conclusion is taken to be false."
          },
          {
            "line": "The polynomial $f(x)$ is a product of polynomials with real coefficients, each of degree $1$ or $2$.",
            "reason": "Real factorization: $f(x)$ has degree $3$, which is at least $1$."
          },
          {
            "line": "A factor $cx + d$ of degree $1$, with $c \\ne 0$, has the real root $-\\dfrac{d}{c}$.",
            "reason": "Isolating the variable: $cx + d = 0$ gives $x = -\\dfrac{d}{c}$, a real number."
          },
          {
            "line": "That number would be a root of $f(x)$.",
            "reason": "Zero-product property: at $x = -\\dfrac{d}{c}$ the factor $cx + d$ is $0$, so the product $f(x)$ is $0$."
          },
          {
            "line": "So no factor of $f(x)$ has degree $1$.",
            "reason": "Line 4 contradicts line 1."
          },
          {
            "line": "So each factor of $f(x)$ has degree $2$.",
            "reason": "Line 2: each factor has degree $1$ or $2$, and line 5."
          },
          {
            "line": "With one factor, $f(x)$ has degree $2$.",
            "reason": "Degree: the one factor is $f(x)$ itself."
          },
          {
            "line": "With two factors or more, $f(x)$ has degree at least $4$.",
            "reason": "Degree of a product is the sum of the degrees: $2 + 2 = 4$, and each further factor adds $2$."
          },
          {
            "line": "So the degree of $f(x)$ is not $3$, which is false.",
            "reason": "Degree: lines 7 and 8, against line 1."
          },
          {
            "line": "So every polynomial of degree $3$ with real coefficients has a real root.",
            "reason": "Proof by contradiction: line 9 is false, so the supposition of line 1 is false."
          }
        ]
      }
    },
    {
      "id": "t203-s3",
      "method": "direct proof",
      "statement": "Prove that for real numbers $c_3$, $c_2$, $c_1$ and $c_0$, if $a + bi$, with $a$ and $b$ real, is a root of $h(z) = c_3z^3 + ic_2z^2 + c_1z + ic_0$, then $-a + bi$ is also a root of $h(z)$. Facts it may use: Conjugate roots, the number $i$ with $i^2 = -1$, powers of $i$ repeat every four, taking out a common factor, real number, substituting a value, power of a product, substitution, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "$h(xi) = c_3(xi)^3 + ic_2(xi)^2 + c_1(xi) + ic_0$",
            "reason": "Substituting a value: $xi$ goes in place of $z$."
          },
          {
            "line": "$h(xi) = c_3x^3i^3 + ic_2x^2i^2 + c_1xi + ic_0$",
            "reason": "Power of a product: $(xi)^3 = x^3i^3$ and $(xi)^2 = x^2i^2$."
          },
          {
            "line": "$h(xi) = -ic_3x^3 - ic_2x^2 + ic_1x + ic_0$",
            "reason": "Powers of $i$ repeat every four: $i^3 = -i$ and $i^2 = -1$."
          },
          {
            "line": "$h(xi) = i(-c_3x^3 - c_2x^2 + c_1x + c_0)$",
            "reason": "Taking out a common factor: each term holds $i$."
          },
          {
            "line": "So $h(xi) = if(x)$, where $f(x) = -c_3x^3 - c_2x^2 + c_1x + c_0$ has real coefficients.",
            "reason": "Real number: the negatives of the real numbers $c_3$ and $c_2$ are real."
          },
          {
            "line": "$h((b - ai)i) = if(b - ai)$",
            "reason": "Substituting a value: $b - ai$ goes in place of $x$ in line 5."
          },
          {
            "line": "$(b - ai)i = a + bi$",
            "reason": "The number $i$ with $i^2 = -1$: $(b - ai)i = bi - ai^2 = a + bi$."
          },
          {
            "line": "$if(b - ai) = h(a + bi)$",
            "reason": "Substitution: line 7 takes the place of $(b - ai)i$ in line 6."
          },
          {
            "line": "$if(b - ai) = 0$",
            "reason": "The hypothesis: $a + bi$ is a root of $h(z)$, so $h(a + bi) = 0$."
          },
          {
            "line": "$f(b - ai) = 0$",
            "reason": "Dividing both sides by a nonzero number: line 9 is divided by $i$."
          },
          {
            "line": "$f(b + ai) = 0$",
            "reason": "Conjugate roots: $f(x)$ has real coefficients, and $b + ai$ is the conjugate of $b - ai$. When $a = 0$ the two numbers are the same and line 10 gives it."
          },
          {
            "line": "$h((b + ai)i) = if(b + ai) = 0$",
            "reason": "Substituting a value: $b + ai$ goes in place of $x$ in line 5, then line 11."
          },
          {
            "line": "$(b + ai)i = -a + bi$",
            "reason": "The number $i$ with $i^2 = -1$: $(b + ai)i = bi + ai^2 = -a + bi$."
          },
          {
            "line": "So $h(-a + bi) = 0$, and $-a + bi$ is a root of $h(z)$.",
            "reason": "Substitution: line 13 takes the place of $(b + ai)i$ in line 12."
          }
        ]
      }
    }
  ]
}
