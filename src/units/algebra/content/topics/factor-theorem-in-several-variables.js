export default {
  "number": 207,
  "title": "The Factor Theorem for several variables",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "277-282"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Factor $x^3 + y^3 + z^3 - (x + y + z)(x^2 + y^2 + z^2) - 2xyz$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "-(x+y)*(z+y)*(x+z)",
    "solution": [
      "Factor $x^3 + y^3 + z^3 - (x + y + z)(x^2 + y^2 + z^2) - 2xyz$.",
      "The polynomial is a symmetric polynomial.",
      "Putting $-y$ for $x$ gives $(-y)^3 + y^3 + z^3 - ((-y) + y + z)((-y)^2 + y^2 + z^2) - 2(-y)yz$. With like terms collected inside the brackets, this is $-y^3 + y^3 + z^3 - z(2y^2 + z^2) + 2y^2z$. Multiplied out, it is $-y^3 + y^3 + z^3 - (2y^2z + z^3) + 2y^2z$, which is $0$.",
      "So $x + y$ is a factor of the polynomial.",
      "So $z + y$ and $x + z$ are factors of the polynomial too.",
      "The polynomial is $(x + y)(z + y)(x + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x + y)(z + y)(x + z)$.",
      "At $x = 1$, $y = 1$ and $z = 1$ the polynomial is $1^3 + 1^3 + 1^3 - (1 + 1 + 1)(1^2 + 1^2 + 1^2) - 2 \\cdot 1 \\cdot 1 \\cdot 1 = 1^3 + 1^3 + 1^3 - 3 \\cdot 3 - 2 \\cdot 1 \\cdot 1 \\cdot 1 = 1 + 1 + 1 - 9 - 2 = -8$, and the product of line 7 is $a(1 + 1)(1 + 1)(1 + 1) = a \\cdot 2 \\cdot 2 \\cdot 2 = 8a$.",
      "So $8a = -8$.",
      "So $a = -1$.",
      "$x^3 + y^3 + z^3 - (x + y + z)(x^2 + y^2 + z^2) - 2xyz = -(x + y)(z + y)(x + z)$"
    ]
  },
  "ideas": [
    {
      "name": "Factor Theorem for several variables",
      "concrete": "Putting $2y$ for $x$ in $x^2 + xy^2 - 2xy + 5x - 2y^3 - 10y$ gives $(2y)^2 + (2y)y^2 - 2(2y)y + 5(2y) - 2y^3 - 10y$, which is $4y^2 + 2y^3 - 4y^2 + 10y - 2y^3 - 10y$, and this is $0$ whatever number $y$ is. The polynomial factors as $x^2 + xy^2 - 2xy + 5x - 2y^3 - 10y = (x - 2y)(x + y^2 + 5)$, with the bracket $x - 2y$ as a factor.",
      "general": "A polynomial in several letters is a sum of terms, each a number times whole powers of the letters. The **degree** of a term is the sum of the powers of its letters, and the degree of the polynomial is the highest degree of its terms. Let $f(x, y)$ be a polynomial in $x$ and $y$, and let $h(y)$ be a polynomial in $y$. The polynomial $x - h(y)$ is a factor of $f(x, y)$, so that $f(x, y) = (x - h(y))g(x, y)$ for a polynomial $g(x, y)$, exactly when putting $h(y)$ for $x$ in $f(x, y)$ gives $0$ for every number $y$. This is the **Factor Theorem for several variables**. It holds in the same way for a polynomial in three letters or more, with $h$ a polynomial in the other letters, and with another letter in the place of $x$. Factors of degree $1$ of a polynomial, no one of them a number times another, are factors together: their product is a factor of the polynomial. This is **Factors of degree 1 are factors together**. For polynomials in several letters, none of them the zero polynomial, the degree of a product is the sum of the degrees. This is **Degree of a product in several letters**. The course states these two facts with no proof."
    },
    {
      "name": "Symmetric polynomial",
      "concrete": "Swapping $x$ and $y$ in $x^2 + y^2 + z^2 + 3xy + 3yz + 3xz$ gives $y^2 + x^2 + z^2 + 3yx + 3xz + 3yz$, the same six terms in another order. Swapping $y$ and $z$ gives the same six terms, and so does swapping $x$ and $z$.",
      "general": "A **symmetric polynomial** is a polynomial in several letters that is a symmetric expression: swapping two of its letters, whichever two, leaves it the same. Sums and products of symmetric polynomials are symmetric polynomials. In a symmetric polynomial a swap of two letters turns a factor into a factor: if $x + y$ is a factor of a symmetric polynomial in $x$, $y$ and $z$, then so are $z + y$ and $x + z$."
    }
  ],
  "kinds": [
    {
      "id": "t207-k1",
      "forms": [
        {
          "example": {
            "problem": "Factor $(x + y + z)^3 - (x + y + z)(x^2 + y^2 + z^2) - 2xyz$.",
            "lines": [
              {
                "step": "Factor $(x + y + z)^3 - (x + y + z)(x^2 + y^2 + z^2) - 2xyz$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial is a symmetric polynomial.",
                "reason": "Symmetric polynomial: swapping two of the letters $x$, $y$ and $z$, whichever two, changes only the order in which the terms and the letters inside them are written, so the polynomial stays the same."
              },
              {
                "step": "Putting $-y$ for $x$ gives $((-y) + y + z)^3 - ((-y) + y + z)((-y)^2 + y^2 + z^2) - 2(-y)yz$. With like terms collected inside the brackets, this is $z^3 - z(2y^2 + z^2) + 2y^2z$. Multiplied out, it is $z^3 - (2y^2z + z^3) + 2y^2z$, which is $0$.",
                "reason": "Substituting a value: the letter $x$ is replaced by $-y$, in brackets. Collecting like terms inside each bracket and multiplying out leaves terms that cancel."
              },
              {
                "step": "So $x + y$ is a factor of the polynomial.",
                "reason": "Factor Theorem for several variables: putting $-y$ for $x$ gives $0$ for all numbers $y$ and $z$, so $x - (-y)$, which is $x + y$, is a factor."
              },
              {
                "step": "So $z + y$ and $x + z$ are factors of the polynomial too.",
                "reason": "Symmetric polynomial: a swap of two letters leaves the polynomial the same and turns a factor into a factor. Swapping $x$ and $z$ turns $x + y$ into $z + y$, and swapping $y$ and $z$ turns $x + y$ into $x + z$."
              },
              {
                "step": "The polynomial is $(x + y)(z + y)(x + z)$ times a polynomial $g$.",
                "reason": "Factors of degree 1 are factors together: the three brackets have degree $1$ and no one is a number times another, so their product is a factor."
              },
              {
                "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x + y)(z + y)(x + z)$.",
                "reason": "Degree of a product in several letters: the product of the three brackets has degree $3$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
              },
              {
                "step": "At $x = 1$, $y = 1$ and $z = 1$ the polynomial is $(1 + 1 + 1)^3 - (1 + 1 + 1)(1^2 + 1^2 + 1^2) - 2 \\cdot 1 \\cdot 1 \\cdot 1 = 3^3 - 3 \\cdot 3 - 2 \\cdot 1 \\cdot 1 \\cdot 1 = 27 - 9 - 2 = 16$, and the product of line 7 is $a(1 + 1)(1 + 1)(1 + 1) = a \\cdot 2 \\cdot 2 \\cdot 2 = 8a$.",
                "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $1$, $1$ and $1$ in the polynomial and in the product of line 7."
              },
              {
                "step": "So $8a = 16$.",
                "reason": "Substitution: line 7 holds for all numbers $x$, $y$ and $z$, and the two values of line 8 are put into it."
              },
              {
                "step": "So $a = 2$.",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
              },
              {
                "step": "$(x + y + z)^3 - (x + y + z)(x^2 + y^2 + z^2) - 2xyz = 2(x + y)(z + y)(x + z)$",
                "reason": "Substitution: the number $2$ is put for $a$ in line 7."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $x^2(y + z) + y^2(x + z) + z^2(x + y) - x^3 - y^3 - z^3 - 2xyz$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "-(x-y-z)*(y-x-z)*(z-y-x)",
              "lines": [
                {
                  "step": "Factor $x^2(y + z) + y^2(x + z) + z^2(x + y) - x^3 - y^3 - z^3 - 2xyz$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is a symmetric polynomial.",
                  "reason": "Symmetric polynomial: swapping two of the letters $x$, $y$ and $z$, whichever two, changes only the order in which the terms and the letters inside them are written, so the polynomial stays the same."
                },
                {
                  "step": "Putting $y + z$ for $x$ gives $(y + z)^2(y + z) + y^2((y + z) + z) + z^2((y + z) + y) - (y + z)^3 - y^3 - z^3 - 2(y + z)yz$. With like terms collected inside the brackets, this is $(y + z)^3 + y^2(y + 2z) + z^2(2y + z) - (y + z)^3 - y^3 - z^3 - 2yz(y + z)$. Multiplied out, it is $(y^3 + 3y^2z + 3yz^2 + z^3) + (y^3 + 2y^2z) + (2yz^2 + z^3) - (y^3 + 3y^2z + 3yz^2 + z^3) - y^3 - z^3 - (2y^2z + 2yz^2)$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y + z$, in brackets. Collecting like terms inside each bracket and multiplying out leaves terms that cancel."
                },
                {
                  "step": "So $x - y - z$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $y + z$ for $x$ gives $0$ for all numbers $y$ and $z$, so $x - (y + z)$, which is $x - y - z$, is a factor."
                },
                {
                  "step": "So $y - x - z$ and $z - y - x$ are factors of the polynomial too.",
                  "reason": "Symmetric polynomial: a swap of two letters leaves the polynomial the same and turns a factor into a factor. Swapping $x$ and $y$ turns $x - y - z$ into $y - x - z$, and swapping $x$ and $z$ turns $x - y - z$ into $z - y - x$."
                },
                {
                  "step": "The polynomial is $(x - y - z)(y - x - z)(z - y - x)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the three brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y - z)(y - x - z)(z - y - x)$.",
                  "reason": "Degree of a product in several letters: the product of the three brackets has degree $3$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 3$, $y = 1$ and $z = 1$ the polynomial is $3^2 \\cdot (1 + 1) + 1^2 \\cdot (3 + 1) + 1^2 \\cdot (3 + 1) - 3^3 - 1^3 - 1^3 - 2 \\cdot 3 \\cdot 1 \\cdot 1 = 3^2 \\cdot 2 + 1^2 \\cdot 4 + 1^2 \\cdot 4 - 3^3 - 1^3 - 1^3 - 2 \\cdot 3 \\cdot 1 \\cdot 1 = 18 + 4 + 4 - 27 - 1 - 1 - 6 = -9$, and the product of line 7 is $a(3 - 1 - 1)(1 - 3 - 1)(1 - 1 - 3) = a \\cdot 1 \\cdot (-3) \\cdot (-3) = 9a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $3$, $1$ and $1$ in the polynomial and in the product of line 7."
                },
                {
                  "step": "So $9a = -9$.",
                  "reason": "Substitution: line 7 holds for all numbers $x$, $y$ and $z$, and the two values of line 8 are put into it."
                },
                {
                  "step": "So $a = -1$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                },
                {
                  "step": "$x^2(y + z) + y^2(x + z) + z^2(x + y) - x^3 - y^3 - z^3 - 2xyz = -(x - y - z)(y - x - z)(z - y - x)$",
                  "reason": "Substitution: the number $-1$ is put for $a$ in line 7."
                }
              ]
            },
            {
              "prompt": "Factor $(x + 1)(y + 1)(z + 1) - 3(xy + xz + yz) + 3(x + y + z) - 9$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-2)*(y-2)*(z-2)",
              "lines": [
                {
                  "step": "Factor $(x + 1)(y + 1)(z + 1) - 3(xy + xz + yz) + 3(x + y + z) - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is a symmetric polynomial.",
                  "reason": "Symmetric polynomial: swapping two of the letters $x$, $y$ and $z$, whichever two, changes only the order in which the terms and the letters inside them are written, so the polynomial stays the same."
                },
                {
                  "step": "Putting $2$ for $x$ gives $(2 + 1)(y + 1)(z + 1) - 3(2y + 2z + yz) + 3(2 + y + z) - 9$. With like terms collected inside the brackets, this is $3(y + 1)(z + 1) - 3(yz + 2y + 2z) + 3(y + z + 2) - 9$. Multiplied out, it is $(3yz + 3y + 3z + 3) - (3yz + 6y + 6z) + (3y + 3z + 6) - 9$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $2$. Collecting like terms inside each bracket and multiplying out leaves terms that cancel."
                },
                {
                  "step": "So $x - 2$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $2$ for $x$ gives $0$ for all numbers $y$ and $z$, so $x - 2$ is a factor."
                },
                {
                  "step": "So $y - 2$ and $z - 2$ are factors of the polynomial too.",
                  "reason": "Symmetric polynomial: a swap of two letters leaves the polynomial the same and turns a factor into a factor. Swapping $x$ and $y$ turns $x - 2$ into $y - 2$, and swapping $x$ and $z$ turns $x - 2$ into $z - 2$."
                },
                {
                  "step": "The polynomial is $(x - 2)(y - 2)(z - 2)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the three brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - 2)(y - 2)(z - 2)$.",
                  "reason": "Degree of a product in several letters: the product of the three brackets has degree $3$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 3$, $y = 3$ and $z = 4$ the polynomial is $(3 + 1)(3 + 1)(4 + 1) - 3 \\cdot (3 \\cdot 3 + 3 \\cdot 4 + 3 \\cdot 4) + 3 \\cdot (3 + 3 + 4) - 9 = 4 \\cdot 4 \\cdot 5 - 3 \\cdot 33 + 3 \\cdot 10 - 9 = 80 - 99 + 30 - 9 = 2$, and the product of line 7 is $a(3 - 2)(3 - 2)(4 - 2) = a \\cdot 1 \\cdot 1 \\cdot 2 = 2a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $3$, $3$ and $4$ in the polynomial and in the product of line 7."
                },
                {
                  "step": "So $2a = 2$.",
                  "reason": "Substitution: line 7 holds for all numbers $x$, $y$ and $z$, and the two values of line 8 are put into it."
                },
                {
                  "step": "So $a = 1$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$(x + 1)(y + 1)(z + 1) - 3(xy + xz + yz) + 3(x + y + z) - 9 = (x - 2)(y - 2)(z - 2)$",
                  "reason": "Substitution: the number $1$ is put for $a$ in line 7."
                }
              ]
            },
            {
              "prompt": "Factor $(x + y)^3 + (y + z)^3 + (z + x)^3 - 2(x + y + z)(x^2 + y^2 + z^2) + 4(x + y + z)(xy + yz + zx) - 2xyz$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "5*(x+y)*(z+y)*(x+z)",
              "lines": [
                {
                  "step": "Factor $(x + y)^3 + (y + z)^3 + (z + x)^3 - 2(x + y + z)(x^2 + y^2 + z^2) + 4(x + y + z)(xy + yz + zx) - 2xyz$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is a symmetric polynomial.",
                  "reason": "Symmetric polynomial: swapping two of the letters $x$, $y$ and $z$, whichever two, changes only the order in which the terms and the letters inside them are written, so the polynomial stays the same."
                },
                {
                  "step": "Putting $-y$ for $x$ gives $((-y) + y)^3 + (y + z)^3 + (z + (-y))^3 - 2((-y) + y + z)((-y)^2 + y^2 + z^2) + 4((-y) + y + z)((-y)y + yz + z(-y)) - 2(-y)yz$. With like terms collected inside the brackets, this is $0 + (y + z)^3 - (y - z)^3 - 2z(2y^2 + z^2) - 4y^2z + 2y^2z$. Multiplied out, it is $(y^3 + 3y^2z + 3yz^2 + z^3) - (y^3 - 3y^2z + 3yz^2 - z^3) - (4y^2z + 2z^3) - 4y^2z + 2y^2z$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $-y$, in brackets. Collecting like terms inside each bracket, with $-y + z$ written as $-(y - z)$, and multiplying out leaves terms that cancel."
                },
                {
                  "step": "So $x + y$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $-y$ for $x$ gives $0$ for all numbers $y$ and $z$, so $x - (-y)$, which is $x + y$, is a factor."
                },
                {
                  "step": "So $z + y$ and $x + z$ are factors of the polynomial too.",
                  "reason": "Symmetric polynomial: a swap of two letters leaves the polynomial the same and turns a factor into a factor. Swapping $x$ and $z$ turns $x + y$ into $z + y$, and swapping $y$ and $z$ turns $x + y$ into $x + z$."
                },
                {
                  "step": "The polynomial is $(x + y)(z + y)(x + z)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the three brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x + y)(z + y)(x + z)$.",
                  "reason": "Degree of a product in several letters: the product of the three brackets has degree $3$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 1$, $y = 1$ and $z = 2$ the polynomial is $(1 + 1)^3 + (1 + 2)^3 + (2 + 1)^3 - 2 \\cdot (1 + 1 + 2)(1^2 + 1^2 + 2^2) + 4 \\cdot (1 + 1 + 2)(1 \\cdot 1 + 1 \\cdot 2 + 2 \\cdot 1) - 2 \\cdot 1 \\cdot 1 \\cdot 2 = 2^3 + 3^3 + 3^3 - 2 \\cdot 4 \\cdot 6 + 4 \\cdot 4 \\cdot 5 - 2 \\cdot 1 \\cdot 1 \\cdot 2 = 8 + 27 + 27 - 48 + 80 - 4 = 90$, and the product of line 7 is $a(1 + 1)(2 + 1)(1 + 2) = a \\cdot 2 \\cdot 3 \\cdot 3 = 18a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $1$, $1$ and $2$ in the polynomial and in the product of line 7."
                },
                {
                  "step": "So $18a = 90$.",
                  "reason": "Substitution: line 7 holds for all numbers $x$, $y$ and $z$, and the two values of line 8 are put into it."
                },
                {
                  "step": "So $a = 5$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $18$."
                },
                {
                  "step": "$(x + y)^3 + (y + z)^3 + (z + x)^3 - 2(x + y + z)(x^2 + y^2 + z^2) + 4(x + y + z)(xy + yz + zx) - 2xyz = 5(x + y)(z + y)(x + z)$",
                  "reason": "Substitution: the number $5$ is put for $a$ in line 7."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $(x + 2y)(y + 2z)(z + 2x) - (2x + y)(2y + z)(2z + x)$.",
            "lines": [
              {
                "step": "Factor $(x + 2y)(y + 2z)(z + 2x) - (2x + y)(2y + z)(2z + x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Putting $y$ for $x$ gives $(y + 2y)(y + 2z)(z + 2y) - (2y + y)(2y + z)(2z + y)$. With like terms collected inside the brackets, this is $3y(2y + z)(y + 2z) - 3y(2y + z)(y + 2z)$, which is $0$.",
                "reason": "Substituting a value: the letter $x$ is replaced by $y$. Collecting like terms inside each bracket leaves products that cancel."
              },
              {
                "step": "So $x - y$ is a factor of the polynomial.",
                "reason": "Factor Theorem for several variables: putting $y$ for $x$ gives $0$ for all numbers $y$ and $z$."
              },
              {
                "step": "Putting $z$ for $y$ gives $(x + 2z)(z + 2z)(z + 2x) - (2x + z)(2z + z)(2z + x)$. With like terms collected inside the brackets, this is $3z(2x + z)(x + 2z) - 3z(2x + z)(x + 2z)$, which is $0$.",
                "reason": "Substituting a value: the letter $y$ is replaced by $z$. Collecting like terms inside each bracket leaves products that cancel."
              },
              {
                "step": "Putting $x$ for $z$ gives $(x + 2y)(y + 2x)(x + 2x) - (2x + y)(2y + x)(2x + x)$. With like terms collected inside the brackets, this is $3x(2x + y)(x + 2y) - 3x(2x + y)(x + 2y)$, which is $0$.",
                "reason": "Substituting a value: the letter $z$ is replaced by $x$. Collecting like terms inside each bracket leaves products that cancel."
              },
              {
                "step": "So $y - z$ and $z - x$ are factors of the polynomial too.",
                "reason": "Factor Theorem for several variables: putting $z$ for $y$ gives $0$ for all numbers $x$ and $z$, and putting $x$ for $z$ gives $0$ for all numbers $x$ and $y$."
              },
              {
                "step": "The polynomial is $(x - y)(y - z)(z - x)$ times a polynomial $g$.",
                "reason": "Factors of degree 1 are factors together: the three brackets have degree $1$ and no one is a number times another, so their product is a factor."
              },
              {
                "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)$.",
                "reason": "Degree of a product in several letters: the product of the three brackets has degree $3$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
              },
              {
                "step": "At $x = 2$, $y = 1$ and $z = 0$ the polynomial is $(2 + 2 \\cdot 1)(1 + 2 \\cdot 0)(0 + 2 \\cdot 2) - (2 \\cdot 2 + 1)(2 \\cdot 1 + 0)(2 \\cdot 0 + 2) = 4 \\cdot 1 \\cdot 4 - 5 \\cdot 2 \\cdot 2 = 16 - 20 = -4$, and the product of line 8 is $a(2 - 1)(1 - 0)(0 - 2) = a \\cdot 1 \\cdot 1 \\cdot (-2) = -2a$.",
                "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $2$, $1$ and $0$ in the polynomial and in the product of line 8."
              },
              {
                "step": "So $-2a = -4$.",
                "reason": "Substitution: line 8 holds for all numbers $x$, $y$ and $z$, and the two values of line 9 are put into it."
              },
              {
                "step": "So $a = 2$.",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$, a negative number."
              },
              {
                "step": "$(x + 2y)(y + 2z)(z + 2x) - (2x + y)(2y + z)(2z + x) = 2(x - y)(y - z)(z - x)$",
                "reason": "Substitution: the number $2$ is put for $a$ in line 8."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $(y - z)(3x + y + z)^2 + (z - x)(3y + z + x)^2 + (x - y)(3z + x + y)^2$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "-4*(x-y)*(y-z)*(z-x)",
              "lines": [
                {
                  "step": "Factor $(y - z)(3x + y + z)^2 + (z - x)(3y + z + x)^2 + (x - y)(3z + x + y)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $y$ for $x$ gives $(y - z)(3y + y + z)^2 + (z - y)(3y + z + y)^2 + (y - y)(3z + y + y)^2$. With like terms collected inside the brackets, this is $(4y + z)^2(y - z) - (4y + z)^2(y - z) + 0$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y$. Collecting like terms inside each bracket, with $z - y$ written as $-(y - z)$, leaves products that cancel."
                },
                {
                  "step": "So $x - y$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $y$ for $x$ gives $0$ for all numbers $y$ and $z$."
                },
                {
                  "step": "Putting $z$ for $y$ gives $(z - z)(3x + z + z)^2 + (z - x)(3z + z + x)^2 + (x - z)(3z + x + z)^2$. With like terms collected inside the brackets, this is $0 - (x + 4z)^2(x - z) + (x + 4z)^2(x - z)$, which is $0$.",
                  "reason": "Substituting a value: the letter $y$ is replaced by $z$. Collecting like terms inside each bracket, with $z - x$ written as $-(x - z)$, leaves products that cancel."
                },
                {
                  "step": "Putting $x$ for $z$ gives $(y - x)(3x + y + x)^2 + (x - x)(3y + x + x)^2 + (x - y)(3x + x + y)^2$. With like terms collected inside the brackets, this is $-(4x + y)^2(x - y) + 0 + (4x + y)^2(x - y)$, which is $0$.",
                  "reason": "Substituting a value: the letter $z$ is replaced by $x$. Collecting like terms inside each bracket, with $y - x$ written as $-(x - y)$, leaves products that cancel."
                },
                {
                  "step": "So $y - z$ and $z - x$ are factors of the polynomial too.",
                  "reason": "Factor Theorem for several variables: putting $z$ for $y$ gives $0$ for all numbers $x$ and $z$, and putting $x$ for $z$ gives $0$ for all numbers $x$ and $y$."
                },
                {
                  "step": "The polynomial is $(x - y)(y - z)(z - x)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the three brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)$.",
                  "reason": "Degree of a product in several letters: the product of the three brackets has degree $3$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 1$, $y = 0$ and $z = 2$ the polynomial is $(0 - 2)(3 \\cdot 1 + 0 + 2)^2 + (2 - 1)(3 \\cdot 0 + 2 + 1)^2 + (1 - 0)(3 \\cdot 2 + 1 + 0)^2 = (-2) \\cdot 5^2 + 1 \\cdot 3^2 + 1 \\cdot 7^2 = -50 + 9 + 49 = 8$, and the product of line 8 is $a(1 - 0)(0 - 2)(2 - 1) = a \\cdot 1 \\cdot (-2) \\cdot 1 = -2a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $1$, $0$ and $2$ in the polynomial and in the product of line 8."
                },
                {
                  "step": "So $-2a = 8$.",
                  "reason": "Substitution: line 8 holds for all numbers $x$, $y$ and $z$, and the two values of line 9 are put into it."
                },
                {
                  "step": "So $a = -4$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$, a negative number."
                },
                {
                  "step": "$(y - z)(3x + y + z)^2 + (z - x)(3y + z + x)^2 + (x - y)(3z + x + y)^2 = -4(x - y)(y - z)(z - x)$",
                  "reason": "Substitution: the number $-4$ is put for $a$ in line 8."
                }
              ]
            },
            {
              "prompt": "Factor $(x + 2y)^3 + (y + 2z)^3 + (z + 2x)^3 - (2x + y)^3 - (2y + z)^3 - (2z + x)^3$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "6*(x-y)*(y-z)*(z-x)",
              "lines": [
                {
                  "step": "Factor $(x + 2y)^3 + (y + 2z)^3 + (z + 2x)^3 - (2x + y)^3 - (2y + z)^3 - (2z + x)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $y$ for $x$ gives $(y + 2y)^3 + (y + 2z)^3 + (z + 2y)^3 - (2y + y)^3 - (2y + z)^3 - (2z + y)^3$. With like terms collected inside the brackets, this is $27y^3 + (y + 2z)^3 + (2y + z)^3 - 27y^3 - (2y + z)^3 - (y + 2z)^3$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y$. Collecting like terms inside each bracket leaves products that cancel."
                },
                {
                  "step": "So $x - y$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $y$ for $x$ gives $0$ for all numbers $y$ and $z$."
                },
                {
                  "step": "Putting $z$ for $y$ gives $(x + 2z)^3 + (z + 2z)^3 + (z + 2x)^3 - (2x + z)^3 - (2z + z)^3 - (2z + x)^3$. With like terms collected inside the brackets, this is $(x + 2z)^3 + 27z^3 + (2x + z)^3 - (2x + z)^3 - 27z^3 - (x + 2z)^3$, which is $0$.",
                  "reason": "Substituting a value: the letter $y$ is replaced by $z$. Collecting like terms inside each bracket leaves products that cancel."
                },
                {
                  "step": "Putting $x$ for $z$ gives $(x + 2y)^3 + (y + 2x)^3 + (x + 2x)^3 - (2x + y)^3 - (2y + x)^3 - (2x + x)^3$. With like terms collected inside the brackets, this is $(x + 2y)^3 + (2x + y)^3 + 27x^3 - (2x + y)^3 - (x + 2y)^3 - 27x^3$, which is $0$.",
                  "reason": "Substituting a value: the letter $z$ is replaced by $x$. Collecting like terms inside each bracket leaves products that cancel."
                },
                {
                  "step": "So $y - z$ and $z - x$ are factors of the polynomial too.",
                  "reason": "Factor Theorem for several variables: putting $z$ for $y$ gives $0$ for all numbers $x$ and $z$, and putting $x$ for $z$ gives $0$ for all numbers $x$ and $y$."
                },
                {
                  "step": "The polynomial is $(x - y)(y - z)(z - x)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the three brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)$.",
                  "reason": "Degree of a product in several letters: the product of the three brackets has degree $3$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 3$, $y = 1$ and $z = 0$ the polynomial is $(3 + 2 \\cdot 1)^3 + (1 + 2 \\cdot 0)^3 + (0 + 2 \\cdot 3)^3 - (2 \\cdot 3 + 1)^3 - (2 \\cdot 1 + 0)^3 - (2 \\cdot 0 + 3)^3 = 5^3 + 1^3 + 6^3 - 7^3 - 2^3 - 3^3 = 125 + 1 + 216 - 343 - 8 - 27 = -36$, and the product of line 8 is $a(3 - 1)(1 - 0)(0 - 3) = a \\cdot 2 \\cdot 1 \\cdot (-3) = -6a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $3$, $1$ and $0$ in the polynomial and in the product of line 8."
                },
                {
                  "step": "So $-6a = -36$.",
                  "reason": "Substitution: line 8 holds for all numbers $x$, $y$ and $z$, and the two values of line 9 are put into it."
                },
                {
                  "step": "So $a = 6$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$, a negative number."
                },
                {
                  "step": "$(x + 2y)^3 + (y + 2z)^3 + (z + 2x)^3 - (2x + y)^3 - (2y + z)^3 - (2z + x)^3 = 6(x - y)(y - z)(z - x)$",
                  "reason": "Substitution: the number $6$ is put for $a$ in line 8."
                }
              ]
            },
            {
              "prompt": "Factor $x(y - z)(3x + y + z) + y(z - x)(3y + z + x) + z(x - y)(3z + x + y)$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "-2*(x-y)*(y-z)*(z-x)",
              "lines": [
                {
                  "step": "Factor $x(y - z)(3x + y + z) + y(z - x)(3y + z + x) + z(x - y)(3z + x + y)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $y$ for $x$ gives $y(y - z)(3y + y + z) + y(z - y)(3y + z + y) + z(y - y)(3z + y + y)$. With like terms collected inside the brackets, this is $y(4y + z)(y - z) - y(4y + z)(y - z) + 0$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y$. Collecting like terms inside each bracket, with $z - y$ written as $-(y - z)$, leaves products that cancel."
                },
                {
                  "step": "So $x - y$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $y$ for $x$ gives $0$ for all numbers $y$ and $z$."
                },
                {
                  "step": "Putting $z$ for $y$ gives $x(z - z)(3x + z + z) + z(z - x)(3z + z + x) + z(x - z)(3z + x + z)$. With like terms collected inside the brackets, this is $0 - z(x + 4z)(x - z) + z(x + 4z)(x - z)$, which is $0$.",
                  "reason": "Substituting a value: the letter $y$ is replaced by $z$. Collecting like terms inside each bracket, with $z - x$ written as $-(x - z)$, leaves products that cancel."
                },
                {
                  "step": "Putting $x$ for $z$ gives $x(y - x)(3x + y + x) + y(x - x)(3y + x + x) + x(x - y)(3x + x + y)$. With like terms collected inside the brackets, this is $-x(4x + y)(x - y) + 0 + x(4x + y)(x - y)$, which is $0$.",
                  "reason": "Substituting a value: the letter $z$ is replaced by $x$. Collecting like terms inside each bracket, with $y - x$ written as $-(x - y)$, leaves products that cancel."
                },
                {
                  "step": "So $y - z$ and $z - x$ are factors of the polynomial too.",
                  "reason": "Factor Theorem for several variables: putting $z$ for $y$ gives $0$ for all numbers $x$ and $z$, and putting $x$ for $z$ gives $0$ for all numbers $x$ and $y$."
                },
                {
                  "step": "The polynomial is $(x - y)(y - z)(z - x)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the three brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)$.",
                  "reason": "Degree of a product in several letters: the product of the three brackets has degree $3$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 0$, $y = 2$ and $z = 1$ the polynomial is $0 \\cdot (2 - 1)(3 \\cdot 0 + 2 + 1) + 2 \\cdot (1 - 0)(3 \\cdot 2 + 1 + 0) + 1 \\cdot (0 - 2)(3 \\cdot 1 + 0 + 2) = 0 + 2 \\cdot 1 \\cdot 7 + 1 \\cdot (-2) \\cdot 5 = 0 + 14 - 10 = 4$, and the product of line 8 is $a(0 - 2)(2 - 1)(1 - 0) = a \\cdot (-2) \\cdot 1 \\cdot 1 = -2a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $0$, $2$ and $1$ in the polynomial and in the product of line 8."
                },
                {
                  "step": "So $-2a = 4$.",
                  "reason": "Substitution: line 8 holds for all numbers $x$, $y$ and $z$, and the two values of line 9 are put into it."
                },
                {
                  "step": "So $a = -2$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$, a negative number."
                },
                {
                  "step": "$x(y - z)(3x + y + z) + y(z - x)(3y + z + x) + z(x - y)(3z + x + y) = -2(x - y)(y - z)(z - x)$",
                  "reason": "Substitution: the number $-2$ is put for $a$ in line 8."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $x(y - z)^3 + y(z - x)^3 + z(x - y)^3$.",
            "lines": [
              {
                "step": "Factor $x(y - z)^3 + y(z - x)^3 + z(x - y)^3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Putting $y$ for $x$ gives $y(y - z)^3 + y(z - y)^3 + z(y - y)^3$. With like terms collected inside the brackets, this is $y(y - z)^3 - y(y - z)^3 + 0$, which is $0$.",
                "reason": "Substituting a value: the letter $x$ is replaced by $y$. Collecting like terms inside each bracket, with $z - y$ written as $-(y - z)$, leaves products that cancel."
              },
              {
                "step": "So $x - y$ is a factor of the polynomial.",
                "reason": "Factor Theorem for several variables: putting $y$ for $x$ gives $0$ for all numbers $y$ and $z$."
              },
              {
                "step": "Putting $z$ for $y$ gives $x(z - z)^3 + z(z - x)^3 + z(x - z)^3$. With like terms collected inside the brackets, this is $0 - z(x - z)^3 + z(x - z)^3$, which is $0$.",
                "reason": "Substituting a value: the letter $y$ is replaced by $z$. Collecting like terms inside each bracket, with $z - x$ written as $-(x - z)$, leaves products that cancel."
              },
              {
                "step": "Putting $x$ for $z$ gives $x(y - x)^3 + y(x - x)^3 + x(x - y)^3$. With like terms collected inside the brackets, this is $-x(x - y)^3 + 0 + x(x - y)^3$, which is $0$.",
                "reason": "Substituting a value: the letter $z$ is replaced by $x$. Collecting like terms inside each bracket, with $y - x$ written as $-(x - y)$, leaves products that cancel."
              },
              {
                "step": "So $y - z$ and $z - x$ are factors of the polynomial too.",
                "reason": "Factor Theorem for several variables: putting $z$ for $y$ gives $0$ for all numbers $x$ and $z$, and putting $x$ for $z$ gives $0$ for all numbers $x$ and $y$."
              },
              {
                "step": "Putting $-y - z$ for $x$ gives $(-y - z)(y - z)^3 + y(z - (-y - z))^3 + z((-y - z) - y)^3$. With like terms collected inside the brackets, this is $-(y + z)(y - z)^3 + y(y + 2z)^3 - z(2y + z)^3$. Multiplied out, it is $-(y^4 - 2y^3z + 2yz^3 - z^4) + (y^4 + 6y^3z + 12y^2z^2 + 8yz^3) - (8y^3z + 12y^2z^2 + 6yz^3 + z^4)$, which is $0$.",
                "reason": "Substituting a value: the letter $x$ is replaced by $-y - z$, in brackets. Collecting like terms inside each bracket, with $-y - z$ written as $-(y + z)$, and multiplying out leaves terms that cancel. The three brackets found leave degree $1$ for one more factor, and $x + y + z$ is the bracket of degree $1$ that treats the three letters alike."
              },
              {
                "step": "So $x + y + z$ is a factor of the polynomial.",
                "reason": "Factor Theorem for several variables: putting $-y - z$ for $x$ gives $0$ for all numbers $y$ and $z$, so $x - (-y - z)$, which is $x + y + z$, is a factor."
              },
              {
                "step": "The polynomial is $(x - y)(y - z)(z - x)(x + y + z)$ times a polynomial $g$.",
                "reason": "Factors of degree 1 are factors together: the four brackets have degree $1$ and no one is a number times another, so their product is a factor."
              },
              {
                "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)(x + y + z)$.",
                "reason": "Degree of a product in several letters: the product of the four brackets has degree $4$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
              },
              {
                "step": "At $x = 3$, $y = 1$ and $z = 0$ the polynomial is $3 \\cdot (1 - 0)^3 + 1 \\cdot (0 - 3)^3 + 0 \\cdot (3 - 1)^3 = 3 \\cdot 1^3 + 1 \\cdot (-3)^3 + 0 = 3 - 27 + 0 = -24$, and the product of line 10 is $a(3 - 1)(1 - 0)(0 - 3)(3 + 1 + 0) = a \\cdot 2 \\cdot 1 \\cdot (-3) \\cdot 4 = -24a$.",
                "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $3$, $1$ and $0$ in the polynomial and in the product of line 10."
              },
              {
                "step": "So $-24a = -24$.",
                "reason": "Substitution: line 10 holds for all numbers $x$, $y$ and $z$, and the two values of line 11 are put into it."
              },
              {
                "step": "So $a = 1$.",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-24$, a negative number."
              },
              {
                "step": "$x(y - z)^3 + y(z - x)^3 + z(x - y)^3 = (x - y)(y - z)(z - x)(x + y + z)$",
                "reason": "Substitution: the number $1$ is put for $a$ in line 10."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $(y - z)(y + z)^3 + (z - x)(z + x)^3 + (x - y)(x + y)^3$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "-2*(x-y)*(y-z)*(z-x)*(x+y+z)",
              "lines": [
                {
                  "step": "Factor $(y - z)(y + z)^3 + (z - x)(z + x)^3 + (x - y)(x + y)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $y$ for $x$ gives $(y - z)(y + z)^3 + (z - y)(z + y)^3 + (y - y)(y + y)^3$. With like terms collected inside the brackets, this is $(y + z)^3(y - z) - (y + z)^3(y - z) + 0$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y$. Collecting like terms inside each bracket, with $z - y$ written as $-(y - z)$, leaves products that cancel."
                },
                {
                  "step": "So $x - y$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $y$ for $x$ gives $0$ for all numbers $y$ and $z$."
                },
                {
                  "step": "Putting $z$ for $y$ gives $(z - z)(z + z)^3 + (z - x)(z + x)^3 + (x - z)(x + z)^3$. With like terms collected inside the brackets, this is $0 - (x + z)^3(x - z) + (x + z)^3(x - z)$, which is $0$.",
                  "reason": "Substituting a value: the letter $y$ is replaced by $z$. Collecting like terms inside each bracket, with $z - x$ written as $-(x - z)$, leaves products that cancel."
                },
                {
                  "step": "Putting $x$ for $z$ gives $(y - x)(y + x)^3 + (x - x)(x + x)^3 + (x - y)(x + y)^3$. With like terms collected inside the brackets, this is $-(x + y)^3(x - y) + 0 + (x + y)^3(x - y)$, which is $0$.",
                  "reason": "Substituting a value: the letter $z$ is replaced by $x$. Collecting like terms inside each bracket, with $y - x$ written as $-(x - y)$, leaves products that cancel."
                },
                {
                  "step": "So $y - z$ and $z - x$ are factors of the polynomial too.",
                  "reason": "Factor Theorem for several variables: putting $z$ for $y$ gives $0$ for all numbers $x$ and $z$, and putting $x$ for $z$ gives $0$ for all numbers $x$ and $y$."
                },
                {
                  "step": "Putting $-y - z$ for $x$ gives $(y - z)(y + z)^3 + (z - (-y - z))(z + (-y - z))^3 + ((-y - z) - y)((-y - z) + y)^3$. With like terms collected inside the brackets, this is $(y + z)^3(y - z) - y^3(y + 2z) + z^3(2y + z)$. Multiplied out, it is $(y^4 + 2y^3z - 2yz^3 - z^4) - (y^4 + 2y^3z) + (2yz^3 + z^4)$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $-y - z$, in brackets. Collecting like terms inside each bracket, with $-2y - z$ written as $-(2y + z)$, and multiplying out leaves terms that cancel. The three brackets found leave degree $1$ for one more factor, and $x + y + z$ is the bracket of degree $1$ that treats the three letters alike."
                },
                {
                  "step": "So $x + y + z$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $-y - z$ for $x$ gives $0$ for all numbers $y$ and $z$, so $x - (-y - z)$, which is $x + y + z$, is a factor."
                },
                {
                  "step": "The polynomial is $(x - y)(y - z)(z - x)(x + y + z)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the four brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)(x + y + z)$.",
                  "reason": "Degree of a product in several letters: the product of the four brackets has degree $4$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 2$, $y = 0$ and $z = 1$ the polynomial is $(0 - 1)(0 + 1)^3 + (1 - 2)(1 + 2)^3 + (2 - 0)(2 + 0)^3 = (-1) \\cdot 1^3 + (-1) \\cdot 3^3 + 2 \\cdot 2^3 = -1 - 27 + 16 = -12$, and the product of line 10 is $a(2 - 0)(0 - 1)(1 - 2)(2 + 0 + 1) = a \\cdot 2 \\cdot (-1) \\cdot (-1) \\cdot 3 = 6a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $2$, $0$ and $1$ in the polynomial and in the product of line 10."
                },
                {
                  "step": "So $6a = -12$.",
                  "reason": "Substitution: line 10 holds for all numbers $x$, $y$ and $z$, and the two values of line 11 are put into it."
                },
                {
                  "step": "So $a = -2$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$(y - z)(y + z)^3 + (z - x)(z + x)^3 + (x - y)(x + y)^3 = -2(x - y)(y - z)(z - x)(x + y + z)$",
                  "reason": "Substitution: the number $-2$ is put for $a$ in line 10."
                }
              ]
            },
            {
              "prompt": "Factor $x(y - z)(x + 2y + 2z)^2 + y(z - x)(y + 2z + 2x)^2 + z(x - y)(z + 2x + 2y)^2$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "3*(x-y)*(y-z)*(z-x)*(x+y+z)",
              "lines": [
                {
                  "step": "Factor $x(y - z)(x + 2y + 2z)^2 + y(z - x)(y + 2z + 2x)^2 + z(x - y)(z + 2x + 2y)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $y$ for $x$ gives $y(y - z)(y + 2y + 2z)^2 + y(z - y)(y + 2z + 2y)^2 + z(y - y)(z + 2y + 2y)^2$. With like terms collected inside the brackets, this is $y(3y + 2z)^2(y - z) - y(3y + 2z)^2(y - z) + 0$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y$. Collecting like terms inside each bracket, with $z - y$ written as $-(y - z)$, leaves products that cancel."
                },
                {
                  "step": "So $x - y$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $y$ for $x$ gives $0$ for all numbers $y$ and $z$."
                },
                {
                  "step": "Putting $z$ for $y$ gives $x(z - z)(x + 2z + 2z)^2 + z(z - x)(z + 2z + 2x)^2 + z(x - z)(z + 2x + 2z)^2$. With like terms collected inside the brackets, this is $0 - z(2x + 3z)^2(x - z) + z(2x + 3z)^2(x - z)$, which is $0$.",
                  "reason": "Substituting a value: the letter $y$ is replaced by $z$. Collecting like terms inside each bracket, with $z - x$ written as $-(x - z)$, leaves products that cancel."
                },
                {
                  "step": "Putting $x$ for $z$ gives $x(y - x)(x + 2y + 2x)^2 + y(x - x)(y + 2x + 2x)^2 + x(x - y)(x + 2x + 2y)^2$. With like terms collected inside the brackets, this is $-x(3x + 2y)^2(x - y) + 0 + x(3x + 2y)^2(x - y)$, which is $0$.",
                  "reason": "Substituting a value: the letter $z$ is replaced by $x$. Collecting like terms inside each bracket, with $y - x$ written as $-(x - y)$, leaves products that cancel."
                },
                {
                  "step": "So $y - z$ and $z - x$ are factors of the polynomial too.",
                  "reason": "Factor Theorem for several variables: putting $z$ for $y$ gives $0$ for all numbers $x$ and $z$, and putting $x$ for $z$ gives $0$ for all numbers $x$ and $y$."
                },
                {
                  "step": "Putting $-y - z$ for $x$ gives $(-y - z)(y - z)((-y - z) + 2y + 2z)^2 + y(z - (-y - z))(y + 2z + 2(-y - z))^2 + z((-y - z) - y)(z + 2(-y - z) + 2y)^2$. With like terms collected inside the brackets, this is $-(y + z)^3(y - z) + y^3(y + 2z) - z^3(2y + z)$. Multiplied out, it is $-(y^4 + 2y^3z - 2yz^3 - z^4) + (y^4 + 2y^3z) - (2yz^3 + z^4)$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $-y - z$, in brackets. Collecting like terms inside each bracket, with $-y - z$ written as $-(y + z)$, and multiplying out leaves terms that cancel. The three brackets found leave degree $1$ for one more factor, and $x + y + z$ is the bracket of degree $1$ that treats the three letters alike."
                },
                {
                  "step": "So $x + y + z$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $-y - z$ for $x$ gives $0$ for all numbers $y$ and $z$, so $x - (-y - z)$, which is $x + y + z$, is a factor."
                },
                {
                  "step": "The polynomial is $(x - y)(y - z)(z - x)(x + y + z)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the four brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)(x + y + z)$.",
                  "reason": "Degree of a product in several letters: the product of the four brackets has degree $4$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 1$, $y = 2$ and $z = 0$ the polynomial is $1 \\cdot (2 - 0)(1 + 2 \\cdot 2 + 2 \\cdot 0)^2 + 2 \\cdot (0 - 1)(2 + 2 \\cdot 0 + 2 \\cdot 1)^2 + 0 \\cdot (1 - 2)(0 + 2 \\cdot 1 + 2 \\cdot 2)^2 = 1 \\cdot 2 \\cdot 5^2 + 2 \\cdot (-1) \\cdot 4^2 + 0 = 50 - 32 + 0 = 18$, and the product of line 10 is $a(1 - 2)(2 - 0)(0 - 1)(1 + 2 + 0) = a \\cdot (-1) \\cdot 2 \\cdot (-1) \\cdot 3 = 6a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $1$, $2$ and $0$ in the polynomial and in the product of line 10."
                },
                {
                  "step": "So $6a = 18$.",
                  "reason": "Substitution: line 10 holds for all numbers $x$, $y$ and $z$, and the two values of line 11 are put into it."
                },
                {
                  "step": "So $a = 3$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$x(y - z)(x + 2y + 2z)^2 + y(z - x)(y + 2z + 2x)^2 + z(x - y)(z + 2x + 2y)^2 = 3(x - y)(y - z)(z - x)(x + y + z)$",
                  "reason": "Substitution: the number $3$ is put for $a$ in line 10."
                }
              ]
            },
            {
              "prompt": "Factor $(y - z)(x + 2y + 2z)^3 + (z - x)(y + 2z + 2x)^3 + (x - y)(z + 2x + 2y)^3$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "-5*(x-y)*(y-z)*(z-x)*(x+y+z)",
              "lines": [
                {
                  "step": "Factor $(y - z)(x + 2y + 2z)^3 + (z - x)(y + 2z + 2x)^3 + (x - y)(z + 2x + 2y)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $y$ for $x$ gives $(y - z)(y + 2y + 2z)^3 + (z - y)(y + 2z + 2y)^3 + (y - y)(z + 2y + 2y)^3$. With like terms collected inside the brackets, this is $(3y + 2z)^3(y - z) - (3y + 2z)^3(y - z) + 0$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y$. Collecting like terms inside each bracket, with $z - y$ written as $-(y - z)$, leaves products that cancel."
                },
                {
                  "step": "So $x - y$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $y$ for $x$ gives $0$ for all numbers $y$ and $z$."
                },
                {
                  "step": "Putting $z$ for $y$ gives $(z - z)(x + 2z + 2z)^3 + (z - x)(z + 2z + 2x)^3 + (x - z)(z + 2x + 2z)^3$. With like terms collected inside the brackets, this is $0 - (2x + 3z)^3(x - z) + (2x + 3z)^3(x - z)$, which is $0$.",
                  "reason": "Substituting a value: the letter $y$ is replaced by $z$. Collecting like terms inside each bracket, with $z - x$ written as $-(x - z)$, leaves products that cancel."
                },
                {
                  "step": "Putting $x$ for $z$ gives $(y - x)(x + 2y + 2x)^3 + (x - x)(y + 2x + 2x)^3 + (x - y)(x + 2x + 2y)^3$. With like terms collected inside the brackets, this is $-(3x + 2y)^3(x - y) + 0 + (3x + 2y)^3(x - y)$, which is $0$.",
                  "reason": "Substituting a value: the letter $z$ is replaced by $x$. Collecting like terms inside each bracket, with $y - x$ written as $-(x - y)$, leaves products that cancel."
                },
                {
                  "step": "So $y - z$ and $z - x$ are factors of the polynomial too.",
                  "reason": "Factor Theorem for several variables: putting $z$ for $y$ gives $0$ for all numbers $x$ and $z$, and putting $x$ for $z$ gives $0$ for all numbers $x$ and $y$."
                },
                {
                  "step": "Putting $-y - z$ for $x$ gives $(y - z)((-y - z) + 2y + 2z)^3 + (z - (-y - z))(y + 2z + 2(-y - z))^3 + ((-y - z) - y)(z + 2(-y - z) + 2y)^3$. With like terms collected inside the brackets, this is $(y + z)^3(y - z) - y^3(y + 2z) + z^3(2y + z)$. Multiplied out, it is $(y^4 + 2y^3z - 2yz^3 - z^4) - (y^4 + 2y^3z) + (2yz^3 + z^4)$, which is $0$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $-y - z$, in brackets. Collecting like terms inside each bracket, with $-2y - z$ written as $-(2y + z)$, and multiplying out leaves terms that cancel. The three brackets found leave degree $1$ for one more factor, and $x + y + z$ is the bracket of degree $1$ that treats the three letters alike."
                },
                {
                  "step": "So $x + y + z$ is a factor of the polynomial.",
                  "reason": "Factor Theorem for several variables: putting $-y - z$ for $x$ gives $0$ for all numbers $y$ and $z$, so $x - (-y - z)$, which is $x + y + z$, is a factor."
                },
                {
                  "step": "The polynomial is $(x - y)(y - z)(z - x)(x + y + z)$ times a polynomial $g$.",
                  "reason": "Factors of degree 1 are factors together: the four brackets have degree $1$ and no one is a number times another, so their product is a factor."
                },
                {
                  "step": "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)(x + y + z)$.",
                  "reason": "Degree of a product in several letters: the product of the four brackets has degree $4$ and no term of the polynomial has a higher degree, so $g$ has degree $0$ and is a number."
                },
                {
                  "step": "At $x = 0$, $y = 1$ and $z = 2$ the polynomial is $(1 - 2)(0 + 2 \\cdot 1 + 2 \\cdot 2)^3 + (2 - 0)(1 + 2 \\cdot 2 + 2 \\cdot 0)^3 + (0 - 1)(2 + 2 \\cdot 0 + 2 \\cdot 1)^3 = (-1) \\cdot 6^3 + 2 \\cdot 5^3 + (-1) \\cdot 4^3 = -216 + 250 - 64 = -30$, and the product of line 10 is $a(0 - 1)(1 - 2)(2 - 0)(0 + 1 + 2) = a \\cdot (-1) \\cdot (-1) \\cdot 2 \\cdot 3 = 6a$.",
                  "reason": "Substituting a value: $x$, $y$ and $z$ are replaced by $0$, $1$ and $2$ in the polynomial and in the product of line 10."
                },
                {
                  "step": "So $6a = -30$.",
                  "reason": "Substitution: line 10 holds for all numbers $x$, $y$ and $z$, and the two values of line 11 are put into it."
                },
                {
                  "step": "So $a = -5$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$(y - z)(x + 2y + 2z)^3 + (z - x)(y + 2z + 2x)^3 + (x - y)(z + 2x + 2y)^3 = -5(x - y)(y - z)(z - x)(x + y + z)$",
                  "reason": "Substitution: the number $-5$ is put for $a$ in line 10."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t207-k2",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the cubes alone on the left and nothing multiplied out: The sum of the cubes of $x$, $y$ and $z$ is 5 times the product of $x$, $y$ and $z$.",
            "lines": [
              {
                "step": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the cubes alone on the left and nothing multiplied out: The sum of the cubes of $x$, $y$ and $z$ is 5 times the product of $x$, $y$ and $z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the cubes of $x$, $y$ and $z$ is $x^3 + y^3 + z^3$.",
                "reason": "Writing a sentence as an equation: \"the cubes of\" raises each number to the power 3, and \"the sum of\" adds the three powers."
              },
              {
                "step": "The product of $x$, $y$ and $z$ is $xyz$, and 5 times it is $5xyz$.",
                "reason": "Writing a sentence as an equation: \"the product of\" multiplies the three numbers; \"5 times\" multiplies the whole of it by 5."
              },
              {
                "step": "$x^3 + y^3 + z^3 = 5xyz$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the cube of the sum alone on the left and nothing multiplied out: The cube of the sum of $x$, $y$ and $z$ is 17 more than the sum of the cubes of $x$, $y$ and $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+y+z)^3 = x^3+y^3+z^3+17",
              "lines": [
                {
                  "step": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the cube of the sum alone on the left and nothing multiplied out: The cube of the sum of $x$, $y$ and $z$ is 17 more than the sum of the cubes of $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cube of the sum of $x$, $y$ and $z$ is $(x + y + z)^3$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the three numbers, and \"the cube of\" raises the whole sum, kept in a bracket, to the power 3."
                },
                {
                  "step": "The sum of the cubes of $x$, $y$ and $z$ is $x^3 + y^3 + z^3$, and 17 more than it is $x^3 + y^3 + z^3 + 17$.",
                  "reason": "Writing a sentence as an equation: \"the cubes of\" raises each number to the power 3, and \"the sum of\" adds the three powers; \"17 more than\" adds 17."
                },
                {
                  "step": "$(x + y + z)^3 = x^3 + y^3 + z^3 + 17$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the square of the sum alone on the left and nothing multiplied out: The square of the sum of $x$, $y$ and $z$ is 12 less than 7 times the sum of the squares of $x$, $y$ and $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+y+z)^2 = 7*(x^2+y^2+z^2)-12",
              "lines": [
                {
                  "step": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the square of the sum alone on the left and nothing multiplied out: The square of the sum of $x$, $y$ and $z$ is 12 less than 7 times the sum of the squares of $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the sum of $x$, $y$ and $z$ is $(x + y + z)^2$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the three numbers, and \"the square of\" raises the whole sum, kept in a bracket, to the power 2."
                },
                {
                  "step": "The sum of the squares of $x$, $y$ and $z$ is $x^2 + y^2 + z^2$, 7 times it is $7(x^2 + y^2 + z^2)$, and 12 less than that is $7(x^2 + y^2 + z^2) - 12$.",
                  "reason": "Writing a sentence as an equation: \"the squares of\" raises each number to the power 2, and \"the sum of\" adds the three powers; \"7 times\" multiplies the whole of it by 7, and \"12 less than\" takes 12 away."
                },
                {
                  "step": "$(x + y + z)^2 = 7(x^2 + y^2 + z^2) - 12$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the number 4 alone on the right and nothing multiplied out: Taking 16 times the sum of the products of $x$, $y$ and $z$ taken two at a time from the sum of the squares of $x$, $y$ and $z$ leaves 4.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+y^2+z^2-16*(x*y+y*z+z*x) = 4",
              "lines": [
                {
                  "step": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the number 4 alone on the right and nothing multiplied out: Taking 16 times the sum of the products of $x$, $y$ and $z$ taken two at a time from the sum of the squares of $x$, $y$ and $z$ leaves 4.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the squares of $x$, $y$ and $z$ is $x^2 + y^2 + z^2$.",
                  "reason": "Writing a sentence as an equation: \"the squares of\" raises each number to the power 2, and \"the sum of\" adds the three powers."
                },
                {
                  "step": "The sum of the products of $x$, $y$ and $z$ taken two at a time is $xy + yz + zx$, and taking 16 times it from $x^2 + y^2 + z^2$ leaves $x^2 + y^2 + z^2 - 16(xy + yz + zx)$.",
                  "reason": "Writing a sentence as an equation: \"taken two at a time\" pairs the numbers in each of the three ways, \"the products\" multiplies each pair, and \"the sum of\" adds the three products; \"16 times\" multiplies the whole of it by 16, and \"taking from\" takes that away from the first amount."
                },
                {
                  "step": "$x^2 + y^2 + z^2 - 16(xy + yz + zx) = 4$",
                  "reason": "Writing a sentence as an equation: the word \"leaves\" marks the place of the equals sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t207-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(4x + y + z)^2 + (z - x)(4y + z + x)^2 + (x - y)(4z + x + y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 1$ and $z = 0$, and write that line right.",
            "given": [
              "$(y - z)(4x + y + z)^2 + (z - x)(4y + z + x)^2 + (x - y)(4z + x + y)^2 = a(x - y)(y - z)(z - x)$",
              "$(1 - 0)(4 \\cdot 2 + 1 + 0)^2 + (0 - 2)(4 \\cdot 1 + 0 + 2)^2 + (2 - 1)(4 \\cdot 0 + 2 + 1)^2 = a(2 - 1)(1 - 0)(0 - 2)$",
              "$1 \\cdot 9^2 + 2 \\cdot 6^2 + 1 \\cdot 3^2 = a \\cdot 1 \\cdot 1 \\cdot (-2)$",
              "$81 + 72 + 9 = -2a$",
              "$162 = -2a$",
              "$a = -81$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(4x + y + z)^2 + (z - x)(4y + z + x)^2 + (x - y)(4z + x + y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 1$ and $z = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Substituting a value: line 1 is the form as given, line 2 puts the three numbers in for the letters, and each later line before the wrong one follows from the line before it by the arithmetic of integers."
              },
              {
                "step": "Line 3 writes the value of the bracket $0 - 2$ as $2$.",
                "reason": "A sign lost: $0 - 2 = -2$, and line 3 leaves out the sign $-$."
              },
              {
                "step": "So line 3 is the first wrong line.",
                "reason": "The first wrong line is the first line that does not follow from the line before it."
              },
              {
                "step": "Line 3 written right is $1 \\cdot 9^2 + (-2) \\cdot 6^2 + 1 \\cdot 3^2 = a \\cdot 1 \\cdot 1 \\cdot (-2)$.",
                "reason": "The arithmetic of integers, from arithmetic: $0 - 2 = -2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(7x + y + z) + y(z - x)(7y + z + x) + z(x - y)(7z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 0$ and $z = 3$, and write that line right.",
              "given": [
                "$x(y - z)(7x + y + z) + y(z - x)(7y + z + x) + z(x - y)(7z + x + y) = a(x - y)(y - z)(z - x)$",
                "$2 \\cdot (0 - 3)(7 \\cdot 2 + 0 + 3) + 0 \\cdot (3 - 2)(7 \\cdot 0 + 3 + 2) + 3 \\cdot (2 - 0)(7 \\cdot 3 + 2 + 0) = a(2 - 0)(0 - 3)(3 - 2)$",
                "$2 \\cdot (-3) \\cdot 17 + 0 + 3 \\cdot 2 \\cdot 23 = a \\cdot 2 \\cdot (-3) \\cdot 1$",
                "$-102 + 0 + 138 = 6a$",
                "$36 = 6a$",
                "$a = 6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -102+0+138 = -6*a",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(7x + y + z) + y(z - x)(7y + z + x) + z(x - y)(7z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 0$ and $z = 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Substituting a value: line 1 is the form as given, line 2 puts the three numbers in for the letters, and each later line before the wrong one follows from the line before it by the arithmetic of integers."
                },
                {
                  "step": "Line 4 writes $a \\cdot 2 \\cdot (-3) \\cdot 1$ as $6a$.",
                  "reason": "A sign lost: the product is $-6a$, and line 4 leaves out the sign $-$."
                },
                {
                  "step": "So line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 4 written right is $-102 + 0 + 138 = -6a$.",
                  "reason": "The arithmetic of integers, from arithmetic: $a \\cdot 2 \\cdot (-3) \\cdot 1 = -6a$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(5x + 3y + 3z)^2 + (z - x)(5y + 3z + 3x)^2 + (x - y)(5z + 3x + 3y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 0$ and $z = 1$, and write that line right.",
              "given": [
                "$(y - z)(5x + 3y + 3z)^2 + (z - x)(5y + 3z + 3x)^2 + (x - y)(5z + 3x + 3y)^2 = a(x - y)(y - z)(z - x)$",
                "$(0 - 1)(5 \\cdot 2 + 3 \\cdot 0 + 3 \\cdot 1)^2 + (1 - 2)(5 \\cdot 0 + 3 \\cdot 1 + 3 \\cdot 2)^2 + (2 - 0)(5 \\cdot 1 + 3 \\cdot 2 + 3 \\cdot 0)^2 = a(2 - 0)(0 - 1)(1 - 2)$",
                "$(-1) \\cdot 13^2 + (-1) \\cdot 9^2 + 2 \\cdot 11^2 = a \\cdot 2 \\cdot (-1) \\cdot (-1)$",
                "$-169 - 81 + 242 = 2a$",
                "$8 = 2a$",
                "$a = 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -8 = 2*a",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(5x + 3y + 3z)^2 + (z - x)(5y + 3z + 3x)^2 + (x - y)(5z + 3x + 3y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 0$ and $z = 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Substituting a value: line 1 is the form as given, line 2 puts the three numbers in for the letters, and each later line before the wrong one follows from the line before it by the arithmetic of integers."
                },
                {
                  "step": "Line 5 writes the sum $-169 - 81 + 242$ as $8$.",
                  "reason": "A sign lost: the sum is $-8$, and line 5 leaves out the sign $-$."
                },
                {
                  "step": "So line 5 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 5 written right is $-8 = 2a$.",
                  "reason": "The arithmetic of integers, from arithmetic: $-169 - 81 + 242 = -8$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(3x - y - z)^2 + (z - x)(3y - z - x)^2 + (x - y)(3z - x - y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 4$ and $z = 2$, and write that line right.",
              "given": [
                "$(y - z)(3x - y - z)^2 + (z - x)(3y - z - x)^2 + (x - y)(3z - x - y)^2 = a(x - y)(y - z)(z - x)$",
                "$(4 - 2)(3 \\cdot 1 - 4 - 2)^2 + (2 - 1)(3 \\cdot 4 - 2 - 1)^2 + (1 - 4)(3 \\cdot 2 - 1 - 4)^2 = a(1 - 4)(4 - 2)(2 - 1)$",
                "$2 \\cdot (-3)^2 + 1 \\cdot 9^2 + (-3) \\cdot 1^2 = a \\cdot (-3) \\cdot 2 \\cdot 1$",
                "$18 + 81 - 3 = -6a$",
                "$96 = -6a$",
                "$a = 16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: a = -16",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(3x - y - z)^2 + (z - x)(3y - z - x)^2 + (x - y)(3z - x - y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 4$ and $z = 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 5 are right.",
                  "reason": "Substituting a value: line 1 is the form as given, line 2 puts the three numbers in for the letters, and each later line before the wrong one follows from the line before it by the arithmetic of integers."
                },
                {
                  "step": "Line 6 divides $96$ by $-6$ and writes $16$.",
                  "reason": "A sign lost: one of $96$ and $-6$ is negative and the other is positive, so the quotient is $-16$, and line 6 leaves out the sign $-$."
                },
                {
                  "step": "So line 6 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 6 written right is $a = -16$.",
                  "reason": "The arithmetic of integers, from arithmetic: $96 \\div (-6) = -16$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t207-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $x - 2y$ is a factor of $x^3 - x^2y - 2xy^2 + 3x - 6y$.",
            "lines": [
              {
                "step": "Decide whether $x - 2y$ is a factor of $x^3 - x^2y - 2xy^2 + 3x - 6y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Putting $2y$ for $x$ in the polynomial gives $(2y)^3 - (2y)^2y - 2(2y)y^2 + 3(2y) - 6y$.",
                "reason": "Substituting a value: the letter $x$ is replaced by $2y$, in brackets."
              },
              {
                "step": "Multiplied out, this is $8y^3 - 4y^3 - 4y^3 + 6y - 6y$, which is $0$.",
                "reason": "Multiplying out and collecting like terms: each term is worked out, and like terms are added."
              },
              {
                "step": "The result is $0$ for every number $y$.",
                "reason": "Collecting like terms: the terms of line 3 cancel, whatever the numbers are."
              },
              {
                "step": "So $x - 2y$ is a factor of the polynomial, and the answer is Yes.",
                "reason": "Factor Theorem for several variables: the bracket $x - 2y$ is a factor exactly when putting $2y$ for $x$ gives $0$ for every number $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $x + 3y$ is a factor of $x^3 - 3x^2y + 2xy - 6y^2$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $x + 3y$ is a factor of $x^3 - 3x^2y + 2xy - 6y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $-3y$ for $x$ in the polynomial gives $(-3y)^3 - 3(-3y)^2y + 2(-3y)y - 6y^2$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $-3y$, in brackets."
                },
                {
                  "step": "Multiplied out, this is $-27y^3 - 27y^3 - 6y^2 - 6y^2$, which is $-54y^3 - 12y^2$.",
                  "reason": "Multiplying out and collecting like terms: each term is worked out, and like terms are added."
                },
                {
                  "step": "At $y = 1$ the result is $-66$, which is not $0$.",
                  "reason": "Substituting a value: the letters of the result are replaced by numbers, and one case that is not $0$ is enough."
                },
                {
                  "step": "So $x + 3y$ is not a factor of the polynomial, and the answer is No.",
                  "reason": "Factor Theorem for several variables: the bracket $x + 3y$ is a factor exactly when putting $-3y$ for $x$ gives $0$ for every number $y$."
                }
              ]
            },
            {
              "prompt": "Decide whether $x - y - 1$ is a factor of $x^2 + xy^2 - xy - x - y^3 - y^2$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $x - y - 1$ is a factor of $x^2 + xy^2 - xy - x - y^3 - y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $y + 1$ for $x$ in the polynomial gives $(y + 1)^2 + (y + 1)y^2 - (y + 1)y - (y + 1) - y^3 - y^2$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y + 1$, in brackets."
                },
                {
                  "step": "Multiplied out, this is $(y^2 + 2y + 1) + (y^3 + y^2) - (y^2 + y) - (y + 1) - y^3 - y^2$, which is $0$.",
                  "reason": "Multiplying out and collecting like terms: each term is worked out, and like terms are added."
                },
                {
                  "step": "The result is $0$ for every number $y$.",
                  "reason": "Collecting like terms: the terms of line 3 cancel, whatever the numbers are."
                },
                {
                  "step": "So $x - y - 1$ is a factor of the polynomial, and the answer is Yes.",
                  "reason": "Factor Theorem for several variables: the bracket $x - y - 1$ is a factor exactly when putting $y + 1$ for $x$ gives $0$ for every number $y$."
                }
              ]
            },
            {
              "prompt": "Decide whether $x - y^2$ is a factor of $x^2 - xy^2 + 2xy - 2y^3 + y$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $x - y^2$ is a factor of $x^2 - xy^2 + 2xy - 2y^3 + y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Putting $y^2$ for $x$ in the polynomial gives $(y^2)^2 - (y^2)y^2 + 2(y^2)y - 2y^3 + y$.",
                  "reason": "Substituting a value: the letter $x$ is replaced by $y^2$, in brackets."
                },
                {
                  "step": "Multiplied out, this is $y^4 - y^4 + 2y^3 - 2y^3 + y$, which is $y$.",
                  "reason": "Multiplying out and collecting like terms: each term is worked out, and like terms are added."
                },
                {
                  "step": "At $y = 1$ the result is $1$, which is not $0$.",
                  "reason": "Substituting a value: the letters of the result are replaced by numbers, and one case that is not $0$ is enough."
                },
                {
                  "step": "So $x - y^2$ is not a factor of the polynomial, and the answer is No.",
                  "reason": "Factor Theorem for several variables: the bracket $x - y^2$ is a factor exactly when putting $y^2$ for $x$ gives $0$ for every number $y$."
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
      "id": "t207-p1",
      "method": "direct proof",
      "statement": "Let $f(x, y)$ be a polynomial in $x$ and $y$, and let $h(y)$ be a polynomial in $y$. Then $f(x, y) = (x - h(y))g(x, y)$ for a polynomial $g(x, y)$ exactly when putting $h(y)$ for $x$ in $f(x, y)$ gives $0$ for every number $y$.",
      "idea": "A product with the factor $x - h(y)$ is $0$ once $h(y)$ is put for $x$. For the other direction, read $f(x, y)$ as a polynomial in $x$ whose coefficients are polynomials in $y$. Taking away its value at $x = h(y)$, which is $0$, pairs each power $x^j$ with $h(y)^j$, and each difference $x^j - h(y)^j$ has the factor $x - h(y)$ by the Difference of nth powers.",
      "lines": [
        {
          "line": "Assume first that $f(x, y) = (x - h(y))g(x, y)$ for a polynomial $g(x, y)$.",
          "reason": "The hypothesis of the first direction."
        },
        {
          "line": "Putting $h(y)$ for $x$ in $f(x, y)$ gives $(h(y) - h(y))g(h(y), y)$.",
          "reason": "Substituting a value in line 1: the letter $x$ is replaced by $h(y)$."
        },
        {
          "line": "For every number $y$, the product $(h(y) - h(y))g(h(y), y)$ is $0$.",
          "reason": "Assumptions on multiplication, from arithmetic: the first bracket is $0$."
        },
        {
          "line": "Now assume that putting $h(y)$ for $x$ in $f(x, y)$ gives $0$ for every number $y$.",
          "reason": "The hypothesis of the second direction."
        },
        {
          "line": "There are a whole number $n$ with $n \\ge 2$ and polynomials $c_0(y)$ to $c_n(y)$ in $y$, some of which may be the zero polynomial, with $f(x, y) = c_n(y)x^n + \\dots + c_1(y)x + c_0(y)$.",
          "reason": "Collecting like terms: the terms of $f(x, y)$ are grouped by their power of $x$, and the terms with one power $x^j$ together are $x^j$ times a polynomial in $y$."
        },
        {
          "line": "Putting $h(y)$ for $x$ in $f(x, y)$ gives $c_n(y)h(y)^n + \\dots + c_1(y)h(y) + c_0(y)$.",
          "reason": "Substituting a value in line 5: the letter $x$ is replaced by $h(y)$."
        },
        {
          "line": "For every number $y$, $c_n(y)h(y)^n + \\dots + c_1(y)h(y) + c_0(y) = 0$.",
          "reason": "Line 4, with line 6 writing what the substitution gives."
        },
        {
          "line": "For all numbers $x$ and $y$, $f(x, y) = c_n(y)x^n + \\dots + c_1(y)x + c_0(y) - \\left(c_n(y)h(y)^n + \\dots + c_1(y)h(y) + c_0(y)\\right)$.",
          "reason": "Taking away $0$ leaves a number as it is, from arithmetic: by line 7 the bracket is $0$, and line 5 gives the rest."
        },
        {
          "line": "So $f(x, y) = c_n(y)x^n + \\dots + c_1(y)x + c_0(y) - c_n(y)h(y)^n - \\dots - c_1(y)h(y) - c_0(y)$.",
          "reason": "Subtracting a bracket changes every sign in it."
        },
        {
          "line": "So $f(x, y) = c_n(y)\\left(x^n - h(y)^n\\right) + \\dots + c_2(y)\\left(x^2 - h(y)^2\\right) + c_1(y)\\left(x - h(y)\\right)$.",
          "reason": "The distributive law: the two terms with the same $c_j(y)$ are collected for each $j$ from $1$ to $n$, and the terms $c_0(y)$ and $-c_0(y)$ cancel."
        },
        {
          "line": "For each whole number $j$ from $2$ to $n$, $x^j - h(y)^j = (x - h(y))\\left(x^{j-1} + x^{j-2}h(y) + \\dots + xh(y)^{j-2} + h(y)^{j-1}\\right)$.",
          "reason": "Difference of nth powers, with the number $h(y)$ in the place of $y$."
        },
        {
          "line": "Write $q_1(x, y)$ for the polynomial $1$ and, for each whole number $j$ from $2$ to $n$, write $q_j(x, y)$ for $x^{j-1} + x^{j-2}h(y) + \\dots + xh(y)^{j-2} + h(y)^{j-1}$, so that $x^j - h(y)^j = (x - h(y))q_j(x, y)$ for each $j$ from $1$ to $n$.",
          "reason": "Line 11 for $j$ from $2$ to $n$; for $j = 1$ the bracket $x - h(y)$ is itself times $1$."
        },
        {
          "line": "Each $q_j(x, y)$ is a polynomial in $x$ and $y$.",
          "reason": "The definition of a polynomial: each term is a power of $x$ times a power of the polynomial $h(y)$, and products and sums of polynomials, multiplied out, are polynomials."
        },
        {
          "line": "So $f(x, y) = c_n(y)(x - h(y))q_n(x, y) + \\dots + c_1(y)(x - h(y))q_1(x, y)$.",
          "reason": "Substitution: line 12 is put into line 10."
        },
        {
          "line": "So $f(x, y) = (x - h(y))\\left(c_n(y)q_n(x, y) + \\dots + c_1(y)q_1(x, y)\\right)$.",
          "reason": "The distributive law: the bracket $x - h(y)$, common to every term, is taken out."
        },
        {
          "line": "The sum $c_n(y)q_n(x, y) + \\dots + c_1(y)q_1(x, y)$ is a polynomial in $x$ and $y$; write $g(x, y)$ for it.",
          "reason": "The definition of a polynomial, with line 13: products and sums of polynomials, multiplied out, are polynomials."
        },
        {
          "line": "So $f(x, y) = (x - h(y))g(x, y)$ for a polynomial $g(x, y)$.",
          "reason": "Substitution: the name $g(x, y)$ of line 16 is put into line 15."
        },
        {
          "line": "Therefore $f(x, y) = (x - h(y))g(x, y)$ for a polynomial $g(x, y)$ exactly when putting $h(y)$ for $x$ in $f(x, y)$ gives $0$ for every number $y$.",
          "reason": "Lines 1 to 3 give one direction and lines 4 to 17 the other."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t207-s1",
      "method": "direct proof",
      "statement": "Prove that if $f(x, y)$ is a polynomial in $x$ and $y$ for which putting $y$ for $x$ gives $0$ for every number $y$, and putting $-y$ for $x$ gives $0$ for every number $y$, then $f(x, y) = (x - y)(x + y)g(x, y)$ for a polynomial $g(x, y)$. Facts it may use: Factor Theorem for several variables, substituting a value, zero-product property, Zero polynomial, the definition of a polynomial, substitution.",
      "check": {
        "proof": [
          {
            "line": "There is a polynomial $q(x, y)$ with $f(x, y) = (x - y)q(x, y)$.",
            "reason": "Factor Theorem for several variables: putting $y$ for $x$ in $f(x, y)$ gives $0$ for every number $y$."
          },
          {
            "line": "Putting $-y$ for $x$ in $f(x, y)$ gives $(-y - y)q(-y, y)$, which is $-2yq(-y, y)$.",
            "reason": "Substituting a value in line 1: the letter $x$ is replaced by $-y$."
          },
          {
            "line": "For every number $y$, $-2yq(-y, y) = 0$.",
            "reason": "The hypothesis: putting $-y$ for $x$ in $f(x, y)$ gives $0$ for every number $y$, and line 2 writes what it gives."
          },
          {
            "line": "For every number $y$ other than $0$, $q(-y, y) = 0$.",
            "reason": "Zero-product property: the product of line 3 is $0$ and its factor $-2y$ is not $0$."
          },
          {
            "line": "The expression $q(-y, y)$, multiplied out, is $c_my^m + \\dots + c_1y + c_0$ for a whole number $m$ and numbers $c_0$ to $c_m$.",
            "reason": "The definition of a polynomial: putting $-y$ for $x$ in a polynomial in $x$ and $y$ and multiplying out leaves a polynomial in the one letter $y$."
          },
          {
            "line": "The polynomial $c_my^m + \\dots + c_1y + c_0$ is $0$ at the $m + 1$ different numbers from $1$ to $m + 1$.",
            "reason": "Line 4: none of these numbers is $0$."
          },
          {
            "line": "So $c_m = \\dots = c_1 = c_0 = 0$.",
            "reason": "Zero polynomial: a polynomial written with powers up to $m$ that is $0$ at $m + 1$ different numbers has every coefficient $0$."
          },
          {
            "line": "So $q(-y, y) = 0$ for every number $y$.",
            "reason": "Substitution: the coefficients of line 7 are put into line 5."
          },
          {
            "line": "There is a polynomial $g(x, y)$ with $q(x, y) = (x + y)g(x, y)$.",
            "reason": "Factor Theorem for several variables: putting $-y$ for $x$ in $q(x, y)$ gives $0$ for every number $y$, and $x - (-y)$ is $x + y$."
          },
          {
            "line": "Therefore $f(x, y) = (x - y)(x + y)g(x, y)$ for a polynomial $g(x, y)$.",
            "reason": "Substitution: line 9 is put into line 1."
          }
        ]
      }
    },
    {
      "id": "t207-s2",
      "method": "direct proof",
      "statement": "Prove that the product of two symmetric polynomials in $x$, $y$ and $z$ is a symmetric polynomial. Facts it may use: Symmetric polynomial, substituting a value, substitution.",
      "check": {
        "proof": [
          {
            "line": "Let $f$ and $g$ be symmetric polynomials in $x$, $y$ and $z$, and choose two of the three letters.",
            "reason": "The hypothesis; a symmetric polynomial is tested on each choice of two letters."
          },
          {
            "line": "Swapping the two letters in the product $fg$ gives the product of $f$ with the two letters swapped and $g$ with the two letters swapped.",
            "reason": "Substituting a value: a swap puts each of the two letters in the place of the other wherever it stands, so it swaps them inside each factor of a product."
          },
          {
            "line": "Swapping the two letters leaves $f$ the same and leaves $g$ the same.",
            "reason": "Symmetric polynomial: $f$ and $g$ are symmetric polynomials."
          },
          {
            "line": "So swapping the two letters in $fg$ gives $fg$.",
            "reason": "Substitution: line 3 is put into line 2."
          },
          {
            "line": "Therefore $fg$ is a symmetric polynomial.",
            "reason": "Symmetric polynomial: line 4 holds for each choice of two letters."
          }
        ]
      }
    },
    {
      "id": "t207-s3",
      "method": "direct proof",
      "statement": "Prove that if $f(x, y, z)$ is a symmetric polynomial and $x + y$ is a factor of $f(x, y, z)$, then $z + y$ is a factor of $f(x, y, z)$. Facts it may use: Symmetric polynomial, the definition of a factor, substituting a value, substitution, the definition of a polynomial.",
      "check": {
        "proof": [
          {
            "line": "There is a polynomial $g(x, y, z)$ with $f(x, y, z) = (x + y)g(x, y, z)$.",
            "reason": "The definition of a factor: $x + y$ is a factor of $f(x, y, z)$."
          },
          {
            "line": "Swapping $x$ and $z$ on both sides gives $f(z, y, x) = (z + y)g(z, y, x)$.",
            "reason": "Substituting a value: each of the letters $x$ and $z$ is put in the place of the other on both sides, and the two sides stay equal."
          },
          {
            "line": "The polynomial $f(z, y, x)$ is $f(x, y, z)$.",
            "reason": "Symmetric polynomial: swapping $x$ and $z$ leaves $f(x, y, z)$ the same."
          },
          {
            "line": "So $f(x, y, z) = (z + y)g(z, y, x)$.",
            "reason": "Substitution: line 3 is put into line 2."
          },
          {
            "line": "The expression $g(z, y, x)$ is a polynomial in $x$, $y$ and $z$.",
            "reason": "The definition of a polynomial: swapping two letters in a sum of numbers times powers of the letters leaves such a sum."
          },
          {
            "line": "Therefore $z + y$ is a factor of $f(x, y, z)$.",
            "reason": "The definition of a factor, with lines 4 and 5."
          }
        ]
      }
    }
  ]
}
