// Order of the Natural Numbers: order defined from addition on the Peano axioms, the proofs to
// read from Landau chapter 1 section 3, and the statements to prove from the Natural Number
// Game's Implication, AdvAddition, LessOrEqual, and Algorithm worlds. Landau's natural numbers
// start at 1, and the successor of x is x'.
export default {
  number: 42,
  manyParts: false,
  ideas: [
    {
      name: 'Order defined from addition',
      concrete: '$9>4$, because $9=4+5$. Also $4<9$, because $9=4+5$ read the other way.',
      general: 'For natural numbers $x$ and $y$, the relation $x \\geq y$ means $x>y$ or $x=y$. The relation $x \\leq y$ means $x<y$ or $x=y$.',
      definitions: [
        'The number $x$ is **greater than** $y$, written $x>y$, when there exists $u$ such that $x=y+u$.',
        'The number $x$ is **less than** $y$, written $x<y$, when there exists $v$ such that $y=x+v$.'
      ]
    },
    {
      name: 'Order in the Natural Number Game',
      concrete: 'The Natural Number Game writes $0 \\leq x$ for every $x$, where Landau has no 0 and starts his order from 1.',
      general: 'The order relation of the Natural Number Game is Landau\'s, extended down to 0.'
    }
  ],
  kinds: [
    { id: 't42-k1', forms: [] }
  ],
  proofs: [
    {
      id: 'landau-10', method: 'direct proof',
      idea: 'Substituting the order definitions into the trichotomy of addition gives the trichotomy of order.',
      statement: 'For every $x$ and $y$, exactly one of $x=y$, $x>y$, $x<y$ holds.',
      lines: [
        { line: 'For every $x$ and $y$, exactly one of these holds: $x=y$; $x=y+u$ for some $u$; $y=x+v$ for some $v$.', reason: 'by the trichotomy of addition' },
        { line: 'The condition that there exists $u$ such that $x=y+u$ means $x>y$.', reason: 'by the definition of $>$' },
        { line: 'The condition that there exists $v$ such that $y=x+v$ means $x<y$.', reason: 'by the definition of $<$' },
        { line: 'Therefore, for every $x$ and $y$, exactly one of $x=y$, $x>y$, $x<y$ holds.', reason: 'by substituting the definitions of $>$ and $<$ into the trichotomy of addition' }
      ]
    },
    {
      id: 'landau-11', method: 'direct proof',
      idea: 'The two order definitions are mirror images of each other, so one gives the other directly.',
      statement: 'If $x>y$, then $y<x$.',
      lines: [
        { line: 'Suppose that $x>y$.', reason: 'the hypothesis' },
        { line: 'Then $x=y+u$ for some $u$.', reason: 'by the definition of $>$' },
        { line: 'So $y<x$.', reason: 'by the definition of $<$, since $x=y+u$ for some $u$' }
      ]
    },
    {
      id: 'landau-12', method: 'direct proof',
      idea: 'The two order definitions are mirror images of each other, so one gives the other directly.',
      statement: 'If $x<y$, then $y>x$.',
      lines: [
        { line: 'Suppose that $x<y$.', reason: 'the hypothesis' },
        { line: 'Then $y=x+v$ for some $v$.', reason: 'by the definition of $<$' },
        { line: 'So $y>x$.', reason: 'by the definition of $>$, since $y=x+v$ for some $v$' }
      ]
    },
    {
      id: 'landau-13', method: 'proof by cases',
      idea: 'Splitting on the two ways $\\geq$ can hold and rewriting each case as $\\leq$ covers every case.',
      statement: 'If $x \\geq y$, then $y \\leq x$.',
      lines: [
        { line: 'Suppose that $x \\geq y$.', reason: 'the hypothesis' },
        { line: 'Then $x>y$ or $x=y$.', reason: 'by the definition of $\\geq$' },
        { line: 'Suppose that $x>y$.', reason: 'the first case' },
        { line: 'Then $y<x$.', reason: 'by the fact that greater-than means less-than reversed' },
        { line: 'So $y \\leq x$.', reason: 'by the definition of $\\leq$, since $y<x$' },
        { line: 'Suppose instead that $x=y$.', reason: 'the second case' },
        { line: 'Then $y=x$.', reason: 'by the symmetry of equality' },
        { line: 'So $y \\leq x$.', reason: 'by the definition of $\\leq$, since $y=x$' },
        { line: 'Therefore, if $x \\geq y$, then $y \\leq x$.', reason: 'since $y \\leq x$ holds in both cases' }
      ]
    },
    {
      id: 'landau-14', method: 'proof by cases',
      idea: 'Splitting on the two ways $\\leq$ can hold and rewriting each case as $\\geq$ covers every case.',
      statement: 'If $x \\leq y$, then $y \\geq x$.',
      lines: [
        { line: 'Suppose that $x \\leq y$.', reason: 'the hypothesis' },
        { line: 'Then $x<y$ or $x=y$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose that $x<y$.', reason: 'the first case' },
        { line: 'Then $y>x$.', reason: 'by the fact that less-than means greater-than reversed' },
        { line: 'So $y \\geq x$.', reason: 'by the definition of $\\geq$, since $y>x$' },
        { line: 'Suppose instead that $x=y$.', reason: 'the second case' },
        { line: 'Then $y=x$.', reason: 'by the symmetry of equality' },
        { line: 'So $y \\geq x$.', reason: 'by the definition of $\\geq$, since $y=x$' },
        { line: 'Therefore, if $x \\leq y$, then $y \\geq x$.', reason: 'since $y \\geq x$ holds in both cases' }
      ]
    },
    {
      id: 'landau-15', method: 'direct proof',
      idea: 'Chaining the two existing differences with the associative law gives one difference for the whole chain.',
      statement: 'If $x<y$ and $y<z$, then $x<z$.',
      lines: [
        { line: 'Suppose that $x<y$ and $y<z$.', reason: 'the hypothesis' },
        { line: 'Then $y=x+v$ for some $v$.', reason: 'by the definition of $<$' },
        { line: 'Then $z=y+w$ for some $w$.', reason: 'by the definition of $<$' },
        { line: 'Then $z=(x+v)+w$.', reason: 'by substituting $y=x+v$ into $z=y+w$' },
        { line: 'Then $(x+v)+w=x+(v+w)$.', reason: 'by the associative law of addition' },
        { line: 'So $z=x+(v+w)$.', reason: 'by the transitivity of equality, from $z=(x+v)+w$ and $(x+v)+w=x+(v+w)$' },
        { line: 'Therefore $x<z$.', reason: 'by the definition of $<$, since $z=x+(v+w)$ for the number $v+w$' }
      ]
    },
    {
      id: 'landau-16', method: 'proof by cases',
      idea: 'Split whichever hypothesis carries $\\leq$ into its two cases and use strict transitivity when both are strict.',
      statement: 'If $x \\leq y$ and $y<z$, or if $x<y$ and $y \\leq z$, then $x<z$.',
      lines: [
        { line: 'Suppose that $x \\leq y$ and $y<z$.', reason: 'the first hypothesis' },
        { line: 'Then $x<y$ or $x=y$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose that $x=y$.', reason: 'the first sub-case' },
        { line: 'So $x<z$.', reason: 'since $x=y$ and $y<z$' },
        { line: 'Suppose instead that $x<y$.', reason: 'the second sub-case' },
        { line: 'So $x<z$.', reason: 'by the transitivity of strict order, applied to $x<y$ and $y<z$' },
        { line: 'Suppose instead that $x<y$ and $y \\leq z$.', reason: 'the second hypothesis' },
        { line: 'Then $y<z$ or $y=z$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose that $y=z$.', reason: 'the first sub-case' },
        { line: 'So $x<z$.', reason: 'since $x<y$ and $y=z$' },
        { line: 'Suppose instead that $y<z$.', reason: 'the second sub-case' },
        { line: 'So $x<z$.', reason: 'by the transitivity of strict order, applied to $x<y$ and $y<z$' },
        { line: 'Therefore, in either hypothesis, $x<z$.', reason: 'since $x<z$ holds in every sub-case' }
      ]
    },
    {
      id: 'landau-17', method: 'proof by cases',
      idea: 'Splitting both hypotheses into equality or strict inequality and handling the all-equal case apart from the rest covers every combination.',
      statement: 'If $x \\leq y$ and $y \\leq z$, then $x \\leq z$.',
      lines: [
        { line: 'Suppose that $x \\leq y$ and $y \\leq z$.', reason: 'the hypothesis' },
        { line: 'Then $x<y$ or $x=y$.', reason: 'by the definition of $\\leq$' },
        { line: 'Then $y<z$ or $y=z$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose that $x=y$ and $y=z$.', reason: 'the case where both are equalities' },
        { line: 'Then $x=z$.', reason: 'by the transitivity of equality, from $x=y$ and $y=z$' },
        { line: 'So $x \\leq z$.', reason: 'by the definition of $\\leq$, since $x=z$' },
        { line: 'Suppose instead that $x<y$, or that $y<z$.', reason: 'the case where at least one is a strict inequality' },
        { line: 'Then $x<z$.', reason: 'by the fact that transitivity holds with one non-strict hypothesis, applied to $x \\leq y$ and $y<z$, or to $x<y$ and $y \\leq z$' },
        { line: 'So $x \\leq z$.', reason: 'by the definition of $\\leq$, since $x<z$' },
        { line: 'Therefore $x \\leq z$.', reason: 'since $x \\leq z$ holds in every case' }
      ]
    },
    {
      id: 'landau-18', method: 'direct proof',
      idea: 'A sum equals itself, and that equality already gives the number the definition of greater-than asks for.',
      statement: 'For every $x$ and $y$, $x+y>x$.',
      lines: [
        { line: 'The sum $x+y$ equals itself.', reason: 'by the reflexivity of equality' },
        { line: 'Therefore $x+y>x$.', reason: 'by the definition of $>$, since $x+y=x+y$ for the number $y$' }
      ]
    },
    {
      id: 'landau-19', method: 'proof by cases',
      idea: 'Add the same number to both sides in each of the three order cases. Associativity and commutativity give the matching case for the sums.',
      statement: 'For every $x$, $y$, and $z$: if $x>y$ then $x+z>y+z$; if $x=y$ then $x+z=y+z$; and if $x<y$ then $x+z<y+z$.',
      lines: [
        { line: 'Suppose that $x>y$.', reason: 'the first case' },
        { line: 'Then $x=y+u$ for some $u$.', reason: 'by the definition of $>$' },
        { line: 'Then $x+z=(y+u)+z$.', reason: 'by substituting $x=y+u$' },
        { line: 'Then $(y+u)+z=(u+y)+z$.', reason: 'by the commutative law of addition' },
        { line: 'Then $(u+y)+z=u+(y+z)$.', reason: 'by the associative law of addition' },
        { line: 'Then $u+(y+z)=(y+z)+u$.', reason: 'by the commutative law of addition' },
        { line: 'So $x+z=(y+z)+u$.', reason: 'by the transitivity of equality, from the chain $x+z=(y+u)+z=(u+y)+z=u+(y+z)=(y+z)+u$' },
        { line: 'So $x+z>y+z$.', reason: 'by the definition of $>$, since $x+z=(y+z)+u$ for the number $u$' },
        { line: 'Suppose instead that $x=y$.', reason: 'the second case' },
        { line: 'So $x+z=y+z$.', reason: 'by substituting $x=y$' },
        { line: 'Suppose instead that $x<y$.', reason: 'the third case' },
        { line: 'Then $y>x$.', reason: 'by the fact that less-than means greater-than reversed' },
        { line: 'Then $y+z>x+z$.', reason: 'by the case proved above, applied to $y>x$' },
        { line: 'So $x+z<y+z$.', reason: 'by the fact that greater-than means less-than reversed, applied to $y+z>x+z$' },
        { line: 'Therefore, if $x>y$ then $x+z>y+z$; if $x=y$ then $x+z=y+z$; and if $x<y$ then $x+z<y+z$.', reason: 'since each case gives the corresponding conclusion' }
      ]
    },
    {
      id: 'landau-20', method: 'proof by cases',
      idea: 'The three cases for x and y match the three cases for the sums one to one. So each case determines the other.',
      statement: 'For every $x$, $y$, and $z$: if $x+z>y+z$ then $x>y$; if $x+z=y+z$ then $x=y$; and if $x+z<y+z$ then $x<y$.',
      lines: [
        { line: 'Exactly one of $x>y$, $x=y$, $x<y$ holds.', reason: 'by the trichotomy law of order' },
        { line: 'Exactly one of $x+z>y+z$, $x+z=y+z$, $x+z<y+z$ holds.', reason: 'by the trichotomy law of order, applied to $x+z$ and $y+z$' },
        { line: 'Addition preserves the order relation: $x>y$ gives $x+z>y+z$, $x=y$ gives $x+z=y+z$, and $x<y$ gives $x+z<y+z$.', reason: 'by the fact that addition preserves the order relation' },
        { line: 'So each case for $x$ and $y$ corresponds to exactly one case for $x+z$ and $y+z$. No two different cases for $x$ and $y$ give the same case for $x+z$ and $y+z$.', reason: 'since both sets of three cases are mutually exclusive' },
        { line: 'Therefore, if $x+z>y+z$ then $x>y$; if $x+z=y+z$ then $x=y$; and if $x+z<y+z$ then $x<y$.', reason: 'since the case for $x+z$ and $y+z$ determines which case holds for $x$ and $y$' }
      ]
    },
    {
      id: 'landau-21', method: 'direct proof',
      idea: 'Add one inequality on the right and the other on the left, then chain the two results using commutativity.',
      statement: 'If $x>y$ and $z>u$, then $x+z>y+u$.',
      lines: [
        { line: 'Suppose that $x>y$ and $z>u$.', reason: 'the hypothesis' },
        { line: 'Then $x+z>y+z$.', reason: 'by the fact that addition preserves the order relation, applied to $x>y$' },
        { line: 'Then $y+z=z+y$.', reason: 'by the commutative law of addition' },
        { line: 'Then $z+y>u+y$.', reason: 'by the fact that addition preserves the order relation, applied to $z>u$' },
        { line: 'Then $u+y=y+u$.', reason: 'by the commutative law of addition' },
        { line: 'So $y+z>y+u$.', reason: 'by substituting $y+z=z+y$ and $u+y=y+u$ into $z+y>u+y$' },
        { line: 'Therefore $x+z>y+u$.', reason: 'by the transitivity of strict order, applied to $x+z>y+z$ and $y+z>y+u$' }
      ]
    },
    {
      id: 'landau-22', method: 'proof by cases',
      idea: 'Split whichever hypothesis carries $\\geq$ into its two cases and use the two-strict-inequalities result when both are strict.',
      statement: 'If $x \\geq y$ and $z>u$, or if $x>y$ and $z \\geq u$, then $x+z>y+u$.',
      lines: [
        { line: 'Suppose that $x \\geq y$ and $z>u$.', reason: 'the first hypothesis' },
        { line: 'Then $x>y$ or $x=y$.', reason: 'by the definition of $\\geq$' },
        { line: 'Suppose that $x=y$.', reason: 'the first sub-case' },
        { line: 'Then $x+z=y+z$.', reason: 'by the fact that addition preserves the order relation, applied to $x=y$' },
        { line: 'Then $y+z>y+u$.', reason: 'by the fact that addition preserves the order relation, applied to $z>u$, and the commutative law of addition' },
        { line: 'So $x+z>y+u$.', reason: 'by substituting $x+z=y+z$ into $y+z>y+u$' },
        { line: 'Suppose instead that $x>y$.', reason: 'the second sub-case' },
        { line: 'So $x+z>y+u$.', reason: 'by addition of two strict inequalities, applied to $x>y$ and $z>u$' },
        { line: 'Suppose instead that $x>y$ and $z \\geq u$.', reason: 'the second hypothesis' },
        { line: 'Then $z>u$ or $z=u$.', reason: 'by the definition of $\\geq$' },
        { line: 'Suppose that $z=u$.', reason: 'the first sub-case' },
        { line: 'Then $x+z>y+z$.', reason: 'by the fact that addition preserves the order relation, applied to $x>y$' },
        { line: 'So $x+z>y+u$.', reason: 'by substituting $z=u$ into $x+z>y+z$' },
        { line: 'Suppose instead that $z>u$.', reason: 'the second sub-case' },
        { line: 'So $x+z>y+u$.', reason: 'by addition of two strict inequalities, applied to $x>y$ and $z>u$' },
        { line: 'Therefore, in either hypothesis, $x+z>y+u$.', reason: 'since $x+z>y+u$ holds in every sub-case' }
      ]
    },
    {
      id: 'landau-23', method: 'proof by cases',
      idea: 'Splitting both hypotheses into equality or strict inequality and handling the all-equal case apart from the rest covers every combination.',
      statement: 'If $x \\geq y$ and $z \\geq u$, then $x+z \\geq y+u$.',
      lines: [
        { line: 'Suppose that $x \\geq y$ and $z \\geq u$.', reason: 'the hypothesis' },
        { line: 'Then $x>y$ or $x=y$.', reason: 'by the definition of $\\geq$' },
        { line: 'Then $z>u$ or $z=u$.', reason: 'by the definition of $\\geq$' },
        { line: 'Suppose that $x=y$ and $z=u$.', reason: 'the case where both are equalities' },
        { line: 'Then $x+z=y+u$.', reason: 'by substituting $x=y$ and $z=u$' },
        { line: 'So $x+z \\geq y+u$.', reason: 'by the definition of $\\geq$, since $x+z=y+u$' },
        { line: 'Suppose instead that $x>y$, or that $z>u$.', reason: 'the case where at least one is a strict inequality' },
        { line: 'Then $x+z>y+u$.', reason: 'by addition of a strict and a non-strict inequality, applied to $x \\geq y$ and $z>u$, or to $x>y$ and $z \\geq u$' },
        { line: 'So $x+z \\geq y+u$.', reason: 'by the definition of $\\geq$, since $x+z>y+u$' },
        { line: 'Therefore $x+z \\geq y+u$.', reason: 'since $x+z \\geq y+u$ holds in every case' }
      ]
    },
    {
      id: 'landau-24', method: 'proof by cases',
      idea: 'Split on whether x is 1 or a successor, and write each successor as a number plus 1.',
      statement: 'For every $x$, $x \\geq 1$.',
      lines: [
        { line: 'Suppose that $x=1$.', reason: 'the first case' },
        { line: 'So $x \\geq 1$.', reason: 'by the definition of $\\geq$, since $x=1$' },
        { line: 'Suppose instead that $x \\neq 1$.', reason: 'the second case' },
        { line: 'Then $x=u\'$ for some $u$.', reason: 'by the fact that every number other than 1 is a successor' },
        { line: 'Then $u\'=u+1$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=u$, read in reverse' },
        { line: 'Then $u+1=1+u$.', reason: 'by the commutative law of addition' },
        { line: 'Then $1+u>1$.', reason: 'by the fact that a sum exceeds its first addend, applied with first addend $1$ and second addend $u$' },
        { line: 'So $u\'>1$.', reason: 'by the transitivity of equality and the inequality, from $u\'=u+1$, $u+1=1+u$, and $1+u>1$' },
        { line: 'So $x>1$.', reason: 'by substituting $x=u\'$ into $u\'>1$' },
        { line: 'So $x \\geq 1$.', reason: 'by the definition of $\\geq$, since $x>1$' },
        { line: 'Therefore $x \\geq 1$.', reason: 'since $x \\geq 1$ holds in every case' }
      ]
    },
    {
      id: 'landau-25', method: 'direct proof',
      idea: 'The difference in the hypothesis is at least 1, so adding it to x gives at least x plus 1.',
      statement: 'If $y>x$, then $y \\geq x+1$.',
      lines: [
        { line: 'Suppose that $y>x$.', reason: 'the hypothesis' },
        { line: 'Then $y=x+u$ for some $u$.', reason: 'by the definition of $>$' },
        { line: 'Then $u \\geq 1$.', reason: 'by the fact that every number is at least 1' },
        { line: 'Then $x+u \\geq x+1$.', reason: 'by the fact that addition preserves the order relation, applied to $u \\geq 1$' },
        { line: 'Therefore $y \\geq x+1$.', reason: 'by substituting $y=x+u$ into $x+u \\geq x+1$' }
      ]
    },
    {
      id: 'landau-26', method: 'proof by contradiction',
      idea: 'Denying the conclusion forces y to be at least x+1, which contradicts the hypothesis y<x+1.',
      statement: 'If $y<x+1$, then $y \\leq x$.',
      lines: [
        { line: 'Suppose, for contradiction, that $y \\leq x$ fails.', reason: 'assumed for a proof by contradiction' },
        { line: 'Then $y>x$.', reason: 'by the trichotomy law of order, since $y \\leq x$ fails, so $y=x$ and $y<x$ also fail' },
        { line: 'So $y \\geq x+1$.', reason: 'by the fact that a number greater than x is at least x+1, applied to $y>x$' },
        { line: 'Then $y>x+1$ or $y=x+1$.', reason: 'by the definition of $\\geq$' },
        { line: 'So $y<x+1$ is false.', reason: 'by the trichotomy law of order, since $y>x+1$ or $y=x+1$ excludes $y<x+1$' },
        { line: 'This contradicts the hypothesis that $y<x+1$.', reason: 'since the hypothesis is $y<x+1$' },
        { line: 'Therefore $y \\leq x$.', reason: 'since assuming otherwise leads to a contradiction' }
      ]
    },
    {
      id: 'landau-27', method: 'induction',
      idea: 'The numbers at most every member of the given set cannot be every number. So induction stops at some number, and that number is the least member of the set.',
      statement: 'Every non-empty set $N$ of natural numbers contains a number $m$ with $m<n$ for every $n$ in $N$ with $n \\neq m$.',
      lines: [
        { line: 'Let $N$ be a non-empty set of natural numbers.', reason: 'the hypothesis' },
        { line: 'Let $M$ be the set of all $x$ such that $x \\leq n$ for every $n$ in $N$.', reason: 'defines the set used in the argument' },
        { line: 'Then $n \\geq 1$ for every $n$ in $N$.', reason: 'by the fact that every number is at least 1' },
        { line: 'So $1 \\leq n$ for every $n$ in $N$.', reason: 'by the fact that greater-or-equal means less-or-equal reversed, applied to $n \\geq 1$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Let $y$ be an element of $N$.', reason: 'since $N$ is non-empty' },
        { line: 'Then $y+1>y$.', reason: 'by the fact that a sum exceeds its first addend, applied with first addend $y$ and second addend $1$' },
        { line: 'So $y+1 \\leq y$ is false.', reason: 'by the trichotomy law of order, since $y+1>y$ excludes $y+1 \\leq y$' },
        { line: 'So $y+1$ does not belong to $M$.', reason: 'by the definition of $M$, since $y+1 \\leq y$ fails and $y$ belongs to $N$' },
        { line: 'So not every natural number belongs to $M$.', reason: 'since $y+1$ does not belong to $M$' },
        { line: 'Therefore there exists $m$ in $M$ such that $m+1$ does not belong to $M$.', reason: 'by the axiom of induction, since otherwise $M$ would contain every natural number, against the previous line' },
        { line: 'This $m$ satisfies $m \\leq n$ for every $n$ in $N$.', reason: 'by the definition of $M$, since $m$ belongs to $M$' },
        { line: 'Suppose, for contradiction, that $m$ does not belong to $N$.', reason: 'assumed for a proof by contradiction, since the claim to prove is that $m$ belongs to $N$' },
        { line: 'Then $m \\neq n$ for every $n$ in $N$.', reason: 'since $m$ does not belong to $N$' },
        { line: 'So $m<n$ for every $n$ in $N$.', reason: 'by the trichotomy law of order, since $m \\leq n$ and $m \\neq n$ together exclude $m=n$ and leave $m<n$' },
        { line: 'Then $n \\geq m+1$ for every $n$ in $N$.', reason: 'by the fact that a number greater than x is at least x+1, applied to $n>m$' },
        { line: 'So $m+1 \\leq n$ for every $n$ in $N$.', reason: 'by the fact that greater-or-equal means less-or-equal reversed, applied to $n \\geq m+1$' },
        { line: 'So $m+1$ belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'This contradicts the fact that $m+1$ does not belong to $M$.', reason: 'since $m$ is a number with $m+1$ not belonging to $M$' },
        { line: 'Therefore $m$ belongs to $N$.', reason: 'since assuming otherwise leads to a contradiction' },
        { line: 'So $m \\leq n$ for every $n$ in $N$, and for every $n$ in $N$ with $n \\neq m$, $m<n$.', reason: 'since $m$ belongs to $N$ and $m \\leq n$ for every $n$ in $N$, by the trichotomy law of order' },
        { line: 'Therefore $N$ contains a number $m$ such that $m<n$ for every $n$ in $N$ with $n \\neq m$.', reason: 'since $m$ belongs to $N$ and is less than every other number of $N$' }
      ]
    }
  ],
  prove: [
    {
      id: 'nng-Implication-1',
      statement: 'If x plus y equals 37 and 3 times x plus z equals 42, then x plus y equals 37.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The first hypothesis already states that $x+y=37$.', reason: 'restates the first hypothesis' },
        { line: 'So $x+y=37$ holds.', reason: 'because an assumed hypothesis is itself a valid conclusion' }
      ] }
    },
    {
      id: 'nng-Implication-2',
      statement: 'If 0 plus x equals (0 plus y) plus 2, then x equals y plus 2.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $0+x=(0+y)+2$.', reason: 'the hypothesis' },
        { line: 'Then $0+x=x$ and $0+y=y$.', reason: 'by the fact that 0 plus a number equals that number, proved in the topic on addition' },
        { line: 'So $x=y+2$, by substituting $0+x=x$ and $0+y=y$ into the hypothesis.', reason: 'by the meaning of equality' }
      ] }
    },
    {
      id: 'nng-Implication-3',
      statement: 'If x equals 37, and x equals 37 implies y equals 42, then y equals 42.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $x=37$ and that $x=37$ implies $y=42$.', reason: 'the hypothesis' },
        { line: 'So $y=42$, because the assumption $x=37$ satisfies the condition of the implication.', reason: 'by the meaning of implication' }
      ] }
    },
    {
      id: 'nng-Implication-4',
      statement: 'If x plus 1 equals 4, then x equals 3.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $x+1=4$.', reason: 'the hypothesis' },
        { line: 'Then $x+1=x\'$.', reason: 'by the fact that the successor of a number equals that number plus 1, applied with $x$. The topic on the natural numbers from the axioms proves that fact.' },
        { line: 'The numeral 4 names $3\'$.', reason: 'by the meaning of the numeral 4' },
        { line: 'So $x\'=3\'$, by the transitivity of equality, from $x+1=x\'$, $x+1=4$, and $4=3\'$.', reason: 'by the meaning of equality' },
        { line: 'So $x=3$.', reason: 'by the axiom that numbers with equal successors are equal' }
      ] }
    },
    {
      id: 'nng-Implication-6',
      statement: 'For every number x, x equals 37 implies x equals 37.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $x=37$.', reason: 'assumed to check the implication' },
        { line: 'So $x=37$ holds, because the previous line supposes it.', reason: 'by the reflexivity of implication' }
      ] }
    },
    {
      id: 'nng-Implication-7',
      statement: 'For all numbers x and y, if x plus 1 equals y plus 1, then x equals y.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $x+1=y+1$.', reason: 'the hypothesis' },
        { line: 'Then $x+1=x\'$ and $y+1=y\'$.', reason: 'by the fact that the successor of a number equals that number plus 1. The topic on the natural numbers from the axioms proves that fact.' },
        { line: 'So $x\'=y\'$, by the transitivity of equality, from $x\'=x+1$, $x+1=y+1$, and $y+1=y\'$.', reason: 'by the meaning of equality' },
        { line: 'So $x=y$.', reason: 'by the axiom that numbers with equal successors are equal' }
      ] }
    },
    {
      id: 'nng-Implication-8',
      statement: 'If x equals y and x is not equal to y, that is a contradiction.',
      method: 'proof by contradiction',
      check: { proof: [
        { line: 'Suppose that $x=y$ and $x \\neq y$.', reason: 'the hypothesis' },
        { line: 'These two statements cannot both hold.', reason: 'since $\\neq$ means the two numbers are not the same' },
        { line: 'So the hypothesis is impossible, which is the contradiction the statement names.', reason: 'since a statement and its denial cannot both hold' }
      ] }
    },
    {
      id: 'nng-Implication-9',
      statement: 'The number 0 is not equal to 1.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The numeral 1 names $0\'$.', reason: 'by the meaning of the numeral 1' },
        { line: 'The number $0\'$ is a successor, and no successor equals 0.', reason: 'by the axiom that no number has 0 as its successor' },
        { line: 'So $0 \\neq 1$.', reason: 'since $1=0\'$ and $0\' \\neq 0$' }
      ] }
    },
    {
      id: 'nng-Implication-10',
      statement: 'The number 1 is not equal to 0.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The numeral 1 names $0\'$.', reason: 'by the meaning of the numeral 1' },
        { line: 'The number $0\'$ is a successor, and no successor equals 0.', reason: 'by the axiom that no number has 0 as its successor' },
        { line: 'So $1 \\neq 0$.', reason: 'since $1=0\'$ and $0\' \\neq 0$' }
      ] }
    },
    {
      id: 'nng-Implication-11',
      statement: 'The sum 2 plus 2 is not equal to 5.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The sum $2+2$ equals 4.', reason: 'by the statement $2+2=4$, proved in the topic on the natural numbers from the axioms' },
        { line: 'The numbers 0 and 1 are different.', reason: 'by the statement that 0 is not equal to 1' },
        { line: 'So $0\' \\neq 1\'$, that is, $1 \\neq 2$.', reason: 'by the meaning of the numerals 1 and 2, and the fact that different numbers have different successors. The topic on the natural numbers from the axioms proves that fact.' },
        { line: 'So $1\' \\neq 2\'$, that is, $2 \\neq 3$.', reason: 'by the same fact, and the meaning of the numerals 2 and 3' },
        { line: 'So $2\' \\neq 3\'$, that is, $3 \\neq 4$.', reason: 'by the same fact, and the meaning of the numerals 3 and 4' },
        { line: 'So $3\' \\neq 4\'$, that is, $4 \\neq 5$.', reason: 'by the same fact, and the meaning of the numerals 4 and 5' },
        { line: 'So $2+2$ does not equal 5.', reason: 'by replacing 4 with the equal sum $2+2$ in $4 \\neq 5$, by the meaning of equality' }
      ] }
    },
    {
      id: 'nng-AdvAddition-1',
      statement: 'For all numbers a, b, and n: if a plus n equals b plus n, then a equals b.',
      method: 'induction',
      check: { proof: [
        { line: 'The claim for a number $n$ is that, for all $a$ and $b$, $a+n=b+n$ forces $a=b$. The proof is by induction on $n$.', reason: 'stating the claim to prove by induction' },
        { line: 'Suppose that $a+0=b+0$.', reason: 'the base case' },
        { line: 'Then $a=b$, because $a+0=a$ and $b+0=b$, so the claim holds for 0.', reason: 'by the recursive definition of addition applied at 0' },
        { line: 'Suppose that the claim holds for $n$, and that $a+n\'=b+n\'$.', reason: 'the inductive hypothesis and the hypothesis of the step' },
        { line: 'Then $(a+n)\'=(b+n)\'$.', reason: 'by the recursive definition of addition, $w+n\'=(w+n)\'$, applied with $w=a$ and with $w=b$, and the transitivity of equality' },
        { line: 'So $a+n=b+n$.', reason: 'by the axiom that numbers with equal successors are equal' },
        { line: 'So $a=b$, and the claim holds for $n\'$.', reason: 'by the inductive hypothesis, applied to $a+n=b+n$' },
        { line: 'Therefore, for all $a$, $b$, and $n$, if $a+n=b+n$, then $a=b$.', reason: 'by the axiom of induction, starting at 0' }
      ] }
    },
    {
      id: 'nng-AdvAddition-2',
      statement: 'For all numbers a, b, and n: if n plus a equals n plus b, then a equals b.',
      method: 'induction',
      check: { proof: [
        { line: 'The claim for a number $n$ is that, for all $a$ and $b$, $n+a=n+b$ forces $a=b$. The proof is by induction on $n$.', reason: 'stating the claim to prove by induction' },
        { line: 'Suppose that $0+a=0+b$.', reason: 'the base case' },
        { line: 'Then $a=b$, because $0+a=a$ and $0+b=b$, so the claim holds for 0.', reason: 'by the fact that 0 plus a number equals that number, proved in the topic on addition' },
        { line: 'Suppose that the claim holds for $n$, and that $n\'+a=n\'+b$.', reason: 'the inductive hypothesis and the hypothesis of the step' },
        { line: 'Then $(n+a)\'=(n+b)\'$.', reason: 'by the fact that $n\'+a=(n+a)\'$, proved in the topic on addition, and the transitivity of equality' },
        { line: 'So $n+a=n+b$.', reason: 'by the axiom that numbers with equal successors are equal' },
        { line: 'So $a=b$, and the claim holds for $n\'$.', reason: 'by the inductive hypothesis, applied to $n+a=n+b$' },
        { line: 'Therefore, for all $a$, $b$, and $n$, if $n+a=n+b$, then $a=b$.', reason: 'by the axiom of induction, starting at 0' }
      ] }
    },
    {
      id: 'nng-AdvAddition-3',
      statement: 'For all numbers x and y: if x plus y equals y, then x equals 0.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $x+y=y$.', reason: 'the hypothesis' },
        { line: 'Then $0+y=y$.', reason: 'by the fact that 0 plus a number equals that number, proved in the topic on addition' },
        { line: 'So $x+y=0+y$, by the transitivity of equality, from $x+y=y$ and $y=0+y$.', reason: 'by the meaning of equality' },
        { line: 'So $x=0$.', reason: 'by the statement that $a+n=b+n$ forces $a=b$, applied with $a=x$, $b=0$, and $n=y$' }
      ] }
    },
    {
      id: 'nng-AdvAddition-4',
      statement: 'For all numbers x and y: if x plus y equals x, then y equals 0.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $x+y=x$.', reason: 'the hypothesis' },
        { line: 'Then $y+x=x$.', reason: 'by the commutative law of addition' },
        { line: 'So $y=0$.', reason: 'by the fact that a sum equal to its second addend has first addend 0, applied to $y+x=x$' }
      ] }
    },
    {
      id: 'nng-AdvAddition-5',
      statement: 'For all numbers a and b: if a plus b equals 0, then a equals 0.',
      method: 'proof by contradiction',
      check: { proof: [
        { line: 'Suppose that $a+b=0$.', reason: 'the hypothesis' },
        { line: 'Suppose, for contradiction, that $b$ is not equal to 0.', reason: 'assumed for a proof by contradiction' },
        { line: 'Then $b=c\'$ for some $c$.', reason: 'by the fact that every number but the first is a successor, where 0 is the first number. The topic on the natural numbers from the axioms proves that fact.' },
        { line: 'Then $a+c\'=(a+c)\'$.', reason: 'by the equation $n+m\'=(n+m)\'$, applied with $n=a$ and $m=c$' },
        { line: 'So $a+b=(a+c)\'$, by substituting $b=c\'$.', reason: 'by the meaning of equality' },
        { line: 'So $a+b$ is a successor, and no successor equals 0.', reason: 'by the axiom that no number has 0 as its successor' },
        { line: 'This contradicts $a+b=0$.', reason: 'since the hypothesis says that $a+b$ equals 0' },
        { line: 'So $b=0$.', reason: 'since assuming otherwise leads to a contradiction' },
        { line: 'Then $a+0=a$.', reason: 'because adding 0 leaves a number unchanged' },
        { line: 'So $a=0$, by the transitivity of equality, from $a=a+0$, $a+0=a+b$ since $b=0$, and $a+b=0$.', reason: 'by the meaning of equality' }
      ] }
    },
    {
      id: 'nng-AdvAddition-6',
      statement: 'For all numbers a and b: if a plus b equals 0, then b equals 0.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $a+b=0$.', reason: 'the hypothesis' },
        { line: 'Then $b+a=0$.', reason: 'by the commutative law of addition' },
        { line: 'So $b=0$.', reason: 'by the fact that a sum equal to 0 forces its first addend to be 0, applied to $b+a=0$' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-1',
      statement: 'For every number x, x is at most x.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The number $x$ equals itself.', reason: 'by the reflexivity of equality' },
        { line: 'So $x \\leq x$, by the definition of $\\leq$.', reason: 'since equality is one of the two cases of $\\leq$' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-2',
      statement: 'For every number x, 0 is at most x.',
      method: 'proof by cases',
      check: { proof: [
        { line: 'Suppose that $x=0$.', reason: 'the first case' },
        { line: 'So $0 \\leq x$, because $0=x$, by the definition of $\\leq$.', reason: 'since equality is one of the two cases of $\\leq$' },
        { line: 'Suppose instead that $x \\neq 0$.', reason: 'the second case' },
        { line: 'Then $0+x=x$.', reason: 'by the fact that 0 plus a number equals that number, proved in the topic on addition' },
        { line: 'So $0<x$, because $x=0+x$ gives the number that the definition of $<$ requires.', reason: 'by the definition of $<$' },
        { line: 'So $0 \\leq x$, by the definition of $\\leq$.', reason: 'since $<$ is one of the two cases of $\\leq$' },
        { line: 'Therefore $0 \\leq x$ in every case.', reason: 'since both cases give $0 \\leq x$' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-3',
      statement: 'For every number x, x is at most the successor of x.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The number $x+1$ equals $x\'$.', reason: 'by the fact that the successor of a number equals that number plus 1. The topic on the natural numbers from the axioms proves that fact.' },
        { line: 'So $x<x\'$, because $x\'=x+1$ gives the number 1 that the definition of $<$ requires.', reason: 'by the definition of $<$' },
        { line: 'So $x \\leq x\'$, by the definition of $\\leq$.', reason: 'since $<$ is one of the two cases of $\\leq$' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-5',
      statement: 'For every number x, if x is at most 0, then x equals 0.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $x \\leq 0$.', reason: 'the hypothesis' },
        { line: 'Then $x=0$ or $x<0$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose that $x=0$.', reason: 'the first case' },
        { line: 'Then $x=0$ holds.', reason: 'since this is the case assumed' },
        { line: 'Suppose instead that $x<0$.', reason: 'the second case' },
        { line: 'Then $0=x+v$ for some $v$, so $x+v=0$.', reason: 'by the definition of $<$, and the symmetry of equality' },
        { line: 'So $x=0$.', reason: 'by the statement that $a+b=0$ forces $a=0$, applied with $a=x$ and $b=v$' },
        { line: 'Therefore $x=0$ in every case.', reason: 'since both cases give $x=0$' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-6',
      statement: 'Let x and y be numbers with x at most y and y at most x. Then x equals y.',
      method: 'proof by contradiction',
      check: { proof: [
        { line: 'Suppose that $x \\leq y$ and $y \\leq x$.', reason: 'the hypothesis' },
        { line: 'Suppose, for contradiction, that $x \\neq y$.', reason: 'assumed for a proof by contradiction' },
        { line: 'Then $x<y$, because $x \\leq y$ and $x \\neq y$.', reason: 'by the definition of $\\leq$' },
        { line: 'Then $y<x$, because $y \\leq x$ and $y \\neq x$.', reason: 'by the definition of $\\leq$' },
        { line: 'So $x>y$.', reason: 'by the fact that less-than means greater-than reversed, applied to $y<x$' },
        { line: 'So both $x<y$ and $x>y$ hold, which cannot happen.', reason: 'by the trichotomy law of order, since exactly one of $x=y$, $x>y$, $x<y$ holds' },
        { line: 'Therefore $x=y$.', reason: 'since assuming otherwise leads to a contradiction' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-7',
      statement: 'Let x and y be numbers with x equal to 37 or y equal to 42. Then y equals 42 or x equals 37.',
      method: 'proof by cases',
      check: { proof: [
        { line: 'Suppose that $x=37$ or $y=42$.', reason: 'the hypothesis' },
        { line: 'Suppose that $x=37$ holds.', reason: 'the first case' },
        { line: 'Then $y=42$ or $x=37$ holds, since $x=37$ holds.', reason: 'by the meaning of or' },
        { line: 'Suppose instead that $y=42$ holds.', reason: 'the second case' },
        { line: 'Then $y=42$ or $x=37$ holds, since $y=42$ holds.', reason: 'by the meaning of or' },
        { line: 'Therefore $y=42$ or $x=37$ holds in every case.', reason: 'since both cases give the conclusion' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-8',
      statement: 'For all numbers x and y, x is at most y or y is at most x.',
      method: 'proof by cases',
      check: { proof: [
        { line: 'Exactly one of $x=y$, $x>y$, $x<y$ holds.', reason: 'by the trichotomy law of order' },
        { line: 'Suppose that $x=y$.', reason: 'the first case' },
        { line: 'So $x \\leq y$.', reason: 'by the definition of $\\leq$, since $x=y$' },
        { line: 'Suppose instead that $x<y$.', reason: 'the second case' },
        { line: 'So $x \\leq y$.', reason: 'by the definition of $\\leq$, since $x<y$' },
        { line: 'Suppose instead that $x>y$.', reason: 'the third case' },
        { line: 'Then $y<x$.', reason: 'by the fact that greater-than means less-than reversed' },
        { line: 'So $y \\leq x$.', reason: 'by the definition of $\\leq$, since $y<x$' },
        { line: 'Therefore $x \\leq y$ or $y \\leq x$ holds in every case.', reason: 'since each case gives one of the two' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-9',
      statement: 'Let x and y be numbers with the successor of x at most the successor of y. Then x is at most y.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $x\' \\leq y\'$.', reason: 'the hypothesis' },
        { line: 'Then $x\'=y\'$ or $x\'<y\'$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose that $x\'=y\'$.', reason: 'the first case' },
        { line: 'Then $x=y$, so $x \\leq y$.', reason: 'by the axiom that numbers with equal successors are equal, and the definition of $\\leq$' },
        { line: 'Suppose instead that $x\'<y\'$.', reason: 'the second case' },
        { line: 'Then $y\'=x\'+v$ for some $v$.', reason: 'by the definition of $<$' },
        { line: 'Then $x\'+v=(x+v)\'$, so $y\'=(x+v)\'$.', reason: 'by the fact that the successor of $x$, plus $v$, equals the successor of $x+v$' },
        { line: 'So $y=x+v$.', reason: 'by the axiom that numbers with equal successors are equal' },
        { line: 'So $x<y$, and so $x \\leq y$.', reason: 'by the definitions of $<$ and $\\leq$' },
        { line: 'Therefore $x \\leq y$ in every case.', reason: 'since both cases give $x \\leq y$' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-10',
      statement: 'For every number x: if x is at most 1, then x equals 0 or x equals 1.',
      method: 'proof by cases',
      check: { proof: [
        { line: 'Suppose that $x \\leq 1$.', reason: 'the hypothesis' },
        { line: 'Suppose that $x=0$.', reason: 'the first case' },
        { line: 'So $x=0$ or $x=1$ holds.', reason: 'since $x=0$ holds' },
        { line: 'Suppose instead that $x \\neq 0$.', reason: 'the second case' },
        { line: 'Then $x=c\'$ for some $c$.', reason: 'by the fact that every number but the first is a successor, where 0 is the first number. The topic on the natural numbers from the axioms proves that fact.' },
        { line: 'The numeral 1 names $0\'$.', reason: 'by the meaning of the numeral 1' },
        { line: 'So $c\' \\leq 0\'$, by substituting $x=c\'$ and $1=0\'$ into $x \\leq 1$.', reason: 'by the meaning of equality' },
        { line: 'So $c \\leq 0$.', reason: 'by the fact that $x\' \\leq y\'$ forces $x \\leq y$' },
        { line: 'So $c=0$.', reason: 'by the fact that a number at most 0 equals 0' },
        { line: 'So $x=0\'=1$, by substituting $c=0$ into $x=c\'$.', reason: 'by the meaning of equality' },
        { line: 'So $x=0$ or $x=1$ holds in every case.', reason: 'since both cases give the conclusion' }
      ] }
    },
    {
      id: 'nng-LessOrEqual-11',
      statement: 'Let x be a number at most 2. Then x equals 0, x equals 1, or x equals 2.',
      method: 'proof by cases',
      check: { proof: [
        { line: 'Suppose that $x \\leq 2$.', reason: 'the hypothesis' },
        { line: 'Suppose that $x=0$.', reason: 'the first case' },
        { line: 'So $x=0$, $x=1$, or $x=2$ holds.', reason: 'since $x=0$ holds' },
        { line: 'Suppose instead that $x \\neq 0$.', reason: 'the second case' },
        { line: 'Then $x=c\'$ for some $c$.', reason: 'by the fact that every number but the first is a successor, where 0 is the first number. The topic on the natural numbers from the axioms proves that fact.' },
        { line: 'The numeral 2 names $1\'$.', reason: 'by the meaning of the numeral 2' },
        { line: 'So $c\' \\leq 1\'$, by substituting $x=c\'$ and $2=1\'$ into $x \\leq 2$.', reason: 'by the meaning of equality' },
        { line: 'So $c \\leq 1$.', reason: 'by the fact that $x\' \\leq y\'$ forces $x \\leq y$' },
        { line: 'So $c=0$ or $c=1$.', reason: 'by the fact that a number at most 1 is 0 or 1' },
        { line: 'So $x=0\'=1$ or $x=1\'=2$, by substituting $c=0$ or $c=1$ into $x=c\'$.', reason: 'by the meaning of equality' },
        { line: 'So $x=0$, $x=1$, or $x=2$ holds in every case.', reason: 'since both cases give the conclusion' }
      ] }
    },
    {
      id: 'nng-Algorithm-1',
      statement: 'For all numbers a, b, and c: a plus (b plus c) equals b plus (a plus c).',
      method: 'direct proof',
      check: { proof: [
        { line: 'The sum $a+(b+c)$ equals $(a+b)+c$.', reason: 'by the associative law of addition, read in reverse' },
        { line: 'Then $(a+b)+c=(b+a)+c$.', reason: 'by the commutative law of addition, applied to $a+b$' },
        { line: 'Then $(b+a)+c=b+(a+c)$.', reason: 'by the associative law of addition' },
        { line: 'So $a+(b+c)=b+(a+c)$.', reason: 'by the transitivity of equality, from the chain $a+(b+c)=(a+b)+c=(b+a)+c=b+(a+c)$' }
      ] }
    },
    {
      id: 'nng-Algorithm-2',
      statement: 'Let a, b, c, and d be numbers. Then a plus b plus (c plus d) equals a plus c plus d plus b.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Regrouping or reordering the four terms $a,b,c,d$ leaves their sum unchanged.', reason: 'by the associative and commutative laws of addition' },
        { line: 'So $a+b+(c+d)=a+c+d+b$.', reason: 'by rearranging the four terms into the stated order' }
      ] }
    },
    {
      id: 'nng-Algorithm-3',
      statement: 'Let $a,b,c,d,e,f,g,h$ be numbers. Then $(d+f)+(h+(a+c))+(g+e+b)=a+b+c+d+e+f+g+h$.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Regrouping or reordering the eight terms $a,b,c,d,e,f,g,h$ leaves their sum unchanged.', reason: 'by the associative and commutative laws of addition' },
        { line: 'So $(d+f)+(h+(a+c))+(g+e+b) = a+b+c+d+e+f+g+h$.', reason: 'by rearranging the eight terms into the stated order' }
      ] }
    },
    {
      id: 'nng-Algorithm-5',
      statement: 'For all numbers a and b, if the successor of a equals the successor of b, then a equals b.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $a\'=b\'$.', reason: 'the hypothesis' },
        { line: 'So $a=b$.', reason: 'by the axiom that numbers with equal successors are equal' }
      ] }
    },
    {
      id: 'nng-Algorithm-6',
      statement: 'For every number a, the successor of a is not equal to 0.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The number $a\'$ is a successor, namely the successor of $a$.', reason: 'by the definition of $a\'$' },
        { line: 'So $a\' \\neq 0$.', reason: 'by the axiom that no number has 0 as its successor' }
      ] }
    },
    {
      id: 'nng-Algorithm-7',
      statement: 'Let m and n be numbers with m not equal to n. Then the successor of m is not equal to the successor of n.',
      method: 'proof of the contrapositive',
      check: { proof: [
        { line: 'The claim to prove is that $m \\neq n$ implies $m\' \\neq n\'$. Its contrapositive is that $m\'=n\'$ implies $m=n$.', reason: 'restates the goal as its contrapositive' },
        { line: 'Suppose that $m\'=n\'$.', reason: 'assumed to prove the contrapositive' },
        { line: 'Then $m=n$.', reason: 'by the axiom that numbers with equal successors are equal' },
        { line: 'Therefore $m \\neq n$ implies $m\' \\neq n\'$.', reason: 'since the contrapositive holds' }
      ] }
    },
    {
      id: 'nng-Algorithm-8',
      statement: 'The sum 20 plus 20 equals 40.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The sum $20+0$ equals 20.', reason: 'by the recursive definition of addition, $n+0=n$' },
        { line: 'For each numeral $k$ from 0 to 19, $20+k\'=(20+k)\'$.', reason: 'by the recursive definition of addition, $n+m\'=(n+m)\'$, applied with $n=20$ and $m=k$' },
        { line: 'Each numeral from 1 to 40 names the successor of the numeral before it.', reason: 'by the meaning of the numerals' },
        { line: 'So if $20+k$ equals a numeral, then $20+k\'$ equals the successor of that numeral. That successor is the next numeral.', reason: 'since equal numbers have equal successors, by the two previous lines' },
        { line: 'Starting from $20+0=20$ and taking this step twenty times gives $20+1=21$, $20+2=22$, and so on up to $20+20=40$.', reason: 'by the three previous lines, applied with $k=0$, then $k=1$, and so on up to $k=19$' },
        { line: 'So $20+20=40$.', reason: 'by the last of these twenty steps' }
      ] }
    }
  ]
}
