// Positive rational number equality: the positive rational number and its equality, and Landau's theorems on them.
export default {
  "number": 54,
  "manyParts": false,
  "kinds": [
    {
      "id": "t54-k1",
      "forms": []
    }
  ],
  "ideas": [
    {
      "name": "Positive rational number",
      "concrete": "The set of every fraction pair equivalent to $\\frac{2}{3}$, such as $\\frac{2}{3}$, $\\frac{4}{6}$, and $\\frac{6}{9}$, is one positive rational number.",
      "general": "A fraction pair $\\frac{x_1}{x_2}$ determines a **positive rational number**, the set of every fraction pair equivalent to $\\frac{x_1}{x_2}$."
    },
    {
      "name": "Equality of positive rational numbers",
      "concrete": "The positive rational numbers containing $\\frac{2}{3}$ and $\\frac{4}{6}$ are equal, since the two sets contain the same fraction pairs.",
      "general": "For positive rational numbers $X$ and $Y$, $X=Y$ means the two sets consist of the same fraction pairs. The statement $X\\neq Y$ means they do not."
    }
  ],
  "proofs": [
    {
      "id": "landau-78",
      "method": "direct proof",
      "statement": "Every positive rational number satisfies $X=X$.",
      "idea": "A positive rational number equals itself, because a set equals itself.",
      "lines": [
        {
          "line": "The set of fraction pairs that $X$ denotes is the same set as itself.",
          "reason": "reflexivity of set identity"
        },
        {
          "line": "Therefore $X=X$.",
          "reason": "the definition of positive-rational-number equality"
        }
      ]
    },
    {
      "id": "landau-79",
      "method": "direct proof",
      "statement": "If $X=Y$, then $Y=X$.",
      "idea": "Equality of positive rational numbers is symmetric, because set identity is symmetric.",
      "lines": [
        {
          "line": "The hypothesis $X=Y$ means that $X$ and $Y$ are the same set of fraction pairs.",
          "reason": "the definition of positive-rational-number equality"
        },
        {
          "line": "The set that $Y$ denotes is the same set as the set that $X$ denotes.",
          "reason": "symmetry of set identity"
        },
        {
          "line": "Therefore $Y=X$.",
          "reason": "the definition of positive-rational-number equality"
        }
      ]
    },
    {
      "id": "landau-80",
      "method": "direct proof",
      "statement": "If $X=Y$ and $Y=Z$, then $X=Z$.",
      "idea": "Two equalities of positive rational numbers chain into a third, because set identity chains.",
      "lines": [
        {
          "line": "The hypothesis $X=Y$ means that $X$ and $Y$ are the same set of fraction pairs. The hypothesis $Y=Z$ means the same for $Y$ and $Z$.",
          "reason": "the definition of positive-rational-number equality"
        },
        {
          "line": "The set that $X$ denotes is the same set as the set that $Z$ denotes.",
          "reason": "transitivity of set identity"
        },
        {
          "line": "Therefore $X=Z$.",
          "reason": "the definition of positive-rational-number equality"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t54-s1",
      "method": "direct proof",
      "statement": "If $X=Y$, then every fraction pair of $X$ is a fraction pair of $Y$.",
      "check": {
        "proof": [
          {
            "line": "The hypothesis $X=Y$ means that $X$ and $Y$ are the same set of fraction pairs.",
            "reason": "the definition of positive-rational-number equality"
          },
          {
            "line": "So every fraction pair of $X$ is a fraction pair of $Y$.",
            "reason": "since the two sets are identical"
          }
        ]
      }
    },
    {
      "id": "t54-s2",
      "method": "direct proof",
      "statement": "Let $\\frac{x_1}{x_2}$ be a fraction pair of the positive rational number $X$. If $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2}$ is a fraction pair of $X$.",
      "check": {
        "proof": [
          {
            "line": "Since $\\frac{x_1}{x_2}$ is a fraction pair of $X$, $X$ is the set of every fraction pair equivalent to $\\frac{x_1}{x_2}$.",
            "reason": "the definition of a positive rational number as a set of fraction pairs"
          },
          {
            "line": "Since $\\frac{x_1}{x_2}\\sim\\frac{y_1}{y_2}$, the fraction pair $\\frac{y_1}{y_2}$ is equivalent to $\\frac{x_1}{x_2}$.",
            "reason": "by the symmetry of fraction pair equivalence"
          },
          {
            "line": "So $\\frac{y_1}{y_2}$ belongs to $X$.",
            "reason": "by the definition of $X$ as the set of every fraction pair equivalent to $\\frac{x_1}{x_2}$"
          }
        ]
      }
    }
  ]
}
