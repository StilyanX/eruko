export default {
  "number": 123,
  "title": "The coordinate plane, distance and midpoint",
  "section": 5,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "208-215, 225-228"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the distance between $(-2, 3)$ and $(19, -25)$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "35",
    "solution": [
      "Find the distance between $(-2, 3)$ and $(19, -25)$.",
      "$d = \\sqrt{(19 - (-2))^2 + (-25 - 3)^2}$",
      "$d = \\sqrt{21^2 + (-28)^2}$",
      "$d = \\sqrt{441 + 784}$",
      "$d = \\sqrt{1225}$",
      "$d = 35$"
    ]
  },
  "ideas": [
    {
      "name": "Cartesian plane",
      "concrete": "From the origin, the point $(3, -2)$ is $3$ steps to the right and $2$ steps down; it lies in the fourth quadrant, and its coordinates are whole numbers, so it is a lattice point.",
      "general": "The **Cartesian plane** is a horizontal number line, the **$x$-axis**, and a vertical one, the **$y$-axis**, crossing at $0$ on each, the **origin**. Each point is an ordered pair $(x, y)$ of real numbers, its **coordinates**: $x$ steps right of the origin (left where $x$ is negative) and $y$ steps up (down where $y$ is negative). The axes split the plane into four **quadrants**, the first to the fourth, starting where both coordinates are positive and going round against the clock. A point whose coordinates are both integers is a **lattice point**.",
      "figure": {
        "file": "distance-and-midpoint-1.svg",
        "alt": "The x-axis and y-axis with the point (3, −2)."
      }
    },
    {
      "name": "Distance on the number line",
      "concrete": "From $-4$ to $3$ on the number line is $7$ steps, and $|3 - (-4)| = 7$.",
      "general": "For real numbers $a$ and $b$, the distance between $a$ and $b$ on the number line is $|a - b|$."
    },
    {
      "name": "Distance formula",
      "concrete": "From $(1, 1)$ to $(4, 5)$ the run is $3$ and the rise is $4$; these are the legs of a right triangle, so the distance is $\\sqrt{3^2 + 4^2} = 5$.",
      "general": "For points $(x_1, y_1)$ and $(x_2, y_2)$, the distance between them is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
      "figure": {
        "file": "distance-and-midpoint-2.svg",
        "alt": "A segment from (1, 1) to (4, 5) with a horizontal leg of 3 and a vertical leg of 4."
      }
    },
    {
      "name": "Midpoint formula",
      "concrete": "Halfway between $2$ and $8$ on the number line is $5 = \\dfrac{2 + 8}{2}$; halfway from $(2, 1)$ to $(8, 5)$ is $(5, 3)$, each coordinate halfway on its own.",
      "general": "For real numbers $a$ and $b$, the number halfway between them on the number line is $\\dfrac{a + b}{2}$. For points $(x_1, y_1)$ and $(x_2, y_2)$, the midpoint of the segment between them is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$."
    },
    {
      "name": "Point dividing a segment in a ratio",
      "concrete": "From $(0, 0)$ to $(6, 3)$, a third of the way is $\\left(0 + \\dfrac{1}{3} \\cdot 6, 0 + \\dfrac{1}{3} \\cdot 3\\right) = (2, 1)$, and its distances from the two ends are in the ratio $1 : 2$.",
      "general": "For points $(x_1, y_1)$ and $(x_2, y_2)$ and a number $c$ between $0$ and $1$, the point $c$ of the way from the first to the second is $\\left(x_1 + c(x_2 - x_1), y_1 + c(y_2 - y_1)\\right)$. For positive whole numbers $n$ and $k$, the point whose distances from the two ends are in the ratio $n : k$ is $\\dfrac{n}{n + k}$ of the way."
    }
  ],
  "kinds": [
    {
      "id": "t123-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the distance between $6$ and $-9$ on the number line.",
            "lines": [
              {
                "step": "Find the distance between $6$ and $-9$ on the number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$d = |6 - (-9)|$",
                "reason": "Distance on the number line: the distance between two numbers is the absolute value of their difference, written $d$."
              },
              {
                "step": "$d = |15|$",
                "reason": "Subtraction as addition: taking away $-9$ adds its opposite, $9$."
              },
              {
                "step": "$d = 15$",
                "reason": "Absolute value: the absolute value of a number is its distance from $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the distance between $-11$ and $-4$ on the number line.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the distance between $-11$ and $-4$ on the number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = |-11 - (-4)|$",
                  "reason": "Distance on the number line: the distance between two numbers is the absolute value of their difference, written $d$."
                },
                {
                  "step": "$d = |-7|$",
                  "reason": "Subtraction as addition: taking away $-4$ adds its opposite, $4$."
                },
                {
                  "step": "$d = 7$",
                  "reason": "Absolute value: the absolute value of a number is its distance from $0$."
                }
              ]
            },
            {
              "prompt": "Find the distance between $13$ and $-6$ on the number line.",
              "form": "Answer as an integer.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find the distance between $13$ and $-6$ on the number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = |13 - (-6)|$",
                  "reason": "Distance on the number line: the distance between two numbers is the absolute value of their difference, written $d$."
                },
                {
                  "step": "$d = |19|$",
                  "reason": "Subtraction as addition: taking away $-6$ adds its opposite, $6$."
                },
                {
                  "step": "$d = 19$",
                  "reason": "Absolute value: the absolute value of a number is its distance from $0$."
                }
              ]
            },
            {
              "prompt": "Find the distance between $-2$ and $-15$ on the number line.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find the distance between $-2$ and $-15$ on the number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = |-2 - (-15)|$",
                  "reason": "Distance on the number line: the distance between two numbers is the absolute value of their difference, written $d$."
                },
                {
                  "step": "$d = |13|$",
                  "reason": "Subtraction as addition: taking away $-15$ adds its opposite, $15$."
                },
                {
                  "step": "$d = 13$",
                  "reason": "Absolute value: the absolute value of a number is its distance from $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the distance between $(3, -4)$ and $(-5, 11)$.",
            "lines": [
              {
                "step": "Find the distance between $(3, -4)$ and $(-5, 11)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$d = \\sqrt{(-5 - 3)^2 + (11 - (-4))^2}$",
                "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
              },
              {
                "step": "$d = \\sqrt{(-8)^2 + 15^2}$",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$d = \\sqrt{64 + 225}$",
                "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
              },
              {
                "step": "$d = \\sqrt{289}$",
                "reason": "Sum of positive rational numbers: the two squares under the root are added."
              },
              {
                "step": "$d = 17$",
                "reason": "Positive square root: $17 \\cdot 17 = 289$ and $17$ is positive, so $\\sqrt{289} = 17$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the distance between $(-6, 2)$ and $(14, -19)$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "29",
              "lines": [
                {
                  "step": "Find the distance between $(-6, 2)$ and $(14, -19)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = \\sqrt{(14 - (-6))^2 + (-19 - 2)^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$d = \\sqrt{20^2 + (-21)^2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$d = \\sqrt{400 + 441}$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$d = \\sqrt{841}$",
                  "reason": "Sum of positive rational numbers: the two squares under the root are added."
                },
                {
                  "step": "$d = 29$",
                  "reason": "Positive square root: $29 \\cdot 29 = 841$ and $29$ is positive, so $\\sqrt{841} = 29$."
                }
              ]
            },
            {
              "prompt": "Find the distance between $(5, -9)$ and $(-7, 26)$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "37",
              "lines": [
                {
                  "step": "Find the distance between $(5, -9)$ and $(-7, 26)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = \\sqrt{(-7 - 5)^2 + (26 - (-9))^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$d = \\sqrt{(-12)^2 + 35^2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$d = \\sqrt{144 + 1225}$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$d = \\sqrt{1369}$",
                  "reason": "Sum of positive rational numbers: the two squares under the root are added."
                },
                {
                  "step": "$d = 37$",
                  "reason": "Positive square root: $37 \\cdot 37 = 1369$ and $37$ is positive, so $\\sqrt{1369} = 37$."
                }
              ]
            },
            {
              "prompt": "Find the distance between $(7, -15)$ and $(-2, 25)$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "41",
              "lines": [
                {
                  "step": "Find the distance between $(7, -15)$ and $(-2, 25)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = \\sqrt{(-2 - 7)^2 + (25 - (-15))^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$d = \\sqrt{(-9)^2 + 40^2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$d = \\sqrt{81 + 1600}$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$d = \\sqrt{1681}$",
                  "reason": "Sum of positive rational numbers: the two squares under the root are added."
                },
                {
                  "step": "$d = 41$",
                  "reason": "Positive square root: $41 \\cdot 41 = 1681$ and $41$ is positive, so $\\sqrt{1681} = 41$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the distance between $(2, -1)$ and $(-1, 5)$.",
            "lines": [
              {
                "step": "Find the distance between $(2, -1)$ and $(-1, 5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$d = \\sqrt{(-1 - 2)^2 + (5 - (-1))^2}$",
                "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
              },
              {
                "step": "$d = \\sqrt{(-3)^2 + 6^2}$",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$d = \\sqrt{9 + 36}$",
                "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
              },
              {
                "step": "$d = \\sqrt{45}$",
                "reason": "Sum of positive rational numbers: the two squares under the root are added."
              },
              {
                "step": "$d = \\sqrt{9 \\cdot 5}$",
                "reason": "Perfect square: $45$ is the perfect square $9 = 3^2$ times $5$, and $5$ has no square factor other than $1$."
              },
              {
                "step": "$d = \\sqrt{9} \\cdot \\sqrt{5}$",
                "reason": "Root of a product: for nonnegative numbers the root of a product is the product of the roots."
              },
              {
                "step": "$d = 3\\sqrt{5}$",
                "reason": "Positive square root: $3 \\cdot 3 = 9$ and $3$ is positive, so $\\sqrt{9} = 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the distance between $(-4, 3)$ and $(-2, -3)$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(10)",
              "lines": [
                {
                  "step": "Find the distance between $(-4, 3)$ and $(-2, -3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = \\sqrt{(-2 - (-4))^2 + (-3 - 3)^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$d = \\sqrt{2^2 + (-6)^2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$d = \\sqrt{4 + 36}$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$d = \\sqrt{40}$",
                  "reason": "Sum of positive rational numbers: the two squares under the root are added."
                },
                {
                  "step": "$d = \\sqrt{4 \\cdot 10}$",
                  "reason": "Perfect square: $40$ is the perfect square $4 = 2^2$ times $10$, and $10$ has no square factor other than $1$."
                },
                {
                  "step": "$d = \\sqrt{4} \\cdot \\sqrt{10}$",
                  "reason": "Root of a product: for nonnegative numbers the root of a product is the product of the roots."
                },
                {
                  "step": "$d = 2\\sqrt{10}$",
                  "reason": "Positive square root: $2 \\cdot 2 = 4$ and $2$ is positive, so $\\sqrt{4} = 2$."
                }
              ]
            },
            {
              "prompt": "Find the distance between $(5, 1)$ and $(1, 7)$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(13)",
              "lines": [
                {
                  "step": "Find the distance between $(5, 1)$ and $(1, 7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = \\sqrt{(1 - 5)^2 + (7 - 1)^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$d = \\sqrt{(-4)^2 + 6^2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$d = \\sqrt{16 + 36}$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$d = \\sqrt{52}$",
                  "reason": "Sum of positive rational numbers: the two squares under the root are added."
                },
                {
                  "step": "$d = \\sqrt{4 \\cdot 13}$",
                  "reason": "Perfect square: $52$ is the perfect square $4 = 2^2$ times $13$, and $13$ has no square factor other than $1$."
                },
                {
                  "step": "$d = \\sqrt{4} \\cdot \\sqrt{13}$",
                  "reason": "Root of a product: for nonnegative numbers the root of a product is the product of the roots."
                },
                {
                  "step": "$d = 2\\sqrt{13}$",
                  "reason": "Positive square root: $2 \\cdot 2 = 4$ and $2$ is positive, so $\\sqrt{4} = 2$."
                }
              ]
            },
            {
              "prompt": "Find the distance between $(0, -5)$ and $(-3, 7)$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(17)",
              "lines": [
                {
                  "step": "Find the distance between $(0, -5)$ and $(-3, 7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = \\sqrt{(-3 - 0)^2 + (7 - (-5))^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$d = \\sqrt{(-3)^2 + 12^2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$d = \\sqrt{9 + 144}$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$d = \\sqrt{153}$",
                  "reason": "Sum of positive rational numbers: the two squares under the root are added."
                },
                {
                  "step": "$d = \\sqrt{9 \\cdot 17}$",
                  "reason": "Perfect square: $153$ is the perfect square $9 = 3^2$ times $17$, and $17$ has no square factor other than $1$."
                },
                {
                  "step": "$d = \\sqrt{9} \\cdot \\sqrt{17}$",
                  "reason": "Root of a product: for nonnegative numbers the root of a product is the product of the roots."
                },
                {
                  "step": "$d = 3\\sqrt{17}$",
                  "reason": "Positive square root: $3 \\cdot 3 = 9$ and $3$ is positive, so $\\sqrt{9} = 3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every value of $y$ for which the distance between $(1, y)$ and $(8, -2)$ is $25$.",
            "lines": [
              {
                "step": "Find every value of $y$ for which the distance between $(1, y)$ and $(8, -2)$ is $25$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{(1 - 8)^2 + (y - (-2))^2} = 25$",
                "reason": "Distance formula: the distance between $(1, y)$ and $(8, -2)$, with each value put in place of its letter, is set equal to $25$."
              },
              {
                "step": "$\\sqrt{(-7)^2 + (y + 2)^2} = 25$",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$\\sqrt{49 + (y + 2)^2} = 25$",
                "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
              },
              {
                "step": "$49 + (y + 2)^2 = 625$",
                "reason": "Raising both sides to a power: squaring both sides removes the root on the left and gives $25^2 = 625$ on the right."
              },
              {
                "step": "$(y + 2)^2 = 576$",
                "reason": "Adding the same number to both sides: adding $-49$ to both sides leaves the square alone."
              },
              {
                "step": "$\\sqrt{(y + 2)^2} = \\sqrt{576}$",
                "reason": "Positive square root: equal positive numbers have equal positive square roots."
              },
              {
                "step": "$|y + 2| = \\sqrt{576}$",
                "reason": "Root of a square: $\\sqrt{a^2} = |a|$ for every real number $a$, here with $a = y + 2$."
              },
              {
                "step": "$|y + 2| = 24$",
                "reason": "Positive square root: $24 \\cdot 24 = 576$ and $24$ is positive."
              },
              {
                "step": "Either $y = -2 + 24$ or $y = -2 - 24$.",
                "reason": "Distance on the number line: $|y + 2| = |y - (-2)|$ is the distance from $y$ to $-2$, so $y$ is $24$ to the right or $24$ to the left of $-2$."
              },
              {
                "step": "Either $y = 22$ or $y = -26$.",
                "reason": "Addition of rational numbers: each sum is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every value of $x$ for which the distance between $(x, -3)$ and $(5, 13)$ is $20$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 17, x = -7",
              "lines": [
                {
                  "step": "Find every value of $x$ for which the distance between $(x, -3)$ and $(5, 13)$ is $20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{(x - 5)^2 + (-3 - 13)^2} = 20$",
                  "reason": "Distance formula: the distance between $(x, -3)$ and $(5, 13)$, with each value put in place of its letter, is set equal to $20$."
                },
                {
                  "step": "$\\sqrt{(x - 5)^2 + (-16)^2} = 20$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\sqrt{(x - 5)^2 + 256} = 20$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$(x - 5)^2 + 256 = 400$",
                  "reason": "Raising both sides to a power: squaring both sides removes the root on the left and gives $20^2 = 400$ on the right."
                },
                {
                  "step": "$(x - 5)^2 = 144$",
                  "reason": "Adding the same number to both sides: adding $-256$ to both sides leaves the square alone."
                },
                {
                  "step": "$\\sqrt{(x - 5)^2} = \\sqrt{144}$",
                  "reason": "Positive square root: equal positive numbers have equal positive square roots."
                },
                {
                  "step": "$|x - 5| = \\sqrt{144}$",
                  "reason": "Root of a square: $\\sqrt{a^2} = |a|$ for every real number $a$, here with $a = x - 5$."
                },
                {
                  "step": "$|x - 5| = 12$",
                  "reason": "Positive square root: $12 \\cdot 12 = 144$ and $12$ is positive."
                },
                {
                  "step": "Either $x = 5 + 12$ or $x = 5 - 12$.",
                  "reason": "Distance on the number line: $|x - 5|$ is the distance from $x$ to $5$, so $x$ is $12$ to the right or $12$ to the left of $5$."
                },
                {
                  "step": "Either $x = 17$ or $x = -7$.",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            },
            {
              "prompt": "Find every value of $y$ for which the distance between $(-20, y)$ and $(4, -6)$ is $51$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 39, y = -51",
              "lines": [
                {
                  "step": "Find every value of $y$ for which the distance between $(-20, y)$ and $(4, -6)$ is $51$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{(-20 - 4)^2 + (y - (-6))^2} = 51$",
                  "reason": "Distance formula: the distance between $(-20, y)$ and $(4, -6)$, with each value put in place of its letter, is set equal to $51$."
                },
                {
                  "step": "$\\sqrt{(-24)^2 + (y + 6)^2} = 51$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\sqrt{576 + (y + 6)^2} = 51$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$576 + (y + 6)^2 = 2601$",
                  "reason": "Raising both sides to a power: squaring both sides removes the root on the left and gives $51^2 = 2601$ on the right."
                },
                {
                  "step": "$(y + 6)^2 = 2025$",
                  "reason": "Adding the same number to both sides: adding $-576$ to both sides leaves the square alone."
                },
                {
                  "step": "$\\sqrt{(y + 6)^2} = \\sqrt{2025}$",
                  "reason": "Positive square root: equal positive numbers have equal positive square roots."
                },
                {
                  "step": "$|y + 6| = \\sqrt{2025}$",
                  "reason": "Root of a square: $\\sqrt{a^2} = |a|$ for every real number $a$, here with $a = y + 6$."
                },
                {
                  "step": "$|y + 6| = 45$",
                  "reason": "Positive square root: $45 \\cdot 45 = 2025$ and $45$ is positive."
                },
                {
                  "step": "Either $y = -6 + 45$ or $y = -6 - 45$.",
                  "reason": "Distance on the number line: $|y + 6| = |y - (-6)|$ is the distance from $y$ to $-6$, so $y$ is $45$ to the right or $45$ to the left of $-6$."
                },
                {
                  "step": "Either $y = 39$ or $y = -51$.",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            },
            {
              "prompt": "Find every value of $x$ for which the distance between $(x, 2)$ and $(-7, 26)$ is $26$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 3, x = -17",
              "lines": [
                {
                  "step": "Find every value of $x$ for which the distance between $(x, 2)$ and $(-7, 26)$ is $26$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{(x - (-7))^2 + (2 - 26)^2} = 26$",
                  "reason": "Distance formula: the distance between $(x, 2)$ and $(-7, 26)$, with each value put in place of its letter, is set equal to $26$."
                },
                {
                  "step": "$\\sqrt{(x + 7)^2 + (-24)^2} = 26$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\sqrt{(x + 7)^2 + 576} = 26$",
                  "reason": "Signs of products: the square of a negative number is positive, the same as the square of its opposite."
                },
                {
                  "step": "$(x + 7)^2 + 576 = 676$",
                  "reason": "Raising both sides to a power: squaring both sides removes the root on the left and gives $26^2 = 676$ on the right."
                },
                {
                  "step": "$(x + 7)^2 = 100$",
                  "reason": "Adding the same number to both sides: adding $-576$ to both sides leaves the square alone."
                },
                {
                  "step": "$\\sqrt{(x + 7)^2} = \\sqrt{100}$",
                  "reason": "Positive square root: equal positive numbers have equal positive square roots."
                },
                {
                  "step": "$|x + 7| = \\sqrt{100}$",
                  "reason": "Root of a square: $\\sqrt{a^2} = |a|$ for every real number $a$, here with $a = x + 7$."
                },
                {
                  "step": "$|x + 7| = 10$",
                  "reason": "Positive square root: $10 \\cdot 10 = 100$ and $10$ is positive."
                },
                {
                  "step": "Either $x = -7 + 10$ or $x = -7 - 10$.",
                  "reason": "Distance on the number line: $|x + 7| = |x - (-7)|$ is the distance from $x$ to $-7$, so $x$ is $10$ to the right or $10$ to the left of $-7$."
                },
                {
                  "step": "Either $x = 3$ or $x = -17$.",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t123-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the number halfway between $-7$ and $4$ on the number line.",
            "lines": [
              {
                "step": "Find the number halfway between $-7$ and $4$ on the number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{-7 + 4}{2}$",
                "reason": "Midpoint formula: on the number line the number halfway between $a$ and $b$ is $\\dfrac{a + b}{2}$."
              },
              {
                "step": "$\\dfrac{-3}{2}$",
                "reason": "Addition of rational numbers: the sum on top is worked out."
              },
              {
                "step": "$-\\dfrac{3}{2}$",
                "reason": "Reduced fraction: the top is odd, so the fraction is in lowest terms, with its sign written in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number halfway between $6$ and $-13$ on the number line.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-7/2",
              "lines": [
                {
                  "step": "Find the number halfway between $6$ and $-13$ on the number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{6 + (-13)}{2}$",
                  "reason": "Midpoint formula: on the number line the number halfway between $a$ and $b$ is $\\dfrac{a + b}{2}$."
                },
                {
                  "step": "$\\dfrac{-7}{2}$",
                  "reason": "Addition of rational numbers: the sum on top is worked out."
                },
                {
                  "step": "$-\\dfrac{7}{2}$",
                  "reason": "Reduced fraction: the top is odd, so the fraction is in lowest terms, with its sign written in front."
                }
              ]
            },
            {
              "prompt": "Find the number halfway between $-13$ and $-6$ on the number line.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-19/2",
              "lines": [
                {
                  "step": "Find the number halfway between $-13$ and $-6$ on the number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-13 + (-6)}{2}$",
                  "reason": "Midpoint formula: on the number line the number halfway between $a$ and $b$ is $\\dfrac{a + b}{2}$."
                },
                {
                  "step": "$\\dfrac{-19}{2}$",
                  "reason": "Addition of rational numbers: the sum on top is worked out."
                },
                {
                  "step": "$-\\dfrac{19}{2}$",
                  "reason": "Reduced fraction: the top is odd, so the fraction is in lowest terms, with its sign written in front."
                }
              ]
            },
            {
              "prompt": "Find the number halfway between $5$ and $-14$ on the number line.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-9/2",
              "lines": [
                {
                  "step": "Find the number halfway between $5$ and $-14$ on the number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5 + (-14)}{2}$",
                  "reason": "Midpoint formula: on the number line the number halfway between $a$ and $b$ is $\\dfrac{a + b}{2}$."
                },
                {
                  "step": "$\\dfrac{-9}{2}$",
                  "reason": "Addition of rational numbers: the sum on top is worked out."
                },
                {
                  "step": "$-\\dfrac{9}{2}$",
                  "reason": "Reduced fraction: the top is odd, so the fraction is in lowest terms, with its sign written in front."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the midpoint of the segment from $(3, -6)$ to $(-8, 2)$.",
            "lines": [
              {
                "step": "Find the midpoint of the segment from $(3, -6)$ to $(-8, 2)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(\\dfrac{3 + (-8)}{2}, \\dfrac{-6 + 2}{2}\\right)$",
                "reason": "Midpoint formula: the midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$."
              },
              {
                "step": "$\\left(\\dfrac{-5}{2}, \\dfrac{-4}{2}\\right)$",
                "reason": "Addition of rational numbers: each sum on top is worked out."
              },
              {
                "step": "$(-\\dfrac{5}{2}, -2)$",
                "reason": "Reduced fraction: each quotient is written in lowest terms, a whole number where $2$ divides the top."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the midpoint of the segment from $(-5, 7)$ to $(2, -1)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-3/2, 3)",
              "lines": [
                {
                  "step": "Find the midpoint of the segment from $(-5, 7)$ to $(2, -1)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{-5 + 2}{2}, \\dfrac{7 + (-1)}{2}\\right)$",
                  "reason": "Midpoint formula: the midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$."
                },
                {
                  "step": "$\\left(\\dfrac{-3}{2}, \\dfrac{6}{2}\\right)$",
                  "reason": "Addition of rational numbers: each sum on top is worked out."
                },
                {
                  "step": "$(-\\dfrac{3}{2}, 3)$",
                  "reason": "Reduced fraction: each quotient is written in lowest terms, a whole number where $2$ divides the top."
                }
              ]
            },
            {
              "prompt": "Find the midpoint of the segment from $(9, 4)$ to $(-4, -8)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(5/2, -2)",
              "lines": [
                {
                  "step": "Find the midpoint of the segment from $(9, 4)$ to $(-4, -8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{9 + (-4)}{2}, \\dfrac{4 + (-8)}{2}\\right)$",
                  "reason": "Midpoint formula: the midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$."
                },
                {
                  "step": "$\\left(\\dfrac{5}{2}, \\dfrac{-4}{2}\\right)$",
                  "reason": "Addition of rational numbers: each sum on top is worked out."
                },
                {
                  "step": "$(\\dfrac{5}{2}, -2)$",
                  "reason": "Reduced fraction: each quotient is written in lowest terms, a whole number where $2$ divides the top."
                }
              ]
            },
            {
              "prompt": "Find the midpoint of the segment from $(-1, -8)$ to $(6, 2)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(5/2, -3)",
              "lines": [
                {
                  "step": "Find the midpoint of the segment from $(-1, -8)$ to $(6, 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{-1 + 6}{2}, \\dfrac{-8 + 2}{2}\\right)$",
                  "reason": "Midpoint formula: the midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$."
                },
                {
                  "step": "$\\left(\\dfrac{5}{2}, \\dfrac{-6}{2}\\right)$",
                  "reason": "Addition of rational numbers: each sum on top is worked out."
                },
                {
                  "step": "$(\\dfrac{5}{2}, -3)$",
                  "reason": "Reduced fraction: each quotient is written in lowest terms, a whole number where $2$ divides the top."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the other endpoint of the segment with one endpoint $(4, -1)$ and midpoint $(-2, 3)$.",
            "lines": [
              {
                "step": "Find the other endpoint of the segment with one endpoint $(4, -1)$ and midpoint $(-2, 3)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{4 + x}{2} = -2$",
                "reason": "Midpoint formula: with $(x, y)$ the other endpoint, the $x$-coordinate of the midpoint is the mean of the $x$-coordinates of the two ends."
              },
              {
                "step": "$4 + x = -4$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
              },
              {
                "step": "$x = -8$",
                "reason": "Adding the same number to both sides: adding $-4$ to both sides leaves the letter alone."
              },
              {
                "step": "$\\dfrac{-1 + y}{2} = 3$",
                "reason": "Midpoint formula: with $(x, y)$ the other endpoint, the $y$-coordinate of the midpoint is the mean of the $y$-coordinates of the two ends."
              },
              {
                "step": "$-1 + y = 6$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
              },
              {
                "step": "$y = 7$",
                "reason": "Adding the same number to both sides: adding $1$ to both sides leaves the letter alone."
              },
              {
                "step": "$(-8, 7)$",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the other endpoint of the segment with one endpoint $(-6, 5)$ and midpoint $(1, -2)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(8, -9)",
              "lines": [
                {
                  "step": "Find the other endpoint of the segment with one endpoint $(-6, 5)$ and midpoint $(1, -2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-6 + x}{2} = 1$",
                  "reason": "Midpoint formula: with $(x, y)$ the other endpoint, the $x$-coordinate of the midpoint is the mean of the $x$-coordinates of the two ends."
                },
                {
                  "step": "$-6 + x = 2$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Adding the same number to both sides: adding $6$ to both sides leaves the letter alone."
                },
                {
                  "step": "$\\dfrac{5 + y}{2} = -2$",
                  "reason": "Midpoint formula: with $(x, y)$ the other endpoint, the $y$-coordinate of the midpoint is the mean of the $y$-coordinates of the two ends."
                },
                {
                  "step": "$5 + y = -4$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
                },
                {
                  "step": "$y = -9$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides leaves the letter alone."
                },
                {
                  "step": "$(8, -9)$",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            },
            {
              "prompt": "Find the other endpoint of the segment with one endpoint $(3, 8)$ and midpoint $(-1, 0)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-5, -8)",
              "lines": [
                {
                  "step": "Find the other endpoint of the segment with one endpoint $(3, 8)$ and midpoint $(-1, 0)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3 + x}{2} = -1$",
                  "reason": "Midpoint formula: with $(x, y)$ the other endpoint, the $x$-coordinate of the midpoint is the mean of the $x$-coordinates of the two ends."
                },
                {
                  "step": "$3 + x = -2$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
                },
                {
                  "step": "$x = -5$",
                  "reason": "Adding the same number to both sides: adding $-3$ to both sides leaves the letter alone."
                },
                {
                  "step": "$\\dfrac{8 + y}{2} = 0$",
                  "reason": "Midpoint formula: with $(x, y)$ the other endpoint, the $y$-coordinate of the midpoint is the mean of the $y$-coordinates of the two ends."
                },
                {
                  "step": "$8 + y = 0$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
                },
                {
                  "step": "$y = -8$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides leaves the letter alone."
                },
                {
                  "step": "$(-5, -8)$",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            },
            {
              "prompt": "Find the other endpoint of the segment with one endpoint $(-2, -7)$ and midpoint $(4, -3)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(10, 1)",
              "lines": [
                {
                  "step": "Find the other endpoint of the segment with one endpoint $(-2, -7)$ and midpoint $(4, -3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-2 + x}{2} = 4$",
                  "reason": "Midpoint formula: with $(x, y)$ the other endpoint, the $x$-coordinate of the midpoint is the mean of the $x$-coordinates of the two ends."
                },
                {
                  "step": "$-2 + x = 8$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Adding the same number to both sides: adding $2$ to both sides leaves the letter alone."
                },
                {
                  "step": "$\\dfrac{-7 + y}{2} = -3$",
                  "reason": "Midpoint formula: with $(x, y)$ the other endpoint, the $y$-coordinate of the midpoint is the mean of the $y$-coordinates of the two ends."
                },
                {
                  "step": "$-7 + y = -6$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
                },
                {
                  "step": "$y = 1$",
                  "reason": "Adding the same number to both sides: adding $7$ to both sides leaves the letter alone."
                },
                {
                  "step": "$(10, 1)$",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the point $\\dfrac{1}{3}$ of the way from $(1, -4)$ to $(13, 8)$.",
            "lines": [
              {
                "step": "Find the point $\\dfrac{1}{3}$ of the way from $(1, -4)$ to $(13, 8)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(1 + \\dfrac{1}{3}(13 - 1), -4 + \\dfrac{1}{3}(8 - (-4))\\right)$",
                "reason": "Point dividing a segment in a ratio: the point $\\dfrac{1}{3}$ of the way from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(x_1 + \\dfrac{1}{3}(x_2 - x_1), y_1 + \\dfrac{1}{3}(y_2 - y_1)\\right)$."
              },
              {
                "step": "$\\left(1 + \\dfrac{1}{3} \\cdot 12, -4 + \\dfrac{1}{3} \\cdot 12\\right)$",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$\\left(1 + 4, -4 + 4\\right)$",
                "reason": "Signs of products: each product is worked out with its sign."
              },
              {
                "step": "$(5, 0)$",
                "reason": "Addition of rational numbers: each sum is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the point $\\dfrac{3}{4}$ of the way from $(-2, 5)$ to $(6, -7)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, -4)",
              "lines": [
                {
                  "step": "Find the point $\\dfrac{3}{4}$ of the way from $(-2, 5)$ to $(6, -7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(-2 + \\dfrac{3}{4}(6 - (-2)), 5 + \\dfrac{3}{4}(-7 - 5)\\right)$",
                  "reason": "Point dividing a segment in a ratio: the point $\\dfrac{3}{4}$ of the way from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(x_1 + \\dfrac{3}{4}(x_2 - x_1), y_1 + \\dfrac{3}{4}(y_2 - y_1)\\right)$."
                },
                {
                  "step": "$\\left(-2 + \\dfrac{3}{4} \\cdot 8, 5 + \\dfrac{3}{4} \\cdot (-12)\\right)$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\left(-2 + 6, 5 + (-9)\\right)$",
                  "reason": "Signs of products: each product is worked out with its sign."
                },
                {
                  "step": "$(4, -4)$",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            },
            {
              "prompt": "Find the point $\\dfrac{2}{5}$ of the way from $(4, -1)$ to $(-6, 9)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, 3)",
              "lines": [
                {
                  "step": "Find the point $\\dfrac{2}{5}$ of the way from $(4, -1)$ to $(-6, 9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(4 + \\dfrac{2}{5}(-6 - 4), -1 + \\dfrac{2}{5}(9 - (-1))\\right)$",
                  "reason": "Point dividing a segment in a ratio: the point $\\dfrac{2}{5}$ of the way from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(x_1 + \\dfrac{2}{5}(x_2 - x_1), y_1 + \\dfrac{2}{5}(y_2 - y_1)\\right)$."
                },
                {
                  "step": "$\\left(4 + \\dfrac{2}{5} \\cdot (-10), -1 + \\dfrac{2}{5} \\cdot 10\\right)$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\left(4 + (-4), -1 + 4\\right)$",
                  "reason": "Signs of products: each product is worked out with its sign."
                },
                {
                  "step": "$(0, 3)$",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            },
            {
              "prompt": "Find the point $\\dfrac{2}{3}$ of the way from $(-9, -3)$ to $(3, 6)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1, 3)",
              "lines": [
                {
                  "step": "Find the point $\\dfrac{2}{3}$ of the way from $(-9, -3)$ to $(3, 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(-9 + \\dfrac{2}{3}(3 - (-9)), -3 + \\dfrac{2}{3}(6 - (-3))\\right)$",
                  "reason": "Point dividing a segment in a ratio: the point $\\dfrac{2}{3}$ of the way from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(x_1 + \\dfrac{2}{3}(x_2 - x_1), y_1 + \\dfrac{2}{3}(y_2 - y_1)\\right)$."
                },
                {
                  "step": "$\\left(-9 + \\dfrac{2}{3} \\cdot 12, -3 + \\dfrac{2}{3} \\cdot 9\\right)$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\left(-9 + 8, -3 + 6\\right)$",
                  "reason": "Signs of products: each product is worked out with its sign."
                },
                {
                  "step": "$(-1, 3)$",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the point on the segment from $(-3, 2)$ to $(9, -7)$ whose distances from $(-3, 2)$ and from $(9, -7)$ are in the ratio $1 : 2$.",
            "lines": [
              {
                "step": "Find the point on the segment from $(-3, 2)$ to $(9, -7)$ whose distances from $(-3, 2)$ and from $(9, -7)$ are in the ratio $1 : 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{1}{1 + 2} = \\dfrac{1}{3}$",
                "reason": "Point dividing a segment in a ratio: distances in the ratio $1 : 2$ split the segment into $1 + 2$ equal parts, and the point is $1$ of them from the first end."
              },
              {
                "step": "$\\left(-3 + \\dfrac{1}{3}(9 - (-3)), 2 + \\dfrac{1}{3}(-7 - 2)\\right)$",
                "reason": "Point dividing a segment in a ratio: the point $\\dfrac{1}{3}$ of the way from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(x_1 + \\dfrac{1}{3}(x_2 - x_1), y_1 + \\dfrac{1}{3}(y_2 - y_1)\\right)$."
              },
              {
                "step": "$\\left(-3 + \\dfrac{1}{3} \\cdot 12, 2 + \\dfrac{1}{3} \\cdot (-9)\\right)$",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$\\left(-3 + 4, 2 + (-3)\\right)$",
                "reason": "Signs of products: each product is worked out with its sign."
              },
              {
                "step": "$(1, -1)$",
                "reason": "Addition of rational numbers: each sum is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the point on the segment from $(-6, 3)$ to $(6, -9)$ whose distances from $(-6, 3)$ and from $(6, -9)$ are in the ratio $1 : 2$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-2, -1)",
              "lines": [
                {
                  "step": "Find the point on the segment from $(-6, 3)$ to $(6, -9)$ whose distances from $(-6, 3)$ and from $(6, -9)$ are in the ratio $1 : 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{1 + 2} = \\dfrac{1}{3}$",
                  "reason": "Point dividing a segment in a ratio: distances in the ratio $1 : 2$ split the segment into $1 + 2$ equal parts, and the point is $1$ of them from the first end."
                },
                {
                  "step": "$\\left(-6 + \\dfrac{1}{3}(6 - (-6)), 3 + \\dfrac{1}{3}(-9 - 3)\\right)$",
                  "reason": "Point dividing a segment in a ratio: the point $\\dfrac{1}{3}$ of the way from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(x_1 + \\dfrac{1}{3}(x_2 - x_1), y_1 + \\dfrac{1}{3}(y_2 - y_1)\\right)$."
                },
                {
                  "step": "$\\left(-6 + \\dfrac{1}{3} \\cdot 12, 3 + \\dfrac{1}{3} \\cdot (-12)\\right)$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\left(-6 + 4, 3 + (-4)\\right)$",
                  "reason": "Signs of products: each product is worked out with its sign."
                },
                {
                  "step": "$(-2, -1)$",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            },
            {
              "prompt": "Find the point on the segment from $(5, 8)$ to $(-3, -4)$ whose distances from $(5, 8)$ and from $(-3, -4)$ are in the ratio $3 : 1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1, -1)",
              "lines": [
                {
                  "step": "Find the point on the segment from $(5, 8)$ to $(-3, -4)$ whose distances from $(5, 8)$ and from $(-3, -4)$ are in the ratio $3 : 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3}{3 + 1} = \\dfrac{3}{4}$",
                  "reason": "Point dividing a segment in a ratio: distances in the ratio $3 : 1$ split the segment into $3 + 1$ equal parts, and the point is $3$ of them from the first end."
                },
                {
                  "step": "$\\left(5 + \\dfrac{3}{4}(-3 - 5), 8 + \\dfrac{3}{4}(-4 - 8)\\right)$",
                  "reason": "Point dividing a segment in a ratio: the point $\\dfrac{3}{4}$ of the way from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(x_1 + \\dfrac{3}{4}(x_2 - x_1), y_1 + \\dfrac{3}{4}(y_2 - y_1)\\right)$."
                },
                {
                  "step": "$\\left(5 + \\dfrac{3}{4} \\cdot (-8), 8 + \\dfrac{3}{4} \\cdot (-12)\\right)$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\left(5 + (-6), 8 + (-9)\\right)$",
                  "reason": "Signs of products: each product is worked out with its sign."
                },
                {
                  "step": "$(-1, -1)$",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            },
            {
              "prompt": "Find the point on the segment from $(-2, -7)$ to $(12, 7)$ whose distances from $(-2, -7)$ and from $(12, 7)$ are in the ratio $3 : 4$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, -1)",
              "lines": [
                {
                  "step": "Find the point on the segment from $(-2, -7)$ to $(12, 7)$ whose distances from $(-2, -7)$ and from $(12, 7)$ are in the ratio $3 : 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3}{3 + 4} = \\dfrac{3}{7}$",
                  "reason": "Point dividing a segment in a ratio: distances in the ratio $3 : 4$ split the segment into $3 + 4$ equal parts, and the point is $3$ of them from the first end."
                },
                {
                  "step": "$\\left(-2 + \\dfrac{3}{7}(12 - (-2)), -7 + \\dfrac{3}{7}(7 - (-7))\\right)$",
                  "reason": "Point dividing a segment in a ratio: the point $\\dfrac{3}{7}$ of the way from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(x_1 + \\dfrac{3}{7}(x_2 - x_1), y_1 + \\dfrac{3}{7}(y_2 - y_1)\\right)$."
                },
                {
                  "step": "$\\left(-2 + \\dfrac{3}{7} \\cdot 14, -7 + \\dfrac{3}{7} \\cdot 14\\right)$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$\\left(-2 + 6, -7 + 6\\right)$",
                  "reason": "Signs of products: each product is worked out with its sign."
                },
                {
                  "step": "$(4, -1)$",
                  "reason": "Addition of rational numbers: each sum is worked out."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t123-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the distance between $(4, -3)$ and $(-1, 4)$, and write that line right.",
            "given": [
              "$d = \\sqrt{(-1 - 4)^2 + (4 - (-3))^2}$",
              "$d = \\sqrt{3^2 + 7^2}$",
              "$d = \\sqrt{9 + 49}$",
              "$d = \\sqrt{58}$"
            ],
            "lines": [
              {
                "step": "The working is for the distance between $(4, -3)$ and $(-1, 4)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 works out $-1 - 4$ as $3$, so a sign is lost.",
                "reason": "Subtraction as addition: $-1 - 4$ adds the opposite of $4$, which gives $-5$."
              },
              {
                "step": "Line 2 written right is $d = \\sqrt{(-5)^2 + 7^2}$.",
                "reason": "Distance formula: each difference is worked out with its sign before it is squared."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the distance between $(3, 6)$ and $(-6, -4)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(-6 - 3)^2 + (-4 - 6)^2}$",
                "$d = \\sqrt{(-6 + (-3))^2 + (-4 + (-6))^2}$",
                "$d = \\sqrt{(-9)^2 + 2^2}$",
                "$d = \\sqrt{81 + 4}$",
                "$d = \\sqrt{85}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: d = sqrt((-9)^2+(-10)^2)",
              "lines": [
                {
                  "step": "The working is for the distance between $(3, 6)$ and $(-6, -4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 works out $-4 + (-6)$ as $2$, so a sign is lost.",
                  "reason": "Subtraction as addition: $-4 - 6$ adds the opposite of $6$, which gives $-10$."
                },
                {
                  "step": "Line 3 written right is $d = \\sqrt{(-9)^2 + (-10)^2}$.",
                  "reason": "Distance formula: each difference is worked out with its sign before it is squared."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $(-5, -1)$ and $(2, -9)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(2 - (-5))^2 + (-9 - (-1))^2}$",
                "$d = \\sqrt{(-3)^2 + (-8)^2}$",
                "$d = \\sqrt{9 + 64}$",
                "$d = \\sqrt{73}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: d = sqrt(7^2+(-8)^2)",
              "lines": [
                {
                  "step": "The working is for the distance between $(-5, -1)$ and $(2, -9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 works out $2 - (-5)$ as $-3$, so a sign is lost.",
                  "reason": "Subtraction as addition: $2 - (-5)$ adds the opposite of $-5$, which gives $7$."
                },
                {
                  "step": "Line 2 written right is $d = \\sqrt{7^2 + (-8)^2}$.",
                  "reason": "Distance formula: each difference is worked out with its sign before it is squared."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $(4, 7)$ and $(-3, -4)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(-3 - 4)^2 + (-4 - 7)^2}$",
                "$d = \\sqrt{(-3 + (-4))^2 + (-4 + (-7))^2}$",
                "$d = \\sqrt{(-7)^2 + 3^2}$",
                "$d = \\sqrt{49 + 9}$",
                "$d = \\sqrt{58}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: d = sqrt((-7)^2+(-11)^2)",
              "lines": [
                {
                  "step": "The working is for the distance between $(4, 7)$ and $(-3, -4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 works out $-4 + (-7)$ as $3$, so a sign is lost.",
                  "reason": "Subtraction as addition: $-4 - 7$ adds the opposite of $7$, which gives $-11$."
                },
                {
                  "step": "Line 3 written right is $d = \\sqrt{(-7)^2 + (-11)^2}$.",
                  "reason": "Distance formula: each difference is worked out with its sign before it is squared."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the distance between $(2, -5)$ and $(-6, 6)$, and write that line right.",
            "given": [
              "$d = \\sqrt{(-6 - 2)^2 + (6 - (-5))^2}$",
              "$d = \\sqrt{(-8)^2 + 11^2}$",
              "$d = \\sqrt{64} + \\sqrt{121}$",
              "$d = 8 + 11$",
              "$d = 19$"
            ],
            "lines": [
              {
                "step": "The working is for the distance between $(2, -5)$ and $(-6, 6)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 takes the root of $64 + 121$ term by term.",
                "reason": "Positive square root: $(8 + 11)^2 = 361$, which is not $185$, so the root of a sum is not the sum of the roots."
              },
              {
                "step": "Line 3 written right is $d = \\sqrt{64 + 121}$.",
                "reason": "Distance formula: the root is taken of the whole sum under it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the distance between $(-4, 3)$ and $(1, -6)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(1 - (-4))^2 + (-6 - 3)^2}$",
                "$d = \\sqrt{5^2} + \\sqrt{(-9)^2}$",
                "$d = 5 + 9$",
                "$d = 14$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: d = sqrt(5^2+(-9)^2)",
              "lines": [
                {
                  "step": "The working is for the distance between $(-4, 3)$ and $(1, -6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes the root of $5^2 + (-9)^2$ term by term.",
                  "reason": "Positive square root: $(5 + 9)^2 = 196$, which is not $106$, so the root of a sum is not the sum of the roots."
                },
                {
                  "step": "Line 2 written right is $d = \\sqrt{5^2 + (-9)^2}$.",
                  "reason": "Distance formula: the root is taken of the whole sum under it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $(6, 1)$ and $(-1, -11)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(-1 - 6)^2 + (-11 - 1)^2}$",
                "$d = \\sqrt{(-7)^2 + (-12)^2}$",
                "$d = \\sqrt{49 + 144}$",
                "$d = 7 + 12$",
                "$d = 19$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: d = sqrt(193)",
              "lines": [
                {
                  "step": "The working is for the distance between $(6, 1)$ and $(-1, -11)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes the root of $49 + 144$ term by term.",
                  "reason": "Positive square root: $(7 + 12)^2 = 361$, which is not $193$, so the root of a sum is not the sum of the roots."
                },
                {
                  "step": "Line 4 written right is $d = \\sqrt{193}$.",
                  "reason": "Distance formula: the root is taken of the whole sum under it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $(-3, -8)$ and $(1, 7)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(1 - (-3))^2 + (7 - (-8))^2}$",
                "$d = \\sqrt{4^2 + 15^2}$",
                "$d = \\sqrt{16} + \\sqrt{225}$",
                "$d = 4 + 15$",
                "$d = 19$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: d = sqrt(16+225)",
              "lines": [
                {
                  "step": "The working is for the distance between $(-3, -8)$ and $(1, 7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes the root of $16 + 225$ term by term.",
                  "reason": "Positive square root: $(4 + 15)^2 = 361$, which is not $241$, so the root of a sum is not the sum of the roots."
                },
                {
                  "step": "Line 3 written right is $d = \\sqrt{16 + 225}$.",
                  "reason": "Distance formula: the root is taken of the whole sum under it."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the distance between $(-9, -4)$ and $(8, -8)$, and write that line right.",
            "given": [
              "$d = \\sqrt{(8 - (-9))^2 + (-8 - (-4))^2}$",
              "$d = \\sqrt{17^2 + (-4)^2}$",
              "$d = \\sqrt{289 - 16}$",
              "$d = \\sqrt{273}$"
            ],
            "lines": [
              {
                "step": "The working is for the distance between $(-9, -4)$ and $(8, -8)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 writes the square of $-4$ as $-16$, so a sign is lost.",
                "reason": "Signs of products: the square of a negative number is positive, so $(-4)^2 = 16$."
              },
              {
                "step": "Line 3 written right is $d = \\sqrt{289 + 16}$.",
                "reason": "Distance formula: the two squares, each positive, are added under the root."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the distance between $(-2, 5)$ and $(6, 2)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(6 - (-2))^2 + (2 - 5)^2}$",
                "$d = \\sqrt{8^2 + (-3)^2}$",
                "$d = \\sqrt{8 \\cdot 8 + (-3) \\cdot (-3)}$",
                "$d = \\sqrt{64 - 9}$",
                "$d = \\sqrt{55}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: d = sqrt(64+9)",
              "lines": [
                {
                  "step": "The working is for the distance between $(-2, 5)$ and $(6, 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $(-3) \\cdot (-3)$ as $-9$, so a sign is lost.",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-3)^2 = 9$."
                },
                {
                  "step": "Line 4 written right is $d = \\sqrt{64 + 9}$.",
                  "reason": "Distance formula: the two squares, each positive, are added under the root."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $(7, -8)$ and $(-3, 8)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(-3 - 7)^2 + (8 - (-8))^2}$",
                "$d = \\sqrt{(-10)^2 + 16^2}$",
                "$d = \\sqrt{-100 + 256}$",
                "$d = \\sqrt{156}$",
                "$d = 2\\sqrt{39}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: d = sqrt(100+256)",
              "lines": [
                {
                  "step": "The working is for the distance between $(7, -8)$ and $(-3, 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes the square of $-10$ as $-100$, so a sign is lost.",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-10)^2 = 100$."
                },
                {
                  "step": "Line 3 written right is $d = \\sqrt{100 + 256}$.",
                  "reason": "Distance formula: the two squares, each positive, are added under the root."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $(-4, 5)$ and $(-6, 8)$, and write that line right.",
              "given": [
                "$d = \\sqrt{(-6 - (-4))^2 + (8 - 5)^2}$",
                "$d = \\sqrt{(-2)^2 + 3^2}$",
                "$d = \\sqrt{(-2) \\cdot (-2) + 3 \\cdot 3}$",
                "$d = \\sqrt{-4 + 9}$",
                "$d = \\sqrt{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: d = sqrt(4+9)",
              "lines": [
                {
                  "step": "The working is for the distance between $(-4, 5)$ and $(-6, 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $(-2) \\cdot (-2)$ as $-4$, so a sign is lost.",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-2)^2 = 4$."
                },
                {
                  "step": "Line 4 written right is $d = \\sqrt{4 + 9}$.",
                  "reason": "Distance formula: the two squares, each positive, are added under the root."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t123-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the distance from the point $(x, 3)$ to the point $(6, -1)$.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the distance from the point $(x, 3)$ to the point $(6, -1)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The words \"the number $y$ is\" become $y =$, and the distance from the point $(x, 3)$ to the point $(6, -1)$ becomes the right side.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = \\sqrt{(6 - x)^2 + (-1 - 3)^2}$",
                "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
              },
              {
                "step": "$y = \\sqrt{(6 - x)^2 + (-4)^2}$",
                "reason": "Subtraction as addition: $-1 - 3$ is worked out, which gives $-4$."
              },
              {
                "step": "$y = \\sqrt{(6 - x)^2 + 16}$",
                "reason": "Signs of products: the square of a negative number is positive, so $(-4)^2 = 16$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the distance between the points $(x, -2)$ and $(-3, -7)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt((-3-x)^2+25)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the distance between the points $(x, -2)$ and $(-3, -7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $y$ is\" become $y =$, and the distance between the points $(x, -2)$ and $(-3, -7)$ becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\sqrt{(-3 - x)^2 + (-7 - (-2))^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$y = \\sqrt{(-3 - x)^2 + (-5)^2}$",
                  "reason": "Subtraction as addition: $-7 - (-2)$ is worked out, which gives $-5$."
                },
                {
                  "step": "$y = \\sqrt{(-3 - x)^2 + 25}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-5)^2 = 25$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $z$ in terms of $y$, with $z$ alone on the left: The number $z$ is the length of the segment from $(4, y)$ to $(-2, 9)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = sqrt(36+(9-y)^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z$ in terms of $y$, with $z$ alone on the left: The number $z$ is the length of the segment from $(4, y)$ to $(-2, 9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $z$ is\" become $z =$, and the length of the segment from $(4, y)$ to $(-2, 9)$ becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$z = \\sqrt{(-2 - 4)^2 + (9 - y)^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$z = \\sqrt{(-6)^2 + (9 - y)^2}$",
                  "reason": "Subtraction as addition: $-2 - 4$ is worked out, which gives $-6$."
                },
                {
                  "step": "$z = \\sqrt{36 + (9 - y)^2}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-6)^2 = 36$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the distance from the point $(x, 8)$ to the point $(1, 6)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt((1-x)^2+4)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the distance from the point $(x, 8)$ to the point $(1, 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $y$ is\" become $y =$, and the distance from the point $(x, 8)$ to the point $(1, 6)$ becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\sqrt{(1 - x)^2 + (6 - 8)^2}$",
                  "reason": "Distance formula: the distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, with each value put in place of its letter."
                },
                {
                  "step": "$y = \\sqrt{(1 - x)^2 + (-2)^2}$",
                  "reason": "Subtraction as addition: $6 - 8$ is worked out, which gives $-2$."
                },
                {
                  "step": "$y = \\sqrt{(1 - x)^2 + 4}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-2)^2 = 4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the $x$-coordinate of the midpoint of the segment from $(x, 3)$ to $(-9, -5)$.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the $x$-coordinate of the midpoint of the segment from $(x, 3)$ to $(-9, -5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The words \"the number $y$ is\" become $y =$, and the $x$-coordinate of the midpoint of the segment from $(x, 3)$ to $(-9, -5)$ becomes the right side.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = \\dfrac{x + (-9)}{2}$",
                "reason": "Midpoint formula: the number halfway between $a$ and $b$ is $\\dfrac{a + b}{2}$, and each coordinate of a midpoint is halfway between the same coordinates of the two ends."
              },
              {
                "step": "$y = \\dfrac{x - 9}{2}$",
                "reason": "Subtraction as addition: adding $-9$ is the same as taking away $9$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the number halfway between $x$ and $-7$ on the number line.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-7)/2",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the number halfway between $x$ and $-7$ on the number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $y$ is\" become $y =$, and the number halfway between $x$ and $-7$ on the number line becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{x + (-7)}{2}$",
                  "reason": "Midpoint formula: the number halfway between $a$ and $b$ is $\\dfrac{a + b}{2}$, and each coordinate of a midpoint is halfway between the same coordinates of the two ends."
                },
                {
                  "step": "$y = \\dfrac{x - 7}{2}$",
                  "reason": "Subtraction as addition: adding $-7$ is the same as taking away $7$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $z$ in terms of $y$, with $z$ alone on the left: The number $z$ is the $y$-coordinate of the midpoint of the segment from $(6, y)$ to $(-1, -11)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (y-11)/2",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z$ in terms of $y$, with $z$ alone on the left: The number $z$ is the $y$-coordinate of the midpoint of the segment from $(6, y)$ to $(-1, -11)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $z$ is\" become $z =$, and the $y$-coordinate of the midpoint of the segment from $(6, y)$ to $(-1, -11)$ becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$z = \\dfrac{y + (-11)}{2}$",
                  "reason": "Midpoint formula: the number halfway between $a$ and $b$ is $\\dfrac{a + b}{2}$, and each coordinate of a midpoint is halfway between the same coordinates of the two ends."
                },
                {
                  "step": "$z = \\dfrac{y - 11}{2}$",
                  "reason": "Subtraction as addition: adding $-11$ is the same as taking away $11$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the $x$-coordinate of the midpoint of the segment from $(x, -2)$ to $(-4, 8)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-4)/2",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the $x$-coordinate of the midpoint of the segment from $(x, -2)$ to $(-4, 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $y$ is\" become $y =$, and the $x$-coordinate of the midpoint of the segment from $(x, -2)$ to $(-4, 8)$ becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{x + (-4)}{2}$",
                  "reason": "Midpoint formula: the number halfway between $a$ and $b$ is $\\dfrac{a + b}{2}$, and each coordinate of a midpoint is halfway between the same coordinates of the two ends."
                },
                {
                  "step": "$y = \\dfrac{x - 4}{2}$",
                  "reason": "Subtraction as addition: adding $-4$ is the same as taking away $4$."
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
      "id": "t123-p1",
      "method": "direct proof",
      "statement": "Let $A = (x_1, y_1)$ and $B = (x_2, y_2)$ be points with $x_1$ other than $x_2$ and $y_1$ other than $y_2$. Then the distance from $A$ to $B$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
      "idea": "Draw a horizontal side from one point and a vertical side from the other; they make a right triangle whose legs are read off the number line, and the Pythagorean theorem gives the third side.",
      "figure": {
        "file": "distance-and-midpoint-3.svg",
        "alt": "Points A, B and C, with AC horizontal, CB vertical and AB the slanted side."
      },
      "lines": [
        {
          "line": "Let $C = (x_2, y_1)$.",
          "reason": "coordinates: the point with the $x$-coordinate of $B$ and the $y$-coordinate of $A$"
        },
        {
          "line": "The points $A$ and $C$ have the same $y$-coordinate, so the side $AC$ is horizontal.",
          "reason": "coordinates: points with the same $y$-coordinate lie on one horizontal line"
        },
        {
          "line": "The length of $AC$ is $|x_2 - x_1|$.",
          "reason": "distance on the number line, along the horizontal line through $A$"
        },
        {
          "line": "The points $C$ and $B$ have the same $x$-coordinate, so the side $CB$ is vertical.",
          "reason": "coordinates: points with the same $x$-coordinate lie on one vertical line"
        },
        {
          "line": "The length of $CB$ is $|y_2 - y_1|$.",
          "reason": "distance on the number line, along the vertical line through $B$"
        },
        {
          "line": "The sides $AC$ and $CB$ meet at a right angle at $C$.",
          "reason": "axes: a horizontal line and a vertical line are perpendicular, as the two axes are"
        },
        {
          "line": "So $AB^2 = |x_2 - x_1|^2 + |y_2 - y_1|^2$.",
          "reason": "the Pythagorean theorem, in the right triangle $ACB$ with hypotenuse $AB$"
        },
        {
          "line": "So $AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$.",
          "reason": "signs of products: the absolute value of a number is the number or its opposite, and a number and its opposite have the same square"
        },
        {
          "line": "Therefore $AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
          "reason": "positive square root: the length $AB$ is positive and its square is the sum"
        }
      ]
    },
    {
      "id": "t123-p2",
      "method": "proof by cases",
      "statement": "For every real number $x$, $|-x| = |x|$.",
      "idea": "Split by the sign of $x$; in each case the two numbers $x$ and $-x$ lie the same distance from $0$, one on each side.",
      "lines": [
        {
          "line": "Suppose first that $x$ is positive.",
          "reason": "the first case"
        },
        {
          "line": "Then $-x$ is negative.",
          "reason": "signs of products: the opposite of a positive number is negative"
        },
        {
          "line": "So $|-x| = x$.",
          "reason": "absolute value: $-x$ lies $x$ steps to the left of $0$"
        },
        {
          "line": "Also $|x| = x$.",
          "reason": "absolute value: a positive number is its own distance from $0$"
        },
        {
          "line": "So $|-x| = |x|$ in this case.",
          "reason": "the third and fourth lines have the same right side"
        },
        {
          "line": "Suppose next that $x = 0$.",
          "reason": "the second case"
        },
        {
          "line": "Then $-x = 0$.",
          "reason": "signs of products: the opposite of $0$ is $0$"
        },
        {
          "line": "So $|-x| = 0 = |x|$.",
          "reason": "absolute value: $|0| = 0$"
        },
        {
          "line": "Suppose last that $x$ is negative.",
          "reason": "the third case"
        },
        {
          "line": "Then $-x$ is positive.",
          "reason": "signs of products: the opposite of a negative number is positive"
        },
        {
          "line": "So $|x| = -x$.",
          "reason": "absolute value: $x$ lies $-x$ steps to the left of $0$"
        },
        {
          "line": "Also $|-x| = -x$.",
          "reason": "absolute value: a positive number is its own distance from $0$"
        },
        {
          "line": "So $|-x| = |x|$ in this case.",
          "reason": "the eleventh and twelfth lines have the same right side"
        },
        {
          "line": "The three cases cover every real number, so $|-x| = |x|$ for every real number $x$.",
          "reason": "proof by cases: a real number is positive, zero or negative"
        }
      ]
    },
    {
      "id": "t123-p3",
      "method": "direct proof",
      "statement": "Let $(x_1, y_1)$ and $(x_2, y_2)$ be points. The number $\\dfrac{x_1 + x_2}{2}$ lies between $x_1$ and $x_2$ and equally far from each on the number line, and the same holds for $\\dfrac{y_1 + y_2}{2}$ with $y_1$ and $y_2$; so the point halfway along each coordinate is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$.",
      "idea": "Show that the mean of two numbers is equally far from both, with equal signed steps, and use it once for each coordinate.",
      "lines": [
        {
          "line": "Let $a$ and $b$ be real numbers, and let $c = \\dfrac{a + b}{2}$.",
          "reason": "the number to test"
        },
        {
          "line": "Then $c - a = \\dfrac{a + b - 2a}{2}$.",
          "reason": "the general subtraction formula for fractions"
        },
        {
          "line": "So $c - a = \\dfrac{b - a}{2}$.",
          "reason": "collecting like terms"
        },
        {
          "line": "Also $b - c = \\dfrac{2b - a - b}{2}$.",
          "reason": "the general subtraction formula for fractions"
        },
        {
          "line": "So $b - c = \\dfrac{b - a}{2}$.",
          "reason": "collecting like terms"
        },
        {
          "line": "So the step from $a$ to $c$ equals the step from $c$ to $b$, sign and size.",
          "reason": "the third and fifth lines have the same right side"
        },
        {
          "line": "So $c$ lies between $a$ and $b$.",
          "reason": "the numbers $c - a$ and $b - c$ have the same sign, so going from $a$ to $c$ and on to $b$ keeps one direction"
        },
        {
          "line": "So $|c - a| = |b - c|$: the number $c$ is equally far from $a$ and from $b$.",
          "reason": "distance on the number line"
        },
        {
          "line": "With $a = x_1$ and $b = x_2$, the number $\\dfrac{x_1 + x_2}{2}$ is halfway between $x_1$ and $x_2$.",
          "reason": "substituting a value in the first eight lines"
        },
        {
          "line": "With $a = y_1$ and $b = y_2$, the number $\\dfrac{y_1 + y_2}{2}$ is halfway between $y_1$ and $y_2$.",
          "reason": "substituting a value in the first eight lines"
        },
        {
          "line": "Therefore the point halfway along each coordinate is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$.",
          "reason": "coordinates: the $x$-coordinate first, the $y$-coordinate second"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t123-s1",
      "method": "direct proof",
      "statement": "For real numbers $a$ and $b$, $|a - b| = |b - a|$: the distance from $a$ to $b$ on the number line equals the distance from $b$ to $a$. May use: distance on the number line, $|-x| = |x|$ (read in this topic), subtraction as addition.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be real numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $b - a = -(a - b)$.",
            "reason": "the distributive law for subtraction: taking away $a - b$ from $0$ gives $b - a$"
          },
          {
            "line": "So $|b - a| = |-(a - b)|$.",
            "reason": "substituting a value: by the second line $b - a$ has the value $-(a - b)$"
          },
          {
            "line": "Therefore $|b - a| = |a - b|$.",
            "reason": "the absolute value of an opposite, $|-x| = |x|$ (read in this topic), with $x = a - b$"
          }
        ]
      }
    },
    {
      "id": "t123-s2",
      "method": "proof by cases",
      "statement": "Let $a$ be a real number and $d$ a positive number. If $|x - a| = d$, then $x = a + d$ or $x = a - d$. May use: absolute value, adding the same number to both sides, multiplying both sides by the same number.",
      "check": {
        "proof": [
          {
            "line": "Suppose $|x - a| = d$ with $d$ positive.",
            "reason": "the hypothesis"
          },
          {
            "line": "Suppose first that $x - a$ is $0$ or more.",
            "reason": "the first case"
          },
          {
            "line": "Then $|x - a| = x - a$.",
            "reason": "absolute value: a number that is $0$ or more is its own distance from $0$"
          },
          {
            "line": "So $x - a = d$.",
            "reason": "substituting a value: by the third line, $|x - a|$ in the hypothesis has the value $x - a$"
          },
          {
            "line": "So $x = a + d$.",
            "reason": "adding the same number to both sides: adding $a$"
          },
          {
            "line": "Suppose next that $x - a$ is negative.",
            "reason": "the second case"
          },
          {
            "line": "Then $|x - a| = -(x - a)$.",
            "reason": "absolute value: a negative number is its opposite's distance from $0$"
          },
          {
            "line": "So $-(x - a) = d$.",
            "reason": "substituting a value: by the seventh line, $|x - a|$ in the hypothesis has the value $-(x - a)$"
          },
          {
            "line": "So $x - a = -d$.",
            "reason": "multiplying both sides by the same number: multiplying by $-1$"
          },
          {
            "line": "So $x = a - d$.",
            "reason": "adding the same number to both sides: adding $a$"
          },
          {
            "line": "Therefore $x = a + d$ or $x = a - d$.",
            "reason": "proof by cases: the number $x - a$ is $0$ or more, or negative"
          }
        ]
      }
    },
    {
      "id": "t123-s3",
      "method": "direct proof",
      "statement": "Let $A = (x_1, y_1)$ and $B = (x_2, y_2)$ be points, and let $M = \\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$. Then the distance from $M$ to $A$ equals the distance from $M$ to $B$. May use: distance formula, midpoint formula, the general subtraction formula for fractions, signs of products.",
      "check": {
        "proof": [
          {
            "line": "Let $M = \\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\dfrac{x_1 + x_2}{2} - x_1 = \\dfrac{x_2 - x_1}{2}$.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "Also $\\dfrac{y_1 + y_2}{2} - y_1 = \\dfrac{y_2 - y_1}{2}$.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "Also $x_2 - \\dfrac{x_1 + x_2}{2} = \\dfrac{x_2 - x_1}{2}$.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "Also $y_2 - \\dfrac{y_1 + y_2}{2} = \\dfrac{y_2 - y_1}{2}$.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "So $AM = \\sqrt{\\left(\\dfrac{x_2 - x_1}{2}\\right)^2 + \\left(\\dfrac{y_2 - y_1}{2}\\right)^2}$.",
            "reason": "distance formula, with the second and third lines"
          },
          {
            "line": "Also $MB = \\sqrt{\\left(\\dfrac{x_2 - x_1}{2}\\right)^2 + \\left(\\dfrac{y_2 - y_1}{2}\\right)^2}$.",
            "reason": "distance formula, with the fourth and fifth lines"
          },
          {
            "line": "Therefore $AM = MB$.",
            "reason": "the sixth and seventh lines have the same right side"
          }
        ]
      }
    },
    {
      "id": "t123-s4",
      "method": "direct proof",
      "statement": "Let $A = (x_1, y_1)$ and $B = (x_2, y_2)$ be points, let $c$ be a number between $0$ and $1$, and let $P = \\left(x_1 + c(x_2 - x_1), y_1 + c(y_2 - y_1)\\right)$. Then the distance from $A$ to $P$ is $c$ times the distance from $A$ to $B$. May use: distance formula, power of a product, root of a product, positive square root.",
      "check": {
        "proof": [
          {
            "line": "Let $P = \\left(x_1 + c(x_2 - x_1), y_1 + c(y_2 - y_1)\\right)$ with $c$ between $0$ and $1$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $AP = \\sqrt{\\left(c(x_2 - x_1)\\right)^2 + \\left(c(y_2 - y_1)\\right)^2}$.",
            "reason": "distance formula: taking away $x_1$ and $y_1$ leaves $c(x_2 - x_1)$ and $c(y_2 - y_1)$"
          },
          {
            "line": "So $AP = \\sqrt{c^2(x_2 - x_1)^2 + c^2(y_2 - y_1)^2}$.",
            "reason": "power of a product"
          },
          {
            "line": "So $AP = \\sqrt{c^2\\left((x_2 - x_1)^2 + (y_2 - y_1)^2\\right)}$.",
            "reason": "the distributive law, read from right to left"
          },
          {
            "line": "So $AP = \\sqrt{c^2} \\cdot \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
            "reason": "root of a product, both factors nonnegative"
          },
          {
            "line": "So $AP = c \\cdot \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
            "reason": "positive square root: the number $c$ is positive and its square is $c^2$"
          },
          {
            "line": "Therefore $AP = c \\cdot AB$.",
            "reason": "distance formula, for $A$ and $B$"
          }
        ]
      }
    }
  ]
}
