export default {
  "number": 198,
  "title": "The Rational Root Theorem",
  "section": 11,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "206-212"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find every root of $f(x) = 36x^3 + 99x^2 - 40x - 175$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-5/3, -7/3, 5/4}",
    "solution": [
      "Find every root of $f(x) = 36x^3 + 99x^2 - 40x - 175$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-175$ and $m$ a divisor of $36$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{5}{3} & 36 & 99 & -40 & -175 \\\\ & & -60 & -65 & 175 \\\\ \\hline & 36 & 39 & -105 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{5}{3}\\right)(36x^2 + 39x - 105)$",
      "$36x^2 + 39x - 105 = 3(12x^2 + 13x - 35)$",
      "$12x^2 + 13x - 35 = (3x + 7)(4x - 5)$",
      "$f(x) = 3\\left(x + \\dfrac{5}{3}\\right)(3x + 7)(4x - 5)$",
      "So $f(x) = 0$ exactly when $x + \\dfrac{5}{3} = 0$, $3x + 7 = 0$ or $4x - 5 = 0$.",
      "The set of roots is $\\left\\{-\\dfrac{5}{3}, -\\dfrac{7}{3}, \\dfrac{5}{4}\\right\\}$."
    ]
  },
  "ideas": [
    {
      "name": "Rational Root Theorem",
      "concrete": "The polynomial $f(x) = 6x^3 - 14x^2 + 15x - 35$ has integer coefficients, and $f\\left(\\dfrac{7}{3}\\right) = 6 \\cdot \\dfrac{343}{27} - 14 \\cdot \\dfrac{49}{9} + 15 \\cdot \\dfrac{7}{3} - 35 = \\dfrac{686}{9} - \\dfrac{686}{9} + 35 - 35 = 0$, so $\\dfrac{7}{3}$ is a root. Its numerator $7$ divides the constant term $-35$, and its denominator $3$ divides the leading coefficient $6$.",
      "general": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial of degree $n \\ge 1$ whose coefficients are integers, with $a_0 \\ne 0$. If a fraction $\\dfrac{k}{m}$ in lowest terms, with $k$ an integer and $m$ a whole number at least $1$, is a root of $f(x)$, then $k$ divides $a_0$ and $m$ divides $a_n$. This is the **Rational Root Theorem**. So the rational roots of $f(x)$ are found among the fractions whose numerator divides $a_0$ and whose denominator divides $a_n$. The theorem needs integer coefficients: a polynomial with fractions among its coefficients is first multiplied by a common denominator, which leaves its roots as they are."
    }
  ],
  "kinds": [
    {
      "id": "t198-k1",
      "forms": [
        {
          "example": {
            "problem": "Find every root of $f(x) = 30x^3 + 31x^2 - 275x - 56$.",
            "lines": [
              {
                "step": "Find every root of $f(x) = 30x^3 + 31x^2 - 275x - 56$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-56$ and $m$ a divisor of $30$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -\\dfrac{7}{2} & 30 & 31 & -275 & -56 \\\\ & & -105 & 259 & 56 \\\\ \\hline & 30 & -74 & -16 & 0 \\end{array}$",
                "reason": "Synthetic division: $-\\dfrac{7}{2}$ has numerator $-7$, a divisor of $-56$, and denominator $2$, a divisor of $30$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = \\left(x + \\dfrac{7}{2}\\right)(30x^2 - 74x - 16)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{7}{2}$ is a factor, and the bottom numbers before it, $30$, $-74$ and $-16$, are the coefficients of the quotient."
              },
              {
                "step": "$30x^2 - 74x - 16 = 2(15x^2 - 37x - 8)$",
                "reason": "Taking out a common factor: each coefficient of $30x^2 - 74x - 16$ is a multiple of $2$."
              },
              {
                "step": "$15x^2 - 37x - 8 = (5x + 1)(3x - 8)$",
                "reason": "Factoring a quadratic: $(5x + 1)(3x - 8)$ multiplies out to $15x^2 - 37x - 8$."
              },
              {
                "step": "$f(x) = 2\\left(x + \\dfrac{7}{2}\\right)(5x + 1)(3x - 8)$",
                "reason": "Substitution: lines 5 and 6 take the place of the quotient in line 4."
              },
              {
                "step": "So $f(x) = 0$ exactly when $x + \\dfrac{7}{2} = 0$, $5x + 1 = 0$ or $3x - 8 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
              },
              {
                "step": "The set of roots is $\\left\\{-\\dfrac{7}{2}, -\\dfrac{1}{5}, \\dfrac{8}{3}\\right\\}$.",
                "reason": "Isolating the variable: each equation of line 8 is solved for $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every root of $f(x) = 8x^3 - 12x^2 - 98x - 45$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1/2, 9/2, -5/2}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 8x^3 - 12x^2 - 98x - 45$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-45$ and $m$ a divisor of $8$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{2} & 8 & -12 & -98 & -45 \\\\ & & -4 & 8 & 45 \\\\ \\hline & 8 & -16 & -90 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{1}{2}$ has numerator $-1$, a divisor of $-45$, and denominator $2$, a divisor of $8$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x + \\dfrac{1}{2}\\right)(8x^2 - 16x - 90)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{1}{2}$ is a factor, and the bottom numbers before it, $8$, $-16$ and $-90$, are the coefficients of the quotient."
                },
                {
                  "step": "$8x^2 - 16x - 90 = 2(4x^2 - 8x - 45)$",
                  "reason": "Taking out a common factor: each coefficient of $8x^2 - 16x - 90$ is a multiple of $2$."
                },
                {
                  "step": "$4x^2 - 8x - 45 = (2x - 9)(2x + 5)$",
                  "reason": "Factoring a quadratic: $(2x - 9)(2x + 5)$ multiplies out to $4x^2 - 8x - 45$."
                },
                {
                  "step": "$f(x) = 2\\left(x + \\dfrac{1}{2}\\right)(2x - 9)(2x + 5)$",
                  "reason": "Substitution: lines 5 and 6 take the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + \\dfrac{1}{2} = 0$, $2x - 9 = 0$ or $2x + 5 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-\\dfrac{1}{2}, \\dfrac{9}{2}, -\\dfrac{5}{2}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 8 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 50x^3 + 125x^2 + 27x - 72$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-3/2, -8/5, 3/5}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 50x^3 + 125x^2 + 27x - 72$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-72$ and $m$ a divisor of $50$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{3}{2} & 50 & 125 & 27 & -72 \\\\ & & -75 & -75 & 72 \\\\ \\hline & 50 & 50 & -48 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{3}{2}$ has numerator $-3$, a divisor of $-72$, and denominator $2$, a divisor of $50$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x + \\dfrac{3}{2}\\right)(50x^2 + 50x - 48)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{3}{2}$ is a factor, and the bottom numbers before it, $50$, $50$ and $-48$, are the coefficients of the quotient."
                },
                {
                  "step": "$50x^2 + 50x - 48 = 2(25x^2 + 25x - 24)$",
                  "reason": "Taking out a common factor: each coefficient of $50x^2 + 50x - 48$ is a multiple of $2$."
                },
                {
                  "step": "$25x^2 + 25x - 24 = (5x + 8)(5x - 3)$",
                  "reason": "Factoring a quadratic: $(5x + 8)(5x - 3)$ multiplies out to $25x^2 + 25x - 24$."
                },
                {
                  "step": "$f(x) = 2\\left(x + \\dfrac{3}{2}\\right)(5x + 8)(5x - 3)$",
                  "reason": "Substitution: lines 5 and 6 take the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + \\dfrac{3}{2} = 0$, $5x + 8 = 0$ or $5x - 3 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-\\dfrac{3}{2}, -\\dfrac{8}{5}, \\dfrac{3}{5}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 8 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 40x^3 - 82x^2 + 13x + 9$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1/2, 9/5, -1/4}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 40x^3 - 82x^2 + 13x + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $9$ and $m$ a divisor of $40$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 40 & -82 & 13 & 9 \\\\ & & 20 & -31 & -9 \\\\ \\hline & 40 & -62 & -18 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{1}{2}$ has numerator $1$, a divisor of $9$, and denominator $2$, a divisor of $40$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x - \\dfrac{1}{2}\\right)(40x^2 - 62x - 18)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{1}{2}$ is a factor, and the bottom numbers before it, $40$, $-62$ and $-18$, are the coefficients of the quotient."
                },
                {
                  "step": "$40x^2 - 62x - 18 = 2(20x^2 - 31x - 9)$",
                  "reason": "Taking out a common factor: each coefficient of $40x^2 - 62x - 18$ is a multiple of $2$."
                },
                {
                  "step": "$20x^2 - 31x - 9 = (5x - 9)(4x + 1)$",
                  "reason": "Factoring a quadratic: $(5x - 9)(4x + 1)$ multiplies out to $20x^2 - 31x - 9$."
                },
                {
                  "step": "$f(x) = 2\\left(x - \\dfrac{1}{2}\\right)(5x - 9)(4x + 1)$",
                  "reason": "Substitution: lines 5 and 6 take the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - \\dfrac{1}{2} = 0$, $5x - 9 = 0$ or $4x + 1 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{\\dfrac{1}{2}, \\dfrac{9}{5}, -\\dfrac{1}{4}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 8 is solved for $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every root of $f(x) = 30x^4 - 269x^3 + 546x^2 - 40x - 192$.",
            "lines": [
              {
                "step": "Find every root of $f(x) = 30x^4 - 269x^3 + 546x^2 - 40x - 192$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-192$ and $m$ a divisor of $30$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrrr} 6 & 30 & -269 & 546 & -40 & -192 \\\\ & & 180 & -534 & 72 & 192 \\\\ \\hline & 30 & -89 & 12 & 32 & 0 \\end{array}$",
                "reason": "Synthetic division: the integers allowed by line 2 are tried first, and $6$ divides $-192$; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "The quotient is $q(x) = 30x^3 - 89x^2 + 12x + 32$, so $f(x) = (x - 6)q(x)$.",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 6$ is a factor, and the bottom numbers before it, $30$, $-89$, $12$ and $32$, are the coefficients of the quotient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{2} & 30 & -89 & 12 & 32 \\\\ & & -15 & 52 & -32 \\\\ \\hline & 30 & -104 & 64 & 0 \\end{array}$",
                "reason": "Synthetic division: a root of $q(x)$ is a root of $f(x)$, and $-\\dfrac{1}{2}$ has numerator $-1$, a divisor of $-192$, and denominator $2$, a divisor of $30$, so it is tried on $q(x)$; each bottom number after the first is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$q(x) = \\left(x + \\dfrac{1}{2}\\right)(30x^2 - 104x + 64)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{1}{2}$ is a factor, and the bottom numbers before it, $30$, $-104$ and $64$, are the coefficients of the quotient."
              },
              {
                "step": "$30x^2 - 104x + 64 = 2(15x^2 - 52x + 32)$",
                "reason": "Taking out a common factor: each coefficient of $30x^2 - 104x + 64$ is a multiple of $2$."
              },
              {
                "step": "$15x^2 - 52x + 32 = (5x - 4)(3x - 8)$",
                "reason": "Factoring a quadratic: $(5x - 4)(3x - 8)$ multiplies out to $15x^2 - 52x + 32$."
              },
              {
                "step": "$f(x) = 2(x - 6)\\left(x + \\dfrac{1}{2}\\right)(5x - 4)(3x - 8)$",
                "reason": "Substitution: lines 6 to 8 take the place of $q(x)$ in line 4."
              },
              {
                "step": "So $f(x) = 0$ exactly when $x - 6 = 0$, $x + \\dfrac{1}{2} = 0$, $5x - 4 = 0$ or $3x - 8 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
              },
              {
                "step": "The set of roots is $\\left\\{6, -\\dfrac{1}{2}, \\dfrac{4}{5}, \\dfrac{8}{3}\\right\\}$.",
                "reason": "Isolating the variable: each equation of line 10 is solved for $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every root of $f(x) = 32x^4 + 80x^3 - 266x^2 - 191x + 420$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4, -3/2, 7/4, 5/4}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 32x^4 + 80x^3 - 266x^2 - 191x + 420$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $420$ and $m$ a divisor of $32$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} -4 & 32 & 80 & -266 & -191 & 420 \\\\ & & -128 & 192 & 296 & -420 \\\\ \\hline & 32 & -48 & -74 & 105 & 0 \\end{array}$",
                  "reason": "Synthetic division: the integers allowed by line 2 are tried first, and $-4$ divides $420$; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $q(x) = 32x^3 - 48x^2 - 74x + 105$, so $f(x) = (x + 4)q(x)$.",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 4$ is a factor, and the bottom numbers before it, $32$, $-48$, $-74$ and $105$, are the coefficients of the quotient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{3}{2} & 32 & -48 & -74 & 105 \\\\ & & -48 & 144 & -105 \\\\ \\hline & 32 & -96 & 70 & 0 \\end{array}$",
                  "reason": "Synthetic division: a root of $q(x)$ is a root of $f(x)$, and $-\\dfrac{3}{2}$ has numerator $-3$, a divisor of $420$, and denominator $2$, a divisor of $32$, so it is tried on $q(x)$; each bottom number after the first is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$q(x) = \\left(x + \\dfrac{3}{2}\\right)(32x^2 - 96x + 70)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{3}{2}$ is a factor, and the bottom numbers before it, $32$, $-96$ and $70$, are the coefficients of the quotient."
                },
                {
                  "step": "$32x^2 - 96x + 70 = 2(16x^2 - 48x + 35)$",
                  "reason": "Taking out a common factor: each coefficient of $32x^2 - 96x + 70$ is a multiple of $2$."
                },
                {
                  "step": "$16x^2 - 48x + 35 = (4x - 7)(4x - 5)$",
                  "reason": "Factoring a quadratic: $(4x - 7)(4x - 5)$ multiplies out to $16x^2 - 48x + 35$."
                },
                {
                  "step": "$f(x) = 2(x + 4)\\left(x + \\dfrac{3}{2}\\right)(4x - 7)(4x - 5)$",
                  "reason": "Substitution: lines 6 to 8 take the place of $q(x)$ in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + 4 = 0$, $x + \\dfrac{3}{2} = 0$, $4x - 7 = 0$ or $4x - 5 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-4, -\\dfrac{3}{2}, \\dfrac{7}{4}, \\dfrac{5}{4}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 10 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 50x^4 - 185x^3 - 364x^2 + 636x + 864$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{2, 9/2, -8/5, -6/5}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 50x^4 - 185x^3 - 364x^2 + 636x + 864$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $864$ and $m$ a divisor of $50$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} 2 & 50 & -185 & -364 & 636 & 864 \\\\ & & 100 & -170 & -1068 & -864 \\\\ \\hline & 50 & -85 & -534 & -432 & 0 \\end{array}$",
                  "reason": "Synthetic division: the integers allowed by line 2 are tried first, and $2$ divides $864$; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $q(x) = 50x^3 - 85x^2 - 534x - 432$, so $f(x) = (x - 2)q(x)$.",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 2$ is a factor, and the bottom numbers before it, $50$, $-85$, $-534$ and $-432$, are the coefficients of the quotient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{9}{2} & 50 & -85 & -534 & -432 \\\\ & & 225 & 630 & 432 \\\\ \\hline & 50 & 140 & 96 & 0 \\end{array}$",
                  "reason": "Synthetic division: a root of $q(x)$ is a root of $f(x)$, and $\\dfrac{9}{2}$ has numerator $9$, a divisor of $864$, and denominator $2$, a divisor of $50$, so it is tried on $q(x)$; each bottom number after the first is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$q(x) = \\left(x - \\dfrac{9}{2}\\right)(50x^2 + 140x + 96)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{9}{2}$ is a factor, and the bottom numbers before it, $50$, $140$ and $96$, are the coefficients of the quotient."
                },
                {
                  "step": "$50x^2 + 140x + 96 = 2(25x^2 + 70x + 48)$",
                  "reason": "Taking out a common factor: each coefficient of $50x^2 + 140x + 96$ is a multiple of $2$."
                },
                {
                  "step": "$25x^2 + 70x + 48 = (5x + 8)(5x + 6)$",
                  "reason": "Factoring a quadratic: $(5x + 8)(5x + 6)$ multiplies out to $25x^2 + 70x + 48$."
                },
                {
                  "step": "$f(x) = 2(x - 2)\\left(x - \\dfrac{9}{2}\\right)(5x + 8)(5x + 6)$",
                  "reason": "Substitution: lines 6 to 8 take the place of $q(x)$ in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - 2 = 0$, $x - \\dfrac{9}{2} = 0$, $5x + 8 = 0$ or $5x + 6 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{2, \\dfrac{9}{2}, -\\dfrac{8}{5}, -\\dfrac{6}{5}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 10 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 40x^4 + 342x^3 + 623x^2 + 30x - 216$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-6, 1/2, -9/4, -4/5}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 40x^4 + 342x^3 + 623x^2 + 30x - 216$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-216$ and $m$ a divisor of $40$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} -6 & 40 & 342 & 623 & 30 & -216 \\\\ & & -240 & -612 & -66 & 216 \\\\ \\hline & 40 & 102 & 11 & -36 & 0 \\end{array}$",
                  "reason": "Synthetic division: the integers allowed by line 2 are tried first, and $-6$ divides $-216$; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $q(x) = 40x^3 + 102x^2 + 11x - 36$, so $f(x) = (x + 6)q(x)$.",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 6$ is a factor, and the bottom numbers before it, $40$, $102$, $11$ and $-36$, are the coefficients of the quotient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 40 & 102 & 11 & -36 \\\\ & & 20 & 61 & 36 \\\\ \\hline & 40 & 122 & 72 & 0 \\end{array}$",
                  "reason": "Synthetic division: a root of $q(x)$ is a root of $f(x)$, and $\\dfrac{1}{2}$ has numerator $1$, a divisor of $-216$, and denominator $2$, a divisor of $40$, so it is tried on $q(x)$; each bottom number after the first is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$q(x) = \\left(x - \\dfrac{1}{2}\\right)(40x^2 + 122x + 72)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{1}{2}$ is a factor, and the bottom numbers before it, $40$, $122$ and $72$, are the coefficients of the quotient."
                },
                {
                  "step": "$40x^2 + 122x + 72 = 2(20x^2 + 61x + 36)$",
                  "reason": "Taking out a common factor: each coefficient of $40x^2 + 122x + 72$ is a multiple of $2$."
                },
                {
                  "step": "$20x^2 + 61x + 36 = (4x + 9)(5x + 4)$",
                  "reason": "Factoring a quadratic: $(4x + 9)(5x + 4)$ multiplies out to $20x^2 + 61x + 36$."
                },
                {
                  "step": "$f(x) = 2(x + 6)\\left(x - \\dfrac{1}{2}\\right)(4x + 9)(5x + 4)$",
                  "reason": "Substitution: lines 6 to 8 take the place of $q(x)$ in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + 6 = 0$, $x - \\dfrac{1}{2} = 0$, $4x + 9 = 0$ or $5x + 4 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-6, \\dfrac{1}{2}, -\\dfrac{9}{4}, -\\dfrac{4}{5}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 10 is solved for $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $18x^3 + 27x^2 - 32x = -7$.",
            "lines": [
              {
                "step": "Solve $18x^3 + 27x^2 - 32x = -7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$18x^3 + 27x^2 - 32x + 7 = 0$",
                "reason": "Adding the same number to both sides: taking $-7$ from both sides leaves $0$ on the right."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $18x^3 + 27x^2 - 32x + 7$ has $k$ a divisor of $7$ and $m$ a divisor of $18$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 18 & 27 & -32 & 7 \\\\ & & 9 & 18 & -7 \\\\ \\hline & 18 & 36 & -14 & 0 \\end{array}$",
                "reason": "Synthetic division: $\\dfrac{1}{2}$ has numerator $1$, a divisor of $7$, and denominator $2$, a divisor of $18$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$18x^3 + 27x^2 - 32x + 7 = \\left(x - \\dfrac{1}{2}\\right)(18x^2 + 36x - 14)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{1}{2}$ is a factor, and the bottom numbers before it, $18$, $36$ and $-14$, are the coefficients of the quotient."
              },
              {
                "step": "$18x^2 + 36x - 14 = 2(9x^2 + 18x - 7)$",
                "reason": "Taking out a common factor: each coefficient of $18x^2 + 36x - 14$ is a multiple of $2$."
              },
              {
                "step": "$9x^2 + 18x - 7 = (3x + 7)(3x - 1)$",
                "reason": "Factoring a quadratic: $(3x + 7)(3x - 1)$ multiplies out to $9x^2 + 18x - 7$."
              },
              {
                "step": "$2\\left(x - \\dfrac{1}{2}\\right)(3x + 7)(3x - 1) = 0$",
                "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side of line 2."
              },
              {
                "step": "So $x - \\dfrac{1}{2} = 0$, $3x + 7 = 0$ or $3x - 1 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
              },
              {
                "step": "The solutions are $x = \\dfrac{1}{2}$, $x = -\\dfrac{7}{3}$ and $x = \\dfrac{1}{3}$.",
                "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $50x^3 + 145x^2 - 81 = 378x$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -9/2, x = -1/5, x = 9/5",
              "lines": [
                {
                  "step": "Solve $50x^3 + 145x^2 - 81 = 378x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$50x^3 + 145x^2 - 378x - 81 = 0$",
                  "reason": "Adding the same number to both sides: taking $378x$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $50x^3 + 145x^2 - 378x - 81$ has $k$ a divisor of $-81$ and $m$ a divisor of $50$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{9}{2} & 50 & 145 & -378 & -81 \\\\ & & -225 & 360 & 81 \\\\ \\hline & 50 & -80 & -18 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{9}{2}$ has numerator $-9$, a divisor of $-81$, and denominator $2$, a divisor of $50$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$50x^3 + 145x^2 - 378x - 81 = \\left(x + \\dfrac{9}{2}\\right)(50x^2 - 80x - 18)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{9}{2}$ is a factor, and the bottom numbers before it, $50$, $-80$ and $-18$, are the coefficients of the quotient."
                },
                {
                  "step": "$50x^2 - 80x - 18 = 2(25x^2 - 40x - 9)$",
                  "reason": "Taking out a common factor: each coefficient of $50x^2 - 80x - 18$ is a multiple of $2$."
                },
                {
                  "step": "$25x^2 - 40x - 9 = (5x + 1)(5x - 9)$",
                  "reason": "Factoring a quadratic: $(5x + 1)(5x - 9)$ multiplies out to $25x^2 - 40x - 9$."
                },
                {
                  "step": "$2\\left(x + \\dfrac{9}{2}\\right)(5x + 1)(5x - 9) = 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side of line 2."
                },
                {
                  "step": "So $x + \\dfrac{9}{2} = 0$, $5x + 1 = 0$ or $5x - 9 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The solutions are $x = -\\dfrac{9}{2}$, $x = -\\dfrac{1}{5}$ and $x = \\dfrac{9}{5}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Solve $48x^3 - 224x^2 + 301x = 120$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 8/3, x = 3/4, x = 5/4",
              "lines": [
                {
                  "step": "Solve $48x^3 - 224x^2 + 301x = 120$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$48x^3 - 224x^2 + 301x - 120 = 0$",
                  "reason": "Adding the same number to both sides: taking $120$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $48x^3 - 224x^2 + 301x - 120$ has $k$ a divisor of $-120$ and $m$ a divisor of $48$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{8}{3} & 48 & -224 & 301 & -120 \\\\ & & 128 & -256 & 120 \\\\ \\hline & 48 & -96 & 45 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{8}{3}$ has numerator $8$, a divisor of $-120$, and denominator $3$, a divisor of $48$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$48x^3 - 224x^2 + 301x - 120 = \\left(x - \\dfrac{8}{3}\\right)(48x^2 - 96x + 45)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{8}{3}$ is a factor, and the bottom numbers before it, $48$, $-96$ and $45$, are the coefficients of the quotient."
                },
                {
                  "step": "$48x^2 - 96x + 45 = 3(16x^2 - 32x + 15)$",
                  "reason": "Taking out a common factor: each coefficient of $48x^2 - 96x + 45$ is a multiple of $3$."
                },
                {
                  "step": "$16x^2 - 32x + 15 = (4x - 3)(4x - 5)$",
                  "reason": "Factoring a quadratic: $(4x - 3)(4x - 5)$ multiplies out to $16x^2 - 32x + 15$."
                },
                {
                  "step": "$3\\left(x - \\dfrac{8}{3}\\right)(4x - 3)(4x - 5) = 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side of line 2."
                },
                {
                  "step": "So $x - \\dfrac{8}{3} = 0$, $4x - 3 = 0$ or $4x - 5 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $3$ in front is not $0$."
                },
                {
                  "step": "The solutions are $x = \\dfrac{8}{3}$, $x = \\dfrac{3}{4}$ and $x = \\dfrac{5}{4}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Solve $40x^3 - 189x = 102x^2 - 196$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 7/2, x = 4/5, x = -7/4",
              "lines": [
                {
                  "step": "Solve $40x^3 - 189x = 102x^2 - 196$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$40x^3 - 102x^2 - 189x + 196 = 0$",
                  "reason": "Adding the same number to both sides: taking $102x^2 - 196$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $40x^3 - 102x^2 - 189x + 196$ has $k$ a divisor of $196$ and $m$ a divisor of $40$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{7}{2} & 40 & -102 & -189 & 196 \\\\ & & 140 & 133 & -196 \\\\ \\hline & 40 & 38 & -56 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{7}{2}$ has numerator $7$, a divisor of $196$, and denominator $2$, a divisor of $40$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$40x^3 - 102x^2 - 189x + 196 = \\left(x - \\dfrac{7}{2}\\right)(40x^2 + 38x - 56)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{7}{2}$ is a factor, and the bottom numbers before it, $40$, $38$ and $-56$, are the coefficients of the quotient."
                },
                {
                  "step": "$40x^2 + 38x - 56 = 2(20x^2 + 19x - 28)$",
                  "reason": "Taking out a common factor: each coefficient of $40x^2 + 38x - 56$ is a multiple of $2$."
                },
                {
                  "step": "$20x^2 + 19x - 28 = (5x - 4)(4x + 7)$",
                  "reason": "Factoring a quadratic: $(5x - 4)(4x + 7)$ multiplies out to $20x^2 + 19x - 28$."
                },
                {
                  "step": "$2\\left(x - \\dfrac{7}{2}\\right)(5x - 4)(4x + 7) = 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side of line 2."
                },
                {
                  "step": "So $x - \\dfrac{7}{2} = 0$, $5x - 4 = 0$ or $4x + 7 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The solutions are $x = \\dfrac{7}{2}$, $x = \\dfrac{4}{5}$ and $x = -\\dfrac{7}{4}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every root of $f(x) = x^3 + \\dfrac{23}{15}x^2 - \\dfrac{38}{9}x - \\dfrac{16}{5}$.",
            "lines": [
              {
                "step": "Find every root of $f(x) = x^3 + \\dfrac{23}{15}x^2 - \\dfrac{38}{9}x - \\dfrac{16}{5}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The equation $f(x) = 0$ holds exactly when $45x^3 + 69x^2 - 190x - 144 = 0$.",
                "reason": "Multiplying both sides by the same number: both sides of $f(x) = 0$ are multiplied by $45$, the least common denominator of the coefficients, which is not $0$."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $45x^3 + 69x^2 - 190x - 144$ has $k$ a divisor of $-144$ and $m$ a divisor of $45$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -\\dfrac{2}{3} & 45 & 69 & -190 & -144 \\\\ & & -30 & -26 & 144 \\\\ \\hline & 45 & 39 & -216 & 0 \\end{array}$",
                "reason": "Synthetic division: $-\\dfrac{2}{3}$ has numerator $-2$, a divisor of $-144$, and denominator $3$, a divisor of $45$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$45x^3 + 69x^2 - 190x - 144 = \\left(x + \\dfrac{2}{3}\\right)(45x^2 + 39x - 216)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{2}{3}$ is a factor, and the bottom numbers before it, $45$, $39$ and $-216$, are the coefficients of the quotient."
              },
              {
                "step": "$45x^2 + 39x - 216 = 3(15x^2 + 13x - 72)$",
                "reason": "Taking out a common factor: each coefficient of $45x^2 + 39x - 216$ is a multiple of $3$."
              },
              {
                "step": "$15x^2 + 13x - 72 = (3x + 8)(5x - 9)$",
                "reason": "Factoring a quadratic: $(3x + 8)(5x - 9)$ multiplies out to $15x^2 + 13x - 72$."
              },
              {
                "step": "$45x^3 + 69x^2 - 190x - 144 = 3\\left(x + \\dfrac{2}{3}\\right)(3x + 8)(5x - 9)$",
                "reason": "Substitution: lines 6 and 7 take the place of the quotient in line 5."
              },
              {
                "step": "So $45x^3 + 69x^2 - 190x - 144 = 0$ exactly when $x + \\dfrac{2}{3} = 0$, $3x + 8 = 0$ or $5x - 9 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $3$ in front is not $0$."
              },
              {
                "step": "The set of roots of $f(x)$ is $\\left\\{-\\dfrac{2}{3}, -\\dfrac{8}{3}, \\dfrac{9}{5}\\right\\}$.",
                "reason": "Isolating the variable: each equation of line 9 is solved for $x$, and by line 2 these numbers are the roots of $f(x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every root of $f(x) = x^3 + \\dfrac{139}{30}x^2 + \\dfrac{127}{30}x + \\dfrac{14}{15}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-7/2, -1/3, -4/5}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = x^3 + \\dfrac{139}{30}x^2 + \\dfrac{127}{30}x + \\dfrac{14}{15}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The equation $f(x) = 0$ holds exactly when $30x^3 + 139x^2 + 127x + 28 = 0$.",
                  "reason": "Multiplying both sides by the same number: both sides of $f(x) = 0$ are multiplied by $30$, the least common denominator of the coefficients, which is not $0$."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $30x^3 + 139x^2 + 127x + 28$ has $k$ a divisor of $28$ and $m$ a divisor of $30$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{7}{2} & 30 & 139 & 127 & 28 \\\\ & & -105 & -119 & -28 \\\\ \\hline & 30 & 34 & 8 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{7}{2}$ has numerator $-7$, a divisor of $28$, and denominator $2$, a divisor of $30$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$30x^3 + 139x^2 + 127x + 28 = \\left(x + \\dfrac{7}{2}\\right)(30x^2 + 34x + 8)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{7}{2}$ is a factor, and the bottom numbers before it, $30$, $34$ and $8$, are the coefficients of the quotient."
                },
                {
                  "step": "$30x^2 + 34x + 8 = 2(15x^2 + 17x + 4)$",
                  "reason": "Taking out a common factor: each coefficient of $30x^2 + 34x + 8$ is a multiple of $2$."
                },
                {
                  "step": "$15x^2 + 17x + 4 = (3x + 1)(5x + 4)$",
                  "reason": "Factoring a quadratic: $(3x + 1)(5x + 4)$ multiplies out to $15x^2 + 17x + 4$."
                },
                {
                  "step": "$30x^3 + 139x^2 + 127x + 28 = 2\\left(x + \\dfrac{7}{2}\\right)(3x + 1)(5x + 4)$",
                  "reason": "Substitution: lines 6 and 7 take the place of the quotient in line 5."
                },
                {
                  "step": "So $30x^3 + 139x^2 + 127x + 28 = 0$ exactly when $x + \\dfrac{7}{2} = 0$, $3x + 1 = 0$ or $5x + 4 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots of $f(x)$ is $\\left\\{-\\dfrac{7}{2}, -\\dfrac{1}{3}, -\\dfrac{4}{5}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$, and by line 2 these numbers are the roots of $f(x)$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = x^3 - \\dfrac{77}{60}x^2 - \\dfrac{103}{20}x + \\dfrac{63}{10}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7/3, 6/5, -9/4}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = x^3 - \\dfrac{77}{60}x^2 - \\dfrac{103}{20}x + \\dfrac{63}{10}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The equation $f(x) = 0$ holds exactly when $60x^3 - 77x^2 - 309x + 378 = 0$.",
                  "reason": "Multiplying both sides by the same number: both sides of $f(x) = 0$ are multiplied by $60$, the least common denominator of the coefficients, which is not $0$."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $60x^3 - 77x^2 - 309x + 378$ has $k$ a divisor of $378$ and $m$ a divisor of $60$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{7}{3} & 60 & -77 & -309 & 378 \\\\ & & 140 & 147 & -378 \\\\ \\hline & 60 & 63 & -162 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{7}{3}$ has numerator $7$, a divisor of $378$, and denominator $3$, a divisor of $60$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$60x^3 - 77x^2 - 309x + 378 = \\left(x - \\dfrac{7}{3}\\right)(60x^2 + 63x - 162)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{7}{3}$ is a factor, and the bottom numbers before it, $60$, $63$ and $-162$, are the coefficients of the quotient."
                },
                {
                  "step": "$60x^2 + 63x - 162 = 3(20x^2 + 21x - 54)$",
                  "reason": "Taking out a common factor: each coefficient of $60x^2 + 63x - 162$ is a multiple of $3$."
                },
                {
                  "step": "$20x^2 + 21x - 54 = (5x - 6)(4x + 9)$",
                  "reason": "Factoring a quadratic: $(5x - 6)(4x + 9)$ multiplies out to $20x^2 + 21x - 54$."
                },
                {
                  "step": "$60x^3 - 77x^2 - 309x + 378 = 3\\left(x - \\dfrac{7}{3}\\right)(5x - 6)(4x + 9)$",
                  "reason": "Substitution: lines 6 and 7 take the place of the quotient in line 5."
                },
                {
                  "step": "So $60x^3 - 77x^2 - 309x + 378 = 0$ exactly when $x - \\dfrac{7}{3} = 0$, $5x - 6 = 0$ or $4x + 9 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $3$ in front is not $0$."
                },
                {
                  "step": "The set of roots of $f(x)$ is $\\left\\{\\dfrac{7}{3}, \\dfrac{6}{5}, -\\dfrac{9}{4}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$, and by line 2 these numbers are the roots of $f(x)$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = x^3 - \\dfrac{19}{20}x^2 - \\dfrac{123}{40}x + \\dfrac{27}{8}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3/2, 5/4, -9/5}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = x^3 - \\dfrac{19}{20}x^2 - \\dfrac{123}{40}x + \\dfrac{27}{8}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The equation $f(x) = 0$ holds exactly when $40x^3 - 38x^2 - 123x + 135 = 0$.",
                  "reason": "Multiplying both sides by the same number: both sides of $f(x) = 0$ are multiplied by $40$, the least common denominator of the coefficients, which is not $0$."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $40x^3 - 38x^2 - 123x + 135$ has $k$ a divisor of $135$ and $m$ a divisor of $40$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{3}{2} & 40 & -38 & -123 & 135 \\\\ & & 60 & 33 & -135 \\\\ \\hline & 40 & 22 & -90 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{3}{2}$ has numerator $3$, a divisor of $135$, and denominator $2$, a divisor of $40$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$40x^3 - 38x^2 - 123x + 135 = \\left(x - \\dfrac{3}{2}\\right)(40x^2 + 22x - 90)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{3}{2}$ is a factor, and the bottom numbers before it, $40$, $22$ and $-90$, are the coefficients of the quotient."
                },
                {
                  "step": "$40x^2 + 22x - 90 = 2(20x^2 + 11x - 45)$",
                  "reason": "Taking out a common factor: each coefficient of $40x^2 + 22x - 90$ is a multiple of $2$."
                },
                {
                  "step": "$20x^2 + 11x - 45 = (4x - 5)(5x + 9)$",
                  "reason": "Factoring a quadratic: $(4x - 5)(5x + 9)$ multiplies out to $20x^2 + 11x - 45$."
                },
                {
                  "step": "$40x^3 - 38x^2 - 123x + 135 = 2\\left(x - \\dfrac{3}{2}\\right)(4x - 5)(5x + 9)$",
                  "reason": "Substitution: lines 6 and 7 take the place of the quotient in line 5."
                },
                {
                  "step": "So $40x^3 - 38x^2 - 123x + 135 = 0$ exactly when $x - \\dfrac{3}{2} = 0$, $4x - 5 = 0$ or $5x + 9 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots of $f(x)$ is $\\left\\{\\dfrac{3}{2}, \\dfrac{5}{4}, -\\dfrac{9}{5}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$, and by line 2 these numbers are the roots of $f(x)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every root of $f(x) = 30x^3 - 7x^2 - 177x + 70$.",
            "lines": [
              {
                "step": "Find every root of $f(x) = 30x^3 - 7x^2 - 177x + 70$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $70$ and $m$ a divisor of $30$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$f(0) = 70$",
                "reason": "Substituting a value: with $0$ in place of $x$, every term but the constant term is $0$."
              },
              {
                "step": "$f(1) = 30 - 7 - 177 + 70 = -84$",
                "reason": "Substituting a value: every power of $1$ is $1$, so $f(1)$ is the sum of the coefficients."
              },
              {
                "step": "So $f(x)$ has a root between $0$ and $1$.",
                "reason": "Sign change: $f(0) = 70$ is positive and $f(1) = -84$ is negative, so the polynomial has a root between $0$ and $1$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} \\dfrac{2}{5} & 30 & -7 & -177 & 70 \\\\ & & 12 & 2 & -70 \\\\ \\hline & 30 & 5 & -175 & 0 \\end{array}$",
                "reason": "Synthetic division: $\\dfrac{2}{5}$ lies between $0$ and $1$, where line 5 puts a root, and has numerator $2$, a divisor of $70$, and denominator $5$, a divisor of $30$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = \\left(x - \\dfrac{2}{5}\\right)(30x^2 + 5x - 175)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{2}{5}$ is a factor, and the bottom numbers before it, $30$, $5$ and $-175$, are the coefficients of the quotient."
              },
              {
                "step": "$30x^2 + 5x - 175 = 5(6x^2 + x - 35)$",
                "reason": "Taking out a common factor: each coefficient of $30x^2 + 5x - 175$ is a multiple of $5$."
              },
              {
                "step": "$6x^2 + x - 35 = (2x + 5)(3x - 7)$",
                "reason": "Factoring a quadratic: $(2x + 5)(3x - 7)$ multiplies out to $6x^2 + x - 35$."
              },
              {
                "step": "$f(x) = 5\\left(x - \\dfrac{2}{5}\\right)(2x + 5)(3x - 7)$",
                "reason": "Substitution: lines 8 and 9 take the place of the quotient in line 7."
              },
              {
                "step": "So $f(x) = 0$ exactly when $x - \\dfrac{2}{5} = 0$, $2x + 5 = 0$ or $3x - 7 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $5$ in front is not $0$."
              },
              {
                "step": "The set of roots is $\\left\\{\\dfrac{2}{5}, -\\dfrac{5}{2}, \\dfrac{7}{3}\\right\\}$.",
                "reason": "Isolating the variable: each equation of line 11 is solved for $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every root of $f(x) = 50x^3 - 105x^2 + 7x + 36$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{4/5, -1/2, 9/5}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 50x^3 - 105x^2 + 7x + 36$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $36$ and $m$ a divisor of $50$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$f(0) = 36$",
                  "reason": "Substituting a value: with $0$ in place of $x$, every term but the constant term is $0$."
                },
                {
                  "step": "$f(1) = 50 - 105 + 7 + 36 = -12$",
                  "reason": "Substituting a value: every power of $1$ is $1$, so $f(1)$ is the sum of the coefficients."
                },
                {
                  "step": "So $f(x)$ has a root between $0$ and $1$.",
                  "reason": "Sign change: $f(0) = 36$ is positive and $f(1) = -12$ is negative, so the polynomial has a root between $0$ and $1$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{4}{5} & 50 & -105 & 7 & 36 \\\\ & & 40 & -52 & -36 \\\\ \\hline & 50 & -65 & -45 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{4}{5}$ lies between $0$ and $1$, where line 5 puts a root, and has numerator $4$, a divisor of $36$, and denominator $5$, a divisor of $50$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x - \\dfrac{4}{5}\\right)(50x^2 - 65x - 45)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{4}{5}$ is a factor, and the bottom numbers before it, $50$, $-65$ and $-45$, are the coefficients of the quotient."
                },
                {
                  "step": "$50x^2 - 65x - 45 = 5(10x^2 - 13x - 9)$",
                  "reason": "Taking out a common factor: each coefficient of $50x^2 - 65x - 45$ is a multiple of $5$."
                },
                {
                  "step": "$10x^2 - 13x - 9 = (2x + 1)(5x - 9)$",
                  "reason": "Factoring a quadratic: $(2x + 1)(5x - 9)$ multiplies out to $10x^2 - 13x - 9$."
                },
                {
                  "step": "$f(x) = 5\\left(x - \\dfrac{4}{5}\\right)(2x + 1)(5x - 9)$",
                  "reason": "Substitution: lines 8 and 9 take the place of the quotient in line 7."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - \\dfrac{4}{5} = 0$, $2x + 1 = 0$ or $5x - 9 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $5$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{\\dfrac{4}{5}, -\\dfrac{1}{2}, \\dfrac{9}{5}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 11 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 60x^3 - 167x^2 + 24x + 108$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-2/3, 9/4, 6/5}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 60x^3 - 167x^2 + 24x + 108$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $108$ and $m$ a divisor of $60$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$f(-1) = -60 - 167 - 24 + 108 = -143$",
                  "reason": "Substituting a value: an odd power of $-1$ is $-1$ and an even power is $1$, so the terms of odd degree change sign."
                },
                {
                  "step": "$f(0) = 108$",
                  "reason": "Substituting a value: with $0$ in place of $x$, every term but the constant term is $0$."
                },
                {
                  "step": "So $f(x)$ has a root between $-1$ and $0$.",
                  "reason": "Sign change: $f(-1) = -143$ is negative and $f(0) = 108$ is positive, so the polynomial has a root between $-1$ and $0$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{2}{3} & 60 & -167 & 24 & 108 \\\\ & & -40 & 138 & -108 \\\\ \\hline & 60 & -207 & 162 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{2}{3}$ lies between $-1$ and $0$, where line 5 puts a root, and has numerator $-2$, a divisor of $108$, and denominator $3$, a divisor of $60$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x + \\dfrac{2}{3}\\right)(60x^2 - 207x + 162)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{2}{3}$ is a factor, and the bottom numbers before it, $60$, $-207$ and $162$, are the coefficients of the quotient."
                },
                {
                  "step": "$60x^2 - 207x + 162 = 3(20x^2 - 69x + 54)$",
                  "reason": "Taking out a common factor: each coefficient of $60x^2 - 207x + 162$ is a multiple of $3$."
                },
                {
                  "step": "$20x^2 - 69x + 54 = (4x - 9)(5x - 6)$",
                  "reason": "Factoring a quadratic: $(4x - 9)(5x - 6)$ multiplies out to $20x^2 - 69x + 54$."
                },
                {
                  "step": "$f(x) = 3\\left(x + \\dfrac{2}{3}\\right)(4x - 9)(5x - 6)$",
                  "reason": "Substitution: lines 8 and 9 take the place of the quotient in line 7."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + \\dfrac{2}{3} = 0$, $4x - 9 = 0$ or $5x - 6 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $3$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-\\dfrac{2}{3}, \\dfrac{9}{4}, \\dfrac{6}{5}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 11 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 16x^3 + 36x^2 + 8x - 15$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1/2, -3/2, -5/4}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 16x^3 + 36x^2 + 8x - 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-15$ and $m$ a divisor of $16$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$f(0) = -15$",
                  "reason": "Substituting a value: with $0$ in place of $x$, every term but the constant term is $0$."
                },
                {
                  "step": "$f(1) = 16 + 36 + 8 - 15 = 45$",
                  "reason": "Substituting a value: every power of $1$ is $1$, so $f(1)$ is the sum of the coefficients."
                },
                {
                  "step": "So $f(x)$ has a root between $0$ and $1$.",
                  "reason": "Sign change: $f(0) = -15$ is negative and $f(1) = 45$ is positive, so the polynomial has a root between $0$ and $1$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 16 & 36 & 8 & -15 \\\\ & & 8 & 22 & 15 \\\\ \\hline & 16 & 44 & 30 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{1}{2}$ lies between $0$ and $1$, where line 5 puts a root, and has numerator $1$, a divisor of $-15$, and denominator $2$, a divisor of $16$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x - \\dfrac{1}{2}\\right)(16x^2 + 44x + 30)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{1}{2}$ is a factor, and the bottom numbers before it, $16$, $44$ and $30$, are the coefficients of the quotient."
                },
                {
                  "step": "$16x^2 + 44x + 30 = 2(8x^2 + 22x + 15)$",
                  "reason": "Taking out a common factor: each coefficient of $16x^2 + 44x + 30$ is a multiple of $2$."
                },
                {
                  "step": "$8x^2 + 22x + 15 = (2x + 3)(4x + 5)$",
                  "reason": "Factoring a quadratic: $(2x + 3)(4x + 5)$ multiplies out to $8x^2 + 22x + 15$."
                },
                {
                  "step": "$f(x) = 2\\left(x - \\dfrac{1}{2}\\right)(2x + 3)(4x + 5)$",
                  "reason": "Substitution: lines 8 and 9 take the place of the quotient in line 7."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - \\dfrac{1}{2} = 0$, $2x + 3 = 0$ or $4x + 5 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{\\dfrac{1}{2}, -\\dfrac{3}{2}, -\\dfrac{5}{4}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 11 is solved for $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every root of $f(x) = 20x^3 - 93x^2 + 116x - 35$.",
            "lines": [
              {
                "step": "Find every root of $f(x) = 20x^3 - 93x^2 + 116x - 35$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-35$ and $m$ a divisor of $20$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} \\dfrac{7}{5} & 20 & -93 & 116 & -35 \\\\ & & 28 & -91 & 35 \\\\ \\hline & 20 & -65 & 25 & 0 \\end{array}$",
                "reason": "Synthetic division: $\\dfrac{7}{5}$ has numerator $7$, a divisor of $-35$, and denominator $5$, a divisor of $20$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = \\left(x - \\dfrac{7}{5}\\right)(20x^2 - 65x + 25)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{7}{5}$ is a factor, and the bottom numbers before it, $20$, $-65$ and $25$, are the coefficients of the quotient."
              },
              {
                "step": "$20x^2 - 65x + 25 = 5(4x^2 - 13x + 5)$",
                "reason": "Taking out a common factor: each coefficient of $20x^2 - 65x + 25$ is a multiple of $5$."
              },
              {
                "step": "$f(x) = 5\\left(x - \\dfrac{7}{5}\\right)(4x^2 - 13x + 5)$",
                "reason": "Substitution: line 5 takes the place of the quotient in line 4."
              },
              {
                "step": "So $f(x) = 0$ exactly when $x - \\dfrac{7}{5} = 0$ or $4x^2 - 13x + 5 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $5$ in front is not $0$."
              },
              {
                "step": "$a = 4$, $b = -13$, $c = 5$",
                "reason": "Quadratic formula: the equation $4x^2 - 13x + 5 = 0$ of line 7 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
              },
              {
                "step": "$b^2 - 4ac = (-13)^2 - 4 \\cdot 4 \\cdot 5 = 89$",
                "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
              },
              {
                "step": "$x = \\dfrac{13 \\pm \\sqrt{89}}{8}$",
                "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the roots of $4x^2 - 13x + 5 = 0$, with $-b = 13$ and $2a = 8$."
              },
              {
                "step": "The set of roots is $\\left\\{\\dfrac{7}{5}, \\dfrac{13 + \\sqrt{89}}{8}, \\dfrac{13 - \\sqrt{89}}{8}\\right\\}$.",
                "reason": "Isolating the variable: $x - \\dfrac{7}{5} = 0$ of line 7 gives $x = \\dfrac{7}{5}$, and line 10 gives the two roots of the quadratic, one with $+$ and one with $-$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every root of $f(x) = 6x^3 - 37x^2 - 66x - 8$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4/3, (15+sqrt(241))/4, (15-sqrt(241))/4}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 6x^3 - 37x^2 - 66x - 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-8$ and $m$ a divisor of $6$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{4}{3} & 6 & -37 & -66 & -8 \\\\ & & -8 & 60 & 8 \\\\ \\hline & 6 & -45 & -6 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{4}{3}$ has numerator $-4$, a divisor of $-8$, and denominator $3$, a divisor of $6$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x + \\dfrac{4}{3}\\right)(6x^2 - 45x - 6)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{4}{3}$ is a factor, and the bottom numbers before it, $6$, $-45$ and $-6$, are the coefficients of the quotient."
                },
                {
                  "step": "$6x^2 - 45x - 6 = 3(2x^2 - 15x - 2)$",
                  "reason": "Taking out a common factor: each coefficient of $6x^2 - 45x - 6$ is a multiple of $3$."
                },
                {
                  "step": "$f(x) = 3\\left(x + \\dfrac{4}{3}\\right)(2x^2 - 15x - 2)$",
                  "reason": "Substitution: line 5 takes the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + \\dfrac{4}{3} = 0$ or $2x^2 - 15x - 2 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $3$ in front is not $0$."
                },
                {
                  "step": "$a = 2$, $b = -15$, $c = -2$",
                  "reason": "Quadratic formula: the equation $2x^2 - 15x - 2 = 0$ of line 7 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-15)^2 - 4 \\cdot 2 \\cdot (-2) = 241$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{15 \\pm \\sqrt{241}}{4}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the roots of $2x^2 - 15x - 2 = 0$, with $-b = 15$ and $2a = 4$."
                },
                {
                  "step": "The set of roots is $\\left\\{-\\dfrac{4}{3}, \\dfrac{15 + \\sqrt{241}}{4}, \\dfrac{15 - \\sqrt{241}}{4}\\right\\}$.",
                  "reason": "Isolating the variable: $x + \\dfrac{4}{3} = 0$ of line 7 gives $x = -\\dfrac{4}{3}$, and line 10 gives the two roots of the quadratic, one with $+$ and one with $-$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 9x^3 + 48x^2 + 10x - 75$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-5/3, (-11+sqrt(301))/6, (-11-sqrt(301))/6}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 9x^3 + 48x^2 + 10x - 75$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-75$ and $m$ a divisor of $9$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{5}{3} & 9 & 48 & 10 & -75 \\\\ & & -15 & -55 & 75 \\\\ \\hline & 9 & 33 & -45 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{5}{3}$ has numerator $-5$, a divisor of $-75$, and denominator $3$, a divisor of $9$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x + \\dfrac{5}{3}\\right)(9x^2 + 33x - 45)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{5}{3}$ is a factor, and the bottom numbers before it, $9$, $33$ and $-45$, are the coefficients of the quotient."
                },
                {
                  "step": "$9x^2 + 33x - 45 = 3(3x^2 + 11x - 15)$",
                  "reason": "Taking out a common factor: each coefficient of $9x^2 + 33x - 45$ is a multiple of $3$."
                },
                {
                  "step": "$f(x) = 3\\left(x + \\dfrac{5}{3}\\right)(3x^2 + 11x - 15)$",
                  "reason": "Substitution: line 5 takes the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + \\dfrac{5}{3} = 0$ or $3x^2 + 11x - 15 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $3$ in front is not $0$."
                },
                {
                  "step": "$a = 3$, $b = 11$, $c = -15$",
                  "reason": "Quadratic formula: the equation $3x^2 + 11x - 15 = 0$ of line 7 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = 11^2 - 4 \\cdot 3 \\cdot (-15) = 301$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{-11 \\pm \\sqrt{301}}{6}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the roots of $3x^2 + 11x - 15 = 0$, with $-b = -11$ and $2a = 6$."
                },
                {
                  "step": "The set of roots is $\\left\\{-\\dfrac{5}{3}, \\dfrac{-11 + \\sqrt{301}}{6}, \\dfrac{-11 - \\sqrt{301}}{6}\\right\\}$.",
                  "reason": "Isolating the variable: $x + \\dfrac{5}{3} = 0$ of line 7 gives $x = -\\dfrac{5}{3}$, and line 10 gives the two roots of the quadratic, one with $+$ and one with $-$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 8x^3 + 42x^2 - 7x - 98$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-7/4, (-7+sqrt(161))/4, (-7-sqrt(161))/4}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 8x^3 + 42x^2 - 7x - 98$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-98$ and $m$ a divisor of $8$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{7}{4} & 8 & 42 & -7 & -98 \\\\ & & -14 & -49 & 98 \\\\ \\hline & 8 & 28 & -56 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{7}{4}$ has numerator $-7$, a divisor of $-98$, and denominator $4$, a divisor of $8$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x + \\dfrac{7}{4}\\right)(8x^2 + 28x - 56)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{7}{4}$ is a factor, and the bottom numbers before it, $8$, $28$ and $-56$, are the coefficients of the quotient."
                },
                {
                  "step": "$8x^2 + 28x - 56 = 4(2x^2 + 7x - 14)$",
                  "reason": "Taking out a common factor: each coefficient of $8x^2 + 28x - 56$ is a multiple of $4$."
                },
                {
                  "step": "$f(x) = 4\\left(x + \\dfrac{7}{4}\\right)(2x^2 + 7x - 14)$",
                  "reason": "Substitution: line 5 takes the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + \\dfrac{7}{4} = 0$ or $2x^2 + 7x - 14 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $4$ in front is not $0$."
                },
                {
                  "step": "$a = 2$, $b = 7$, $c = -14$",
                  "reason": "Quadratic formula: the equation $2x^2 + 7x - 14 = 0$ of line 7 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = 7^2 - 4 \\cdot 2 \\cdot (-14) = 161$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{-7 \\pm \\sqrt{161}}{4}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the roots of $2x^2 + 7x - 14 = 0$, with $-b = -7$ and $2a = 4$."
                },
                {
                  "step": "The set of roots is $\\left\\{-\\dfrac{7}{4}, \\dfrac{-7 + \\sqrt{161}}{4}, \\dfrac{-7 - \\sqrt{161}}{4}\\right\\}$.",
                  "reason": "Isolating the variable: $x + \\dfrac{7}{4} = 0$ of line 7 gives $x = -\\dfrac{7}{4}$, and line 10 gives the two roots of the quadratic, one with $+$ and one with $-$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every complex root of $f(x) = 8x^3 - 50x^2 + 101x - 171$.",
            "lines": [
              {
                "step": "Find every complex root of $f(x) = 8x^3 - 50x^2 + 101x - 171$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-171$ and $m$ a divisor of $8$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} \\dfrac{9}{2} & 8 & -50 & 101 & -171 \\\\ & & 36 & -63 & 171 \\\\ \\hline & 8 & -14 & 38 & 0 \\end{array}$",
                "reason": "Synthetic division: $\\dfrac{9}{2}$ has numerator $9$, a divisor of $-171$, and denominator $2$, a divisor of $8$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = \\left(x - \\dfrac{9}{2}\\right)(8x^2 - 14x + 38)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{9}{2}$ is a factor, and the bottom numbers before it, $8$, $-14$ and $38$, are the coefficients of the quotient."
              },
              {
                "step": "$8x^2 - 14x + 38 = 2(4x^2 - 7x + 19)$",
                "reason": "Taking out a common factor: each coefficient of $8x^2 - 14x + 38$ is a multiple of $2$."
              },
              {
                "step": "$f(x) = 2\\left(x - \\dfrac{9}{2}\\right)(4x^2 - 7x + 19)$",
                "reason": "Substitution: line 5 takes the place of the quotient in line 4."
              },
              {
                "step": "So $f(x) = 0$ exactly when $x - \\dfrac{9}{2} = 0$ or $4x^2 - 7x + 19 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $2$ in front is not $0$."
              },
              {
                "step": "$a = 4$, $b = -7$, $c = 19$",
                "reason": "Quadratic formula: the equation $4x^2 - 7x + 19 = 0$ of line 7 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
              },
              {
                "step": "$b^2 - 4ac = (-7)^2 - 4 \\cdot 4 \\cdot 19 = -255$",
                "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
              },
              {
                "step": "$x = \\dfrac{7 \\pm \\sqrt{-255}}{8}$",
                "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the roots of $4x^2 - 7x + 19 = 0$, with $-b = 7$ and $2a = 8$."
              },
              {
                "step": "$\\sqrt{-255} = i\\sqrt{255}$",
                "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              },
              {
                "step": "The set of complex roots is $\\left\\{\\dfrac{9}{2}, \\dfrac{7 + i\\sqrt{255}}{8}, \\dfrac{7 - i\\sqrt{255}}{8}\\right\\}$.",
                "reason": "Isolating the variable: $x - \\dfrac{9}{2} = 0$ of line 7 gives $x = \\dfrac{9}{2}$, and line 10 with line 11 gives the two roots of the quadratic, one with $+$ and one with $-$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex root of $f(x) = 15x^3 - 71x^2 + 106x - 32$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{2/5, (13+i*sqrt(23))/6, (13-i*sqrt(23))/6}",
              "lines": [
                {
                  "step": "Find every complex root of $f(x) = 15x^3 - 71x^2 + 106x - 32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-32$ and $m$ a divisor of $15$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{2}{5} & 15 & -71 & 106 & -32 \\\\ & & 6 & -26 & 32 \\\\ \\hline & 15 & -65 & 80 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{2}{5}$ has numerator $2$, a divisor of $-32$, and denominator $5$, a divisor of $15$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x - \\dfrac{2}{5}\\right)(15x^2 - 65x + 80)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{2}{5}$ is a factor, and the bottom numbers before it, $15$, $-65$ and $80$, are the coefficients of the quotient."
                },
                {
                  "step": "$15x^2 - 65x + 80 = 5(3x^2 - 13x + 16)$",
                  "reason": "Taking out a common factor: each coefficient of $15x^2 - 65x + 80$ is a multiple of $5$."
                },
                {
                  "step": "$f(x) = 5\\left(x - \\dfrac{2}{5}\\right)(3x^2 - 13x + 16)$",
                  "reason": "Substitution: line 5 takes the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - \\dfrac{2}{5} = 0$ or $3x^2 - 13x + 16 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $5$ in front is not $0$."
                },
                {
                  "step": "$a = 3$, $b = -13$, $c = 16$",
                  "reason": "Quadratic formula: the equation $3x^2 - 13x + 16 = 0$ of line 7 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-13)^2 - 4 \\cdot 3 \\cdot 16 = -23$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{13 \\pm \\sqrt{-23}}{6}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the roots of $3x^2 - 13x + 16 = 0$, with $-b = 13$ and $2a = 6$."
                },
                {
                  "step": "$\\sqrt{-23} = i\\sqrt{23}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "The set of complex roots is $\\left\\{\\dfrac{2}{5}, \\dfrac{13 + i\\sqrt{23}}{6}, \\dfrac{13 - i\\sqrt{23}}{6}\\right\\}$.",
                  "reason": "Isolating the variable: $x - \\dfrac{2}{5} = 0$ of line 7 gives $x = \\dfrac{2}{5}$, and line 10 with line 11 gives the two roots of the quadratic, one with $+$ and one with $-$."
                }
              ]
            },
            {
              "prompt": "Find every complex root of $f(x) = 12x^3 - 27x^2 + 83x - 85$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{5/4, (3+i*sqrt(195))/6, (3-i*sqrt(195))/6}",
              "lines": [
                {
                  "step": "Find every complex root of $f(x) = 12x^3 - 27x^2 + 83x - 85$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-85$ and $m$ a divisor of $12$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{5}{4} & 12 & -27 & 83 & -85 \\\\ & & 15 & -15 & 85 \\\\ \\hline & 12 & -12 & 68 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{5}{4}$ has numerator $5$, a divisor of $-85$, and denominator $4$, a divisor of $12$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x - \\dfrac{5}{4}\\right)(12x^2 - 12x + 68)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{5}{4}$ is a factor, and the bottom numbers before it, $12$, $-12$ and $68$, are the coefficients of the quotient."
                },
                {
                  "step": "$12x^2 - 12x + 68 = 4(3x^2 - 3x + 17)$",
                  "reason": "Taking out a common factor: each coefficient of $12x^2 - 12x + 68$ is a multiple of $4$."
                },
                {
                  "step": "$f(x) = 4\\left(x - \\dfrac{5}{4}\\right)(3x^2 - 3x + 17)$",
                  "reason": "Substitution: line 5 takes the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - \\dfrac{5}{4} = 0$ or $3x^2 - 3x + 17 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $4$ in front is not $0$."
                },
                {
                  "step": "$a = 3$, $b = -3$, $c = 17$",
                  "reason": "Quadratic formula: the equation $3x^2 - 3x + 17 = 0$ of line 7 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-3)^2 - 4 \\cdot 3 \\cdot 17 = -195$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{3 \\pm \\sqrt{-195}}{6}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the roots of $3x^2 - 3x + 17 = 0$, with $-b = 3$ and $2a = 6$."
                },
                {
                  "step": "$\\sqrt{-195} = i\\sqrt{195}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "The set of complex roots is $\\left\\{\\dfrac{5}{4}, \\dfrac{3 + i\\sqrt{195}}{6}, \\dfrac{3 - i\\sqrt{195}}{6}\\right\\}$.",
                  "reason": "Isolating the variable: $x - \\dfrac{5}{4} = 0$ of line 7 gives $x = \\dfrac{5}{4}$, and line 10 with line 11 gives the two roots of the quadratic, one with $+$ and one with $-$."
                }
              ]
            },
            {
              "prompt": "Find every complex root of $f(x) = 20x^3 + 79x^2 + 90x + 15$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1/5, (-15+i*sqrt(15))/8, (-15-i*sqrt(15))/8}",
              "lines": [
                {
                  "step": "Find every complex root of $f(x) = 20x^3 + 79x^2 + 90x + 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $15$ and $m$ a divisor of $20$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{5} & 20 & 79 & 90 & 15 \\\\ & & -4 & -15 & -15 \\\\ \\hline & 20 & 75 & 75 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{1}{5}$ has numerator $-1$, a divisor of $15$, and denominator $5$, a divisor of $20$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = \\left(x + \\dfrac{1}{5}\\right)(20x^2 + 75x + 75)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{1}{5}$ is a factor, and the bottom numbers before it, $20$, $75$ and $75$, are the coefficients of the quotient."
                },
                {
                  "step": "$20x^2 + 75x + 75 = 5(4x^2 + 15x + 15)$",
                  "reason": "Taking out a common factor: each coefficient of $20x^2 + 75x + 75$ is a multiple of $5$."
                },
                {
                  "step": "$f(x) = 5\\left(x + \\dfrac{1}{5}\\right)(4x^2 + 15x + 15)$",
                  "reason": "Substitution: line 5 takes the place of the quotient in line 4."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + \\dfrac{1}{5} = 0$ or $4x^2 + 15x + 15 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$, and the number $5$ in front is not $0$."
                },
                {
                  "step": "$a = 4$, $b = 15$, $c = 15$",
                  "reason": "Quadratic formula: the equation $4x^2 + 15x + 15 = 0$ of line 7 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = 15^2 - 4 \\cdot 4 \\cdot 15 = -15$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{-15 \\pm \\sqrt{-15}}{8}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the roots of $4x^2 + 15x + 15 = 0$, with $-b = -15$ and $2a = 8$."
                },
                {
                  "step": "$\\sqrt{-15} = i\\sqrt{15}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "The set of complex roots is $\\left\\{-\\dfrac{1}{5}, \\dfrac{-15 + i\\sqrt{15}}{8}, \\dfrac{-15 - i\\sqrt{15}}{8}\\right\\}$.",
                  "reason": "Isolating the variable: $x + \\dfrac{1}{5} = 0$ of line 7 gives $x = -\\dfrac{1}{5}$, and line 10 with line 11 gives the two roots of the quadratic, one with $+$ and one with $-$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t198-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the roots of $f(x) = 45x^3 - 99x^2 + 64x - 12$, and write that line right.",
            "given": [
              "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-12$ and $m$ a divisor of $45$.",
              "$\\begin{array}{r|rrrr} \\dfrac{1}{3} & 45 & -99 & 64 & -12 \\\\ & & 15 & -28 & 12 \\\\ \\hline & 45 & -84 & 36 & 0 \\end{array}$",
              "$f(x) = \\left(x - \\dfrac{1}{3}\\right)(45x^2 - 84x + 36)$",
              "$45x^2 - 84x + 36 = 3(15x^2 + 28x + 12)$",
              "$15x^2 + 28x + 12 = (3x + 2)(5x + 6)$",
              "$x = \\dfrac{1}{3}$, $x = -\\dfrac{2}{3}$ or $x = -\\dfrac{6}{5}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the roots of $f(x) = 45x^3 - 99x^2 + 64x - 12$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 gives the coefficient of $x$ in the bracket as $28$, but $-84 \\div 3 = -28$.",
                "reason": "A sign lost: a negative number divided by a positive number is negative."
              },
              {
                "step": "The lines above line 4 are right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
                "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 4."
              },
              {
                "step": "Line 4 written right is $45x^2 - 84x + 36 = 3(15x^2 - 28x + 12)$.",
                "reason": "Taking out a common factor: each coefficient of $45x^2 - 84x + 36$ is divided by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the roots of $f(x) = 30x^3 + 151x^2 + 105x - 196$, and write that line right.",
              "given": [
                "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-196$ and $m$ a divisor of $30$.",
                "$\\begin{array}{r|rrrr} -\\dfrac{7}{2} & 30 & 151 & 105 & -196 \\\\ & & -105 & -161 & 196 \\\\ \\hline & 30 & 46 & -56 & 0 \\end{array}$",
                "$f(x) = \\left(x + \\dfrac{7}{2}\\right)(30x^2 + 46x - 56)$",
                "$30x^2 + 46x - 56 = 2(15x^2 + 23x - 28)$",
                "$15x^2 + 23x - 28 = (5x - 4)(3x + 7)$",
                "$x = -\\dfrac{7}{2}$, $x = \\dfrac{4}{5}$ or $x = \\dfrac{7}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: x = -7/2, x = 4/5, x = -7/3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the roots of $f(x) = 30x^3 + 151x^2 + 105x - 196$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 gives the root of $3x + 7 = 0$ as $\\dfrac{7}{3}$, but it is $-\\dfrac{7}{3}$.",
                  "reason": "A sign lost: taking $7$ from both sides of $3x + 7 = 0$ leaves $3x = -7$, and dividing by $3$ keeps the minus sign."
                },
                {
                  "step": "The lines above line 6 are right, so line 6 is the first wrong line.",
                  "reason": "Transitive property: each line above line 6 takes its values from the lines before it, and line 1 from the problem."
                },
                {
                  "step": "Line 6 written right is $x = -\\dfrac{7}{2}$, $x = \\dfrac{4}{5}$ or $x = -\\dfrac{7}{3}$.",
                  "reason": "Isolating the variable: each bracket of line 5 and the factor of line 3, set equal to $0$, is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the roots of $f(x) = 18x^3 + 45x^2 - 44x - 96$, and write that line right.",
              "given": [
                "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-96$ and $m$ a divisor of $18$.",
                "$\\begin{array}{r|rrrr} \\dfrac{3}{2} & 18 & 45 & -44 & -96 \\\\ & & 27 & 108 & 96 \\\\ \\hline & 18 & 72 & 64 & 0 \\end{array}$",
                "$f(x) = \\left(x + \\dfrac{3}{2}\\right)(18x^2 + 72x + 64)$",
                "$18x^2 + 72x + 64 = 2(9x^2 + 36x + 32)$",
                "$9x^2 + 36x + 32 = (3x + 8)(3x + 4)$",
                "$x = -\\dfrac{3}{2}$, $x = -\\dfrac{8}{3}$ or $x = -\\dfrac{4}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(x) = (x-3/2)*(18*x^2+72*x+64)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the roots of $f(x) = 18x^3 + 45x^2 - 44x - 96$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes the factor for the number $\\dfrac{3}{2}$ on the left of line 2 as $x + \\dfrac{3}{2}$, but it is $x - \\dfrac{3}{2}$.",
                  "reason": "A sign lost: synthetic division with a number on the left divides by $x$ minus that number, so the factor has a minus sign."
                },
                {
                  "step": "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 3."
                },
                {
                  "step": "Line 3 written right is $f(x) = \\left(x - \\dfrac{3}{2}\\right)(18x^2 + 72x + 64)$.",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{3}{2}$ is a factor, and the bottom numbers before it, $18$, $72$ and $64$, are the coefficients of the quotient."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the roots of $f(x) = 60x^3 - 161x^2 + 135x - 36$, and write that line right.",
              "given": [
                "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-36$ and $m$ a divisor of $60$.",
                "$\\begin{array}{r|rrrr} \\dfrac{4}{3} & 60 & -161 & 135 & -36 \\\\ & & 80 & -108 & 36 \\\\ \\hline & 60 & -81 & 27 & 0 \\end{array}$",
                "$f(x) = \\left(x - \\dfrac{4}{3}\\right)(60x^2 - 81x + 27)$",
                "$60x^2 - 81x + 27 = 3(20x^2 - 27x + 9)$",
                "$20x^2 - 27x + 9 = (4x - 3)(5x + 3)$",
                "$x = \\dfrac{4}{3}$, $x = \\dfrac{3}{4}$ or $x = -\\dfrac{3}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 20*x^2-27*x+9 = (4*x-3)*(5*x-3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the roots of $f(x) = 60x^3 - 161x^2 + 135x - 36$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes the bracket $5x - 3$ as $5x + 3$, but $(4x - 3)(5x + 3)$ multiplies out to $20x^2 - 3x - 9$, not $20x^2 - 27x + 9$.",
                  "reason": "A sign lost: the bracket $5x - 3$ has a minus sign before $3$, and without it the product of the brackets is not the quadratic."
                },
                {
                  "step": "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 5."
                },
                {
                  "step": "Line 5 written right is $20x^2 - 27x + 9 = (4x - 3)(5x - 3)$.",
                  "reason": "Factoring a quadratic: $(4x - 3)(5x - 3)$ multiplies out to $20x^2 - 27x + 9$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t198-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $30$ times the cube of a number $x$ and $13$ times its square is equal to the sum of $178$ times $x$ and $105$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $30$ times the cube of a number $x$ and $13$ times its square is equal to the sum of $178$ times $x$ and $105$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The left side, the sum of $30$ times the cube of $x$ and $13$ times its square, is $30x^3 + 13x^2$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation in the sentence's order, and the cube and the square of $x$ are $x^3$ and $x^2$."
              },
              {
                "step": "The right side, the sum of $178$ times $x$ and $105$, is $178x + 105$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation in the sentence's order."
              },
              {
                "step": "The whole sentence is $30x^3 + 13x^2 = 178x + 105$.",
                "reason": "Writing a sentence as an equation: the words \"is equal to\" stand where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $18$ times the cube of a number $x$ and $81$ times its square equals $9$ less than $2$ times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "18*x^3-81*x^2 = 2*x-9",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $18$ times the cube of a number $x$ and $81$ times its square equals $9$ less than $2$ times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side, the difference of $18$ times the cube of $x$ and $81$ times its square, is $18x^3 - 81x^2$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation in the sentence's order, and the cube and the square of $x$ are $x^3$ and $x^2$."
                },
                {
                  "step": "The right side, $9$ less than $2$ times $x$, is $2x - 9$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation in the sentence's order."
                },
                {
                  "step": "The whole sentence is $18x^3 - 81x^2 = 2x - 9$.",
                  "reason": "Writing a sentence as an equation: the words \"equals\" stand where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: When $108$ is added to $20$ times the cube of a number $x$, the result is the sum of $19$ times its square and $96$ times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "20*x^3+108 = 19*x^2+96*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: When $108$ is added to $20$ times the cube of a number $x$, the result is the sum of $19$ times its square and $96$ times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side, $108$ added to $20$ times the cube of $x$, is $20x^3 + 108$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation in the sentence's order, and the cube of $x$ is $x^3$."
                },
                {
                  "step": "The right side, the sum of $19$ times its square and $96$ times $x$, is $19x^2 + 96x$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation in the sentence's order, and \"its square\" is the square of $x$."
                },
                {
                  "step": "The whole sentence is $20x^3 + 108 = 19x^2 + 96x$.",
                  "reason": "Writing a sentence as an equation: the words \"the result is\" stand where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: Taking $252$ from $10$ times the cube of a number $x$ leaves the difference of $93$ times its square and $275$ times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "10*x^3-252 = 93*x^2-275*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: Taking $252$ from $10$ times the cube of a number $x$ leaves the difference of $93$ times its square and $275$ times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side, $252$ taken from $10$ times the cube of $x$, is $10x^3 - 252$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation in the sentence's order, and the cube of $x$ is $x^3$."
                },
                {
                  "step": "The right side, the difference of $93$ times its square and $275$ times $x$, is $93x^2 - 275x$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation in the sentence's order, and \"its square\" is the square of $x$."
                },
                {
                  "step": "The whole sentence is $10x^3 - 252 = 93x^2 - 275x$.",
                  "reason": "Writing a sentence as an equation: the words \"leaves\" stand where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t198-k4",
      "forms": [
        {
          "example": {
            "problem": "Solve $16x^3 + 132x^2 + 320x + 225 \\ge 0$.",
            "lines": [
              {
                "step": "Solve $16x^3 + 132x^2 + 320x + 225 \\ge 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $16x^3 + 132x^2 + 320x + 225$ has $k$ a divisor of $225$ and $m$ a divisor of $16$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -\\dfrac{5}{2} & 16 & 132 & 320 & 225 \\\\ & & -40 & -230 & -225 \\\\ \\hline & 16 & 92 & 90 & 0 \\end{array}$",
                "reason": "Synthetic division: $-\\dfrac{5}{2}$ has numerator $-5$, a divisor of $225$, and denominator $2$, a divisor of $16$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$16x^3 + 132x^2 + 320x + 225 = \\left(x + \\dfrac{5}{2}\\right)(16x^2 + 92x + 90)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{5}{2}$ is a factor, and the bottom numbers before it, $16$, $92$ and $90$, are the coefficients of the quotient."
              },
              {
                "step": "$16x^2 + 92x + 90 = 2(8x^2 + 46x + 45)$",
                "reason": "Taking out a common factor: each coefficient of $16x^2 + 92x + 90$ is a multiple of $2$."
              },
              {
                "step": "$8x^2 + 46x + 45 = (2x + 9)(4x + 5)$",
                "reason": "Factoring a quadratic: $(2x + 9)(4x + 5)$ multiplies out to $8x^2 + 46x + 45$."
              },
              {
                "step": "$2\\left(x + \\dfrac{5}{2}\\right)(2x + 9)(4x + 5) \\ge 0$",
                "reason": "Substitution: by lines 4 to 6 the brackets take the place of the left side."
              },
              {
                "step": "On $x < -\\dfrac{9}{2}$, $-\\dfrac{9}{2} < x < -\\dfrac{5}{2}$, $-\\dfrac{5}{2} < x < -\\dfrac{5}{4}$ and $x > -\\dfrac{5}{4}$ the product is negative, positive, negative and positive.",
                "reason": "Sign table: each factor $x - r$, or $ax + b$ with $a$ above $0$, is negative to the left of its zero and positive to the right, and the number $2$ in front is positive, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The product is $0$ at $-\\dfrac{9}{2}$, $-\\dfrac{5}{2}$ and $-\\dfrac{5}{4}$, so these numbers are taken in.",
                "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
              },
              {
                "step": "The solutions are the numbers with $-\\dfrac{9}{2} \\le x \\le -\\dfrac{5}{2}$ or $x \\ge -\\dfrac{5}{4}$.",
                "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $18x^3 - 21x^2 - 163x + 56 \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-8/3 <= x <= 1/3 or x >= 7/2",
              "lines": [
                {
                  "step": "Solve $18x^3 - 21x^2 - 163x + 56 \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $18x^3 - 21x^2 - 163x + 56$ has $k$ a divisor of $56$ and $m$ a divisor of $18$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{7}{2} & 18 & -21 & -163 & 56 \\\\ & & 63 & 147 & -56 \\\\ \\hline & 18 & 42 & -16 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{7}{2}$ has numerator $7$, a divisor of $56$, and denominator $2$, a divisor of $18$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$18x^3 - 21x^2 - 163x + 56 = \\left(x - \\dfrac{7}{2}\\right)(18x^2 + 42x - 16)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{7}{2}$ is a factor, and the bottom numbers before it, $18$, $42$ and $-16$, are the coefficients of the quotient."
                },
                {
                  "step": "$18x^2 + 42x - 16 = 2(9x^2 + 21x - 8)$",
                  "reason": "Taking out a common factor: each coefficient of $18x^2 + 42x - 16$ is a multiple of $2$."
                },
                {
                  "step": "$9x^2 + 21x - 8 = (3x - 1)(3x + 8)$",
                  "reason": "Factoring a quadratic: $(3x - 1)(3x + 8)$ multiplies out to $9x^2 + 21x - 8$."
                },
                {
                  "step": "$2\\left(x - \\dfrac{7}{2}\\right)(3x - 1)(3x + 8) \\ge 0$",
                  "reason": "Substitution: by lines 4 to 6 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -\\dfrac{8}{3}$, $-\\dfrac{8}{3} < x < \\dfrac{1}{3}$, $\\dfrac{1}{3} < x < \\dfrac{7}{2}$ and $x > \\dfrac{7}{2}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$, or $ax + b$ with $a$ above $0$, is negative to the left of its zero and positive to the right, and the number $2$ in front is positive, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{8}{3}$, $\\dfrac{1}{3}$ and $\\dfrac{7}{2}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $-\\dfrac{8}{3} \\le x \\le \\dfrac{1}{3}$ or $x \\ge \\dfrac{7}{2}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $24x^3 + 38x^2 - 209x - 168 < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -7/2 or -3/4 < x < 8/3",
              "lines": [
                {
                  "step": "Solve $24x^3 + 38x^2 - 209x - 168 < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $24x^3 + 38x^2 - 209x - 168$ has $k$ a divisor of $-168$ and $m$ a divisor of $24$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{7}{2} & 24 & 38 & -209 & -168 \\\\ & & -84 & 161 & 168 \\\\ \\hline & 24 & -46 & -48 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{7}{2}$ has numerator $-7$, a divisor of $-168$, and denominator $2$, a divisor of $24$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$24x^3 + 38x^2 - 209x - 168 = \\left(x + \\dfrac{7}{2}\\right)(24x^2 - 46x - 48)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{7}{2}$ is a factor, and the bottom numbers before it, $24$, $-46$ and $-48$, are the coefficients of the quotient."
                },
                {
                  "step": "$24x^2 - 46x - 48 = 2(12x^2 - 23x - 24)$",
                  "reason": "Taking out a common factor: each coefficient of $24x^2 - 46x - 48$ is a multiple of $2$."
                },
                {
                  "step": "$12x^2 - 23x - 24 = (3x - 8)(4x + 3)$",
                  "reason": "Factoring a quadratic: $(3x - 8)(4x + 3)$ multiplies out to $12x^2 - 23x - 24$."
                },
                {
                  "step": "$2\\left(x + \\dfrac{7}{2}\\right)(3x - 8)(4x + 3) < 0$",
                  "reason": "Substitution: by lines 4 to 6 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -\\dfrac{7}{2}$, $-\\dfrac{7}{2} < x < -\\dfrac{3}{4}$, $-\\dfrac{3}{4} < x < \\dfrac{8}{3}$ and $x > \\dfrac{8}{3}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$, or $ax + b$ with $a$ above $0$, is negative to the left of its zero and positive to the right, and the number $2$ in front is positive, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{7}{2}$, $-\\dfrac{3}{4}$ and $\\dfrac{8}{3}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -\\dfrac{7}{2}$ or $-\\dfrac{3}{4} < x < \\dfrac{8}{3}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $40x^3 - 162x^2 - 117x + 162 \\le 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -6/5 or 3/4 <= x <= 9/2",
              "lines": [
                {
                  "step": "Solve $40x^3 - 162x^2 - 117x + 162 \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $40x^3 - 162x^2 - 117x + 162$ has $k$ a divisor of $162$ and $m$ a divisor of $40$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{9}{2} & 40 & -162 & -117 & 162 \\\\ & & 180 & 81 & -162 \\\\ \\hline & 40 & 18 & -36 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{9}{2}$ has numerator $9$, a divisor of $162$, and denominator $2$, a divisor of $40$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$40x^3 - 162x^2 - 117x + 162 = \\left(x - \\dfrac{9}{2}\\right)(40x^2 + 18x - 36)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{9}{2}$ is a factor, and the bottom numbers before it, $40$, $18$ and $-36$, are the coefficients of the quotient."
                },
                {
                  "step": "$40x^2 + 18x - 36 = 2(20x^2 + 9x - 18)$",
                  "reason": "Taking out a common factor: each coefficient of $40x^2 + 18x - 36$ is a multiple of $2$."
                },
                {
                  "step": "$20x^2 + 9x - 18 = (4x - 3)(5x + 6)$",
                  "reason": "Factoring a quadratic: $(4x - 3)(5x + 6)$ multiplies out to $20x^2 + 9x - 18$."
                },
                {
                  "step": "$2\\left(x - \\dfrac{9}{2}\\right)(4x - 3)(5x + 6) \\le 0$",
                  "reason": "Substitution: by lines 4 to 6 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -\\dfrac{6}{5}$, $-\\dfrac{6}{5} < x < \\dfrac{3}{4}$, $\\dfrac{3}{4} < x < \\dfrac{9}{2}$ and $x > \\dfrac{9}{2}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$, or $ax + b$ with $a$ above $0$, is negative to the left of its zero and positive to the right, and the number $2$ in front is positive, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{6}{5}$, $\\dfrac{3}{4}$ and $\\dfrac{9}{2}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $x \\le -\\dfrac{6}{5}$ or $\\dfrac{3}{4} \\le x \\le \\dfrac{9}{2}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $27x^3 - 56 < 9x^2 + 102x$.",
            "lines": [
              {
                "step": "Solve $27x^3 - 56 < 9x^2 + 102x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$27x^3 - 9x^2 - 102x - 56 < 0$",
                "reason": "Adding the same number, from arithmetic: taking $9x^2 + 102x$ from both sides leaves $0$ on the right."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $27x^3 - 9x^2 - 102x - 56$ has $k$ a divisor of $-56$ and $m$ a divisor of $27$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -\\dfrac{2}{3} & 27 & -9 & -102 & -56 \\\\ & & -18 & 18 & 56 \\\\ \\hline & 27 & -27 & -84 & 0 \\end{array}$",
                "reason": "Synthetic division: $-\\dfrac{2}{3}$ has numerator $-2$, a divisor of $-56$, and denominator $3$, a divisor of $27$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$27x^3 - 9x^2 - 102x - 56 = \\left(x + \\dfrac{2}{3}\\right)(27x^2 - 27x - 84)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{2}{3}$ is a factor, and the bottom numbers before it, $27$, $-27$ and $-84$, are the coefficients of the quotient."
              },
              {
                "step": "$27x^2 - 27x - 84 = 3(9x^2 - 9x - 28)$",
                "reason": "Taking out a common factor: each coefficient of $27x^2 - 27x - 84$ is a multiple of $3$."
              },
              {
                "step": "$9x^2 - 9x - 28 = (3x - 7)(3x + 4)$",
                "reason": "Factoring a quadratic: $(3x - 7)(3x + 4)$ multiplies out to $9x^2 - 9x - 28$."
              },
              {
                "step": "$3\\left(x + \\dfrac{2}{3}\\right)(3x - 7)(3x + 4) < 0$",
                "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side."
              },
              {
                "step": "On $x < -\\dfrac{4}{3}$, $-\\dfrac{4}{3} < x < -\\dfrac{2}{3}$, $-\\dfrac{2}{3} < x < \\dfrac{7}{3}$ and $x > \\dfrac{7}{3}$ the product is negative, positive, negative and positive.",
                "reason": "Sign table: each factor $x - r$, or $ax + b$ with $a$ above $0$, is negative to the left of its zero and positive to the right, and the number $3$ in front is positive, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The product is $0$ at $-\\dfrac{4}{3}$, $-\\dfrac{2}{3}$ and $\\dfrac{7}{3}$, so these numbers are left out.",
                "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
              },
              {
                "step": "The solutions are the numbers with $x < -\\dfrac{4}{3}$ or $-\\dfrac{2}{3} < x < \\dfrac{7}{3}$.",
                "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $60x^3 - 227x^2 < -286x + 120$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < 6/5 or 5/4 < x < 4/3",
              "lines": [
                {
                  "step": "Solve $60x^3 - 227x^2 < -286x + 120$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$60x^3 - 227x^2 + 286x - 120 < 0$",
                  "reason": "Adding the same number, from arithmetic: taking $-286x + 120$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $60x^3 - 227x^2 + 286x - 120$ has $k$ a divisor of $-120$ and $m$ a divisor of $60$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{4}{3} & 60 & -227 & 286 & -120 \\\\ & & 80 & -196 & 120 \\\\ \\hline & 60 & -147 & 90 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{4}{3}$ has numerator $4$, a divisor of $-120$, and denominator $3$, a divisor of $60$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$60x^3 - 227x^2 + 286x - 120 = \\left(x - \\dfrac{4}{3}\\right)(60x^2 - 147x + 90)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{4}{3}$ is a factor, and the bottom numbers before it, $60$, $-147$ and $90$, are the coefficients of the quotient."
                },
                {
                  "step": "$60x^2 - 147x + 90 = 3(20x^2 - 49x + 30)$",
                  "reason": "Taking out a common factor: each coefficient of $60x^2 - 147x + 90$ is a multiple of $3$."
                },
                {
                  "step": "$20x^2 - 49x + 30 = (4x - 5)(5x - 6)$",
                  "reason": "Factoring a quadratic: $(4x - 5)(5x - 6)$ multiplies out to $20x^2 - 49x + 30$."
                },
                {
                  "step": "$3\\left(x - \\dfrac{4}{3}\\right)(4x - 5)(5x - 6) < 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < \\dfrac{6}{5}$, $\\dfrac{6}{5} < x < \\dfrac{5}{4}$, $\\dfrac{5}{4} < x < \\dfrac{4}{3}$ and $x > \\dfrac{4}{3}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$, or $ax + b$ with $a$ above $0$, is negative to the left of its zero and positive to the right, and the number $3$ in front is positive, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $\\dfrac{6}{5}$, $\\dfrac{5}{4}$ and $\\dfrac{4}{3}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < \\dfrac{6}{5}$ or $\\dfrac{5}{4} < x < \\dfrac{4}{3}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $40x^3 - 14x^2 - 111x > -63$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-7/4 < x < 3/5 or x > 3/2",
              "lines": [
                {
                  "step": "Solve $40x^3 - 14x^2 - 111x > -63$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$40x^3 - 14x^2 - 111x + 63 > 0$",
                  "reason": "Adding the same number, from arithmetic: taking $-63$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $40x^3 - 14x^2 - 111x + 63$ has $k$ a divisor of $63$ and $m$ a divisor of $40$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{3}{2} & 40 & -14 & -111 & 63 \\\\ & & 60 & 69 & -63 \\\\ \\hline & 40 & 46 & -42 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{3}{2}$ has numerator $3$, a divisor of $63$, and denominator $2$, a divisor of $40$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$40x^3 - 14x^2 - 111x + 63 = \\left(x - \\dfrac{3}{2}\\right)(40x^2 + 46x - 42)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{3}{2}$ is a factor, and the bottom numbers before it, $40$, $46$ and $-42$, are the coefficients of the quotient."
                },
                {
                  "step": "$40x^2 + 46x - 42 = 2(20x^2 + 23x - 21)$",
                  "reason": "Taking out a common factor: each coefficient of $40x^2 + 46x - 42$ is a multiple of $2$."
                },
                {
                  "step": "$20x^2 + 23x - 21 = (5x - 3)(4x + 7)$",
                  "reason": "Factoring a quadratic: $(5x - 3)(4x + 7)$ multiplies out to $20x^2 + 23x - 21$."
                },
                {
                  "step": "$2\\left(x - \\dfrac{3}{2}\\right)(5x - 3)(4x + 7) > 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -\\dfrac{7}{4}$, $-\\dfrac{7}{4} < x < \\dfrac{3}{5}$, $\\dfrac{3}{5} < x < \\dfrac{3}{2}$ and $x > \\dfrac{3}{2}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$, or $ax + b$ with $a$ above $0$, is negative to the left of its zero and positive to the right, and the number $2$ in front is positive, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{7}{4}$, $\\dfrac{3}{5}$ and $\\dfrac{3}{2}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $-\\dfrac{7}{4} < x < \\dfrac{3}{5}$ or $x > \\dfrac{3}{2}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $24x^3 \\le -26x^2 + 91x + 49$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -7/3 or -1/2 <= x <= 7/4",
              "lines": [
                {
                  "step": "Solve $24x^3 \\le -26x^2 + 91x + 49$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$24x^3 + 26x^2 - 91x - 49 \\le 0$",
                  "reason": "Adding the same number, from arithmetic: taking $-26x^2 + 91x + 49$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $24x^3 + 26x^2 - 91x - 49$ has $k$ a divisor of $-49$ and $m$ a divisor of $24$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{2} & 24 & 26 & -91 & -49 \\\\ & & -12 & -7 & 49 \\\\ \\hline & 24 & 14 & -98 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{1}{2}$ has numerator $-1$, a divisor of $-49$, and denominator $2$, a divisor of $24$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$24x^3 + 26x^2 - 91x - 49 = \\left(x + \\dfrac{1}{2}\\right)(24x^2 + 14x - 98)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + \\dfrac{1}{2}$ is a factor, and the bottom numbers before it, $24$, $14$ and $-98$, are the coefficients of the quotient."
                },
                {
                  "step": "$24x^2 + 14x - 98 = 2(12x^2 + 7x - 49)$",
                  "reason": "Taking out a common factor: each coefficient of $24x^2 + 14x - 98$ is a multiple of $2$."
                },
                {
                  "step": "$12x^2 + 7x - 49 = (3x + 7)(4x - 7)$",
                  "reason": "Factoring a quadratic: $(3x + 7)(4x - 7)$ multiplies out to $12x^2 + 7x - 49$."
                },
                {
                  "step": "$2\\left(x + \\dfrac{1}{2}\\right)(3x + 7)(4x - 7) \\le 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -\\dfrac{7}{3}$, $-\\dfrac{7}{3} < x < -\\dfrac{1}{2}$, $-\\dfrac{1}{2} < x < \\dfrac{7}{4}$ and $x > \\dfrac{7}{4}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$, or $ax + b$ with $a$ above $0$, is negative to the left of its zero and positive to the right, and the number $2$ in front is positive, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{7}{3}$, $-\\dfrac{1}{2}$ and $\\dfrac{7}{4}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $x \\le -\\dfrac{7}{3}$ or $-\\dfrac{1}{2} \\le x \\le \\dfrac{7}{4}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $27x^3 - 25 < -81x^2 - 45x$.",
            "lines": [
              {
                "step": "Solve $27x^3 - 25 < -81x^2 - 45x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$27x^3 + 81x^2 + 45x - 25 < 0$",
                "reason": "Adding the same number, from arithmetic: taking $-81x^2 - 45x$ from both sides leaves $0$ on the right."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $27x^3 + 81x^2 + 45x - 25$ has $k$ a divisor of $-25$ and $m$ a divisor of $27$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{3} & 27 & 81 & 45 & -25 \\\\ & & 9 & 30 & 25 \\\\ \\hline & 27 & 90 & 75 & 0 \\end{array}$",
                "reason": "Synthetic division: $\\dfrac{1}{3}$ has numerator $1$, a divisor of $-25$, and denominator $3$, a divisor of $27$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$27x^3 + 81x^2 + 45x - 25 = \\left(x - \\dfrac{1}{3}\\right)(27x^2 + 90x + 75)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{1}{3}$ is a factor, and the bottom numbers before it, $27$, $90$ and $75$, are the coefficients of the quotient."
              },
              {
                "step": "$27x^2 + 90x + 75 = 3(9x^2 + 30x + 25)$",
                "reason": "Taking out a common factor: each coefficient of $27x^2 + 90x + 75$ is a multiple of $3$."
              },
              {
                "step": "$9x^2 + 30x + 25 = (3x + 5)^2$",
                "reason": "Square of a binomial: $(3x + 5)^2$ multiplies out to $9x^2 + 30x + 25$."
              },
              {
                "step": "$3\\left(x - \\dfrac{1}{3}\\right)(3x + 5)^2 < 0$",
                "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side."
              },
              {
                "step": "The square $(3x + 5)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{5}{3}$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "For $x \\ne -\\dfrac{5}{3}$ the product has the sign of $x - \\dfrac{1}{3}$: negative for $x < \\dfrac{1}{3}$ and positive for $x > \\dfrac{1}{3}$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the square is positive away from its zero, and the number $3$ in front is positive."
              },
              {
                "step": "The product is $0$ at $-\\dfrac{5}{3}$ and $\\dfrac{1}{3}$, so these numbers are left out.",
                "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
              },
              {
                "step": "The solutions are the numbers with $x < -\\dfrac{5}{3}$ or $-\\dfrac{5}{3} < x < \\dfrac{1}{3}$.",
                "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $32x^3 < -32x^2 + 70x + 75$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -5/4 or -5/4 < x < 3/2",
              "lines": [
                {
                  "step": "Solve $32x^3 < -32x^2 + 70x + 75$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$32x^3 + 32x^2 - 70x - 75 < 0$",
                  "reason": "Adding the same number, from arithmetic: taking $-32x^2 + 70x + 75$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $32x^3 + 32x^2 - 70x - 75$ has $k$ a divisor of $-75$ and $m$ a divisor of $32$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{3}{2} & 32 & 32 & -70 & -75 \\\\ & & 48 & 120 & 75 \\\\ \\hline & 32 & 80 & 50 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{3}{2}$ has numerator $3$, a divisor of $-75$, and denominator $2$, a divisor of $32$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$32x^3 + 32x^2 - 70x - 75 = \\left(x - \\dfrac{3}{2}\\right)(32x^2 + 80x + 50)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{3}{2}$ is a factor, and the bottom numbers before it, $32$, $80$ and $50$, are the coefficients of the quotient."
                },
                {
                  "step": "$32x^2 + 80x + 50 = 2(16x^2 + 40x + 25)$",
                  "reason": "Taking out a common factor: each coefficient of $32x^2 + 80x + 50$ is a multiple of $2$."
                },
                {
                  "step": "$16x^2 + 40x + 25 = (4x + 5)^2$",
                  "reason": "Square of a binomial: $(4x + 5)^2$ multiplies out to $16x^2 + 40x + 25$."
                },
                {
                  "step": "$2\\left(x - \\dfrac{3}{2}\\right)(4x + 5)^2 < 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side."
                },
                {
                  "step": "The square $(4x + 5)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{5}{4}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "For $x \\ne -\\dfrac{5}{4}$ the product has the sign of $x - \\dfrac{3}{2}$: negative for $x < \\dfrac{3}{2}$ and positive for $x > \\dfrac{3}{2}$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the square is positive away from its zero, and the number $2$ in front is positive."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{5}{4}$ and $\\dfrac{3}{2}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -\\dfrac{5}{4}$ or $-\\dfrac{5}{4} < x < \\dfrac{3}{2}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $18x^3 \\le -51x^2 + 112x + 320$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= 5/2",
              "lines": [
                {
                  "step": "Solve $18x^3 \\le -51x^2 + 112x + 320$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$18x^3 + 51x^2 - 112x - 320 \\le 0$",
                  "reason": "Adding the same number, from arithmetic: taking $-51x^2 + 112x + 320$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $18x^3 + 51x^2 - 112x - 320$ has $k$ a divisor of $-320$ and $m$ a divisor of $18$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{5}{2} & 18 & 51 & -112 & -320 \\\\ & & 45 & 240 & 320 \\\\ \\hline & 18 & 96 & 128 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{5}{2}$ has numerator $5$, a divisor of $-320$, and denominator $2$, a divisor of $18$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$18x^3 + 51x^2 - 112x - 320 = \\left(x - \\dfrac{5}{2}\\right)(18x^2 + 96x + 128)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{5}{2}$ is a factor, and the bottom numbers before it, $18$, $96$ and $128$, are the coefficients of the quotient."
                },
                {
                  "step": "$18x^2 + 96x + 128 = 2(9x^2 + 48x + 64)$",
                  "reason": "Taking out a common factor: each coefficient of $18x^2 + 96x + 128$ is a multiple of $2$."
                },
                {
                  "step": "$9x^2 + 48x + 64 = (3x + 8)^2$",
                  "reason": "Square of a binomial: $(3x + 8)^2$ multiplies out to $9x^2 + 48x + 64$."
                },
                {
                  "step": "$2\\left(x - \\dfrac{5}{2}\\right)(3x + 8)^2 \\le 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side."
                },
                {
                  "step": "The square $(3x + 8)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{8}{3}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "For $x \\ne -\\dfrac{8}{3}$ the product has the sign of $x - \\dfrac{5}{2}$: negative for $x < \\dfrac{5}{2}$ and positive for $x > \\dfrac{5}{2}$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the square is positive away from its zero, and the number $2$ in front is positive."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{8}{3}$ and $\\dfrac{5}{2}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $x \\le \\dfrac{5}{2}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $75x^3 + 310x^2 \\ge -192x + 288$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x = -12/5 or x >= 2/3",
              "lines": [
                {
                  "step": "Solve $75x^3 + 310x^2 \\ge -192x + 288$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$75x^3 + 310x^2 + 192x - 288 \\ge 0$",
                  "reason": "Adding the same number, from arithmetic: taking $-192x + 288$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $75x^3 + 310x^2 + 192x - 288$ has $k$ a divisor of $-288$ and $m$ a divisor of $75$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{2}{3} & 75 & 310 & 192 & -288 \\\\ & & 50 & 240 & 288 \\\\ \\hline & 75 & 360 & 432 & 0 \\end{array}$",
                  "reason": "Synthetic division: $\\dfrac{2}{3}$ has numerator $2$, a divisor of $-288$, and denominator $3$, a divisor of $75$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$75x^3 + 310x^2 + 192x - 288 = \\left(x - \\dfrac{2}{3}\\right)(75x^2 + 360x + 432)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - \\dfrac{2}{3}$ is a factor, and the bottom numbers before it, $75$, $360$ and $432$, are the coefficients of the quotient."
                },
                {
                  "step": "$75x^2 + 360x + 432 = 3(25x^2 + 120x + 144)$",
                  "reason": "Taking out a common factor: each coefficient of $75x^2 + 360x + 432$ is a multiple of $3$."
                },
                {
                  "step": "$25x^2 + 120x + 144 = (5x + 12)^2$",
                  "reason": "Square of a binomial: $(5x + 12)^2$ multiplies out to $25x^2 + 120x + 144$."
                },
                {
                  "step": "$3\\left(x - \\dfrac{2}{3}\\right)(5x + 12)^2 \\ge 0$",
                  "reason": "Substitution: by lines 5 to 7 the brackets take the place of the left side."
                },
                {
                  "step": "The square $(5x + 12)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{12}{5}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "For $x \\ne -\\dfrac{12}{5}$ the product has the sign of $x - \\dfrac{2}{3}$: negative for $x < \\dfrac{2}{3}$ and positive for $x > \\dfrac{2}{3}$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the square is positive away from its zero, and the number $3$ in front is positive."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{12}{5}$ and $\\dfrac{2}{3}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $x = -\\dfrac{12}{5}$ or $x \\ge \\dfrac{2}{3}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t198-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $f(x) = 3x^3 + 9x^2 - 7x + 1$ has a rational root.",
            "lines": [
              {
                "step": "Decide whether $f(x) = 3x^3 + 9x^2 - 7x + 1$ has a rational root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{3}$ and $-\\dfrac{1}{3}$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term $1$, and its denominator divides the leading coefficient $3$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 1 & 3 & 9 & -7 & 1 \\\\ & & 3 & 12 & 5 \\\\ \\hline & 3 & 12 & 5 & 6 \\end{array}$",
                "reason": "Remainder Theorem: the last bottom number of synthetic division with $1$ on the left is $f(1)$, here $6$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -1 & 3 & 9 & -7 & 1 \\\\ & & -3 & -6 & 13 \\\\ \\hline & 3 & 6 & -13 & 14 \\end{array}$",
                "reason": "Remainder Theorem: the last bottom number of synthetic division with $-1$ on the left is $f(-1)$, here $14$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{3} & 3 & 9 & -7 & 1 \\\\ & & 1 & \\dfrac{10}{3} & -\\dfrac{11}{9} \\\\ \\hline & 3 & 10 & -\\dfrac{11}{3} & -\\dfrac{2}{9} \\end{array}$",
                "reason": "Remainder Theorem: the last bottom number of synthetic division with $\\dfrac{1}{3}$ on the left is $f\\left(\\dfrac{1}{3}\\right)$, here $-\\dfrac{2}{9}$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{3} & 3 & 9 & -7 & 1 \\\\ & & -1 & -\\dfrac{8}{3} & \\dfrac{29}{9} \\\\ \\hline & 3 & 8 & -\\dfrac{29}{3} & \\dfrac{38}{9} \\end{array}$",
                "reason": "Remainder Theorem: the last bottom number of synthetic division with $-\\dfrac{1}{3}$ on the left is $f\\left(-\\dfrac{1}{3}\\right)$, here $\\dfrac{38}{9}$."
              },
              {
                "step": "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No.",
                "reason": "Answering the question asked: line 2 lists every possible rational root, and lines 3 to 6 give the value of $f(x)$ at each."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = 5x^3 - 19x^2 - 9x - 1$ has a rational root.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 5x^3 - 19x^2 - 9x - 1$ has a rational root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{5}$ and $-\\dfrac{1}{5}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term $-1$, and its denominator divides the leading coefficient $5$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 1 & 5 & -19 & -9 & -1 \\\\ & & 5 & -14 & -23 \\\\ \\hline & 5 & -14 & -23 & -24 \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $1$ on the left is $f(1)$, here $-24$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -1 & 5 & -19 & -9 & -1 \\\\ & & -5 & 24 & -15 \\\\ \\hline & 5 & -24 & 15 & -16 \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $-1$ on the left is $f(-1)$, here $-16$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{5} & 5 & -19 & -9 & -1 \\\\ & & 1 & -\\dfrac{18}{5} & -\\dfrac{63}{25} \\\\ \\hline & 5 & -18 & -\\dfrac{63}{5} & -\\dfrac{88}{25} \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $\\dfrac{1}{5}$ on the left is $f\\left(\\dfrac{1}{5}\\right)$, here $-\\dfrac{88}{25}$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{5} & 5 & -19 & -9 & -1 \\\\ & & -1 & 4 & 1 \\\\ \\hline & 5 & -20 & -5 & 0 \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $-\\dfrac{1}{5}$ on the left is $f\\left(-\\dfrac{1}{5}\\right)$, here $0$."
                },
                {
                  "step": "The value $f\\left(-\\dfrac{1}{5}\\right)$ is $0$, so $-\\dfrac{1}{5}$ is a rational root, and the answer is Yes.",
                  "reason": "Answering the question asked: line 2 lists every possible rational root, and lines 3 to 6 give the value of $f(x)$ at each."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = 7x^3 + 8x^2 + 11x - 1$ has a rational root.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 7x^3 + 8x^2 + 11x - 1$ has a rational root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{7}$ and $-\\dfrac{1}{7}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term $-1$, and its denominator divides the leading coefficient $7$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 1 & 7 & 8 & 11 & -1 \\\\ & & 7 & 15 & 26 \\\\ \\hline & 7 & 15 & 26 & 25 \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $1$ on the left is $f(1)$, here $25$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -1 & 7 & 8 & 11 & -1 \\\\ & & -7 & -1 & -10 \\\\ \\hline & 7 & 1 & 10 & -11 \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $-1$ on the left is $f(-1)$, here $-11$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{7} & 7 & 8 & 11 & -1 \\\\ & & 1 & \\dfrac{9}{7} & \\dfrac{86}{49} \\\\ \\hline & 7 & 9 & \\dfrac{86}{7} & \\dfrac{37}{49} \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $\\dfrac{1}{7}$ on the left is $f\\left(\\dfrac{1}{7}\\right)$, here $\\dfrac{37}{49}$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{7} & 7 & 8 & 11 & -1 \\\\ & & -1 & -1 & -\\dfrac{10}{7} \\\\ \\hline & 7 & 7 & 10 & -\\dfrac{17}{7} \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $-\\dfrac{1}{7}$ on the left is $f\\left(-\\dfrac{1}{7}\\right)$, here $-\\dfrac{17}{7}$."
                },
                {
                  "step": "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No.",
                  "reason": "Answering the question asked: line 2 lists every possible rational root, and lines 3 to 6 give the value of $f(x)$ at each."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = 11x^3 - 5x^2 - 7x + 1$ has a rational root.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 11x^3 - 5x^2 - 7x + 1$ has a rational root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{11}$ and $-\\dfrac{1}{11}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term $1$, and its denominator divides the leading coefficient $11$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 1 & 11 & -5 & -7 & 1 \\\\ & & 11 & 6 & -1 \\\\ \\hline & 11 & 6 & -1 & 0 \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $1$ on the left is $f(1)$, here $0$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -1 & 11 & -5 & -7 & 1 \\\\ & & -11 & 16 & -9 \\\\ \\hline & 11 & -16 & 9 & -8 \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $-1$ on the left is $f(-1)$, here $-8$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{11} & 11 & -5 & -7 & 1 \\\\ & & 1 & -\\dfrac{4}{11} & -\\dfrac{81}{121} \\\\ \\hline & 11 & -4 & -\\dfrac{81}{11} & \\dfrac{40}{121} \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $\\dfrac{1}{11}$ on the left is $f\\left(\\dfrac{1}{11}\\right)$, here $\\dfrac{40}{121}$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{11} & 11 & -5 & -7 & 1 \\\\ & & -1 & \\dfrac{6}{11} & \\dfrac{71}{121} \\\\ \\hline & 11 & -6 & -\\dfrac{71}{11} & \\dfrac{192}{121} \\end{array}$",
                  "reason": "Remainder Theorem: the last bottom number of synthetic division with $-\\dfrac{1}{11}$ on the left is $f\\left(-\\dfrac{1}{11}\\right)$, here $\\dfrac{192}{121}$."
                },
                {
                  "step": "The value $f(1)$ is $0$, so $1$ is a rational root, and the answer is Yes.",
                  "reason": "Answering the question asked: line 2 lists every possible rational root, and lines 3 to 6 give the value of $f(x)$ at each."
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
      "id": "t198-p1",
      "method": "direct proof",
      "statement": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial of degree $n \\ge 1$ whose coefficients are integers, with $a_0 \\ne 0$. Let $k$ be an integer and $m$ a whole number at least $1$ such that the fraction $\\dfrac{k}{m}$ is in lowest terms and $f\\left(\\dfrac{k}{m}\\right) = 0$. Then $k$ divides $a_0$ and $m$ divides $a_n$.",
      "idea": "Multiply $f\\left(\\dfrac{k}{m}\\right) = 0$ by $m^n$ to clear the fractions. Every term but the last then holds the factor $k$, and every term but the first holds the factor $m$; since $k$ and $m$ share no prime, each divides the coefficient of the term it misses.",
      "lines": [
        {
          "line": "$a_n\\left(\\dfrac{k}{m}\\right)^n + a_{n-1}\\left(\\dfrac{k}{m}\\right)^{n-1} + \\dots + a_1\\dfrac{k}{m} + a_0 = 0$",
          "reason": "Function notation: $f\\left(\\dfrac{k}{m}\\right)$ is $f(x)$ with $\\dfrac{k}{m}$ where $x$ stands, and it is $0$ by the hypothesis."
        },
        {
          "line": "$a_n\\dfrac{k^n}{m^n} + a_{n-1}\\dfrac{k^{n-1}}{m^{n-1}} + \\dots + a_1\\dfrac{k}{m} + a_0 = 0$",
          "reason": "Power of a quotient: $\\left(\\dfrac{k}{m}\\right)^j = \\dfrac{k^j}{m^j}$ for each power $j$."
        },
        {
          "line": "For each $j$ from $0$ to $n$, $m^n \\cdot \\dfrac{k^j}{m^j} = k^jm^{n-j}$.",
          "reason": "Quotient law: $\\dfrac{m^n}{m^j} = m^{n-j}$, since $m$ is not $0$ and $j \\le n$."
        },
        {
          "line": "$m^n\\left(a_n\\dfrac{k^n}{m^n} + a_{n-1}\\dfrac{k^{n-1}}{m^{n-1}} + \\dots + a_1\\dfrac{k}{m} + a_0\\right) = 0$",
          "reason": "Multiplying both sides by the same number: both sides of line 2 are multiplied by $m^n$, and $m^n \\cdot 0 = 0$."
        },
        {
          "line": "$a_nm^n\\dfrac{k^n}{m^n} + a_{n-1}m^n\\dfrac{k^{n-1}}{m^{n-1}} + \\dots + a_1m^n\\dfrac{k}{m} + a_0m^n = 0$",
          "reason": "The distributive law, from arithmetic: $m^n$ multiplies each term in the bracket of line 4."
        },
        {
          "line": "$a_nk^n + a_{n-1}k^{n-1}m + \\dots + a_1km^{n-1} + a_0m^n = 0$",
          "reason": "Substitution: line 3 gives each product $m^n \\cdot \\dfrac{k^j}{m^j}$ of line 5 as $k^jm^{n-j}$."
        },
        {
          "line": "$a_0m^n = -a_nk^n - a_{n-1}k^{n-1}m - \\dots - a_1km^{n-1}$",
          "reason": "Adding the same number to both sides: every term of line 6 but $a_0m^n$ is taken from both sides."
        },
        {
          "line": "$a_0m^n = k(-a_nk^{n-1} - a_{n-1}k^{n-2}m - \\dots - a_1m^{n-1})$",
          "reason": "Taking out a common factor: each term on the right of line 7 holds the factor $k$, since $n \\ge 1$."
        },
        {
          "line": "The number $-a_nk^{n-1} - a_{n-1}k^{n-2}m - \\dots - a_1m^{n-1}$ is an integer.",
          "reason": "The multiplication and addition of integers, from arithmetic: the coefficients, $k$ and $m$ are integers, and sums and products of integers are integers."
        },
        {
          "line": "The number $k$ is not $0$.",
          "reason": "Zero-product property: if $k$ were $0$, line 8 would give $a_0m^n = 0$, but $a_0 \\ne 0$ by the hypothesis and $m^n \\ne 0$."
        },
        {
          "line": "So $k$ divides $a_0m^n$.",
          "reason": "The definition of divides, from arithmetic: by lines 8 to 10 the number $a_0m^n$ is the nonzero integer $k$ times an integer."
        },
        {
          "line": "So $|k|$ divides $|a_0|m^n$.",
          "reason": "The definition of divides and absolute value, from arithmetic: by line 11, $a_0m^n = ky$ for an integer $y$, and taking sizes gives $|a_0|m^n = |k| \\cdot |y|$, since $m^n$ is positive."
        },
        {
          "line": "Every prime that divides $m^n$ divides $m$.",
          "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: for $m \\ge 2$ the prime decomposition of $m^n$ is that of $m$ written $n$ times, and it is the only one; for $m = 1$ the number $m^n = 1$ has no prime divisor."
        },
        {
          "line": "No prime divides both $|k|$ and $m$.",
          "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{k}{m}$ is in lowest terms, so the greatest common divisor of $|k|$ and $m$ is $1$, and a prime dividing both would be a common divisor above $1$."
        },
        {
          "line": "No prime divides both $|k|$ and $m^n$.",
          "reason": "Lines 13 and 14: a prime dividing $m^n$ divides $m$ by line 13, so by line 14 it does not divide $|k|$."
        },
        {
          "line": "The numbers $|k|$ and $m^n$ are relatively prime.",
          "reason": "Relatively prime whole numbers, from arithmetic: by line 15 no prime divides both, and a common divisor above $1$ would have a prime divisor (prime decomposition), which would divide both."
        },
        {
          "line": "So $|k|$ divides $|a_0|$.",
          "reason": "A number dividing a product and relatively prime to one factor divides the other, from arithmetic: $|k|$ divides the product $|a_0|m^n$ by line 12 and is relatively prime to the factor $m^n$ by line 16."
        },
        {
          "line": "So $k$ divides $a_0$.",
          "reason": "The definition of divides and absolute value, from arithmetic: by line 17, $|a_0| = |k|z$ for a whole number $z$, and $a_0$ and $k$ are $|a_0|$ and $|k|$ up to sign, so $a_0$ is $k$ times $z$ or $k$ times $-z$."
        },
        {
          "line": "$a_nk^n = -a_{n-1}k^{n-1}m - \\dots - a_1km^{n-1} - a_0m^n$",
          "reason": "Adding the same number to both sides: every term of line 6 but $a_nk^n$ is taken from both sides."
        },
        {
          "line": "$a_nk^n = m(-a_{n-1}k^{n-1} - \\dots - a_1km^{n-2} - a_0m^{n-1})$",
          "reason": "Taking out a common factor: each term on the right of line 19 holds the factor $m$, since $n \\ge 1$."
        },
        {
          "line": "The number $-a_{n-1}k^{n-1} - \\dots - a_1km^{n-2} - a_0m^{n-1}$ is an integer.",
          "reason": "The multiplication and addition of integers, from arithmetic: the coefficients, $k$ and $m$ are integers."
        },
        {
          "line": "So $m$ divides $a_nk^n$.",
          "reason": "The definition of divides, from arithmetic: by lines 20 and 21 the number $a_nk^n$ is $m$ times an integer, and $m \\ge 1$."
        },
        {
          "line": "So $m$ divides $|a_n| \\cdot |k|^n$.",
          "reason": "The definition of divides and absolute value, from arithmetic: by line 22, $a_nk^n = my$ for an integer $y$, and taking sizes gives $|a_n| \\cdot |k|^n = m|y|$, since $m$ is positive."
        },
        {
          "line": "Every prime that divides $|k|^n$ divides $|k|$.",
          "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $|k| \\ge 1$ by line 10; for $|k| \\ge 2$ the prime decomposition of $|k|^n$ is that of $|k|$ written $n$ times, and it is the only one; for $|k| = 1$ the number $|k|^n = 1$ has no prime divisor."
        },
        {
          "line": "No prime divides both $m$ and $|k|^n$.",
          "reason": "Lines 14 and 24: a prime dividing $|k|^n$ divides $|k|$ by line 24, so by line 14 it does not divide $m$."
        },
        {
          "line": "The numbers $m$ and $|k|^n$ are relatively prime.",
          "reason": "Relatively prime whole numbers, from arithmetic: by line 25 no prime divides both, and a common divisor above $1$ would have a prime divisor (prime decomposition), which would divide both."
        },
        {
          "line": "So $m$ divides $|a_n|$.",
          "reason": "A number dividing a product and relatively prime to one factor divides the other, from arithmetic: $m$ divides the product $|a_n| \\cdot |k|^n$ by line 23 and is relatively prime to the factor $|k|^n$ by line 26."
        },
        {
          "line": "So $m$ divides $a_n$.",
          "reason": "The definition of divides and absolute value, from arithmetic: by line 27, $|a_n| = mz$ for a whole number $z$, and $a_n$ is $|a_n|$ or $-|a_n|$, so $a_n$ is $m$ times $z$ or $m$ times $-z$."
        },
        {
          "line": "So $k$ divides $a_0$ and $m$ divides $a_n$.",
          "reason": "Lines 18 and 28 give the two parts of the statement."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t198-s1",
      "method": "direct proof",
      "statement": "Prove that if $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ is a polynomial of degree $n \\ge 1$ whose coefficients are integers, $f(0)$ and $f(1)$ have opposite signs, and no fraction $\\dfrac{k}{m}$ with $k$ a divisor of $a_0$, $m$ a divisor of $a_n$ and $0 < k < m$ is a root of $f(x)$, then $f(x)$ has an irrational root between $0$ and $1$. Facts it may use: Sign change, Rational Root Theorem, substituting a value, multiplying by a positive number, from arithmetic, irrational number, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "$f(0) = a_0$",
            "reason": "Substituting a value: with $0$ in place of $x$, every term but the constant term is $0$."
          },
          {
            "line": "$a_0 \\ne 0$",
            "reason": "Substitution: $f(0)$ is positive or negative by the hypothesis, so it is not $0$, and it is $a_0$ by line 1."
          },
          {
            "line": "So $f(x)$ has a root $r$ between $0$ and $1$.",
            "reason": "Sign change: $f(0)$ and $f(1)$ have opposite signs by the hypothesis."
          },
          {
            "line": "A rational root of $f(x)$, written $\\dfrac{k}{m}$ in lowest terms with $k$ an integer and $m$ a whole number at least $1$, has $k$ a divisor of $a_0$ and $m$ a divisor of $a_n$.",
            "reason": "Rational Root Theorem: the coefficients are integers, the degree is at least $1$, and $a_0 \\ne 0$ by line 2."
          },
          {
            "line": "If such a root lies between $0$ and $1$, then $0 < k < m$.",
            "reason": "Multiplying by a positive number, from arithmetic: $0 < \\dfrac{k}{m} < 1$ is multiplied by $m$, which is positive."
          },
          {
            "line": "So no rational number between $0$ and $1$ is a root of $f(x)$.",
            "reason": "The hypothesis: by lines 4 and 5 such a root is a fraction $\\dfrac{k}{m}$ with $k$ a divisor of $a_0$, $m$ a divisor of $a_n$ and $0 < k < m$, and none of these is a root."
          },
          {
            "line": "So the root $r$ of line 3 is irrational.",
            "reason": "Irrational number, from arithmetic: by lines 3 and 6, $r$ is a real number that is not rational."
          }
        ]
      }
    },
    {
      "id": "t198-s2",
      "method": "proof by contradiction",
      "statement": "Prove that if $a$, $b$ and $c$ are odd integers, then the polynomial $ax^2 + bx + c$ has no rational root. Facts it may use: Rational Root Theorem, function notation, multiplying both sides by the same number, even whole numbers, from arithmetic, no even integer divides an odd integer, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $ax^2 + bx + c$ has a rational root, written as a fraction $\\dfrac{k}{m}$ in lowest terms, with $k$ an integer and $m$ a whole number at least $1$.",
            "reason": "Proof by contradiction: the opposite of the statement is supposed."
          },
          {
            "line": "The number $k$ divides $c$, and $m$ divides $a$.",
            "reason": "Rational Root Theorem: the coefficients are integers, the degree is $2$, and $c \\ne 0$ since $c$ is odd."
          },
          {
            "line": "The numbers $k$ and $m$ are odd.",
            "reason": "No even integer divides an odd integer, from arithmetic: $k$ divides the odd integer $c$, and $m$ divides the odd integer $a$."
          },
          {
            "line": "$a\\left(\\dfrac{k}{m}\\right)^2 + b\\dfrac{k}{m} + c = 0$",
            "reason": "Function notation: $\\dfrac{k}{m}$ goes where $x$ stands, and the value is $0$ by line 1."
          },
          {
            "line": "$ak^2 + bkm + cm^2 = 0$",
            "reason": "Multiplying both sides by the same number: both sides of line 4 are multiplied by $m^2$, which is not $0$."
          },
          {
            "line": "Each of the integers $ak^2$, $bkm$ and $cm^2$ is odd.",
            "reason": "Even whole numbers, from arithmetic, for integers: a product of odd integers is odd, and $a$, $b$, $c$, $k$ and $m$ are odd by the hypothesis and line 3."
          },
          {
            "line": "The sum $ak^2 + bkm + cm^2$ is odd.",
            "reason": "Even whole numbers, from arithmetic, for integers: the sum of two odd integers is even, and an even integer plus an odd integer is odd."
          },
          {
            "line": "The number $0$ is even, so line 5 makes an odd integer equal to an even one.",
            "reason": "Even whole numbers, from arithmetic, for integers: $0 = 2 \\cdot 0$, so $2$ divides $0$, and no integer is both even and odd."
          },
          {
            "line": "So $ax^2 + bx + c$ has no rational root.",
            "reason": "Proof by contradiction: the supposition of line 1 leads to line 8, which is false."
          }
        ]
      }
    }
  ]
}
