export default {
  "number": 133,
  "title": "Multiplying brackets",
  "section": 7,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "76, 115, 122, 286-292"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Expand $(3x - 2)(x + 7)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "3*x^2+19*x-14",
    "solution": [
      "Expand $(3x - 2)(x + 7)$.",
      "$(3x - 2)(x + 7) = 3x(x + 7) - 2(x + 7)$",
      "$3x(x + 7) - 2(x + 7) = 3x^2 + 21x - 2x - 14$",
      "$3x^2 + 21x - 2x - 14 = 3x^2 + (21 - 2)x - 14$",
      "$3x^2 + (21 - 2)x - 14 = 3x^2 + 19x - 14$"
    ]
  },
  "ideas": [
    {
      "name": "Every term of one bracket times every term of the other",
      "concrete": "The product $(x + 2)(x + 5)$ is $x(x + 5) + 2(x + 5)$, which is $x^2 + 5x + 2x + 10$: each of the two terms of the first bracket meets each of the two terms of the second once, and collecting like terms gives $x^2 + 7x + 10$.",
      "general": "A **binomial** is a sum of two terms, such as $x + 5$ or $3x - 2$. For all numbers $a$, $b$, $c$ and $d$, $(a + b)(c + d) = ac + ad + bc + bd$: **every term of one bracket times every term of the other**, each product written once and the products added. The same holds for brackets of three terms or more, and for three brackets, where two of them are multiplied first and their product times the third."
    },
    {
      "name": "Quadratic, linear and constant term",
      "concrete": "In $x^2 + 7x + 10$ the term $x^2$ is the quadratic term, $7x$ the linear term and $10$ the constant term.",
      "general": "For numbers $a$, $b$ and $c$ with $a \\ne 0$, the expression $ax^2 + bx + c$ is a quadratic in $x$: $ax^2$ is its **quadratic term**, $bx$ its **linear term** and $c$ its **constant term**. For numbers $a$, $b$, $c$ and $d$ with $a$ and $c$ not 0, the product $(ax + b)(cx + d)$ has quadratic term $acx^2$, linear term $(ad + bc)x$ and constant term $bd$."
    }
  ],
  "kinds": [
    {
      "id": "t133-k1",
      "forms": [
        {
          "example": {
            "problem": "Expand $(2x + 5)(x - 4)$.",
            "lines": [
              {
                "step": "Expand $(2x + 5)(x - 4)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2x + 5)(x - 4) = 2x(x - 4) + 5(x - 4)$",
                "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(x - 4)$ multiplies each term of $2x + 5$, which gives one product for each term of the first bracket."
              },
              {
                "step": "$2x(x - 4) + 5(x - 4) = 2x^2 - 8x + 5x - 20$",
                "reason": "Multiplying out: the $2x$ multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$; the $5$ multiplies each term of its bracket. Signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
              },
              {
                "step": "$2x^2 - 8x + 5x - 20 = 2x^2 + (-8 + 5)x - 20$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which leaves one term for each power of $x$."
              },
              {
                "step": "$2x^2 + (-8 + 5)x - 20 = 2x^2 - 3x - 20$",
                "reason": "The addition and subtraction of integers works out the bracket, which leaves each power of $x$ written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(x + 6)(3x + 2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x^2+20*x+12",
              "lines": [
                {
                  "step": "Expand $(x + 6)(3x + 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 6)(3x + 2) = x(3x + 2) + 6(3x + 2)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(3x + 2)$ multiplies each term of $x + 6$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$x(3x + 2) + 6(3x + 2) = 3x^2 + 2x + 18x + 12$",
                  "reason": "Multiplying out: the $x$ multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$; the $6$ multiplies each term of its bracket."
                },
                {
                  "step": "$3x^2 + 2x + 18x + 12 = 3x^2 + (2 + 18)x + 12$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which leaves one term for each power of $x$."
                },
                {
                  "step": "$3x^2 + (2 + 18)x + 12 = 3x^2 + 20x + 12$",
                  "reason": "The addition and subtraction of integers works out the bracket, which leaves each power of $x$ written once."
                }
              ]
            },
            {
              "prompt": "Expand $(4y - 3)(y + 5)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "4*y^2+17*y-15",
              "lines": [
                {
                  "step": "Expand $(4y - 3)(y + 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4y - 3)(y + 5) = 4y(y + 5) - 3(y + 5)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(y + 5)$ multiplies each term of $4y - 3$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$4y(y + 5) - 3(y + 5) = 4y^2 + 20y - 3y - 15$",
                  "reason": "Multiplying out: the $4y$ multiplies each term of its bracket, and the product law adds the exponents of the powers of $y$; the $-3$ multiplies each term of its bracket. Signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
                },
                {
                  "step": "$4y^2 + 20y - 3y - 15 = 4y^2 + (20 - 3)y - 15$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $y$, which leaves one term for each power of $y$."
                },
                {
                  "step": "$4y^2 + (20 - 3)y - 15 = 4y^2 + 17y - 15$",
                  "reason": "The addition and subtraction of integers works out the bracket, which leaves each power of $y$ written once."
                }
              ]
            },
            {
              "prompt": "Expand $(z - 8)(2z - 3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*z^2-19*z+24",
              "lines": [
                {
                  "step": "Expand $(z - 8)(2z - 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(z - 8)(2z - 3) = z(2z - 3) - 8(2z - 3)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(2z - 3)$ multiplies each term of $z - 8$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$z(2z - 3) - 8(2z - 3) = 2z^2 - 3z - 16z + 24$",
                  "reason": "Multiplying out: the $z$ multiplies each term of its bracket, and the product law adds the exponents of the powers of $z$; the $-8$ multiplies each term of its bracket. Signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
                },
                {
                  "step": "$2z^2 - 3z - 16z + 24 = 2z^2 + (-3 - 16)z + 24$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $z$, which leaves one term for each power of $z$."
                },
                {
                  "step": "$2z^2 + (-3 - 16)z + 24 = 2z^2 - 19z + 24$",
                  "reason": "The addition and subtraction of integers works out the bracket, which leaves each power of $z$ written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(2x + 3)(5y - 4)$.",
            "lines": [
              {
                "step": "Expand $(2x + 3)(5y - 4)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2x + 3)(5y - 4) = 2x(5y - 4) + 3(5y - 4)$",
                "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(5y - 4)$ multiplies each term of $2x + 3$, which gives one product for each term of the first bracket."
              },
              {
                "step": "$2x(5y - 4) + 3(5y - 4) = 10xy - 8x + 15y - 12$",
                "reason": "Multiplying out: the $2x$ multiplies each term of its bracket, and $3$ multiplies each term of its bracket. The four products have different letter parts, so no two of them are like terms and the sum is collected."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(3x - 2)(y + 6)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x*y+18*x-2*y-12",
              "lines": [
                {
                  "step": "Expand $(3x - 2)(y + 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x - 2)(y + 6) = 3x(y + 6) - 2(y + 6)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(y + 6)$ multiplies each term of $3x - 2$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$3x(y + 6) - 2(y + 6) = 3xy + 18x - 2y - 12$",
                  "reason": "Multiplying out: the $3x$ multiplies each term of its bracket, and $-2$ multiplies each term of its bracket. The four products have different letter parts, so no two of them are like terms and the sum is collected."
                }
              ]
            },
            {
              "prompt": "Expand $(4x + 5)(2z - 3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*x*z-12*x+10*z-15",
              "lines": [
                {
                  "step": "Expand $(4x + 5)(2z - 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4x + 5)(2z - 3) = 4x(2z - 3) + 5(2z - 3)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(2z - 3)$ multiplies each term of $4x + 5$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$4x(2z - 3) + 5(2z - 3) = 8xz - 12x + 10z - 15$",
                  "reason": "Multiplying out: the $4x$ multiplies each term of its bracket, and $5$ multiplies each term of its bracket. The four products have different letter parts, so no two of them are like terms and the sum is collected."
                }
              ]
            },
            {
              "prompt": "Expand $(5y - 6)(3z + 2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "15*y*z+10*y-18*z-12",
              "lines": [
                {
                  "step": "Expand $(5y - 6)(3z + 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5y - 6)(3z + 2) = 5y(3z + 2) - 6(3z + 2)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(3z + 2)$ multiplies each term of $5y - 6$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$5y(3z + 2) - 6(3z + 2) = 15yz + 10y - 18z - 12$",
                  "reason": "Multiplying out: the $5y$ multiplies each term of its bracket, and $-6$ multiplies each term of its bracket. The four products have different letter parts, so no two of them are like terms and the sum is collected."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $\\left(x + \\dfrac{1}{2}\\right)\\left(x - \\dfrac{1}{3}\\right)$.",
            "lines": [
              {
                "step": "Expand $\\left(x + \\dfrac{1}{2}\\right)\\left(x - \\dfrac{1}{3}\\right)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(x + \\dfrac{1}{2}\\right)\\left(x - \\dfrac{1}{3}\\right) = x\\left(x - \\dfrac{1}{3}\\right) + \\dfrac{1}{2}\\left(x - \\dfrac{1}{3}\\right)$",
                "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $\\left(x - \\dfrac{1}{3}\\right)$ multiplies each term of $x + \\dfrac{1}{2}$, which gives one product for each term of the first bracket."
              },
              {
                "step": "$x\\left(x - \\dfrac{1}{3}\\right) + \\dfrac{1}{2}\\left(x - \\dfrac{1}{3}\\right) = x^2 - \\dfrac{1}{3}x + \\dfrac{1}{2}x - \\dfrac{1}{6}$",
                "reason": "Multiplying out: the $x$ multiplies each term of its bracket, and $\\dfrac{1}{2}$ multiplies each term of its bracket. Fractions multiply top by top and bottom by bottom, and the product of the two numbers is in lowest terms."
              },
              {
                "step": "$x^2 - \\dfrac{1}{3}x + \\dfrac{1}{2}x - \\dfrac{1}{6} = x^2 + \\left(-\\dfrac{1}{3} + \\dfrac{1}{2}\\right)x - \\dfrac{1}{6}$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which leaves one term for each power of $x$."
              },
              {
                "step": "$x^2 + \\left(-\\dfrac{1}{3} + \\dfrac{1}{2}\\right)x - \\dfrac{1}{6} = x^2 + \\left(-\\dfrac{2}{6} + \\dfrac{3}{6}\\right)x - \\dfrac{1}{6}$",
                "reason": "Fractions are added and subtracted over a common denominator, so each fraction in the bracket is rewritten over the common denominator of the two."
              },
              {
                "step": "$x^2 + \\left(-\\dfrac{2}{6} + \\dfrac{3}{6}\\right)x - \\dfrac{1}{6} = x^2 + \\dfrac{1}{6}x - \\dfrac{1}{6}$",
                "reason": "Fractions with a common denominator add over that denominator, which leaves each power of $x$ written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $\\left(x - \\dfrac{3}{4}\\right)\\left(x + \\dfrac{1}{5}\\right)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2-11*x/20-3/20",
              "lines": [
                {
                  "step": "Expand $\\left(x - \\dfrac{3}{4}\\right)\\left(x + \\dfrac{1}{5}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x - \\dfrac{3}{4}\\right)\\left(x + \\dfrac{1}{5}\\right) = x\\left(x + \\dfrac{1}{5}\\right) - \\dfrac{3}{4}\\left(x + \\dfrac{1}{5}\\right)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $\\left(x + \\dfrac{1}{5}\\right)$ multiplies each term of $x - \\dfrac{3}{4}$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$x\\left(x + \\dfrac{1}{5}\\right) - \\dfrac{3}{4}\\left(x + \\dfrac{1}{5}\\right) = x^2 + \\dfrac{1}{5}x - \\dfrac{3}{4}x - \\dfrac{3}{20}$",
                  "reason": "Multiplying out: the $x$ multiplies each term of its bracket, and $-\\dfrac{3}{4}$ multiplies each term of its bracket. Fractions multiply top by top and bottom by bottom, and the product of the two numbers is in lowest terms."
                },
                {
                  "step": "$x^2 + \\dfrac{1}{5}x - \\dfrac{3}{4}x - \\dfrac{3}{20} = x^2 + \\left(\\dfrac{1}{5} - \\dfrac{3}{4}\\right)x - \\dfrac{3}{20}$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which leaves one term for each power of $x$."
                },
                {
                  "step": "$x^2 + \\left(\\dfrac{1}{5} - \\dfrac{3}{4}\\right)x - \\dfrac{3}{20} = x^2 + \\left(\\dfrac{4}{20} - \\dfrac{15}{20}\\right)x - \\dfrac{3}{20}$",
                  "reason": "Fractions are added and subtracted over a common denominator, so each fraction in the bracket is rewritten over the common denominator of the two."
                },
                {
                  "step": "$x^2 + \\left(\\dfrac{4}{20} - \\dfrac{15}{20}\\right)x - \\dfrac{3}{20} = x^2 - \\dfrac{11}{20}x - \\dfrac{3}{20}$",
                  "reason": "Fractions with a common denominator add over that denominator, which leaves each power of $x$ written once."
                }
              ]
            },
            {
              "prompt": "Expand $\\left(y + \\dfrac{2}{3}\\right)\\left(y + \\dfrac{1}{5}\\right)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "y^2+13*y/15+2/15",
              "lines": [
                {
                  "step": "Expand $\\left(y + \\dfrac{2}{3}\\right)\\left(y + \\dfrac{1}{5}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(y + \\dfrac{2}{3}\\right)\\left(y + \\dfrac{1}{5}\\right) = y\\left(y + \\dfrac{1}{5}\\right) + \\dfrac{2}{3}\\left(y + \\dfrac{1}{5}\\right)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $\\left(y + \\dfrac{1}{5}\\right)$ multiplies each term of $y + \\dfrac{2}{3}$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$y\\left(y + \\dfrac{1}{5}\\right) + \\dfrac{2}{3}\\left(y + \\dfrac{1}{5}\\right) = y^2 + \\dfrac{1}{5}y + \\dfrac{2}{3}y + \\dfrac{2}{15}$",
                  "reason": "Multiplying out: the $y$ multiplies each term of its bracket, and $\\dfrac{2}{3}$ multiplies each term of its bracket. Fractions multiply top by top and bottom by bottom, and the product of the two numbers is in lowest terms."
                },
                {
                  "step": "$y^2 + \\dfrac{1}{5}y + \\dfrac{2}{3}y + \\dfrac{2}{15} = y^2 + \\left(\\dfrac{1}{5} + \\dfrac{2}{3}\\right)y + \\dfrac{2}{15}$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $y$, which leaves one term for each power of $y$."
                },
                {
                  "step": "$y^2 + \\left(\\dfrac{1}{5} + \\dfrac{2}{3}\\right)y + \\dfrac{2}{15} = y^2 + \\left(\\dfrac{3}{15} + \\dfrac{10}{15}\\right)y + \\dfrac{2}{15}$",
                  "reason": "Fractions are added and subtracted over a common denominator, so each fraction in the bracket is rewritten over the common denominator of the two."
                },
                {
                  "step": "$y^2 + \\left(\\dfrac{3}{15} + \\dfrac{10}{15}\\right)y + \\dfrac{2}{15} = y^2 + \\dfrac{13}{15}y + \\dfrac{2}{15}$",
                  "reason": "Fractions with a common denominator add over that denominator, which leaves each power of $y$ written once."
                }
              ]
            },
            {
              "prompt": "Expand $\\left(z - \\dfrac{5}{6}\\right)\\left(z + \\dfrac{1}{4}\\right)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "z^2-7*z/12-5/24",
              "lines": [
                {
                  "step": "Expand $\\left(z - \\dfrac{5}{6}\\right)\\left(z + \\dfrac{1}{4}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(z - \\dfrac{5}{6}\\right)\\left(z + \\dfrac{1}{4}\\right) = z\\left(z + \\dfrac{1}{4}\\right) - \\dfrac{5}{6}\\left(z + \\dfrac{1}{4}\\right)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $\\left(z + \\dfrac{1}{4}\\right)$ multiplies each term of $z - \\dfrac{5}{6}$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$z\\left(z + \\dfrac{1}{4}\\right) - \\dfrac{5}{6}\\left(z + \\dfrac{1}{4}\\right) = z^2 + \\dfrac{1}{4}z - \\dfrac{5}{6}z - \\dfrac{5}{24}$",
                  "reason": "Multiplying out: the $z$ multiplies each term of its bracket, and $-\\dfrac{5}{6}$ multiplies each term of its bracket. Fractions multiply top by top and bottom by bottom, and the product of the two numbers is in lowest terms."
                },
                {
                  "step": "$z^2 + \\dfrac{1}{4}z - \\dfrac{5}{6}z - \\dfrac{5}{24} = z^2 + \\left(\\dfrac{1}{4} - \\dfrac{5}{6}\\right)z - \\dfrac{5}{24}$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $z$, which leaves one term for each power of $z$."
                },
                {
                  "step": "$z^2 + \\left(\\dfrac{1}{4} - \\dfrac{5}{6}\\right)z - \\dfrac{5}{24} = z^2 + \\left(\\dfrac{3}{12} - \\dfrac{10}{12}\\right)z - \\dfrac{5}{24}$",
                  "reason": "Fractions are added and subtracted over a common denominator, so each fraction in the bracket is rewritten over the common denominator of the two."
                },
                {
                  "step": "$z^2 + \\left(\\dfrac{3}{12} - \\dfrac{10}{12}\\right)z - \\dfrac{5}{24} = z^2 - \\dfrac{7}{12}z - \\dfrac{5}{24}$",
                  "reason": "Fractions with a common denominator add over that denominator, which leaves each power of $z$ written once."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t133-k2",
      "forms": [
        {
          "example": {
            "problem": "Expand $(x^2 + 3x - 4)(2x + 5)$.",
            "lines": [
              {
                "step": "Expand $(x^2 + 3x - 4)(2x + 5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x^2 + 3x - 4)(2x + 5) = x^2(2x + 5) + 3x(2x + 5) - 4(2x + 5)$",
                "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(2x + 5)$ multiplies each term of $x^2 + 3x - 4$, which gives one product for each term of the first bracket."
              },
              {
                "step": "$x^2(2x + 5) + 3x(2x + 5) - 4(2x + 5) = 2x^3 + 5x^2 + 6x^2 + 15x - 8x - 20$",
                "reason": "Multiplying out: each term in front multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$."
              },
              {
                "step": "$2x^3 + 5x^2 + 6x^2 + 15x - 8x - 20 = 2x^3 + (5 + 6)x^2 + (15 - 8)x - 20$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x^2$ and of the two terms in $x$, which leaves one term for each power of $x$."
              },
              {
                "step": "$2x^3 + (5 + 6)x^2 + (15 - 8)x - 20 = 2x^3 + 11x^2 + 7x - 20$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each power of $x$ written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(2x^2 - 5x + 3)(x - 4)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*x^3-13*x^2+23*x-12",
              "lines": [
                {
                  "step": "Expand $(2x^2 - 5x + 3)(x - 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x^2 - 5x + 3)(x - 4) = 2x^2(x - 4) - 5x(x - 4) + 3(x - 4)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(x - 4)$ multiplies each term of $2x^2 - 5x + 3$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$2x^2(x - 4) - 5x(x - 4) + 3(x - 4) = 2x^3 - 8x^2 - 5x^2 + 20x + 3x - 12$",
                  "reason": "Multiplying out: each term in front multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$."
                },
                {
                  "step": "$2x^3 - 8x^2 - 5x^2 + 20x + 3x - 12 = 2x^3 + (-8 - 5)x^2 + (20 + 3)x - 12$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x^2$ and of the two terms in $x$, which leaves one term for each power of $x$."
                },
                {
                  "step": "$2x^3 + (-8 - 5)x^2 + (20 + 3)x - 12 = 2x^3 - 13x^2 + 23x - 12$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each power of $x$ written once."
                }
              ]
            },
            {
              "prompt": "Expand $(y^2 - 2y - 6)(3y + 2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*y^3-4*y^2-22*y-12",
              "lines": [
                {
                  "step": "Expand $(y^2 - 2y - 6)(3y + 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(y^2 - 2y - 6)(3y + 2) = y^2(3y + 2) - 2y(3y + 2) - 6(3y + 2)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(3y + 2)$ multiplies each term of $y^2 - 2y - 6$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$y^2(3y + 2) - 2y(3y + 2) - 6(3y + 2) = 3y^3 + 2y^2 - 6y^2 - 4y - 18y - 12$",
                  "reason": "Multiplying out: each term in front multiplies each term of its bracket, and the product law adds the exponents of the powers of $y$."
                },
                {
                  "step": "$3y^3 + 2y^2 - 6y^2 - 4y - 18y - 12 = 3y^3 + (2 - 6)y^2 + (-4 - 18)y - 12$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $y^2$ and of the two terms in $y$, which leaves one term for each power of $y$."
                },
                {
                  "step": "$3y^3 + (2 - 6)y^2 + (-4 - 18)y - 12 = 3y^3 - 4y^2 - 22y - 12$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each power of $y$ written once."
                }
              ]
            },
            {
              "prompt": "Expand $(3x^2 + 4x + 2)(x - 3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x^3-5*x^2-10*x-6",
              "lines": [
                {
                  "step": "Expand $(3x^2 + 4x + 2)(x - 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x^2 + 4x + 2)(x - 3) = 3x^2(x - 3) + 4x(x - 3) + 2(x - 3)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(x - 3)$ multiplies each term of $3x^2 + 4x + 2$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$3x^2(x - 3) + 4x(x - 3) + 2(x - 3) = 3x^3 - 9x^2 + 4x^2 - 12x + 2x - 6$",
                  "reason": "Multiplying out: each term in front multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$."
                },
                {
                  "step": "$3x^3 - 9x^2 + 4x^2 - 12x + 2x - 6 = 3x^3 + (-9 + 4)x^2 + (-12 + 2)x - 6$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x^2$ and of the two terms in $x$, which leaves one term for each power of $x$."
                },
                {
                  "step": "$3x^3 + (-9 + 4)x^2 + (-12 + 2)x - 6 = 3x^3 - 5x^2 - 10x - 6$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each power of $x$ written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(x + 7)(x - 3)(2x + 5)$.",
            "lines": [
              {
                "step": "Expand $(x + 7)(x - 3)(2x + 5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x + 7)(x - 3) = x(x - 3) + 7(x - 3)$",
                "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(x - 3)$ multiplies each term of $x + 7$, which gives one product for each term of the first bracket."
              },
              {
                "step": "$x(x - 3) + 7(x - 3) = x^2 - 3x + 7x - 21$",
                "reason": "Multiplying out: the $x$ multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$; the $7$ multiplies each term of its bracket. Signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
              },
              {
                "step": "$x^2 - 3x + 7x - 21 = x^2 + (-3 + 7)x - 21$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which leaves one term for each power of $x$."
              },
              {
                "step": "$x^2 + (-3 + 7)x - 21 = x^2 + 4x - 21$",
                "reason": "The addition and subtraction of integers works out the bracket, which leaves each power of $x$ written once."
              },
              {
                "step": "$(x + 7)(x - 3)(2x + 5) = (x^2 + 4x - 21)(2x + 5)$",
                "reason": "The associative law of multiplication lets the first two brackets be multiplied first, and line 5 gives their product, which replaces them."
              },
              {
                "step": "$(x^2 + 4x - 21)(2x + 5) = x^2(2x + 5) + 4x(2x + 5) - 21(2x + 5)$",
                "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(2x + 5)$ multiplies each term of $x^2 + 4x - 21$, which gives one product for each term of the first bracket."
              },
              {
                "step": "$x^2(2x + 5) + 4x(2x + 5) - 21(2x + 5) = 2x^3 + 5x^2 + 8x^2 + 20x - 42x - 105$",
                "reason": "Multiplying out: each term in front multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$."
              },
              {
                "step": "$2x^3 + 5x^2 + 8x^2 + 20x - 42x - 105 = 2x^3 + (5 + 8)x^2 + (20 - 42)x - 105$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x^2$ and of the two terms in $x$, which leaves one term for each power of $x$."
              },
              {
                "step": "$2x^3 + (5 + 8)x^2 + (20 - 42)x - 105 = 2x^3 + 13x^2 - 22x - 105$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each power of $x$ written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(x - 4)(x + 6)(3x - 2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x^3+4*x^2-76*x+48",
              "lines": [
                {
                  "step": "Expand $(x - 4)(x + 6)(3x - 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 4)(x + 6) = x(x + 6) - 4(x + 6)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(x + 6)$ multiplies each term of $x - 4$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$x(x + 6) - 4(x + 6) = x^2 + 6x - 4x - 24$",
                  "reason": "Multiplying out: the $x$ multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$; the $-4$ multiplies each term of its bracket. Signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
                },
                {
                  "step": "$x^2 + 6x - 4x - 24 = x^2 + (6 - 4)x - 24$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which leaves one term for each power of $x$."
                },
                {
                  "step": "$x^2 + (6 - 4)x - 24 = x^2 + 2x - 24$",
                  "reason": "The addition and subtraction of integers works out the bracket, which leaves each power of $x$ written once."
                },
                {
                  "step": "$(x - 4)(x + 6)(3x - 2) = (x^2 + 2x - 24)(3x - 2)$",
                  "reason": "The associative law of multiplication lets the first two brackets be multiplied first, and line 5 gives their product, which replaces them."
                },
                {
                  "step": "$(x^2 + 2x - 24)(3x - 2) = x^2(3x - 2) + 2x(3x - 2) - 24(3x - 2)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(3x - 2)$ multiplies each term of $x^2 + 2x - 24$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$x^2(3x - 2) + 2x(3x - 2) - 24(3x - 2) = 3x^3 - 2x^2 + 6x^2 - 4x - 72x + 48$",
                  "reason": "Multiplying out: each term in front multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$."
                },
                {
                  "step": "$3x^3 - 2x^2 + 6x^2 - 4x - 72x + 48 = 3x^3 + (-2 + 6)x^2 + (-4 - 72)x + 48$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x^2$ and of the two terms in $x$, which leaves one term for each power of $x$."
                },
                {
                  "step": "$3x^3 + (-2 + 6)x^2 + (-4 - 72)x + 48 = 3x^3 + 4x^2 - 76x + 48$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each power of $x$ written once."
                }
              ]
            },
            {
              "prompt": "Expand $(2x + 3)(x - 4)(x + 5)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*x^3+5*x^2-37*x-60",
              "lines": [
                {
                  "step": "Expand $(2x + 3)(x - 4)(x + 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x + 3)(x - 4) = 2x(x - 4) + 3(x - 4)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(x - 4)$ multiplies each term of $2x + 3$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$2x(x - 4) + 3(x - 4) = 2x^2 - 8x + 3x - 12$",
                  "reason": "Multiplying out: the $2x$ multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$; the $3$ multiplies each term of its bracket. Signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
                },
                {
                  "step": "$2x^2 - 8x + 3x - 12 = 2x^2 + (-8 + 3)x - 12$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which leaves one term for each power of $x$."
                },
                {
                  "step": "$2x^2 + (-8 + 3)x - 12 = 2x^2 - 5x - 12$",
                  "reason": "The addition and subtraction of integers works out the bracket, which leaves each power of $x$ written once."
                },
                {
                  "step": "$(2x + 3)(x - 4)(x + 5) = (2x^2 - 5x - 12)(x + 5)$",
                  "reason": "The associative law of multiplication lets the first two brackets be multiplied first, and line 5 gives their product, which replaces them."
                },
                {
                  "step": "$(2x^2 - 5x - 12)(x + 5) = 2x^2(x + 5) - 5x(x + 5) - 12(x + 5)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(x + 5)$ multiplies each term of $2x^2 - 5x - 12$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$2x^2(x + 5) - 5x(x + 5) - 12(x + 5) = 2x^3 + 10x^2 - 5x^2 - 25x - 12x - 60$",
                  "reason": "Multiplying out: each term in front multiplies each term of its bracket, and the product law adds the exponents of the powers of $x$."
                },
                {
                  "step": "$2x^3 + 10x^2 - 5x^2 - 25x - 12x - 60 = 2x^3 + (10 - 5)x^2 + (-25 - 12)x - 60$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x^2$ and of the two terms in $x$, which leaves one term for each power of $x$."
                },
                {
                  "step": "$2x^3 + (10 - 5)x^2 + (-25 - 12)x - 60 = 2x^3 + 5x^2 - 37x - 60$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each power of $x$ written once."
                }
              ]
            },
            {
              "prompt": "Expand $(y - 2)(y - 7)(3y + 4)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*y^3-23*y^2+6*y+56",
              "lines": [
                {
                  "step": "Expand $(y - 2)(y - 7)(3y + 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(y - 2)(y - 7) = y(y - 7) - 2(y - 7)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(y - 7)$ multiplies each term of $y - 2$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$y(y - 7) - 2(y - 7) = y^2 - 7y - 2y + 14$",
                  "reason": "Multiplying out: the $y$ multiplies each term of its bracket, and the product law adds the exponents of the powers of $y$; the $-2$ multiplies each term of its bracket. Signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
                },
                {
                  "step": "$y^2 - 7y - 2y + 14 = y^2 + (-7 - 2)y + 14$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $y$, which leaves one term for each power of $y$."
                },
                {
                  "step": "$y^2 + (-7 - 2)y + 14 = y^2 - 9y + 14$",
                  "reason": "The addition and subtraction of integers works out the bracket, which leaves each power of $y$ written once."
                },
                {
                  "step": "$(y - 2)(y - 7)(3y + 4) = (y^2 - 9y + 14)(3y + 4)$",
                  "reason": "The associative law of multiplication lets the first two brackets be multiplied first, and line 5 gives their product, which replaces them."
                },
                {
                  "step": "$(y^2 - 9y + 14)(3y + 4) = y^2(3y + 4) - 9y(3y + 4) + 14(3y + 4)$",
                  "reason": "Every term of one bracket times every term of the other: by the distributive law the bracket $(3y + 4)$ multiplies each term of $y^2 - 9y + 14$, which gives one product for each term of the first bracket."
                },
                {
                  "step": "$y^2(3y + 4) - 9y(3y + 4) + 14(3y + 4) = 3y^3 + 4y^2 - 27y^2 - 36y + 42y + 56$",
                  "reason": "Multiplying out: each term in front multiplies each term of its bracket, and the product law adds the exponents of the powers of $y$."
                },
                {
                  "step": "$3y^3 + 4y^2 - 27y^2 - 36y + 42y + 56 = 3y^3 + (4 - 27)y^2 + (-36 + 42)y + 56$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $y^2$ and of the two terms in $y$, which leaves one term for each power of $y$."
                },
                {
                  "step": "$3y^3 + (4 - 27)y^2 + (-36 + 42)y + 56 = 3y^3 - 23y^2 + 6y + 56$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each power of $y$ written once."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t133-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the coefficient of the linear term of $(4x - 3)(2x + 5)$, without writing out the other products.",
            "lines": [
              {
                "step": "Find the coefficient of the linear term of $(4x - 3)(2x + 5)$, without writing out the other products.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms in $x$ come from $4x \\cdot 5$ and $(-3) \\cdot 2x$.",
                "reason": "Every term of one bracket times every term of the other: of the four products, $4x \\cdot 2x$ is a term in $x^2$ and $(-3) \\cdot 5$ is a number, so only these two are terms in $x$."
              },
              {
                "step": "$4x \\cdot 5 + (-3) \\cdot 2x = 20x - 6x$",
                "reason": "Multiplying out: each number multiplies the coefficient of $x$, and the signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
              },
              {
                "step": "$20x - 6x = 14x$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$."
              },
              {
                "step": "The coefficient of the linear term is $14$.",
                "reason": "The linear term is the term in $x$, and its coefficient is the number in front of $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the coefficient of the linear term of $(2y + 7)(3y - 4)$, without writing out the other products.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find the coefficient of the linear term of $(2y + 7)(3y - 4)$, without writing out the other products.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $y$ come from $2y \\cdot (-4)$ and $7 \\cdot 3y$.",
                  "reason": "Every term of one bracket times every term of the other: of the four products, $2y \\cdot 3y$ is a term in $y^2$ and $7 \\cdot (-4)$ is a number, so only these two are terms in $y$."
                },
                {
                  "step": "$2y \\cdot (-4) + 7 \\cdot 3y = -8y + 21y$",
                  "reason": "Multiplying out: each number multiplies the coefficient of $y$, and the signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
                },
                {
                  "step": "$-8y + 21y = 13y$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $y$."
                },
                {
                  "step": "The coefficient of the linear term is $13$.",
                  "reason": "The linear term is the term in $y$, and its coefficient is the number in front of $y$."
                }
              ]
            },
            {
              "prompt": "Find the coefficient of the linear term of $(5z - 2)(z - 6)$, without writing out the other products.",
              "form": "Answer as an integer.",
              "answer": "-32",
              "lines": [
                {
                  "step": "Find the coefficient of the linear term of $(5z - 2)(z - 6)$, without writing out the other products.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $z$ come from $5z \\cdot (-6)$ and $(-2) \\cdot z$.",
                  "reason": "Every term of one bracket times every term of the other: of the four products, $5z \\cdot z$ is a term in $z^2$ and $(-2) \\cdot (-6)$ is a number, so only these two are terms in $z$."
                },
                {
                  "step": "$5z \\cdot (-6) + (-2) \\cdot z = -30z - 2z$",
                  "reason": "Multiplying out: each number multiplies the coefficient of $z$, and the signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
                },
                {
                  "step": "$-30z - 2z = -32z$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $z$."
                },
                {
                  "step": "The coefficient of the linear term is $-32$.",
                  "reason": "The linear term is the term in $z$, and its coefficient is the number in front of $z$."
                }
              ]
            },
            {
              "prompt": "Find the coefficient of the linear term of $(3x + 4)(2x - 9)$, without writing out the other products.",
              "form": "Answer as an integer.",
              "answer": "-19",
              "lines": [
                {
                  "step": "Find the coefficient of the linear term of $(3x + 4)(2x - 9)$, without writing out the other products.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms in $x$ come from $3x \\cdot (-9)$ and $4 \\cdot 2x$.",
                  "reason": "Every term of one bracket times every term of the other: of the four products, $3x \\cdot 2x$ is a term in $x^2$ and $4 \\cdot (-9)$ is a number, so only these two are terms in $x$."
                },
                {
                  "step": "$3x \\cdot (-9) + 4 \\cdot 2x = -27x + 8x$",
                  "reason": "Multiplying out: each number multiplies the coefficient of $x$, and the signs of products, from arithmetic, make a product of a negative and a positive number negative and a product of two negative numbers positive."
                },
                {
                  "step": "$-27x + 8x = -19x$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$."
                },
                {
                  "step": "The coefficient of the linear term is $-19$.",
                  "reason": "The linear term is the term in $x$, and its coefficient is the number in front of $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t133-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this expansion of $(x - 6)(-2x + 3)$, and write that line right.",
            "given": [
              "$(x - 6)(-2x + 3)$",
              "$x(-2x + 3) - 6(-2x + 3)$",
              "$-2x^2 + 3x + 12x + 18$",
              "$-2x^2 + 15x + 18$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this expansion of $(x - 6)(-2x + 3)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 multiplies out, and writes $+18$ where the rule gives $-18$.",
                "reason": "A sign lost: each term multiplies with its own sign, and by the signs of products, from arithmetic, $-6$ times $3$ is $-18$."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $-2x^2 + 3x + 12x - 18$.",
                "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this expansion of $(x - 4)(3x - 5)$, and write that line right.",
              "given": [
                "$(x - 4)(3x - 5)$",
                "$x(3x - 5) + 4(3x - 5)$",
                "$3x^2 - 5x + 12x - 20$",
                "$3x^2 + 7x - 20$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x*(3*x-5)-4*(3*x-5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(x - 4)(3x - 5)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 splits the product, and writes $+4(3x - 5)$ where the rule gives $-4(3x - 5)$.",
                  "reason": "A sign lost: each term multiplies with its own sign, and by the signs of products, from arithmetic, $-4$ times $(3x - 5)$ is $-4(3x - 5)$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $x(3x - 5) - 4(3x - 5)$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(-3x + 2)(x - 7)$, and write that line right.",
              "given": [
                "$(-3x + 2)(x - 7)$",
                "$-3x(x - 7) + 2(x - 7)$",
                "$-3x^2 + 21x + 2x + 14$",
                "$-3x^2 + 23x + 14$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -3*x^2+21*x+2*x-14",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(-3x + 2)(x - 7)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 multiplies out, and writes $+14$ where the rule gives $-14$.",
                  "reason": "A sign lost: each term multiplies with its own sign, and by the signs of products, from arithmetic, $2$ times $-7$ is $-14$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $-3x^2 + 21x + 2x - 14$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(2x - 9)(x + 4)$, and write that line right.",
              "given": [
                "$(2x - 9)(x + 4)$",
                "$2x(x + 4) + 9(x + 4)$",
                "$2x^2 + 8x + 9x + 36$",
                "$2x^2 + 17x + 36$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 2*x*(x+4)-9*(x+4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(2x - 9)(x + 4)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 splits the product, and writes $+9(x + 4)$ where the rule gives $-9(x + 4)$.",
                  "reason": "A sign lost: each term multiplies with its own sign, and by the signs of products, from arithmetic, $-9$ times $(x + 4)$ is $-9(x + 4)$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $2x(x + 4) - 9(x + 4)$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this expansion of $(x + 4)^2 + 3(x - 2)$, and write that line right.",
            "given": [
              "$(x + 4)^2 + 3(x - 2)$",
              "$x^2 + 16 + 3(x - 2)$",
              "$x^2 + 16 + 3x - 6$",
              "$x^2 + 3x + 10$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this expansion of $(x + 4)^2 + 3(x - 2)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 writes $(x + 4)^2$ as $x^2 + 16$, where the power means $(x + 4)(x + 4)$.",
                "reason": "A power taken term by term over a sum: the square of a bracket is the whole bracket times itself, and every term of one bracket times every term of the other gives four products, not two."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line. The four products of $(x + 4)(x + 4)$ collect to $x^2 + 8x + 16$.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it. Every term of one bracket times every term of the other gives the four products, and collecting like terms adds the two terms in $x$."
              },
              {
                "step": "Line 2 written right is $x^2 + 8x + 16 + 3(x - 2)$.",
                "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this expansion of $2(x + 5) + (x - 3)^2$, and write that line right.",
              "given": [
                "$2(x + 5) + (x - 3)^2$",
                "$2x + 10 + (x - 3)^2$",
                "$2x + 10 + x^2 + 9$",
                "$x^2 + 2x + 19$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*x+10+x^2-6*x+9",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $2(x + 5) + (x - 3)^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $(x - 3)^2$ as $x^2 + 9$, where the power means $(x - 3)(x - 3)$.",
                  "reason": "A power taken term by term over a sum: the square of a bracket is the whole bracket times itself, and every term of one bracket times every term of the other gives four products, not two."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line. The four products of $(x - 3)(x - 3)$ collect to $x^2 - 6x + 9$.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it. Every term of one bracket times every term of the other gives the four products, and collecting like terms adds the two terms in $x$."
                },
                {
                  "step": "Line 3 written right is $2x + 10 + x^2 - 6x + 9$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(x - 6)^2 + 4(x + 3)$, and write that line right.",
              "given": [
                "$(x - 6)^2 + 4(x + 3)$",
                "$x^2 + 36 + 4(x + 3)$",
                "$x^2 + 36 + 4x + 12$",
                "$x^2 + 4x + 48$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^2-12*x+36+4*(x+3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(x - 6)^2 + 4(x + 3)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 writes $(x - 6)^2$ as $x^2 + 36$, where the power means $(x - 6)(x - 6)$.",
                  "reason": "A power taken term by term over a sum: the square of a bracket is the whole bracket times itself, and every term of one bracket times every term of the other gives four products, not two."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line. The four products of $(x - 6)(x - 6)$ collect to $x^2 - 12x + 36$.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it. Every term of one bracket times every term of the other gives the four products, and collecting like terms adds the two terms in $x$."
                },
                {
                  "step": "Line 2 written right is $x^2 - 12x + 36 + 4(x + 3)$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $5(x - 4) + (x + 2)^2$, and write that line right.",
              "given": [
                "$5(x - 4) + (x + 2)^2$",
                "$5x - 20 + (x + 2)^2$",
                "$5x - 20 + x^2 + 4$",
                "$x^2 + 5x - 16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5*x-20+x^2+4*x+4",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $5(x - 4) + (x + 2)^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $(x + 2)^2$ as $x^2 + 4$, where the power means $(x + 2)(x + 2)$.",
                  "reason": "A power taken term by term over a sum: the square of a bracket is the whole bracket times itself, and every term of one bracket times every term of the other gives four products, not two."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line. The four products of $(x + 2)(x + 2)$ collect to $x^2 + 4x + 4$.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it. Every term of one bracket times every term of the other gives the four products, and collecting like terms adds the two terms in $x$."
                },
                {
                  "step": "Line 3 written right is $5x - 20 + x^2 + 4x + 4$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every term kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t133-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, without multiplying out and with the product on the left: The product of 3 more than $x$ and 8 less than $x$ is 48.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, without multiplying out and with the product on the left: The product of 3 more than $x$ and 8 less than $x$ is 48.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first amount is $x + 3$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
              },
              {
                "step": "The second amount is $x - 8$.",
                "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
              },
              {
                "step": "$(x + 3)(x - 8) = 48$",
                "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, each kept whole in a bracket, and the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out and with the product on the left: Multiplying 4 more than twice $x$ by 7 less than $x$ gives 30.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(2*x+4)*(x-7) = 30",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out and with the product on the left: Multiplying 4 more than twice $x$ by 7 less than $x$ gives 30.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first amount is $2x + 4$.",
                  "reason": "Writing a sentence as an equation: \"twice\" multiplies $x$, and \"more than\" adds the amount to that product."
                },
                {
                  "step": "The second amount is $x - 7$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "$(2x + 4)(x - 7) = 30$",
                  "reason": "Writing a sentence as an equation: \"multiplying by\" multiplies the two amounts, each kept whole in a bracket, and the word \"gives\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out and with the product on the left: The product of 6 less than 3 times $x$ and 2 more than $x$ is $-8$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(3*x-6)*(x+2) = -8",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out and with the product on the left: The product of 6 less than 3 times $x$ and 2 more than $x$ is $-8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first amount is $3x - 6$.",
                  "reason": "Writing a sentence as an equation: \"3 times\" multiplies $x$, and \"less than\" takes the amount away from that product."
                },
                {
                  "step": "The second amount is $x + 2$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$(3x - 6)(x + 2) = -8$",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, each kept whole in a bracket, and the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out and with the product on the left: When 5 more than 3 times $x$ is multiplied by 9 less than $x$, the result is 56.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(3*x+5)*(x-9) = 56",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out and with the product on the left: When 5 more than 3 times $x$ is multiplied by 9 less than $x$, the result is 56.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first amount is $3x + 5$.",
                  "reason": "Writing a sentence as an equation: \"3 times\" multiplies $x$, and \"more than\" adds the amount to that product."
                },
                {
                  "step": "The second amount is $x - 9$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "$(3x + 5)(x - 9) = 56$",
                  "reason": "Writing a sentence as an equation: \"multiplied by\" multiplies the two amounts, each kept whole in a bracket, and the words \"the result is\" mark the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $n$, without multiplying out and with the product on the left: The smaller of two consecutive even numbers is $2n$, and the product of the two numbers is 168.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $n$, without multiplying out and with the product on the left: The smaller of two consecutive even numbers is $2n$, and the product of the two numbers is 168.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The smaller number is $2n$.",
                "reason": "Writing a sentence as an equation: the sentence names the smaller number."
              },
              {
                "step": "The larger number is $2n + 2$.",
                "reason": "Consecutive even numbers differ by 2, so the larger number is 2 more than the smaller."
              },
              {
                "step": "$(2n)(2n + 2) = 168$",
                "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, each kept whole in a bracket, and the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $n$, without multiplying out and with the product on the left: The smaller of two consecutive odd numbers is $2n + 1$, and the product of the two numbers is 323.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(2*n+1)*(2*n+3) = 323",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $n$, without multiplying out and with the product on the left: The smaller of two consecutive odd numbers is $2n + 1$, and the product of the two numbers is 323.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The smaller number is $2n + 1$.",
                  "reason": "Writing a sentence as an equation: the sentence names the smaller number."
                },
                {
                  "step": "The larger number is $2n + 3$.",
                  "reason": "Consecutive odd numbers differ by 2, so the larger number is 2 more than the smaller."
                },
                {
                  "step": "$(2n + 1)(2n + 3) = 323$",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, each kept whole in a bracket, and the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $n$, without multiplying out and with the product on the left: The smaller of two consecutive odd numbers is $2n + 3$, and the product of the two numbers is 255.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(2*n+3)*(2*n+5) = 255",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $n$, without multiplying out and with the product on the left: The smaller of two consecutive odd numbers is $2n + 3$, and the product of the two numbers is 255.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The smaller number is $2n + 3$.",
                  "reason": "Writing a sentence as an equation: the sentence names the smaller number."
                },
                {
                  "step": "The larger number is $2n + 5$.",
                  "reason": "Consecutive odd numbers differ by 2, so the larger number is 2 more than the smaller."
                },
                {
                  "step": "$(2n + 3)(2n + 5) = 255$",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, each kept whole in a bracket, and the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $n$, without multiplying out and with the product on the left: The smaller of two consecutive whole numbers is $4n + 1$, and the product of the two numbers is 182.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(4*n+1)*(4*n+2) = 182",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $n$, without multiplying out and with the product on the left: The smaller of two consecutive whole numbers is $4n + 1$, and the product of the two numbers is 182.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The smaller number is $4n + 1$.",
                  "reason": "Writing a sentence as an equation: the sentence names the smaller number."
                },
                {
                  "step": "The larger number is $4n + 2$.",
                  "reason": "Consecutive whole numbers differ by 1, so the larger number is 1 more than the smaller."
                },
                {
                  "step": "$(4n + 1)(4n + 2) = 182$",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, each kept whole in a bracket, and the word \"is\" marks the place of the equals sign."
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
      "id": "t133-p1",
      "method": "direct proof",
      "statement": "For all numbers $a$, $b$, $c$ and $d$, $(a + b)(c + d) = ac + ad + bc + bd$.",
      "idea": "Taking $c + d$ as one number, the distributive law splits the product into $a(c + d) + b(c + d)$. The distributive law then multiplies out each of the two pieces, so each term of the first bracket meets each term of the second once.",
      "lines": [
        {
          "line": "The product $(a + b)(c + d)$ equals $(c + d)(a + b)$.",
          "reason": "The commutative law of multiplication."
        },
        {
          "line": "The product $(c + d)(a + b)$ equals $(c + d)a + (c + d)b$.",
          "reason": "The distributive law, with $c + d$ taken as one number."
        },
        {
          "line": "The product $(c + d)a$ equals $a(c + d)$.",
          "reason": "The commutative law of multiplication."
        },
        {
          "line": "The product $(c + d)b$ equals $b(c + d)$.",
          "reason": "The commutative law of multiplication."
        },
        {
          "line": "So $(a + b)(c + d) = a(c + d) + b(c + d)$.",
          "reason": "Combining the equalities of lines 1 to 4."
        },
        {
          "line": "The product $a(c + d)$ equals $ac + ad$.",
          "reason": "The distributive law."
        },
        {
          "line": "The product $b(c + d)$ equals $bc + bd$.",
          "reason": "The distributive law."
        },
        {
          "line": "So $(a + b)(c + d) = (ac + ad) + (bc + bd)$.",
          "reason": "Line 5, with each product replaced by the sum equal to it in lines 6 and 7."
        },
        {
          "line": "The sum $(ac + ad) + (bc + bd)$ is written $ac + ad + bc + bd$.",
          "reason": "The associative law of addition lets the brackets of a sum drop."
        },
        {
          "line": "Therefore $(a + b)(c + d) = ac + ad + bc + bd$.",
          "reason": "Combining the equalities of lines 8 and 9."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t133-s1",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$, $b$, $c$ and $d$, $(a + b)(c + d) + (a - b)(c - d) = 2ac + 2bd$. Facts it may use: every term of one bracket times every term of the other, subtraction as addition, the signs of products, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "The product $(a + b)(c + d)$ equals $ac + ad + bc + bd$.",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "The difference $a - b$ equals $a + (-b)$, and $c - d$ equals $c + (-d)$.",
            "reason": "Subtraction as addition, from arithmetic: subtracting a number adds its negative."
          },
          {
            "line": "So $(a - b)(c - d) = (a + (-b))(c + (-d))$.",
            "reason": "Each bracket is replaced by the sum equal to it in line 2."
          },
          {
            "line": "The product $(a + (-b))(c + (-d))$ equals $ac + a(-d) + (-b)c + (-b)(-d)$.",
            "reason": "Every term of one bracket times every term of the other, with $-b$ and $-d$ as the second terms."
          },
          {
            "line": "The product $a(-d)$ equals $-ad$.",
            "reason": "Signs of products, from arithmetic: a negative times a positive is negative."
          },
          {
            "line": "The product $(-b)c$ equals $-bc$.",
            "reason": "Signs of products, from arithmetic: a negative times a positive is negative."
          },
          {
            "line": "The product $(-b)(-d)$ equals $bd$.",
            "reason": "Signs of products, from arithmetic: a negative times a negative is positive."
          },
          {
            "line": "So $(a - b)(c - d) = ac + (-ad) + (-bc) + bd$.",
            "reason": "Lines 3 and 4, with each product replaced by the expression equal to it in lines 5 to 7."
          },
          {
            "line": "The sum $ac + (-ad) + (-bc) + bd$ is written $ac - ad - bc + bd$.",
            "reason": "Subtraction as addition, from arithmetic, read backwards."
          },
          {
            "line": "So $(a + b)(c + d) + (a - b)(c - d) = (ac + ad + bc + bd) + (ac - ad - bc + bd)$.",
            "reason": "Lines 1, 8 and 9, with each product replaced by the sum equal to it."
          },
          {
            "line": "The sum $(ac + ad + bc + bd) + (ac - ad - bc + bd)$ equals $ac + ad + bc + bd + ac - ad - bc + bd$.",
            "reason": "A bracket with a plus sign in front of it, or with nothing in front of it, drops with no change."
          },
          {
            "line": "The terms $ad - ad$ add to 0, and the terms $bc - bc$ add to 0.",
            "reason": "Collecting like terms: $(1 - 1)ad = 0$ and $(1 - 1)bc = 0$."
          },
          {
            "line": "The terms $ac + ac$ add to $2ac$, and the terms $bd + bd$ add to $2bd$.",
            "reason": "Collecting like terms: $(1 + 1)ac = 2ac$ and $(1 + 1)bd = 2bd$."
          },
          {
            "line": "Therefore $(a + b)(c + d) + (a - b)(c - d) = 2ac + 2bd$.",
            "reason": "Lines 10 and 11, with the like terms collected as in lines 12 and 13, and adding 0 changes nothing."
          }
        ]
      }
    },
    {
      "id": "t133-s2",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$, $b$, $c$, $d$, $e$ and $f$, $(a + b)(c + d)(e + f) = ace + acf + ade + adf + bce + bcf + bde + bdf$. Facts it may use: the associative law of multiplication, every term of one bracket times every term of the other, the distributive law, multiplying out, the associative law of addition.",
      "check": {
        "proof": [
          {
            "line": "The product $(a + b)(c + d)(e + f)$ equals $((a + b)(c + d))(e + f)$.",
            "reason": "The associative law of multiplication."
          },
          {
            "line": "The product $(a + b)(c + d)$ equals $ac + ad + bc + bd$.",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "So $(a + b)(c + d)(e + f) = (ac + ad + bc + bd)(e + f)$.",
            "reason": "Line 1, with the product of the first two brackets replaced by the sum equal to it in line 2."
          },
          {
            "line": "The product $(ac + ad + bc + bd)(e + f)$ equals $ac(e + f) + ad(e + f) + bc(e + f) + bd(e + f)$.",
            "reason": "The distributive law, with $e + f$ taken as one number: $(p + q + r + s)t = pt + qt + rt + st$."
          },
          {
            "line": "The product $ac(e + f)$ equals $ace + acf$.",
            "reason": "Multiplying out."
          },
          {
            "line": "The product $ad(e + f)$ equals $ade + adf$.",
            "reason": "Multiplying out."
          },
          {
            "line": "The product $bc(e + f)$ equals $bce + bcf$.",
            "reason": "Multiplying out."
          },
          {
            "line": "The product $bd(e + f)$ equals $bde + bdf$.",
            "reason": "Multiplying out."
          },
          {
            "line": "So $(a + b)(c + d)(e + f) = (ace + acf) + (ade + adf) + (bce + bcf) + (bde + bdf)$.",
            "reason": "Lines 3 and 4, with each product replaced by the sum equal to it in lines 5 to 8."
          },
          {
            "line": "The sum $(ace + acf) + (ade + adf) + (bce + bcf) + (bde + bdf)$ is written $ace + acf + ade + adf + bce + bcf + bde + bdf$.",
            "reason": "The associative law of addition lets the brackets of a sum drop."
          },
          {
            "line": "Therefore $(a + b)(c + d)(e + f) = ace + acf + ade + adf + bce + bcf + bde + bdf$.",
            "reason": "Combining the equalities of lines 9 and 10."
          }
        ]
      }
    },
    {
      "id": "t133-s3",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$, $b$, $c$, $d$ and $e$, $(a + b)(c + d + e) = ac + ad + ae + bc + bd + be$. Facts it may use: every term of one bracket times every term of the other, the distributive law, the associative law of addition.",
      "check": {
        "proof": [
          {
            "line": "The sum $c + d + e$ equals $c + (d + e)$.",
            "reason": "The associative law of addition."
          },
          {
            "line": "So $(a + b)(c + d + e) = (a + b)(c + (d + e))$.",
            "reason": "The second bracket is replaced by the sum equal to it in line 1."
          },
          {
            "line": "The product $(a + b)(c + (d + e))$ equals $ac + a(d + e) + bc + b(d + e)$.",
            "reason": "Every term of one bracket times every term of the other, with $d + e$ as the second term of the second bracket."
          },
          {
            "line": "The product $a(d + e)$ equals $ad + ae$.",
            "reason": "The distributive law."
          },
          {
            "line": "The product $b(d + e)$ equals $bd + be$.",
            "reason": "The distributive law."
          },
          {
            "line": "So $(a + b)(c + d + e) = ac + (ad + ae) + bc + (bd + be)$.",
            "reason": "Lines 2 and 3, with each product replaced by the sum equal to it in lines 4 and 5."
          },
          {
            "line": "The sum $ac + (ad + ae) + bc + (bd + be)$ is written $ac + ad + ae + bc + bd + be$.",
            "reason": "The associative law of addition lets the brackets of a sum drop."
          },
          {
            "line": "Therefore $(a + b)(c + d + e) = ac + ad + ae + bc + bd + be$.",
            "reason": "Combining the equalities of lines 6 and 7."
          }
        ]
      }
    }
  ]
}
