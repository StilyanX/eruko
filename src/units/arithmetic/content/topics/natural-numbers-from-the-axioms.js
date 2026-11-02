// The Natural Numbers from the Axioms: the Peano axioms for Landau's natural numbers, the proofs
// to read from chapter 1 section 1, and the statements to prove from the Natural Number Game's
// Tutorial world. Landau's natural numbers start at 1, and the successor of x is written x'.
export default {
  number: 40,
  manyParts: false,
  ideas: [
    {
      name: 'The natural numbers and the successor',
      concrete: 'The number 1 is a natural number, and its successor, written $1\'$, is a natural number too, different from 1.',
      general: 'Start from a set of objects called natural numbers. The number 1 is a natural number. For every natural number $x$ there exists exactly one natural number, called the **successor** of $x$ and written $x\'$. For every $x$, $x\' \\neq 1$. If $x\' = y\'$, then $x = y$.',
      definitions: [
        'A **natural number** is one of the objects of the given set.'
      ]
    },
    {
      name: 'The axiom of induction',
      concrete: 'A set that contains 1, and that contains $x\'$ whenever it contains $x$, contains every natural number.',
      general: 'Let $M$ be a set of natural numbers with two properties. First, 1 belongs to $M$. Second, if $x$ belongs to $M$, then $x\'$ belongs to $M$. Then $M$ contains every natural number.',
      definitions: [
        'A **set** is a totality of objects.'
      ]
    },
    {
      name: 'The Natural Number Game\'s numbers',
      concrete: 'The Natural Number Game starts counting at 0, so its first three numbers are 0, 1, 2. Landau\'s first three numbers are 1, 2, 3.',
      general: 'The Natural Number Game uses the whole numbers, which begin at 0 and have the same successor step. Landau\'s natural numbers begin at 1 and never include 0.'
    }
  ],
  kinds: [
    { id: 't40-k1', forms: [] }
  ],
  proofs: [
    {
      id: 'landau-1',
      method: 'proof by contradiction',
      statement: 'If $x \\neq y$, then $x\' \\neq y\'$.',
      idea: 'A successor determines its own number, so two numbers with the same successor are the same number.',
      lines: [
        {
          line: 'Suppose that $x\' = y\'$.',
          reason: 'assumed for a proof by contradiction, since the claim to prove is $x\' \\neq y\'$'
        },
        {
          line: 'Then $x = y$.',
          reason: 'by the axiom that numbers with equal successors are equal'
        },
        {
          line: 'So $x \\neq y$ and $x = y$ hold together, which is impossible.',
          reason: 'by the meaning of $\\neq$, since a number cannot equal and not equal the same number at once'
        },
        {
          line: 'Therefore $x\' \\neq y\'$.',
          reason: 'since the supposition $x\'=y\'$ leads to a contradiction'
        }
      ]
    },
    {
      id: 'landau-2',
      method: 'induction',
      statement: 'For every $x$, $x\' \\neq x$.',
      idea: 'The property $x\' \\neq x$ holds for 1 and passes from each number to its successor, so induction covers every number.',
      lines: [
        {
          line: 'Let $M$ be the set of all $x$ for which $x\' \\neq x$.',
          reason: 'defines the set used in the induction'
        },
        {
          line: 'Then $1\' \\neq 1$.',
          reason: 'by the axiom that no number has 1 as its successor, applied with $x=1$'
        },
        {
          line: 'So 1 belongs to $M$.',
          reason: 'by the definition of $M$, since $1\' \\neq 1$ holds'
        },
        {
          line: 'Suppose that $x$ belongs to $M$.',
          reason: 'assumed for the inductive step'
        },
        {
          line: 'Then $x\' \\neq x$.',
          reason: 'by the definition of $M$'
        },
        {
          line: 'So $(x\')\' \\neq x\'$.',
          reason: 'by the fact that successor preserves distinctness, applied to $x\' \\neq x$'
        },
        {
          line: 'So $x\'$ belongs to $M$.',
          reason: 'by the definition of $M$, since $(x\')\' \\neq x\'$ holds'
        },
        {
          line: 'Therefore $M$ contains every natural number.',
          reason: 'by the axiom of induction'
        },
        {
          line: 'Therefore, for every $x$, $x\' \\neq x$.',
          reason: 'since $M$ is the set of all natural numbers and $M$ is the set of all $x$ for which $x\' \\neq x$'
        }
      ]
    },
    {
      id: 'landau-3',
      method: 'induction',
      statement: 'If $x \\neq 1$, then there exists exactly one $u$ such that $x = u\'$.',
      idea: 'By induction, 1 and the successors cover every number, so each other number is the successor of exactly one number.',
      lines: [
        {
          line: 'Let $M$ be the set of the number 1 together with every $x$ for which some $u$ has $x = u\'$.',
          reason: 'defines the set used in the induction'
        },
        {
          line: 'The number 1 belongs to $M$.',
          reason: 'by the definition of $M$'
        },
        {
          line: 'Suppose that $x$ belongs to $M$.',
          reason: 'assumed for the inductive step'
        },
        {
          line: 'Then $x\' = x\'$.',
          reason: 'by the reflexivity of equality'
        },
        {
          line: 'So there exists $u$, namely $u = x$, such that $x\' = u\'$.',
          reason: 'since $x\' = x\'$ holds with $u=x$'
        },
        {
          line: 'So $x\'$ belongs to $M$.',
          reason: 'by the definition of $M$'
        },
        {
          line: 'Therefore $M$ contains every natural number.',
          reason: 'by the axiom of induction'
        },
        {
          line: 'So for every $x \\neq 1$ there exists $u$ such that $x = u\'$.',
          reason: 'since every natural number other than 1 belongs to $M$, by the definition of $M$'
        },
        {
          line: 'Therefore, if $x \\neq 1$, there exists exactly one $u$ such that $x = u\'$.',
          reason: 'since existence follows from the induction and uniqueness follows from the axiom that numbers with equal successors are equal'
        }
      ]
    }
  ],
  prove: [
    {
      id: 'nng-Tutorial-1',
      statement: 'For every number x and every number q, 37 times x plus q equals 37 times x plus q.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The expression $37x+q$ equals itself.', reason: 'because every object equals itself, by the reflexivity of equality' },
          { line: 'So $37x+q=37x+q$ for every $x$ and $q$.', reason: 'since the equality holds for arbitrary $x$ and $q$, by the meaning of "for every"' }
        ]
      }
    },
    {
      id: 'nng-Tutorial-2',
      statement: 'Let x and y be numbers with y equal to x plus 7. Then 2 times y equals 2 times (x plus 7).',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'Suppose that $y=x+7$.', reason: 'the hypothesis' },
          { line: 'Then $2y=2(x+7)$.', reason: 'because replacing $y$ by the equal quantity $x+7$ inside $2y$ leaves the value unchanged, by the meaning of equality' }
        ]
      }
    },
    {
      id: 'nng-Tutorial-3',
      statement: 'The number 2 equals the successor of the successor of 0.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The numeral $2$ names the successor of $1$.', reason: 'by the meaning of the numeral $2$' },
          { line: 'The numeral $1$ names the successor of $0$.', reason: 'by the meaning of the numeral $1$' },
          { line: 'So $2$ equals the successor of the successor of $0$.', reason: 'because substituting the second line into the first unfolds the numeral $2$ down to $0$' }
        ]
      }
    },
    {
      id: 'nng-Tutorial-4',
      statement: 'The number 2 equals the successor of the successor of 0.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The successor of $0$ is the number that the numeral $1$ names.', reason: 'by the meaning of the numeral $1$' },
          { line: 'So the successor of the successor of $0$ is the successor of $1$.', reason: 'because replacing the successor of $0$ by the equal numeral $1$ leaves the outer successor unchanged' },
          { line: 'The successor of $1$ is the number that the numeral $2$ names.', reason: 'by the meaning of the numeral $2$' },
          { line: 'So $2$ equals the successor of the successor of $0$.', reason: 'because substituting the third line into the second folds the successor chain up to the numeral $2$' }
        ]
      }
    },
    {
      id: 'nng-Tutorial-5',
      statement: 'Let a, b, and c be numbers. Then a plus (b plus 0) plus (c plus 0) equals a plus b plus c.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The sum $b+0$ equals $b$.', reason: 'because adding 0 to a number leaves it unchanged, by the recursive definition of addition' },
          { line: 'The sum $c+0$ equals $c$.', reason: 'because adding 0 to a number leaves it unchanged, by the recursive definition of addition' },
          { line: 'So $a+(b+0)+(c+0)=a+b+c$.', reason: 'because replacing $b+0$ by $b$ and $c+0$ by $c$ leaves the value unchanged, by the meaning of equality' }
        ]
      }
    },
    {
      id: 'nng-Tutorial-6',
      statement: 'Let a, b, and c be numbers. Then a plus (b plus 0) plus (c plus 0) equals a plus b plus c. Rewrite the second parenthesis first.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The sum $c+0$ equals $c$.', reason: 'because adding 0 to a number leaves it unchanged, by the recursive definition of addition' },
          { line: 'So $a+(b+0)+(c+0)=a+(b+0)+c$.', reason: 'because replacing $c+0$ by $c$ leaves the value unchanged, by the meaning of equality' },
          { line: 'The sum $b+0$ equals $b$.', reason: 'because adding 0 to a number leaves it unchanged, by the recursive definition of addition' },
          { line: 'So $a+(b+0)+c=a+b+c$.', reason: 'because replacing $b+0$ by $b$ leaves the value unchanged, by the meaning of equality' },
          { line: 'Therefore $a+(b+0)+(c+0)=a+b+c$ for all $a$, $b$, and $c$.', reason: 'by the transitivity of equality, from $a+(b+0)+(c+0)=a+(b+0)+c$ and $a+(b+0)+c=a+b+c$' }
        ]
      }
    },
    {
      id: 'nng-Tutorial-7',
      statement: 'For every natural number n, the successor of n equals n plus 1.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The numeral $1$ names $0\'$, the successor of $0$.', reason: 'by the meaning of the numeral $1$' },
          { line: 'So $n+1=n+0\'$.', reason: 'because replacing $1$ by the equal number $0\'$ leaves the value unchanged, by the meaning of equality' },
          { line: 'Then $n+0\'=(n+0)\'$.', reason: 'by the recursive definition of addition, $n+m\'=(n+m)\'$, applied with $m=0$' },
          { line: 'Then $(n+0)\'=n\'$.', reason: 'since $n+0=n$ by the recursive definition of addition, and equal numbers have equal successors' },
          { line: 'So $n\'=n+1$ for every $n$.', reason: 'by the transitivity of equality, from the three equations above, read in reverse' }
        ]
      }
    },
    {
      id: 'nng-Tutorial-8',
      statement: 'The sum 2 plus 2 equals 4.',
      method: 'direct proof',
      check: {
        proof: [
          { line: 'The numeral $2$ names $1\'$, and the numeral $1$ names $0\'$.', reason: 'by the meaning of the numerals $1$ and $2$' },
          { line: 'So $2+2=2+1\'=(2+1)\'$.', reason: 'by substituting $2=1\'$, then the recursive definition of addition, $n+m\'=(n+m)\'$, applied with $n=2$ and $m=1$' },
          { line: 'Then $2+1=2+0\'=(2+0)\'$.', reason: 'by substituting $1=0\'$, then the recursive definition of addition, $n+m\'=(n+m)\'$, applied with $n=2$ and $m=0$' },
          { line: 'Then $(2+0)\'=2\'$.', reason: 'since $2+0=2$ by the recursive definition of addition, and equal numbers have equal successors' },
          { line: 'So $2+1=2\'$, and so $(2+1)\'=(2\')\'$.', reason: 'by the transitivity of equality, and since equal numbers have equal successors' },
          { line: 'The numeral $3$ names $2\'$, and the numeral $4$ names $3\'$, so $(2\')\'=3\'=4$.', reason: 'by the meaning of the numerals $3$ and $4$' },
          { line: 'So $2+2=4$.', reason: 'by the transitivity of equality, from the chain $2+2=(2+1)\'=(2\')\'=3\'=4$' }
        ]
      }
    },
    {
      id: 'aether-40-2',
      statement: 'No natural number x equals 1 and also equals the successor of some natural number u.',
      method: 'proof by contradiction',
      check: {
        proof: [
          { line: 'Suppose, for contradiction, that $x=1$ and $x=u\'$ for some $u$, at once.', reason: 'assumed for a proof by contradiction' },
          { line: 'Then $1 = u\'$.', reason: 'by substituting $x=1$ into $x=u\'$' },
          { line: 'But $u\' \\neq 1$.', reason: 'by the axiom that no number has 1 as its successor' },
          { line: 'So $1 = u\'$ and $u\' \\neq 1$ hold together, which is impossible.', reason: 'by the meaning of $\\neq$, since a number cannot equal and not equal the same number at once' },
          { line: 'Therefore no natural number $x$ equals 1 and also equals the successor $u\'$ of some $u$.', reason: 'since the supposition leads to a contradiction' }
        ]
      }
    },
    {
      id: 'aether-40-1',
      statement: 'For every natural number x, x is not equal to the successor of the successor of x.',
      method: 'induction',
      check: {
        proof: [
          { line: 'Let $M$ be the set of all $x$ for which $x \\neq x\'\'$.', reason: 'defines the set used in the induction' },
          { line: 'The number $1\'\'$ has the form $w\'$ with $w=1\'$.', reason: 'by the meaning of the successor written twice' },
          { line: 'So $1\'\' \\neq 1$.', reason: 'by the axiom that no number has 1 as its successor, applied with $x=1\'$' },
          { line: 'So 1 belongs to $M$.', reason: 'by the definition of $M$, since $1 \\neq 1\'\'$ holds' },
          { line: 'Suppose that $x$ belongs to $M$, so that $x \\neq x\'\'$.', reason: 'assumed for the inductive step' },
          { line: 'Suppose, for contradiction, that $x\' = x\'\'\'$.', reason: 'assumed to show the successor step preserves the property' },
          { line: 'The number $x\'\'\'$ equals $(x\'\')\'$.', reason: 'by the meaning of the successor written three times' },
          { line: 'So $x\' = (x\'\')\'$.', reason: 'by the transitivity of equality, from $x\'=x\'\'\'$ and $x\'\'\'=(x\'\')\'$' },
          { line: 'Then $x = x\'\'$.', reason: 'by the axiom that numbers with equal successors are equal, applied to $x\' = (x\'\')\'$' },
          { line: 'This contradicts $x \\neq x\'\'$.', reason: 'since $x = x\'\'$ and $x \\neq x\'\'$ cannot both hold, by the meaning of $\\neq$' },
          { line: 'So $x\' \\neq x\'\'\'$.', reason: 'since supposing $x\'=x\'\'\'$ leads to a contradiction' },
          { line: 'So $x\'$ belongs to $M$.', reason: 'by the definition of $M$, since $x\' \\neq (x\')\'\'$ restates $x\' \\neq x\'\'\'$' },
          { line: 'Therefore $M$ contains every natural number.', reason: 'by the axiom of induction' },
          { line: 'Therefore, for every $x$, $x$ is not equal to the successor of the successor of $x$.', reason: 'since $M$ is the set of all natural numbers' }
        ]
      }
    }
  ]
}
