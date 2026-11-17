export default {
  "number": 102,
  "title": "Integer exponents",
  "section": 1,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "28-37, 57-60, 107-110"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Simplify $\\dfrac{(2x^3)^2}{4x^8}$, with no negative exponent in the answer.",
    "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
    "answer": "1/x^2",
    "solution": [
      "Simplify $\\dfrac{(2x^3)^2}{4x^8}$, with no negative exponent in the answer.",
      "$\\dfrac{(2x^3)^2}{4x^8} = \\dfrac{2^2(x^3)^2}{4x^8}$",
      "$\\dfrac{2^2(x^3)^2}{4x^8} = \\dfrac{2^2x^6}{4x^8}$",
      "$\\dfrac{2^2x^6}{4x^8} = \\dfrac{4x^6}{4x^8}$",
      "$\\dfrac{4x^6}{4x^8} = x^{-2}$",
      "$x^{-2} = \\dfrac{1}{x^2}$"
    ]
  },
  "ideas": [
    {
      "name": "Negative exponents",
      "concrete": "Cancelling three factors of 2 gives $\\dfrac{2^3}{2^5} = \\dfrac{2\\cdot 2\\cdot 2}{2\\cdot 2\\cdot 2\\cdot 2\\cdot 2} = \\dfrac{1}{2^2}$, and subtracting the exponents gives $2^{3-5} = 2^{-2}$, so $2^{-2}$ means $\\dfrac{1}{2^2}$.",
      "general": "For a nonzero number $a$ and a positive whole number $n$, the **negative exponent** is $a^{-n} = \\dfrac{1}{a^n}$, and the **zero exponent** is $a^0 = 1$, as in arithmetic. With this definition the laws of exponents hold for all integers $m$ and $n$ and all nonzero numbers $a$ and $b$: the **product law** $a^ma^n = a^{m+n}$, the **power law** $(a^m)^n = a^{mn}$, the **quotient law** $\\dfrac{a^m}{a^n} = a^{m-n}$, the **power of a product** $(ab)^n = a^nb^n$, the **power of a quotient** $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$, and the **negative power of a quotient** $\\left(\\dfrac{a}{b}\\right)^{-n} = \\left(\\dfrac{b}{a}\\right)^n$. Each law joins powers of one base or powers with one exponent. No law joins $a^m$ and $b^n$ when the bases differ and the exponents differ, and no law opens the power of a sum."
    },
    {
      "name": "The sign of a power of a negative number",
      "concrete": "The products are $(-5)^2 = (-5)(-5) = 25$ and $(-5)^3 = (-5)(-5)(-5) = -125$, while $-5^2 = -(5^2) = -25$.",
      "general": "For a positive number $a$ and a whole number $n$, the **sign of a power of a negative number** follows the exponent: $(-a)^n = a^n$ when $n$ is even, and $(-a)^n = -a^n$ when $n$ is odd. Without brackets the power binds before the minus sign, so $-a^n$ means $-(a^n)$."
    }
  ],
  "kinds": [
    {
      "id": "t102-k1",
      "forms": [
        {
          "example": {
            "problem": "Simplify $4x^3\\cdot 5x^2\\cdot x^6$.",
            "lines": [
              {
                "step": "$4x^3\\cdot 5x^2\\cdot x^6 = (4\\cdot 5)(x^3\\cdot x^2\\cdot x^6)$",
                "reason": "The associative and commutative laws of multiplication allow the numbers to stand together and the powers of $x$ together, which sets up one rule for each group."
              },
              {
                "step": "$(4\\cdot 5)(x^3\\cdot x^2\\cdot x^6) = (4\\cdot 5)x^{11}$",
                "reason": "The product law adds the exponents of powers of one base, which leaves a single power of $x$."
              },
              {
                "step": "$(4\\cdot 5)x^{11} = 20x^{11}$",
                "reason": "The multiplication of whole numbers gives the product of the numbers, which leaves one coefficient."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $2y^5\\cdot 7y^3$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "14*y^8",
              "lines": [
                {
                  "step": "$2y^5\\cdot 7y^3 = (2\\cdot 7)(y^5\\cdot y^3)$",
                  "reason": "The associative and commutative laws of multiplication allow the numbers to stand together and the powers of $y$ together, which sets up one rule for each group."
                },
                {
                  "step": "$(2\\cdot 7)(y^5\\cdot y^3) = (2\\cdot 7)y^8$",
                  "reason": "The product law adds the exponents of powers of one base, which leaves a single power of $y$."
                },
                {
                  "step": "$(2\\cdot 7)y^8 = 14y^8$",
                  "reason": "The multiplication of whole numbers gives the product of the numbers, which leaves one coefficient."
                }
              ]
            },
            {
              "prompt": "Simplify $6x^{-2}\\cdot 3x^7$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "18*x^5",
              "lines": [
                {
                  "step": "$6x^{-2}\\cdot 3x^7 = (6\\cdot 3)(x^{-2}\\cdot x^7)$",
                  "reason": "The associative and commutative laws of multiplication allow the numbers to stand together and the powers of $x$ together, which sets up one rule for each group."
                },
                {
                  "step": "$(6\\cdot 3)(x^{-2}\\cdot x^7) = (6\\cdot 3)x^5$",
                  "reason": "The product law adds the exponents of powers of one base, which leaves a single power of $x$."
                },
                {
                  "step": "$(6\\cdot 3)x^5 = 18x^5$",
                  "reason": "The multiplication of whole numbers gives the product of the numbers, which leaves one coefficient."
                }
              ]
            },
            {
              "prompt": "Simplify $3z^4\\cdot 2z^{-1}\\cdot 5z^6$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "30*z^9",
              "lines": [
                {
                  "step": "$3z^4\\cdot 2z^{-1}\\cdot 5z^6 = (3\\cdot 2\\cdot 5)(z^4\\cdot z^{-1}\\cdot z^6)$",
                  "reason": "The associative and commutative laws of multiplication allow the numbers to stand together and the powers of $z$ together, which sets up one rule for each group."
                },
                {
                  "step": "$(3\\cdot 2\\cdot 5)(z^4\\cdot z^{-1}\\cdot z^6) = (3\\cdot 2\\cdot 5)z^9$",
                  "reason": "The product law adds the exponents of powers of one base, which leaves a single power of $z$."
                },
                {
                  "step": "$(3\\cdot 2\\cdot 5)z^9 = 30z^9$",
                  "reason": "The multiplication of whole numbers gives the product of the numbers, which leaves one coefficient."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $(3x^4)^2$.",
            "lines": [
              {
                "step": "$(3x^4)^2 = 3^2(x^4)^2$",
                "reason": "The power of a product raises each factor to the power, which separates the number from the power of $x$."
              },
              {
                "step": "$3^2(x^4)^2 = 3^2x^8$",
                "reason": "The power law multiplies the exponents, which leaves a single power of $x$."
              },
              {
                "step": "$3^2x^8 = 9x^8$",
                "reason": "The definition of a power as repeated multiplication gives $3^2 = 9$, which leaves the coefficient as one number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $(2y^5)^3$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "8*y^15",
              "lines": [
                {
                  "step": "$(2y^5)^3 = 2^3(y^5)^3$",
                  "reason": "The power of a product raises each factor to the power, which separates the number from the power of $y$."
                },
                {
                  "step": "$2^3(y^5)^3 = 2^3y^{15}$",
                  "reason": "The power law multiplies the exponents, which leaves a single power of $y$."
                },
                {
                  "step": "$2^3y^{15} = 8y^{15}$",
                  "reason": "The definition of a power as repeated multiplication gives $2^3 = 8$, which leaves the coefficient as one number."
                }
              ]
            },
            {
              "prompt": "Simplify $(-5z^3)^2$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "25*z^6",
              "lines": [
                {
                  "step": "$(-5z^3)^2 = (-5)^2(z^3)^2$",
                  "reason": "The power of a product raises each factor to the power, which separates the number from the power of $z$."
                },
                {
                  "step": "$(-5)^2(z^3)^2 = (-5)^2z^6$",
                  "reason": "The power law multiplies the exponents, which leaves a single power of $z$."
                },
                {
                  "step": "$(-5)^2z^6 = 25z^6$",
                  "reason": "The definition of a power as repeated multiplication gives $(-5)^2 = 25$, which leaves the coefficient as one number."
                }
              ]
            },
            {
              "prompt": "Simplify $(2x^2)^5$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "32*x^10",
              "lines": [
                {
                  "step": "$(2x^2)^5 = 2^5(x^2)^5$",
                  "reason": "The power of a product raises each factor to the power, which separates the number from the power of $x$."
                },
                {
                  "step": "$2^5(x^2)^5 = 2^5x^{10}$",
                  "reason": "The power law multiplies the exponents, which leaves a single power of $x$."
                },
                {
                  "step": "$2^5x^{10} = 32x^{10}$",
                  "reason": "The definition of a power as repeated multiplication gives $2^5 = 32$, which leaves the coefficient as one number."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{6x^3}{15x^7}$, with no negative exponent in the answer.",
            "lines": [
              {
                "step": "$\\dfrac{6x^3}{15x^7} = \\dfrac{6}{15}\\cdot \\dfrac{x^3}{x^7}$",
                "reason": "The product formula for fractions, read from right to left, separates the numbers from the powers of $x$, which sets up the quotient law."
              },
              {
                "step": "$\\dfrac{6}{15}\\cdot \\dfrac{x^3}{x^7} = \\dfrac{6}{15}x^{-4}$",
                "reason": "The quotient law subtracts the exponent below from the exponent above, which leaves one power."
              },
              {
                "step": "$\\dfrac{6}{15}x^{-4} = \\dfrac{2}{5}x^{-4}$",
                "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms, which leaves one coefficient."
              },
              {
                "step": "$\\dfrac{2}{5}x^{-4} = \\dfrac{2}{5x^4}$",
                "reason": "The negative exponent makes $x^{-4}$ equal to $\\dfrac{1}{x^4}$, which leaves no negative exponent in the answer."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{4y^2}{10y^5}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "2/(5*y^3)",
              "lines": [
                {
                  "step": "$\\dfrac{4y^2}{10y^5} = \\dfrac{4}{10}\\cdot \\dfrac{y^2}{y^5}$",
                  "reason": "The product formula for fractions, read from right to left, separates the numbers from the powers of $y$, which sets up the quotient law."
                },
                {
                  "step": "$\\dfrac{4}{10}\\cdot \\dfrac{y^2}{y^5} = \\dfrac{4}{10}y^{-3}$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which leaves one power."
                },
                {
                  "step": "$\\dfrac{4}{10}y^{-3} = \\dfrac{2}{5}y^{-3}$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms, which leaves one coefficient."
                },
                {
                  "step": "$\\dfrac{2}{5}y^{-3} = \\dfrac{2}{5y^3}$",
                  "reason": "The negative exponent makes $y^{-3}$ equal to $\\dfrac{1}{y^3}$, which leaves no negative exponent in the answer."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{9z}{12z^6}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "3/(4*z^5)",
              "lines": [
                {
                  "step": "$\\dfrac{9z}{12z^6} = \\dfrac{9}{12}\\cdot \\dfrac{z}{z^6}$",
                  "reason": "The product formula for fractions, read from right to left, separates the numbers from the powers of $z$, which sets up the quotient law."
                },
                {
                  "step": "$\\dfrac{9}{12}\\cdot \\dfrac{z}{z^6} = \\dfrac{9}{12}z^{-5}$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which leaves one power."
                },
                {
                  "step": "$\\dfrac{9}{12}z^{-5} = \\dfrac{3}{4}z^{-5}$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms, which leaves one coefficient."
                },
                {
                  "step": "$\\dfrac{3}{4}z^{-5} = \\dfrac{3}{4z^5}$",
                  "reason": "The negative exponent makes $z^{-5}$ equal to $\\dfrac{1}{z^5}$, which leaves no negative exponent in the answer."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{14x^4}{21x^9}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "2/(3*x^5)",
              "lines": [
                {
                  "step": "$\\dfrac{14x^4}{21x^9} = \\dfrac{14}{21}\\cdot \\dfrac{x^4}{x^9}$",
                  "reason": "The product formula for fractions, read from right to left, separates the numbers from the powers of $x$, which sets up the quotient law."
                },
                {
                  "step": "$\\dfrac{14}{21}\\cdot \\dfrac{x^4}{x^9} = \\dfrac{14}{21}x^{-5}$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which leaves one power."
                },
                {
                  "step": "$\\dfrac{14}{21}x^{-5} = \\dfrac{2}{3}x^{-5}$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms, which leaves one coefficient."
                },
                {
                  "step": "$\\dfrac{2}{3}x^{-5} = \\dfrac{2}{3x^5}$",
                  "reason": "The negative exponent makes $x^{-5}$ equal to $\\dfrac{1}{x^5}$, which leaves no negative exponent in the answer."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{(3x^2y)^2}{6xy^5}$, with no negative exponent in the answer.",
            "lines": [
              {
                "step": "$\\dfrac{(3x^2y)^2}{6xy^5} = \\dfrac{3^2(x^2)^2y^2}{6xy^5}$",
                "reason": "The power of a product raises each factor of the top to the power, which gives each base its own power."
              },
              {
                "step": "$\\dfrac{3^2(x^2)^2y^2}{6xy^5} = \\dfrac{3^2x^4y^2}{6xy^5}$",
                "reason": "The power law multiplies the exponents, which leaves each letter once on the top."
              },
              {
                "step": "$\\dfrac{3^2x^4y^2}{6xy^5} = \\dfrac{9x^4y^2}{6xy^5}$",
                "reason": "The definition of a power as repeated multiplication gives $3^2 = 9$, which leaves the coefficient of the top as one number."
              },
              {
                "step": "$\\dfrac{9x^4y^2}{6xy^5} = \\dfrac{9}{6}x^3y^{-3}$",
                "reason": "The quotient law is used on each base separately, since it joins only powers of one base."
              },
              {
                "step": "$\\dfrac{9}{6}x^3y^{-3} = \\dfrac{3}{2}x^3y^{-3}$",
                "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms, which leaves one coefficient."
              },
              {
                "step": "$\\dfrac{3}{2}x^3y^{-3} = \\dfrac{3x^3}{2y^3}$",
                "reason": "The negative exponent moves each power with a negative exponent below the fraction bar, which leaves no negative exponent in the answer."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{(-2x^3y)^3}{12x^4y^7}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "-2*x^5/(3*y^4)",
              "lines": [
                {
                  "step": "$\\dfrac{(-2x^3y)^3}{12x^4y^7} = \\dfrac{(-2)^3(x^3)^3y^3}{12x^4y^7}$",
                  "reason": "The power of a product raises each factor of the top to the power, which gives each base its own power."
                },
                {
                  "step": "$\\dfrac{(-2)^3(x^3)^3y^3}{12x^4y^7} = \\dfrac{(-2)^3x^9y^3}{12x^4y^7}$",
                  "reason": "The power law multiplies the exponents, which leaves each letter once on the top."
                },
                {
                  "step": "$\\dfrac{(-2)^3x^9y^3}{12x^4y^7} = \\dfrac{-8x^9y^3}{12x^4y^7}$",
                  "reason": "The definition of a power as repeated multiplication gives $(-2)^3 = -8$, which leaves the coefficient of the top as one number."
                },
                {
                  "step": "$\\dfrac{-8x^9y^3}{12x^4y^7} = -\\dfrac{8}{12}x^5y^{-4}$",
                  "reason": "The quotient law is used on each base separately, since it joins only powers of one base."
                },
                {
                  "step": "$-\\dfrac{8}{12}x^5y^{-4} = -\\dfrac{2}{3}x^5y^{-4}$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms, which leaves one coefficient."
                },
                {
                  "step": "$-\\dfrac{2}{3}x^5y^{-4} = -\\dfrac{2x^5}{3y^4}$",
                  "reason": "The negative exponent moves each power with a negative exponent below the fraction bar, which leaves no negative exponent in the answer."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{(5xy^2)^2}{10x^6y}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "5*y^3/(2*x^4)",
              "lines": [
                {
                  "step": "$\\dfrac{(5xy^2)^2}{10x^6y} = \\dfrac{5^2x^2(y^2)^2}{10x^6y}$",
                  "reason": "The power of a product raises each factor of the top to the power, which gives each base its own power."
                },
                {
                  "step": "$\\dfrac{5^2x^2(y^2)^2}{10x^6y} = \\dfrac{5^2x^2y^4}{10x^6y}$",
                  "reason": "The power law multiplies the exponents, which leaves each letter once on the top."
                },
                {
                  "step": "$\\dfrac{5^2x^2y^4}{10x^6y} = \\dfrac{25x^2y^4}{10x^6y}$",
                  "reason": "The definition of a power as repeated multiplication gives $5^2 = 25$, which leaves the coefficient of the top as one number."
                },
                {
                  "step": "$\\dfrac{25x^2y^4}{10x^6y} = \\dfrac{25}{10}x^{-4}y^3$",
                  "reason": "The quotient law is used on each base separately, since it joins only powers of one base."
                },
                {
                  "step": "$\\dfrac{25}{10}x^{-4}y^3 = \\dfrac{5}{2}x^{-4}y^3$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms, which leaves one coefficient."
                },
                {
                  "step": "$\\dfrac{5}{2}x^{-4}y^3 = \\dfrac{5y^3}{2x^4}$",
                  "reason": "The negative exponent moves each power with a negative exponent below the fraction bar, which leaves no negative exponent in the answer."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{(2xy^3)^4}{6x^7y^{10}}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "8*y^2/(3*x^3)",
              "lines": [
                {
                  "step": "$\\dfrac{(2xy^3)^4}{6x^7y^{10}} = \\dfrac{2^4x^4(y^3)^4}{6x^7y^{10}}$",
                  "reason": "The power of a product raises each factor of the top to the power, which gives each base its own power."
                },
                {
                  "step": "$\\dfrac{2^4x^4(y^3)^4}{6x^7y^{10}} = \\dfrac{2^4x^4y^{12}}{6x^7y^{10}}$",
                  "reason": "The power law multiplies the exponents, which leaves each letter once on the top."
                },
                {
                  "step": "$\\dfrac{2^4x^4y^{12}}{6x^7y^{10}} = \\dfrac{16x^4y^{12}}{6x^7y^{10}}$",
                  "reason": "The definition of a power as repeated multiplication gives $2^4 = 16$, which leaves the coefficient of the top as one number."
                },
                {
                  "step": "$\\dfrac{16x^4y^{12}}{6x^7y^{10}} = \\dfrac{16}{6}x^{-3}y^2$",
                  "reason": "The quotient law is used on each base separately, since it joins only powers of one base."
                },
                {
                  "step": "$\\dfrac{16}{6}x^{-3}y^2 = \\dfrac{8}{3}x^{-3}y^2$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms, which leaves one coefficient."
                },
                {
                  "step": "$\\dfrac{8}{3}x^{-3}y^2 = \\dfrac{8y^2}{3x^3}$",
                  "reason": "The negative exponent moves each power with a negative exponent below the fraction bar, which leaves no negative exponent in the answer."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\left(\\dfrac{2x^3}{y}\\right)^{-2}$, with no negative exponent in the answer.",
            "lines": [
              {
                "step": "$\\left(\\dfrac{2x^3}{y}\\right)^{-2} = \\left(\\dfrac{y}{2x^3}\\right)^2$",
                "reason": "The negative power of a quotient turns the fraction over and makes the exponent positive, which removes the negative exponent in one step."
              },
              {
                "step": "$\\left(\\dfrac{y}{2x^3}\\right)^2 = \\dfrac{y^2}{(2x^3)^2}$",
                "reason": "The power of a quotient raises the top and the bottom to the power, which leaves two powers of single terms."
              },
              {
                "step": "$\\dfrac{y^2}{(2x^3)^2} = \\dfrac{y^2}{2^2(x^3)^2}$",
                "reason": "The power of a product raises each factor in a bracket to the power, which gives each number and each letter its own power."
              },
              {
                "step": "$\\dfrac{y^2}{2^2(x^3)^2} = \\dfrac{y^2}{2^2x^6}$",
                "reason": "The power law multiplies the exponents, which leaves each letter once."
              },
              {
                "step": "$\\dfrac{y^2}{2^2x^6} = \\dfrac{y^2}{4x^6}$",
                "reason": "The definition of a power as repeated multiplication works out each power of a number, which leaves the coefficients as numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\left(\\dfrac{x^2}{3y}\\right)^{-3}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "27*y^3/x^6",
              "lines": [
                {
                  "step": "$\\left(\\dfrac{x^2}{3y}\\right)^{-3} = \\left(\\dfrac{3y}{x^2}\\right)^3$",
                  "reason": "The negative power of a quotient turns the fraction over and makes the exponent positive, which removes the negative exponent in one step."
                },
                {
                  "step": "$\\left(\\dfrac{3y}{x^2}\\right)^3 = \\dfrac{(3y)^3}{(x^2)^3}$",
                  "reason": "The power of a quotient raises the top and the bottom to the power, which leaves two powers of single terms."
                },
                {
                  "step": "$\\dfrac{(3y)^3}{(x^2)^3} = \\dfrac{3^3y^3}{(x^2)^3}$",
                  "reason": "The power of a product raises each factor in a bracket to the power, which gives each number and each letter its own power."
                },
                {
                  "step": "$\\dfrac{3^3y^3}{(x^2)^3} = \\dfrac{3^3y^3}{x^6}$",
                  "reason": "The power law multiplies the exponents, which leaves each letter once."
                },
                {
                  "step": "$\\dfrac{3^3y^3}{x^6} = \\dfrac{27y^3}{x^6}$",
                  "reason": "The definition of a power as repeated multiplication works out each power of a number, which leaves the coefficients as numbers."
                }
              ]
            },
            {
              "prompt": "Simplify $\\left(\\dfrac{5x}{2y^4}\\right)^{-2}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "4*y^8/(25*x^2)",
              "lines": [
                {
                  "step": "$\\left(\\dfrac{5x}{2y^4}\\right)^{-2} = \\left(\\dfrac{2y^4}{5x}\\right)^2$",
                  "reason": "The negative power of a quotient turns the fraction over and makes the exponent positive, which removes the negative exponent in one step."
                },
                {
                  "step": "$\\left(\\dfrac{2y^4}{5x}\\right)^2 = \\dfrac{(2y^4)^2}{(5x)^2}$",
                  "reason": "The power of a quotient raises the top and the bottom to the power, which leaves two powers of single terms."
                },
                {
                  "step": "$\\dfrac{(2y^4)^2}{(5x)^2} = \\dfrac{2^2(y^4)^2}{5^2x^2}$",
                  "reason": "The power of a product raises each factor in a bracket to the power, which gives each number and each letter its own power."
                },
                {
                  "step": "$\\dfrac{2^2(y^4)^2}{5^2x^2} = \\dfrac{2^2y^8}{5^2x^2}$",
                  "reason": "The power law multiplies the exponents, which leaves each letter once."
                },
                {
                  "step": "$\\dfrac{2^2y^8}{5^2x^2} = \\dfrac{4y^8}{25x^2}$",
                  "reason": "The definition of a power as repeated multiplication works out each power of a number, which leaves the coefficients as numbers."
                }
              ]
            },
            {
              "prompt": "Simplify $\\left(\\dfrac{3x^4}{y^2}\\right)^{-3}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "y^6/(27*x^12)",
              "lines": [
                {
                  "step": "$\\left(\\dfrac{3x^4}{y^2}\\right)^{-3} = \\left(\\dfrac{y^2}{3x^4}\\right)^3$",
                  "reason": "The negative power of a quotient turns the fraction over and makes the exponent positive, which removes the negative exponent in one step."
                },
                {
                  "step": "$\\left(\\dfrac{y^2}{3x^4}\\right)^3 = \\dfrac{(y^2)^3}{(3x^4)^3}$",
                  "reason": "The power of a quotient raises the top and the bottom to the power, which leaves two powers of single terms."
                },
                {
                  "step": "$\\dfrac{(y^2)^3}{(3x^4)^3} = \\dfrac{(y^2)^3}{3^3(x^4)^3}$",
                  "reason": "The power of a product raises each factor in a bracket to the power, which gives each number and each letter its own power."
                },
                {
                  "step": "$\\dfrac{(y^2)^3}{3^3(x^4)^3} = \\dfrac{y^6}{3^3x^{12}}$",
                  "reason": "The power law multiplies the exponents, which leaves each letter once."
                },
                {
                  "step": "$\\dfrac{y^6}{3^3x^{12}} = \\dfrac{y^6}{27x^{12}}$",
                  "reason": "The definition of a power as repeated multiplication works out each power of a number, which leaves the coefficients as numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{6x^{-3}}{9y^{-2}}$, with no negative exponent in the answer.",
            "lines": [
              {
                "step": "$\\dfrac{6x^{-3}}{9y^{-2}} = \\dfrac{6}{9x^3y^{-2}}$",
                "reason": "The negative exponent makes $x^{-3}$ equal to $\\dfrac{1}{x^3}$, so the factor moves below the fraction bar with a positive exponent."
              },
              {
                "step": "$\\dfrac{6}{9x^3y^{-2}} = \\dfrac{6y^2}{9x^3}$",
                "reason": "The negative exponent makes $y^{-2}$ equal to $\\dfrac{1}{y^2}$, and dividing by a fraction is multiplying by its reciprocal, so the factor moves above the fraction bar with a positive exponent."
              },
              {
                "step": "$\\dfrac{6y^2}{9x^3} = \\dfrac{2y^2}{3x^3}$",
                "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{4x^{-1}}{10y^{-5}}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "2*y^5/(5*x)",
              "lines": [
                {
                  "step": "$\\dfrac{4x^{-1}}{10y^{-5}} = \\dfrac{4}{10xy^{-5}}$",
                  "reason": "The negative exponent makes $x^{-1}$ equal to $\\dfrac{1}{x}$, so the factor moves below the fraction bar with a positive exponent."
                },
                {
                  "step": "$\\dfrac{4}{10xy^{-5}} = \\dfrac{4y^5}{10x}$",
                  "reason": "The negative exponent makes $y^{-5}$ equal to $\\dfrac{1}{y^5}$, and dividing by a fraction is multiplying by its reciprocal, so the factor moves above the fraction bar with a positive exponent."
                },
                {
                  "step": "$\\dfrac{4y^5}{10x} = \\dfrac{2y^5}{5x}$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{15y^{-2}}{6z^{-4}}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "5*z^4/(2*y^2)",
              "lines": [
                {
                  "step": "$\\dfrac{15y^{-2}}{6z^{-4}} = \\dfrac{15}{6y^2z^{-4}}$",
                  "reason": "The negative exponent makes $y^{-2}$ equal to $\\dfrac{1}{y^2}$, so the factor moves below the fraction bar with a positive exponent."
                },
                {
                  "step": "$\\dfrac{15}{6y^2z^{-4}} = \\dfrac{15z^4}{6y^2}$",
                  "reason": "The negative exponent makes $z^{-4}$ equal to $\\dfrac{1}{z^4}$, and dividing by a fraction is multiplying by its reciprocal, so the factor moves above the fraction bar with a positive exponent."
                },
                {
                  "step": "$\\dfrac{15z^4}{6y^2} = \\dfrac{5z^4}{2y^2}$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{8x^{-6}}{12y^{-1}}$, with no negative exponent in the answer.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "2*y/(3*x^6)",
              "lines": [
                {
                  "step": "$\\dfrac{8x^{-6}}{12y^{-1}} = \\dfrac{8}{12x^6y^{-1}}$",
                  "reason": "The negative exponent makes $x^{-6}$ equal to $\\dfrac{1}{x^6}$, so the factor moves below the fraction bar with a positive exponent."
                },
                {
                  "step": "$\\dfrac{8}{12x^6y^{-1}} = \\dfrac{8y}{12x^6}$",
                  "reason": "The negative exponent makes $y^{-1}$ equal to $\\dfrac{1}{y}$, and dividing by a fraction is multiplying by its reciprocal, so the factor moves above the fraction bar with a positive exponent."
                },
                {
                  "step": "$\\dfrac{8y}{12x^6} = \\dfrac{2y}{3x^6}$",
                  "reason": "Cancelling the common factor of the two numbers puts the fraction of numbers in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $(3x^2)^2(2xy^3)^3$.",
            "lines": [
              {
                "step": "$(3x^2)^2(2xy^3)^3 = 3^2(x^2)^2\\cdot 2^3x^3(y^3)^3$",
                "reason": "The power of a product raises each factor in a bracket to the power, which gives each number and each letter its own power."
              },
              {
                "step": "$3^2(x^2)^2\\cdot 2^3x^3(y^3)^3 = 3^2x^4\\cdot 2^3x^3y^9$",
                "reason": "The power law multiplies the exponents, which leaves single powers of each letter."
              },
              {
                "step": "$3^2x^4\\cdot 2^3x^3y^9 = 9x^4\\cdot 8x^3y^9$",
                "reason": "The definition of a power as repeated multiplication works out each power of a number, which leaves two single terms."
              },
              {
                "step": "$9x^4\\cdot 8x^3y^9 = (9\\cdot 8)(x^4\\cdot x^3)y^9$",
                "reason": "The associative and commutative laws of multiplication allow the numbers to stand together and the powers of each letter together."
              },
              {
                "step": "$(9\\cdot 8)(x^4\\cdot x^3)y^9 = (9\\cdot 8)x^7y^9$",
                "reason": "The product law adds the exponents of powers of one base, on each base separately."
              },
              {
                "step": "$(9\\cdot 8)x^7y^9 = 72x^7y^9$",
                "reason": "The multiplication of whole numbers gives the product of the numbers, which leaves one coefficient."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $(2xy^2)^3(5x^3y)^2$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "200*x^9*y^8",
              "lines": [
                {
                  "step": "$(2xy^2)^3(5x^3y)^2 = 2^3x^3(y^2)^3\\cdot 5^2(x^3)^2y^2$",
                  "reason": "The power of a product raises each factor in a bracket to the power, which gives each number and each letter its own power."
                },
                {
                  "step": "$2^3x^3(y^2)^3\\cdot 5^2(x^3)^2y^2 = 2^3x^3y^6\\cdot 5^2x^6y^2$",
                  "reason": "The power law multiplies the exponents, which leaves single powers of each letter."
                },
                {
                  "step": "$2^3x^3y^6\\cdot 5^2x^6y^2 = 8x^3y^6\\cdot 25x^6y^2$",
                  "reason": "The definition of a power as repeated multiplication works out each power of a number, which leaves two single terms."
                },
                {
                  "step": "$8x^3y^6\\cdot 25x^6y^2 = (8\\cdot 25)(x^3\\cdot x^6)(y^6\\cdot y^2)$",
                  "reason": "The associative and commutative laws of multiplication allow the numbers to stand together and the powers of each letter together."
                },
                {
                  "step": "$(8\\cdot 25)(x^3\\cdot x^6)(y^6\\cdot y^2) = (8\\cdot 25)x^9y^8$",
                  "reason": "The product law adds the exponents of powers of one base, on each base separately."
                },
                {
                  "step": "$(8\\cdot 25)x^9y^8 = 200x^9y^8$",
                  "reason": "The multiplication of whole numbers gives the product of the numbers, which leaves one coefficient."
                }
              ]
            },
            {
              "prompt": "Simplify $(4x^3y)^2(3x^2y^2)^2$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "144*x^10*y^6",
              "lines": [
                {
                  "step": "$(4x^3y)^2(3x^2y^2)^2 = 4^2(x^3)^2y^2\\cdot 3^2(x^2)^2(y^2)^2$",
                  "reason": "The power of a product raises each factor in a bracket to the power, which gives each number and each letter its own power."
                },
                {
                  "step": "$4^2(x^3)^2y^2\\cdot 3^2(x^2)^2(y^2)^2 = 4^2x^6y^2\\cdot 3^2x^4y^4$",
                  "reason": "The power law multiplies the exponents, which leaves single powers of each letter."
                },
                {
                  "step": "$4^2x^6y^2\\cdot 3^2x^4y^4 = 16x^6y^2\\cdot 9x^4y^4$",
                  "reason": "The definition of a power as repeated multiplication works out each power of a number, which leaves two single terms."
                },
                {
                  "step": "$16x^6y^2\\cdot 9x^4y^4 = (16\\cdot 9)(x^6\\cdot x^4)(y^2\\cdot y^4)$",
                  "reason": "The associative and commutative laws of multiplication allow the numbers to stand together and the powers of each letter together."
                },
                {
                  "step": "$(16\\cdot 9)(x^6\\cdot x^4)(y^2\\cdot y^4) = (16\\cdot 9)x^{10}y^6$",
                  "reason": "The product law adds the exponents of powers of one base, on each base separately."
                },
                {
                  "step": "$(16\\cdot 9)x^{10}y^6 = 144x^{10}y^6$",
                  "reason": "The multiplication of whole numbers gives the product of the numbers, which leaves one coefficient."
                }
              ]
            },
            {
              "prompt": "Simplify $(2x^2y^3)^4(3x)^3$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "432*x^11*y^12",
              "lines": [
                {
                  "step": "$(2x^2y^3)^4(3x)^3 = 2^4(x^2)^4(y^3)^4\\cdot 3^3x^3$",
                  "reason": "The power of a product raises each factor in a bracket to the power, which gives each number and each letter its own power."
                },
                {
                  "step": "$2^4(x^2)^4(y^3)^4\\cdot 3^3x^3 = 2^4x^8y^{12}\\cdot 3^3x^3$",
                  "reason": "The power law multiplies the exponents, which leaves single powers of each letter."
                },
                {
                  "step": "$2^4x^8y^{12}\\cdot 3^3x^3 = 16x^8y^{12}\\cdot 27x^3$",
                  "reason": "The definition of a power as repeated multiplication works out each power of a number, which leaves two single terms."
                },
                {
                  "step": "$16x^8y^{12}\\cdot 27x^3 = (16\\cdot 27)(x^8\\cdot x^3)y^{12}$",
                  "reason": "The associative and commutative laws of multiplication allow the numbers to stand together and the powers of each letter together."
                },
                {
                  "step": "$(16\\cdot 27)(x^8\\cdot x^3)y^{12} = (16\\cdot 27)x^{11}y^{12}$",
                  "reason": "The product law adds the exponents of powers of one base, on each base separately."
                },
                {
                  "step": "$(16\\cdot 27)x^{11}y^{12} = 432x^{11}y^{12}$",
                  "reason": "The multiplication of whole numbers gives the product of the numbers, which leaves one coefficient."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find an expression that, multiplied by $6x^2y^3$, gives $-42x^7y^4$.",
            "lines": [
              {
                "step": "The expression is $\\dfrac{-42x^7y^4}{6x^2y^3}$.",
                "reason": "The definition of division makes the quotient of $-42x^7y^4$ by $6x^2y^3$ the expression whose product with $6x^2y^3$ is $-42x^7y^4$, which turns the search into a simplification."
              },
              {
                "step": "$\\dfrac{-42x^7y^4}{6x^2y^3} = \\dfrac{-42}{6}\\cdot \\dfrac{x^7}{x^2}\\cdot \\dfrac{y^4}{y^3}$",
                "reason": "The product formula for fractions, read from right to left, separates the numbers from the powers of each letter, which sets up the quotient law."
              },
              {
                "step": "$\\dfrac{-42}{6}\\cdot \\dfrac{x^7}{x^2}\\cdot \\dfrac{y^4}{y^3} = \\dfrac{-42}{6}x^5y$",
                "reason": "The quotient law is used on each base separately, since it joins only powers of one base."
              },
              {
                "step": "$\\dfrac{-42}{6}x^5y = -7x^5y$",
                "reason": "The division of integers gives the quotient of the two numbers, which leaves one coefficient."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an expression that, multiplied by $4xy^2$, gives $36x^3y^7$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "9*x^2*y^5",
              "lines": [
                {
                  "step": "The expression is $\\dfrac{36x^3y^7}{4xy^2}$.",
                  "reason": "The definition of division makes the quotient of $36x^3y^7$ by $4xy^2$ the expression whose product with $4xy^2$ is $36x^3y^7$, which turns the search into a simplification."
                },
                {
                  "step": "$\\dfrac{36x^3y^7}{4xy^2} = \\dfrac{36}{4}\\cdot \\dfrac{x^3}{x}\\cdot \\dfrac{y^7}{y^2}$",
                  "reason": "The product formula for fractions, read from right to left, separates the numbers from the powers of each letter, which sets up the quotient law."
                },
                {
                  "step": "$\\dfrac{36}{4}\\cdot \\dfrac{x^3}{x}\\cdot \\dfrac{y^7}{y^2} = \\dfrac{36}{4}x^2y^5$",
                  "reason": "The quotient law is used on each base separately, since it joins only powers of one base."
                },
                {
                  "step": "$\\dfrac{36}{4}x^2y^5 = 9x^2y^5$",
                  "reason": "The division of integers gives the quotient of the two numbers, which leaves one coefficient."
                }
              ]
            },
            {
              "prompt": "Find an expression that, multiplied by $-5y^3z$, gives $15y^4z^6$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "-3*y*z^5",
              "lines": [
                {
                  "step": "The expression is $\\dfrac{15y^4z^6}{-5y^3z}$.",
                  "reason": "The definition of division makes the quotient of $15y^4z^6$ by $-5y^3z$ the expression whose product with $-5y^3z$ is $15y^4z^6$, which turns the search into a simplification."
                },
                {
                  "step": "$\\dfrac{15y^4z^6}{-5y^3z} = \\dfrac{15}{-5}\\cdot \\dfrac{y^4}{y^3}\\cdot \\dfrac{z^6}{z}$",
                  "reason": "The product formula for fractions, read from right to left, separates the numbers from the powers of each letter, which sets up the quotient law."
                },
                {
                  "step": "$\\dfrac{15}{-5}\\cdot \\dfrac{y^4}{y^3}\\cdot \\dfrac{z^6}{z} = \\dfrac{15}{-5}yz^5$",
                  "reason": "The quotient law is used on each base separately, since it joins only powers of one base."
                },
                {
                  "step": "$\\dfrac{15}{-5}yz^5 = -3yz^5$",
                  "reason": "The division of integers gives the quotient of the two numbers, which leaves one coefficient."
                }
              ]
            },
            {
              "prompt": "Find an expression that, multiplied by $7x^4y$, gives $56x^6y^9$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "8*x^2*y^8",
              "lines": [
                {
                  "step": "The expression is $\\dfrac{56x^6y^9}{7x^4y}$.",
                  "reason": "The definition of division makes the quotient of $56x^6y^9$ by $7x^4y$ the expression whose product with $7x^4y$ is $56x^6y^9$, which turns the search into a simplification."
                },
                {
                  "step": "$\\dfrac{56x^6y^9}{7x^4y} = \\dfrac{56}{7}\\cdot \\dfrac{x^6}{x^4}\\cdot \\dfrac{y^9}{y}$",
                  "reason": "The product formula for fractions, read from right to left, separates the numbers from the powers of each letter, which sets up the quotient law."
                },
                {
                  "step": "$\\dfrac{56}{7}\\cdot \\dfrac{x^6}{x^4}\\cdot \\dfrac{y^9}{y} = \\dfrac{56}{7}x^2y^8$",
                  "reason": "The quotient law is used on each base separately, since it joins only powers of one base."
                },
                {
                  "step": "$\\dfrac{56}{7}x^2y^8 = 8x^2y^8$",
                  "reason": "The division of integers gives the quotient of the two numbers, which leaves one coefficient."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t102-k2",
      "forms": [
        {
          "example": {
            "problem": "Find an integer $x$ for which $3^x = \\dfrac{3^4\\cdot 3^{-1}}{3^8}$.",
            "lines": [
              {
                "step": "$\\dfrac{3^4\\cdot 3^{-1}}{3^8} = \\dfrac{3^3}{3^8}$",
                "reason": "The product law adds the exponents of the two powers of 3 on the top, which leaves one power there."
              },
              {
                "step": "$\\dfrac{3^3}{3^8} = 3^{-5}$",
                "reason": "The quotient law subtracts the exponent below from the exponent above, which writes the right side as one power of 3."
              },
              {
                "step": "The equation now reads $3^x = 3^{-5}$, and $x = -5$ makes it true.",
                "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an integer $x$ for which $2^x = \\dfrac{2^6\\cdot 2^3}{2^4}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5",
              "lines": [
                {
                  "step": "$\\dfrac{2^6\\cdot 2^3}{2^4} = \\dfrac{2^9}{2^4}$",
                  "reason": "The product law adds the exponents of the two powers of 2 on the top, which leaves one power there."
                },
                {
                  "step": "$\\dfrac{2^9}{2^4} = 2^5$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which writes the right side as one power of 2."
                },
                {
                  "step": "The equation now reads $2^x = 2^5$, and $x = 5$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find an integer $x$ for which $5^x = \\dfrac{5^2\\cdot 5^{-5}}{5^3}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -6",
              "lines": [
                {
                  "step": "$\\dfrac{5^2\\cdot 5^{-5}}{5^3} = \\dfrac{5^{-3}}{5^3}$",
                  "reason": "The product law adds the exponents of the two powers of 5 on the top, which leaves one power there."
                },
                {
                  "step": "$\\dfrac{5^{-3}}{5^3} = 5^{-6}$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which writes the right side as one power of 5."
                },
                {
                  "step": "The equation now reads $5^x = 5^{-6}$, and $x = -6$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find an integer $x$ for which $7^x = \\dfrac{7^3\\cdot 7^9}{7^{12}}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 0",
              "lines": [
                {
                  "step": "$\\dfrac{7^3\\cdot 7^9}{7^{12}} = \\dfrac{7^{12}}{7^{12}}$",
                  "reason": "The product law adds the exponents of the two powers of 7 on the top, which leaves one power there."
                },
                {
                  "step": "$\\dfrac{7^{12}}{7^{12}} = 7^0$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which writes the right side as one power of 7."
                },
                {
                  "step": "The equation now reads $7^x = 7^0$, and $x = 0$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find an integer $x$ for which $2^x = 16^3$.",
            "lines": [
              {
                "step": "$16^3 = (2^4)^{3}$",
                "reason": "The definition of a power as repeated multiplication gives $16 = 2^4$, which puts both sides on the base 2."
              },
              {
                "step": "$(2^4)^{3} = 2^{12}$",
                "reason": "The power law multiplies the exponents, which writes the right side as one power of 2."
              },
              {
                "step": "The equation now reads $2^x = 2^{12}$, and $x = 12$ makes it true.",
                "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an integer $x$ for which $3^x = 9^5$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 10",
              "lines": [
                {
                  "step": "$9^5 = (3^2)^{5}$",
                  "reason": "The definition of a power as repeated multiplication gives $9 = 3^2$, which puts both sides on the base 3."
                },
                {
                  "step": "$(3^2)^{5} = 3^{10}$",
                  "reason": "The power law multiplies the exponents, which writes the right side as one power of 3."
                },
                {
                  "step": "The equation now reads $3^x = 3^{10}$, and $x = 10$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find an integer $x$ for which $5^x = 125^4$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 12",
              "lines": [
                {
                  "step": "$125^4 = (5^3)^{4}$",
                  "reason": "The definition of a power as repeated multiplication gives $125 = 5^3$, which puts both sides on the base 5."
                },
                {
                  "step": "$(5^3)^{4} = 5^{12}$",
                  "reason": "The power law multiplies the exponents, which writes the right side as one power of 5."
                },
                {
                  "step": "The equation now reads $5^x = 5^{12}$, and $x = 12$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find an integer $x$ for which $2^x = 32^{-2}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -10",
              "lines": [
                {
                  "step": "$32^{-2} = (2^5)^{-2}$",
                  "reason": "The definition of a power as repeated multiplication gives $32 = 2^5$, which puts both sides on the base 2."
                },
                {
                  "step": "$(2^5)^{-2} = 2^{-10}$",
                  "reason": "The power law multiplies the exponents, which writes the right side as one power of 2."
                },
                {
                  "step": "The equation now reads $2^x = 2^{-10}$, and $x = -10$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find integers $x$ and $y$ for which $(2^3\\cdot 5^2)^{4} = 2^x\\cdot 5^y$.",
            "lines": [
              {
                "step": "$(2^3\\cdot 5^2)^{4} = (2^3)^{4}\\cdot (5^2)^{4}$",
                "reason": "The power of a product raises each factor to the power, which gives each base its own power."
              },
              {
                "step": "$(2^3)^{4}\\cdot (5^2)^{4} = 2^{12}\\cdot 5^8$",
                "reason": "The power law multiplies the exponents on each base separately, which writes the left side as one power of each base."
              },
              {
                "step": "The equation now reads $2^{12}\\cdot 5^8 = 2^x\\cdot 5^y$, and $x = 12$ with $y = 8$ makes it true.",
                "reason": "Substituting a value for each letter tests an equation, and with these values the two sides are the same product of powers, which makes the equation true."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find integers $x$ and $y$ for which $(3^2\\cdot 7^5)^{3} = 3^x\\cdot 7^y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 6, y = 15",
              "lines": [
                {
                  "step": "$(3^2\\cdot 7^5)^{3} = (3^2)^{3}\\cdot (7^5)^{3}$",
                  "reason": "The power of a product raises each factor to the power, which gives each base its own power."
                },
                {
                  "step": "$(3^2)^{3}\\cdot (7^5)^{3} = 3^6\\cdot 7^{15}$",
                  "reason": "The power law multiplies the exponents on each base separately, which writes the left side as one power of each base."
                },
                {
                  "step": "The equation now reads $3^6\\cdot 7^{15} = 3^x\\cdot 7^y$, and $x = 6$ with $y = 15$ makes it true.",
                  "reason": "Substituting a value for each letter tests an equation, and with these values the two sides are the same product of powers, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find integers $x$ and $y$ for which $(2^4\\cdot 3)^{-2} = 2^x\\cdot 3^y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -8, y = -2",
              "lines": [
                {
                  "step": "$(2^4\\cdot 3)^{-2} = (2^4)^{-2}\\cdot 3^{-2}$",
                  "reason": "The power of a product raises each factor to the power, which gives each base its own power."
                },
                {
                  "step": "$(2^4)^{-2}\\cdot 3^{-2} = 2^{-8}\\cdot 3^{-2}$",
                  "reason": "The power law multiplies the exponents on each base separately, which writes the left side as one power of each base."
                },
                {
                  "step": "The equation now reads $2^{-8}\\cdot 3^{-2} = 2^x\\cdot 3^y$, and $x = -8$ with $y = -2$ makes it true.",
                  "reason": "Substituting a value for each letter tests an equation, and with these values the two sides are the same product of powers, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find integers $x$ and $y$ for which $(5^3\\cdot 11^2)^{6} = 5^x\\cdot 11^y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 18, y = 12",
              "lines": [
                {
                  "step": "$(5^3\\cdot 11^2)^{6} = (5^3)^{6}\\cdot (11^2)^{6}$",
                  "reason": "The power of a product raises each factor to the power, which gives each base its own power."
                },
                {
                  "step": "$(5^3)^{6}\\cdot (11^2)^{6} = 5^{18}\\cdot 11^{12}$",
                  "reason": "The power law multiplies the exponents on each base separately, which writes the left side as one power of each base."
                },
                {
                  "step": "The equation now reads $5^{18}\\cdot 11^{12} = 5^x\\cdot 11^y$, and $x = 18$ with $y = 12$ makes it true.",
                  "reason": "Substituting a value for each letter tests an equation, and with these values the two sides are the same product of powers, which makes the equation true."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find an integer $x$ for which $\\dfrac{1}{8} = 2^x$.",
            "lines": [
              {
                "step": "$\\dfrac{1}{8} = \\dfrac{1}{2^3}$",
                "reason": "The definition of a power as repeated multiplication gives $8 = 2^3$, which puts both sides on the base 2."
              },
              {
                "step": "$\\dfrac{1}{2^3} = 2^{-3}$",
                "reason": "The negative exponent writes the reciprocal of a power of 2 as a power of 2."
              },
              {
                "step": "The equation now reads $2^{-3} = 2^x$, and $x = -3$ makes it true.",
                "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an integer $x$ for which $\\dfrac{1}{9} = 3^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -2",
              "lines": [
                {
                  "step": "$\\dfrac{1}{9} = \\dfrac{1}{3^2}$",
                  "reason": "The definition of a power as repeated multiplication gives $9 = 3^2$, which puts both sides on the base 3."
                },
                {
                  "step": "$\\dfrac{1}{3^2} = 3^{-2}$",
                  "reason": "The negative exponent writes the reciprocal of a power of 3 as a power of 3."
                },
                {
                  "step": "The equation now reads $3^{-2} = 3^x$, and $x = -2$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find an integer $x$ for which $\\dfrac{1}{125} = 5^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -3",
              "lines": [
                {
                  "step": "$\\dfrac{1}{125} = \\dfrac{1}{5^3}$",
                  "reason": "The definition of a power as repeated multiplication gives $125 = 5^3$, which puts both sides on the base 5."
                },
                {
                  "step": "$\\dfrac{1}{5^3} = 5^{-3}$",
                  "reason": "The negative exponent writes the reciprocal of a power of 5 as a power of 5."
                },
                {
                  "step": "The equation now reads $5^{-3} = 5^x$, and $x = -3$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find an integer $x$ for which $\\dfrac{1}{32} = 2^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -5",
              "lines": [
                {
                  "step": "$\\dfrac{1}{32} = \\dfrac{1}{2^5}$",
                  "reason": "The definition of a power as repeated multiplication gives $32 = 2^5$, which puts both sides on the base 2."
                },
                {
                  "step": "$\\dfrac{1}{2^5} = 2^{-5}$",
                  "reason": "The negative exponent writes the reciprocal of a power of 2 as a power of 2."
                },
                {
                  "step": "The equation now reads $2^{-5} = 2^x$, and $x = -5$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find an integer $x$ for which $2^x = \\dfrac{4^3\\cdot 2^2}{8^3}$.",
            "lines": [
              {
                "step": "$\\dfrac{4^3\\cdot 2^2}{8^3} = \\dfrac{(2^2)^3\\cdot 2^2}{(2^3)^3}$",
                "reason": "The definition of a power as repeated multiplication gives $4 = 2^2$ and $8 = 2^3$, which puts every power on the base 2."
              },
              {
                "step": "$\\dfrac{(2^2)^3\\cdot 2^2}{(2^3)^3} = \\dfrac{2^6\\cdot 2^2}{2^9}$",
                "reason": "The power law multiplies the exponents, which leaves single powers on the top and the bottom."
              },
              {
                "step": "$\\dfrac{2^6\\cdot 2^2}{2^9} = \\dfrac{2^8}{2^9}$",
                "reason": "The product law adds the exponents of the two powers of 2 on the top, which leaves one power there."
              },
              {
                "step": "$\\dfrac{2^8}{2^9} = 2^{-1}$",
                "reason": "The quotient law subtracts the exponent below from the exponent above, which writes the right side as one power of 2."
              },
              {
                "step": "The equation now reads $2^x = 2^{-1}$, and $x = -1$ makes it true.",
                "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an integer $x$ for which $3^x = \\dfrac{9^3\\cdot 3^2}{27^2}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 2",
              "lines": [
                {
                  "step": "$\\dfrac{9^3\\cdot 3^2}{27^2} = \\dfrac{(3^2)^3\\cdot 3^2}{(3^3)^2}$",
                  "reason": "The definition of a power as repeated multiplication gives $9 = 3^2$ and $27 = 3^3$, which puts every power on the base 3."
                },
                {
                  "step": "$\\dfrac{(3^2)^3\\cdot 3^2}{(3^3)^2} = \\dfrac{3^6\\cdot 3^2}{3^6}$",
                  "reason": "The power law multiplies the exponents, which leaves single powers on the top and the bottom."
                },
                {
                  "step": "$\\dfrac{3^6\\cdot 3^2}{3^6} = \\dfrac{3^8}{3^6}$",
                  "reason": "The product law adds the exponents of the two powers of 3 on the top, which leaves one power there."
                },
                {
                  "step": "$\\dfrac{3^8}{3^6} = 3^2$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which writes the right side as one power of 3."
                },
                {
                  "step": "The equation now reads $3^x = 3^2$, and $x = 2$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find an integer $x$ for which $5^x = \\dfrac{25^2\\cdot 5^3}{125^3}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -2",
              "lines": [
                {
                  "step": "$\\dfrac{25^2\\cdot 5^3}{125^3} = \\dfrac{(5^2)^2\\cdot 5^3}{(5^3)^3}$",
                  "reason": "The definition of a power as repeated multiplication gives $25 = 5^2$ and $125 = 5^3$, which puts every power on the base 5."
                },
                {
                  "step": "$\\dfrac{(5^2)^2\\cdot 5^3}{(5^3)^3} = \\dfrac{5^4\\cdot 5^3}{5^9}$",
                  "reason": "The power law multiplies the exponents, which leaves single powers on the top and the bottom."
                },
                {
                  "step": "$\\dfrac{5^4\\cdot 5^3}{5^9} = \\dfrac{5^7}{5^9}$",
                  "reason": "The product law adds the exponents of the two powers of 5 on the top, which leaves one power there."
                },
                {
                  "step": "$\\dfrac{5^7}{5^9} = 5^{-2}$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which writes the right side as one power of 5."
                },
                {
                  "step": "The equation now reads $5^x = 5^{-2}$, and $x = -2$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            },
            {
              "prompt": "Find an integer $x$ for which $2^x = \\dfrac{8^2\\cdot 2^5}{16^2}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 3",
              "lines": [
                {
                  "step": "$\\dfrac{8^2\\cdot 2^5}{16^2} = \\dfrac{(2^3)^2\\cdot 2^5}{(2^4)^2}$",
                  "reason": "The definition of a power as repeated multiplication gives $8 = 2^3$ and $16 = 2^4$, which puts every power on the base 2."
                },
                {
                  "step": "$\\dfrac{(2^3)^2\\cdot 2^5}{(2^4)^2} = \\dfrac{2^6\\cdot 2^5}{2^8}$",
                  "reason": "The power law multiplies the exponents, which leaves single powers on the top and the bottom."
                },
                {
                  "step": "$\\dfrac{2^6\\cdot 2^5}{2^8} = \\dfrac{2^{11}}{2^8}$",
                  "reason": "The product law adds the exponents of the two powers of 2 on the top, which leaves one power there."
                },
                {
                  "step": "$\\dfrac{2^{11}}{2^8} = 2^3$",
                  "reason": "The quotient law subtracts the exponent below from the exponent above, which writes the right side as one power of 2."
                },
                {
                  "step": "The equation now reads $2^x = 2^3$, and $x = 3$ makes it true.",
                  "reason": "Substituting a value for the letter tests an equation, and with this value the two sides are the same power, which makes the equation true."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find integers $x$ and $y$ for which $(2^x\\cdot 5^3)^4 = 2^{12}\\cdot 5^y$.",
            "lines": [
              {
                "step": "$(2^x\\cdot 5^3)^4 = (2^x)^4\\cdot (5^3)^{4}$",
                "reason": "The power of a product raises each factor to the power, which gives each base its own power."
              },
              {
                "step": "$(2^x)^4\\cdot (5^3)^{4} = 2^{4x}\\cdot 5^{12}$",
                "reason": "The power law multiplies the exponents on each base separately, which writes the left side as one power of each base."
              },
              {
                "step": "The equation now reads $2^{4x}\\cdot 5^{12} = 2^{12}\\cdot 5^y$, and $x = 3$ with $y = 12$ makes it true.",
                "reason": "Substituting a value for each letter tests an equation, and with these values the exponent $4x$ is 12, so the two sides are the same product of powers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find integers $x$ and $y$ for which $(3^x\\cdot 7^5)^6 = 3^{12}\\cdot 7^y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 2, y = 30",
              "lines": [
                {
                  "step": "$(3^x\\cdot 7^5)^6 = (3^x)^6\\cdot (7^5)^{6}$",
                  "reason": "The power of a product raises each factor to the power, which gives each base its own power."
                },
                {
                  "step": "$(3^x)^6\\cdot (7^5)^{6} = 3^{6x}\\cdot 7^{30}$",
                  "reason": "The power law multiplies the exponents on each base separately, which writes the left side as one power of each base."
                },
                {
                  "step": "The equation now reads $3^{6x}\\cdot 7^{30} = 3^{12}\\cdot 7^y$, and $x = 2$ with $y = 30$ makes it true.",
                  "reason": "Substituting a value for each letter tests an equation, and with these values the exponent $6x$ is 12, so the two sides are the same product of powers."
                }
              ]
            },
            {
              "prompt": "Find integers $x$ and $y$ for which $(5^x\\cdot 2^4)^3 = 5^{-6}\\cdot 2^y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -2, y = 12",
              "lines": [
                {
                  "step": "$(5^x\\cdot 2^4)^3 = (5^x)^3\\cdot (2^4)^{3}$",
                  "reason": "The power of a product raises each factor to the power, which gives each base its own power."
                },
                {
                  "step": "$(5^x)^3\\cdot (2^4)^{3} = 5^{3x}\\cdot 2^{12}$",
                  "reason": "The power law multiplies the exponents on each base separately, which writes the left side as one power of each base."
                },
                {
                  "step": "The equation now reads $5^{3x}\\cdot 2^{12} = 5^{-6}\\cdot 2^y$, and $x = -2$ with $y = 12$ makes it true.",
                  "reason": "Substituting a value for each letter tests an equation, and with these values the exponent $3x$ is -6, so the two sides are the same product of powers."
                }
              ]
            },
            {
              "prompt": "Find integers $x$ and $y$ for which $(2^x\\cdot 11^5)^2 = 2^{14}\\cdot 11^y$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 7, y = 10",
              "lines": [
                {
                  "step": "$(2^x\\cdot 11^5)^2 = (2^x)^2\\cdot (11^5)^{2}$",
                  "reason": "The power of a product raises each factor to the power, which gives each base its own power."
                },
                {
                  "step": "$(2^x)^2\\cdot (11^5)^{2} = 2^{2x}\\cdot 11^{10}$",
                  "reason": "The power law multiplies the exponents on each base separately, which writes the left side as one power of each base."
                },
                {
                  "step": "The equation now reads $2^{2x}\\cdot 11^{10} = 2^{14}\\cdot 11^y$, and $x = 7$ with $y = 10$ makes it true.",
                  "reason": "Substituting a value for each letter tests an equation, and with these values the exponent $2x$ is 14, so the two sides are the same product of powers."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t102-k3",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $-3^2 + (-2)^3$.",
            "lines": [
              {
                "step": "$-3^2 = -9$",
                "reason": "The power binds before the coefficient, and the coefficient here is $-1$, so the base is 3 and the minus sign is applied after the power."
              },
              {
                "step": "$(-2)^3 = -8$",
                "reason": "The sign of a power of a negative number is negative for an odd exponent, and the brackets make $-2$ the base."
              },
              {
                "step": "$-3^2 + (-2)^3 = -17$",
                "reason": "The order of operations works out each power first, which leaves one operation on the two values found."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $-5^2 + (-5)^2$.",
              "form": "Answer as an integer.",
              "answer": "0",
              "lines": [
                {
                  "step": "$-5^2 = -25$",
                  "reason": "The power binds before the coefficient, and the coefficient here is $-1$, so the base is 5 and the minus sign is applied after the power."
                },
                {
                  "step": "$(-5)^2 = 25$",
                  "reason": "The sign of a power of a negative number is positive for an even exponent, and the brackets make $-5$ the base."
                },
                {
                  "step": "$-5^2 + (-5)^2 = 0$",
                  "reason": "The order of operations works out each power first, which leaves one operation on the two values found."
                }
              ]
            },
            {
              "prompt": "Evaluate $-2^3 - (-4)^2$.",
              "form": "Answer as an integer.",
              "answer": "-24",
              "lines": [
                {
                  "step": "$-2^3 = -8$",
                  "reason": "The power binds before the coefficient, and the coefficient here is $-1$, so the base is 2 and the minus sign is applied after the power."
                },
                {
                  "step": "$(-4)^2 = 16$",
                  "reason": "The sign of a power of a negative number is positive for an even exponent, and the brackets make $-4$ the base."
                },
                {
                  "step": "$-2^3 - (-4)^2 = -24$",
                  "reason": "The order of operations works out each power first, which leaves one operation on the two values found."
                }
              ]
            },
            {
              "prompt": "Evaluate $-3^4 \\cdot (-1)^7$.",
              "form": "Answer as an integer.",
              "answer": "81",
              "lines": [
                {
                  "step": "$-3^4 = -81$",
                  "reason": "The power binds before the coefficient, and the coefficient here is $-1$, so the base is 3 and the minus sign is applied after the power."
                },
                {
                  "step": "$(-1)^7 = -1$",
                  "reason": "The sign of a power of a negative number is negative for an odd exponent, and the brackets make $-1$ the base."
                },
                {
                  "step": "$-3^4 \\cdot (-1)^7 = 81$",
                  "reason": "The order of operations works out each power first, which leaves one operation on the two values found."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the whole numbers $n$ from 1 to 7 for which $(-3)^n$ is positive.",
            "lines": [
              {
                "step": "The power $(-3)^n$ is positive exactly when its exponent $n$ is even.",
                "reason": "The sign of a power of a negative number is positive for an even exponent and negative for an odd exponent."
              },
              {
                "step": "The even whole numbers from 1 to 7 are 2, 4 and 6.",
                "reason": "The definition of an even number and of an odd number sorts the exponents in the range, which leaves the values of $n$ wanted."
              },
              {
                "step": "$\\{2, 4, 6\\}$",
                "reason": "The set of values lists each such $n$ once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole numbers $n$ from 1 to 6 for which $(-5)^n$ is negative.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1, 3, 5}",
              "lines": [
                {
                  "step": "The power $(-5)^n$ is negative exactly when its exponent $n$ is odd.",
                  "reason": "The sign of a power of a negative number is positive for an even exponent and negative for an odd exponent."
                },
                {
                  "step": "The odd whole numbers from 1 to 6 are 1, 3 and 5.",
                  "reason": "The definition of an even number and of an odd number sorts the exponents in the range, which leaves the values of $n$ wanted."
                },
                {
                  "step": "$\\{1, 3, 5\\}$",
                  "reason": "The set of values lists each such $n$ once."
                }
              ]
            },
            {
              "prompt": "Find the whole numbers $n$ from 2 to 9 for which $(-2)^{n+1}$ is positive.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3, 5, 7, 9}",
              "lines": [
                {
                  "step": "The power $(-2)^{n+1}$ is positive exactly when its exponent $n+1$ is even.",
                  "reason": "The sign of a power of a negative number is positive for an even exponent and negative for an odd exponent."
                },
                {
                  "step": "The exponent $n+1$ is even for $n$ equal to 3, 5, 7 and 9, and for no other $n$ from 2 to 9.",
                  "reason": "The definition of an even number and of an odd number sorts the exponents in the range, which leaves the values of $n$ wanted."
                },
                {
                  "step": "$\\{3, 5, 7, 9\\}$",
                  "reason": "The set of values lists each such $n$ once."
                }
              ]
            },
            {
              "prompt": "Find the whole numbers $n$ from 0 to 5 for which $(-4)^{3n}$ is positive.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{0, 2, 4}",
              "lines": [
                {
                  "step": "The power $(-4)^{3n}$ is positive exactly when its exponent $3n$ is even.",
                  "reason": "The sign of a power of a negative number is positive for an even exponent and negative for an odd exponent."
                },
                {
                  "step": "The exponent $3n$ is even for $n$ equal to 0, 2 and 4, and for no other $n$ from 0 to 5.",
                  "reason": "The definition of an even number and of an odd number sorts the exponents in the range, which leaves the values of $n$ wanted."
                },
                {
                  "step": "$\\{0, 2, 4\\}$",
                  "reason": "The set of values lists each such $n$ once."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t102-k4",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $4^{-2} + 7^0$.",
            "lines": [
              {
                "step": "$4^{-2} = \\dfrac{1}{4^2}$",
                "reason": "The negative exponent makes a power with a negative exponent the reciprocal of the power with the opposite exponent."
              },
              {
                "step": "$\\dfrac{1}{4^2} = \\dfrac{1}{16}$",
                "reason": "The definition of a power as repeated multiplication gives $4^2 = 16$."
              },
              {
                "step": "$7^0 = 1$",
                "reason": "The zero exponent makes every nonzero number to the power 0 equal to 1."
              },
              {
                "step": "$4^{-2} + 7^0 = \\dfrac{17}{16}$",
                "reason": "The addition of fractions with the common denominator 16 joins the two values in one fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $2^{-3} + 9^0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/8",
              "lines": [
                {
                  "step": "$2^{-3} = \\dfrac{1}{2^3}$",
                  "reason": "The negative exponent makes a power with a negative exponent the reciprocal of the power with the opposite exponent."
                },
                {
                  "step": "$\\dfrac{1}{2^3} = \\dfrac{1}{8}$",
                  "reason": "The definition of a power as repeated multiplication gives $2^3 = 8$."
                },
                {
                  "step": "$9^0 = 1$",
                  "reason": "The zero exponent makes every nonzero number to the power 0 equal to 1."
                },
                {
                  "step": "$2^{-3} + 9^0 = \\dfrac{9}{8}$",
                  "reason": "The addition of fractions with the common denominator 8 joins the two values in one fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Evaluate $3^{-3} + 5^0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "28/27",
              "lines": [
                {
                  "step": "$3^{-3} = \\dfrac{1}{3^3}$",
                  "reason": "The negative exponent makes a power with a negative exponent the reciprocal of the power with the opposite exponent."
                },
                {
                  "step": "$\\dfrac{1}{3^3} = \\dfrac{1}{27}$",
                  "reason": "The definition of a power as repeated multiplication gives $3^3 = 27$."
                },
                {
                  "step": "$5^0 = 1$",
                  "reason": "The zero exponent makes every nonzero number to the power 0 equal to 1."
                },
                {
                  "step": "$3^{-3} + 5^0 = \\dfrac{28}{27}$",
                  "reason": "The addition of fractions with the common denominator 27 joins the two values in one fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Evaluate $10^{-2} + 12^0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "101/100",
              "lines": [
                {
                  "step": "$10^{-2} = \\dfrac{1}{10^2}$",
                  "reason": "The negative exponent makes a power with a negative exponent the reciprocal of the power with the opposite exponent."
                },
                {
                  "step": "$\\dfrac{1}{10^2} = \\dfrac{1}{100}$",
                  "reason": "The definition of a power as repeated multiplication gives $10^2 = 100$."
                },
                {
                  "step": "$12^0 = 1$",
                  "reason": "The zero exponent makes every nonzero number to the power 0 equal to 1."
                },
                {
                  "step": "$10^{-2} + 12^0 = \\dfrac{101}{100}$",
                  "reason": "The addition of fractions with the common denominator 100 joins the two values in one fraction in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\left(\\dfrac{2}{3}\\right)^{-3}$.",
            "lines": [
              {
                "step": "$\\left(\\dfrac{2}{3}\\right)^{-3} = \\left(\\dfrac{3}{2}\\right)^3$",
                "reason": "The negative power of a quotient turns the fraction over and makes the exponent positive."
              },
              {
                "step": "$\\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{3^3}{2^3}$",
                "reason": "The power of a quotient raises the top and the bottom to the power, which leaves two powers of whole numbers."
              },
              {
                "step": "$\\dfrac{3^3}{2^3} = \\dfrac{27}{8}$",
                "reason": "The definition of a power as repeated multiplication gives $3^3 = 27$ and $2^3 = 8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\left(\\dfrac{3}{5}\\right)^{-2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "25/9",
              "lines": [
                {
                  "step": "$\\left(\\dfrac{3}{5}\\right)^{-2} = \\left(\\dfrac{5}{3}\\right)^2$",
                  "reason": "The negative power of a quotient turns the fraction over and makes the exponent positive."
                },
                {
                  "step": "$\\left(\\dfrac{5}{3}\\right)^2 = \\dfrac{5^2}{3^2}$",
                  "reason": "The power of a quotient raises the top and the bottom to the power, which leaves two powers of whole numbers."
                },
                {
                  "step": "$\\dfrac{5^2}{3^2} = \\dfrac{25}{9}$",
                  "reason": "The definition of a power as repeated multiplication gives $5^2 = 25$ and $3^2 = 9$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(\\dfrac{1}{4}\\right)^{-3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "64",
              "lines": [
                {
                  "step": "$\\left(\\dfrac{1}{4}\\right)^{-3} = \\left(\\dfrac{4}{1}\\right)^3$",
                  "reason": "The negative power of a quotient turns the fraction over and makes the exponent positive."
                },
                {
                  "step": "$\\left(\\dfrac{4}{1}\\right)^3 = \\dfrac{4^3}{1^3}$",
                  "reason": "The power of a quotient raises the top and the bottom to the power, which leaves two powers of whole numbers."
                },
                {
                  "step": "$\\dfrac{4^3}{1^3} = 64$",
                  "reason": "The definition of a power as repeated multiplication gives $4^3 = 64$ and $1^3 = 1$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(\\dfrac{4}{3}\\right)^{-2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/16",
              "lines": [
                {
                  "step": "$\\left(\\dfrac{4}{3}\\right)^{-2} = \\left(\\dfrac{3}{4}\\right)^2$",
                  "reason": "The negative power of a quotient turns the fraction over and makes the exponent positive."
                },
                {
                  "step": "$\\left(\\dfrac{3}{4}\\right)^2 = \\dfrac{3^2}{4^2}$",
                  "reason": "The power of a quotient raises the top and the bottom to the power, which leaves two powers of whole numbers."
                },
                {
                  "step": "$\\dfrac{3^2}{4^2} = \\dfrac{9}{16}$",
                  "reason": "The definition of a power as repeated multiplication gives $3^2 = 9$ and $4^2 = 16$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{5}{2^{-3}}$.",
            "lines": [
              {
                "step": "$\\dfrac{5}{2^{-3}} = \\dfrac{5}{\\dfrac{1}{2^3}}$",
                "reason": "The negative exponent makes $2^{-3}$ equal to $\\dfrac{1}{2^3}$, which shows the bottom as a fraction."
              },
              {
                "step": "$\\dfrac{5}{\\dfrac{1}{2^3}} = 5\\cdot 2^3$",
                "reason": "Dividing by a fraction is multiplying by its reciprocal, which moves the power above the fraction bar."
              },
              {
                "step": "$5\\cdot 2^3 = 5\\cdot 8$",
                "reason": "The definition of a power as repeated multiplication gives $2^3 = 8$."
              },
              {
                "step": "$5\\cdot 8 = 40$",
                "reason": "The multiplication of whole numbers gives the value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{2}{3^{-2}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "18",
              "lines": [
                {
                  "step": "$\\dfrac{2}{3^{-2}} = \\dfrac{2}{\\dfrac{1}{3^2}}$",
                  "reason": "The negative exponent makes $3^{-2}$ equal to $\\dfrac{1}{3^2}$, which shows the bottom as a fraction."
                },
                {
                  "step": "$\\dfrac{2}{\\dfrac{1}{3^2}} = 2\\cdot 3^2$",
                  "reason": "Dividing by a fraction is multiplying by its reciprocal, which moves the power above the fraction bar."
                },
                {
                  "step": "$2\\cdot 3^2 = 2\\cdot 9$",
                  "reason": "The definition of a power as repeated multiplication gives $3^2 = 9$."
                },
                {
                  "step": "$2\\cdot 9 = 18$",
                  "reason": "The multiplication of whole numbers gives the value."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{7}{10^{-2}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "700",
              "lines": [
                {
                  "step": "$\\dfrac{7}{10^{-2}} = \\dfrac{7}{\\dfrac{1}{10^2}}$",
                  "reason": "The negative exponent makes $10^{-2}$ equal to $\\dfrac{1}{10^2}$, which shows the bottom as a fraction."
                },
                {
                  "step": "$\\dfrac{7}{\\dfrac{1}{10^2}} = 7\\cdot 10^2$",
                  "reason": "Dividing by a fraction is multiplying by its reciprocal, which moves the power above the fraction bar."
                },
                {
                  "step": "$7\\cdot 10^2 = 7\\cdot 100$",
                  "reason": "The definition of a power as repeated multiplication gives $10^2 = 100$."
                },
                {
                  "step": "$7\\cdot 100 = 700$",
                  "reason": "The multiplication of whole numbers gives the value."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{3}{2^{-5}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "96",
              "lines": [
                {
                  "step": "$\\dfrac{3}{2^{-5}} = \\dfrac{3}{\\dfrac{1}{2^5}}$",
                  "reason": "The negative exponent makes $2^{-5}$ equal to $\\dfrac{1}{2^5}$, which shows the bottom as a fraction."
                },
                {
                  "step": "$\\dfrac{3}{\\dfrac{1}{2^5}} = 3\\cdot 2^5$",
                  "reason": "Dividing by a fraction is multiplying by its reciprocal, which moves the power above the fraction bar."
                },
                {
                  "step": "$3\\cdot 2^5 = 3\\cdot 32$",
                  "reason": "The definition of a power as repeated multiplication gives $2^5 = 32$."
                },
                {
                  "step": "$3\\cdot 32 = 96$",
                  "reason": "The multiplication of whole numbers gives the value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t102-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this simplification of $\\dfrac{(x+2)^3}{(x+2)^5}$, and write that line right.",
            "given": [
              "$\\dfrac{(x+2)^3}{(x+2)^5}$",
              "$(x+2)^{-2}$",
              "$\\dfrac{1}{x^2+4}$"
            ],
            "lines": [
              {
                "step": "Line 3 raises each term of $x+2$ to the power 2.",
                "reason": "The power of a product raises each factor of a product to the power, and the terms in this bracket are added or subtracted, so no law of exponents opens its power."
              },
              {
                "step": "At $x = 1$ the bracket gives $9$, and the terms give $5$.",
                "reason": "Substituting a value into two expressions tests whether they are equal, and here the two values differ."
              },
              {
                "step": "Line 3 written right is $\\dfrac{1}{(x+2)^2}$.",
                "reason": "The bracket stays as one base, and the exponent is the one the line before gives."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this evaluation of $(1+3)^{-2}$, and write that line right.",
              "given": [
                "$(1+3)^{-2}$",
                "$\\dfrac{1}{(1+3)^2}$",
                "$\\dfrac{1}{1^2+3^2}$",
                "$\\dfrac{1}{10}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 1/4^2",
              "lines": [
                {
                  "step": "Line 3 raises each term of $1+3$ to the power 2.",
                  "reason": "The power of a product raises each factor of a product to the power, and the terms in this bracket are added or subtracted, so no law of exponents opens its power."
                },
                {
                  "step": "The bracket gives $(1+3)^2 = 16$, and the terms give $1^2+3^2 = 10$.",
                  "reason": "Substituting a value into two expressions tests whether they are equal, and here the two values differ."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{1}{4^2}$, which is $\\dfrac{1}{16}$.",
                  "reason": "The bracket stays as one base, and the exponent is the one the line before gives."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this simplification of $(x+3)^5\\cdot (x+3)^{-3}$, and write that line right.",
              "given": [
                "$(x+3)^5\\cdot (x+3)^{-3}$",
                "$(x+3)^{5+(-3)}$",
                "$x^2+9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (x+3)^2",
              "lines": [
                {
                  "step": "Line 3 raises each term of $x+3$ to the power 2.",
                  "reason": "The power of a product raises each factor of a product to the power, and the terms in this bracket are added or subtracted, so no law of exponents opens its power."
                },
                {
                  "step": "At $x = 1$ the bracket gives $16$, and the terms give $10$.",
                  "reason": "Substituting a value into two expressions tests whether they are equal, and here the two values differ."
                },
                {
                  "step": "Line 3 written right is $(x+3)^2$.",
                  "reason": "The bracket stays as one base, and the exponent is the one the line before gives."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this simplification of $\\dfrac{(y-4)^2}{(y-4)^5}$, and write that line right.",
              "given": [
                "$\\dfrac{(y-4)^2}{(y-4)^5}$",
                "$(y-4)^{-3}$",
                "$\\dfrac{1}{y^3-64}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 1/(y-4)^3",
              "lines": [
                {
                  "step": "Line 3 raises each term of $y-4$ to the power 3.",
                  "reason": "The power of a product raises each factor of a product to the power, and the terms in this bracket are added or subtracted, so no law of exponents opens its power."
                },
                {
                  "step": "At $y = 1$ the bracket gives $-27$, and the terms give $-63$.",
                  "reason": "Substituting a value into two expressions tests whether they are equal, and here the two values differ."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{1}{(y-4)^3}$.",
                  "reason": "The bracket stays as one base, and the exponent is the one the line before gives."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this evaluation of $2^3\\cdot 5^3$, and write that line right.",
            "given": [
              "$2^3\\cdot 5^3$",
              "$10^6$",
              "$1\\,000\\,000$"
            ],
            "lines": [
              {
                "step": "Line 2 adds the exponents of $2^3$ and $5^3$.",
                "reason": "The product law adds exponents only for powers of one base, and 2 and 5 are two bases."
              },
              {
                "step": "The two powers share the exponent 3, so they join as $(2\\cdot 5)^3$.",
                "reason": "The power of a product, read from right to left, joins two powers that share an exponent."
              },
              {
                "step": "Line 2 written right is $10^3$.",
                "reason": "The base is the product of the two bases, and the exponent stays 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this evaluation of $2\\cdot 2\\cdot 5^2$, and write that line right.",
              "given": [
                "$2\\cdot 2\\cdot 5^2$",
                "$2^2\\cdot 5^2$",
                "$10^4$",
                "$10\\,000$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 10^2",
              "lines": [
                {
                  "step": "Line 3 adds the exponents of $2^2$ and $5^2$.",
                  "reason": "The product law adds exponents only for powers of one base, and 2 and 5 are two bases."
                },
                {
                  "step": "The two powers share the exponent 2, so they join as $(2\\cdot 5)^2$.",
                  "reason": "The power of a product, read from right to left, joins two powers that share an exponent."
                },
                {
                  "step": "Line 3 written right is $10^2$.",
                  "reason": "The base is the product of the two bases, and the exponent stays 2."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this simplification of $x^2\\cdot x\\cdot y^3$, and write that line right.",
              "given": [
                "$x^2\\cdot x\\cdot y^3$",
                "$x^3y^3$",
                "$(xy)^6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (x*y)^3",
              "lines": [
                {
                  "step": "Line 3 adds the exponents of $x^3$ and $y^3$.",
                  "reason": "The product law adds exponents only for powers of one base, and $x$ and $y$ are two bases."
                },
                {
                  "step": "The two powers share the exponent 3, so they join as $(xy)^3$.",
                  "reason": "The power of a product, read from right to left, joins two powers that share an exponent."
                },
                {
                  "step": "Line 3 written right is $(xy)^3$.",
                  "reason": "The base is the product of the two letters, and the exponent stays 3."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $2^2\\cdot 3^2\\cdot 5^2$, and write that line right.",
              "given": [
                "$2^2\\cdot 3^2\\cdot 5^2$",
                "$6^2\\cdot 5^2$",
                "$30^4$",
                "$810\\,000$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 30^2",
              "lines": [
                {
                  "step": "Line 3 adds the exponents of $6^2$ and $5^2$.",
                  "reason": "The product law adds exponents only for powers of one base, and 6 and 5 are two bases."
                },
                {
                  "step": "The two powers share the exponent 2, so they join as $(6\\cdot 5)^2$.",
                  "reason": "The power of a product, read from right to left, joins two powers that share an exponent."
                },
                {
                  "step": "Line 3 written right is $30^2$.",
                  "reason": "The base is the product of the two bases, and the exponent stays 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this evaluation of $-3^2+2^3$, and write that line right.",
            "given": [
              "$-3^2+2^3$",
              "$9+8$",
              "$17$"
            ],
            "lines": [
              {
                "step": "Line 2 takes $-3^2$ as $9$.",
                "reason": "The power binds before the coefficient, and the coefficient $-1$ stays outside the power, so the base is 3 and the minus sign is kept."
              },
              {
                "step": "The value of $-3^2$ is $-(3^2) = -9$.",
                "reason": "The definition of a power as repeated multiplication gives $3^2 = 9$, and the minus sign is applied after the power."
              },
              {
                "step": "Line 2 written right is $-9+8$.",
                "reason": "Only the sign of the first number changes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this evaluation of $-5^2+(-2)^4$, and write that line right.",
              "given": [
                "$-5^2+(-2)^4$",
                "$-5^2+16$",
                "$25+16$",
                "$41$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -25+16",
              "lines": [
                {
                  "step": "Line 3 takes $-5^2$ as $25$.",
                  "reason": "The power binds before the coefficient, and the coefficient $-1$ stays outside the power, so the base is 5 and the minus sign is kept."
                },
                {
                  "step": "The value of $-5^2$ is $-(5^2) = -25$.",
                  "reason": "The definition of a power as repeated multiplication gives $5^2 = 25$, and the minus sign is applied after the power."
                },
                {
                  "step": "Line 3 written right is $-25+16$.",
                  "reason": "Only the sign of the first number changes."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $-4^2\\cdot 3^2$, and write that line right.",
              "given": [
                "$-4^2\\cdot 3^2$",
                "$16\\cdot 9$",
                "$144$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -16*9",
              "lines": [
                {
                  "step": "Line 2 takes $-4^2$ as $16$.",
                  "reason": "The power binds before the coefficient, and the coefficient $-1$ stays outside the power, so the base is 4 and the minus sign is kept."
                },
                {
                  "step": "The value of $-4^2$ is $-(4^2) = -16$.",
                  "reason": "The definition of a power as repeated multiplication gives $4^2 = 16$, and the minus sign is applied after the power."
                },
                {
                  "step": "Line 2 written right is $-16\\cdot 9$.",
                  "reason": "Only the sign of the first number changes."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this evaluation of $\\dfrac{-6^2}{2^2}$, and write that line right.",
              "given": [
                "$\\dfrac{-6^2}{2^2}$",
                "$\\dfrac{36}{4}$",
                "$9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -36/4",
              "lines": [
                {
                  "step": "Line 2 takes $-6^2$ as $36$.",
                  "reason": "The power binds before the coefficient, and the coefficient $-1$ stays outside the power, so the base is 6 and the minus sign is kept."
                },
                {
                  "step": "The value of $-6^2$ is $-(6^2) = -36$.",
                  "reason": "The definition of a power as repeated multiplication gives $6^2 = 36$, and the minus sign is applied after the power."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{-36}{4}$.",
                  "reason": "Only the sign of the first number changes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t102-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the cube of the product of 3 and a number $x$, divided by the square of the number, is 54.",
            "lines": [
              {
                "step": "The product of 3 and the number is $3x$.",
                "reason": "In writing a sentence as an equation, the word \"product\" means that 3 and the number are multiplied."
              },
              {
                "step": "The cube of the product is $(3x)^3$.",
                "reason": "The power binds before the coefficient, so the brackets are needed for the power to take in the whole of $3x$."
              },
              {
                "step": "Dividing by the square of the number gives $\\dfrac{(3x)^3}{x^2}$.",
                "reason": "In writing a sentence as an equation, the square of the number is $x^2$, and the words \"divided by\" name the operation that joins the two powers."
              },
              {
                "step": "$\\dfrac{(3x)^3}{x^2} = 54$",
                "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the fourth power of twice a number $x$, divided by the cube of the number, is 80.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(2*x)^4/x^3 = 80",
              "lines": [
                {
                  "step": "Twice the number is $2x$.",
                  "reason": "In writing a sentence as an equation, the word \"twice\" means that the number is multiplied by 2."
                },
                {
                  "step": "The fourth power of twice the number is $(2x)^4$.",
                  "reason": "The power binds before the coefficient, so the brackets are needed for the power to take in the whole of $2x$."
                },
                {
                  "step": "Dividing by the cube of the number gives $\\dfrac{(2x)^4}{x^3}$.",
                  "reason": "In writing a sentence as an equation, the cube of the number is $x^3$, and the words \"divided by\" name the operation that joins the two powers."
                },
                {
                  "step": "$\\dfrac{(2x)^4}{x^3} = 80$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the square of the product of 5 and a number $x$, multiplied by the square of the number, is 400.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(5*x)^2*x^2 = 400",
              "lines": [
                {
                  "step": "The product of 5 and the number is $5x$.",
                  "reason": "In writing a sentence as an equation, the word \"product\" means that 5 and the number are multiplied."
                },
                {
                  "step": "The square of the product is $(5x)^2$.",
                  "reason": "The power binds before the coefficient, so the brackets are needed for the power to take in the whole of $5x$."
                },
                {
                  "step": "Multiplying by the square of the number gives $(5x)^2\\cdot x^2$.",
                  "reason": "In writing a sentence as an equation, the square of the number is $x^2$, and the words \"multiplied by\" name the operation that joins the two powers."
                },
                {
                  "step": "$(5x)^2\\cdot x^2 = 400$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the cube of the product of 4 and a number $x$, divided by the square of the number, is 192.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(4*x)^3/x^2 = 192",
              "lines": [
                {
                  "step": "The product of 4 and the number is $4x$.",
                  "reason": "In writing a sentence as an equation, the word \"product\" means that 4 and the number are multiplied."
                },
                {
                  "step": "The cube of the product is $(4x)^3$.",
                  "reason": "The power binds before the coefficient, so the brackets are needed for the power to take in the whole of $4x$."
                },
                {
                  "step": "Dividing by the square of the number gives $\\dfrac{(4x)^3}{x^2}$.",
                  "reason": "In writing a sentence as an equation, the square of the number is $x^2$, and the words \"divided by\" name the operation that joins the two powers."
                },
                {
                  "step": "$\\dfrac{(4x)^3}{x^2} = 192$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: 12 times the reciprocal of the square of a number $x$ is 3.",
            "lines": [
              {
                "step": "The square of the number is $x^2$.",
                "reason": "In writing a sentence as an equation, the word \"square\" names the exponent 2."
              },
              {
                "step": "The reciprocal of the square is $\\dfrac{1}{x^2}$, which is $x^{-2}$.",
                "reason": "The negative exponent writes the reciprocal of a power as a power with the opposite exponent."
              },
              {
                "step": "Multiplying by 12 gives $\\dfrac{12}{x^2}$.",
                "reason": "In writing a sentence as an equation, the words \"12 times\" mean multiplication by 12, and the product formula for fractions puts 12 on the top."
              },
              {
                "step": "$\\dfrac{12}{x^2} = 3$",
                "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: 16 times the reciprocal of the cube of a number $x$ is 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "16/x^3 = 2",
              "lines": [
                {
                  "step": "The cube of the number is $x^3$.",
                  "reason": "In writing a sentence as an equation, the word \"cube\" names the exponent 3."
                },
                {
                  "step": "The reciprocal of the cube is $\\dfrac{1}{x^3}$, which is $x^{-3}$.",
                  "reason": "The negative exponent writes the reciprocal of a power as a power with the opposite exponent."
                },
                {
                  "step": "Multiplying by 16 gives $\\dfrac{16}{x^3}$.",
                  "reason": "In writing a sentence as an equation, the words \"16 times\" mean multiplication by 16, and the product formula for fractions puts 16 on the top."
                },
                {
                  "step": "$\\dfrac{16}{x^3} = 2$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: 50 times the reciprocal of the square of a number $x$ is 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "50/x^2 = 2",
              "lines": [
                {
                  "step": "The square of the number is $x^2$.",
                  "reason": "In writing a sentence as an equation, the word \"square\" names the exponent 2."
                },
                {
                  "step": "The reciprocal of the square is $\\dfrac{1}{x^2}$, which is $x^{-2}$.",
                  "reason": "The negative exponent writes the reciprocal of a power as a power with the opposite exponent."
                },
                {
                  "step": "Multiplying by 50 gives $\\dfrac{50}{x^2}$.",
                  "reason": "In writing a sentence as an equation, the words \"50 times\" mean multiplication by 50, and the product formula for fractions puts 50 on the top."
                },
                {
                  "step": "$\\dfrac{50}{x^2} = 2$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: 48 times the reciprocal of the fourth power of a number $x$ is 3.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "48/x^4 = 3",
              "lines": [
                {
                  "step": "The fourth power of the number is $x^4$.",
                  "reason": "In writing a sentence as an equation, the word \"fourth power\" names the exponent 4."
                },
                {
                  "step": "The reciprocal of the fourth power is $\\dfrac{1}{x^4}$, which is $x^{-4}$.",
                  "reason": "The negative exponent writes the reciprocal of a power as a power with the opposite exponent."
                },
                {
                  "step": "Multiplying by 48 gives $\\dfrac{48}{x^4}$.",
                  "reason": "In writing a sentence as an equation, the words \"48 times\" mean multiplication by 48, and the product formula for fractions puts 48 on the top."
                },
                {
                  "step": "$\\dfrac{48}{x^4} = 3$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the cube of the quotient of a number $x$ and 2 is 27.",
            "lines": [
              {
                "step": "The quotient of the number and 2 is $\\dfrac{x}{2}$.",
                "reason": "In writing a sentence as an equation, the word \"quotient\" means division, with the number named first on the top."
              },
              {
                "step": "The cube of the quotient is $\\left(\\dfrac{x}{2}\\right)^3$.",
                "reason": "In writing a sentence as an equation, the brackets make the whole quotient the base, since without them the power binds to one number alone."
              },
              {
                "step": "$\\left(\\dfrac{x}{2}\\right)^3 = 27$",
                "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the square of the quotient of 6 and a number $x$ is 9.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(6/x)^2 = 9",
              "lines": [
                {
                  "step": "The quotient of 6 and the number is $\\dfrac{6}{x}$.",
                  "reason": "In writing a sentence as an equation, the word \"quotient\" means division, with the number named first on the top."
                },
                {
                  "step": "The square of the quotient is $\\left(\\dfrac{6}{x}\\right)^2$.",
                  "reason": "In writing a sentence as an equation, the brackets make the whole quotient the base, since without them the power binds to one number alone."
                },
                {
                  "step": "$\\left(\\dfrac{6}{x}\\right)^2 = 9$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the fourth power of the quotient of a number $x$ and 3 is 16.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x/3)^4 = 16",
              "lines": [
                {
                  "step": "The quotient of the number and 3 is $\\dfrac{x}{3}$.",
                  "reason": "In writing a sentence as an equation, the word \"quotient\" means division, with the number named first on the top."
                },
                {
                  "step": "The fourth power of the quotient is $\\left(\\dfrac{x}{3}\\right)^4$.",
                  "reason": "In writing a sentence as an equation, the brackets make the whole quotient the base, since without them the power binds to one number alone."
                },
                {
                  "step": "$\\left(\\dfrac{x}{3}\\right)^4 = 16$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the cube of the quotient of 10 and a number $x$ is 8.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(10/x)^3 = 8",
              "lines": [
                {
                  "step": "The quotient of 10 and the number is $\\dfrac{10}{x}$.",
                  "reason": "In writing a sentence as an equation, the word \"quotient\" means division, with the number named first on the top."
                },
                {
                  "step": "The cube of the quotient is $\\left(\\dfrac{10}{x}\\right)^3$.",
                  "reason": "In writing a sentence as an equation, the brackets make the whole quotient the base, since without them the power binds to one number alone."
                },
                {
                  "step": "$\\left(\\dfrac{10}{x}\\right)^3 = 8$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$: the square of the product of two numbers $x$ and $y$, divided by the cube of $y$, is 12.",
            "lines": [
              {
                "step": "The product of the two numbers is $xy$.",
                "reason": "In writing a sentence as an equation, the word \"product\" means that the two numbers are multiplied."
              },
              {
                "step": "The square of the product is $(xy)^2$.",
                "reason": "The power binds before the coefficient, so the brackets are needed for the power to take in the whole of $xy$."
              },
              {
                "step": "Dividing by the cube of $y$ gives $\\dfrac{(xy)^2}{y^3}$.",
                "reason": "In writing a sentence as an equation, the cube of $y$ is $y^3$, and the words \"divided by\" name the operation that joins the two powers."
              },
              {
                "step": "$\\dfrac{(xy)^2}{y^3} = 12$",
                "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: the cube of the product of two numbers $x$ and $y$, divided by the square of $x$, is 40.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x*y)^3/x^2 = 40",
              "lines": [
                {
                  "step": "The product of the two numbers is $xy$.",
                  "reason": "In writing a sentence as an equation, the word \"product\" means that the two numbers are multiplied."
                },
                {
                  "step": "The cube of the product is $(xy)^3$.",
                  "reason": "The power binds before the coefficient, so the brackets are needed for the power to take in the whole of $xy$."
                },
                {
                  "step": "Dividing by the square of $x$ gives $\\dfrac{(xy)^3}{x^2}$.",
                  "reason": "In writing a sentence as an equation, the square of $x$ is $x^2$, and the words \"divided by\" name the operation that joins the two powers."
                },
                {
                  "step": "$\\dfrac{(xy)^3}{x^2} = 40$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: the square of the product of two numbers $x$ and $y$, multiplied by the square of $y$, is 36.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x*y)^2*y^2 = 36",
              "lines": [
                {
                  "step": "The product of the two numbers is $xy$.",
                  "reason": "In writing a sentence as an equation, the word \"product\" means that the two numbers are multiplied."
                },
                {
                  "step": "The square of the product is $(xy)^2$.",
                  "reason": "The power binds before the coefficient, so the brackets are needed for the power to take in the whole of $xy$."
                },
                {
                  "step": "Multiplying by the square of $y$ gives $(xy)^2\\cdot y^2$.",
                  "reason": "In writing a sentence as an equation, the square of $y$ is $y^2$, and the words \"multiplied by\" name the operation that joins the two powers."
                },
                {
                  "step": "$(xy)^2\\cdot y^2 = 36$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: the fourth power of the product of two numbers $x$ and $y$, divided by the fifth power of $x$, is 3.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x*y)^4/x^5 = 3",
              "lines": [
                {
                  "step": "The product of the two numbers is $xy$.",
                  "reason": "In writing a sentence as an equation, the word \"product\" means that the two numbers are multiplied."
                },
                {
                  "step": "The fourth power of the product is $(xy)^4$.",
                  "reason": "The power binds before the coefficient, so the brackets are needed for the power to take in the whole of $xy$."
                },
                {
                  "step": "Dividing by the fifth power of $x$ gives $\\dfrac{(xy)^4}{x^5}$.",
                  "reason": "In writing a sentence as an equation, the fifth power of $x$ is $x^5$, and the words \"divided by\" name the operation that joins the two powers."
                },
                {
                  "step": "$\\dfrac{(xy)^4}{x^5} = 3$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
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
      "id": "t102-p1",
      "method": "direct proof",
      "statement": "Let $a$ be a nonzero number and $n$ a positive whole number. If the quotient law $\\dfrac{a^m}{a^k} = a^{m-k}$ holds with $m = 0$ and $k = n$, then $a^{-n} = \\dfrac{1}{a^n}$.",
      "idea": "Dividing $a^0$, which is 1, by $a^n$ gives $\\dfrac{1}{a^n}$, and the quotient law names the same quotient $a^{-n}$. So the law leaves one meaning open to a negative exponent.",
      "lines": [
        {
          "line": "With $m = 0$ and $k = n$, the quotient law gives $\\dfrac{a^0}{a^n} = a^{0-n}$.",
          "reason": "The quotient law, which the statement supposes for this pair of exponents."
        },
        {
          "line": "The exponent $0-n$ is $-n$, so $\\dfrac{a^0}{a^n} = a^{-n}$.",
          "reason": "Subtracting a number from 0 gives its opposite."
        },
        {
          "line": "The power $a^0$ equals 1.",
          "reason": "The definition of a power with the exponent 0, an earlier fact of arithmetic."
        },
        {
          "line": "So $\\dfrac{a^0}{a^n} = \\dfrac{1}{a^n}$.",
          "reason": "Substituting line 3 into the top of the fraction."
        },
        {
          "line": "Therefore $a^{-n} = \\dfrac{1}{a^n}$.",
          "reason": "Lines 2 and 4 give two values of one quotient, joined by the transitivity of equality."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t102-s1",
      "method": "proof by cases",
      "statement": "Let $a$ be a nonzero number, and let $m$ and $n$ be integers. Then $a^ma^n = a^{m+n}$.",
      "check": {
        "proof": [
          {
            "line": "Case 1: the integers $m$ and $n$ are whole numbers. Then $a^ma^n = a^{m+n}$.",
            "reason": "The product law for whole exponents, an earlier fact of arithmetic."
          },
          {
            "line": "Case 2: the integers are $m = -j$ and $n = -k$ for positive whole numbers $j$ and $k$. Then $a^ma^n = \\dfrac{1}{a^j}\\cdot\\dfrac{1}{a^k}$.",
            "reason": "The negative exponent, used on each factor."
          },
          {
            "line": "In case 2, $\\dfrac{1}{a^j}\\cdot\\dfrac{1}{a^k} = \\dfrac{1}{a^ja^k}$.",
            "reason": "The product formula for fractions, an earlier fact of arithmetic."
          },
          {
            "line": "In case 2, $\\dfrac{1}{a^ja^k} = \\dfrac{1}{a^{j+k}}$.",
            "reason": "The product law for whole exponents, used on the bottom."
          },
          {
            "line": "In case 2, $\\dfrac{1}{a^{j+k}} = a^{-(j+k)}$.",
            "reason": "The negative exponent, with the positive whole number $j+k$."
          },
          {
            "line": "Since $-(j+k) = m+n$, case 2 gives $a^ma^n = a^{m+n}$.",
            "reason": "Lines 2 to 5, joined by the transitivity of equality; the opposite of a sum is the sum of the opposites."
          },
          {
            "line": "Case 3: the integer $m$ is a whole number and $n = -k$ for a positive whole number $k$. Then $a^ma^n = a^m\\cdot\\dfrac{1}{a^k}$.",
            "reason": "The negative exponent."
          },
          {
            "line": "In case 3, $a^m\\cdot\\dfrac{1}{a^k} = \\dfrac{a^m}{a^k}$.",
            "reason": "Multiplying by a reciprocal is dividing."
          },
          {
            "line": "Case 3 with $m \\ge k$: the number $m-k$ is a whole number, and $a^{m-k}a^k = a^m$.",
            "reason": "The product law for whole exponents, since $(m-k)+k = m$."
          },
          {
            "line": "Dividing both sides by the nonzero number $a^k$ gives $a^{m-k} = \\dfrac{a^m}{a^k}$.",
            "reason": "Dividing equal numbers by the same nonzero number gives equal numbers."
          },
          {
            "line": "Since $m-k = m+n$, this part of case 3 gives $a^ma^n = a^{m+n}$.",
            "reason": "Lines 7, 8 and 10, joined by the transitivity of equality."
          },
          {
            "line": "Case 3 with $m < k$: the number $k-m$ is a positive whole number, and $a^{k-m}a^m = a^k$.",
            "reason": "The product law for whole exponents, since $(k-m)+m = k$."
          },
          {
            "line": "So $\\dfrac{a^m}{a^k} = \\dfrac{a^m}{a^{k-m}a^m}$.",
            "reason": "Substituting line 12 into the bottom of the fraction."
          },
          {
            "line": "Cancelling the nonzero factor $a^m$ gives $\\dfrac{a^m}{a^{k-m}a^m} = \\dfrac{1}{a^{k-m}}$.",
            "reason": "Cancelling a common nonzero factor of the top and the bottom leaves an equal fraction, an earlier fact of arithmetic."
          },
          {
            "line": "The fraction $\\dfrac{1}{a^{k-m}}$ equals $a^{-(k-m)}$.",
            "reason": "The negative exponent, with the positive whole number $k-m$."
          },
          {
            "line": "Since $-(k-m) = m+n$, this part of case 3 gives $a^ma^n = a^{m+n}$.",
            "reason": "Lines 7, 8 and 13 to 15, joined by the transitivity of equality."
          },
          {
            "line": "Case 4: the integer $m$ is negative and $n$ is a whole number. Then $a^ma^n = a^na^m$.",
            "reason": "The commutative law of multiplication."
          },
          {
            "line": "Case 3, with the two exponents exchanged, gives $a^na^m = a^{n+m}$.",
            "reason": "Case 3 holds for every whole first exponent and every negative second exponent."
          },
          {
            "line": "Since $n+m = m+n$, case 4 gives $a^ma^n = a^{m+n}$.",
            "reason": "The commutative law of addition."
          },
          {
            "line": "Therefore $a^ma^n = a^{m+n}$ for all integers $m$ and $n$.",
            "reason": "The four cases cover every pair of integers."
          }
        ]
      }
    },
    {
      "id": "t102-s2",
      "method": "proof by cases",
      "statement": "Let $a$ be a nonzero number, and let $m$ and $n$ be integers. Then $\\dfrac{a^m}{a^n} = a^{m-n}$.",
      "check": {
        "proof": [
          {
            "line": "The quotient $\\dfrac{a^m}{a^n}$ equals $a^m\\cdot\\dfrac{1}{a^n}$.",
            "reason": "Dividing by a nonzero number is multiplying by its reciprocal."
          },
          {
            "line": "Case 1: the integer $n$ is positive. Then $\\dfrac{1}{a^n} = a^{-n}$.",
            "reason": "The negative exponent."
          },
          {
            "line": "Case 2: the integer $n$ is 0. Then $\\dfrac{1}{a^n}$ and $a^{-n}$ both equal 1, so $\\dfrac{1}{a^n} = a^{-n}$.",
            "reason": "The zero exponent, used on each side."
          },
          {
            "line": "Case 3: the integer $n$ is $-k$ for a positive whole number $k$. Then $\\dfrac{1}{a^n} = \\dfrac{1}{1/a^k}$.",
            "reason": "The negative exponent, used on $a^{-k}$."
          },
          {
            "line": "In case 3, $\\dfrac{1}{1/a^k} = a^k$.",
            "reason": "Dividing by a fraction is multiplying by its reciprocal."
          },
          {
            "line": "Since $k = -n$, case 3 gives $\\dfrac{1}{a^n} = a^{-n}$.",
            "reason": "Lines 4 and 5, joined by the transitivity of equality."
          },
          {
            "line": "So $\\dfrac{a^m}{a^n} = a^m\\cdot a^{-n}$ for every integer $n$.",
            "reason": "The three cases cover every integer, and each is substituted into line 1."
          },
          {
            "line": "The product $a^m\\cdot a^{-n}$ equals $a^{m+(-n)}$.",
            "reason": "The product law for integer exponents."
          },
          {
            "line": "Therefore $\\dfrac{a^m}{a^n} = a^{m-n}$.",
            "reason": "Adding the opposite of a number is subtracting the number."
          }
        ]
      }
    },
    {
      "id": "t102-s3",
      "method": "direct proof",
      "statement": "Let $a$ be a nonzero number and $n$ a whole number. Then $\\left(\\dfrac{1}{a}\\right)^n = \\dfrac{1}{a^n}$.",
      "check": {
        "proof": [
          {
            "line": "The product $\\left(\\dfrac{1}{a}\\right)^n\\cdot a^n$ equals $\\left(\\dfrac{1}{a}\\cdot a\\right)^n$.",
            "reason": "The power of a product for whole exponents, an earlier fact of arithmetic, read from right to left."
          },
          {
            "line": "Since $\\dfrac{1}{a}\\cdot a = 1$, this power is $1^n$.",
            "reason": "The definition of the reciprocal of a nonzero number."
          },
          {
            "line": "The power $1^n$ equals 1.",
            "reason": "Every power of 1 is 1, an earlier fact of arithmetic."
          },
          {
            "line": "So $\\left(\\dfrac{1}{a}\\right)^n\\cdot a^n = 1$.",
            "reason": "Lines 1 to 3, joined by the transitivity of equality."
          },
          {
            "line": "The number $a^n$ is nonzero.",
            "reason": "A product of nonzero numbers is nonzero."
          },
          {
            "line": "Dividing both sides of line 4 by $a^n$ gives $\\left(\\dfrac{1}{a}\\right)^n = \\dfrac{1}{a^n}$.",
            "reason": "Dividing equal numbers by the same nonzero number gives equal numbers."
          }
        ]
      }
    },
    {
      "id": "t102-s4",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be numbers with $b$ nonzero, and let $n$ be a whole number. Then $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$.",
      "check": {
        "proof": [
          {
            "line": "The product $\\left(\\dfrac{a}{b}\\right)^n\\cdot b^n$ equals $\\left(\\dfrac{a}{b}\\cdot b\\right)^n$.",
            "reason": "The power of a product for whole exponents, an earlier fact of arithmetic, read from right to left."
          },
          {
            "line": "Since $\\dfrac{a}{b}\\cdot b = a$, this power is $a^n$.",
            "reason": "Dividing by a nonzero number and then multiplying by it gives back the first number."
          },
          {
            "line": "So $\\left(\\dfrac{a}{b}\\right)^n\\cdot b^n = a^n$.",
            "reason": "Lines 1 and 2, joined by the transitivity of equality."
          },
          {
            "line": "The number $b^n$ is nonzero.",
            "reason": "A product of nonzero numbers is nonzero."
          },
          {
            "line": "Dividing both sides of line 3 by $b^n$ gives $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$.",
            "reason": "Dividing equal numbers by the same nonzero number gives equal numbers."
          }
        ]
      }
    },
    {
      "id": "t102-s5",
      "method": "direct proof",
      "statement": "Let $a$ be a nonzero number and $n$ a negative integer. Then $a^{-n} = \\dfrac{1}{a^n}$.",
      "check": {
        "proof": [
          {
            "line": "Since $n$ is negative, $n = -k$ for a positive whole number $k$.",
            "reason": "The opposite of a negative integer is a positive whole number."
          },
          {
            "line": "The opposite of $n$ is $k$, so $a^{-n} = a^k$.",
            "reason": "The opposite of $-k$ is $k$."
          },
          {
            "line": "The power $a^n$ is $a^{-k}$, which equals $\\dfrac{1}{a^k}$.",
            "reason": "The negative exponent, with the positive whole number $k$."
          },
          {
            "line": "So $\\dfrac{1}{a^n} = \\dfrac{1}{1/a^k}$.",
            "reason": "Substituting line 3 into the bottom of the fraction."
          },
          {
            "line": "The quotient $\\dfrac{1}{1/a^k}$ equals $a^k$.",
            "reason": "Dividing by a fraction is multiplying by its reciprocal."
          },
          {
            "line": "Therefore $a^{-n} = \\dfrac{1}{a^n}$.",
            "reason": "Lines 2, 4 and 5, joined by the transitivity of equality."
          }
        ]
      }
    },
    {
      "id": "t102-s6",
      "method": "proof by cases",
      "statement": "Let $a$ and $b$ be nonzero numbers and $n$ an integer. Then $(ab)^n = a^nb^n$.",
      "check": {
        "proof": [
          {
            "line": "Case 1: the integer $n$ is a whole number. Then $(ab)^n = a^nb^n$.",
            "reason": "The power of a product for whole exponents, an earlier fact of arithmetic."
          },
          {
            "line": "Case 2: the integer $n$ is negative, so $n = -k$ for a positive whole number $k$. Then $(ab)^n = \\dfrac{1}{(ab)^k}$.",
            "reason": "The negative exponent, which applies because the product $ab$ of two nonzero numbers is nonzero."
          },
          {
            "line": "In case 2, $(ab)^k = a^kb^k$.",
            "reason": "The power of a product for whole exponents, as in case 1."
          },
          {
            "line": "So $\\dfrac{1}{(ab)^k} = \\dfrac{1}{a^kb^k}$.",
            "reason": "Substituting line 3 into the bottom of the fraction."
          },
          {
            "line": "The fraction $\\dfrac{1}{a^kb^k}$ equals $\\dfrac{1}{a^k}\\cdot\\dfrac{1}{b^k}$.",
            "reason": "The product formula for fractions, an earlier fact of arithmetic, read from right to left."
          },
          {
            "line": "The two factors are $\\dfrac{1}{a^k} = a^{-k}$ and $\\dfrac{1}{b^k} = b^{-k}$.",
            "reason": "The negative exponent, used on each factor."
          },
          {
            "line": "Since $-k = n$, case 2 gives $(ab)^n = a^nb^n$.",
            "reason": "Lines 2 and 4 to 6, joined by the transitivity of equality."
          },
          {
            "line": "Therefore $(ab)^n = a^nb^n$ for every integer $n$.",
            "reason": "The two cases cover every integer."
          }
        ]
      }
    },
    {
      "id": "t102-s7",
      "method": "proof by cases",
      "statement": "Let $a$ be a nonzero number, and let $m$ and $n$ be integers. Then $(a^m)^n = a^{mn}$.",
      "check": {
        "proof": [
          {
            "line": "For every whole number $k$, $a^{-k} = \\dfrac{1}{a^k}$.",
            "reason": "The negative exponent for a positive $k$, and for $k = 0$ the zero exponent makes both sides 1."
          },
          {
            "line": "Every integer power of $a$ is nonzero.",
            "reason": "A whole power of a nonzero number is a product of nonzero numbers, and the reciprocal of a nonzero number is nonzero."
          },
          {
            "line": "Case 1: the integers $m$ and $n$ are whole numbers. Then $(a^m)^n = a^{mn}$.",
            "reason": "The power law for whole exponents, an earlier fact of arithmetic."
          },
          {
            "line": "Case 2: the integer $m$ is a whole number and $n = -k$ for a positive whole number $k$. Then $(a^m)^n = \\dfrac{1}{(a^m)^k}$.",
            "reason": "The negative exponent, with the nonzero base $a^m$."
          },
          {
            "line": "In case 2, $(a^m)^k = a^{mk}$.",
            "reason": "The power law for whole exponents."
          },
          {
            "line": "So $\\dfrac{1}{(a^m)^k} = \\dfrac{1}{a^{mk}}$.",
            "reason": "Substituting line 5 into the bottom of the fraction."
          },
          {
            "line": "The fraction $\\dfrac{1}{a^{mk}}$ equals $a^{-mk}$.",
            "reason": "Line 1, with the whole number $mk$."
          },
          {
            "line": "Since $-mk = mn$, case 2 gives $(a^m)^n = a^{mn}$.",
            "reason": "Lines 4, 6 and 7, joined by the transitivity of equality."
          },
          {
            "line": "Case 3: the integer $m$ is $-j$ for a positive whole number $j$, and $n$ is a whole number. Then $(a^m)^n = \\left(\\dfrac{1}{a^j}\\right)^n$.",
            "reason": "The negative exponent, used on the base $a^{-j}$."
          },
          {
            "line": "In case 3, $\\left(\\dfrac{1}{a^j}\\right)^n = \\dfrac{1^n}{(a^j)^n}$.",
            "reason": "The power of a quotient for whole exponents."
          },
          {
            "line": "The power $1^n$ equals 1.",
            "reason": "Every power of 1 is 1, an earlier fact of arithmetic."
          },
          {
            "line": "The power $(a^j)^n$ equals $a^{jn}$.",
            "reason": "The power law for whole exponents."
          },
          {
            "line": "So in case 3, $(a^m)^n = \\dfrac{1}{a^{jn}}$.",
            "reason": "Substituting lines 11 and 12 into line 10, then line 9."
          },
          {
            "line": "The fraction $\\dfrac{1}{a^{jn}}$ equals $a^{-jn}$.",
            "reason": "Line 1, with the whole number $jn$."
          },
          {
            "line": "Since $-jn = mn$, case 3 gives $(a^m)^n = a^{mn}$.",
            "reason": "Lines 13 and 14, joined by the transitivity of equality."
          },
          {
            "line": "Case 4: the integers are $m = -j$ and $n = -k$ for positive whole numbers $j$ and $k$. Then $(a^m)^n = \\dfrac{1}{(a^{-j})^k}$.",
            "reason": "The negative exponent, with the nonzero base $a^{-j}$."
          },
          {
            "line": "In case 4, $(a^{-j})^k = a^{-jk}$.",
            "reason": "Case 3, with the whole number $k$ as the outer exponent."
          },
          {
            "line": "The power $a^{-jk}$ equals $\\dfrac{1}{a^{jk}}$.",
            "reason": "The negative exponent, with the positive whole number $jk$."
          },
          {
            "line": "So in case 4, $(a^m)^n = \\dfrac{1}{1/a^{jk}}$.",
            "reason": "Substituting lines 17 and 18 into line 16."
          },
          {
            "line": "The quotient $\\dfrac{1}{1/a^{jk}}$ equals $a^{jk}$.",
            "reason": "Dividing by a fraction is multiplying by its reciprocal."
          },
          {
            "line": "Since $jk = mn$, case 4 gives $(a^m)^n = a^{mn}$.",
            "reason": "Lines 19 and 20, joined by the transitivity of equality; the product of two opposites is the product of the numbers."
          },
          {
            "line": "Therefore $(a^m)^n = a^{mn}$ for all integers $m$ and $n$.",
            "reason": "The four cases cover every pair of integers."
          }
        ]
      }
    },
    {
      "id": "t102-s8",
      "method": "direct proof",
      "statement": "Let $a$ be a number and $n$ an even whole number. Then $(-a)^n = a^n$.",
      "check": {
        "proof": [
          {
            "line": "Since $n$ is even, $n = 2k$ for a whole number $k$.",
            "reason": "The definition of an even number."
          },
          {
            "line": "So $(-a)^n = (-a)^{2k}$.",
            "reason": "Substituting $2k$ for $n$."
          },
          {
            "line": "The power $(-a)^{2k}$ equals $\\left((-a)^2\\right)^k$.",
            "reason": "The power law for whole exponents, an earlier fact of arithmetic, read from right to left."
          },
          {
            "line": "The square $(-a)^2$ is the product $(-a)(-a)$.",
            "reason": "The definition of a power as repeated multiplication."
          },
          {
            "line": "The product $(-a)(-a)$ equals $a^2$.",
            "reason": "The product of two opposites, $(-a)(-b) = ab$, an earlier fact of arithmetic."
          },
          {
            "line": "So $(-a)^n = (a^2)^k$.",
            "reason": "Substituting lines 4 and 5 into line 3, then line 2."
          },
          {
            "line": "The power $(a^2)^k$ equals $a^{2k}$.",
            "reason": "The power law for whole exponents."
          },
          {
            "line": "Therefore $(-a)^n = a^n$.",
            "reason": "Lines 6 and 7, joined by the transitivity of equality, and $2k = n$."
          }
        ]
      }
    },
    {
      "id": "t102-s9",
      "method": "direct proof",
      "statement": "Let $a$ be a number and $n$ an odd whole number. Then $(-a)^n = -a^n$.",
      "check": {
        "proof": [
          {
            "line": "Since $n$ is odd, $n = 2k+1$ for a whole number $k$.",
            "reason": "The definition of an odd number."
          },
          {
            "line": "The power $(-a)^{2k+1}$ equals $(-a)^{2k}\\cdot(-a)$.",
            "reason": "The product law for whole exponents, an earlier fact of arithmetic, read from right to left."
          },
          {
            "line": "The power $(-a)^{2k}$ equals $\\left((-a)^2\\right)^k$.",
            "reason": "The power law for whole exponents, an earlier fact of arithmetic, read from right to left."
          },
          {
            "line": "The square $(-a)^2$ equals $a^2$.",
            "reason": "The product of two opposites, $(-a)(-b) = ab$, an earlier fact of arithmetic."
          },
          {
            "line": "The power $(a^2)^k$ equals $a^{2k}$.",
            "reason": "The power law for whole exponents."
          },
          {
            "line": "So $(-a)^n = a^{2k}\\cdot(-a)$.",
            "reason": "Substituting lines 3 to 5 into line 2, with $n = 2k+1$."
          },
          {
            "line": "The product $a^{2k}\\cdot(-a)$ equals $-(a^{2k}\\cdot a)$.",
            "reason": "A number times an opposite, $b\\cdot(-a) = -(ba)$, an earlier fact of arithmetic."
          },
          {
            "line": "The product $a^{2k}\\cdot a$ equals $a^{2k+1}$.",
            "reason": "The product law for whole exponents."
          },
          {
            "line": "Therefore $(-a)^n = -a^n$.",
            "reason": "Lines 6 to 8, joined by the transitivity of equality, and $2k+1 = n$."
          }
        ]
      }
    },
    {
      "id": "t102-s10",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be nonzero numbers and $n$ a positive whole number. Then $\\left(\\dfrac{a}{b}\\right)^{-n} = \\left(\\dfrac{b}{a}\\right)^n$.",
      "check": {
        "proof": [
          {
            "line": "The power $\\left(\\dfrac{a}{b}\\right)^{-n}$ equals $\\dfrac{1}{(a/b)^n}$.",
            "reason": "The negative exponent, which applies because the quotient of two nonzero numbers is nonzero."
          },
          {
            "line": "The power $(a/b)^n$ equals $\\dfrac{a^n}{b^n}$.",
            "reason": "The power of a quotient for whole exponents."
          },
          {
            "line": "So $\\left(\\dfrac{a}{b}\\right)^{-n} = \\dfrac{1}{a^n/b^n}$.",
            "reason": "Substituting line 2 into line 1."
          },
          {
            "line": "The quotient $\\dfrac{1}{a^n/b^n}$ equals $\\dfrac{b^n}{a^n}$.",
            "reason": "Dividing by a fraction is multiplying by its reciprocal."
          },
          {
            "line": "The fraction $\\dfrac{b^n}{a^n}$ equals $\\left(\\dfrac{b}{a}\\right)^n$.",
            "reason": "The power of a quotient for whole exponents, read from right to left."
          },
          {
            "line": "Therefore $\\left(\\dfrac{a}{b}\\right)^{-n} = \\left(\\dfrac{b}{a}\\right)^n$.",
            "reason": "Lines 3 to 5, joined by the transitivity of equality."
          }
        ]
      }
    }
  ]
}
