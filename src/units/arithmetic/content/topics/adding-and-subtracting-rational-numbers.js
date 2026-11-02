export default {
  "number": 23,
  "manyParts": false,
  "bare": {
    "prompt": "Compute $\\frac{3}{5}+\\left(\\frac{4}{5}\\right)^*$.",
    "answer": "-1/5",
    "form": "Answer as a fraction in lowest terms, or equivalent.",
    "solution": [
      "Compute $\\frac{3}{5}+\\left(\\frac{4}{5}\\right)^*$.",
      "Compare the lengths $\\frac{3}{5}$ and $\\frac{4}{5}$: $\\frac{4}{5}$ is longer.",
      "The sum has the direction of the longer vector, which is negative, with length $\\frac{4}{5}-\\frac{3}{5}=\\frac{1}{5}$.",
      "$-\\frac{1}{5}$."
    ]
  },
  "ideas": [
    {
      "name": "Mirror reflection",
      "concrete": "The mirror reflection of $3$ is $3^*$, and the mirror reflection of $3^*$ is $3$.",
      "general": "For every point $p$ on the number line, $p^{**}=p$.",
      "definitions": [
        "The mirror reflection of $p$, written $p^*$, is the point across $0$ from $p$ at the same distance, and $0^*=0$."
      ]
    },
    {
      "name": "Sign",
      "concrete": "The point $3$ lies to the right of $0$, so $3$ is positive. The point $3^*$ lies to the left of $0$, so $3^*$ is negative.",
      "general": "A number is **positive** if it lies to the right of $0$ on the number line. It is **negative** if it lies to the left of $0$. The number $0$ is neither positive nor negative. Whether a number is positive or negative is its **sign**. A mirror reflection moves a point to the opposite side of $0$. So it turns a positive number negative and a negative number positive."
    },
    {
      "name": "Rational number and integer",
      "concrete": "The numbers $2$, $2^*$, $\\frac{5}{9}$, and $\\left(\\frac{5}{9}\\right)^*$ are rational numbers. The numbers $2$, $2^*$, and $0$ are integers.",
      "general": "A **rational number** is a fraction or the mirror reflection of a fraction. An **integer** is a whole number or the mirror reflection of a whole number."
    },
    {
      "name": "Vector",
      "concrete": "A vector from $0$ to $3$ is right-pointing with length $3$. A vector from $0$ to $2^*$ is left-pointing with length $2$.",
      "general": "A **vector** is a segment on the number line. One end is its starting point, and the other end is its **endpoint**. Its length is the length of the segment. Its direction is right-pointing if the endpoint lies to the right of the starting point. Its direction is left-pointing if the endpoint lies to the left of the starting point. The zero vector has length $0$ and no direction. Unless stated otherwise, a vector has a nonzero length."
    },
    {
      "name": "Special vector",
      "concrete": "The special vector for the number $3$, written $\\vec3$, has starting point $0$ and endpoint $3$. The special vector for $2^*$ has starting point $0$ and endpoint $2^*$.",
      "general": "A **special vector** is a vector whose starting point is $0$. For a number $x$, the special vector $\\vec x$ has starting point $0$ and endpoint $x$. The length and direction of a special vector determine it completely. So a vector with starting point $0$ and endpoint $y$ equals $\\vec y$."
    },
    {
      "name": "Addition of special vectors",
      "concrete": "The vector $\\vec{3^*}+\\vec1$ is the special vector $\\vec{2^*}$. Sliding $\\vec1$ so its starting point rests at $3^*$ moves its endpoint to $2^*$.",
      "general": "Slide $\\vec y$ along the number line until its starting point rests at $x$. The **addition of special vectors** $\\vec x+\\vec y$ is the special vector whose endpoint is the new endpoint of $\\vec y$."
    },
    {
      "name": "Addition of rational numbers",
      "concrete": "The sum $2+5^*$ is the endpoint of $\\vec2+\\vec{5^*}$, which is $3^*$.",
      "general": "The **sum** $x+y$ of two numbers $x$ and $y$ is the endpoint of the special vector $\\vec x+\\vec y$."
    },
    {
      "name": "Subtraction as addition",
      "concrete": "$\\frac{15}{4}-\\frac{5}{3}=\\frac{15}{4}+\\left(\\frac{5}{3}\\right)^*$, since $\\frac{15}{4}\\geq\\frac{5}{3}$.",
      "general": "For rational numbers $x$ and $y$, the **difference** $x-y$ is $x+y^*$. Write $-y$ for $y^*$, so $x-y=x+(-y)$. The symbol $-$ is the minus sign."
    }
  ],
  "kinds": [
    {
      "id": "t23-k1",
      "forms": [
        {
          "example": {
            "problem": "Compute $\\left(3\\frac{1}{6}\\right)^*+\\left(2\\frac{2}{3}\\right)^*$.",
            "lines": [
              {
                "step": "Both numbers are negative, so the two vectors point in the same direction.",
                "reason": "the mirror reflection of a positive fraction lies to the left of $0$"
              },
              {
                "step": "Add the lengths $3\\frac{1}{6}$ and $2\\frac{2}{3}$: $3\\frac{1}{6}+2\\frac{2}{3}=\\frac{19}{6}+\\frac{8}{3}=\\frac{19}{6}+\\frac{16}{6}=\\frac{35}{6}$.",
                "reason": "addition of fractions"
              },
              {
                "step": "The sum has the common direction, so it equals the mirror reflection of $\\frac{35}{6}$.",
                "reason": "the sum of vectors with the same direction has the sum of their lengths"
              },
              {
                "step": "$-5\\,\\frac{5}{6}$.",
                "reason": "combining the previous lines, and writing $\\frac{35}{6}$ as a mixed number"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\left(\\frac{2}{7}\\right)^*+\\left(\\frac{6}{5}\\right)^*$.",
              "answer": "-1 17/35",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Both numbers are negative, so the two vectors point in the same direction.",
                  "reason": "the mirror reflection of a positive fraction lies to the left of $0$"
                },
                {
                  "step": "Add the lengths $\\frac{2}{7}$ and $\\frac{6}{5}$: $\\frac{2}{7}+\\frac{6}{5}=\\frac{10}{35}+\\frac{42}{35}=\\frac{52}{35}$.",
                  "reason": "addition of fractions"
                },
                {
                  "step": "The sum has the common direction, so it equals the mirror reflection of $\\frac{52}{35}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-1\\,\\frac{17}{35}$.",
                  "reason": "combining the previous lines, and writing $\\frac{52}{35}$ as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\left(\\frac{1}{3}\\right)^*+\\left(\\frac{9}{10}\\right)^*$.",
              "answer": "-1 7/30",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Both numbers are negative, so the two vectors point in the same direction.",
                  "reason": "the mirror reflection of a positive fraction lies to the left of $0$"
                },
                {
                  "step": "Add the lengths $\\frac{1}{3}$ and $\\frac{9}{10}$: $\\frac{1}{3}+\\frac{9}{10}=\\frac{10}{30}+\\frac{27}{30}=\\frac{37}{30}$.",
                  "reason": "addition of fractions"
                },
                {
                  "step": "The sum has the common direction, so it equals the mirror reflection of $\\frac{37}{30}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-1\\,\\frac{7}{30}$.",
                  "reason": "combining the previous lines, and writing $\\frac{37}{30}$ as a mixed number"
                }
              ]
            },
            {
              "prompt": "Compute $\\left(2\\frac{1}{2}\\right)^*+\\left(1\\frac{3}{8}\\right)^*$.",
              "answer": "-3 7/8",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Both numbers are negative, so the two vectors point in the same direction.",
                  "reason": "the mirror reflection of a positive fraction lies to the left of $0$"
                },
                {
                  "step": "Add the lengths $2\\frac{1}{2}$ and $1\\frac{3}{8}$: $2\\frac{1}{2}+1\\frac{3}{8}=\\frac{5}{2}+\\frac{11}{8}=\\frac{20}{8}+\\frac{11}{8}=\\frac{31}{8}$.",
                  "reason": "addition of fractions"
                },
                {
                  "step": "The sum has the common direction, so it equals the mirror reflection of $\\frac{31}{8}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-3\\,\\frac{7}{8}$.",
                  "reason": "combining the previous lines, and writing $\\frac{31}{8}$ as a mixed number"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\frac{7}{8}+\\left(\\frac{1}{3}\\right)^*$.",
            "lines": [
              {
                "step": "Compare the lengths $\\frac{7}{8}$ and $\\frac{1}{3}$: $\\frac{7}{8}=\\frac{21}{24}$ and $\\frac{1}{3}=\\frac{8}{24}$, so $\\frac{7}{8}$ is longer.",
                "reason": "writing both fractions with the common denominator $24$"
              },
              {
                "step": "The sum has the direction of the longer vector, which is positive, with length $\\frac{7}{8}-\\frac{1}{3}$.",
                "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
              },
              {
                "step": "$\\frac{7}{8}-\\frac{1}{3}=\\frac{21}{24}-\\frac{8}{24}=\\frac{13}{24}$.",
                "reason": "subtraction of fractions"
              },
              {
                "step": "$\\frac{13}{24}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\frac{5}{6}+\\left(\\frac{1}{4}\\right)^*$.",
              "answer": "7/12",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Compare the lengths $\\frac{5}{6}$ and $\\frac{1}{4}$: $\\frac{5}{6}=\\frac{10}{12}$ and $\\frac{1}{4}=\\frac{3}{12}$, so $\\frac{5}{6}$ is longer.",
                  "reason": "writing both fractions with the common denominator $12$"
                },
                {
                  "step": "The sum has the direction of the longer vector, which is positive, with length $\\frac{5}{6}-\\frac{1}{4}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$\\frac{5}{6}-\\frac{1}{4}=\\frac{10}{12}-\\frac{3}{12}=\\frac{7}{12}$.",
                  "reason": "subtraction of fractions"
                },
                {
                  "step": "$\\frac{7}{12}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $\\frac{4}{5}+\\left(\\frac{2}{3}\\right)^*$.",
              "answer": "2/15",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Compare the lengths $\\frac{4}{5}$ and $\\frac{2}{3}$: $\\frac{4}{5}=\\frac{12}{15}$ and $\\frac{2}{3}=\\frac{10}{15}$, so $\\frac{4}{5}$ is longer.",
                  "reason": "writing both fractions with the common denominator $15$"
                },
                {
                  "step": "The sum has the direction of the longer vector, which is positive, with length $\\frac{4}{5}-\\frac{2}{3}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$\\frac{4}{5}-\\frac{2}{3}=\\frac{12}{15}-\\frac{10}{15}=\\frac{2}{15}$.",
                  "reason": "subtraction of fractions"
                },
                {
                  "step": "$\\frac{2}{15}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $\\left(\\frac{2}{5}\\right)^*+\\frac{7}{8}$.",
              "answer": "19/40",
              "form": "Answer as a fraction in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Compare the lengths $\\frac{2}{5}$ and $\\frac{7}{8}$: $\\frac{2}{5}=\\frac{16}{40}$ and $\\frac{7}{8}=\\frac{35}{40}$, so $\\frac{7}{8}$ is longer.",
                  "reason": "writing both fractions with the common denominator $40$"
                },
                {
                  "step": "The sum has the direction of the longer vector, which is positive, with length $\\frac{7}{8}-\\frac{2}{5}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$\\frac{7}{8}-\\frac{2}{5}=\\frac{35}{40}-\\frac{16}{40}=\\frac{19}{40}$.",
                  "reason": "subtraction of fractions"
                },
                {
                  "step": "$\\frac{19}{40}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $1\\frac{2}{3}-6.18$.",
            "lines": [
              {
                "step": "Rewrite the difference as a sum: $1\\frac{2}{3}-6.18=1\\frac{2}{3}+(-6.18)$.",
                "reason": "the definition of subtraction, $x-y=x+(-y)$"
              },
              {
                "step": "Compare the lengths $1\\frac{2}{3}$ and $6.18$ as fractions with denominator $150$: $1\\frac{2}{3}=\\frac{250}{150}$ and $6.18=\\frac{927}{150}$, so $6.18$ is longer.",
                "reason": "writing both numbers with the common denominator $150$"
              },
              {
                "step": "The sum has the direction of the longer vector, which is negative, with length $6.18-1\\frac{2}{3}$.",
                "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
              },
              {
                "step": "$6.18-1\\frac{2}{3}=\\frac{927}{150}-\\frac{250}{150}=\\frac{677}{150}=4\\,\\frac{77}{150}$.",
                "reason": "subtraction of fractions"
              },
              {
                "step": "$-4\\,\\frac{77}{150}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $7\\frac{3}{4}-2\\frac{1}{5}$.",
              "answer": "5 11/20",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the difference as a sum: $7\\frac{3}{4}-2\\frac{1}{5}=7\\frac{3}{4}+\\left(-2\\frac{1}{5}\\right)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Compare the lengths $7\\frac{3}{4}$ and $2\\frac{1}{5}$ as fractions with denominator $20$: $7\\frac{3}{4}=\\frac{155}{20}$ and $2\\frac{1}{5}=\\frac{44}{20}$, so $7\\frac{3}{4}$ is longer.",
                  "reason": "writing both numbers with the common denominator $20$"
                },
                {
                  "step": "The sum has the direction of the longer vector, which is positive, with length $7\\frac{3}{4}-2\\frac{1}{5}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$7\\frac{3}{4}-2\\frac{1}{5}=\\frac{155}{20}-\\frac{44}{20}=\\frac{111}{20}=5\\,\\frac{11}{20}$.",
                  "reason": "subtraction of fractions"
                },
                {
                  "step": "$5\\,\\frac{11}{20}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $3\\frac{1}{8}-9.4$.",
              "answer": "-6 11/40",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the difference as a sum: $3\\frac{1}{8}-9.4=3\\frac{1}{8}+(-9.4)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Compare the lengths $3\\frac{1}{8}$ and $9.4$ as fractions with denominator $40$: $3\\frac{1}{8}=\\frac{125}{40}$ and $9.4=\\frac{376}{40}$, so $9.4$ is longer.",
                  "reason": "writing both numbers with the common denominator $40$"
                },
                {
                  "step": "The sum has the direction of the longer vector, which is negative, with length $9.4-3\\frac{1}{8}$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$9.4-3\\frac{1}{8}=\\frac{376}{40}-\\frac{125}{40}=\\frac{251}{40}=6\\,\\frac{11}{40}$.",
                  "reason": "subtraction of fractions"
                },
                {
                  "step": "$-6\\,\\frac{11}{40}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $12-15\\frac{2}{5}$.",
              "answer": "-3 2/5",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the difference as a sum: $12-15\\frac{2}{5}=12+\\left(-15\\frac{2}{5}\\right)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Compare the lengths $12$ and $15\\frac{2}{5}$ as fractions with denominator $5$: $12=\\frac{60}{5}$ and $15\\frac{2}{5}=\\frac{77}{5}$, so $15\\frac{2}{5}$ is longer.",
                  "reason": "writing both numbers with the common denominator $5$"
                },
                {
                  "step": "The sum has the direction of the longer vector, which is negative, with length $15\\frac{2}{5}-12$.",
                  "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
                },
                {
                  "step": "$15\\frac{2}{5}-12=\\frac{77}{5}-\\frac{60}{5}=\\frac{17}{5}=3\\,\\frac{2}{5}$.",
                  "reason": "subtraction of fractions"
                },
                {
                  "step": "$-3\\,\\frac{2}{5}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $-2\\frac{1}{4}-3\\frac{1}{2}$.",
            "lines": [
              {
                "step": "Rewrite the difference as a sum: $-2\\frac{1}{4}-3\\frac{1}{2}=-2\\frac{1}{4}+\\left(-3\\frac{1}{2}\\right)$.",
                "reason": "the definition of subtraction, $x-y=x+(-y)$"
              },
              {
                "step": "Both numbers are negative, so the two vectors point in the same direction.",
                "reason": "the mirror reflection of a positive fraction lies to the left of $0$"
              },
              {
                "step": "Add the lengths $2\\frac{1}{4}$ and $3\\frac{1}{2}$: $2\\frac{1}{4}+3\\frac{1}{2}=\\frac{9}{4}+\\frac{7}{2}=\\frac{9}{4}+\\frac{14}{4}=\\frac{23}{4}=5\\,\\frac{3}{4}$.",
                "reason": "addition of fractions"
              },
              {
                "step": "The sum has the common direction, so it equals the mirror reflection of $5\\frac{3}{4}$.",
                "reason": "the sum of vectors with the same direction has the sum of their lengths"
              },
              {
                "step": "$-5\\,\\frac{3}{4}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $-1\\frac{2}{3}-2\\frac{1}{4}$.",
              "answer": "-3 11/12",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the difference as a sum: $-1\\frac{2}{3}-2\\frac{1}{4}=-1\\frac{2}{3}+\\left(-2\\frac{1}{4}\\right)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Both numbers are negative, so the two vectors point in the same direction.",
                  "reason": "the mirror reflection of a positive fraction lies to the left of $0$"
                },
                {
                  "step": "Add the lengths $1\\frac{2}{3}$ and $2\\frac{1}{4}$: $1\\frac{2}{3}+2\\frac{1}{4}=\\frac{5}{3}+\\frac{9}{4}=\\frac{20}{12}+\\frac{27}{12}=\\frac{47}{12}=3\\,\\frac{11}{12}$.",
                  "reason": "addition of fractions"
                },
                {
                  "step": "The sum has the common direction, so it equals the mirror reflection of $3\\frac{11}{12}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-3\\,\\frac{11}{12}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $-\\frac{3}{5}-1\\frac{1}{2}$.",
              "answer": "-2 1/10",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the difference as a sum: $-\\frac{3}{5}-1\\frac{1}{2}=-\\frac{3}{5}+\\left(-1\\frac{1}{2}\\right)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Both numbers are negative, so the two vectors point in the same direction.",
                  "reason": "the mirror reflection of a positive fraction lies to the left of $0$"
                },
                {
                  "step": "Add the lengths $\\frac{3}{5}$ and $1\\frac{1}{2}$: $\\frac{3}{5}+1\\frac{1}{2}=\\frac{3}{5}+\\frac{3}{2}=\\frac{6}{10}+\\frac{15}{10}=\\frac{21}{10}=2\\,\\frac{1}{10}$.",
                  "reason": "addition of fractions"
                },
                {
                  "step": "The sum has the common direction, so it equals the mirror reflection of $2\\frac{1}{10}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-2\\,\\frac{1}{10}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $-2\\frac{1}{6}-\\frac{4}{9}$.",
              "answer": "-2 11/18",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the difference as a sum: $-2\\frac{1}{6}-\\frac{4}{9}=-2\\frac{1}{6}+\\left(-\\frac{4}{9}\\right)$.",
                  "reason": "the definition of subtraction, $x-y=x+(-y)$"
                },
                {
                  "step": "Both numbers are negative, so the two vectors point in the same direction.",
                  "reason": "the mirror reflection of a positive fraction lies to the left of $0$"
                },
                {
                  "step": "Add the lengths $2\\frac{1}{6}$ and $\\frac{4}{9}$: $2\\frac{1}{6}+\\frac{4}{9}=\\frac{13}{6}+\\frac{4}{9}=\\frac{39}{18}+\\frac{8}{18}=\\frac{47}{18}=2\\,\\frac{11}{18}$.",
                  "reason": "addition of fractions"
                },
                {
                  "step": "The sum has the common direction, so it equals the mirror reflection of $2\\frac{11}{18}$.",
                  "reason": "the sum of vectors with the same direction has the sum of their lengths"
                },
                {
                  "step": "$-2\\,\\frac{11}{18}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t23-k2",
      "forms": [
        {
          "example": {
            "problem": "Compute $5-\\left(\\frac{1}{2}-8\\right)$.",
            "lines": [
              {
                "step": "Rewrite the expression by removing the parentheses: $5-\\left(\\frac{1}{2}-8\\right)=5-\\frac{1}{2}+8$.",
                "reason": "the rule for removing parentheses, $-(x-y)=-x+y$"
              },
              {
                "step": "Combine the whole-number terms: $5+8=13$, so the expression equals $13-\\frac{1}{2}$.",
                "reason": "addition of whole numbers"
              },
              {
                "step": "$13-\\frac{1}{2}=12\\,\\frac{1}{2}$.",
                "reason": "subtraction of a fraction from a whole number"
              },
              {
                "step": "$12\\,\\frac{1}{2}$.",
                "reason": "combining the previous lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $3-\\left(\\frac{2}{5}-6\\right)$.",
              "answer": "8 3/5",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the expression by removing the parentheses: $3-\\left(\\frac{2}{5}-6\\right)=3-\\frac{2}{5}+6$.",
                  "reason": "the rule for removing parentheses, $-(x-y)=-x+y$"
                },
                {
                  "step": "Combine the whole-number terms: $3+6=9$, so the expression equals $9-\\frac{2}{5}$.",
                  "reason": "addition of whole numbers"
                },
                {
                  "step": "$9-\\frac{2}{5}=8\\,\\frac{3}{5}$.",
                  "reason": "subtraction of a fraction from a whole number"
                },
                {
                  "step": "$8\\,\\frac{3}{5}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $2-\\left(\\frac{5}{6}-10\\right)$.",
              "answer": "11 1/6",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the expression by removing the parentheses: $2-\\left(\\frac{5}{6}-10\\right)=2-\\frac{5}{6}+10$.",
                  "reason": "the rule for removing parentheses, $-(x-y)=-x+y$"
                },
                {
                  "step": "Combine the whole-number terms: $2+10=12$, so the expression equals $12-\\frac{5}{6}$.",
                  "reason": "addition of whole numbers"
                },
                {
                  "step": "$12-\\frac{5}{6}=11\\,\\frac{1}{6}$.",
                  "reason": "subtraction of a fraction from a whole number"
                },
                {
                  "step": "$11\\,\\frac{1}{6}$.",
                  "reason": "combining the previous lines"
                }
              ]
            },
            {
              "prompt": "Compute $6-\\left(\\frac{1}{3}-4\\right)$.",
              "answer": "9 2/3",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "Rewrite the expression by removing the parentheses: $6-\\left(\\frac{1}{3}-4\\right)=6-\\frac{1}{3}+4$.",
                  "reason": "the rule for removing parentheses, $-(x-y)=-x+y$"
                },
                {
                  "step": "Combine the whole-number terms: $6+4=10$, so the expression equals $10-\\frac{1}{3}$.",
                  "reason": "addition of whole numbers"
                },
                {
                  "step": "$10-\\frac{1}{3}=9\\,\\frac{2}{3}$.",
                  "reason": "subtraction of a fraction from a whole number"
                },
                {
                  "step": "$9\\,\\frac{2}{3}$.",
                  "reason": "combining the previous lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t23-k3",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{7}{2}$.",
            "figure": {
              "file": "place:line:7/2",
              "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, nothing between."
            },
            "lines": [
              {
                "step": "$7=3\\times 2+1$, so $\\frac{7}{2}=3+\\frac{1}{2}$.",
                "reason": "7 copies of $\\frac{1}{2}$ hold 3 groups of 2 copies, each group making 1, with 1 copy left over"
              },
              {
                "step": "The mark lies between 3 and 4, $\\frac{1}{2}$ of the way from 3 to 4.",
                "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 1 of the 2 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:7/2",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, with 7/2 marked, between 3 and 4."
                }
              },
              {
                "step": "$\\frac{1}{2}=\\frac{1\\times 5}{2\\times 5}=\\frac{5}{10}=0.5$.",
                "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
              },
              {
                "step": "$3.5$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:7/2",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 7/2 lies at 3.5, between 3 and 4."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{5}{2}$.",
              "answer": "5/2",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$5=2\\times 2+1$, so $\\frac{5}{2}=2+\\frac{1}{2}$.",
                  "reason": "5 copies of $\\frac{1}{2}$ hold 2 groups of 2 copies, each group making 1, with 1 copy left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{1}{2}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 1 of the 2 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{1}{2}=\\frac{1\\times 5}{2\\times 5}=\\frac{5}{10}=0.5$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$2.5$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:5/2",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 5/2 lies at 2.5, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{17}{5}$.",
              "answer": "17/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$17=3\\times 5+2$, so $\\frac{17}{5}=3+\\frac{2}{5}$.",
                  "reason": "17 copies of $\\frac{1}{5}$ hold 3 groups of 5 copies, each group making 1, with 2 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{2}{5}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 2 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{2}{5}=\\frac{2\\times 2}{5\\times 2}=\\frac{4}{10}=0.4$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$3.4$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:17/5",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 17/5 lies at 3.4, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{8}{5}$.",
              "answer": "8/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$8=1\\times 5+3$, so $\\frac{8}{5}=1+\\frac{3}{5}$.",
                  "reason": "8 copies of $\\frac{1}{5}$ hold 1 group of 5 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 1 and 2, $\\frac{3}{5}$ of the way from 1 to 2.",
                  "reason": "the whole part 1 puts the mark in the unit from 1 to 2, and 3 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$1.6$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:8/5",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 8/5 lies at 1.6, between 1 and 2."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $0.7$.",
            "figure": {
              "file": "place:line:0.7",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $0.7$ is 0, so the mark lies between 0 and 1.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.7=\\frac{7}{10}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 7 and no hundredths follow it, so the mark is the 7th cut of the unit from $0$ to $1$, at $0.7$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:0.7",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 0.7 marked, between 0 and 1."
                }
              },
              {
                "step": "$0.7$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:0.7",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.7 lies at 0.7, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $0.70$.",
              "answer": "0.70",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.70$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.70=\\frac{70}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 7 and no hundredths follow it, so the mark is the 7th cut of the unit from $0$ to $1$, at $0.7$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.70$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.70",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.70 lies at 0.7, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $3.4$.",
              "answer": "3.4",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $3.4$ is 3, so the mark lies between 3 and 4.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.4=\\frac{4}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 4 and no hundredths follow it, so the mark is the 4th cut of the unit from $3$ to $4$, at $3.4$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.4$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:3.4",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.4 lies at 3.4, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $1.8$.",
              "answer": "1.8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.8$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.8=\\frac{8}{10}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 8 and no hundredths follow it, so the mark is the 8th cut of the unit from $1$ to $2$, at $1.8$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.8$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.8",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.8 lies at 1.8, between 1 and 2."
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
      "id": "t23-p1",
      "method": "proof by cases",
      "statement": "Take nonzero rational numbers $x$ and $y$ with $y$ not the mirror reflection of $x$. If $\\vec x$ and $\\vec y$ point in the same direction, the sum $\\vec x+\\vec y$ points in that direction. Its length is the sum of the two lengths. If they point in opposite directions, the sum points in the direction of the longer vector. Its length is the longer length minus the shorter length.",
      "idea": "Slide the second vector to start at the endpoint of the first. The sum's direction and length depend only on the two lengths and the two directions.",
      "lines": [
        {
          "line": "Sliding $\\vec y$ to start at the endpoint of $\\vec x$ extends $\\vec x$ further when both point in the same direction. So the sum $\\vec x+\\vec y$ has that direction. Its length is the length of $\\vec x$ plus the length of $\\vec y$.",
          "reason": "the definition of the addition of special vectors"
        },
        {
          "line": "Suppose that $\\vec x$ and $\\vec y$ point in opposite directions and $\\vec x$ is the longer one. Sliding $\\vec y$ to start at the endpoint of $\\vec x$ moves the endpoint back toward $0$ but not past it. So the sum points in the direction of $\\vec x$. Its length is the length of $\\vec x$ minus the length of $\\vec y$.",
          "reason": "the length of $\\vec y$ is less than the length of $\\vec x$",
          "figure": {
            "file": "adding-and-subtracting-rational-numbers-2.json",
            "alt": "A number line from −4 to 2. The vector x runs from 0 to −3, the vector y of length 1 runs from −3 to −2, and the sum x + y ends at −2."
          }
        },
        {
          "line": "Exchange $\\vec x$ and $\\vec y$ in the same reasoning to cover the case where $\\vec y$ is the longer. Then the sum points in the direction of $\\vec y$. Its length is the length of $\\vec y$ minus the length of $\\vec x$.",
          "reason": "the definition of the addition of special vectors does not depend on which vector you name first"
        },
        {
          "line": "So two vectors with the same direction have a sum with that direction. Its length is the sum of the two lengths. Two vectors with opposite directions have a sum with the direction of the longer one. Its length is the longer length minus the shorter length.",
          "reason": "combining the two cases above"
        }
      ]
    },
    {
      "id": "t23-p2",
      "method": "direct proof",
      "statement": "For every rational number $x$, $\\vec x+\\vec{x^*}=\\vec0$, and therefore $x+x^*=0$.",
      "idea": "The vector for $x^*$ has the same length as the vector for $x$ and has the opposite direction. Sliding it to start where the vector for $x$ ends therefore brings its endpoint back to $0$.",
      "lines": [
        {
          "line": "The vector $\\vec x$ and the vector $\\vec{x^*}$ have the same length and opposite directions.",
          "reason": "the definition of mirror reflection",
          "figure": {
            "file": "adding-and-subtracting-rational-numbers-1.json",
            "alt": "A number line from −4 to 4. The point x, here 3, and its mirror reflection x*, here −3, lie on opposite sides of 0 at equal distance."
          }
        },
        {
          "line": "Sliding $\\vec{x^*}$ to start at the endpoint of $\\vec x$ moves its endpoint back to $0$. The two vectors have equal length and opposite directions, so one undoes the other.",
          "reason": "the definition of the addition of special vectors"
        },
        {
          "line": "When $x=0$, the vector $\\vec x$ is the zero vector, and the sum is the zero vector without a slide.",
          "reason": "the definition of the zero vector"
        },
        {
          "line": "So $\\vec x+\\vec{x^*}=\\vec0$ for every rational number $x$, and therefore $x+x^*=0$.",
          "reason": "combining the previous lines and the definition of the addition of rational numbers"
        }
      ]
    },
    {
      "id": "t23-p3",
      "method": "proof of existence by construction",
      "statement": "For every two rational numbers $x$ and $y$, there is a rational number $z$ such that $x+y=z$.",
      "idea": "The length of the vector $\\vec x+\\vec y$ is $0$ or a positive fraction. So its endpoint is $0$, that fraction, or its mirror reflection.",
      "lines": [
        {
          "line": "The vector $\\vec x+\\vec y$ has some length $p$. If $p=0$, then $x+y=0$, which is a rational number. Otherwise $p$ is the sum or the difference of the lengths of $\\vec x$ and $\\vec y$. It is not $0$, so $p$ is a positive fraction.",
          "reason": "the sum of two vectors has the sum or difference of their lengths, and the zero vector ends at $0$"
        },
        {
          "line": "The number $p$ and its mirror reflection $p^*$ are the only numbers of length $p$, one right-pointing and one left-pointing.",
          "reason": "the definition of mirror reflection"
        },
        {
          "line": "So $\\vec x+\\vec y$ equals $\\vec p$ or $\\vec{p^*}$, since the length and direction of a special vector determine it completely.",
          "reason": "the definition of a special vector"
        },
        {
          "line": "So $x+y$ equals $p$ or equals $p^*$, and both are rational numbers.",
          "reason": "the definition of the addition of rational numbers, and the definition of a rational number"
        }
      ]
    },
    {
      "id": "t23-p4",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, $x+y=y+x$.",
      "idea": "The sum of two vectors depends only on the two lengths and the two directions. Renaming the vectors changes neither.",
      "lines": [
        {
          "line": "The direction and length of $\\vec x+\\vec y$ depend only on the lengths and directions of $\\vec x$ and $\\vec y$, in either order.",
          "reason": "the sum of two vectors has its length and direction set by the two lengths and the two directions"
        },
        {
          "line": "Exchanging the names of $\\vec x$ and $\\vec y$ leaves those two lengths and those two directions unchanged.",
          "reason": "the vectors $\\vec x$ and $\\vec y$ keep the same lengths and the same directions after the exchange"
        },
        {
          "line": "So $\\vec x+\\vec y$ and $\\vec y+\\vec x$ have the same length and the same direction, and therefore $\\vec x+\\vec y=\\vec y+\\vec x$.",
          "reason": "the length and direction of a special vector determine it completely"
        },
        {
          "line": "So $x+y=y+x$ for all rational numbers $x$ and $y$.",
          "reason": "the definition of the addition of rational numbers"
        }
      ]
    },
    {
      "id": "t23-p5",
      "method": "proof by cases",
      "statement": "For all rational numbers $x$, $y$, and $z$, $(x+y)+z=x+(y+z)$.",
      "idea": "Both groupings reduce to comparing the same total length pointing left against the same total length pointing right.",
      "lines": [
        {
          "line": "By the commutative law, $(\\vec x+\\vec y)+\\vec z=\\vec x+(\\vec y+\\vec z)$ is equivalent to $(\\vec x+\\vec y)+\\vec z=(\\vec y+\\vec z)+\\vec x$.",
          "reason": "the commutative law of the addition of special vectors"
        },
        {
          "line": "The length and direction of $(\\vec x+\\vec y)+\\vec z$ depend only on which of $\\vec x,\\vec y,\\vec z$ point left and which point right. They also depend on the total length pointing each way.",
          "reason": "the sum of two vectors depends only on their lengths and directions, used for each addition in the sum"
        },
        {
          "line": "The same is true of $(\\vec y+\\vec z)+\\vec x$, with the same three vectors entering the comparison.",
          "reason": "grouping does not change the directions and lengths involved"
        },
        {
          "line": "Let $L$ be the total length of those among $\\vec x,\\vec y,\\vec z$ that point left. Let $R$ be the total length of those that point right. Exactly one of $L>R$, $R>L$, and $L=R$ holds.",
          "reason": "of two lengths, one is the greater or they are equal"
        },
        {
          "line": "Case $L>R$. Then both $(\\vec x+\\vec y)+\\vec z$ and $(\\vec y+\\vec z)+\\vec x$ point left, with length $L-R$.",
          "reason": "the sum of two vectors has the sum or difference of their lengths, used twice on the same three lengths"
        },
        {
          "line": "Case $R>L$. Then both point right, with length $R-L$.",
          "reason": "the sum of two vectors has the sum or difference of their lengths, used twice on the same three lengths"
        },
        {
          "line": "Case $L=R$. Then both are the zero vector.",
          "reason": "the sum of two vectors has the sum or difference of their lengths, and length $0$ means the zero vector"
        },
        {
          "line": "In each of the three cases, $(\\vec x+\\vec y)+\\vec z$ and $(\\vec y+\\vec z)+\\vec x$ have the same direction and the same length. So $(x+y)+z=x+(y+z)$.",
          "reason": "the length and direction of a special vector determine it completely, and the definition of the addition of rational numbers"
        }
      ]
    },
    {
      "id": "t23-p6",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, $x^*+y^*=(x+y)^*$.",
      "idea": "The vectors $\\vec{x^*}+\\vec{y^*}$ and $\\vec x+\\vec y$ have equal length and opposite direction, so one is the mirror reflection of the other.",
      "lines": [
        {
          "line": "Reflecting a vector does not change its length. So $\\vec{x^*}$ and $\\vec x$ have the same length, and so do $\\vec{y^*}$ and $\\vec y$.",
          "reason": "the definition of mirror reflection"
        },
        {
          "line": "So the length of $\\vec{x^*}+\\vec{y^*}$ equals the length of $\\vec x+\\vec y$.",
          "reason": "the sum of two vectors has the sum or difference of their lengths, used for each pair"
        },
        {
          "line": "The vector $\\vec{x^*}$ points opposite to $\\vec x$ and $\\vec{y^*}$ points opposite to $\\vec y$, so $\\vec{x^*}+\\vec{y^*}$ points opposite to $\\vec x+\\vec y$.",
          "reason": "the definition of mirror reflection, applied to each vector before adding"
        },
        {
          "line": "So $\\vec{x^*}+\\vec{y^*}$ and $\\vec x+\\vec y$ have equal length and opposite direction, and therefore $\\vec{x^*}+\\vec{y^*}$ is the mirror reflection of $\\vec x+\\vec y$.",
          "reason": "the definition of mirror reflection"
        },
        {
          "line": "So $x^*+y^*=(x+y)^*$ for all rational numbers $x$ and $y$.",
          "reason": "the definition of the addition of rational numbers"
        }
      ]
    },
    {
      "id": "t23-p7",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, $-(x-y)=-x+y$.",
      "idea": "Rewriting $x-y$ as $x+(-y)$ turns this into the rule already proved for a sum of two numbers.",
      "lines": [
        {
          "line": "Rewrite the difference as a sum: $x-y=x+(-y)$.",
          "reason": "the definition of subtraction"
        },
        {
          "line": "Apply the rule that the mirror reflection of a sum equals the sum of the mirror reflections: $-(x+(-y))=-x+(-(-y))$.",
          "reason": "the rule that $x^*+y^*=(x+y)^*$, written with the minus sign"
        },
        {
          "line": "Reflecting a number twice returns the number, so $-(-y)=y$.",
          "reason": "reflecting twice returns the original point, $p^{**}=p$, for every point $p$ on the number line"
        },
        {
          "line": "So $-(x-y)=-x+y$ for all rational numbers $x$ and $y$.",
          "reason": "combining the previous lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t23-s1",
      "method": "proof by cases",
      "statement": "Take rational numbers $x$, $y$, and $z$ with $x$ negative, $y$ negative, and $z$ positive. Suppose that the length of $z$ is less than the length of $y$. Then $(x+y)+z=x+(y+z)$.",
      "check": {
        "proof": [
          {
            "line": "Add $x$ and $y$ first. Since both are negative, $x+y$ is negative, with length equal to the length of $x$ plus the length of $y$.",
            "reason": "the sum of vectors with the same direction has the sum of their lengths"
          },
          {
            "line": "Add $z$ to $x+y$. The length of $z$ is less than the length of $y$. So it is also less than the length of $x$ plus the length of $y$. So $(x+y)+z$ is negative. Its length is the length of $x$ plus the length of $y$ minus the length of $z$.",
            "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
          },
          {
            "line": "Add $y$ and $z$ first. The length of $z$ is less than the length of $y$, so $y+z$ is negative. Its length is the length of $y$ minus the length of $z$.",
            "reason": "the sum of vectors with opposite directions has the difference of their lengths, in the direction of the longer"
          },
          {
            "line": "Add $x$ to $y+z$. Since $x$ and $y+z$ are both negative, $x+(y+z)$ is negative. Its length is the length of $x$ plus the length of $y$ minus the length of $z$.",
            "reason": "the sum of vectors with the same direction has the sum of their lengths"
          },
          {
            "line": "So both groupings give a negative number with the same length, and therefore $(x+y)+z=x+(y+z)$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t23-s2",
      "method": "proof of existence by construction",
      "statement": "For all rational numbers $A$ and $B$, there is a rational number $x$ such that $A+x=B$.",
      "check": {
        "proof": [
          {
            "line": "Let $x=B+A^*$.",
            "reason": "the sum of two rational numbers is a rational number"
          },
          {
            "line": "Compute $A+x=A+(B+A^*)=A+(A^*+B)$.",
            "reason": "the commutative law of addition"
          },
          {
            "line": "$A+(A^*+B)=(A+A^*)+B=0+B=B$.",
            "reason": "the associative law of addition, and $x+x^*=0$"
          },
          {
            "line": "So $A+x=B$, and therefore $x=B+A^*$ is a rational number that solves the equation.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t23-s3",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, if $x+y=0$, then $y=x^*$ and $x=y^*$.",
      "check": {
        "proof": [
          {
            "line": "The sum $x+y$ lies at a distance from $x$ equal to the length of $y$. It lies on the side of $x$ that matches the direction of $y$.",
            "reason": "the definition of the addition of rational numbers"
          },
          {
            "line": "If $x+y=0$, then $0$ lies at that distance and side from $x$. So $y$ has the same length as $x$. It lies on the opposite side of $0$ from $x$, which is where $x^*$ lies.",
            "reason": "the definition of mirror reflection"
          },
          {
            "line": "So $y=x^*$.",
            "reason": "combining the previous lines"
          },
          {
            "line": "Reflecting both sides of $y=x^*$ gives $y^*=x^{**}$. Reflecting twice returns the original number, so $x=y^*$.",
            "reason": "reflecting twice returns the original point, $p^{**}=p$, for every point $p$ on the number line"
          },
          {
            "line": "So if $x+y=0$, then $y=x^*$ and $x=y^*$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    }
  ]
}
