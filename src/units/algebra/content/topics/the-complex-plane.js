export default {
  "number": 187,
  "title": "The complex plane",
  "section": 13,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "61-64, 70-73"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = -13 - 2i$.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(13, 2)",
    "solution": [
      "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = -13 - 2i$.",
      "$-z = -(-13 - 2i)$",
      "$-z = 13 + 2i$",
      {
        "step": "The point is $(13, 2)$.",
        "figure": {
          "file": "the-complex-plane-1.svg",
          "alt": "The points (−13, −2) and (13, 2), on opposite sides of the origin and the same distance from it."
        }
      }
    ]
  },
  "ideas": [
    {
      "name": "Complex plane",
      "concrete": "The number $6 - 5i$ sits at the point $(6, -5)$: $6$ steps right of the origin along the real axis and $5$ steps down along the imaginary axis.",
      "general": "For real numbers $x$ and $y$, the **complex plane** is the Cartesian plane with the complex number $x + yi$ at the point $(x, y)$. Its horizontal axis is the **real axis**: the real numbers lie on it, and the real part of a number is its step along it. Its vertical axis is the **imaginary axis**: the imaginary numbers lie on it, and the imaginary part of a number is its step along it. The real part of $z$ is written $\\operatorname{Re}(z)$. The imaginary part of $z$ is written $\\operatorname{Im}(z)$.",
      "figure": {
        "file": "the-complex-plane-97.svg",
        "alt": "The complex plane with the point 6 − 5i, 6 to the right of the origin and 5 down."
      }
    },
    {
      "name": "Magnitude",
      "concrete": "The point of $4 + 6i$ is $4$ across and $6$ up from the origin, so by the Pythagorean theorem its distance from $0$ is $\\sqrt{4^2 + 6^2} = \\sqrt{52} = 2\\sqrt{13}$; this is $|4 + 6i|$.",
      "general": "For real numbers $x$ and $y$, the **magnitude** of $x + yi$ is $|x + yi| = \\sqrt{x^2 + y^2}$, its distance from $0$ in the complex plane by the Pythagorean theorem."
    },
    {
      "name": "Distance in the complex plane",
      "concrete": "The numbers $1 + 6i$ and $9 + 2i$ sit at $(1, 6)$ and $(9, 2)$, which the distance formula puts $\\sqrt{8^2 + 4^2} = 4\\sqrt{5}$ apart; their difference is $(9 + 2i) - (1 + 6i) = 8 - 4i$, and $|8 - 4i| = 4\\sqrt{5}$.",
      "general": "For real numbers $a$, $b$, $c$ and $d$, the distance between $a + bi$ and $c + di$ in the complex plane is $|(a + bi) - (c + di)|$, the magnitude of their difference."
    },
    {
      "name": "Real and imaginary part from the conjugate",
      "concrete": "For $z = 8 - 3i$: $z + \\overline{z} = 16$ and $\\dfrac{16}{2} = 8$, the real part; $z - \\overline{z} = -6i$ and $\\dfrac{-6i}{2i} = -3$, the imaginary part.",
      "general": "For every complex number $z$, $\\operatorname{Re}(z) = \\dfrac{z + \\overline{z}}{2}$ and $\\operatorname{Im}(z) = \\dfrac{z - \\overline{z}}{2i}$."
    },
    {
      "name": "Circle in the complex plane",
      "concrete": "The numbers $z$ with $|z - (1 - 4i)| = 3$ are the points at distance $3$ from $(1, -4)$: the circle with centre $(1, -4)$ and radius $3$.",
      "general": "For real numbers $a$ and $b$ and a positive number $r$, the graph of $|z - (a + bi)| = r$ in the complex plane is the circle with centre $(a, b)$ and radius $r$."
    },
    {
      "name": "Perpendicular bisector in the complex plane",
      "concrete": "The numbers $z$ with $|z - 6| = |z - 2i|$ are as far from $(6, 0)$ as from $(0, 2)$. They make the line through the midpoint $(3, 1)$ that is perpendicular to the segment from $(6, 0)$ to $(0, 2)$: the line $y = 3x - 8$.",
      "general": "For real numbers $a$, $b$, $c$ and $d$ with $a + bi$ other than $c + di$, the graph of $|z - (a + bi)| = |z - (c + di)|$ in the complex plane is the **perpendicular bisector** of the segment from $(a, b)$ to $(c, d)$: the line through its midpoint that is perpendicular to it."
    }
  ],
  "kinds": [
    {
      "id": "t187-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the point $(x, y)$ of the complex plane at which $\\overline{z}$ sits, where $z = -12 - 13i$.",
            "lines": [
              {
                "step": "Find the point $(x, y)$ of the complex plane at which $\\overline{z}$ sits, where $z = -12 - 13i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\overline{z} = \\overline{-12 - 13i}$",
                "reason": "Substituting a value: $z$ is replaced by its value."
              },
              {
                "step": "$\\overline{z} = -12 + 13i$",
                "reason": "Complex conjugate: the sign of the imaginary part of $-12 - 13i$ is reversed."
              },
              {
                "step": "The point is $(-12, 13)$.",
                "reason": "Complex plane: the real part $-12$ is the step along the real axis and the imaginary part $13$ the step along the imaginary axis.",
                "figure": {
                  "file": "the-complex-plane-2.svg",
                  "alt": "The points (−12, −13) and (−12, 13), one the mirror image of the other in the real axis."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the point $(x, y)$ of the complex plane at which $\\overline{z}$ sits, where $z = 14 - 3i$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(14, 3)",
              "lines": [
                {
                  "step": "Find the point $(x, y)$ of the complex plane at which $\\overline{z}$ sits, where $z = 14 - 3i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\overline{z} = \\overline{14 - 3i}$",
                  "reason": "Substituting a value: $z$ is replaced by its value."
                },
                {
                  "step": "$\\overline{z} = 14 + 3i$",
                  "reason": "Complex conjugate: the sign of the imaginary part of $14 - 3i$ is reversed."
                },
                {
                  "step": "The point is $(14, 3)$.",
                  "reason": "Complex plane: the real part $14$ is the step along the real axis and the imaginary part $3$ the step along the imaginary axis.",
                  "figure": {
                    "file": "the-complex-plane-3.svg",
                    "alt": "The points (14, −3) and (14, 3), one the mirror image of the other in the real axis."
                  }
                }
              ]
            },
            {
              "prompt": "Find the point $(x, y)$ of the complex plane at which $\\overline{z}$ sits, where $z = -4 - 14i$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-4, 14)",
              "lines": [
                {
                  "step": "Find the point $(x, y)$ of the complex plane at which $\\overline{z}$ sits, where $z = -4 - 14i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\overline{z} = \\overline{-4 - 14i}$",
                  "reason": "Substituting a value: $z$ is replaced by its value."
                },
                {
                  "step": "$\\overline{z} = -4 + 14i$",
                  "reason": "Complex conjugate: the sign of the imaginary part of $-4 - 14i$ is reversed."
                },
                {
                  "step": "The point is $(-4, 14)$.",
                  "reason": "Complex plane: the real part $-4$ is the step along the real axis and the imaginary part $14$ the step along the imaginary axis.",
                  "figure": {
                    "file": "the-complex-plane-4.svg",
                    "alt": "The points (−4, −14) and (−4, 14), one the mirror image of the other in the real axis."
                  }
                }
              ]
            },
            {
              "prompt": "Find the point $(x, y)$ of the complex plane at which $\\overline{z}$ sits, where $z = 11 + 15i$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(11, -15)",
              "lines": [
                {
                  "step": "Find the point $(x, y)$ of the complex plane at which $\\overline{z}$ sits, where $z = 11 + 15i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\overline{z} = \\overline{11 + 15i}$",
                  "reason": "Substituting a value: $z$ is replaced by its value."
                },
                {
                  "step": "$\\overline{z} = 11 - 15i$",
                  "reason": "Complex conjugate: the sign of the imaginary part of $11 + 15i$ is reversed."
                },
                {
                  "step": "The point is $(11, -15)$.",
                  "reason": "Complex plane: the real part $11$ is the step along the real axis and the imaginary part $-15$ the step along the imaginary axis.",
                  "figure": {
                    "file": "the-complex-plane-5.svg",
                    "alt": "The points (11, 15) and (11, −15), one the mirror image of the other in the real axis."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = 6 + 20i$.",
            "lines": [
              {
                "step": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = 6 + 20i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-z = -(6 + 20i)$",
                "reason": "Substituting a value: $z$ is replaced by its value, in brackets."
              },
              {
                "step": "$-z = -6 - 20i$",
                "reason": "Subtracting a bracket changes every sign in it: both parts of $6 + 20i$ change sign."
              },
              {
                "step": "The point is $(-6, -20)$.",
                "reason": "Complex plane: the real part $-6$ is the step along the real axis and the imaginary part $-20$ the step along the imaginary axis.",
                "figure": {
                  "file": "the-complex-plane-13.svg",
                  "alt": "The points (6, 20) and (−6, −20), on opposite sides of the origin and the same distance from it."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = -21 - 17i$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(21, 17)",
              "lines": [
                {
                  "step": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = -21 - 17i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-z = -(-21 - 17i)$",
                  "reason": "Substituting a value: $z$ is replaced by its value, in brackets."
                },
                {
                  "step": "$-z = 21 + 17i$",
                  "reason": "Subtracting a bracket changes every sign in it: both parts of $-21 - 17i$ change sign."
                },
                {
                  "step": "The point is $(21, 17)$.",
                  "reason": "Complex plane: the real part $21$ is the step along the real axis and the imaginary part $17$ the step along the imaginary axis.",
                  "figure": {
                    "file": "the-complex-plane-14.svg",
                    "alt": "The points (−21, −17) and (21, 17), on opposite sides of the origin and the same distance from it."
                  }
                }
              ]
            },
            {
              "prompt": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = -20 + 10i$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(20, -10)",
              "lines": [
                {
                  "step": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = -20 + 10i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-z = -(-20 + 10i)$",
                  "reason": "Substituting a value: $z$ is replaced by its value, in brackets."
                },
                {
                  "step": "$-z = 20 - 10i$",
                  "reason": "Subtracting a bracket changes every sign in it: both parts of $-20 + 10i$ change sign."
                },
                {
                  "step": "The point is $(20, -10)$.",
                  "reason": "Complex plane: the real part $20$ is the step along the real axis and the imaginary part $-10$ the step along the imaginary axis.",
                  "figure": {
                    "file": "the-complex-plane-15.svg",
                    "alt": "The points (−20, 10) and (20, −10), on opposite sides of the origin and the same distance from it."
                  }
                }
              ]
            },
            {
              "prompt": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = 9 + 21i$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-9, -21)",
              "lines": [
                {
                  "step": "Find the point $(x, y)$ of the complex plane at which $-z$ sits, where $z = 9 + 21i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-z = -(9 + 21i)$",
                  "reason": "Substituting a value: $z$ is replaced by its value, in brackets."
                },
                {
                  "step": "$-z = -9 - 21i$",
                  "reason": "Subtracting a bracket changes every sign in it: both parts of $9 + 21i$ change sign."
                },
                {
                  "step": "The point is $(-9, -21)$.",
                  "reason": "Complex plane: the real part $-9$ is the step along the real axis and the imaginary part $-21$ the step along the imaginary axis.",
                  "figure": {
                    "file": "the-complex-plane-16.svg",
                    "alt": "The points (9, 21) and (−9, −21), on opposite sides of the origin and the same distance from it."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t187-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $|-25 + 10i|$.",
            "lines": [
              {
                "step": "Find $|-25 + 10i|$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$|-25 + 10i| = \\sqrt{(-25)^2 + 10^2}$",
                "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, here with real part $-25$ and imaginary part $10$."
              },
              {
                "step": "$|-25 + 10i| = \\sqrt{625 + 100}$",
                "reason": "Signs of products: the square of a negative number is positive, so $(-25)^2 = 625$."
              },
              {
                "step": "$|-25 + 10i| = \\sqrt{725}$",
                "reason": "Sum of positive rational numbers: the two squares are added."
              },
              {
                "step": "$|-25 + 10i| = 5\\sqrt{29}$",
                "reason": "Simplest radical form: $725 = 5^2 \\cdot 29$, so the factor $5$ comes out of the root and $29$ has no square factor greater than $1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $|15 - 9i|$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(34)",
              "lines": [
                {
                  "step": "Find $|15 - 9i|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|15 - 9i| = \\sqrt{15^2 + (-9)^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, here with real part $15$ and imaginary part $-9$."
                },
                {
                  "step": "$|15 - 9i| = \\sqrt{225 + 81}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-9)^2 = 81$."
                },
                {
                  "step": "$|15 - 9i| = \\sqrt{306}$",
                  "reason": "Sum of positive rational numbers: the two squares are added."
                },
                {
                  "step": "$|15 - 9i| = 3\\sqrt{34}$",
                  "reason": "Simplest radical form: $306 = 3^2 \\cdot 34$, so the factor $3$ comes out of the root and $34$ has no square factor greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find $|-5 - 20i|$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "5*sqrt(17)",
              "lines": [
                {
                  "step": "Find $|-5 - 20i|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|-5 - 20i| = \\sqrt{(-5)^2 + (-20)^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, here with real part $-5$ and imaginary part $-20$."
                },
                {
                  "step": "$|-5 - 20i| = \\sqrt{25 + 400}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-5)^2 = 25$ and $(-20)^2 = 400$."
                },
                {
                  "step": "$|-5 - 20i| = \\sqrt{425}$",
                  "reason": "Sum of positive rational numbers: the two squares are added."
                },
                {
                  "step": "$|-5 - 20i| = 5\\sqrt{17}$",
                  "reason": "Simplest radical form: $425 = 5^2 \\cdot 17$, so the factor $5$ comes out of the root and $17$ has no square factor greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find $|-6 + 21i|$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(53)",
              "lines": [
                {
                  "step": "Find $|-6 + 21i|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|-6 + 21i| = \\sqrt{(-6)^2 + 21^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, here with real part $-6$ and imaginary part $21$."
                },
                {
                  "step": "$|-6 + 21i| = \\sqrt{36 + 441}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-6)^2 = 36$."
                },
                {
                  "step": "$|-6 + 21i| = \\sqrt{477}$",
                  "reason": "Sum of positive rational numbers: the two squares are added."
                },
                {
                  "step": "$|-6 + 21i| = 3\\sqrt{53}$",
                  "reason": "Simplest radical form: $477 = 3^2 \\cdot 53$, so the factor $3$ comes out of the root and $53$ has no square factor greater than $1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t187-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the distance between $-13 + 10i$ and $14 + 4i$ in the complex plane.",
            "lines": [
              {
                "step": "Find the distance between $-13 + 10i$ and $14 + 4i$ in the complex plane.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$d = |(-13 + 10i) - (14 + 4i)|$",
                "reason": "Distance in the complex plane: the distance between two complex numbers is the magnitude of their difference, written $d$."
              },
              {
                "step": "$d = |-13 + 10i - 14 - 4i|$",
                "reason": "Subtracting a bracket changes every sign in it: $14 + 4i$ becomes $-14 - 4i$."
              },
              {
                "step": "$d = |-27 + 6i|$",
                "reason": "Collecting like terms: the real parts $-13$ and $-14$ are added, and the imaginary parts $10$ and $-4$."
              },
              {
                "step": "$d = \\sqrt{(-27)^2 + 6^2}$",
                "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, here with real part $-27$ and imaginary part $6$."
              },
              {
                "step": "$d = \\sqrt{729 + 36}$",
                "reason": "Signs of products: the square of a negative number is positive, so $(-27)^2 = 729$."
              },
              {
                "step": "$d = \\sqrt{765}$",
                "reason": "Sum of positive rational numbers: the two squares are added."
              },
              {
                "step": "$d = 3\\sqrt{85}$",
                "reason": "Simplest radical form: $765 = 3^2 \\cdot 85$, so the factor $3$ comes out of the root and $85$ has no square factor greater than $1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the distance between $15 - 12i$ and $-15 + 10i$ in the complex plane.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(346)",
              "lines": [
                {
                  "step": "Find the distance between $15 - 12i$ and $-15 + 10i$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = |(15 - 12i) - (-15 + 10i)|$",
                  "reason": "Distance in the complex plane: the distance between two complex numbers is the magnitude of their difference, written $d$."
                },
                {
                  "step": "$d = |15 - 12i + 15 - 10i|$",
                  "reason": "Subtracting a bracket changes every sign in it: $-15 + 10i$ becomes $15 - 10i$."
                },
                {
                  "step": "$d = |30 - 22i|$",
                  "reason": "Collecting like terms: the real parts $15$ and $15$ are added, and the imaginary parts $-12$ and $-10$."
                },
                {
                  "step": "$d = \\sqrt{30^2 + (-22)^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, here with real part $30$ and imaginary part $-22$."
                },
                {
                  "step": "$d = \\sqrt{900 + 484}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-22)^2 = 484$."
                },
                {
                  "step": "$d = \\sqrt{1384}$",
                  "reason": "Sum of positive rational numbers: the two squares are added."
                },
                {
                  "step": "$d = 2\\sqrt{346}$",
                  "reason": "Simplest radical form: $1384 = 2^2 \\cdot 346$, so the factor $2$ comes out of the root and $346$ has no square factor greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find the distance between $6 - 15i$ and $-2 + 15i$ in the complex plane.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(241)",
              "lines": [
                {
                  "step": "Find the distance between $6 - 15i$ and $-2 + 15i$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = |(6 - 15i) - (-2 + 15i)|$",
                  "reason": "Distance in the complex plane: the distance between two complex numbers is the magnitude of their difference, written $d$."
                },
                {
                  "step": "$d = |6 - 15i + 2 - 15i|$",
                  "reason": "Subtracting a bracket changes every sign in it: $-2 + 15i$ becomes $2 - 15i$."
                },
                {
                  "step": "$d = |8 - 30i|$",
                  "reason": "Collecting like terms: the real parts $6$ and $2$ are added, and the imaginary parts $-15$ and $-15$."
                },
                {
                  "step": "$d = \\sqrt{8^2 + (-30)^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, here with real part $8$ and imaginary part $-30$."
                },
                {
                  "step": "$d = \\sqrt{64 + 900}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-30)^2 = 900$."
                },
                {
                  "step": "$d = \\sqrt{964}$",
                  "reason": "Sum of positive rational numbers: the two squares are added."
                },
                {
                  "step": "$d = 2\\sqrt{241}$",
                  "reason": "Simplest radical form: $964 = 2^2 \\cdot 241$, so the factor $2$ comes out of the root and $241$ has no square factor greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find the distance between $7 - 16i$ and $-16 - 9i$ in the complex plane.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "17*sqrt(2)",
              "lines": [
                {
                  "step": "Find the distance between $7 - 16i$ and $-16 - 9i$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$d = |(7 - 16i) - (-16 - 9i)|$",
                  "reason": "Distance in the complex plane: the distance between two complex numbers is the magnitude of their difference, written $d$."
                },
                {
                  "step": "$d = |7 - 16i + 16 + 9i|$",
                  "reason": "Subtracting a bracket changes every sign in it: $-16 - 9i$ becomes $16 + 9i$."
                },
                {
                  "step": "$d = |23 - 7i|$",
                  "reason": "Collecting like terms: the real parts $7$ and $16$ are added, and the imaginary parts $-16$ and $9$."
                },
                {
                  "step": "$d = \\sqrt{23^2 + (-7)^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, here with real part $23$ and imaginary part $-7$."
                },
                {
                  "step": "$d = \\sqrt{529 + 49}$",
                  "reason": "Signs of products: the square of a negative number is positive, so $(-7)^2 = 49$."
                },
                {
                  "step": "$d = \\sqrt{578}$",
                  "reason": "Sum of positive rational numbers: the two squares are added."
                },
                {
                  "step": "$d = 17\\sqrt{2}$",
                  "reason": "Simplest radical form: $578 = 17^2 \\cdot 2$, so the factor $17$ comes out of the root and $2$ has no square factor greater than $1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t187-k4",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $z + \\overline{z} = 3$ in the complex plane.",
            "lines": [
              {
                "step": "Sketch the graph of $z + \\overline{z} = 3$ in the complex plane.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{z + \\overline{z}}{2} = \\dfrac{3}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$\\operatorname{Re}(z) = \\dfrac{3}{2}$",
                "reason": "Real and imaginary part from the conjugate: $\\operatorname{Re}(z) = \\dfrac{z + \\overline{z}}{2}$."
              },
              {
                "step": "$x = \\dfrac{3}{2}$",
                "reason": "Complex plane: the real part of $z = x + yi$ is $x$, read along the real axis."
              },
              {
                "step": "The graph is the vertical line through $(\\dfrac{3}{2}, 0)$.",
                "reason": "Vertical line $x = c$: every point of it has real part $\\dfrac{3}{2}$, and it meets the real axis at $(\\dfrac{3}{2}, 0)$.",
                "figure": {
                  "file": "the-complex-plane-24.svg",
                  "alt": "A vertical line crossing the real axis at (3/2, 0)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $z + \\overline{z} = -10$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-5, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $z + \\overline{z} = -10$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{z + \\overline{z}}{2} = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\operatorname{Re}(z) = -5$",
                  "reason": "Real and imaginary part from the conjugate: $\\operatorname{Re}(z) = \\dfrac{z + \\overline{z}}{2}$."
                },
                {
                  "step": "$x = -5$",
                  "reason": "Complex plane: the real part of $z = x + yi$ is $x$, read along the real axis."
                },
                {
                  "step": "The graph is the vertical line through $(-5, 0)$.",
                  "reason": "Vertical line $x = c$: every point of it has real part $-5$, and it meets the real axis at $(-5, 0)$.",
                  "figure": {
                    "file": "the-complex-plane-25.svg",
                    "alt": "A vertical line crossing the real axis at (−5, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $z + \\overline{z} = -19$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-\\dfrac{19}{2}, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $z + \\overline{z} = -19$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{z + \\overline{z}}{2} = -\\dfrac{19}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\operatorname{Re}(z) = -\\dfrac{19}{2}$",
                  "reason": "Real and imaginary part from the conjugate: $\\operatorname{Re}(z) = \\dfrac{z + \\overline{z}}{2}$."
                },
                {
                  "step": "$x = -\\dfrac{19}{2}$",
                  "reason": "Complex plane: the real part of $z = x + yi$ is $x$, read along the real axis."
                },
                {
                  "step": "The graph is the vertical line through $(-\\dfrac{19}{2}, 0)$.",
                  "reason": "Vertical line $x = c$: every point of it has real part $-\\dfrac{19}{2}$, and it meets the real axis at $(-\\dfrac{19}{2}, 0)$.",
                  "figure": {
                    "file": "the-complex-plane-26.svg",
                    "alt": "A vertical line crossing the real axis at (−19/2, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $z + \\overline{z} = -23$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-\\dfrac{23}{2}, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $z + \\overline{z} = -23$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{z + \\overline{z}}{2} = -\\dfrac{23}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\operatorname{Re}(z) = -\\dfrac{23}{2}$",
                  "reason": "Real and imaginary part from the conjugate: $\\operatorname{Re}(z) = \\dfrac{z + \\overline{z}}{2}$."
                },
                {
                  "step": "$x = -\\dfrac{23}{2}$",
                  "reason": "Complex plane: the real part of $z = x + yi$ is $x$, read along the real axis."
                },
                {
                  "step": "The graph is the vertical line through $(-\\dfrac{23}{2}, 0)$.",
                  "reason": "Vertical line $x = c$: every point of it has real part $-\\dfrac{23}{2}$, and it meets the real axis at $(-\\dfrac{23}{2}, 0)$.",
                  "figure": {
                    "file": "the-complex-plane-27.svg",
                    "alt": "A vertical line crossing the real axis at (−23/2, 0)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $z - \\overline{z} = -11i$ in the complex plane.",
            "lines": [
              {
                "step": "Sketch the graph of $z - \\overline{z} = -11i$ in the complex plane.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{z - \\overline{z}}{2i} = -\\dfrac{11}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2i$, and $\\dfrac{-11i}{2i} = -\\dfrac{11}{2}$."
              },
              {
                "step": "$\\operatorname{Im}(z) = -\\dfrac{11}{2}$",
                "reason": "Real and imaginary part from the conjugate: $\\operatorname{Im}(z) = \\dfrac{z - \\overline{z}}{2i}$."
              },
              {
                "step": "$y = -\\dfrac{11}{2}$",
                "reason": "Complex plane: the imaginary part of $z = x + yi$ is $y$, read along the imaginary axis."
              },
              {
                "step": "The graph is the horizontal line through $(0, -\\dfrac{11}{2})$.",
                "reason": "Horizontal line $y = c$: every point of it has imaginary part $-\\dfrac{11}{2}$, and it meets the imaginary axis at $(0, -\\dfrac{11}{2})$.",
                "figure": {
                  "file": "the-complex-plane-33.svg",
                  "alt": "A horizontal line crossing the imaginary axis at (0, −11/2)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $z - \\overline{z} = -18i$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -9)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $z - \\overline{z} = -18i$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{z - \\overline{z}}{2i} = -9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2i$, and $\\dfrac{-18i}{2i} = -9$."
                },
                {
                  "step": "$\\operatorname{Im}(z) = -9$",
                  "reason": "Real and imaginary part from the conjugate: $\\operatorname{Im}(z) = \\dfrac{z - \\overline{z}}{2i}$."
                },
                {
                  "step": "$y = -9$",
                  "reason": "Complex plane: the imaginary part of $z = x + yi$ is $y$, read along the imaginary axis."
                },
                {
                  "step": "The graph is the horizontal line through $(0, -9)$.",
                  "reason": "Horizontal line $y = c$: every point of it has imaginary part $-9$, and it meets the imaginary axis at $(0, -9)$.",
                  "figure": {
                    "file": "the-complex-plane-34.svg",
                    "alt": "A horizontal line crossing the imaginary axis at (0, −9)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $z - \\overline{z} = -21i$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -\\dfrac{21}{2})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $z - \\overline{z} = -21i$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{z - \\overline{z}}{2i} = -\\dfrac{21}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2i$, and $\\dfrac{-21i}{2i} = -\\dfrac{21}{2}$."
                },
                {
                  "step": "$\\operatorname{Im}(z) = -\\dfrac{21}{2}$",
                  "reason": "Real and imaginary part from the conjugate: $\\operatorname{Im}(z) = \\dfrac{z - \\overline{z}}{2i}$."
                },
                {
                  "step": "$y = -\\dfrac{21}{2}$",
                  "reason": "Complex plane: the imaginary part of $z = x + yi$ is $y$, read along the imaginary axis."
                },
                {
                  "step": "The graph is the horizontal line through $(0, -\\dfrac{21}{2})$.",
                  "reason": "Horizontal line $y = c$: every point of it has imaginary part $-\\dfrac{21}{2}$, and it meets the imaginary axis at $(0, -\\dfrac{21}{2})$.",
                  "figure": {
                    "file": "the-complex-plane-35.svg",
                    "alt": "A horizontal line crossing the imaginary axis at (0, −21/2)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $z - \\overline{z} = 27i$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, \\dfrac{27}{2})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $z - \\overline{z} = 27i$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{z - \\overline{z}}{2i} = \\dfrac{27}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2i$, and $\\dfrac{27i}{2i} = \\dfrac{27}{2}$."
                },
                {
                  "step": "$\\operatorname{Im}(z) = \\dfrac{27}{2}$",
                  "reason": "Real and imaginary part from the conjugate: $\\operatorname{Im}(z) = \\dfrac{z - \\overline{z}}{2i}$."
                },
                {
                  "step": "$y = \\dfrac{27}{2}$",
                  "reason": "Complex plane: the imaginary part of $z = x + yi$ is $y$, read along the imaginary axis."
                },
                {
                  "step": "The graph is the horizontal line through $(0, \\dfrac{27}{2})$.",
                  "reason": "Horizontal line $y = c$: every point of it has imaginary part $\\dfrac{27}{2}$, and it meets the imaginary axis at $(0, \\dfrac{27}{2})$.",
                  "figure": {
                    "file": "the-complex-plane-36.svg",
                    "alt": "A horizontal line crossing the imaginary axis at (0, 27/2)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation in $x$ and $y$ of the graph of $(2 + 13i)z - (2 - 13i)\\overline{z} = -8i$, where $z = x + yi$.",
            "lines": [
              {
                "step": "Find the equation in $x$ and $y$ of the graph of $(2 + 13i)z - (2 - 13i)\\overline{z} = -8i$, where $z = x + yi$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2 + 13i)(x + yi) - (2 - 13i)(x - yi) = -8i$",
                "reason": "Complex plane: the point $(x, y)$ stands for $z = x + yi$, and by the complex conjugate $\\overline{z} = x - yi$."
              },
              {
                "step": "$2x + 2yi + 13xi + 13yi^2 - (2x - 2yi - 13xi + 13yi^2) = -8i$",
                "reason": "Every term of one bracket times every term of the other, in each product."
              },
              {
                "step": "$2x + 2yi + 13xi - 13y - (2x - 2yi - 13xi - 13y) = -8i$",
                "reason": "The number $i$ with $i^2 = -1$: each term in $yi^2$ becomes a term in $y$ with the opposite sign."
              },
              {
                "step": "$2x + 2yi + 13xi - 13y - 2x + 2yi + 13xi + 13y = -8i$",
                "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
              },
              {
                "step": "$26xi + 4yi = -8i$",
                "reason": "Collecting like terms: the terms in $x$ and in $y$ cancel, and the terms in $xi$ and in $yi$ are added."
              },
              {
                "step": "$26x + 4y = -8$",
                "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: the left side has real part $0$ and imaginary part $26x + 4y$."
              },
              {
                "step": "$13x + 2y = -4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, so the whole numbers have no common factor and the coefficient of $x$ is above $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation in $x$ and $y$ of the graph of $(13 - 9i)z - (13 + 9i)\\overline{z} = 4i$, where $z = x + yi$.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "9*x-13*y = -2",
              "lines": [
                {
                  "step": "Find the equation in $x$ and $y$ of the graph of $(13 - 9i)z - (13 + 9i)\\overline{z} = 4i$, where $z = x + yi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(13 - 9i)(x + yi) - (13 + 9i)(x - yi) = 4i$",
                  "reason": "Complex plane: the point $(x, y)$ stands for $z = x + yi$, and by the complex conjugate $\\overline{z} = x - yi$."
                },
                {
                  "step": "$13x + 13yi - 9xi - 9yi^2 - (13x - 13yi + 9xi - 9yi^2) = 4i$",
                  "reason": "Every term of one bracket times every term of the other, in each product."
                },
                {
                  "step": "$13x + 13yi - 9xi + 9y - (13x - 13yi + 9xi + 9y) = 4i$",
                  "reason": "The number $i$ with $i^2 = -1$: each term in $yi^2$ becomes a term in $y$ with the opposite sign."
                },
                {
                  "step": "$13x + 13yi - 9xi + 9y - 13x + 13yi - 9xi - 9y = 4i$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$-18xi + 26yi = 4i$",
                  "reason": "Collecting like terms: the terms in $x$ and in $y$ cancel, and the terms in $xi$ and in $yi$ are added."
                },
                {
                  "step": "$-18x + 26y = 4$",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: the left side has real part $0$ and imaginary part $-18x + 26y$."
                },
                {
                  "step": "$9x - 13y = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$, so the whole numbers have no common factor and the coefficient of $x$ is above $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation in $x$ and $y$ of the graph of $(-14 - 5i)z - (-14 + 5i)\\overline{z} = 12i$, where $z = x + yi$.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "5*x+14*y = -6",
              "lines": [
                {
                  "step": "Find the equation in $x$ and $y$ of the graph of $(-14 - 5i)z - (-14 + 5i)\\overline{z} = 12i$, where $z = x + yi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-14 - 5i)(x + yi) - (-14 + 5i)(x - yi) = 12i$",
                  "reason": "Complex plane: the point $(x, y)$ stands for $z = x + yi$, and by the complex conjugate $\\overline{z} = x - yi$."
                },
                {
                  "step": "$-14x - 14yi - 5xi - 5yi^2 - (-14x + 14yi + 5xi - 5yi^2) = 12i$",
                  "reason": "Every term of one bracket times every term of the other, in each product."
                },
                {
                  "step": "$-14x - 14yi - 5xi + 5y - (-14x + 14yi + 5xi + 5y) = 12i$",
                  "reason": "The number $i$ with $i^2 = -1$: each term in $yi^2$ becomes a term in $y$ with the opposite sign."
                },
                {
                  "step": "$-14x - 14yi - 5xi + 5y + 14x - 14yi - 5xi - 5y = 12i$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$-10xi - 28yi = 12i$",
                  "reason": "Collecting like terms: the terms in $x$ and in $y$ cancel, and the terms in $xi$ and in $yi$ are added."
                },
                {
                  "step": "$-10x - 28y = 12$",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: the left side has real part $0$ and imaginary part $-10x - 28y$."
                },
                {
                  "step": "$5x + 14y = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$, so the whole numbers have no common factor and the coefficient of $x$ is above $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation in $x$ and $y$ of the graph of $(11 + 14i)z - (11 - 14i)\\overline{z} = 22i$, where $z = x + yi$.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "14*x+11*y = 11",
              "lines": [
                {
                  "step": "Find the equation in $x$ and $y$ of the graph of $(11 + 14i)z - (11 - 14i)\\overline{z} = 22i$, where $z = x + yi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(11 + 14i)(x + yi) - (11 - 14i)(x - yi) = 22i$",
                  "reason": "Complex plane: the point $(x, y)$ stands for $z = x + yi$, and by the complex conjugate $\\overline{z} = x - yi$."
                },
                {
                  "step": "$11x + 11yi + 14xi + 14yi^2 - (11x - 11yi - 14xi + 14yi^2) = 22i$",
                  "reason": "Every term of one bracket times every term of the other, in each product."
                },
                {
                  "step": "$11x + 11yi + 14xi - 14y - (11x - 11yi - 14xi - 14y) = 22i$",
                  "reason": "The number $i$ with $i^2 = -1$: each term in $yi^2$ becomes a term in $y$ with the opposite sign."
                },
                {
                  "step": "$11x + 11yi + 14xi - 14y - 11x + 11yi + 14xi + 14y = 22i$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and each term in it changes sign."
                },
                {
                  "step": "$28xi + 22yi = 22i$",
                  "reason": "Collecting like terms: the terms in $x$ and in $y$ cancel, and the terms in $xi$ and in $yi$ are added."
                },
                {
                  "step": "$28x + 22y = 22$",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: the left side has real part $0$ and imaginary part $28x + 22y$."
                },
                {
                  "step": "$14x + 11y = 11$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, so the whole numbers have no common factor and the coefficient of $x$ is above $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t187-k5",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $|z + 11 - 5i| = 5\\sqrt{5}$ in the complex plane.",
            "lines": [
              {
                "step": "Sketch the graph of $|z + 11 - 5i| = 5\\sqrt{5}$ in the complex plane.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$|z - (-11 + 5i)| = 5\\sqrt{5}$",
                "reason": "Subtracting a bracket changes every sign in it: $z - (-11 + 5i) = z + 11 - 5i$."
              },
              {
                "step": "The distance from $z$ to $-11 + 5i$ is $5\\sqrt{5}$.",
                "reason": "Distance in the complex plane: $|z - (-11 + 5i)|$ is the distance between $z$ and $-11 + 5i$."
              },
              {
                "step": "The graph is the circle with centre $(-11, 5)$ and radius $5\\sqrt{5}$.",
                "reason": "Circle in the complex plane: the points at distance $5\\sqrt{5}$ from $-11 + 5i$ make the circle with that centre and radius."
              },
              {
                "step": "$(x + 11)^2 + (y - 5)^2 = 125$",
                "reason": "Standard form of a circle: with $z = x + yi$, the circle with centre $(h, k)$ and radius $r$ is the graph of $(x - h)^2 + (y - k)^2 = r^2$, and $(5\\sqrt{5})^2 = 125$."
              },
              {
                "step": "$(x + 11)^2 + (0 - 5)^2 = 125$",
                "reason": "Substituting a value: a point of the real axis has $y = 0$."
              },
              {
                "step": "$(x + 11)^2 = 100$",
                "reason": "Adding the same number to both sides: $(0 - 5)^2 = 25$ is taken from both sides."
              },
              {
                "step": "Either $x + 11 = 10$ or $x + 11 = -10$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$, with $x + 11$ in the place of $x$ and $100 = 10^2$."
              },
              {
                "step": "Either $x = -1$ or $x = -21$.",
                "reason": "Adding the same number to both sides: $-11$ is added to both sides of each equation."
              },
              {
                "step": "$(0 + 11)^2 + (y - 5)^2 = 125$",
                "reason": "Substituting a value: a point of the imaginary axis has $x = 0$."
              },
              {
                "step": "$(y - 5)^2 = 4$",
                "reason": "Adding the same number to both sides: $(0 + 11)^2 = 121$ is taken from both sides."
              },
              {
                "step": "Either $y - 5 = 2$ or $y - 5 = -2$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$, with $y - 5$ in the place of $x$ and $4 = 2^2$."
              },
              {
                "step": "Either $y = 7$ or $y = 3$.",
                "reason": "Adding the same number to both sides: $5$ is added to both sides of each equation."
              },
              {
                "step": "The circle with centre $(-11, 5)$ and radius $5\\sqrt{5}$, through these points, is the graph.",
                "reason": "Circle in the complex plane: the graph is that circle.",
                "figure": {
                  "file": "the-complex-plane-42.svg",
                  "alt": "A circle with centre (−11, 5) crossing the real axis at −21 and −1 and the imaginary axis at 3 and 7."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $|z + 10 + 2i| = 10\\sqrt{2}$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-24, 0)$",
                  "$(4, 0)$",
                  "$(0, -12)$",
                  "$(0, 8)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|z + 10 + 2i| = 10\\sqrt{2}$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|z - (-10 - 2i)| = 10\\sqrt{2}$",
                  "reason": "Subtracting a bracket changes every sign in it: $z - (-10 - 2i) = z + 10 + 2i$."
                },
                {
                  "step": "The distance from $z$ to $-10 - 2i$ is $10\\sqrt{2}$.",
                  "reason": "Distance in the complex plane: $|z - (-10 - 2i)|$ is the distance between $z$ and $-10 - 2i$."
                },
                {
                  "step": "The graph is the circle with centre $(-10, -2)$ and radius $10\\sqrt{2}$.",
                  "reason": "Circle in the complex plane: the points at distance $10\\sqrt{2}$ from $-10 - 2i$ make the circle with that centre and radius."
                },
                {
                  "step": "$(x + 10)^2 + (y + 2)^2 = 200$",
                  "reason": "Standard form of a circle: with $z = x + yi$, the circle with centre $(h, k)$ and radius $r$ is the graph of $(x - h)^2 + (y - k)^2 = r^2$, and $(10\\sqrt{2})^2 = 200$."
                },
                {
                  "step": "$(x + 10)^2 + (0 + 2)^2 = 200$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$(x + 10)^2 = 196$",
                  "reason": "Adding the same number to both sides: $(0 + 2)^2 = 4$ is taken from both sides."
                },
                {
                  "step": "Either $x + 10 = 14$ or $x + 10 = -14$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$, with $x + 10$ in the place of $x$ and $196 = 14^2$."
                },
                {
                  "step": "Either $x = 4$ or $x = -24$.",
                  "reason": "Adding the same number to both sides: $-10$ is added to both sides of each equation."
                },
                {
                  "step": "$(0 + 10)^2 + (y + 2)^2 = 200$",
                  "reason": "Substituting a value: a point of the imaginary axis has $x = 0$."
                },
                {
                  "step": "$(y + 2)^2 = 100$",
                  "reason": "Adding the same number to both sides: $(0 + 10)^2 = 100$ is taken from both sides."
                },
                {
                  "step": "Either $y + 2 = 10$ or $y + 2 = -10$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$, with $y + 2$ in the place of $x$ and $100 = 10^2$."
                },
                {
                  "step": "Either $y = 8$ or $y = -12$.",
                  "reason": "Adding the same number to both sides: $-2$ is added to both sides of each equation."
                },
                {
                  "step": "The circle with centre $(-10, -2)$ and radius $10\\sqrt{2}$, through these points, is the graph.",
                  "reason": "Circle in the complex plane: the graph is that circle.",
                  "figure": {
                    "file": "the-complex-plane-43.svg",
                    "alt": "A circle with centre (−10, −2) crossing the real axis at −24 and 4 and the imaginary axis at −12 and 8."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $|z + 12 - 8i| = \\sqrt{145}$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-21, 0)$",
                  "$(-3, 0)$",
                  "$(0, 7)$",
                  "$(0, 9)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|z + 12 - 8i| = \\sqrt{145}$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|z - (-12 + 8i)| = \\sqrt{145}$",
                  "reason": "Subtracting a bracket changes every sign in it: $z - (-12 + 8i) = z + 12 - 8i$."
                },
                {
                  "step": "The distance from $z$ to $-12 + 8i$ is $\\sqrt{145}$.",
                  "reason": "Distance in the complex plane: $|z - (-12 + 8i)|$ is the distance between $z$ and $-12 + 8i$."
                },
                {
                  "step": "The graph is the circle with centre $(-12, 8)$ and radius $\\sqrt{145}$.",
                  "reason": "Circle in the complex plane: the points at distance $\\sqrt{145}$ from $-12 + 8i$ make the circle with that centre and radius."
                },
                {
                  "step": "$(x + 12)^2 + (y - 8)^2 = 145$",
                  "reason": "Standard form of a circle: with $z = x + yi$, the circle with centre $(h, k)$ and radius $r$ is the graph of $(x - h)^2 + (y - k)^2 = r^2$, and $(\\sqrt{145})^2 = 145$."
                },
                {
                  "step": "$(x + 12)^2 + (0 - 8)^2 = 145$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$(x + 12)^2 = 81$",
                  "reason": "Adding the same number to both sides: $(0 - 8)^2 = 64$ is taken from both sides."
                },
                {
                  "step": "Either $x + 12 = 9$ or $x + 12 = -9$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$, with $x + 12$ in the place of $x$ and $81 = 9^2$."
                },
                {
                  "step": "Either $x = -3$ or $x = -21$.",
                  "reason": "Adding the same number to both sides: $-12$ is added to both sides of each equation."
                },
                {
                  "step": "$(0 + 12)^2 + (y - 8)^2 = 145$",
                  "reason": "Substituting a value: a point of the imaginary axis has $x = 0$."
                },
                {
                  "step": "$(y - 8)^2 = 1$",
                  "reason": "Adding the same number to both sides: $(0 + 12)^2 = 144$ is taken from both sides."
                },
                {
                  "step": "Either $y - 8 = 1$ or $y - 8 = -1$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$, with $y - 8$ in the place of $x$ and $1 = 1^2$."
                },
                {
                  "step": "Either $y = 9$ or $y = 7$.",
                  "reason": "Adding the same number to both sides: $8$ is added to both sides of each equation."
                },
                {
                  "step": "The circle with centre $(-12, 8)$ and radius $\\sqrt{145}$, through these points, is the graph.",
                  "reason": "Circle in the complex plane: the graph is that circle.",
                  "figure": {
                    "file": "the-complex-plane-44.svg",
                    "alt": "A circle with centre (−12, 8) crossing the real axis at −21 and −3 and the imaginary axis at 7 and 9."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $|z - 7 - 13i| = \\sqrt{170}$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(6, 0)$",
                  "$(8, 0)$",
                  "$(0, 2)$",
                  "$(0, 24)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|z - 7 - 13i| = \\sqrt{170}$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|z - (7 + 13i)| = \\sqrt{170}$",
                  "reason": "Subtracting a bracket changes every sign in it: $z - (7 + 13i) = z - 7 - 13i$."
                },
                {
                  "step": "The distance from $z$ to $7 + 13i$ is $\\sqrt{170}$.",
                  "reason": "Distance in the complex plane: $|z - (7 + 13i)|$ is the distance between $z$ and $7 + 13i$."
                },
                {
                  "step": "The graph is the circle with centre $(7, 13)$ and radius $\\sqrt{170}$.",
                  "reason": "Circle in the complex plane: the points at distance $\\sqrt{170}$ from $7 + 13i$ make the circle with that centre and radius."
                },
                {
                  "step": "$(x - 7)^2 + (y - 13)^2 = 170$",
                  "reason": "Standard form of a circle: with $z = x + yi$, the circle with centre $(h, k)$ and radius $r$ is the graph of $(x - h)^2 + (y - k)^2 = r^2$, and $(\\sqrt{170})^2 = 170$."
                },
                {
                  "step": "$(x - 7)^2 + (0 - 13)^2 = 170$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$(x - 7)^2 = 1$",
                  "reason": "Adding the same number to both sides: $(0 - 13)^2 = 169$ is taken from both sides."
                },
                {
                  "step": "Either $x - 7 = 1$ or $x - 7 = -1$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$, with $x - 7$ in the place of $x$ and $1 = 1^2$."
                },
                {
                  "step": "Either $x = 8$ or $x = 6$.",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides of each equation."
                },
                {
                  "step": "$(0 - 7)^2 + (y - 13)^2 = 170$",
                  "reason": "Substituting a value: a point of the imaginary axis has $x = 0$."
                },
                {
                  "step": "$(y - 13)^2 = 121$",
                  "reason": "Adding the same number to both sides: $(0 - 7)^2 = 49$ is taken from both sides."
                },
                {
                  "step": "Either $y - 13 = 11$ or $y - 13 = -11$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$, with $y - 13$ in the place of $x$ and $121 = 11^2$."
                },
                {
                  "step": "Either $y = 24$ or $y = 2$.",
                  "reason": "Adding the same number to both sides: $13$ is added to both sides of each equation."
                },
                {
                  "step": "The circle with centre $(7, 13)$ and radius $\\sqrt{170}$, through these points, is the graph.",
                  "reason": "Circle in the complex plane: the graph is that circle.",
                  "figure": {
                    "file": "the-complex-plane-45.svg",
                    "alt": "A circle with centre (7, 13) crossing the real axis at 6 and 8 and the imaginary axis at 2 and 24."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t187-k6",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $|z - 1 - 13i| = |z - 13 - 5i|$ in the complex plane.",
            "lines": [
              {
                "step": "Sketch the graph of $|z - 1 - 13i| = |z - 13 - 5i|$ in the complex plane.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$|z - (1 + 13i)| = |z - (13 + 5i)|$",
                "reason": "Subtracting a bracket changes every sign in it: $z - (1 + 13i) = z - 1 - 13i$ and $z - (13 + 5i) = z - 13 - 5i$."
              },
              {
                "step": "The distance from $z$ to $1 + 13i$ equals the distance from $z$ to $13 + 5i$.",
                "reason": "Distance in the complex plane: each side is the magnitude of a difference."
              },
              {
                "step": "The graph is the perpendicular bisector of the segment from $(1, 13)$ to $(13, 5)$.",
                "reason": "Perpendicular bisector in the complex plane: the points as far from one end as from the other make that line."
              },
              {
                "step": "The midpoint of the segment is $(7, 9)$.",
                "reason": "Midpoint formula: $\\left(\\dfrac{1 + 13}{2}, \\dfrac{13 + 5}{2}\\right) = (7, 9)$."
              },
              {
                "step": "The segment has slope $-\\dfrac{2}{3}$.",
                "reason": "Slope: $\\dfrac{5 - 13}{13 - 1} = -\\dfrac{2}{3}$."
              },
              {
                "step": "The bisector has slope $\\dfrac{3}{2}$.",
                "reason": "Slopes with product $-1$ mean perpendicular: $(-\\dfrac{2}{3}) \\cdot \\dfrac{3}{2} = -1$."
              },
              {
                "step": "$y - 9 = \\dfrac{3}{2}(x - 7)$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, here through the midpoint."
              },
              {
                "step": "$y - 9 = \\dfrac{3}{2}x - \\dfrac{21}{2}$",
                "reason": "Multiplying out: $\\dfrac{3}{2}$ multiplies each term in the bracket."
              },
              {
                "step": "$y = \\dfrac{3}{2}x - \\dfrac{3}{2}$",
                "reason": "Adding the same number to both sides: $9$ is added to both sides."
              },
              {
                "step": "The line meets the imaginary axis at $(0, -\\dfrac{3}{2})$.",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -\\dfrac{3}{2}$."
              },
              {
                "step": "$0 = \\dfrac{3}{2}x - \\dfrac{3}{2}$",
                "reason": "Substituting a value: a point of the real axis has $y = 0$."
              },
              {
                "step": "$\\dfrac{3}{2} = \\dfrac{3}{2}x$",
                "reason": "Adding the same number to both sides: $\\dfrac{3}{2}$ is added to both sides."
              },
              {
                "step": "$x = 1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{3}{2}$."
              },
              {
                "step": "The line through $(1, 0)$ and $(0, -\\dfrac{3}{2})$ is the graph.",
                "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line.",
                "figure": {
                  "file": "the-complex-plane-60.svg",
                  "alt": "The points (1, 13) and (13, 5) and the line crossing the real axis at 1 and the imaginary axis at −3/2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $|z + 8 - 14i| = |z - 14 - 12i|$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(\\dfrac{20}{11}, 0)$",
                  "$(0, -20)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|z + 8 - 14i| = |z - 14 - 12i|$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|z - (-8 + 14i)| = |z - (14 + 12i)|$",
                  "reason": "Subtracting a bracket changes every sign in it: $z - (-8 + 14i) = z + 8 - 14i$ and $z - (14 + 12i) = z - 14 - 12i$."
                },
                {
                  "step": "The distance from $z$ to $-8 + 14i$ equals the distance from $z$ to $14 + 12i$.",
                  "reason": "Distance in the complex plane: each side is the magnitude of a difference."
                },
                {
                  "step": "The graph is the perpendicular bisector of the segment from $(-8, 14)$ to $(14, 12)$.",
                  "reason": "Perpendicular bisector in the complex plane: the points as far from one end as from the other make that line."
                },
                {
                  "step": "The midpoint of the segment is $(3, 13)$.",
                  "reason": "Midpoint formula: $\\left(\\dfrac{-8 + 14}{2}, \\dfrac{14 + 12}{2}\\right) = (3, 13)$."
                },
                {
                  "step": "The segment has slope $-\\dfrac{1}{11}$.",
                  "reason": "Slope: $\\dfrac{12 - 14}{14 - (-8)} = -\\dfrac{1}{11}$."
                },
                {
                  "step": "The bisector has slope $11$.",
                  "reason": "Slopes with product $-1$ mean perpendicular: $(-\\dfrac{1}{11}) \\cdot 11 = -1$."
                },
                {
                  "step": "$y - 13 = 11(x - 3)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, here through the midpoint."
                },
                {
                  "step": "$y - 13 = 11x - 33$",
                  "reason": "Multiplying out: $11$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = 11x - 20$",
                  "reason": "Adding the same number to both sides: $13$ is added to both sides."
                },
                {
                  "step": "The line meets the imaginary axis at $(0, -20)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -20$."
                },
                {
                  "step": "$0 = 11x - 20$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$20 = 11x$",
                  "reason": "Adding the same number to both sides: $20$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{20}{11}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$."
                },
                {
                  "step": "The line through $(\\dfrac{20}{11}, 0)$ and $(0, -20)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line.",
                  "figure": {
                    "file": "the-complex-plane-61.svg",
                    "alt": "The points (−8, 14) and (14, 12) and the line crossing the real axis at 20/11 and the imaginary axis at −20."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $|z + 13 - 4i| = |z - 7 - 14i|$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(\\dfrac{3}{2}, 0)$",
                  "$(0, 3)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|z + 13 - 4i| = |z - 7 - 14i|$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|z - (-13 + 4i)| = |z - (7 + 14i)|$",
                  "reason": "Subtracting a bracket changes every sign in it: $z - (-13 + 4i) = z + 13 - 4i$ and $z - (7 + 14i) = z - 7 - 14i$."
                },
                {
                  "step": "The distance from $z$ to $-13 + 4i$ equals the distance from $z$ to $7 + 14i$.",
                  "reason": "Distance in the complex plane: each side is the magnitude of a difference."
                },
                {
                  "step": "The graph is the perpendicular bisector of the segment from $(-13, 4)$ to $(7, 14)$.",
                  "reason": "Perpendicular bisector in the complex plane: the points as far from one end as from the other make that line."
                },
                {
                  "step": "The midpoint of the segment is $(-3, 9)$.",
                  "reason": "Midpoint formula: $\\left(\\dfrac{-13 + 7}{2}, \\dfrac{4 + 14}{2}\\right) = (-3, 9)$."
                },
                {
                  "step": "The segment has slope $\\dfrac{1}{2}$.",
                  "reason": "Slope: $\\dfrac{14 - 4}{7 - (-13)} = \\dfrac{1}{2}$."
                },
                {
                  "step": "The bisector has slope $-2$.",
                  "reason": "Slopes with product $-1$ mean perpendicular: $\\dfrac{1}{2} \\cdot (-2) = -1$."
                },
                {
                  "step": "$y - 9 = -2(x + 3)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, here through the midpoint."
                },
                {
                  "step": "$y - 9 = -2x - 6$",
                  "reason": "Multiplying out: $-2$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = -2x + 3$",
                  "reason": "Adding the same number to both sides: $9$ is added to both sides."
                },
                {
                  "step": "The line meets the imaginary axis at $(0, 3)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = 3$."
                },
                {
                  "step": "$0 = -2x + 3$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$-3 = -2x$",
                  "reason": "Adding the same number to both sides: $-3$ is added to both sides."
                },
                {
                  "step": "$x = \\dfrac{3}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                },
                {
                  "step": "The line through $(\\dfrac{3}{2}, 0)$ and $(0, 3)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line.",
                  "figure": {
                    "file": "the-complex-plane-62.svg",
                    "alt": "The points (−13, 4) and (7, 14) and the line crossing the real axis at 3/2 and the imaginary axis at 3."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $|z + 14 + 11i| = |z + 4 + 15i|$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-\\dfrac{19}{5}, 0)$",
                  "$(0, \\dfrac{19}{2})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|z + 14 + 11i| = |z + 4 + 15i|$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|z - (-14 - 11i)| = |z - (-4 - 15i)|$",
                  "reason": "Subtracting a bracket changes every sign in it: $z - (-14 - 11i) = z + 14 + 11i$ and $z - (-4 - 15i) = z + 4 + 15i$."
                },
                {
                  "step": "The distance from $z$ to $-14 - 11i$ equals the distance from $z$ to $-4 - 15i$.",
                  "reason": "Distance in the complex plane: each side is the magnitude of a difference."
                },
                {
                  "step": "The graph is the perpendicular bisector of the segment from $(-14, -11)$ to $(-4, -15)$.",
                  "reason": "Perpendicular bisector in the complex plane: the points as far from one end as from the other make that line."
                },
                {
                  "step": "The midpoint of the segment is $(-9, -13)$.",
                  "reason": "Midpoint formula: $\\left(\\dfrac{-14 + (-4)}{2}, \\dfrac{-11 + (-15)}{2}\\right) = (-9, -13)$."
                },
                {
                  "step": "The segment has slope $-\\dfrac{2}{5}$.",
                  "reason": "Slope: $\\dfrac{-15 - (-11)}{-4 - (-14)} = -\\dfrac{2}{5}$."
                },
                {
                  "step": "The bisector has slope $\\dfrac{5}{2}$.",
                  "reason": "Slopes with product $-1$ mean perpendicular: $(-\\dfrac{2}{5}) \\cdot \\dfrac{5}{2} = -1$."
                },
                {
                  "step": "$y + 13 = \\dfrac{5}{2}(x + 9)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, here through the midpoint."
                },
                {
                  "step": "$y + 13 = \\dfrac{5}{2}x + \\dfrac{45}{2}$",
                  "reason": "Multiplying out: $\\dfrac{5}{2}$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = \\dfrac{5}{2}x + \\dfrac{19}{2}$",
                  "reason": "Adding the same number to both sides: $-13$ is added to both sides."
                },
                {
                  "step": "The line meets the imaginary axis at $(0, \\dfrac{19}{2})$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = \\dfrac{19}{2}$."
                },
                {
                  "step": "$0 = \\dfrac{5}{2}x + \\dfrac{19}{2}$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$-\\dfrac{19}{2} = \\dfrac{5}{2}x$",
                  "reason": "Adding the same number to both sides: $-\\dfrac{19}{2}$ is added to both sides."
                },
                {
                  "step": "$x = -\\dfrac{19}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{5}{2}$."
                },
                {
                  "step": "The line through $(-\\dfrac{19}{5}, 0)$ and $(0, \\dfrac{19}{2})$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line.",
                  "figure": {
                    "file": "the-complex-plane-63.svg",
                    "alt": "The points (−14, −11) and (−4, −15) and the line crossing the real axis at −19/5 and the imaginary axis at 19/2."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation in $x$ and $y$ of the graph of $|z + 18 - 5i| = |z - 3 + 18i|$, where $z = x + yi$.",
            "lines": [
              {
                "step": "Find the equation in $x$ and $y$ of the graph of $|z + 18 - 5i| = |z - 3 + 18i|$, where $z = x + yi$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$|(x + yi) + 18 - 5i| = |(x + yi) - 3 + 18i|$",
                "reason": "Substituting a value: $z$ is replaced by $x + yi$, in brackets; by the complex plane it is the point $(x, y)$."
              },
              {
                "step": "$|(x + 18) + (y - 5)i| = |(x - 3) + (y + 18)i|$",
                "reason": "Collecting like terms: on each side the real parts go together and the imaginary parts go together."
              },
              {
                "step": "$\\sqrt{(x + 18)^2 + (y - 5)^2} = \\sqrt{(x - 3)^2 + (y + 18)^2}$",
                "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, on each side."
              },
              {
                "step": "$(x + 18)^2 + (y - 5)^2 = (x - 3)^2 + (y + 18)^2$",
                "reason": "Raising both sides to a power: both sides are squared, and both roots are at least $0$, so no point is gained or lost."
              },
              {
                "step": "$x^2 + 36x + 324 + y^2 - 10y + 25 = x^2 - 6x + 9 + y^2 + 36y + 324$",
                "reason": "Square of a binomial: each bracket is squared."
              },
              {
                "step": "$x^2 + y^2 + 36x - 10y + 349 = x^2 + y^2 - 6x + 36y + 333$",
                "reason": "Collecting like terms: the numbers on each side are added."
              },
              {
                "step": "$36x - 10y + 349 = -6x + 36y + 333$",
                "reason": "Adding the same number to both sides: $x^2 + y^2$ is taken from both sides."
              },
              {
                "step": "$42x - 46y = -16$",
                "reason": "Adding the same number to both sides: $6x - 36y - 349$ is added to both sides."
              },
              {
                "step": "$21x - 23y = -8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, so the whole numbers have no common factor and the coefficient of $x$ is above $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation in $x$ and $y$ of the graph of $|z - 19 - 12i| = |z - 12 + i|$, where $z = x + yi$.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "7*x+13*y = 180",
              "lines": [
                {
                  "step": "Find the equation in $x$ and $y$ of the graph of $|z - 19 - 12i| = |z - 12 + i|$, where $z = x + yi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|(x + yi) - 19 - 12i| = |(x + yi) - 12 + i|$",
                  "reason": "Substituting a value: $z$ is replaced by $x + yi$, in brackets; by the complex plane it is the point $(x, y)$."
                },
                {
                  "step": "$|(x - 19) + (y - 12)i| = |(x - 12) + (y + 1)i|$",
                  "reason": "Collecting like terms: on each side the real parts go together and the imaginary parts go together."
                },
                {
                  "step": "$\\sqrt{(x - 19)^2 + (y - 12)^2} = \\sqrt{(x - 12)^2 + (y + 1)^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, on each side."
                },
                {
                  "step": "$(x - 19)^2 + (y - 12)^2 = (x - 12)^2 + (y + 1)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and both roots are at least $0$, so no point is gained or lost."
                },
                {
                  "step": "$x^2 - 38x + 361 + y^2 - 24y + 144 = x^2 - 24x + 144 + y^2 + 2y + 1$",
                  "reason": "Square of a binomial: each bracket is squared."
                },
                {
                  "step": "$x^2 + y^2 - 38x - 24y + 505 = x^2 + y^2 - 24x + 2y + 145$",
                  "reason": "Collecting like terms: the numbers on each side are added."
                },
                {
                  "step": "$-38x - 24y + 505 = -24x + 2y + 145$",
                  "reason": "Adding the same number to both sides: $x^2 + y^2$ is taken from both sides."
                },
                {
                  "step": "$-14x - 26y = -360$",
                  "reason": "Adding the same number to both sides: $24x - 2y - 505$ is added to both sides."
                },
                {
                  "step": "$7x + 13y = 180$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$, so the whole numbers have no common factor and the coefficient of $x$ is above $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation in $x$ and $y$ of the graph of $|z - 2 + 19i| = |z - 19 - 6i|$, where $z = x + yi$.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "17*x+25*y = 16",
              "lines": [
                {
                  "step": "Find the equation in $x$ and $y$ of the graph of $|z - 2 + 19i| = |z - 19 - 6i|$, where $z = x + yi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|(x + yi) - 2 + 19i| = |(x + yi) - 19 - 6i|$",
                  "reason": "Substituting a value: $z$ is replaced by $x + yi$, in brackets; by the complex plane it is the point $(x, y)$."
                },
                {
                  "step": "$|(x - 2) + (y + 19)i| = |(x - 19) + (y - 6)i|$",
                  "reason": "Collecting like terms: on each side the real parts go together and the imaginary parts go together."
                },
                {
                  "step": "$\\sqrt{(x - 2)^2 + (y + 19)^2} = \\sqrt{(x - 19)^2 + (y - 6)^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, on each side."
                },
                {
                  "step": "$(x - 2)^2 + (y + 19)^2 = (x - 19)^2 + (y - 6)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and both roots are at least $0$, so no point is gained or lost."
                },
                {
                  "step": "$x^2 - 4x + 4 + y^2 + 38y + 361 = x^2 - 38x + 361 + y^2 - 12y + 36$",
                  "reason": "Square of a binomial: each bracket is squared."
                },
                {
                  "step": "$x^2 + y^2 - 4x + 38y + 365 = x^2 + y^2 - 38x - 12y + 397$",
                  "reason": "Collecting like terms: the numbers on each side are added."
                },
                {
                  "step": "$-4x + 38y + 365 = -38x - 12y + 397$",
                  "reason": "Adding the same number to both sides: $x^2 + y^2$ is taken from both sides."
                },
                {
                  "step": "$34x + 50y = 32$",
                  "reason": "Adding the same number to both sides: $38x + 12y - 365$ is added to both sides."
                },
                {
                  "step": "$17x + 25y = 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, so the whole numbers have no common factor and the coefficient of $x$ is above $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation in $x$ and $y$ of the graph of $|z + 10 - 18i| = |z - 23 - 3i|$, where $z = x + yi$.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "11*x-5*y = 19",
              "lines": [
                {
                  "step": "Find the equation in $x$ and $y$ of the graph of $|z + 10 - 18i| = |z - 23 - 3i|$, where $z = x + yi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$|(x + yi) + 10 - 18i| = |(x + yi) - 23 - 3i|$",
                  "reason": "Substituting a value: $z$ is replaced by $x + yi$, in brackets; by the complex plane it is the point $(x, y)$."
                },
                {
                  "step": "$|(x + 10) + (y - 18)i| = |(x - 23) + (y - 3)i|$",
                  "reason": "Collecting like terms: on each side the real parts go together and the imaginary parts go together."
                },
                {
                  "step": "$\\sqrt{(x + 10)^2 + (y - 18)^2} = \\sqrt{(x - 23)^2 + (y - 3)^2}$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$, on each side."
                },
                {
                  "step": "$(x + 10)^2 + (y - 18)^2 = (x - 23)^2 + (y - 3)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and both roots are at least $0$, so no point is gained or lost."
                },
                {
                  "step": "$x^2 + 20x + 100 + y^2 - 36y + 324 = x^2 - 46x + 529 + y^2 - 6y + 9$",
                  "reason": "Square of a binomial: each bracket is squared."
                },
                {
                  "step": "$x^2 + y^2 + 20x - 36y + 424 = x^2 + y^2 - 46x - 6y + 538$",
                  "reason": "Collecting like terms: the numbers on each side are added."
                },
                {
                  "step": "$20x - 36y + 424 = -46x - 6y + 538$",
                  "reason": "Adding the same number to both sides: $x^2 + y^2$ is taken from both sides."
                },
                {
                  "step": "$66x - 30y = 114$",
                  "reason": "Adding the same number to both sides: $46x + 6y - 424$ is added to both sides."
                },
                {
                  "step": "$11x - 5y = 19$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$, so the whole numbers have no common factor and the coefficient of $x$ is above $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t187-k7",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $|16 - 7i|$, and write that line right.",
            "given": [
              "$|16 - 7i|$",
              "$\\sqrt{16^2 + (-7)^2}$",
              "$\\sqrt{256 - 49}$",
              "$\\sqrt{207}$",
              "$3\\sqrt{23}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $|16 - 7i|$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 writes $(-7)^2$ as $-49$.",
                "reason": "A sign lost: by the rule of signs of products, the square of a negative number is positive, so $(-7)^2 = 49$."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $\\sqrt{256 + 49}$.",
                "reason": "The square of $-7$ is $49$, so it is added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the distance between $15 + 4i$ and $18 - 16i$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: sqrt(9+400)",
              "given": [
                "$|(15 + 4i) - (18 - 16i)|$",
                "$|-3 + 20i|$",
                "$\\sqrt{(-3)^2 + 20^2}$",
                "$\\sqrt{-9 + 400}$",
                "$\\sqrt{391}$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the distance between $15 + 4i$ and $18 - 16i$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $(-3)^2$ as $-9$.",
                  "reason": "A sign lost: by the rule of signs of products, the square of a negative number is positive, so $(-3)^2 = 9$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $\\sqrt{9 + 400}$.",
                  "reason": "The square of $-3$ is $9$, so it is added."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $|17 - 15i|$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(289+225)",
              "given": [
                "$|17 - 15i|$",
                "$\\sqrt{17^2 + (-15)^2}$",
                "$\\sqrt{289 - 225}$",
                "$\\sqrt{64}$",
                "$8$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $|17 - 15i|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $(-15)^2$ as $-225$.",
                  "reason": "A sign lost: by the rule of signs of products, the square of a negative number is positive, so $(-15)^2 = 225$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{289 + 225}$.",
                  "reason": "The square of $-15$ is $225$, so it is added."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $9 - 19i$ and $-19 - 10i$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: sqrt(784+81)",
              "given": [
                "$|(9 - 19i) - (-19 - 10i)|$",
                "$|28 - 9i|$",
                "$\\sqrt{28^2 + (-9)^2}$",
                "$\\sqrt{784 - 81}$",
                "$\\sqrt{703}$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the distance between $9 - 19i$ and $-19 - 10i$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $(-9)^2$ as $-81$.",
                  "reason": "A sign lost: by the rule of signs of products, the square of a negative number is positive, so $(-9)^2 = 81$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $\\sqrt{784 + 81}$.",
                  "reason": "The square of $-9$ is $81$, so it is added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $|2 + 17i|$, and write that line right.",
            "given": [
              "$|2 + 17i|$",
              "$\\sqrt{2^2 + 17^2}$",
              "$\\sqrt{4 + 289}$",
              "$2 + 17$",
              "$19$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $|2 + 17i|$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 to 3 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 4 takes the square root of each term of $4 + 289$ on its own.",
                "reason": "A root taken term by term over a sum: the square root of a sum is not the sum of the square roots, since $(2 + 17)^2 = 361$, not $293$."
              },
              {
                "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 4 written right is $\\sqrt{293}$.",
                "reason": "The square root covers the whole sum, so the sum is worked out under it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $|-18 - 10i|$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(324+100)",
              "given": [
                "$|-18 - 10i|$",
                "$\\sqrt{(-18)^2 + (-10)^2}$",
                "$\\sqrt{(-18)^2} + \\sqrt{(-10)^2}$",
                "$18 + 10$",
                "$28$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $|-18 - 10i|$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 takes the square root of each term of $(-18)^2 + (-10)^2$ on its own.",
                  "reason": "A root taken term by term over a sum: the square root of a sum is not the sum of the square roots, since $(18 + 10)^2 = 784$, not $424$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{324 + 100}$.",
                  "reason": "The square root covers the whole sum, so the sum is worked out under it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $-19 + 18i$ and $-15 - 13i$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: sqrt(977)",
              "given": [
                "$|(-19 + 18i) - (-15 - 13i)|$",
                "$|-4 + 31i|$",
                "$\\sqrt{(-4)^2 + 31^2}$",
                "$\\sqrt{16 + 961}$",
                "$4 + 31$",
                "$35$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the distance between $-19 + 18i$ and $-15 - 13i$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 5 takes the square root of each term of $16 + 961$ on its own.",
                  "reason": "A root taken term by term over a sum: the square root of a sum is not the sum of the square roots, since $(4 + 31)^2 = 1225$, not $977$."
                },
                {
                  "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 5 written right is $\\sqrt{977}$.",
                  "reason": "The square root covers the whole sum, so the sum is worked out under it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the distance between $21 + 22i$ and $-5 + 18i$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: sqrt(676+16)",
              "given": [
                "$|(21 + 22i) - (-5 + 18i)|$",
                "$|26 + 4i|$",
                "$\\sqrt{26^2 + 4^2}$",
                "$\\sqrt{26^2} + \\sqrt{4^2}$",
                "$26 + 4$",
                "$30$"
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the distance between $21 + 22i$ and $-5 + 18i$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 takes the square root of each term of $26^2 + 4^2$ on its own.",
                  "reason": "A root taken term by term over a sum: the square root of a sum is not the sum of the square roots, since $(26 + 4)^2 = 900$, not $692$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $\\sqrt{676 + 16}$.",
                  "reason": "The square root covers the whole sum, so the sum is worked out under it."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the graph of $|z - 10 + 9i| = 3$ in the complex plane, and write that line right.",
            "given": [
              "$|z - 10 + 9i| = 3$",
              "$z - 10 + 9i = z - (-10 + 9i)$",
              "$|z - (-10 + 9i)| = 3$",
              "The distance from $z$ to $-10 + 9i$ is $3$.",
              "The graph is the circle with centre $(-10, 9)$ and radius $3$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the graph of $|z - 10 + 9i| = 3$ in the complex plane, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 writes $z - 10 + 9i$ as $z - (-10 + 9i)$.",
                "reason": "A sign lost: subtracting a bracket changes every sign in it, so $z - (-10 + 9i) = z + 10 - 9i$, not $z - 10 + 9i$."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 2 written right is $z - 10 + 9i = z - (10 - 9i)$.",
                "reason": "The bracket holds $10 - 9i$: changing both its signs gives $-10 + 9i$, the terms after $z$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the graph of $3|z - 11 + 2i| = 6$ in the complex plane, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: z-11+2*i = z-(11-2*i)",
              "given": [
                "$3|z - 11 + 2i| = 6$",
                "$|z - 11 + 2i| = 2$",
                "$z - 11 + 2i = z - (-11 + 2i)$",
                "$|z - (-11 + 2i)| = 2$",
                "The distance from $z$ to $-11 + 2i$ is $2$.",
                "The graph is the circle with centre $(-11, 2)$ and radius $2$."
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the graph of $3|z - 11 + 2i| = 6$ in the complex plane, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $z - 11 + 2i$ as $z - (-11 + 2i)$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $z - (-11 + 2i) = z + 11 - 2i$, not $z - 11 + 2i$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $z - 11 + 2i = z - (11 - 2i)$.",
                  "reason": "The bracket holds $11 - 2i$: changing both its signs gives $-11 + 2i$, the terms after $z$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the graph of $|z - 12 - 11i| = 4$ in the complex plane, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: z-12-11*i = z-(12+11*i)",
              "given": [
                "$|z - 12 - 11i| = 4$",
                "$z - 12 - 11i = z - (-12 - 11i)$",
                "$|z - (-12 - 11i)| = 4$",
                "The distance from $z$ to $-12 - 11i$ is $4$.",
                "The graph is the circle with centre $(-12, -11)$ and radius $4$."
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the graph of $|z - 12 - 11i| = 4$ in the complex plane, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 writes $z - 12 - 11i$ as $z - (-12 - 11i)$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $z - (-12 - 11i) = z + 12 + 11i$, not $z - 12 - 11i$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $z - 12 - 11i = z - (12 + 11i)$.",
                  "reason": "The bracket holds $12 + 11i$: changing both its signs gives $-12 - 11i$, the terms after $z$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the graph of $|z + 1 - 12i| + 6 = 11$ in the complex plane, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: z+1-12*i = z-(-1+12*i)",
              "given": [
                "$|z + 1 - 12i| + 6 = 11$",
                "$|z + 1 - 12i| = 5$",
                "$z + 1 - 12i = z - (1 - 12i)$",
                "$|z - (1 - 12i)| = 5$",
                "The distance from $z$ to $1 - 12i$ is $5$.",
                "The graph is the circle with centre $(1, -12)$ and radius $5$."
              ],
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the graph of $|z + 1 - 12i| + 6 = 11$ in the complex plane, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $z + 1 - 12i$ as $z - (1 - 12i)$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $z - (1 - 12i) = z - 1 + 12i$, not $z + 1 - 12i$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $z + 1 - 12i = z - (-1 + 12i)$.",
                  "reason": "The bracket holds $-1 + 12i$: changing both its signs gives $1 - 12i$, the terms after $z$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t187-k8",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation for the complex number $z$ at the point $P(15, 2)$ in the figure, with $z$ alone on the left.",
            "figure": {
              "file": "the-complex-plane-71.svg",
              "alt": "The complex plane with the point P at (15, 2)."
            },
            "lines": [
              {
                "step": "Write an equation for the complex number $z$ at the point $P(15, 2)$ in the figure, with $z$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The real part of $z$ is $15$.",
                "reason": "Real axis: the first coordinate of a point of the complex plane is its step along the real axis, the real part of its number."
              },
              {
                "step": "The imaginary part of $z$ is $2$.",
                "reason": "Imaginary axis: the second coordinate is its step along the imaginary axis, the imaginary part of its number."
              },
              {
                "step": "$z = 15 + 2i$",
                "reason": "Complex number $a + bi$: the real part and $i$ times the imaginary part are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for the complex number $z$ at the point $P(-3, -16)$ in the figure, with $z$ alone on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = -3-16*i",
              "figure": {
                "file": "the-complex-plane-72.svg",
                "alt": "The complex plane with the point P at (−3, −16)."
              },
              "lines": [
                {
                  "step": "Write an equation for the complex number $z$ at the point $P(-3, -16)$ in the figure, with $z$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The real part of $z$ is $-3$.",
                  "reason": "Real axis: the first coordinate of a point of the complex plane is its step along the real axis, the real part of its number."
                },
                {
                  "step": "The imaginary part of $z$ is $-16$.",
                  "reason": "Imaginary axis: the second coordinate is its step along the imaginary axis, the imaginary part of its number."
                },
                {
                  "step": "$z = -3 - 16i$",
                  "reason": "Complex number $a + bi$: the real part and $i$ times the imaginary part are added."
                }
              ]
            },
            {
              "prompt": "Write an equation for the complex number $z$ at the point $P(-16, -5)$ in the figure, with $z$ alone on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = -16-5*i",
              "figure": {
                "file": "the-complex-plane-73.svg",
                "alt": "The complex plane with the point P at (−16, −5)."
              },
              "lines": [
                {
                  "step": "Write an equation for the complex number $z$ at the point $P(-16, -5)$ in the figure, with $z$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The real part of $z$ is $-16$.",
                  "reason": "Real axis: the first coordinate of a point of the complex plane is its step along the real axis, the real part of its number."
                },
                {
                  "step": "The imaginary part of $z$ is $-5$.",
                  "reason": "Imaginary axis: the second coordinate is its step along the imaginary axis, the imaginary part of its number."
                },
                {
                  "step": "$z = -16 - 5i$",
                  "reason": "Complex number $a + bi$: the real part and $i$ times the imaginary part are added."
                }
              ]
            },
            {
              "prompt": "Write an equation for the complex number $z$ at the point $P(-9, 17)$ in the figure, with $z$ alone on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = -9+17*i",
              "figure": {
                "file": "the-complex-plane-74.svg",
                "alt": "The complex plane with the point P at (−9, 17)."
              },
              "lines": [
                {
                  "step": "Write an equation for the complex number $z$ at the point $P(-9, 17)$ in the figure, with $z$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The real part of $z$ is $-9$.",
                  "reason": "Real axis: the first coordinate of a point of the complex plane is its step along the real axis, the real part of its number."
                },
                {
                  "step": "The imaginary part of $z$ is $17$.",
                  "reason": "Imaginary axis: the second coordinate is its step along the imaginary axis, the imaginary part of its number."
                },
                {
                  "step": "$z = -9 + 17i$",
                  "reason": "Complex number $a + bi$: the real part and $i$ times the imaginary part are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $-2\\operatorname{Re}(z) - 3\\operatorname{Im}(z) = -6$ in the complex plane.",
            "lines": [
              {
                "step": "Sketch the graph of $-2\\operatorname{Re}(z) - 3\\operatorname{Im}(z) = -6$ in the complex plane.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-2x - 3y = -6$",
                "reason": "Complex plane: with $z = x + yi$, $\\operatorname{Re}(z) = x$ and $\\operatorname{Im}(z) = y$."
              },
              {
                "step": "$-2x - 3(0) = -6$",
                "reason": "Substituting a value: a point of the real axis has $y = 0$."
              },
              {
                "step": "$-2x = -6$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$x = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
              },
              {
                "step": "$-2(0) - 3y = -6$",
                "reason": "Substituting a value: a point of the imaginary axis has $x = 0$."
              },
              {
                "step": "$-3y = -6$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$y = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
              },
              {
                "step": "The line through $(3, 0)$ and $(0, 2)$ is the graph.",
                "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line.",
                "figure": {
                  "file": "the-complex-plane-80.svg",
                  "alt": "A straight line through (3, 0) and (0, 2)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $-3\\operatorname{Re}(z) + 4\\operatorname{Im}(z) = 12$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-4, 0)$",
                  "$(0, 3)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $-3\\operatorname{Re}(z) + 4\\operatorname{Im}(z) = 12$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x + 4y = 12$",
                  "reason": "Complex plane: with $z = x + yi$, $\\operatorname{Re}(z) = x$ and $\\operatorname{Im}(z) = y$."
                },
                {
                  "step": "$-3x + 4(0) = 12$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$-3x = 12$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$x = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                },
                {
                  "step": "$-3(0) + 4y = 12$",
                  "reason": "Substituting a value: a point of the imaginary axis has $x = 0$."
                },
                {
                  "step": "$4y = 12$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "The line through $(-4, 0)$ and $(0, 3)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line.",
                  "figure": {
                    "file": "the-complex-plane-81.svg",
                    "alt": "A straight line through (−4, 0) and (0, 3)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $5\\operatorname{Re}(z) - 2\\operatorname{Im}(z) = 20$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(4, 0)$",
                  "$(0, -10)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $5\\operatorname{Re}(z) - 2\\operatorname{Im}(z) = 20$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 2y = 20$",
                  "reason": "Complex plane: with $z = x + yi$, $\\operatorname{Re}(z) = x$ and $\\operatorname{Im}(z) = y$."
                },
                {
                  "step": "$5x - 2(0) = 20$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$5x = 20$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$5(0) - 2y = 20$",
                  "reason": "Substituting a value: a point of the imaginary axis has $x = 0$."
                },
                {
                  "step": "$-2y = 20$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$y = -10$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                },
                {
                  "step": "The line through $(4, 0)$ and $(0, -10)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line.",
                  "figure": {
                    "file": "the-complex-plane-82.svg",
                    "alt": "A straight line through (4, 0) and (0, −10)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $4\\operatorname{Re}(z) + 5\\operatorname{Im}(z) = 60$ in the complex plane.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(15, 0)$",
                  "$(0, 12)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $4\\operatorname{Re}(z) + 5\\operatorname{Im}(z) = 60$ in the complex plane.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 5y = 60$",
                  "reason": "Complex plane: with $z = x + yi$, $\\operatorname{Re}(z) = x$ and $\\operatorname{Im}(z) = y$."
                },
                {
                  "step": "$4x + 5(0) = 60$",
                  "reason": "Substituting a value: a point of the real axis has $y = 0$."
                },
                {
                  "step": "$4x = 60$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$x = 15$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$4(0) + 5y = 60$",
                  "reason": "Substituting a value: a point of the imaginary axis has $x = 0$."
                },
                {
                  "step": "$5y = 60$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$y = 12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "The line through $(15, 0)$ and $(0, 12)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line.",
                  "figure": {
                    "file": "the-complex-plane-83.svg",
                    "alt": "A straight line through (15, 0) and (0, 12)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write an equation in $x$ and $y$ for the circle in the figure, with centre $C(10, -11)$ and radius $3$, where $z = x + yi$ is a point of it, with the distance from $z$ to the centre written as a square root on the left.",
            "figure": {
              "file": "the-complex-plane-89.svg",
              "alt": "A circle with centre C at (10, −11) and a radius of length 3 drawn to its right."
            },
            "lines": [
              {
                "step": "Write an equation in $x$ and $y$ for the circle in the figure, with centre $C(10, -11)$ and radius $3$, where $z = x + yi$ is a point of it, with the distance from $z$ to the centre written as a square root on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre $C$ is $10 - 11i$ and the radius is $3$.",
                "reason": "Complex plane: $C$ is at $(10, -11)$, so it stands for $10 - 11i$, and the radius is marked $3$."
              },
              {
                "step": "$|z - (10 - 11i)| = 3$",
                "reason": "Circle in the complex plane: the circle with centre $w$ and radius $r$ is the graph of $|z - w| = r$."
              },
              {
                "step": "$|(x + yi) - (10 - 11i)| = 3$",
                "reason": "Substituting a value: $z$ is replaced by $x + yi$, in brackets."
              },
              {
                "step": "$|x + yi - 10 + 11i| = 3$",
                "reason": "Subtracting a bracket changes every sign in it."
              },
              {
                "step": "$|(x - 10) + (y + 11)i| = 3$",
                "reason": "Collecting like terms: the real parts go together and the imaginary parts go together."
              },
              {
                "step": "$\\sqrt{(x - 10)^2 + (y + 11)^2} = 3$",
                "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation in $x$ and $y$ for the circle in the figure, with centre $C(11, -4)$ and radius $2$, where $z = x + yi$ is a point of it, with the distance from $z$ to the centre written as a square root on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt((x-11)^2+(y+4)^2) = 2",
              "figure": {
                "file": "the-complex-plane-90.svg",
                "alt": "A circle with centre C at (11, −4) and a radius of length 2 drawn to its right."
              },
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for the circle in the figure, with centre $C(11, -4)$ and radius $2$, where $z = x + yi$ is a point of it, with the distance from $z$ to the centre written as a square root on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre $C$ is $11 - 4i$ and the radius is $2$.",
                  "reason": "Complex plane: $C$ is at $(11, -4)$, so it stands for $11 - 4i$, and the radius is marked $2$."
                },
                {
                  "step": "$|z - (11 - 4i)| = 2$",
                  "reason": "Circle in the complex plane: the circle with centre $w$ and radius $r$ is the graph of $|z - w| = r$."
                },
                {
                  "step": "$|(x + yi) - (11 - 4i)| = 2$",
                  "reason": "Substituting a value: $z$ is replaced by $x + yi$, in brackets."
                },
                {
                  "step": "$|x + yi - 11 + 4i| = 2$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$|(x - 11) + (y + 4)i| = 2$",
                  "reason": "Collecting like terms: the real parts go together and the imaginary parts go together."
                },
                {
                  "step": "$\\sqrt{(x - 11)^2 + (y + 4)^2} = 2$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for the circle in the figure, with centre $C(12, -10)$ and radius $5$, where $z = x + yi$ is a point of it, with the distance from $z$ to the centre written as a square root on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt((x-12)^2+(y+10)^2) = 5",
              "figure": {
                "file": "the-complex-plane-91.svg",
                "alt": "A circle with centre C at (12, −10) and a radius of length 5 drawn to its right."
              },
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for the circle in the figure, with centre $C(12, -10)$ and radius $5$, where $z = x + yi$ is a point of it, with the distance from $z$ to the centre written as a square root on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre $C$ is $12 - 10i$ and the radius is $5$.",
                  "reason": "Complex plane: $C$ is at $(12, -10)$, so it stands for $12 - 10i$, and the radius is marked $5$."
                },
                {
                  "step": "$|z - (12 - 10i)| = 5$",
                  "reason": "Circle in the complex plane: the circle with centre $w$ and radius $r$ is the graph of $|z - w| = r$."
                },
                {
                  "step": "$|(x + yi) - (12 - 10i)| = 5$",
                  "reason": "Substituting a value: $z$ is replaced by $x + yi$, in brackets."
                },
                {
                  "step": "$|x + yi - 12 + 10i| = 5$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$|(x - 12) + (y + 10)i| = 5$",
                  "reason": "Collecting like terms: the real parts go together and the imaginary parts go together."
                },
                {
                  "step": "$\\sqrt{(x - 12)^2 + (y + 10)^2} = 5$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for the circle in the figure, with centre $C(-13, 1)$ and radius $4$, where $z = x + yi$ is a point of it, with the distance from $z$ to the centre written as a square root on the left.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt((x+13)^2+(y-1)^2) = 4",
              "figure": {
                "file": "the-complex-plane-92.svg",
                "alt": "A circle with centre C at (−13, 1) and a radius of length 4 drawn to its right."
              },
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for the circle in the figure, with centre $C(-13, 1)$ and radius $4$, where $z = x + yi$ is a point of it, with the distance from $z$ to the centre written as a square root on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre $C$ is $-13 + i$ and the radius is $4$.",
                  "reason": "Complex plane: $C$ is at $(-13, 1)$, so it stands for $-13 + i$, and the radius is marked $4$."
                },
                {
                  "step": "$|z - (-13 + i)| = 4$",
                  "reason": "Circle in the complex plane: the circle with centre $w$ and radius $r$ is the graph of $|z - w| = r$."
                },
                {
                  "step": "$|(x + yi) - (-13 + i)| = 4$",
                  "reason": "Substituting a value: $z$ is replaced by $x + yi$, in brackets."
                },
                {
                  "step": "$|x + yi + 13 - i| = 4$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$|(x + 13) + (y - 1)i| = 4$",
                  "reason": "Collecting like terms: the real parts go together and the imaginary parts go together."
                },
                {
                  "step": "$\\sqrt{(x + 13)^2 + (y - 1)^2} = 4$",
                  "reason": "Magnitude: for real numbers $x$ and $y$, $|x + yi| = \\sqrt{x^2 + y^2}$."
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
      "id": "t187-p1",
      "method": "direct proof",
      "statement": "For real numbers $a$, $b$, $c$ and $d$, the distance between $a + bi$ and $c + di$ in the complex plane is $|(a + bi) - (c + di)|$.",
      "idea": "Both numbers are points of the plane, so the distance formula gives their distance, and the magnitude of their difference is the same square root.",
      "lines": [
        {
          "line": "The number $a + bi$ sits at $(a, b)$, and $c + di$ sits at $(c, d)$.",
          "reason": "Complex plane."
        },
        {
          "line": "The distance between $(a, b)$ and $(c, d)$ is $\\sqrt{(c - a)^2 + (d - b)^2}$.",
          "reason": "Distance formula, which the Pythagorean theorem gives."
        },
        {
          "line": "The difference $(a + bi) - (c + di)$ equals $a + bi - c - di$.",
          "reason": "Subtracting a bracket changes every sign in it."
        },
        {
          "line": "So the difference equals $(a - c) + (b - d)i$.",
          "reason": "Collecting like terms: the real parts together and the imaginary parts together."
        },
        {
          "line": "Its magnitude is $\\sqrt{(a - c)^2 + (b - d)^2}$.",
          "reason": "Magnitude, with real part $a - c$ and imaginary part $b - d$."
        },
        {
          "line": "The square $(a - c)^2$ equals $(c - a)^2$.",
          "reason": "Signs of products: $a - c$ is the opposite of $c - a$, and a number and its opposite have the same square."
        },
        {
          "line": "The square $(b - d)^2$ equals $(d - b)^2$.",
          "reason": "Signs of products, in the same way."
        },
        {
          "line": "So $|(a + bi) - (c + di)| = \\sqrt{(c - a)^2 + (d - b)^2}$.",
          "reason": "Line 5, with lines 6 and 7."
        },
        {
          "line": "Therefore the distance between $a + bi$ and $c + di$ is $|(a + bi) - (c + di)|$.",
          "reason": "Lines 2 and 8, and the transitive property."
        }
      ]
    },
    {
      "id": "t187-p2",
      "method": "direct proof",
      "statement": "For every complex number $z$, $\\operatorname{Re}(z) = \\dfrac{z + \\overline{z}}{2}$ and $\\operatorname{Im}(z) = \\dfrac{z - \\overline{z}}{2i}$.",
      "idea": "Write $z$ with its two parts: adding the conjugate cancels the imaginary parts, and taking it away cancels the real parts.",
      "lines": [
        {
          "line": "Let $z = x + yi$, with $x$ and $y$ real, so that $\\operatorname{Re}(z) = x$ and $\\operatorname{Im}(z) = y$.",
          "reason": "Complex number $a + bi$: every complex number has a real part and an imaginary part."
        },
        {
          "line": "The complex conjugate $\\overline{z}$ is $x - yi$.",
          "reason": "Complex conjugate."
        },
        {
          "line": "The sum $z + \\overline{z}$ equals $2x$.",
          "reason": "A number plus its conjugate is $2a$, with $a = x$ (t144)."
        },
        {
          "line": "So $\\dfrac{z + \\overline{z}}{2}$ equals $x$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
        },
        {
          "line": "The difference $z - \\overline{z}$ equals $(x + yi) - (x - yi)$.",
          "reason": "Lines 1 and 2."
        },
        {
          "line": "So $z - \\overline{z}$ equals $x + yi - x + yi$.",
          "reason": "Subtracting a bracket changes every sign in it."
        },
        {
          "line": "So $z - \\overline{z}$ equals $2yi$.",
          "reason": "Collecting like terms: $x - x = 0$ and $yi + yi = 2yi$."
        },
        {
          "line": "So $\\dfrac{z - \\overline{z}}{2i}$ equals $y$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $2i$."
        },
        {
          "line": "Therefore $\\operatorname{Re}(z) = \\dfrac{z + \\overline{z}}{2}$ and $\\operatorname{Im}(z) = \\dfrac{z - \\overline{z}}{2i}$.",
          "reason": "Lines 1, 4 and 8."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t187-s1",
      "method": "proof by cases",
      "statement": "Prove that for real numbers $x$ and $y$, $|x| \\le |x + yi|$. Facts it may use: magnitude, Trivial Inequality, adding the same number, absolute value, positive square root, powers and roots of positive numbers keep the order, root of a square, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ and $y$ be real numbers.",
            "reason": "The statement is about every pair of real numbers, so one pair is named."
          },
          {
            "line": "The magnitude $|x + yi|$ equals $\\sqrt{x^2 + y^2}$.",
            "reason": "Magnitude."
          },
          {
            "line": "The square $y^2$ is at least $0$.",
            "reason": "Trivial Inequality."
          },
          {
            "line": "So $x^2 \\le x^2 + y^2$.",
            "reason": "Adding the same number, from arithmetic: $x^2$ is added to both sides of line 3."
          },
          {
            "line": "Suppose first that $x = 0$.",
            "reason": "The first of two cases: $x$ is $0$ or it is not."
          },
          {
            "line": "Then $|x| = 0$.",
            "reason": "Absolute value, from arithmetic."
          },
          {
            "line": "The root $\\sqrt{x^2 + y^2}$ is at least $0$.",
            "reason": "Positive square root: a square root is never negative."
          },
          {
            "line": "So $|x| \\le |x + yi|$ in this case.",
            "reason": "Lines 2, 6 and 7."
          },
          {
            "line": "Suppose next that $x$ is not $0$.",
            "reason": "The second case."
          },
          {
            "line": "Then $x^2$ is positive.",
            "reason": "Trivial Inequality: $x^2$ is $0$ only at $x = 0$."
          },
          {
            "line": "So $x^2 + y^2$ is positive.",
            "reason": "Lines 4 and 10, and the transitive property."
          },
          {
            "line": "So $\\sqrt{x^2} \\le \\sqrt{x^2 + y^2}$.",
            "reason": "Powers and roots of positive numbers keep the order, used on line 4: both sides are positive by lines 10 and 11."
          },
          {
            "line": "The root $\\sqrt{x^2}$ equals $|x|$.",
            "reason": "Root of a square."
          },
          {
            "line": "So $|x| \\le |x + yi|$ in this case.",
            "reason": "Lines 2, 12 and 13."
          },
          {
            "line": "Therefore $|x| \\le |x + yi|$ for all real numbers $x$ and $y$.",
            "reason": "Lines 8 and 14: the two cases cover every real number $x$."
          }
        ]
      }
    },
    {
      "id": "t187-s2",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$, $b$, $c$ and $d$, the midpoint of the segment from $a + bi$ to $c + di$ in the complex plane is the point of the number $\\dfrac{(a + bi) + (c + di)}{2}$. Facts it may use: complex plane, midpoint formula, collecting like terms, the distributive law.",
      "check": {
        "proof": [
          {
            "line": "The numbers $a + bi$ and $c + di$ sit at $(a, b)$ and $(c, d)$.",
            "reason": "Complex plane."
          },
          {
            "line": "The midpoint of the segment between them is $\\left(\\dfrac{a + c}{2}, \\dfrac{b + d}{2}\\right)$.",
            "reason": "Midpoint formula."
          },
          {
            "line": "The sum $(a + bi) + (c + di)$ equals $(a + c) + (b + d)i$.",
            "reason": "Collecting like terms: the real parts together and the imaginary parts together."
          },
          {
            "line": "So $\\dfrac{(a + bi) + (c + di)}{2}$ equals $\\dfrac{a + c}{2} + \\dfrac{b + d}{2}i$.",
            "reason": "The distributive law, from arithmetic: dividing a sum by $2$ divides each term by $2$."
          },
          {
            "line": "This number sits at $\\left(\\dfrac{a + c}{2}, \\dfrac{b + d}{2}\\right)$.",
            "reason": "Complex plane: its real part and its imaginary part are the coordinates."
          },
          {
            "line": "Therefore the midpoint is the point of $\\dfrac{(a + bi) + (c + di)}{2}$.",
            "reason": "Lines 2 and 5."
          }
        ]
      }
    },
    {
      "id": "t187-s3",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$, $b$, $c$ and $d$ with $a$ other than $c$ and $b$ other than $d$, the graph of $|z - (a + bi)| = |z - (c + di)|$ in the complex plane is the line through the midpoint of the segment from $(a, b)$ to $(c, d)$ that is perpendicular to the segment. Facts it may use: complex plane, subtracting a bracket changes every sign in it, collecting like terms, magnitude, raising both sides to a power, square of a binomial, adding the same number to both sides, dividing both sides by a nonzero number, taking out a common factor, the graph of $ax + by = c$ is a line, substituting a value, difference of squares, midpoint formula, slope, the line $y=mx+b$ has slope $m$, slopes with product $-1$ mean perpendicular.",
      "check": {
        "proof": [
          {
            "line": "Let $z = x + yi$, with $x$ and $y$ real, the number at the point $(x, y)$.",
            "reason": "Complex plane."
          },
          {
            "line": "The number $z - (a + bi)$ equals $x + yi - a - bi$.",
            "reason": "Subtracting a bracket changes every sign in it: $z$ is $x + yi$ by line 1."
          },
          {
            "line": "So it equals $(x - a) + (y - b)i$.",
            "reason": "Collecting like terms: the real parts together and the imaginary parts together."
          },
          {
            "line": "The number $z - (c + di)$ equals $x + yi - c - di$.",
            "reason": "Subtracting a bracket changes every sign in it: $z$ is $x + yi$ by line 1."
          },
          {
            "line": "So it equals $(x - c) + (y - d)i$.",
            "reason": "Collecting like terms: the real parts together and the imaginary parts together."
          },
          {
            "line": "So the equation reads $\\sqrt{(x - a)^2 + (y - b)^2} = \\sqrt{(x - c)^2 + (y - d)^2}$.",
            "reason": "Magnitude, on each side."
          },
          {
            "line": "It holds exactly when $(x - a)^2 + (y - b)^2 = (x - c)^2 + (y - d)^2$.",
            "reason": "Raising both sides to a power: both roots are at least $0$, so squaring keeps every point and adds none."
          },
          {
            "line": "Multiplying out, $x^2 - 2ax + a^2 + y^2 - 2by + b^2 = x^2 - 2cx + c^2 + y^2 - 2dy + d^2$.",
            "reason": "Square of a binomial."
          },
          {
            "line": "So $2cx - 2ax + 2dy - 2by = c^2 + d^2 - a^2 - b^2$.",
            "reason": "Adding the same number to both sides: $2cx + 2dy - x^2 - y^2 - a^2 - b^2$ is added to both sides."
          },
          {
            "line": "So $2(c - a)x + 2(d - b)y = c^2 + d^2 - a^2 - b^2$.",
            "reason": "Taking out a common factor."
          },
          {
            "line": "Since $c - a$ and $d - b$ are not $0$, the graph of line 10 is a line.",
            "reason": "The graph of $ax + by = c$ is a line."
          },
          {
            "line": "The midpoint of the segment is $\\left(\\dfrac{a + c}{2}, \\dfrac{b + d}{2}\\right)$.",
            "reason": "Midpoint formula."
          },
          {
            "line": "At that point the left side of line 10 is $(c - a)(c + a) + (d - b)(d + b)$.",
            "reason": "Substituting a value."
          },
          {
            "line": "This equals $c^2 - a^2 + d^2 - b^2$, the right side of line 10, so the midpoint lies on the line.",
            "reason": "Difference of squares."
          },
          {
            "line": "So $2(d - b)y = -2(c - a)x + c^2 + d^2 - a^2 - b^2$.",
            "reason": "Adding the same number to both sides: $-2(c - a)x$ is added to both sides of line 10."
          },
          {
            "line": "So $y = -\\dfrac{c - a}{d - b}x + \\dfrac{c^2 + d^2 - a^2 - b^2}{2(d - b)}$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $2(d - b)$, which is not $0$."
          },
          {
            "line": "So the line has slope $-\\dfrac{c - a}{d - b}$.",
            "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$."
          },
          {
            "line": "The segment has slope $\\dfrac{d - b}{c - a}$.",
            "reason": "Slope."
          },
          {
            "line": "The product of the two slopes is $-1$, so the line is perpendicular to the segment.",
            "reason": "Slopes with product $-1$ mean perpendicular."
          },
          {
            "line": "Therefore the graph is the line through the midpoint of the segment that is perpendicular to it.",
            "reason": "Lines 11, 14 and 19."
          }
        ]
      }
    },
    {
      "id": "t187-s4",
      "method": "direct proof",
      "statement": "Prove that for complex numbers $w$ and $z$, $w\\overline{z} + \\overline{w}z$ is a real number. Facts it may use: complex conjugate, conjugate of a product, real and imaginary part from the conjugate, real number.",
      "check": {
        "proof": [
          {
            "line": "The complex conjugate of $w\\overline{z}$ is $\\overline{w} \\cdot \\overline{\\overline{z}}$.",
            "reason": "Conjugate of a product."
          },
          {
            "line": "Writing $z = c + di$ with $c$ and $d$ real, $\\overline{z} = c - di$.",
            "reason": "Complex conjugate."
          },
          {
            "line": "The complex conjugate of $c - di$ is $c + di$, so $\\overline{\\overline{z}} = z$.",
            "reason": "Complex conjugate."
          },
          {
            "line": "So the complex conjugate of $w\\overline{z}$ is $\\overline{w}z$.",
            "reason": "Lines 1 and 3."
          },
          {
            "line": "So $w\\overline{z} + \\overline{w}z$ equals $w\\overline{z} + \\overline{w\\overline{z}}$.",
            "reason": "Line 4."
          },
          {
            "line": "This equals $2\\operatorname{Re}(w\\overline{z})$.",
            "reason": "Real and imaginary part from the conjugate: a number plus its complex conjugate is twice its real part."
          },
          {
            "line": "Therefore $w\\overline{z} + \\overline{w}z$ is a real number.",
            "reason": "A real part is a real number, and twice a real number is a real number."
          }
        ]
      }
    },
    {
      "id": "t187-s5",
      "method": "direct proof",
      "statement": "Prove that for every complex number $z$ with $|z| = 1$, $|z - 1|^2 + |z + 1|^2 = 4$. Facts it may use: complex number, magnitude, raising both sides to a power, collecting like terms, positive square root, square of a binomial, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Let $z = x + yi$, with $x$ and $y$ real.",
            "reason": "Complex number $a + bi$."
          },
          {
            "line": "The condition $|z| = 1$ reads $\\sqrt{x^2 + y^2} = 1$.",
            "reason": "Magnitude."
          },
          {
            "line": "So $x^2 + y^2 = 1$.",
            "reason": "Raising both sides to a power: both sides are squared."
          },
          {
            "line": "The number $z - 1$ is $(x - 1) + yi$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "So $|z - 1| = \\sqrt{(x - 1)^2 + y^2}$.",
            "reason": "Magnitude."
          },
          {
            "line": "So $|z - 1|^2 = (x - 1)^2 + y^2$.",
            "reason": "Positive square root: the square of a square root is the number under it."
          },
          {
            "line": "The number $z + 1$ is $(x + 1) + yi$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "So $|z + 1| = \\sqrt{(x + 1)^2 + y^2}$.",
            "reason": "Magnitude."
          },
          {
            "line": "So $|z + 1|^2 = (x + 1)^2 + y^2$.",
            "reason": "Positive square root: the square of a square root is the number under it."
          },
          {
            "line": "So $|z - 1|^2 + |z + 1|^2 = x^2 - 2x + 1 + y^2 + x^2 + 2x + 1 + y^2$.",
            "reason": "Square of a binomial, used on lines 6 and 9."
          },
          {
            "line": "This equals $2(x^2 + y^2) + 2$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "Therefore $|z - 1|^2 + |z + 1|^2 = 2 \\cdot 1 + 2 = 4$.",
            "reason": "Substituting a value: line 3 gives $x^2 + y^2 = 1$."
          }
        ]
      }
    },
    {
      "id": "t187-s6",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$, $b$, $x$ and $y$ and a positive number $r$, $|(x + yi) - (a + bi)| = r$ exactly when $(x - a)^2 + (y - b)^2 = r^2$. Facts it may use: magnitude, subtracting a bracket changes every sign in it, collecting like terms, raising both sides to a power, positive square root, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "The number $(x + yi) - (a + bi)$ equals $x + yi - a - bi$.",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "So it equals $(x - a) + (y - b)i$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "So the first equation reads $\\sqrt{(x - a)^2 + (y - b)^2} = r$.",
            "reason": "Magnitude."
          },
          {
            "line": "If it holds, then $(x - a)^2 + (y - b)^2 = r^2$.",
            "reason": "Raising both sides to a power: both sides are squared."
          },
          {
            "line": "Conversely, if $(x - a)^2 + (y - b)^2 = r^2$, then $\\sqrt{(x - a)^2 + (y - b)^2} = \\sqrt{r^2}$.",
            "reason": "Substituting a value: equal numbers have equal square roots."
          },
          {
            "line": "The root $\\sqrt{r^2}$ equals $r$.",
            "reason": "Positive square root: $r$ is positive and its square is $r^2$."
          },
          {
            "line": "So $\\sqrt{(x - a)^2 + (y - b)^2} = r$, the equation of line 3.",
            "reason": "Lines 5 and 6."
          },
          {
            "line": "Therefore $|(x + yi) - (a + bi)| = r$ exactly when $(x - a)^2 + (y - b)^2 = r^2$.",
            "reason": "Lines 3, 4 and 7."
          }
        ]
      }
    }
  ]
}
