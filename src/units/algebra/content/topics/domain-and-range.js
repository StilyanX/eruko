export default {
  "number": 158,
  "title": "Domain and range",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "453-464, 479-483"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the domain of $f(x) = \\dfrac{\\sqrt{12x - 12}}{-11x + 13}$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "1 <= x < 13/11 or x > 13/11",
    "solution": [
      "Find the domain of $f(x) = \\dfrac{\\sqrt{12x - 12}}{-11x + 13}$.",
      "The top needs $12x - 12 \\ge 0$, that is $x \\ge 1$.",
      "The bottom $-11x + 13$ is $0$ at $x = \\dfrac{13}{11}$.",
      "The domain is the numbers with $1 \\le x < \\dfrac{13}{11}$ or $x > \\dfrac{13}{11}$."
    ]
  },
  "ideas": [
    {
      "name": "Domain",
      "concrete": "The function $f(x) = \\dfrac{7}{x - 23}$ gives an output for every real $x$ but $23$, where the bottom is $0$, so its domain is $x < 23$ or $x > 23$.",
      "general": "The **domain** of a function is the set of inputs that give an output. An input that makes a bottom $0$, or puts a negative number under a square root, is not in the domain. Two functions are the same function when they have the same domain and give the same output at every input in it."
    },
    {
      "name": "Range",
      "concrete": "Every output of $f(x) = 8x^2 + 23$ is at least $23$, since $8x^2 \\ge 0$, and each $y \\ge 23$ is an output, so the range is $y \\ge 23$.",
      "general": "The **range** of a function $f$ is the set of its outputs: the numbers $y$ with $f(x) = y$ for some $x$ in the domain."
    },
    {
      "name": "Restricted domain",
      "concrete": "Defined only for $2 \\le x \\le 9$, the function $f(x) = 13x - 5$ has outputs from $21$ to $112$ and no others.",
      "general": "A **restricted domain** is a domain set by the definition of a function, smaller than the set of inputs that could be computed. The range then holds only the outputs of the allowed inputs."
    },
    {
      "name": "Finding the range by solving $y = f(x)$ for $x$",
      "concrete": "For $f(x) = \\dfrac{14x + 9}{x - 20}$, solving $y = \\dfrac{14x + 9}{x - 20}$ for $x$ gives $x = \\dfrac{20y + 9}{y - 14}$, an input for every $y$ but $14$, so the range is $y < 14$ or $y > 14$.",
      "general": "For a function $f$, a number $y$ is in the range exactly when the equation $y = f(x)$ has a solution $x$ in the domain. Solving the equation for $x$ shows which $y$ have one."
    },
    {
      "name": "The domain of a sum, product or quotient of functions",
      "concrete": "The domain of $\\sqrt{x + 17}$ is $x \\ge -17$ and the domain of $\\sqrt{31 - x}$ is $x \\le 31$, so $\\sqrt{x + 17} + \\sqrt{31 - x}$ has domain $-17 \\le x \\le 31$, while $\\dfrac{\\sqrt{x + 17}}{\\sqrt{31 - x}}$ also leaves out $31$ and has domain $-17 \\le x < 31$.",
      "general": "For functions $f$ and $g$, the domain of $f+g$, $f-g$ and $fg$ is the common part of the domains of $f$ and $g$, and the domain of $f/g$ is that common part with the zeros of $g$ left out."
    }
  ],
  "kinds": [
    {
      "id": "t158-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the domain of $f(x) = \\dfrac{3x + 19}{-2x + 19}$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = \\dfrac{3x + 19}{-2x + 19}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The bottom $-2x + 19$ is $0$ at $x = \\dfrac{19}{2}$.",
                "reason": "Dividing both sides by a nonzero number: $-2x + 19 = 0$ gives $-2x = -19$, and dividing by $-2$ gives $x = \\dfrac{19}{2}$."
              },
              {
                "step": "Every other real $x$ gives a bottom that is not $0$, so the top divided by the bottom is a real number.",
                "reason": "Domain: the domain of a function is the set of inputs that give an output, and division by $0$ gives none."
              },
              {
                "step": "The domain is the numbers with $x < \\dfrac{19}{2}$ or $x > \\dfrac{19}{2}$.",
                "reason": "Strict and nonstrict inequality: only $x = \\dfrac{19}{2}$ is left out, so both parts are strict."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{5x - 28}{-10x - 26}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -13/5 or x > -13/5",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{5x - 28}{-10x - 26}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $-10x - 26$ is $0$ at $x = -\\dfrac{13}{5}$.",
                  "reason": "Dividing both sides by a nonzero number: $-10x - 26 = 0$ gives $-10x = 26$, and dividing by $-10$ gives $x = -\\dfrac{13}{5}$."
                },
                {
                  "step": "Every other real $x$ gives a bottom that is not $0$, so the top divided by the bottom is a real number.",
                  "reason": "Domain: the domain of a function is the set of inputs that give an output, and division by $0$ gives none."
                },
                {
                  "step": "The domain is the numbers with $x < -\\dfrac{13}{5}$ or $x > -\\dfrac{13}{5}$.",
                  "reason": "Strict and nonstrict inequality: only $x = -\\dfrac{13}{5}$ is left out, so both parts are strict."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{-15x + 5}{-3x - 34}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -34/3 or x > -34/3",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{-15x + 5}{-3x - 34}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $-3x - 34$ is $0$ at $x = -\\dfrac{34}{3}$.",
                  "reason": "Dividing both sides by a nonzero number: $-3x - 34 = 0$ gives $-3x = 34$, and dividing by $-3$ gives $x = -\\dfrac{34}{3}$."
                },
                {
                  "step": "Every other real $x$ gives a bottom that is not $0$, so the top divided by the bottom is a real number.",
                  "reason": "Domain: the domain of a function is the set of inputs that give an output, and division by $0$ gives none."
                },
                {
                  "step": "The domain is the numbers with $x < -\\dfrac{34}{3}$ or $x > -\\dfrac{34}{3}$.",
                  "reason": "Strict and nonstrict inequality: only $x = -\\dfrac{34}{3}$ is left out, so both parts are strict."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{-14x - 25}{7x + 28}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -4 or x > -4",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{-14x - 25}{7x + 28}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottom $7x + 28$ is $0$ at $x = -4$.",
                  "reason": "Dividing both sides by a nonzero number: $7x + 28 = 0$ gives $7x = -28$, and dividing by $7$ gives $x = -4$."
                },
                {
                  "step": "Every other real $x$ gives a bottom that is not $0$, so the top divided by the bottom is a real number.",
                  "reason": "Domain: the domain of a function is the set of inputs that give an output, and division by $0$ gives none."
                },
                {
                  "step": "The domain is the numbers with $x < -4$ or $x > -4$.",
                  "reason": "Strict and nonstrict inequality: only $x = -4$ is left out, so both parts are strict."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = -8\\sqrt{6x - 36} + 10$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = -8\\sqrt{6x - 36} + 10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x - 36 \\ge 0$",
                "reason": "Even root of a negative number is not real: the number under the root must be at least $0$."
              },
              {
                "step": "$6x \\ge 36$",
                "reason": "Adding the same number: $36$ is added to both sides."
              },
              {
                "step": "$x \\ge 6$",
                "reason": "Multiplying by a positive number: both sides are divided by $6$. These are the numbers in the domain."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = 3\\sqrt{12x - 10} + 14$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= 5/6",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = 3\\sqrt{12x - 10} + 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12x - 10 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$."
                },
                {
                  "step": "$12x \\ge 10$",
                  "reason": "Adding the same number: $10$ is added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{5}{6}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $12$. These are the numbers in the domain."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = -7\\sqrt{14x - 26} - 12$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= 13/7",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = -7\\sqrt{14x - 26} - 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$14x - 26 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$."
                },
                {
                  "step": "$14x \\ge 26$",
                  "reason": "Adding the same number: $26$ is added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{13}{7}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $14$. These are the numbers in the domain."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = 2\\sqrt{11x + 31} + 13$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= -31/11",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = 2\\sqrt{11x + 31} + 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$11x + 31 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$."
                },
                {
                  "step": "$11x \\ge -31$",
                  "reason": "Adding the same number: $-31$ is added to both sides."
                },
                {
                  "step": "$x \\ge -\\dfrac{31}{11}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $11$. These are the numbers in the domain."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = \\sqrt{3x^2 - 26x + 48}$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = \\sqrt{3x^2 - 26x + 48}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x^2 - 26x + 48 \\ge 0$",
                "reason": "Even root of a negative number is not real: the number under the root must be at least $0$."
              },
              {
                "step": "$(3x - 8)(x - 6) \\ge 0$",
                "reason": "Factoring a quadratic: $(3x - 8)(x - 6)$ multiplies out to $3x^2 - 26x + 48$."
              },
              {
                "step": "The factor $3x - 8$ is $0$ at $x = \\dfrac{8}{3}$, and $x - 6$ is $0$ at $x = 6$.",
                "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
              },
              {
                "step": "The product is positive for $x < \\dfrac{8}{3}$ and for $x > 6$, and negative between them.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the two factors have the same sign outside the roots and differ between them."
              },
              {
                "step": "The domain is the numbers with $x \\le \\dfrac{8}{3}$ or $x \\ge 6$.",
                "reason": "Strict and nonstrict inequality: the root allows $0$ under it, so the two roots are taken in."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = \\sqrt{5x^2 + 33x + 40}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -5 or x >= -8/5",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\sqrt{5x^2 + 33x + 40}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x^2 + 33x + 40 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$."
                },
                {
                  "step": "$(5x + 8)(x + 5) \\ge 0$",
                  "reason": "Factoring a quadratic: $(5x + 8)(x + 5)$ multiplies out to $5x^2 + 33x + 40$."
                },
                {
                  "step": "The factor $5x + 8$ is $0$ at $x = -\\dfrac{8}{5}$, and $x + 5$ is $0$ at $x = -5$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "The product is positive for $x < -5$ and for $x > -\\dfrac{8}{5}$, and negative between them.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the two factors have the same sign outside the roots and differ between them."
                },
                {
                  "step": "The domain is the numbers with $x \\le -5$ or $x \\ge -\\dfrac{8}{5}$.",
                  "reason": "Strict and nonstrict inequality: the root allows $0$ under it, so the two roots are taken in."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\sqrt{3x^2 - 22x + 40}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= 10/3 or x >= 4",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\sqrt{3x^2 - 22x + 40}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x^2 - 22x + 40 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$."
                },
                {
                  "step": "$(x - 4)(3x - 10) \\ge 0$",
                  "reason": "Factoring a quadratic: $(x - 4)(3x - 10)$ multiplies out to $3x^2 - 22x + 40$."
                },
                {
                  "step": "The factor $x - 4$ is $0$ at $x = 4$, and $3x - 10$ is $0$ at $x = \\dfrac{10}{3}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "The product is positive for $x < \\dfrac{10}{3}$ and for $x > 4$, and negative between them.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the two factors have the same sign outside the roots and differ between them."
                },
                {
                  "step": "The domain is the numbers with $x \\le \\dfrac{10}{3}$ or $x \\ge 4$.",
                  "reason": "Strict and nonstrict inequality: the root allows $0$ under it, so the two roots are taken in."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\sqrt{8x^2 - 2x - 55}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -5/2 or x >= 11/4",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\sqrt{8x^2 - 2x - 55}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8x^2 - 2x - 55 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$."
                },
                {
                  "step": "$(4x - 11)(2x + 5) \\ge 0$",
                  "reason": "Factoring a quadratic: $(4x - 11)(2x + 5)$ multiplies out to $8x^2 - 2x - 55$."
                },
                {
                  "step": "The factor $4x - 11$ is $0$ at $x = \\dfrac{11}{4}$, and $2x + 5$ is $0$ at $x = -\\dfrac{5}{2}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "The product is positive for $x < -\\dfrac{5}{2}$ and for $x > \\dfrac{11}{4}$, and negative between them.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the two factors have the same sign outside the roots and differ between them."
                },
                {
                  "step": "The domain is the numbers with $x \\le -\\dfrac{5}{2}$ or $x \\ge \\dfrac{11}{4}$.",
                  "reason": "Strict and nonstrict inequality: the root allows $0$ under it, so the two roots are taken in."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = \\sqrt{8x - 32} + \\sqrt{8x + 1}$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = \\sqrt{8x - 32} + \\sqrt{8x + 1}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first root needs $8x - 32 \\ge 0$, that is $x \\ge 4$.",
                "reason": "Even root of a negative number is not real: $8x - 32$ must be at least $0$, and solving gives $x \\ge 4$."
              },
              {
                "step": "The second root needs $8x + 1 \\ge 0$, that is $x \\ge -\\dfrac{1}{8}$.",
                "reason": "Even root of a negative number is not real: $8x + 1$ must be at least $0$, and solving gives $x \\ge -\\dfrac{1}{8}$."
              },
              {
                "step": "The domain is the numbers with $x \\ge 4$.",
                "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: both hold exactly when $x \\ge 4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = \\sqrt{8x + 30} + \\sqrt{-20 - 10x}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-15/4 <= x <= -2",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\sqrt{8x + 30} + \\sqrt{-20 - 10x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first root needs $8x + 30 \\ge 0$, that is $x \\ge -\\dfrac{15}{4}$.",
                  "reason": "Even root of a negative number is not real: $8x + 30$ must be at least $0$, and solving gives $x \\ge -\\dfrac{15}{4}$."
                },
                {
                  "step": "The second root needs $-20 - 10x \\ge 0$, that is $x \\le -2$.",
                  "reason": "Even root of a negative number is not real: $-20 - 10x$ must be at least $0$, and solving gives $x \\le -2$."
                },
                {
                  "step": "The domain is the numbers with $-\\dfrac{15}{4} \\le x \\le -2$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: both hold exactly when $-\\dfrac{15}{4} \\le x \\le -2$."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\sqrt{3x - 30} + \\sqrt{4x - 13}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= 10",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\sqrt{3x - 30} + \\sqrt{4x - 13}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first root needs $3x - 30 \\ge 0$, that is $x \\ge 10$.",
                  "reason": "Even root of a negative number is not real: $3x - 30$ must be at least $0$, and solving gives $x \\ge 10$."
                },
                {
                  "step": "The second root needs $4x - 13 \\ge 0$, that is $x \\ge \\dfrac{13}{4}$.",
                  "reason": "Even root of a negative number is not real: $4x - 13$ must be at least $0$, and solving gives $x \\ge \\dfrac{13}{4}$."
                },
                {
                  "step": "The domain is the numbers with $x \\ge 10$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: both hold exactly when $x \\ge 10$."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\sqrt{12x + 34}\\sqrt{6x + 31}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= -17/6",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\sqrt{12x + 34}\\sqrt{6x + 31}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first root needs $12x + 34 \\ge 0$, that is $x \\ge -\\dfrac{17}{6}$.",
                  "reason": "Even root of a negative number is not real: $12x + 34$ must be at least $0$, and solving gives $x \\ge -\\dfrac{17}{6}$."
                },
                {
                  "step": "The second root needs $6x + 31 \\ge 0$, that is $x \\ge -\\dfrac{31}{6}$.",
                  "reason": "Even root of a negative number is not real: $6x + 31$ must be at least $0$, and solving gives $x \\ge -\\dfrac{31}{6}$."
                },
                {
                  "step": "The domain is the numbers with $x \\ge -\\dfrac{17}{6}$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: both hold exactly when $x \\ge -\\dfrac{17}{6}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = \\dfrac{\\sqrt{-10 - 7x}}{-10x - 40}$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = \\dfrac{\\sqrt{-10 - 7x}}{-10x - 40}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The top needs $-10 - 7x \\ge 0$, that is $x \\le -\\dfrac{10}{7}$.",
                "reason": "Even root of a negative number is not real: $-10 - 7x$ must be at least $0$, and solving gives $x \\le -\\dfrac{10}{7}$."
              },
              {
                "step": "The bottom $-10x - 40$ is $0$ at $x = -4$.",
                "reason": "Dividing both sides by a nonzero number: $-10x - 40 = 0$ gives $-10x = 40$, and dividing by $-10$ gives $x = -4$."
              },
              {
                "step": "The domain is the numbers with $x < -4$ or $-4 < x \\le -\\dfrac{10}{7}$.",
                "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $x = -4$ is taken out of the numbers the top allows."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{\\sqrt{-14 - 8x}}{12x + 36}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -3 or -3 < x <= -7/4",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{\\sqrt{-14 - 8x}}{12x + 36}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top needs $-14 - 8x \\ge 0$, that is $x \\le -\\dfrac{7}{4}$.",
                  "reason": "Even root of a negative number is not real: $-14 - 8x$ must be at least $0$, and solving gives $x \\le -\\dfrac{7}{4}$."
                },
                {
                  "step": "The bottom $12x + 36$ is $0$ at $x = -3$.",
                  "reason": "Dividing both sides by a nonzero number: $12x + 36 = 0$ gives $12x = -36$, and dividing by $12$ gives $x = -3$."
                },
                {
                  "step": "The domain is the numbers with $x < -3$ or $-3 < x \\le -\\dfrac{7}{4}$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $x = -3$ is taken out of the numbers the top allows."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{\\sqrt{2x + 32}}{6x - 22}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-16 <= x < 11/3 or x > 11/3",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{\\sqrt{2x + 32}}{6x - 22}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top needs $2x + 32 \\ge 0$, that is $x \\ge -16$.",
                  "reason": "Even root of a negative number is not real: $2x + 32$ must be at least $0$, and solving gives $x \\ge -16$."
                },
                {
                  "step": "The bottom $6x - 22$ is $0$ at $x = \\dfrac{11}{3}$.",
                  "reason": "Dividing both sides by a nonzero number: $6x - 22 = 0$ gives $6x = 22$, and dividing by $6$ gives $x = \\dfrac{11}{3}$."
                },
                {
                  "step": "The domain is the numbers with $-16 \\le x < \\dfrac{11}{3}$ or $x > \\dfrac{11}{3}$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $x = \\dfrac{11}{3}$ is taken out of the numbers the top allows."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{\\sqrt{38 - 6x}}{-7x + 21}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < 3 or 3 < x <= 19/3",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{\\sqrt{38 - 6x}}{-7x + 21}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top needs $38 - 6x \\ge 0$, that is $x \\le \\dfrac{19}{3}$.",
                  "reason": "Even root of a negative number is not real: $38 - 6x$ must be at least $0$, and solving gives $x \\le \\dfrac{19}{3}$."
                },
                {
                  "step": "The bottom $-7x + 21$ is $0$ at $x = 3$.",
                  "reason": "Dividing both sides by a nonzero number: $-7x + 21 = 0$ gives $-7x = -21$, and dividing by $-7$ gives $x = 3$."
                },
                {
                  "step": "The domain is the numbers with $x < 3$ or $3 < x \\le \\dfrac{19}{3}$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $x = 3$ is taken out of the numbers the top allows."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = \\dfrac{3}{-3 + \\dfrac{20}{x - 1}}$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = \\dfrac{3}{-3 + \\dfrac{20}{x - 1}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The inner bottom $x - 1$ is $0$ at $x = 1$.",
                "reason": "Domain: division by $0$ gives no output, so $x = 1$ is left out."
              },
              {
                "step": "The outer bottom $-3 + \\dfrac{20}{x - 1}$ is $0$ when $\\dfrac{20}{x - 1} = 3$, that is at $x = \\dfrac{23}{3}$.",
                "reason": "Cross-multiplying: $20 = 3(x - 1)$ gives $x - 1 = \\dfrac{20}{3}$, so $x = \\dfrac{23}{3}$."
              },
              {
                "step": "The domain is the numbers with $x < 1$ or $1 < x < \\dfrac{23}{3}$ or $x > \\dfrac{23}{3}$.",
                "reason": "Domain: both numbers make a bottom $0$, and every other real $x$ gives an output."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = -\\dfrac{8}{4 + \\dfrac{8}{x - 10}}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < 8 or 8 < x < 10 or x > 10",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = -\\dfrac{8}{4 + \\dfrac{8}{x - 10}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner bottom $x - 10$ is $0$ at $x = 10$.",
                  "reason": "Domain: division by $0$ gives no output, so $x = 10$ is left out."
                },
                {
                  "step": "The outer bottom $4 + \\dfrac{8}{x - 10}$ is $0$ when $\\dfrac{8}{x - 10} = -4$, that is at $x = 8$.",
                  "reason": "Cross-multiplying: $8 = -4(x - 10)$ gives $x - 10 = -2$, so $x = 8$."
                },
                {
                  "step": "The domain is the numbers with $x < 8$ or $8 < x < 10$ or $x > 10$.",
                  "reason": "Domain: both numbers make a bottom $0$, and every other real $x$ gives an output."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = -\\dfrac{3}{-8 + \\dfrac{14}{x + 2}}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -2 or -2 < x < -1/4 or x > -1/4",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = -\\dfrac{3}{-8 + \\dfrac{14}{x + 2}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner bottom $x + 2$ is $0$ at $x = -2$.",
                  "reason": "Domain: division by $0$ gives no output, so $x = -2$ is left out."
                },
                {
                  "step": "The outer bottom $-8 + \\dfrac{14}{x + 2}$ is $0$ when $\\dfrac{14}{x + 2} = 8$, that is at $x = -\\dfrac{1}{4}$.",
                  "reason": "Cross-multiplying: $14 = 8(x + 2)$ gives $x + 2 = \\dfrac{7}{4}$, so $x = -\\dfrac{1}{4}$."
                },
                {
                  "step": "The domain is the numbers with $x < -2$ or $-2 < x < -\\dfrac{1}{4}$ or $x > -\\dfrac{1}{4}$.",
                  "reason": "Domain: both numbers make a bottom $0$, and every other real $x$ gives an output."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = -\\dfrac{13}{-4 + \\dfrac{18}{x - 3}}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < 3 or 3 < x < 15/2 or x > 15/2",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = -\\dfrac{13}{-4 + \\dfrac{18}{x - 3}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner bottom $x - 3$ is $0$ at $x = 3$.",
                  "reason": "Domain: division by $0$ gives no output, so $x = 3$ is left out."
                },
                {
                  "step": "The outer bottom $-4 + \\dfrac{18}{x - 3}$ is $0$ when $\\dfrac{18}{x - 3} = 4$, that is at $x = \\dfrac{15}{2}$.",
                  "reason": "Cross-multiplying: $18 = 4(x - 3)$ gives $x - 3 = \\dfrac{9}{2}$, so $x = \\dfrac{15}{2}$."
                },
                {
                  "step": "The domain is the numbers with $x < 3$ or $3 < x < \\dfrac{15}{2}$ or $x > \\dfrac{15}{2}$.",
                  "reason": "Domain: both numbers make a bottom $0$, and every other real $x$ gives an output."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of $f(x) = \\dfrac{\\sqrt{32 - 6x}}{\\sqrt{6x^2 - 35x + 39}}$.",
            "lines": [
              {
                "step": "Find the domain of $f(x) = \\dfrac{\\sqrt{32 - 6x}}{\\sqrt{6x^2 - 35x + 39}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The top needs $32 - 6x \\ge 0$, that is $x \\le \\dfrac{16}{3}$.",
                "reason": "Even root of a negative number is not real: $32 - 6x$ must be at least $0$, and solving gives $x \\le \\dfrac{16}{3}$."
              },
              {
                "step": "The bottom needs $6x^2 - 35x + 39 > 0$.",
                "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: the bottom root must be real and not $0$, and a square root is $0$ only at $0$, so $6x^2 - 35x + 39$ must be above $0$."
              },
              {
                "step": "$(3x - 13)(2x - 3) > 0$",
                "reason": "Factoring a quadratic: $(3x - 13)(2x - 3)$ multiplies out to $6x^2 - 35x + 39$."
              },
              {
                "step": "The factor $3x - 13$ is $0$ at $x = \\dfrac{13}{3}$, and $2x - 3$ is $0$ at $x = \\dfrac{3}{2}$.",
                "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
              },
              {
                "step": "The product is positive for $x < \\dfrac{3}{2}$ and for $x > \\dfrac{13}{3}$, and negative between them.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the two factors have the same sign outside the roots and differ between them."
              },
              {
                "step": "The domain is the numbers with $x < \\dfrac{3}{2}$ or $\\dfrac{13}{3} < x \\le \\dfrac{16}{3}$.",
                "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $x \\le \\dfrac{16}{3}$ meets $x > \\dfrac{13}{3}$ in $\\dfrac{13}{3} < x \\le \\dfrac{16}{3}$, and meets $x < \\dfrac{3}{2}$ in all of it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{\\sqrt{4 - 6x}}{\\sqrt{15x^2 + 64x + 36}}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -18/5 or -2/3 < x <= 2/3",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{\\sqrt{4 - 6x}}{\\sqrt{15x^2 + 64x + 36}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top needs $4 - 6x \\ge 0$, that is $x \\le \\dfrac{2}{3}$.",
                  "reason": "Even root of a negative number is not real: $4 - 6x$ must be at least $0$, and solving gives $x \\le \\dfrac{2}{3}$."
                },
                {
                  "step": "The bottom needs $15x^2 + 64x + 36 > 0$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: the bottom root must be real and not $0$, and a square root is $0$ only at $0$, so $15x^2 + 64x + 36$ must be above $0$."
                },
                {
                  "step": "$(3x + 2)(5x + 18) > 0$",
                  "reason": "Factoring a quadratic: $(3x + 2)(5x + 18)$ multiplies out to $15x^2 + 64x + 36$."
                },
                {
                  "step": "The factor $3x + 2$ is $0$ at $x = -\\dfrac{2}{3}$, and $5x + 18$ is $0$ at $x = -\\dfrac{18}{5}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "The product is positive for $x < -\\dfrac{18}{5}$ and for $x > -\\dfrac{2}{3}$, and negative between them.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the two factors have the same sign outside the roots and differ between them."
                },
                {
                  "step": "The domain is the numbers with $x < -\\dfrac{18}{5}$ or $-\\dfrac{2}{3} < x \\le \\dfrac{2}{3}$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $x \\le \\dfrac{2}{3}$ meets $x > -\\dfrac{2}{3}$ in $-\\dfrac{2}{3} < x \\le \\dfrac{2}{3}$, and meets $x < -\\dfrac{18}{5}$ in all of it."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{\\sqrt{11x + 35}}{\\sqrt{10x^2 - 77x - 294}}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-35/11 <= x < -14/5 or x > 21/2",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{\\sqrt{11x + 35}}{\\sqrt{10x^2 - 77x - 294}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top needs $11x + 35 \\ge 0$, that is $x \\ge -\\dfrac{35}{11}$.",
                  "reason": "Even root of a negative number is not real: $11x + 35$ must be at least $0$, and solving gives $x \\ge -\\dfrac{35}{11}$."
                },
                {
                  "step": "The bottom needs $10x^2 - 77x - 294 > 0$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: the bottom root must be real and not $0$, and a square root is $0$ only at $0$, so $10x^2 - 77x - 294$ must be above $0$."
                },
                {
                  "step": "$(2x - 21)(5x + 14) > 0$",
                  "reason": "Factoring a quadratic: $(2x - 21)(5x + 14)$ multiplies out to $10x^2 - 77x - 294$."
                },
                {
                  "step": "The factor $2x - 21$ is $0$ at $x = \\dfrac{21}{2}$, and $5x + 14$ is $0$ at $x = -\\dfrac{14}{5}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "The product is positive for $x < -\\dfrac{14}{5}$ and for $x > \\dfrac{21}{2}$, and negative between them.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the two factors have the same sign outside the roots and differ between them."
                },
                {
                  "step": "The domain is the numbers with $-\\dfrac{35}{11} \\le x < -\\dfrac{14}{5}$ or $x > \\dfrac{21}{2}$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $x \\ge -\\dfrac{35}{11}$ meets $x < -\\dfrac{14}{5}$ in $-\\dfrac{35}{11} \\le x < -\\dfrac{14}{5}$, and meets $x > \\dfrac{21}{2}$ in all of it."
                }
              ]
            },
            {
              "prompt": "Find the domain of $f(x) = \\dfrac{\\sqrt{38 - 4x}}{\\sqrt{18x^2 + 87x - 391}}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -23/3 or 17/6 < x <= 19/2",
              "lines": [
                {
                  "step": "Find the domain of $f(x) = \\dfrac{\\sqrt{38 - 4x}}{\\sqrt{18x^2 + 87x - 391}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top needs $38 - 4x \\ge 0$, that is $x \\le \\dfrac{19}{2}$.",
                  "reason": "Even root of a negative number is not real: $38 - 4x$ must be at least $0$, and solving gives $x \\le \\dfrac{19}{2}$."
                },
                {
                  "step": "The bottom needs $18x^2 + 87x - 391 > 0$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: the bottom root must be real and not $0$, and a square root is $0$ only at $0$, so $18x^2 + 87x - 391$ must be above $0$."
                },
                {
                  "step": "$(6x - 17)(3x + 23) > 0$",
                  "reason": "Factoring a quadratic: $(6x - 17)(3x + 23)$ multiplies out to $18x^2 + 87x - 391$."
                },
                {
                  "step": "The factor $6x - 17$ is $0$ at $x = \\dfrac{17}{6}$, and $3x + 23$ is $0$ at $x = -\\dfrac{23}{3}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "The product is positive for $x < -\\dfrac{23}{3}$ and for $x > \\dfrac{17}{6}$, and negative between them.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the two factors have the same sign outside the roots and differ between them."
                },
                {
                  "step": "The domain is the numbers with $x < -\\dfrac{23}{3}$ or $\\dfrac{17}{6} < x \\le \\dfrac{19}{2}$.",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $x \\le \\dfrac{19}{2}$ meets $x > \\dfrac{17}{6}$ in $\\dfrac{17}{6} < x \\le \\dfrac{19}{2}$, and meets $x < -\\dfrac{23}{3}$ in all of it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t158-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the range of $f(x) = \\dfrac{10x^2 - 29}{4}$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = \\dfrac{10x^2 - 29}{4}$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 \\ge 0$",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "$10x^2 \\ge 0$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $10$."
              },
              {
                "step": "$10x^2 - 29 \\ge -29$",
                "reason": "Adding the same number: $-29$ is added to both sides."
              },
              {
                "step": "$f(x) \\ge -\\dfrac{29}{4}$",
                "reason": "Multiplying by a positive number: both sides are divided by $4$."
              },
              {
                "step": "Each $y \\ge -\\dfrac{29}{4}$ is an output: $x = \\sqrt{\\dfrac{4y + 29}{10}}$ gives $f(x) = y$.",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = \\dfrac{10x^2 - 29}{4}$ gives $x^2 = \\dfrac{4y + 29}{10}$, and the number under the root is at least $0$ when $y \\ge -\\dfrac{29}{4}$."
              },
              {
                "step": "The range is the numbers with $y \\ge -\\dfrac{29}{4}$.",
                "reason": "Range: the range is the set of outputs, so it is every $y$ with $y \\ge -\\dfrac{29}{4}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = \\dfrac{10x^2 - 38}{8}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= -19/4",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{10x^2 - 38}{8}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$10x^2 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $10$."
                },
                {
                  "step": "$10x^2 - 38 \\ge -38$",
                  "reason": "Adding the same number: $-38$ is added to both sides."
                },
                {
                  "step": "$f(x) \\ge -\\dfrac{19}{4}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $8$."
                },
                {
                  "step": "Each $y \\ge -\\dfrac{19}{4}$ is an output: $x = \\sqrt{\\dfrac{8y + 38}{10}}$ gives $f(x) = y$.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = \\dfrac{10x^2 - 38}{8}$ gives $x^2 = \\dfrac{8y + 38}{10}$, and the number under the root is at least $0$ when $y \\ge -\\dfrac{19}{4}$."
                },
                {
                  "step": "The range is the numbers with $y \\ge -\\dfrac{19}{4}$.",
                  "reason": "Range: the range is the set of outputs, so it is every $y$ with $y \\ge -\\dfrac{19}{4}$."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{12x^2 + 17}{8}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= 17/8",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{12x^2 + 17}{8}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$12x^2 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $12$."
                },
                {
                  "step": "$12x^2 + 17 \\ge 17$",
                  "reason": "Adding the same number: $17$ is added to both sides."
                },
                {
                  "step": "$f(x) \\ge \\dfrac{17}{8}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $8$."
                },
                {
                  "step": "Each $y \\ge \\dfrac{17}{8}$ is an output: $x = \\sqrt{\\dfrac{8y - 17}{12}}$ gives $f(x) = y$.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = \\dfrac{12x^2 + 17}{8}$ gives $x^2 = \\dfrac{8y - 17}{12}$, and the number under the root is at least $0$ when $y \\ge \\dfrac{17}{8}$."
                },
                {
                  "step": "The range is the numbers with $y \\ge \\dfrac{17}{8}$.",
                  "reason": "Range: the range is the set of outputs, so it is every $y$ with $y \\ge \\dfrac{17}{8}$."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{12x^2 + 7}{9}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= 7/9",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{12x^2 + 7}{9}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$12x^2 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $12$."
                },
                {
                  "step": "$12x^2 + 7 \\ge 7$",
                  "reason": "Adding the same number: $7$ is added to both sides."
                },
                {
                  "step": "$f(x) \\ge \\dfrac{7}{9}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $9$."
                },
                {
                  "step": "Each $y \\ge \\dfrac{7}{9}$ is an output: $x = \\sqrt{\\dfrac{9y - 7}{12}}$ gives $f(x) = y$.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = \\dfrac{12x^2 + 7}{9}$ gives $x^2 = \\dfrac{9y - 7}{12}$, and the number under the root is at least $0$ when $y \\ge \\dfrac{7}{9}$."
                },
                {
                  "step": "The range is the numbers with $y \\ge \\dfrac{7}{9}$.",
                  "reason": "Range: the range is the set of outputs, so it is every $y$ with $y \\ge \\dfrac{7}{9}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = \\dfrac{-3x + 1}{-3x - 24}$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = \\dfrac{-3x + 1}{-3x - 24}$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = \\dfrac{-3x + 1}{-3x - 24}$",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: the output is named $y$."
              },
              {
                "step": "$y(-3x - 24) = -3x + 1$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $-3x - 24$, which is not $0$ in the domain."
              },
              {
                "step": "$x(-3y + 3) = 1 + 24y$",
                "reason": "Collecting the terms with the letter and factoring it out: the terms in $x$ go to the left and the others to the right."
              },
              {
                "step": "$x = \\dfrac{1 + 24y}{-3y + 3}$",
                "reason": "Dividing both sides by a nonzero number: $-3y + 3$ is not $0$ when $y \\ne 1$."
              },
              {
                "step": "At $y = 1$ the left side of the fourth line is $0$ and the right side is $25$, so $1$ is not an output.",
                "reason": "Equation with no solution: an equation that reads as a false statement about numbers has no solution."
              },
              {
                "step": "The range is the numbers with $y < 1$ or $y > 1$.",
                "reason": "Range: every $y$ other than $1$ comes from the $x$ of the fifth line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = \\dfrac{11x + 8}{-7x - 8}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y < -11/7 or y > -11/7",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{11x + 8}{-7x - 8}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{11x + 8}{-7x - 8}$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: the output is named $y$."
                },
                {
                  "step": "$y(-7x - 8) = 11x + 8$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-7x - 8$, which is not $0$ in the domain."
                },
                {
                  "step": "$x(-7y - 11) = 8 + 8y$",
                  "reason": "Collecting the terms with the letter and factoring it out: the terms in $x$ go to the left and the others to the right."
                },
                {
                  "step": "$x = \\dfrac{8 + 8y}{-7y - 11}$",
                  "reason": "Dividing both sides by a nonzero number: $-7y - 11$ is not $0$ when $y \\ne -\\dfrac{11}{7}$."
                },
                {
                  "step": "At $y = -\\dfrac{11}{7}$ the left side of the fourth line is $0$ and the right side is $-\\dfrac{32}{7}$, so $-\\dfrac{11}{7}$ is not an output.",
                  "reason": "Equation with no solution: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "The range is the numbers with $y < -\\dfrac{11}{7}$ or $y > -\\dfrac{11}{7}$.",
                  "reason": "Range: every $y$ other than $-\\dfrac{11}{7}$ comes from the $x$ of the fifth line."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{-14x + 20}{4x + 24}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y < -7/2 or y > -7/2",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{-14x + 20}{4x + 24}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{-14x + 20}{4x + 24}$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: the output is named $y$."
                },
                {
                  "step": "$y(4x + 24) = -14x + 20$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $4x + 24$, which is not $0$ in the domain."
                },
                {
                  "step": "$x(4y + 14) = 20 - 24y$",
                  "reason": "Collecting the terms with the letter and factoring it out: the terms in $x$ go to the left and the others to the right."
                },
                {
                  "step": "$x = \\dfrac{20 - 24y}{4y + 14}$",
                  "reason": "Dividing both sides by a nonzero number: $4y + 14$ is not $0$ when $y \\ne -\\dfrac{7}{2}$."
                },
                {
                  "step": "At $y = -\\dfrac{7}{2}$ the left side of the fourth line is $0$ and the right side is $104$, so $-\\dfrac{7}{2}$ is not an output.",
                  "reason": "Equation with no solution: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "The range is the numbers with $y < -\\dfrac{7}{2}$ or $y > -\\dfrac{7}{2}$.",
                  "reason": "Range: every $y$ other than $-\\dfrac{7}{2}$ comes from the $x$ of the fifth line."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\dfrac{-12x - 26}{8x + 9}$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y < -3/2 or y > -3/2",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\dfrac{-12x - 26}{8x + 9}$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{-12x - 26}{8x + 9}$",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: the output is named $y$."
                },
                {
                  "step": "$y(8x + 9) = -12x - 26$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $8x + 9$, which is not $0$ in the domain."
                },
                {
                  "step": "$x(8y + 12) = -26 - 9y$",
                  "reason": "Collecting the terms with the letter and factoring it out: the terms in $x$ go to the left and the others to the right."
                },
                {
                  "step": "$x = \\dfrac{-26 - 9y}{8y + 12}$",
                  "reason": "Dividing both sides by a nonzero number: $8y + 12$ is not $0$ when $y \\ne -\\dfrac{3}{2}$."
                },
                {
                  "step": "At $y = -\\dfrac{3}{2}$ the left side of the fourth line is $0$ and the right side is $-\\dfrac{25}{2}$, so $-\\dfrac{3}{2}$ is not an output.",
                  "reason": "Equation with no solution: an equation that reads as a false statement about numbers has no solution."
                },
                {
                  "step": "The range is the numbers with $y < -\\dfrac{3}{2}$ or $y > -\\dfrac{3}{2}$.",
                  "reason": "Range: every $y$ other than $-\\dfrac{3}{2}$ comes from the $x$ of the fifth line."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = 5x - 38$ with the restricted domain $-12 \\le x \\le -4$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = 5x - 38$ with the restricted domain $-12 \\le x \\le -4$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-60 \\le 5x \\le -20$",
                "reason": "Multiplying by a positive number: each part of the chain is multiplied by $5$."
              },
              {
                "step": "$-98 \\le 5x - 38 \\le -58$",
                "reason": "Adding the same number: $-38$ is added to each part."
              },
              {
                "step": "Each $y$ with $-98 \\le y \\le -58$ is an output: $x = \\dfrac{y + 38}{5}$ lies in the restricted domain.",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = 5x - 38$ gives $x = \\dfrac{y + 38}{5}$, and the chain above read backwards puts it in $-12 \\le x \\le -4$."
              },
              {
                "step": "The range is the numbers with $-98 \\le y \\le -58$.",
                "reason": "Restricted domain: only inputs with $-12 \\le x \\le -4$ are allowed, so the outputs are exactly these."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = 12x - 40$ with the restricted domain $14 < x \\le 27$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "128 < y <= 284",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 12x - 40$ with the restricted domain $14 < x \\le 27$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$168 < 12x \\le 324$",
                  "reason": "Multiplying by a positive number: each part of the chain is multiplied by $12$."
                },
                {
                  "step": "$128 < 12x - 40 \\le 284$",
                  "reason": "Adding the same number: $-40$ is added to each part."
                },
                {
                  "step": "Each $y$ with $128 < y \\le 284$ is an output: $x = \\dfrac{y + 40}{12}$ lies in the restricted domain.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = 12x - 40$ gives $x = \\dfrac{y + 40}{12}$, and the chain above read backwards puts it in $14 < x \\le 27$."
                },
                {
                  "step": "The range is the numbers with $128 < y \\le 284$.",
                  "reason": "Restricted domain: only inputs with $14 < x \\le 27$ are allowed, so the outputs are exactly these."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 12x + 18$ with the restricted domain $15 \\le x \\le 19$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "198 <= y <= 246",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 12x + 18$ with the restricted domain $15 \\le x \\le 19$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$180 \\le 12x \\le 228$",
                  "reason": "Multiplying by a positive number: each part of the chain is multiplied by $12$."
                },
                {
                  "step": "$198 \\le 12x + 18 \\le 246$",
                  "reason": "Adding the same number: $18$ is added to each part."
                },
                {
                  "step": "Each $y$ with $198 \\le y \\le 246$ is an output: $x = \\dfrac{y - 18}{12}$ lies in the restricted domain.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = 12x + 18$ gives $x = \\dfrac{y - 18}{12}$, and the chain above read backwards puts it in $15 \\le x \\le 19$."
                },
                {
                  "step": "The range is the numbers with $198 \\le y \\le 246$.",
                  "reason": "Restricted domain: only inputs with $15 \\le x \\le 19$ are allowed, so the outputs are exactly these."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 11x - 24$ with the restricted domain $-15 \\le x \\le -4$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-189 <= y <= -68",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 11x - 24$ with the restricted domain $-15 \\le x \\le -4$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-165 \\le 11x \\le -44$",
                  "reason": "Multiplying by a positive number: each part of the chain is multiplied by $11$."
                },
                {
                  "step": "$-189 \\le 11x - 24 \\le -68$",
                  "reason": "Adding the same number: $-24$ is added to each part."
                },
                {
                  "step": "Each $y$ with $-189 \\le y \\le -68$ is an output: $x = \\dfrac{y + 24}{11}$ lies in the restricted domain.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = 11x - 24$ gives $x = \\dfrac{y + 24}{11}$, and the chain above read backwards puts it in $-15 \\le x \\le -4$."
                },
                {
                  "step": "The range is the numbers with $-189 \\le y \\le -68$.",
                  "reason": "Restricted domain: only inputs with $-15 \\le x \\le -4$ are allowed, so the outputs are exactly these."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = 5\\sqrt{5x + 6} - 14$ with the restricted domain $2 \\le x \\le 6$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = 5\\sqrt{5x + 6} - 14$ with the restricted domain $2 \\le x \\le 6$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$10 \\le 5x \\le 30$",
                "reason": "Multiplying by a positive number: each part of the chain is multiplied by $5$."
              },
              {
                "step": "$16 \\le 5x + 6 \\le 36$",
                "reason": "Adding the same number: $6$ is added to each part."
              },
              {
                "step": "$4 \\le \\sqrt{5x + 6} \\le 6$",
                "reason": "Powers and roots of positive numbers keep the order: for numbers at least $0$, the larger number has the larger positive square root."
              },
              {
                "step": "$20 \\le 5\\sqrt{5x + 6} \\le 30$",
                "reason": "Multiplying by a positive number: each part is multiplied by $5$."
              },
              {
                "step": "$6 \\le f(x) \\le 16$",
                "reason": "Adding the same number: $-14$ is added to each part."
              },
              {
                "step": "Each $y$ with $6 \\le y \\le 16$ is an output.",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: $\\sqrt{5x + 6} = \\dfrac{y + 14}{5}$ is squared and solved for $x$, and the chain above read backwards puts that $x$ in $2 \\le x \\le 6$."
              },
              {
                "step": "The range is the numbers with $6 \\le y \\le 16$.",
                "reason": "Restricted domain: only inputs with $2 \\le x \\le 6$ are allowed, so the outputs are exactly these."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = 6\\sqrt{8x + 33} + 18$ with the restricted domain $-3 \\le x \\le 6$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "36 <= y <= 72",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 6\\sqrt{8x + 33} + 18$ with the restricted domain $-3 \\le x \\le 6$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-24 \\le 8x \\le 48$",
                  "reason": "Multiplying by a positive number: each part of the chain is multiplied by $8$."
                },
                {
                  "step": "$9 \\le 8x + 33 \\le 81$",
                  "reason": "Adding the same number: $33$ is added to each part."
                },
                {
                  "step": "$3 \\le \\sqrt{8x + 33} \\le 9$",
                  "reason": "Powers and roots of positive numbers keep the order: for numbers at least $0$, the larger number has the larger positive square root."
                },
                {
                  "step": "$18 \\le 6\\sqrt{8x + 33} \\le 54$",
                  "reason": "Multiplying by a positive number: each part is multiplied by $6$."
                },
                {
                  "step": "$36 \\le f(x) \\le 72$",
                  "reason": "Adding the same number: $18$ is added to each part."
                },
                {
                  "step": "Each $y$ with $36 \\le y \\le 72$ is an output.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $\\sqrt{8x + 33} = \\dfrac{y - 18}{6}$ is squared and solved for $x$, and the chain above read backwards puts that $x$ in $-3 \\le x \\le 6$."
                },
                {
                  "step": "The range is the numbers with $36 \\le y \\le 72$.",
                  "reason": "Restricted domain: only inputs with $-3 \\le x \\le 6$ are allowed, so the outputs are exactly these."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 4\\sqrt{2x + 24} + 18$ with the restricted domain $6 \\le x \\le 38$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "42 <= y <= 58",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 4\\sqrt{2x + 24} + 18$ with the restricted domain $6 \\le x \\le 38$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12 \\le 2x \\le 76$",
                  "reason": "Multiplying by a positive number: each part of the chain is multiplied by $2$."
                },
                {
                  "step": "$36 \\le 2x + 24 \\le 100$",
                  "reason": "Adding the same number: $24$ is added to each part."
                },
                {
                  "step": "$6 \\le \\sqrt{2x + 24} \\le 10$",
                  "reason": "Powers and roots of positive numbers keep the order: for numbers at least $0$, the larger number has the larger positive square root."
                },
                {
                  "step": "$24 \\le 4\\sqrt{2x + 24} \\le 40$",
                  "reason": "Multiplying by a positive number: each part is multiplied by $4$."
                },
                {
                  "step": "$42 \\le f(x) \\le 58$",
                  "reason": "Adding the same number: $18$ is added to each part."
                },
                {
                  "step": "Each $y$ with $42 \\le y \\le 58$ is an output.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $\\sqrt{2x + 24} = \\dfrac{y - 18}{4}$ is squared and solved for $x$, and the chain above read backwards puts that $x$ in $6 \\le x \\le 38$."
                },
                {
                  "step": "The range is the numbers with $42 \\le y \\le 58$.",
                  "reason": "Restricted domain: only inputs with $6 \\le x \\le 38$ are allowed, so the outputs are exactly these."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 8\\sqrt{3x + 16} + 14$ with the restricted domain $0 \\le x \\le 3$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "46 <= y <= 54",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 8\\sqrt{3x + 16} + 14$ with the restricted domain $0 \\le x \\le 3$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$0 \\le 3x \\le 9$",
                  "reason": "Multiplying by a positive number: each part of the chain is multiplied by $3$."
                },
                {
                  "step": "$16 \\le 3x + 16 \\le 25$",
                  "reason": "Adding the same number: $16$ is added to each part."
                },
                {
                  "step": "$4 \\le \\sqrt{3x + 16} \\le 5$",
                  "reason": "Powers and roots of positive numbers keep the order: for numbers at least $0$, the larger number has the larger positive square root."
                },
                {
                  "step": "$32 \\le 8\\sqrt{3x + 16} \\le 40$",
                  "reason": "Multiplying by a positive number: each part is multiplied by $8$."
                },
                {
                  "step": "$46 \\le f(x) \\le 54$",
                  "reason": "Adding the same number: $14$ is added to each part."
                },
                {
                  "step": "Each $y$ with $46 \\le y \\le 54$ is an output.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $\\sqrt{3x + 16} = \\dfrac{y - 14}{8}$ is squared and solved for $x$, and the chain above read backwards puts that $x$ in $0 \\le x \\le 3$."
                },
                {
                  "step": "The range is the numbers with $46 \\le y \\le 54$.",
                  "reason": "Restricted domain: only inputs with $0 \\le x \\le 3$ are allowed, so the outputs are exactly these."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = 4x^2 + 20x - 2$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = 4x^2 + 20x - 2$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = 4\\left(x + \\dfrac{5}{2}\\right)^2 - 27$",
                "reason": "Completing the square in letters: with $a = 4$, $b = 20$ and $c = -2$, the square is about $x = -\\dfrac{5}{2}$ and the number left over is $-27$."
              },
              {
                "step": "$\\left(x + \\dfrac{5}{2}\\right)^2 \\ge 0$",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "$4\\left(x + \\dfrac{5}{2}\\right)^2 \\ge 0$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $4$."
              },
              {
                "step": "$f(x) \\ge -27$",
                "reason": "Adding the same number: $-27$ is added to both sides."
              },
              {
                "step": "Each $y \\ge -27$ is an output: $x = -\\dfrac{5}{2} + \\sqrt{\\dfrac{y + 27}{4}}$ gives $f(x) = y$.",
                "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = 4\\left(x + \\dfrac{5}{2}\\right)^2 - 27$ gives $\\left(x + \\dfrac{5}{2}\\right)^2 = \\dfrac{y + 27}{4}$, and the number under the root is at least $0$ when $y \\ge -27$."
              },
              {
                "step": "The range is the numbers with $y \\ge -27$.",
                "reason": "Range: the range is the set of outputs, so it is every $y$ with $y \\ge -27$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = 8x^2 + 16x - 3$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= -11",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 8x^2 + 16x - 3$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 8(x + 1)^2 - 11$",
                  "reason": "Completing the square in letters: with $a = 8$, $b = 16$ and $c = -3$, the square is about $x = -1$ and the number left over is $-11$."
                },
                {
                  "step": "$(x + 1)^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$8(x + 1)^2 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $8$."
                },
                {
                  "step": "$f(x) \\ge -11$",
                  "reason": "Adding the same number: $-11$ is added to both sides."
                },
                {
                  "step": "Each $y \\ge -11$ is an output: $x = -1 + \\sqrt{\\dfrac{y + 11}{8}}$ gives $f(x) = y$.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = 8(x + 1)^2 - 11$ gives $(x + 1)^2 = \\dfrac{y + 11}{8}$, and the number under the root is at least $0$ when $y \\ge -11$."
                },
                {
                  "step": "The range is the numbers with $y \\ge -11$.",
                  "reason": "Range: the range is the set of outputs, so it is every $y$ with $y \\ge -11$."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 4x^2 + 27x + 22$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= -377/16",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 4x^2 + 27x + 22$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 4\\left(x + \\dfrac{27}{8}\\right)^2 - \\dfrac{377}{16}$",
                  "reason": "Completing the square in letters: with $a = 4$, $b = 27$ and $c = 22$, the square is about $x = -\\dfrac{27}{8}$ and the number left over is $-\\dfrac{377}{16}$."
                },
                {
                  "step": "$\\left(x + \\dfrac{27}{8}\\right)^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$4\\left(x + \\dfrac{27}{8}\\right)^2 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $4$."
                },
                {
                  "step": "$f(x) \\ge -\\dfrac{377}{16}$",
                  "reason": "Adding the same number: $-\\dfrac{377}{16}$ is added to both sides."
                },
                {
                  "step": "Each $y \\ge -\\dfrac{377}{16}$ is an output: $x = -\\dfrac{27}{8} + \\sqrt{\\dfrac{y + \\dfrac{377}{16}}{4}}$ gives $f(x) = y$.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = 4\\left(x + \\dfrac{27}{8}\\right)^2 - \\dfrac{377}{16}$ gives $\\left(x + \\dfrac{27}{8}\\right)^2 = \\dfrac{y + \\dfrac{377}{16}}{4}$, and the number under the root is at least $0$ when $y \\ge -\\dfrac{377}{16}$."
                },
                {
                  "step": "The range is the numbers with $y \\ge -\\dfrac{377}{16}$.",
                  "reason": "Range: the range is the set of outputs, so it is every $y$ with $y \\ge -\\dfrac{377}{16}$."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 8x^2 - 23x + 39$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= 719/32",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 8x^2 - 23x + 39$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 8\\left(x - \\dfrac{23}{16}\\right)^2 + \\dfrac{719}{32}$",
                  "reason": "Completing the square in letters: with $a = 8$, $b = -23$ and $c = 39$, the square is about $x = \\dfrac{23}{16}$ and the number left over is $\\dfrac{719}{32}$."
                },
                {
                  "step": "$\\left(x - \\dfrac{23}{16}\\right)^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$8\\left(x - \\dfrac{23}{16}\\right)^2 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $8$."
                },
                {
                  "step": "$f(x) \\ge \\dfrac{719}{32}$",
                  "reason": "Adding the same number: $\\dfrac{719}{32}$ is added to both sides."
                },
                {
                  "step": "Each $y \\ge \\dfrac{719}{32}$ is an output: $x = \\dfrac{23}{16} + \\sqrt{\\dfrac{y - \\dfrac{719}{32}}{8}}$ gives $f(x) = y$.",
                  "reason": "Finding the range by solving $y = f(x)$ for $x$: $y = 8\\left(x - \\dfrac{23}{16}\\right)^2 + \\dfrac{719}{32}$ gives $\\left(x - \\dfrac{23}{16}\\right)^2 = \\dfrac{y - \\dfrac{719}{32}}{8}$, and the number under the root is at least $0$ when $y \\ge \\dfrac{719}{32}$."
                },
                {
                  "step": "The range is the numbers with $y \\ge \\dfrac{719}{32}$.",
                  "reason": "Range: the range is the set of outputs, so it is every $y$ with $y \\ge \\dfrac{719}{32}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t158-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the domain of $f(x) = \\sqrt{106 - 23x}$, and write that line right.",
            "given": [
              "The root needs $106 - 23x \\ge 0$.",
              "$-23x \\ge 106$",
              "$x \\le -\\dfrac{106}{23}$",
              "The domain is $x \\le -\\dfrac{106}{23}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the domain of $f(x) = \\sqrt{106 - 23x}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Even root of a negative number is not real: the number under the root must be at least $0$, and each earlier step keeps both sides in order."
              },
              {
                "step": "Line 2 takes $106$ from both sides of line 1, but writes $106$ on the right in place of $-106$.",
                "reason": "Adding the same number: taking $106$ from $0$ leaves $-106$, so the sign of $106$ is lost."
              },
              {
                "step": "Line 2 written right is $-23x \\ge -106$.",
                "reason": "Each line follows from the line before it with one step."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the domain of $f(x) = \\dfrac{\\sqrt{118 - 20x}}{x + 24}$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -20*x >= -118",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the domain of $f(x) = \\dfrac{\\sqrt{118 - 20x}}{x + 24}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$, and each earlier step keeps both sides in order."
                },
                {
                  "step": "Line 4 takes $118$ from both sides of line 3, but writes $118$ on the right in place of $-118$.",
                  "reason": "Adding the same number: taking $118$ from $0$ leaves $-118$, so the sign of $118$ is lost."
                },
                {
                  "step": "Line 4 written right is $-20x \\ge -118$.",
                  "reason": "Each line follows from the line before it with one step."
                }
              ],
              "given": [
                "The bottom $x + 24$ is $0$ at $x = -24$.",
                "The root needs $118 - 20x \\ge 0$.",
                "$-20x + 118 \\ge 0$",
                "$-20x \\ge 118$",
                "$x \\le -\\dfrac{59}{10}$",
                "The domain is $x < -24$ or $-24 < x \\le -\\dfrac{59}{10}$."
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the domain of $f(x) = \\sqrt{117 - 21x}$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -21*x >= -117",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the domain of $f(x) = \\sqrt{117 - 21x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$, and each earlier step keeps both sides in order."
                },
                {
                  "step": "Line 3 takes $117$ from both sides of line 2, but writes $117$ on the right in place of $-117$.",
                  "reason": "Adding the same number: taking $117$ from $0$ leaves $-117$, so the sign of $117$ is lost."
                },
                {
                  "step": "Line 3 written right is $-21x \\ge -117$.",
                  "reason": "Each line follows from the line before it with one step."
                }
              ],
              "given": [
                "The root needs $117 - 21x \\ge 0$.",
                "$-21x + 117 \\ge 0$",
                "$-21x \\ge 117$",
                "$x \\le -\\dfrac{39}{7}$",
                "The domain is $x \\le -\\dfrac{39}{7}$."
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the domain of $f(x) = \\dfrac{\\sqrt{35 - 8x}}{x + 9}$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -8*x >= -35",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the domain of $f(x) = \\dfrac{\\sqrt{35 - 8x}}{x + 9}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$, and each earlier step keeps both sides in order."
                },
                {
                  "step": "Line 3 takes $35$ from both sides of line 2, but writes $35$ on the right in place of $-35$.",
                  "reason": "Adding the same number: taking $35$ from $0$ leaves $-35$, so the sign of $35$ is lost."
                },
                {
                  "step": "Line 3 written right is $-8x \\ge -35$.",
                  "reason": "Each line follows from the line before it with one step."
                }
              ],
              "given": [
                "The bottom $x + 9$ is $0$ at $x = -9$.",
                "The root needs $35 - 8x \\ge 0$.",
                "$-8x \\ge 35$",
                "$x \\le -\\dfrac{35}{8}$",
                "The domain is $x < -9$ or $-9 < x \\le -\\dfrac{35}{8}$."
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the domain of $f(x) = \\sqrt{27 - 24x}$, and write that line right.",
            "given": [
              "The root needs $27 - 24x \\ge 0$.",
              "$-24x \\ge -27$",
              "$x \\ge \\dfrac{9}{8}$",
              "The domain is $x \\ge \\dfrac{9}{8}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the domain of $f(x) = \\sqrt{27 - 24x}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Even root of a negative number is not real: the number under the root must be at least $0$, and each earlier step keeps both sides in order."
              },
              {
                "step": "Line 3 divides both sides of line 2 by $-24$ and keeps $\\ge$.",
                "reason": "Multiplying by a negative number reverses the sign: dividing by $-24$ turns $\\ge$ into $\\le$, so the sign is lost."
              },
              {
                "step": "Line 3 written right is $x \\le \\dfrac{9}{8}$.",
                "reason": "Each line follows from the line before it with one step."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the domain of $f(x) = \\dfrac{\\sqrt{100 - 23x}}{x + 21}$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x <= 100/23",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the domain of $f(x) = \\dfrac{\\sqrt{100 - 23x}}{x + 21}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$, and each earlier step keeps both sides in order."
                },
                {
                  "step": "Line 5 divides both sides of line 4 by $-23$ and keeps $\\ge$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing by $-23$ turns $\\ge$ into $\\le$, so the sign is lost."
                },
                {
                  "step": "Line 5 written right is $x \\le \\dfrac{100}{23}$.",
                  "reason": "Each line follows from the line before it with one step."
                }
              ],
              "given": [
                "The bottom $x + 21$ is $0$ at $x = -21$.",
                "The root needs $100 - 23x \\ge 0$.",
                "$-23x + 100 \\ge 0$",
                "$-23x \\ge -100$",
                "$x \\ge \\dfrac{100}{23}$",
                "The domain is $x \\ge \\dfrac{100}{23}$."
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the domain of $f(x) = \\sqrt{79 - 20x}$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x <= 79/20",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the domain of $f(x) = \\sqrt{79 - 20x}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$, and each earlier step keeps both sides in order."
                },
                {
                  "step": "Line 4 divides both sides of line 3 by $-20$ and keeps $\\ge$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing by $-20$ turns $\\ge$ into $\\le$, so the sign is lost."
                },
                {
                  "step": "Line 4 written right is $x \\le \\dfrac{79}{20}$.",
                  "reason": "Each line follows from the line before it with one step."
                }
              ],
              "given": [
                "The root needs $79 - 20x \\ge 0$.",
                "$-20x + 79 \\ge 0$",
                "$-20x \\ge -79$",
                "$x \\ge \\dfrac{79}{20}$",
                "The domain is $x \\ge \\dfrac{79}{20}$."
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the domain of $f(x) = \\dfrac{\\sqrt{72 - 11x}}{x + 22}$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x <= 72/11",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the domain of $f(x) = \\dfrac{\\sqrt{72 - 11x}}{x + 22}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Even root of a negative number is not real: the number under the root must be at least $0$, and each earlier step keeps both sides in order."
                },
                {
                  "step": "Line 4 divides both sides of line 3 by $-11$ and keeps $\\ge$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing by $-11$ turns $\\ge$ into $\\le$, so the sign is lost."
                },
                {
                  "step": "Line 4 written right is $x \\le \\dfrac{72}{11}$.",
                  "reason": "Each line follows from the line before it with one step."
                }
              ],
              "given": [
                "The bottom $x + 22$ is $0$ at $x = -22$.",
                "The root needs $72 - 11x \\ge 0$.",
                "$-11x \\ge -72$",
                "$x \\ge \\dfrac{72}{11}$",
                "The domain is $x \\ge \\dfrac{72}{11}$."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t158-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the function whose output $y$ is 13 less than the reciprocal of its input $x$ as an equation, with $y$ alone on the left.",
            "lines": [
              {
                "step": "Write the function whose output $y$ is 13 less than the reciprocal of its input $x$ as an equation, with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The reciprocal of its input is $\\dfrac{1}{x}$.",
                "reason": "Writing a sentence as an equation: \"The reciprocal of\" puts $1$ over the input."
              },
              {
                "step": "13 less than that is $\\dfrac{1}{x} - 13$.",
                "reason": "Writing a sentence as an equation: \"less than\" takes the number from the reciprocal."
              },
              {
                "step": "$y = \\dfrac{1}{x} - 13$",
                "reason": "Writing a sentence as an equation: the output $y$ stands alone on the left, equal to the expression in its input $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the function whose output $y$ is the reciprocal of the difference when 79 is taken from its input $x$ as an equation, with $y$ alone on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/(x-79)",
              "lines": [
                {
                  "step": "Write the function whose output $y$ is the reciprocal of the difference when 79 is taken from its input $x$ as an equation, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference when 79 is taken from its input is $x - 79$.",
                  "reason": "Writing a sentence as an equation: \"the difference when the number is taken from\" the input is the input minus the number."
                },
                {
                  "step": "The reciprocal of that is $\\dfrac{1}{x - 79}$.",
                  "reason": "Writing a sentence as an equation: \"The reciprocal of\" puts $1$ over the expression."
                },
                {
                  "step": "$y = \\dfrac{1}{x - 79}$",
                  "reason": "Writing a sentence as an equation: the output $y$ stands alone on the left, equal to the expression in its input $x$."
                }
              ]
            },
            {
              "prompt": "Write the function whose output $y$ is the square root of the sum of its input $x$ and 48 as an equation, with $y$ alone on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(x+48)",
              "lines": [
                {
                  "step": "Write the function whose output $y$ is the square root of the sum of its input $x$ and 48 as an equation, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of its input and 48 is $x + 48$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" the input and the number adds them."
                },
                {
                  "step": "The square root of that is $\\sqrt{x + 48}$.",
                  "reason": "Writing a sentence as an equation: \"The square root of\" puts the expression under the root."
                },
                {
                  "step": "$y = \\sqrt{x + 48}$",
                  "reason": "Writing a sentence as an equation: the output $y$ stands alone on the left, equal to the expression in its input $x$."
                }
              ]
            },
            {
              "prompt": "Write the function whose output $y$ is 74 more than 70 times its input $x$ as an equation, with $y$ alone on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 70*x+74",
              "lines": [
                {
                  "step": "Write the function whose output $y$ is 74 more than 70 times its input $x$ as an equation, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "70 times its input is $70x$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies the input by the number."
                },
                {
                  "step": "74 more than that is $70x + 74$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the number to the product."
                },
                {
                  "step": "$y = 70x + 74$",
                  "reason": "Writing a sentence as an equation: the output $y$ stands alone on the left, equal to the expression in its input $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t158-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $f(x) = \\dfrac{-15x^3 - 435x}{x^2 + 29}$ and $g(x) = -15x - 24$ defined for every real number are the same function.",
            "lines": [
              {
                "step": "Decide whether $f(x) = \\dfrac{-15x^3 - 435x}{x^2 + 29}$ and $g(x) = -15x - 24$ defined for every real number are the same function.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Where the bottom of $f$ is not $0$, $f(x) = -15x$.",
                "reason": "Cancelling a common factor: top and bottom share the factor $x^2 + 29$, since $-15x^3 - 435x = -15x(x^2 + 29)$."
              },
              {
                "step": "The bottom $x^2 + 29$ is at least $29$, so it is never $0$ and the domain of $f$ is every real number.",
                "reason": "Trivial Inequality: $x^2 \\ge 0$, so $x^2 + 29 \\ge 29$."
              },
              {
                "step": "The domain of $g$ is every real number.",
                "reason": "Domain: the problem defines $g$ for every real number."
              },
              {
                "step": "No",
                "reason": "Domain: two functions are the same function when they have the same domain and give the same output at every input in it; here the domains are the same, but Function notation gives $f(0) = 0$ and $g(0) = -24$, so the outputs differ at $x = 0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = \\dfrac{x^2 + 101x + 2478}{x + 42}$ and $g(x) = x + 59$ with the restricted domain $x \\ne -42$ are the same function.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\dfrac{x^2 + 101x + 2478}{x + 42}$ and $g(x) = x + 59$ with the restricted domain $x \\ne -42$ are the same function.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Where the bottom of $f$ is not $0$, $f(x) = x + 59$.",
                  "reason": "Cancelling a common factor: top and bottom share the factor $x + 42$, since $x^2 + 101x + 2478 = (x + 42)(x + 59)$."
                },
                {
                  "step": "The bottom $x + 42$ is $0$ at $x = -42$, so $-42$ is not in the domain of $f$.",
                  "reason": "Domain: division by $0$ gives no output."
                },
                {
                  "step": "The domain of $g$ is every real number but $-42$.",
                  "reason": "Restricted domain: the definition of $g$ leaves out $-42$, and every other $x$ gives an output."
                },
                {
                  "step": "Yes",
                  "reason": "Domain: two functions are the same function when they have the same domain and give the same output at every input in it; here the domains are the same and the outputs agree."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = \\dfrac{22x^2 - 24x}{x}$ and $g(x) = 22x - 23$ with the restricted domain $x \\ne 0$ are the same function.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\dfrac{22x^2 - 24x}{x}$ and $g(x) = 22x - 23$ with the restricted domain $x \\ne 0$ are the same function.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Where the bottom of $f$ is not $0$, $f(x) = 22x - 24$.",
                  "reason": "Cancelling a common factor: top and bottom share the factor $x$, since $22x^2 - 24x = x(22x - 24)$."
                },
                {
                  "step": "The bottom $x$ is $0$ at $x = 0$, so $0$ is not in the domain of $f$.",
                  "reason": "Domain: division by $0$ gives no output."
                },
                {
                  "step": "The domain of $g$ is every real number but $0$.",
                  "reason": "Restricted domain: the definition of $g$ leaves out $0$, and every other $x$ gives an output."
                },
                {
                  "step": "No",
                  "reason": "Domain: two functions are the same function when they have the same domain and give the same output at every input in it; here the domains are the same, but Function notation gives $f(1) = -2$ and $g(1) = -1$, so the outputs differ at $x = 1$."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = \\dfrac{x^3 - 34x^2 + 43x - 1462}{x^2 + 43}$ and $g(x) = x - 34$ defined for every real number are the same function.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\dfrac{x^3 - 34x^2 + 43x - 1462}{x^2 + 43}$ and $g(x) = x - 34$ defined for every real number are the same function.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Where the bottom of $f$ is not $0$, $f(x) = x - 34$.",
                  "reason": "Cancelling a common factor: top and bottom share the factor $x^2 + 43$, since $x^3 - 34x^2 + 43x - 1462 = (x - 34)(x^2 + 43)$."
                },
                {
                  "step": "The bottom $x^2 + 43$ is at least $43$, so it is never $0$ and the domain of $f$ is every real number.",
                  "reason": "Trivial Inequality: $x^2 \\ge 0$, so $x^2 + 43 \\ge 43$."
                },
                {
                  "step": "The domain of $g$ is every real number.",
                  "reason": "Domain: the problem defines $g$ for every real number."
                },
                {
                  "step": "Yes",
                  "reason": "Domain: two functions are the same function when they have the same domain and give the same output at every input in it; here the domains are the same and the outputs agree."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t158-k6",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $-5$ is in the domain of $f(x) = \\sqrt{5x + 9}\\sqrt{5x + 24}$.",
            "lines": [
              {
                "step": "Decide whether $-5$ is in the domain of $f(x) = \\sqrt{5x + 9}\\sqrt{5x + 24}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Under the first root, $5 \\cdot (-5) + 9 = -16$.",
                "reason": "Function notation: for $f(-5)$, $-5$ goes, in brackets, in each place of $x$ in $5x + 9$."
              },
              {
                "step": "Under the second root, $5 \\cdot (-5) + 24 = -1$.",
                "reason": "Function notation: for $f(-5)$, $-5$ goes, in brackets, in each place of $x$ in $5x + 24$."
              },
              {
                "step": "No",
                "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: $-16$ under a root is negative, so that root has no real value, whatever the other gives."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $5$ is in the domain of $f(x) = \\dfrac{\\sqrt{2x + 35}}{9x - 32}$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $5$ is in the domain of $f(x) = \\dfrac{\\sqrt{2x + 35}}{9x - 32}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Under the root, $2 \\cdot 5 + 35 = 45$.",
                  "reason": "Function notation: for $f(5)$, $5$ goes, in brackets, in each place of $x$ in $2x + 35$."
                },
                {
                  "step": "The bottom is $9 \\cdot 5 - 32 = 13$.",
                  "reason": "Function notation: for $f(5)$, $5$ goes, in brackets, in each place of $x$ in $9x - 32$."
                },
                {
                  "step": "Yes",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: the top is real since $45 \\ge 0$, and the bottom is not $0$."
                }
              ]
            },
            {
              "prompt": "Decide whether $4$ is in the domain of $f(x) = \\dfrac{\\sqrt{5x + 36}}{-5x + 20}$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $4$ is in the domain of $f(x) = \\dfrac{\\sqrt{5x + 36}}{-5x + 20}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Under the root, $5 \\cdot 4 + 36 = 56$.",
                  "reason": "Function notation: for $f(4)$, $4$ goes, in brackets, in each place of $x$ in $5x + 36$."
                },
                {
                  "step": "The bottom is $-5 \\cdot 4 + 20 = 0$.",
                  "reason": "Function notation: for $f(4)$, $4$ goes, in brackets, in each place of $x$ in $-5x + 20$."
                },
                {
                  "step": "No",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: the bottom is $0$, so the quotient has no value."
                }
              ]
            },
            {
              "prompt": "Decide whether $3$ is in the domain of $f(x) = \\sqrt{11x + 17} + \\sqrt{12x + 19}$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $3$ is in the domain of $f(x) = \\sqrt{11x + 17} + \\sqrt{12x + 19}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Under the first root, $11 \\cdot 3 + 17 = 50$.",
                  "reason": "Function notation: for $f(3)$, $3$ goes, in brackets, in each place of $x$ in $11x + 17$."
                },
                {
                  "step": "Under the second root, $12 \\cdot 3 + 19 = 55$.",
                  "reason": "Function notation: for $f(3)$, $3$ goes, in brackets, in each place of $x$ in $12x + 19$."
                },
                {
                  "step": "Yes",
                  "reason": "The domain of $f+g$, $f-g$ and $fg$ is the common part of the domains, and $f/g$ also leaves out the zeros of $g$: both roots are real, since neither number under a root is negative."
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
