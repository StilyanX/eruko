// Dividing rational numbers: division as multiplication by the inverse, the rational quotient laws,
// and the proofs to read and the statements to prove that go with them.
export default {
  "number": 26,
  "manyParts": false,
  "bare": {
    "prompt": "Compute $-\\dfrac{4}{7}\\div\\dfrac{2}{21}$.",
    "answer": "-6",
    "form": "Answer as an integer.",
    "solution": [
      "Compute $-\\dfrac{4}{7}\\div\\dfrac{2}{21}$.",
      "Invert the divisor and multiply: $-\\dfrac{4}{7}\\times\\dfrac{21}{2}$.",
      "$-\\dfrac{4}{7}\\times\\dfrac{21}{2}=-\\dfrac{84}{14}=-6$, by multiplying the numerators and the denominators, then dividing 84 by 14.",
      "$-6$."
    ]
  },
  "ideas": [
    {
      "name": "Multiplicative inverse",
      "concrete": "$\\left(-\\dfrac{1}{5}\\right)(-5)=1$, so $-\\dfrac{1}{5}$ is the multiplicative inverse of $-5$.",
      "general": "For a nonzero rational number $y$, its **multiplicative inverse** $y^{-1}$ is the unique rational number satisfying $yy^{-1}=1$."
    },
    {
      "name": "Division of rational numbers",
      "concrete": "$\\dfrac{13}{-5}=13\\times\\left(-\\dfrac{1}{5}\\right)=-\\dfrac{13}{5}$.",
      "general": "For rational numbers $x$ and $y$ with $y$ nonzero, the **quotient** $\\dfrac xy$ means $xy^{-1}$."
    },
    {
      "name": "Rational quotient",
      "concrete": "The quotient $\\dfrac{13}{-7}$ is a rational quotient with numerator $13$ and denominator $-7$.",
      "general": "For rational numbers $X$ and $Y$ with $Y$ nonzero, $\\dfrac XY$ is a **rational quotient**, with numerator $X$ and denominator $Y$. Every rational number is a quotient of two integers with a positive denominator."
    },
    {
      "name": "Negative quotient identities",
      "concrete": "$\\dfrac{-3}7=\\dfrac3{-7}=-\\dfrac{3}{7}$.",
      "general": "For integers $a$ and $b$ with $b$ nonzero, $\\dfrac{-a}b=\\dfrac a{-b}=-\\dfrac ab$."
    }
  ],
  "kinds": [
    {
      "id": "t26-k1",
      "forms": [
        {
          "example": {
            "problem": "Compute $\\dfrac{-\\frac34}{-\\frac9{10}}$.",
            "lines": [
              {
                "step": "Invert the divisor and multiply: $\\dfrac{-\\frac34}{-\\frac9{10}}=\\left(-\\dfrac{3}{4}\\right)\\times\\left(-\\dfrac{10}{9}\\right)$.",
                "reason": "division is multiplication by the divisor's multiplicative inverse"
              },
              {
                "step": "A negative number times a negative number is positive, so the product is $\\dfrac{30}{36}$.",
                "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
              },
              {
                "step": "$\\dfrac{5}{6}$.",
                "reason": "reducing $\\dfrac{30}{36}$ to lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $-\\dfrac{5}{9}\\div\\left(-\\dfrac{10}{3}\\right)$.",
              "answer": "1/6",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Invert the divisor and multiply: $-\\dfrac{5}{9}\\div\\left(-\\dfrac{10}{3}\\right)=\\left(-\\dfrac{5}{9}\\right)\\times\\left(-\\dfrac{3}{10}\\right)$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{15}{90}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$\\dfrac{1}{6}$.",
                  "reason": "reducing $\\dfrac{15}{90}$ to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $-\\dfrac{7}{12}\\div\\left(-\\dfrac{5}{6}\\right)$.",
              "answer": "7/10",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Invert the divisor and multiply: $-\\dfrac{7}{12}\\div\\left(-\\dfrac{5}{6}\\right)=\\left(-\\dfrac{7}{12}\\right)\\times\\left(-\\dfrac{6}{5}\\right)$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{42}{60}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$\\dfrac{7}{10}$.",
                  "reason": "reducing $\\dfrac{42}{60}$ to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $-\\dfrac{4}{15}\\div\\left(-\\dfrac{8}{9}\\right)$.",
              "answer": "3/10",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Invert the divisor and multiply: $-\\dfrac{4}{15}\\div\\left(-\\dfrac{8}{9}\\right)=\\left(-\\dfrac{4}{15}\\right)\\times\\left(-\\dfrac{9}{8}\\right)$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{36}{120}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$\\dfrac{3}{10}$.",
                  "reason": "reducing $\\dfrac{36}{120}$ to lowest terms"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{7}{-1.4}$.",
            "lines": [
              {
                "step": "Write the decimal $-1.4$ as a fraction: $\\dfrac{7}{-1.4}=\\dfrac{7}{-\\frac75}$.",
                "reason": "a finite decimal in tenths equals its digits over ten, reduced to lowest terms"
              },
              {
                "step": "Invert the divisor and multiply: $\\dfrac{7}{-\\frac75}=7\\times\\left(-\\dfrac{5}{7}\\right)$.",
                "reason": "division is multiplication by the divisor's multiplicative inverse"
              },
              {
                "step": "$-5$.",
                "reason": "multiplying and cancelling the common divisor $7$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{-9}{0.6}$.",
              "answer": "-15",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Write the decimal $0.6$ as a fraction: $\\dfrac{-9}{0.6}=\\dfrac{-9}{\\frac35}$.",
                  "reason": "a finite decimal in tenths equals its digits over ten, reduced to lowest terms"
                },
                {
                  "step": "Invert the divisor and multiply: $\\dfrac{-9}{\\frac35}=(-9)\\times\\dfrac{5}{3}$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "$-15$.",
                  "reason": "multiplying and cancelling the common divisor $3$"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{4.5}{-9}$.",
              "answer": "-1/2",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Write the decimal $4.5$ as a fraction: $\\dfrac{4.5}{-9}=\\dfrac{\\frac92}{-9}$.",
                  "reason": "a finite decimal in tenths equals its digits over ten, reduced to lowest terms"
                },
                {
                  "step": "Invert the divisor and multiply: $\\dfrac{\\frac92}{-9}=\\dfrac{9}{2}\\times\\left(-\\dfrac{1}{9}\\right)$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "$-\\dfrac{1}{2}$.",
                  "reason": "multiplying and cancelling the common divisor $9$"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{-10}{2.5}$.",
              "answer": "-4",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Write the decimal $2.5$ as a fraction: $\\dfrac{-10}{2.5}=\\dfrac{-10}{\\frac52}$.",
                  "reason": "a finite decimal in tenths equals its digits over ten, reduced to lowest terms"
                },
                {
                  "step": "Invert the divisor and multiply: $\\dfrac{-10}{\\frac52}=(-10)\\times\\dfrac{2}{5}$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "$-4$.",
                  "reason": "multiplying and cancelling the common divisor $5$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{9}{-20}+\\dfrac{-7}{-10}$.",
            "lines": [
              {
                "step": "The quotients rewrite as $\\dfrac{9}{-20}=-\\dfrac{9}{20}$ and $\\dfrac{-7}{-10}=\\dfrac{7}{10}$.",
                "reason": "a positive numerator over a negative denominator is negative, and a negative numerator over a negative denominator is positive"
              },
              {
                "step": "The terms have opposite signs, so the sum is $\\dfrac{7}{10}-\\dfrac{9}{20}=\\dfrac{14}{20}-\\dfrac{9}{20}=\\dfrac{5}{20}$.",
                "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
              },
              {
                "step": "$\\dfrac{1}{4}$.",
                "reason": "reducing $\\dfrac{5}{20}$ to lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{5}{-12}+\\dfrac{-3}{-4}$.",
              "answer": "1/3",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The quotients rewrite as $\\dfrac{5}{-12}=-\\dfrac{5}{12}$ and $\\dfrac{-3}{-4}=\\dfrac{3}{4}$.",
                  "reason": "a positive numerator over a negative denominator is negative, and a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "The terms have opposite signs, so the sum is $\\dfrac{3}{4}-\\dfrac{5}{12}=\\dfrac{9}{12}-\\dfrac{5}{12}=\\dfrac{4}{12}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$\\dfrac{1}{3}$.",
                  "reason": "reducing $\\dfrac{4}{12}$ to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{7}{-18}+\\dfrac{-5}{-6}$.",
              "answer": "4/9",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The quotients rewrite as $\\dfrac{7}{-18}=-\\dfrac{7}{18}$ and $\\dfrac{-5}{-6}=\\dfrac{5}{6}$.",
                  "reason": "a positive numerator over a negative denominator is negative, and a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "The terms have opposite signs, so the sum is $\\dfrac{5}{6}-\\dfrac{7}{18}=\\dfrac{15}{18}-\\dfrac{7}{18}=\\dfrac{8}{18}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$\\dfrac{4}{9}$.",
                  "reason": "reducing $\\dfrac{8}{18}$ to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{11}{-30}+\\dfrac{-8}{-15}$.",
              "answer": "1/6",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The quotients rewrite as $\\dfrac{11}{-30}=-\\dfrac{11}{30}$ and $\\dfrac{-8}{-15}=\\dfrac{8}{15}$.",
                  "reason": "a positive numerator over a negative denominator is negative, and a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "The terms have opposite signs, so the sum is $\\dfrac{8}{15}-\\dfrac{11}{30}=\\dfrac{16}{30}-\\dfrac{11}{30}=\\dfrac{5}{30}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$\\dfrac{1}{6}$.",
                  "reason": "reducing $\\dfrac{5}{30}$ to lowest terms"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{6}{-25}\\times\\dfrac{-15}{8}$.",
            "lines": [
              {
                "step": "$\\dfrac{6}{-25}=-\\dfrac{6}{25}$.",
                "reason": "a positive numerator over a negative denominator is negative"
              },
              {
                "step": "A negative number times a negative number is positive, so the product is $\\dfrac{90}{200}$.",
                "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
              },
              {
                "step": "$\\dfrac{9}{20}$.",
                "reason": "reducing $\\dfrac{90}{200}$ to lowest terms"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{-14}{27}\\times\\dfrac{9}{-35}$.",
              "answer": "2/15",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{9}{-35}=-\\dfrac{9}{35}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{126}{945}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$\\dfrac{2}{15}$.",
                  "reason": "reducing $\\dfrac{126}{945}$ to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{-8}{15}\\times\\dfrac{25}{-32}$.",
              "answer": "5/12",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{25}{-32}=-\\dfrac{25}{32}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{200}{480}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$\\dfrac{5}{12}$.",
                  "reason": "reducing $\\dfrac{200}{480}$ to lowest terms"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{10}{-21}\\times\\dfrac{-14}{15}$.",
              "answer": "4/9",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{10}{-21}=-\\dfrac{10}{21}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{140}{315}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$\\dfrac{4}{9}$.",
                  "reason": "reducing $\\dfrac{140}{315}$ to lowest terms"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{21}{-10}\\times\\dfrac{-25}{14}$.",
            "lines": [
              {
                "step": "$\\dfrac{21}{-10}=-\\dfrac{21}{10}$.",
                "reason": "a positive numerator over a negative denominator is negative"
              },
              {
                "step": "A negative number times a negative number is positive, so the product is $\\dfrac{525}{140}$.",
                "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
              },
              {
                "step": "$3\\,\\dfrac{3}{4}$.",
                "reason": "reducing $\\dfrac{525}{140}$ to $\\dfrac{15}{4}$, then writing the improper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{-33}{8}\\times\\dfrac{20}{-9}$.",
              "answer": "9 1/6",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{20}{-9}=-\\dfrac{20}{9}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{660}{72}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$9\\,\\dfrac{1}{6}$.",
                  "reason": "reducing $\\dfrac{660}{72}$ to $\\dfrac{55}{6}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{35}{-12}\\times\\dfrac{-18}{25}$.",
              "answer": "2 1/10",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{35}{-12}=-\\dfrac{35}{12}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{630}{300}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$2\\,\\dfrac{1}{10}$.",
                  "reason": "reducing $\\dfrac{630}{300}$ to $\\dfrac{21}{10}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{-26}{15}\\times\\dfrac{45}{-16}$.",
              "answer": "4 7/8",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{45}{-16}=-\\dfrac{45}{16}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{1\\,170}{240}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$4\\,\\dfrac{7}{8}$.",
                  "reason": "reducing $\\dfrac{1\\,170}{240}$ to $\\dfrac{39}{8}$, then writing the improper fraction as a mixed number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $-\\dfrac{3}{4}\\div\\dfrac{9}{-20}$.",
            "lines": [
              {
                "step": "$\\dfrac{9}{-20}=-\\dfrac{9}{20}$.",
                "reason": "a positive numerator over a negative denominator is negative"
              },
              {
                "step": "Invert the divisor and multiply: $-\\dfrac{3}{4}\\div\\left(-\\dfrac{9}{20}\\right)=\\left(-\\dfrac{3}{4}\\right)\\times\\left(-\\dfrac{20}{9}\\right)$.",
                "reason": "division is multiplication by the divisor's multiplicative inverse"
              },
              {
                "step": "A negative number times a negative number is positive, so the product is $\\dfrac{60}{36}$.",
                "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
              },
              {
                "step": "$1\\,\\dfrac{2}{3}$.",
                "reason": "reducing $\\dfrac{60}{36}$ to $\\dfrac{5}{3}$, then writing the improper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $-\\dfrac{5}{6}\\div\\dfrac{4}{-9}$.",
              "answer": "1 7/8",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{4}{-9}=-\\dfrac{4}{9}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "Invert the divisor and multiply: $-\\dfrac{5}{6}\\div\\left(-\\dfrac{4}{9}\\right)=\\left(-\\dfrac{5}{6}\\right)\\times\\left(-\\dfrac{9}{4}\\right)$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{45}{24}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$1\\,\\dfrac{7}{8}$.",
                  "reason": "reducing $\\dfrac{45}{24}$ to $\\dfrac{15}{8}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $-\\dfrac{7}{10}\\div\\dfrac{3}{-25}$.",
              "answer": "5 5/6",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{3}{-25}=-\\dfrac{3}{25}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "Invert the divisor and multiply: $-\\dfrac{7}{10}\\div\\left(-\\dfrac{3}{25}\\right)=\\left(-\\dfrac{7}{10}\\right)\\times\\left(-\\dfrac{25}{3}\\right)$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{175}{30}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$5\\,\\dfrac{5}{6}$.",
                  "reason": "reducing $\\dfrac{175}{30}$ to $\\dfrac{35}{6}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $-\\dfrac{8}{9}\\div\\dfrac{10}{-21}$.",
              "answer": "1 13/15",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{10}{-21}=-\\dfrac{10}{21}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "Invert the divisor and multiply: $-\\dfrac{8}{9}\\div\\left(-\\dfrac{10}{21}\\right)=\\left(-\\dfrac{8}{9}\\right)\\times\\left(-\\dfrac{21}{10}\\right)$.",
                  "reason": "division is multiplication by the divisor's multiplicative inverse"
                },
                {
                  "step": "A negative number times a negative number is positive, so the product is $\\dfrac{168}{90}$.",
                  "reason": "the sign rule for a product of two negative numbers, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$1\\,\\dfrac{13}{15}$.",
                  "reason": "reducing $\\dfrac{168}{90}$ to $\\dfrac{28}{15}$, then writing the improper fraction as a mixed number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{10}{-3}\\times\\dfrac{-9}{-14}$.",
            "lines": [
              {
                "step": "The quotients rewrite as $\\dfrac{10}{-3}=-\\dfrac{10}{3}$ and $\\dfrac{-9}{-14}=\\dfrac{9}{14}$.",
                "reason": "a positive numerator over a negative denominator is negative, and a negative numerator over a negative denominator is positive"
              },
              {
                "step": "A negative number times a positive number is negative, so the product is $-\\dfrac{90}{42}$.",
                "reason": "the sign rule for a product of a negative number and a positive number, then multiplying the numerators and the denominators"
              },
              {
                "step": "$-2\\,\\dfrac{1}{7}$.",
                "reason": "reducing $-\\dfrac{90}{42}$ to $-\\dfrac{15}{7}$, then writing the improper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{25}{-6}\\times\\dfrac{-9}{-10}$.",
              "answer": "-3 3/4",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The quotients rewrite as $\\dfrac{25}{-6}=-\\dfrac{25}{6}$ and $\\dfrac{-9}{-10}=\\dfrac{9}{10}$.",
                  "reason": "a positive numerator over a negative denominator is negative, and a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "A negative number times a positive number is negative, so the product is $-\\dfrac{225}{60}$.",
                  "reason": "the sign rule for a product of a negative number and a positive number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-3\\,\\dfrac{3}{4}$.",
                  "reason": "reducing $-\\dfrac{225}{60}$ to $-\\dfrac{15}{4}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{14}{-5}\\times\\dfrac{-15}{-8}$.",
              "answer": "-5 1/4",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The quotients rewrite as $\\dfrac{14}{-5}=-\\dfrac{14}{5}$ and $\\dfrac{-15}{-8}=\\dfrac{15}{8}$.",
                  "reason": "a positive numerator over a negative denominator is negative, and a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "A negative number times a positive number is negative, so the product is $-\\dfrac{210}{40}$.",
                  "reason": "the sign rule for a product of a negative number and a positive number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-5\\,\\dfrac{1}{4}$.",
                  "reason": "reducing $-\\dfrac{210}{40}$ to $-\\dfrac{21}{4}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{22}{-9}\\times\\dfrac{-12}{-11}$.",
              "answer": "-2 2/3",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "The quotients rewrite as $\\dfrac{22}{-9}=-\\dfrac{22}{9}$ and $\\dfrac{-12}{-11}=\\dfrac{12}{11}$.",
                  "reason": "a positive numerator over a negative denominator is negative, and a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "A negative number times a positive number is negative, so the product is $-\\dfrac{264}{99}$.",
                  "reason": "the sign rule for a product of a negative number and a positive number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-2\\,\\dfrac{2}{3}$.",
                  "reason": "reducing $-\\dfrac{264}{99}$ to $-\\dfrac{8}{3}$, then writing the improper fraction as a mixed number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{3}{-10}+\\dfrac{-7}{6}$.",
            "lines": [
              {
                "step": "$\\dfrac{3}{-10}=-\\dfrac{3}{10}$.",
                "reason": "a positive numerator over a negative denominator is negative"
              },
              {
                "step": "Both terms are negative, so the sum is $-\\left(\\dfrac{3}{10}+\\dfrac{7}{6}\\right)=-\\left(\\dfrac{9}{30}+\\dfrac{35}{30}\\right)=-\\dfrac{44}{30}$.",
                "reason": "the sum of vectors with the same direction has the sum of their lengths"
              },
              {
                "step": "$-1\\,\\dfrac{7}{15}$.",
                "reason": "reducing $-\\dfrac{44}{30}$ to $-\\dfrac{22}{15}$, then writing the improper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{5}{-6}+\\dfrac{-7}{10}$.",
              "answer": "-1 8/15",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{5}{-6}=-\\dfrac{5}{6}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "Both terms are negative, so the sum is $-\\left(\\dfrac{5}{6}+\\dfrac{7}{10}\\right)=-\\left(\\dfrac{25}{30}+\\dfrac{21}{30}\\right)=-\\dfrac{46}{30}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-1\\,\\dfrac{8}{15}$.",
                  "reason": "reducing $-\\dfrac{46}{30}$ to $-\\dfrac{23}{15}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{3}{-14}+\\dfrac{-9}{10}$.",
              "answer": "-1 4/35",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{3}{-14}=-\\dfrac{3}{14}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "Both terms are negative, so the sum is $-\\left(\\dfrac{3}{14}+\\dfrac{9}{10}\\right)=-\\left(\\dfrac{15}{70}+\\dfrac{63}{70}\\right)=-\\dfrac{78}{70}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-1\\,\\dfrac{4}{35}$.",
                  "reason": "reducing $-\\dfrac{78}{70}$ to $-\\dfrac{39}{35}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{7}{-6}+\\dfrac{-9}{10}$.",
              "answer": "-2 1/15",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{7}{-6}=-\\dfrac{7}{6}$.",
                  "reason": "a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "Both terms are negative, so the sum is $-\\left(\\dfrac{7}{6}+\\dfrac{9}{10}\\right)=-\\left(\\dfrac{35}{30}+\\dfrac{27}{30}\\right)=-\\dfrac{62}{30}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-2\\,\\dfrac{1}{15}$.",
                  "reason": "reducing $-\\dfrac{62}{30}$ to $-\\dfrac{31}{15}$, then writing the improper fraction as a mixed number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $-\\dfrac{3}{4}-\\dfrac{-5}{-3}$.",
            "lines": [
              {
                "step": "$\\dfrac{-5}{-3}=\\dfrac{5}{3}$.",
                "reason": "a negative numerator over a negative denominator is positive"
              },
              {
                "step": "$-\\dfrac{3}{4}-\\dfrac{5}{3}=-\\dfrac{3}{4}+\\left(-\\dfrac{5}{3}\\right)$.",
                "reason": "the definition of subtraction, $x-y=x+(-y)$"
              },
              {
                "step": "Both terms are negative, so the sum is $-\\left(\\dfrac{3}{4}+\\dfrac{5}{3}\\right)=-\\left(\\dfrac{9}{12}+\\dfrac{20}{12}\\right)=-\\dfrac{29}{12}$.",
                "reason": "the sum of vectors with the same direction has the sum of their lengths"
              },
              {
                "step": "$-2\\,\\dfrac{5}{12}$.",
                "reason": "writing the improper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $-\\dfrac{2}{3}-\\dfrac{-7}{-5}$.",
              "answer": "-2 1/15",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{-7}{-5}=\\dfrac{7}{5}$.",
                  "reason": "a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "$-\\dfrac{2}{3}-\\dfrac{7}{5}=-\\dfrac{2}{3}+\\left(-\\dfrac{7}{5}\\right)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Both terms are negative, so the sum is $-\\left(\\dfrac{2}{3}+\\dfrac{7}{5}\\right)=-\\left(\\dfrac{10}{15}+\\dfrac{21}{15}\\right)=-\\dfrac{31}{15}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-2\\,\\dfrac{1}{15}$.",
                  "reason": "writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $-\\dfrac{5}{6}-\\dfrac{-7}{-4}$.",
              "answer": "-2 7/12",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{-7}{-4}=\\dfrac{7}{4}$.",
                  "reason": "a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "$-\\dfrac{5}{6}-\\dfrac{7}{4}=-\\dfrac{5}{6}+\\left(-\\dfrac{7}{4}\\right)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Both terms are negative, so the sum is $-\\left(\\dfrac{5}{6}+\\dfrac{7}{4}\\right)=-\\left(\\dfrac{10}{12}+\\dfrac{21}{12}\\right)=-\\dfrac{31}{12}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-2\\,\\dfrac{7}{12}$.",
                  "reason": "writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $-\\dfrac{4}{7}-\\dfrac{-3}{-2}$.",
              "answer": "-2 1/14",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{-3}{-2}=\\dfrac{3}{2}$.",
                  "reason": "a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "$-\\dfrac{4}{7}-\\dfrac{3}{2}=-\\dfrac{4}{7}+\\left(-\\dfrac{3}{2}\\right)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Both terms are negative, so the sum is $-\\left(\\dfrac{4}{7}+\\dfrac{3}{2}\\right)=-\\left(\\dfrac{8}{14}+\\dfrac{21}{14}\\right)=-\\dfrac{29}{14}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-2\\,\\dfrac{1}{14}$.",
                  "reason": "writing the improper fraction as a mixed number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\left(\\dfrac{-27}{4}\\times\\dfrac{11}{12}\\right)+\\left(\\dfrac{27}{-4}\\times\\dfrac{-1}{4}\\right)$.",
            "lines": [
              {
                "step": "$\\dfrac{27}{-4}=\\dfrac{-27}{4}$, so both products have the factor $\\dfrac{-27}{4}$.",
                "reason": "the negative quotient identities, $\\dfrac a{-b}=\\dfrac{-a}b$"
              },
              {
                "step": "The sum is $\\dfrac{-27}{4}\\times\\left(\\dfrac{11}{12}+\\dfrac{-1}{4}\\right)$.",
                "reason": "the distributive law"
              },
              {
                "step": "The terms in the parentheses have opposite signs, so their sum is $\\dfrac{11}{12}-\\dfrac{3}{12}=\\dfrac{8}{12}=\\dfrac{2}{3}$.",
                "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer, then reducing $\\dfrac{8}{12}$ to lowest terms"
              },
              {
                "step": "A negative number times a positive number is negative, so the sum is $\\dfrac{-27}{4}\\times\\dfrac{2}{3}=-\\dfrac{54}{12}$.",
                "reason": "the sign rule for a product of a negative number and a positive number, then multiplying the numerators and the denominators"
              },
              {
                "step": "$-4\\,\\dfrac{1}{2}$.",
                "reason": "reducing $-\\dfrac{54}{12}$ to $-\\dfrac{9}{2}$, then writing the improper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\left(\\dfrac{-14}{3}\\times\\dfrac{5}{6}\\right)+\\left(\\dfrac{14}{-3}\\times\\dfrac{-1}{3}\\right)$.",
              "answer": "-2 1/3",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{14}{-3}=\\dfrac{-14}{3}$, so both products have the factor $\\dfrac{-14}{3}$.",
                  "reason": "the negative quotient identities, $\\dfrac a{-b}=\\dfrac{-a}b$"
                },
                {
                  "step": "The sum is $\\dfrac{-14}{3}\\times\\left(\\dfrac{5}{6}+\\dfrac{-1}{3}\\right)$.",
                  "reason": "the distributive law"
                },
                {
                  "step": "The terms in the parentheses have opposite signs, so their sum is $\\dfrac{5}{6}-\\dfrac{2}{6}=\\dfrac{3}{6}=\\dfrac{1}{2}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer, then reducing $\\dfrac{3}{6}$ to lowest terms"
                },
                {
                  "step": "A negative number times a positive number is negative, so the sum is $\\dfrac{-14}{3}\\times\\dfrac{1}{2}=-\\dfrac{14}{6}$.",
                  "reason": "the sign rule for a product of a negative number and a positive number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-2\\,\\dfrac{1}{3}$.",
                  "reason": "reducing $-\\dfrac{14}{6}$ to $-\\dfrac{7}{3}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\left(\\dfrac{-45}{8}\\times\\dfrac{13}{15}\\right)+\\left(\\dfrac{45}{-8}\\times\\dfrac{-1}{5}\\right)$.",
              "answer": "-3 3/4",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{45}{-8}=\\dfrac{-45}{8}$, so both products have the factor $\\dfrac{-45}{8}$.",
                  "reason": "the negative quotient identities, $\\dfrac a{-b}=\\dfrac{-a}b$"
                },
                {
                  "step": "The sum is $\\dfrac{-45}{8}\\times\\left(\\dfrac{13}{15}+\\dfrac{-1}{5}\\right)$.",
                  "reason": "the distributive law"
                },
                {
                  "step": "The terms in the parentheses have opposite signs, so their sum is $\\dfrac{13}{15}-\\dfrac{3}{15}=\\dfrac{10}{15}=\\dfrac{2}{3}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer, then reducing $\\dfrac{10}{15}$ to lowest terms"
                },
                {
                  "step": "A negative number times a positive number is negative, so the sum is $\\dfrac{-45}{8}\\times\\dfrac{2}{3}=-\\dfrac{90}{24}$.",
                  "reason": "the sign rule for a product of a negative number and a positive number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-3\\,\\dfrac{3}{4}$.",
                  "reason": "reducing $-\\dfrac{90}{24}$ to $-\\dfrac{15}{4}$, then writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\left(\\dfrac{-26}{5}\\times\\dfrac{11}{14}\\right)+\\left(\\dfrac{26}{-5}\\times\\dfrac{-2}{7}\\right)$.",
              "answer": "-2 3/5",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$\\dfrac{26}{-5}=\\dfrac{-26}{5}$, so both products have the factor $\\dfrac{-26}{5}$.",
                  "reason": "the negative quotient identities, $\\dfrac a{-b}=\\dfrac{-a}b$"
                },
                {
                  "step": "The sum is $\\dfrac{-26}{5}\\times\\left(\\dfrac{11}{14}+\\dfrac{-2}{7}\\right)$.",
                  "reason": "the distributive law"
                },
                {
                  "step": "The terms in the parentheses have opposite signs, so their sum is $\\dfrac{11}{14}-\\dfrac{4}{14}=\\dfrac{7}{14}=\\dfrac{1}{2}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer, then reducing $\\dfrac{7}{14}$ to lowest terms"
                },
                {
                  "step": "A negative number times a positive number is negative, so the sum is $\\dfrac{-26}{5}\\times\\dfrac{1}{2}=-\\dfrac{26}{10}$.",
                  "reason": "the sign rule for a product of a negative number and a positive number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-2\\,\\dfrac{3}{5}$.",
                  "reason": "reducing $-\\dfrac{26}{10}$ to $-\\dfrac{13}{5}$, then writing the improper fraction as a mixed number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{4.2}{3}\\times\\dfrac{-1.5}{0.7}$.",
            "lines": [
              {
                "step": "Multiply the numerator and the denominator of each quotient by $10$: $\\dfrac{4.2}{3}=\\dfrac{42}{30}$ and $\\dfrac{-1.5}{0.7}=\\dfrac{-15}{7}$.",
                "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
              },
              {
                "step": "A positive number times a negative number is negative, so the product is $-\\dfrac{630}{210}$.",
                "reason": "the sign rule for a product of a positive number and a negative number, then multiplying the numerators and the denominators"
              },
              {
                "step": "$-3$.",
                "reason": "dividing $630$ by $210$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{4.5}{7}\\times\\dfrac{-4.2}{0.9}$.",
              "answer": "-3",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of each quotient by $10$: $\\dfrac{4.5}{7}=\\dfrac{45}{70}$ and $\\dfrac{-4.2}{0.9}=\\dfrac{-42}{9}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "A positive number times a negative number is negative, so the product is $-\\dfrac{1\\,890}{630}$.",
                  "reason": "the sign rule for a product of a positive number and a negative number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-3$.",
                  "reason": "dividing $1\\,890$ by $630$"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{3.2}{7}\\times\\dfrac{-3.5}{0.4}$.",
              "answer": "-4",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of each quotient by $10$: $\\dfrac{3.2}{7}=\\dfrac{32}{70}$ and $\\dfrac{-3.5}{0.4}=\\dfrac{-35}{4}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "A positive number times a negative number is negative, so the product is $-\\dfrac{1\\,120}{280}$.",
                  "reason": "the sign rule for a product of a positive number and a negative number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-4$.",
                  "reason": "dividing $1\\,120$ by $280$"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{2.5}{4}\\times\\dfrac{-2.4}{0.5}$.",
              "answer": "-3",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of each quotient by $10$: $\\dfrac{2.5}{4}=\\dfrac{25}{40}$ and $\\dfrac{-2.4}{0.5}=\\dfrac{-24}{5}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "A positive number times a negative number is negative, so the product is $-\\dfrac{600}{200}$.",
                  "reason": "the sign rule for a product of a positive number and a negative number, then multiplying the numerators and the denominators"
                },
                {
                  "step": "$-3$.",
                  "reason": "dividing $600$ by $200$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{9}{2.4}+\\dfrac{4}{-1.5}$.",
            "lines": [
              {
                "step": "Multiply the numerator and the denominator of each quotient by $10$, then reduce: $\\dfrac{9}{2.4}=\\dfrac{90}{24}=\\dfrac{15}{4}$ and $\\dfrac{4}{-1.5}=\\dfrac{40}{-15}=-\\dfrac{8}{3}$.",
                "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$, and a positive numerator over a negative denominator is negative"
              },
              {
                "step": "The terms have opposite signs, so the sum is $\\dfrac{15}{4}-\\dfrac{8}{3}=\\dfrac{45}{12}-\\dfrac{32}{12}=\\dfrac{13}{12}$.",
                "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
              },
              {
                "step": "$1\\,\\dfrac{1}{12}$.",
                "reason": "writing the improper fraction as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{8}{2.5}+\\dfrac{6}{-3.5}$.",
              "answer": "1 17/35",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of each quotient by $10$, then reduce: $\\dfrac{8}{2.5}=\\dfrac{80}{25}=\\dfrac{16}{5}$ and $\\dfrac{6}{-3.5}=\\dfrac{60}{-35}=-\\dfrac{12}{7}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$, and a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "The terms have opposite signs, so the sum is $\\dfrac{16}{5}-\\dfrac{12}{7}=\\dfrac{112}{35}-\\dfrac{60}{35}=\\dfrac{52}{35}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$1\\,\\dfrac{17}{35}$.",
                  "reason": "writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{7}{1.8}+\\dfrac{8}{-3.2}$.",
              "answer": "1 7/18",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of each quotient by $10$, then reduce: $\\dfrac{7}{1.8}=\\dfrac{70}{18}=\\dfrac{35}{9}$ and $\\dfrac{8}{-3.2}=\\dfrac{80}{-32}=-\\dfrac{5}{2}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$, and a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "The terms have opposite signs, so the sum is $\\dfrac{35}{9}-\\dfrac{5}{2}=\\dfrac{70}{18}-\\dfrac{45}{18}=\\dfrac{25}{18}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$1\\,\\dfrac{7}{18}$.",
                  "reason": "writing the improper fraction as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{9}{3.6}+\\dfrac{4}{-3.5}$.",
              "answer": "1 5/14",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of each quotient by $10$, then reduce: $\\dfrac{9}{3.6}=\\dfrac{90}{36}=\\dfrac{5}{2}$ and $\\dfrac{4}{-3.5}=\\dfrac{40}{-35}=-\\dfrac{8}{7}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$, and a positive numerator over a negative denominator is negative"
                },
                {
                  "step": "The terms have opposite signs, so the sum is $\\dfrac{5}{2}-\\dfrac{8}{7}=\\dfrac{35}{14}-\\dfrac{16}{14}=\\dfrac{19}{14}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$1\\,\\dfrac{5}{14}$.",
                  "reason": "writing the improper fraction as a mixed number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{1}{8}-\\dfrac{-1}{2.4}$.",
            "lines": [
              {
                "step": "Multiply the numerator and the denominator of $\\dfrac{-1}{2.4}$ by $10$, then reduce: $\\dfrac{-1}{2.4}=\\dfrac{-10}{24}=-\\dfrac{5}{12}$.",
                "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
              },
              {
                "step": "$\\dfrac{1}{8}-\\left(-\\dfrac{5}{12}\\right)=\\dfrac{1}{8}+\\dfrac{5}{12}$.",
                "reason": "the definition of subtraction, $x-y=x+(-y)$, then reflecting twice returns the original point"
              },
              {
                "step": "$\\dfrac{13}{24}$.",
                "reason": "addition of fractions over the common denominator $24$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{2}{9}-\\dfrac{-1}{4.2}$.",
              "answer": "29/63",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of $\\dfrac{-1}{4.2}$ by $10$, then reduce: $\\dfrac{-1}{4.2}=\\dfrac{-10}{42}=-\\dfrac{5}{21}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "$\\dfrac{2}{9}-\\left(-\\dfrac{5}{21}\\right)=\\dfrac{2}{9}+\\dfrac{5}{21}$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$, then reflecting twice returns the original point"
                },
                {
                  "step": "$\\dfrac{29}{63}$.",
                  "reason": "addition of fractions over the common denominator $63$"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{3}{10}-\\dfrac{-1}{3.2}$.",
              "answer": "49/80",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of $\\dfrac{-1}{3.2}$ by $10$, then reduce: $\\dfrac{-1}{3.2}=\\dfrac{-10}{32}=-\\dfrac{5}{16}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "$\\dfrac{3}{10}-\\left(-\\dfrac{5}{16}\\right)=\\dfrac{3}{10}+\\dfrac{5}{16}$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$, then reflecting twice returns the original point"
                },
                {
                  "step": "$\\dfrac{49}{80}$.",
                  "reason": "addition of fractions over the common denominator $80$"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{1}{10}-\\dfrac{-1}{1.6}$.",
              "answer": "29/40",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator of $\\dfrac{-1}{1.6}$ by $10$, then reduce: $\\dfrac{-1}{1.6}=\\dfrac{-10}{16}=-\\dfrac{5}{8}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "$\\dfrac{1}{10}-\\left(-\\dfrac{5}{8}\\right)=\\dfrac{1}{10}+\\dfrac{5}{8}$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$, then reflecting twice returns the original point"
                },
                {
                  "step": "$\\dfrac{29}{40}$.",
                  "reason": "addition of fractions over the common denominator $40$"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\dfrac{-4.5}{-0.75}$.",
            "lines": [
              {
                "step": "Multiply the numerator and the denominator by $100$: $\\dfrac{-4.5}{-0.75}=\\dfrac{-450}{-75}$.",
                "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
              },
              {
                "step": "A negative numerator over a negative denominator is positive, so $\\dfrac{-450}{-75}=\\dfrac{450}{75}$.",
                "reason": "a negative numerator over a negative denominator is positive"
              },
              {
                "step": "$6$.",
                "reason": "dividing $450$ by $75$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\dfrac{-2.4}{-0.15}$.",
              "answer": "16",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator by $100$: $\\dfrac{-2.4}{-0.15}=\\dfrac{-240}{-15}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "A negative numerator over a negative denominator is positive, so $\\dfrac{-240}{-15}=\\dfrac{240}{15}$.",
                  "reason": "a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "$16$.",
                  "reason": "dividing $240$ by $15$"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{-5.2}{-0.65}$.",
              "answer": "8",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator by $100$: $\\dfrac{-5.2}{-0.65}=\\dfrac{-520}{-65}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "A negative numerator over a negative denominator is positive, so $\\dfrac{-520}{-65}=\\dfrac{520}{65}$.",
                  "reason": "a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "$8$.",
                  "reason": "dividing $520$ by $65$"
                }
              ]
            },
            {
              "prompt": "Compute $\\dfrac{-6.3}{-0.35}$.",
              "answer": "18",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Multiply the numerator and the denominator by $100$: $\\dfrac{-6.3}{-0.35}=\\dfrac{-630}{-35}$.",
                  "reason": "multiplying the numerator and the denominator by the same nonzero number leaves a quotient unchanged, $\\dfrac XY=\\dfrac{ZX}{ZY}$"
                },
                {
                  "step": "A negative numerator over a negative denominator is positive, so $\\dfrac{-630}{-35}=\\dfrac{630}{35}$.",
                  "reason": "a negative numerator over a negative denominator is positive"
                },
                {
                  "step": "$18$.",
                  "reason": "dividing $630$ by $35$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t26-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $x$ so that $\\dfrac{7}{4}x-\\dfrac{3}{4}=\\dfrac{1}{4}x+\\dfrac{21}{4}$.",
            "lines": [
              {
                "step": "Subtract $\\dfrac{1}{4}x$ from both sides: $\\dfrac{3}{2}x-\\dfrac{3}{4}=\\dfrac{21}{4}$.",
                "reason": "subtracting the same quantity from both sides keeps them equal, then combining like terms"
              },
              {
                "step": "Add $\\dfrac{3}{4}$ to both sides: $\\dfrac{3}{2}x=\\dfrac{24}{4}$.",
                "reason": "adding the same quantity to both sides keeps them equal"
              },
              {
                "step": "$4$.",
                "reason": "dividing both sides by the coefficient $\\dfrac{3}{2}$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$ so that $\\dfrac{5}{3}x-2=\\dfrac{1}{3}x-6$.",
              "answer": "-3",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Subtract $\\dfrac{1}{3}x$ from both sides: $\\dfrac{4}{3}x-2=-6$.",
                  "reason": "subtracting the same quantity from both sides keeps them equal, then combining like terms"
                },
                {
                  "step": "Add $2$ to both sides: $\\dfrac{4}{3}x=-4$.",
                  "reason": "adding the same quantity to both sides keeps them equal"
                },
                {
                  "step": "$-3$.",
                  "reason": "dividing both sides by the coefficient $\\dfrac{4}{3}$"
                }
              ]
            },
            {
              "prompt": "Find $x$ so that $2x-\\dfrac{9}{5}=\\dfrac{2}{5}x+3$.",
              "answer": "3",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Subtract $\\dfrac{2}{5}x$ from both sides: $\\dfrac{8}{5}x-\\dfrac{9}{5}=3$.",
                  "reason": "subtracting the same quantity from both sides keeps them equal, then combining like terms"
                },
                {
                  "step": "Add $\\dfrac{9}{5}$ to both sides: $\\dfrac{8}{5}x=\\dfrac{24}{5}$.",
                  "reason": "adding the same quantity to both sides keeps them equal"
                },
                {
                  "step": "$3$.",
                  "reason": "dividing both sides by the coefficient $\\dfrac{8}{5}$"
                }
              ]
            },
            {
              "prompt": "Find $x$ so that $-x-\\dfrac{9}{5}=\\dfrac{1}{5}x+3$.",
              "answer": "-4",
              "form": "Answer as an integer.",
              "lines": [
                {
                  "step": "Subtract $\\dfrac{1}{5}x$ from both sides: $-\\dfrac{6}{5}x-\\dfrac{9}{5}=3$.",
                  "reason": "subtracting the same quantity from both sides keeps them equal, then combining like terms"
                },
                {
                  "step": "Add $\\dfrac{9}{5}$ to both sides: $-\\dfrac{6}{5}x=\\dfrac{24}{5}$.",
                  "reason": "adding the same quantity to both sides keeps them equal"
                },
                {
                  "step": "$-4$.",
                  "reason": "dividing both sides by the coefficient $-\\dfrac{6}{5}$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t26-k3",
      "forms": [
        {
          "example": {
            "problem": "Find two numbers, the greater first, with sum $10$ and difference (the greater minus the lesser) $21$.",
            "lines": [
              {
                "step": "Let $x$ be the greater number and $y$ the lesser, so $x+y=10$ and $x-y=21$.",
                "reason": "naming the two numbers by the relations given"
              },
              {
                "step": "Add the two equations: $2x=31$.",
                "reason": "adding equal quantities to equal quantities keeps them equal, and $y+(-y)=0$"
              },
              {
                "step": "Divide by $2$: $x=15\\,\\dfrac{1}{2}$. Substitute into $x+y=10$: $y=-5\\,\\dfrac{1}{2}$.",
                "reason": "dividing both sides by the coefficient $2$, then solving for $y$ from the first equation"
              },
              {
                "step": "$15\\,\\dfrac{1}{2}$, $-5\\,\\dfrac{1}{2}$.",
                "reason": "stating both numbers together"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find two numbers, the greater first, with sum $8$ and difference (the greater minus the lesser) $15$.",
              "answer": "11 1/2, -3 1/2",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $x$ be the greater number and $y$ the lesser, so $x+y=8$ and $x-y=15$.",
                  "reason": "naming the two numbers by the relations given"
                },
                {
                  "step": "Add the two equations: $2x=23$.",
                  "reason": "adding equal quantities to equal quantities keeps them equal, and $y+(-y)=0$"
                },
                {
                  "step": "Divide by $2$: $x=11\\,\\dfrac{1}{2}$. Substitute into $x+y=8$: $y=-3\\,\\dfrac{1}{2}$.",
                  "reason": "dividing both sides by the coefficient $2$, then solving for $y$ from the first equation"
                },
                {
                  "step": "$11\\,\\dfrac{1}{2}$, $-3\\,\\dfrac{1}{2}$.",
                  "reason": "stating both numbers together"
                }
              ]
            },
            {
              "prompt": "Find two numbers, the greater first, with sum $3\\,\\dfrac{1}{2}$ and difference (the greater minus the lesser) $21\\,\\dfrac{1}{4}$.",
              "answer": "12 3/8, -8 7/8",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $x$ be the greater number and $y$ the lesser, so $x+y=\\dfrac{7}{2}$ and $x-y=\\dfrac{85}{4}$.",
                  "reason": "naming the two numbers by the relations given"
                },
                {
                  "step": "Add the two equations: $2x=\\dfrac{99}{4}$.",
                  "reason": "adding equal quantities to equal quantities keeps them equal, and $y+(-y)=0$"
                },
                {
                  "step": "Divide by $2$: $x=12\\,\\dfrac{3}{8}$. Substitute into $x+y=\\dfrac{7}{2}$: $y=-8\\,\\dfrac{7}{8}$.",
                  "reason": "dividing both sides by the coefficient $2$, then solving for $y$ from the first equation"
                },
                {
                  "step": "$12\\,\\dfrac{3}{8}$, $-8\\,\\dfrac{7}{8}$.",
                  "reason": "stating both numbers together"
                }
              ]
            },
            {
              "prompt": "Find two numbers, the greater first, with sum $-4$ and difference (the greater minus the lesser) $9$.",
              "answer": "2 1/2, -6 1/2",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $x$ be the greater number and $y$ the lesser, so $x+y=-4$ and $x-y=9$.",
                  "reason": "naming the two numbers by the relations given"
                },
                {
                  "step": "Add the two equations: $2x=5$.",
                  "reason": "adding equal quantities to equal quantities keeps them equal, and $y+(-y)=0$"
                },
                {
                  "step": "Divide by $2$: $x=2\\,\\dfrac{1}{2}$. Substitute into $x+y=-4$: $y=-6\\,\\dfrac{1}{2}$.",
                  "reason": "dividing both sides by the coefficient $2$, then solving for $y$ from the first equation"
                },
                {
                  "step": "$2\\,\\dfrac{1}{2}$, $-6\\,\\dfrac{1}{2}$.",
                  "reason": "stating both numbers together"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find both numbers, the lesser first. Twice the lesser number falls short of the greater number by $3$. The lesser number times $3\\dfrac{1}{3}$ exceeds the greater number by $29$.",
            "lines": [
              {
                "step": "Let $s$ be the lesser number and $b$ the greater number. Translate the first relation as $b-2s=3$.",
                "reason": "the greater number minus twice the lesser equals the shortfall of $3$"
              },
              {
                "step": "Translate the second relation as $\\dfrac{10}{3}s-b=29$.",
                "reason": "the lesser number times $3\\dfrac{1}{3}$, minus the greater number, equals the excess of $29$"
              },
              {
                "step": "From the first equation, $b=3+2s$. Substitute into the second equation: $\\dfrac{10}{3}s-(3+2s)=29$, so $\\dfrac{4}{3}s=32$.",
                "reason": "adding $2s$ to both sides, then substituting and combining like terms"
              },
              {
                "step": "$24$, $51$.",
                "reason": "dividing both sides by the coefficient $\\dfrac{4}{3}$ to get $s=24$, then substituting into $b=3+2s$ to get $b=51$"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find both numbers, the lesser first. Twice the lesser number falls short of the greater number by $1$. The lesser number times $2\\dfrac{3}{4}$ exceeds the greater number by $2$.",
              "answer": "4, 9",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $s$ be the lesser number and $b$ the greater number. Translate the first relation as $b-2s=1$.",
                  "reason": "the greater number minus twice the lesser equals the shortfall of $1$"
                },
                {
                  "step": "Translate the second relation as $\\dfrac{11}{4}s-b=2$.",
                  "reason": "the lesser number times $2\\dfrac{3}{4}$, minus the greater number, equals the excess of $2$"
                },
                {
                  "step": "From the first equation, $b=1+2s$. Substitute into the second equation: $\\dfrac{11}{4}s-(1+2s)=2$, so $\\dfrac{3}{4}s=3$.",
                  "reason": "adding $2s$ to both sides, then substituting and combining like terms"
                },
                {
                  "step": "$4$, $9$.",
                  "reason": "dividing both sides by the coefficient $\\dfrac{3}{4}$ to get $s=4$, then substituting into $b=1+2s$ to get $b=9$"
                }
              ]
            },
            {
              "prompt": "Find both numbers, the lesser first. The lesser number falls short of the greater number by $4$. The lesser number times $1\\dfrac{2}{3}$ exceeds the greater number by $8$.",
              "answer": "18, 22",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $s$ be the lesser number and $b$ the greater number. Translate the first relation as $b-s=4$.",
                  "reason": "the greater number minus the lesser equals the shortfall of $4$"
                },
                {
                  "step": "Translate the second relation as $\\dfrac{5}{3}s-b=8$.",
                  "reason": "the lesser number times $1\\dfrac{2}{3}$, minus the greater number, equals the excess of $8$"
                },
                {
                  "step": "From the first equation, $b=4+s$. Substitute into the second equation: $\\dfrac{5}{3}s-(4+s)=8$, so $\\dfrac{2}{3}s=12$.",
                  "reason": "adding $s$ to both sides, then substituting and combining like terms"
                },
                {
                  "step": "$18$, $22$.",
                  "reason": "dividing both sides by the coefficient $\\dfrac{2}{3}$ to get $s=18$, then substituting into $b=4+s$ to get $b=22$"
                }
              ]
            },
            {
              "prompt": "Find both numbers, the lesser first. Three times the lesser number falls short of the greater number by $6$. The lesser number times $4\\dfrac{1}{2}$ exceeds the greater number by $3$.",
              "answer": "6, 24",
              "form": "Answer as numbers separated by commas, in the order asked, or equivalent.",
              "lines": [
                {
                  "step": "Let $s$ be the lesser number and $b$ the greater number. Translate the first relation as $b-3s=6$.",
                  "reason": "the greater number minus three times the lesser equals the shortfall of $6$"
                },
                {
                  "step": "Translate the second relation as $\\dfrac{9}{2}s-b=3$.",
                  "reason": "the lesser number times $4\\dfrac{1}{2}$, minus the greater number, equals the excess of $3$"
                },
                {
                  "step": "From the first equation, $b=6+3s$. Substitute into the second equation: $\\dfrac{9}{2}s-(6+3s)=3$, so $\\dfrac{3}{2}s=9$.",
                  "reason": "adding $3s$ to both sides, then substituting and combining like terms"
                },
                {
                  "step": "$6$, $24$.",
                  "reason": "dividing both sides by the coefficient $\\dfrac{3}{2}$ to get $s=6$, then substituting into $b=6+3s$ to get $b=24$"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t26-k4",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{1}{20}$.",
            "figure": {
              "file": "place:line:1/20",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 1.",
                "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 1 counts the parts from 0"
              },
              {
                "step": "$\\frac{1}{20}=\\frac{1\\times 5}{20\\times 5}=\\frac{5}{100}=0.05$.",
                "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$0.05$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:1/20",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1/20 lies at 0.05, in the tenth from 0 to 0.1, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{3}{20}$.",
              "answer": "3/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 20 equal parts, and the mark is the end of part 3.",
                  "reason": "the denominator 20 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
                },
                {
                  "step": "$\\frac{3}{20}=\\frac{3\\times 5}{20\\times 5}=\\frac{15}{100}=0.15$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.15$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:3/20",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/20 lies at 0.15, in the tenth from 0.1 to 0.2, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{13}{25}$.",
              "answer": "13/25",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 25 equal parts, and the mark is the end of part 13.",
                  "reason": "the denominator 25 gives the number of equal parts of the unit, and the numerator 13 counts the parts from 0"
                },
                {
                  "step": "$\\frac{13}{25}=\\frac{13\\times 4}{25\\times 4}=\\frac{52}{100}=0.52$.",
                  "reason": "multiplying the numerator and the denominator by 4 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.52$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:13/25",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 13/25 lies at 0.52, in the tenth from 0.5 to 0.6, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{1}{4}$.",
              "answer": "1/4",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 4 equal parts, and the mark is the end of part 1.",
                  "reason": "the denominator 4 gives the number of equal parts of the unit, and the numerator 1 counts the parts from 0"
                },
                {
                  "step": "$\\frac{1}{4}=\\frac{1\\times 25}{4\\times 25}=\\frac{25}{100}=0.25$.",
                  "reason": "multiplying the numerator and the denominator by 25 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$0.25$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:1/4",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1/4 lies at 0.25, in the tenth from 0.2 to 0.3, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $2.2$.",
            "figure": {
              "file": "place:line:2.2",
              "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $2.2$ is 2, so the mark lies between 2 and 3.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.2=\\frac{2}{10}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 2 and no hundredths follow it, so the mark is the 2nd cut of the unit from $2$ to $3$, at $2.2$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:2.2",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked, with 2.2 marked, between 2 and 3."
                }
              },
              {
                "step": "$2.2$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:2.2",
                  "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.2 lies at 2.2, between 2 and 3."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $2.20$.",
              "answer": "2.20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $2.20$ is 2, so the mark lies between 2 and 3.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.20=\\frac{20}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 2 and no hundredths follow it, so the mark is the 2nd cut of the unit from $2$ to $3$, at $2.2$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$2.20$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:2.20",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 2.20 lies at 2.2, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $4.7$.",
              "answer": "4.7",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $4.7$ is 4, so the mark lies between 4 and 5.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.7=\\frac{7}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and no hundredths follow it, so the mark is the 7th cut of the unit from $4$ to $5$, at $4.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$4.7$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:4.7",
                    "alt": "Number line from 0 to 5, the whole numbers 0 to 5 marked and each unit cut into tenths. 4.7 lies at 4.7, between 4 and 5."
                  }
                }
              ]
            },
            {
              "prompt": "Place $0.6$.",
              "answer": "0.6",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.6$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.6=\\frac{6}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 6 and no hundredths follow it, so the mark is the 6th cut of the unit from $0$ to $1$, at $0.6$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.6$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.6",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.6 lies at 0.6, between 0 and 1."
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
      "id": "t26-p1",
      "method": "proof by cases",
      "statement": "Let $y$ be a nonzero rational number. For every rational number $x$, there is exactly one rational number $z$ such that $x=zy$.",
      "idea": "Multiply both sides by the inverse of $y$ to find what $z$ must be, then check that this value works.",
      "lines": [
        {
          "line": "If $y$ is positive, $y$ already has a multiplicative inverse among the positive fractions.",
          "reason": "the corresponding fact already proved for positive fractions"
        },
        {
          "line": "If $y$ is negative, $-y$ is positive, so $-y$ has a multiplicative inverse $y'$ with $(-y)y'=1$.",
          "reason": "applying the positive case to the positive number $-y$"
        },
        {
          "line": "$(-y)y'=y(-y')$, so $y(-y')=1$.",
          "reason": "a negative number times a number is the mirror reflection of their product"
        },
        {
          "line": "So every nonzero rational number $y$ has a multiplicative inverse.",
          "reason": "the positive case and the negative case together cover every nonzero $y$"
        },
        {
          "line": "If $a$ and $b$ are both multiplicative inverses of $y$, then $ay=1$ and $by=1$.",
          "reason": "the definition of multiplicative inverse"
        },
        {
          "line": "$b=b(ay)=(ay)b=a(yb)=a\\cdot1=a$.",
          "reason": "the fact that $ay=1$, then the commutative and associative laws, then $by=1$, then $1$ times a number equals the number"
        },
        {
          "line": "So a nonzero rational number has exactly one multiplicative inverse, written $y^{-1}$.",
          "reason": "combining the previous two lines"
        },
        {
          "line": "If $z$ is a rational number with $x=zy$, then $xy^{-1}=(zy)y^{-1}=z(yy^{-1})=z$.",
          "reason": "multiplying both sides by $y^{-1}$, then the associative law and the definition of multiplicative inverse"
        },
        {
          "line": "So every such $z$ equals $xy^{-1}$.",
          "reason": "the previous line holds for every such $z$"
        },
        {
          "line": "$(xy^{-1})y=x(y^{-1}y)=x\\cdot1=x$.",
          "reason": "the associative and commutative laws of multiplication, the definition of multiplicative inverse, and $1$ times a number equals the number"
        },
        {
          "line": "So $z=xy^{-1}$ satisfies $x=zy$.",
          "reason": "the previous line"
        },
        {
          "line": "There is exactly one rational number $z$ with $x=zy$.",
          "reason": "existence holds because $z=xy^{-1}$ works, and uniqueness holds because every solution equals $xy^{-1}$"
        }
      ]
    },
    {
      "id": "t26-p2",
      "method": "direct proof",
      "statement": "For rational numbers $x$ and $y$ with $y$ nonzero, if $xy=0$, then $x=0$.",
      "idea": "Multiply both sides by the inverse of $y$ to cancel it and isolate $x$.",
      "lines": [
        {
          "line": "$(xy)y^{-1}=0\\cdot y^{-1}$.",
          "reason": "multiplying two equal quantities by the same number keeps them equal"
        },
        {
          "line": "$x(yy^{-1})=0$.",
          "reason": "the associative law of multiplication, and $0$ times a number is $0$"
        },
        {
          "line": "$x\\cdot1=0$.",
          "reason": "the definition of multiplicative inverse"
        },
        {
          "line": "$x=0$.",
          "reason": "multiplying by $1$ leaves a number unchanged"
        }
      ]
    },
    {
      "id": "t26-p3",
      "method": "direct proof",
      "statement": "For rational numbers $X,Y,Z$ with $Y,Z$ nonzero, $\\dfrac XY=\\dfrac{ZX}{ZY}$.",
      "idea": "Show that both sides, multiplied by $ZY$, give $ZX$. Then use the uniqueness of the quotient.",
      "lines": [
        {
          "line": "Let $A=\\dfrac XY$ and $B=\\dfrac{ZX}{ZY}$.",
          "reason": "naming the two quotients to compare"
        },
        {
          "line": "$X=AY$.",
          "reason": "the definition of the quotient $\\dfrac XY$"
        },
        {
          "line": "$ZX=Z(AY)=A(ZY)$.",
          "reason": "multiplying both sides by $Z$, then the commutative and associative laws"
        },
        {
          "line": "$ZX=B(ZY)$.",
          "reason": "the definition of the quotient $\\dfrac{ZX}{ZY}$"
        },
        {
          "line": "$A=B$.",
          "reason": "the uniqueness of the quotient"
        }
      ]
    },
    {
      "id": "t26-p4",
      "method": "direct proof",
      "statement": "For rational numbers $X,Y,Z,W$ with $Y,W$ nonzero, $\\dfrac XY\\times\\dfrac ZW=\\dfrac{XZ}{YW}$.",
      "idea": "Multiply the two defining equations together and compare the result with the definition of the combined quotient.",
      "lines": [
        {
          "line": "By definition, $\\left(\\dfrac XY\\right)Y=X$ and $\\left(\\dfrac ZW\\right)W=Z$.",
          "reason": "the definition of the two quotients"
        },
        {
          "line": "$\\left(\\left(\\dfrac XY\\right)\\left(\\dfrac ZW\\right)\\right)(YW)=\\left(\\left(\\dfrac XY\\right)Y\\right)\\left(\\left(\\dfrac ZW\\right)W\\right)$.",
          "reason": "the commutative and associative laws of multiplication"
        },
        {
          "line": "$\\left(\\left(\\dfrac XY\\right)\\left(\\dfrac ZW\\right)\\right)(YW)=XZ$.",
          "reason": "combining the previous two lines"
        },
        {
          "line": "$\\left(\\dfrac{XZ}{YW}\\right)(YW)=XZ$.",
          "reason": "the definition of the quotient $\\dfrac{XZ}{YW}$"
        },
        {
          "line": "$\\dfrac XY\\times\\dfrac ZW=\\dfrac{XZ}{YW}$.",
          "reason": "the uniqueness of the quotient"
        }
      ]
    },
    {
      "id": "t26-p5",
      "method": "direct proof",
      "statement": "For nonzero rational numbers $X$ and $Y$, $\\left(\\dfrac XY\\right)^{-1}=\\dfrac YX$. For rational quotients $\\dfrac XY$ and $\\dfrac ZW$ with $Y,Z,W$ nonzero, $\\dfrac{X/Y}{Z/W}=\\dfrac XY\\times\\dfrac WZ$.",
      "idea": "Use the product rule for rational quotients to find each side's inverse.",
      "lines": [
        {
          "line": "$\\dfrac YX\\times\\dfrac XY=\\dfrac{YX}{XY}=1$.",
          "reason": "the product rule for rational quotients, and the commutative law of multiplication"
        },
        {
          "line": "$\\left(\\dfrac XY\\right)^{-1}=\\dfrac YX$.",
          "reason": "a number that multiplies $\\dfrac XY$ to give $1$ is its multiplicative inverse"
        },
        {
          "line": "$\\dfrac{X/Y}{Z/W}=\\dfrac XY\\left(\\dfrac ZW\\right)^{-1}$.",
          "reason": "the definition of division"
        },
        {
          "line": "$\\left(\\dfrac ZW\\right)^{-1}=\\dfrac WZ$.",
          "reason": "the second line above, applied with $Z,W$ in place of $X,Y$"
        },
        {
          "line": "$\\dfrac{X/Y}{Z/W}=\\dfrac XY\\times\\dfrac WZ$.",
          "reason": "combining the previous two lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t26-s1",
      "method": "direct proof",
      "statement": "For rational numbers $X,Y,Z,W,U,V$ with $Y,W,V$ nonzero, $\\dfrac XY\\pm\\dfrac ZW=\\dfrac{XW\\pm ZY}{YW}$, and $\\dfrac UV\\left(\\dfrac XY\\pm\\dfrac ZW\\right)=\\dfrac UV\\times\\dfrac XY\\pm\\dfrac UV\\times\\dfrac ZW$.",
      "check": {
        "proof": [
          {
            "line": "Let $A=\\dfrac XY\\pm\\dfrac ZW$ and $B=\\dfrac{XW\\pm ZY}{YW}$.",
            "reason": "naming the two sides to compare"
          },
          {
            "line": "$AYW=\\left(\\dfrac XY\\right)YW\\pm\\left(\\dfrac ZW\\right)YW=XW\\pm ZY$.",
            "reason": "the distributive law, the definition of each quotient, then the commutative and associative laws"
          },
          {
            "line": "$B(YW)=XW\\pm ZY$.",
            "reason": "the definition of the quotient $B$"
          },
          {
            "line": "$A=B$.",
            "reason": "the uniqueness of the quotient"
          },
          {
            "line": "So $\\dfrac XY\\pm\\dfrac ZW=\\dfrac{XW\\pm ZY}{YW}$.",
            "reason": "combining the previous lines"
          },
          {
            "line": "Let $C=\\dfrac UV\\left(\\dfrac XY\\pm\\dfrac ZW\\right)$ and $D=\\dfrac UV\\times\\dfrac XY\\pm\\dfrac UV\\times\\dfrac ZW$.",
            "reason": "naming the two sides of the distributive law to compare"
          },
          {
            "line": "Substituting gives $C=\\dfrac{U(XW\\pm ZY)}{VYW}$ and $D=\\dfrac{U(XW\\pm ZY)}{VYW}$.",
            "reason": "the rule proved above inside the parentheses, then the product rule for rational quotients on each product"
          },
          {
            "line": "$C=D$.",
            "reason": "both sides equal the same quotient"
          }
        ]
      }
    },
    {
      "id": "t26-s2",
      "method": "proof by cases",
      "statement": "For nonzero rational numbers $x$ and $y$, the quotient $\\dfrac xy$ is positive if $x$ and $y$ have the same sign. It is negative if $x$ and $y$ have opposite signs.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $x$ and $y$ are both positive.",
            "reason": "the first case"
          },
          {
            "line": "The inverse $y^{-1}$ is positive.",
            "reason": "the case $y>0$ of the multiplicative-inverse theorem above"
          },
          {
            "line": "The quotient $\\dfrac xy=xy^{-1}$ is positive.",
            "reason": "the product of two positive numbers is positive"
          },
          {
            "line": "Suppose that $x$ and $y$ are both negative.",
            "reason": "the second case"
          },
          {
            "line": "The inverse $y^{-1}$ is negative.",
            "reason": "the case $y<0$ of the multiplicative-inverse theorem above"
          },
          {
            "line": "The quotient $\\dfrac xy=xy^{-1}$ is positive.",
            "reason": "the product of two negative numbers is positive"
          },
          {
            "line": "Suppose that $x$ and $y$ have opposite signs, one positive and one negative.",
            "reason": "the third case"
          },
          {
            "line": "The inverse $y^{-1}$ has the same sign as $y$.",
            "reason": "the multiplicative inverse of a positive number is positive, and the multiplicative inverse of a negative number is negative"
          },
          {
            "line": "The quotient $\\dfrac xy=xy^{-1}$ is negative.",
            "reason": "the product of a positive number and a negative number is negative"
          },
          {
            "line": "The three cases cover every pair of nonzero $x$ and $y$. The quotient $\\dfrac xy$ is positive exactly when $x$ and $y$ have the same sign. It is negative exactly when they have opposite signs.",
            "reason": "combining the three cases"
          }
        ]
      }
    }
  ]
}
