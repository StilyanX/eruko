// Multiplying positive rational numbers: the product and quotient of positive rational numbers, and Landau's theorems on multiplication.
export default {
  "number": 57,
  "manyParts": false,
  "kinds": [
    {
      "id": "t57-k1",
      "forms": []
    }
  ],
  "ideas": [
    {
      "name": "Product of positive rational numbers",
      "concrete": "The product of the positive rational numbers containing $\\frac{2}{3}$ and $\\frac{5}{4}$ is the positive rational number containing $\\frac{2}{3}\\cdot\\frac{5}{4}$.",
      "general": "For positive rational numbers $X$ and $Y$, take fraction pairs $\\frac{x_1}{x_2}$ of $X$ and $\\frac{y_1}{y_2}$ of $Y$. Their **product**, written $XY$, is the positive rational number containing $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}$."
    },
    {
      "name": "Quotient of positive rational numbers",
      "concrete": "The product $\\frac{2}{3}\\cdot\\frac{5}{4}$ is equivalent to $\\frac{5}{6}$. So the quotient of the positive rational number containing $\\frac{5}{6}$ by the one containing $\\frac{2}{3}$ is the one containing $\\frac{5}{4}$.",
      "general": "For positive rational numbers $X$ and $Y$, the unique positive rational number $U$ with $YU=X$ is their **quotient**, $\\frac{X}{Y}$."
    }
  ],
  "proofs": [
    {
      "id": "landau-102",
      "method": "direct proof",
      "statement": "For every $X$ and $Y$, $XY=YX$.",
      "idea": "A product of two positive rational numbers does not depend on their order.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$ and $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $XY$ contains $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}$, and $YX$ contains $\\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}$.",
          "reason": "the definition of positive-rational-number multiplication"
        },
        {
          "line": "These fraction pairs are equivalent: $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}\\sim\\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}$.",
          "reason": "commutative law of fraction pair multiplication"
        },
        {
          "line": "Therefore $XY=YX$.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        }
      ]
    },
    {
      "id": "landau-103",
      "method": "direct proof",
      "statement": "For every $X$, $Y$, and $Z$, $(XY)Z=X(YZ)$.",
      "idea": "A product of three positive rational numbers does not depend on how you group the multiplication.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, and $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $(XY)Z$ contains $\\left(\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}\\right)\\cdot\\frac{z_1}{z_2}$, and $X(YZ)$ contains $\\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}\\right)$.",
          "reason": "the definition of positive-rational-number multiplication"
        },
        {
          "line": "These fraction pairs are equivalent: $\\left(\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}\\right)\\cdot\\frac{z_1}{z_2}\\sim\\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}\\right)$.",
          "reason": "associative law of fraction pair multiplication"
        },
        {
          "line": "Therefore $(XY)Z=X(YZ)$.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        }
      ]
    },
    {
      "id": "landau-104",
      "method": "direct proof",
      "statement": "For every $X$, $Y$, and $Z$, $X(Y+Z)=XY+XZ$.",
      "idea": "Multiplying a positive rational number by a sum distributes over the sum.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, and $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $X(Y+Z)$ contains $\\frac{x_1}{x_2}\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)$, and $XY+XZ$ contains $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}+\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "the definitions of positive-rational-number addition and multiplication"
        },
        {
          "line": "These fraction pairs are equivalent: $\\frac{x_1}{x_2}\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)\\sim\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}+\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "distributive law for fraction pairs"
        },
        {
          "line": "Therefore $X(Y+Z)=XY+XZ$.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        }
      ]
    },
    {
      "id": "landau-105",
      "method": "direct proof",
      "statement": "If $X>Y$, or $X=Y$, or $X<Y$, then $XZ>YZ$, or $XZ=YZ$, or $XZ<YZ$, respectively.",
      "idea": "Multiplying both sides by one positive rational number keeps whichever order relation holds, by the same fact for fraction pairs.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, and $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypothesis means $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$, respectively.",
          "reason": "the definitions of positive-rational-number order and equality"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}>\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}\\sim\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}<\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, respectively.",
          "reason": "fraction pair multiplication preserves the order relation"
        },
        {
          "line": "The number $XZ$ contains $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$, and $YZ$ contains $\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "the definition of positive-rational-number multiplication"
        },
        {
          "line": "Therefore $XZ>YZ$, or $XZ=YZ$, or $XZ<YZ$, respectively.",
          "reason": "the definitions of positive-rational-number order and equality"
        }
      ]
    },
    {
      "id": "landau-106",
      "method": "direct proof",
      "statement": "If $XZ>YZ$, or $XZ=YZ$, or $XZ<YZ$, then $X>Y$, or $X=Y$, or $X<Y$, respectively.",
      "idea": "Whichever order relation holds after multiplying both sides by the same positive rational number also holds before multiplying by it.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, and $\\frac{z_1}{z_2}$ of $Z$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $XZ$ contains $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$, and $YZ$ contains $\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "the definition of positive-rational-number multiplication"
        },
        {
          "line": "The hypothesis means $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}>\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}\\sim\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}<\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, respectively.",
          "reason": "the definitions of positive-rational-number order and equality"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2}<\\frac{y_1}{y_2}$, respectively.",
          "reason": "cancelling the common divisor preserves the order relation for fraction pairs"
        },
        {
          "line": "Therefore $X>Y$, or $X=Y$, or $X<Y$, respectively.",
          "reason": "the definitions of positive-rational-number order and equality"
        }
      ]
    },
    {
      "id": "landau-107",
      "method": "direct proof",
      "statement": "If $X>Y$ and $Z>U$, then $XZ>YU$.",
      "idea": "The product of two greater positive rational numbers is greater than the product of the two lesser ones.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, $\\frac{z_1}{z_2}$ of $Z$, and $\\frac{u_1}{u_2}$ of $U$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypotheses $X>Y$ and $Z>U$ mean that $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2}>\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number order"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}>\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "multiplication of two strict fraction pair inequalities"
        },
        {
          "line": "The number $XZ$ contains $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$, and $YU$ contains $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number multiplication"
        },
        {
          "line": "Therefore $XZ>YU$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-108",
      "method": "direct proof",
      "statement": "If $X\\geq Y$ and $Z>U$, or $X>Y$ and $Z\\geq U$, then $XZ>YU$.",
      "idea": "An at-least relation together with a strict one multiply to a strict inequality.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, $\\frac{z_1}{z_2}$ of $Z$, and $\\frac{u_1}{u_2}$ of $U$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypothesis translates to $\\frac{x_1}{x_2}\\gtrsim\\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2}>\\frac{u_1}{u_2}$, or to $\\frac{x_1}{x_2}>\\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2}\\gtrsim\\frac{u_1}{u_2}$.",
          "reason": "the definitions of $\\geq$ and $>$ for positive rational numbers and for fraction pairs"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}>\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "multiplication of a strict and a non-strict fraction pair inequality"
        },
        {
          "line": "The number $XZ$ contains $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$, and $YU$ contains $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number multiplication"
        },
        {
          "line": "Therefore $XZ>YU$.",
          "reason": "the definition of positive-rational-number order"
        }
      ]
    },
    {
      "id": "landau-109",
      "method": "direct proof",
      "statement": "If $X\\geq Y$ and $Z\\geq U$, then $XZ\\geq YU$.",
      "idea": "Two at-least relations multiply to an at-least relation.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$, $\\frac{y_1}{y_2}$ of $Y$, $\\frac{z_1}{z_2}$ of $Z$, and $\\frac{u_1}{u_2}$ of $U$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The hypotheses $X\\geq Y$ and $Z\\geq U$ mean that $\\frac{x_1}{x_2}\\gtrsim\\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2}\\gtrsim\\frac{u_1}{u_2}$.",
          "reason": "the definition of $\\geq$ for positive rational numbers and for fraction pairs"
        },
        {
          "line": "This gives $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}\\gtrsim\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "multiplication of two non-strict fraction pair inequalities"
        },
        {
          "line": "The number $XZ$ contains $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$, and $YU$ contains $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number multiplication"
        },
        {
          "line": "Therefore $XZ\\geq YU$.",
          "reason": "the definition of $\\geq$ for positive rational numbers"
        }
      ]
    },
    {
      "id": "landau-110",
      "method": "proof of existence by construction",
      "statement": "For every $X$ and $Y$, the equation $YU=X$ has exactly one solution $U$.",
      "idea": "The positive rational number that one factor must multiply to reach another exists, and it is unique.",
      "lines": [
        {
          "line": "Fix fraction pairs $\\frac{x_1}{x_2}$ of $X$ and $\\frac{y_1}{y_2}$ of $Y$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "There exists a fraction pair $\\frac{u_1}{u_2}$ such that $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}\\sim\\frac{x_1}{x_2}$.",
          "reason": "existence and uniqueness of the fraction pair quotient"
        },
        {
          "line": "Let $U$ be the positive rational number containing $\\frac{u_1}{u_2}$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "The number $YU$ contains $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$, which is a fraction pair of $X$.",
          "reason": "the definition of positive-rational-number multiplication"
        },
        {
          "line": "Therefore $YU=X$, so a solution exists.",
          "reason": "the definition of a positive rational number and the definition of positive-rational-number equality"
        },
        {
          "line": "Suppose that $U'$ is a positive rational number with $YU'=X$, and fix a fraction pair $\\frac{u_1'}{u_2'}$ of $U'$.",
          "reason": "the definition of a positive rational number as a set of fraction pairs"
        },
        {
          "line": "This gives $\\frac{y_1}{y_2}\\cdot\\frac{u_1'}{u_2'}\\sim\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "the definition of positive-rational-number multiplication and equality"
        },
        {
          "line": "This means $\\frac{u_1'}{u_2'}\\sim\\frac{u_1}{u_2}$.",
          "reason": "existence and uniqueness of the fraction pair quotient"
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
      "id": "t57-s1",
      "method": "direct proof",
      "statement": "For every $X$, $Y$, and $Z$, $(Y+Z)X=YX+ZX$.",
      "check": {
        "proof": [
          {
            "line": "Now $(Y+Z)X=X(Y+Z)$.",
            "reason": "by the commutative law of positive-rational-number multiplication"
          },
          {
            "line": "Now $X(Y+Z)=XY+XZ$.",
            "reason": "by the distributive law for positive rational numbers"
          },
          {
            "line": "Now $XY=YX$ and $XZ=ZX$.",
            "reason": "by the commutative law of positive-rational-number multiplication"
          },
          {
            "line": "So $XY+XZ=YX+ZX$.",
            "reason": "by substituting equals for equals"
          },
          {
            "line": "So $(Y+Z)X=YX+ZX$.",
            "reason": "by the transitivity of equality"
          }
        ]
      }
    },
    {
      "id": "t57-s2",
      "method": "direct proof",
      "statement": "If $X\\geq Y$, then $XZ\\geq YZ$.",
      "check": {
        "proof": [
          {
            "line": "The hypothesis means $X>Y$ or $X=Y$.",
            "reason": "the definition of $X\\geq Y$"
          },
          {
            "line": "This gives $XZ>YZ$ or $XZ=YZ$, respectively.",
            "reason": "positive-rational-number multiplication preserves the order relation"
          },
          {
            "line": "So $XZ\\geq YZ$.",
            "reason": "the definition of $XZ\\geq YZ$"
          }
        ]
      }
    },
    {
      "id": "t57-s3",
      "method": "proof of existence by construction",
      "statement": "For every $X$ and $Y$, there exists a $Z$ such that $Z>XY$.",
      "check": {
        "proof": [
          {
            "line": "The product $XY$ is a positive rational number.",
            "reason": "by the definition of positive-rational-number multiplication"
          },
          {
            "line": "There exists a $Z$ such that $Z>XY$.",
            "reason": "by the existence of a positive rational number greater than a given one"
          }
        ]
      }
    }
  ]
}
