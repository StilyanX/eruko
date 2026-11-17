export default {
  "number": 161,
  "title": "Finding a function from an equation it satisfies",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "472-477, 479-483"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find every number $z$ with $f(z) = -5$, where $f\\left(\\dfrac{x}{4}\\right) = -2x^2 - 120x + 2427$ for every $x$.",
    "form": "Answer as the solutions, as in z = -1, z = 3.",
    "answer": "z = -19, z = 4",
    "solution": [
      "Find every number $z$ with $f(z) = -5$, where $f\\left(\\dfrac{x}{4}\\right) = -2x^2 - 120x + 2427$ for every $x$.",
      "$x = 4z$",
      "$f(z) = -2(4z)^2 - 120(4z) + 2427$",
      "$f(z) = -32z^2 - 480z + 2427$",
      "$-32z^2 - 480z + 2427 = -5$",
      "$-32z^2 - 480z + 2432 = 0$",
      "$z^2 + 15z - 76 = 0$",
      "$(z + 19)(z - 4) = 0$",
      "The solutions are $z = -19$ and $z = 4$."
    ]
  },
  "ideas": [
    {
      "name": "An equation that holds for every input",
      "concrete": "With $f(x + 7) = 3x^2 - 17$ for every $x$, the input $x = 2$ gives $f(9) = 3 \\cdot 4 - 17 = -5$, and $x = -7$ gives $f(0) = 3 \\cdot 49 - 17 = 130$. The number inside $f$ is $x + 7$, so $f(9)$ comes from $x = 2$, never from $x = 9$.",
      "general": "An **equation that holds for every input** stays true when a number, or an expression in another letter, is put in place of its letter. For numbers $a \\ne 0$ and $b$, an equation for $f(ax + b)$ that holds for every $x$ fixes $f$ at every number $c$, since $ax + b = c$ at $x = \\dfrac{c - b}{a}$."
    },
    {
      "name": "Substituting a chosen input",
      "concrete": "With $f(1) = 11$ and $f(m + n) = f(m) + f(n) + 8mn$ for every pair of whole numbers $m$ and $n$ from $1$ up, the choice $m = 1$ and $n = 1$ brings in only the known value: $f(2) = 11 + 11 + 8 = 30$.",
      "general": "In an equation that holds for every input, an input is **chosen** so that the value wanted appears beside values already known: $0$ or $1$ where a term vanishes or a factor is $1$, the input that turns the expression inside $f$ into the number wanted, or $\\dfrac{1}{x}$ in place of $x$ when the equation holds both $f(x)$ and $f\\left(\\dfrac{1}{x}\\right)$ for every nonzero $x$."
    },
    {
      "name": "Experiment, find the pattern, prove it",
      "concrete": "With $f(1) = 16$ and $f(n + 1) = f(n) + 14n + 16$ for every whole number $n$ from $1$ up, the first values are $f(2) = 46$, $f(3) = 90$ and $f(4) = 148$, which are $1 \\cdot 16$, $2 \\cdot 23$, $3 \\cdot 30$ and $4 \\cdot 37$. The guess is $f(n) = n(7n + 9)$. It gives the first value, $f(1) = 1 \\cdot (7 + 9) = 16$, and it satisfies the equation for every $n$, since $(n + 1)(7n + 16) = 7n^2 + 23n + 16 = n(7n + 9) + 14n + 16$.",
      "general": "To find a function from an equation it satisfies: **experiment** by working out its first values from the equation, **find the pattern** they follow and write it as a formula, then **check** that the formula gives the first value and satisfies the equation for every input. The formula is then the function's only possible rule; induction, taught in a later topic, proves that."
    }
  ],
  "kinds": [
    {
      "id": "t161-k1",
      "forms": [
        {
          "example": {
            "problem": "Find every number $z$ with $f(z) = -2$, where $f\\left(\\dfrac{x}{4}\\right) = -2x^2 + 160x - 2050$ for every $x$.",
            "lines": [
              {
                "step": "Find every number $z$ with $f(z) = -2$, where $f\\left(\\dfrac{x}{4}\\right) = -2x^2 + 160x - 2050$ for every $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 4z$",
                "reason": "Substituting a chosen input: $\\dfrac{x}{4} = z$ when $x = 4z$, so this input puts $z$ into $f$."
              },
              {
                "step": "$f(z) = -2(4z)^2 + 160(4z) - 2050$",
                "reason": "An equation that holds for every input: it holds at $x = 4z$, where $\\dfrac{x}{4} = z$."
              },
              {
                "step": "$f(z) = -32z^2 + 640z - 2050$",
                "reason": "Power of a product: $(4z)^2 = 16z^2$, and each number multiplies out."
              },
              {
                "step": "$-32z^2 + 640z - 2050 = -2$",
                "reason": "Substituting a value: $f(z)$ is replaced by its rule in $f(z) = -2$."
              },
              {
                "step": "$-32z^2 + 640z - 2048 = 0$",
                "reason": "Adding the same number: $2$ is added to both sides."
              },
              {
                "step": "$z^2 - 20z + 64 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-32$."
              },
              {
                "step": "$(z - 4)(z - 16) = 0$",
                "reason": "Factoring a quadratic: the two numbers $-4$ and $-16$ have sum $-20$ and product $64$."
              },
              {
                "step": "The solutions are $z = 4$ and $z = 16$.",
                "reason": "Zero-product property: one of the two brackets is zero."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $z$ with $f(z) = 20$, where $f\\left(\\dfrac{x}{2}\\right) = 3x^2 + 18x - 2476$ for every $x$.",
              "form": "Answer as the solutions, as in z = -1, z = 3.",
              "answer": "z = -16, z = 13",
              "lines": [
                {
                  "step": "Find every number $z$ with $f(z) = 20$, where $f\\left(\\dfrac{x}{2}\\right) = 3x^2 + 18x - 2476$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 2z$",
                  "reason": "Substituting a chosen input: $\\dfrac{x}{2} = z$ when $x = 2z$, so this input puts $z$ into $f$."
                },
                {
                  "step": "$f(z) = 3(2z)^2 + 18(2z) - 2476$",
                  "reason": "An equation that holds for every input: it holds at $x = 2z$, where $\\dfrac{x}{2} = z$."
                },
                {
                  "step": "$f(z) = 12z^2 + 36z - 2476$",
                  "reason": "Power of a product: $(2z)^2 = 4z^2$, and each number multiplies out."
                },
                {
                  "step": "$12z^2 + 36z - 2476 = 20$",
                  "reason": "Substituting a value: $f(z)$ is replaced by its rule in $f(z) = 20$."
                },
                {
                  "step": "$12z^2 + 36z - 2496 = 0$",
                  "reason": "Adding the same number: $-20$ is added to both sides."
                },
                {
                  "step": "$z^2 + 3z - 208 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
                },
                {
                  "step": "$(z + 16)(z - 13) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $16$ and $-13$ have sum $3$ and product $-208$."
                },
                {
                  "step": "The solutions are $z = -16$ and $z = 13$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                }
              ]
            },
            {
              "prompt": "Find every number $z$ with $f(z) = 14$, where $f\\left(\\dfrac{x}{2}\\right) = 3x^2 - 66x - 946$ for every $x$.",
              "form": "Answer as the solutions, as in z = -1, z = 3.",
              "answer": "z = -5, z = 16",
              "lines": [
                {
                  "step": "Find every number $z$ with $f(z) = 14$, where $f\\left(\\dfrac{x}{2}\\right) = 3x^2 - 66x - 946$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 2z$",
                  "reason": "Substituting a chosen input: $\\dfrac{x}{2} = z$ when $x = 2z$, so this input puts $z$ into $f$."
                },
                {
                  "step": "$f(z) = 3(2z)^2 - 66(2z) - 946$",
                  "reason": "An equation that holds for every input: it holds at $x = 2z$, where $\\dfrac{x}{2} = z$."
                },
                {
                  "step": "$f(z) = 12z^2 - 132z - 946$",
                  "reason": "Power of a product: $(2z)^2 = 4z^2$, and each number multiplies out."
                },
                {
                  "step": "$12z^2 - 132z - 946 = 14$",
                  "reason": "Substituting a value: $f(z)$ is replaced by its rule in $f(z) = 14$."
                },
                {
                  "step": "$12z^2 - 132z - 960 = 0$",
                  "reason": "Adding the same number: $-14$ is added to both sides."
                },
                {
                  "step": "$z^2 - 11z - 80 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
                },
                {
                  "step": "$(z + 5)(z - 16) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $5$ and $-16$ have sum $-11$ and product $-80$."
                },
                {
                  "step": "The solutions are $z = -5$ and $z = 16$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                }
              ]
            },
            {
              "prompt": "Find every number $z$ with $f(z) = 4$, where $f\\left(\\dfrac{x}{2}\\right) = -4x^2 + 16x + 1012$ for every $x$.",
              "form": "Answer as the solutions, as in z = -1, z = 3.",
              "answer": "z = -7, z = 9",
              "lines": [
                {
                  "step": "Find every number $z$ with $f(z) = 4$, where $f\\left(\\dfrac{x}{2}\\right) = -4x^2 + 16x + 1012$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 2z$",
                  "reason": "Substituting a chosen input: $\\dfrac{x}{2} = z$ when $x = 2z$, so this input puts $z$ into $f$."
                },
                {
                  "step": "$f(z) = -4(2z)^2 + 16(2z) + 1012$",
                  "reason": "An equation that holds for every input: it holds at $x = 2z$, where $\\dfrac{x}{2} = z$."
                },
                {
                  "step": "$f(z) = -16z^2 + 32z + 1012$",
                  "reason": "Power of a product: $(2z)^2 = 4z^2$, and each number multiplies out."
                },
                {
                  "step": "$-16z^2 + 32z + 1012 = 4$",
                  "reason": "Substituting a value: $f(z)$ is replaced by its rule in $f(z) = 4$."
                },
                {
                  "step": "$-16z^2 + 32z + 1008 = 0$",
                  "reason": "Adding the same number: $-4$ is added to both sides."
                },
                {
                  "step": "$z^2 - 2z - 63 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-16$."
                },
                {
                  "step": "$(z + 7)(z - 9) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $7$ and $-9$ have sum $-2$ and product $-63$."
                },
                {
                  "step": "The solutions are $z = -7$ and $z = 9$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x)$, where $f(3x) = \\dfrac{-5x + 10}{8x + 12}$ for every $x$ except $x = -\\dfrac{3}{2}$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $f(3x) = \\dfrac{-5x + 10}{8x + 12}$ for every $x$ except $x = -\\dfrac{3}{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\dfrac{y}{3}$",
                "reason": "Substituting a chosen input: with $y = 3x$, this input puts $y$ into $f$."
              },
              {
                "step": "$f(y) = \\dfrac{-\\dfrac{5y}{3} + 10}{\\dfrac{8y}{3} + 12}$",
                "reason": "An equation that holds for every input: it holds at the $x$ of line 2, where $3x = y$."
              },
              {
                "step": "$f(y) = \\dfrac{-5y + 30}{8y + 36}$",
                "reason": "Complex fraction: top and bottom are multiplied by $3$, which clears the fractions inside."
              },
              {
                "step": "$f(x) = \\dfrac{-5x + 30}{8x + 36}$",
                "reason": "Dummy variable: the letter that names the input may be changed, so $y$ becomes $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $f(4x) = \\dfrac{5x - 9}{7x + 3}$ for every $x$ except $x = -\\dfrac{3}{7}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(5*x-36)/(7*x+12)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(4x) = \\dfrac{5x - 9}{7x + 3}$ for every $x$ except $x = -\\dfrac{3}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{y}{4}$",
                  "reason": "Substituting a chosen input: with $y = 4x$, this input puts $y$ into $f$."
                },
                {
                  "step": "$f(y) = \\dfrac{\\dfrac{5y}{4} - 9}{\\dfrac{7y}{4} + 3}$",
                  "reason": "An equation that holds for every input: it holds at the $x$ of line 2, where $4x = y$."
                },
                {
                  "step": "$f(y) = \\dfrac{5y - 36}{7y + 12}$",
                  "reason": "Complex fraction: top and bottom are multiplied by $4$, which clears the fractions inside."
                },
                {
                  "step": "$f(x) = \\dfrac{5x - 36}{7x + 12}$",
                  "reason": "Dummy variable: the letter that names the input may be changed, so $y$ becomes $x$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(5x) = \\dfrac{-3x - 9}{-7x - 8}$ for every $x$ except $x = -\\dfrac{8}{7}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*x+45)/(7*x+40)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(5x) = \\dfrac{-3x - 9}{-7x - 8}$ for every $x$ except $x = -\\dfrac{8}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{y}{5}$",
                  "reason": "Substituting a chosen input: with $y = 5x$, this input puts $y$ into $f$."
                },
                {
                  "step": "$f(y) = \\dfrac{-\\dfrac{3y}{5} - 9}{-\\dfrac{7y}{5} - 8}$",
                  "reason": "An equation that holds for every input: it holds at the $x$ of line 2, where $5x = y$."
                },
                {
                  "step": "$f(y) = \\dfrac{3y + 45}{7y + 40}$",
                  "reason": "Complex fraction: top and bottom are multiplied by $-5$, which clears the fractions inside."
                },
                {
                  "step": "$f(x) = \\dfrac{3x + 45}{7x + 40}$",
                  "reason": "Dummy variable: the letter that names the input may be changed, so $y$ becomes $x$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(3x) = \\dfrac{-8x + 5}{-5x - 15}$ for every $x$ except $x = -3$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(8*x-15)/(5*x+45)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(3x) = \\dfrac{-8x + 5}{-5x - 15}$ for every $x$ except $x = -3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{y}{3}$",
                  "reason": "Substituting a chosen input: with $y = 3x$, this input puts $y$ into $f$."
                },
                {
                  "step": "$f(y) = \\dfrac{-\\dfrac{8y}{3} + 5}{-\\dfrac{5y}{3} - 15}$",
                  "reason": "An equation that holds for every input: it holds at the $x$ of line 2, where $3x = y$."
                },
                {
                  "step": "$f(y) = \\dfrac{8y - 15}{5y + 45}$",
                  "reason": "Complex fraction: top and bottom are multiplied by $-3$, which clears the fractions inside."
                },
                {
                  "step": "$f(x) = \\dfrac{8x - 15}{5x + 45}$",
                  "reason": "Dummy variable: the letter that names the input may be changed, so $y$ becomes $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t161-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $f(-5)$, where $f(1) = 15$ and $yf(x) - xf(y) = 2xy(x - y)$ for every $x$ and $y$.",
            "lines": [
              {
                "step": "Find $f(-5)$, where $f(1) = 15$ and $yf(x) - xf(y) = 2xy(x - y)$ for every $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(-5) + 5f(1) = 60$",
                "reason": "Substituting a chosen input: $x = -5$ and $y = 1$ bring in the known value $f(1)$, and the right side becomes $2 \\cdot (-5) \\cdot (-6) = 60$."
              },
              {
                "step": "$f(-5) + 5 \\cdot 15 = 60$",
                "reason": "Substituting a value: $f(1)$ is replaced by $15$."
              },
              {
                "step": "$f(-5) = -15$",
                "reason": "Adding the same number: $-75$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-6)$, where $f(0) = -2$ and $f(x) - f(y) = (x - y)(-2x - 2y - 8)$ for every $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "-26",
              "lines": [
                {
                  "step": "Find $f(-6)$, where $f(0) = -2$ and $f(x) - f(y) = (x - y)(-2x - 2y - 8)$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-6) - f(0) = -24$",
                  "reason": "Substituting a chosen input: $x = -6$ and $y = 0$ bring in the known value $f(0)$, and the right side becomes $-6 \\cdot 4 = -24$."
                },
                {
                  "step": "$f(-6) - (-2) = -24$",
                  "reason": "Substituting a value: $f(0)$ is replaced by $-2$."
                },
                {
                  "step": "$f(-6) = -26$",
                  "reason": "Adding the same number: $-2$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $f(2)$, where $f(1) = -2$ and $yf(x) - xf(y) = 6xy(x - y)$ for every $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find $f(2)$, where $f(1) = -2$ and $yf(x) - xf(y) = 6xy(x - y)$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) - 2f(1) = 12$",
                  "reason": "Substituting a chosen input: $x = 2$ and $y = 1$ bring in the known value $f(1)$, and the right side becomes $6 \\cdot 2 \\cdot 1 = 12$."
                },
                {
                  "step": "$f(2) - 2 \\cdot (-2) = 12$",
                  "reason": "Substituting a value: $f(1)$ is replaced by $-2$."
                },
                {
                  "step": "$f(2) = 8$",
                  "reason": "Adding the same number: $-4$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $f(-2)$, where $f(0) = 11$ and $f(x) - f(y) = (x - y)(-4x - 4y - 7)$ for every $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find $f(-2)$, where $f(0) = 11$ and $f(x) - f(y) = (x - y)(-4x - 4y - 7)$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-2) - f(0) = -2$",
                  "reason": "Substituting a chosen input: $x = -2$ and $y = 0$ bring in the known value $f(0)$, and the right side becomes $-2 \\cdot 1 = -2$."
                },
                {
                  "step": "$f(-2) - 11 = -2$",
                  "reason": "Substituting a value: $f(0)$ is replaced by $11$."
                },
                {
                  "step": "$f(-2) = 9$",
                  "reason": "Adding the same number: $11$ is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(6)$, where $f(1) = -13$ and $f(m + n) = f(m) + f(n) + 13mn$ for every pair of whole numbers $m$ and $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find $f(6)$, where $f(1) = -13$ and $f(m + n) = f(m) + f(n) + 13mn$ for every pair of whole numbers $m$ and $n$ from $1$ up.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(2) = f(1) + f(1) + 13 \\cdot 1 \\cdot 1 = -13 - 13 + 13 = -13$",
                "reason": "Substituting a chosen input: $m = 1$ and $n = 1$, two inputs whose values are known."
              },
              {
                "step": "$f(3) = f(2) + f(1) + 13 \\cdot 2 \\cdot 1 = -13 - 13 + 26 = 0$",
                "reason": "Substituting a chosen input: $m = 2$ and $n = 1$, two inputs whose values are known."
              },
              {
                "step": "$f(6) = f(3) + f(3) + 13 \\cdot 3 \\cdot 3 = 0 + 0 + 117 = 117$",
                "reason": "Substituting a chosen input: $m = 3$ and $n = 3$, two inputs whose values are known."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(196)$, where $f(7) = -28$, $f(2) = -32$ and $f(mn) = f(m) + f(n) - 9$ for every pair of whole numbers $m$ and $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "-147",
              "lines": [
                {
                  "step": "Find $f(196)$, where $f(7) = -28$, $f(2) = -32$ and $f(mn) = f(m) + f(n) - 9$ for every pair of whole numbers $m$ and $n$ from $1$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(14) = f(7) + f(2) - 9 = -28 - 32 - 9 = -69$",
                  "reason": "Substituting a chosen input: $m = 7$ and $n = 2$, two inputs whose values are known."
                },
                {
                  "step": "$f(98) = f(7) + f(14) - 9 = -28 - 69 - 9 = -106$",
                  "reason": "Substituting a chosen input: $m = 7$ and $n = 14$, two inputs whose values are known."
                },
                {
                  "step": "$f(196) = f(2) + f(98) - 9 = -32 - 106 - 9 = -147$",
                  "reason": "Substituting a chosen input: $m = 2$ and $n = 98$, two inputs whose values are known."
                }
              ]
            },
            {
              "prompt": "Find $f(24)$, where $f(2) = 15$, $f(3) = -20$ and $f(mn) = nf(m) + mf(n)$ for every pair of whole numbers $m$ and $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "380",
              "lines": [
                {
                  "step": "Find $f(24)$, where $f(2) = 15$, $f(3) = -20$ and $f(mn) = nf(m) + mf(n)$ for every pair of whole numbers $m$ and $n$ from $1$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(6) = 3f(2) + 2f(3) = 3 \\cdot 15 + 2 \\cdot (-20) = 5$",
                  "reason": "Substituting a chosen input: $m = 2$ and $n = 3$, two inputs whose values are known."
                },
                {
                  "step": "$f(12) = 6f(2) + 2f(6) = 6 \\cdot 15 + 2 \\cdot 5 = 100$",
                  "reason": "Substituting a chosen input: $m = 2$ and $n = 6$, two inputs whose values are known."
                },
                {
                  "step": "$f(24) = 12f(2) + 2f(12) = 12 \\cdot 15 + 2 \\cdot 100 = 380$",
                  "reason": "Substituting a chosen input: $m = 2$ and $n = 12$, two inputs whose values are known."
                }
              ]
            },
            {
              "prompt": "Find $f(5)$, where $f(1) = 33$ and $f(m + n) = f(m) + f(n) + 3mn$ for every pair of whole numbers $m$ and $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "195",
              "lines": [
                {
                  "step": "Find $f(5)$, where $f(1) = 33$ and $f(m + n) = f(m) + f(n) + 3mn$ for every pair of whole numbers $m$ and $n$ from $1$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) = f(1) + f(1) + 3 \\cdot 1 \\cdot 1 = 33 + 33 + 3 = 69$",
                  "reason": "Substituting a chosen input: $m = 1$ and $n = 1$, two inputs whose values are known."
                },
                {
                  "step": "$f(3) = f(2) + f(1) + 3 \\cdot 2 \\cdot 1 = 69 + 33 + 6 = 108$",
                  "reason": "Substituting a chosen input: $m = 2$ and $n = 1$, two inputs whose values are known."
                },
                {
                  "step": "$f(5) = f(3) + f(2) + 3 \\cdot 3 \\cdot 2 = 108 + 69 + 18 = 195$",
                  "reason": "Substituting a chosen input: $m = 3$ and $n = 2$, two inputs whose values are known."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(5)$, where $-5f(x) - 7f\\left(\\dfrac{1}{x}\\right) = -15x - 6$ for every nonzero $x$.",
            "lines": [
              {
                "step": "Find $f(5)$, where $-5f(x) - 7f\\left(\\dfrac{1}{x}\\right) = -15x - 6$ for every nonzero $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-5f(5) - 7f\\left(\\dfrac{1}{5}\\right) = -81$",
                "reason": "Substituting a chosen input: $x = 5$, and the right side becomes $-15 \\cdot 5 - 6 = -81$."
              },
              {
                "step": "$-5f\\left(\\dfrac{1}{5}\\right) - 7f(5) = -9$",
                "reason": "Substituting a chosen input: $x = \\dfrac{1}{5}$, whose reciprocal is $5$, so $f(5)$ appears again."
              },
              {
                "step": "$25f(5) + 35f\\left(\\dfrac{1}{5}\\right) = 405$",
                "reason": "Multiplying both sides by the same number: line 2 is multiplied by $-5$."
              },
              {
                "step": "$49f(5) + 35f\\left(\\dfrac{1}{5}\\right) = 63$",
                "reason": "Multiplying both sides by the same number: line 3 is multiplied by $-7$."
              },
              {
                "step": "$-24f(5) = 342$",
                "reason": "Elimination: line 5 is taken from line 4, so the terms in $f\\left(\\dfrac{1}{5}\\right)$ cancel."
              },
              {
                "step": "$f(5) = -\\dfrac{57}{4}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-24$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-4)$, where $-7f(x) - 5f\\left(\\dfrac{1}{x}\\right) = 6x - 16$ for every nonzero $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "385/48",
              "lines": [
                {
                  "step": "Find $f(-4)$, where $-7f(x) - 5f\\left(\\dfrac{1}{x}\\right) = 6x - 16$ for every nonzero $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-7f(-4) - 5f\\left(-\\dfrac{1}{4}\\right) = -40$",
                  "reason": "Substituting a chosen input: $x = -4$, and the right side becomes $6 \\cdot (-4) - 16 = -40$."
                },
                {
                  "step": "$-7f\\left(-\\dfrac{1}{4}\\right) - 5f(-4) = -\\dfrac{35}{2}$",
                  "reason": "Substituting a chosen input: $x = -\\dfrac{1}{4}$, whose reciprocal is $-4$, so $f(-4)$ appears again."
                },
                {
                  "step": "$49f(-4) + 35f\\left(-\\dfrac{1}{4}\\right) = 280$",
                  "reason": "Multiplying both sides by the same number: line 2 is multiplied by $-7$."
                },
                {
                  "step": "$25f(-4) + 35f\\left(-\\dfrac{1}{4}\\right) = \\dfrac{175}{2}$",
                  "reason": "Multiplying both sides by the same number: line 3 is multiplied by $-5$."
                },
                {
                  "step": "$24f(-4) = \\dfrac{385}{2}$",
                  "reason": "Elimination: line 5 is taken from line 4, so the terms in $f\\left(-\\dfrac{1}{4}\\right)$ cancel."
                },
                {
                  "step": "$f(-4) = \\dfrac{385}{48}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $24$."
                }
              ]
            },
            {
              "prompt": "Find $f(-2)$, where $-3f(x) + 7f\\left(\\dfrac{1}{x}\\right) = 13x - 19$ for every nonzero $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-627/80",
              "lines": [
                {
                  "step": "Find $f(-2)$, where $-3f(x) + 7f\\left(\\dfrac{1}{x}\\right) = 13x - 19$ for every nonzero $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3f(-2) + 7f\\left(-\\dfrac{1}{2}\\right) = -45$",
                  "reason": "Substituting a chosen input: $x = -2$, and the right side becomes $13 \\cdot (-2) - 19 = -45$."
                },
                {
                  "step": "$-3f\\left(-\\dfrac{1}{2}\\right) + 7f(-2) = -\\dfrac{51}{2}$",
                  "reason": "Substituting a chosen input: $x = -\\dfrac{1}{2}$, whose reciprocal is $-2$, so $f(-2)$ appears again."
                },
                {
                  "step": "$9f(-2) - 21f\\left(-\\dfrac{1}{2}\\right) = 135$",
                  "reason": "Multiplying both sides by the same number: line 2 is multiplied by $-3$."
                },
                {
                  "step": "$49f(-2) - 21f\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{357}{2}$",
                  "reason": "Multiplying both sides by the same number: line 3 is multiplied by $7$."
                },
                {
                  "step": "$-40f(-2) = \\dfrac{627}{2}$",
                  "reason": "Elimination: line 5 is taken from line 4, so the terms in $f\\left(-\\dfrac{1}{2}\\right)$ cancel."
                },
                {
                  "step": "$f(-2) = -\\dfrac{627}{80}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-40$."
                }
              ]
            },
            {
              "prompt": "Find $f(5)$, where $-8f(x) + 4f\\left(\\dfrac{1}{x}\\right) = 11x - 3$ for every nonzero $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-43/5",
              "lines": [
                {
                  "step": "Find $f(5)$, where $-8f(x) + 4f\\left(\\dfrac{1}{x}\\right) = 11x - 3$ for every nonzero $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-8f(5) + 4f\\left(\\dfrac{1}{5}\\right) = 52$",
                  "reason": "Substituting a chosen input: $x = 5$, and the right side becomes $11 \\cdot 5 - 3 = 52$."
                },
                {
                  "step": "$-8f\\left(\\dfrac{1}{5}\\right) + 4f(5) = -\\dfrac{4}{5}$",
                  "reason": "Substituting a chosen input: $x = \\dfrac{1}{5}$, whose reciprocal is $5$, so $f(5)$ appears again."
                },
                {
                  "step": "$64f(5) - 32f\\left(\\dfrac{1}{5}\\right) = -416$",
                  "reason": "Multiplying both sides by the same number: line 2 is multiplied by $-8$."
                },
                {
                  "step": "$16f(5) - 32f\\left(\\dfrac{1}{5}\\right) = -\\dfrac{16}{5}$",
                  "reason": "Multiplying both sides by the same number: line 3 is multiplied by $4$."
                },
                {
                  "step": "$48f(5) = -\\dfrac{2064}{5}$",
                  "reason": "Elimination: line 5 is taken from line 4, so the terms in $f\\left(\\dfrac{1}{5}\\right)$ cancel."
                },
                {
                  "step": "$f(5) = -\\dfrac{43}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $48$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t161-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the first whole number of minutes after noon at which the first tank holds at least three times as many litres as the second, where the first tank starts with 79 litres and gains 7 litres a minute, the second starts with 334 litres and loses 7 litres a minute, with $f(x)$ and $g(x)$ the litres in the two tanks $x$ minutes after noon.",
            "lines": [
              {
                "step": "Find the first whole number of minutes after noon at which the first tank holds at least three times as many litres as the second, where the first tank starts with 79 litres and gains 7 litres a minute, the second starts with 334 litres and loses 7 litres a minute, with $f(x)$ and $g(x)$ the litres in the two tanks $x$ minutes after noon.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = 79 + 7x$",
                "reason": "Writing a sentence as an equation: the first amount starts at $79$ and rises by $7$ each minute."
              },
              {
                "step": "$g(x) = 334 - 7x$",
                "reason": "Writing a sentence as an equation: the second amount starts at $334$ and falls by $7$ each minute."
              },
              {
                "step": "$79 + 7x \\ge 3(334 - 7x)$",
                "reason": "Substituting a value: the two rules go into $f(x) \\ge 3g(x)$."
              },
              {
                "step": "$79 + 7x \\ge 1002 - 21x$",
                "reason": "Multiplying out: $3$ multiplies each term inside the bracket."
              },
              {
                "step": "$28x \\ge 923$",
                "reason": "Adding the same number: $21x$ and $-79$ are added to both sides."
              },
              {
                "step": "$x \\ge \\dfrac{923}{28}$",
                "reason": "Multiplying by a positive number: both sides are divided by $28$, which is positive, so the sign stays."
              },
              {
                "step": "The first whole number is $33$.",
                "reason": "Answering the question asked: $33$ is the least whole number with $x \\ge \\dfrac{923}{28}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first whole number of weeks after the start of the year at which Mira has more than twice as many euros as Teo has, where Mira starts with 15 euros and saves 2 euros a week, and Teo starts with 777 euros and spends 8 euros a week, with $f(x)$ and $g(x)$ the euros Mira and Teo have $x$ weeks after the start of the year.",
              "form": "Answer as an integer.",
              "answer": "86",
              "lines": [
                {
                  "step": "Find the first whole number of weeks after the start of the year at which Mira has more than twice as many euros as Teo has, where Mira starts with 15 euros and saves 2 euros a week, and Teo starts with 777 euros and spends 8 euros a week, with $f(x)$ and $g(x)$ the euros Mira and Teo have $x$ weeks after the start of the year.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 15 + 2x$",
                  "reason": "Writing a sentence as an equation: the first amount starts at $15$ and rises by $2$ each week."
                },
                {
                  "step": "$g(x) = 777 - 8x$",
                  "reason": "Writing a sentence as an equation: the second amount starts at $777$ and falls by $8$ each week."
                },
                {
                  "step": "$15 + 2x > 2(777 - 8x)$",
                  "reason": "Substituting a value: the two rules go into $f(x) > 2g(x)$."
                },
                {
                  "step": "$15 + 2x > 1554 - 16x$",
                  "reason": "Multiplying out: $2$ multiplies each term inside the bracket."
                },
                {
                  "step": "$18x > 1539$",
                  "reason": "Adding the same number: $16x$ and $-15$ are added to both sides."
                },
                {
                  "step": "$x > \\dfrac{171}{2}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $18$, which is positive, so the sign stays."
                },
                {
                  "step": "The first whole number is $86$.",
                  "reason": "Answering the question asked: $86$ is the least whole number with $x > \\dfrac{171}{2}$."
                }
              ]
            },
            {
              "prompt": "Find the first whole number of hours after sunset at which the queue at the north gate is at least twice as long as the queue at the south gate, where the north queue starts at 12 people and grows by 7 people an hour, and the south queue starts at 585 people and shrinks by 7 people an hour, with $f(x)$ and $g(x)$ the lengths of the north and south queues $x$ hours after sunset.",
              "form": "Answer as an integer.",
              "answer": "56",
              "lines": [
                {
                  "step": "Find the first whole number of hours after sunset at which the queue at the north gate is at least twice as long as the queue at the south gate, where the north queue starts at 12 people and grows by 7 people an hour, and the south queue starts at 585 people and shrinks by 7 people an hour, with $f(x)$ and $g(x)$ the lengths of the north and south queues $x$ hours after sunset.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 12 + 7x$",
                  "reason": "Writing a sentence as an equation: the first amount starts at $12$ and rises by $7$ each hour."
                },
                {
                  "step": "$g(x) = 585 - 7x$",
                  "reason": "Writing a sentence as an equation: the second amount starts at $585$ and falls by $7$ each hour."
                },
                {
                  "step": "$12 + 7x \\ge 2(585 - 7x)$",
                  "reason": "Substituting a value: the two rules go into $f(x) \\ge 2g(x)$."
                },
                {
                  "step": "$12 + 7x \\ge 1170 - 14x$",
                  "reason": "Multiplying out: $2$ multiplies each term inside the bracket."
                },
                {
                  "step": "$21x \\ge 1158$",
                  "reason": "Adding the same number: $14x$ and $-12$ are added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{386}{7}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $21$, which is positive, so the sign stays."
                },
                {
                  "step": "The first whole number is $56$.",
                  "reason": "Answering the question asked: $56$ is the least whole number with $x \\ge \\dfrac{386}{7}$."
                }
              ]
            },
            {
              "prompt": "Find the first whole number of minutes after noon at which the first tank holds more than four times as many litres as the second, where the first tank starts with 46 litres and gains 3 litres a minute, the second starts with 815 litres and loses 5 litres a minute, with $f(x)$ and $g(x)$ the litres in the two tanks $x$ minutes after noon.",
              "form": "Answer as an integer.",
              "answer": "140",
              "lines": [
                {
                  "step": "Find the first whole number of minutes after noon at which the first tank holds more than four times as many litres as the second, where the first tank starts with 46 litres and gains 3 litres a minute, the second starts with 815 litres and loses 5 litres a minute, with $f(x)$ and $g(x)$ the litres in the two tanks $x$ minutes after noon.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 46 + 3x$",
                  "reason": "Writing a sentence as an equation: the first amount starts at $46$ and rises by $3$ each minute."
                },
                {
                  "step": "$g(x) = 815 - 5x$",
                  "reason": "Writing a sentence as an equation: the second amount starts at $815$ and falls by $5$ each minute."
                },
                {
                  "step": "$46 + 3x > 4(815 - 5x)$",
                  "reason": "Substituting a value: the two rules go into $f(x) > 4g(x)$."
                },
                {
                  "step": "$46 + 3x > 3260 - 20x$",
                  "reason": "Multiplying out: $4$ multiplies each term inside the bracket."
                },
                {
                  "step": "$23x > 3214$",
                  "reason": "Adding the same number: $20x$ and $-46$ are added to both sides."
                },
                {
                  "step": "$x > \\dfrac{3214}{23}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $23$, which is positive, so the sign stays."
                },
                {
                  "step": "The first whole number is $140$.",
                  "reason": "Answering the question asked: $140$ is the least whole number with $x > \\dfrac{3214}{23}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of minutes after the blue pump starts at which the blue pump has pumped three times as much as the red pump, where the red pump fills a pool at 4 litres a minute, the blue pump starts on a second pool 10 minutes later and fills it at 18 litres a minute, and $f(x)$ and $g(x)$ are the litres the red pump and the blue pump have pumped $x$ minutes after the blue pump starts.",
            "lines": [
              {
                "step": "Find the number of minutes after the blue pump starts at which the blue pump has pumped three times as much as the red pump, where the red pump fills a pool at 4 litres a minute, the blue pump starts on a second pool 10 minutes later and fills it at 18 litres a minute, and $f(x)$ and $g(x)$ are the litres the red pump and the blue pump have pumped $x$ minutes after the blue pump starts.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = 4(x + 10)$",
                "reason": "Writing a sentence as an equation: the first started $10$ minutes earlier, so it has had $x + 10$ minutes at $4$ each."
              },
              {
                "step": "$g(x) = 18x$",
                "reason": "Writing a sentence as an equation: the second has had $x$ minutes at $18$ each."
              },
              {
                "step": "$18x = 3 \\cdot 4(x + 10)$",
                "reason": "Substituting a value: the two rules go into $g(x) = 3f(x)$."
              },
              {
                "step": "$18x = 12x + 120$",
                "reason": "Multiplying out: $12$ multiplies each term inside the bracket."
              },
              {
                "step": "$6x = 120$",
                "reason": "Adding the same number: $-12x$ is added to both sides."
              },
              {
                "step": "$x = 20$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of seconds after Paul starts at which Paul has cycled three times as much as Ines, where Ines cycles at 7 metres a second, Paul starts from the same point 43 seconds later and cycles at 28 metres a second, and $f(x)$ and $g(x)$ are the metres Ines and Paul have cycled $x$ seconds after Paul starts.",
              "form": "Answer as an integer.",
              "answer": "129",
              "lines": [
                {
                  "step": "Find the number of seconds after Paul starts at which Paul has cycled three times as much as Ines, where Ines cycles at 7 metres a second, Paul starts from the same point 43 seconds later and cycles at 28 metres a second, and $f(x)$ and $g(x)$ are the metres Ines and Paul have cycled $x$ seconds after Paul starts.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 7(x + 43)$",
                  "reason": "Writing a sentence as an equation: the first started $43$ seconds earlier, so it has had $x + 43$ seconds at $7$ each."
                },
                {
                  "step": "$g(x) = 28x$",
                  "reason": "Writing a sentence as an equation: the second has had $x$ seconds at $28$ each."
                },
                {
                  "step": "$28x = 3 \\cdot 7(x + 43)$",
                  "reason": "Substituting a value: the two rules go into $g(x) = 3f(x)$."
                },
                {
                  "step": "$28x = 21x + 903$",
                  "reason": "Multiplying out: $21$ multiplies each term inside the bracket."
                },
                {
                  "step": "$7x = 903$",
                  "reason": "Adding the same number: $-21x$ is added to both sides."
                },
                {
                  "step": "$x = 129$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            },
            {
              "prompt": "Find the number of seconds after Omar starts at which Omar has run twice as much as Lena, where Lena runs at 8 metres a second, Omar starts from the same point 26 seconds later and runs at 18 metres a second, and $f(x)$ and $g(x)$ are the metres Lena and Omar have run $x$ seconds after Omar starts.",
              "form": "Answer as an integer.",
              "answer": "208",
              "lines": [
                {
                  "step": "Find the number of seconds after Omar starts at which Omar has run twice as much as Lena, where Lena runs at 8 metres a second, Omar starts from the same point 26 seconds later and runs at 18 metres a second, and $f(x)$ and $g(x)$ are the metres Lena and Omar have run $x$ seconds after Omar starts.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 8(x + 26)$",
                  "reason": "Writing a sentence as an equation: the first started $26$ seconds earlier, so it has had $x + 26$ seconds at $8$ each."
                },
                {
                  "step": "$g(x) = 18x$",
                  "reason": "Writing a sentence as an equation: the second has had $x$ seconds at $18$ each."
                },
                {
                  "step": "$18x = 2 \\cdot 8(x + 26)$",
                  "reason": "Substituting a value: the two rules go into $g(x) = 2f(x)$."
                },
                {
                  "step": "$18x = 16x + 416$",
                  "reason": "Multiplying out: $16$ multiplies each term inside the bracket."
                },
                {
                  "step": "$2x = 416$",
                  "reason": "Adding the same number: $-16x$ is added to both sides."
                },
                {
                  "step": "$x = 208$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find the number of minutes after the blue pump starts at which the blue pump has pumped twice as much as the red pump, where the red pump fills a pool at 6 litres a minute, the blue pump starts on a second pool 30 minutes later and fills it at 14 litres a minute, and $f(x)$ and $g(x)$ are the litres the red pump and the blue pump have pumped $x$ minutes after the blue pump starts.",
              "form": "Answer as an integer.",
              "answer": "180",
              "lines": [
                {
                  "step": "Find the number of minutes after the blue pump starts at which the blue pump has pumped twice as much as the red pump, where the red pump fills a pool at 6 litres a minute, the blue pump starts on a second pool 30 minutes later and fills it at 14 litres a minute, and $f(x)$ and $g(x)$ are the litres the red pump and the blue pump have pumped $x$ minutes after the blue pump starts.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 6(x + 30)$",
                  "reason": "Writing a sentence as an equation: the first started $30$ minutes earlier, so it has had $x + 30$ minutes at $6$ each."
                },
                {
                  "step": "$g(x) = 14x$",
                  "reason": "Writing a sentence as an equation: the second has had $x$ minutes at $14$ each."
                },
                {
                  "step": "$14x = 2 \\cdot 6(x + 30)$",
                  "reason": "Substituting a value: the two rules go into $g(x) = 2f(x)$."
                },
                {
                  "step": "$14x = 12x + 360$",
                  "reason": "Multiplying out: $12$ multiplies each term inside the bracket."
                },
                {
                  "step": "$2x = 360$",
                  "reason": "Adding the same number: $-12x$ is added to both sides."
                },
                {
                  "step": "$x = 180$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t161-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(3) + f(-2) + f(1)$, where $f\\left(\\dfrac{x}{2}\\right) = 4x^2 + 9x - 7$ for every $x$, and write that line right.",
            "given": [
              "$f(3) = 4(6)^2 + 9(6) - 7 = 191$",
              "$f(-2) = 4(-4)^2 + 9(-4) - 7 = 21$",
              "$f(1) = 4(1)^2 + 9(1) - 7 = 6$",
              "$f(3) + f(-2) + f(1) = 191 + 21 + 6 = 218$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(3) + f(-2) + f(1)$, where $f\\left(\\dfrac{x}{2}\\right) = 4x^2 + 9x - 7$ for every $x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 puts $1$ where $x$ stands, as if the rule were the rule for $f(x)$.",
                "reason": "An equation that holds for every input: the rule gives $f$ at $\\dfrac{x}{2}$, so $f(1)$ needs the $x$ with $\\dfrac{x}{2} = 1$, which is $x = 2$."
              },
              {
                "step": "Line 3 written right is $f(1) = 4(2)^2 + 9(2) - 7 = 27$.",
                "reason": "Substituting a chosen input: at $x = 2$ the number inside $f$ is $1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f(-3) + f(-2) + f(-4)$, where $f\\left(\\dfrac{x}{3}\\right) = -2x^2 - 8x - 1$ for every $x$, and write that line right.",
              "given": [
                "$f(-3) = -2(-3)^2 - 8(-3) - 1 = 5$",
                "$f(-2) = -2(-6)^2 - 8(-6) - 1 = -25$",
                "$f(-4) = -2(-12)^2 - 8(-12) - 1 = -193$",
                "$f(-3) + f(-2) + f(-4) = 5 - 25 - 193 = -213$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: f(-3) = -91",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(-3) + f(-2) + f(-4)$, where $f\\left(\\dfrac{x}{3}\\right) = -2x^2 - 8x - 1$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 puts $-3$ where $x$ stands, as if the rule were the rule for $f(x)$.",
                  "reason": "An equation that holds for every input: the rule gives $f$ at $\\dfrac{x}{3}$, so $f(-3)$ needs the $x$ with $\\dfrac{x}{3} = -3$, which is $x = -9$."
                },
                {
                  "step": "Line 1 written right is $f(-3) = -2(-9)^2 - 8(-9) - 1 = -91$.",
                  "reason": "Substituting a chosen input: at $x = -9$ the number inside $f$ is $-3$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(2) + f(1) + f(-3)$, where $f\\left(\\dfrac{x}{3}\\right) = -4x^2 - 9x - 11$ for every $x$, and write that line right.",
              "given": [
                "$f(2) = -4(6)^2 - 9(6) - 11 = -209$",
                "$f(1) = -4(1)^2 - 9(1) - 11 = -24$",
                "$f(-3) = -4(-9)^2 - 9(-9) - 11 = -254$",
                "$f(2) + f(1) + f(-3) = -209 - 24 - 254 = -487$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(1) = -74",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(2) + f(1) + f(-3)$, where $f\\left(\\dfrac{x}{3}\\right) = -4x^2 - 9x - 11$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 puts $1$ where $x$ stands, as if the rule were the rule for $f(x)$.",
                  "reason": "An equation that holds for every input: the rule gives $f$ at $\\dfrac{x}{3}$, so $f(1)$ needs the $x$ with $\\dfrac{x}{3} = 1$, which is $x = 3$."
                },
                {
                  "step": "Line 2 written right is $f(1) = -4(3)^2 - 9(3) - 11 = -74$.",
                  "reason": "Substituting a chosen input: at $x = 3$ the number inside $f$ is $1$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(1) + f(-4) + f(-1)$, where $f\\left(\\dfrac{x}{3}\\right) = -4x^2 - 6x - 1$ for every $x$, and write that line right.",
              "given": [
                "$f(1) = -4(3)^2 - 6(3) - 1 = -55$",
                "$f(-4) = -4(-12)^2 - 6(-12) - 1 = -505$",
                "$f(-1) = -4(-1)^2 - 6(-1) - 1 = 1$",
                "$f(1) + f(-4) + f(-1) = -55 - 505 + 1 = -559$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(-1) = -19",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(1) + f(-4) + f(-1)$, where $f\\left(\\dfrac{x}{3}\\right) = -4x^2 - 6x - 1$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 puts $-1$ where $x$ stands, as if the rule were the rule for $f(x)$.",
                  "reason": "An equation that holds for every input: the rule gives $f$ at $\\dfrac{x}{3}$, so $f(-1)$ needs the $x$ with $\\dfrac{x}{3} = -1$, which is $x = -3$."
                },
                {
                  "step": "Line 3 written right is $f(-1) = -4(-3)^2 - 6(-3) - 1 = -19$.",
                  "reason": "Substituting a chosen input: at $x = -3$ the number inside $f$ is $-1$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(-2) + f(-3) + f(-1)$, where $f\\left(\\dfrac{x}{2}\\right) = -4x^2 - 7x - 12$ for every $x$, and write that line right.",
            "given": [
              "$f(-2) = -4(-4)^2 - 7(-4) - 12 = 64 + 28 - 12 = 80$",
              "$f(-3) = -4(-6)^2 - 7(-6) - 12 = -144 + 42 - 12 = -114$",
              "$f(-1) = -4(-2)^2 - 7(-2) - 12 = -16 + 14 - 12 = -14$",
              "$f(-2) + f(-3) + f(-1) = 80 - 114 - 14 = -48$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(-2) + f(-3) + f(-1)$, where $f\\left(\\dfrac{x}{2}\\right) = -4x^2 - 7x - 12$ for every $x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 takes $(-4)^2$ as $-16$, so the term $-4(-4)^2$ comes out as $64$.",
                "reason": "Sign of a power of a negative number: an even power of a negative number is positive, so $(-4)^2 = 16$."
              },
              {
                "step": "Line 1 written right is $f(-2) = -4(-4)^2 - 7(-4) - 12 = -64 + 28 - 12 = -48$.",
                "reason": "An equation that holds for every input: at $x = -4$ the number inside $f$ is $-2$, and the term is $-4 \\cdot 16 = -64$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f(-1) + f(-3) + f(1)$, where $f\\left(\\dfrac{x}{3}\\right) = -3x^2 + 3x - 8$ for every $x$, and write that line right.",
              "given": [
                "$f(-1) = -3(-3)^2 + 3(-3) - 8 = -27 - 9 - 8 = -44$",
                "$f(-3) = -3(-9)^2 + 3(-9) - 8 = 243 - 27 - 8 = 208$",
                "$f(1) = -3(3)^2 + 3(3) - 8 = -27 + 9 - 8 = -26$",
                "$f(-1) + f(-3) + f(1) = -44 + 208 - 26 = 138$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(-3) = -278",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(-1) + f(-3) + f(1)$, where $f\\left(\\dfrac{x}{3}\\right) = -3x^2 + 3x - 8$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $(-9)^2$ as $-81$, so the term $-3(-9)^2$ comes out as $243$.",
                  "reason": "Sign of a power of a negative number: an even power of a negative number is positive, so $(-9)^2 = 81$."
                },
                {
                  "step": "Line 2 written right is $f(-3) = -3(-9)^2 + 3(-9) - 8 = -243 - 27 - 8 = -278$.",
                  "reason": "An equation that holds for every input: at $x = -9$ the number inside $f$ is $-3$, and the term is $-3 \\cdot 81 = -243$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(2) + f(-4) + f(-1)$, where $f\\left(\\dfrac{x}{3}\\right) = 3x^2 + 7x + 7$ for every $x$, and write that line right.",
              "given": [
                "$f(2) = 3(6)^2 + 7(6) + 7 = 108 + 42 + 7 = 157$",
                "$f(-4) = 3(-12)^2 + 7(-12) + 7 = 432 - 84 + 7 = 355$",
                "$f(-1) = 3(-3)^2 + 7(-3) + 7 = -27 - 21 + 7 = -41$",
                "$f(2) + f(-4) + f(-1) = 157 + 355 - 41 = 471$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(-1) = 13",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(2) + f(-4) + f(-1)$, where $f\\left(\\dfrac{x}{3}\\right) = 3x^2 + 7x + 7$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $(-3)^2$ as $-9$, so the term $3(-3)^2$ comes out as $-27$.",
                  "reason": "Sign of a power of a negative number: an even power of a negative number is positive, so $(-3)^2 = 9$."
                },
                {
                  "step": "Line 3 written right is $f(-1) = 3(-3)^2 + 7(-3) + 7 = 27 - 21 + 7 = 13$.",
                  "reason": "An equation that holds for every input: at $x = -3$ the number inside $f$ is $-1$, and the term is $3 \\cdot 9 = 27$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(-1) + f(3) + f(-4)$, where $f\\left(\\dfrac{x}{2}\\right) = 2x^2 - 4x - 9$ for every $x$, and write that line right.",
              "given": [
                "$f(-1) = 2(-2)^2 - 4(-2) - 9 = -8 + 8 - 9 = -9$",
                "$f(3) = 2(6)^2 - 4(6) - 9 = 72 - 24 - 9 = 39$",
                "$f(-4) = 2(-8)^2 - 4(-8) - 9 = 128 + 32 - 9 = 151$",
                "$f(-1) + f(3) + f(-4) = -9 + 39 + 151 = 181$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: f(-1) = 7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(-1) + f(3) + f(-4)$, where $f\\left(\\dfrac{x}{2}\\right) = 2x^2 - 4x - 9$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 takes $(-2)^2$ as $-4$, so the term $2(-2)^2$ comes out as $-8$.",
                  "reason": "Sign of a power of a negative number: an even power of a negative number is positive, so $(-2)^2 = 4$."
                },
                {
                  "step": "Line 1 written right is $f(-1) = 2(-2)^2 - 4(-2) - 9 = 8 + 8 - 9 = 7$.",
                  "reason": "An equation that holds for every input: at $x = -2$ the number inside $f$ is $-1$, and the term is $2 \\cdot 4 = 8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t161-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the difference $x - y$ is the difference of its values at $x$ and at $y$, all divided by 18.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the difference $x - y$ is the difference of its values at $x$ and at $y$, all divided by 18.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The value at the difference is $f(x - y)$.",
                "reason": "Writing a sentence as an equation: the value of $f$ at the input $x - y$."
              },
              {
                "step": "The difference of the values is $f(x) - f(y)$.",
                "reason": "Writing a sentence as an equation: the value at $y$ is taken from the value at $x$."
              },
              {
                "step": "$f(x - y) = \\dfrac{f(x) - f(y)}{18}$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes, and all divided by 18 puts the whole difference over $18$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the sum of two numbers $x$ and $y$ is 16 more than the sum of its values at $x$ and at $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x+y) = f(x)+f(y)+16",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the sum of two numbers $x$ and $y$ is 16 more than the sum of its values at $x$ and at $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value at the sum is $f(x + y)$.",
                  "reason": "Writing a sentence as an equation: the value of $f$ at the sum $x + y$."
                },
                {
                  "step": "The sum of the values is $f(x) + f(y)$.",
                  "reason": "Writing a sentence as an equation: the values at $x$ and at $y$ are added."
                },
                {
                  "step": "$f(x + y) = f(x) + f(y) + 16$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes, and 16 more means $16$ is added."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the product of $x$ and $y$ is 21 times the product of its values at $x$ and at $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x*y) = 21*f(x)*f(y)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the product of $x$ and $y$ is 21 times the product of its values at $x$ and at $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value at the product is $f(xy)$.",
                  "reason": "Writing a sentence as an equation: the value of $f$ at the product $xy$."
                },
                {
                  "step": "The product of the values is $f(x)f(y)$.",
                  "reason": "Writing a sentence as an equation: the values at $x$ and at $y$ are multiplied."
                },
                {
                  "step": "$f(xy) = 21f(x)f(y)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes, and 21 times means multiplied by $21$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at $x + 17$ is 18 less than twice its value at $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x+17) = 2*f(x)-18",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at $x + 17$ is 18 less than twice its value at $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value at $x + 17$ is $f(x + 17)$.",
                  "reason": "Writing a sentence as an equation: the value of $f$ at the input $x + 17$."
                },
                {
                  "step": "Twice its value at $x$ is $2f(x)$.",
                  "reason": "Writing a sentence as an equation: twice means multiplied by $2$."
                },
                {
                  "step": "$f(x + 17) = 2f(x) - 18$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes, and 18 less means $18$ is taken away."
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
