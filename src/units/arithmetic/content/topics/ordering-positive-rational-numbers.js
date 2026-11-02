// Ordering positive rational numbers: greater-than and less-than for positive rational numbers, and Landau's theorems on their order.
export default {
  "number": 55,
  "manyParts": false,
  "kinds": [
    {
      "id": "t55-k1",
      "forms": []
    }
  ],
  "ideas": [
    {
      "name": "Order of positive rational numbers",
      "concrete": "The positive rational number containing $\\frac{4}{3}$ is greater than the positive rational number containing $\\frac{9}{7}$, since $\\frac{4}{3} > \\frac{9}{7}$.",
      "general": "For positive rational numbers $X$ and $Y$, take fraction pairs $\\frac{x_1}{x_2}$ of $X$ and $\\frac{y_1}{y_2}$ of $Y$. Then $X$ is **greater than** $Y$, written $X>Y$, when $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$. Also $X$ is **less than** $Y$, written $X<Y$, when $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$."
    },
    {
      "name": "At-least and at-most for positive rational numbers",
      "concrete": "Since $\\frac{4}{3} > \\frac{9}{7}$, the positive rational number containing $\\frac{4}{3}$ is at least the positive rational number containing $\\frac{9}{7}$.",
      "general": "For positive rational numbers $X$ and $Y$, $X$ is **at least** $Y$, written $X\\geq Y$, when $X>Y$ or $X=Y$. Also $X$ is **at most** $Y$, written $X\\leq Y$, when $X<Y$ or $X=Y$."
    }
  ],
  "proofs": [
    {
      "id": "landau-81",
      "method": "direct proof",
      "statement": "For every $X$ and $Y$, exactly one of $X=Y$, $X>Y$, $X<Y$ holds.",
      "idea": "Exactly one order relation holds between two positive rational numbers, because exactly one holds between their fraction pairs.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "Exactly one of $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$ holds.",
          "reason": "trichotomy of fraction pair order"
        },
        {
          "line": "This equivalence, $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, holds exactly when $X$ and $Y$ are the same set of fraction pairs, so it means $X=Y$.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        },
        {
          "line": "This order, $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$, means $X>Y$, and $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$ means $X<Y$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "Therefore exactly one of $X=Y$, $X>Y$, $X<Y$ holds.",
          "reason": "combining the previous lines"
        }
      ]
    },
    {
      "id": "landau-82",
      "method": "direct proof",
      "statement": "If $X>Y$, then $Y<X$.",
      "idea": "If one positive rational number is greater than another, the other is less than it.",
      "lines": [
        {
          "line": "The hypothesis $X>Y$ means that $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$, for a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "This gives $\\frac{y_1}{y_2}<\\frac{x_1}{x_2}$.",
          "reason": "greater-than means less-than reversed, for fraction pairs"
        },
        {
          "line": "Therefore $Y<X$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-83",
      "method": "direct proof",
      "statement": "If $X<Y$, then $Y>X$.",
      "idea": "If one positive rational number is less than another, the other is greater than it.",
      "lines": [
        {
          "line": "The hypothesis $X<Y$ means that $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$, for a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "This gives $\\frac{y_1}{y_2}>\\frac{x_1}{x_2}$.",
          "reason": "less-than means greater-than reversed, for fraction pairs"
        },
        {
          "line": "Therefore $Y>X$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-84",
      "method": "direct proof",
      "statement": "If $X\\geq Y$, then $Y\\leq X$.",
      "idea": "If one positive rational number is at least a second, the second is at most the first. Unfold both sides into fraction pair order.",
      "lines": [
        {
          "line": "The hypothesis $X\\geq Y$ means that $X>Y$ or $X=Y$.",
          "reason": "the definition of $X\\geq Y$"
        },
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$. This means $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$ or $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, that is, $\\frac{x_1}{x_2}\\gtrsim\\frac{y_1}{y_2}$.",
          "reason": "the definitions of positive-rational-number order and equality, and of $\\gtrsim$ for fraction pairs"
        },
        {
          "line": "This gives $\\frac{y_1}{y_2}\\lesssim\\frac{x_1}{x_2}$.",
          "reason": "greater-than-or-equivalent means less-than-or-equivalent reversed, for fraction pairs"
        },
        {
          "line": "This means $\\frac{y_1}{y_2}<\\frac{x_1}{x_2}$ or $\\frac{y_1}{y_2}\\sim\\frac{x_1}{x_2}$, that is, $Y<X$ or $Y=X$.",
          "reason": "the definition of $\\lesssim$ for fraction pairs, and the definitions of positive-rational-number order and equality"
        },
        {
          "line": "Therefore $Y\\leq X$.",
          "reason": "the definition of $Y\\leq X$"
        }
      ]
    },
    {
      "id": "landau-85",
      "method": "direct proof",
      "statement": "If $X\\leq Y$, then $Y\\geq X$.",
      "idea": "If one positive rational number is at most a second, the second is at least the first. Unfold both sides into fraction pair order.",
      "lines": [
        {
          "line": "The hypothesis $X\\leq Y$ means that $X<Y$ or $X=Y$.",
          "reason": "the definition of $X\\leq Y$"
        },
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$. This means $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$ or $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, that is, $\\frac{x_1}{x_2}\\lesssim\\frac{y_1}{y_2}$.",
          "reason": "the definitions of positive-rational-number order and equality, and of $\\lesssim$ for fraction pairs"
        },
        {
          "line": "This gives $\\frac{y_1}{y_2}\\gtrsim\\frac{x_1}{x_2}$.",
          "reason": "less-than-or-equivalent means greater-than-or-equivalent reversed, for fraction pairs"
        },
        {
          "line": "This means $\\frac{y_1}{y_2}>\\frac{x_1}{x_2}$ or $\\frac{y_1}{y_2}\\sim\\frac{x_1}{x_2}$, that is, $Y>X$ or $Y=X$.",
          "reason": "the definition of $\\gtrsim$ for fraction pairs, and the definitions of positive-rational-number order and equality"
        },
        {
          "line": "Therefore $Y\\geq X$.",
          "reason": "the definition of $Y\\geq X$"
        }
      ]
    },
    {
      "id": "landau-86",
      "method": "direct proof",
      "statement": "If $X<Y$ and $Y<Z$, then $X<Z$.",
      "idea": "Less-than between positive rational numbers chains, since fraction pair order chains.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$, a fraction pair $\\frac{y_1}{y_2}$ of $Y$, and a fraction pair $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypotheses $X<Y$ and $Y<Z$ mean that $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2}<\\frac{z_1}{z_2}$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}<\\frac{z_1}{z_2}$.",
          "reason": "transitivity of strict fraction pair order"
        },
        {
          "line": "Therefore $X<Z$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-87",
      "method": "direct proof",
      "statement": "If $X\\leq Y$ and $Y<Z$, or $X<Y$ and $Y\\leq Z$, then $X<Z$.",
      "idea": "A chain of at-most and strictly-less-than gives a strict order, by citing the same fact for fraction pairs.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$, a fraction pair $\\frac{y_1}{y_2}$ of $Y$, and a fraction pair $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypothesis translates to $\\frac{x_1}{x_2}\\lesssim\\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2}<\\frac{z_1}{z_2}$, or to $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2}\\lesssim\\frac{z_1}{z_2}$.",
          "reason": "the definitions of $\\leq$ and $<$ for positive rational numbers and for fraction pairs"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}<\\frac{z_1}{z_2}$.",
          "reason": "transitivity of fraction pair order with one non-strict hypothesis"
        },
        {
          "line": "Therefore $X<Z$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-88",
      "method": "direct proof",
      "statement": "If $X\\leq Y$ and $Y\\leq Z$, then $X\\leq Z$.",
      "idea": "A chain of two at-most relations gives an at-most relation.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$, a fraction pair $\\frac{y_1}{y_2}$ of $Y$, and a fraction pair $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypotheses $X\\leq Y$ and $Y\\leq Z$ mean that $\\frac{x_1}{x_2}\\lesssim\\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2}\\lesssim\\frac{z_1}{z_2}$.",
          "reason": "the definition of $\\leq$ for positive rational numbers and for fraction pairs"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}\\lesssim\\frac{z_1}{z_2}$.",
          "reason": "transitivity of non-strict fraction pair order"
        },
        {
          "line": "Therefore $X\\leq Z$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-89",
      "method": "proof of existence by construction",
      "statement": "Given $X$, there exists a $Z$ such that $Z>X$.",
      "idea": "A fraction pair greater than a pair of the given number gives a positive rational number greater than it.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "There exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{z_1}{z_2}>\\frac{x_1}{x_2}$.",
          "reason": "existence of a fraction pair greater than a given one"
        },
        {
          "line": "Let $Z$ be the positive rational number containing $\\frac{z_1}{z_2}$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "Therefore $Z>X$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-90",
      "method": "proof of existence by construction",
      "statement": "Given $X$, there exists a $Z$ such that $Z<X$.",
      "idea": "A fraction pair less than a pair of the given number gives a positive rational number less than it.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "There exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{z_1}{z_2}<\\frac{x_1}{x_2}$.",
          "reason": "existence of a fraction pair less than a given one"
        },
        {
          "line": "Let $Z$ be the positive rational number containing $\\frac{z_1}{z_2}$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "Therefore $Z<X$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-91",
      "method": "proof of existence by construction",
      "statement": "If $X<Y$, then there exists a $Z$ such that $X<Z<Y$.",
      "idea": "Take a fraction pair strictly between a fraction pair of $X$ and one of $Y$. The positive rational number containing it lies strictly between $X$ and $Y$.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypothesis $X<Y$ means that $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "There exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{x_1}{x_2}<\\frac{z_1}{z_2}<\\frac{y_1}{y_2}$.",
          "reason": "density of the fraction pairs"
        },
        {
          "line": "Let $Z$ be the positive rational number containing $\\frac{z_1}{z_2}$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "Therefore $X<Z<Y$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t55-s1",
      "method": "direct proof",
      "statement": "If $X>Y$ and $Y=Z$, then $X>Z$.",
      "check": {
        "proof": [
          {
            "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$.",
            "reason": "the definition of a positive rational number as a set of fraction pairs"
          },
          {
            "line": "The hypothesis $X>Y$ means that $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$.",
            "reason": "the definition of positive-rational-number order"
          },
          {
            "line": "Since $Y=Z$, $\\frac{y_1}{y_2}$ is a fraction pair of $Z$.",
            "reason": "the definition of positive-rational-number equality"
          },
          {
            "line": "So $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$, with $\\frac{x_1}{x_2}$ a fraction pair of $X$ and $\\frac{y_1}{y_2}$ a fraction pair of $Z$.",
            "reason": "combining the previous lines"
          },
          {
            "line": "Therefore $X>Z$.",
            "reason": "the definition of positive-rational-number order"
          }
        ]
      }
    },
    {
      "id": "t55-s2",
      "method": "direct proof",
      "statement": "Every positive rational number $X$ satisfies $X\\geq X$.",
      "check": {
        "proof": [
          {
            "line": "Now $X=X$.",
            "reason": "reflexivity of positive-rational-number equality"
          },
          {
            "line": "So $X\\geq X$.",
            "reason": "the definition of $X\\geq Y$, since the second alternative holds"
          }
        ]
      }
    },
    {
      "id": "t55-s3",
      "method": "proof of existence by construction",
      "statement": "If $X<Y$, then there exist positive rational numbers $Z_1$ and $Z_2$ such that $X<Z_1<Z_2<Y$.",
      "check": {
        "proof": [
          {
            "line": "Since $X<Y$, there exists a $Z_1$ such that $X<Z_1<Y$.",
            "reason": "density of the positive rational numbers"
          },
          {
            "line": "Since $Z_1<Y$, there exists a $Z_2$ such that $Z_1<Z_2<Y$.",
            "reason": "density of the positive rational numbers"
          },
          {
            "line": "So $X<Z_1$ and $Z_1<Z_2$.",
            "reason": "combining the previous lines"
          },
          {
            "line": "So $X<Z_2$.",
            "reason": "by the transitivity of positive-rational-number order"
          },
          {
            "line": "Therefore $X<Z_1<Z_2<Y$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    }
  ]
}
