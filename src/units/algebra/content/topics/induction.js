export default {
  "number": 211,
  "title": "Proof by induction",
  "section": 18,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "348-357, 600-605"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the number $c$ for which $8 + 22 + 36 + \\dots + (14n - 6) = n(7n + c)$ for every whole number $n \\ge 1$.",
    "form": "Answer as an integer.",
    "answer": "1",
    "solution": [
      "Find the number $c$ for which $8 + 22 + 36 + \\dots + (14n - 6) = n(7n + c)$ for every whole number $n \\ge 1$.",
      "Let the statement for $n$ be $8 + 22 + 36 + \\dots + (14n - 6) = n(7n + c)$.",
      "At $n = 1$ the left side is $8$ and the right side is $1 \\cdot (7 \\cdot 1 + c) = 7 + c$, so $c = 1$.",
      "Assume that $8 + 22 + 36 + \\dots + (14k - 6) = k(7k + 1)$ for a whole number $k \\ge 1$.",
      "Then $8 + 22 + 36 + \\dots + (14k - 6) + (14k + 8) = k(7k + 1) + (14k + 8)$.",
      "$k(7k + 1) + (14k + 8) = 7k^2 + 15k + 8$",
      "$7k^2 + 15k + 8 = (k + 1)(7k + 8)$",
      "So $8 + 22 + 36 + \\dots + (14k - 6) + (14k + 8) = (k + 1)(7(k + 1) + 1)$, the statement for $n = k + 1$.",
      "So the statement holds for every whole number $n \\ge 1$, and $c = 1$."
    ]
  },
  "ideas": [
    {
      "name": "Induction",
      "concrete": "Take the claim that $5 + 11 + 17 + \\dots + (6n - 1) = n(3n + 2)$ for every whole number $n \\ge 1$. For $n = 1$ it reads $5 = 1 \\cdot (3 \\cdot 1 + 2)$, which is true. Now suppose that it is true for one whole number $k$, so that $5 + 11 + \\dots + (6k - 1) = k(3k + 2)$. Adding the next term, $6(k + 1) - 1 = 6k + 5$, to both sides gives $k(3k + 2) + (6k + 5) = (k + 1)(3k + 5)$ on the right, and this is the claim for $k + 1$, since $3(k + 1) + 2 = 3k + 5$. So the claim for $1$ gives the claim for $2$, the claim for $2$ gives the claim for $3$, and so on: no whole number is left out.",
      "general": "Let $m$ be a whole number, and let one statement be given for each whole number $n \\ge m$. Suppose that the statement for $n = m$ holds, and that for every whole number $k \\ge m$ the statement for $n = k$ gives the statement for $n = k + 1$. Then the statement holds for every whole number $n \\ge m$. This method of proof is **Induction**. It rests on the axiom of induction, from arithmetic: a set of whole numbers that holds $m$, and holds $k + 1$ whenever it holds $k$, holds every whole number from $m$ on. A proof by induction has two parts, the base case and the inductive step, and it needs both."
    },
    {
      "name": "Base case",
      "concrete": "The claim $2^n > 3n + 3$ is false for $n = 3$, where it reads $8 > 12$, and true for $n = 4$, where it reads $16 > 15$. A proof of it for every whole number $n \\ge 4$ begins by working out both sides for $n = 4$.",
      "general": "In a proof by induction of a statement for every whole number $n \\ge m$, the **Base case** is the statement for $n = m$, the least $n$ of the claim. It is proved on its own, most often by working out both sides. A proof with no base case proves nothing. For the false claim $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2} + 5$, adding $k + 1$ to both sides of the claim for $k$ does give the claim for $k + 1$, and yet the claim is false for every $n$: no first true statement starts the chain."
    },
    {
      "name": "Inductive assumption",
      "concrete": "In the proof of $5 + 11 + 17 + \\dots + (6n - 1) = n(3n + 2)$, the assumption is the claim with $k$ in each place of $n$: $5 + 11 + 17 + \\dots + (6k - 1) = k(3k + 2)$, taken as true for one whole number $k \\ge 1$.",
      "general": "In a proof by induction of a statement for every whole number $n \\ge m$, the **Inductive assumption** is the statement for $n = k$, taken as true for one whole number $k \\ge m$ about which nothing more is known. It is never the statement for $n = k + 1$: a proof that takes the statement for $n = k + 1$ as known assumes what it has to prove."
    },
    {
      "name": "Inductive step",
      "concrete": "In the proof of $5 + 11 + 17 + \\dots + (6n - 1) = n(3n + 2)$, the step adds the next term, $6(k + 1) - 1 = 6k + 5$, to both sides of the assumption and rewrites the right side: $k(3k + 2) + (6k + 5) = 3k^2 + 8k + 5 = (k + 1)(3k + 5) = (k + 1)(3(k + 1) + 2)$. The last expression is the right side of the claim with $k + 1$ in each place of $n$.",
      "general": "In a proof by induction of a statement for every whole number $n \\ge m$, the **Inductive step** is the proof that, for every whole number $k \\ge m$, the statement for $n = k$ gives the statement for $n = k + 1$. For a sum, the step adds the next term to both sides of the inductive assumption. For a product, it multiplies both sides by the next factor. For an inequality, it multiplies or adds on both sides and then bounds what is left over. For a statement that a number is a multiple of another, it writes the number for $k + 1$ through the number for $k$. The step ends on the statement for $n = k + 1$, in the shape of the claim."
    },
    {
      "name": "Sum of cubes",
      "concrete": "The cubes $1^3$, $2^3$ and $3^3$ add up to $1 + 8 + 27 = 36$, and $(1 + 2 + 3)^2 = 6^2 = 36$ as well.",
      "general": "For every whole number $n \\ge 1$, $1^3 + 2^3 + \\dots + n^3 = (1 + 2 + \\dots + n)^2 = \\dfrac{n^2(n + 1)^2}{4}$: the sum of the first $n$ cubes is the square of the sum of the first $n$ whole numbers. This is the **Sum of cubes**, proved below by induction."
    }
  ],
  "kinds": [
    {
      "id": "t211-k1",
      "forms": [
        {
          "example": {
            "problem": "Prove that $13 + 27 + 41 + \\dots + (14n - 1) = n(7n + 6)$ for every whole number $n \\ge 1$.",
            "lines": [
              {
                "step": "Prove that $13 + 27 + 41 + \\dots + (14n - 1) = n(7n + 6)$ for every whole number $n \\ge 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $13 + 27 + 41 + \\dots + (14n - 1) = n(7n + 6)$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 1$ the left side is $13$ and the right side is $1 \\cdot (7 \\cdot 1 + 6) = 13$.",
                "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $13 + 27 + 41 + \\dots + (14k - 1) = k(7k + 6)$ for a whole number $k \\ge 1$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $13 + 27 + 41 + \\dots + (14k - 1) + (14k + 13) = k(7k + 6) + (14k + 13)$.",
                "reason": "Adding the same number to both sides: the next term, $14(k + 1) - 1 = 14k + 13$, is added to both sides of line 4."
              },
              {
                "step": "$k(7k + 6) + (14k + 13) = 7k^2 + 20k + 13$",
                "reason": "Multiplying out and collecting like terms: $k(7k + 6) = 7k^2 + 6k$, and the terms in $k$ add to $20k$."
              },
              {
                "step": "$7k^2 + 20k + 13 = (k + 1)(7k + 13)$",
                "reason": "Factoring a quadratic: multiplying out $(k + 1)(7k + 13)$ gives $7k^2 + 20k + 13$."
              },
              {
                "step": "So $13 + 27 + 41 + \\dots + (14k - 1) + (14k + 13) = (k + 1)(7(k + 1) + 6)$, the statement for $n = k + 1$.",
                "reason": "Inductive step: by lines 5 to 7, with $7(k + 1) + 6 = 7k + 13$; the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $13 + 27 + 41 + \\dots + (14n - 1) = n(7n + 6)$ for every whole number $n \\ge 1$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which $8 + 18 + 28 + \\dots + (10n - 2) = n(5n + c)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number $c$ for which $8 + 18 + 28 + \\dots + (10n - 2) = n(5n + c)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $8 + 18 + 28 + \\dots + (10n - 2) = n(5n + c)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $8$ and the right side is $1 \\cdot (5 \\cdot 1 + c) = 5 + c$, so $c = 3$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $8 + 18 + 28 + \\dots + (10k - 2) = k(5k + 3)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 3$."
                },
                {
                  "step": "Then $8 + 18 + 28 + \\dots + (10k - 2) + (10k + 8) = k(5k + 3) + (10k + 8)$.",
                  "reason": "Adding the same number to both sides: the next term, $10(k + 1) - 2 = 10k + 8$, is added to both sides of line 4."
                },
                {
                  "step": "$k(5k + 3) + (10k + 8) = 5k^2 + 13k + 8$",
                  "reason": "Multiplying out and collecting like terms: $k(5k + 3) = 5k^2 + 3k$, and the terms in $k$ add to $13k$."
                },
                {
                  "step": "$5k^2 + 13k + 8 = (k + 1)(5k + 8)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 1)(5k + 8)$ gives $5k^2 + 13k + 8$."
                },
                {
                  "step": "So $8 + 18 + 28 + \\dots + (10k - 2) + (10k + 8) = (k + 1)(5(k + 1) + 3)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $5(k + 1) + 3 = 5k + 8$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 3$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $17 + 37 + 57 + \\dots + (20n - 3) = n(10n + c)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the number $c$ for which $17 + 37 + 57 + \\dots + (20n - 3) = n(10n + c)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $17 + 37 + 57 + \\dots + (20n - 3) = n(10n + c)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $17$ and the right side is $1 \\cdot (10 \\cdot 1 + c) = 10 + c$, so $c = 7$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $17 + 37 + 57 + \\dots + (20k - 3) = k(10k + 7)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 7$."
                },
                {
                  "step": "Then $17 + 37 + 57 + \\dots + (20k - 3) + (20k + 17) = k(10k + 7) + (20k + 17)$.",
                  "reason": "Adding the same number to both sides: the next term, $20(k + 1) - 3 = 20k + 17$, is added to both sides of line 4."
                },
                {
                  "step": "$k(10k + 7) + (20k + 17) = 10k^2 + 27k + 17$",
                  "reason": "Multiplying out and collecting like terms: $k(10k + 7) = 10k^2 + 7k$, and the terms in $k$ add to $27k$."
                },
                {
                  "step": "$10k^2 + 27k + 17 = (k + 1)(10k + 17)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 1)(10k + 17)$ gives $10k^2 + 27k + 17$."
                },
                {
                  "step": "So $17 + 37 + 57 + \\dots + (20k - 3) + (20k + 17) = (k + 1)(10(k + 1) + 7)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $10(k + 1) + 7 = 10k + 17$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 7$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $7 + 19 + 31 + \\dots + (12n - 5) = n(6n + c)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find the number $c$ for which $7 + 19 + 31 + \\dots + (12n - 5) = n(6n + c)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $7 + 19 + 31 + \\dots + (12n - 5) = n(6n + c)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $7$ and the right side is $1 \\cdot (6 \\cdot 1 + c) = 6 + c$, so $c = 1$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $7 + 19 + 31 + \\dots + (12k - 5) = k(6k + 1)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 1$."
                },
                {
                  "step": "Then $7 + 19 + 31 + \\dots + (12k - 5) + (12k + 7) = k(6k + 1) + (12k + 7)$.",
                  "reason": "Adding the same number to both sides: the next term, $12(k + 1) - 5 = 12k + 7$, is added to both sides of line 4."
                },
                {
                  "step": "$k(6k + 1) + (12k + 7) = 6k^2 + 13k + 7$",
                  "reason": "Multiplying out and collecting like terms: $k(6k + 1) = 6k^2 + k$, and the terms in $k$ add to $13k$."
                },
                {
                  "step": "$6k^2 + 13k + 7 = (k + 1)(6k + 7)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 1)(6k + 7)$ gives $6k^2 + 13k + 7$."
                },
                {
                  "step": "So $7 + 19 + 31 + \\dots + (12k - 5) + (12k + 7) = (k + 1)(6(k + 1) + 1)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $6(k + 1) + 1 = 6k + 7$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 1$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $30 + 90 + 270 + \\dots + 10 \\cdot 3^n = 5 \\cdot 3^{n + 1} - 15$ for every whole number $n \\ge 1$.",
            "lines": [
              {
                "step": "Prove that $30 + 90 + 270 + \\dots + 10 \\cdot 3^n = 5 \\cdot 3^{n + 1} - 15$ for every whole number $n \\ge 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $30 + 90 + 270 + \\dots + 10 \\cdot 3^n = 5 \\cdot 3^{n + 1} - 15$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 1$ the left side is $30$ and the right side is $5 \\cdot 3^2 - 15 = 30$.",
                "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $30 + 90 + 270 + \\dots + 10 \\cdot 3^k = 5 \\cdot 3^{k + 1} - 15$ for a whole number $k \\ge 1$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $30 + 90 + 270 + \\dots + 10 \\cdot 3^k + 10 \\cdot 3^{k + 1} = 5 \\cdot 3^{k + 1} - 15 + 10 \\cdot 3^{k + 1}$.",
                "reason": "Adding the same number to both sides: the next term, $10 \\cdot 3^{k + 1}$, is added to both sides of line 4."
              },
              {
                "step": "$5 \\cdot 3^{k + 1} - 15 + 10 \\cdot 3^{k + 1} = 15 \\cdot 3^{k + 1} - 15$",
                "reason": "Collecting like terms: the two terms in $3^{k + 1}$ add to $15 \\cdot 3^{k + 1}$, since $5 + 10 = 15$."
              },
              {
                "step": "$15 \\cdot 3^{k + 1} - 15 = 5 \\cdot 3^{k + 2} - 15$",
                "reason": "Product law: $15 = 5 \\cdot 3$, and $3 \\cdot 3^{k + 1} = 3^{k + 2}$."
              },
              {
                "step": "So $30 + 90 + 270 + \\dots + 10 \\cdot 3^k + 10 \\cdot 3^{k + 1} = 5 \\cdot 3^{(k + 1) + 1} - 15$, the statement for $n = k + 1$.",
                "reason": "Inductive step: by lines 5 to 7, with $k + 2 = (k + 1) + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $30 + 90 + 270 + \\dots + 10 \\cdot 3^n = 5 \\cdot 3^{n + 1} - 15$ for every whole number $n \\ge 1$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which $48 + 192 + 768 + \\dots + 12 \\cdot 4^n = 4 \\cdot 4^{n + 1} - c$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find the number $c$ for which $48 + 192 + 768 + \\dots + 12 \\cdot 4^n = 4 \\cdot 4^{n + 1} - c$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $48 + 192 + 768 + \\dots + 12 \\cdot 4^n = 4 \\cdot 4^{n + 1} - c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $48$ and the right side is $4 \\cdot 4^2 - c = 64 - c$, so $c = 16$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $48 + 192 + 768 + \\dots + 12 \\cdot 4^k = 4 \\cdot 4^{k + 1} - 16$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 16$."
                },
                {
                  "step": "Then $48 + 192 + 768 + \\dots + 12 \\cdot 4^k + 12 \\cdot 4^{k + 1} = 4 \\cdot 4^{k + 1} - 16 + 12 \\cdot 4^{k + 1}$.",
                  "reason": "Adding the same number to both sides: the next term, $12 \\cdot 4^{k + 1}$, is added to both sides of line 4."
                },
                {
                  "step": "$4 \\cdot 4^{k + 1} - 16 + 12 \\cdot 4^{k + 1} = 16 \\cdot 4^{k + 1} - 16$",
                  "reason": "Collecting like terms: the two terms in $4^{k + 1}$ add to $16 \\cdot 4^{k + 1}$, since $4 + 12 = 16$."
                },
                {
                  "step": "$16 \\cdot 4^{k + 1} - 16 = 4 \\cdot 4^{k + 2} - 16$",
                  "reason": "Product law: $16 = 4 \\cdot 4$, and $4 \\cdot 4^{k + 1} = 4^{k + 2}$."
                },
                {
                  "step": "So $48 + 192 + 768 + \\dots + 12 \\cdot 4^k + 12 \\cdot 4^{k + 1} = 4 \\cdot 4^{(k + 1) + 1} - 16$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $k + 2 = (k + 1) + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 16$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $168 + 1176 + 8232 + \\dots + 24 \\cdot 7^n = 4 \\cdot 7^{n + 1} - c$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "28",
              "lines": [
                {
                  "step": "Find the number $c$ for which $168 + 1176 + 8232 + \\dots + 24 \\cdot 7^n = 4 \\cdot 7^{n + 1} - c$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $168 + 1176 + 8232 + \\dots + 24 \\cdot 7^n = 4 \\cdot 7^{n + 1} - c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $168$ and the right side is $4 \\cdot 7^2 - c = 196 - c$, so $c = 28$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $168 + 1176 + 8232 + \\dots + 24 \\cdot 7^k = 4 \\cdot 7^{k + 1} - 28$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 28$."
                },
                {
                  "step": "Then $168 + 1176 + 8232 + \\dots + 24 \\cdot 7^k + 24 \\cdot 7^{k + 1} = 4 \\cdot 7^{k + 1} - 28 + 24 \\cdot 7^{k + 1}$.",
                  "reason": "Adding the same number to both sides: the next term, $24 \\cdot 7^{k + 1}$, is added to both sides of line 4."
                },
                {
                  "step": "$4 \\cdot 7^{k + 1} - 28 + 24 \\cdot 7^{k + 1} = 28 \\cdot 7^{k + 1} - 28$",
                  "reason": "Collecting like terms: the two terms in $7^{k + 1}$ add to $28 \\cdot 7^{k + 1}$, since $4 + 24 = 28$."
                },
                {
                  "step": "$28 \\cdot 7^{k + 1} - 28 = 4 \\cdot 7^{k + 2} - 28$",
                  "reason": "Product law: $28 = 4 \\cdot 7$, and $7 \\cdot 7^{k + 1} = 7^{k + 2}$."
                },
                {
                  "step": "So $168 + 1176 + 8232 + \\dots + 24 \\cdot 7^k + 24 \\cdot 7^{k + 1} = 4 \\cdot 7^{(k + 1) + 1} - 28$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $k + 2 = (k + 1) + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 28$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $24 + 72 + 216 + \\dots + 8 \\cdot 3^n = 4 \\cdot 3^{n + 1} - c$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the number $c$ for which $24 + 72 + 216 + \\dots + 8 \\cdot 3^n = 4 \\cdot 3^{n + 1} - c$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $24 + 72 + 216 + \\dots + 8 \\cdot 3^n = 4 \\cdot 3^{n + 1} - c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $24$ and the right side is $4 \\cdot 3^2 - c = 36 - c$, so $c = 12$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $24 + 72 + 216 + \\dots + 8 \\cdot 3^k = 4 \\cdot 3^{k + 1} - 12$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 12$."
                },
                {
                  "step": "Then $24 + 72 + 216 + \\dots + 8 \\cdot 3^k + 8 \\cdot 3^{k + 1} = 4 \\cdot 3^{k + 1} - 12 + 8 \\cdot 3^{k + 1}$.",
                  "reason": "Adding the same number to both sides: the next term, $8 \\cdot 3^{k + 1}$, is added to both sides of line 4."
                },
                {
                  "step": "$4 \\cdot 3^{k + 1} - 12 + 8 \\cdot 3^{k + 1} = 12 \\cdot 3^{k + 1} - 12$",
                  "reason": "Collecting like terms: the two terms in $3^{k + 1}$ add to $12 \\cdot 3^{k + 1}$, since $4 + 8 = 12$."
                },
                {
                  "step": "$12 \\cdot 3^{k + 1} - 12 = 4 \\cdot 3^{k + 2} - 12$",
                  "reason": "Product law: $12 = 4 \\cdot 3$, and $3 \\cdot 3^{k + 1} = 3^{k + 2}$."
                },
                {
                  "step": "So $24 + 72 + 216 + \\dots + 8 \\cdot 3^k + 8 \\cdot 3^{k + 1} = 4 \\cdot 3^{(k + 1) + 1} - 12$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $k + 2 = (k + 1) + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 12$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $\\dfrac{6}{3 \\cdot 7} + \\dfrac{6}{7 \\cdot 11} + \\dfrac{6}{11 \\cdot 15} + \\dots + \\dfrac{6}{(4n - 1)(4n + 3)} = \\dfrac{2n}{4n + 3}$ for every whole number $n \\ge 1$.",
            "lines": [
              {
                "step": "Prove that $\\dfrac{6}{3 \\cdot 7} + \\dfrac{6}{7 \\cdot 11} + \\dfrac{6}{11 \\cdot 15} + \\dots + \\dfrac{6}{(4n - 1)(4n + 3)} = \\dfrac{2n}{4n + 3}$ for every whole number $n \\ge 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $\\dfrac{6}{3 \\cdot 7} + \\dfrac{6}{7 \\cdot 11} + \\dfrac{6}{11 \\cdot 15} + \\dots + \\dfrac{6}{(4n - 1)(4n + 3)} = \\dfrac{2n}{4n + 3}$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 1$ the left side is $\\dfrac{6}{3 \\cdot 7} = \\dfrac{2}{7}$ and the right side is $\\dfrac{2 \\cdot 1}{4 \\cdot 1 + 3} = \\dfrac{2}{7}$.",
                "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $\\dfrac{6}{3 \\cdot 7} + \\dfrac{6}{7 \\cdot 11} + \\dfrac{6}{11 \\cdot 15} + \\dots + \\dfrac{6}{(4k - 1)(4k + 3)} = \\dfrac{2k}{4k + 3}$ for a whole number $k \\ge 1$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $\\dfrac{6}{3 \\cdot 7} + \\dfrac{6}{7 \\cdot 11} + \\dfrac{6}{11 \\cdot 15} + \\dots + \\dfrac{6}{(4k - 1)(4k + 3)} + \\dfrac{6}{(4k + 3)(4k + 7)} = \\dfrac{2k}{4k + 3} + \\dfrac{6}{(4k + 3)(4k + 7)}$.",
                "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, with $4(k + 1) - 1 = 4k + 3$ and $4(k + 1) + 3 = 4k + 7$."
              },
              {
                "step": "$\\dfrac{2k}{4k + 3} + \\dfrac{6}{(4k + 3)(4k + 7)} = \\dfrac{2k(4k + 7) + 6}{(4k + 3)(4k + 7)}$",
                "reason": "Simplest common denominator: the first fraction is multiplied above and below by $4k + 7$."
              },
              {
                "step": "$\\dfrac{2k(4k + 7) + 6}{(4k + 3)(4k + 7)} = \\dfrac{8k^2 + 14k + 6}{(4k + 3)(4k + 7)}$",
                "reason": "Multiplying out: $2k(4k + 7) = 8k^2 + 14k$."
              },
              {
                "step": "$\\dfrac{8k^2 + 14k + 6}{(4k + 3)(4k + 7)} = \\dfrac{2(k + 1)(4k + 3)}{(4k + 3)(4k + 7)}$",
                "reason": "Factoring a quadratic: multiplying out $2(k + 1)(4k + 3)$ gives $8k^2 + 14k + 6$."
              },
              {
                "step": "$\\dfrac{2(k + 1)(4k + 3)}{(4k + 3)(4k + 7)} = \\dfrac{2(k + 1)}{4k + 7}$",
                "reason": "Cancelling a common factor: $4k + 3$ is positive, so it is not $0$."
              },
              {
                "step": "So $\\dfrac{6}{3 \\cdot 7} + \\dfrac{6}{7 \\cdot 11} + \\dfrac{6}{11 \\cdot 15} + \\dots + \\dfrac{6}{(4k - 1)(4k + 3)} + \\dfrac{6}{(4k + 3)(4k + 7)} = \\dfrac{2(k + 1)}{4(k + 1) + 3}$, the statement for $n = k + 1$.",
                "reason": "Inductive step: by lines 5 to 9, with $4(k + 1) + 3 = 4k + 7$; the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $\\dfrac{6}{3 \\cdot 7} + \\dfrac{6}{7 \\cdot 11} + \\dfrac{6}{11 \\cdot 15} + \\dots + \\dfrac{6}{(4n - 1)(4n + 3)} = \\dfrac{2n}{4n + 3}$ for every whole number $n \\ge 1$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which $\\dfrac{6}{3 \\cdot 11} + \\dfrac{6}{11 \\cdot 19} + \\dfrac{6}{19 \\cdot 27} + \\dots + \\dfrac{6}{(8n - 5)(8n + 3)} = \\dfrac{cn}{8n + 3}$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the number $c$ for which $\\dfrac{6}{3 \\cdot 11} + \\dfrac{6}{11 \\cdot 19} + \\dfrac{6}{19 \\cdot 27} + \\dots + \\dfrac{6}{(8n - 5)(8n + 3)} = \\dfrac{cn}{8n + 3}$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\dfrac{6}{3 \\cdot 11} + \\dfrac{6}{11 \\cdot 19} + \\dfrac{6}{19 \\cdot 27} + \\dots + \\dfrac{6}{(8n - 5)(8n + 3)} = \\dfrac{cn}{8n + 3}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $\\dfrac{6}{3 \\cdot 11} = \\dfrac{2}{11}$ and the right side is $\\dfrac{c \\cdot 1}{8 \\cdot 1 + 3} = \\dfrac{c}{11}$, so $c = 2$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $\\dfrac{6}{3 \\cdot 11} + \\dfrac{6}{11 \\cdot 19} + \\dfrac{6}{19 \\cdot 27} + \\dots + \\dfrac{6}{(8k - 5)(8k + 3)} = \\dfrac{2k}{8k + 3}$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 2$."
                },
                {
                  "step": "Then $\\dfrac{6}{3 \\cdot 11} + \\dfrac{6}{11 \\cdot 19} + \\dfrac{6}{19 \\cdot 27} + \\dots + \\dfrac{6}{(8k - 5)(8k + 3)} + \\dfrac{6}{(8k + 3)(8k + 11)} = \\dfrac{2k}{8k + 3} + \\dfrac{6}{(8k + 3)(8k + 11)}$.",
                  "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, with $8(k + 1) - 5 = 8k + 3$ and $8(k + 1) + 3 = 8k + 11$."
                },
                {
                  "step": "$\\dfrac{2k}{8k + 3} + \\dfrac{6}{(8k + 3)(8k + 11)} = \\dfrac{2k(8k + 11) + 6}{(8k + 3)(8k + 11)}$",
                  "reason": "Simplest common denominator: the first fraction is multiplied above and below by $8k + 11$."
                },
                {
                  "step": "$\\dfrac{2k(8k + 11) + 6}{(8k + 3)(8k + 11)} = \\dfrac{16k^2 + 22k + 6}{(8k + 3)(8k + 11)}$",
                  "reason": "Multiplying out: $2k(8k + 11) = 16k^2 + 22k$."
                },
                {
                  "step": "$\\dfrac{16k^2 + 22k + 6}{(8k + 3)(8k + 11)} = \\dfrac{2(k + 1)(8k + 3)}{(8k + 3)(8k + 11)}$",
                  "reason": "Factoring a quadratic: multiplying out $2(k + 1)(8k + 3)$ gives $16k^2 + 22k + 6$."
                },
                {
                  "step": "$\\dfrac{2(k + 1)(8k + 3)}{(8k + 3)(8k + 11)} = \\dfrac{2(k + 1)}{8k + 11}$",
                  "reason": "Cancelling a common factor: $8k + 3$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\dfrac{6}{3 \\cdot 11} + \\dfrac{6}{11 \\cdot 19} + \\dfrac{6}{19 \\cdot 27} + \\dots + \\dfrac{6}{(8k - 5)(8k + 3)} + \\dfrac{6}{(8k + 3)(8k + 11)} = \\dfrac{2(k + 1)}{8(k + 1) + 3}$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 9, with $8(k + 1) + 3 = 8k + 11$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 2$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $\\dfrac{6}{2 \\cdot 9} + \\dfrac{6}{9 \\cdot 16} + \\dfrac{6}{16 \\cdot 23} + \\dots + \\dfrac{6}{(7n - 5)(7n + 2)} = \\dfrac{cn}{7n + 2}$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number $c$ for which $\\dfrac{6}{2 \\cdot 9} + \\dfrac{6}{9 \\cdot 16} + \\dfrac{6}{16 \\cdot 23} + \\dots + \\dfrac{6}{(7n - 5)(7n + 2)} = \\dfrac{cn}{7n + 2}$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\dfrac{6}{2 \\cdot 9} + \\dfrac{6}{9 \\cdot 16} + \\dfrac{6}{16 \\cdot 23} + \\dots + \\dfrac{6}{(7n - 5)(7n + 2)} = \\dfrac{cn}{7n + 2}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $\\dfrac{6}{2 \\cdot 9} = \\dfrac{1}{3}$ and the right side is $\\dfrac{c \\cdot 1}{7 \\cdot 1 + 2} = \\dfrac{c}{9}$, so $c = 3$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $\\dfrac{6}{2 \\cdot 9} + \\dfrac{6}{9 \\cdot 16} + \\dfrac{6}{16 \\cdot 23} + \\dots + \\dfrac{6}{(7k - 5)(7k + 2)} = \\dfrac{3k}{7k + 2}$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 3$."
                },
                {
                  "step": "Then $\\dfrac{6}{2 \\cdot 9} + \\dfrac{6}{9 \\cdot 16} + \\dfrac{6}{16 \\cdot 23} + \\dots + \\dfrac{6}{(7k - 5)(7k + 2)} + \\dfrac{6}{(7k + 2)(7k + 9)} = \\dfrac{3k}{7k + 2} + \\dfrac{6}{(7k + 2)(7k + 9)}$.",
                  "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, with $7(k + 1) - 5 = 7k + 2$ and $7(k + 1) + 2 = 7k + 9$."
                },
                {
                  "step": "$\\dfrac{3k}{7k + 2} + \\dfrac{6}{(7k + 2)(7k + 9)} = \\dfrac{3k(7k + 9) + 6}{(7k + 2)(7k + 9)}$",
                  "reason": "Simplest common denominator: the first fraction is multiplied above and below by $7k + 9$."
                },
                {
                  "step": "$\\dfrac{3k(7k + 9) + 6}{(7k + 2)(7k + 9)} = \\dfrac{21k^2 + 27k + 6}{(7k + 2)(7k + 9)}$",
                  "reason": "Multiplying out: $3k(7k + 9) = 21k^2 + 27k$."
                },
                {
                  "step": "$\\dfrac{21k^2 + 27k + 6}{(7k + 2)(7k + 9)} = \\dfrac{3(k + 1)(7k + 2)}{(7k + 2)(7k + 9)}$",
                  "reason": "Factoring a quadratic: multiplying out $3(k + 1)(7k + 2)$ gives $21k^2 + 27k + 6$."
                },
                {
                  "step": "$\\dfrac{3(k + 1)(7k + 2)}{(7k + 2)(7k + 9)} = \\dfrac{3(k + 1)}{7k + 9}$",
                  "reason": "Cancelling a common factor: $7k + 2$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\dfrac{6}{2 \\cdot 9} + \\dfrac{6}{9 \\cdot 16} + \\dfrac{6}{16 \\cdot 23} + \\dots + \\dfrac{6}{(7k - 5)(7k + 2)} + \\dfrac{6}{(7k + 2)(7k + 9)} = \\dfrac{3(k + 1)}{7(k + 1) + 2}$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 9, with $7(k + 1) + 2 = 7k + 9$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 3$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $\\dfrac{6}{3 \\cdot 8} + \\dfrac{6}{8 \\cdot 13} + \\dfrac{6}{13 \\cdot 18} + \\dots + \\dfrac{6}{(5n - 2)(5n + 3)} = \\dfrac{cn}{5n + 3}$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the number $c$ for which $\\dfrac{6}{3 \\cdot 8} + \\dfrac{6}{8 \\cdot 13} + \\dfrac{6}{13 \\cdot 18} + \\dots + \\dfrac{6}{(5n - 2)(5n + 3)} = \\dfrac{cn}{5n + 3}$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\dfrac{6}{3 \\cdot 8} + \\dfrac{6}{8 \\cdot 13} + \\dfrac{6}{13 \\cdot 18} + \\dots + \\dfrac{6}{(5n - 2)(5n + 3)} = \\dfrac{cn}{5n + 3}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $\\dfrac{6}{3 \\cdot 8} = \\dfrac{1}{4}$ and the right side is $\\dfrac{c \\cdot 1}{5 \\cdot 1 + 3} = \\dfrac{c}{8}$, so $c = 2$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $\\dfrac{6}{3 \\cdot 8} + \\dfrac{6}{8 \\cdot 13} + \\dfrac{6}{13 \\cdot 18} + \\dots + \\dfrac{6}{(5k - 2)(5k + 3)} = \\dfrac{2k}{5k + 3}$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 2$."
                },
                {
                  "step": "Then $\\dfrac{6}{3 \\cdot 8} + \\dfrac{6}{8 \\cdot 13} + \\dfrac{6}{13 \\cdot 18} + \\dots + \\dfrac{6}{(5k - 2)(5k + 3)} + \\dfrac{6}{(5k + 3)(5k + 8)} = \\dfrac{2k}{5k + 3} + \\dfrac{6}{(5k + 3)(5k + 8)}$.",
                  "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, with $5(k + 1) - 2 = 5k + 3$ and $5(k + 1) + 3 = 5k + 8$."
                },
                {
                  "step": "$\\dfrac{2k}{5k + 3} + \\dfrac{6}{(5k + 3)(5k + 8)} = \\dfrac{2k(5k + 8) + 6}{(5k + 3)(5k + 8)}$",
                  "reason": "Simplest common denominator: the first fraction is multiplied above and below by $5k + 8$."
                },
                {
                  "step": "$\\dfrac{2k(5k + 8) + 6}{(5k + 3)(5k + 8)} = \\dfrac{10k^2 + 16k + 6}{(5k + 3)(5k + 8)}$",
                  "reason": "Multiplying out: $2k(5k + 8) = 10k^2 + 16k$."
                },
                {
                  "step": "$\\dfrac{10k^2 + 16k + 6}{(5k + 3)(5k + 8)} = \\dfrac{2(k + 1)(5k + 3)}{(5k + 3)(5k + 8)}$",
                  "reason": "Factoring a quadratic: multiplying out $2(k + 1)(5k + 3)$ gives $10k^2 + 16k + 6$."
                },
                {
                  "step": "$\\dfrac{2(k + 1)(5k + 3)}{(5k + 3)(5k + 8)} = \\dfrac{2(k + 1)}{5k + 8}$",
                  "reason": "Cancelling a common factor: $5k + 3$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\dfrac{6}{3 \\cdot 8} + \\dfrac{6}{8 \\cdot 13} + \\dfrac{6}{13 \\cdot 18} + \\dots + \\dfrac{6}{(5k - 2)(5k + 3)} + \\dfrac{6}{(5k + 3)(5k + 8)} = \\dfrac{2(k + 1)}{5(k + 1) + 3}$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 9, with $5(k + 1) + 3 = 5k + 8$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 2$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $14 + 40 + 78 + \\dots + 2n(3n + 4) = n(n + 1)(2n + 5)$ for every whole number $n \\ge 1$.",
            "lines": [
              {
                "step": "Prove that $14 + 40 + 78 + \\dots + 2n(3n + 4) = n(n + 1)(2n + 5)$ for every whole number $n \\ge 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $14 + 40 + 78 + \\dots + 2n(3n + 4) = n(n + 1)(2n + 5)$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 1$ the left side is $14$ and the right side is $1 \\cdot (1 + 1)(2 + 5) = 14$.",
                "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $14 + 40 + 78 + \\dots + 2k(3k + 4) = k(k + 1)(2k + 5)$ for a whole number $k \\ge 1$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $14 + 40 + 78 + \\dots + 2k(3k + 4) + 2(k + 1)(3k + 7) = k(k + 1)(2k + 5) + 2(k + 1)(3k + 7)$.",
                "reason": "Adding the same number to both sides: the next term, $2(k + 1)(3(k + 1) + 4) = 2(k + 1)(3k + 7)$, is added to both sides of line 4."
              },
              {
                "step": "$k(k + 1)(2k + 5) + 2(k + 1)(3k + 7) = (k + 1)\\left(k(2k + 5) + 2(3k + 7)\\right)$",
                "reason": "Taking out a common factor: $k + 1$ is a factor of both terms."
              },
              {
                "step": "$(k + 1)\\left(k(2k + 5) + 2(3k + 7)\\right) = (k + 1)(2k^2 + 11k + 14)$",
                "reason": "Multiplying out and collecting like terms: inside the bracket, $k(2k + 5) = 2k^2 + 5k$, and the terms in $k$ add to $11k$."
              },
              {
                "step": "$(k + 1)(2k^2 + 11k + 14) = (k + 1)(k + 2)(2k + 7)$",
                "reason": "Factoring a quadratic: multiplying out $(k + 2)(2k + 7)$ gives $2k^2 + 11k + 14$."
              },
              {
                "step": "So $14 + 40 + 78 + \\dots + 2k(3k + 4) + 2(k + 1)(3k + 7) = (k + 1)((k + 1) + 1)(2(k + 1) + 5)$, the statement for $n = k + 1$.",
                "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 1 = k + 2$ and $2(k + 1) + 5 = 2k + 7$; the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $14 + 40 + 78 + \\dots + 2n(3n + 4) = n(n + 1)(2n + 5)$ for every whole number $n \\ge 1$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which $10 + 26 + 48 + \\dots + n(3n + 7) = n(n + 1)(n + c)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the number $c$ for which $10 + 26 + 48 + \\dots + n(3n + 7) = n(n + 1)(n + c)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $10 + 26 + 48 + \\dots + n(3n + 7) = n(n + 1)(n + c)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $10$ and the right side is $1 \\cdot (1 + 1)(1 + c) = 2 + 2c$, so $c = 4$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $10 + 26 + 48 + \\dots + k(3k + 7) = k(k + 1)(k + 4)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 4$."
                },
                {
                  "step": "Then $10 + 26 + 48 + \\dots + k(3k + 7) + (k + 1)(3k + 10) = k(k + 1)(k + 4) + (k + 1)(3k + 10)$.",
                  "reason": "Adding the same number to both sides: the next term, $(k + 1)(3(k + 1) + 7) = (k + 1)(3k + 10)$, is added to both sides of line 4."
                },
                {
                  "step": "$k(k + 1)(k + 4) + (k + 1)(3k + 10) = (k + 1)\\left(k(k + 4) + (3k + 10)\\right)$",
                  "reason": "Taking out a common factor: $k + 1$ is a factor of both terms."
                },
                {
                  "step": "$(k + 1)\\left(k(k + 4) + (3k + 10)\\right) = (k + 1)(k^2 + 7k + 10)$",
                  "reason": "Multiplying out and collecting like terms: inside the bracket, $k(k + 4) = k^2 + 4k$, and the terms in $k$ add to $7k$."
                },
                {
                  "step": "$(k + 1)(k^2 + 7k + 10) = (k + 1)(k + 2)(k + 5)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 2)(k + 5)$ gives $k^2 + 7k + 10$."
                },
                {
                  "step": "So $10 + 26 + 48 + \\dots + k(3k + 7) + (k + 1)(3k + 10) = (k + 1)((k + 1) + 1)((k + 1) + 4)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 1 = k + 2$ and $(k + 1) + 4 = k + 5$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 4$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $14 + 34 + 60 + \\dots + n(3n + 11) = n(n + 1)(n + c)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the number $c$ for which $14 + 34 + 60 + \\dots + n(3n + 11) = n(n + 1)(n + c)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $14 + 34 + 60 + \\dots + n(3n + 11) = n(n + 1)(n + c)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $14$ and the right side is $1 \\cdot (1 + 1)(1 + c) = 2 + 2c$, so $c = 6$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $14 + 34 + 60 + \\dots + k(3k + 11) = k(k + 1)(k + 6)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 6$."
                },
                {
                  "step": "Then $14 + 34 + 60 + \\dots + k(3k + 11) + (k + 1)(3k + 14) = k(k + 1)(k + 6) + (k + 1)(3k + 14)$.",
                  "reason": "Adding the same number to both sides: the next term, $(k + 1)(3(k + 1) + 11) = (k + 1)(3k + 14)$, is added to both sides of line 4."
                },
                {
                  "step": "$k(k + 1)(k + 6) + (k + 1)(3k + 14) = (k + 1)\\left(k(k + 6) + (3k + 14)\\right)$",
                  "reason": "Taking out a common factor: $k + 1$ is a factor of both terms."
                },
                {
                  "step": "$(k + 1)\\left(k(k + 6) + (3k + 14)\\right) = (k + 1)(k^2 + 9k + 14)$",
                  "reason": "Multiplying out and collecting like terms: inside the bracket, $k(k + 6) = k^2 + 6k$, and the terms in $k$ add to $9k$."
                },
                {
                  "step": "$(k + 1)(k^2 + 9k + 14) = (k + 1)(k + 2)(k + 7)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 2)(k + 7)$ gives $k^2 + 9k + 14$."
                },
                {
                  "step": "So $14 + 34 + 60 + \\dots + k(3k + 11) + (k + 1)(3k + 14) = (k + 1)((k + 1) + 1)((k + 1) + 6)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 1 = k + 2$ and $(k + 1) + 6 = k + 7$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 6$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $22 + 56 + 102 + \\dots + 2n(3n + 8) = n(n + 1)(2n + c)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the number $c$ for which $22 + 56 + 102 + \\dots + 2n(3n + 8) = n(n + 1)(2n + c)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $22 + 56 + 102 + \\dots + 2n(3n + 8) = n(n + 1)(2n + c)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $22$ and the right side is $1 \\cdot (1 + 1)(2 + c) = 4 + 2c$, so $c = 9$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $22 + 56 + 102 + \\dots + 2k(3k + 8) = k(k + 1)(2k + 9)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 9$."
                },
                {
                  "step": "Then $22 + 56 + 102 + \\dots + 2k(3k + 8) + 2(k + 1)(3k + 11) = k(k + 1)(2k + 9) + 2(k + 1)(3k + 11)$.",
                  "reason": "Adding the same number to both sides: the next term, $2(k + 1)(3(k + 1) + 8) = 2(k + 1)(3k + 11)$, is added to both sides of line 4."
                },
                {
                  "step": "$k(k + 1)(2k + 9) + 2(k + 1)(3k + 11) = (k + 1)\\left(k(2k + 9) + 2(3k + 11)\\right)$",
                  "reason": "Taking out a common factor: $k + 1$ is a factor of both terms."
                },
                {
                  "step": "$(k + 1)\\left(k(2k + 9) + 2(3k + 11)\\right) = (k + 1)(2k^2 + 15k + 22)$",
                  "reason": "Multiplying out and collecting like terms: inside the bracket, $k(2k + 9) = 2k^2 + 9k$, and the terms in $k$ add to $15k$."
                },
                {
                  "step": "$(k + 1)(2k^2 + 15k + 22) = (k + 1)(k + 2)(2k + 11)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 2)(2k + 11)$ gives $2k^2 + 15k + 22$."
                },
                {
                  "step": "So $22 + 56 + 102 + \\dots + 2k(3k + 8) + 2(k + 1)(3k + 11) = (k + 1)((k + 1) + 1)(2(k + 1) + 9)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 1 = k + 2$ and $2(k + 1) + 9 = 2k + 11$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 9$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t211-k2",
      "forms": [
        {
          "example": {
            "problem": "Prove that $\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{11}\\right)\\left(1 - \\dfrac{5}{16}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 1}\\right) = \\dfrac{1}{5n + 1}$ for every whole number $n \\ge 1$.",
            "lines": [
              {
                "step": "Prove that $\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{11}\\right)\\left(1 - \\dfrac{5}{16}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 1}\\right) = \\dfrac{1}{5n + 1}$ for every whole number $n \\ge 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{11}\\right)\\left(1 - \\dfrac{5}{16}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 1}\\right) = \\dfrac{1}{5n + 1}$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 1$ the left side is $1 - \\dfrac{5}{6} = \\dfrac{1}{6}$ and the right side is $\\dfrac{1}{5 \\cdot 1 + 1} = \\dfrac{1}{6}$.",
                "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{11}\\right)\\left(1 - \\dfrac{5}{16}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 1}\\right) = \\dfrac{1}{5k + 1}$ for a whole number $k \\ge 1$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{11}\\right)\\left(1 - \\dfrac{5}{16}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 1}\\right)\\left(1 - \\dfrac{5}{5k + 6}\\right) = \\dfrac{1}{5k + 1}\\left(1 - \\dfrac{5}{5k + 6}\\right)$.",
                "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $5(k + 1) + 1 = 5k + 6$."
              },
              {
                "step": "$1 - \\dfrac{5}{5k + 6} = \\dfrac{5k + 1}{5k + 6}$",
                "reason": "Single fraction: $1$ is written as $\\dfrac{5k + 6}{5k + 6}$."
              },
              {
                "step": "$\\dfrac{1}{5k + 1} \\cdot \\dfrac{5k + 1}{5k + 6} = \\dfrac{1}{5k + 6}$",
                "reason": "Cancelling a common factor: $5k + 1$ is positive, so it is not $0$."
              },
              {
                "step": "So $\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{11}\\right)\\left(1 - \\dfrac{5}{16}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 1}\\right)\\left(1 - \\dfrac{5}{5k + 6}\\right) = \\dfrac{1}{5(k + 1) + 1}$, the statement for $n = k + 1$.",
                "reason": "Inductive step: by lines 5 to 7, with $5(k + 1) + 1 = 5k + 6$; the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $\\left(1 - \\dfrac{5}{6}\\right)\\left(1 - \\dfrac{5}{11}\\right)\\left(1 - \\dfrac{5}{16}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 1}\\right) = \\dfrac{1}{5n + 1}$ for every whole number $n \\ge 1$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which $\\left(1 - \\dfrac{7}{13}\\right)\\left(1 - \\dfrac{7}{20}\\right)\\left(1 - \\dfrac{7}{27}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 6}\\right) = \\dfrac{c}{7n + 6}$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the number $c$ for which $\\left(1 - \\dfrac{7}{13}\\right)\\left(1 - \\dfrac{7}{20}\\right)\\left(1 - \\dfrac{7}{27}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 6}\\right) = \\dfrac{c}{7n + 6}$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{7}{13}\\right)\\left(1 - \\dfrac{7}{20}\\right)\\left(1 - \\dfrac{7}{27}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 6}\\right) = \\dfrac{c}{7n + 6}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $1 - \\dfrac{7}{13} = \\dfrac{6}{13}$ and the right side is $\\dfrac{c}{7 \\cdot 1 + 6} = \\dfrac{c}{13}$, so $c = 6$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $\\left(1 - \\dfrac{7}{13}\\right)\\left(1 - \\dfrac{7}{20}\\right)\\left(1 - \\dfrac{7}{27}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 6}\\right) = \\dfrac{6}{7k + 6}$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 6$."
                },
                {
                  "step": "Then $\\left(1 - \\dfrac{7}{13}\\right)\\left(1 - \\dfrac{7}{20}\\right)\\left(1 - \\dfrac{7}{27}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 6}\\right)\\left(1 - \\dfrac{7}{7k + 13}\\right) = \\dfrac{6}{7k + 6}\\left(1 - \\dfrac{7}{7k + 13}\\right)$.",
                  "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $7(k + 1) + 6 = 7k + 13$."
                },
                {
                  "step": "$1 - \\dfrac{7}{7k + 13} = \\dfrac{7k + 6}{7k + 13}$",
                  "reason": "Single fraction: $1$ is written as $\\dfrac{7k + 13}{7k + 13}$."
                },
                {
                  "step": "$\\dfrac{6}{7k + 6} \\cdot \\dfrac{7k + 6}{7k + 13} = \\dfrac{6}{7k + 13}$",
                  "reason": "Cancelling a common factor: $7k + 6$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\left(1 - \\dfrac{7}{13}\\right)\\left(1 - \\dfrac{7}{20}\\right)\\left(1 - \\dfrac{7}{27}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 6}\\right)\\left(1 - \\dfrac{7}{7k + 13}\\right) = \\dfrac{6}{7(k + 1) + 6}$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $7(k + 1) + 6 = 7k + 13$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 6$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $\\left(1 - \\dfrac{5}{7}\\right)\\left(1 - \\dfrac{5}{12}\\right)\\left(1 - \\dfrac{5}{17}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 2}\\right) = \\dfrac{c}{5n + 2}$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the number $c$ for which $\\left(1 - \\dfrac{5}{7}\\right)\\left(1 - \\dfrac{5}{12}\\right)\\left(1 - \\dfrac{5}{17}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 2}\\right) = \\dfrac{c}{5n + 2}$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{5}{7}\\right)\\left(1 - \\dfrac{5}{12}\\right)\\left(1 - \\dfrac{5}{17}\\right) \\cdots \\left(1 - \\dfrac{5}{5n + 2}\\right) = \\dfrac{c}{5n + 2}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $1 - \\dfrac{5}{7} = \\dfrac{2}{7}$ and the right side is $\\dfrac{c}{5 \\cdot 1 + 2} = \\dfrac{c}{7}$, so $c = 2$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $\\left(1 - \\dfrac{5}{7}\\right)\\left(1 - \\dfrac{5}{12}\\right)\\left(1 - \\dfrac{5}{17}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 2}\\right) = \\dfrac{2}{5k + 2}$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 2$."
                },
                {
                  "step": "Then $\\left(1 - \\dfrac{5}{7}\\right)\\left(1 - \\dfrac{5}{12}\\right)\\left(1 - \\dfrac{5}{17}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 2}\\right)\\left(1 - \\dfrac{5}{5k + 7}\\right) = \\dfrac{2}{5k + 2}\\left(1 - \\dfrac{5}{5k + 7}\\right)$.",
                  "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $5(k + 1) + 2 = 5k + 7$."
                },
                {
                  "step": "$1 - \\dfrac{5}{5k + 7} = \\dfrac{5k + 2}{5k + 7}$",
                  "reason": "Single fraction: $1$ is written as $\\dfrac{5k + 7}{5k + 7}$."
                },
                {
                  "step": "$\\dfrac{2}{5k + 2} \\cdot \\dfrac{5k + 2}{5k + 7} = \\dfrac{2}{5k + 7}$",
                  "reason": "Cancelling a common factor: $5k + 2$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\left(1 - \\dfrac{5}{7}\\right)\\left(1 - \\dfrac{5}{12}\\right)\\left(1 - \\dfrac{5}{17}\\right) \\cdots \\left(1 - \\dfrac{5}{5k + 2}\\right)\\left(1 - \\dfrac{5}{5k + 7}\\right) = \\dfrac{2}{5(k + 1) + 2}$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $5(k + 1) + 2 = 5k + 7$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 2$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $\\left(1 - \\dfrac{7}{12}\\right)\\left(1 - \\dfrac{7}{19}\\right)\\left(1 - \\dfrac{7}{26}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 5}\\right) = \\dfrac{c}{7n + 5}$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the number $c$ for which $\\left(1 - \\dfrac{7}{12}\\right)\\left(1 - \\dfrac{7}{19}\\right)\\left(1 - \\dfrac{7}{26}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 5}\\right) = \\dfrac{c}{7n + 5}$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\left(1 - \\dfrac{7}{12}\\right)\\left(1 - \\dfrac{7}{19}\\right)\\left(1 - \\dfrac{7}{26}\\right) \\cdots \\left(1 - \\dfrac{7}{7n + 5}\\right) = \\dfrac{c}{7n + 5}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $1 - \\dfrac{7}{12} = \\dfrac{5}{12}$ and the right side is $\\dfrac{c}{7 \\cdot 1 + 5} = \\dfrac{c}{12}$, so $c = 5$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $\\left(1 - \\dfrac{7}{12}\\right)\\left(1 - \\dfrac{7}{19}\\right)\\left(1 - \\dfrac{7}{26}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 5}\\right) = \\dfrac{5}{7k + 5}$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 5$."
                },
                {
                  "step": "Then $\\left(1 - \\dfrac{7}{12}\\right)\\left(1 - \\dfrac{7}{19}\\right)\\left(1 - \\dfrac{7}{26}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 5}\\right)\\left(1 - \\dfrac{7}{7k + 12}\\right) = \\dfrac{5}{7k + 5}\\left(1 - \\dfrac{7}{7k + 12}\\right)$.",
                  "reason": "Multiplying both sides by the same number: the next factor is the factor for $n = k + 1$, with $7(k + 1) + 5 = 7k + 12$."
                },
                {
                  "step": "$1 - \\dfrac{7}{7k + 12} = \\dfrac{7k + 5}{7k + 12}$",
                  "reason": "Single fraction: $1$ is written as $\\dfrac{7k + 12}{7k + 12}$."
                },
                {
                  "step": "$\\dfrac{5}{7k + 5} \\cdot \\dfrac{7k + 5}{7k + 12} = \\dfrac{5}{7k + 12}$",
                  "reason": "Cancelling a common factor: $7k + 5$ is positive, so it is not $0$."
                },
                {
                  "step": "So $\\left(1 - \\dfrac{7}{12}\\right)\\left(1 - \\dfrac{7}{19}\\right)\\left(1 - \\dfrac{7}{26}\\right) \\cdots \\left(1 - \\dfrac{7}{7k + 5}\\right)\\left(1 - \\dfrac{7}{7k + 12}\\right) = \\dfrac{5}{7(k + 1) + 5}$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 7, with $7(k + 1) + 5 = 7k + 12$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 5$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 8."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $15 \\cdot 1! + 39 \\cdot 2! + 81 \\cdot 3! + \\dots + (9n^2 - 3n + 9) \\cdot {n!} = 3\\left((3n - 1)(n + 1)! + 1\\right)$ for every whole number $n \\ge 1$.",
            "lines": [
              {
                "step": "Prove that $15 \\cdot 1! + 39 \\cdot 2! + 81 \\cdot 3! + \\dots + (9n^2 - 3n + 9) \\cdot {n!} = 3\\left((3n - 1)(n + 1)! + 1\\right)$ for every whole number $n \\ge 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $15 \\cdot 1! + 39 \\cdot 2! + 81 \\cdot 3! + \\dots + (9n^2 - 3n + 9) \\cdot {n!} = 3\\left((3n - 1)(n + 1)! + 1\\right)$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 1$ the left side is $15 \\cdot 1! = 15$ and the right side is $3\\left(2 \\cdot 2! + 1\\right) = 15$.",
                "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $15 \\cdot 1! + 39 \\cdot 2! + 81 \\cdot 3! + \\dots + (9k^2 - 3k + 9) \\cdot {k!} = 3\\left((3k - 1)(k + 1)! + 1\\right)$ for a whole number $k \\ge 1$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $15 \\cdot 1! + 39 \\cdot 2! + 81 \\cdot 3! + \\dots + (9k^2 - 3k + 9) \\cdot {k!} + 3(3k^2 + 5k + 5) \\cdot (k + 1)! = 3\\left((3k - 1)(k + 1)! + 1\\right) + 3(3k^2 + 5k + 5) \\cdot (k + 1)!$.",
                "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $9(k + 1)^2 - 3(k + 1) + 9 = 3(3k^2 + 5k + 5)$."
              },
              {
                "step": "$3\\left((3k - 1)(k + 1)! + 1\\right) + 3(3k^2 + 5k + 5) \\cdot (k + 1)! = 3\\left((3k^2 + 8k + 4)(k + 1)! + 1\\right)$",
                "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(3k - 1) + (3k^2 + 5k + 5) = 3k^2 + 8k + 4$."
              },
              {
                "step": "$3\\left((3k^2 + 8k + 4)(k + 1)! + 1\\right) = 3\\left((k + 2)(3k + 2)(k + 1)! + 1\\right)$",
                "reason": "Factoring a quadratic: multiplying out $(k + 2)(3k + 2)$ gives $3k^2 + 8k + 4$."
              },
              {
                "step": "$3\\left((k + 2)(3k + 2)(k + 1)! + 1\\right) = 3\\left((3k + 2)(k + 2)! + 1\\right)$",
                "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
              },
              {
                "step": "So $15 \\cdot 1! + 39 \\cdot 2! + 81 \\cdot 3! + \\dots + (9k^2 - 3k + 9) \\cdot {k!} + 3(3k^2 + 5k + 5) \\cdot (k + 1)! = 3\\left((3(k + 1) - 1)((k + 1) + 1)! + 1\\right)$, the statement for $n = k + 1$.",
                "reason": "Inductive step: by lines 5 to 8, with $3(k + 1) - 1 = 3k + 2$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $15 \\cdot 1! + 39 \\cdot 2! + 81 \\cdot 3! + \\dots + (9n^2 - 3n + 9) \\cdot {n!} = 3\\left((3n - 1)(n + 1)! + 1\\right)$ for every whole number $n \\ge 1$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which $20 \\cdot 1! + 46 \\cdot 2! + 84 \\cdot 3! + \\dots + (6n^2 + 8n + 6) \\cdot {n!} = c\\left((3n + 4)(n + 1)! - 4\\right)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the number $c$ for which $20 \\cdot 1! + 46 \\cdot 2! + 84 \\cdot 3! + \\dots + (6n^2 + 8n + 6) \\cdot {n!} = c\\left((3n + 4)(n + 1)! - 4\\right)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $20 \\cdot 1! + 46 \\cdot 2! + 84 \\cdot 3! + \\dots + (6n^2 + 8n + 6) \\cdot {n!} = c\\left((3n + 4)(n + 1)! - 4\\right)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $20 \\cdot 1! = 20$ and the right side is $c\\left(7 \\cdot 2! - 4\\right) = 10c$, so $c = 2$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $20 \\cdot 1! + 46 \\cdot 2! + 84 \\cdot 3! + \\dots + (6k^2 + 8k + 6) \\cdot {k!} = 2\\left((3k + 4)(k + 1)! - 4\\right)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 2$."
                },
                {
                  "step": "Then $20 \\cdot 1! + 46 \\cdot 2! + 84 \\cdot 3! + \\dots + (6k^2 + 8k + 6) \\cdot {k!} + 2(3k^2 + 10k + 10) \\cdot (k + 1)! = 2\\left((3k + 4)(k + 1)! - 4\\right) + 2(3k^2 + 10k + 10) \\cdot (k + 1)!$.",
                  "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $6(k + 1)^2 + 8(k + 1) + 6 = 2(3k^2 + 10k + 10)$."
                },
                {
                  "step": "$2\\left((3k + 4)(k + 1)! - 4\\right) + 2(3k^2 + 10k + 10) \\cdot (k + 1)! = 2\\left((3k^2 + 13k + 14)(k + 1)! - 4\\right)$",
                  "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(3k + 4) + (3k^2 + 10k + 10) = 3k^2 + 13k + 14$."
                },
                {
                  "step": "$2\\left((3k^2 + 13k + 14)(k + 1)! - 4\\right) = 2\\left((k + 2)(3k + 7)(k + 1)! - 4\\right)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 2)(3k + 7)$ gives $3k^2 + 13k + 14$."
                },
                {
                  "step": "$2\\left((k + 2)(3k + 7)(k + 1)! - 4\\right) = 2\\left((3k + 7)(k + 2)! - 4\\right)$",
                  "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
                },
                {
                  "step": "So $20 \\cdot 1! + 46 \\cdot 2! + 84 \\cdot 3! + \\dots + (6k^2 + 8k + 6) \\cdot {k!} + 2(3k^2 + 10k + 10) \\cdot (k + 1)! = 2\\left((3(k + 1) + 4)((k + 1) + 1)! - 4\\right)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8, with $3(k + 1) + 4 = 3k + 7$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 2$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $30 \\cdot 1! + 65 \\cdot 2! + 110 \\cdot 3! + \\dots + (5n^2 + 20n + 5) \\cdot {n!} = c\\left((n + 4)(n + 1)! - 4\\right)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the number $c$ for which $30 \\cdot 1! + 65 \\cdot 2! + 110 \\cdot 3! + \\dots + (5n^2 + 20n + 5) \\cdot {n!} = c\\left((n + 4)(n + 1)! - 4\\right)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $30 \\cdot 1! + 65 \\cdot 2! + 110 \\cdot 3! + \\dots + (5n^2 + 20n + 5) \\cdot {n!} = c\\left((n + 4)(n + 1)! - 4\\right)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $30 \\cdot 1! = 30$ and the right side is $c\\left(5 \\cdot 2! - 4\\right) = 6c$, so $c = 5$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $30 \\cdot 1! + 65 \\cdot 2! + 110 \\cdot 3! + \\dots + (5k^2 + 20k + 5) \\cdot {k!} = 5\\left((k + 4)(k + 1)! - 4\\right)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 5$."
                },
                {
                  "step": "Then $30 \\cdot 1! + 65 \\cdot 2! + 110 \\cdot 3! + \\dots + (5k^2 + 20k + 5) \\cdot {k!} + 5(k^2 + 6k + 6) \\cdot (k + 1)! = 5\\left((k + 4)(k + 1)! - 4\\right) + 5(k^2 + 6k + 6) \\cdot (k + 1)!$.",
                  "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $5(k + 1)^2 + 20(k + 1) + 5 = 5(k^2 + 6k + 6)$."
                },
                {
                  "step": "$5\\left((k + 4)(k + 1)! - 4\\right) + 5(k^2 + 6k + 6) \\cdot (k + 1)! = 5\\left((k^2 + 7k + 10)(k + 1)! - 4\\right)$",
                  "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(k + 4) + (k^2 + 6k + 6) = k^2 + 7k + 10$."
                },
                {
                  "step": "$5\\left((k^2 + 7k + 10)(k + 1)! - 4\\right) = 5\\left((k + 2)(k + 5)(k + 1)! - 4\\right)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 2)(k + 5)$ gives $k^2 + 7k + 10$."
                },
                {
                  "step": "$5\\left((k + 2)(k + 5)(k + 1)! - 4\\right) = 5\\left((k + 5)(k + 2)! - 4\\right)$",
                  "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
                },
                {
                  "step": "So $30 \\cdot 1! + 65 \\cdot 2! + 110 \\cdot 3! + \\dots + (5k^2 + 20k + 5) \\cdot {k!} + 5(k^2 + 6k + 6) \\cdot (k + 1)! = 5\\left(((k + 1) + 4)((k + 1) + 1)! - 4\\right)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8, with $(k + 1) + 4 = k + 5$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 5$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $44 \\cdot 1! + 100 \\cdot 2! + 180 \\cdot 3! + \\dots + (12n^2 + 20n + 12) \\cdot {n!} = c\\left((3n + 5)(n + 1)! - 5\\right)$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the number $c$ for which $44 \\cdot 1! + 100 \\cdot 2! + 180 \\cdot 3! + \\dots + (12n^2 + 20n + 12) \\cdot {n!} = c\\left((3n + 5)(n + 1)! - 5\\right)$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $44 \\cdot 1! + 100 \\cdot 2! + 180 \\cdot 3! + \\dots + (12n^2 + 20n + 12) \\cdot {n!} = c\\left((3n + 5)(n + 1)! - 5\\right)$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $44 \\cdot 1! = 44$ and the right side is $c\\left(8 \\cdot 2! - 5\\right) = 11c$, so $c = 4$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, and it holds for this one value of $c$."
                },
                {
                  "step": "Assume that $44 \\cdot 1! + 100 \\cdot 2! + 180 \\cdot 3! + \\dots + (12k^2 + 20k + 12) \\cdot {k!} = 4\\left((3k + 5)(k + 1)! - 5\\right)$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 4$."
                },
                {
                  "step": "Then $44 \\cdot 1! + 100 \\cdot 2! + 180 \\cdot 3! + \\dots + (12k^2 + 20k + 12) \\cdot {k!} + 4(3k^2 + 11k + 11) \\cdot (k + 1)! = 4\\left((3k + 5)(k + 1)! - 5\\right) + 4(3k^2 + 11k + 11) \\cdot (k + 1)!$.",
                  "reason": "Adding the same number to both sides: the next term is the term for $n = k + 1$, and its first factor is $12(k + 1)^2 + 20(k + 1) + 12 = 4(3k^2 + 11k + 11)$."
                },
                {
                  "step": "$4\\left((3k + 5)(k + 1)! - 5\\right) + 4(3k^2 + 11k + 11) \\cdot (k + 1)! = 4\\left((3k^2 + 14k + 16)(k + 1)! - 5\\right)$",
                  "reason": "Collecting like terms: the two terms with the factor $(k + 1)!$ are added, and $(3k + 5) + (3k^2 + 11k + 11) = 3k^2 + 14k + 16$."
                },
                {
                  "step": "$4\\left((3k^2 + 14k + 16)(k + 1)! - 5\\right) = 4\\left((k + 2)(3k + 8)(k + 1)! - 5\\right)$",
                  "reason": "Factoring a quadratic: multiplying out $(k + 2)(3k + 8)$ gives $3k^2 + 14k + 16$."
                },
                {
                  "step": "$4\\left((k + 2)(3k + 8)(k + 1)! - 5\\right) = 4\\left((3k + 8)(k + 2)! - 5\\right)$",
                  "reason": "Factorial, from arithmetic: $(k + 2) \\cdot (k + 1)! = (k + 2)!$, the product of the whole numbers from $1$ to $k + 2$."
                },
                {
                  "step": "So $44 \\cdot 1! + 100 \\cdot 2! + 180 \\cdot 3! + \\dots + (12k^2 + 20k + 12) \\cdot {k!} + 4(3k^2 + 11k + 11) \\cdot (k + 1)! = 4\\left((3(k + 1) + 5)((k + 1) + 1)! - 5\\right)$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8, with $3(k + 1) + 5 = 3k + 8$ and $(k + 1) + 1 = k + 2$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So the statement holds for every whole number $n \\ge 1$, and $c = 4$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t211-k3",
      "forms": [
        {
          "example": {
            "problem": "Prove that $5^n > 9n + 588$ for every whole number $n \\ge 4$.",
            "lines": [
              {
                "step": "Prove that $5^n > 9n + 588$ for every whole number $n \\ge 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $5^n > 9n + 588$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 4$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 4$ the left side is $5^4 = 625$ and the right side is $9 \\cdot 4 + 588 = 624$, and $625 > 624$.",
                "reason": "Base case: the statement holds for $n = 4$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $5^k > 9k + 588$ for a whole number $k \\ge 4$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $5^{k + 1} > 5(9k + 588)$.",
                "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $5$, and $5 \\cdot 5^k = 5^{k + 1}$ by the product law."
              },
              {
                "step": "$5(9k + 588) = (9k + 597) + (36k + 2343)$",
                "reason": "Multiplying out and collecting like terms: both sides are $45k + 2940$."
              },
              {
                "step": "The number $36k + 2343$ is at least $2487$, which is positive.",
                "reason": "Multiplying by a positive number and adding the same number: $k \\ge 4$ gives $36k \\ge 144$, and adding $2343$ to both sides gives $36k + 2343 \\ge 2487$."
              },
              {
                "step": "So $5(9k + 588) > 9k + 597$.",
                "reason": "Adding the same number: $9k + 597$ is added to both sides of $36k + 2343 > 0$, which holds by line 7, and the left side is then $5(9k + 588)$ by line 6."
              },
              {
                "step": "So $5^{k + 1} > 9k + 597$.",
                "reason": "Transitivity, from arithmetic: line 5 and then line 8."
              },
              {
                "step": "This is the statement for $n = k + 1$, since $9(k + 1) + 588 = 9k + 597$.",
                "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $5^n > 9n + 588$ for every whole number $n \\ge 4$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest whole number $c$ for which $2^n > 3n + c$ for every whole number $n \\ge 6$.",
              "form": "Answer as an integer.",
              "answer": "45",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $2^n > 3n + c$ for every whole number $n \\ge 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $2^n > 3n + c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 6$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 6$ the left side is $2^6 = 64$ and the right side is $3 \\cdot 6 + c = 18 + c$, so the statement for $n = 6$ holds for $c = 45$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 6$, the least $n$ of the claim, has to hold, so $c$ is at most $45$; the rest of the proof takes $c = 45$."
                },
                {
                  "step": "Assume that $2^k > 3k + 45$ for a whole number $k \\ge 6$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 45$."
                },
                {
                  "step": "Then $2^{k + 1} > 2(3k + 45)$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $2$, and $2 \\cdot 2^k = 2^{k + 1}$ by the product law."
                },
                {
                  "step": "$2(3k + 45) = (3k + 48) + (3k + 42)$",
                  "reason": "Multiplying out and collecting like terms: both sides are $6k + 90$."
                },
                {
                  "step": "The number $3k + 42$ is at least $60$, which is positive.",
                  "reason": "Multiplying by a positive number and adding the same number: $k \\ge 6$ gives $3k \\ge 18$, and adding $42$ to both sides gives $3k + 42 \\ge 60$."
                },
                {
                  "step": "So $2(3k + 45) > 3k + 48$.",
                  "reason": "Adding the same number: $3k + 48$ is added to both sides of $3k + 42 > 0$, which holds by line 7, and the left side is then $2(3k + 45)$ by line 6."
                },
                {
                  "step": "So $2^{k + 1} > 3k + 48$.",
                  "reason": "Transitivity, from arithmetic: line 5 and then line 8."
                },
                {
                  "step": "This is the statement for $n = k + 1$, since $3(k + 1) + 45 = 3k + 48$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $2^n > 3n + 45$ for every whole number $n \\ge 6$, and the greatest such whole number is $c = 45$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $4^n > 3n + c$ for every whole number $n \\ge 4$.",
              "form": "Answer as an integer.",
              "answer": "243",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $4^n > 3n + c$ for every whole number $n \\ge 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $4^n > 3n + c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 4$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 4$ the left side is $4^4 = 256$ and the right side is $3 \\cdot 4 + c = 12 + c$, so the statement for $n = 4$ holds for $c = 243$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 4$, the least $n$ of the claim, has to hold, so $c$ is at most $243$; the rest of the proof takes $c = 243$."
                },
                {
                  "step": "Assume that $4^k > 3k + 243$ for a whole number $k \\ge 4$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 243$."
                },
                {
                  "step": "Then $4^{k + 1} > 4(3k + 243)$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $4$, and $4 \\cdot 4^k = 4^{k + 1}$ by the product law."
                },
                {
                  "step": "$4(3k + 243) = (3k + 246) + (9k + 726)$",
                  "reason": "Multiplying out and collecting like terms: both sides are $12k + 972$."
                },
                {
                  "step": "The number $9k + 726$ is at least $762$, which is positive.",
                  "reason": "Multiplying by a positive number and adding the same number: $k \\ge 4$ gives $9k \\ge 36$, and adding $726$ to both sides gives $9k + 726 \\ge 762$."
                },
                {
                  "step": "So $4(3k + 243) > 3k + 246$.",
                  "reason": "Adding the same number: $3k + 246$ is added to both sides of $9k + 726 > 0$, which holds by line 7, and the left side is then $4(3k + 243)$ by line 6."
                },
                {
                  "step": "So $4^{k + 1} > 3k + 246$.",
                  "reason": "Transitivity, from arithmetic: line 5 and then line 8."
                },
                {
                  "step": "This is the statement for $n = k + 1$, since $3(k + 1) + 243 = 3k + 246$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $4^n > 3n + 243$ for every whole number $n \\ge 4$, and the greatest such whole number is $c = 243$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $3^n > 5n + c$ for every whole number $n \\ge 4$.",
              "form": "Answer as an integer.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $3^n > 5n + c$ for every whole number $n \\ge 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $3^n > 5n + c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 4$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 4$ the left side is $3^4 = 81$ and the right side is $5 \\cdot 4 + c = 20 + c$, so the statement for $n = 4$ holds for $c = 60$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 4$, the least $n$ of the claim, has to hold, so $c$ is at most $60$; the rest of the proof takes $c = 60$."
                },
                {
                  "step": "Assume that $3^k > 5k + 60$ for a whole number $k \\ge 4$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 60$."
                },
                {
                  "step": "Then $3^{k + 1} > 3(5k + 60)$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $3$, and $3 \\cdot 3^k = 3^{k + 1}$ by the product law."
                },
                {
                  "step": "$3(5k + 60) = (5k + 65) + (10k + 115)$",
                  "reason": "Multiplying out and collecting like terms: both sides are $15k + 180$."
                },
                {
                  "step": "The number $10k + 115$ is at least $155$, which is positive.",
                  "reason": "Multiplying by a positive number and adding the same number: $k \\ge 4$ gives $10k \\ge 40$, and adding $115$ to both sides gives $10k + 115 \\ge 155$."
                },
                {
                  "step": "So $3(5k + 60) > 5k + 65$.",
                  "reason": "Adding the same number: $5k + 65$ is added to both sides of $10k + 115 > 0$, which holds by line 7, and the left side is then $3(5k + 60)$ by line 6."
                },
                {
                  "step": "So $3^{k + 1} > 5k + 65$.",
                  "reason": "Transitivity, from arithmetic: line 5 and then line 8."
                },
                {
                  "step": "This is the statement for $n = k + 1$, since $5(k + 1) + 60 = 5k + 65$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $3^n > 5n + 60$ for every whole number $n \\ge 4$, and the greatest such whole number is $c = 60$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $2^n > 6n^2$ for every whole number $n \\ge 9$.",
            "lines": [
              {
                "step": "Prove that $2^n > 6n^2$ for every whole number $n \\ge 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $2^n > 6n^2$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 9$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 9$ the left side is $2^9 = 512$ and the right side is $6 \\cdot 9^2 = 486$, and $512 > 486$.",
                "reason": "Base case: the statement holds for $n = 9$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $2^k > 6k^2$ for a whole number $k \\ge 9$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $2^{k + 1} > 12k^2$.",
                "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $2$, and $2 \\cdot 2^k = 2^{k + 1}$ by the product law."
              },
              {
                "step": "$12k^2 = 6(k + 1)^2 + 6(k^2 - 2k - 1)$",
                "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $12k^2$."
              },
              {
                "step": "The number $k^2 - 2k - 1$ is at least $62$, which is positive.",
                "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 9$ and $k - 2 \\ge 7$ give $k(k - 2) \\ge 63$, and $k^2 - 2k - 1 = k(k - 2) - 1$."
              },
              {
                "step": "So $12k^2 > 6(k + 1)^2$.",
                "reason": "Adding the same number: $6(k + 1)^2$ is added to both sides of $6(k^2 - 2k - 1) > 0$, which holds by line 7 since $6$ is positive, and the left side is then $12k^2$ by line 6."
              },
              {
                "step": "So $2^{k + 1} > 6(k + 1)^2$.",
                "reason": "Transitivity, from arithmetic: line 5 and then line 8."
              },
              {
                "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
                "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $2^n > 6n^2$ for every whole number $n \\ge 9$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest whole number $c$ for which $3^n > cn^2$ for every whole number $n \\ge 6$.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $3^n > cn^2$ for every whole number $n \\ge 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $3^n > cn^2$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 6$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 6$ the left side is $3^6 = 729$ and the right side is $c \\cdot 6^2 = 36c$, so the statement for $n = 6$ holds for $c = 20$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 6$, the least $n$ of the claim, has to hold, so $c$ is at most $20$; the rest of the proof takes $c = 20$."
                },
                {
                  "step": "Assume that $3^k > 20k^2$ for a whole number $k \\ge 6$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 20$."
                },
                {
                  "step": "Then $3^{k + 1} > 60k^2$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $3$, and $3 \\cdot 3^k = 3^{k + 1}$ by the product law."
                },
                {
                  "step": "$60k^2 = 20(k + 1)^2 + 20(2k^2 - 2k - 1)$",
                  "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $60k^2$."
                },
                {
                  "step": "The number $2k^2 - 2k - 1$ is at least $59$, which is positive.",
                  "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 6$ and $2k - 2 \\ge 10$ give $k(2k - 2) \\ge 60$, and $2k^2 - 2k - 1 = k(2k - 2) - 1$."
                },
                {
                  "step": "So $60k^2 > 20(k + 1)^2$.",
                  "reason": "Adding the same number: $20(k + 1)^2$ is added to both sides of $20(2k^2 - 2k - 1) > 0$, which holds by line 7 since $20$ is positive, and the left side is then $60k^2$ by line 6."
                },
                {
                  "step": "So $3^{k + 1} > 20(k + 1)^2$.",
                  "reason": "Transitivity, from arithmetic: line 5 and then line 8."
                },
                {
                  "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $3^n > 20n^2$ for every whole number $n \\ge 6$, and the greatest such whole number is $c = 20$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $5^n > cn^2$ for every whole number $n \\ge 2$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $5^n > cn^2$ for every whole number $n \\ge 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $5^n > cn^2$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 2$ the left side is $5^2 = 25$ and the right side is $c \\cdot 2^2 = 4c$, so the statement for $n = 2$ holds for $c = 6$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 2$, the least $n$ of the claim, has to hold, so $c$ is at most $6$; the rest of the proof takes $c = 6$."
                },
                {
                  "step": "Assume that $5^k > 6k^2$ for a whole number $k \\ge 2$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 6$."
                },
                {
                  "step": "Then $5^{k + 1} > 30k^2$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $5$, and $5 \\cdot 5^k = 5^{k + 1}$ by the product law."
                },
                {
                  "step": "$30k^2 = 6(k + 1)^2 + 6(4k^2 - 2k - 1)$",
                  "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $30k^2$."
                },
                {
                  "step": "The number $4k^2 - 2k - 1$ is at least $11$, which is positive.",
                  "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 2$ and $4k - 2 \\ge 6$ give $k(4k - 2) \\ge 12$, and $4k^2 - 2k - 1 = k(4k - 2) - 1$."
                },
                {
                  "step": "So $30k^2 > 6(k + 1)^2$.",
                  "reason": "Adding the same number: $6(k + 1)^2$ is added to both sides of $6(4k^2 - 2k - 1) > 0$, which holds by line 7 since $6$ is positive, and the left side is then $30k^2$ by line 6."
                },
                {
                  "step": "So $5^{k + 1} > 6(k + 1)^2$.",
                  "reason": "Transitivity, from arithmetic: line 5 and then line 8."
                },
                {
                  "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $5^n > 6n^2$ for every whole number $n \\ge 2$, and the greatest such whole number is $c = 6$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $2^n > cn^2$ for every whole number $n \\ge 7$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $2^n > cn^2$ for every whole number $n \\ge 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $2^n > cn^2$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 7$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 7$ the left side is $2^7 = 128$ and the right side is $c \\cdot 7^2 = 49c$, so the statement for $n = 7$ holds for $c = 2$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 7$, the least $n$ of the claim, has to hold, so $c$ is at most $2$; the rest of the proof takes $c = 2$."
                },
                {
                  "step": "Assume that $2^k > 2k^2$ for a whole number $k \\ge 7$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 2$."
                },
                {
                  "step": "Then $2^{k + 1} > 4k^2$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $2$, and $2 \\cdot 2^k = 2^{k + 1}$ by the product law."
                },
                {
                  "step": "$4k^2 = 2(k + 1)^2 + 2(k^2 - 2k - 1)$",
                  "reason": "Square of a binomial: $(k + 1)^2 = k^2 + 2k + 1$, so both sides are $4k^2$."
                },
                {
                  "step": "The number $k^2 - 2k - 1$ is at least $34$, which is positive.",
                  "reason": "Multiplying two inequalities of positive numbers and adding the same number: $k \\ge 7$ and $k - 2 \\ge 5$ give $k(k - 2) \\ge 35$, and $k^2 - 2k - 1 = k(k - 2) - 1$."
                },
                {
                  "step": "So $4k^2 > 2(k + 1)^2$.",
                  "reason": "Adding the same number: $2(k + 1)^2$ is added to both sides of $2(k^2 - 2k - 1) > 0$, which holds by line 7 since $2$ is positive, and the left side is then $4k^2$ by line 6."
                },
                {
                  "step": "So $2^{k + 1} > 2(k + 1)^2$.",
                  "reason": "Transitivity, from arithmetic: line 5 and then line 8."
                },
                {
                  "step": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $2^n > 2n^2$ for every whole number $n \\ge 7$, and the greatest such whole number is $c = 2$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 10."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $(n + 2)! > 14 \\cdot 2^n$ for every whole number $n \\ge 3$.",
            "lines": [
              {
                "step": "Prove that $(n + 2)! > 14 \\cdot 2^n$ for every whole number $n \\ge 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $(n + 2)! > 14 \\cdot 2^n$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 3$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 3$ the left side is $5! = 120$ and the right side is $14 \\cdot 2^3 = 112$, and $120 > 112$.",
                "reason": "Base case: the statement holds for $n = 3$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $(k + 2)! > 14 \\cdot 2^k$ for a whole number $k \\ge 3$.",
                "reason": "Inductive assumption: the statement for $n = k$."
              },
              {
                "step": "Then $(k + 3) \\cdot (k + 2)! > (k + 3) \\cdot 14 \\cdot 2^k$.",
                "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 3$."
              },
              {
                "step": "Also $(k + 3) \\cdot 14 \\cdot 2^k > 2 \\cdot 14 \\cdot 2^k$.",
                "reason": "Multiplying by a positive number: $k \\ge 3$ gives $k + 3 > 2$, and both sides are multiplied by $14 \\cdot 2^k$."
              },
              {
                "step": "Here $(k + 3) \\cdot (k + 2)! = (k + 3)!$ and $2 \\cdot 14 \\cdot 2^k = 14 \\cdot 2^{k + 1}$.",
                "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $2 \\cdot 2^k = 2^{k + 1}$."
              },
              {
                "step": "So $(k + 3)! > 14 \\cdot 2^{k + 1}$.",
                "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
              },
              {
                "step": "This is the statement for $n = k + 1$, since $(k + 1) + 2 = k + 3$.",
                "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $(n + 2)! > 14 \\cdot 2^n$ for every whole number $n \\ge 3$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest whole number $c$ for which $(n + 2)! > c \\cdot 4^n$ for every whole number $n \\ge 4$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $(n + 2)! > c \\cdot 4^n$ for every whole number $n \\ge 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $(n + 2)! > c \\cdot 4^n$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 4$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 4$ the left side is $6! = 720$ and the right side is $c \\cdot 4^4 = 256c$, so the statement for $n = 4$ holds for $c = 2$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 4$, the least $n$ of the claim, has to hold, so $c$ is at most $2$; the rest of the proof takes $c = 2$."
                },
                {
                  "step": "Assume that $(k + 2)! > 2 \\cdot 4^k$ for a whole number $k \\ge 4$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 2$."
                },
                {
                  "step": "Then $(k + 3) \\cdot (k + 2)! > (k + 3) \\cdot 2 \\cdot 4^k$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 3$."
                },
                {
                  "step": "Also $(k + 3) \\cdot 2 \\cdot 4^k > 4 \\cdot 2 \\cdot 4^k$.",
                  "reason": "Multiplying by a positive number: $k \\ge 4$ gives $k + 3 > 4$, and both sides are multiplied by $2 \\cdot 4^k$."
                },
                {
                  "step": "Here $(k + 3) \\cdot (k + 2)! = (k + 3)!$ and $4 \\cdot 2 \\cdot 4^k = 2 \\cdot 4^{k + 1}$.",
                  "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $4 \\cdot 4^k = 4^{k + 1}$."
                },
                {
                  "step": "So $(k + 3)! > 2 \\cdot 4^{k + 1}$.",
                  "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
                },
                {
                  "step": "This is the statement for $n = k + 1$, since $(k + 1) + 2 = k + 3$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $(n + 2)! > 2 \\cdot 4^n$ for every whole number $n \\ge 4$, and the greatest such whole number is $c = 2$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $(n + 2)! > c \\cdot 2^n$ for every whole number $n \\ge 2$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $(n + 2)! > c \\cdot 2^n$ for every whole number $n \\ge 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $(n + 2)! > c \\cdot 2^n$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 2$ the left side is $4! = 24$ and the right side is $c \\cdot 2^2 = 4c$, so the statement for $n = 2$ holds for $c = 5$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 2$, the least $n$ of the claim, has to hold, so $c$ is at most $5$; the rest of the proof takes $c = 5$."
                },
                {
                  "step": "Assume that $(k + 2)! > 5 \\cdot 2^k$ for a whole number $k \\ge 2$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 5$."
                },
                {
                  "step": "Then $(k + 3) \\cdot (k + 2)! > (k + 3) \\cdot 5 \\cdot 2^k$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 3$."
                },
                {
                  "step": "Also $(k + 3) \\cdot 5 \\cdot 2^k > 2 \\cdot 5 \\cdot 2^k$.",
                  "reason": "Multiplying by a positive number: $k \\ge 2$ gives $k + 3 > 2$, and both sides are multiplied by $5 \\cdot 2^k$."
                },
                {
                  "step": "Here $(k + 3) \\cdot (k + 2)! = (k + 3)!$ and $2 \\cdot 5 \\cdot 2^k = 5 \\cdot 2^{k + 1}$.",
                  "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $2 \\cdot 2^k = 2^{k + 1}$."
                },
                {
                  "step": "So $(k + 3)! > 5 \\cdot 2^{k + 1}$.",
                  "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
                },
                {
                  "step": "This is the statement for $n = k + 1$, since $(k + 1) + 2 = k + 3$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $(n + 2)! > 5 \\cdot 2^n$ for every whole number $n \\ge 2$, and the greatest such whole number is $c = 5$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $(n + 2)! > c \\cdot 3^n$ for every whole number $n \\ge 3$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $(n + 2)! > c \\cdot 3^n$ for every whole number $n \\ge 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $(n + 2)! > c \\cdot 3^n$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 3$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 3$ the left side is $5! = 120$ and the right side is $c \\cdot 3^3 = 27c$, so the statement for $n = 3$ holds for $c = 4$ and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 3$, the least $n$ of the claim, has to hold, so $c$ is at most $4$; the rest of the proof takes $c = 4$."
                },
                {
                  "step": "Assume that $(k + 2)! > 4 \\cdot 3^k$ for a whole number $k \\ge 3$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 4$."
                },
                {
                  "step": "Then $(k + 3) \\cdot (k + 2)! > (k + 3) \\cdot 4 \\cdot 3^k$.",
                  "reason": "Multiplying by a positive number: both sides of line 4 are multiplied by $k + 3$."
                },
                {
                  "step": "Also $(k + 3) \\cdot 4 \\cdot 3^k > 3 \\cdot 4 \\cdot 3^k$.",
                  "reason": "Multiplying by a positive number: $k \\ge 3$ gives $k + 3 > 3$, and both sides are multiplied by $4 \\cdot 3^k$."
                },
                {
                  "step": "Here $(k + 3) \\cdot (k + 2)! = (k + 3)!$ and $3 \\cdot 4 \\cdot 3^k = 4 \\cdot 3^{k + 1}$.",
                  "reason": "Factorial, from arithmetic, and the product law: the next whole number times a factorial is the next factorial, and $3 \\cdot 3^k = 3^{k + 1}$."
                },
                {
                  "step": "So $(k + 3)! > 4 \\cdot 3^{k + 1}$.",
                  "reason": "Transitivity, from arithmetic: lines 5 and 6 in turn, each side rewritten by line 7."
                },
                {
                  "step": "This is the statement for $n = k + 1$, since $(k + 1) + 2 = k + 3$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $(n + 2)! > 4 \\cdot 3^n$ for every whole number $n \\ge 3$, and the greatest such whole number is $c = 4$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{4}{7}$ for every whole number $n \\ge 2$.",
            "lines": [
              {
                "step": "Prove that $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{4}{7}$ for every whole number $n \\ge 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{4}{7}$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 2$ the left side is $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{7}{12} = \\dfrac{49}{84}$, the right side is $\\dfrac{4}{7} = \\dfrac{48}{84}$, and $\\dfrac{49}{84} > \\dfrac{48}{84}$.",
                "reason": "Base case: the statement holds for $n = 2$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $\\dfrac{1}{k + 1} + \\dfrac{1}{k + 2} + \\dots + \\dfrac{1}{2k} > \\dfrac{4}{7}$ for a whole number $k \\ge 2$.",
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
                "step": "So $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{2k + 2} > \\dfrac{4}{7}$.",
                "reason": "Transitivity, from arithmetic: line 9 and then line 4."
              },
              {
                "step": "This is the statement for $n = k + 1$, with $k + 1$ in each place of $n$.",
                "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{4}{7}$ for every whole number $n \\ge 2$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 11."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest whole number $c$ for which $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{4n} > \\dfrac{c}{7}$ for every whole number $n \\ge 2$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{4n} > \\dfrac{c}{7}$ for every whole number $n \\ge 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{4n} > \\dfrac{c}{7}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 2$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 2$ the left side is $\\dfrac{1}{3} + \\dfrac{1}{4} + \\dfrac{1}{5} + \\dfrac{1}{6} + \\dfrac{1}{7} + \\dfrac{1}{8} = \\dfrac{341}{280}$ and the right side is $\\dfrac{c}{7} = \\dfrac{40c}{280}$, so the statement for $n = 2$ holds for $c = 8$, where $40 \\cdot 8 = 320$ is less than $341$, and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 2$, the least $n$ of the claim, has to hold, so $c$ is at most $8$; the rest of the proof takes $c = 8$."
                },
                {
                  "step": "Assume that $\\dfrac{1}{k + 1} + \\dfrac{1}{k + 2} + \\dots + \\dfrac{1}{4k} > \\dfrac{8}{7}$ for a whole number $k \\ge 2$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 8$."
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
                  "step": "So $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{4k + 4} > \\dfrac{8}{7}$.",
                  "reason": "Transitivity, from arithmetic: line 9 and then line 4."
                },
                {
                  "step": "This is the statement for $n = k + 1$, with $k + 1$ in each place of $n$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{4n} > \\dfrac{8}{7}$ for every whole number $n \\ge 2$, and the greatest such whole number is $c = 8$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 11."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{3n} > \\dfrac{c}{5}$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{3n} > \\dfrac{c}{5}$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{3n} > \\dfrac{c}{5}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the left side is $\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{5}{6} = \\dfrac{25}{30}$ and the right side is $\\dfrac{c}{5} = \\dfrac{6c}{30}$, so the statement for $n = 1$ holds for $c = 4$, where $6 \\cdot 4 = 24$ is less than $25$, and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, so $c$ is at most $4$; the rest of the proof takes $c = 4$."
                },
                {
                  "step": "Assume that $\\dfrac{1}{k + 1} + \\dfrac{1}{k + 2} + \\dots + \\dfrac{1}{3k} > \\dfrac{4}{5}$ for a whole number $k \\ge 1$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 4$."
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
                  "step": "So $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{3k + 3} > \\dfrac{4}{5}$.",
                  "reason": "Transitivity, from arithmetic: line 9 and then line 4."
                },
                {
                  "step": "This is the statement for $n = k + 1$, with $k + 1$ in each place of $n$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{3n} > \\dfrac{4}{5}$ for every whole number $n \\ge 1$, and the greatest such whole number is $c = 4$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 11."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{c}{8}$ for every whole number $n \\ge 4$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{c}{8}$ for every whole number $n \\ge 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{c}{8}$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 4$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 4$ the left side is $\\dfrac{1}{5} + \\dfrac{1}{6} + \\dfrac{1}{7} + \\dfrac{1}{8} = \\dfrac{533}{840}$ and the right side is $\\dfrac{c}{8} = \\dfrac{105c}{840}$, so the statement for $n = 4$ holds for $c = 5$, where $105 \\cdot 5 = 525$ is less than $533$, and for no greater whole number.",
                  "reason": "Base case: the statement for $n = 4$, the least $n$ of the claim, has to hold, so $c$ is at most $5$; the rest of the proof takes $c = 5$."
                },
                {
                  "step": "Assume that $\\dfrac{1}{k + 1} + \\dfrac{1}{k + 2} + \\dots + \\dfrac{1}{2k} > \\dfrac{5}{8}$ for a whole number $k \\ge 4$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 5$."
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
                  "step": "So $\\dfrac{1}{k + 2} + \\dfrac{1}{k + 3} + \\dots + \\dfrac{1}{2k + 2} > \\dfrac{5}{8}$.",
                  "reason": "Transitivity, from arithmetic: line 9 and then line 4."
                },
                {
                  "step": "This is the statement for $n = k + 1$, with $k + 1$ in each place of $n$.",
                  "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $\\dfrac{1}{n + 1} + \\dfrac{1}{n + 2} + \\dots + \\dfrac{1}{2n} > \\dfrac{5}{8}$ for every whole number $n \\ge 4$, and the greatest such whole number is $c = 5$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 11."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t211-k4",
      "forms": [
        {
          "example": {
            "problem": "Prove that $7^n + 3n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
            "lines": [
              {
                "step": "Prove that $7^n + 3n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the statement for $n$ be: the number $7^n + 3n - 1$ is a multiple of $9$.",
                "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
              },
              {
                "step": "At $n = 1$ the number is $7 + 3 - 1 = 9$, which is $9 \\cdot 1$.",
                "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
              },
              {
                "step": "Assume that $7^k + 3k - 1 = 9m$ for a whole number $k \\ge 1$ and a whole number $m$.",
                "reason": "Inductive assumption: the statement for $n = k$, written out by the definition of divides, from arithmetic."
              },
              {
                "step": "$7^{k + 1} + 3(k + 1) - 1 = 7 \\cdot 7^k + 3(k + 1) - 1$",
                "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $7^{k + 1} = 7 \\cdot 7^k$."
              },
              {
                "step": "$7 \\cdot 7^k + 3(k + 1) - 1 = 7(7^k + 3k - 1) - 18k + 9$",
                "reason": "The distributive law, from arithmetic: $7(7^k + 3k - 1) = 7 \\cdot 7^k + 21k - 7$, and $21k - 7 - 18k + 9 = 3k + 2$, which is $3(k + 1) - 1$."
              },
              {
                "step": "$7(7^k + 3k - 1) - 18k + 9 = 7 \\cdot 9m - 18k + 9$",
                "reason": "Inductive assumption: by line 4, $9m$ stands in the place of $7^k + 3k - 1$."
              },
              {
                "step": "$7 \\cdot 9m - 18k + 9 = 9(7m - 2k + 1)$",
                "reason": "Taking out a common factor: $9$ is a factor of each term."
              },
              {
                "step": "So $7^{k + 1} + 3(k + 1) - 1$ is a multiple of $9$, the statement for $n = k + 1$.",
                "reason": "Inductive step: by lines 5 to 8 the number is $9$ times the integer $7m - 2k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
              },
              {
                "step": "So $7^n + 3n - 1$ is a multiple of $9$ for every whole number $n \\ge 1$.",
                "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest whole number $c$ for which $5^n + 4n - 1$ is a multiple of $c$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $5^n + 4n - 1$ is a multiple of $c$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be: the number $5^n + 4n - 1$ is a multiple of $c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the number is $5 + 4 - 1 = 8$, so $c$ divides $8$, and the greatest whole number that divides $8$ is $8$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, so $c$ is at most $8$; the rest of the proof takes $c = 8$."
                },
                {
                  "step": "Assume that $5^k + 4k - 1 = 8m$ for a whole number $k \\ge 1$ and a whole number $m$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 8$, written out by the definition of divides, from arithmetic."
                },
                {
                  "step": "$5^{k + 1} + 4(k + 1) - 1 = 5 \\cdot 5^k + 4(k + 1) - 1$",
                  "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $5^{k + 1} = 5 \\cdot 5^k$."
                },
                {
                  "step": "$5 \\cdot 5^k + 4(k + 1) - 1 = 5(5^k + 4k - 1) - 16k + 8$",
                  "reason": "The distributive law, from arithmetic: $5(5^k + 4k - 1) = 5 \\cdot 5^k + 20k - 5$, and $20k - 5 - 16k + 8 = 4k + 3$, which is $4(k + 1) - 1$."
                },
                {
                  "step": "$5(5^k + 4k - 1) - 16k + 8 = 5 \\cdot 8m - 16k + 8$",
                  "reason": "Inductive assumption: by line 4, $8m$ stands in the place of $5^k + 4k - 1$."
                },
                {
                  "step": "$5 \\cdot 8m - 16k + 8 = 8(5m - 2k + 1)$",
                  "reason": "Taking out a common factor: $8$ is a factor of each term."
                },
                {
                  "step": "So $5^{k + 1} + 4(k + 1) - 1$ is a multiple of $8$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8 the number is $8$ times the integer $5m - 2k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $5^n + 4n - 1$ is a multiple of $8$ for every whole number $n \\ge 1$, and the greatest such whole number is $c = 8$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $6^n + 20n - 1$ is a multiple of $c$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "25",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $6^n + 20n - 1$ is a multiple of $c$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be: the number $6^n + 20n - 1$ is a multiple of $c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the number is $6 + 20 - 1 = 25$, so $c$ divides $25$, and the greatest whole number that divides $25$ is $25$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, so $c$ is at most $25$; the rest of the proof takes $c = 25$."
                },
                {
                  "step": "Assume that $6^k + 20k - 1 = 25m$ for a whole number $k \\ge 1$ and a whole number $m$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 25$, written out by the definition of divides, from arithmetic."
                },
                {
                  "step": "$6^{k + 1} + 20(k + 1) - 1 = 6 \\cdot 6^k + 20(k + 1) - 1$",
                  "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $6^{k + 1} = 6 \\cdot 6^k$."
                },
                {
                  "step": "$6 \\cdot 6^k + 20(k + 1) - 1 = 6(6^k + 20k - 1) - 100k + 25$",
                  "reason": "The distributive law, from arithmetic: $6(6^k + 20k - 1) = 6 \\cdot 6^k + 120k - 6$, and $120k - 6 - 100k + 25 = 20k + 19$, which is $20(k + 1) - 1$."
                },
                {
                  "step": "$6(6^k + 20k - 1) - 100k + 25 = 6 \\cdot 25m - 100k + 25$",
                  "reason": "Inductive assumption: by line 4, $25m$ stands in the place of $6^k + 20k - 1$."
                },
                {
                  "step": "$6 \\cdot 25m - 100k + 25 = 25(6m - 4k + 1)$",
                  "reason": "Taking out a common factor: $25$ is a factor of each term."
                },
                {
                  "step": "So $6^{k + 1} + 20(k + 1) - 1$ is a multiple of $25$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8 the number is $25$ times the integer $6m - 4k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $6^n + 20n - 1$ is a multiple of $25$ for every whole number $n \\ge 1$, and the greatest such whole number is $c = 25$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $c$ for which $9^n + 8n - 1$ is a multiple of $c$ for every whole number $n \\ge 1$.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find the greatest whole number $c$ for which $9^n + 8n - 1$ is a multiple of $c$ for every whole number $n \\ge 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the statement for $n$ be: the number $9^n + 8n - 1$ is a multiple of $c$.",
                  "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
                },
                {
                  "step": "At $n = 1$ the number is $9 + 8 - 1 = 16$, so $c$ divides $16$, and the greatest whole number that divides $16$ is $16$.",
                  "reason": "Base case: the statement for $n = 1$, the least $n$ of the claim, has to hold, so $c$ is at most $16$; the rest of the proof takes $c = 16$."
                },
                {
                  "step": "Assume that $9^k + 8k - 1 = 16m$ for a whole number $k \\ge 1$ and a whole number $m$.",
                  "reason": "Inductive assumption: the statement for $n = k$, with $c = 16$, written out by the definition of divides, from arithmetic."
                },
                {
                  "step": "$9^{k + 1} + 8(k + 1) - 1 = 9 \\cdot 9^k + 8(k + 1) - 1$",
                  "reason": "Product law: the power with the exponent $k + 1$ is its base times the power with the exponent $k$, $9^{k + 1} = 9 \\cdot 9^k$."
                },
                {
                  "step": "$9 \\cdot 9^k + 8(k + 1) - 1 = 9(9^k + 8k - 1) - 64k + 16$",
                  "reason": "The distributive law, from arithmetic: $9(9^k + 8k - 1) = 9 \\cdot 9^k + 72k - 9$, and $72k - 9 - 64k + 16 = 8k + 7$, which is $8(k + 1) - 1$."
                },
                {
                  "step": "$9(9^k + 8k - 1) - 64k + 16 = 9 \\cdot 16m - 64k + 16$",
                  "reason": "Inductive assumption: by line 4, $16m$ stands in the place of $9^k + 8k - 1$."
                },
                {
                  "step": "$9 \\cdot 16m - 64k + 16 = 16(9m - 4k + 1)$",
                  "reason": "Taking out a common factor: $16$ is a factor of each term."
                },
                {
                  "step": "So $9^{k + 1} + 8(k + 1) - 1$ is a multiple of $16$, the statement for $n = k + 1$.",
                  "reason": "Inductive step: by lines 5 to 8 the number is $16$ times the integer $9m - 4k + 1$; the statement for $n = k$ has given the statement for $n = k + 1$."
                },
                {
                  "step": "So $9^n + 8n - 1$ is a multiple of $16$ for every whole number $n \\ge 1$, and the greatest such whole number is $c = 16$.",
                  "reason": "Induction: the base case is line 3 and the inductive step is lines 4 to 9."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t211-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working from the inductive step of a proof by induction that $1 + 7 + 13 + \\dots + (6n - 5) = n(3n - 2)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $6(k + 1) - 5$, to the right side of the inductive assumption, and each later line should equal the line before it.",
            "given": [
              "$k(3k - 2) + 6(k + 1) - 5$",
              "$k(3k - 2) + 6k + 1$",
              "$3k^2 + 2k + 6k + 1$",
              "$3k^2 + 8k + 1$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working from the inductive step of a proof by induction that $1 + 7 + 13 + \\dots + (6n - 5) = n(3n - 2)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $6(k + 1) - 5$, to the right side of the inductive assumption, and each later line should equal the line before it.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Inductive assumption: line 1 is its right side with the next term added, and each line before the wrong one follows from the line before it by a rule that holds."
              },
              {
                "step": "Line 3 multiplies out $k(3k - 2)$ of line 2 as $3k^2 + 2k$.",
                "reason": "A sign lost: $k$ times $-2$ is $-2k$, and the term has lost its minus sign."
              },
              {
                "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                "reason": "The first wrong line is the first line that does not follow from the line before it."
              },
              {
                "step": "Line 3 written right is $3k^2 - 2k + 6k + 1$.",
                "reason": "Multiplying out: each term of the bracket is multiplied by $k$ and keeps its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $7 + 15 + 23 + \\dots + (8n - 1) = n(4n + 3)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $8(k + 1) - 1$, to the right side of the inductive assumption, and each later line should equal the line before it.",
              "given": [
                "$k(4k + 3) + 8(k + 1) - 1$",
                "$k(4k + 3) + 8k + 9$",
                "$4k^2 + 3k + 8k + 9$",
                "$4k^2 + 11k + 9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: k*(4*k+3)+8*k+7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working from the inductive step of a proof by induction that $7 + 15 + 23 + \\dots + (8n - 1) = n(4n + 3)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $8(k + 1) - 1$, to the right side of the inductive assumption, and each later line should equal the line before it.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Inductive assumption: line 1 is its right side with the next term added, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 writes $8(k + 1) - 1$ of line 1 as $8k + 9$.",
                  "reason": "A sign lost: $8(k + 1) - 1 = 8k + 8 - 1$, and the number $1$ has lost its minus sign; with the sign kept, $8 - 1 = 7$."
                },
                {
                  "step": "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 2 written right is $k(4k + 3) + 8k + 7$.",
                  "reason": "Multiplying out: $8(k + 1) = 8k + 8$, and the number $1$ is then subtracted."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $2 + 16 + 30 + \\dots + (14n - 12) = n(7n - 5)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $14(k + 1) - 12$, to the right side of the inductive assumption, and each later line should equal the line before it.",
              "given": [
                "$k(7k - 5) + 14(k + 1) - 12$",
                "$k(7k - 5) + 14k + 2$",
                "$7k^2 - 5k + 14k + 2$",
                "$7k^2 + 19k + 2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 7*k^2+9*k+2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working from the inductive step of a proof by induction that $2 + 16 + 30 + \\dots + (14n - 12) = n(7n - 5)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $14(k + 1) - 12$, to the right side of the inductive assumption, and each later line should equal the line before it.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Inductive assumption: line 1 is its right side with the next term added, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 collects $-5k$ and $14k$ of line 3 as $19k$.",
                  "reason": "A sign lost: the term $-5k$ keeps its minus sign, so the two terms add to $9k$."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 4 written right is $7k^2 + 9k + 2$.",
                  "reason": "Collecting like terms: the terms in $k$ are added with their signs."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working from the inductive step of a proof by induction that $5 + 17 + 29 + \\dots + (12n - 7) = n(6n - 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $12(k + 1) - 7$, to the right side of the inductive assumption, and each later line should equal the line before it.",
              "given": [
                "$k(6k - 1) + 12(k + 1) - 7$",
                "$k(6k - 1) + 12k + 5$",
                "$6k^2 + k + 12k + 5$",
                "$6k^2 + 13k + 5$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 6*k^2-k+12*k+5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working from the inductive step of a proof by induction that $5 + 17 + 29 + \\dots + (12n - 7) = n(6n - 1)$ for every whole number $n \\ge 1$, and write that line right. Line 1 adds the next term, $12(k + 1) - 7$, to the right side of the inductive assumption, and each later line should equal the line before it.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Inductive assumption: line 1 is its right side with the next term added, and each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 multiplies out $k(6k - 1)$ of line 2 as $6k^2 + k$.",
                  "reason": "A sign lost: $k$ times $-1$ is $-k$, and the term has lost its minus sign."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the line before it."
                },
                {
                  "step": "Line 3 written right is $6k^2 - k + 12k + 5$.",
                  "reason": "Multiplying out: each term of the bracket is multiplied by $k$ and keeps its sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t211-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $10$, from $10$ to $10n$, is $5$ times $n$ times $n + 1$.",
            "lines": [
              {
                "step": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $10$, from $10$ to $10n$, is $5$ times $n$ times $n + 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In symbols the sentence says $10 + 20 + 30 + \\dots + 10n = 5n(n + 1)$ for every whole number $n \\ge 1$.",
                "reason": "Writing a sentence as an equation: the multiples are added in their order, \"times\" is a product, and the word \"is\" marks the place of the equals sign."
              },
              {
                "step": "The base case is the statement for $n = 1$.",
                "reason": "Base case: $1$ is the least whole number the sentence names."
              },
              {
                "step": "$10 = 5 \\cdot 1 \\cdot (1 + 1)$",
                "reason": "Substituting a value: $1$ goes into each place of $n$ on the right, and the sum on the left then has its first number alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the numbers $6i + 1$ for $i$ from $1$ to $n$ add up to $n$ times $3n + 4$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "6*1+1 = 1*(3*1+4)",
              "lines": [
                {
                  "step": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the numbers $6i + 1$ for $i$ from $1$ to $n$ add up to $n$ times $3n + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $7 + 13 + 19 + \\dots + (6n + 1) = n(3n + 4)$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: the numbers are written out for $i = 1$, $2$, $3$ and so on to $n$ and added, and the words \"add up to\" mark the place of the equals sign."
                },
                {
                  "step": "The base case is the statement for $n = 1$.",
                  "reason": "Base case: $1$ is the least whole number the sentence names."
                },
                {
                  "step": "$6 \\cdot 1 + 1 = 1 \\cdot (3 \\cdot 1 + 4)$",
                  "reason": "Substituting a value: $1$ goes into each place of $n$ on the right, and the sum on the left then has its first number alone."
                }
              ]
            },
            {
              "prompt": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $11$ and go up in steps of $8$ is $n$ times $4n + 7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "11 = 1*(4*1+7)",
              "lines": [
                {
                  "step": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $11$ and go up in steps of $8$ is $n$ times $4n + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $11 + 19 + 27 + \\dots + (8n + 3) = n(4n + 7)$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: each number is the one before it plus the step, \"times\" is a product, and the word \"is\" marks the place of the equals sign."
                },
                {
                  "step": "The base case is the statement for $n = 1$.",
                  "reason": "Base case: $1$ is the least whole number the sentence names."
                },
                {
                  "step": "$11 = 1 \\cdot (4 \\cdot 1 + 7)$",
                  "reason": "Substituting a value: $1$ goes into each place of $n$ on the right, and the sum on the left then has its first number alone."
                }
              ]
            },
            {
              "prompt": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the powers of $6$ from $6^1$ to $6^n$ add up to a fifth of $6^{n + 1} - 6$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "6^1 = (6^(1+1)-6)/5",
              "lines": [
                {
                  "step": "Write the base case of a proof by induction of this sentence as an equation, with the first number of the sum alone on the left as the sentence gives it, $1$ written in each place of $n$ on the right, and nothing worked out: For every whole number $n \\ge 1$, the powers of $6$ from $6^1$ to $6^n$ add up to a fifth of $6^{n + 1} - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $6 + 6^2 + 6^3 + \\dots + 6^n = \\dfrac{6^{n + 1} - 6}{5}$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: the powers are added in their order, the fraction named is taken of the whole difference, and the words \"add up to\" mark the place of the equals sign."
                },
                {
                  "step": "The base case is the statement for $n = 1$.",
                  "reason": "Base case: $1$ is the least whole number the sentence names."
                },
                {
                  "step": "$6^1 = \\dfrac{6^{1 + 1} - 6}{5}$",
                  "reason": "Substituting a value: $1$ goes into each place of $n$ on the right, and the sum on the left then has its first number alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the numbers $10i - 3$ for $i$ from $1$ to $n$ add up to $n$ times $5n + 2$.",
            "lines": [
              {
                "step": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the numbers $10i - 3$ for $i$ from $1$ to $n$ add up to $n$ times $5n + 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In symbols the sentence says $7 + 17 + 27 + \\dots + (10n - 3) = n(5n + 2)$ for every whole number $n \\ge 1$.",
                "reason": "Writing a sentence as an equation: the numbers are written out for $i = 1$, $2$, $3$ and so on to $n$ and added, and the words \"add up to\" mark the place of the equals sign."
              },
              {
                "step": "The inductive assumption is the statement for $n = k$, which is $7 + 17 + 27 + \\dots + (10k - 3) = k(5k + 2)$.",
                "reason": "Inductive assumption: $k$ goes into each place of $n$."
              },
              {
                "step": "$y = k(5k + 2)$",
                "reason": "Substituting a value: $y$ stands for the left side, the sum of the first $k$ numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $13$ and go up in steps of $10$ is $n$ times $5n + 8$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = k*(5*k+8)",
              "lines": [
                {
                  "step": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $13$ and go up in steps of $10$ is $n$ times $5n + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $13 + 23 + 33 + \\dots + (10n + 3) = n(5n + 8)$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: each number is the one before it plus the step, \"times\" is a product, and the word \"is\" marks the place of the equals sign."
                },
                {
                  "step": "The inductive assumption is the statement for $n = k$, which is $13 + 23 + 33 + \\dots + (10k + 3) = k(5k + 8)$.",
                  "reason": "Inductive assumption: $k$ goes into each place of $n$."
                },
                {
                  "step": "$y = k(5k + 8)$",
                  "reason": "Substituting a value: $y$ stands for the left side, the sum of the first $k$ numbers."
                }
              ]
            },
            {
              "prompt": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $12$, from $12$ to $12n$, is $6$ times $n$ times $n + 1$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6*k*(k+1)",
              "lines": [
                {
                  "step": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $12$, from $12$ to $12n$, is $6$ times $n$ times $n + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $12 + 24 + 36 + \\dots + 12n = 6n(n + 1)$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: the multiples are added in their order, \"times\" is a product, and the word \"is\" marks the place of the equals sign."
                },
                {
                  "step": "The inductive assumption is the statement for $n = k$, which is $12 + 24 + 36 + \\dots + 12k = 6k(k + 1)$.",
                  "reason": "Inductive assumption: $k$ goes into each place of $n$."
                },
                {
                  "step": "$y = 6k(k + 1)$",
                  "reason": "Substituting a value: $y$ stands for the left side, the sum of the first $k$ numbers."
                }
              ]
            },
            {
              "prompt": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the powers of $7$ from $7^1$ to $7^n$ add up to a sixth of $7^{n + 1} - 7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (7^(k+1)-7)/6",
              "lines": [
                {
                  "step": "Write the inductive assumption for $n = k$ of a proof by induction of this sentence as an equation, with $y$ for the sum of the first $k$ numbers alone on the left: For every whole number $n \\ge 1$, the powers of $7$ from $7^1$ to $7^n$ add up to a sixth of $7^{n + 1} - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $7 + 7^2 + 7^3 + \\dots + 7^n = \\dfrac{7^{n + 1} - 7}{6}$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: the powers are added in their order, the fraction named is taken of the whole difference, and the words \"add up to\" mark the place of the equals sign."
                },
                {
                  "step": "The inductive assumption is the statement for $n = k$, which is $7 + 7^2 + 7^3 + \\dots + 7^k = \\dfrac{7^{k + 1} - 7}{6}$.",
                  "reason": "Inductive assumption: $k$ goes into each place of $n$."
                },
                {
                  "step": "$y = \\dfrac{7^{k + 1} - 7}{6}$",
                  "reason": "Substituting a value: $y$ stands for the left side, the sum of the first $k$ numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $9$ and go up in steps of $8$ is $n$ times $4n + 5$.",
            "lines": [
              {
                "step": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the $n$ numbers that start at $9$ and go up in steps of $8$ is $n$ times $4n + 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In symbols the sentence says $9 + 17 + 25 + \\dots + (8n + 1) = n(4n + 5)$ for every whole number $n \\ge 1$.",
                "reason": "Writing a sentence as an equation: each number is the one before it plus the step, \"times\" is a product, and the word \"is\" marks the place of the equals sign."
              },
              {
                "step": "The claim of the inductive step is the statement for $n = k + 1$: the sum of the first $k + 1$ numbers is $(k + 1)(4(k + 1) + 5)$.",
                "reason": "Inductive step: $k + 1$ goes into each place of $n$."
              },
              {
                "step": "The sum of the first $k + 1$ numbers is $y + 9 + 8k$.",
                "reason": "Term from the sum: the sum of the first $k + 1$ numbers is the sum of the first $k$, which is $y$, plus the number in place $k + 1$, which is $9 + 8k$."
              },
              {
                "step": "$y + 9 + 8k = (k + 1)(4(k + 1) + 5)$",
                "reason": "Substituting a value: the expression of line 4 goes into the left side of the statement of line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $14$, from $14$ to $14n$, is $7$ times $n$ times $n + 1$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y+14*(k+1) = 7*(k+1)*(k+2)",
              "lines": [
                {
                  "step": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the sum of the first $n$ multiples of $14$, from $14$ to $14n$, is $7$ times $n$ times $n + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $14 + 28 + 42 + \\dots + 14n = 7n(n + 1)$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: the multiples are added in their order, \"times\" is a product, and the word \"is\" marks the place of the equals sign."
                },
                {
                  "step": "The claim of the inductive step is the statement for $n = k + 1$: the sum of the first $k + 1$ numbers is $7(k + 1)((k + 1) + 1)$.",
                  "reason": "Inductive step: $k + 1$ goes into each place of $n$."
                },
                {
                  "step": "The sum of the first $k + 1$ numbers is $y + 14(k + 1)$.",
                  "reason": "Term from the sum: the sum of the first $k + 1$ numbers is the sum of the first $k$, which is $y$, plus the number in place $k + 1$, which is $14(k + 1)$."
                },
                {
                  "step": "$y + 14(k + 1) = 7(k + 1)((k + 1) + 1)$",
                  "reason": "Substituting a value: the expression of line 4 goes into the left side of the statement of line 3."
                }
              ]
            },
            {
              "prompt": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the numbers $8i - 7$ for $i$ from $1$ to $n$ add up to $n$ times $4n - 3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y+8*(k+1)-7 = (k+1)*(4*(k+1)-3)",
              "lines": [
                {
                  "step": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the numbers $8i - 7$ for $i$ from $1$ to $n$ add up to $n$ times $4n - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $1 + 9 + 17 + \\dots + (8n - 7) = n(4n - 3)$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: the numbers are written out for $i = 1$, $2$, $3$ and so on to $n$ and added, and the words \"add up to\" mark the place of the equals sign."
                },
                {
                  "step": "The claim of the inductive step is the statement for $n = k + 1$: the sum of the first $k + 1$ numbers is $(k + 1)(4(k + 1) - 3)$.",
                  "reason": "Inductive step: $k + 1$ goes into each place of $n$."
                },
                {
                  "step": "The sum of the first $k + 1$ numbers is $y + 8(k + 1) - 7$.",
                  "reason": "Term from the sum: the sum of the first $k + 1$ numbers is the sum of the first $k$, which is $y$, plus the number in place $k + 1$, which is $8(k + 1) - 7$."
                },
                {
                  "step": "$y + 8(k + 1) - 7 = (k + 1)(4(k + 1) - 3)$",
                  "reason": "Substituting a value: the expression of line 4 goes into the left side of the statement of line 3."
                }
              ]
            },
            {
              "prompt": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the powers of $3$ from $3^1$ to $3^n$ add up to half of $3^{n + 1} - 3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y+3^(k+1) = (3^(k+2)-3)/2",
              "lines": [
                {
                  "step": "Write the claim for $n = k + 1$ of a proof by induction of this sentence as an equation in $y$ and $k$, where $y$ stands for the sum of the first $k$ numbers and the left side is $y$ plus the next number: For every whole number $n \\ge 1$, the powers of $3$ from $3^1$ to $3^n$ add up to half of $3^{n + 1} - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols the sentence says $3 + 3^2 + 3^3 + \\dots + 3^n = \\dfrac{3^{n + 1} - 3}{2}$ for every whole number $n \\ge 1$.",
                  "reason": "Writing a sentence as an equation: the powers are added in their order, the fraction named is taken of the whole difference, and the words \"add up to\" mark the place of the equals sign."
                },
                {
                  "step": "The claim of the inductive step is the statement for $n = k + 1$: the sum of the first $k + 1$ numbers is $\\dfrac{3^{(k + 1) + 1} - 3}{2}$.",
                  "reason": "Inductive step: $k + 1$ goes into each place of $n$."
                },
                {
                  "step": "The sum of the first $k + 1$ numbers is $y + 3^{k + 1}$.",
                  "reason": "Term from the sum: the sum of the first $k + 1$ numbers is the sum of the first $k$, which is $y$, plus the number in place $k + 1$, which is $3^{k + 1}$."
                },
                {
                  "step": "$y + 3^{k + 1} = \\dfrac{3^{(k + 1) + 1} - 3}{2}$",
                  "reason": "Substituting a value: the expression of line 4 goes into the left side of the statement of line 3."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [
    {
      "id": "t211-p1",
      "method": "induction",
      "statement": "For every whole number $n \\ge 1$, $1 + 2 + 2^2 + \\dots + 2^n = 2^{n+1} - 1$.",
      "idea": "The statement for $n = 1$ is checked by working out both sides. Adding the next power of $2$ to both sides of the statement for $n = k$ turns its left side into the left side for $n = k + 1$, and its right side then holds the same power twice, which is the next power of $2$.",
      "lines": [
        {
          "line": "Let the statement for $n$ be $1 + 2 + 2^2 + \\dots + 2^n = 2^{n+1} - 1$.",
          "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
        },
        {
          "line": "At $n = 1$ the left side is $1 + 2 = 3$ and the right side is $2^2 - 1 = 3$.",
          "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
        },
        {
          "line": "Assume that $1 + 2 + 2^2 + \\dots + 2^k = 2^{k+1} - 1$ for a whole number $k \\ge 1$.",
          "reason": "Inductive assumption: the statement for $n = k$."
        },
        {
          "line": "Then $1 + 2 + 2^2 + \\dots + 2^k + 2^{k+1} = 2^{k+1} - 1 + 2^{k+1}$.",
          "reason": "Adding the same number to both sides: the next term, $2^{k+1}$, is added to both sides of line 3."
        },
        {
          "line": "The right side is $2 \\cdot 2^{k+1} - 1$.",
          "reason": "Collecting like terms: $2^{k+1} + 2^{k+1} = 2 \\cdot 2^{k+1}$."
        },
        {
          "line": "The right side is then $2^{k+2} - 1$.",
          "reason": "Product law: $2 \\cdot 2^{k+1} = 2^{1 + (k+1)}$."
        },
        {
          "line": "So $1 + 2 + 2^2 + \\dots + 2^{k+1} = 2^{(k+1)+1} - 1$, the statement for $n = k + 1$.",
          "reason": "Inductive step: by lines 4 to 6; the statement for $n = k$ has given the statement for $n = k + 1$."
        },
        {
          "line": "Therefore $1 + 2 + 2^2 + \\dots + 2^n = 2^{n+1} - 1$ for every whole number $n \\ge 1$.",
          "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 7."
        }
      ]
    },
    {
      "id": "t211-p2",
      "method": "induction",
      "statement": "For every whole number $n \\ge 1$, $1^3 + 2^3 + \\dots + n^3 = (1 + 2 + \\dots + n)^2$.",
      "idea": "The sum in the bracket is known: it is $\\dfrac{n(n + 1)}{2}$. So the claim is a formula for the sum of the cubes, $\\dfrac{n^2(n + 1)^2}{4}$, and induction proves it: adding the next cube, $(k + 1)^3$, leaves $(k + 1)^2$ as a common factor, and what stays in the bracket is the square of $k + 2$.",
      "lines": [
        {
          "line": "In the bracket, $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$.",
          "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: the formula for the sum of the first $n$ whole numbers."
        },
        {
          "line": "So $(1 + 2 + \\dots + n)^2 = \\dfrac{(n(n + 1))^2}{4}$.",
          "reason": "Power of a quotient: the top and the bottom are squared, and $2^2 = 4$."
        },
        {
          "line": "So the right side $(1 + 2 + \\dots + n)^2$ is $\\dfrac{n^2(n + 1)^2}{4}$.",
          "reason": "Power of a product: $(n(n + 1))^2 = n^2(n + 1)^2$."
        },
        {
          "line": "Let the statement for $n$ be $1^3 + 2^3 + \\dots + n^3 = \\dfrac{n^2(n + 1)^2}{4}$.",
          "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
        },
        {
          "line": "At $n = 1$ the left side is $1^3 = 1$ and the right side is $\\dfrac{1^2 \\cdot 2^2}{4} = 1$.",
          "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
        },
        {
          "line": "Assume that $1^3 + 2^3 + \\dots + k^3 = \\dfrac{k^2(k + 1)^2}{4}$ for a whole number $k \\ge 1$.",
          "reason": "Inductive assumption: the statement for $n = k$."
        },
        {
          "line": "Then $1^3 + 2^3 + \\dots + k^3 + (k + 1)^3 = \\dfrac{k^2(k + 1)^2}{4} + (k + 1)^3$.",
          "reason": "Adding the same number to both sides: the next term, $(k + 1)^3$, is added to both sides of line 6."
        },
        {
          "line": "The right side is $\\dfrac{(k + 1)^2\\left(k^2 + 4(k + 1)\\right)}{4}$.",
          "reason": "Taking out a common factor: $\\dfrac{(k + 1)^2}{4}$ is a factor of both terms, and $(k + 1)^3 = \\dfrac{(k + 1)^2}{4} \\cdot 4(k + 1)$."
        },
        {
          "line": "The right side is then $\\dfrac{(k + 1)^2(k + 2)^2}{4}$.",
          "reason": "Square of a binomial: $k^2 + 4(k + 1) = k^2 + 4k + 4 = (k + 2)^2$."
        },
        {
          "line": "So $1^3 + 2^3 + \\dots + (k + 1)^3 = \\dfrac{(k + 1)^2((k + 1) + 1)^2}{4}$, the statement for $n = k + 1$.",
          "reason": "Inductive step: by lines 7 to 9; the statement for $n = k$ has given the statement for $n = k + 1$."
        },
        {
          "line": "So $1^3 + 2^3 + \\dots + n^3 = \\dfrac{n^2(n + 1)^2}{4}$ for every whole number $n \\ge 1$.",
          "reason": "Induction: the base case is line 5 and the inductive step is lines 6 to 10."
        },
        {
          "line": "Therefore $1^3 + 2^3 + \\dots + n^3 = (1 + 2 + \\dots + n)^2$ for every whole number $n \\ge 1$.",
          "reason": "Transitive property: by line 3 the two right sides are equal."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t211-s1",
      "method": "induction",
      "statement": "Prove that for every number $a \\ge -1$ and every whole number $n \\ge 1$, $(1 + a)^n \\ge 1 + na$. Facts it may use: Induction, Base case, Inductive assumption, Inductive step, adding the same number, multiplying by a positive number, product law, the assumptions on multiplication, multiplying out, Trivial Inequality, transitivity.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ be a number with $a \\ge -1$, and let the statement for $n$ be $(1 + a)^n \\ge 1 + na$.",
            "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
          },
          {
            "line": "At $n = 1$ both sides are $1 + a$.",
            "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
          },
          {
            "line": "Assume that $(1 + a)^k \\ge 1 + ka$ for a whole number $k \\ge 1$.",
            "reason": "Inductive assumption: the statement for $n = k$."
          },
          {
            "line": "The number $1 + a$ is $0$ or positive.",
            "reason": "Adding the same number: $1$ is added to both sides of $a \\ge -1$."
          },
          {
            "line": "Where $1 + a$ is positive, $(1 + a)^{k+1} \\ge (1 + ka)(1 + a)$.",
            "reason": "Multiplying by a positive number: both sides of line 3 are multiplied by $1 + a$, and $(1 + a)^k(1 + a) = (1 + a)^{k+1}$ by the product law."
          },
          {
            "line": "Where $1 + a = 0$, the inequality of line 5 holds as well, with both sides $0$.",
            "reason": "Assumptions on multiplication, from arithmetic: $(1 + a)^{k+1}$ and $(1 + ka)(1 + a)$ each have the factor $1 + a$."
          },
          {
            "line": "Here $(1 + ka)(1 + a) = 1 + (k + 1)a + ka^2$.",
            "reason": "Multiplying out and collecting like terms: the terms $a$ and $ka$ add to $(k + 1)a$."
          },
          {
            "line": "The number $ka^2$ is $0$ or positive.",
            "reason": "Trivial Inequality: $a^2 \\ge 0$, and $k$ is positive."
          },
          {
            "line": "So $1 + (k + 1)a + ka^2 \\ge 1 + (k + 1)a$.",
            "reason": "Adding the same number: $1 + (k + 1)a$ is added to both sides of $ka^2 \\ge 0$."
          },
          {
            "line": "So $(1 + a)^{k+1} \\ge 1 + (k + 1)a$.",
            "reason": "Transitivity, from arithmetic: lines 5 and 6, with the right side rewritten by line 7, and then line 9."
          },
          {
            "line": "This is the statement for $n = k + 1$, with $k + 1$ in the place of $n$.",
            "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
          },
          {
            "line": "Therefore $(1 + a)^n \\ge 1 + na$ for every whole number $n \\ge 1$.",
            "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 11."
          }
        ]
      }
    },
    {
      "id": "t211-s2",
      "method": "induction",
      "statement": "Prove that if $a_1, a_2, a_3, \\dots$ is an arithmetic sequence with first term $a$ and common difference $d$, then $a_n = a + (n - 1)d$ for every whole number $n \\ge 1$. Facts it may use: Induction, Base case, Inductive assumption, Inductive step, arithmetic sequence, common difference, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "Let the statement for $n$ be $a_n = a + (n - 1)d$.",
            "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
          },
          {
            "line": "At $n = 1$ the left side is $a_1 = a$ and the right side is $a + 0 \\cdot d = a$.",
            "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
          },
          {
            "line": "Assume that $a_k = a + (k - 1)d$ for a whole number $k \\ge 1$.",
            "reason": "Inductive assumption: the statement for $n = k$."
          },
          {
            "line": "Also $a_{k+1} = a_k + d$.",
            "reason": "Arithmetic sequence: each term after the first is the term before it plus the common difference."
          },
          {
            "line": "So $a_{k+1} = a + (k - 1)d + d$.",
            "reason": "Inductive assumption: by line 3, $a + (k - 1)d$ stands in the place of $a_k$."
          },
          {
            "line": "So $a_{k+1} = a + kd$.",
            "reason": "Collecting like terms: $(k - 1)d + d = kd$."
          },
          {
            "line": "This is the statement for $n = k + 1$, since $k = (k + 1) - 1$.",
            "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
          },
          {
            "line": "Therefore $a_n = a + (n - 1)d$ for every whole number $n \\ge 1$.",
            "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 7."
          }
        ]
      }
    },
    {
      "id": "t211-s3",
      "method": "induction",
      "statement": "Prove that if $a_1, a_2, a_3, \\dots$ is a geometric sequence with first term $a$ and common ratio $r$, where $r$ is not $0$, then $a_n = ar^{n-1}$ for every whole number $n \\ge 1$. Facts it may use: Induction, Base case, Inductive assumption, Inductive step, geometric sequence, common ratio, zero exponent, product law.",
      "check": {
        "proof": [
          {
            "line": "Let the statement for $n$ be $a_n = ar^{n-1}$.",
            "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
          },
          {
            "line": "At $n = 1$ the left side is $a_1 = a$ and the right side is $ar^0 = a$.",
            "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim, by the zero exponent, $r^0 = 1$."
          },
          {
            "line": "Assume that $a_k = ar^{k-1}$ for a whole number $k \\ge 1$.",
            "reason": "Inductive assumption: the statement for $n = k$."
          },
          {
            "line": "Also $a_{k+1} = a_k \\cdot r$.",
            "reason": "Geometric sequence: each term after the first is the term before it times the common ratio."
          },
          {
            "line": "So $a_{k+1} = ar^{k-1} \\cdot r$.",
            "reason": "Inductive assumption: by line 3, $ar^{k-1}$ stands in the place of $a_k$."
          },
          {
            "line": "So $a_{k+1} = ar^k$.",
            "reason": "Product law: $r^{k-1} \\cdot r = r^k$."
          },
          {
            "line": "This is the statement for $n = k + 1$, since $k = (k + 1) - 1$.",
            "reason": "Inductive step: the statement for $n = k$ has given the statement for $n = k + 1$."
          },
          {
            "line": "Therefore $a_n = ar^{n-1}$ for every whole number $n \\ge 1$.",
            "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 7."
          }
        ]
      }
    },
    {
      "id": "t211-s4",
      "method": "induction",
      "statement": "Prove that for every whole number $n \\ge 1$, $\\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\dots + \\dfrac{1}{n(n + 1)} = \\dfrac{n}{n + 1}$. Facts it may use: Induction, Base case, Inductive assumption, Inductive step, adding the same number to both sides, simplest common denominator, square of a binomial, cancelling a common factor.",
      "check": {
        "proof": [
          {
            "line": "Let the statement for $n$ be $\\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\dots + \\dfrac{1}{n(n + 1)} = \\dfrac{n}{n + 1}$.",
            "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
          },
          {
            "line": "At $n = 1$ the left side is $\\dfrac{1}{1 \\cdot 2} = \\dfrac{1}{2}$ and the right side is $\\dfrac{1}{1 + 1} = \\dfrac{1}{2}$.",
            "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim."
          },
          {
            "line": "Assume that $\\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\dots + \\dfrac{1}{k(k + 1)} = \\dfrac{k}{k + 1}$ for a whole number $k \\ge 1$.",
            "reason": "Inductive assumption: the statement for $n = k$."
          },
          {
            "line": "Then $\\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\dots + \\dfrac{1}{k(k + 1)} + \\dfrac{1}{(k + 1)(k + 2)} = \\dfrac{k}{k + 1} + \\dfrac{1}{(k + 1)(k + 2)}$.",
            "reason": "Adding the same number to both sides: the next term, $\\dfrac{1}{(k + 1)(k + 2)}$, is added to both sides of line 3."
          },
          {
            "line": "The right side is $\\dfrac{k(k + 2) + 1}{(k + 1)(k + 2)}$.",
            "reason": "Simplest common denominator: the first fraction is multiplied above and below by $k + 2$."
          },
          {
            "line": "The right side is then $\\dfrac{(k + 1)^2}{(k + 1)(k + 2)}$.",
            "reason": "Square of a binomial: $k(k + 2) + 1 = k^2 + 2k + 1 = (k + 1)^2$."
          },
          {
            "line": "The right side is then $\\dfrac{k + 1}{k + 2}$.",
            "reason": "Cancelling a common factor: $k + 1$ is positive, so it is not $0$."
          },
          {
            "line": "So the sum as far as $\\dfrac{1}{(k + 1)(k + 2)}$ is $\\dfrac{k + 1}{(k + 1) + 1}$, the statement for $n = k + 1$.",
            "reason": "Inductive step: by lines 4 to 7; the statement for $n = k$ has given the statement for $n = k + 1$."
          },
          {
            "line": "Therefore the statement holds for every whole number $n \\ge 1$.",
            "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
          }
        ]
      }
    },
    {
      "id": "t211-s5",
      "method": "induction",
      "statement": "Prove that a principal $k$ invested at $r\\%$ a year, compounded once a year, is worth $k\\left(1 + \\dfrac{r}{100}\\right)^n$ after $n$ years, for every whole number $n \\ge 1$. Here $k$ and $r$ are positive numbers, and compounding once a year multiplies the amount by $1 + \\dfrac{r}{100}$ each year. Facts it may use: Induction, Base case, Inductive assumption, Inductive step, compound interest, product law.",
      "check": {
        "proof": [
          {
            "line": "Let the statement for $n$ be: after $n$ years the amount is $k\\left(1 + \\dfrac{r}{100}\\right)^n$.",
            "reason": "Induction: the claim is one statement for each whole number $n \\ge 1$, and it is proved by a base case and an inductive step."
          },
          {
            "line": "After $1$ year the amount is $k\\left(1 + \\dfrac{r}{100}\\right)$, which is $k\\left(1 + \\dfrac{r}{100}\\right)^1$.",
            "reason": "Base case: the statement holds for $n = 1$, the least $n$ of the claim, since the first year multiplies the principal once."
          },
          {
            "line": "Assume that after $m$ years the amount is $k\\left(1 + \\dfrac{r}{100}\\right)^m$, for a whole number $m \\ge 1$.",
            "reason": "Inductive assumption: the statement for $n = m$; the letter $k$ is taken by the principal, so $m$ stands for the whole number."
          },
          {
            "line": "After $m + 1$ years the amount is $k\\left(1 + \\dfrac{r}{100}\\right)^m \\cdot \\left(1 + \\dfrac{r}{100}\\right)$.",
            "reason": "Compound interest: year $m + 1$ multiplies the amount of line 3 by $1 + \\dfrac{r}{100}$."
          },
          {
            "line": "So after $m + 1$ years the amount is $k\\left(1 + \\dfrac{r}{100}\\right)^{m+1}$, the statement for $n = m + 1$.",
            "reason": "Inductive step: by the product law the two powers of $1 + \\dfrac{r}{100}$ join; the statement for $n = m$ has given the statement for $n = m + 1$."
          },
          {
            "line": "Therefore the amount after $n$ years is $k\\left(1 + \\dfrac{r}{100}\\right)^n$ for every whole number $n \\ge 1$.",
            "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
          }
        ]
      }
    },
    {
      "id": "t211-s6",
      "method": "direct proof",
      "statement": "Prove that for every whole number $n \\ge 1$, $2^3 + 4^3 + 6^3 + \\dots + (2n)^3 = 2n^2(n + 1)^2$. Facts it may use: Sum of cubes, power of a product, Sums split and constants come out, the sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$, power of a quotient.",
      "check": {
        "proof": [
          {
            "line": "Each term is $(2i)^3 = 8i^3$, for $i$ from $1$ to $n$.",
            "reason": "Power of a product: $(2i)^3 = 2^3 \\cdot i^3$."
          },
          {
            "line": "So $2^3 + 4^3 + 6^3 + \\dots + (2n)^3 = 8(1^3 + 2^3 + \\dots + n^3)$.",
            "reason": "Sums split and constants come out: the number $8$, the same in every term, comes out of the sum."
          },
          {
            "line": "So $2^3 + 4^3 + 6^3 + \\dots + (2n)^3 = 8(1 + 2 + \\dots + n)^2$.",
            "reason": "Sum of cubes: the sum of the first $n$ cubes is the square of the sum of the first $n$ whole numbers."
          },
          {
            "line": "So $2^3 + 4^3 + 6^3 + \\dots + (2n)^3 = 8\\left(\\dfrac{n(n + 1)}{2}\\right)^2$.",
            "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the sum in the bracket."
          },
          {
            "line": "Therefore $2^3 + 4^3 + 6^3 + \\dots + (2n)^3 = 2n^2(n + 1)^2$.",
            "reason": "Power of a quotient and power of a product: $\\left(\\dfrac{n(n + 1)}{2}\\right)^2 = \\dfrac{n^2(n + 1)^2}{4}$, and $\\dfrac{8}{4} = 2$."
          }
        ]
      }
    }
  ]
}
