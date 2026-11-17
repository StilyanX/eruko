export default {
  "number": 188,
  "title": "Laws of conjugates and magnitudes",
  "section": 13,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "65-70"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $|(-23 + 15i)(11 + 3i)|$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "26*sqrt(145)",
    "solution": [
      "Find $|(-23 + 15i)(11 + 3i)|$.",
      "$|(-23 + 15i)(11 + 3i)| = |-23 + 15i| \\cdot |11 + 3i|$",
      "$|(-23 + 15i)(11 + 3i)| = \\sqrt{754} \\cdot \\sqrt{130}$",
      "$|(-23 + 15i)(11 + 3i)| = \\sqrt{754 \\cdot 130}$",
      "$|(-23 + 15i)(11 + 3i)| = 26\\sqrt{145}$"
    ]
  },
  "ideas": [
    {
      "name": "Magnitude of a product",
      "concrete": "The product $(1 + 7i)(9 - i)$ is $16 + 62i$, whose magnitude is $\\sqrt{16^2 + 62^2} = \\sqrt{256 + 3844} = \\sqrt{4100}$. The magnitudes of the two factors are $\\sqrt{50}$ and $\\sqrt{82}$, and $\\sqrt{50} \\cdot \\sqrt{82} = \\sqrt{4100}$, the same number.",
      "general": "For real numbers $a$, $b$, $c$ and $d$, $|(a + bi)(c + di)| = |a + bi| \\cdot |c + di|$: the **magnitude of a product** is the product of the magnitudes. So the magnitude of a product is found without multiplying the product out."
    }
  ],
  "kinds": [
    {
      "id": "t188-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $|(-13 + 16i)(-10 - 5i)|$.",
            "lines": [
              {
                "step": "Find $|(-13 + 16i)(-10 - 5i)|$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$|(-13 + 16i)(-10 - 5i)| = |-13 + 16i| \\cdot |-10 - 5i|$",
                "reason": "Magnitude of a product: the magnitude of a product of two complex numbers is the product of their magnitudes, so the product is not multiplied out."
              },
              {
                "step": "$|(-13 + 16i)(-10 - 5i)| = \\sqrt{425} \\cdot \\sqrt{125}$",
                "reason": "Magnitude: $|-13 + 16i| = \\sqrt{(-13)^2 + 16^2} = \\sqrt{169 + 256} = \\sqrt{425}$ and $|-10 - 5i| = \\sqrt{(-10)^2 + (-5)^2} = \\sqrt{100 + 25} = \\sqrt{125}$."
              },
              {
                "step": "$|(-13 + 16i)(-10 - 5i)| = \\sqrt{425 \\cdot 125}$",
                "reason": "Root of a product: both numbers are positive."
              },
              {
                "step": "$|(-13 + 16i)(-10 - 5i)| = 25\\sqrt{85}$",
                "reason": "Simplest radical form: $425 = 5^2 \\cdot 17$ and $125 = 5^2 \\cdot 5$, so $425 \\cdot 125 = 25^2 \\cdot 85$, and $85$ has no square factor greater than $1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $|(4 - 23i)(10 + 3i)|$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "109*sqrt(5)",
              "lines": [
                {
                  "step": "Find $|(4 - 23i)(10 + 3i)|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|(4 - 23i)(10 + 3i)| = |4 - 23i| \\cdot |10 + 3i|$",
                  "reason": "Magnitude of a product: the magnitude of a product of two complex numbers is the product of their magnitudes, so the product is not multiplied out."
                },
                {
                  "step": "$|(4 - 23i)(10 + 3i)| = \\sqrt{545} \\cdot \\sqrt{109}$",
                  "reason": "Magnitude: $|4 - 23i| = \\sqrt{4^2 + (-23)^2} = \\sqrt{16 + 529} = \\sqrt{545}$ and $|10 + 3i| = \\sqrt{10^2 + 3^2} = \\sqrt{100 + 9} = \\sqrt{109}$."
                },
                {
                  "step": "$|(4 - 23i)(10 + 3i)| = \\sqrt{545 \\cdot 109}$",
                  "reason": "Root of a product: both numbers are positive."
                },
                {
                  "step": "$|(4 - 23i)(10 + 3i)| = 109\\sqrt{5}$",
                  "reason": "Simplest radical form: $545 = 109 \\cdot 5$, so $545 \\cdot 109 = 109^2 \\cdot 5$, and $5$ has no square factor greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find $|(3 - 13i)(11 - 18i)|$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "89*sqrt(10)",
              "lines": [
                {
                  "step": "Find $|(3 - 13i)(11 - 18i)|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|(3 - 13i)(11 - 18i)| = |3 - 13i| \\cdot |11 - 18i|$",
                  "reason": "Magnitude of a product: the magnitude of a product of two complex numbers is the product of their magnitudes, so the product is not multiplied out."
                },
                {
                  "step": "$|(3 - 13i)(11 - 18i)| = \\sqrt{178} \\cdot \\sqrt{445}$",
                  "reason": "Magnitude: $|3 - 13i| = \\sqrt{3^2 + (-13)^2} = \\sqrt{9 + 169} = \\sqrt{178}$ and $|11 - 18i| = \\sqrt{11^2 + (-18)^2} = \\sqrt{121 + 324} = \\sqrt{445}$."
                },
                {
                  "step": "$|(3 - 13i)(11 - 18i)| = \\sqrt{178 \\cdot 445}$",
                  "reason": "Root of a product: both numbers are positive."
                },
                {
                  "step": "$|(3 - 13i)(11 - 18i)| = 89\\sqrt{10}$",
                  "reason": "Simplest radical form: $178 = 89 \\cdot 2$ and $445 = 89 \\cdot 5$, so $178 \\cdot 445 = 89^2 \\cdot 10$, and $10$ has no square factor greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find $|(-24 - 4i)(-4 + 12i)|$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "16*sqrt(370)",
              "lines": [
                {
                  "step": "Find $|(-24 - 4i)(-4 + 12i)|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|(-24 - 4i)(-4 + 12i)| = |-24 - 4i| \\cdot |-4 + 12i|$",
                  "reason": "Magnitude of a product: the magnitude of a product of two complex numbers is the product of their magnitudes, so the product is not multiplied out."
                },
                {
                  "step": "$|(-24 - 4i)(-4 + 12i)| = \\sqrt{592} \\cdot \\sqrt{160}$",
                  "reason": "Magnitude: $|-24 - 4i| = \\sqrt{(-24)^2 + (-4)^2} = \\sqrt{576 + 16} = \\sqrt{592}$ and $|-4 + 12i| = \\sqrt{(-4)^2 + 12^2} = \\sqrt{16 + 144} = \\sqrt{160}$."
                },
                {
                  "step": "$|(-24 - 4i)(-4 + 12i)| = \\sqrt{592 \\cdot 160}$",
                  "reason": "Root of a product: both numbers are positive."
                },
                {
                  "step": "$|(-24 - 4i)(-4 + 12i)| = 16\\sqrt{370}$",
                  "reason": "Simplest radical form: $592 = 4^2 \\cdot 37$ and $160 = 4^2 \\cdot 10$, so $592 \\cdot 160 = 16^2 \\cdot 370$, and $370$ has no square factor greater than $1$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $\\left|\\dfrac{13 + 14i}{-20 - 29i}\\right|$.",
            "lines": [
              {
                "step": "Find $\\left|\\dfrac{13 + 14i}{-20 - 29i}\\right|$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{13 + 14i}{-20 - 29i} \\cdot (-20 - 29i) = 13 + 14i$",
                "reason": "Definition of fraction division, from arithmetic: a quotient times the number divided by is the number divided."
              },
              {
                "step": "$\\left|\\dfrac{13 + 14i}{-20 - 29i}\\right| \\cdot |-20 - 29i| = |13 + 14i|$",
                "reason": "Magnitude of a product, used on the product of line 2."
              },
              {
                "step": "$\\left|\\dfrac{13 + 14i}{-20 - 29i}\\right| = \\dfrac{|13 + 14i|}{|-20 - 29i|}$",
                "reason": "Dividing both sides by a nonzero number: $|-20 - 29i|$ is not $0$, as $-20 - 29i$ is not $0$."
              },
              {
                "step": "$\\left|\\dfrac{13 + 14i}{-20 - 29i}\\right| = \\dfrac{\\sqrt{365}}{\\sqrt{1241}}$",
                "reason": "Magnitude: $|13 + 14i| = \\sqrt{13^2 + 14^2} = \\sqrt{169 + 196} = \\sqrt{365}$ and $|-20 - 29i| = \\sqrt{(-20)^2 + (-29)^2} = \\sqrt{400 + 841} = \\sqrt{1241}$."
              },
              {
                "step": "$\\left|\\dfrac{13 + 14i}{-20 - 29i}\\right| = \\sqrt{\\dfrac{5}{17}}$",
                "reason": "Root of a quotient: $\\dfrac{\\sqrt{365}}{\\sqrt{1241}} = \\sqrt{\\dfrac{365}{1241}}$, and the common factor $73$ of $365$ and $1241$ cancels."
              },
              {
                "step": "$\\left|\\dfrac{13 + 14i}{-20 - 29i}\\right| = \\dfrac{\\sqrt{85}}{17}$",
                "reason": "Rationalising the denominator: $\\sqrt{\\dfrac{5}{17}} = \\dfrac{\\sqrt{5}}{\\sqrt{17}}$, and the top and the bottom times $\\sqrt{17}$ give $\\dfrac{\\sqrt{85}}{17}$, with $85$ free of square factors greater than $1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\left|\\dfrac{-17 - 28i}{-30 + 17i}\\right|$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "sqrt(1517)/41",
              "lines": [
                {
                  "step": "Find $\\left|\\dfrac{-17 - 28i}{-30 + 17i}\\right|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-17 - 28i}{-30 + 17i} \\cdot (-30 + 17i) = -17 - 28i$",
                  "reason": "Definition of fraction division, from arithmetic: a quotient times the number divided by is the number divided."
                },
                {
                  "step": "$\\left|\\dfrac{-17 - 28i}{-30 + 17i}\\right| \\cdot |-30 + 17i| = |-17 - 28i|$",
                  "reason": "Magnitude of a product, used on the product of line 2."
                },
                {
                  "step": "$\\left|\\dfrac{-17 - 28i}{-30 + 17i}\\right| = \\dfrac{|-17 - 28i|}{|-30 + 17i|}$",
                  "reason": "Dividing both sides by a nonzero number: $|-30 + 17i|$ is not $0$, as $-30 + 17i$ is not $0$."
                },
                {
                  "step": "$\\left|\\dfrac{-17 - 28i}{-30 + 17i}\\right| = \\dfrac{\\sqrt{1073}}{\\sqrt{1189}}$",
                  "reason": "Magnitude: $|-17 - 28i| = \\sqrt{(-17)^2 + (-28)^2} = \\sqrt{289 + 784} = \\sqrt{1073}$ and $|-30 + 17i| = \\sqrt{(-30)^2 + 17^2} = \\sqrt{900 + 289} = \\sqrt{1189}$."
                },
                {
                  "step": "$\\left|\\dfrac{-17 - 28i}{-30 + 17i}\\right| = \\sqrt{\\dfrac{37}{41}}$",
                  "reason": "Root of a quotient: $\\dfrac{\\sqrt{1073}}{\\sqrt{1189}} = \\sqrt{\\dfrac{1073}{1189}}$, and the common factor $29$ of $1073$ and $1189$ cancels."
                },
                {
                  "step": "$\\left|\\dfrac{-17 - 28i}{-30 + 17i}\\right| = \\dfrac{\\sqrt{1517}}{41}$",
                  "reason": "Rationalising the denominator: $\\sqrt{\\dfrac{37}{41}} = \\dfrac{\\sqrt{37}}{\\sqrt{41}}$, and the top and the bottom times $\\sqrt{41}$ give $\\dfrac{\\sqrt{1517}}{41}$, with $1517$ free of square factors greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find $\\left|\\dfrac{8 - 27i}{-29 - 2i}\\right|$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "sqrt(3965)/65",
              "lines": [
                {
                  "step": "Find $\\left|\\dfrac{8 - 27i}{-29 - 2i}\\right|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{8 - 27i}{-29 - 2i} \\cdot (-29 - 2i) = 8 - 27i$",
                  "reason": "Definition of fraction division, from arithmetic: a quotient times the number divided by is the number divided."
                },
                {
                  "step": "$\\left|\\dfrac{8 - 27i}{-29 - 2i}\\right| \\cdot |-29 - 2i| = |8 - 27i|$",
                  "reason": "Magnitude of a product, used on the product of line 2."
                },
                {
                  "step": "$\\left|\\dfrac{8 - 27i}{-29 - 2i}\\right| = \\dfrac{|8 - 27i|}{|-29 - 2i|}$",
                  "reason": "Dividing both sides by a nonzero number: $|-29 - 2i|$ is not $0$, as $-29 - 2i$ is not $0$."
                },
                {
                  "step": "$\\left|\\dfrac{8 - 27i}{-29 - 2i}\\right| = \\dfrac{\\sqrt{793}}{\\sqrt{845}}$",
                  "reason": "Magnitude: $|8 - 27i| = \\sqrt{8^2 + (-27)^2} = \\sqrt{64 + 729} = \\sqrt{793}$ and $|-29 - 2i| = \\sqrt{(-29)^2 + (-2)^2} = \\sqrt{841 + 4} = \\sqrt{845}$."
                },
                {
                  "step": "$\\left|\\dfrac{8 - 27i}{-29 - 2i}\\right| = \\sqrt{\\dfrac{61}{65}}$",
                  "reason": "Root of a quotient: $\\dfrac{\\sqrt{793}}{\\sqrt{845}} = \\sqrt{\\dfrac{793}{845}}$, and the common factor $13$ of $793$ and $845$ cancels."
                },
                {
                  "step": "$\\left|\\dfrac{8 - 27i}{-29 - 2i}\\right| = \\dfrac{\\sqrt{3965}}{65}$",
                  "reason": "Rationalising the denominator: $\\sqrt{\\dfrac{61}{65}} = \\dfrac{\\sqrt{61}}{\\sqrt{65}}$, and the top and the bottom times $\\sqrt{65}$ give $\\dfrac{\\sqrt{3965}}{65}$, with $3965$ free of square factors greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find $\\left|\\dfrac{29 + 13i}{23 - 28i}\\right|$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "sqrt(130)/13",
              "lines": [
                {
                  "step": "Find $\\left|\\dfrac{29 + 13i}{23 - 28i}\\right|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{29 + 13i}{23 - 28i} \\cdot (23 - 28i) = 29 + 13i$",
                  "reason": "Definition of fraction division, from arithmetic: a quotient times the number divided by is the number divided."
                },
                {
                  "step": "$\\left|\\dfrac{29 + 13i}{23 - 28i}\\right| \\cdot |23 - 28i| = |29 + 13i|$",
                  "reason": "Magnitude of a product, used on the product of line 2."
                },
                {
                  "step": "$\\left|\\dfrac{29 + 13i}{23 - 28i}\\right| = \\dfrac{|29 + 13i|}{|23 - 28i|}$",
                  "reason": "Dividing both sides by a nonzero number: $|23 - 28i|$ is not $0$, as $23 - 28i$ is not $0$."
                },
                {
                  "step": "$\\left|\\dfrac{29 + 13i}{23 - 28i}\\right| = \\dfrac{\\sqrt{1010}}{\\sqrt{1313}}$",
                  "reason": "Magnitude: $|29 + 13i| = \\sqrt{29^2 + 13^2} = \\sqrt{841 + 169} = \\sqrt{1010}$ and $|23 - 28i| = \\sqrt{23^2 + (-28)^2} = \\sqrt{529 + 784} = \\sqrt{1313}$."
                },
                {
                  "step": "$\\left|\\dfrac{29 + 13i}{23 - 28i}\\right| = \\sqrt{\\dfrac{10}{13}}$",
                  "reason": "Root of a quotient: $\\dfrac{\\sqrt{1010}}{\\sqrt{1313}} = \\sqrt{\\dfrac{1010}{1313}}$, and the common factor $101$ of $1010$ and $1313$ cancels."
                },
                {
                  "step": "$\\left|\\dfrac{29 + 13i}{23 - 28i}\\right| = \\dfrac{\\sqrt{130}}{13}$",
                  "reason": "Rationalising the denominator: $\\sqrt{\\dfrac{10}{13}} = \\dfrac{\\sqrt{10}}{\\sqrt{13}}$, and the top and the bottom times $\\sqrt{13}$ give $\\dfrac{\\sqrt{130}}{13}$, with $130$ free of square factors greater than $1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t188-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $|z|$ for the complex number $z$ with $z + |z| = 15 - 22i$.",
            "lines": [
              {
                "step": "Find $|z|$ for the complex number $z$ with $z + |z| = 15 - 22i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $r = |z|$, a real number; then $z = (15 - r) - 22i$.",
                "reason": "Adding the same number to both sides: $-r$ is added to both sides of $z + r = 15 - 22i$."
              },
              {
                "step": "$r = \\sqrt{(15 - r)^2 + (-22)^2}$",
                "reason": "Magnitude: $r$ is real, so the real part of $z$ is $15 - r$ and its imaginary part is $-22$."
              },
              {
                "step": "$r^2 = (15 - r)^2 + 484$",
                "reason": "Raising both sides to a power: both sides are squared, and $(-22)^2 = 484$."
              },
              {
                "step": "$r^2 = 225 - 30r + r^2 + 484$",
                "reason": "Square of a binomial: $(15 - r)^2 = 225 - 30r + r^2$."
              },
              {
                "step": "$30r = 709$",
                "reason": "Adding the same number to both sides: $30r - r^2$ is added to both sides, and $225 + 484 = 709$."
              },
              {
                "step": "$r = \\dfrac{709}{30}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $30$."
              },
              {
                "step": "Check: $z = \\left(15 - \\dfrac{709}{30}\\right) - 22i = -\\dfrac{259}{30} - 22i$, and $|z| = \\sqrt{\\dfrac{67{,}081}{900} + \\dfrac{435{,}600}{900}} = \\sqrt{\\dfrac{502{,}681}{900}} = \\dfrac{709}{30}$.",
                "reason": "Checking in the original equation: the magnitude of this $z$ is $r$, so $z + |z| = 15 - 22i$ holds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $|z|$ for the complex number $z$ with $z + |z| = 16 + 23i$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "785/32",
              "lines": [
                {
                  "step": "Find $|z|$ for the complex number $z$ with $z + |z| = 16 + 23i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $r = |z|$, a real number; then $z = (16 - r) + 23i$.",
                  "reason": "Adding the same number to both sides: $-r$ is added to both sides of $z + r = 16 + 23i$."
                },
                {
                  "step": "$r = \\sqrt{(16 - r)^2 + 23^2}$",
                  "reason": "Magnitude: $r$ is real, so the real part of $z$ is $16 - r$ and its imaginary part is $23$."
                },
                {
                  "step": "$r^2 = (16 - r)^2 + 529$",
                  "reason": "Raising both sides to a power: both sides are squared, and $23^2 = 529$."
                },
                {
                  "step": "$r^2 = 256 - 32r + r^2 + 529$",
                  "reason": "Square of a binomial: $(16 - r)^2 = 256 - 32r + r^2$."
                },
                {
                  "step": "$32r = 785$",
                  "reason": "Adding the same number to both sides: $32r - r^2$ is added to both sides, and $256 + 529 = 785$."
                },
                {
                  "step": "$r = \\dfrac{785}{32}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $32$."
                },
                {
                  "step": "Check: $z = \\left(16 - \\dfrac{785}{32}\\right) + 23i = -\\dfrac{273}{32} + 23i$, and $|z| = \\sqrt{\\dfrac{74{,}529}{1024} + \\dfrac{541{,}696}{1024}} = \\sqrt{\\dfrac{616{,}225}{1024}} = \\dfrac{785}{32}$.",
                  "reason": "Checking in the original equation: the magnitude of this $z$ is $r$, so $z + |z| = 16 + 23i$ holds."
                }
              ]
            },
            {
              "prompt": "Find $|z|$ for the complex number $z$ with $z - |z| = -8 + 23i$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "593/16",
              "lines": [
                {
                  "step": "Find $|z|$ for the complex number $z$ with $z - |z| = -8 + 23i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $r = |z|$, a real number; then $z = (-8 + r) + 23i$.",
                  "reason": "Adding the same number to both sides: $r$ is added to both sides of $z - r = -8 + 23i$."
                },
                {
                  "step": "$r = \\sqrt{(-8 + r)^2 + 23^2}$",
                  "reason": "Magnitude: $r$ is real, so the real part of $z$ is $-8 + r$ and its imaginary part is $23$."
                },
                {
                  "step": "$r^2 = (-8 + r)^2 + 529$",
                  "reason": "Raising both sides to a power: both sides are squared, and $23^2 = 529$."
                },
                {
                  "step": "$r^2 = 64 - 16r + r^2 + 529$",
                  "reason": "Square of a binomial: $(-8 + r)^2 = 64 - 16r + r^2$."
                },
                {
                  "step": "$16r = 593$",
                  "reason": "Adding the same number to both sides: $16r - r^2$ is added to both sides, and $64 + 529 = 593$."
                },
                {
                  "step": "$r = \\dfrac{593}{16}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$."
                },
                {
                  "step": "Check: $z = \\left(-8 + \\dfrac{593}{16}\\right) + 23i = \\dfrac{465}{16} + 23i$, and $|z| = \\sqrt{\\dfrac{216{,}225}{256} + \\dfrac{135{,}424}{256}} = \\sqrt{\\dfrac{351{,}649}{256}} = \\dfrac{593}{16}$.",
                  "reason": "Checking in the original equation: the magnitude of this $z$ is $r$, so $z - |z| = -8 + 23i$ holds."
                }
              ]
            },
            {
              "prompt": "Find $|z|$ for the complex number $z$ with $z + |z| = 6 + 25i$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "661/12",
              "lines": [
                {
                  "step": "Find $|z|$ for the complex number $z$ with $z + |z| = 6 + 25i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $r = |z|$, a real number; then $z = (6 - r) + 25i$.",
                  "reason": "Adding the same number to both sides: $-r$ is added to both sides of $z + r = 6 + 25i$."
                },
                {
                  "step": "$r = \\sqrt{(6 - r)^2 + 25^2}$",
                  "reason": "Magnitude: $r$ is real, so the real part of $z$ is $6 - r$ and its imaginary part is $25$."
                },
                {
                  "step": "$r^2 = (6 - r)^2 + 625$",
                  "reason": "Raising both sides to a power: both sides are squared, and $25^2 = 625$."
                },
                {
                  "step": "$r^2 = 36 - 12r + r^2 + 625$",
                  "reason": "Square of a binomial: $(6 - r)^2 = 36 - 12r + r^2$."
                },
                {
                  "step": "$12r = 661$",
                  "reason": "Adding the same number to both sides: $12r - r^2$ is added to both sides, and $36 + 625 = 661$."
                },
                {
                  "step": "$r = \\dfrac{661}{12}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
                },
                {
                  "step": "Check: $z = \\left(6 - \\dfrac{661}{12}\\right) + 25i = -\\dfrac{589}{12} + 25i$, and $|z| = \\sqrt{\\dfrac{346{,}921}{144} + \\dfrac{90{,}000}{144}} = \\sqrt{\\dfrac{436{,}921}{144}} = \\dfrac{661}{12}$.",
                  "reason": "Checking in the original equation: the magnitude of this $z$ is $r$, so $z + |z| = 6 + 25i$ holds."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t188-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working of $|8[(26 + 9i) + (-24 + 26i)]|$, and write that line right.",
            "given": [
              "$|8[(26 + 9i) + (-24 + 26i)]|$",
              "$|8| \\cdot |(26 + 9i) + (-24 + 26i)|$",
              "$8(\\sqrt{757} + \\sqrt{1252})$",
              "$8\\sqrt{757} + 8\\sqrt{1252}$",
              "$8\\sqrt{757} + 16\\sqrt{313}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working of $|8[(26 + 9i) + (-24 + 26i)]|$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 writes $|(26 + 9i) + (-24 + 26i)|$ as $\\sqrt{757} + \\sqrt{1252}$, the sum of the magnitudes of $26 + 9i$ and $-24 + 26i$.",
                "reason": "A root taken term by term over a sum: the magnitude of a number is the root of the sum of the squares of its parts, so the sum $(26 + 9i) + (-24 + 26i)$ is collected first and its magnitude is taken once."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $8\\sqrt{1229}$.",
                "reason": "Collecting like terms gives $(26 + 9i) + (-24 + 26i) = 2 + 35i$, and Magnitude gives $|2 + 35i| = \\sqrt{2^2 + 35^2} = \\sqrt{1229}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working of $|7[(-22 - 23i) + (-9 + 18i)]|$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 7*sqrt(986)",
              "given": [
                "$|7[(-22 - 23i) + (-9 + 18i)]|$",
                "$|7| \\cdot |(-22 - 23i) + (-9 + 18i)|$",
                "$7(\\sqrt{1013} + \\sqrt{405})$",
                "$7\\sqrt{1013} + 7\\sqrt{405}$",
                "$7\\sqrt{1013} + 63\\sqrt{5}$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $|7[(-22 - 23i) + (-9 + 18i)]|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $|(-22 - 23i) + (-9 + 18i)|$ as $\\sqrt{1013} + \\sqrt{405}$, the sum of the magnitudes of $-22 - 23i$ and $-9 + 18i$.",
                  "reason": "A root taken term by term over a sum: the magnitude of a number is the root of the sum of the squares of its parts, so the sum $(-22 - 23i) + (-9 + 18i)$ is collected first and its magnitude is taken once."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $7\\sqrt{986}$.",
                  "reason": "Collecting like terms gives $(-22 - 23i) + (-9 + 18i) = -31 - 5i$, and Magnitude gives $|-31 - 5i| = \\sqrt{(-31)^2 + (-5)^2} = \\sqrt{986}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $|9[(19 + 23i) + (-17 + 10i)]|$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 9*sqrt(1093)",
              "given": [
                "$|9[(19 + 23i) + (-17 + 10i)]|$",
                "$|9| \\cdot |(19 + 23i) + (-17 + 10i)|$",
                "$9|(19 + 23i) + (-17 + 10i)|$",
                "$9(\\sqrt{890} + \\sqrt{389})$",
                "$9\\sqrt{890} + 9\\sqrt{389}$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $|9[(19 + 23i) + (-17 + 10i)]|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $|(19 + 23i) + (-17 + 10i)|$ as $\\sqrt{890} + \\sqrt{389}$, the sum of the magnitudes of $19 + 23i$ and $-17 + 10i$.",
                  "reason": "A root taken term by term over a sum: the magnitude of a number is the root of the sum of the squares of its parts, so the sum $(19 + 23i) + (-17 + 10i)$ is collected first and its magnitude is taken once."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $9\\sqrt{1093}$.",
                  "reason": "Collecting like terms gives $(19 + 23i) + (-17 + 10i) = 2 + 33i$, and Magnitude gives $|2 + 33i| = \\sqrt{2^2 + 33^2} = \\sqrt{1093}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $|5[(21 + 26i) + (7 - 15i)]|$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 5*sqrt(905)",
              "given": [
                "$|5[(21 + 26i) + (7 - 15i)]|$",
                "$|5| \\cdot |(21 + 26i) + (7 - 15i)|$",
                "$5|(21 + 26i) + (7 - 15i)|$",
                "$5(\\sqrt{1117} + \\sqrt{274})$",
                "$5\\sqrt{1117} + 5\\sqrt{274}$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $|5[(21 + 26i) + (7 - 15i)]|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $|(21 + 26i) + (7 - 15i)|$ as $\\sqrt{1117} + \\sqrt{274}$, the sum of the magnitudes of $21 + 26i$ and $7 - 15i$.",
                  "reason": "A root taken term by term over a sum: the magnitude of a number is the root of the sum of the squares of its parts, so the sum $(21 + 26i) + (7 - 15i)$ is collected first and its magnitude is taken once."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $5\\sqrt{905}$.",
                  "reason": "Collecting like terms gives $(21 + 26i) + (7 - 15i) = 28 + 11i$, and Magnitude gives $|28 + 11i| = \\sqrt{28^2 + 11^2} = \\sqrt{905}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working of $|(23 + 5i)(13 - 8i)|$, and write that line right.",
            "given": [
              "$|(23 + 5i)(13 - 8i)|$",
              "$|23 + 5i| \\cdot |13 - 8i|$",
              "$\\sqrt{23^2 + 5^2} \\cdot \\sqrt{13^2 + (-8)^2}$",
              "$\\sqrt{529 + 25} \\cdot \\sqrt{169 - 64}$",
              "$\\sqrt{554} \\cdot \\sqrt{105}$",
              "$\\sqrt{58{,}170}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working of $|(23 + 5i)(13 - 8i)|$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 to 3 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 4 writes the square of $-8$ as $-64$.",
                "reason": "A sign lost: by Signs of products the square of a negative number is positive, so $(-8)^2 = 64$."
              },
              {
                "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 4 written right is $\\sqrt{529 + 25} \\cdot \\sqrt{169 + 64}$.",
                "reason": "Magnitude: each part of $13 - 8i$ is squared, and the square of $-8$ is $64$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working of $|(28 - 4i)(12 + 40i)|$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(784+16)*sqrt(144+1600)",
              "given": [
                "$|(28 - 4i)(12 + 40i)|$",
                "$|28 - 4i| \\cdot |12 + 40i|$",
                "$\\sqrt{784 - 16} \\cdot \\sqrt{144 + 1600}$",
                "$\\sqrt{768} \\cdot \\sqrt{1744}$",
                "$16\\sqrt{3} \\cdot 4\\sqrt{109}$",
                "$64\\sqrt{327}$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $|(28 - 4i)(12 + 40i)|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes the square of $-4$ as $-16$.",
                  "reason": "A sign lost: by Signs of products the square of a negative number is positive, so $(-4)^2 = 16$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{784 + 16} \\cdot \\sqrt{144 + 1600}$.",
                  "reason": "Magnitude: each part of $28 - 4i$ is squared, and the square of $-4$ is $16$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $|(36 + 13i)(-12 + 36i)|$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(1296+169)*sqrt(144+1296)",
              "given": [
                "$|(36 + 13i)(-12 + 36i)|$",
                "$|36 + 13i| \\cdot |-12 + 36i|$",
                "$\\sqrt{1296 + 169} \\cdot \\sqrt{-144 + 1296}$",
                "$\\sqrt{1465} \\cdot \\sqrt{1152}$",
                "$\\sqrt{1465} \\cdot 24\\sqrt{2}$",
                "$24\\sqrt{2930}$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $|(36 + 13i)(-12 + 36i)|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes the square of $-12$ as $-144$.",
                  "reason": "A sign lost: by Signs of products the square of a negative number is positive, so $(-12)^2 = 144$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{1296 + 169} \\cdot \\sqrt{144 + 1296}$.",
                  "reason": "Magnitude: each part of $-12 + 36i$ is squared, and the square of $-12$ is $144$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $|(-4 + 40i)(12 + 27i)|$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(16+1600)*sqrt(144+729)",
              "given": [
                "$|(-4 + 40i)(12 + 27i)|$",
                "$|-4 + 40i| \\cdot |12 + 27i|$",
                "$\\sqrt{-16 + 1600} \\cdot \\sqrt{144 + 729}$",
                "$\\sqrt{1584} \\cdot \\sqrt{873}$",
                "$12\\sqrt{11} \\cdot 3\\sqrt{97}$",
                "$36\\sqrt{1067}$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $|(-4 + 40i)(12 + 27i)|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes the square of $-4$ as $-16$.",
                  "reason": "A sign lost: by Signs of products the square of a negative number is positive, so $(-4)^2 = 16$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{16 + 1600} \\cdot \\sqrt{144 + 729}$.",
                  "reason": "Magnitude: each part of $-4 + 40i$ is squared, and the square of $-4$ is $16$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t188-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $z$ alone on the left, where $x$ is a real number: The number $z$ is the conjugate of $x + 7i$, divided by 8.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $z$ alone on the left, where $x$ is a real number: The number $z$ is the conjugate of $x + 7i$, divided by 8.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate of $x + 7i$ is $x - 7i$.",
                "reason": "Complex conjugate: $x$ is real, so the imaginary part of $x + 7i$, $7$, changes its sign."
              },
              {
                "step": "$z = \\dfrac{x - 7i}{8}$",
                "reason": "Writing a sentence as an equation: \"divided by\" divides the whole conjugate by $8$, and \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left, where $x$ is a real number: The number $z$ is $x - 18i$ minus its conjugate.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (x-18*i)-(x+18*i)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left, where $x$ is a real number: The number $z$ is $x - 18i$ minus its conjugate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $x - 18i$ is $x + 18i$.",
                  "reason": "Complex conjugate: $x$ is real, so the imaginary part of $x - 18i$, $-18$, changes its sign."
                },
                {
                  "step": "$z = (x - 18i) - (x + 18i)$",
                  "reason": "Writing a sentence as an equation: \"minus\" takes the conjugate away from the number, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left, where $x$ is a real number: The number $z$ is half the sum of $4 + xi$ and its conjugate.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = ((4+x*i)+(4-x*i))/2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left, where $x$ is a real number: The number $z$ is half the sum of $4 + xi$ and its conjugate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $4 + xi$ is $4 - xi$.",
                  "reason": "Complex conjugate: $x$ is real, so the imaginary part of $4 + xi$, $x$, changes its sign."
                },
                {
                  "step": "$z = \\dfrac{(4 + xi) + (4 - xi)}{2}$",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the number and its conjugate, and \"half\" divides that sum by $2$, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left, where $x$ is a real number: The number $z$ is the reciprocal of the conjugate of $13 - xi$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 1/(13+x*i)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left, where $x$ is a real number: The number $z$ is the reciprocal of the conjugate of $13 - xi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $13 - xi$ is $13 + xi$.",
                  "reason": "Complex conjugate: $x$ is real, so the imaginary part of $13 - xi$, $-x$, changes its sign."
                },
                {
                  "step": "$z = \\dfrac{1}{13 + xi}$",
                  "reason": "Writing a sentence as an equation: \"the reciprocal of\" divides $1$ by the whole conjugate, and \"is\" marks the place of the equals sign."
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
      "id": "t188-p1",
      "method": "direct proof",
      "statement": "For real numbers $a$, $b$, $c$ and $d$, $|(a + bi)(c + di)| = |a + bi| \\cdot |c + di|$.",
      "idea": "Multiply the two numbers out and take the magnitude of the product: the sum of squares under the root factors as $(a^2 + b^2)(c^2 + d^2)$, and the root of that product splits into the two magnitudes.",
      "lines": [
        {
          "line": "Let $a$, $b$, $c$ and $d$ be real numbers.",
          "reason": "The statement is about every two complex numbers $a + bi$ and $c + di$, so two of them are named."
        },
        {
          "line": "The product $(a + bi)(c + di)$ equals $ac + adi + bci + bdi^2$.",
          "reason": "Every term of one bracket times every term of the other."
        },
        {
          "line": "The term $bdi^2$ equals $-bd$.",
          "reason": "The number $i$ with $i^2 = -1$."
        },
        {
          "line": "So the product equals $ac + adi + bci - bd$.",
          "reason": "Line 2, with $bdi^2$ replaced by its value in line 3."
        },
        {
          "line": "So the product equals $(ac - bd) + (ad + bc)i$.",
          "reason": "Collecting like terms, used on line 4: the real terms together and the terms in $i$ together."
        },
        {
          "line": "So $|(a + bi)(c + di)| = \\sqrt{(ac - bd)^2 + (ad + bc)^2}$.",
          "reason": "Magnitude, with the real part $ac - bd$ and the imaginary part $ad + bc$ of line 5."
        },
        {
          "line": "The square $(ac - bd)^2$ equals $a^2c^2 - 2abcd + b^2d^2$.",
          "reason": "Square of a binomial."
        },
        {
          "line": "The square $(ad + bc)^2$ equals $a^2d^2 + 2abcd + b^2c^2$.",
          "reason": "Square of a binomial."
        },
        {
          "line": "So the sum of the two squares equals $a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2$.",
          "reason": "Collecting like terms, used on lines 7 and 8: $-2abcd$ and $2abcd$ add to $0$."
        },
        {
          "line": "The sum $a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2$ equals $(a^2 + b^2)(c^2 + d^2)$.",
          "reason": "Factoring by grouping: $a^2$ comes out of the first two terms and $b^2$ out of the last two, and both leave the bracket $c^2 + d^2$."
        },
        {
          "line": "So $(ac - bd)^2 + (ad + bc)^2 = (a^2 + b^2)(c^2 + d^2)$.",
          "reason": "Lines 9 and 10, with the transitive property."
        },
        {
          "line": "So $|(a + bi)(c + di)| = \\sqrt{(a^2 + b^2)(c^2 + d^2)}$.",
          "reason": "Line 6, with the sum under the root replaced by its value in line 11."
        },
        {
          "line": "The squares $a^2$, $b^2$, $c^2$ and $d^2$ are at least $0$.",
          "reason": "Trivial Inequality."
        },
        {
          "line": "So $a^2 + b^2$ and $c^2 + d^2$ are at least $0$.",
          "reason": "Adding two inequalities of line 13 keeps the order, from arithmetic."
        },
        {
          "line": "So $\\sqrt{(a^2 + b^2)(c^2 + d^2)} = \\sqrt{a^2 + b^2} \\cdot \\sqrt{c^2 + d^2}$.",
          "reason": "Root of a product, which line 14 allows."
        },
        {
          "line": "The roots $\\sqrt{a^2 + b^2}$ and $\\sqrt{c^2 + d^2}$ are $|a + bi|$ and $|c + di|$.",
          "reason": "Magnitude."
        },
        {
          "line": "So $\\sqrt{(a^2 + b^2)(c^2 + d^2)} = |a + bi| \\cdot |c + di|$.",
          "reason": "Line 15, with the two roots replaced by their values in line 16."
        },
        {
          "line": "Therefore $|(a + bi)(c + di)| = |a + bi| \\cdot |c + di|$.",
          "reason": "Lines 12 and 17, with the transitive property."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t188-s1",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$ and $b$, the complex conjugate of $a + bi$ has the same magnitude as $a + bi$: $|a - bi| = |a + bi|$. Facts it may use: complex conjugate, Magnitude, Signs of products, the symmetric and the transitive properties.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be real numbers.",
            "reason": "The statement is about every complex number $a + bi$, so one of them is named."
          },
          {
            "line": "The complex conjugate of $a + bi$ is $a - bi$, the number with real part $a$ and imaginary part $-b$.",
            "reason": "Complex conjugate: the sign of the imaginary part is reversed."
          },
          {
            "line": "So $|a - bi| = \\sqrt{a^2 + (-b)^2}$.",
            "reason": "Magnitude, with the real part $a$ and the imaginary part $-b$ of line 2."
          },
          {
            "line": "The square $(-b)^2$ equals $b^2$.",
            "reason": "Signs of products: $(-b)(-b) = b \\cdot b$."
          },
          {
            "line": "So $|a - bi| = \\sqrt{a^2 + b^2}$.",
            "reason": "Line 3, with $(-b)^2$ replaced by its value in line 4."
          },
          {
            "line": "The magnitude $|a + bi|$ equals $\\sqrt{a^2 + b^2}$.",
            "reason": "Magnitude."
          },
          {
            "line": "Therefore $|a - bi| = |a + bi|$.",
            "reason": "Lines 5 and 6, with the symmetric and the transitive properties."
          }
        ]
      }
    },
    {
      "id": "t188-s2",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$, $b$, $c$ and $d$, with $c$ and $d$ not both $0$, $\\left|\\dfrac{a + bi}{c + di}\\right| = \\dfrac{|a + bi|}{|c + di|}$. Facts it may use: Magnitude of a product, Magnitude, two complex numbers are equal when their real parts and their imaginary parts are equal, A sum of squares is zero only when each is zero, Trivial Inequality, Positive square root, Dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "Let $a$, $b$, $c$ and $d$ be real numbers, with $c$ and $d$ not both $0$.",
            "reason": "This is the condition of the statement."
          },
          {
            "line": "The sum $c^2 + d^2$ is not $0$.",
            "reason": "A sum of squares is zero only when each is zero, and $c$ and $d$ are not both $0$."
          },
          {
            "line": "The number $c + di$ is not $0$.",
            "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $c + di = 0 + 0i$ only when $c = 0$ and $d = 0$, and by line 1 they are not both $0$."
          },
          {
            "line": "The quotient $\\dfrac{a + bi}{c + di}$ times $c + di$ is $a + bi$.",
            "reason": "Definition of fraction division, from arithmetic, as $c + di$ is not $0$ by line 3."
          },
          {
            "line": "So $\\left|\\dfrac{a + bi}{c + di}\\right| \\cdot |c + di| = |a + bi|$.",
            "reason": "Magnitude of a product, used on the product of line 4."
          },
          {
            "line": "The magnitude $|c + di|$ equals $\\sqrt{c^2 + d^2}$.",
            "reason": "Magnitude."
          },
          {
            "line": "The squares $c^2$ and $d^2$ are at least $0$.",
            "reason": "Trivial Inequality."
          },
          {
            "line": "So $c^2 + d^2$ is at least $0$.",
            "reason": "Adding two inequalities of line 7 keeps the order, from arithmetic."
          },
          {
            "line": "So the square of $|c + di|$ is $c^2 + d^2$.",
            "reason": "Positive square root, used on lines 6 and 8."
          },
          {
            "line": "So $|c + di|$ is not $0$.",
            "reason": "The square of $0$ is $0$, and $c^2 + d^2$, the square of $|c + di|$ by line 9, is not $0$ by line 2."
          },
          {
            "line": "Therefore $\\left|\\dfrac{a + bi}{c + di}\\right| = \\dfrac{|a + bi|}{|c + di|}$.",
            "reason": "Dividing both sides by a nonzero number: both sides of line 5 are divided by $|c + di|$, which is not $0$ by line 10."
          }
        ]
      }
    }
  ]
}
