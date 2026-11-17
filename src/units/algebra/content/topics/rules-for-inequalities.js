export default {
  "number": 128,
  "title": "Rules for inequalities",
  "section": 6,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "252-260, 280-285"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Write the inequality that results from multiplying both sides of $-\\dfrac{x}{3} > 4$ by $-3$.",
    "form": "Answer as an inequality, as in -2 <= x < 5.",
    "answer": "x < -12",
    "solution": [
      "Write the inequality that results from multiplying both sides of $-\\dfrac{x}{3} > 4$ by $-3$.",
      "$-3 \\cdot \\left(-\\dfrac{x}{3}\\right) < -3 \\cdot 4$",
      "$x < -12$"
    ]
  },
  "ideas": [
    {
      "name": "Strict and nonstrict inequality",
      "concrete": "The statement $3 \\cdot 4 > 10$ says that $12$ is greater than $10$, and it is true. The statement $8 - 2 \\ge 6$ says that $6$ is greater than or equal to $6$, and it is true, since the two sides are equal. From $9 > 4$ and $4 > -1$, the three numbers are written together as $9 > 4 > -1$.",
      "general": "For numbers $a$ and $b$, the statement $a > b$ says that $a$ is greater than $b$, and $a < b$ says that $a$ is less than $b$; each is a **strict inequality**. The statement $a \\ge b$ says that $a > b$ or $a = b$, and $a \\le b$ says that $a < b$ or $a = b$; each is a **nonstrict inequality**. The statement $a > b$ says the same as $b < a$. For numbers $a$, $b$ and $c$ with $a > b$ and $b > c$, the two inequalities written as one, $a > b > c$, form an **inequality chain**. For every real number, the order rules arithmetic proved for rational numbers hold as stated there, and reasons cite them by these names: transitivity (arithmetic's transitivity of the order relation); adding the same number (arithmetic's rule that adding the same quantity to both sides of an inequality preserves it); adding two inequalities (arithmetic's rule for combining two inequalities in the same direction); multiplying by a positive number (arithmetic's rule that multiplying an inequality by a positive number preserves it, t27-p3); multiplying by a negative number reverses the sign (arithmetic's rule for multiplying both sides of an inequality by a negative number, t27-p4); multiplying two inequalities of positive numbers (arithmetic's rule that positive numbers preserve order under multiplication). Dividing by a nonzero number is multiplying by its reciprocal, which has the same sign, so the rules for multiplying by a positive or a negative number cover dividing too."
    },
    {
      "name": "Powers and roots of positive numbers keep the order",
      "concrete": "From $9 > 4 > 0$ the square roots give $3 > 2$, and from $64 > 27 > 0$ the cube roots give $4 > 3$.",
      "general": "For all numbers $a$ and $b$ with $a > b > 0$: $\\sqrt{a} > \\sqrt{b}$ and $\\sqrt[3]{a} > \\sqrt[3]{b}$, and each further fixed root keeps the order in the same way. The powers, $a^n > b^n$ for every whole number $n > 0$, are arithmetic's rule for powers of positive numbers in increasing order (t27-p7), which holds for every real number as it does for rational numbers; the name covers both halves."
    },
    {
      "name": "Reciprocals of numbers of the same sign reverse the order",
      "concrete": "From $5 > 2 > 0$ the reciprocals give $\\dfrac{1}{5} < \\dfrac{1}{2}$. From $-2 > -5$, two negative numbers, the reciprocals give $-\\dfrac{1}{2} < -\\dfrac{1}{5}$.",
      "general": "For all numbers $a$ and $b$ that are both positive or both negative, if $a > b$, then $\\dfrac{1}{a} < \\dfrac{1}{b}$, and if $a \\ge b$, then $\\dfrac{1}{a} \\le \\dfrac{1}{b}$."
    }
  ],
  "kinds": [
    {
      "id": "t128-k1",
      "forms": [
        {
          "example": {
            "problem": "Write the inequality that results from adding $7$ to both sides of $x - 7 > 4$.",
            "lines": [
              {
                "step": "Write the inequality that results from adding $7$ to both sides of $x - 7 > 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x - 7 + 7 > 4 + 7$",
                "reason": "Adding the same number: $7$ is added to each side, so the sign stays as it is."
              },
              {
                "step": "$x > 11$",
                "reason": "Collecting like terms: $-7 + 7 = 0$ on the left, and $4 + 7 = 11$ on the right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inequality that results from taking $5$ from both sides of $x + 5 \\le 2$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x <= -3",
              "lines": [
                {
                  "step": "Write the inequality that results from taking $5$ from both sides of $x + 5 \\le 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 5 - 5 \\le 2 - 5$",
                  "reason": "Adding the same number: taking $5$ from each side is adding $-5$ to each side, so the sign stays as it is."
                },
                {
                  "step": "$x \\le -3$",
                  "reason": "Collecting like terms: $5 - 5 = 0$ on the left, and $2 - 5 = -3$ on the right."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from adding $3$ to both sides of $x - 3 \\ge -8$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= -5",
              "lines": [
                {
                  "step": "Write the inequality that results from adding $3$ to both sides of $x - 3 \\ge -8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x - 3 + 3 \\ge -8 + 3$",
                  "reason": "Adding the same number: $3$ is added to each side, so the sign stays as it is."
                },
                {
                  "step": "$x \\ge -5$",
                  "reason": "Collecting like terms: $-3 + 3 = 0$ on the left, and $-8 + 3 = -5$ on the right."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from taking $9$ from both sides of $x + 9 < 4$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x < -5",
              "lines": [
                {
                  "step": "Write the inequality that results from taking $9$ from both sides of $x + 9 < 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 9 - 9 < 4 - 9$",
                  "reason": "Adding the same number: taking $9$ from each side is adding $-9$ to each side, so the sign stays as it is."
                },
                {
                  "step": "$x < -5$",
                  "reason": "Collecting like terms: $9 - 9 = 0$ on the left, and $4 - 9 = -5$ on the right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the inequality that results from multiplying both sides of $\\dfrac{x}{4} \\le 3$ by $4$.",
            "lines": [
              {
                "step": "Write the inequality that results from multiplying both sides of $\\dfrac{x}{4} \\le 3$ by $4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4 \\cdot \\dfrac{x}{4} \\le 4 \\cdot 3$",
                "reason": "Multiplying by a positive number: $4$ is positive, so the sign stays as it is."
              },
              {
                "step": "$x \\le 12$",
                "reason": "Cancelling a common factor: the $4$ in front cancels the $4$ underneath, and $4 \\cdot 3 = 12$ on the right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inequality that results from multiplying both sides of $\\dfrac{x}{5} > -2$ by $5$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x > -10",
              "lines": [
                {
                  "step": "Write the inequality that results from multiplying both sides of $\\dfrac{x}{5} > -2$ by $5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5 \\cdot \\dfrac{x}{5} > 5 \\cdot (-2)$",
                  "reason": "Multiplying by a positive number: $5$ is positive, so the sign stays as it is."
                },
                {
                  "step": "$x > -10$",
                  "reason": "Cancelling a common factor: the $5$ in front cancels the $5$ underneath, and $5 \\cdot (-2) = -10$ on the right."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from multiplying both sides of $\\dfrac{x}{3} < 7$ by $3$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x < 21",
              "lines": [
                {
                  "step": "Write the inequality that results from multiplying both sides of $\\dfrac{x}{3} < 7$ by $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 \\cdot \\dfrac{x}{3} < 3 \\cdot 7$",
                  "reason": "Multiplying by a positive number: $3$ is positive, so the sign stays as it is."
                },
                {
                  "step": "$x < 21$",
                  "reason": "Cancelling a common factor: the $3$ in front cancels the $3$ underneath, and $3 \\cdot 7 = 21$ on the right."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from multiplying both sides of $\\dfrac{x}{6} \\ge -1$ by $6$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= -6",
              "lines": [
                {
                  "step": "Write the inequality that results from multiplying both sides of $\\dfrac{x}{6} \\ge -1$ by $6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6 \\cdot \\dfrac{x}{6} \\ge 6 \\cdot (-1)$",
                  "reason": "Multiplying by a positive number: $6$ is positive, so the sign stays as it is."
                },
                {
                  "step": "$x \\ge -6$",
                  "reason": "Cancelling a common factor: the $6$ in front cancels the $6$ underneath, and $6 \\cdot (-1) = -6$ on the right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the inequality that results from dividing both sides of $-5x \\ge 20$ by $-5$.",
            "lines": [
              {
                "step": "Write the inequality that results from dividing both sides of $-5x \\ge 20$ by $-5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{-5x}{-5} \\le \\dfrac{20}{-5}$",
                "reason": "Multiplying by a negative number reverses the sign: dividing by $-5$ is multiplying by $-\\dfrac{1}{5}$, which is negative, so $\\ge$ becomes $\\le$."
              },
              {
                "step": "$x \\le -4$",
                "reason": "Cancelling a common factor: $-5$ cancels on the left, and $20 \\div (-5) = -4$ on the right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inequality that results from multiplying both sides of $-\\dfrac{x}{2} > 3$ by $-2$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x < -6",
              "lines": [
                {
                  "step": "Write the inequality that results from multiplying both sides of $-\\dfrac{x}{2} > 3$ by $-2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2 \\cdot \\left(-\\dfrac{x}{2}\\right) < -2 \\cdot 3$",
                  "reason": "Multiplying by a negative number reverses the sign: $-2$ is negative, so $>$ becomes $<$."
                },
                {
                  "step": "$x < -6$",
                  "reason": "Cancelling a common factor: $-2$ times $-\\dfrac{x}{2}$ is $x$, and $-2 \\cdot 3 = -6$ on the right."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from dividing both sides of $-4x < -12$ by $-4$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x > 3",
              "lines": [
                {
                  "step": "Write the inequality that results from dividing both sides of $-4x < -12$ by $-4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-4x}{-4} > \\dfrac{-12}{-4}$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing by $-4$ is multiplying by $-\\dfrac{1}{4}$, which is negative, so $<$ becomes $>$."
                },
                {
                  "step": "$x > 3$",
                  "reason": "Cancelling a common factor: $-4$ cancels on the left, and $-12 \\div (-4) = 3$ on the right."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from multiplying both sides of $-\\dfrac{x}{6} \\le -2$ by $-6$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= 12",
              "lines": [
                {
                  "step": "Write the inequality that results from multiplying both sides of $-\\dfrac{x}{6} \\le -2$ by $-6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6 \\cdot \\left(-\\dfrac{x}{6}\\right) \\ge -6 \\cdot (-2)$",
                  "reason": "Multiplying by a negative number reverses the sign: $-6$ is negative, so $\\le$ becomes $\\ge$."
                },
                {
                  "step": "$x \\ge 12$",
                  "reason": "Cancelling a common factor: $-6$ times $-\\dfrac{x}{6}$ is $x$, and $-6 \\cdot (-2) = 12$ on the right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the inequality that results from taking the reciprocal of both sides of $\\dfrac{1}{x} > \\dfrac{1}{6}$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
            "lines": [
              {
                "step": "Write the inequality that results from taking the reciprocal of both sides of $\\dfrac{1}{x} > \\dfrac{1}{6}$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{1}{\\frac{1}{x}} < \\dfrac{1}{\\frac{1}{6}}$",
                "reason": "Reciprocals of numbers of the same sign reverse the order: $\\dfrac{1}{x}$ and $\\dfrac{1}{6}$ are both positive, since $x > 0$, so $>$ becomes $<$."
              },
              {
                "step": "$x < 6$",
                "reason": "Reciprocal: the reciprocal of $\\dfrac{1}{x}$ is $x$, and the reciprocal of $\\dfrac{1}{6}$ is $6$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inequality that results from taking the reciprocal of both sides of $\\dfrac{1}{x} < -\\dfrac{1}{4}$, given that $x < 0$. The condition $x < 0$ stays assumed, so leave it out of the answer.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x > -4",
              "lines": [
                {
                  "step": "Write the inequality that results from taking the reciprocal of both sides of $\\dfrac{1}{x} < -\\dfrac{1}{4}$, given that $x < 0$. The condition $x < 0$ stays assumed, so leave it out of the answer.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{\\frac{1}{x}} > \\dfrac{1}{-\\frac{1}{4}}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $\\dfrac{1}{x}$ and $-\\dfrac{1}{4}$ are both negative, since $x < 0$, so $<$ becomes $>$."
                },
                {
                  "step": "$x > -4$",
                  "reason": "Reciprocal: the reciprocal of $\\dfrac{1}{x}$ is $x$, and the reciprocal of $-\\dfrac{1}{4}$ is $-4$."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from taking the reciprocal of both sides of $\\dfrac{1}{x} \\ge \\dfrac{2}{5}$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x <= 5/2",
              "lines": [
                {
                  "step": "Write the inequality that results from taking the reciprocal of both sides of $\\dfrac{1}{x} \\ge \\dfrac{2}{5}$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{\\frac{1}{x}} \\le \\dfrac{1}{\\frac{2}{5}}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $\\dfrac{1}{x}$ and $\\dfrac{2}{5}$ are both positive, since $x > 0$, so $\\ge$ becomes $\\le$."
                },
                {
                  "step": "$x \\le \\dfrac{5}{2}$",
                  "reason": "Reciprocal: the reciprocal of $\\dfrac{1}{x}$ is $x$, and the reciprocal of $\\dfrac{2}{5}$ is $\\dfrac{5}{2}$."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from taking the reciprocal of both sides of $\\dfrac{1}{x} \\le -\\dfrac{3}{7}$, given that $x < 0$. The condition $x < 0$ stays assumed, so leave it out of the answer.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= -7/3",
              "lines": [
                {
                  "step": "Write the inequality that results from taking the reciprocal of both sides of $\\dfrac{1}{x} \\le -\\dfrac{3}{7}$, given that $x < 0$. The condition $x < 0$ stays assumed, so leave it out of the answer.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{\\frac{1}{x}} \\ge \\dfrac{1}{-\\frac{3}{7}}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $\\dfrac{1}{x}$ and $-\\dfrac{3}{7}$ are both negative, since $x < 0$, so $\\le$ becomes $\\ge$."
                },
                {
                  "step": "$x \\ge -\\dfrac{7}{3}$",
                  "reason": "Reciprocal: the reciprocal of $\\dfrac{1}{x}$ is $x$, and the reciprocal of $-\\dfrac{3}{7}$ is $-\\dfrac{7}{3}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the inequality that results from squaring both sides of $\\sqrt{x} < 7$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
            "lines": [
              {
                "step": "Write the inequality that results from squaring both sides of $\\sqrt{x} < 7$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(\\sqrt{x})^2 < 7^2$",
                "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{x}$ and $7$ are both positive, so the sign stays as it is."
              },
              {
                "step": "$x < 49$",
                "reason": "Positive square root: $(\\sqrt{x})^2 = x$, and $7^2 = 49$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inequality that results from taking the positive square root of both sides of $x^2 \\ge 36$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= 6",
              "lines": [
                {
                  "step": "Write the inequality that results from taking the positive square root of both sides of $x^2 \\ge 36$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{x^2} \\ge \\sqrt{36}$",
                  "reason": "Powers and roots of positive numbers keep the order: $x^2$ and $36$ are both positive, so the sign stays as it is."
                },
                {
                  "step": "$x \\ge 6$",
                  "reason": "Positive square root: $\\sqrt{x^2} = x$, since $x$ is positive, and $\\sqrt{36} = 6$."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from squaring both sides of $\\sqrt{x} \\ge 5$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= 25",
              "lines": [
                {
                  "step": "Write the inequality that results from squaring both sides of $\\sqrt{x} \\ge 5$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{x})^2 \\ge 5^2$",
                  "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{x}$ and $5$ are both positive, so the sign stays as it is."
                },
                {
                  "step": "$x \\ge 25$",
                  "reason": "Positive square root: $(\\sqrt{x})^2 = x$, and $5^2 = 25$."
                }
              ]
            },
            {
              "prompt": "Write the inequality that results from taking the positive square root of both sides of $x^2 < 81$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x < 9",
              "lines": [
                {
                  "step": "Write the inequality that results from taking the positive square root of both sides of $x^2 < 81$, given that $x > 0$. The condition $x > 0$ stays assumed, so leave it out of the answer.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{x^2} < \\sqrt{81}$",
                  "reason": "Powers and roots of positive numbers keep the order: $x^2$ and $81$ are both positive, so the sign stays as it is."
                },
                {
                  "step": "$x < 9$",
                  "reason": "Positive square root: $\\sqrt{x^2} = x$, since $x$ is positive, and $\\sqrt{81} = 9$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t128-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether, for all numbers $a$ and $b$ with $a > b$, it follows that $-2a > -2b$.",
            "lines": [
              {
                "step": "Decide whether, for all numbers $a$ and $b$ with $a > b$, it follows that $-2a > -2b$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $a = 1$ and $b = 0$ the condition $1 > 0$ is true, and the conclusion reads $-2 > 0$, which is false.",
                "reason": "Substituting a value: $a$ and $b$ are replaced by $(1)$ and $(0)$."
              },
              {
                "step": "No: multiplying by the negative number $-2$ reverses the sign, so $-2a < -2b$.",
                "reason": "One set of numbers that meets the conditions and makes the conclusion false shows that the claim does not always hold."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether, for all numbers $a$ and $b$ with $a > b$, it follows that $a + 3 > b + 1$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether, for all numbers $a$ and $b$ with $a > b$, it follows that $a + 3 > b + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $3$ to both sides of $a > b$ gives $a + 3 > b + 3$.",
                  "reason": "Adding the same number: $3$ is added to each side, so the sign stays as it is."
                },
                {
                  "step": "Adding $b$ to both sides of $3 > 1$ gives $b + 3 > b + 1$.",
                  "reason": "Adding the same number: $b$ is added to each side, so the sign stays as it is."
                },
                {
                  "step": "So $a + 3 > b + 1$.",
                  "reason": "Transitivity: $a + 3 > b + 3$ and $b + 3 > b + 1$."
                },
                {
                  "step": "Yes: the inequality chain $a + 3 > b + 3 > b + 1$ holds for all such $a$ and $b$.",
                  "reason": "A claim that follows from the rules for inequalities holds for every set of numbers it names."
                }
              ]
            },
            {
              "prompt": "Decide whether, for all numbers $a$ and $b$ with $a > b > 0$, it follows that $\\dfrac{1}{a} > \\dfrac{1}{b}$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether, for all numbers $a$ and $b$ with $a > b > 0$, it follows that $\\dfrac{1}{a} > \\dfrac{1}{b}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $a = 2$ and $b = 1$ the condition $2 > 1 > 0$ is true, and the conclusion reads $\\dfrac{1}{2} > 1$, which is false.",
                  "reason": "Substituting a value: $a$ and $b$ are replaced by $(2)$ and $(1)$."
                },
                {
                  "step": "No: reciprocals of numbers of the same sign reverse the order, so $\\dfrac{1}{a} < \\dfrac{1}{b}$.",
                  "reason": "One set of numbers that meets the conditions and makes the conclusion false shows that the claim does not always hold."
                }
              ]
            },
            {
              "prompt": "Decide whether, for every number $x$, it follows that $x^2 \\ge 0$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether, for every number $x$, it follows that $x^2 \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x > 0$ the square $x \\cdot x$ is positive.",
                  "reason": "Product of positive rational numbers: $x$ is positive."
                },
                {
                  "step": "For $x = 0$ the square is $0$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$."
                },
                {
                  "step": "For $x < 0$ the square $x \\cdot x$ is a negative number times a negative number, which is positive.",
                  "reason": "Signs of products: a negative number times a negative number is positive."
                },
                {
                  "step": "Yes: in each of the three cases $x^2$ is positive or $0$.",
                  "reason": "A claim that follows from the rules for inequalities holds for every set of numbers it names."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t128-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working that starts from $6 - 3x \\ge 15$, and write that line right.",
            "given": [
              "$6 - 3x \\ge 15$",
              "$-3x \\ge 9$",
              "$x \\ge -3$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that starts from $6 - 3x \\ge 15$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 divides both sides of line 2 by a negative number and keeps the sign $\\ge$.",
                "reason": "A sign is lost: multiplying by a negative number reverses the sign, so $\\ge$ becomes $\\le$."
              },
              {
                "step": "Doing that to line 2 with the sign reversed gives $x \\le -3$.",
                "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-3$ is multiplying by $-\\dfrac{1}{3}$."
              },
              {
                "step": "Line 3 written right is $x \\le -3$.",
                "reason": "Each side of the line before it has the same thing done to it, and the sign is reversed."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that starts from $-2(x + 4) \\le 6$, and write that line right.",
              "given": [
                "$-2(x + 4) \\le 6$",
                "$x + 4 \\le -3$",
                "$x \\le -7$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x+4 >= -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that starts from $-2(x + 4) \\le 6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 divides both sides of line 1 by a negative number and keeps the sign $\\le$.",
                  "reason": "A sign is lost: multiplying by a negative number reverses the sign, so $\\le$ becomes $\\ge$."
                },
                {
                  "step": "Doing that to line 1 with the sign reversed gives $x + 4 \\ge -3$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-2$ is multiplying by $-\\dfrac{1}{2}$."
                },
                {
                  "step": "Line 2 written right is $x + 4 \\ge -3$.",
                  "reason": "Each side of the line before it has the same thing done to it, and the sign is reversed."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that starts from $2(5 - 3x) < 4$, and write that line right.",
              "given": [
                "$2(5 - 3x) < 4$",
                "$10 - 6x < 4$",
                "$-6x < -6$",
                "$x < 1$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x > 1",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that starts from $2(5 - 3x) < 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 divides both sides of line 3 by a negative number and keeps the sign $<$.",
                  "reason": "A sign is lost: multiplying by a negative number reverses the sign, so $<$ becomes $>$."
                },
                {
                  "step": "Doing that to line 3 with the sign reversed gives $x > 1$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-6$ is multiplying by $-\\dfrac{1}{6}$."
                },
                {
                  "step": "Line 4 written right is $x > 1$.",
                  "reason": "Each side of the line before it has the same thing done to it, and the sign is reversed."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that starts from $-\\dfrac{x}{4} + 2 \\ge 5$, and write that line right.",
              "given": [
                "$-\\dfrac{x}{4} + 2 \\ge 5$",
                "$-\\dfrac{x}{4} \\ge 3$",
                "$x \\ge -12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x <= -12",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that starts from $-\\dfrac{x}{4} + 2 \\ge 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 multiplies both sides of line 2 by a negative number and keeps the sign $\\ge$.",
                  "reason": "A sign is lost: multiplying by a negative number reverses the sign, so $\\ge$ becomes $\\le$."
                },
                {
                  "step": "Doing that to line 2 with the sign reversed gives $x \\le -12$.",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-4$."
                },
                {
                  "step": "Line 3 written right is $x \\le -12$.",
                  "reason": "Each side of the line before it has the same thing done to it, and the sign is reversed."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t128-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an inequality in $x$: Four more than a number $x$ is at least 10.",
            "lines": [
              {
                "step": "Write this sentence as an inequality in $x$: Four more than a number $x$ is at least 10.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Four more than the number is $x + 4$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "The words \"is at least\" give the sign $\\ge$.",
                "reason": "Strict and nonstrict inequality: \"is at least\" allows the two sides to be equal, so the sign is nonstrict."
              },
              {
                "step": "$x + 4 \\ge 10$",
                "reason": "Writing a sentence as an equation: the sign stands where the words \"is at least\" stand."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an inequality in $x$: Twice a number $x$ exceeds 15.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*x > 15",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$: Twice a number $x$ exceeds 15.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Twice the number is $2x$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The words \"exceeds\" give the sign $>$.",
                  "reason": "Strict and nonstrict inequality: \"exceeds\" rules out the two sides being equal, so the sign is strict."
                },
                {
                  "step": "$2x > 15$",
                  "reason": "Writing a sentence as an equation: the sign stands where the words \"exceeds\" stand."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$: A number $x$ divided by 3 is no more than 7.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x/3 <= 7",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$: A number $x$ divided by 3 is no more than 7.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number divided by 3 is $\\dfrac{x}{3}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The words \"is no more than\" give the sign $\\le$.",
                  "reason": "Strict and nonstrict inequality: \"is no more than\" allows the two sides to be equal, so the sign is nonstrict."
                },
                {
                  "step": "$\\dfrac{x}{3} \\le 7$",
                  "reason": "Writing a sentence as an equation: the sign stands where the words \"is no more than\" stand."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$ and $y$: The number $y$ is less than 5 minus $x$. Keep $y$ alone on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y < 5-x",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ and $y$: The number $y$ is less than 5 minus $x$. Keep $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Five minus $x$ is $5 - x$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The words \"is less than\" give the sign $<$.",
                  "reason": "Strict and nonstrict inequality: \"is less than\" rules out the two sides being equal, so the sign is strict."
                },
                {
                  "step": "$y < 5 - x$",
                  "reason": "Writing a sentence as an equation: the sign stands where the words \"is less than\" stand."
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
      "id": "t128-p1",
      "method": "direct proof",
      "statement": "Let $x$, $y$, $a$ and $b$ be numbers. If $x > y$ and $a > b$, then $x + a > y + b$.",
      "idea": "Add $a$ to both sides of the first inequality and $y$ to both sides of the second, then join the two through $y + a$.",
      "lines": [
        {
          "line": "Suppose $x > y$ and $a > b$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $x + a > y + a$.",
          "reason": "adding the same number $a$ to both sides of $x > y$"
        },
        {
          "line": "Also $a + y > b + y$.",
          "reason": "adding the same number $y$ to both sides of $a > b$"
        },
        {
          "line": "So $y + a > y + b$.",
          "reason": "the commutative law of addition, on each side of the third line"
        },
        {
          "line": "Therefore $x + a > y + b$.",
          "reason": "transitivity, from the second and fourth lines"
        }
      ]
    },
    {
      "id": "t128-p5",
      "method": "proof by contradiction",
      "statement": "Let $x$ and $y$ be numbers with $x > y > 0$. Then $\\sqrt[3]{x} > \\sqrt[3]{y}$.",
      "idea": "If the cube root of $x$ were not the greater, cubing would make $x$ equal to $y$ or less than $y$.",
      "lines": [
        {
          "line": "Suppose $x > y > 0$, and write $u = \\sqrt[3]{x}$ and $v = \\sqrt[3]{y}$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $u^3 = x$ and $v^3 = y$.",
          "reason": "fractional exponents: $\\sqrt[3]{x}$ is the one real number whose cube is $x$"
        },
        {
          "line": "If $u \\le 0$, then $u^3 \\le 0$.",
          "reason": "sign of a power of a negative number: a cube of a number that is $0$ or negative is $0$ or negative"
        },
        {
          "line": "So $u > 0$, since $u^3 = x > 0$; in the same way $v > 0$.",
          "reason": "trichotomy of order, with the second and third lines"
        },
        {
          "line": "Suppose, for contradiction, that $u > v$ is false.",
          "reason": "the assumption to refute"
        },
        {
          "line": "Then $u = v$ or $u < v$.",
          "reason": "trichotomy of order"
        },
        {
          "line": "If $u = v$, then $x = u^3 = v^3 = y$.",
          "reason": "substituting a value: $v$ is replaced by its value $u$"
        },
        {
          "line": "That contradicts $x > y$.",
          "reason": "trichotomy of order: $x > y$ and $x = y$ do not both hold"
        },
        {
          "line": "If $u < v$, then $u^3 < v^3$.",
          "reason": "arithmetic's rule for powers of positive numbers in increasing order (t27-p7): $u$ and $v$ are positive"
        },
        {
          "line": "So $x < y$.",
          "reason": "substituting a value: $u^3$ and $v^3$ are replaced by their values $x$ and $y$ from the second line"
        },
        {
          "line": "That contradicts $x > y$.",
          "reason": "trichotomy of order: $x > y$ and $x < y$ do not both hold"
        },
        {
          "line": "Therefore $\\sqrt[3]{x} > \\sqrt[3]{y}$.",
          "reason": "both cases of the sixth line lead to a contradiction"
        }
      ]
    },
    {
      "id": "t128-p6",
      "method": "direct proof",
      "statement": "Let $x$ and $y$ be numbers with $x < y < 0$. Then $\\dfrac{1}{x} > \\dfrac{1}{y}$.",
      "idea": "Multiply $x < y$ by the positive number $\\dfrac{1}{xy}$.",
      "lines": [
        {
          "line": "Suppose $x < y < 0$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $xy > 0$.",
          "reason": "signs of products: a negative number times a negative number is positive"
        },
        {
          "line": "So $\\dfrac{1}{xy} > 0$.",
          "reason": "division of rational numbers: the reciprocal of a positive number is positive"
        },
        {
          "line": "Then $x \\cdot \\dfrac{1}{xy} < y \\cdot \\dfrac{1}{xy}$.",
          "reason": "multiplying both sides of $x < y$ by the positive number $\\dfrac{1}{xy}$"
        },
        {
          "line": "So $\\dfrac{1}{y} < \\dfrac{1}{x}$.",
          "reason": "cancelling a common factor: $x$ on the left and $y$ on the right, neither of them $0$"
        },
        {
          "line": "Therefore $\\dfrac{1}{x} > \\dfrac{1}{y}$.",
          "reason": "strict and nonstrict inequality: $a < b$ says the same as $b > a$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t128-s1",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be numbers with $0 < a < b$. Then $\\dfrac{1}{b} < \\dfrac{1}{a}$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $0 < a < b$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $b > 0$.",
            "reason": "transitivity: $b > a$ and $a > 0$"
          },
          {
            "line": "So $\\dfrac{1}{b} > 0$.",
            "reason": "division of rational numbers: the reciprocal of a positive number is positive"
          },
          {
            "line": "Then $a \\cdot \\dfrac{1}{b} < b \\cdot \\dfrac{1}{b}$.",
            "reason": "multiplying both sides of $a < b$ by the positive number $\\dfrac{1}{b}$"
          },
          {
            "line": "So $\\dfrac{a}{b} < 1$.",
            "reason": "cancelling a common factor: $b \\cdot \\dfrac{1}{b} = 1$, and $a \\cdot \\dfrac{1}{b}$ is $\\dfrac{a}{b}$"
          },
          {
            "line": "Also $\\dfrac{1}{a} > 0$.",
            "reason": "division of rational numbers: the reciprocal of a positive number is positive"
          },
          {
            "line": "Then $\\dfrac{1}{a} \\cdot \\dfrac{a}{b} < \\dfrac{1}{a} \\cdot 1$.",
            "reason": "multiplying both sides of the fifth line by the positive number $\\dfrac{1}{a}$"
          },
          {
            "line": "Therefore $\\dfrac{1}{b} < \\dfrac{1}{a}$.",
            "reason": "cancelling a common factor: $a$ on the left, and $\\dfrac{1}{a} \\cdot 1 = \\dfrac{1}{a}$ on the right"
          }
        ]
      }
    },
    {
      "id": "t128-s2",
      "method": "proof by cases",
      "statement": "Let $a$ and $b$ be numbers with $0 < a \\le b$. Then $\\dfrac{1}{b} \\le \\dfrac{1}{a}$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $0 < a \\le b$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $a < b$ or $a = b$.",
            "reason": "strict and nonstrict inequality"
          },
          {
            "line": "If $a < b$, then $\\dfrac{1}{b} < \\dfrac{1}{a}$.",
            "reason": "reciprocals of numbers of the same sign reverse the order: $a$ and $b$ are both positive"
          },
          {
            "line": "If $a = b$, then $\\dfrac{1}{b} = \\dfrac{1}{a}$.",
            "reason": "substituting a value: $b$ is replaced by its value $a$"
          },
          {
            "line": "Therefore $\\dfrac{1}{b} \\le \\dfrac{1}{a}$.",
            "reason": "strict and nonstrict inequality: each case gives less than or equal"
          }
        ]
      }
    },
    {
      "id": "t128-s3",
      "method": "proof by contradiction",
      "statement": "Let $a$ and $b$ be numbers with $a \\ge 0$ and $b \\ge 0$. Then $a^2 < b^2$ exactly when $a < b$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $a \\ge 0$ and $b \\ge 0$, and first suppose $a < b$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $b > 0$.",
            "reason": "transitivity: $b > a$ and $a \\ge 0$"
          },
          {
            "line": "If $a = 0$, then $a^2 = 0$.",
            "reason": "substituting a value: $a$ is replaced by $(0)$"
          },
          {
            "line": "Also $b^2 > 0$.",
            "reason": "product of positive rational numbers: $b \\cdot b$ with $b > 0$"
          },
          {
            "line": "So $a^2 < b^2$.",
            "reason": "substituting a value: $a^2$ is replaced by its value $0$ in $0 < b^2$"
          },
          {
            "line": "If $a > 0$, then $a^2 < b^2$.",
            "reason": "powers and roots of positive numbers keep the order"
          },
          {
            "line": "So $a < b$ gives $a^2 < b^2$.",
            "reason": "the two cases of $a \\ge 0$"
          },
          {
            "line": "Next suppose $a^2 < b^2$, and suppose, for contradiction, that $a < b$ is false.",
            "reason": "the assumption to refute"
          },
          {
            "line": "Then $a = b$ or $b < a$.",
            "reason": "trichotomy of order"
          },
          {
            "line": "If $a = b$, then $a^2 = b^2$, which contradicts $a^2 < b^2$.",
            "reason": "substituting a value, then trichotomy of order"
          },
          {
            "line": "If $b < a$, then $b^2 < a^2$, which contradicts $a^2 < b^2$.",
            "reason": "the seventh line with $a$ and $b$ swapped, then trichotomy of order"
          },
          {
            "line": "Therefore $a^2 < b^2$ gives $a < b$, and $a^2 < b^2$ exactly when $a < b$.",
            "reason": "both cases of the ninth line lead to a contradiction"
          }
        ]
      }
    },
    {
      "id": "t128-s4",
      "method": "proof of the contrapositive",
      "statement": "Let $a$ and $b$ be numbers with $a \\ge 0$ and $b \\ge 0$. Then $a^2 \\le b^2$ exactly when $a \\le b$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $a \\ge 0$ and $b \\ge 0$, and suppose that $a \\le b$ is false.",
            "reason": "the hypothesis, and the negated conclusion of the first direction"
          },
          {
            "line": "Then $b < a$.",
            "reason": "trichotomy of order"
          },
          {
            "line": "So $b^2 < a^2$.",
            "reason": "the statement before: for numbers at least $0$, $b < a$ gives $b^2 < a^2$"
          },
          {
            "line": "So $a^2 \\le b^2$ is false.",
            "reason": "trichotomy of order"
          },
          {
            "line": "Hence $a^2 \\le b^2$ gives $a \\le b$.",
            "reason": "the second to fourth lines prove the contrapositive"
          },
          {
            "line": "Next suppose that $a^2 \\le b^2$ is false.",
            "reason": "the negated conclusion of the second direction"
          },
          {
            "line": "Then $b^2 < a^2$.",
            "reason": "trichotomy of order"
          },
          {
            "line": "So $b < a$.",
            "reason": "the statement before: for numbers at least $0$, $b^2 < a^2$ gives $b < a$"
          },
          {
            "line": "So $a \\le b$ is false.",
            "reason": "trichotomy of order"
          },
          {
            "line": "Therefore $a \\le b$ gives $a^2 \\le b^2$, and $a^2 \\le b^2$ exactly when $a \\le b$.",
            "reason": "the seventh to ninth lines prove the contrapositive"
          }
        ]
      }
    },
    {
      "id": "t128-s5",
      "method": "direct proof",
      "statement": "Let $a$, $b$, $c$ and $d$ be numbers with $a < b$, $c \\le d$, $c > 0$ and $b \\ge 0$. Then $ac < bd$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $a < b$, $c \\le d$, $c > 0$ and $b \\ge 0$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $ac < bc$.",
            "reason": "multiplying both sides of $a < b$ by the positive number $c$"
          },
          {
            "line": "Also $d - c \\ge 0$.",
            "reason": "adding the same number $-c$ to both sides of $c \\le d$"
          },
          {
            "line": "So $b(d - c) \\ge 0$.",
            "reason": "product of positive rational numbers when $b > 0$, and a product with the factor $0$ is $0$ when $b = 0$"
          },
          {
            "line": "So $bd - bc \\ge 0$.",
            "reason": "multiplying out the bracket"
          },
          {
            "line": "Then $bd \\ge bc$.",
            "reason": "adding the same number $bc$ to both sides"
          },
          {
            "line": "Therefore $ac < bd$.",
            "reason": "transitivity: $ac < bc$ and $bc \\le bd$"
          }
        ]
      }
    },
    {
      "id": "t128-s6",
      "method": "disproof by counterexample",
      "statement": "The claim \"for all numbers $a$, $b$, $c$ and $d$, if $a > b$ and $c > d$, then $a - c > b - d$\" is false.",
      "check": {
        "proof": [
          {
            "line": "Take $a = 3$, $b = 2$, $c = 10$ and $d = 0$.",
            "reason": "one set of numbers to test the claim on"
          },
          {
            "line": "Then $a > b$, since $3 > 2$.",
            "reason": "substituting a value"
          },
          {
            "line": "Also $c > d$, since $10 > 0$.",
            "reason": "substituting a value"
          },
          {
            "line": "Here $a - c = 3 - 10 = -7$ and $b - d = 2 - 0 = 2$.",
            "reason": "substituting a value"
          },
          {
            "line": "So $a - c > b - d$ reads $-7 > 2$, which is false.",
            "reason": "strict and nonstrict inequality: $-7$ is less than $2$"
          },
          {
            "line": "Therefore the claim is false.",
            "reason": "one set of numbers meets both conditions and fails the conclusion"
          }
        ]
      }
    }
  ]
}
