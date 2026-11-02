// Fraction Pair Equivalence: the fraction pair, its equivalence, and Landau's first theorems on fractions.
export default {
  "number": 50,
  "manyParts": false,
  "kinds": [
    {
      "id": "t50-k1",
      "forms": []
    }
  ],
  "ideas": [
    {
      "name": "Fraction pair",
      "concrete": "The fraction pair $\\frac{3}{4}$ is the ordered pair of the natural numbers 3 and 4.",
      "general": "A **fraction pair** $\\frac{x_1}{x_2}$ (read \"$x_1$ over $x_2$\") is the ordered pair of natural numbers $x_1$ and $x_2$."
    },
    {
      "name": "Equivalent fraction pairs",
      "concrete": "The fraction pair $\\frac{2}{3}$ is equivalent to $\\frac{4}{6}$, since $2 \\times 6 = 3 \\times 4$.",
      "general": "For fraction pairs $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}$ is **equivalent** to $\\frac{y_1}{y_2}$, written $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, when $x_1y_2=y_1x_2$."
    }
  ],
  "proofs": [
    {
      "id": "landau-37",
      "method": "direct proof",
      "statement": "For every fraction pair $\\frac{x_1}{x_2}$, $\\frac{x_1}{x_2} \\sim \\frac{x_1}{x_2}$.",
      "idea": "A fraction pair is equivalent to itself because its cross product equals itself.",
      "lines": [
        {
          "line": "The product $x_1x_2$ equals $x_1x_2$.",
          "reason": "by the reflexivity of equality"
        },
        {
          "line": "So $\\frac{x_1}{x_2} \\sim \\frac{x_1}{x_2}$.",
          "reason": "by the definition of fraction pair equivalence"
        }
      ]
    },
    {
      "id": "landau-38",
      "method": "direct proof",
      "statement": "If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} \\sim \\frac{x_1}{x_2}$.",
      "idea": "Equivalence is symmetric because equality is symmetric.",
      "lines": [
        {
          "line": "Since $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $x_1y_2 = y_1x_2$.",
          "reason": "by the definition of fraction pair equivalence"
        },
        {
          "line": "So $y_1x_2 = x_1y_2$.",
          "reason": "by the symmetry of equality"
        },
        {
          "line": "So $\\frac{y_1}{y_2} \\sim \\frac{x_1}{x_2}$.",
          "reason": "by the definition of fraction pair equivalence"
        }
      ]
    },
    {
      "id": "landau-39",
      "method": "direct proof",
      "statement": "If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} \\sim \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$.",
      "idea": "Two equivalences chain into a third because the shared middle term cancels.",
      "lines": [
        {
          "line": "Since $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $x_1y_2 = y_1x_2$.",
          "reason": "by the definition of fraction pair equivalence"
        },
        {
          "line": "Since $\\frac{y_1}{y_2} \\sim \\frac{z_1}{z_2}$, $y_1z_2 = z_1y_2$.",
          "reason": "by the definition of fraction pair equivalence"
        },
        {
          "line": "So $(x_1y_2)(y_1z_2) = (y_1x_2)(z_1y_2)$.",
          "reason": "by substituting equals for equals"
        },
        {
          "line": "The product $(x_1y_2)(y_1z_2)$ equals $(x_1z_2)(y_1y_2)$.",
          "reason": "by the associative and commutative laws of multiplication"
        },
        {
          "line": "The product $(y_1x_2)(z_1y_2)$ equals $(z_1x_2)(y_1y_2)$.",
          "reason": "by the associative and commutative laws of multiplication"
        },
        {
          "line": "So $(x_1z_2)(y_1y_2) = (z_1x_2)(y_1y_2)$.",
          "reason": "by the transitivity of equality"
        },
        {
          "line": "So $x_1z_2 = z_1x_2$.",
          "reason": "since two products by the same factor $y_1y_2$ are equal only when the other two factors are equal"
        },
        {
          "line": "So $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$.",
          "reason": "by the definition of fraction pair equivalence"
        }
      ]
    },
    {
      "id": "landau-40",
      "method": "direct proof",
      "statement": "For every fraction pair $\\frac{x_1}{x_2}$ and every number $x$, $\\frac{x_1}{x_2} \\sim \\frac{x_1x}{x_2x}$.",
      "idea": "Scaling both terms of a fraction pair by the same number leaves the cross product unchanged.",
      "lines": [
        {
          "line": "The product $x_1(x_2x)$ equals $x_1(xx_2)$.",
          "reason": "by the commutative law of multiplication"
        },
        {
          "line": "The product $x_1(xx_2)$ equals $(x_1x)x_2$.",
          "reason": "by the associative law of multiplication"
        },
        {
          "line": "So $x_1(x_2x) = (x_1x)x_2$.",
          "reason": "by the transitivity of equality"
        },
        {
          "line": "So $\\frac{x_1}{x_2} \\sim \\frac{x_1x}{x_2x}$.",
          "reason": "by the definition of fraction pair equivalence"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t50-s1",
      "method": "direct proof",
      "statement": "For every fraction pair $\\frac{x_1}{x_2}$ and every number $x$ and every number $y$, $\\frac{x_1x}{x_2x} \\sim \\frac{x_1y}{x_2y}$.",
      "check": {
        "proof": [
          {
            "line": "The fraction pair $\\frac{x_1}{x_2}$ is equivalent to $\\frac{x_1x}{x_2x}$.",
            "reason": "by the fact that a fraction pair is equivalent to itself scaled by a common factor, with the factor $x$"
          },
          {
            "line": "The fraction pair $\\frac{x_1}{x_2}$ is equivalent to $\\frac{x_1y}{x_2y}$.",
            "reason": "by the fact that a fraction pair is equivalent to itself scaled by a common factor, with the factor $y$"
          },
          {
            "line": "So $\\frac{x_1x}{x_2x} \\sim \\frac{x_1}{x_2}$.",
            "reason": "by the symmetry of fraction pair equivalence"
          },
          {
            "line": "So $\\frac{x_1x}{x_2x} \\sim \\frac{x_1y}{x_2y}$.",
            "reason": "by the transitivity of fraction pair equivalence"
          }
        ]
      }
    },
    {
      "id": "t50-s2",
      "method": "direct proof",
      "statement": "If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $x_1=y_1$, then $x_2=y_2$.",
      "check": {
        "proof": [
          {
            "line": "Since $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $x_1y_2 = y_1x_2$.",
            "reason": "by the definition of fraction pair equivalence"
          },
          {
            "line": "So $x_1y_2 = x_1x_2$.",
            "reason": "by substituting the hypothesis $x_1=y_1$ into the previous line"
          },
          {
            "line": "So $x_2=y_2$.",
            "reason": "since two products by the same factor $x_1$ are equal only when the other two factors are equal"
          }
        ]
      }
    }
  ]
}
