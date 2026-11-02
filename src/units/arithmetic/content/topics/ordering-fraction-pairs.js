// Ordering Fraction Pairs: greater-than and less-than for fraction pairs, and Landau's theorems on their order.
export default {
  number: 51,
  manyParts: false,
  kinds: [{ id: 't51-k1', forms: [] }],
  ideas: [
    {
      name: 'Order of fraction pairs',
      concrete: 'The fraction pair $\\frac{4}{3}$ is greater than $\\frac{9}{7}$, since $4 \\times 7 = 28$ is greater than $3 \\times 9 = 27$.',
      general: 'For fraction pairs $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, $\\frac{x_1}{x_2}$ is **greater than** $\\frac{y_1}{y_2}$, written $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, when $x_1y_2 > y_1x_2$. It is **less than** $\\frac{y_1}{y_2}$, written $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, when $x_1y_2 < y_1x_2$.'
    },
    {
      name: 'Greater-than-or-equivalent and less-than-or-equivalent',
      concrete: 'The fraction pair $\\frac{4}{3}$ is greater-than-or-equivalent to $\\frac{9}{7}$, written $\\frac{4}{3} \\gtrsim \\frac{9}{7}$, since $\\frac{4}{3} > \\frac{9}{7}$.',
      general: 'For fraction pairs $\\frac{x_1}{x_2}$ and $\\frac{y_1}{y_2}$, the relation $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$ (read "**greater-than-or-equivalent**") means $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$. The relation $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$ (read "**less-than-or-equivalent**") means $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$.'
    }
  ],
  proofs: [
    {
      id: 'landau-41', method: 'direct proof',
      statement: 'For every fraction pair $\\frac{x_1}{x_2}$ and every fraction pair $\\frac{y_1}{y_2}$, exactly one of $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ is the case.',
      idea: 'Exactly one order relation holds between two fraction pairs, since exactly one holds between their cross products.',
      lines: [
        { line: 'Exactly one of $x_1y_2 = y_1x_2$, $x_1y_2 > y_1x_2$, $x_1y_2 < y_1x_2$ holds.', reason: 'by the trichotomy law of order' },
        { line: 'So exactly one of $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ holds.', reason: 'by the definitions of fraction pair equivalence, greater-than, and less-than' }
      ]
    },
    {
      id: 'landau-42', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} < \\frac{x_1}{x_2}$.',
      idea: 'If one fraction pair is greater than another, the other is less than it. Both relations read the same cross products in reverse.',
      lines: [
        { line: 'Since $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $x_1y_2 > y_1x_2$.', reason: 'by the definition of fraction pair greater-than' },
        { line: 'So $y_1x_2 < x_1y_2$.', reason: 'by the fact that greater-than is less-than reversed' },
        { line: 'So $\\frac{y_1}{y_2} < \\frac{x_1}{x_2}$.', reason: 'by the definition of fraction pair less-than' }
      ]
    },
    {
      id: 'landau-43', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} > \\frac{x_1}{x_2}$.',
      idea: 'If one fraction pair is less than another, the other is greater than it, for the same reason.',
      lines: [
        { line: 'Since $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, $x_1y_2 < y_1x_2$.', reason: 'by the definition of fraction pair less-than' },
        { line: 'So $y_1x_2 > x_1y_2$.', reason: 'by the fact that less-than is greater-than reversed' },
        { line: 'So $\\frac{y_1}{y_2} > \\frac{x_1}{x_2}$.', reason: 'by the definition of fraction pair greater-than' }
      ]
    },
    {
      id: 'landau-44', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$, and $\\frac{y_1}{y_2} \\sim \\frac{u_1}{u_2}$, then $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$.',
      idea: 'Order between fraction pairs carries over to every equivalent pair, since the cross products only change by equal factors.',
      lines: [
        { line: 'Since $\\frac{y_1}{y_2} \\sim \\frac{u_1}{u_2}$, $y_1u_2 = u_1y_2$.', reason: 'by the definition of fraction pair equivalence' },
        { line: 'Since $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$, $z_1x_2 = x_1z_2$.', reason: 'by the definition of fraction pair equivalence' },
        { line: 'Since $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, $x_1y_2 > y_1x_2$.', reason: 'by the definition of fraction pair greater-than' },
        { line: 'So $(y_1u_2)(z_1x_2) = (u_1y_2)(x_1z_2)$.', reason: 'by substituting equals for equals' },
        { line: 'The product $(y_1u_2)(z_1x_2)$ equals $(y_1x_2)(z_1u_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'The product $(u_1y_2)(x_1z_2)$ equals $(u_1z_2)(x_1y_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'So $(y_1x_2)(z_1u_2) = (u_1z_2)(x_1y_2)$.', reason: 'by the transitivity of equality' },
        { line: 'Since $x_1y_2 > y_1x_2$, $(u_1z_2)(x_1y_2) > (u_1z_2)(y_1x_2)$.', reason: 'by the fact that multiplication preserves the order relation' },
        { line: 'So $(y_1x_2)(z_1u_2) > (u_1z_2)(y_1x_2)$.', reason: 'by substituting the equality into the inequality' },
        { line: 'So $z_1u_2 > u_1z_2$.', reason: 'by the fact that cancelling a common factor preserves the order relation' },
        { line: 'So $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$.', reason: 'by the definition of fraction pair greater-than' }
      ]
    },
    {
      id: 'landau-45', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$, and $\\frac{y_1}{y_2} \\sim \\frac{u_1}{u_2}$, then $\\frac{z_1}{z_2} < \\frac{u_1}{u_2}$.',
      idea: 'Order carries over under equivalence for less-than the same way it does for greater-than.',
      lines: [
        { line: 'Since $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, $\\frac{y_1}{y_2} > \\frac{x_1}{x_2}$.', reason: 'by the fact that less-than is greater-than reversed, for fraction pairs' },
        { line: 'Since $\\frac{y_1}{y_2} \\sim \\frac{u_1}{u_2}$ and $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$, $\\frac{u_1}{u_2} > \\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair order does not depend on the representative, for greater-than' },
        { line: 'So $\\frac{z_1}{z_2} < \\frac{u_1}{u_2}$.', reason: 'by the fact that greater-than is less-than reversed, for fraction pairs' }
      ]
    },
    {
      id: 'landau-46', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$, and $\\frac{y_1}{y_2} \\sim \\frac{u_1}{u_2}$, then $\\frac{z_1}{z_2} \\gtrsim \\frac{u_1}{u_2}$.',
      idea: 'Greater-than-or-equivalent carries over to equivalent pairs, whichever of its two cases holds.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{z_1}{z_2} > \\frac{u_1}{u_2}$.', reason: 'by the fact that fraction pair order does not depend on the representative, for greater-than' },
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{z_1}{z_2} \\sim \\frac{x_1}{x_2}$.', reason: 'by the symmetry of fraction pair equivalence' },
        { line: 'So $\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}$.', reason: 'by the transitivity of fraction pair equivalence' },
        { line: 'So $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$.', reason: 'by the transitivity of fraction pair equivalence' },
        { line: 'So in either case $\\frac{z_1}{z_2} \\gtrsim \\frac{u_1}{u_2}$.', reason: 'by the definition of greater-than-or-equivalent' }
      ]
    },
    {
      id: 'landau-47', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$, $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$, and $\\frac{y_1}{y_2} \\sim \\frac{u_1}{u_2}$, then $\\frac{z_1}{z_2} \\lesssim \\frac{u_1}{u_2}$.',
      idea: 'Less-than-or-equivalent carries over to equivalent pairs, whichever of its two cases holds.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then $\\frac{z_1}{z_2} < \\frac{u_1}{u_2}$.', reason: 'by the fact that fraction pair order does not depend on the representative, for less-than' },
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{z_1}{z_2} \\sim \\frac{x_1}{x_2}$.', reason: 'by the symmetry of fraction pair equivalence' },
        { line: 'So $\\frac{z_1}{z_2} \\sim \\frac{y_1}{y_2}$.', reason: 'by the transitivity of fraction pair equivalence' },
        { line: 'So $\\frac{z_1}{z_2} \\sim \\frac{u_1}{u_2}$.', reason: 'by the transitivity of fraction pair equivalence' },
        { line: 'So in either case $\\frac{z_1}{z_2} \\lesssim \\frac{u_1}{u_2}$.', reason: 'by the definition of less-than-or-equivalent' }
      ]
    },
    {
      id: 'landau-48', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} \\lesssim \\frac{x_1}{x_2}$.',
      idea: 'Reversing a greater-than-or-equivalent gives a less-than-or-equivalent, in either of its two cases.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} < \\frac{x_1}{x_2}$.', reason: 'by the fact that greater-than is less-than reversed, for fraction pairs' },
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} \\sim \\frac{x_1}{x_2}$.', reason: 'by the symmetry of fraction pair equivalence' },
        { line: 'So in either case $\\frac{y_1}{y_2} \\lesssim \\frac{x_1}{x_2}$.', reason: 'by the definition of less-than-or-equivalent' }
      ]
    },
    {
      id: 'landau-49', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} \\gtrsim \\frac{x_1}{x_2}$.',
      idea: 'Reversing a less-than-or-equivalent gives a greater-than-or-equivalent, in either of its two cases.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} > \\frac{x_1}{x_2}$.', reason: 'by the fact that less-than is greater-than reversed, for fraction pairs' },
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{y_1}{y_2} \\sim \\frac{x_1}{x_2}$.', reason: 'by the symmetry of fraction pair equivalence' },
        { line: 'So in either case $\\frac{y_1}{y_2} \\gtrsim \\frac{x_1}{x_2}$.', reason: 'by the definition of greater-than-or-equivalent' }
      ]
    },
    {
      id: 'landau-50', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} < \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} < \\frac{z_1}{z_2}$.',
      idea: 'Less-than between fraction pairs chains, since the cross products it rests on chain.',
      lines: [
        { line: 'Since $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, $x_1y_2 < y_1x_2$.', reason: 'by the definition of fraction pair less-than' },
        { line: 'Since $\\frac{y_1}{y_2} < \\frac{z_1}{z_2}$, $y_1z_2 < z_1y_2$.', reason: 'by the definition of fraction pair less-than' },
        { line: 'So $(x_1y_2)(y_1z_2) < (y_1x_2)(z_1y_2)$.', reason: 'by multiplication of two strict inequalities' },
        { line: 'The product $(x_1y_2)(y_1z_2)$ equals $(x_1z_2)(y_1y_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'The product $(y_1x_2)(z_1y_2)$ equals $(z_1x_2)(y_1y_2)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'So $(x_1z_2)(y_1y_2) < (z_1x_2)(y_1y_2)$.', reason: 'by substituting the equalities into the inequality' },
        { line: 'So $x_1z_2 < z_1x_2$.', reason: 'by the fact that cancelling a common factor preserves the order relation' },
        { line: 'So $\\frac{x_1}{x_2} < \\frac{z_1}{z_2}$.', reason: 'by the definition of fraction pair less-than' }
      ]
    },
    {
      id: 'landau-51', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} < \\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} \\lesssim \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} < \\frac{z_1}{z_2}$.',
      idea: 'A chain of two order relations gives a strict order whenever at least one link is strict.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} < \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} < \\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair order does not depend on the representative, for less-than' },
        { line: 'If $\\frac{y_1}{y_2} \\sim \\frac{z_1}{z_2}$ and $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2} < \\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair order does not depend on the representative, for less-than' },
        { line: 'If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} < \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} < \\frac{z_1}{z_2}$.', reason: 'by the transitivity of strict fraction pair order' },
        { line: 'So in every case $\\frac{x_1}{x_2} < \\frac{z_1}{z_2}$.', reason: 'by exhausting the cases of the hypothesis' }
      ]
    },
    {
      id: 'landau-52', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} \\lesssim \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} \\lesssim \\frac{z_1}{z_2}$.',
      idea: 'A chain of two non-strict order relations gives a non-strict order.',
      lines: [
        { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} \\sim \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$.', reason: 'by the transitivity of fraction pair equivalence' },
        { line: 'If $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} \\lesssim \\frac{z_1}{z_2}$, and at least one of $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ or $\\frac{y_1}{y_2} < \\frac{z_1}{z_2}$ holds, then $\\frac{x_1}{x_2} < \\frac{z_1}{z_2}$.', reason: 'by the transitivity of fraction pair order with one non-strict hypothesis' },
        { line: 'So in every case $\\frac{x_1}{x_2} \\lesssim \\frac{z_1}{z_2}$.', reason: 'by the definition of less-than-or-equivalent' }
      ]
    },
    {
      id: 'landau-53', method: 'proof of existence by construction',
      statement: 'For every fraction pair $\\frac{x_1}{x_2}$, there exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{z_1}{z_2} > \\frac{x_1}{x_2}$.',
      idea: 'Doubling the numerator of a fraction pair gives a fraction pair greater than it.',
      lines: [
        { line: 'The product $(x_1+x_1)x_2$ equals $x_1x_2 + x_1x_2$.', reason: 'by the distributive law' },
        { line: 'The sum $x_1x_2 + x_1x_2$ is greater than $x_1x_2$.', reason: 'by the fact that a sum exceeds its first addend' },
        { line: 'So $(x_1+x_1)x_2 > x_1x_2$.', reason: 'by substituting the equality into the inequality' },
        { line: 'So $\\frac{x_1+x_1}{x_2} > \\frac{x_1}{x_2}$.', reason: 'by the definition of fraction pair greater-than' }
      ]
    },
    {
      id: 'landau-54', method: 'proof of existence by construction',
      statement: 'For every fraction pair $\\frac{x_1}{x_2}$, there exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{z_1}{z_2} < \\frac{x_1}{x_2}$.',
      idea: 'Doubling the denominator of a fraction pair gives a fraction pair less than it.',
      lines: [
        { line: 'The product $x_1x_2$ is less than the sum $x_1x_2 + x_1x_2$.', reason: 'by the fact that a sum exceeds its first addend' },
        { line: 'The sum $x_1x_2 + x_1x_2$ equals $x_1(x_2+x_2)$.', reason: 'by the distributive law' },
        { line: 'So $x_1x_2 < x_1(x_2+x_2)$.', reason: 'by substituting the equality into the inequality' },
        { line: 'So $\\frac{x_1}{x_2+x_2} < \\frac{x_1}{x_2}$.', reason: 'by the definition of fraction pair less-than' }
      ]
    },
    {
      id: 'landau-55', method: 'proof of existence by construction',
      statement: 'If $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, then there exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{x_1}{x_2} < \\frac{z_1}{z_2} < \\frac{y_1}{y_2}$.',
      idea: 'Adding the numerators and denominators of a lesser and a greater fraction pair gives a fraction pair strictly between them.',
      lines: [
        { line: 'Since $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$, $x_1y_2 < y_1x_2$.', reason: 'by the definition of fraction pair less-than' },
        { line: 'So $x_1x_2 + x_1y_2 < x_1x_2 + y_1x_2$.', reason: 'by the fact that addition preserves the order relation' },
        { line: 'The sum $x_1x_2 + x_1y_2$ equals $x_1(x_2+y_2)$.', reason: 'by the distributive law' },
        { line: 'The sum $x_1x_2 + y_1x_2$ equals $(x_1+y_1)x_2$.', reason: 'by the distributive law' },
        { line: 'So $x_1(x_2+y_2) < (x_1+y_1)x_2$.', reason: 'by substituting the equalities into the inequality' },
        { line: 'So $\\frac{x_1}{x_2} < \\frac{x_1+y_1}{x_2+y_2}$.', reason: 'by the definition of fraction pair less-than' },
        { line: 'So $x_1y_2 + y_1y_2 < y_1x_2 + y_1y_2$.', reason: 'by the fact that addition preserves the order relation' },
        { line: 'The sum $x_1y_2 + y_1y_2$ equals $(x_1+y_1)y_2$.', reason: 'by the distributive law' },
        { line: 'The sum $y_1x_2 + y_1y_2$ equals $y_1(x_2+y_2)$.', reason: 'by the distributive law' },
        { line: 'So $(x_1+y_1)y_2 < y_1(x_2+y_2)$.', reason: 'by substituting the equalities into the inequality' },
        { line: 'So $\\frac{x_1+y_1}{x_2+y_2} < \\frac{y_1}{y_2}$.', reason: 'by the definition of fraction pair less-than' },
        { line: 'So the fraction pair $\\frac{x_1+y_1}{x_2+y_2}$ satisfies $\\frac{x_1}{x_2} < \\frac{x_1+y_1}{x_2+y_2} < \\frac{y_1}{y_2}$.', reason: 'by joining the two inequalities already shown' }
      ]
    }
  ],
  prove: [
    {
      id: 't51-s1', method: 'direct proof',
      statement: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$ and $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$.',
      check: {
        proof: [
          { line: 'Since $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$, either $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$.', reason: 'by the hypothesis, which is the second alternative' },
          { line: 'So $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$.', reason: 'by the definition of greater-than-or-equivalent' },
          { line: 'Likewise $\\frac{x_1}{x_2} < \\frac{y_1}{y_2}$ or $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$.', reason: 'by the hypothesis, which is the second alternative' },
          { line: 'So $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$.', reason: 'by the definition of less-than-or-equivalent' },
          { line: 'So $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$ and $\\frac{x_1}{x_2} \\lesssim \\frac{y_1}{y_2}$.', reason: 'combining the previous lines' }
        ]
      }
    },
    {
      id: 't51-s2', method: 'proof by cases',
      statement: 'If $\\frac{x_1}{x_2} \\gtrsim \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} > \\frac{z_1}{z_2}$, or $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} \\gtrsim \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} > \\frac{z_1}{z_2}$.',
      check: {
        proof: [
          { line: 'If $\\frac{x_1}{x_2} \\sim \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} > \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} > \\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair order does not depend on the representative, for greater-than' },
          { line: 'If $\\frac{y_1}{y_2} \\sim \\frac{z_1}{z_2}$ and $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$, then $\\frac{x_1}{x_2} > \\frac{z_1}{z_2}$.', reason: 'by the fact that fraction pair order does not depend on the representative, for greater-than' },
          { line: 'If $\\frac{x_1}{x_2} > \\frac{y_1}{y_2}$ and $\\frac{y_1}{y_2} > \\frac{z_1}{z_2}$, then $\\frac{x_1}{x_2} > \\frac{z_1}{z_2}$.', reason: 'by the transitivity of strict fraction pair order' },
          { line: 'So in every case $\\frac{x_1}{x_2} > \\frac{z_1}{z_2}$.', reason: 'by exhausting the cases of the hypothesis' }
        ]
      }
    },
    {
      id: 't51-s3', method: 'proof of existence by construction',
      statement: 'For every fraction pair $\\frac{x_1}{x_2}$, there exists a fraction pair $\\frac{z_1}{z_2}$ such that $\\frac{x_1}{x_2} \\sim \\frac{z_1}{z_2}$ and $z_2 > x_2$.',
      check: {
        proof: [
          { line: 'The fraction pair $\\frac{x_1}{x_2}$ is equivalent to $\\frac{x_1\\times2}{x_2\\times2}$.', reason: 'by the fact that a fraction pair is equivalent to itself scaled by a common factor, with the factor $2$' },
          { line: 'The product $x_2\\times2$ equals $x_2 + x_2$.', reason: 'the defining property $x_2\\times2=x_2+x_2$ of multiplication' },
          { line: 'The sum $x_2 + x_2$ is greater than $x_2$.', reason: 'by the fact that a sum exceeds its first addend' },
          { line: 'So $x_2\\times2 > x_2$.', reason: 'by substituting the equality into the inequality' },
          { line: 'So the fraction pair $\\frac{x_1\\times2}{x_2\\times2}$ satisfies $\\frac{x_1}{x_2} \\sim \\frac{x_1\\times2}{x_2\\times2}$ and $x_2\\times2 > x_2$.', reason: 'combining the previous lines' }
        ]
      }
    }
  ]
}
