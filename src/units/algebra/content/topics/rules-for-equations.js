export default {
  "number": 108,
  "title": "Doing the same thing to both sides",
  "section": 2,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "18-28"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Write the equation that results from multiplying both sides of $\\dfrac{y}{7} = \\dfrac{x + 2}{3}$ by $7$. Give the result as $y$ = an expression.",
    "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
    "answer": "y = 7*(x+2)/3",
    "solution": [
      "Write the equation that results from multiplying both sides of $\\dfrac{y}{7} = \\dfrac{x + 2}{3}$ by $7$. Give the result as $y$ = an expression.",
      "$7 \\cdot \\dfrac{y}{7} = 7 \\cdot \\dfrac{x + 2}{3}$",
      "$y = \\dfrac{7(x + 2)}{3}$"
    ]
  },
  "ideas": [
    {
      "name": "Equation",
      "concrete": "The statement $4 + 6 = 2 \\cdot 5$ says that the two expressions $4 + 6$ and $2 \\cdot 5$ are the same number, and it is true.",
      "general": "An **equation** is a statement that two expressions are equal, written with the equals sign between them. The expression to the left of the sign is the left side, and the one to the right is the right side. An equation with letters is true for some values of the letters and false for others."
    },
    {
      "name": "Symmetric property",
      "concrete": "Since $3 + 4 = 7$, also $7 = 3 + 4$.",
      "general": "For all numbers $a$ and $b$, if $a = b$, then $b = a$. This is the **symmetric property** of equality: the two sides of a true equation may change places."
    },
    {
      "name": "Adding the same number to both sides",
      "concrete": "From $9 - 2 = 7$, adding $5$ to each side gives $9 - 2 + 5 = 7 + 5$, and each side is $12$.",
      "general": "For all numbers $a$, $b$ and $c$, if $a = b$, then $a + c = b + c$ and $a - c = b - c$. Taking $c$ from both sides is adding $-c$ to both sides."
    },
    {
      "name": "Multiplying both sides by the same number",
      "concrete": "From $8 - 3 = 5$, multiplying each side by $4$ gives $4(8 - 3) = 4 \\cdot 5$, and each side is $20$.",
      "general": "For all numbers $a$, $b$ and $c$, if $a = b$, then $ca = cb$. The number $c$ may be $0$, and it may be a letter, since a letter stands for one number at a time."
    },
    {
      "name": "Dividing both sides by a nonzero number",
      "concrete": "From $10 + 8 = 18$, dividing each side by $3$ gives $\\dfrac{10 + 8}{3} = \\dfrac{18}{3}$, and each side is $6$.",
      "general": "For all numbers $a$ and $b$, and every number $c$ other than $0$, if $a = b$, then $\\dfrac{a}{c} = \\dfrac{b}{c}$. Dividing by $c$ is multiplying by $\\dfrac{1}{c}$, and no number is $\\dfrac{1}{0}$, so $c$ must not be $0$."
    },
    {
      "name": "Cross-multiplying",
      "concrete": "From $\\dfrac{3}{9} = \\dfrac{5}{15}$, the top of each side times the bottom of the other gives $3 \\cdot 15 = 9 \\cdot 5$, and each side is $45$.",
      "general": "For all numbers $a$ and $c$, and all numbers $b$ and $d$ other than $0$, if $\\dfrac{a}{b} = \\dfrac{c}{d}$, then $ad = bc$. Writing $ad = bc$ from $\\dfrac{a}{b} = \\dfrac{c}{d}$ is **cross-multiplying**."
    },
    {
      "name": "Adding two equations",
      "concrete": "From $4 + 5 = 9$ and $6 = 2 \\cdot 3$, adding the left sides and adding the right sides gives $(4 + 5) + 6 = 9 + 2 \\cdot 3$, and each side is $15$.",
      "general": "For all numbers $a$, $b$, $c$ and $d$, if $a = b$ and $c = d$, then $a + c = b + d$ and $a - c = b - d$. Taking one equation away from another is adding the two after the second is multiplied by $-1$."
    },
    {
      "name": "Multiplying two equations",
      "concrete": "From $2 + 1 = 3$ and $10 - 6 = 4$, multiplying the left sides and multiplying the right sides gives $(2 + 1)(10 - 6) = 3 \\cdot 4$, and each side is $12$.",
      "general": "For all numbers $a$, $b$, $c$ and $d$, if $a = b$ and $c = d$, then $ac = bd$."
    },
    {
      "name": "Transitive property",
      "concrete": "Since $2 \\cdot 6 = 12$ and $12 = 20 - 8$, also $2 \\cdot 6 = 20 - 8$.",
      "general": "For all numbers $a$, $b$ and $c$, if $a = b$ and $b = c$, then $a = c$. This is the **transitive property** of equality: two expressions equal to the same number are equal to each other."
    }
  ],
  "kinds": [
    {
      "id": "t108-k1",
      "forms": [
        {
          "example": {
            "problem": "Write the equation that results from adding $6$ to both sides of $y - 6 = 2x + 9$. Give the result as $y$ = an expression.",
            "lines": [
              {
                "step": "Write the equation that results from adding $6$ to both sides of $y - 6 = 2x + 9$. Give the result as $y$ = an expression.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y - 6 + 6 = 2x + 9 + 6$",
                "reason": "Adding the same number to both sides: $6$ is added to the left side and to the right side, so the two sides stay equal."
              },
              {
                "step": "$y = 2x + 15$",
                "reason": "Collecting like terms on each side, and working out the numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation that results from taking $4$ from both sides of $y + 4 = 3x - 8$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 3*x-12",
              "lines": [
                {
                  "step": "Write the equation that results from taking $4$ from both sides of $y + 4 = 3x - 8$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y + 4 - 4 = 3x - 8 - 4$",
                  "reason": "Adding the same number to both sides: taking $4$ from each side is adding $-4$ to each side, so the two sides stay equal."
                },
                {
                  "step": "$y = 3x - 12$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from adding $3$ to both sides of $x - 3 = 2z + 11$. Give the result as $x$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 2*z+14",
              "lines": [
                {
                  "step": "Write the equation that results from adding $3$ to both sides of $x - 3 = 2z + 11$. Give the result as $x$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x - 3 + 3 = 2z + 11 + 3$",
                  "reason": "Adding the same number to both sides: $3$ is added to the left side and to the right side, so the two sides stay equal."
                },
                {
                  "step": "$x = 2z + 14$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from taking $10$ from both sides of $y + 10 = 6 - x$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -x-4",
              "lines": [
                {
                  "step": "Write the equation that results from taking $10$ from both sides of $y + 10 = 6 - x$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y + 10 - 10 = 6 - x - 10$",
                  "reason": "Adding the same number to both sides: taking $10$ from each side is adding $-10$ to each side, so the two sides stay equal."
                },
                {
                  "step": "$y = -x - 4$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation that results from multiplying both sides of $\\dfrac{y}{6} = \\dfrac{x}{3}$ by $6$. Give the result as $y$ = an expression.",
            "lines": [
              {
                "step": "Write the equation that results from multiplying both sides of $\\dfrac{y}{6} = \\dfrac{x}{3}$ by $6$. Give the result as $y$ = an expression.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6 \\cdot \\dfrac{y}{6} = 6 \\cdot \\dfrac{x}{3}$",
                "reason": "Multiplying both sides by the same number: each side is multiplied by $6$, so the two sides stay equal."
              },
              {
                "step": "$y = 2x$",
                "reason": "Cancelling a common factor: the bottom $6$ cancels on the left, and $6 = 2 \\cdot 3$ on the right, so the bottom $3$ cancels."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation that results from multiplying both sides of $\\dfrac{y}{10} = \\dfrac{x + 1}{5}$ by $10$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 2*(x+1)",
              "lines": [
                {
                  "step": "Write the equation that results from multiplying both sides of $\\dfrac{y}{10} = \\dfrac{x + 1}{5}$ by $10$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10 \\cdot \\dfrac{y}{10} = 10 \\cdot \\dfrac{x + 1}{5}$",
                  "reason": "Multiplying both sides by the same number: each side is multiplied by $10$, so the two sides stay equal."
                },
                {
                  "step": "$y = 2(x + 1)$",
                  "reason": "Cancelling a common factor: the bottom $10$ cancels on the left, and $10 = 2 \\cdot 5$ on the right, so the bottom $5$ cancels."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from multiplying both sides of $\\dfrac{x}{12} = \\dfrac{z}{4}$ by $12$. Give the result as $x$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 3*z",
              "lines": [
                {
                  "step": "Write the equation that results from multiplying both sides of $\\dfrac{x}{12} = \\dfrac{z}{4}$ by $12$. Give the result as $x$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12 \\cdot \\dfrac{x}{12} = 12 \\cdot \\dfrac{z}{4}$",
                  "reason": "Multiplying both sides by the same number: each side is multiplied by $12$, so the two sides stay equal."
                },
                {
                  "step": "$x = 3z$",
                  "reason": "Cancelling a common factor: the bottom $12$ cancels on the left, and $12 = 3 \\cdot 4$ on the right, so the bottom $4$ cancels."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from multiplying both sides of $\\dfrac{y}{8} = \\dfrac{x - 3}{2}$ by $8$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 4*(x-3)",
              "lines": [
                {
                  "step": "Write the equation that results from multiplying both sides of $\\dfrac{y}{8} = \\dfrac{x - 3}{2}$ by $8$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8 \\cdot \\dfrac{y}{8} = 8 \\cdot \\dfrac{x - 3}{2}$",
                  "reason": "Multiplying both sides by the same number: each side is multiplied by $8$, so the two sides stay equal."
                },
                {
                  "step": "$y = 4(x - 3)$",
                  "reason": "Cancelling a common factor: the bottom $8$ cancels on the left, and $8 = 4 \\cdot 2$ on the right, so the bottom $2$ cancels."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation that results from dividing both sides of $3y = 6x + 9$ by $3$. Give the result as $y$ = an expression.",
            "lines": [
              {
                "step": "Write the equation that results from dividing both sides of $3y = 6x + 9$ by $3$. Give the result as $y$ = an expression.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{3y}{3} = \\dfrac{6x + 9}{3}$",
                "reason": "Dividing both sides by a nonzero number: $3$ is not $0$, and each side is divided by it, so the two sides stay equal."
              },
              {
                "step": "$y = 2x + 3$",
                "reason": "Cancelling a common factor: $3$ is a factor of every term on each side, and it is not $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation that results from dividing both sides of $4x = 8z - 12$ by $4$. Give the result as $x$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 2*z-3",
              "lines": [
                {
                  "step": "Write the equation that results from dividing both sides of $4x = 8z - 12$ by $4$. Give the result as $x$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4x}{4} = \\dfrac{8z - 12}{4}$",
                  "reason": "Dividing both sides by a nonzero number: $4$ is not $0$, and each side is divided by it, so the two sides stay equal."
                },
                {
                  "step": "$x = 2z - 3$",
                  "reason": "Cancelling a common factor: $4$ is a factor of every term on each side, and it is not $0$."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from dividing both sides of $5y = 15x + 10$ by $5$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 3*x+2",
              "lines": [
                {
                  "step": "Write the equation that results from dividing both sides of $5y = 15x + 10$ by $5$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5y}{5} = \\dfrac{15x + 10}{5}$",
                  "reason": "Dividing both sides by a nonzero number: $5$ is not $0$, and each side is divided by it, so the two sides stay equal."
                },
                {
                  "step": "$y = 3x + 2$",
                  "reason": "Cancelling a common factor: $5$ is a factor of every term on each side, and it is not $0$."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from dividing both sides of $2z = 14 - 6x$ by $2$. Give the result as $z$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = 7-3*x",
              "lines": [
                {
                  "step": "Write the equation that results from dividing both sides of $2z = 14 - 6x$ by $2$. Give the result as $z$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2z}{2} = \\dfrac{14 - 6x}{2}$",
                  "reason": "Dividing both sides by a nonzero number: $2$ is not $0$, and each side is divided by it, so the two sides stay equal."
                },
                {
                  "step": "$z = 7 - 3x$",
                  "reason": "Cancelling a common factor: $2$ is a factor of every term on each side, and it is not $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation that results from cross-multiplying $\\dfrac{1}{x + 1} = \\dfrac{4}{y}$, where $x + 1$ and $y$ are not $0$. Give the result as $y$ = an expression.",
            "lines": [
              {
                "step": "Write the equation that results from cross-multiplying $\\dfrac{1}{x + 1} = \\dfrac{4}{y}$, where $x + 1$ and $y$ are not $0$. Give the result as $y$ = an expression.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$1 \\cdot y = 4(x + 1)$",
                "reason": "Cross-multiplying: the top of each side is multiplied by the bottom of the other side, and the bottoms $x + 1$ and $y$ are not $0$."
              },
              {
                "step": "$y = 4(x + 1)$",
                "reason": "Multiplying a number by $1$ leaves $y$ as it is."
              },
              {
                "step": "$y = 4x + 4$",
                "reason": "Multiplying out: the bracket is multiplied out by the distributive law."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation that results from cross-multiplying $\\dfrac{1}{x - 2} = \\dfrac{3}{y}$, where $x - 2$ and $y$ are not $0$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 3*x-6",
              "lines": [
                {
                  "step": "Write the equation that results from cross-multiplying $\\dfrac{1}{x - 2} = \\dfrac{3}{y}$, where $x - 2$ and $y$ are not $0$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 \\cdot y = 3(x - 2)$",
                  "reason": "Cross-multiplying: the top of each side is multiplied by the bottom of the other side, and the bottoms $x - 2$ and $y$ are not $0$."
                },
                {
                  "step": "$y = 3(x - 2)$",
                  "reason": "Multiplying a number by $1$ leaves $y$ as it is."
                },
                {
                  "step": "$y = 3x - 6$",
                  "reason": "Multiplying out: the bracket is multiplied out by the distributive law."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from cross-multiplying $\\dfrac{1}{2x + 1} = \\dfrac{5}{z}$, where $2x + 1$ and $z$ are not $0$. Give the result as $z$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = 10*x+5",
              "lines": [
                {
                  "step": "Write the equation that results from cross-multiplying $\\dfrac{1}{2x + 1} = \\dfrac{5}{z}$, where $2x + 1$ and $z$ are not $0$. Give the result as $z$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 \\cdot z = 5(2x + 1)$",
                  "reason": "Cross-multiplying: the top of each side is multiplied by the bottom of the other side, and the bottoms $2x + 1$ and $z$ are not $0$."
                },
                {
                  "step": "$z = 5(2x + 1)$",
                  "reason": "Multiplying a number by $1$ leaves $z$ as it is."
                },
                {
                  "step": "$z = 10x + 5$",
                  "reason": "Multiplying out: the bracket is multiplied out by the distributive law."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from cross-multiplying $\\dfrac{1}{3 - x} = \\dfrac{2}{y}$, where $3 - x$ and $y$ are not $0$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 6-2*x",
              "lines": [
                {
                  "step": "Write the equation that results from cross-multiplying $\\dfrac{1}{3 - x} = \\dfrac{2}{y}$, where $3 - x$ and $y$ are not $0$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 \\cdot y = 2(3 - x)$",
                  "reason": "Cross-multiplying: the top of each side is multiplied by the bottom of the other side, and the bottoms $3 - x$ and $y$ are not $0$."
                },
                {
                  "step": "$y = 2(3 - x)$",
                  "reason": "Multiplying a number by $1$ leaves $y$ as it is."
                },
                {
                  "step": "$y = 6 - 2x$",
                  "reason": "Multiplying out: the bracket is multiplied out by the distributive law."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation that results from adding the equations $y - x = 3$ and $x = 2z$. Give the result as $y$ = an expression.",
            "lines": [
              {
                "step": "Write the equation that results from adding the equations $y - x = 3$ and $x = 2z$. Give the result as $y$ = an expression.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(y - x) + x = 3 + 2z$",
                "reason": "Adding two equations: the two left sides are added, and the two right sides are added."
              },
              {
                "step": "$y = 2z + 3$",
                "reason": "Collecting like terms on each side, and working out the numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation that results from adding the equations $y - 2x = z$ and $2x = 5$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = z+5",
              "lines": [
                {
                  "step": "Write the equation that results from adding the equations $y - 2x = z$ and $2x = 5$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(y - 2x) + 2x = z + 5$",
                  "reason": "Adding two equations: the two left sides are added, and the two right sides are added."
                },
                {
                  "step": "$y = z + 5$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from adding the equations $x + 3y = 4$ and $-3y = 2z + 6$. Give the result as $x$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 2*z+10",
              "lines": [
                {
                  "step": "Write the equation that results from adding the equations $x + 3y = 4$ and $-3y = 2z + 6$. Give the result as $x$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 3y) + (-3y) = 4 + (2z + 6)$",
                  "reason": "Adding two equations: the two left sides are added, and the two right sides are added."
                },
                {
                  "step": "$x = 2z + 10$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from adding the equations $z - 4x = 1$ and $4x = y - 7$. Give the result as $z$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = y-6",
              "lines": [
                {
                  "step": "Write the equation that results from adding the equations $z - 4x = 1$ and $4x = y - 7$. Give the result as $z$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(z - 4x) + 4x = 1 + (y - 7)$",
                  "reason": "Adding two equations: the two left sides are added, and the two right sides are added."
                },
                {
                  "step": "$z = y - 6$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation that results from taking the equation $4z = x + 5$ away from the equation $y + 4z = 3x + 11$. Give the result as $y$ = an expression.",
            "lines": [
              {
                "step": "Write the equation that results from taking the equation $4z = x + 5$ away from the equation $y + 4z = 3x + 11$. Give the result as $y$ = an expression.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(y + 4z) - 4z = (3x + 11) - (x + 5)$",
                "reason": "Adding two equations, the second multiplied by $-1$ first: the second left side is taken from the first left side, and the second right side from the first right side."
              },
              {
                "step": "$y + 4z - 4z = 3x + 11 - x - 5$",
                "reason": "Subtracting a bracket changes every sign in it."
              },
              {
                "step": "$y = 2x + 6$",
                "reason": "Collecting like terms on each side, and working out the numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation that results from taking the equation $2y = z - 7$ away from the equation $x + 2y = 5z - 3$. Give the result as $x$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 4*z+4",
              "lines": [
                {
                  "step": "Write the equation that results from taking the equation $2y = z - 7$ away from the equation $x + 2y = 5z - 3$. Give the result as $x$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 2y) - 2y = (5z - 3) - (z - 7)$",
                  "reason": "Adding two equations, the second multiplied by $-1$ first: the second left side is taken from the first left side, and the second right side from the first right side."
                },
                {
                  "step": "$x + 2y - 2y = 5z - 3 - z + 7$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$x = 4z + 4$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from taking the equation $5x = 2 - 3z$ away from the equation $y + 5x = 8 - z$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 2*z+6",
              "lines": [
                {
                  "step": "Write the equation that results from taking the equation $5x = 2 - 3z$ away from the equation $y + 5x = 8 - z$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(y + 5x) - 5x = (8 - z) - (2 - 3z)$",
                  "reason": "Adding two equations, the second multiplied by $-1$ first: the second left side is taken from the first left side, and the second right side from the first right side."
                },
                {
                  "step": "$y + 5x - 5x = 8 - z - 2 + 3z$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$y = 2z + 6$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from taking the equation $x = y - 1$ away from the equation $z + x = 4y + 9$. Give the result as $z$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = 3*y+10",
              "lines": [
                {
                  "step": "Write the equation that results from taking the equation $x = y - 1$ away from the equation $z + x = 4y + 9$. Give the result as $z$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(z + x) - x = (4y + 9) - (y - 1)$",
                  "reason": "Adding two equations, the second multiplied by $-1$ first: the second left side is taken from the first left side, and the second right side from the first right side."
                },
                {
                  "step": "$z + x - x = 4y + 9 - y + 1$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$z = 3y + 10$",
                  "reason": "Collecting like terms on each side, and working out the numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation that results from multiplying the equations $\\dfrac{y}{x} = 3$ and $x = 2z$, where $x$ is not $0$. Give the result as $y$ = an expression.",
            "lines": [
              {
                "step": "Write the equation that results from multiplying the equations $\\dfrac{y}{x} = 3$ and $x = 2z$, where $x$ is not $0$. Give the result as $y$ = an expression.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{y}{x} \\cdot x = 3 \\cdot 2z$",
                "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
              },
              {
                "step": "$y = 3 \\cdot 2z$",
                "reason": "Cancelling a common factor: $x$ is not $0$, so it cancels on the left."
              },
              {
                "step": "$y = 6z$",
                "reason": "The numbers on the right are multiplied."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation that results from multiplying the equations $\\dfrac{y}{x} = 5$ and $x = 4z$, where $x$ is not $0$. Give the result as $y$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 20*z",
              "lines": [
                {
                  "step": "Write the equation that results from multiplying the equations $\\dfrac{y}{x} = 5$ and $x = 4z$, where $x$ is not $0$. Give the result as $y$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{y}{x} \\cdot x = 5 \\cdot 4z$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$y = 5 \\cdot 4z$",
                  "reason": "Cancelling a common factor: $x$ is not $0$, so it cancels on the left."
                },
                {
                  "step": "$y = 20z$",
                  "reason": "The numbers on the right are multiplied."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from multiplying the equations $\\dfrac{z}{y} = 2$ and $y = 7x$, where $y$ is not $0$. Give the result as $z$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = 14*x",
              "lines": [
                {
                  "step": "Write the equation that results from multiplying the equations $\\dfrac{z}{y} = 2$ and $y = 7x$, where $y$ is not $0$. Give the result as $z$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{z}{y} \\cdot y = 2 \\cdot 7x$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$z = 2 \\cdot 7x$",
                  "reason": "Cancelling a common factor: $y$ is not $0$, so it cancels on the left."
                },
                {
                  "step": "$z = 14x$",
                  "reason": "The numbers on the right are multiplied."
                }
              ]
            },
            {
              "prompt": "Write the equation that results from multiplying the equations $\\dfrac{x}{z} = 6$ and $z = 3y$, where $z$ is not $0$. Give the result as $x$ = an expression.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 18*y",
              "lines": [
                {
                  "step": "Write the equation that results from multiplying the equations $\\dfrac{x}{z} = 6$ and $z = 3y$, where $z$ is not $0$. Give the result as $x$ = an expression.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{z} \\cdot z = 6 \\cdot 3y$",
                  "reason": "Multiplying two equations: the two left sides are multiplied, and the two right sides are multiplied."
                },
                {
                  "step": "$x = 6 \\cdot 3y$",
                  "reason": "Cancelling a common factor: $z$ is not $0$, so it cancels on the left."
                },
                {
                  "step": "$x = 18y$",
                  "reason": "The numbers on the right are multiplied."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t108-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether going from $x + 2 = 3y$ to $\\dfrac{1}{x + 2} = \\dfrac{1}{3y}$ keeps the equation true for every pair of numbers $x$ and $y$ with $x + 2 = 3y$ and $x + 2$ not $0$.",
            "lines": [
              {
                "step": "Decide whether going from $x + 2 = 3y$ to $\\dfrac{1}{x + 2} = \\dfrac{1}{3y}$ keeps the equation true for every pair of numbers $x$ and $y$ with $x + 2 = 3y$ and $x + 2$ not $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The expression $3y$ has the value $x + 2$, which is not $0$, so $\\dfrac{1}{3y}$ is the number $\\dfrac{1}{x + 2}$.",
                "reason": "Substituting a value: $3y$ is replaced by its value $(x + 2)$ in $\\dfrac{1}{3y}$."
              },
              {
                "step": "Yes: the two sides are one number written two ways.",
                "reason": "A step made by the rules for equations gives a true equation from a true one, every time."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether going from $3x = 2x$ to $\\dfrac{1}{3x} = \\dfrac{1}{2x}$ keeps the equation true for every value of $x$ that makes $3x = 2x$ true.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether going from $3x = 2x$ to $\\dfrac{1}{3x} = \\dfrac{1}{2x}$ keeps the equation true for every value of $x$ that makes $3x = 2x$ true.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$ the first equation reads $0 = 0$, which is true, and the second has $\\dfrac{1}{0}$ on each side.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each equation."
                },
                {
                  "step": "No: $\\dfrac{1}{0}$ is not a number, so the step fails at $x = 0$.",
                  "reason": "One set of values that makes the first equation true and the second one false shows that the step does not keep every true equation true."
                }
              ]
            },
            {
              "prompt": "Decide whether going from $x - 4 = 5y$ to $\\dfrac{3}{x - 4} = \\dfrac{3}{5y}$ keeps the equation true for every pair of numbers $x$ and $y$ with $x - 4 = 5y$ and $x - 4$ not $0$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether going from $x - 4 = 5y$ to $\\dfrac{3}{x - 4} = \\dfrac{3}{5y}$ keeps the equation true for every pair of numbers $x$ and $y$ with $x - 4 = 5y$ and $x - 4$ not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The expression $5y$ has the value $x - 4$, which is not $0$, so $\\dfrac{3}{5y}$ is the number $\\dfrac{3}{x - 4}$.",
                  "reason": "Substituting a value: $5y$ is replaced by its value $(x - 4)$ in $\\dfrac{3}{5y}$."
                },
                {
                  "step": "Yes: the two sides are one number written two ways.",
                  "reason": "A step made by the rules for equations gives a true equation from a true one, every time."
                }
              ]
            },
            {
              "prompt": "Decide whether going from $x^2 = 4x$ to $x = 4$ keeps the equation true for every value of $x$ that makes $x^2 = 4x$ true.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether going from $x^2 = 4x$ to $x = 4$ keeps the equation true for every value of $x$ that makes $x^2 = 4x$ true.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$ the first equation reads $0 = 0$, which is true, and the second reads $0 = 4$, which is false.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each equation."
                },
                {
                  "step": "No: the step divides both sides by $x$, and $x$ may be $0$.",
                  "reason": "One set of values that makes the first equation true and the second one false shows that the step does not keep every true equation true."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t108-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working that starts from $\\dfrac{x}{2} + 3 = 8$, and write that line right.",
            "given": [
              "$\\dfrac{x}{2} + 3 = 8$",
              "$\\dfrac{x}{2} + 3 = 8 - 3 = 5$",
              "$x = 5 \\cdot 2 = 10$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that starts from $\\dfrac{x}{2} + 3 = 8$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes $3$ from the right side alone and runs on with a second equals sign, so it states $\\dfrac{x}{2} + 3 = 5$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side is $8$."
              },
              {
                "step": "Doing the same thing to both sides of line 1, taking $3$ from each, gives $\\dfrac{x}{2} = 5$.",
                "reason": "Adding the same number to both sides: the two sides stay equal."
              },
              {
                "step": "Line 2 written right is $\\dfrac{x}{2} = 5$.",
                "reason": "Each side of the line before it has the same thing done to it, and nothing else."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that starts from $3x - 7 = 11$, and write that line right.",
              "given": [
                "$3x - 7 = 11$",
                "$3x - 7 = 11 + 7 = 18$",
                "$x = 6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 3*x = 18",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that starts from $3x - 7 = 11$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds $7$ to the right side alone and runs on with a second equals sign, so it states $3x - 7 = 18$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side is $11$."
                },
                {
                  "step": "Doing the same thing to both sides of line 1, adding $7$ to each, gives $3x = 18$.",
                  "reason": "Adding the same number to both sides: the two sides stay equal."
                },
                {
                  "step": "Line 2 written right is $3x = 18$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that starts from $2x + 5 = 19$, and write that line right.",
              "given": [
                "$2x + 5 = 19$",
                "$2x = 14$",
                "$2x = 14 \\div 2 = 7$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x = 7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that starts from $2x + 5 = 19$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 divides the right side alone by $2$ and runs on with a second equals sign, so it states $2x = 7$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side is $14$."
                },
                {
                  "step": "Doing the same thing to both sides of line 2, dividing each by $2$, gives $x = 7$.",
                  "reason": "Dividing both sides by a nonzero number: the two sides stay equal."
                },
                {
                  "step": "Line 3 written right is $x = 7$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that starts from $\\dfrac{x}{4} - 1 = 2$, and write that line right.",
              "given": [
                "$\\dfrac{x}{4} - 1 = 2$",
                "$\\dfrac{x}{4} = 3$",
                "$\\dfrac{x}{4} = 3 \\cdot 4 = 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x = 12",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that starts from $\\dfrac{x}{4} - 1 = 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 multiplies the right side alone by $4$ and runs on with a second equals sign, so it states $\\dfrac{x}{4} = 12$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side is $3$."
                },
                {
                  "step": "Doing the same thing to both sides of line 2, multiplying each by $4$, gives $x = 12$.",
                  "reason": "Multiplying both sides by the same number: the two sides stay equal."
                },
                {
                  "step": "Line 3 written right is $x = 12$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working that takes the equation $2x + 3y = 7$ away from the equation $6x + 5y = 17$, and write that line right.",
            "given": [
              "$6x + 5y - (2x + 3y) = 17 - 7$",
              "$6x + 5y - 2x + 3y = 10$",
              "$4x + 8y = 10$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that takes the equation $2x + 3y = 7$ away from the equation $6x + 5y = 17$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes away the bracket $(2x + 3y)$ and changes the sign of its first term alone.",
                "reason": "A sign is lost: subtracting a bracket changes every sign in it, so $+3y$ in the bracket becomes $-3y$."
              },
              {
                "step": "Taking the second equation away takes the whole of its left side from the first left side, and the whole of its right side from the first right side.",
                "reason": "Adding two equations, the second multiplied by $-1$ first: every term of the second equation changes sign."
              },
              {
                "step": "Line 2 written right is $6x + 5y - 2x - 3y = 10$.",
                "reason": "The line before it is changed by the rule alone, with every sign kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that takes the equation $x + 2y = 6$ away from the equation $5x + 4y = 20$, and write that line right.",
              "given": [
                "$5x + 4y - x + 2y = 20 - 6$",
                "$4x + 6y = 14$",
                "$2x + 3y = 7$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 5*x+4*y-x-2*y = 20-6",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that takes the equation $x + 2y = 6$ away from the equation $5x + 4y = 20$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 writes the left side $x + 2y$ with no bracket, so only $x$ is taken away.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, and with no bracket the term $2y$ keeps its plus sign."
                },
                {
                  "step": "Taking the second equation away takes the whole of its left side from the first left side, and the whole of its right side from the first right side.",
                  "reason": "Adding two equations, the second multiplied by $-1$ first: every term of the second equation changes sign."
                },
                {
                  "step": "Line 1 written right is $5x + 4y - x - 2y = 20 - 6$.",
                  "reason": "The line before it is changed by the rule alone, with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that takes the equation $x + 3y = -4$ away from the equation $4x + y = 9$, and write that line right.",
              "given": [
                "$4x + y - (x + 3y) = 9 - (-4)$",
                "$4x + y - x - 3y = 9 - (-4)$",
                "$3x - 2y = 5$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 3*x-2*y = 13",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that takes the equation $x + 3y = -4$ away from the equation $4x + y = 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 works out $9 - (-4)$ as $5$.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, so taking away $-4$ adds $4$, and $9 - (-4) = 13$."
                },
                {
                  "step": "Taking the second equation away takes the whole of its left side from the first left side, and the whole of its right side from the first right side.",
                  "reason": "Adding two equations, the second multiplied by $-1$ first: every term of the second equation changes sign."
                },
                {
                  "step": "Line 3 written right is $3x - 2y = 13$.",
                  "reason": "The line before it is changed by the rule alone, with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that takes the equation $3x - 5y = 4$ away from the equation $7x - 2y = 15$, and write that line right.",
              "given": [
                "$7x - 2y - (3x - 5y) = 15 - 4$",
                "$7x - 2y - 3x - 5y = 11$",
                "$4x - 7y = 11$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 7*x-2*y-3*x+5*y = 11",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that takes the equation $3x - 5y = 4$ away from the equation $7x - 2y = 15$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes away the bracket $(3x - 5y)$ and changes the sign of its first term alone.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, so $-5y$ in the bracket becomes $+5y$."
                },
                {
                  "step": "Taking the second equation away takes the whole of its left side from the first left side, and the whole of its right side from the first right side.",
                  "reason": "Adding two equations, the second multiplied by $-1$ first: every term of the second equation changes sign."
                },
                {
                  "step": "Line 2 written right is $7x - 2y - 3x + 5y = 11$.",
                  "reason": "The line before it is changed by the rule alone, with every sign kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t108-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the sum of a number $x$ and 9 is 4 times the number.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: the sum of a number $x$ and 9 is 4 times the number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the number and 9 is $x + 9$.",
                "reason": "Writing a sentence as an equation: the words \"the sum of\" join the number and 9 with a plus sign."
              },
              {
                "step": "Four times the number is $4x$.",
                "reason": "Writing a sentence as an equation: the word \"times\" multiplies the number by 4."
              },
              {
                "step": "$x + 9 = 4x$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: five less than twice a number $x$ is 13.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*x-5 = 13",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: five less than twice a number $x$ is 13.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Twice the number is $2x$.",
                  "reason": "Writing a sentence as an equation: the word \"twice\" multiplies the number by 2."
                },
                {
                  "step": "Five less than that is $2x - 5$.",
                  "reason": "Writing a sentence as an equation: the words \"less than\" take 5 away from what follows them."
                },
                {
                  "step": "$2x - 5 = 13$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: half of a number $x$ equals the number minus 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x/2 = x-6",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: half of a number $x$ equals the number minus 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Half of the number is $\\dfrac{x}{2}$.",
                  "reason": "Writing a sentence as an equation: the words \"half of\" divide the number by 2."
                },
                {
                  "step": "The number minus 6 is $x - 6$.",
                  "reason": "Writing a sentence as an equation: the word \"minus\" takes 6 away from the number."
                },
                {
                  "step": "$\\dfrac{x}{2} = x - 6$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: the number $y$ is 3 more than 7 times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 7*x+3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$: the number $y$ is 3 more than 7 times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Seven times $x$ is $7x$.",
                  "reason": "Writing a sentence as an equation: the word \"times\" multiplies $x$ by 7."
                },
                {
                  "step": "Three more than that is $7x + 3$.",
                  "reason": "Writing a sentence as an equation: the words \"more than\" add 3 to what follows them."
                },
                {
                  "step": "$y = 7x + 3$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
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
      "id": "t108-p1",
      "method": "direct proof",
      "statement": "Let $a$ and $c$ be numbers, and let $b$ and $d$ be numbers other than $0$. If $\\dfrac{a}{b} = \\dfrac{c}{d}$, then $ad = bc$.",
      "idea": "Multiply both sides by $b$ to clear the left bottom, then by $d$ to clear the right bottom.",
      "lines": [
        {
          "line": "Suppose $\\dfrac{a}{b} = \\dfrac{c}{d}$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $b \\cdot \\dfrac{a}{b} = b \\cdot \\dfrac{c}{d}$.",
          "reason": "multiplying both sides by the same number $b$"
        },
        {
          "line": "The left side is $b \\cdot \\dfrac{a}{b} = a$.",
          "reason": "cancelling a common factor: $b$ is not $0$"
        },
        {
          "line": "So $a = b \\cdot \\dfrac{a}{b}$.",
          "reason": "the symmetric property, on the third line"
        },
        {
          "line": "So $a = b \\cdot \\dfrac{c}{d}$.",
          "reason": "the transitive property, from the fourth and second lines"
        },
        {
          "line": "Then $ad = b \\cdot \\dfrac{c}{d} \\cdot d$.",
          "reason": "multiplying both sides by the same number $d$"
        },
        {
          "line": "The right side is $b \\cdot \\dfrac{c}{d} \\cdot d = bc$.",
          "reason": "cancelling a common factor: $d$ is not $0$"
        },
        {
          "line": "Therefore $ad = bc$.",
          "reason": "the transitive property, from the sixth and seventh lines"
        }
      ]
    },
    {
      "id": "t108-p2",
      "method": "direct proof",
      "statement": "Let $a$, $b$, $c$ and $d$ be numbers. If $a = b$ and $c = d$, then $a + c = b + d$.",
      "idea": "Add $c$ to both sides of the first equation and $b$ to both sides of the second, then join the two results.",
      "lines": [
        {
          "line": "Suppose $a = b$ and $c = d$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $a + c = b + c$.",
          "reason": "adding the same number $c$ to both sides of $a = b$"
        },
        {
          "line": "Also $c + b = d + b$.",
          "reason": "adding the same number $b$ to both sides of $c = d$"
        },
        {
          "line": "So $b + c = b + d$.",
          "reason": "the commutative law of addition, on each side of the third line"
        },
        {
          "line": "Therefore $a + c = b + d$.",
          "reason": "the transitive property, from the second and fourth lines"
        }
      ]
    },
    {
      "id": "t108-p3",
      "method": "direct proof",
      "statement": "Let $a$, $b$, $c$ and $d$ be numbers with $c$ not $0$. If $a = b$ and $c = d$, then $\\dfrac{a}{c} = \\dfrac{b}{d}$.",
      "idea": "Divide both sides of $a = b$ by $c$, then write $d$ in the place of $c$ on the right.",
      "lines": [
        {
          "line": "Suppose $a = b$ and $c = d$, with $c$ not $0$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $d = c$.",
          "reason": "the symmetric property"
        },
        {
          "line": "So $d$ is not $0$.",
          "reason": "the second line: $d$ is the number $c$, which is not $0$"
        },
        {
          "line": "Also $\\dfrac{a}{c} = \\dfrac{b}{c}$.",
          "reason": "dividing both sides of $a = b$ by the nonzero number $c$"
        },
        {
          "line": "The quotient $\\dfrac{b}{c}$ is $\\dfrac{b}{d}$.",
          "reason": "substituting a value: by the first line $c$ has the value $d$"
        },
        {
          "line": "Therefore $\\dfrac{a}{c} = \\dfrac{b}{d}$.",
          "reason": "the transitive property, from the fourth and fifth lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t108-s1",
      "method": "direct proof",
      "statement": "Let $a$, $b$, $c$ and $d$ be numbers. If $a = b$ and $c = d$, then $a - c = b - d$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $a = b$ and $c = d$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $(-1)c = (-1)d$.",
            "reason": "multiplying both sides of $c = d$ by the same number $-1$"
          },
          {
            "line": "So $-c = -d$.",
            "reason": "Signs of products: $(-1)x = -x$, on each side"
          },
          {
            "line": "Then $a + (-c) = b + (-d)$.",
            "reason": "adding two equations, $a = b$ and the third line"
          },
          {
            "line": "Therefore $a - c = b - d$.",
            "reason": "Subtraction as addition: $x - y = x + (-y)$, on each side"
          }
        ]
      }
    },
    {
      "id": "t108-s2",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be numbers, both not $0$. If $a = b$, then $\\dfrac{1}{a} = \\dfrac{1}{b}$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $a = b$, with $a$ and $b$ not $0$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\dfrac{a}{a} = \\dfrac{b}{a}$.",
            "reason": "dividing both sides by the nonzero number $a$"
          },
          {
            "line": "The left side is $\\dfrac{a}{a} = 1$.",
            "reason": "cancelling a common factor: $a$ is not $0$"
          },
          {
            "line": "So $1 = \\dfrac{a}{a}$.",
            "reason": "the symmetric property, on the third line"
          },
          {
            "line": "So $1 = \\dfrac{b}{a}$.",
            "reason": "the transitive property, from the fourth and second lines"
          },
          {
            "line": "Then $1 \\cdot \\dfrac{1}{b} = \\dfrac{b}{a} \\cdot \\dfrac{1}{b}$.",
            "reason": "multiplying both sides by the same number $\\frac{1}{b}$, which exists since $b$ is not $0$"
          },
          {
            "line": "The left side is $1 \\cdot \\dfrac{1}{b} = \\dfrac{1}{b}$.",
            "reason": "multiplying a number by $1$ leaves it as it is"
          },
          {
            "line": "The right side is $\\dfrac{b}{a} \\cdot \\dfrac{1}{b} = \\dfrac{b}{ab}$.",
            "reason": "the product formula"
          },
          {
            "line": "Also $\\dfrac{b}{ab} = \\dfrac{1}{a}$.",
            "reason": "cancelling a common factor: $b$ is not $0$"
          },
          {
            "line": "So $\\dfrac{1}{b} = 1 \\cdot \\dfrac{1}{b}$.",
            "reason": "the symmetric property, on the seventh line"
          },
          {
            "line": "So $\\dfrac{1}{b} = \\dfrac{b}{a} \\cdot \\dfrac{1}{b}$.",
            "reason": "the transitive property, from the tenth and sixth lines"
          },
          {
            "line": "So $\\dfrac{1}{b} = \\dfrac{b}{ab}$.",
            "reason": "the transitive property, with the eighth line"
          },
          {
            "line": "So $\\dfrac{1}{b} = \\dfrac{1}{a}$.",
            "reason": "the transitive property, with the ninth line"
          },
          {
            "line": "Therefore $\\dfrac{1}{a} = \\dfrac{1}{b}$.",
            "reason": "the symmetric property, on the thirteenth line"
          }
        ]
      }
    },
    {
      "id": "t108-s3",
      "method": "direct proof",
      "statement": "Let $a$, $b$, $c$ and $d$ be numbers. If $a = b$ and $c = d$, then $ac = bd$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $a = b$ and $c = d$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $ca = cb$.",
            "reason": "multiplying both sides of $a = b$ by the same number $c$"
          },
          {
            "line": "So $ac = bc$.",
            "reason": "the commutative law of multiplication, on each side of the second line"
          },
          {
            "line": "Also $bc = bd$.",
            "reason": "multiplying both sides of $c = d$ by the same number $b$"
          },
          {
            "line": "Therefore $ac = bd$.",
            "reason": "the transitive property, from the third and fourth lines"
          }
        ]
      }
    }
  ]
}
