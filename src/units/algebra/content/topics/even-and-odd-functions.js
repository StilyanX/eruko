export default {
  "number": 223,
  "title": "Even and odd functions",
  "section": 15,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "492-497"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Decide whether $f(x) = \\dfrac{x^4 - 6x^2}{x^2 + 3}$ is even, odd or neither: even means that $-x$ gives the same output as $x$ for every number $x$, and odd means that $-x$ gives the opposite output for every number $x$.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $f(x) = \\dfrac{x^4 - 6x^2}{x^2 + 3}$ is even, odd or neither: even means that $-x$ gives the same output as $x$ for every number $x$, and odd means that $-x$ gives the opposite output for every number $x$.",
      "$f(-x) = \\dfrac{(-x)^4 - 6(-x)^2}{(-x)^2 + 3}$",
      "$f(-x) = \\dfrac{x^4 - 6x^2}{x^2 + 3}$",
      "$-f(x) = \\dfrac{-x^4 + 6x^2}{x^2 + 3}$",
      "Even: $f(-x) = f(x)$ for every number $x$."
    ]
  },
  "ideas": [
    {
      "name": "Even function",
      "concrete": "For $f(x) = x^2 - 5$, the inputs $3$ and $-3$ give $f(3) = 4$ and $f(-3) = 4$: opposite inputs give the same output.",
      "general": "A function $f$ is an **even function** when, for every number $x$ in its domain, the number $-x$ is in its domain too and $f(-x) = f(x)$. The word \"even\" alone means the same."
    },
    {
      "name": "Odd function",
      "concrete": "For $f(x) = x^3 + 2x$, the inputs $2$ and $-2$ give $f(2) = 12$ and $f(-2) = -12$: opposite inputs give opposite outputs.",
      "general": "A function $f$ is an **odd function** when, for every number $x$ in its domain, the number $-x$ is in its domain too and $f(-x) = -f(x)$. The word \"odd\" alone means the same. A function that is not even need not be odd: many functions are neither even nor odd."
    },
    {
      "name": "Symmetry of even and odd graphs",
      "concrete": "The graph of the odd function $f(x) = x^3 + 2x$ has the points $(2, 12)$ and $(-2, -12)$: a half-turn about the origin carries each of them to the other.",
      "general": "Let $f$ be a function. Then $f$ is even exactly when, for every point $(a, b)$ of its graph, the point $(-a, b)$ is on the graph too; the graph is then its own mirror image in the $y$-axis. And $f$ is odd exactly when, for every point $(a, b)$ of its graph, the point $(-a, -b)$ is on the graph too; a half-turn about the origin then carries the graph onto itself. This is the **Symmetry of even and odd graphs**."
    },
    {
      "name": "Even and odd parts",
      "concrete": "For $f(x) = x^3 + 4x^2 - 7$, $f(-x) = -x^3 + 4x^2 - 7$. Half of $f(x) + f(-x)$ is $4x^2 - 7$, an even function, half of $f(x) - f(-x)$ is $x^3$, an odd function, and the two halves add up to $f(x)$.",
      "general": "Let $f$ be a function whose domain holds $-x$ with every number $x$ it holds. The **even part** of $f$ is $\\dfrac{f(x) + f(-x)}{2}$ and the **odd part** of $f$ is $\\dfrac{f(x) - f(-x)}{2}$. The even part is an even function, the odd part is an odd function, and their sum is $f(x)$ for every $x$ in the domain."
    }
  ],
  "kinds": [
    {
      "id": "t223-k1",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $f(x) = \\dfrac{2x^6 - 9x^2}{x^4 + 7}$ is even, odd or neither.",
            "lines": [
              {
                "step": "Decide whether $f(x) = \\dfrac{2x^6 - 9x^2}{x^4 + 7}$ is even, odd or neither.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(-x) = \\dfrac{2(-x)^6 - 9(-x)^2}{(-x)^4 + 7}$",
                "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
              },
              {
                "step": "$f(-x) = \\dfrac{2x^6 - 9x^2}{x^4 + 7}$",
                "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
              },
              {
                "step": "$-f(x) = \\dfrac{-2x^6 + 9x^2}{x^4 + 7}$",
                "reason": "Subtracting a bracket: the minus sign in front changes the sign of every term of the top."
              },
              {
                "step": "Even: $f(-x) = f(x)$ for every number $x$.",
                "reason": "Even function: the domain is all real numbers, so it holds $-x$ with every $x$, and the outputs at $-x$ and at $x$ are equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = 6x^5 - x^3 + 9x$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Odd",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 6x^5 - x^3 + 9x$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = 6(-x)^5 - (-x)^3 + 9(-x)$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = -6x^5 + x^3 - 9x$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$-f(x) = -6x^5 + x^3 - 9x$",
                  "reason": "Subtracting a bracket: the minus sign in front changes the sign of every term of $f(x)$."
                },
                {
                  "step": "Odd: $f(-x) = -f(x)$ for every number $x$.",
                  "reason": "Odd function: the domain is all real numbers, so it holds $-x$ with every $x$, and the output at $-x$ is the opposite of the output at $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = \\sqrt{2x^6 + x^2 + 9}$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Even",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\sqrt{2x^6 + x^2 + 9}$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = \\sqrt{2(-x)^6 + (-x)^2 + 9}$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = \\sqrt{2x^6 + x^2 + 9}$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$-f(x) = -\\sqrt{2x^6 + x^2 + 9}$",
                  "reason": "Subtracting a bracket: the root is one term, so the minus sign stands in front of it."
                },
                {
                  "step": "Even: $f(-x) = f(x)$ for every number $x$.",
                  "reason": "Even function: the domain is all real numbers, so it holds $-x$ with every $x$, and the outputs at $-x$ and at $x$ are equal."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = \\dfrac{x^3 + 4}{x^2 + 2}$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Neither",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\dfrac{x^3 + 4}{x^2 + 2}$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = \\dfrac{(-x)^3 + 4}{(-x)^2 + 2}$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = \\dfrac{-x^3 + 4}{x^2 + 2}$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$-f(x) = \\dfrac{-x^3 - 4}{x^2 + 2}$",
                  "reason": "Subtracting a bracket: the minus sign in front changes the sign of every term of the top."
                },
                {
                  "step": "At $x = 1$: $f(1) = \\dfrac{5}{3}$, $f(-1) = 1$ and $-f(1) = -\\dfrac{5}{3}$.",
                  "reason": "Substituting a value: $1$ and $-1$, in brackets, go in place of $x$."
                },
                {
                  "step": "Neither: $f(-1)$ is equal to neither $f(1)$ nor $-f(1)$.",
                  "reason": "Even function and Odd function: an even function gives equal outputs at $-x$ and at $x$, and an odd function gives opposite outputs, for every $x$ in the domain."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $f(x) = x|x| - 5x$ is even, odd or neither.",
            "lines": [
              {
                "step": "Decide whether $f(x) = x|x| - 5x$ is even, odd or neither.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(-x) = (-x)|-x| - 5(-x)$",
                "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
              },
              {
                "step": "$f(-x) = -x|-x| + 5x$",
                "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
              },
              {
                "step": "$f(-x) = -x|x| + 5x$",
                "reason": "Absolute value, from arithmetic: a number and its opposite are the same distance from $0$, so $|-a| = |a|$."
              },
              {
                "step": "Odd: $f(-x) = -f(x)$ for every number $x$.",
                "reason": "Odd function: the domain is all real numbers, so it holds $-x$ with every $x$, and the output at $-x$ is the opposite of the output at $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = 3x^4 - 7|x| + 2$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Even",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 3x^4 - 7|x| + 2$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = 3(-x)^4 - 7|-x| + 2$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = 3x^4 - 7|-x| + 2$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$f(-x) = 3x^4 - 7|x| + 2$",
                  "reason": "Absolute value, from arithmetic: a number and its opposite are the same distance from $0$, so $|-a| = |a|$."
                },
                {
                  "step": "Even: $f(-x) = f(x)$ for every number $x$.",
                  "reason": "Even function: the domain is all real numbers, so it holds $-x$ with every $x$, and the outputs at $-x$ and at $x$ are equal."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = |x - 4| + 2x$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Neither",
              "lines": [
                {
                  "step": "Decide whether $f(x) = |x - 4| + 2x$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = |(-x) - 4| + 2(-x)$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = |-x - 4| - 2x$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$f(-x) = |-(x + 4)| - 2x$",
                  "reason": "Factoring: the factor $-1$ is taken out of every term inside the bars."
                },
                {
                  "step": "$f(-x) = |x + 4| - 2x$",
                  "reason": "Absolute value, from arithmetic: a number and its opposite are the same distance from $0$, so $|-a| = |a|$."
                },
                {
                  "step": "At $x = 1$: $f(1) = 5$, $f(-1) = 3$ and $-f(1) = -5$.",
                  "reason": "Substituting a value: $1$ and $-1$, in brackets, go in place of $x$."
                },
                {
                  "step": "Neither: $f(-1)$ is equal to neither $f(1)$ nor $-f(1)$.",
                  "reason": "Even function and Odd function: an even function gives equal outputs at $-x$ and at $x$, and an odd function gives opposite outputs, for every $x$ in the domain."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = x^2|x| - 9$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Even",
              "lines": [
                {
                  "step": "Decide whether $f(x) = x^2|x| - 9$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = (-x)^2|-x| - 9$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = x^2|-x| - 9$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$f(-x) = x^2|x| - 9$",
                  "reason": "Absolute value, from arithmetic: a number and its opposite are the same distance from $0$, so $|-a| = |a|$."
                },
                {
                  "step": "Even: $f(-x) = f(x)$ for every number $x$.",
                  "reason": "Even function: the domain is all real numbers, so it holds $-x$ with every $x$, and the outputs at $-x$ and at $x$ are equal."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $f(x) = \\sqrt[3]{x^3 + 6x}$ is even, odd or neither.",
            "lines": [
              {
                "step": "Decide whether $f(x) = \\sqrt[3]{x^3 + 6x}$ is even, odd or neither.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(-x) = \\sqrt[3]{(-x)^3 + 6(-x)}$",
                "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
              },
              {
                "step": "$f(-x) = \\sqrt[3]{-x^3 - 6x}$",
                "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
              },
              {
                "step": "$f(-x) = \\sqrt[3]{-(x^3 + 6x)}$",
                "reason": "Factoring: the factor $-1$ is taken out of every term under the root."
              },
              {
                "step": "$f(-x) = -\\sqrt[3]{x^3 + 6x}$",
                "reason": "Root of a product: under a cube root it holds for all real numbers, so $\\sqrt[3]{-a} = \\sqrt[3]{-1}\\,\\sqrt[3]{a}$, which is $-\\sqrt[3]{a}$."
              },
              {
                "step": "Odd: $f(-x) = -f(x)$ for every number $x$.",
                "reason": "Odd function: the domain is all real numbers, so it holds $-x$ with every $x$, and the output at $-x$ is the opposite of the output at $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = \\sqrt[3]{x} + x^2$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Neither",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\sqrt[3]{x} + x^2$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = \\sqrt[3]{-x} + (-x)^2$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = \\sqrt[3]{-x} + x^2$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$f(-x) = -\\sqrt[3]{x} + x^2$",
                  "reason": "Root of a product: under a cube root it holds for all real numbers, so $\\sqrt[3]{-a} = \\sqrt[3]{-1}\\,\\sqrt[3]{a}$, which is $-\\sqrt[3]{a}$."
                },
                {
                  "step": "At $x = 1$: $f(1) = 2$, $f(-1) = 0$ and $-f(1) = -2$.",
                  "reason": "Substituting a value: $1$ and $-1$, in brackets, go in place of $x$."
                },
                {
                  "step": "Neither: $f(-1)$ is equal to neither $f(1)$ nor $-f(1)$.",
                  "reason": "Even function and Odd function: an even function gives equal outputs at $-x$ and at $x$, and an odd function gives opposite outputs, for every $x$ in the domain."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = x^2\\sqrt[3]{x}$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Odd",
              "lines": [
                {
                  "step": "Decide whether $f(x) = x^2\\sqrt[3]{x}$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = (-x)^2\\sqrt[3]{-x}$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = x^2\\sqrt[3]{-x}$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$f(-x) = x^2\\left(-\\sqrt[3]{x}\\right)$",
                  "reason": "Root of a product: under a cube root it holds for all real numbers, so $\\sqrt[3]{-a} = \\sqrt[3]{-1}\\,\\sqrt[3]{a}$, which is $-\\sqrt[3]{a}$."
                },
                {
                  "step": "$f(-x) = -x^2\\sqrt[3]{x}$",
                  "reason": "Signs of products, from arithmetic: two factors with a minus sign give a product with none, and one such factor gives the opposite of the product."
                },
                {
                  "step": "Odd: $f(-x) = -f(x)$ for every number $x$.",
                  "reason": "Odd function: the domain is all real numbers, so it holds $-x$ with every $x$, and the output at $-x$ is the opposite of the output at $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = \\sqrt[3]{x^5 - 3x}$ is even, odd or neither.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Odd",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\sqrt[3]{x^5 - 3x}$ is even, odd or neither.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-x) = \\sqrt[3]{(-x)^5 - 3(-x)}$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = \\sqrt[3]{-x^5 + 3x}$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$f(-x) = \\sqrt[3]{-(x^5 - 3x)}$",
                  "reason": "Factoring: the factor $-1$ is taken out of every term under the root."
                },
                {
                  "step": "$f(-x) = -\\sqrt[3]{x^5 - 3x}$",
                  "reason": "Root of a product: under a cube root it holds for all real numbers, so $\\sqrt[3]{-a} = \\sqrt[3]{-1}\\,\\sqrt[3]{a}$, which is $-\\sqrt[3]{a}$."
                },
                {
                  "step": "Odd: $f(-x) = -f(x)$ for every number $x$.",
                  "reason": "Odd function: the domain is all real numbers, so it holds $-x$ with every $x$, and the output at $-x$ is the opposite of the output at $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t223-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 3)$, $B(1, 3)$, $C(3, -2)$ and $D(4, -2)$; the others lie to the left of the $y$-axis.",
            "figure": {
              "file": "even-and-odd-functions-1.svg",
              "alt": "A broken line through marked points, among them A(0, 3), B(1, 3), C(3, −2) and D(4, −2); the other marked points lie to the left of the y-axis."
            },
            "lines": [
              {
                "step": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 3)$, $B(1, 3)$, $C(3, -2)$ and $D(4, -2)$; the others lie to the left of the $y$-axis.",
                "reason": "This is the problem as given."
              },
              {
                "step": "To the left of the $y$-axis the marked points are $(-1, 3)$, $(-3, -2)$ and $(-4, -2)$.",
                "reason": "Cartesian plane: the coordinates of each marked point are read off the two axes."
              },
              {
                "step": "The mirror images of $B$, $C$ and $D$ in the $y$-axis are $(-1, 3)$, $(-3, -2)$ and $(-4, -2)$.",
                "reason": "Shifting, stretching and reflecting graphs: reflecting in the $y$-axis carries $(p, q)$ to $(-p, q)$."
              },
              {
                "step": "A half-turn about the origin carries $B$, $C$ and $D$ to $(-1, -3)$, $(-3, 2)$ and $(-4, 2)$.",
                "reason": "Shifting, stretching and reflecting graphs: a half-turn about the origin is a reflection in the $y$-axis followed by one in the $x$-axis, so it carries $(p, q)$ to $(-p, -q)$."
              },
              {
                "step": "Even: the marked points on the left are the mirror images, and $A$ lies on the $y$-axis, so the graph is its own mirror image in the $y$-axis.",
                "reason": "Symmetry of even and odd graphs: a function is even exactly when its graph has the point $(-a, b)$ with each of its points $(a, b)$, and the mirror image of a straight piece is the straight piece between the images of its ends."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 2)$, $B(2, 1)$ and $C(4, -3)$; the others lie to the left of the $y$-axis.",
              "figure": {
                "file": "even-and-odd-functions-2.svg",
                "alt": "A broken line through marked points, among them A(0, 2), B(2, 1) and C(4, −3); the other marked points lie to the left of the y-axis."
              },
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Neither",
              "lines": [
                {
                  "step": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 2)$, $B(2, 1)$ and $C(4, -3)$; the others lie to the left of the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "To the left of the $y$-axis the marked points are $(-2, -1)$ and $(-4, -3)$.",
                  "reason": "Cartesian plane: the coordinates of each marked point are read off the two axes."
                },
                {
                  "step": "The mirror images of $B$ and $C$ in the $y$-axis are $(-2, 1)$ and $(-4, -3)$.",
                  "reason": "Shifting, stretching and reflecting graphs: reflecting in the $y$-axis carries $(p, q)$ to $(-p, q)$."
                },
                {
                  "step": "A half-turn about the origin carries $B$ and $C$ to $(-2, -1)$ and $(-4, 3)$.",
                  "reason": "Shifting, stretching and reflecting graphs: a half-turn about the origin is a reflection in the $y$-axis followed by one in the $x$-axis, so it carries $(p, q)$ to $(-p, -q)$."
                },
                {
                  "step": "Neither: over $x = -2$ the graph has $(-2, -1)$, not the mirror image $(-2, 1)$ of $B$, and over $x = 0$ it has $A$, not the half-turn image $(0, -2)$ of $A$.",
                  "reason": "Symmetry of even and odd graphs: the graph of an even function has $(-a, b)$ with each of its points $(a, b)$, the graph of an odd function has $(-a, -b)$, and a graph has one point over each input."
                }
              ]
            },
            {
              "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 1)$, $B(2, -3)$ and $C(4, 1)$; the others lie to the left of the $y$-axis.",
              "figure": {
                "file": "even-and-odd-functions-3.svg",
                "alt": "A broken line through marked points, among them A(0, 1), B(2, −3) and C(4, 1); the other marked points lie to the left of the y-axis."
              },
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Even",
              "lines": [
                {
                  "step": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 1)$, $B(2, -3)$ and $C(4, 1)$; the others lie to the left of the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "To the left of the $y$-axis the marked points are $(-2, -3)$ and $(-4, 1)$.",
                  "reason": "Cartesian plane: the coordinates of each marked point are read off the two axes."
                },
                {
                  "step": "The mirror images of $B$ and $C$ in the $y$-axis are $(-2, -3)$ and $(-4, 1)$.",
                  "reason": "Shifting, stretching and reflecting graphs: reflecting in the $y$-axis carries $(p, q)$ to $(-p, q)$."
                },
                {
                  "step": "A half-turn about the origin carries $B$ and $C$ to $(-2, 3)$ and $(-4, -1)$.",
                  "reason": "Shifting, stretching and reflecting graphs: a half-turn about the origin is a reflection in the $y$-axis followed by one in the $x$-axis, so it carries $(p, q)$ to $(-p, -q)$."
                },
                {
                  "step": "Even: the marked points on the left are the mirror images, and $A$ lies on the $y$-axis, so the graph is its own mirror image in the $y$-axis.",
                  "reason": "Symmetry of even and odd graphs: a function is even exactly when its graph has the point $(-a, b)$ with each of its points $(a, b)$, and the mirror image of a straight piece is the straight piece between the images of its ends."
                }
              ]
            },
            {
              "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(1, -1)$ and $C(3, -4)$; the others lie to the left of the $y$-axis.",
              "figure": {
                "file": "even-and-odd-functions-4.svg",
                "alt": "A broken line through marked points, among them A(0, 0), B(1, −1) and C(3, −4); the other marked points lie to the left of the y-axis."
              },
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Odd",
              "lines": [
                {
                  "step": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(1, -1)$ and $C(3, -4)$; the others lie to the left of the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "To the left of the $y$-axis the marked points are $(-1, 1)$ and $(-3, 4)$.",
                  "reason": "Cartesian plane: the coordinates of each marked point are read off the two axes."
                },
                {
                  "step": "The mirror images of $B$ and $C$ in the $y$-axis are $(-1, -1)$ and $(-3, -4)$.",
                  "reason": "Shifting, stretching and reflecting graphs: reflecting in the $y$-axis carries $(p, q)$ to $(-p, q)$."
                },
                {
                  "step": "A half-turn about the origin carries $B$ and $C$ to $(-1, 1)$ and $(-3, 4)$.",
                  "reason": "Shifting, stretching and reflecting graphs: a half-turn about the origin is a reflection in the $y$-axis followed by one in the $x$-axis, so it carries $(p, q)$ to $(-p, -q)$."
                },
                {
                  "step": "Odd: the marked points on the left are the half-turn images, and $A$ is the origin, so a half-turn about the origin carries the graph onto itself.",
                  "reason": "Symmetry of even and odd graphs: a function is odd exactly when its graph has the point $(-a, -b)$ with each of its points $(a, b)$, and a half-turn carries a straight piece to the straight piece between the images of its ends."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t223-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $h(x) = x^3\\,f(x)\\,g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
            "lines": [
              {
                "step": "Decide whether $h(x) = x^3\\,f(x)\\,g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h(-x) = (-x)^3\\,f(-x)\\,g(-x)$",
                "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
              },
              {
                "step": "$f(-x) = f(x)$",
                "reason": "Even function: $f$ is even."
              },
              {
                "step": "$g(-x) = -g(x)$",
                "reason": "Odd function: $g$ is odd."
              },
              {
                "step": "$h(-x) = (-x)^3\\,f(x)\\,\\left(-g(x)\\right)$",
                "reason": "Substituting a value: $f(x)$ goes in place of $f(-x)$ and $-g(x)$, in brackets, in place of $g(-x)$."
              },
              {
                "step": "$h(-x) = x^3\\,f(x)\\,g(x)$",
                "reason": "Signs of products, from arithmetic: two factors with a minus sign give a product with none, and one such factor gives the opposite of the product."
              },
              {
                "step": "Even: $h(-x) = h(x)$ for every number $x$.",
                "reason": "Even function: the domain is all real numbers, and the outputs of $h$ at $-x$ and at $x$ are equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $h(x) = f(x)\\,g(x)^2 + 4x^2$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Even",
              "lines": [
                {
                  "step": "Decide whether $h(x) = f(x)\\,g(x)^2 + 4x^2$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = f(-x)\\,g(-x)^2 + 4(-x)^2$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = f(x)$",
                  "reason": "Even function: $f$ is even."
                },
                {
                  "step": "$g(-x) = -g(x)$",
                  "reason": "Odd function: $g$ is odd."
                },
                {
                  "step": "$h(-x) = f(x)\\,\\left(-g(x)\\right)^2 + 4(-x)^2$",
                  "reason": "Substituting a value: $f(x)$ goes in place of $f(-x)$ and $-g(x)$, in brackets, in place of $g(-x)$."
                },
                {
                  "step": "$h(-x) = f(x)\\,g(x)^2 + 4x^2$",
                  "reason": "Signs of products, from arithmetic: two factors with a minus sign give a product with none, and one such factor gives the opposite of the product."
                },
                {
                  "step": "Even: $h(-x) = h(x)$ for every number $x$.",
                  "reason": "Even function: the domain is all real numbers, and the outputs of $h$ at $-x$ and at $x$ are equal."
                }
              ]
            },
            {
              "prompt": "Decide whether $h(x) = 2x\\,f(x) + g(x)^3$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Odd",
              "lines": [
                {
                  "step": "Decide whether $h(x) = 2x\\,f(x) + g(x)^3$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = 2(-x)\\,f(-x) + g(-x)^3$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = f(x)$",
                  "reason": "Even function: $f$ is even."
                },
                {
                  "step": "$g(-x) = -g(x)$",
                  "reason": "Odd function: $g$ is odd."
                },
                {
                  "step": "$h(-x) = 2(-x)\\,f(x) + \\left(-g(x)\\right)^3$",
                  "reason": "Substituting a value: $f(x)$ goes in place of $f(-x)$ and $-g(x)$, in brackets, in place of $g(-x)$."
                },
                {
                  "step": "$h(-x) = -2x\\,f(x) - g(x)^3$",
                  "reason": "Signs of products, from arithmetic: two factors with a minus sign give a product with none, and one such factor gives the opposite of the product."
                },
                {
                  "step": "Odd: $h(-x) = -h(x)$ for every number $x$.",
                  "reason": "Odd function: the domain is all real numbers, and the output of $h$ at $-x$ is the opposite of its output at $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $h(x) = x^2\\,g(x) + 3f(x)^2$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Neither",
              "lines": [
                {
                  "step": "Decide whether $h(x) = x^2\\,g(x) + 3f(x)^2$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = (-x)^2\\,g(-x) + 3f(-x)^2$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$f(-x) = f(x)$",
                  "reason": "Even function: $f$ is even."
                },
                {
                  "step": "$g(-x) = -g(x)$",
                  "reason": "Odd function: $g$ is odd."
                },
                {
                  "step": "$h(-x) = (-x)^2\\,\\left(-g(x)\\right) + 3f(x)^2$",
                  "reason": "Substituting a value: $f(x)$ goes in place of $f(-x)$ and $-g(x)$, in brackets, in place of $g(-x)$."
                },
                {
                  "step": "$h(-x) = -x^2\\,g(x) + 3f(x)^2$",
                  "reason": "Signs of products, from arithmetic: two factors with a minus sign give a product with none, and one such factor gives the opposite of the product."
                },
                {
                  "step": "With $f(x) = 1$ and $g(x) = x$, $h(x) = x^3 + 3$, so $h(1) = 4$ and $h(-1) = 2$.",
                  "reason": "Substituting a value: $f(x) = 1$ is an even function and $g(x) = x$ is an odd function."
                },
                {
                  "step": "Neither: for these $f$ and $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$.",
                  "reason": "Even function and Odd function: an even function gives equal outputs at $-x$ and at $x$, and an odd function gives opposite outputs, for every $x$ in the domain."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t223-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $h(x) = f\\left(x^3 - 4x\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
            "lines": [
              {
                "step": "Decide whether $h(x) = f\\left(x^3 - 4x\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h(-x) = f\\left((-x)^3 - 4(-x)\\right)$",
                "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
              },
              {
                "step": "$h(-x) = f\\left(-x^3 + 4x\\right)$",
                "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
              },
              {
                "step": "$h(-x) = f\\left(-\\left(x^3 - 4x\\right)\\right)$",
                "reason": "Factoring: the factor $-1$ is taken out of every term in the bracket."
              },
              {
                "step": "$h(-x) = f\\left(x^3 - 4x\\right)$",
                "reason": "Even function: $f$ is even, so it gives the same output at an input and at the opposite of that input."
              },
              {
                "step": "Even: $h(-x) = h(x)$ for every number $x$.",
                "reason": "Even function: the domain is all real numbers, and the outputs of $h$ at $-x$ and at $x$ are equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $h(x) = f\\left(x^4 - 3x\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Neither",
              "lines": [
                {
                  "step": "Decide whether $h(x) = f\\left(x^4 - 3x\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = f\\left((-x)^4 - 3(-x)\\right)$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$h(-x) = f\\left(x^4 + 3x\\right)$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "With $f(x) = x^2$, $h(x) = \\left(x^4 - 3x\\right)^2$, so $h(1) = 4$ and $h(-1) = 16$.",
                  "reason": "Substituting a value: $f(x) = x^2$ is an even function."
                },
                {
                  "step": "Neither: for this $f$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$.",
                  "reason": "Even function and Odd function: an even function gives equal outputs at $-x$ and at $x$, and an odd function gives opposite outputs, for every $x$ in the domain."
                }
              ]
            },
            {
              "prompt": "Decide whether $h(x) = g\\left(4x^9 + 3x\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Odd",
              "lines": [
                {
                  "step": "Decide whether $h(x) = g\\left(4x^9 + 3x\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = g\\left(4(-x)^9 + 3(-x)\\right)$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$h(-x) = g\\left(-4x^9 - 3x\\right)$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$h(-x) = g\\left(-\\left(4x^9 + 3x\\right)\\right)$",
                  "reason": "Factoring: the factor $-1$ is taken out of every term in the bracket."
                },
                {
                  "step": "$h(-x) = -g\\left(4x^9 + 3x\\right)$",
                  "reason": "Odd function: $g$ is odd, so it gives opposite outputs at an input and at the opposite of that input."
                },
                {
                  "step": "Odd: $h(-x) = -h(x)$ for every number $x$.",
                  "reason": "Odd function: the domain is all real numbers, and the output of $h$ at $-x$ is the opposite of its output at $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $h(x) = f\\left(2x^5 + 3x\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Even",
              "lines": [
                {
                  "step": "Decide whether $h(x) = f\\left(2x^5 + 3x\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = f\\left(2(-x)^5 + 3(-x)\\right)$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$h(-x) = f\\left(-2x^5 - 3x\\right)$",
                  "reason": "The sign of a power of a negative number: an even power of $-x$ is the same power of $x$, and an odd power of $-x$ is the opposite of that power of $x$."
                },
                {
                  "step": "$h(-x) = f\\left(-\\left(2x^5 + 3x\\right)\\right)$",
                  "reason": "Factoring: the factor $-1$ is taken out of every term in the bracket."
                },
                {
                  "step": "$h(-x) = f\\left(2x^5 + 3x\\right)$",
                  "reason": "Even function: $f$ is even, so it gives the same output at an input and at the opposite of that input."
                },
                {
                  "step": "Even: $h(-x) = h(x)$ for every number $x$.",
                  "reason": "Even function: the domain is all real numbers, and the outputs of $h$ at $-x$ and at $x$ are equal."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Decide whether $h(x) = f\\left(3g(x)\\right)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
            "lines": [
              {
                "step": "Decide whether $h(x) = f\\left(3g(x)\\right)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h(-x) = f\\left(3g(-x)\\right)$",
                "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
              },
              {
                "step": "$h(-x) = f\\left(-3g(x)\\right)$",
                "reason": "Odd function: $g$ is odd, so $g(-x) = -g(x)$."
              },
              {
                "step": "$h(-x) = f\\left(3g(x)\\right)$",
                "reason": "Even function: $f$ is even, so it gives the same output at an input and at the opposite of that input."
              },
              {
                "step": "Even: $h(-x) = h(x)$ for every number $x$.",
                "reason": "Even function: the domain is all real numbers, and the outputs of $h$ at $-x$ and at $x$ are equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $h(x) = g\\left(g(x)\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Odd",
              "lines": [
                {
                  "step": "Decide whether $h(x) = g\\left(g(x)\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = g\\left(g(-x)\\right)$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$h(-x) = g\\left(-g(x)\\right)$",
                  "reason": "Odd function: $g$ is odd, so $g(-x) = -g(x)$."
                },
                {
                  "step": "$h(-x) = -g\\left(g(x)\\right)$",
                  "reason": "Odd function: $g$ is odd, so it gives opposite outputs at an input and at the opposite of that input."
                },
                {
                  "step": "Odd: $h(-x) = -h(x)$ for every number $x$.",
                  "reason": "Odd function: the domain is all real numbers, and the output of $h$ at $-x$ is the opposite of its output at $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $h(x) = f\\left(x + g(x)\\right)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Even",
              "lines": [
                {
                  "step": "Decide whether $h(x) = f\\left(x + g(x)\\right)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = f\\left((-x) + g(-x)\\right)$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$h(-x) = f\\left(-x - g(x)\\right)$",
                  "reason": "Odd function: $g$ is odd, so $g(-x) = -g(x)$."
                },
                {
                  "step": "$h(-x) = f\\left(-\\left(x + g(x)\\right)\\right)$",
                  "reason": "Factoring: the factor $-1$ is taken out of every term in the bracket."
                },
                {
                  "step": "$h(-x) = f\\left(x + g(x)\\right)$",
                  "reason": "Even function: $f$ is even, so it gives the same output at an input and at the opposite of that input."
                },
                {
                  "step": "Even: $h(-x) = h(x)$ for every number $x$.",
                  "reason": "Even function: the domain is all real numbers, and the outputs of $h$ at $-x$ and at $x$ are equal."
                }
              ]
            },
            {
              "prompt": "Decide whether $h(x) = g\\left(x\\,g(x)\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
              "form": "Answer as Even, Odd or Neither.",
              "answer": "Even",
              "lines": [
                {
                  "step": "Decide whether $h(x) = g\\left(x\\,g(x)\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(-x) = g\\left((-x)\\,g(-x)\\right)$",
                  "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
                },
                {
                  "step": "$h(-x) = g\\left((-x)\\left(-g(x)\\right)\\right)$",
                  "reason": "Odd function: $g$ is odd, so $g(-x) = -g(x)$."
                },
                {
                  "step": "$h(-x) = g\\left(x\\,g(x)\\right)$",
                  "reason": "Signs of products, from arithmetic: two factors with a minus sign give a product with none, and one such factor gives the opposite of the product."
                },
                {
                  "step": "Even: $h(-x) = h(x)$ for every number $x$.",
                  "reason": "Even function: the domain is all real numbers, and the outputs of $h$ at $-x$ and at $x$ are equal."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t223-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the even part of $f(x) = (2x - 3)(x^2 + 5x - 1)$.",
            "lines": [
              {
                "step": "Find the even part of $f(x) = (2x - 3)(x^2 + 5x - 1)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = 2x^3 + 7x^2 - 17x + 3$",
                "reason": "Multiplying polynomials: each term of one bracket multiplies each term of the other, and like terms are collected."
              },
              {
                "step": "$f(-x) = -2x^3 + 7x^2 + 17x + 3$",
                "reason": "The sign of a power of a negative number: with $-x$ in place of $x$, each odd power changes its sign and each even power keeps it."
              },
              {
                "step": "$f(x) + f(-x) = 14x^2 + 6$",
                "reason": "Collecting like terms: the odd powers cancel and the even powers double."
              },
              {
                "step": "The even part is $7x^2 + 3$.",
                "reason": "Even and odd parts: the even part of $f$ is half of $f(x) + f(-x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the even part of $f(x) = (3x + 2)(x^2 - 4x + 5)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-10*x^2+10",
              "lines": [
                {
                  "step": "Find the even part of $f(x) = (3x + 2)(x^2 - 4x + 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 3x^3 - 10x^2 + 7x + 10$",
                  "reason": "Multiplying polynomials: each term of one bracket multiplies each term of the other, and like terms are collected."
                },
                {
                  "step": "$f(-x) = -3x^3 - 10x^2 - 7x + 10$",
                  "reason": "The sign of a power of a negative number: with $-x$ in place of $x$, each odd power changes its sign and each even power keeps it."
                },
                {
                  "step": "$f(x) + f(-x) = -20x^2 + 20$",
                  "reason": "Collecting like terms: the odd powers cancel and the even powers double."
                },
                {
                  "step": "The even part is $-10x^2 + 10$.",
                  "reason": "Even and odd parts: the even part of $f$ is half of $f(x) + f(-x)$."
                }
              ]
            },
            {
              "prompt": "Find the even part of $f(x) = (x + 2)^3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*x^2+8",
              "lines": [
                {
                  "step": "Find the even part of $f(x) = (x + 2)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = x^3 + 6x^2 + 12x + 8$",
                  "reason": "Multiplying polynomials: each term of one bracket multiplies each term of the other, and like terms are collected."
                },
                {
                  "step": "$f(-x) = -x^3 + 6x^2 - 12x + 8$",
                  "reason": "The sign of a power of a negative number: with $-x$ in place of $x$, each odd power changes its sign and each even power keeps it."
                },
                {
                  "step": "$f(x) + f(-x) = 12x^2 + 16$",
                  "reason": "Collecting like terms: the odd powers cancel and the even powers double."
                },
                {
                  "step": "The even part is $6x^2 + 8$.",
                  "reason": "Even and odd parts: the even part of $f$ is half of $f(x) + f(-x)$."
                }
              ]
            },
            {
              "prompt": "Find the even part of $f(x) = (x^2 + 3x - 2)(x^2 - x + 4)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-x^2-8",
              "lines": [
                {
                  "step": "Find the even part of $f(x) = (x^2 + 3x - 2)(x^2 - x + 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = x^4 + 2x^3 - x^2 + 14x - 8$",
                  "reason": "Multiplying polynomials: each term of one bracket multiplies each term of the other, and like terms are collected."
                },
                {
                  "step": "$f(-x) = x^4 - 2x^3 - x^2 - 14x - 8$",
                  "reason": "The sign of a power of a negative number: with $-x$ in place of $x$, each odd power changes its sign and each even power keeps it."
                },
                {
                  "step": "$f(x) + f(-x) = 2x^4 - 2x^2 - 16$",
                  "reason": "Collecting like terms: the odd powers cancel and the even powers double."
                },
                {
                  "step": "The even part is $x^4 - x^2 - 8$.",
                  "reason": "Even and odd parts: the even part of $f$ is half of $f(x) + f(-x)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the odd part of $f(x) = (3x - 1)(2x^2 + x + 4)$.",
            "lines": [
              {
                "step": "Find the odd part of $f(x) = (3x - 1)(2x^2 + x + 4)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = 6x^3 + x^2 + 11x - 4$",
                "reason": "Multiplying polynomials: each term of one bracket multiplies each term of the other, and like terms are collected."
              },
              {
                "step": "$f(-x) = -6x^3 + x^2 - 11x - 4$",
                "reason": "The sign of a power of a negative number: with $-x$ in place of $x$, each odd power changes its sign and each even power keeps it."
              },
              {
                "step": "$f(x) - f(-x) = 12x^3 + 22x$",
                "reason": "Subtracting a bracket: every sign of $f(-x)$ changes, so the even powers cancel and the odd powers double."
              },
              {
                "step": "The odd part is $6x^3 + 11x$.",
                "reason": "Even and odd parts: the odd part of $f$ is half of $f(x) - f(-x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the odd part of $f(x) = (x + 5)(x^2 - 2x + 3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-7*x",
              "lines": [
                {
                  "step": "Find the odd part of $f(x) = (x + 5)(x^2 - 2x + 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = x^3 + 3x^2 - 7x + 15$",
                  "reason": "Multiplying polynomials: each term of one bracket multiplies each term of the other, and like terms are collected."
                },
                {
                  "step": "$f(-x) = -x^3 + 3x^2 + 7x + 15$",
                  "reason": "The sign of a power of a negative number: with $-x$ in place of $x$, each odd power changes its sign and each even power keeps it."
                },
                {
                  "step": "$f(x) - f(-x) = 2x^3 - 14x$",
                  "reason": "Subtracting a bracket: every sign of $f(-x)$ changes, so the even powers cancel and the odd powers double."
                },
                {
                  "step": "The odd part is $x^3 - 7x$.",
                  "reason": "Even and odd parts: the odd part of $f$ is half of $f(x) - f(-x)$."
                }
              ]
            },
            {
              "prompt": "Find the odd part of $f(x) = (2x - 5)^3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*x^3+150*x",
              "lines": [
                {
                  "step": "Find the odd part of $f(x) = (2x - 5)^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 8x^3 - 60x^2 + 150x - 125$",
                  "reason": "Multiplying polynomials: each term of one bracket multiplies each term of the other, and like terms are collected."
                },
                {
                  "step": "$f(-x) = -8x^3 - 60x^2 - 150x - 125$",
                  "reason": "The sign of a power of a negative number: with $-x$ in place of $x$, each odd power changes its sign and each even power keeps it."
                },
                {
                  "step": "$f(x) - f(-x) = 16x^3 + 300x$",
                  "reason": "Subtracting a bracket: every sign of $f(-x)$ changes, so the even powers cancel and the odd powers double."
                },
                {
                  "step": "The odd part is $8x^3 + 150x$.",
                  "reason": "Even and odd parts: the odd part of $f$ is half of $f(x) - f(-x)$."
                }
              ]
            },
            {
              "prompt": "Find the odd part of $f(x) = (x^2 + 2x + 6)(x^2 - 5x - 1)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^3-32*x",
              "lines": [
                {
                  "step": "Find the odd part of $f(x) = (x^2 + 2x + 6)(x^2 - 5x - 1)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = x^4 - 3x^3 - 5x^2 - 32x - 6$",
                  "reason": "Multiplying polynomials: each term of one bracket multiplies each term of the other, and like terms are collected."
                },
                {
                  "step": "$f(-x) = x^4 + 3x^3 - 5x^2 + 32x - 6$",
                  "reason": "The sign of a power of a negative number: with $-x$ in place of $x$, each odd power changes its sign and each even power keeps it."
                },
                {
                  "step": "$f(x) - f(-x) = -6x^3 - 64x$",
                  "reason": "Subtracting a bracket: every sign of $f(-x)$ changes, so the even powers cancel and the odd powers double."
                },
                {
                  "step": "The odd part is $-3x^3 - 32x$.",
                  "reason": "Even and odd parts: the odd part of $f$ is half of $f(x) - f(-x)$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t223-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working that decides whether $f(x) = 2x^5 - 7x^3 + 4x$ is even, odd or neither, and write that line right.",
            "given": [
              "$f(-x) = 2(-x)^5 - 7(-x)^3 + 4(-x)$",
              "$f(-x) = -2x^5 - 7x^3 - 4x$",
              "$-f(x) = -2x^5 + 7x^3 - 4x$",
              "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that decides whether $f(x) = 2x^5 - 7x^3 + 4x$ is even, odd or neither, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 writes $-7(-x)^3$ as $-7x^3$, so the minus sign of the odd power is lost.",
                "reason": "A sign lost: the minus sign inside the bracket is dropped. The sign of a power of a negative number sets it right: $(-x)^3 = -x^3$."
              },
              {
                "step": "Line 2 written right is $f(-x) = -2x^5 + 7x^3 - 4x$.",
                "reason": "Odd function: with the line set right, $f(-x) = -f(x)$ for every number $x$, and $f$ is odd."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that decides whether $f(x) = 3x^4 - 5x^3 + 2$ is even, odd or neither, and write that line right.",
              "given": [
                "$f(-x) = 3(-x)^4 - 5(-x)^3 + 2$",
                "$f(-x) = 3x^4 - 5x^3 + 2$",
                "$-f(x) = -3x^4 + 5x^3 - 2$",
                "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(-x) = 3*x^4+5*x^3+2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that decides whether $f(x) = 3x^4 - 5x^3 + 2$ is even, odd or neither, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $-5(-x)^3$ as $-5x^3$, so the minus sign of the odd power is lost.",
                  "reason": "A sign lost: the minus sign inside the bracket is dropped. The sign of a power of a negative number sets it right: $(-x)^3 = -x^3$."
                },
                {
                  "step": "Line 2 written right is $f(-x) = 3x^4 + 5x^3 + 2$.",
                  "reason": "Even function and Odd function: with the line set right, $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that decides whether $f(x) = 4x^5 + 3x^2 - 6x$ is even, odd or neither, and write that line right.",
              "given": [
                "$f(-x) = 4(-x)^5 + 3(-x)^2 - 6(-x)$",
                "$f(-x) = -4x^5 + 3x^2 + 6x$",
                "$-f(x) = -4x^5 + 3x^2 + 6x$",
                "So $f(-x) = -f(x)$ for every number $x$, and $f$ is odd."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -f(x) = -4*x^5-3*x^2+6*x",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that decides whether $f(x) = 4x^5 + 3x^2 - 6x$ is even, odd or neither, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 leaves the term $3x^2$ of $f(x)$ as it is, so the minus sign in front of $f(x)$ is lost on that term.",
                  "reason": "A sign lost: the minus sign does not reach every term. Subtracting a bracket sets it right: every sign in the bracket changes."
                },
                {
                  "step": "Line 3 written right is $-f(x) = -4x^5 - 3x^2 + 6x$.",
                  "reason": "Even function and Odd function: with the line set right, $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that decides whether $f(x) = x^6 - 8x^2 + 5$ is even, odd or neither, and write that line right.",
              "given": [
                "$f(-x) = (-x)^6 + 8(-x)^2 + 5$",
                "$f(-x) = x^6 + 8x^2 + 5$",
                "$-f(x) = -x^6 + 8x^2 - 5$",
                "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: f(-x) = (-x)^6-8*(-x)^2+5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that decides whether $f(x) = x^6 - 8x^2 + 5$ is even, odd or neither, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 writes the term $-8x^2$ of $f(x)$ as $+8(-x)^2$, so its minus sign is lost.",
                  "reason": "A sign lost: the minus sign in front of the term is dropped. Substituting a value sets it right: only $x$ is replaced, by $-x$ in brackets, and each term keeps its sign."
                },
                {
                  "step": "Line 1 written right is $f(-x) = (-x)^6 - 8(-x)^2 + 5$.",
                  "reason": "Even function: with the line set right, $f(-x) = f(x)$ for every number $x$, and $f$ is even."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working that decides whether $f(x) = (x - 2)^2 + 2x$ is even, odd or neither, and write that line right.",
            "given": [
              "$f(-x) = (-x - 2)^2 + 2(-x)$",
              "$f(-x) = x^2 - 2x + 4$",
              "$f(x) = x^2 - 2x + 4$",
              "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that decides whether $f(x) = (x - 2)^2 + 2x$ is even, odd or neither, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 squares $-x - 2$ term by term, as $x^2 + 4$, and leaves out the middle term $4x$.",
                "reason": "A power taken term by term over a sum: the square of a sum is taken as the sum of the squares. Square of a binomial sets it right: $(-x - 2)^2 = x^2 + 4x + 4$."
              },
              {
                "step": "Line 2 written right is $f(-x) = x^2 + 2x + 4$.",
                "reason": "Even function and Odd function: with the line set right, $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that decides whether $f(x) = (2x - 7)^2 + 3x$ is even, odd or neither, and write that line right.",
              "given": [
                "$f(-x) = (-2x - 7)^2 + 3(-x)$",
                "$f(-x) = 4x^2 + 25x + 49$",
                "$f(x) = 4x^2 + 3x + 49$",
                "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(x) = 4*x^2-25*x+49",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that decides whether $f(x) = (2x - 7)^2 + 3x$ is even, odd or neither, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 squares $2x - 7$ term by term, as $4x^2 + 49$, and leaves out the middle term $-28x$.",
                  "reason": "A power taken term by term over a sum: the square of a sum is taken as the sum of the squares. Square of a binomial sets it right: $(2x - 7)^2 = 4x^2 - 28x + 49$."
                },
                {
                  "step": "Line 3 written right is $f(x) = 4x^2 - 25x + 49$.",
                  "reason": "Even function and Odd function: with the line set right, $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that decides whether $f(x) = (4x + 7)^2 - 16x$ is even, odd or neither, and write that line right.",
              "given": [
                "$f(-x) = (-4x + 7)^2 - 16(-x)$",
                "$f(-x) = 16x^2 + 16x + 49$",
                "$f(x) = 16x^2 + 40x + 49$",
                "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(-x) = 16*x^2-40*x+49",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that decides whether $f(x) = (4x + 7)^2 - 16x$ is even, odd or neither, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 squares $-4x + 7$ term by term, as $16x^2 + 49$, and leaves out the middle term $-56x$.",
                  "reason": "A power taken term by term over a sum: the square of a sum is taken as the sum of the squares. Square of a binomial sets it right: $(-4x + 7)^2 = 16x^2 - 56x + 49$."
                },
                {
                  "step": "Line 2 written right is $f(-x) = 16x^2 - 40x + 49$.",
                  "reason": "Even function and Odd function: with the line set right, $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that decides whether $f(x) = (2x + 8)^2 - 16x$ is even, odd or neither, and write that line right.",
              "given": [
                "$f(-x) = (-2x + 8)^2 - 16(-x)$",
                "$f(-x) = 4x^2 - 16x + 64$",
                "$f(x) = 4x^2 - 16x + 64$",
                "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(x) = 4*x^2+16*x+64",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that decides whether $f(x) = (2x + 8)^2 - 16x$ is even, odd or neither, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 squares $2x + 8$ term by term, as $4x^2 + 64$, and leaves out the middle term $32x$.",
                  "reason": "A power taken term by term over a sum: the square of a sum is taken as the sum of the squares. Square of a binomial sets it right: $(2x + 8)^2 = 4x^2 + 32x + 64$."
                },
                {
                  "step": "Line 3 written right is $f(x) = 4x^2 + 16x + 64$.",
                  "reason": "Even function and Odd function: with the line set right, $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t223-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of the even function $f$ that has $f(x) = 2(x - 2)^2 - 2$ for every $x \\ge 0$.",
            "lines": [
              {
                "step": "Sketch the graph of the even function $f$ that has $f(x) = 2(x - 2)^2 - 2$ for every $x \\ge 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x \\ge 0$ the graph is part of a parabola with vertex $(2, -2)$ that opens upward.",
                "reason": "Standard form $y = a(x - h)^2 + k$: here $a = 2$, $h = 2$ and $k = -2$."
              },
              {
                "step": "That part meets the $x$-axis where $2(x - 2)^2 - 2 = 0$, that is where $(x - 2)^2 = 1$.",
                "reason": "Dividing both sides by a nonzero number: $2$ is added to both sides, and then both sides are divided by $2$."
              },
              {
                "step": "So it meets the $x$-axis at $(1, 0)$ and $(3, 0)$.",
                "reason": "Square roots of both sides: $x - 2 = 1$ or $x - 2 = -1$."
              },
              {
                "step": "It meets the $y$-axis at $(0, 6)$.",
                "reason": "Definition of the $y$-intercept: at $x = 0$, $y = 6$."
              },
              {
                "step": "The graph also has the points $(-2, -2)$, $(-1, 0)$ and $(-3, 0)$.",
                "reason": "Symmetry of even and odd graphs: $f$ is even, so with each point $(a, b)$ its graph has the point $(-a, b)$."
              },
              {
                "step": "The graph is the part of the parabola for $x \\ge 0$ together with its mirror image in the $y$-axis.",
                "reason": "Symmetry of even and odd graphs: the graph of an even function is its own mirror image in the $y$-axis.",
                "figure": {
                  "file": "even-and-odd-functions-19.svg",
                  "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 6), with vertices at (2, −2) and (−2, −2), through (1, 0), (3, 0), (−1, 0) and (−3, 0)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $f$, an odd function with $f(x) = 3(x - 1)^2 - 3$ for $x \\ge 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-2, 0)$",
                  "$(0, 0)$",
                  "$(2, 0)$"
                ],
                "turning": [
                  "$(-1, 3)$",
                  "$(1, -3)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $f$, an odd function with $f(x) = 3(x - 1)^2 - 3$ for $x \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 0$ the graph is part of a parabola with vertex $(1, -3)$ that opens upward.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: here $a = 3$, $h = 1$ and $k = -3$."
                },
                {
                  "step": "That part meets the $x$-axis where $3(x - 1)^2 - 3 = 0$, that is where $(x - 1)^2 = 1$.",
                  "reason": "Dividing both sides by a nonzero number: $3$ is added to both sides, and then both sides are divided by $3$."
                },
                {
                  "step": "So it meets the $x$-axis at $(0, 0)$ and $(2, 0)$.",
                  "reason": "Square roots of both sides: $x - 1 = 1$ or $x - 1 = -1$."
                },
                {
                  "step": "It meets the $y$-axis at $(0, 0)$.",
                  "reason": "Definition of the $y$-intercept: at $x = 0$, $y = 0$."
                },
                {
                  "step": "The graph also has the points $(-1, 3)$ and $(-2, 0)$.",
                  "reason": "Symmetry of even and odd graphs: $f$ is odd, so with each point $(a, b)$ its graph has the point $(-a, -b)$."
                },
                {
                  "step": "The graph is the part of the parabola for $x \\ge 0$ together with its image under a half-turn about the origin.",
                  "reason": "Symmetry of even and odd graphs: a half-turn about the origin carries the graph of an odd function onto itself.",
                  "figure": {
                    "file": "even-and-odd-functions-20.svg",
                    "alt": "A curve through the origin with vertices at (1, −3) and (−1, 3), through (2, 0) and (−2, 0); a half-turn about the origin carries it onto itself."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = (x + 3)^2 - 1$ whenever $x \\le 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-4, 0)$",
                  "$(-2, 0)$",
                  "$(0, 8)$",
                  "$(2, 0)$",
                  "$(4, 0)$"
                ],
                "turning": [
                  "$(-3, -1)$",
                  "$(0, 8)$",
                  "$(3, -1)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = (x + 3)^2 - 1$ whenever $x \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\le 0$ the graph is part of a parabola with vertex $(-3, -1)$ that opens upward.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: here $a = 1$, $h = -3$ and $k = -1$."
                },
                {
                  "step": "That part meets the $x$-axis where $(x + 3)^2 - 1 = 0$, that is where $(x + 3)^2 = 1$.",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "So it meets the $x$-axis at $(-2, 0)$ and $(-4, 0)$.",
                  "reason": "Square roots of both sides: $x + 3 = 1$ or $x + 3 = -1$."
                },
                {
                  "step": "It meets the $y$-axis at $(0, 8)$.",
                  "reason": "Definition of the $y$-intercept: at $x = 0$, $y = 8$."
                },
                {
                  "step": "The graph also has the points $(3, -1)$, $(2, 0)$ and $(4, 0)$.",
                  "reason": "Symmetry of even and odd graphs: $f$ is even, so with each point $(a, b)$ its graph has the point $(-a, b)$."
                },
                {
                  "step": "The graph is the part of the parabola for $x \\le 0$ together with its mirror image in the $y$-axis.",
                  "reason": "Symmetry of even and odd graphs: the graph of an even function is its own mirror image in the $y$-axis.",
                  "figure": {
                    "file": "even-and-odd-functions-21.svg",
                    "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 8), with vertices at (−3, −1) and (3, −1), through (−2, 0), (−4, 0), (2, 0) and (4, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of the odd function $f$ that has $f(x) = -\\dfrac{1}{2}(x - 4)^2 + 8$ for every $x \\ge 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-8, 0)$",
                  "$(0, 0)$",
                  "$(8, 0)$"
                ],
                "turning": [
                  "$(-4, -8)$",
                  "$(4, 8)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of the odd function $f$ that has $f(x) = -\\dfrac{1}{2}(x - 4)^2 + 8$ for every $x \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 0$ the graph is part of a parabola with vertex $(4, 8)$ that opens downward.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: here $a = -\\dfrac{1}{2}$, $h = 4$ and $k = 8$."
                },
                {
                  "step": "That part meets the $x$-axis where $-\\dfrac{1}{2}(x - 4)^2 + 8 = 0$, that is where $(x - 4)^2 = 16$.",
                  "reason": "Dividing both sides by a nonzero number: $8$ is taken from both sides, and then both sides are divided by $-\\dfrac{1}{2}$."
                },
                {
                  "step": "So it meets the $x$-axis at $(0, 0)$ and $(8, 0)$.",
                  "reason": "Square roots of both sides: $x - 4 = 4$ or $x - 4 = -4$."
                },
                {
                  "step": "It meets the $y$-axis at $(0, 0)$.",
                  "reason": "Definition of the $y$-intercept: at $x = 0$, $y = 0$."
                },
                {
                  "step": "The graph also has the points $(-4, -8)$ and $(-8, 0)$.",
                  "reason": "Symmetry of even and odd graphs: $f$ is odd, so with each point $(a, b)$ its graph has the point $(-a, -b)$."
                },
                {
                  "step": "The graph is the part of the parabola for $x \\ge 0$ together with its image under a half-turn about the origin.",
                  "reason": "Symmetry of even and odd graphs: a half-turn about the origin carries the graph of an odd function onto itself.",
                  "figure": {
                    "file": "even-and-odd-functions-22.svg",
                    "alt": "A curve through the origin with vertices at (4, 8) and (−4, −8), through (8, 0) and (−8, 0); a half-turn about the origin carries it onto itself."
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
      "id": "t223-p1",
      "method": "direct proof",
      "statement": "Let $f$ be a function. If $f$ is even, then for every point $(a, b)$ of the graph of $f$ the point $(-a, b)$ is on the graph of $f$. And if the point $(-a, b)$ is on the graph of $f$ for every point $(a, b)$ of that graph, then $f$ is even.",
      "idea": "A point of the graph is an input with its output. So \"the output at $-a$ is the output at $a$\" and \"the graph has $(-a, b)$ with $(a, b)$\" say the same thing.",
      "lines": [
        {
          "line": "Let $f$ be even, and let $(a, b)$ be a point of the graph of $f$.",
          "reason": "Even function: the first claim starts from an even function and a point of its graph."
        },
        {
          "line": "Then $a$ is in the domain of $f$ and $b = f(a)$.",
          "reason": "Graph of a function: a point $(p, q)$ is on the graph of $f$ exactly when $p$ is in the domain of $f$ and $q = f(p)$."
        },
        {
          "line": "So $-a$ is in the domain of $f$ and $f(-a) = f(a)$.",
          "reason": "Even function: $f$ is even, and $a$ is in its domain."
        },
        {
          "line": "So $f(-a) = b$.",
          "reason": "Substituting a value: by line 2, $b$ goes in place of $f(a)$."
        },
        {
          "line": "So $(-a, b)$ is on the graph of $f$.",
          "reason": "Graph of a function: a point $(p, q)$ is on the graph of $f$ exactly when $p$ is in the domain of $f$ and $q = f(p)$."
        },
        {
          "line": "Now let $f$ be a function whose graph has the point $(-a, b)$ with each of its points $(a, b)$, and let $x$ be a number in the domain of $f$.",
          "reason": "Even function: the definition speaks of each number $x$ in the domain."
        },
        {
          "line": "Then $(x, f(x))$ is a point of the graph of $f$.",
          "reason": "Graph of a function: a point $(p, q)$ is on the graph of $f$ exactly when $p$ is in the domain of $f$ and $q = f(p)$."
        },
        {
          "line": "So $(-x, f(x))$ is a point of the graph of $f$.",
          "reason": "The hypothesis: it holds for the point with $a = x$ and $b = f(x)$."
        },
        {
          "line": "So $-x$ is in the domain of $f$ and $f(-x) = f(x)$.",
          "reason": "Graph of a function: a point $(p, q)$ is on the graph of $f$ exactly when $p$ is in the domain of $f$ and $q = f(p)$."
        },
        {
          "line": "Therefore $f$ is even.",
          "reason": "Even function: line 9 holds for every number $x$ in the domain."
        }
      ]
    },
    {
      "id": "t223-p2",
      "method": "direct proof",
      "statement": "Let $f$ be a function. If $f$ is odd, then for every point $(a, b)$ of the graph of $f$ the point $(-a, -b)$ is on the graph of $f$. And if the point $(-a, -b)$ is on the graph of $f$ for every point $(a, b)$ of that graph, then $f$ is odd.",
      "idea": "A point of the graph is an input with its output. So \"the output at $-a$ is the opposite of the output at $a$\" and \"the graph has $(-a, -b)$ with $(a, b)$\" say the same thing.",
      "lines": [
        {
          "line": "Let $f$ be odd, and let $(a, b)$ be a point of the graph of $f$.",
          "reason": "Odd function: the first claim starts from an odd function and a point of its graph."
        },
        {
          "line": "Then $a$ is in the domain of $f$ and $b = f(a)$.",
          "reason": "Graph of a function: a point $(p, q)$ is on the graph of $f$ exactly when $p$ is in the domain of $f$ and $q = f(p)$."
        },
        {
          "line": "So $-a$ is in the domain of $f$ and $f(-a) = -f(a)$.",
          "reason": "Odd function: $f$ is odd, and $a$ is in its domain."
        },
        {
          "line": "So $f(-a) = -b$.",
          "reason": "Substituting a value: by line 2, $b$ goes in place of $f(a)$."
        },
        {
          "line": "So $(-a, -b)$ is on the graph of $f$.",
          "reason": "Graph of a function: a point $(p, q)$ is on the graph of $f$ exactly when $p$ is in the domain of $f$ and $q = f(p)$."
        },
        {
          "line": "Now let $f$ be a function whose graph has the point $(-a, -b)$ with each of its points $(a, b)$, and let $x$ be a number in the domain of $f$.",
          "reason": "Odd function: the definition speaks of each number $x$ in the domain."
        },
        {
          "line": "Then $(x, f(x))$ is a point of the graph of $f$.",
          "reason": "Graph of a function: a point $(p, q)$ is on the graph of $f$ exactly when $p$ is in the domain of $f$ and $q = f(p)$."
        },
        {
          "line": "So $(-x, -f(x))$ is a point of the graph of $f$.",
          "reason": "The hypothesis: it holds for the point with $a = x$ and $b = f(x)$."
        },
        {
          "line": "So $-x$ is in the domain of $f$ and $f(-x) = -f(x)$.",
          "reason": "Graph of a function: a point $(p, q)$ is on the graph of $f$ exactly when $p$ is in the domain of $f$ and $q = f(p)$."
        },
        {
          "line": "Therefore $f$ is odd.",
          "reason": "Odd function: line 9 holds for every number $x$ in the domain."
        }
      ]
    },
    {
      "id": "t223-p3",
      "method": "direct proof",
      "statement": "Let $f$ be a function whose domain holds $-x$ with every number $x$ it holds. For $x$ in that domain let $g(x) = \\dfrac{f(x) + f(-x)}{2}$ and $h(x) = \\dfrac{f(x) - f(-x)}{2}$. Then $g$ is even, $h$ is odd, and $g(x) + h(x) = f(x)$ for every $x$ in the domain.",
      "idea": "Putting $-x$ in place of $x$ swaps $f(x)$ and $f(-x)$. The sum of the two does not change, their difference changes its sign, and in $g(x) + h(x)$ the two terms $f(-x)$ cancel.",
      "lines": [
        {
          "line": "Let $x$ be a number in the domain of $f$; then $-x$ is in the domain too.",
          "reason": "The hypothesis: the domain holds $-x$ with every number $x$ it holds."
        },
        {
          "line": "$g(-x) = \\dfrac{f(-x) + f(-(-x))}{2}$",
          "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
        },
        {
          "line": "$g(-x) = \\dfrac{f(-x) + f(x)}{2}$",
          "reason": "Signs of products, from arithmetic: $-(-x) = x$."
        },
        {
          "line": "$g(-x) = g(x)$",
          "reason": "Assumptions on addition, from arithmetic: addition is commutative, so $f(-x) + f(x) = f(x) + f(-x)$."
        },
        {
          "line": "So $g$ is even.",
          "reason": "Even function: lines 1 and 4 hold for every number $x$ in the domain."
        },
        {
          "line": "$h(-x) = \\dfrac{f(-x) - f(-(-x))}{2}$",
          "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
        },
        {
          "line": "$h(-x) = \\dfrac{f(-x) - f(x)}{2}$",
          "reason": "Signs of products, from arithmetic: $-(-x) = x$."
        },
        {
          "line": "$h(-x) = -\\dfrac{f(x) - f(-x)}{2}$",
          "reason": "Subtracting a bracket: $-(f(x) - f(-x)) = -f(x) + f(-x)$, which is the top of line 7."
        },
        {
          "line": "$h(-x) = -h(x)$",
          "reason": "Substituting a value: by its definition, $h(x)$ goes in place of $\\dfrac{f(x) - f(-x)}{2}$."
        },
        {
          "line": "So $h$ is odd.",
          "reason": "Odd function: lines 1 and 9 hold for every number $x$ in the domain."
        },
        {
          "line": "$g(x) + h(x) = \\dfrac{f(x) + f(-x) + f(x) - f(-x)}{2}$",
          "reason": "Single fraction: the two fractions have the same denominator, so their tops are added."
        },
        {
          "line": "$g(x) + h(x) = \\dfrac{2f(x)}{2}$",
          "reason": "Collecting like terms: $f(-x) - f(-x) = 0$ and $f(x) + f(x) = 2f(x)$."
        },
        {
          "line": "Therefore $g(x) + h(x) = f(x)$.",
          "reason": "Cancelling a common factor: the factor $2$ is cancelled from top and bottom."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t223-s1",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ are even functions with the same domain, then $h(x) = f(x) + g(x)$ is even. Facts it may use: Even function, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain; then $-x$ is in the domain too.",
            "reason": "Even function: $f$ is even, and its domain is the domain of $h$."
          },
          {
            "line": "$h(-x) = f(-x) + g(-x)$",
            "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
          },
          {
            "line": "$f(-x) = f(x)$",
            "reason": "Even function: $f$ is even."
          },
          {
            "line": "$g(-x) = g(x)$",
            "reason": "Even function: $g$ is even."
          },
          {
            "line": "So $h(-x) = f(x) + g(-x)$.",
            "reason": "Substituting a value: by line 3, $f(x)$ goes in place of $f(-x)$."
          },
          {
            "line": "So $h(-x) = f(x) + g(x)$.",
            "reason": "Substituting a value: by line 4, $g(x)$ goes in place of $g(-x)$."
          },
          {
            "line": "So $h(-x) = h(x)$.",
            "reason": "Sum, difference, product and quotient of functions: $h(x)$ is the sum $f(x) + g(x)$."
          },
          {
            "line": "Therefore $h$ is even.",
            "reason": "Even function: lines 1 and 7 hold for every number $x$ in the domain."
          }
        ]
      }
    },
    {
      "id": "t223-s2",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ are odd functions with the same domain, then $h(x) = f(x) + g(x)$ is odd. Facts it may use: Odd function, substituting a value, subtracting a bracket.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain; then $-x$ is in the domain too.",
            "reason": "Odd function: $f$ is odd, and its domain is the domain of $h$."
          },
          {
            "line": "$h(-x) = f(-x) + g(-x)$",
            "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
          },
          {
            "line": "$f(-x) = -f(x)$",
            "reason": "Odd function: $f$ is odd."
          },
          {
            "line": "$g(-x) = -g(x)$",
            "reason": "Odd function: $g$ is odd."
          },
          {
            "line": "So $h(-x) = -f(x) + g(-x)$.",
            "reason": "Substituting a value: by line 3, $-f(x)$ goes in place of $f(-x)$."
          },
          {
            "line": "So $h(-x) = -f(x) - g(x)$.",
            "reason": "Substituting a value: by line 4, $-g(x)$ goes in place of $g(-x)$."
          },
          {
            "line": "So $h(-x) = -(f(x) + g(x))$.",
            "reason": "Subtracting a bracket: a minus sign in front of a bracket changes every sign in it."
          },
          {
            "line": "So $h(-x) = -h(x)$.",
            "reason": "Sum, difference, product and quotient of functions: $h(x)$ is the sum $f(x) + g(x)$."
          },
          {
            "line": "Therefore $h$ is odd.",
            "reason": "Odd function: lines 1 and 8 hold for every number $x$ in the domain."
          }
        ]
      }
    },
    {
      "id": "t223-s3",
      "method": "direct proof",
      "statement": "Prove that if $f$ is an even function and $g$ is an odd function with the same domain, then $h(x) = f(x)g(x)$ is odd. Facts it may use: Even function, Odd function, substituting a value, signs of products.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain; then $-x$ is in the domain too.",
            "reason": "Even function: $f$ is even, and its domain is the domain of $h$."
          },
          {
            "line": "$h(-x) = f(-x)g(-x)$",
            "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
          },
          {
            "line": "$f(-x) = f(x)$",
            "reason": "Even function: $f$ is even."
          },
          {
            "line": "$g(-x) = -g(x)$",
            "reason": "Odd function: $g$ is odd."
          },
          {
            "line": "So $h(-x) = f(x)g(-x)$.",
            "reason": "Substituting a value: by line 3, $f(x)$ goes in place of $f(-x)$."
          },
          {
            "line": "So $h(-x) = f(x)\\left(-g(x)\\right)$.",
            "reason": "Substituting a value: by line 4, $-g(x)$, in brackets, goes in place of $g(-x)$."
          },
          {
            "line": "So $h(-x) = -f(x)g(x)$.",
            "reason": "Signs of products, from arithmetic: one factor with a minus sign gives the opposite of the product."
          },
          {
            "line": "So $h(-x) = -h(x)$.",
            "reason": "Sum, difference, product and quotient of functions: $h(x)$ is the product $f(x)g(x)$."
          },
          {
            "line": "Therefore $h$ is odd.",
            "reason": "Odd function: lines 1 and 8 hold for every number $x$ in the domain."
          }
        ]
      }
    },
    {
      "id": "t223-s4",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ are odd functions with the same domain, then $h(x) = f(x)g(x)$ is even. Facts it may use: Even function, Odd function, substituting a value, signs of products.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain; then $-x$ is in the domain too.",
            "reason": "Odd function: $f$ is odd, and its domain is the domain of $h$."
          },
          {
            "line": "$h(-x) = f(-x)g(-x)$",
            "reason": "Substituting a value: $-x$, in brackets, goes in place of $x$."
          },
          {
            "line": "$f(-x) = -f(x)$",
            "reason": "Odd function: $f$ is odd."
          },
          {
            "line": "$g(-x) = -g(x)$",
            "reason": "Odd function: $g$ is odd."
          },
          {
            "line": "So $h(-x) = \\left(-f(x)\\right)g(-x)$.",
            "reason": "Substituting a value: by line 3, $-f(x)$, in brackets, goes in place of $f(-x)$."
          },
          {
            "line": "So $h(-x) = \\left(-f(x)\\right)\\left(-g(x)\\right)$.",
            "reason": "Substituting a value: by line 4, $-g(x)$, in brackets, goes in place of $g(-x)$."
          },
          {
            "line": "So $h(-x) = f(x)g(x)$.",
            "reason": "Signs of products, from arithmetic: two factors with a minus sign give a product with none."
          },
          {
            "line": "So $h(-x) = h(x)$.",
            "reason": "Sum, difference, product and quotient of functions: $h(x)$ is the product $f(x)g(x)$."
          },
          {
            "line": "Therefore $h$ is even.",
            "reason": "Even function: lines 1 and 8 hold for every number $x$ in the domain."
          }
        ]
      }
    },
    {
      "id": "t223-s5",
      "method": "direct proof",
      "statement": "Prove that if a function $f$ is both even and odd, then $f(x) = 0$ for every number $x$ in its domain. Facts it may use: Even function, Odd function, transitive property, adding the same number to both sides, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain of $f$.",
            "reason": "Even function: the definition speaks of each number $x$ in the domain."
          },
          {
            "line": "$f(-x) = f(x)$",
            "reason": "Even function: $f$ is even."
          },
          {
            "line": "$f(-x) = -f(x)$",
            "reason": "Odd function: $f$ is odd."
          },
          {
            "line": "So $f(x) = -f(x)$.",
            "reason": "Transitive property: by lines 2 and 3, both sides equal $f(-x)$."
          },
          {
            "line": "So $2f(x) = 0$.",
            "reason": "Adding the same number to both sides: $f(x)$ is added to both sides."
          },
          {
            "line": "Therefore $f(x) = 0$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
          }
        ]
      }
    },
    {
      "id": "t223-s6",
      "method": "direct proof",
      "statement": "Prove that if $f$ is an odd function and $0$ is in its domain, then $f(0) = 0$. Facts it may use: Odd function, substituting a value, adding the same number to both sides, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "$f(-0) = -f(0)$",
            "reason": "Odd function: $f$ is odd, and $0$ is in its domain."
          },
          {
            "line": "So $f(0) = -f(0)$.",
            "reason": "Substituting a value: $-0$ is $0$."
          },
          {
            "line": "So $2f(0) = 0$.",
            "reason": "Adding the same number to both sides: $f(0)$ is added to both sides."
          },
          {
            "line": "Therefore $f(0) = 0$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
          }
        ]
      }
    },
    {
      "id": "t223-s7",
      "method": "direct proof",
      "statement": "Prove that if $f$ is an odd function and the points $(a, b)$ and $(-a, b)$ are both on the graph of $f$, then $b = 0$. Facts it may use: Symmetry of even and odd graphs, graph of a function, adding the same number to both sides, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "The point $(-a, -b)$ is on the graph of $f$.",
            "reason": "Symmetry of even and odd graphs: $f$ is odd, and $(a, b)$ is on its graph."
          },
          {
            "line": "So $-b = b$.",
            "reason": "Graph of a function: the graph has one point on the vertical line $x = -a$, so $(-a, -b)$ and $(-a, b)$ are the same point."
          },
          {
            "line": "So $0 = 2b$.",
            "reason": "Adding the same number to both sides: $b$ is added to both sides."
          },
          {
            "line": "Therefore $b = 0$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
          }
        ]
      }
    },
    {
      "id": "t223-s8",
      "method": "direct proof",
      "statement": "Prove that if $f(x) = g(x) + h(x)$ for every real number $x$, where $g$ is an even function and $h$ is an odd function, each with domain all real numbers, then $g(x)$ is the even part of $f$: $g(x) = \\dfrac{f(x) + f(-x)}{2}$ for every real number $x$. Facts it may use: Even function, Odd function, Even and odd parts, substituting a value, adding two equations, collecting like terms, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a real number. Then $f(-x) = g(-x) + h(-x)$.",
            "reason": "The hypothesis: it holds for every real number, so it holds for $-x$."
          },
          {
            "line": "$g(-x) = g(x)$",
            "reason": "Even function: $g$ is even."
          },
          {
            "line": "$h(-x) = -h(x)$",
            "reason": "Odd function: $h$ is odd."
          },
          {
            "line": "So $f(-x) = g(x) + h(-x)$.",
            "reason": "Substituting a value: by line 2, $g(x)$ goes in place of $g(-x)$."
          },
          {
            "line": "So $f(-x) = g(x) - h(x)$.",
            "reason": "Substituting a value: by line 3, $-h(x)$ goes in place of $h(-x)$."
          },
          {
            "line": "So $f(x) + f(-x) = g(x) + h(x) + g(x) - h(x)$.",
            "reason": "Adding two equations: $f(x) = g(x) + h(x)$ and line 5 are added."
          },
          {
            "line": "So $f(x) + f(-x) = 2g(x)$.",
            "reason": "Collecting like terms: $h(x) - h(x) = 0$ and $g(x) + g(x) = 2g(x)$."
          },
          {
            "line": "Therefore $g(x) = \\dfrac{f(x) + f(-x)}{2}$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
          }
        ]
      }
    },
    {
      "id": "t223-s9",
      "method": "direct proof",
      "statement": "Prove that a polynomial that is an odd function has coefficient $0$ at every even power of $x$, its constant term among them. Facts it may use: Odd function, the sign of a power of a negative number, subtracting a bracket, equal for all $x$ means equal coefficients, adding the same number to both sides, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "Let $f(x)$ be a polynomial that is an odd function, let $k$ be an even whole number, and let $a$ be the coefficient of $x^k$ in $f(x)$; for $k = 0$ this is the constant term.",
            "reason": "The hypothesis: the statement speaks of an odd polynomial and of each even power of $x$ in it."
          },
          {
            "line": "Then $f(-x) = -f(x)$ for every number $x$.",
            "reason": "Odd function: $f$ is odd, and the domain of a polynomial is all real numbers."
          },
          {
            "line": "The term of $f(-x)$ with $x^k$ is $a(-x)^k$, which is $ax^k$.",
            "reason": "The sign of a power of a negative number: $k$ is even, so $(-x)^k = x^k$."
          },
          {
            "line": "The term of $-f(x)$ with $x^k$ is $-ax^k$.",
            "reason": "Subtracting a bracket: the minus sign in front changes the sign of every term of $f(x)$."
          },
          {
            "line": "So $a = -a$.",
            "reason": "Equal for all $x$ means equal coefficients: by line 2 the polynomials $f(-x)$ and $-f(x)$ are equal at every number $x$, so their coefficients of $x^k$, from lines 3 and 4, are equal."
          },
          {
            "line": "So $2a = 0$.",
            "reason": "Adding the same number to both sides: $a$ is added to both sides."
          },
          {
            "line": "Therefore $a = 0$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
          }
        ]
      }
    }
  ]
}
