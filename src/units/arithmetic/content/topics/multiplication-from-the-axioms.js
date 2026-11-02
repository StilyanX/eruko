// Multiplication from the Axioms: multiplication defined by recursion on the Peano axioms, the
// proofs to read from Landau chapter 1 section 4, and the statements to prove from the Natural
// Number Game's Multiplication and AdvMultiplication worlds. Landau's natural numbers start at
// 1, and the successor of x is x'.
export default {
  number: 43,
  manyParts: false,
  ideas: [
    {
      name: 'Multiplication defined by recursion',
      concrete: 'For the fixed number 4, $4\\cdot1=4$, then $4\\cdot2=4\\cdot1\'=4\\cdot1+4=8$, then $4\\cdot3=4\\cdot2\'=4\\cdot2+4=12$: each further factor adds one more copy of 4.',
      general: 'For every $x$ and $y$, the **product** $xy$ is the natural number defined by the two equations $x\\cdot1=x$ and $xy\'=xy+x$.'
    },
    {
      name: 'The Natural Number Game\'s numbers',
      concrete: 'The Natural Number Game writes $n\\times0=0$ as one of its starting facts. Landau has no 0 and starts from $x\\cdot1=x$.',
      general: 'The Natural Number Game uses the same recursive multiplication, read on the second factor.'
    }
  ],
  kinds: [
    { id: 't43-k1', forms: [] }
  ],
  proofs: [
    {
      id: 'landau-28', method: 'induction',
      idea: 'Induction on $y$ shows that two assignments of a product agree. Induction on $x$ builds one assignment that satisfies the two defining equations.',
      statement: 'For every $x$ and $y$, there exists exactly one natural number $xy$ such that $x \\cdot 1 = x$ and $xy\' = xy+x$.',
      lines: [
        { line: 'Let $x$ be fixed.', reason: 'for each such $x$, $xy$ is determined for every $y$ in at most one way' },
        { line: 'Suppose that $a_y$ and $b_y$ are defined for every $y$, with $a_1=x$, $b_1=x$, and $a_{y\'}=a_y+x$, $b_{y\'}=b_y+x$ for every $y$.', reason: 'the comparison of two possible ways of defining $xy$' },
        { line: 'Let $M$ be the set of all $y$ for which $a_y=b_y$.', reason: 'the set for the induction on $y$' },
        { line: 'Then $a_1=x=b_1$.', reason: 'since $a_1=x$ and $b_1=x$, by the hypothesis on $a_y$ and $b_y$, and by the transitivity of equality' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$, since $a_1=b_1$' },
        { line: 'Suppose that $y$ belongs to $M$.', reason: 'the inductive hypothesis' },
        { line: 'Then $a_y=b_y$.', reason: 'by the definition of $M$' },
        { line: 'So $a_y+x=b_y+x$.', reason: 'by substituting $a_y=b_y$' },
        { line: 'Then $a_{y\'}=a_y+x$.', reason: 'by the hypothesis on $a_y$' },
        { line: 'Then $b_y+x=b_{y\'}$.', reason: 'by the hypothesis on $b_y$' },
        { line: 'So $a_{y\'}=b_{y\'}$.', reason: 'by the transitivity of equality, from $a_{y\'}=a_y+x$, $a_y+x=b_y+x$, and $b_y+x=b_{y\'}$' },
        { line: 'So $y\'$ belongs to $M$.', reason: 'by the definition of $M$, since $a_{y\'}=b_{y\'}$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'So $a_y=b_y$ for every $y$.', reason: 'since $M$ is the set of all natural numbers' },
        { line: 'Therefore, for each $x$, at most one assignment of $xy$ to every $y$ satisfies $x\\cdot1=x$ and $xy\'=xy+x$ for every $y$.', reason: 'since every two such assignments $a_y$ and $b_y$ agree for every $y$' },
        { line: 'Let $M$ be the set of all $x$ for which $xy$ can be defined for every $y$. The definition must satisfy $x \\cdot 1=x$ and $xy\'=xy+x$ for every $y$.', reason: 'the set for the induction on $x$' },
        { line: 'For $x=1$, let $xy=y$.', reason: 'the required assignment for $x=1$' },
        { line: 'Then $x \\cdot 1=1$.', reason: 'by the proposed assignment $xy=y$, applied at $y=1$' },
        { line: 'So $x \\cdot 1=x$.', reason: 'since $x=1$, so $1=x$, and $x \\cdot 1=1$' },
        { line: 'Then $xy\'=y\'$.', reason: 'by the proposed assignment $xy=y$, applied at $y\'$' },
        { line: 'Then $y\'=y+1$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=y$, read in reverse' },
        { line: 'Then $y+1=xy+x$.', reason: 'since $xy=y$ and $x=1$, so $xy+x=y+1$' },
        { line: 'So $xy\'=xy+x$.', reason: 'by the transitivity of equality, from $xy\'=y\'$, $y\'=y+1$, and $y+1=xy+x$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$, since $x \\cdot 1=x$ and $xy\'=xy+x$ hold for every $y$ when $x=1$' },
        { line: 'Suppose that $x$ belongs to $M$, so that $xy$ exists for every $y$.', reason: 'the inductive hypothesis' },
        { line: 'Let $x\'y=xy+y$.', reason: 'the required assignment for $x\'$' },
        { line: 'Then $x\' \\cdot 1=x \\cdot 1+1$.', reason: 'by the proposed assignment $x\'y=xy+y$, applied at $y=1$' },
        { line: 'Then $x \\cdot 1=x$.', reason: 'by the definition of $M$, since $x$ belongs to $M$' },
        { line: 'Then $x+1=x\'$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=x$' },
        { line: 'So $x\' \\cdot 1=x\'$.', reason: 'by the transitivity of equality, from $x\' \\cdot 1=x \\cdot 1+1$, $x \\cdot 1=x$, and $x+1=x\'$' },
        { line: 'Then $x\'y\'=xy\'+y\'$.', reason: 'by the proposed assignment $x\'y=xy+y$, applied at $y\'$' },
        { line: 'Then $xy\'=xy+x$.', reason: 'by the definition of $M$, since $x$ belongs to $M$' },
        { line: 'So $xy\'+y\'=(xy+x)+y\'$.', reason: 'by substituting $xy\'=xy+x$' },
        { line: 'Then $(xy+x)+y\'=xy+(x+y\')$.', reason: 'by the associative law of addition' },
        { line: 'Then $x+y\'=(x+y)\'$.', reason: 'by the definition of addition, $w+y\'=(w+y)\'$, applied with $w=x$' },
        { line: 'Then $x\'+y=(x+y)\'$.', reason: 'by the addition formula $x\'+y=(x+y)\'$ from the proof that addition exists and is unique' },
        { line: 'So $x+y\'=x\'+y$.', reason: 'by the transitivity of equality, from $x+y\'=(x+y)\'$ and $x\'+y=(x+y)\'$' },
        { line: 'So $xy+(x+y\')=xy+(x\'+y)$.', reason: 'by substituting $x+y\'=x\'+y$' },
        { line: 'Then $xy+(x\'+y)=xy+(y+x\')$.', reason: 'by the commutative law of addition' },
        { line: 'Then $xy+(y+x\')=(xy+y)+x\'$.', reason: 'by the associative law of addition' },
        { line: 'Then $xy+y=x\'y$.', reason: 'by the proposed assignment $x\'y=xy+y$, read in reverse' },
        { line: 'So $(xy+y)+x\'=x\'y+x\'$.', reason: 'by substituting $xy+y=x\'y$' },
        { line: 'So $x\'y\'=x\'y+x\'$.', reason: 'by the transitivity of equality, from the chain $x\'y\'=xy\'+y\'=(xy+x)+y\'=xy+(x+y\')=xy+(x\'+y)=xy+(y+x\')=(xy+y)+x\'=x\'y+x\'$' },
        { line: 'So $x\'$ belongs to $M$.', reason: 'by the definition of $M$, since $x\' \\cdot 1=x\'$ and $x\'y\'=x\'y+x\'$ hold for every $y$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$ and $y$, there exists exactly one natural number $xy$ such that $x \\cdot 1=x$ and $xy\'=xy+x$.', reason: 'since at most one such assignment exists for each $x$, and $M$ is the set of all natural numbers' }
      ]
    },
    {
      id: 'landau-29', method: 'induction',
      idea: 'Fix $y$, then use induction on $x$ to show that $xy=yx$ for every $x$.',
      statement: 'For every $x$ and $y$, $xy=yx$.',
      lines: [
        { line: 'Let $y$ be fixed.', reason: 'the induction on $x$' },
        { line: 'Let $M$ be the set of all $x$ for which $xy=yx$.', reason: 'the set for the induction' },
        { line: 'Then $y \\cdot 1=y$.', reason: 'by the definition of multiplication, $w \\cdot 1=w$, applied with $w=y$' },
        { line: 'Then $1 \\cdot y=y$.', reason: 'by the multiplication formula $1y=y$ from the proof that multiplication exists and is unique' },
        { line: 'So $1 \\cdot y=y \\cdot 1$.', reason: 'by the transitivity of equality, from $y \\cdot 1=y$ and $1 \\cdot y=y$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Suppose that $x$ belongs to $M$.', reason: 'the inductive hypothesis' },
        { line: 'Then $xy=yx$.', reason: 'by the definition of $M$' },
        { line: 'So $xy+y=yx+y$.', reason: 'by substituting $xy=yx$' },
        { line: 'Then $yx\'=yx+y$.', reason: 'by the definition of multiplication, $wz\'=wz+w$, applied with $w=y$ and $z=x$' },
        { line: 'So $xy+y=yx\'$.', reason: 'by the transitivity of equality, from $xy+y=yx+y$ and $yx+y=yx\'$' },
        { line: 'Then $x\'y=xy+y$.', reason: 'by the multiplication formula $x\'y=xy+y$ from the proof that multiplication exists and is unique' },
        { line: 'So $x\'y=yx\'$.', reason: 'by the transitivity of equality, from $x\'y=xy+y$ and $xy+y=yx\'$' },
        { line: 'So $x\'$ belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$ and $y$, $xy=yx$.', reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $x$ for which $xy=yx$' }
      ]
    },
    {
      id: 'landau-30', method: 'induction',
      idea: 'Fix $x$ and $y$, then use induction on $z$ to show that the distributive law holds for every $z$.',
      statement: 'For every $x$, $y$, and $z$, $x(y+z)=xy+xz$.',
      lines: [
        { line: 'Let $x$ and $y$ be fixed.', reason: 'the induction on $z$' },
        { line: 'Let $M$ be the set of all $z$ for which $x(y+z)=xy+xz$.', reason: 'the set for the induction' },
        { line: 'Then $y+1=y\'$.', reason: 'by the definition of addition, $w+1=w\'$, applied with $w=y$' },
        { line: 'So $x(y+1)=xy\'$.', reason: 'by substituting $y+1=y\'$' },
        { line: 'Then $xy\'=xy+x$.', reason: 'by the definition of multiplication, $wz\'=wz+w$, applied with $w=x$ and $z=y$' },
        { line: 'Then $x \\cdot 1=x$.', reason: 'by the definition of multiplication, $w \\cdot 1=w$, applied with $w=x$' },
        { line: 'So $xy+x=xy+x \\cdot 1$.', reason: 'by substituting $x=x \\cdot 1$' },
        { line: 'So $x(y+1)=xy+x \\cdot 1$.', reason: 'by the transitivity of equality, from $x(y+1)=xy\'$, $xy\'=xy+x$, and $xy+x=xy+x \\cdot 1$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Suppose that $z$ belongs to $M$.', reason: 'the inductive hypothesis' },
        { line: 'Then $x(y+z)=xy+xz$.', reason: 'by the definition of $M$' },
        { line: 'Then $y+z\'=(y+z)\'$.', reason: 'by the definition of addition, $w+z\'=(w+z)\'$, applied with $w=y$' },
        { line: 'So $x(y+z\')=x((y+z)\')$.', reason: 'by substituting $y+z\'=(y+z)\'$' },
        { line: 'Then $x((y+z)\')=x(y+z)+x$.', reason: 'by the definition of multiplication, $wz\'=wz+w$, applied with $w=x$ and $z=y+z$' },
        { line: 'So $x(y+z)+x=(xy+xz)+x$.', reason: 'by substituting $x(y+z)=xy+xz$' },
        { line: 'Then $(xy+xz)+x=xy+(xz+x)$.', reason: 'by the associative law of addition' },
        { line: 'Then $xz\'=xz+x$.', reason: 'by the definition of multiplication, $wz\'=wz+w$, applied with $w=x$ and $z=z$' },
        { line: 'So $xz+x=xz\'$.', reason: 'by the symmetry of equality, from $xz\'=xz+x$' },
        { line: 'So $xy+(xz+x)=xy+xz\'$.', reason: 'by substituting $xz+x=xz\'$' },
        { line: 'So $x(y+z\')=xy+xz\'$.', reason: 'by the transitivity of equality, from the chain $x(y+z\')=x((y+z)\')=x(y+z)+x=(xy+xz)+x=xy+(xz+x)=xy+xz\'$' },
        { line: 'So $z\'$ belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$, $y$, and $z$, $x(y+z)=xy+xz$.', reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $z$ for which $x(y+z)=xy+xz$' }
      ]
    },
    {
      id: 'landau-31', method: 'induction',
      idea: 'Fix $x$ and $y$, then use induction on $z$ to show that regrouping holds for every $z$.',
      statement: 'For every $x$, $y$, and $z$, $(xy)z=x(yz)$.',
      lines: [
        { line: 'Let $x$ and $y$ be fixed.', reason: 'the induction on $z$' },
        { line: 'Let $M$ be the set of all $z$ for which $(xy)z=x(yz)$.', reason: 'the set for the induction' },
        { line: 'Then $(xy) \\cdot 1=xy$.', reason: 'by the definition of multiplication, $w \\cdot 1=w$, applied with $w=xy$' },
        { line: 'Then $y \\cdot 1=y$.', reason: 'by the definition of multiplication, $w \\cdot 1=w$, applied with $w=y$' },
        { line: 'So $x(y \\cdot 1)=xy$.', reason: 'by substituting $y \\cdot 1=y$' },
        { line: 'So $(xy) \\cdot 1=x(y \\cdot 1)$.', reason: 'by the transitivity of equality, from $(xy) \\cdot 1=xy$ and $xy=x(y \\cdot 1)$' },
        { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Suppose that $z$ belongs to $M$.', reason: 'the inductive hypothesis' },
        { line: 'Then $(xy)z=x(yz)$.', reason: 'by the definition of $M$' },
        { line: 'Then $(xy)z\'=(xy)z+xy$.', reason: 'by the definition of multiplication, $wz\'=wz+w$, applied with $w=xy$ and $z=z$' },
        { line: 'So $(xy)z+xy=x(yz)+xy$.', reason: 'by substituting $(xy)z=x(yz)$' },
        { line: 'Then $x(yz)+xy=x(yz+y)$.', reason: 'by the distributive law, read in reverse' },
        { line: 'Then $yz\'=yz+y$.', reason: 'by the definition of multiplication, $wz\'=wz+w$, applied with $w=y$ and $z=z$' },
        { line: 'So $x(yz+y)=x(yz\')$.', reason: 'by substituting $yz+y=yz\'$, from $yz\'=yz+y$ read in reverse' },
        { line: 'So $(xy)z\'=x(yz\')$.', reason: 'by the transitivity of equality, from the chain $(xy)z\'=(xy)z+xy=x(yz)+xy=x(yz+y)=x(yz\')$' },
        { line: 'So $z\'$ belongs to $M$.', reason: 'by the definition of $M$' },
        { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
        { line: 'Therefore, for every $x$, $y$, and $z$, $(xy)z=x(yz)$.', reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $z$ for which $(xy)z=x(yz)$' }
      ]
    },
    {
      id: 'landau-32', method: 'proof by cases',
      idea: 'Split into the three order cases for $x$ and $y$. The third case reuses the first case with the inequality reversed.',
      statement: 'For every $x$, $y$, and $z$: if $x>y$ then $xz>yz$; if $x=y$ then $xz=yz$; and if $x<y$ then $xz<yz$.',
      lines: [
        { line: 'Suppose that $x>y$.', reason: 'the first case' },
        { line: 'Then $x=y+u$ for some $u$.', reason: 'by the definition of $>$' },
        { line: 'So $xz=(y+u)z$.', reason: 'by substituting $x=y+u$' },
        { line: 'Then $(y+u)z=yz+uz$.', reason: 'by the distributive law' },
        { line: 'So $xz=yz+uz$.', reason: 'by the transitivity of equality, from $xz=(y+u)z$ and $(y+u)z=yz+uz$' },
        { line: 'So $xz>yz$.', reason: 'by the fact that a sum exceeds its first addend, applied with first addend $yz$ and second addend $uz$' },
        { line: 'Suppose instead that $x=y$.', reason: 'the second case' },
        { line: 'So $xz=yz$.', reason: 'by substituting $x=y$' },
        { line: 'Suppose instead that $x<y$.', reason: 'the third case' },
        { line: 'Then $y>x$.', reason: 'by the fact that less-than means greater-than reversed' },
        { line: 'Then $yz>xz$.', reason: 'by the first case, applied to $y>x$' },
        { line: 'So $xz<yz$.', reason: 'by the fact that greater-than means less-than reversed, applied to $yz>xz$' },
        { line: 'Therefore, if $x>y$ then $xz>yz$; if $x=y$ then $xz=yz$; and if $x<y$ then $xz<yz$.', reason: 'since each case gives the corresponding conclusion' }
      ]
    },
    {
      id: 'landau-33', method: 'proof by cases',
      idea: 'The three cases for $x$ and $y$ line up one-to-one with the three cases for the products. So each side determines the other.',
      statement: 'For every $x$, $y$, and $z$: if $xz>yz$ then $x>y$; if $xz=yz$ then $x=y$; and if $xz<yz$ then $x<y$.',
      lines: [
        { line: 'Exactly one of $x>y$, $x=y$, $x<y$ holds.', reason: 'by the trichotomy law of order' },
        { line: 'Exactly one of $xz>yz$, $xz=yz$, $xz<yz$ holds.', reason: 'by the trichotomy law of order, applied to $xz$ and $yz$' },
        { line: 'Then $x>y$ gives $xz>yz$, $x=y$ gives $xz=yz$, and $x<y$ gives $xz<yz$.', reason: 'by the fact that multiplication preserves the order relation' },
        { line: 'So each case for $x$ and $y$ corresponds to exactly one case for $xz$ and $yz$. No two different cases for $x$ and $y$ give the same case for $xz$ and $yz$.', reason: 'the three cases for each pair are mutually exclusive' },
        { line: 'Therefore, if $xz>yz$ then $x>y$; if $xz=yz$ then $x=y$; and if $xz<yz$ then $x<y$.', reason: 'since the case for $xz$ and $yz$ determines which case holds for $x$ and $y$' }
      ]
    },
    {
      id: 'landau-34', method: 'direct proof',
      idea: 'Multiply one inequality on the right and the other on the left, then chain the two results by commutativity.',
      statement: 'If $x>y$ and $z>u$, then $xz>yu$.',
      lines: [
        { line: 'Suppose that $x>y$ and $z>u$.', reason: 'the hypothesis' },
        { line: 'Then $xz>yz$.', reason: 'by the fact that multiplication preserves the order relation, applied to $x>y$' },
        { line: 'Then $yz=zy$.', reason: 'by the commutative law of multiplication' },
        { line: 'Then $zy>uy$.', reason: 'by the fact that multiplication preserves the order relation, applied to $z>u$' },
        { line: 'Then $uy=yu$.', reason: 'by the commutative law of multiplication' },
        { line: 'So $yz>yu$.', reason: 'by substituting $yz=zy$ and $uy=yu$ into $zy>uy$' },
        { line: 'Therefore $xz>yu$.', reason: 'by the transitivity of strict order, applied to $xz>yz$ and $yz>yu$' }
      ]
    },
    {
      id: 'landau-35', method: 'proof by cases',
      idea: 'Split the hypothesis that carries $\\geq$ into its two cases. Use the result for two strict inequalities in the case where both are strict. This covers both mixed hypotheses.',
      statement: 'If $x \\geq y$ and $z>u$, or if $x>y$ and $z \\geq u$, then $xz>yu$.',
      lines: [
        { line: 'Suppose that $x \\geq y$ and $z>u$.', reason: 'the first hypothesis' },
        { line: 'Then $x>y$ or $x=y$.', reason: 'by the definition of $\\geq$' },
        { line: 'Suppose that $x=y$.', reason: 'the first sub-case' },
        { line: 'Then $xz=yz$.', reason: 'by the fact that multiplication preserves the order relation, applied to $x=y$' },
        { line: 'Then $yz>yu$.', reason: 'by the fact that multiplication preserves the order relation, applied to $z>u$' },
        { line: 'So $xz>yu$.', reason: 'by substituting $xz=yz$ into $yz>yu$' },
        { line: 'Suppose instead that $x>y$.', reason: 'the second sub-case' },
        { line: 'So $xz>yu$.', reason: 'by the result for two strict inequalities, applied to $x>y$ and $z>u$' },
        { line: 'Suppose instead that $x>y$ and $z \\geq u$.', reason: 'the second hypothesis' },
        { line: 'Then $z>u$ or $z=u$.', reason: 'by the definition of $\\geq$' },
        { line: 'Suppose that $z=u$.', reason: 'the first sub-case' },
        { line: 'Then $xz>yz$.', reason: 'by the fact that multiplication preserves the order relation, applied to $x>y$' },
        { line: 'So $xz>yu$.', reason: 'by substituting $z=u$ into $xz>yz$' },
        { line: 'Suppose instead that $z>u$.', reason: 'the second sub-case' },
        { line: 'So $xz>yu$.', reason: 'by the result for two strict inequalities, applied to $x>y$ and $z>u$' },
        { line: 'Therefore, in either hypothesis, $xz>yu$.', reason: 'since $xz>yu$ holds in every sub-case' }
      ]
    },
    {
      id: 'landau-36', method: 'proof by cases',
      idea: 'Split each hypothesis into equality or strict inequality, and treat the case where both are equalities apart from the rest. This covers every combination.',
      statement: 'If $x \\geq y$ and $z \\geq u$, then $xz \\geq yu$.',
      lines: [
        { line: 'Suppose that $x \\geq y$ and $z \\geq u$.', reason: 'the hypothesis' },
        { line: 'Then $x>y$ or $x=y$.', reason: 'by the definition of $\\geq$' },
        { line: 'Then $z>u$ or $z=u$.', reason: 'by the definition of $\\geq$' },
        { line: 'Suppose that $x=y$ and $z=u$.', reason: 'the case where both are equalities' },
        { line: 'Then $xz=yu$.', reason: 'by substituting $x=y$ and $z=u$' },
        { line: 'So $xz \\geq yu$.', reason: 'by the definition of $\\geq$, since $xz=yu$' },
        { line: 'Suppose instead that $x>y$, or that $z>u$.', reason: 'the case where at least one is a strict inequality' },
        { line: 'Then $xz>yu$.', reason: 'the result for a strict and a non-strict inequality, applied to $x \\geq y$ and $z>u$, or to $x>y$ and $z \\geq u$' },
        { line: 'So $xz \\geq yu$.', reason: 'by the definition of $\\geq$, since $xz>yu$' },
        { line: 'Therefore $xz \\geq yu$.', reason: 'since $xz \\geq yu$ holds in every case' }
      ]
    }
  ],
  prove: [
    {
      id: 'nng-Multiplication-1',
      statement: 'For every number m, m times 1 equals m.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The number $1$ is $0\'$.', reason: 'the meaning of the numeral 1' },
        { line: 'So $m\\cdot 1=m\\cdot 0\'$.', reason: 'by substituting $1=0\'$' },
        { line: 'Then $m\\cdot 0\'=m\\cdot 0+m$.', reason: 'by the definition of multiplication, $w\\cdot v\'=w\\cdot v+w$, applied with $w=m$ and $v=0$' },
        { line: 'Then $m\\cdot 0=0$, so $m\\cdot 0+m=0+m$.', reason: 'by the definition of multiplication, $w\\cdot 0=0$, applied with $w=m$' },
        { line: 'Then $0+m=m$.', reason: 'by the fact that 0 plus a number is that number' },
        { line: 'So $m\\cdot 1=m$.', reason: 'by the transitivity of equality, from the chain $m\\cdot 1=m\\cdot 0\'=m\\cdot 0+m=0+m=m$' }
      ] }
    },
    {
      id: 'nng-Multiplication-2',
      statement: 'For every number m, 0 times m equals 0.',
      method: 'induction',
      check: { proof: [
        { line: 'Let $M$ be the set of all $m$ for which $0\\cdot m=0$.', reason: 'the set for the induction' },
        { line: 'Then $0\\cdot 0=0$, so 0 belongs to $M$.', reason: 'by the definition of multiplication, $w\\cdot 0=0$, applied with $w=0$' },
        { line: 'Suppose that $m$ belongs to $M$, so that $0\\cdot m=0$.', reason: 'the inductive hypothesis' },
        { line: 'Then $0\\cdot m\'=0\\cdot m+0$.', reason: 'by the definition of multiplication, $w\\cdot v\'=w\\cdot v+w$, applied with $w=0$ and $v=m$' },
        { line: 'Then $0\\cdot m+0=0\\cdot m$.', reason: 'by the definition of addition, $w+0=w$, applied with $w=0\\cdot m$' },
        { line: 'So $0\\cdot m\'=0$, and $m\'$ belongs to $M$.', reason: 'by the transitivity of equality, from the chain $0\\cdot m\'=0\\cdot m+0=0\\cdot m=0$' },
        { line: 'Therefore $M$ contains every number, so $0\\cdot m=0$ for every $m$.', reason: 'by the axiom of induction' }
      ] }
    },
    {
      id: 'nng-Multiplication-3',
      statement: 'For all numbers a and b, the successor of a, times b, equals a times b, plus b.',
      method: 'induction',
      check: { proof: [
        { line: 'Let $a$ be fixed, and let $M$ be the set of all $b$ for which $a\'\\cdot b=a\\cdot b+b$.', reason: 'the set for the induction on $b$' },
        { line: 'Then $a\'\\cdot 0=0$ and $a\\cdot 0+0=a\\cdot 0=0$.', reason: 'by the definition of multiplication, $w\\cdot 0=0$, and the definition of addition, $w+0=w$' },
        { line: 'So $a\'\\cdot 0=a\\cdot 0+0$, and 0 belongs to $M$.', reason: 'by the transitivity of equality' },
        { line: 'Suppose that $b$ belongs to $M$, so that $a\'\\cdot b=a\\cdot b+b$.', reason: 'the inductive hypothesis' },
        { line: 'Then $a\'\\cdot b\'=a\'\\cdot b+a\'=(a\\cdot b+b)+a\'$.', reason: 'by the definition of multiplication, $w\\cdot v\'=w\\cdot v+w$, then substituting $a\'\\cdot b=a\\cdot b+b$' },
        { line: 'Then $(a\\cdot b+b)+a\'=((a\\cdot b+b)+a)\'$.', reason: 'by the definition of addition, $w+v\'=(w+v)\'$' },
        { line: 'Then $a\\cdot b\'+b\'=(a\\cdot b+a)+b\'=((a\\cdot b+a)+b)\'$.', reason: 'by the definition of multiplication, $w\\cdot v\'=w\\cdot v+w$, then the definition of addition, $w+v\'=(w+v)\'$' },
        { line: 'Then $(a\\cdot b+b)+a=(a\\cdot b+a)+b$.', reason: 'by the rule $(x+y)+z=(x+z)+y$ for addition, proved in the topic on addition' },
        { line: 'So $((a\\cdot b+b)+a)\'=((a\\cdot b+a)+b)\'$.', reason: 'since equal numbers have equal successors, applied to the previous line' },
        { line: 'So $a\'\\cdot b\'=a\\cdot b\'+b\'$, and $b\'$ belongs to $M$.', reason: 'by the transitivity of equality, from the chain $a\'\\cdot b\'=((a\\cdot b+b)+a)\'=((a\\cdot b+a)+b)\'=a\\cdot b\'+b\'$' },
        { line: 'Therefore $M$ contains every number, so $a\'\\cdot b=a\\cdot b+b$ for all $a$ and $b$.', reason: 'by the axiom of induction' }
      ] }
    },
    {
      id: 'nng-Multiplication-5',
      statement: 'For every number m, 1 times m equals m.',
      method: 'induction',
      check: { proof: [
        { line: 'Let $M$ be the set of all $m$ for which $1\\cdot m=m$.', reason: 'the set for the induction' },
        { line: 'Then $1\\cdot 0=0$, so 0 belongs to $M$.', reason: 'by the definition of multiplication, $w\\cdot 0=0$, applied with $w=1$' },
        { line: 'Suppose that $m$ belongs to $M$, so that $1\\cdot m=m$.', reason: 'the inductive hypothesis' },
        { line: 'Then $1\\cdot m\'=1\\cdot m+1=m+1$.', reason: 'by the definition of multiplication, $w\\cdot v\'=w\\cdot v+w$, then substituting $1\\cdot m=m$' },
        { line: 'Then $m+1=m\'$.', reason: 'by the fact that the successor of a number is that number plus 1' },
        { line: 'So $1\\cdot m\'=m\'$, and $m\'$ belongs to $M$.', reason: 'by the transitivity of equality' },
        { line: 'Therefore $M$ contains every number, so $1\\cdot m=m$ for every $m$.', reason: 'by the axiom of induction' }
      ] }
    },
    {
      id: 'nng-Multiplication-6',
      statement: 'For every number m, 2 times m equals m plus m.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The number $2$ is $1\'$.', reason: 'the meaning of the numeral 2' },
        { line: 'So $2\\cdot m=1\'\\cdot m=1\\cdot m+m$.', reason: 'by substituting $2=1\'$, then the rule that the successor of $a$, times $b$, equals $a\\cdot b+b$' },
        { line: 'Then $1\\cdot m=m$, so $1\\cdot m+m=m+m$.', reason: 'by the rule that 1 times a number is that number' },
        { line: 'So $2\\cdot m=m+m$.', reason: 'by the transitivity of equality' }
      ] }
    },
    {
      id: 'nng-Multiplication-8',
      statement: 'For all numbers a, b, and c: (a plus b) times c equals (a times c) plus (b times c).',
      method: 'direct proof',
      check: { proof: [
        { line: 'The product $(a+b)\\cdot c$ equals $c\\cdot(a+b)$.', reason: 'by the commutative law of multiplication' },
        { line: 'Then $c\\cdot(a+b)=c\\cdot a+c\\cdot b$.', reason: 'by the distributive law' },
        { line: 'Then $c\\cdot a=a\\cdot c$ and $c\\cdot b=b\\cdot c$, so $c\\cdot a+c\\cdot b=a\\cdot c+b\\cdot c$.', reason: 'by the commutative law of multiplication, twice' },
        { line: 'So $(a+b)\\cdot c=a\\cdot c+b\\cdot c$.', reason: 'by the transitivity of equality' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-1',
      statement: 'Let a, b, and t be numbers with a at most b. Then a times t is at most b times t.',
      method: 'proof by cases',
      check: { proof: [
        { line: 'Suppose that $a \\leq b$.', reason: 'the hypothesis' },
        { line: 'Then $a<b$ or $a=b$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose that $a=b$.', reason: 'the first case' },
        { line: 'So $at=bt$.', reason: 'by substituting $a=b$' },
        { line: 'So $at \\leq bt$, since $at=bt$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose instead that $a<b$.', reason: 'the second case' },
        { line: 'Suppose that $t=0$.', reason: 'a sub-case' },
        { line: 'Then $at=0$ and $bt=0$.', reason: 'by the rule that 0 times a number is 0, together with the commutative law of multiplication' },
        { line: 'So $at \\leq bt$, since $at=bt$.', reason: 'by the definition of $\\leq$' },
        { line: 'Suppose instead that $t \\neq 0$.', reason: 'the other sub-case' },
        { line: 'Then $at<bt$, since $a<b$ and $t$ is nonzero.', reason: 'by the fact that multiplication preserves the order relation' },
        { line: 'So $at \\leq bt$.', reason: 'by the definition of $\\leq$' },
        { line: 'Therefore $at \\leq bt$ in every case.', reason: 'since every case gives the conclusion' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-2',
      statement: 'For all numbers a and b: if a times b is not 0, then b is not 0.',
      method: 'proof of the contrapositive',
      check: { proof: [
        { line: 'The contrapositive of the claim is that $b=0$ implies $a\\cdot b=0$.', reason: 'the contrapositive of the claim' },
        { line: 'Suppose that $b=0$.', reason: 'the hypothesis of the contrapositive' },
        { line: 'Then $a\\cdot b=a\\cdot 0$.', reason: 'by substituting $b=0$' },
        { line: 'Then $a\\cdot 0=0$.', reason: 'by the definition of multiplication, $w\\cdot 0=0$, applied with $w=a$' },
        { line: 'So $a\\cdot b=0$.', reason: 'by the transitivity of equality' },
        { line: 'Therefore, if $a\\cdot b \\neq 0$, then $b \\neq 0$.', reason: 'since the contrapositive holds' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-3',
      statement: 'Let a be a number that is not 0. Then a equals the successor of some number n.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $a\\neq 0$.', reason: 'the hypothesis' },
        { line: 'Then $a=0$ or $a=n\'$ for some number $n$.', reason: 'by the fact that every number other than the first one is a successor, with 0 as the first number' },
        { line: 'Since $a\\neq 0$, the first case does not hold.', reason: 'the hypothesis' },
        { line: 'So $a=n\'$ for some number $n$.', reason: 'the only case left' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-4',
      statement: 'For every number a: if a is not 0, then 1 is at most a.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $a \\neq 0$.', reason: 'the hypothesis' },
        { line: 'Then $a=k\'$ for some $k$, because a nonzero number is a successor.', reason: 'the fact proved above' },
        { line: 'Then $k\'=k+1$.', reason: 'the successor of a number equals that number plus 1, proved in the topic on the natural numbers' },
        { line: 'Then $0 \\leq k$, so $k \\geq 0$.', reason: 'by the fact that 0 is at most every number, proved in the topic on order' },
        { line: 'Then $k+1 \\geq 0+1$.', reason: 'by the fact that adding a number to both sides preserves the order relation, proved in the topic on order' },
        { line: 'Then $0+1=1$.', reason: 'by the fact that 0 plus a number equals that number, proved in the topic on addition' },
        { line: 'So $a \\geq 1$.', reason: 'by replacing each side of $k+1 \\geq 0+1$ with an equal number, from $a=k\'$, $k\'=k+1$, and $0+1=1$' },
        { line: 'So $1 \\leq a$.', reason: 'by the fact that greater-or-equal means less-or-equal reversed' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-5',
      statement: 'Let a and b be numbers with a times b not 0. Then a is at most a times b.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $a\\cdot b \\neq 0$.', reason: 'the hypothesis' },
        { line: 'Then $b \\neq 0$.', reason: 'the fact proved above that a product that is not 0 has a nonzero second factor' },
        { line: 'Then $1 \\leq b$, so $b \\geq 1$.', reason: 'by the fact proved above that 1 is at most a nonzero number, and that less-or-equal reversed is greater-or-equal' },
        { line: 'Then $a\\cdot b \\geq a\\cdot 1$.', reason: 'by the fact that multiplication preserves the order relation, applied to $b \\geq 1$' },
        { line: 'Then $a\\cdot 1=a$.', reason: 'by the statement proved above that a number times 1 equals that number' },
        { line: 'So $a\\cdot b \\geq a$.', reason: 'by the transitivity of equality and the inequality, from $a\\cdot b \\geq a\\cdot 1$ and $a\\cdot 1=a$' },
        { line: 'So $a \\leq a\\cdot b$.', reason: 'by the fact that greater-or-equal means less-or-equal reversed' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-6',
      statement: 'For all numbers x and y: if x times y equals 1, then x equals 1.',
      method: 'proof by contradiction',
      check: { proof: [
        { line: 'Suppose that $x\\cdot y=1$.', reason: 'the hypothesis' },
        { line: 'Then $x \\neq 0$, because $0\\cdot y=0$ and $0 \\neq 1$.', reason: 'by the statement proved above that 0 times a number is 0, and that 0 is not 1' },
        { line: 'Then $1 \\leq x$, so $x \\geq 1$.', reason: 'by the statement proved above that 1 is at most a nonzero number, and that less-or-equal reversed is greater-or-equal' },
        { line: 'Suppose, for contradiction, that $x \\neq 1$.', reason: 'the supposition for a contradiction' },
        { line: 'Then $x>1$.', reason: 'a fact of the order of the natural numbers: $x \\geq 1$ and $x \\neq 1$ together give $x>1$' },
        { line: 'Then $y \\neq 0$, because $x\\cdot 0=0 \\neq 1$.', reason: 'by the rule that a number times 0 is 0' },
        { line: 'Then $1 \\leq y$, so $y \\geq 1$.', reason: 'by the statement proved above that 1 is at most a nonzero number, and that less-or-equal reversed is greater-or-equal' },
        { line: 'Then $x\\cdot y > 1\\cdot y$.', reason: 'by the fact that multiplication preserves the order relation, applied to $x>1$' },
        { line: 'Then $1\\cdot y=y$.', reason: 'by the statement proved above that 1 times a number equals that number' },
        { line: 'So $x\\cdot y>y \\geq 1$, so $x\\cdot y \\neq 1$.', reason: 'by the transitivity of the order relation, from $x\\cdot y>1\\cdot y$, $1\\cdot y=y$, and $y \\geq 1$' },
        { line: 'This contradicts $x\\cdot y=1$.', reason: 'since the first line supposes that $x\\cdot y=1$' },
        { line: 'So $x=1$.', reason: 'since assuming otherwise leads to a contradiction' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-7',
      statement: 'Let a and b be numbers that are not 0. Then a times b is not 0.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $a\\neq 0$ and $b\\neq 0$.', reason: 'the hypothesis' },
        { line: 'Then $a=k\'$ and $b=m\'$ for some numbers $k$ and $m$.', reason: 'by the fact that a nonzero number is a successor, proved above' },
        { line: 'So $a\\cdot b=a\\cdot m\'=a\\cdot m+a$.', reason: 'by substituting $b=m\'$, then the definition of multiplication, $w\\cdot v\'=w\\cdot v+w$' },
        { line: 'Then $a\\cdot m+a=a\\cdot m+k\'=(a\\cdot m+k)\'$.', reason: 'by substituting $a=k\'$, then the definition of addition, $w+v\'=(w+v)\'$' },
        { line: 'So $a\\cdot b=(a\\cdot m+k)\'$.', reason: 'by the transitivity of equality' },
        { line: 'Then $(a\\cdot m+k)\'\\neq 0$, so $a\\cdot b\\neq 0$.', reason: 'by the fact that the successor of a number is never 0' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-8',
      statement: 'For all numbers a and b: if a times b equals 0, then a equals 0 or b equals 0.',
      method: 'proof by cases',
      check: { proof: [
        { line: 'Suppose that $a\\cdot b=0$.', reason: 'the hypothesis' },
        { line: 'Then $b=0$ or $b=m\'$ for some number $m$.', reason: 'by the fact that every number other than the first one is a successor, with 0 as the first number' },
        { line: 'Suppose that $b=0$.', reason: 'the first case' },
        { line: 'Then $a=0$ or $b=0$ holds.', reason: 'since $b=0$' },
        { line: 'Suppose instead that $b=m\'$.', reason: 'the second case' },
        { line: 'Then $a\\cdot b=a\\cdot m\'=a\\cdot m+a$.', reason: 'by substituting $b=m\'$, then the definition of multiplication, $w\\cdot v\'=w\\cdot v+w$' },
        { line: 'So $a\\cdot m+a=0$.', reason: 'by the transitivity of equality, from $a\\cdot m+a=a\\cdot b$ and $a\\cdot b=0$' },
        { line: 'Then $a=0$, so $a=0$ or $b=0$ holds.', reason: 'by the rule that if $x+y=0$ then $y=0$, applied with $x=a\\cdot m$ and $y=a$' },
        { line: 'Therefore $a=0$ or $b=0$.', reason: 'since both cases give the conclusion' }
      ] }
    },
    {
      id: 'nng-AdvMultiplication-9',
      statement: 'Let a, b, and c be numbers with a not 0 and a times b equal to a times c. Then b equals c.',
      method: 'proof by contradiction',
      check: { proof: [
        { line: 'Suppose that $a\\neq 0$ and $a\\cdot b=a\\cdot c$.', reason: 'the hypothesis' },
        { line: 'Suppose, for contradiction, that $b\\neq c$.', reason: 'the supposition for a contradiction' },
        { line: 'Then $b<c$ or $c<b$.', reason: 'by the trichotomy law of order' },
        { line: 'Suppose that $b<c$, so that $c=b+d$ for some number $d$.', reason: 'the first case, by the definition of $<$' },
        { line: 'Then $d\\neq 0$, since $d=0$ would give $c=b+0=b$.', reason: 'by the definition of addition, $w+0=w$, and the supposition $b\\neq c$' },
        { line: 'Then $a\\cdot b=a\\cdot c=a\\cdot(b+d)=a\\cdot b+a\\cdot d$.', reason: 'by substituting $c=b+d$, then the distributive law' },
        { line: 'So $a\\cdot d=0$.', reason: 'by the rule that if $x+y=x$ then $y=0$, applied with $x=a\\cdot b$ and $y=a\\cdot d$' },
        { line: 'But $a\\neq 0$ and $d\\neq 0$ give $a\\cdot d\\neq 0$, a contradiction.', reason: 'by the rule that a product of two nonzero numbers is not 0' },
        { line: 'Suppose instead that $c<b$.', reason: 'the second case' },
        { line: 'The same steps with $b$ and $c$ exchanged, starting from $a\\cdot c=a\\cdot b$, give a contradiction.', reason: 'by the first case, with $b$ and $c$ exchanged' },
        { line: 'So $b=c$.', reason: 'since assuming otherwise leads to a contradiction' }
      ] }
    },
    {
      id: 'aether-43-1',
      statement: 'Let a and b be numbers with a not 0 and a times b equal to a. Then b equals 1.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Suppose that $a \\neq 0$ and $a \\cdot b=a$.', reason: 'the hypothesis' },
        { line: 'Then $a \\cdot 1=a$.', reason: 'by the recursive definition of multiplication, the equation $w \\cdot 1=w$ applied with $w=a$' },
        { line: 'So $a \\cdot b=a \\cdot 1$.', reason: 'by the transitivity of equality, from $a \\cdot b=a$ and $a=a \\cdot 1$' },
        { line: 'So $b=1$.', reason: 'the fact proved above, the cancellation law for multiplication by a nonzero number, applied to $a \\cdot b=a \\cdot 1$' }
      ] }
    }
  ]
}
