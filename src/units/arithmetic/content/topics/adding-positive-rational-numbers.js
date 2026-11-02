// Adding Positive Rational Numbers: the sum and difference of positive rational numbers, and Landau's theorems on addition.
export default {
  "number": 56,
  "manyParts": false,
  "kinds": [
    {
      "id": "t56-k1",
      "forms": []
    }
  ],
  "ideas": [
    {
      "name": "Sum of positive rational numbers",
      "concrete": "The sum of the positive rational numbers containing $\\frac{2}{3}$ and $\\frac{1}{4}$ is the positive rational number containing $\\frac{2}{3}+\\frac{1}{4}$.",
      "general": "Take a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$. The **sum** $X+Y$ of the positive rational numbers $X$ and $Y$ is the positive rational number containing $\\frac{x_1}{x_2}+\\frac{y_1}{y_2}$."
    },
    {
      "name": "Difference of positive rational numbers",
      "concrete": "The positive rational number containing $\\frac{4}{3}$ is greater than the one containing $\\frac{1}{2}$. Their difference is the positive rational number containing $\\frac{5}{6}$, because $\\frac{1}{2}+\\frac{5}{6}$ is equivalent to $\\frac{4}{3}$.",
      "general": "For positive rational numbers $X>Y$, the positive rational number $U$ solving $Y+U=X$ is their **difference**, $X-Y$, the unique such solution."
    }
  ],
  "proofs": [
    {
      "id": "landau-92",
      "method": "direct proof",
      "statement": "For every $X$ and $Y$, $X+Y=Y+X$.",
      "idea": "A sum of two positive rational numbers does not depend on their order.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $X+Y$ contains $\\frac{x_1}{x_2}+\\frac{y_1}{y_2}$, and $Y+X$ contains $\\frac{y_1}{y_2}+\\frac{x_1}{x_2}$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "These fraction pairs are equivalent: $\\frac{x_1}{x_2}+\\frac{y_1}{y_2}\\sim\\frac{y_1}{y_2}+\\frac{x_1}{x_2}$.",
          "reason": "commutative law of fraction pair addition"
        },
        {
          "line": "Therefore $X+Y$ and $Y+X$ are the same set of fraction pairs, so $X+Y=Y+X$.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        }
      ]
    },
    {
      "id": "landau-93",
      "method": "direct proof",
      "statement": "For every $X$, $Y$, and $Z$, $(X+Y)+Z=X+(Y+Z)$.",
      "idea": "A sum of three positive rational numbers does not depend on which two you add first.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$, a fraction pair $\\frac{y_1}{y_2}$ of $Y$, and a fraction pair $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $(X+Y)+Z$ contains $\\left(\\frac{x_1}{x_2}+\\frac{y_1}{y_2}\\right)+\\frac{z_1}{z_2}$, and $X+(Y+Z)$ contains $\\frac{x_1}{x_2}+\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "These fraction pairs are equivalent: $\\left(\\frac{x_1}{x_2}+\\frac{y_1}{y_2}\\right)+\\frac{z_1}{z_2}\\sim\\frac{x_1}{x_2}+\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)$.",
          "reason": "associative law of fraction pair addition"
        },
        {
          "line": "Therefore $(X+Y)+Z$ and $X+(Y+Z)$ are the same set of fraction pairs, so $(X+Y)+Z=X+(Y+Z)$.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        }
      ]
    },
    {
      "id": "landau-94",
      "method": "direct proof",
      "statement": "For every $X$ and $Y$, $X+Y>X$.",
      "idea": "A sum of two positive rational numbers exceeds the first addend.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $X+Y$ contains $\\frac{x_1}{x_2}+\\frac{y_1}{y_2}$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}+\\frac{y_1}{y_2}>\\frac{x_1}{x_2}$.",
          "reason": "the sum of two fraction pairs exceeds the first addend"
        },
        {
          "line": "Therefore $X+Y>X$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-95",
      "method": "direct proof",
      "statement": "If $X>Y$, then $X+Z>Y+Z$.",
      "idea": "Adding the same positive rational number to both sides of an inequality keeps the order.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$, a fraction pair $\\frac{y_1}{y_2}$ of $Y$, and a fraction pair $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypothesis $X>Y$ means that $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}>\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.",
          "reason": "fraction pair addition preserves strict order"
        },
        {
          "line": "The number $X+Z$ contains $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}$, and $Y+Z$ contains $\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "Therefore $X+Z>Y+Z$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-96",
      "method": "direct proof",
      "statement": "If $X>Y$, or $X=Y$, or $X<Y$, then $X+Z>Y+Z$, or $X+Z=Y+Z$, or $X+Z<Y+Z$, respectively.",
      "idea": "Adding the same positive rational number to both sides keeps whichever order relation holds, as it does for fraction pairs.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$, a fraction pair $\\frac{y_1}{y_2}$ of $Y$, and a fraction pair $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypothesis means $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$, respectively.",
          "reason": "the definitions of positive-rational-number order and equality"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}>\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}\\sim\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}<\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, respectively.",
          "reason": "fraction pair addition preserves the order relation"
        },
        {
          "line": "The number $X+Z$ contains $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}$, and $Y+Z$ contains $\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "Therefore $X+Z>Y+Z$, or $X+Z=Y+Z$, or $X+Z<Y+Z$, respectively.",
          "reason": "the definitions of positive-rational-number order and equality"
        }
      ]
    },
    {
      "id": "landau-97",
      "method": "direct proof",
      "statement": "If $X+Z>Y+Z$, or $X+Z=Y+Z$, or $X+Z<Y+Z$, then $X>Y$, or $X=Y$, or $X<Y$, respectively.",
      "idea": "Whichever order relation holds after adding the same positive rational number to both sides also holds before adding it.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$, a fraction pair $\\frac{y_1}{y_2}$ of $Y$, and a fraction pair $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $X+Z$ contains $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}$, and $Y+Z$ contains $\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "The hypothesis means $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}>\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}\\sim\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}<\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, respectively.",
          "reason": "the definitions of positive-rational-number order and equality"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$, respectively.",
          "reason": "cancelling the same fraction pair from both sides of an addition keeps the order relation"
        },
        {
          "line": "Therefore $X>Y$, or $X=Y$, or $X<Y$, respectively.",
          "reason": "the definitions of positive-rational-number order and equality"
        }
      ]
    },
    {
      "id": "landau-98",
      "method": "direct proof",
      "statement": "If $X>Y$ and $Z>U$, then $X+Z>Y+U$.",
      "idea": "The sum of two greater positive rational numbers is greater than the sum of the two lesser ones.",
      "lines": [
        {
          "line": "Fix a fraction pair of each number: $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, $\\frac{z_1}{z_2}$ of $Z$, and $\\frac{u_1}{u_2}$ of $U$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypotheses $X>Y$ and $Z>U$ mean that $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2}>\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}>\\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.",
          "reason": "addition of two strict fraction pair inequalities"
        },
        {
          "line": "The number $X+Z$ contains $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}$, and $Y+U$ contains $\\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "Therefore $X+Z>Y+U$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-99",
      "method": "direct proof",
      "statement": "If $X\\geq Y$ and $Z>U$, or $X>Y$ and $Z\\geq U$, then $X+Z>Y+U$.",
      "idea": "An at-least relation and a strict one add to a strict inequality.",
      "lines": [
        {
          "line": "Fix a fraction pair of each number: $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, $\\frac{z_1}{z_2}$ of $Z$, and $\\frac{u_1}{u_2}$ of $U$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypothesis translates to $\\frac{x_1}{x_2}\\gtrsim\\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2}>\\frac{u_1}{u_2}$, or to $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2}\\gtrsim\\frac{u_1}{u_2}$.",
          "reason": "the definitions of $\\geq$ and $>$ for positive rational numbers and for fraction pairs"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}>\\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.",
          "reason": "addition of a strict and a non-strict fraction pair inequality"
        },
        {
          "line": "The number $X+Z$ contains $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}$, and $Y+U$ contains $\\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "Therefore $X+Z>Y+U$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-100",
      "method": "direct proof",
      "statement": "If $X\\geq Y$ and $Z\\geq U$, then $X+Z\\geq Y+U$.",
      "idea": "Two at-least relations add to an at-least relation.",
      "lines": [
        {
          "line": "Fix a fraction pair of each number: $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, $\\frac{z_1}{z_2}$ of $Z$, and $\\frac{u_1}{u_2}$ of $U$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypotheses $X\\geq Y$ and $Z\\geq U$ mean that $\\frac{x_1}{x_2}\\gtrsim\\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2}\\gtrsim\\frac{u_1}{u_2}$.",
          "reason": "the definition of $\\geq$ for positive rational numbers and for fraction pairs"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}\\gtrsim\\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.",
          "reason": "addition of two non-strict fraction pair inequalities"
        },
        {
          "line": "The number $X+Z$ contains $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}$, and $Y+U$ contains $\\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "Therefore $X+Z\\geq Y+U$.",
          "reason": "the definition of $\\geq$ for positive rational numbers"
        }
      ]
    },
    {
      "id": "landau-101",
      "method": "proof of existence by construction",
      "statement": "If $X>Y$, then $Y+U=X$ has exactly one solution $U$.",
      "idea": "The gap by which one positive rational number exceeds another is itself a positive rational number, and it is unique.",
      "lines": [
        {
          "line": "Fix a fraction pair $\\frac{x_1}{x_2}$ of $X$ and a fraction pair $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypothesis $X>Y$ means that $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "There exists a fraction pair $\\frac{u_1}{u_2}$ such that $\\frac{y_1}{y_2}+\\frac{u_1}{u_2}\\sim\\frac{x_1}{x_2}$.",
          "reason": "existence and uniqueness of the fraction pair difference"
        },
        {
          "line": "Let $U$ be the positive rational number containing $\\frac{u_1}{u_2}$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $Y+U$ contains $\\frac{y_1}{y_2}+\\frac{u_1}{u_2}$, which is a fraction pair of $X$.",
          "reason": "the definition of positive-rational-number addition"
        },
        {
          "line": "Therefore $Y+U=X$, so a solution exists.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        },
        {
          "line": "Suppose that $U'$ is a positive rational number with $Y+U'=X$, and fix a fraction pair $\\frac{u_1'}{u_2'}$ of $U'$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "This gives $\\frac{y_1}{y_2}+\\frac{u_1'}{u_2'}\\sim\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number addition and equality"
        },
        {
          "line": "This means $\\frac{u_1'}{u_2'}\\sim\\frac{u_1}{u_2}$.",
          "reason": "existence and uniqueness of the fraction pair difference"
        },
        {
          "line": "Therefore $U'=U$, so the solution is unique.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t56-s1",
      "method": "direct proof",
      "statement": "For every $X$ and $Y$, $X+Y>Y$.",
      "check": {
        "proof": [
          {
            "line": "Now $X+Y=Y+X$.",
            "reason": "by the commutative law of positive-rational-number addition"
          },
          {
            "line": "Now $Y+X>Y$.",
            "reason": "by the fact that a sum of two positive rational numbers exceeds the first addend"
          },
          {
            "line": "So $X+Y>Y$.",
            "reason": "substituting the equality into the inequality"
          }
        ]
      }
    },
    {
      "id": "t56-s2",
      "method": "direct proof",
      "statement": "If $X\\geq Y$, then $X+Z\\geq Y+Z$.",
      "check": {
        "proof": [
          {
            "line": "The hypothesis means $X>Y$ or $X=Y$, respectively.",
            "reason": "the definition of $X\\geq Y$"
          },
          {
            "line": "This gives $X+Z>Y+Z$ or $X+Z=Y+Z$, respectively.",
            "reason": "positive-rational-number addition preserves the order relation"
          },
          {
            "line": "So $X+Z\\geq Y+Z$.",
            "reason": "the definition of $X+Z\\geq Y+Z$"
          }
        ]
      }
    },
    {
      "id": "t56-s3",
      "method": "proof of existence by construction",
      "statement": "For every $X$ and $Y$, there exists a $Z$ such that $Z>X+Y$.",
      "check": {
        "proof": [
          {
            "line": "The sum $X+Y$ is a positive rational number.",
            "reason": "by the definition of positive-rational-number addition"
          },
          {
            "line": "There exists a $Z$ such that $Z>X+Y$.",
            "reason": "by the existence of a positive rational number greater than a given one"
          }
        ]
      }
    }
  ]
}
