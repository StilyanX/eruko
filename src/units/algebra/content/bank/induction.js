export default [
  {
    "id": "t211-k1-p01",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{2}{1 \\cdot 7} + \\dfrac{2}{7 \\cdot 13} + \\dfrac{2}{13 \\cdot 19} + \\dots + \\dfrac{2}{(6n - 5)(6n + 1)} = \\dfrac{2n}{6n + 1}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{2}{1 \\cdot 7} + \\dfrac{2}{7 \\cdot 13} + \\dfrac{2}{13 \\cdot 19} + \\dots + \\dfrac{2}{(6n - 5)(6n + 1)} = \\dfrac{2n}{6n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\dfrac{2}{1 \\cdot 7} + \\dfrac{2}{7 \\cdot 13} + \\dfrac{2}{13 \\cdot 19} + \\dots + \\dfrac{2}{(6n - 5)(6n + 1)} = \\dfrac{2n}{6n + 1}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $\\dfrac{2}{1 \\cdot 7} = \\dfrac{2}{7}$ and the right side is $\\dfrac{2 \\cdot 1}{6 \\cdot 1 + 1} = \\dfrac{2}{7}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\dfrac{2}{1 \\cdot 7} + \\dfrac{2}{7 \\cdot 13} + \\dfrac{2}{13 \\cdot 19} + \\dots + \\dfrac{2}{(6k - 5)(6k + 1)} = \\dfrac{2k}{6k + 1}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\dfrac{2}{1 \\cdot 7} + \\dfrac{2}{7 \\cdot 13} + \\dfrac{2}{13 \\cdot 19} + \\dots + \\dfrac{2}{(6k - 5)(6k + 1)} + \\dfrac{2}{(6k + 1)(6k + 7)} = \\dfrac{2k}{6k + 1} + \\dfrac{2}{(6k + 1)(6k + 7)}$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, with $6(k + 1) - 5 = 6k + 1$ and $6(k + 1) + 1 = 6k + 7$."
      },
      {
        "step": "$\\dfrac{2k}{6k + 1} + \\dfrac{2}{(6k + 1)(6k + 7)} = \\dfrac{2k(6k + 7) + 2}{(6k + 1)(6k + 7)}$",
        "reason": "Simplest common denominator: the first fraction is multiplied above and below by $6k + 7$."
      },
      {
        "step": "$\\dfrac{2k(6k + 7) + 2}{(6k + 1)(6k + 7)} = \\dfrac{12k^2 + 14k + 2}{(6k + 1)(6k + 7)}$",
        "reason": "Multiplying out: $2k(6k + 7) = 12k^2 + 14k$."
      },
      {
        "step": "$\\dfrac{12k^2 + 14k + 2}{(6k + 1)(6k + 7)} = \\dfrac{2(k + 1)(6k + 1)}{(6k + 1)(6k + 7)}$",
        "reason": "Factoring a quadratic: multiplying out $2(k + 1)(6k + 1)$ gives $12k^2 + 14k + 2$."
      },
      {
        "step": "$\\dfrac{2(k + 1)(6k + 1)}{(6k + 1)(6k + 7)} = \\dfrac{2(k + 1)}{6k + 7}$",
        "reason": "Cancelling a common factor: $6k + 1$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\dfrac{2}{1 \\cdot 7} + \\dfrac{2}{7 \\cdot 13} + \\dfrac{2}{13 \\cdot 19} + \\dots + \\dfrac{2}{(6k - 5)(6k + 1)} + \\dfrac{2}{(6k + 1)(6k + 7)} = \\dfrac{2(k + 1)}{6(k + 1) + 1}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 9, with $6(k + 1) + 1 = 6k + 7$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\dfrac{2}{1 \\cdot 7} + \\dfrac{2}{7 \\cdot 13} + \\dfrac{2}{13 \\cdot 19} + \\dots + \\dfrac{2}{(6n - 5)(6n + 1)} = \\dfrac{2n}{6n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k1-p02",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $120 + 720 + 4320 + \\dots + 20 \\cdot 6^n = 4 \\cdot 6^{n + 1} - 24$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $120 + 720 + 4320 + \\dots + 20 \\cdot 6^n = 4 \\cdot 6^{n + 1} - 24$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $120 + 720 + 4320 + \\dots + 20 \\cdot 6^n = 4 \\cdot 6^{n + 1} - 24$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $120$ and the right side is $4 \\cdot 6^2 - 24 = 120$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $120 + 720 + 4320 + \\dots + 20 \\cdot 6^k = 4 \\cdot 6^{k + 1} - 24$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $120 + 720 + 4320 + \\dots + 20 \\cdot 6^k + 20 \\cdot 6^{k + 1} = 4 \\cdot 6^{k + 1} - 24 + 20 \\cdot 6^{k + 1}$.",
        "reason": "Adding the same number to both sides: the next term, $20 \\cdot 6^{k + 1}$, is added to both sides of line 4."
      },
      {
        "step": "$4 \\cdot 6^{k + 1} - 24 + 20 \\cdot 6^{k + 1} = 24 \\cdot 6^{k + 1} - 24$",
        "reason": "Collecting like terms: the two terms in $6^{k + 1}$ add to $24 \\cdot 6^{k + 1}$, since $4 + 20 = 24$."
      },
      {
        "step": "$24 \\cdot 6^{k + 1} - 24 = 4 \\cdot 6^{k + 2} - 24$",
        "reason": "Product law: $24 = 4 \\cdot 6$, and $6 \\cdot 6^{k + 1} = 6^{k + 2}$."
      },
      {
        "step": "So $120 + 720 + 4320 + \\dots + 20 \\cdot 6^k + 20 \\cdot 6^{k + 1} = 4 \\cdot 6^{(k + 1) + 1} - 24$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $k + 2 = (k + 1) + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $120 + 720 + 4320 + \\dots + 20 \\cdot 6^n = 4 \\cdot 6^{n + 1} - 24$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k1-p03",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{10}{5 \\cdot 12} + \\dfrac{10}{12 \\cdot 19} + \\dfrac{10}{19 \\cdot 26} + \\dots + \\dfrac{10}{(7n - 2)(7n + 5)} = \\dfrac{2n}{7n + 5}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{10}{5 \\cdot 12} + \\dfrac{10}{12 \\cdot 19} + \\dfrac{10}{19 \\cdot 26} + \\dots + \\dfrac{10}{(7n - 2)(7n + 5)} = \\dfrac{2n}{7n + 5}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\dfrac{10}{5 \\cdot 12} + \\dfrac{10}{12 \\cdot 19} + \\dfrac{10}{19 \\cdot 26} + \\dots + \\dfrac{10}{(7n - 2)(7n + 5)} = \\dfrac{2n}{7n + 5}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $\\dfrac{10}{5 \\cdot 12} = \\dfrac{1}{6}$ and the right side is $\\dfrac{2 \\cdot 1}{7 \\cdot 1 + 5} = \\dfrac{1}{6}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\dfrac{10}{5 \\cdot 12} + \\dfrac{10}{12 \\cdot 19} + \\dfrac{10}{19 \\cdot 26} + \\dots + \\dfrac{10}{(7k - 2)(7k + 5)} = \\dfrac{2k}{7k + 5}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\dfrac{10}{5 \\cdot 12} + \\dfrac{10}{12 \\cdot 19} + \\dfrac{10}{19 \\cdot 26} + \\dots + \\dfrac{10}{(7k - 2)(7k + 5)} + \\dfrac{10}{(7k + 5)(7k + 12)} = \\dfrac{2k}{7k + 5} + \\dfrac{10}{(7k + 5)(7k + 12)}$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, with $7(k + 1) - 2 = 7k + 5$ and $7(k + 1) + 5 = 7k + 12$."
      },
      {
        "step": "$\\dfrac{2k}{7k + 5} + \\dfrac{10}{(7k + 5)(7k + 12)} = \\dfrac{2k(7k + 12) + 10}{(7k + 5)(7k + 12)}$",
        "reason": "Simplest common denominator: the first fraction is multiplied above and below by $7k + 12$."
      },
      {
        "step": "$\\dfrac{2k(7k + 12) + 10}{(7k + 5)(7k + 12)} = \\dfrac{14k^2 + 24k + 10}{(7k + 5)(7k + 12)}$",
        "reason": "Multiplying out: $2k(7k + 12) = 14k^2 + 24k$."
      },
      {
        "step": "$\\dfrac{14k^2 + 24k + 10}{(7k + 5)(7k + 12)} = \\dfrac{2(k + 1)(7k + 5)}{(7k + 5)(7k + 12)}$",
        "reason": "Factoring a quadratic: multiplying out $2(k + 1)(7k + 5)$ gives $14k^2 + 24k + 10$."
      },
      {
        "step": "$\\dfrac{2(k + 1)(7k + 5)}{(7k + 5)(7k + 12)} = \\dfrac{2(k + 1)}{7k + 12}$",
        "reason": "Cancelling a common factor: $7k + 5$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\dfrac{10}{5 \\cdot 12} + \\dfrac{10}{12 \\cdot 19} + \\dfrac{10}{19 \\cdot 26} + \\dots + \\dfrac{10}{(7k - 2)(7k + 5)} + \\dfrac{10}{(7k + 5)(7k + 12)} = \\dfrac{2(k + 1)}{7(k + 1) + 5}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 9, with $7(k + 1) + 5 = 7k + 12$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\dfrac{10}{5 \\cdot 12} + \\dfrac{10}{12 \\cdot 19} + \\dfrac{10}{19 \\cdot 26} + \\dots + \\dfrac{10}{(7n - 2)(7n + 5)} = \\dfrac{2n}{7n + 5}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k1-p04",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{3}{1 \\cdot 5} + \\dfrac{3}{5 \\cdot 9} + \\dfrac{3}{9 \\cdot 13} + \\dots + \\dfrac{3}{(4n - 3)(4n + 1)} = \\dfrac{3n}{4n + 1}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{3}{1 \\cdot 5} + \\dfrac{3}{5 \\cdot 9} + \\dfrac{3}{9 \\cdot 13} + \\dots + \\dfrac{3}{(4n - 3)(4n + 1)} = \\dfrac{3n}{4n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\dfrac{3}{1 \\cdot 5} + \\dfrac{3}{5 \\cdot 9} + \\dfrac{3}{9 \\cdot 13} + \\dots + \\dfrac{3}{(4n - 3)(4n + 1)} = \\dfrac{3n}{4n + 1}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $\\dfrac{3}{1 \\cdot 5} = \\dfrac{3}{5}$ and the right side is $\\dfrac{3 \\cdot 1}{4 \\cdot 1 + 1} = \\dfrac{3}{5}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\dfrac{3}{1 \\cdot 5} + \\dfrac{3}{5 \\cdot 9} + \\dfrac{3}{9 \\cdot 13} + \\dots + \\dfrac{3}{(4k - 3)(4k + 1)} = \\dfrac{3k}{4k + 1}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\dfrac{3}{1 \\cdot 5} + \\dfrac{3}{5 \\cdot 9} + \\dfrac{3}{9 \\cdot 13} + \\dots + \\dfrac{3}{(4k - 3)(4k + 1)} + \\dfrac{3}{(4k + 1)(4k + 5)} = \\dfrac{3k}{4k + 1} + \\dfrac{3}{(4k + 1)(4k + 5)}$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, with $4(k + 1) - 3 = 4k + 1$ and $4(k + 1) + 1 = 4k + 5$."
      },
      {
        "step": "$\\dfrac{3k}{4k + 1} + \\dfrac{3}{(4k + 1)(4k + 5)} = \\dfrac{3k(4k + 5) + 3}{(4k + 1)(4k + 5)}$",
        "reason": "Simplest common denominator: the first fraction is multiplied above and below by $4k + 5$."
      },
      {
        "step": "$\\dfrac{3k(4k + 5) + 3}{(4k + 1)(4k + 5)} = \\dfrac{12k^2 + 15k + 3}{(4k + 1)(4k + 5)}$",
        "reason": "Multiplying out: $3k(4k + 5) = 12k^2 + 15k$."
      },
      {
        "step": "$\\dfrac{12k^2 + 15k + 3}{(4k + 1)(4k + 5)} = \\dfrac{3(k + 1)(4k + 1)}{(4k + 1)(4k + 5)}$",
        "reason": "Factoring a quadratic: multiplying out $3(k + 1)(4k + 1)$ gives $12k^2 + 15k + 3$."
      },
      {
        "step": "$\\dfrac{3(k + 1)(4k + 1)}{(4k + 1)(4k + 5)} = \\dfrac{3(k + 1)}{4k + 5}$",
        "reason": "Cancelling a common factor: $4k + 1$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\dfrac{3}{1 \\cdot 5} + \\dfrac{3}{5 \\cdot 9} + \\dfrac{3}{9 \\cdot 13} + \\dots + \\dfrac{3}{(4k - 3)(4k + 1)} + \\dfrac{3}{(4k + 1)(4k + 5)} = \\dfrac{3(k + 1)}{4(k + 1) + 1}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 9, with $4(k + 1) + 1 = 4k + 5$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\dfrac{3}{1 \\cdot 5} + \\dfrac{3}{5 \\cdot 9} + \\dfrac{3}{9 \\cdot 13} + \\dots + \\dfrac{3}{(4n - 3)(4n + 1)} = \\dfrac{3n}{4n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k1-p05",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Prove that $8 + 22 + 42 + \\dots + n(3n + 5) = n(n + 1)(n + 3)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $8 + 22 + 42 + \\dots + n(3n + 5) = n(n + 1)(n + 3)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $8 + 22 + 42 + \\dots + n(3n + 5) = n(n + 1)(n + 3)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $8$ and the right side is $1 \\cdot (1 + 1)(1 + 3) = 8$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $8 + 22 + 42 + \\dots + k(3k + 5) = k(k + 1)(k + 3)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $8 + 22 + 42 + \\dots + k(3k + 5) + (k + 1)(3k + 8) = k(k + 1)(k + 3) + (k + 1)(3k + 8)$.",
        "reason": "Adding the same number to both sides: the next term, $(k + 1)(3(k + 1) + 5) = (k + 1)(3k + 8)$, is added to both sides of line 4."
      },
      {
        "step": "$k(k + 1)(k + 3) + (k + 1)(3k + 8) = (k + 1)\\left(k(k + 3) + (3k + 8)\\right)$",
        "reason": "Taking out a common factor: $k + 1$ is a factor of both terms."
      },
      {
        "step": "$(k + 1)\\left(k(k + 3) + (3k + 8)\\right) = (k + 1)(k^2 + 6k + 8)$",
        "reason": "Multiplying out and collecting like terms: inside the bracket, $k(k + 3) = k^2 + 3k$, and the terms in $k$ add to $6k$."
      },
      {
        "step": "$(k + 1)(k^2 + 6k + 8) = (k + 1)(k + 2)(k + 4)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(k + 4)$ gives $k^2 + 6k + 8$."
      },
      {
        "step": "So $8 + 22 + 42 + \\dots + k(3k + 5) + (k + 1)(3k + 8) = (k + 1)((k + 1) + 1)((k + 1) + 3)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 1 = k + 2$ and $(k + 1) + 3 = k + 4$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $8 + 22 + 42 + \\dots + n(3n + 5) = n(n + 1)(n + 3)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k1-p06",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $18 + 54 + 162 + \\dots + 6 \\cdot 3^n = 3 \\cdot 3^{n + 1} - 9$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $18 + 54 + 162 + \\dots + 6 \\cdot 3^n = 3 \\cdot 3^{n + 1} - 9$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $18 + 54 + 162 + \\dots + 6 \\cdot 3^n = 3 \\cdot 3^{n + 1} - 9$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $18$ and the right side is $3 \\cdot 3^2 - 9 = 18$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $18 + 54 + 162 + \\dots + 6 \\cdot 3^k = 3 \\cdot 3^{k + 1} - 9$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $18 + 54 + 162 + \\dots + 6 \\cdot 3^k + 6 \\cdot 3^{k + 1} = 3 \\cdot 3^{k + 1} - 9 + 6 \\cdot 3^{k + 1}$.",
        "reason": "Adding the same number to both sides: the next term, $6 \\cdot 3^{k + 1}$, is added to both sides of line 4."
      },
      {
        "step": "$3 \\cdot 3^{k + 1} - 9 + 6 \\cdot 3^{k + 1} = 9 \\cdot 3^{k + 1} - 9$",
        "reason": "Collecting like terms: the two terms in $3^{k + 1}$ add to $9 \\cdot 3^{k + 1}$, since $3 + 6 = 9$."
      },
      {
        "step": "$9 \\cdot 3^{k + 1} - 9 = 3 \\cdot 3^{k + 2} - 9$",
        "reason": "Product law: $9 = 3 \\cdot 3$, and $3 \\cdot 3^{k + 1} = 3^{k + 2}$."
      },
      {
        "step": "So $18 + 54 + 162 + \\dots + 6 \\cdot 3^k + 6 \\cdot 3^{k + 1} = 3 \\cdot 3^{(k + 1) + 1} - 9$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $k + 2 = (k + 1) + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $18 + 54 + 162 + \\dots + 6 \\cdot 3^n = 3 \\cdot 3^{n + 1} - 9$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k1-p07",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Prove that $16 + 38 + 66 + \\dots + n(3n + 13) = n(n + 1)(n + 7)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $16 + 38 + 66 + \\dots + n(3n + 13) = n(n + 1)(n + 7)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $16 + 38 + 66 + \\dots + n(3n + 13) = n(n + 1)(n + 7)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $16$ and the right side is $1 \\cdot (1 + 1)(1 + 7) = 16$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $16 + 38 + 66 + \\dots + k(3k + 13) = k(k + 1)(k + 7)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $16 + 38 + 66 + \\dots + k(3k + 13) + (k + 1)(3k + 16) = k(k + 1)(k + 7) + (k + 1)(3k + 16)$.",
        "reason": "Adding the same number to both sides: the next term, $(k + 1)(3(k + 1) + 13) = (k + 1)(3k + 16)$, is added to both sides of line 4."
      },
      {
        "step": "$k(k + 1)(k + 7) + (k + 1)(3k + 16) = (k + 1)\\left(k(k + 7) + (3k + 16)\\right)$",
        "reason": "Taking out a common factor: $k + 1$ is a factor of both terms."
      },
      {
        "step": "$(k + 1)\\left(k(k + 7) + (3k + 16)\\right) = (k + 1)(k^2 + 10k + 16)$",
        "reason": "Multiplying out and collecting like terms: inside the bracket, $k(k + 7) = k^2 + 7k$, and the terms in $k$ add to $10k$."
      },
      {
        "step": "$(k + 1)(k^2 + 10k + 16) = (k + 1)(k + 2)(k + 8)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(k + 8)$ gives $k^2 + 10k + 16$."
      },
      {
        "step": "So $16 + 38 + 66 + \\dots + k(3k + 13) + (k + 1)(3k + 16) = (k + 1)((k + 1) + 1)((k + 1) + 7)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 1 = k + 2$ and $(k + 1) + 7 = k + 8$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $16 + 38 + 66 + \\dots + n(3n + 13) = n(n + 1)(n + 7)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k1-p08",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $12 + 48 + 192 + \\dots + 3 \\cdot 4^n = 4^{n + 1} - 4$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $12 + 48 + 192 + \\dots + 3 \\cdot 4^n = 4^{n + 1} - 4$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $12 + 48 + 192 + \\dots + 3 \\cdot 4^n = 4^{n + 1} - 4$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $12$ and the right side is $4^2 - 4 = 12$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $12 + 48 + 192 + \\dots + 3 \\cdot 4^k = 4^{k + 1} - 4$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $12 + 48 + 192 + \\dots + 3 \\cdot 4^k + 3 \\cdot 4^{k + 1} = 4^{k + 1} - 4 + 3 \\cdot 4^{k + 1}$.",
        "reason": "Adding the same number to both sides: the next term, $3 \\cdot 4^{k + 1}$, is added to both sides of line 4."
      },
      {
        "step": "$4^{k + 1} - 4 + 3 \\cdot 4^{k + 1} = 4 \\cdot 4^{k + 1} - 4$",
        "reason": "Collecting like terms: the two terms in $4^{k + 1}$ add to $4 \\cdot 4^{k + 1}$, since $1 + 3 = 4$."
      },
      {
        "step": "$4 \\cdot 4^{k + 1} - 4 = 4^{k + 2} - 4$",
        "reason": "Product law: $4 \\cdot 4^{k + 1} = 4^{k + 2}$."
      },
      {
        "step": "So $12 + 48 + 192 + \\dots + 3 \\cdot 4^k + 3 \\cdot 4^{k + 1} = 4^{(k + 1) + 1} - 4$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $k + 2 = (k + 1) + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $12 + 48 + 192 + \\dots + 3 \\cdot 4^n = 4^{n + 1} - 4$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k1-p09",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $4 + 6 + 8 + \\dots + (2n + 2) = n(n + 3)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $4 + 6 + 8 + \\dots + (2n + 2) = n(n + 3)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $4 + 6 + 8 + \\dots + (2n + 2) = n(n + 3)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $4$ and the right side is $1 \\cdot (1 + 3) = 4$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $4 + 6 + 8 + \\dots + (2k + 2) = k(k + 3)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $4 + 6 + 8 + \\dots + (2k + 2) + (2k + 4) = k(k + 3) + (2k + 4)$.",
        "reason": "Adding the same number to both sides: the next term, $2(k + 1) + 2 = 2k + 4$, is added to both sides of line 4."
      },
      {
        "step": "$k(k + 3) + (2k + 4) = k^2 + 5k + 4$",
        "reason": "Multiplying out and collecting like terms: $k(k + 3) = k^2 + 3k$, and the terms in $k$ add to $5k$."
      },
      {
        "step": "$k^2 + 5k + 4 = (k + 1)(k + 4)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 1)(k + 4)$ gives $k^2 + 5k + 4$."
      },
      {
        "step": "So $4 + 6 + 8 + \\dots + (2k + 2) + (2k + 4) = (k + 1)((k + 1) + 3)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $(k + 1) + 3 = k + 4$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $4 + 6 + 8 + \\dots + (2n + 2) = n(n + 3)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k1-p10",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $9 + 23 + 37 + \\dots + (14n - 5) = n(7n + 2)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $9 + 23 + 37 + \\dots + (14n - 5) = n(7n + 2)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $9 + 23 + 37 + \\dots + (14n - 5) = n(7n + 2)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $9$ and the right side is $1 \\cdot (7 \\cdot 1 + 2) = 9$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $9 + 23 + 37 + \\dots + (14k - 5) = k(7k + 2)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $9 + 23 + 37 + \\dots + (14k - 5) + (14k + 9) = k(7k + 2) + (14k + 9)$.",
        "reason": "Adding the same number to both sides: the next term, $14(k + 1) - 5 = 14k + 9$, is added to both sides of line 4."
      },
      {
        "step": "$k(7k + 2) + (14k + 9) = 7k^2 + 16k + 9$",
        "reason": "Multiplying out and collecting like terms: $k(7k + 2) = 7k^2 + 2k$, and the terms in $k$ add to $16k$."
      },
      {
        "step": "$7k^2 + 16k + 9 = (k + 1)(7k + 9)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 1)(7k + 9)$ gives $7k^2 + 16k + 9$."
      },
      {
        "step": "So $9 + 23 + 37 + \\dots + (14k - 5) + (14k + 9) = (k + 1)(7(k + 1) + 2)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $7(k + 1) + 2 = 7k + 9$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $9 + 23 + 37 + \\dots + (14n - 5) = n(7n + 2)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k1-p11",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $80 + 400 + 2000 + \\dots + 16 \\cdot 5^n = 4 \\cdot 5^{n + 1} - 20$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $80 + 400 + 2000 + \\dots + 16 \\cdot 5^n = 4 \\cdot 5^{n + 1} - 20$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $80 + 400 + 2000 + \\dots + 16 \\cdot 5^n = 4 \\cdot 5^{n + 1} - 20$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $80$ and the right side is $4 \\cdot 5^2 - 20 = 80$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $80 + 400 + 2000 + \\dots + 16 \\cdot 5^k = 4 \\cdot 5^{k + 1} - 20$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $80 + 400 + 2000 + \\dots + 16 \\cdot 5^k + 16 \\cdot 5^{k + 1} = 4 \\cdot 5^{k + 1} - 20 + 16 \\cdot 5^{k + 1}$.",
        "reason": "Adding the same number to both sides: the next term, $16 \\cdot 5^{k + 1}$, is added to both sides of line 4."
      },
      {
        "step": "$4 \\cdot 5^{k + 1} - 20 + 16 \\cdot 5^{k + 1} = 20 \\cdot 5^{k + 1} - 20$",
        "reason": "Collecting like terms: the two terms in $5^{k + 1}$ add to $20 \\cdot 5^{k + 1}$, since $4 + 16 = 20$."
      },
      {
        "step": "$20 \\cdot 5^{k + 1} - 20 = 4 \\cdot 5^{k + 2} - 20$",
        "reason": "Product law: $20 = 4 \\cdot 5$, and $5 \\cdot 5^{k + 1} = 5^{k + 2}$."
      },
      {
        "step": "So $80 + 400 + 2000 + \\dots + 16 \\cdot 5^k + 16 \\cdot 5^{k + 1} = 4 \\cdot 5^{(k + 1) + 1} - 20$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $k + 2 = (k + 1) + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $80 + 400 + 2000 + \\dots + 16 \\cdot 5^n = 4 \\cdot 5^{n + 1} - 20$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k1-p12",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{4}{2 \\cdot 5} + \\dfrac{4}{5 \\cdot 8} + \\dfrac{4}{8 \\cdot 11} + \\dots + \\dfrac{4}{(3n - 1)(3n + 2)} = \\dfrac{2n}{3n + 2}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{4}{2 \\cdot 5} + \\dfrac{4}{5 \\cdot 8} + \\dfrac{4}{8 \\cdot 11} + \\dots + \\dfrac{4}{(3n - 1)(3n + 2)} = \\dfrac{2n}{3n + 2}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\dfrac{4}{2 \\cdot 5} + \\dfrac{4}{5 \\cdot 8} + \\dfrac{4}{8 \\cdot 11} + \\dots + \\dfrac{4}{(3n - 1)(3n + 2)} = \\dfrac{2n}{3n + 2}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $\\dfrac{4}{2 \\cdot 5} = \\dfrac{2}{5}$ and the right side is $\\dfrac{2 \\cdot 1}{3 \\cdot 1 + 2} = \\dfrac{2}{5}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\dfrac{4}{2 \\cdot 5} + \\dfrac{4}{5 \\cdot 8} + \\dfrac{4}{8 \\cdot 11} + \\dots + \\dfrac{4}{(3k - 1)(3k + 2)} = \\dfrac{2k}{3k + 2}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\dfrac{4}{2 \\cdot 5} + \\dfrac{4}{5 \\cdot 8} + \\dfrac{4}{8 \\cdot 11} + \\dots + \\dfrac{4}{(3k - 1)(3k + 2)} + \\dfrac{4}{(3k + 2)(3k + 5)} = \\dfrac{2k}{3k + 2} + \\dfrac{4}{(3k + 2)(3k + 5)}$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, with $3(k + 1) - 1 = 3k + 2$ and $3(k + 1) + 2 = 3k + 5$."
      },
      {
        "step": "$\\dfrac{2k}{3k + 2} + \\dfrac{4}{(3k + 2)(3k + 5)} = \\dfrac{2k(3k + 5) + 4}{(3k + 2)(3k + 5)}$",
        "reason": "Simplest common denominator: the first fraction is multiplied above and below by $3k + 5$."
      },
      {
        "step": "$\\dfrac{2k(3k + 5) + 4}{(3k + 2)(3k + 5)} = \\dfrac{6k^2 + 10k + 4}{(3k + 2)(3k + 5)}$",
        "reason": "Multiplying out: $2k(3k + 5) = 6k^2 + 10k$."
      },
      {
        "step": "$\\dfrac{6k^2 + 10k + 4}{(3k + 2)(3k + 5)} = \\dfrac{2(k + 1)(3k + 2)}{(3k + 2)(3k + 5)}$",
        "reason": "Factoring a quadratic: multiplying out $2(k + 1)(3k + 2)$ gives $6k^2 + 10k + 4$."
      },
      {
        "step": "$\\dfrac{2(k + 1)(3k + 2)}{(3k + 2)(3k + 5)} = \\dfrac{2(k + 1)}{3k + 5}$",
        "reason": "Cancelling a common factor: $3k + 2$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\dfrac{4}{2 \\cdot 5} + \\dfrac{4}{5 \\cdot 8} + \\dfrac{4}{8 \\cdot 11} + \\dots + \\dfrac{4}{(3k - 1)(3k + 2)} + \\dfrac{4}{(3k + 2)(3k + 5)} = \\dfrac{2(k + 1)}{3(k + 1) + 2}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 9, with $3(k + 1) + 2 = 3k + 5$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\dfrac{4}{2 \\cdot 5} + \\dfrac{4}{5 \\cdot 8} + \\dfrac{4}{8 \\cdot 11} + \\dots + \\dfrac{4}{(3n - 1)(3n + 2)} = \\dfrac{2n}{3n + 2}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k1-p13",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Prove that $2 + 16 + 42 + \\dots + 2n(3n - 2) = n(n + 1)(2n - 1)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $2 + 16 + 42 + \\dots + 2n(3n - 2) = n(n + 1)(2n - 1)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $2 + 16 + 42 + \\dots + 2n(3n - 2) = n(n + 1)(2n - 1)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $2$ and the right side is $1 \\cdot (1 + 1)(2 - 1) = 2$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $2 + 16 + 42 + \\dots + 2k(3k - 2) = k(k + 1)(2k - 1)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $2 + 16 + 42 + \\dots + 2k(3k - 2) + 2(k + 1)(3k + 1) = k(k + 1)(2k - 1) + 2(k + 1)(3k + 1)$.",
        "reason": "Adding the same number to both sides: the next term, $2(k + 1)(3(k + 1) - 2) = 2(k + 1)(3k + 1)$, is added to both sides of line 4."
      },
      {
        "step": "$k(k + 1)(2k - 1) + 2(k + 1)(3k + 1) = (k + 1)\\left(k(2k - 1) + 2(3k + 1)\\right)$",
        "reason": "Taking out a common factor: $k + 1$ is a factor of both terms."
      },
      {
        "step": "$(k + 1)\\left(k(2k - 1) + 2(3k + 1)\\right) = (k + 1)(2k^2 + 5k + 2)$",
        "reason": "Multiplying out and collecting like terms: inside the bracket, $k(2k - 1) = 2k^2 - k$, and the terms in $k$ add to $5k$."
      },
      {
        "step": "$(k + 1)(2k^2 + 5k + 2) = (k + 1)(k + 2)(2k + 1)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(2k + 1)$ gives $2k^2 + 5k + 2$."
      },
      {
        "step": "So $2 + 16 + 42 + \\dots + 2k(3k - 2) + 2(k + 1)(3k + 1) = (k + 1)((k + 1) + 1)(2(k + 1) - 1)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 1 = k + 2$ and $2(k + 1) - 1 = 2k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $2 + 16 + 42 + \\dots + 2n(3n - 2) = n(n + 1)(2n - 1)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k1-p14",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $16 + 30 + 44 + \\dots + (14n + 2) = n(7n + 9)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $16 + 30 + 44 + \\dots + (14n + 2) = n(7n + 9)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $16 + 30 + 44 + \\dots + (14n + 2) = n(7n + 9)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $16$ and the right side is $1 \\cdot (7 \\cdot 1 + 9) = 16$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $16 + 30 + 44 + \\dots + (14k + 2) = k(7k + 9)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $16 + 30 + 44 + \\dots + (14k + 2) + (14k + 16) = k(7k + 9) + (14k + 16)$.",
        "reason": "Adding the same number to both sides: the next term, $14(k + 1) + 2 = 14k + 16$, is added to both sides of line 4."
      },
      {
        "step": "$k(7k + 9) + (14k + 16) = 7k^2 + 23k + 16$",
        "reason": "Multiplying out and collecting like terms: $k(7k + 9) = 7k^2 + 9k$, and the terms in $k$ add to $23k$."
      },
      {
        "step": "$7k^2 + 23k + 16 = (k + 1)(7k + 16)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 1)(7k + 16)$ gives $7k^2 + 23k + 16$."
      },
      {
        "step": "So $16 + 30 + 44 + \\dots + (14k + 2) + (14k + 16) = (k + 1)(7(k + 1) + 9)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $7(k + 1) + 9 = 7k + 16$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $16 + 30 + 44 + \\dots + (14n + 2) = n(7n + 9)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k1-p15",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Prove that $26 + 64 + 114 + \\dots + 2n(3n + 10) = n(n + 1)(2n + 11)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $26 + 64 + 114 + \\dots + 2n(3n + 10) = n(n + 1)(2n + 11)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $26 + 64 + 114 + \\dots + 2n(3n + 10) = n(n + 1)(2n + 11)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $26$ and the right side is $1 \\cdot (1 + 1)(2 + 11) = 26$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $26 + 64 + 114 + \\dots + 2k(3k + 10) = k(k + 1)(2k + 11)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $26 + 64 + 114 + \\dots + 2k(3k + 10) + 2(k + 1)(3k + 13) = k(k + 1)(2k + 11) + 2(k + 1)(3k + 13)$.",
        "reason": "Adding the same number to both sides: the next term, $2(k + 1)(3(k + 1) + 10) = 2(k + 1)(3k + 13)$, is added to both sides of line 4."
      },
      {
        "step": "$k(k + 1)(2k + 11) + 2(k + 1)(3k + 13) = (k + 1)\\left(k(2k + 11) + 2(3k + 13)\\right)$",
        "reason": "Taking out a common factor: $k + 1$ is a factor of both terms."
      },
      {
        "step": "$(k + 1)\\left(k(2k + 11) + 2(3k + 13)\\right) = (k + 1)(2k^2 + 17k + 26)$",
        "reason": "Multiplying out and collecting like terms: inside the bracket, $k(2k + 11) = 2k^2 + 11k$, and the terms in $k$ add to $17k$."
      },
      {
        "step": "$(k + 1)(2k^2 + 17k + 26) = (k + 1)(k + 2)(2k + 13)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(2k + 13)$ gives $2k^2 + 17k + 26$."
      },
      {
        "step": "So $26 + 64 + 114 + \\dots + 2k(3k + 10) + 2(k + 1)(3k + 13) = (k + 1)((k + 1) + 1)(2(k + 1) + 11)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 1 = k + 2$ and $2(k + 1) + 11 = 2k + 13$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $26 + 64 + 114 + \\dots + 2n(3n + 10) = n(n + 1)(2n + 11)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k1-p16",
    "topic": "induction",
    "kind": "t211-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $10 + 12 + 14 + \\dots + (2n + 8) = n(n + 9)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $10 + 12 + 14 + \\dots + (2n + 8) = n(n + 9)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $10 + 12 + 14 + \\dots + (2n + 8) = n(n + 9)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $10$ and the right side is $1 \\cdot (1 + 9) = 10$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $10 + 12 + 14 + \\dots + (2k + 8) = k(k + 9)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $10 + 12 + 14 + \\dots + (2k + 8) + (2k + 10) = k(k + 9) + (2k + 10)$.",
        "reason": "Adding the same number to both sides: the next term, $2(k + 1) + 8 = 2k + 10$, is added to both sides of line 4."
      },
      {
        "step": "$k(k + 9) + (2k + 10) = k^2 + 11k + 10$",
        "reason": "Multiplying out and collecting like terms: $k(k + 9) = k^2 + 9k$, and the terms in $k$ add to $11k$."
      },
      {
        "step": "$k^2 + 11k + 10 = (k + 1)(k + 10)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 1)(k + 10)$ gives $k^2 + 11k + 10$."
      },
      {
        "step": "So $10 + 12 + 14 + \\dots + (2k + 8) + (2k + 10) = (k + 1)((k + 1) + 9)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $(k + 1) + 9 = k + 10$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $10 + 12 + 14 + \\dots + (2n + 8) = n(n + 9)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k2-p01",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $25 \\cdot 1! + 60 \\cdot 2! + 115 \\cdot 3! + \\dots + (10n^2 + 5n + 10) \\cdot {n!} = 5\\left((2n + 1)(n + 1)! - 1\\right)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $25 \\cdot 1! + 60 \\cdot 2! + 115 \\cdot 3! + \\dots + (10n^2 + 5n + 10) \\cdot {n!} = 5\\left((2n + 1)(n + 1)! - 1\\right)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $25 \\cdot 1! + 60 \\cdot 2! + 115 \\cdot 3! + \\dots + (10n^2 + 5n + 10) \\cdot {n!} = 5\\left((2n + 1)(n + 1)! - 1\\right)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $25 \\cdot 1! = 25$ and the right side is $5\\left(3 \\cdot 2! - 1\\right) = 25$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $25 \\cdot 1! + 60 \\cdot 2! + 115 \\cdot 3! + \\dots + (10k^2 + 5k + 10) \\cdot {k!} = 5\\left((2k + 1)(k + 1)! - 1\\right)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $25 \\cdot 1! + 60 \\cdot 2! + 115 \\cdot 3! + \\dots + (10k^2 + 5k + 10) \\cdot {k!} + 5(2k^2 + 5k + 5) \\cdot (k + 1)! = 5\\left((2k + 1)(k + 1)! - 1\\right) + 5(2k^2 + 5k + 5) \\cdot (k + 1)!$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $10(k + 1)^2 + 5(k + 1) + 10 = 5(2k^2 + 5k + 5)$."
      },
      {
        "step": "$5\\left((2k + 1)(k + 1)! - 1\\right) + 5(2k^2 + 5k + 5) \\cdot (k + 1)! = 5\\left((2k^2 + 7k + 6)(k + 1)! - 1\\right)$",
        "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(2k + 1) + (2k^2 + 5k + 5) = 2k^2 + 7k + 6$."
      },
      {
        "step": "$5\\left((2k^2 + 7k + 6)(k + 1)! - 1\\right) = 5\\left((k + 2)(2k + 3)(k + 1)! - 1\\right)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(2k + 3)$ gives $2k^2 + 7k + 6$."
      },
      {
        "step": "$5\\left((k + 2)(2k + 3)(k + 1)! - 1\\right) = 5\\left((2k + 3)(k + 2)! - 1\\right)$",
        "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
      },
      {
        "step": "So $25 \\cdot 1! + 60 \\cdot 2! + 115 \\cdot 3! + \\dots + (10k^2 + 5k + 10) \\cdot {k!} + 5(2k^2 + 5k + 5) \\cdot (k + 1)! = 5\\left((2(k + 1) + 1)((k + 1) + 1)! - 1\\right)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $2(k + 1) + 1 = 2k + 3$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $25 \\cdot 1! + 60 \\cdot 2! + 115 \\cdot 3! + \\dots + (10n^2 + 5n + 10) \\cdot {n!} = 5\\left((2n + 1)(n + 1)! - 1\\right)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k2-p02",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $12 \\cdot 1! + 32 \\cdot 2! + 68 \\cdot 3! + \\dots + (8n^2 - 4n + 8) \\cdot {n!} = 4\\left((2n - 1)(n + 1)! + 1\\right)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $12 \\cdot 1! + 32 \\cdot 2! + 68 \\cdot 3! + \\dots + (8n^2 - 4n + 8) \\cdot {n!} = 4\\left((2n - 1)(n + 1)! + 1\\right)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $12 \\cdot 1! + 32 \\cdot 2! + 68 \\cdot 3! + \\dots + (8n^2 - 4n + 8) \\cdot {n!} = 4\\left((2n - 1)(n + 1)! + 1\\right)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $12 \\cdot 1! = 12$ and the right side is $4\\left(1 \\cdot 2! + 1\\right) = 12$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $12 \\cdot 1! + 32 \\cdot 2! + 68 \\cdot 3! + \\dots + (8k^2 - 4k + 8) \\cdot {k!} = 4\\left((2k - 1)(k + 1)! + 1\\right)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $12 \\cdot 1! + 32 \\cdot 2! + 68 \\cdot 3! + \\dots + (8k^2 - 4k + 8) \\cdot {k!} + 4(2k^2 + 3k + 3) \\cdot (k + 1)! = 4\\left((2k - 1)(k + 1)! + 1\\right) + 4(2k^2 + 3k + 3) \\cdot (k + 1)!$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $8(k + 1)^2 - 4(k + 1) + 8 = 4(2k^2 + 3k + 3)$."
      },
      {
        "step": "$4\\left((2k - 1)(k + 1)! + 1\\right) + 4(2k^2 + 3k + 3) \\cdot (k + 1)! = 4\\left((2k^2 + 5k + 2)(k + 1)! + 1\\right)$",
        "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(2k - 1) + (2k^2 + 3k + 3) = 2k^2 + 5k + 2$."
      },
      {
        "step": "$4\\left((2k^2 + 5k + 2)(k + 1)! + 1\\right) = 4\\left((k + 2)(2k + 1)(k + 1)! + 1\\right)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(2k + 1)$ gives $2k^2 + 5k + 2$."
      },
      {
        "step": "$4\\left((k + 2)(2k + 1)(k + 1)! + 1\\right) = 4\\left((2k + 1)(k + 2)! + 1\\right)$",
        "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
      },
      {
        "step": "So $12 \\cdot 1! + 32 \\cdot 2! + 68 \\cdot 3! + \\dots + (8k^2 - 4k + 8) \\cdot {k!} + 4(2k^2 + 3k + 3) \\cdot (k + 1)! = 4\\left((2(k + 1) - 1)((k + 1) + 1)! + 1\\right)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $2(k + 1) - 1 = 2k + 1$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $12 \\cdot 1! + 32 \\cdot 2! + 68 \\cdot 3! + \\dots + (8n^2 - 4n + 8) \\cdot {n!} = 4\\left((2n - 1)(n + 1)! + 1\\right)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k2-p03",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\left(1 - \\dfrac{7}{11}\\right)\\left(1 - \\dfrac{7}{18}\\right)\\left(1 - \\dfrac{7}{25}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 4}\\right) = \\dfrac{4}{7n + 4}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(1 - \\dfrac{7}{11}\\right)\\left(1 - \\dfrac{7}{18}\\right)\\left(1 - \\dfrac{7}{25}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 4}\\right) = \\dfrac{4}{7n + 4}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{7}{11}\\right)\\left(1 - \\dfrac{7}{18}\\right)\\left(1 - \\dfrac{7}{25}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 4}\\right) = \\dfrac{4}{7n + 4}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $1 - \\dfrac{7}{11} = \\dfrac{4}{11}$ and the right side is $\\dfrac{4}{7 \\cdot 1 + 4} = \\dfrac{4}{11}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\left(1 - \\dfrac{7}{11}\\right)\\left(1 - \\dfrac{7}{18}\\right)\\left(1 - \\dfrac{7}{25}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 4}\\right) = \\dfrac{4}{7k + 4}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\left(1 - \\dfrac{7}{11}\\right)\\left(1 - \\dfrac{7}{18}\\right)\\left(1 - \\dfrac{7}{25}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 4}\\right)\\left(1 - \\dfrac{7}{7k + 11}\\right) = \\dfrac{4}{7k + 4}\\left(1 - \\dfrac{7}{7k + 11}\\right)$.",
        "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $7(k + 1) + 4 = 7k + 11$."
      },
      {
        "step": "$1 - \\dfrac{7}{7k + 11} = \\dfrac{7k + 4}{7k + 11}$",
        "reason": "Single fraction: $1$ is written as $\\dfrac{7k + 11}{7k + 11}$."
      },
      {
        "step": "$\\dfrac{4}{7k + 4} \\cdot \\dfrac{7k + 4}{7k + 11} = \\dfrac{4}{7k + 11}$",
        "reason": "Cancelling a common factor: $7k + 4$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{7}{11}\\right)\\left(1 - \\dfrac{7}{18}\\right)\\left(1 - \\dfrac{7}{25}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 4}\\right)\\left(1 - \\dfrac{7}{7k + 11}\\right) = \\dfrac{4}{7(k + 1) + 4}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $7(k + 1) + 4 = 7k + 11$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{7}{11}\\right)\\left(1 - \\dfrac{7}{18}\\right)\\left(1 - \\dfrac{7}{25}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 4}\\right) = \\dfrac{4}{7n + 4}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k2-p04",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\left(1 - \\dfrac{6}{11}\\right)\\left(1 - \\dfrac{6}{17}\\right)\\left(1 - \\dfrac{6}{23}\\right) \\cdots \\left(1 - \\dfrac{6}{6n + 5}\\right) = \\dfrac{5}{6n + 5}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(1 - \\dfrac{6}{11}\\right)\\left(1 - \\dfrac{6}{17}\\right)\\left(1 - \\dfrac{6}{23}\\right) \\cdots \\left(1 - \\dfrac{6}{6n + 5}\\right) = \\dfrac{5}{6n + 5}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{6}{11}\\right)\\left(1 - \\dfrac{6}{17}\\right)\\left(1 - \\dfrac{6}{23}\\right) \\cdots \\left(1 - \\dfrac{6}{6n + 5}\\right) = \\dfrac{5}{6n + 5}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $1 - \\dfrac{6}{11} = \\dfrac{5}{11}$ and the right side is $\\dfrac{5}{6 \\cdot 1 + 5} = \\dfrac{5}{11}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\left(1 - \\dfrac{6}{11}\\right)\\left(1 - \\dfrac{6}{17}\\right)\\left(1 - \\dfrac{6}{23}\\right) \\cdots \\left(1 - \\dfrac{6}{6k + 5}\\right) = \\dfrac{5}{6k + 5}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\left(1 - \\dfrac{6}{11}\\right)\\left(1 - \\dfrac{6}{17}\\right)\\left(1 - \\dfrac{6}{23}\\right) \\cdots \\left(1 - \\dfrac{6}{6k + 5}\\right)\\left(1 - \\dfrac{6}{6k + 11}\\right) = \\dfrac{5}{6k + 5}\\left(1 - \\dfrac{6}{6k + 11}\\right)$.",
        "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $6(k + 1) + 5 = 6k + 11$."
      },
      {
        "step": "$1 - \\dfrac{6}{6k + 11} = \\dfrac{6k + 5}{6k + 11}$",
        "reason": "Single fraction: $1$ is written as $\\dfrac{6k + 11}{6k + 11}$."
      },
      {
        "step": "$\\dfrac{5}{6k + 5} \\cdot \\dfrac{6k + 5}{6k + 11} = \\dfrac{5}{6k + 11}$",
        "reason": "Cancelling a common factor: $6k + 5$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{6}{11}\\right)\\left(1 - \\dfrac{6}{17}\\right)\\left(1 - \\dfrac{6}{23}\\right) \\cdots \\left(1 - \\dfrac{6}{6k + 5}\\right)\\left(1 - \\dfrac{6}{6k + 11}\\right) = \\dfrac{5}{6(k + 1) + 5}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $6(k + 1) + 5 = 6k + 11$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{6}{11}\\right)\\left(1 - \\dfrac{6}{17}\\right)\\left(1 - \\dfrac{6}{23}\\right) \\cdots \\left(1 - \\dfrac{6}{6n + 5}\\right) = \\dfrac{5}{6n + 5}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k2-p05",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $9 \\cdot 1! + 20 \\cdot 2! + 35 \\cdot 3! + \\dots + (2n^2 + 5n + 2) \\cdot {n!} = (2n + 5)(n + 1)! - 5$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $9 \\cdot 1! + 20 \\cdot 2! + 35 \\cdot 3! + \\dots + (2n^2 + 5n + 2) \\cdot {n!} = (2n + 5)(n + 1)! - 5$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $9 \\cdot 1! + 20 \\cdot 2! + 35 \\cdot 3! + \\dots + (2n^2 + 5n + 2) \\cdot {n!} = (2n + 5)(n + 1)! - 5$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $9 \\cdot 1! = 9$ and the right side is $7 \\cdot 2! - 5 = 9$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $9 \\cdot 1! + 20 \\cdot 2! + 35 \\cdot 3! + \\dots + (2k^2 + 5k + 2) \\cdot {k!} = (2k + 5)(k + 1)! - 5$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $9 \\cdot 1! + 20 \\cdot 2! + 35 \\cdot 3! + \\dots + (2k^2 + 5k + 2) \\cdot {k!} + (2k^2 + 9k + 9) \\cdot (k + 1)! = (2k + 5)(k + 1)! - 5 + (2k^2 + 9k + 9) \\cdot (k + 1)!$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $2(k + 1)^2 + 5(k + 1) + 2 = 2k^2 + 9k + 9$."
      },
      {
        "step": "$(2k + 5)(k + 1)! - 5 + (2k^2 + 9k + 9) \\cdot (k + 1)! = (2k^2 + 11k + 14)(k + 1)! - 5$",
        "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(2k + 5) + (2k^2 + 9k + 9) = 2k^2 + 11k + 14$."
      },
      {
        "step": "$(2k^2 + 11k + 14)(k + 1)! - 5 = (k + 2)(2k + 7)(k + 1)! - 5$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(2k + 7)$ gives $2k^2 + 11k + 14$."
      },
      {
        "step": "$(k + 2)(2k + 7)(k + 1)! - 5 = (2k + 7)(k + 2)! - 5$",
        "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
      },
      {
        "step": "So $9 \\cdot 1! + 20 \\cdot 2! + 35 \\cdot 3! + \\dots + (2k^2 + 5k + 2) \\cdot {k!} + (2k^2 + 9k + 9) \\cdot (k + 1)! = (2(k + 1) + 5)((k + 1) + 1)! - 5$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $2(k + 1) + 5 = 2k + 7$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $9 \\cdot 1! + 20 \\cdot 2! + 35 \\cdot 3! + \\dots + (2n^2 + 5n + 2) \\cdot {n!} = (2n + 5)(n + 1)! - 5$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k2-p06",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\left(1 - \\dfrac{4}{7}\\right)\\left(1 - \\dfrac{4}{11}\\right)\\left(1 - \\dfrac{4}{15}\\right) \\cdots \\left(1 - \\dfrac{4}{4n + 3}\\right) = \\dfrac{3}{4n + 3}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(1 - \\dfrac{4}{7}\\right)\\left(1 - \\dfrac{4}{11}\\right)\\left(1 - \\dfrac{4}{15}\\right) \\cdots \\left(1 - \\dfrac{4}{4n + 3}\\right) = \\dfrac{3}{4n + 3}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{4}{7}\\right)\\left(1 - \\dfrac{4}{11}\\right)\\left(1 - \\dfrac{4}{15}\\right) \\cdots \\left(1 - \\dfrac{4}{4n + 3}\\right) = \\dfrac{3}{4n + 3}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $1 - \\dfrac{4}{7} = \\dfrac{3}{7}$ and the right side is $\\dfrac{3}{4 \\cdot 1 + 3} = \\dfrac{3}{7}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\left(1 - \\dfrac{4}{7}\\right)\\left(1 - \\dfrac{4}{11}\\right)\\left(1 - \\dfrac{4}{15}\\right) \\cdots \\left(1 - \\dfrac{4}{4k + 3}\\right) = \\dfrac{3}{4k + 3}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\left(1 - \\dfrac{4}{7}\\right)\\left(1 - \\dfrac{4}{11}\\right)\\left(1 - \\dfrac{4}{15}\\right) \\cdots \\left(1 - \\dfrac{4}{4k + 3}\\right)\\left(1 - \\dfrac{4}{4k + 7}\\right) = \\dfrac{3}{4k + 3}\\left(1 - \\dfrac{4}{4k + 7}\\right)$.",
        "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $4(k + 1) + 3 = 4k + 7$."
      },
      {
        "step": "$1 - \\dfrac{4}{4k + 7} = \\dfrac{4k + 3}{4k + 7}$",
        "reason": "Single fraction: $1$ is written as $\\dfrac{4k + 7}{4k + 7}$."
      },
      {
        "step": "$\\dfrac{3}{4k + 3} \\cdot \\dfrac{4k + 3}{4k + 7} = \\dfrac{3}{4k + 7}$",
        "reason": "Cancelling a common factor: $4k + 3$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{4}{7}\\right)\\left(1 - \\dfrac{4}{11}\\right)\\left(1 - \\dfrac{4}{15}\\right) \\cdots \\left(1 - \\dfrac{4}{4k + 3}\\right)\\left(1 - \\dfrac{4}{4k + 7}\\right) = \\dfrac{3}{4(k + 1) + 3}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $4(k + 1) + 3 = 4k + 7$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{4}{7}\\right)\\left(1 - \\dfrac{4}{11}\\right)\\left(1 - \\dfrac{4}{15}\\right) \\cdots \\left(1 - \\dfrac{4}{4n + 3}\\right) = \\dfrac{3}{4n + 3}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k2-p07",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $24 \\cdot 1! + 57 \\cdot 2! + 108 \\cdot 3! + \\dots + (9n^2 + 6n + 9) \\cdot {n!} = 3\\left((3n + 2)(n + 1)! - 2\\right)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $24 \\cdot 1! + 57 \\cdot 2! + 108 \\cdot 3! + \\dots + (9n^2 + 6n + 9) \\cdot {n!} = 3\\left((3n + 2)(n + 1)! - 2\\right)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $24 \\cdot 1! + 57 \\cdot 2! + 108 \\cdot 3! + \\dots + (9n^2 + 6n + 9) \\cdot {n!} = 3\\left((3n + 2)(n + 1)! - 2\\right)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $24 \\cdot 1! = 24$ and the right side is $3\\left(5 \\cdot 2! - 2\\right) = 24$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $24 \\cdot 1! + 57 \\cdot 2! + 108 \\cdot 3! + \\dots + (9k^2 + 6k + 9) \\cdot {k!} = 3\\left((3k + 2)(k + 1)! - 2\\right)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $24 \\cdot 1! + 57 \\cdot 2! + 108 \\cdot 3! + \\dots + (9k^2 + 6k + 9) \\cdot {k!} + 3(3k^2 + 8k + 8) \\cdot (k + 1)! = 3\\left((3k + 2)(k + 1)! - 2\\right) + 3(3k^2 + 8k + 8) \\cdot (k + 1)!$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $9(k + 1)^2 + 6(k + 1) + 9 = 3(3k^2 + 8k + 8)$."
      },
      {
        "step": "$3\\left((3k + 2)(k + 1)! - 2\\right) + 3(3k^2 + 8k + 8) \\cdot (k + 1)! = 3\\left((3k^2 + 11k + 10)(k + 1)! - 2\\right)$",
        "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(3k + 2) + (3k^2 + 8k + 8) = 3k^2 + 11k + 10$."
      },
      {
        "step": "$3\\left((3k^2 + 11k + 10)(k + 1)! - 2\\right) = 3\\left((k + 2)(3k + 5)(k + 1)! - 2\\right)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(3k + 5)$ gives $3k^2 + 11k + 10$."
      },
      {
        "step": "$3\\left((k + 2)(3k + 5)(k + 1)! - 2\\right) = 3\\left((3k + 5)(k + 2)! - 2\\right)$",
        "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
      },
      {
        "step": "So $24 \\cdot 1! + 57 \\cdot 2! + 108 \\cdot 3! + \\dots + (9k^2 + 6k + 9) \\cdot {k!} + 3(3k^2 + 8k + 8) \\cdot (k + 1)! = 3\\left((3(k + 1) + 2)((k + 1) + 1)! - 2\\right)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $3(k + 1) + 2 = 3k + 5$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $24 \\cdot 1! + 57 \\cdot 2! + 108 \\cdot 3! + \\dots + (9n^2 + 6n + 9) \\cdot {n!} = 3\\left((3n + 2)(n + 1)! - 2\\right)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k2-p08",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\left(1 - \\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3}{7}\\right)\\left(1 - \\dfrac{3}{10}\\right) \\cdots \\left(1 - \\dfrac{3}{3n + 1}\\right) = \\dfrac{1}{3n + 1}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(1 - \\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3}{7}\\right)\\left(1 - \\dfrac{3}{10}\\right) \\cdots \\left(1 - \\dfrac{3}{3n + 1}\\right) = \\dfrac{1}{3n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3}{7}\\right)\\left(1 - \\dfrac{3}{10}\\right) \\cdots \\left(1 - \\dfrac{3}{3n + 1}\\right) = \\dfrac{1}{3n + 1}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $1 - \\dfrac{3}{4} = \\dfrac{1}{4}$ and the right side is $\\dfrac{1}{3 \\cdot 1 + 1} = \\dfrac{1}{4}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\left(1 - \\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3}{7}\\right)\\left(1 - \\dfrac{3}{10}\\right) \\cdots \\left(1 - \\dfrac{3}{3k + 1}\\right) = \\dfrac{1}{3k + 1}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\left(1 - \\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3}{7}\\right)\\left(1 - \\dfrac{3}{10}\\right) \\cdots \\left(1 - \\dfrac{3}{3k + 1}\\right)\\left(1 - \\dfrac{3}{3k + 4}\\right) = \\dfrac{1}{3k + 1}\\left(1 - \\dfrac{3}{3k + 4}\\right)$.",
        "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $3(k + 1) + 1 = 3k + 4$."
      },
      {
        "step": "$1 - \\dfrac{3}{3k + 4} = \\dfrac{3k + 1}{3k + 4}$",
        "reason": "Single fraction: $1$ is written as $\\dfrac{3k + 4}{3k + 4}$."
      },
      {
        "step": "$\\dfrac{1}{3k + 1} \\cdot \\dfrac{3k + 1}{3k + 4} = \\dfrac{1}{3k + 4}$",
        "reason": "Cancelling a common factor: $3k + 1$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3}{7}\\right)\\left(1 - \\dfrac{3}{10}\\right) \\cdots \\left(1 - \\dfrac{3}{3k + 1}\\right)\\left(1 - \\dfrac{3}{3k + 4}\\right) = \\dfrac{1}{3(k + 1) + 1}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $3(k + 1) + 1 = 3k + 4$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3}{7}\\right)\\left(1 - \\dfrac{3}{10}\\right) \\cdots \\left(1 - \\dfrac{3}{3n + 1}\\right) = \\dfrac{1}{3n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k2-p09",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $35 \\cdot 1! + 75 \\cdot 2! + 125 \\cdot 3! + \\dots + (5n^2 + 25n + 5) \\cdot {n!} = 5\\left((n + 5)(n + 1)! - 5\\right)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $35 \\cdot 1! + 75 \\cdot 2! + 125 \\cdot 3! + \\dots + (5n^2 + 25n + 5) \\cdot {n!} = 5\\left((n + 5)(n + 1)! - 5\\right)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $35 \\cdot 1! + 75 \\cdot 2! + 125 \\cdot 3! + \\dots + (5n^2 + 25n + 5) \\cdot {n!} = 5\\left((n + 5)(n + 1)! - 5\\right)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $35 \\cdot 1! = 35$ and the right side is $5\\left(6 \\cdot 2! - 5\\right) = 35$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $35 \\cdot 1! + 75 \\cdot 2! + 125 \\cdot 3! + \\dots + (5k^2 + 25k + 5) \\cdot {k!} = 5\\left((k + 5)(k + 1)! - 5\\right)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $35 \\cdot 1! + 75 \\cdot 2! + 125 \\cdot 3! + \\dots + (5k^2 + 25k + 5) \\cdot {k!} + 5(k^2 + 7k + 7) \\cdot (k + 1)! = 5\\left((k + 5)(k + 1)! - 5\\right) + 5(k^2 + 7k + 7) \\cdot (k + 1)!$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $5(k + 1)^2 + 25(k + 1) + 5 = 5(k^2 + 7k + 7)$."
      },
      {
        "step": "$5\\left((k + 5)(k + 1)! - 5\\right) + 5(k^2 + 7k + 7) \\cdot (k + 1)! = 5\\left((k^2 + 8k + 12)(k + 1)! - 5\\right)$",
        "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(k + 5) + (k^2 + 7k + 7) = k^2 + 8k + 12$."
      },
      {
        "step": "$5\\left((k^2 + 8k + 12)(k + 1)! - 5\\right) = 5\\left((k + 2)(k + 6)(k + 1)! - 5\\right)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(k + 6)$ gives $k^2 + 8k + 12$."
      },
      {
        "step": "$5\\left((k + 2)(k + 6)(k + 1)! - 5\\right) = 5\\left((k + 6)(k + 2)! - 5\\right)$",
        "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
      },
      {
        "step": "So $35 \\cdot 1! + 75 \\cdot 2! + 125 \\cdot 3! + \\dots + (5k^2 + 25k + 5) \\cdot {k!} + 5(k^2 + 7k + 7) \\cdot (k + 1)! = 5\\left(((k + 1) + 5)((k + 1) + 1)! - 5\\right)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 5 = k + 6$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $35 \\cdot 1! + 75 \\cdot 2! + 125 \\cdot 3! + \\dots + (5n^2 + 25n + 5) \\cdot {n!} = 5\\left((n + 5)(n + 1)! - 5\\right)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k2-p10",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\left(1 - \\dfrac{4}{5}\\right)\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{13}\\right) \\cdots \\left(1 - \\dfrac{4}{4n + 1}\\right) = \\dfrac{1}{4n + 1}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(1 - \\dfrac{4}{5}\\right)\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{13}\\right) \\cdots \\left(1 - \\dfrac{4}{4n + 1}\\right) = \\dfrac{1}{4n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{4}{5}\\right)\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{13}\\right) \\cdots \\left(1 - \\dfrac{4}{4n + 1}\\right) = \\dfrac{1}{4n + 1}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $1 - \\dfrac{4}{5} = \\dfrac{1}{5}$ and the right side is $\\dfrac{1}{4 \\cdot 1 + 1} = \\dfrac{1}{5}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\left(1 - \\dfrac{4}{5}\\right)\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{13}\\right) \\cdots \\left(1 - \\dfrac{4}{4k + 1}\\right) = \\dfrac{1}{4k + 1}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\left(1 - \\dfrac{4}{5}\\right)\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{13}\\right) \\cdots \\left(1 - \\dfrac{4}{4k + 1}\\right)\\left(1 - \\dfrac{4}{4k + 5}\\right) = \\dfrac{1}{4k + 1}\\left(1 - \\dfrac{4}{4k + 5}\\right)$.",
        "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $4(k + 1) + 1 = 4k + 5$."
      },
      {
        "step": "$1 - \\dfrac{4}{4k + 5} = \\dfrac{4k + 1}{4k + 5}$",
        "reason": "Single fraction: $1$ is written as $\\dfrac{4k + 5}{4k + 5}$."
      },
      {
        "step": "$\\dfrac{1}{4k + 1} \\cdot \\dfrac{4k + 1}{4k + 5} = \\dfrac{1}{4k + 5}$",
        "reason": "Cancelling a common factor: $4k + 1$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{4}{5}\\right)\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{13}\\right) \\cdots \\left(1 - \\dfrac{4}{4k + 1}\\right)\\left(1 - \\dfrac{4}{4k + 5}\\right) = \\dfrac{1}{4(k + 1) + 1}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $4(k + 1) + 1 = 4k + 5$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{4}{5}\\right)\\left(1 - \\dfrac{4}{9}\\right)\\left(1 - \\dfrac{4}{13}\\right) \\cdots \\left(1 - \\dfrac{4}{4n + 1}\\right) = \\dfrac{1}{4n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k2-p11",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{13}\\right)\\left(1 - \\dfrac{6}{19}\\right) \\cdots \\left(1 - \\dfrac{6}{6n + 1}\\right) = \\dfrac{1}{6n + 1}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{13}\\right)\\left(1 - \\dfrac{6}{19}\\right) \\cdots \\left(1 - \\dfrac{6}{6n + 1}\\right) = \\dfrac{1}{6n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{13}\\right)\\left(1 - \\dfrac{6}{19}\\right) \\cdots \\left(1 - \\dfrac{6}{6n + 1}\\right) = \\dfrac{1}{6n + 1}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $1 - \\dfrac{6}{7} = \\dfrac{1}{7}$ and the right side is $\\dfrac{1}{6 \\cdot 1 + 1} = \\dfrac{1}{7}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{13}\\right)\\left(1 - \\dfrac{6}{19}\\right) \\cdots \\left(1 - \\dfrac{6}{6k + 1}\\right) = \\dfrac{1}{6k + 1}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{13}\\right)\\left(1 - \\dfrac{6}{19}\\right) \\cdots \\left(1 - \\dfrac{6}{6k + 1}\\right)\\left(1 - \\dfrac{6}{6k + 7}\\right) = \\dfrac{1}{6k + 1}\\left(1 - \\dfrac{6}{6k + 7}\\right)$.",
        "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $6(k + 1) + 1 = 6k + 7$."
      },
      {
        "step": "$1 - \\dfrac{6}{6k + 7} = \\dfrac{6k + 1}{6k + 7}$",
        "reason": "Single fraction: $1$ is written as $\\dfrac{6k + 7}{6k + 7}$."
      },
      {
        "step": "$\\dfrac{1}{6k + 1} \\cdot \\dfrac{6k + 1}{6k + 7} = \\dfrac{1}{6k + 7}$",
        "reason": "Cancelling a common factor: $6k + 1$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{13}\\right)\\left(1 - \\dfrac{6}{19}\\right) \\cdots \\left(1 - \\dfrac{6}{6k + 1}\\right)\\left(1 - \\dfrac{6}{6k + 7}\\right) = \\dfrac{1}{6(k + 1) + 1}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $6(k + 1) + 1 = 6k + 7$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{6}{7}\\right)\\left(1 - \\dfrac{6}{13}\\right)\\left(1 - \\dfrac{6}{19}\\right) \\cdots \\left(1 - \\dfrac{6}{6n + 1}\\right) = \\dfrac{1}{6n + 1}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k2-p12",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $8 \\cdot 1! + 22 \\cdot 2! + 48 \\cdot 3! + \\dots + (6n^2 - 4n + 6) \\cdot {n!} = 2\\left((3n - 2)(n + 1)! + 2\\right)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $8 \\cdot 1! + 22 \\cdot 2! + 48 \\cdot 3! + \\dots + (6n^2 - 4n + 6) \\cdot {n!} = 2\\left((3n - 2)(n + 1)! + 2\\right)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $8 \\cdot 1! + 22 \\cdot 2! + 48 \\cdot 3! + \\dots + (6n^2 - 4n + 6) \\cdot {n!} = 2\\left((3n - 2)(n + 1)! + 2\\right)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $8 \\cdot 1! = 8$ and the right side is $2\\left(1 \\cdot 2! + 2\\right) = 8$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $8 \\cdot 1! + 22 \\cdot 2! + 48 \\cdot 3! + \\dots + (6k^2 - 4k + 6) \\cdot {k!} = 2\\left((3k - 2)(k + 1)! + 2\\right)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $8 \\cdot 1! + 22 \\cdot 2! + 48 \\cdot 3! + \\dots + (6k^2 - 4k + 6) \\cdot {k!} + 2(3k^2 + 4k + 4) \\cdot (k + 1)! = 2\\left((3k - 2)(k + 1)! + 2\\right) + 2(3k^2 + 4k + 4) \\cdot (k + 1)!$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $6(k + 1)^2 - 4(k + 1) + 6 = 2(3k^2 + 4k + 4)$."
      },
      {
        "step": "$2\\left((3k - 2)(k + 1)! + 2\\right) + 2(3k^2 + 4k + 4) \\cdot (k + 1)! = 2\\left((3k^2 + 7k + 2)(k + 1)! + 2\\right)$",
        "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(3k - 2) + (3k^2 + 4k + 4) = 3k^2 + 7k + 2$."
      },
      {
        "step": "$2\\left((3k^2 + 7k + 2)(k + 1)! + 2\\right) = 2\\left((k + 2)(3k + 1)(k + 1)! + 2\\right)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(3k + 1)$ gives $3k^2 + 7k + 2$."
      },
      {
        "step": "$2\\left((k + 2)(3k + 1)(k + 1)! + 2\\right) = 2\\left((3k + 1)(k + 2)! + 2\\right)$",
        "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
      },
      {
        "step": "So $8 \\cdot 1! + 22 \\cdot 2! + 48 \\cdot 3! + \\dots + (6k^2 - 4k + 6) \\cdot {k!} + 2(3k^2 + 4k + 4) \\cdot (k + 1)! = 2\\left((3(k + 1) - 2)((k + 1) + 1)! + 2\\right)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $3(k + 1) - 2 = 3k + 1$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $8 \\cdot 1! + 22 \\cdot 2! + 48 \\cdot 3! + \\dots + (6n^2 - 4n + 6) \\cdot {n!} = 2\\left((3n - 2)(n + 1)! + 2\\right)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k2-p13",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $21 \\cdot 1! + 51 \\cdot 2! + 99 \\cdot 3! + \\dots + (9n^2 + 3n + 9) \\cdot {n!} = 3\\left((3n + 1)(n + 1)! - 1\\right)$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $21 \\cdot 1! + 51 \\cdot 2! + 99 \\cdot 3! + \\dots + (9n^2 + 3n + 9) \\cdot {n!} = 3\\left((3n + 1)(n + 1)! - 1\\right)$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $21 \\cdot 1! + 51 \\cdot 2! + 99 \\cdot 3! + \\dots + (9n^2 + 3n + 9) \\cdot {n!} = 3\\left((3n + 1)(n + 1)! - 1\\right)$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $21 \\cdot 1! = 21$ and the right side is $3\\left(4 \\cdot 2! - 1\\right) = 21$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $21 \\cdot 1! + 51 \\cdot 2! + 99 \\cdot 3! + \\dots + (9k^2 + 3k + 9) \\cdot {k!} = 3\\left((3k + 1)(k + 1)! - 1\\right)$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $21 \\cdot 1! + 51 \\cdot 2! + 99 \\cdot 3! + \\dots + (9k^2 + 3k + 9) \\cdot {k!} + 3(3k^2 + 7k + 7) \\cdot (k + 1)! = 3\\left((3k + 1)(k + 1)! - 1\\right) + 3(3k^2 + 7k + 7) \\cdot (k + 1)!$.",
        "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $9(k + 1)^2 + 3(k + 1) + 9 = 3(3k^2 + 7k + 7)$."
      },
      {
        "step": "$3\\left((3k + 1)(k + 1)! - 1\\right) + 3(3k^2 + 7k + 7) \\cdot (k + 1)! = 3\\left((3k^2 + 10k + 8)(k + 1)! - 1\\right)$",
        "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(3k + 1) + (3k^2 + 7k + 7) = 3k^2 + 10k + 8$."
      },
      {
        "step": "$3\\left((3k^2 + 10k + 8)(k + 1)! - 1\\right) = 3\\left((k + 2)(3k + 4)(k + 1)! - 1\\right)$",
        "reason": "Factoring a quadratic: multiplying out $(k + 2)(3k + 4)$ gives $3k^2 + 10k + 8$."
      },
      {
        "step": "$3\\left((k + 2)(3k + 4)(k + 1)! - 1\\right) = 3\\left((3k + 4)(k + 2)! - 1\\right)$",
        "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
      },
      {
        "step": "So $21 \\cdot 1! + 51 \\cdot 2! + 99 \\cdot 3! + \\dots + (9k^2 + 3k + 9) \\cdot {k!} + 3(3k^2 + 7k + 7) \\cdot (k + 1)! = 3\\left((3(k + 1) + 1)((k + 1) + 1)! - 1\\right)$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8, with $3(k + 1) + 1 = 3k + 4$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $21 \\cdot 1! + 51 \\cdot 2! + 99 \\cdot 3! + \\dots + (9n^2 + 3n + 9) \\cdot {n!} = 3\\left((3n + 1)(n + 1)! - 1\\right)$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k2-p14",
    "topic": "induction",
    "kind": "t211-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\left(1 - \\dfrac{5}{8}\\right)\\left(1 - \\dfrac{5}{13}\\right)\\left(1 - \\dfrac{5}{18}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 3}\\right) = \\dfrac{3}{5n + 3}$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(1 - \\dfrac{5}{8}\\right)\\left(1 - \\dfrac{5}{13}\\right)\\left(1 - \\dfrac{5}{18}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 3}\\right) = \\dfrac{3}{5n + 3}$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{5}{8}\\right)\\left(1 - \\dfrac{5}{13}\\right)\\left(1 - \\dfrac{5}{18}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 3}\\right) = \\dfrac{3}{5n + 3}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $1 - \\dfrac{5}{8} = \\dfrac{3}{8}$ and the right side is $\\dfrac{3}{5 \\cdot 1 + 3} = \\dfrac{3}{8}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\left(1 - \\dfrac{5}{8}\\right)\\left(1 - \\dfrac{5}{13}\\right)\\left(1 - \\dfrac{5}{18}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 3}\\right) = \\dfrac{3}{5k + 3}$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $\\left(1 - \\dfrac{5}{8}\\right)\\left(1 - \\dfrac{5}{13}\\right)\\left(1 - \\dfrac{5}{18}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 3}\\right)\\left(1 - \\dfrac{5}{5k + 8}\\right) = \\dfrac{3}{5k + 3}\\left(1 - \\dfrac{5}{5k + 8}\\right)$.",
        "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $5(k + 1) + 3 = 5k + 8$."
      },
      {
        "step": "$1 - \\dfrac{5}{5k + 8} = \\dfrac{5k + 3}{5k + 8}$",
        "reason": "Single fraction: $1$ is written as $\\dfrac{5k + 8}{5k + 8}$."
      },
      {
        "step": "$\\dfrac{3}{5k + 3} \\cdot \\dfrac{5k + 3}{5k + 8} = \\dfrac{3}{5k + 8}$",
        "reason": "Cancelling a common factor: $5k + 3$ is positive, so it is not $0$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{5}{8}\\right)\\left(1 - \\dfrac{5}{13}\\right)\\left(1 - \\dfrac{5}{18}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 3}\\right)\\left(1 - \\dfrac{5}{5k + 8}\\right) = \\dfrac{3}{5(k + 1) + 3}$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 7, with $5(k + 1) + 3 = 5k + 8$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\left(1 - \\dfrac{5}{8}\\right)\\left(1 - \\dfrac{5}{13}\\right)\\left(1 - \\dfrac{5}{18}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 3}\\right) = \\dfrac{3}{5n + 3}$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
      }
    ]
  },
  {
    "id": "t211-k3-p01",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $6^n > 8n^2$ for every whole number $n \\ge 2$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $6^n > 8n^2$ for every whole number $n \\ge 2$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $6^n > 8n^2$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 2$ the left side is $6^2 = 36$ and the right side is $8 \\cdot 2^2 = 32$, and $36 > 32$.",
        "reason": "Base case: the statement holds for $n = 2$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $6^k > 8k^2$ for a whole number $k \\ge 2$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $6^{k + 1} > 48k^2$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $6$, and $6 \\cdot 6^k = 6^{k + 1}$ by the product law."
      },
      {
        "step": "$48k^2 = 8(k + 1)^2 + 8(5k^2 - 2k - 1)$",
        "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $48k^2$."
      },
      {
        "step": "The number $5k^2 - 2k - 1$ is at least $15$, which is positive.",
        "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 2$ and $5k - 2 \\ge 8$ give $k(5k - 2) \\ge 16$, and $5k^2 - 2k - 1 = k(5k - 2) - 1$."
      },
      {
        "step": "So $48k^2 > 8(k + 1)^2$.",
        "reason": "Adding the same number: $8(k + 1)^2$ is added to both sides of $8(5k^2 - 2k - 1) > 0$, which holds by line 7 since $8$ is positive, and the left side is then $48k^2$ by line 6."
      },
      {
        "step": "So $6^{k + 1} > 8(k + 1)^2$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $6^n > 8n^2$ for every whole number $n \\ge 2$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p02",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $5^n > 13n^2$ for every whole number $n \\ge 3$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $5^n > 13n^2$ for every whole number $n \\ge 3$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $5^n > 13n^2$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 3$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 3$ the left side is $5^3 = 125$ and the right side is $13 \\cdot 3^2 = 117$, and $125 > 117$.",
        "reason": "Base case: the statement holds for $n = 3$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $5^k > 13k^2$ for a whole number $k \\ge 3$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $5^{k + 1} > 65k^2$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $5$, and $5 \\cdot 5^k = 5^{k + 1}$ by the product law."
      },
      {
        "step": "$65k^2 = 13(k + 1)^2 + 13(4k^2 - 2k - 1)$",
        "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $65k^2$."
      },
      {
        "step": "The number $4k^2 - 2k - 1$ is at least $29$, which is positive.",
        "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 3$ and $4k - 2 \\ge 10$ give $k(4k - 2) \\ge 30$, and $4k^2 - 2k - 1 = k(4k - 2) - 1$."
      },
      {
        "step": "So $65k^2 > 13(k + 1)^2$.",
        "reason": "Adding the same number: $13(k + 1)^2$ is added to both sides of $13(4k^2 - 2k - 1) > 0$, which holds by line 7 since $13$ is positive, and the left side is then $65k^2$ by line 6."
      },
      {
        "step": "So $5^{k + 1} > 13(k + 1)^2$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $5^n > 13n^2$ for every whole number $n \\ge 3$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p03",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{3n} > \\dfrac{9}{10}$ for every whole number $n \\ge 2$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{3n} > \\dfrac{9}{10}$ for every whole number $n \\ge 2$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{3n} > \\dfrac{9}{10}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 2$ the left side is $\\dfrac{1}{3} + \\dfrac{1}{4} + \\dfrac{1}{5} + \\dfrac{1}{6} = \\dfrac{19}{20}$, the right side is $\\dfrac{9}{10} = \\dfrac{18}{20}$, and $\\dfrac{19}{20} > \\dfrac{18}{20}$.",
        "reason": "Base case: the statement holds for $n = 2$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\dfrac{1}{k + 1} + \\dfrac{1}{k + 2} + \\dots + \\dfrac{1}{3k} > \\dfrac{9}{10}$ for a whole number $k \\ge 2$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "The sum for $n = k + 1$ is $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{3k + 3}$, which is the sum of line 4 without its first term, $\\dfrac{1}{k + 1}$, and with the three new terms $\\dfrac{1}{3k + 1}$, $\\dfrac{1}{3k + 2}$ and $\\dfrac{1}{3k + 3}$.",
        "reason": "Substituting a value: $k + 1$ goes into each place of $n$, so the first denominator is $(k + 1) + 1 = k + 2$ and the last is $3(k + 1) = 3k + 3$."
      },
      {
        "step": "Each of the three new terms is at least $\\dfrac{1}{3k + 3}$, and the first is greater: $\\dfrac{1}{3k + 1} > \\dfrac{1}{3k + 3}$.",
        "reason": "Reciprocals of numbers of the same sign reverse the order: the denominators of the new terms are positive and none is greater than $3k + 3$, and $3k + 1 < 3k + 3$."
      },
      {
        "step": "So $\\dfrac{1}{3k + 1} + \\dfrac{1}{3k + 2} + \\dfrac{1}{3k + 3} > \\dfrac{3}{3k + 3}$.",
        "reason": "Adding two inequalities: the inequalities of line 6, one for each new term, are added, and the right side is three times $\\dfrac{1}{3k + 3}$."
      },
      {
        "step": "The right side is $\\dfrac{3}{3k + 3} = \\dfrac{1}{k + 1}$, the term that is left out.",
        "reason": "Cancelling a common factor: $3k + 3 = 3(k + 1)$, and $3$ is cancelled above and below."
      },
      {
        "step": "So the sum for $n = k + 1$ is greater than the sum for $n = k$.",
        "reason": "Adding the same number: the sum of line 4 without its first term is added to both sides of line 7, with its right side as line 8 writes it; by line 5 the left side is then the sum for $n = k + 1$ and the right side the sum for $n = k$."
      },
      {
        "step": "So $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{3k + 3} > \\dfrac{9}{10}$.",
        "reason": "Transitivity, from arithmetic: line 9 and then line 4."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in each place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{3n} > \\dfrac{9}{10}$ for every whole number $n \\ge 2$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 11."
      }
    ]
  },
  {
    "id": "t211-k3-p04",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $3^n > 2n^2$ for every whole number $n \\ge 2$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $3^n > 2n^2$ for every whole number $n \\ge 2$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $3^n > 2n^2$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 2$ the left side is $3^2 = 9$ and the right side is $2 \\cdot 2^2 = 8$, and $9 > 8$.",
        "reason": "Base case: the statement holds for $n = 2$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $3^k > 2k^2$ for a whole number $k \\ge 2$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $3^{k + 1} > 6k^2$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $3$, and $3 \\cdot 3^k = 3^{k + 1}$ by the product law."
      },
      {
        "step": "$6k^2 = 2(k + 1)^2 + 2(2k^2 - 2k - 1)$",
        "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $6k^2$."
      },
      {
        "step": "The number $2k^2 - 2k - 1$ is at least $3$, which is positive.",
        "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 2$ and $2k - 2 \\ge 2$ give $k(2k - 2) \\ge 4$, and $2k^2 - 2k - 1 = k(2k - 2) - 1$."
      },
      {
        "step": "So $6k^2 > 2(k + 1)^2$.",
        "reason": "Adding the same number: $2(k + 1)^2$ is added to both sides of $2(2k^2 - 2k - 1) > 0$, which holds by line 7 since $2$ is positive, and the left side is then $6k^2$ by line 6."
      },
      {
        "step": "So $3^{k + 1} > 2(k + 1)^2$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $3^n > 2n^2$ for every whole number $n \\ge 2$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p05",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $3^n > 9n + 674$ for every whole number $n \\ge 6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $3^n > 9n + 674$ for every whole number $n \\ge 6$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $3^n > 9n + 674$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 6$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 6$ the left side is $3^6 = 729$ and the right side is $9 \\cdot 6 + 674 = 728$, and $729 > 728$.",
        "reason": "Base case: the statement holds for $n = 6$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $3^k > 9k + 674$ for a whole number $k \\ge 6$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $3^{k + 1} > 3(9k + 674)$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $3$, and $3 \\cdot 3^k = 3^{k + 1}$ by the product law."
      },
      {
        "step": "$3(9k + 674) = (9k + 683) + (18k + 1339)$",
        "reason": "Multiplying out and collecting like terms: both sides are $27k + 2022$."
      },
      {
        "step": "The number $18k + 1339$ is at least $1447$, which is positive.",
        "reason": "Multiplying by a positive number and adding the same number: $k \\ge 6$ gives $18k \\ge 108$, and adding $1339$ to both sides gives $18k + 1339 \\ge 1447$."
      },
      {
        "step": "So $3(9k + 674) > 9k + 683$.",
        "reason": "Adding the same number: $9k + 683$ is added to both sides of $18k + 1339 > 0$, which holds by line 7, and the left side is then $3(9k + 674)$ by line 6."
      },
      {
        "step": "So $3^{k + 1} > 9k + 683$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, since $9(k + 1) + 674 = 9k + 683$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $3^n > 9n + 674$ for every whole number $n \\ge 6$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p06",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that ${n!} > 11 \\cdot 2^n$ for every whole number $n \\ge 6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that ${n!} > 11 \\cdot 2^n$ for every whole number $n \\ge 6$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be ${n!} > 11 \\cdot 2^n$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 6$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 6$ the left side is $6! = 720$ and the right side is $11 \\cdot 2^6 = 704$, and $720 > 704$.",
        "reason": "Base case: the statement holds for $n = 6$, the least $n$ of the claim."
      },
      {
        "step": "Assume that ${k!} > 11 \\cdot 2^k$ for a whole number $k \\ge 6$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $(k + 1) \\cdot {k!} > (k + 1) \\cdot 11 \\cdot 2^k$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 1$."
      },
      {
        "step": "Also $(k + 1) \\cdot 11 \\cdot 2^k > 2 \\cdot 11 \\cdot 2^k$.",
        "reason": "Multiplying by a positive number: $k \\ge 6$ gives $k + 1 > 2$, and both sides are multiplied by $11 \\cdot 2^k$."
      },
      {
        "step": "Here $(k + 1) \\cdot {k!} = (k + 1)!$ and $2 \\cdot 11 \\cdot 2^k = 11 \\cdot 2^{k + 1}$.",
        "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $2 \\cdot 2^k = 2^{k + 1}$."
      },
      {
        "step": "So $(k + 1)! > 11 \\cdot 2^{k + 1}$.",
        "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So ${n!} > 11 \\cdot 2^n$ for every whole number $n \\ge 6$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k3-p07",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $2^n > 6n + 85$ for every whole number $n \\ge 7$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $2^n > 6n + 85$ for every whole number $n \\ge 7$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $2^n > 6n + 85$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 7$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 7$ the left side is $2^7 = 128$ and the right side is $6 \\cdot 7 + 85 = 127$, and $128 > 127$.",
        "reason": "Base case: the statement holds for $n = 7$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $2^k > 6k + 85$ for a whole number $k \\ge 7$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $2^{k + 1} > 2(6k + 85)$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $2$, and $2 \\cdot 2^k = 2^{k + 1}$ by the product law."
      },
      {
        "step": "$2(6k + 85) = (6k + 91) + (6k + 79)$",
        "reason": "Multiplying out and collecting like terms: both sides are $12k + 170$."
      },
      {
        "step": "The number $6k + 79$ is at least $121$, which is positive.",
        "reason": "Multiplying by a positive number and adding the same number: $k \\ge 7$ gives $6k \\ge 42$, and adding $79$ to both sides gives $6k + 79 \\ge 121$."
      },
      {
        "step": "So $2(6k + 85) > 6k + 91$.",
        "reason": "Adding the same number: $6k + 91$ is added to both sides of $6k + 79 > 0$, which holds by line 7, and the left side is then $2(6k + 85)$ by line 6."
      },
      {
        "step": "So $2^{k + 1} > 6k + 91$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, since $6(k + 1) + 85 = 6k + 91$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $2^n > 6n + 85$ for every whole number $n \\ge 7$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p08",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $(n + 3)! > 8 \\cdot 5^n$ for every whole number $n \\ge 4$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $(n + 3)! > 8 \\cdot 5^n$ for every whole number $n \\ge 4$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $(n + 3)! > 8 \\cdot 5^n$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 4$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 4$ the left side is $7! = 5040$ and the right side is $8 \\cdot 5^4 = 5000$, and $5040 > 5000$.",
        "reason": "Base case: the statement holds for $n = 4$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $(k + 3)! > 8 \\cdot 5^k$ for a whole number $k \\ge 4$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $(k + 4) \\cdot (k + 3)! > (k + 4) \\cdot 8 \\cdot 5^k$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 4$."
      },
      {
        "step": "Also $(k + 4) \\cdot 8 \\cdot 5^k > 5 \\cdot 8 \\cdot 5^k$.",
        "reason": "Multiplying by a positive number: $k \\ge 4$ gives $k + 4 > 5$, and both sides are multiplied by $8 \\cdot 5^k$."
      },
      {
        "step": "Here $(k + 4) \\cdot (k + 3)! = (k + 4)!$ and $5 \\cdot 8 \\cdot 5^k = 8 \\cdot 5^{k + 1}$.",
        "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $5 \\cdot 5^k = 5^{k + 1}$."
      },
      {
        "step": "So $(k + 4)! > 8 \\cdot 5^{k + 1}$.",
        "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
      },
      {
        "step": "This is the statement for $n = k + 1$, since $(k + 1) + 3 = k + 4$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $(n + 3)! > 8 \\cdot 5^n$ for every whole number $n \\ge 4$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k3-p09",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $5^n > 3n + 18$ for every whole number $n \\ge 2$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $5^n > 3n + 18$ for every whole number $n \\ge 2$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $5^n > 3n + 18$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 2$ the left side is $5^2 = 25$ and the right side is $3 \\cdot 2 + 18 = 24$, and $25 > 24$.",
        "reason": "Base case: the statement holds for $n = 2$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $5^k > 3k + 18$ for a whole number $k \\ge 2$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $5^{k + 1} > 5(3k + 18)$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $5$, and $5 \\cdot 5^k = 5^{k + 1}$ by the product law."
      },
      {
        "step": "$5(3k + 18) = (3k + 21) + (12k + 69)$",
        "reason": "Multiplying out and collecting like terms: both sides are $15k + 90$."
      },
      {
        "step": "The number $12k + 69$ is at least $93$, which is positive.",
        "reason": "Multiplying by a positive number and adding the same number: $k \\ge 2$ gives $12k \\ge 24$, and adding $69$ to both sides gives $12k + 69 \\ge 93$."
      },
      {
        "step": "So $5(3k + 18) > 3k + 21$.",
        "reason": "Adding the same number: $3k + 21$ is added to both sides of $12k + 69 > 0$, which holds by line 7, and the left side is then $5(3k + 18)$ by line 6."
      },
      {
        "step": "So $5^{k + 1} > 3k + 21$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, since $3(k + 1) + 18 = 3k + 21$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $5^n > 3n + 18$ for every whole number $n \\ge 2$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p10",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $(n + 2)! > 2 \\cdot 3^n$ for every whole number $n \\ge 2$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $(n + 2)! > 2 \\cdot 3^n$ for every whole number $n \\ge 2$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $(n + 2)! > 2 \\cdot 3^n$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 2$ the left side is $4! = 24$ and the right side is $2 \\cdot 3^2 = 18$, and $24 > 18$.",
        "reason": "Base case: the statement holds for $n = 2$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $(k + 2)! > 2 \\cdot 3^k$ for a whole number $k \\ge 2$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $(k + 3) \\cdot (k + 2)! > (k + 3) \\cdot 2 \\cdot 3^k$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 3$."
      },
      {
        "step": "Also $(k + 3) \\cdot 2 \\cdot 3^k > 3 \\cdot 2 \\cdot 3^k$.",
        "reason": "Multiplying by a positive number: $k \\ge 2$ gives $k + 3 > 3$, and both sides are multiplied by $2 \\cdot 3^k$."
      },
      {
        "step": "Here $(k + 3) \\cdot (k + 2)! = (k + 3)!$ and $3 \\cdot 2 \\cdot 3^k = 2 \\cdot 3^{k + 1}$.",
        "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $3 \\cdot 3^k = 3^{k + 1}$."
      },
      {
        "step": "So $(k + 3)! > 2 \\cdot 3^{k + 1}$.",
        "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
      },
      {
        "step": "This is the statement for $n = k + 1$, since $(k + 1) + 2 = k + 3$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $(n + 2)! > 2 \\cdot 3^n$ for every whole number $n \\ge 2$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k3-p11",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{9}{14}$ for every whole number $n \\ge 5$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{9}{14}$ for every whole number $n \\ge 5$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{9}{14}$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 5$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 5$ the left side is $\\dfrac{1}{6} + \\dfrac{1}{7} + \\dfrac{1}{8} + \\dfrac{1}{9} + \\dfrac{1}{10} = \\dfrac{1627}{2520}$, the right side is $\\dfrac{9}{14} = \\dfrac{1620}{2520}$, and $\\dfrac{1627}{2520} > \\dfrac{1620}{2520}$.",
        "reason": "Base case: the statement holds for $n = 5$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\dfrac{1}{k + 1} + \\dfrac{1}{k + 2} + \\dots + \\dfrac{1}{2k} > \\dfrac{9}{14}$ for a whole number $k \\ge 5$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "The sum for $n = k + 1$ is $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{2k + 2}$, which is the sum of line 4 without its first term, $\\dfrac{1}{k + 1}$, and with the two new terms $\\dfrac{1}{2k + 1}$ and $\\dfrac{1}{2k + 2}$.",
        "reason": "Substituting a value: $k + 1$ goes into each place of $n$, so the first denominator is $(k + 1) + 1 = k + 2$ and the last is $2(k + 1) = 2k + 2$."
      },
      {
        "step": "Each of the two new terms is at least $\\dfrac{1}{2k + 2}$, and the first is greater: $\\dfrac{1}{2k + 1} > \\dfrac{1}{2k + 2}$.",
        "reason": "Reciprocals of numbers of the same sign reverse the order: the denominators of the new terms are positive and none is greater than $2k + 2$, and $2k + 1 < 2k + 2$."
      },
      {
        "step": "So $\\dfrac{1}{2k + 1} + \\dfrac{1}{2k + 2} > \\dfrac{2}{2k + 2}$.",
        "reason": "Adding two inequalities: the inequalities of line 6, one for each new term, are added, and the right side is two times $\\dfrac{1}{2k + 2}$."
      },
      {
        "step": "The right side is $\\dfrac{2}{2k + 2} = \\dfrac{1}{k + 1}$, the term that is left out.",
        "reason": "Cancelling a common factor: $2k + 2 = 2(k + 1)$, and $2$ is cancelled above and below."
      },
      {
        "step": "So the sum for $n = k + 1$ is greater than the sum for $n = k$.",
        "reason": "Adding the same number: the sum of line 4 without its first term is added to both sides of line 7, with its right side as line 8 writes it; by line 5 the left side is then the sum for $n = k + 1$ and the right side the sum for $n = k$."
      },
      {
        "step": "So $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{2k + 2} > \\dfrac{9}{14}$.",
        "reason": "Transitivity, from arithmetic: line 9 and then line 4."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in each place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{9}{14}$ for every whole number $n \\ge 5$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 11."
      }
    ]
  },
  {
    "id": "t211-k3-p12",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $4^n > 7n^2$ for every whole number $n \\ge 3$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $4^n > 7n^2$ for every whole number $n \\ge 3$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $4^n > 7n^2$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 3$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 3$ the left side is $4^3 = 64$ and the right side is $7 \\cdot 3^2 = 63$, and $64 > 63$.",
        "reason": "Base case: the statement holds for $n = 3$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $4^k > 7k^2$ for a whole number $k \\ge 3$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $4^{k + 1} > 28k^2$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $4$, and $4 \\cdot 4^k = 4^{k + 1}$ by the product law."
      },
      {
        "step": "$28k^2 = 7(k + 1)^2 + 7(3k^2 - 2k - 1)$",
        "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $28k^2$."
      },
      {
        "step": "The number $3k^2 - 2k - 1$ is at least $20$, which is positive.",
        "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 3$ and $3k - 2 \\ge 7$ give $k(3k - 2) \\ge 21$, and $3k^2 - 2k - 1 = k(3k - 2) - 1$."
      },
      {
        "step": "So $28k^2 > 7(k + 1)^2$.",
        "reason": "Adding the same number: $7(k + 1)^2$ is added to both sides of $7(3k^2 - 2k - 1) > 0$, which holds by line 7 since $7$ is positive, and the left side is then $28k^2$ by line 6."
      },
      {
        "step": "So $4^{k + 1} > 7(k + 1)^2$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $4^n > 7n^2$ for every whole number $n \\ge 3$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p13",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that ${n!} > 39 \\cdot 2^n$ for every whole number $n \\ge 7$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that ${n!} > 39 \\cdot 2^n$ for every whole number $n \\ge 7$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be ${n!} > 39 \\cdot 2^n$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 7$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 7$ the left side is $7! = 5040$ and the right side is $39 \\cdot 2^7 = 4992$, and $5040 > 4992$.",
        "reason": "Base case: the statement holds for $n = 7$, the least $n$ of the claim."
      },
      {
        "step": "Assume that ${k!} > 39 \\cdot 2^k$ for a whole number $k \\ge 7$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $(k + 1) \\cdot {k!} > (k + 1) \\cdot 39 \\cdot 2^k$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 1$."
      },
      {
        "step": "Also $(k + 1) \\cdot 39 \\cdot 2^k > 2 \\cdot 39 \\cdot 2^k$.",
        "reason": "Multiplying by a positive number: $k \\ge 7$ gives $k + 1 > 2$, and both sides are multiplied by $39 \\cdot 2^k$."
      },
      {
        "step": "Here $(k + 1) \\cdot {k!} = (k + 1)!$ and $2 \\cdot 39 \\cdot 2^k = 39 \\cdot 2^{k + 1}$.",
        "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $2 \\cdot 2^k = 2^{k + 1}$."
      },
      {
        "step": "So $(k + 1)! > 39 \\cdot 2^{k + 1}$.",
        "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So ${n!} > 39 \\cdot 2^n$ for every whole number $n \\ge 7$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k3-p14",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $5^n > 2n + 118$ for every whole number $n \\ge 3$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $5^n > 2n + 118$ for every whole number $n \\ge 3$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $5^n > 2n + 118$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 3$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 3$ the left side is $5^3 = 125$ and the right side is $2 \\cdot 3 + 118 = 124$, and $125 > 124$.",
        "reason": "Base case: the statement holds for $n = 3$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $5^k > 2k + 118$ for a whole number $k \\ge 3$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $5^{k + 1} > 5(2k + 118)$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $5$, and $5 \\cdot 5^k = 5^{k + 1}$ by the product law."
      },
      {
        "step": "$5(2k + 118) = (2k + 120) + (8k + 470)$",
        "reason": "Multiplying out and collecting like terms: both sides are $10k + 590$."
      },
      {
        "step": "The number $8k + 470$ is at least $494$, which is positive.",
        "reason": "Multiplying by a positive number and adding the same number: $k \\ge 3$ gives $8k \\ge 24$, and adding $470$ to both sides gives $8k + 470 \\ge 494$."
      },
      {
        "step": "So $5(2k + 118) > 2k + 120$.",
        "reason": "Adding the same number: $2k + 120$ is added to both sides of $8k + 470 > 0$, which holds by line 7, and the left side is then $5(2k + 118)$ by line 6."
      },
      {
        "step": "So $5^{k + 1} > 2k + 120$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, since $2(k + 1) + 118 = 2k + 120$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $5^n > 2n + 118$ for every whole number $n \\ge 3$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p15",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{4n} > 1$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{4n} > 1$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{4n} > 1$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the left side is $\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{13}{12}$, the right side is $1 = \\dfrac{12}{12}$, and $\\dfrac{13}{12} > \\dfrac{12}{12}$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $\\dfrac{1}{k + 1} + \\dfrac{1}{k + 2} + \\dots + \\dfrac{1}{4k} > 1$ for a whole number $k \\ge 1$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "The sum for $n = k + 1$ is $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{4k + 4}$, which is the sum of line 4 without its first term, $\\dfrac{1}{k + 1}$, and with the four new terms $\\dfrac{1}{4k + 1}$, $\\dfrac{1}{4k + 2}$, $\\dfrac{1}{4k + 3}$ and $\\dfrac{1}{4k + 4}$.",
        "reason": "Substituting a value: $k + 1$ goes into each place of $n$, so the first denominator is $(k + 1) + 1 = k + 2$ and the last is $4(k + 1) = 4k + 4$."
      },
      {
        "step": "Each of the four new terms is at least $\\dfrac{1}{4k + 4}$, and the first is greater: $\\dfrac{1}{4k + 1} > \\dfrac{1}{4k + 4}$.",
        "reason": "Reciprocals of numbers of the same sign reverse the order: the denominators of the new terms are positive and none is greater than $4k + 4$, and $4k + 1 < 4k + 4$."
      },
      {
        "step": "So $\\dfrac{1}{4k + 1} + \\dfrac{1}{4k + 2} + \\dfrac{1}{4k + 3} + \\dfrac{1}{4k + 4} > \\dfrac{4}{4k + 4}$.",
        "reason": "Adding two inequalities: the inequalities of line 6, one for each new term, are added, and the right side is four times $\\dfrac{1}{4k + 4}$."
      },
      {
        "step": "The right side is $\\dfrac{4}{4k + 4} = \\dfrac{1}{k + 1}$, the term that is left out.",
        "reason": "Cancelling a common factor: $4k + 4 = 4(k + 1)$, and $4$ is cancelled above and below."
      },
      {
        "step": "So the sum for $n = k + 1$ is greater than the sum for $n = k$.",
        "reason": "Adding the same number: the sum of line 4 without its first term is added to both sides of line 7, with its right side as line 8 writes it; by line 5 the left side is then the sum for $n = k + 1$ and the right side the sum for $n = k$."
      },
      {
        "step": "So $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{4k + 4} > 1$.",
        "reason": "Transitivity, from arithmetic: line 9 and then line 4."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in each place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{4n} > 1$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 11."
      }
    ]
  },
  {
    "id": "t211-k3-p16",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $3^n > 2n + 232$ for every whole number $n \\ge 5$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $3^n > 2n + 232$ for every whole number $n \\ge 5$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $3^n > 2n + 232$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 5$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 5$ the left side is $3^5 = 243$ and the right side is $2 \\cdot 5 + 232 = 242$, and $243 > 242$.",
        "reason": "Base case: the statement holds for $n = 5$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $3^k > 2k + 232$ for a whole number $k \\ge 5$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $3^{k + 1} > 3(2k + 232)$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $3$, and $3 \\cdot 3^k = 3^{k + 1}$ by the product law."
      },
      {
        "step": "$3(2k + 232) = (2k + 234) + (4k + 462)$",
        "reason": "Multiplying out and collecting like terms: both sides are $6k + 696$."
      },
      {
        "step": "The number $4k + 462$ is at least $482$, which is positive.",
        "reason": "Multiplying by a positive number and adding the same number: $k \\ge 5$ gives $4k \\ge 20$, and adding $462$ to both sides gives $4k + 462 \\ge 482$."
      },
      {
        "step": "So $3(2k + 232) > 2k + 234$.",
        "reason": "Adding the same number: $2k + 234$ is added to both sides of $4k + 462 > 0$, which holds by line 7, and the left side is then $3(2k + 232)$ by line 6."
      },
      {
        "step": "So $3^{k + 1} > 2k + 234$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, since $2(k + 1) + 232 = 2k + 234$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $3^n > 2n + 232$ for every whole number $n \\ge 5$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k3-p17",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $(n + 2)! > 8 \\cdot 3^n$ for every whole number $n \\ge 4$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $(n + 2)! > 8 \\cdot 3^n$ for every whole number $n \\ge 4$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $(n + 2)! > 8 \\cdot 3^n$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 4$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 4$ the left side is $6! = 720$ and the right side is $8 \\cdot 3^4 = 648$, and $720 > 648$.",
        "reason": "Base case: the statement holds for $n = 4$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $(k + 2)! > 8 \\cdot 3^k$ for a whole number $k \\ge 4$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $(k + 3) \\cdot (k + 2)! > (k + 3) \\cdot 8 \\cdot 3^k$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 3$."
      },
      {
        "step": "Also $(k + 3) \\cdot 8 \\cdot 3^k > 3 \\cdot 8 \\cdot 3^k$.",
        "reason": "Multiplying by a positive number: $k \\ge 4$ gives $k + 3 > 3$, and both sides are multiplied by $8 \\cdot 3^k$."
      },
      {
        "step": "Here $(k + 3) \\cdot (k + 2)! = (k + 3)!$ and $3 \\cdot 8 \\cdot 3^k = 8 \\cdot 3^{k + 1}$.",
        "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $3 \\cdot 3^k = 3^{k + 1}$."
      },
      {
        "step": "So $(k + 3)! > 8 \\cdot 3^{k + 1}$.",
        "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
      },
      {
        "step": "This is the statement for $n = k + 1$, since $(k + 1) + 2 = k + 3$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $(n + 2)! > 8 \\cdot 3^n$ for every whole number $n \\ge 4$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k3-p18",
    "topic": "induction",
    "kind": "t211-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $4^n > 3n^2$ for every whole number $n \\ge 2$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $4^n > 3n^2$ for every whole number $n \\ge 2$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be $4^n > 3n^2$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 2$ the left side is $4^2 = 16$ and the right side is $3 \\cdot 2^2 = 12$, and $16 > 12$.",
        "reason": "Base case: the statement holds for $n = 2$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $4^k > 3k^2$ for a whole number $k \\ge 2$.",
        "reason": "Inductive assumption: the statement for $n = k$."
      },
      {
        "step": "Then $4^{k + 1} > 12k^2$.",
        "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $4$, and $4 \\cdot 4^k = 4^{k + 1}$ by the product law."
      },
      {
        "step": "$12k^2 = 3(k + 1)^2 + 3(3k^2 - 2k - 1)$",
        "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $12k^2$."
      },
      {
        "step": "The number $3k^2 - 2k - 1$ is at least $7$, which is positive.",
        "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 2$ and $3k - 2 \\ge 4$ give $k(3k - 2) \\ge 8$, and $3k^2 - 2k - 1 = k(3k - 2) - 1$."
      },
      {
        "step": "So $12k^2 > 3(k + 1)^2$.",
        "reason": "Adding the same number: $3(k + 1)^2$ is added to both sides of $3(3k^2 - 2k - 1) > 0$, which holds by line 7 since $3$ is positive, and the left side is then $12k^2$ by line 6."
      },
      {
        "step": "So $4^{k + 1} > 3(k + 1)^2$.",
        "reason": "Transitivity, from arithmetic: line 5 and then line 8."
      },
      {
        "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
        "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $4^n > 3n^2$ for every whole number $n \\ge 2$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
      }
    ]
  },
  {
    "id": "t211-k4-p01",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $5^n + 12n - 1$ is a multiple of $16$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $5^n + 12n - 1$ is a multiple of $16$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $5^n + 12n - 1$ is a multiple of $16$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $5 + 12 - 1 = 16$, which is $16 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $5^k + 12k - 1 = 16m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$5^{k + 1} + 12(k + 1) - 1 = 5 \\cdot 5^k + 12(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $5^{k + 1} = 5 \\cdot 5^k$."
      },
      {
        "step": "$5 \\cdot 5^k + 12(k + 1) - 1 = 5(5^k + 12k - 1) - 48k + 16$",
        "reason": "The distributive law, from arithmetic: $5(5^k + 12k - 1) = 5 \\cdot 5^k + 60k - 5$, and $60k - 5 - 48k + 16 = 12k + 11$, which is $12(k + 1) - 1$."
      },
      {
        "step": "$5(5^k + 12k - 1) - 48k + 16 = 5 \\cdot 16m - 48k + 16$",
        "reason": "Inductive assumption: by line 4, $16m$ stands in the place of $5^k + 12k - 1$."
      },
      {
        "step": "$5 \\cdot 16m - 48k + 16 = 16(5m - 3k + 1)$",
        "reason": "Taking out a common factor: $16$ is a factor of each term."
      },
      {
        "step": "So $5^{k + 1} + 12(k + 1) - 1$ is a multiple of $16$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $16$ times the integer $5m - 3k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $5^n + 12n - 1$ is a multiple of $16$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p02",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $3^n + 2n - 1$ is a multiple of $4$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $3^n + 2n - 1$ is a multiple of $4$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $3^n + 2n - 1$ is a multiple of $4$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $3 + 2 - 1 = 4$, which is $4 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $3^k + 2k - 1 = 4m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$3^{k + 1} + 2(k + 1) - 1 = 3 \\cdot 3^k + 2(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $3^{k + 1} = 3 \\cdot 3^k$."
      },
      {
        "step": "$3 \\cdot 3^k + 2(k + 1) - 1 = 3(3^k + 2k - 1) - 4k + 4$",
        "reason": "The distributive law, from arithmetic: $3(3^k + 2k - 1) = 3 \\cdot 3^k + 6k - 3$, and $6k - 3 - 4k + 4 = 2k + 1$, which is $2(k + 1) - 1$."
      },
      {
        "step": "$3(3^k + 2k - 1) - 4k + 4 = 3 \\cdot 4m - 4k + 4$",
        "reason": "Inductive assumption: by line 4, $4m$ stands in the place of $3^k + 2k - 1$."
      },
      {
        "step": "$3 \\cdot 4m - 4k + 4 = 4(3m - k + 1)$",
        "reason": "Taking out a common factor: $4$ is a factor of each term."
      },
      {
        "step": "So $3^{k + 1} + 2(k + 1) - 1$ is a multiple of $4$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $4$ times the integer $3m - k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $3^n + 2n - 1$ is a multiple of $4$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p03",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $21^n + 5n - 1$ is a multiple of $25$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $21^n + 5n - 1$ is a multiple of $25$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $21^n + 5n - 1$ is a multiple of $25$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $21 + 5 - 1 = 25$, which is $25 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $21^k + 5k - 1 = 25m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$21^{k + 1} + 5(k + 1) - 1 = 21 \\cdot 21^k + 5(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $21^{k + 1} = 21 \\cdot 21^k$."
      },
      {
        "step": "$21 \\cdot 21^k + 5(k + 1) - 1 = 21(21^k + 5k - 1) - 100k + 25$",
        "reason": "The distributive law, from arithmetic: $21(21^k + 5k - 1) = 21 \\cdot 21^k + 105k - 21$, and $105k - 21 - 100k + 25 = 5k + 4$, which is $5(k + 1) - 1$."
      },
      {
        "step": "$21(21^k + 5k - 1) - 100k + 25 = 21 \\cdot 25m - 100k + 25$",
        "reason": "Inductive assumption: by line 4, $25m$ stands in the place of $21^k + 5k - 1$."
      },
      {
        "step": "$21 \\cdot 25m - 100k + 25 = 25(21m - 4k + 1)$",
        "reason": "Taking out a common factor: $25$ is a factor of each term."
      },
      {
        "step": "So $21^{k + 1} + 5(k + 1) - 1$ is a multiple of $25$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $25$ times the integer $21m - 4k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $21^n + 5n - 1$ is a multiple of $25$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p04",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $4^n + 15n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $4^n + 15n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $4^n + 15n - 1$ is a multiple of $9$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $4 + 15 - 1 = 18$, which is $9 \\cdot 2$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $4^k + 15k - 1 = 9m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$4^{k + 1} + 15(k + 1) - 1 = 4 \\cdot 4^k + 15(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $4^{k + 1} = 4 \\cdot 4^k$."
      },
      {
        "step": "$4 \\cdot 4^k + 15(k + 1) - 1 = 4(4^k + 15k - 1) - 45k + 18$",
        "reason": "The distributive law, from arithmetic: $4(4^k + 15k - 1) = 4 \\cdot 4^k + 60k - 4$, and $60k - 4 - 45k + 18 = 15k + 14$, which is $15(k + 1) - 1$."
      },
      {
        "step": "$4(4^k + 15k - 1) - 45k + 18 = 4 \\cdot 9m - 45k + 18$",
        "reason": "Inductive assumption: by line 4, $9m$ stands in the place of $4^k + 15k - 1$."
      },
      {
        "step": "$4 \\cdot 9m - 45k + 18 = 9(4m - 5k + 2)$",
        "reason": "Taking out a common factor: $9$ is a factor of each term."
      },
      {
        "step": "So $4^{k + 1} + 15(k + 1) - 1$ is a multiple of $9$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $9$ times the integer $4m - 5k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $4^n + 15n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p05",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $15^n + 14n - 1$ is a multiple of $28$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $15^n + 14n - 1$ is a multiple of $28$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $15^n + 14n - 1$ is a multiple of $28$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $15 + 14 - 1 = 28$, which is $28 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $15^k + 14k - 1 = 28m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$15^{k + 1} + 14(k + 1) - 1 = 15 \\cdot 15^k + 14(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $15^{k + 1} = 15 \\cdot 15^k$."
      },
      {
        "step": "$15 \\cdot 15^k + 14(k + 1) - 1 = 15(15^k + 14k - 1) - 196k + 28$",
        "reason": "The distributive law, from arithmetic: $15(15^k + 14k - 1) = 15 \\cdot 15^k + 210k - 15$, and $210k - 15 - 196k + 28 = 14k + 13$, which is $14(k + 1) - 1$."
      },
      {
        "step": "$15(15^k + 14k - 1) - 196k + 28 = 15 \\cdot 28m - 196k + 28$",
        "reason": "Inductive assumption: by line 4, $28m$ stands in the place of $15^k + 14k - 1$."
      },
      {
        "step": "$15 \\cdot 28m - 196k + 28 = 28(15m - 7k + 1)$",
        "reason": "Taking out a common factor: $28$ is a factor of each term."
      },
      {
        "step": "So $15^{k + 1} + 14(k + 1) - 1$ is a multiple of $28$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $28$ times the integer $15m - 7k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $15^n + 14n - 1$ is a multiple of $28$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p06",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $8^n + 42n - 1$ is a multiple of $49$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $8^n + 42n - 1$ is a multiple of $49$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $8^n + 42n - 1$ is a multiple of $49$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $8 + 42 - 1 = 49$, which is $49 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $8^k + 42k - 1 = 49m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$8^{k + 1} + 42(k + 1) - 1 = 8 \\cdot 8^k + 42(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $8^{k + 1} = 8 \\cdot 8^k$."
      },
      {
        "step": "$8 \\cdot 8^k + 42(k + 1) - 1 = 8(8^k + 42k - 1) - 294k + 49$",
        "reason": "The distributive law, from arithmetic: $8(8^k + 42k - 1) = 8 \\cdot 8^k + 336k - 8$, and $336k - 8 - 294k + 49 = 42k + 41$, which is $42(k + 1) - 1$."
      },
      {
        "step": "$8(8^k + 42k - 1) - 294k + 49 = 8 \\cdot 49m - 294k + 49$",
        "reason": "Inductive assumption: by line 4, $49m$ stands in the place of $8^k + 42k - 1$."
      },
      {
        "step": "$8 \\cdot 49m - 294k + 49 = 49(8m - 6k + 1)$",
        "reason": "Taking out a common factor: $49$ is a factor of each term."
      },
      {
        "step": "So $8^{k + 1} + 42(k + 1) - 1$ is a multiple of $49$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $49$ times the integer $8m - 6k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $8^n + 42n - 1$ is a multiple of $49$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p07",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $10^n + 18n - 1$ is a multiple of $27$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $10^n + 18n - 1$ is a multiple of $27$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $10^n + 18n - 1$ is a multiple of $27$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $10 + 18 - 1 = 27$, which is $27 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $10^k + 18k - 1 = 27m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$10^{k + 1} + 18(k + 1) - 1 = 10 \\cdot 10^k + 18(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $10^{k + 1} = 10 \\cdot 10^k$."
      },
      {
        "step": "$10 \\cdot 10^k + 18(k + 1) - 1 = 10(10^k + 18k - 1) - 162k + 27$",
        "reason": "The distributive law, from arithmetic: $10(10^k + 18k - 1) = 10 \\cdot 10^k + 180k - 10$, and $180k - 10 - 162k + 27 = 18k + 17$, which is $18(k + 1) - 1$."
      },
      {
        "step": "$10(10^k + 18k - 1) - 162k + 27 = 10 \\cdot 27m - 162k + 27$",
        "reason": "Inductive assumption: by line 4, $27m$ stands in the place of $10^k + 18k - 1$."
      },
      {
        "step": "$10 \\cdot 27m - 162k + 27 = 27(10m - 6k + 1)$",
        "reason": "Taking out a common factor: $27$ is a factor of each term."
      },
      {
        "step": "So $10^{k + 1} + 18(k + 1) - 1$ is a multiple of $27$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $27$ times the integer $10m - 6k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $10^n + 18n - 1$ is a multiple of $27$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p08",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $7^n + 30n - 1$ is a multiple of $36$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $7^n + 30n - 1$ is a multiple of $36$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $7^n + 30n - 1$ is a multiple of $36$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $7 + 30 - 1 = 36$, which is $36 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $7^k + 30k - 1 = 36m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$7^{k + 1} + 30(k + 1) - 1 = 7 \\cdot 7^k + 30(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $7^{k + 1} = 7 \\cdot 7^k$."
      },
      {
        "step": "$7 \\cdot 7^k + 30(k + 1) - 1 = 7(7^k + 30k - 1) - 180k + 36$",
        "reason": "The distributive law, from arithmetic: $7(7^k + 30k - 1) = 7 \\cdot 7^k + 210k - 7$, and $210k - 7 - 180k + 36 = 30k + 29$, which is $30(k + 1) - 1$."
      },
      {
        "step": "$7(7^k + 30k - 1) - 180k + 36 = 7 \\cdot 36m - 180k + 36$",
        "reason": "Inductive assumption: by line 4, $36m$ stands in the place of $7^k + 30k - 1$."
      },
      {
        "step": "$7 \\cdot 36m - 180k + 36 = 36(7m - 5k + 1)$",
        "reason": "Taking out a common factor: $36$ is a factor of each term."
      },
      {
        "step": "So $7^{k + 1} + 30(k + 1) - 1$ is a multiple of $36$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $36$ times the integer $7m - 5k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $7^n + 30n - 1$ is a multiple of $36$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p09",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $13^n + 4n - 1$ is a multiple of $16$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $13^n + 4n - 1$ is a multiple of $16$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $13^n + 4n - 1$ is a multiple of $16$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $13 + 4 - 1 = 16$, which is $16 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $13^k + 4k - 1 = 16m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$13^{k + 1} + 4(k + 1) - 1 = 13 \\cdot 13^k + 4(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $13^{k + 1} = 13 \\cdot 13^k$."
      },
      {
        "step": "$13 \\cdot 13^k + 4(k + 1) - 1 = 13(13^k + 4k - 1) - 48k + 16$",
        "reason": "The distributive law, from arithmetic: $13(13^k + 4k - 1) = 13 \\cdot 13^k + 52k - 13$, and $52k - 13 - 48k + 16 = 4k + 3$, which is $4(k + 1) - 1$."
      },
      {
        "step": "$13(13^k + 4k - 1) - 48k + 16 = 13 \\cdot 16m - 48k + 16$",
        "reason": "Inductive assumption: by line 4, $16m$ stands in the place of $13^k + 4k - 1$."
      },
      {
        "step": "$13 \\cdot 16m - 48k + 16 = 16(13m - 3k + 1)$",
        "reason": "Taking out a common factor: $16$ is a factor of each term."
      },
      {
        "step": "So $13^{k + 1} + 4(k + 1) - 1$ is a multiple of $16$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $16$ times the integer $13m - 3k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $13^n + 4n - 1$ is a multiple of $16$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p10",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $25^n + 12n - 1$ is a multiple of $36$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $25^n + 12n - 1$ is a multiple of $36$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $25^n + 12n - 1$ is a multiple of $36$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $25 + 12 - 1 = 36$, which is $36 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $25^k + 12k - 1 = 36m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$25^{k + 1} + 12(k + 1) - 1 = 25 \\cdot 25^k + 12(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $25^{k + 1} = 25 \\cdot 25^k$."
      },
      {
        "step": "$25 \\cdot 25^k + 12(k + 1) - 1 = 25(25^k + 12k - 1) - 288k + 36$",
        "reason": "The distributive law, from arithmetic: $25(25^k + 12k - 1) = 25 \\cdot 25^k + 300k - 25$, and $300k - 25 - 288k + 36 = 12k + 11$, which is $12(k + 1) - 1$."
      },
      {
        "step": "$25(25^k + 12k - 1) - 288k + 36 = 25 \\cdot 36m - 288k + 36$",
        "reason": "Inductive assumption: by line 4, $36m$ stands in the place of $25^k + 12k - 1$."
      },
      {
        "step": "$25 \\cdot 36m - 288k + 36 = 36(25m - 8k + 1)$",
        "reason": "Taking out a common factor: $36$ is a factor of each term."
      },
      {
        "step": "So $25^{k + 1} + 12(k + 1) - 1$ is a multiple of $36$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $36$ times the integer $25m - 8k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $25^n + 12n - 1$ is a multiple of $36$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p11",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $11^n + 15n - 1$ is a multiple of $25$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $11^n + 15n - 1$ is a multiple of $25$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $11^n + 15n - 1$ is a multiple of $25$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $11 + 15 - 1 = 25$, which is $25 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $11^k + 15k - 1 = 25m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$11^{k + 1} + 15(k + 1) - 1 = 11 \\cdot 11^k + 15(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $11^{k + 1} = 11 \\cdot 11^k$."
      },
      {
        "step": "$11 \\cdot 11^k + 15(k + 1) - 1 = 11(11^k + 15k - 1) - 150k + 25$",
        "reason": "The distributive law, from arithmetic: $11(11^k + 15k - 1) = 11 \\cdot 11^k + 165k - 11$, and $165k - 11 - 150k + 25 = 15k + 14$, which is $15(k + 1) - 1$."
      },
      {
        "step": "$11(11^k + 15k - 1) - 150k + 25 = 11 \\cdot 25m - 150k + 25$",
        "reason": "Inductive assumption: by line 4, $25m$ stands in the place of $11^k + 15k - 1$."
      },
      {
        "step": "$11 \\cdot 25m - 150k + 25 = 25(11m - 6k + 1)$",
        "reason": "Taking out a common factor: $25$ is a factor of each term."
      },
      {
        "step": "So $11^{k + 1} + 15(k + 1) - 1$ is a multiple of $25$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $25$ times the integer $11m - 6k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $11^n + 15n - 1$ is a multiple of $25$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p12",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $17^n + 16n - 1$ is a multiple of $32$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $17^n + 16n - 1$ is a multiple of $32$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $17^n + 16n - 1$ is a multiple of $32$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $17 + 16 - 1 = 32$, which is $32 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $17^k + 16k - 1 = 32m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$17^{k + 1} + 16(k + 1) - 1 = 17 \\cdot 17^k + 16(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $17^{k + 1} = 17 \\cdot 17^k$."
      },
      {
        "step": "$17 \\cdot 17^k + 16(k + 1) - 1 = 17(17^k + 16k - 1) - 256k + 32$",
        "reason": "The distributive law, from arithmetic: $17(17^k + 16k - 1) = 17 \\cdot 17^k + 272k - 17$, and $272k - 17 - 256k + 32 = 16k + 15$, which is $16(k + 1) - 1$."
      },
      {
        "step": "$17(17^k + 16k - 1) - 256k + 32 = 17 \\cdot 32m - 256k + 32$",
        "reason": "Inductive assumption: by line 4, $32m$ stands in the place of $17^k + 16k - 1$."
      },
      {
        "step": "$17 \\cdot 32m - 256k + 32 = 32(17m - 8k + 1)$",
        "reason": "Taking out a common factor: $32$ is a factor of each term."
      },
      {
        "step": "So $17^{k + 1} + 16(k + 1) - 1$ is a multiple of $32$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $32$ times the integer $17m - 8k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $17^n + 16n - 1$ is a multiple of $32$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p13",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $19^n + 9n - 1$ is a multiple of $27$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $19^n + 9n - 1$ is a multiple of $27$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $19^n + 9n - 1$ is a multiple of $27$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $19 + 9 - 1 = 27$, which is $27 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $19^k + 9k - 1 = 27m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$19^{k + 1} + 9(k + 1) - 1 = 19 \\cdot 19^k + 9(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $19^{k + 1} = 19 \\cdot 19^k$."
      },
      {
        "step": "$19 \\cdot 19^k + 9(k + 1) - 1 = 19(19^k + 9k - 1) - 162k + 27$",
        "reason": "The distributive law, from arithmetic: $19(19^k + 9k - 1) = 19 \\cdot 19^k + 171k - 19$, and $171k - 19 - 162k + 27 = 9k + 8$, which is $9(k + 1) - 1$."
      },
      {
        "step": "$19(19^k + 9k - 1) - 162k + 27 = 19 \\cdot 27m - 162k + 27$",
        "reason": "Inductive assumption: by line 4, $27m$ stands in the place of $19^k + 9k - 1$."
      },
      {
        "step": "$19 \\cdot 27m - 162k + 27 = 27(19m - 6k + 1)$",
        "reason": "Taking out a common factor: $27$ is a factor of each term."
      },
      {
        "step": "So $19^{k + 1} + 9(k + 1) - 1$ is a multiple of $27$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $27$ times the integer $19m - 6k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $19^n + 9n - 1$ is a multiple of $27$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k4-p14",
    "topic": "induction",
    "kind": "t211-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $4^n + 6n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $4^n + 6n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
        "reason": "This is the problem as given."
      },
      {
        "step": "Let the statement for $n$ be: the number $4^n + 6n - 1$ is a multiple of $9$.",
        "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
      },
      {
        "step": "At $n = 1$ the number is $4 + 6 - 1 = 9$, which is $9 \\cdot 1$.",
        "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
      },
      {
        "step": "Assume that $4^k + 6k - 1 = 9m$ for a whole number $k \\ge 1$ and a whole number $m$.",
        "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
      },
      {
        "step": "$4^{k + 1} + 6(k + 1) - 1 = 4 \\cdot 4^k + 6(k + 1) - 1$",
        "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $4^{k + 1} = 4 \\cdot 4^k$."
      },
      {
        "step": "$4 \\cdot 4^k + 6(k + 1) - 1 = 4(4^k + 6k - 1) - 18k + 9$",
        "reason": "The distributive law, from arithmetic: $4(4^k + 6k - 1) = 4 \\cdot 4^k + 24k - 4$, and $24k - 4 - 18k + 9 = 6k + 5$, which is $6(k + 1) - 1$."
      },
      {
        "step": "$4(4^k + 6k - 1) - 18k + 9 = 4 \\cdot 9m - 18k + 9$",
        "reason": "Inductive assumption: by line 4, $9m$ stands in the place of $4^k + 6k - 1$."
      },
      {
        "step": "$4 \\cdot 9m - 18k + 9 = 9(4m - 2k + 1)$",
        "reason": "Taking out a common factor: $9$ is a factor of each term."
      },
      {
        "step": "So $4^{k + 1} + 6(k + 1) - 1$ is a multiple of $9$, the statement for $n = k + 1$.",
        "reason": "Inductive step: by lines 5 to 8 the number is $9$ times the integer $4m - 2k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
      },
      {
        "step": "So $4^n + 6n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
      }
    ]
  },
  {
    "id": "t211-k5-p01",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $1 + 13 + 25 + \\dots + (12n - 11) = n(6n - 5)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $12(k + 1) - 11$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(6k - 5) + 12(k + 1) - 11$",
      "$k(6k - 5) + 12k + 1$",
      "$6k^2 + 5k + 12k + 1$",
      "$6k^2 + 17k + 1$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 6*k^2-5*k+12*k+1",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $1 + 13 + 25 + \\dots + (12n - 11) = n(6n - 5)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $12(k + 1) - 11$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Lines 1 and 2 are right.",
      "Line 3 multiplies out $k(6k - 5)$ of line 2 as $6k^2 + 5k$.",
      "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
      "Line 3 written right is $6k^2 - 5k + 12k + 1$."
    ]
  },
  {
    "id": "t211-k5-p02",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $7 + 25 + 43 + \\dots + (18n - 11) = n(9n - 2)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 11$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(9k - 2) + 18(k + 1) - 11$",
      "$k(9k - 2) + 18k + 7$",
      "$9k^2 + 2k + 18k + 7$",
      "$9k^2 + 20k + 7$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 9*k^2-2*k+18*k+7",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $7 + 25 + 43 + \\dots + (18n - 11) = n(9n - 2)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 11$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Lines 1 and 2 are right.",
      "Line 3 multiplies out $k(9k - 2)$ of line 2 as $9k^2 + 2k$.",
      "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
      "Line 3 written right is $9k^2 - 2k + 18k + 7$."
    ]
  },
  {
    "id": "t211-k5-p03",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $6 + 20 + 34 + \\dots + (14n - 8) = n(7n - 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $14(k + 1) - 8$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(7k - 1) + 14(k + 1) - 8$",
      "$k(7k - 1) + 14k + 22$",
      "$7k^2 - k + 14k + 22$",
      "$7k^2 + 13k + 22$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: k*(7*k-1)+14*k+6",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $6 + 20 + 34 + \\dots + (14n - 8) = n(7n - 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $14(k + 1) - 8$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Line 1 is right.",
      "Line 2 writes $14(k + 1) - 8$ of line 1 as $14k + 22$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $k(7k - 1) + 14k + 6$."
    ]
  },
  {
    "id": "t211-k5-p04",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $13 + 29 + 45 + \\dots + (16n - 3) = n(8n + 5)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $16(k + 1) - 3$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(8k + 5) + 16(k + 1) - 3$",
      "$k(8k + 5) + 16k + 19$",
      "$8k^2 + 5k + 16k + 19$",
      "$8k^2 + 21k + 19$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: k*(8*k+5)+16*k+13",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $13 + 29 + 45 + \\dots + (16n - 3) = n(8n + 5)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $16(k + 1) - 3$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Line 1 is right.",
      "Line 2 writes $16(k + 1) - 3$ of line 1 as $16k + 19$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $k(8k + 5) + 16k + 13$."
    ]
  },
  {
    "id": "t211-k5-p05",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $5 + 23 + 41 + \\dots + (18n - 13) = n(9n - 4)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 13$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(9k - 4) + 18(k + 1) - 13$",
      "$k(9k - 4) + 18k + 5$",
      "$9k^2 - 4k + 18k + 5$",
      "$9k^2 + 22k + 5$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 9*k^2+14*k+5",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $5 + 23 + 41 + \\dots + (18n - 13) = n(9n - 4)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 13$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Lines 1 to 3 are right.",
      "Line 4 collects $-4k$ and $18k$ of line 3 as $22k$.",
      "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
      "Line 4 written right is $9k^2 + 14k + 5$."
    ]
  },
  {
    "id": "t211-k5-p06",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $9 + 25 + 41 + \\dots + (16n - 7) = n(8n + 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $16(k + 1) - 7$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(8k + 1) + 16(k + 1) - 7$",
      "$k(8k + 1) + 16k + 23$",
      "$8k^2 + k + 16k + 23$",
      "$8k^2 + 17k + 23$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: k*(8*k+1)+16*k+9",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $9 + 25 + 41 + \\dots + (16n - 7) = n(8n + 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $16(k + 1) - 7$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Line 1 is right.",
      "Line 2 writes $16(k + 1) - 7$ of line 1 as $16k + 23$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $k(8k + 1) + 16k + 9$."
    ]
  },
  {
    "id": "t211-k5-p07",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $1 + 5 + 9 + \\dots + (4n - 3) = n(2n - 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $4(k + 1) - 3$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(2k - 1) + 4(k + 1) - 3$",
      "$k(2k - 1) + 4k + 1$",
      "$2k^2 + k + 4k + 1$",
      "$2k^2 + 5k + 1$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 2*k^2-k+4*k+1",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $1 + 5 + 9 + \\dots + (4n - 3) = n(2n - 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $4(k + 1) - 3$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Lines 1 and 2 are right.",
      "Line 3 multiplies out $k(2k - 1)$ of line 2 as $2k^2 + k$.",
      "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
      "Line 3 written right is $2k^2 - k + 4k + 1$."
    ]
  },
  {
    "id": "t211-k5-p08",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $9 + 19 + 29 + \\dots + (10n - 1) = n(5n + 4)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $10(k + 1) - 1$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(5k + 4) + 10(k + 1) - 1$",
      "$k(5k + 4) + 10k + 11$",
      "$5k^2 + 4k + 10k + 11$",
      "$5k^2 + 14k + 11$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: k*(5*k+4)+10*k+9",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $9 + 19 + 29 + \\dots + (10n - 1) = n(5n + 4)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $10(k + 1) - 1$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Line 1 is right.",
      "Line 2 writes $10(k + 1) - 1$ of line 1 as $10k + 11$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $k(5k + 4) + 10k + 9$."
    ]
  },
  {
    "id": "t211-k5-p09",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $8 + 26 + 44 + \\dots + (18n - 10) = n(9n - 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 10$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(9k - 1) + 18(k + 1) - 10$",
      "$k(9k - 1) + 18k + 28$",
      "$9k^2 - k + 18k + 28$",
      "$9k^2 + 17k + 28$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: k*(9*k-1)+18*k+8",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $8 + 26 + 44 + \\dots + (18n - 10) = n(9n - 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 10$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Line 1 is right.",
      "Line 2 writes $18(k + 1) - 10$ of line 1 as $18k + 28$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $k(9k - 1) + 18k + 8$."
    ]
  },
  {
    "id": "t211-k5-p10",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $5 + 21 + 37 + \\dots + (16n - 11) = n(8n - 3)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $16(k + 1) - 11$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(8k - 3) + 16(k + 1) - 11$",
      "$k(8k - 3) + 16k + 5$",
      "$8k^2 - 3k + 16k + 5$",
      "$8k^2 + 19k + 5$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 8*k^2+13*k+5",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $5 + 21 + 37 + \\dots + (16n - 11) = n(8n - 3)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $16(k + 1) - 11$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Lines 1 to 3 are right.",
      "Line 4 collects $-3k$ and $16k$ of line 3 as $19k$.",
      "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
      "Line 4 written right is $8k^2 + 13k + 5$."
    ]
  },
  {
    "id": "t211-k5-p11",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $14 + 32 + 50 + \\dots + (18n - 4) = n(9n + 5)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 4$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(9k + 5) + 18(k + 1) - 4$",
      "$k(9k + 5) + 18k + 22$",
      "$9k^2 + 5k + 18k + 22$",
      "$9k^2 + 23k + 22$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: k*(9*k+5)+18*k+14",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $14 + 32 + 50 + \\dots + (18n - 4) = n(9n + 5)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 4$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Line 1 is right.",
      "Line 2 writes $18(k + 1) - 4$ of line 1 as $18k + 22$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $k(9k + 5) + 18k + 14$."
    ]
  },
  {
    "id": "t211-k5-p12",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $17 + 35 + 53 + \\dots + (18n - 1) = n(9n + 8)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 1$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(9k + 8) + 18(k + 1) - 1$",
      "$k(9k + 8) + 18k + 19$",
      "$9k^2 + 8k + 18k + 19$",
      "$9k^2 + 26k + 19$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: k*(9*k+8)+18*k+17",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $17 + 35 + 53 + \\dots + (18n - 1) = n(9n + 8)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 1$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Line 1 is right.",
      "Line 2 writes $18(k + 1) - 1$ of line 1 as $18k + 19$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $k(9k + 8) + 18k + 17$."
    ]
  },
  {
    "id": "t211-k5-p13",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $3 + 17 + 31 + \\dots + (14n - 11) = n(7n - 4)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $14(k + 1) - 11$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(7k - 4) + 14(k + 1) - 11$",
      "$k(7k - 4) + 14k + 3$",
      "$7k^2 + 4k + 14k + 3$",
      "$7k^2 + 18k + 3$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 7*k^2-4*k+14*k+3",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $3 + 17 + 31 + \\dots + (14n - 11) = n(7n - 4)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $14(k + 1) - 11$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Lines 1 and 2 are right.",
      "Line 3 multiplies out $k(7k - 4)$ of line 2 as $7k^2 + 4k$.",
      "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
      "Line 3 written right is $7k^2 - 4k + 14k + 3$."
    ]
  },
  {
    "id": "t211-k5-p14",
    "topic": "induction",
    "kind": "t211-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $2 + 20 + 38 + \\dots + (18n - 16) = n(9n - 7)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 16$, to the right side of the inductive assumption, and each later line should equal the line before it.",
    "given": [
      "$k(9k - 7) + 18(k + 1) - 16$",
      "$k(9k - 7) + 18k + 2$",
      "$9k^2 - 7k + 18k + 2$",
      "$9k^2 + 25k + 2$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 9*k^2+11*k+2",
    "solution": [
      "Find the first wrong line in this working from the inductive step of a proof by induction that $2 + 20 + 38 + \\dots + (18n - 16) = n(9n - 7)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $18(k + 1) - 16$, to the right side of the inductive assumption, and each later line should equal the line before it.",
      "Lines 1 to 3 are right.",
      "Line 4 collects $-7k$ and $18k$ of line 3 as $25k$.",
      "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
      "Line 4 written right is $9k^2 + 11k + 2$."
    ]
  },
  {
    "id": "t211-k6-p01",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $15$ and go up in steps of $16$ is $n$ times $8n + 7$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = k*(8*k+7)",
    "solution": [
      "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $15$ and go up in steps of $16$ is $n$ times $8n + 7$.",
      "In symbols the sentence says $15 + 31 + 47 + \\dots + (16n - 1) = n(8n + 7)$ for every whole number $n \\ge 1$.",
      "The inductive assumption is the statement for $n = k$, which is $15 + 31 + 47 + \\dots + (16k - 1) = k(8k + 7)$.",
      "$y = k(8k + 7)$"
    ]
  },
  {
    "id": "t211-k6-p02",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the numbers $10i - 7$ for $i$ from $1$ to $n$ add up to $n$ times $5n - 2$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "10*1-7 = 1*(5*1-2)",
    "solution": [
      "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the numbers $10i - 7$ for $i$ from $1$ to $n$ add up to $n$ times $5n - 2$.",
      "In symbols the sentence says $3 + 13 + 23 + \\dots + (10n - 7) = n(5n - 2)$ for every whole number $n \\ge 1$.",
      "The base case is the statement for $n = 1$.",
      "$10 \\cdot 1 - 7 = 1 \\cdot (5 \\cdot 1 - 2)$"
    ]
  },
  {
    "id": "t211-k6-p03",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the numbers $2i + 1$ for $i$ from $1$ to $n$ add up to $n$ times $n + 2$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "2*1+1 = 1*(1+2)",
    "solution": [
      "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the numbers $2i + 1$ for $i$ from $1$ to $n$ add up to $n$ times $n + 2$.",
      "In symbols the sentence says $3 + 5 + 7 + \\dots + (2n + 1) = n(n + 2)$ for every whole number $n \\ge 1$.",
      "The base case is the statement for $n = 1$.",
      "$2 \\cdot 1 + 1 = 1 \\cdot (1 + 2)$"
    ]
  },
  {
    "id": "t211-k6-p04",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $22$, from $22$ to $22n$, is $11$ times $n$ times $n + 1$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y+22*(k+1) = 11*(k+1)*(k+2)",
    "solution": [
      "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $22$, from $22$ to $22n$, is $11$ times $n$ times $n + 1$.",
      "In symbols the sentence says $22 + 44 + 66 + \\dots + 22n = 11n(n + 1)$ for every whole number $n \\ge 1$.",
      "The claim of the inductive step is the statement for $n = k + 1$: the sum of the first $k + 1$ numbers is $11(k + 1)((k + 1) + 1)$.",
      "The sum of the first $k + 1$ numbers is $y + 22(k + 1)$.",
      "$y + 22(k + 1) = 11(k + 1)((k + 1) + 1)$"
    ]
  },
  {
    "id": "t211-k6-p05",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the numbers $10i - 8$ for $i$ from $1$ to $n$ add up to $n$ times $5n - 3$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y+10*(k+1)-8 = (k+1)*(5*(k+1)-3)",
    "solution": [
      "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the numbers $10i - 8$ for $i$ from $1$ to $n$ add up to $n$ times $5n - 3$.",
      "In symbols the sentence says $2 + 12 + 22 + \\dots + (10n - 8) = n(5n - 3)$ for every whole number $n \\ge 1$.",
      "The claim of the inductive step is the statement for $n = k + 1$: the sum of the first $k + 1$ numbers is $(k + 1)(5(k + 1) - 3)$.",
      "The sum of the first $k + 1$ numbers is $y + 10(k + 1) - 8$.",
      "$y + 10(k + 1) - 8 = (k + 1)(5(k + 1) - 3)$"
    ]
  },
  {
    "id": "t211-k6-p06",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the numbers $10i - 6$ for $i$ from $1$ to $n$ add up to $n$ times $5n - 1$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = k*(5*k-1)",
    "solution": [
      "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the numbers $10i - 6$ for $i$ from $1$ to $n$ add up to $n$ times $5n - 1$.",
      "In symbols the sentence says $4 + 14 + 24 + \\dots + (10n - 6) = n(5n - 1)$ for every whole number $n \\ge 1$.",
      "The inductive assumption is the statement for $n = k$, which is $4 + 14 + 24 + \\dots + (10k - 6) = k(5k - 1)$.",
      "$y = k(5k - 1)$"
    ]
  },
  {
    "id": "t211-k6-p07",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $30$, from $30$ to $30n$, is $15$ times $n$ times $n + 1$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "30 = 15*1*(1+1)",
    "solution": [
      "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $30$, from $30$ to $30n$, is $15$ times $n$ times $n + 1$.",
      "In symbols the sentence says $30 + 60 + 90 + \\dots + 30n = 15n(n + 1)$ for every whole number $n \\ge 1$.",
      "The base case is the statement for $n = 1$.",
      "$30 = 15 \\cdot 1 \\cdot (1 + 1)$"
    ]
  },
  {
    "id": "t211-k6-p08",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $5$ and go up in steps of $8$ is $n$ times $4n + 1$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = k*(4*k+1)",
    "solution": [
      "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $5$ and go up in steps of $8$ is $n$ times $4n + 1$.",
      "In symbols the sentence says $5 + 13 + 21 + \\dots + (8n - 3) = n(4n + 1)$ for every whole number $n \\ge 1$.",
      "The inductive assumption is the statement for $n = k$, which is $5 + 13 + 21 + \\dots + (8k - 3) = k(4k + 1)$.",
      "$y = k(4k + 1)$"
    ]
  },
  {
    "id": "t211-k6-p09",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $16$, from $16$ to $16n$, is $8$ times $n$ times $n + 1$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 8*k*(k+1)",
    "solution": [
      "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $16$, from $16$ to $16n$, is $8$ times $n$ times $n + 1$.",
      "In symbols the sentence says $16 + 32 + 48 + \\dots + 16n = 8n(n + 1)$ for every whole number $n \\ge 1$.",
      "The inductive assumption is the statement for $n = k$, which is $16 + 32 + 48 + \\dots + 16k = 8k(k + 1)$.",
      "$y = 8k(k + 1)$"
    ]
  },
  {
    "id": "t211-k6-p10",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $3$ and go up in steps of $8$ is $n$ times $4n - 1$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y+3+8*k = (k+1)*(4*(k+1)-1)",
    "solution": [
      "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $3$ and go up in steps of $8$ is $n$ times $4n - 1$.",
      "In symbols the sentence says $3 + 11 + 19 + \\dots + (8n - 5) = n(4n - 1)$ for every whole number $n \\ge 1$.",
      "The claim of the inductive step is the statement for $n = k + 1$: the sum of the first $k + 1$ numbers is $(k + 1)(4(k + 1) - 1)$.",
      "The sum of the first $k + 1$ numbers is $y + 3 + 8k$.",
      "$y + 3 + 8k = (k + 1)(4(k + 1) - 1)$"
    ]
  },
  {
    "id": "t211-k6-p11",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the numbers $14i - 3$ for $i$ from $1$ to $n$ add up to $n$ times $7n + 4$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = k*(7*k+4)",
    "solution": [
      "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the numbers $14i - 3$ for $i$ from $1$ to $n$ add up to $n$ times $7n + 4$.",
      "In symbols the sentence says $11 + 25 + 39 + \\dots + (14n - 3) = n(7n + 4)$ for every whole number $n \\ge 1$.",
      "The inductive assumption is the statement for $n = k$, which is $11 + 25 + 39 + \\dots + (14k - 3) = k(7k + 4)$.",
      "$y = k(7k + 4)$"
    ]
  },
  {
    "id": "t211-k6-p12",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $26$, from $26$ to $26n$, is $13$ times $n$ times $n + 1$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y+26*(k+1) = 13*(k+1)*(k+2)",
    "solution": [
      "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $26$, from $26$ to $26n$, is $13$ times $n$ times $n + 1$.",
      "In symbols the sentence says $26 + 52 + 78 + \\dots + 26n = 13n(n + 1)$ for every whole number $n \\ge 1$.",
      "The claim of the inductive step is the statement for $n = k + 1$: the sum of the first $k + 1$ numbers is $13(k + 1)((k + 1) + 1)$.",
      "The sum of the first $k + 1$ numbers is $y + 26(k + 1)$.",
      "$y + 26(k + 1) = 13(k + 1)((k + 1) + 1)$"
    ]
  },
  {
    "id": "t211-k6-p13",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the powers of $5$ from $5^1$ to $5^n$ add up to a quarter of $5^{n + 1} - 5$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "5^1 = (5^(1+1)-5)/4",
    "solution": [
      "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the powers of $5$ from $5^1$ to $5^n$ add up to a quarter of $5^{n + 1} - 5$.",
      "In symbols the sentence says $5 + 5^2 + 5^3 + \\dots + 5^n = \\dfrac{5^{n + 1} - 5}{4}$ for every whole number $n \\ge 1$.",
      "The base case is the statement for $n = 1$.",
      "$5^1 = \\dfrac{5^{1 + 1} - 5}{4}$"
    ]
  },
  {
    "id": "t211-k6-p14",
    "topic": "induction",
    "kind": "t211-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $19$ and go up in steps of $18$ is $n$ times $9n + 10$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "19 = 1*(9*1+10)",
    "solution": [
      "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $19$ and go up in steps of $18$ is $n$ times $9n + 10$.",
      "In symbols the sentence says $19 + 37 + 55 + \\dots + (18n + 1) = n(9n + 10)$ for every whole number $n \\ge 1$.",
      "The base case is the statement for $n = 1$.",
      "$19 = 1 \\cdot (9 \\cdot 1 + 10)$"
    ]
  }
]
