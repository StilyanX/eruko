// Multiplying Fraction Pairs: the product and quotient of fraction pairs, and Landau's theorems on multiplication.
export default {
  "number": 53,
  "manyParts": false,
  "kinds": [
    {
      "id": "t53-k1",
      "forms": []
    }
  ],
  "ideas": [
    {
      "name": "Product of fraction pairs",
      "concrete": "The product $\\frac{2}{3}\\cdot\\frac{5}{4}$ is the fraction pair $\\frac{2\\times5}{3\\times4}$, that is $\\frac{10}{12}$.",
      "general": "For fraction pairs $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, their **product** is $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}=\\frac{x_1y_1}{x_2y_2}$."
    },
    {
      "name": "Quotient of fraction pairs",
      "concrete": "Since $\\frac{2}{3}\\cdot\\frac{5}{4}\\sim\\frac{5}{6}$, the fraction pair $\\frac{5}{4}$ solves $\\frac{2}{3}\\cdot\\frac{u_1}{u_2}\\sim\\frac{5}{6}$, so $\\frac{5}{6}\\div\\frac{2}{3}$ is $\\frac{5}{4}$.",
      "general": "For fraction pairs $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, the **quotient** $\\frac{x_1}{x_2}\\div\\frac{y_1}{y_2}$ is the fraction pair $\\frac{u_1}{u_2}$ that solves $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}\\sim\\frac{x_1}{x_2}$. This fraction pair is unique up to equivalence."
    }
  ],
  "proofs": [
    {
      "id": "landau-68",
      "method": "direct proof",
      "statement": "If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
      "idea": "A product of fraction pairs keeps its value, up to equivalence, when you replace either factor by an equivalent one.",
      "lines": [
        {
          "line": "Since $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $x_1y_2 = y_1x_2$.",
          "reason": "by the definition of fraction pair equivalence"
        },
        {
          "line": "Since $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$, $z_1u_2 = u_1z_2$.",
          "reason": "by the definition of fraction pair equivalence"
        },
        {
          "line": "So $(x_1y_2)(z_1u_2) = (y_1x_2)(u_1z_2)$.",
          "reason": "by substituting equals for equals"
        },
        {
          "line": "Now $(x_1y_2)(z_1u_2) = (x_1z_1)(y_2u_2)$.",
          "reason": "by the associative and commutative laws of multiplication"
        },
        {
          "line": "Now $(y_1x_2)(u_1z_2) = (y_1u_1)(x_2z_2)$.",
          "reason": "by the associative and commutative laws of multiplication"
        },
        {
          "line": "So $(x_1z_1)(y_2u_2) = (y_1u_1)(x_2z_2)$.",
          "reason": "by the transitivity of equality"
        },
        {
          "line": "So $\\frac{x_1z_1}{x_2z_2} \\sim \\frac{y_1u_1}{y_2u_2}$.",
          "reason": "by the definition of fraction pair equivalence"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by the definition of fraction pair multiplication"
        }
      ]
    },
    {
      "id": "landau-69",
      "method": "direct proof",
      "statement": "For every $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}$.",
      "idea": "A product of two fraction pairs does not depend on their order.",
      "lines": [
        {
          "line": "Now $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2} \\sim \\frac{x_1y_1}{x_2y_2}$.",
          "reason": "by the definition of fraction pair multiplication"
        },
        {
          "line": "Now $\\frac{x_1y_1}{x_2y_2} \\sim \\frac{y_1x_1}{y_2x_2}$.",
          "reason": "by the commutative law of multiplication"
        },
        {
          "line": "Now $\\frac{y_1x_1}{y_2x_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}$.",
          "reason": "by the definition of fraction pair multiplication and the symmetry of fraction pair equivalence"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}$.",
          "reason": "by the transitivity of fraction pair equivalence"
        }
      ]
    },
    {
      "id": "landau-70",
      "method": "direct proof",
      "statement": "For every $\\frac{x_1}{x_2}$, $\\frac{y_1}{y_2}$, and $\\frac{z_1}{z_2}$, $\\left(\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}\\right)\\cdot\\frac{z_1}{z_2} \\sim \\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}\\right)$.",
      "idea": "A product of three fraction pairs does not depend on which two you multiply first.",
      "lines": [
        {
          "line": "Now $\\left(\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}\\right)\\cdot\\frac{z_1}{z_2} \\sim \\frac{x_1y_1}{x_2y_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the definition of fraction pair multiplication"
        },
        {
          "line": "Now $\\frac{x_1y_1}{x_2y_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{(x_1y_1)z_1}{(x_2y_2)z_2}$.",
          "reason": "by the definition of fraction pair multiplication"
        },
        {
          "line": "Now $\\frac{(x_1y_1)z_1}{(x_2y_2)z_2} \\sim \\frac{x_1(y_1z_1)}{x_2(y_2z_2)}$.",
          "reason": "by the associative law of multiplication"
        },
        {
          "line": "Now $\\frac{x_1(y_1z_1)}{x_2(y_2z_2)} \\sim \\frac{x_1}{x_2}\\cdot\\frac{y_1z_1}{y_2z_2}$.",
          "reason": "by the definition of fraction pair multiplication and the symmetry of fraction pair equivalence"
        },
        {
          "line": "Now $\\frac{x_1}{x_2}\\cdot\\frac{y_1z_1}{y_2z_2} \\sim \\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}\\right)$.",
          "reason": "by the fact that equivalent fraction pairs have equivalent products and the definition of fraction pair multiplication"
        },
        {
          "line": "So $\\left(\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}\\right)\\cdot\\frac{z_1}{z_2} \\sim \\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}\\right)$.",
          "reason": "by the transitivity of fraction pair equivalence"
        }
      ]
    },
    {
      "id": "landau-71",
      "method": "direct proof",
      "statement": "For every $\\frac{x_1}{x_2}$, $\\frac{y_1}{y_2}$, and $\\frac{z_1}{z_2}$, $\\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right) \\sim \\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}+\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$.",
      "idea": "Multiplying a fraction pair by a sum distributes over the sum.",
      "lines": [
        {
          "line": "Now $\\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right) \\sim \\frac{x_1}{x_2}\\cdot\\frac{y_1z_2+z_1y_2}{y_2z_2}$.",
          "reason": "by the definition of fraction pair addition and the fact that equivalent fraction pairs have equivalent products"
        },
        {
          "line": "Now $\\frac{x_1}{x_2}\\cdot\\frac{y_1z_2+z_1y_2}{y_2z_2} \\sim \\frac{x_1(y_1z_2+z_1y_2)}{x_2(y_2z_2)}$.",
          "reason": "by the definition of fraction pair multiplication"
        },
        {
          "line": "Now $x_1(y_1z_2+z_1y_2) = x_1(y_1z_2)+x_1(z_1y_2)$.",
          "reason": "by the distributive law"
        },
        {
          "line": "So $\\frac{x_1(y_1z_2+z_1y_2)}{x_2(y_2z_2)} \\sim \\frac{x_1(y_1z_2)+x_1(z_1y_2)}{x_2(y_2z_2)}$.",
          "reason": "by substituting equals for equals"
        },
        {
          "line": "Now $x_1(y_1z_2) = (x_1y_1)z_2$ and $x_1(z_1y_2) = (x_1z_1)y_2$.",
          "reason": "by the associative law of multiplication"
        },
        {
          "line": "So $\\frac{x_1(y_1z_2)+x_1(z_1y_2)}{x_2(y_2z_2)} \\sim \\frac{(x_1y_1)z_2+(x_1z_1)y_2}{x_2(y_2z_2)}$.",
          "reason": "by substituting equals for equals"
        },
        {
          "line": "Now $(x_2y_2)z_2 = x_2(y_2z_2) = (x_2z_2)y_2$.",
          "reason": "by the associative and commutative laws of multiplication"
        },
        {
          "line": "So $\\frac{(x_1y_1)z_2+(x_1z_1)y_2}{x_2(y_2z_2)} \\sim \\frac{(x_1y_1)z_2}{(x_2y_2)z_2}+\\frac{(x_1z_1)y_2}{(x_2z_2)y_2}$.",
          "reason": "since fraction pairs with a common denominator add over that denominator, and by the symmetry of fraction pair equivalence"
        },
        {
          "line": "Now $\\frac{(x_1y_1)z_2}{(x_2y_2)z_2} \\sim \\frac{x_1y_1}{x_2y_2}$.",
          "reason": "by the symmetry of fraction pair equivalence, since scaling by a common factor keeps a fraction pair equivalent"
        },
        {
          "line": "Now $\\frac{(x_1z_1)y_2}{(x_2z_2)y_2} \\sim \\frac{x_1z_1}{x_2z_2}$.",
          "reason": "by the symmetry of fraction pair equivalence, since scaling by a common factor keeps a fraction pair equivalent"
        },
        {
          "line": "So $\\frac{(x_1y_1)z_2}{(x_2y_2)z_2}+\\frac{(x_1z_1)y_2}{(x_2z_2)y_2} \\sim \\frac{x_1y_1}{x_2y_2}+\\frac{x_1z_1}{x_2z_2}$.",
          "reason": "by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs"
        },
        {
          "line": "Now $\\frac{x_1y_1}{x_2y_2} \\sim \\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}$ and $\\frac{x_1z_1}{x_2z_2} \\sim \\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the definition of fraction pair multiplication and the symmetry of fraction pair equivalence"
        },
        {
          "line": "So $\\frac{x_1y_1}{x_2y_2}+\\frac{x_1z_1}{x_2z_2} \\sim \\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}+\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right) \\sim \\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}+\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the transitivity of fraction pair equivalence"
        }
      ]
    },
    {
      "id": "landau-72",
      "method": "proof by cases",
      "statement": "If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then respectively $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} < \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
      "idea": "Multiplying both sides of an order relation by the same fraction pair carries over whichever case holds.",
      "lines": [
        {
          "line": "Since $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $x_1y_2 > y_1x_2$.",
          "reason": "by the definition of fraction pair greater-than"
        },
        {
          "line": "So $(x_1y_2)(z_1z_2) > (y_1x_2)(z_1z_2)$.",
          "reason": "by the fact that multiplication preserves the order relation"
        },
        {
          "line": "Now $(x_1y_2)(z_1z_2) = (x_1z_1)(y_2z_2)$.",
          "reason": "by the associative and commutative laws of multiplication"
        },
        {
          "line": "Now $(y_1x_2)(z_1z_2) = (y_1z_1)(x_2z_2)$.",
          "reason": "by the associative and commutative laws of multiplication"
        },
        {
          "line": "So $(x_1z_1)(y_2z_2) > (y_1z_1)(x_2z_2)$.",
          "reason": "by substituting the equalities into the inequality"
        },
        {
          "line": "So $\\frac{x_1z_1}{x_2z_2} > \\frac{y_1z_1}{y_2z_2}$.",
          "reason": "by the definition of fraction pair greater-than"
        },
        {
          "line": "Now $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{x_1z_1}{x_2z_2}$ and $\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1z_1}{y_2z_2}$.",
          "reason": "by the definition of fraction pair multiplication"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$ when $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$.",
          "reason": "because fraction pair order does not depend on the representative, for greater-than"
        },
        {
          "line": "If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the fact that equivalent fraction pairs have equivalent products, taking $\\frac{z_1}{z_2}$ equivalent to itself"
        },
        {
          "line": "If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} > \\frac{x_1}{x_2}$.",
          "reason": "since less-than means greater-than reversed, for fraction pairs"
        },
        {
          "line": "So $\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2} > \\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the case already shown for greater-than"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} < \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "since greater-than means less-than reversed, for fraction pairs"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} < \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, respectively.",
          "reason": "by exhausting the cases of the hypothesis"
        }
      ]
    },
    {
      "id": "landau-73",
      "method": "proof by cases",
      "statement": "If $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} < \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, then respectively $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$.",
      "idea": "Whichever order relation holds after multiplying both sides by the same fraction pair also holds before multiplying by it.",
      "lines": [
        {
          "line": "Exactly one of $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ holds.",
          "reason": "by the trichotomy of fraction pair order"
        },
        {
          "line": "Each of these three cases forces the matching one of $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$, $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} < \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$. These three cases are mutually exclusive.",
          "reason": "by the fact that fraction pair multiplication preserves the order relation and the trichotomy of fraction pair order"
        },
        {
          "line": "So $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, respectively.",
          "reason": "since the two case splits correspond one to one, and each hypothesis case forces its matching conclusion case"
        }
      ]
    },
    {
      "id": "landau-74",
      "method": "direct proof",
      "statement": "If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
      "idea": "The product of two greater fraction pairs is greater than the product of the two lesser ones.",
      "lines": [
        {
          "line": "Since $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the fact that fraction pair multiplication preserves the order relation"
        },
        {
          "line": "Now $\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{z_1}{z_2}\\cdot\\frac{y_1}{y_2}$.",
          "reason": "by the commutative law of fraction pair multiplication"
        },
        {
          "line": "Since $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, $\\frac{z_1}{z_2}\\cdot\\frac{y_1}{y_2} > \\frac{u_1}{u_2}\\cdot\\frac{y_1}{y_2}$.",
          "reason": "by the fact that fraction pair multiplication preserves the order relation"
        },
        {
          "line": "Now $\\frac{u_1}{u_2}\\cdot\\frac{y_1}{y_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by the commutative law of fraction pair multiplication"
        },
        {
          "line": "So $\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "because fraction pair order does not depend on the representative, for greater-than"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by the transitivity of strict fraction pair order"
        }
      ]
    },
    {
      "id": "landau-75",
      "method": "proof by cases",
      "statement": "If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, or $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} \\gtrsim \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
      "idea": "A non-strict inequality and a strict one multiply to a strict inequality.",
      "lines": [
        {
          "line": "If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the fact that equivalent fraction pairs have equivalent products, taking $\\frac{z_1}{z_2}$ equivalent to itself"
        },
        {
          "line": "So $\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by the fact that fraction pair multiplication preserves the order relation"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$ in that case.",
          "reason": "because fraction pair order does not depend on the representative, for greater-than"
        },
        {
          "line": "If $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$ and $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
          "reason": "by the fact that fraction pair multiplication preserves the order relation"
        },
        {
          "line": "Now $\\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by the fact that equivalent fraction pairs have equivalent products, taking $\\frac{y_1}{y_2}$ equivalent to itself"
        },
        {
          "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$ in that case.",
          "reason": "because fraction pair order does not depend on the representative, for greater-than"
        },
        {
          "line": "If neither equivalence sign holds, then $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, so $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by multiplication of two strict fraction pair inequalities"
        },
        {
          "line": "So in every case $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by exhausting the cases of the hypothesis"
        }
      ]
    },
    {
      "id": "landau-76",
      "method": "proof by cases",
      "statement": "If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} \\gtrsim \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\gtrsim \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
      "idea": "Two non-strict inequalities multiply to a non-strict inequality.",
      "lines": [
        {
          "line": "If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by the fact that equivalent fraction pairs have equivalent products"
        },
        {
          "line": "If at least one of $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ or $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$ holds, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by multiplication of a strict and a non-strict fraction pair inequality"
        },
        {
          "line": "So in every case $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\gtrsim \\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2}$.",
          "reason": "by the definition of greater-than-or-equivalent"
        }
      ]
    },
    {
      "id": "landau-77",
      "method": "proof of existence by construction",
      "statement": "Given $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, the equivalence $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2} \\sim \\frac{x_1}{x_2}$ has a solution $\\frac{u_1}{u_2}$. If $\\frac{v_1}{v_2}$ and $\\frac{w_1}{w_2}$ are both solutions, then $\\frac{v_1}{v_2} \\sim \\frac{w_1}{w_2}$.",
      "idea": "The fraction pair one factor must multiply to reach another is itself a fraction pair, unique up to equivalence.",
      "lines": [
        {
          "line": "Suppose that $\\frac{v_1}{v_2}$ and $\\frac{w_1}{w_2}$ both satisfy the equivalence, so that $\\frac{y_1}{y_2}\\cdot\\frac{v_1}{v_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{w_1}{w_2}$.",
          "reason": "by the transitivity of fraction pair equivalence"
        },
        {
          "line": "So $\\frac{v_1}{v_2} \\sim \\frac{w_1}{w_2}$.",
          "reason": "by the fact that cancelling the same fraction pair from both sides of a multiplication keeps the order relation"
        },
        {
          "line": "Set $u_1 = x_1y_2$ and $u_2 = x_2y_1$.",
          "reason": "by the definition of a fraction pair as an ordered pair of natural numbers"
        },
        {
          "line": "Now $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2} \\sim \\frac{y_1u_1}{y_2u_2}$.",
          "reason": "by the definition of fraction pair multiplication"
        },
        {
          "line": "Now $\\frac{y_1u_1}{y_2u_2} \\sim \\frac{u_1y_1}{u_2y_2}$.",
          "reason": "by the commutative law of multiplication"
        },
        {
          "line": "Now $\\frac{u_1y_1}{u_2y_2} = \\frac{(x_1y_2)y_1}{(x_2y_1)y_2}$.",
          "reason": "by substituting $u_1=x_1y_2$ and $u_2=x_2y_1$"
        },
        {
          "line": "Now $(x_1y_2)y_1 = x_1(y_2y_1)$.",
          "reason": "by the associative law of multiplication"
        },
        {
          "line": "Now $(x_2y_1)y_2 = x_2(y_1y_2)$.",
          "reason": "by the associative law of multiplication"
        },
        {
          "line": "Now $y_2y_1 = y_1y_2$.",
          "reason": "by the commutative law of multiplication"
        },
        {
          "line": "So $\\frac{(x_1y_2)y_1}{(x_2y_1)y_2} = \\frac{x_1(y_1y_2)}{x_2(y_1y_2)}$.",
          "reason": "by substituting equals for equals"
        },
        {
          "line": "Now $\\frac{x_1(y_1y_2)}{x_2(y_1y_2)} \\sim \\frac{x_1}{x_2}$.",
          "reason": "by the symmetry of fraction pair equivalence, since scaling by a common factor keeps a fraction pair equivalent"
        },
        {
          "line": "So $\\frac{y_1}{y_2}\\cdot\\frac{u_1}{u_2} \\sim \\frac{x_1}{x_2}$, so that $\\frac{u_1}{u_2}$ is a solution.",
          "reason": "by the transitivity of fraction pair equivalence"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t53-s1",
      "method": "direct proof",
      "statement": "For every $\\frac{x_1}{x_2}$, $\\frac{y_1}{y_2}$, and $\\frac{z_1}{z_2}$, $\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)\\cdot\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}+\\frac{z_1}{z_2}\\cdot\\frac{x_1}{x_2}$.",
      "check": {
        "proof": [
          {
            "line": "Now $\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)\\cdot\\frac{x_1}{x_2} \\sim \\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)$.",
            "reason": "by the commutative law of fraction pair multiplication"
          },
          {
            "line": "Now $\\frac{x_1}{x_2}\\cdot\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right) \\sim \\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}+\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2}$.",
            "reason": "by the distributive law for fraction pairs"
          },
          {
            "line": "Now $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}$ and $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{z_1}{z_2}\\cdot\\frac{x_1}{x_2}$.",
            "reason": "by the commutative law of fraction pair multiplication"
          },
          {
            "line": "So $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}+\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}+\\frac{z_1}{z_2}\\cdot\\frac{x_1}{x_2}$.",
            "reason": "by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs"
          },
          {
            "line": "So $\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)\\cdot\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{x_1}{x_2}+\\frac{z_1}{z_2}\\cdot\\frac{x_1}{x_2}$.",
            "reason": "by the transitivity of fraction pair equivalence"
          }
        ]
      }
    },
    {
      "id": "t53-s2",
      "method": "proof by cases",
      "statement": "If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\gtrsim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
      "check": {
        "proof": [
          {
            "line": "If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} > \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
            "reason": "by the fact that fraction pair multiplication preserves the order relation"
          },
          {
            "line": "If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
            "reason": "by the fact that equivalent fraction pairs have equivalent products, taking $\\frac{z_1}{z_2}$ equivalent to itself"
          },
          {
            "line": "So in either case $\\frac{x_1}{x_2}\\cdot\\frac{z_1}{z_2} \\gtrsim \\frac{y_1}{y_2}\\cdot\\frac{z_1}{z_2}$.",
            "reason": "by the definition of greater-than-or-equivalent"
          }
        ]
      }
    },
    {
      "id": "t53-s3",
      "method": "proof of existence by construction",
      "statement": "For every $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, there exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{z_1}{z_2} > \\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}$.",
      "check": {
        "proof": [
          {
            "line": "The product $\\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}$ is a fraction pair.",
            "reason": "by the definition of fraction pair multiplication"
          },
          {
            "line": "There exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{z_1}{z_2} > \\frac{x_1}{x_2}\\cdot\\frac{y_1}{y_2}$.",
            "reason": "by the existence of a fraction pair greater than a given one"
          }
        ]
      }
    }
  ]
}
