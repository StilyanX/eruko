// Powers in the Natural Number Game: powers defined by recursion on the exponent, a fact Landau's
// two chapters never state, with the statements to prove from the Natural Number Game's Power
// world. The numbers of the Natural Number Game are the whole numbers, which begin at 0.
export default {
  number: 44,
  manyParts: false,
  ideas: [
    {
      name: 'Powers defined by recursion on the exponent',
      concrete: '$2^0=1$, then $2^1=2^0\\times2=2$, then $2^2=2^1\\times2=4$, then $2^3=2^2\\times2=8$: each further exponent multiplies in one more copy of the base.',
      general: 'For every $a$ and $n$, the **power** $a^n$ is the natural number defined by the two equations $a^0=1$ and $a^{n+1}=a^n\\times a$.'
    }
  ],
  kinds: [
    { id: 't44-k1', forms: [] }
  ],
  proofs: [],
  prove: [
    {
      id: 'nng-Power-1',
      statement: 'The number 0 to the power 0 equals 1.',
      method: 'direct proof',
      check: { proof: [
        { line: 'By the recursive definition of powers, $a^0=1$ for every $a$.', reason: 'the first equation defining powers' },
        { line: 'So $0^0=1$.', reason: 'by taking $a=0$ in the previous line' }
      ] }
    },
    {
      id: 'nng-Power-2',
      statement: 'For every number m, 0 to the power (the successor of m) equals 0.',
      method: 'direct proof',
      check: { proof: [
        { line: 'Let $m$ be a number. The successor of $m$ equals $m+1$.', reason: 'because the successor of a number equals that number plus 1' },
        { line: 'Then $0^{m+1}=0^m\\times 0$.', reason: 'by the second equation defining powers, $a^{n+1}=a^n\\times a$, with $a=0$ and $n=m$' },
        { line: 'Then $0^m\\times 0=0$.', reason: 'by the definition of multiplication, $n\\times 0=0$ for every $n$' },
        { line: 'So $0$ to the power of the successor of $m$ equals $0$, for every $m$.', reason: 'by the transitivity of equality, since $m$ is arbitrary' }
      ] }
    },
    {
      id: 'nng-Power-3',
      statement: 'For every number a, a to the power 1 equals a.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The number $1$ is the successor of $0$, so $1=0+1$.', reason: 'because the successor of a number equals that number plus 1' },
        { line: 'So $a^1=a^{0+1}=a^0\\times a$.', reason: 'by the second equation defining powers, with $n=0$' },
        { line: 'Then $a^0\\times a=1\\times a$.', reason: 'by the first equation defining powers, $a^0=1$' },
        { line: 'Then $1\\times a=a$.', reason: 'because 1 times a number equals that number, proved in the topic on multiplication' },
        { line: 'So $a^1=a$ for every $a$.', reason: 'by the transitivity of equality, since $a$ is arbitrary' }
      ] }
    },
    {
      id: 'nng-Power-4',
      statement: 'For every number m, 1 to the power m equals 1.',
      method: 'induction',
      check: { proof: [
        { line: 'Use induction on $m$.', reason: 'the axiom of induction' },
        { line: 'For $m=0$, $1^0=1$.', reason: 'by the first equation defining powers' },
        { line: 'Suppose that $1^m=1$ for some $m$.', reason: 'the inductive hypothesis' },
        { line: 'Then $1^{m+1}=1^m\\times 1$.', reason: 'by the second equation defining powers, with $a=1$ and $n=m$' },
        { line: 'So $1^{m+1}=1\\times 1$.', reason: 'by substituting $1^m=1$' },
        { line: 'Then $1\\times 1=1$.', reason: 'because a number times 1 equals that number, proved in the topic on multiplication' },
        { line: 'So $1^{m+1}=1$, and the successor of $m$ has the property too.', reason: 'by the transitivity of equality, and because the successor of a number equals that number plus 1' },
        { line: 'Therefore $1^m=1$ for every $m$.', reason: 'by the axiom of induction' }
      ] }
    },
    {
      id: 'nng-Power-5',
      statement: 'For every number a, a to the power 2 equals a times a.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The number $2$ is the successor of $1$, so $2=1+1$.', reason: 'because the successor of a number equals that number plus 1' },
        { line: 'So $a^2=a^{1+1}=a^1\\times a$.', reason: 'by the second equation defining powers, with $n=1$' },
        { line: 'Then $a^1=a$.', reason: 'by the statement proved earlier in this topic that $a^1=a$' },
        { line: 'So $a^2=a\\times a$ for every $a$.', reason: 'by substituting $a^1=a$, since $a$ is arbitrary' }
      ] }
    },
    {
      id: 'nng-Power-6',
      statement: 'Let a, m, and n be numbers. Then a to the power (m plus n) equals (a to the power m) times (a to the power n).',
      method: 'induction',
      check: { proof: [
        { line: 'Fix $a$ and $m$, and use induction on $n$.', reason: 'the axiom of induction' },
        { line: 'For $n=0$, $a^{m+0}=a^m$.', reason: 'by the definition of addition, $m+0=m$' },
        { line: 'Then $a^m\\times a^0=a^m\\times 1=a^m$.', reason: 'by the first equation defining powers, and because a number times 1 equals that number' },
        { line: 'So $a^{m+0}=a^m\\times a^0$.', reason: 'by the transitivity of equality' },
        { line: 'Suppose that $a^{m+n}=a^m\\times a^n$ for some $n$.', reason: 'the inductive hypothesis' },
        { line: 'Then $m+(n+1)=(m+n)+1$.', reason: 'by the associative law of addition' },
        { line: 'So $a^{m+(n+1)}=a^{(m+n)+1}=a^{m+n}\\times a$.', reason: 'by the second equation defining powers, with $m+n$ as the exponent' },
        { line: 'Then $a^{m+n}\\times a=(a^m\\times a^n)\\times a$.', reason: 'by substituting the inductive hypothesis' },
        { line: 'Then $(a^m\\times a^n)\\times a=a^m\\times(a^n\\times a)$.', reason: 'by the associative law of multiplication' },
        { line: 'Then $a^n\\times a=a^{n+1}$.', reason: 'by the second equation defining powers' },
        { line: 'So $a^{m+(n+1)}=a^m\\times a^{n+1}$, and the successor of $n$ has the property too.', reason: 'by the transitivity of equality, and because the successor of a number equals that number plus 1' },
        { line: 'Therefore $a^{m+n}=a^m\\times a^n$ for every $n$, and so for all $a$, $m$, and $n$.', reason: 'by the axiom of induction, since $a$ and $m$ are arbitrary' }
      ] }
    },
    {
      id: 'nng-Power-7',
      statement: 'Let a, b, and n be numbers. Then (a times b) to the power n equals (a to the power n) times (b to the power n).',
      method: 'induction',
      check: { proof: [
        { line: 'Fix $a$ and $b$, and use induction on $n$.', reason: 'the axiom of induction' },
        { line: 'For $n=0$, $(a\\times b)^0=1$.', reason: 'by the first equation defining powers' },
        { line: 'Then $a^0\\times b^0=1\\times 1=1$.', reason: 'by the first equation defining powers, and because a number times 1 equals that number' },
        { line: 'So $(a\\times b)^0=a^0\\times b^0$.', reason: 'by the transitivity of equality' },
        { line: 'Suppose that $(a\\times b)^n=a^n\\times b^n$ for some $n$.', reason: 'the inductive hypothesis' },
        { line: 'Then $(a\\times b)^{n+1}=(a\\times b)^n\\times(a\\times b)$.', reason: 'by the second equation defining powers, with $a\\times b$ as the base' },
        { line: 'So $(a\\times b)^{n+1}=(a^n\\times b^n)\\times(a\\times b)$.', reason: 'by substituting the inductive hypothesis' },
        { line: 'Then $(a^n\\times b^n)\\times(a\\times b)=(a^n\\times a)\\times(b^n\\times b)$.', reason: 'by the associative and commutative laws of multiplication' },
        { line: 'Then $(a^n\\times a)\\times(b^n\\times b)=a^{n+1}\\times b^{n+1}$.', reason: 'by the second equation defining powers, applied to $a$ and to $b$' },
        { line: 'So $(a\\times b)^{n+1}=a^{n+1}\\times b^{n+1}$, and the successor of $n$ has the property too.', reason: 'by the transitivity of equality, and because the successor of a number equals that number plus 1' },
        { line: 'Therefore $(a\\times b)^n=a^n\\times b^n$ for every $n$, and so for all $a$, $b$, and $n$.', reason: 'by the axiom of induction, since $a$ and $b$ are arbitrary' }
      ] }
    },
    {
      id: 'nng-Power-8',
      statement: 'Let a, m, and n be numbers. Then (a to the power m) to the power n equals a to the power (m times n).',
      method: 'induction',
      check: { proof: [
        { line: 'Fix $a$ and $m$, and use induction on $n$.', reason: 'the axiom of induction' },
        { line: 'For $n=0$, $(a^m)^0=1$.', reason: 'by the first equation defining powers' },
        { line: 'Then $a^{m\\times 0}=a^0=1$.', reason: 'by the definition of multiplication, $m\\times 0=0$, and the first equation defining powers' },
        { line: 'So $(a^m)^0=a^{m\\times 0}$.', reason: 'by the transitivity of equality' },
        { line: 'Suppose that $(a^m)^n=a^{m\\times n}$ for some $n$.', reason: 'the inductive hypothesis' },
        { line: 'Then $(a^m)^{n+1}=(a^m)^n\\times a^m$.', reason: 'by the second equation defining powers, with $a^m$ as the base' },
        { line: 'So $(a^m)^{n+1}=a^{m\\times n}\\times a^m$.', reason: 'by substituting the inductive hypothesis' },
        { line: 'Then $a^{m\\times n}\\times a^m=a^{m\\times n+m}$.', reason: 'by the statement proved earlier in this topic that $a^{m+n}=a^m\\times a^n$, read in reverse' },
        { line: 'Then $m\\times n+m=m\\times(n+1)$.', reason: 'by the definition of multiplication, $m\\times(n+1)=m\\times n+m$, read in reverse' },
        { line: 'So $(a^m)^{n+1}=a^{m\\times(n+1)}$, and the successor of $n$ has the property too.', reason: 'by the transitivity of equality, and because the successor of a number equals that number plus 1' },
        { line: 'Therefore $(a^m)^n=a^{m\\times n}$ for every $n$, and so for all $a$, $m$, and $n$.', reason: 'by the axiom of induction, since $a$ and $m$ are arbitrary' }
      ] }
    },
    {
      id: 'nng-Power-9',
      statement: 'Let a and b be numbers. Then $(a+b)^2=a^2+b^2+2\\times a\\times b$.',
      method: 'direct proof',
      check: { proof: [
        { line: 'The power $(a+b)^2$ equals $(a+b)(a+b)$.', reason: 'by the statement proved above that a number to the power 2 equals that number times itself' },
        { line: 'Then $(a+b)(a+b)=(a+b)a+(a+b)b$.', reason: 'by the distributive law $x(y+z)=xy+xz$, proved in the topic on multiplication' },
        { line: 'Then $(a+b)a=aa+ba=a^2+ba$ and $(a+b)b=ab+bb=ab+b^2$.', reason: 'by the rule that $(a+b)c=ac+bc$, proved in the topic on multiplication, and the statement proved above for the power 2' },
        { line: 'So $(a+b)^2=a^2+ba+ab+b^2$.', reason: 'by substituting the two previous lines' },
        { line: 'Then $ba+ab=ab+ab=2\\times(a\\times b)=2\\times a\\times b$.', reason: 'by the commutative and associative laws of multiplication, and because 2 times a number is that number plus itself' },
        { line: 'So $(a+b)^2=a^2+b^2+2\\times a\\times b$.', reason: 'by substituting $ba+ab=2\\times a\\times b$ and rearranging the four terms with the associative and commutative laws of addition' }
      ] }
    }
  ]
}
