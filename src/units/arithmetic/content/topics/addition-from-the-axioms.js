// Addition from the axioms: addition defined by recursion on the Peano axioms, the proofs to
// read from Landau chapter 1 section 2, and the statements to prove from the Natural Number
// Game's Addition world. Landau's natural numbers start at 1, and the successor of x is x'.
export default {
  number: 41,
  manyParts: false,
  ideas: [
    {
      name: 'Addition defined by recursion',
      concrete: 'For the fixed number 2, $2+1=2\'=3$, then $2+2=2+1\'=(2+1)\'=3\'=4$, then $2+3=2+2\'=(2+2)\'=4\'=5$: each further addend adds one more successor step.',
      general: 'For every $x$ and $y$, the **sum** $x+y$ is the natural number satisfying two equations. First, $x+1=x\'$ for every $x$. Second, $x+y\'=(x+y)\'$ for every $x$ and every $y$.'
    },
    {
      name: 'The Natural Number Game\'s numbers',
      concrete: 'The Natural Number Game writes $n+0=n$ as its starting fact, where Landau has no 0 and starts from $x+1=x\'$.',
      general: 'The Natural Number Game uses the same recursive addition, read on the second addend.'
    }
  ],
  kinds: [
    { id: 't41-k1', forms: [] }
  ],
  proofs: [
    {
      id: 'landau-4',
      method: 'induction',
      idea: 'Induction shows that two assignments of a sum agree at every step. Induction also builds one assignment that satisfies the two defining equations.',
      statement: 'For every $x$ and $y$, there exists exactly one natural number $x+y$ satisfying two equations. First, $x+1=x\'$ for every $x$. Second, $x+y\'=(x+y)\'$ for every $x$ and every $y$.',
      lines: [
        { line: 'Let $x$ be fixed.', reason: 'fixes $x$ to show that $x+y$ is determined for every $y$ in at most one way' },
        { line: 'Suppose that $a_y$ and $b_y$ are defined for every $y$, with $a_1 = x\'$, $b_1 = x\'$, and $a_{y\'} = (a_y)\'$, $b_{y\'} = (b_y)\'$ for every $y$.', reason: 'assumed to compare two possible ways of defining $x+y$' },
        { line: 'Let $M$ be the set of all $y$ for which $a_y = b_y$.', reason: 'defines the set used in the induction on $y$' },
        { line: 'Then $a_1 = x\' = b_1$.', reason: 'since $a_1 = x\'$ and $b_1 = x\'$, by the hypothesis on $a_y$ and $b_y$, and by the transitivity of equality' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$, since $a_1 = b_1$' },
        { line: 'Suppose that $y$ belongs to $M$.', reason: 'assumed for the inductive step' },
        { line: 'Then $a_y = b_y$.', reason: 'by the definition of $M$' },
        { line: 'So $(a_y)\' = (b_y)\'$.', reason: 'since equal numbers have equal successors, by the axiom that each number has exactly one successor, applied to $a_y = b_y$' },
        { line: 'Then $a_{y\'} = (a_y)\'$.', reason: 'by the hypothesis on $a_y$' },
        { line: 'Then $(b_y)\' = b_{y\'}$.', reason: 'by the hypothesis on $b_y$' },
        { line: 'So $a_{y\'} = b_{y\'}$.', reason: 'by the transitivity of equality, from $a_{y\'} = (a_y)\'$, $(a_y)\' = (b_y)\'$, and $(b_y)\' = b_{y\'}$' },
        { line: 'So $y\'$ belongs to $M$.', reason: 'by the definition of $M$, since $a_{y\'} = b_{y\'}$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'So $a_y = b_y$ for every $y$.', reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $y$ for which $a_y = b_y$' },
        { line: 'Therefore, for each $x$, at most one assignment of $x+y$ to every $y$ satisfies $x+1=x\'$ and $x+y\'=(x+y)\'$ for every $y$.', reason: 'since every two such assignments $a_y$ and $b_y$ agree for every $y$' },
        { line: 'Let $M$ be the set of all $x$ for which you can define $x+y$ for every $y$. The definition must satisfy $x+1=x\'$ and $x+y\'=(x+y)\'$ for every $y$.', reason: 'defines the set used in the induction on $x$' },
        { line: 'For $x=1$, let $x+y=y\'$.', reason: 'proposed as the required assignment for $x=1$' },
        { line: 'Then $x+1 = 1\'$.', reason: 'by the proposed assignment $x+y=y\'$ with $y=1$' },
        { line: 'Then $1\' = x\'$.', reason: 'since $x=1$' },
        { line: 'So $x+1 = x\'$.', reason: 'by the transitivity of equality, from $x+1=1\'$ and $1\'=x\'$' },
        { line: 'Then $x+y\' = (y\')\'$.', reason: 'by the proposed assignment $x+y=y\'$, applied at $y\'$' },
        { line: 'Then $(y\')\' = (x+y)\'$.', reason: 'since equal numbers have equal successors, by the axiom that each number has exactly one successor, applied to $x+y=y\'$' },
        { line: 'So $x+y\' = (x+y)\'$.', reason: 'by the transitivity of equality, from $x+y\'=(y\')\'$ and $(y\')\'=(x+y)\'$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$, since $x+1=x\'$ and $x+y\'=(x+y)\'$ hold for every $y$ when $x=1$' },
        { line: 'Suppose that $x$ belongs to $M$, so that $x+y$ exists for every $y$.', reason: 'assumed for the inductive step' },
        { line: 'Let $x\'+y = (x+y)\'$.', reason: 'proposed as the required assignment for $x\'$' },
        { line: 'Then $x\'+1 = (x+1)\'$.', reason: 'by the proposed assignment $x\'+y=(x+y)\'$, applied at $y=1$' },
        { line: 'Then $(x+1)\' = (x\')\'$.', reason: 'since equal numbers have equal successors, by the axiom that each number has exactly one successor, applied to $x+1=x\'$' },
        { line: 'So $x\'+1=(x\')\'$.', reason: 'by the transitivity of equality, from $x\'+1=(x+1)\'$ and $(x+1)\'=(x\')\'$' },
        { line: 'Then $x\'+y\' = (x+y\')\'$.', reason: 'by the proposed assignment $x\'+y=(x+y)\'$, applied at $y\'$' },
        { line: 'Then $(x+y\')\' = ((x+y)\')\'$.', reason: 'since equal numbers have equal successors, by the axiom that each number has exactly one successor, applied to $x+y\'=(x+y)\'$' },
        { line: 'Then $((x+y)\')\' = (x\'+y)\'$.', reason: 'since equal numbers have equal successors, by the axiom that each number has exactly one successor, applied to $x\'+y=(x+y)\'$' },
        { line: 'So $x\'+y\' = (x\'+y)\'$.', reason: 'by the transitivity of equality, from $x\'+y\'=(x+y\')\'$, $(x+y\')\'=((x+y)\')\'$, and $((x+y)\')\'=(x\'+y)\'$' },
        { line: 'So $x\'$ belongs to $M$.', reason: 'by the definition of $M$, since $x\'+1=(x\')\'$ and $x\'+y\'=(x\'+y)\'$ hold for every $y$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$ and $y$, there exists exactly one natural number $x+y$ such that $x+1=x\'$ and $x+y\'=(x+y)\'$.', reason: 'since the first induction shows uniqueness for each $x$ and the second shows that $M$ contains every natural number' }
      ]
    },
    {
      id: 'landau-5',
      method: 'induction',
      idea: 'Fix the first two addends, then use induction to show that regrouping holds for every third addend.',
      statement: 'For every $x$, $y$, and $z$, $(x+y)+z = x+(y+z)$.',
      lines: [
        { line: 'Let $x$ and $y$ be fixed.', reason: 'sets up the induction on $z$' },
        { line: 'Let $M$ be the set of all $z$ for which $(x+y)+z = x+(y+z)$.', reason: 'defines the set used in the induction' },
        { line: 'Then $(x+y)+1 = (x+y)\'$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=x+y$' },
        { line: 'Then $(x+y)\' = x+y\'$.', reason: 'by the definition of addition, $x+y\'=(x+y)\'$, read in reverse' },
        { line: 'So $x+y\' = x+(y+1)$.', reason: 'since $y+1=y\'$ by the definition of addition' },
        { line: 'So $(x+y)+1 = x+(y+1)$.', reason: 'by the transitivity of equality, from $(x+y)+1=(x+y)\'$, $(x+y)\'=x+y\'$, and $x+y\'=x+(y+1)$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Suppose that $z$ belongs to $M$.', reason: 'assumed for the inductive step' },
        { line: 'Then $(x+y)+z = x+(y+z)$.', reason: 'by the definition of $M$' },
        { line: 'Then $(x+y)+z\' = ((x+y)+z)\'$.', reason: 'by the definition of addition, $w+z\'=(w+z)\'$, applied with $w=x+y$' },
        { line: 'Then $((x+y)+z)\' = (x+(y+z))\'$.', reason: 'since equal numbers have equal successors, by the axiom that each number has exactly one successor, applied to $(x+y)+z=x+(y+z)$' },
        { line: 'Then $(x+(y+z))\' = x+(y+z)\'$.', reason: 'by the definition of addition, $w+z\'=(w+z)\'$, applied with $w=x$ and the second addend $y+z$, read in reverse' },
        { line: 'Then $x+(y+z)\' = x+(y+z\')$.', reason: 'since $y+z\'=(y+z)\'$ by the definition of addition, applied with the first addend $y$' },
        { line: 'So $(x+y)+z\' = x+(y+z\')$.', reason: 'by the transitivity of equality, from the chain $(x+y)+z\' = ((x+y)+z)\' = (x+(y+z))\' = x+(y+z)\' = x+(y+z\')$' },
        { line: 'So $z\'$ belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$, $y$, and $z$, $(x+y)+z = x+(y+z)$.', reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $z$ for which $(x+y)+z=x+(y+z)$' }
      ]
    },
    {
      id: 'landau-6',
      method: 'induction',
      idea: 'Fix the second addend, then use induction to show that the two addends swap for every first addend.',
      statement: 'For every $x$ and $y$, $x+y = y+x$.',
      lines: [
        { line: 'Let $y$ be fixed.', reason: 'sets up the induction on $x$' },
        { line: 'Let $M$ be the set of all $x$ for which $x+y=y+x$.', reason: 'defines the set used in the induction' },
        { line: 'Then $y+1=y\'$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=y$' },
        { line: 'Then $1+y=y\'$.', reason: 'by the addition formula $1+y=y\'$ from the proof that addition exists and is unique' },
        { line: 'So $1+y=y+1$.', reason: 'by the transitivity of equality, from $y+1=y\'$ and $1+y=y\'$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Suppose that $x$ belongs to $M$.', reason: 'assumed for the inductive step' },
        { line: 'Then $x+y=y+x$.', reason: 'by the definition of $M$' },
        { line: 'So $(x+y)\'=(y+x)\'$.', reason: 'since equal numbers have equal successors, by the axiom that each number has exactly one successor, applied to $x+y=y+x$' },
        { line: 'Then $(y+x)\'=y+x\'$.', reason: 'by the definition of addition, $w+x\'=(w+x)\'$, applied with $w=y$, read in reverse' },
        { line: 'So $(x+y)\'=y+x\'$.', reason: 'by the transitivity of equality, from $(x+y)\'=(y+x)\'$ and $(y+x)\'=y+x\'$' },
        { line: 'Then $x\'+y=(x+y)\'$.', reason: 'by the addition formula $x\'+y=(x+y)\'$ from the proof that addition exists and is unique' },
        { line: 'So $x\'+y=y+x\'$.', reason: 'by the transitivity of equality, from $x\'+y=(x+y)\'$ and $(x+y)\'=y+x\'$' },
        { line: 'So $x\'$ belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$ and $y$, $x+y=y+x$.', reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $x$ for which $x+y=y+x$' }
      ]
    },
    {
      id: 'landau-7',
      method: 'induction',
      idea: 'Fix the first addend, then use induction to show that the sum never equals the second addend.',
      statement: 'For every $x$ and $y$, $y \\neq x+y$.',
      lines: [
        { line: 'Let $x$ be fixed.', reason: 'sets up the induction on $y$' },
        { line: 'Let $M$ be the set of all $y$ for which $y \\neq x+y$.', reason: 'defines the set used in the induction' },
        { line: 'Then $x\' \\neq 1$.', reason: 'by the axiom that no number has 1 as its successor' },
        { line: 'So $1 \\neq x\'$.', reason: 'by the symmetry of $\\neq$, from $x\' \\neq 1$' },
        { line: 'Then $x+1=x\'$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=x$' },
        { line: 'So $1 \\neq x+1$.', reason: 'since $1 \\neq x\'$ and $x+1=x\'$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Suppose that $y$ belongs to $M$.', reason: 'assumed for the inductive step' },
        { line: 'Then $y \\neq x+y$.', reason: 'by the definition of $M$' },
        { line: 'So $y\' \\neq (x+y)\'$.', reason: 'by the fact that successor preserves distinctness, applied to $y \\neq x+y$' },
        { line: 'Then $x+y\'=(x+y)\'$.', reason: 'by the definition of addition, $w+y\'=(w+y)\'$, applied with $w=x$' },
        { line: 'So $y\' \\neq x+y\'$.', reason: 'since $y\' \\neq (x+y)\'$ and $x+y\'=(x+y)\'$' },
        { line: 'So $y\'$ belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$ and $y$, $y \\neq x+y$.', reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $y$ for which $y \\neq x+y$' }
      ]
    },
    {
      id: 'landau-8',
      method: 'induction',
      idea: 'Fix two distinct addends and use induction to show the sums stay distinct after adding the same number to each.',
      statement: 'If $y \\neq z$, then $x+y \\neq x+z$.',
      lines: [
        { line: 'Let $y$ and $z$ be fixed with $y \\neq z$.', reason: 'sets up the induction on $x$ for the given $y$ and $z$' },
        { line: 'Let $M$ be the set of all $x$ for which $x+y \\neq x+z$.', reason: 'defines the set used in the induction' },
        { line: 'Then $y\' \\neq z\'$.', reason: 'by the fact that successor preserves distinctness, applied to $y \\neq z$' },
        { line: 'Then $1+y=y\'$.', reason: 'by the addition formula $1+y=y\'$ from the proof that addition exists and is unique' },
        { line: 'Then $1+z=z\'$.', reason: 'by the addition formula $1+y=y\'$ from the proof that addition exists and is unique, applied with $z$ in place of $y$' },
        { line: 'So $1+y \\neq 1+z$.', reason: 'since $y\' \\neq z\'$, $1+y=y\'$, and $1+z=z\'$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Suppose that $x$ belongs to $M$.', reason: 'assumed for the inductive step' },
        { line: 'Then $x+y \\neq x+z$.', reason: 'by the definition of $M$' },
        { line: 'So $(x+y)\' \\neq (x+z)\'$.', reason: 'by the fact that successor preserves distinctness, applied to $x+y \\neq x+z$' },
        { line: 'Then $x\'+y=(x+y)\'$.', reason: 'by the addition formula $x\'+y=(x+y)\'$ from the proof that addition exists and is unique' },
        { line: 'Then $x\'+z=(x+z)\'$.', reason: 'by the addition formula $x\'+y=(x+y)\'$ from the proof that addition exists and is unique, applied with $z$ in place of $y$' },
        { line: 'So $x\'+y \\neq x\'+z$.', reason: 'since $(x+y)\' \\neq (x+z)\'$, $x\'+y=(x+y)\'$, and $x\'+z=(x+z)\'$' },
        { line: 'So $x\'$ belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, if $y \\neq z$, then $x+y \\neq x+z$.', reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $x$ for which $x+y \\neq x+z$' }
      ]
    },
    {
      id: 'landau-9',
      method: 'induction',
      idea: 'The three cases cannot overlap, because a sum never equals its second addend. Induction on the second number then shows that some case holds for every pair.',
      statement: 'For every $x$ and $y$, exactly one of three cases holds. Case (1): $x=y$. Case (2): there exists $u$ such that $x=y+u$. Case (3): there exists $v$ such that $y=x+v$.',
      lines: [
        { line: 'Suppose that $x=y$ and $x=y+u$ both hold.', reason: 'assumed to test whether cases (1) and (2) can hold together' },
        { line: 'Then $y=y+u$.', reason: 'by the transitivity of equality, from $x=y$ and $x=y+u$' },
        { line: 'This is impossible.', reason: 'by the fact that a sum never equals its second addend, applied to $y=y+u$' },
        { line: 'So cases (1) and (2) cannot both hold.', reason: 'by the contradiction above' },
        { line: 'Suppose that $x=y$ and $y=x+v$ both hold.', reason: 'assumed to test whether cases (1) and (3) can hold together' },
        { line: 'Then $x=x+v$.', reason: 'by the transitivity of equality, from $x=y$ and $y=x+v$' },
        { line: 'This is impossible.', reason: 'by the fact that a sum never equals its second addend, applied to $x=x+v$' },
        { line: 'So cases (1) and (3) cannot both hold.', reason: 'by the contradiction above' },
        { line: 'Suppose that $x=y+u$ and $y=x+v$ both hold.', reason: 'assumed to test whether cases (2) and (3) can hold together' },
        { line: 'Then $x=(x+v)+u$.', reason: 'by substituting $y=x+v$ into $x=y+u$' },
        { line: 'Then $(x+v)+u=x+(v+u)$.', reason: 'by the associative law of addition' },
        { line: 'Then $x+(v+u)=(v+u)+x$.', reason: 'by the commutative law of addition' },
        { line: 'So $x=(v+u)+x$.', reason: 'by the transitivity of equality, from $x=(x+v)+u$, $(x+v)+u=x+(v+u)$, and $x+(v+u)=(v+u)+x$' },
        { line: 'This is impossible.', reason: 'by the fact that a sum never equals its second addend, applied to $x=(v+u)+x$ with $v+u$ as the first addend' },
        { line: 'So cases (2) and (3) cannot both hold.', reason: 'by the contradiction above' },
        { line: 'Therefore at most one of cases (1), (2), and (3) holds.', reason: 'since each pair of cases is incompatible' },
        { line: 'Let $x$ be fixed.', reason: 'sets up the induction on $y$' },
        { line: 'Let $M$ be the set of all $y$ for which at least one of cases (1), (2), and (3) holds.', reason: 'defines the set used in the induction' },
        { line: 'Suppose that $y=1$.', reason: 'handles the base case' },
        { line: 'Then either $x=1$ or there exists $u$ such that $x=u\'$.', reason: 'by the fact that every number other than 1 is a successor, applied to $x$' },
        { line: 'If $x=1$, then $x=1=y$, which is case (1) for $y=1$.', reason: 'since $y=1$' },
        { line: 'If $x=u\'$ for some $u$, then $u\'=1+u$.', reason: 'by the addition formula $1+y=y\'$ from the proof that addition exists and is unique' },
        { line: 'So $x=1+u=y+u$, which is case (2) for $y=1$.', reason: 'by the transitivity of equality, from $x=u\'$, $u\'=1+u$, and $y=1$' },
        { line: 'So 1 belongs to $M$.', reason: 'since case (1) or case (2) holds for $y=1$' },
        { line: 'Suppose that $y$ belongs to $M$.', reason: 'assumed for the inductive step' },
        { line: 'Suppose that case (1) holds for $y$, so that $x=y$.', reason: 'the first of three cases for $y$' },
        { line: 'Then $y\'=y+1$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=y$, read in reverse' },
        { line: 'So $y\'=x+1$, which is case (3) for $y\'$.', reason: 'since $x=y$, so $y+1=x+1$' },
        { line: 'Suppose instead that case (2) holds for $y$, so that $x=y+u$ for some $u$.', reason: 'the second of three cases for $y$' },
        { line: 'Suppose that $u=1$.', reason: 'the first sub-case for case (2)' },
        { line: 'Then $x=y+1=y\'$, which is case (1) for $y\'$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=y$, since $u=1$' },
        { line: 'Suppose instead that $u \\neq 1$.', reason: 'the second sub-case for case (2)' },
        { line: 'Then $u=w\'$ for some $w$.', reason: 'by the fact that every number other than 1 is a successor, applied to $u \\neq 1$' },
        { line: 'Then $w\'=1+w$.', reason: 'by the addition formula $1+y=y\'$ from the proof that addition exists and is unique' },
        { line: 'So $u=1+w$.', reason: 'by the transitivity of equality, from $u=w\'$ and $w\'=1+w$' },
        { line: 'So $x=y+(1+w)$.', reason: 'by substituting $u=1+w$ into $x=y+u$' },
        { line: 'Then $y+(1+w)=(y+1)+w$.', reason: 'by the associative law of addition' },
        { line: 'Then $y+1=y\'$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=y$' },
        { line: 'So $(y+1)+w=y\'+w$.', reason: 'since $y+1=y\'$' },
        { line: 'So $x=y\'+w$, which is case (2) for $y\'$.', reason: 'by the transitivity of equality, from $x=y+(1+w)$, $y+(1+w)=(y+1)+w$, and $(y+1)+w=y\'+w$' },
        { line: 'Suppose instead that case (3) holds for $y$, so that $y=x+v$ for some $v$.', reason: 'the third of three cases for $y$' },
        { line: 'Then $y\'=(x+v)\'$.', reason: 'since equal numbers have equal successors, by the axiom that each number has exactly one successor, applied to $y=x+v$' },
        { line: 'Then $(x+v)\'=x+v\'$.', reason: 'by the definition of addition, $w+v\'=(w+v)\'$, applied with $w=x$, read in reverse' },
        { line: 'So $y\'=x+v\'$, which is case (3) for $y\'$.', reason: 'by the transitivity of equality, from $y\'=(x+v)\'$ and $(x+v)\'=x+v\'$' },
        { line: 'So $y\'$ belongs to $M$ in every case.', reason: 'since one of cases (1), (2), and (3) for $y\'$ holds regardless of which case holds for $y$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$ and $y$, exactly one of three cases holds. Case (1): $x=y$. Case (2): there exists $u$ such that $x=y+u$. Case (3): there exists $v$ such that $y=x+v$.', reason: 'since the first argument shows at most one case holds, and induction on $y$ shows at least one holds' }
      ]
    }
  ],
  prove: [
    {
      id: 'nng-Addition-1',
      statement: 'For every number n, 0 plus n equals n.',
      method: 'induction',
      check: {
        proof: [
          { line: 'Let $M$ be the set of all $n$ for which $0+n=n$.', reason: 'defines the set used in the induction' },
          { line: 'Then $0+0=0$.', reason: 'by the recursive definition of addition, $n+0=n$, applied with $n=0$' },
          { line: 'So 0 belongs to $M$.', reason: 'by the definition of $M$, since $0+0=0$' },
          { line: 'Suppose that $n$ belongs to $M$, so that $0+n=n$.', reason: 'assumed for the inductive step' },
          { line: 'Then $0+n\'=(0+n)\'$.', reason: 'by the recursive definition of addition, $a+b\'=(a+b)\'$, applied with $a=0$ and $b=n$' },
          { line: 'Then $(0+n)\'=n\'$.', reason: 'since equal numbers have equal successors, applied to the inductive hypothesis $0+n=n$' },
          { line: 'So $0+n\'=n\'$.', reason: 'by the transitivity of equality, from $0+n\'=(0+n)\'$ and $(0+n)\'=n\'$' },
          { line: 'So $n\'$ belongs to $M$.', reason: 'by the definition of $M$' },
          { line: 'Therefore $M$ contains every number.', reason: 'by the axiom of induction, starting at 0' },
          { line: 'Therefore, for every number $n$, $0+n=n$.', reason: 'since $M$ is the set of all numbers and $M$ is the set of all $n$ for which $0+n=n$' }
        ]
      }
    },
    {
      id: 'nng-Addition-2',
      statement: 'For all numbers a and b, the successor of a, plus b, equals the successor of (a plus b).',
      method: 'induction',
      check: {
        proof: [
          { line: 'Let $a$ be fixed.', reason: 'sets up the induction on $b$' },
          { line: 'Let $M$ be the set of all $b$ for which $a\'+b=(a+b)\'$.', reason: 'defines the set used in the induction' },
          { line: 'Then $a\'+0=a\'$.', reason: 'by the recursive definition of addition, $n+0=n$, applied with $n=a\'$' },
          { line: 'Then $a\'=(a+0)\'$.', reason: 'since $a=a+0$ by the recursive definition of addition, and equal numbers have equal successors' },
          { line: 'So $a\'+0=(a+0)\'$.', reason: 'by the transitivity of equality, from $a\'+0=a\'$ and $a\'=(a+0)\'$' },
          { line: 'So 0 belongs to $M$.', reason: 'by the definition of $M$' },
          { line: 'Suppose that $b$ belongs to $M$, so that $a\'+b=(a+b)\'$.', reason: 'assumed for the inductive step' },
          { line: 'Then $a\'+b\'=(a\'+b)\'$.', reason: 'by the recursive definition of addition, $n+m\'=(n+m)\'$, applied with $n=a\'$ and $m=b$' },
          { line: 'Then $(a\'+b)\'=((a+b)\')\'$.', reason: 'since equal numbers have equal successors, applied to the inductive hypothesis $a\'+b=(a+b)\'$' },
          { line: 'Then $((a+b)\')\'=(a+b\')\'$.', reason: 'since $(a+b)\'=a+b\'$ by the recursive definition of addition, read in reverse, and equal numbers have equal successors' },
          { line: 'So $a\'+b\'=(a+b\')\'$.', reason: 'by the transitivity of equality, from the three equations above' },
          { line: 'So $b\'$ belongs to $M$.', reason: 'by the definition of $M$' },
          { line: 'Therefore $M$ contains every number.', reason: 'by the axiom of induction, starting at 0' },
          { line: 'Therefore, for all numbers $a$ and $b$, $a\'+b=(a+b)\'$.', reason: 'since $a$ is arbitrary and $M$ is the set of all numbers' }
        ]
      }
    },
    {
      id: 'nng-Addition-5',
      statement: 'For all numbers a, b, and c: (a plus b) plus c equals (a plus c) plus b.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The sum $(a+b)+c$ equals $a+(b+c)$.', reason: 'by the associative law of addition' },
          { line: 'Then $a+(b+c)=a+(c+b)$.', reason: 'since $b+c=c+b$ by the commutative law of addition' },
          { line: 'Then $a+(c+b)=(a+c)+b$.', reason: 'by the associative law of addition, read in reverse' },
          { line: 'So $(a+b)+c=(a+c)+b$ for all numbers $a$, $b$, and $c$.', reason: 'by the transitivity of equality, from the three equations above' }
        ]
      }
    }
  ]
}
