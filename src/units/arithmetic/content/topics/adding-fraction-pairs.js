// Adding fraction pairs: the sum and difference of fraction pairs, and Landau's theorems on addition.
export default {
  number: 52,
  manyParts: false,
  kinds: [{ id: 't52-k1', forms: [] }],
  ideas: [
    {
      name: 'Sum of fraction pairs',
      concrete: 'The sum $\\frac{2}{3}+\\frac{1}{4}$ is the fraction pair $\\frac{2\\times4+1\\times3}{3\\times4}$, that is $\\frac{11}{12}$.',
      general: 'For fraction pairs $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, their **sum** is the fraction pair $\\frac{x_1}{x_2}+\\frac{y_1}{y_2} = \\frac{x_1y_2+y_1x_2}{x_2y_2}$.'
    },
    {
      name: 'Difference of fraction pairs',
      concrete: 'Since $\\frac{4}{3} > \\frac{1}{2}$, the fraction pair $\\frac{5}{6}$ solves $\\frac{1}{2}+\\frac{u_1}{u_2}\\sim\\frac{4}{3}$, so $\\frac{4}{3}-\\frac{1}{2}$ is $\\frac{5}{6}$.',
      general: 'For fraction pairs $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, the fraction pair $\\frac{u_1}{u_2}$ solving $\\frac{y_1}{y_2}+\\frac{u_1}{u_2}\\sim\\frac{x_1}{x_2}$ is their **difference**, $\\frac{x_1}{x_2}-\\frac{y_1}{y_2}$, unique up to equivalence.'
    }
  ],
  proofs: [
    {
      id: 'landau-56', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.',
      idea: 'Replacing either addend of a sum of fraction pairs with an equivalent one gives an equivalent sum.',
      lines: [
        { line: 'Since $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $x_1y_2 = y_1x_2$.', reason: 'by the definition of fraction pair equivalence' },
        { line: 'Since $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$, $z_1u_2 = u_1z_2$.', reason: 'by the definition of fraction pair equivalence' },
        { line: 'Now $(x_1y_2)(z_2u_2) = (y_1x_2)(z_2u_2)$.', reason: 'by substituting equals for equals' },
        { line: 'Now $(z_1u_2)(x_2y_2) = (u_1z_2)(x_2y_2)$.', reason: 'by substituting equals for equals' },
        { line: 'Now $(x_1y_2)(z_2u_2) = (x_1z_2)(y_2u_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'Now $(y_1x_2)(z_2u_2) = (y_1u_2)(x_2z_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'So $(x_1z_2)(y_2u_2) = (y_1u_2)(x_2z_2)$.', reason: 'by the transitivity of equality' },
        { line: 'Now $(z_1u_2)(x_2y_2) = (z_1x_2)(y_2u_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'Now $(u_1z_2)(x_2y_2) = (u_1y_2)(x_2z_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'So $(z_1x_2)(y_2u_2) = (u_1y_2)(x_2z_2)$.', reason: 'by the transitivity of equality' },
        { line: 'So $(x_1z_2)(y_2u_2) + (z_1x_2)(y_2u_2) = (y_1u_2)(x_2z_2) + (u_1y_2)(x_2z_2)$.', reason: 'by substituting equals for equals' },
        { line: 'Now $(x_1z_2)(y_2u_2) + (z_1x_2)(y_2u_2) = (x_1z_2+z_1x_2)(y_2u_2)$.', reason: 'by the distributive law' },
        { line: 'Now $(y_1u_2)(x_2z_2) + (u_1y_2)(x_2z_2) = (y_1u_2+u_1y_2)(x_2z_2)$.', reason: 'by the distributive law' },
        { line: 'So $(x_1z_2+z_1x_2)(y_2u_2) = (y_1u_2+u_1y_2)(x_2z_2)$.', reason: 'by the transitivity of equality' },
        { line: 'So $\\frac{x_1z_2+z_1x_2}{x_2z_2} \\sim \\frac{y_1u_2+u_1y_2}{y_2u_2}$.', reason: 'by the definition of fraction pair equivalence' },
        { line: 'So $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by the definition of fraction pair addition' }
      ]
    },
    {
      id: 'landau-57', method: 'direct proof',
      statement: 'For every number $x$, $\\frac{x_1}{x} + \\frac{x_2}{x} \\sim \\frac{x_1+x_2}{x}$.',
      idea: 'Fraction pairs sharing a denominator add by adding their numerators.',
      lines: [
        { line: 'Now $\\frac{x_1}{x} + \\frac{x_2}{x} \\sim \\frac{x_1x+x_2x}{xx}$.', reason: 'by the definition of fraction pair addition' },
        { line: 'Now $\\frac{x_1x+x_2x}{xx} \\sim \\frac{(x_1+x_2)x}{xx}$.', reason: 'by the distributive law' },
        { line: 'Now $\\frac{(x_1+x_2)x}{xx} \\sim \\frac{x_1+x_2}{x}$.', reason: 'since a fraction pair is equivalent to itself scaled by a common factor, and fraction pair equivalence is symmetric' },
        { line: 'So $\\frac{x_1}{x} + \\frac{x_2}{x} \\sim \\frac{x_1+x_2}{x}$.', reason: 'by the transitivity of fraction pair equivalence' }
      ]
    },
    {
      id: 'landau-58', method: 'direct proof',
      statement: 'For every $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} + \\frac{y_1}{y_2} \\sim \\frac{y_1}{y_2} + \\frac{x_1}{x_2}$.',
      idea: 'A sum of two fraction pairs does not depend on their order.',
      lines: [
        { line: 'Now $\\frac{x_1}{x_2} + \\frac{y_1}{y_2} \\sim \\frac{x_1y_2+y_1x_2}{x_2y_2}$.', reason: 'by the definition of fraction pair addition' },
        { line: 'Now $\\frac{x_1y_2+y_1x_2}{x_2y_2} \\sim \\frac{y_1x_2+x_1y_2}{y_2x_2}$.', reason: 'by the commutative laws of addition and multiplication' },
        { line: 'Now $\\frac{y_1x_2+x_1y_2}{y_2x_2} \\sim \\frac{y_1}{y_2}+\\frac{x_1}{x_2}$.', reason: 'by the definition of fraction pair addition and the symmetry of fraction pair equivalence' },
        { line: 'So $\\frac{x_1}{x_2}+\\frac{y_1}{y_2} \\sim \\frac{y_1}{y_2}+\\frac{x_1}{x_2}$.', reason: 'by the transitivity of fraction pair equivalence' }
      ]
    },
    {
      id: 'landau-59', method: 'direct proof',
      statement: 'For every $\\frac{x_1}{x_2}$, $\\frac{y_1}{y_2}$, and $\\frac{z_1}{z_2}$, $\\left(\\frac{x_1}{x_2}+\\frac{y_1}{y_2}\\right)+\\frac{z_1}{z_2} \\sim \\frac{x_1}{x_2}+\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)$.',
      idea: 'A sum of three fraction pairs does not depend on how you group the addition.',
      lines: [
        { line: 'Now $\\left(\\frac{x_1}{x_2}+\\frac{y_1}{y_2}\\right)+\\frac{z_1}{z_2} \\sim \\frac{x_1y_2+y_1x_2}{x_2y_2}+\\frac{z_1}{z_2}$.', reason: 'by the definition of fraction pair addition' },
        { line: 'Now $\\frac{x_1y_2+y_1x_2}{x_2y_2}+\\frac{z_1}{z_2} \\sim \\frac{(x_1y_2+y_1x_2)z_2+z_1(x_2y_2)}{(x_2y_2)z_2}$.', reason: 'by the definition of fraction pair addition' },
        { line: 'Now $\\frac{(x_1y_2+y_1x_2)z_2+z_1(x_2y_2)}{(x_2y_2)z_2} \\sim \\frac{((x_1y_2)z_2+(y_1x_2)z_2)+z_1(y_2x_2)}{x_2(y_2z_2)}$.', reason: 'by the distributive law and the associative and commutative laws of multiplication' },
        { line: 'Now $\\frac{((x_1y_2)z_2+(y_1x_2)z_2)+z_1(y_2x_2)}{x_2(y_2z_2)} \\sim \\frac{(x_1(y_2z_2)+(x_2y_1)z_2)+(z_1y_2)x_2}{x_2(y_2z_2)}$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'Now $\\frac{(x_1(y_2z_2)+(x_2y_1)z_2)+(z_1y_2)x_2}{x_2(y_2z_2)} \\sim \\frac{(x_1(y_2z_2)+x_2(y_1z_2))+(z_1y_2)x_2}{x_2(y_2z_2)}$.', reason: 'by the associative law of multiplication' },
        { line: 'Now $\\frac{(x_1(y_2z_2)+x_2(y_1z_2))+(z_1y_2)x_2}{x_2(y_2z_2)} \\sim \\frac{x_1(y_2z_2)+((y_1z_2)x_2+(z_1y_2)x_2)}{x_2(y_2z_2)}$.', reason: 'by the associative law of addition and the commutative law of multiplication' },
        { line: 'Now $\\frac{x_1(y_2z_2)+((y_1z_2)x_2+(z_1y_2)x_2)}{x_2(y_2z_2)} \\sim \\frac{x_1(y_2z_2)+(y_1z_2+z_1y_2)x_2}{x_2(y_2z_2)}$.', reason: 'by the distributive law' },
        { line: 'Now $\\frac{x_1(y_2z_2)+(y_1z_2+z_1y_2)x_2}{x_2(y_2z_2)} \\sim \\frac{x_1}{x_2}+\\frac{y_1z_2+z_1y_2}{y_2z_2}$.', reason: 'by the definition of fraction pair addition' },
        { line: 'Now $\\frac{x_1}{x_2}+\\frac{y_1z_2+z_1y_2}{y_2z_2} \\sim \\frac{x_1}{x_2}+\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)$.', reason: 'by the definition of fraction pair addition and the symmetry of fraction pair equivalence' },
        { line: 'So $\\left(\\frac{x_1}{x_2}+\\frac{y_1}{y_2}\\right)+\\frac{z_1}{z_2} \\sim \\frac{x_1}{x_2}+\\left(\\frac{y_1}{y_2}+\\frac{z_1}{z_2}\\right)$.', reason: 'by the transitivity of fraction pair equivalence' }
      ]
    },
    {
      id: 'landau-60', method: 'direct proof',
      statement: 'For every $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}+\\frac{y_1}{y_2} > \\frac{x_1}{x_2}$.',
      idea: 'A sum of two fraction pairs exceeds the first addend.',
      lines: [
        { line: 'Now $x_1y_2+y_1x_2 > x_1y_2$.', reason: 'since a sum exceeds its first addend' },
        { line: 'So $(x_1y_2+y_1x_2)x_2 > (x_1y_2)x_2$.', reason: 'by the fact that multiplication preserves the order relation' },
        { line: 'Now $(x_1y_2)x_2 = x_1(x_2y_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'So $(x_1y_2+y_1x_2)x_2 > x_1(x_2y_2)$.', reason: 'by substituting the equality into the inequality' },
        { line: 'So $\\frac{x_1y_2+y_1x_2}{x_2y_2} > \\frac{x_1}{x_2}$.', reason: 'by the definition of fraction pair greater-than' },
        { line: 'So $\\frac{x_1}{x_2}+\\frac{y_1}{y_2} > \\frac{x_1}{x_2}$.', reason: 'by the definition of fraction pair addition' }
      ]
    },
    {
      id: 'landau-61', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.',
      idea: 'Adding the same fraction pair to both sides of an inequality keeps the order.',
      lines: [
        { line: 'Since $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $x_1y_2 > y_1x_2$.', reason: 'by the definition of fraction pair greater-than' },
        { line: 'So $(x_1y_2)z_2 > (y_1x_2)z_2$.', reason: 'by the fact that multiplication preserves the order relation' },
        { line: 'Now $(x_1y_2)z_2 = (x_1z_2)y_2$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'Now $(y_1x_2)z_2 = (y_1z_2)x_2$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'So $(x_1z_2)y_2 > (y_1z_2)x_2$.', reason: 'by substituting the equalities into the inequality' },
        { line: 'Now $(z_1x_2)y_2 = (z_1y_2)x_2$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'So $(x_1z_2)y_2 + (z_1x_2)y_2 > (y_1z_2)x_2 + (z_1y_2)x_2$.', reason: 'by addition of a strict and a non-strict inequality' },
        { line: 'Now $(x_1z_2)y_2+(z_1x_2)y_2 = (x_1z_2+z_1x_2)y_2$.', reason: 'by the distributive law' },
        { line: 'Now $(y_1z_2)x_2+(z_1y_2)x_2 = (y_1z_2+z_1y_2)x_2$.', reason: 'by the distributive law' },
        { line: 'So $(x_1z_2+z_1x_2)y_2 > (y_1z_2+z_1y_2)x_2$.', reason: 'by substituting the equalities into the inequality' },
        { line: 'So $(x_1z_2+z_1x_2)(y_2z_2) > (y_1z_2+z_1y_2)(x_2z_2)$.', reason: 'by the fact that multiplication preserves the order relation' },
        { line: 'So $\\frac{x_1z_2+z_1x_2}{x_2z_2} > \\frac{y_1z_2+z_1y_2}{y_2z_2}$.', reason: 'by the definition of fraction pair greater-than' },
        { line: 'Now $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{x_1z_2+z_1x_2}{x_2z_2}$.', reason: 'by the definition of fraction pair addition' },
        { line: 'Now $\\frac{y_1}{y_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1z_2+z_1y_2}{y_2z_2}$.', reason: 'by the definition of fraction pair addition' },
        { line: 'So $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'since fraction pair order does not depend on the representative, for greater-than' }
      ]
    },
    {
      id: 'landau-62', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then respectively $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} < \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.',
      idea: 'Adding the same fraction pair to both sides carries over whichever order relation holds.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair addition preserves strict order' },
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs, taking $\\frac{z_1}{z_2}$ equivalent to itself' },
        { line: 'If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} > \\frac{x_1}{x_2}$.', reason: 'since less-than means greater-than reversed, for fraction pairs' },
        { line: 'So $\\frac{y_1}{y_2}+\\frac{z_1}{z_2} > \\frac{x_1}{x_2}+\\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair addition preserves strict order' },
        { line: 'So $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} < \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'since greater-than means less-than reversed, for fraction pairs' },
        { line: 'So in every case the corresponding relation holds between $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}$ and $\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by exhausting the cases of the hypothesis' }
      ]
    },
    {
      id: 'landau-63', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} < \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, then respectively $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, or $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$.',
      idea: 'Whichever order relation holds after adding the same fraction pair to both sides also holds before adding it.',
      lines: [
        { line: 'Exactly one of $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ holds.', reason: 'by the trichotomy of fraction pair order' },
        { line: 'Each of these three cases forces the matching one of $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} < \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$. These three cases are mutually exclusive.', reason: 'by the fact that fraction pair addition preserves the order relation and the trichotomy of fraction pair order' },
        { line: 'Whichever of the three relations holds between $\\frac{x_1}{x_2}+\\frac{z_1}{z_2}$ and $\\frac{y_1}{y_2}+\\frac{z_1}{z_2}$, only the matching relation between $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$ produces it.', reason: 'since the two case splits correspond one to one and each hypothesis case forces its matching conclusion case' }
      ]
    },
    {
      id: 'landau-64', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.',
      idea: 'The sum of two greater fraction pairs is greater than the sum of the two lesser ones.',
      lines: [
        { line: 'Since $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair addition preserves strict order' },
        { line: 'Now $\\frac{y_1}{y_2}+\\frac{z_1}{z_2} \\sim \\frac{z_1}{z_2}+\\frac{y_1}{y_2}$.', reason: 'by the commutative law of fraction pair addition' },
        { line: 'Since $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, $\\frac{z_1}{z_2}+\\frac{y_1}{y_2} > \\frac{u_1}{u_2}+\\frac{y_1}{y_2}$.', reason: 'by the fact that fraction pair addition preserves strict order' },
        { line: 'Now $\\frac{u_1}{u_2}+\\frac{y_1}{y_2} \\sim \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by the commutative law of fraction pair addition' },
        { line: 'So $\\frac{y_1}{y_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'since fraction pair order does not depend on the representative, for greater-than' },
        { line: 'So $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by the transitivity of strict fraction pair order' }
      ]
    },
    {
      id: 'landau-65', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, or $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} \\gtrsim \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.',
      idea: 'A non-strict inequality and a strict one add to a strict inequality.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs, taking $\\frac{z_1}{z_2}$ equivalent to itself' },
        { line: 'So $\\frac{y_1}{y_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by the fact that fraction pair addition preserves strict order' },
        { line: 'So $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$ in that case.', reason: 'since fraction pair order does not depend on the representative, for greater-than' },
        { line: 'If $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$ and $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair addition preserves strict order' },
        { line: 'Now $\\frac{y_1}{y_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs, taking $\\frac{y_1}{y_2}$ equivalent to itself' },
        { line: 'So $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$ in that case.', reason: 'since fraction pair order does not depend on the representative, for greater-than' },
        { line: 'If neither equivalence sign holds, then $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$, so $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by addition of two strict fraction pair inequalities' },
        { line: 'So in every case $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by exhausting the cases of the hypothesis' }
      ]
    },
    {
      id: 'landau-66', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} \\gtrsim \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\gtrsim \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.',
      idea: 'Two non-strict inequalities add to a non-strict inequality.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs' },
        { line: 'If at least one of $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ or $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$ holds, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by addition of a strict and a non-strict fraction pair inequality' },
        { line: 'So in every case $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\gtrsim \\frac{y_1}{y_2}+\\frac{u_1}{u_2}$.', reason: 'by the definition of greater-than-or-equivalent' }
      ]
    },
    {
      id: 'landau-67', method: 'proof of existence by construction',
      statement: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then the equivalence $\\frac{y_1}{y_2}+\\frac{u_1}{u_2} \\sim \\frac{x_1}{x_2}$ has a solution $\\frac{u_1}{u_2}$. If $\\frac{v_1}{v_2}$ and $\\frac{w_1}{w_2}$ are both solutions, then $\\frac{v_1}{v_2} \\sim \\frac{w_1}{w_2}$.',
      idea: 'The gap by which one fraction pair exceeds another is itself a fraction pair, unique up to equivalence.',
      lines: [
        { line: 'Suppose that $\\frac{v_1}{v_2}$ and $\\frac{w_1}{w_2}$ both satisfy the equivalence.', reason: 'assumed to prove that the two solutions are equivalent' },
        { line: 'So $\\frac{y_1}{y_2}+\\frac{v_1}{v_2} \\sim \\frac{y_1}{y_2}+\\frac{w_1}{w_2}$.', reason: 'each side is equivalent to $\\frac{x_1}{x_2}$, by the symmetry and transitivity of fraction pair equivalence' },
        { line: 'So $\\frac{v_1}{v_2} \\sim \\frac{w_1}{w_2}$.', reason: 'since two sums by the same addend $\\frac{y_1}{y_2}$ are equivalent only when the other two addends are equivalent' },
        { line: 'Since $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $x_1y_2 > y_1x_2$.', reason: 'by the definition of fraction pair greater-than' },
        { line: 'So there exists a number $u$ such that $x_1y_2 = y_1x_2+u$.', reason: 'by the definition of greater-than for natural numbers' },
        { line: 'Set $u_1=u$ and $u_2=x_2y_2$.', reason: 'by the definition of a fraction pair as an ordered pair of natural numbers' },
        { line: 'Now $\\frac{y_1}{y_2} \\sim \\frac{y_1x_2}{y_2x_2}$.', reason: 'by the fact that a fraction pair is equivalent to itself scaled by a common factor' },
        { line: 'So $\\frac{y_1}{y_2}+\\frac{u_1}{u_2} \\sim \\frac{y_1x_2}{y_2x_2}+\\frac{u_1}{u_2}$.', reason: 'by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs, taking $\\frac{u_1}{u_2}$ equivalent to itself' },
        { line: 'Now $\\frac{y_1x_2}{y_2x_2} \\sim \\frac{y_1x_2}{x_2y_2}$.', reason: 'by the commutative law of multiplication' },
        { line: 'So $\\frac{y_1}{y_2}+\\frac{u_1}{u_2} \\sim \\frac{y_1x_2}{x_2y_2}+\\frac{u}{x_2y_2}$.', reason: 'by substituting the equivalence and the definition of $u_2$' },
        { line: 'Now $\\frac{y_1x_2}{x_2y_2}+\\frac{u}{x_2y_2} \\sim \\frac{y_1x_2+u}{x_2y_2}$.', reason: 'since fraction pairs with a common denominator add over that denominator' },
        { line: 'So $\\frac{y_1}{y_2}+\\frac{u_1}{u_2} \\sim \\frac{y_1x_2+u}{x_2y_2}$.', reason: 'by the transitivity of fraction pair equivalence' },
        { line: 'Now $\\frac{y_1x_2+u}{x_2y_2} = \\frac{x_1y_2}{x_2y_2}$.', reason: 'by substituting $x_1y_2 = y_1x_2+u$' },
        { line: 'Now $\\frac{x_1y_2}{x_2y_2} \\sim \\frac{x_1}{x_2}$.', reason: 'since a fraction pair is equivalent to itself scaled by a common factor, and fraction pair equivalence is symmetric' },
        { line: 'So $\\frac{y_1}{y_2}+\\frac{u_1}{u_2} \\sim \\frac{x_1}{x_2}$, so that $\\frac{u_1}{u_2}$ is a solution.', reason: 'by the transitivity of fraction pair equivalence' }
      ]
    }
  ],
  prove: [
    {
      id: 't52-s1', method: 'direct proof',
      statement: 'For every $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}+\\frac{y_1}{y_2} > \\frac{y_1}{y_2}$.',
      check: {
        proof: [
          { line: 'Now $\\frac{x_1}{x_2}+\\frac{y_1}{y_2} \\sim \\frac{y_1}{y_2}+\\frac{x_1}{x_2}$.', reason: 'by the commutative law of fraction pair addition' },
          { line: 'Now $\\frac{y_1}{y_2}+\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$.', reason: 'by the fact that a sum of two fraction pairs exceeds the first addend' },
          { line: 'So $\\frac{x_1}{x_2}+\\frac{y_1}{y_2} > \\frac{y_1}{y_2}$.', reason: 'since fraction pair order does not depend on the representative, for greater-than' }
        ]
      }
    },
    {
      id: 't52-s2', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\gtrsim \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.',
      check: {
        proof: [
          { line: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} > \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair addition preserves strict order' },
          { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair addition gives equivalent results for equivalent fraction pairs, taking $\\frac{z_1}{z_2}$ equivalent to itself' },
          { line: 'So in either case $\\frac{x_1}{x_2}+\\frac{z_1}{z_2} \\gtrsim \\frac{y_1}{y_2}+\\frac{z_1}{z_2}$.', reason: 'by the definition of greater-than-or-equivalent' }
        ]
      }
    },
    {
      id: 't52-s3', method: 'proof of existence by construction',
      statement: 'For every $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, there exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{z_1}{z_2} > \\frac{x_1}{x_2}+\\frac{y_1}{y_2}$.',
      check: {
        proof: [
          { line: 'The sum $\\frac{x_1}{x_2}+\\frac{y_1}{y_2}$ is a fraction pair.', reason: 'by the definition of fraction pair addition' },
          { line: 'There exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{z_1}{z_2} > \\frac{x_1}{x_2}+\\frac{y_1}{y_2}$.', reason: 'by the existence of a fraction pair greater than a given one' }
        ]
      }
    }
  ]
}
